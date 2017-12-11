// Compiled by ClojureScript 1.9.494 {}
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
var G__75277__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__75274 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__75275 = cljs.core.seq.call(null,vec__75274);
var first__75276 = cljs.core.first.call(null,seq__75275);
var seq__75275__$1 = cljs.core.next.call(null,seq__75275);
var tag = first__75276;
var body = seq__75275__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__75277 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__75278__i = 0, G__75278__a = new Array(arguments.length -  0);
while (G__75278__i < G__75278__a.length) {G__75278__a[G__75278__i] = arguments[G__75278__i + 0]; ++G__75278__i;}
  args = new cljs.core.IndexedSeq(G__75278__a,0);
} 
return G__75277__delegate.call(this,args);};
G__75277.cljs$lang$maxFixedArity = 0;
G__75277.cljs$lang$applyTo = (function (arglist__75279){
var args = cljs.core.seq(arglist__75279);
return G__75277__delegate(args);
});
G__75277.cljs$core$IFn$_invoke$arity$variadic = G__75277__delegate;
return G__75277;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__36749__auto__ = (function sablono$core$update_arglists_$_iter__75284(s__75285){
return (new cljs.core.LazySeq(null,(function (){
var s__75285__$1 = s__75285;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__75285__$1);
if(temp__6753__auto__){
var s__75285__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__75285__$2)){
var c__36747__auto__ = cljs.core.chunk_first.call(null,s__75285__$2);
var size__36748__auto__ = cljs.core.count.call(null,c__36747__auto__);
var b__75287 = cljs.core.chunk_buffer.call(null,size__36748__auto__);
if((function (){var i__75286 = (0);
while(true){
if((i__75286 < size__36748__auto__)){
var args = cljs.core._nth.call(null,c__36747__auto__,i__75286);
cljs.core.chunk_append.call(null,b__75287,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__75288 = (i__75286 + (1));
i__75286 = G__75288;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75287),sablono$core$update_arglists_$_iter__75284.call(null,cljs.core.chunk_rest.call(null,s__75285__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75287),null);
}
} else {
var args = cljs.core.first.call(null,s__75285__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__75284.call(null,cljs.core.rest.call(null,s__75285__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36749__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__37115__auto__ = [];
var len__37108__auto___75294 = arguments.length;
var i__37109__auto___75295 = (0);
while(true){
if((i__37109__auto___75295 < len__37108__auto___75294)){
args__37115__auto__.push((arguments[i__37109__auto___75295]));

var G__75296 = (i__37109__auto___75295 + (1));
i__37109__auto___75295 = G__75296;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__36749__auto__ = (function sablono$core$iter__75290(s__75291){
return (new cljs.core.LazySeq(null,(function (){
var s__75291__$1 = s__75291;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__75291__$1);
if(temp__6753__auto__){
var s__75291__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__75291__$2)){
var c__36747__auto__ = cljs.core.chunk_first.call(null,s__75291__$2);
var size__36748__auto__ = cljs.core.count.call(null,c__36747__auto__);
var b__75293 = cljs.core.chunk_buffer.call(null,size__36748__auto__);
if((function (){var i__75292 = (0);
while(true){
if((i__75292 < size__36748__auto__)){
var style = cljs.core._nth.call(null,c__36747__auto__,i__75292);
cljs.core.chunk_append.call(null,b__75293,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__75297 = (i__75292 + (1));
i__75292 = G__75297;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75293),sablono$core$iter__75290.call(null,cljs.core.chunk_rest.call(null,s__75291__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75293),null);
}
} else {
var style = cljs.core.first.call(null,s__75291__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__75290.call(null,cljs.core.rest.call(null,s__75291__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36749__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq75289){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq75289));
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
sablono.core.link_to75298 = (function sablono$core$link_to75298(var_args){
var args__37115__auto__ = [];
var len__37108__auto___75301 = arguments.length;
var i__37109__auto___75302 = (0);
while(true){
if((i__37109__auto___75302 < len__37108__auto___75301)){
args__37115__auto__.push((arguments[i__37109__auto___75302]));

var G__75303 = (i__37109__auto___75302 + (1));
i__37109__auto___75302 = G__75303;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((1) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to75298.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37116__auto__);
});

sablono.core.link_to75298.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to75298.cljs$lang$maxFixedArity = (1);

sablono.core.link_to75298.cljs$lang$applyTo = (function (seq75299){
var G__75300 = cljs.core.first.call(null,seq75299);
var seq75299__$1 = cljs.core.next.call(null,seq75299);
return sablono.core.link_to75298.cljs$core$IFn$_invoke$arity$variadic(G__75300,seq75299__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to75298);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to75304 = (function sablono$core$mail_to75304(var_args){
var args__37115__auto__ = [];
var len__37108__auto___75311 = arguments.length;
var i__37109__auto___75312 = (0);
while(true){
if((i__37109__auto___75312 < len__37108__auto___75311)){
args__37115__auto__.push((arguments[i__37109__auto___75312]));

var G__75313 = (i__37109__auto___75312 + (1));
i__37109__auto___75312 = G__75313;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((1) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to75304.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37116__auto__);
});

sablono.core.mail_to75304.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__75307){
var vec__75308 = p__75307;
var content = cljs.core.nth.call(null,vec__75308,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("mailto:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__35887__auto__ = content;
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to75304.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to75304.cljs$lang$applyTo = (function (seq75305){
var G__75306 = cljs.core.first.call(null,seq75305);
var seq75305__$1 = cljs.core.next.call(null,seq75305);
return sablono.core.mail_to75304.cljs$core$IFn$_invoke$arity$variadic(G__75306,seq75305__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to75304);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list75314 = (function sablono$core$unordered_list75314(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__36749__auto__ = (function sablono$core$unordered_list75314_$_iter__75319(s__75320){
return (new cljs.core.LazySeq(null,(function (){
var s__75320__$1 = s__75320;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__75320__$1);
if(temp__6753__auto__){
var s__75320__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__75320__$2)){
var c__36747__auto__ = cljs.core.chunk_first.call(null,s__75320__$2);
var size__36748__auto__ = cljs.core.count.call(null,c__36747__auto__);
var b__75322 = cljs.core.chunk_buffer.call(null,size__36748__auto__);
if((function (){var i__75321 = (0);
while(true){
if((i__75321 < size__36748__auto__)){
var x = cljs.core._nth.call(null,c__36747__auto__,i__75321);
cljs.core.chunk_append.call(null,b__75322,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__75323 = (i__75321 + (1));
i__75321 = G__75323;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75322),sablono$core$unordered_list75314_$_iter__75319.call(null,cljs.core.chunk_rest.call(null,s__75320__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75322),null);
}
} else {
var x = cljs.core.first.call(null,s__75320__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list75314_$_iter__75319.call(null,cljs.core.rest.call(null,s__75320__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36749__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list75314);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list75324 = (function sablono$core$ordered_list75324(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__36749__auto__ = (function sablono$core$ordered_list75324_$_iter__75329(s__75330){
return (new cljs.core.LazySeq(null,(function (){
var s__75330__$1 = s__75330;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__75330__$1);
if(temp__6753__auto__){
var s__75330__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__75330__$2)){
var c__36747__auto__ = cljs.core.chunk_first.call(null,s__75330__$2);
var size__36748__auto__ = cljs.core.count.call(null,c__36747__auto__);
var b__75332 = cljs.core.chunk_buffer.call(null,size__36748__auto__);
if((function (){var i__75331 = (0);
while(true){
if((i__75331 < size__36748__auto__)){
var x = cljs.core._nth.call(null,c__36747__auto__,i__75331);
cljs.core.chunk_append.call(null,b__75332,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__75333 = (i__75331 + (1));
i__75331 = G__75333;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75332),sablono$core$ordered_list75324_$_iter__75329.call(null,cljs.core.chunk_rest.call(null,s__75330__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75332),null);
}
} else {
var x = cljs.core.first.call(null,s__75330__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list75324_$_iter__75329.call(null,cljs.core.rest.call(null,s__75330__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36749__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list75324);
/**
 * Create an image element.
 */
sablono.core.image75334 = (function sablono$core$image75334(var_args){
var args75335 = [];
var len__37108__auto___75338 = arguments.length;
var i__37109__auto___75339 = (0);
while(true){
if((i__37109__auto___75339 < len__37108__auto___75338)){
args75335.push((arguments[i__37109__auto___75339]));

var G__75340 = (i__37109__auto___75339 + (1));
i__37109__auto___75339 = G__75340;
continue;
} else {
}
break;
}

var G__75337 = args75335.length;
switch (G__75337) {
case 1:
return sablono.core.image75334.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image75334.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75335.length)].join('')));

}
});

sablono.core.image75334.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image75334.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image75334.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image75334);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__75342_SHARP_,p2__75343_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__75342_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__75343_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__75344_SHARP_,p2__75345_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__75344_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__75345_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35887__auto__ = value;
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field75346 = (function sablono$core$color_field75346(var_args){
var args75347 = [];
var len__37108__auto___75414 = arguments.length;
var i__37109__auto___75415 = (0);
while(true){
if((i__37109__auto___75415 < len__37108__auto___75414)){
args75347.push((arguments[i__37109__auto___75415]));

var G__75416 = (i__37109__auto___75415 + (1));
i__37109__auto___75415 = G__75416;
continue;
} else {
}
break;
}

var G__75349 = args75347.length;
switch (G__75349) {
case 1:
return sablono.core.color_field75346.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field75346.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75347.length)].join('')));

}
});

sablono.core.color_field75346.cljs$core$IFn$_invoke$arity$1 = (function (name__37691__auto__){
return sablono.core.color_field75346.call(null,name__37691__auto__,null);
});

sablono.core.color_field75346.cljs$core$IFn$_invoke$arity$2 = (function (name__37691__auto__,value__37692__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__37691__auto__,value__37692__auto__);
});

sablono.core.color_field75346.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field75346);

/**
 * Creates a date input field.
 */
sablono.core.date_field75350 = (function sablono$core$date_field75350(var_args){
var args75351 = [];
var len__37108__auto___75418 = arguments.length;
var i__37109__auto___75419 = (0);
while(true){
if((i__37109__auto___75419 < len__37108__auto___75418)){
args75351.push((arguments[i__37109__auto___75419]));

var G__75420 = (i__37109__auto___75419 + (1));
i__37109__auto___75419 = G__75420;
continue;
} else {
}
break;
}

var G__75353 = args75351.length;
switch (G__75353) {
case 1:
return sablono.core.date_field75350.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field75350.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75351.length)].join('')));

}
});

sablono.core.date_field75350.cljs$core$IFn$_invoke$arity$1 = (function (name__37691__auto__){
return sablono.core.date_field75350.call(null,name__37691__auto__,null);
});

sablono.core.date_field75350.cljs$core$IFn$_invoke$arity$2 = (function (name__37691__auto__,value__37692__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__37691__auto__,value__37692__auto__);
});

sablono.core.date_field75350.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field75350);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field75354 = (function sablono$core$datetime_field75354(var_args){
var args75355 = [];
var len__37108__auto___75422 = arguments.length;
var i__37109__auto___75423 = (0);
while(true){
if((i__37109__auto___75423 < len__37108__auto___75422)){
args75355.push((arguments[i__37109__auto___75423]));

var G__75424 = (i__37109__auto___75423 + (1));
i__37109__auto___75423 = G__75424;
continue;
} else {
}
break;
}

var G__75357 = args75355.length;
switch (G__75357) {
case 1:
return sablono.core.datetime_field75354.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field75354.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75355.length)].join('')));

}
});

sablono.core.datetime_field75354.cljs$core$IFn$_invoke$arity$1 = (function (name__37691__auto__){
return sablono.core.datetime_field75354.call(null,name__37691__auto__,null);
});

sablono.core.datetime_field75354.cljs$core$IFn$_invoke$arity$2 = (function (name__37691__auto__,value__37692__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__37691__auto__,value__37692__auto__);
});

sablono.core.datetime_field75354.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field75354);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field75358 = (function sablono$core$datetime_local_field75358(var_args){
var args75359 = [];
var len__37108__auto___75426 = arguments.length;
var i__37109__auto___75427 = (0);
while(true){
if((i__37109__auto___75427 < len__37108__auto___75426)){
args75359.push((arguments[i__37109__auto___75427]));

var G__75428 = (i__37109__auto___75427 + (1));
i__37109__auto___75427 = G__75428;
continue;
} else {
}
break;
}

var G__75361 = args75359.length;
switch (G__75361) {
case 1:
return sablono.core.datetime_local_field75358.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field75358.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75359.length)].join('')));

}
});

sablono.core.datetime_local_field75358.cljs$core$IFn$_invoke$arity$1 = (function (name__37691__auto__){
return sablono.core.datetime_local_field75358.call(null,name__37691__auto__,null);
});

sablono.core.datetime_local_field75358.cljs$core$IFn$_invoke$arity$2 = (function (name__37691__auto__,value__37692__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__37691__auto__,value__37692__auto__);
});

sablono.core.datetime_local_field75358.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field75358);

/**
 * Creates a email input field.
 */
sablono.core.email_field75362 = (function sablono$core$email_field75362(var_args){
var args75363 = [];
var len__37108__auto___75430 = arguments.length;
var i__37109__auto___75431 = (0);
while(true){
if((i__37109__auto___75431 < len__37108__auto___75430)){
args75363.push((arguments[i__37109__auto___75431]));

var G__75432 = (i__37109__auto___75431 + (1));
i__37109__auto___75431 = G__75432;
continue;
} else {
}
break;
}

var G__75365 = args75363.length;
switch (G__75365) {
case 1:
return sablono.core.email_field75362.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field75362.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75363.length)].join('')));

}
});

sablono.core.email_field75362.cljs$core$IFn$_invoke$arity$1 = (function (name__37691__auto__){
return sablono.core.email_field75362.call(null,name__37691__auto__,null);
});

sablono.core.email_field75362.cljs$core$IFn$_invoke$arity$2 = (function (name__37691__auto__,value__37692__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__37691__auto__,value__37692__auto__);
});

sablono.core.email_field75362.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field75362);

/**
 * Creates a file input field.
 */
sablono.core.file_field75366 = (function sablono$core$file_field75366(var_args){
var args75367 = [];
var len__37108__auto___75434 = arguments.length;
var i__37109__auto___75435 = (0);
while(true){
if((i__37109__auto___75435 < len__37108__auto___75434)){
args75367.push((arguments[i__37109__auto___75435]));

var G__75436 = (i__37109__auto___75435 + (1));
i__37109__auto___75435 = G__75436;
continue;
} else {
}
break;
}

var G__75369 = args75367.length;
switch (G__75369) {
case 1:
return sablono.core.file_field75366.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field75366.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75367.length)].join('')));

}
});

sablono.core.file_field75366.cljs$core$IFn$_invoke$arity$1 = (function (name__37691__auto__){
return sablono.core.file_field75366.call(null,name__37691__auto__,null);
});

sablono.core.file_field75366.cljs$core$IFn$_invoke$arity$2 = (function (name__37691__auto__,value__37692__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__37691__auto__,value__37692__auto__);
});

sablono.core.file_field75366.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field75366);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field75370 = (function sablono$core$hidden_field75370(var_args){
var args75371 = [];
var len__37108__auto___75438 = arguments.length;
var i__37109__auto___75439 = (0);
while(true){
if((i__37109__auto___75439 < len__37108__auto___75438)){
args75371.push((arguments[i__37109__auto___75439]));

var G__75440 = (i__37109__auto___75439 + (1));
i__37109__auto___75439 = G__75440;
continue;
} else {
}
break;
}

var G__75373 = args75371.length;
switch (G__75373) {
case 1:
return sablono.core.hidden_field75370.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field75370.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75371.length)].join('')));

}
});

sablono.core.hidden_field75370.cljs$core$IFn$_invoke$arity$1 = (function (name__37691__auto__){
return sablono.core.hidden_field75370.call(null,name__37691__auto__,null);
});

sablono.core.hidden_field75370.cljs$core$IFn$_invoke$arity$2 = (function (name__37691__auto__,value__37692__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__37691__auto__,value__37692__auto__);
});

sablono.core.hidden_field75370.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field75370);

/**
 * Creates a month input field.
 */
sablono.core.month_field75374 = (function sablono$core$month_field75374(var_args){
var args75375 = [];
var len__37108__auto___75442 = arguments.length;
var i__37109__auto___75443 = (0);
while(true){
if((i__37109__auto___75443 < len__37108__auto___75442)){
args75375.push((arguments[i__37109__auto___75443]));

var G__75444 = (i__37109__auto___75443 + (1));
i__37109__auto___75443 = G__75444;
continue;
} else {
}
break;
}

var G__75377 = args75375.length;
switch (G__75377) {
case 1:
return sablono.core.month_field75374.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field75374.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75375.length)].join('')));

}
});

sablono.core.month_field75374.cljs$core$IFn$_invoke$arity$1 = (function (name__37691__auto__){
return sablono.core.month_field75374.call(null,name__37691__auto__,null);
});

sablono.core.month_field75374.cljs$core$IFn$_invoke$arity$2 = (function (name__37691__auto__,value__37692__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__37691__auto__,value__37692__auto__);
});

sablono.core.month_field75374.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field75374);

/**
 * Creates a number input field.
 */
sablono.core.number_field75378 = (function sablono$core$number_field75378(var_args){
var args75379 = [];
var len__37108__auto___75446 = arguments.length;
var i__37109__auto___75447 = (0);
while(true){
if((i__37109__auto___75447 < len__37108__auto___75446)){
args75379.push((arguments[i__37109__auto___75447]));

var G__75448 = (i__37109__auto___75447 + (1));
i__37109__auto___75447 = G__75448;
continue;
} else {
}
break;
}

var G__75381 = args75379.length;
switch (G__75381) {
case 1:
return sablono.core.number_field75378.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field75378.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75379.length)].join('')));

}
});

sablono.core.number_field75378.cljs$core$IFn$_invoke$arity$1 = (function (name__37691__auto__){
return sablono.core.number_field75378.call(null,name__37691__auto__,null);
});

sablono.core.number_field75378.cljs$core$IFn$_invoke$arity$2 = (function (name__37691__auto__,value__37692__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__37691__auto__,value__37692__auto__);
});

sablono.core.number_field75378.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field75378);

/**
 * Creates a password input field.
 */
sablono.core.password_field75382 = (function sablono$core$password_field75382(var_args){
var args75383 = [];
var len__37108__auto___75450 = arguments.length;
var i__37109__auto___75451 = (0);
while(true){
if((i__37109__auto___75451 < len__37108__auto___75450)){
args75383.push((arguments[i__37109__auto___75451]));

var G__75452 = (i__37109__auto___75451 + (1));
i__37109__auto___75451 = G__75452;
continue;
} else {
}
break;
}

var G__75385 = args75383.length;
switch (G__75385) {
case 1:
return sablono.core.password_field75382.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field75382.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75383.length)].join('')));

}
});

sablono.core.password_field75382.cljs$core$IFn$_invoke$arity$1 = (function (name__37691__auto__){
return sablono.core.password_field75382.call(null,name__37691__auto__,null);
});

sablono.core.password_field75382.cljs$core$IFn$_invoke$arity$2 = (function (name__37691__auto__,value__37692__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__37691__auto__,value__37692__auto__);
});

sablono.core.password_field75382.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field75382);

/**
 * Creates a range input field.
 */
sablono.core.range_field75386 = (function sablono$core$range_field75386(var_args){
var args75387 = [];
var len__37108__auto___75454 = arguments.length;
var i__37109__auto___75455 = (0);
while(true){
if((i__37109__auto___75455 < len__37108__auto___75454)){
args75387.push((arguments[i__37109__auto___75455]));

var G__75456 = (i__37109__auto___75455 + (1));
i__37109__auto___75455 = G__75456;
continue;
} else {
}
break;
}

var G__75389 = args75387.length;
switch (G__75389) {
case 1:
return sablono.core.range_field75386.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field75386.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75387.length)].join('')));

}
});

sablono.core.range_field75386.cljs$core$IFn$_invoke$arity$1 = (function (name__37691__auto__){
return sablono.core.range_field75386.call(null,name__37691__auto__,null);
});

sablono.core.range_field75386.cljs$core$IFn$_invoke$arity$2 = (function (name__37691__auto__,value__37692__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__37691__auto__,value__37692__auto__);
});

sablono.core.range_field75386.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field75386);

/**
 * Creates a search input field.
 */
sablono.core.search_field75390 = (function sablono$core$search_field75390(var_args){
var args75391 = [];
var len__37108__auto___75458 = arguments.length;
var i__37109__auto___75459 = (0);
while(true){
if((i__37109__auto___75459 < len__37108__auto___75458)){
args75391.push((arguments[i__37109__auto___75459]));

var G__75460 = (i__37109__auto___75459 + (1));
i__37109__auto___75459 = G__75460;
continue;
} else {
}
break;
}

var G__75393 = args75391.length;
switch (G__75393) {
case 1:
return sablono.core.search_field75390.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field75390.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75391.length)].join('')));

}
});

sablono.core.search_field75390.cljs$core$IFn$_invoke$arity$1 = (function (name__37691__auto__){
return sablono.core.search_field75390.call(null,name__37691__auto__,null);
});

sablono.core.search_field75390.cljs$core$IFn$_invoke$arity$2 = (function (name__37691__auto__,value__37692__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__37691__auto__,value__37692__auto__);
});

sablono.core.search_field75390.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field75390);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field75394 = (function sablono$core$tel_field75394(var_args){
var args75395 = [];
var len__37108__auto___75462 = arguments.length;
var i__37109__auto___75463 = (0);
while(true){
if((i__37109__auto___75463 < len__37108__auto___75462)){
args75395.push((arguments[i__37109__auto___75463]));

var G__75464 = (i__37109__auto___75463 + (1));
i__37109__auto___75463 = G__75464;
continue;
} else {
}
break;
}

var G__75397 = args75395.length;
switch (G__75397) {
case 1:
return sablono.core.tel_field75394.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field75394.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75395.length)].join('')));

}
});

sablono.core.tel_field75394.cljs$core$IFn$_invoke$arity$1 = (function (name__37691__auto__){
return sablono.core.tel_field75394.call(null,name__37691__auto__,null);
});

sablono.core.tel_field75394.cljs$core$IFn$_invoke$arity$2 = (function (name__37691__auto__,value__37692__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__37691__auto__,value__37692__auto__);
});

sablono.core.tel_field75394.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field75394);

/**
 * Creates a text input field.
 */
sablono.core.text_field75398 = (function sablono$core$text_field75398(var_args){
var args75399 = [];
var len__37108__auto___75466 = arguments.length;
var i__37109__auto___75467 = (0);
while(true){
if((i__37109__auto___75467 < len__37108__auto___75466)){
args75399.push((arguments[i__37109__auto___75467]));

var G__75468 = (i__37109__auto___75467 + (1));
i__37109__auto___75467 = G__75468;
continue;
} else {
}
break;
}

var G__75401 = args75399.length;
switch (G__75401) {
case 1:
return sablono.core.text_field75398.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field75398.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75399.length)].join('')));

}
});

sablono.core.text_field75398.cljs$core$IFn$_invoke$arity$1 = (function (name__37691__auto__){
return sablono.core.text_field75398.call(null,name__37691__auto__,null);
});

sablono.core.text_field75398.cljs$core$IFn$_invoke$arity$2 = (function (name__37691__auto__,value__37692__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__37691__auto__,value__37692__auto__);
});

sablono.core.text_field75398.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field75398);

/**
 * Creates a time input field.
 */
sablono.core.time_field75402 = (function sablono$core$time_field75402(var_args){
var args75403 = [];
var len__37108__auto___75470 = arguments.length;
var i__37109__auto___75471 = (0);
while(true){
if((i__37109__auto___75471 < len__37108__auto___75470)){
args75403.push((arguments[i__37109__auto___75471]));

var G__75472 = (i__37109__auto___75471 + (1));
i__37109__auto___75471 = G__75472;
continue;
} else {
}
break;
}

var G__75405 = args75403.length;
switch (G__75405) {
case 1:
return sablono.core.time_field75402.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field75402.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75403.length)].join('')));

}
});

sablono.core.time_field75402.cljs$core$IFn$_invoke$arity$1 = (function (name__37691__auto__){
return sablono.core.time_field75402.call(null,name__37691__auto__,null);
});

sablono.core.time_field75402.cljs$core$IFn$_invoke$arity$2 = (function (name__37691__auto__,value__37692__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__37691__auto__,value__37692__auto__);
});

sablono.core.time_field75402.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field75402);

/**
 * Creates a url input field.
 */
sablono.core.url_field75406 = (function sablono$core$url_field75406(var_args){
var args75407 = [];
var len__37108__auto___75474 = arguments.length;
var i__37109__auto___75475 = (0);
while(true){
if((i__37109__auto___75475 < len__37108__auto___75474)){
args75407.push((arguments[i__37109__auto___75475]));

var G__75476 = (i__37109__auto___75475 + (1));
i__37109__auto___75475 = G__75476;
continue;
} else {
}
break;
}

var G__75409 = args75407.length;
switch (G__75409) {
case 1:
return sablono.core.url_field75406.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field75406.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75407.length)].join('')));

}
});

sablono.core.url_field75406.cljs$core$IFn$_invoke$arity$1 = (function (name__37691__auto__){
return sablono.core.url_field75406.call(null,name__37691__auto__,null);
});

sablono.core.url_field75406.cljs$core$IFn$_invoke$arity$2 = (function (name__37691__auto__,value__37692__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__37691__auto__,value__37692__auto__);
});

sablono.core.url_field75406.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field75406);

/**
 * Creates a week input field.
 */
sablono.core.week_field75410 = (function sablono$core$week_field75410(var_args){
var args75411 = [];
var len__37108__auto___75478 = arguments.length;
var i__37109__auto___75479 = (0);
while(true){
if((i__37109__auto___75479 < len__37108__auto___75478)){
args75411.push((arguments[i__37109__auto___75479]));

var G__75480 = (i__37109__auto___75479 + (1));
i__37109__auto___75479 = G__75480;
continue;
} else {
}
break;
}

var G__75413 = args75411.length;
switch (G__75413) {
case 1:
return sablono.core.week_field75410.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field75410.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75411.length)].join('')));

}
});

sablono.core.week_field75410.cljs$core$IFn$_invoke$arity$1 = (function (name__37691__auto__){
return sablono.core.week_field75410.call(null,name__37691__auto__,null);
});

sablono.core.week_field75410.cljs$core$IFn$_invoke$arity$2 = (function (name__37691__auto__,value__37692__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__37691__auto__,value__37692__auto__);
});

sablono.core.week_field75410.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field75410);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box75482 = (function sablono$core$check_box75482(var_args){
var args75483 = [];
var len__37108__auto___75486 = arguments.length;
var i__37109__auto___75487 = (0);
while(true){
if((i__37109__auto___75487 < len__37108__auto___75486)){
args75483.push((arguments[i__37109__auto___75487]));

var G__75488 = (i__37109__auto___75487 + (1));
i__37109__auto___75487 = G__75488;
continue;
} else {
}
break;
}

var G__75485 = args75483.length;
switch (G__75485) {
case 1:
return sablono.core.check_box75482.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box75482.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box75482.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75483.length)].join('')));

}
});

sablono.core.check_box75482.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box75482.call(null,name,null);
});

sablono.core.check_box75482.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box75482.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box75482.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35887__auto__ = value;
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box75482.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box75482);
/**
 * Creates a radio button.
 */
sablono.core.radio_button75490 = (function sablono$core$radio_button75490(var_args){
var args75491 = [];
var len__37108__auto___75494 = arguments.length;
var i__37109__auto___75495 = (0);
while(true){
if((i__37109__auto___75495 < len__37108__auto___75494)){
args75491.push((arguments[i__37109__auto___75495]));

var G__75496 = (i__37109__auto___75495 + (1));
i__37109__auto___75495 = G__75496;
continue;
} else {
}
break;
}

var G__75493 = args75491.length;
switch (G__75493) {
case 1:
return sablono.core.radio_button75490.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button75490.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button75490.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75491.length)].join('')));

}
});

sablono.core.radio_button75490.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button75490.call(null,group,null);
});

sablono.core.radio_button75490.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button75490.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button75490.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35887__auto__ = value;
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button75490.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button75490);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options75498 = (function sablono$core$select_options75498(coll){
var iter__36749__auto__ = (function sablono$core$select_options75498_$_iter__75515(s__75516){
return (new cljs.core.LazySeq(null,(function (){
var s__75516__$1 = s__75516;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__75516__$1);
if(temp__6753__auto__){
var s__75516__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__75516__$2)){
var c__36747__auto__ = cljs.core.chunk_first.call(null,s__75516__$2);
var size__36748__auto__ = cljs.core.count.call(null,c__36747__auto__);
var b__75518 = cljs.core.chunk_buffer.call(null,size__36748__auto__);
if((function (){var i__75517 = (0);
while(true){
if((i__75517 < size__36748__auto__)){
var x = cljs.core._nth.call(null,c__36747__auto__,i__75517);
cljs.core.chunk_append.call(null,b__75518,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__75525 = x;
var text = cljs.core.nth.call(null,vec__75525,(0),null);
var val = cljs.core.nth.call(null,vec__75525,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__75525,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options75498.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__75531 = (i__75517 + (1));
i__75517 = G__75531;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75518),sablono$core$select_options75498_$_iter__75515.call(null,cljs.core.chunk_rest.call(null,s__75516__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75518),null);
}
} else {
var x = cljs.core.first.call(null,s__75516__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__75528 = x;
var text = cljs.core.nth.call(null,vec__75528,(0),null);
var val = cljs.core.nth.call(null,vec__75528,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__75528,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options75498.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options75498_$_iter__75515.call(null,cljs.core.rest.call(null,s__75516__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36749__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options75498);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down75532 = (function sablono$core$drop_down75532(var_args){
var args75533 = [];
var len__37108__auto___75536 = arguments.length;
var i__37109__auto___75537 = (0);
while(true){
if((i__37109__auto___75537 < len__37108__auto___75536)){
args75533.push((arguments[i__37109__auto___75537]));

var G__75538 = (i__37109__auto___75537 + (1));
i__37109__auto___75537 = G__75538;
continue;
} else {
}
break;
}

var G__75535 = args75533.length;
switch (G__75535) {
case 2:
return sablono.core.drop_down75532.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down75532.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75533.length)].join('')));

}
});

sablono.core.drop_down75532.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down75532.call(null,name,options,null);
});

sablono.core.drop_down75532.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down75532.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down75532);
/**
 * Creates a text area element.
 */
sablono.core.text_area75540 = (function sablono$core$text_area75540(var_args){
var args75541 = [];
var len__37108__auto___75544 = arguments.length;
var i__37109__auto___75545 = (0);
while(true){
if((i__37109__auto___75545 < len__37108__auto___75544)){
args75541.push((arguments[i__37109__auto___75545]));

var G__75546 = (i__37109__auto___75545 + (1));
i__37109__auto___75545 = G__75546;
continue;
} else {
}
break;
}

var G__75543 = args75541.length;
switch (G__75543) {
case 1:
return sablono.core.text_area75540.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area75540.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75541.length)].join('')));

}
});

sablono.core.text_area75540.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area75540.call(null,name,null);
});

sablono.core.text_area75540.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35887__auto__ = value;
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area75540.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area75540);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label75548 = (function sablono$core$label75548(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label75548);
/**
 * Creates a submit button.
 */
sablono.core.submit_button75549 = (function sablono$core$submit_button75549(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button75549);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button75550 = (function sablono$core$reset_button75550(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button75550);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to75551 = (function sablono$core$form_to75551(var_args){
var args__37115__auto__ = [];
var len__37108__auto___75558 = arguments.length;
var i__37109__auto___75559 = (0);
while(true){
if((i__37109__auto___75559 < len__37108__auto___75558)){
args__37115__auto__.push((arguments[i__37109__auto___75559]));

var G__75560 = (i__37109__auto___75559 + (1));
i__37109__auto___75559 = G__75560;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((1) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to75551.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37116__auto__);
});

sablono.core.form_to75551.cljs$core$IFn$_invoke$arity$variadic = (function (p__75554,body){
var vec__75555 = p__75554;
var method = cljs.core.nth.call(null,vec__75555,(0),null);
var action = cljs.core.nth.call(null,vec__75555,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to75551.cljs$lang$maxFixedArity = (1);

sablono.core.form_to75551.cljs$lang$applyTo = (function (seq75552){
var G__75553 = cljs.core.first.call(null,seq75552);
var seq75552__$1 = cljs.core.next.call(null,seq75552);
return sablono.core.form_to75551.cljs$core$IFn$_invoke$arity$variadic(G__75553,seq75552__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to75551);

//# sourceMappingURL=core.js.map?rel=1512968107523