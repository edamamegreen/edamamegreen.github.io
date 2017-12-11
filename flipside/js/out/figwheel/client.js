// Compiled by ClojureScript 1.9.494 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args84881 = [];
var len__37108__auto___84884 = arguments.length;
var i__37109__auto___84885 = (0);
while(true){
if((i__37109__auto___84885 < len__37108__auto___84884)){
args84881.push((arguments[i__37109__auto___84885]));

var G__84886 = (i__37109__auto___84885 + (1));
i__37109__auto___84885 = G__84886;
continue;
} else {
}
break;
}

var G__84883 = args84881.length;
switch (G__84883) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args84881.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__37115__auto__ = [];
var len__37108__auto___84889 = arguments.length;
var i__37109__auto___84890 = (0);
while(true){
if((i__37109__auto___84890 < len__37108__auto___84889)){
args__37115__auto__.push((arguments[i__37109__auto___84890]));

var G__84891 = (i__37109__auto___84890 + (1));
i__37109__auto___84890 = G__84891;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq84888){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq84888));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__37115__auto__ = [];
var len__37108__auto___84893 = arguments.length;
var i__37109__auto___84894 = (0);
while(true){
if((i__37109__auto___84894 < len__37108__auto___84893)){
args__37115__auto__.push((arguments[i__37109__auto___84894]));

var G__84895 = (i__37109__auto___84894 + (1));
i__37109__auto___84894 = G__84895;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq84892){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq84892));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__84896){
var map__84899 = p__84896;
var map__84899__$1 = ((((!((map__84899 == null)))?((((map__84899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84899.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84899):map__84899);
var message = cljs.core.get.call(null,map__84899__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__84899__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__35887__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__35875__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__35875__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__35875__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__40807__auto___85061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto___85061,ch){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto___85061,ch){
return (function (state_85030){
var state_val_85031 = (state_85030[(1)]);
if((state_val_85031 === (7))){
var inst_85026 = (state_85030[(2)]);
var state_85030__$1 = state_85030;
var statearr_85032_85062 = state_85030__$1;
(statearr_85032_85062[(2)] = inst_85026);

(statearr_85032_85062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85031 === (1))){
var state_85030__$1 = state_85030;
var statearr_85033_85063 = state_85030__$1;
(statearr_85033_85063[(2)] = null);

(statearr_85033_85063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85031 === (4))){
var inst_84983 = (state_85030[(7)]);
var inst_84983__$1 = (state_85030[(2)]);
var state_85030__$1 = (function (){var statearr_85034 = state_85030;
(statearr_85034[(7)] = inst_84983__$1);

return statearr_85034;
})();
if(cljs.core.truth_(inst_84983__$1)){
var statearr_85035_85064 = state_85030__$1;
(statearr_85035_85064[(1)] = (5));

} else {
var statearr_85036_85065 = state_85030__$1;
(statearr_85036_85065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85031 === (15))){
var inst_84990 = (state_85030[(8)]);
var inst_85005 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_84990);
var inst_85006 = cljs.core.first.call(null,inst_85005);
var inst_85007 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_85006);
var inst_85008 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_85007)].join('');
var inst_85009 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_85008);
var state_85030__$1 = state_85030;
var statearr_85037_85066 = state_85030__$1;
(statearr_85037_85066[(2)] = inst_85009);

(statearr_85037_85066[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85031 === (13))){
var inst_85014 = (state_85030[(2)]);
var state_85030__$1 = state_85030;
var statearr_85038_85067 = state_85030__$1;
(statearr_85038_85067[(2)] = inst_85014);

(statearr_85038_85067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85031 === (6))){
var state_85030__$1 = state_85030;
var statearr_85039_85068 = state_85030__$1;
(statearr_85039_85068[(2)] = null);

(statearr_85039_85068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85031 === (17))){
var inst_85012 = (state_85030[(2)]);
var state_85030__$1 = state_85030;
var statearr_85040_85069 = state_85030__$1;
(statearr_85040_85069[(2)] = inst_85012);

(statearr_85040_85069[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85031 === (3))){
var inst_85028 = (state_85030[(2)]);
var state_85030__$1 = state_85030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85030__$1,inst_85028);
} else {
if((state_val_85031 === (12))){
var inst_84989 = (state_85030[(9)]);
var inst_85003 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_84989,opts);
var state_85030__$1 = state_85030;
if(cljs.core.truth_(inst_85003)){
var statearr_85041_85070 = state_85030__$1;
(statearr_85041_85070[(1)] = (15));

} else {
var statearr_85042_85071 = state_85030__$1;
(statearr_85042_85071[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85031 === (2))){
var state_85030__$1 = state_85030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85030__$1,(4),ch);
} else {
if((state_val_85031 === (11))){
var inst_84990 = (state_85030[(8)]);
var inst_84995 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_84996 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_84990);
var inst_84997 = cljs.core.async.timeout.call(null,(1000));
var inst_84998 = [inst_84996,inst_84997];
var inst_84999 = (new cljs.core.PersistentVector(null,2,(5),inst_84995,inst_84998,null));
var state_85030__$1 = state_85030;
return cljs.core.async.ioc_alts_BANG_.call(null,state_85030__$1,(14),inst_84999);
} else {
if((state_val_85031 === (9))){
var inst_84990 = (state_85030[(8)]);
var inst_85016 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_85017 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_84990);
var inst_85018 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_85017);
var inst_85019 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_85018)].join('');
var inst_85020 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_85019);
var state_85030__$1 = (function (){var statearr_85043 = state_85030;
(statearr_85043[(10)] = inst_85016);

return statearr_85043;
})();
var statearr_85044_85072 = state_85030__$1;
(statearr_85044_85072[(2)] = inst_85020);

(statearr_85044_85072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85031 === (5))){
var inst_84983 = (state_85030[(7)]);
var inst_84985 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_84986 = (new cljs.core.PersistentArrayMap(null,2,inst_84985,null));
var inst_84987 = (new cljs.core.PersistentHashSet(null,inst_84986,null));
var inst_84988 = figwheel.client.focus_msgs.call(null,inst_84987,inst_84983);
var inst_84989 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_84988);
var inst_84990 = cljs.core.first.call(null,inst_84988);
var inst_84991 = figwheel.client.autoload_QMARK_.call(null);
var state_85030__$1 = (function (){var statearr_85045 = state_85030;
(statearr_85045[(8)] = inst_84990);

(statearr_85045[(9)] = inst_84989);

return statearr_85045;
})();
if(cljs.core.truth_(inst_84991)){
var statearr_85046_85073 = state_85030__$1;
(statearr_85046_85073[(1)] = (8));

} else {
var statearr_85047_85074 = state_85030__$1;
(statearr_85047_85074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85031 === (14))){
var inst_85001 = (state_85030[(2)]);
var state_85030__$1 = state_85030;
var statearr_85048_85075 = state_85030__$1;
(statearr_85048_85075[(2)] = inst_85001);

(statearr_85048_85075[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85031 === (16))){
var state_85030__$1 = state_85030;
var statearr_85049_85076 = state_85030__$1;
(statearr_85049_85076[(2)] = null);

(statearr_85049_85076[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85031 === (10))){
var inst_85022 = (state_85030[(2)]);
var state_85030__$1 = (function (){var statearr_85050 = state_85030;
(statearr_85050[(11)] = inst_85022);

return statearr_85050;
})();
var statearr_85051_85077 = state_85030__$1;
(statearr_85051_85077[(2)] = null);

(statearr_85051_85077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85031 === (8))){
var inst_84989 = (state_85030[(9)]);
var inst_84993 = figwheel.client.reload_file_state_QMARK_.call(null,inst_84989,opts);
var state_85030__$1 = state_85030;
if(cljs.core.truth_(inst_84993)){
var statearr_85052_85078 = state_85030__$1;
(statearr_85052_85078[(1)] = (11));

} else {
var statearr_85053_85079 = state_85030__$1;
(statearr_85053_85079[(1)] = (12));

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
});})(c__40807__auto___85061,ch))
;
return ((function (switch__40784__auto__,c__40807__auto___85061,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__40785__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__40785__auto____0 = (function (){
var statearr_85057 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_85057[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__40785__auto__);

(statearr_85057[(1)] = (1));

return statearr_85057;
});
var figwheel$client$file_reloader_plugin_$_state_machine__40785__auto____1 = (function (state_85030){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_85030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e85058){if((e85058 instanceof Object)){
var ex__40788__auto__ = e85058;
var statearr_85059_85080 = state_85030;
(statearr_85059_85080[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e85058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__85081 = state_85030;
state_85030 = G__85081;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__40785__auto__ = function(state_85030){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__40785__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__40785__auto____1.call(this,state_85030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__40785__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__40785__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto___85061,ch))
})();
var state__40809__auto__ = (function (){var statearr_85060 = f__40808__auto__.call(null);
(statearr_85060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto___85061);

return statearr_85060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto___85061,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__85082_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__85082_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_85085 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_85085){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e85084){if((e85084 instanceof Error)){
var e = e85084;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_85085], null));
} else {
var e = e85084;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_85085))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__85086){
var map__85095 = p__85086;
var map__85095__$1 = ((((!((map__85095 == null)))?((((map__85095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85095.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85095):map__85095);
var opts = map__85095__$1;
var build_id = cljs.core.get.call(null,map__85095__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__85095,map__85095__$1,opts,build_id){
return (function (p__85097){
var vec__85098 = p__85097;
var seq__85099 = cljs.core.seq.call(null,vec__85098);
var first__85100 = cljs.core.first.call(null,seq__85099);
var seq__85099__$1 = cljs.core.next.call(null,seq__85099);
var map__85101 = first__85100;
var map__85101__$1 = ((((!((map__85101 == null)))?((((map__85101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85101.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85101):map__85101);
var msg = map__85101__$1;
var msg_name = cljs.core.get.call(null,map__85101__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__85099__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__85098,seq__85099,first__85100,seq__85099__$1,map__85101,map__85101__$1,msg,msg_name,_,map__85095,map__85095__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__85098,seq__85099,first__85100,seq__85099__$1,map__85101,map__85101__$1,msg,msg_name,_,map__85095,map__85095__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__85095,map__85095__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__85109){
var vec__85110 = p__85109;
var seq__85111 = cljs.core.seq.call(null,vec__85110);
var first__85112 = cljs.core.first.call(null,seq__85111);
var seq__85111__$1 = cljs.core.next.call(null,seq__85111);
var map__85113 = first__85112;
var map__85113__$1 = ((((!((map__85113 == null)))?((((map__85113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85113.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85113):map__85113);
var msg = map__85113__$1;
var msg_name = cljs.core.get.call(null,map__85113__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__85111__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__85115){
var map__85127 = p__85115;
var map__85127__$1 = ((((!((map__85127 == null)))?((((map__85127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85127.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85127):map__85127);
var on_compile_warning = cljs.core.get.call(null,map__85127__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__85127__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__85127,map__85127__$1,on_compile_warning,on_compile_fail){
return (function (p__85129){
var vec__85130 = p__85129;
var seq__85131 = cljs.core.seq.call(null,vec__85130);
var first__85132 = cljs.core.first.call(null,seq__85131);
var seq__85131__$1 = cljs.core.next.call(null,seq__85131);
var map__85133 = first__85132;
var map__85133__$1 = ((((!((map__85133 == null)))?((((map__85133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85133.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85133):map__85133);
var msg = map__85133__$1;
var msg_name = cljs.core.get.call(null,map__85133__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__85131__$1;
var pred__85135 = cljs.core._EQ_;
var expr__85136 = msg_name;
if(cljs.core.truth_(pred__85135.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__85136))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__85135.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__85136))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__85127,map__85127__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__40807__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto__,msg_hist,msg_names,msg){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto__,msg_hist,msg_names,msg){
return (function (state_85364){
var state_val_85365 = (state_85364[(1)]);
if((state_val_85365 === (7))){
var inst_85284 = (state_85364[(2)]);
var state_85364__$1 = state_85364;
if(cljs.core.truth_(inst_85284)){
var statearr_85366_85416 = state_85364__$1;
(statearr_85366_85416[(1)] = (8));

} else {
var statearr_85367_85417 = state_85364__$1;
(statearr_85367_85417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85365 === (20))){
var inst_85358 = (state_85364[(2)]);
var state_85364__$1 = state_85364;
var statearr_85368_85418 = state_85364__$1;
(statearr_85368_85418[(2)] = inst_85358);

(statearr_85368_85418[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85365 === (27))){
var inst_85354 = (state_85364[(2)]);
var state_85364__$1 = state_85364;
var statearr_85369_85419 = state_85364__$1;
(statearr_85369_85419[(2)] = inst_85354);

(statearr_85369_85419[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85365 === (1))){
var inst_85277 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_85364__$1 = state_85364;
if(cljs.core.truth_(inst_85277)){
var statearr_85370_85420 = state_85364__$1;
(statearr_85370_85420[(1)] = (2));

} else {
var statearr_85371_85421 = state_85364__$1;
(statearr_85371_85421[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85365 === (24))){
var inst_85356 = (state_85364[(2)]);
var state_85364__$1 = state_85364;
var statearr_85372_85422 = state_85364__$1;
(statearr_85372_85422[(2)] = inst_85356);

(statearr_85372_85422[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85365 === (4))){
var inst_85362 = (state_85364[(2)]);
var state_85364__$1 = state_85364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85364__$1,inst_85362);
} else {
if((state_val_85365 === (15))){
var inst_85360 = (state_85364[(2)]);
var state_85364__$1 = state_85364;
var statearr_85373_85423 = state_85364__$1;
(statearr_85373_85423[(2)] = inst_85360);

(statearr_85373_85423[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85365 === (21))){
var inst_85313 = (state_85364[(2)]);
var inst_85314 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_85315 = figwheel.client.auto_jump_to_error.call(null,opts,inst_85314);
var state_85364__$1 = (function (){var statearr_85374 = state_85364;
(statearr_85374[(7)] = inst_85313);

return statearr_85374;
})();
var statearr_85375_85424 = state_85364__$1;
(statearr_85375_85424[(2)] = inst_85315);

(statearr_85375_85424[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85365 === (31))){
var inst_85343 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_85364__$1 = state_85364;
if(cljs.core.truth_(inst_85343)){
var statearr_85376_85425 = state_85364__$1;
(statearr_85376_85425[(1)] = (34));

} else {
var statearr_85377_85426 = state_85364__$1;
(statearr_85377_85426[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85365 === (32))){
var inst_85352 = (state_85364[(2)]);
var state_85364__$1 = state_85364;
var statearr_85378_85427 = state_85364__$1;
(statearr_85378_85427[(2)] = inst_85352);

(statearr_85378_85427[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85365 === (33))){
var inst_85339 = (state_85364[(2)]);
var inst_85340 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_85341 = figwheel.client.auto_jump_to_error.call(null,opts,inst_85340);
var state_85364__$1 = (function (){var statearr_85379 = state_85364;
(statearr_85379[(8)] = inst_85339);

return statearr_85379;
})();
var statearr_85380_85428 = state_85364__$1;
(statearr_85380_85428[(2)] = inst_85341);

(statearr_85380_85428[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85365 === (13))){
var inst_85298 = figwheel.client.heads_up.clear.call(null);
var state_85364__$1 = state_85364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85364__$1,(16),inst_85298);
} else {
if((state_val_85365 === (22))){
var inst_85319 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_85320 = figwheel.client.heads_up.append_warning_message.call(null,inst_85319);
var state_85364__$1 = state_85364;
var statearr_85381_85429 = state_85364__$1;
(statearr_85381_85429[(2)] = inst_85320);

(statearr_85381_85429[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85365 === (36))){
var inst_85350 = (state_85364[(2)]);
var state_85364__$1 = state_85364;
var statearr_85382_85430 = state_85364__$1;
(statearr_85382_85430[(2)] = inst_85350);

(statearr_85382_85430[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85365 === (29))){
var inst_85330 = (state_85364[(2)]);
var inst_85331 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_85332 = figwheel.client.auto_jump_to_error.call(null,opts,inst_85331);
var state_85364__$1 = (function (){var statearr_85383 = state_85364;
(statearr_85383[(9)] = inst_85330);

return statearr_85383;
})();
var statearr_85384_85431 = state_85364__$1;
(statearr_85384_85431[(2)] = inst_85332);

(statearr_85384_85431[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85365 === (6))){
var inst_85279 = (state_85364[(10)]);
var state_85364__$1 = state_85364;
var statearr_85385_85432 = state_85364__$1;
(statearr_85385_85432[(2)] = inst_85279);

(statearr_85385_85432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85365 === (28))){
var inst_85326 = (state_85364[(2)]);
var inst_85327 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_85328 = figwheel.client.heads_up.display_warning.call(null,inst_85327);
var state_85364__$1 = (function (){var statearr_85386 = state_85364;
(statearr_85386[(11)] = inst_85326);

return statearr_85386;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85364__$1,(29),inst_85328);
} else {
if((state_val_85365 === (25))){
var inst_85324 = figwheel.client.heads_up.clear.call(null);
var state_85364__$1 = state_85364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85364__$1,(28),inst_85324);
} else {
if((state_val_85365 === (34))){
var inst_85345 = figwheel.client.heads_up.flash_loaded.call(null);
var state_85364__$1 = state_85364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85364__$1,(37),inst_85345);
} else {
if((state_val_85365 === (17))){
var inst_85304 = (state_85364[(2)]);
var inst_85305 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_85306 = figwheel.client.auto_jump_to_error.call(null,opts,inst_85305);
var state_85364__$1 = (function (){var statearr_85387 = state_85364;
(statearr_85387[(12)] = inst_85304);

return statearr_85387;
})();
var statearr_85388_85433 = state_85364__$1;
(statearr_85388_85433[(2)] = inst_85306);

(statearr_85388_85433[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85365 === (3))){
var inst_85296 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_85364__$1 = state_85364;
if(cljs.core.truth_(inst_85296)){
var statearr_85389_85434 = state_85364__$1;
(statearr_85389_85434[(1)] = (13));

} else {
var statearr_85390_85435 = state_85364__$1;
(statearr_85390_85435[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85365 === (12))){
var inst_85292 = (state_85364[(2)]);
var state_85364__$1 = state_85364;
var statearr_85391_85436 = state_85364__$1;
(statearr_85391_85436[(2)] = inst_85292);

(statearr_85391_85436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85365 === (2))){
var inst_85279 = (state_85364[(10)]);
var inst_85279__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_85364__$1 = (function (){var statearr_85392 = state_85364;
(statearr_85392[(10)] = inst_85279__$1);

return statearr_85392;
})();
if(cljs.core.truth_(inst_85279__$1)){
var statearr_85393_85437 = state_85364__$1;
(statearr_85393_85437[(1)] = (5));

} else {
var statearr_85394_85438 = state_85364__$1;
(statearr_85394_85438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85365 === (23))){
var inst_85322 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_85364__$1 = state_85364;
if(cljs.core.truth_(inst_85322)){
var statearr_85395_85439 = state_85364__$1;
(statearr_85395_85439[(1)] = (25));

} else {
var statearr_85396_85440 = state_85364__$1;
(statearr_85396_85440[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85365 === (35))){
var state_85364__$1 = state_85364;
var statearr_85397_85441 = state_85364__$1;
(statearr_85397_85441[(2)] = null);

(statearr_85397_85441[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85365 === (19))){
var inst_85317 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_85364__$1 = state_85364;
if(cljs.core.truth_(inst_85317)){
var statearr_85398_85442 = state_85364__$1;
(statearr_85398_85442[(1)] = (22));

} else {
var statearr_85399_85443 = state_85364__$1;
(statearr_85399_85443[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85365 === (11))){
var inst_85288 = (state_85364[(2)]);
var state_85364__$1 = state_85364;
var statearr_85400_85444 = state_85364__$1;
(statearr_85400_85444[(2)] = inst_85288);

(statearr_85400_85444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85365 === (9))){
var inst_85290 = figwheel.client.heads_up.clear.call(null);
var state_85364__$1 = state_85364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85364__$1,(12),inst_85290);
} else {
if((state_val_85365 === (5))){
var inst_85281 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_85364__$1 = state_85364;
var statearr_85401_85445 = state_85364__$1;
(statearr_85401_85445[(2)] = inst_85281);

(statearr_85401_85445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85365 === (14))){
var inst_85308 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_85364__$1 = state_85364;
if(cljs.core.truth_(inst_85308)){
var statearr_85402_85446 = state_85364__$1;
(statearr_85402_85446[(1)] = (18));

} else {
var statearr_85403_85447 = state_85364__$1;
(statearr_85403_85447[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85365 === (26))){
var inst_85334 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_85364__$1 = state_85364;
if(cljs.core.truth_(inst_85334)){
var statearr_85404_85448 = state_85364__$1;
(statearr_85404_85448[(1)] = (30));

} else {
var statearr_85405_85449 = state_85364__$1;
(statearr_85405_85449[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85365 === (16))){
var inst_85300 = (state_85364[(2)]);
var inst_85301 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_85302 = figwheel.client.heads_up.display_exception.call(null,inst_85301);
var state_85364__$1 = (function (){var statearr_85406 = state_85364;
(statearr_85406[(13)] = inst_85300);

return statearr_85406;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85364__$1,(17),inst_85302);
} else {
if((state_val_85365 === (30))){
var inst_85336 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_85337 = figwheel.client.heads_up.display_warning.call(null,inst_85336);
var state_85364__$1 = state_85364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85364__$1,(33),inst_85337);
} else {
if((state_val_85365 === (10))){
var inst_85294 = (state_85364[(2)]);
var state_85364__$1 = state_85364;
var statearr_85407_85450 = state_85364__$1;
(statearr_85407_85450[(2)] = inst_85294);

(statearr_85407_85450[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85365 === (18))){
var inst_85310 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_85311 = figwheel.client.heads_up.display_exception.call(null,inst_85310);
var state_85364__$1 = state_85364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85364__$1,(21),inst_85311);
} else {
if((state_val_85365 === (37))){
var inst_85347 = (state_85364[(2)]);
var state_85364__$1 = state_85364;
var statearr_85408_85451 = state_85364__$1;
(statearr_85408_85451[(2)] = inst_85347);

(statearr_85408_85451[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85365 === (8))){
var inst_85286 = figwheel.client.heads_up.flash_loaded.call(null);
var state_85364__$1 = state_85364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85364__$1,(11),inst_85286);
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
});})(c__40807__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__40784__auto__,c__40807__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40785__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40785__auto____0 = (function (){
var statearr_85412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_85412[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40785__auto__);

(statearr_85412[(1)] = (1));

return statearr_85412;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40785__auto____1 = (function (state_85364){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_85364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e85413){if((e85413 instanceof Object)){
var ex__40788__auto__ = e85413;
var statearr_85414_85452 = state_85364;
(statearr_85414_85452[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e85413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__85453 = state_85364;
state_85364 = G__85453;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40785__auto__ = function(state_85364){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40785__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40785__auto____1.call(this,state_85364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40785__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40785__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto__,msg_hist,msg_names,msg))
})();
var state__40809__auto__ = (function (){var statearr_85415 = f__40808__auto__.call(null);
(statearr_85415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto__);

return statearr_85415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto__,msg_hist,msg_names,msg))
);

return c__40807__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__40807__auto___85516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto___85516,ch){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto___85516,ch){
return (function (state_85499){
var state_val_85500 = (state_85499[(1)]);
if((state_val_85500 === (1))){
var state_85499__$1 = state_85499;
var statearr_85501_85517 = state_85499__$1;
(statearr_85501_85517[(2)] = null);

(statearr_85501_85517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85500 === (2))){
var state_85499__$1 = state_85499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85499__$1,(4),ch);
} else {
if((state_val_85500 === (3))){
var inst_85497 = (state_85499[(2)]);
var state_85499__$1 = state_85499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85499__$1,inst_85497);
} else {
if((state_val_85500 === (4))){
var inst_85487 = (state_85499[(7)]);
var inst_85487__$1 = (state_85499[(2)]);
var state_85499__$1 = (function (){var statearr_85502 = state_85499;
(statearr_85502[(7)] = inst_85487__$1);

return statearr_85502;
})();
if(cljs.core.truth_(inst_85487__$1)){
var statearr_85503_85518 = state_85499__$1;
(statearr_85503_85518[(1)] = (5));

} else {
var statearr_85504_85519 = state_85499__$1;
(statearr_85504_85519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85500 === (5))){
var inst_85487 = (state_85499[(7)]);
var inst_85489 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_85487);
var state_85499__$1 = state_85499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85499__$1,(8),inst_85489);
} else {
if((state_val_85500 === (6))){
var state_85499__$1 = state_85499;
var statearr_85505_85520 = state_85499__$1;
(statearr_85505_85520[(2)] = null);

(statearr_85505_85520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85500 === (7))){
var inst_85495 = (state_85499[(2)]);
var state_85499__$1 = state_85499;
var statearr_85506_85521 = state_85499__$1;
(statearr_85506_85521[(2)] = inst_85495);

(statearr_85506_85521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85500 === (8))){
var inst_85491 = (state_85499[(2)]);
var state_85499__$1 = (function (){var statearr_85507 = state_85499;
(statearr_85507[(8)] = inst_85491);

return statearr_85507;
})();
var statearr_85508_85522 = state_85499__$1;
(statearr_85508_85522[(2)] = null);

(statearr_85508_85522[(1)] = (2));


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
});})(c__40807__auto___85516,ch))
;
return ((function (switch__40784__auto__,c__40807__auto___85516,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__40785__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__40785__auto____0 = (function (){
var statearr_85512 = [null,null,null,null,null,null,null,null,null];
(statearr_85512[(0)] = figwheel$client$heads_up_plugin_$_state_machine__40785__auto__);

(statearr_85512[(1)] = (1));

return statearr_85512;
});
var figwheel$client$heads_up_plugin_$_state_machine__40785__auto____1 = (function (state_85499){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_85499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e85513){if((e85513 instanceof Object)){
var ex__40788__auto__ = e85513;
var statearr_85514_85523 = state_85499;
(statearr_85514_85523[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e85513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__85524 = state_85499;
state_85499 = G__85524;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__40785__auto__ = function(state_85499){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__40785__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__40785__auto____1.call(this,state_85499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__40785__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__40785__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto___85516,ch))
})();
var state__40809__auto__ = (function (){var statearr_85515 = f__40808__auto__.call(null);
(statearr_85515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto___85516);

return statearr_85515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto___85516,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__40807__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto__){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto__){
return (function (state_85545){
var state_val_85546 = (state_85545[(1)]);
if((state_val_85546 === (1))){
var inst_85540 = cljs.core.async.timeout.call(null,(3000));
var state_85545__$1 = state_85545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85545__$1,(2),inst_85540);
} else {
if((state_val_85546 === (2))){
var inst_85542 = (state_85545[(2)]);
var inst_85543 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_85545__$1 = (function (){var statearr_85547 = state_85545;
(statearr_85547[(7)] = inst_85542);

return statearr_85547;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85545__$1,inst_85543);
} else {
return null;
}
}
});})(c__40807__auto__))
;
return ((function (switch__40784__auto__,c__40807__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__40785__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__40785__auto____0 = (function (){
var statearr_85551 = [null,null,null,null,null,null,null,null];
(statearr_85551[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__40785__auto__);

(statearr_85551[(1)] = (1));

return statearr_85551;
});
var figwheel$client$enforce_project_plugin_$_state_machine__40785__auto____1 = (function (state_85545){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_85545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e85552){if((e85552 instanceof Object)){
var ex__40788__auto__ = e85552;
var statearr_85553_85555 = state_85545;
(statearr_85553_85555[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e85552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__85556 = state_85545;
state_85545 = G__85556;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__40785__auto__ = function(state_85545){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__40785__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__40785__auto____1.call(this,state_85545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__40785__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__40785__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto__))
})();
var state__40809__auto__ = (function (){var statearr_85554 = f__40808__auto__.call(null);
(statearr_85554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto__);

return statearr_85554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto__))
);

return c__40807__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__6753__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6753__auto__)){
var figwheel_version = temp__6753__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__40807__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto__,figwheel_version,temp__6753__auto__){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto__,figwheel_version,temp__6753__auto__){
return (function (state_85579){
var state_val_85580 = (state_85579[(1)]);
if((state_val_85580 === (1))){
var inst_85573 = cljs.core.async.timeout.call(null,(2000));
var state_85579__$1 = state_85579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85579__$1,(2),inst_85573);
} else {
if((state_val_85580 === (2))){
var inst_85575 = (state_85579[(2)]);
var inst_85576 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_85577 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_85576);
var state_85579__$1 = (function (){var statearr_85581 = state_85579;
(statearr_85581[(7)] = inst_85575);

return statearr_85581;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85579__$1,inst_85577);
} else {
return null;
}
}
});})(c__40807__auto__,figwheel_version,temp__6753__auto__))
;
return ((function (switch__40784__auto__,c__40807__auto__,figwheel_version,temp__6753__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40785__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40785__auto____0 = (function (){
var statearr_85585 = [null,null,null,null,null,null,null,null];
(statearr_85585[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40785__auto__);

(statearr_85585[(1)] = (1));

return statearr_85585;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40785__auto____1 = (function (state_85579){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_85579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e85586){if((e85586 instanceof Object)){
var ex__40788__auto__ = e85586;
var statearr_85587_85589 = state_85579;
(statearr_85587_85589[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e85586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__85590 = state_85579;
state_85579 = G__85590;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40785__auto__ = function(state_85579){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40785__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40785__auto____1.call(this,state_85579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40785__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40785__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto__,figwheel_version,temp__6753__auto__))
})();
var state__40809__auto__ = (function (){var statearr_85588 = f__40808__auto__.call(null);
(statearr_85588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto__);

return statearr_85588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto__,figwheel_version,temp__6753__auto__))
);

return c__40807__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__85591){
var map__85595 = p__85591;
var map__85595__$1 = ((((!((map__85595 == null)))?((((map__85595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85595.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85595):map__85595);
var file = cljs.core.get.call(null,map__85595__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__85595__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__85595__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__85597 = "";
var G__85597__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__85597),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__85597);
var G__85597__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__85597__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__85597__$1);
if(cljs.core.truth_((function (){var and__35875__auto__ = line;
if(cljs.core.truth_(and__35875__auto__)){
return column;
} else {
return and__35875__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__85597__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__85597__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__85598){
var map__85605 = p__85598;
var map__85605__$1 = ((((!((map__85605 == null)))?((((map__85605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85605.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85605):map__85605);
var ed = map__85605__$1;
var formatted_exception = cljs.core.get.call(null,map__85605__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__85605__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__85605__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__85607_85611 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__85608_85612 = null;
var count__85609_85613 = (0);
var i__85610_85614 = (0);
while(true){
if((i__85610_85614 < count__85609_85613)){
var msg_85615 = cljs.core._nth.call(null,chunk__85608_85612,i__85610_85614);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_85615);

var G__85616 = seq__85607_85611;
var G__85617 = chunk__85608_85612;
var G__85618 = count__85609_85613;
var G__85619 = (i__85610_85614 + (1));
seq__85607_85611 = G__85616;
chunk__85608_85612 = G__85617;
count__85609_85613 = G__85618;
i__85610_85614 = G__85619;
continue;
} else {
var temp__6753__auto___85620 = cljs.core.seq.call(null,seq__85607_85611);
if(temp__6753__auto___85620){
var seq__85607_85621__$1 = temp__6753__auto___85620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85607_85621__$1)){
var c__36798__auto___85622 = cljs.core.chunk_first.call(null,seq__85607_85621__$1);
var G__85623 = cljs.core.chunk_rest.call(null,seq__85607_85621__$1);
var G__85624 = c__36798__auto___85622;
var G__85625 = cljs.core.count.call(null,c__36798__auto___85622);
var G__85626 = (0);
seq__85607_85611 = G__85623;
chunk__85608_85612 = G__85624;
count__85609_85613 = G__85625;
i__85610_85614 = G__85626;
continue;
} else {
var msg_85627 = cljs.core.first.call(null,seq__85607_85621__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_85627);

var G__85628 = cljs.core.next.call(null,seq__85607_85621__$1);
var G__85629 = null;
var G__85630 = (0);
var G__85631 = (0);
seq__85607_85611 = G__85628;
chunk__85608_85612 = G__85629;
count__85609_85613 = G__85630;
i__85610_85614 = G__85631;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__85632){
var map__85635 = p__85632;
var map__85635__$1 = ((((!((map__85635 == null)))?((((map__85635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85635.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85635):map__85635);
var w = map__85635__$1;
var message = cljs.core.get.call(null,map__85635__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__35875__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__35875__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__35875__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__85647 = cljs.core.seq.call(null,plugins);
var chunk__85648 = null;
var count__85649 = (0);
var i__85650 = (0);
while(true){
if((i__85650 < count__85649)){
var vec__85651 = cljs.core._nth.call(null,chunk__85648,i__85650);
var k = cljs.core.nth.call(null,vec__85651,(0),null);
var plugin = cljs.core.nth.call(null,vec__85651,(1),null);
if(cljs.core.truth_(plugin)){
var pl_85657 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__85647,chunk__85648,count__85649,i__85650,pl_85657,vec__85651,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_85657.call(null,msg_hist);
});})(seq__85647,chunk__85648,count__85649,i__85650,pl_85657,vec__85651,k,plugin))
);
} else {
}

var G__85658 = seq__85647;
var G__85659 = chunk__85648;
var G__85660 = count__85649;
var G__85661 = (i__85650 + (1));
seq__85647 = G__85658;
chunk__85648 = G__85659;
count__85649 = G__85660;
i__85650 = G__85661;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__85647);
if(temp__6753__auto__){
var seq__85647__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85647__$1)){
var c__36798__auto__ = cljs.core.chunk_first.call(null,seq__85647__$1);
var G__85662 = cljs.core.chunk_rest.call(null,seq__85647__$1);
var G__85663 = c__36798__auto__;
var G__85664 = cljs.core.count.call(null,c__36798__auto__);
var G__85665 = (0);
seq__85647 = G__85662;
chunk__85648 = G__85663;
count__85649 = G__85664;
i__85650 = G__85665;
continue;
} else {
var vec__85654 = cljs.core.first.call(null,seq__85647__$1);
var k = cljs.core.nth.call(null,vec__85654,(0),null);
var plugin = cljs.core.nth.call(null,vec__85654,(1),null);
if(cljs.core.truth_(plugin)){
var pl_85666 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__85647,chunk__85648,count__85649,i__85650,pl_85666,vec__85654,k,plugin,seq__85647__$1,temp__6753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_85666.call(null,msg_hist);
});})(seq__85647,chunk__85648,count__85649,i__85650,pl_85666,vec__85654,k,plugin,seq__85647__$1,temp__6753__auto__))
);
} else {
}

var G__85667 = cljs.core.next.call(null,seq__85647__$1);
var G__85668 = null;
var G__85669 = (0);
var G__85670 = (0);
seq__85647 = G__85667;
chunk__85648 = G__85668;
count__85649 = G__85669;
i__85650 = G__85670;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args85671 = [];
var len__37108__auto___85678 = arguments.length;
var i__37109__auto___85679 = (0);
while(true){
if((i__37109__auto___85679 < len__37108__auto___85678)){
args85671.push((arguments[i__37109__auto___85679]));

var G__85680 = (i__37109__auto___85679 + (1));
i__37109__auto___85679 = G__85680;
continue;
} else {
}
break;
}

var G__85673 = args85671.length;
switch (G__85673) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args85671.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__85674_85682 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__85675_85683 = null;
var count__85676_85684 = (0);
var i__85677_85685 = (0);
while(true){
if((i__85677_85685 < count__85676_85684)){
var msg_85686 = cljs.core._nth.call(null,chunk__85675_85683,i__85677_85685);
figwheel.client.socket.handle_incoming_message.call(null,msg_85686);

var G__85687 = seq__85674_85682;
var G__85688 = chunk__85675_85683;
var G__85689 = count__85676_85684;
var G__85690 = (i__85677_85685 + (1));
seq__85674_85682 = G__85687;
chunk__85675_85683 = G__85688;
count__85676_85684 = G__85689;
i__85677_85685 = G__85690;
continue;
} else {
var temp__6753__auto___85691 = cljs.core.seq.call(null,seq__85674_85682);
if(temp__6753__auto___85691){
var seq__85674_85692__$1 = temp__6753__auto___85691;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85674_85692__$1)){
var c__36798__auto___85693 = cljs.core.chunk_first.call(null,seq__85674_85692__$1);
var G__85694 = cljs.core.chunk_rest.call(null,seq__85674_85692__$1);
var G__85695 = c__36798__auto___85693;
var G__85696 = cljs.core.count.call(null,c__36798__auto___85693);
var G__85697 = (0);
seq__85674_85682 = G__85694;
chunk__85675_85683 = G__85695;
count__85676_85684 = G__85696;
i__85677_85685 = G__85697;
continue;
} else {
var msg_85698 = cljs.core.first.call(null,seq__85674_85692__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_85698);

var G__85699 = cljs.core.next.call(null,seq__85674_85692__$1);
var G__85700 = null;
var G__85701 = (0);
var G__85702 = (0);
seq__85674_85682 = G__85699;
chunk__85675_85683 = G__85700;
count__85676_85684 = G__85701;
i__85677_85685 = G__85702;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__37115__auto__ = [];
var len__37108__auto___85707 = arguments.length;
var i__37109__auto___85708 = (0);
while(true){
if((i__37109__auto___85708 < len__37108__auto___85707)){
args__37115__auto__.push((arguments[i__37109__auto___85708]));

var G__85709 = (i__37109__auto___85708 + (1));
i__37109__auto___85708 = G__85709;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__85704){
var map__85705 = p__85704;
var map__85705__$1 = ((((!((map__85705 == null)))?((((map__85705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85705.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85705):map__85705);
var opts = map__85705__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq85703){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85703));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e85711){if((e85711 instanceof Error)){
var e = e85711;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e85711;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__85715){
var map__85716 = p__85715;
var map__85716__$1 = ((((!((map__85716 == null)))?((((map__85716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85716.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85716):map__85716);
var msg_name = cljs.core.get.call(null,map__85716__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1512968131683