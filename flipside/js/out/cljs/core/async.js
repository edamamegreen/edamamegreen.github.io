// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args78233 = [];
var len__37108__auto___78239 = arguments.length;
var i__37109__auto___78240 = (0);
while(true){
if((i__37109__auto___78240 < len__37108__auto___78239)){
args78233.push((arguments[i__37109__auto___78240]));

var G__78241 = (i__37109__auto___78240 + (1));
i__37109__auto___78240 = G__78241;
continue;
} else {
}
break;
}

var G__78235 = args78233.length;
switch (G__78235) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args78233.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async78236 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async78236 = (function (f,blockable,meta78237){
this.f = f;
this.blockable = blockable;
this.meta78237 = meta78237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async78236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_78238,meta78237__$1){
var self__ = this;
var _78238__$1 = this;
return (new cljs.core.async.t_cljs$core$async78236(self__.f,self__.blockable,meta78237__$1));
});

cljs.core.async.t_cljs$core$async78236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_78238){
var self__ = this;
var _78238__$1 = this;
return self__.meta78237;
});

cljs.core.async.t_cljs$core$async78236.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async78236.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async78236.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async78236.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async78236.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta78237","meta78237",-1274450064,null)], null);
});

cljs.core.async.t_cljs$core$async78236.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async78236.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async78236";

cljs.core.async.t_cljs$core$async78236.cljs$lang$ctorPrWriter = (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async78236");
});

cljs.core.async.__GT_t_cljs$core$async78236 = (function cljs$core$async$__GT_t_cljs$core$async78236(f__$1,blockable__$1,meta78237){
return (new cljs.core.async.t_cljs$core$async78236(f__$1,blockable__$1,meta78237));
});

}

return (new cljs.core.async.t_cljs$core$async78236(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args78245 = [];
var len__37108__auto___78248 = arguments.length;
var i__37109__auto___78249 = (0);
while(true){
if((i__37109__auto___78249 < len__37108__auto___78248)){
args78245.push((arguments[i__37109__auto___78249]));

var G__78250 = (i__37109__auto___78249 + (1));
i__37109__auto___78249 = G__78250;
continue;
} else {
}
break;
}

var G__78247 = args78245.length;
switch (G__78247) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args78245.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args78252 = [];
var len__37108__auto___78255 = arguments.length;
var i__37109__auto___78256 = (0);
while(true){
if((i__37109__auto___78256 < len__37108__auto___78255)){
args78252.push((arguments[i__37109__auto___78256]));

var G__78257 = (i__37109__auto___78256 + (1));
i__37109__auto___78256 = G__78257;
continue;
} else {
}
break;
}

var G__78254 = args78252.length;
switch (G__78254) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args78252.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args78259 = [];
var len__37108__auto___78262 = arguments.length;
var i__37109__auto___78263 = (0);
while(true){
if((i__37109__auto___78263 < len__37108__auto___78262)){
args78259.push((arguments[i__37109__auto___78263]));

var G__78264 = (i__37109__auto___78263 + (1));
i__37109__auto___78263 = G__78264;
continue;
} else {
}
break;
}

var G__78261 = args78259.length;
switch (G__78261) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args78259.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_78266 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_78266);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_78266,ret){
return (function (){
return fn1.call(null,val_78266);
});})(val_78266,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args78267 = [];
var len__37108__auto___78270 = arguments.length;
var i__37109__auto___78271 = (0);
while(true){
if((i__37109__auto___78271 < len__37108__auto___78270)){
args78267.push((arguments[i__37109__auto___78271]));

var G__78272 = (i__37109__auto___78271 + (1));
i__37109__auto___78271 = G__78272;
continue;
} else {
}
break;
}

var G__78269 = args78267.length;
switch (G__78269) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args78267.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6751__auto__)){
var ret = temp__6751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6751__auto__)){
var retb = temp__6751__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6751__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6751__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__36908__auto___78274 = n;
var x_78275 = (0);
while(true){
if((x_78275 < n__36908__auto___78274)){
(a[x_78275] = (0));

var G__78276 = (x_78275 + (1));
x_78275 = G__78276;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__78277 = (i + (1));
i = G__78277;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async78281 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async78281 = (function (flag,meta78282){
this.flag = flag;
this.meta78282 = meta78282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async78281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_78283,meta78282__$1){
var self__ = this;
var _78283__$1 = this;
return (new cljs.core.async.t_cljs$core$async78281(self__.flag,meta78282__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async78281.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_78283){
var self__ = this;
var _78283__$1 = this;
return self__.meta78282;
});})(flag))
;

cljs.core.async.t_cljs$core$async78281.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async78281.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async78281.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async78281.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async78281.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta78282","meta78282",-528109948,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async78281.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async78281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async78281";

cljs.core.async.t_cljs$core$async78281.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async78281");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async78281 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async78281(flag__$1,meta78282){
return (new cljs.core.async.t_cljs$core$async78281(flag__$1,meta78282));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async78281(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async78287 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async78287 = (function (flag,cb,meta78288){
this.flag = flag;
this.cb = cb;
this.meta78288 = meta78288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async78287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_78289,meta78288__$1){
var self__ = this;
var _78289__$1 = this;
return (new cljs.core.async.t_cljs$core$async78287(self__.flag,self__.cb,meta78288__$1));
});

cljs.core.async.t_cljs$core$async78287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_78289){
var self__ = this;
var _78289__$1 = this;
return self__.meta78288;
});

cljs.core.async.t_cljs$core$async78287.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async78287.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async78287.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async78287.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async78287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta78288","meta78288",1388887601,null)], null);
});

cljs.core.async.t_cljs$core$async78287.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async78287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async78287";

cljs.core.async.t_cljs$core$async78287.cljs$lang$ctorPrWriter = (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async78287");
});

cljs.core.async.__GT_t_cljs$core$async78287 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async78287(flag__$1,cb__$1,meta78288){
return (new cljs.core.async.t_cljs$core$async78287(flag__$1,cb__$1,meta78288));
});

}

return (new cljs.core.async.t_cljs$core$async78287(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__78290_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__78290_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__78291_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__78291_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__35887__auto__ = wport;
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return port;
}
})()], null));
} else {
var G__78292 = (i + (1));
i = G__78292;
continue;
}
} else {
return null;
}
break;
}
})();
var or__35887__auto__ = ret;
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6753__auto__ = (function (){var and__35875__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__35875__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__35875__auto__;
}
})();
if(cljs.core.truth_(temp__6753__auto__)){
var got = temp__6753__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__37115__auto__ = [];
var len__37108__auto___78298 = arguments.length;
var i__37109__auto___78299 = (0);
while(true){
if((i__37109__auto___78299 < len__37108__auto___78298)){
args__37115__auto__.push((arguments[i__37109__auto___78299]));

var G__78300 = (i__37109__auto___78299 + (1));
i__37109__auto___78299 = G__78300;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((1) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37116__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__78295){
var map__78296 = p__78295;
var map__78296__$1 = ((((!((map__78296 == null)))?((((map__78296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78296):map__78296);
var opts = map__78296__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq78293){
var G__78294 = cljs.core.first.call(null,seq78293);
var seq78293__$1 = cljs.core.next.call(null,seq78293);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__78294,seq78293__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args78301 = [];
var len__37108__auto___78351 = arguments.length;
var i__37109__auto___78352 = (0);
while(true){
if((i__37109__auto___78352 < len__37108__auto___78351)){
args78301.push((arguments[i__37109__auto___78352]));

var G__78353 = (i__37109__auto___78352 + (1));
i__37109__auto___78352 = G__78353;
continue;
} else {
}
break;
}

var G__78303 = args78301.length;
switch (G__78303) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args78301.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__40807__auto___78355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto___78355){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto___78355){
return (function (state_78327){
var state_val_78328 = (state_78327[(1)]);
if((state_val_78328 === (7))){
var inst_78323 = (state_78327[(2)]);
var state_78327__$1 = state_78327;
var statearr_78329_78356 = state_78327__$1;
(statearr_78329_78356[(2)] = inst_78323);

(statearr_78329_78356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78328 === (1))){
var state_78327__$1 = state_78327;
var statearr_78330_78357 = state_78327__$1;
(statearr_78330_78357[(2)] = null);

(statearr_78330_78357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78328 === (4))){
var inst_78306 = (state_78327[(7)]);
var inst_78306__$1 = (state_78327[(2)]);
var inst_78307 = (inst_78306__$1 == null);
var state_78327__$1 = (function (){var statearr_78331 = state_78327;
(statearr_78331[(7)] = inst_78306__$1);

return statearr_78331;
})();
if(cljs.core.truth_(inst_78307)){
var statearr_78332_78358 = state_78327__$1;
(statearr_78332_78358[(1)] = (5));

} else {
var statearr_78333_78359 = state_78327__$1;
(statearr_78333_78359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78328 === (13))){
var state_78327__$1 = state_78327;
var statearr_78334_78360 = state_78327__$1;
(statearr_78334_78360[(2)] = null);

(statearr_78334_78360[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78328 === (6))){
var inst_78306 = (state_78327[(7)]);
var state_78327__$1 = state_78327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78327__$1,(11),to,inst_78306);
} else {
if((state_val_78328 === (3))){
var inst_78325 = (state_78327[(2)]);
var state_78327__$1 = state_78327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78327__$1,inst_78325);
} else {
if((state_val_78328 === (12))){
var state_78327__$1 = state_78327;
var statearr_78335_78361 = state_78327__$1;
(statearr_78335_78361[(2)] = null);

(statearr_78335_78361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78328 === (2))){
var state_78327__$1 = state_78327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78327__$1,(4),from);
} else {
if((state_val_78328 === (11))){
var inst_78316 = (state_78327[(2)]);
var state_78327__$1 = state_78327;
if(cljs.core.truth_(inst_78316)){
var statearr_78336_78362 = state_78327__$1;
(statearr_78336_78362[(1)] = (12));

} else {
var statearr_78337_78363 = state_78327__$1;
(statearr_78337_78363[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78328 === (9))){
var state_78327__$1 = state_78327;
var statearr_78338_78364 = state_78327__$1;
(statearr_78338_78364[(2)] = null);

(statearr_78338_78364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78328 === (5))){
var state_78327__$1 = state_78327;
if(cljs.core.truth_(close_QMARK_)){
var statearr_78339_78365 = state_78327__$1;
(statearr_78339_78365[(1)] = (8));

} else {
var statearr_78340_78366 = state_78327__$1;
(statearr_78340_78366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78328 === (14))){
var inst_78321 = (state_78327[(2)]);
var state_78327__$1 = state_78327;
var statearr_78341_78367 = state_78327__$1;
(statearr_78341_78367[(2)] = inst_78321);

(statearr_78341_78367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78328 === (10))){
var inst_78313 = (state_78327[(2)]);
var state_78327__$1 = state_78327;
var statearr_78342_78368 = state_78327__$1;
(statearr_78342_78368[(2)] = inst_78313);

(statearr_78342_78368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78328 === (8))){
var inst_78310 = cljs.core.async.close_BANG_.call(null,to);
var state_78327__$1 = state_78327;
var statearr_78343_78369 = state_78327__$1;
(statearr_78343_78369[(2)] = inst_78310);

(statearr_78343_78369[(1)] = (10));


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
});})(c__40807__auto___78355))
;
return ((function (switch__40784__auto__,c__40807__auto___78355){
return (function() {
var cljs$core$async$state_machine__40785__auto__ = null;
var cljs$core$async$state_machine__40785__auto____0 = (function (){
var statearr_78347 = [null,null,null,null,null,null,null,null];
(statearr_78347[(0)] = cljs$core$async$state_machine__40785__auto__);

(statearr_78347[(1)] = (1));

return statearr_78347;
});
var cljs$core$async$state_machine__40785__auto____1 = (function (state_78327){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_78327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e78348){if((e78348 instanceof Object)){
var ex__40788__auto__ = e78348;
var statearr_78349_78370 = state_78327;
(statearr_78349_78370[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78371 = state_78327;
state_78327 = G__78371;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
cljs$core$async$state_machine__40785__auto__ = function(state_78327){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40785__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40785__auto____1.call(this,state_78327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40785__auto____0;
cljs$core$async$state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40785__auto____1;
return cljs$core$async$state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto___78355))
})();
var state__40809__auto__ = (function (){var statearr_78350 = f__40808__auto__.call(null);
(statearr_78350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto___78355);

return statearr_78350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto___78355))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__78559){
var vec__78560 = p__78559;
var v = cljs.core.nth.call(null,vec__78560,(0),null);
var p = cljs.core.nth.call(null,vec__78560,(1),null);
var job = vec__78560;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__40807__auto___78746 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto___78746,res,vec__78560,v,p,job,jobs,results){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto___78746,res,vec__78560,v,p,job,jobs,results){
return (function (state_78567){
var state_val_78568 = (state_78567[(1)]);
if((state_val_78568 === (1))){
var state_78567__$1 = state_78567;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78567__$1,(2),res,v);
} else {
if((state_val_78568 === (2))){
var inst_78564 = (state_78567[(2)]);
var inst_78565 = cljs.core.async.close_BANG_.call(null,res);
var state_78567__$1 = (function (){var statearr_78569 = state_78567;
(statearr_78569[(7)] = inst_78564);

return statearr_78569;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78567__$1,inst_78565);
} else {
return null;
}
}
});})(c__40807__auto___78746,res,vec__78560,v,p,job,jobs,results))
;
return ((function (switch__40784__auto__,c__40807__auto___78746,res,vec__78560,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____0 = (function (){
var statearr_78573 = [null,null,null,null,null,null,null,null];
(statearr_78573[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__);

(statearr_78573[(1)] = (1));

return statearr_78573;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____1 = (function (state_78567){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_78567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e78574){if((e78574 instanceof Object)){
var ex__40788__auto__ = e78574;
var statearr_78575_78747 = state_78567;
(statearr_78575_78747[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78748 = state_78567;
state_78567 = G__78748;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__ = function(state_78567){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____1.call(this,state_78567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto___78746,res,vec__78560,v,p,job,jobs,results))
})();
var state__40809__auto__ = (function (){var statearr_78576 = f__40808__auto__.call(null);
(statearr_78576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto___78746);

return statearr_78576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto___78746,res,vec__78560,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__78577){
var vec__78578 = p__78577;
var v = cljs.core.nth.call(null,vec__78578,(0),null);
var p = cljs.core.nth.call(null,vec__78578,(1),null);
var job = vec__78578;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__36908__auto___78749 = n;
var __78750 = (0);
while(true){
if((__78750 < n__36908__auto___78749)){
var G__78581_78751 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__78581_78751) {
case "compute":
var c__40807__auto___78753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__78750,c__40807__auto___78753,G__78581_78751,n__36908__auto___78749,jobs,results,process,async){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (__78750,c__40807__auto___78753,G__78581_78751,n__36908__auto___78749,jobs,results,process,async){
return (function (state_78594){
var state_val_78595 = (state_78594[(1)]);
if((state_val_78595 === (1))){
var state_78594__$1 = state_78594;
var statearr_78596_78754 = state_78594__$1;
(statearr_78596_78754[(2)] = null);

(statearr_78596_78754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78595 === (2))){
var state_78594__$1 = state_78594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78594__$1,(4),jobs);
} else {
if((state_val_78595 === (3))){
var inst_78592 = (state_78594[(2)]);
var state_78594__$1 = state_78594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78594__$1,inst_78592);
} else {
if((state_val_78595 === (4))){
var inst_78584 = (state_78594[(2)]);
var inst_78585 = process.call(null,inst_78584);
var state_78594__$1 = state_78594;
if(cljs.core.truth_(inst_78585)){
var statearr_78597_78755 = state_78594__$1;
(statearr_78597_78755[(1)] = (5));

} else {
var statearr_78598_78756 = state_78594__$1;
(statearr_78598_78756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78595 === (5))){
var state_78594__$1 = state_78594;
var statearr_78599_78757 = state_78594__$1;
(statearr_78599_78757[(2)] = null);

(statearr_78599_78757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78595 === (6))){
var state_78594__$1 = state_78594;
var statearr_78600_78758 = state_78594__$1;
(statearr_78600_78758[(2)] = null);

(statearr_78600_78758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78595 === (7))){
var inst_78590 = (state_78594[(2)]);
var state_78594__$1 = state_78594;
var statearr_78601_78759 = state_78594__$1;
(statearr_78601_78759[(2)] = inst_78590);

(statearr_78601_78759[(1)] = (3));


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
});})(__78750,c__40807__auto___78753,G__78581_78751,n__36908__auto___78749,jobs,results,process,async))
;
return ((function (__78750,switch__40784__auto__,c__40807__auto___78753,G__78581_78751,n__36908__auto___78749,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____0 = (function (){
var statearr_78605 = [null,null,null,null,null,null,null];
(statearr_78605[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__);

(statearr_78605[(1)] = (1));

return statearr_78605;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____1 = (function (state_78594){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_78594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e78606){if((e78606 instanceof Object)){
var ex__40788__auto__ = e78606;
var statearr_78607_78760 = state_78594;
(statearr_78607_78760[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78761 = state_78594;
state_78594 = G__78761;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__ = function(state_78594){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____1.call(this,state_78594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__;
})()
;})(__78750,switch__40784__auto__,c__40807__auto___78753,G__78581_78751,n__36908__auto___78749,jobs,results,process,async))
})();
var state__40809__auto__ = (function (){var statearr_78608 = f__40808__auto__.call(null);
(statearr_78608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto___78753);

return statearr_78608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(__78750,c__40807__auto___78753,G__78581_78751,n__36908__auto___78749,jobs,results,process,async))
);


break;
case "async":
var c__40807__auto___78762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__78750,c__40807__auto___78762,G__78581_78751,n__36908__auto___78749,jobs,results,process,async){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (__78750,c__40807__auto___78762,G__78581_78751,n__36908__auto___78749,jobs,results,process,async){
return (function (state_78621){
var state_val_78622 = (state_78621[(1)]);
if((state_val_78622 === (1))){
var state_78621__$1 = state_78621;
var statearr_78623_78763 = state_78621__$1;
(statearr_78623_78763[(2)] = null);

(statearr_78623_78763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78622 === (2))){
var state_78621__$1 = state_78621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78621__$1,(4),jobs);
} else {
if((state_val_78622 === (3))){
var inst_78619 = (state_78621[(2)]);
var state_78621__$1 = state_78621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78621__$1,inst_78619);
} else {
if((state_val_78622 === (4))){
var inst_78611 = (state_78621[(2)]);
var inst_78612 = async.call(null,inst_78611);
var state_78621__$1 = state_78621;
if(cljs.core.truth_(inst_78612)){
var statearr_78624_78764 = state_78621__$1;
(statearr_78624_78764[(1)] = (5));

} else {
var statearr_78625_78765 = state_78621__$1;
(statearr_78625_78765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78622 === (5))){
var state_78621__$1 = state_78621;
var statearr_78626_78766 = state_78621__$1;
(statearr_78626_78766[(2)] = null);

(statearr_78626_78766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78622 === (6))){
var state_78621__$1 = state_78621;
var statearr_78627_78767 = state_78621__$1;
(statearr_78627_78767[(2)] = null);

(statearr_78627_78767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78622 === (7))){
var inst_78617 = (state_78621[(2)]);
var state_78621__$1 = state_78621;
var statearr_78628_78768 = state_78621__$1;
(statearr_78628_78768[(2)] = inst_78617);

(statearr_78628_78768[(1)] = (3));


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
});})(__78750,c__40807__auto___78762,G__78581_78751,n__36908__auto___78749,jobs,results,process,async))
;
return ((function (__78750,switch__40784__auto__,c__40807__auto___78762,G__78581_78751,n__36908__auto___78749,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____0 = (function (){
var statearr_78632 = [null,null,null,null,null,null,null];
(statearr_78632[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__);

(statearr_78632[(1)] = (1));

return statearr_78632;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____1 = (function (state_78621){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_78621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e78633){if((e78633 instanceof Object)){
var ex__40788__auto__ = e78633;
var statearr_78634_78769 = state_78621;
(statearr_78634_78769[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78770 = state_78621;
state_78621 = G__78770;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__ = function(state_78621){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____1.call(this,state_78621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__;
})()
;})(__78750,switch__40784__auto__,c__40807__auto___78762,G__78581_78751,n__36908__auto___78749,jobs,results,process,async))
})();
var state__40809__auto__ = (function (){var statearr_78635 = f__40808__auto__.call(null);
(statearr_78635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto___78762);

return statearr_78635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(__78750,c__40807__auto___78762,G__78581_78751,n__36908__auto___78749,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__78771 = (__78750 + (1));
__78750 = G__78771;
continue;
} else {
}
break;
}

var c__40807__auto___78772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto___78772,jobs,results,process,async){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto___78772,jobs,results,process,async){
return (function (state_78657){
var state_val_78658 = (state_78657[(1)]);
if((state_val_78658 === (1))){
var state_78657__$1 = state_78657;
var statearr_78659_78773 = state_78657__$1;
(statearr_78659_78773[(2)] = null);

(statearr_78659_78773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78658 === (2))){
var state_78657__$1 = state_78657;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78657__$1,(4),from);
} else {
if((state_val_78658 === (3))){
var inst_78655 = (state_78657[(2)]);
var state_78657__$1 = state_78657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78657__$1,inst_78655);
} else {
if((state_val_78658 === (4))){
var inst_78638 = (state_78657[(7)]);
var inst_78638__$1 = (state_78657[(2)]);
var inst_78639 = (inst_78638__$1 == null);
var state_78657__$1 = (function (){var statearr_78660 = state_78657;
(statearr_78660[(7)] = inst_78638__$1);

return statearr_78660;
})();
if(cljs.core.truth_(inst_78639)){
var statearr_78661_78774 = state_78657__$1;
(statearr_78661_78774[(1)] = (5));

} else {
var statearr_78662_78775 = state_78657__$1;
(statearr_78662_78775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78658 === (5))){
var inst_78641 = cljs.core.async.close_BANG_.call(null,jobs);
var state_78657__$1 = state_78657;
var statearr_78663_78776 = state_78657__$1;
(statearr_78663_78776[(2)] = inst_78641);

(statearr_78663_78776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78658 === (6))){
var inst_78643 = (state_78657[(8)]);
var inst_78638 = (state_78657[(7)]);
var inst_78643__$1 = cljs.core.async.chan.call(null,(1));
var inst_78644 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_78645 = [inst_78638,inst_78643__$1];
var inst_78646 = (new cljs.core.PersistentVector(null,2,(5),inst_78644,inst_78645,null));
var state_78657__$1 = (function (){var statearr_78664 = state_78657;
(statearr_78664[(8)] = inst_78643__$1);

return statearr_78664;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78657__$1,(8),jobs,inst_78646);
} else {
if((state_val_78658 === (7))){
var inst_78653 = (state_78657[(2)]);
var state_78657__$1 = state_78657;
var statearr_78665_78777 = state_78657__$1;
(statearr_78665_78777[(2)] = inst_78653);

(statearr_78665_78777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78658 === (8))){
var inst_78643 = (state_78657[(8)]);
var inst_78648 = (state_78657[(2)]);
var state_78657__$1 = (function (){var statearr_78666 = state_78657;
(statearr_78666[(9)] = inst_78648);

return statearr_78666;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78657__$1,(9),results,inst_78643);
} else {
if((state_val_78658 === (9))){
var inst_78650 = (state_78657[(2)]);
var state_78657__$1 = (function (){var statearr_78667 = state_78657;
(statearr_78667[(10)] = inst_78650);

return statearr_78667;
})();
var statearr_78668_78778 = state_78657__$1;
(statearr_78668_78778[(2)] = null);

(statearr_78668_78778[(1)] = (2));


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
});})(c__40807__auto___78772,jobs,results,process,async))
;
return ((function (switch__40784__auto__,c__40807__auto___78772,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____0 = (function (){
var statearr_78672 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_78672[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__);

(statearr_78672[(1)] = (1));

return statearr_78672;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____1 = (function (state_78657){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_78657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e78673){if((e78673 instanceof Object)){
var ex__40788__auto__ = e78673;
var statearr_78674_78779 = state_78657;
(statearr_78674_78779[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78780 = state_78657;
state_78657 = G__78780;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__ = function(state_78657){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____1.call(this,state_78657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto___78772,jobs,results,process,async))
})();
var state__40809__auto__ = (function (){var statearr_78675 = f__40808__auto__.call(null);
(statearr_78675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto___78772);

return statearr_78675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto___78772,jobs,results,process,async))
);


var c__40807__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto__,jobs,results,process,async){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto__,jobs,results,process,async){
return (function (state_78713){
var state_val_78714 = (state_78713[(1)]);
if((state_val_78714 === (7))){
var inst_78709 = (state_78713[(2)]);
var state_78713__$1 = state_78713;
var statearr_78715_78781 = state_78713__$1;
(statearr_78715_78781[(2)] = inst_78709);

(statearr_78715_78781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78714 === (20))){
var state_78713__$1 = state_78713;
var statearr_78716_78782 = state_78713__$1;
(statearr_78716_78782[(2)] = null);

(statearr_78716_78782[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78714 === (1))){
var state_78713__$1 = state_78713;
var statearr_78717_78783 = state_78713__$1;
(statearr_78717_78783[(2)] = null);

(statearr_78717_78783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78714 === (4))){
var inst_78678 = (state_78713[(7)]);
var inst_78678__$1 = (state_78713[(2)]);
var inst_78679 = (inst_78678__$1 == null);
var state_78713__$1 = (function (){var statearr_78718 = state_78713;
(statearr_78718[(7)] = inst_78678__$1);

return statearr_78718;
})();
if(cljs.core.truth_(inst_78679)){
var statearr_78719_78784 = state_78713__$1;
(statearr_78719_78784[(1)] = (5));

} else {
var statearr_78720_78785 = state_78713__$1;
(statearr_78720_78785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78714 === (15))){
var inst_78691 = (state_78713[(8)]);
var state_78713__$1 = state_78713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78713__$1,(18),to,inst_78691);
} else {
if((state_val_78714 === (21))){
var inst_78704 = (state_78713[(2)]);
var state_78713__$1 = state_78713;
var statearr_78721_78786 = state_78713__$1;
(statearr_78721_78786[(2)] = inst_78704);

(statearr_78721_78786[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78714 === (13))){
var inst_78706 = (state_78713[(2)]);
var state_78713__$1 = (function (){var statearr_78722 = state_78713;
(statearr_78722[(9)] = inst_78706);

return statearr_78722;
})();
var statearr_78723_78787 = state_78713__$1;
(statearr_78723_78787[(2)] = null);

(statearr_78723_78787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78714 === (6))){
var inst_78678 = (state_78713[(7)]);
var state_78713__$1 = state_78713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78713__$1,(11),inst_78678);
} else {
if((state_val_78714 === (17))){
var inst_78699 = (state_78713[(2)]);
var state_78713__$1 = state_78713;
if(cljs.core.truth_(inst_78699)){
var statearr_78724_78788 = state_78713__$1;
(statearr_78724_78788[(1)] = (19));

} else {
var statearr_78725_78789 = state_78713__$1;
(statearr_78725_78789[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78714 === (3))){
var inst_78711 = (state_78713[(2)]);
var state_78713__$1 = state_78713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78713__$1,inst_78711);
} else {
if((state_val_78714 === (12))){
var inst_78688 = (state_78713[(10)]);
var state_78713__$1 = state_78713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78713__$1,(14),inst_78688);
} else {
if((state_val_78714 === (2))){
var state_78713__$1 = state_78713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78713__$1,(4),results);
} else {
if((state_val_78714 === (19))){
var state_78713__$1 = state_78713;
var statearr_78726_78790 = state_78713__$1;
(statearr_78726_78790[(2)] = null);

(statearr_78726_78790[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78714 === (11))){
var inst_78688 = (state_78713[(2)]);
var state_78713__$1 = (function (){var statearr_78727 = state_78713;
(statearr_78727[(10)] = inst_78688);

return statearr_78727;
})();
var statearr_78728_78791 = state_78713__$1;
(statearr_78728_78791[(2)] = null);

(statearr_78728_78791[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78714 === (9))){
var state_78713__$1 = state_78713;
var statearr_78729_78792 = state_78713__$1;
(statearr_78729_78792[(2)] = null);

(statearr_78729_78792[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78714 === (5))){
var state_78713__$1 = state_78713;
if(cljs.core.truth_(close_QMARK_)){
var statearr_78730_78793 = state_78713__$1;
(statearr_78730_78793[(1)] = (8));

} else {
var statearr_78731_78794 = state_78713__$1;
(statearr_78731_78794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78714 === (14))){
var inst_78691 = (state_78713[(8)]);
var inst_78693 = (state_78713[(11)]);
var inst_78691__$1 = (state_78713[(2)]);
var inst_78692 = (inst_78691__$1 == null);
var inst_78693__$1 = cljs.core.not.call(null,inst_78692);
var state_78713__$1 = (function (){var statearr_78732 = state_78713;
(statearr_78732[(8)] = inst_78691__$1);

(statearr_78732[(11)] = inst_78693__$1);

return statearr_78732;
})();
if(inst_78693__$1){
var statearr_78733_78795 = state_78713__$1;
(statearr_78733_78795[(1)] = (15));

} else {
var statearr_78734_78796 = state_78713__$1;
(statearr_78734_78796[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78714 === (16))){
var inst_78693 = (state_78713[(11)]);
var state_78713__$1 = state_78713;
var statearr_78735_78797 = state_78713__$1;
(statearr_78735_78797[(2)] = inst_78693);

(statearr_78735_78797[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78714 === (10))){
var inst_78685 = (state_78713[(2)]);
var state_78713__$1 = state_78713;
var statearr_78736_78798 = state_78713__$1;
(statearr_78736_78798[(2)] = inst_78685);

(statearr_78736_78798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78714 === (18))){
var inst_78696 = (state_78713[(2)]);
var state_78713__$1 = state_78713;
var statearr_78737_78799 = state_78713__$1;
(statearr_78737_78799[(2)] = inst_78696);

(statearr_78737_78799[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78714 === (8))){
var inst_78682 = cljs.core.async.close_BANG_.call(null,to);
var state_78713__$1 = state_78713;
var statearr_78738_78800 = state_78713__$1;
(statearr_78738_78800[(2)] = inst_78682);

(statearr_78738_78800[(1)] = (10));


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
});})(c__40807__auto__,jobs,results,process,async))
;
return ((function (switch__40784__auto__,c__40807__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____0 = (function (){
var statearr_78742 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78742[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__);

(statearr_78742[(1)] = (1));

return statearr_78742;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____1 = (function (state_78713){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_78713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e78743){if((e78743 instanceof Object)){
var ex__40788__auto__ = e78743;
var statearr_78744_78801 = state_78713;
(statearr_78744_78801[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78802 = state_78713;
state_78713 = G__78802;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__ = function(state_78713){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____1.call(this,state_78713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40785__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto__,jobs,results,process,async))
})();
var state__40809__auto__ = (function (){var statearr_78745 = f__40808__auto__.call(null);
(statearr_78745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto__);

return statearr_78745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto__,jobs,results,process,async))
);

return c__40807__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args78803 = [];
var len__37108__auto___78806 = arguments.length;
var i__37109__auto___78807 = (0);
while(true){
if((i__37109__auto___78807 < len__37108__auto___78806)){
args78803.push((arguments[i__37109__auto___78807]));

var G__78808 = (i__37109__auto___78807 + (1));
i__37109__auto___78807 = G__78808;
continue;
} else {
}
break;
}

var G__78805 = args78803.length;
switch (G__78805) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args78803.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args78810 = [];
var len__37108__auto___78813 = arguments.length;
var i__37109__auto___78814 = (0);
while(true){
if((i__37109__auto___78814 < len__37108__auto___78813)){
args78810.push((arguments[i__37109__auto___78814]));

var G__78815 = (i__37109__auto___78814 + (1));
i__37109__auto___78814 = G__78815;
continue;
} else {
}
break;
}

var G__78812 = args78810.length;
switch (G__78812) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args78810.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args78817 = [];
var len__37108__auto___78870 = arguments.length;
var i__37109__auto___78871 = (0);
while(true){
if((i__37109__auto___78871 < len__37108__auto___78870)){
args78817.push((arguments[i__37109__auto___78871]));

var G__78872 = (i__37109__auto___78871 + (1));
i__37109__auto___78871 = G__78872;
continue;
} else {
}
break;
}

var G__78819 = args78817.length;
switch (G__78819) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args78817.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__40807__auto___78874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto___78874,tc,fc){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto___78874,tc,fc){
return (function (state_78845){
var state_val_78846 = (state_78845[(1)]);
if((state_val_78846 === (7))){
var inst_78841 = (state_78845[(2)]);
var state_78845__$1 = state_78845;
var statearr_78847_78875 = state_78845__$1;
(statearr_78847_78875[(2)] = inst_78841);

(statearr_78847_78875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78846 === (1))){
var state_78845__$1 = state_78845;
var statearr_78848_78876 = state_78845__$1;
(statearr_78848_78876[(2)] = null);

(statearr_78848_78876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78846 === (4))){
var inst_78822 = (state_78845[(7)]);
var inst_78822__$1 = (state_78845[(2)]);
var inst_78823 = (inst_78822__$1 == null);
var state_78845__$1 = (function (){var statearr_78849 = state_78845;
(statearr_78849[(7)] = inst_78822__$1);

return statearr_78849;
})();
if(cljs.core.truth_(inst_78823)){
var statearr_78850_78877 = state_78845__$1;
(statearr_78850_78877[(1)] = (5));

} else {
var statearr_78851_78878 = state_78845__$1;
(statearr_78851_78878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78846 === (13))){
var state_78845__$1 = state_78845;
var statearr_78852_78879 = state_78845__$1;
(statearr_78852_78879[(2)] = null);

(statearr_78852_78879[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78846 === (6))){
var inst_78822 = (state_78845[(7)]);
var inst_78828 = p.call(null,inst_78822);
var state_78845__$1 = state_78845;
if(cljs.core.truth_(inst_78828)){
var statearr_78853_78880 = state_78845__$1;
(statearr_78853_78880[(1)] = (9));

} else {
var statearr_78854_78881 = state_78845__$1;
(statearr_78854_78881[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78846 === (3))){
var inst_78843 = (state_78845[(2)]);
var state_78845__$1 = state_78845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78845__$1,inst_78843);
} else {
if((state_val_78846 === (12))){
var state_78845__$1 = state_78845;
var statearr_78855_78882 = state_78845__$1;
(statearr_78855_78882[(2)] = null);

(statearr_78855_78882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78846 === (2))){
var state_78845__$1 = state_78845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78845__$1,(4),ch);
} else {
if((state_val_78846 === (11))){
var inst_78822 = (state_78845[(7)]);
var inst_78832 = (state_78845[(2)]);
var state_78845__$1 = state_78845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78845__$1,(8),inst_78832,inst_78822);
} else {
if((state_val_78846 === (9))){
var state_78845__$1 = state_78845;
var statearr_78856_78883 = state_78845__$1;
(statearr_78856_78883[(2)] = tc);

(statearr_78856_78883[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78846 === (5))){
var inst_78825 = cljs.core.async.close_BANG_.call(null,tc);
var inst_78826 = cljs.core.async.close_BANG_.call(null,fc);
var state_78845__$1 = (function (){var statearr_78857 = state_78845;
(statearr_78857[(8)] = inst_78825);

return statearr_78857;
})();
var statearr_78858_78884 = state_78845__$1;
(statearr_78858_78884[(2)] = inst_78826);

(statearr_78858_78884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78846 === (14))){
var inst_78839 = (state_78845[(2)]);
var state_78845__$1 = state_78845;
var statearr_78859_78885 = state_78845__$1;
(statearr_78859_78885[(2)] = inst_78839);

(statearr_78859_78885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78846 === (10))){
var state_78845__$1 = state_78845;
var statearr_78860_78886 = state_78845__$1;
(statearr_78860_78886[(2)] = fc);

(statearr_78860_78886[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78846 === (8))){
var inst_78834 = (state_78845[(2)]);
var state_78845__$1 = state_78845;
if(cljs.core.truth_(inst_78834)){
var statearr_78861_78887 = state_78845__$1;
(statearr_78861_78887[(1)] = (12));

} else {
var statearr_78862_78888 = state_78845__$1;
(statearr_78862_78888[(1)] = (13));

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
});})(c__40807__auto___78874,tc,fc))
;
return ((function (switch__40784__auto__,c__40807__auto___78874,tc,fc){
return (function() {
var cljs$core$async$state_machine__40785__auto__ = null;
var cljs$core$async$state_machine__40785__auto____0 = (function (){
var statearr_78866 = [null,null,null,null,null,null,null,null,null];
(statearr_78866[(0)] = cljs$core$async$state_machine__40785__auto__);

(statearr_78866[(1)] = (1));

return statearr_78866;
});
var cljs$core$async$state_machine__40785__auto____1 = (function (state_78845){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_78845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e78867){if((e78867 instanceof Object)){
var ex__40788__auto__ = e78867;
var statearr_78868_78889 = state_78845;
(statearr_78868_78889[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78890 = state_78845;
state_78845 = G__78890;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
cljs$core$async$state_machine__40785__auto__ = function(state_78845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40785__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40785__auto____1.call(this,state_78845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40785__auto____0;
cljs$core$async$state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40785__auto____1;
return cljs$core$async$state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto___78874,tc,fc))
})();
var state__40809__auto__ = (function (){var statearr_78869 = f__40808__auto__.call(null);
(statearr_78869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto___78874);

return statearr_78869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto___78874,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__40807__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto__){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto__){
return (function (state_78954){
var state_val_78955 = (state_78954[(1)]);
if((state_val_78955 === (7))){
var inst_78950 = (state_78954[(2)]);
var state_78954__$1 = state_78954;
var statearr_78956_78977 = state_78954__$1;
(statearr_78956_78977[(2)] = inst_78950);

(statearr_78956_78977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78955 === (1))){
var inst_78934 = init;
var state_78954__$1 = (function (){var statearr_78957 = state_78954;
(statearr_78957[(7)] = inst_78934);

return statearr_78957;
})();
var statearr_78958_78978 = state_78954__$1;
(statearr_78958_78978[(2)] = null);

(statearr_78958_78978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78955 === (4))){
var inst_78937 = (state_78954[(8)]);
var inst_78937__$1 = (state_78954[(2)]);
var inst_78938 = (inst_78937__$1 == null);
var state_78954__$1 = (function (){var statearr_78959 = state_78954;
(statearr_78959[(8)] = inst_78937__$1);

return statearr_78959;
})();
if(cljs.core.truth_(inst_78938)){
var statearr_78960_78979 = state_78954__$1;
(statearr_78960_78979[(1)] = (5));

} else {
var statearr_78961_78980 = state_78954__$1;
(statearr_78961_78980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78955 === (6))){
var inst_78937 = (state_78954[(8)]);
var inst_78934 = (state_78954[(7)]);
var inst_78941 = (state_78954[(9)]);
var inst_78941__$1 = f.call(null,inst_78934,inst_78937);
var inst_78942 = cljs.core.reduced_QMARK_.call(null,inst_78941__$1);
var state_78954__$1 = (function (){var statearr_78962 = state_78954;
(statearr_78962[(9)] = inst_78941__$1);

return statearr_78962;
})();
if(inst_78942){
var statearr_78963_78981 = state_78954__$1;
(statearr_78963_78981[(1)] = (8));

} else {
var statearr_78964_78982 = state_78954__$1;
(statearr_78964_78982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78955 === (3))){
var inst_78952 = (state_78954[(2)]);
var state_78954__$1 = state_78954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78954__$1,inst_78952);
} else {
if((state_val_78955 === (2))){
var state_78954__$1 = state_78954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78954__$1,(4),ch);
} else {
if((state_val_78955 === (9))){
var inst_78941 = (state_78954[(9)]);
var inst_78934 = inst_78941;
var state_78954__$1 = (function (){var statearr_78965 = state_78954;
(statearr_78965[(7)] = inst_78934);

return statearr_78965;
})();
var statearr_78966_78983 = state_78954__$1;
(statearr_78966_78983[(2)] = null);

(statearr_78966_78983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78955 === (5))){
var inst_78934 = (state_78954[(7)]);
var state_78954__$1 = state_78954;
var statearr_78967_78984 = state_78954__$1;
(statearr_78967_78984[(2)] = inst_78934);

(statearr_78967_78984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78955 === (10))){
var inst_78948 = (state_78954[(2)]);
var state_78954__$1 = state_78954;
var statearr_78968_78985 = state_78954__$1;
(statearr_78968_78985[(2)] = inst_78948);

(statearr_78968_78985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78955 === (8))){
var inst_78941 = (state_78954[(9)]);
var inst_78944 = cljs.core.deref.call(null,inst_78941);
var state_78954__$1 = state_78954;
var statearr_78969_78986 = state_78954__$1;
(statearr_78969_78986[(2)] = inst_78944);

(statearr_78969_78986[(1)] = (10));


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
});})(c__40807__auto__))
;
return ((function (switch__40784__auto__,c__40807__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__40785__auto__ = null;
var cljs$core$async$reduce_$_state_machine__40785__auto____0 = (function (){
var statearr_78973 = [null,null,null,null,null,null,null,null,null,null];
(statearr_78973[(0)] = cljs$core$async$reduce_$_state_machine__40785__auto__);

(statearr_78973[(1)] = (1));

return statearr_78973;
});
var cljs$core$async$reduce_$_state_machine__40785__auto____1 = (function (state_78954){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_78954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e78974){if((e78974 instanceof Object)){
var ex__40788__auto__ = e78974;
var statearr_78975_78987 = state_78954;
(statearr_78975_78987[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78988 = state_78954;
state_78954 = G__78988;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__40785__auto__ = function(state_78954){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__40785__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__40785__auto____1.call(this,state_78954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__40785__auto____0;
cljs$core$async$reduce_$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__40785__auto____1;
return cljs$core$async$reduce_$_state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto__))
})();
var state__40809__auto__ = (function (){var statearr_78976 = f__40808__auto__.call(null);
(statearr_78976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto__);

return statearr_78976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto__))
);

return c__40807__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__40807__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto__,f__$1){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto__,f__$1){
return (function (state_79008){
var state_val_79009 = (state_79008[(1)]);
if((state_val_79009 === (1))){
var inst_79003 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_79008__$1 = state_79008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79008__$1,(2),inst_79003);
} else {
if((state_val_79009 === (2))){
var inst_79005 = (state_79008[(2)]);
var inst_79006 = f__$1.call(null,inst_79005);
var state_79008__$1 = state_79008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79008__$1,inst_79006);
} else {
return null;
}
}
});})(c__40807__auto__,f__$1))
;
return ((function (switch__40784__auto__,c__40807__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__40785__auto__ = null;
var cljs$core$async$transduce_$_state_machine__40785__auto____0 = (function (){
var statearr_79013 = [null,null,null,null,null,null,null];
(statearr_79013[(0)] = cljs$core$async$transduce_$_state_machine__40785__auto__);

(statearr_79013[(1)] = (1));

return statearr_79013;
});
var cljs$core$async$transduce_$_state_machine__40785__auto____1 = (function (state_79008){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_79008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e79014){if((e79014 instanceof Object)){
var ex__40788__auto__ = e79014;
var statearr_79015_79017 = state_79008;
(statearr_79015_79017[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79018 = state_79008;
state_79008 = G__79018;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__40785__auto__ = function(state_79008){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__40785__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__40785__auto____1.call(this,state_79008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__40785__auto____0;
cljs$core$async$transduce_$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__40785__auto____1;
return cljs$core$async$transduce_$_state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto__,f__$1))
})();
var state__40809__auto__ = (function (){var statearr_79016 = f__40808__auto__.call(null);
(statearr_79016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto__);

return statearr_79016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto__,f__$1))
);

return c__40807__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args79019 = [];
var len__37108__auto___79071 = arguments.length;
var i__37109__auto___79072 = (0);
while(true){
if((i__37109__auto___79072 < len__37108__auto___79071)){
args79019.push((arguments[i__37109__auto___79072]));

var G__79073 = (i__37109__auto___79072 + (1));
i__37109__auto___79072 = G__79073;
continue;
} else {
}
break;
}

var G__79021 = args79019.length;
switch (G__79021) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args79019.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__40807__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto__){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto__){
return (function (state_79046){
var state_val_79047 = (state_79046[(1)]);
if((state_val_79047 === (7))){
var inst_79028 = (state_79046[(2)]);
var state_79046__$1 = state_79046;
var statearr_79048_79075 = state_79046__$1;
(statearr_79048_79075[(2)] = inst_79028);

(statearr_79048_79075[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (1))){
var inst_79022 = cljs.core.seq.call(null,coll);
var inst_79023 = inst_79022;
var state_79046__$1 = (function (){var statearr_79049 = state_79046;
(statearr_79049[(7)] = inst_79023);

return statearr_79049;
})();
var statearr_79050_79076 = state_79046__$1;
(statearr_79050_79076[(2)] = null);

(statearr_79050_79076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (4))){
var inst_79023 = (state_79046[(7)]);
var inst_79026 = cljs.core.first.call(null,inst_79023);
var state_79046__$1 = state_79046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79046__$1,(7),ch,inst_79026);
} else {
if((state_val_79047 === (13))){
var inst_79040 = (state_79046[(2)]);
var state_79046__$1 = state_79046;
var statearr_79051_79077 = state_79046__$1;
(statearr_79051_79077[(2)] = inst_79040);

(statearr_79051_79077[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (6))){
var inst_79031 = (state_79046[(2)]);
var state_79046__$1 = state_79046;
if(cljs.core.truth_(inst_79031)){
var statearr_79052_79078 = state_79046__$1;
(statearr_79052_79078[(1)] = (8));

} else {
var statearr_79053_79079 = state_79046__$1;
(statearr_79053_79079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (3))){
var inst_79044 = (state_79046[(2)]);
var state_79046__$1 = state_79046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79046__$1,inst_79044);
} else {
if((state_val_79047 === (12))){
var state_79046__$1 = state_79046;
var statearr_79054_79080 = state_79046__$1;
(statearr_79054_79080[(2)] = null);

(statearr_79054_79080[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (2))){
var inst_79023 = (state_79046[(7)]);
var state_79046__$1 = state_79046;
if(cljs.core.truth_(inst_79023)){
var statearr_79055_79081 = state_79046__$1;
(statearr_79055_79081[(1)] = (4));

} else {
var statearr_79056_79082 = state_79046__$1;
(statearr_79056_79082[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (11))){
var inst_79037 = cljs.core.async.close_BANG_.call(null,ch);
var state_79046__$1 = state_79046;
var statearr_79057_79083 = state_79046__$1;
(statearr_79057_79083[(2)] = inst_79037);

(statearr_79057_79083[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (9))){
var state_79046__$1 = state_79046;
if(cljs.core.truth_(close_QMARK_)){
var statearr_79058_79084 = state_79046__$1;
(statearr_79058_79084[(1)] = (11));

} else {
var statearr_79059_79085 = state_79046__$1;
(statearr_79059_79085[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (5))){
var inst_79023 = (state_79046[(7)]);
var state_79046__$1 = state_79046;
var statearr_79060_79086 = state_79046__$1;
(statearr_79060_79086[(2)] = inst_79023);

(statearr_79060_79086[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (10))){
var inst_79042 = (state_79046[(2)]);
var state_79046__$1 = state_79046;
var statearr_79061_79087 = state_79046__$1;
(statearr_79061_79087[(2)] = inst_79042);

(statearr_79061_79087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (8))){
var inst_79023 = (state_79046[(7)]);
var inst_79033 = cljs.core.next.call(null,inst_79023);
var inst_79023__$1 = inst_79033;
var state_79046__$1 = (function (){var statearr_79062 = state_79046;
(statearr_79062[(7)] = inst_79023__$1);

return statearr_79062;
})();
var statearr_79063_79088 = state_79046__$1;
(statearr_79063_79088[(2)] = null);

(statearr_79063_79088[(1)] = (2));


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
});})(c__40807__auto__))
;
return ((function (switch__40784__auto__,c__40807__auto__){
return (function() {
var cljs$core$async$state_machine__40785__auto__ = null;
var cljs$core$async$state_machine__40785__auto____0 = (function (){
var statearr_79067 = [null,null,null,null,null,null,null,null];
(statearr_79067[(0)] = cljs$core$async$state_machine__40785__auto__);

(statearr_79067[(1)] = (1));

return statearr_79067;
});
var cljs$core$async$state_machine__40785__auto____1 = (function (state_79046){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_79046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e79068){if((e79068 instanceof Object)){
var ex__40788__auto__ = e79068;
var statearr_79069_79089 = state_79046;
(statearr_79069_79089[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79090 = state_79046;
state_79046 = G__79090;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
cljs$core$async$state_machine__40785__auto__ = function(state_79046){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40785__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40785__auto____1.call(this,state_79046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40785__auto____0;
cljs$core$async$state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40785__auto____1;
return cljs$core$async$state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto__))
})();
var state__40809__auto__ = (function (){var statearr_79070 = f__40808__auto__.call(null);
(statearr_79070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto__);

return statearr_79070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto__))
);

return c__40807__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__36605__auto__ = (((_ == null))?null:_);
var m__36606__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,_);
} else {
var m__36606__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__36605__auto__ = (((m == null))?null:m);
var m__36606__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__36606__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__36605__auto__ = (((m == null))?null:m);
var m__36606__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,m,ch);
} else {
var m__36606__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__36605__auto__ = (((m == null))?null:m);
var m__36606__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,m);
} else {
var m__36606__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async79316 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79316 = (function (ch,cs,meta79317){
this.ch = ch;
this.cs = cs;
this.meta79317 = meta79317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async79316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_79318,meta79317__$1){
var self__ = this;
var _79318__$1 = this;
return (new cljs.core.async.t_cljs$core$async79316(self__.ch,self__.cs,meta79317__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async79316.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_79318){
var self__ = this;
var _79318__$1 = this;
return self__.meta79317;
});})(cs))
;

cljs.core.async.t_cljs$core$async79316.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async79316.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async79316.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async79316.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async79316.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async79316.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async79316.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta79317","meta79317",-1207693223,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async79316.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async79316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79316";

cljs.core.async.t_cljs$core$async79316.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async79316");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async79316 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async79316(ch__$1,cs__$1,meta79317){
return (new cljs.core.async.t_cljs$core$async79316(ch__$1,cs__$1,meta79317));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async79316(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__40807__auto___79541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto___79541,cs,m,dchan,dctr,done){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto___79541,cs,m,dchan,dctr,done){
return (function (state_79453){
var state_val_79454 = (state_79453[(1)]);
if((state_val_79454 === (7))){
var inst_79449 = (state_79453[(2)]);
var state_79453__$1 = state_79453;
var statearr_79455_79542 = state_79453__$1;
(statearr_79455_79542[(2)] = inst_79449);

(statearr_79455_79542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (20))){
var inst_79352 = (state_79453[(7)]);
var inst_79364 = cljs.core.first.call(null,inst_79352);
var inst_79365 = cljs.core.nth.call(null,inst_79364,(0),null);
var inst_79366 = cljs.core.nth.call(null,inst_79364,(1),null);
var state_79453__$1 = (function (){var statearr_79456 = state_79453;
(statearr_79456[(8)] = inst_79365);

return statearr_79456;
})();
if(cljs.core.truth_(inst_79366)){
var statearr_79457_79543 = state_79453__$1;
(statearr_79457_79543[(1)] = (22));

} else {
var statearr_79458_79544 = state_79453__$1;
(statearr_79458_79544[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (27))){
var inst_79396 = (state_79453[(9)]);
var inst_79321 = (state_79453[(10)]);
var inst_79394 = (state_79453[(11)]);
var inst_79401 = (state_79453[(12)]);
var inst_79401__$1 = cljs.core._nth.call(null,inst_79394,inst_79396);
var inst_79402 = cljs.core.async.put_BANG_.call(null,inst_79401__$1,inst_79321,done);
var state_79453__$1 = (function (){var statearr_79459 = state_79453;
(statearr_79459[(12)] = inst_79401__$1);

return statearr_79459;
})();
if(cljs.core.truth_(inst_79402)){
var statearr_79460_79545 = state_79453__$1;
(statearr_79460_79545[(1)] = (30));

} else {
var statearr_79461_79546 = state_79453__$1;
(statearr_79461_79546[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (1))){
var state_79453__$1 = state_79453;
var statearr_79462_79547 = state_79453__$1;
(statearr_79462_79547[(2)] = null);

(statearr_79462_79547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (24))){
var inst_79352 = (state_79453[(7)]);
var inst_79371 = (state_79453[(2)]);
var inst_79372 = cljs.core.next.call(null,inst_79352);
var inst_79330 = inst_79372;
var inst_79331 = null;
var inst_79332 = (0);
var inst_79333 = (0);
var state_79453__$1 = (function (){var statearr_79463 = state_79453;
(statearr_79463[(13)] = inst_79371);

(statearr_79463[(14)] = inst_79333);

(statearr_79463[(15)] = inst_79331);

(statearr_79463[(16)] = inst_79332);

(statearr_79463[(17)] = inst_79330);

return statearr_79463;
})();
var statearr_79464_79548 = state_79453__$1;
(statearr_79464_79548[(2)] = null);

(statearr_79464_79548[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (39))){
var state_79453__$1 = state_79453;
var statearr_79468_79549 = state_79453__$1;
(statearr_79468_79549[(2)] = null);

(statearr_79468_79549[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (4))){
var inst_79321 = (state_79453[(10)]);
var inst_79321__$1 = (state_79453[(2)]);
var inst_79322 = (inst_79321__$1 == null);
var state_79453__$1 = (function (){var statearr_79469 = state_79453;
(statearr_79469[(10)] = inst_79321__$1);

return statearr_79469;
})();
if(cljs.core.truth_(inst_79322)){
var statearr_79470_79550 = state_79453__$1;
(statearr_79470_79550[(1)] = (5));

} else {
var statearr_79471_79551 = state_79453__$1;
(statearr_79471_79551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (15))){
var inst_79333 = (state_79453[(14)]);
var inst_79331 = (state_79453[(15)]);
var inst_79332 = (state_79453[(16)]);
var inst_79330 = (state_79453[(17)]);
var inst_79348 = (state_79453[(2)]);
var inst_79349 = (inst_79333 + (1));
var tmp79465 = inst_79331;
var tmp79466 = inst_79332;
var tmp79467 = inst_79330;
var inst_79330__$1 = tmp79467;
var inst_79331__$1 = tmp79465;
var inst_79332__$1 = tmp79466;
var inst_79333__$1 = inst_79349;
var state_79453__$1 = (function (){var statearr_79472 = state_79453;
(statearr_79472[(14)] = inst_79333__$1);

(statearr_79472[(15)] = inst_79331__$1);

(statearr_79472[(18)] = inst_79348);

(statearr_79472[(16)] = inst_79332__$1);

(statearr_79472[(17)] = inst_79330__$1);

return statearr_79472;
})();
var statearr_79473_79552 = state_79453__$1;
(statearr_79473_79552[(2)] = null);

(statearr_79473_79552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (21))){
var inst_79375 = (state_79453[(2)]);
var state_79453__$1 = state_79453;
var statearr_79477_79553 = state_79453__$1;
(statearr_79477_79553[(2)] = inst_79375);

(statearr_79477_79553[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (31))){
var inst_79401 = (state_79453[(12)]);
var inst_79405 = done.call(null,null);
var inst_79406 = cljs.core.async.untap_STAR_.call(null,m,inst_79401);
var state_79453__$1 = (function (){var statearr_79478 = state_79453;
(statearr_79478[(19)] = inst_79405);

return statearr_79478;
})();
var statearr_79479_79554 = state_79453__$1;
(statearr_79479_79554[(2)] = inst_79406);

(statearr_79479_79554[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (32))){
var inst_79396 = (state_79453[(9)]);
var inst_79395 = (state_79453[(20)]);
var inst_79394 = (state_79453[(11)]);
var inst_79393 = (state_79453[(21)]);
var inst_79408 = (state_79453[(2)]);
var inst_79409 = (inst_79396 + (1));
var tmp79474 = inst_79395;
var tmp79475 = inst_79394;
var tmp79476 = inst_79393;
var inst_79393__$1 = tmp79476;
var inst_79394__$1 = tmp79475;
var inst_79395__$1 = tmp79474;
var inst_79396__$1 = inst_79409;
var state_79453__$1 = (function (){var statearr_79480 = state_79453;
(statearr_79480[(9)] = inst_79396__$1);

(statearr_79480[(20)] = inst_79395__$1);

(statearr_79480[(11)] = inst_79394__$1);

(statearr_79480[(22)] = inst_79408);

(statearr_79480[(21)] = inst_79393__$1);

return statearr_79480;
})();
var statearr_79481_79555 = state_79453__$1;
(statearr_79481_79555[(2)] = null);

(statearr_79481_79555[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (40))){
var inst_79421 = (state_79453[(23)]);
var inst_79425 = done.call(null,null);
var inst_79426 = cljs.core.async.untap_STAR_.call(null,m,inst_79421);
var state_79453__$1 = (function (){var statearr_79482 = state_79453;
(statearr_79482[(24)] = inst_79425);

return statearr_79482;
})();
var statearr_79483_79556 = state_79453__$1;
(statearr_79483_79556[(2)] = inst_79426);

(statearr_79483_79556[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (33))){
var inst_79412 = (state_79453[(25)]);
var inst_79414 = cljs.core.chunked_seq_QMARK_.call(null,inst_79412);
var state_79453__$1 = state_79453;
if(inst_79414){
var statearr_79484_79557 = state_79453__$1;
(statearr_79484_79557[(1)] = (36));

} else {
var statearr_79485_79558 = state_79453__$1;
(statearr_79485_79558[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (13))){
var inst_79342 = (state_79453[(26)]);
var inst_79345 = cljs.core.async.close_BANG_.call(null,inst_79342);
var state_79453__$1 = state_79453;
var statearr_79486_79559 = state_79453__$1;
(statearr_79486_79559[(2)] = inst_79345);

(statearr_79486_79559[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (22))){
var inst_79365 = (state_79453[(8)]);
var inst_79368 = cljs.core.async.close_BANG_.call(null,inst_79365);
var state_79453__$1 = state_79453;
var statearr_79487_79560 = state_79453__$1;
(statearr_79487_79560[(2)] = inst_79368);

(statearr_79487_79560[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (36))){
var inst_79412 = (state_79453[(25)]);
var inst_79416 = cljs.core.chunk_first.call(null,inst_79412);
var inst_79417 = cljs.core.chunk_rest.call(null,inst_79412);
var inst_79418 = cljs.core.count.call(null,inst_79416);
var inst_79393 = inst_79417;
var inst_79394 = inst_79416;
var inst_79395 = inst_79418;
var inst_79396 = (0);
var state_79453__$1 = (function (){var statearr_79488 = state_79453;
(statearr_79488[(9)] = inst_79396);

(statearr_79488[(20)] = inst_79395);

(statearr_79488[(11)] = inst_79394);

(statearr_79488[(21)] = inst_79393);

return statearr_79488;
})();
var statearr_79489_79561 = state_79453__$1;
(statearr_79489_79561[(2)] = null);

(statearr_79489_79561[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (41))){
var inst_79412 = (state_79453[(25)]);
var inst_79428 = (state_79453[(2)]);
var inst_79429 = cljs.core.next.call(null,inst_79412);
var inst_79393 = inst_79429;
var inst_79394 = null;
var inst_79395 = (0);
var inst_79396 = (0);
var state_79453__$1 = (function (){var statearr_79490 = state_79453;
(statearr_79490[(9)] = inst_79396);

(statearr_79490[(20)] = inst_79395);

(statearr_79490[(27)] = inst_79428);

(statearr_79490[(11)] = inst_79394);

(statearr_79490[(21)] = inst_79393);

return statearr_79490;
})();
var statearr_79491_79562 = state_79453__$1;
(statearr_79491_79562[(2)] = null);

(statearr_79491_79562[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (43))){
var state_79453__$1 = state_79453;
var statearr_79492_79563 = state_79453__$1;
(statearr_79492_79563[(2)] = null);

(statearr_79492_79563[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (29))){
var inst_79437 = (state_79453[(2)]);
var state_79453__$1 = state_79453;
var statearr_79493_79564 = state_79453__$1;
(statearr_79493_79564[(2)] = inst_79437);

(statearr_79493_79564[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (44))){
var inst_79446 = (state_79453[(2)]);
var state_79453__$1 = (function (){var statearr_79494 = state_79453;
(statearr_79494[(28)] = inst_79446);

return statearr_79494;
})();
var statearr_79495_79565 = state_79453__$1;
(statearr_79495_79565[(2)] = null);

(statearr_79495_79565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (6))){
var inst_79385 = (state_79453[(29)]);
var inst_79384 = cljs.core.deref.call(null,cs);
var inst_79385__$1 = cljs.core.keys.call(null,inst_79384);
var inst_79386 = cljs.core.count.call(null,inst_79385__$1);
var inst_79387 = cljs.core.reset_BANG_.call(null,dctr,inst_79386);
var inst_79392 = cljs.core.seq.call(null,inst_79385__$1);
var inst_79393 = inst_79392;
var inst_79394 = null;
var inst_79395 = (0);
var inst_79396 = (0);
var state_79453__$1 = (function (){var statearr_79496 = state_79453;
(statearr_79496[(9)] = inst_79396);

(statearr_79496[(20)] = inst_79395);

(statearr_79496[(29)] = inst_79385__$1);

(statearr_79496[(30)] = inst_79387);

(statearr_79496[(11)] = inst_79394);

(statearr_79496[(21)] = inst_79393);

return statearr_79496;
})();
var statearr_79497_79566 = state_79453__$1;
(statearr_79497_79566[(2)] = null);

(statearr_79497_79566[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (28))){
var inst_79412 = (state_79453[(25)]);
var inst_79393 = (state_79453[(21)]);
var inst_79412__$1 = cljs.core.seq.call(null,inst_79393);
var state_79453__$1 = (function (){var statearr_79498 = state_79453;
(statearr_79498[(25)] = inst_79412__$1);

return statearr_79498;
})();
if(inst_79412__$1){
var statearr_79499_79567 = state_79453__$1;
(statearr_79499_79567[(1)] = (33));

} else {
var statearr_79500_79568 = state_79453__$1;
(statearr_79500_79568[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (25))){
var inst_79396 = (state_79453[(9)]);
var inst_79395 = (state_79453[(20)]);
var inst_79398 = (inst_79396 < inst_79395);
var inst_79399 = inst_79398;
var state_79453__$1 = state_79453;
if(cljs.core.truth_(inst_79399)){
var statearr_79501_79569 = state_79453__$1;
(statearr_79501_79569[(1)] = (27));

} else {
var statearr_79502_79570 = state_79453__$1;
(statearr_79502_79570[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (34))){
var state_79453__$1 = state_79453;
var statearr_79503_79571 = state_79453__$1;
(statearr_79503_79571[(2)] = null);

(statearr_79503_79571[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (17))){
var state_79453__$1 = state_79453;
var statearr_79504_79572 = state_79453__$1;
(statearr_79504_79572[(2)] = null);

(statearr_79504_79572[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (3))){
var inst_79451 = (state_79453[(2)]);
var state_79453__$1 = state_79453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79453__$1,inst_79451);
} else {
if((state_val_79454 === (12))){
var inst_79380 = (state_79453[(2)]);
var state_79453__$1 = state_79453;
var statearr_79505_79573 = state_79453__$1;
(statearr_79505_79573[(2)] = inst_79380);

(statearr_79505_79573[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (2))){
var state_79453__$1 = state_79453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79453__$1,(4),ch);
} else {
if((state_val_79454 === (23))){
var state_79453__$1 = state_79453;
var statearr_79506_79574 = state_79453__$1;
(statearr_79506_79574[(2)] = null);

(statearr_79506_79574[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (35))){
var inst_79435 = (state_79453[(2)]);
var state_79453__$1 = state_79453;
var statearr_79507_79575 = state_79453__$1;
(statearr_79507_79575[(2)] = inst_79435);

(statearr_79507_79575[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (19))){
var inst_79352 = (state_79453[(7)]);
var inst_79356 = cljs.core.chunk_first.call(null,inst_79352);
var inst_79357 = cljs.core.chunk_rest.call(null,inst_79352);
var inst_79358 = cljs.core.count.call(null,inst_79356);
var inst_79330 = inst_79357;
var inst_79331 = inst_79356;
var inst_79332 = inst_79358;
var inst_79333 = (0);
var state_79453__$1 = (function (){var statearr_79508 = state_79453;
(statearr_79508[(14)] = inst_79333);

(statearr_79508[(15)] = inst_79331);

(statearr_79508[(16)] = inst_79332);

(statearr_79508[(17)] = inst_79330);

return statearr_79508;
})();
var statearr_79509_79576 = state_79453__$1;
(statearr_79509_79576[(2)] = null);

(statearr_79509_79576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (11))){
var inst_79352 = (state_79453[(7)]);
var inst_79330 = (state_79453[(17)]);
var inst_79352__$1 = cljs.core.seq.call(null,inst_79330);
var state_79453__$1 = (function (){var statearr_79510 = state_79453;
(statearr_79510[(7)] = inst_79352__$1);

return statearr_79510;
})();
if(inst_79352__$1){
var statearr_79511_79577 = state_79453__$1;
(statearr_79511_79577[(1)] = (16));

} else {
var statearr_79512_79578 = state_79453__$1;
(statearr_79512_79578[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (9))){
var inst_79382 = (state_79453[(2)]);
var state_79453__$1 = state_79453;
var statearr_79513_79579 = state_79453__$1;
(statearr_79513_79579[(2)] = inst_79382);

(statearr_79513_79579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (5))){
var inst_79328 = cljs.core.deref.call(null,cs);
var inst_79329 = cljs.core.seq.call(null,inst_79328);
var inst_79330 = inst_79329;
var inst_79331 = null;
var inst_79332 = (0);
var inst_79333 = (0);
var state_79453__$1 = (function (){var statearr_79514 = state_79453;
(statearr_79514[(14)] = inst_79333);

(statearr_79514[(15)] = inst_79331);

(statearr_79514[(16)] = inst_79332);

(statearr_79514[(17)] = inst_79330);

return statearr_79514;
})();
var statearr_79515_79580 = state_79453__$1;
(statearr_79515_79580[(2)] = null);

(statearr_79515_79580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (14))){
var state_79453__$1 = state_79453;
var statearr_79516_79581 = state_79453__$1;
(statearr_79516_79581[(2)] = null);

(statearr_79516_79581[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (45))){
var inst_79443 = (state_79453[(2)]);
var state_79453__$1 = state_79453;
var statearr_79517_79582 = state_79453__$1;
(statearr_79517_79582[(2)] = inst_79443);

(statearr_79517_79582[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (26))){
var inst_79385 = (state_79453[(29)]);
var inst_79439 = (state_79453[(2)]);
var inst_79440 = cljs.core.seq.call(null,inst_79385);
var state_79453__$1 = (function (){var statearr_79518 = state_79453;
(statearr_79518[(31)] = inst_79439);

return statearr_79518;
})();
if(inst_79440){
var statearr_79519_79583 = state_79453__$1;
(statearr_79519_79583[(1)] = (42));

} else {
var statearr_79520_79584 = state_79453__$1;
(statearr_79520_79584[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (16))){
var inst_79352 = (state_79453[(7)]);
var inst_79354 = cljs.core.chunked_seq_QMARK_.call(null,inst_79352);
var state_79453__$1 = state_79453;
if(inst_79354){
var statearr_79521_79585 = state_79453__$1;
(statearr_79521_79585[(1)] = (19));

} else {
var statearr_79522_79586 = state_79453__$1;
(statearr_79522_79586[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (38))){
var inst_79432 = (state_79453[(2)]);
var state_79453__$1 = state_79453;
var statearr_79523_79587 = state_79453__$1;
(statearr_79523_79587[(2)] = inst_79432);

(statearr_79523_79587[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (30))){
var state_79453__$1 = state_79453;
var statearr_79524_79588 = state_79453__$1;
(statearr_79524_79588[(2)] = null);

(statearr_79524_79588[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (10))){
var inst_79333 = (state_79453[(14)]);
var inst_79331 = (state_79453[(15)]);
var inst_79341 = cljs.core._nth.call(null,inst_79331,inst_79333);
var inst_79342 = cljs.core.nth.call(null,inst_79341,(0),null);
var inst_79343 = cljs.core.nth.call(null,inst_79341,(1),null);
var state_79453__$1 = (function (){var statearr_79525 = state_79453;
(statearr_79525[(26)] = inst_79342);

return statearr_79525;
})();
if(cljs.core.truth_(inst_79343)){
var statearr_79526_79589 = state_79453__$1;
(statearr_79526_79589[(1)] = (13));

} else {
var statearr_79527_79590 = state_79453__$1;
(statearr_79527_79590[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (18))){
var inst_79378 = (state_79453[(2)]);
var state_79453__$1 = state_79453;
var statearr_79528_79591 = state_79453__$1;
(statearr_79528_79591[(2)] = inst_79378);

(statearr_79528_79591[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (42))){
var state_79453__$1 = state_79453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79453__$1,(45),dchan);
} else {
if((state_val_79454 === (37))){
var inst_79321 = (state_79453[(10)]);
var inst_79421 = (state_79453[(23)]);
var inst_79412 = (state_79453[(25)]);
var inst_79421__$1 = cljs.core.first.call(null,inst_79412);
var inst_79422 = cljs.core.async.put_BANG_.call(null,inst_79421__$1,inst_79321,done);
var state_79453__$1 = (function (){var statearr_79529 = state_79453;
(statearr_79529[(23)] = inst_79421__$1);

return statearr_79529;
})();
if(cljs.core.truth_(inst_79422)){
var statearr_79530_79592 = state_79453__$1;
(statearr_79530_79592[(1)] = (39));

} else {
var statearr_79531_79593 = state_79453__$1;
(statearr_79531_79593[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79454 === (8))){
var inst_79333 = (state_79453[(14)]);
var inst_79332 = (state_79453[(16)]);
var inst_79335 = (inst_79333 < inst_79332);
var inst_79336 = inst_79335;
var state_79453__$1 = state_79453;
if(cljs.core.truth_(inst_79336)){
var statearr_79532_79594 = state_79453__$1;
(statearr_79532_79594[(1)] = (10));

} else {
var statearr_79533_79595 = state_79453__$1;
(statearr_79533_79595[(1)] = (11));

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
});})(c__40807__auto___79541,cs,m,dchan,dctr,done))
;
return ((function (switch__40784__auto__,c__40807__auto___79541,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__40785__auto__ = null;
var cljs$core$async$mult_$_state_machine__40785__auto____0 = (function (){
var statearr_79537 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79537[(0)] = cljs$core$async$mult_$_state_machine__40785__auto__);

(statearr_79537[(1)] = (1));

return statearr_79537;
});
var cljs$core$async$mult_$_state_machine__40785__auto____1 = (function (state_79453){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_79453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e79538){if((e79538 instanceof Object)){
var ex__40788__auto__ = e79538;
var statearr_79539_79596 = state_79453;
(statearr_79539_79596[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79597 = state_79453;
state_79453 = G__79597;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__40785__auto__ = function(state_79453){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__40785__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__40785__auto____1.call(this,state_79453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__40785__auto____0;
cljs$core$async$mult_$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__40785__auto____1;
return cljs$core$async$mult_$_state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto___79541,cs,m,dchan,dctr,done))
})();
var state__40809__auto__ = (function (){var statearr_79540 = f__40808__auto__.call(null);
(statearr_79540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto___79541);

return statearr_79540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto___79541,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args79598 = [];
var len__37108__auto___79601 = arguments.length;
var i__37109__auto___79602 = (0);
while(true){
if((i__37109__auto___79602 < len__37108__auto___79601)){
args79598.push((arguments[i__37109__auto___79602]));

var G__79603 = (i__37109__auto___79602 + (1));
i__37109__auto___79602 = G__79603;
continue;
} else {
}
break;
}

var G__79600 = args79598.length;
switch (G__79600) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args79598.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__36605__auto__ = (((m == null))?null:m);
var m__36606__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,m,ch);
} else {
var m__36606__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__36605__auto__ = (((m == null))?null:m);
var m__36606__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,m,ch);
} else {
var m__36606__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__36605__auto__ = (((m == null))?null:m);
var m__36606__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,m);
} else {
var m__36606__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__36605__auto__ = (((m == null))?null:m);
var m__36606__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,m,state_map);
} else {
var m__36606__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__36605__auto__ = (((m == null))?null:m);
var m__36606__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,m,mode);
} else {
var m__36606__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__37115__auto__ = [];
var len__37108__auto___79615 = arguments.length;
var i__37109__auto___79616 = (0);
while(true){
if((i__37109__auto___79616 < len__37108__auto___79615)){
args__37115__auto__.push((arguments[i__37109__auto___79616]));

var G__79617 = (i__37109__auto___79616 + (1));
i__37109__auto___79616 = G__79617;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((3) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37116__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__79609){
var map__79610 = p__79609;
var map__79610__$1 = ((((!((map__79610 == null)))?((((map__79610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79610.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79610):map__79610);
var opts = map__79610__$1;
var statearr_79612_79618 = state;
(statearr_79612_79618[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts.call(null,((function (map__79610,map__79610__$1,opts){
return (function (val){
var statearr_79613_79619 = state;
(statearr_79613_79619[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__79610,map__79610__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_79614_79620 = state;
(statearr_79614_79620[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq79605){
var G__79606 = cljs.core.first.call(null,seq79605);
var seq79605__$1 = cljs.core.next.call(null,seq79605);
var G__79607 = cljs.core.first.call(null,seq79605__$1);
var seq79605__$2 = cljs.core.next.call(null,seq79605__$1);
var G__79608 = cljs.core.first.call(null,seq79605__$2);
var seq79605__$3 = cljs.core.next.call(null,seq79605__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__79606,G__79607,G__79608,seq79605__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async79788 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79788 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta79789){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta79789 = meta79789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async79788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_79790,meta79789__$1){
var self__ = this;
var _79790__$1 = this;
return (new cljs.core.async.t_cljs$core$async79788(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta79789__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async79788.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_79790){
var self__ = this;
var _79790__$1 = this;
return self__.meta79789;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async79788.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async79788.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async79788.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async79788.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async79788.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async79788.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async79788.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async79788.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async79788.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta79789","meta79789",49794940,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async79788.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async79788.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79788";

cljs.core.async.t_cljs$core$async79788.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async79788");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async79788 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async79788(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta79789){
return (new cljs.core.async.t_cljs$core$async79788(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta79789));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async79788(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40807__auto___79955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto___79955,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto___79955,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_79892){
var state_val_79893 = (state_79892[(1)]);
if((state_val_79893 === (7))){
var inst_79807 = (state_79892[(2)]);
var state_79892__$1 = state_79892;
var statearr_79894_79956 = state_79892__$1;
(statearr_79894_79956[(2)] = inst_79807);

(statearr_79894_79956[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (20))){
var inst_79819 = (state_79892[(7)]);
var state_79892__$1 = state_79892;
var statearr_79895_79957 = state_79892__$1;
(statearr_79895_79957[(2)] = inst_79819);

(statearr_79895_79957[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (27))){
var state_79892__$1 = state_79892;
var statearr_79896_79958 = state_79892__$1;
(statearr_79896_79958[(2)] = null);

(statearr_79896_79958[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (1))){
var inst_79794 = (state_79892[(8)]);
var inst_79794__$1 = calc_state.call(null);
var inst_79796 = (inst_79794__$1 == null);
var inst_79797 = cljs.core.not.call(null,inst_79796);
var state_79892__$1 = (function (){var statearr_79897 = state_79892;
(statearr_79897[(8)] = inst_79794__$1);

return statearr_79897;
})();
if(inst_79797){
var statearr_79898_79959 = state_79892__$1;
(statearr_79898_79959[(1)] = (2));

} else {
var statearr_79899_79960 = state_79892__$1;
(statearr_79899_79960[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (24))){
var inst_79852 = (state_79892[(9)]);
var inst_79843 = (state_79892[(10)]);
var inst_79866 = (state_79892[(11)]);
var inst_79866__$1 = inst_79843.call(null,inst_79852);
var state_79892__$1 = (function (){var statearr_79900 = state_79892;
(statearr_79900[(11)] = inst_79866__$1);

return statearr_79900;
})();
if(cljs.core.truth_(inst_79866__$1)){
var statearr_79901_79961 = state_79892__$1;
(statearr_79901_79961[(1)] = (29));

} else {
var statearr_79902_79962 = state_79892__$1;
(statearr_79902_79962[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (4))){
var inst_79810 = (state_79892[(2)]);
var state_79892__$1 = state_79892;
if(cljs.core.truth_(inst_79810)){
var statearr_79903_79963 = state_79892__$1;
(statearr_79903_79963[(1)] = (8));

} else {
var statearr_79904_79964 = state_79892__$1;
(statearr_79904_79964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (15))){
var inst_79837 = (state_79892[(2)]);
var state_79892__$1 = state_79892;
if(cljs.core.truth_(inst_79837)){
var statearr_79905_79965 = state_79892__$1;
(statearr_79905_79965[(1)] = (19));

} else {
var statearr_79906_79966 = state_79892__$1;
(statearr_79906_79966[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (21))){
var inst_79842 = (state_79892[(12)]);
var inst_79842__$1 = (state_79892[(2)]);
var inst_79843 = cljs.core.get.call(null,inst_79842__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_79844 = cljs.core.get.call(null,inst_79842__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_79845 = cljs.core.get.call(null,inst_79842__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_79892__$1 = (function (){var statearr_79907 = state_79892;
(statearr_79907[(10)] = inst_79843);

(statearr_79907[(13)] = inst_79844);

(statearr_79907[(12)] = inst_79842__$1);

return statearr_79907;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_79892__$1,(22),inst_79845);
} else {
if((state_val_79893 === (31))){
var inst_79874 = (state_79892[(2)]);
var state_79892__$1 = state_79892;
if(cljs.core.truth_(inst_79874)){
var statearr_79908_79967 = state_79892__$1;
(statearr_79908_79967[(1)] = (32));

} else {
var statearr_79909_79968 = state_79892__$1;
(statearr_79909_79968[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (32))){
var inst_79851 = (state_79892[(14)]);
var state_79892__$1 = state_79892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79892__$1,(35),out,inst_79851);
} else {
if((state_val_79893 === (33))){
var inst_79842 = (state_79892[(12)]);
var inst_79819 = inst_79842;
var state_79892__$1 = (function (){var statearr_79910 = state_79892;
(statearr_79910[(7)] = inst_79819);

return statearr_79910;
})();
var statearr_79911_79969 = state_79892__$1;
(statearr_79911_79969[(2)] = null);

(statearr_79911_79969[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (13))){
var inst_79819 = (state_79892[(7)]);
var inst_79826 = inst_79819.cljs$lang$protocol_mask$partition0$;
var inst_79827 = (inst_79826 & (64));
var inst_79828 = inst_79819.cljs$core$ISeq$;
var inst_79829 = (cljs.core.PROTOCOL_SENTINEL === inst_79828);
var inst_79830 = (inst_79827) || (inst_79829);
var state_79892__$1 = state_79892;
if(cljs.core.truth_(inst_79830)){
var statearr_79912_79970 = state_79892__$1;
(statearr_79912_79970[(1)] = (16));

} else {
var statearr_79913_79971 = state_79892__$1;
(statearr_79913_79971[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (22))){
var inst_79852 = (state_79892[(9)]);
var inst_79851 = (state_79892[(14)]);
var inst_79850 = (state_79892[(2)]);
var inst_79851__$1 = cljs.core.nth.call(null,inst_79850,(0),null);
var inst_79852__$1 = cljs.core.nth.call(null,inst_79850,(1),null);
var inst_79853 = (inst_79851__$1 == null);
var inst_79854 = cljs.core._EQ_.call(null,inst_79852__$1,change);
var inst_79855 = (inst_79853) || (inst_79854);
var state_79892__$1 = (function (){var statearr_79914 = state_79892;
(statearr_79914[(9)] = inst_79852__$1);

(statearr_79914[(14)] = inst_79851__$1);

return statearr_79914;
})();
if(cljs.core.truth_(inst_79855)){
var statearr_79915_79972 = state_79892__$1;
(statearr_79915_79972[(1)] = (23));

} else {
var statearr_79916_79973 = state_79892__$1;
(statearr_79916_79973[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (36))){
var inst_79842 = (state_79892[(12)]);
var inst_79819 = inst_79842;
var state_79892__$1 = (function (){var statearr_79917 = state_79892;
(statearr_79917[(7)] = inst_79819);

return statearr_79917;
})();
var statearr_79918_79974 = state_79892__$1;
(statearr_79918_79974[(2)] = null);

(statearr_79918_79974[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (29))){
var inst_79866 = (state_79892[(11)]);
var state_79892__$1 = state_79892;
var statearr_79919_79975 = state_79892__$1;
(statearr_79919_79975[(2)] = inst_79866);

(statearr_79919_79975[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (6))){
var state_79892__$1 = state_79892;
var statearr_79920_79976 = state_79892__$1;
(statearr_79920_79976[(2)] = false);

(statearr_79920_79976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (28))){
var inst_79862 = (state_79892[(2)]);
var inst_79863 = calc_state.call(null);
var inst_79819 = inst_79863;
var state_79892__$1 = (function (){var statearr_79921 = state_79892;
(statearr_79921[(7)] = inst_79819);

(statearr_79921[(15)] = inst_79862);

return statearr_79921;
})();
var statearr_79922_79977 = state_79892__$1;
(statearr_79922_79977[(2)] = null);

(statearr_79922_79977[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (25))){
var inst_79888 = (state_79892[(2)]);
var state_79892__$1 = state_79892;
var statearr_79923_79978 = state_79892__$1;
(statearr_79923_79978[(2)] = inst_79888);

(statearr_79923_79978[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (34))){
var inst_79886 = (state_79892[(2)]);
var state_79892__$1 = state_79892;
var statearr_79924_79979 = state_79892__$1;
(statearr_79924_79979[(2)] = inst_79886);

(statearr_79924_79979[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (17))){
var state_79892__$1 = state_79892;
var statearr_79925_79980 = state_79892__$1;
(statearr_79925_79980[(2)] = false);

(statearr_79925_79980[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (3))){
var state_79892__$1 = state_79892;
var statearr_79926_79981 = state_79892__$1;
(statearr_79926_79981[(2)] = false);

(statearr_79926_79981[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (12))){
var inst_79890 = (state_79892[(2)]);
var state_79892__$1 = state_79892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79892__$1,inst_79890);
} else {
if((state_val_79893 === (2))){
var inst_79794 = (state_79892[(8)]);
var inst_79799 = inst_79794.cljs$lang$protocol_mask$partition0$;
var inst_79800 = (inst_79799 & (64));
var inst_79801 = inst_79794.cljs$core$ISeq$;
var inst_79802 = (cljs.core.PROTOCOL_SENTINEL === inst_79801);
var inst_79803 = (inst_79800) || (inst_79802);
var state_79892__$1 = state_79892;
if(cljs.core.truth_(inst_79803)){
var statearr_79927_79982 = state_79892__$1;
(statearr_79927_79982[(1)] = (5));

} else {
var statearr_79928_79983 = state_79892__$1;
(statearr_79928_79983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (23))){
var inst_79851 = (state_79892[(14)]);
var inst_79857 = (inst_79851 == null);
var state_79892__$1 = state_79892;
if(cljs.core.truth_(inst_79857)){
var statearr_79929_79984 = state_79892__$1;
(statearr_79929_79984[(1)] = (26));

} else {
var statearr_79930_79985 = state_79892__$1;
(statearr_79930_79985[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (35))){
var inst_79877 = (state_79892[(2)]);
var state_79892__$1 = state_79892;
if(cljs.core.truth_(inst_79877)){
var statearr_79931_79986 = state_79892__$1;
(statearr_79931_79986[(1)] = (36));

} else {
var statearr_79932_79987 = state_79892__$1;
(statearr_79932_79987[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (19))){
var inst_79819 = (state_79892[(7)]);
var inst_79839 = cljs.core.apply.call(null,cljs.core.hash_map,inst_79819);
var state_79892__$1 = state_79892;
var statearr_79933_79988 = state_79892__$1;
(statearr_79933_79988[(2)] = inst_79839);

(statearr_79933_79988[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (11))){
var inst_79819 = (state_79892[(7)]);
var inst_79823 = (inst_79819 == null);
var inst_79824 = cljs.core.not.call(null,inst_79823);
var state_79892__$1 = state_79892;
if(inst_79824){
var statearr_79934_79989 = state_79892__$1;
(statearr_79934_79989[(1)] = (13));

} else {
var statearr_79935_79990 = state_79892__$1;
(statearr_79935_79990[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (9))){
var inst_79794 = (state_79892[(8)]);
var state_79892__$1 = state_79892;
var statearr_79936_79991 = state_79892__$1;
(statearr_79936_79991[(2)] = inst_79794);

(statearr_79936_79991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (5))){
var state_79892__$1 = state_79892;
var statearr_79937_79992 = state_79892__$1;
(statearr_79937_79992[(2)] = true);

(statearr_79937_79992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (14))){
var state_79892__$1 = state_79892;
var statearr_79938_79993 = state_79892__$1;
(statearr_79938_79993[(2)] = false);

(statearr_79938_79993[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (26))){
var inst_79852 = (state_79892[(9)]);
var inst_79859 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_79852);
var state_79892__$1 = state_79892;
var statearr_79939_79994 = state_79892__$1;
(statearr_79939_79994[(2)] = inst_79859);

(statearr_79939_79994[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (16))){
var state_79892__$1 = state_79892;
var statearr_79940_79995 = state_79892__$1;
(statearr_79940_79995[(2)] = true);

(statearr_79940_79995[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (38))){
var inst_79882 = (state_79892[(2)]);
var state_79892__$1 = state_79892;
var statearr_79941_79996 = state_79892__$1;
(statearr_79941_79996[(2)] = inst_79882);

(statearr_79941_79996[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (30))){
var inst_79852 = (state_79892[(9)]);
var inst_79843 = (state_79892[(10)]);
var inst_79844 = (state_79892[(13)]);
var inst_79869 = cljs.core.empty_QMARK_.call(null,inst_79843);
var inst_79870 = inst_79844.call(null,inst_79852);
var inst_79871 = cljs.core.not.call(null,inst_79870);
var inst_79872 = (inst_79869) && (inst_79871);
var state_79892__$1 = state_79892;
var statearr_79942_79997 = state_79892__$1;
(statearr_79942_79997[(2)] = inst_79872);

(statearr_79942_79997[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (10))){
var inst_79794 = (state_79892[(8)]);
var inst_79815 = (state_79892[(2)]);
var inst_79816 = cljs.core.get.call(null,inst_79815,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_79817 = cljs.core.get.call(null,inst_79815,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_79818 = cljs.core.get.call(null,inst_79815,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_79819 = inst_79794;
var state_79892__$1 = (function (){var statearr_79943 = state_79892;
(statearr_79943[(16)] = inst_79818);

(statearr_79943[(17)] = inst_79816);

(statearr_79943[(7)] = inst_79819);

(statearr_79943[(18)] = inst_79817);

return statearr_79943;
})();
var statearr_79944_79998 = state_79892__$1;
(statearr_79944_79998[(2)] = null);

(statearr_79944_79998[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (18))){
var inst_79834 = (state_79892[(2)]);
var state_79892__$1 = state_79892;
var statearr_79945_79999 = state_79892__$1;
(statearr_79945_79999[(2)] = inst_79834);

(statearr_79945_79999[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (37))){
var state_79892__$1 = state_79892;
var statearr_79946_80000 = state_79892__$1;
(statearr_79946_80000[(2)] = null);

(statearr_79946_80000[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79893 === (8))){
var inst_79794 = (state_79892[(8)]);
var inst_79812 = cljs.core.apply.call(null,cljs.core.hash_map,inst_79794);
var state_79892__$1 = state_79892;
var statearr_79947_80001 = state_79892__$1;
(statearr_79947_80001[(2)] = inst_79812);

(statearr_79947_80001[(1)] = (10));


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
});})(c__40807__auto___79955,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__40784__auto__,c__40807__auto___79955,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__40785__auto__ = null;
var cljs$core$async$mix_$_state_machine__40785__auto____0 = (function (){
var statearr_79951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79951[(0)] = cljs$core$async$mix_$_state_machine__40785__auto__);

(statearr_79951[(1)] = (1));

return statearr_79951;
});
var cljs$core$async$mix_$_state_machine__40785__auto____1 = (function (state_79892){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_79892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e79952){if((e79952 instanceof Object)){
var ex__40788__auto__ = e79952;
var statearr_79953_80002 = state_79892;
(statearr_79953_80002[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80003 = state_79892;
state_79892 = G__80003;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__40785__auto__ = function(state_79892){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__40785__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__40785__auto____1.call(this,state_79892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__40785__auto____0;
cljs$core$async$mix_$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__40785__auto____1;
return cljs$core$async$mix_$_state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto___79955,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__40809__auto__ = (function (){var statearr_79954 = f__40808__auto__.call(null);
(statearr_79954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto___79955);

return statearr_79954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto___79955,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__36605__auto__ = (((p == null))?null:p);
var m__36606__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__36606__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__36605__auto__ = (((p == null))?null:p);
var m__36606__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,p,v,ch);
} else {
var m__36606__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args80004 = [];
var len__37108__auto___80007 = arguments.length;
var i__37109__auto___80008 = (0);
while(true){
if((i__37109__auto___80008 < len__37108__auto___80007)){
args80004.push((arguments[i__37109__auto___80008]));

var G__80009 = (i__37109__auto___80008 + (1));
i__37109__auto___80008 = G__80009;
continue;
} else {
}
break;
}

var G__80006 = args80004.length;
switch (G__80006) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args80004.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__36605__auto__ = (((p == null))?null:p);
var m__36606__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,p);
} else {
var m__36606__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__36605__auto__ = (((p == null))?null:p);
var m__36606__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,p,v);
} else {
var m__36606__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args80012 = [];
var len__37108__auto___80137 = arguments.length;
var i__37109__auto___80138 = (0);
while(true){
if((i__37109__auto___80138 < len__37108__auto___80137)){
args80012.push((arguments[i__37109__auto___80138]));

var G__80139 = (i__37109__auto___80138 + (1));
i__37109__auto___80138 = G__80139;
continue;
} else {
}
break;
}

var G__80014 = args80012.length;
switch (G__80014) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args80012.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__35887__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__35887__auto__,mults){
return (function (p1__80011_SHARP_){
if(cljs.core.truth_(p1__80011_SHARP_.call(null,topic))){
return p1__80011_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__80011_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__35887__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async80015 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async80015 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta80016){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta80016 = meta80016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async80015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_80017,meta80016__$1){
var self__ = this;
var _80017__$1 = this;
return (new cljs.core.async.t_cljs$core$async80015(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta80016__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async80015.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_80017){
var self__ = this;
var _80017__$1 = this;
return self__.meta80016;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async80015.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80015.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async80015.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80015.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async80015.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6753__auto__)){
var m = temp__6753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async80015.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async80015.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async80015.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta80016","meta80016",1178359539,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async80015.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async80015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async80015";

cljs.core.async.t_cljs$core$async80015.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async80015");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async80015 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async80015(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta80016){
return (new cljs.core.async.t_cljs$core$async80015(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta80016));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async80015(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40807__auto___80141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto___80141,mults,ensure_mult,p){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto___80141,mults,ensure_mult,p){
return (function (state_80089){
var state_val_80090 = (state_80089[(1)]);
if((state_val_80090 === (7))){
var inst_80085 = (state_80089[(2)]);
var state_80089__$1 = state_80089;
var statearr_80091_80142 = state_80089__$1;
(statearr_80091_80142[(2)] = inst_80085);

(statearr_80091_80142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80090 === (20))){
var state_80089__$1 = state_80089;
var statearr_80092_80143 = state_80089__$1;
(statearr_80092_80143[(2)] = null);

(statearr_80092_80143[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80090 === (1))){
var state_80089__$1 = state_80089;
var statearr_80093_80144 = state_80089__$1;
(statearr_80093_80144[(2)] = null);

(statearr_80093_80144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80090 === (24))){
var inst_80068 = (state_80089[(7)]);
var inst_80077 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_80068);
var state_80089__$1 = state_80089;
var statearr_80094_80145 = state_80089__$1;
(statearr_80094_80145[(2)] = inst_80077);

(statearr_80094_80145[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80090 === (4))){
var inst_80020 = (state_80089[(8)]);
var inst_80020__$1 = (state_80089[(2)]);
var inst_80021 = (inst_80020__$1 == null);
var state_80089__$1 = (function (){var statearr_80095 = state_80089;
(statearr_80095[(8)] = inst_80020__$1);

return statearr_80095;
})();
if(cljs.core.truth_(inst_80021)){
var statearr_80096_80146 = state_80089__$1;
(statearr_80096_80146[(1)] = (5));

} else {
var statearr_80097_80147 = state_80089__$1;
(statearr_80097_80147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80090 === (15))){
var inst_80062 = (state_80089[(2)]);
var state_80089__$1 = state_80089;
var statearr_80098_80148 = state_80089__$1;
(statearr_80098_80148[(2)] = inst_80062);

(statearr_80098_80148[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80090 === (21))){
var inst_80082 = (state_80089[(2)]);
var state_80089__$1 = (function (){var statearr_80099 = state_80089;
(statearr_80099[(9)] = inst_80082);

return statearr_80099;
})();
var statearr_80100_80149 = state_80089__$1;
(statearr_80100_80149[(2)] = null);

(statearr_80100_80149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80090 === (13))){
var inst_80044 = (state_80089[(10)]);
var inst_80046 = cljs.core.chunked_seq_QMARK_.call(null,inst_80044);
var state_80089__$1 = state_80089;
if(inst_80046){
var statearr_80101_80150 = state_80089__$1;
(statearr_80101_80150[(1)] = (16));

} else {
var statearr_80102_80151 = state_80089__$1;
(statearr_80102_80151[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80090 === (22))){
var inst_80074 = (state_80089[(2)]);
var state_80089__$1 = state_80089;
if(cljs.core.truth_(inst_80074)){
var statearr_80103_80152 = state_80089__$1;
(statearr_80103_80152[(1)] = (23));

} else {
var statearr_80104_80153 = state_80089__$1;
(statearr_80104_80153[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80090 === (6))){
var inst_80070 = (state_80089[(11)]);
var inst_80020 = (state_80089[(8)]);
var inst_80068 = (state_80089[(7)]);
var inst_80068__$1 = topic_fn.call(null,inst_80020);
var inst_80069 = cljs.core.deref.call(null,mults);
var inst_80070__$1 = cljs.core.get.call(null,inst_80069,inst_80068__$1);
var state_80089__$1 = (function (){var statearr_80105 = state_80089;
(statearr_80105[(11)] = inst_80070__$1);

(statearr_80105[(7)] = inst_80068__$1);

return statearr_80105;
})();
if(cljs.core.truth_(inst_80070__$1)){
var statearr_80106_80154 = state_80089__$1;
(statearr_80106_80154[(1)] = (19));

} else {
var statearr_80107_80155 = state_80089__$1;
(statearr_80107_80155[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80090 === (25))){
var inst_80079 = (state_80089[(2)]);
var state_80089__$1 = state_80089;
var statearr_80108_80156 = state_80089__$1;
(statearr_80108_80156[(2)] = inst_80079);

(statearr_80108_80156[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80090 === (17))){
var inst_80044 = (state_80089[(10)]);
var inst_80053 = cljs.core.first.call(null,inst_80044);
var inst_80054 = cljs.core.async.muxch_STAR_.call(null,inst_80053);
var inst_80055 = cljs.core.async.close_BANG_.call(null,inst_80054);
var inst_80056 = cljs.core.next.call(null,inst_80044);
var inst_80030 = inst_80056;
var inst_80031 = null;
var inst_80032 = (0);
var inst_80033 = (0);
var state_80089__$1 = (function (){var statearr_80109 = state_80089;
(statearr_80109[(12)] = inst_80030);

(statearr_80109[(13)] = inst_80032);

(statearr_80109[(14)] = inst_80055);

(statearr_80109[(15)] = inst_80033);

(statearr_80109[(16)] = inst_80031);

return statearr_80109;
})();
var statearr_80110_80157 = state_80089__$1;
(statearr_80110_80157[(2)] = null);

(statearr_80110_80157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80090 === (3))){
var inst_80087 = (state_80089[(2)]);
var state_80089__$1 = state_80089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80089__$1,inst_80087);
} else {
if((state_val_80090 === (12))){
var inst_80064 = (state_80089[(2)]);
var state_80089__$1 = state_80089;
var statearr_80111_80158 = state_80089__$1;
(statearr_80111_80158[(2)] = inst_80064);

(statearr_80111_80158[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80090 === (2))){
var state_80089__$1 = state_80089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80089__$1,(4),ch);
} else {
if((state_val_80090 === (23))){
var state_80089__$1 = state_80089;
var statearr_80112_80159 = state_80089__$1;
(statearr_80112_80159[(2)] = null);

(statearr_80112_80159[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80090 === (19))){
var inst_80070 = (state_80089[(11)]);
var inst_80020 = (state_80089[(8)]);
var inst_80072 = cljs.core.async.muxch_STAR_.call(null,inst_80070);
var state_80089__$1 = state_80089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80089__$1,(22),inst_80072,inst_80020);
} else {
if((state_val_80090 === (11))){
var inst_80030 = (state_80089[(12)]);
var inst_80044 = (state_80089[(10)]);
var inst_80044__$1 = cljs.core.seq.call(null,inst_80030);
var state_80089__$1 = (function (){var statearr_80113 = state_80089;
(statearr_80113[(10)] = inst_80044__$1);

return statearr_80113;
})();
if(inst_80044__$1){
var statearr_80114_80160 = state_80089__$1;
(statearr_80114_80160[(1)] = (13));

} else {
var statearr_80115_80161 = state_80089__$1;
(statearr_80115_80161[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80090 === (9))){
var inst_80066 = (state_80089[(2)]);
var state_80089__$1 = state_80089;
var statearr_80116_80162 = state_80089__$1;
(statearr_80116_80162[(2)] = inst_80066);

(statearr_80116_80162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80090 === (5))){
var inst_80027 = cljs.core.deref.call(null,mults);
var inst_80028 = cljs.core.vals.call(null,inst_80027);
var inst_80029 = cljs.core.seq.call(null,inst_80028);
var inst_80030 = inst_80029;
var inst_80031 = null;
var inst_80032 = (0);
var inst_80033 = (0);
var state_80089__$1 = (function (){var statearr_80117 = state_80089;
(statearr_80117[(12)] = inst_80030);

(statearr_80117[(13)] = inst_80032);

(statearr_80117[(15)] = inst_80033);

(statearr_80117[(16)] = inst_80031);

return statearr_80117;
})();
var statearr_80118_80163 = state_80089__$1;
(statearr_80118_80163[(2)] = null);

(statearr_80118_80163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80090 === (14))){
var state_80089__$1 = state_80089;
var statearr_80122_80164 = state_80089__$1;
(statearr_80122_80164[(2)] = null);

(statearr_80122_80164[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80090 === (16))){
var inst_80044 = (state_80089[(10)]);
var inst_80048 = cljs.core.chunk_first.call(null,inst_80044);
var inst_80049 = cljs.core.chunk_rest.call(null,inst_80044);
var inst_80050 = cljs.core.count.call(null,inst_80048);
var inst_80030 = inst_80049;
var inst_80031 = inst_80048;
var inst_80032 = inst_80050;
var inst_80033 = (0);
var state_80089__$1 = (function (){var statearr_80123 = state_80089;
(statearr_80123[(12)] = inst_80030);

(statearr_80123[(13)] = inst_80032);

(statearr_80123[(15)] = inst_80033);

(statearr_80123[(16)] = inst_80031);

return statearr_80123;
})();
var statearr_80124_80165 = state_80089__$1;
(statearr_80124_80165[(2)] = null);

(statearr_80124_80165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80090 === (10))){
var inst_80030 = (state_80089[(12)]);
var inst_80032 = (state_80089[(13)]);
var inst_80033 = (state_80089[(15)]);
var inst_80031 = (state_80089[(16)]);
var inst_80038 = cljs.core._nth.call(null,inst_80031,inst_80033);
var inst_80039 = cljs.core.async.muxch_STAR_.call(null,inst_80038);
var inst_80040 = cljs.core.async.close_BANG_.call(null,inst_80039);
var inst_80041 = (inst_80033 + (1));
var tmp80119 = inst_80030;
var tmp80120 = inst_80032;
var tmp80121 = inst_80031;
var inst_80030__$1 = tmp80119;
var inst_80031__$1 = tmp80121;
var inst_80032__$1 = tmp80120;
var inst_80033__$1 = inst_80041;
var state_80089__$1 = (function (){var statearr_80125 = state_80089;
(statearr_80125[(12)] = inst_80030__$1);

(statearr_80125[(13)] = inst_80032__$1);

(statearr_80125[(17)] = inst_80040);

(statearr_80125[(15)] = inst_80033__$1);

(statearr_80125[(16)] = inst_80031__$1);

return statearr_80125;
})();
var statearr_80126_80166 = state_80089__$1;
(statearr_80126_80166[(2)] = null);

(statearr_80126_80166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80090 === (18))){
var inst_80059 = (state_80089[(2)]);
var state_80089__$1 = state_80089;
var statearr_80127_80167 = state_80089__$1;
(statearr_80127_80167[(2)] = inst_80059);

(statearr_80127_80167[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80090 === (8))){
var inst_80032 = (state_80089[(13)]);
var inst_80033 = (state_80089[(15)]);
var inst_80035 = (inst_80033 < inst_80032);
var inst_80036 = inst_80035;
var state_80089__$1 = state_80089;
if(cljs.core.truth_(inst_80036)){
var statearr_80128_80168 = state_80089__$1;
(statearr_80128_80168[(1)] = (10));

} else {
var statearr_80129_80169 = state_80089__$1;
(statearr_80129_80169[(1)] = (11));

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
});})(c__40807__auto___80141,mults,ensure_mult,p))
;
return ((function (switch__40784__auto__,c__40807__auto___80141,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__40785__auto__ = null;
var cljs$core$async$state_machine__40785__auto____0 = (function (){
var statearr_80133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80133[(0)] = cljs$core$async$state_machine__40785__auto__);

(statearr_80133[(1)] = (1));

return statearr_80133;
});
var cljs$core$async$state_machine__40785__auto____1 = (function (state_80089){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_80089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e80134){if((e80134 instanceof Object)){
var ex__40788__auto__ = e80134;
var statearr_80135_80170 = state_80089;
(statearr_80135_80170[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80171 = state_80089;
state_80089 = G__80171;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
cljs$core$async$state_machine__40785__auto__ = function(state_80089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40785__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40785__auto____1.call(this,state_80089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40785__auto____0;
cljs$core$async$state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40785__auto____1;
return cljs$core$async$state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto___80141,mults,ensure_mult,p))
})();
var state__40809__auto__ = (function (){var statearr_80136 = f__40808__auto__.call(null);
(statearr_80136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto___80141);

return statearr_80136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto___80141,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args80172 = [];
var len__37108__auto___80175 = arguments.length;
var i__37109__auto___80176 = (0);
while(true){
if((i__37109__auto___80176 < len__37108__auto___80175)){
args80172.push((arguments[i__37109__auto___80176]));

var G__80177 = (i__37109__auto___80176 + (1));
i__37109__auto___80176 = G__80177;
continue;
} else {
}
break;
}

var G__80174 = args80172.length;
switch (G__80174) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args80172.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args80179 = [];
var len__37108__auto___80182 = arguments.length;
var i__37109__auto___80183 = (0);
while(true){
if((i__37109__auto___80183 < len__37108__auto___80182)){
args80179.push((arguments[i__37109__auto___80183]));

var G__80184 = (i__37109__auto___80183 + (1));
i__37109__auto___80183 = G__80184;
continue;
} else {
}
break;
}

var G__80181 = args80179.length;
switch (G__80181) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args80179.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args80186 = [];
var len__37108__auto___80257 = arguments.length;
var i__37109__auto___80258 = (0);
while(true){
if((i__37109__auto___80258 < len__37108__auto___80257)){
args80186.push((arguments[i__37109__auto___80258]));

var G__80259 = (i__37109__auto___80258 + (1));
i__37109__auto___80258 = G__80259;
continue;
} else {
}
break;
}

var G__80188 = args80186.length;
switch (G__80188) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args80186.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__40807__auto___80261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto___80261,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto___80261,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_80227){
var state_val_80228 = (state_80227[(1)]);
if((state_val_80228 === (7))){
var state_80227__$1 = state_80227;
var statearr_80229_80262 = state_80227__$1;
(statearr_80229_80262[(2)] = null);

(statearr_80229_80262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80228 === (1))){
var state_80227__$1 = state_80227;
var statearr_80230_80263 = state_80227__$1;
(statearr_80230_80263[(2)] = null);

(statearr_80230_80263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80228 === (4))){
var inst_80191 = (state_80227[(7)]);
var inst_80193 = (inst_80191 < cnt);
var state_80227__$1 = state_80227;
if(cljs.core.truth_(inst_80193)){
var statearr_80231_80264 = state_80227__$1;
(statearr_80231_80264[(1)] = (6));

} else {
var statearr_80232_80265 = state_80227__$1;
(statearr_80232_80265[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80228 === (15))){
var inst_80223 = (state_80227[(2)]);
var state_80227__$1 = state_80227;
var statearr_80233_80266 = state_80227__$1;
(statearr_80233_80266[(2)] = inst_80223);

(statearr_80233_80266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80228 === (13))){
var inst_80216 = cljs.core.async.close_BANG_.call(null,out);
var state_80227__$1 = state_80227;
var statearr_80234_80267 = state_80227__$1;
(statearr_80234_80267[(2)] = inst_80216);

(statearr_80234_80267[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80228 === (6))){
var state_80227__$1 = state_80227;
var statearr_80235_80268 = state_80227__$1;
(statearr_80235_80268[(2)] = null);

(statearr_80235_80268[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80228 === (3))){
var inst_80225 = (state_80227[(2)]);
var state_80227__$1 = state_80227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80227__$1,inst_80225);
} else {
if((state_val_80228 === (12))){
var inst_80213 = (state_80227[(8)]);
var inst_80213__$1 = (state_80227[(2)]);
var inst_80214 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_80213__$1);
var state_80227__$1 = (function (){var statearr_80236 = state_80227;
(statearr_80236[(8)] = inst_80213__$1);

return statearr_80236;
})();
if(cljs.core.truth_(inst_80214)){
var statearr_80237_80269 = state_80227__$1;
(statearr_80237_80269[(1)] = (13));

} else {
var statearr_80238_80270 = state_80227__$1;
(statearr_80238_80270[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80228 === (2))){
var inst_80190 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_80191 = (0);
var state_80227__$1 = (function (){var statearr_80239 = state_80227;
(statearr_80239[(9)] = inst_80190);

(statearr_80239[(7)] = inst_80191);

return statearr_80239;
})();
var statearr_80240_80271 = state_80227__$1;
(statearr_80240_80271[(2)] = null);

(statearr_80240_80271[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80228 === (11))){
var inst_80191 = (state_80227[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_80227,(10),Object,null,(9));
var inst_80200 = chs__$1.call(null,inst_80191);
var inst_80201 = done.call(null,inst_80191);
var inst_80202 = cljs.core.async.take_BANG_.call(null,inst_80200,inst_80201);
var state_80227__$1 = state_80227;
var statearr_80241_80272 = state_80227__$1;
(statearr_80241_80272[(2)] = inst_80202);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80227__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80228 === (9))){
var inst_80191 = (state_80227[(7)]);
var inst_80204 = (state_80227[(2)]);
var inst_80205 = (inst_80191 + (1));
var inst_80191__$1 = inst_80205;
var state_80227__$1 = (function (){var statearr_80242 = state_80227;
(statearr_80242[(10)] = inst_80204);

(statearr_80242[(7)] = inst_80191__$1);

return statearr_80242;
})();
var statearr_80243_80273 = state_80227__$1;
(statearr_80243_80273[(2)] = null);

(statearr_80243_80273[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80228 === (5))){
var inst_80211 = (state_80227[(2)]);
var state_80227__$1 = (function (){var statearr_80244 = state_80227;
(statearr_80244[(11)] = inst_80211);

return statearr_80244;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80227__$1,(12),dchan);
} else {
if((state_val_80228 === (14))){
var inst_80213 = (state_80227[(8)]);
var inst_80218 = cljs.core.apply.call(null,f,inst_80213);
var state_80227__$1 = state_80227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80227__$1,(16),out,inst_80218);
} else {
if((state_val_80228 === (16))){
var inst_80220 = (state_80227[(2)]);
var state_80227__$1 = (function (){var statearr_80245 = state_80227;
(statearr_80245[(12)] = inst_80220);

return statearr_80245;
})();
var statearr_80246_80274 = state_80227__$1;
(statearr_80246_80274[(2)] = null);

(statearr_80246_80274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80228 === (10))){
var inst_80195 = (state_80227[(2)]);
var inst_80196 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_80227__$1 = (function (){var statearr_80247 = state_80227;
(statearr_80247[(13)] = inst_80195);

return statearr_80247;
})();
var statearr_80248_80275 = state_80227__$1;
(statearr_80248_80275[(2)] = inst_80196);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80227__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80228 === (8))){
var inst_80209 = (state_80227[(2)]);
var state_80227__$1 = state_80227;
var statearr_80249_80276 = state_80227__$1;
(statearr_80249_80276[(2)] = inst_80209);

(statearr_80249_80276[(1)] = (5));


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
});})(c__40807__auto___80261,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__40784__auto__,c__40807__auto___80261,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__40785__auto__ = null;
var cljs$core$async$state_machine__40785__auto____0 = (function (){
var statearr_80253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80253[(0)] = cljs$core$async$state_machine__40785__auto__);

(statearr_80253[(1)] = (1));

return statearr_80253;
});
var cljs$core$async$state_machine__40785__auto____1 = (function (state_80227){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_80227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e80254){if((e80254 instanceof Object)){
var ex__40788__auto__ = e80254;
var statearr_80255_80277 = state_80227;
(statearr_80255_80277[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80278 = state_80227;
state_80227 = G__80278;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
cljs$core$async$state_machine__40785__auto__ = function(state_80227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40785__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40785__auto____1.call(this,state_80227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40785__auto____0;
cljs$core$async$state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40785__auto____1;
return cljs$core$async$state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto___80261,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__40809__auto__ = (function (){var statearr_80256 = f__40808__auto__.call(null);
(statearr_80256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto___80261);

return statearr_80256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto___80261,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args80280 = [];
var len__37108__auto___80338 = arguments.length;
var i__37109__auto___80339 = (0);
while(true){
if((i__37109__auto___80339 < len__37108__auto___80338)){
args80280.push((arguments[i__37109__auto___80339]));

var G__80340 = (i__37109__auto___80339 + (1));
i__37109__auto___80339 = G__80340;
continue;
} else {
}
break;
}

var G__80282 = args80280.length;
switch (G__80282) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args80280.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40807__auto___80342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto___80342,out){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto___80342,out){
return (function (state_80314){
var state_val_80315 = (state_80314[(1)]);
if((state_val_80315 === (7))){
var inst_80293 = (state_80314[(7)]);
var inst_80294 = (state_80314[(8)]);
var inst_80293__$1 = (state_80314[(2)]);
var inst_80294__$1 = cljs.core.nth.call(null,inst_80293__$1,(0),null);
var inst_80295 = cljs.core.nth.call(null,inst_80293__$1,(1),null);
var inst_80296 = (inst_80294__$1 == null);
var state_80314__$1 = (function (){var statearr_80316 = state_80314;
(statearr_80316[(7)] = inst_80293__$1);

(statearr_80316[(8)] = inst_80294__$1);

(statearr_80316[(9)] = inst_80295);

return statearr_80316;
})();
if(cljs.core.truth_(inst_80296)){
var statearr_80317_80343 = state_80314__$1;
(statearr_80317_80343[(1)] = (8));

} else {
var statearr_80318_80344 = state_80314__$1;
(statearr_80318_80344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80315 === (1))){
var inst_80283 = cljs.core.vec.call(null,chs);
var inst_80284 = inst_80283;
var state_80314__$1 = (function (){var statearr_80319 = state_80314;
(statearr_80319[(10)] = inst_80284);

return statearr_80319;
})();
var statearr_80320_80345 = state_80314__$1;
(statearr_80320_80345[(2)] = null);

(statearr_80320_80345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80315 === (4))){
var inst_80284 = (state_80314[(10)]);
var state_80314__$1 = state_80314;
return cljs.core.async.ioc_alts_BANG_.call(null,state_80314__$1,(7),inst_80284);
} else {
if((state_val_80315 === (6))){
var inst_80310 = (state_80314[(2)]);
var state_80314__$1 = state_80314;
var statearr_80321_80346 = state_80314__$1;
(statearr_80321_80346[(2)] = inst_80310);

(statearr_80321_80346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80315 === (3))){
var inst_80312 = (state_80314[(2)]);
var state_80314__$1 = state_80314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80314__$1,inst_80312);
} else {
if((state_val_80315 === (2))){
var inst_80284 = (state_80314[(10)]);
var inst_80286 = cljs.core.count.call(null,inst_80284);
var inst_80287 = (inst_80286 > (0));
var state_80314__$1 = state_80314;
if(cljs.core.truth_(inst_80287)){
var statearr_80323_80347 = state_80314__$1;
(statearr_80323_80347[(1)] = (4));

} else {
var statearr_80324_80348 = state_80314__$1;
(statearr_80324_80348[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80315 === (11))){
var inst_80284 = (state_80314[(10)]);
var inst_80303 = (state_80314[(2)]);
var tmp80322 = inst_80284;
var inst_80284__$1 = tmp80322;
var state_80314__$1 = (function (){var statearr_80325 = state_80314;
(statearr_80325[(10)] = inst_80284__$1);

(statearr_80325[(11)] = inst_80303);

return statearr_80325;
})();
var statearr_80326_80349 = state_80314__$1;
(statearr_80326_80349[(2)] = null);

(statearr_80326_80349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80315 === (9))){
var inst_80294 = (state_80314[(8)]);
var state_80314__$1 = state_80314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80314__$1,(11),out,inst_80294);
} else {
if((state_val_80315 === (5))){
var inst_80308 = cljs.core.async.close_BANG_.call(null,out);
var state_80314__$1 = state_80314;
var statearr_80327_80350 = state_80314__$1;
(statearr_80327_80350[(2)] = inst_80308);

(statearr_80327_80350[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80315 === (10))){
var inst_80306 = (state_80314[(2)]);
var state_80314__$1 = state_80314;
var statearr_80328_80351 = state_80314__$1;
(statearr_80328_80351[(2)] = inst_80306);

(statearr_80328_80351[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80315 === (8))){
var inst_80284 = (state_80314[(10)]);
var inst_80293 = (state_80314[(7)]);
var inst_80294 = (state_80314[(8)]);
var inst_80295 = (state_80314[(9)]);
var inst_80298 = (function (){var cs = inst_80284;
var vec__80289 = inst_80293;
var v = inst_80294;
var c = inst_80295;
return ((function (cs,vec__80289,v,c,inst_80284,inst_80293,inst_80294,inst_80295,state_val_80315,c__40807__auto___80342,out){
return (function (p1__80279_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__80279_SHARP_);
});
;})(cs,vec__80289,v,c,inst_80284,inst_80293,inst_80294,inst_80295,state_val_80315,c__40807__auto___80342,out))
})();
var inst_80299 = cljs.core.filterv.call(null,inst_80298,inst_80284);
var inst_80284__$1 = inst_80299;
var state_80314__$1 = (function (){var statearr_80329 = state_80314;
(statearr_80329[(10)] = inst_80284__$1);

return statearr_80329;
})();
var statearr_80330_80352 = state_80314__$1;
(statearr_80330_80352[(2)] = null);

(statearr_80330_80352[(1)] = (2));


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
});})(c__40807__auto___80342,out))
;
return ((function (switch__40784__auto__,c__40807__auto___80342,out){
return (function() {
var cljs$core$async$state_machine__40785__auto__ = null;
var cljs$core$async$state_machine__40785__auto____0 = (function (){
var statearr_80334 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80334[(0)] = cljs$core$async$state_machine__40785__auto__);

(statearr_80334[(1)] = (1));

return statearr_80334;
});
var cljs$core$async$state_machine__40785__auto____1 = (function (state_80314){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_80314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e80335){if((e80335 instanceof Object)){
var ex__40788__auto__ = e80335;
var statearr_80336_80353 = state_80314;
(statearr_80336_80353[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80354 = state_80314;
state_80314 = G__80354;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
cljs$core$async$state_machine__40785__auto__ = function(state_80314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40785__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40785__auto____1.call(this,state_80314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40785__auto____0;
cljs$core$async$state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40785__auto____1;
return cljs$core$async$state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto___80342,out))
})();
var state__40809__auto__ = (function (){var statearr_80337 = f__40808__auto__.call(null);
(statearr_80337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto___80342);

return statearr_80337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto___80342,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args80355 = [];
var len__37108__auto___80404 = arguments.length;
var i__37109__auto___80405 = (0);
while(true){
if((i__37109__auto___80405 < len__37108__auto___80404)){
args80355.push((arguments[i__37109__auto___80405]));

var G__80406 = (i__37109__auto___80405 + (1));
i__37109__auto___80405 = G__80406;
continue;
} else {
}
break;
}

var G__80357 = args80355.length;
switch (G__80357) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args80355.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40807__auto___80408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto___80408,out){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto___80408,out){
return (function (state_80381){
var state_val_80382 = (state_80381[(1)]);
if((state_val_80382 === (7))){
var inst_80363 = (state_80381[(7)]);
var inst_80363__$1 = (state_80381[(2)]);
var inst_80364 = (inst_80363__$1 == null);
var inst_80365 = cljs.core.not.call(null,inst_80364);
var state_80381__$1 = (function (){var statearr_80383 = state_80381;
(statearr_80383[(7)] = inst_80363__$1);

return statearr_80383;
})();
if(inst_80365){
var statearr_80384_80409 = state_80381__$1;
(statearr_80384_80409[(1)] = (8));

} else {
var statearr_80385_80410 = state_80381__$1;
(statearr_80385_80410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80382 === (1))){
var inst_80358 = (0);
var state_80381__$1 = (function (){var statearr_80386 = state_80381;
(statearr_80386[(8)] = inst_80358);

return statearr_80386;
})();
var statearr_80387_80411 = state_80381__$1;
(statearr_80387_80411[(2)] = null);

(statearr_80387_80411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80382 === (4))){
var state_80381__$1 = state_80381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80381__$1,(7),ch);
} else {
if((state_val_80382 === (6))){
var inst_80376 = (state_80381[(2)]);
var state_80381__$1 = state_80381;
var statearr_80388_80412 = state_80381__$1;
(statearr_80388_80412[(2)] = inst_80376);

(statearr_80388_80412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80382 === (3))){
var inst_80378 = (state_80381[(2)]);
var inst_80379 = cljs.core.async.close_BANG_.call(null,out);
var state_80381__$1 = (function (){var statearr_80389 = state_80381;
(statearr_80389[(9)] = inst_80378);

return statearr_80389;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80381__$1,inst_80379);
} else {
if((state_val_80382 === (2))){
var inst_80358 = (state_80381[(8)]);
var inst_80360 = (inst_80358 < n);
var state_80381__$1 = state_80381;
if(cljs.core.truth_(inst_80360)){
var statearr_80390_80413 = state_80381__$1;
(statearr_80390_80413[(1)] = (4));

} else {
var statearr_80391_80414 = state_80381__$1;
(statearr_80391_80414[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80382 === (11))){
var inst_80358 = (state_80381[(8)]);
var inst_80368 = (state_80381[(2)]);
var inst_80369 = (inst_80358 + (1));
var inst_80358__$1 = inst_80369;
var state_80381__$1 = (function (){var statearr_80392 = state_80381;
(statearr_80392[(8)] = inst_80358__$1);

(statearr_80392[(10)] = inst_80368);

return statearr_80392;
})();
var statearr_80393_80415 = state_80381__$1;
(statearr_80393_80415[(2)] = null);

(statearr_80393_80415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80382 === (9))){
var state_80381__$1 = state_80381;
var statearr_80394_80416 = state_80381__$1;
(statearr_80394_80416[(2)] = null);

(statearr_80394_80416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80382 === (5))){
var state_80381__$1 = state_80381;
var statearr_80395_80417 = state_80381__$1;
(statearr_80395_80417[(2)] = null);

(statearr_80395_80417[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80382 === (10))){
var inst_80373 = (state_80381[(2)]);
var state_80381__$1 = state_80381;
var statearr_80396_80418 = state_80381__$1;
(statearr_80396_80418[(2)] = inst_80373);

(statearr_80396_80418[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80382 === (8))){
var inst_80363 = (state_80381[(7)]);
var state_80381__$1 = state_80381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80381__$1,(11),out,inst_80363);
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
});})(c__40807__auto___80408,out))
;
return ((function (switch__40784__auto__,c__40807__auto___80408,out){
return (function() {
var cljs$core$async$state_machine__40785__auto__ = null;
var cljs$core$async$state_machine__40785__auto____0 = (function (){
var statearr_80400 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_80400[(0)] = cljs$core$async$state_machine__40785__auto__);

(statearr_80400[(1)] = (1));

return statearr_80400;
});
var cljs$core$async$state_machine__40785__auto____1 = (function (state_80381){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_80381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e80401){if((e80401 instanceof Object)){
var ex__40788__auto__ = e80401;
var statearr_80402_80419 = state_80381;
(statearr_80402_80419[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80420 = state_80381;
state_80381 = G__80420;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
cljs$core$async$state_machine__40785__auto__ = function(state_80381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40785__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40785__auto____1.call(this,state_80381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40785__auto____0;
cljs$core$async$state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40785__auto____1;
return cljs$core$async$state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto___80408,out))
})();
var state__40809__auto__ = (function (){var statearr_80403 = f__40808__auto__.call(null);
(statearr_80403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto___80408);

return statearr_80403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto___80408,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async80428 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async80428 = (function (f,ch,meta80429){
this.f = f;
this.ch = ch;
this.meta80429 = meta80429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async80428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80430,meta80429__$1){
var self__ = this;
var _80430__$1 = this;
return (new cljs.core.async.t_cljs$core$async80428(self__.f,self__.ch,meta80429__$1));
});

cljs.core.async.t_cljs$core$async80428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80430){
var self__ = this;
var _80430__$1 = this;
return self__.meta80429;
});

cljs.core.async.t_cljs$core$async80428.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80428.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async80428.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async80428.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80428.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async80431 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async80431 = (function (f,ch,meta80429,_,fn1,meta80432){
this.f = f;
this.ch = ch;
this.meta80429 = meta80429;
this._ = _;
this.fn1 = fn1;
this.meta80432 = meta80432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async80431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_80433,meta80432__$1){
var self__ = this;
var _80433__$1 = this;
return (new cljs.core.async.t_cljs$core$async80431(self__.f,self__.ch,self__.meta80429,self__._,self__.fn1,meta80432__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async80431.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_80433){
var self__ = this;
var _80433__$1 = this;
return self__.meta80432;
});})(___$1))
;

cljs.core.async.t_cljs$core$async80431.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80431.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async80431.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async80431.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__80421_SHARP_){
return f1.call(null,(((p1__80421_SHARP_ == null))?null:self__.f.call(null,p1__80421_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async80431.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta80429","meta80429",2014152198,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async80428","cljs.core.async/t_cljs$core$async80428",-1262774681,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta80432","meta80432",-1823062280,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async80431.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async80431.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async80431";

cljs.core.async.t_cljs$core$async80431.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async80431");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async80431 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async80431(f__$1,ch__$1,meta80429__$1,___$2,fn1__$1,meta80432){
return (new cljs.core.async.t_cljs$core$async80431(f__$1,ch__$1,meta80429__$1,___$2,fn1__$1,meta80432));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async80431(self__.f,self__.ch,self__.meta80429,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__35875__auto__ = ret;
if(cljs.core.truth_(and__35875__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__35875__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async80428.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80428.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async80428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta80429","meta80429",2014152198,null)], null);
});

cljs.core.async.t_cljs$core$async80428.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async80428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async80428";

cljs.core.async.t_cljs$core$async80428.cljs$lang$ctorPrWriter = (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async80428");
});

cljs.core.async.__GT_t_cljs$core$async80428 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async80428(f__$1,ch__$1,meta80429){
return (new cljs.core.async.t_cljs$core$async80428(f__$1,ch__$1,meta80429));
});

}

return (new cljs.core.async.t_cljs$core$async80428(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async80437 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async80437 = (function (f,ch,meta80438){
this.f = f;
this.ch = ch;
this.meta80438 = meta80438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async80437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80439,meta80438__$1){
var self__ = this;
var _80439__$1 = this;
return (new cljs.core.async.t_cljs$core$async80437(self__.f,self__.ch,meta80438__$1));
});

cljs.core.async.t_cljs$core$async80437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80439){
var self__ = this;
var _80439__$1 = this;
return self__.meta80438;
});

cljs.core.async.t_cljs$core$async80437.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80437.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async80437.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80437.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async80437.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80437.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async80437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta80438","meta80438",350835921,null)], null);
});

cljs.core.async.t_cljs$core$async80437.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async80437.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async80437";

cljs.core.async.t_cljs$core$async80437.cljs$lang$ctorPrWriter = (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async80437");
});

cljs.core.async.__GT_t_cljs$core$async80437 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async80437(f__$1,ch__$1,meta80438){
return (new cljs.core.async.t_cljs$core$async80437(f__$1,ch__$1,meta80438));
});

}

return (new cljs.core.async.t_cljs$core$async80437(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async80443 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async80443 = (function (p,ch,meta80444){
this.p = p;
this.ch = ch;
this.meta80444 = meta80444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async80443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80445,meta80444__$1){
var self__ = this;
var _80445__$1 = this;
return (new cljs.core.async.t_cljs$core$async80443(self__.p,self__.ch,meta80444__$1));
});

cljs.core.async.t_cljs$core$async80443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80445){
var self__ = this;
var _80445__$1 = this;
return self__.meta80444;
});

cljs.core.async.t_cljs$core$async80443.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80443.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async80443.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async80443.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80443.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async80443.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80443.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async80443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta80444","meta80444",1230336554,null)], null);
});

cljs.core.async.t_cljs$core$async80443.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async80443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async80443";

cljs.core.async.t_cljs$core$async80443.cljs$lang$ctorPrWriter = (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async80443");
});

cljs.core.async.__GT_t_cljs$core$async80443 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async80443(p__$1,ch__$1,meta80444){
return (new cljs.core.async.t_cljs$core$async80443(p__$1,ch__$1,meta80444));
});

}

return (new cljs.core.async.t_cljs$core$async80443(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args80446 = [];
var len__37108__auto___80490 = arguments.length;
var i__37109__auto___80491 = (0);
while(true){
if((i__37109__auto___80491 < len__37108__auto___80490)){
args80446.push((arguments[i__37109__auto___80491]));

var G__80492 = (i__37109__auto___80491 + (1));
i__37109__auto___80491 = G__80492;
continue;
} else {
}
break;
}

var G__80448 = args80446.length;
switch (G__80448) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args80446.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40807__auto___80494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto___80494,out){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto___80494,out){
return (function (state_80469){
var state_val_80470 = (state_80469[(1)]);
if((state_val_80470 === (7))){
var inst_80465 = (state_80469[(2)]);
var state_80469__$1 = state_80469;
var statearr_80471_80495 = state_80469__$1;
(statearr_80471_80495[(2)] = inst_80465);

(statearr_80471_80495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80470 === (1))){
var state_80469__$1 = state_80469;
var statearr_80472_80496 = state_80469__$1;
(statearr_80472_80496[(2)] = null);

(statearr_80472_80496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80470 === (4))){
var inst_80451 = (state_80469[(7)]);
var inst_80451__$1 = (state_80469[(2)]);
var inst_80452 = (inst_80451__$1 == null);
var state_80469__$1 = (function (){var statearr_80473 = state_80469;
(statearr_80473[(7)] = inst_80451__$1);

return statearr_80473;
})();
if(cljs.core.truth_(inst_80452)){
var statearr_80474_80497 = state_80469__$1;
(statearr_80474_80497[(1)] = (5));

} else {
var statearr_80475_80498 = state_80469__$1;
(statearr_80475_80498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80470 === (6))){
var inst_80451 = (state_80469[(7)]);
var inst_80456 = p.call(null,inst_80451);
var state_80469__$1 = state_80469;
if(cljs.core.truth_(inst_80456)){
var statearr_80476_80499 = state_80469__$1;
(statearr_80476_80499[(1)] = (8));

} else {
var statearr_80477_80500 = state_80469__$1;
(statearr_80477_80500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80470 === (3))){
var inst_80467 = (state_80469[(2)]);
var state_80469__$1 = state_80469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80469__$1,inst_80467);
} else {
if((state_val_80470 === (2))){
var state_80469__$1 = state_80469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80469__$1,(4),ch);
} else {
if((state_val_80470 === (11))){
var inst_80459 = (state_80469[(2)]);
var state_80469__$1 = state_80469;
var statearr_80478_80501 = state_80469__$1;
(statearr_80478_80501[(2)] = inst_80459);

(statearr_80478_80501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80470 === (9))){
var state_80469__$1 = state_80469;
var statearr_80479_80502 = state_80469__$1;
(statearr_80479_80502[(2)] = null);

(statearr_80479_80502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80470 === (5))){
var inst_80454 = cljs.core.async.close_BANG_.call(null,out);
var state_80469__$1 = state_80469;
var statearr_80480_80503 = state_80469__$1;
(statearr_80480_80503[(2)] = inst_80454);

(statearr_80480_80503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80470 === (10))){
var inst_80462 = (state_80469[(2)]);
var state_80469__$1 = (function (){var statearr_80481 = state_80469;
(statearr_80481[(8)] = inst_80462);

return statearr_80481;
})();
var statearr_80482_80504 = state_80469__$1;
(statearr_80482_80504[(2)] = null);

(statearr_80482_80504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80470 === (8))){
var inst_80451 = (state_80469[(7)]);
var state_80469__$1 = state_80469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80469__$1,(11),out,inst_80451);
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
});})(c__40807__auto___80494,out))
;
return ((function (switch__40784__auto__,c__40807__auto___80494,out){
return (function() {
var cljs$core$async$state_machine__40785__auto__ = null;
var cljs$core$async$state_machine__40785__auto____0 = (function (){
var statearr_80486 = [null,null,null,null,null,null,null,null,null];
(statearr_80486[(0)] = cljs$core$async$state_machine__40785__auto__);

(statearr_80486[(1)] = (1));

return statearr_80486;
});
var cljs$core$async$state_machine__40785__auto____1 = (function (state_80469){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_80469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e80487){if((e80487 instanceof Object)){
var ex__40788__auto__ = e80487;
var statearr_80488_80505 = state_80469;
(statearr_80488_80505[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80506 = state_80469;
state_80469 = G__80506;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
cljs$core$async$state_machine__40785__auto__ = function(state_80469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40785__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40785__auto____1.call(this,state_80469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40785__auto____0;
cljs$core$async$state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40785__auto____1;
return cljs$core$async$state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto___80494,out))
})();
var state__40809__auto__ = (function (){var statearr_80489 = f__40808__auto__.call(null);
(statearr_80489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto___80494);

return statearr_80489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto___80494,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args80507 = [];
var len__37108__auto___80510 = arguments.length;
var i__37109__auto___80511 = (0);
while(true){
if((i__37109__auto___80511 < len__37108__auto___80510)){
args80507.push((arguments[i__37109__auto___80511]));

var G__80512 = (i__37109__auto___80511 + (1));
i__37109__auto___80511 = G__80512;
continue;
} else {
}
break;
}

var G__80509 = args80507.length;
switch (G__80509) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args80507.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__40807__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto__){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto__){
return (function (state_80679){
var state_val_80680 = (state_80679[(1)]);
if((state_val_80680 === (7))){
var inst_80675 = (state_80679[(2)]);
var state_80679__$1 = state_80679;
var statearr_80681_80722 = state_80679__$1;
(statearr_80681_80722[(2)] = inst_80675);

(statearr_80681_80722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80680 === (20))){
var inst_80645 = (state_80679[(7)]);
var inst_80656 = (state_80679[(2)]);
var inst_80657 = cljs.core.next.call(null,inst_80645);
var inst_80631 = inst_80657;
var inst_80632 = null;
var inst_80633 = (0);
var inst_80634 = (0);
var state_80679__$1 = (function (){var statearr_80682 = state_80679;
(statearr_80682[(8)] = inst_80632);

(statearr_80682[(9)] = inst_80633);

(statearr_80682[(10)] = inst_80631);

(statearr_80682[(11)] = inst_80656);

(statearr_80682[(12)] = inst_80634);

return statearr_80682;
})();
var statearr_80683_80723 = state_80679__$1;
(statearr_80683_80723[(2)] = null);

(statearr_80683_80723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80680 === (1))){
var state_80679__$1 = state_80679;
var statearr_80684_80724 = state_80679__$1;
(statearr_80684_80724[(2)] = null);

(statearr_80684_80724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80680 === (4))){
var inst_80620 = (state_80679[(13)]);
var inst_80620__$1 = (state_80679[(2)]);
var inst_80621 = (inst_80620__$1 == null);
var state_80679__$1 = (function (){var statearr_80685 = state_80679;
(statearr_80685[(13)] = inst_80620__$1);

return statearr_80685;
})();
if(cljs.core.truth_(inst_80621)){
var statearr_80686_80725 = state_80679__$1;
(statearr_80686_80725[(1)] = (5));

} else {
var statearr_80687_80726 = state_80679__$1;
(statearr_80687_80726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80680 === (15))){
var state_80679__$1 = state_80679;
var statearr_80691_80727 = state_80679__$1;
(statearr_80691_80727[(2)] = null);

(statearr_80691_80727[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80680 === (21))){
var state_80679__$1 = state_80679;
var statearr_80692_80728 = state_80679__$1;
(statearr_80692_80728[(2)] = null);

(statearr_80692_80728[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80680 === (13))){
var inst_80632 = (state_80679[(8)]);
var inst_80633 = (state_80679[(9)]);
var inst_80631 = (state_80679[(10)]);
var inst_80634 = (state_80679[(12)]);
var inst_80641 = (state_80679[(2)]);
var inst_80642 = (inst_80634 + (1));
var tmp80688 = inst_80632;
var tmp80689 = inst_80633;
var tmp80690 = inst_80631;
var inst_80631__$1 = tmp80690;
var inst_80632__$1 = tmp80688;
var inst_80633__$1 = tmp80689;
var inst_80634__$1 = inst_80642;
var state_80679__$1 = (function (){var statearr_80693 = state_80679;
(statearr_80693[(8)] = inst_80632__$1);

(statearr_80693[(9)] = inst_80633__$1);

(statearr_80693[(14)] = inst_80641);

(statearr_80693[(10)] = inst_80631__$1);

(statearr_80693[(12)] = inst_80634__$1);

return statearr_80693;
})();
var statearr_80694_80729 = state_80679__$1;
(statearr_80694_80729[(2)] = null);

(statearr_80694_80729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80680 === (22))){
var state_80679__$1 = state_80679;
var statearr_80695_80730 = state_80679__$1;
(statearr_80695_80730[(2)] = null);

(statearr_80695_80730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80680 === (6))){
var inst_80620 = (state_80679[(13)]);
var inst_80629 = f.call(null,inst_80620);
var inst_80630 = cljs.core.seq.call(null,inst_80629);
var inst_80631 = inst_80630;
var inst_80632 = null;
var inst_80633 = (0);
var inst_80634 = (0);
var state_80679__$1 = (function (){var statearr_80696 = state_80679;
(statearr_80696[(8)] = inst_80632);

(statearr_80696[(9)] = inst_80633);

(statearr_80696[(10)] = inst_80631);

(statearr_80696[(12)] = inst_80634);

return statearr_80696;
})();
var statearr_80697_80731 = state_80679__$1;
(statearr_80697_80731[(2)] = null);

(statearr_80697_80731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80680 === (17))){
var inst_80645 = (state_80679[(7)]);
var inst_80649 = cljs.core.chunk_first.call(null,inst_80645);
var inst_80650 = cljs.core.chunk_rest.call(null,inst_80645);
var inst_80651 = cljs.core.count.call(null,inst_80649);
var inst_80631 = inst_80650;
var inst_80632 = inst_80649;
var inst_80633 = inst_80651;
var inst_80634 = (0);
var state_80679__$1 = (function (){var statearr_80698 = state_80679;
(statearr_80698[(8)] = inst_80632);

(statearr_80698[(9)] = inst_80633);

(statearr_80698[(10)] = inst_80631);

(statearr_80698[(12)] = inst_80634);

return statearr_80698;
})();
var statearr_80699_80732 = state_80679__$1;
(statearr_80699_80732[(2)] = null);

(statearr_80699_80732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80680 === (3))){
var inst_80677 = (state_80679[(2)]);
var state_80679__$1 = state_80679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80679__$1,inst_80677);
} else {
if((state_val_80680 === (12))){
var inst_80665 = (state_80679[(2)]);
var state_80679__$1 = state_80679;
var statearr_80700_80733 = state_80679__$1;
(statearr_80700_80733[(2)] = inst_80665);

(statearr_80700_80733[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80680 === (2))){
var state_80679__$1 = state_80679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80679__$1,(4),in$);
} else {
if((state_val_80680 === (23))){
var inst_80673 = (state_80679[(2)]);
var state_80679__$1 = state_80679;
var statearr_80701_80734 = state_80679__$1;
(statearr_80701_80734[(2)] = inst_80673);

(statearr_80701_80734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80680 === (19))){
var inst_80660 = (state_80679[(2)]);
var state_80679__$1 = state_80679;
var statearr_80702_80735 = state_80679__$1;
(statearr_80702_80735[(2)] = inst_80660);

(statearr_80702_80735[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80680 === (11))){
var inst_80645 = (state_80679[(7)]);
var inst_80631 = (state_80679[(10)]);
var inst_80645__$1 = cljs.core.seq.call(null,inst_80631);
var state_80679__$1 = (function (){var statearr_80703 = state_80679;
(statearr_80703[(7)] = inst_80645__$1);

return statearr_80703;
})();
if(inst_80645__$1){
var statearr_80704_80736 = state_80679__$1;
(statearr_80704_80736[(1)] = (14));

} else {
var statearr_80705_80737 = state_80679__$1;
(statearr_80705_80737[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80680 === (9))){
var inst_80667 = (state_80679[(2)]);
var inst_80668 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_80679__$1 = (function (){var statearr_80706 = state_80679;
(statearr_80706[(15)] = inst_80667);

return statearr_80706;
})();
if(cljs.core.truth_(inst_80668)){
var statearr_80707_80738 = state_80679__$1;
(statearr_80707_80738[(1)] = (21));

} else {
var statearr_80708_80739 = state_80679__$1;
(statearr_80708_80739[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80680 === (5))){
var inst_80623 = cljs.core.async.close_BANG_.call(null,out);
var state_80679__$1 = state_80679;
var statearr_80709_80740 = state_80679__$1;
(statearr_80709_80740[(2)] = inst_80623);

(statearr_80709_80740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80680 === (14))){
var inst_80645 = (state_80679[(7)]);
var inst_80647 = cljs.core.chunked_seq_QMARK_.call(null,inst_80645);
var state_80679__$1 = state_80679;
if(inst_80647){
var statearr_80710_80741 = state_80679__$1;
(statearr_80710_80741[(1)] = (17));

} else {
var statearr_80711_80742 = state_80679__$1;
(statearr_80711_80742[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80680 === (16))){
var inst_80663 = (state_80679[(2)]);
var state_80679__$1 = state_80679;
var statearr_80712_80743 = state_80679__$1;
(statearr_80712_80743[(2)] = inst_80663);

(statearr_80712_80743[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80680 === (10))){
var inst_80632 = (state_80679[(8)]);
var inst_80634 = (state_80679[(12)]);
var inst_80639 = cljs.core._nth.call(null,inst_80632,inst_80634);
var state_80679__$1 = state_80679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80679__$1,(13),out,inst_80639);
} else {
if((state_val_80680 === (18))){
var inst_80645 = (state_80679[(7)]);
var inst_80654 = cljs.core.first.call(null,inst_80645);
var state_80679__$1 = state_80679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80679__$1,(20),out,inst_80654);
} else {
if((state_val_80680 === (8))){
var inst_80633 = (state_80679[(9)]);
var inst_80634 = (state_80679[(12)]);
var inst_80636 = (inst_80634 < inst_80633);
var inst_80637 = inst_80636;
var state_80679__$1 = state_80679;
if(cljs.core.truth_(inst_80637)){
var statearr_80713_80744 = state_80679__$1;
(statearr_80713_80744[(1)] = (10));

} else {
var statearr_80714_80745 = state_80679__$1;
(statearr_80714_80745[(1)] = (11));

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
});})(c__40807__auto__))
;
return ((function (switch__40784__auto__,c__40807__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__40785__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__40785__auto____0 = (function (){
var statearr_80718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80718[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__40785__auto__);

(statearr_80718[(1)] = (1));

return statearr_80718;
});
var cljs$core$async$mapcat_STAR__$_state_machine__40785__auto____1 = (function (state_80679){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_80679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e80719){if((e80719 instanceof Object)){
var ex__40788__auto__ = e80719;
var statearr_80720_80746 = state_80679;
(statearr_80720_80746[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80747 = state_80679;
state_80679 = G__80747;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__40785__auto__ = function(state_80679){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__40785__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__40785__auto____1.call(this,state_80679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__40785__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__40785__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto__))
})();
var state__40809__auto__ = (function (){var statearr_80721 = f__40808__auto__.call(null);
(statearr_80721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto__);

return statearr_80721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto__))
);

return c__40807__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args80748 = [];
var len__37108__auto___80751 = arguments.length;
var i__37109__auto___80752 = (0);
while(true){
if((i__37109__auto___80752 < len__37108__auto___80751)){
args80748.push((arguments[i__37109__auto___80752]));

var G__80753 = (i__37109__auto___80752 + (1));
i__37109__auto___80752 = G__80753;
continue;
} else {
}
break;
}

var G__80750 = args80748.length;
switch (G__80750) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args80748.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args80755 = [];
var len__37108__auto___80758 = arguments.length;
var i__37109__auto___80759 = (0);
while(true){
if((i__37109__auto___80759 < len__37108__auto___80758)){
args80755.push((arguments[i__37109__auto___80759]));

var G__80760 = (i__37109__auto___80759 + (1));
i__37109__auto___80759 = G__80760;
continue;
} else {
}
break;
}

var G__80757 = args80755.length;
switch (G__80757) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args80755.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args80762 = [];
var len__37108__auto___80813 = arguments.length;
var i__37109__auto___80814 = (0);
while(true){
if((i__37109__auto___80814 < len__37108__auto___80813)){
args80762.push((arguments[i__37109__auto___80814]));

var G__80815 = (i__37109__auto___80814 + (1));
i__37109__auto___80814 = G__80815;
continue;
} else {
}
break;
}

var G__80764 = args80762.length;
switch (G__80764) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args80762.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40807__auto___80817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto___80817,out){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto___80817,out){
return (function (state_80788){
var state_val_80789 = (state_80788[(1)]);
if((state_val_80789 === (7))){
var inst_80783 = (state_80788[(2)]);
var state_80788__$1 = state_80788;
var statearr_80790_80818 = state_80788__$1;
(statearr_80790_80818[(2)] = inst_80783);

(statearr_80790_80818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80789 === (1))){
var inst_80765 = null;
var state_80788__$1 = (function (){var statearr_80791 = state_80788;
(statearr_80791[(7)] = inst_80765);

return statearr_80791;
})();
var statearr_80792_80819 = state_80788__$1;
(statearr_80792_80819[(2)] = null);

(statearr_80792_80819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80789 === (4))){
var inst_80768 = (state_80788[(8)]);
var inst_80768__$1 = (state_80788[(2)]);
var inst_80769 = (inst_80768__$1 == null);
var inst_80770 = cljs.core.not.call(null,inst_80769);
var state_80788__$1 = (function (){var statearr_80793 = state_80788;
(statearr_80793[(8)] = inst_80768__$1);

return statearr_80793;
})();
if(inst_80770){
var statearr_80794_80820 = state_80788__$1;
(statearr_80794_80820[(1)] = (5));

} else {
var statearr_80795_80821 = state_80788__$1;
(statearr_80795_80821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80789 === (6))){
var state_80788__$1 = state_80788;
var statearr_80796_80822 = state_80788__$1;
(statearr_80796_80822[(2)] = null);

(statearr_80796_80822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80789 === (3))){
var inst_80785 = (state_80788[(2)]);
var inst_80786 = cljs.core.async.close_BANG_.call(null,out);
var state_80788__$1 = (function (){var statearr_80797 = state_80788;
(statearr_80797[(9)] = inst_80785);

return statearr_80797;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80788__$1,inst_80786);
} else {
if((state_val_80789 === (2))){
var state_80788__$1 = state_80788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80788__$1,(4),ch);
} else {
if((state_val_80789 === (11))){
var inst_80768 = (state_80788[(8)]);
var inst_80777 = (state_80788[(2)]);
var inst_80765 = inst_80768;
var state_80788__$1 = (function (){var statearr_80798 = state_80788;
(statearr_80798[(7)] = inst_80765);

(statearr_80798[(10)] = inst_80777);

return statearr_80798;
})();
var statearr_80799_80823 = state_80788__$1;
(statearr_80799_80823[(2)] = null);

(statearr_80799_80823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80789 === (9))){
var inst_80768 = (state_80788[(8)]);
var state_80788__$1 = state_80788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80788__$1,(11),out,inst_80768);
} else {
if((state_val_80789 === (5))){
var inst_80765 = (state_80788[(7)]);
var inst_80768 = (state_80788[(8)]);
var inst_80772 = cljs.core._EQ_.call(null,inst_80768,inst_80765);
var state_80788__$1 = state_80788;
if(inst_80772){
var statearr_80801_80824 = state_80788__$1;
(statearr_80801_80824[(1)] = (8));

} else {
var statearr_80802_80825 = state_80788__$1;
(statearr_80802_80825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80789 === (10))){
var inst_80780 = (state_80788[(2)]);
var state_80788__$1 = state_80788;
var statearr_80803_80826 = state_80788__$1;
(statearr_80803_80826[(2)] = inst_80780);

(statearr_80803_80826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80789 === (8))){
var inst_80765 = (state_80788[(7)]);
var tmp80800 = inst_80765;
var inst_80765__$1 = tmp80800;
var state_80788__$1 = (function (){var statearr_80804 = state_80788;
(statearr_80804[(7)] = inst_80765__$1);

return statearr_80804;
})();
var statearr_80805_80827 = state_80788__$1;
(statearr_80805_80827[(2)] = null);

(statearr_80805_80827[(1)] = (2));


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
});})(c__40807__auto___80817,out))
;
return ((function (switch__40784__auto__,c__40807__auto___80817,out){
return (function() {
var cljs$core$async$state_machine__40785__auto__ = null;
var cljs$core$async$state_machine__40785__auto____0 = (function (){
var statearr_80809 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_80809[(0)] = cljs$core$async$state_machine__40785__auto__);

(statearr_80809[(1)] = (1));

return statearr_80809;
});
var cljs$core$async$state_machine__40785__auto____1 = (function (state_80788){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_80788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e80810){if((e80810 instanceof Object)){
var ex__40788__auto__ = e80810;
var statearr_80811_80828 = state_80788;
(statearr_80811_80828[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80829 = state_80788;
state_80788 = G__80829;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
cljs$core$async$state_machine__40785__auto__ = function(state_80788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40785__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40785__auto____1.call(this,state_80788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40785__auto____0;
cljs$core$async$state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40785__auto____1;
return cljs$core$async$state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto___80817,out))
})();
var state__40809__auto__ = (function (){var statearr_80812 = f__40808__auto__.call(null);
(statearr_80812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto___80817);

return statearr_80812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto___80817,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args80830 = [];
var len__37108__auto___80900 = arguments.length;
var i__37109__auto___80901 = (0);
while(true){
if((i__37109__auto___80901 < len__37108__auto___80900)){
args80830.push((arguments[i__37109__auto___80901]));

var G__80902 = (i__37109__auto___80901 + (1));
i__37109__auto___80901 = G__80902;
continue;
} else {
}
break;
}

var G__80832 = args80830.length;
switch (G__80832) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args80830.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40807__auto___80904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto___80904,out){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto___80904,out){
return (function (state_80870){
var state_val_80871 = (state_80870[(1)]);
if((state_val_80871 === (7))){
var inst_80866 = (state_80870[(2)]);
var state_80870__$1 = state_80870;
var statearr_80872_80905 = state_80870__$1;
(statearr_80872_80905[(2)] = inst_80866);

(statearr_80872_80905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80871 === (1))){
var inst_80833 = (new Array(n));
var inst_80834 = inst_80833;
var inst_80835 = (0);
var state_80870__$1 = (function (){var statearr_80873 = state_80870;
(statearr_80873[(7)] = inst_80835);

(statearr_80873[(8)] = inst_80834);

return statearr_80873;
})();
var statearr_80874_80906 = state_80870__$1;
(statearr_80874_80906[(2)] = null);

(statearr_80874_80906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80871 === (4))){
var inst_80838 = (state_80870[(9)]);
var inst_80838__$1 = (state_80870[(2)]);
var inst_80839 = (inst_80838__$1 == null);
var inst_80840 = cljs.core.not.call(null,inst_80839);
var state_80870__$1 = (function (){var statearr_80875 = state_80870;
(statearr_80875[(9)] = inst_80838__$1);

return statearr_80875;
})();
if(inst_80840){
var statearr_80876_80907 = state_80870__$1;
(statearr_80876_80907[(1)] = (5));

} else {
var statearr_80877_80908 = state_80870__$1;
(statearr_80877_80908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80871 === (15))){
var inst_80860 = (state_80870[(2)]);
var state_80870__$1 = state_80870;
var statearr_80878_80909 = state_80870__$1;
(statearr_80878_80909[(2)] = inst_80860);

(statearr_80878_80909[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80871 === (13))){
var state_80870__$1 = state_80870;
var statearr_80879_80910 = state_80870__$1;
(statearr_80879_80910[(2)] = null);

(statearr_80879_80910[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80871 === (6))){
var inst_80835 = (state_80870[(7)]);
var inst_80856 = (inst_80835 > (0));
var state_80870__$1 = state_80870;
if(cljs.core.truth_(inst_80856)){
var statearr_80880_80911 = state_80870__$1;
(statearr_80880_80911[(1)] = (12));

} else {
var statearr_80881_80912 = state_80870__$1;
(statearr_80881_80912[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80871 === (3))){
var inst_80868 = (state_80870[(2)]);
var state_80870__$1 = state_80870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80870__$1,inst_80868);
} else {
if((state_val_80871 === (12))){
var inst_80834 = (state_80870[(8)]);
var inst_80858 = cljs.core.vec.call(null,inst_80834);
var state_80870__$1 = state_80870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80870__$1,(15),out,inst_80858);
} else {
if((state_val_80871 === (2))){
var state_80870__$1 = state_80870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80870__$1,(4),ch);
} else {
if((state_val_80871 === (11))){
var inst_80850 = (state_80870[(2)]);
var inst_80851 = (new Array(n));
var inst_80834 = inst_80851;
var inst_80835 = (0);
var state_80870__$1 = (function (){var statearr_80882 = state_80870;
(statearr_80882[(10)] = inst_80850);

(statearr_80882[(7)] = inst_80835);

(statearr_80882[(8)] = inst_80834);

return statearr_80882;
})();
var statearr_80883_80913 = state_80870__$1;
(statearr_80883_80913[(2)] = null);

(statearr_80883_80913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80871 === (9))){
var inst_80834 = (state_80870[(8)]);
var inst_80848 = cljs.core.vec.call(null,inst_80834);
var state_80870__$1 = state_80870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80870__$1,(11),out,inst_80848);
} else {
if((state_val_80871 === (5))){
var inst_80835 = (state_80870[(7)]);
var inst_80843 = (state_80870[(11)]);
var inst_80834 = (state_80870[(8)]);
var inst_80838 = (state_80870[(9)]);
var inst_80842 = (inst_80834[inst_80835] = inst_80838);
var inst_80843__$1 = (inst_80835 + (1));
var inst_80844 = (inst_80843__$1 < n);
var state_80870__$1 = (function (){var statearr_80884 = state_80870;
(statearr_80884[(11)] = inst_80843__$1);

(statearr_80884[(12)] = inst_80842);

return statearr_80884;
})();
if(cljs.core.truth_(inst_80844)){
var statearr_80885_80914 = state_80870__$1;
(statearr_80885_80914[(1)] = (8));

} else {
var statearr_80886_80915 = state_80870__$1;
(statearr_80886_80915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80871 === (14))){
var inst_80863 = (state_80870[(2)]);
var inst_80864 = cljs.core.async.close_BANG_.call(null,out);
var state_80870__$1 = (function (){var statearr_80888 = state_80870;
(statearr_80888[(13)] = inst_80863);

return statearr_80888;
})();
var statearr_80889_80916 = state_80870__$1;
(statearr_80889_80916[(2)] = inst_80864);

(statearr_80889_80916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80871 === (10))){
var inst_80854 = (state_80870[(2)]);
var state_80870__$1 = state_80870;
var statearr_80890_80917 = state_80870__$1;
(statearr_80890_80917[(2)] = inst_80854);

(statearr_80890_80917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80871 === (8))){
var inst_80843 = (state_80870[(11)]);
var inst_80834 = (state_80870[(8)]);
var tmp80887 = inst_80834;
var inst_80834__$1 = tmp80887;
var inst_80835 = inst_80843;
var state_80870__$1 = (function (){var statearr_80891 = state_80870;
(statearr_80891[(7)] = inst_80835);

(statearr_80891[(8)] = inst_80834__$1);

return statearr_80891;
})();
var statearr_80892_80918 = state_80870__$1;
(statearr_80892_80918[(2)] = null);

(statearr_80892_80918[(1)] = (2));


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
});})(c__40807__auto___80904,out))
;
return ((function (switch__40784__auto__,c__40807__auto___80904,out){
return (function() {
var cljs$core$async$state_machine__40785__auto__ = null;
var cljs$core$async$state_machine__40785__auto____0 = (function (){
var statearr_80896 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80896[(0)] = cljs$core$async$state_machine__40785__auto__);

(statearr_80896[(1)] = (1));

return statearr_80896;
});
var cljs$core$async$state_machine__40785__auto____1 = (function (state_80870){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_80870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e80897){if((e80897 instanceof Object)){
var ex__40788__auto__ = e80897;
var statearr_80898_80919 = state_80870;
(statearr_80898_80919[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80920 = state_80870;
state_80870 = G__80920;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
cljs$core$async$state_machine__40785__auto__ = function(state_80870){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40785__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40785__auto____1.call(this,state_80870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40785__auto____0;
cljs$core$async$state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40785__auto____1;
return cljs$core$async$state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto___80904,out))
})();
var state__40809__auto__ = (function (){var statearr_80899 = f__40808__auto__.call(null);
(statearr_80899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto___80904);

return statearr_80899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto___80904,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args80921 = [];
var len__37108__auto___80995 = arguments.length;
var i__37109__auto___80996 = (0);
while(true){
if((i__37109__auto___80996 < len__37108__auto___80995)){
args80921.push((arguments[i__37109__auto___80996]));

var G__80997 = (i__37109__auto___80996 + (1));
i__37109__auto___80996 = G__80997;
continue;
} else {
}
break;
}

var G__80923 = args80921.length;
switch (G__80923) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args80921.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40807__auto___80999 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto___80999,out){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto___80999,out){
return (function (state_80965){
var state_val_80966 = (state_80965[(1)]);
if((state_val_80966 === (7))){
var inst_80961 = (state_80965[(2)]);
var state_80965__$1 = state_80965;
var statearr_80967_81000 = state_80965__$1;
(statearr_80967_81000[(2)] = inst_80961);

(statearr_80967_81000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80966 === (1))){
var inst_80924 = [];
var inst_80925 = inst_80924;
var inst_80926 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_80965__$1 = (function (){var statearr_80968 = state_80965;
(statearr_80968[(7)] = inst_80926);

(statearr_80968[(8)] = inst_80925);

return statearr_80968;
})();
var statearr_80969_81001 = state_80965__$1;
(statearr_80969_81001[(2)] = null);

(statearr_80969_81001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80966 === (4))){
var inst_80929 = (state_80965[(9)]);
var inst_80929__$1 = (state_80965[(2)]);
var inst_80930 = (inst_80929__$1 == null);
var inst_80931 = cljs.core.not.call(null,inst_80930);
var state_80965__$1 = (function (){var statearr_80970 = state_80965;
(statearr_80970[(9)] = inst_80929__$1);

return statearr_80970;
})();
if(inst_80931){
var statearr_80971_81002 = state_80965__$1;
(statearr_80971_81002[(1)] = (5));

} else {
var statearr_80972_81003 = state_80965__$1;
(statearr_80972_81003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80966 === (15))){
var inst_80955 = (state_80965[(2)]);
var state_80965__$1 = state_80965;
var statearr_80973_81004 = state_80965__$1;
(statearr_80973_81004[(2)] = inst_80955);

(statearr_80973_81004[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80966 === (13))){
var state_80965__$1 = state_80965;
var statearr_80974_81005 = state_80965__$1;
(statearr_80974_81005[(2)] = null);

(statearr_80974_81005[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80966 === (6))){
var inst_80925 = (state_80965[(8)]);
var inst_80950 = inst_80925.length;
var inst_80951 = (inst_80950 > (0));
var state_80965__$1 = state_80965;
if(cljs.core.truth_(inst_80951)){
var statearr_80975_81006 = state_80965__$1;
(statearr_80975_81006[(1)] = (12));

} else {
var statearr_80976_81007 = state_80965__$1;
(statearr_80976_81007[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80966 === (3))){
var inst_80963 = (state_80965[(2)]);
var state_80965__$1 = state_80965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80965__$1,inst_80963);
} else {
if((state_val_80966 === (12))){
var inst_80925 = (state_80965[(8)]);
var inst_80953 = cljs.core.vec.call(null,inst_80925);
var state_80965__$1 = state_80965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80965__$1,(15),out,inst_80953);
} else {
if((state_val_80966 === (2))){
var state_80965__$1 = state_80965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80965__$1,(4),ch);
} else {
if((state_val_80966 === (11))){
var inst_80929 = (state_80965[(9)]);
var inst_80933 = (state_80965[(10)]);
var inst_80943 = (state_80965[(2)]);
var inst_80944 = [];
var inst_80945 = inst_80944.push(inst_80929);
var inst_80925 = inst_80944;
var inst_80926 = inst_80933;
var state_80965__$1 = (function (){var statearr_80977 = state_80965;
(statearr_80977[(7)] = inst_80926);

(statearr_80977[(11)] = inst_80945);

(statearr_80977[(8)] = inst_80925);

(statearr_80977[(12)] = inst_80943);

return statearr_80977;
})();
var statearr_80978_81008 = state_80965__$1;
(statearr_80978_81008[(2)] = null);

(statearr_80978_81008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80966 === (9))){
var inst_80925 = (state_80965[(8)]);
var inst_80941 = cljs.core.vec.call(null,inst_80925);
var state_80965__$1 = state_80965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80965__$1,(11),out,inst_80941);
} else {
if((state_val_80966 === (5))){
var inst_80929 = (state_80965[(9)]);
var inst_80933 = (state_80965[(10)]);
var inst_80926 = (state_80965[(7)]);
var inst_80933__$1 = f.call(null,inst_80929);
var inst_80934 = cljs.core._EQ_.call(null,inst_80933__$1,inst_80926);
var inst_80935 = cljs.core.keyword_identical_QMARK_.call(null,inst_80926,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_80936 = (inst_80934) || (inst_80935);
var state_80965__$1 = (function (){var statearr_80979 = state_80965;
(statearr_80979[(10)] = inst_80933__$1);

return statearr_80979;
})();
if(cljs.core.truth_(inst_80936)){
var statearr_80980_81009 = state_80965__$1;
(statearr_80980_81009[(1)] = (8));

} else {
var statearr_80981_81010 = state_80965__$1;
(statearr_80981_81010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80966 === (14))){
var inst_80958 = (state_80965[(2)]);
var inst_80959 = cljs.core.async.close_BANG_.call(null,out);
var state_80965__$1 = (function (){var statearr_80983 = state_80965;
(statearr_80983[(13)] = inst_80958);

return statearr_80983;
})();
var statearr_80984_81011 = state_80965__$1;
(statearr_80984_81011[(2)] = inst_80959);

(statearr_80984_81011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80966 === (10))){
var inst_80948 = (state_80965[(2)]);
var state_80965__$1 = state_80965;
var statearr_80985_81012 = state_80965__$1;
(statearr_80985_81012[(2)] = inst_80948);

(statearr_80985_81012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80966 === (8))){
var inst_80929 = (state_80965[(9)]);
var inst_80933 = (state_80965[(10)]);
var inst_80925 = (state_80965[(8)]);
var inst_80938 = inst_80925.push(inst_80929);
var tmp80982 = inst_80925;
var inst_80925__$1 = tmp80982;
var inst_80926 = inst_80933;
var state_80965__$1 = (function (){var statearr_80986 = state_80965;
(statearr_80986[(7)] = inst_80926);

(statearr_80986[(14)] = inst_80938);

(statearr_80986[(8)] = inst_80925__$1);

return statearr_80986;
})();
var statearr_80987_81013 = state_80965__$1;
(statearr_80987_81013[(2)] = null);

(statearr_80987_81013[(1)] = (2));


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
});})(c__40807__auto___80999,out))
;
return ((function (switch__40784__auto__,c__40807__auto___80999,out){
return (function() {
var cljs$core$async$state_machine__40785__auto__ = null;
var cljs$core$async$state_machine__40785__auto____0 = (function (){
var statearr_80991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80991[(0)] = cljs$core$async$state_machine__40785__auto__);

(statearr_80991[(1)] = (1));

return statearr_80991;
});
var cljs$core$async$state_machine__40785__auto____1 = (function (state_80965){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_80965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e80992){if((e80992 instanceof Object)){
var ex__40788__auto__ = e80992;
var statearr_80993_81014 = state_80965;
(statearr_80993_81014[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81015 = state_80965;
state_80965 = G__81015;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
cljs$core$async$state_machine__40785__auto__ = function(state_80965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40785__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40785__auto____1.call(this,state_80965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40785__auto____0;
cljs$core$async$state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40785__auto____1;
return cljs$core$async$state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto___80999,out))
})();
var state__40809__auto__ = (function (){var statearr_80994 = f__40808__auto__.call(null);
(statearr_80994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto___80999);

return statearr_80994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto___80999,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1512968121557