// Compiled by ClojureScript 1.9.946 {}
goog.provide('expound.problems');
goog.require('cljs.core');
goog.require('expound.paths');
goog.require('cljs.spec.alpha');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('expound.printer');
expound.problems.blank_form = (function expound$problems$blank_form(form){
if(cljs.core.map_QMARK_.call(null,form)){
return cljs.core.zipmap.call(null,cljs.core.keys.call(null,form),cljs.core.repeat.call(null,new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124)));
} else {
if(cljs.core.vector_QMARK_.call(null,form)){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,form),new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124)));
} else {
if(cljs.core.set_QMARK_.call(null,form)){
return form;
} else {
if((cljs.core.list_QMARK_.call(null,form)) || (cljs.core.seq_QMARK_.call(null,form))){
return cljs.core.apply.call(null,cljs.core.list,cljs.core.repeat.call(null,cljs.core.count.call(null,form),new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124)));
} else {
return new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124);

}
}
}
}
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("expound.problems","summary-form","expound.problems/summary-form",514693822,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"show-valid-valids?","show-valid-valids?",-1444711355),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"highlighted-path","highlighted-path",-511870),new cljs.core.Keyword("expound","path","expound/path",-1026376555))),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"show-valid-valids?","show-valid-valids?",-1444711355),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"highlighted-path","highlighted-path",-511870),new cljs.core.Keyword("expound","path","expound/path",-1026376555)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-valid-valids?","show-valid-valids?",-1444711355),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"highlighted-path","highlighted-path",-511870)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.boolean_QMARK_,cljs.core.any_QMARK_,new cljs.core.Keyword("expound","path","expound/path",-1026376555)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("expound","path","expound/path",-1026376555)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"show-valid-valids?","show-valid-valids?",-1444711355),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"highlighted-path","highlighted-path",-511870),new cljs.core.Keyword("expound","path","expound/path",-1026376555)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
expound.problems.summary_form = (function expound$problems$summary_form(show_valid_values_QMARK_,form,in$){
while(true){
var vec__48114 = in$;
var seq__48115 = cljs.core.seq.call(null,vec__48114);
var first__48116 = cljs.core.first.call(null,seq__48115);
var seq__48115__$1 = cljs.core.next.call(null,seq__48115);
var k = first__48116;
var rst = seq__48115__$1;
var rst__$1 = (function (){var or__36925__auto__ = rst;
if(or__36925__auto__){
return or__36925__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var displayed_form = (cljs.core.truth_(show_valid_values_QMARK_)?form:expound.problems.blank_form.call(null,form));
if(cljs.core.empty_QMARK_.call(null,in$)){
return new cljs.core.Keyword("expound.problems","relevant","expound.problems/relevant",1188199036);
} else {
if(cljs.core.truth_((function (){var and__36913__auto__ = cljs.core.map_QMARK_.call(null,form);
if(and__36913__auto__){
return expound.paths.kps_QMARK_.call(null,k);
} else {
return and__36913__auto__;
}
})())){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,displayed_form,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(k)),expound.problems.summary_form.call(null,show_valid_values_QMARK_,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(k),rst__$1),new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124));
} else {
if(cljs.core.truth_((function (){var and__36913__auto__ = cljs.core.map_QMARK_.call(null,form);
if(and__36913__auto__){
return expound.paths.kvps_QMARK_.call(null,k);
} else {
return and__36913__auto__;
}
})())){
var G__48117 = show_valid_values_QMARK_;
var G__48118 = cljs.core.nth.call(null,cljs.core.seq.call(null,form),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(k));
var G__48119 = rst__$1;
show_valid_values_QMARK_ = G__48117;
form = G__48118;
in$ = G__48119;
continue;
} else {
if(cljs.core.associative_QMARK_.call(null,form)){
return cljs.core.assoc.call(null,displayed_form,k,expound.problems.summary_form.call(null,show_valid_values_QMARK_,cljs.core.get.call(null,form,k),rst__$1));
} else {
if((cljs.core.int_QMARK_.call(null,k)) && (cljs.core.seq_QMARK_.call(null,form))){
return cljs.core.apply.call(null,cljs.core.list,cljs.core.assoc.call(null,cljs.core.vec.call(null,displayed_form),k,expound.problems.summary_form.call(null,show_valid_values_QMARK_,cljs.core.nth.call(null,form,k),rst__$1)));
} else {
if((cljs.core.int_QMARK_.call(null,k)) && (cljs.core.seqable_QMARK_.call(null,form))){
return cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.assoc.call(null,cljs.core.vec.call(null,displayed_form),k,expound.problems.summary_form.call(null,show_valid_values_QMARK_,cljs.core.nth.call(null,cljs.core.seq.call(null,form),k),rst__$1)));
} else {
return null;
}
}
}
}
}
}
break;
}
});
expound.problems.highlight_line = (function expound$problems$highlight_line(prefix,replacement){
var max_width = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__48120_SHARP_){
return cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48120_SHARP_)].join(''));
}),clojure.string.split_lines.call(null,replacement)));
return expound.printer.indent.call(null,cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join('')),cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,max_width,"^")));
});
expound.problems.adjust_in = (function expound$problems$adjust_in(form,problem){
return cljs.core.assoc.call(null,problem,new cljs.core.Keyword("expound","in","expound/in",-1900412298),expound.paths.in_with_kps.call(null,form,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(problem),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(problem),cljs.core.PersistentVector.EMPTY));
});
expound.problems.adjust_path = (function expound$problems$adjust_path(failure,problem){
return cljs.core.assoc.call(null,problem,new cljs.core.Keyword("expound","path","expound/path",-1026376555),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),failure))?cljs.core.vec.call(null,cljs.core.rest.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(problem))):new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(problem)));
});
expound.problems.add_spec = (function expound$problems$add_spec(spec,problem){
return cljs.core.assoc.call(null,problem,new cljs.core.Keyword(null,"spec","spec",347520401),spec);
});
expound.problems.add_caller = (function expound$problems$add_caller(explain_data){
return null;
});
/**
 * Given a collection of problems, returns only those problems with data on the 'leaves' of the data
 */
expound.problems.leaf_only = (function expound$problems$leaf_only(problems){
var paths_to_data = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,new cljs.core.Keyword("expound","in","expound/in",-1900412298),problems));
return cljs.core.remove.call(null,((function (paths_to_data){
return (function (problem){
return cljs.core.some.call(null,((function (paths_to_data){
return (function (path){
return expound.paths.prefix_path_QMARK_.call(null,new cljs.core.Keyword("expound","in","expound/in",-1900412298).cljs$core$IFn$_invoke$arity$1(problem),path);
});})(paths_to_data))
,paths_to_data);
});})(paths_to_data))
,problems);
});
expound.problems.annotate = (function expound$problems$annotate(explain_data){
var map__48122 = explain_data;
var map__48122__$1 = ((((!((map__48122 == null)))?((((map__48122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48122.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48122):map__48122);
var problems = cljs.core.get.call(null,map__48122__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var value = cljs.core.get.call(null,map__48122__$1,new cljs.core.Keyword("cljs.spec.alpha","value","cljs.spec.alpha/value",1974786274));
var args = cljs.core.get.call(null,map__48122__$1,new cljs.core.Keyword("cljs.spec.alpha","args","cljs.spec.alpha/args",1870769783));
var ret = cljs.core.get.call(null,map__48122__$1,new cljs.core.Keyword("cljs.spec.alpha","ret","cljs.spec.alpha/ret",1165997503));
var fn = cljs.core.get.call(null,map__48122__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var failure = cljs.core.get.call(null,map__48122__$1,new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592));
var spec = cljs.core.get.call(null,map__48122__$1,new cljs.core.Keyword("cljs.spec.alpha","spec","cljs.spec.alpha/spec",1947137578));
var caller = (function (){var or__36925__auto__ = new cljs.core.Keyword("clojure.spec.test.alpha","caller","clojure.spec.test.alpha/caller",-706822212).cljs$core$IFn$_invoke$arity$1(explain_data);
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
return new cljs.core.Keyword("orchestra.spec.test","caller","orchestra.spec.test/caller",-686413347).cljs$core$IFn$_invoke$arity$1(explain_data);
}
})();
var form = ((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),failure))?value:((cljs.core.contains_QMARK_.call(null,explain_data,new cljs.core.Keyword("cljs.spec.alpha","ret","cljs.spec.alpha/ret",1165997503)))?ret:((cljs.core.contains_QMARK_.call(null,explain_data,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443)))?fn:((cljs.core.contains_QMARK_.call(null,explain_data,new cljs.core.Keyword("cljs.spec.alpha","args","cljs.spec.alpha/args",1870769783)))?args:null))));
var problems_SINGLEQUOTE_ = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,expound.problems.adjust_in,form),cljs.core.partial.call(null,expound.problems.adjust_path,failure),cljs.core.partial.call(null,expound.problems.add_spec,spec),((function (map__48122,map__48122__$1,problems,value,args,ret,fn,failure,spec,caller,form){
return (function (p1__48121_SHARP_){
return cljs.core.assoc.call(null,p1__48121_SHARP_,new cljs.core.Keyword("expound","form","expound/form",-264680632),form);
});})(map__48122,map__48122__$1,problems,value,args,ret,fn,failure,spec,caller,form))
),problems);
return cljs.core.assoc.call(null,explain_data,new cljs.core.Keyword("expound","form","expound/form",-264680632),form,new cljs.core.Keyword("expound","caller","expound/caller",-503638870),caller,new cljs.core.Keyword("expound","problems","expound/problems",1257773984),problems_SINGLEQUOTE_);
});
/**
 * Similar to get-in, but works with paths that reference map keys
 */
expound.problems.value_in = (function expound$problems$value_in(form,in$){
while(true){
var vec__48124 = in$;
var seq__48125 = cljs.core.seq.call(null,vec__48124);
var first__48126 = cljs.core.first.call(null,seq__48125);
var seq__48125__$1 = cljs.core.next.call(null,seq__48125);
var k = first__48126;
var rst = seq__48125__$1;
if(cljs.core.empty_QMARK_.call(null,in$)){
return form;
} else {
if(cljs.core.truth_((function (){var and__36913__auto__ = cljs.core.map_QMARK_.call(null,form);
if(and__36913__auto__){
return expound.paths.kps_QMARK_.call(null,k);
} else {
return and__36913__auto__;
}
})())){
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(k);
} else {
if(cljs.core.truth_((function (){var and__36913__auto__ = cljs.core.map_QMARK_.call(null,form);
if(and__36913__auto__){
return expound.paths.kvps_QMARK_.call(null,k);
} else {
return and__36913__auto__;
}
})())){
var G__48127 = cljs.core.nth.call(null,cljs.core.seq.call(null,form),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(k));
var G__48128 = rst;
form = G__48127;
in$ = G__48128;
continue;
} else {
if(cljs.core.associative_QMARK_.call(null,form)){
var G__48129 = cljs.core.get.call(null,form,k);
var G__48130 = rst;
form = G__48129;
in$ = G__48130;
continue;
} else {
if((cljs.core.int_QMARK_.call(null,k)) && (cljs.core.seqable_QMARK_.call(null,form))){
var G__48131 = cljs.core.nth.call(null,cljs.core.seq.call(null,form),k);
var G__48132 = rst;
form = G__48131;
in$ = G__48132;
continue;
} else {
return null;
}
}
}
}
}
break;
}
});
expound.problems.escape_replacement = (function expound$problems$escape_replacement(pattern,s){
return clojure.string.replace.call(null,s,/\$/,"$$$$");
});
/**
 * Given a problem, returns a pretty printed
 * string that highlights the problem value
 */
expound.problems.highlighted_value = (function expound$problems$highlighted_value(opts,problem){
var map__48133 = problem;
var map__48133__$1 = ((((!((map__48133 == null)))?((((map__48133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48133.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48133):map__48133);
var form = cljs.core.get.call(null,map__48133__$1,new cljs.core.Keyword("expound","form","expound/form",-264680632));
var in$ = cljs.core.get.call(null,map__48133__$1,new cljs.core.Keyword("expound","in","expound/in",-1900412298));
var map__48134 = opts;
var map__48134__$1 = ((((!((map__48134 == null)))?((((map__48134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48134.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48134):map__48134);
var show_valid_values_QMARK_ = cljs.core.get.call(null,map__48134__$1,new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",-587258094),false);
var value_at_path = expound.problems.value_in.call(null,form,in$);
var relevant = ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("expound.problems","relevant","expound.problems/relevant",1188199036)),"|(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("expound.problems","kv-relevant","expound.problems/kv-relevant",229013575)),"\\s+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("expound.problems","kv-relevant","expound.problems/kv-relevant",229013575)),"))"].join('');
var regex = cljs.core.re_pattern.call(null,["(.*)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(relevant),".*"].join(''));
var s = (function (){var _STAR_print_namespace_maps_STAR_48140 = cljs.core._STAR_print_namespace_maps_STAR_;
cljs.core._STAR_print_namespace_maps_STAR_ = false;

try{return expound.printer.pprint_str.call(null,clojure.walk.prewalk_replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),expound.problems.summary_form.call(null,show_valid_values_QMARK_,form,in$)));
}finally {cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR_48140;
}})();
var vec__48135 = cljs.core.re_find.call(null,regex,s);
var seq__48136 = cljs.core.seq.call(null,vec__48135);
var first__48137 = cljs.core.first.call(null,seq__48136);
var seq__48136__$1 = cljs.core.next.call(null,seq__48136);
var line = first__48137;
var first__48137__$1 = cljs.core.first.call(null,seq__48136__$1);
var seq__48136__$2 = cljs.core.next.call(null,seq__48136__$1);
var prefix = first__48137__$1;
var _more = seq__48136__$2;
var highlighted_line = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,line,cljs.core.re_pattern.call(null,relevant),expound.problems.escape_replacement.call(null,cljs.core.re_pattern.call(null,relevant),expound.printer.indent.call(null,(0),cljs.core.count.call(null,prefix),expound.printer.pprint_str.call(null,value_at_path))))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.problems.highlight_line.call(null,prefix,expound.printer.pprint_str.call(null,value_at_path)))].join('');
return expound.printer.no_trailing_whitespace.call(null,clojure.string.replace.call(null,s,line,expound.problems.escape_replacement.call(null,line,highlighted_line)));
});

//# sourceMappingURL=problems.js.map?rel=1517117187477
