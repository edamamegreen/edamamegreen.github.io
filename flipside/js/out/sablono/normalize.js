// Compiled by ClojureScript 1.9.494 {}
goog.provide('sablono.normalize');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('sablono.util');
/**
 * Removes all map entries where the value of the entry is empty.
 */
sablono.normalize.compact_map = (function sablono$normalize$compact_map(m){
return cljs.core.reduce.call(null,(function (m__$1,k){
var v = cljs.core.get.call(null,m__$1,k);
if(cljs.core.empty_QMARK_.call(null,v)){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,cljs.core.keys.call(null,m));
});
sablono.normalize.class_name = (function sablono$normalize$class_name(x){
if(typeof x === 'string'){
return x;
} else {
if((x instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,x);
} else {
return x;

}
}
});
/**
 * Returns true if `x` is a map lookup form, otherwise false.
 */
sablono.normalize.map_lookup_QMARK_ = (function sablono$normalize$map_lookup_QMARK_(x){
return (cljs.core.list_QMARK_.call(null,x)) && ((cljs.core.first.call(null,x) instanceof cljs.core.Keyword));
});
/**
 * Normalize `class` into a vector of classes.
 */
sablono.normalize.class$ = (function sablono$normalize$class(class$){
if((class$ == null)){
return null;
} else {
if(cljs.core.truth_(sablono.normalize.map_lookup_QMARK_.call(null,class$))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null);
} else {
if(cljs.core.list_QMARK_.call(null,class$)){
if((cljs.core.first.call(null,class$) instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null);
} else {
return cljs.core.map.call(null,sablono.normalize.class_name,class$);
}
} else {
if((class$ instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null);
} else {
if(typeof class$ === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null);
} else {
if((class$ instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.normalize.class_name.call(null,class$)], null);
} else {
if(((cljs.core.set_QMARK_.call(null,class$)) || (cljs.core.sequential_QMARK_.call(null,class$))) && (cljs.core.every_QMARK_.call(null,(function (p1__75220_SHARP_){
return ((p1__75220_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__75220_SHARP_ === 'string');
}),class$))){
return cljs.core.mapv.call(null,sablono.normalize.class_name,class$);
} else {
if((cljs.core.set_QMARK_.call(null,class$)) || (cljs.core.sequential_QMARK_.call(null,class$))){
return cljs.core.mapv.call(null,sablono.normalize.class_name,class$);
} else {
return class$;

}
}
}
}
}
}
}
}
});
/**
 * Normalize the `attrs` of an element.
 */
sablono.normalize.attributes = (function sablono$normalize$attributes(attrs){
var G__75222 = attrs;
if(cljs.core.truth_(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.update_in.call(null,G__75222,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null),sablono.normalize.class$);
} else {
return G__75222;
}
});
/**
 * Like clojure.core/merge but concatenate :class entries.
 */
sablono.normalize.merge_with_class = (function sablono$normalize$merge_with_class(var_args){
var args__37115__auto__ = [];
var len__37108__auto___75225 = arguments.length;
var i__37109__auto___75226 = (0);
while(true){
if((i__37109__auto___75226 < len__37108__auto___75225)){
args__37115__auto__.push((arguments[i__37109__auto___75226]));

var G__75227 = (i__37109__auto___75226 + (1));
i__37109__auto___75226 = G__75227;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});

sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var maps__$1 = cljs.core.map.call(null,sablono.normalize.attributes,maps);
var classes = cljs.core.map.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),maps__$1);
var classes__$1 = cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,classes));
var G__75224 = cljs.core.apply.call(null,cljs.core.merge,maps__$1);
if(!(cljs.core.empty_QMARK_.call(null,classes__$1))){
return cljs.core.assoc.call(null,G__75224,new cljs.core.Keyword(null,"class","class",-2030961996),classes__$1);
} else {
return G__75224;
}
});

sablono.normalize.merge_with_class.cljs$lang$maxFixedArity = (0);

sablono.normalize.merge_with_class.cljs$lang$applyTo = (function (seq75223){
return sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq75223));
});

/**
 * Strip the # and . characters from the beginning of `s`.
 */
sablono.normalize.strip_css = (function sablono$normalize$strip_css(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,s,/^[.#]/,"");
} else {
return null;
}
});
/**
 * Match `s` as a CSS tag and return a vector of tag name, CSS id and
 *   CSS classes.
 */
sablono.normalize.match_tag = (function sablono$normalize$match_tag(s){
var matches = cljs.core.re_seq.call(null,/[#.]?[^#.]+/,cljs.core.name.call(null,s));
var vec__75233 = ((cljs.core.empty_QMARK_.call(null,matches))?(function(){throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Can't match CSS tag: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),s], null))})():(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["#",null,".",null], null), null).call(null,cljs.core.ffirst.call(null,matches)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["div",matches], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,matches),cljs.core.rest.call(null,matches)], null)
));
var tag_name = cljs.core.nth.call(null,vec__75233,(0),null);
var names = cljs.core.nth.call(null,vec__75233,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_name,cljs.core.first.call(null,cljs.core.map.call(null,sablono.normalize.strip_css,cljs.core.filter.call(null,((function (matches,vec__75233,tag_name,names){
return (function (p1__75228_SHARP_){
return cljs.core._EQ_.call(null,"#",cljs.core.first.call(null,p1__75228_SHARP_));
});})(matches,vec__75233,tag_name,names))
,names))),cljs.core.vec.call(null,cljs.core.map.call(null,sablono.normalize.strip_css,cljs.core.filter.call(null,((function (matches,vec__75233,tag_name,names){
return (function (p1__75229_SHARP_){
return cljs.core._EQ_.call(null,".",cljs.core.first.call(null,p1__75229_SHARP_));
});})(matches,vec__75233,tag_name,names))
,names)))], null);
});
/**
 * Normalize the children of a HTML element.
 */
sablono.normalize.children = (function sablono$normalize$children(x){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,((typeof x === 'string')?(function (){var x__36821__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__36821__auto__);
})():(cljs.core.truth_(sablono.util.element_QMARK_.call(null,x))?(function (){var x__36821__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__36821__auto__);
})():(((cljs.core.list_QMARK_.call(null,x)) && ((x instanceof cljs.core.Symbol)))?(function (){var x__36821__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__36821__auto__);
})():((cljs.core.list_QMARK_.call(null,x))?x:(((cljs.core.sequential_QMARK_.call(null,x)) && (cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,x))) && (!(typeof cljs.core.first.call(null,x) === 'string')) && (cljs.core.not.call(null,sablono.util.element_QMARK_.call(null,cljs.core.first.call(null,x)))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(1))))?sablono.normalize.children.call(null,cljs.core.first.call(null,x)):((cljs.core.sequential_QMARK_.call(null,x))?x:(function (){var x__36821__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__36821__auto__);
})()
)))))));
});
/**
 * Ensure an element vector is of the form [tag-name attrs content].
 */
sablono.normalize.element = (function sablono$normalize$element(p__75236){
var vec__75243 = p__75236;
var seq__75244 = cljs.core.seq.call(null,vec__75243);
var first__75245 = cljs.core.first.call(null,seq__75244);
var seq__75244__$1 = cljs.core.next.call(null,seq__75244);
var tag = first__75245;
var content = seq__75244__$1;
if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is not a valid element name.")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"content","content",15833224),content], null));
} else {
}

var vec__75246 = sablono.normalize.match_tag.call(null,tag);
var tag__$1 = cljs.core.nth.call(null,vec__75246,(0),null);
var id = cljs.core.nth.call(null,vec__75246,(1),null);
var class$ = cljs.core.nth.call(null,vec__75246,(2),null);
var tag_attrs = sablono.normalize.compact_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),class$], null));
var map_attrs = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,map_attrs)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,sablono.normalize.merge_with_class.call(null,tag_attrs,map_attrs),sablono.normalize.children.call(null,cljs.core.next.call(null,content))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,sablono.normalize.attributes.call(null,tag_attrs),sablono.normalize.children.call(null,content)], null);
}
});

//# sourceMappingURL=normalize.js.map?rel=1512968106618