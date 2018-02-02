// Compiled by ClojureScript 1.9.946 {}
goog.provide('taoensso.tufte.impl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.tufte.impl.PData = (function (__t0,__meta,__extmap,__hash){
this.__t0 = __t0;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.tufte.impl.PData.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__37613__auto__,k__37614__auto__){
var self__ = this;
var this__37613__auto____$1 = this;
return this__37613__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__37614__auto__,null);
});

taoensso.tufte.impl.PData.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__37615__auto__,k46493,else__37616__auto__){
var self__ = this;
var this__37615__auto____$1 = this;
var G__46497 = k46493;
var G__46497__$1 = (((G__46497 instanceof cljs.core.Keyword))?G__46497.fqn:null);
switch (G__46497__$1) {
case "__t0":
return self__.__t0;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k46493,else__37616__auto__);

}
});

taoensso.tufte.impl.PData.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__37627__auto__,writer__37628__auto__,opts__37629__auto__){
var self__ = this;
var this__37627__auto____$1 = this;
var pr_pair__37630__auto__ = ((function (this__37627__auto____$1){
return (function (keyval__37631__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__37628__auto__,cljs.core.pr_writer,""," ","",opts__37629__auto__,keyval__37631__auto__);
});})(this__37627__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__37628__auto__,pr_pair__37630__auto__,"#taoensso.tufte.impl.PData{",", ","}",opts__37629__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"__t0","__t0",-1018840985),self__.__t0],null))], null),self__.__extmap));
});

taoensso.tufte.impl.PData.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46492){
var self__ = this;
var G__46492__$1 = this;
return (new cljs.core.RecordIter((0),G__46492__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__t0","__t0",-1018840985)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

taoensso.tufte.impl.PData.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__37611__auto__){
var self__ = this;
var this__37611__auto____$1 = this;
return self__.__meta;
});

taoensso.tufte.impl.PData.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__37608__auto__){
var self__ = this;
var this__37608__auto____$1 = this;
return (new taoensso.tufte.impl.PData(self__.__t0,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.tufte.impl.PData.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__37617__auto__){
var self__ = this;
var this__37617__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.tufte.impl.PData.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__37609__auto__){
var self__ = this;
var this__37609__auto____$1 = this;
var h__37381__auto__ = self__.__hash;
if(!((h__37381__auto__ == null))){
return h__37381__auto__;
} else {
var h__37381__auto____$1 = ((function (h__37381__auto__,this__37609__auto____$1){
return (function (coll__37610__auto__){
return (1205321799 ^ cljs.core.hash_unordered_coll.call(null,coll__37610__auto__));
});})(h__37381__auto__,this__37609__auto____$1))
.call(null,this__37609__auto____$1);
self__.__hash = h__37381__auto____$1;

return h__37381__auto____$1;
}
});

taoensso.tufte.impl.PData.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46494,other46495){
var self__ = this;
var this46494__$1 = this;
return (!((other46495 == null))) && ((this46494__$1.constructor === other46495.constructor)) && (cljs.core._EQ_.call(null,this46494__$1.__t0,other46495.__t0)) && (cljs.core._EQ_.call(null,this46494__$1.__extmap,other46495.__extmap));
});

taoensso.tufte.impl.PData.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__37622__auto__,k__37623__auto__){
var self__ = this;
var this__37622__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__t0","__t0",-1018840985),null], null), null),k__37623__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37622__auto____$1),self__.__meta),k__37623__auto__);
} else {
return (new taoensso.tufte.impl.PData(self__.__t0,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__37623__auto__)),null));
}
});

taoensso.tufte.impl.PData.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__37620__auto__,k__37621__auto__,G__46492){
var self__ = this;
var this__37620__auto____$1 = this;
var pred__46498 = cljs.core.keyword_identical_QMARK_;
var expr__46499 = k__37621__auto__;
if(cljs.core.truth_(pred__46498.call(null,new cljs.core.Keyword(null,"__t0","__t0",-1018840985),expr__46499))){
return (new taoensso.tufte.impl.PData(G__46492,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.tufte.impl.PData(self__.__t0,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__37621__auto__,G__46492),null));
}
});

taoensso.tufte.impl.PData.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__37625__auto__){
var self__ = this;
var this__37625__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"__t0","__t0",-1018840985),self__.__t0],null))], null),self__.__extmap));
});

taoensso.tufte.impl.PData.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__37612__auto__,G__46492){
var self__ = this;
var this__37612__auto____$1 = this;
return (new taoensso.tufte.impl.PData(self__.__t0,G__46492,self__.__extmap,self__.__hash));
});

taoensso.tufte.impl.PData.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__37618__auto__,entry__37619__auto__){
var self__ = this;
var this__37618__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__37619__auto__)){
return this__37618__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__37619__auto__,(0)),cljs.core._nth.call(null,entry__37619__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__37618__auto____$1,entry__37619__auto__);
}
});

taoensso.tufte.impl.PData.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"__t0","__t0",621690542,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.tufte.impl.PData.cljs$lang$type = true;

taoensso.tufte.impl.PData.cljs$lang$ctorPrSeq = (function (this__37651__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.tufte.impl/PData");
});

taoensso.tufte.impl.PData.cljs$lang$ctorPrWriter = (function (this__37651__auto__,writer__37652__auto__){
return cljs.core._write.call(null,writer__37652__auto__,"taoensso.tufte.impl/PData");
});

taoensso.tufte.impl.__GT_PData = (function taoensso$tufte$impl$__GT_PData(__t0){
return (new taoensso.tufte.impl.PData(__t0,null,null,null));
});

taoensso.tufte.impl.map__GT_PData = (function taoensso$tufte$impl$map__GT_PData(G__46496){
return (new taoensso.tufte.impl.PData(new cljs.core.Keyword(null,"__t0","__t0",-1018840985).cljs$core$IFn$_invoke$arity$1(G__46496),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__46496,new cljs.core.Keyword(null,"__t0","__t0",-1018840985))),null));
});

/**
 * Non-nil iff dynamic profiling active.
 */
taoensso.tufte.impl._STAR_pdata__STAR_ = null;
/**
 * Non-nil iff thread-local profiling active.
 */
taoensso.tufte.impl.pdata_proxy = (function (){var state_ = cljs.core.volatile_BANG_.call(null,false);
return ((function (state_){
return (function() {
var G__46502 = null;
var G__46502__0 = (function (){
return cljs.core.deref.call(null,state_);
});
var G__46502__1 = (function (new_val){
return cljs.core.vreset_BANG_.call(null,state_,new_val);
});
G__46502 = function(new_val){
switch(arguments.length){
case 0:
return G__46502__0.call(this);
case 1:
return G__46502__1.call(this,new_val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__46502.cljs$core$IFn$_invoke$arity$0 = G__46502__0;
G__46502.cljs$core$IFn$_invoke$arity$1 = G__46502__1;
return G__46502;
})()
;})(state_))
})();
var ret__38250__auto___46503 = taoensso.tufte.impl.new_pdata_thread = (function taoensso$tufte$impl$new_pdata_thread(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"PData.","PData.",-1648305499,null)),(function (){var x__37879__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.encore","now-nano*","taoensso.encore/now-nano*",853743939,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})())));
});
taoensso.tufte.impl.new_pdata_thread.cljs$lang$macro = true;

var ret__38250__auto___46504 = taoensso.tufte.impl.new_pdata_dynamic = (function taoensso$tufte$impl$new_pdata_dynamic(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__37879__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"PData.","PData.",-1648305499,null)),(function (){var x__37879__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.encore","now-nano*","taoensso.encore/now-nano*",853743939,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})())));
});
taoensso.tufte.impl.new_pdata_dynamic.cljs$lang$macro = true;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.tufte.impl.Clock = (function (t0,t1,total,__meta,__extmap,__hash){
this.t0 = t0;
this.t1 = t1;
this.total = total;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.tufte.impl.Clock.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__37613__auto__,k__37614__auto__){
var self__ = this;
var this__37613__auto____$1 = this;
return this__37613__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__37614__auto__,null);
});

taoensso.tufte.impl.Clock.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__37615__auto__,k46506,else__37616__auto__){
var self__ = this;
var this__37615__auto____$1 = this;
var G__46510 = k46506;
var G__46510__$1 = (((G__46510 instanceof cljs.core.Keyword))?G__46510.fqn:null);
switch (G__46510__$1) {
case "t0":
return self__.t0;

break;
case "t1":
return self__.t1;

break;
case "total":
return self__.total;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k46506,else__37616__auto__);

}
});

taoensso.tufte.impl.Clock.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__37627__auto__,writer__37628__auto__,opts__37629__auto__){
var self__ = this;
var this__37627__auto____$1 = this;
var pr_pair__37630__auto__ = ((function (this__37627__auto____$1){
return (function (keyval__37631__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__37628__auto__,cljs.core.pr_writer,""," ","",opts__37629__auto__,keyval__37631__auto__);
});})(this__37627__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__37628__auto__,pr_pair__37630__auto__,"#taoensso.tufte.impl.Clock{",", ","}",opts__37629__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"t0","t0",2120162535),self__.t0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"t1","t1",24972444),self__.t1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"total","total",1916810418),self__.total],null))], null),self__.__extmap));
});

taoensso.tufte.impl.Clock.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46505){
var self__ = this;
var G__46505__$1 = this;
return (new cljs.core.RecordIter((0),G__46505__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t0","t0",2120162535),new cljs.core.Keyword(null,"t1","t1",24972444),new cljs.core.Keyword(null,"total","total",1916810418)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

taoensso.tufte.impl.Clock.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__37611__auto__){
var self__ = this;
var this__37611__auto____$1 = this;
return self__.__meta;
});

taoensso.tufte.impl.Clock.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__37608__auto__){
var self__ = this;
var this__37608__auto____$1 = this;
return (new taoensso.tufte.impl.Clock(self__.t0,self__.t1,self__.total,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.tufte.impl.Clock.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__37617__auto__){
var self__ = this;
var this__37617__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.tufte.impl.Clock.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__37609__auto__){
var self__ = this;
var this__37609__auto____$1 = this;
var h__37381__auto__ = self__.__hash;
if(!((h__37381__auto__ == null))){
return h__37381__auto__;
} else {
var h__37381__auto____$1 = ((function (h__37381__auto__,this__37609__auto____$1){
return (function (coll__37610__auto__){
return (1323235705 ^ cljs.core.hash_unordered_coll.call(null,coll__37610__auto__));
});})(h__37381__auto__,this__37609__auto____$1))
.call(null,this__37609__auto____$1);
self__.__hash = h__37381__auto____$1;

return h__37381__auto____$1;
}
});

taoensso.tufte.impl.Clock.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46507,other46508){
var self__ = this;
var this46507__$1 = this;
return (!((other46508 == null))) && ((this46507__$1.constructor === other46508.constructor)) && (cljs.core._EQ_.call(null,this46507__$1.t0,other46508.t0)) && (cljs.core._EQ_.call(null,this46507__$1.t1,other46508.t1)) && (cljs.core._EQ_.call(null,this46507__$1.total,other46508.total)) && (cljs.core._EQ_.call(null,this46507__$1.__extmap,other46508.__extmap));
});

taoensso.tufte.impl.Clock.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__37622__auto__,k__37623__auto__){
var self__ = this;
var this__37622__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t0","t0",2120162535),null,new cljs.core.Keyword(null,"total","total",1916810418),null,new cljs.core.Keyword(null,"t1","t1",24972444),null], null), null),k__37623__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37622__auto____$1),self__.__meta),k__37623__auto__);
} else {
return (new taoensso.tufte.impl.Clock(self__.t0,self__.t1,self__.total,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__37623__auto__)),null));
}
});

taoensso.tufte.impl.Clock.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__37620__auto__,k__37621__auto__,G__46505){
var self__ = this;
var this__37620__auto____$1 = this;
var pred__46511 = cljs.core.keyword_identical_QMARK_;
var expr__46512 = k__37621__auto__;
if(cljs.core.truth_(pred__46511.call(null,new cljs.core.Keyword(null,"t0","t0",2120162535),expr__46512))){
return (new taoensso.tufte.impl.Clock(G__46505,self__.t1,self__.total,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__46511.call(null,new cljs.core.Keyword(null,"t1","t1",24972444),expr__46512))){
return (new taoensso.tufte.impl.Clock(self__.t0,G__46505,self__.total,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__46511.call(null,new cljs.core.Keyword(null,"total","total",1916810418),expr__46512))){
return (new taoensso.tufte.impl.Clock(self__.t0,self__.t1,G__46505,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.tufte.impl.Clock(self__.t0,self__.t1,self__.total,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__37621__auto__,G__46505),null));
}
}
}
});

taoensso.tufte.impl.Clock.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__37625__auto__){
var self__ = this;
var this__37625__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"t0","t0",2120162535),self__.t0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"t1","t1",24972444),self__.t1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"total","total",1916810418),self__.total],null))], null),self__.__extmap));
});

taoensso.tufte.impl.Clock.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__37612__auto__,G__46505){
var self__ = this;
var this__37612__auto____$1 = this;
return (new taoensso.tufte.impl.Clock(self__.t0,self__.t1,self__.total,G__46505,self__.__extmap,self__.__hash));
});

taoensso.tufte.impl.Clock.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__37618__auto__,entry__37619__auto__){
var self__ = this;
var this__37618__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__37619__auto__)){
return this__37618__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__37619__auto__,(0)),cljs.core._nth.call(null,entry__37619__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__37618__auto____$1,entry__37619__auto__);
}
});

taoensso.tufte.impl.Clock.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"t0","t0",-534273234,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"t1","t1",1665503971,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"total","total",-737625351,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.tufte.impl.Clock.cljs$lang$type = true;

taoensso.tufte.impl.Clock.cljs$lang$ctorPrSeq = (function (this__37651__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.tufte.impl/Clock");
});

taoensso.tufte.impl.Clock.cljs$lang$ctorPrWriter = (function (this__37651__auto__,writer__37652__auto__){
return cljs.core._write.call(null,writer__37652__auto__,"taoensso.tufte.impl/Clock");
});

taoensso.tufte.impl.__GT_Clock = (function taoensso$tufte$impl$__GT_Clock(t0,t1,total){
return (new taoensso.tufte.impl.Clock(t0,t1,total,null,null,null));
});

taoensso.tufte.impl.map__GT_Clock = (function taoensso$tufte$impl$map__GT_Clock(G__46509){
return (new taoensso.tufte.impl.Clock(new cljs.core.Keyword(null,"t0","t0",2120162535).cljs$core$IFn$_invoke$arity$1(G__46509),new cljs.core.Keyword(null,"t1","t1",24972444).cljs$core$IFn$_invoke$arity$1(G__46509),new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__46509),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__46509,new cljs.core.Keyword(null,"t0","t0",2120162535),new cljs.core.Keyword(null,"t1","t1",24972444),new cljs.core.Keyword(null,"total","total",1916810418))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.tufte.impl.IdStats = (function (count,time,mean,mad_sum,mad,min,max,__meta,__extmap,__hash){
this.count = count;
this.time = time;
this.mean = mean;
this.mad_sum = mad_sum;
this.mad = mad;
this.min = min;
this.max = max;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.tufte.impl.IdStats.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__37613__auto__,k__37614__auto__){
var self__ = this;
var this__37613__auto____$1 = this;
return this__37613__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__37614__auto__,null);
});

taoensso.tufte.impl.IdStats.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__37615__auto__,k46516,else__37616__auto__){
var self__ = this;
var this__37615__auto____$1 = this;
var G__46520 = k46516;
var G__46520__$1 = (((G__46520 instanceof cljs.core.Keyword))?G__46520.fqn:null);
switch (G__46520__$1) {
case "count":
return self__.count;

break;
case "time":
return self__.time;

break;
case "mean":
return self__.mean;

break;
case "mad-sum":
return self__.mad_sum;

break;
case "mad":
return self__.mad;

break;
case "min":
return self__.min;

break;
case "max":
return self__.max;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k46516,else__37616__auto__);

}
});

taoensso.tufte.impl.IdStats.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__37627__auto__,writer__37628__auto__,opts__37629__auto__){
var self__ = this;
var this__37627__auto____$1 = this;
var pr_pair__37630__auto__ = ((function (this__37627__auto____$1){
return (function (keyval__37631__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__37628__auto__,cljs.core.pr_writer,""," ","",opts__37629__auto__,keyval__37631__auto__);
});})(this__37627__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__37628__auto__,pr_pair__37630__auto__,"#taoensso.tufte.impl.IdStats{",", ","}",opts__37629__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"count","count",2139924085),self__.count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"time","time",1385887882),self__.time],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mean","mean",-1359234715),self__.mean],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937),self__.mad_sum],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mad","mad",-1963165801),self__.mad],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"min","min",444991522),self__.min],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max","max",61366548),self__.max],null))], null),self__.__extmap));
});

taoensso.tufte.impl.IdStats.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46515){
var self__ = this;
var G__46515__$1 = this;
return (new cljs.core.RecordIter((0),G__46515__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"max","max",61366548)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

taoensso.tufte.impl.IdStats.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__37611__auto__){
var self__ = this;
var this__37611__auto____$1 = this;
return self__.__meta;
});

taoensso.tufte.impl.IdStats.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__37608__auto__){
var self__ = this;
var this__37608__auto____$1 = this;
return (new taoensso.tufte.impl.IdStats(self__.count,self__.time,self__.mean,self__.mad_sum,self__.mad,self__.min,self__.max,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.tufte.impl.IdStats.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__37617__auto__){
var self__ = this;
var this__37617__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.tufte.impl.IdStats.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__37609__auto__){
var self__ = this;
var this__37609__auto____$1 = this;
var h__37381__auto__ = self__.__hash;
if(!((h__37381__auto__ == null))){
return h__37381__auto__;
} else {
var h__37381__auto____$1 = ((function (h__37381__auto__,this__37609__auto____$1){
return (function (coll__37610__auto__){
return (1194684684 ^ cljs.core.hash_unordered_coll.call(null,coll__37610__auto__));
});})(h__37381__auto__,this__37609__auto____$1))
.call(null,this__37609__auto____$1);
self__.__hash = h__37381__auto____$1;

return h__37381__auto____$1;
}
});

taoensso.tufte.impl.IdStats.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46517,other46518){
var self__ = this;
var this46517__$1 = this;
return (!((other46518 == null))) && ((this46517__$1.constructor === other46518.constructor)) && (cljs.core._EQ_.call(null,this46517__$1.count,other46518.count)) && (cljs.core._EQ_.call(null,this46517__$1.time,other46518.time)) && (cljs.core._EQ_.call(null,this46517__$1.mean,other46518.mean)) && (cljs.core._EQ_.call(null,this46517__$1.mad_sum,other46518.mad_sum)) && (cljs.core._EQ_.call(null,this46517__$1.mad,other46518.mad)) && (cljs.core._EQ_.call(null,this46517__$1.min,other46518.min)) && (cljs.core._EQ_.call(null,this46517__$1.max,other46518.max)) && (cljs.core._EQ_.call(null,this46517__$1.__extmap,other46518.__extmap));
});

taoensso.tufte.impl.IdStats.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__37622__auto__,k__37623__auto__){
var self__ = this;
var this__37622__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"min","min",444991522),null,new cljs.core.Keyword(null,"mean","mean",-1359234715),null,new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937),null,new cljs.core.Keyword(null,"time","time",1385887882),null,new cljs.core.Keyword(null,"max","max",61366548),null,new cljs.core.Keyword(null,"count","count",2139924085),null,new cljs.core.Keyword(null,"mad","mad",-1963165801),null], null), null),k__37623__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37622__auto____$1),self__.__meta),k__37623__auto__);
} else {
return (new taoensso.tufte.impl.IdStats(self__.count,self__.time,self__.mean,self__.mad_sum,self__.mad,self__.min,self__.max,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__37623__auto__)),null));
}
});

taoensso.tufte.impl.IdStats.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__37620__auto__,k__37621__auto__,G__46515){
var self__ = this;
var this__37620__auto____$1 = this;
var pred__46521 = cljs.core.keyword_identical_QMARK_;
var expr__46522 = k__37621__auto__;
if(cljs.core.truth_(pred__46521.call(null,new cljs.core.Keyword(null,"count","count",2139924085),expr__46522))){
return (new taoensso.tufte.impl.IdStats(G__46515,self__.time,self__.mean,self__.mad_sum,self__.mad,self__.min,self__.max,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__46521.call(null,new cljs.core.Keyword(null,"time","time",1385887882),expr__46522))){
return (new taoensso.tufte.impl.IdStats(self__.count,G__46515,self__.mean,self__.mad_sum,self__.mad,self__.min,self__.max,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__46521.call(null,new cljs.core.Keyword(null,"mean","mean",-1359234715),expr__46522))){
return (new taoensso.tufte.impl.IdStats(self__.count,self__.time,G__46515,self__.mad_sum,self__.mad,self__.min,self__.max,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__46521.call(null,new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937),expr__46522))){
return (new taoensso.tufte.impl.IdStats(self__.count,self__.time,self__.mean,G__46515,self__.mad,self__.min,self__.max,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__46521.call(null,new cljs.core.Keyword(null,"mad","mad",-1963165801),expr__46522))){
return (new taoensso.tufte.impl.IdStats(self__.count,self__.time,self__.mean,self__.mad_sum,G__46515,self__.min,self__.max,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__46521.call(null,new cljs.core.Keyword(null,"min","min",444991522),expr__46522))){
return (new taoensso.tufte.impl.IdStats(self__.count,self__.time,self__.mean,self__.mad_sum,self__.mad,G__46515,self__.max,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__46521.call(null,new cljs.core.Keyword(null,"max","max",61366548),expr__46522))){
return (new taoensso.tufte.impl.IdStats(self__.count,self__.time,self__.mean,self__.mad_sum,self__.mad,self__.min,G__46515,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.tufte.impl.IdStats(self__.count,self__.time,self__.mean,self__.mad_sum,self__.mad,self__.min,self__.max,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__37621__auto__,G__46515),null));
}
}
}
}
}
}
}
});

taoensso.tufte.impl.IdStats.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__37625__auto__){
var self__ = this;
var this__37625__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"count","count",2139924085),self__.count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"time","time",1385887882),self__.time],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mean","mean",-1359234715),self__.mean],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937),self__.mad_sum],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mad","mad",-1963165801),self__.mad],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"min","min",444991522),self__.min],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max","max",61366548),self__.max],null))], null),self__.__extmap));
});

taoensso.tufte.impl.IdStats.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__37612__auto__,G__46515){
var self__ = this;
var this__37612__auto____$1 = this;
return (new taoensso.tufte.impl.IdStats(self__.count,self__.time,self__.mean,self__.mad_sum,self__.mad,self__.min,self__.max,G__46515,self__.__extmap,self__.__hash));
});

taoensso.tufte.impl.IdStats.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__37618__auto__,entry__37619__auto__){
var self__ = this;
var this__37618__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__37619__auto__)){
return this__37618__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__37619__auto__,(0)),cljs.core._nth.call(null,entry__37619__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__37618__auto____$1,entry__37619__auto__);
}
});

taoensso.tufte.impl.IdStats.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"time","time",-1268547887,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"mean","mean",281296812,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"mad-sum","mad-sum",871924590,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"mad","mad",-322634274,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.tufte.impl.IdStats.cljs$lang$type = true;

taoensso.tufte.impl.IdStats.cljs$lang$ctorPrSeq = (function (this__37651__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.tufte.impl/IdStats");
});

taoensso.tufte.impl.IdStats.cljs$lang$ctorPrWriter = (function (this__37651__auto__,writer__37652__auto__){
return cljs.core._write.call(null,writer__37652__auto__,"taoensso.tufte.impl/IdStats");
});

taoensso.tufte.impl.__GT_IdStats = (function taoensso$tufte$impl$__GT_IdStats(count,time,mean,mad_sum,mad,min,max){
return (new taoensso.tufte.impl.IdStats(count,time,mean,mad_sum,mad,min,max,null,null,null));
});

taoensso.tufte.impl.map__GT_IdStats = (function taoensso$tufte$impl$map__GT_IdStats(G__46519){
return (new taoensso.tufte.impl.IdStats(new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(G__46519),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(G__46519),new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__46519),new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937).cljs$core$IFn$_invoke$arity$1(G__46519),new cljs.core.Keyword(null,"mad","mad",-1963165801).cljs$core$IFn$_invoke$arity$1(G__46519),new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(G__46519),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(G__46519),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__46519,new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"max","max",61366548))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.tufte.impl.Stats = (function (clock,id_stats_map,__meta,__extmap,__hash){
this.clock = clock;
this.id_stats_map = id_stats_map;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.tufte.impl.Stats.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__37613__auto__,k__37614__auto__){
var self__ = this;
var this__37613__auto____$1 = this;
return this__37613__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__37614__auto__,null);
});

taoensso.tufte.impl.Stats.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__37615__auto__,k46526,else__37616__auto__){
var self__ = this;
var this__37615__auto____$1 = this;
var G__46530 = k46526;
var G__46530__$1 = (((G__46530 instanceof cljs.core.Keyword))?G__46530.fqn:null);
switch (G__46530__$1) {
case "clock":
return self__.clock;

break;
case "id-stats-map":
return self__.id_stats_map;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k46526,else__37616__auto__);

}
});

taoensso.tufte.impl.Stats.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__37627__auto__,writer__37628__auto__,opts__37629__auto__){
var self__ = this;
var this__37627__auto____$1 = this;
var pr_pair__37630__auto__ = ((function (this__37627__auto____$1){
return (function (keyval__37631__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__37628__auto__,cljs.core.pr_writer,""," ","",opts__37629__auto__,keyval__37631__auto__);
});})(this__37627__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__37628__auto__,pr_pair__37630__auto__,"#taoensso.tufte.impl.Stats{",", ","}",opts__37629__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clock","clock",-894301127),self__.clock],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id-stats-map","id-stats-map",-470919118),self__.id_stats_map],null))], null),self__.__extmap));
});

taoensso.tufte.impl.Stats.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46525){
var self__ = this;
var G__46525__$1 = this;
return (new cljs.core.RecordIter((0),G__46525__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"id-stats-map","id-stats-map",-470919118)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

taoensso.tufte.impl.Stats.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__37611__auto__){
var self__ = this;
var this__37611__auto____$1 = this;
return self__.__meta;
});

taoensso.tufte.impl.Stats.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__37608__auto__){
var self__ = this;
var this__37608__auto____$1 = this;
return (new taoensso.tufte.impl.Stats(self__.clock,self__.id_stats_map,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.tufte.impl.Stats.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__37617__auto__){
var self__ = this;
var this__37617__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.tufte.impl.Stats.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__37609__auto__){
var self__ = this;
var this__37609__auto____$1 = this;
var h__37381__auto__ = self__.__hash;
if(!((h__37381__auto__ == null))){
return h__37381__auto__;
} else {
var h__37381__auto____$1 = ((function (h__37381__auto__,this__37609__auto____$1){
return (function (coll__37610__auto__){
return (-1109701291 ^ cljs.core.hash_unordered_coll.call(null,coll__37610__auto__));
});})(h__37381__auto__,this__37609__auto____$1))
.call(null,this__37609__auto____$1);
self__.__hash = h__37381__auto____$1;

return h__37381__auto____$1;
}
});

taoensso.tufte.impl.Stats.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46527,other46528){
var self__ = this;
var this46527__$1 = this;
return (!((other46528 == null))) && ((this46527__$1.constructor === other46528.constructor)) && (cljs.core._EQ_.call(null,this46527__$1.clock,other46528.clock)) && (cljs.core._EQ_.call(null,this46527__$1.id_stats_map,other46528.id_stats_map)) && (cljs.core._EQ_.call(null,this46527__$1.__extmap,other46528.__extmap));
});

taoensso.tufte.impl.Stats.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__37622__auto__,k__37623__auto__){
var self__ = this;
var this__37622__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id-stats-map","id-stats-map",-470919118),null,new cljs.core.Keyword(null,"clock","clock",-894301127),null], null), null),k__37623__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37622__auto____$1),self__.__meta),k__37623__auto__);
} else {
return (new taoensso.tufte.impl.Stats(self__.clock,self__.id_stats_map,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__37623__auto__)),null));
}
});

taoensso.tufte.impl.Stats.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__37620__auto__,k__37621__auto__,G__46525){
var self__ = this;
var this__37620__auto____$1 = this;
var pred__46531 = cljs.core.keyword_identical_QMARK_;
var expr__46532 = k__37621__auto__;
if(cljs.core.truth_(pred__46531.call(null,new cljs.core.Keyword(null,"clock","clock",-894301127),expr__46532))){
return (new taoensso.tufte.impl.Stats(G__46525,self__.id_stats_map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__46531.call(null,new cljs.core.Keyword(null,"id-stats-map","id-stats-map",-470919118),expr__46532))){
return (new taoensso.tufte.impl.Stats(self__.clock,G__46525,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.tufte.impl.Stats(self__.clock,self__.id_stats_map,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__37621__auto__,G__46525),null));
}
}
});

taoensso.tufte.impl.Stats.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__37625__auto__){
var self__ = this;
var this__37625__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clock","clock",-894301127),self__.clock],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id-stats-map","id-stats-map",-470919118),self__.id_stats_map],null))], null),self__.__extmap));
});

taoensso.tufte.impl.Stats.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__37612__auto__,G__46525){
var self__ = this;
var this__37612__auto____$1 = this;
return (new taoensso.tufte.impl.Stats(self__.clock,self__.id_stats_map,G__46525,self__.__extmap,self__.__hash));
});

taoensso.tufte.impl.Stats.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__37618__auto__,entry__37619__auto__){
var self__ = this;
var this__37618__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__37619__auto__)){
return this__37618__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__37619__auto__,(0)),cljs.core._nth.call(null,entry__37619__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__37618__auto____$1,entry__37619__auto__);
}
});

taoensso.tufte.impl.Stats.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clock","clock",746230400,null),new cljs.core.Symbol(null,"id-stats-map","id-stats-map",1169612409,null)], null);
});

taoensso.tufte.impl.Stats.cljs$lang$type = true;

taoensso.tufte.impl.Stats.cljs$lang$ctorPrSeq = (function (this__37651__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.tufte.impl/Stats");
});

taoensso.tufte.impl.Stats.cljs$lang$ctorPrWriter = (function (this__37651__auto__,writer__37652__auto__){
return cljs.core._write.call(null,writer__37652__auto__,"taoensso.tufte.impl/Stats");
});

taoensso.tufte.impl.__GT_Stats = (function taoensso$tufte$impl$__GT_Stats(clock,id_stats_map){
return (new taoensso.tufte.impl.Stats(clock,id_stats_map,null,null,null));
});

taoensso.tufte.impl.map__GT_Stats = (function taoensso$tufte$impl$map__GT_Stats(G__46529){
return (new taoensso.tufte.impl.Stats(new cljs.core.Keyword(null,"clock","clock",-894301127).cljs$core$IFn$_invoke$arity$1(G__46529),new cljs.core.Keyword(null,"id-stats-map","id-stats-map",-470919118).cljs$core$IFn$_invoke$arity$1(G__46529),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__46529,new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"id-stats-map","id-stats-map",-470919118))),null));
});

var ret__38250__auto___46535 = taoensso.tufte.impl.mutable_times = (function taoensso$tufte$impl$mutable_times(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.encore","if-cljs","taoensso.encore/if-cljs",449826172,null)),(function (){var x__37879__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})(),(function (){var x__37879__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"LinkedList.","LinkedList.",1768362422,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})())));
});
taoensso.tufte.impl.mutable_times.cljs$lang$macro = true;

var ret__38250__auto___46536 = taoensso.tufte.impl.mt_add = (function taoensso$tufte$impl$mt_add(_AMPERSAND_form,_AMPERSAND_env,x,t){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.encore","if-cljs","taoensso.encore/if-cljs",449826172,null)),(function (){var x__37879__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__37879__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})(),(function (){var x__37879__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})(),(function (){var x__37879__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".add",".add",874262363,null)),(function (){var x__37879__auto__ = cljs.core.with_meta.call(null,x,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"LinkedList","LinkedList",-77636189,null)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})(),(function (){var x__37879__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})())));
});
taoensso.tufte.impl.mt_add.cljs$lang$macro = true;

var ret__38250__auto___46537 = taoensso.tufte.impl.mt_count = (function taoensso$tufte$impl$mt_count(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.encore","if-cljs","taoensso.encore/if-cljs",449826172,null)),(function (){var x__37879__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","alength","cljs.core/alength",-1012804190,null)),(function (){var x__37879__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})(),(function (){var x__37879__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".size",".size",-1531811384,null)),(function (){var x__37879__auto__ = cljs.core.with_meta.call(null,x,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"LinkedList","LinkedList",-77636189,null)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})())));
});
taoensso.tufte.impl.mt_count.cljs$lang$macro = true;

/**
 * >n will trigger compaction
 */
taoensso.tufte.impl.nmax_times = cljs.core.long$.call(null,2000000.0);
var ret__38250__auto___46538 = taoensso.tufte.impl.atom_QMARK_ = (function taoensso$tufte$impl$atom_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.encore","if-cljs","taoensso.encore/if-cljs",449826172,null)),(function (){var x__37879__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs.core.Atom","cljs.core.Atom",-277403465,null)),(function (){var x__37879__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})(),(function (){var x__37879__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"clojure.lang.Atom","clojure.lang.Atom",661742144,null)),(function (){var x__37879__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})())));
});
taoensso.tufte.impl.atom_QMARK_.cljs$lang$macro = true;

taoensso.tufte.impl.capture_time_BANG_ = (function taoensso$tufte$impl$capture_time_BANG_(pdata_or_pdata_,id,t_elapsed){
if((pdata_or_pdata_ instanceof cljs.core.Atom)){
var pdata__46539 = pdata_or_pdata_;
var _QMARK_pulled_times_46540 = (function (){while(true){
var pdata = cljs.core.deref.call(null,pdata__46539);
var times = cljs.core.get.call(null,pdata,id,cljs.core.List.EMPTY);
if((cljs.core.count.call(null,times) >= taoensso.tufte.impl.nmax_times)){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,pdata__46539,pdata,cljs.core.assoc.call(null,pdata,id,cljs.core.conj.call(null,cljs.core.List.EMPTY,t_elapsed))))){
return times;
} else {
continue;
}
} else {
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,pdata__46539,pdata,cljs.core.assoc.call(null,pdata,id,cljs.core.conj.call(null,times,t_elapsed))))){
return null;
} else {
continue;
}
}
break;
}
})();
var temp__5459__auto___46541 = _QMARK_pulled_times_46540;
if(cljs.core.truth_(temp__5459__auto___46541)){
var times_46542 = temp__5459__auto___46541;
var id_stats_46543 = cljs.core.get_in.call(null,cljs.core.deref.call(null,pdata__46539),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__m-id-stats","__m-id-stats",253143905),id], null));
var id_stats_46544__$1 = taoensso.tufte.impl.times__GT_IdStats.call(null,times_46542,id_stats_46543);
cljs.core.swap_BANG_.call(null,pdata__46539,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__m-id-stats","__m-id-stats",253143905),id], null),id_stats_46544__$1);
} else {
}
} else {
var pdata_46545 = pdata_or_pdata_;
var pdata_46546__$1 = taoensso.tufte.impl.pdata_proxy.call(null);
var temp__5457__auto___46547 = cljs.core.get.call(null,pdata_46546__$1,id);
if(cljs.core.truth_(temp__5457__auto___46547)){
var times_46548 = temp__5457__auto___46547;
if((cljs.core.long$.call(null,times_46548.length) >= taoensso.tufte.impl.nmax_times)){
var m_id_stats_46549 = cljs.core.get.call(null,pdata_46546__$1,new cljs.core.Keyword(null,"__m-id-stats","__m-id-stats",253143905));
var id_stats_46550 = cljs.core.get.call(null,m_id_stats_46549,id);
var id_stats_46551__$1 = taoensso.tufte.impl.times__GT_IdStats.call(null,times_46548,id_stats_46550);
var m_id_stats_46552__$1 = cljs.core.assoc.call(null,m_id_stats_46549,id,id_stats_46551__$1);
var times_46553__$1 = [];
times_46553__$1.push(t_elapsed);

taoensso.tufte.impl.pdata_proxy.call(null,cljs.core.assoc.call(null,pdata_46546__$1,id,times_46553__$1,new cljs.core.Keyword(null,"__m-id-stats","__m-id-stats",253143905),m_id_stats_46552__$1));
} else {
times_46548.push(t_elapsed);
}
} else {
var times_46554 = [];
times_46554.push(t_elapsed);

taoensso.tufte.impl.pdata_proxy.call(null,cljs.core.assoc.call(null,pdata_46546__$1,id,times_46554));
}
}

return null;
});
taoensso.tufte.impl.times__GT_IdStats = (function taoensso$tufte$impl$times__GT_IdStats(times,_QMARK_interim_id_stats){
var times__$1 = cljs.core.vec.call(null,times);
var ts_count = cljs.core.count.call(null,times__$1);
var _ = ((!((ts_count === (0))))?null:(function(){throw (new Error("Assert failed: (not (zero? ts-count))"))})());
var ts_time = cljs.core.reduce.call(null,((function (times__$1,ts_count,_){
return (function (acc,in$){
return (acc + in$);
});})(times__$1,ts_count,_))
,(0),times__$1);
var ts_mean = (ts_time / ts_count);
var ts_mad_sum = cljs.core.reduce.call(null,((function (times__$1,ts_count,_,ts_time,ts_mean){
return (function (acc,in$){
return (acc + Math.abs((in$ - ts_mean)));
});})(times__$1,ts_count,_,ts_time,ts_mean))
,(0),times__$1);
var ts_min = cljs.core.reduce.call(null,((function (times__$1,ts_count,_,ts_time,ts_mean,ts_mad_sum){
return (function (acc,in$){
if((in$ < acc)){
return in$;
} else {
return acc;
}
});})(times__$1,ts_count,_,ts_time,ts_mean,ts_mad_sum))
,(9007199254740991),times__$1);
var ts_max = cljs.core.reduce.call(null,((function (times__$1,ts_count,_,ts_time,ts_mean,ts_mad_sum,ts_min){
return (function (acc,in$){
if((in$ > acc)){
return in$;
} else {
return acc;
}
});})(times__$1,ts_count,_,ts_time,ts_mean,ts_mad_sum,ts_min))
,(0),times__$1);
var temp__5457__auto__ = _QMARK_interim_id_stats;
if(cljs.core.truth_(temp__5457__auto__)){
var id_stats = temp__5457__auto__;
var s_count = (id_stats.count + ts_count);
var s_time = (id_stats.time + ts_time);
var s_mean = (s_time / s_count);
var s_mad_sum = (id_stats.mad_sum() + ts_mad_sum);
var s0_min = id_stats.min;
var s0_max = id_stats.max;
return (new taoensso.tufte.impl.IdStats(s_count,s_time,s_mean,s_mad_sum,(s_mad_sum / s_count),(((s0_min < ts_min))?s0_min:ts_min),(((s0_max > ts_max))?s0_max:ts_max),null,null,null));
} else {
return (new taoensso.tufte.impl.IdStats(ts_count,ts_time,ts_mean,ts_mad_sum,(ts_mad_sum / ts_count),ts_min,ts_max,null,null,null));
}
});
/**
 * Wraps up a pdata run. Nb: recall that we need a *fresh* `(pdata-proxy)`
 *   here for thread-local profiling.
 */
taoensso.tufte.impl.pdata__GT_Stats = (function taoensso$tufte$impl$pdata__GT_Stats(current_pdata){
var t1 = taoensso.encore.now_nano.call(null);
var t0 = current_pdata.__t0;
var m_id_stats = cljs.core.get.call(null,current_pdata,new cljs.core.Keyword(null,"__m-id-stats","__m-id-stats",253143905));
var m_times = cljs.core.dissoc.call(null,current_pdata,new cljs.core.Keyword(null,"__m-id-stats","__m-id-stats",253143905),new cljs.core.Keyword(null,"__t0","__t0",-1018840985));
return (new taoensso.tufte.impl.Stats((new taoensso.tufte.impl.Clock(t0,t1,(t1 - t0),null,null,null)),cljs.core.reduce_kv.call(null,((function (t1,t0,m_id_stats,m_times){
return (function (m,id,times){
return cljs.core.assoc.call(null,m,id,taoensso.tufte.impl.times__GT_IdStats.call(null,times,cljs.core.get.call(null,m_id_stats,id)));
});})(t1,t0,m_id_stats,m_times))
,cljs.core.PersistentArrayMap.EMPTY,m_times),null,null,null));
});
if(typeof taoensso.tufte.impl.handlers_ !== 'undefined'){
} else {
/**
 * {<hid> <handler-fn>}
 */
taoensso.tufte.impl.handlers_ = cljs.core.atom.call(null,null);
}
taoensso.tufte.impl.handle_blocking_BANG_ = (function taoensso$tufte$impl$handle_blocking_BANG_(m){
return taoensso.encore.run_kv_BANG_.call(null,(function (id,f){
try{return f.call(null,m);
}catch (e46555){if((e46555 instanceof Error)){
var e = e46555;
try{return cljs.core.println.call(null,["WARNING: Uncaught Tufte `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"` handler error\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));
}catch (e46556){if((e46556 instanceof Error)){
var _ = e46556;
return null;
} else {
throw e46556;

}
}} else {
throw e46555;

}
}}),cljs.core.deref.call(null,taoensso.tufte.impl.handlers_));
});
taoensso.tufte.impl.handle_BANG_ = (function taoensso$tufte$impl$handle_BANG_(m){
taoensso.tufte.impl.handle_blocking_BANG_.call(null,m);

return null;
});

//# sourceMappingURL=impl.js.map?rel=1517117184496
