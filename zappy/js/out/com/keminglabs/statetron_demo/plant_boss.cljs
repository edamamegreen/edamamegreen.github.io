(ns com.keminglabs.statetron-demo.plant-boss
     (:require-macros [com.keminglabs.statetron.macros :refer [p pp]]
                      [lonocloud.synthread :as ->])
     (:require [com.keminglabs.statetron.core :as sc]
               [com.keminglabs.statetron.playground :as playground]
               [rum.core :as rum]
               [clojure.spec.alpha :as s]
               [clojure.spec.gen.alpha :as gen]
               [cljs.reader :refer [read-string]]))

(rum/defc *app
     [trigger! sc]
     (let [env (sc/env sc)]
          [:display]))

(def statechart
     (sc/statechart
      [#:state {:name ::App :start? true
                :children [#:state {:name ::Loading :start? true
                                    :enter (fn [env]
                                                (assoc env :data {:plants {}
                                                                  :coins 100
                                                                  :supplies {:small-cactus {:name "Small Cactus"
                                                                                            :available? true
                                                                                            :cost 10}}
                                                                  :last-checked nil}
                                                       :view #'*app))}

                           #:state {:name ::Greenhouse
                                    :enter (fn [env]
                                                (p "Chime!!!")
                                                env)
                                    :children [#:state {:name ::Main :start? true}
                                               #:state {:name ::Place-Object}]}

                           #:state {:name ::Supplies
                                    :children [#:state {:name ::List :start? true}
                                               #:state {:name ::Buy}
                                               #:state {:name ::Place}]}

                           #:state {:name ::Settings}]}

       #:transition {:name ::finished-loading
                     :from [:state/name ::Loading]
                     :to [:state/name ::Greenhouse]}

       #:transition {:name ::open-supplies
                     :from [:state/name ::Greenhouse]
                     :to [:state/name ::Supplies]}

       #:transition {:name ::option-to-buy
                     :from [:state/name ::List]
                     :to [:state/name ::Buy]}

       #:transition {:name ::cancel-buy
                     :from [:state/name ::Buy]
                     :to [:state/name ::List]}

       #:transition {:name ::option-to-place
                     :from [:state/name ::Buy]
                     :to [:state/name ::Place]}

       #:transition {:name ::place-later
                     :from [:state/name ::Place]
                     :to [:state/name ::List]}

       #:transition {:name ::place-object
                     :from [:state/name ::Place]
                     :to [:state/name ::Place-Object]}

       #:transition {:name ::object-placed
                     :from [:state/name ::Place-Object]
                     :to [:state/name ::Main]}

       #:transition {:name ::close-supplies
                     :from [:state/name ::List]
                     :to [:state/name ::Greenhouse]}

       #:transition {:name ::open-settings
                     :from [:state/name ::Greenhouse]
                     :to [:state/name ::Settings]}

       #:transition {:name ::close-settings
                     :from [:state/name ::Settings]
                     :to [:state/name ::Greenhouse]}

       #:transition {:name ::reload
                     :from [:state/name ::App]
                     :to [:state/name ::App]}]))

;;;;;;;;;;;;;;;;;;;;;;;
;;Setup statechart

(defonce _
     (playground/start! (.getElementById js/document "container")
                        statechart
                        {:history? false :benchmark? true}))

;;;;;;;;;;;;;;;;;;;;;;;
;; Tests