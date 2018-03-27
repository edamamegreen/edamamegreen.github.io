(ns com.keminglabs.statetron-demo.import-image
  (:require-macros [com.keminglabs.statetron.macros :refer [p pp]]
                   [lonocloud.synthread :as ->])
  (:require [com.keminglabs.statetron.playground :as playground]
            [com.keminglabs.statetron.core :as sc]
            [com.keminglabs.statetron.specs :as scs]
            [datascript.core :as d]
            [rum.core :as rum]
            [clojure.spec.alpha :as s]))


(rum/defc *app
  [trigger! sc]

  [:.import-images
   
   (case (.-active-leaf-names sc)


     #{::image-save-handling}
     (list
      [:button {:on-click #(trigger! {:event/name ::write-new-image :name "foo.png"})}
       "Write new image"]

      [:button {:on-click #(trigger! {:event/name ::overwrite-image})}
       "Overwrite existing image"])
       


       nil
     )])


(def statechart
  (sc/statechart
   [#:state {:name ::standard :start? true}

    #:state {:name ::importing-image
             :enter (fn [env]
                      (assoc env :view #'*app))
             :children [#:state {:name ::image-validity-check :start? true}
                        
                        ;; TODO: should this be super-topo mode? Just place into last selected element? Place at artboard level?
                        ;; Should the behavior be different for drag vs. modal?
                        #:state {:name ::todo-placing-image}

                        #:state {:name ::image-save-handling}]}

    #:state {:name ::replacing-reference-source}

    #:state {:name ::overriding-instance-image-reference}

    #:state {:name ::image-validity-check
             :choice/fn (fn [env event]

                        ;; TODO: this should be a 3-way choice, not a 2-way. Confirm modal doesn't work, so how to similate this?
                        
                        ;; image-is-new
                        ;; Go to image-save-handling

                        ;; image-already-added
                        ;; User added image from file's images directory (or that checksum matches?)
                        ;; Don't re-import, just add a new reference to existing source, then go to (TODO) placing state

                        ;; image-is-invalid
                        ;; Image can't be read, show error messaging (in a modal or status bar?) and go to standard state

                          (if (.confirm js/window "Is this image valid?")
                            ::image-save-handling
                            ::standard))
             :transition/_from [#:transition {:to {:state/name ::image-save-handling}}
                                #:transition {:to {:state/name ::standard}}]}
    
    #:transition {:name ::image-added-via-drag
                  :from [:state/name ::standard]
                  :to [:state/name ::importing-image]}

    ;;TODO: we handle this case differently? i.e instead of going to super topo, we just place it onto the currently active artboard?
    #:transition {:name ::image-added-via-modal
                  :from [:state/name ::standard]
                  :to [:state/name ::importing-image]}

    #:transition {:name ::image-added-via-clipboard
                  :from [:state/name ::standard]
                  :to [:state/name ::image-save-handling]
                  ;; Assume if it is a valid mime type on the clipboard, we have a valid image, so skip validity check and go straight to save handling
                  }

            

    #:transition {:name ::end
                  :from [:state/name ::importing-image]
                  :to [:state/name ::standard]}

    #:transition {:name ::image-added-via-clipboard
                  :from [:state/name ::image-save-handling]
                  :to [:state/name ::standard]

                  ;; If image added via clipboard, we don't have a filename.
                  ;; Assign it a unique filename to prevent conflicts w/ existing images?
                  ;; Should we also assign a unique filename for every paste of same image, or should we attempt to checksum and just make new references to the already pasted image?

                  ;; Paste should go into currently selected parent
                  ;; If no parent, then root of current focused artboard
                  ;; Then return to standard state
                  }

    #:transition {:name ::image-name-unique
                  :from [:state/name ::image-save-handling]
                  :to [:state/name ::todo-placing-image]

                  ;; If image added via drag or modal and name is unique
                  ;; Save in images folder with that name and move to placing state
                  }

    #:transition {:name ::image-name-conflict
                  :from [:state/name ::image-save-handling]
                  :to [:state/name ::todo-placing-image]

                  ;; If image added via drag or model has a name conflict
                  ;; Use existing name and add unique suffix? Notify of this in status bar?
                  ;; Or allow user to set a new name themselves?
                  }

    ]))



;;;;;;;;;;;;;;;;;;;;;;;
;;Setup statechart

(defonce _
  (playground/start! (.getElementById js/document "container")
                     statechart
                     {:history? false
                      :benchmark? false}))
