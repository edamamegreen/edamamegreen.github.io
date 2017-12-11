// Compiled by ClojureScript 1.9.494 {}
goog.provide('datascript.core');
goog.require('cljs.core');
goog.require('datascript.db');
goog.require('datascript.pull_api');
goog.require('datascript.query');
goog.require('datascript.impl.entity');
goog.require('datascript.btset');
datascript.core.q = datascript.query.q;
goog.exportSymbol('datascript.core.q', datascript.core.q);
datascript.core.entity = datascript.impl.entity.entity;
goog.exportSymbol('datascript.core.entity', datascript.core.entity);
datascript.core.entity_db = (function datascript$core$entity_db(entity){
if(cljs.core.truth_(datascript.impl.entity.entity_QMARK_.call(null,entity))){
} else {
throw (new Error("Assert failed: (de/entity? entity)"));
}

return entity.db;
});
goog.exportSymbol('datascript.core.entity_db', datascript.core.entity_db);
datascript.core.datom = datascript.db.datom;
goog.exportSymbol('datascript.core.datom', datascript.core.datom);
datascript.core.pull = datascript.pull_api.pull;
goog.exportSymbol('datascript.core.pull', datascript.core.pull);
datascript.core.pull_many = datascript.pull_api.pull_many;
goog.exportSymbol('datascript.core.pull_many', datascript.core.pull_many);
datascript.core.touch = datascript.impl.entity.touch;
goog.exportSymbol('datascript.core.touch', datascript.core.touch);
datascript.core.empty_db = datascript.db.empty_db;
goog.exportSymbol('datascript.core.empty_db', datascript.core.empty_db);
datascript.core.init_db = datascript.db.init_db;
goog.exportSymbol('datascript.core.init_db', datascript.core.init_db);
datascript.core.datom_QMARK_ = datascript.db.datom_QMARK_;
goog.exportSymbol('datascript.core.datom_QMARK_', datascript.core.datom_QMARK_);
datascript.core.db_QMARK_ = datascript.db.db_QMARK_;
goog.exportSymbol('datascript.core.db_QMARK_', datascript.core.db_QMARK_);
datascript.core.tx0 = datascript.db.tx0;
goog.exportSymbol('datascript.core.tx0', datascript.core.tx0);
datascript.core.is_filtered = (function datascript$core$is_filtered(x){
return (x instanceof datascript.db.FilteredDB);
});
goog.exportSymbol('datascript.core.is_filtered', datascript.core.is_filtered);
datascript.core.filter = (function datascript$core$filter(db,pred){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if(cljs.core.truth_(datascript.core.is_filtered.call(null,db))){
var fdb = db;
var u = fdb.unfiltered_db;
return (new datascript.db.FilteredDB(u,((function (fdb,u){
return (function (p1__77854_SHARP_){
var and__35875__auto__ = pred.call(null,u,p1__77854_SHARP_);
if(cljs.core.truth_(and__35875__auto__)){
return fdb.pred.call(null,p1__77854_SHARP_);
} else {
return and__35875__auto__;
}
});})(fdb,u))
,cljs.core.atom.call(null,(0)),null,null,null));
} else {
return (new datascript.db.FilteredDB(db,(function (p1__77855_SHARP_){
return pred.call(null,db,p1__77855_SHARP_);
}),cljs.core.atom.call(null,(0)),null,null,null));
}
});
goog.exportSymbol('datascript.core.filter', datascript.core.filter);
datascript.core.with$ = (function datascript$core$with(var_args){
var args77856 = [];
var len__37108__auto___77859 = arguments.length;
var i__37109__auto___77860 = (0);
while(true){
if((i__37109__auto___77860 < len__37108__auto___77859)){
args77856.push((arguments[i__37109__auto___77860]));

var G__77861 = (i__37109__auto___77860 + (1));
i__37109__auto___77860 = G__77861;
continue;
} else {
}
break;
}

var G__77858 = args77856.length;
switch (G__77858) {
case 2:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args77856.length)].join('')));

}
});
goog.exportSymbol('datascript.core.with$', datascript.core.with$);

datascript.core.with$.cljs$core$IFn$_invoke$arity$2 = (function (db,tx_data){
return datascript.core.with$.call(null,db,tx_data,null);
});

datascript.core.with$.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,tx_meta){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if(cljs.core.truth_(datascript.core.is_filtered.call(null,db))){
throw cljs.core.ex_info.call(null,"Filtered DB cannot be modified",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transaction","filtered","transaction/filtered",1699706605)], null));
} else {
return datascript.db.transact_tx_data.call(null,datascript.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null)),tx_data);
}
});

datascript.core.with$.cljs$lang$maxFixedArity = 3;

datascript.core.db_with = (function datascript$core$db_with(db,tx_data){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.core.with$.call(null,db,tx_data));
});
goog.exportSymbol('datascript.core.db_with', datascript.core.db_with);
datascript.core.datoms = (function datascript$core$datoms(var_args){
var args77863 = [];
var len__37108__auto___77866 = arguments.length;
var i__37109__auto___77867 = (0);
while(true){
if((i__37109__auto___77867 < len__37108__auto___77866)){
args77863.push((arguments[i__37109__auto___77867]));

var G__77868 = (i__37109__auto___77867 + (1));
i__37109__auto___77867 = G__77868;
continue;
} else {
}
break;
}

var G__77865 = args77863.length;
switch (G__77865) {
case 2:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args77863.length)].join('')));

}
});
goog.exportSymbol('datascript.core.datoms', datascript.core.datoms);

datascript.core.datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.datoms.cljs$lang$maxFixedArity = 6;

datascript.core.seek_datoms = (function datascript$core$seek_datoms(var_args){
var args77870 = [];
var len__37108__auto___77873 = arguments.length;
var i__37109__auto___77874 = (0);
while(true){
if((i__37109__auto___77874 < len__37108__auto___77873)){
args77870.push((arguments[i__37109__auto___77874]));

var G__77875 = (i__37109__auto___77874 + (1));
i__37109__auto___77874 = G__77875;
continue;
} else {
}
break;
}

var G__77872 = args77870.length;
switch (G__77872) {
case 2:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args77870.length)].join('')));

}
});
goog.exportSymbol('datascript.core.seek_datoms', datascript.core.seek_datoms);

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.seek_datoms.cljs$lang$maxFixedArity = 6;

datascript.core.index_range = (function datascript$core$index_range(db,attr,start,end){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._index_range.call(null,db,attr,start,end);
});
goog.exportSymbol('datascript.core.index_range', datascript.core.index_range);
datascript.core.entid = datascript.db.entid;
goog.exportSymbol('datascript.core.entid', datascript.core.entid);
datascript.core.conn_QMARK_ = (function datascript$core$conn_QMARK_(conn){
var and__35875__auto__ = ((!((conn == null)))?((((conn.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === conn.cljs$core$IDeref$)))?true:(((!conn.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn));
if(and__35875__auto__){
return datascript.db.db_QMARK_.call(null,cljs.core.deref.call(null,conn));
} else {
return and__35875__auto__;
}
});
goog.exportSymbol('datascript.core.conn_QMARK_', datascript.core.conn_QMARK_);
datascript.core.conn_from_db = (function datascript$core$conn_from_db(db){
return cljs.core.atom.call(null,db,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
});
goog.exportSymbol('datascript.core.conn_from_db', datascript.core.conn_from_db);
datascript.core.conn_from_datoms = (function datascript$core$conn_from_datoms(var_args){
var args77881 = [];
var len__37108__auto___77884 = arguments.length;
var i__37109__auto___77885 = (0);
while(true){
if((i__37109__auto___77885 < len__37108__auto___77884)){
args77881.push((arguments[i__37109__auto___77885]));

var G__77886 = (i__37109__auto___77885 + (1));
i__37109__auto___77885 = G__77886;
continue;
} else {
}
break;
}

var G__77883 = args77881.length;
switch (G__77883) {
case 1:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args77881.length)].join('')));

}
});
goog.exportSymbol('datascript.core.conn_from_datoms', datascript.core.conn_from_datoms);

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.core.conn_from_db.call(null,datascript.core.init_db.call(null,datoms));
});

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return datascript.core.conn_from_db.call(null,datascript.core.init_db.call(null,datoms,schema));
});

datascript.core.conn_from_datoms.cljs$lang$maxFixedArity = 2;

datascript.core.create_conn = (function datascript$core$create_conn(var_args){
var args77888 = [];
var len__37108__auto___77891 = arguments.length;
var i__37109__auto___77892 = (0);
while(true){
if((i__37109__auto___77892 < len__37108__auto___77891)){
args77888.push((arguments[i__37109__auto___77892]));

var G__77893 = (i__37109__auto___77892 + (1));
i__37109__auto___77892 = G__77893;
continue;
} else {
}
break;
}

var G__77890 = args77888.length;
switch (G__77890) {
case 0:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args77888.length)].join('')));

}
});
goog.exportSymbol('datascript.core.create_conn', datascript.core.create_conn);

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.conn_from_db.call(null,datascript.core.empty_db.call(null));
});

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return datascript.core.conn_from_db.call(null,datascript.core.empty_db.call(null,schema));
});

datascript.core.create_conn.cljs$lang$maxFixedArity = 1;

datascript.core._transact_BANG_ = (function datascript$core$_transact_BANG_(conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = cljs.core.atom.call(null,null);
cljs.core.swap_BANG_.call(null,conn,((function (report){
return (function (db){
var r = datascript.core.with$.call(null,db,tx_data,tx_meta);
cljs.core.reset_BANG_.call(null,report,r);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);

return cljs.core.deref.call(null,report);
});
datascript.core.transact_BANG_ = (function datascript$core$transact_BANG_(var_args){
var args77895 = [];
var len__37108__auto___77908 = arguments.length;
var i__37109__auto___77909 = (0);
while(true){
if((i__37109__auto___77909 < len__37108__auto___77908)){
args77895.push((arguments[i__37109__auto___77909]));

var G__77910 = (i__37109__auto___77909 + (1));
i__37109__auto___77909 = G__77910;
continue;
} else {
}
break;
}

var G__77897 = args77895.length;
switch (G__77897) {
case 2:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args77895.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact_BANG_', datascript.core.transact_BANG_);

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_BANG_.call(null,conn,tx_data,null);
});

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = datascript.core._transact_BANG_.call(null,conn,tx_data,tx_meta);
var seq__77898_77912 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__77899_77913 = null;
var count__77900_77914 = (0);
var i__77901_77915 = (0);
while(true){
if((i__77901_77915 < count__77900_77914)){
var vec__77902_77916 = cljs.core._nth.call(null,chunk__77899_77913,i__77901_77915);
var __77917 = cljs.core.nth.call(null,vec__77902_77916,(0),null);
var callback_77918 = cljs.core.nth.call(null,vec__77902_77916,(1),null);
callback_77918.call(null,report);

var G__77919 = seq__77898_77912;
var G__77920 = chunk__77899_77913;
var G__77921 = count__77900_77914;
var G__77922 = (i__77901_77915 + (1));
seq__77898_77912 = G__77919;
chunk__77899_77913 = G__77920;
count__77900_77914 = G__77921;
i__77901_77915 = G__77922;
continue;
} else {
var temp__6753__auto___77923 = cljs.core.seq.call(null,seq__77898_77912);
if(temp__6753__auto___77923){
var seq__77898_77924__$1 = temp__6753__auto___77923;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__77898_77924__$1)){
var c__36798__auto___77925 = cljs.core.chunk_first.call(null,seq__77898_77924__$1);
var G__77926 = cljs.core.chunk_rest.call(null,seq__77898_77924__$1);
var G__77927 = c__36798__auto___77925;
var G__77928 = cljs.core.count.call(null,c__36798__auto___77925);
var G__77929 = (0);
seq__77898_77912 = G__77926;
chunk__77899_77913 = G__77927;
count__77900_77914 = G__77928;
i__77901_77915 = G__77929;
continue;
} else {
var vec__77905_77930 = cljs.core.first.call(null,seq__77898_77924__$1);
var __77931 = cljs.core.nth.call(null,vec__77905_77930,(0),null);
var callback_77932 = cljs.core.nth.call(null,vec__77905_77930,(1),null);
callback_77932.call(null,report);

var G__77933 = cljs.core.next.call(null,seq__77898_77924__$1);
var G__77934 = null;
var G__77935 = (0);
var G__77936 = (0);
seq__77898_77912 = G__77933;
chunk__77899_77913 = G__77934;
count__77900_77914 = G__77935;
i__77901_77915 = G__77936;
continue;
}
} else {
}
}
break;
}

return report;
});

datascript.core.transact_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.reset_conn_BANG_ = (function datascript$core$reset_conn_BANG_(var_args){
var args77938 = [];
var len__37108__auto___77951 = arguments.length;
var i__37109__auto___77952 = (0);
while(true){
if((i__37109__auto___77952 < len__37108__auto___77951)){
args77938.push((arguments[i__37109__auto___77952]));

var G__77953 = (i__37109__auto___77952 + (1));
i__37109__auto___77952 = G__77953;
continue;
} else {
}
break;
}

var G__77940 = args77938.length;
switch (G__77940) {
case 2:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args77938.length)].join('')));

}
});
goog.exportSymbol('datascript.core.reset_conn_BANG_', datascript.core.reset_conn_BANG_);

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,db){
return datascript.core.reset_conn_BANG_.call(null,conn,db,null);
});

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,db,tx_meta){
var report = datascript.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__77937_SHARP_){
return cljs.core.assoc.call(null,p1__77937_SHARP_,new cljs.core.Keyword(null,"added","added",2057651688),false);
}),datascript.core.datoms.call(null,cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"eavt","eavt",-666437073))),datascript.core.datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073))),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null));
cljs.core.reset_BANG_.call(null,conn,db);

var seq__77941_77955 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__77942_77956 = null;
var count__77943_77957 = (0);
var i__77944_77958 = (0);
while(true){
if((i__77944_77958 < count__77943_77957)){
var vec__77945_77959 = cljs.core._nth.call(null,chunk__77942_77956,i__77944_77958);
var __77960 = cljs.core.nth.call(null,vec__77945_77959,(0),null);
var callback_77961 = cljs.core.nth.call(null,vec__77945_77959,(1),null);
callback_77961.call(null,report);

var G__77962 = seq__77941_77955;
var G__77963 = chunk__77942_77956;
var G__77964 = count__77943_77957;
var G__77965 = (i__77944_77958 + (1));
seq__77941_77955 = G__77962;
chunk__77942_77956 = G__77963;
count__77943_77957 = G__77964;
i__77944_77958 = G__77965;
continue;
} else {
var temp__6753__auto___77966 = cljs.core.seq.call(null,seq__77941_77955);
if(temp__6753__auto___77966){
var seq__77941_77967__$1 = temp__6753__auto___77966;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__77941_77967__$1)){
var c__36798__auto___77968 = cljs.core.chunk_first.call(null,seq__77941_77967__$1);
var G__77969 = cljs.core.chunk_rest.call(null,seq__77941_77967__$1);
var G__77970 = c__36798__auto___77968;
var G__77971 = cljs.core.count.call(null,c__36798__auto___77968);
var G__77972 = (0);
seq__77941_77955 = G__77969;
chunk__77942_77956 = G__77970;
count__77943_77957 = G__77971;
i__77944_77958 = G__77972;
continue;
} else {
var vec__77948_77973 = cljs.core.first.call(null,seq__77941_77967__$1);
var __77974 = cljs.core.nth.call(null,vec__77948_77973,(0),null);
var callback_77975 = cljs.core.nth.call(null,vec__77948_77973,(1),null);
callback_77975.call(null,report);

var G__77976 = cljs.core.next.call(null,seq__77941_77967__$1);
var G__77977 = null;
var G__77978 = (0);
var G__77979 = (0);
seq__77941_77955 = G__77976;
chunk__77942_77956 = G__77977;
count__77943_77957 = G__77978;
i__77944_77958 = G__77979;
continue;
}
} else {
}
}
break;
}

return db;
});

datascript.core.reset_conn_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.listen_BANG_ = (function datascript$core$listen_BANG_(var_args){
var args77980 = [];
var len__37108__auto___77983 = arguments.length;
var i__37109__auto___77984 = (0);
while(true){
if((i__37109__auto___77984 < len__37108__auto___77983)){
args77980.push((arguments[i__37109__auto___77984]));

var G__77985 = (i__37109__auto___77984 + (1));
i__37109__auto___77984 = G__77985;
continue;
} else {
}
break;
}

var G__77982 = args77980.length;
switch (G__77982) {
case 2:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args77980.length)].join('')));

}
});
goog.exportSymbol('datascript.core.listen_BANG_', datascript.core.listen_BANG_);

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,callback){
return datascript.core.listen_BANG_.call(null,conn,cljs.core.rand.call(null),callback);
});

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,key,callback){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.assoc,key,callback);

return key;
});

datascript.core.listen_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.unlisten_BANG_ = (function datascript$core$unlisten_BANG_(conn,key){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.dissoc,key);
});
goog.exportSymbol('datascript.core.unlisten_BANG_', datascript.core.unlisten_BANG_);
datascript.core.data_readers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("datascript","Datom","datascript/Datom",-901340080,null),datascript.db.datom_from_reader,new cljs.core.Symbol("datascript","DB","datascript/DB",-487332776,null),datascript.db.db_from_reader], null);
var seq__77987_77997 = cljs.core.seq.call(null,datascript.core.data_readers);
var chunk__77988_77998 = null;
var count__77989_77999 = (0);
var i__77990_78000 = (0);
while(true){
if((i__77990_78000 < count__77989_77999)){
var vec__77991_78001 = cljs.core._nth.call(null,chunk__77988_77998,i__77990_78000);
var tag_78002 = cljs.core.nth.call(null,vec__77991_78001,(0),null);
var cb_78003 = cljs.core.nth.call(null,vec__77991_78001,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_78002,cb_78003);

var G__78004 = seq__77987_77997;
var G__78005 = chunk__77988_77998;
var G__78006 = count__77989_77999;
var G__78007 = (i__77990_78000 + (1));
seq__77987_77997 = G__78004;
chunk__77988_77998 = G__78005;
count__77989_77999 = G__78006;
i__77990_78000 = G__78007;
continue;
} else {
var temp__6753__auto___78008 = cljs.core.seq.call(null,seq__77987_77997);
if(temp__6753__auto___78008){
var seq__77987_78009__$1 = temp__6753__auto___78008;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__77987_78009__$1)){
var c__36798__auto___78010 = cljs.core.chunk_first.call(null,seq__77987_78009__$1);
var G__78011 = cljs.core.chunk_rest.call(null,seq__77987_78009__$1);
var G__78012 = c__36798__auto___78010;
var G__78013 = cljs.core.count.call(null,c__36798__auto___78010);
var G__78014 = (0);
seq__77987_77997 = G__78011;
chunk__77988_77998 = G__78012;
count__77989_77999 = G__78013;
i__77990_78000 = G__78014;
continue;
} else {
var vec__77994_78015 = cljs.core.first.call(null,seq__77987_78009__$1);
var tag_78016 = cljs.core.nth.call(null,vec__77994_78015,(0),null);
var cb_78017 = cljs.core.nth.call(null,vec__77994_78015,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_78016,cb_78017);

var G__78018 = cljs.core.next.call(null,seq__77987_78009__$1);
var G__78019 = null;
var G__78020 = (0);
var G__78021 = (0);
seq__77987_77997 = G__78018;
chunk__77988_77998 = G__78019;
count__77989_77999 = G__78020;
i__77990_78000 = G__78021;
continue;
}
} else {
}
}
break;
}
datascript.core.last_tempid = cljs.core.atom.call(null,(-1000000));
datascript.core.tempid = (function datascript$core$tempid(var_args){
var args78022 = [];
var len__37108__auto___78025 = arguments.length;
var i__37109__auto___78026 = (0);
while(true){
if((i__37109__auto___78026 < len__37108__auto___78025)){
args78022.push((arguments[i__37109__auto___78026]));

var G__78027 = (i__37109__auto___78026 + (1));
i__37109__auto___78026 = G__78027;
continue;
} else {
}
break;
}

var G__78024 = args78022.length;
switch (G__78024) {
case 1:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args78022.length)].join('')));

}
});
goog.exportSymbol('datascript.core.tempid', datascript.core.tempid);

datascript.core.tempid.cljs$core$IFn$_invoke$arity$1 = (function (part){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return cljs.core.swap_BANG_.call(null,datascript.core.last_tempid,cljs.core.dec);
}
});

datascript.core.tempid.cljs$core$IFn$_invoke$arity$2 = (function (part,x){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return x;
}
});

datascript.core.tempid.cljs$lang$maxFixedArity = 2;

datascript.core.resolve_tempid = (function datascript$core$resolve_tempid(_db,tempids,tempid){
return cljs.core.get.call(null,tempids,tempid);
});
goog.exportSymbol('datascript.core.resolve_tempid', datascript.core.resolve_tempid);
datascript.core.db = (function datascript$core$db(conn){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.deref.call(null,conn);
});
goog.exportSymbol('datascript.core.db', datascript.core.db);
datascript.core.transact = (function datascript$core$transact(var_args){
var args78029 = [];
var len__37108__auto___78035 = arguments.length;
var i__37109__auto___78036 = (0);
while(true){
if((i__37109__auto___78036 < len__37108__auto___78035)){
args78029.push((arguments[i__37109__auto___78036]));

var G__78037 = (i__37109__auto___78036 + (1));
i__37109__auto___78036 = G__78037;
continue;
} else {
}
break;
}

var G__78031 = args78029.length;
switch (G__78031) {
case 2:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args78029.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact', datascript.core.transact);

datascript.core.transact.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact.call(null,conn,tx_data,null);
});

datascript.core.transact.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var res = datascript.core.transact_BANG_.call(null,conn,tx_data,tx_meta);
if(typeof datascript.core.t_datascript$core78032 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core78032 = (function (conn,tx_data,tx_meta,res,meta78033){
this.conn = conn;
this.tx_data = tx_data;
this.tx_meta = tx_meta;
this.res = res;
this.meta78033 = meta78033;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core78032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res){
return (function (_78034,meta78033__$1){
var self__ = this;
var _78034__$1 = this;
return (new datascript.core.t_datascript$core78032(self__.conn,self__.tx_data,self__.tx_meta,self__.res,meta78033__$1));
});})(res))
;

datascript.core.t_datascript$core78032.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res){
return (function (_78034){
var self__ = this;
var _78034__$1 = this;
return self__.meta78033;
});})(res))
;

datascript.core.t_datascript$core78032.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core78032.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core78032.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(res))
;

datascript.core.t_datascript$core78032.getBasis = ((function (res){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"meta78033","meta78033",2031251052,null)], null);
});})(res))
;

datascript.core.t_datascript$core78032.cljs$lang$type = true;

datascript.core.t_datascript$core78032.cljs$lang$ctorStr = "datascript.core/t_datascript$core78032";

datascript.core.t_datascript$core78032.cljs$lang$ctorPrWriter = ((function (res){
return (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"datascript.core/t_datascript$core78032");
});})(res))
;

datascript.core.__GT_t_datascript$core78032 = ((function (res){
return (function datascript$core$__GT_t_datascript$core78032(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta78033){
return (new datascript.core.t_datascript$core78032(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta78033));
});})(res))
;

}

return (new datascript.core.t_datascript$core78032(conn,tx_data,tx_meta,res,cljs.core.PersistentArrayMap.EMPTY));
});

datascript.core.transact.cljs$lang$maxFixedArity = 3;

datascript.core.future_call = (function datascript$core$future_call(f){
var res = cljs.core.atom.call(null,null);
var realized = cljs.core.atom.call(null,false);
setTimeout(((function (res,realized){
return (function (){
cljs.core.reset_BANG_.call(null,res,f.call(null));

return cljs.core.reset_BANG_.call(null,realized,true);
});})(res,realized))
,(0));

if(typeof datascript.core.t_datascript$core78042 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core78042 = (function (f,res,realized,meta78043){
this.f = f;
this.res = res;
this.realized = realized;
this.meta78043 = meta78043;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core78042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_78044,meta78043__$1){
var self__ = this;
var _78044__$1 = this;
return (new datascript.core.t_datascript$core78042(self__.f,self__.res,self__.realized,meta78043__$1));
});})(res,realized))
;

datascript.core.t_datascript$core78042.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_78044){
var self__ = this;
var _78044__$1 = this;
return self__.meta78043;
});})(res,realized))
;

datascript.core.t_datascript$core78042.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.res);
});})(res,realized))
;

datascript.core.t_datascript$core78042.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.realized))){
return cljs.core.deref.call(null,self__.res);
} else {
return timeout_val;
}
});})(res,realized))
;

datascript.core.t_datascript$core78042.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.realized);
});})(res,realized))
;

datascript.core.t_datascript$core78042.getBasis = ((function (res,realized){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"realized","realized",1487343404,null),new cljs.core.Symbol(null,"meta78043","meta78043",-1463806672,null)], null);
});})(res,realized))
;

datascript.core.t_datascript$core78042.cljs$lang$type = true;

datascript.core.t_datascript$core78042.cljs$lang$ctorStr = "datascript.core/t_datascript$core78042";

datascript.core.t_datascript$core78042.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"datascript.core/t_datascript$core78042");
});})(res,realized))
;

datascript.core.__GT_t_datascript$core78042 = ((function (res,realized){
return (function datascript$core$future_call_$___GT_t_datascript$core78042(f__$1,res__$1,realized__$1,meta78043){
return (new datascript.core.t_datascript$core78042(f__$1,res__$1,realized__$1,meta78043));
});})(res,realized))
;

}

return (new datascript.core.t_datascript$core78042(f,res,realized,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.core.transact_async = (function datascript$core$transact_async(var_args){
var args78045 = [];
var len__37108__auto___78048 = arguments.length;
var i__37109__auto___78049 = (0);
while(true){
if((i__37109__auto___78049 < len__37108__auto___78048)){
args78045.push((arguments[i__37109__auto___78049]));

var G__78050 = (i__37109__auto___78049 + (1));
i__37109__auto___78049 = G__78050;
continue;
} else {
}
break;
}

var G__78047 = args78045.length;
switch (G__78047) {
case 2:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args78045.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact_async', datascript.core.transact_async);

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_async.call(null,conn,tx_data,null);
});

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return datascript.core.future_call.call(null,(function (){
return datascript.core.transact_BANG_.call(null,conn,tx_data,tx_meta);
}));
});

datascript.core.transact_async.cljs$lang$maxFixedArity = 3;

datascript.core.rand_bits = (function datascript$core$rand_bits(pow){
return cljs.core.rand_int.call(null,((1) << pow));
});
datascript.core.to_hex_string = (function datascript$core$to_hex_string(n,l){
var s = n.toString((16));
var c = cljs.core.count.call(null,s);
if((c > l)){
return cljs.core.subs.call(null,s,(0),l);
} else {
if((c < l)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(l - c),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return s;

}
}
});
datascript.core.squuid = (function datascript$core$squuid(var_args){
var args78052 = [];
var len__37108__auto___78055 = arguments.length;
var i__37109__auto___78056 = (0);
while(true){
if((i__37109__auto___78056 < len__37108__auto___78055)){
args78052.push((arguments[i__37109__auto___78056]));

var G__78057 = (i__37109__auto___78056 + (1));
i__37109__auto___78056 = G__78057;
continue;
} else {
}
break;
}

var G__78054 = args78052.length;
switch (G__78054) {
case 0:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args78052.length)].join('')));

}
});
goog.exportSymbol('datascript.core.squuid', datascript.core.squuid);

datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.squuid.call(null,(new Date()).getTime());
});

datascript.core.squuid.cljs$core$IFn$_invoke$arity$1 = (function (msec){
return cljs.core.uuid.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,((msec / (1000)) | (0)),(8))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,((datascript.core.rand_bits.call(null,(16)) & (4095)) | (16384)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,((datascript.core.rand_bits.call(null,(16)) & (16383)) | (32768)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4)))].join(''));
});

datascript.core.squuid.cljs$lang$maxFixedArity = 1;

datascript.core.squuid_time_millis = (function datascript$core$squuid_time_millis(uuid){
return (parseInt(cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join(''),(0),(8)),(16)) * (1000));
});
goog.exportSymbol('datascript.core.squuid_time_millis', datascript.core.squuid_time_millis);

//# sourceMappingURL=core.js.map?rel=1512968117229