(ns com.keminglabs.statetron.specs
  #?(:cljs (:require-macros [com.keminglabs.statetron.macros :refer [p pp]]
                            [lonocloud.synthread :as ->]))
  (:require [com.keminglabs.statetron.core :as sc]
            [clojure.data :refer [diff]]
            [clojure.spec.alpha :as s]
            [clojure.spec.test.alpha :as stest]
            [clojure.spec.gen.alpha :as gen]
            [expound.alpha :as expound]
            #?(:clj [lonocloud.synthread :as ->])))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;Event specs; multimethod so it can be extended by statetron clients.

(defmulti event-spec :event/name :default ::no-event-spec)
(defmethod event-spec ::no-event-spec [_] (s/keys))

(s/def :event/name keyword?)
(s/def ::event (s/multi-spec event-spec :event/name))

;;Spec for statetron env, which should always be a map.
;;Use `(s/keys)` rather than `map?` so that checking ::env checks all specced keys within it.
(s/def ::env (s/keys))


(defn check-statechart-specs!
  "Checks statechart transition names (and the events they imply) against the defined specs, printing out differences."
  [sc]
  (let [specified-events (->> (methods event-spec)
                              keys
                              (remove #{::no-event-spec})
                              set)

        sc-events (->> (sc/transitions sc)
                       (map :transition/name)
                       (remove #{::sc/default})
                       set)

        [unspecified unused _] (diff sc-events specified-events)]

    (when-not (empty? unspecified)
      (println "Events used in statechart, but not specified:\n")
      (doseq [e (sort unspecified)]
        (println "\t" e))
      (println))

    ;; (when-not (empty? unused)
    ;;   (println "Events specified, but not used in statechart:\n")
    ;;   (doseq [e (sort unused)]
    ;;     (println "\t" e))
    ;;   (println))
    ))


(defn sc->possible-events
  [sc]
  (for [{:transition/keys [name]} (sc/available-transitions sc)]
    (let [e {:event/name name}]
      (if-let [spec (event-spec e)]
        (merge e (gen/generate (s/gen spec)))
        e))))


(defn step->str
  [step]
  (let [[step-type x] step]
    (case step-type
      ::sc/enter
      (str "Entering state " (:state/name x))

      ::sc/exit
      (str "Exiting state " (:state/name x))

      ::sc/transition
      (if (sc/internal-transition? x)
        (str "Invoking internal transition:\n\n"
             "\t" (:transition/name x) "\n\n"
             "from\n\n"
             "\t" (-> x :transition/from :state/name) "\n\n")

        (str "Following transition:\n\n"
             "\t" (:transition/name x) "\n\n"
             "from\n\n"
             "\t" (-> x :transition/from :state/name) "\n\n"
             " to\n\n"
             "\t" (-> x :transition/to :state/name) "\n\n")))))


(defn active-spec-on-state
  "Spec given by :state/spec for active state or its closest ancestor."
  [sc]
  (->> (sc/active-leaves sc)
       (mapcat sc/ancestors)
       (keep (fn [s]
               (when-let [spec (:state/spec s)]
                 [spec s])))
       first))


(defn step
  "Like core/step, but validates that statechart `env` conforms to all specs, as well as additional specs given by :state/spec"
  [sc event]

  ;;check that event satisifies specs
  (when-let [err (s/explain-data ::event event)]
    (throw (ex-info (with-out-str (expound/printer err))
                    {:event event})))

  ;;then transition the statechart, checking env after ever intermediate step.
  (-> sc
      (sc/step event (fn [env step]
                       (when-let [err (s/explain-data ::env env)]
                         (throw (ex-info (str (step->str step)
                                              "\n"
                                              (with-out-str (expound/printer err)))
                                         {:step step})))))
      (->/aside sc
        (when-let [[spec state] (active-spec-on-state sc)]
          (when-let [err (s/explain-data spec (sc/env sc))]
            (throw (ex-info (str "Env doesn't conform to spec on state: " (:state/name state)
                                 "\n\n"
                                 (with-out-str (expound/printer err)))
                            {})))))))


;; (do

;;     (def sc
;;       (sc/statechart [#:state {:name ::A :start? true}
;;                       #:state {:name ::B}
;;                       #:transition {:name ::next
;;                                     :from [:state/name ::A]
;;                                     :to [:state/name ::B]
;;                                     :action (fn [env _ _]
;;                                               nil)}]))
;;     ;;(check-statechart-specs! sc)

;;     (-> sc
;;         (step {:event/name ::sc/start})
;;         ;;sc/start
;;         ;;(step {:event/name ::next})
;;         )




;;     )
