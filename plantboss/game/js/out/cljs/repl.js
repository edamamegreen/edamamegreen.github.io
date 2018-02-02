// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__52929){
var map__52930 = p__52929;
var map__52930__$1 = ((((!((map__52930 == null)))?((((map__52930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52930.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52930):map__52930);
var m = map__52930__$1;
var n = cljs.core.get.call(null,map__52930__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__52930__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5459__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5459__auto__)){
var ns = temp__5459__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__52932_52954 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52933_52955 = null;
var count__52934_52956 = (0);
var i__52935_52957 = (0);
while(true){
if((i__52935_52957 < count__52934_52956)){
var f_52958 = cljs.core._nth.call(null,chunk__52933_52955,i__52935_52957);
cljs.core.println.call(null,"  ",f_52958);

var G__52959 = seq__52932_52954;
var G__52960 = chunk__52933_52955;
var G__52961 = count__52934_52956;
var G__52962 = (i__52935_52957 + (1));
seq__52932_52954 = G__52959;
chunk__52933_52955 = G__52960;
count__52934_52956 = G__52961;
i__52935_52957 = G__52962;
continue;
} else {
var temp__5459__auto___52963 = cljs.core.seq.call(null,seq__52932_52954);
if(temp__5459__auto___52963){
var seq__52932_52964__$1 = temp__5459__auto___52963;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52932_52964__$1)){
var c__37856__auto___52965 = cljs.core.chunk_first.call(null,seq__52932_52964__$1);
var G__52966 = cljs.core.chunk_rest.call(null,seq__52932_52964__$1);
var G__52967 = c__37856__auto___52965;
var G__52968 = cljs.core.count.call(null,c__37856__auto___52965);
var G__52969 = (0);
seq__52932_52954 = G__52966;
chunk__52933_52955 = G__52967;
count__52934_52956 = G__52968;
i__52935_52957 = G__52969;
continue;
} else {
var f_52970 = cljs.core.first.call(null,seq__52932_52964__$1);
cljs.core.println.call(null,"  ",f_52970);

var G__52971 = cljs.core.next.call(null,seq__52932_52964__$1);
var G__52972 = null;
var G__52973 = (0);
var G__52974 = (0);
seq__52932_52954 = G__52971;
chunk__52933_52955 = G__52972;
count__52934_52956 = G__52973;
i__52935_52957 = G__52974;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_52975 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__36925__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_52975);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_52975)))?cljs.core.second.call(null,arglists_52975):arglists_52975));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__52936_52976 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52937_52977 = null;
var count__52938_52978 = (0);
var i__52939_52979 = (0);
while(true){
if((i__52939_52979 < count__52938_52978)){
var vec__52940_52980 = cljs.core._nth.call(null,chunk__52937_52977,i__52939_52979);
var name_52981 = cljs.core.nth.call(null,vec__52940_52980,(0),null);
var map__52943_52982 = cljs.core.nth.call(null,vec__52940_52980,(1),null);
var map__52943_52983__$1 = ((((!((map__52943_52982 == null)))?((((map__52943_52982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52943_52982.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52943_52982):map__52943_52982);
var doc_52984 = cljs.core.get.call(null,map__52943_52983__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52985 = cljs.core.get.call(null,map__52943_52983__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_52981);

cljs.core.println.call(null," ",arglists_52985);

if(cljs.core.truth_(doc_52984)){
cljs.core.println.call(null," ",doc_52984);
} else {
}

var G__52986 = seq__52936_52976;
var G__52987 = chunk__52937_52977;
var G__52988 = count__52938_52978;
var G__52989 = (i__52939_52979 + (1));
seq__52936_52976 = G__52986;
chunk__52937_52977 = G__52987;
count__52938_52978 = G__52988;
i__52939_52979 = G__52989;
continue;
} else {
var temp__5459__auto___52990 = cljs.core.seq.call(null,seq__52936_52976);
if(temp__5459__auto___52990){
var seq__52936_52991__$1 = temp__5459__auto___52990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52936_52991__$1)){
var c__37856__auto___52992 = cljs.core.chunk_first.call(null,seq__52936_52991__$1);
var G__52993 = cljs.core.chunk_rest.call(null,seq__52936_52991__$1);
var G__52994 = c__37856__auto___52992;
var G__52995 = cljs.core.count.call(null,c__37856__auto___52992);
var G__52996 = (0);
seq__52936_52976 = G__52993;
chunk__52937_52977 = G__52994;
count__52938_52978 = G__52995;
i__52939_52979 = G__52996;
continue;
} else {
var vec__52945_52997 = cljs.core.first.call(null,seq__52936_52991__$1);
var name_52998 = cljs.core.nth.call(null,vec__52945_52997,(0),null);
var map__52948_52999 = cljs.core.nth.call(null,vec__52945_52997,(1),null);
var map__52948_53000__$1 = ((((!((map__52948_52999 == null)))?((((map__52948_52999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52948_52999.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52948_52999):map__52948_52999);
var doc_53001 = cljs.core.get.call(null,map__52948_53000__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53002 = cljs.core.get.call(null,map__52948_53000__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_52998);

cljs.core.println.call(null," ",arglists_53002);

if(cljs.core.truth_(doc_53001)){
cljs.core.println.call(null," ",doc_53001);
} else {
}

var G__53003 = cljs.core.next.call(null,seq__52936_52991__$1);
var G__53004 = null;
var G__53005 = (0);
var G__53006 = (0);
seq__52936_52976 = G__53003;
chunk__52937_52977 = G__53004;
count__52938_52978 = G__53005;
i__52939_52979 = G__53006;
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
var temp__5459__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5459__auto__)){
var fnspec = temp__5459__auto__;
cljs.core.print.call(null,"Spec");

var seq__52950 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__52951 = null;
var count__52952 = (0);
var i__52953 = (0);
while(true){
if((i__52953 < count__52952)){
var role = cljs.core._nth.call(null,chunk__52951,i__52953);
var temp__5459__auto___53007__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5459__auto___53007__$1)){
var spec_53008 = temp__5459__auto___53007__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_53008));
} else {
}

var G__53009 = seq__52950;
var G__53010 = chunk__52951;
var G__53011 = count__52952;
var G__53012 = (i__52953 + (1));
seq__52950 = G__53009;
chunk__52951 = G__53010;
count__52952 = G__53011;
i__52953 = G__53012;
continue;
} else {
var temp__5459__auto____$1 = cljs.core.seq.call(null,seq__52950);
if(temp__5459__auto____$1){
var seq__52950__$1 = temp__5459__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52950__$1)){
var c__37856__auto__ = cljs.core.chunk_first.call(null,seq__52950__$1);
var G__53013 = cljs.core.chunk_rest.call(null,seq__52950__$1);
var G__53014 = c__37856__auto__;
var G__53015 = cljs.core.count.call(null,c__37856__auto__);
var G__53016 = (0);
seq__52950 = G__53013;
chunk__52951 = G__53014;
count__52952 = G__53015;
i__52953 = G__53016;
continue;
} else {
var role = cljs.core.first.call(null,seq__52950__$1);
var temp__5459__auto___53017__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5459__auto___53017__$2)){
var spec_53018 = temp__5459__auto___53017__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_53018));
} else {
}

var G__53019 = cljs.core.next.call(null,seq__52950__$1);
var G__53020 = null;
var G__53021 = (0);
var G__53022 = (0);
seq__52950 = G__53019;
chunk__52951 = G__53020;
count__52952 = G__53021;
i__52953 = G__53022;
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

//# sourceMappingURL=repl.js.map?rel=1517117192424
