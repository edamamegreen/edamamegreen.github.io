// Compiled by ClojureScript 1.9.494 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args75035 = [];
var len__37108__auto___75055 = arguments.length;
var i__37109__auto___75056 = (0);
while(true){
if((i__37109__auto___75056 < len__37108__auto___75055)){
args75035.push((arguments[i__37109__auto___75056]));

var G__75057 = (i__37109__auto___75056 + (1));
i__37109__auto___75056 = G__75057;
continue;
} else {
}
break;
}

var G__75037 = args75035.length;
switch (G__75037) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75035.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__75038 = opts;
var map__75038__$1 = ((((!((map__75038 == null)))?((((map__75038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75038.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75038):map__75038);
var ref = cljs.core.get.call(null,map__75038__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__75038__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__75040 = cljs.core.count.call(null,refs);
switch (G__75040) {
case (1):
var vec__75041 = refs;
var a = cljs.core.nth.call(null,vec__75041,(0),null);
return ((function (vec__75041,a,G__75040,map__75038,map__75038__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__75041,a,G__75040,map__75038,map__75038__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__75044 = refs;
var a = cljs.core.nth.call(null,vec__75044,(0),null);
var b = cljs.core.nth.call(null,vec__75044,(1),null);
return ((function (vec__75044,a,b,G__75040,map__75038,map__75038__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__75044,a,b,G__75040,map__75038,map__75038__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__75047 = refs;
var a = cljs.core.nth.call(null,vec__75047,(0),null);
var b = cljs.core.nth.call(null,vec__75047,(1),null);
var c = cljs.core.nth.call(null,vec__75047,(2),null);
return ((function (vec__75047,a,b,c,G__75040,map__75038,map__75038__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__75047,a,b,c,G__75040,map__75038,map__75038__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__75040,map__75038,map__75038__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__75040,map__75038,map__75038__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__75050 = ref;
cljs.core.reset_BANG_.call(null,G__75050,recalc.call(null));

return G__75050;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__75038,map__75038__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__75038,map__75038__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__75038,map__75038__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__75038,map__75038__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__75051_75060 = cljs.core.seq.call(null,refs);
var chunk__75052_75061 = null;
var count__75053_75062 = (0);
var i__75054_75063 = (0);
while(true){
if((i__75054_75063 < count__75053_75062)){
var ref_75064__$1 = cljs.core._nth.call(null,chunk__75052_75061,i__75054_75063);
cljs.core.add_watch.call(null,ref_75064__$1,key,watch);

var G__75065 = seq__75051_75060;
var G__75066 = chunk__75052_75061;
var G__75067 = count__75053_75062;
var G__75068 = (i__75054_75063 + (1));
seq__75051_75060 = G__75065;
chunk__75052_75061 = G__75066;
count__75053_75062 = G__75067;
i__75054_75063 = G__75068;
continue;
} else {
var temp__6753__auto___75069 = cljs.core.seq.call(null,seq__75051_75060);
if(temp__6753__auto___75069){
var seq__75051_75070__$1 = temp__6753__auto___75069;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75051_75070__$1)){
var c__36798__auto___75071 = cljs.core.chunk_first.call(null,seq__75051_75070__$1);
var G__75072 = cljs.core.chunk_rest.call(null,seq__75051_75070__$1);
var G__75073 = c__36798__auto___75071;
var G__75074 = cljs.core.count.call(null,c__36798__auto___75071);
var G__75075 = (0);
seq__75051_75060 = G__75072;
chunk__75052_75061 = G__75073;
count__75053_75062 = G__75074;
i__75054_75063 = G__75075;
continue;
} else {
var ref_75076__$1 = cljs.core.first.call(null,seq__75051_75070__$1);
cljs.core.add_watch.call(null,ref_75076__$1,key,watch);

var G__75077 = cljs.core.next.call(null,seq__75051_75070__$1);
var G__75078 = null;
var G__75079 = (0);
var G__75080 = (0);
seq__75051_75060 = G__75077;
chunk__75052_75061 = G__75078;
count__75053_75062 = G__75079;
i__75054_75063 = G__75080;
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


//# sourceMappingURL=derived_atom.js.map?rel=1512968105929