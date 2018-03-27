(ns com.keminglabs.statetron.visualization
  (:require-macros [com.keminglabs.statetron.macros :refer [p pp]]
                   [lonocloud.synthread :as ->])
  (:require [clojure.string :as str]
            [com.keminglabs.statetron.core :as sc]
            [datascript.core :as d]
            [rum.core :as rum]))


(rum/defc *state
  [trigger! sc s]
  [:.state {:data-state-id (:db/id s)
            :data-is-active (contains? (.-active-leaf-names sc) (:state/name s))
            :data-is-active-ancestor (sc/active? sc (:state/name s))
            :data-is-default (sc/default-state? s)
            :data-is-pseudostate (sc/pseudostate? s)}

   [:span.state-name.clickable {:on-click (fn [e]
                                      (.stopPropagation e)
                                      (trigger! {:event/name ::state-clicked
                                                 :state s}))}
    (clojure.core/name (:state/name s))]

   [:ul.transitions
    (for [{:transition/keys [name to] :as t} (:transition/_from s)]
      (when-not (sc/regular-default-transition? t)
        (let [internal? (nil? to)]
          [:li.transition {:data-transition-id (:db/id t)
                           :data-transition-is-internal internal?}

           [:span.transition-name.clickable {:on-click (fn [e]
                                              (.stopPropagation e)
                                              (trigger! {:event/name ::transition-clicked
                                                         :transition t}))}
            (when name (clojure.core/name name))]
           (if internal?
             " ↺"
             [:span.to " → " (clojure.core/name (:state/name to))])])))]

   [:.substates
    (for [c (->> (:state/children s)
                 ;;TODO: always put default state first? some other heuristic?
                 )]
      (*state trigger! sc c))]])


(rum/defc *statechart
  [trigger! sc]
  [:.statechart
   (for [s (:state/children (sc/s sc ::sc/root))]
     (*state trigger! sc s))])
