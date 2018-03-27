(ns com.keminglabs.statetron-demo.draw-box
  (:require-macros [com.keminglabs.statetron.macros :refer [p pp]]
                   [lonocloud.synthread :as ->])
  (:require [com.keminglabs.statetron.core :as sc]
            [com.keminglabs.statetron.specs :refer [event-spec]]
            [com.keminglabs.statetron.playground :as playground]
            [rum.core :as rum]
            [clojure.spec.alpha :as s]
            [clojure.spec.gen.alpha :as gen]))


(def min-length 2)

(rum/defc *draw-box
  [trigger! sc]
  (let [{:keys [point-1 current-position] :as env} (sc/env sc)
        [a b] current-position]

    [:.draw-box {:tab-index 1

                 :on-mouse-move (fn [e]
                                  (trigger! {:event/name ::move
                                             :event/collapse? true
                                             ::over-artboard? true
                                             :universe/coordinates [(.-offsetX (.-nativeEvent e))
                                                                    (.-offsetY (.-nativeEvent e))]}))

                 :on-mouse-down (fn [e]
                                  (trigger! {:event/name ::place-point}))

                 :on-key-down (fn [e]
                                (case (.-key e)
                                  "Escape" (trigger! {:event/name ::cancel})
                                  "Alt" (trigger! {:event/name ::symmetric-shortcut-start})
                                  "Shift" (trigger! {:event/name ::constrained-shortcut-start})

                                  (pp (str "Key down not mapped to event: " (.-key e)))))

                 :on-key-up (fn [e]
                              (case (.-key e)
                                "Alt" (trigger! {:event/name ::symmetric-shortcut-end})
                                "Shift" (trigger! {:event/name ::constrained-shortcut-end})

                                (pp (str "Key up not mapped to event: " (.-key e)))))}

     (when-let [[x y] point-1]
       (let [dx (- a x)
             dy (- b y)
             width (max min-length dx)
             height (max min-length dy)]

         (let [[l w t h]
               (cond
                 (sc/active? sc ::drawing-default)
                 [x width y height]

                 (sc/active? sc ::drawing-symmetric)
                 [(- x width) (* 2 width) (- y height) (* 2 height)]

                 (sc/active? sc ::drawing-constrained)
                 (let [length (max min-length dx dy)]
                   [x length y length]))]

           [:.box {:style {:top t :left l :width w :height h}}])))

     (when-let [[x y] point-1]
       [:.point.point-1 {:style {:top y :left x}}])

     [:.point.current-position {:style {:left a :top b}}]]))



(def statechart
  (sc/statechart
   [#:state {:name ::standard}
    #:state {:name ::drawing-selfdirected-box :start? true
             :enter (fn [env _]
                      ;;assoc as a var so that we can livereload
                      (assoc env :view #'*draw-box))
             :children [
                        #:state {:name ::waiting-for-move :start? true}
                        #:state {:name ::check}
                        #:state {:name ::cannot-draw-here}
                        #:state {:name ::placing-first-point}
                        (sc/choice ::check [env event]

                                   (::over-artboard? event)
                                   ::placing-first-point

                                   :else
                                   ::cannot-draw-here)


                        #:state {:name ::placing-second-point
                                 :children [#:state {:name ::drawing-default :start? true} ;; draw from initial x/y coordinate as top-left anchor point, freeform
                                            #:state {:name ::drawing-constrained}
                                            #:state {:name ::drawing-symmetric}
                                            #:state {:name ::drawing-constrained-and-symmetric}]}]}

    #:transition {:name ::move
                  :from [:state/name ::drawing-selfdirected-box]
                  :to [:state/name ::check]
                  :action (fn [env event]
                            (assoc env :current-position (:universe/coordinates event)))}

    #:transition {:name ::move
                  :from [:state/name ::placing-second-point]
                  :action (fn [env event]
                            (assoc env :current-position (:universe/coordinates event)))}


    ;; bail out of any operation, i.e. escape key
    #:transition {:name ::cancel
                  :from [:state/name ::drawing-selfdirected-box]
                  :to [:state/name ::standard]}

    ;; mouse-down, set inital x/y coordinate
    #:transition {:name ::place-point
                  :from [:state/name ::placing-first-point]
                  :to [:state/name ::placing-second-point]
                  :action (fn [env _]
                            (assoc env :point-1 (:current-position env)))}

    ;; draw from initial x/y coordinate as center anchor point, symetrically, i.e. while user holds alt key
    #:transition {:name ::symmetric-shortcut-start
                  :from [:state/name ::placing-second-point]
                  :to [:state/name ::drawing-symmetric]}

    ;; exit state when user stops holding alt key
    #:transition {:name ::symmetric-shortcut-end
                  :from [:state/name ::drawing-symmetric]
                  :to [:state/name ::placing-second-point]}

    ;; if user hits shift key while already holding alt key, we need to transition over to constrained-and-symmetric state
    #:transition {:name ::constrained-shortcut-start
                  :from [:state/name ::drawing-symmetric]
                  :to [:state/name ::drawing-constrained-and-symmetric]}

    ;; drawn from initial x/y coordinate as top-left anchor point, constrained to be a square, i.e. while user holds shift key
    #:transition {:name ::constrained-shortcut-start
                  :from [:state/name ::placing-second-point]
                  :to [:state/name ::drawing-constrained]}

    ;; if user hits alt key while already holding shift key, we need to transition over to constrained-and-symmetric state
    #:transition {:name ::symmetric-shortcut-start
                  :from [:state/name ::drawing-constrained]
                  :to [:state/name ::drawing-constrained-and-symmetric]}

    ;; exit state when user stops holding shift key
    #:transition {:name ::constrained-shortcut-end
                  :from [:state/name ::drawing-constrained]
                  :to [:state/name ::placing-second-point]}

    ;; if user lets go of alt key, transition them back to constrained state
    #:transition {:name ::symmetric-shortcut-end
                  :from [:state/name ::drawing-constrained-and-symmetric]
                  :to [:state/name ::drawing-constrained]}

    ;; if user lets go of shift key, transition them back to symmetric state
    #:transition {:name ::constrained-shortcut-end
                  :from [:state/name ::drawing-constrained-and-symmetric]
                  :to [:state/name ::drawing-symmetric]}

    ;; exit state when user stops holding shift and alt keys
    #:transition {:name ::constrained-and-symmetric-shortcut-end
                  :from [:state/name ::drawing-constrained-and-symmetric]
                  :to [:state/name ::placing-second-point]}

    #:transition {:name ::finish-drawing
                  :from [:state/name ::placing-second-point]
                  :to [:state/name ::standard]
                  :action (fn [env _])
                  ;;Kevin, create the new box

                  :guard (fn [env _])}]))
;;don't let this transition fire if the rectangle corners are too close in client-space


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;Data specification for events

(defmethod event-spec ::move [_]
  (s/keys :req [:universe/coordinates ::over-artboard?]))

(s/def ::over-artboard?
  boolean?)

(s/def :universe/coordinates
  (s/with-gen (s/coll-of int?
                         :kind vector?
                         :count 2)
    #(gen/tuple (gen/elements (range 200))
                (gen/elements (range 200)))))


;;;;;;;;;;;;;;;;;;;;;;;
;;Setup statechart

(defonce _
  (playground/start! (.getElementById js/document "container")
                     statechart
                     {:history? false :benchmark? true}))
