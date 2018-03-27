(ns com.nicki.microwaver.main
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


(defn numpad-add-digit
  "add a digit to the numpad vector"
  [numpad digit]
  (subvec (conj numpad digit) 1))


(defn numpad->str
  "convert a vector of up to four integers into a clock readout string"
  [numpad]
  (let [[a b c d] numpad]
    (str a b ":" c d)))


(defn t->clock-str
  "convert t to a string of two-digit mins and secs"
  [t]
  (let [mins     (quot t 60)
        secs     (rem t 60)
        pad-zero (fn [num]
                   (if (> num 9)
                     num
                     (str "0" num)))]

    (str (pad-zero mins) ":" (pad-zero secs))))


(defn numpad->sec
  "convert the numpad vector into integer seconds"
  [numpad]
  (let [[a b c d] numpad
        secs (+ (* 10 c) d)
        mins (+ (* 10 a) b)]

    (+ secs (* 60 mins))))


(defn max-t
  "t should never go above 5999 which is 99:59 on a clock"
  [t]
  (min 5999 t))


(defn min-t
  "t should never be negative"
  [t]
  (max 0 t))


(defn add-time-to-t
  "add x seconds to t"
  [x t]
  (min-t (+ x t)))


(defn dec-time-from-t
  "subtract x seconds from t"
  [x t]
  (min-t (- t x)))


(rum/defc *app
  [trigger! app]
  (let [sc (:sc app)
        env (pp (sc/env sc))]

    [:.display
     [:h1 "Zappy 2000"]
     [:p "A prototype microwave user interface."]
     [:.microwaveFrame

      [:.leftcolumn
       [:.door
        (cond
         (sc/active? sc ::On)
         {:class "microwave-on"}

         (sc/active? sc ::Off)
         {:class "microwave-off"}

         (sc/active? sc ::Open)
         {:class    "microwave-open"
          :on-click #(trigger! {:event/name ::close-door})})]]

      [:.rightcolumn

       [:p
        (cond
         (sc/active? sc ::Done)
         "Done"

         (sc/active? sc ::Number-Pad)
         (numpad->str (:numpad env))

         :else
         (t->clock-str (:t env)))]


       [:.button
        {:on-click #(trigger! {:event/name ::add-30-sec})}
        "Add 30 sec"]


       (for [row [[1 2 3]
                  [4 5 6]
                  [7 8 9]]]

         [:.numpad-row
          (for [x row]
            [:.numpad_button
             {:on-click #(trigger! {:event/name ::numpad-time :val x})}
             (str x)])])

       [:.numpad-row
        [:.empty_space]
        [:.numpad_button {:on-click #(trigger! {:event/name ::numpad-time :val 0})} "0"]
        [:.empty_space]]

       [:.numpad-row.two-buttons
        [:.numpad_button
         {:on-click #(trigger! {:event/name ::clear})}
         "Cancel"]

        [:.numpad_button
         {:on-click #(trigger! {:event/name ::toggle-on-off})}
         "Start"]]

       [:.open_button
        {:on-click #(trigger! {:event/name ::open-door})}
        "Open"]]]

     [:p "I built this prototype microwave user interface to practice programming with state machines."]
     [:p "State machines control the state of a machine. Each state represents or contains information about the Microwave itself (e.g. A 'Done' label in the microwave's display or an 'On' value for the interior light bulb). A state machine includes logic for how we move between states. For example, if I'm in the 'On' state, then the event of opening the door will cause a transition to the 'Off' state. For more information, please see"
      [:a {:href "https://www.sciencedirect.com/science/article/pii/0167642387900359"}
       "Statecharts: A Visual Formalism for Complex Systems by David Harel."]]
     [:p "Before building the graphical version of the microwave you see above, I built the state machine. In its basic form, I could test how my microwave would work and change some of my design decisions. I pretty quickly found that I had allowed the microwave to be open and on at the same time. A quick change to the state machine ensured that was no longer possible."]
     [:p "Please give it a try!"]
     [:p "See if you can break it or find any weird behavior. There are still more design decisions to consider. :) Here's a few:"]
     [:ul
      [:li "What happens if you hit 'Start' when there is no time on the clock? Do you think the microwave should behave that way? How would you change the state machine to prevent that behavior? (This is like an imaginary chess question because you haven't seen the code or a chart for the state machine.)"]
      [:li "Should the microwave start microwaving when you hit 'Add 30 Sec', if the door is closed? Or should you have to hit 'Start' first?"]
      [:li "Should this microwaver also have a timer function that counts down time without turning on the microwave?"]
      [:li "Should the current time show on the display when the microwave isn't in use? Should the display turn off when not in use? How does someone set the current time? When does the display switch to the clock or turn off?"]]
     [:p "Made by "
      [:a {:href "http://www.nickivance.com/"}
       "Nicki Vance"]
      "."]]))


(def statechart
  (sc/statechart
   [#:state {:name ::Microwaver
             :start? true
             :enter (fn [env]
                      (assoc env :t 0 :numpad [0 0 0 0] :view #'*app))
             :children [#:state {:name ::Open}
                        #:state {:name ::Closed
                                 :start? true
                                 :children [#:state {:name ::On}
                                            #:state {:name ::time?}
                                            #:state {:name ::Off
                                                     :start? true
                                                     :children [#:state {:name ::Ready :start? true}
                                                                #:state {:name ::Number-Pad
                                                                         :exit (fn [env]
                                                                                 (assoc env :numpad [0 0 0 0]))}
                                                                #:state {:name ::Done}]}]}]}


    #:transition {:name ::open-door
                  :from [:state/name ::Closed]
                  :to   [:state/name ::Open]}

    #:transition {:name   ::add-30-sec
                  :from   [:state/name ::Ready]
                  :to     [:state/name ::On]
                  :action (fn [env event]
                            (assoc env :display-numpad? false
                                   :t (add-time-to-t 30 (:t env))))}

    #:transition {:name   ::add-30-sec
                  :from   [:state/name ::Done]
                  :to     [:state/name ::On]
                  :action (fn [env event]
                            (assoc env :t (add-time-to-t 30 (:t env))))}

    #:transition {:name   ::add-30-sec
                  :from   [:state/name ::Number-Pad]
                  :to     [:state/name ::On]
                  :action (fn [env event]
                            (assoc env :t (add-time-to-t 30 (:t env))))}

    #:transition {:name   ::add-30-sec
                  :from   [:state/name ::Microwaver]
                  :action (fn [env event]
                            (assoc env :display-numpad? false
                                   :t (add-time-to-t 30 (:t env))))
                  ;;                     practice guard
                  ;;                     :guard (fn [env _]
                  ;;                                 (< (:t env) 65))
                  }

    ;; attempting to replace ::Number-Pad state with :display-numpad? in the enviroment
    ;;       #:transition {:name   ::numpad-time
    ;;                     :from   [:state/name ::Microwaver]
    ;;                     :action (fn [env event]
    ;;                                  (assoc env :display-numpad? true
    ;;                                         :t  (numpad->sec (numpad-add-digit (:numpad env) (:val event)))
    ;;                                         :numpad (numpad-add-digit (:numpad env) (:val event))))
    ;;                     :guard (fn [env event]
    ;;                                 (not (sc/active? (statechart ::On)))
    ;;                                 )}

    #:transition {:name   ::numpad-time
                  :from   [:state/name ::Ready]
                  :to     [:state/name ::Number-Pad]
                  :action (fn [env event]
                            (assoc env :t  (numpad->sec (numpad-add-digit (:numpad env) (:val event)))
                                   :numpad (numpad-add-digit (:numpad env) (:val event))))}

    #:transition {:name   ::numpad-time
                  :from   [:state/name ::Number-Pad]
                  :action (fn [env event]
                            (assoc env :t  (numpad->sec (numpad-add-digit (:numpad env) (:val event)))
                                   :numpad (numpad-add-digit (:numpad env) (:val event))))}

    #:transition {:name   ::numpad-time
                  :from   [:state/name ::Done]
                  :to     [:state/name ::Number-Pad]
                  :action (fn [env event]
                            (assoc env :t  (numpad->sec (numpad-add-digit (:numpad env) (:val event)))
                                   :numpad (numpad-add-digit (:numpad env) (:val event))))}

    #:transition {:name   ::clear
                  :from   [:state/name ::Microwaver]
                  :action (fn [env event]
                            (assoc env :t  0
                                   :numpad [0 0 0 0]))}

    #:transition {:name   ::clear
                  :from   [:state/name ::On]
                  :to     [:state/name ::Off]
                  :action (fn [env event]
                            (assoc env :t  0
                                   :numpad [0 0 0 0]))}

    #:transition {:name ::clear
                  :from [:state/name ::Done]
                  :to   [:state/name ::Off]
                  :action (fn [env event]
                            (assoc env :t  0
                                   :numpad [0 0 0 0]))}

    #:transition {:name   ::clear
                  :from   [:state/name ::Number-Pad]
                  :to     [:state/name ::Ready]
                  :action (fn [env event]
                            (assoc env :t  0
                                   :numpad [0 0 0 0]))}

    #:transition {:name ::toggle-on-off
                  :from [:state/name ::Off]
                  :to   [:state/name ::time?]}

    #:transition {:name ::toggle-on-off
                  :from [:state/name ::On]
                  :to   [:state/name ::Off]}

    #:transition {:name ::close-door
                  :from [:state/name ::Open]
                  :to   [:state/name ::Closed]}

    #:transition {:name ::close-door
                  :from [:state/name ::Done]
                  :to   [:state/name ::Off]}

    #:transition {:name   ::tick
                  :from   [:state/name ::On]
                  :to     [:state/name ::time?]
                  :action (fn [env event]
                            (assoc env :t (dec-time-from-t 5 (:t env))))}


    (sc/choice ::time? [env _]

               ;; the t is 0 or less, turn microwave off
               (>= 0 (:t env))
               ::Done

               ;; the t is greater than 0, keep microwave on
               (< 0 (:t env))
               ::On)]))

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

;; Opening the door should open the door

(let [sc (sc/step (sc/start statechart) {:event/name ::open-door})]
  (if (sc/active? sc ::Open)
    nil
    (p "The door isn't opening!")))


;; when I hit add 30 secs and the door is closed, the microwave will turn on
;; i'd actually like this test to check if this is true for every child state in door closed parent state

(let [sc (sc/step (sc/start statechart) {:event/name ::add-30-sec})]
  (if (and (sc/active? sc ::On)
           (sc/active? sc ::Closed))
    nil
    (p "Something's not right with adding 30 secs with the door closed!")))


;; when i type in 90 secs and hit start, it becomes 1:30 on the clock

(let [first-sc  (sc/step (sc/start statechart) {:event/name ::numpad-time :val 9})
      second-sc (sc/step first-sc {:event/name ::numpad-time :val 0})
      third-sc  (sc/step second-sc {:event/name ::add-30-sec})
      env       (sc/env third-sc)]
  (if (== 120 (:t env))
    nil
    (p "The t or add 30 secs might not be working.")))


;; More Tests I can't do yet

;; add 30 sec always adds 30 sec in any state
;; when i leave the numpad state, the numpad vector is reset to []


;; the microwave is never on when the door is open -- is there a way to check that every way you can open the door doesn't happen when the microwave is on?

;;(if (not (and (sc/active?(statechart ::On))
;;              (sc/active?(statechart ::Open))))
;;  nil
;;  (p "The microwave shouldn't be on while the door is open!"))


;; the microwave is never on when the clock is empty -- this test isn't really working because its not enumerating all the possibilities for when the clock is empty and then checking that the microwave is off OR it's not enumerating the possibilities for when the microwave is on and checking that the t is not 0

;;(let [env (sc/env statechart)
;;      sc (sc/start statechart)]
;;  (if (not (and (= 0 (:t env))
;;                (sc/active? (statechart ::On))))
;;    nil
;;    (p "The microwave shouldn't be on when there is 0 time on the clock.")))
