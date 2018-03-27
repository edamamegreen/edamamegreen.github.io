// Compiled by ClojureScript 1.9.946 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__39615__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__39612 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__39613 = cljs.core.seq.call(null,vec__39612);
var first__39614 = cljs.core.first.call(null,seq__39613);
var seq__39613__$1 = cljs.core.next.call(null,seq__39613);
var tag = first__39614;
var body = seq__39613__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__39615 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39616__i = 0, G__39616__a = new Array(arguments.length -  0);
while (G__39616__i < G__39616__a.length) {G__39616__a[G__39616__i] = arguments[G__39616__i + 0]; ++G__39616__i;}
  args = new cljs.core.IndexedSeq(G__39616__a,0,null);
} 
return G__39615__delegate.call(this,args);};
G__39615.cljs$lang$maxFixedArity = 0;
G__39615.cljs$lang$applyTo = (function (arglist__39617){
var args = cljs.core.seq(arglist__39617);
return G__39615__delegate(args);
});
G__39615.cljs$core$IFn$_invoke$arity$variadic = G__39615__delegate;
return G__39615;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__37807__auto__ = (function sablono$core$update_arglists_$_iter__39618(s__39619){
return (new cljs.core.LazySeq(null,(function (){
var s__39619__$1 = s__39619;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__39619__$1);
if(temp__5459__auto__){
var s__39619__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39619__$2)){
var c__37805__auto__ = cljs.core.chunk_first.call(null,s__39619__$2);
var size__37806__auto__ = cljs.core.count.call(null,c__37805__auto__);
var b__39621 = cljs.core.chunk_buffer.call(null,size__37806__auto__);
if((function (){var i__39620 = (0);
while(true){
if((i__39620 < size__37806__auto__)){
var args = cljs.core._nth.call(null,c__37805__auto__,i__39620);
cljs.core.chunk_append.call(null,b__39621,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__39622 = (i__39620 + (1));
i__39620 = G__39622;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39621),sablono$core$update_arglists_$_iter__39618.call(null,cljs.core.chunk_rest.call(null,s__39619__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39621),null);
}
} else {
var args = cljs.core.first.call(null,s__39619__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__39618.call(null,cljs.core.rest.call(null,s__39619__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__37807__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__38211__auto__ = [];
var len__38204__auto___39628 = arguments.length;
var i__38205__auto___39629 = (0);
while(true){
if((i__38205__auto___39629 < len__38204__auto___39628)){
args__38211__auto__.push((arguments[i__38205__auto___39629]));

var G__39630 = (i__38205__auto___39629 + (1));
i__38205__auto___39629 = G__39630;
continue;
} else {
}
break;
}

var argseq__38212__auto__ = ((((0) < args__38211__auto__.length))?(new cljs.core.IndexedSeq(args__38211__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__38212__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__37807__auto__ = (function sablono$core$iter__39624(s__39625){
return (new cljs.core.LazySeq(null,(function (){
var s__39625__$1 = s__39625;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__39625__$1);
if(temp__5459__auto__){
var s__39625__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39625__$2)){
var c__37805__auto__ = cljs.core.chunk_first.call(null,s__39625__$2);
var size__37806__auto__ = cljs.core.count.call(null,c__37805__auto__);
var b__39627 = cljs.core.chunk_buffer.call(null,size__37806__auto__);
if((function (){var i__39626 = (0);
while(true){
if((i__39626 < size__37806__auto__)){
var style = cljs.core._nth.call(null,c__37805__auto__,i__39626);
cljs.core.chunk_append.call(null,b__39627,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__39631 = (i__39626 + (1));
i__39626 = G__39631;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39627),sablono$core$iter__39624.call(null,cljs.core.chunk_rest.call(null,s__39625__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39627),null);
}
} else {
var style = cljs.core.first.call(null,s__39625__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__39624.call(null,cljs.core.rest.call(null,s__39625__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__37807__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq39623){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39623));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to39632 = (function sablono$core$link_to39632(var_args){
var args__38211__auto__ = [];
var len__38204__auto___39635 = arguments.length;
var i__38205__auto___39636 = (0);
while(true){
if((i__38205__auto___39636 < len__38204__auto___39635)){
args__38211__auto__.push((arguments[i__38205__auto___39636]));

var G__39637 = (i__38205__auto___39636 + (1));
i__38205__auto___39636 = G__39637;
continue;
} else {
}
break;
}

var argseq__38212__auto__ = ((((1) < args__38211__auto__.length))?(new cljs.core.IndexedSeq(args__38211__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to39632.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38212__auto__);
});

sablono.core.link_to39632.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to39632.cljs$lang$maxFixedArity = (1);

sablono.core.link_to39632.cljs$lang$applyTo = (function (seq39633){
var G__39634 = cljs.core.first.call(null,seq39633);
var seq39633__$1 = cljs.core.next.call(null,seq39633);
return sablono.core.link_to39632.cljs$core$IFn$_invoke$arity$variadic(G__39634,seq39633__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to39632);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to39638 = (function sablono$core$mail_to39638(var_args){
var args__38211__auto__ = [];
var len__38204__auto___39645 = arguments.length;
var i__38205__auto___39646 = (0);
while(true){
if((i__38205__auto___39646 < len__38204__auto___39645)){
args__38211__auto__.push((arguments[i__38205__auto___39646]));

var G__39647 = (i__38205__auto___39646 + (1));
i__38205__auto___39646 = G__39647;
continue;
} else {
}
break;
}

var argseq__38212__auto__ = ((((1) < args__38211__auto__.length))?(new cljs.core.IndexedSeq(args__38211__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to39638.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38212__auto__);
});

sablono.core.mail_to39638.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__39641){
var vec__39642 = p__39641;
var content = cljs.core.nth.call(null,vec__39642,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__36925__auto__ = content;
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to39638.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to39638.cljs$lang$applyTo = (function (seq39639){
var G__39640 = cljs.core.first.call(null,seq39639);
var seq39639__$1 = cljs.core.next.call(null,seq39639);
return sablono.core.mail_to39638.cljs$core$IFn$_invoke$arity$variadic(G__39640,seq39639__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to39638);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list39648 = (function sablono$core$unordered_list39648(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__37807__auto__ = (function sablono$core$unordered_list39648_$_iter__39649(s__39650){
return (new cljs.core.LazySeq(null,(function (){
var s__39650__$1 = s__39650;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__39650__$1);
if(temp__5459__auto__){
var s__39650__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39650__$2)){
var c__37805__auto__ = cljs.core.chunk_first.call(null,s__39650__$2);
var size__37806__auto__ = cljs.core.count.call(null,c__37805__auto__);
var b__39652 = cljs.core.chunk_buffer.call(null,size__37806__auto__);
if((function (){var i__39651 = (0);
while(true){
if((i__39651 < size__37806__auto__)){
var x = cljs.core._nth.call(null,c__37805__auto__,i__39651);
cljs.core.chunk_append.call(null,b__39652,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__39653 = (i__39651 + (1));
i__39651 = G__39653;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39652),sablono$core$unordered_list39648_$_iter__39649.call(null,cljs.core.chunk_rest.call(null,s__39650__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39652),null);
}
} else {
var x = cljs.core.first.call(null,s__39650__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list39648_$_iter__39649.call(null,cljs.core.rest.call(null,s__39650__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__37807__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list39648);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list39654 = (function sablono$core$ordered_list39654(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__37807__auto__ = (function sablono$core$ordered_list39654_$_iter__39655(s__39656){
return (new cljs.core.LazySeq(null,(function (){
var s__39656__$1 = s__39656;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__39656__$1);
if(temp__5459__auto__){
var s__39656__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39656__$2)){
var c__37805__auto__ = cljs.core.chunk_first.call(null,s__39656__$2);
var size__37806__auto__ = cljs.core.count.call(null,c__37805__auto__);
var b__39658 = cljs.core.chunk_buffer.call(null,size__37806__auto__);
if((function (){var i__39657 = (0);
while(true){
if((i__39657 < size__37806__auto__)){
var x = cljs.core._nth.call(null,c__37805__auto__,i__39657);
cljs.core.chunk_append.call(null,b__39658,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__39659 = (i__39657 + (1));
i__39657 = G__39659;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39658),sablono$core$ordered_list39654_$_iter__39655.call(null,cljs.core.chunk_rest.call(null,s__39656__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39658),null);
}
} else {
var x = cljs.core.first.call(null,s__39656__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list39654_$_iter__39655.call(null,cljs.core.rest.call(null,s__39656__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__37807__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list39654);
/**
 * Create an image element.
 */
sablono.core.image39660 = (function sablono$core$image39660(var_args){
var G__39662 = arguments.length;
switch (G__39662) {
case 1:
return sablono.core.image39660.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image39660.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image39660.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image39660.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image39660.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image39660);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__39664_SHARP_,p2__39665_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39664_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__39665_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__39666_SHARP_,p2__39667_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39666_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__39667_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__36925__auto__ = value;
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field39668 = (function sablono$core$color_field39668(var_args){
var G__39670 = arguments.length;
switch (G__39670) {
case 1:
return sablono.core.color_field39668.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field39668.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field39668.cljs$core$IFn$_invoke$arity$1 = (function (name__39602__auto__){
return sablono.core.color_field39668.call(null,name__39602__auto__,null);
});

sablono.core.color_field39668.cljs$core$IFn$_invoke$arity$2 = (function (name__39602__auto__,value__39603__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__39602__auto__,value__39603__auto__);
});

sablono.core.color_field39668.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field39668);

/**
 * Creates a date input field.
 */
sablono.core.date_field39671 = (function sablono$core$date_field39671(var_args){
var G__39673 = arguments.length;
switch (G__39673) {
case 1:
return sablono.core.date_field39671.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field39671.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field39671.cljs$core$IFn$_invoke$arity$1 = (function (name__39602__auto__){
return sablono.core.date_field39671.call(null,name__39602__auto__,null);
});

sablono.core.date_field39671.cljs$core$IFn$_invoke$arity$2 = (function (name__39602__auto__,value__39603__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__39602__auto__,value__39603__auto__);
});

sablono.core.date_field39671.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field39671);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field39674 = (function sablono$core$datetime_field39674(var_args){
var G__39676 = arguments.length;
switch (G__39676) {
case 1:
return sablono.core.datetime_field39674.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field39674.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field39674.cljs$core$IFn$_invoke$arity$1 = (function (name__39602__auto__){
return sablono.core.datetime_field39674.call(null,name__39602__auto__,null);
});

sablono.core.datetime_field39674.cljs$core$IFn$_invoke$arity$2 = (function (name__39602__auto__,value__39603__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__39602__auto__,value__39603__auto__);
});

sablono.core.datetime_field39674.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field39674);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field39677 = (function sablono$core$datetime_local_field39677(var_args){
var G__39679 = arguments.length;
switch (G__39679) {
case 1:
return sablono.core.datetime_local_field39677.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field39677.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field39677.cljs$core$IFn$_invoke$arity$1 = (function (name__39602__auto__){
return sablono.core.datetime_local_field39677.call(null,name__39602__auto__,null);
});

sablono.core.datetime_local_field39677.cljs$core$IFn$_invoke$arity$2 = (function (name__39602__auto__,value__39603__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__39602__auto__,value__39603__auto__);
});

sablono.core.datetime_local_field39677.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field39677);

/**
 * Creates a email input field.
 */
sablono.core.email_field39680 = (function sablono$core$email_field39680(var_args){
var G__39682 = arguments.length;
switch (G__39682) {
case 1:
return sablono.core.email_field39680.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field39680.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field39680.cljs$core$IFn$_invoke$arity$1 = (function (name__39602__auto__){
return sablono.core.email_field39680.call(null,name__39602__auto__,null);
});

sablono.core.email_field39680.cljs$core$IFn$_invoke$arity$2 = (function (name__39602__auto__,value__39603__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__39602__auto__,value__39603__auto__);
});

sablono.core.email_field39680.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field39680);

/**
 * Creates a file input field.
 */
sablono.core.file_field39683 = (function sablono$core$file_field39683(var_args){
var G__39685 = arguments.length;
switch (G__39685) {
case 1:
return sablono.core.file_field39683.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field39683.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field39683.cljs$core$IFn$_invoke$arity$1 = (function (name__39602__auto__){
return sablono.core.file_field39683.call(null,name__39602__auto__,null);
});

sablono.core.file_field39683.cljs$core$IFn$_invoke$arity$2 = (function (name__39602__auto__,value__39603__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__39602__auto__,value__39603__auto__);
});

sablono.core.file_field39683.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field39683);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field39686 = (function sablono$core$hidden_field39686(var_args){
var G__39688 = arguments.length;
switch (G__39688) {
case 1:
return sablono.core.hidden_field39686.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field39686.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field39686.cljs$core$IFn$_invoke$arity$1 = (function (name__39602__auto__){
return sablono.core.hidden_field39686.call(null,name__39602__auto__,null);
});

sablono.core.hidden_field39686.cljs$core$IFn$_invoke$arity$2 = (function (name__39602__auto__,value__39603__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__39602__auto__,value__39603__auto__);
});

sablono.core.hidden_field39686.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field39686);

/**
 * Creates a month input field.
 */
sablono.core.month_field39689 = (function sablono$core$month_field39689(var_args){
var G__39691 = arguments.length;
switch (G__39691) {
case 1:
return sablono.core.month_field39689.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field39689.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field39689.cljs$core$IFn$_invoke$arity$1 = (function (name__39602__auto__){
return sablono.core.month_field39689.call(null,name__39602__auto__,null);
});

sablono.core.month_field39689.cljs$core$IFn$_invoke$arity$2 = (function (name__39602__auto__,value__39603__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__39602__auto__,value__39603__auto__);
});

sablono.core.month_field39689.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field39689);

/**
 * Creates a number input field.
 */
sablono.core.number_field39692 = (function sablono$core$number_field39692(var_args){
var G__39694 = arguments.length;
switch (G__39694) {
case 1:
return sablono.core.number_field39692.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field39692.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field39692.cljs$core$IFn$_invoke$arity$1 = (function (name__39602__auto__){
return sablono.core.number_field39692.call(null,name__39602__auto__,null);
});

sablono.core.number_field39692.cljs$core$IFn$_invoke$arity$2 = (function (name__39602__auto__,value__39603__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__39602__auto__,value__39603__auto__);
});

sablono.core.number_field39692.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field39692);

/**
 * Creates a password input field.
 */
sablono.core.password_field39695 = (function sablono$core$password_field39695(var_args){
var G__39697 = arguments.length;
switch (G__39697) {
case 1:
return sablono.core.password_field39695.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field39695.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field39695.cljs$core$IFn$_invoke$arity$1 = (function (name__39602__auto__){
return sablono.core.password_field39695.call(null,name__39602__auto__,null);
});

sablono.core.password_field39695.cljs$core$IFn$_invoke$arity$2 = (function (name__39602__auto__,value__39603__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__39602__auto__,value__39603__auto__);
});

sablono.core.password_field39695.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field39695);

/**
 * Creates a range input field.
 */
sablono.core.range_field39698 = (function sablono$core$range_field39698(var_args){
var G__39700 = arguments.length;
switch (G__39700) {
case 1:
return sablono.core.range_field39698.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field39698.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field39698.cljs$core$IFn$_invoke$arity$1 = (function (name__39602__auto__){
return sablono.core.range_field39698.call(null,name__39602__auto__,null);
});

sablono.core.range_field39698.cljs$core$IFn$_invoke$arity$2 = (function (name__39602__auto__,value__39603__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__39602__auto__,value__39603__auto__);
});

sablono.core.range_field39698.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field39698);

/**
 * Creates a search input field.
 */
sablono.core.search_field39701 = (function sablono$core$search_field39701(var_args){
var G__39703 = arguments.length;
switch (G__39703) {
case 1:
return sablono.core.search_field39701.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field39701.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field39701.cljs$core$IFn$_invoke$arity$1 = (function (name__39602__auto__){
return sablono.core.search_field39701.call(null,name__39602__auto__,null);
});

sablono.core.search_field39701.cljs$core$IFn$_invoke$arity$2 = (function (name__39602__auto__,value__39603__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__39602__auto__,value__39603__auto__);
});

sablono.core.search_field39701.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field39701);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field39704 = (function sablono$core$tel_field39704(var_args){
var G__39706 = arguments.length;
switch (G__39706) {
case 1:
return sablono.core.tel_field39704.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field39704.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field39704.cljs$core$IFn$_invoke$arity$1 = (function (name__39602__auto__){
return sablono.core.tel_field39704.call(null,name__39602__auto__,null);
});

sablono.core.tel_field39704.cljs$core$IFn$_invoke$arity$2 = (function (name__39602__auto__,value__39603__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__39602__auto__,value__39603__auto__);
});

sablono.core.tel_field39704.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field39704);

/**
 * Creates a text input field.
 */
sablono.core.text_field39707 = (function sablono$core$text_field39707(var_args){
var G__39709 = arguments.length;
switch (G__39709) {
case 1:
return sablono.core.text_field39707.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field39707.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field39707.cljs$core$IFn$_invoke$arity$1 = (function (name__39602__auto__){
return sablono.core.text_field39707.call(null,name__39602__auto__,null);
});

sablono.core.text_field39707.cljs$core$IFn$_invoke$arity$2 = (function (name__39602__auto__,value__39603__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__39602__auto__,value__39603__auto__);
});

sablono.core.text_field39707.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field39707);

/**
 * Creates a time input field.
 */
sablono.core.time_field39710 = (function sablono$core$time_field39710(var_args){
var G__39712 = arguments.length;
switch (G__39712) {
case 1:
return sablono.core.time_field39710.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field39710.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field39710.cljs$core$IFn$_invoke$arity$1 = (function (name__39602__auto__){
return sablono.core.time_field39710.call(null,name__39602__auto__,null);
});

sablono.core.time_field39710.cljs$core$IFn$_invoke$arity$2 = (function (name__39602__auto__,value__39603__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__39602__auto__,value__39603__auto__);
});

sablono.core.time_field39710.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field39710);

/**
 * Creates a url input field.
 */
sablono.core.url_field39713 = (function sablono$core$url_field39713(var_args){
var G__39715 = arguments.length;
switch (G__39715) {
case 1:
return sablono.core.url_field39713.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field39713.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field39713.cljs$core$IFn$_invoke$arity$1 = (function (name__39602__auto__){
return sablono.core.url_field39713.call(null,name__39602__auto__,null);
});

sablono.core.url_field39713.cljs$core$IFn$_invoke$arity$2 = (function (name__39602__auto__,value__39603__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__39602__auto__,value__39603__auto__);
});

sablono.core.url_field39713.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field39713);

/**
 * Creates a week input field.
 */
sablono.core.week_field39716 = (function sablono$core$week_field39716(var_args){
var G__39718 = arguments.length;
switch (G__39718) {
case 1:
return sablono.core.week_field39716.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field39716.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field39716.cljs$core$IFn$_invoke$arity$1 = (function (name__39602__auto__){
return sablono.core.week_field39716.call(null,name__39602__auto__,null);
});

sablono.core.week_field39716.cljs$core$IFn$_invoke$arity$2 = (function (name__39602__auto__,value__39603__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__39602__auto__,value__39603__auto__);
});

sablono.core.week_field39716.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field39716);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box39736 = (function sablono$core$check_box39736(var_args){
var G__39738 = arguments.length;
switch (G__39738) {
case 1:
return sablono.core.check_box39736.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box39736.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box39736.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box39736.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box39736.call(null,name,null);
});

sablono.core.check_box39736.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box39736.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box39736.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__36925__auto__ = value;
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box39736.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box39736);
/**
 * Creates a radio button.
 */
sablono.core.radio_button39740 = (function sablono$core$radio_button39740(var_args){
var G__39742 = arguments.length;
switch (G__39742) {
case 1:
return sablono.core.radio_button39740.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button39740.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button39740.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button39740.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button39740.call(null,group,null);
});

sablono.core.radio_button39740.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button39740.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button39740.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__36925__auto__ = value;
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button39740.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button39740);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options39744 = (function sablono$core$select_options39744(coll){
var iter__37807__auto__ = (function sablono$core$select_options39744_$_iter__39745(s__39746){
return (new cljs.core.LazySeq(null,(function (){
var s__39746__$1 = s__39746;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__39746__$1);
if(temp__5459__auto__){
var s__39746__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39746__$2)){
var c__37805__auto__ = cljs.core.chunk_first.call(null,s__39746__$2);
var size__37806__auto__ = cljs.core.count.call(null,c__37805__auto__);
var b__39748 = cljs.core.chunk_buffer.call(null,size__37806__auto__);
if((function (){var i__39747 = (0);
while(true){
if((i__39747 < size__37806__auto__)){
var x = cljs.core._nth.call(null,c__37805__auto__,i__39747);
cljs.core.chunk_append.call(null,b__39748,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__39749 = x;
var text = cljs.core.nth.call(null,vec__39749,(0),null);
var val = cljs.core.nth.call(null,vec__39749,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__39749,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options39744.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__39755 = (i__39747 + (1));
i__39747 = G__39755;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39748),sablono$core$select_options39744_$_iter__39745.call(null,cljs.core.chunk_rest.call(null,s__39746__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39748),null);
}
} else {
var x = cljs.core.first.call(null,s__39746__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__39752 = x;
var text = cljs.core.nth.call(null,vec__39752,(0),null);
var val = cljs.core.nth.call(null,vec__39752,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__39752,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options39744.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options39744_$_iter__39745.call(null,cljs.core.rest.call(null,s__39746__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__37807__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options39744);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down39756 = (function sablono$core$drop_down39756(var_args){
var G__39758 = arguments.length;
switch (G__39758) {
case 2:
return sablono.core.drop_down39756.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down39756.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down39756.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down39756.call(null,name,options,null);
});

sablono.core.drop_down39756.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down39756.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down39756);
/**
 * Creates a text area element.
 */
sablono.core.text_area39760 = (function sablono$core$text_area39760(var_args){
var G__39762 = arguments.length;
switch (G__39762) {
case 1:
return sablono.core.text_area39760.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area39760.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area39760.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area39760.call(null,name,null);
});

sablono.core.text_area39760.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__36925__auto__ = value;
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area39760.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area39760);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label39764 = (function sablono$core$label39764(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label39764);
/**
 * Creates a submit button.
 */
sablono.core.submit_button39765 = (function sablono$core$submit_button39765(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button39765);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button39766 = (function sablono$core$reset_button39766(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button39766);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to39767 = (function sablono$core$form_to39767(var_args){
var args__38211__auto__ = [];
var len__38204__auto___39774 = arguments.length;
var i__38205__auto___39775 = (0);
while(true){
if((i__38205__auto___39775 < len__38204__auto___39774)){
args__38211__auto__.push((arguments[i__38205__auto___39775]));

var G__39776 = (i__38205__auto___39775 + (1));
i__38205__auto___39775 = G__39776;
continue;
} else {
}
break;
}

var argseq__38212__auto__ = ((((1) < args__38211__auto__.length))?(new cljs.core.IndexedSeq(args__38211__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to39767.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38212__auto__);
});

sablono.core.form_to39767.cljs$core$IFn$_invoke$arity$variadic = (function (p__39770,body){
var vec__39771 = p__39770;
var method = cljs.core.nth.call(null,vec__39771,(0),null);
var action = cljs.core.nth.call(null,vec__39771,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to39767.cljs$lang$maxFixedArity = (1);

sablono.core.form_to39767.cljs$lang$applyTo = (function (seq39768){
var G__39769 = cljs.core.first.call(null,seq39768);
var seq39768__$1 = cljs.core.next.call(null,seq39768);
return sablono.core.form_to39767.cljs$core$IFn$_invoke$arity$variadic(G__39769,seq39768__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to39767);

//# sourceMappingURL=core.js.map?rel=1517117172886
