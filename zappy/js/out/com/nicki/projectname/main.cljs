(ns com.nicki.projectname.main
  (:require-macros [com.nicki.util.macros :refer [p pp]]
                   [lonocloud.synthread :as ->])
  (:require [cljs.core.match :refer-macros [match]]
            [datascript.core :as d]
            [rum.core :as rum]
            [com.keminglabs.statetron.core :as sc]
            [com.keminglabs.statetron.playground :as playground]))

(enable-console-print!)

(defonce !app
  (atom {}))

(defn trigger!
  [event]
  (swap! !app (fn [app]
                (match [event]

                       ;;anything that starts with :event/name and has more than one value needs be above {:event/name _}
;;                       [{:event/name ::select-item :id x}]
;;                       (assoc app :sc (sc/step (:sc app) {:event/name ::select-item :buy x}))

                       [{:event/name _}]
                       (assoc app :sc (sc/step (:sc app) event))))))


(rum/defc *close
  "create a close button"
  []
  [:.close-button
   {:on-click #(trigger! {:event/name ::close})}
   "Close"])


(rum/defc *app
  [trigger! app]
  (let [sc (:sc app)
        env (pp (sc/env sc))]

    (*close)))


(def statechart
  (sc/statechart
   [#:state {:name ::App :start? true
             :children [#:state {:name ::Loading :start? true
                                 :enter (fn [env]
                                          (assoc env
                                                 :current-time 0))}

                        #:state {:name ::Greenhouse
                                 :enter (fn [env]
                                          (p "Chime!!!")
                                          env)}]}


    #:transition {:name ::tick
                  :from [:state/name ::Greenhouse]
                  :to [:state/name ::Greenhouse]
                  :action (fn [env event]
                            (-> env
                                (update-in [:current-time] + 10000)))}]))

(defn render!
  [app]
  (.render js/ReactDOM (*app trigger! app)
           (.getElementById js/document "container")))


(defonce hack
  (do
    ;;re-render watcher
    (add-watch !app :re-render (fn [_ _ old new] (render! new)))

    ;; run tick every second
    (js/setInterval #(trigger! {:event/name ::tick}) 3000)

    ;;start statechart
    (swap! !app conj {:sc (sc/start statechart)})))


;;;;;;Tests;;;;;;;

;; The supply list should never be empty
(let [sc (sc/start statechart)
      supplies (-> sc :env :supplies)]
  (when (empty? supplies)
    (p "Test failed: You haven't made any tests yet.")))
