// Compiled by ClojureScript 1.9.946 {}
goog.provide('com.nicki.microwaver.main');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('datascript.core');
goog.require('rum.core');
goog.require('com.keminglabs.statetron.core');
goog.require('com.keminglabs.statetron.playground');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof com.nicki.microwaver.main._BANG_app !== 'undefined'){
} else {
com.nicki.microwaver.main._BANG_app = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
com.nicki.microwaver.main.trigger_BANG_ = (function com$nicki$microwaver$main$trigger_BANG_(event){
return cljs.core.swap_BANG_.call(null,com.nicki.microwaver.main._BANG_app,(function (app){
try{if(((!((event == null)))?((((event.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === event.cljs$core$ILookup$)))?true:(((!event.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event))){
try{var event_name__46635 = cljs.core.get.call(null,event,new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.call(null,event_name__46635,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
return cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"sc","sc",1148023032),com.keminglabs.statetron.core.step.call(null,new cljs.core.Keyword(null,"sc","sc",1148023032).cljs$core$IFn$_invoke$arity$1(app),event));
} else {
throw cljs.core.match.backtrack;

}
}catch (e46638){if((e46638 instanceof Error)){
var e__44992__auto__ = e46638;
if((e__44992__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__44992__auto__;
}
} else {
throw e46638;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46636){if((e46636 instanceof Error)){
var e__44992__auto__ = e46636;
if((e__44992__auto__ === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)].join('')));
} else {
throw e__44992__auto__;
}
} else {
throw e46636;

}
}}));
});
/**
 * add a digit to the numpad vector
 */
com.nicki.microwaver.main.numpad_add_digit = (function com$nicki$microwaver$main$numpad_add_digit(numpad,digit){
return cljs.core.subvec.call(null,cljs.core.conj.call(null,numpad,digit),(1));
});
/**
 * convert a vector of up to four integers into a clock readout string
 */
com.nicki.microwaver.main.numpad__GT_str = (function com$nicki$microwaver$main$numpad__GT_str(numpad){
var vec__46639 = numpad;
var a = cljs.core.nth.call(null,vec__46639,(0),null);
var b = cljs.core.nth.call(null,vec__46639,(1),null);
var c = cljs.core.nth.call(null,vec__46639,(2),null);
var d = cljs.core.nth.call(null,vec__46639,(3),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d)].join('');
});
/**
 * convert t to a string of two-digit mins and secs
 */
com.nicki.microwaver.main.t__GT_clock_str = (function com$nicki$microwaver$main$t__GT_clock_str(t){
var mins = cljs.core.quot.call(null,t,(60));
var secs = cljs.core.rem.call(null,t,(60));
var pad_zero = ((function (mins,secs){
return (function (num){
if((num > (9))){
return num;
} else {
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)].join('');
}
});})(mins,secs))
;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad_zero.call(null,mins)),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad_zero.call(null,secs))].join('');
});
/**
 * convert the numpad vector into integer seconds
 */
com.nicki.microwaver.main.numpad__GT_sec = (function com$nicki$microwaver$main$numpad__GT_sec(numpad){
var vec__46642 = numpad;
var a = cljs.core.nth.call(null,vec__46642,(0),null);
var b = cljs.core.nth.call(null,vec__46642,(1),null);
var c = cljs.core.nth.call(null,vec__46642,(2),null);
var d = cljs.core.nth.call(null,vec__46642,(3),null);
var secs = (((10) * c) + d);
var mins = (((10) * a) + b);
return (secs + ((60) * mins));
});
/**
 * t should never go above 5999 which is 99:59 on a clock
 */
com.nicki.microwaver.main.max_t = (function com$nicki$microwaver$main$max_t(t){
var x__37284__auto__ = (5999);
var y__37285__auto__ = t;
return ((x__37284__auto__ < y__37285__auto__) ? x__37284__auto__ : y__37285__auto__);
});
/**
 * t should never be negative
 */
com.nicki.microwaver.main.min_t = (function com$nicki$microwaver$main$min_t(t){
var x__37277__auto__ = (0);
var y__37278__auto__ = t;
return ((x__37277__auto__ > y__37278__auto__) ? x__37277__auto__ : y__37278__auto__);
});
/**
 * add x seconds to t
 */
com.nicki.microwaver.main.add_time_to_t = (function com$nicki$microwaver$main$add_time_to_t(x,t){
return com.nicki.microwaver.main.min_t.call(null,(x + t));
});
/**
 * subtract x seconds from t
 */
com.nicki.microwaver.main.dec_time_from_t = (function com$nicki$microwaver$main$dec_time_from_t(x,t){
return com.nicki.microwaver.main.min_t.call(null,(t - x));
});
com.nicki.microwaver.main._STAR_app = rum.core.build_defc.call(null,(function (trigger_BANG_,app){
var sc = new cljs.core.Keyword(null,"sc","sc",1148023032).cljs$core$IFn$_invoke$arity$1(app);
var env = (function (){var res__44469__auto__ = com.keminglabs.statetron.core.env.call(null,sc);
console.log(cljs.core.prn_str.call(null,res__44469__auto__));

return res__44469__auto__;
})();
return React.createElement("div",({"className": "display"}),React.createElement("h1",null,"Zappy 2000"),React.createElement("p",null,"A prototype microwave user interface."),React.createElement("div",({"className": "microwaveFrame"}),React.createElement("div",({"className": "leftcolumn"}),(function (){var attrs46663 = (cljs.core.truth_(com.keminglabs.statetron.core.active_QMARK_.call(null,sc,new cljs.core.Keyword("com.nicki.microwaver.main","On","com.nicki.microwaver.main/On",-884861110)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"microwave-on"], null):(cljs.core.truth_(com.keminglabs.statetron.core.active_QMARK_.call(null,sc,new cljs.core.Keyword("com.nicki.microwaver.main","Off","com.nicki.microwaver.main/Off",-787610379)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"microwave-off"], null):(cljs.core.truth_(com.keminglabs.statetron.core.active_QMARK_.call(null,sc,new cljs.core.Keyword("com.nicki.microwaver.main","Open","com.nicki.microwaver.main/Open",-30547631)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"microwave-open",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sc,env){
return (function (){
return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.microwaver.main","close-door","com.nicki.microwaver.main/close-door",254183394)], null));
});})(sc,env))
], null):null)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs46663))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["door"], null)], null),attrs46663)):({"className": "door"})),((cljs.core.map_QMARK_.call(null,attrs46663))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46663)], null)));
})()),React.createElement("div",({"className": "rightcolumn"}),(function (){var attrs46664 = (cljs.core.truth_(com.keminglabs.statetron.core.active_QMARK_.call(null,sc,new cljs.core.Keyword("com.nicki.microwaver.main","Done","com.nicki.microwaver.main/Done",-63615022)))?"Done":(cljs.core.truth_(com.keminglabs.statetron.core.active_QMARK_.call(null,sc,new cljs.core.Keyword("com.nicki.microwaver.main","Number-Pad","com.nicki.microwaver.main/Number-Pad",-435645760)))?com.nicki.microwaver.main.numpad__GT_str.call(null,new cljs.core.Keyword(null,"numpad","numpad",1794147033).cljs$core$IFn$_invoke$arity$1(env)):com.nicki.microwaver.main.t__GT_clock_str.call(null,new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(env))
));
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs46664))?sablono.interpreter.attributes.call(null,attrs46664):null),((cljs.core.map_QMARK_.call(null,attrs46664))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46664)], null)));
})(),React.createElement("div",({"onClick": ((function (sc,env){
return (function (){
return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.microwaver.main","add-30-sec","com.nicki.microwaver.main/add-30-sec",-1782786179)], null));
});})(sc,env))
, "className": "button"}),"Add 30 sec"),cljs.core.into_array.call(null,(function (){var iter__37807__auto__ = ((function (sc,env){
return (function com$nicki$microwaver$main$iter__46665(s__46666){
return (new cljs.core.LazySeq(null,((function (sc,env){
return (function (){
var s__46666__$1 = s__46666;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__46666__$1);
if(temp__5459__auto__){
var s__46666__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46666__$2)){
var c__37805__auto__ = cljs.core.chunk_first.call(null,s__46666__$2);
var size__37806__auto__ = cljs.core.count.call(null,c__37805__auto__);
var b__46668 = cljs.core.chunk_buffer.call(null,size__37806__auto__);
if((function (){var i__46667 = (0);
while(true){
if((i__46667 < size__37806__auto__)){
var row = cljs.core._nth.call(null,c__37805__auto__,i__46667);
cljs.core.chunk_append.call(null,b__46668,React.createElement("div",({"className": "numpad-row"}),cljs.core.into_array.call(null,(function (){var iter__37807__auto__ = ((function (i__46667,row,c__37805__auto__,size__37806__auto__,b__46668,s__46666__$2,temp__5459__auto__,sc,env){
return (function com$nicki$microwaver$main$iter__46665_$_iter__46669(s__46670){
return (new cljs.core.LazySeq(null,((function (i__46667,row,c__37805__auto__,size__37806__auto__,b__46668,s__46666__$2,temp__5459__auto__,sc,env){
return (function (){
var s__46670__$1 = s__46670;
while(true){
var temp__5459__auto____$1 = cljs.core.seq.call(null,s__46670__$1);
if(temp__5459__auto____$1){
var s__46670__$2 = temp__5459__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46670__$2)){
var c__37805__auto____$1 = cljs.core.chunk_first.call(null,s__46670__$2);
var size__37806__auto____$1 = cljs.core.count.call(null,c__37805__auto____$1);
var b__46672 = cljs.core.chunk_buffer.call(null,size__37806__auto____$1);
if((function (){var i__46671 = (0);
while(true){
if((i__46671 < size__37806__auto____$1)){
var x = cljs.core._nth.call(null,c__37805__auto____$1,i__46671);
cljs.core.chunk_append.call(null,b__46672,React.createElement("div",({"onClick": ((function (i__46671,i__46667,x,c__37805__auto____$1,size__37806__auto____$1,b__46672,s__46670__$2,temp__5459__auto____$1,row,c__37805__auto__,size__37806__auto__,b__46668,s__46666__$2,temp__5459__auto__,sc,env){
return (function (){
return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.microwaver.main","numpad-time","com.nicki.microwaver.main/numpad-time",1233015155),new cljs.core.Keyword(null,"val","val",128701612),x], null));
});})(i__46671,i__46667,x,c__37805__auto____$1,size__37806__auto____$1,b__46672,s__46670__$2,temp__5459__auto____$1,row,c__37805__auto__,size__37806__auto__,b__46668,s__46666__$2,temp__5459__auto__,sc,env))
, "className": "numpad_button"}),sablono.interpreter.interpret.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))));

var G__46681 = (i__46671 + (1));
i__46671 = G__46681;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46672),com$nicki$microwaver$main$iter__46665_$_iter__46669.call(null,cljs.core.chunk_rest.call(null,s__46670__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46672),null);
}
} else {
var x = cljs.core.first.call(null,s__46670__$2);
return cljs.core.cons.call(null,React.createElement("div",({"onClick": ((function (i__46667,x,s__46670__$2,temp__5459__auto____$1,row,c__37805__auto__,size__37806__auto__,b__46668,s__46666__$2,temp__5459__auto__,sc,env){
return (function (){
return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.microwaver.main","numpad-time","com.nicki.microwaver.main/numpad-time",1233015155),new cljs.core.Keyword(null,"val","val",128701612),x], null));
});})(i__46667,x,s__46670__$2,temp__5459__auto____$1,row,c__37805__auto__,size__37806__auto__,b__46668,s__46666__$2,temp__5459__auto__,sc,env))
, "className": "numpad_button"}),sablono.interpreter.interpret.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))),com$nicki$microwaver$main$iter__46665_$_iter__46669.call(null,cljs.core.rest.call(null,s__46670__$2)));
}
} else {
return null;
}
break;
}
});})(i__46667,row,c__37805__auto__,size__37806__auto__,b__46668,s__46666__$2,temp__5459__auto__,sc,env))
,null,null));
});})(i__46667,row,c__37805__auto__,size__37806__auto__,b__46668,s__46666__$2,temp__5459__auto__,sc,env))
;
return iter__37807__auto__.call(null,row);
})())));

var G__46682 = (i__46667 + (1));
i__46667 = G__46682;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46668),com$nicki$microwaver$main$iter__46665.call(null,cljs.core.chunk_rest.call(null,s__46666__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46668),null);
}
} else {
var row = cljs.core.first.call(null,s__46666__$2);
return cljs.core.cons.call(null,React.createElement("div",({"className": "numpad-row"}),cljs.core.into_array.call(null,(function (){var iter__37807__auto__ = ((function (row,s__46666__$2,temp__5459__auto__,sc,env){
return (function com$nicki$microwaver$main$iter__46665_$_iter__46673(s__46674){
return (new cljs.core.LazySeq(null,((function (row,s__46666__$2,temp__5459__auto__,sc,env){
return (function (){
var s__46674__$1 = s__46674;
while(true){
var temp__5459__auto____$1 = cljs.core.seq.call(null,s__46674__$1);
if(temp__5459__auto____$1){
var s__46674__$2 = temp__5459__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46674__$2)){
var c__37805__auto__ = cljs.core.chunk_first.call(null,s__46674__$2);
var size__37806__auto__ = cljs.core.count.call(null,c__37805__auto__);
var b__46676 = cljs.core.chunk_buffer.call(null,size__37806__auto__);
if((function (){var i__46675 = (0);
while(true){
if((i__46675 < size__37806__auto__)){
var x = cljs.core._nth.call(null,c__37805__auto__,i__46675);
cljs.core.chunk_append.call(null,b__46676,React.createElement("div",({"onClick": ((function (i__46675,x,c__37805__auto__,size__37806__auto__,b__46676,s__46674__$2,temp__5459__auto____$1,row,s__46666__$2,temp__5459__auto__,sc,env){
return (function (){
return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.microwaver.main","numpad-time","com.nicki.microwaver.main/numpad-time",1233015155),new cljs.core.Keyword(null,"val","val",128701612),x], null));
});})(i__46675,x,c__37805__auto__,size__37806__auto__,b__46676,s__46674__$2,temp__5459__auto____$1,row,s__46666__$2,temp__5459__auto__,sc,env))
, "className": "numpad_button"}),sablono.interpreter.interpret.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))));

var G__46683 = (i__46675 + (1));
i__46675 = G__46683;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46676),com$nicki$microwaver$main$iter__46665_$_iter__46673.call(null,cljs.core.chunk_rest.call(null,s__46674__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46676),null);
}
} else {
var x = cljs.core.first.call(null,s__46674__$2);
return cljs.core.cons.call(null,React.createElement("div",({"onClick": ((function (x,s__46674__$2,temp__5459__auto____$1,row,s__46666__$2,temp__5459__auto__,sc,env){
return (function (){
return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.microwaver.main","numpad-time","com.nicki.microwaver.main/numpad-time",1233015155),new cljs.core.Keyword(null,"val","val",128701612),x], null));
});})(x,s__46674__$2,temp__5459__auto____$1,row,s__46666__$2,temp__5459__auto__,sc,env))
, "className": "numpad_button"}),sablono.interpreter.interpret.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))),com$nicki$microwaver$main$iter__46665_$_iter__46673.call(null,cljs.core.rest.call(null,s__46674__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__46666__$2,temp__5459__auto__,sc,env))
,null,null));
});})(row,s__46666__$2,temp__5459__auto__,sc,env))
;
return iter__37807__auto__.call(null,row);
})())),com$nicki$microwaver$main$iter__46665.call(null,cljs.core.rest.call(null,s__46666__$2)));
}
} else {
return null;
}
break;
}
});})(sc,env))
,null,null));
});})(sc,env))
;
return iter__37807__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8),(9)], null)], null));
})()),React.createElement("div",({"className": "numpad-row"}),React.createElement("div",({"className": "empty_space"})),React.createElement("div",({"onClick": ((function (sc,env){
return (function (){
return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.microwaver.main","numpad-time","com.nicki.microwaver.main/numpad-time",1233015155),new cljs.core.Keyword(null,"val","val",128701612),(0)], null));
});})(sc,env))
, "className": "numpad_button"}),"0"),React.createElement("div",({"className": "empty_space"}))),React.createElement("div",({"className": "numpad-row two-buttons"}),React.createElement("div",({"onClick": ((function (sc,env){
return (function (){
return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.microwaver.main","clear","com.nicki.microwaver.main/clear",1295874746)], null));
});})(sc,env))
, "className": "numpad_button"}),"Cancel"),React.createElement("div",({"onClick": ((function (sc,env){
return (function (){
return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.microwaver.main","toggle-on-off","com.nicki.microwaver.main/toggle-on-off",-1770705328)], null));
});})(sc,env))
, "className": "numpad_button"}),"Start")),React.createElement("div",({"onClick": ((function (sc,env){
return (function (){
return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.microwaver.main","open-door","com.nicki.microwaver.main/open-door",1692234830)], null));
});})(sc,env))
, "className": "open_button"}),"Open"))),React.createElement("p",null,"I built this prototype microwave user interface to practice programming with state machines."),React.createElement("p",null,"State machines control the state of a machine. Each state represents or contains information about the Microwave itself (e.g. A 'Done' label in the microwave's display or an 'On' value for the interior light bulb). A state machine includes logic for how we move between states. For example, if I'm in the 'On' state, then the event of opening the door will cause a transition to the 'Off' state. For more information, please see",React.createElement("a",({"href": "https://www.sciencedirect.com/science/article/pii/0167642387900359"}),"Statecharts: A Visual Formalism for Complex Systems by David Harel.")),React.createElement("p",null,"Before building the graphical version of the microwave you see above, I built the state machine. In its basic form, I could test how my microwave would work and change some of my design decisions. I pretty quickly found that I had allowed the microwave to be open and on at the same time. A quick change to the state machine ensured that was no longer possible."),React.createElement("p",null,"Please give it a try!"),React.createElement("p",null,"See if you can break it or find any weird behavior. There are still more design decisions to consider. :) Here's a few:"),React.createElement("ul",null,React.createElement("li",null,"What happens if you hit 'Start' when there is no time on the clock? Do you think the microwave should behave that way? How would you change the state machine to prevent that behavior? (This is like an imaginary chess question because you haven't seen the code or a chart for the state machine.)"),React.createElement("li",null,"Should the microwave start microwaving when you hit 'Add 30 Sec', if the door is closed? Or should you have to hit 'Start' first?"),React.createElement("li",null,"Should this microwaver also have a timer function that counts down time without turning on the microwave?"),React.createElement("li",null,"Should the current time show on the display when the microwave isn't in use? Should the display turn off when not in use? How does someone set the current time? When does the display switch to the clock or turn off?")),React.createElement("p",null,"Made by ",React.createElement("a",({"href": "http://www.nickivance.com/"}),"Nicki Vance"),"."));
}),null,"*app");
com.nicki.microwaver.main.statechart = com.keminglabs.statetron.core.statechart.call(null,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Microwaver","com.nicki.microwaver.main/Microwaver",-1195028531),new cljs.core.Keyword("state","start?","state/start?",1533694543),true,new cljs.core.Keyword("state","enter","state/enter",1934253951),(function (env){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"t","t",-1397832519),(0),new cljs.core.Keyword(null,"numpad","numpad",1794147033),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Var(function(){return com.nicki.microwaver.main._STAR_app;},new cljs.core.Symbol("com.nicki.microwaver.main","*app","com.nicki.microwaver.main/*app",1740380209,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.nicki.microwaver.main","com.nicki.microwaver.main",-1890330340,null),new cljs.core.Symbol(null,"*app","*app",618162620,null),"/Users/woot15/Desktop/Dropbox/My_Projects/20171030_Microwave_UI_Statechart/microwaver/src/com/nicki/microwaver/main.cljs",15,1,88,88,cljs.core.List.EMPTY,null,(cljs.core.truth_(com.nicki.microwaver.main._STAR_app)?com.nicki.microwaver.main._STAR_app.cljs$lang$test:null)])));
}),new cljs.core.Keyword("state","children","state/children",-1049694637),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Open","com.nicki.microwaver.main/Open",-30547631)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Closed","com.nicki.microwaver.main/Closed",1393912198),new cljs.core.Keyword("state","start?","state/start?",1533694543),true,new cljs.core.Keyword("state","children","state/children",-1049694637),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","On","com.nicki.microwaver.main/On",-884861110)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","time?","com.nicki.microwaver.main/time?",1639894374)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Off","com.nicki.microwaver.main/Off",-787610379),new cljs.core.Keyword("state","start?","state/start?",1533694543),true,new cljs.core.Keyword("state","children","state/children",-1049694637),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Ready","com.nicki.microwaver.main/Ready",-1871420425),new cljs.core.Keyword("state","start?","state/start?",1533694543),true], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Number-Pad","com.nicki.microwaver.main/Number-Pad",-435645760),new cljs.core.Keyword("state","exit","state/exit",395251765),(function (env){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"numpad","numpad",1794147033),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Done","com.nicki.microwaver.main/Done",-63615022)], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.nicki.microwaver.main","open-door","com.nicki.microwaver.main/open-door",1692234830),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Closed","com.nicki.microwaver.main/Closed",1393912198)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Open","com.nicki.microwaver.main/Open",-30547631)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.nicki.microwaver.main","add-30-sec","com.nicki.microwaver.main/add-30-sec",-1782786179),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Ready","com.nicki.microwaver.main/Ready",-1871420425)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","On","com.nicki.microwaver.main/On",-884861110)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"display-numpad?","display-numpad?",-732081434),false,new cljs.core.Keyword(null,"t","t",-1397832519),com.nicki.microwaver.main.add_time_to_t.call(null,(30),new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(env)));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.nicki.microwaver.main","add-30-sec","com.nicki.microwaver.main/add-30-sec",-1782786179),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Done","com.nicki.microwaver.main/Done",-63615022)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","On","com.nicki.microwaver.main/On",-884861110)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"t","t",-1397832519),com.nicki.microwaver.main.add_time_to_t.call(null,(30),new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(env)));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.nicki.microwaver.main","add-30-sec","com.nicki.microwaver.main/add-30-sec",-1782786179),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Number-Pad","com.nicki.microwaver.main/Number-Pad",-435645760)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","On","com.nicki.microwaver.main/On",-884861110)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"t","t",-1397832519),com.nicki.microwaver.main.add_time_to_t.call(null,(30),new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(env)));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.nicki.microwaver.main","add-30-sec","com.nicki.microwaver.main/add-30-sec",-1782786179),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Microwaver","com.nicki.microwaver.main/Microwaver",-1195028531)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"display-numpad?","display-numpad?",-732081434),false,new cljs.core.Keyword(null,"t","t",-1397832519),com.nicki.microwaver.main.add_time_to_t.call(null,(30),new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(env)));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.nicki.microwaver.main","numpad-time","com.nicki.microwaver.main/numpad-time",1233015155),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Ready","com.nicki.microwaver.main/Ready",-1871420425)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Number-Pad","com.nicki.microwaver.main/Number-Pad",-435645760)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"t","t",-1397832519),com.nicki.microwaver.main.numpad__GT_sec.call(null,com.nicki.microwaver.main.numpad_add_digit.call(null,new cljs.core.Keyword(null,"numpad","numpad",1794147033).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(event))),new cljs.core.Keyword(null,"numpad","numpad",1794147033),com.nicki.microwaver.main.numpad_add_digit.call(null,new cljs.core.Keyword(null,"numpad","numpad",1794147033).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(event)));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.nicki.microwaver.main","numpad-time","com.nicki.microwaver.main/numpad-time",1233015155),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Number-Pad","com.nicki.microwaver.main/Number-Pad",-435645760)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"t","t",-1397832519),com.nicki.microwaver.main.numpad__GT_sec.call(null,com.nicki.microwaver.main.numpad_add_digit.call(null,new cljs.core.Keyword(null,"numpad","numpad",1794147033).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(event))),new cljs.core.Keyword(null,"numpad","numpad",1794147033),com.nicki.microwaver.main.numpad_add_digit.call(null,new cljs.core.Keyword(null,"numpad","numpad",1794147033).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(event)));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.nicki.microwaver.main","numpad-time","com.nicki.microwaver.main/numpad-time",1233015155),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Done","com.nicki.microwaver.main/Done",-63615022)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Number-Pad","com.nicki.microwaver.main/Number-Pad",-435645760)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"t","t",-1397832519),com.nicki.microwaver.main.numpad__GT_sec.call(null,com.nicki.microwaver.main.numpad_add_digit.call(null,new cljs.core.Keyword(null,"numpad","numpad",1794147033).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(event))),new cljs.core.Keyword(null,"numpad","numpad",1794147033),com.nicki.microwaver.main.numpad_add_digit.call(null,new cljs.core.Keyword(null,"numpad","numpad",1794147033).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(event)));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.nicki.microwaver.main","clear","com.nicki.microwaver.main/clear",1295874746),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Microwaver","com.nicki.microwaver.main/Microwaver",-1195028531)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"t","t",-1397832519),(0),new cljs.core.Keyword(null,"numpad","numpad",1794147033),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.nicki.microwaver.main","clear","com.nicki.microwaver.main/clear",1295874746),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","On","com.nicki.microwaver.main/On",-884861110)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Off","com.nicki.microwaver.main/Off",-787610379)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"t","t",-1397832519),(0),new cljs.core.Keyword(null,"numpad","numpad",1794147033),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.nicki.microwaver.main","clear","com.nicki.microwaver.main/clear",1295874746),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Done","com.nicki.microwaver.main/Done",-63615022)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Off","com.nicki.microwaver.main/Off",-787610379)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"t","t",-1397832519),(0),new cljs.core.Keyword(null,"numpad","numpad",1794147033),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.nicki.microwaver.main","clear","com.nicki.microwaver.main/clear",1295874746),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Number-Pad","com.nicki.microwaver.main/Number-Pad",-435645760)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Ready","com.nicki.microwaver.main/Ready",-1871420425)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"t","t",-1397832519),(0),new cljs.core.Keyword(null,"numpad","numpad",1794147033),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.nicki.microwaver.main","toggle-on-off","com.nicki.microwaver.main/toggle-on-off",-1770705328),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Off","com.nicki.microwaver.main/Off",-787610379)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","time?","com.nicki.microwaver.main/time?",1639894374)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.nicki.microwaver.main","toggle-on-off","com.nicki.microwaver.main/toggle-on-off",-1770705328),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","On","com.nicki.microwaver.main/On",-884861110)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Off","com.nicki.microwaver.main/Off",-787610379)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.nicki.microwaver.main","close-door","com.nicki.microwaver.main/close-door",254183394),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Open","com.nicki.microwaver.main/Open",-30547631)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Closed","com.nicki.microwaver.main/Closed",1393912198)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.nicki.microwaver.main","close-door","com.nicki.microwaver.main/close-door",254183394),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Done","com.nicki.microwaver.main/Done",-63615022)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Off","com.nicki.microwaver.main/Off",-787610379)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.nicki.microwaver.main","tick","com.nicki.microwaver.main/tick",-2021053955),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","On","com.nicki.microwaver.main/On",-884861110)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","time?","com.nicki.microwaver.main/time?",1639894374)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"t","t",-1397832519),com.nicki.microwaver.main.dec_time_from_t.call(null,(5),new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(env)));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","time?","com.nicki.microwaver.main/time?",1639894374),new cljs.core.Keyword("choice","fn","choice/fn",1187855813),(function (env,_){
if(((0) >= new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(env))){
return new cljs.core.Keyword("com.nicki.microwaver.main","Done","com.nicki.microwaver.main/Done",-63615022);
} else {
if(((0) < new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(env))){
return new cljs.core.Keyword("com.nicki.microwaver.main","On","com.nicki.microwaver.main/On",-884861110);
} else {
return com.keminglabs.statetron.core.error.call(null,["Choice '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.nicki.microwaver.main","time?","com.nicki.microwaver.main/time?",1639894374)),"' must return a state name, not nil."].join(''));

}
}
}),new cljs.core.Keyword("transition","_from","transition/_from",804784300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","Done","com.nicki.microwaver.main/Done",-63615022)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.microwaver.main","On","com.nicki.microwaver.main/On",-884861110)], null)], null)], null)], null)], null));
com.nicki.microwaver.main.render_BANG_ = (function com$nicki$microwaver$main$render_BANG_(app){
return ReactDOM.render(com.nicki.microwaver.main._STAR_app.call(null,com.nicki.microwaver.main.trigger_BANG_,app),document.getElementById("container"));
});
if(typeof com.nicki.microwaver.main.hack !== 'undefined'){
} else {
com.nicki.microwaver.main.hack = (function (){
cljs.core.add_watch.call(null,com.nicki.microwaver.main._BANG_app,new cljs.core.Keyword(null,"re-render","re-render",1133553258),(function (_,___$1,old,new$){
return com.nicki.microwaver.main.render_BANG_.call(null,new$);
}));

setInterval((function (){
return com.nicki.microwaver.main.trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.microwaver.main","tick","com.nicki.microwaver.main/tick",-2021053955)], null));
}),(3000));

return cljs.core.swap_BANG_.call(null,com.nicki.microwaver.main._BANG_app,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sc","sc",1148023032),com.keminglabs.statetron.core.start.call(null,com.nicki.microwaver.main.statechart)], null));
})()
;
}
var sc_46684 = com.keminglabs.statetron.core.step.call(null,com.keminglabs.statetron.core.start.call(null,com.nicki.microwaver.main.statechart),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.microwaver.main","open-door","com.nicki.microwaver.main/open-door",1692234830)], null));
if(cljs.core.truth_(com.keminglabs.statetron.core.active_QMARK_.call(null,sc_46684,new cljs.core.Keyword("com.nicki.microwaver.main","Open","com.nicki.microwaver.main/Open",-30547631)))){
} else {
var res__44463__auto___46685 = "The door isn't opening!";
console.log(res__44463__auto___46685);

}
var sc_46686 = com.keminglabs.statetron.core.step.call(null,com.keminglabs.statetron.core.start.call(null,com.nicki.microwaver.main.statechart),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.microwaver.main","add-30-sec","com.nicki.microwaver.main/add-30-sec",-1782786179)], null));
if(cljs.core.truth_((function (){var and__36913__auto__ = com.keminglabs.statetron.core.active_QMARK_.call(null,sc_46686,new cljs.core.Keyword("com.nicki.microwaver.main","On","com.nicki.microwaver.main/On",-884861110));
if(cljs.core.truth_(and__36913__auto__)){
return com.keminglabs.statetron.core.active_QMARK_.call(null,sc_46686,new cljs.core.Keyword("com.nicki.microwaver.main","Closed","com.nicki.microwaver.main/Closed",1393912198));
} else {
return and__36913__auto__;
}
})())){
} else {
var res__44463__auto___46687 = "Something's not right with adding 30 secs with the door closed!";
console.log(res__44463__auto___46687);

}
var first_sc_46688 = com.keminglabs.statetron.core.step.call(null,com.keminglabs.statetron.core.start.call(null,com.nicki.microwaver.main.statechart),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.microwaver.main","numpad-time","com.nicki.microwaver.main/numpad-time",1233015155),new cljs.core.Keyword(null,"val","val",128701612),(9)], null));
var second_sc_46689 = com.keminglabs.statetron.core.step.call(null,first_sc_46688,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.microwaver.main","numpad-time","com.nicki.microwaver.main/numpad-time",1233015155),new cljs.core.Keyword(null,"val","val",128701612),(0)], null));
var third_sc_46690 = com.keminglabs.statetron.core.step.call(null,second_sc_46689,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.microwaver.main","add-30-sec","com.nicki.microwaver.main/add-30-sec",-1782786179)], null));
var env_46691 = com.keminglabs.statetron.core.env.call(null,third_sc_46690);
if(((120) === new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(env_46691))){
} else {
var res__44463__auto___46692 = "The t or add 30 secs might not be working.";
console.log(res__44463__auto___46692);

}

//# sourceMappingURL=main.js.map?rel=1522141658682
