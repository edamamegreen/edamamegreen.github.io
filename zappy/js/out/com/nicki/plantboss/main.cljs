(ns com.nicki.plantboss.main
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


(defn calc-age
  "calculate the age of a plant from its map and the environment"
  [map env]
  (- (:current-time env)
     (:created map)))


(defn scale-age
  "adjust the age to provide an appropriate scale value for the plants to be used in stepping the sprite sheets"
  [age]
  (max 1
       (/ age 10000)))


(defn subtract-cost
  "subtract the cost of a plant from your bank"
  [env event]
  (assoc-in env [:money] (- (:money env) (:cost (:item event)))))


(defn add-to-greenhouse
  "update plants vector with event plant"
  [env event]
  (let [new-plant (assoc (:item event) :created (:current-time env))]
    (update-in env [:plants] conj new-plant)))


(defn in-greenhouse?
  "check if a plant map (or object) is in the greenhouse-plants vector"
  [plant app]
  (let [greenhouse-plants (-> app :sc :env :plants)]
    (< 0 (count (filter (fn [x] (= (:name plant) x)) (map #(get % :name) greenhouse-plants))))))


(defn currently-visiting?
  "check if a visitor is currently visiting"
  [visitor]
  (contains? visitor :departure))


(defn add-visitor
  "given the current state, decide whether and which visitor should visit and return a new state"
  [env]
  (let [available-visitors (vec (filter (complement currently-visiting?) (:visitors env)))
        visiting-visitors (vec (filter currently-visiting? (:visitors env)))
        visitor-to-update (nth available-visitors (rand-int (count available-visitors)) nil) ;;needed rand-int instead of rand-nth for the "not found" argument
        new-visitor (assoc visitor-to-update :departure (+ 30000 (:current-time env)))]

    (if (and (> 3 (count visiting-visitors))
             (= 1 (rand-int 3)))
      (-> env
          (assoc-in [:visitors] (remove #(= visitor-to-update %) (:visitors env)))
          (update-in [:visitors] conj new-visitor))
      env)))

(defn remove-visitors
  "remove any visitors that have reached their departure time and return a new game state"
  [env]
  (let [{leaving true rest false} (group-by #(= (:current-time env)
                                              (:departure %))
                                            (:visitors env))]
    (-> env
        (assoc-in [:visitors] (into rest
                                    (vec (map (fn [visitor]
                                                (dissoc visitor :departure)) leaving))))
        (update-in [:money] + (if (empty? leaving) 0 (rand-int 26))))))


(rum/defc *close
  "create a close button"
  []
  [:.close-button
   {:on-click #(trigger! {:event/name ::close})}
   "Close"])


(rum/defc *loading
  "generate react components for greenhouse screen"
  []
  [:.loading
   [:h1 "Plant Boss"]

   [:img {:class "loader"
          :src "images/plant1.svg"
          :draggable "false"}]

   [:.loading-button
    {:on-click #(trigger! {:event/name ::finished-loading})}
    "Play"]])


(rum/defc *greenhouse
  "generate react components for greenhouse screen"
  [app]
  [:.greenhouse
   [:img {:class "supplybook"
          :src "images/supplybook.svg"
          :on-click #(trigger! {:event/name ::open-supplies})
          :draggable "false"}]

   [:img {:class "clock"
          :src "images/clock.svg"
          :on-click #(trigger! {:event/name ::tick})
          :draggable "false"}]

   (for [visitor (-> app :sc :env :visitors)]
     (when (currently-visiting? visitor)
       [:.visitor {:style {:background-image (str "url('" (:src visitor) "')")
                           :width (:width visitor)
                           :height (:height visitor)
                           :animation (:animation visitor)
                           :top (str (first (:loc visitor)) "px")
                           :left (str (second (:loc visitor)) "px")}}]))


   (let [env (-> app :sc :env)
         greenhouse-plants (:plants env)]

     (for [plant greenhouse-plants]

       [:.plant {:style {:top (str (first (:loc plant)) "px")
                         :left (str (second (:loc plant)) "px")
                         :transform (str "scale(" (:scale plant) ")")}}
        [:img {:src (:src plant)
               :draggable "false"}]

        [:.leaves {:style {:background-image (str "url('" (:spritesheet plant) "')")
                           :background-position-x (str (* -1 (scale-age (calc-age plant env)) (:width plant)) "px")
                           :height (:height plant)
                           :width (:width plant)}}]

        [:img {:class "pot"
               :src (:pot plant)
               :draggable "false"}]
        ]))

   [:.money {:style {:background-image "url('images/coins.svg')"
                     :background-position-y (let [money (-> app :sc :env :money)
                                                  sprite-height 50]
                                              (str (cond
                                                     (>= 0 money)
                                                     50

                                                     (< 0 money 1800)
                                                     (* (+ 2 (quot money 200)) sprite-height)

                                                     (>= money 1800)
                                                     (* 12 sprite-height)

                                                     :else
                                                     0)
                                                   "px"))
                     :draggable "false"}}
    [:p (-> app :sc :env :money)]]])


(rum/defc *supplies-list
  "generate react components for supplies screen"
  [app]
  [:.supplies
   [:.supplies-container
    [:h1 "McPlant Supplies"]
    [:p (str (-> app :sc :env :money) " coins in your account.")]

    (for [item (-> app :sc :env :supplies)]

      [:.item

       [:.supply-plant
        [:img {:src (:supply-src item)}]]

       [:.item-info
        [:.item-name
         (:name item)]
        [:.item-cost
         (:cost item)]]

       [:.button-container
        (when (not (in-greenhouse? item app))
          [:.buy-button
           (when (>= (-> app :sc :env :money) (:cost item))
             {:data-is-active "true"
              :on-click #(trigger! {:event/name ::buy-item :item item})})
           "Buy"])]])]

   [:.close-button
    {:on-click #(trigger! {:event/name ::close})}
    "Done Shopping"]])


(rum/defc *app
  [trigger! app]
  (let [sc (:sc app)
        env (pp (sc/env sc))]

    [:.plant-boss

     [:.title
      [:p "Plant Boss"]]

     [:.app-container

      (cond

       (sc/active? sc ::Loading)
       (*loading)

       (sc/active? sc ::Greenhouse)
       (*greenhouse app)

       (sc/active? sc ::List)
       (*supplies-list app))]]))


(def statechart
  (sc/statechart
   [#:state {:name ::App :start? true
             :children [#:state {:name ::Loading :start? true
                                 :enter (fn [env]
                                          (assoc env
                                                 :current-time 0
                                                 :money 100
                                                 :plants []
                                                 :visitors [{:name "Gecko"
                                                             :src "images/gecko.svg"
                                                             :loc '(100 295)
                                                             :animation "gecko 3s steps(41) infinite reverse"
                                                             :width "47px"
                                                             :height "55px"}
                                                            {:name "Ants"
                                                             :src "images/ants.svg"
                                                             :loc '(645 10)
                                                             :animation "ants .5s steps(4) infinite reverse"
                                                             :width "125px"
                                                             :height "20px"}
                                                            {:name "Phoebe"
                                                             :src "images/phoebe.svg"
                                                             :loc '(232 185)
                                                             :width "31px"
                                                             :height "18px"}]
                                                 :supplies [{:name "Small Cactus"
                                                             :spritesheet "images/growing_cactus2.png"
                                                             :supply-src "images/tall_cactus_hero.svg"
                                                             :pot "images/pot.svg"
                                                             :height 130
                                                             :width 70
                                                             :scale (/ 4 10)
                                                             :loc '(252 295)
                                                             :cost 10}
                                                            {:name "Snake Plant"
                                                             :src "images/snake_plant.svg"
                                                             :supply-src "images/snake_plant_hero.svg"
                                                             :scale 1
                                                             :loc '(400 100)
                                                             :cost 20}
                                                            {:name "Ludisia Discolor - Jewel Orchid"
                                                             :src "images/orchid.svg"
                                                             :supply-src "images/orchid_hero.svg"
                                                             :scale 1
                                                             :loc '(325 140)
                                                             :cost 45}
                                                            {:name "Small Round Cactus"
                                                             :src "images/small_round_cactus.svg"
                                                             :supply-src "images/small_round_cactus_hero.svg"
                                                             :scale 1
                                                             :loc '(340 295)
                                                             :cost 10}
                                                            {:name "Big Leaf"
                                                             :src "images/big_leaf.svg"
                                                             :supply-src "images/big_leaf_hero.svg"
                                                             :scale 1
                                                             :loc '(370 450)
                                                             :cost 105}
                                                            {:name "Droopy Plant"
                                                             :src "images/droopy_plant.svg"
                                                             :supply-src "images/droopy_plant_hero.svg"
                                                             :scale 1
                                                             :loc '(71 60)
                                                             :cost 65}
                                                            {:name "Elkhorn"
                                                             :src "images/elkhorn.svg"
                                                             :supply-src "images/elkhorn_hero.svg"
                                                             :scale 1
                                                             :loc '(255 405)
                                                             :cost 90}
                                                            {:name "Small Dot Plant"
                                                             :src "images/small_dot_plant.svg"
                                                             :supply-src "images/small_dot_plant_hero.svg"
                                                             :scale 1
                                                             :loc '(330 180)
                                                             :cost 20}
                                                            {:name "Medium Dot Plant"
                                                             :src "images/med_dot_plant.svg"
                                                             :supply-src "images/med_dot_plant_hero.svg"
                                                             :scale 1
                                                             :loc '(155 620)
                                                             :cost 20}
                                                            {:name "Calathea Makoyana - Peacock Plant"
                                                             :src "images/pink_plant.svg"
                                                             :supply-src "images/pink_plant_hero.svg"
                                                             :scale 1
                                                             :loc '(407 160)
                                                             :cost 35}
                                                            {:name "Medium Round Cactus"
                                                             :src "images/med_round_cactus.svg"
                                                             :supply-src "images/med_round_cactus_hero.svg"
                                                             :scale 1
                                                             :loc '(334 346)
                                                             :cost 25}
                                                            {:name "Reaching Plant"
                                                             :src "images/reaching_plant.svg"
                                                             :supply-src "images/reaching_plant_hero.svg"
                                                             :scale 1
                                                             :loc '(270 925)
                                                             :cost 20}
                                                            {:name "Small Fern"
                                                             :src "images/small_fern.svg"
                                                             :supply-src "images/small_fern_hero.svg"
                                                             :scale 1
                                                             :loc '(585 455)
                                                             :cost 20}
                                                            {:name "Spikey Plant"
                                                             :src "images/spikey_plant.svg"
                                                             :supply-src "images/spikey_hero.svg"
                                                             :scale 1
                                                             :loc '(252 735)
                                                             :cost 20}
                                                            {:name "Spotted Prayer Plant"
                                                             :src "images/spotted_prayer_plant.svg"
                                                             :supply-src "images/spotted_prayer_plant_hero.svg"
                                                             :scale 1
                                                             :loc '(480 630)
                                                             :cost 20}
                                                            {:name "Stringy Plant"
                                                             :src "images/stringy_plant.svg"
                                                             :supply-src "images/stringy_plant_hero.svg"
                                                             :scale 1
                                                             :loc '(77 505)
                                                             :cost 20}
                                                            {:name "Tall Fern"
                                                             :src "images/tall_fern.svg"
                                                             :supply-src "images/tall_fern_hero.svg"
                                                             :scale 1
                                                             :loc '(480 12)
                                                             :cost 20}
                                                            {:name "Tall Skinny Cactus (Grey Pot)"
                                                             :src "images/tall_skinny_cactus_grey.svg"
                                                             :supply-src "images/tall_skinny_cactus_grey_hero.svg"
                                                             :scale 1
                                                             :loc '(315 220)
                                                             :cost 20}
                                                            {:name "Tall Skinny Cactus (White Pot)"
                                                             :src "images/tall_skinny_cactus.svg"
                                                             :supply-src "images/tall_skinny_cactus_white_hero.svg"
                                                             :scale 1
                                                             :loc '(289 40)
                                                             :cost 20}]))}

                        #:state {:name ::Greenhouse
                                 :enter (fn [env]
                                          (p "Chime!!!")
                                          env)}

                        #:state {:name ::List}]}

    #:transition {:name ::finished-loading
                  :from [:state/name ::Loading]
                  :to [:state/name ::Greenhouse]}

    #:transition {:name ::open-supplies
                  :from [:state/name ::Greenhouse]
                  :to [:state/name ::List]}

    #:transition {:name ::buy-item
                  :from [:state/name ::List]
                  :to [:state/name ::List]
                  :action (fn [env event]
                            (-> env
                                (subtract-cost event)
                                (add-to-greenhouse event)))}

    #:transition {:name ::close
                  :from [:state/name ::List]
                  :to [:state/name ::Greenhouse]}

    #:transition {:name ::tick
                  :from [:state/name ::Greenhouse]
                  :to [:state/name ::Greenhouse]
                  :action (fn [env event]
                            (-> env
                                (update-in [:current-time] + 10000)
                                (add-visitor)
                                (remove-visitors)))}

    #:transition {:name ::reload
                  :from [:state/name ::App]
                  :to [:state/name ::App]}]))

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

;; todo: make the failed test messages appear in an alert when they should all be passing regularly

;; Are plants always available in the supply list? If not, under what conditions are they not available?

;; The loading screen shouldn't be up for more than 2 seconds - this isn't really a test, it's a performance marker

;; The supply list should never be empty
(let [sc (sc/start statechart)
      supplies (-> sc :env :supplies)]
  (when (empty? supplies)
    (p "Test failed: The supply list shouldn't be empty")))

;; The new app should be further in the future than the old app

;; You can't buy a plant if you don't have enough money for it
;; -> The app is designed to only display buttons when there is enough money, so the buy event can't be triggered unless it's valid.

;; Plants should stay in the same order in the greenhouse (what order?)

;; Plants should stay in the same order in the supply list
;; -> The app displays plants (and potentially other items) in the supply list in the order they appear in the map of supplies.

;; No two plants can be in the same location.
;; I'm worried about using first and second in case I change my collections from vectors into something without an order.
;; todo: update this test when place-item transition is created
;; When I implement place-item, it would be helpful to have a data structure that prevents more than one object being assigned to a location.

(let [app {:sc (sc/start statechart)}
      supplies (-> app :sc :env :supplies)
      new-sc (-> app
                 (:sc)
                 (sc/step {:event/name ::finished-loading})
                 (sc/step {:event/name ::open-supplies})
                 (sc/step {:event/name ::for-sale :id 0})
                 (sc/step {:event/name ::for-sale :id 1})
                 (sc/step {:event/name ::buy-item :id 0})
                 (sc/step {:event/name ::place-item :loc [1 1] :item 0})
                 (sc/step {:event/name ::buy-item :id 1})
                 (sc/step {:event/name ::place-item :loc [1 1] :item 1}))
      new-app (assoc-in app [:sc] new-sc)
      greenhouse (-> new-app :sc :env :greenhouse)
      plant-locations (for [plant greenhouse] (:loc plant))]

  (when (or (nil? plant-locations)
            (= (distinct plant-locations)
               plant-locations))
        (p "Test failed: You can't put two objects in the same place.")))


;; Only plants marked for purchase can be bought.
(let [app {:sc (sc/start statechart)}
      new-sc (-> app
             (sc/step {:event/name ::finished-loading})
             (sc/step {:event/name ::open-supplies})
             (sc/step {:event/name ::not-for-sale :id 0})
             (sc/step {:event/name ::buy-item :id 0}))
      new-app (assoc-in app [:sc] new-sc)
      plant-id (-> new-app :sc :env :supplies first :id)]

  ;;todo: I need a better way to test that the purchase didn't happen
  (when-not (in-greenhouse? plant-id new-app)
            (p "Test failed: You can't buy something that isn't for sale.")))


;; No two plants in the supply list should have the same name.
