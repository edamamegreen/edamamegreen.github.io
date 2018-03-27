// Compiled by ClojureScript 1.9.946 {}
goog.provide('expound.alpha');
goog.require('cljs.core');
goog.require('expound.paths');
goog.require('expound.problems');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('expound.printer');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("expound.alpha","singleton","expound.alpha/singleton",531848121),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"count","count",2139924085),(1)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Symbol(null,"any?","any?",-318999933,null),cljs.core.any_QMARK_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__48143){
return (cljs.core.coll_QMARK_.call(null,G__48143)) && (cljs.core._EQ_.call(null,(1),cljs.core.bounded_count.call(null,(1),G__48143)));
}),new cljs.core.Keyword(null,"count","count",2139924085),(1),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"count","count",2139924085),(1))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spec","spec","spec/spec",350016446),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spec","specs","spec/specs",1428018738),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spec","spec","spec/spec",350016446)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("spec","spec","spec/spec",350016446),new cljs.core.Keyword("spec","spec","spec/spec",350016446),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__48144){
return cljs.core.coll_QMARK_.call(null,G__48144);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spec","spec","spec/spec",350016446))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spec.problem","via","spec.problem/via",-2031130516),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spec","spec","spec/spec",350016446),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("spec","spec","spec/spec",350016446),new cljs.core.Keyword("spec","spec","spec/spec",350016446),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__48145){
return cljs.core.vector_QMARK_.call(null,G__48145);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spec","spec","spec/spec",350016446),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spec","problem","spec/problem",1166707271),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spec.problem","via","spec.problem/via",-2031130516)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spec.problem","via","spec.problem/via",-2031130516)], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__48146){
return cljs.core.map_QMARK_.call(null,G__48146);
}),(function (G__48146){
return cljs.core.contains_QMARK_.call(null,G__48146,new cljs.core.Keyword(null,"via","via",-1904457336));
})], null),(function (G__48146){
return (cljs.core.map_QMARK_.call(null,G__48146)) && (cljs.core.contains_QMARK_.call(null,G__48146,new cljs.core.Keyword(null,"via","via",-1904457336)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spec.problem","via","spec.problem/via",-2031130516)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"via","via",-1904457336)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"via","via",-1904457336)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spec","problems","spec/problems",2096407970),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spec","problem","spec/problem",1166707271)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("spec","problem","spec/problem",1166707271),new cljs.core.Keyword("spec","problem","spec/problem",1166707271),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__48147){
return cljs.core.coll_QMARK_.call(null,G__48147);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spec","problem","spec/problem",1166707271))], null),null));
expound.alpha.header_size = (35);
expound.alpha.section_size = (25);
expound.alpha._STAR_value_str_fn_STAR_ = (function expound$alpha$_STAR_value_str_fn_STAR_(_,___$1,___$2,___$3){
return "NOT IMPLEMENTED";
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("expound.alpha","value-in-context","expound.alpha/value-in-context",-547735824,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"spec-name","spec-name",1234428066),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"ret","ret",-468222814),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null)),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword("expound","path","expound/path",-1026376555),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"spec-name","spec-name",1234428066),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"ret","ret",-468222814),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null)),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword("expound","path","expound/path",-1026376555),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"spec-name","spec-name",1234428066),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.spec.alpha.nilable_impl.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"ret","ret",-468222814),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"ret","ret",-468222814),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),null),cljs.core.any_QMARK_,new cljs.core.Keyword("expound","path","expound/path",-1026376555),cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"ret","ret",-468222814),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null)),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("expound","path","expound/path",-1026376555),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"spec-name","spec-name",1234428066),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"ret","ret",-468222814),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null)),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword("expound","path","expound/path",-1026376555),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null));
/**
 * Given a form and a path into that form, returns a string
 * that helps the user understand where that path is located
 * in the form
 */
expound.alpha.value_in_context = (function expound$alpha$value_in_context(opts,spec_name,form,path,value){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),spec_name)){
var _STAR_print_namespace_maps_STAR_48148 = cljs.core._STAR_print_namespace_maps_STAR_;
cljs.core._STAR_print_namespace_maps_STAR_ = false;

try{return cljs.core.pr_str.call(null,form);
}finally {cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR_48148;
}} else {
if(cljs.core._EQ_.call(null,form,value)){
var _STAR_print_namespace_maps_STAR_48149 = cljs.core._STAR_print_namespace_maps_STAR_;
cljs.core._STAR_print_namespace_maps_STAR_ = false;

try{return cljs.core.pr_str.call(null,value);
}finally {cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR_48149;
}} else {
return expound.problems.highlighted_value.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("expound","form","expound/form",-264680632),form,new cljs.core.Keyword("expound","in","expound/in",-1900412298),path], null));
}
}
});
expound.alpha.spec_str = (function expound$alpha$spec_str(spec){
if((spec instanceof cljs.core.Keyword)){
return expound.printer.format.call(null,"%s:\n%s",spec,expound.printer.indent.call(null,expound.printer.pprint_str.call(null,cljs.spec.alpha.form.call(null,spec))));
} else {
return expound.printer.pprint_str.call(null,cljs.spec.alpha.form.call(null,spec));
}
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("expound.alpha","specs","expound.alpha/specs",-1617991929,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"problems","problems",2097327077),new cljs.core.Keyword("spec","problems","spec/problems",2096407970)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("spec","specs","spec/specs",1428018738)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"problems","problems",2097327077),new cljs.core.Keyword("spec","problems","spec/problems",2096407970)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"problems","problems",2097327077)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spec","problems","spec/problems",2096407970)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spec","problems","spec/problems",2096407970)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"problems","problems",2097327077),new cljs.core.Keyword("spec","problems","spec/problems",2096407970)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("spec","specs","spec/specs",1428018738),new cljs.core.Keyword("spec","specs","spec/specs",1428018738),null,null),new cljs.core.Keyword("spec","specs","spec/specs",1428018738),null,null,null));
/**
 * Given a collection of problems, returns the specs for those problems, with duplicates removed
 */
expound.alpha.specs = (function expound$alpha$specs(problems){
return cljs.core.distinct.call(null,cljs.core.flatten.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"via","via",-1904457336),problems)));
});
expound.alpha.specs_str = (function expound$alpha$specs_str(problems){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,expound.alpha.spec_str,cljs.core.reverse.call(null,expound.alpha.specs.call(null,problems))));
});
expound.alpha.named_QMARK_ = (function expound$alpha$named_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$INamed$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
expound.alpha.elide_core_ns = (function expound$alpha$elide_core_ns(s){
return clojure.string.replace.call(null,clojure.string.replace.call(null,s,"cljs.core/",""),"cljs/core/","");
});
expound.alpha.pprint_fn = (function expound$alpha$pprint_fn(f){
return clojure.string.replace.call(null,clojure.string.replace.call(null,expound.alpha.elide_core_ns.call(null,(function (){var fn_parts = clojure.string.split.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/function ([^\(]+)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''))),/\$/);
var ns_n = clojure.string.join.call(null,".",cljs.core.butlast.call(null,fn_parts));
var fn_n = cljs.core.last.call(null,fn_parts);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.demunge_str.call(null,ns_n)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.demunge_str.call(null,fn_n))].join('');
})()),/--\d+/,""),/@[a-zA-Z0-9]+/,"");
});
expound.alpha.pr_pred_STAR_ = (function expound$alpha$pr_pred_STAR_(pred){
if(cljs.core.truth_((function (){var or__36925__auto__ = (pred instanceof cljs.core.Symbol);
if(or__36925__auto__){
return or__36925__auto__;
} else {
return expound.alpha.named_QMARK_.call(null,pred);
}
})())){
return cljs.core.name.call(null,pred);
} else {
if(cljs.core.fn_QMARK_.call(null,pred)){
return expound.alpha.pprint_fn.call(null,pred);
} else {
return expound.alpha.elide_core_ns.call(null,(function (){var _STAR_print_namespace_maps_STAR_48151 = cljs.core._STAR_print_namespace_maps_STAR_;
cljs.core._STAR_print_namespace_maps_STAR_ = false;

try{return expound.printer.pprint_str.call(null,pred);
}finally {cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR_48151;
}})());

}
}
});
expound.alpha.pr_pred = (function expound$alpha$pr_pred(pred,spec){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818),pred)){
return expound.alpha.pr_pred_STAR_.call(null,spec);
} else {
return expound.alpha.pr_pred_STAR_.call(null,pred);
}
});
expound.alpha.show_spec_name = (function expound$alpha$show_spec_name(spec_name,value){
if(cljs.core.truth_(spec_name)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__48152 = spec_name;
var G__48152__$1 = (((G__48152 instanceof cljs.core.Keyword))?G__48152.fqn:null);
switch (G__48152__$1) {
case "args":
return "Function arguments";

break;
case "ret":
return "Return value";

break;
case "fn":
return "Function arguments and return value";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48152__$1)].join('')));

}
})()),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');
} else {
return value;
}
});
expound.alpha.preds = (function expound$alpha$preds(problems){
return clojure.string.join.call(null,"\n\nor\n\n",cljs.core.map.call(null,(function (problem){
return expound.printer.indent.call(null,expound.alpha.pr_pred.call(null,new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(problem),new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(problem)));
}),problems));
});
expound.alpha.insufficient_input = (function expound$alpha$insufficient_input(spec_name,val,path,problem){
return expound.printer.format.call(null,"%s\n\nshould have additional elements. The next element is named `%s` and satisfies\n\n%s",expound.alpha.show_spec_name.call(null,spec_name,expound.printer.indent.call(null,expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,val,path,expound.problems.value_in.call(null,val,path)))),cljs.core.pr_str.call(null,cljs.core.first.call(null,new cljs.core.Keyword("expound","path","expound/path",-1026376555).cljs$core$IFn$_invoke$arity$1(problem))),expound.printer.indent.call(null,expound.alpha.pr_pred.call(null,new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(problem),new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(problem))));
});
expound.alpha.extra_input = (function expound$alpha$extra_input(spec_name,val,path){
return expound.printer.format.call(null,"Value has extra input\n\n%s",expound.alpha.show_spec_name.call(null,spec_name,expound.printer.indent.call(null,expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,val,path,expound.problems.value_in.call(null,val,path)))));
});
expound.alpha.missing_key = (function expound$alpha$missing_key(form){
var vec__48154 = form;
var contains = cljs.core.nth.call(null,vec__48154,(0),null);
var _arg = cljs.core.nth.call(null,vec__48154,(1),null);
var key_keyword = cljs.core.nth.call(null,vec__48154,(2),null);
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null], null), null),contains)){
return key_keyword;
} else {
var vec__48157 = form;
var seq__48158 = cljs.core.seq.call(null,vec__48157);
var first__48159 = cljs.core.first.call(null,seq__48158);
var seq__48158__$1 = cljs.core.next.call(null,seq__48158);
var fn = first__48159;
var first__48159__$1 = cljs.core.first.call(null,seq__48158__$1);
var seq__48158__$2 = cljs.core.next.call(null,seq__48158__$1);
var _ = first__48159__$1;
var first__48159__$2 = cljs.core.first.call(null,seq__48158__$2);
var seq__48158__$3 = cljs.core.next.call(null,seq__48158__$2);
var vec__48160 = first__48159__$2;
var contains__$1 = cljs.core.nth.call(null,vec__48160,(0),null);
var _arg__$1 = cljs.core.nth.call(null,vec__48160,(1),null);
var key_keyword__$1 = cljs.core.nth.call(null,vec__48160,(2),null);
var rst = seq__48158__$3;
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null], null), null),contains__$1);
} else {
}
} else {
}

return key_keyword__$1;
}
});
expound.alpha.label = (function expound$alpha$label(var_args){
var G__48164 = arguments.length;
switch (G__48164) {
case 1:
return expound.alpha.label.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return expound.alpha.label.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

expound.alpha.label.cljs$core$IFn$_invoke$arity$1 = (function (size){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,size,"-"));
});

expound.alpha.label.cljs$core$IFn$_invoke$arity$2 = (function (size,s){
var prefix = ["-- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join('');
var chars_left = (size - cljs.core.count.call(null,prefix));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,chars_left,"-")))].join('');
});

expound.alpha.label.cljs$lang$maxFixedArity = 2;

expound.alpha.header_label = cljs.core.partial.call(null,expound.alpha.label,expound.alpha.header_size);
expound.alpha.section_label = cljs.core.partial.call(null,expound.alpha.label,expound.alpha.section_size);
expound.alpha.relevant_specs = (function expound$alpha$relevant_specs(problems){
var sp_str = expound.alpha.specs_str.call(null,problems);
if(clojure.string.blank_QMARK_.call(null,sp_str)){
return "";
} else {
return expound.printer.format.call(null,"%s\n\n%s",expound.alpha.section_label.call(null,"Relevant specs"),sp_str);
}
});
expound.alpha.multi_spec_parts = (function expound$alpha$multi_spec_parts(spec){
var vec__48166 = cljs.spec.alpha.form.call(null,spec);
var _multi_spec = cljs.core.nth.call(null,vec__48166,(0),null);
var mm = cljs.core.nth.call(null,vec__48166,(1),null);
var retag = cljs.core.nth.call(null,vec__48166,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mm","mm",-1652850560),mm,new cljs.core.Keyword(null,"retag","retag",-1111558802),retag], null);
});
expound.alpha.missing_spec_QMARK_ = (function expound$alpha$missing_spec_QMARK_(problem){
return cljs.core._EQ_.call(null,"no method",new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(problem));
});
expound.alpha.not_in_set_QMARK_ = (function expound$alpha$not_in_set_QMARK_(problem){
return cljs.core.set_QMARK_.call(null,new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(problem));
});
expound.alpha.missing_key_QMARK_ = (function expound$alpha$missing_key_QMARK_(problem){
var pred = new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(problem);
var and__36913__auto__ = cljs.core.list_QMARK_.call(null,pred);
if(and__36913__auto__){
var and__36913__auto____$1 = cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(problem));
if(and__36913__auto____$1){
var or__36925__auto__ = cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.first.call(null,pred));
if(or__36925__auto__){
return or__36925__auto__;
} else {
var vec__48199 = pred;
var seq__48200 = cljs.core.seq.call(null,vec__48199);
var first__48201 = cljs.core.first.call(null,seq__48200);
var seq__48200__$1 = cljs.core.next.call(null,seq__48200);
var fn = first__48201;
var first__48201__$1 = cljs.core.first.call(null,seq__48200__$1);
var seq__48200__$2 = cljs.core.next.call(null,seq__48200__$1);
var _ = first__48201__$1;
var first__48201__$2 = cljs.core.first.call(null,seq__48200__$2);
var seq__48200__$3 = cljs.core.next.call(null,seq__48200__$2);
var vec__48202 = first__48201__$2;
var contains = cljs.core.nth.call(null,vec__48202,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__48202,(1),null);
var rst = seq__48200__$3;
return (cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),fn)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),contains));
}
} else {
return and__36913__auto____$1;
}
} else {
return and__36913__auto__;
}
});
expound.alpha.regex_failure_QMARK_ = (function expound$alpha$regex_failure_QMARK_(problem){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Extra input",null,"Insufficient input",null], null), null),new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(problem));
});
expound.alpha.no_method = (function expound$alpha$no_method(spec_name,val,path,problem){
var sp = cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.core","last","cljs.core/last",1273893704,null),cljs.core.list(new cljs.core.Keyword(null,"via","via",-1904457336),new cljs.core.Symbol(null,"problem","problem",-1486280621,null))),cljs.core.last.call(null,new cljs.core.Keyword(null,"via","via",-1904457336).cljs$core$IFn$_invoke$arity$1(problem)),null,null);
var map__48205 = expound.alpha.multi_spec_parts.call(null,sp);
var map__48205__$1 = ((((!((map__48205 == null)))?((((map__48205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48205.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48205):map__48205);
var mm = cljs.core.get.call(null,map__48205__$1,new cljs.core.Keyword(null,"mm","mm",-1652850560));
var retag = cljs.core.get.call(null,map__48205__$1,new cljs.core.Keyword(null,"retag","retag",-1111558802));
return expound.printer.format.call(null,"Cannot find spec for\n\n %s\n\n Spec multimethod:      `%s`\n Dispatch function:     `%s`\n Dispatch value:        `%s`\n ",expound.alpha.show_spec_name.call(null,spec_name,expound.printer.indent.call(null,expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,val,path,expound.problems.value_in.call(null,val,path)))),cljs.core.pr_str.call(null,mm),cljs.core.pr_str.call(null,retag),cljs.core.pr_str.call(null,(cljs.core.truth_(retag)?retag.call(null,expound.problems.value_in.call(null,val,path)):null)));
});
if(typeof expound.alpha.problem_group_str !== 'undefined'){
} else {
expound.alpha.problem_group_str = (function (){var method_table__37980__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__37981__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__37982__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__37983__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__37984__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"expound.alpha","problem-group-str"),((function (method_table__37980__auto__,prefer_table__37981__auto__,method_cache__37982__auto__,cached_hierarchy__37983__auto__,hierarchy__37984__auto__){
return (function (type,spec_name,_val,_path,_problems){
return type;
});})(method_table__37980__auto__,prefer_table__37981__auto__,method_cache__37982__auto__,cached_hierarchy__37983__auto__,hierarchy__37984__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__37984__auto__,method_table__37980__auto__,prefer_table__37981__auto__,method_cache__37982__auto__,cached_hierarchy__37983__auto__));
})();
}
cljs.core._add_method.call(null,expound.alpha.problem_group_str,new cljs.core.Keyword("problem","missing-key","problem/missing-key",794346427),(function (_type,spec_name,val,path,problems){
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,new cljs.core.Keyword(null,"val","val",128701612),problems)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["All values should be the same, but they are ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problems)].join('')),"\n","(apply = (map :val problems))"].join('')));
}

return expound.printer.format.call(null,"%s\n\n%s\n\nshould contain keys: %s\n\n%s",expound.alpha.header_label.call(null,"Spec failed"),expound.alpha.show_spec_name.call(null,spec_name,expound.printer.indent.call(null,expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,val,path,expound.problems.value_in.call(null,val,path)))),clojure.string.join.call(null,",",cljs.core.map.call(null,(function (p1__48207_SHARP_){
return ["`",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.alpha.missing_key.call(null,new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(p1__48207_SHARP_))),"`"].join('');
}),problems)),expound.alpha.relevant_specs.call(null,problems));
}));
cljs.core._add_method.call(null,expound.alpha.problem_group_str,new cljs.core.Keyword("problem","not-in-set","problem/not-in-set",-1518699464),(function (_type,spec_name,val,path,problems){
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,new cljs.core.Keyword(null,"val","val",128701612),problems)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["All values should be the same, but they are ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problems)].join('')),"\n","(apply = (map :val problems))"].join('')));
}

return expound.printer.format.call(null,"%s\n\n%s\n\nshould be%s: %s\n\n%s",expound.alpha.header_label.call(null,"Spec failed"),expound.alpha.show_spec_name.call(null,spec_name,expound.printer.indent.call(null,expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,val,path,expound.problems.value_in.call(null,val,path)))),((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,problems)))))?"":" one of"),clojure.string.join.call(null,",",cljs.core.map.call(null,(function (p1__48208_SHARP_){
return ["`",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48208_SHARP_),"`"].join('');
}),new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,problems)))),expound.alpha.relevant_specs.call(null,problems));
}));
cljs.core._add_method.call(null,expound.alpha.problem_group_str,new cljs.core.Keyword("problem","missing-spec","problem/missing-spec",223748487),(function (_type,spec_name,val,path,problems){
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("expound.alpha","singleton","expound.alpha/singleton",531848121),problems);
} else {
}
} else {
}

return expound.printer.format.call(null,"%s\n\n%s\n\n%s",expound.alpha.header_label.call(null,"Missing spec"),expound.alpha.no_method.call(null,spec_name,val,path,cljs.core.first.call(null,problems)),expound.alpha.relevant_specs.call(null,problems));
}));
cljs.core._add_method.call(null,expound.alpha.problem_group_str,new cljs.core.Keyword("problem","regex-failure","problem/regex-failure",1084655994),(function (_type,spec_name,val,path,problems){
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("expound.alpha","singleton","expound.alpha/singleton",531848121),problems);
} else {
}
} else {
}

var problem = cljs.core.first.call(null,problems);
return expound.printer.format.call(null,"%s\n\n%s\n\n%s",expound.alpha.header_label.call(null,"Syntax error"),(function (){var G__48209 = new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(problem);
switch (G__48209) {
case "Insufficient input":
return expound.alpha.insufficient_input.call(null,spec_name,val,path,problem);

break;
case "Extra input":
return expound.alpha.extra_input.call(null,spec_name,val,path);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48209)].join('')));

}
})(),expound.alpha.relevant_specs.call(null,problems));
}));
cljs.core._add_method.call(null,expound.alpha.problem_group_str,new cljs.core.Keyword("problem","unknown","problem/unknown",-1249712246),(function (_type,spec_name,val,path,problems){
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,new cljs.core.Keyword(null,"val","val",128701612),problems)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["All values should be the same, but they are ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problems)].join('')),"\n","(apply = (map :val problems))"].join('')));
}

return expound.printer.format.call(null,"%s\n\n%s\n\nshould satisfy\n\n%s\n\n%s",expound.alpha.header_label.call(null,"Spec failed"),expound.alpha.show_spec_name.call(null,spec_name,expound.printer.indent.call(null,expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,val,path,expound.problems.value_in.call(null,val,path)))),expound.alpha.preds.call(null,problems),expound.alpha.relevant_specs.call(null,problems));
}));
expound.alpha.problem_type = (function expound$alpha$problem_type(problem){
if(cljs.core.truth_(expound.alpha.not_in_set_QMARK_.call(null,problem))){
return new cljs.core.Keyword("problem","not-in-set","problem/not-in-set",-1518699464);
} else {
if(cljs.core.truth_(expound.alpha.missing_key_QMARK_.call(null,problem))){
return new cljs.core.Keyword("problem","missing-key","problem/missing-key",794346427);
} else {
if(cljs.core.truth_(expound.alpha.missing_spec_QMARK_.call(null,problem))){
return new cljs.core.Keyword("problem","missing-spec","problem/missing-spec",223748487);
} else {
if(cljs.core.truth_(expound.alpha.regex_failure_QMARK_.call(null,problem))){
return new cljs.core.Keyword("problem","regex-failure","problem/regex-failure",1084655994);
} else {
return new cljs.core.Keyword("problem","unknown","problem/unknown",-1249712246);

}
}
}
}
});
/**
 * Same as sort-by, but if an error is raised, returns the original unsorted collection
 */
expound.alpha.safe_sort_by = (function expound$alpha$safe_sort_by(key_fn,comp,coll){
try{return cljs.core.sort_by.call(null,key_fn,comp,coll);
}catch (e48211){var e = e48211;
return coll;
}});
expound.alpha.instrumentation_info = (function expound$alpha$instrumentation_info(failure,caller){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),failure)){
return expound.printer.format.call(null,"%s:%s\n\n",new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$2(caller,"<filename missing>"),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$2(caller,"<line number missing>"));
} else {
return "";
}
});
expound.alpha.spec_name = (function expound$alpha$spec_name(ed){
if(cljs.core.truth_(new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592).cljs$core$IFn$_invoke$arity$1(ed))){
return cljs.core.first.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814).cljs$core$IFn$_invoke$arity$1(ed))));
} else {
return null;
}
});
expound.alpha.printer_str = (function expound$alpha$printer_str(opts,explain_data){
if(cljs.core.not.call(null,explain_data)){
return "Success!\n";
} else {
var _STAR_value_str_fn_STAR_48212 = expound.alpha._STAR_value_str_fn_STAR_;
expound.alpha._STAR_value_str_fn_STAR_ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"value-str-fn","value-str-fn",1124137860),cljs.core.partial.call(null,expound.alpha.value_in_context,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",-587258094),false], null),opts)));

try{var map__48213 = explain_data;
var map__48213__$1 = ((((!((map__48213 == null)))?((((map__48213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48213.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48213):map__48213);
var problems = cljs.core.get.call(null,map__48213__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__48213__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var failure = cljs.core.get.call(null,map__48213__$1,new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592));
var _ = (function (){var seq__48215 = cljs.core.seq.call(null,problems);
var chunk__48216 = null;
var count__48217 = (0);
var i__48218 = (0);
while(true){
if((i__48218 < count__48217)){
var problem = cljs.core._nth.call(null,chunk__48216,i__48218);
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,cljs.spec.alpha.nilable_impl.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Extra input",null,"Insufficient input",null,"no method",null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Extra input",null,"Insufficient input",null,"no method",null], null), null),null),new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(problem));
} else {
new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(problem);
}
} else {
new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(problem);
}

var G__48235 = seq__48215;
var G__48236 = chunk__48216;
var G__48237 = count__48217;
var G__48238 = (i__48218 + (1));
seq__48215 = G__48235;
chunk__48216 = G__48236;
count__48217 = G__48237;
i__48218 = G__48238;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq.call(null,seq__48215);
if(temp__5459__auto__){
var seq__48215__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48215__$1)){
var c__37856__auto__ = cljs.core.chunk_first.call(null,seq__48215__$1);
var G__48239 = cljs.core.chunk_rest.call(null,seq__48215__$1);
var G__48240 = c__37856__auto__;
var G__48241 = cljs.core.count.call(null,c__37856__auto__);
var G__48242 = (0);
seq__48215 = G__48239;
chunk__48216 = G__48240;
count__48217 = G__48241;
i__48218 = G__48242;
continue;
} else {
var problem = cljs.core.first.call(null,seq__48215__$1);
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,cljs.spec.alpha.nilable_impl.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Extra input",null,"Insufficient input",null,"no method",null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Extra input",null,"Insufficient input",null,"no method",null], null), null),null),new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(problem));
} else {
new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(problem);
}
} else {
new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(problem);
}

var G__48243 = cljs.core.next.call(null,seq__48215__$1);
var G__48244 = null;
var G__48245 = (0);
var G__48246 = (0);
seq__48215 = G__48243;
chunk__48216 = G__48244;
count__48217 = G__48245;
i__48218 = G__48246;
continue;
}
} else {
return null;
}
}
break;
}
})();
var explain_data_SINGLEQUOTE_ = expound.problems.annotate.call(null,explain_data);
var caller = new cljs.core.Keyword("expound","caller","expound/caller",-503638870).cljs$core$IFn$_invoke$arity$1(explain_data_SINGLEQUOTE_);
var form = new cljs.core.Keyword("expound","form","expound/form",-264680632).cljs$core$IFn$_invoke$arity$1(explain_data_SINGLEQUOTE_);
var grouped_problems = expound.alpha.safe_sort_by.call(null,cljs.core.first,expound.paths.compare_paths,cljs.core.group_by.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword("expound","in","expound/in",-1900412298),expound.alpha.problem_type),expound.problems.leaf_only.call(null,new cljs.core.Keyword("expound","problems","expound/problems",1257773984).cljs$core$IFn$_invoke$arity$1(explain_data_SINGLEQUOTE_))));
return expound.printer.no_trailing_whitespace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.alpha.instrumentation_info.call(null,failure,caller)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.printer.format.call(null,"%s\n\n%s\nDetected %s %s\n",clojure.string.join.call(null,"\n\n",(function (){var iter__37807__auto__ = ((function (map__48213,map__48213__$1,problems,fn,failure,_,explain_data_SINGLEQUOTE_,caller,form,grouped_problems,_STAR_value_str_fn_STAR_48212){
return (function expound$alpha$printer_str_$_iter__48219(s__48220){
return (new cljs.core.LazySeq(null,((function (map__48213,map__48213__$1,problems,fn,failure,_,explain_data_SINGLEQUOTE_,caller,form,grouped_problems,_STAR_value_str_fn_STAR_48212){
return (function (){
var s__48220__$1 = s__48220;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__48220__$1);
if(temp__5459__auto__){
var s__48220__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48220__$2)){
var c__37805__auto__ = cljs.core.chunk_first.call(null,s__48220__$2);
var size__37806__auto__ = cljs.core.count.call(null,c__37805__auto__);
var b__48222 = cljs.core.chunk_buffer.call(null,size__37806__auto__);
if((function (){var i__48221 = (0);
while(true){
if((i__48221 < size__37806__auto__)){
var vec__48223 = cljs.core._nth.call(null,c__37805__auto__,i__48221);
var vec__48226 = cljs.core.nth.call(null,vec__48223,(0),null);
var in$ = cljs.core.nth.call(null,vec__48226,(0),null);
var type = cljs.core.nth.call(null,vec__48226,(1),null);
var problems__$1 = cljs.core.nth.call(null,vec__48223,(1),null);
cljs.core.chunk_append.call(null,b__48222,expound.alpha.problem_group_str.call(null,type,expound.alpha.spec_name.call(null,explain_data),form,in$,problems__$1));

var G__48247 = (i__48221 + (1));
i__48221 = G__48247;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48222),expound$alpha$printer_str_$_iter__48219.call(null,cljs.core.chunk_rest.call(null,s__48220__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48222),null);
}
} else {
var vec__48229 = cljs.core.first.call(null,s__48220__$2);
var vec__48232 = cljs.core.nth.call(null,vec__48229,(0),null);
var in$ = cljs.core.nth.call(null,vec__48232,(0),null);
var type = cljs.core.nth.call(null,vec__48232,(1),null);
var problems__$1 = cljs.core.nth.call(null,vec__48229,(1),null);
return cljs.core.cons.call(null,expound.alpha.problem_group_str.call(null,type,expound.alpha.spec_name.call(null,explain_data),form,in$,problems__$1),expound$alpha$printer_str_$_iter__48219.call(null,cljs.core.rest.call(null,s__48220__$2)));
}
} else {
return null;
}
break;
}
});})(map__48213,map__48213__$1,problems,fn,failure,_,explain_data_SINGLEQUOTE_,caller,form,grouped_problems,_STAR_value_str_fn_STAR_48212))
,null,null));
});})(map__48213,map__48213__$1,problems,fn,failure,_,explain_data_SINGLEQUOTE_,caller,form,grouped_problems,_STAR_value_str_fn_STAR_48212))
;
return iter__37807__auto__.call(null,grouped_problems);
})()),expound.alpha.section_label.call(null),cljs.core.count.call(null,grouped_problems),((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,grouped_problems)))?"error":"errors")))].join(''));
}finally {expound.alpha._STAR_value_str_fn_STAR_ = _STAR_value_str_fn_STAR_48212;
}}
});
/**
 * Returns a printer, configured via opts
 */
expound.alpha.custom_printer = (function expound$alpha$custom_printer(opts){
return (function (explain_data){
return cljs.core.print.call(null,expound.alpha.printer_str.call(null,opts,explain_data));
});
});
/**
 * Prints explain-data in a human-readable format
 */
expound.alpha.printer = (function expound$alpha$printer(explain_data){
return expound.alpha.custom_printer.call(null,cljs.core.PersistentArrayMap.EMPTY).call(null,explain_data);
});
/**
 * Given a spec and a value, either returns success message or returns a human-readable explanation as a string.
 */
expound.alpha.expound_str = (function expound$alpha$expound_str(spec,form){
var explain_data = cljs.spec.alpha.explain_data.call(null,spec,form);
return expound.alpha.printer_str.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(explain_data)?cljs.core.assoc.call(null,explain_data,new cljs.core.Keyword("cljs.spec.alpha","value","cljs.spec.alpha/value",1974786274),form):null));
});
/**
 * Given a spec and a value, either prints a success message or prints a human-readable explanation as a string.
 */
expound.alpha.expound = (function expound$alpha$expound(spec,form){
return cljs.core.print.call(null,expound.alpha.expound_str.call(null,spec,form));
});

//# sourceMappingURL=alpha.js.map?rel=1517117187699
