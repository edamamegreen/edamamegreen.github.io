// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__50386 = arguments.length;
switch (G__50386) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async50387 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50387 = (function (f,blockable,meta50388){
this.f = f;
this.blockable = blockable;
this.meta50388 = meta50388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50389,meta50388__$1){
var self__ = this;
var _50389__$1 = this;
return (new cljs.core.async.t_cljs$core$async50387(self__.f,self__.blockable,meta50388__$1));
});

cljs.core.async.t_cljs$core$async50387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50389){
var self__ = this;
var _50389__$1 = this;
return self__.meta50388;
});

cljs.core.async.t_cljs$core$async50387.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50387.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async50387.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async50387.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async50387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta50388","meta50388",1568325403,null)], null);
});

cljs.core.async.t_cljs$core$async50387.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50387";

cljs.core.async.t_cljs$core$async50387.cljs$lang$ctorPrWriter = (function (this__37596__auto__,writer__37597__auto__,opt__37598__auto__){
return cljs.core._write.call(null,writer__37597__auto__,"cljs.core.async/t_cljs$core$async50387");
});

cljs.core.async.__GT_t_cljs$core$async50387 = (function cljs$core$async$__GT_t_cljs$core$async50387(f__$1,blockable__$1,meta50388){
return (new cljs.core.async.t_cljs$core$async50387(f__$1,blockable__$1,meta50388));
});

}

return (new cljs.core.async.t_cljs$core$async50387(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__50393 = arguments.length;
switch (G__50393) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
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
var G__50396 = arguments.length;
switch (G__50396) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__50399 = arguments.length;
switch (G__50399) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_50401 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_50401);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_50401,ret){
return (function (){
return fn1.call(null,val_50401);
});})(val_50401,ret))
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
var G__50403 = arguments.length;
switch (G__50403) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5457__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5457__auto__)){
var ret = temp__5457__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5457__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5457__auto__)){
var retb = temp__5457__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5457__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5457__auto__))
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
var n__37970__auto___50405 = n;
var x_50406 = (0);
while(true){
if((x_50406 < n__37970__auto___50405)){
(a[x_50406] = (0));

var G__50407 = (x_50406 + (1));
x_50406 = G__50407;
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

var G__50408 = (i + (1));
i = G__50408;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async50409 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50409 = (function (flag,meta50410){
this.flag = flag;
this.meta50410 = meta50410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_50411,meta50410__$1){
var self__ = this;
var _50411__$1 = this;
return (new cljs.core.async.t_cljs$core$async50409(self__.flag,meta50410__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async50409.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_50411){
var self__ = this;
var _50411__$1 = this;
return self__.meta50410;
});})(flag))
;

cljs.core.async.t_cljs$core$async50409.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50409.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async50409.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async50409.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async50409.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta50410","meta50410",181747451,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async50409.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50409.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50409";

cljs.core.async.t_cljs$core$async50409.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__37596__auto__,writer__37597__auto__,opt__37598__auto__){
return cljs.core._write.call(null,writer__37597__auto__,"cljs.core.async/t_cljs$core$async50409");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async50409 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async50409(flag__$1,meta50410){
return (new cljs.core.async.t_cljs$core$async50409(flag__$1,meta50410));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async50409(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async50412 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50412 = (function (flag,cb,meta50413){
this.flag = flag;
this.cb = cb;
this.meta50413 = meta50413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50414,meta50413__$1){
var self__ = this;
var _50414__$1 = this;
return (new cljs.core.async.t_cljs$core$async50412(self__.flag,self__.cb,meta50413__$1));
});

cljs.core.async.t_cljs$core$async50412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50414){
var self__ = this;
var _50414__$1 = this;
return self__.meta50413;
});

cljs.core.async.t_cljs$core$async50412.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50412.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async50412.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async50412.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async50412.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta50413","meta50413",-1290460640,null)], null);
});

cljs.core.async.t_cljs$core$async50412.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50412.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50412";

cljs.core.async.t_cljs$core$async50412.cljs$lang$ctorPrWriter = (function (this__37596__auto__,writer__37597__auto__,opt__37598__auto__){
return cljs.core._write.call(null,writer__37597__auto__,"cljs.core.async/t_cljs$core$async50412");
});

cljs.core.async.__GT_t_cljs$core$async50412 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async50412(flag__$1,cb__$1,meta50413){
return (new cljs.core.async.t_cljs$core$async50412(flag__$1,cb__$1,meta50413));
});

}

return (new cljs.core.async.t_cljs$core$async50412(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__50415_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50415_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50416_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50416_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__36925__auto__ = wport;
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
return port;
}
})()], null));
} else {
var G__50417 = (i + (1));
i = G__50417;
continue;
}
} else {
return null;
}
break;
}
})();
var or__36925__auto__ = ret;
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5459__auto__ = (function (){var and__36913__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__36913__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__36913__auto__;
}
})();
if(cljs.core.truth_(temp__5459__auto__)){
var got = temp__5459__auto__;
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
var args__38211__auto__ = [];
var len__38204__auto___50423 = arguments.length;
var i__38205__auto___50424 = (0);
while(true){
if((i__38205__auto___50424 < len__38204__auto___50423)){
args__38211__auto__.push((arguments[i__38205__auto___50424]));

var G__50425 = (i__38205__auto___50424 + (1));
i__38205__auto___50424 = G__50425;
continue;
} else {
}
break;
}

var argseq__38212__auto__ = ((((1) < args__38211__auto__.length))?(new cljs.core.IndexedSeq(args__38211__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38212__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__50420){
var map__50421 = p__50420;
var map__50421__$1 = ((((!((map__50421 == null)))?((((map__50421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50421):map__50421);
var opts = map__50421__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq50418){
var G__50419 = cljs.core.first.call(null,seq50418);
var seq50418__$1 = cljs.core.next.call(null,seq50418);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50419,seq50418__$1);
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
var G__50427 = arguments.length;
switch (G__50427) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__50326__auto___50473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50326__auto___50473){
return (function (){
var f__50327__auto__ = (function (){var switch__50236__auto__ = ((function (c__50326__auto___50473){
return (function (state_50451){
var state_val_50452 = (state_50451[(1)]);
if((state_val_50452 === (7))){
var inst_50447 = (state_50451[(2)]);
var state_50451__$1 = state_50451;
var statearr_50453_50474 = state_50451__$1;
(statearr_50453_50474[(2)] = inst_50447);

(statearr_50453_50474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50452 === (1))){
var state_50451__$1 = state_50451;
var statearr_50454_50475 = state_50451__$1;
(statearr_50454_50475[(2)] = null);

(statearr_50454_50475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50452 === (4))){
var inst_50430 = (state_50451[(7)]);
var inst_50430__$1 = (state_50451[(2)]);
var inst_50431 = (inst_50430__$1 == null);
var state_50451__$1 = (function (){var statearr_50455 = state_50451;
(statearr_50455[(7)] = inst_50430__$1);

return statearr_50455;
})();
if(cljs.core.truth_(inst_50431)){
var statearr_50456_50476 = state_50451__$1;
(statearr_50456_50476[(1)] = (5));

} else {
var statearr_50457_50477 = state_50451__$1;
(statearr_50457_50477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50452 === (13))){
var state_50451__$1 = state_50451;
var statearr_50458_50478 = state_50451__$1;
(statearr_50458_50478[(2)] = null);

(statearr_50458_50478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50452 === (6))){
var inst_50430 = (state_50451[(7)]);
var state_50451__$1 = state_50451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50451__$1,(11),to,inst_50430);
} else {
if((state_val_50452 === (3))){
var inst_50449 = (state_50451[(2)]);
var state_50451__$1 = state_50451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50451__$1,inst_50449);
} else {
if((state_val_50452 === (12))){
var state_50451__$1 = state_50451;
var statearr_50459_50479 = state_50451__$1;
(statearr_50459_50479[(2)] = null);

(statearr_50459_50479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50452 === (2))){
var state_50451__$1 = state_50451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50451__$1,(4),from);
} else {
if((state_val_50452 === (11))){
var inst_50440 = (state_50451[(2)]);
var state_50451__$1 = state_50451;
if(cljs.core.truth_(inst_50440)){
var statearr_50460_50480 = state_50451__$1;
(statearr_50460_50480[(1)] = (12));

} else {
var statearr_50461_50481 = state_50451__$1;
(statearr_50461_50481[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50452 === (9))){
var state_50451__$1 = state_50451;
var statearr_50462_50482 = state_50451__$1;
(statearr_50462_50482[(2)] = null);

(statearr_50462_50482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50452 === (5))){
var state_50451__$1 = state_50451;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50463_50483 = state_50451__$1;
(statearr_50463_50483[(1)] = (8));

} else {
var statearr_50464_50484 = state_50451__$1;
(statearr_50464_50484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50452 === (14))){
var inst_50445 = (state_50451[(2)]);
var state_50451__$1 = state_50451;
var statearr_50465_50485 = state_50451__$1;
(statearr_50465_50485[(2)] = inst_50445);

(statearr_50465_50485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50452 === (10))){
var inst_50437 = (state_50451[(2)]);
var state_50451__$1 = state_50451;
var statearr_50466_50486 = state_50451__$1;
(statearr_50466_50486[(2)] = inst_50437);

(statearr_50466_50486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50452 === (8))){
var inst_50434 = cljs.core.async.close_BANG_.call(null,to);
var state_50451__$1 = state_50451;
var statearr_50467_50487 = state_50451__$1;
(statearr_50467_50487[(2)] = inst_50434);

(statearr_50467_50487[(1)] = (10));


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
});})(c__50326__auto___50473))
;
return ((function (switch__50236__auto__,c__50326__auto___50473){
return (function() {
var cljs$core$async$state_machine__50237__auto__ = null;
var cljs$core$async$state_machine__50237__auto____0 = (function (){
var statearr_50468 = [null,null,null,null,null,null,null,null];
(statearr_50468[(0)] = cljs$core$async$state_machine__50237__auto__);

(statearr_50468[(1)] = (1));

return statearr_50468;
});
var cljs$core$async$state_machine__50237__auto____1 = (function (state_50451){
while(true){
var ret_value__50238__auto__ = (function (){try{while(true){
var result__50239__auto__ = switch__50236__auto__.call(null,state_50451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50239__auto__;
}
break;
}
}catch (e50469){if((e50469 instanceof Object)){
var ex__50240__auto__ = e50469;
var statearr_50470_50488 = state_50451;
(statearr_50470_50488[(5)] = ex__50240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50489 = state_50451;
state_50451 = G__50489;
continue;
} else {
return ret_value__50238__auto__;
}
break;
}
});
cljs$core$async$state_machine__50237__auto__ = function(state_50451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50237__auto____1.call(this,state_50451);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50237__auto____0;
cljs$core$async$state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50237__auto____1;
return cljs$core$async$state_machine__50237__auto__;
})()
;})(switch__50236__auto__,c__50326__auto___50473))
})();
var state__50328__auto__ = (function (){var statearr_50471 = f__50327__auto__.call(null);
(statearr_50471[(6)] = c__50326__auto___50473);

return statearr_50471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50328__auto__);
});})(c__50326__auto___50473))
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
return (function (p__50490){
var vec__50491 = p__50490;
var v = cljs.core.nth.call(null,vec__50491,(0),null);
var p = cljs.core.nth.call(null,vec__50491,(1),null);
var job = vec__50491;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__50326__auto___50662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50326__auto___50662,res,vec__50491,v,p,job,jobs,results){
return (function (){
var f__50327__auto__ = (function (){var switch__50236__auto__ = ((function (c__50326__auto___50662,res,vec__50491,v,p,job,jobs,results){
return (function (state_50498){
var state_val_50499 = (state_50498[(1)]);
if((state_val_50499 === (1))){
var state_50498__$1 = state_50498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50498__$1,(2),res,v);
} else {
if((state_val_50499 === (2))){
var inst_50495 = (state_50498[(2)]);
var inst_50496 = cljs.core.async.close_BANG_.call(null,res);
var state_50498__$1 = (function (){var statearr_50500 = state_50498;
(statearr_50500[(7)] = inst_50495);

return statearr_50500;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50498__$1,inst_50496);
} else {
return null;
}
}
});})(c__50326__auto___50662,res,vec__50491,v,p,job,jobs,results))
;
return ((function (switch__50236__auto__,c__50326__auto___50662,res,vec__50491,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____0 = (function (){
var statearr_50501 = [null,null,null,null,null,null,null,null];
(statearr_50501[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__);

(statearr_50501[(1)] = (1));

return statearr_50501;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____1 = (function (state_50498){
while(true){
var ret_value__50238__auto__ = (function (){try{while(true){
var result__50239__auto__ = switch__50236__auto__.call(null,state_50498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50239__auto__;
}
break;
}
}catch (e50502){if((e50502 instanceof Object)){
var ex__50240__auto__ = e50502;
var statearr_50503_50663 = state_50498;
(statearr_50503_50663[(5)] = ex__50240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50664 = state_50498;
state_50498 = G__50664;
continue;
} else {
return ret_value__50238__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__ = function(state_50498){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____1.call(this,state_50498);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__;
})()
;})(switch__50236__auto__,c__50326__auto___50662,res,vec__50491,v,p,job,jobs,results))
})();
var state__50328__auto__ = (function (){var statearr_50504 = f__50327__auto__.call(null);
(statearr_50504[(6)] = c__50326__auto___50662);

return statearr_50504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50328__auto__);
});})(c__50326__auto___50662,res,vec__50491,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__50505){
var vec__50506 = p__50505;
var v = cljs.core.nth.call(null,vec__50506,(0),null);
var p = cljs.core.nth.call(null,vec__50506,(1),null);
var job = vec__50506;
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
var n__37970__auto___50665 = n;
var __50666 = (0);
while(true){
if((__50666 < n__37970__auto___50665)){
var G__50509_50667 = type;
var G__50509_50668__$1 = (((G__50509_50667 instanceof cljs.core.Keyword))?G__50509_50667.fqn:null);
switch (G__50509_50668__$1) {
case "compute":
var c__50326__auto___50670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__50666,c__50326__auto___50670,G__50509_50667,G__50509_50668__$1,n__37970__auto___50665,jobs,results,process,async){
return (function (){
var f__50327__auto__ = (function (){var switch__50236__auto__ = ((function (__50666,c__50326__auto___50670,G__50509_50667,G__50509_50668__$1,n__37970__auto___50665,jobs,results,process,async){
return (function (state_50522){
var state_val_50523 = (state_50522[(1)]);
if((state_val_50523 === (1))){
var state_50522__$1 = state_50522;
var statearr_50524_50671 = state_50522__$1;
(statearr_50524_50671[(2)] = null);

(statearr_50524_50671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50523 === (2))){
var state_50522__$1 = state_50522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50522__$1,(4),jobs);
} else {
if((state_val_50523 === (3))){
var inst_50520 = (state_50522[(2)]);
var state_50522__$1 = state_50522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50522__$1,inst_50520);
} else {
if((state_val_50523 === (4))){
var inst_50512 = (state_50522[(2)]);
var inst_50513 = process.call(null,inst_50512);
var state_50522__$1 = state_50522;
if(cljs.core.truth_(inst_50513)){
var statearr_50525_50672 = state_50522__$1;
(statearr_50525_50672[(1)] = (5));

} else {
var statearr_50526_50673 = state_50522__$1;
(statearr_50526_50673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50523 === (5))){
var state_50522__$1 = state_50522;
var statearr_50527_50674 = state_50522__$1;
(statearr_50527_50674[(2)] = null);

(statearr_50527_50674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50523 === (6))){
var state_50522__$1 = state_50522;
var statearr_50528_50675 = state_50522__$1;
(statearr_50528_50675[(2)] = null);

(statearr_50528_50675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50523 === (7))){
var inst_50518 = (state_50522[(2)]);
var state_50522__$1 = state_50522;
var statearr_50529_50676 = state_50522__$1;
(statearr_50529_50676[(2)] = inst_50518);

(statearr_50529_50676[(1)] = (3));


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
});})(__50666,c__50326__auto___50670,G__50509_50667,G__50509_50668__$1,n__37970__auto___50665,jobs,results,process,async))
;
return ((function (__50666,switch__50236__auto__,c__50326__auto___50670,G__50509_50667,G__50509_50668__$1,n__37970__auto___50665,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____0 = (function (){
var statearr_50530 = [null,null,null,null,null,null,null];
(statearr_50530[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__);

(statearr_50530[(1)] = (1));

return statearr_50530;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____1 = (function (state_50522){
while(true){
var ret_value__50238__auto__ = (function (){try{while(true){
var result__50239__auto__ = switch__50236__auto__.call(null,state_50522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50239__auto__;
}
break;
}
}catch (e50531){if((e50531 instanceof Object)){
var ex__50240__auto__ = e50531;
var statearr_50532_50677 = state_50522;
(statearr_50532_50677[(5)] = ex__50240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50678 = state_50522;
state_50522 = G__50678;
continue;
} else {
return ret_value__50238__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__ = function(state_50522){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____1.call(this,state_50522);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__;
})()
;})(__50666,switch__50236__auto__,c__50326__auto___50670,G__50509_50667,G__50509_50668__$1,n__37970__auto___50665,jobs,results,process,async))
})();
var state__50328__auto__ = (function (){var statearr_50533 = f__50327__auto__.call(null);
(statearr_50533[(6)] = c__50326__auto___50670);

return statearr_50533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50328__auto__);
});})(__50666,c__50326__auto___50670,G__50509_50667,G__50509_50668__$1,n__37970__auto___50665,jobs,results,process,async))
);


break;
case "async":
var c__50326__auto___50679 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__50666,c__50326__auto___50679,G__50509_50667,G__50509_50668__$1,n__37970__auto___50665,jobs,results,process,async){
return (function (){
var f__50327__auto__ = (function (){var switch__50236__auto__ = ((function (__50666,c__50326__auto___50679,G__50509_50667,G__50509_50668__$1,n__37970__auto___50665,jobs,results,process,async){
return (function (state_50546){
var state_val_50547 = (state_50546[(1)]);
if((state_val_50547 === (1))){
var state_50546__$1 = state_50546;
var statearr_50548_50680 = state_50546__$1;
(statearr_50548_50680[(2)] = null);

(statearr_50548_50680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50547 === (2))){
var state_50546__$1 = state_50546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50546__$1,(4),jobs);
} else {
if((state_val_50547 === (3))){
var inst_50544 = (state_50546[(2)]);
var state_50546__$1 = state_50546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50546__$1,inst_50544);
} else {
if((state_val_50547 === (4))){
var inst_50536 = (state_50546[(2)]);
var inst_50537 = async.call(null,inst_50536);
var state_50546__$1 = state_50546;
if(cljs.core.truth_(inst_50537)){
var statearr_50549_50681 = state_50546__$1;
(statearr_50549_50681[(1)] = (5));

} else {
var statearr_50550_50682 = state_50546__$1;
(statearr_50550_50682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50547 === (5))){
var state_50546__$1 = state_50546;
var statearr_50551_50683 = state_50546__$1;
(statearr_50551_50683[(2)] = null);

(statearr_50551_50683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50547 === (6))){
var state_50546__$1 = state_50546;
var statearr_50552_50684 = state_50546__$1;
(statearr_50552_50684[(2)] = null);

(statearr_50552_50684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50547 === (7))){
var inst_50542 = (state_50546[(2)]);
var state_50546__$1 = state_50546;
var statearr_50553_50685 = state_50546__$1;
(statearr_50553_50685[(2)] = inst_50542);

(statearr_50553_50685[(1)] = (3));


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
});})(__50666,c__50326__auto___50679,G__50509_50667,G__50509_50668__$1,n__37970__auto___50665,jobs,results,process,async))
;
return ((function (__50666,switch__50236__auto__,c__50326__auto___50679,G__50509_50667,G__50509_50668__$1,n__37970__auto___50665,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____0 = (function (){
var statearr_50554 = [null,null,null,null,null,null,null];
(statearr_50554[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__);

(statearr_50554[(1)] = (1));

return statearr_50554;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____1 = (function (state_50546){
while(true){
var ret_value__50238__auto__ = (function (){try{while(true){
var result__50239__auto__ = switch__50236__auto__.call(null,state_50546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50239__auto__;
}
break;
}
}catch (e50555){if((e50555 instanceof Object)){
var ex__50240__auto__ = e50555;
var statearr_50556_50686 = state_50546;
(statearr_50556_50686[(5)] = ex__50240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50687 = state_50546;
state_50546 = G__50687;
continue;
} else {
return ret_value__50238__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__ = function(state_50546){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____1.call(this,state_50546);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__;
})()
;})(__50666,switch__50236__auto__,c__50326__auto___50679,G__50509_50667,G__50509_50668__$1,n__37970__auto___50665,jobs,results,process,async))
})();
var state__50328__auto__ = (function (){var statearr_50557 = f__50327__auto__.call(null);
(statearr_50557[(6)] = c__50326__auto___50679);

return statearr_50557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50328__auto__);
});})(__50666,c__50326__auto___50679,G__50509_50667,G__50509_50668__$1,n__37970__auto___50665,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50509_50668__$1)].join('')));

}

var G__50688 = (__50666 + (1));
__50666 = G__50688;
continue;
} else {
}
break;
}

var c__50326__auto___50689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50326__auto___50689,jobs,results,process,async){
return (function (){
var f__50327__auto__ = (function (){var switch__50236__auto__ = ((function (c__50326__auto___50689,jobs,results,process,async){
return (function (state_50579){
var state_val_50580 = (state_50579[(1)]);
if((state_val_50580 === (1))){
var state_50579__$1 = state_50579;
var statearr_50581_50690 = state_50579__$1;
(statearr_50581_50690[(2)] = null);

(statearr_50581_50690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50580 === (2))){
var state_50579__$1 = state_50579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50579__$1,(4),from);
} else {
if((state_val_50580 === (3))){
var inst_50577 = (state_50579[(2)]);
var state_50579__$1 = state_50579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50579__$1,inst_50577);
} else {
if((state_val_50580 === (4))){
var inst_50560 = (state_50579[(7)]);
var inst_50560__$1 = (state_50579[(2)]);
var inst_50561 = (inst_50560__$1 == null);
var state_50579__$1 = (function (){var statearr_50582 = state_50579;
(statearr_50582[(7)] = inst_50560__$1);

return statearr_50582;
})();
if(cljs.core.truth_(inst_50561)){
var statearr_50583_50691 = state_50579__$1;
(statearr_50583_50691[(1)] = (5));

} else {
var statearr_50584_50692 = state_50579__$1;
(statearr_50584_50692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50580 === (5))){
var inst_50563 = cljs.core.async.close_BANG_.call(null,jobs);
var state_50579__$1 = state_50579;
var statearr_50585_50693 = state_50579__$1;
(statearr_50585_50693[(2)] = inst_50563);

(statearr_50585_50693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50580 === (6))){
var inst_50560 = (state_50579[(7)]);
var inst_50565 = (state_50579[(8)]);
var inst_50565__$1 = cljs.core.async.chan.call(null,(1));
var inst_50566 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50567 = [inst_50560,inst_50565__$1];
var inst_50568 = (new cljs.core.PersistentVector(null,2,(5),inst_50566,inst_50567,null));
var state_50579__$1 = (function (){var statearr_50586 = state_50579;
(statearr_50586[(8)] = inst_50565__$1);

return statearr_50586;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50579__$1,(8),jobs,inst_50568);
} else {
if((state_val_50580 === (7))){
var inst_50575 = (state_50579[(2)]);
var state_50579__$1 = state_50579;
var statearr_50587_50694 = state_50579__$1;
(statearr_50587_50694[(2)] = inst_50575);

(statearr_50587_50694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50580 === (8))){
var inst_50565 = (state_50579[(8)]);
var inst_50570 = (state_50579[(2)]);
var state_50579__$1 = (function (){var statearr_50588 = state_50579;
(statearr_50588[(9)] = inst_50570);

return statearr_50588;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50579__$1,(9),results,inst_50565);
} else {
if((state_val_50580 === (9))){
var inst_50572 = (state_50579[(2)]);
var state_50579__$1 = (function (){var statearr_50589 = state_50579;
(statearr_50589[(10)] = inst_50572);

return statearr_50589;
})();
var statearr_50590_50695 = state_50579__$1;
(statearr_50590_50695[(2)] = null);

(statearr_50590_50695[(1)] = (2));


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
});})(c__50326__auto___50689,jobs,results,process,async))
;
return ((function (switch__50236__auto__,c__50326__auto___50689,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____0 = (function (){
var statearr_50591 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50591[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__);

(statearr_50591[(1)] = (1));

return statearr_50591;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____1 = (function (state_50579){
while(true){
var ret_value__50238__auto__ = (function (){try{while(true){
var result__50239__auto__ = switch__50236__auto__.call(null,state_50579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50239__auto__;
}
break;
}
}catch (e50592){if((e50592 instanceof Object)){
var ex__50240__auto__ = e50592;
var statearr_50593_50696 = state_50579;
(statearr_50593_50696[(5)] = ex__50240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50697 = state_50579;
state_50579 = G__50697;
continue;
} else {
return ret_value__50238__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__ = function(state_50579){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____1.call(this,state_50579);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__;
})()
;})(switch__50236__auto__,c__50326__auto___50689,jobs,results,process,async))
})();
var state__50328__auto__ = (function (){var statearr_50594 = f__50327__auto__.call(null);
(statearr_50594[(6)] = c__50326__auto___50689);

return statearr_50594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50328__auto__);
});})(c__50326__auto___50689,jobs,results,process,async))
);


var c__50326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50326__auto__,jobs,results,process,async){
return (function (){
var f__50327__auto__ = (function (){var switch__50236__auto__ = ((function (c__50326__auto__,jobs,results,process,async){
return (function (state_50632){
var state_val_50633 = (state_50632[(1)]);
if((state_val_50633 === (7))){
var inst_50628 = (state_50632[(2)]);
var state_50632__$1 = state_50632;
var statearr_50634_50698 = state_50632__$1;
(statearr_50634_50698[(2)] = inst_50628);

(statearr_50634_50698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (20))){
var state_50632__$1 = state_50632;
var statearr_50635_50699 = state_50632__$1;
(statearr_50635_50699[(2)] = null);

(statearr_50635_50699[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (1))){
var state_50632__$1 = state_50632;
var statearr_50636_50700 = state_50632__$1;
(statearr_50636_50700[(2)] = null);

(statearr_50636_50700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (4))){
var inst_50597 = (state_50632[(7)]);
var inst_50597__$1 = (state_50632[(2)]);
var inst_50598 = (inst_50597__$1 == null);
var state_50632__$1 = (function (){var statearr_50637 = state_50632;
(statearr_50637[(7)] = inst_50597__$1);

return statearr_50637;
})();
if(cljs.core.truth_(inst_50598)){
var statearr_50638_50701 = state_50632__$1;
(statearr_50638_50701[(1)] = (5));

} else {
var statearr_50639_50702 = state_50632__$1;
(statearr_50639_50702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (15))){
var inst_50610 = (state_50632[(8)]);
var state_50632__$1 = state_50632;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50632__$1,(18),to,inst_50610);
} else {
if((state_val_50633 === (21))){
var inst_50623 = (state_50632[(2)]);
var state_50632__$1 = state_50632;
var statearr_50640_50703 = state_50632__$1;
(statearr_50640_50703[(2)] = inst_50623);

(statearr_50640_50703[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (13))){
var inst_50625 = (state_50632[(2)]);
var state_50632__$1 = (function (){var statearr_50641 = state_50632;
(statearr_50641[(9)] = inst_50625);

return statearr_50641;
})();
var statearr_50642_50704 = state_50632__$1;
(statearr_50642_50704[(2)] = null);

(statearr_50642_50704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (6))){
var inst_50597 = (state_50632[(7)]);
var state_50632__$1 = state_50632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50632__$1,(11),inst_50597);
} else {
if((state_val_50633 === (17))){
var inst_50618 = (state_50632[(2)]);
var state_50632__$1 = state_50632;
if(cljs.core.truth_(inst_50618)){
var statearr_50643_50705 = state_50632__$1;
(statearr_50643_50705[(1)] = (19));

} else {
var statearr_50644_50706 = state_50632__$1;
(statearr_50644_50706[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (3))){
var inst_50630 = (state_50632[(2)]);
var state_50632__$1 = state_50632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50632__$1,inst_50630);
} else {
if((state_val_50633 === (12))){
var inst_50607 = (state_50632[(10)]);
var state_50632__$1 = state_50632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50632__$1,(14),inst_50607);
} else {
if((state_val_50633 === (2))){
var state_50632__$1 = state_50632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50632__$1,(4),results);
} else {
if((state_val_50633 === (19))){
var state_50632__$1 = state_50632;
var statearr_50645_50707 = state_50632__$1;
(statearr_50645_50707[(2)] = null);

(statearr_50645_50707[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (11))){
var inst_50607 = (state_50632[(2)]);
var state_50632__$1 = (function (){var statearr_50646 = state_50632;
(statearr_50646[(10)] = inst_50607);

return statearr_50646;
})();
var statearr_50647_50708 = state_50632__$1;
(statearr_50647_50708[(2)] = null);

(statearr_50647_50708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (9))){
var state_50632__$1 = state_50632;
var statearr_50648_50709 = state_50632__$1;
(statearr_50648_50709[(2)] = null);

(statearr_50648_50709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (5))){
var state_50632__$1 = state_50632;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50649_50710 = state_50632__$1;
(statearr_50649_50710[(1)] = (8));

} else {
var statearr_50650_50711 = state_50632__$1;
(statearr_50650_50711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (14))){
var inst_50610 = (state_50632[(8)]);
var inst_50612 = (state_50632[(11)]);
var inst_50610__$1 = (state_50632[(2)]);
var inst_50611 = (inst_50610__$1 == null);
var inst_50612__$1 = cljs.core.not.call(null,inst_50611);
var state_50632__$1 = (function (){var statearr_50651 = state_50632;
(statearr_50651[(8)] = inst_50610__$1);

(statearr_50651[(11)] = inst_50612__$1);

return statearr_50651;
})();
if(inst_50612__$1){
var statearr_50652_50712 = state_50632__$1;
(statearr_50652_50712[(1)] = (15));

} else {
var statearr_50653_50713 = state_50632__$1;
(statearr_50653_50713[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (16))){
var inst_50612 = (state_50632[(11)]);
var state_50632__$1 = state_50632;
var statearr_50654_50714 = state_50632__$1;
(statearr_50654_50714[(2)] = inst_50612);

(statearr_50654_50714[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (10))){
var inst_50604 = (state_50632[(2)]);
var state_50632__$1 = state_50632;
var statearr_50655_50715 = state_50632__$1;
(statearr_50655_50715[(2)] = inst_50604);

(statearr_50655_50715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (18))){
var inst_50615 = (state_50632[(2)]);
var state_50632__$1 = state_50632;
var statearr_50656_50716 = state_50632__$1;
(statearr_50656_50716[(2)] = inst_50615);

(statearr_50656_50716[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (8))){
var inst_50601 = cljs.core.async.close_BANG_.call(null,to);
var state_50632__$1 = state_50632;
var statearr_50657_50717 = state_50632__$1;
(statearr_50657_50717[(2)] = inst_50601);

(statearr_50657_50717[(1)] = (10));


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
});})(c__50326__auto__,jobs,results,process,async))
;
return ((function (switch__50236__auto__,c__50326__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____0 = (function (){
var statearr_50658 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50658[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__);

(statearr_50658[(1)] = (1));

return statearr_50658;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____1 = (function (state_50632){
while(true){
var ret_value__50238__auto__ = (function (){try{while(true){
var result__50239__auto__ = switch__50236__auto__.call(null,state_50632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50239__auto__;
}
break;
}
}catch (e50659){if((e50659 instanceof Object)){
var ex__50240__auto__ = e50659;
var statearr_50660_50718 = state_50632;
(statearr_50660_50718[(5)] = ex__50240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50719 = state_50632;
state_50632 = G__50719;
continue;
} else {
return ret_value__50238__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__ = function(state_50632){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____1.call(this,state_50632);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50237__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50237__auto__;
})()
;})(switch__50236__auto__,c__50326__auto__,jobs,results,process,async))
})();
var state__50328__auto__ = (function (){var statearr_50661 = f__50327__auto__.call(null);
(statearr_50661[(6)] = c__50326__auto__);

return statearr_50661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50328__auto__);
});})(c__50326__auto__,jobs,results,process,async))
);

return c__50326__auto__;
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
var G__50721 = arguments.length;
switch (G__50721) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__50724 = arguments.length;
switch (G__50724) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__50727 = arguments.length;
switch (G__50727) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__50326__auto___50776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50326__auto___50776,tc,fc){
return (function (){
var f__50327__auto__ = (function (){var switch__50236__auto__ = ((function (c__50326__auto___50776,tc,fc){
return (function (state_50753){
var state_val_50754 = (state_50753[(1)]);
if((state_val_50754 === (7))){
var inst_50749 = (state_50753[(2)]);
var state_50753__$1 = state_50753;
var statearr_50755_50777 = state_50753__$1;
(statearr_50755_50777[(2)] = inst_50749);

(statearr_50755_50777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50754 === (1))){
var state_50753__$1 = state_50753;
var statearr_50756_50778 = state_50753__$1;
(statearr_50756_50778[(2)] = null);

(statearr_50756_50778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50754 === (4))){
var inst_50730 = (state_50753[(7)]);
var inst_50730__$1 = (state_50753[(2)]);
var inst_50731 = (inst_50730__$1 == null);
var state_50753__$1 = (function (){var statearr_50757 = state_50753;
(statearr_50757[(7)] = inst_50730__$1);

return statearr_50757;
})();
if(cljs.core.truth_(inst_50731)){
var statearr_50758_50779 = state_50753__$1;
(statearr_50758_50779[(1)] = (5));

} else {
var statearr_50759_50780 = state_50753__$1;
(statearr_50759_50780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50754 === (13))){
var state_50753__$1 = state_50753;
var statearr_50760_50781 = state_50753__$1;
(statearr_50760_50781[(2)] = null);

(statearr_50760_50781[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50754 === (6))){
var inst_50730 = (state_50753[(7)]);
var inst_50736 = p.call(null,inst_50730);
var state_50753__$1 = state_50753;
if(cljs.core.truth_(inst_50736)){
var statearr_50761_50782 = state_50753__$1;
(statearr_50761_50782[(1)] = (9));

} else {
var statearr_50762_50783 = state_50753__$1;
(statearr_50762_50783[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50754 === (3))){
var inst_50751 = (state_50753[(2)]);
var state_50753__$1 = state_50753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50753__$1,inst_50751);
} else {
if((state_val_50754 === (12))){
var state_50753__$1 = state_50753;
var statearr_50763_50784 = state_50753__$1;
(statearr_50763_50784[(2)] = null);

(statearr_50763_50784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50754 === (2))){
var state_50753__$1 = state_50753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50753__$1,(4),ch);
} else {
if((state_val_50754 === (11))){
var inst_50730 = (state_50753[(7)]);
var inst_50740 = (state_50753[(2)]);
var state_50753__$1 = state_50753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50753__$1,(8),inst_50740,inst_50730);
} else {
if((state_val_50754 === (9))){
var state_50753__$1 = state_50753;
var statearr_50764_50785 = state_50753__$1;
(statearr_50764_50785[(2)] = tc);

(statearr_50764_50785[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50754 === (5))){
var inst_50733 = cljs.core.async.close_BANG_.call(null,tc);
var inst_50734 = cljs.core.async.close_BANG_.call(null,fc);
var state_50753__$1 = (function (){var statearr_50765 = state_50753;
(statearr_50765[(8)] = inst_50733);

return statearr_50765;
})();
var statearr_50766_50786 = state_50753__$1;
(statearr_50766_50786[(2)] = inst_50734);

(statearr_50766_50786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50754 === (14))){
var inst_50747 = (state_50753[(2)]);
var state_50753__$1 = state_50753;
var statearr_50767_50787 = state_50753__$1;
(statearr_50767_50787[(2)] = inst_50747);

(statearr_50767_50787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50754 === (10))){
var state_50753__$1 = state_50753;
var statearr_50768_50788 = state_50753__$1;
(statearr_50768_50788[(2)] = fc);

(statearr_50768_50788[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50754 === (8))){
var inst_50742 = (state_50753[(2)]);
var state_50753__$1 = state_50753;
if(cljs.core.truth_(inst_50742)){
var statearr_50769_50789 = state_50753__$1;
(statearr_50769_50789[(1)] = (12));

} else {
var statearr_50770_50790 = state_50753__$1;
(statearr_50770_50790[(1)] = (13));

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
});})(c__50326__auto___50776,tc,fc))
;
return ((function (switch__50236__auto__,c__50326__auto___50776,tc,fc){
return (function() {
var cljs$core$async$state_machine__50237__auto__ = null;
var cljs$core$async$state_machine__50237__auto____0 = (function (){
var statearr_50771 = [null,null,null,null,null,null,null,null,null];
(statearr_50771[(0)] = cljs$core$async$state_machine__50237__auto__);

(statearr_50771[(1)] = (1));

return statearr_50771;
});
var cljs$core$async$state_machine__50237__auto____1 = (function (state_50753){
while(true){
var ret_value__50238__auto__ = (function (){try{while(true){
var result__50239__auto__ = switch__50236__auto__.call(null,state_50753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50239__auto__;
}
break;
}
}catch (e50772){if((e50772 instanceof Object)){
var ex__50240__auto__ = e50772;
var statearr_50773_50791 = state_50753;
(statearr_50773_50791[(5)] = ex__50240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50792 = state_50753;
state_50753 = G__50792;
continue;
} else {
return ret_value__50238__auto__;
}
break;
}
});
cljs$core$async$state_machine__50237__auto__ = function(state_50753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50237__auto____1.call(this,state_50753);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50237__auto____0;
cljs$core$async$state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50237__auto____1;
return cljs$core$async$state_machine__50237__auto__;
})()
;})(switch__50236__auto__,c__50326__auto___50776,tc,fc))
})();
var state__50328__auto__ = (function (){var statearr_50774 = f__50327__auto__.call(null);
(statearr_50774[(6)] = c__50326__auto___50776);

return statearr_50774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50328__auto__);
});})(c__50326__auto___50776,tc,fc))
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
var c__50326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50326__auto__){
return (function (){
var f__50327__auto__ = (function (){var switch__50236__auto__ = ((function (c__50326__auto__){
return (function (state_50813){
var state_val_50814 = (state_50813[(1)]);
if((state_val_50814 === (7))){
var inst_50809 = (state_50813[(2)]);
var state_50813__$1 = state_50813;
var statearr_50815_50833 = state_50813__$1;
(statearr_50815_50833[(2)] = inst_50809);

(statearr_50815_50833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (1))){
var inst_50793 = init;
var state_50813__$1 = (function (){var statearr_50816 = state_50813;
(statearr_50816[(7)] = inst_50793);

return statearr_50816;
})();
var statearr_50817_50834 = state_50813__$1;
(statearr_50817_50834[(2)] = null);

(statearr_50817_50834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (4))){
var inst_50796 = (state_50813[(8)]);
var inst_50796__$1 = (state_50813[(2)]);
var inst_50797 = (inst_50796__$1 == null);
var state_50813__$1 = (function (){var statearr_50818 = state_50813;
(statearr_50818[(8)] = inst_50796__$1);

return statearr_50818;
})();
if(cljs.core.truth_(inst_50797)){
var statearr_50819_50835 = state_50813__$1;
(statearr_50819_50835[(1)] = (5));

} else {
var statearr_50820_50836 = state_50813__$1;
(statearr_50820_50836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (6))){
var inst_50796 = (state_50813[(8)]);
var inst_50800 = (state_50813[(9)]);
var inst_50793 = (state_50813[(7)]);
var inst_50800__$1 = f.call(null,inst_50793,inst_50796);
var inst_50801 = cljs.core.reduced_QMARK_.call(null,inst_50800__$1);
var state_50813__$1 = (function (){var statearr_50821 = state_50813;
(statearr_50821[(9)] = inst_50800__$1);

return statearr_50821;
})();
if(inst_50801){
var statearr_50822_50837 = state_50813__$1;
(statearr_50822_50837[(1)] = (8));

} else {
var statearr_50823_50838 = state_50813__$1;
(statearr_50823_50838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (3))){
var inst_50811 = (state_50813[(2)]);
var state_50813__$1 = state_50813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50813__$1,inst_50811);
} else {
if((state_val_50814 === (2))){
var state_50813__$1 = state_50813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50813__$1,(4),ch);
} else {
if((state_val_50814 === (9))){
var inst_50800 = (state_50813[(9)]);
var inst_50793 = inst_50800;
var state_50813__$1 = (function (){var statearr_50824 = state_50813;
(statearr_50824[(7)] = inst_50793);

return statearr_50824;
})();
var statearr_50825_50839 = state_50813__$1;
(statearr_50825_50839[(2)] = null);

(statearr_50825_50839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (5))){
var inst_50793 = (state_50813[(7)]);
var state_50813__$1 = state_50813;
var statearr_50826_50840 = state_50813__$1;
(statearr_50826_50840[(2)] = inst_50793);

(statearr_50826_50840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (10))){
var inst_50807 = (state_50813[(2)]);
var state_50813__$1 = state_50813;
var statearr_50827_50841 = state_50813__$1;
(statearr_50827_50841[(2)] = inst_50807);

(statearr_50827_50841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (8))){
var inst_50800 = (state_50813[(9)]);
var inst_50803 = cljs.core.deref.call(null,inst_50800);
var state_50813__$1 = state_50813;
var statearr_50828_50842 = state_50813__$1;
(statearr_50828_50842[(2)] = inst_50803);

(statearr_50828_50842[(1)] = (10));


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
});})(c__50326__auto__))
;
return ((function (switch__50236__auto__,c__50326__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__50237__auto__ = null;
var cljs$core$async$reduce_$_state_machine__50237__auto____0 = (function (){
var statearr_50829 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50829[(0)] = cljs$core$async$reduce_$_state_machine__50237__auto__);

(statearr_50829[(1)] = (1));

return statearr_50829;
});
var cljs$core$async$reduce_$_state_machine__50237__auto____1 = (function (state_50813){
while(true){
var ret_value__50238__auto__ = (function (){try{while(true){
var result__50239__auto__ = switch__50236__auto__.call(null,state_50813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50239__auto__;
}
break;
}
}catch (e50830){if((e50830 instanceof Object)){
var ex__50240__auto__ = e50830;
var statearr_50831_50843 = state_50813;
(statearr_50831_50843[(5)] = ex__50240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50844 = state_50813;
state_50813 = G__50844;
continue;
} else {
return ret_value__50238__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__50237__auto__ = function(state_50813){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__50237__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__50237__auto____1.call(this,state_50813);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__50237__auto____0;
cljs$core$async$reduce_$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__50237__auto____1;
return cljs$core$async$reduce_$_state_machine__50237__auto__;
})()
;})(switch__50236__auto__,c__50326__auto__))
})();
var state__50328__auto__ = (function (){var statearr_50832 = f__50327__auto__.call(null);
(statearr_50832[(6)] = c__50326__auto__);

return statearr_50832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50328__auto__);
});})(c__50326__auto__))
);

return c__50326__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__50326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50326__auto__,f__$1){
return (function (){
var f__50327__auto__ = (function (){var switch__50236__auto__ = ((function (c__50326__auto__,f__$1){
return (function (state_50850){
var state_val_50851 = (state_50850[(1)]);
if((state_val_50851 === (1))){
var inst_50845 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_50850__$1 = state_50850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50850__$1,(2),inst_50845);
} else {
if((state_val_50851 === (2))){
var inst_50847 = (state_50850[(2)]);
var inst_50848 = f__$1.call(null,inst_50847);
var state_50850__$1 = state_50850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50850__$1,inst_50848);
} else {
return null;
}
}
});})(c__50326__auto__,f__$1))
;
return ((function (switch__50236__auto__,c__50326__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__50237__auto__ = null;
var cljs$core$async$transduce_$_state_machine__50237__auto____0 = (function (){
var statearr_50852 = [null,null,null,null,null,null,null];
(statearr_50852[(0)] = cljs$core$async$transduce_$_state_machine__50237__auto__);

(statearr_50852[(1)] = (1));

return statearr_50852;
});
var cljs$core$async$transduce_$_state_machine__50237__auto____1 = (function (state_50850){
while(true){
var ret_value__50238__auto__ = (function (){try{while(true){
var result__50239__auto__ = switch__50236__auto__.call(null,state_50850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50239__auto__;
}
break;
}
}catch (e50853){if((e50853 instanceof Object)){
var ex__50240__auto__ = e50853;
var statearr_50854_50856 = state_50850;
(statearr_50854_50856[(5)] = ex__50240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50857 = state_50850;
state_50850 = G__50857;
continue;
} else {
return ret_value__50238__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__50237__auto__ = function(state_50850){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__50237__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__50237__auto____1.call(this,state_50850);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__50237__auto____0;
cljs$core$async$transduce_$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__50237__auto____1;
return cljs$core$async$transduce_$_state_machine__50237__auto__;
})()
;})(switch__50236__auto__,c__50326__auto__,f__$1))
})();
var state__50328__auto__ = (function (){var statearr_50855 = f__50327__auto__.call(null);
(statearr_50855[(6)] = c__50326__auto__);

return statearr_50855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50328__auto__);
});})(c__50326__auto__,f__$1))
);

return c__50326__auto__;
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
var G__50859 = arguments.length;
switch (G__50859) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__50326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50326__auto__){
return (function (){
var f__50327__auto__ = (function (){var switch__50236__auto__ = ((function (c__50326__auto__){
return (function (state_50884){
var state_val_50885 = (state_50884[(1)]);
if((state_val_50885 === (7))){
var inst_50866 = (state_50884[(2)]);
var state_50884__$1 = state_50884;
var statearr_50886_50907 = state_50884__$1;
(statearr_50886_50907[(2)] = inst_50866);

(statearr_50886_50907[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (1))){
var inst_50860 = cljs.core.seq.call(null,coll);
var inst_50861 = inst_50860;
var state_50884__$1 = (function (){var statearr_50887 = state_50884;
(statearr_50887[(7)] = inst_50861);

return statearr_50887;
})();
var statearr_50888_50908 = state_50884__$1;
(statearr_50888_50908[(2)] = null);

(statearr_50888_50908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (4))){
var inst_50861 = (state_50884[(7)]);
var inst_50864 = cljs.core.first.call(null,inst_50861);
var state_50884__$1 = state_50884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50884__$1,(7),ch,inst_50864);
} else {
if((state_val_50885 === (13))){
var inst_50878 = (state_50884[(2)]);
var state_50884__$1 = state_50884;
var statearr_50889_50909 = state_50884__$1;
(statearr_50889_50909[(2)] = inst_50878);

(statearr_50889_50909[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (6))){
var inst_50869 = (state_50884[(2)]);
var state_50884__$1 = state_50884;
if(cljs.core.truth_(inst_50869)){
var statearr_50890_50910 = state_50884__$1;
(statearr_50890_50910[(1)] = (8));

} else {
var statearr_50891_50911 = state_50884__$1;
(statearr_50891_50911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (3))){
var inst_50882 = (state_50884[(2)]);
var state_50884__$1 = state_50884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50884__$1,inst_50882);
} else {
if((state_val_50885 === (12))){
var state_50884__$1 = state_50884;
var statearr_50892_50912 = state_50884__$1;
(statearr_50892_50912[(2)] = null);

(statearr_50892_50912[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (2))){
var inst_50861 = (state_50884[(7)]);
var state_50884__$1 = state_50884;
if(cljs.core.truth_(inst_50861)){
var statearr_50893_50913 = state_50884__$1;
(statearr_50893_50913[(1)] = (4));

} else {
var statearr_50894_50914 = state_50884__$1;
(statearr_50894_50914[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (11))){
var inst_50875 = cljs.core.async.close_BANG_.call(null,ch);
var state_50884__$1 = state_50884;
var statearr_50895_50915 = state_50884__$1;
(statearr_50895_50915[(2)] = inst_50875);

(statearr_50895_50915[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (9))){
var state_50884__$1 = state_50884;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50896_50916 = state_50884__$1;
(statearr_50896_50916[(1)] = (11));

} else {
var statearr_50897_50917 = state_50884__$1;
(statearr_50897_50917[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (5))){
var inst_50861 = (state_50884[(7)]);
var state_50884__$1 = state_50884;
var statearr_50898_50918 = state_50884__$1;
(statearr_50898_50918[(2)] = inst_50861);

(statearr_50898_50918[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (10))){
var inst_50880 = (state_50884[(2)]);
var state_50884__$1 = state_50884;
var statearr_50899_50919 = state_50884__$1;
(statearr_50899_50919[(2)] = inst_50880);

(statearr_50899_50919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (8))){
var inst_50861 = (state_50884[(7)]);
var inst_50871 = cljs.core.next.call(null,inst_50861);
var inst_50861__$1 = inst_50871;
var state_50884__$1 = (function (){var statearr_50900 = state_50884;
(statearr_50900[(7)] = inst_50861__$1);

return statearr_50900;
})();
var statearr_50901_50920 = state_50884__$1;
(statearr_50901_50920[(2)] = null);

(statearr_50901_50920[(1)] = (2));


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
});})(c__50326__auto__))
;
return ((function (switch__50236__auto__,c__50326__auto__){
return (function() {
var cljs$core$async$state_machine__50237__auto__ = null;
var cljs$core$async$state_machine__50237__auto____0 = (function (){
var statearr_50902 = [null,null,null,null,null,null,null,null];
(statearr_50902[(0)] = cljs$core$async$state_machine__50237__auto__);

(statearr_50902[(1)] = (1));

return statearr_50902;
});
var cljs$core$async$state_machine__50237__auto____1 = (function (state_50884){
while(true){
var ret_value__50238__auto__ = (function (){try{while(true){
var result__50239__auto__ = switch__50236__auto__.call(null,state_50884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50239__auto__;
}
break;
}
}catch (e50903){if((e50903 instanceof Object)){
var ex__50240__auto__ = e50903;
var statearr_50904_50921 = state_50884;
(statearr_50904_50921[(5)] = ex__50240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50922 = state_50884;
state_50884 = G__50922;
continue;
} else {
return ret_value__50238__auto__;
}
break;
}
});
cljs$core$async$state_machine__50237__auto__ = function(state_50884){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50237__auto____1.call(this,state_50884);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50237__auto____0;
cljs$core$async$state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50237__auto____1;
return cljs$core$async$state_machine__50237__auto__;
})()
;})(switch__50236__auto__,c__50326__auto__))
})();
var state__50328__auto__ = (function (){var statearr_50905 = f__50327__auto__.call(null);
(statearr_50905[(6)] = c__50326__auto__);

return statearr_50905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50328__auto__);
});})(c__50326__auto__))
);

return c__50326__auto__;
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
var x__37658__auto__ = (((_ == null))?null:_);
var m__37659__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__37658__auto__)]);
if(!((m__37659__auto__ == null))){
return m__37659__auto__.call(null,_);
} else {
var m__37659__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__37659__auto____$1 == null))){
return m__37659__auto____$1.call(null,_);
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
var x__37658__auto__ = (((m == null))?null:m);
var m__37659__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__37658__auto__)]);
if(!((m__37659__auto__ == null))){
return m__37659__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__37659__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__37659__auto____$1 == null))){
return m__37659__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__37658__auto__ = (((m == null))?null:m);
var m__37659__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__37658__auto__)]);
if(!((m__37659__auto__ == null))){
return m__37659__auto__.call(null,m,ch);
} else {
var m__37659__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__37659__auto____$1 == null))){
return m__37659__auto____$1.call(null,m,ch);
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
var x__37658__auto__ = (((m == null))?null:m);
var m__37659__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__37658__auto__)]);
if(!((m__37659__auto__ == null))){
return m__37659__auto__.call(null,m);
} else {
var m__37659__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__37659__auto____$1 == null))){
return m__37659__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async50923 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50923 = (function (ch,cs,meta50924){
this.ch = ch;
this.cs = cs;
this.meta50924 = meta50924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_50925,meta50924__$1){
var self__ = this;
var _50925__$1 = this;
return (new cljs.core.async.t_cljs$core$async50923(self__.ch,self__.cs,meta50924__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async50923.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_50925){
var self__ = this;
var _50925__$1 = this;
return self__.meta50924;
});})(cs))
;

cljs.core.async.t_cljs$core$async50923.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50923.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async50923.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50923.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async50923.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async50923.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async50923.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta50924","meta50924",-1793079226,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async50923.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50923";

cljs.core.async.t_cljs$core$async50923.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__37596__auto__,writer__37597__auto__,opt__37598__auto__){
return cljs.core._write.call(null,writer__37597__auto__,"cljs.core.async/t_cljs$core$async50923");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async50923 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async50923(ch__$1,cs__$1,meta50924){
return (new cljs.core.async.t_cljs$core$async50923(ch__$1,cs__$1,meta50924));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async50923(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__50326__auto___51145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50326__auto___51145,cs,m,dchan,dctr,done){
return (function (){
var f__50327__auto__ = (function (){var switch__50236__auto__ = ((function (c__50326__auto___51145,cs,m,dchan,dctr,done){
return (function (state_51060){
var state_val_51061 = (state_51060[(1)]);
if((state_val_51061 === (7))){
var inst_51056 = (state_51060[(2)]);
var state_51060__$1 = state_51060;
var statearr_51062_51146 = state_51060__$1;
(statearr_51062_51146[(2)] = inst_51056);

(statearr_51062_51146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (20))){
var inst_50959 = (state_51060[(7)]);
var inst_50971 = cljs.core.first.call(null,inst_50959);
var inst_50972 = cljs.core.nth.call(null,inst_50971,(0),null);
var inst_50973 = cljs.core.nth.call(null,inst_50971,(1),null);
var state_51060__$1 = (function (){var statearr_51063 = state_51060;
(statearr_51063[(8)] = inst_50972);

return statearr_51063;
})();
if(cljs.core.truth_(inst_50973)){
var statearr_51064_51147 = state_51060__$1;
(statearr_51064_51147[(1)] = (22));

} else {
var statearr_51065_51148 = state_51060__$1;
(statearr_51065_51148[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (27))){
var inst_51008 = (state_51060[(9)]);
var inst_51001 = (state_51060[(10)]);
var inst_51003 = (state_51060[(11)]);
var inst_50928 = (state_51060[(12)]);
var inst_51008__$1 = cljs.core._nth.call(null,inst_51001,inst_51003);
var inst_51009 = cljs.core.async.put_BANG_.call(null,inst_51008__$1,inst_50928,done);
var state_51060__$1 = (function (){var statearr_51066 = state_51060;
(statearr_51066[(9)] = inst_51008__$1);

return statearr_51066;
})();
if(cljs.core.truth_(inst_51009)){
var statearr_51067_51149 = state_51060__$1;
(statearr_51067_51149[(1)] = (30));

} else {
var statearr_51068_51150 = state_51060__$1;
(statearr_51068_51150[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (1))){
var state_51060__$1 = state_51060;
var statearr_51069_51151 = state_51060__$1;
(statearr_51069_51151[(2)] = null);

(statearr_51069_51151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (24))){
var inst_50959 = (state_51060[(7)]);
var inst_50978 = (state_51060[(2)]);
var inst_50979 = cljs.core.next.call(null,inst_50959);
var inst_50937 = inst_50979;
var inst_50938 = null;
var inst_50939 = (0);
var inst_50940 = (0);
var state_51060__$1 = (function (){var statearr_51070 = state_51060;
(statearr_51070[(13)] = inst_50937);

(statearr_51070[(14)] = inst_50939);

(statearr_51070[(15)] = inst_50978);

(statearr_51070[(16)] = inst_50938);

(statearr_51070[(17)] = inst_50940);

return statearr_51070;
})();
var statearr_51071_51152 = state_51060__$1;
(statearr_51071_51152[(2)] = null);

(statearr_51071_51152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (39))){
var state_51060__$1 = state_51060;
var statearr_51075_51153 = state_51060__$1;
(statearr_51075_51153[(2)] = null);

(statearr_51075_51153[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (4))){
var inst_50928 = (state_51060[(12)]);
var inst_50928__$1 = (state_51060[(2)]);
var inst_50929 = (inst_50928__$1 == null);
var state_51060__$1 = (function (){var statearr_51076 = state_51060;
(statearr_51076[(12)] = inst_50928__$1);

return statearr_51076;
})();
if(cljs.core.truth_(inst_50929)){
var statearr_51077_51154 = state_51060__$1;
(statearr_51077_51154[(1)] = (5));

} else {
var statearr_51078_51155 = state_51060__$1;
(statearr_51078_51155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (15))){
var inst_50937 = (state_51060[(13)]);
var inst_50939 = (state_51060[(14)]);
var inst_50938 = (state_51060[(16)]);
var inst_50940 = (state_51060[(17)]);
var inst_50955 = (state_51060[(2)]);
var inst_50956 = (inst_50940 + (1));
var tmp51072 = inst_50937;
var tmp51073 = inst_50939;
var tmp51074 = inst_50938;
var inst_50937__$1 = tmp51072;
var inst_50938__$1 = tmp51074;
var inst_50939__$1 = tmp51073;
var inst_50940__$1 = inst_50956;
var state_51060__$1 = (function (){var statearr_51079 = state_51060;
(statearr_51079[(13)] = inst_50937__$1);

(statearr_51079[(14)] = inst_50939__$1);

(statearr_51079[(16)] = inst_50938__$1);

(statearr_51079[(17)] = inst_50940__$1);

(statearr_51079[(18)] = inst_50955);

return statearr_51079;
})();
var statearr_51080_51156 = state_51060__$1;
(statearr_51080_51156[(2)] = null);

(statearr_51080_51156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (21))){
var inst_50982 = (state_51060[(2)]);
var state_51060__$1 = state_51060;
var statearr_51084_51157 = state_51060__$1;
(statearr_51084_51157[(2)] = inst_50982);

(statearr_51084_51157[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (31))){
var inst_51008 = (state_51060[(9)]);
var inst_51012 = done.call(null,null);
var inst_51013 = cljs.core.async.untap_STAR_.call(null,m,inst_51008);
var state_51060__$1 = (function (){var statearr_51085 = state_51060;
(statearr_51085[(19)] = inst_51012);

return statearr_51085;
})();
var statearr_51086_51158 = state_51060__$1;
(statearr_51086_51158[(2)] = inst_51013);

(statearr_51086_51158[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (32))){
var inst_51000 = (state_51060[(20)]);
var inst_51002 = (state_51060[(21)]);
var inst_51001 = (state_51060[(10)]);
var inst_51003 = (state_51060[(11)]);
var inst_51015 = (state_51060[(2)]);
var inst_51016 = (inst_51003 + (1));
var tmp51081 = inst_51000;
var tmp51082 = inst_51002;
var tmp51083 = inst_51001;
var inst_51000__$1 = tmp51081;
var inst_51001__$1 = tmp51083;
var inst_51002__$1 = tmp51082;
var inst_51003__$1 = inst_51016;
var state_51060__$1 = (function (){var statearr_51087 = state_51060;
(statearr_51087[(20)] = inst_51000__$1);

(statearr_51087[(21)] = inst_51002__$1);

(statearr_51087[(22)] = inst_51015);

(statearr_51087[(10)] = inst_51001__$1);

(statearr_51087[(11)] = inst_51003__$1);

return statearr_51087;
})();
var statearr_51088_51159 = state_51060__$1;
(statearr_51088_51159[(2)] = null);

(statearr_51088_51159[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (40))){
var inst_51028 = (state_51060[(23)]);
var inst_51032 = done.call(null,null);
var inst_51033 = cljs.core.async.untap_STAR_.call(null,m,inst_51028);
var state_51060__$1 = (function (){var statearr_51089 = state_51060;
(statearr_51089[(24)] = inst_51032);

return statearr_51089;
})();
var statearr_51090_51160 = state_51060__$1;
(statearr_51090_51160[(2)] = inst_51033);

(statearr_51090_51160[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (33))){
var inst_51019 = (state_51060[(25)]);
var inst_51021 = cljs.core.chunked_seq_QMARK_.call(null,inst_51019);
var state_51060__$1 = state_51060;
if(inst_51021){
var statearr_51091_51161 = state_51060__$1;
(statearr_51091_51161[(1)] = (36));

} else {
var statearr_51092_51162 = state_51060__$1;
(statearr_51092_51162[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (13))){
var inst_50949 = (state_51060[(26)]);
var inst_50952 = cljs.core.async.close_BANG_.call(null,inst_50949);
var state_51060__$1 = state_51060;
var statearr_51093_51163 = state_51060__$1;
(statearr_51093_51163[(2)] = inst_50952);

(statearr_51093_51163[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (22))){
var inst_50972 = (state_51060[(8)]);
var inst_50975 = cljs.core.async.close_BANG_.call(null,inst_50972);
var state_51060__$1 = state_51060;
var statearr_51094_51164 = state_51060__$1;
(statearr_51094_51164[(2)] = inst_50975);

(statearr_51094_51164[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (36))){
var inst_51019 = (state_51060[(25)]);
var inst_51023 = cljs.core.chunk_first.call(null,inst_51019);
var inst_51024 = cljs.core.chunk_rest.call(null,inst_51019);
var inst_51025 = cljs.core.count.call(null,inst_51023);
var inst_51000 = inst_51024;
var inst_51001 = inst_51023;
var inst_51002 = inst_51025;
var inst_51003 = (0);
var state_51060__$1 = (function (){var statearr_51095 = state_51060;
(statearr_51095[(20)] = inst_51000);

(statearr_51095[(21)] = inst_51002);

(statearr_51095[(10)] = inst_51001);

(statearr_51095[(11)] = inst_51003);

return statearr_51095;
})();
var statearr_51096_51165 = state_51060__$1;
(statearr_51096_51165[(2)] = null);

(statearr_51096_51165[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (41))){
var inst_51019 = (state_51060[(25)]);
var inst_51035 = (state_51060[(2)]);
var inst_51036 = cljs.core.next.call(null,inst_51019);
var inst_51000 = inst_51036;
var inst_51001 = null;
var inst_51002 = (0);
var inst_51003 = (0);
var state_51060__$1 = (function (){var statearr_51097 = state_51060;
(statearr_51097[(20)] = inst_51000);

(statearr_51097[(21)] = inst_51002);

(statearr_51097[(10)] = inst_51001);

(statearr_51097[(27)] = inst_51035);

(statearr_51097[(11)] = inst_51003);

return statearr_51097;
})();
var statearr_51098_51166 = state_51060__$1;
(statearr_51098_51166[(2)] = null);

(statearr_51098_51166[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (43))){
var state_51060__$1 = state_51060;
var statearr_51099_51167 = state_51060__$1;
(statearr_51099_51167[(2)] = null);

(statearr_51099_51167[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (29))){
var inst_51044 = (state_51060[(2)]);
var state_51060__$1 = state_51060;
var statearr_51100_51168 = state_51060__$1;
(statearr_51100_51168[(2)] = inst_51044);

(statearr_51100_51168[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (44))){
var inst_51053 = (state_51060[(2)]);
var state_51060__$1 = (function (){var statearr_51101 = state_51060;
(statearr_51101[(28)] = inst_51053);

return statearr_51101;
})();
var statearr_51102_51169 = state_51060__$1;
(statearr_51102_51169[(2)] = null);

(statearr_51102_51169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (6))){
var inst_50992 = (state_51060[(29)]);
var inst_50991 = cljs.core.deref.call(null,cs);
var inst_50992__$1 = cljs.core.keys.call(null,inst_50991);
var inst_50993 = cljs.core.count.call(null,inst_50992__$1);
var inst_50994 = cljs.core.reset_BANG_.call(null,dctr,inst_50993);
var inst_50999 = cljs.core.seq.call(null,inst_50992__$1);
var inst_51000 = inst_50999;
var inst_51001 = null;
var inst_51002 = (0);
var inst_51003 = (0);
var state_51060__$1 = (function (){var statearr_51103 = state_51060;
(statearr_51103[(20)] = inst_51000);

(statearr_51103[(29)] = inst_50992__$1);

(statearr_51103[(21)] = inst_51002);

(statearr_51103[(10)] = inst_51001);

(statearr_51103[(11)] = inst_51003);

(statearr_51103[(30)] = inst_50994);

return statearr_51103;
})();
var statearr_51104_51170 = state_51060__$1;
(statearr_51104_51170[(2)] = null);

(statearr_51104_51170[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (28))){
var inst_51000 = (state_51060[(20)]);
var inst_51019 = (state_51060[(25)]);
var inst_51019__$1 = cljs.core.seq.call(null,inst_51000);
var state_51060__$1 = (function (){var statearr_51105 = state_51060;
(statearr_51105[(25)] = inst_51019__$1);

return statearr_51105;
})();
if(inst_51019__$1){
var statearr_51106_51171 = state_51060__$1;
(statearr_51106_51171[(1)] = (33));

} else {
var statearr_51107_51172 = state_51060__$1;
(statearr_51107_51172[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (25))){
var inst_51002 = (state_51060[(21)]);
var inst_51003 = (state_51060[(11)]);
var inst_51005 = (inst_51003 < inst_51002);
var inst_51006 = inst_51005;
var state_51060__$1 = state_51060;
if(cljs.core.truth_(inst_51006)){
var statearr_51108_51173 = state_51060__$1;
(statearr_51108_51173[(1)] = (27));

} else {
var statearr_51109_51174 = state_51060__$1;
(statearr_51109_51174[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (34))){
var state_51060__$1 = state_51060;
var statearr_51110_51175 = state_51060__$1;
(statearr_51110_51175[(2)] = null);

(statearr_51110_51175[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (17))){
var state_51060__$1 = state_51060;
var statearr_51111_51176 = state_51060__$1;
(statearr_51111_51176[(2)] = null);

(statearr_51111_51176[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (3))){
var inst_51058 = (state_51060[(2)]);
var state_51060__$1 = state_51060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51060__$1,inst_51058);
} else {
if((state_val_51061 === (12))){
var inst_50987 = (state_51060[(2)]);
var state_51060__$1 = state_51060;
var statearr_51112_51177 = state_51060__$1;
(statearr_51112_51177[(2)] = inst_50987);

(statearr_51112_51177[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (2))){
var state_51060__$1 = state_51060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51060__$1,(4),ch);
} else {
if((state_val_51061 === (23))){
var state_51060__$1 = state_51060;
var statearr_51113_51178 = state_51060__$1;
(statearr_51113_51178[(2)] = null);

(statearr_51113_51178[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (35))){
var inst_51042 = (state_51060[(2)]);
var state_51060__$1 = state_51060;
var statearr_51114_51179 = state_51060__$1;
(statearr_51114_51179[(2)] = inst_51042);

(statearr_51114_51179[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (19))){
var inst_50959 = (state_51060[(7)]);
var inst_50963 = cljs.core.chunk_first.call(null,inst_50959);
var inst_50964 = cljs.core.chunk_rest.call(null,inst_50959);
var inst_50965 = cljs.core.count.call(null,inst_50963);
var inst_50937 = inst_50964;
var inst_50938 = inst_50963;
var inst_50939 = inst_50965;
var inst_50940 = (0);
var state_51060__$1 = (function (){var statearr_51115 = state_51060;
(statearr_51115[(13)] = inst_50937);

(statearr_51115[(14)] = inst_50939);

(statearr_51115[(16)] = inst_50938);

(statearr_51115[(17)] = inst_50940);

return statearr_51115;
})();
var statearr_51116_51180 = state_51060__$1;
(statearr_51116_51180[(2)] = null);

(statearr_51116_51180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (11))){
var inst_50937 = (state_51060[(13)]);
var inst_50959 = (state_51060[(7)]);
var inst_50959__$1 = cljs.core.seq.call(null,inst_50937);
var state_51060__$1 = (function (){var statearr_51117 = state_51060;
(statearr_51117[(7)] = inst_50959__$1);

return statearr_51117;
})();
if(inst_50959__$1){
var statearr_51118_51181 = state_51060__$1;
(statearr_51118_51181[(1)] = (16));

} else {
var statearr_51119_51182 = state_51060__$1;
(statearr_51119_51182[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (9))){
var inst_50989 = (state_51060[(2)]);
var state_51060__$1 = state_51060;
var statearr_51120_51183 = state_51060__$1;
(statearr_51120_51183[(2)] = inst_50989);

(statearr_51120_51183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (5))){
var inst_50935 = cljs.core.deref.call(null,cs);
var inst_50936 = cljs.core.seq.call(null,inst_50935);
var inst_50937 = inst_50936;
var inst_50938 = null;
var inst_50939 = (0);
var inst_50940 = (0);
var state_51060__$1 = (function (){var statearr_51121 = state_51060;
(statearr_51121[(13)] = inst_50937);

(statearr_51121[(14)] = inst_50939);

(statearr_51121[(16)] = inst_50938);

(statearr_51121[(17)] = inst_50940);

return statearr_51121;
})();
var statearr_51122_51184 = state_51060__$1;
(statearr_51122_51184[(2)] = null);

(statearr_51122_51184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (14))){
var state_51060__$1 = state_51060;
var statearr_51123_51185 = state_51060__$1;
(statearr_51123_51185[(2)] = null);

(statearr_51123_51185[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (45))){
var inst_51050 = (state_51060[(2)]);
var state_51060__$1 = state_51060;
var statearr_51124_51186 = state_51060__$1;
(statearr_51124_51186[(2)] = inst_51050);

(statearr_51124_51186[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (26))){
var inst_50992 = (state_51060[(29)]);
var inst_51046 = (state_51060[(2)]);
var inst_51047 = cljs.core.seq.call(null,inst_50992);
var state_51060__$1 = (function (){var statearr_51125 = state_51060;
(statearr_51125[(31)] = inst_51046);

return statearr_51125;
})();
if(inst_51047){
var statearr_51126_51187 = state_51060__$1;
(statearr_51126_51187[(1)] = (42));

} else {
var statearr_51127_51188 = state_51060__$1;
(statearr_51127_51188[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (16))){
var inst_50959 = (state_51060[(7)]);
var inst_50961 = cljs.core.chunked_seq_QMARK_.call(null,inst_50959);
var state_51060__$1 = state_51060;
if(inst_50961){
var statearr_51128_51189 = state_51060__$1;
(statearr_51128_51189[(1)] = (19));

} else {
var statearr_51129_51190 = state_51060__$1;
(statearr_51129_51190[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (38))){
var inst_51039 = (state_51060[(2)]);
var state_51060__$1 = state_51060;
var statearr_51130_51191 = state_51060__$1;
(statearr_51130_51191[(2)] = inst_51039);

(statearr_51130_51191[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (30))){
var state_51060__$1 = state_51060;
var statearr_51131_51192 = state_51060__$1;
(statearr_51131_51192[(2)] = null);

(statearr_51131_51192[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (10))){
var inst_50938 = (state_51060[(16)]);
var inst_50940 = (state_51060[(17)]);
var inst_50948 = cljs.core._nth.call(null,inst_50938,inst_50940);
var inst_50949 = cljs.core.nth.call(null,inst_50948,(0),null);
var inst_50950 = cljs.core.nth.call(null,inst_50948,(1),null);
var state_51060__$1 = (function (){var statearr_51132 = state_51060;
(statearr_51132[(26)] = inst_50949);

return statearr_51132;
})();
if(cljs.core.truth_(inst_50950)){
var statearr_51133_51193 = state_51060__$1;
(statearr_51133_51193[(1)] = (13));

} else {
var statearr_51134_51194 = state_51060__$1;
(statearr_51134_51194[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (18))){
var inst_50985 = (state_51060[(2)]);
var state_51060__$1 = state_51060;
var statearr_51135_51195 = state_51060__$1;
(statearr_51135_51195[(2)] = inst_50985);

(statearr_51135_51195[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (42))){
var state_51060__$1 = state_51060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51060__$1,(45),dchan);
} else {
if((state_val_51061 === (37))){
var inst_51019 = (state_51060[(25)]);
var inst_50928 = (state_51060[(12)]);
var inst_51028 = (state_51060[(23)]);
var inst_51028__$1 = cljs.core.first.call(null,inst_51019);
var inst_51029 = cljs.core.async.put_BANG_.call(null,inst_51028__$1,inst_50928,done);
var state_51060__$1 = (function (){var statearr_51136 = state_51060;
(statearr_51136[(23)] = inst_51028__$1);

return statearr_51136;
})();
if(cljs.core.truth_(inst_51029)){
var statearr_51137_51196 = state_51060__$1;
(statearr_51137_51196[(1)] = (39));

} else {
var statearr_51138_51197 = state_51060__$1;
(statearr_51138_51197[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51061 === (8))){
var inst_50939 = (state_51060[(14)]);
var inst_50940 = (state_51060[(17)]);
var inst_50942 = (inst_50940 < inst_50939);
var inst_50943 = inst_50942;
var state_51060__$1 = state_51060;
if(cljs.core.truth_(inst_50943)){
var statearr_51139_51198 = state_51060__$1;
(statearr_51139_51198[(1)] = (10));

} else {
var statearr_51140_51199 = state_51060__$1;
(statearr_51140_51199[(1)] = (11));

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
});})(c__50326__auto___51145,cs,m,dchan,dctr,done))
;
return ((function (switch__50236__auto__,c__50326__auto___51145,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__50237__auto__ = null;
var cljs$core$async$mult_$_state_machine__50237__auto____0 = (function (){
var statearr_51141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51141[(0)] = cljs$core$async$mult_$_state_machine__50237__auto__);

(statearr_51141[(1)] = (1));

return statearr_51141;
});
var cljs$core$async$mult_$_state_machine__50237__auto____1 = (function (state_51060){
while(true){
var ret_value__50238__auto__ = (function (){try{while(true){
var result__50239__auto__ = switch__50236__auto__.call(null,state_51060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50239__auto__;
}
break;
}
}catch (e51142){if((e51142 instanceof Object)){
var ex__50240__auto__ = e51142;
var statearr_51143_51200 = state_51060;
(statearr_51143_51200[(5)] = ex__50240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51201 = state_51060;
state_51060 = G__51201;
continue;
} else {
return ret_value__50238__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__50237__auto__ = function(state_51060){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__50237__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__50237__auto____1.call(this,state_51060);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__50237__auto____0;
cljs$core$async$mult_$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__50237__auto____1;
return cljs$core$async$mult_$_state_machine__50237__auto__;
})()
;})(switch__50236__auto__,c__50326__auto___51145,cs,m,dchan,dctr,done))
})();
var state__50328__auto__ = (function (){var statearr_51144 = f__50327__auto__.call(null);
(statearr_51144[(6)] = c__50326__auto___51145);

return statearr_51144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50328__auto__);
});})(c__50326__auto___51145,cs,m,dchan,dctr,done))
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
var G__51203 = arguments.length;
switch (G__51203) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var x__37658__auto__ = (((m == null))?null:m);
var m__37659__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__37658__auto__)]);
if(!((m__37659__auto__ == null))){
return m__37659__auto__.call(null,m,ch);
} else {
var m__37659__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__37659__auto____$1 == null))){
return m__37659__auto____$1.call(null,m,ch);
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
var x__37658__auto__ = (((m == null))?null:m);
var m__37659__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__37658__auto__)]);
if(!((m__37659__auto__ == null))){
return m__37659__auto__.call(null,m,ch);
} else {
var m__37659__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__37659__auto____$1 == null))){
return m__37659__auto____$1.call(null,m,ch);
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
var x__37658__auto__ = (((m == null))?null:m);
var m__37659__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__37658__auto__)]);
if(!((m__37659__auto__ == null))){
return m__37659__auto__.call(null,m);
} else {
var m__37659__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__37659__auto____$1 == null))){
return m__37659__auto____$1.call(null,m);
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
var x__37658__auto__ = (((m == null))?null:m);
var m__37659__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__37658__auto__)]);
if(!((m__37659__auto__ == null))){
return m__37659__auto__.call(null,m,state_map);
} else {
var m__37659__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__37659__auto____$1 == null))){
return m__37659__auto____$1.call(null,m,state_map);
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
var x__37658__auto__ = (((m == null))?null:m);
var m__37659__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__37658__auto__)]);
if(!((m__37659__auto__ == null))){
return m__37659__auto__.call(null,m,mode);
} else {
var m__37659__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__37659__auto____$1 == null))){
return m__37659__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__38211__auto__ = [];
var len__38204__auto___51215 = arguments.length;
var i__38205__auto___51216 = (0);
while(true){
if((i__38205__auto___51216 < len__38204__auto___51215)){
args__38211__auto__.push((arguments[i__38205__auto___51216]));

var G__51217 = (i__38205__auto___51216 + (1));
i__38205__auto___51216 = G__51217;
continue;
} else {
}
break;
}

var argseq__38212__auto__ = ((((3) < args__38211__auto__.length))?(new cljs.core.IndexedSeq(args__38211__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__38212__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__51209){
var map__51210 = p__51209;
var map__51210__$1 = ((((!((map__51210 == null)))?((((map__51210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51210.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51210):map__51210);
var opts = map__51210__$1;
var statearr_51212_51218 = state;
(statearr_51212_51218[(1)] = cont_block);


var temp__5459__auto__ = cljs.core.async.do_alts.call(null,((function (map__51210,map__51210__$1,opts){
return (function (val){
var statearr_51213_51219 = state;
(statearr_51213_51219[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__51210,map__51210__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5459__auto__)){
var cb = temp__5459__auto__;
var statearr_51214_51220 = state;
(statearr_51214_51220[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq51205){
var G__51206 = cljs.core.first.call(null,seq51205);
var seq51205__$1 = cljs.core.next.call(null,seq51205);
var G__51207 = cljs.core.first.call(null,seq51205__$1);
var seq51205__$2 = cljs.core.next.call(null,seq51205__$1);
var G__51208 = cljs.core.first.call(null,seq51205__$2);
var seq51205__$3 = cljs.core.next.call(null,seq51205__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51206,G__51207,G__51208,seq51205__$3);
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
if(typeof cljs.core.async.t_cljs$core$async51221 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51221 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta51222){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta51222 = meta51222;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_51223,meta51222__$1){
var self__ = this;
var _51223__$1 = this;
return (new cljs.core.async.t_cljs$core$async51221(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta51222__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51221.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_51223){
var self__ = this;
var _51223__$1 = this;
return self__.meta51222;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51221.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51221.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51221.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51221.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51221.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51221.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51221.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51221.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51221.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta51222","meta51222",-279998981,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51221.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51221.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51221";

cljs.core.async.t_cljs$core$async51221.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__37596__auto__,writer__37597__auto__,opt__37598__auto__){
return cljs.core._write.call(null,writer__37597__auto__,"cljs.core.async/t_cljs$core$async51221");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async51221 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async51221(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta51222){
return (new cljs.core.async.t_cljs$core$async51221(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta51222));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async51221(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50326__auto___51385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50326__auto___51385,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__50327__auto__ = (function (){var switch__50236__auto__ = ((function (c__50326__auto___51385,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_51325){
var state_val_51326 = (state_51325[(1)]);
if((state_val_51326 === (7))){
var inst_51240 = (state_51325[(2)]);
var state_51325__$1 = state_51325;
var statearr_51327_51386 = state_51325__$1;
(statearr_51327_51386[(2)] = inst_51240);

(statearr_51327_51386[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (20))){
var inst_51252 = (state_51325[(7)]);
var state_51325__$1 = state_51325;
var statearr_51328_51387 = state_51325__$1;
(statearr_51328_51387[(2)] = inst_51252);

(statearr_51328_51387[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (27))){
var state_51325__$1 = state_51325;
var statearr_51329_51388 = state_51325__$1;
(statearr_51329_51388[(2)] = null);

(statearr_51329_51388[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (1))){
var inst_51227 = (state_51325[(8)]);
var inst_51227__$1 = calc_state.call(null);
var inst_51229 = (inst_51227__$1 == null);
var inst_51230 = cljs.core.not.call(null,inst_51229);
var state_51325__$1 = (function (){var statearr_51330 = state_51325;
(statearr_51330[(8)] = inst_51227__$1);

return statearr_51330;
})();
if(inst_51230){
var statearr_51331_51389 = state_51325__$1;
(statearr_51331_51389[(1)] = (2));

} else {
var statearr_51332_51390 = state_51325__$1;
(statearr_51332_51390[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (24))){
var inst_51276 = (state_51325[(9)]);
var inst_51299 = (state_51325[(10)]);
var inst_51285 = (state_51325[(11)]);
var inst_51299__$1 = inst_51276.call(null,inst_51285);
var state_51325__$1 = (function (){var statearr_51333 = state_51325;
(statearr_51333[(10)] = inst_51299__$1);

return statearr_51333;
})();
if(cljs.core.truth_(inst_51299__$1)){
var statearr_51334_51391 = state_51325__$1;
(statearr_51334_51391[(1)] = (29));

} else {
var statearr_51335_51392 = state_51325__$1;
(statearr_51335_51392[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (4))){
var inst_51243 = (state_51325[(2)]);
var state_51325__$1 = state_51325;
if(cljs.core.truth_(inst_51243)){
var statearr_51336_51393 = state_51325__$1;
(statearr_51336_51393[(1)] = (8));

} else {
var statearr_51337_51394 = state_51325__$1;
(statearr_51337_51394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (15))){
var inst_51270 = (state_51325[(2)]);
var state_51325__$1 = state_51325;
if(cljs.core.truth_(inst_51270)){
var statearr_51338_51395 = state_51325__$1;
(statearr_51338_51395[(1)] = (19));

} else {
var statearr_51339_51396 = state_51325__$1;
(statearr_51339_51396[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (21))){
var inst_51275 = (state_51325[(12)]);
var inst_51275__$1 = (state_51325[(2)]);
var inst_51276 = cljs.core.get.call(null,inst_51275__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51277 = cljs.core.get.call(null,inst_51275__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51278 = cljs.core.get.call(null,inst_51275__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51325__$1 = (function (){var statearr_51340 = state_51325;
(statearr_51340[(9)] = inst_51276);

(statearr_51340[(12)] = inst_51275__$1);

(statearr_51340[(13)] = inst_51277);

return statearr_51340;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_51325__$1,(22),inst_51278);
} else {
if((state_val_51326 === (31))){
var inst_51307 = (state_51325[(2)]);
var state_51325__$1 = state_51325;
if(cljs.core.truth_(inst_51307)){
var statearr_51341_51397 = state_51325__$1;
(statearr_51341_51397[(1)] = (32));

} else {
var statearr_51342_51398 = state_51325__$1;
(statearr_51342_51398[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (32))){
var inst_51284 = (state_51325[(14)]);
var state_51325__$1 = state_51325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51325__$1,(35),out,inst_51284);
} else {
if((state_val_51326 === (33))){
var inst_51275 = (state_51325[(12)]);
var inst_51252 = inst_51275;
var state_51325__$1 = (function (){var statearr_51343 = state_51325;
(statearr_51343[(7)] = inst_51252);

return statearr_51343;
})();
var statearr_51344_51399 = state_51325__$1;
(statearr_51344_51399[(2)] = null);

(statearr_51344_51399[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (13))){
var inst_51252 = (state_51325[(7)]);
var inst_51259 = inst_51252.cljs$lang$protocol_mask$partition0$;
var inst_51260 = (inst_51259 & (64));
var inst_51261 = inst_51252.cljs$core$ISeq$;
var inst_51262 = (cljs.core.PROTOCOL_SENTINEL === inst_51261);
var inst_51263 = (inst_51260) || (inst_51262);
var state_51325__$1 = state_51325;
if(cljs.core.truth_(inst_51263)){
var statearr_51345_51400 = state_51325__$1;
(statearr_51345_51400[(1)] = (16));

} else {
var statearr_51346_51401 = state_51325__$1;
(statearr_51346_51401[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (22))){
var inst_51284 = (state_51325[(14)]);
var inst_51285 = (state_51325[(11)]);
var inst_51283 = (state_51325[(2)]);
var inst_51284__$1 = cljs.core.nth.call(null,inst_51283,(0),null);
var inst_51285__$1 = cljs.core.nth.call(null,inst_51283,(1),null);
var inst_51286 = (inst_51284__$1 == null);
var inst_51287 = cljs.core._EQ_.call(null,inst_51285__$1,change);
var inst_51288 = (inst_51286) || (inst_51287);
var state_51325__$1 = (function (){var statearr_51347 = state_51325;
(statearr_51347[(14)] = inst_51284__$1);

(statearr_51347[(11)] = inst_51285__$1);

return statearr_51347;
})();
if(cljs.core.truth_(inst_51288)){
var statearr_51348_51402 = state_51325__$1;
(statearr_51348_51402[(1)] = (23));

} else {
var statearr_51349_51403 = state_51325__$1;
(statearr_51349_51403[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (36))){
var inst_51275 = (state_51325[(12)]);
var inst_51252 = inst_51275;
var state_51325__$1 = (function (){var statearr_51350 = state_51325;
(statearr_51350[(7)] = inst_51252);

return statearr_51350;
})();
var statearr_51351_51404 = state_51325__$1;
(statearr_51351_51404[(2)] = null);

(statearr_51351_51404[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (29))){
var inst_51299 = (state_51325[(10)]);
var state_51325__$1 = state_51325;
var statearr_51352_51405 = state_51325__$1;
(statearr_51352_51405[(2)] = inst_51299);

(statearr_51352_51405[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (6))){
var state_51325__$1 = state_51325;
var statearr_51353_51406 = state_51325__$1;
(statearr_51353_51406[(2)] = false);

(statearr_51353_51406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (28))){
var inst_51295 = (state_51325[(2)]);
var inst_51296 = calc_state.call(null);
var inst_51252 = inst_51296;
var state_51325__$1 = (function (){var statearr_51354 = state_51325;
(statearr_51354[(15)] = inst_51295);

(statearr_51354[(7)] = inst_51252);

return statearr_51354;
})();
var statearr_51355_51407 = state_51325__$1;
(statearr_51355_51407[(2)] = null);

(statearr_51355_51407[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (25))){
var inst_51321 = (state_51325[(2)]);
var state_51325__$1 = state_51325;
var statearr_51356_51408 = state_51325__$1;
(statearr_51356_51408[(2)] = inst_51321);

(statearr_51356_51408[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (34))){
var inst_51319 = (state_51325[(2)]);
var state_51325__$1 = state_51325;
var statearr_51357_51409 = state_51325__$1;
(statearr_51357_51409[(2)] = inst_51319);

(statearr_51357_51409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (17))){
var state_51325__$1 = state_51325;
var statearr_51358_51410 = state_51325__$1;
(statearr_51358_51410[(2)] = false);

(statearr_51358_51410[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (3))){
var state_51325__$1 = state_51325;
var statearr_51359_51411 = state_51325__$1;
(statearr_51359_51411[(2)] = false);

(statearr_51359_51411[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (12))){
var inst_51323 = (state_51325[(2)]);
var state_51325__$1 = state_51325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51325__$1,inst_51323);
} else {
if((state_val_51326 === (2))){
var inst_51227 = (state_51325[(8)]);
var inst_51232 = inst_51227.cljs$lang$protocol_mask$partition0$;
var inst_51233 = (inst_51232 & (64));
var inst_51234 = inst_51227.cljs$core$ISeq$;
var inst_51235 = (cljs.core.PROTOCOL_SENTINEL === inst_51234);
var inst_51236 = (inst_51233) || (inst_51235);
var state_51325__$1 = state_51325;
if(cljs.core.truth_(inst_51236)){
var statearr_51360_51412 = state_51325__$1;
(statearr_51360_51412[(1)] = (5));

} else {
var statearr_51361_51413 = state_51325__$1;
(statearr_51361_51413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (23))){
var inst_51284 = (state_51325[(14)]);
var inst_51290 = (inst_51284 == null);
var state_51325__$1 = state_51325;
if(cljs.core.truth_(inst_51290)){
var statearr_51362_51414 = state_51325__$1;
(statearr_51362_51414[(1)] = (26));

} else {
var statearr_51363_51415 = state_51325__$1;
(statearr_51363_51415[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (35))){
var inst_51310 = (state_51325[(2)]);
var state_51325__$1 = state_51325;
if(cljs.core.truth_(inst_51310)){
var statearr_51364_51416 = state_51325__$1;
(statearr_51364_51416[(1)] = (36));

} else {
var statearr_51365_51417 = state_51325__$1;
(statearr_51365_51417[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (19))){
var inst_51252 = (state_51325[(7)]);
var inst_51272 = cljs.core.apply.call(null,cljs.core.hash_map,inst_51252);
var state_51325__$1 = state_51325;
var statearr_51366_51418 = state_51325__$1;
(statearr_51366_51418[(2)] = inst_51272);

(statearr_51366_51418[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (11))){
var inst_51252 = (state_51325[(7)]);
var inst_51256 = (inst_51252 == null);
var inst_51257 = cljs.core.not.call(null,inst_51256);
var state_51325__$1 = state_51325;
if(inst_51257){
var statearr_51367_51419 = state_51325__$1;
(statearr_51367_51419[(1)] = (13));

} else {
var statearr_51368_51420 = state_51325__$1;
(statearr_51368_51420[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (9))){
var inst_51227 = (state_51325[(8)]);
var state_51325__$1 = state_51325;
var statearr_51369_51421 = state_51325__$1;
(statearr_51369_51421[(2)] = inst_51227);

(statearr_51369_51421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (5))){
var state_51325__$1 = state_51325;
var statearr_51370_51422 = state_51325__$1;
(statearr_51370_51422[(2)] = true);

(statearr_51370_51422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (14))){
var state_51325__$1 = state_51325;
var statearr_51371_51423 = state_51325__$1;
(statearr_51371_51423[(2)] = false);

(statearr_51371_51423[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (26))){
var inst_51285 = (state_51325[(11)]);
var inst_51292 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_51285);
var state_51325__$1 = state_51325;
var statearr_51372_51424 = state_51325__$1;
(statearr_51372_51424[(2)] = inst_51292);

(statearr_51372_51424[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (16))){
var state_51325__$1 = state_51325;
var statearr_51373_51425 = state_51325__$1;
(statearr_51373_51425[(2)] = true);

(statearr_51373_51425[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (38))){
var inst_51315 = (state_51325[(2)]);
var state_51325__$1 = state_51325;
var statearr_51374_51426 = state_51325__$1;
(statearr_51374_51426[(2)] = inst_51315);

(statearr_51374_51426[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (30))){
var inst_51276 = (state_51325[(9)]);
var inst_51285 = (state_51325[(11)]);
var inst_51277 = (state_51325[(13)]);
var inst_51302 = cljs.core.empty_QMARK_.call(null,inst_51276);
var inst_51303 = inst_51277.call(null,inst_51285);
var inst_51304 = cljs.core.not.call(null,inst_51303);
var inst_51305 = (inst_51302) && (inst_51304);
var state_51325__$1 = state_51325;
var statearr_51375_51427 = state_51325__$1;
(statearr_51375_51427[(2)] = inst_51305);

(statearr_51375_51427[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (10))){
var inst_51227 = (state_51325[(8)]);
var inst_51248 = (state_51325[(2)]);
var inst_51249 = cljs.core.get.call(null,inst_51248,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51250 = cljs.core.get.call(null,inst_51248,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51251 = cljs.core.get.call(null,inst_51248,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51252 = inst_51227;
var state_51325__$1 = (function (){var statearr_51376 = state_51325;
(statearr_51376[(7)] = inst_51252);

(statearr_51376[(16)] = inst_51250);

(statearr_51376[(17)] = inst_51249);

(statearr_51376[(18)] = inst_51251);

return statearr_51376;
})();
var statearr_51377_51428 = state_51325__$1;
(statearr_51377_51428[(2)] = null);

(statearr_51377_51428[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (18))){
var inst_51267 = (state_51325[(2)]);
var state_51325__$1 = state_51325;
var statearr_51378_51429 = state_51325__$1;
(statearr_51378_51429[(2)] = inst_51267);

(statearr_51378_51429[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (37))){
var state_51325__$1 = state_51325;
var statearr_51379_51430 = state_51325__$1;
(statearr_51379_51430[(2)] = null);

(statearr_51379_51430[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51326 === (8))){
var inst_51227 = (state_51325[(8)]);
var inst_51245 = cljs.core.apply.call(null,cljs.core.hash_map,inst_51227);
var state_51325__$1 = state_51325;
var statearr_51380_51431 = state_51325__$1;
(statearr_51380_51431[(2)] = inst_51245);

(statearr_51380_51431[(1)] = (10));


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
});})(c__50326__auto___51385,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__50236__auto__,c__50326__auto___51385,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__50237__auto__ = null;
var cljs$core$async$mix_$_state_machine__50237__auto____0 = (function (){
var statearr_51381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51381[(0)] = cljs$core$async$mix_$_state_machine__50237__auto__);

(statearr_51381[(1)] = (1));

return statearr_51381;
});
var cljs$core$async$mix_$_state_machine__50237__auto____1 = (function (state_51325){
while(true){
var ret_value__50238__auto__ = (function (){try{while(true){
var result__50239__auto__ = switch__50236__auto__.call(null,state_51325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50239__auto__;
}
break;
}
}catch (e51382){if((e51382 instanceof Object)){
var ex__50240__auto__ = e51382;
var statearr_51383_51432 = state_51325;
(statearr_51383_51432[(5)] = ex__50240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51433 = state_51325;
state_51325 = G__51433;
continue;
} else {
return ret_value__50238__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__50237__auto__ = function(state_51325){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__50237__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__50237__auto____1.call(this,state_51325);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__50237__auto____0;
cljs$core$async$mix_$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__50237__auto____1;
return cljs$core$async$mix_$_state_machine__50237__auto__;
})()
;})(switch__50236__auto__,c__50326__auto___51385,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__50328__auto__ = (function (){var statearr_51384 = f__50327__auto__.call(null);
(statearr_51384[(6)] = c__50326__auto___51385);

return statearr_51384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50328__auto__);
});})(c__50326__auto___51385,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__37658__auto__ = (((p == null))?null:p);
var m__37659__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__37658__auto__)]);
if(!((m__37659__auto__ == null))){
return m__37659__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__37659__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__37659__auto____$1 == null))){
return m__37659__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__37658__auto__ = (((p == null))?null:p);
var m__37659__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__37658__auto__)]);
if(!((m__37659__auto__ == null))){
return m__37659__auto__.call(null,p,v,ch);
} else {
var m__37659__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__37659__auto____$1 == null))){
return m__37659__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__51435 = arguments.length;
switch (G__51435) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__37658__auto__ = (((p == null))?null:p);
var m__37659__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37658__auto__)]);
if(!((m__37659__auto__ == null))){
return m__37659__auto__.call(null,p);
} else {
var m__37659__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37659__auto____$1 == null))){
return m__37659__auto____$1.call(null,p);
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
var x__37658__auto__ = (((p == null))?null:p);
var m__37659__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37658__auto__)]);
if(!((m__37659__auto__ == null))){
return m__37659__auto__.call(null,p,v);
} else {
var m__37659__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37659__auto____$1 == null))){
return m__37659__auto____$1.call(null,p,v);
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
var G__51439 = arguments.length;
switch (G__51439) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__36925__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__36925__auto__,mults){
return (function (p1__51437_SHARP_){
if(cljs.core.truth_(p1__51437_SHARP_.call(null,topic))){
return p1__51437_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__51437_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__36925__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async51440 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51440 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta51441){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta51441 = meta51441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_51442,meta51441__$1){
var self__ = this;
var _51442__$1 = this;
return (new cljs.core.async.t_cljs$core$async51440(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta51441__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51440.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_51442){
var self__ = this;
var _51442__$1 = this;
return self__.meta51441;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51440.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51440.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51440.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51440.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51440.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5459__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5459__auto__)){
var m = temp__5459__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51440.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51440.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51440.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta51441","meta51441",-1503648779,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51440.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51440";

cljs.core.async.t_cljs$core$async51440.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__37596__auto__,writer__37597__auto__,opt__37598__auto__){
return cljs.core._write.call(null,writer__37597__auto__,"cljs.core.async/t_cljs$core$async51440");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async51440 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async51440(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51441){
return (new cljs.core.async.t_cljs$core$async51440(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51441));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async51440(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50326__auto___51560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50326__auto___51560,mults,ensure_mult,p){
return (function (){
var f__50327__auto__ = (function (){var switch__50236__auto__ = ((function (c__50326__auto___51560,mults,ensure_mult,p){
return (function (state_51514){
var state_val_51515 = (state_51514[(1)]);
if((state_val_51515 === (7))){
var inst_51510 = (state_51514[(2)]);
var state_51514__$1 = state_51514;
var statearr_51516_51561 = state_51514__$1;
(statearr_51516_51561[(2)] = inst_51510);

(statearr_51516_51561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (20))){
var state_51514__$1 = state_51514;
var statearr_51517_51562 = state_51514__$1;
(statearr_51517_51562[(2)] = null);

(statearr_51517_51562[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (1))){
var state_51514__$1 = state_51514;
var statearr_51518_51563 = state_51514__$1;
(statearr_51518_51563[(2)] = null);

(statearr_51518_51563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (24))){
var inst_51493 = (state_51514[(7)]);
var inst_51502 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_51493);
var state_51514__$1 = state_51514;
var statearr_51519_51564 = state_51514__$1;
(statearr_51519_51564[(2)] = inst_51502);

(statearr_51519_51564[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (4))){
var inst_51445 = (state_51514[(8)]);
var inst_51445__$1 = (state_51514[(2)]);
var inst_51446 = (inst_51445__$1 == null);
var state_51514__$1 = (function (){var statearr_51520 = state_51514;
(statearr_51520[(8)] = inst_51445__$1);

return statearr_51520;
})();
if(cljs.core.truth_(inst_51446)){
var statearr_51521_51565 = state_51514__$1;
(statearr_51521_51565[(1)] = (5));

} else {
var statearr_51522_51566 = state_51514__$1;
(statearr_51522_51566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (15))){
var inst_51487 = (state_51514[(2)]);
var state_51514__$1 = state_51514;
var statearr_51523_51567 = state_51514__$1;
(statearr_51523_51567[(2)] = inst_51487);

(statearr_51523_51567[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (21))){
var inst_51507 = (state_51514[(2)]);
var state_51514__$1 = (function (){var statearr_51524 = state_51514;
(statearr_51524[(9)] = inst_51507);

return statearr_51524;
})();
var statearr_51525_51568 = state_51514__$1;
(statearr_51525_51568[(2)] = null);

(statearr_51525_51568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (13))){
var inst_51469 = (state_51514[(10)]);
var inst_51471 = cljs.core.chunked_seq_QMARK_.call(null,inst_51469);
var state_51514__$1 = state_51514;
if(inst_51471){
var statearr_51526_51569 = state_51514__$1;
(statearr_51526_51569[(1)] = (16));

} else {
var statearr_51527_51570 = state_51514__$1;
(statearr_51527_51570[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (22))){
var inst_51499 = (state_51514[(2)]);
var state_51514__$1 = state_51514;
if(cljs.core.truth_(inst_51499)){
var statearr_51528_51571 = state_51514__$1;
(statearr_51528_51571[(1)] = (23));

} else {
var statearr_51529_51572 = state_51514__$1;
(statearr_51529_51572[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (6))){
var inst_51445 = (state_51514[(8)]);
var inst_51495 = (state_51514[(11)]);
var inst_51493 = (state_51514[(7)]);
var inst_51493__$1 = topic_fn.call(null,inst_51445);
var inst_51494 = cljs.core.deref.call(null,mults);
var inst_51495__$1 = cljs.core.get.call(null,inst_51494,inst_51493__$1);
var state_51514__$1 = (function (){var statearr_51530 = state_51514;
(statearr_51530[(11)] = inst_51495__$1);

(statearr_51530[(7)] = inst_51493__$1);

return statearr_51530;
})();
if(cljs.core.truth_(inst_51495__$1)){
var statearr_51531_51573 = state_51514__$1;
(statearr_51531_51573[(1)] = (19));

} else {
var statearr_51532_51574 = state_51514__$1;
(statearr_51532_51574[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (25))){
var inst_51504 = (state_51514[(2)]);
var state_51514__$1 = state_51514;
var statearr_51533_51575 = state_51514__$1;
(statearr_51533_51575[(2)] = inst_51504);

(statearr_51533_51575[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (17))){
var inst_51469 = (state_51514[(10)]);
var inst_51478 = cljs.core.first.call(null,inst_51469);
var inst_51479 = cljs.core.async.muxch_STAR_.call(null,inst_51478);
var inst_51480 = cljs.core.async.close_BANG_.call(null,inst_51479);
var inst_51481 = cljs.core.next.call(null,inst_51469);
var inst_51455 = inst_51481;
var inst_51456 = null;
var inst_51457 = (0);
var inst_51458 = (0);
var state_51514__$1 = (function (){var statearr_51534 = state_51514;
(statearr_51534[(12)] = inst_51457);

(statearr_51534[(13)] = inst_51456);

(statearr_51534[(14)] = inst_51458);

(statearr_51534[(15)] = inst_51480);

(statearr_51534[(16)] = inst_51455);

return statearr_51534;
})();
var statearr_51535_51576 = state_51514__$1;
(statearr_51535_51576[(2)] = null);

(statearr_51535_51576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (3))){
var inst_51512 = (state_51514[(2)]);
var state_51514__$1 = state_51514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51514__$1,inst_51512);
} else {
if((state_val_51515 === (12))){
var inst_51489 = (state_51514[(2)]);
var state_51514__$1 = state_51514;
var statearr_51536_51577 = state_51514__$1;
(statearr_51536_51577[(2)] = inst_51489);

(statearr_51536_51577[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (2))){
var state_51514__$1 = state_51514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51514__$1,(4),ch);
} else {
if((state_val_51515 === (23))){
var state_51514__$1 = state_51514;
var statearr_51537_51578 = state_51514__$1;
(statearr_51537_51578[(2)] = null);

(statearr_51537_51578[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (19))){
var inst_51445 = (state_51514[(8)]);
var inst_51495 = (state_51514[(11)]);
var inst_51497 = cljs.core.async.muxch_STAR_.call(null,inst_51495);
var state_51514__$1 = state_51514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51514__$1,(22),inst_51497,inst_51445);
} else {
if((state_val_51515 === (11))){
var inst_51469 = (state_51514[(10)]);
var inst_51455 = (state_51514[(16)]);
var inst_51469__$1 = cljs.core.seq.call(null,inst_51455);
var state_51514__$1 = (function (){var statearr_51538 = state_51514;
(statearr_51538[(10)] = inst_51469__$1);

return statearr_51538;
})();
if(inst_51469__$1){
var statearr_51539_51579 = state_51514__$1;
(statearr_51539_51579[(1)] = (13));

} else {
var statearr_51540_51580 = state_51514__$1;
(statearr_51540_51580[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (9))){
var inst_51491 = (state_51514[(2)]);
var state_51514__$1 = state_51514;
var statearr_51541_51581 = state_51514__$1;
(statearr_51541_51581[(2)] = inst_51491);

(statearr_51541_51581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (5))){
var inst_51452 = cljs.core.deref.call(null,mults);
var inst_51453 = cljs.core.vals.call(null,inst_51452);
var inst_51454 = cljs.core.seq.call(null,inst_51453);
var inst_51455 = inst_51454;
var inst_51456 = null;
var inst_51457 = (0);
var inst_51458 = (0);
var state_51514__$1 = (function (){var statearr_51542 = state_51514;
(statearr_51542[(12)] = inst_51457);

(statearr_51542[(13)] = inst_51456);

(statearr_51542[(14)] = inst_51458);

(statearr_51542[(16)] = inst_51455);

return statearr_51542;
})();
var statearr_51543_51582 = state_51514__$1;
(statearr_51543_51582[(2)] = null);

(statearr_51543_51582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (14))){
var state_51514__$1 = state_51514;
var statearr_51547_51583 = state_51514__$1;
(statearr_51547_51583[(2)] = null);

(statearr_51547_51583[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (16))){
var inst_51469 = (state_51514[(10)]);
var inst_51473 = cljs.core.chunk_first.call(null,inst_51469);
var inst_51474 = cljs.core.chunk_rest.call(null,inst_51469);
var inst_51475 = cljs.core.count.call(null,inst_51473);
var inst_51455 = inst_51474;
var inst_51456 = inst_51473;
var inst_51457 = inst_51475;
var inst_51458 = (0);
var state_51514__$1 = (function (){var statearr_51548 = state_51514;
(statearr_51548[(12)] = inst_51457);

(statearr_51548[(13)] = inst_51456);

(statearr_51548[(14)] = inst_51458);

(statearr_51548[(16)] = inst_51455);

return statearr_51548;
})();
var statearr_51549_51584 = state_51514__$1;
(statearr_51549_51584[(2)] = null);

(statearr_51549_51584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (10))){
var inst_51457 = (state_51514[(12)]);
var inst_51456 = (state_51514[(13)]);
var inst_51458 = (state_51514[(14)]);
var inst_51455 = (state_51514[(16)]);
var inst_51463 = cljs.core._nth.call(null,inst_51456,inst_51458);
var inst_51464 = cljs.core.async.muxch_STAR_.call(null,inst_51463);
var inst_51465 = cljs.core.async.close_BANG_.call(null,inst_51464);
var inst_51466 = (inst_51458 + (1));
var tmp51544 = inst_51457;
var tmp51545 = inst_51456;
var tmp51546 = inst_51455;
var inst_51455__$1 = tmp51546;
var inst_51456__$1 = tmp51545;
var inst_51457__$1 = tmp51544;
var inst_51458__$1 = inst_51466;
var state_51514__$1 = (function (){var statearr_51550 = state_51514;
(statearr_51550[(12)] = inst_51457__$1);

(statearr_51550[(13)] = inst_51456__$1);

(statearr_51550[(14)] = inst_51458__$1);

(statearr_51550[(16)] = inst_51455__$1);

(statearr_51550[(17)] = inst_51465);

return statearr_51550;
})();
var statearr_51551_51585 = state_51514__$1;
(statearr_51551_51585[(2)] = null);

(statearr_51551_51585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (18))){
var inst_51484 = (state_51514[(2)]);
var state_51514__$1 = state_51514;
var statearr_51552_51586 = state_51514__$1;
(statearr_51552_51586[(2)] = inst_51484);

(statearr_51552_51586[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (8))){
var inst_51457 = (state_51514[(12)]);
var inst_51458 = (state_51514[(14)]);
var inst_51460 = (inst_51458 < inst_51457);
var inst_51461 = inst_51460;
var state_51514__$1 = state_51514;
if(cljs.core.truth_(inst_51461)){
var statearr_51553_51587 = state_51514__$1;
(statearr_51553_51587[(1)] = (10));

} else {
var statearr_51554_51588 = state_51514__$1;
(statearr_51554_51588[(1)] = (11));

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
});})(c__50326__auto___51560,mults,ensure_mult,p))
;
return ((function (switch__50236__auto__,c__50326__auto___51560,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__50237__auto__ = null;
var cljs$core$async$state_machine__50237__auto____0 = (function (){
var statearr_51555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51555[(0)] = cljs$core$async$state_machine__50237__auto__);

(statearr_51555[(1)] = (1));

return statearr_51555;
});
var cljs$core$async$state_machine__50237__auto____1 = (function (state_51514){
while(true){
var ret_value__50238__auto__ = (function (){try{while(true){
var result__50239__auto__ = switch__50236__auto__.call(null,state_51514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50239__auto__;
}
break;
}
}catch (e51556){if((e51556 instanceof Object)){
var ex__50240__auto__ = e51556;
var statearr_51557_51589 = state_51514;
(statearr_51557_51589[(5)] = ex__50240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51590 = state_51514;
state_51514 = G__51590;
continue;
} else {
return ret_value__50238__auto__;
}
break;
}
});
cljs$core$async$state_machine__50237__auto__ = function(state_51514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50237__auto____1.call(this,state_51514);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50237__auto____0;
cljs$core$async$state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50237__auto____1;
return cljs$core$async$state_machine__50237__auto__;
})()
;})(switch__50236__auto__,c__50326__auto___51560,mults,ensure_mult,p))
})();
var state__50328__auto__ = (function (){var statearr_51558 = f__50327__auto__.call(null);
(statearr_51558[(6)] = c__50326__auto___51560);

return statearr_51558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50328__auto__);
});})(c__50326__auto___51560,mults,ensure_mult,p))
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
var G__51592 = arguments.length;
switch (G__51592) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__51595 = arguments.length;
switch (G__51595) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__51598 = arguments.length;
switch (G__51598) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__50326__auto___51665 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50326__auto___51665,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__50327__auto__ = (function (){var switch__50236__auto__ = ((function (c__50326__auto___51665,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_51637){
var state_val_51638 = (state_51637[(1)]);
if((state_val_51638 === (7))){
var state_51637__$1 = state_51637;
var statearr_51639_51666 = state_51637__$1;
(statearr_51639_51666[(2)] = null);

(statearr_51639_51666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51638 === (1))){
var state_51637__$1 = state_51637;
var statearr_51640_51667 = state_51637__$1;
(statearr_51640_51667[(2)] = null);

(statearr_51640_51667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51638 === (4))){
var inst_51601 = (state_51637[(7)]);
var inst_51603 = (inst_51601 < cnt);
var state_51637__$1 = state_51637;
if(cljs.core.truth_(inst_51603)){
var statearr_51641_51668 = state_51637__$1;
(statearr_51641_51668[(1)] = (6));

} else {
var statearr_51642_51669 = state_51637__$1;
(statearr_51642_51669[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51638 === (15))){
var inst_51633 = (state_51637[(2)]);
var state_51637__$1 = state_51637;
var statearr_51643_51670 = state_51637__$1;
(statearr_51643_51670[(2)] = inst_51633);

(statearr_51643_51670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51638 === (13))){
var inst_51626 = cljs.core.async.close_BANG_.call(null,out);
var state_51637__$1 = state_51637;
var statearr_51644_51671 = state_51637__$1;
(statearr_51644_51671[(2)] = inst_51626);

(statearr_51644_51671[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51638 === (6))){
var state_51637__$1 = state_51637;
var statearr_51645_51672 = state_51637__$1;
(statearr_51645_51672[(2)] = null);

(statearr_51645_51672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51638 === (3))){
var inst_51635 = (state_51637[(2)]);
var state_51637__$1 = state_51637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51637__$1,inst_51635);
} else {
if((state_val_51638 === (12))){
var inst_51623 = (state_51637[(8)]);
var inst_51623__$1 = (state_51637[(2)]);
var inst_51624 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_51623__$1);
var state_51637__$1 = (function (){var statearr_51646 = state_51637;
(statearr_51646[(8)] = inst_51623__$1);

return statearr_51646;
})();
if(cljs.core.truth_(inst_51624)){
var statearr_51647_51673 = state_51637__$1;
(statearr_51647_51673[(1)] = (13));

} else {
var statearr_51648_51674 = state_51637__$1;
(statearr_51648_51674[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51638 === (2))){
var inst_51600 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_51601 = (0);
var state_51637__$1 = (function (){var statearr_51649 = state_51637;
(statearr_51649[(9)] = inst_51600);

(statearr_51649[(7)] = inst_51601);

return statearr_51649;
})();
var statearr_51650_51675 = state_51637__$1;
(statearr_51650_51675[(2)] = null);

(statearr_51650_51675[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51638 === (11))){
var inst_51601 = (state_51637[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_51637,(10),Object,null,(9));
var inst_51610 = chs__$1.call(null,inst_51601);
var inst_51611 = done.call(null,inst_51601);
var inst_51612 = cljs.core.async.take_BANG_.call(null,inst_51610,inst_51611);
var state_51637__$1 = state_51637;
var statearr_51651_51676 = state_51637__$1;
(statearr_51651_51676[(2)] = inst_51612);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51637__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51638 === (9))){
var inst_51601 = (state_51637[(7)]);
var inst_51614 = (state_51637[(2)]);
var inst_51615 = (inst_51601 + (1));
var inst_51601__$1 = inst_51615;
var state_51637__$1 = (function (){var statearr_51652 = state_51637;
(statearr_51652[(10)] = inst_51614);

(statearr_51652[(7)] = inst_51601__$1);

return statearr_51652;
})();
var statearr_51653_51677 = state_51637__$1;
(statearr_51653_51677[(2)] = null);

(statearr_51653_51677[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51638 === (5))){
var inst_51621 = (state_51637[(2)]);
var state_51637__$1 = (function (){var statearr_51654 = state_51637;
(statearr_51654[(11)] = inst_51621);

return statearr_51654;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51637__$1,(12),dchan);
} else {
if((state_val_51638 === (14))){
var inst_51623 = (state_51637[(8)]);
var inst_51628 = cljs.core.apply.call(null,f,inst_51623);
var state_51637__$1 = state_51637;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51637__$1,(16),out,inst_51628);
} else {
if((state_val_51638 === (16))){
var inst_51630 = (state_51637[(2)]);
var state_51637__$1 = (function (){var statearr_51655 = state_51637;
(statearr_51655[(12)] = inst_51630);

return statearr_51655;
})();
var statearr_51656_51678 = state_51637__$1;
(statearr_51656_51678[(2)] = null);

(statearr_51656_51678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51638 === (10))){
var inst_51605 = (state_51637[(2)]);
var inst_51606 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_51637__$1 = (function (){var statearr_51657 = state_51637;
(statearr_51657[(13)] = inst_51605);

return statearr_51657;
})();
var statearr_51658_51679 = state_51637__$1;
(statearr_51658_51679[(2)] = inst_51606);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51637__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51638 === (8))){
var inst_51619 = (state_51637[(2)]);
var state_51637__$1 = state_51637;
var statearr_51659_51680 = state_51637__$1;
(statearr_51659_51680[(2)] = inst_51619);

(statearr_51659_51680[(1)] = (5));


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
});})(c__50326__auto___51665,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__50236__auto__,c__50326__auto___51665,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__50237__auto__ = null;
var cljs$core$async$state_machine__50237__auto____0 = (function (){
var statearr_51660 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51660[(0)] = cljs$core$async$state_machine__50237__auto__);

(statearr_51660[(1)] = (1));

return statearr_51660;
});
var cljs$core$async$state_machine__50237__auto____1 = (function (state_51637){
while(true){
var ret_value__50238__auto__ = (function (){try{while(true){
var result__50239__auto__ = switch__50236__auto__.call(null,state_51637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50239__auto__;
}
break;
}
}catch (e51661){if((e51661 instanceof Object)){
var ex__50240__auto__ = e51661;
var statearr_51662_51681 = state_51637;
(statearr_51662_51681[(5)] = ex__50240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51682 = state_51637;
state_51637 = G__51682;
continue;
} else {
return ret_value__50238__auto__;
}
break;
}
});
cljs$core$async$state_machine__50237__auto__ = function(state_51637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50237__auto____1.call(this,state_51637);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50237__auto____0;
cljs$core$async$state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50237__auto____1;
return cljs$core$async$state_machine__50237__auto__;
})()
;})(switch__50236__auto__,c__50326__auto___51665,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__50328__auto__ = (function (){var statearr_51663 = f__50327__auto__.call(null);
(statearr_51663[(6)] = c__50326__auto___51665);

return statearr_51663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50328__auto__);
});})(c__50326__auto___51665,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__51685 = arguments.length;
switch (G__51685) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__50326__auto___51739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50326__auto___51739,out){
return (function (){
var f__50327__auto__ = (function (){var switch__50236__auto__ = ((function (c__50326__auto___51739,out){
return (function (state_51717){
var state_val_51718 = (state_51717[(1)]);
if((state_val_51718 === (7))){
var inst_51696 = (state_51717[(7)]);
var inst_51697 = (state_51717[(8)]);
var inst_51696__$1 = (state_51717[(2)]);
var inst_51697__$1 = cljs.core.nth.call(null,inst_51696__$1,(0),null);
var inst_51698 = cljs.core.nth.call(null,inst_51696__$1,(1),null);
var inst_51699 = (inst_51697__$1 == null);
var state_51717__$1 = (function (){var statearr_51719 = state_51717;
(statearr_51719[(7)] = inst_51696__$1);

(statearr_51719[(8)] = inst_51697__$1);

(statearr_51719[(9)] = inst_51698);

return statearr_51719;
})();
if(cljs.core.truth_(inst_51699)){
var statearr_51720_51740 = state_51717__$1;
(statearr_51720_51740[(1)] = (8));

} else {
var statearr_51721_51741 = state_51717__$1;
(statearr_51721_51741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51718 === (1))){
var inst_51686 = cljs.core.vec.call(null,chs);
var inst_51687 = inst_51686;
var state_51717__$1 = (function (){var statearr_51722 = state_51717;
(statearr_51722[(10)] = inst_51687);

return statearr_51722;
})();
var statearr_51723_51742 = state_51717__$1;
(statearr_51723_51742[(2)] = null);

(statearr_51723_51742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51718 === (4))){
var inst_51687 = (state_51717[(10)]);
var state_51717__$1 = state_51717;
return cljs.core.async.ioc_alts_BANG_.call(null,state_51717__$1,(7),inst_51687);
} else {
if((state_val_51718 === (6))){
var inst_51713 = (state_51717[(2)]);
var state_51717__$1 = state_51717;
var statearr_51724_51743 = state_51717__$1;
(statearr_51724_51743[(2)] = inst_51713);

(statearr_51724_51743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51718 === (3))){
var inst_51715 = (state_51717[(2)]);
var state_51717__$1 = state_51717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51717__$1,inst_51715);
} else {
if((state_val_51718 === (2))){
var inst_51687 = (state_51717[(10)]);
var inst_51689 = cljs.core.count.call(null,inst_51687);
var inst_51690 = (inst_51689 > (0));
var state_51717__$1 = state_51717;
if(cljs.core.truth_(inst_51690)){
var statearr_51726_51744 = state_51717__$1;
(statearr_51726_51744[(1)] = (4));

} else {
var statearr_51727_51745 = state_51717__$1;
(statearr_51727_51745[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51718 === (11))){
var inst_51687 = (state_51717[(10)]);
var inst_51706 = (state_51717[(2)]);
var tmp51725 = inst_51687;
var inst_51687__$1 = tmp51725;
var state_51717__$1 = (function (){var statearr_51728 = state_51717;
(statearr_51728[(11)] = inst_51706);

(statearr_51728[(10)] = inst_51687__$1);

return statearr_51728;
})();
var statearr_51729_51746 = state_51717__$1;
(statearr_51729_51746[(2)] = null);

(statearr_51729_51746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51718 === (9))){
var inst_51697 = (state_51717[(8)]);
var state_51717__$1 = state_51717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51717__$1,(11),out,inst_51697);
} else {
if((state_val_51718 === (5))){
var inst_51711 = cljs.core.async.close_BANG_.call(null,out);
var state_51717__$1 = state_51717;
var statearr_51730_51747 = state_51717__$1;
(statearr_51730_51747[(2)] = inst_51711);

(statearr_51730_51747[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51718 === (10))){
var inst_51709 = (state_51717[(2)]);
var state_51717__$1 = state_51717;
var statearr_51731_51748 = state_51717__$1;
(statearr_51731_51748[(2)] = inst_51709);

(statearr_51731_51748[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51718 === (8))){
var inst_51696 = (state_51717[(7)]);
var inst_51697 = (state_51717[(8)]);
var inst_51687 = (state_51717[(10)]);
var inst_51698 = (state_51717[(9)]);
var inst_51701 = (function (){var cs = inst_51687;
var vec__51692 = inst_51696;
var v = inst_51697;
var c = inst_51698;
return ((function (cs,vec__51692,v,c,inst_51696,inst_51697,inst_51687,inst_51698,state_val_51718,c__50326__auto___51739,out){
return (function (p1__51683_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__51683_SHARP_);
});
;})(cs,vec__51692,v,c,inst_51696,inst_51697,inst_51687,inst_51698,state_val_51718,c__50326__auto___51739,out))
})();
var inst_51702 = cljs.core.filterv.call(null,inst_51701,inst_51687);
var inst_51687__$1 = inst_51702;
var state_51717__$1 = (function (){var statearr_51732 = state_51717;
(statearr_51732[(10)] = inst_51687__$1);

return statearr_51732;
})();
var statearr_51733_51749 = state_51717__$1;
(statearr_51733_51749[(2)] = null);

(statearr_51733_51749[(1)] = (2));


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
});})(c__50326__auto___51739,out))
;
return ((function (switch__50236__auto__,c__50326__auto___51739,out){
return (function() {
var cljs$core$async$state_machine__50237__auto__ = null;
var cljs$core$async$state_machine__50237__auto____0 = (function (){
var statearr_51734 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51734[(0)] = cljs$core$async$state_machine__50237__auto__);

(statearr_51734[(1)] = (1));

return statearr_51734;
});
var cljs$core$async$state_machine__50237__auto____1 = (function (state_51717){
while(true){
var ret_value__50238__auto__ = (function (){try{while(true){
var result__50239__auto__ = switch__50236__auto__.call(null,state_51717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50239__auto__;
}
break;
}
}catch (e51735){if((e51735 instanceof Object)){
var ex__50240__auto__ = e51735;
var statearr_51736_51750 = state_51717;
(statearr_51736_51750[(5)] = ex__50240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51751 = state_51717;
state_51717 = G__51751;
continue;
} else {
return ret_value__50238__auto__;
}
break;
}
});
cljs$core$async$state_machine__50237__auto__ = function(state_51717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50237__auto____1.call(this,state_51717);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50237__auto____0;
cljs$core$async$state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50237__auto____1;
return cljs$core$async$state_machine__50237__auto__;
})()
;})(switch__50236__auto__,c__50326__auto___51739,out))
})();
var state__50328__auto__ = (function (){var statearr_51737 = f__50327__auto__.call(null);
(statearr_51737[(6)] = c__50326__auto___51739);

return statearr_51737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50328__auto__);
});})(c__50326__auto___51739,out))
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
var G__51753 = arguments.length;
switch (G__51753) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__50326__auto___51798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50326__auto___51798,out){
return (function (){
var f__50327__auto__ = (function (){var switch__50236__auto__ = ((function (c__50326__auto___51798,out){
return (function (state_51777){
var state_val_51778 = (state_51777[(1)]);
if((state_val_51778 === (7))){
var inst_51759 = (state_51777[(7)]);
var inst_51759__$1 = (state_51777[(2)]);
var inst_51760 = (inst_51759__$1 == null);
var inst_51761 = cljs.core.not.call(null,inst_51760);
var state_51777__$1 = (function (){var statearr_51779 = state_51777;
(statearr_51779[(7)] = inst_51759__$1);

return statearr_51779;
})();
if(inst_51761){
var statearr_51780_51799 = state_51777__$1;
(statearr_51780_51799[(1)] = (8));

} else {
var statearr_51781_51800 = state_51777__$1;
(statearr_51781_51800[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51778 === (1))){
var inst_51754 = (0);
var state_51777__$1 = (function (){var statearr_51782 = state_51777;
(statearr_51782[(8)] = inst_51754);

return statearr_51782;
})();
var statearr_51783_51801 = state_51777__$1;
(statearr_51783_51801[(2)] = null);

(statearr_51783_51801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51778 === (4))){
var state_51777__$1 = state_51777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51777__$1,(7),ch);
} else {
if((state_val_51778 === (6))){
var inst_51772 = (state_51777[(2)]);
var state_51777__$1 = state_51777;
var statearr_51784_51802 = state_51777__$1;
(statearr_51784_51802[(2)] = inst_51772);

(statearr_51784_51802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51778 === (3))){
var inst_51774 = (state_51777[(2)]);
var inst_51775 = cljs.core.async.close_BANG_.call(null,out);
var state_51777__$1 = (function (){var statearr_51785 = state_51777;
(statearr_51785[(9)] = inst_51774);

return statearr_51785;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51777__$1,inst_51775);
} else {
if((state_val_51778 === (2))){
var inst_51754 = (state_51777[(8)]);
var inst_51756 = (inst_51754 < n);
var state_51777__$1 = state_51777;
if(cljs.core.truth_(inst_51756)){
var statearr_51786_51803 = state_51777__$1;
(statearr_51786_51803[(1)] = (4));

} else {
var statearr_51787_51804 = state_51777__$1;
(statearr_51787_51804[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51778 === (11))){
var inst_51754 = (state_51777[(8)]);
var inst_51764 = (state_51777[(2)]);
var inst_51765 = (inst_51754 + (1));
var inst_51754__$1 = inst_51765;
var state_51777__$1 = (function (){var statearr_51788 = state_51777;
(statearr_51788[(10)] = inst_51764);

(statearr_51788[(8)] = inst_51754__$1);

return statearr_51788;
})();
var statearr_51789_51805 = state_51777__$1;
(statearr_51789_51805[(2)] = null);

(statearr_51789_51805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51778 === (9))){
var state_51777__$1 = state_51777;
var statearr_51790_51806 = state_51777__$1;
(statearr_51790_51806[(2)] = null);

(statearr_51790_51806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51778 === (5))){
var state_51777__$1 = state_51777;
var statearr_51791_51807 = state_51777__$1;
(statearr_51791_51807[(2)] = null);

(statearr_51791_51807[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51778 === (10))){
var inst_51769 = (state_51777[(2)]);
var state_51777__$1 = state_51777;
var statearr_51792_51808 = state_51777__$1;
(statearr_51792_51808[(2)] = inst_51769);

(statearr_51792_51808[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51778 === (8))){
var inst_51759 = (state_51777[(7)]);
var state_51777__$1 = state_51777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51777__$1,(11),out,inst_51759);
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
});})(c__50326__auto___51798,out))
;
return ((function (switch__50236__auto__,c__50326__auto___51798,out){
return (function() {
var cljs$core$async$state_machine__50237__auto__ = null;
var cljs$core$async$state_machine__50237__auto____0 = (function (){
var statearr_51793 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51793[(0)] = cljs$core$async$state_machine__50237__auto__);

(statearr_51793[(1)] = (1));

return statearr_51793;
});
var cljs$core$async$state_machine__50237__auto____1 = (function (state_51777){
while(true){
var ret_value__50238__auto__ = (function (){try{while(true){
var result__50239__auto__ = switch__50236__auto__.call(null,state_51777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50239__auto__;
}
break;
}
}catch (e51794){if((e51794 instanceof Object)){
var ex__50240__auto__ = e51794;
var statearr_51795_51809 = state_51777;
(statearr_51795_51809[(5)] = ex__50240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51810 = state_51777;
state_51777 = G__51810;
continue;
} else {
return ret_value__50238__auto__;
}
break;
}
});
cljs$core$async$state_machine__50237__auto__ = function(state_51777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50237__auto____1.call(this,state_51777);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50237__auto____0;
cljs$core$async$state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50237__auto____1;
return cljs$core$async$state_machine__50237__auto__;
})()
;})(switch__50236__auto__,c__50326__auto___51798,out))
})();
var state__50328__auto__ = (function (){var statearr_51796 = f__50327__auto__.call(null);
(statearr_51796[(6)] = c__50326__auto___51798);

return statearr_51796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50328__auto__);
});})(c__50326__auto___51798,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async51812 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51812 = (function (f,ch,meta51813){
this.f = f;
this.ch = ch;
this.meta51813 = meta51813;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51814,meta51813__$1){
var self__ = this;
var _51814__$1 = this;
return (new cljs.core.async.t_cljs$core$async51812(self__.f,self__.ch,meta51813__$1));
});

cljs.core.async.t_cljs$core$async51812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51814){
var self__ = this;
var _51814__$1 = this;
return self__.meta51813;
});

cljs.core.async.t_cljs$core$async51812.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51812.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async51812.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async51812.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51812.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async51815 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51815 = (function (f,ch,meta51813,_,fn1,meta51816){
this.f = f;
this.ch = ch;
this.meta51813 = meta51813;
this._ = _;
this.fn1 = fn1;
this.meta51816 = meta51816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_51817,meta51816__$1){
var self__ = this;
var _51817__$1 = this;
return (new cljs.core.async.t_cljs$core$async51815(self__.f,self__.ch,self__.meta51813,self__._,self__.fn1,meta51816__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async51815.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_51817){
var self__ = this;
var _51817__$1 = this;
return self__.meta51816;
});})(___$1))
;

cljs.core.async.t_cljs$core$async51815.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51815.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async51815.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async51815.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__51811_SHARP_){
return f1.call(null,(((p1__51811_SHARP_ == null))?null:self__.f.call(null,p1__51811_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async51815.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51813","meta51813",-599471519,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async51812","cljs.core.async/t_cljs$core$async51812",-1801515359,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta51816","meta51816",-1068564028,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async51815.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51815.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51815";

cljs.core.async.t_cljs$core$async51815.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__37596__auto__,writer__37597__auto__,opt__37598__auto__){
return cljs.core._write.call(null,writer__37597__auto__,"cljs.core.async/t_cljs$core$async51815");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async51815 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51815(f__$1,ch__$1,meta51813__$1,___$2,fn1__$1,meta51816){
return (new cljs.core.async.t_cljs$core$async51815(f__$1,ch__$1,meta51813__$1,___$2,fn1__$1,meta51816));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async51815(self__.f,self__.ch,self__.meta51813,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__36913__auto__ = ret;
if(cljs.core.truth_(and__36913__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__36913__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async51812.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51812.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async51812.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51813","meta51813",-599471519,null)], null);
});

cljs.core.async.t_cljs$core$async51812.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51812.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51812";

cljs.core.async.t_cljs$core$async51812.cljs$lang$ctorPrWriter = (function (this__37596__auto__,writer__37597__auto__,opt__37598__auto__){
return cljs.core._write.call(null,writer__37597__auto__,"cljs.core.async/t_cljs$core$async51812");
});

cljs.core.async.__GT_t_cljs$core$async51812 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51812(f__$1,ch__$1,meta51813){
return (new cljs.core.async.t_cljs$core$async51812(f__$1,ch__$1,meta51813));
});

}

return (new cljs.core.async.t_cljs$core$async51812(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async51818 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51818 = (function (f,ch,meta51819){
this.f = f;
this.ch = ch;
this.meta51819 = meta51819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51820,meta51819__$1){
var self__ = this;
var _51820__$1 = this;
return (new cljs.core.async.t_cljs$core$async51818(self__.f,self__.ch,meta51819__$1));
});

cljs.core.async.t_cljs$core$async51818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51820){
var self__ = this;
var _51820__$1 = this;
return self__.meta51819;
});

cljs.core.async.t_cljs$core$async51818.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51818.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async51818.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51818.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async51818.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51818.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async51818.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51819","meta51819",1580984486,null)], null);
});

cljs.core.async.t_cljs$core$async51818.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51818";

cljs.core.async.t_cljs$core$async51818.cljs$lang$ctorPrWriter = (function (this__37596__auto__,writer__37597__auto__,opt__37598__auto__){
return cljs.core._write.call(null,writer__37597__auto__,"cljs.core.async/t_cljs$core$async51818");
});

cljs.core.async.__GT_t_cljs$core$async51818 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async51818(f__$1,ch__$1,meta51819){
return (new cljs.core.async.t_cljs$core$async51818(f__$1,ch__$1,meta51819));
});

}

return (new cljs.core.async.t_cljs$core$async51818(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async51821 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51821 = (function (p,ch,meta51822){
this.p = p;
this.ch = ch;
this.meta51822 = meta51822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51823,meta51822__$1){
var self__ = this;
var _51823__$1 = this;
return (new cljs.core.async.t_cljs$core$async51821(self__.p,self__.ch,meta51822__$1));
});

cljs.core.async.t_cljs$core$async51821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51823){
var self__ = this;
var _51823__$1 = this;
return self__.meta51822;
});

cljs.core.async.t_cljs$core$async51821.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51821.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async51821.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async51821.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51821.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async51821.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51821.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async51821.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51822","meta51822",-1777796362,null)], null);
});

cljs.core.async.t_cljs$core$async51821.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51821.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51821";

cljs.core.async.t_cljs$core$async51821.cljs$lang$ctorPrWriter = (function (this__37596__auto__,writer__37597__auto__,opt__37598__auto__){
return cljs.core._write.call(null,writer__37597__auto__,"cljs.core.async/t_cljs$core$async51821");
});

cljs.core.async.__GT_t_cljs$core$async51821 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async51821(p__$1,ch__$1,meta51822){
return (new cljs.core.async.t_cljs$core$async51821(p__$1,ch__$1,meta51822));
});

}

return (new cljs.core.async.t_cljs$core$async51821(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__51825 = arguments.length;
switch (G__51825) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__50326__auto___51865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50326__auto___51865,out){
return (function (){
var f__50327__auto__ = (function (){var switch__50236__auto__ = ((function (c__50326__auto___51865,out){
return (function (state_51846){
var state_val_51847 = (state_51846[(1)]);
if((state_val_51847 === (7))){
var inst_51842 = (state_51846[(2)]);
var state_51846__$1 = state_51846;
var statearr_51848_51866 = state_51846__$1;
(statearr_51848_51866[(2)] = inst_51842);

(statearr_51848_51866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51847 === (1))){
var state_51846__$1 = state_51846;
var statearr_51849_51867 = state_51846__$1;
(statearr_51849_51867[(2)] = null);

(statearr_51849_51867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51847 === (4))){
var inst_51828 = (state_51846[(7)]);
var inst_51828__$1 = (state_51846[(2)]);
var inst_51829 = (inst_51828__$1 == null);
var state_51846__$1 = (function (){var statearr_51850 = state_51846;
(statearr_51850[(7)] = inst_51828__$1);

return statearr_51850;
})();
if(cljs.core.truth_(inst_51829)){
var statearr_51851_51868 = state_51846__$1;
(statearr_51851_51868[(1)] = (5));

} else {
var statearr_51852_51869 = state_51846__$1;
(statearr_51852_51869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51847 === (6))){
var inst_51828 = (state_51846[(7)]);
var inst_51833 = p.call(null,inst_51828);
var state_51846__$1 = state_51846;
if(cljs.core.truth_(inst_51833)){
var statearr_51853_51870 = state_51846__$1;
(statearr_51853_51870[(1)] = (8));

} else {
var statearr_51854_51871 = state_51846__$1;
(statearr_51854_51871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51847 === (3))){
var inst_51844 = (state_51846[(2)]);
var state_51846__$1 = state_51846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51846__$1,inst_51844);
} else {
if((state_val_51847 === (2))){
var state_51846__$1 = state_51846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51846__$1,(4),ch);
} else {
if((state_val_51847 === (11))){
var inst_51836 = (state_51846[(2)]);
var state_51846__$1 = state_51846;
var statearr_51855_51872 = state_51846__$1;
(statearr_51855_51872[(2)] = inst_51836);

(statearr_51855_51872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51847 === (9))){
var state_51846__$1 = state_51846;
var statearr_51856_51873 = state_51846__$1;
(statearr_51856_51873[(2)] = null);

(statearr_51856_51873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51847 === (5))){
var inst_51831 = cljs.core.async.close_BANG_.call(null,out);
var state_51846__$1 = state_51846;
var statearr_51857_51874 = state_51846__$1;
(statearr_51857_51874[(2)] = inst_51831);

(statearr_51857_51874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51847 === (10))){
var inst_51839 = (state_51846[(2)]);
var state_51846__$1 = (function (){var statearr_51858 = state_51846;
(statearr_51858[(8)] = inst_51839);

return statearr_51858;
})();
var statearr_51859_51875 = state_51846__$1;
(statearr_51859_51875[(2)] = null);

(statearr_51859_51875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51847 === (8))){
var inst_51828 = (state_51846[(7)]);
var state_51846__$1 = state_51846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51846__$1,(11),out,inst_51828);
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
});})(c__50326__auto___51865,out))
;
return ((function (switch__50236__auto__,c__50326__auto___51865,out){
return (function() {
var cljs$core$async$state_machine__50237__auto__ = null;
var cljs$core$async$state_machine__50237__auto____0 = (function (){
var statearr_51860 = [null,null,null,null,null,null,null,null,null];
(statearr_51860[(0)] = cljs$core$async$state_machine__50237__auto__);

(statearr_51860[(1)] = (1));

return statearr_51860;
});
var cljs$core$async$state_machine__50237__auto____1 = (function (state_51846){
while(true){
var ret_value__50238__auto__ = (function (){try{while(true){
var result__50239__auto__ = switch__50236__auto__.call(null,state_51846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50239__auto__;
}
break;
}
}catch (e51861){if((e51861 instanceof Object)){
var ex__50240__auto__ = e51861;
var statearr_51862_51876 = state_51846;
(statearr_51862_51876[(5)] = ex__50240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51877 = state_51846;
state_51846 = G__51877;
continue;
} else {
return ret_value__50238__auto__;
}
break;
}
});
cljs$core$async$state_machine__50237__auto__ = function(state_51846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50237__auto____1.call(this,state_51846);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50237__auto____0;
cljs$core$async$state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50237__auto____1;
return cljs$core$async$state_machine__50237__auto__;
})()
;})(switch__50236__auto__,c__50326__auto___51865,out))
})();
var state__50328__auto__ = (function (){var statearr_51863 = f__50327__auto__.call(null);
(statearr_51863[(6)] = c__50326__auto___51865);

return statearr_51863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50328__auto__);
});})(c__50326__auto___51865,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__51879 = arguments.length;
switch (G__51879) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__50326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50326__auto__){
return (function (){
var f__50327__auto__ = (function (){var switch__50236__auto__ = ((function (c__50326__auto__){
return (function (state_51942){
var state_val_51943 = (state_51942[(1)]);
if((state_val_51943 === (7))){
var inst_51938 = (state_51942[(2)]);
var state_51942__$1 = state_51942;
var statearr_51944_51982 = state_51942__$1;
(statearr_51944_51982[(2)] = inst_51938);

(statearr_51944_51982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51943 === (20))){
var inst_51908 = (state_51942[(7)]);
var inst_51919 = (state_51942[(2)]);
var inst_51920 = cljs.core.next.call(null,inst_51908);
var inst_51894 = inst_51920;
var inst_51895 = null;
var inst_51896 = (0);
var inst_51897 = (0);
var state_51942__$1 = (function (){var statearr_51945 = state_51942;
(statearr_51945[(8)] = inst_51897);

(statearr_51945[(9)] = inst_51894);

(statearr_51945[(10)] = inst_51896);

(statearr_51945[(11)] = inst_51919);

(statearr_51945[(12)] = inst_51895);

return statearr_51945;
})();
var statearr_51946_51983 = state_51942__$1;
(statearr_51946_51983[(2)] = null);

(statearr_51946_51983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51943 === (1))){
var state_51942__$1 = state_51942;
var statearr_51947_51984 = state_51942__$1;
(statearr_51947_51984[(2)] = null);

(statearr_51947_51984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51943 === (4))){
var inst_51883 = (state_51942[(13)]);
var inst_51883__$1 = (state_51942[(2)]);
var inst_51884 = (inst_51883__$1 == null);
var state_51942__$1 = (function (){var statearr_51948 = state_51942;
(statearr_51948[(13)] = inst_51883__$1);

return statearr_51948;
})();
if(cljs.core.truth_(inst_51884)){
var statearr_51949_51985 = state_51942__$1;
(statearr_51949_51985[(1)] = (5));

} else {
var statearr_51950_51986 = state_51942__$1;
(statearr_51950_51986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51943 === (15))){
var state_51942__$1 = state_51942;
var statearr_51954_51987 = state_51942__$1;
(statearr_51954_51987[(2)] = null);

(statearr_51954_51987[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51943 === (21))){
var state_51942__$1 = state_51942;
var statearr_51955_51988 = state_51942__$1;
(statearr_51955_51988[(2)] = null);

(statearr_51955_51988[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51943 === (13))){
var inst_51897 = (state_51942[(8)]);
var inst_51894 = (state_51942[(9)]);
var inst_51896 = (state_51942[(10)]);
var inst_51895 = (state_51942[(12)]);
var inst_51904 = (state_51942[(2)]);
var inst_51905 = (inst_51897 + (1));
var tmp51951 = inst_51894;
var tmp51952 = inst_51896;
var tmp51953 = inst_51895;
var inst_51894__$1 = tmp51951;
var inst_51895__$1 = tmp51953;
var inst_51896__$1 = tmp51952;
var inst_51897__$1 = inst_51905;
var state_51942__$1 = (function (){var statearr_51956 = state_51942;
(statearr_51956[(8)] = inst_51897__$1);

(statearr_51956[(9)] = inst_51894__$1);

(statearr_51956[(10)] = inst_51896__$1);

(statearr_51956[(12)] = inst_51895__$1);

(statearr_51956[(14)] = inst_51904);

return statearr_51956;
})();
var statearr_51957_51989 = state_51942__$1;
(statearr_51957_51989[(2)] = null);

(statearr_51957_51989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51943 === (22))){
var state_51942__$1 = state_51942;
var statearr_51958_51990 = state_51942__$1;
(statearr_51958_51990[(2)] = null);

(statearr_51958_51990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51943 === (6))){
var inst_51883 = (state_51942[(13)]);
var inst_51892 = f.call(null,inst_51883);
var inst_51893 = cljs.core.seq.call(null,inst_51892);
var inst_51894 = inst_51893;
var inst_51895 = null;
var inst_51896 = (0);
var inst_51897 = (0);
var state_51942__$1 = (function (){var statearr_51959 = state_51942;
(statearr_51959[(8)] = inst_51897);

(statearr_51959[(9)] = inst_51894);

(statearr_51959[(10)] = inst_51896);

(statearr_51959[(12)] = inst_51895);

return statearr_51959;
})();
var statearr_51960_51991 = state_51942__$1;
(statearr_51960_51991[(2)] = null);

(statearr_51960_51991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51943 === (17))){
var inst_51908 = (state_51942[(7)]);
var inst_51912 = cljs.core.chunk_first.call(null,inst_51908);
var inst_51913 = cljs.core.chunk_rest.call(null,inst_51908);
var inst_51914 = cljs.core.count.call(null,inst_51912);
var inst_51894 = inst_51913;
var inst_51895 = inst_51912;
var inst_51896 = inst_51914;
var inst_51897 = (0);
var state_51942__$1 = (function (){var statearr_51961 = state_51942;
(statearr_51961[(8)] = inst_51897);

(statearr_51961[(9)] = inst_51894);

(statearr_51961[(10)] = inst_51896);

(statearr_51961[(12)] = inst_51895);

return statearr_51961;
})();
var statearr_51962_51992 = state_51942__$1;
(statearr_51962_51992[(2)] = null);

(statearr_51962_51992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51943 === (3))){
var inst_51940 = (state_51942[(2)]);
var state_51942__$1 = state_51942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51942__$1,inst_51940);
} else {
if((state_val_51943 === (12))){
var inst_51928 = (state_51942[(2)]);
var state_51942__$1 = state_51942;
var statearr_51963_51993 = state_51942__$1;
(statearr_51963_51993[(2)] = inst_51928);

(statearr_51963_51993[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51943 === (2))){
var state_51942__$1 = state_51942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51942__$1,(4),in$);
} else {
if((state_val_51943 === (23))){
var inst_51936 = (state_51942[(2)]);
var state_51942__$1 = state_51942;
var statearr_51964_51994 = state_51942__$1;
(statearr_51964_51994[(2)] = inst_51936);

(statearr_51964_51994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51943 === (19))){
var inst_51923 = (state_51942[(2)]);
var state_51942__$1 = state_51942;
var statearr_51965_51995 = state_51942__$1;
(statearr_51965_51995[(2)] = inst_51923);

(statearr_51965_51995[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51943 === (11))){
var inst_51894 = (state_51942[(9)]);
var inst_51908 = (state_51942[(7)]);
var inst_51908__$1 = cljs.core.seq.call(null,inst_51894);
var state_51942__$1 = (function (){var statearr_51966 = state_51942;
(statearr_51966[(7)] = inst_51908__$1);

return statearr_51966;
})();
if(inst_51908__$1){
var statearr_51967_51996 = state_51942__$1;
(statearr_51967_51996[(1)] = (14));

} else {
var statearr_51968_51997 = state_51942__$1;
(statearr_51968_51997[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51943 === (9))){
var inst_51930 = (state_51942[(2)]);
var inst_51931 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_51942__$1 = (function (){var statearr_51969 = state_51942;
(statearr_51969[(15)] = inst_51930);

return statearr_51969;
})();
if(cljs.core.truth_(inst_51931)){
var statearr_51970_51998 = state_51942__$1;
(statearr_51970_51998[(1)] = (21));

} else {
var statearr_51971_51999 = state_51942__$1;
(statearr_51971_51999[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51943 === (5))){
var inst_51886 = cljs.core.async.close_BANG_.call(null,out);
var state_51942__$1 = state_51942;
var statearr_51972_52000 = state_51942__$1;
(statearr_51972_52000[(2)] = inst_51886);

(statearr_51972_52000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51943 === (14))){
var inst_51908 = (state_51942[(7)]);
var inst_51910 = cljs.core.chunked_seq_QMARK_.call(null,inst_51908);
var state_51942__$1 = state_51942;
if(inst_51910){
var statearr_51973_52001 = state_51942__$1;
(statearr_51973_52001[(1)] = (17));

} else {
var statearr_51974_52002 = state_51942__$1;
(statearr_51974_52002[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51943 === (16))){
var inst_51926 = (state_51942[(2)]);
var state_51942__$1 = state_51942;
var statearr_51975_52003 = state_51942__$1;
(statearr_51975_52003[(2)] = inst_51926);

(statearr_51975_52003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51943 === (10))){
var inst_51897 = (state_51942[(8)]);
var inst_51895 = (state_51942[(12)]);
var inst_51902 = cljs.core._nth.call(null,inst_51895,inst_51897);
var state_51942__$1 = state_51942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51942__$1,(13),out,inst_51902);
} else {
if((state_val_51943 === (18))){
var inst_51908 = (state_51942[(7)]);
var inst_51917 = cljs.core.first.call(null,inst_51908);
var state_51942__$1 = state_51942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51942__$1,(20),out,inst_51917);
} else {
if((state_val_51943 === (8))){
var inst_51897 = (state_51942[(8)]);
var inst_51896 = (state_51942[(10)]);
var inst_51899 = (inst_51897 < inst_51896);
var inst_51900 = inst_51899;
var state_51942__$1 = state_51942;
if(cljs.core.truth_(inst_51900)){
var statearr_51976_52004 = state_51942__$1;
(statearr_51976_52004[(1)] = (10));

} else {
var statearr_51977_52005 = state_51942__$1;
(statearr_51977_52005[(1)] = (11));

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
});})(c__50326__auto__))
;
return ((function (switch__50236__auto__,c__50326__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__50237__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__50237__auto____0 = (function (){
var statearr_51978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51978[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__50237__auto__);

(statearr_51978[(1)] = (1));

return statearr_51978;
});
var cljs$core$async$mapcat_STAR__$_state_machine__50237__auto____1 = (function (state_51942){
while(true){
var ret_value__50238__auto__ = (function (){try{while(true){
var result__50239__auto__ = switch__50236__auto__.call(null,state_51942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50239__auto__;
}
break;
}
}catch (e51979){if((e51979 instanceof Object)){
var ex__50240__auto__ = e51979;
var statearr_51980_52006 = state_51942;
(statearr_51980_52006[(5)] = ex__50240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52007 = state_51942;
state_51942 = G__52007;
continue;
} else {
return ret_value__50238__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__50237__auto__ = function(state_51942){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__50237__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__50237__auto____1.call(this,state_51942);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__50237__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__50237__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__50237__auto__;
})()
;})(switch__50236__auto__,c__50326__auto__))
})();
var state__50328__auto__ = (function (){var statearr_51981 = f__50327__auto__.call(null);
(statearr_51981[(6)] = c__50326__auto__);

return statearr_51981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50328__auto__);
});})(c__50326__auto__))
);

return c__50326__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__52009 = arguments.length;
switch (G__52009) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__52012 = arguments.length;
switch (G__52012) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__52015 = arguments.length;
switch (G__52015) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__50326__auto___52062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50326__auto___52062,out){
return (function (){
var f__50327__auto__ = (function (){var switch__50236__auto__ = ((function (c__50326__auto___52062,out){
return (function (state_52039){
var state_val_52040 = (state_52039[(1)]);
if((state_val_52040 === (7))){
var inst_52034 = (state_52039[(2)]);
var state_52039__$1 = state_52039;
var statearr_52041_52063 = state_52039__$1;
(statearr_52041_52063[(2)] = inst_52034);

(statearr_52041_52063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52040 === (1))){
var inst_52016 = null;
var state_52039__$1 = (function (){var statearr_52042 = state_52039;
(statearr_52042[(7)] = inst_52016);

return statearr_52042;
})();
var statearr_52043_52064 = state_52039__$1;
(statearr_52043_52064[(2)] = null);

(statearr_52043_52064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52040 === (4))){
var inst_52019 = (state_52039[(8)]);
var inst_52019__$1 = (state_52039[(2)]);
var inst_52020 = (inst_52019__$1 == null);
var inst_52021 = cljs.core.not.call(null,inst_52020);
var state_52039__$1 = (function (){var statearr_52044 = state_52039;
(statearr_52044[(8)] = inst_52019__$1);

return statearr_52044;
})();
if(inst_52021){
var statearr_52045_52065 = state_52039__$1;
(statearr_52045_52065[(1)] = (5));

} else {
var statearr_52046_52066 = state_52039__$1;
(statearr_52046_52066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52040 === (6))){
var state_52039__$1 = state_52039;
var statearr_52047_52067 = state_52039__$1;
(statearr_52047_52067[(2)] = null);

(statearr_52047_52067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52040 === (3))){
var inst_52036 = (state_52039[(2)]);
var inst_52037 = cljs.core.async.close_BANG_.call(null,out);
var state_52039__$1 = (function (){var statearr_52048 = state_52039;
(statearr_52048[(9)] = inst_52036);

return statearr_52048;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52039__$1,inst_52037);
} else {
if((state_val_52040 === (2))){
var state_52039__$1 = state_52039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52039__$1,(4),ch);
} else {
if((state_val_52040 === (11))){
var inst_52019 = (state_52039[(8)]);
var inst_52028 = (state_52039[(2)]);
var inst_52016 = inst_52019;
var state_52039__$1 = (function (){var statearr_52049 = state_52039;
(statearr_52049[(10)] = inst_52028);

(statearr_52049[(7)] = inst_52016);

return statearr_52049;
})();
var statearr_52050_52068 = state_52039__$1;
(statearr_52050_52068[(2)] = null);

(statearr_52050_52068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52040 === (9))){
var inst_52019 = (state_52039[(8)]);
var state_52039__$1 = state_52039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52039__$1,(11),out,inst_52019);
} else {
if((state_val_52040 === (5))){
var inst_52016 = (state_52039[(7)]);
var inst_52019 = (state_52039[(8)]);
var inst_52023 = cljs.core._EQ_.call(null,inst_52019,inst_52016);
var state_52039__$1 = state_52039;
if(inst_52023){
var statearr_52052_52069 = state_52039__$1;
(statearr_52052_52069[(1)] = (8));

} else {
var statearr_52053_52070 = state_52039__$1;
(statearr_52053_52070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52040 === (10))){
var inst_52031 = (state_52039[(2)]);
var state_52039__$1 = state_52039;
var statearr_52054_52071 = state_52039__$1;
(statearr_52054_52071[(2)] = inst_52031);

(statearr_52054_52071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52040 === (8))){
var inst_52016 = (state_52039[(7)]);
var tmp52051 = inst_52016;
var inst_52016__$1 = tmp52051;
var state_52039__$1 = (function (){var statearr_52055 = state_52039;
(statearr_52055[(7)] = inst_52016__$1);

return statearr_52055;
})();
var statearr_52056_52072 = state_52039__$1;
(statearr_52056_52072[(2)] = null);

(statearr_52056_52072[(1)] = (2));


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
});})(c__50326__auto___52062,out))
;
return ((function (switch__50236__auto__,c__50326__auto___52062,out){
return (function() {
var cljs$core$async$state_machine__50237__auto__ = null;
var cljs$core$async$state_machine__50237__auto____0 = (function (){
var statearr_52057 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52057[(0)] = cljs$core$async$state_machine__50237__auto__);

(statearr_52057[(1)] = (1));

return statearr_52057;
});
var cljs$core$async$state_machine__50237__auto____1 = (function (state_52039){
while(true){
var ret_value__50238__auto__ = (function (){try{while(true){
var result__50239__auto__ = switch__50236__auto__.call(null,state_52039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50239__auto__;
}
break;
}
}catch (e52058){if((e52058 instanceof Object)){
var ex__50240__auto__ = e52058;
var statearr_52059_52073 = state_52039;
(statearr_52059_52073[(5)] = ex__50240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52074 = state_52039;
state_52039 = G__52074;
continue;
} else {
return ret_value__50238__auto__;
}
break;
}
});
cljs$core$async$state_machine__50237__auto__ = function(state_52039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50237__auto____1.call(this,state_52039);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50237__auto____0;
cljs$core$async$state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50237__auto____1;
return cljs$core$async$state_machine__50237__auto__;
})()
;})(switch__50236__auto__,c__50326__auto___52062,out))
})();
var state__50328__auto__ = (function (){var statearr_52060 = f__50327__auto__.call(null);
(statearr_52060[(6)] = c__50326__auto___52062);

return statearr_52060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50328__auto__);
});})(c__50326__auto___52062,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__52076 = arguments.length;
switch (G__52076) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__50326__auto___52142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50326__auto___52142,out){
return (function (){
var f__50327__auto__ = (function (){var switch__50236__auto__ = ((function (c__50326__auto___52142,out){
return (function (state_52114){
var state_val_52115 = (state_52114[(1)]);
if((state_val_52115 === (7))){
var inst_52110 = (state_52114[(2)]);
var state_52114__$1 = state_52114;
var statearr_52116_52143 = state_52114__$1;
(statearr_52116_52143[(2)] = inst_52110);

(statearr_52116_52143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52115 === (1))){
var inst_52077 = (new Array(n));
var inst_52078 = inst_52077;
var inst_52079 = (0);
var state_52114__$1 = (function (){var statearr_52117 = state_52114;
(statearr_52117[(7)] = inst_52079);

(statearr_52117[(8)] = inst_52078);

return statearr_52117;
})();
var statearr_52118_52144 = state_52114__$1;
(statearr_52118_52144[(2)] = null);

(statearr_52118_52144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52115 === (4))){
var inst_52082 = (state_52114[(9)]);
var inst_52082__$1 = (state_52114[(2)]);
var inst_52083 = (inst_52082__$1 == null);
var inst_52084 = cljs.core.not.call(null,inst_52083);
var state_52114__$1 = (function (){var statearr_52119 = state_52114;
(statearr_52119[(9)] = inst_52082__$1);

return statearr_52119;
})();
if(inst_52084){
var statearr_52120_52145 = state_52114__$1;
(statearr_52120_52145[(1)] = (5));

} else {
var statearr_52121_52146 = state_52114__$1;
(statearr_52121_52146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52115 === (15))){
var inst_52104 = (state_52114[(2)]);
var state_52114__$1 = state_52114;
var statearr_52122_52147 = state_52114__$1;
(statearr_52122_52147[(2)] = inst_52104);

(statearr_52122_52147[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52115 === (13))){
var state_52114__$1 = state_52114;
var statearr_52123_52148 = state_52114__$1;
(statearr_52123_52148[(2)] = null);

(statearr_52123_52148[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52115 === (6))){
var inst_52079 = (state_52114[(7)]);
var inst_52100 = (inst_52079 > (0));
var state_52114__$1 = state_52114;
if(cljs.core.truth_(inst_52100)){
var statearr_52124_52149 = state_52114__$1;
(statearr_52124_52149[(1)] = (12));

} else {
var statearr_52125_52150 = state_52114__$1;
(statearr_52125_52150[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52115 === (3))){
var inst_52112 = (state_52114[(2)]);
var state_52114__$1 = state_52114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52114__$1,inst_52112);
} else {
if((state_val_52115 === (12))){
var inst_52078 = (state_52114[(8)]);
var inst_52102 = cljs.core.vec.call(null,inst_52078);
var state_52114__$1 = state_52114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52114__$1,(15),out,inst_52102);
} else {
if((state_val_52115 === (2))){
var state_52114__$1 = state_52114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52114__$1,(4),ch);
} else {
if((state_val_52115 === (11))){
var inst_52094 = (state_52114[(2)]);
var inst_52095 = (new Array(n));
var inst_52078 = inst_52095;
var inst_52079 = (0);
var state_52114__$1 = (function (){var statearr_52126 = state_52114;
(statearr_52126[(7)] = inst_52079);

(statearr_52126[(8)] = inst_52078);

(statearr_52126[(10)] = inst_52094);

return statearr_52126;
})();
var statearr_52127_52151 = state_52114__$1;
(statearr_52127_52151[(2)] = null);

(statearr_52127_52151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52115 === (9))){
var inst_52078 = (state_52114[(8)]);
var inst_52092 = cljs.core.vec.call(null,inst_52078);
var state_52114__$1 = state_52114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52114__$1,(11),out,inst_52092);
} else {
if((state_val_52115 === (5))){
var inst_52087 = (state_52114[(11)]);
var inst_52082 = (state_52114[(9)]);
var inst_52079 = (state_52114[(7)]);
var inst_52078 = (state_52114[(8)]);
var inst_52086 = (inst_52078[inst_52079] = inst_52082);
var inst_52087__$1 = (inst_52079 + (1));
var inst_52088 = (inst_52087__$1 < n);
var state_52114__$1 = (function (){var statearr_52128 = state_52114;
(statearr_52128[(11)] = inst_52087__$1);

(statearr_52128[(12)] = inst_52086);

return statearr_52128;
})();
if(cljs.core.truth_(inst_52088)){
var statearr_52129_52152 = state_52114__$1;
(statearr_52129_52152[(1)] = (8));

} else {
var statearr_52130_52153 = state_52114__$1;
(statearr_52130_52153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52115 === (14))){
var inst_52107 = (state_52114[(2)]);
var inst_52108 = cljs.core.async.close_BANG_.call(null,out);
var state_52114__$1 = (function (){var statearr_52132 = state_52114;
(statearr_52132[(13)] = inst_52107);

return statearr_52132;
})();
var statearr_52133_52154 = state_52114__$1;
(statearr_52133_52154[(2)] = inst_52108);

(statearr_52133_52154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52115 === (10))){
var inst_52098 = (state_52114[(2)]);
var state_52114__$1 = state_52114;
var statearr_52134_52155 = state_52114__$1;
(statearr_52134_52155[(2)] = inst_52098);

(statearr_52134_52155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52115 === (8))){
var inst_52087 = (state_52114[(11)]);
var inst_52078 = (state_52114[(8)]);
var tmp52131 = inst_52078;
var inst_52078__$1 = tmp52131;
var inst_52079 = inst_52087;
var state_52114__$1 = (function (){var statearr_52135 = state_52114;
(statearr_52135[(7)] = inst_52079);

(statearr_52135[(8)] = inst_52078__$1);

return statearr_52135;
})();
var statearr_52136_52156 = state_52114__$1;
(statearr_52136_52156[(2)] = null);

(statearr_52136_52156[(1)] = (2));


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
});})(c__50326__auto___52142,out))
;
return ((function (switch__50236__auto__,c__50326__auto___52142,out){
return (function() {
var cljs$core$async$state_machine__50237__auto__ = null;
var cljs$core$async$state_machine__50237__auto____0 = (function (){
var statearr_52137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52137[(0)] = cljs$core$async$state_machine__50237__auto__);

(statearr_52137[(1)] = (1));

return statearr_52137;
});
var cljs$core$async$state_machine__50237__auto____1 = (function (state_52114){
while(true){
var ret_value__50238__auto__ = (function (){try{while(true){
var result__50239__auto__ = switch__50236__auto__.call(null,state_52114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50239__auto__;
}
break;
}
}catch (e52138){if((e52138 instanceof Object)){
var ex__50240__auto__ = e52138;
var statearr_52139_52157 = state_52114;
(statearr_52139_52157[(5)] = ex__50240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52158 = state_52114;
state_52114 = G__52158;
continue;
} else {
return ret_value__50238__auto__;
}
break;
}
});
cljs$core$async$state_machine__50237__auto__ = function(state_52114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50237__auto____1.call(this,state_52114);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50237__auto____0;
cljs$core$async$state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50237__auto____1;
return cljs$core$async$state_machine__50237__auto__;
})()
;})(switch__50236__auto__,c__50326__auto___52142,out))
})();
var state__50328__auto__ = (function (){var statearr_52140 = f__50327__auto__.call(null);
(statearr_52140[(6)] = c__50326__auto___52142);

return statearr_52140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50328__auto__);
});})(c__50326__auto___52142,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__52160 = arguments.length;
switch (G__52160) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__50326__auto___52230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50326__auto___52230,out){
return (function (){
var f__50327__auto__ = (function (){var switch__50236__auto__ = ((function (c__50326__auto___52230,out){
return (function (state_52202){
var state_val_52203 = (state_52202[(1)]);
if((state_val_52203 === (7))){
var inst_52198 = (state_52202[(2)]);
var state_52202__$1 = state_52202;
var statearr_52204_52231 = state_52202__$1;
(statearr_52204_52231[(2)] = inst_52198);

(statearr_52204_52231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52203 === (1))){
var inst_52161 = [];
var inst_52162 = inst_52161;
var inst_52163 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_52202__$1 = (function (){var statearr_52205 = state_52202;
(statearr_52205[(7)] = inst_52163);

(statearr_52205[(8)] = inst_52162);

return statearr_52205;
})();
var statearr_52206_52232 = state_52202__$1;
(statearr_52206_52232[(2)] = null);

(statearr_52206_52232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52203 === (4))){
var inst_52166 = (state_52202[(9)]);
var inst_52166__$1 = (state_52202[(2)]);
var inst_52167 = (inst_52166__$1 == null);
var inst_52168 = cljs.core.not.call(null,inst_52167);
var state_52202__$1 = (function (){var statearr_52207 = state_52202;
(statearr_52207[(9)] = inst_52166__$1);

return statearr_52207;
})();
if(inst_52168){
var statearr_52208_52233 = state_52202__$1;
(statearr_52208_52233[(1)] = (5));

} else {
var statearr_52209_52234 = state_52202__$1;
(statearr_52209_52234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52203 === (15))){
var inst_52192 = (state_52202[(2)]);
var state_52202__$1 = state_52202;
var statearr_52210_52235 = state_52202__$1;
(statearr_52210_52235[(2)] = inst_52192);

(statearr_52210_52235[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52203 === (13))){
var state_52202__$1 = state_52202;
var statearr_52211_52236 = state_52202__$1;
(statearr_52211_52236[(2)] = null);

(statearr_52211_52236[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52203 === (6))){
var inst_52162 = (state_52202[(8)]);
var inst_52187 = inst_52162.length;
var inst_52188 = (inst_52187 > (0));
var state_52202__$1 = state_52202;
if(cljs.core.truth_(inst_52188)){
var statearr_52212_52237 = state_52202__$1;
(statearr_52212_52237[(1)] = (12));

} else {
var statearr_52213_52238 = state_52202__$1;
(statearr_52213_52238[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52203 === (3))){
var inst_52200 = (state_52202[(2)]);
var state_52202__$1 = state_52202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52202__$1,inst_52200);
} else {
if((state_val_52203 === (12))){
var inst_52162 = (state_52202[(8)]);
var inst_52190 = cljs.core.vec.call(null,inst_52162);
var state_52202__$1 = state_52202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52202__$1,(15),out,inst_52190);
} else {
if((state_val_52203 === (2))){
var state_52202__$1 = state_52202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52202__$1,(4),ch);
} else {
if((state_val_52203 === (11))){
var inst_52166 = (state_52202[(9)]);
var inst_52170 = (state_52202[(10)]);
var inst_52180 = (state_52202[(2)]);
var inst_52181 = [];
var inst_52182 = inst_52181.push(inst_52166);
var inst_52162 = inst_52181;
var inst_52163 = inst_52170;
var state_52202__$1 = (function (){var statearr_52214 = state_52202;
(statearr_52214[(11)] = inst_52182);

(statearr_52214[(7)] = inst_52163);

(statearr_52214[(8)] = inst_52162);

(statearr_52214[(12)] = inst_52180);

return statearr_52214;
})();
var statearr_52215_52239 = state_52202__$1;
(statearr_52215_52239[(2)] = null);

(statearr_52215_52239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52203 === (9))){
var inst_52162 = (state_52202[(8)]);
var inst_52178 = cljs.core.vec.call(null,inst_52162);
var state_52202__$1 = state_52202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52202__$1,(11),out,inst_52178);
} else {
if((state_val_52203 === (5))){
var inst_52163 = (state_52202[(7)]);
var inst_52166 = (state_52202[(9)]);
var inst_52170 = (state_52202[(10)]);
var inst_52170__$1 = f.call(null,inst_52166);
var inst_52171 = cljs.core._EQ_.call(null,inst_52170__$1,inst_52163);
var inst_52172 = cljs.core.keyword_identical_QMARK_.call(null,inst_52163,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_52173 = (inst_52171) || (inst_52172);
var state_52202__$1 = (function (){var statearr_52216 = state_52202;
(statearr_52216[(10)] = inst_52170__$1);

return statearr_52216;
})();
if(cljs.core.truth_(inst_52173)){
var statearr_52217_52240 = state_52202__$1;
(statearr_52217_52240[(1)] = (8));

} else {
var statearr_52218_52241 = state_52202__$1;
(statearr_52218_52241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52203 === (14))){
var inst_52195 = (state_52202[(2)]);
var inst_52196 = cljs.core.async.close_BANG_.call(null,out);
var state_52202__$1 = (function (){var statearr_52220 = state_52202;
(statearr_52220[(13)] = inst_52195);

return statearr_52220;
})();
var statearr_52221_52242 = state_52202__$1;
(statearr_52221_52242[(2)] = inst_52196);

(statearr_52221_52242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52203 === (10))){
var inst_52185 = (state_52202[(2)]);
var state_52202__$1 = state_52202;
var statearr_52222_52243 = state_52202__$1;
(statearr_52222_52243[(2)] = inst_52185);

(statearr_52222_52243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52203 === (8))){
var inst_52166 = (state_52202[(9)]);
var inst_52170 = (state_52202[(10)]);
var inst_52162 = (state_52202[(8)]);
var inst_52175 = inst_52162.push(inst_52166);
var tmp52219 = inst_52162;
var inst_52162__$1 = tmp52219;
var inst_52163 = inst_52170;
var state_52202__$1 = (function (){var statearr_52223 = state_52202;
(statearr_52223[(7)] = inst_52163);

(statearr_52223[(14)] = inst_52175);

(statearr_52223[(8)] = inst_52162__$1);

return statearr_52223;
})();
var statearr_52224_52244 = state_52202__$1;
(statearr_52224_52244[(2)] = null);

(statearr_52224_52244[(1)] = (2));


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
});})(c__50326__auto___52230,out))
;
return ((function (switch__50236__auto__,c__50326__auto___52230,out){
return (function() {
var cljs$core$async$state_machine__50237__auto__ = null;
var cljs$core$async$state_machine__50237__auto____0 = (function (){
var statearr_52225 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52225[(0)] = cljs$core$async$state_machine__50237__auto__);

(statearr_52225[(1)] = (1));

return statearr_52225;
});
var cljs$core$async$state_machine__50237__auto____1 = (function (state_52202){
while(true){
var ret_value__50238__auto__ = (function (){try{while(true){
var result__50239__auto__ = switch__50236__auto__.call(null,state_52202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50239__auto__;
}
break;
}
}catch (e52226){if((e52226 instanceof Object)){
var ex__50240__auto__ = e52226;
var statearr_52227_52245 = state_52202;
(statearr_52227_52245[(5)] = ex__50240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52246 = state_52202;
state_52202 = G__52246;
continue;
} else {
return ret_value__50238__auto__;
}
break;
}
});
cljs$core$async$state_machine__50237__auto__ = function(state_52202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50237__auto____1.call(this,state_52202);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50237__auto____0;
cljs$core$async$state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50237__auto____1;
return cljs$core$async$state_machine__50237__auto__;
})()
;})(switch__50236__auto__,c__50326__auto___52230,out))
})();
var state__50328__auto__ = (function (){var statearr_52228 = f__50327__auto__.call(null);
(statearr_52228[(6)] = c__50326__auto___52230);

return statearr_52228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50328__auto__);
});})(c__50326__auto___52230,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1517117191605
