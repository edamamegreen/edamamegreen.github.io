// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__84442){
var map__84467 = p__84442;
var map__84467__$1 = ((((!((map__84467 == null)))?((((map__84467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84467.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84467):map__84467);
var m = map__84467__$1;
var n = cljs.core.get.call(null,map__84467__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__84467__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6753__auto__)){
var ns = temp__6753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__84469_84491 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__84470_84492 = null;
var count__84471_84493 = (0);
var i__84472_84494 = (0);
while(true){
if((i__84472_84494 < count__84471_84493)){
var f_84495 = cljs.core._nth.call(null,chunk__84470_84492,i__84472_84494);
cljs.core.println.call(null,"  ",f_84495);

var G__84496 = seq__84469_84491;
var G__84497 = chunk__84470_84492;
var G__84498 = count__84471_84493;
var G__84499 = (i__84472_84494 + (1));
seq__84469_84491 = G__84496;
chunk__84470_84492 = G__84497;
count__84471_84493 = G__84498;
i__84472_84494 = G__84499;
continue;
} else {
var temp__6753__auto___84500 = cljs.core.seq.call(null,seq__84469_84491);
if(temp__6753__auto___84500){
var seq__84469_84501__$1 = temp__6753__auto___84500;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84469_84501__$1)){
var c__36798__auto___84502 = cljs.core.chunk_first.call(null,seq__84469_84501__$1);
var G__84503 = cljs.core.chunk_rest.call(null,seq__84469_84501__$1);
var G__84504 = c__36798__auto___84502;
var G__84505 = cljs.core.count.call(null,c__36798__auto___84502);
var G__84506 = (0);
seq__84469_84491 = G__84503;
chunk__84470_84492 = G__84504;
count__84471_84493 = G__84505;
i__84472_84494 = G__84506;
continue;
} else {
var f_84507 = cljs.core.first.call(null,seq__84469_84501__$1);
cljs.core.println.call(null,"  ",f_84507);

var G__84508 = cljs.core.next.call(null,seq__84469_84501__$1);
var G__84509 = null;
var G__84510 = (0);
var G__84511 = (0);
seq__84469_84491 = G__84508;
chunk__84470_84492 = G__84509;
count__84471_84493 = G__84510;
i__84472_84494 = G__84511;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_84512 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__35887__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_84512);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_84512)))?cljs.core.second.call(null,arglists_84512):arglists_84512));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__84473_84513 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__84474_84514 = null;
var count__84475_84515 = (0);
var i__84476_84516 = (0);
while(true){
if((i__84476_84516 < count__84475_84515)){
var vec__84477_84517 = cljs.core._nth.call(null,chunk__84474_84514,i__84476_84516);
var name_84518 = cljs.core.nth.call(null,vec__84477_84517,(0),null);
var map__84480_84519 = cljs.core.nth.call(null,vec__84477_84517,(1),null);
var map__84480_84520__$1 = ((((!((map__84480_84519 == null)))?((((map__84480_84519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84480_84519.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84480_84519):map__84480_84519);
var doc_84521 = cljs.core.get.call(null,map__84480_84520__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_84522 = cljs.core.get.call(null,map__84480_84520__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_84518);

cljs.core.println.call(null," ",arglists_84522);

if(cljs.core.truth_(doc_84521)){
cljs.core.println.call(null," ",doc_84521);
} else {
}

var G__84523 = seq__84473_84513;
var G__84524 = chunk__84474_84514;
var G__84525 = count__84475_84515;
var G__84526 = (i__84476_84516 + (1));
seq__84473_84513 = G__84523;
chunk__84474_84514 = G__84524;
count__84475_84515 = G__84525;
i__84476_84516 = G__84526;
continue;
} else {
var temp__6753__auto___84527 = cljs.core.seq.call(null,seq__84473_84513);
if(temp__6753__auto___84527){
var seq__84473_84528__$1 = temp__6753__auto___84527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84473_84528__$1)){
var c__36798__auto___84529 = cljs.core.chunk_first.call(null,seq__84473_84528__$1);
var G__84530 = cljs.core.chunk_rest.call(null,seq__84473_84528__$1);
var G__84531 = c__36798__auto___84529;
var G__84532 = cljs.core.count.call(null,c__36798__auto___84529);
var G__84533 = (0);
seq__84473_84513 = G__84530;
chunk__84474_84514 = G__84531;
count__84475_84515 = G__84532;
i__84476_84516 = G__84533;
continue;
} else {
var vec__84482_84534 = cljs.core.first.call(null,seq__84473_84528__$1);
var name_84535 = cljs.core.nth.call(null,vec__84482_84534,(0),null);
var map__84485_84536 = cljs.core.nth.call(null,vec__84482_84534,(1),null);
var map__84485_84537__$1 = ((((!((map__84485_84536 == null)))?((((map__84485_84536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84485_84536.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84485_84536):map__84485_84536);
var doc_84538 = cljs.core.get.call(null,map__84485_84537__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_84539 = cljs.core.get.call(null,map__84485_84537__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_84535);

cljs.core.println.call(null," ",arglists_84539);

if(cljs.core.truth_(doc_84538)){
cljs.core.println.call(null," ",doc_84538);
} else {
}

var G__84540 = cljs.core.next.call(null,seq__84473_84528__$1);
var G__84541 = null;
var G__84542 = (0);
var G__84543 = (0);
seq__84473_84513 = G__84540;
chunk__84474_84514 = G__84541;
count__84475_84515 = G__84542;
i__84476_84516 = G__84543;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6753__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6753__auto__)){
var fnspec = temp__6753__auto__;
cljs.core.print.call(null,"Spec");

var seq__84487 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__84488 = null;
var count__84489 = (0);
var i__84490 = (0);
while(true){
if((i__84490 < count__84489)){
var role = cljs.core._nth.call(null,chunk__84488,i__84490);
var temp__6753__auto___84544__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___84544__$1)){
var spec_84545 = temp__6753__auto___84544__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_84545));
} else {
}

var G__84546 = seq__84487;
var G__84547 = chunk__84488;
var G__84548 = count__84489;
var G__84549 = (i__84490 + (1));
seq__84487 = G__84546;
chunk__84488 = G__84547;
count__84489 = G__84548;
i__84490 = G__84549;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__84487);
if(temp__6753__auto____$1){
var seq__84487__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84487__$1)){
var c__36798__auto__ = cljs.core.chunk_first.call(null,seq__84487__$1);
var G__84550 = cljs.core.chunk_rest.call(null,seq__84487__$1);
var G__84551 = c__36798__auto__;
var G__84552 = cljs.core.count.call(null,c__36798__auto__);
var G__84553 = (0);
seq__84487 = G__84550;
chunk__84488 = G__84551;
count__84489 = G__84552;
i__84490 = G__84553;
continue;
} else {
var role = cljs.core.first.call(null,seq__84487__$1);
var temp__6753__auto___84554__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___84554__$2)){
var spec_84555 = temp__6753__auto___84554__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_84555));
} else {
}

var G__84556 = cljs.core.next.call(null,seq__84487__$1);
var G__84557 = null;
var G__84558 = (0);
var G__84559 = (0);
seq__84487 = G__84556;
chunk__84488 = G__84557;
count__84489 = G__84558;
i__84490 = G__84559;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1512968130203