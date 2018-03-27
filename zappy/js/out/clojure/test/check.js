// Compiled by ClojureScript 1.9.946 {}
goog.provide('clojure.test.check');
goog.require('cljs.core');
goog.require('clojure.test.check.generators');
goog.require('clojure.test.check.random');
goog.require('clojure.test.check.results');
goog.require('clojure.test.check.rose_tree');
goog.require('clojure.test.check.impl');

clojure.test.check.make_rng = (function clojure$test$check$make_rng(seed){
if(cljs.core.truth_(seed)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed,clojure.test.check.random.make_random.call(null,seed)], null);
} else {
var non_nil_seed = clojure.test.check.impl.get_current_time_millis.call(null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [non_nil_seed,clojure.test.check.random.make_random.call(null,non_nil_seed)], null);
}
});
clojure.test.check.complete = (function clojure$test$check$complete(property,num_trials,seed,reporter_fn){
reporter_fn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"complete","complete",-500388775),new cljs.core.Keyword(null,"property","property",-1114278232),property,new cljs.core.Keyword(null,"result","result",1415092211),true,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),num_trials,new cljs.core.Keyword(null,"seed","seed",68613327),seed], null));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),true,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),num_trials,new cljs.core.Keyword(null,"seed","seed",68613327),seed], null);
});
/**
 * Tests `property` `num-tests` times.
 * 
 *   Takes several optional keys:
 * 
 *   `:seed`
 *  Can be used to re-run previous tests, as the seed used is returned
 *  after a test is run.
 * 
 *   `:max-size`.
 *  can be used to control the 'size' of generated values. The size will
 *  start at 0, and grow up to max-size, as the number of tests increases.
 *  Generators will use the size parameter to bound their growth. This
 *  prevents, for example, generating a five-thousand element vector on
 *  the very first test.
 * 
 *   `:reporter-fn`
 *  A callback function that will be called at various points in the test
 *  run, with a map like:
 * 
 *    ;; called after a passing trial
 *    {:type      :trial
 *     :property  #<...>
 *     :so-far    <number of tests run so far>
 *     :num-tests <total number of tests>}
 * 
 *    ;; called after each failing trial
 *    {:type         :failure
 *     :property     #<...>
 *     :result       ...
 *     :trial-number <tests ran before failure found>
 *     :failing-args [...]}
 * 
 *  It will also be called on :complete, :shrink-step and :shrunk.
 * 
 *   Examples:
 * 
 *    (def p (for-all [a gen/pos-int] (> (* a a) a)))
 * 
 *    (quick-check 100 p)
 *    (quick-check 200 p
 *                 :seed 42
 *                 :max-size 50
 *                 :reporter-fn (fn [m]
 *                                (when (= :failure (:type m))
 *                                  (println "Uh oh..."))))
 */
clojure.test.check.quick_check = (function clojure$test$check$quick_check(var_args){
var args__38211__auto__ = [];
var len__38204__auto___48580 = arguments.length;
var i__38205__auto___48581 = (0);
while(true){
if((i__38205__auto___48581 < len__38204__auto___48580)){
args__38211__auto__.push((arguments[i__38205__auto___48581]));

var G__48582 = (i__38205__auto___48581 + (1));
i__38205__auto___48581 = G__48582;
continue;
} else {
}
break;
}

var argseq__38212__auto__ = ((((2) < args__38211__auto__.length))?(new cljs.core.IndexedSeq(args__38211__auto__.slice((2)),(0),null)):null);
return clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__38212__auto__);
});

clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (num_tests,property,p__48568){
var map__48569 = p__48568;
var map__48569__$1 = ((((!((map__48569 == null)))?((((map__48569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48569.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48569):map__48569);
var seed = cljs.core.get.call(null,map__48569__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var max_size = cljs.core.get.call(null,map__48569__$1,new cljs.core.Keyword(null,"max-size","max-size",-874966132),(200));
var reporter_fn = cljs.core.get.call(null,map__48569__$1,new cljs.core.Keyword(null,"reporter-fn","reporter-fn",1280520247),cljs.core.constantly.call(null,null));
var vec__48571 = clojure.test.check.make_rng.call(null,seed);
var created_seed = cljs.core.nth.call(null,vec__48571,(0),null);
var rng = cljs.core.nth.call(null,vec__48571,(1),null);
var size_seq = clojure.test.check.generators.make_size_range_seq.call(null,max_size);
var so_far = (0);
var size_seq__$1 = size_seq;
var rstate = rng;
while(true){
if((so_far === num_tests)){
return clojure.test.check.complete.call(null,property,num_tests,created_seed,reporter_fn);
} else {
var vec__48574 = size_seq__$1;
var seq__48575 = cljs.core.seq.call(null,vec__48574);
var first__48576 = cljs.core.first.call(null,seq__48575);
var seq__48575__$1 = cljs.core.next.call(null,seq__48575);
var size = first__48576;
var rest_size_seq = seq__48575__$1;
var vec__48577 = clojure.test.check.random.split.call(null,rstate);
var r1 = cljs.core.nth.call(null,vec__48577,(0),null);
var r2 = cljs.core.nth.call(null,vec__48577,(1),null);
var result_map_rose = clojure.test.check.generators.call_gen.call(null,property,r1,size);
var result_map = clojure.test.check.rose_tree.root.call(null,result_map_rose);
var result = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(result_map);
var args = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(result_map);
var so_far__$1 = (so_far + (1));
if(cljs.core.truth_(clojure.test.check.results.passing_QMARK_.call(null,result))){
reporter_fn.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"trial","trial",-677458347),new cljs.core.Keyword(null,"property","property",-1114278232),property,new cljs.core.Keyword(null,"so-far","so-far",-1973642241),so_far__$1,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),num_tests], null));

var G__48583 = so_far__$1;
var G__48584 = rest_size_seq;
var G__48585 = r2;
so_far = G__48583;
size_seq__$1 = G__48584;
rstate = G__48585;
continue;
} else {
return clojure.test.check.failure.call(null,property,result_map_rose,so_far__$1,size,created_seed,reporter_fn);
}
}
break;
}
});

clojure.test.check.quick_check.cljs$lang$maxFixedArity = (2);

clojure.test.check.quick_check.cljs$lang$applyTo = (function (seq48565){
var G__48566 = cljs.core.first.call(null,seq48565);
var seq48565__$1 = cljs.core.next.call(null,seq48565);
var G__48567 = cljs.core.first.call(null,seq48565__$1);
var seq48565__$2 = cljs.core.next.call(null,seq48565__$1);
return clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic(G__48566,G__48567,seq48565__$2);
});

clojure.test.check.smallest_shrink = (function clojure$test$check$smallest_shrink(total_nodes_visited,depth,smallest){
var map__48586 = smallest;
var map__48586__$1 = ((((!((map__48586 == null)))?((((map__48586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48586):map__48586);
var result = cljs.core.get.call(null,map__48586__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"total-nodes-visited","total-nodes-visited",-620132443),total_nodes_visited,new cljs.core.Keyword(null,"depth","depth",1768663640),depth,new cljs.core.Keyword(null,"result","result",1415092211),clojure.test.check.results.passing_QMARK_.call(null,result),new cljs.core.Keyword(null,"result-data","result-data",-1724248844),clojure.test.check.results.result_data.call(null,result),new cljs.core.Keyword(null,"smallest","smallest",-152623883),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(smallest)], null);
});
/**
 * Shrinking a value produces a sequence of smaller values of the same type.
 *   Each of these values can then be shrunk. Think of this as a tree. We do a
 *   modified depth-first search of the tree:
 * 
 *   Do a non-exhaustive search for a deeper (than the root) failing example.
 *   Additional rules added to depth-first search:
 *   * If a node passes the property, you may continue searching at this depth,
 *   but not backtrack
 *   * If a node fails the property, search its children
 *   The value returned is the left-most failing example at the depth where a
 *   passing example was found.
 * 
 *   Calls reporter-fn on every shrink step.
 */
clojure.test.check.shrink_loop = (function clojure$test$check$shrink_loop(rose_tree,reporter_fn){
var shrinks_this_depth = clojure.test.check.rose_tree.children.call(null,rose_tree);
var nodes = shrinks_this_depth;
var current_smallest = clojure.test.check.rose_tree.root.call(null,rose_tree);
var total_nodes_visited = (0);
var depth = (0);
while(true){
if(cljs.core.empty_QMARK_.call(null,nodes)){
return clojure.test.check.smallest_shrink.call(null,total_nodes_visited,depth,current_smallest);
} else {
var head = cljs.core.first.call(null,nodes);
var tail = cljs.core.rest.call(null,nodes);
var result = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(clojure.test.check.rose_tree.root.call(null,head));
var args = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(clojure.test.check.rose_tree.root.call(null,head));
var shrink_step_map = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"shrink-step","shrink-step",-541828120),new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"args","args",1315556576),args], null);
if(cljs.core.truth_(clojure.test.check.results.passing_QMARK_.call(null,result))){
reporter_fn.call(null,cljs.core.merge.call(null,shrink_step_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pass?","pass?",-424635753),true,new cljs.core.Keyword(null,"current-smallest","current-smallest",1840631643),current_smallest], null)));

var G__48588 = tail;
var G__48589 = current_smallest;
var G__48590 = (total_nodes_visited + (1));
var G__48591 = depth;
nodes = G__48588;
current_smallest = G__48589;
total_nodes_visited = G__48590;
depth = G__48591;
continue;
} else {
var new_smallest = clojure.test.check.rose_tree.root.call(null,head);
reporter_fn.call(null,cljs.core.merge.call(null,shrink_step_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pass?","pass?",-424635753),false,new cljs.core.Keyword(null,"current-smallest","current-smallest",1840631643),new_smallest], null)));

var temp__5457__auto__ = cljs.core.seq.call(null,clojure.test.check.rose_tree.children.call(null,head));
if(temp__5457__auto__){
var children = temp__5457__auto__;
var G__48592 = children;
var G__48593 = new_smallest;
var G__48594 = (total_nodes_visited + (1));
var G__48595 = (depth + (1));
nodes = G__48592;
current_smallest = G__48593;
total_nodes_visited = G__48594;
depth = G__48595;
continue;
} else {
var G__48596 = tail;
var G__48597 = new_smallest;
var G__48598 = (total_nodes_visited + (1));
var G__48599 = depth;
nodes = G__48596;
current_smallest = G__48597;
total_nodes_visited = G__48598;
depth = G__48599;
continue;
}
}
}
break;
}
});
clojure.test.check.failure = (function clojure$test$check$failure(property,failing_rose_tree,trial_number,size,seed,reporter_fn){
var root = clojure.test.check.rose_tree.root.call(null,failing_rose_tree);
var result = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(root);
var failing_args = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(root);
reporter_fn.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"property","property",-1114278232),property,new cljs.core.Keyword(null,"result","result",1415092211),clojure.test.check.results.passing_QMARK_.call(null,result),new cljs.core.Keyword(null,"result-data","result-data",-1724248844),clojure.test.check.results.result_data.call(null,result),new cljs.core.Keyword(null,"trial-number","trial-number",1762056689),trial_number,new cljs.core.Keyword(null,"failing-args","failing-args",-890623811),failing_args], null));

var shrunk = clojure.test.check.shrink_loop.call(null,failing_rose_tree,((function (root,result,failing_args){
return (function (p1__48600_SHARP_){
return reporter_fn.call(null,cljs.core.assoc.call(null,p1__48600_SHARP_,new cljs.core.Keyword(null,"property","property",-1114278232),property));
});})(root,result,failing_args))
);
reporter_fn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412),new cljs.core.Keyword(null,"property","property",-1114278232),property,new cljs.core.Keyword(null,"trial-number","trial-number",1762056689),trial_number,new cljs.core.Keyword(null,"failing-args","failing-args",-890623811),failing_args,new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412),shrunk], null));

return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"result","result",1415092211),clojure.test.check.results.passing_QMARK_.call(null,result),new cljs.core.Keyword(null,"result-data","result-data",-1724248844),clojure.test.check.results.result_data.call(null,result),new cljs.core.Keyword(null,"seed","seed",68613327),seed,new cljs.core.Keyword(null,"failing-size","failing-size",-429562538),size,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),trial_number,new cljs.core.Keyword(null,"fail","fail",1706214930),cljs.core.vec.call(null,failing_args),new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412),shrunk], null);
});

//# sourceMappingURL=check.js.map?rel=1517117188572
