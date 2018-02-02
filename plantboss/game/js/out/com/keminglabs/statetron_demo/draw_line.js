// Compiled by ClojureScript 1.9.946 {}
goog.provide('com.keminglabs.statetron_demo.draw_line');
goog.require('cljs.core');
goog.require('com.keminglabs.statetron.core');
goog.require('com.keminglabs.statetron.playground');
goog.require('com.keminglabs.statetron.specs');
goog.require('datascript.core');
goog.require('rum.core');
goog.require('cljs.spec.alpha');
com.keminglabs.statetron_demo.draw_line._STAR_point = rum.core.build_defc.call(null,(function (x,y){
return React.createElement("div",({"style": ({"position": "absolute", "left": x, "top": y, "width": (2), "height": (2), "backgroundColor": "black"}), "className": "point"}));
}),null,"*point");
com.keminglabs.statetron_demo.draw_line._STAR_lines = rum.core.build_defc.call(null,(function (trigger_BANG_,sc){
var env = com.keminglabs.statetron.core.env.call(null,sc);
return React.createElement("div",({"className": "lines"}),React.createElement("svg",({"style": ({"border": "1px solid black"}), "width": (200), "height": (200), "onMouseMove": ((function (env){
return (function (e){
return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.keminglabs.statetron-demo.draw-line","move","com.keminglabs.statetron-demo.draw-line/move",1025823142),new cljs.core.Keyword("universe","coordinates","universe/coordinates",346168959),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.nativeEvent.offsetX,e.nativeEvent.offsetY], null)], null));
});})(env))
, "onClick": ((function (env){
return (function (e){
return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.keminglabs.statetron-demo.draw-line","place-point","com.keminglabs.statetron-demo.draw-line/place-point",1834072538)], null));
});})(env))
}),cljs.core.into_array.call(null,(function (){var iter__37807__auto__ = ((function (env){
return (function com$keminglabs$statetron_demo$draw_line$iter__55273(s__55274){
return (new cljs.core.LazySeq(null,((function (env){
return (function (){
var s__55274__$1 = s__55274;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__55274__$1);
if(temp__5459__auto__){
var s__55274__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55274__$2)){
var c__37805__auto__ = cljs.core.chunk_first.call(null,s__55274__$2);
var size__37806__auto__ = cljs.core.count.call(null,c__37805__auto__);
var b__55276 = cljs.core.chunk_buffer.call(null,size__37806__auto__);
if((function (){var i__55275 = (0);
while(true){
if((i__55275 < size__37806__auto__)){
var vec__55277 = cljs.core._nth.call(null,c__37805__auto__,i__55275);
var vec__55280 = cljs.core.nth.call(null,vec__55277,(0),null);
var x1 = cljs.core.nth.call(null,vec__55280,(0),null);
var y1 = cljs.core.nth.call(null,vec__55280,(1),null);
var vec__55283 = cljs.core.nth.call(null,vec__55277,(1),null);
var x2 = cljs.core.nth.call(null,vec__55283,(0),null);
var y2 = cljs.core.nth.call(null,vec__55283,(1),null);
cljs.core.chunk_append.call(null,b__55276,React.createElement("line",({"stroke": "black", "x1": x1, "y1": y1, "x2": x2, "y2": y2})));

var G__55304 = (i__55275 + (1));
i__55275 = G__55304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55276),com$keminglabs$statetron_demo$draw_line$iter__55273.call(null,cljs.core.chunk_rest.call(null,s__55274__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55276),null);
}
} else {
var vec__55286 = cljs.core.first.call(null,s__55274__$2);
var vec__55289 = cljs.core.nth.call(null,vec__55286,(0),null);
var x1 = cljs.core.nth.call(null,vec__55289,(0),null);
var y1 = cljs.core.nth.call(null,vec__55289,(1),null);
var vec__55292 = cljs.core.nth.call(null,vec__55286,(1),null);
var x2 = cljs.core.nth.call(null,vec__55292,(0),null);
var y2 = cljs.core.nth.call(null,vec__55292,(1),null);
return cljs.core.cons.call(null,React.createElement("line",({"stroke": "black", "x1": x1, "y1": y1, "x2": x2, "y2": y2})),com$keminglabs$statetron_demo$draw_line$iter__55273.call(null,cljs.core.rest.call(null,s__55274__$2)));
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
return iter__37807__auto__.call(null,new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(env));
})()),sablono.interpreter.interpret.call(null,(cljs.core.truth_(com.keminglabs.statetron.core.active_QMARK_.call(null,sc,new cljs.core.Keyword("com.keminglabs.statetron-demo.draw-line","placing-second-point","com.keminglabs.statetron-demo.draw-line/placing-second-point",481339550)))?(function (){var vec__55295 = new cljs.core.Keyword(null,"point-1","point-1",786713787).cljs$core$IFn$_invoke$arity$1(env);
var x1 = cljs.core.nth.call(null,vec__55295,(0),null);
var y1 = cljs.core.nth.call(null,vec__55295,(1),null);
var vec__55298 = new cljs.core.Keyword(null,"current-position","current-position",2031348254).cljs$core$IFn$_invoke$arity$1(env);
var x2 = cljs.core.nth.call(null,vec__55298,(0),null);
var y2 = cljs.core.nth.call(null,vec__55298,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"red",new cljs.core.Keyword(null,"x1","x1",-1863922247),x1,new cljs.core.Keyword(null,"y1","y1",589123466),y1,new cljs.core.Keyword(null,"x2","x2",-1362513475),x2,new cljs.core.Keyword(null,"y2","y2",-718691301),y2], null)], null);
})():null)),sablono.interpreter.interpret.call(null,(function (){var temp__5459__auto__ = new cljs.core.Keyword(null,"current-position","current-position",2031348254).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5459__auto__)){
var vec__55301 = temp__5459__auto__;
var x = cljs.core.nth.call(null,vec__55301,(0),null);
var y = cljs.core.nth.call(null,vec__55301,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.cursor","g.cursor",-1657597495),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"x1","x1",-1863922247),(x - (5)),new cljs.core.Keyword(null,"x2","x2",-1362513475),(x + (5)),new cljs.core.Keyword(null,"y1","y1",589123466),y,new cljs.core.Keyword(null,"y2","y2",-718691301),y], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"y1","y1",589123466),(y - (5)),new cljs.core.Keyword(null,"y2","y2",-718691301),(y + (5)),new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"x2","x2",-1362513475),x], null)], null)], null);
} else {
return null;
}
})())));
}),null,"*lines");
com.keminglabs.statetron_demo.draw_line._STAR_app = rum.core.build_defc.call(null,(function (trigger_BANG_,sc){
var attrs55305 = com.keminglabs.statetron_demo.draw_line._STAR_lines.call(null,trigger_BANG_,sc);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs55305))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["draw-line-app"], null)], null),attrs55305)):({"className": "draw-line-app"})),((cljs.core.map_QMARK_.call(null,attrs55305))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("button",({"onClick": ((function (attrs55305){
return (function (e){
return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.keminglabs.statetron-demo.draw-line","clear-drawn-lines","com.keminglabs.statetron-demo.draw-line/clear-drawn-lines",-638277068)], null));
});})(attrs55305))
}),"Clear lines")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs55305),React.createElement("button",({"onClick": ((function (attrs55305){
return (function (e){
return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.keminglabs.statetron-demo.draw-line","clear-drawn-lines","com.keminglabs.statetron-demo.draw-line/clear-drawn-lines",-638277068)], null));
});})(attrs55305))
}),"Clear lines")], null)));
}),null,"*app");
com.keminglabs.statetron_demo.draw_line.statechart = com.keminglabs.statetron.core.statechart.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.draw-line","draw-line-mode","com.keminglabs.statetron-demo.draw-line/draw-line-mode",1535438348),new cljs.core.Keyword("state","start?","state/start?",1533694543),true,new cljs.core.Keyword("state","enter","state/enter",1934253951),(function (env){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Var(function(){return com.keminglabs.statetron_demo.draw_line._STAR_app;},new cljs.core.Symbol("com.keminglabs.statetron-demo.draw-line","*app","com.keminglabs.statetron-demo.draw-line/*app",-1712287439,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.keminglabs.statetron-demo.draw-line","com.keminglabs.statetron-demo.draw-line",-1008691154,null),new cljs.core.Symbol(null,"*app","*app",618162620,null),"vendor/statetron/src/com/keminglabs/statetron_demo/draw_line.cljc",15,1,63,63,cljs.core.List.EMPTY,null,(cljs.core.truth_(com.keminglabs.statetron_demo.draw_line._STAR_app)?com.keminglabs.statetron_demo.draw_line._STAR_app.cljs$lang$test:null)])));
}),new cljs.core.Keyword("state","children","state/children",-1049694637),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.draw-line","waiting-for-mouse-movement","com.keminglabs.statetron-demo.draw-line/waiting-for-mouse-movement",-889574684),new cljs.core.Keyword("state","start?","state/start?",1533694543),true], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.draw-line","placing-first-point","com.keminglabs.statetron-demo.draw-line/placing-first-point",-2118337610)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.draw-line","placing-second-point","com.keminglabs.statetron-demo.draw-line/placing-second-point",481339550)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.keminglabs.statetron-demo.draw-line","clear-drawn-lines","com.keminglabs.statetron-demo.draw-line/clear-drawn-lines",-638277068),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.draw-line","draw-line-mode","com.keminglabs.statetron-demo.draw-line/draw-line-mode",1535438348)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,_){
return cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"lines","lines",-700165781));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.keminglabs.statetron-demo.draw-line","move","com.keminglabs.statetron-demo.draw-line/move",1025823142),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.draw-line","draw-line-mode","com.keminglabs.statetron-demo.draw-line/draw-line-mode",1535438348)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"current-position","current-position",2031348254),new cljs.core.Keyword("universe","coordinates","universe/coordinates",346168959).cljs$core$IFn$_invoke$arity$1(event));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.keminglabs.statetron-demo.draw-line","move","com.keminglabs.statetron-demo.draw-line/move",1025823142),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.draw-line","waiting-for-mouse-movement","com.keminglabs.statetron-demo.draw-line/waiting-for-mouse-movement",-889574684)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.draw-line","placing-first-point","com.keminglabs.statetron-demo.draw-line/placing-first-point",-2118337610)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"current-position","current-position",2031348254),new cljs.core.Keyword("universe","coordinates","universe/coordinates",346168959).cljs$core$IFn$_invoke$arity$1(event));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.keminglabs.statetron-demo.draw-line","place-point","com.keminglabs.statetron-demo.draw-line/place-point",1834072538),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.draw-line","placing-first-point","com.keminglabs.statetron-demo.draw-line/placing-first-point",-2118337610)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.draw-line","placing-second-point","com.keminglabs.statetron-demo.draw-line/placing-second-point",481339550)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,event){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"point-1","point-1",786713787),new cljs.core.Keyword(null,"current-position","current-position",2031348254).cljs$core$IFn$_invoke$arity$1(env));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.keminglabs.statetron-demo.draw-line","place-point","com.keminglabs.statetron-demo.draw-line/place-point",1834072538),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.draw-line","placing-second-point","com.keminglabs.statetron-demo.draw-line/placing-second-point",481339550)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron-demo.draw-line","placing-first-point","com.keminglabs.statetron-demo.draw-line/placing-first-point",-2118337610)], null),new cljs.core.Keyword("transition","action","transition/action",903948445),(function (env,_){
return cljs.core.update.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"point-1","point-1",786713787)),new cljs.core.Keyword(null,"lines","lines",-700165781),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point-1","point-1",786713787).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"current-position","current-position",2031348254).cljs$core$IFn$_invoke$arity$1(env)], null));
})], null)], null));
cljs.core._add_method.call(null,com.keminglabs.statetron.specs.event_spec,new cljs.core.Keyword("com.keminglabs.statetron-demo.draw-line","move","com.keminglabs.statetron-demo.draw-line/move",1025823142),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__55306){
return cljs.core.map_QMARK_.call(null,G__55306);
}),(function (G__55306){
return cljs.core.contains_QMARK_.call(null,G__55306,new cljs.core.Keyword("universe","coordinates","universe/coordinates",346168959));
})], null),(function (G__55306){
return (cljs.core.map_QMARK_.call(null,G__55306)) && (cljs.core.contains_QMARK_.call(null,G__55306,new cljs.core.Keyword("universe","coordinates","universe/coordinates",346168959)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("universe","coordinates","universe/coordinates",346168959)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("universe","coordinates","universe/coordinates",346168959)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("universe","coordinates","universe/coordinates",346168959)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("universe","coordinates","universe/coordinates",346168959)))], null),null]));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("universe","coordinates","universe/coordinates",346168959),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__55307#","p1__55307#",-1475328507,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),new cljs.core.Symbol(null,"p1__55307#","p1__55307#",-1475328507,null),(200)))),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("s","and","s/and",668634387,null),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__55307#","p1__55307#",-1475328507,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"p1__55307#","p1__55307#",-1475328507,null),(200)))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),new cljs.core.Symbol(null,"%","%",-950237169,null),(200)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.pos_int_QMARK_,(function (p1__55307_SHARP_){
return (p1__55307_SHARP_ < (200));
})], null),null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__55308){
return (cljs.core.vector_QMARK_.call(null,G__55308)) && (cljs.core._EQ_.call(null,(2),cljs.core.bounded_count.call(null,(2),G__55308)));
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword(null,"count","count",2139924085),(2),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__55307#","p1__55307#",-1475328507,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),new cljs.core.Symbol(null,"p1__55307#","p1__55307#",-1475328507,null),(200)))),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2))], null),null));
if(typeof com.keminglabs.statetron_demo.draw_line._ !== 'undefined'){
} else {
com.keminglabs.statetron_demo.draw_line._ = com.keminglabs.statetron.playground.start_BANG_.call(null,document.getElementById("container"),com.keminglabs.statetron_demo.draw_line.statechart,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history?","history?",2009378510),false,new cljs.core.Keyword(null,"benchmark?","benchmark?",408532838),true], null));
}

//# sourceMappingURL=draw_line.js.map?rel=1517117194663
