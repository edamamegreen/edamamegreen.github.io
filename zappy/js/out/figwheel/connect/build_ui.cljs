(ns figwheel.connect.build-ui (:require [figwheel.client] [figwheel.client.utils] [com.nicki.microwaver.main]))
(figwheel.client/start {:build-id "ui", :websocket-url "ws://localhost:3449/figwheel-ws"})

