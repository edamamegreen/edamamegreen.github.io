// Compiled by ClojureScript 1.9.946 {}
goog.provide('com.nicki.plantboss.main');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('datascript.core');
goog.require('rum.core');
goog.require('com.keminglabs.statetron.core');
goog.require('com.keminglabs.statetron.playground');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof com.nicki.plantboss.main._BANG_app !== 'undefined'){
} else {
com.nicki.plantboss.main._BANG_app = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
com.nicki.plantboss.main.trigger_BANG_ = (function com$nicki$plantboss$main$trigger_BANG_(event){
return cljs.core.swap_BANG_.call(null,com.nicki.plantboss.main._BANG_app,(function (app){
try{if(((!((event == null)))?((((event.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === event.cljs$core$ILookup$)))?true:(((!event.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event))){
try{var event_name__62164 = cljs.core.get.call(null,event,new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.call(null,event_name__62164,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
return cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"sc","sc",1148023032),com.keminglabs.statetron.core.step.call(null,new cljs.core.Keyword(null,"sc","sc",1148023032).cljs$core$IFn$_invoke$arity$1(app),event));
} else {
throw cljs.core.match.backtrack;

}
}catch (e62167){if((e62167 instanceof Error)){
var e__54238__auto__ = e62167;
if((e__54238__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54238__auto__;
}
} else {
throw e62167;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e62165){if((e62165 instanceof Error)){
var e__54238__auto__ = e62165;
if((e__54238__auto__ === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)].join('')));
} else {
throw e__54238__auto__;
}
} else {
throw e62165;

}
}}));
});
/**
 * calculate the age of a plant from its map and the environment
 */
com.nicki.plantboss.main.calc_age = (function com$nicki$plantboss$main$calc_age(map,env){
return (new cljs.core.Keyword(null,"current-time","current-time",-1609407134).cljs$core$IFn$_invoke$arity$1(env) - new cljs.core.Keyword(null,"created","created",-704993748).cljs$core$IFn$_invoke$arity$1(map));
});
/**
 * adjust the age to provide an appropriate scale value for the plants to be used in stepping the sprite sheets
 */
com.nicki.plantboss.main.scale_age = (function com$nicki$plantboss$main$scale_age(age){
var x__37277__auto__ = (1);
var y__37278__auto__ = (age / (10000));
return ((x__37277__auto__ > y__37278__auto__) ? x__37277__auto__ : y__37278__auto__);
});
/**
 * subtract the cost of a plant from your bank
 */
com.nicki.plantboss.main.subtract_cost = (function com$nicki$plantboss$main$subtract_cost(env,event){
return cljs.core.assoc_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"money","money",250333921)], null),(new cljs.core.Keyword(null,"money","money",250333921).cljs$core$IFn$_invoke$arity$1(env) - new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(event))));
});
/**
 * update plants vector with event plant
 */
com.nicki.plantboss.main.add_to_greenhouse = (function com$nicki$plantboss$main$add_to_greenhouse(env,event){
var new_plant = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"created","created",-704993748),new cljs.core.Keyword(null,"current-time","current-time",-1609407134).cljs$core$IFn$_invoke$arity$1(env));
return cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plants","plants",-1289631325)], null),cljs.core.conj,new_plant);
});
/**
 * check if a plant map (or object) is in the greenhouse-plants vector
 */
com.nicki.plantboss.main.in_greenhouse_QMARK_ = (function com$nicki$plantboss$main$in_greenhouse_QMARK_(plant,app){
var greenhouse_plants = new cljs.core.Keyword(null,"plants","plants",-1289631325).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sc","sc",1148023032).cljs$core$IFn$_invoke$arity$1(app)));
return ((0) < cljs.core.count.call(null,cljs.core.filter.call(null,((function (greenhouse_plants){
return (function (x){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plant),x);
});})(greenhouse_plants))
,cljs.core.map.call(null,((function (greenhouse_plants){
return (function (p1__62168_SHARP_){
return cljs.core.get.call(null,p1__62168_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177));
});})(greenhouse_plants))
,greenhouse_plants))));
});
/**
 * check if a visitor is currently visiting
 */
com.nicki.plantboss.main.currently_visiting_QMARK_ = (function com$nicki$plantboss$main$currently_visiting_QMARK_(visitor){
return cljs.core.contains_QMARK_.call(null,visitor,new cljs.core.Keyword(null,"departure","departure",841406437));
});
/**
 * given the current state, decide whether and which visitor should visit and return a new state
 */
com.nicki.plantboss.main.add_visitor = (function com$nicki$plantboss$main$add_visitor(env){
var available_visitors = cljs.core.vec.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,com.nicki.plantboss.main.currently_visiting_QMARK_),new cljs.core.Keyword(null,"visitors","visitors",1404506988).cljs$core$IFn$_invoke$arity$1(env)));
var visiting_visitors = cljs.core.vec.call(null,cljs.core.filter.call(null,com.nicki.plantboss.main.currently_visiting_QMARK_,new cljs.core.Keyword(null,"visitors","visitors",1404506988).cljs$core$IFn$_invoke$arity$1(env)));
var visitor_to_update = cljs.core.nth.call(null,available_visitors,cljs.core.rand_int.call(null,cljs.core.count.call(null,available_visitors)),null);
var new_visitor = cljs.core.assoc.call(null,visitor_to_update,new cljs.core.Keyword(null,"departure","departure",841406437),((30000) + new cljs.core.Keyword(null,"current-time","current-time",-1609407134).cljs$core$IFn$_invoke$arity$1(env)));
if((((3) > cljs.core.count.call(null,visiting_visitors))) && (cljs.core._EQ_.call(null,(1),cljs.core.rand_int.call(null,(3))))){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visitors","visitors",1404506988)], null),cljs.core.remove.call(null,((function (available_visitors,visiting_visitors,visitor_to_update,new_visitor){
return (function (p1__62169_SHARP_){
return cljs.core._EQ_.call(null,visitor_to_update,p1__62169_SHARP_);
});})(available_visitors,visiting_visitors,visitor_to_update,new_visitor))
,new cljs.core.Keyword(null,"visitors","visitors",1404506988).cljs$core$IFn$_invoke$arity$1(env))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visitors","visitors",1404506988)], null),cljs.core.conj,new_visitor);
} else {
return env;
}
});
/**
 * remove any visitors that have reached their departure time and return a new game state
 */
com.nicki.plantboss.main.remove_visitors = (function com$nicki$plantboss$main$remove_visitors(env){
var map__62171 = cljs.core.group_by.call(null,(function (p1__62170_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"current-time","current-time",-1609407134).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"departure","departure",841406437).cljs$core$IFn$_invoke$arity$1(p1__62170_SHARP_));
}),new cljs.core.Keyword(null,"visitors","visitors",1404506988).cljs$core$IFn$_invoke$arity$1(env));
var map__62171__$1 = ((((!((map__62171 == null)))?((((map__62171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62171.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62171):map__62171);
var leaving = cljs.core.get.call(null,map__62171__$1,true);
var rest = cljs.core.get.call(null,map__62171__$1,false);
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visitors","visitors",1404506988)], null),cljs.core.into.call(null,rest,cljs.core.vec.call(null,cljs.core.map.call(null,((function (map__62171,map__62171__$1,leaving,rest){
return (function (visitor){
return cljs.core.dissoc.call(null,visitor,new cljs.core.Keyword(null,"departure","departure",841406437));
});})(map__62171,map__62171__$1,leaving,rest))
,leaving)))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"money","money",250333921)], null),cljs.core._PLUS_,((cljs.core.empty_QMARK_.call(null,leaving))?(0):cljs.core.rand_int.call(null,(26))));
});
/**
 * create a close button
 */
com.nicki.plantboss.main._STAR_close = rum.core.build_defc.call(null,(function (){
return React.createElement("div",({"onClick": (function (){
return com.nicki.plantboss.main.trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.plantboss.main","close","com.nicki.plantboss.main/close",-1651587150)], null));
}), "className": "close-button"}),"Close");
}),null,"*close");
/**
 * generate react components for greenhouse screen
 */
com.nicki.plantboss.main._STAR_loading = rum.core.build_defc.call(null,(function (){
return React.createElement("div",({"className": "loading"}),React.createElement("h1",null,"Plant Boss"),React.createElement("img",({"src": "images/plant1.svg", "draggable": "false", "className": "loader"})),React.createElement("div",({"onClick": (function (){
return com.nicki.plantboss.main.trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.plantboss.main","finished-loading","com.nicki.plantboss.main/finished-loading",1599638983)], null));
}), "className": "loading-button"}),"Play"));
}),null,"*loading");
/**
 * generate react components for greenhouse screen
 */
com.nicki.plantboss.main._STAR_greenhouse = rum.core.build_defc.call(null,(function (app){
return React.createElement("div",({"className": "greenhouse"}),React.createElement("img",({"src": "images/supplybook.svg", "onClick": (function (){
return com.nicki.plantboss.main.trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.plantboss.main","open-supplies","com.nicki.plantboss.main/open-supplies",-562211826)], null));
}), "draggable": "false", "className": "supplybook"})),React.createElement("img",({"src": "images/clock.svg", "onClick": (function (){
return com.nicki.plantboss.main.trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.plantboss.main","tick","com.nicki.plantboss.main/tick",-31097580)], null));
}), "draggable": "false", "className": "clock"})),cljs.core.into_array.call(null,(function (){var iter__37807__auto__ = (function com$nicki$plantboss$main$iter__62177(s__62178){
return (new cljs.core.LazySeq(null,(function (){
var s__62178__$1 = s__62178;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__62178__$1);
if(temp__5459__auto__){
var s__62178__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__62178__$2)){
var c__37805__auto__ = cljs.core.chunk_first.call(null,s__62178__$2);
var size__37806__auto__ = cljs.core.count.call(null,c__37805__auto__);
var b__62180 = cljs.core.chunk_buffer.call(null,size__37806__auto__);
if((function (){var i__62179 = (0);
while(true){
if((i__62179 < size__37806__auto__)){
var visitor = cljs.core._nth.call(null,c__37805__auto__,i__62179);
cljs.core.chunk_append.call(null,b__62180,sablono.interpreter.interpret.call(null,(cljs.core.truth_(com.nicki.plantboss.main.currently_visiting_QMARK_.call(null,visitor))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".visitor",".visitor",-656125117),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),["url('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(visitor)),"')"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(visitor),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(visitor),new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(visitor),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"loc","loc",-584284901).cljs$core$IFn$_invoke$arity$1(visitor))),"px"].join(''),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,new cljs.core.Keyword(null,"loc","loc",-584284901).cljs$core$IFn$_invoke$arity$1(visitor))),"px"].join('')], null)], null)], null):null)));

var G__62186 = (i__62179 + (1));
i__62179 = G__62186;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62180),com$nicki$plantboss$main$iter__62177.call(null,cljs.core.chunk_rest.call(null,s__62178__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62180),null);
}
} else {
var visitor = cljs.core.first.call(null,s__62178__$2);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(cljs.core.truth_(com.nicki.plantboss.main.currently_visiting_QMARK_.call(null,visitor))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".visitor",".visitor",-656125117),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),["url('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(visitor)),"')"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(visitor),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(visitor),new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(visitor),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"loc","loc",-584284901).cljs$core$IFn$_invoke$arity$1(visitor))),"px"].join(''),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,new cljs.core.Keyword(null,"loc","loc",-584284901).cljs$core$IFn$_invoke$arity$1(visitor))),"px"].join('')], null)], null)], null):null)),com$nicki$plantboss$main$iter__62177.call(null,cljs.core.rest.call(null,s__62178__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__37807__auto__.call(null,new cljs.core.Keyword(null,"visitors","visitors",1404506988).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sc","sc",1148023032).cljs$core$IFn$_invoke$arity$1(app))));
})()),(function (){var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sc","sc",1148023032).cljs$core$IFn$_invoke$arity$1(app));
var greenhouse_plants = new cljs.core.Keyword(null,"plants","plants",-1289631325).cljs$core$IFn$_invoke$arity$1(env);
return cljs.core.into_array.call(null,(function (){var iter__37807__auto__ = ((function (env,greenhouse_plants){
return (function com$nicki$plantboss$main$iter__62181(s__62182){
return (new cljs.core.LazySeq(null,((function (env,greenhouse_plants){
return (function (){
var s__62182__$1 = s__62182;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__62182__$1);
if(temp__5459__auto__){
var s__62182__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__62182__$2)){
var c__37805__auto__ = cljs.core.chunk_first.call(null,s__62182__$2);
var size__37806__auto__ = cljs.core.count.call(null,c__37805__auto__);
var b__62184 = cljs.core.chunk_buffer.call(null,size__37806__auto__);
if((function (){var i__62183 = (0);
while(true){
if((i__62183 < size__37806__auto__)){
var plant = cljs.core._nth.call(null,c__37805__auto__,i__62183);
cljs.core.chunk_append.call(null,b__62184,React.createElement("div",({"style": ({"top": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"loc","loc",-584284901).cljs$core$IFn$_invoke$arity$1(plant))),"px"].join(''), "left": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,new cljs.core.Keyword(null,"loc","loc",-584284901).cljs$core$IFn$_invoke$arity$1(plant))),"px"].join(''), "transform": ["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(plant)),")"].join('')}), "className": "plant"}),React.createElement("img",({"src": new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(plant), "draggable": "false"})),React.createElement("div",({"style": ({"backgroundImage": ["url('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"spritesheet","spritesheet",-542003038).cljs$core$IFn$_invoke$arity$1(plant)),"')"].join(''), "backgroundPositionX": [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((-1) * com.nicki.plantboss.main.scale_age.call(null,com.nicki.plantboss.main.calc_age.call(null,plant,env))) * new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(plant))),"px"].join(''), "height": new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(plant), "width": new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(plant)}), "className": "leaves"})),React.createElement("img",({"src": new cljs.core.Keyword(null,"pot","pot",640262911).cljs$core$IFn$_invoke$arity$1(plant), "draggable": "false", "className": "pot"}))));

var G__62187 = (i__62183 + (1));
i__62183 = G__62187;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62184),com$nicki$plantboss$main$iter__62181.call(null,cljs.core.chunk_rest.call(null,s__62182__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62184),null);
}
} else {
var plant = cljs.core.first.call(null,s__62182__$2);
return cljs.core.cons.call(null,React.createElement("div",({"style": ({"top": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"loc","loc",-584284901).cljs$core$IFn$_invoke$arity$1(plant))),"px"].join(''), "left": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,new cljs.core.Keyword(null,"loc","loc",-584284901).cljs$core$IFn$_invoke$arity$1(plant))),"px"].join(''), "transform": ["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(plant)),")"].join('')}), "className": "plant"}),React.createElement("img",({"src": new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(plant), "draggable": "false"})),React.createElement("div",({"style": ({"backgroundImage": ["url('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"spritesheet","spritesheet",-542003038).cljs$core$IFn$_invoke$arity$1(plant)),"')"].join(''), "backgroundPositionX": [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((-1) * com.nicki.plantboss.main.scale_age.call(null,com.nicki.plantboss.main.calc_age.call(null,plant,env))) * new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(plant))),"px"].join(''), "height": new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(plant), "width": new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(plant)}), "className": "leaves"})),React.createElement("img",({"src": new cljs.core.Keyword(null,"pot","pot",640262911).cljs$core$IFn$_invoke$arity$1(plant), "draggable": "false", "className": "pot"}))),com$nicki$plantboss$main$iter__62181.call(null,cljs.core.rest.call(null,s__62182__$2)));
}
} else {
return null;
}
break;
}
});})(env,greenhouse_plants))
,null,null));
});})(env,greenhouse_plants))
;
return iter__37807__auto__.call(null,greenhouse_plants);
})());
})(),React.createElement("div",({"style": ({"backgroundImage": "url('images/coins.svg')", "backgroundPositionY": (function (){var money = new cljs.core.Keyword(null,"money","money",250333921).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sc","sc",1148023032).cljs$core$IFn$_invoke$arity$1(app)));
var sprite_height = (50);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((0) >= money))?(50):(((((0) < money)) && ((money < (1800))))?(((2) + cljs.core.quot.call(null,money,(200))) * sprite_height):(((money >= (1800)))?((12) * sprite_height):(0)
)))),"px"].join('');
})(), "draggable": "false"}), "className": "money"}),(function (){var attrs62185 = new cljs.core.Keyword(null,"money","money",250333921).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sc","sc",1148023032).cljs$core$IFn$_invoke$arity$1(app)));
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs62185))?sablono.interpreter.attributes.call(null,attrs62185):null),((cljs.core.map_QMARK_.call(null,attrs62185))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs62185)], null)));
})()));
}),null,"*greenhouse");
/**
 * generate react components for supplies screen
 */
com.nicki.plantboss.main._STAR_supplies_list = rum.core.build_defc.call(null,(function (app){
return React.createElement("div",({"className": "supplies"}),React.createElement("div",({"className": "supplies-container"}),React.createElement("h1",null,"McPlant Supplies"),(function (){var attrs62190 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"money","money",250333921).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sc","sc",1148023032).cljs$core$IFn$_invoke$arity$1(app))))," coins in your account."].join('');
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs62190))?sablono.interpreter.attributes.call(null,attrs62190):null),((cljs.core.map_QMARK_.call(null,attrs62190))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs62190)], null)));
})(),cljs.core.into_array.call(null,(function (){var iter__37807__auto__ = (function com$nicki$plantboss$main$iter__62191(s__62192){
return (new cljs.core.LazySeq(null,(function (){
var s__62192__$1 = s__62192;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__62192__$1);
if(temp__5459__auto__){
var s__62192__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__62192__$2)){
var c__37805__auto__ = cljs.core.chunk_first.call(null,s__62192__$2);
var size__37806__auto__ = cljs.core.count.call(null,c__37805__auto__);
var b__62194 = cljs.core.chunk_buffer.call(null,size__37806__auto__);
if((function (){var i__62193 = (0);
while(true){
if((i__62193 < size__37806__auto__)){
var item = cljs.core._nth.call(null,c__37805__auto__,i__62193);
cljs.core.chunk_append.call(null,b__62194,React.createElement("div",({"className": "item"}),React.createElement("div",({"className": "supply-plant"}),React.createElement("img",({"src": new cljs.core.Keyword(null,"supply-src","supply-src",-1976641468).cljs$core$IFn$_invoke$arity$1(item)}))),React.createElement("div",({"className": "item-info"}),(function (){var attrs62196 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs62196))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-name"], null)], null),attrs62196)):({"className": "item-name"})),((cljs.core.map_QMARK_.call(null,attrs62196))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs62196)], null)));
})(),(function (){var attrs62197 = new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(item);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs62197))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-cost"], null)], null),attrs62197)):({"className": "item-cost"})),((cljs.core.map_QMARK_.call(null,attrs62197))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs62197)], null)));
})()),(function (){var attrs62195 = ((cljs.core.not.call(null,com.nicki.plantboss.main.in_greenhouse_QMARK_.call(null,item,app)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".buy-button",".buy-button",1809047940),(((new cljs.core.Keyword(null,"money","money",250333921).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sc","sc",1148023032).cljs$core$IFn$_invoke$arity$1(app))) >= new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(item)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-is-active","data-is-active",843859109),"true",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__62193,item,c__37805__auto__,size__37806__auto__,b__62194,s__62192__$2,temp__5459__auto__){
return (function (){
return com.nicki.plantboss.main.trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.plantboss.main","buy-item","com.nicki.plantboss.main/buy-item",-36860887),new cljs.core.Keyword(null,"item","item",249373802),item], null));
});})(i__62193,item,c__37805__auto__,size__37806__auto__,b__62194,s__62192__$2,temp__5459__auto__))
], null):null),"Buy"], null):null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs62195))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["button-container"], null)], null),attrs62195)):({"className": "button-container"})),((cljs.core.map_QMARK_.call(null,attrs62195))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs62195)], null)));
})()));

var G__62198 = (i__62193 + (1));
i__62193 = G__62198;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62194),com$nicki$plantboss$main$iter__62191.call(null,cljs.core.chunk_rest.call(null,s__62192__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62194),null);
}
} else {
var item = cljs.core.first.call(null,s__62192__$2);
return cljs.core.cons.call(null,React.createElement("div",({"className": "item"}),React.createElement("div",({"className": "supply-plant"}),React.createElement("img",({"src": new cljs.core.Keyword(null,"supply-src","supply-src",-1976641468).cljs$core$IFn$_invoke$arity$1(item)}))),React.createElement("div",({"className": "item-info"}),(function (){var attrs62196 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs62196))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-name"], null)], null),attrs62196)):({"className": "item-name"})),((cljs.core.map_QMARK_.call(null,attrs62196))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs62196)], null)));
})(),(function (){var attrs62197 = new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(item);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs62197))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-cost"], null)], null),attrs62197)):({"className": "item-cost"})),((cljs.core.map_QMARK_.call(null,attrs62197))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs62197)], null)));
})()),(function (){var attrs62195 = ((cljs.core.not.call(null,com.nicki.plantboss.main.in_greenhouse_QMARK_.call(null,item,app)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".buy-button",".buy-button",1809047940),(((new cljs.core.Keyword(null,"money","money",250333921).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sc","sc",1148023032).cljs$core$IFn$_invoke$arity$1(app))) >= new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(item)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-is-active","data-is-active",843859109),"true",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__62192__$2,temp__5459__auto__){
return (function (){
return com.nicki.plantboss.main.trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.plantboss.main","buy-item","com.nicki.plantboss.main/buy-item",-36860887),new cljs.core.Keyword(null,"item","item",249373802),item], null));
});})(item,s__62192__$2,temp__5459__auto__))
], null):null),"Buy"], null):null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs62195))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["button-container"], null)], null),attrs62195)):({"className": "button-container"})),((cljs.core.map_QMARK_.call(null,attrs62195))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs62195)], null)));
})()),com$nicki$plantboss$main$iter__62191.call(null,cljs.core.rest.call(null,s__62192__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__37807__auto__.call(null,new cljs.core.Keyword(null,"supplies","supplies",563812983).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sc","sc",1148023032).cljs$core$IFn$_invoke$arity$1(app))));
})())),React.createElement("div",({"onClick": (function (){
return com.nicki.plantboss.main.trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.plantboss.main","close","com.nicki.plantboss.main/close",-1651587150)], null));
}), "className": "close-button"}),"Done Shopping"));
}),null,"*supplies-list");
com.nicki.plantboss.main._STAR_app = rum.core.build_defc.call(null,(function (trigger_BANG_,app){
var sc = new cljs.core.Keyword(null,"sc","sc",1148023032).cljs$core$IFn$_invoke$arity$1(app);
var env = (function (){var res__53715__auto__ = com.keminglabs.statetron.core.env.call(null,sc);
console.log(cljs.core.prn_str.call(null,res__53715__auto__));

return res__53715__auto__;
})();
return React.createElement("div",({"className": "plant-boss"}),React.createElement("div",({"className": "title"}),React.createElement("p",null,"Plant Boss")),(function (){var attrs62201 = (cljs.core.truth_(com.keminglabs.statetron.core.active_QMARK_.call(null,sc,new cljs.core.Keyword("com.nicki.plantboss.main","Loading","com.nicki.plantboss.main/Loading",624715433)))?com.nicki.plantboss.main._STAR_loading.call(null):(cljs.core.truth_(com.keminglabs.statetron.core.active_QMARK_.call(null,sc,new cljs.core.Keyword("com.nicki.plantboss.main","Greenhouse","com.nicki.plantboss.main/Greenhouse",19356588)))?com.nicki.plantboss.main._STAR_greenhouse.call(null,app):(cljs.core.truth_(com.keminglabs.statetron.core.active_QMARK_.call(null,sc,new cljs.core.Keyword("com.nicki.plantboss.main","List","com.nicki.plantboss.main/List",412748660)))?com.nicki.plantboss.main._STAR_supplies_list.call(null,app):null)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs62201))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["app-container"], null)], null),attrs62201)):({"className": "app-container"})),((cljs.core.map_QMARK_.call(null,attrs62201))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs62201)], null)));
})());
}),null,"*app");
com.nicki.plantboss.main.statechart = com.keminglabs.statetron.core.statechart.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.plantboss.main","App","com.nicki.plantboss.main/App",2141722289),new cljs.core.Keyword("state","start?","state/start?",1533694543),true,new cljs.core.Keyword("state","children","state/children",-1049694637),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.plantboss.main","Loading","com.nicki.plantboss.main/Loading",624715433),new cljs.core.Keyword("state","start?","state/start?",1533694543),true,new cljs.core.Keyword("state","enter","state/enter",1934253951),(function (env){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"current-time","current-time",-1609407134),(0),new cljs.core.Keyword(null,"money","money",250333921),(100),new cljs.core.Keyword(null,"plants","plants",-1289631325),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"visitors","visitors",1404506988),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"Gecko",new cljs.core.Keyword(null,"src","src",-1651076051),"images/gecko.svg",new cljs.core.Keyword(null,"loc","loc",-584284901),cljs.core.list((100),(295)),new cljs.core.Keyword(null,"animation","animation",-1248293244),"gecko 3s steps(41) infinite reverse",new cljs.core.Keyword(null,"width","width",-384071477),"47px",new cljs.core.Keyword(null,"height","height",1025178622),"55px"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"Ants",new cljs.core.Keyword(null,"src","src",-1651076051),"images/ants.svg",new cljs.core.Keyword(null,"loc","loc",-584284901),cljs.core.list((645),(10)),new cljs.core.Keyword(null,"animation","animation",-1248293244),"ants .5s steps(4) infinite reverse",new cljs.core.Keyword(null,"width","width",-384071477),"125px",new cljs.core.Keyword(null,"height","height",1025178622),"20px"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Phoebe",new cljs.core.Keyword(null,"src","src",-1651076051),"images/phoebe.svg",new cljs.core.Keyword(null,"loc","loc",-584284901),cljs.core.list((232),(185)),new cljs.core.Keyword(null,"width","width",-384071477),"31px",new cljs.core.Keyword(null,"height","height",1025178622),"18px"], null)], null),new cljs.core.Keyword(null,"supplies","supplies",563812983),new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"spritesheet","spritesheet",-542003038),new cljs.core.Keyword(null,"supply-src","supply-src",-1976641468),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cost","cost",-1094861735),new cljs.core.Keyword(null,"loc","loc",-584284901),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"pot","pot",640262911)],["images/growing_cactus2.png","images/tall_cactus_hero.svg",((4) / (10)),"Small Cactus",(70),(10),cljs.core.list((252),(295)),(130),"images/pot.svg"]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"Snake Plant",new cljs.core.Keyword(null,"src","src",-1651076051),"images/snake_plant.svg",new cljs.core.Keyword(null,"supply-src","supply-src",-1976641468),"images/snake_plant_hero.svg",new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"loc","loc",-584284901),cljs.core.list((400),(100)),new cljs.core.Keyword(null,"cost","cost",-1094861735),(20)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"Ludisia Discolor - Jewel Orchid",new cljs.core.Keyword(null,"src","src",-1651076051),"images/orchid.svg",new cljs.core.Keyword(null,"supply-src","supply-src",-1976641468),"images/orchid_hero.svg",new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"loc","loc",-584284901),cljs.core.list((325),(140)),new cljs.core.Keyword(null,"cost","cost",-1094861735),(45)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"Small Round Cactus",new cljs.core.Keyword(null,"src","src",-1651076051),"images/small_round_cactus.svg",new cljs.core.Keyword(null,"supply-src","supply-src",-1976641468),"images/small_round_cactus_hero.svg",new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"loc","loc",-584284901),cljs.core.list((340),(295)),new cljs.core.Keyword(null,"cost","cost",-1094861735),(10)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"Big Leaf",new cljs.core.Keyword(null,"src","src",-1651076051),"images/big_leaf.svg",new cljs.core.Keyword(null,"supply-src","supply-src",-1976641468),"images/big_leaf_hero.svg",new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"loc","loc",-584284901),cljs.core.list((370),(450)),new cljs.core.Keyword(null,"cost","cost",-1094861735),(105)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"Droopy Plant",new cljs.core.Keyword(null,"src","src",-1651076051),"images/droopy_plant.svg",new cljs.core.Keyword(null,"supply-src","supply-src",-1976641468),"images/droopy_plant_hero.svg",new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"loc","loc",-584284901),cljs.core.list((71),(60)),new cljs.core.Keyword(null,"cost","cost",-1094861735),(65)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"Elkhorn",new cljs.core.Keyword(null,"src","src",-1651076051),"images/elkhorn.svg",new cljs.core.Keyword(null,"supply-src","supply-src",-1976641468),"images/elkhorn_hero.svg",new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"loc","loc",-584284901),cljs.core.list((255),(405)),new cljs.core.Keyword(null,"cost","cost",-1094861735),(90)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"Small Dot Plant",new cljs.core.Keyword(null,"src","src",-1651076051),"images/small_dot_plant.svg",new cljs.core.Keyword(null,"supply-src","supply-src",-1976641468),"images/small_dot_plant_hero.svg",new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"loc","loc",-584284901),cljs.core.list((330),(180)),new cljs.core.Keyword(null,"cost","cost",-1094861735),(20)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"Medium Dot Plant",new cljs.core.Keyword(null,"src","src",-1651076051),"images/med_dot_plant.svg",new cljs.core.Keyword(null,"supply-src","supply-src",-1976641468),"images/med_dot_plant_hero.svg",new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"loc","loc",-584284901),cljs.core.list((155),(620)),new cljs.core.Keyword(null,"cost","cost",-1094861735),(20)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"Calathea Makoyana - Peacock Plant",new cljs.core.Keyword(null,"src","src",-1651076051),"images/pink_plant.svg",new cljs.core.Keyword(null,"supply-src","supply-src",-1976641468),"images/pink_plant_hero.svg",new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"loc","loc",-584284901),cljs.core.list((407),(160)),new cljs.core.Keyword(null,"cost","cost",-1094861735),(35)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"Medium Round Cactus",new cljs.core.Keyword(null,"src","src",-1651076051),"images/med_round_cactus.svg",new cljs.core.Keyword(null,"supply-src","supply-src",-1976641468),"images/med_round_cactus_hero.svg",new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"loc","loc",-584284901),cljs.core.list((334),(346)),new cljs.core.Keyword(null,"cost","cost",-1094861735),(25)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"Reaching Plant",new cljs.core.Keyword(null,"src","src",-1651076051),"images/reaching_plant.svg",new cljs.core.Keyword(null,"supply-src","supply-src",-1976641468),"images/reaching_plant_hero.svg",new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"loc","loc",-584284901),cljs.core.list((270),(925)),new cljs.core.Keyword(null,"cost","cost",-1094861735),(20)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"Small Fern",new cljs.core.Keyword(null,"src","src",-1651076051),"images/small_fern.svg",new cljs.core.Keyword(null,"supply-src","supply-src",-1976641468),"images/small_fern_hero.svg",new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"loc","loc",-584284901),cljs.core.list((585),(455)),new cljs.core.Keyword(null,"cost","cost",-1094861735),(20)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"Spikey Plant",new cljs.core.Keyword(null,"src","src",-1651076051),"images/spikey_plant.svg",new cljs.core.Keyword(null,"supply-src","supply-src",-1976641468),"images/spikey_hero.svg",new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"loc","loc",-584284901),cljs.core.list((252),(735)),new cljs.core.Keyword(null,"cost","cost",-1094861735),(20)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"Spotted Prayer Plant",new cljs.core.Keyword(null,"src","src",-1651076051),"images/spotted_prayer_plant.svg",new cljs.core.Keyword(null,"supply-src","supply-src",-1976641468),"images/spotted_prayer_plant_hero.svg",new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"loc","loc",-584284901),cljs.core.list((480),(630)),new cljs.core.Keyword(null,"cost","cost",-1094861735),(20)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"Stringy Plant",new cljs.core.Keyword(null,"src","src",-1651076051),"images/stringy_plant.svg",new cljs.core.Keyword(null,"supply-src","supply-src",-1976641468),"images/stringy_plant_hero.svg",new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"loc","loc",-584284901),cljs.core.list((77),(505)),new cljs.core.Keyword(null,"cost","cost",-1094861735),(20)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"Tall Fern",new cljs.core.Keyword(null,"src","src",-1651076051),"images/tall_fern.svg",new cljs.core.Keyword(null,"supply-src","supply-src",-1976641468),"images/tall_fern_hero.svg",new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"loc","loc",-584284901),cljs.core.list((480),(12)),new cljs.core.Keyword(null,"cost","cost",-1094861735),(20)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"Tall Skinny Cactus (Grey Pot)",new cljs.core.Keyword(null,"src","src",-1651076051),"images/tall_skinny_cactus_grey.svg",new cljs.core.Keyword(null,"supply-src","supply-src",-1976641468),"images/tall_skinny_cactus_grey_hero.svg",new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"loc","loc",-584284901),cljs.core.list((315),(220)),new cljs.core.Keyword(null,"cost","cost",-1094861735),(20)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"Tall Skinny Cactus (White Pot)",new cljs.core.Keyword(null,"src","src",-1651076051),"images/tall_skinny_cactus.svg",new cljs.core.Keyword(null,"supply-src","supply-src",-1976641468),"images/tall_skinny_cactus_white_hero.svg",new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"loc","loc",-584284901),cljs.core.list((289),(40)),new cljs.core.Keyword(null,"cost","cost",-1094861735),(20)], null)], null));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.plantboss.main","Greenhouse","com.nicki.plantboss.main/Greenhouse",19356588),new cljs.core.Keyword("state","enter","state/enter",1934253951),(function (env){
var res__53709__auto___62202 = "Chime!!!";
console.log(res__53709__auto___62202);


return env;
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.plantboss.main","List","com.nicki.plantboss.main/List",412748660)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.nicki.plantboss.main","finished-loading","com.nicki.plantboss.main/finished-loading",1599638983),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.plantboss.main","Loading","com.nicki.plantboss.main/Loading",624715433)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.plantboss.main","Greenhouse","com.nicki.plantboss.main/Greenhouse",19356588)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.nicki.plantboss.main","open-supplies","com.nicki.plantboss.main/open-supplies",-562211826),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.plantboss.main","Greenhouse","com.nicki.plantboss.main/Greenhouse",19356588)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.plantboss.main","List","com.nicki.plantboss.main/List",412748660)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.nicki.plantboss.main","buy-item","com.nicki.plantboss.main/buy-item",-36860887),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.plantboss.main","List","com.nicki.plantboss.main/List",412748660)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.plantboss.main","List","com.nicki.plantboss.main/List",412748660)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return com.nicki.plantboss.main.add_to_greenhouse.call(null,com.nicki.plantboss.main.subtract_cost.call(null,env,event),event);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.nicki.plantboss.main","close","com.nicki.plantboss.main/close",-1651587150),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.plantboss.main","List","com.nicki.plantboss.main/List",412748660)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.plantboss.main","Greenhouse","com.nicki.plantboss.main/Greenhouse",19356588)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.nicki.plantboss.main","tick","com.nicki.plantboss.main/tick",-31097580),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.plantboss.main","Greenhouse","com.nicki.plantboss.main/Greenhouse",19356588)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.plantboss.main","Greenhouse","com.nicki.plantboss.main/Greenhouse",19356588)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return com.nicki.plantboss.main.remove_visitors.call(null,com.nicki.plantboss.main.add_visitor.call(null,cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-time","current-time",-1609407134)], null),cljs.core._PLUS_,(10000))));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.nicki.plantboss.main","reload","com.nicki.plantboss.main/reload",-478153357),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.plantboss.main","App","com.nicki.plantboss.main/App",2141722289)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.nicki.plantboss.main","App","com.nicki.plantboss.main/App",2141722289)], null)], null)], null));
com.nicki.plantboss.main.render_BANG_ = (function com$nicki$plantboss$main$render_BANG_(app){
return ReactDOM.render(com.nicki.plantboss.main._STAR_app.call(null,com.nicki.plantboss.main.trigger_BANG_,app),document.getElementById("container"));
});
if(typeof com.nicki.plantboss.main.hack !== 'undefined'){
} else {
com.nicki.plantboss.main.hack = (function (){
cljs.core.add_watch.call(null,com.nicki.plantboss.main._BANG_app,new cljs.core.Keyword(null,"re-render","re-render",1133553258),(function (_,___$1,old,new$){
return com.nicki.plantboss.main.render_BANG_.call(null,new$);
}));

setInterval((function (){
return com.nicki.plantboss.main.trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.plantboss.main","tick","com.nicki.plantboss.main/tick",-31097580)], null));
}),(3000));

return cljs.core.swap_BANG_.call(null,com.nicki.plantboss.main._BANG_app,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sc","sc",1148023032),com.keminglabs.statetron.core.start.call(null,com.nicki.plantboss.main.statechart)], null));
})()
;
}
var sc_62203 = com.keminglabs.statetron.core.start.call(null,com.nicki.plantboss.main.statechart);
var supplies_62204 = new cljs.core.Keyword(null,"supplies","supplies",563812983).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(sc_62203));
if(cljs.core.empty_QMARK_.call(null,supplies_62204)){
var res__53709__auto___62205 = "Test failed: The supply list shouldn't be empty";
console.log(res__53709__auto___62205);

} else {
}
var app_62210 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sc","sc",1148023032),com.keminglabs.statetron.core.start.call(null,com.nicki.plantboss.main.statechart)], null);
var supplies_62211 = new cljs.core.Keyword(null,"supplies","supplies",563812983).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sc","sc",1148023032).cljs$core$IFn$_invoke$arity$1(app_62210)));
var new_sc_62212 = com.keminglabs.statetron.core.step.call(null,com.keminglabs.statetron.core.step.call(null,com.keminglabs.statetron.core.step.call(null,com.keminglabs.statetron.core.step.call(null,com.keminglabs.statetron.core.step.call(null,com.keminglabs.statetron.core.step.call(null,com.keminglabs.statetron.core.step.call(null,com.keminglabs.statetron.core.step.call(null,new cljs.core.Keyword(null,"sc","sc",1148023032).cljs$core$IFn$_invoke$arity$1(app_62210),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.plantboss.main","finished-loading","com.nicki.plantboss.main/finished-loading",1599638983)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.plantboss.main","open-supplies","com.nicki.plantboss.main/open-supplies",-562211826)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.plantboss.main","for-sale","com.nicki.plantboss.main/for-sale",543851152),new cljs.core.Keyword(null,"id","id",-1388402092),(0)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.plantboss.main","for-sale","com.nicki.plantboss.main/for-sale",543851152),new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.plantboss.main","buy-item","com.nicki.plantboss.main/buy-item",-36860887),new cljs.core.Keyword(null,"id","id",-1388402092),(0)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.plantboss.main","place-item","com.nicki.plantboss.main/place-item",-1611292823),new cljs.core.Keyword(null,"loc","loc",-584284901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword(null,"item","item",249373802),(0)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.plantboss.main","buy-item","com.nicki.plantboss.main/buy-item",-36860887),new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.plantboss.main","place-item","com.nicki.plantboss.main/place-item",-1611292823),new cljs.core.Keyword(null,"loc","loc",-584284901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword(null,"item","item",249373802),(1)], null));
var new_app_62213 = cljs.core.assoc_in.call(null,app_62210,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sc","sc",1148023032)], null),new_sc_62212);
var greenhouse_62214 = new cljs.core.Keyword(null,"greenhouse","greenhouse",-982477287).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sc","sc",1148023032).cljs$core$IFn$_invoke$arity$1(new_app_62213)));
var plant_locations_62215 = (function (){var iter__37807__auto__ = ((function (app_62210,supplies_62211,new_sc_62212,new_app_62213,greenhouse_62214){
return (function com$nicki$plantboss$main$iter__62206(s__62207){
return (new cljs.core.LazySeq(null,((function (app_62210,supplies_62211,new_sc_62212,new_app_62213,greenhouse_62214){
return (function (){
var s__62207__$1 = s__62207;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__62207__$1);
if(temp__5459__auto__){
var s__62207__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__62207__$2)){
var c__37805__auto__ = cljs.core.chunk_first.call(null,s__62207__$2);
var size__37806__auto__ = cljs.core.count.call(null,c__37805__auto__);
var b__62209 = cljs.core.chunk_buffer.call(null,size__37806__auto__);
if((function (){var i__62208 = (0);
while(true){
if((i__62208 < size__37806__auto__)){
var plant = cljs.core._nth.call(null,c__37805__auto__,i__62208);
cljs.core.chunk_append.call(null,b__62209,new cljs.core.Keyword(null,"loc","loc",-584284901).cljs$core$IFn$_invoke$arity$1(plant));

var G__62216 = (i__62208 + (1));
i__62208 = G__62216;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62209),com$nicki$plantboss$main$iter__62206.call(null,cljs.core.chunk_rest.call(null,s__62207__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62209),null);
}
} else {
var plant = cljs.core.first.call(null,s__62207__$2);
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"loc","loc",-584284901).cljs$core$IFn$_invoke$arity$1(plant),com$nicki$plantboss$main$iter__62206.call(null,cljs.core.rest.call(null,s__62207__$2)));
}
} else {
return null;
}
break;
}
});})(app_62210,supplies_62211,new_sc_62212,new_app_62213,greenhouse_62214))
,null,null));
});})(app_62210,supplies_62211,new_sc_62212,new_app_62213,greenhouse_62214))
;
return iter__37807__auto__.call(null,greenhouse_62214);
})();
if(((plant_locations_62215 == null)) || (cljs.core._EQ_.call(null,cljs.core.distinct.call(null,plant_locations_62215),plant_locations_62215))){
var res__53709__auto___62217 = "Test failed: You can't put two objects in the same place.";
console.log(res__53709__auto___62217);

} else {
}
var app_62218 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sc","sc",1148023032),com.keminglabs.statetron.core.start.call(null,com.nicki.plantboss.main.statechart)], null);
var new_sc_62219 = com.keminglabs.statetron.core.step.call(null,com.keminglabs.statetron.core.step.call(null,com.keminglabs.statetron.core.step.call(null,com.keminglabs.statetron.core.step.call(null,app_62218,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.plantboss.main","finished-loading","com.nicki.plantboss.main/finished-loading",1599638983)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.plantboss.main","open-supplies","com.nicki.plantboss.main/open-supplies",-562211826)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.plantboss.main","not-for-sale","com.nicki.plantboss.main/not-for-sale",572020294),new cljs.core.Keyword(null,"id","id",-1388402092),(0)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.nicki.plantboss.main","buy-item","com.nicki.plantboss.main/buy-item",-36860887),new cljs.core.Keyword(null,"id","id",-1388402092),(0)], null));
var new_app_62220 = cljs.core.assoc_in.call(null,app_62218,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sc","sc",1148023032)], null),new_sc_62219);
var plant_id_62221 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"supplies","supplies",563812983).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sc","sc",1148023032).cljs$core$IFn$_invoke$arity$1(new_app_62220)))));
if(cljs.core.truth_(com.nicki.plantboss.main.in_greenhouse_QMARK_.call(null,plant_id_62221,new_app_62220))){
} else {
var res__53709__auto___62222 = "Test failed: You can't buy something that isn't for sale.";
console.log(res__53709__auto___62222);

}

//# sourceMappingURL=main.js.map?rel=1517568657685
