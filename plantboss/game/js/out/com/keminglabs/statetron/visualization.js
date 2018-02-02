// Compiled by ClojureScript 1.9.946 {}
goog.provide('com.keminglabs.statetron.visualization');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('com.keminglabs.statetron.core');
goog.require('datascript.core');
goog.require('rum.core');
com.keminglabs.statetron.visualization._STAR_state = rum.core.build_defc.call(null,(function (trigger_BANG_,sc,s){
return React.createElement("div",({"data-state-id": new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(s), "data-is-active": cljs.core.contains_QMARK_.call(null,sc.active_leaf_names,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(s)), "data-is-active-ancestor": com.keminglabs.statetron.core.active_QMARK_.call(null,sc,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(s)), "data-is-default": com.keminglabs.statetron.core.default_state_QMARK_.call(null,s), "data-is-pseudostate": com.keminglabs.statetron.core.pseudostate_QMARK_.call(null,s), "className": "state"}),React.createElement("span",({"onClick": (function (e){
e.stopPropagation();

return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.keminglabs.statetron.visualization","state-clicked","com.keminglabs.statetron.visualization/state-clicked",-1303322387),new cljs.core.Keyword(null,"state","state",-1988618099),s], null));
}), "className": "state-name clickable"}),sablono.interpreter.interpret.call(null,cljs.core.name.call(null,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(s)))),React.createElement("ul",({"className": "transitions"}),cljs.core.into_array.call(null,(function (){var iter__37807__auto__ = (function com$keminglabs$statetron$visualization$iter__47241(s__47242){
return (new cljs.core.LazySeq(null,(function (){
var s__47242__$1 = s__47242;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__47242__$1);
if(temp__5459__auto__){
var s__47242__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47242__$2)){
var c__37805__auto__ = cljs.core.chunk_first.call(null,s__47242__$2);
var size__37806__auto__ = cljs.core.count.call(null,c__37805__auto__);
var b__47244 = cljs.core.chunk_buffer.call(null,size__37806__auto__);
if((function (){var i__47243 = (0);
while(true){
if((i__47243 < size__37806__auto__)){
var map__47245 = cljs.core._nth.call(null,c__37805__auto__,i__47243);
var map__47245__$1 = ((((!((map__47245 == null)))?((((map__47245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47245.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47245):map__47245);
var t = map__47245__$1;
var name = cljs.core.get.call(null,map__47245__$1,new cljs.core.Keyword("transition","name","transition/name",1429155220));
var to = cljs.core.get.call(null,map__47245__$1,new cljs.core.Keyword("transition","to","transition/to",-1841376910));
cljs.core.chunk_append.call(null,b__47244,sablono.interpreter.interpret.call(null,(cljs.core.truth_(com.keminglabs.statetron.core.regular_default_transition_QMARK_.call(null,t))?null:(function (){var internal_QMARK_ = (to == null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.transition","li.transition",-311601130),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-transition-id","data-transition-id",-1975696896),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"data-transition-is-internal","data-transition-is-internal",1194498188),internal_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.transition-name.clickable","span.transition-name.clickable",-1410919496),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__47243,internal_QMARK_,map__47245,map__47245__$1,t,name,to,c__37805__auto__,size__37806__auto__,b__47244,s__47242__$2,temp__5459__auto__){
return (function (e){
e.stopPropagation();

return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.keminglabs.statetron.visualization","transition-clicked","com.keminglabs.statetron.visualization/transition-clicked",-1033010946),new cljs.core.Keyword(null,"transition","transition",765692007),t], null));
});})(i__47243,internal_QMARK_,map__47245,map__47245__$1,t,name,to,c__37805__auto__,size__37806__auto__,b__47244,s__47242__$2,temp__5459__auto__))
], null),(cljs.core.truth_(name)?cljs.core.name.call(null,name):null)], null),((internal_QMARK_)?" \u21BA":new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.to","span.to",-1823533813)," \u2192 ",cljs.core.name.call(null,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(to))], null))], null);
})())));

var G__47253 = (i__47243 + (1));
i__47243 = G__47253;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47244),com$keminglabs$statetron$visualization$iter__47241.call(null,cljs.core.chunk_rest.call(null,s__47242__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47244),null);
}
} else {
var map__47247 = cljs.core.first.call(null,s__47242__$2);
var map__47247__$1 = ((((!((map__47247 == null)))?((((map__47247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47247.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47247):map__47247);
var t = map__47247__$1;
var name = cljs.core.get.call(null,map__47247__$1,new cljs.core.Keyword("transition","name","transition/name",1429155220));
var to = cljs.core.get.call(null,map__47247__$1,new cljs.core.Keyword("transition","to","transition/to",-1841376910));
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(cljs.core.truth_(com.keminglabs.statetron.core.regular_default_transition_QMARK_.call(null,t))?null:(function (){var internal_QMARK_ = (to == null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.transition","li.transition",-311601130),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-transition-id","data-transition-id",-1975696896),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"data-transition-is-internal","data-transition-is-internal",1194498188),internal_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.transition-name.clickable","span.transition-name.clickable",-1410919496),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (internal_QMARK_,map__47247,map__47247__$1,t,name,to,s__47242__$2,temp__5459__auto__){
return (function (e){
e.stopPropagation();

return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.keminglabs.statetron.visualization","transition-clicked","com.keminglabs.statetron.visualization/transition-clicked",-1033010946),new cljs.core.Keyword(null,"transition","transition",765692007),t], null));
});})(internal_QMARK_,map__47247,map__47247__$1,t,name,to,s__47242__$2,temp__5459__auto__))
], null),(cljs.core.truth_(name)?cljs.core.name.call(null,name):null)], null),((internal_QMARK_)?" \u21BA":new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.to","span.to",-1823533813)," \u2192 ",cljs.core.name.call(null,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(to))], null))], null);
})())),com$keminglabs$statetron$visualization$iter__47241.call(null,cljs.core.rest.call(null,s__47242__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__37807__auto__.call(null,new cljs.core.Keyword("transition","_from","transition/_from",804784300).cljs$core$IFn$_invoke$arity$1(s));
})())),React.createElement("div",({"className": "substates"}),cljs.core.into_array.call(null,(function (){var iter__37807__auto__ = (function com$keminglabs$statetron$visualization$iter__47249(s__47250){
return (new cljs.core.LazySeq(null,(function (){
var s__47250__$1 = s__47250;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__47250__$1);
if(temp__5459__auto__){
var s__47250__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47250__$2)){
var c__37805__auto__ = cljs.core.chunk_first.call(null,s__47250__$2);
var size__37806__auto__ = cljs.core.count.call(null,c__37805__auto__);
var b__47252 = cljs.core.chunk_buffer.call(null,size__37806__auto__);
if((function (){var i__47251 = (0);
while(true){
if((i__47251 < size__37806__auto__)){
var c = cljs.core._nth.call(null,c__37805__auto__,i__47251);
cljs.core.chunk_append.call(null,b__47252,sablono.interpreter.interpret.call(null,com.keminglabs.statetron.visualization._STAR_state.call(null,trigger_BANG_,sc,c)));

var G__47254 = (i__47251 + (1));
i__47251 = G__47254;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47252),com$keminglabs$statetron$visualization$iter__47249.call(null,cljs.core.chunk_rest.call(null,s__47250__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47252),null);
}
} else {
var c = cljs.core.first.call(null,s__47250__$2);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,com.keminglabs.statetron.visualization._STAR_state.call(null,trigger_BANG_,sc,c)),com$keminglabs$statetron$visualization$iter__47249.call(null,cljs.core.rest.call(null,s__47250__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__37807__auto__.call(null,new cljs.core.Keyword("state","children","state/children",-1049694637).cljs$core$IFn$_invoke$arity$1(s));
})())));
}),null,"*state");
com.keminglabs.statetron.visualization._STAR_statechart = rum.core.build_defc.call(null,(function (trigger_BANG_,sc){
return React.createElement("div",({"className": "statechart"}),cljs.core.into_array.call(null,(function (){var iter__37807__auto__ = (function com$keminglabs$statetron$visualization$iter__47255(s__47256){
return (new cljs.core.LazySeq(null,(function (){
var s__47256__$1 = s__47256;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__47256__$1);
if(temp__5459__auto__){
var s__47256__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47256__$2)){
var c__37805__auto__ = cljs.core.chunk_first.call(null,s__47256__$2);
var size__37806__auto__ = cljs.core.count.call(null,c__37805__auto__);
var b__47258 = cljs.core.chunk_buffer.call(null,size__37806__auto__);
if((function (){var i__47257 = (0);
while(true){
if((i__47257 < size__37806__auto__)){
var s = cljs.core._nth.call(null,c__37805__auto__,i__47257);
cljs.core.chunk_append.call(null,b__47258,sablono.interpreter.interpret.call(null,com.keminglabs.statetron.visualization._STAR_state.call(null,trigger_BANG_,sc,s)));

var G__47259 = (i__47257 + (1));
i__47257 = G__47259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47258),com$keminglabs$statetron$visualization$iter__47255.call(null,cljs.core.chunk_rest.call(null,s__47256__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47258),null);
}
} else {
var s = cljs.core.first.call(null,s__47256__$2);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,com.keminglabs.statetron.visualization._STAR_state.call(null,trigger_BANG_,sc,s)),com$keminglabs$statetron$visualization$iter__47255.call(null,cljs.core.rest.call(null,s__47256__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__37807__auto__.call(null,new cljs.core.Keyword("state","children","state/children",-1049694637).cljs$core$IFn$_invoke$arity$1(com.keminglabs.statetron.core.s.call(null,sc,new cljs.core.Keyword("com.keminglabs.statetron.core","root","com.keminglabs.statetron.core/root",302968838))));
})()));
}),null,"*statechart");

//# sourceMappingURL=visualization.js.map?rel=1517117185482
