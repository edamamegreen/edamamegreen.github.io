// Compiled by ClojureScript 1.9.946 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__40190_SHARP_,p2__40189_SHARP_){
return p2__40189_SHARP_.call(null,p1__40190_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
return React.createClass(cljs.core.clj__GT_js.call(null,rum.util.filter_vals.call(null,cljs.core.some_QMARK_,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"getChildContext","getChildContext",-1321948108),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),display_name,((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,(next_props[":rum/initial-state"]));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__40192_SHARP_,p2__40191_SHARP_){
return p2__40191_SHARP_.call(null,old_state,p1__40192_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__36925__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__40193_SHARP_){
return p1__40193_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__40195 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__40195,(0),null);
var next_state = cljs.core.nth.call(null,vec__40195,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__40194_SHARP_){
return p1__40194_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var props = this$.props;
var state = rum.util.call_all.call(null,cljs.core.assoc.call(null,(props[":rum/initial-state"]),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props);
return ({":rum/state": cljs.core.volatile_BANG_.call(null,state)});
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
)]),class_props))));
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__40198__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__40198 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40199__i = 0, G__40199__a = new Array(arguments.length -  0);
while (G__40199__i < G__40199__a.length) {G__40199__a[G__40199__i] = arguments[G__40199__i + 0]; ++G__40199__i;}
  args = new cljs.core.IndexedSeq(G__40199__a,0,null);
} 
return G__40198__delegate.call(this,args);};
G__40198.cljs$lang$maxFixedArity = 0;
G__40198.cljs$lang$applyTo = (function (arglist__40200){
var args = cljs.core.seq(arglist__40200);
return G__40198__delegate(args);
});
G__40198.cljs$core$IFn$_invoke$arity$variadic = G__40198__delegate;
return G__40198;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__40201__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__40201 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40202__i = 0, G__40202__a = new Array(arguments.length -  0);
while (G__40202__i < G__40202__a.length) {G__40202__a[G__40202__i] = arguments[G__40202__i + 0]; ++G__40202__i;}
  args = new cljs.core.IndexedSeq(G__40202__a,0,null);
} 
return G__40201__delegate.call(this,args);};
G__40201.cljs$lang$maxFixedArity = 0;
G__40201.cljs$lang$applyTo = (function (arglist__40203){
var args = cljs.core.seq(arglist__40203);
return G__40201__delegate(args);
});
G__40201.cljs$core$IFn$_invoke$arity$variadic = G__40201__delegate;
return G__40201;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__40204__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__40204 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40205__i = 0, G__40205__a = new Array(arguments.length -  0);
while (G__40205__i < G__40205__a.length) {G__40205__a[G__40205__i] = arguments[G__40205__i + 0]; ++G__40205__i;}
  args = new cljs.core.IndexedSeq(G__40205__a,0,null);
} 
return G__40204__delegate.call(this,args);};
G__40204.cljs$lang$maxFixedArity = 0;
G__40204.cljs$lang$applyTo = (function (arglist__40206){
var args = cljs.core.seq(arglist__40206);
return G__40204__delegate(args);
});
G__40204.cljs$core$IFn$_invoke$arity$variadic = G__40204__delegate;
return G__40204;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__36925__auto__ = (function (){var and__36913__auto__ = typeof window !== 'undefined';
if(and__36913__auto__){
var or__36925__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
var or__36925__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__36925__auto____$1)){
return or__36925__auto____$1;
} else {
var or__36925__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__36925__auto____$2)){
return or__36925__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__36913__auto__;
}
})();
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
return ((function (or__36925__auto__){
return (function (p1__40207_SHARP_){
return setTimeout(p1__40207_SHARP_,(16));
});
;})(or__36925__auto__))
}
})();
rum.core.batch = (function (){var or__36925__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
var or__36925__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__36925__auto____$1)){
return or__36925__auto____$1;
} else {
return ((function (or__36925__auto____$1,or__36925__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__36925__auto____$1,or__36925__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__40208 = cljs.core.seq.call(null,queue);
var chunk__40210 = null;
var count__40211 = (0);
var i__40212 = (0);
while(true){
if((i__40212 < count__40211)){
var comp = cljs.core._nth.call(null,chunk__40210,i__40212);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__40214 = seq__40208;
var G__40215 = chunk__40210;
var G__40216 = count__40211;
var G__40217 = (i__40212 + (1));
seq__40208 = G__40214;
chunk__40210 = G__40215;
count__40211 = G__40216;
i__40212 = G__40217;
continue;
} else {
var G__40218 = seq__40208;
var G__40219 = chunk__40210;
var G__40220 = count__40211;
var G__40221 = (i__40212 + (1));
seq__40208 = G__40218;
chunk__40210 = G__40219;
count__40211 = G__40220;
i__40212 = G__40221;
continue;
}
} else {
var temp__5459__auto__ = cljs.core.seq.call(null,seq__40208);
if(temp__5459__auto__){
var seq__40208__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40208__$1)){
var c__37856__auto__ = cljs.core.chunk_first.call(null,seq__40208__$1);
var G__40222 = cljs.core.chunk_rest.call(null,seq__40208__$1);
var G__40223 = c__37856__auto__;
var G__40224 = cljs.core.count.call(null,c__37856__auto__);
var G__40225 = (0);
seq__40208 = G__40222;
chunk__40210 = G__40223;
count__40211 = G__40224;
i__40212 = G__40225;
continue;
} else {
var comp = cljs.core.first.call(null,seq__40208__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__40226 = cljs.core.next.call(null,seq__40208__$1);
var G__40227 = null;
var G__40228 = (0);
var G__40229 = (0);
seq__40208 = G__40226;
chunk__40210 = G__40227;
count__40211 = G__40228;
i__40212 = G__40229;
continue;
} else {
var G__40230 = cljs.core.next.call(null,seq__40208__$1);
var G__40231 = null;
var G__40232 = (0);
var G__40233 = (0);
seq__40208 = G__40230;
chunk__40210 = G__40231;
count__40211 = G__40232;
i__40212 = G__40233;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var G__40235 = arguments.length;
switch (G__40235) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_40237 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__40238 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__40238,(0),null);
var next_state = cljs.core.nth.call(null,vec__40238,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__40241_40253 = cljs.core.seq.call(null,old_reactions);
var chunk__40242_40254 = null;
var count__40243_40255 = (0);
var i__40244_40256 = (0);
while(true){
if((i__40244_40256 < count__40243_40255)){
var ref_40257 = cljs.core._nth.call(null,chunk__40242_40254,i__40244_40256);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_40257)){
} else {
cljs.core.remove_watch.call(null,ref_40257,key);
}

var G__40258 = seq__40241_40253;
var G__40259 = chunk__40242_40254;
var G__40260 = count__40243_40255;
var G__40261 = (i__40244_40256 + (1));
seq__40241_40253 = G__40258;
chunk__40242_40254 = G__40259;
count__40243_40255 = G__40260;
i__40244_40256 = G__40261;
continue;
} else {
var temp__5459__auto___40262 = cljs.core.seq.call(null,seq__40241_40253);
if(temp__5459__auto___40262){
var seq__40241_40263__$1 = temp__5459__auto___40262;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40241_40263__$1)){
var c__37856__auto___40264 = cljs.core.chunk_first.call(null,seq__40241_40263__$1);
var G__40265 = cljs.core.chunk_rest.call(null,seq__40241_40263__$1);
var G__40266 = c__37856__auto___40264;
var G__40267 = cljs.core.count.call(null,c__37856__auto___40264);
var G__40268 = (0);
seq__40241_40253 = G__40265;
chunk__40242_40254 = G__40266;
count__40243_40255 = G__40267;
i__40244_40256 = G__40268;
continue;
} else {
var ref_40269 = cljs.core.first.call(null,seq__40241_40263__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_40269)){
} else {
cljs.core.remove_watch.call(null,ref_40269,key);
}

var G__40270 = cljs.core.next.call(null,seq__40241_40263__$1);
var G__40271 = null;
var G__40272 = (0);
var G__40273 = (0);
seq__40241_40253 = G__40270;
chunk__40242_40254 = G__40271;
count__40243_40255 = G__40272;
i__40244_40256 = G__40273;
continue;
}
} else {
}
}
break;
}

var seq__40245_40274 = cljs.core.seq.call(null,new_reactions);
var chunk__40246_40275 = null;
var count__40247_40276 = (0);
var i__40248_40277 = (0);
while(true){
if((i__40248_40277 < count__40247_40276)){
var ref_40278 = cljs.core._nth.call(null,chunk__40246_40275,i__40248_40277);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_40278)){
} else {
cljs.core.add_watch.call(null,ref_40278,key,((function (seq__40245_40274,chunk__40246_40275,count__40247_40276,i__40248_40277,ref_40278,comp,old_reactions,vec__40238,dom,next_state,new_reactions,key,_STAR_reactions_STAR_40237){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__40245_40274,chunk__40246_40275,count__40247_40276,i__40248_40277,ref_40278,comp,old_reactions,vec__40238,dom,next_state,new_reactions,key,_STAR_reactions_STAR_40237))
);
}

var G__40279 = seq__40245_40274;
var G__40280 = chunk__40246_40275;
var G__40281 = count__40247_40276;
var G__40282 = (i__40248_40277 + (1));
seq__40245_40274 = G__40279;
chunk__40246_40275 = G__40280;
count__40247_40276 = G__40281;
i__40248_40277 = G__40282;
continue;
} else {
var temp__5459__auto___40283 = cljs.core.seq.call(null,seq__40245_40274);
if(temp__5459__auto___40283){
var seq__40245_40284__$1 = temp__5459__auto___40283;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40245_40284__$1)){
var c__37856__auto___40285 = cljs.core.chunk_first.call(null,seq__40245_40284__$1);
var G__40286 = cljs.core.chunk_rest.call(null,seq__40245_40284__$1);
var G__40287 = c__37856__auto___40285;
var G__40288 = cljs.core.count.call(null,c__37856__auto___40285);
var G__40289 = (0);
seq__40245_40274 = G__40286;
chunk__40246_40275 = G__40287;
count__40247_40276 = G__40288;
i__40248_40277 = G__40289;
continue;
} else {
var ref_40290 = cljs.core.first.call(null,seq__40245_40284__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_40290)){
} else {
cljs.core.add_watch.call(null,ref_40290,key,((function (seq__40245_40274,chunk__40246_40275,count__40247_40276,i__40248_40277,ref_40290,seq__40245_40284__$1,temp__5459__auto___40283,comp,old_reactions,vec__40238,dom,next_state,new_reactions,key,_STAR_reactions_STAR_40237){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__40245_40274,chunk__40246_40275,count__40247_40276,i__40248_40277,ref_40290,seq__40245_40284__$1,temp__5459__auto___40283,comp,old_reactions,vec__40238,dom,next_state,new_reactions,key,_STAR_reactions_STAR_40237))
);
}

var G__40291 = cljs.core.next.call(null,seq__40245_40284__$1);
var G__40292 = null;
var G__40293 = (0);
var G__40294 = (0);
seq__40245_40274 = G__40291;
chunk__40246_40275 = G__40292;
count__40247_40276 = G__40293;
i__40248_40277 = G__40294;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_40237;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_40295 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__40249_40296 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__40250_40297 = null;
var count__40251_40298 = (0);
var i__40252_40299 = (0);
while(true){
if((i__40252_40299 < count__40251_40298)){
var ref_40300 = cljs.core._nth.call(null,chunk__40250_40297,i__40252_40299);
cljs.core.remove_watch.call(null,ref_40300,key_40295);

var G__40301 = seq__40249_40296;
var G__40302 = chunk__40250_40297;
var G__40303 = count__40251_40298;
var G__40304 = (i__40252_40299 + (1));
seq__40249_40296 = G__40301;
chunk__40250_40297 = G__40302;
count__40251_40298 = G__40303;
i__40252_40299 = G__40304;
continue;
} else {
var temp__5459__auto___40305 = cljs.core.seq.call(null,seq__40249_40296);
if(temp__5459__auto___40305){
var seq__40249_40306__$1 = temp__5459__auto___40305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40249_40306__$1)){
var c__37856__auto___40307 = cljs.core.chunk_first.call(null,seq__40249_40306__$1);
var G__40308 = cljs.core.chunk_rest.call(null,seq__40249_40306__$1);
var G__40309 = c__37856__auto___40307;
var G__40310 = cljs.core.count.call(null,c__37856__auto___40307);
var G__40311 = (0);
seq__40249_40296 = G__40308;
chunk__40250_40297 = G__40309;
count__40251_40298 = G__40310;
i__40252_40299 = G__40311;
continue;
} else {
var ref_40312 = cljs.core.first.call(null,seq__40249_40306__$1);
cljs.core.remove_watch.call(null,ref_40312,key_40295);

var G__40313 = cljs.core.next.call(null,seq__40249_40306__$1);
var G__40314 = null;
var G__40315 = (0);
var G__40316 = (0);
seq__40249_40296 = G__40313;
chunk__40250_40297 = G__40314;
count__40251_40298 = G__40315;
i__40252_40299 = G__40316;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__38211__auto__ = [];
var len__38204__auto___40323 = arguments.length;
var i__38205__auto___40324 = (0);
while(true){
if((i__38205__auto___40324 < len__38204__auto___40323)){
args__38211__auto__.push((arguments[i__38205__auto___40324]));

var G__40325 = (i__38205__auto___40324 + (1));
i__38205__auto___40324 = G__40325;
continue;
} else {
}
break;
}

var argseq__38212__auto__ = ((((2) < args__38211__auto__.length))?(new cljs.core.IndexedSeq(args__38211__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__38212__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__40320){
var map__40321 = p__40320;
var map__40321__$1 = ((((!((map__40321 == null)))?((((map__40321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40321.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40321):map__40321);
var options = map__40321__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq40317){
var G__40318 = cljs.core.first.call(null,seq40317);
var seq40317__$1 = cljs.core.next.call(null,seq40317);
var G__40319 = cljs.core.first.call(null,seq40317__$1);
var seq40317__$2 = cljs.core.next.call(null,seq40317__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__40318,G__40319,seq40317__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__38211__auto__ = [];
var len__38204__auto___40329 = arguments.length;
var i__38205__auto___40330 = (0);
while(true){
if((i__38205__auto___40330 < len__38204__auto___40329)){
args__38211__auto__.push((arguments[i__38205__auto___40330]));

var G__40331 = (i__38205__auto___40330 + (1));
i__38205__auto___40330 = G__40331;
continue;
} else {
}
break;
}

var argseq__38212__auto__ = ((((2) < args__38211__auto__.length))?(new cljs.core.IndexedSeq(args__38211__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__38212__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq40326){
var G__40327 = cljs.core.first.call(null,seq40326);
var seq40326__$1 = cljs.core.next.call(null,seq40326);
var G__40328 = cljs.core.first.call(null,seq40326__$1);
var seq40326__$2 = cljs.core.next.call(null,seq40326__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__40327,G__40328,seq40326__$2);
});


//# sourceMappingURL=core.js.map?rel=1517117173333
