// Compiled by ClojureScript 1.9.494 {}
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
return (function (p1__75572_SHARP_,p2__75571_SHARP_){
return p2__75571_SHARP_.call(null,p1__75572_SHARP_);
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
return (function (p1__75574_SHARP_,p2__75573_SHARP_){
return p2__75573_SHARP_.call(null,old_state,p1__75574_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__35887__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__75575_SHARP_){
return p1__75575_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__75580 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__75580,(0),null);
var next_state = cljs.core.nth.call(null,vec__75580,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__75576_SHARP_){
return p1__75576_SHARP_.call(null,state);
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
var G__75583__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__75583 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__75584__i = 0, G__75584__a = new Array(arguments.length -  0);
while (G__75584__i < G__75584__a.length) {G__75584__a[G__75584__i] = arguments[G__75584__i + 0]; ++G__75584__i;}
  args = new cljs.core.IndexedSeq(G__75584__a,0);
} 
return G__75583__delegate.call(this,args);};
G__75583.cljs$lang$maxFixedArity = 0;
G__75583.cljs$lang$applyTo = (function (arglist__75585){
var args = cljs.core.seq(arglist__75585);
return G__75583__delegate(args);
});
G__75583.cljs$core$IFn$_invoke$arity$variadic = G__75583__delegate;
return G__75583;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__75586__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__75586 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__75587__i = 0, G__75587__a = new Array(arguments.length -  0);
while (G__75587__i < G__75587__a.length) {G__75587__a[G__75587__i] = arguments[G__75587__i + 0]; ++G__75587__i;}
  args = new cljs.core.IndexedSeq(G__75587__a,0);
} 
return G__75586__delegate.call(this,args);};
G__75586.cljs$lang$maxFixedArity = 0;
G__75586.cljs$lang$applyTo = (function (arglist__75588){
var args = cljs.core.seq(arglist__75588);
return G__75586__delegate(args);
});
G__75586.cljs$core$IFn$_invoke$arity$variadic = G__75586__delegate;
return G__75586;
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
var G__75589__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__75589 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__75590__i = 0, G__75590__a = new Array(arguments.length -  0);
while (G__75590__i < G__75590__a.length) {G__75590__a[G__75590__i] = arguments[G__75590__i + 0]; ++G__75590__i;}
  args = new cljs.core.IndexedSeq(G__75590__a,0);
} 
return G__75589__delegate.call(this,args);};
G__75589.cljs$lang$maxFixedArity = 0;
G__75589.cljs$lang$applyTo = (function (arglist__75591){
var args = cljs.core.seq(arglist__75591);
return G__75589__delegate(args);
});
G__75589.cljs$core$IFn$_invoke$arity$variadic = G__75589__delegate;
return G__75589;
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
rum.core.schedule = (function (){var or__35887__auto__ = (function (){var and__35875__auto__ = typeof window !== 'undefined';
if(and__35875__auto__){
var or__35887__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
var or__35887__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__35887__auto____$1)){
return or__35887__auto____$1;
} else {
var or__35887__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__35887__auto____$2)){
return or__35887__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__35875__auto__;
}
})();
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return ((function (or__35887__auto__){
return (function (p1__75592_SHARP_){
return setTimeout(p1__75592_SHARP_,(16));
});
;})(or__35887__auto__))
}
})();
rum.core.batch = (function (){var or__35887__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
var or__35887__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__35887__auto____$1)){
return or__35887__auto____$1;
} else {
return ((function (or__35887__auto____$1,or__35887__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__35887__auto____$1,or__35887__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__75599 = cljs.core.seq.call(null,queue);
var chunk__75601 = null;
var count__75602 = (0);
var i__75603 = (0);
while(true){
if((i__75603 < count__75602)){
var comp = cljs.core._nth.call(null,chunk__75601,i__75603);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__75605 = seq__75599;
var G__75606 = chunk__75601;
var G__75607 = count__75602;
var G__75608 = (i__75603 + (1));
seq__75599 = G__75605;
chunk__75601 = G__75606;
count__75602 = G__75607;
i__75603 = G__75608;
continue;
} else {
var G__75609 = seq__75599;
var G__75610 = chunk__75601;
var G__75611 = count__75602;
var G__75612 = (i__75603 + (1));
seq__75599 = G__75609;
chunk__75601 = G__75610;
count__75602 = G__75611;
i__75603 = G__75612;
continue;
}
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__75599);
if(temp__6753__auto__){
var seq__75599__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75599__$1)){
var c__36798__auto__ = cljs.core.chunk_first.call(null,seq__75599__$1);
var G__75613 = cljs.core.chunk_rest.call(null,seq__75599__$1);
var G__75614 = c__36798__auto__;
var G__75615 = cljs.core.count.call(null,c__36798__auto__);
var G__75616 = (0);
seq__75599 = G__75613;
chunk__75601 = G__75614;
count__75602 = G__75615;
i__75603 = G__75616;
continue;
} else {
var comp = cljs.core.first.call(null,seq__75599__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__75617 = cljs.core.next.call(null,seq__75599__$1);
var G__75618 = null;
var G__75619 = (0);
var G__75620 = (0);
seq__75599 = G__75617;
chunk__75601 = G__75618;
count__75602 = G__75619;
i__75603 = G__75620;
continue;
} else {
var G__75621 = cljs.core.next.call(null,seq__75599__$1);
var G__75622 = null;
var G__75623 = (0);
var G__75624 = (0);
seq__75599 = G__75621;
chunk__75601 = G__75622;
count__75602 = G__75623;
i__75603 = G__75624;
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
var args75625 = [];
var len__37108__auto___75628 = arguments.length;
var i__37109__auto___75629 = (0);
while(true){
if((i__37109__auto___75629 < len__37108__auto___75628)){
args75625.push((arguments[i__37109__auto___75629]));

var G__75630 = (i__37109__auto___75629 + (1));
i__37109__auto___75629 = G__75630;
continue;
} else {
}
break;
}

var G__75627 = args75625.length;
switch (G__75627) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args75625.length)].join('')));

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
var _STAR_reactions_STAR_75632 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__75633 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__75633,(0),null);
var next_state = cljs.core.nth.call(null,vec__75633,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__75636_75648 = cljs.core.seq.call(null,old_reactions);
var chunk__75637_75649 = null;
var count__75638_75650 = (0);
var i__75639_75651 = (0);
while(true){
if((i__75639_75651 < count__75638_75650)){
var ref_75652 = cljs.core._nth.call(null,chunk__75637_75649,i__75639_75651);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_75652)){
} else {
cljs.core.remove_watch.call(null,ref_75652,key);
}

var G__75653 = seq__75636_75648;
var G__75654 = chunk__75637_75649;
var G__75655 = count__75638_75650;
var G__75656 = (i__75639_75651 + (1));
seq__75636_75648 = G__75653;
chunk__75637_75649 = G__75654;
count__75638_75650 = G__75655;
i__75639_75651 = G__75656;
continue;
} else {
var temp__6753__auto___75657 = cljs.core.seq.call(null,seq__75636_75648);
if(temp__6753__auto___75657){
var seq__75636_75658__$1 = temp__6753__auto___75657;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75636_75658__$1)){
var c__36798__auto___75659 = cljs.core.chunk_first.call(null,seq__75636_75658__$1);
var G__75660 = cljs.core.chunk_rest.call(null,seq__75636_75658__$1);
var G__75661 = c__36798__auto___75659;
var G__75662 = cljs.core.count.call(null,c__36798__auto___75659);
var G__75663 = (0);
seq__75636_75648 = G__75660;
chunk__75637_75649 = G__75661;
count__75638_75650 = G__75662;
i__75639_75651 = G__75663;
continue;
} else {
var ref_75664 = cljs.core.first.call(null,seq__75636_75658__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_75664)){
} else {
cljs.core.remove_watch.call(null,ref_75664,key);
}

var G__75665 = cljs.core.next.call(null,seq__75636_75658__$1);
var G__75666 = null;
var G__75667 = (0);
var G__75668 = (0);
seq__75636_75648 = G__75665;
chunk__75637_75649 = G__75666;
count__75638_75650 = G__75667;
i__75639_75651 = G__75668;
continue;
}
} else {
}
}
break;
}

var seq__75640_75669 = cljs.core.seq.call(null,new_reactions);
var chunk__75641_75670 = null;
var count__75642_75671 = (0);
var i__75643_75672 = (0);
while(true){
if((i__75643_75672 < count__75642_75671)){
var ref_75673 = cljs.core._nth.call(null,chunk__75641_75670,i__75643_75672);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_75673)){
} else {
cljs.core.add_watch.call(null,ref_75673,key,((function (seq__75640_75669,chunk__75641_75670,count__75642_75671,i__75643_75672,ref_75673,comp,old_reactions,vec__75633,dom,next_state,new_reactions,key,_STAR_reactions_STAR_75632){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__75640_75669,chunk__75641_75670,count__75642_75671,i__75643_75672,ref_75673,comp,old_reactions,vec__75633,dom,next_state,new_reactions,key,_STAR_reactions_STAR_75632))
);
}

var G__75674 = seq__75640_75669;
var G__75675 = chunk__75641_75670;
var G__75676 = count__75642_75671;
var G__75677 = (i__75643_75672 + (1));
seq__75640_75669 = G__75674;
chunk__75641_75670 = G__75675;
count__75642_75671 = G__75676;
i__75643_75672 = G__75677;
continue;
} else {
var temp__6753__auto___75678 = cljs.core.seq.call(null,seq__75640_75669);
if(temp__6753__auto___75678){
var seq__75640_75679__$1 = temp__6753__auto___75678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75640_75679__$1)){
var c__36798__auto___75680 = cljs.core.chunk_first.call(null,seq__75640_75679__$1);
var G__75681 = cljs.core.chunk_rest.call(null,seq__75640_75679__$1);
var G__75682 = c__36798__auto___75680;
var G__75683 = cljs.core.count.call(null,c__36798__auto___75680);
var G__75684 = (0);
seq__75640_75669 = G__75681;
chunk__75641_75670 = G__75682;
count__75642_75671 = G__75683;
i__75643_75672 = G__75684;
continue;
} else {
var ref_75685 = cljs.core.first.call(null,seq__75640_75679__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_75685)){
} else {
cljs.core.add_watch.call(null,ref_75685,key,((function (seq__75640_75669,chunk__75641_75670,count__75642_75671,i__75643_75672,ref_75685,seq__75640_75679__$1,temp__6753__auto___75678,comp,old_reactions,vec__75633,dom,next_state,new_reactions,key,_STAR_reactions_STAR_75632){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__75640_75669,chunk__75641_75670,count__75642_75671,i__75643_75672,ref_75685,seq__75640_75679__$1,temp__6753__auto___75678,comp,old_reactions,vec__75633,dom,next_state,new_reactions,key,_STAR_reactions_STAR_75632))
);
}

var G__75686 = cljs.core.next.call(null,seq__75640_75679__$1);
var G__75687 = null;
var G__75688 = (0);
var G__75689 = (0);
seq__75640_75669 = G__75686;
chunk__75641_75670 = G__75687;
count__75642_75671 = G__75688;
i__75643_75672 = G__75689;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_75632;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_75690 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__75644_75691 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__75645_75692 = null;
var count__75646_75693 = (0);
var i__75647_75694 = (0);
while(true){
if((i__75647_75694 < count__75646_75693)){
var ref_75695 = cljs.core._nth.call(null,chunk__75645_75692,i__75647_75694);
cljs.core.remove_watch.call(null,ref_75695,key_75690);

var G__75696 = seq__75644_75691;
var G__75697 = chunk__75645_75692;
var G__75698 = count__75646_75693;
var G__75699 = (i__75647_75694 + (1));
seq__75644_75691 = G__75696;
chunk__75645_75692 = G__75697;
count__75646_75693 = G__75698;
i__75647_75694 = G__75699;
continue;
} else {
var temp__6753__auto___75700 = cljs.core.seq.call(null,seq__75644_75691);
if(temp__6753__auto___75700){
var seq__75644_75701__$1 = temp__6753__auto___75700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75644_75701__$1)){
var c__36798__auto___75702 = cljs.core.chunk_first.call(null,seq__75644_75701__$1);
var G__75703 = cljs.core.chunk_rest.call(null,seq__75644_75701__$1);
var G__75704 = c__36798__auto___75702;
var G__75705 = cljs.core.count.call(null,c__36798__auto___75702);
var G__75706 = (0);
seq__75644_75691 = G__75703;
chunk__75645_75692 = G__75704;
count__75646_75693 = G__75705;
i__75647_75694 = G__75706;
continue;
} else {
var ref_75707 = cljs.core.first.call(null,seq__75644_75701__$1);
cljs.core.remove_watch.call(null,ref_75707,key_75690);

var G__75708 = cljs.core.next.call(null,seq__75644_75701__$1);
var G__75709 = null;
var G__75710 = (0);
var G__75711 = (0);
seq__75644_75691 = G__75708;
chunk__75645_75692 = G__75709;
count__75646_75693 = G__75710;
i__75647_75694 = G__75711;
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rum.core/react is only supported in conjunction with rum.core/reactive"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("*reactions*")].join('')));
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
var args__37115__auto__ = [];
var len__37108__auto___75718 = arguments.length;
var i__37109__auto___75719 = (0);
while(true){
if((i__37109__auto___75719 < len__37108__auto___75718)){
args__37115__auto__.push((arguments[i__37109__auto___75719]));

var G__75720 = (i__37109__auto___75719 + (1));
i__37109__auto___75719 = G__75720;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((2) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37116__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__75715){
var map__75716 = p__75715;
var map__75716__$1 = ((((!((map__75716 == null)))?((((map__75716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75716.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75716):map__75716);
var options = map__75716__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq75712){
var G__75713 = cljs.core.first.call(null,seq75712);
var seq75712__$1 = cljs.core.next.call(null,seq75712);
var G__75714 = cljs.core.first.call(null,seq75712__$1);
var seq75712__$2 = cljs.core.next.call(null,seq75712__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__75713,G__75714,seq75712__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__37115__auto__ = [];
var len__37108__auto___75724 = arguments.length;
var i__37109__auto___75725 = (0);
while(true){
if((i__37109__auto___75725 < len__37108__auto___75724)){
args__37115__auto__.push((arguments[i__37109__auto___75725]));

var G__75726 = (i__37109__auto___75725 + (1));
i__37109__auto___75725 = G__75726;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((2) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37116__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq75721){
var G__75722 = cljs.core.first.call(null,seq75721);
var seq75721__$1 = cljs.core.next.call(null,seq75721);
var G__75723 = cljs.core.first.call(null,seq75721__$1);
var seq75721__$2 = cljs.core.next.call(null,seq75721__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__75722,G__75723,seq75721__$2);
});


//# sourceMappingURL=core.js.map?rel=1512968107883