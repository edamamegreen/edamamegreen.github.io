// Compiled by ClojureScript 1.9.494 {}
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
var or__35887__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__35887__auto__){
return or__35887__auto__;
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
var or__35887__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__82555_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__82555_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
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
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
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
var seq__82560 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__82561 = null;
var count__82562 = (0);
var i__82563 = (0);
while(true){
if((i__82563 < count__82562)){
var n = cljs.core._nth.call(null,chunk__82561,i__82563);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__82564 = seq__82560;
var G__82565 = chunk__82561;
var G__82566 = count__82562;
var G__82567 = (i__82563 + (1));
seq__82560 = G__82564;
chunk__82561 = G__82565;
count__82562 = G__82566;
i__82563 = G__82567;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__82560);
if(temp__6753__auto__){
var seq__82560__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82560__$1)){
var c__36798__auto__ = cljs.core.chunk_first.call(null,seq__82560__$1);
var G__82568 = cljs.core.chunk_rest.call(null,seq__82560__$1);
var G__82569 = c__36798__auto__;
var G__82570 = cljs.core.count.call(null,c__36798__auto__);
var G__82571 = (0);
seq__82560 = G__82568;
chunk__82561 = G__82569;
count__82562 = G__82570;
i__82563 = G__82571;
continue;
} else {
var n = cljs.core.first.call(null,seq__82560__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__82572 = cljs.core.next.call(null,seq__82560__$1);
var G__82573 = null;
var G__82574 = (0);
var G__82575 = (0);
seq__82560 = G__82572;
chunk__82561 = G__82573;
count__82562 = G__82574;
i__82563 = G__82575;
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

var seq__82626_82637 = cljs.core.seq.call(null,deps);
var chunk__82627_82638 = null;
var count__82628_82639 = (0);
var i__82629_82640 = (0);
while(true){
if((i__82629_82640 < count__82628_82639)){
var dep_82641 = cljs.core._nth.call(null,chunk__82627_82638,i__82629_82640);
topo_sort_helper_STAR_.call(null,dep_82641,(depth + (1)),state);

var G__82642 = seq__82626_82637;
var G__82643 = chunk__82627_82638;
var G__82644 = count__82628_82639;
var G__82645 = (i__82629_82640 + (1));
seq__82626_82637 = G__82642;
chunk__82627_82638 = G__82643;
count__82628_82639 = G__82644;
i__82629_82640 = G__82645;
continue;
} else {
var temp__6753__auto___82646 = cljs.core.seq.call(null,seq__82626_82637);
if(temp__6753__auto___82646){
var seq__82626_82647__$1 = temp__6753__auto___82646;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82626_82647__$1)){
var c__36798__auto___82648 = cljs.core.chunk_first.call(null,seq__82626_82647__$1);
var G__82649 = cljs.core.chunk_rest.call(null,seq__82626_82647__$1);
var G__82650 = c__36798__auto___82648;
var G__82651 = cljs.core.count.call(null,c__36798__auto___82648);
var G__82652 = (0);
seq__82626_82637 = G__82649;
chunk__82627_82638 = G__82650;
count__82628_82639 = G__82651;
i__82629_82640 = G__82652;
continue;
} else {
var dep_82653 = cljs.core.first.call(null,seq__82626_82647__$1);
topo_sort_helper_STAR_.call(null,dep_82653,(depth + (1)),state);

var G__82654 = cljs.core.next.call(null,seq__82626_82647__$1);
var G__82655 = null;
var G__82656 = (0);
var G__82657 = (0);
seq__82626_82637 = G__82654;
chunk__82627_82638 = G__82655;
count__82628_82639 = G__82656;
i__82629_82640 = G__82657;
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
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__82630){
var vec__82634 = p__82630;
var seq__82635 = cljs.core.seq.call(null,vec__82634);
var first__82636 = cljs.core.first.call(null,seq__82635);
var seq__82635__$1 = cljs.core.next.call(null,seq__82635);
var x = first__82636;
var xs = seq__82635__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__82634,seq__82635,first__82636,seq__82635__$1,x,xs,get_deps__$1){
return (function (p1__82576_SHARP_){
return clojure.set.difference.call(null,p1__82576_SHARP_,x);
});})(vec__82634,seq__82635,first__82636,seq__82635__$1,x,xs,get_deps__$1))
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
var seq__82670 = cljs.core.seq.call(null,provides);
var chunk__82671 = null;
var count__82672 = (0);
var i__82673 = (0);
while(true){
if((i__82673 < count__82672)){
var prov = cljs.core._nth.call(null,chunk__82671,i__82673);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__82674_82682 = cljs.core.seq.call(null,requires);
var chunk__82675_82683 = null;
var count__82676_82684 = (0);
var i__82677_82685 = (0);
while(true){
if((i__82677_82685 < count__82676_82684)){
var req_82686 = cljs.core._nth.call(null,chunk__82675_82683,i__82677_82685);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_82686,prov);

var G__82687 = seq__82674_82682;
var G__82688 = chunk__82675_82683;
var G__82689 = count__82676_82684;
var G__82690 = (i__82677_82685 + (1));
seq__82674_82682 = G__82687;
chunk__82675_82683 = G__82688;
count__82676_82684 = G__82689;
i__82677_82685 = G__82690;
continue;
} else {
var temp__6753__auto___82691 = cljs.core.seq.call(null,seq__82674_82682);
if(temp__6753__auto___82691){
var seq__82674_82692__$1 = temp__6753__auto___82691;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82674_82692__$1)){
var c__36798__auto___82693 = cljs.core.chunk_first.call(null,seq__82674_82692__$1);
var G__82694 = cljs.core.chunk_rest.call(null,seq__82674_82692__$1);
var G__82695 = c__36798__auto___82693;
var G__82696 = cljs.core.count.call(null,c__36798__auto___82693);
var G__82697 = (0);
seq__82674_82682 = G__82694;
chunk__82675_82683 = G__82695;
count__82676_82684 = G__82696;
i__82677_82685 = G__82697;
continue;
} else {
var req_82698 = cljs.core.first.call(null,seq__82674_82692__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_82698,prov);

var G__82699 = cljs.core.next.call(null,seq__82674_82692__$1);
var G__82700 = null;
var G__82701 = (0);
var G__82702 = (0);
seq__82674_82682 = G__82699;
chunk__82675_82683 = G__82700;
count__82676_82684 = G__82701;
i__82677_82685 = G__82702;
continue;
}
} else {
}
}
break;
}

var G__82703 = seq__82670;
var G__82704 = chunk__82671;
var G__82705 = count__82672;
var G__82706 = (i__82673 + (1));
seq__82670 = G__82703;
chunk__82671 = G__82704;
count__82672 = G__82705;
i__82673 = G__82706;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__82670);
if(temp__6753__auto__){
var seq__82670__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82670__$1)){
var c__36798__auto__ = cljs.core.chunk_first.call(null,seq__82670__$1);
var G__82707 = cljs.core.chunk_rest.call(null,seq__82670__$1);
var G__82708 = c__36798__auto__;
var G__82709 = cljs.core.count.call(null,c__36798__auto__);
var G__82710 = (0);
seq__82670 = G__82707;
chunk__82671 = G__82708;
count__82672 = G__82709;
i__82673 = G__82710;
continue;
} else {
var prov = cljs.core.first.call(null,seq__82670__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__82678_82711 = cljs.core.seq.call(null,requires);
var chunk__82679_82712 = null;
var count__82680_82713 = (0);
var i__82681_82714 = (0);
while(true){
if((i__82681_82714 < count__82680_82713)){
var req_82715 = cljs.core._nth.call(null,chunk__82679_82712,i__82681_82714);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_82715,prov);

var G__82716 = seq__82678_82711;
var G__82717 = chunk__82679_82712;
var G__82718 = count__82680_82713;
var G__82719 = (i__82681_82714 + (1));
seq__82678_82711 = G__82716;
chunk__82679_82712 = G__82717;
count__82680_82713 = G__82718;
i__82681_82714 = G__82719;
continue;
} else {
var temp__6753__auto___82720__$1 = cljs.core.seq.call(null,seq__82678_82711);
if(temp__6753__auto___82720__$1){
var seq__82678_82721__$1 = temp__6753__auto___82720__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82678_82721__$1)){
var c__36798__auto___82722 = cljs.core.chunk_first.call(null,seq__82678_82721__$1);
var G__82723 = cljs.core.chunk_rest.call(null,seq__82678_82721__$1);
var G__82724 = c__36798__auto___82722;
var G__82725 = cljs.core.count.call(null,c__36798__auto___82722);
var G__82726 = (0);
seq__82678_82711 = G__82723;
chunk__82679_82712 = G__82724;
count__82680_82713 = G__82725;
i__82681_82714 = G__82726;
continue;
} else {
var req_82727 = cljs.core.first.call(null,seq__82678_82721__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_82727,prov);

var G__82728 = cljs.core.next.call(null,seq__82678_82721__$1);
var G__82729 = null;
var G__82730 = (0);
var G__82731 = (0);
seq__82678_82711 = G__82728;
chunk__82679_82712 = G__82729;
count__82680_82713 = G__82730;
i__82681_82714 = G__82731;
continue;
}
} else {
}
}
break;
}

var G__82732 = cljs.core.next.call(null,seq__82670__$1);
var G__82733 = null;
var G__82734 = (0);
var G__82735 = (0);
seq__82670 = G__82732;
chunk__82671 = G__82733;
count__82672 = G__82734;
i__82673 = G__82735;
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
var seq__82740_82744 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__82741_82745 = null;
var count__82742_82746 = (0);
var i__82743_82747 = (0);
while(true){
if((i__82743_82747 < count__82742_82746)){
var ns_82748 = cljs.core._nth.call(null,chunk__82741_82745,i__82743_82747);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_82748);

var G__82749 = seq__82740_82744;
var G__82750 = chunk__82741_82745;
var G__82751 = count__82742_82746;
var G__82752 = (i__82743_82747 + (1));
seq__82740_82744 = G__82749;
chunk__82741_82745 = G__82750;
count__82742_82746 = G__82751;
i__82743_82747 = G__82752;
continue;
} else {
var temp__6753__auto___82753 = cljs.core.seq.call(null,seq__82740_82744);
if(temp__6753__auto___82753){
var seq__82740_82754__$1 = temp__6753__auto___82753;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82740_82754__$1)){
var c__36798__auto___82755 = cljs.core.chunk_first.call(null,seq__82740_82754__$1);
var G__82756 = cljs.core.chunk_rest.call(null,seq__82740_82754__$1);
var G__82757 = c__36798__auto___82755;
var G__82758 = cljs.core.count.call(null,c__36798__auto___82755);
var G__82759 = (0);
seq__82740_82744 = G__82756;
chunk__82741_82745 = G__82757;
count__82742_82746 = G__82758;
i__82743_82747 = G__82759;
continue;
} else {
var ns_82760 = cljs.core.first.call(null,seq__82740_82754__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_82760);

var G__82761 = cljs.core.next.call(null,seq__82740_82754__$1);
var G__82762 = null;
var G__82763 = (0);
var G__82764 = (0);
seq__82740_82744 = G__82761;
chunk__82741_82745 = G__82762;
count__82742_82746 = G__82763;
i__82743_82747 = G__82764;
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
goog.require_figwheel_backup_ = (function (){var or__35887__auto__ = goog.require__;
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
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
var G__82765__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__82765 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__82766__i = 0, G__82766__a = new Array(arguments.length -  0);
while (G__82766__i < G__82766__a.length) {G__82766__a[G__82766__i] = arguments[G__82766__i + 0]; ++G__82766__i;}
  args = new cljs.core.IndexedSeq(G__82766__a,0);
} 
return G__82765__delegate.call(this,args);};
G__82765.cljs$lang$maxFixedArity = 0;
G__82765.cljs$lang$applyTo = (function (arglist__82767){
var args = cljs.core.seq(arglist__82767);
return G__82765__delegate(args);
});
G__82765.cljs$core$IFn$_invoke$arity$variadic = G__82765__delegate;
return G__82765;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__82768 = cljs.core._EQ_;
var expr__82769 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__82768.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__82769))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__82768,expr__82769){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__82768,expr__82769))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__82768,expr__82769){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e82771){if((e82771 instanceof Error)){
var e = e82771;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e82771;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__82768,expr__82769))
} else {
if(cljs.core.truth_(pred__82768.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__82769))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__82768.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__82769))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__82768.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__82769))){
return ((function (pred__82768,expr__82769){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e82772){if((e82772 instanceof Error)){
var e = e82772;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e82772;

}
}})());
});
;})(pred__82768,expr__82769))
} else {
return ((function (pred__82768,expr__82769){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__82768,expr__82769))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__82773,callback){
var map__82776 = p__82773;
var map__82776__$1 = ((((!((map__82776 == null)))?((((map__82776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82776.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82776):map__82776);
var file_msg = map__82776__$1;
var request_url = cljs.core.get.call(null,map__82776__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__82776,map__82776__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__82776,map__82776__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__40807__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto__){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto__){
return (function (state_82800){
var state_val_82801 = (state_82800[(1)]);
if((state_val_82801 === (7))){
var inst_82796 = (state_82800[(2)]);
var state_82800__$1 = state_82800;
var statearr_82802_82822 = state_82800__$1;
(statearr_82802_82822[(2)] = inst_82796);

(statearr_82802_82822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82801 === (1))){
var state_82800__$1 = state_82800;
var statearr_82803_82823 = state_82800__$1;
(statearr_82803_82823[(2)] = null);

(statearr_82803_82823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82801 === (4))){
var inst_82780 = (state_82800[(7)]);
var inst_82780__$1 = (state_82800[(2)]);
var state_82800__$1 = (function (){var statearr_82804 = state_82800;
(statearr_82804[(7)] = inst_82780__$1);

return statearr_82804;
})();
if(cljs.core.truth_(inst_82780__$1)){
var statearr_82805_82824 = state_82800__$1;
(statearr_82805_82824[(1)] = (5));

} else {
var statearr_82806_82825 = state_82800__$1;
(statearr_82806_82825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82801 === (6))){
var state_82800__$1 = state_82800;
var statearr_82807_82826 = state_82800__$1;
(statearr_82807_82826[(2)] = null);

(statearr_82807_82826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82801 === (3))){
var inst_82798 = (state_82800[(2)]);
var state_82800__$1 = state_82800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82800__$1,inst_82798);
} else {
if((state_val_82801 === (2))){
var state_82800__$1 = state_82800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82800__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_82801 === (11))){
var inst_82792 = (state_82800[(2)]);
var state_82800__$1 = (function (){var statearr_82808 = state_82800;
(statearr_82808[(8)] = inst_82792);

return statearr_82808;
})();
var statearr_82809_82827 = state_82800__$1;
(statearr_82809_82827[(2)] = null);

(statearr_82809_82827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82801 === (9))){
var inst_82786 = (state_82800[(9)]);
var inst_82784 = (state_82800[(10)]);
var inst_82788 = inst_82786.call(null,inst_82784);
var state_82800__$1 = state_82800;
var statearr_82810_82828 = state_82800__$1;
(statearr_82810_82828[(2)] = inst_82788);

(statearr_82810_82828[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82801 === (5))){
var inst_82780 = (state_82800[(7)]);
var inst_82782 = figwheel.client.file_reloading.blocking_load.call(null,inst_82780);
var state_82800__$1 = state_82800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82800__$1,(8),inst_82782);
} else {
if((state_val_82801 === (10))){
var inst_82784 = (state_82800[(10)]);
var inst_82790 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_82784);
var state_82800__$1 = state_82800;
var statearr_82811_82829 = state_82800__$1;
(statearr_82811_82829[(2)] = inst_82790);

(statearr_82811_82829[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82801 === (8))){
var inst_82786 = (state_82800[(9)]);
var inst_82780 = (state_82800[(7)]);
var inst_82784 = (state_82800[(2)]);
var inst_82785 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_82786__$1 = cljs.core.get.call(null,inst_82785,inst_82780);
var state_82800__$1 = (function (){var statearr_82812 = state_82800;
(statearr_82812[(9)] = inst_82786__$1);

(statearr_82812[(10)] = inst_82784);

return statearr_82812;
})();
if(cljs.core.truth_(inst_82786__$1)){
var statearr_82813_82830 = state_82800__$1;
(statearr_82813_82830[(1)] = (9));

} else {
var statearr_82814_82831 = state_82800__$1;
(statearr_82814_82831[(1)] = (10));

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
});})(c__40807__auto__))
;
return ((function (switch__40784__auto__,c__40807__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__40785__auto__ = null;
var figwheel$client$file_reloading$state_machine__40785__auto____0 = (function (){
var statearr_82818 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_82818[(0)] = figwheel$client$file_reloading$state_machine__40785__auto__);

(statearr_82818[(1)] = (1));

return statearr_82818;
});
var figwheel$client$file_reloading$state_machine__40785__auto____1 = (function (state_82800){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_82800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e82819){if((e82819 instanceof Object)){
var ex__40788__auto__ = e82819;
var statearr_82820_82832 = state_82800;
(statearr_82820_82832[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82833 = state_82800;
state_82800 = G__82833;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__40785__auto__ = function(state_82800){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__40785__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__40785__auto____1.call(this,state_82800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__40785__auto____0;
figwheel$client$file_reloading$state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__40785__auto____1;
return figwheel$client$file_reloading$state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto__))
})();
var state__40809__auto__ = (function (){var statearr_82821 = f__40808__auto__.call(null);
(statearr_82821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto__);

return statearr_82821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto__))
);

return c__40807__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__82834,callback){
var map__82837 = p__82834;
var map__82837__$1 = ((((!((map__82837 == null)))?((((map__82837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82837.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82837):map__82837);
var file_msg = map__82837__$1;
var namespace = cljs.core.get.call(null,map__82837__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__82837,map__82837__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__82837,map__82837__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__82839){
var map__82842 = p__82839;
var map__82842__$1 = ((((!((map__82842 == null)))?((((map__82842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82842.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82842):map__82842);
var file_msg = map__82842__$1;
var namespace = cljs.core.get.call(null,map__82842__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__82844){
var map__82847 = p__82844;
var map__82847__$1 = ((((!((map__82847 == null)))?((((map__82847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82847.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82847):map__82847);
var file_msg = map__82847__$1;
var namespace = cljs.core.get.call(null,map__82847__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__35875__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__35875__auto__){
var or__35887__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
var or__35887__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__35887__auto____$1)){
return or__35887__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__35875__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__82849,callback){
var map__82852 = p__82849;
var map__82852__$1 = ((((!((map__82852 == null)))?((((map__82852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82852.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82852):map__82852);
var file_msg = map__82852__$1;
var request_url = cljs.core.get.call(null,map__82852__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__82852__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

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
var c__40807__auto___82956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto___82956,out){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto___82956,out){
return (function (state_82938){
var state_val_82939 = (state_82938[(1)]);
if((state_val_82939 === (1))){
var inst_82912 = cljs.core.seq.call(null,files);
var inst_82913 = cljs.core.first.call(null,inst_82912);
var inst_82914 = cljs.core.next.call(null,inst_82912);
var inst_82915 = files;
var state_82938__$1 = (function (){var statearr_82940 = state_82938;
(statearr_82940[(7)] = inst_82915);

(statearr_82940[(8)] = inst_82914);

(statearr_82940[(9)] = inst_82913);

return statearr_82940;
})();
var statearr_82941_82957 = state_82938__$1;
(statearr_82941_82957[(2)] = null);

(statearr_82941_82957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82939 === (2))){
var inst_82921 = (state_82938[(10)]);
var inst_82915 = (state_82938[(7)]);
var inst_82920 = cljs.core.seq.call(null,inst_82915);
var inst_82921__$1 = cljs.core.first.call(null,inst_82920);
var inst_82922 = cljs.core.next.call(null,inst_82920);
var inst_82923 = (inst_82921__$1 == null);
var inst_82924 = cljs.core.not.call(null,inst_82923);
var state_82938__$1 = (function (){var statearr_82942 = state_82938;
(statearr_82942[(11)] = inst_82922);

(statearr_82942[(10)] = inst_82921__$1);

return statearr_82942;
})();
if(inst_82924){
var statearr_82943_82958 = state_82938__$1;
(statearr_82943_82958[(1)] = (4));

} else {
var statearr_82944_82959 = state_82938__$1;
(statearr_82944_82959[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82939 === (3))){
var inst_82936 = (state_82938[(2)]);
var state_82938__$1 = state_82938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82938__$1,inst_82936);
} else {
if((state_val_82939 === (4))){
var inst_82921 = (state_82938[(10)]);
var inst_82926 = figwheel.client.file_reloading.reload_js_file.call(null,inst_82921);
var state_82938__$1 = state_82938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82938__$1,(7),inst_82926);
} else {
if((state_val_82939 === (5))){
var inst_82932 = cljs.core.async.close_BANG_.call(null,out);
var state_82938__$1 = state_82938;
var statearr_82945_82960 = state_82938__$1;
(statearr_82945_82960[(2)] = inst_82932);

(statearr_82945_82960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82939 === (6))){
var inst_82934 = (state_82938[(2)]);
var state_82938__$1 = state_82938;
var statearr_82946_82961 = state_82938__$1;
(statearr_82946_82961[(2)] = inst_82934);

(statearr_82946_82961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82939 === (7))){
var inst_82922 = (state_82938[(11)]);
var inst_82928 = (state_82938[(2)]);
var inst_82929 = cljs.core.async.put_BANG_.call(null,out,inst_82928);
var inst_82915 = inst_82922;
var state_82938__$1 = (function (){var statearr_82947 = state_82938;
(statearr_82947[(7)] = inst_82915);

(statearr_82947[(12)] = inst_82929);

return statearr_82947;
})();
var statearr_82948_82962 = state_82938__$1;
(statearr_82948_82962[(2)] = null);

(statearr_82948_82962[(1)] = (2));


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
});})(c__40807__auto___82956,out))
;
return ((function (switch__40784__auto__,c__40807__auto___82956,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40785__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40785__auto____0 = (function (){
var statearr_82952 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_82952[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40785__auto__);

(statearr_82952[(1)] = (1));

return statearr_82952;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40785__auto____1 = (function (state_82938){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_82938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e82953){if((e82953 instanceof Object)){
var ex__40788__auto__ = e82953;
var statearr_82954_82963 = state_82938;
(statearr_82954_82963[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82964 = state_82938;
state_82938 = G__82964;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40785__auto__ = function(state_82938){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40785__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40785__auto____1.call(this,state_82938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40785__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40785__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto___82956,out))
})();
var state__40809__auto__ = (function (){var statearr_82955 = f__40808__auto__.call(null);
(statearr_82955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto___82956);

return statearr_82955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto___82956,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__82965,opts){
var map__82969 = p__82965;
var map__82969__$1 = ((((!((map__82969 == null)))?((((map__82969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82969.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82969):map__82969);
var eval_body = cljs.core.get.call(null,map__82969__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__82969__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__35875__auto__ = eval_body;
if(cljs.core.truth_(and__35875__auto__)){
return typeof eval_body === 'string';
} else {
return and__35875__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e82971){var e = e82971;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6751__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__82972_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__82972_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6751__auto__)){
var file_msg = temp__6751__auto__;
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
return cljs.core.map.call(null,(function (p__82981){
var vec__82982 = p__82981;
var k = cljs.core.nth.call(null,vec__82982,(0),null);
var v = cljs.core.nth.call(null,vec__82982,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__82985){
var vec__82986 = p__82985;
var k = cljs.core.nth.call(null,vec__82986,(0),null);
var v = cljs.core.nth.call(null,vec__82986,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__82992,p__82993){
var map__83241 = p__82992;
var map__83241__$1 = ((((!((map__83241 == null)))?((((map__83241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83241.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83241):map__83241);
var opts = map__83241__$1;
var before_jsload = cljs.core.get.call(null,map__83241__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__83241__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__83241__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__83242 = p__82993;
var map__83242__$1 = ((((!((map__83242 == null)))?((((map__83242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83242.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83242):map__83242);
var msg = map__83242__$1;
var files = cljs.core.get.call(null,map__83242__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__83242__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__83242__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__40807__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto__,map__83241,map__83241__$1,opts,before_jsload,on_jsload,reload_dependents,map__83242,map__83242__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto__,map__83241,map__83241__$1,opts,before_jsload,on_jsload,reload_dependents,map__83242,map__83242__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_83396){
var state_val_83397 = (state_83396[(1)]);
if((state_val_83397 === (7))){
var inst_83256 = (state_83396[(7)]);
var inst_83258 = (state_83396[(8)]);
var inst_83259 = (state_83396[(9)]);
var inst_83257 = (state_83396[(10)]);
var inst_83264 = cljs.core._nth.call(null,inst_83257,inst_83259);
var inst_83265 = figwheel.client.file_reloading.eval_body.call(null,inst_83264,opts);
var inst_83266 = (inst_83259 + (1));
var tmp83398 = inst_83256;
var tmp83399 = inst_83258;
var tmp83400 = inst_83257;
var inst_83256__$1 = tmp83398;
var inst_83257__$1 = tmp83400;
var inst_83258__$1 = tmp83399;
var inst_83259__$1 = inst_83266;
var state_83396__$1 = (function (){var statearr_83401 = state_83396;
(statearr_83401[(7)] = inst_83256__$1);

(statearr_83401[(8)] = inst_83258__$1);

(statearr_83401[(9)] = inst_83259__$1);

(statearr_83401[(10)] = inst_83257__$1);

(statearr_83401[(11)] = inst_83265);

return statearr_83401;
})();
var statearr_83402_83488 = state_83396__$1;
(statearr_83402_83488[(2)] = null);

(statearr_83402_83488[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (20))){
var inst_83299 = (state_83396[(12)]);
var inst_83307 = figwheel.client.file_reloading.sort_files.call(null,inst_83299);
var state_83396__$1 = state_83396;
var statearr_83403_83489 = state_83396__$1;
(statearr_83403_83489[(2)] = inst_83307);

(statearr_83403_83489[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (27))){
var state_83396__$1 = state_83396;
var statearr_83404_83490 = state_83396__$1;
(statearr_83404_83490[(2)] = null);

(statearr_83404_83490[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (1))){
var inst_83248 = (state_83396[(13)]);
var inst_83245 = before_jsload.call(null,files);
var inst_83246 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_83247 = (function (){return ((function (inst_83248,inst_83245,inst_83246,state_val_83397,c__40807__auto__,map__83241,map__83241__$1,opts,before_jsload,on_jsload,reload_dependents,map__83242,map__83242__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__82989_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__82989_SHARP_);
});
;})(inst_83248,inst_83245,inst_83246,state_val_83397,c__40807__auto__,map__83241,map__83241__$1,opts,before_jsload,on_jsload,reload_dependents,map__83242,map__83242__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_83248__$1 = cljs.core.filter.call(null,inst_83247,files);
var inst_83249 = cljs.core.not_empty.call(null,inst_83248__$1);
var state_83396__$1 = (function (){var statearr_83405 = state_83396;
(statearr_83405[(14)] = inst_83246);

(statearr_83405[(15)] = inst_83245);

(statearr_83405[(13)] = inst_83248__$1);

return statearr_83405;
})();
if(cljs.core.truth_(inst_83249)){
var statearr_83406_83491 = state_83396__$1;
(statearr_83406_83491[(1)] = (2));

} else {
var statearr_83407_83492 = state_83396__$1;
(statearr_83407_83492[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (24))){
var state_83396__$1 = state_83396;
var statearr_83408_83493 = state_83396__$1;
(statearr_83408_83493[(2)] = null);

(statearr_83408_83493[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (39))){
var inst_83349 = (state_83396[(16)]);
var state_83396__$1 = state_83396;
var statearr_83409_83494 = state_83396__$1;
(statearr_83409_83494[(2)] = inst_83349);

(statearr_83409_83494[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (46))){
var inst_83391 = (state_83396[(2)]);
var state_83396__$1 = state_83396;
var statearr_83410_83495 = state_83396__$1;
(statearr_83410_83495[(2)] = inst_83391);

(statearr_83410_83495[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (4))){
var inst_83293 = (state_83396[(2)]);
var inst_83294 = cljs.core.List.EMPTY;
var inst_83295 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_83294);
var inst_83296 = (function (){return ((function (inst_83293,inst_83294,inst_83295,state_val_83397,c__40807__auto__,map__83241,map__83241__$1,opts,before_jsload,on_jsload,reload_dependents,map__83242,map__83242__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__82990_SHARP_){
var and__35875__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__82990_SHARP_);
if(cljs.core.truth_(and__35875__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__82990_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__82990_SHARP_)));
} else {
return and__35875__auto__;
}
});
;})(inst_83293,inst_83294,inst_83295,state_val_83397,c__40807__auto__,map__83241,map__83241__$1,opts,before_jsload,on_jsload,reload_dependents,map__83242,map__83242__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_83297 = cljs.core.filter.call(null,inst_83296,files);
var inst_83298 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_83299 = cljs.core.concat.call(null,inst_83297,inst_83298);
var state_83396__$1 = (function (){var statearr_83411 = state_83396;
(statearr_83411[(12)] = inst_83299);

(statearr_83411[(17)] = inst_83293);

(statearr_83411[(18)] = inst_83295);

return statearr_83411;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_83412_83496 = state_83396__$1;
(statearr_83412_83496[(1)] = (16));

} else {
var statearr_83413_83497 = state_83396__$1;
(statearr_83413_83497[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (15))){
var inst_83283 = (state_83396[(2)]);
var state_83396__$1 = state_83396;
var statearr_83414_83498 = state_83396__$1;
(statearr_83414_83498[(2)] = inst_83283);

(statearr_83414_83498[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (21))){
var inst_83309 = (state_83396[(19)]);
var inst_83309__$1 = (state_83396[(2)]);
var inst_83310 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_83309__$1);
var state_83396__$1 = (function (){var statearr_83415 = state_83396;
(statearr_83415[(19)] = inst_83309__$1);

return statearr_83415;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83396__$1,(22),inst_83310);
} else {
if((state_val_83397 === (31))){
var inst_83394 = (state_83396[(2)]);
var state_83396__$1 = state_83396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83396__$1,inst_83394);
} else {
if((state_val_83397 === (32))){
var inst_83349 = (state_83396[(16)]);
var inst_83354 = inst_83349.cljs$lang$protocol_mask$partition0$;
var inst_83355 = (inst_83354 & (64));
var inst_83356 = inst_83349.cljs$core$ISeq$;
var inst_83357 = (cljs.core.PROTOCOL_SENTINEL === inst_83356);
var inst_83358 = (inst_83355) || (inst_83357);
var state_83396__$1 = state_83396;
if(cljs.core.truth_(inst_83358)){
var statearr_83416_83499 = state_83396__$1;
(statearr_83416_83499[(1)] = (35));

} else {
var statearr_83417_83500 = state_83396__$1;
(statearr_83417_83500[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (40))){
var inst_83371 = (state_83396[(20)]);
var inst_83370 = (state_83396[(2)]);
var inst_83371__$1 = cljs.core.get.call(null,inst_83370,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_83372 = cljs.core.get.call(null,inst_83370,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_83373 = cljs.core.not_empty.call(null,inst_83371__$1);
var state_83396__$1 = (function (){var statearr_83418 = state_83396;
(statearr_83418[(20)] = inst_83371__$1);

(statearr_83418[(21)] = inst_83372);

return statearr_83418;
})();
if(cljs.core.truth_(inst_83373)){
var statearr_83419_83501 = state_83396__$1;
(statearr_83419_83501[(1)] = (41));

} else {
var statearr_83420_83502 = state_83396__$1;
(statearr_83420_83502[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (33))){
var state_83396__$1 = state_83396;
var statearr_83421_83503 = state_83396__$1;
(statearr_83421_83503[(2)] = false);

(statearr_83421_83503[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (13))){
var inst_83269 = (state_83396[(22)]);
var inst_83273 = cljs.core.chunk_first.call(null,inst_83269);
var inst_83274 = cljs.core.chunk_rest.call(null,inst_83269);
var inst_83275 = cljs.core.count.call(null,inst_83273);
var inst_83256 = inst_83274;
var inst_83257 = inst_83273;
var inst_83258 = inst_83275;
var inst_83259 = (0);
var state_83396__$1 = (function (){var statearr_83422 = state_83396;
(statearr_83422[(7)] = inst_83256);

(statearr_83422[(8)] = inst_83258);

(statearr_83422[(9)] = inst_83259);

(statearr_83422[(10)] = inst_83257);

return statearr_83422;
})();
var statearr_83423_83504 = state_83396__$1;
(statearr_83423_83504[(2)] = null);

(statearr_83423_83504[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (22))){
var inst_83317 = (state_83396[(23)]);
var inst_83312 = (state_83396[(24)]);
var inst_83309 = (state_83396[(19)]);
var inst_83313 = (state_83396[(25)]);
var inst_83312__$1 = (state_83396[(2)]);
var inst_83313__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_83312__$1);
var inst_83314 = (function (){var all_files = inst_83309;
var res_SINGLEQUOTE_ = inst_83312__$1;
var res = inst_83313__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_83317,inst_83312,inst_83309,inst_83313,inst_83312__$1,inst_83313__$1,state_val_83397,c__40807__auto__,map__83241,map__83241__$1,opts,before_jsload,on_jsload,reload_dependents,map__83242,map__83242__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__82991_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__82991_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_83317,inst_83312,inst_83309,inst_83313,inst_83312__$1,inst_83313__$1,state_val_83397,c__40807__auto__,map__83241,map__83241__$1,opts,before_jsload,on_jsload,reload_dependents,map__83242,map__83242__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_83315 = cljs.core.filter.call(null,inst_83314,inst_83312__$1);
var inst_83316 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_83317__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_83316);
var inst_83318 = cljs.core.not_empty.call(null,inst_83317__$1);
var state_83396__$1 = (function (){var statearr_83424 = state_83396;
(statearr_83424[(23)] = inst_83317__$1);

(statearr_83424[(24)] = inst_83312__$1);

(statearr_83424[(26)] = inst_83315);

(statearr_83424[(25)] = inst_83313__$1);

return statearr_83424;
})();
if(cljs.core.truth_(inst_83318)){
var statearr_83425_83505 = state_83396__$1;
(statearr_83425_83505[(1)] = (23));

} else {
var statearr_83426_83506 = state_83396__$1;
(statearr_83426_83506[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (36))){
var state_83396__$1 = state_83396;
var statearr_83427_83507 = state_83396__$1;
(statearr_83427_83507[(2)] = false);

(statearr_83427_83507[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (41))){
var inst_83371 = (state_83396[(20)]);
var inst_83375 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_83376 = cljs.core.map.call(null,inst_83375,inst_83371);
var inst_83377 = cljs.core.pr_str.call(null,inst_83376);
var inst_83378 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_83377)].join('');
var inst_83379 = figwheel.client.utils.log.call(null,inst_83378);
var state_83396__$1 = state_83396;
var statearr_83428_83508 = state_83396__$1;
(statearr_83428_83508[(2)] = inst_83379);

(statearr_83428_83508[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (43))){
var inst_83372 = (state_83396[(21)]);
var inst_83382 = (state_83396[(2)]);
var inst_83383 = cljs.core.not_empty.call(null,inst_83372);
var state_83396__$1 = (function (){var statearr_83429 = state_83396;
(statearr_83429[(27)] = inst_83382);

return statearr_83429;
})();
if(cljs.core.truth_(inst_83383)){
var statearr_83430_83509 = state_83396__$1;
(statearr_83430_83509[(1)] = (44));

} else {
var statearr_83431_83510 = state_83396__$1;
(statearr_83431_83510[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (29))){
var inst_83317 = (state_83396[(23)]);
var inst_83312 = (state_83396[(24)]);
var inst_83349 = (state_83396[(16)]);
var inst_83315 = (state_83396[(26)]);
var inst_83309 = (state_83396[(19)]);
var inst_83313 = (state_83396[(25)]);
var inst_83345 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_83348 = (function (){var all_files = inst_83309;
var res_SINGLEQUOTE_ = inst_83312;
var res = inst_83313;
var files_not_loaded = inst_83315;
var dependencies_that_loaded = inst_83317;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_83317,inst_83312,inst_83349,inst_83315,inst_83309,inst_83313,inst_83345,state_val_83397,c__40807__auto__,map__83241,map__83241__$1,opts,before_jsload,on_jsload,reload_dependents,map__83242,map__83242__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__83347){
var map__83432 = p__83347;
var map__83432__$1 = ((((!((map__83432 == null)))?((((map__83432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83432.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83432):map__83432);
var namespace = cljs.core.get.call(null,map__83432__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_83317,inst_83312,inst_83349,inst_83315,inst_83309,inst_83313,inst_83345,state_val_83397,c__40807__auto__,map__83241,map__83241__$1,opts,before_jsload,on_jsload,reload_dependents,map__83242,map__83242__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_83349__$1 = cljs.core.group_by.call(null,inst_83348,inst_83315);
var inst_83351 = (inst_83349__$1 == null);
var inst_83352 = cljs.core.not.call(null,inst_83351);
var state_83396__$1 = (function (){var statearr_83434 = state_83396;
(statearr_83434[(16)] = inst_83349__$1);

(statearr_83434[(28)] = inst_83345);

return statearr_83434;
})();
if(inst_83352){
var statearr_83435_83511 = state_83396__$1;
(statearr_83435_83511[(1)] = (32));

} else {
var statearr_83436_83512 = state_83396__$1;
(statearr_83436_83512[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (44))){
var inst_83372 = (state_83396[(21)]);
var inst_83385 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_83372);
var inst_83386 = cljs.core.pr_str.call(null,inst_83385);
var inst_83387 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_83386)].join('');
var inst_83388 = figwheel.client.utils.log.call(null,inst_83387);
var state_83396__$1 = state_83396;
var statearr_83437_83513 = state_83396__$1;
(statearr_83437_83513[(2)] = inst_83388);

(statearr_83437_83513[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (6))){
var inst_83290 = (state_83396[(2)]);
var state_83396__$1 = state_83396;
var statearr_83438_83514 = state_83396__$1;
(statearr_83438_83514[(2)] = inst_83290);

(statearr_83438_83514[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (28))){
var inst_83315 = (state_83396[(26)]);
var inst_83342 = (state_83396[(2)]);
var inst_83343 = cljs.core.not_empty.call(null,inst_83315);
var state_83396__$1 = (function (){var statearr_83439 = state_83396;
(statearr_83439[(29)] = inst_83342);

return statearr_83439;
})();
if(cljs.core.truth_(inst_83343)){
var statearr_83440_83515 = state_83396__$1;
(statearr_83440_83515[(1)] = (29));

} else {
var statearr_83441_83516 = state_83396__$1;
(statearr_83441_83516[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (25))){
var inst_83313 = (state_83396[(25)]);
var inst_83329 = (state_83396[(2)]);
var inst_83330 = cljs.core.not_empty.call(null,inst_83313);
var state_83396__$1 = (function (){var statearr_83442 = state_83396;
(statearr_83442[(30)] = inst_83329);

return statearr_83442;
})();
if(cljs.core.truth_(inst_83330)){
var statearr_83443_83517 = state_83396__$1;
(statearr_83443_83517[(1)] = (26));

} else {
var statearr_83444_83518 = state_83396__$1;
(statearr_83444_83518[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (34))){
var inst_83365 = (state_83396[(2)]);
var state_83396__$1 = state_83396;
if(cljs.core.truth_(inst_83365)){
var statearr_83445_83519 = state_83396__$1;
(statearr_83445_83519[(1)] = (38));

} else {
var statearr_83446_83520 = state_83396__$1;
(statearr_83446_83520[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (17))){
var state_83396__$1 = state_83396;
var statearr_83447_83521 = state_83396__$1;
(statearr_83447_83521[(2)] = recompile_dependents);

(statearr_83447_83521[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (3))){
var state_83396__$1 = state_83396;
var statearr_83448_83522 = state_83396__$1;
(statearr_83448_83522[(2)] = null);

(statearr_83448_83522[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (12))){
var inst_83286 = (state_83396[(2)]);
var state_83396__$1 = state_83396;
var statearr_83449_83523 = state_83396__$1;
(statearr_83449_83523[(2)] = inst_83286);

(statearr_83449_83523[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (2))){
var inst_83248 = (state_83396[(13)]);
var inst_83255 = cljs.core.seq.call(null,inst_83248);
var inst_83256 = inst_83255;
var inst_83257 = null;
var inst_83258 = (0);
var inst_83259 = (0);
var state_83396__$1 = (function (){var statearr_83450 = state_83396;
(statearr_83450[(7)] = inst_83256);

(statearr_83450[(8)] = inst_83258);

(statearr_83450[(9)] = inst_83259);

(statearr_83450[(10)] = inst_83257);

return statearr_83450;
})();
var statearr_83451_83524 = state_83396__$1;
(statearr_83451_83524[(2)] = null);

(statearr_83451_83524[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (23))){
var inst_83317 = (state_83396[(23)]);
var inst_83312 = (state_83396[(24)]);
var inst_83315 = (state_83396[(26)]);
var inst_83309 = (state_83396[(19)]);
var inst_83313 = (state_83396[(25)]);
var inst_83320 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_83322 = (function (){var all_files = inst_83309;
var res_SINGLEQUOTE_ = inst_83312;
var res = inst_83313;
var files_not_loaded = inst_83315;
var dependencies_that_loaded = inst_83317;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_83317,inst_83312,inst_83315,inst_83309,inst_83313,inst_83320,state_val_83397,c__40807__auto__,map__83241,map__83241__$1,opts,before_jsload,on_jsload,reload_dependents,map__83242,map__83242__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__83321){
var map__83452 = p__83321;
var map__83452__$1 = ((((!((map__83452 == null)))?((((map__83452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83452.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83452):map__83452);
var request_url = cljs.core.get.call(null,map__83452__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_83317,inst_83312,inst_83315,inst_83309,inst_83313,inst_83320,state_val_83397,c__40807__auto__,map__83241,map__83241__$1,opts,before_jsload,on_jsload,reload_dependents,map__83242,map__83242__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_83323 = cljs.core.reverse.call(null,inst_83317);
var inst_83324 = cljs.core.map.call(null,inst_83322,inst_83323);
var inst_83325 = cljs.core.pr_str.call(null,inst_83324);
var inst_83326 = figwheel.client.utils.log.call(null,inst_83325);
var state_83396__$1 = (function (){var statearr_83454 = state_83396;
(statearr_83454[(31)] = inst_83320);

return statearr_83454;
})();
var statearr_83455_83525 = state_83396__$1;
(statearr_83455_83525[(2)] = inst_83326);

(statearr_83455_83525[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (35))){
var state_83396__$1 = state_83396;
var statearr_83456_83526 = state_83396__$1;
(statearr_83456_83526[(2)] = true);

(statearr_83456_83526[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (19))){
var inst_83299 = (state_83396[(12)]);
var inst_83305 = figwheel.client.file_reloading.expand_files.call(null,inst_83299);
var state_83396__$1 = state_83396;
var statearr_83457_83527 = state_83396__$1;
(statearr_83457_83527[(2)] = inst_83305);

(statearr_83457_83527[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (11))){
var state_83396__$1 = state_83396;
var statearr_83458_83528 = state_83396__$1;
(statearr_83458_83528[(2)] = null);

(statearr_83458_83528[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (9))){
var inst_83288 = (state_83396[(2)]);
var state_83396__$1 = state_83396;
var statearr_83459_83529 = state_83396__$1;
(statearr_83459_83529[(2)] = inst_83288);

(statearr_83459_83529[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (5))){
var inst_83258 = (state_83396[(8)]);
var inst_83259 = (state_83396[(9)]);
var inst_83261 = (inst_83259 < inst_83258);
var inst_83262 = inst_83261;
var state_83396__$1 = state_83396;
if(cljs.core.truth_(inst_83262)){
var statearr_83460_83530 = state_83396__$1;
(statearr_83460_83530[(1)] = (7));

} else {
var statearr_83461_83531 = state_83396__$1;
(statearr_83461_83531[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (14))){
var inst_83269 = (state_83396[(22)]);
var inst_83278 = cljs.core.first.call(null,inst_83269);
var inst_83279 = figwheel.client.file_reloading.eval_body.call(null,inst_83278,opts);
var inst_83280 = cljs.core.next.call(null,inst_83269);
var inst_83256 = inst_83280;
var inst_83257 = null;
var inst_83258 = (0);
var inst_83259 = (0);
var state_83396__$1 = (function (){var statearr_83462 = state_83396;
(statearr_83462[(7)] = inst_83256);

(statearr_83462[(32)] = inst_83279);

(statearr_83462[(8)] = inst_83258);

(statearr_83462[(9)] = inst_83259);

(statearr_83462[(10)] = inst_83257);

return statearr_83462;
})();
var statearr_83463_83532 = state_83396__$1;
(statearr_83463_83532[(2)] = null);

(statearr_83463_83532[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (45))){
var state_83396__$1 = state_83396;
var statearr_83464_83533 = state_83396__$1;
(statearr_83464_83533[(2)] = null);

(statearr_83464_83533[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (26))){
var inst_83317 = (state_83396[(23)]);
var inst_83312 = (state_83396[(24)]);
var inst_83315 = (state_83396[(26)]);
var inst_83309 = (state_83396[(19)]);
var inst_83313 = (state_83396[(25)]);
var inst_83332 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_83334 = (function (){var all_files = inst_83309;
var res_SINGLEQUOTE_ = inst_83312;
var res = inst_83313;
var files_not_loaded = inst_83315;
var dependencies_that_loaded = inst_83317;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_83317,inst_83312,inst_83315,inst_83309,inst_83313,inst_83332,state_val_83397,c__40807__auto__,map__83241,map__83241__$1,opts,before_jsload,on_jsload,reload_dependents,map__83242,map__83242__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__83333){
var map__83465 = p__83333;
var map__83465__$1 = ((((!((map__83465 == null)))?((((map__83465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83465):map__83465);
var namespace = cljs.core.get.call(null,map__83465__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__83465__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_83317,inst_83312,inst_83315,inst_83309,inst_83313,inst_83332,state_val_83397,c__40807__auto__,map__83241,map__83241__$1,opts,before_jsload,on_jsload,reload_dependents,map__83242,map__83242__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_83335 = cljs.core.map.call(null,inst_83334,inst_83313);
var inst_83336 = cljs.core.pr_str.call(null,inst_83335);
var inst_83337 = figwheel.client.utils.log.call(null,inst_83336);
var inst_83338 = (function (){var all_files = inst_83309;
var res_SINGLEQUOTE_ = inst_83312;
var res = inst_83313;
var files_not_loaded = inst_83315;
var dependencies_that_loaded = inst_83317;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_83317,inst_83312,inst_83315,inst_83309,inst_83313,inst_83332,inst_83334,inst_83335,inst_83336,inst_83337,state_val_83397,c__40807__auto__,map__83241,map__83241__$1,opts,before_jsload,on_jsload,reload_dependents,map__83242,map__83242__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_83317,inst_83312,inst_83315,inst_83309,inst_83313,inst_83332,inst_83334,inst_83335,inst_83336,inst_83337,state_val_83397,c__40807__auto__,map__83241,map__83241__$1,opts,before_jsload,on_jsload,reload_dependents,map__83242,map__83242__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_83339 = setTimeout(inst_83338,(10));
var state_83396__$1 = (function (){var statearr_83467 = state_83396;
(statearr_83467[(33)] = inst_83332);

(statearr_83467[(34)] = inst_83337);

return statearr_83467;
})();
var statearr_83468_83534 = state_83396__$1;
(statearr_83468_83534[(2)] = inst_83339);

(statearr_83468_83534[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (16))){
var state_83396__$1 = state_83396;
var statearr_83469_83535 = state_83396__$1;
(statearr_83469_83535[(2)] = reload_dependents);

(statearr_83469_83535[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (38))){
var inst_83349 = (state_83396[(16)]);
var inst_83367 = cljs.core.apply.call(null,cljs.core.hash_map,inst_83349);
var state_83396__$1 = state_83396;
var statearr_83470_83536 = state_83396__$1;
(statearr_83470_83536[(2)] = inst_83367);

(statearr_83470_83536[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (30))){
var state_83396__$1 = state_83396;
var statearr_83471_83537 = state_83396__$1;
(statearr_83471_83537[(2)] = null);

(statearr_83471_83537[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (10))){
var inst_83269 = (state_83396[(22)]);
var inst_83271 = cljs.core.chunked_seq_QMARK_.call(null,inst_83269);
var state_83396__$1 = state_83396;
if(inst_83271){
var statearr_83472_83538 = state_83396__$1;
(statearr_83472_83538[(1)] = (13));

} else {
var statearr_83473_83539 = state_83396__$1;
(statearr_83473_83539[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (18))){
var inst_83303 = (state_83396[(2)]);
var state_83396__$1 = state_83396;
if(cljs.core.truth_(inst_83303)){
var statearr_83474_83540 = state_83396__$1;
(statearr_83474_83540[(1)] = (19));

} else {
var statearr_83475_83541 = state_83396__$1;
(statearr_83475_83541[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (42))){
var state_83396__$1 = state_83396;
var statearr_83476_83542 = state_83396__$1;
(statearr_83476_83542[(2)] = null);

(statearr_83476_83542[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (37))){
var inst_83362 = (state_83396[(2)]);
var state_83396__$1 = state_83396;
var statearr_83477_83543 = state_83396__$1;
(statearr_83477_83543[(2)] = inst_83362);

(statearr_83477_83543[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83397 === (8))){
var inst_83269 = (state_83396[(22)]);
var inst_83256 = (state_83396[(7)]);
var inst_83269__$1 = cljs.core.seq.call(null,inst_83256);
var state_83396__$1 = (function (){var statearr_83478 = state_83396;
(statearr_83478[(22)] = inst_83269__$1);

return statearr_83478;
})();
if(inst_83269__$1){
var statearr_83479_83544 = state_83396__$1;
(statearr_83479_83544[(1)] = (10));

} else {
var statearr_83480_83545 = state_83396__$1;
(statearr_83480_83545[(1)] = (11));

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
});})(c__40807__auto__,map__83241,map__83241__$1,opts,before_jsload,on_jsload,reload_dependents,map__83242,map__83242__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__40784__auto__,c__40807__auto__,map__83241,map__83241__$1,opts,before_jsload,on_jsload,reload_dependents,map__83242,map__83242__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40785__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40785__auto____0 = (function (){
var statearr_83484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_83484[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__40785__auto__);

(statearr_83484[(1)] = (1));

return statearr_83484;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40785__auto____1 = (function (state_83396){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_83396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e83485){if((e83485 instanceof Object)){
var ex__40788__auto__ = e83485;
var statearr_83486_83546 = state_83396;
(statearr_83486_83546[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e83485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83547 = state_83396;
state_83396 = G__83547;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__40785__auto__ = function(state_83396){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40785__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40785__auto____1.call(this,state_83396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__40785__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__40785__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto__,map__83241,map__83241__$1,opts,before_jsload,on_jsload,reload_dependents,map__83242,map__83242__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__40809__auto__ = (function (){var statearr_83487 = f__40808__auto__.call(null);
(statearr_83487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto__);

return statearr_83487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto__,map__83241,map__83241__$1,opts,before_jsload,on_jsload,reload_dependents,map__83242,map__83242__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__40807__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__83550,link){
var map__83553 = p__83550;
var map__83553__$1 = ((((!((map__83553 == null)))?((((map__83553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83553.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83553):map__83553);
var file = cljs.core.get.call(null,map__83553__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = link.href;
if(cljs.core.truth_(temp__6753__auto__)){
var link_href = temp__6753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6753__auto__,map__83553,map__83553__$1,file){
return (function (p1__83548_SHARP_,p2__83549_SHARP_){
if(cljs.core._EQ_.call(null,p1__83548_SHARP_,p2__83549_SHARP_)){
return p1__83548_SHARP_;
} else {
return false;
}
});})(link_href,temp__6753__auto__,map__83553,map__83553__$1,file))
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
var temp__6753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__83559){
var map__83560 = p__83559;
var map__83560__$1 = ((((!((map__83560 == null)))?((((map__83560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83560):map__83560);
var match_length = cljs.core.get.call(null,map__83560__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__83560__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__83555_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__83555_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6753__auto__)){
var res = temp__6753__auto__;
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__83562_SHARP_,p2__83563_SHARP_){
return cljs.core.assoc.call(null,p1__83562_SHARP_,cljs.core.get.call(null,p2__83563_SHARP_,key),p2__83563_SHARP_);
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
var temp__6751__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6751__auto__)){
var link = temp__6751__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__6751__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__6751__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_83564 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_83564);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_83564);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__83565,p__83566){
var map__83571 = p__83565;
var map__83571__$1 = ((((!((map__83571 == null)))?((((map__83571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83571.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83571):map__83571);
var on_cssload = cljs.core.get.call(null,map__83571__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__83572 = p__83566;
var map__83572__$1 = ((((!((map__83572 == null)))?((((map__83572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83572.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83572):map__83572);
var files_msg = map__83572__$1;
var files = cljs.core.get.call(null,map__83572__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__6753__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__6753__auto__)){
var f_datas = temp__6753__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1512968127677