(ns com.keminglabs.statetron.playground
  (:require-macros [com.keminglabs.statetron.macros :refer [p pp]]
                   [lonocloud.synthread :as ->])
  (:require [com.keminglabs.statetron.core :as sc]
            [com.keminglabs.statetron.specs :as scs]
            [com.keminglabs.statetron.visualization :as vis]

            [taoensso.tufte :as tufte]
            [datascript.core :as d]
            [rum.core :as rum]

            [clojure.string :as str]
            [clojure.spec.alpha :as s]
            [clojure.spec.gen.alpha :as gen]
            [expound.alpha :as expound]))


(enable-console-print!)

(extend-type js/NodeList
  ISeqable
  (-seq [array] (array-seq array 0)))


(rum/defc *possible-events
  [trigger! sc]
  [:.possible-events
   [:h2 "Possible events"]
   [:ul
    (for [{:transition/keys [name]} (sc/available-transitions sc)]
      (let [e {:event/name name}]
        (if-let [spec (scs/event-spec e)]
          [:li
           (clojure.core/name name)
           [:ul (for [m (->> (gen/sample (s/gen spec) 20)
                             shuffle
                             (take 5))]
                  [:li.clickable {:on-click #(trigger! (merge e m))}
                   (pr-str m)])]]

          [:li.clickable {:on-click #(trigger! e)}
           (clojure.core/name name)])))]])


(rum/defc *history <
  {:after-render (fn [state]
                   (when-let [$history (.findDOMNode js/ReactDOM (:rum/react-component state))]
                     (when-let [$ol (.querySelector $history "ol")]
                       (set! (.-scrollTop $ol) (.-scrollHeight $ol))))
                   state)}
  [trigger! history]
  [:.history
   [:ol
    (map-indexed (fn [idx [e old-app]]
                   [:li.clickable.event {:on-click #(trigger! {:event/name ::rollback :idx idx})}
                    [:.name (name (:event/name e))]
                    [:table.args
                     [:tbody (for [[k v] (dissoc e :event/name)]
                               [:tr
                                [:td.key (name k)]
                                [:td.value (pr-str v)]])]]])
                 history)]])


(rum/defc *env
  [env]
  [:pre "Statechart env: " (pr-str (dissoc env :view))])


(rum/defcs *state-futures < (rum/local nil)
  [state histories]
  (let [highlighted-idx @(:rum/local state)]
    [:.state-futures
     (->> histories
          (take 5)
          (map-indexed (fn [idx steps]
                         (let [possible-sc (->> steps last :sc)
                               env (sc/env possible-sc)]
                           [:.future
                            (when-let [*view (:view env)]
                              [:.view {:on-click #(reset! (:rum/local state)
                                                          (when-not (= highlighted-idx idx)
                                                            idx))
                                       :title (str (pr-str (dissoc env :view))
                                                   "\n\n"
                                                   (->> steps
                                                        (map (comp pr-str :event))
                                                        (str/join "\n\n")))}
                               (*view (fn fake-trigger []
                                        ;;(js/alert "Cannot interact w/ possible future view")
                                        )
                                      possible-sc)])

                            (when (= idx highlighted-idx)
                              [:.details
                               (*env env)
                               [:ol
                                (for [{:keys [event]} steps]
                                  [:li (pr-str event)])]])
                            ]))))]))


(rum/defc *possible-futures
  [futures]
  [:.possible-futures
   [:h2 "Possible futures"]
   (for [[state-name histories] futures]
     [:.possible-future
      [:h3 (name state-name)]
      (*state-futures histories)])])











(def ft #'tufte/ft)
(def perc #'tufte/perc)

(defn transition->str
  [t]
  (str (name (:transition/name t))
       " "
       (if (sc/internal-transition? t)
         (str "-> " (name (:state/name (:transition/from t))))

         (str (name (:state/name (:transition/from t)))
              " -> "
              (name (:state/name (:transition/to t)))))))


(defn stats->table
  [stats]
  (when stats
    (let [clock (.-clock stats)
          m-id-stats   (:id-stats-map stats)
          clock-total  (.-total clock)]

      [:table.stats
       [:thead
        [:tr
         [:th]
         [:th "# calls"]
         [:th "min"]
         [:th "max"]
         [:th "mad"]
         [:th "mean"]
         [:th "time %"]
         [:th "time"]]]

       [:tbody
        (for [id (->> (keys m-id-stats)
                      (sort-by (fn [id]
                                 (- (:time (get m-id-stats id))))))]
          (let [id-stats (get m-id-stats id)
                time (:time id-stats)
                [type x] id]
            [:tr

             [:td.id (case type
                       ::sc/enter
                       (list "Enter" [:span.state-name (name (:state/name x))])

                       ::sc/exit
                       (list "Exit" [:span.state-name (name (:state/name x))])

                       ::sc/transition
                       (list [:span.transition-name (name (:transition/name x))]
                             (if (sc/internal-transition? x)
                               (list [:span.state-name (name (:state/name (:transition/from x)))] "↺")

                               (list [:span.state-name (name (:state/name (:transition/from x)))]
                                     "→"
                                     [:span.state-name (name (:state/name (:transition/to x)))])))

                       ::sc/guard
                       (list [:span.transition-name (name (:transition/name x))]
                             (if (sc/internal-transition? x)
                               (list [:span.state-name (name (:state/name (:transition/from x)))] "↺")
                               (list [:span.state-name (name (:state/name (:transition/from x)))]
                                     "→"
                                     [:span.state-name (name (:state/name (:transition/to x)))]))
                             "guard"))]

             [:td.n-calls (:count id-stats)]
             [:td.min (ft (:min id-stats))]
             [:td.max (ft (:max id-stats))]
             [:td.mad (ft (:mad id-stats))]
             [:td.mean (ft (:mean id-stats))]
             [:td.time-percentage (perc time clock-total)]
             [:td.time (ft time)]]))]])))


(rum/defc *stats
  [stats]
  (stats->table stats))


(rum/defc *debug-scaffold
  [trigger! app opts]

  (let [{:keys [sc events explorations]} app
        focused-state-name (:focused-state-name app ::sc/root)
        env (sc/env sc)]

    [:.debug-scaffold
     (*env env)

     [:.columns
      [:.focused-state
       (vis/*state trigger! sc (sc/s sc focused-state-name))]

      (when-let [history (:history opts)]
        (*history trigger! history))]

     (when-not (= ::sc/root focused-state-name)
       [:button {:on-click #(trigger! {:event/name ::show-full-statechart})}
        "Show full statechart"])


     (when-let [stats (:stats opts)]
       (*stats stats))

     ;;this is a terrible hack to allow displaying serialized stats
     (:stats-markup opts)

     (when-let [*view (:view env)]
       (list
        [:hr]
        (*view trigger! sc)))]))


(defn generate-event-for-transition
  [t]
  (let [e {:event/name (:transition/name t)}]
    (merge e (when-let [spec (scs/event-spec e)]
               (gen/generate (s/gen spec))))))


(defn start!
  "Start interactive playground for `initial-statechart` in `$container` DOM node."
  [$container initial-statechart opts]

  (let [opts (merge {:history? true
                     :benchmark? false}
                    opts)

        !app (atom {:sc initial-statechart
                    :focused-state-name ::sc/root})

        !history (atom [])

        !stats (atom nil)]

    (letfn [(render! []
              (.render js/ReactDOM (*debug-scaffold trigger! @!app (-> {}
                                                                       (->/when (:history? opts)
                                                                         (assoc :history @!history))
                                                                       (->/when (:benchmark? opts)
                                                                         (assoc :stats-markup (stats->table @!stats)))))
                       $container))

            (trigger! [event]

              (case (:event/name event)

                ::rollback
                (let [truncated-history (->> @!history
                                             (take (inc (:idx event)))
                                             vec)
                      [_ old-app]  (last truncated-history)]

                  (reset! !history truncated-history)
                  (reset! !app old-app))

                ::vis/state-clicked
                (swap! !app assoc :focused-state-name (:state/name (:state event)))

                ::vis/transition-clicked
                (trigger! (generate-event-for-transition (:transition event)))

                ::show-full-statechart
                (swap! !app assoc :focused-state-name ::sc/root)

                ::explore-futures
                (swap! !app (fn [{:keys [sc] :as app}]
                              (assoc app :explorations {:from sc :futures (sc/explore-states sc scs/sc->possible-events 20)})))

                ::re-render
                nil ;;do nothing

                ;;else, have the statechart handle it
                (if-not (s/valid? ::scs/event event)
                  (expound/expound ::scs/event event)
                  (let [app @!app
                        [new-app stats] (try
                                          (tufte/profiled {:when (:benchmark? opts)}
                                                          (update app :sc scs/step event))

                                          (catch js/Error e
                                            (p (.-message e))
                                            nil))]

                    (when stats
                      (swap! !stats tufte/merge-stats stats))

                    (when (and new-app
                               (not= app new-app))
                      (reset! !app new-app)
                      ;;and save the result to the history list
                      (when (:history? opts)
                        (swap! !history (fn [history]
                                          (concat (let [[last-event _] (last history)]
                                                    (if (and (:event/collapse? event) (:event/collapse? last-event)
                                                             (= (:event/name event) (:event/name last-event)))
                                                      (butlast history)
                                                      history))
                                                  [[event new-app]]))))))))

              ;;re-render the app
              (render!))]

      ;;lift var to global scope so figwheel can call to re-render when code changes
      (def figwheel-re-render! render!)

      (scs/check-statechart-specs! initial-statechart)

      ;;initial render
      (trigger! {:event/name ::sc/start})

      {:!app !app :trigger! trigger!})))
