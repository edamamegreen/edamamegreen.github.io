(ns com.keminglabs.statetron-demo.washing-machine
  (:require-macros [com.keminglabs.statetron.macros :refer [p pp]]
                   [lonocloud.synthread :as ->])
     (:require [com.keminglabs.statetron.core :as sc]
               [com.keminglabs.statetron.playground :as playground]
               [rum.core :as rum]
               [clojure.spec.alpha :as s]
               [clojure.spec.gen.alpha :as gen]
               [cljs.reader :refer [read-string]]))


(def temp-settings
     {:label "Water Temp"
      :options ["Cold" "Warm" "Hot"]})

(def soil-settings
     {:label "Soil Level"
      :options ["Off" "Light" "Medium" "Dirty"]})

(def agitate-settings
     {:label "Agitate"
      :options ["Off" "Delicate" "Mixed" "Tough"]})

(def spin-settings
     {:label "Spin Speed"
      :options ["Low" "Medium" "High"]})

(def pre-soak-toggle
     {:label "Pre-Soak"
      :options ["On" "Off"]})

(def extra-rinse-toggle
     {:label "Extra Rinse"
      :options ["On" "Off"]})

(def done-chime-toggle
     {:label "Done Chime"
      :options ["On" "Off"]})

(def mixed-colors-preset
     {:temp "Warm"
      :soil "Medium"
      :agitate "Mixed"
      :spin "Medium"})

(def perm-press-preset
     {:temp "Warm"
      :soil "Medium"
      :agitate "Mixed"
      :spin "High"})

(def whites-preset
     {:temp "Hot"
      :soil "Medium"
      :agitate "Tough"
      :spin "High"})

(def delicates-preset
     {:temp "Warm"
      :soil "Light"
      :agitate "Delicate"
      :spin "Low"})

(def bulky-towels-preset
     {:temp "Hot"
      :soil "Medium"
      :agitate "Tough"
      :spin "High"})

(def quick-rinse-spin-preset
     {:soil "Off"
      :agitate "Off"
      :spin "High"
      :quick-wash? "On"
      :pre-soak? "Off"
      :extra-rinse? "Off"})

(defn create-multi-select-button
     "create a button from a settings key, a map, and the environment that triggers the ::next-option event"
     [k m env trigger!]
     [:.setting-button
      {:on-click #(trigger! {:event/name ::next-option :settings k})}
      [:.label
       (:label m)]
      [:ul
       (for [x (:options m)]
            [:li
             {:data-option-is-selected (= x (k (:settings env)))}
             x])]])

(defn create-toggle-button
     "create a button from a settings key, a map, and the environment that triggers the ::toggle-setting event"
     [k m env trigger!]
     [:.setting-button
      {:on-click #(trigger! {:event/name ::toggle-setting :settings k})}
      [:.label
       (:label m)]
      [:ul
       (for [x (:options m)]
            [:li
             {:data-option-is-selected (= x (k (:settings env)))}
             x])]])

(rum/defc *app
          [trigger! sc]
          (let [env (sc/env sc)]
               [:display
                [:.washing-machine
                 [:.interface
                  [:.title
                   [:h1 "So Fresh 9000 Washer"]]

                  [:.interface-stuff
                   (if (sc/active? sc ::Dim-Display)
                        {:class "dim"})
                   [:.status
                    [:.label
                     "Status"]
                    (let [cycle-stage (:wash-cycle-history env)
                          current-status (cond
                                              (sc/active? sc ::Dim-Display)
                                              ["12:34 PM", "", ""]

                                              (sc/active? sc ::Ready)
                                              ["Ready", "", ""]

                                              (sc/active? sc ::Weighing)
                                              ["Weighing...", "", ""]

                                              (sc/active? sc ::Filling)
                                              ["Filling...", "Time Remaining:", "1:05"]

                                              (sc/active? sc ::Pre-Soak)
                                              ["Pre-Soak", "Time Remaining:", ":55"]

                                              (sc/active? sc ::Soak)
                                              ["Soak", "Time Remaining:", "0:45"]

                                              (sc/active? sc ::Agitate)
                                              ["Agitate", "Time Remaining:", "0:35"]

                                              (sc/active? sc ::Rinse)
                                              ["Rinse", "Time Remaining:", "0:25"]

                                              (sc/active? sc ::Extra-Rinse)
                                              ["Extra Rinse", "Time Remaining:", "0:20"]

                                              (sc/active? sc ::Spin)
                                              ["Spin", "Time Remaining:", "0:15"]

                                              (sc/active? sc ::Done)
                                              ["Done", "", ""]

                                              :else
                                              ["", "", ""])
                          error-msg (if (:unbalanced? (:errors env))
                                         "Pls halp! Unbalanced load."
                                         "")]

                         ;; TODO add a display for paused
                         [:.display
                          [:.wash-cycle
                           [:.time-remaining
                            (current-status 1)]
                           [:h1.time
                            (current-status 2)]
                           [:.state-name
                            (current-status 0)]
                           [:.error-msg
                            error-msg]]])]

                   [:.settings
                    [:.settings-label
                     "Settings"]

                    [:.column
                     [:.row-one
                      (create-multi-select-button :temp temp-settings env trigger!)
                      (create-multi-select-button :soil soil-settings env trigger!)
                      (create-multi-select-button :agitate agitate-settings env trigger!)
                      (create-multi-select-button :spin spin-settings env trigger!)]

                     [:.row-two
                      (create-toggle-button :pre-soak? pre-soak-toggle env trigger!)
                      (create-toggle-button :extra-rinse? extra-rinse-toggle env trigger!)
                      (create-toggle-button :done-chime? done-chime-toggle env trigger!)]]]

                   [:.column
                    [:.presets
                     [:.presets-label
                      "Presets"]

                     [:.flex-grid

                      [:.grid-row

                       [:.button
                        {:on-click #(trigger! {:event/name ::select-preset
                                               :settings mixed-colors-preset})}
                        "Mixed Colors"]

                       [:.button
                        {:on-click #(trigger! {:event/name ::select-preset
                                               :settings perm-press-preset})}
                        "Perm Press"]

                       [:.button
                        {:on-click #(trigger! {:event/name ::select-preset
                                               :settings whites-preset})}
                        "Whites"]]

                      [:.grid-row

                       [:.button
                        {:on-click #(trigger! {:event/name ::select-preset
                                               :settings delicates-preset})}
                        "Delicates"]

                       [:.button
                        {:on-click #(trigger! {:event/name ::select-preset
                                               :settings bulky-towels-preset})}
                        "Bulky/Towels"]

                       [:.button
                        {:on-click #(trigger! {:event/name ::quick-wash-on
                                               :settings quick-rinse-spin-preset})}
                        "Quick Rinse & Spin"]]]]

                    [:.start-button
                     {:on-click #(trigger! {:event/name ::press-start})}
                                  "Start/Pause"]]]]

                 [:h1 "Buttons to Mimic Sensor Readings"]

                 [:.external-action-buttons

                  [:.button
                   {:on-click #(trigger! {:event/name ::become-unbalanced})}
                   "Load is unbalanced!"]

                  [:.button
                   {:on-click #(trigger! {:event/name ::regain-balance})}
                   "Fix the unbalanced load"]

                  [:.button
                   {:on-click #(trigger! {:event/name ::update-sensors :sensors {:water-still-dirty? true}})}
                   "Super dirty load"]]]]))


(defn cycle-setting-option
     "given a setting name, select the next setting option after the current setting option"
     [env event]
     (cond
          (= :temp (:settings event))
          (cond
               (= "Cold" (:temp (:settings env)))
               (assoc-in env [:settings :temp] "Warm")

               (= "Warm" (:temp (:settings env)))
               (assoc-in env [:settings :temp] "Hot")

               (= "Hot" (:temp (:settings env)))
               (assoc-in env [:settings :temp] "Cold"))

          (= :soil (:settings event))
          (cond
               (= "Off" (:soil (:settings env)))
               (assoc-in env [:settings :soil] "Light")

               (= "Light" (:soil (:settings env)))
               (assoc-in env [:settings :soil] "Medium")

               (= "Medium" (:soil (:settings env)))
               (assoc-in env [:settings :soil] "Dirty")

               (= "Dirty" (:soil (:settings env)))
               (assoc-in env [:settings :soil] "Off"))

          (= :agitate (:settings event))
          (cond
               (= "Off" (:agitate (:settings env)))
               (assoc-in env [:settings :agitate] "Delicate")

               (= "Delicate" (:agitate (:settings env)))
               (assoc-in env [:settings :agitate] "Mixed")

               (= "Mixed" (:agitate (:settings env)))
               (assoc-in env [:settings :agitate] "Tough")

               (= "Tough" (:agitate (:settings env)))
               (assoc-in env [:settings :agitate] "Off"))

          (= :spin (:settings event))
          (cond
               (= "Low" (:spin (:settings env)))
               (assoc-in env [:settings :spin] "Medium")

               (= "Medium" (:spin (:settings env)))
               (assoc-in env [:settings :spin] "High")

               (= "High" (:spin (:settings env)))
               (assoc-in env [:settings :spin] "Low"))))

(defn select-preset
     "given a map of new settings from an event, update the environment"
     [env event]
     ;;TODO see if I can use update instead of assoc
     (assoc env :settings (merge (:settings env) (:settings event))))

(defn toggle-setting
     "given a setting name in the event, toggle the state of that setting in the environment"
     [env event]
     (cond
          (= :pre-soak? (:settings event))
          (cond
               (= "Off" (:pre-soak? (:settings env)))
               (assoc-in env [:settings :pre-soak?] "On")

               (= "On" (:pre-soak? (:settings env)))
               (assoc-in env [:settings :pre-soak?] "Off"))

          (= :extra-rinse? (:settings event))
          (cond
               (= "Off" (:extra-rinse? (:settings env)))
               (assoc-in env [:settings :extra-rinse?] "On")

               (= "On" (:extra-rinse? (:settings env)))
               (assoc-in env [:settings :extra-rinse?] "Off"))

          (= :done-chime? (:settings event))
          (cond
               (= "Off" (:done-chime? (:settings env)))
               (assoc-in env [:settings :done-chime?] "On")

               (= "On" (:done-chime? (:settings env)))
               (assoc-in env [:settings :done-chime?] "Off"))))


(def statechart
  (sc/statechart
   [#:state {:name ::Dim-Display :start? true
             :enter (fn [env]
                         (assoc env :settings {:temp "Cold"
                                               :soil "Light"
                                               :agitate "Delicate"
                                               :spin "Low"
                                               :quick-wash? "Off"
                                               :pre-soak? "Off"
                                               :extra-rinse? "Off"
                                               :done-chime? "Off"}
                                :sensors {:weight 0
                                          :door-closed? true
                                          :water-still-dirty? false}
                                :wash-cycle-history nil
                                :rinse-counter 0
                                :errors {:unbalanced? false}
                                :view #'*app))}

    #:state {:name ::Ready
             :children [#:state {:name ::quick-wash-history? :start? true}

                        (sc/choice ::quick-wash-history? [env _]
                                   (= "Off" (:quick-wash? (:settings env)))
                                   ::Enter-Wash-Settings

                                   (= "On" (:quick-wash? (:settings env)))
                                   ::Quick-Wash-On)

                        #:state {:name ::Enter-Wash-Settings}

                        #:state {:name ::Quick-Wash-On}]}

    #:state {:name ::Wash-Cycle
             :children [(sc/choice ::history? [env _]

                                   ;; if wash-cycle-history is nil, then go to default, which is Weighing
                                   (= nil (:wash-cycle-history env))
                                   ::Weighing

                                   (= ::Filling (:wash-cycle-history env))
                                   ::Filling

                                   (= ::Pre-Soak (:wash-cycle-history env))
                                   ::Pre-Soak

                                   (= ::Soak (:wash-cycle-history env))
                                   ::Soak

                                   (= ::Delicate (:wash-cycle-history env))
                                   ::Delicate

                                   (= ::Mixed (:wash-cycle-history env))
                                   ::Mixed

                                   (= ::Tough (:wash-cycle-history env))
                                   ::Tough

                                   (= ::Rinse (:wash-cycle-history env))
                                   ::Rinse

                                   (= ::Extra-Rinse (:wash-cycle-history env))
                                   ::Extra-Rinse

                                   (= ::Spin (:wash-cycle-history env))
                                   ::Spin)


                        ;;If the weighing state is paused then the weighing actions should restart.
                        #:state {:name ::Weighing :start? true
                                 :enter (fn [env]
                                             (p "I've started weighing the laundry.")
                                             env)
                                 :exit (fn [env]
                                            (p "I've finished weighing the laundry.")
                                            env)}

                        #:state {:name ::Filling
                                 :enter (fn [env]
                                             (assoc env :wash-cycle-history ::Filling))}

                        (sc/choice ::quick-wash? [env _]

                                   (= "On" (:quick-wash? (:settings env)))
                                   ::Rinse

                                   (= "Off" (:quick-wash? (:settings env)))
                                   ::Pre-Soak)

                        (sc/choice ::pre-soak? [env _]

                                   (= "On" (:pre-soak? (:settings env)))
                                   ::Pre-Soak

                                   (= "Off" (:pre-soak? (:settings env)))
                                   ::Soak)

                        #:state {:name ::Pre-Soak
                                 :enter (fn [env]
                                             (assoc env :wash-cycle-history ::Pre-Soak))}

                        #:state {:name ::Soak
                                 :enter (fn [env]
                                             (assoc env :wash-cycle-history ::Soak))}

                        #:state {:name ::Agitate
                                 :children [#:state {:name ::Delicate
                                                     :enter (fn [env]
                                                                 (assoc env :wash-cycle-history ::Delicate))}
                                            #:state {:name ::Mixed
                                                     :enter (fn [env]
                                                                 (assoc env :wash-cycle-history ::Mixed))}
                                            #:state {:name ::Tough
                                                     :enter (fn [env]
                                                                 (assoc env :wash-cycle-history ::Tough))}]}

                        (sc/choice ::how-much-to-agitate? [env _]

                                   (= "Delicate" (:agitate (:settings env)))
                                   ::Delicate

                             (= "Mixed" (:agitate (:settings env)))
                                   ::Mixed

                             (= "Tough" (:agitate (:settings env)))
                                   ::Tough)

                        #:state {:name ::Rinse
                                 :enter (fn [env]
                                             (assoc env :wash-cycle-history ::Rinse :rinse-counter 1))}

                        (sc/choice ::extra-rinse? [env _]

                                   (and (= "On" (:extra-rinse (:settings env)))
                                        (< (:rinse-counter env) 2))
                                   ::Extra-Rinse

                                   (and (:water-still-dirty? (:sensors env))
                                        (= "Off" (:quick-wash? (:settings env)))
                                        (< (:rinse-counter env) 3))
                                   ::Extra-Rinse

                                   (= "Off" (:extra-rinse (:settings env)))
                                   ::Spin

                                   ;; when extra-rinse is true but has already been run
                                   :else
                                   ::Spin)


                        #:state {:name ::Extra-Rinse
                                 :enter (fn [env]
                                             (assoc env :wash-cycle-history ::Extra-Rinse
                                                    :rinse-counter (inc (:rinse-counter env))))}

                        #:state {:name ::Spin
                                 :enter (fn [env]
                                             (assoc env :wash-cycle-history ::Spin))}]}

    #:state {:name ::Pause-Cycle}

    #:state {:name ::Done
             :enter (fn [env]
                         (p "Chime!!!")
                         env)}

    #:transition {:name ::select-preset
                  :from [:state/name ::Dim-Display]
                  :to [:state/name ::Ready]
                  :action (fn [env event]
                               (select-preset env event))}

    #:transition {:name ::next-option
                  :from [:state/name ::Dim-Display]
                  :to [:state/name ::Ready]
                  :action (fn [env event]
                               (cycle-setting-option env event))}

    #:transition {:name ::toggle-setting
                  :from [:state/name ::Dim-Display]
                  :to [:state/name ::Ready]
                  :action (fn [env event]
                               (toggle-setting env event))}

    #:transition {:name ::select-preset
                  :from [:state/name ::Enter-Wash-Settings]
                  :action (fn [env event]
                               (select-preset env event))}

    #:transition {:name ::next-option
                  :from [:state/name ::Enter-Wash-Settings]
                  :action (fn [env event]
                               (cycle-setting-option env event))}

    #:transition {:name ::toggle-setting
                  :from [:state/name ::Enter-Wash-Settings]
                  :action (fn [env event]
                               (toggle-setting env event))}

    #:transition {:name ::select-preset
                  :from [:state/name ::Quick-Wash-On]
                  :to [:state/name ::Enter-Wash-Settings]
                  :action (fn [env event]
                               (assoc-in (select-preset env event) [:settings :quick-wash?] "Off"))}

    ;; TODO when you're in Quick-Wash-On you actually want to be able to change the water temp and spin without going back into Enter-Wash-Settings
    #:transition {:name ::next-option
                  :from [:state/name ::Quick-Wash-On]
                  :to [:state/name ::Enter-Wash-Settings]
                  :action (fn [env event]
                               (assoc-in (cycle-setting-option env event) [:settings :quick-wash?] "Off"))}

    #:transition {:name ::toggle-setting
                  :from [:state/name ::Quick-Wash-On]
                  :to [:state/name ::Enter-Wash-Settings]
                  :action (fn [env event]
                               (assoc-in (toggle-setting env event) [:settings :quick-wash?] "Off"))}

    #:transition {:name ::select-preset
                  :from [:state/name ::Done]
                  :to [:state/name ::Ready]
                  :action (fn [env event]
                               (assoc-in (select-preset env event) [:settings :quick-wash?] "Off"))}

    #:transition {:name ::next-option
                  :from [:state/name ::Done]
                  :to [:state/name ::Ready]
                  :action (fn [env event]
                               (assoc-in (cycle-setting-option env event) [:settings :quick-wash?] "Off"))}

    #:transition {:name ::toggle-setting
                  :from [:state/name ::Done]
                  :to [:state/name ::Ready]
                  :action (fn [env event]
                               (toggle-setting env event))}

    #:transition {:name ::update-sensors
                  :from [:state/name ::Wash-Cycle]
                  :action (fn [env event]
                               (assoc env :sensors (merge (:sensors env) (:sensors event))))}

    #:transition {:name ::update-sensors
                  :from [:state/name ::Ready]
                  :action (fn [env event]
                               (assoc env :sensors (merge (:sensors env) (:sensors event))))}

    #:transition {:name ::quick-wash-on
                  :from [:state/name ::Enter-Wash-Settings]
                  :to [:state/name ::Quick-Wash-On]
                  :action (fn [env event]
                               (select-preset env event))}

    #:transition {:name ::quick-wash-on
                  :from [:state/name ::Dim-Display]
                  :to [:state/name ::Quick-Wash-On]
                  :action (fn [env event]
                               (select-preset env event))}

    #:transition {:name ::quick-wash-on
                  :from [:state/name ::Done]
                  :to [:state/name ::Quick-Wash-On]
                  :action (fn [env event]
                               (select-preset env event))}

    #:transition {:name ::press-start
                  :from [:state/name ::Dim-Display]
                  :to [:state/name ::Ready]}

    #:transition {:name ::press-start
                  :from [:state/name ::Ready]
                  :to [:state/name ::Weighing]}

    #:transition {:name ::press-start
                  :from [:state/name ::Pause-Cycle]
                  :to [:state/name ::history?]
                  :guard (fn [env event]
                              (:door-closed? (:sensors env)))}

    #:transition {:name ::press-start
                  :from [:state/name ::Wash-Cycle]
                  :to [:state/name ::Pause-Cycle]}

    ;; TODO add open and closed door functionality to the other states: dim-display, ready, done, pause
    #:transition {:name ::open-door
                  :from [:state/name ::Wash-Cycle]
                  :to [:state/name ::Pause-Cycle]
                  :action (fn [env event]
                               (assoc-in env [:sensors :door-closed?] false))}

    #:transition {:name ::close-door
                  :from [:state/name ::Pause-Cycle]
                  :action (fn [env event]
                               (assoc-in env [:sensors :door-closed?] true))}

    #:transition {:name ::weighing-done
                  :from [:state/name ::Weighing]
                  :to [:state/name ::Filling]}

    #:transition {:name ::filling-done
                  :from [:state/name ::Filling]
                  :to [:state/name ::quick-wash?]}

    #:transition {:name ::pre-soak-done
                  :from [:state/name ::Pre-Soak]
                  :to [:state/name ::Soak]}

    #:transition {:name ::soak-done
                  :from [:state/name ::Soak]
                  :to [:state/name ::how-much-to-agitate?]}

    #:transition {:name ::agitate-done
                  :from [:state/name ::Agitate]
                  :to [:state/name ::Rinse]}

    #:transition {:name ::rinse-done
                  :from [:state/name ::Rinse]
                  :to [:state/name ::extra-rinse?]}

    #:transition {:name ::rinse-done
                  :from [:state/name ::Extra-Rinse]
                  :to [:state/name ::extra-rinse?]}

    #:transition {:name ::spin-done
                  :from [:state/name ::Spin]
                  :to [:state/name ::Done]
                  :action (fn [env]
                               ;; don't clear the settings on done, the machine should remember its last settings
                               (assoc env :wash-cycle-history nil :rinse-counter 0 :water-still-dirty? false :unbalanced? false))}

    #:transition {:name ::done-timeout
                  :from [:state/name ::Done]
                  :to [:state/name ::Dim-Display]}

    #:transition {:name ::become-unbalanced
                  :from [:state/name ::Wash-Cycle]
                  :action (fn [env]
                               (assoc-in env [:errors :unbalanced?] true))}

    #:transition {:name ::regain-balance
                  :from [:state/name ::Wash-Cycle]
                  :action (fn [env]
                               (assoc-in env [:errors :unbalanced?] false))}]))


;;;;;;;;;;;;;;;;;;;;;;;
;;Setup statechart

(defonce _
     (playground/start! (.getElementById js/document "container")
                        statechart
                        {:history? false :benchmark? true}))


;; Tests

;; the rinse counter should never reach 3 (rinse, extra-rinse, extra-rinse)

;; the machine should always pause when the door is open

;;

