// Compiled by ClojureScript 1.9.946 {}
goog.provide('com.keminglabs.statetron.core');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('taoensso.tufte');
com.keminglabs.statetron.core.error = (function com$keminglabs$statetron$core$error(msg){
return (new Error(msg));
});
com.keminglabs.statetron.core.schema = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("state","children","state/children",-1049694637),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null);
com.keminglabs.statetron.core.new_sc_db = datascript.core.db_with.call(null,datascript.core.db.call(null,datascript.core.create_conn.call(null,com.keminglabs.statetron.core.schema)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron.core","root","com.keminglabs.statetron.core/root",302968838)], null)], null));

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
com.keminglabs.statetron.core.StatechartImpl = (function (env,active_leaf_names,graph,state_name__GT_ancestors,__meta,__extmap,__hash){
this.env = env;
this.active_leaf_names = active_leaf_names;
this.graph = graph;
this.state_name__GT_ancestors = state_name__GT_ancestors;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.keminglabs.statetron.core.StatechartImpl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__37613__auto__,k__37614__auto__){
var self__ = this;
var this__37613__auto____$1 = this;
return this__37613__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__37614__auto__,null);
});

com.keminglabs.statetron.core.StatechartImpl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__37615__auto__,k47125,else__37616__auto__){
var self__ = this;
var this__37615__auto____$1 = this;
var G__47129 = k47125;
var G__47129__$1 = (((G__47129 instanceof cljs.core.Keyword))?G__47129.fqn:null);
switch (G__47129__$1) {
case "env":
return self__.env;

break;
case "active-leaf-names":
return self__.active_leaf_names;

break;
case "graph":
return self__.graph;

break;
case "state-name->ancestors":
return self__.state_name__GT_ancestors;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k47125,else__37616__auto__);

}
});

com.keminglabs.statetron.core.StatechartImpl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__37627__auto__,writer__37628__auto__,opts__37629__auto__){
var self__ = this;
var this__37627__auto____$1 = this;
var pr_pair__37630__auto__ = ((function (this__37627__auto____$1){
return (function (keyval__37631__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__37628__auto__,cljs.core.pr_writer,""," ","",opts__37629__auto__,keyval__37631__auto__);
});})(this__37627__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__37628__auto__,pr_pair__37630__auto__,"#com.keminglabs.statetron.core.StatechartImpl{",", ","}",opts__37629__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",-1815813235),self__.env],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-leaf-names","active-leaf-names",1435653501),self__.active_leaf_names],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"graph","graph",1558099509),self__.graph],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state-name->ancestors","state-name->ancestors",1860152602),self__.state_name__GT_ancestors],null))], null),self__.__extmap));
});

com.keminglabs.statetron.core.StatechartImpl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47124){
var self__ = this;
var G__47124__$1 = this;
return (new cljs.core.RecordIter((0),G__47124__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"active-leaf-names","active-leaf-names",1435653501),new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"state-name->ancestors","state-name->ancestors",1860152602)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

com.keminglabs.statetron.core.StatechartImpl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__37611__auto__){
var self__ = this;
var this__37611__auto____$1 = this;
return self__.__meta;
});

com.keminglabs.statetron.core.StatechartImpl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__37608__auto__){
var self__ = this;
var this__37608__auto____$1 = this;
return (new com.keminglabs.statetron.core.StatechartImpl(self__.env,self__.active_leaf_names,self__.graph,self__.state_name__GT_ancestors,self__.__meta,self__.__extmap,self__.__hash));
});

com.keminglabs.statetron.core.StatechartImpl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__37617__auto__){
var self__ = this;
var this__37617__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

com.keminglabs.statetron.core.StatechartImpl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__37609__auto__){
var self__ = this;
var this__37609__auto____$1 = this;
var h__37381__auto__ = self__.__hash;
if(!((h__37381__auto__ == null))){
return h__37381__auto__;
} else {
var h__37381__auto____$1 = ((function (h__37381__auto__,this__37609__auto____$1){
return (function (coll__37610__auto__){
return (611307249 ^ cljs.core.hash_unordered_coll.call(null,coll__37610__auto__));
});})(h__37381__auto__,this__37609__auto____$1))
.call(null,this__37609__auto____$1);
self__.__hash = h__37381__auto____$1;

return h__37381__auto____$1;
}
});

com.keminglabs.statetron.core.StatechartImpl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47126,other47127){
var self__ = this;
var this47126__$1 = this;
return (!((other47127 == null))) && ((this47126__$1.constructor === other47127.constructor)) && (cljs.core._EQ_.call(null,this47126__$1.env,other47127.env)) && (cljs.core._EQ_.call(null,this47126__$1.active_leaf_names,other47127.active_leaf_names)) && (cljs.core._EQ_.call(null,this47126__$1.graph,other47127.graph)) && (cljs.core._EQ_.call(null,this47126__$1.state_name__GT_ancestors,other47127.state_name__GT_ancestors)) && (cljs.core._EQ_.call(null,this47126__$1.__extmap,other47127.__extmap));
});

com.keminglabs.statetron.core.StatechartImpl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__37622__auto__,k__37623__auto__){
var self__ = this;
var this__37622__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"env","env",-1815813235),null,new cljs.core.Keyword(null,"graph","graph",1558099509),null,new cljs.core.Keyword(null,"state-name->ancestors","state-name->ancestors",1860152602),null,new cljs.core.Keyword(null,"active-leaf-names","active-leaf-names",1435653501),null], null), null),k__37623__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37622__auto____$1),self__.__meta),k__37623__auto__);
} else {
return (new com.keminglabs.statetron.core.StatechartImpl(self__.env,self__.active_leaf_names,self__.graph,self__.state_name__GT_ancestors,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__37623__auto__)),null));
}
});

com.keminglabs.statetron.core.StatechartImpl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__37620__auto__,k__37621__auto__,G__47124){
var self__ = this;
var this__37620__auto____$1 = this;
var pred__47130 = cljs.core.keyword_identical_QMARK_;
var expr__47131 = k__37621__auto__;
if(cljs.core.truth_(pred__47130.call(null,new cljs.core.Keyword(null,"env","env",-1815813235),expr__47131))){
return (new com.keminglabs.statetron.core.StatechartImpl(G__47124,self__.active_leaf_names,self__.graph,self__.state_name__GT_ancestors,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47130.call(null,new cljs.core.Keyword(null,"active-leaf-names","active-leaf-names",1435653501),expr__47131))){
return (new com.keminglabs.statetron.core.StatechartImpl(self__.env,G__47124,self__.graph,self__.state_name__GT_ancestors,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47130.call(null,new cljs.core.Keyword(null,"graph","graph",1558099509),expr__47131))){
return (new com.keminglabs.statetron.core.StatechartImpl(self__.env,self__.active_leaf_names,G__47124,self__.state_name__GT_ancestors,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47130.call(null,new cljs.core.Keyword(null,"state-name->ancestors","state-name->ancestors",1860152602),expr__47131))){
return (new com.keminglabs.statetron.core.StatechartImpl(self__.env,self__.active_leaf_names,self__.graph,G__47124,self__.__meta,self__.__extmap,null));
} else {
return (new com.keminglabs.statetron.core.StatechartImpl(self__.env,self__.active_leaf_names,self__.graph,self__.state_name__GT_ancestors,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__37621__auto__,G__47124),null));
}
}
}
}
});

com.keminglabs.statetron.core.StatechartImpl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__37625__auto__){
var self__ = this;
var this__37625__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",-1815813235),self__.env],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-leaf-names","active-leaf-names",1435653501),self__.active_leaf_names],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"graph","graph",1558099509),self__.graph],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state-name->ancestors","state-name->ancestors",1860152602),self__.state_name__GT_ancestors],null))], null),self__.__extmap));
});

com.keminglabs.statetron.core.StatechartImpl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__37612__auto__,G__47124){
var self__ = this;
var this__37612__auto____$1 = this;
return (new com.keminglabs.statetron.core.StatechartImpl(self__.env,self__.active_leaf_names,self__.graph,self__.state_name__GT_ancestors,G__47124,self__.__extmap,self__.__hash));
});

com.keminglabs.statetron.core.StatechartImpl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__37618__auto__,entry__37619__auto__){
var self__ = this;
var this__37618__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__37619__auto__)){
return this__37618__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__37619__auto__,(0)),cljs.core._nth.call(null,entry__37619__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__37618__auto____$1,entry__37619__auto__);
}
});

com.keminglabs.statetron.core.StatechartImpl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"env","env",-175281708,null),new cljs.core.Symbol(null,"active-leaf-names","active-leaf-names",-1218782268,null),new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.Symbol(null,"state-name->ancestors","state-name->ancestors",-794283167,null)], null);
});

com.keminglabs.statetron.core.StatechartImpl.cljs$lang$type = true;

com.keminglabs.statetron.core.StatechartImpl.cljs$lang$ctorPrSeq = (function (this__37651__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.keminglabs.statetron.core/StatechartImpl");
});

com.keminglabs.statetron.core.StatechartImpl.cljs$lang$ctorPrWriter = (function (this__37651__auto__,writer__37652__auto__){
return cljs.core._write.call(null,writer__37652__auto__,"com.keminglabs.statetron.core/StatechartImpl");
});

com.keminglabs.statetron.core.__GT_StatechartImpl = (function com$keminglabs$statetron$core$__GT_StatechartImpl(env,active_leaf_names,graph,state_name__GT_ancestors){
return (new com.keminglabs.statetron.core.StatechartImpl(env,active_leaf_names,graph,state_name__GT_ancestors,null,null,null));
});

com.keminglabs.statetron.core.map__GT_StatechartImpl = (function com$keminglabs$statetron$core$map__GT_StatechartImpl(G__47128){
return (new com.keminglabs.statetron.core.StatechartImpl(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(G__47128),new cljs.core.Keyword(null,"active-leaf-names","active-leaf-names",1435653501).cljs$core$IFn$_invoke$arity$1(G__47128),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(G__47128),new cljs.core.Keyword(null,"state-name->ancestors","state-name->ancestors",1860152602).cljs$core$IFn$_invoke$arity$1(G__47128),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__47128,new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"active-leaf-names","active-leaf-names",1435653501),new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"state-name->ancestors","state-name->ancestors",1860152602))),null));
});

/**
 * A statechart's environment map
 */
com.keminglabs.statetron.core.env = (function com$keminglabs$statetron$core$env(sc){
return sc.env;
});
com.keminglabs.statetron.core.graph_states = (function com$keminglabs$statetron$core$graph_states(graph){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__47134_SHARP_){
return datascript.core.entity.call(null,graph,cljs.core.first.call(null,p1__47134_SHARP_));
}),datascript.core.q.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),graph)));
});
com.keminglabs.statetron.core.states = (function com$keminglabs$statetron$core$states(sc){
return com.keminglabs.statetron.core.graph_states.call(null,sc.graph);
});
com.keminglabs.statetron.core.transitions = (function com$keminglabs$statetron$core$transitions(sc){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__47135_SHARP_){
return datascript.core.entity.call(null,sc.graph,cljs.core.first.call(null,p1__47135_SHARP_));
}),datascript.core.q.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),sc.graph)));
});
com.keminglabs.statetron.core.parent = (function com$keminglabs$statetron$core$parent(state){
return cljs.core.first.call(null,new cljs.core.Keyword("state","_children","state/_children",1077935588).cljs$core$IFn$_invoke$arity$1(state));
});
com.keminglabs.statetron.core.s = (function com$keminglabs$statetron$core$s(sc,state_name){
var or__36925__auto__ = datascript.core.entity.call(null,sc.graph,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),state_name], null));
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
throw com.keminglabs.statetron.core.error.call(null,["No state with name ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(state_name)].join(''));
}
});
com.keminglabs.statetron.core.t = (function com$keminglabs$statetron$core$t(var_args){
var G__47137 = arguments.length;
switch (G__47137) {
case 3:
return com.keminglabs.statetron.core.t.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.keminglabs.statetron.core.t.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.keminglabs.statetron.core.t.cljs$core$IFn$_invoke$arity$3 = (function (sc,internal_transition_name,from_state_name){
var temp__5457__auto__ = cljs.core.ffirst.call(null,datascript.core.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?transition-name","?transition-name",-910363478,null),new cljs.core.Symbol(null,"?from-name","?from-name",1572855437,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Symbol(null,"?transition-name","?transition-name",-910363478,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.Symbol(null,"?from","?from",-1000809456,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?from","?from",-1000809456,null),new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Symbol(null,"?from-name","?from-name",1572855437,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"missing?","missing?",-1710383910,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("transition","to","transition/to",-1841376910))], null)], null)], null),sc.graph,internal_transition_name,from_state_name));
if(cljs.core.truth_(temp__5457__auto__)){
var tid = temp__5457__auto__;
return datascript.core.entity.call(null,sc.graph,tid);
} else {
throw com.keminglabs.statetron.core.error.call(null,["No internal transition with name ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(internal_transition_name)," from state ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from_state_name)].join(''));
}
});

com.keminglabs.statetron.core.t.cljs$core$IFn$_invoke$arity$4 = (function (sc,transition_name,from_state_name,to_state_name){
var temp__5457__auto__ = cljs.core.ffirst.call(null,datascript.core.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?transition-name","?transition-name",-910363478,null),new cljs.core.Symbol(null,"?from-name","?from-name",1572855437,null),new cljs.core.Symbol(null,"?to-name","?to-name",450417029,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Symbol(null,"?transition-name","?transition-name",-910363478,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.Symbol(null,"?from","?from",-1000809456,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.Symbol(null,"?to","?to",331665800,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?from","?from",-1000809456,null),new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Symbol(null,"?from-name","?from-name",1572855437,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?to","?to",331665800,null),new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Symbol(null,"?to-name","?to-name",450417029,null)], null)], null)], null),sc.graph,transition_name,from_state_name,to_state_name));
if(cljs.core.truth_(temp__5457__auto__)){
var tid = temp__5457__auto__;
return datascript.core.entity.call(null,sc.graph,tid);
} else {
throw com.keminglabs.statetron.core.error.call(null,["No transition with name ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(transition_name)," from state ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from_state_name)," to state ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(to_state_name)].join(''));
}
});

com.keminglabs.statetron.core.t.cljs$lang$maxFixedArity = 4;

/**
 * Seq of state (first) and its ancestors. Two-arity is faster.
 */
com.keminglabs.statetron.core.ancestors = (function com$keminglabs$statetron$core$ancestors(var_args){
var G__47140 = arguments.length;
switch (G__47140) {
case 1:
return com.keminglabs.statetron.core.ancestors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.keminglabs.statetron.core.ancestors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.keminglabs.statetron.core.ancestors.cljs$core$IFn$_invoke$arity$1 = (function (state){
if((state == null)){
return cljs.core.List.EMPTY;
} else {
var temp__5457__auto__ = com.keminglabs.statetron.core.parent.call(null,state);
if(cljs.core.truth_(temp__5457__auto__)){
var p = temp__5457__auto__;
return (new cljs.core.LazySeq(null,((function (p,temp__5457__auto__){
return (function (){
return cljs.core.cons.call(null,state,com.keminglabs.statetron.core.ancestors.call(null,p));
});})(p,temp__5457__auto__))
,null,null));
} else {
var x__37879__auto__ = state;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
}
}
});

com.keminglabs.statetron.core.ancestors.cljs$core$IFn$_invoke$arity$2 = (function (sc,state_name){
return cljs.core.get.call(null,sc.state_name__GT_ancestors,state_name);
});

com.keminglabs.statetron.core.ancestors.cljs$lang$maxFixedArity = 2;

/**
 * Seq of state (first) and its descendants.
 */
com.keminglabs.statetron.core.descendants = (function com$keminglabs$statetron$core$descendants(state){
if((state == null)){
return cljs.core.List.EMPTY;
} else {
var temp__5457__auto__ = new cljs.core.Keyword("state","children","state/children",-1049694637).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5457__auto__)){
var children = temp__5457__auto__;
return (new cljs.core.LazySeq(null,((function (children,temp__5457__auto__){
return (function (){
return cljs.core.cons.call(null,state,cljs.core.mapcat.call(null,com.keminglabs.statetron.core.descendants,children));
});})(children,temp__5457__auto__))
,null,null));
} else {
var x__37879__auto__ = state;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
}
}
});
com.keminglabs.statetron.core.active_QMARK_ = (function com$keminglabs$statetron$core$active_QMARK_(sc,state_name){
return cljs.core.boolean$.call(null,(function (){var or__36925__auto__ = cljs.core.contains_QMARK_.call(null,sc.active_leaf_names,state_name);
if(or__36925__auto__){
return or__36925__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,com.keminglabs.statetron.core.active_QMARK_,sc),cljs.core.map.call(null,new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("state","children","state/children",-1049694637).cljs$core$IFn$_invoke$arity$1(datascript.core.entity.call(null,sc.graph,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),state_name], null)))));
}
})());
});
com.keminglabs.statetron.core.active_leaves = (function com$keminglabs$statetron$core$active_leaves(sc){
var iter__37807__auto__ = (function com$keminglabs$statetron$core$active_leaves_$_iter__47142(s__47143){
return (new cljs.core.LazySeq(null,(function (){
var s__47143__$1 = s__47143;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__47143__$1);
if(temp__5459__auto__){
var s__47143__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47143__$2)){
var c__37805__auto__ = cljs.core.chunk_first.call(null,s__47143__$2);
var size__37806__auto__ = cljs.core.count.call(null,c__37805__auto__);
var b__47145 = cljs.core.chunk_buffer.call(null,size__37806__auto__);
if((function (){var i__47144 = (0);
while(true){
if((i__47144 < size__37806__auto__)){
var name = cljs.core._nth.call(null,c__37805__auto__,i__47144);
cljs.core.chunk_append.call(null,b__47145,datascript.core.entity.call(null,sc.graph,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),name], null)));

var G__47146 = (i__47144 + (1));
i__47144 = G__47146;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47145),com$keminglabs$statetron$core$active_leaves_$_iter__47142.call(null,cljs.core.chunk_rest.call(null,s__47143__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47145),null);
}
} else {
var name = cljs.core.first.call(null,s__47143__$2);
return cljs.core.cons.call(null,datascript.core.entity.call(null,sc.graph,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),name], null)),com$keminglabs$statetron$core$active_leaves_$_iter__47142.call(null,cljs.core.rest.call(null,s__47143__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__37807__auto__.call(null,sc.active_leaf_names);
});
com.keminglabs.statetron.core.active_states = (function com$keminglabs$statetron$core$active_states(sc){
return cljs.core.mapcat.call(null,cljs.core.partial.call(null,com.keminglabs.statetron.core.ancestors,sc),sc.active_leaf_names);
});
com.keminglabs.statetron.core.default_transition = (function com$keminglabs$statetron$core$default_transition(state){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__47147_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("com.keminglabs.statetron.core","default","com.keminglabs.statetron.core/default",1165075763),new cljs.core.Keyword("transition","name","transition/name",1429155220).cljs$core$IFn$_invoke$arity$1(p1__47147_SHARP_));
}),new cljs.core.Keyword("transition","_from","transition/_from",804784300).cljs$core$IFn$_invoke$arity$1(state)));
});
com.keminglabs.statetron.core.least_common_ancestor = (function com$keminglabs$statetron$core$least_common_ancestor(sc,state_names){
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core._EQ_,state_names))){
return cljs.core.second.call(null,com.keminglabs.statetron.core.ancestors.call(null,sc,cljs.core.first.call(null,state_names)));
} else {
var shared_ancestors = cljs.core.apply.call(null,clojure.set.intersection,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.partial.call(null,com.keminglabs.statetron.core.ancestors,sc)),state_names));
return cljs.core.first.call(null,cljs.core.sort_by.call(null,((function (shared_ancestors){
return (function (s){
return (- cljs.core.count.call(null,com.keminglabs.statetron.core.ancestors.call(null,sc,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(s))));
});})(shared_ancestors))
,shared_ancestors));
}
});
com.keminglabs.statetron.core.run_steps = (function com$keminglabs$statetron$core$run_steps(originating_opts,env,event,steps,checker){
return cljs.core.reduce.call(null,(function (env__$1,step){
var vec__47148 = step;
var step_type = cljs.core.nth.call(null,vec__47148,(0),null);
var x = cljs.core.nth.call(null,vec__47148,(1),null);
var env_SINGLEQUOTE_ = (function (){var G__47151 = step_type;
var G__47151__$1 = (((G__47151 instanceof cljs.core.Keyword))?G__47151.fqn:null);
switch (G__47151__$1) {
case "com.keminglabs.statetron.core/enter":
var temp__5457__auto__ = new cljs.core.Keyword("state","enter","state/enter",1934253951).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__5457__auto__)){
var enter = temp__5457__auto__;
var __pdata_or_pdata_ = (function (){var or__36925__auto__ = taoensso.tufte.impl._STAR_pdata__STAR_;
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
return taoensso.tufte.impl.pdata_proxy.call(null);
}
})();
if(cljs.core.truth_(__pdata_or_pdata_)){
var __t0 = taoensso.encore.now_nano.call(null);
var __result = enter.call(null,env__$1,event,originating_opts);
var __t1 = taoensso.encore.now_nano.call(null);
taoensso.tufte.impl.capture_time_BANG_.call(null,__pdata_or_pdata_,step,(__t1 - __t0));

return __result;
} else {
return enter.call(null,env__$1,event,originating_opts);
}
} else {
return env__$1;
}

break;
case "com.keminglabs.statetron.core/exit":
var temp__5457__auto__ = new cljs.core.Keyword("state","exit","state/exit",395251765).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__5457__auto__)){
var exit = temp__5457__auto__;
var __pdata_or_pdata_ = (function (){var or__36925__auto__ = taoensso.tufte.impl._STAR_pdata__STAR_;
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
return taoensso.tufte.impl.pdata_proxy.call(null);
}
})();
if(cljs.core.truth_(__pdata_or_pdata_)){
var __t0 = taoensso.encore.now_nano.call(null);
var __result = exit.call(null,env__$1,event,originating_opts);
var __t1 = taoensso.encore.now_nano.call(null);
taoensso.tufte.impl.capture_time_BANG_.call(null,__pdata_or_pdata_,step,(__t1 - __t0));

return __result;
} else {
return exit.call(null,env__$1,event,originating_opts);
}
} else {
return env__$1;
}

break;
case "com.keminglabs.statetron.core/transition":
var temp__5457__auto__ = new cljs.core.Keyword("transition","action","transition/action",903948445).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__5457__auto__)){
var action = temp__5457__auto__;
var __pdata_or_pdata_ = (function (){var or__36925__auto__ = taoensso.tufte.impl._STAR_pdata__STAR_;
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
return taoensso.tufte.impl.pdata_proxy.call(null);
}
})();
if(cljs.core.truth_(__pdata_or_pdata_)){
var __t0 = taoensso.encore.now_nano.call(null);
var __result = action.call(null,env__$1,event,originating_opts);
var __t1 = taoensso.encore.now_nano.call(null);
taoensso.tufte.impl.capture_time_BANG_.call(null,__pdata_or_pdata_,step,(__t1 - __t0));

return __result;
} else {
return action.call(null,env__$1,event,originating_opts);
}
} else {
return env__$1;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47151__$1)].join('')));

}
})();
if(cljs.core.truth_(checker)){
checker.call(null,env_SINGLEQUOTE_,step);
} else {
}

return env_SINGLEQUOTE_;
}),env,steps);
});
/**
 * Step statechart by `event`, returning {:steps, :sc}. Optionally provide `checker` to validate env after every intermediate step. Each step is a tagged vector of the form [::enter state] [::exit state] or [::transition t].
 */
com.keminglabs.statetron.core.step_with_intermediates = (function com$keminglabs$statetron$core$step_with_intermediates(var_args){
var G__47154 = arguments.length;
switch (G__47154) {
case 2:
return com.keminglabs.statetron.core.step_with_intermediates.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.keminglabs.statetron.core.step_with_intermediates.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.keminglabs.statetron.core.step_with_intermediates.cljs$core$IFn$_invoke$arity$2 = (function (sc,event){
return com.keminglabs.statetron.core.step_with_intermediates.call(null,sc,event,null);
});

com.keminglabs.statetron.core.step_with_intermediates.cljs$core$IFn$_invoke$arity$3 = (function (sc,event,checker){
var env = com.keminglabs.statetron.core.env.call(null,sc);
var transitions_with_originating_state_and_guard_result = ((cljs.core._EQ_.call(null,new cljs.core.Keyword("com.keminglabs.statetron.core","start","com.keminglabs.statetron.core/start",-1625675576),new cljs.core.Keyword("event","name","event/name",1621279447).cljs$core$IFn$_invoke$arity$1(event)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.keminglabs.statetron.core.default_transition.call(null,com.keminglabs.statetron.core.s.call(null,sc,new cljs.core.Keyword("com.keminglabs.statetron.core","root","com.keminglabs.statetron.core/root",302968838))),com.keminglabs.statetron.core.s.call(null,sc,new cljs.core.Keyword("com.keminglabs.statetron.core","root","com.keminglabs.statetron.core/root",302968838))], null)], null):cljs.core.keep.call(null,((function (env){
return (function (state_name){
var temp__5459__auto__ = cljs.core.first.call(null,cljs.core.keep.call(null,((function (env){
return (function (p__47155){
var map__47156 = p__47155;
var map__47156__$1 = ((((!((map__47156 == null)))?((((map__47156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47156.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47156):map__47156);
var t = map__47156__$1;
var name = cljs.core.get.call(null,map__47156__$1,new cljs.core.Keyword("transition","name","transition/name",1429155220));
var guard = cljs.core.get.call(null,map__47156__$1,new cljs.core.Keyword("transition","guard","transition/guard",-483310572));
var temp__5459__auto__ = (function (){var and__36913__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Keyword("event","name","event/name",1621279447).cljs$core$IFn$_invoke$arity$1(event));
if(and__36913__auto__){
if(cljs.core.truth_(guard)){
var __pdata_or_pdata_ = (function (){var or__36925__auto__ = taoensso.tufte.impl._STAR_pdata__STAR_;
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
return taoensso.tufte.impl.pdata_proxy.call(null);
}
})();
if(cljs.core.truth_(__pdata_or_pdata_)){
var __t0 = taoensso.encore.now_nano.call(null);
var __result = guard.call(null,env,event,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sc","sc",1148023032),sc], null));
var __t1 = taoensso.encore.now_nano.call(null);
taoensso.tufte.impl.capture_time_BANG_.call(null,__pdata_or_pdata_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.keminglabs.statetron.core","guard","com.keminglabs.statetron.core/guard",-1742734710),t], null),(__t1 - __t0));

return __result;
} else {
return guard.call(null,env,event,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sc","sc",1148023032),sc], null));
}
} else {
return true;
}
} else {
return and__36913__auto__;
}
})();
if(cljs.core.truth_(temp__5459__auto__)){
var guard_result = temp__5459__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,guard_result], null);
} else {
return null;
}
});})(env))
,cljs.core.mapcat.call(null,new cljs.core.Keyword("transition","_from","transition/_from",804784300),com.keminglabs.statetron.core.ancestors.call(null,sc,state_name))));
if(cljs.core.truth_(temp__5459__auto__)){
var vec__47158 = temp__5459__auto__;
var t = cljs.core.nth.call(null,vec__47158,(0),null);
var guard_result = cljs.core.nth.call(null,vec__47158,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,com.keminglabs.statetron.core.s.call(null,sc,state_name),guard_result], null);
} else {
return null;
}
});})(env))
,sc.active_leaf_names));
var env__$1 = env;
var steps = cljs.core.PersistentVector.EMPTY;
var G__47167 = transitions_with_originating_state_and_guard_result;
var vec__47168 = G__47167;
var seq__47169 = cljs.core.seq.call(null,vec__47168);
var first__47170 = cljs.core.first.call(null,seq__47169);
var seq__47169__$1 = cljs.core.next.call(null,seq__47169);
var vec__47171 = first__47170;
var t = cljs.core.nth.call(null,vec__47171,(0),null);
var current_state = cljs.core.nth.call(null,vec__47171,(1),null);
var guard_result = cljs.core.nth.call(null,vec__47171,(2),null);
var ts = seq__47169__$1;
var env__$2 = env__$1;
var steps__$1 = steps;
var G__47167__$1 = G__47167;
while(true){
var env__$3 = env__$2;
var steps__$2 = steps__$1;
var vec__47174 = G__47167__$1;
var seq__47175 = cljs.core.seq.call(null,vec__47174);
var first__47176 = cljs.core.first.call(null,seq__47175);
var seq__47175__$1 = cljs.core.next.call(null,seq__47175);
var vec__47177 = first__47176;
var t__$1 = cljs.core.nth.call(null,vec__47177,(0),null);
var current_state__$1 = cljs.core.nth.call(null,vec__47177,(1),null);
var guard_result__$1 = cljs.core.nth.call(null,vec__47177,(2),null);
var ts__$1 = seq__47175__$1;
if((t__$1 == null)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sc","sc",1148023032),cljs.core.assoc.call(null,sc,new cljs.core.Keyword(null,"env","env",-1815813235),env__$3,new cljs.core.Keyword(null,"active-leaf-names","active-leaf-names",1435653501),cljs.core.reduce.call(null,((function (env__$2,steps__$1,G__47167__$1,env__$3,steps__$2,vec__47174,seq__47175,first__47176,seq__47175__$1,vec__47177,t__$1,current_state__$1,guard_result__$1,ts__$1,env__$1,steps,G__47167,vec__47168,seq__47169,first__47170,seq__47169__$1,vec__47171,t,current_state,guard_result,ts,env,transitions_with_originating_state_and_guard_result){
return (function (names,p__47180){
var vec__47181 = p__47180;
var step_type = cljs.core.nth.call(null,vec__47181,(0),null);
var state = cljs.core.nth.call(null,vec__47181,(1),null);
var x__713__auto__ = names;
if(cljs.core.truth_(new cljs.core.Keyword("state","children","state/children",-1049694637).cljs$core$IFn$_invoke$arity$1(state))){
return x__713__auto__;
} else {
var G__47184 = x__713__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("com.keminglabs.statetron.core","enter","com.keminglabs.statetron.core/enter",-1760788539),step_type)){
return cljs.core.conj.call(null,G__47184,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(state));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("com.keminglabs.statetron.core","exit","com.keminglabs.statetron.core/exit",-389091605),step_type)){
return cljs.core.disj.call(null,G__47184,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(state));
} else {
return G__47184;

}
}
}
});})(env__$2,steps__$1,G__47167__$1,env__$3,steps__$2,vec__47174,seq__47175,first__47176,seq__47175__$1,vec__47177,t__$1,current_state__$1,guard_result__$1,ts__$1,env__$1,steps,G__47167,vec__47168,seq__47169,first__47170,seq__47169__$1,vec__47171,t,current_state,guard_result,ts,env,transitions_with_originating_state_and_guard_result))
,new cljs.core.Keyword(null,"active-leaf-names","active-leaf-names",1435653501).cljs$core$IFn$_invoke$arity$1(sc),steps__$2)),new cljs.core.Keyword(null,"steps","steps",-128433302),steps__$2], null);
} else {
var map__47185 = t__$1;
var map__47185__$1 = ((((!((map__47185 == null)))?((((map__47185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47185.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47185):map__47185);
var from = cljs.core.get.call(null,map__47185__$1,new cljs.core.Keyword("transition","from","transition/from",158767609));
var to = cljs.core.get.call(null,map__47185__$1,new cljs.core.Keyword("transition","to","transition/to",-1841376910));
var originating_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sc","sc",1148023032),sc,new cljs.core.Keyword(null,"guard-result","guard-result",1366900543),guard_result__$1], null);
if((to == null)){
var new_steps = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.keminglabs.statetron.core","transition","com.keminglabs.statetron.core/transition",-245509974),t__$1], null)], null);
var G__47189 = com.keminglabs.statetron.core.run_steps.call(null,originating_opts,env__$3,event,new_steps,checker);
var G__47190 = cljs.core.into.call(null,steps__$2,new_steps);
var G__47191 = ts__$1;
env__$2 = G__47189;
steps__$1 = G__47190;
G__47167__$1 = G__47191;
continue;
} else {
var lca = com.keminglabs.statetron.core.least_common_ancestor.call(null,sc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(from),new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(to)], null));
var new_steps = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.keminglabs.statetron.core","transition","com.keminglabs.statetron.core/transition",-245509974),t__$1], null)], null),cljs.core.map.call(null,((function (env__$2,steps__$1,G__47167__$1,lca,map__47185,map__47185__$1,from,to,originating_opts,env__$3,steps__$2,vec__47174,seq__47175,first__47176,seq__47175__$1,vec__47177,t__$1,current_state__$1,guard_result__$1,ts__$1,env__$1,steps,G__47167,vec__47168,seq__47169,first__47170,seq__47169__$1,vec__47171,t,current_state,guard_result,ts,env,transitions_with_originating_state_and_guard_result){
return (function (s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.keminglabs.statetron.core","exit","com.keminglabs.statetron.core/exit",-389091605),s], null);
});})(env__$2,steps__$1,G__47167__$1,lca,map__47185,map__47185__$1,from,to,originating_opts,env__$3,steps__$2,vec__47174,seq__47175,first__47176,seq__47175__$1,vec__47177,t__$1,current_state__$1,guard_result__$1,ts__$1,env__$1,steps,G__47167,vec__47168,seq__47169,first__47170,seq__47169__$1,vec__47171,t,current_state,guard_result,ts,env,transitions_with_originating_state_and_guard_result))
,cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,lca),com.keminglabs.statetron.core.ancestors.call(null,sc,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(current_state__$1)))),cljs.core.map.call(null,((function (env__$2,steps__$1,G__47167__$1,lca,map__47185,map__47185__$1,from,to,originating_opts,env__$3,steps__$2,vec__47174,seq__47175,first__47176,seq__47175__$1,vec__47177,t__$1,current_state__$1,guard_result__$1,ts__$1,env__$1,steps,G__47167,vec__47168,seq__47169,first__47170,seq__47169__$1,vec__47171,t,current_state,guard_result,ts,env,transitions_with_originating_state_and_guard_result){
return (function (s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.keminglabs.statetron.core","enter","com.keminglabs.statetron.core/enter",-1760788539),s], null);
});})(env__$2,steps__$1,G__47167__$1,lca,map__47185,map__47185__$1,from,to,originating_opts,env__$3,steps__$2,vec__47174,seq__47175,first__47176,seq__47175__$1,vec__47177,t__$1,current_state__$1,guard_result__$1,ts__$1,env__$1,steps,G__47167,vec__47168,seq__47169,first__47170,seq__47169__$1,vec__47171,t,current_state,guard_result,ts,env,transitions_with_originating_state_and_guard_result))
,cljs.core.reverse.call(null,cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,lca),com.keminglabs.statetron.core.ancestors.call(null,sc,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(to))))));
var new_env = com.keminglabs.statetron.core.run_steps.call(null,originating_opts,env__$3,event,new_steps,checker);
var G__47192 = new_env;
var G__47193 = cljs.core.into.call(null,steps__$2,new_steps);
var G__47194 = (function (){var G__47187 = ts__$1;
if(cljs.core.truth_(new cljs.core.Keyword("state","children","state/children",-1049694637).cljs$core$IFn$_invoke$arity$1(to))){
return cljs.core.conj.call(null,G__47187,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.keminglabs.statetron.core.default_transition.call(null,to),to], null));
} else {
if(cljs.core.truth_(new cljs.core.Keyword("choice","fn","choice/fn",1187855813).cljs$core$IFn$_invoke$arity$1(to))){
var choice = to;
var to_state_name = new cljs.core.Keyword("choice","fn","choice/fn",1187855813).cljs$core$IFn$_invoke$arity$1(choice).call(null,new_env,event,originating_opts);
var t_out = datascript.core.entity.call(null,sc.graph,cljs.core.ffirst.call(null,datascript.core.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-out","?t-out",1613711049,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?choice","?choice",444776389,null),new cljs.core.Symbol(null,"?to-state-name","?to-state-name",-1245060174,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-out","?t-out",1613711049,null),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.Symbol(null,"?choice","?choice",444776389,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-out","?t-out",1613711049,null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.Symbol(null,"?to","?to",331665800,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?to","?to",331665800,null),new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Symbol(null,"?to-state-name","?to-state-name",-1245060174,null)], null)], null)], null),sc.graph,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(choice),to_state_name)));
var x__758__auto__ = G__47187;
return cljs.core.conj.call(null,x__758__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_out,choice], null));
} else {
return G__47187;

}
}
})();
env__$2 = G__47192;
steps__$1 = G__47193;
G__47167__$1 = G__47194;
continue;

}
}
break;
}
});

com.keminglabs.statetron.core.step_with_intermediates.cljs$lang$maxFixedArity = 3;

/**
 * Transitions statechart according to provided `event`, returning new statechart. Runs actions.
 */
com.keminglabs.statetron.core.step = (function com$keminglabs$statetron$core$step(var_args){
var G__47196 = arguments.length;
switch (G__47196) {
case 2:
return com.keminglabs.statetron.core.step.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.keminglabs.statetron.core.step.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.keminglabs.statetron.core.step.cljs$core$IFn$_invoke$arity$2 = (function (sc,event){
return com.keminglabs.statetron.core.step.call(null,sc,event,null);
});

com.keminglabs.statetron.core.step.cljs$core$IFn$_invoke$arity$3 = (function (sc,event,checker){
return new cljs.core.Keyword(null,"sc","sc",1148023032).cljs$core$IFn$_invoke$arity$1(com.keminglabs.statetron.core.step_with_intermediates.call(null,sc,event,checker));
});

com.keminglabs.statetron.core.step.cljs$lang$maxFixedArity = 3;

com.keminglabs.statetron.core.start = (function com$keminglabs$statetron$core$start(sc){
return com.keminglabs.statetron.core.step.call(null,sc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.keminglabs.statetron.core","start","com.keminglabs.statetron.core/start",-1625675576)], null));
});
com.keminglabs.statetron.core.expand_default_transitions = (function com$keminglabs$statetron$core$expand_default_transitions(graph){
return datascript.core.db_with.call(null,graph,cljs.core.mapcat.call(null,(function (s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",937402164),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword("state","start?","state/start?",1533694543)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.keminglabs.statetron.core","default","com.keminglabs.statetron.core/default",1165075763),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(com.keminglabs.statetron.core.parent.call(null,s)),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(s)], null)], null);
}),cljs.core.filter.call(null,new cljs.core.Keyword("state","start?","state/start?",1533694543),com.keminglabs.statetron.core.graph_states.call(null,graph))));
});
com.keminglabs.statetron.core.add_root_children = (function com$keminglabs$statetron$core$add_root_children(graph){
var toplevel_states = cljs.core.remove.call(null,(function (p1__47198_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("com.keminglabs.statetron.core","root","com.keminglabs.statetron.core/root",302968838),new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(p1__47198_SHARP_));
}),cljs.core.remove.call(null,new cljs.core.Keyword("state","_children","state/_children",1077935588),com.keminglabs.statetron.core.graph_states.call(null,graph)));
return datascript.core.db_with.call(null,graph,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron.core","root","com.keminglabs.statetron.core/root",302968838),new cljs.core.Keyword("state","children","state/children",-1049694637),cljs.core.map.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098),toplevel_states)], null)], null));
});
com.keminglabs.statetron.core.explain_bad_default_transition = (function com$keminglabs$statetron$core$explain_bad_default_transition(graph){
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p){
var default_transitions = cljs.core.filter.call(null,(function (p1__47199_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("com.keminglabs.statetron.core","default","com.keminglabs.statetron.core/default",1165075763),new cljs.core.Keyword("transition","name","transition/name",1429155220).cljs$core$IFn$_invoke$arity$1(p1__47199_SHARP_));
}),new cljs.core.Keyword("transition","_from","transition/_from",804784300).cljs$core$IFn$_invoke$arity$1(p));
var or__36925__auto__ = (function (){var and__36913__auto__ = ((1) < cljs.core.count.call(null,default_transitions));
if(and__36913__auto__){
return ["Multiple default transitions for parent ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(p))].join('');
} else {
return and__36913__auto__;
}
})();
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword("transition","_to","transition/_to",2112590802).cljs$core$IFn$_invoke$arity$1(p))){
return null;
} else {
var or__36925__auto____$1 = (function (){var and__36913__auto__ = cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,default_transitions));
if(and__36913__auto__){
return ["No default transition for parent ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(p)),", even though it's possible to transition to this parent"].join('');
} else {
return and__36913__auto__;
}
})();
if(cljs.core.truth_(or__36925__auto____$1)){
return or__36925__auto____$1;
} else {
var and__36913__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,com.keminglabs.statetron.core.descendants.call(null,p)),new cljs.core.Keyword("transition","to","transition/to",-1841376910).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,default_transitions))));
if(and__36913__auto__){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(p))," cannot have a default transition to a state that doesn't descend from it."].join('');
} else {
return and__36913__auto__;
}
}
}
}
}),cljs.core.filter.call(null,new cljs.core.Keyword("state","children","state/children",-1049694637),com.keminglabs.statetron.core.graph_states.call(null,graph)))));
});
com.keminglabs.statetron.core.explain_root_must_have_default_transition = (function com$keminglabs$statetron$core$explain_root_must_have_default_transition(graph){
if((com.keminglabs.statetron.core.default_transition.call(null,datascript.core.entity.call(null,graph,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state","name","state/name",1600033984),new cljs.core.Keyword("com.keminglabs.statetron.core","root","com.keminglabs.statetron.core/root",302968838)], null))) == null)){
return "Implicit root state has no default transition --- maybe you forgot to create one or to mark a toplevel state as `:state/start? true`";
} else {
return null;
}
});
com.keminglabs.statetron.core.explain_duplicate_transitions = (function com$keminglabs$statetron$core$explain_duplicate_transitions(graph){
var temp__5459__auto__ = cljs.core.ffirst.call(null,datascript.core.q.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?name","?name",2050703390,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t1","?t1",883626516,null),new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Symbol(null,"?name","?name",2050703390,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t2","?t2",-175739783,null),new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Symbol(null,"?name","?name",2050703390,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"?t1","?t1",883626516,null),new cljs.core.Symbol(null,"?t2","?t2",-175739783,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t1","?t1",883626516,null),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.Symbol(null,"?from","?from",-1000809456,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t2","?t2",-175739783,null),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.Symbol(null,"?from","?from",-1000809456,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?t1","?t1",883626516,null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.Keyword("com.keminglabs.statetron.core","internal","com.keminglabs.statetron.core/internal",-111833358)),new cljs.core.Symbol(null,"?to","?to",331665800,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?t2","?t2",-175739783,null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.Keyword("com.keminglabs.statetron.core","internal","com.keminglabs.statetron.core/internal",-111833358)),new cljs.core.Symbol(null,"?to","?to",331665800,null)], null)], null)], null),graph));
if(cljs.core.truth_(temp__5459__auto__)){
var name = temp__5459__auto__;
return ["Duplicate transition '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join('');
} else {
return null;
}
});
com.keminglabs.statetron.core.statechart = (function com$keminglabs$statetron$core$statechart(tx){
var graph = (function (){var G__47200 = com.keminglabs.statetron.core.expand_default_transitions.call(null,com.keminglabs.statetron.core.add_root_children.call(null,datascript.core.db_with.call(null,com.keminglabs.statetron.core.new_sc_db,tx)));
var x__779__auto___47201 = G__47200;
var graph_47202 = x__779__auto___47201;

var temp__5459__auto___47203 = (function (){var or__36925__auto__ = com.keminglabs.statetron.core.explain_root_must_have_default_transition.call(null,graph_47202);
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
var or__36925__auto____$1 = com.keminglabs.statetron.core.explain_bad_default_transition.call(null,graph_47202);
if(cljs.core.truth_(or__36925__auto____$1)){
return or__36925__auto____$1;
} else {
return com.keminglabs.statetron.core.explain_duplicate_transitions.call(null,graph_47202);
}
}
})();
if(cljs.core.truth_(temp__5459__auto___47203)){
var msg_47204 = temp__5459__auto___47203;
throw com.keminglabs.statetron.core.error.call(null,msg_47204);
} else {
}

return G__47200;
})();
return (new com.keminglabs.statetron.core.StatechartImpl(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY,graph,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (graph){
return (function (m,s){
return cljs.core.assoc_BANG_.call(null,m,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(s),cljs.core.vec.call(null,com.keminglabs.statetron.core.ancestors.call(null,s)));
});})(graph))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),com.keminglabs.statetron.core.graph_states.call(null,graph))),null,null,null));
});
com.keminglabs.statetron.core.default_state_QMARK_ = (function com$keminglabs$statetron$core$default_state_QMARK_(s){
return !(cljs.core.empty_QMARK_.call(null,datascript.core.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Keyword("state","children","state/children",-1049694637),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("transition","from","transition/from",158767609),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("transition","to","transition/to",-1841376910),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("transition","name","transition/name",1429155220),new cljs.core.Keyword("com.keminglabs.statetron.core","default","com.keminglabs.statetron.core/default",1165075763)], null)], null)], null),datascript.core.entity_db.call(null,s),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(s))));
});
com.keminglabs.statetron.core.pseudostate_QMARK_ = (function com$keminglabs$statetron$core$pseudostate_QMARK_(s){
return cljs.core.contains_QMARK_.call(null,s,new cljs.core.Keyword("choice","fn","choice/fn",1187855813));
});
/**
 * A default transition from a parent to one of its children
 */
com.keminglabs.statetron.core.regular_default_transition_QMARK_ = (function com$keminglabs$statetron$core$regular_default_transition_QMARK_(t){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword("com.keminglabs.statetron.core","default","com.keminglabs.statetron.core/default",1165075763),new cljs.core.Keyword("transition","name","transition/name",1429155220).cljs$core$IFn$_invoke$arity$1(t))) && (cljs.core._EQ_.call(null,com.keminglabs.statetron.core.parent.call(null,new cljs.core.Keyword("transition","to","transition/to",-1841376910).cljs$core$IFn$_invoke$arity$1(t)),new cljs.core.Keyword("transition","from","transition/from",158767609).cljs$core$IFn$_invoke$arity$1(t)));
});
com.keminglabs.statetron.core.internal_transition_QMARK_ = (function com$keminglabs$statetron$core$internal_transition_QMARK_(t){
var and__36913__auto__ = new cljs.core.Keyword("transition","from","transition/from",158767609).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(and__36913__auto__)){
return (new cljs.core.Keyword("transition","to","transition/to",-1841376910).cljs$core$IFn$_invoke$arity$1(t) == null);
} else {
return and__36913__auto__;
}
});
/**
 * Possible transitions for current statechart. Note: Transitions with guards may not actually be possible.
 */
com.keminglabs.statetron.core.available_transitions = (function com$keminglabs$statetron$core$available_transitions(sc){
return cljs.core.mapcat.call(null,(function (state_name){
return cljs.core.remove.call(null,(function (p1__47205_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("com.keminglabs.statetron.core","default","com.keminglabs.statetron.core/default",1165075763),new cljs.core.Keyword("transition","name","transition/name",1429155220).cljs$core$IFn$_invoke$arity$1(p1__47205_SHARP_));
}),cljs.core.map.call(null,(function (p__47206){
var vec__47207 = p__47206;
var _ = cljs.core.nth.call(null,vec__47207,(0),null);
var ts = cljs.core.nth.call(null,vec__47207,(1),null);
return cljs.core.first.call(null,ts);
}),cljs.core.group_by.call(null,new cljs.core.Keyword("transition","name","transition/name",1429155220),cljs.core.mapcat.call(null,new cljs.core.Keyword("transition","_from","transition/_from",804784300),com.keminglabs.statetron.core.ancestors.call(null,sc,state_name)))));
}),sc.active_leaf_names);
});
/**
 * Explore states from `sc` using provided `possible-events` fn. Returns map of :state/name to histories leading to that state.
 */
com.keminglabs.statetron.core.explore_states = (function com$keminglabs$statetron$core$explore_states(var_args){
var G__47211 = arguments.length;
switch (G__47211) {
case 2:
return com.keminglabs.statetron.core.explore_states.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.keminglabs.statetron.core.explore_states.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.keminglabs.statetron.core.explore_states.cljs$core$IFn$_invoke$arity$2 = (function (sc,possible_events){
return com.keminglabs.statetron.core.explore_states.call(null,sc,possible_events,(1000));
});

com.keminglabs.statetron.core.explore_states.cljs$core$IFn$_invoke$arity$3 = (function (sc,possible_events,max_iterations){
var i = (0);
var results = cljs.core.PersistentArrayMap.EMPTY;
var G__47216 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"sc","sc",1148023032),sc], null)], null);
var vec__47217 = G__47216;
var seq__47218 = cljs.core.seq.call(null,vec__47217);
var first__47219 = cljs.core.first.call(null,seq__47218);
var seq__47218__$1 = cljs.core.next.call(null,seq__47218);
var map__47220 = first__47219;
var map__47220__$1 = ((((!((map__47220 == null)))?((((map__47220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47220.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47220):map__47220);
var x = map__47220__$1;
var history = cljs.core.get.call(null,map__47220__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var sc__$1 = cljs.core.get.call(null,map__47220__$1,new cljs.core.Keyword(null,"sc","sc",1148023032));
var xs = seq__47218__$1;
var i__$1 = i;
var results__$1 = results;
var G__47216__$1 = G__47216;
while(true){
var i__$2 = i__$1;
var results__$2 = results__$1;
var vec__47222 = G__47216__$1;
var seq__47223 = cljs.core.seq.call(null,vec__47222);
var first__47224 = cljs.core.first.call(null,seq__47223);
var seq__47223__$1 = cljs.core.next.call(null,seq__47223);
var map__47225 = first__47224;
var map__47225__$1 = ((((!((map__47225 == null)))?((((map__47225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47225.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47225):map__47225);
var x__$1 = map__47225__$1;
var history__$1 = cljs.core.get.call(null,map__47225__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var sc__$2 = cljs.core.get.call(null,map__47225__$1,new cljs.core.Keyword(null,"sc","sc",1148023032));
var xs__$1 = seq__47223__$1;
if(cljs.core._EQ_.call(null,i__$2,max_iterations)){
return results__$2;
} else {
if((x__$1 == null)){
return results__$2;
} else {
var events = possible_events.call(null,sc__$2);
if(cljs.core.empty_QMARK_.call(null,events)){
return results__$2;
} else {
var next_scs = (function (){var iter__37807__auto__ = ((function (i__$1,results__$1,G__47216__$1,events,i__$2,results__$2,vec__47222,seq__47223,first__47224,seq__47223__$1,map__47225,map__47225__$1,x__$1,history__$1,sc__$2,xs__$1,i,results,G__47216,vec__47217,seq__47218,first__47219,seq__47218__$1,map__47220,map__47220__$1,x,history,sc__$1,xs){
return (function com$keminglabs$statetron$core$iter__47227(s__47228){
return (new cljs.core.LazySeq(null,((function (i__$1,results__$1,G__47216__$1,events,i__$2,results__$2,vec__47222,seq__47223,first__47224,seq__47223__$1,map__47225,map__47225__$1,x__$1,history__$1,sc__$2,xs__$1,i,results,G__47216,vec__47217,seq__47218,first__47219,seq__47218__$1,map__47220,map__47220__$1,x,history,sc__$1,xs){
return (function (){
var s__47228__$1 = s__47228;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__47228__$1);
if(temp__5459__auto__){
var s__47228__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47228__$2)){
var c__37805__auto__ = cljs.core.chunk_first.call(null,s__47228__$2);
var size__37806__auto__ = cljs.core.count.call(null,c__37805__auto__);
var b__47230 = cljs.core.chunk_buffer.call(null,size__37806__auto__);
if((function (){var i__47229 = (0);
while(true){
if((i__47229 < size__37806__auto__)){
var e = cljs.core._nth.call(null,c__37805__auto__,i__47229);
cljs.core.chunk_append.call(null,b__47230,(function (){var sc_SINGLEQUOTE_ = com.keminglabs.statetron.core.step.call(null,sc__$2,e);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sc","sc",1148023032),sc_SINGLEQUOTE_,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj.call(null,history__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sc","sc",1148023032),sc_SINGLEQUOTE_,new cljs.core.Keyword(null,"event","event",301435442),e], null))], null);
})());

var G__47235 = (i__47229 + (1));
i__47229 = G__47235;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47230),com$keminglabs$statetron$core$iter__47227.call(null,cljs.core.chunk_rest.call(null,s__47228__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47230),null);
}
} else {
var e = cljs.core.first.call(null,s__47228__$2);
return cljs.core.cons.call(null,(function (){var sc_SINGLEQUOTE_ = com.keminglabs.statetron.core.step.call(null,sc__$2,e);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sc","sc",1148023032),sc_SINGLEQUOTE_,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj.call(null,history__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sc","sc",1148023032),sc_SINGLEQUOTE_,new cljs.core.Keyword(null,"event","event",301435442),e], null))], null);
})(),com$keminglabs$statetron$core$iter__47227.call(null,cljs.core.rest.call(null,s__47228__$2)));
}
} else {
return null;
}
break;
}
});})(i__$1,results__$1,G__47216__$1,events,i__$2,results__$2,vec__47222,seq__47223,first__47224,seq__47223__$1,map__47225,map__47225__$1,x__$1,history__$1,sc__$2,xs__$1,i,results,G__47216,vec__47217,seq__47218,first__47219,seq__47218__$1,map__47220,map__47220__$1,x,history,sc__$1,xs))
,null,null));
});})(i__$1,results__$1,G__47216__$1,events,i__$2,results__$2,vec__47222,seq__47223,first__47224,seq__47223__$1,map__47225,map__47225__$1,x__$1,history__$1,sc__$2,xs__$1,i,results,G__47216,vec__47217,seq__47218,first__47219,seq__47218__$1,map__47220,map__47220__$1,x,history,sc__$1,xs))
;
return iter__37807__auto__.call(null,events);
})();
var G__47236 = (i__$2 + (1));
var G__47237 = cljs.core.reduce.call(null,((function (i__$1,results__$1,G__47216__$1,next_scs,events,i__$2,results__$2,vec__47222,seq__47223,first__47224,seq__47223__$1,map__47225,map__47225__$1,x__$1,history__$1,sc__$2,xs__$1,i,results,G__47216,vec__47217,seq__47218,first__47219,seq__47218__$1,map__47220,map__47220__$1,x,history,sc__$1,xs){
return (function (r,p__47231){
var map__47232 = p__47231;
var map__47232__$1 = ((((!((map__47232 == null)))?((((map__47232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47232.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47232):map__47232);
var sc__$3 = cljs.core.get.call(null,map__47232__$1,new cljs.core.Keyword(null,"sc","sc",1148023032));
var history__$2 = cljs.core.get.call(null,map__47232__$1,new cljs.core.Keyword(null,"history","history",-247395220));
return cljs.core.reduce.call(null,((function (i__$1,results__$1,G__47216__$1,map__47232,map__47232__$1,sc__$3,history__$2,next_scs,events,i__$2,results__$2,vec__47222,seq__47223,first__47224,seq__47223__$1,map__47225,map__47225__$1,x__$1,history__$1,sc__$2,xs__$1,i,results,G__47216,vec__47217,seq__47218,first__47219,seq__47218__$1,map__47220,map__47220__$1,x,history,sc__$1,xs){
return (function (r__$1,s){
return cljs.core.update.call(null,r__$1,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(s),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),history__$2);
});})(i__$1,results__$1,G__47216__$1,map__47232,map__47232__$1,sc__$3,history__$2,next_scs,events,i__$2,results__$2,vec__47222,seq__47223,first__47224,seq__47223__$1,map__47225,map__47225__$1,x__$1,history__$1,sc__$2,xs__$1,i,results,G__47216,vec__47217,seq__47218,first__47219,seq__47218__$1,map__47220,map__47220__$1,x,history,sc__$1,xs))
,r,com.keminglabs.statetron.core.active_leaves.call(null,sc__$3));
});})(i__$1,results__$1,G__47216__$1,next_scs,events,i__$2,results__$2,vec__47222,seq__47223,first__47224,seq__47223__$1,map__47225,map__47225__$1,x__$1,history__$1,sc__$2,xs__$1,i,results,G__47216,vec__47217,seq__47218,first__47219,seq__47218__$1,map__47220,map__47220__$1,x,history,sc__$1,xs))
,results__$2,next_scs);
var G__47238 = cljs.core.concat.call(null,xs__$1,next_scs);
i__$1 = G__47236;
results__$1 = G__47237;
G__47216__$1 = G__47238;
continue;
}

}
}
break;
}
});

com.keminglabs.statetron.core.explore_states.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map?rel=1517117185375
