// Compiled by ClojureScript 1.9.946 {}
goog.provide('clojure.test.check.generators');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.test.check.random');
goog.require('clojure.test.check.rose_tree');
goog.require('goog.string');
goog.require('clojure.string');

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
clojure.test.check.generators.Generator = (function (gen,__meta,__extmap,__hash){
this.gen = gen;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
clojure.test.check.generators.Generator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__37613__auto__,k__37614__auto__){
var self__ = this;
var this__37613__auto____$1 = this;
return this__37613__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__37614__auto__,null);
});

clojure.test.check.generators.Generator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__37615__auto__,k48291,else__37616__auto__){
var self__ = this;
var this__37615__auto____$1 = this;
var G__48295 = k48291;
var G__48295__$1 = (((G__48295 instanceof cljs.core.Keyword))?G__48295.fqn:null);
switch (G__48295__$1) {
case "gen":
return self__.gen;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k48291,else__37616__auto__);

}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__37627__auto__,writer__37628__auto__,opts__37629__auto__){
var self__ = this;
var this__37627__auto____$1 = this;
var pr_pair__37630__auto__ = ((function (this__37627__auto____$1){
return (function (keyval__37631__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__37628__auto__,cljs.core.pr_writer,""," ","",opts__37629__auto__,keyval__37631__auto__);
});})(this__37627__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__37628__auto__,pr_pair__37630__auto__,"#clojure.test.check.generators.Generator{",", ","}",opts__37629__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gen","gen",142575302),self__.gen],null))], null),self__.__extmap));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48290){
var self__ = this;
var G__48290__$1 = this;
return (new cljs.core.RecordIter((0),G__48290__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen","gen",142575302)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__37611__auto__){
var self__ = this;
var this__37611__auto____$1 = this;
return self__.__meta;
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__37608__auto__){
var self__ = this;
var this__37608__auto____$1 = this;
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,self__.__extmap,self__.__hash));
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__37617__auto__){
var self__ = this;
var this__37617__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__37609__auto__){
var self__ = this;
var this__37609__auto____$1 = this;
var h__37381__auto__ = self__.__hash;
if(!((h__37381__auto__ == null))){
return h__37381__auto__;
} else {
var h__37381__auto____$1 = ((function (h__37381__auto__,this__37609__auto____$1){
return (function (coll__37610__auto__){
return (236843149 ^ cljs.core.hash_unordered_coll.call(null,coll__37610__auto__));
});})(h__37381__auto__,this__37609__auto____$1))
.call(null,this__37609__auto____$1);
self__.__hash = h__37381__auto____$1;

return h__37381__auto____$1;
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48292,other48293){
var self__ = this;
var this48292__$1 = this;
return (!((other48293 == null))) && ((this48292__$1.constructor === other48293.constructor)) && (cljs.core._EQ_.call(null,this48292__$1.gen,other48293.gen)) && (cljs.core._EQ_.call(null,this48292__$1.__extmap,other48293.__extmap));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__37622__auto__,k__37623__auto__){
var self__ = this;
var this__37622__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gen","gen",142575302),null], null), null),k__37623__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37622__auto____$1),self__.__meta),k__37623__auto__);
} else {
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__37623__auto__)),null));
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__37620__auto__,k__37621__auto__,G__48290){
var self__ = this;
var this__37620__auto____$1 = this;
var pred__48296 = cljs.core.keyword_identical_QMARK_;
var expr__48297 = k__37621__auto__;
if(cljs.core.truth_(pred__48296.call(null,new cljs.core.Keyword(null,"gen","gen",142575302),expr__48297))){
return (new clojure.test.check.generators.Generator(G__48290,self__.__meta,self__.__extmap,null));
} else {
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__37621__auto__,G__48290),null));
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__37625__auto__){
var self__ = this;
var this__37625__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gen","gen",142575302),self__.gen],null))], null),self__.__extmap));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__37612__auto__,G__48290){
var self__ = this;
var this__37612__auto____$1 = this;
return (new clojure.test.check.generators.Generator(self__.gen,G__48290,self__.__extmap,self__.__hash));
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__37618__auto__,entry__37619__auto__){
var self__ = this;
var this__37618__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__37619__auto__)){
return this__37618__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__37619__auto__,(0)),cljs.core._nth.call(null,entry__37619__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__37618__auto____$1,entry__37619__auto__);
}
});

clojure.test.check.generators.Generator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",1783106829,null)], null);
});

clojure.test.check.generators.Generator.cljs$lang$type = true;

clojure.test.check.generators.Generator.cljs$lang$ctorPrSeq = (function (this__37651__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"clojure.test.check.generators/Generator");
});

clojure.test.check.generators.Generator.cljs$lang$ctorPrWriter = (function (this__37651__auto__,writer__37652__auto__){
return cljs.core._write.call(null,writer__37652__auto__,"clojure.test.check.generators/Generator");
});

clojure.test.check.generators.__GT_Generator = (function clojure$test$check$generators$__GT_Generator(gen){
return (new clojure.test.check.generators.Generator(gen,null,null,null));
});

clojure.test.check.generators.map__GT_Generator = (function clojure$test$check$generators$map__GT_Generator(G__48294){
return (new clojure.test.check.generators.Generator(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(G__48294),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__48294,new cljs.core.Keyword(null,"gen","gen",142575302))),null));
});

/**
 * Test if `x` is a generator. Generators should be treated as opaque values.
 */
clojure.test.check.generators.generator_QMARK_ = (function clojure$test$check$generators$generator_QMARK_(x){
return (x instanceof clojure.test.check.generators.Generator);
});
clojure.test.check.generators.make_gen = (function clojure$test$check$generators$make_gen(generator_fn){
return (new clojure.test.check.generators.Generator(generator_fn,null,null,null));
});
/**
 * Internal function.
 */
clojure.test.check.generators.call_gen = (function clojure$test$check$generators$call_gen(p__48300,rnd,size){
var map__48301 = p__48300;
var map__48301__$1 = ((((!((map__48301 == null)))?((((map__48301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48301):map__48301);
var generator_fn = cljs.core.get.call(null,map__48301__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
return generator_fn.call(null,rnd,size);
});
/**
 * Internal function.
 */
clojure.test.check.generators.gen_pure = (function clojure$test$check$generators$gen_pure(value){
return clojure.test.check.generators.make_gen.call(null,(function (rnd,size){
return value;
}));
});
/**
 * Internal function.
 */
clojure.test.check.generators.gen_fmap = (function clojure$test$check$generators$gen_fmap(k,p__48303){
var map__48304 = p__48303;
var map__48304__$1 = ((((!((map__48304 == null)))?((((map__48304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48304.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48304):map__48304);
var h = cljs.core.get.call(null,map__48304__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
return clojure.test.check.generators.make_gen.call(null,((function (map__48304,map__48304__$1,h){
return (function (rnd,size){
return k.call(null,h.call(null,rnd,size));
});})(map__48304,map__48304__$1,h))
);
});
/**
 * Internal function.
 */
clojure.test.check.generators.gen_bind = (function clojure$test$check$generators$gen_bind(p__48306,k){
var map__48307 = p__48306;
var map__48307__$1 = ((((!((map__48307 == null)))?((((map__48307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48307.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48307):map__48307);
var h = cljs.core.get.call(null,map__48307__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
return clojure.test.check.generators.make_gen.call(null,((function (map__48307,map__48307__$1,h){
return (function (rnd,size){
var vec__48309 = clojure.test.check.random.split.call(null,rnd);
var r1 = cljs.core.nth.call(null,vec__48309,(0),null);
var r2 = cljs.core.nth.call(null,vec__48309,(1),null);
var inner = h.call(null,r1,size);
var map__48312 = k.call(null,inner);
var map__48312__$1 = ((((!((map__48312 == null)))?((((map__48312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48312.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48312):map__48312);
var result = cljs.core.get.call(null,map__48312__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
return result.call(null,r2,size);
});})(map__48307,map__48307__$1,h))
);
});
/**
 * Internal function.
 * 
 *   Given a random number generator, returns an infinite lazy sequence
 *   of random number generators.
 */
clojure.test.check.generators.lazy_random_states = (function clojure$test$check$generators$lazy_random_states(rr){
return (new cljs.core.LazySeq(null,(function (){
var vec__48314 = clojure.test.check.random.split.call(null,rr);
var r1 = cljs.core.nth.call(null,vec__48314,(0),null);
var r2 = cljs.core.nth.call(null,vec__48314,(1),null);
return cljs.core.cons.call(null,r1,clojure.test.check.generators.lazy_random_states.call(null,r2));
}),null,null));
});
/**
 * Takes a collection of generators and returns a generator of vectors.
 */
clojure.test.check.generators.gen_tuple = (function clojure$test$check$generators$gen_tuple(gens){
return clojure.test.check.generators.make_gen.call(null,(function (rnd,size){
return cljs.core.mapv.call(null,(function (p1__48317_SHARP_,p2__48318_SHARP_){
return clojure.test.check.generators.call_gen.call(null,p1__48317_SHARP_,p2__48318_SHARP_,size);
}),gens,clojure.test.check.random.split_n.call(null,rnd,cljs.core.count.call(null,gens)));
}));
});
/**
 * Returns a generator like `gen` but with values transformed by `f`.
 *   E.g.:
 * 
 *    (gen/sample (gen/fmap str gen/nat))
 *    => ("0" "1" "0" "1" "4" "3" "6" "6" "4" "2")
 * 
 *   Also see gen/let for a macro with similar functionality.
 */
clojure.test.check.generators.fmap = (function clojure$test$check$generators$fmap(f,gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error(["Assert failed: ","Second arg to fmap must be a generator","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.gen_fmap.call(null,(function (p1__48319_SHARP_){
return clojure.test.check.rose_tree.fmap.call(null,f,p1__48319_SHARP_);
}),gen);
});
/**
 * Create a generator that always returns `value`,
 *   and never shrinks. You can think of this as
 *   the `constantly` of generators. E.g.:
 * 
 *    (gen/sample (gen/return 42))
 *    => (42 42 42 42 42 42 42 42 42 42)
 */
clojure.test.check.generators.return$ = (function clojure$test$check$generators$return(value){
return clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.pure.call(null,value));
});
clojure.test.check.generators.bind_helper = (function clojure$test$check$generators$bind_helper(f){
return (function (rose){
return clojure.test.check.generators.gen_fmap.call(null,clojure.test.check.rose_tree.join,clojure.test.check.generators.make_gen.call(null,(function (rnd,size){
return clojure.test.check.rose_tree.fmap.call(null,(function (p1__48320_SHARP_){
return clojure.test.check.generators.call_gen.call(null,p1__48320_SHARP_,rnd,size);
}),clojure.test.check.rose_tree.fmap.call(null,f,rose));
})));
});
});
/**
 * Create a new generator that passes the result of `gen` into function
 *   `f`. `f` should return a new generator. This allows you to create new
 *   generators that depend on the value of other generators. For example,
 *   to create a generator of permutations which first generates a
 *   `num-elements` and then generates a shuffling of `(range num-elements)`:
 * 
 *    (gen/bind gen/nat
 *              ;; this function takes a value generated by
 *              ;; the generator above and returns a new generator
 *              ;; which shuffles the collection returned by `range`
 *              (fn [num-elements]
 *                (gen/shuffle (range num-elements))))
 * 
 *   Also see gen/let for a macro with similar functionality.
 */
clojure.test.check.generators.bind = (function clojure$test$check$generators$bind(generator,f){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,generator))){
} else {
throw (new Error(["Assert failed: ","First arg to bind must be a generator","\n","(generator? generator)"].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,generator,clojure.test.check.generators.bind_helper.call(null,f));
});
/**
 * Internal function.
 */
clojure.test.check.generators.make_size_range_seq = (function clojure$test$check$generators$make_size_range_seq(max_size){
return cljs.core.cycle.call(null,cljs.core.range.call(null,(0),max_size));
});
/**
 * Return a sequence of realized values from `generator`.
 */
clojure.test.check.generators.sample_seq = (function clojure$test$check$generators$sample_seq(var_args){
var G__48324 = arguments.length;
switch (G__48324) {
case 1:
return clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators.sample_seq.call(null,generator,(200));
});

clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$2 = (function (generator,max_size){
var r = clojure.test.check.random.make_random.call(null);
var size_seq = clojure.test.check.generators.make_size_range_seq.call(null,max_size);
return cljs.core.map.call(null,((function (r,size_seq){
return (function (p1__48321_SHARP_,p2__48322_SHARP_){
return clojure.test.check.rose_tree.root.call(null,clojure.test.check.generators.call_gen.call(null,generator,p1__48321_SHARP_,p2__48322_SHARP_));
});})(r,size_seq))
,clojure.test.check.generators.lazy_random_states.call(null,r),size_seq);
});

clojure.test.check.generators.sample_seq.cljs$lang$maxFixedArity = 2;

/**
 * Return a sequence of `num-samples` (default 10)
 *   realized values from `generator`.
 * 
 *   The sequence starts with small values from the generator, which
 *   probably do not reflect the variety of values that will be generated
 *   during a longer test run.
 * 
 *   Note that this function is a dev helper and is not meant to be used
 *   to build other generators.
 */
clojure.test.check.generators.sample = (function clojure$test$check$generators$sample(var_args){
var G__48327 = arguments.length;
switch (G__48327) {
case 1:
return clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators.sample.call(null,generator,(10));
});

clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$2 = (function (generator,num_samples){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,generator))){
} else {
throw (new Error(["Assert failed: ","First arg to sample must be a generator","\n","(generator? generator)"].join('')));
}

return cljs.core.take.call(null,num_samples,clojure.test.check.generators.sample_seq.call(null,generator));
});

clojure.test.check.generators.sample.cljs$lang$maxFixedArity = 2;

/**
 * Returns a single sample value from the generator.
 * 
 *   Note that this function is a dev helper and is not meant to be used
 *   to build other generators.
 * 
 *   Optional args:
 * 
 *   - size: the abstract size parameter, defaults to 30
 *   - seed: the seed for the random number generator, an integer
 */
clojure.test.check.generators.generate = (function clojure$test$check$generators$generate(var_args){
var G__48330 = arguments.length;
switch (G__48330) {
case 1:
return clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators.generate.call(null,generator,(30));
});

clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$2 = (function (generator,size){
var rng = clojure.test.check.random.make_random.call(null);
return clojure.test.check.rose_tree.root.call(null,clojure.test.check.generators.call_gen.call(null,generator,rng,size));
});

clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$3 = (function (generator,size,seed){
var rng = clojure.test.check.random.make_random.call(null,seed);
return clojure.test.check.rose_tree.root.call(null,clojure.test.check.generators.call_gen.call(null,generator,rng,size));
});

clojure.test.check.generators.generate.cljs$lang$maxFixedArity = 3;

clojure.test.check.generators.halfs = (function clojure$test$check$generators$halfs(n){
return cljs.core.take_while.call(null,(function (p1__48332_SHARP_){
return cljs.core.not_EQ_.call(null,(0),p1__48332_SHARP_);
}),cljs.core.iterate.call(null,(function (p1__48333_SHARP_){
return cljs.core.quot.call(null,p1__48333_SHARP_,(2));
}),n));
});
clojure.test.check.generators.shrink_int = (function clojure$test$check$generators$shrink_int(integer){
return cljs.core.map.call(null,(function (p1__48334_SHARP_){
return (integer - p1__48334_SHARP_);
}),clojure.test.check.generators.halfs.call(null,integer));
});
clojure.test.check.generators.int_rose_tree = (function clojure$test$check$generators$int_rose_tree(value){
return clojure.test.check.rose_tree.make_rose.call(null,value,cljs.core.map.call(null,clojure.test.check.generators.int_rose_tree,clojure.test.check.generators.shrink_int.call(null,value)));
});
clojure.test.check.generators.calc_long = (function clojure$test$check$generators$calc_long(factor,lower,upper){
return cljs.core.long$.call(null,Math.floor((lower + ((factor * (1.0 + upper)) - (factor * lower)))));
});
clojure.test.check.generators.rand_range = (function clojure$test$check$generators$rand_range(rnd,lower,upper){
if((lower <= upper)){
} else {
throw (new Error("Assert failed: (<= lower upper)"));
}

return clojure.test.check.generators.calc_long.call(null,clojure.test.check.random.rand_double.call(null,rnd),lower,upper);
});
/**
 * Create a generator that depends on the size parameter.
 *   `sized-gen` is a function that takes an integer and returns
 *   a generator.
 * 
 *    TODO: example
 */
clojure.test.check.generators.sized = (function clojure$test$check$generators$sized(sized_gen){
return clojure.test.check.generators.make_gen.call(null,(function (rnd,size){
var sized_gen__$1 = sized_gen.call(null,size);
return clojure.test.check.generators.call_gen.call(null,sized_gen__$1,rnd,size);
}));
});
/**
 * Create a new generator with `size` always bound to `n`.
 * 
 *    (gen/sample (gen/set (gen/resize 200 gen/double)))
 *    => (#{}
 *        #{-4.994772362980037E147}
 *        #{-4.234418056487335E-146}
 *        #{}
 *        #{}
 *        #{}
 *        #{NaN}
 *        #{8.142414100982609E-63}
 *        #{-3.58429955903876E-159 2.8563794617604296E-154
 *          4.1021360195776005E-100 1.9084564045332549E-38}
 *        #{-2.1582818131881376E83 -5.8460065493236117E48 9.729260993803226E166})
 */
clojure.test.check.generators.resize = (function clojure$test$check$generators$resize(n,generator){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,generator))){
} else {
throw (new Error(["Assert failed: ","Second arg to resize must be a generator","\n","(generator? generator)"].join('')));
}

var map__48335 = generator;
var map__48335__$1 = ((((!((map__48335 == null)))?((((map__48335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48335.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48335):map__48335);
var gen = cljs.core.get.call(null,map__48335__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
return clojure.test.check.generators.make_gen.call(null,((function (map__48335,map__48335__$1,gen){
return (function (rnd,_size){
return gen.call(null,rnd,n);
});})(map__48335,map__48335__$1,gen))
);
});
/**
 * Create a new generator that modifies the size parameter by the
 *   given function. Intended to support generators with sizes that need
 *   to grow at different rates compared to the normal linear scaling.
 * 
 *    (gen/sample (gen/tuple (gen/scale #(/ % 10) gen/nat)
 *                           gen/nat
 *                           (gen/scale #(* % 10) gen/nat)))
 *    => ([0 0 0]  [0 1 2]  [0 2 13] [0 1 6]  [0 1 23]
 *        [0 2 42] [0 1 26] [0 1 12] [0 1 12] [0 0 3])
 */
clojure.test.check.generators.scale = (function clojure$test$check$generators$scale(f,generator){
return clojure.test.check.generators.sized.call(null,(function (n){
return clojure.test.check.generators.resize.call(null,f.call(null,n),generator);
}));
});
/**
 * Create a generator that returns integer numbers in the range
 *   `lower` to `upper`, inclusive.
 * 
 *       (gen/sample (gen/choose 200 800))
 *       => (331 241 593 339 643 718 688 473 247 694)
 */
clojure.test.check.generators.choose = (function clojure$test$check$generators$choose(lower,upper){
return clojure.test.check.generators.make_gen.call(null,(function (rnd,_size){
var value = clojure.test.check.generators.rand_range.call(null,rnd,lower,upper);
return clojure.test.check.rose_tree.filter.call(null,((function (value){
return (function (p1__48337_SHARP_){
return ((p1__48337_SHARP_ >= lower)) && ((p1__48337_SHARP_ <= upper));
});})(value))
,clojure.test.check.generators.int_rose_tree.call(null,value));
}));
});
/**
 * Create a generator that randomly chooses a value from the list of
 *   provided generators. Shrinks toward choosing an earlier generator,
 *   as well as shrinking the value generated by the chosen generator.
 * 
 *    (gen/sample (gen/one-of [gen/int gen/boolean (gen/vector gen/int)]))
 *    => (true [] -1 [0] [1 -4 -4 1] true 4 [] 6 true)
 */
clojure.test.check.generators.one_of = (function clojure$test$check$generators$one_of(generators){
if(cljs.core.every_QMARK_.call(null,clojure.test.check.generators.generator_QMARK_,generators)){
} else {
throw (new Error(["Assert failed: ","Arg to one-of must be a collection of generators","\n","(every? generator? generators)"].join('')));
}

if(cljs.core.seq.call(null,generators)){
} else {
throw (new Error(["Assert failed: ","one-of cannot be called with an empty collection","\n","(seq generators)"].join('')));
}

return clojure.test.check.generators.bind.call(null,clojure.test.check.generators.choose.call(null,(0),(cljs.core.count.call(null,generators) - (1))),(function (p1__48338_SHARP_){
return cljs.core.nth.call(null,generators,p1__48338_SHARP_);
}));
});
/**
 * Returns an index into the `likelihoods` sequence.
 */
clojure.test.check.generators.pick = (function clojure$test$check$generators$pick(likelihoods,n){
return cljs.core.count.call(null,cljs.core.take_while.call(null,(function (p1__48339_SHARP_){
return (p1__48339_SHARP_ <= n);
}),cljs.core.rest.call(null,cljs.core.reductions.call(null,cljs.core._PLUS_,(0),likelihoods))));
});
/**
 * Create a generator that chooses a generator from `pairs` based on the
 *   provided likelihoods. The likelihood of a given generator being chosen is
 *   its likelihood divided by the sum of all likelihoods. Shrinks toward
 *   choosing an earlier generator, as well as shrinking the value generated
 *   by the chosen generator.
 * 
 *   Examples:
 * 
 *    (gen/sample (gen/frequency [[5 gen/int] [3 (gen/vector gen/int)] [2 gen/boolean]]))
 *    => (true [] -1 [0] [1 -4 -4 1] true 4 [] 6 true)
 */
clojure.test.check.generators.frequency = (function clojure$test$check$generators$frequency(pairs){
if(cljs.core.every_QMARK_.call(null,(function (p__48340){
var vec__48341 = p__48340;
var x = cljs.core.nth.call(null,vec__48341,(0),null);
var g = cljs.core.nth.call(null,vec__48341,(1),null);
var and__36913__auto__ = typeof x === 'number';
if(and__36913__auto__){
return clojure.test.check.generators.generator_QMARK_.call(null,g);
} else {
return and__36913__auto__;
}
}),pairs)){
} else {
throw (new Error(["Assert failed: ","Arg to frequency must be a list of [num generator] pairs","\n","(every? (fn [[x g]] (and (number? x) (generator? g))) pairs)"].join('')));
}

if(cljs.core.seq.call(null,pairs)){
} else {
throw (new Error(["Assert failed: ","frequency cannot be called with an empty collection","\n","(seq pairs)"].join('')));
}

var total = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.first,pairs));
return clojure.test.check.generators.make_gen.call(null,((function (total){
return (function (rnd,size){
return clojure.test.check.generators.call_gen.call(null,clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.choose.call(null,(0),(total - (1))),((function (total){
return (function (x){
var idx = clojure.test.check.generators.pick.call(null,cljs.core.map.call(null,cljs.core.first,pairs),clojure.test.check.rose_tree.root.call(null,x));
return clojure.test.check.generators.gen_fmap.call(null,((function (idx,total){
return (function (rose){
return clojure.test.check.rose_tree.make_rose.call(null,clojure.test.check.rose_tree.root.call(null,rose),(new cljs.core.LazySeq(null,((function (idx,total){
return (function (){
return cljs.core.concat.call(null,(function (){var iter__37807__auto__ = ((function (idx,total){
return (function clojure$test$check$generators$frequency_$_iter__48344(s__48345){
return (new cljs.core.LazySeq(null,((function (idx,total){
return (function (){
var s__48345__$1 = s__48345;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__48345__$1);
if(temp__5459__auto__){
var s__48345__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48345__$2)){
var c__37805__auto__ = cljs.core.chunk_first.call(null,s__48345__$2);
var size__37806__auto__ = cljs.core.count.call(null,c__37805__auto__);
var b__48347 = cljs.core.chunk_buffer.call(null,size__37806__auto__);
if((function (){var i__48346 = (0);
while(true){
if((i__48346 < size__37806__auto__)){
var idx__$1 = cljs.core._nth.call(null,c__37805__auto__,i__48346);
cljs.core.chunk_append.call(null,b__48347,clojure.test.check.generators.call_gen.call(null,cljs.core.second.call(null,cljs.core.nth.call(null,pairs,idx__$1)),rnd,size));

var G__48348 = (i__48346 + (1));
i__48346 = G__48348;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48347),clojure$test$check$generators$frequency_$_iter__48344.call(null,cljs.core.chunk_rest.call(null,s__48345__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48347),null);
}
} else {
var idx__$1 = cljs.core.first.call(null,s__48345__$2);
return cljs.core.cons.call(null,clojure.test.check.generators.call_gen.call(null,cljs.core.second.call(null,cljs.core.nth.call(null,pairs,idx__$1)),rnd,size),clojure$test$check$generators$frequency_$_iter__48344.call(null,cljs.core.rest.call(null,s__48345__$2)));
}
} else {
return null;
}
break;
}
});})(idx,total))
,null,null));
});})(idx,total))
;
return iter__37807__auto__.call(null,cljs.core.range.call(null,idx));
})(),clojure.test.check.rose_tree.children.call(null,rose));
});})(idx,total))
,null,null)));
});})(idx,total))
,cljs.core.second.call(null,cljs.core.nth.call(null,pairs,idx)));
});})(total))
),rnd,size);
});})(total))
);
});
/**
 * Create a generator that randomly chooses an element from `coll`.
 * 
 *    (gen/sample (gen/elements [:foo :bar :baz]))
 *    => (:foo :baz :baz :bar :foo :foo :bar :bar :foo :bar)
 */
clojure.test.check.generators.elements = (function clojure$test$check$generators$elements(coll){
if(cljs.core.seq.call(null,coll)){
} else {
throw (new Error(["Assert failed: ","elements cannot be called with an empty collection","\n","(seq coll)"].join('')));
}

var v = cljs.core.vec.call(null,coll);
return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.choose.call(null,(0),(cljs.core.count.call(null,v) - (1))),((function (v){
return (function (p1__48349_SHARP_){
return clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.fmap.call(null,v,p1__48349_SHARP_));
});})(v))
);
});
clojure.test.check.generators.such_that_helper = (function clojure$test$check$generators$such_that_helper(pred,gen,p__48350,rng,size){
var map__48351 = p__48350;
var map__48351__$1 = ((((!((map__48351 == null)))?((((map__48351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48351):map__48351);
var ex_fn = cljs.core.get.call(null,map__48351__$1,new cljs.core.Keyword(null,"ex-fn","ex-fn",-284925510));
var max_tries = cljs.core.get.call(null,map__48351__$1,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792));
var tries_left = max_tries;
var rng__$1 = rng;
var size__$1 = size;
while(true){
if((tries_left === (0))){
throw ex_fn.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pred","pred",1927423397),pred,new cljs.core.Keyword(null,"gen","gen",142575302),gen,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),max_tries], null));
} else {
var vec__48353 = clojure.test.check.random.split.call(null,rng__$1);
var r1 = cljs.core.nth.call(null,vec__48353,(0),null);
var r2 = cljs.core.nth.call(null,vec__48353,(1),null);
var value = clojure.test.check.generators.call_gen.call(null,gen,r1,size__$1);
if(cljs.core.truth_(pred.call(null,clojure.test.check.rose_tree.root.call(null,value)))){
return clojure.test.check.rose_tree.filter.call(null,pred,value);
} else {
var G__48356 = (tries_left - (1));
var G__48357 = r2;
var G__48358 = (size__$1 + (1));
tries_left = G__48356;
rng__$1 = G__48357;
size__$1 = G__48358;
continue;
}
}
break;
}
});
clojure.test.check.generators.default_such_that_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ex-fn","ex-fn",-284925510),(function (p__48359){
var map__48360 = p__48359;
var map__48360__$1 = ((((!((map__48360 == null)))?((((map__48360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48360):map__48360);
var arg = map__48360__$1;
var max_tries = cljs.core.get.call(null,map__48360__$1,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792));
return cljs.core.ex_info.call(null,["Couldn't satisfy such-that predicate after ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_tries)," tries."].join(''),arg);
}),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(10)], null);
/**
 * Create a generator that generates values from `gen` that satisfy predicate
 *   `pred`. Care is needed to ensure there is a high chance `gen` will satisfy
 *   `pred`. By default, `such-that` will try 10 times to generate a value that
 *   satisfies the predicate. If no value passes this predicate after this number
 *   of iterations, a runtime exception will be thrown. Note also that each
 *   time such-that retries, it will increase the size parameter.
 * 
 *   Examples:
 * 
 *    ;; generate non-empty vectors of integers
 *    ;; (note, gen/not-empty does exactly this)
 *    (gen/such-that not-empty (gen/vector gen/int))
 * 
 *   You can customize `such-that` by passing an optional third argument, which can
 *   either be an integer representing the maximum number of times test.check
 *   will try to generate a value matching the predicate, or a map:
 * 
 *    :max-tries  positive integer, the maximum number of tries (default 10)
 *    :ex-fn      a function of one arg that will be called if test.check cannot
 *                generate a matching value; it will be passed a map with `:gen`,
 *                `:pred`, and `:max-tries` and should return an exception
 */
clojure.test.check.generators.such_that = (function clojure$test$check$generators$such_that(var_args){
var G__48363 = arguments.length;
switch (G__48363) {
case 2:
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2 = (function (pred,gen){
return clojure.test.check.generators.such_that.call(null,pred,gen,(10));
});

clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3 = (function (pred,gen,max_tries_or_opts){
var opts = ((cljs.core.integer_QMARK_.call(null,max_tries_or_opts))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),max_tries_or_opts], null):((cljs.core.map_QMARK_.call(null,max_tries_or_opts))?max_tries_or_opts:(function(){throw cljs.core.ex_info.call(null,"Bad argument to such-that!",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-tries-or-opts","max-tries-or-opts",-609860571),max_tries_or_opts], null))})()
));
var opts__$1 = cljs.core.merge.call(null,clojure.test.check.generators.default_such_that_opts,opts);
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error(["Assert failed: ","Second arg to such-that must be a generator","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.make_gen.call(null,((function (opts,opts__$1){
return (function (rand_seed,size){
return clojure.test.check.generators.such_that_helper.call(null,pred,gen,opts__$1,rand_seed,size);
});})(opts,opts__$1))
);
});

clojure.test.check.generators.such_that.cljs$lang$maxFixedArity = 3;

/**
 * Modifies a generator so that it doesn't generate empty collections.
 * 
 *   Examples:
 * 
 *    ;; generate a vector of booleans, but never the empty vector
 *    (gen/sample (gen/not-empty (gen/vector gen/boolean)))
 *    => ([false]
 *        [false false]
 *        [false false]
 *        [false false false]
 *        [false false false false]
 *        [false true true]
 *        [true false false false]
 *        [true]
 *        [true true true false false true false]
 *        [false true true true false true true true false])
 */
clojure.test.check.generators.not_empty = (function clojure$test$check$generators$not_empty(gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error(["Assert failed: ","Arg to not-empty must be a generator","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.such_that.call(null,cljs.core.not_empty,gen);
});
/**
 * Create a new generator that is just like `gen`, except does not shrink
 *   at all. This can be useful when shrinking is taking a long time or is not
 *   applicable to the domain.
 */
clojure.test.check.generators.no_shrink = (function clojure$test$check$generators$no_shrink(gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error(["Assert failed: ","Arg to no-shrink must be a generator","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,gen,(function (rose){
return clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.make_rose.call(null,clojure.test.check.rose_tree.root.call(null,rose),cljs.core.PersistentVector.EMPTY));
}));
});
/**
 * Create a new generator like `gen`, but will consider nodes for shrinking
 *   even if their parent passes the test (up to one additional level).
 */
clojure.test.check.generators.shrink_2 = (function clojure$test$check$generators$shrink_2(gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error(["Assert failed: ","Arg to shrink-2 must be a generator","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,gen,cljs.core.comp.call(null,clojure.test.check.generators.gen_pure,clojure.test.check.rose_tree.collapse));
});
/**
 * Generates one of `true` or `false`. Shrinks to `false`.
 */
clojure.test.check.generators.boolean$ = clojure.test.check.generators.elements.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null));
/**
 * Create a generator that returns a vector, whose elements are chosen
 *   from the generators in the same position. The individual elements shrink
 *   according to their generator, but the value will never shrink in count.
 * 
 *   Examples:
 * 
 *    (def t (tuple gen/int gen/boolean))
 *    (sample t)
 *    ;; => ([1 true] [2 true] [2 false] [1 false] [0 true] [-2 false] [-6 false]
 *    ;; =>  [3 true] [-4 false] [9 true]))
 */
clojure.test.check.generators.tuple = (function clojure$test$check$generators$tuple(var_args){
var args__38211__auto__ = [];
var len__38204__auto___48366 = arguments.length;
var i__38205__auto___48367 = (0);
while(true){
if((i__38205__auto___48367 < len__38204__auto___48366)){
args__38211__auto__.push((arguments[i__38205__auto___48367]));

var G__48368 = (i__38205__auto___48367 + (1));
i__38205__auto___48367 = G__48368;
continue;
} else {
}
break;
}

var argseq__38212__auto__ = ((((0) < args__38211__auto__.length))?(new cljs.core.IndexedSeq(args__38211__auto__.slice((0)),(0),null)):null);
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__38212__auto__);
});

clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic = (function (generators){
if(cljs.core.every_QMARK_.call(null,clojure.test.check.generators.generator_QMARK_,generators)){
} else {
throw (new Error(["Assert failed: ","Args to tuple must be generators","\n","(every? generator? generators)"].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.gen_tuple.call(null,generators),(function (roses){
return clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.zip.call(null,cljs.core.vector,roses));
}));
});

clojure.test.check.generators.tuple.cljs$lang$maxFixedArity = (0);

clojure.test.check.generators.tuple.cljs$lang$applyTo = (function (seq48365){
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48365));
});

/**
 * Generates a positive or negative integer bounded by the generator's
 *   `size` parameter.
 */
clojure.test.check.generators.int$ = clojure.test.check.generators.sized.call(null,(function (size){
return clojure.test.check.generators.choose.call(null,(- size),size);
}));
/**
 * Generates non-negative integers bounded by the generator's `size`
 *   parameter. Shrinks to zero.
 */
clojure.test.check.generators.nat = clojure.test.check.generators.fmap.call(null,(function (p1__48369_SHARP_){
return Math.abs(cljs.core.long$.call(null,p1__48369_SHARP_));
}),clojure.test.check.generators.int$);
/**
 * Generate positive integers bounded by the generator's `size` parameter.
 */
clojure.test.check.generators.pos_int = clojure.test.check.generators.nat;
/**
 * Generate negative integers bounded by the generator's `size` parameter.
 */
clojure.test.check.generators.neg_int = clojure.test.check.generators.fmap.call(null,(function (p1__48370_SHARP_){
return ((-1) * p1__48370_SHARP_);
}),clojure.test.check.generators.nat);
/**
 * Generate strictly positive integers bounded by the generator's `size` + 1
 */
clojure.test.check.generators.s_pos_int = clojure.test.check.generators.fmap.call(null,cljs.core.inc,clojure.test.check.generators.nat);
/**
 * Generate strictly negative integers bounded by the generator's `size` + 1
 */
clojure.test.check.generators.s_neg_int = clojure.test.check.generators.fmap.call(null,cljs.core.dec,clojure.test.check.generators.neg_int);
/**
 * Create a generator of vectors whose elements are chosen from
 *   `generator`. The count of the vector will be bounded by the `size`
 *   generator parameter.
 */
clojure.test.check.generators.vector = (function clojure$test$check$generators$vector(var_args){
var G__48373 = arguments.length;
switch (G__48373) {
case 1:
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1 = (function (generator){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,generator))){
} else {
throw (new Error(["Assert failed: ","Arg to vector must be a generator","\n","(generator? generator)"].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.sized.call(null,(function (p1__48371_SHARP_){
return clojure.test.check.generators.choose.call(null,(0),p1__48371_SHARP_);
})),(function (num_elements_rose){
return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.gen_tuple.call(null,cljs.core.repeat.call(null,clojure.test.check.rose_tree.root.call(null,num_elements_rose),generator)),(function (roses){
return clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.shrink_vector.call(null,cljs.core.vector,roses));
}));
}));
});

clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2 = (function (generator,num_elements){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,generator))){
} else {
throw (new Error(["Assert failed: ","First arg to vector must be a generator","\n","(generator? generator)"].join('')));
}

return cljs.core.apply.call(null,clojure.test.check.generators.tuple,cljs.core.repeat.call(null,num_elements,generator));
});

clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3 = (function (generator,min_elements,max_elements){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,generator))){
} else {
throw (new Error(["Assert failed: ","First arg to vector must be a generator","\n","(generator? generator)"].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.choose.call(null,min_elements,max_elements),(function (num_elements_rose){
return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.gen_tuple.call(null,cljs.core.repeat.call(null,clojure.test.check.rose_tree.root.call(null,num_elements_rose),generator)),(function (roses){
return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.shrink_vector.call(null,cljs.core.vector,roses)),(function (rose){
return clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.filter.call(null,(function (v){
return ((cljs.core.count.call(null,v) >= min_elements)) && ((cljs.core.count.call(null,v) <= max_elements));
}),rose));
}));
}));
}));
});

clojure.test.check.generators.vector.cljs$lang$maxFixedArity = 3;

/**
 * Like `vector`, but generates lists.
 */
clojure.test.check.generators.list = (function clojure$test$check$generators$list(generator){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,generator))){
} else {
throw (new Error(["Assert failed: ","First arg to list must be a generator","\n","(generator? generator)"].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.sized.call(null,(function (p1__48375_SHARP_){
return clojure.test.check.generators.choose.call(null,(0),p1__48375_SHARP_);
})),(function (num_elements_rose){
return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.gen_tuple.call(null,cljs.core.repeat.call(null,clojure.test.check.rose_tree.root.call(null,num_elements_rose),generator)),(function (roses){
return clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.shrink_vector.call(null,cljs.core.list,roses));
}));
}));
});
clojure.test.check.generators.swap = (function clojure$test$check$generators$swap(coll,p__48376){
var vec__48377 = p__48376;
var i1 = cljs.core.nth.call(null,vec__48377,(0),null);
var i2 = cljs.core.nth.call(null,vec__48377,(1),null);
return cljs.core.assoc.call(null,coll,i2,coll.call(null,i1),i1,coll.call(null,i2));
});
/**
 * Create a generator that generates random permutations of
 *   `coll`. Shrinks toward the original collection: `coll`. `coll` will
 *   be coerced to a vector.
 */
clojure.test.check.generators.shuffle = (function clojure$test$check$generators$shuffle(coll){
var coll__$1 = ((cljs.core.vector_QMARK_.call(null,coll))?coll:cljs.core.vec.call(null,coll));
var index_gen = clojure.test.check.generators.choose.call(null,(0),(cljs.core.count.call(null,coll__$1) - (1)));
return clojure.test.check.generators.fmap.call(null,((function (coll__$1,index_gen){
return (function (p1__48380_SHARP_){
return cljs.core.reduce.call(null,clojure.test.check.generators.swap,coll__$1,p1__48380_SHARP_);
});})(coll__$1,index_gen))
,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.tuple.call(null,index_gen,index_gen),(0),((2) * cljs.core.count.call(null,coll__$1))));
});
/**
 * Like clojure.core/hash-map, except the values are generators.
 * Returns a generator that makes maps with the supplied keys and
 * values generated using the supplied generators.
 * 
 *     (gen/sample (gen/hash-map :a gen/boolean :b gen/nat))
 *     => ({:a false, :b 0}
 *         {:a true,  :b 1}
 *         {:a false, :b 2}
 *         {:a true,  :b 2}
 *         {:a false, :b 4}
 *         {:a false, :b 2}
 *         {:a true,  :b 3}
 *         {:a true,  :b 4}
 *         {:a false, :b 1}
 *         {:a false, :b 0})
 */
clojure.test.check.generators.hash_map = (function clojure$test$check$generators$hash_map(var_args){
var args__38211__auto__ = [];
var len__38204__auto___48383 = arguments.length;
var i__38205__auto___48384 = (0);
while(true){
if((i__38205__auto___48384 < len__38204__auto___48383)){
args__38211__auto__.push((arguments[i__38205__auto___48384]));

var G__48385 = (i__38205__auto___48384 + (1));
i__38205__auto___48384 = G__48385;
continue;
} else {
}
break;
}

var argseq__38212__auto__ = ((((0) < args__38211__auto__.length))?(new cljs.core.IndexedSeq(args__38211__auto__.slice((0)),(0),null)):null);
return clojure.test.check.generators.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__38212__auto__);
});

clojure.test.check.generators.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var ks = cljs.core.take_nth.call(null,(2),kvs);
var vs = cljs.core.take_nth.call(null,(2),cljs.core.rest.call(null,kvs));
if(cljs.core.every_QMARK_.call(null,clojure.test.check.generators.generator_QMARK_,vs)){
} else {
throw (new Error(["Assert failed: ","Value args to hash-map must be generators","\n","(every? generator? vs)"].join('')));
}

return clojure.test.check.generators.fmap.call(null,((function (ks,vs){
return (function (p1__48381_SHARP_){
return cljs.core.zipmap.call(null,ks,p1__48381_SHARP_);
});})(ks,vs))
,cljs.core.apply.call(null,clojure.test.check.generators.tuple,vs));
});

clojure.test.check.generators.hash_map.cljs$lang$maxFixedArity = (0);

clojure.test.check.generators.hash_map.cljs$lang$applyTo = (function (seq48382){
return clojure.test.check.generators.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48382));
});

clojure.test.check.generators.transient_set_contains_QMARK_ = (function clojure$test$check$generators$transient_set_contains_QMARK_(s,k){
return !((cljs.core._lookup.call(null,s,k) == null));
});
/**
 * Returns a rose tree.
 */
clojure.test.check.generators.coll_distinct_by_STAR_ = (function clojure$test$check$generators$coll_distinct_by_STAR_(empty_coll,key_fn,shuffle_fn,gen,rng,size,num_elements,min_elements,max_tries,ex_fn){
if(cljs.core.truth_(gen)){
} else {
throw (new Error("Assert failed: gen"));
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(gen))){
} else {
throw (new Error("Assert failed: (:gen gen)"));
}

var rose_trees = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var s = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
var rng__$1 = rng;
var size__$1 = size;
var tries = (0);
while(true){
if((cljs.core._EQ_.call(null,max_tries,tries)) && ((cljs.core.count.call(null,rose_trees) < min_elements))){
throw ex_fn.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gen","gen",142575302),gen,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),max_tries,new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),num_elements], null));
} else {
if((cljs.core._EQ_.call(null,max_tries,tries)) || (cljs.core._EQ_.call(null,cljs.core.count.call(null,rose_trees),num_elements))){
return clojure.test.check.rose_tree.shrink_vector.call(null,((function (rose_trees,s,rng__$1,size__$1,tries){
return (function() { 
var G__48390__delegate = function (rest__48386_SHARP_){
return cljs.core.into.call(null,empty_coll,rest__48386_SHARP_);
};
var G__48390 = function (var_args){
var rest__48386_SHARP_ = null;
if (arguments.length > 0) {
var G__48391__i = 0, G__48391__a = new Array(arguments.length -  0);
while (G__48391__i < G__48391__a.length) {G__48391__a[G__48391__i] = arguments[G__48391__i + 0]; ++G__48391__i;}
  rest__48386_SHARP_ = new cljs.core.IndexedSeq(G__48391__a,0,null);
} 
return G__48390__delegate.call(this,rest__48386_SHARP_);};
G__48390.cljs$lang$maxFixedArity = 0;
G__48390.cljs$lang$applyTo = (function (arglist__48392){
var rest__48386_SHARP_ = cljs.core.seq(arglist__48392);
return G__48390__delegate(rest__48386_SHARP_);
});
G__48390.cljs$core$IFn$_invoke$arity$variadic = G__48390__delegate;
return G__48390;
})()
;})(rose_trees,s,rng__$1,size__$1,tries))
,shuffle_fn.call(null,rng__$1,cljs.core.persistent_BANG_.call(null,rose_trees)));
} else {
var vec__48387 = clojure.test.check.random.split.call(null,rng__$1);
var rng1 = cljs.core.nth.call(null,vec__48387,(0),null);
var rng2 = cljs.core.nth.call(null,vec__48387,(1),null);
var rose = clojure.test.check.generators.call_gen.call(null,gen,rng1,size__$1);
var root = clojure.test.check.rose_tree.root.call(null,rose);
var k = key_fn.call(null,root);
if(cljs.core.truth_(clojure.test.check.generators.transient_set_contains_QMARK_.call(null,s,k))){
var G__48393 = rose_trees;
var G__48394 = s;
var G__48395 = rng2;
var G__48396 = (size__$1 + (1));
var G__48397 = (tries + (1));
rose_trees = G__48393;
s = G__48394;
rng__$1 = G__48395;
size__$1 = G__48396;
tries = G__48397;
continue;
} else {
var G__48398 = cljs.core.conj_BANG_.call(null,rose_trees,rose);
var G__48399 = cljs.core.conj_BANG_.call(null,s,k);
var G__48400 = rng2;
var G__48401 = size__$1;
var G__48402 = (0);
rose_trees = G__48398;
s = G__48399;
rng__$1 = G__48400;
size__$1 = G__48401;
tries = G__48402;
continue;
}

}
}
break;
}
});
/**
 * Like clojure.core/distinct? but takes a collection instead of varargs,
 *   and returns true for empty collections.
 */
clojure.test.check.generators.distinct_by_QMARK_ = (function clojure$test$check$generators$distinct_by_QMARK_(f,coll){
var or__36925__auto__ = cljs.core.empty_QMARK_.call(null,coll);
if(or__36925__auto__){
return or__36925__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,cljs.core.map.call(null,f,coll));
}
});
/**
 * Returns a shuffled version of coll according to the rng.
 * 
 *   Note that this is not a generator, it is just a utility function.
 */
clojure.test.check.generators.the_shuffle_fn = (function clojure$test$check$generators$the_shuffle_fn(rng,coll){
var empty_coll = cljs.core.empty.call(null,coll);
var v = cljs.core.vec.call(null,coll);
var card = cljs.core.count.call(null,coll);
var dec_card = (card - (1));
return cljs.core.into.call(null,empty_coll,cljs.core.first.call(null,cljs.core.reduce.call(null,((function (empty_coll,v,card,dec_card){
return (function (p__48403,idx){
var vec__48404 = p__48403;
var v__$1 = cljs.core.nth.call(null,vec__48404,(0),null);
var rng__$1 = cljs.core.nth.call(null,vec__48404,(1),null);
var vec__48407 = clojure.test.check.random.split.call(null,rng__$1);
var rng1 = cljs.core.nth.call(null,vec__48407,(0),null);
var rng2 = cljs.core.nth.call(null,vec__48407,(1),null);
var swap_idx = clojure.test.check.generators.rand_range.call(null,rng1,idx,dec_card);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.swap.call(null,v__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,swap_idx], null)),rng2], null);
});})(empty_coll,v,card,dec_card))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,rng], null),cljs.core.range.call(null,card))));
});
clojure.test.check.generators.coll_distinct_by = (function clojure$test$check$generators$coll_distinct_by(empty_coll,key_fn,allows_dupes_QMARK_,ordered_QMARK_,gen,p__48417){
var map__48418 = p__48417;
var map__48418__$1 = ((((!((map__48418 == null)))?((((map__48418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48418.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48418):map__48418);
var num_elements = cljs.core.get.call(null,map__48418__$1,new cljs.core.Keyword(null,"num-elements","num-elements",1960422107));
var min_elements = cljs.core.get.call(null,map__48418__$1,new cljs.core.Keyword(null,"min-elements","min-elements",949370780));
var max_elements = cljs.core.get.call(null,map__48418__$1,new cljs.core.Keyword(null,"max-elements","max-elements",433034073));
var max_tries = cljs.core.get.call(null,map__48418__$1,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(10));
var ex_fn = cljs.core.get.call(null,map__48418__$1,new cljs.core.Keyword(null,"ex-fn","ex-fn",-284925510),((function (map__48418,map__48418__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__48410_SHARP_){
return cljs.core.ex_info.call(null,"Couldn't generate enough distinct elements!",p1__48410_SHARP_);
});})(map__48418,map__48418__$1,num_elements,min_elements,max_elements,max_tries))
);
var shuffle_fn = (cljs.core.truth_(ordered_QMARK_)?clojure.test.check.generators.the_shuffle_fn:((function (map__48418,map__48418__$1,num_elements,min_elements,max_elements,max_tries,ex_fn){
return (function (_rng,coll){
return coll;
});})(map__48418,map__48418__$1,num_elements,min_elements,max_elements,max_tries,ex_fn))
);
var hard_min_elements = (function (){var or__36925__auto__ = num_elements;
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
var or__36925__auto____$1 = min_elements;
if(cljs.core.truth_(or__36925__auto____$1)){
return or__36925__auto____$1;
} else {
return (1);
}
}
})();
if(cljs.core.truth_(num_elements)){
var size_pred = ((function (shuffle_fn,hard_min_elements,map__48418,map__48418__$1,num_elements,min_elements,max_elements,max_tries,ex_fn){
return (function (p1__48411_SHARP_){
return cljs.core._EQ_.call(null,num_elements,cljs.core.count.call(null,p1__48411_SHARP_));
});})(shuffle_fn,hard_min_elements,map__48418,map__48418__$1,num_elements,min_elements,max_elements,max_tries,ex_fn))
;
if(((min_elements == null)) && ((max_elements == null))){
} else {
throw (new Error("Assert failed: (and (nil? min-elements) (nil? max-elements))"));
}

return clojure.test.check.generators.make_gen.call(null,((function (size_pred,shuffle_fn,hard_min_elements,map__48418,map__48418__$1,num_elements,min_elements,max_elements,max_tries,ex_fn){
return (function (rng,gen_size){
return clojure.test.check.rose_tree.filter.call(null,(cljs.core.truth_(allows_dupes_QMARK_)?cljs.core.every_pred.call(null,size_pred,((function (size_pred,shuffle_fn,hard_min_elements,map__48418,map__48418__$1,num_elements,min_elements,max_elements,max_tries,ex_fn){
return (function (p1__48412_SHARP_){
return clojure.test.check.generators.distinct_by_QMARK_.call(null,key_fn,p1__48412_SHARP_);
});})(size_pred,shuffle_fn,hard_min_elements,map__48418,map__48418__$1,num_elements,min_elements,max_elements,max_tries,ex_fn))
):size_pred),clojure.test.check.generators.coll_distinct_by_STAR_.call(null,empty_coll,key_fn,shuffle_fn,gen,rng,gen_size,num_elements,hard_min_elements,max_tries,ex_fn));
});})(size_pred,shuffle_fn,hard_min_elements,map__48418,map__48418__$1,num_elements,min_elements,max_elements,max_tries,ex_fn))
);
} else {
var min_elements__$1 = (function (){var or__36925__auto__ = min_elements;
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
return (0);
}
})();
var size_pred = (cljs.core.truth_(max_elements)?((function (min_elements__$1,shuffle_fn,hard_min_elements,map__48418,map__48418__$1,num_elements,min_elements,max_elements,max_tries,ex_fn){
return (function (p1__48413_SHARP_){
return ((min_elements__$1 <= cljs.core.count.call(null,p1__48413_SHARP_))) && ((cljs.core.count.call(null,p1__48413_SHARP_) <= max_elements));
});})(min_elements__$1,shuffle_fn,hard_min_elements,map__48418,map__48418__$1,num_elements,min_elements,max_elements,max_tries,ex_fn))
:((function (min_elements__$1,shuffle_fn,hard_min_elements,map__48418,map__48418__$1,num_elements,min_elements,max_elements,max_tries,ex_fn){
return (function (p1__48414_SHARP_){
return (min_elements__$1 <= cljs.core.count.call(null,p1__48414_SHARP_));
});})(min_elements__$1,shuffle_fn,hard_min_elements,map__48418,map__48418__$1,num_elements,min_elements,max_elements,max_tries,ex_fn))
);
return clojure.test.check.generators.gen_bind.call(null,(cljs.core.truth_(max_elements)?clojure.test.check.generators.choose.call(null,min_elements__$1,max_elements):clojure.test.check.generators.sized.call(null,((function (min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__48418,map__48418__$1,num_elements,min_elements,max_elements,max_tries,ex_fn){
return (function (p1__48415_SHARP_){
return clojure.test.check.generators.choose.call(null,min_elements__$1,(min_elements__$1 + p1__48415_SHARP_));
});})(min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__48418,map__48418__$1,num_elements,min_elements,max_elements,max_tries,ex_fn))
)),((function (min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__48418,map__48418__$1,num_elements,min_elements,max_elements,max_tries,ex_fn){
return (function (num_elements_rose){
var num_elements__$1 = clojure.test.check.rose_tree.root.call(null,num_elements_rose);
return clojure.test.check.generators.make_gen.call(null,((function (num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__48418,map__48418__$1,num_elements,min_elements,max_elements,max_tries,ex_fn){
return (function (rng,gen_size){
return clojure.test.check.rose_tree.filter.call(null,(cljs.core.truth_(allows_dupes_QMARK_)?cljs.core.every_pred.call(null,size_pred,((function (num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__48418,map__48418__$1,num_elements,min_elements,max_elements,max_tries,ex_fn){
return (function (p1__48416_SHARP_){
return clojure.test.check.generators.distinct_by_QMARK_.call(null,key_fn,p1__48416_SHARP_);
});})(num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__48418,map__48418__$1,num_elements,min_elements,max_elements,max_tries,ex_fn))
):size_pred),clojure.test.check.generators.coll_distinct_by_STAR_.call(null,empty_coll,key_fn,shuffle_fn,gen,rng,gen_size,num_elements__$1,hard_min_elements,max_tries,ex_fn));
});})(num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__48418,map__48418__$1,num_elements,min_elements,max_elements,max_tries,ex_fn))
);
});})(min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__48418,map__48418__$1,num_elements,min_elements,max_elements,max_tries,ex_fn))
);
}
});
/**
 * Generates a vector of elements from the given generator, with the
 *   guarantee that the elements will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as `such-that`.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 *  :ex-fn         a function of one arg that will be called if test.check cannot
 *                 generate enough distinct values; it will be passed a map with
 *                 `:gen`, `:num-elements`, and `:max-tries` and should return an
 *                 exception
 */
clojure.test.check.generators.vector_distinct = (function clojure$test$check$generators$vector_distinct(var_args){
var G__48421 = arguments.length;
switch (G__48421) {
case 1:
return clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.vector_distinct.call(null,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error(["Assert failed: ","First arg to vector-distinct must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.identity,true,true,gen,opts);
});

clojure.test.check.generators.vector_distinct.cljs$lang$maxFixedArity = 2;

/**
 * Generates a list of elements from the given generator, with the
 *   guarantee that the elements will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as `such-that`.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated list
 *  :min-elements  the min size of generated list
 *  :max-elements  the max size of generated list
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 *  :ex-fn         a function of one arg that will be called if test.check cannot
 *                 generate enough distinct values; it will be passed a map with
 *                 `:gen`, `:num-elements`, and `:max-tries` and should return an
 *                 exception
 */
clojure.test.check.generators.list_distinct = (function clojure$test$check$generators$list_distinct(var_args){
var G__48424 = arguments.length;
switch (G__48424) {
case 1:
return clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.list_distinct.call(null,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error(["Assert failed: ","First arg to list-distinct must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by.call(null,cljs.core.List.EMPTY,cljs.core.identity,true,true,gen,opts);
});

clojure.test.check.generators.list_distinct.cljs$lang$maxFixedArity = 2;

/**
 * Generates a vector of elements from the given generator, with the
 *   guarantee that (map key-fn the-vector) will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as `such-that`.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 *  :ex-fn         a function of one arg that will be called if test.check cannot
 *                 generate enough distinct values; it will be passed a map with
 *                 `:gen`, `:num-elements`, and `:max-tries` and should return an
 *                 exception
 */
clojure.test.check.generators.vector_distinct_by = (function clojure$test$check$generators$vector_distinct_by(var_args){
var G__48427 = arguments.length;
switch (G__48427) {
case 2:
return clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (key_fn,gen){
return clojure.test.check.generators.vector_distinct_by.call(null,key_fn,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$3 = (function (key_fn,gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error(["Assert failed: ","First arg to vector-distinct-by must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by.call(null,cljs.core.PersistentVector.EMPTY,key_fn,true,true,gen,opts);
});

clojure.test.check.generators.vector_distinct_by.cljs$lang$maxFixedArity = 3;

/**
 * Generates a list of elements from the given generator, with the
 *   guarantee that (map key-fn the-list) will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as `such-that`.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated list
 *  :min-elements  the min size of generated list
 *  :max-elements  the max size of generated list
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 *  :ex-fn         a function of one arg that will be called if test.check cannot
 *                 generate enough distinct values; it will be passed a map with
 *                 `:gen`, `:num-elements`, and `:max-tries` and should return an
 *                 exception
 */
clojure.test.check.generators.list_distinct_by = (function clojure$test$check$generators$list_distinct_by(var_args){
var G__48430 = arguments.length;
switch (G__48430) {
case 2:
return clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (key_fn,gen){
return clojure.test.check.generators.list_distinct_by.call(null,key_fn,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$3 = (function (key_fn,gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error(["Assert failed: ","First arg to list-distinct-by must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by.call(null,cljs.core.List.EMPTY,key_fn,true,true,gen,opts);
});

clojure.test.check.generators.list_distinct_by.cljs$lang$maxFixedArity = 3;

/**
 * Generates a set of elements from the given generator.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as `such-that`.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated set
 *  :min-elements  the min size of generated set
 *  :max-elements  the max size of generated set
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 *  :ex-fn         a function of one arg that will be called if test.check cannot
 *                 generate enough distinct values; it will be passed a map with
 *                 `:gen`, `:num-elements`, and `:max-tries` and should return an
 *                 exception
 */
clojure.test.check.generators.set = (function clojure$test$check$generators$set(var_args){
var G__48433 = arguments.length;
switch (G__48433) {
case 1:
return clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.set.call(null,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error(["Assert failed: ","First arg to set must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.identity,false,false,gen,opts);
});

clojure.test.check.generators.set.cljs$lang$maxFixedArity = 2;

/**
 * Generates a sorted set of elements from the given generator.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as `such-that`.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated set
 *  :min-elements  the min size of generated set
 *  :max-elements  the max size of generated set
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 *  :ex-fn         a function of one arg that will be called if test.check cannot
 *                 generate enough distinct values; it will be passed a map with
 *                 `:gen`, `:num-elements`, and `:max-tries` and should return an
 *                 exception
 */
clojure.test.check.generators.sorted_set = (function clojure$test$check$generators$sorted_set(var_args){
var G__48436 = arguments.length;
switch (G__48436) {
case 1:
return clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.sorted_set.call(null,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error(["Assert failed: ","First arg to sorted-set must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by.call(null,cljs.core.sorted_set.call(null),cljs.core.identity,false,false,gen,opts);
});

clojure.test.check.generators.sorted_set.cljs$lang$maxFixedArity = 2;

/**
 * Create a generator that generates maps, with keys chosen from
 *   `key-gen` and values chosen from `val-gen`.
 * 
 *   If the key generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as `such-that`.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated maps
 *  :min-elements  the min size of generated maps
 *  :max-elements  the max size of generated maps
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 *  :ex-fn         a function of one arg that will be called if test.check cannot
 *                 generate enough distinct keys; it will be passed a map with
 *                 `:gen` (the key-gen), `:num-elements`, and `:max-tries` and
 *                 should return an exception
 */
clojure.test.check.generators.map = (function clojure$test$check$generators$map(var_args){
var G__48439 = arguments.length;
switch (G__48439) {
case 2:
return clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$2 = (function (key_gen,val_gen){
return clojure.test.check.generators.map.call(null,key_gen,val_gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$3 = (function (key_gen,val_gen,opts){
return clojure.test.check.generators.coll_distinct_by.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.first,false,false,clojure.test.check.generators.tuple.call(null,key_gen,val_gen),opts);
});

clojure.test.check.generators.map.cljs$lang$maxFixedArity = 3;

/**
 * Generates a single uniformly random long, does not shrink.
 */
clojure.test.check.generators.gen_raw_long = clojure.test.check.generators.make_gen.call(null,(function (rnd,_size){
return clojure.test.check.rose_tree.pure.call(null,clojure.test.check.random.rand_long.call(null,rnd));
}));
clojure.test.check.generators.MAX_INTEGER = (cljs.core.apply.call(null,cljs.core._STAR_,cljs.core.repeat.call(null,(53),(2))) - (1));
clojure.test.check.generators.MIN_INTEGER = (- clojure.test.check.generators.MAX_INTEGER);
clojure.test.check.generators.abs = (function clojure$test$check$generators$abs(x){
return Math.abs(x);
});
clojure.test.check.generators.long__GT_large_integer = (function clojure$test$check$generators$long__GT_large_integer(bit_count,x,min,max){
var res = (function (){var G__48441 = x.shiftRight(((64) - bit_count)).toNumber();
if((min === (0))){
return clojure.test.check.generators.abs.call(null,G__48441);
} else {
return G__48441;
}
})();
while(true){
if(((min <= res)) && ((res <= max))){
return res;
} else {
var res_SINGLEQUOTE_ = (- res);
if(((min <= res_SINGLEQUOTE_)) && ((res_SINGLEQUOTE_ <= max))){
return res_SINGLEQUOTE_;
} else {
var G__48443 = ((function (){var G__48442 = res;
if(cljs.core.odd_QMARK_.call(null,res)){
return (((res < (0)))?cljs.core.inc:cljs.core.dec).call(null,G__48442);
} else {
return G__48442;
}
})() / (2));
res = G__48443;
continue;
}
}
break;
}
});
/**
 * Like large-integer*, but assumes range includes zero.
 */
clojure.test.check.generators.large_integer_STAR__STAR_ = (function clojure$test$check$generators$large_integer_STAR__STAR_(min,max){
return clojure.test.check.generators.sized.call(null,(function (size){
var size__$1 = (function (){var x__37277__auto__ = size;
var y__37278__auto__ = (1);
return ((x__37277__auto__ > y__37278__auto__) ? x__37277__auto__ : y__37278__auto__);
})();
var max_bit_count = (function (){var x__37284__auto__ = size__$1;
var y__37285__auto__ = (54);
return ((x__37284__auto__ < y__37285__auto__) ? x__37284__auto__ : y__37285__auto__);
})();
return clojure.test.check.generators.gen_fmap.call(null,((function (size__$1,max_bit_count){
return (function (rose){
var vec__48444 = clojure.test.check.rose_tree.root.call(null,rose);
var bit_count = cljs.core.nth.call(null,vec__48444,(0),null);
var x = cljs.core.nth.call(null,vec__48444,(1),null);
return clojure.test.check.generators.int_rose_tree.call(null,clojure.test.check.generators.long__GT_large_integer.call(null,bit_count,x,min,max));
});})(size__$1,max_bit_count))
,clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.choose.call(null,(1),max_bit_count),clojure.test.check.generators.gen_raw_long));
}));
});
/**
 * Like large-integer, but accepts options:
 * 
 *  :min  the minimum integer (inclusive)
 *  :max  the maximum integer (inclusive)
 * 
 *   Both :min and :max are optional.
 * 
 *    (gen/sample (gen/large-integer* {:min 9000 :max 10000}))
 *    => (9000 9001 9001 9002 9000 9003 9006 9030 9005 9044)
 */
clojure.test.check.generators.large_integer_STAR_ = (function clojure$test$check$generators$large_integer_STAR_(p__48450){
var map__48451 = p__48450;
var map__48451__$1 = ((((!((map__48451 == null)))?((((map__48451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48451.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48451):map__48451);
var min = cljs.core.get.call(null,map__48451__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__48451__$1,new cljs.core.Keyword(null,"max","max",61366548));
var min__$1 = (function (){var or__36925__auto__ = min;
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
return clojure.test.check.generators.MIN_INTEGER;
}
})();
var max__$1 = (function (){var or__36925__auto__ = max;
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
return clojure.test.check.generators.MAX_INTEGER;
}
})();
if((min__$1 <= max__$1)){
} else {
throw (new Error("Assert failed: (<= min max)"));
}

return clojure.test.check.generators.such_that.call(null,((function (min__$1,max__$1,map__48451,map__48451__$1,min,max){
return (function (p1__48447_SHARP_){
return ((min__$1 <= p1__48447_SHARP_)) && ((p1__48447_SHARP_ <= max__$1));
});})(min__$1,max__$1,map__48451,map__48451__$1,min,max))
,((((min__$1 <= (0))) && (((0) <= max__$1)))?clojure.test.check.generators.large_integer_STAR__STAR_.call(null,min__$1,max__$1):(((max__$1 < (0)))?clojure.test.check.generators.fmap.call(null,((function (min__$1,max__$1,map__48451,map__48451__$1,min,max){
return (function (p1__48448_SHARP_){
return (max__$1 + p1__48448_SHARP_);
});})(min__$1,max__$1,map__48451,map__48451__$1,min,max))
,clojure.test.check.generators.large_integer_STAR__STAR_.call(null,(min__$1 - max__$1),(0))):clojure.test.check.generators.fmap.call(null,((function (min__$1,max__$1,map__48451,map__48451__$1,min,max){
return (function (p1__48449_SHARP_){
return (min__$1 + p1__48449_SHARP_);
});})(min__$1,max__$1,map__48451,map__48451__$1,min,max))
,clojure.test.check.generators.large_integer_STAR__STAR_.call(null,(0),(max__$1 - min__$1))))));
});
/**
 * Generates a platform-native integer from the full available range
 *   (in clj, 64-bit Longs, and in cljs, numbers between -(2^53 - 1) and
 *   (2^53 - 1)).
 * 
 *   Use large-integer* for more control.
 */
clojure.test.check.generators.large_integer = clojure.test.check.generators.large_integer_STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
clojure.test.check.generators.POS_INFINITY = Number.POSITIVE_INFINITY;
clojure.test.check.generators.NEG_INFINITY = Number.NEGATIVE_INFINITY;
clojure.test.check.generators.MAX_POS_VALUE = Number.MAX_VALUE;
clojure.test.check.generators.MIN_NEG_VALUE = (- clojure.test.check.generators.MAX_POS_VALUE);
clojure.test.check.generators.NAN = Number.NaN;
/**
 * Generates an integer uniformly in the range 0..(2^bit-count-1).
 */
clojure.test.check.generators.uniform_integer = (function clojure$test$check$generators$uniform_integer(bit_count){
if((bit_count <= (32))){
return clojure.test.check.generators.choose.call(null,(0),(function (){var G__48453 = cljs.core.long$.call(null,bit_count);
switch (G__48453) {
case (32):
return (4294967295);

break;
case (31):
return (2147483647);

break;
default:
return (((1) << bit_count) - (1));

}
})());
} else {
return clojure.test.check.generators.fmap.call(null,(function (p__48454){
var vec__48455 = p__48454;
var upper = cljs.core.nth.call(null,vec__48455,(0),null);
var lower = cljs.core.nth.call(null,vec__48455,(1),null);
return ((upper * (4294967296)) + lower);
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.uniform_integer.call(null,(bit_count - (32))),clojure.test.check.generators.uniform_integer.call(null,(32))));
}
});
clojure.test.check.generators.scalb = (function clojure$test$check$generators$scalb(x,exp){
return (x * Math.pow((2),exp));
});
/**
 * Bit-reverses an integer in the range [0, 2^52).
 */
clojure.test.check.generators.fifty_two_bit_reverse = (function clojure$test$check$generators$fifty_two_bit_reverse(n){
var out = (0);
var n__$1 = n;
var out_shifter = Math.pow((2),(52));
while(true){
if((n__$1 < (1))){
return (out * out_shifter);
} else {
var G__48459 = ((out * (2)) + (n__$1 & (1)));
var G__48460 = (n__$1 / (2));
var G__48461 = (out_shifter / (2));
out = G__48459;
n__$1 = G__48460;
out_shifter = G__48461;
continue;
}
break;
}
});
/**
 * Generates a 52-bit non-negative integer that shrinks toward having
 *   fewer lower-order bits (and shrinks to 0 if possible).
 */
clojure.test.check.generators.backwards_shrinking_significand = clojure.test.check.generators.fmap.call(null,clojure.test.check.generators.fifty_two_bit_reverse,clojure.test.check.generators.sized.call(null,(function (size){
return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.choose.call(null,(0),(function (){var x__37284__auto__ = size;
var y__37285__auto__ = (52);
return ((x__37284__auto__ < y__37285__auto__) ? x__37284__auto__ : y__37285__auto__);
})()),(function (rose){
return clojure.test.check.generators.uniform_integer.call(null,clojure.test.check.rose_tree.root.call(null,rose));
}));
})));
clojure.test.check.generators.get_exponent = (function clojure$test$check$generators$get_exponent(x){
if((x === (0))){
return (-1023);
} else {
var x__$1 = Math.abs(x);
var res = Math.floor((Math.log(x__$1) * Math.LOG2E));
var t = clojure.test.check.generators.scalb.call(null,x__$1,(- res));
if((t < (1))){
return (res - (1));
} else {
if(((2) <= t)){
return (res + (1));
} else {
return res;

}
}
}
});
/**
 * Generates [exp sign], where exp is in [-1023, 1023] and sign is 1
 *   or -1. Only generates values for exp and sign for which there are
 *   doubles within the given bounds.
 */
clojure.test.check.generators.double_exp_and_sign = (function clojure$test$check$generators$double_exp_and_sign(lower_bound,upper_bound){
var gen_exp = (function clojure$test$check$generators$double_exp_and_sign_$_gen_exp(lb,ub){
return clojure.test.check.generators.sized.call(null,(function (size){
var qs8 = ((1) << cljs.core.quot.call(null,(function (){var x__37284__auto__ = (200);
var y__37285__auto__ = size;
return ((x__37284__auto__ < y__37285__auto__) ? x__37284__auto__ : y__37285__auto__);
})(),(8)));
if(((lb <= (0))) && (((0) <= ub))){
return clojure.test.check.generators.choose.call(null,(function (){var x__37277__auto__ = lb;
var y__37278__auto__ = (- qs8);
return ((x__37277__auto__ > y__37278__auto__) ? x__37277__auto__ : y__37278__auto__);
})(),(function (){var x__37284__auto__ = ub;
var y__37285__auto__ = qs8;
return ((x__37284__auto__ < y__37285__auto__) ? x__37284__auto__ : y__37285__auto__);
})());
} else {
if((ub < (0))){
return clojure.test.check.generators.choose.call(null,(function (){var x__37277__auto__ = lb;
var y__37278__auto__ = (ub - qs8);
return ((x__37277__auto__ > y__37278__auto__) ? x__37277__auto__ : y__37278__auto__);
})(),ub);
} else {
return clojure.test.check.generators.choose.call(null,lb,(function (){var x__37284__auto__ = ub;
var y__37285__auto__ = (lb + qs8);
return ((x__37284__auto__ < y__37285__auto__) ? x__37284__auto__ : y__37285__auto__);
})());

}
}
}));
});
if(((lower_bound == null)) && ((upper_bound == null))){
return clojure.test.check.generators.tuple.call(null,gen_exp.call(null,(-1023),(1023)),clojure.test.check.generators.elements.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,-1.0], null)));
} else {
var lower_bound__$1 = (function (){var or__36925__auto__ = lower_bound;
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
return clojure.test.check.generators.MIN_NEG_VALUE;
}
})();
var upper_bound__$1 = (function (){var or__36925__auto__ = upper_bound;
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
return clojure.test.check.generators.MAX_POS_VALUE;
}
})();
var lbexp = (function (){var x__37277__auto__ = (-1023);
var y__37278__auto__ = clojure.test.check.generators.get_exponent.call(null,lower_bound__$1);
return ((x__37277__auto__ > y__37278__auto__) ? x__37277__auto__ : y__37278__auto__);
})();
var ubexp = (function (){var x__37277__auto__ = (-1023);
var y__37278__auto__ = clojure.test.check.generators.get_exponent.call(null,upper_bound__$1);
return ((x__37277__auto__ > y__37278__auto__) ? x__37277__auto__ : y__37278__auto__);
})();
if((0.0 <= lower_bound__$1)){
return clojure.test.check.generators.tuple.call(null,gen_exp.call(null,lbexp,ubexp),clojure.test.check.generators.return$.call(null,1.0));
} else {
if((upper_bound__$1 <= 0.0)){
return clojure.test.check.generators.tuple.call(null,gen_exp.call(null,ubexp,lbexp),clojure.test.check.generators.return$.call(null,-1.0));
} else {
return clojure.test.check.generators.fmap.call(null,((function (lower_bound__$1,upper_bound__$1,lbexp,ubexp){
return (function (p__48462){
var vec__48463 = p__48462;
var exp = cljs.core.nth.call(null,vec__48463,(0),null);
var sign = cljs.core.nth.call(null,vec__48463,(1),null);
var pair = vec__48463;
if((((sign < (0))) && ((lbexp < exp))) || (((sign > (0))) && ((ubexp < exp)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exp,(- sign)], null);
} else {
return pair;
}
});})(lower_bound__$1,upper_bound__$1,lbexp,ubexp))
,clojure.test.check.generators.tuple.call(null,gen_exp.call(null,(-1023),(function (){var x__37277__auto__ = ubexp;
var y__37278__auto__ = lbexp;
return ((x__37277__auto__ > y__37278__auto__) ? x__37277__auto__ : y__37278__auto__);
})()),clojure.test.check.generators.elements.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,-1.0], null))));

}
}
}
});
/**
 * Returns [low high], the smallest and largest numbers in the given
 *   range.
 */
clojure.test.check.generators.block_bounds = (function clojure$test$check$generators$block_bounds(exp,sign){
if((sign < (0))){
var vec__48466 = clojure.test.check.generators.block_bounds.call(null,exp,(- sign));
var low = cljs.core.nth.call(null,vec__48466,(0),null);
var high = cljs.core.nth.call(null,vec__48466,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- high),(- low)], null);
} else {
if(cljs.core._EQ_.call(null,(-1023),exp)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,clojure.test.check.generators.scalb.call(null,(clojure.test.check.generators.scalb.call(null,1.0,(52)) - (1)),(-1074))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.scalb.call(null,1.0,exp),clojure.test.check.generators.scalb.call(null,(clojure.test.check.generators.scalb.call(null,1.0,(52)) - (1)),(exp - (51)))], null);
}
}
});
clojure.test.check.generators.double_finite = (function clojure$test$check$generators$double_finite(lower_bound,upper_bound){
if(((lower_bound == null)) || ((upper_bound == null)) || ((lower_bound <= upper_bound))){
} else {
throw (new Error("Assert failed: (or (nil? lower-bound) (nil? upper-bound) (<= lower-bound upper-bound))"));
}

var pred = (cljs.core.truth_(lower_bound)?(cljs.core.truth_(upper_bound)?(function (p1__48469_SHARP_){
return ((lower_bound <= p1__48469_SHARP_)) && ((p1__48469_SHARP_ <= upper_bound));
}):(function (p1__48470_SHARP_){
return (lower_bound <= p1__48470_SHARP_);
})):(cljs.core.truth_(upper_bound)?(function (p1__48471_SHARP_){
return (p1__48471_SHARP_ <= upper_bound);
}):null));
var gen = clojure.test.check.generators.fmap.call(null,((function (pred){
return (function (p__48472){
var vec__48473 = p__48472;
var vec__48476 = cljs.core.nth.call(null,vec__48473,(0),null);
var exp = cljs.core.nth.call(null,vec__48476,(0),null);
var sign = cljs.core.nth.call(null,vec__48476,(1),null);
var significand = cljs.core.nth.call(null,vec__48473,(1),null);
var base = ((significand / Math.pow((2),(52))) + (1));
var x = (clojure.test.check.generators.scalb.call(null,base,exp) * sign);
if(cljs.core.truth_((function (){var or__36925__auto__ = (pred == null);
if(or__36925__auto__){
return or__36925__auto__;
} else {
return pred.call(null,x);
}
})())){
return x;
} else {
var vec__48479 = clojure.test.check.generators.block_bounds.call(null,exp,sign);
var low = cljs.core.nth.call(null,vec__48479,(0),null);
var high = cljs.core.nth.call(null,vec__48479,(1),null);
var block_lb = (function (){var G__48482 = low;
if(cljs.core.truth_(lower_bound)){
var x__37277__auto__ = G__48482;
var y__37278__auto__ = lower_bound;
return ((x__37277__auto__ > y__37278__auto__) ? x__37277__auto__ : y__37278__auto__);
} else {
return G__48482;
}
})();
var block_ub = (function (){var G__48483 = high;
if(cljs.core.truth_(upper_bound)){
var x__37284__auto__ = G__48483;
var y__37285__auto__ = upper_bound;
return ((x__37284__auto__ < y__37285__auto__) ? x__37284__auto__ : y__37285__auto__);
} else {
return G__48483;
}
})();
var x__$1 = (block_lb + ((block_ub - block_lb) * (base - (1))));
var x__37277__auto__ = (function (){var x__37284__auto__ = x__$1;
var y__37285__auto__ = block_ub;
return ((x__37284__auto__ < y__37285__auto__) ? x__37284__auto__ : y__37285__auto__);
})();
var y__37278__auto__ = block_lb;
return ((x__37277__auto__ > y__37278__auto__) ? x__37277__auto__ : y__37278__auto__);
}
});})(pred))
,clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.double_exp_and_sign.call(null,lower_bound,upper_bound),clojure.test.check.generators.backwards_shrinking_significand));
var G__48484 = gen;
if(cljs.core.truth_(pred)){
return clojure.test.check.generators.such_that.call(null,pred,G__48484);
} else {
return G__48484;
}
});
/**
 * Generates a 64-bit floating point number. Options:
 * 
 *  :infinite? - whether +/- infinity can be generated (default true)
 *  :NaN?      - whether NaN can be generated (default true)
 *  :min       - minimum value (inclusive, default none)
 *  :max       - maximum value (inclusive, default none)
 * 
 *   Note that the min/max options must be finite numbers. Supplying a
 *   min precludes -Infinity, and supplying a max precludes +Infinity.
 */
clojure.test.check.generators.double_STAR_ = (function clojure$test$check$generators$double_STAR_(p__48485){
var map__48486 = p__48485;
var map__48486__$1 = ((((!((map__48486 == null)))?((((map__48486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48486):map__48486);
var infinite_QMARK_ = cljs.core.get.call(null,map__48486__$1,new cljs.core.Keyword(null,"infinite?","infinite?",-2017886608),true);
var NaN_QMARK_ = cljs.core.get.call(null,map__48486__$1,new cljs.core.Keyword(null,"NaN?","NaN?",-1917767651),true);
var min = cljs.core.get.call(null,map__48486__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__48486__$1,new cljs.core.Keyword(null,"max","max",61366548));
var frequency_arg = (function (){var G__48488 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(95),clojure.test.check.generators.double_finite.call(null,min,max)], null)], null);
var G__48488__$1 = (((((min == null))?((max == null)) || ((0.0 <= max)):(((max == null))?(min <= 0.0):((min <= 0.0)) && ((0.0 <= max)))))?cljs.core.conj.call(null,G__48488,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,0.0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,-0.0)], null)):G__48488);
var G__48488__$2 = (cljs.core.truth_((function (){var and__36913__auto__ = infinite_QMARK_;
if(cljs.core.truth_(and__36913__auto__)){
return (max == null);
} else {
return and__36913__auto__;
}
})())?cljs.core.conj.call(null,G__48488__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,clojure.test.check.generators.POS_INFINITY)], null)):G__48488__$1);
var G__48488__$3 = (cljs.core.truth_((function (){var and__36913__auto__ = infinite_QMARK_;
if(cljs.core.truth_(and__36913__auto__)){
return (min == null);
} else {
return and__36913__auto__;
}
})())?cljs.core.conj.call(null,G__48488__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,clojure.test.check.generators.NEG_INFINITY)], null)):G__48488__$2);
if(cljs.core.truth_(NaN_QMARK_)){
return cljs.core.conj.call(null,G__48488__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,clojure.test.check.generators.NAN)], null));
} else {
return G__48488__$3;
}
})();
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,frequency_arg))){
return cljs.core.second.call(null,cljs.core.first.call(null,frequency_arg));
} else {
return clojure.test.check.generators.frequency.call(null,frequency_arg);
}
});
/**
 * Generates 64-bit floating point numbers from the entire range,
 *   including +/- infinity and NaN. Use double* for more control.
 */
clojure.test.check.generators.double$ = clojure.test.check.generators.double_STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Generates character from 0-255.
 */
clojure.test.check.generators.char$ = clojure.test.check.generators.fmap.call(null,cljs.core.char$,clojure.test.check.generators.choose.call(null,(0),(255)));
/**
 * Generate only ascii character.
 */
clojure.test.check.generators.char_ascii = clojure.test.check.generators.fmap.call(null,cljs.core.char$,clojure.test.check.generators.choose.call(null,(32),(126)));
/**
 * Generate alphanumeric characters.
 */
clojure.test.check.generators.char_alphanumeric = clojure.test.check.generators.fmap.call(null,cljs.core.char$,clojure.test.check.generators.one_of.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.choose.call(null,(48),(57)),clojure.test.check.generators.choose.call(null,(65),(90)),clojure.test.check.generators.choose.call(null,(97),(122))], null)));
/**
 * Deprecated - use char-alphanumeric instead.
 * 
 *   Generate alphanumeric characters.
 */
clojure.test.check.generators.char_alpha_numeric = clojure.test.check.generators.char_alphanumeric;
/**
 * Generate alpha characters.
 */
clojure.test.check.generators.char_alpha = clojure.test.check.generators.fmap.call(null,cljs.core.char$,clojure.test.check.generators.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.choose.call(null,(65),(90)),clojure.test.check.generators.choose.call(null,(97),(122))], null)));
/**
 * Generate non-alphanumeric characters that can be in a symbol.
 */
clojure.test.check.generators.char_symbol_special = clojure.test.check.generators.elements.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*","+","!","-","_","?"], null));
/**
 * Generate characters that can be the char following first of a keyword.
 */
clojure.test.check.generators.char_keyword_rest = clojure.test.check.generators.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),clojure.test.check.generators.char_alphanumeric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.char_symbol_special], null)], null));
/**
 * Generate characters that can be the first char of a keyword.
 */
clojure.test.check.generators.char_keyword_first = clojure.test.check.generators.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),clojure.test.check.generators.char_alpha], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.char_symbol_special], null)], null));
/**
 * Generate strings. May generate unprintable characters.
 */
clojure.test.check.generators.string = clojure.test.check.generators.fmap.call(null,clojure.string.join,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char$));
/**
 * Generate ascii strings.
 */
clojure.test.check.generators.string_ascii = clojure.test.check.generators.fmap.call(null,clojure.string.join,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_ascii));
/**
 * Generate alphanumeric strings.
 */
clojure.test.check.generators.string_alphanumeric = clojure.test.check.generators.fmap.call(null,clojure.string.join,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_alphanumeric));
/**
 * Deprecated - use string-alphanumeric instead.
 * 
 *   Generate alphanumeric strings.
 */
clojure.test.check.generators.string_alpha_numeric = clojure.test.check.generators.string_alphanumeric;
clojure.test.check.generators.digit_QMARK_ = (function clojure$test$check$generators$digit_QMARK_(d){
return goog.string.isNumeric(d);
});
/**
 * Returns true if c is \+ or \- and d is non-nil and a digit.
 * 
 *   Symbols that start with +3 or -2 are not readable because they look
 *   like numbers.
 */
clojure.test.check.generators._PLUS__or___digit_QMARK_ = (function clojure$test$check$generators$_PLUS__or___digit_QMARK_(c,d){
return cljs.core.boolean$.call(null,(function (){var and__36913__auto__ = d;
if(cljs.core.truth_(and__36913__auto__)){
var and__36913__auto____$1 = (("+" === c)) || (("-" === c));
if(and__36913__auto____$1){
return clojure.test.check.generators.digit_QMARK_.call(null,d);
} else {
return and__36913__auto____$1;
}
} else {
return and__36913__auto__;
}
})());
});
/**
 * Generate the segment of a namespace.
 */
clojure.test.check.generators.namespace_segment = clojure.test.check.generators.fmap.call(null,(function (p__48489){
var vec__48490 = p__48489;
var c = cljs.core.nth.call(null,vec__48490,(0),null);
var cs = cljs.core.nth.call(null,vec__48490,(1),null);
return clojure.string.join.call(null,cljs.core.cons.call(null,c,cs));
}),clojure.test.check.generators.such_that.call(null,(function (p__48493){
var vec__48494 = p__48493;
var c = cljs.core.nth.call(null,vec__48494,(0),null);
var vec__48497 = cljs.core.nth.call(null,vec__48494,(1),null);
var d = cljs.core.nth.call(null,vec__48497,(0),null);
return cljs.core.not.call(null,clojure.test.check.generators._PLUS__or___digit_QMARK_.call(null,c,d));
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.char_keyword_first,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_keyword_rest))));
/**
 * Generate a namespace (or nil for no namespace).
 */
clojure.test.check.generators.namespace = clojure.test.check.generators.fmap.call(null,(function (v){
if(cljs.core.seq.call(null,v)){
return clojure.string.join.call(null,".",v);
} else {
return null;
}
}),clojure.test.check.generators.vector.call(null,clojure.test.check.generators.namespace_segment));
/**
 * Generate segments of a keyword (between \:)
 */
clojure.test.check.generators.keyword_segment_rest = clojure.test.check.generators.fmap.call(null,(function (p__48500){
var vec__48501 = p__48500;
var c = cljs.core.nth.call(null,vec__48501,(0),null);
var cs = cljs.core.nth.call(null,vec__48501,(1),null);
return clojure.string.join.call(null,cljs.core.cons.call(null,c,cs));
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.char_keyword_rest,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_keyword_rest)));
/**
 * Generate segments of a keyword that can be first (between \:)
 */
clojure.test.check.generators.keyword_segment_first = clojure.test.check.generators.fmap.call(null,(function (p__48504){
var vec__48505 = p__48504;
var c = cljs.core.nth.call(null,vec__48505,(0),null);
var cs = cljs.core.nth.call(null,vec__48505,(1),null);
return clojure.string.join.call(null,cljs.core.cons.call(null,c,cs));
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.char_keyword_first,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_keyword_rest)));
/**
 * Scales the sizing down on a keyword or symbol generator so as to
 *   make it reasonable.
 */
clojure.test.check.generators.resize_symbolish_generator = (function clojure$test$check$generators$resize_symbolish_generator(g){
return clojure.test.check.generators.scale.call(null,(function (p1__48508_SHARP_){
return cljs.core.long$.call(null,Math.pow(p1__48508_SHARP_,0.46));
}),g);
});
/**
 * Generate keywords without namespaces.
 */
clojure.test.check.generators.keyword = clojure.test.check.generators.resize_symbolish_generator.call(null,clojure.test.check.generators.fmap.call(null,(function (p__48509){
var vec__48510 = p__48509;
var c = cljs.core.nth.call(null,vec__48510,(0),null);
var cs = cljs.core.nth.call(null,vec__48510,(1),null);
return cljs.core.keyword.call(null,clojure.string.join.call(null,":",cljs.core.cons.call(null,c,cs)));
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.keyword_segment_first,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.keyword_segment_rest))));
/**
 * Generate keywords with optional namespaces.
 */
clojure.test.check.generators.keyword_ns = clojure.test.check.generators.resize_symbolish_generator.call(null,clojure.test.check.generators.fmap.call(null,(function (p__48513){
var vec__48514 = p__48513;
var ns = cljs.core.nth.call(null,vec__48514,(0),null);
var c = cljs.core.nth.call(null,vec__48514,(1),null);
var cs = cljs.core.nth.call(null,vec__48514,(2),null);
return cljs.core.keyword.call(null,ns,clojure.string.join.call(null,cljs.core.cons.call(null,c,cs)));
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.namespace,clojure.test.check.generators.char_keyword_first,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_keyword_rest))));
clojure.test.check.generators.char_symbol_first = clojure.test.check.generators.frequency.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),clojure.test.check.generators.char_alpha], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),clojure.test.check.generators.char_symbol_special], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,".")], null)], null));
clojure.test.check.generators.char_symbol_rest = clojure.test.check.generators.frequency.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),clojure.test.check.generators.char_alphanumeric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),clojure.test.check.generators.char_symbol_special], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,".")], null)], null));
/**
 * Generate symbols without namespaces.
 */
clojure.test.check.generators.symbol = clojure.test.check.generators.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),clojure.test.check.generators.resize_symbolish_generator.call(null,clojure.test.check.generators.fmap.call(null,(function (p__48517){
var vec__48518 = p__48517;
var c = cljs.core.nth.call(null,vec__48518,(0),null);
var cs = cljs.core.nth.call(null,vec__48518,(1),null);
return cljs.core.symbol.call(null,clojure.string.join.call(null,cljs.core.cons.call(null,c,cs)));
}),clojure.test.check.generators.such_that.call(null,(function (p__48521){
var vec__48522 = p__48521;
var c = cljs.core.nth.call(null,vec__48522,(0),null);
var vec__48525 = cljs.core.nth.call(null,vec__48522,(1),null);
var d = cljs.core.nth.call(null,vec__48525,(0),null);
return cljs.core.not.call(null,clojure.test.check.generators._PLUS__or___digit_QMARK_.call(null,c,d));
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.char_symbol_first,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_symbol_rest)))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,new cljs.core.Symbol(null,"/","/",-1371932971,null))], null)], null));
/**
 * Generate symbols with optional namespaces.
 */
clojure.test.check.generators.symbol_ns = clojure.test.check.generators.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),clojure.test.check.generators.resize_symbolish_generator.call(null,clojure.test.check.generators.fmap.call(null,(function (p__48528){
var vec__48529 = p__48528;
var ns = cljs.core.nth.call(null,vec__48529,(0),null);
var c = cljs.core.nth.call(null,vec__48529,(1),null);
var cs = cljs.core.nth.call(null,vec__48529,(2),null);
return cljs.core.symbol.call(null,ns,clojure.string.join.call(null,cljs.core.cons.call(null,c,cs)));
}),clojure.test.check.generators.such_that.call(null,(function (p__48532){
var vec__48533 = p__48532;
var _ = cljs.core.nth.call(null,vec__48533,(0),null);
var c = cljs.core.nth.call(null,vec__48533,(1),null);
var vec__48536 = cljs.core.nth.call(null,vec__48533,(2),null);
var d = cljs.core.nth.call(null,vec__48536,(0),null);
return cljs.core.not.call(null,clojure.test.check.generators._PLUS__or___digit_QMARK_.call(null,c,d));
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.namespace,clojure.test.check.generators.char_symbol_first,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_symbol_rest)))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,new cljs.core.Symbol(null,"/","/",-1371932971,null))], null)], null));
/**
 * Generates a `clojure.lang.Ratio`. Shrinks toward 0. Not all values generated
 *   will be ratios, as many values returned by `/` are not ratios.
 */
clojure.test.check.generators.ratio = clojure.test.check.generators.fmap.call(null,(function (p__48539){
var vec__48540 = p__48539;
var a = cljs.core.nth.call(null,vec__48540,(0),null);
var b = cljs.core.nth.call(null,vec__48540,(1),null);
return (a / b);
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.int$,clojure.test.check.generators.such_that.call(null,cljs.core.complement.call(null,cljs.core.zero_QMARK_),clojure.test.check.generators.int$)));
/**
 * Generates a random type-4 UUID. Does not shrink.
 */
clojure.test.check.generators.uuid = clojure.test.check.generators.no_shrink.call(null,clojure.test.check.generators.fmap.call(null,(function (nibbles){
var hex = (function clojure$test$check$generators$hex(idx){
return nibbles.call(null,idx).toString((16));
});
var rhex = ((nibbles.call(null,(15)) & (3)) + (8)).toString((16));
return cljs.core.uuid.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(3))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(5))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(6))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(7))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(8))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(9))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(10))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(11))),"-","4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(12))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(13))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(14))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhex),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(16))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(17))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(18))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(19))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(20))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(21))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(22))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(23))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(24))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(25))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(26))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(27))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(28))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(29))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null,(30)))].join(''));
}),clojure.test.check.generators.vector.call(null,clojure.test.check.generators.choose.call(null,(0),(15)),(31))));
clojure.test.check.generators.simple_type = clojure.test.check.generators.one_of.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.int$,clojure.test.check.generators.large_integer,clojure.test.check.generators.double$,clojure.test.check.generators.char$,clojure.test.check.generators.string,clojure.test.check.generators.ratio,clojure.test.check.generators.boolean$,clojure.test.check.generators.keyword,clojure.test.check.generators.keyword_ns,clojure.test.check.generators.symbol,clojure.test.check.generators.symbol_ns,clojure.test.check.generators.uuid], null));
clojure.test.check.generators.simple_type_printable = clojure.test.check.generators.one_of.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.int$,clojure.test.check.generators.large_integer,clojure.test.check.generators.double$,clojure.test.check.generators.char_ascii,clojure.test.check.generators.string_ascii,clojure.test.check.generators.ratio,clojure.test.check.generators.boolean$,clojure.test.check.generators.keyword,clojure.test.check.generators.keyword_ns,clojure.test.check.generators.symbol,clojure.test.check.generators.symbol_ns,clojure.test.check.generators.uuid], null));
clojure.test.check.generators.hashable_QMARK_ = (function clojure$test$check$generators$hashable_QMARK_(x){
if(typeof x === 'number'){
return cljs.core.not.call(null,(function (){var or__36925__auto__ = isNaN(x);
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
return (cljs.core._EQ_.call(null,clojure.test.check.generators.NEG_INFINITY,x)) || (cljs.core._EQ_.call(null,clojure.test.check.generators.POS_INFINITY,x));
}
})());
} else {
return true;
}
});
clojure.test.check.generators.container_type = (function clojure$test$check$generators$container_type(inner_type){
return clojure.test.check.generators.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.vector.call(null,inner_type),clojure.test.check.generators.list.call(null,inner_type),clojure.test.check.generators.set.call(null,clojure.test.check.generators.such_that.call(null,clojure.test.check.generators.hashable_QMARK_,inner_type)),clojure.test.check.generators.scale.call(null,(function (p1__48543_SHARP_){
return cljs.core.quot.call(null,p1__48543_SHARP_,(2));
}),clojure.test.check.generators.map.call(null,clojure.test.check.generators.such_that.call(null,clojure.test.check.generators.hashable_QMARK_,inner_type),inner_type))], null));
});
clojure.test.check.generators.size__GT_max_leaf_count = (function clojure$test$check$generators$size__GT_max_leaf_count(size){
return cljs.core.long$.call(null,Math.pow(size,1.1));
});
var log2_48547 = Math.log((2));
/**
 * Returns (not generates) a random collection of integers `xs`
 *   greater than 1 such that (<= (apply * xs) n).
 */
clojure.test.check.generators.random_pseudofactoring = ((function (log2_48547){
return (function clojure$test$check$generators$random_pseudofactoring(n,rng){
if((n <= (2))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null);
} else {
var log = Math.log(n);
var vec__48544 = clojure.test.check.random.split.call(null,rng);
var r1 = cljs.core.nth.call(null,vec__48544,(0),null);
var r2 = cljs.core.nth.call(null,vec__48544,(1),null);
var n1 = cljs.core.long$.call(null,Math.exp(((clojure.test.check.random.rand_double.call(null,r1) * (log - log2_48547)) + log2_48547)));
var n2 = cljs.core.quot.call(null,n,n1);
if((((1) < n1)) && (((1) < n2))){
return cljs.core.cons.call(null,n1,clojure.test.check.generators.random_pseudofactoring.call(null,n2,r2));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null);
}
}
});})(log2_48547))
;
/**
 * Like sized, but passes an rng instead of a size.
 */
clojure.test.check.generators.randomized = (function clojure$test$check$generators$randomized(func){
return clojure.test.check.generators.make_gen.call(null,(function (rng,size){
var vec__48548 = clojure.test.check.random.split.call(null,rng);
var r1 = cljs.core.nth.call(null,vec__48548,(0),null);
var r2 = cljs.core.nth.call(null,vec__48548,(1),null);
return clojure.test.check.generators.call_gen.call(null,func.call(null,r1),r2,size);
}));
});
/**
 * This is a helper for writing recursive (tree-shaped) generators. The first
 *   argument should be a function that takes a generator as an argument, and
 *   produces another generator that 'contains' that generator. The vector function
 *   in this namespace is a simple example. The second argument is a scalar
 *   generator, like boolean. For example, to produce a tree of booleans:
 * 
 *  (gen/recursive-gen gen/vector gen/boolean)
 * 
 *   Vectors or maps either recurring or containing booleans or integers:
 * 
 *  (gen/recursive-gen (fn [inner] (gen/one-of [(gen/vector inner)
 *                                              (gen/map inner inner)]))
 *                     (gen/one-of [gen/boolean gen/int]))
 * 
 *   Note that raw scalar values will be generated as well. To prevent this, you
 *   can wrap the returned generator with the function passed as the first arg,
 *   e.g.:
 * 
 *  (gen/vector (gen/recursive-gen gen/vector gen/boolean))
 */
clojure.test.check.generators.recursive_gen = (function clojure$test$check$generators$recursive_gen(container_gen_fn,scalar_gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,scalar_gen))){
} else {
throw (new Error(["Assert failed: ","Second arg to recursive-gen must be a generator","\n","(generator? scalar-gen)"].join('')));
}

return clojure.test.check.generators.sized.call(null,(function (size){
return clojure.test.check.generators.bind.call(null,clojure.test.check.generators.choose.call(null,(0),clojure.test.check.generators.size__GT_max_leaf_count.call(null,size)),(function (max_leaf_count){
return clojure.test.check.generators.randomized.call(null,(function (rng){
var sizes = clojure.test.check.generators.random_pseudofactoring.call(null,max_leaf_count,rng);
var sized_scalar_gen = clojure.test.check.generators.resize.call(null,size,scalar_gen);
return cljs.core.reduce.call(null,((function (sizes,sized_scalar_gen){
return (function (g,size__$1){
return clojure.test.check.generators.bind.call(null,clojure.test.check.generators.choose.call(null,(0),(10)),((function (sizes,sized_scalar_gen){
return (function (x){
if((x === (0))){
return sized_scalar_gen;
} else {
return clojure.test.check.generators.resize.call(null,size__$1,container_gen_fn.call(null,g));
}
});})(sizes,sized_scalar_gen))
);
});})(sizes,sized_scalar_gen))
,sized_scalar_gen,sizes);
}));
}));
}));
});
/**
 * A recursive generator that will generate many different, often nested, values
 */
clojure.test.check.generators.any = clojure.test.check.generators.recursive_gen.call(null,clojure.test.check.generators.container_type,clojure.test.check.generators.simple_type);
/**
 * Like any, but avoids characters that the shell will interpret as actions,
 *   like 7 and 14 (bell and alternate character set command)
 */
clojure.test.check.generators.any_printable = clojure.test.check.generators.recursive_gen.call(null,clojure.test.check.generators.container_type,clojure.test.check.generators.simple_type_printable);
var ret__38250__auto___48559 = (function (){
/**
 * Macro for building generators using values from other generators.
 *   Uses a binding vector with the same syntax as clojure.core/let,
 *   where the right-hand side of the binding pairs are generators, and
 *   the left-hand side are names (or destructuring forms) for generated
 *   values.
 * 
 *   Subsequent generator expressions can refer to the previously bound
 *   values, in the same way as clojure.core/let.
 * 
 *   Alternately, when the clauses are all independent, you can use a
 *   map instead of a vector for the bindings. This will expand to
 *   `tuple` instead of `bind`, which allows more effective shrinking.
 * 
 *   The body of the let can be either a value or a generator, and does
 *   the expected thing in either case. In this way let provides the
 *   functionality of both `bind` and `fmap`.
 * 
 *   Examples:
 * 
 *  (gen/let [strs (gen/not-empty (gen/list gen/string))
 *            s (gen/elements strs)]
 *    {:some-strings strs
 *     :one-of-those-strings s})
 * 
 *  ;; map bindings for independent generators:
 *  (gen/let {a gen/large-integer
 *            b gen/large-integer}
 *    (+' a b))
 * 
 *  ;; generates collections of "users" that have integer IDs
 *  ;; from 0...N-1, but are in a random order
 *  (gen/let [users (gen/list (gen/hash-map :name gen/string-ascii
 *                                          :age gen/nat))]
 *    (->> users
 *         (map #(assoc %2 :id %1) (range))
 *         (gen/shuffle)))
 */
clojure.test.check.generators.let$ = (function clojure$test$check$generators$let(var_args){
var args__38211__auto__ = [];
var len__38204__auto___48560 = arguments.length;
var i__38205__auto___48561 = (0);
while(true){
if((i__38205__auto___48561 < len__38204__auto___48560)){
args__38211__auto__.push((arguments[i__38205__auto___48561]));

var G__48562 = (i__38205__auto___48561 + (1));
i__38205__auto___48561 = G__48562;
continue;
} else {
}
break;
}

var argseq__38212__auto__ = ((((3) < args__38211__auto__.length))?(new cljs.core.IndexedSeq(args__38211__auto__.slice((3)),(0),null)):null);
return clojure.test.check.generators.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__38212__auto__);
});

clojure.test.check.generators.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw (new Error(["Assert failed: ","gen/let requires an even number of forms in binding vector","\n","(even? (count bindings))"].join('')));
}

if(cljs.core.empty_QMARK_.call(null,bindings)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__37879__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"val__48551__auto__","val__48551__auto__",-617164173,null)),(function (){var x__37879__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})(),(function (){var x__37879__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__37879__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"val__48551__auto__","val__48551__auto__",-617164173,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"val__48551__auto__","val__48551__auto__",-617164173,null)),(function (){var x__37879__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"val__48551__auto__","val__48551__auto__",-617164173,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})())));
} else {
var vec__48556 = bindings;
var seq__48557 = cljs.core.seq.call(null,vec__48556);
var first__48558 = cljs.core.first.call(null,seq__48557);
var seq__48557__$1 = cljs.core.next.call(null,seq__48557);
var binding = first__48558;
var first__48558__$1 = cljs.core.first.call(null,seq__48557__$1);
var seq__48557__$2 = cljs.core.next.call(null,seq__48557__$1);
var gen = first__48558__$1;
var more = seq__48557__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),(function (){var x__37879__auto__ = gen;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})(),(function (){var x__37879__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__37879__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37879__auto__ = binding;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})(),(function (){var x__37879__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.test.check.generators","let","clojure.test.check.generators/let",-2079390126,null)),(function (){var x__37879__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,more))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})())));
}
} else {
if(cljs.core.map_QMARK_.call(null,bindings)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.test.check.generators","let","clojure.test.check.generators/let",-2079390126,null)),(function (){var x__37879__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__37879__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.keys.call(null,bindings)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})(),(function (){var x__37879__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.vals.call(null,bindings))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})(),body)));
} else {
throw cljs.core.ex_info.call(null,"gen/let requires a vector or map of bindings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arg","arg",-1747261837),bindings], null));

}
}
});

clojure.test.check.generators.let$.cljs$lang$maxFixedArity = (3);

clojure.test.check.generators.let$.cljs$lang$applyTo = (function (seq48552){
var G__48553 = cljs.core.first.call(null,seq48552);
var seq48552__$1 = cljs.core.next.call(null,seq48552);
var G__48554 = cljs.core.first.call(null,seq48552__$1);
var seq48552__$2 = cljs.core.next.call(null,seq48552__$1);
var G__48555 = cljs.core.first.call(null,seq48552__$2);
var seq48552__$3 = cljs.core.next.call(null,seq48552__$2);
return clojure.test.check.generators.let$.cljs$core$IFn$_invoke$arity$variadic(G__48553,G__48554,G__48555,seq48552__$3);
});

return null;
})()
;
clojure.test.check.generators.let$.cljs$lang$macro = true;


//# sourceMappingURL=generators.js.map?rel=1517117188443
