// Compiled by ClojureScript 1.9.946 {}
goog.provide('com.keminglabs.statetron.specs');
goog.require('cljs.core');
goog.require('com.keminglabs.statetron.core');
goog.require('clojure.data');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('cljs.spec.gen.alpha');
goog.require('expound.alpha');
if(typeof com.keminglabs.statetron.specs.event_spec !== 'undefined'){
} else {
com.keminglabs.statetron.specs.event_spec = (function (){var method_table__37980__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__37981__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__37982__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__37983__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__37984__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("com.keminglabs.statetron.specs","no-event-spec","com.keminglabs.statetron.specs/no-event-spec",-931075716)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"com.keminglabs.statetron.specs","event-spec"),new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.keminglabs.statetron.specs","no-event-spec","com.keminglabs.statetron.specs/no-event-spec",-931075716),hierarchy__37984__auto__,method_table__37980__auto__,prefer_table__37981__auto__,method_cache__37982__auto__,cached_hierarchy__37983__auto__));
})();
}
cljs.core._add_method.call(null,com.keminglabs.statetron.specs.event_spec,new cljs.core.Keyword("com.keminglabs.statetron.specs","no-event-spec","com.keminglabs.statetron.specs/no-event-spec",-931075716),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__48797){
return cljs.core.map_QMARK_.call(null,G__48797);
})], null),(function (G__48797){
return cljs.core.map_QMARK_.call(null,G__48797);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null]));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.keminglabs.statetron.specs","event","com.keminglabs.statetron.specs/event",673119438),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","multi-spec","cljs.spec.alpha/multi-spec",175821274,null),new cljs.core.Symbol("com.keminglabs.statetron.specs","event-spec","com.keminglabs.statetron.specs/event-spec",1649825758,null),new cljs.core.Keyword("event","name","event/name",1621279447)),cljs.spec.alpha.multi_spec_impl.call(null,new cljs.core.Symbol("com.keminglabs.statetron.specs","event-spec","com.keminglabs.statetron.specs/event-spec",1649825758,null),new cljs.core.Var(function(){return com.keminglabs.statetron.specs.event_spec;},new cljs.core.Symbol("com.keminglabs.statetron.specs","event-spec","com.keminglabs.statetron.specs/event-spec",1649825758,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.keminglabs.statetron.specs","com.keminglabs.statetron.specs",253676253,null),new cljs.core.Symbol(null,"event-spec","event-spec",-931471030,null),"/Users/woot15/Desktop/Dropbox/My_Projects/20171218_PlantGame/plantgame/plantboss/vendor/statetron/src/com/keminglabs/statetron/specs.cljc",21,1,16,16,cljs.core.List.EMPTY,null,(cljs.core.truth_(com.keminglabs.statetron.specs.event_spec)?com.keminglabs.statetron.specs.event_spec.cljs$lang$test:null)])),new cljs.core.Keyword("event","name","event/name",1621279447)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("com.keminglabs.statetron.specs","env","com.keminglabs.statetron.specs/env",-1105635239),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__48798){
return cljs.core.map_QMARK_.call(null,G__48798);
})], null),(function (G__48798){
return cljs.core.map_QMARK_.call(null,G__48798);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
/**
 * Checks statechart transition names (and the events they imply) against the defined specs, printing out differences.
 */
com.keminglabs.statetron.specs.check_statechart_specs_BANG_ = (function com$keminglabs$statetron$specs$check_statechart_specs_BANG_(sc){
var specified_events = cljs.core.set.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.keminglabs.statetron.specs","no-event-spec","com.keminglabs.statetron.specs/no-event-spec",-931075716),null], null), null),cljs.core.keys.call(null,cljs.core.methods$.call(null,com.keminglabs.statetron.specs.event_spec))));
var sc_events = cljs.core.set.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.keminglabs.statetron.core","default","com.keminglabs.statetron.core/default",1165075763),null], null), null),cljs.core.map.call(null,new cljs.core.Keyword("transition","name","transition/name",1429155220),com.keminglabs.statetron.core.transitions.call(null,sc))));
var vec__48799 = clojure.data.diff.call(null,sc_events,specified_events);
var unspecified = cljs.core.nth.call(null,vec__48799,(0),null);
var unused = cljs.core.nth.call(null,vec__48799,(1),null);
var _ = cljs.core.nth.call(null,vec__48799,(2),null);
if(cljs.core.empty_QMARK_.call(null,unspecified)){
return null;
} else {
cljs.core.println.call(null,"Events used in statechart, but not specified:\n");

var seq__48802_48806 = cljs.core.seq.call(null,cljs.core.sort.call(null,unspecified));
var chunk__48803_48807 = null;
var count__48804_48808 = (0);
var i__48805_48809 = (0);
while(true){
if((i__48805_48809 < count__48804_48808)){
var e_48810 = cljs.core._nth.call(null,chunk__48803_48807,i__48805_48809);
cljs.core.println.call(null,"\t",e_48810);

var G__48811 = seq__48802_48806;
var G__48812 = chunk__48803_48807;
var G__48813 = count__48804_48808;
var G__48814 = (i__48805_48809 + (1));
seq__48802_48806 = G__48811;
chunk__48803_48807 = G__48812;
count__48804_48808 = G__48813;
i__48805_48809 = G__48814;
continue;
} else {
var temp__5459__auto___48815 = cljs.core.seq.call(null,seq__48802_48806);
if(temp__5459__auto___48815){
var seq__48802_48816__$1 = temp__5459__auto___48815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48802_48816__$1)){
var c__37856__auto___48817 = cljs.core.chunk_first.call(null,seq__48802_48816__$1);
var G__48818 = cljs.core.chunk_rest.call(null,seq__48802_48816__$1);
var G__48819 = c__37856__auto___48817;
var G__48820 = cljs.core.count.call(null,c__37856__auto___48817);
var G__48821 = (0);
seq__48802_48806 = G__48818;
chunk__48803_48807 = G__48819;
count__48804_48808 = G__48820;
i__48805_48809 = G__48821;
continue;
} else {
var e_48822 = cljs.core.first.call(null,seq__48802_48816__$1);
cljs.core.println.call(null,"\t",e_48822);

var G__48823 = cljs.core.next.call(null,seq__48802_48816__$1);
var G__48824 = null;
var G__48825 = (0);
var G__48826 = (0);
seq__48802_48806 = G__48823;
chunk__48803_48807 = G__48824;
count__48804_48808 = G__48825;
i__48805_48809 = G__48826;
continue;
}
} else {
}
}
break;
}

return cljs.core.println.call(null);
}
});
com.keminglabs.statetron.specs.sc__GT_possible_events = (function com$keminglabs$statetron$specs$sc__GT_possible_events(sc){
var iter__37807__auto__ = (function com$keminglabs$statetron$specs$sc__GT_possible_events_$_iter__48827(s__48828){
return (new cljs.core.LazySeq(null,(function (){
var s__48828__$1 = s__48828;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__48828__$1);
if(temp__5459__auto__){
var s__48828__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48828__$2)){
var c__37805__auto__ = cljs.core.chunk_first.call(null,s__48828__$2);
var size__37806__auto__ = cljs.core.count.call(null,c__37805__auto__);
var b__48830 = cljs.core.chunk_buffer.call(null,size__37806__auto__);
if((function (){var i__48829 = (0);
while(true){
if((i__48829 < size__37806__auto__)){
var map__48831 = cljs.core._nth.call(null,c__37805__auto__,i__48829);
var map__48831__$1 = ((((!((map__48831 == null)))?((((map__48831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48831.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48831):map__48831);
var name = cljs.core.get.call(null,map__48831__$1,new cljs.core.Keyword("transition","name","transition/name",1429155220));
cljs.core.chunk_append.call(null,b__48830,(function (){var e = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),name], null);
var temp__5457__auto__ = com.keminglabs.statetron.specs.event_spec.call(null,e);
if(cljs.core.truth_(temp__5457__auto__)){
var spec = temp__5457__auto__;
return cljs.core.merge.call(null,e,cljs.spec.gen.alpha.generate.call(null,cljs.spec.alpha.gen.call(null,spec)));
} else {
return e;
}
})());

var G__48835 = (i__48829 + (1));
i__48829 = G__48835;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48830),com$keminglabs$statetron$specs$sc__GT_possible_events_$_iter__48827.call(null,cljs.core.chunk_rest.call(null,s__48828__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48830),null);
}
} else {
var map__48833 = cljs.core.first.call(null,s__48828__$2);
var map__48833__$1 = ((((!((map__48833 == null)))?((((map__48833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48833.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48833):map__48833);
var name = cljs.core.get.call(null,map__48833__$1,new cljs.core.Keyword("transition","name","transition/name",1429155220));
return cljs.core.cons.call(null,(function (){var e = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),name], null);
var temp__5457__auto__ = com.keminglabs.statetron.specs.event_spec.call(null,e);
if(cljs.core.truth_(temp__5457__auto__)){
var spec = temp__5457__auto__;
return cljs.core.merge.call(null,e,cljs.spec.gen.alpha.generate.call(null,cljs.spec.alpha.gen.call(null,spec)));
} else {
return e;
}
})(),com$keminglabs$statetron$specs$sc__GT_possible_events_$_iter__48827.call(null,cljs.core.rest.call(null,s__48828__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__37807__auto__.call(null,com.keminglabs.statetron.core.available_transitions.call(null,sc));
});
com.keminglabs.statetron.specs.step__GT_str = (function com$keminglabs$statetron$specs$step__GT_str(step){
var vec__48836 = step;
var step_type = cljs.core.nth.call(null,vec__48836,(0),null);
var x = cljs.core.nth.call(null,vec__48836,(1),null);
var G__48839 = step_type;
var G__48839__$1 = (((G__48839 instanceof cljs.core.Keyword))?G__48839.fqn:null);
switch (G__48839__$1) {
case "com.keminglabs.statetron.core/enter":
return ["Entering state ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(x))].join('');

break;
case "com.keminglabs.statetron.core/exit":
return ["Exiting state ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(x))].join('');

break;
case "com.keminglabs.statetron.core/transition":
if(cljs.core.truth_(com.keminglabs.statetron.core.internal_transition_QMARK_.call(null,x))){
return ["Invoking internal transition:\n\n","\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("transition","name","transition/name",1429155220).cljs$core$IFn$_invoke$arity$1(x)),"\n\n","from\n\n","\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("transition","from","transition/from",158767609).cljs$core$IFn$_invoke$arity$1(x))),"\n\n"].join('');
} else {
return ["Following transition:\n\n","\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("transition","name","transition/name",1429155220).cljs$core$IFn$_invoke$arity$1(x)),"\n\n","from\n\n","\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("transition","from","transition/from",158767609).cljs$core$IFn$_invoke$arity$1(x))),"\n\n"," to\n\n","\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("transition","to","transition/to",-1841376910).cljs$core$IFn$_invoke$arity$1(x))),"\n\n"].join('');
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48839__$1)].join('')));

}
});
/**
 * Spec given by :state/spec for active state or its closest ancestor.
 */
com.keminglabs.statetron.specs.active_spec_on_state = (function com$keminglabs$statetron$specs$active_spec_on_state(sc){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (s){
var temp__5459__auto__ = new cljs.core.Keyword("state","spec","state/spec",490733800).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(temp__5459__auto__)){
var spec = temp__5459__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec,s], null);
} else {
return null;
}
}),cljs.core.mapcat.call(null,com.keminglabs.statetron.core.ancestors,com.keminglabs.statetron.core.active_leaves.call(null,sc))));
});
/**
 * Like core/step, but validates that statechart `env` conforms to all specs, as well as additional specs given by :state/spec
 */
com.keminglabs.statetron.specs.step = (function com$keminglabs$statetron$specs$step(sc,event){
var temp__5459__auto___48851 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("com.keminglabs.statetron.specs","event","com.keminglabs.statetron.specs/event",673119438),event);
if(cljs.core.truth_(temp__5459__auto___48851)){
var err_48852 = temp__5459__auto___48851;
throw cljs.core.ex_info.call(null,(function (){var sb__38052__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_48841_48853 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_48842_48854 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_48841_48853,_STAR_print_fn_STAR_48842_48854,sb__38052__auto__,err_48852,temp__5459__auto___48851){
return (function (x__38053__auto__){
return sb__38052__auto__.append(x__38053__auto__);
});})(_STAR_print_newline_STAR_48841_48853,_STAR_print_fn_STAR_48842_48854,sb__38052__auto__,err_48852,temp__5459__auto___48851))
;

try{expound.alpha.printer.call(null,err_48852);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_48842_48854;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_48841_48853;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__38052__auto__)].join('');
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event], null));
} else {
}

var G__48843 = com.keminglabs.statetron.core.step.call(null,sc,event,(function (env,step){
var temp__5459__auto__ = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("com.keminglabs.statetron.specs","env","com.keminglabs.statetron.specs/env",-1105635239),env);
if(cljs.core.truth_(temp__5459__auto__)){
var err = temp__5459__auto__;
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.keminglabs.statetron.specs.step__GT_str.call(null,step)),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__38052__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_48844_48855 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_48845_48856 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_48844_48855,_STAR_print_fn_STAR_48845_48856,sb__38052__auto__,err,temp__5459__auto__){
return (function (x__38053__auto__){
return sb__38052__auto__.append(x__38053__auto__);
});})(_STAR_print_newline_STAR_48844_48855,_STAR_print_fn_STAR_48845_48856,sb__38052__auto__,err,temp__5459__auto__))
;

try{expound.alpha.printer.call(null,err);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_48845_48856;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_48844_48855;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__38052__auto__)].join('');
})())].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1288888124),step], null));
} else {
return null;
}
}));
var x__779__auto___48857 = G__48843;
var sc_48858__$1 = x__779__auto___48857;

var temp__5459__auto___48859 = com.keminglabs.statetron.specs.active_spec_on_state.call(null,sc_48858__$1);
if(cljs.core.truth_(temp__5459__auto___48859)){
var vec__48846_48860 = temp__5459__auto___48859;
var spec_48861 = cljs.core.nth.call(null,vec__48846_48860,(0),null);
var state_48862 = cljs.core.nth.call(null,vec__48846_48860,(1),null);
var temp__5459__auto___48863__$1 = cljs.spec.alpha.explain_data.call(null,spec_48861,com.keminglabs.statetron.core.env.call(null,sc_48858__$1));
if(cljs.core.truth_(temp__5459__auto___48863__$1)){
var err_48864 = temp__5459__auto___48863__$1;
throw cljs.core.ex_info.call(null,["Env doesn't conform to spec on state: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(state_48862)),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__38052__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_48849_48865 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_48850_48866 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_48849_48865,_STAR_print_fn_STAR_48850_48866,sb__38052__auto__,err_48864,temp__5459__auto___48863__$1,vec__48846_48860,spec_48861,state_48862,temp__5459__auto___48859,x__779__auto___48857,sc_48858__$1,G__48843){
return (function (x__38053__auto__){
return sb__38052__auto__.append(x__38053__auto__);
});})(_STAR_print_newline_STAR_48849_48865,_STAR_print_fn_STAR_48850_48866,sb__38052__auto__,err_48864,temp__5459__auto___48863__$1,vec__48846_48860,spec_48861,state_48862,temp__5459__auto___48859,x__779__auto___48857,sc_48858__$1,G__48843))
;

try{expound.alpha.printer.call(null,err_48864);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_48850_48866;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_48849_48865;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__38052__auto__)].join('');
})())].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}
} else {
}

return G__48843;
});

//# sourceMappingURL=specs.js.map?rel=1517117189053
