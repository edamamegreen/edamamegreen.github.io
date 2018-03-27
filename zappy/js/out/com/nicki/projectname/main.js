// Compiled by ClojureScript 1.9.946 {}
goog.provide('com.nicki.projectname.main');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('datascript.core');
goog.require('rum.core');
goog.require('com.keminglabs.statetron.core');
goog.require('com.keminglabs.statetron.playground');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof com.nicki.projectname.main._BANG_app !== 'undefined'){
} else {
com.nicki.projectname.main._BANG_app = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
com.nicki.projectname.main.trigger_BANG_ = (function com$nicki$projectname$main$trigger_BANG_(event){
return cljs.core.swap_BANG_.call(null,com.nicki.projectname.main._BANG_app,(function (app){
try{if(((!((event == null)))?((((event.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === event.cljs$core$ILookup$)))?true:(((!event.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event))){
try{var event_name__44545 = cljs.core.get.call(null,event,new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.call(null,event_name__44545,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
return cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"sc","sc",1148023032),com.keminglabs.statetron.core.step.call(null,new cljs.core.Keyword(null,"sc","sc",1148023032).cljs$core$IFn$_invoke$arity$1(app),event));
} else {
throw cljs.core.match.backtrack;

}
}catch (e44548){if((e44548 instanceof Error)){
var e__43637__auto__ = e44548;
if((e__43637__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43637__auto__;
}
} else {
throw e44548;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44546){if((e44546 instanceof Error)){
var e__43637__auto__ = e44546;
if((e__43637__auto__ === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)].join('')));
} else {
throw e__43637__auto__;
}
} else {
throw e44546;

}
}}));
});
/**
 * create a close button
 */
com.nicki.projectname.main._STAR_close = rum.core.build_defc.call(null,(function (){
return React.createElement("div",({"onClick": (function (){
return com.nicki.projectname.main.trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.projectname.main","close","com.nicki.projectname.main/close",300092358)], null));
}), "className": "close-button"}),"Close");
}),null,"*close");
com.nicki.projectname.main._STAR_app = rum.core.build_defc.call(null,(function (trigger_BANG_,app){
var sc = new cljs.core.Keyword(null,"sc","sc",1148023032).cljs$core$IFn$_invoke$arity$1(app);
var env = (function (){var res__43114__auto__ = com.keminglabs.statetron.core.env.call(null,sc);
console.log(cljs.core.prn_str.call(null,res__43114__auto__));

return res__43114__auto__;
})();
return sablono.interpreter.interpret.call(null,com.nicki.projectname.main._STAR_close.call(null));
}),null,"*app");
com.nicki.projectname.main.statechart = com.keminglabs.statetron.core.statechart.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.projectname.main","App","com.nicki.projectname.main/App",355197957),new cljs.core.Keyword("state","start?","state/start?",1533694543),true,new cljs.core.Keyword("state","children","state/children",-1049694637),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.projectname.main","Loading","com.nicki.projectname.main/Loading",-1330083019),new cljs.core.Keyword("state","start?","state/start?",1533694543),true,new cljs.core.Keyword("state","enter","state/enter",1934253951),(function (env){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"current-time","current-time",-1609407134),(0));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.projectname.main","Greenhouse","com.nicki.projectname.main/Greenhouse",1956089792),new cljs.core.Keyword("state","enter","state/enter",1934253951),(function (env){
var res__43108__auto___44549 = "Chime!!!";
console.log(res__43108__auto___44549);


return env;
})], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.nicki.projectname.main","tick","com.nicki.projectname.main/tick",-1985319064),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.projectname.main","Greenhouse","com.nicki.projectname.main/Greenhouse",1956089792)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.projectname.main","Greenhouse","com.nicki.projectname.main/Greenhouse",1956089792)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-time","current-time",-1609407134)], null),cljs.core._PLUS_,(10000));
})], null)], null));
com.nicki.projectname.main.render_BANG_ = (function com$nicki$projectname$main$render_BANG_(app){
return ReactDOM.render(com.nicki.projectname.main._STAR_app.call(null,com.nicki.projectname.main.trigger_BANG_,app),document.getElementById("container"));
});
if(typeof com.nicki.projectname.main.hack !== 'undefined'){
} else {
com.nicki.projectname.main.hack = (function (){
cljs.core.add_watch.call(null,com.nicki.projectname.main._BANG_app,new cljs.core.Keyword(null,"re-render","re-render",1133553258),(function (_,___$1,old,new$){
return com.nicki.projectname.main.render_BANG_.call(null,new$);
}));

setInterval((function (){
return com.nicki.projectname.main.trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.projectname.main","tick","com.nicki.projectname.main/tick",-1985319064)], null));
}),(3000));

return cljs.core.swap_BANG_.call(null,com.nicki.projectname.main._BANG_app,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sc","sc",1148023032),com.keminglabs.statetron.core.start.call(null,com.nicki.projectname.main.statechart)], null));
})()
;
}
var sc_44550 = com.keminglabs.statetron.core.start.call(null,com.nicki.projectname.main.statechart);
var supplies_44551 = new cljs.core.Keyword(null,"supplies","supplies",563812983).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(sc_44550));
if(cljs.core.empty_QMARK_.call(null,supplies_44551)){
var res__43108__auto___44552 = "Test failed: You haven't made any tests yet.";
console.log(res__43108__auto___44552);

} else {
}

//# sourceMappingURL=main.js.map?rel=1518830985020
