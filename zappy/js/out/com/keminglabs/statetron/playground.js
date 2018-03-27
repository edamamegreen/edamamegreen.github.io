// Compiled by ClojureScript 1.9.946 {}
goog.provide('com.keminglabs.statetron.playground');
goog.require('cljs.core');
goog.require('com.keminglabs.statetron.core');
goog.require('com.keminglabs.statetron.specs');
goog.require('com.keminglabs.statetron.visualization');
goog.require('taoensso.tufte');
goog.require('datascript.core');
goog.require('rum.core');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.gen.alpha');
goog.require('expound.alpha');
cljs.core.enable_console_print_BANG_.call(null);
NodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (array){
var array__$1 = this;
return cljs.core.array_seq.call(null,array__$1,(0));
});
com.keminglabs.statetron.playground._STAR_possible_events = rum.core.build_defc.call(null,(function (trigger_BANG_,sc){
return React.createElement("div",({"className": "possible-events"}),React.createElement("h2",null,"Possible events"),React.createElement("ul",null,cljs.core.into_array.call(null,(function (){var iter__37807__auto__ = (function com$keminglabs$statetron$playground$iter__48871(s__48872){
return (new cljs.core.LazySeq(null,(function (){
var s__48872__$1 = s__48872;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__48872__$1);
if(temp__5459__auto__){
var s__48872__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48872__$2)){
var c__37805__auto__ = cljs.core.chunk_first.call(null,s__48872__$2);
var size__37806__auto__ = cljs.core.count.call(null,c__37805__auto__);
var b__48874 = cljs.core.chunk_buffer.call(null,size__37806__auto__);
if((function (){var i__48873 = (0);
while(true){
if((i__48873 < size__37806__auto__)){
var map__48875 = cljs.core._nth.call(null,c__37805__auto__,i__48873);
var map__48875__$1 = ((((!((map__48875 == null)))?((((map__48875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48875.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48875):map__48875);
var name = cljs.core.get.call(null,map__48875__$1,new cljs.core.Keyword("transition","name","transition/name",1429155220));
cljs.core.chunk_append.call(null,b__48874,(function (){var e = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),name], null);
return sablono.interpreter.interpret.call(null,(function (){var temp__5457__auto__ = com.keminglabs.statetron.specs.event_spec.call(null,e);
if(cljs.core.truth_(temp__5457__auto__)){
var spec = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.name.call(null,name),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__37807__auto__ = ((function (i__48873,spec,temp__5457__auto__,e,map__48875,map__48875__$1,name,c__37805__auto__,size__37806__auto__,b__48874,s__48872__$2,temp__5459__auto__){
return (function com$keminglabs$statetron$playground$iter__48871_$_iter__48877(s__48878){
return (new cljs.core.LazySeq(null,((function (i__48873,spec,temp__5457__auto__,e,map__48875,map__48875__$1,name,c__37805__auto__,size__37806__auto__,b__48874,s__48872__$2,temp__5459__auto__){
return (function (){
var s__48878__$1 = s__48878;
while(true){
var temp__5459__auto____$1 = cljs.core.seq.call(null,s__48878__$1);
if(temp__5459__auto____$1){
var s__48878__$2 = temp__5459__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48878__$2)){
var c__37805__auto____$1 = cljs.core.chunk_first.call(null,s__48878__$2);
var size__37806__auto____$1 = cljs.core.count.call(null,c__37805__auto____$1);
var b__48880 = cljs.core.chunk_buffer.call(null,size__37806__auto____$1);
if((function (){var i__48879 = (0);
while(true){
if((i__48879 < size__37806__auto____$1)){
var m = cljs.core._nth.call(null,c__37805__auto____$1,i__48879);
cljs.core.chunk_append.call(null,b__48880,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.clickable","li.clickable",-676426636),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__48879,i__48873,m,c__37805__auto____$1,size__37806__auto____$1,b__48880,s__48878__$2,temp__5459__auto____$1,spec,temp__5457__auto__,e,map__48875,map__48875__$1,name,c__37805__auto__,size__37806__auto__,b__48874,s__48872__$2,temp__5459__auto__){
return (function (){
return trigger_BANG_.call(null,cljs.core.merge.call(null,e,m));
});})(i__48879,i__48873,m,c__37805__auto____$1,size__37806__auto____$1,b__48880,s__48878__$2,temp__5459__auto____$1,spec,temp__5457__auto__,e,map__48875,map__48875__$1,name,c__37805__auto__,size__37806__auto__,b__48874,s__48872__$2,temp__5459__auto__))
], null),cljs.core.pr_str.call(null,m)], null));

var G__48887 = (i__48879 + (1));
i__48879 = G__48887;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48880),com$keminglabs$statetron$playground$iter__48871_$_iter__48877.call(null,cljs.core.chunk_rest.call(null,s__48878__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48880),null);
}
} else {
var m = cljs.core.first.call(null,s__48878__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.clickable","li.clickable",-676426636),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__48873,m,s__48878__$2,temp__5459__auto____$1,spec,temp__5457__auto__,e,map__48875,map__48875__$1,name,c__37805__auto__,size__37806__auto__,b__48874,s__48872__$2,temp__5459__auto__){
return (function (){
return trigger_BANG_.call(null,cljs.core.merge.call(null,e,m));
});})(i__48873,m,s__48878__$2,temp__5459__auto____$1,spec,temp__5457__auto__,e,map__48875,map__48875__$1,name,c__37805__auto__,size__37806__auto__,b__48874,s__48872__$2,temp__5459__auto__))
], null),cljs.core.pr_str.call(null,m)], null),com$keminglabs$statetron$playground$iter__48871_$_iter__48877.call(null,cljs.core.rest.call(null,s__48878__$2)));
}
} else {
return null;
}
break;
}
});})(i__48873,spec,temp__5457__auto__,e,map__48875,map__48875__$1,name,c__37805__auto__,size__37806__auto__,b__48874,s__48872__$2,temp__5459__auto__))
,null,null));
});})(i__48873,spec,temp__5457__auto__,e,map__48875,map__48875__$1,name,c__37805__auto__,size__37806__auto__,b__48874,s__48872__$2,temp__5459__auto__))
;
return iter__37807__auto__.call(null,cljs.core.take.call(null,(5),cljs.core.shuffle.call(null,cljs.spec.gen.alpha.sample.call(null,cljs.spec.alpha.gen.call(null,spec),(20)))));
})()], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.clickable","li.clickable",-676426636),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__48873,temp__5457__auto__,e,map__48875,map__48875__$1,name,c__37805__auto__,size__37806__auto__,b__48874,s__48872__$2,temp__5459__auto__){
return (function (){
return trigger_BANG_.call(null,e);
});})(i__48873,temp__5457__auto__,e,map__48875,map__48875__$1,name,c__37805__auto__,size__37806__auto__,b__48874,s__48872__$2,temp__5459__auto__))
], null),cljs.core.name.call(null,name)], null);
}
})());
})());

var G__48888 = (i__48873 + (1));
i__48873 = G__48888;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48874),com$keminglabs$statetron$playground$iter__48871.call(null,cljs.core.chunk_rest.call(null,s__48872__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48874),null);
}
} else {
var map__48881 = cljs.core.first.call(null,s__48872__$2);
var map__48881__$1 = ((((!((map__48881 == null)))?((((map__48881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48881.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48881):map__48881);
var name = cljs.core.get.call(null,map__48881__$1,new cljs.core.Keyword("transition","name","transition/name",1429155220));
return cljs.core.cons.call(null,(function (){var e = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),name], null);
return sablono.interpreter.interpret.call(null,(function (){var temp__5457__auto__ = com.keminglabs.statetron.specs.event_spec.call(null,e);
if(cljs.core.truth_(temp__5457__auto__)){
var spec = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.name.call(null,name),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__37807__auto__ = ((function (spec,temp__5457__auto__,e,map__48881,map__48881__$1,name,s__48872__$2,temp__5459__auto__){
return (function com$keminglabs$statetron$playground$iter__48871_$_iter__48883(s__48884){
return (new cljs.core.LazySeq(null,((function (spec,temp__5457__auto__,e,map__48881,map__48881__$1,name,s__48872__$2,temp__5459__auto__){
return (function (){
var s__48884__$1 = s__48884;
while(true){
var temp__5459__auto____$1 = cljs.core.seq.call(null,s__48884__$1);
if(temp__5459__auto____$1){
var s__48884__$2 = temp__5459__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48884__$2)){
var c__37805__auto__ = cljs.core.chunk_first.call(null,s__48884__$2);
var size__37806__auto__ = cljs.core.count.call(null,c__37805__auto__);
var b__48886 = cljs.core.chunk_buffer.call(null,size__37806__auto__);
if((function (){var i__48885 = (0);
while(true){
if((i__48885 < size__37806__auto__)){
var m = cljs.core._nth.call(null,c__37805__auto__,i__48885);
cljs.core.chunk_append.call(null,b__48886,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.clickable","li.clickable",-676426636),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__48885,m,c__37805__auto__,size__37806__auto__,b__48886,s__48884__$2,temp__5459__auto____$1,spec,temp__5457__auto__,e,map__48881,map__48881__$1,name,s__48872__$2,temp__5459__auto__){
return (function (){
return trigger_BANG_.call(null,cljs.core.merge.call(null,e,m));
});})(i__48885,m,c__37805__auto__,size__37806__auto__,b__48886,s__48884__$2,temp__5459__auto____$1,spec,temp__5457__auto__,e,map__48881,map__48881__$1,name,s__48872__$2,temp__5459__auto__))
], null),cljs.core.pr_str.call(null,m)], null));

var G__48889 = (i__48885 + (1));
i__48885 = G__48889;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48886),com$keminglabs$statetron$playground$iter__48871_$_iter__48883.call(null,cljs.core.chunk_rest.call(null,s__48884__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48886),null);
}
} else {
var m = cljs.core.first.call(null,s__48884__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.clickable","li.clickable",-676426636),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (m,s__48884__$2,temp__5459__auto____$1,spec,temp__5457__auto__,e,map__48881,map__48881__$1,name,s__48872__$2,temp__5459__auto__){
return (function (){
return trigger_BANG_.call(null,cljs.core.merge.call(null,e,m));
});})(m,s__48884__$2,temp__5459__auto____$1,spec,temp__5457__auto__,e,map__48881,map__48881__$1,name,s__48872__$2,temp__5459__auto__))
], null),cljs.core.pr_str.call(null,m)], null),com$keminglabs$statetron$playground$iter__48871_$_iter__48883.call(null,cljs.core.rest.call(null,s__48884__$2)));
}
} else {
return null;
}
break;
}
});})(spec,temp__5457__auto__,e,map__48881,map__48881__$1,name,s__48872__$2,temp__5459__auto__))
,null,null));
});})(spec,temp__5457__auto__,e,map__48881,map__48881__$1,name,s__48872__$2,temp__5459__auto__))
;
return iter__37807__auto__.call(null,cljs.core.take.call(null,(5),cljs.core.shuffle.call(null,cljs.spec.gen.alpha.sample.call(null,cljs.spec.alpha.gen.call(null,spec),(20)))));
})()], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.clickable","li.clickable",-676426636),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__5457__auto__,e,map__48881,map__48881__$1,name,s__48872__$2,temp__5459__auto__){
return (function (){
return trigger_BANG_.call(null,e);
});})(temp__5457__auto__,e,map__48881,map__48881__$1,name,s__48872__$2,temp__5459__auto__))
], null),cljs.core.name.call(null,name)], null);
}
})());
})(),com$keminglabs$statetron$playground$iter__48871.call(null,cljs.core.rest.call(null,s__48872__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__37807__auto__.call(null,com.keminglabs.statetron.core.available_transitions.call(null,sc));
})())));
}),null,"*possible-events");
com.keminglabs.statetron.playground._STAR_history = rum.core.build_defc.call(null,(function (trigger_BANG_,history){
return React.createElement("div",({"className": "history"}),(function (){var attrs48890 = cljs.core.map_indexed.call(null,(function (idx,p__48891){
var vec__48892 = p__48891;
var e = cljs.core.nth.call(null,vec__48892,(0),null);
var old_app = cljs.core.nth.call(null,vec__48892,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.clickable.event","li.clickable.event",-1442584819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__48892,e,old_app){
return (function (){
return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.keminglabs.statetron.playground","rollback","com.keminglabs.statetron.playground/rollback",-211135227),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null));
});})(vec__48892,e,old_app))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".name",".name",1428237392),cljs.core.name.call(null,new cljs.core.Keyword("event","name","event/name",1621279447).cljs$core$IFn$_invoke$arity$1(e))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.args","table.args",-943025882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__37807__auto__ = ((function (vec__48892,e,old_app){
return (function com$keminglabs$statetron$playground$iter__48895(s__48896){
return (new cljs.core.LazySeq(null,((function (vec__48892,e,old_app){
return (function (){
var s__48896__$1 = s__48896;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__48896__$1);
if(temp__5459__auto__){
var s__48896__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48896__$2)){
var c__37805__auto__ = cljs.core.chunk_first.call(null,s__48896__$2);
var size__37806__auto__ = cljs.core.count.call(null,c__37805__auto__);
var b__48898 = cljs.core.chunk_buffer.call(null,size__37806__auto__);
if((function (){var i__48897 = (0);
while(true){
if((i__48897 < size__37806__auto__)){
var vec__48899 = cljs.core._nth.call(null,c__37805__auto__,i__48897);
var k = cljs.core.nth.call(null,vec__48899,(0),null);
var v = cljs.core.nth.call(null,vec__48899,(1),null);
cljs.core.chunk_append.call(null,b__48898,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.key","td.key",685127406),cljs.core.name.call(null,k)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.value","td.value",-141360330),cljs.core.pr_str.call(null,v)], null)], null));

var G__48905 = (i__48897 + (1));
i__48897 = G__48905;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48898),com$keminglabs$statetron$playground$iter__48895.call(null,cljs.core.chunk_rest.call(null,s__48896__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48898),null);
}
} else {
var vec__48902 = cljs.core.first.call(null,s__48896__$2);
var k = cljs.core.nth.call(null,vec__48902,(0),null);
var v = cljs.core.nth.call(null,vec__48902,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.key","td.key",685127406),cljs.core.name.call(null,k)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.value","td.value",-141360330),cljs.core.pr_str.call(null,v)], null)], null),com$keminglabs$statetron$playground$iter__48895.call(null,cljs.core.rest.call(null,s__48896__$2)));
}
} else {
return null;
}
break;
}
});})(vec__48892,e,old_app))
,null,null));
});})(vec__48892,e,old_app))
;
return iter__37807__auto__.call(null,cljs.core.dissoc.call(null,e,new cljs.core.Keyword("event","name","event/name",1621279447)));
})()], null)], null)], null);
}),history);
return cljs.core.apply.call(null,React.createElement,"ol",((cljs.core.map_QMARK_.call(null,attrs48890))?sablono.interpreter.attributes.call(null,attrs48890):null),((cljs.core.map_QMARK_.call(null,attrs48890))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48890)], null)));
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"after-render","after-render",1997533433),(function (state){
var temp__5459__auto___48906 = ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(temp__5459__auto___48906)){
var $history_48907 = temp__5459__auto___48906;
var temp__5459__auto___48908__$1 = $history_48907.querySelector("ol");
if(cljs.core.truth_(temp__5459__auto___48908__$1)){
var $ol_48909 = temp__5459__auto___48908__$1;
$ol_48909.scrollTop = $ol_48909.scrollHeight;
} else {
}
} else {
}

return state;
})], null)], null),"*history");
com.keminglabs.statetron.playground._STAR_env = rum.core.build_defc.call(null,(function (env){
return React.createElement("pre",null,"Statechart env: ",sablono.interpreter.interpret.call(null,cljs.core.pr_str.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"view","view",1247994814)))));
}),null,"*env");
com.keminglabs.statetron.playground._STAR_state_futures = rum.core.build_defcs.call(null,(function (state,histories){
var highlighted_idx = cljs.core.deref.call(null,new cljs.core.Keyword("rum","local","rum/local",-1497916586).cljs$core$IFn$_invoke$arity$1(state));
var attrs48910 = cljs.core.map_indexed.call(null,((function (highlighted_idx){
return (function (idx,steps){
var possible_sc = new cljs.core.Keyword(null,"sc","sc",1148023032).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,steps));
var env = com.keminglabs.statetron.core.env.call(null,possible_sc);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".future",".future",-434665123),(function (){var temp__5459__auto__ = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5459__auto__)){
var _STAR_view = temp__5459__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".view",".view",-1018207211),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (_STAR_view,temp__5459__auto__,possible_sc,env,highlighted_idx){
return (function (){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword("rum","local","rum/local",-1497916586).cljs$core$IFn$_invoke$arity$1(state),((cljs.core._EQ_.call(null,highlighted_idx,idx))?null:idx));
});})(_STAR_view,temp__5459__auto__,possible_sc,env,highlighted_idx))
,new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"view","view",1247994814)))),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n\n",cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.pr_str,new cljs.core.Keyword(null,"event","event",301435442)),steps)))].join('')], null),_STAR_view.call(null,((function (_STAR_view,temp__5459__auto__,possible_sc,env,highlighted_idx){
return (function com$keminglabs$statetron$playground$fake_trigger(){
return null;
});})(_STAR_view,temp__5459__auto__,possible_sc,env,highlighted_idx))
,possible_sc)], null);
} else {
return null;
}
})(),((cljs.core._EQ_.call(null,idx,highlighted_idx))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".details",".details",356070156),com.keminglabs.statetron.playground._STAR_env.call(null,env),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__37807__auto__ = ((function (possible_sc,env,highlighted_idx){
return (function com$keminglabs$statetron$playground$iter__48911(s__48912){
return (new cljs.core.LazySeq(null,((function (possible_sc,env,highlighted_idx){
return (function (){
var s__48912__$1 = s__48912;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__48912__$1);
if(temp__5459__auto__){
var s__48912__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48912__$2)){
var c__37805__auto__ = cljs.core.chunk_first.call(null,s__48912__$2);
var size__37806__auto__ = cljs.core.count.call(null,c__37805__auto__);
var b__48914 = cljs.core.chunk_buffer.call(null,size__37806__auto__);
if((function (){var i__48913 = (0);
while(true){
if((i__48913 < size__37806__auto__)){
var map__48915 = cljs.core._nth.call(null,c__37805__auto__,i__48913);
var map__48915__$1 = ((((!((map__48915 == null)))?((((map__48915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48915.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48915):map__48915);
var event = cljs.core.get.call(null,map__48915__$1,new cljs.core.Keyword(null,"event","event",301435442));
cljs.core.chunk_append.call(null,b__48914,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.pr_str.call(null,event)], null));

var G__48919 = (i__48913 + (1));
i__48913 = G__48919;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48914),com$keminglabs$statetron$playground$iter__48911.call(null,cljs.core.chunk_rest.call(null,s__48912__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48914),null);
}
} else {
var map__48917 = cljs.core.first.call(null,s__48912__$2);
var map__48917__$1 = ((((!((map__48917 == null)))?((((map__48917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48917.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48917):map__48917);
var event = cljs.core.get.call(null,map__48917__$1,new cljs.core.Keyword(null,"event","event",301435442));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.pr_str.call(null,event)], null),com$keminglabs$statetron$playground$iter__48911.call(null,cljs.core.rest.call(null,s__48912__$2)));
}
} else {
return null;
}
break;
}
});})(possible_sc,env,highlighted_idx))
,null,null));
});})(possible_sc,env,highlighted_idx))
;
return iter__37807__auto__.call(null,steps);
})()], null)], null):null)], null);
});})(highlighted_idx))
,cljs.core.take.call(null,(5),histories));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs48910))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["state-futures"], null)], null),attrs48910)):({"className": "state-futures"})),((cljs.core.map_QMARK_.call(null,attrs48910))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48910)], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.call(null,null)], null),"*state-futures");
com.keminglabs.statetron.playground._STAR_possible_futures = rum.core.build_defc.call(null,(function (futures){
return React.createElement("div",({"className": "possible-futures"}),React.createElement("h2",null,"Possible futures"),cljs.core.into_array.call(null,(function (){var iter__37807__auto__ = (function com$keminglabs$statetron$playground$iter__48922(s__48923){
return (new cljs.core.LazySeq(null,(function (){
var s__48923__$1 = s__48923;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__48923__$1);
if(temp__5459__auto__){
var s__48923__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48923__$2)){
var c__37805__auto__ = cljs.core.chunk_first.call(null,s__48923__$2);
var size__37806__auto__ = cljs.core.count.call(null,c__37805__auto__);
var b__48925 = cljs.core.chunk_buffer.call(null,size__37806__auto__);
if((function (){var i__48924 = (0);
while(true){
if((i__48924 < size__37806__auto__)){
var vec__48926 = cljs.core._nth.call(null,c__37805__auto__,i__48924);
var state_name = cljs.core.nth.call(null,vec__48926,(0),null);
var histories = cljs.core.nth.call(null,vec__48926,(1),null);
cljs.core.chunk_append.call(null,b__48925,React.createElement("div",({"className": "possible-future"}),(function (){var attrs48929 = cljs.core.name.call(null,state_name);
return cljs.core.apply.call(null,React.createElement,"h3",((cljs.core.map_QMARK_.call(null,attrs48929))?sablono.interpreter.attributes.call(null,attrs48929):null),((cljs.core.map_QMARK_.call(null,attrs48929))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48929)], null)));
})(),sablono.interpreter.interpret.call(null,com.keminglabs.statetron.playground._STAR_state_futures.call(null,histories))));

var G__48933 = (i__48924 + (1));
i__48924 = G__48933;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48925),com$keminglabs$statetron$playground$iter__48922.call(null,cljs.core.chunk_rest.call(null,s__48923__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48925),null);
}
} else {
var vec__48930 = cljs.core.first.call(null,s__48923__$2);
var state_name = cljs.core.nth.call(null,vec__48930,(0),null);
var histories = cljs.core.nth.call(null,vec__48930,(1),null);
return cljs.core.cons.call(null,React.createElement("div",({"className": "possible-future"}),(function (){var attrs48929 = cljs.core.name.call(null,state_name);
return cljs.core.apply.call(null,React.createElement,"h3",((cljs.core.map_QMARK_.call(null,attrs48929))?sablono.interpreter.attributes.call(null,attrs48929):null),((cljs.core.map_QMARK_.call(null,attrs48929))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48929)], null)));
})(),sablono.interpreter.interpret.call(null,com.keminglabs.statetron.playground._STAR_state_futures.call(null,histories))),com$keminglabs$statetron$playground$iter__48922.call(null,cljs.core.rest.call(null,s__48923__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__37807__auto__.call(null,futures);
})()));
}),null,"*possible-futures");
com.keminglabs.statetron.playground.ft = new cljs.core.Var(function(){return taoensso.tufte.ft;},new cljs.core.Symbol("taoensso.tufte","ft","taoensso.tufte/ft",-1538832471,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"taoensso.tufte","taoensso.tufte",-998627467,null),new cljs.core.Symbol(null,"ft","ft",302051485,null),"resources/public/js/out/taoensso/tufte.cljc",10,1,554,554,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nanosecs","nanosecs",1643669524,null)], null)),null,(cljs.core.truth_(taoensso.tufte.ft)?taoensso.tufte.ft.cljs$lang$test:null)]));
com.keminglabs.statetron.playground.perc = new cljs.core.Var(function(){return taoensso.tufte.perc;},new cljs.core.Symbol("taoensso.tufte","perc","taoensso.tufte/perc",-1647658357,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"taoensso.tufte","taoensso.tufte",-998627467,null),new cljs.core.Symbol(null,"perc","perc",-1022301697,null),"resources/public/js/out/taoensso/tufte.cljc",12,1,551,551,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"d","d",-682293345,null)], null)),null,(cljs.core.truth_(taoensso.tufte.perc)?taoensso.tufte.perc.cljs$lang$test:null)]));
com.keminglabs.statetron.playground.transition__GT_str = (function com$keminglabs$statetron$playground$transition__GT_str(t){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword("transition","name","transition/name",1429155220).cljs$core$IFn$_invoke$arity$1(t)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(com.keminglabs.statetron.core.internal_transition_QMARK_.call(null,t))?["-> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("transition","from","transition/from",158767609).cljs$core$IFn$_invoke$arity$1(t))))].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("transition","from","transition/from",158767609).cljs$core$IFn$_invoke$arity$1(t))))," -> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("transition","to","transition/to",-1841376910).cljs$core$IFn$_invoke$arity$1(t))))].join('')))].join('');
});
com.keminglabs.statetron.playground.stats__GT_table = (function com$keminglabs$statetron$playground$stats__GT_table(stats){
if(cljs.core.truth_(stats)){
var clock = stats.clock;
var m_id_stats = new cljs.core.Keyword(null,"id-stats-map","id-stats-map",-470919118).cljs$core$IFn$_invoke$arity$1(stats);
var clock_total = clock.total;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.stats","table.stats",347672586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"# calls"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"min"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"max"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"mad"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"mean"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"time %"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"time"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__37807__auto__ = ((function (clock,m_id_stats,clock_total){
return (function com$keminglabs$statetron$playground$stats__GT_table_$_iter__48934(s__48935){
return (new cljs.core.LazySeq(null,((function (clock,m_id_stats,clock_total){
return (function (){
var s__48935__$1 = s__48935;
while(true){
var temp__5459__auto__ = cljs.core.seq.call(null,s__48935__$1);
if(temp__5459__auto__){
var s__48935__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48935__$2)){
var c__37805__auto__ = cljs.core.chunk_first.call(null,s__48935__$2);
var size__37806__auto__ = cljs.core.count.call(null,c__37805__auto__);
var b__48937 = cljs.core.chunk_buffer.call(null,size__37806__auto__);
if((function (){var i__48936 = (0);
while(true){
if((i__48936 < size__37806__auto__)){
var id = cljs.core._nth.call(null,c__37805__auto__,i__48936);
cljs.core.chunk_append.call(null,b__48937,(function (){var id_stats = cljs.core.get.call(null,m_id_stats,id);
var time = new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(id_stats);
var vec__48938 = id;
var type = cljs.core.nth.call(null,vec__48938,(0),null);
var x = cljs.core.nth.call(null,vec__48938,(1),null);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.id","td.id",346571308),(function (){var G__48941 = type;
var G__48941__$1 = (((G__48941 instanceof cljs.core.Keyword))?G__48941.fqn:null);
switch (G__48941__$1) {
case "com.keminglabs.statetron.core/enter":
return cljs.core._conj.call(null,(function (){var x__37879__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.state-name","span.state-name",1830234253),cljs.core.name.call(null,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(x))], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})(),"Enter");

break;
case "com.keminglabs.statetron.core/exit":
return cljs.core._conj.call(null,(function (){var x__37879__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.state-name","span.state-name",1830234253),cljs.core.name.call(null,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(x))], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})(),"Exit");

break;
case "com.keminglabs.statetron.core/transition":
var x__37879__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.transition-name","span.transition-name",-1330335125),cljs.core.name.call(null,new cljs.core.Keyword("transition","name","transition/name",1429155220).cljs$core$IFn$_invoke$arity$1(x))], null);
return cljs.core._conj.call(null,(function (){var x__37879__auto____$1 = (cljs.core.truth_(com.keminglabs.statetron.core.internal_transition_QMARK_.call(null,x))?(function (){var x__37879__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.state-name","span.state-name",1830234253),cljs.core.name.call(null,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("transition","from","transition/from",158767609).cljs$core$IFn$_invoke$arity$1(x)))], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"\u21BA"),x__37879__auto____$1);
})():(function (){var x__37879__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.state-name","span.state-name",1830234253),cljs.core.name.call(null,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("transition","from","transition/from",158767609).cljs$core$IFn$_invoke$arity$1(x)))], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37879__auto____$2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.state-name","span.state-name",1830234253),cljs.core.name.call(null,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("transition","to","transition/to",-1841376910).cljs$core$IFn$_invoke$arity$1(x)))], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto____$2);
})(),"\u2192"),x__37879__auto____$1);
})());
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto____$1);
})(),x__37879__auto__);

break;
case "com.keminglabs.statetron.core/guard":
var x__37879__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.transition-name","span.transition-name",-1330335125),cljs.core.name.call(null,new cljs.core.Keyword("transition","name","transition/name",1429155220).cljs$core$IFn$_invoke$arity$1(x))], null);
return cljs.core._conj.call(null,(function (){var x__37879__auto____$1 = (cljs.core.truth_(com.keminglabs.statetron.core.internal_transition_QMARK_.call(null,x))?(function (){var x__37879__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.state-name","span.state-name",1830234253),cljs.core.name.call(null,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("transition","from","transition/from",158767609).cljs$core$IFn$_invoke$arity$1(x)))], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"\u21BA"),x__37879__auto____$1);
})():(function (){var x__37879__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.state-name","span.state-name",1830234253),cljs.core.name.call(null,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("transition","from","transition/from",158767609).cljs$core$IFn$_invoke$arity$1(x)))], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37879__auto____$2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.state-name","span.state-name",1830234253),cljs.core.name.call(null,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("transition","to","transition/to",-1841376910).cljs$core$IFn$_invoke$arity$1(x)))], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto____$2);
})(),"\u2192"),x__37879__auto____$1);
})());
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"guard"),x__37879__auto____$1);
})(),x__37879__auto__);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48941__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.n-calls","td.n-calls",487885074),new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(id_stats)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.min","td.min",1770719780),com.keminglabs.statetron.playground.ft.call(null,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(id_stats))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.max","td.max",-1894787461),com.keminglabs.statetron.playground.ft.call(null,new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(id_stats))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.mad","td.mad",533834709),com.keminglabs.statetron.playground.ft.call(null,new cljs.core.Keyword(null,"mad","mad",-1963165801).cljs$core$IFn$_invoke$arity$1(id_stats))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.mean","td.mean",1470256961),com.keminglabs.statetron.playground.ft.call(null,new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(id_stats))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.time-percentage","td.time-percentage",-1755050162),com.keminglabs.statetron.playground.perc.call(null,time,clock_total)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.time","td.time",-1236313714),com.keminglabs.statetron.playground.ft.call(null,time)], null)], null);
})());

var G__48947 = (i__48936 + (1));
i__48936 = G__48947;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48937),com$keminglabs$statetron$playground$stats__GT_table_$_iter__48934.call(null,cljs.core.chunk_rest.call(null,s__48935__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48937),null);
}
} else {
var id = cljs.core.first.call(null,s__48935__$2);
return cljs.core.cons.call(null,(function (){var id_stats = cljs.core.get.call(null,m_id_stats,id);
var time = new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(id_stats);
var vec__48942 = id;
var type = cljs.core.nth.call(null,vec__48942,(0),null);
var x = cljs.core.nth.call(null,vec__48942,(1),null);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.id","td.id",346571308),(function (){var G__48945 = type;
var G__48945__$1 = (((G__48945 instanceof cljs.core.Keyword))?G__48945.fqn:null);
switch (G__48945__$1) {
case "com.keminglabs.statetron.core/enter":
return cljs.core._conj.call(null,(function (){var x__37879__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.state-name","span.state-name",1830234253),cljs.core.name.call(null,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(x))], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})(),"Enter");

break;
case "com.keminglabs.statetron.core/exit":
return cljs.core._conj.call(null,(function (){var x__37879__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.state-name","span.state-name",1830234253),cljs.core.name.call(null,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(x))], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto__);
})(),"Exit");

break;
case "com.keminglabs.statetron.core/transition":
var x__37879__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.transition-name","span.transition-name",-1330335125),cljs.core.name.call(null,new cljs.core.Keyword("transition","name","transition/name",1429155220).cljs$core$IFn$_invoke$arity$1(x))], null);
return cljs.core._conj.call(null,(function (){var x__37879__auto____$1 = (cljs.core.truth_(com.keminglabs.statetron.core.internal_transition_QMARK_.call(null,x))?(function (){var x__37879__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.state-name","span.state-name",1830234253),cljs.core.name.call(null,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("transition","from","transition/from",158767609).cljs$core$IFn$_invoke$arity$1(x)))], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"\u21BA"),x__37879__auto____$1);
})():(function (){var x__37879__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.state-name","span.state-name",1830234253),cljs.core.name.call(null,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("transition","from","transition/from",158767609).cljs$core$IFn$_invoke$arity$1(x)))], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37879__auto____$2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.state-name","span.state-name",1830234253),cljs.core.name.call(null,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("transition","to","transition/to",-1841376910).cljs$core$IFn$_invoke$arity$1(x)))], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto____$2);
})(),"\u2192"),x__37879__auto____$1);
})());
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto____$1);
})(),x__37879__auto__);

break;
case "com.keminglabs.statetron.core/guard":
var x__37879__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.transition-name","span.transition-name",-1330335125),cljs.core.name.call(null,new cljs.core.Keyword("transition","name","transition/name",1429155220).cljs$core$IFn$_invoke$arity$1(x))], null);
return cljs.core._conj.call(null,(function (){var x__37879__auto____$1 = (cljs.core.truth_(com.keminglabs.statetron.core.internal_transition_QMARK_.call(null,x))?(function (){var x__37879__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.state-name","span.state-name",1830234253),cljs.core.name.call(null,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("transition","from","transition/from",158767609).cljs$core$IFn$_invoke$arity$1(x)))], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"\u21BA"),x__37879__auto____$1);
})():(function (){var x__37879__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.state-name","span.state-name",1830234253),cljs.core.name.call(null,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("transition","from","transition/from",158767609).cljs$core$IFn$_invoke$arity$1(x)))], null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__37879__auto____$2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.state-name","span.state-name",1830234253),cljs.core.name.call(null,new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("transition","to","transition/to",-1841376910).cljs$core$IFn$_invoke$arity$1(x)))], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto____$2);
})(),"\u2192"),x__37879__auto____$1);
})());
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"guard"),x__37879__auto____$1);
})(),x__37879__auto__);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48945__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.n-calls","td.n-calls",487885074),new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(id_stats)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.min","td.min",1770719780),com.keminglabs.statetron.playground.ft.call(null,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(id_stats))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.max","td.max",-1894787461),com.keminglabs.statetron.playground.ft.call(null,new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(id_stats))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.mad","td.mad",533834709),com.keminglabs.statetron.playground.ft.call(null,new cljs.core.Keyword(null,"mad","mad",-1963165801).cljs$core$IFn$_invoke$arity$1(id_stats))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.mean","td.mean",1470256961),com.keminglabs.statetron.playground.ft.call(null,new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(id_stats))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.time-percentage","td.time-percentage",-1755050162),com.keminglabs.statetron.playground.perc.call(null,time,clock_total)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.time","td.time",-1236313714),com.keminglabs.statetron.playground.ft.call(null,time)], null)], null);
})(),com$keminglabs$statetron$playground$stats__GT_table_$_iter__48934.call(null,cljs.core.rest.call(null,s__48935__$2)));
}
} else {
return null;
}
break;
}
});})(clock,m_id_stats,clock_total))
,null,null));
});})(clock,m_id_stats,clock_total))
;
return iter__37807__auto__.call(null,cljs.core.sort_by.call(null,((function (iter__37807__auto__,clock,m_id_stats,clock_total){
return (function (id){
return (- new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,m_id_stats,id)));
});})(iter__37807__auto__,clock,m_id_stats,clock_total))
,cljs.core.keys.call(null,m_id_stats)));
})()], null)], null);
} else {
return null;
}
});
com.keminglabs.statetron.playground._STAR_stats = rum.core.build_defc.call(null,(function (stats){
return sablono.interpreter.interpret.call(null,com.keminglabs.statetron.playground.stats__GT_table.call(null,stats));
}),null,"*stats");
com.keminglabs.statetron.playground._STAR_debug_scaffold = rum.core.build_defc.call(null,(function (trigger_BANG_,app,opts){
var map__48950 = app;
var map__48950__$1 = ((((!((map__48950 == null)))?((((map__48950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48950.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48950):map__48950);
var sc = cljs.core.get.call(null,map__48950__$1,new cljs.core.Keyword(null,"sc","sc",1148023032));
var events = cljs.core.get.call(null,map__48950__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var explorations = cljs.core.get.call(null,map__48950__$1,new cljs.core.Keyword(null,"explorations","explorations",-2136017170));
var focused_state_name = new cljs.core.Keyword(null,"focused-state-name","focused-state-name",1825867618).cljs$core$IFn$_invoke$arity$2(app,new cljs.core.Keyword("com.keminglabs.statetron.core","root","com.keminglabs.statetron.core/root",302968838));
var env = com.keminglabs.statetron.core.env.call(null,sc);
var attrs48949 = com.keminglabs.statetron.playground._STAR_env.call(null,env);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs48949))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["debug-scaffold"], null)], null),attrs48949)):({"className": "debug-scaffold"})),((cljs.core.map_QMARK_.call(null,attrs48949))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("div",({"className": "columns"}),(function (){var attrs48952 = com.keminglabs.statetron.visualization._STAR_state.call(null,trigger_BANG_,sc,com.keminglabs.statetron.core.s.call(null,sc,focused_state_name));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs48952))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["focused-state"], null)], null),attrs48952)):({"className": "focused-state"})),((cljs.core.map_QMARK_.call(null,attrs48952))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48952)], null)));
})(),sablono.interpreter.interpret.call(null,(function (){var temp__5459__auto__ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5459__auto__)){
var history = temp__5459__auto__;
return com.keminglabs.statetron.playground._STAR_history.call(null,trigger_BANG_,history);
} else {
return null;
}
})())),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword("com.keminglabs.statetron.core","root","com.keminglabs.statetron.core/root",302968838),focused_state_name))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (attrs48949,map__48950,map__48950__$1,sc,events,explorations,focused_state_name,env){
return (function (){
return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.keminglabs.statetron.playground","show-full-statechart","com.keminglabs.statetron.playground/show-full-statechart",1423998280)], null));
});})(attrs48949,map__48950,map__48950__$1,sc,events,explorations,focused_state_name,env))
], null),"Show full statechart"], null))),sablono.interpreter.interpret.call(null,(function (){var temp__5459__auto__ = new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5459__auto__)){
var stats = temp__5459__auto__;
return com.keminglabs.statetron.playground._STAR_stats.call(null,stats);
} else {
return null;
}
})()),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"stats-markup","stats-markup",-239120925).cljs$core$IFn$_invoke$arity$1(opts)),sablono.interpreter.interpret.call(null,(function (){var temp__5459__auto__ = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5459__auto__)){
var _STAR_view = temp__5459__auto__;
var x__37879__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null);
return cljs.core._conj.call(null,(function (){var x__37879__auto____$1 = _STAR_view.call(null,trigger_BANG_,sc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto____$1);
})(),x__37879__auto__);
} else {
return null;
}
})())], null):new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48949),React.createElement("div",({"className": "columns"}),(function (){var attrs48953 = com.keminglabs.statetron.visualization._STAR_state.call(null,trigger_BANG_,sc,com.keminglabs.statetron.core.s.call(null,sc,focused_state_name));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs48953))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["focused-state"], null)], null),attrs48953)):({"className": "focused-state"})),((cljs.core.map_QMARK_.call(null,attrs48953))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48953)], null)));
})(),sablono.interpreter.interpret.call(null,(function (){var temp__5459__auto__ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5459__auto__)){
var history = temp__5459__auto__;
return com.keminglabs.statetron.playground._STAR_history.call(null,trigger_BANG_,history);
} else {
return null;
}
})())),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword("com.keminglabs.statetron.core","root","com.keminglabs.statetron.core/root",302968838),focused_state_name))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (attrs48949,map__48950,map__48950__$1,sc,events,explorations,focused_state_name,env){
return (function (){
return trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.keminglabs.statetron.playground","show-full-statechart","com.keminglabs.statetron.playground/show-full-statechart",1423998280)], null));
});})(attrs48949,map__48950,map__48950__$1,sc,events,explorations,focused_state_name,env))
], null),"Show full statechart"], null))),sablono.interpreter.interpret.call(null,(function (){var temp__5459__auto__ = new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5459__auto__)){
var stats = temp__5459__auto__;
return com.keminglabs.statetron.playground._STAR_stats.call(null,stats);
} else {
return null;
}
})()),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"stats-markup","stats-markup",-239120925).cljs$core$IFn$_invoke$arity$1(opts)),sablono.interpreter.interpret.call(null,(function (){var temp__5459__auto__ = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5459__auto__)){
var _STAR_view = temp__5459__auto__;
var x__37879__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null);
return cljs.core._conj.call(null,(function (){var x__37879__auto____$1 = _STAR_view.call(null,trigger_BANG_,sc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37879__auto____$1);
})(),x__37879__auto__);
} else {
return null;
}
})())], null)));
}),null,"*debug-scaffold");
com.keminglabs.statetron.playground.generate_event_for_transition = (function com$keminglabs$statetron$playground$generate_event_for_transition(t){
var e = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("transition","name","transition/name",1429155220).cljs$core$IFn$_invoke$arity$1(t)], null);
return cljs.core.merge.call(null,e,(function (){var temp__5459__auto__ = com.keminglabs.statetron.specs.event_spec.call(null,e);
if(cljs.core.truth_(temp__5459__auto__)){
var spec = temp__5459__auto__;
return cljs.spec.gen.alpha.generate.call(null,cljs.spec.alpha.gen.call(null,spec));
} else {
return null;
}
})());
});
/**
 * Start interactive playground for `initial-statechart` in `$container` DOM node.
 */
com.keminglabs.statetron.playground.start_BANG_ = (function com$keminglabs$statetron$playground$start_BANG_($container,initial_statechart,opts){
var opts__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history?","history?",2009378510),true,new cljs.core.Keyword(null,"benchmark?","benchmark?",408532838),false], null),opts);
var _BANG_app = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sc","sc",1148023032),initial_statechart,new cljs.core.Keyword(null,"focused-state-name","focused-state-name",1825867618),new cljs.core.Keyword("com.keminglabs.statetron.core","root","com.keminglabs.statetron.core/root",302968838)], null));
var _BANG_history = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var _BANG_stats = cljs.core.atom.call(null,null);
var render_BANG_ = ((function (opts__$1,_BANG_app,_BANG_history,_BANG_stats){
return (function com$keminglabs$statetron$playground$start_BANG__$_render_BANG_(){
return ReactDOM.render(com.keminglabs.statetron.playground._STAR_debug_scaffold.call(null,trigger_BANG_,cljs.core.deref.call(null,_BANG_app),(function (){var x__703__auto__ = (function (){var x__703__auto__ = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(new cljs.core.Keyword(null,"history?","history?",2009378510).cljs$core$IFn$_invoke$arity$1(opts__$1))){
return cljs.core.assoc.call(null,x__703__auto__,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.deref.call(null,_BANG_history));
} else {
return x__703__auto__;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"benchmark?","benchmark?",408532838).cljs$core$IFn$_invoke$arity$1(opts__$1))){
return cljs.core.assoc.call(null,x__703__auto__,new cljs.core.Keyword(null,"stats-markup","stats-markup",-239120925),com.keminglabs.statetron.playground.stats__GT_table.call(null,cljs.core.deref.call(null,_BANG_stats)));
} else {
return x__703__auto__;
}
})()),$container);
});})(opts__$1,_BANG_app,_BANG_history,_BANG_stats))
;
var trigger_BANG_ = ((function (opts__$1,_BANG_app,_BANG_history,_BANG_stats){
return (function com$keminglabs$statetron$playground$start_BANG__$_trigger_BANG_(event){
var G__48968_48982 = new cljs.core.Keyword("event","name","event/name",1621279447).cljs$core$IFn$_invoke$arity$1(event);
var G__48968_48983__$1 = (((G__48968_48982 instanceof cljs.core.Keyword))?G__48968_48982.fqn:null);
switch (G__48968_48983__$1) {
case "com.keminglabs.statetron.playground/rollback":
var truncated_history_48985 = cljs.core.vec.call(null,cljs.core.take.call(null,(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(event) + (1)),cljs.core.deref.call(null,_BANG_history)));
var vec__48969_48986 = cljs.core.last.call(null,truncated_history_48985);
var __48987 = cljs.core.nth.call(null,vec__48969_48986,(0),null);
var old_app_48988 = cljs.core.nth.call(null,vec__48969_48986,(1),null);
cljs.core.reset_BANG_.call(null,_BANG_history,truncated_history_48985);

cljs.core.reset_BANG_.call(null,_BANG_app,old_app_48988);

break;
case "com.keminglabs.statetron.visualization/state-clicked":
cljs.core.swap_BANG_.call(null,_BANG_app,cljs.core.assoc,new cljs.core.Keyword(null,"focused-state-name","focused-state-name",1825867618),new cljs.core.Keyword("state","name","state/name",1600033984).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(event)));

break;
case "com.keminglabs.statetron.visualization/transition-clicked":
com$keminglabs$statetron$playground$start_BANG__$_trigger_BANG_.call(null,com.keminglabs.statetron.playground.generate_event_for_transition.call(null,new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(event)));

break;
case "com.keminglabs.statetron.playground/show-full-statechart":
cljs.core.swap_BANG_.call(null,_BANG_app,cljs.core.assoc,new cljs.core.Keyword(null,"focused-state-name","focused-state-name",1825867618),new cljs.core.Keyword("com.keminglabs.statetron.core","root","com.keminglabs.statetron.core/root",302968838));

break;
case "com.keminglabs.statetron.playground/explore-futures":
cljs.core.swap_BANG_.call(null,_BANG_app,((function (G__48968_48982,G__48968_48983__$1,opts__$1,_BANG_app,_BANG_history,_BANG_stats){
return (function (p__48972){
var map__48973 = p__48972;
var map__48973__$1 = ((((!((map__48973 == null)))?((((map__48973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48973):map__48973);
var app = map__48973__$1;
var sc = cljs.core.get.call(null,map__48973__$1,new cljs.core.Keyword(null,"sc","sc",1148023032));
return cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"explorations","explorations",-2136017170),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),sc,new cljs.core.Keyword(null,"futures","futures",-479477036),com.keminglabs.statetron.core.explore_states.call(null,sc,com.keminglabs.statetron.specs.sc__GT_possible_events,(20))], null));
});})(G__48968_48982,G__48968_48983__$1,opts__$1,_BANG_app,_BANG_history,_BANG_stats))
);

break;
case "com.keminglabs.statetron.playground/re-render":

break;
default:
if(cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("com.keminglabs.statetron.specs","event","com.keminglabs.statetron.specs/event",673119438),event))){
expound.alpha.expound.call(null,new cljs.core.Keyword("com.keminglabs.statetron.specs","event","com.keminglabs.statetron.specs/event",673119438),event);
} else {
var app_48989 = cljs.core.deref.call(null,_BANG_app);
var vec__48975_48990 = (function (){try{if(cljs.core.truth_((function (){var and__36913__auto__ = taoensso.tufte.may_profile_QMARK_.call(null,(5),"com.keminglabs.statetron.playground");
if(and__36913__auto__){
return new cljs.core.Keyword(null,"benchmark?","benchmark?",408532838).cljs$core$IFn$_invoke$arity$1(opts__$1);
} else {
return and__36913__auto__;
}
})())){
try{taoensso.tufte.impl.pdata_proxy.call(null,(new taoensso.tufte.impl.PData(taoensso.encore.now_nano.call(null))));

var result__46665__auto__ = cljs.core.update.call(null,app_48989,new cljs.core.Keyword(null,"sc","sc",1148023032),com.keminglabs.statetron.specs.step,event);
var stats__46666__auto__ = taoensso.tufte.impl.pdata__GT_Stats.call(null,taoensso.tufte.impl.pdata_proxy.call(null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__46665__auto__,stats__46666__auto__], null);
}finally {taoensso.tufte.impl.pdata_proxy.call(null,null);
}} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.call(null,app_48989,new cljs.core.Keyword(null,"sc","sc",1148023032),com.keminglabs.statetron.specs.step,event)], null);
}
}catch (e48978){if((e48978 instanceof Error)){
var e = e48978;
var res__47110__auto___48993 = e.message;
console.log(res__47110__auto___48993);


return null;
} else {
throw e48978;

}
}})();
var new_app_48991 = cljs.core.nth.call(null,vec__48975_48990,(0),null);
var stats_48992 = cljs.core.nth.call(null,vec__48975_48990,(1),null);
if(cljs.core.truth_(stats_48992)){
cljs.core.swap_BANG_.call(null,_BANG_stats,taoensso.tufte.merge_stats,stats_48992);
} else {
}

if(cljs.core.truth_((function (){var and__36913__auto__ = new_app_48991;
if(cljs.core.truth_(and__36913__auto__)){
return cljs.core.not_EQ_.call(null,app_48989,new_app_48991);
} else {
return and__36913__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,_BANG_app,new_app_48991);

if(cljs.core.truth_(new cljs.core.Keyword(null,"history?","history?",2009378510).cljs$core$IFn$_invoke$arity$1(opts__$1))){
cljs.core.swap_BANG_.call(null,_BANG_history,((function (app_48989,vec__48975_48990,new_app_48991,stats_48992,G__48968_48982,G__48968_48983__$1,opts__$1,_BANG_app,_BANG_history,_BANG_stats){
return (function (history){
return cljs.core.concat.call(null,(function (){var vec__48979 = cljs.core.last.call(null,history);
var last_event = cljs.core.nth.call(null,vec__48979,(0),null);
var _ = cljs.core.nth.call(null,vec__48979,(1),null);
if(cljs.core.truth_((function (){var and__36913__auto__ = new cljs.core.Keyword("event","collapse?","event/collapse?",892262587).cljs$core$IFn$_invoke$arity$1(event);
if(cljs.core.truth_(and__36913__auto__)){
var and__36913__auto____$1 = new cljs.core.Keyword("event","collapse?","event/collapse?",892262587).cljs$core$IFn$_invoke$arity$1(last_event);
if(cljs.core.truth_(and__36913__auto____$1)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("event","name","event/name",1621279447).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword("event","name","event/name",1621279447).cljs$core$IFn$_invoke$arity$1(last_event));
} else {
return and__36913__auto____$1;
}
} else {
return and__36913__auto__;
}
})())){
return cljs.core.butlast.call(null,history);
} else {
return history;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,new_app_48991], null)], null));
});})(app_48989,vec__48975_48990,new_app_48991,stats_48992,G__48968_48982,G__48968_48983__$1,opts__$1,_BANG_app,_BANG_history,_BANG_stats))
);
} else {
}
} else {
}
}

}

return render_BANG_.call(null);
});})(opts__$1,_BANG_app,_BANG_history,_BANG_stats))
;
com.keminglabs.statetron.playground.figwheel_re_render_BANG_ = render_BANG_;

com.keminglabs.statetron.specs.check_statechart_specs_BANG_.call(null,initial_statechart);

trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","name","event/name",1621279447),new cljs.core.Keyword("com.keminglabs.statetron.core","start","com.keminglabs.statetron.core/start",-1625675576)], null));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"!app","!app",-894388230),_BANG_app,new cljs.core.Keyword(null,"trigger!","trigger!",680856188),trigger_BANG_], null);
});

//# sourceMappingURL=playground.js.map?rel=1517117189313
