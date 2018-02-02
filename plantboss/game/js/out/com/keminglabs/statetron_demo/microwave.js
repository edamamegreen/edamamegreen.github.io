// Compiled by ClojureScript 1.9.946 {}
goog.provide('com.keminglabs.statetron_demo.microwave');
goog.require('cljs.core');
goog.require('com.keminglabs.statetron.core');
goog.require('com.keminglabs.statetron.playground');
goog.require('rum.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.gen.alpha');
goog.require('cljs.reader');
/**
 * add a digit to the numpad vector
 */
com.keminglabs.statetron_demo.microwave.numpad_add_digit = (function com$keminglabs$statetron_demo$microwave$numpad_add_digit(numpad,digit){
return cljs.core.subvec.call(null,cljs.core.conj.call(null,numpad,digit),(1));
});
/**
 * convert a vector of up to four integers into a clock readout string
 */
com.keminglabs.statetron_demo.microwave.numpad__GT_str = (function com$keminglabs$statetron_demo$microwave$numpad__GT_str(numpad){
var vec__55207 = numpad;
var a = cljs.core.nth.call(null,vec__55207,(0),null);
var b = cljs.core.nth.call(null,vec__55207,(1),null);
var c = cljs.core.nth.call(null,vec__55207,(2),null);
var d = cljs.core.nth.call(null,vec__55207,(3),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d)].join('');
});
/**
 * convert t to a string of two-digit mins and secs
 */
com.keminglabs.statetron_demo.microwave.t__GT_clock_str = (function com$keminglabs$statetron_demo$microwave$t__GT_clock_str(t){
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
com.keminglabs.statetron_demo.microwave.numpad__GT_sec = (function com$keminglabs$statetron_demo$microwave$numpad__GT_sec(numpad){
var vec__55210 = numpad;
var a = cljs.core.nth.call(null,vec__55210,(0),null);
var b = cljs.core.nth.call(null,vec__55210,(1),null);
var c = cljs.core.nth.call(null,vec__55210,(2),null);
var d = cljs.core.nth.call(null,vec__55210,(3),null);
var secs = (((10) * c) + d);
var mins = (((10) * a) + b);
return (secs + ((60) * mins));
});
/**
 * t should never go above 5999 which is 99:59 on a clock
 */
com.keminglabs.statetron_demo.microwave.max_t = (function com$keminglabs$statetron_demo$microwave$max_t(t){
var x__37284__auto__ = (5999);
var y__37285__auto__ = t;
return ((x__37284__auto__ < y__37285__auto__) ? x__37284__auto__ : y__37285__auto__);
});
/**
 * t should never be negative
 */
com.keminglabs.statetron_demo.microwave.min_t = (function com$keminglabs$statetron_demo$microwave$min_t(t){
var x__37277__auto__ = (0);
var y__37278__auto__ = t;
return ((x__37277__auto__ > y__37278__auto__) ? x__37277__auto__ : y__37278__auto__);
});
/**
 * add x seconds to t
 */
com.keminglabs.statetron_demo.microwave.add_time_to_t = (function com$keminglabs$statetron_demo$microwave$add_time_to_t(x,t){
return com.keminglabs.statetron_demo.microwave.min_t.call(null,(x + t));
});
/**
 * subtract x seconds from t
 */
com.keminglabs.statetron_demo.microwave.dec_time_from_t = (function com$keminglabs$statetron_demo$microwave$dec_time_from_t(x,t){
return com.keminglabs.statetron_demo.microwave.min_t.call(null,(t - x));
});
com.keminglabs.statetron_demo.microwave._STAR_app = rum.core.build_defc.call(null,(function (trigger_BANG_,sc){
var env = com.keminglabs.statetron.core.env.call(null,sc);
return React.createElement("div",({"className": "display"}),React.createElement("h1",null,"Zappy 2000"),React.createElement("div",({"className": "microwaveFrame"}),React.createElement("div",({"className": "leftcolumn"}),(function (){var attrs55215 = (cljs.core.truth_(com.keminglabs.statetron.core.active_QMARK_.call(null,sc,new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","On","com.keminglabs.statetron-demo.microwave/On",43389994)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"microwave-on"], null):(cljs.core.truth_(com.keminglabs.statetron.core.active_QMARK_.call(null,sc,new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Off","com.keminglabs.statetron-demo.microwave/Off",708504277)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"microwave-off"], null):(cljs.core.truth_(com.keminglabs.statetron.core.active_QMARK_.call(null,sc,new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Open","com.keminglabs.statetron-demo.microwave/Open",1150412657)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"microwave-open",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (env){
return (function (){
return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","close-door","com.keminglabs.statetron-demo.microwave/close-door",-730693182)], null));
});})(env))
], null):null)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs55215))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["door"], null)], null),attrs55215)):({"className": "door"})),((cljs.core.map_QMARK_.call(null,attrs55215))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs55215)], null)));
})()),React.createElement("div",({"className": "rightcolumn"}),(function (){var attrs55216 = (cljs.core.truth_(com.keminglabs.statetron.core.active_QMARK_.call(null,sc,new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Done","com.keminglabs.statetron-demo.microwave/Done",828457458)))?"Done":(cljs.core.truth_(com.keminglabs.statetron.core.active_QMARK_.call(null,sc,new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Number-Pad","com.keminglabs.statetron-demo.microwave/Number-Pad",-1662738208)))?com.keminglabs.statetron_demo.microwave.numpad__GT_str.call(null,new cljs.core.Keyword(null,"numpad","numpad",1794147033).cljs$core$IFn$_invoke$arity$1(env)):com.keminglabs.statetron_demo.microwave.t__GT_clock_str.call(null,new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(env))
));
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs55216))?sablono.interpreter.attributes.call(null,attrs55216):null),((cljs.core.map_QMARK_.call(null,attrs55216))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs55216)], null)));
})(),React.createElement("div",({"onClick": ((function (env){
return (function (){
return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","add-30-sec","com.keminglabs.statetron-demo.microwave/add-30-sec",-810496803)], null));
});})(env))
, "className": "button"}),"Add 30 sec"),cljs.core.into_array.call(null,(function (){var iter__37807__auto__ = ((function (env){
return (function com$keminglabs$statetron_demo$microwave$iter__55217(s__55218){
return (new cljs.core.LazySeq(null,((function (env){
return (function (){
var s__55218__$1 = s__55218;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__55218__$1);
if(temp__5459__auto__){
var s__55218__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55218__$2)){
var c__37805__auto__ = cljs.core.chunk_first.call(null,s__55218__$2);
var size__37806__auto__ = cljs.core.count.call(null,c__37805__auto__);
var b__55220 = cljs.core.chunk_buffer.call(null,size__37806__auto__);
if((function (){var i__55219 = (0);
while(true){
if((i__55219 < size__37806__auto__)){
var row = cljs.core._nth.call(null,c__37805__auto__,i__55219);
cljs.core.chunk_append.call(null,b__55220,React.createElement("div",({"className": "numpad-row"}),cljs.core.into_array.call(null,(function (){var iter__37807__auto__ = ((function (i__55219,row,c__37805__auto__,size__37806__auto__,b__55220,s__55218__$2,temp__5459__auto__,env){
return (function com$keminglabs$statetron_demo$microwave$iter__55217_$_iter__55221(s__55222){
return (new cljs.core.LazySeq(null,((function (i__55219,row,c__37805__auto__,size__37806__auto__,b__55220,s__55218__$2,temp__5459__auto__,env){
return (function (){
var s__55222__$1 = s__55222;
while(true){
var temp__5459__auto____$1 = cljs.core.seq.call(null,s__55222__$1);
if(temp__5459__auto____$1){
var s__55222__$2 = temp__5459__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55222__$2)){
var c__37805__auto____$1 = cljs.core.chunk_first.call(null,s__55222__$2);
var size__37806__auto____$1 = cljs.core.count.call(null,c__37805__auto____$1);
var b__55224 = cljs.core.chunk_buffer.call(null,size__37806__auto____$1);
if((function (){var i__55223 = (0);
while(true){
if((i__55223 < size__37806__auto____$1)){
var x = cljs.core._nth.call(null,c__37805__auto____$1,i__55223);
cljs.core.chunk_append.call(null,b__55224,React.createElement("div",({"onClick": ((function (i__55223,i__55219,x,c__37805__auto____$1,size__37806__auto____$1,b__55224,s__55222__$2,temp__5459__auto____$1,row,c__37805__auto__,size__37806__auto__,b__55220,s__55218__$2,temp__5459__auto__,env){
return (function (){
return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","numpad-time","com.keminglabs.statetron-demo.microwave/numpad-time",183124883),new cljs.core.Keyword(null,"val","val",128701612),x], null));
});})(i__55223,i__55219,x,c__37805__auto____$1,size__37806__auto____$1,b__55224,s__55222__$2,temp__5459__auto____$1,row,c__37805__auto__,size__37806__auto__,b__55220,s__55218__$2,temp__5459__auto__,env))
, "className": "numpad_button"}),sablono.interpreter.interpret.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))));

var G__55233 = (i__55223 + (1));
i__55223 = G__55233;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55224),com$keminglabs$statetron_demo$microwave$iter__55217_$_iter__55221.call(null,cljs.core.chunk_rest.call(null,s__55222__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55224),null);
}
} else {
var x = cljs.core.first.call(null,s__55222__$2);
return cljs.core.cons.call(null,React.createElement("div",({"onClick": ((function (i__55219,x,s__55222__$2,temp__5459__auto____$1,row,c__37805__auto__,size__37806__auto__,b__55220,s__55218__$2,temp__5459__auto__,env){
return (function (){
return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","numpad-time","com.keminglabs.statetron-demo.microwave/numpad-time",183124883),new cljs.core.Keyword(null,"val","val",128701612),x], null));
});})(i__55219,x,s__55222__$2,temp__5459__auto____$1,row,c__37805__auto__,size__37806__auto__,b__55220,s__55218__$2,temp__5459__auto__,env))
, "className": "numpad_button"}),sablono.interpreter.interpret.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))),com$keminglabs$statetron_demo$microwave$iter__55217_$_iter__55221.call(null,cljs.core.rest.call(null,s__55222__$2)));
}
} else {
return null;
}
break;
}
});})(i__55219,row,c__37805__auto__,size__37806__auto__,b__55220,s__55218__$2,temp__5459__auto__,env))
,null,null));
});})(i__55219,row,c__37805__auto__,size__37806__auto__,b__55220,s__55218__$2,temp__5459__auto__,env))
;
return iter__37807__auto__.call(null,row);
})())));

var G__55234 = (i__55219 + (1));
i__55219 = G__55234;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55220),com$keminglabs$statetron_demo$microwave$iter__55217.call(null,cljs.core.chunk_rest.call(null,s__55218__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55220),null);
}
} else {
var row = cljs.core.first.call(null,s__55218__$2);
return cljs.core.cons.call(null,React.createElement("div",({"className": "numpad-row"}),cljs.core.into_array.call(null,(function (){var iter__37807__auto__ = ((function (row,s__55218__$2,temp__5459__auto__,env){
return (function com$keminglabs$statetron_demo$microwave$iter__55217_$_iter__55225(s__55226){
return (new cljs.core.LazySeq(null,((function (row,s__55218__$2,temp__5459__auto__,env){
return (function (){
var s__55226__$1 = s__55226;
while(true){
var temp__5459__auto____$1 = cljs.core.seq.call(null,s__55226__$1);
if(temp__5459__auto____$1){
var s__55226__$2 = temp__5459__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55226__$2)){
var c__37805__auto__ = cljs.core.chunk_first.call(null,s__55226__$2);
var size__37806__auto__ = cljs.core.count.call(null,c__37805__auto__);
var b__55228 = cljs.core.chunk_buffer.call(null,size__37806__auto__);
if((function (){var i__55227 = (0);
while(true){
if((i__55227 < size__37806__auto__)){
var x = cljs.core._nth.call(null,c__37805__auto__,i__55227);
cljs.core.chunk_append.call(null,b__55228,React.createElement("div",({"onClick": ((function (i__55227,x,c__37805__auto__,size__37806__auto__,b__55228,s__55226__$2,temp__5459__auto____$1,row,s__55218__$2,temp__5459__auto__,env){
return (function (){
return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","numpad-time","com.keminglabs.statetron-demo.microwave/numpad-time",183124883),new cljs.core.Keyword(null,"val","val",128701612),x], null));
});})(i__55227,x,c__37805__auto__,size__37806__auto__,b__55228,s__55226__$2,temp__5459__auto____$1,row,s__55218__$2,temp__5459__auto__,env))
, "className": "numpad_button"}),sablono.interpreter.interpret.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))));

var G__55235 = (i__55227 + (1));
i__55227 = G__55235;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55228),com$keminglabs$statetron_demo$microwave$iter__55217_$_iter__55225.call(null,cljs.core.chunk_rest.call(null,s__55226__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55228),null);
}
} else {
var x = cljs.core.first.call(null,s__55226__$2);
return cljs.core.cons.call(null,React.createElement("div",({"onClick": ((function (x,s__55226__$2,temp__5459__auto____$1,row,s__55218__$2,temp__5459__auto__,env){
return (function (){
return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","numpad-time","com.keminglabs.statetron-demo.microwave/numpad-time",183124883),new cljs.core.Keyword(null,"val","val",128701612),x], null));
});})(x,s__55226__$2,temp__5459__auto____$1,row,s__55218__$2,temp__5459__auto__,env))
, "className": "numpad_button"}),sablono.interpreter.interpret.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))),com$keminglabs$statetron_demo$microwave$iter__55217_$_iter__55225.call(null,cljs.core.rest.call(null,s__55226__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__55218__$2,temp__5459__auto__,env))
,null,null));
});})(row,s__55218__$2,temp__5459__auto__,env))
;
return iter__37807__auto__.call(null,row);
})())),com$keminglabs$statetron_demo$microwave$iter__55217.call(null,cljs.core.rest.call(null,s__55218__$2)));
}
} else {
return null;
}
break;
}
});})(env))
,null,null));
});})(env))
;
return iter__37807__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8),(9)], null)], null));
})()),React.createElement("div",({"className": "numpad-row"}),React.createElement("div",({"className": "empty_space"})),React.createElement("div",({"onClick": ((function (env){
return (function (){
return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","numpad-time","com.keminglabs.statetron-demo.microwave/numpad-time",183124883),new cljs.core.Keyword(null,"val","val",128701612),(0)], null));
});})(env))
, "className": "numpad_button"}),"0"),React.createElement("div",({"className": "empty_space"}))),React.createElement("div",({"className": "numpad-row two-buttons"}),React.createElement("div",({"onClick": ((function (env){
return (function (){
return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","clear","com.keminglabs.statetron-demo.microwave/clear",120684762)], null));
});})(env))
, "className": "numpad_button"}),"Cancel"),React.createElement("div",({"onClick": ((function (env){
return (function (){
return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","toggle-on-off","com.keminglabs.statetron-demo.microwave/toggle-on-off",-534696784)], null));
});})(env))
, "className": "numpad_button"}),"Start")),React.createElement("div",({"onClick": ((function (env){
return (function (){
return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","open-door","com.keminglabs.statetron-demo.microwave/open-door",511798062)], null));
});})(env))
, "className": "open_button"}),"Open"))));
}),null,"*app");
com.keminglabs.statetron_demo.microwave.statechart = com.keminglabs.statetron.core.statechart.call(null,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Microwaver","com.keminglabs.statetron-demo.microwave/Microwaver",1868124845),new cljs.core.Keyword("state","start?","state/start?",1533694543),true,new cljs.core.Keyword("state","enter","state/enter",1934253951),(function (env){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"t","t",-1397832519),(0),new cljs.core.Keyword(null,"numpad","numpad",1794147033),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Var(function(){return com.keminglabs.statetron_demo.microwave._STAR_app;},new cljs.core.Symbol("com.keminglabs.statetron-demo.microwave","*app","com.keminglabs.statetron-demo.microwave/*app",-1368910319,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.keminglabs.statetron-demo.microwave","com.keminglabs.statetron-demo.microwave",-664222458,null),new cljs.core.Symbol(null,"*app","*app",618162620,null),"vendor/statetron/src/com/keminglabs/statetron_demo/microwave.cljs",15,1,72,72,cljs.core.List.EMPTY,null,(cljs.core.truth_(com.keminglabs.statetron_demo.microwave._STAR_app)?com.keminglabs.statetron_demo.microwave._STAR_app.cljs$lang$test:null)])));
}),new cljs.core.Keyword("state","children","state/children",-1049694637),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Open","com.keminglabs.statetron-demo.microwave/Open",1150412657)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Closed","com.keminglabs.statetron-demo.microwave/Closed",274817958),new cljs.core.Keyword("state","start?","state/start?",1533694543),true,new cljs.core.Keyword("state","children","state/children",-1049694637),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","On","com.keminglabs.statetron-demo.microwave/On",43389994)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","time?","com.keminglabs.statetron-demo.microwave/time?",-1559572730)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Off","com.keminglabs.statetron-demo.microwave/Off",708504277),new cljs.core.Keyword("state","start?","state/start?",1533694543),true,new cljs.core.Keyword("state","children","state/children",-1049694637),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Ready","com.keminglabs.statetron-demo.microwave/Ready",-610244969),new cljs.core.Keyword("state","start?","state/start?",1533694543),true], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Number-Pad","com.keminglabs.statetron-demo.microwave/Number-Pad",-1662738208),new cljs.core.Keyword("state","exit","state/exit",395251765),(function (env){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"numpad","numpad",1794147033),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Done","com.keminglabs.statetron-demo.microwave/Done",828457458)], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","open-door","com.keminglabs.statetron-demo.microwave/open-door",511798062),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Closed","com.keminglabs.statetron-demo.microwave/Closed",274817958)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Open","com.keminglabs.statetron-demo.microwave/Open",1150412657)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","add-30-sec","com.keminglabs.statetron-demo.microwave/add-30-sec",-810496803),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Ready","com.keminglabs.statetron-demo.microwave/Ready",-610244969)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","On","com.keminglabs.statetron-demo.microwave/On",43389994)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"display-numpad?","display-numpad?",-732081434),false,new cljs.core.Keyword(null,"t","t",-1397832519),com.keminglabs.statetron_demo.microwave.add_time_to_t.call(null,(30),new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(env)));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","add-30-sec","com.keminglabs.statetron-demo.microwave/add-30-sec",-810496803),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Done","com.keminglabs.statetron-demo.microwave/Done",828457458)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","On","com.keminglabs.statetron-demo.microwave/On",43389994)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"t","t",-1397832519),com.keminglabs.statetron_demo.microwave.add_time_to_t.call(null,(30),new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(env)));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","add-30-sec","com.keminglabs.statetron-demo.microwave/add-30-sec",-810496803),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Number-Pad","com.keminglabs.statetron-demo.microwave/Number-Pad",-1662738208)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","On","com.keminglabs.statetron-demo.microwave/On",43389994)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"t","t",-1397832519),com.keminglabs.statetron_demo.microwave.add_time_to_t.call(null,(30),new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(env)));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","add-30-sec","com.keminglabs.statetron-demo.microwave/add-30-sec",-810496803),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Microwaver","com.keminglabs.statetron-demo.microwave/Microwaver",1868124845)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"display-numpad?","display-numpad?",-732081434),false,new cljs.core.Keyword(null,"t","t",-1397832519),com.keminglabs.statetron_demo.microwave.add_time_to_t.call(null,(30),new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(env)));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","numpad-time","com.keminglabs.statetron-demo.microwave/numpad-time",183124883),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Ready","com.keminglabs.statetron-demo.microwave/Ready",-610244969)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Number-Pad","com.keminglabs.statetron-demo.microwave/Number-Pad",-1662738208)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"t","t",-1397832519),com.keminglabs.statetron_demo.microwave.numpad__GT_sec.call(null,com.keminglabs.statetron_demo.microwave.numpad_add_digit.call(null,new cljs.core.Keyword(null,"numpad","numpad",1794147033).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(event))),new cljs.core.Keyword(null,"numpad","numpad",1794147033),com.keminglabs.statetron_demo.microwave.numpad_add_digit.call(null,new cljs.core.Keyword(null,"numpad","numpad",1794147033).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(event)));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","numpad-time","com.keminglabs.statetron-demo.microwave/numpad-time",183124883),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Number-Pad","com.keminglabs.statetron-demo.microwave/Number-Pad",-1662738208)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"t","t",-1397832519),com.keminglabs.statetron_demo.microwave.numpad__GT_sec.call(null,com.keminglabs.statetron_demo.microwave.numpad_add_digit.call(null,new cljs.core.Keyword(null,"numpad","numpad",1794147033).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(event))),new cljs.core.Keyword(null,"numpad","numpad",1794147033),com.keminglabs.statetron_demo.microwave.numpad_add_digit.call(null,new cljs.core.Keyword(null,"numpad","numpad",1794147033).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(event)));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","numpad-time","com.keminglabs.statetron-demo.microwave/numpad-time",183124883),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Done","com.keminglabs.statetron-demo.microwave/Done",828457458)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Number-Pad","com.keminglabs.statetron-demo.microwave/Number-Pad",-1662738208)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"t","t",-1397832519),com.keminglabs.statetron_demo.microwave.numpad__GT_sec.call(null,com.keminglabs.statetron_demo.microwave.numpad_add_digit.call(null,new cljs.core.Keyword(null,"numpad","numpad",1794147033).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(event))),new cljs.core.Keyword(null,"numpad","numpad",1794147033),com.keminglabs.statetron_demo.microwave.numpad_add_digit.call(null,new cljs.core.Keyword(null,"numpad","numpad",1794147033).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(event)));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","clear","com.keminglabs.statetron-demo.microwave/clear",120684762),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Microwaver","com.keminglabs.statetron-demo.microwave/Microwaver",1868124845)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"t","t",-1397832519),(0),new cljs.core.Keyword(null,"numpad","numpad",1794147033),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","clear","com.keminglabs.statetron-demo.microwave/clear",120684762),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","On","com.keminglabs.statetron-demo.microwave/On",43389994)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Off","com.keminglabs.statetron-demo.microwave/Off",708504277)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"t","t",-1397832519),(0),new cljs.core.Keyword(null,"numpad","numpad",1794147033),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","clear","com.keminglabs.statetron-demo.microwave/clear",120684762),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Done","com.keminglabs.statetron-demo.microwave/Done",828457458)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Off","com.keminglabs.statetron-demo.microwave/Off",708504277)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"t","t",-1397832519),(0),new cljs.core.Keyword(null,"numpad","numpad",1794147033),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","clear","com.keminglabs.statetron-demo.microwave/clear",120684762),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Number-Pad","com.keminglabs.statetron-demo.microwave/Number-Pad",-1662738208)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Ready","com.keminglabs.statetron-demo.microwave/Ready",-610244969)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"t","t",-1397832519),(0),new cljs.core.Keyword(null,"numpad","numpad",1794147033),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","toggle-on-off","com.keminglabs.statetron-demo.microwave/toggle-on-off",-534696784),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Off","com.keminglabs.statetron-demo.microwave/Off",708504277)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","time?","com.keminglabs.statetron-demo.microwave/time?",-1559572730)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","toggle-on-off","com.keminglabs.statetron-demo.microwave/toggle-on-off",-534696784),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","On","com.keminglabs.statetron-demo.microwave/On",43389994)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Off","com.keminglabs.statetron-demo.microwave/Off",708504277)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","close-door","com.keminglabs.statetron-demo.microwave/close-door",-730693182),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Open","com.keminglabs.statetron-demo.microwave/Open",1150412657)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Closed","com.keminglabs.statetron-demo.microwave/Closed",274817958)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","close-door","com.keminglabs.statetron-demo.microwave/close-door",-730693182),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Done","com.keminglabs.statetron-demo.microwave/Done",828457458)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Off","com.keminglabs.statetron-demo.microwave/Off",708504277)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","tick","com.keminglabs.statetron-demo.microwave/tick",786237405),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","On","com.keminglabs.statetron-demo.microwave/On",43389994)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","time?","com.keminglabs.statetron-demo.microwave/time?",-1559572730)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"t","t",-1397832519),com.keminglabs.statetron_demo.microwave.dec_time_from_t.call(null,(5),new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(env)));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","time?","com.keminglabs.statetron-demo.microwave/time?",-1559572730),new cljs.core.Keyword("choice","fn","choice/fn",1187855813),(function (env,_){
if(((0) >= new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(env))){
return new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Done","com.keminglabs.statetron-demo.microwave/Done",828457458);
} else {
if(((0) < new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(env))){
return new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","On","com.keminglabs.statetron-demo.microwave/On",43389994);
} else {
return com.keminglabs.statetron.core.error.call(null,["Choice '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","time?","com.keminglabs.statetron-demo.microwave/time?",-1559572730)),"' must return a state name, not nil."].join(''));

}
}
}),new cljs.core.Keyword("transition","_from","transition/_from",804784300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Done","com.keminglabs.statetron-demo.microwave/Done",828457458)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","On","com.keminglabs.statetron-demo.microwave/On",43389994)], null)], null)], null)], null)], null));
if(typeof com.keminglabs.statetron_demo.microwave._ !== 'undefined'){
} else {
com.keminglabs.statetron_demo.microwave._ = com.keminglabs.statetron.playground.start_BANG_.call(null,document.getElementById("container"),com.keminglabs.statetron_demo.microwave.statechart,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history?","history?",2009378510),false,new cljs.core.Keyword(null,"benchmark?","benchmark?",408532838),true], null));
}
var sc_55236 = com.keminglabs.statetron.core.step.call(null,com.keminglabs.statetron.core.start.call(null,com.keminglabs.statetron_demo.microwave.statechart),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","open-door","com.keminglabs.statetron-demo.microwave/open-door",511798062)], null));
if(cljs.core.truth_(com.keminglabs.statetron.core.active_QMARK_.call(null,sc_55236,new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Open","com.keminglabs.statetron-demo.microwave/Open",1150412657)))){
} else {
var res__47110__auto___55237 = "The door isn't opening!";
console.log(res__47110__auto___55237);

}
var sc_55238 = com.keminglabs.statetron.core.step.call(null,com.keminglabs.statetron.core.start.call(null,com.keminglabs.statetron_demo.microwave.statechart),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","add-30-sec","com.keminglabs.statetron-demo.microwave/add-30-sec",-810496803)], null));
if(cljs.core.truth_((function (){var and__36913__auto__ = com.keminglabs.statetron.core.active_QMARK_.call(null,sc_55238,new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","On","com.keminglabs.statetron-demo.microwave/On",43389994));
if(cljs.core.truth_(and__36913__auto__)){
return com.keminglabs.statetron.core.active_QMARK_.call(null,sc_55238,new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","Closed","com.keminglabs.statetron-demo.microwave/Closed",274817958));
} else {
return and__36913__auto__;
}
})())){
} else {
var res__47110__auto___55239 = "Something's not right with adding 30 secs with the door closed!";
console.log(res__47110__auto___55239);

}
var first_sc_55240 = com.keminglabs.statetron.core.step.call(null,com.keminglabs.statetron.core.start.call(null,com.keminglabs.statetron_demo.microwave.statechart),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","numpad-time","com.keminglabs.statetron-demo.microwave/numpad-time",183124883),new cljs.core.Keyword(null,"val","val",128701612),(9)], null));
var second_sc_55241 = com.keminglabs.statetron.core.step.call(null,first_sc_55240,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","numpad-time","com.keminglabs.statetron-demo.microwave/numpad-time",183124883),new cljs.core.Keyword(null,"val","val",128701612),(0)], null));
var third_sc_55242 = com.keminglabs.statetron.core.step.call(null,second_sc_55241,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.keminglabs.statetron-demo.microwave","add-30-sec","com.keminglabs.statetron-demo.microwave/add-30-sec",-810496803)], null));
var env_55243 = com.keminglabs.statetron.core.env.call(null,third_sc_55242);
if(((120) === new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(env_55243))){
} else {
var res__47110__auto___55244 = "The t or add 30 secs might not be working.";
console.log(res__47110__auto___55244);

}

//# sourceMappingURL=microwave.js.map?rel=1517117194322
