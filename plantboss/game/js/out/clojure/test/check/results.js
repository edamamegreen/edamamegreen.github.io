// Compiled by ClojureScript 1.9.946 {}
goog.provide('clojure.test.check.results');
goog.require('cljs.core');

/**
 * @interface
 */
clojure.test.check.results.Result = function(){};

clojure.test.check.results.passing_QMARK_ = (function clojure$test$check$results$passing_QMARK_(result){
if((!((result == null))) && (!((result.clojure$test$check$results$Result$passing_QMARK_$arity$1 == null)))){
return result.clojure$test$check$results$Result$passing_QMARK_$arity$1(result);
} else {
var x__37658__auto__ = (((result == null))?null:result);
var m__37659__auto__ = (clojure.test.check.results.passing_QMARK_[goog.typeOf(x__37658__auto__)]);
if(!((m__37659__auto__ == null))){
return m__37659__auto__.call(null,result);
} else {
var m__37659__auto____$1 = (clojure.test.check.results.passing_QMARK_["_"]);
if(!((m__37659__auto____$1 == null))){
return m__37659__auto____$1.call(null,result);
} else {
throw cljs.core.missing_protocol.call(null,"Result.passing?",result);
}
}
}
});

/**
 * A map of data about the trial.
 */
clojure.test.check.results.result_data = (function clojure$test$check$results$result_data(result){
if((!((result == null))) && (!((result.clojure$test$check$results$Result$result_data$arity$1 == null)))){
return result.clojure$test$check$results$Result$result_data$arity$1(result);
} else {
var x__37658__auto__ = (((result == null))?null:result);
var m__37659__auto__ = (clojure.test.check.results.result_data[goog.typeOf(x__37658__auto__)]);
if(!((m__37659__auto__ == null))){
return m__37659__auto__.call(null,result);
} else {
var m__37659__auto____$1 = (clojure.test.check.results.result_data["_"]);
if(!((m__37659__auto____$1 == null))){
return m__37659__auto____$1.call(null,result);
} else {
throw cljs.core.missing_protocol.call(null,"Result.result-data",result);
}
}
}
});

goog.object.set(clojure.test.check.results.Result,"_",true);

goog.object.set(clojure.test.check.results.passing_QMARK_,"_",(function (this$){
return cljs.core.boolean$.call(null,this$);
}));

goog.object.set(clojure.test.check.results.result_data,"_",(function (this$){
return cljs.core.PersistentArrayMap.EMPTY;
}));

goog.object.set(clojure.test.check.results.Result,"null",true);

goog.object.set(clojure.test.check.results.passing_QMARK_,"null",(function (this$){
return false;
}));

goog.object.set(clojure.test.check.results.result_data,"null",(function (this$){
return cljs.core.PersistentArrayMap.EMPTY;
}));

//# sourceMappingURL=results.js.map?rel=1517117171052
