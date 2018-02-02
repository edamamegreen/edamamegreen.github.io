(ns com.keminglabs.statetron-demo.draw-line
  #?(:cljs (:require-macros [com.keminglabs.statetron.macros :refer [p pp]]
                            [lonocloud.synthread :as ->]))
  (:require [com.keminglabs.statetron.core :as sc]
            #?(:clj [com.keminglabs.statetron.macros :refer [p pp]])
            #?(:clj [lonocloud.synthread :as ->])

            #?(:cljs [com.keminglabs.statetron.playground :as playground])

            [com.keminglabs.statetron.specs :as scs]

            [datascript.core :as d]
            [rum.core :as rum]

            [clojure.spec.alpha :as s]))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;Rendering bits for the toy app

(rum/defc *point
  [x y]
  [:.point {:style {:position "absolute"
                    :left x
                    :top y
                    :width 2
                    :height 2
                    :background-color "black"}}])


(rum/defc *lines
  [trigger! sc]
  (let [env (sc/env sc)]

    [:.lines
     [:svg {:style {:border "1px solid black"}
            :width 200 :height 200
            :on-mouse-move (fn [e]
                             (trigger! {:event/name ::move
                                        :universe/coordinates [(.-offsetX (.-nativeEvent e)) (.-offsetY (.-nativeEvent e))]}))
            :on-click (fn [e]
                        (trigger! {:event/name ::place-point}))}

      (for [[[x1 y1] [x2 y2]] (:lines env)]
        [:line {:stroke "black" :x1 x1 :y1 y1 :x2 x2 :y2 y2}])

      ;;in progress line
      (when (sc/active? sc ::placing-second-point)
        (let [[x1 y1] (:point-1 env)
              [x2 y2] (:current-position env)]
          [:line {:stroke "red" :x1 x1 :y1 y1 :x2 x2 :y2 y2}]))

      ;;draw a "cursor" just for fun
      (when-let [[x y] (:current-position env)]
        [:g.cursor
         [:line {:stroke "black"
                 :x1 (- x 5) :x2 (+ x 5)
                 :y1 y :y2 y}]
         [:line {:stroke "black"
                 :y1 (- y 5) :y2 (+ y 5)
                 :x1 x :x2 x}]])]]))

(rum/defc *app
  [trigger! sc]
  [:.draw-line-app
   (*lines trigger! sc)
   [:button {:on-click (fn [e]
                         (trigger! {:event/name ::clear-drawn-lines}))}
    "Clear lines"]])


(def statechart
  (sc/statechart
   [#:state {:name ::draw-line-mode :start? true
             :enter (fn [env]
                      (assoc env :view #'*app))
             :children [#:state {:name ::waiting-for-mouse-movement :start? true}
                        #:state {:name ::placing-first-point}
                        #:state {:name ::placing-second-point}]}


    #:transition {:name ::clear-drawn-lines
                  :from [:state/name ::draw-line-mode]
                  :action (fn [env _]
                            (dissoc env :lines))}

    #:transition {:name ::move
                  :from [:state/name ::draw-line-mode]
                  :action (fn [env event]
                            (assoc env :current-position (:universe/coordinates event)))}

    ;;notice that this transition is more specific than the internal one on the parent, so it has priority.
    #:transition {:name ::move
                  :from [:state/name ::waiting-for-mouse-movement]
                  :to [:state/name ::placing-first-point]
                  :action (fn [env event]
                            (assoc env :current-position (:universe/coordinates event)))}

    #:transition {:name ::place-point
                  :from [:state/name ::placing-first-point]
                  :to [:state/name ::placing-second-point]
                  :action (fn [env event]
                            (assoc env :point-1 (:current-position env)))}

    #:transition {:name ::place-point
                  :from [:state/name ::placing-second-point]
                  :to [:state/name ::placing-first-point]
                  :action (fn [env _]
                            (-> env
                                (dissoc :point-1)
                                (update :lines conj [(:point-1 env) (:current-position env)])))}]))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;Data specification for the toy events

(defmethod scs/event-spec ::move [_]
  (s/keys :req [:universe/coordinates]))

(s/def :universe/coordinates
  (s/coll-of (s/and pos-int?
                    #(< % 200))
             :kind vector?
             :count 2))



;;;;;;;;;;;;;;;;;;;;;;;
;;Setup statechart

#?(:cljs (defonce _
           (playground/start! (.getElementById js/document "container")
                              statechart
                              {:history? false
                               :benchmark? true})))
