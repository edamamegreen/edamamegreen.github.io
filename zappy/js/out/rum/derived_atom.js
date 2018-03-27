// Compiled by ClojureScript 1.9.946 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__38951 = arguments.length;
switch (G__38951) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__38952 = opts;
var map__38952__$1 = ((((!((map__38952 == null)))?((((map__38952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38952.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38952):map__38952);
var ref = cljs.core.get.call(null,map__38952__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__38952__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__38954 = cljs.core.count.call(null,refs);
switch (G__38954) {
case (1):
var vec__38955 = refs;
var a = cljs.core.nth.call(null,vec__38955,(0),null);
return ((function (vec__38955,a,G__38954,map__38952,map__38952__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__38955,a,G__38954,map__38952,map__38952__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__38958 = refs;
var a = cljs.core.nth.call(null,vec__38958,(0),null);
var b = cljs.core.nth.call(null,vec__38958,(1),null);
return ((function (vec__38958,a,b,G__38954,map__38952,map__38952__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__38958,a,b,G__38954,map__38952,map__38952__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__38961 = refs;
var a = cljs.core.nth.call(null,vec__38961,(0),null);
var b = cljs.core.nth.call(null,vec__38961,(1),null);
var c = cljs.core.nth.call(null,vec__38961,(2),null);
return ((function (vec__38961,a,b,c,G__38954,map__38952,map__38952__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__38961,a,b,c,G__38954,map__38952,map__38952__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__38954,map__38952,map__38952__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__38954,map__38952,map__38952__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__38964 = ref;
cljs.core.reset_BANG_.call(null,G__38964,recalc.call(null));

return G__38964;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__38952,map__38952__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__38952,map__38952__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__38952,map__38952__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__38952,map__38952__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__38965_38971 = cljs.core.seq.call(null,refs);
var chunk__38966_38972 = null;
var count__38967_38973 = (0);
var i__38968_38974 = (0);
while(true){
if((i__38968_38974 < count__38967_38973)){
var ref_38975__$1 = cljs.core._nth.call(null,chunk__38966_38972,i__38968_38974);
cljs.core.add_watch.call(null,ref_38975__$1,key,watch);

var G__38976 = seq__38965_38971;
var G__38977 = chunk__38966_38972;
var G__38978 = count__38967_38973;
var G__38979 = (i__38968_38974 + (1));
seq__38965_38971 = G__38976;
chunk__38966_38972 = G__38977;
count__38967_38973 = G__38978;
i__38968_38974 = G__38979;
continue;
} else {
var temp__5459__auto___38980 = cljs.core.seq.call(null,seq__38965_38971);
if(temp__5459__auto___38980){
var seq__38965_38981__$1 = temp__5459__auto___38980;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38965_38981__$1)){
var c__37856__auto___38982 = cljs.core.chunk_first.call(null,seq__38965_38981__$1);
var G__38983 = cljs.core.chunk_rest.call(null,seq__38965_38981__$1);
var G__38984 = c__37856__auto___38982;
var G__38985 = cljs.core.count.call(null,c__37856__auto___38982);
var G__38986 = (0);
seq__38965_38971 = G__38983;
chunk__38966_38972 = G__38984;
count__38967_38973 = G__38985;
i__38968_38974 = G__38986;
continue;
} else {
var ref_38987__$1 = cljs.core.first.call(null,seq__38965_38981__$1);
cljs.core.add_watch.call(null,ref_38987__$1,key,watch);

var G__38988 = cljs.core.next.call(null,seq__38965_38981__$1);
var G__38989 = null;
var G__38990 = (0);
var G__38991 = (0);
seq__38965_38971 = G__38988;
chunk__38966_38972 = G__38989;
count__38967_38973 = G__38990;
i__38968_38974 = G__38991;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=derived_atom.js.map?rel=1517117172083
