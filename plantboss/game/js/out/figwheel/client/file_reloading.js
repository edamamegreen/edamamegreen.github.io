// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__36925__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__36925__auto__){
return or__36925__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__36925__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__52308_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__52308_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__52309 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__52310 = null;
var count__52311 = (0);
var i__52312 = (0);
while(true){
if((i__52312 < count__52311)){
var n = cljs.core._nth.call(null,chunk__52310,i__52312);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__52313 = seq__52309;
var G__52314 = chunk__52310;
var G__52315 = count__52311;
var G__52316 = (i__52312 + (1));
seq__52309 = G__52313;
chunk__52310 = G__52314;
count__52311 = G__52315;
i__52312 = G__52316;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq.call(null,seq__52309);
if(temp__5459__auto__){
var seq__52309__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52309__$1)){
var c__37856__auto__ = cljs.core.chunk_first.call(null,seq__52309__$1);
var G__52317 = cljs.core.chunk_rest.call(null,seq__52309__$1);
var G__52318 = c__37856__auto__;
var G__52319 = cljs.core.count.call(null,c__37856__auto__);
var G__52320 = (0);
seq__52309 = G__52317;
chunk__52310 = G__52318;
count__52311 = G__52319;
i__52312 = G__52320;
continue;
} else {
var n = cljs.core.first.call(null,seq__52309__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__52321 = cljs.core.next.call(null,seq__52309__$1);
var G__52322 = null;
var G__52323 = (0);
var G__52324 = (0);
seq__52309 = G__52321;
chunk__52310 = G__52322;
count__52311 = G__52323;
i__52312 = G__52324;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__52334_52342 = cljs.core.seq.call(null,deps);
var chunk__52335_52343 = null;
var count__52336_52344 = (0);
var i__52337_52345 = (0);
while(true){
if((i__52337_52345 < count__52336_52344)){
var dep_52346 = cljs.core._nth.call(null,chunk__52335_52343,i__52337_52345);
topo_sort_helper_STAR_.call(null,dep_52346,(depth + (1)),state);

var G__52347 = seq__52334_52342;
var G__52348 = chunk__52335_52343;
var G__52349 = count__52336_52344;
var G__52350 = (i__52337_52345 + (1));
seq__52334_52342 = G__52347;
chunk__52335_52343 = G__52348;
count__52336_52344 = G__52349;
i__52337_52345 = G__52350;
continue;
} else {
var temp__5459__auto___52351 = cljs.core.seq.call(null,seq__52334_52342);
if(temp__5459__auto___52351){
var seq__52334_52352__$1 = temp__5459__auto___52351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52334_52352__$1)){
var c__37856__auto___52353 = cljs.core.chunk_first.call(null,seq__52334_52352__$1);
var G__52354 = cljs.core.chunk_rest.call(null,seq__52334_52352__$1);
var G__52355 = c__37856__auto___52353;
var G__52356 = cljs.core.count.call(null,c__37856__auto___52353);
var G__52357 = (0);
seq__52334_52342 = G__52354;
chunk__52335_52343 = G__52355;
count__52336_52344 = G__52356;
i__52337_52345 = G__52357;
continue;
} else {
var dep_52358 = cljs.core.first.call(null,seq__52334_52352__$1);
topo_sort_helper_STAR_.call(null,dep_52358,(depth + (1)),state);

var G__52359 = cljs.core.next.call(null,seq__52334_52352__$1);
var G__52360 = null;
var G__52361 = (0);
var G__52362 = (0);
seq__52334_52342 = G__52359;
chunk__52335_52343 = G__52360;
count__52336_52344 = G__52361;
i__52337_52345 = G__52362;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__52338){
var vec__52339 = p__52338;
var seq__52340 = cljs.core.seq.call(null,vec__52339);
var first__52341 = cljs.core.first.call(null,seq__52340);
var seq__52340__$1 = cljs.core.next.call(null,seq__52340);
var x = first__52341;
var xs = seq__52340__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__52339,seq__52340,first__52341,seq__52340__$1,x,xs,get_deps__$1){
return (function (p1__52325_SHARP_){
return clojure.set.difference.call(null,p1__52325_SHARP_,x);
});})(vec__52339,seq__52340,first__52341,seq__52340__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__52363 = cljs.core.seq.call(null,provides);
var chunk__52364 = null;
var count__52365 = (0);
var i__52366 = (0);
while(true){
if((i__52366 < count__52365)){
var prov = cljs.core._nth.call(null,chunk__52364,i__52366);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__52367_52375 = cljs.core.seq.call(null,requires);
var chunk__52368_52376 = null;
var count__52369_52377 = (0);
var i__52370_52378 = (0);
while(true){
if((i__52370_52378 < count__52369_52377)){
var req_52379 = cljs.core._nth.call(null,chunk__52368_52376,i__52370_52378);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_52379,prov);

var G__52380 = seq__52367_52375;
var G__52381 = chunk__52368_52376;
var G__52382 = count__52369_52377;
var G__52383 = (i__52370_52378 + (1));
seq__52367_52375 = G__52380;
chunk__52368_52376 = G__52381;
count__52369_52377 = G__52382;
i__52370_52378 = G__52383;
continue;
} else {
var temp__5459__auto___52384 = cljs.core.seq.call(null,seq__52367_52375);
if(temp__5459__auto___52384){
var seq__52367_52385__$1 = temp__5459__auto___52384;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52367_52385__$1)){
var c__37856__auto___52386 = cljs.core.chunk_first.call(null,seq__52367_52385__$1);
var G__52387 = cljs.core.chunk_rest.call(null,seq__52367_52385__$1);
var G__52388 = c__37856__auto___52386;
var G__52389 = cljs.core.count.call(null,c__37856__auto___52386);
var G__52390 = (0);
seq__52367_52375 = G__52387;
chunk__52368_52376 = G__52388;
count__52369_52377 = G__52389;
i__52370_52378 = G__52390;
continue;
} else {
var req_52391 = cljs.core.first.call(null,seq__52367_52385__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_52391,prov);

var G__52392 = cljs.core.next.call(null,seq__52367_52385__$1);
var G__52393 = null;
var G__52394 = (0);
var G__52395 = (0);
seq__52367_52375 = G__52392;
chunk__52368_52376 = G__52393;
count__52369_52377 = G__52394;
i__52370_52378 = G__52395;
continue;
}
} else {
}
}
break;
}

var G__52396 = seq__52363;
var G__52397 = chunk__52364;
var G__52398 = count__52365;
var G__52399 = (i__52366 + (1));
seq__52363 = G__52396;
chunk__52364 = G__52397;
count__52365 = G__52398;
i__52366 = G__52399;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq.call(null,seq__52363);
if(temp__5459__auto__){
var seq__52363__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52363__$1)){
var c__37856__auto__ = cljs.core.chunk_first.call(null,seq__52363__$1);
var G__52400 = cljs.core.chunk_rest.call(null,seq__52363__$1);
var G__52401 = c__37856__auto__;
var G__52402 = cljs.core.count.call(null,c__37856__auto__);
var G__52403 = (0);
seq__52363 = G__52400;
chunk__52364 = G__52401;
count__52365 = G__52402;
i__52366 = G__52403;
continue;
} else {
var prov = cljs.core.first.call(null,seq__52363__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__52371_52404 = cljs.core.seq.call(null,requires);
var chunk__52372_52405 = null;
var count__52373_52406 = (0);
var i__52374_52407 = (0);
while(true){
if((i__52374_52407 < count__52373_52406)){
var req_52408 = cljs.core._nth.call(null,chunk__52372_52405,i__52374_52407);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_52408,prov);

var G__52409 = seq__52371_52404;
var G__52410 = chunk__52372_52405;
var G__52411 = count__52373_52406;
var G__52412 = (i__52374_52407 + (1));
seq__52371_52404 = G__52409;
chunk__52372_52405 = G__52410;
count__52373_52406 = G__52411;
i__52374_52407 = G__52412;
continue;
} else {
var temp__5459__auto___52413__$1 = cljs.core.seq.call(null,seq__52371_52404);
if(temp__5459__auto___52413__$1){
var seq__52371_52414__$1 = temp__5459__auto___52413__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52371_52414__$1)){
var c__37856__auto___52415 = cljs.core.chunk_first.call(null,seq__52371_52414__$1);
var G__52416 = cljs.core.chunk_rest.call(null,seq__52371_52414__$1);
var G__52417 = c__37856__auto___52415;
var G__52418 = cljs.core.count.call(null,c__37856__auto___52415);
var G__52419 = (0);
seq__52371_52404 = G__52416;
chunk__52372_52405 = G__52417;
count__52373_52406 = G__52418;
i__52374_52407 = G__52419;
continue;
} else {
var req_52420 = cljs.core.first.call(null,seq__52371_52414__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_52420,prov);

var G__52421 = cljs.core.next.call(null,seq__52371_52414__$1);
var G__52422 = null;
var G__52423 = (0);
var G__52424 = (0);
seq__52371_52404 = G__52421;
chunk__52372_52405 = G__52422;
count__52373_52406 = G__52423;
i__52374_52407 = G__52424;
continue;
}
} else {
}
}
break;
}

var G__52425 = cljs.core.next.call(null,seq__52363__$1);
var G__52426 = null;
var G__52427 = (0);
var G__52428 = (0);
seq__52363 = G__52425;
chunk__52364 = G__52426;
count__52365 = G__52427;
i__52366 = G__52428;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__52429_52433 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__52430_52434 = null;
var count__52431_52435 = (0);
var i__52432_52436 = (0);
while(true){
if((i__52432_52436 < count__52431_52435)){
var ns_52437 = cljs.core._nth.call(null,chunk__52430_52434,i__52432_52436);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_52437);

var G__52438 = seq__52429_52433;
var G__52439 = chunk__52430_52434;
var G__52440 = count__52431_52435;
var G__52441 = (i__52432_52436 + (1));
seq__52429_52433 = G__52438;
chunk__52430_52434 = G__52439;
count__52431_52435 = G__52440;
i__52432_52436 = G__52441;
continue;
} else {
var temp__5459__auto___52442 = cljs.core.seq.call(null,seq__52429_52433);
if(temp__5459__auto___52442){
var seq__52429_52443__$1 = temp__5459__auto___52442;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52429_52443__$1)){
var c__37856__auto___52444 = cljs.core.chunk_first.call(null,seq__52429_52443__$1);
var G__52445 = cljs.core.chunk_rest.call(null,seq__52429_52443__$1);
var G__52446 = c__37856__auto___52444;
var G__52447 = cljs.core.count.call(null,c__37856__auto___52444);
var G__52448 = (0);
seq__52429_52433 = G__52445;
chunk__52430_52434 = G__52446;
count__52431_52435 = G__52447;
i__52432_52436 = G__52448;
continue;
} else {
var ns_52449 = cljs.core.first.call(null,seq__52429_52443__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_52449);

var G__52450 = cljs.core.next.call(null,seq__52429_52443__$1);
var G__52451 = null;
var G__52452 = (0);
var G__52453 = (0);
seq__52429_52433 = G__52450;
chunk__52430_52434 = G__52451;
count__52431_52435 = G__52452;
i__52432_52436 = G__52453;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__36925__auto__ = goog.require__;
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__52454__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__52454 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52455__i = 0, G__52455__a = new Array(arguments.length -  0);
while (G__52455__i < G__52455__a.length) {G__52455__a[G__52455__i] = arguments[G__52455__i + 0]; ++G__52455__i;}
  args = new cljs.core.IndexedSeq(G__52455__a,0,null);
} 
return G__52454__delegate.call(this,args);};
G__52454.cljs$lang$maxFixedArity = 0;
G__52454.cljs$lang$applyTo = (function (arglist__52456){
var args = cljs.core.seq(arglist__52456);
return G__52454__delegate(args);
});
G__52454.cljs$core$IFn$_invoke$arity$variadic = G__52454__delegate;
return G__52454;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__52457 = cljs.core._EQ_;
var expr__52458 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__52457.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__52458))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__52457,expr__52458){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__52457,expr__52458))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__52457,expr__52458){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e52460){if((e52460 instanceof Error)){
var e = e52460;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e52460;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__52457,expr__52458))
} else {
if(cljs.core.truth_(pred__52457.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__52458))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__52457.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__52458))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__52457.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__52458))){
return ((function (pred__52457,expr__52458){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e52461){if((e52461 instanceof Error)){
var e = e52461;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e52461;

}
}})());
});
;})(pred__52457,expr__52458))
} else {
return ((function (pred__52457,expr__52458){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__52457,expr__52458))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__52462,callback){
var map__52463 = p__52462;
var map__52463__$1 = ((((!((map__52463 == null)))?((((map__52463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52463):map__52463);
var file_msg = map__52463__$1;
var request_url = cljs.core.get.call(null,map__52463__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__52463,map__52463__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__52463,map__52463__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__50326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50326__auto__){
return (function (){
var f__50327__auto__ = (function (){var switch__50236__auto__ = ((function (c__50326__auto__){
return (function (state_52487){
var state_val_52488 = (state_52487[(1)]);
if((state_val_52488 === (7))){
var inst_52483 = (state_52487[(2)]);
var state_52487__$1 = state_52487;
var statearr_52489_52506 = state_52487__$1;
(statearr_52489_52506[(2)] = inst_52483);

(statearr_52489_52506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52488 === (1))){
var state_52487__$1 = state_52487;
var statearr_52490_52507 = state_52487__$1;
(statearr_52490_52507[(2)] = null);

(statearr_52490_52507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52488 === (4))){
var inst_52467 = (state_52487[(7)]);
var inst_52467__$1 = (state_52487[(2)]);
var state_52487__$1 = (function (){var statearr_52491 = state_52487;
(statearr_52491[(7)] = inst_52467__$1);

return statearr_52491;
})();
if(cljs.core.truth_(inst_52467__$1)){
var statearr_52492_52508 = state_52487__$1;
(statearr_52492_52508[(1)] = (5));

} else {
var statearr_52493_52509 = state_52487__$1;
(statearr_52493_52509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52488 === (6))){
var state_52487__$1 = state_52487;
var statearr_52494_52510 = state_52487__$1;
(statearr_52494_52510[(2)] = null);

(statearr_52494_52510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52488 === (3))){
var inst_52485 = (state_52487[(2)]);
var state_52487__$1 = state_52487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52487__$1,inst_52485);
} else {
if((state_val_52488 === (2))){
var state_52487__$1 = state_52487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52487__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_52488 === (11))){
var inst_52479 = (state_52487[(2)]);
var state_52487__$1 = (function (){var statearr_52495 = state_52487;
(statearr_52495[(8)] = inst_52479);

return statearr_52495;
})();
var statearr_52496_52511 = state_52487__$1;
(statearr_52496_52511[(2)] = null);

(statearr_52496_52511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52488 === (9))){
var inst_52473 = (state_52487[(9)]);
var inst_52471 = (state_52487[(10)]);
var inst_52475 = inst_52473.call(null,inst_52471);
var state_52487__$1 = state_52487;
var statearr_52497_52512 = state_52487__$1;
(statearr_52497_52512[(2)] = inst_52475);

(statearr_52497_52512[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52488 === (5))){
var inst_52467 = (state_52487[(7)]);
var inst_52469 = figwheel.client.file_reloading.blocking_load.call(null,inst_52467);
var state_52487__$1 = state_52487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52487__$1,(8),inst_52469);
} else {
if((state_val_52488 === (10))){
var inst_52471 = (state_52487[(10)]);
var inst_52477 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_52471);
var state_52487__$1 = state_52487;
var statearr_52498_52513 = state_52487__$1;
(statearr_52498_52513[(2)] = inst_52477);

(statearr_52498_52513[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52488 === (8))){
var inst_52473 = (state_52487[(9)]);
var inst_52467 = (state_52487[(7)]);
var inst_52471 = (state_52487[(2)]);
var inst_52472 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_52473__$1 = cljs.core.get.call(null,inst_52472,inst_52467);
var state_52487__$1 = (function (){var statearr_52499 = state_52487;
(statearr_52499[(9)] = inst_52473__$1);

(statearr_52499[(10)] = inst_52471);

return statearr_52499;
})();
if(cljs.core.truth_(inst_52473__$1)){
var statearr_52500_52514 = state_52487__$1;
(statearr_52500_52514[(1)] = (9));

} else {
var statearr_52501_52515 = state_52487__$1;
(statearr_52501_52515[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__50326__auto__))
;
return ((function (switch__50236__auto__,c__50326__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__50237__auto__ = null;
var figwheel$client$file_reloading$state_machine__50237__auto____0 = (function (){
var statearr_52502 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52502[(0)] = figwheel$client$file_reloading$state_machine__50237__auto__);

(statearr_52502[(1)] = (1));

return statearr_52502;
});
var figwheel$client$file_reloading$state_machine__50237__auto____1 = (function (state_52487){
while(true){
var ret_value__50238__auto__ = (function (){try{while(true){
var result__50239__auto__ = switch__50236__auto__.call(null,state_52487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50239__auto__;
}
break;
}
}catch (e52503){if((e52503 instanceof Object)){
var ex__50240__auto__ = e52503;
var statearr_52504_52516 = state_52487;
(statearr_52504_52516[(5)] = ex__50240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52517 = state_52487;
state_52487 = G__52517;
continue;
} else {
return ret_value__50238__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__50237__auto__ = function(state_52487){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__50237__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__50237__auto____1.call(this,state_52487);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__50237__auto____0;
figwheel$client$file_reloading$state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__50237__auto____1;
return figwheel$client$file_reloading$state_machine__50237__auto__;
})()
;})(switch__50236__auto__,c__50326__auto__))
})();
var state__50328__auto__ = (function (){var statearr_52505 = f__50327__auto__.call(null);
(statearr_52505[(6)] = c__50326__auto__);

return statearr_52505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50328__auto__);
});})(c__50326__auto__))
);

return c__50326__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__52518,callback){
var map__52519 = p__52518;
var map__52519__$1 = ((((!((map__52519 == null)))?((((map__52519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52519.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52519):map__52519);
var file_msg = map__52519__$1;
var namespace = cljs.core.get.call(null,map__52519__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__52519,map__52519__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__52519,map__52519__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__52521){
var map__52522 = p__52521;
var map__52522__$1 = ((((!((map__52522 == null)))?((((map__52522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52522):map__52522);
var file_msg = map__52522__$1;
var namespace = cljs.core.get.call(null,map__52522__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__52524){
var map__52525 = p__52524;
var map__52525__$1 = ((((!((map__52525 == null)))?((((map__52525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52525.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52525):map__52525);
var file_msg = map__52525__$1;
var namespace = cljs.core.get.call(null,map__52525__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__36913__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__36913__auto__){
var or__36925__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
var or__36925__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__36925__auto____$1)){
return or__36925__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__36913__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__52527,callback){
var map__52528 = p__52527;
var map__52528__$1 = ((((!((map__52528 == null)))?((((map__52528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52528.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52528):map__52528);
var file_msg = map__52528__$1;
var request_url = cljs.core.get.call(null,map__52528__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__52528__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__50326__auto___52578 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50326__auto___52578,out){
return (function (){
var f__50327__auto__ = (function (){var switch__50236__auto__ = ((function (c__50326__auto___52578,out){
return (function (state_52563){
var state_val_52564 = (state_52563[(1)]);
if((state_val_52564 === (1))){
var inst_52537 = cljs.core.seq.call(null,files);
var inst_52538 = cljs.core.first.call(null,inst_52537);
var inst_52539 = cljs.core.next.call(null,inst_52537);
var inst_52540 = files;
var state_52563__$1 = (function (){var statearr_52565 = state_52563;
(statearr_52565[(7)] = inst_52540);

(statearr_52565[(8)] = inst_52539);

(statearr_52565[(9)] = inst_52538);

return statearr_52565;
})();
var statearr_52566_52579 = state_52563__$1;
(statearr_52566_52579[(2)] = null);

(statearr_52566_52579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52564 === (2))){
var inst_52540 = (state_52563[(7)]);
var inst_52546 = (state_52563[(10)]);
var inst_52545 = cljs.core.seq.call(null,inst_52540);
var inst_52546__$1 = cljs.core.first.call(null,inst_52545);
var inst_52547 = cljs.core.next.call(null,inst_52545);
var inst_52548 = (inst_52546__$1 == null);
var inst_52549 = cljs.core.not.call(null,inst_52548);
var state_52563__$1 = (function (){var statearr_52567 = state_52563;
(statearr_52567[(11)] = inst_52547);

(statearr_52567[(10)] = inst_52546__$1);

return statearr_52567;
})();
if(inst_52549){
var statearr_52568_52580 = state_52563__$1;
(statearr_52568_52580[(1)] = (4));

} else {
var statearr_52569_52581 = state_52563__$1;
(statearr_52569_52581[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52564 === (3))){
var inst_52561 = (state_52563[(2)]);
var state_52563__$1 = state_52563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52563__$1,inst_52561);
} else {
if((state_val_52564 === (4))){
var inst_52546 = (state_52563[(10)]);
var inst_52551 = figwheel.client.file_reloading.reload_js_file.call(null,inst_52546);
var state_52563__$1 = state_52563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52563__$1,(7),inst_52551);
} else {
if((state_val_52564 === (5))){
var inst_52557 = cljs.core.async.close_BANG_.call(null,out);
var state_52563__$1 = state_52563;
var statearr_52570_52582 = state_52563__$1;
(statearr_52570_52582[(2)] = inst_52557);

(statearr_52570_52582[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52564 === (6))){
var inst_52559 = (state_52563[(2)]);
var state_52563__$1 = state_52563;
var statearr_52571_52583 = state_52563__$1;
(statearr_52571_52583[(2)] = inst_52559);

(statearr_52571_52583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52564 === (7))){
var inst_52547 = (state_52563[(11)]);
var inst_52553 = (state_52563[(2)]);
var inst_52554 = cljs.core.async.put_BANG_.call(null,out,inst_52553);
var inst_52540 = inst_52547;
var state_52563__$1 = (function (){var statearr_52572 = state_52563;
(statearr_52572[(12)] = inst_52554);

(statearr_52572[(7)] = inst_52540);

return statearr_52572;
})();
var statearr_52573_52584 = state_52563__$1;
(statearr_52573_52584[(2)] = null);

(statearr_52573_52584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__50326__auto___52578,out))
;
return ((function (switch__50236__auto__,c__50326__auto___52578,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50237__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50237__auto____0 = (function (){
var statearr_52574 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52574[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50237__auto__);

(statearr_52574[(1)] = (1));

return statearr_52574;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50237__auto____1 = (function (state_52563){
while(true){
var ret_value__50238__auto__ = (function (){try{while(true){
var result__50239__auto__ = switch__50236__auto__.call(null,state_52563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50239__auto__;
}
break;
}
}catch (e52575){if((e52575 instanceof Object)){
var ex__50240__auto__ = e52575;
var statearr_52576_52585 = state_52563;
(statearr_52576_52585[(5)] = ex__50240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52586 = state_52563;
state_52563 = G__52586;
continue;
} else {
return ret_value__50238__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50237__auto__ = function(state_52563){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50237__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50237__auto____1.call(this,state_52563);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50237__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50237__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50237__auto__;
})()
;})(switch__50236__auto__,c__50326__auto___52578,out))
})();
var state__50328__auto__ = (function (){var statearr_52577 = f__50327__auto__.call(null);
(statearr_52577[(6)] = c__50326__auto___52578);

return statearr_52577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50328__auto__);
});})(c__50326__auto___52578,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__52587,opts){
var map__52588 = p__52587;
var map__52588__$1 = ((((!((map__52588 == null)))?((((map__52588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52588.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52588):map__52588);
var eval_body = cljs.core.get.call(null,map__52588__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__52588__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__36913__auto__ = eval_body;
if(cljs.core.truth_(and__36913__auto__)){
return typeof eval_body === 'string';
} else {
return and__36913__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e52590){var e = e52590;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__52591_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__52591_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5457__auto__)){
var file_msg = temp__5457__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__52592){
var vec__52593 = p__52592;
var k = cljs.core.nth.call(null,vec__52593,(0),null);
var v = cljs.core.nth.call(null,vec__52593,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__52596){
var vec__52597 = p__52596;
var k = cljs.core.nth.call(null,vec__52597,(0),null);
var v = cljs.core.nth.call(null,vec__52597,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__52603,p__52604){
var map__52605 = p__52603;
var map__52605__$1 = ((((!((map__52605 == null)))?((((map__52605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52605.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52605):map__52605);
var opts = map__52605__$1;
var before_jsload = cljs.core.get.call(null,map__52605__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__52605__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__52605__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__52606 = p__52604;
var map__52606__$1 = ((((!((map__52606 == null)))?((((map__52606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52606.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52606):map__52606);
var msg = map__52606__$1;
var files = cljs.core.get.call(null,map__52606__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__52606__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__52606__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__50326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50326__auto__,map__52605,map__52605__$1,opts,before_jsload,on_jsload,reload_dependents,map__52606,map__52606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__50327__auto__ = (function (){var switch__50236__auto__ = ((function (c__50326__auto__,map__52605,map__52605__$1,opts,before_jsload,on_jsload,reload_dependents,map__52606,map__52606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_52760){
var state_val_52761 = (state_52760[(1)]);
if((state_val_52761 === (7))){
var inst_52622 = (state_52760[(7)]);
var inst_52623 = (state_52760[(8)]);
var inst_52621 = (state_52760[(9)]);
var inst_52620 = (state_52760[(10)]);
var inst_52628 = cljs.core._nth.call(null,inst_52621,inst_52623);
var inst_52629 = figwheel.client.file_reloading.eval_body.call(null,inst_52628,opts);
var inst_52630 = (inst_52623 + (1));
var tmp52762 = inst_52622;
var tmp52763 = inst_52621;
var tmp52764 = inst_52620;
var inst_52620__$1 = tmp52764;
var inst_52621__$1 = tmp52763;
var inst_52622__$1 = tmp52762;
var inst_52623__$1 = inst_52630;
var state_52760__$1 = (function (){var statearr_52765 = state_52760;
(statearr_52765[(11)] = inst_52629);

(statearr_52765[(7)] = inst_52622__$1);

(statearr_52765[(8)] = inst_52623__$1);

(statearr_52765[(9)] = inst_52621__$1);

(statearr_52765[(10)] = inst_52620__$1);

return statearr_52765;
})();
var statearr_52766_52849 = state_52760__$1;
(statearr_52766_52849[(2)] = null);

(statearr_52766_52849[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (20))){
var inst_52663 = (state_52760[(12)]);
var inst_52671 = figwheel.client.file_reloading.sort_files.call(null,inst_52663);
var state_52760__$1 = state_52760;
var statearr_52767_52850 = state_52760__$1;
(statearr_52767_52850[(2)] = inst_52671);

(statearr_52767_52850[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (27))){
var state_52760__$1 = state_52760;
var statearr_52768_52851 = state_52760__$1;
(statearr_52768_52851[(2)] = null);

(statearr_52768_52851[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (1))){
var inst_52612 = (state_52760[(13)]);
var inst_52609 = before_jsload.call(null,files);
var inst_52610 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_52611 = (function (){return ((function (inst_52612,inst_52609,inst_52610,state_val_52761,c__50326__auto__,map__52605,map__52605__$1,opts,before_jsload,on_jsload,reload_dependents,map__52606,map__52606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__52600_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__52600_SHARP_);
});
;})(inst_52612,inst_52609,inst_52610,state_val_52761,c__50326__auto__,map__52605,map__52605__$1,opts,before_jsload,on_jsload,reload_dependents,map__52606,map__52606__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52612__$1 = cljs.core.filter.call(null,inst_52611,files);
var inst_52613 = cljs.core.not_empty.call(null,inst_52612__$1);
var state_52760__$1 = (function (){var statearr_52769 = state_52760;
(statearr_52769[(13)] = inst_52612__$1);

(statearr_52769[(14)] = inst_52610);

(statearr_52769[(15)] = inst_52609);

return statearr_52769;
})();
if(cljs.core.truth_(inst_52613)){
var statearr_52770_52852 = state_52760__$1;
(statearr_52770_52852[(1)] = (2));

} else {
var statearr_52771_52853 = state_52760__$1;
(statearr_52771_52853[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (24))){
var state_52760__$1 = state_52760;
var statearr_52772_52854 = state_52760__$1;
(statearr_52772_52854[(2)] = null);

(statearr_52772_52854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (39))){
var inst_52713 = (state_52760[(16)]);
var state_52760__$1 = state_52760;
var statearr_52773_52855 = state_52760__$1;
(statearr_52773_52855[(2)] = inst_52713);

(statearr_52773_52855[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (46))){
var inst_52755 = (state_52760[(2)]);
var state_52760__$1 = state_52760;
var statearr_52774_52856 = state_52760__$1;
(statearr_52774_52856[(2)] = inst_52755);

(statearr_52774_52856[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (4))){
var inst_52657 = (state_52760[(2)]);
var inst_52658 = cljs.core.List.EMPTY;
var inst_52659 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_52658);
var inst_52660 = (function (){return ((function (inst_52657,inst_52658,inst_52659,state_val_52761,c__50326__auto__,map__52605,map__52605__$1,opts,before_jsload,on_jsload,reload_dependents,map__52606,map__52606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__52601_SHARP_){
var and__36913__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__52601_SHARP_);
if(cljs.core.truth_(and__36913__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__52601_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__52601_SHARP_)));
} else {
return and__36913__auto__;
}
});
;})(inst_52657,inst_52658,inst_52659,state_val_52761,c__50326__auto__,map__52605,map__52605__$1,opts,before_jsload,on_jsload,reload_dependents,map__52606,map__52606__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52661 = cljs.core.filter.call(null,inst_52660,files);
var inst_52662 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_52663 = cljs.core.concat.call(null,inst_52661,inst_52662);
var state_52760__$1 = (function (){var statearr_52775 = state_52760;
(statearr_52775[(17)] = inst_52659);

(statearr_52775[(18)] = inst_52657);

(statearr_52775[(12)] = inst_52663);

return statearr_52775;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_52776_52857 = state_52760__$1;
(statearr_52776_52857[(1)] = (16));

} else {
var statearr_52777_52858 = state_52760__$1;
(statearr_52777_52858[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (15))){
var inst_52647 = (state_52760[(2)]);
var state_52760__$1 = state_52760;
var statearr_52778_52859 = state_52760__$1;
(statearr_52778_52859[(2)] = inst_52647);

(statearr_52778_52859[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (21))){
var inst_52673 = (state_52760[(19)]);
var inst_52673__$1 = (state_52760[(2)]);
var inst_52674 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_52673__$1);
var state_52760__$1 = (function (){var statearr_52779 = state_52760;
(statearr_52779[(19)] = inst_52673__$1);

return statearr_52779;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52760__$1,(22),inst_52674);
} else {
if((state_val_52761 === (31))){
var inst_52758 = (state_52760[(2)]);
var state_52760__$1 = state_52760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52760__$1,inst_52758);
} else {
if((state_val_52761 === (32))){
var inst_52713 = (state_52760[(16)]);
var inst_52718 = inst_52713.cljs$lang$protocol_mask$partition0$;
var inst_52719 = (inst_52718 & (64));
var inst_52720 = inst_52713.cljs$core$ISeq$;
var inst_52721 = (cljs.core.PROTOCOL_SENTINEL === inst_52720);
var inst_52722 = (inst_52719) || (inst_52721);
var state_52760__$1 = state_52760;
if(cljs.core.truth_(inst_52722)){
var statearr_52780_52860 = state_52760__$1;
(statearr_52780_52860[(1)] = (35));

} else {
var statearr_52781_52861 = state_52760__$1;
(statearr_52781_52861[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (40))){
var inst_52735 = (state_52760[(20)]);
var inst_52734 = (state_52760[(2)]);
var inst_52735__$1 = cljs.core.get.call(null,inst_52734,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_52736 = cljs.core.get.call(null,inst_52734,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_52737 = cljs.core.not_empty.call(null,inst_52735__$1);
var state_52760__$1 = (function (){var statearr_52782 = state_52760;
(statearr_52782[(21)] = inst_52736);

(statearr_52782[(20)] = inst_52735__$1);

return statearr_52782;
})();
if(cljs.core.truth_(inst_52737)){
var statearr_52783_52862 = state_52760__$1;
(statearr_52783_52862[(1)] = (41));

} else {
var statearr_52784_52863 = state_52760__$1;
(statearr_52784_52863[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (33))){
var state_52760__$1 = state_52760;
var statearr_52785_52864 = state_52760__$1;
(statearr_52785_52864[(2)] = false);

(statearr_52785_52864[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (13))){
var inst_52633 = (state_52760[(22)]);
var inst_52637 = cljs.core.chunk_first.call(null,inst_52633);
var inst_52638 = cljs.core.chunk_rest.call(null,inst_52633);
var inst_52639 = cljs.core.count.call(null,inst_52637);
var inst_52620 = inst_52638;
var inst_52621 = inst_52637;
var inst_52622 = inst_52639;
var inst_52623 = (0);
var state_52760__$1 = (function (){var statearr_52786 = state_52760;
(statearr_52786[(7)] = inst_52622);

(statearr_52786[(8)] = inst_52623);

(statearr_52786[(9)] = inst_52621);

(statearr_52786[(10)] = inst_52620);

return statearr_52786;
})();
var statearr_52787_52865 = state_52760__$1;
(statearr_52787_52865[(2)] = null);

(statearr_52787_52865[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (22))){
var inst_52676 = (state_52760[(23)]);
var inst_52673 = (state_52760[(19)]);
var inst_52681 = (state_52760[(24)]);
var inst_52677 = (state_52760[(25)]);
var inst_52676__$1 = (state_52760[(2)]);
var inst_52677__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52676__$1);
var inst_52678 = (function (){var all_files = inst_52673;
var res_SINGLEQUOTE_ = inst_52676__$1;
var res = inst_52677__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_52676,inst_52673,inst_52681,inst_52677,inst_52676__$1,inst_52677__$1,state_val_52761,c__50326__auto__,map__52605,map__52605__$1,opts,before_jsload,on_jsload,reload_dependents,map__52606,map__52606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__52602_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__52602_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_52676,inst_52673,inst_52681,inst_52677,inst_52676__$1,inst_52677__$1,state_val_52761,c__50326__auto__,map__52605,map__52605__$1,opts,before_jsload,on_jsload,reload_dependents,map__52606,map__52606__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52679 = cljs.core.filter.call(null,inst_52678,inst_52676__$1);
var inst_52680 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_52681__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52680);
var inst_52682 = cljs.core.not_empty.call(null,inst_52681__$1);
var state_52760__$1 = (function (){var statearr_52788 = state_52760;
(statearr_52788[(23)] = inst_52676__$1);

(statearr_52788[(24)] = inst_52681__$1);

(statearr_52788[(25)] = inst_52677__$1);

(statearr_52788[(26)] = inst_52679);

return statearr_52788;
})();
if(cljs.core.truth_(inst_52682)){
var statearr_52789_52866 = state_52760__$1;
(statearr_52789_52866[(1)] = (23));

} else {
var statearr_52790_52867 = state_52760__$1;
(statearr_52790_52867[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (36))){
var state_52760__$1 = state_52760;
var statearr_52791_52868 = state_52760__$1;
(statearr_52791_52868[(2)] = false);

(statearr_52791_52868[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (41))){
var inst_52735 = (state_52760[(20)]);
var inst_52739 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_52740 = cljs.core.map.call(null,inst_52739,inst_52735);
var inst_52741 = cljs.core.pr_str.call(null,inst_52740);
var inst_52742 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_52741)].join('');
var inst_52743 = figwheel.client.utils.log.call(null,inst_52742);
var state_52760__$1 = state_52760;
var statearr_52792_52869 = state_52760__$1;
(statearr_52792_52869[(2)] = inst_52743);

(statearr_52792_52869[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (43))){
var inst_52736 = (state_52760[(21)]);
var inst_52746 = (state_52760[(2)]);
var inst_52747 = cljs.core.not_empty.call(null,inst_52736);
var state_52760__$1 = (function (){var statearr_52793 = state_52760;
(statearr_52793[(27)] = inst_52746);

return statearr_52793;
})();
if(cljs.core.truth_(inst_52747)){
var statearr_52794_52870 = state_52760__$1;
(statearr_52794_52870[(1)] = (44));

} else {
var statearr_52795_52871 = state_52760__$1;
(statearr_52795_52871[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (29))){
var inst_52676 = (state_52760[(23)]);
var inst_52673 = (state_52760[(19)]);
var inst_52681 = (state_52760[(24)]);
var inst_52713 = (state_52760[(16)]);
var inst_52677 = (state_52760[(25)]);
var inst_52679 = (state_52760[(26)]);
var inst_52709 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_52712 = (function (){var all_files = inst_52673;
var res_SINGLEQUOTE_ = inst_52676;
var res = inst_52677;
var files_not_loaded = inst_52679;
var dependencies_that_loaded = inst_52681;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52676,inst_52673,inst_52681,inst_52713,inst_52677,inst_52679,inst_52709,state_val_52761,c__50326__auto__,map__52605,map__52605__$1,opts,before_jsload,on_jsload,reload_dependents,map__52606,map__52606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52711){
var map__52796 = p__52711;
var map__52796__$1 = ((((!((map__52796 == null)))?((((map__52796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52796.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52796):map__52796);
var namespace = cljs.core.get.call(null,map__52796__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52676,inst_52673,inst_52681,inst_52713,inst_52677,inst_52679,inst_52709,state_val_52761,c__50326__auto__,map__52605,map__52605__$1,opts,before_jsload,on_jsload,reload_dependents,map__52606,map__52606__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52713__$1 = cljs.core.group_by.call(null,inst_52712,inst_52679);
var inst_52715 = (inst_52713__$1 == null);
var inst_52716 = cljs.core.not.call(null,inst_52715);
var state_52760__$1 = (function (){var statearr_52798 = state_52760;
(statearr_52798[(28)] = inst_52709);

(statearr_52798[(16)] = inst_52713__$1);

return statearr_52798;
})();
if(inst_52716){
var statearr_52799_52872 = state_52760__$1;
(statearr_52799_52872[(1)] = (32));

} else {
var statearr_52800_52873 = state_52760__$1;
(statearr_52800_52873[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (44))){
var inst_52736 = (state_52760[(21)]);
var inst_52749 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_52736);
var inst_52750 = cljs.core.pr_str.call(null,inst_52749);
var inst_52751 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_52750)].join('');
var inst_52752 = figwheel.client.utils.log.call(null,inst_52751);
var state_52760__$1 = state_52760;
var statearr_52801_52874 = state_52760__$1;
(statearr_52801_52874[(2)] = inst_52752);

(statearr_52801_52874[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (6))){
var inst_52654 = (state_52760[(2)]);
var state_52760__$1 = state_52760;
var statearr_52802_52875 = state_52760__$1;
(statearr_52802_52875[(2)] = inst_52654);

(statearr_52802_52875[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (28))){
var inst_52679 = (state_52760[(26)]);
var inst_52706 = (state_52760[(2)]);
var inst_52707 = cljs.core.not_empty.call(null,inst_52679);
var state_52760__$1 = (function (){var statearr_52803 = state_52760;
(statearr_52803[(29)] = inst_52706);

return statearr_52803;
})();
if(cljs.core.truth_(inst_52707)){
var statearr_52804_52876 = state_52760__$1;
(statearr_52804_52876[(1)] = (29));

} else {
var statearr_52805_52877 = state_52760__$1;
(statearr_52805_52877[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (25))){
var inst_52677 = (state_52760[(25)]);
var inst_52693 = (state_52760[(2)]);
var inst_52694 = cljs.core.not_empty.call(null,inst_52677);
var state_52760__$1 = (function (){var statearr_52806 = state_52760;
(statearr_52806[(30)] = inst_52693);

return statearr_52806;
})();
if(cljs.core.truth_(inst_52694)){
var statearr_52807_52878 = state_52760__$1;
(statearr_52807_52878[(1)] = (26));

} else {
var statearr_52808_52879 = state_52760__$1;
(statearr_52808_52879[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (34))){
var inst_52729 = (state_52760[(2)]);
var state_52760__$1 = state_52760;
if(cljs.core.truth_(inst_52729)){
var statearr_52809_52880 = state_52760__$1;
(statearr_52809_52880[(1)] = (38));

} else {
var statearr_52810_52881 = state_52760__$1;
(statearr_52810_52881[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (17))){
var state_52760__$1 = state_52760;
var statearr_52811_52882 = state_52760__$1;
(statearr_52811_52882[(2)] = recompile_dependents);

(statearr_52811_52882[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (3))){
var state_52760__$1 = state_52760;
var statearr_52812_52883 = state_52760__$1;
(statearr_52812_52883[(2)] = null);

(statearr_52812_52883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (12))){
var inst_52650 = (state_52760[(2)]);
var state_52760__$1 = state_52760;
var statearr_52813_52884 = state_52760__$1;
(statearr_52813_52884[(2)] = inst_52650);

(statearr_52813_52884[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (2))){
var inst_52612 = (state_52760[(13)]);
var inst_52619 = cljs.core.seq.call(null,inst_52612);
var inst_52620 = inst_52619;
var inst_52621 = null;
var inst_52622 = (0);
var inst_52623 = (0);
var state_52760__$1 = (function (){var statearr_52814 = state_52760;
(statearr_52814[(7)] = inst_52622);

(statearr_52814[(8)] = inst_52623);

(statearr_52814[(9)] = inst_52621);

(statearr_52814[(10)] = inst_52620);

return statearr_52814;
})();
var statearr_52815_52885 = state_52760__$1;
(statearr_52815_52885[(2)] = null);

(statearr_52815_52885[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (23))){
var inst_52676 = (state_52760[(23)]);
var inst_52673 = (state_52760[(19)]);
var inst_52681 = (state_52760[(24)]);
var inst_52677 = (state_52760[(25)]);
var inst_52679 = (state_52760[(26)]);
var inst_52684 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_52686 = (function (){var all_files = inst_52673;
var res_SINGLEQUOTE_ = inst_52676;
var res = inst_52677;
var files_not_loaded = inst_52679;
var dependencies_that_loaded = inst_52681;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52676,inst_52673,inst_52681,inst_52677,inst_52679,inst_52684,state_val_52761,c__50326__auto__,map__52605,map__52605__$1,opts,before_jsload,on_jsload,reload_dependents,map__52606,map__52606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52685){
var map__52816 = p__52685;
var map__52816__$1 = ((((!((map__52816 == null)))?((((map__52816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52816.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52816):map__52816);
var request_url = cljs.core.get.call(null,map__52816__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52676,inst_52673,inst_52681,inst_52677,inst_52679,inst_52684,state_val_52761,c__50326__auto__,map__52605,map__52605__$1,opts,before_jsload,on_jsload,reload_dependents,map__52606,map__52606__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52687 = cljs.core.reverse.call(null,inst_52681);
var inst_52688 = cljs.core.map.call(null,inst_52686,inst_52687);
var inst_52689 = cljs.core.pr_str.call(null,inst_52688);
var inst_52690 = figwheel.client.utils.log.call(null,inst_52689);
var state_52760__$1 = (function (){var statearr_52818 = state_52760;
(statearr_52818[(31)] = inst_52684);

return statearr_52818;
})();
var statearr_52819_52886 = state_52760__$1;
(statearr_52819_52886[(2)] = inst_52690);

(statearr_52819_52886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (35))){
var state_52760__$1 = state_52760;
var statearr_52820_52887 = state_52760__$1;
(statearr_52820_52887[(2)] = true);

(statearr_52820_52887[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (19))){
var inst_52663 = (state_52760[(12)]);
var inst_52669 = figwheel.client.file_reloading.expand_files.call(null,inst_52663);
var state_52760__$1 = state_52760;
var statearr_52821_52888 = state_52760__$1;
(statearr_52821_52888[(2)] = inst_52669);

(statearr_52821_52888[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (11))){
var state_52760__$1 = state_52760;
var statearr_52822_52889 = state_52760__$1;
(statearr_52822_52889[(2)] = null);

(statearr_52822_52889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (9))){
var inst_52652 = (state_52760[(2)]);
var state_52760__$1 = state_52760;
var statearr_52823_52890 = state_52760__$1;
(statearr_52823_52890[(2)] = inst_52652);

(statearr_52823_52890[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (5))){
var inst_52622 = (state_52760[(7)]);
var inst_52623 = (state_52760[(8)]);
var inst_52625 = (inst_52623 < inst_52622);
var inst_52626 = inst_52625;
var state_52760__$1 = state_52760;
if(cljs.core.truth_(inst_52626)){
var statearr_52824_52891 = state_52760__$1;
(statearr_52824_52891[(1)] = (7));

} else {
var statearr_52825_52892 = state_52760__$1;
(statearr_52825_52892[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (14))){
var inst_52633 = (state_52760[(22)]);
var inst_52642 = cljs.core.first.call(null,inst_52633);
var inst_52643 = figwheel.client.file_reloading.eval_body.call(null,inst_52642,opts);
var inst_52644 = cljs.core.next.call(null,inst_52633);
var inst_52620 = inst_52644;
var inst_52621 = null;
var inst_52622 = (0);
var inst_52623 = (0);
var state_52760__$1 = (function (){var statearr_52826 = state_52760;
(statearr_52826[(32)] = inst_52643);

(statearr_52826[(7)] = inst_52622);

(statearr_52826[(8)] = inst_52623);

(statearr_52826[(9)] = inst_52621);

(statearr_52826[(10)] = inst_52620);

return statearr_52826;
})();
var statearr_52827_52893 = state_52760__$1;
(statearr_52827_52893[(2)] = null);

(statearr_52827_52893[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (45))){
var state_52760__$1 = state_52760;
var statearr_52828_52894 = state_52760__$1;
(statearr_52828_52894[(2)] = null);

(statearr_52828_52894[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (26))){
var inst_52676 = (state_52760[(23)]);
var inst_52673 = (state_52760[(19)]);
var inst_52681 = (state_52760[(24)]);
var inst_52677 = (state_52760[(25)]);
var inst_52679 = (state_52760[(26)]);
var inst_52696 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_52698 = (function (){var all_files = inst_52673;
var res_SINGLEQUOTE_ = inst_52676;
var res = inst_52677;
var files_not_loaded = inst_52679;
var dependencies_that_loaded = inst_52681;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52676,inst_52673,inst_52681,inst_52677,inst_52679,inst_52696,state_val_52761,c__50326__auto__,map__52605,map__52605__$1,opts,before_jsload,on_jsload,reload_dependents,map__52606,map__52606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52697){
var map__52829 = p__52697;
var map__52829__$1 = ((((!((map__52829 == null)))?((((map__52829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52829):map__52829);
var namespace = cljs.core.get.call(null,map__52829__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__52829__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52676,inst_52673,inst_52681,inst_52677,inst_52679,inst_52696,state_val_52761,c__50326__auto__,map__52605,map__52605__$1,opts,before_jsload,on_jsload,reload_dependents,map__52606,map__52606__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52699 = cljs.core.map.call(null,inst_52698,inst_52677);
var inst_52700 = cljs.core.pr_str.call(null,inst_52699);
var inst_52701 = figwheel.client.utils.log.call(null,inst_52700);
var inst_52702 = (function (){var all_files = inst_52673;
var res_SINGLEQUOTE_ = inst_52676;
var res = inst_52677;
var files_not_loaded = inst_52679;
var dependencies_that_loaded = inst_52681;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52676,inst_52673,inst_52681,inst_52677,inst_52679,inst_52696,inst_52698,inst_52699,inst_52700,inst_52701,state_val_52761,c__50326__auto__,map__52605,map__52605__$1,opts,before_jsload,on_jsload,reload_dependents,map__52606,map__52606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52676,inst_52673,inst_52681,inst_52677,inst_52679,inst_52696,inst_52698,inst_52699,inst_52700,inst_52701,state_val_52761,c__50326__auto__,map__52605,map__52605__$1,opts,before_jsload,on_jsload,reload_dependents,map__52606,map__52606__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52703 = setTimeout(inst_52702,(10));
var state_52760__$1 = (function (){var statearr_52831 = state_52760;
(statearr_52831[(33)] = inst_52696);

(statearr_52831[(34)] = inst_52701);

return statearr_52831;
})();
var statearr_52832_52895 = state_52760__$1;
(statearr_52832_52895[(2)] = inst_52703);

(statearr_52832_52895[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (16))){
var state_52760__$1 = state_52760;
var statearr_52833_52896 = state_52760__$1;
(statearr_52833_52896[(2)] = reload_dependents);

(statearr_52833_52896[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (38))){
var inst_52713 = (state_52760[(16)]);
var inst_52731 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52713);
var state_52760__$1 = state_52760;
var statearr_52834_52897 = state_52760__$1;
(statearr_52834_52897[(2)] = inst_52731);

(statearr_52834_52897[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (30))){
var state_52760__$1 = state_52760;
var statearr_52835_52898 = state_52760__$1;
(statearr_52835_52898[(2)] = null);

(statearr_52835_52898[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (10))){
var inst_52633 = (state_52760[(22)]);
var inst_52635 = cljs.core.chunked_seq_QMARK_.call(null,inst_52633);
var state_52760__$1 = state_52760;
if(inst_52635){
var statearr_52836_52899 = state_52760__$1;
(statearr_52836_52899[(1)] = (13));

} else {
var statearr_52837_52900 = state_52760__$1;
(statearr_52837_52900[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (18))){
var inst_52667 = (state_52760[(2)]);
var state_52760__$1 = state_52760;
if(cljs.core.truth_(inst_52667)){
var statearr_52838_52901 = state_52760__$1;
(statearr_52838_52901[(1)] = (19));

} else {
var statearr_52839_52902 = state_52760__$1;
(statearr_52839_52902[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (42))){
var state_52760__$1 = state_52760;
var statearr_52840_52903 = state_52760__$1;
(statearr_52840_52903[(2)] = null);

(statearr_52840_52903[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (37))){
var inst_52726 = (state_52760[(2)]);
var state_52760__$1 = state_52760;
var statearr_52841_52904 = state_52760__$1;
(statearr_52841_52904[(2)] = inst_52726);

(statearr_52841_52904[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (8))){
var inst_52633 = (state_52760[(22)]);
var inst_52620 = (state_52760[(10)]);
var inst_52633__$1 = cljs.core.seq.call(null,inst_52620);
var state_52760__$1 = (function (){var statearr_52842 = state_52760;
(statearr_52842[(22)] = inst_52633__$1);

return statearr_52842;
})();
if(inst_52633__$1){
var statearr_52843_52905 = state_52760__$1;
(statearr_52843_52905[(1)] = (10));

} else {
var statearr_52844_52906 = state_52760__$1;
(statearr_52844_52906[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__50326__auto__,map__52605,map__52605__$1,opts,before_jsload,on_jsload,reload_dependents,map__52606,map__52606__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__50236__auto__,c__50326__auto__,map__52605,map__52605__$1,opts,before_jsload,on_jsload,reload_dependents,map__52606,map__52606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50237__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50237__auto____0 = (function (){
var statearr_52845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52845[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__50237__auto__);

(statearr_52845[(1)] = (1));

return statearr_52845;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50237__auto____1 = (function (state_52760){
while(true){
var ret_value__50238__auto__ = (function (){try{while(true){
var result__50239__auto__ = switch__50236__auto__.call(null,state_52760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50239__auto__;
}
break;
}
}catch (e52846){if((e52846 instanceof Object)){
var ex__50240__auto__ = e52846;
var statearr_52847_52907 = state_52760;
(statearr_52847_52907[(5)] = ex__50240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52908 = state_52760;
state_52760 = G__52908;
continue;
} else {
return ret_value__50238__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__50237__auto__ = function(state_52760){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50237__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50237__auto____1.call(this,state_52760);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__50237__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__50237__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50237__auto__;
})()
;})(switch__50236__auto__,c__50326__auto__,map__52605,map__52605__$1,opts,before_jsload,on_jsload,reload_dependents,map__52606,map__52606__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__50328__auto__ = (function (){var statearr_52848 = f__50327__auto__.call(null);
(statearr_52848[(6)] = c__50326__auto__);

return statearr_52848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50328__auto__);
});})(c__50326__auto__,map__52605,map__52605__$1,opts,before_jsload,on_jsload,reload_dependents,map__52606,map__52606__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__50326__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__52911,link){
var map__52912 = p__52911;
var map__52912__$1 = ((((!((map__52912 == null)))?((((map__52912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52912.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52912):map__52912);
var file = cljs.core.get.call(null,map__52912__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5459__auto__ = link.href;
if(cljs.core.truth_(temp__5459__auto__)){
var link_href = temp__5459__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5459__auto__,map__52912,map__52912__$1,file){
return (function (p1__52909_SHARP_,p2__52910_SHARP_){
if(cljs.core._EQ_.call(null,p1__52909_SHARP_,p2__52910_SHARP_)){
return p1__52909_SHARP_;
} else {
return false;
}
});})(link_href,temp__5459__auto__,map__52912,map__52912__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5459__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__52915){
var map__52916 = p__52915;
var map__52916__$1 = ((((!((map__52916 == null)))?((((map__52916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52916.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52916):map__52916);
var match_length = cljs.core.get.call(null,map__52916__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__52916__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__52914_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__52914_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5459__auto__)){
var res = temp__5459__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__52918_SHARP_,p2__52919_SHARP_){
return cljs.core.assoc.call(null,p1__52918_SHARP_,cljs.core.get.call(null,p2__52919_SHARP_,key),p2__52919_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5457__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5457__auto__)){
var link = temp__5457__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5457__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5457__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_52920 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_52920);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_52920);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__52921,p__52922){
var map__52923 = p__52921;
var map__52923__$1 = ((((!((map__52923 == null)))?((((map__52923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52923.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52923):map__52923);
var on_cssload = cljs.core.get.call(null,map__52923__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__52924 = p__52922;
var map__52924__$1 = ((((!((map__52924 == null)))?((((map__52924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52924.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52924):map__52924);
var files_msg = map__52924__$1;
var files = cljs.core.get.call(null,map__52924__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5459__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5459__auto__)){
var f_datas = temp__5459__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1517117192313
