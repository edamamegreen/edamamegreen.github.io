(ns com.keminglabs.statetron.core
  (:refer-clojure :exclude [ancestors descendants])
  #?(:cljs (:require-macros [com.keminglabs.statetron.macros :refer [p pp]]
                            [com.keminglabs.statetron.core :refer [choice]]
                            [lonocloud.synthread :as ->]))

  (:require [datascript.core :as d]
            [clojure.set :as set]
            [clojure.string :as str]
            [taoensso.tufte :as tufte]
            #?(:clj [lonocloud.synthread :as ->])))


(defn error
  [msg]
  #?(:cljs (js/Error. msg)
     :clj (Error. msg)))

#?(:clj
   (defmacro choice
     [state-name binding & clauses]
     (assert (even? (count clauses)))

     `{:state/name ~state-name
       :choice/fn (fn ~binding
                    (cond ~@clauses
                          :else
                          (error (str "Choice '" ~state-name "' must return a state name, not nil."))))
       :transition/_from ~(vec (for [[_ to-name] (partition 2 clauses)]
                                 {:transition/to {:state/name to-name}}))}))


(def schema
  {:state/children {:db/cardinality :db.cardinality/many
                    :db/valueType :db.type/ref}
   :state/name {:db/unique :db.unique/identity}
   :transition/from {:db/valueType :db.type/ref}
   :transition/to {:db/valueType :db.type/ref}})


(def ^:private new-sc-db
  (-> (d/create-conn schema)
      d/db
      (d/db-with [{:state/name ::root}])))


(defrecord ^:private StatechartImpl
  [env
   active-leaf-names
   graph
   state-name->ancestors])


(defn env
  "A statechart's environment map"
  [sc]
  (.-env sc))


(defn- graph-states
  [graph]
  (->> (d/q '[:find ?e :where [?e :state/name _]]
            graph)
       (map #(d/entity graph (first %)))
       set))


(defn states
  [sc]
  (graph-states (.-graph sc)))


(defn transitions
  [sc]
  (->> (d/q '[:find ?e :where [?e :transition/name _]]
            (.-graph sc))
       (map #(d/entity (.-graph sc) (first %)))
       set))


(defn parent
  [state]
  (first (:state/_children state)))


;;TODO: better names on these?
(defn s
  [sc state-name]
  (or (d/entity (.-graph sc) [:state/name state-name])
      (throw (error (str "No state with name " state-name)))))


(defn t
  ([sc internal-transition-name from-state-name]
   (if-let [tid (ffirst (d/q '{:find [?t]
                               :in [$ ?transition-name ?from-name]
                               :where [[?t :transition/name ?transition-name]
                                       [?t :transition/from ?from]
                                       [?from :state/name ?from-name]
                                       [(missing? $ ?t :transition/to)]]}
                             (.-graph sc) internal-transition-name from-state-name))]
     (d/entity (.-graph sc) tid)
     (throw (error (str "No internal transition with name " internal-transition-name " from state " from-state-name)))))

  ([sc transition-name from-state-name to-state-name]
   (if-let [tid (ffirst (d/q '{:find [?t]
                               :in [$ ?transition-name ?from-name ?to-name]
                               :where [[?t :transition/name ?transition-name]
                                       [?t :transition/from ?from]
                                       [?t :transition/to ?to]
                                       [?from :state/name ?from-name]
                                       [?to :state/name ?to-name]]}
                             (.-graph sc) transition-name from-state-name to-state-name))]
     (d/entity (.-graph sc) tid)
     (throw (error (str "No transition with name " transition-name " from state " from-state-name " to state " to-state-name))))))


(defn ancestors
  "Seq of state (first) and its ancestors. Two-arity is faster."
  ([state]
   (if (nil? state)
     '()
     (if-let [p (parent state)]
       (lazy-seq (cons state (ancestors p)))
       (list state))))

  ([sc state-name]
   (get (.-state-name->ancestors sc) state-name)))


(defn descendants
  "Seq of state (first) and its descendants."
  [state]
  (if (nil? state)
    '()
    (if-let [children (:state/children state)]
      (lazy-seq (cons state (mapcat descendants children)))
      (list state))))


(defn active?
  [sc state-name]
  (boolean (or (contains? (.-active-leaf-names sc) state-name)
               (some (partial active? sc)
                     (map :state/name (:state/children (d/entity (.-graph sc) [:state/name state-name])))))))


(defn active-leaves
  [sc]
  ;; (->> (states sc)
  ;;      (filter :state/active?))
  ;; (when-let [d (first (d/seek-datoms sc :avet :state/active? true))]
  ;;   [(d/entity sc (.-e d))])
  (for [name (.-active-leaf-names sc)]
    (d/entity (.-graph sc) [:state/name name])))


(defn active-states
  [sc]
  (->> (.-active-leaf-names sc)
       (mapcat (partial ancestors sc))))


(defn default-transition
  [state]
  (->> (:transition/_from state)
       (filter #(= ::default (:transition/name %)))
       first))


(defn- least-common-ancestor
  [sc state-names]
  (if (apply = state-names)
    (second (ancestors sc (first state-names)))
    (let [shared-ancestors (apply set/intersection (map (comp set (partial ancestors sc)) state-names))]
      (->> shared-ancestors
           (sort-by (fn [s]
                      (- (count (ancestors sc (:state/name s))))))
           first))))


(defn- run-steps
  [originating-opts env event steps checker]
  (reduce (fn [env step]
            (let [[step-type x] step
                  env' (case step-type
                         ::enter
                         (if-let [enter (:state/enter x)]
                           (tufte/p step
                             (enter env event originating-opts))
                           env)

                         ::exit
                         (if-let [exit (:state/exit x)]
                           (tufte/p step
                             (exit env event originating-opts))
                           env)

                         ::transition
                         (if-let [action (:transition/action x)]
                           (tufte/p step
                             (action env event originating-opts))
                           env))]

              (when checker
                (checker env' step))

              env'))

          env steps))


(defn step-with-intermediates
  "Step statechart by `event`, returning {:steps, :sc}. Optionally provide `checker` to validate env after every intermediate step. Each step is a tagged vector of the form [::enter state] [::exit state] or [::transition t]."
  ([sc event]
   (step-with-intermediates sc event nil))

  ([sc event checker]
   (let [env (env sc)
         transitions-with-originating-state-and-guard-result
         (if (= ::start (:event/name event))
           [[(default-transition (s sc ::root)) (s sc ::root)]]
           (->> (.-active-leaf-names sc)
                (keep (fn [state-name]
                        (when-let [[t guard-result]
                                   (->> (ancestors sc state-name)
                                        (mapcat :transition/_from)
                                        (keep (fn [{:transition/keys [name guard] :as t}]
                                                (when-let [guard-result (and (= name (:event/name event))
                                                                             (if guard
                                                                               (tufte/p [::guard t]
                                                                                 (guard env event {:sc sc}))
                                                                               true))]
                                                  [t guard-result])))
                                        first)]
                          [t (s sc state-name) guard-result])))))]

     (loop [env env
            steps []
            [[t current-state guard-result] & ts] transitions-with-originating-state-and-guard-result]

       (if (nil? t)
         {:sc (assoc sc
                     :env env
                     :active-leaf-names (reduce (fn [names [step-type state]]
                                                  (-> names
                                                      (->/when-not (:state/children state)
                                                        (->/cond (= ::enter step-type)
                                                                 (conj (:state/name state))
                                                                 (= ::exit step-type)
                                                                 (disj (:state/name state))))))
                                                (:active-leaf-names sc) steps))

          :steps steps}

         (let [{:transition/keys [from to]} t
               originating-opts {:sc sc :guard-result guard-result}]
           
           (cond
             (nil? to) ;;internal transition
             (let [new-steps [[::transition t]]]
               (recur (run-steps originating-opts env event new-steps checker)
                      (into steps new-steps)
                      ts))

             :else ;;regular transition
             (let [lca (least-common-ancestor sc [(:state/name from) (:state/name to)])

                   ;;running transition before exit/enter actions is QP order; UML spec is to run exits, transitions, enters.
                   new-steps (concat [[::transition t]]
                                     (->> current-state
                                          :state/name
                                          (ancestors sc)
                                          (take-while (partial not= lca))
                                          (map (fn [s] [::exit s])))

                                     (->> (ancestors sc (:state/name to))
                                          (take-while (partial not= lca))
                                          reverse ;;enter from top down
                                          (map (fn [s] [::enter s]))))

                   new-env (run-steps originating-opts env event new-steps checker)]

               (recur new-env
                      (into steps new-steps)
                      (-> ts
                          (->/cond

                            (:state/children to)
                            (conj [(default-transition to) to])

                            (:choice/fn to)
                            (->/let [choice to
                                     to-state-name ((:choice/fn choice) new-env event originating-opts)
                                     t-out (d/entity (.-graph sc) (ffirst (d/q '{:find [?t-out]
                                                                                 :in [$ ?choice ?to-state-name]
                                                                                 :where [[?t-out :transition/from ?choice]
                                                                                         [?t-out :transition/to ?to]
                                                                                         [?to :state/name ?to-state-name]]}
                                                                               (.-graph sc) (:db/id choice) to-state-name)))]
                              (conj [t-out choice])))))))))))))


(defn step
  "Transitions statechart according to provided `event`, returning new statechart. Runs actions."
  ([sc event]
   (step sc event nil))
  ([sc event checker]
   (:sc (step-with-intermediates sc event checker))))


(defn start
  [sc]
  (step sc {:event/name ::start}))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;Creating new statechart

(defn- expand-default-transitions
  [graph]
  (d/db-with graph (->> (graph-states graph)
                        (filter :state/start?)
                        (mapcat (fn [s]
                                  [[:db.fn/retractAttribute (:db/id s) :state/start?]
                                   ;;all states w/ :state/start? have a parent, since this fn is only called after implicit root state is created.
                                   #:transition {:name ::default :from (-> s parent :db/id) :to (:db/id s)}])))))

(defn- add-root-children
  [graph]
  (let [toplevel-states (->> (graph-states graph)
                             (remove :state/_children)
                             (remove #(= ::root (:state/name %))))]

    (d/db-with graph [{:state/name ::root :state/children (map :db/id toplevel-states)}])))


(defn- explain-bad-default-transition
  [graph]
  (->> (graph-states graph)
       (filter :state/children)
       (map (fn [p]
              (let [default-transitions (->> (:transition/_from p)
                                             (filter #(= ::default (:transition/name %))))]

                (or (and (< 1 (count default-transitions))
                         (str "Multiple default transitions for parent " (:state/name p)))

                    (when-not (empty? (:transition/_to p))
                      (or (and (= 0 (count default-transitions))
                               (str "No default transition for parent " (:state/name p) ", even though it's possible to transition to this parent"))

                          (and (not (contains? (set (descendants p)) (:transition/to (first default-transitions))))
                               (str (:state/name p) " cannot have a default transition to a state that doesn't descend from it."))))))))
       (filter identity)
       first))


(defn- explain-root-must-have-default-transition
  [graph]
  (when (nil? (default-transition (d/entity graph [:state/name ::root])))
    "Implicit root state has no default transition --- maybe you forgot to create one or to mark a toplevel state as `:state/start? true`"))


(defn- explain-duplicate-transitions
  [graph]
  (when-let [name (ffirst (d/q '{:find [?name]
                                 :where [[?t1 :transition/name ?name]
                                         [?t2 :transition/name ?name]
                                         [(not= ?t1 ?t2)]
                                         [?t1 :transition/from ?from]
                                         [?t2 :transition/from ?from]
                                         [(get-else $ ?t1 :transition/to ::internal) ?to]
                                         [(get-else $ ?t2 :transition/to ::internal) ?to]]}
                               graph))]
    (str "Duplicate transition '" name "'")))


(defn statechart
  [tx]
  (let [graph (-> (d/db-with new-sc-db tx)
                  add-root-children
                  expand-default-transitions
                  (->/aside graph
                    (when-let [msg (or (explain-root-must-have-default-transition graph)
                                       (explain-bad-default-transition graph)
                                       (explain-duplicate-transitions graph))]
                      (throw (error msg)))))]

    (StatechartImpl. {} #{} graph (persistent! (reduce (fn [m s]
                                                         (assoc! m (:state/name s) (vec (ancestors s))))
                                                       (transient {})
                                                       (graph-states graph))))))




;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;Experimental helpers 'n stuff

(defn default-state?
  [s]
  (not (empty? (d/q '{:find [?t]
                      :in [$ ?s]
                      :where [[?parent :state/children ?s]
                              [?t :transition/from ?parent]
                              [?t :transition/to ?s]
                              [?t :transition/name ::default]]}
                    (d/entity-db s) (:db/id s)))))

(defn pseudostate?
  [s]
  (contains? s :choice/fn))


(defn regular-default-transition?
  "A default transition from a parent to one of its children"
  [t]
  (and (= ::default (:transition/name t))
       (= (parent (:transition/to t)) (:transition/from t))))


(defn internal-transition?
  [t]
  (and (:transition/from t)
       (nil? (:transition/to t))))


(defn available-transitions
  "Possible transitions for current statechart. Note: Transitions with guards may not actually be possible."
  [sc]
  (->> (.-active-leaf-names sc)
       (mapcat (fn [state-name]
                 (->> (ancestors sc state-name)
                      (mapcat :transition/_from)
                      (group-by :transition/name)
                      (map (fn [[_ ts]] (first ts)))
                      (remove #(= ::default (:transition/name %))))))))


(defn explore-states
  "Explore states from `sc` using provided `possible-events` fn. Returns map of :state/name to histories leading to that state."
  ([sc possible-events]
   (explore-states sc possible-events 1000))

  ([sc possible-events max-iterations]
   (loop [i 0
          results {}
          [{:keys [history sc] :as x} & xs] [{:history [] :sc sc}]]

     (cond
       (= i max-iterations)
       (do
         #?(:clj (prn "max iterations reached"))
         results)

       (nil? x)
       (do
         #?(:clj (prn "all reachable states explored"))
         results)

       :else
       (let [events (possible-events sc)]
         (if (empty? events)
           results
           (let [next-scs (for [e events]
                            (let [sc' (step sc e)]
                              {:sc sc' :history (conj history {:sc sc' :event e})}))]
             (recur (inc i)
                    ;;probably need to clean this up w/ specter or something
                    (reduce (fn [r {:keys [sc history]}]
                              (reduce (fn [r s]
                                        (update r (:state/name s) (fnil conj []) history))
                                      r (active-leaves sc)))
                            results next-scs)
                    (concat xs next-scs)))))))))
