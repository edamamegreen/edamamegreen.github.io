// Compiled by ClojureScript 1.9.946 {}
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
var G__53218 = arguments.length;
switch (G__53218) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var args__38211__auto__ = [];
var len__38204__auto___53221 = arguments.length;
var i__38205__auto___53222 = (0);
while(true){
if((i__38205__auto___53222 < len__38204__auto___53221)){
args__38211__auto__.push((arguments[i__38205__auto___53222]));

var G__53223 = (i__38205__auto___53222 + (1));
i__38205__auto___53222 = G__53223;
continue;
} else {
}
break;
}

var argseq__38212__auto__ = ((((0) < args__38211__auto__.length))?(new cljs.core.IndexedSeq(args__38211__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__38212__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq53220){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53220));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__38211__auto__ = [];
var len__38204__auto___53225 = arguments.length;
var i__38205__auto___53226 = (0);
while(true){
if((i__38205__auto___53226 < len__38204__auto___53225)){
args__38211__auto__.push((arguments[i__38205__auto___53226]));

var G__53227 = (i__38205__auto___53226 + (1));
i__38205__auto___53226 = G__53227;
continue;
} else {
}
break;
}

var argseq__38212__auto__ = ((((0) < args__38211__auto__.length))?(new cljs.core.IndexedSeq(args__38211__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__38212__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq53224){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53224));
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
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__53228){
var map__53229 = p__53228;
var map__53229__$1 = ((((!((map__53229 == null)))?((((map__53229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53229.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53229):map__53229);
var message = cljs.core.get.call(null,map__53229__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__53229__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__36925__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__36925__auto__)){
return or__36925__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__36913__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__36913__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__36913__auto__;
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
var c__50326__auto___53308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50326__auto___53308,ch){
return (function (){
var f__50327__auto__ = (function (){var switch__50236__auto__ = ((function (c__50326__auto___53308,ch){
return (function (state_53280){
var state_val_53281 = (state_53280[(1)]);
if((state_val_53281 === (7))){
var inst_53276 = (state_53280[(2)]);
var state_53280__$1 = state_53280;
var statearr_53282_53309 = state_53280__$1;
(statearr_53282_53309[(2)] = inst_53276);

(statearr_53282_53309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (1))){
var state_53280__$1 = state_53280;
var statearr_53283_53310 = state_53280__$1;
(statearr_53283_53310[(2)] = null);

(statearr_53283_53310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (4))){
var inst_53233 = (state_53280[(7)]);
var inst_53233__$1 = (state_53280[(2)]);
var state_53280__$1 = (function (){var statearr_53284 = state_53280;
(statearr_53284[(7)] = inst_53233__$1);

return statearr_53284;
})();
if(cljs.core.truth_(inst_53233__$1)){
var statearr_53285_53311 = state_53280__$1;
(statearr_53285_53311[(1)] = (5));

} else {
var statearr_53286_53312 = state_53280__$1;
(statearr_53286_53312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (15))){
var inst_53240 = (state_53280[(8)]);
var inst_53255 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_53240);
var inst_53256 = cljs.core.first.call(null,inst_53255);
var inst_53257 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_53256);
var inst_53258 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_53257)].join('');
var inst_53259 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_53258);
var state_53280__$1 = state_53280;
var statearr_53287_53313 = state_53280__$1;
(statearr_53287_53313[(2)] = inst_53259);

(statearr_53287_53313[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (13))){
var inst_53264 = (state_53280[(2)]);
var state_53280__$1 = state_53280;
var statearr_53288_53314 = state_53280__$1;
(statearr_53288_53314[(2)] = inst_53264);

(statearr_53288_53314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (6))){
var state_53280__$1 = state_53280;
var statearr_53289_53315 = state_53280__$1;
(statearr_53289_53315[(2)] = null);

(statearr_53289_53315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (17))){
var inst_53262 = (state_53280[(2)]);
var state_53280__$1 = state_53280;
var statearr_53290_53316 = state_53280__$1;
(statearr_53290_53316[(2)] = inst_53262);

(statearr_53290_53316[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (3))){
var inst_53278 = (state_53280[(2)]);
var state_53280__$1 = state_53280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53280__$1,inst_53278);
} else {
if((state_val_53281 === (12))){
var inst_53239 = (state_53280[(9)]);
var inst_53253 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_53239,opts);
var state_53280__$1 = state_53280;
if(cljs.core.truth_(inst_53253)){
var statearr_53291_53317 = state_53280__$1;
(statearr_53291_53317[(1)] = (15));

} else {
var statearr_53292_53318 = state_53280__$1;
(statearr_53292_53318[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (2))){
var state_53280__$1 = state_53280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53280__$1,(4),ch);
} else {
if((state_val_53281 === (11))){
var inst_53240 = (state_53280[(8)]);
var inst_53245 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53246 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_53240);
var inst_53247 = cljs.core.async.timeout.call(null,(1000));
var inst_53248 = [inst_53246,inst_53247];
var inst_53249 = (new cljs.core.PersistentVector(null,2,(5),inst_53245,inst_53248,null));
var state_53280__$1 = state_53280;
return cljs.core.async.ioc_alts_BANG_.call(null,state_53280__$1,(14),inst_53249);
} else {
if((state_val_53281 === (9))){
var inst_53240 = (state_53280[(8)]);
var inst_53266 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_53267 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_53240);
var inst_53268 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_53267);
var inst_53269 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_53268)].join('');
var inst_53270 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_53269);
var state_53280__$1 = (function (){var statearr_53293 = state_53280;
(statearr_53293[(10)] = inst_53266);

return statearr_53293;
})();
var statearr_53294_53319 = state_53280__$1;
(statearr_53294_53319[(2)] = inst_53270);

(statearr_53294_53319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (5))){
var inst_53233 = (state_53280[(7)]);
var inst_53235 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_53236 = (new cljs.core.PersistentArrayMap(null,2,inst_53235,null));
var inst_53237 = (new cljs.core.PersistentHashSet(null,inst_53236,null));
var inst_53238 = figwheel.client.focus_msgs.call(null,inst_53237,inst_53233);
var inst_53239 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_53238);
var inst_53240 = cljs.core.first.call(null,inst_53238);
var inst_53241 = figwheel.client.autoload_QMARK_.call(null);
var state_53280__$1 = (function (){var statearr_53295 = state_53280;
(statearr_53295[(9)] = inst_53239);

(statearr_53295[(8)] = inst_53240);

return statearr_53295;
})();
if(cljs.core.truth_(inst_53241)){
var statearr_53296_53320 = state_53280__$1;
(statearr_53296_53320[(1)] = (8));

} else {
var statearr_53297_53321 = state_53280__$1;
(statearr_53297_53321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (14))){
var inst_53251 = (state_53280[(2)]);
var state_53280__$1 = state_53280;
var statearr_53298_53322 = state_53280__$1;
(statearr_53298_53322[(2)] = inst_53251);

(statearr_53298_53322[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (16))){
var state_53280__$1 = state_53280;
var statearr_53299_53323 = state_53280__$1;
(statearr_53299_53323[(2)] = null);

(statearr_53299_53323[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (10))){
var inst_53272 = (state_53280[(2)]);
var state_53280__$1 = (function (){var statearr_53300 = state_53280;
(statearr_53300[(11)] = inst_53272);

return statearr_53300;
})();
var statearr_53301_53324 = state_53280__$1;
(statearr_53301_53324[(2)] = null);

(statearr_53301_53324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (8))){
var inst_53239 = (state_53280[(9)]);
var inst_53243 = figwheel.client.reload_file_state_QMARK_.call(null,inst_53239,opts);
var state_53280__$1 = state_53280;
if(cljs.core.truth_(inst_53243)){
var statearr_53302_53325 = state_53280__$1;
(statearr_53302_53325[(1)] = (11));

} else {
var statearr_53303_53326 = state_53280__$1;
(statearr_53303_53326[(1)] = (12));

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
});})(c__50326__auto___53308,ch))
;
return ((function (switch__50236__auto__,c__50326__auto___53308,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__50237__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__50237__auto____0 = (function (){
var statearr_53304 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53304[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__50237__auto__);

(statearr_53304[(1)] = (1));

return statearr_53304;
});
var figwheel$client$file_reloader_plugin_$_state_machine__50237__auto____1 = (function (state_53280){
while(true){
var ret_value__50238__auto__ = (function (){try{while(true){
var result__50239__auto__ = switch__50236__auto__.call(null,state_53280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50239__auto__;
}
break;
}
}catch (e53305){if((e53305 instanceof Object)){
var ex__50240__auto__ = e53305;
var statearr_53306_53327 = state_53280;
(statearr_53306_53327[(5)] = ex__50240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53328 = state_53280;
state_53280 = G__53328;
continue;
} else {
return ret_value__50238__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__50237__auto__ = function(state_53280){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__50237__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__50237__auto____1.call(this,state_53280);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__50237__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__50237__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__50237__auto__;
})()
;})(switch__50236__auto__,c__50326__auto___53308,ch))
})();
var state__50328__auto__ = (function (){var statearr_53307 = f__50327__auto__.call(null);
(statearr_53307[(6)] = c__50326__auto___53308);

return statearr_53307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50328__auto__);
});})(c__50326__auto___53308,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__53329_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__53329_SHARP_));
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
var base_path_53331 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_53331){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e53330){if((e53330 instanceof Error)){
var e = e53330;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_53331], null));
} else {
var e = e53330;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_53331))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__53332){
var map__53333 = p__53332;
var map__53333__$1 = ((((!((map__53333 == null)))?((((map__53333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53333):map__53333);
var opts = map__53333__$1;
var build_id = cljs.core.get.call(null,map__53333__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__53333,map__53333__$1,opts,build_id){
return (function (p__53335){
var vec__53336 = p__53335;
var seq__53337 = cljs.core.seq.call(null,vec__53336);
var first__53338 = cljs.core.first.call(null,seq__53337);
var seq__53337__$1 = cljs.core.next.call(null,seq__53337);
var map__53339 = first__53338;
var map__53339__$1 = ((((!((map__53339 == null)))?((((map__53339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53339):map__53339);
var msg = map__53339__$1;
var msg_name = cljs.core.get.call(null,map__53339__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__53337__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__53336,seq__53337,first__53338,seq__53337__$1,map__53339,map__53339__$1,msg,msg_name,_,map__53333,map__53333__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__53336,seq__53337,first__53338,seq__53337__$1,map__53339,map__53339__$1,msg,msg_name,_,map__53333,map__53333__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__53333,map__53333__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__53341){
var vec__53342 = p__53341;
var seq__53343 = cljs.core.seq.call(null,vec__53342);
var first__53344 = cljs.core.first.call(null,seq__53343);
var seq__53343__$1 = cljs.core.next.call(null,seq__53343);
var map__53345 = first__53344;
var map__53345__$1 = ((((!((map__53345 == null)))?((((map__53345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53345.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53345):map__53345);
var msg = map__53345__$1;
var msg_name = cljs.core.get.call(null,map__53345__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__53343__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__53347){
var map__53348 = p__53347;
var map__53348__$1 = ((((!((map__53348 == null)))?((((map__53348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53348.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53348):map__53348);
var on_compile_warning = cljs.core.get.call(null,map__53348__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__53348__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__53348,map__53348__$1,on_compile_warning,on_compile_fail){
return (function (p__53350){
var vec__53351 = p__53350;
var seq__53352 = cljs.core.seq.call(null,vec__53351);
var first__53353 = cljs.core.first.call(null,seq__53352);
var seq__53352__$1 = cljs.core.next.call(null,seq__53352);
var map__53354 = first__53353;
var map__53354__$1 = ((((!((map__53354 == null)))?((((map__53354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53354.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53354):map__53354);
var msg = map__53354__$1;
var msg_name = cljs.core.get.call(null,map__53354__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__53352__$1;
var pred__53356 = cljs.core._EQ_;
var expr__53357 = msg_name;
if(cljs.core.truth_(pred__53356.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__53357))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__53356.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__53357))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__53348,map__53348__$1,on_compile_warning,on_compile_fail))
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
var c__50326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50326__auto__,msg_hist,msg_names,msg){
return (function (){
var f__50327__auto__ = (function (){var switch__50236__auto__ = ((function (c__50326__auto__,msg_hist,msg_names,msg){
return (function (state_53446){
var state_val_53447 = (state_53446[(1)]);
if((state_val_53447 === (7))){
var inst_53366 = (state_53446[(2)]);
var state_53446__$1 = state_53446;
if(cljs.core.truth_(inst_53366)){
var statearr_53448_53495 = state_53446__$1;
(statearr_53448_53495[(1)] = (8));

} else {
var statearr_53449_53496 = state_53446__$1;
(statearr_53449_53496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53447 === (20))){
var inst_53440 = (state_53446[(2)]);
var state_53446__$1 = state_53446;
var statearr_53450_53497 = state_53446__$1;
(statearr_53450_53497[(2)] = inst_53440);

(statearr_53450_53497[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53447 === (27))){
var inst_53436 = (state_53446[(2)]);
var state_53446__$1 = state_53446;
var statearr_53451_53498 = state_53446__$1;
(statearr_53451_53498[(2)] = inst_53436);

(statearr_53451_53498[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53447 === (1))){
var inst_53359 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_53446__$1 = state_53446;
if(cljs.core.truth_(inst_53359)){
var statearr_53452_53499 = state_53446__$1;
(statearr_53452_53499[(1)] = (2));

} else {
var statearr_53453_53500 = state_53446__$1;
(statearr_53453_53500[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53447 === (24))){
var inst_53438 = (state_53446[(2)]);
var state_53446__$1 = state_53446;
var statearr_53454_53501 = state_53446__$1;
(statearr_53454_53501[(2)] = inst_53438);

(statearr_53454_53501[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53447 === (4))){
var inst_53444 = (state_53446[(2)]);
var state_53446__$1 = state_53446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53446__$1,inst_53444);
} else {
if((state_val_53447 === (15))){
var inst_53442 = (state_53446[(2)]);
var state_53446__$1 = state_53446;
var statearr_53455_53502 = state_53446__$1;
(statearr_53455_53502[(2)] = inst_53442);

(statearr_53455_53502[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53447 === (21))){
var inst_53395 = (state_53446[(2)]);
var inst_53396 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53397 = figwheel.client.auto_jump_to_error.call(null,opts,inst_53396);
var state_53446__$1 = (function (){var statearr_53456 = state_53446;
(statearr_53456[(7)] = inst_53395);

return statearr_53456;
})();
var statearr_53457_53503 = state_53446__$1;
(statearr_53457_53503[(2)] = inst_53397);

(statearr_53457_53503[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53447 === (31))){
var inst_53425 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_53446__$1 = state_53446;
if(cljs.core.truth_(inst_53425)){
var statearr_53458_53504 = state_53446__$1;
(statearr_53458_53504[(1)] = (34));

} else {
var statearr_53459_53505 = state_53446__$1;
(statearr_53459_53505[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53447 === (32))){
var inst_53434 = (state_53446[(2)]);
var state_53446__$1 = state_53446;
var statearr_53460_53506 = state_53446__$1;
(statearr_53460_53506[(2)] = inst_53434);

(statearr_53460_53506[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53447 === (33))){
var inst_53421 = (state_53446[(2)]);
var inst_53422 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53423 = figwheel.client.auto_jump_to_error.call(null,opts,inst_53422);
var state_53446__$1 = (function (){var statearr_53461 = state_53446;
(statearr_53461[(8)] = inst_53421);

return statearr_53461;
})();
var statearr_53462_53507 = state_53446__$1;
(statearr_53462_53507[(2)] = inst_53423);

(statearr_53462_53507[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53447 === (13))){
var inst_53380 = figwheel.client.heads_up.clear.call(null);
var state_53446__$1 = state_53446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53446__$1,(16),inst_53380);
} else {
if((state_val_53447 === (22))){
var inst_53401 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53402 = figwheel.client.heads_up.append_warning_message.call(null,inst_53401);
var state_53446__$1 = state_53446;
var statearr_53463_53508 = state_53446__$1;
(statearr_53463_53508[(2)] = inst_53402);

(statearr_53463_53508[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53447 === (36))){
var inst_53432 = (state_53446[(2)]);
var state_53446__$1 = state_53446;
var statearr_53464_53509 = state_53446__$1;
(statearr_53464_53509[(2)] = inst_53432);

(statearr_53464_53509[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53447 === (29))){
var inst_53412 = (state_53446[(2)]);
var inst_53413 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53414 = figwheel.client.auto_jump_to_error.call(null,opts,inst_53413);
var state_53446__$1 = (function (){var statearr_53465 = state_53446;
(statearr_53465[(9)] = inst_53412);

return statearr_53465;
})();
var statearr_53466_53510 = state_53446__$1;
(statearr_53466_53510[(2)] = inst_53414);

(statearr_53466_53510[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53447 === (6))){
var inst_53361 = (state_53446[(10)]);
var state_53446__$1 = state_53446;
var statearr_53467_53511 = state_53446__$1;
(statearr_53467_53511[(2)] = inst_53361);

(statearr_53467_53511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53447 === (28))){
var inst_53408 = (state_53446[(2)]);
var inst_53409 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53410 = figwheel.client.heads_up.display_warning.call(null,inst_53409);
var state_53446__$1 = (function (){var statearr_53468 = state_53446;
(statearr_53468[(11)] = inst_53408);

return statearr_53468;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53446__$1,(29),inst_53410);
} else {
if((state_val_53447 === (25))){
var inst_53406 = figwheel.client.heads_up.clear.call(null);
var state_53446__$1 = state_53446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53446__$1,(28),inst_53406);
} else {
if((state_val_53447 === (34))){
var inst_53427 = figwheel.client.heads_up.flash_loaded.call(null);
var state_53446__$1 = state_53446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53446__$1,(37),inst_53427);
} else {
if((state_val_53447 === (17))){
var inst_53386 = (state_53446[(2)]);
var inst_53387 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53388 = figwheel.client.auto_jump_to_error.call(null,opts,inst_53387);
var state_53446__$1 = (function (){var statearr_53469 = state_53446;
(statearr_53469[(12)] = inst_53386);

return statearr_53469;
})();
var statearr_53470_53512 = state_53446__$1;
(statearr_53470_53512[(2)] = inst_53388);

(statearr_53470_53512[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53447 === (3))){
var inst_53378 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_53446__$1 = state_53446;
if(cljs.core.truth_(inst_53378)){
var statearr_53471_53513 = state_53446__$1;
(statearr_53471_53513[(1)] = (13));

} else {
var statearr_53472_53514 = state_53446__$1;
(statearr_53472_53514[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53447 === (12))){
var inst_53374 = (state_53446[(2)]);
var state_53446__$1 = state_53446;
var statearr_53473_53515 = state_53446__$1;
(statearr_53473_53515[(2)] = inst_53374);

(statearr_53473_53515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53447 === (2))){
var inst_53361 = (state_53446[(10)]);
var inst_53361__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_53446__$1 = (function (){var statearr_53474 = state_53446;
(statearr_53474[(10)] = inst_53361__$1);

return statearr_53474;
})();
if(cljs.core.truth_(inst_53361__$1)){
var statearr_53475_53516 = state_53446__$1;
(statearr_53475_53516[(1)] = (5));

} else {
var statearr_53476_53517 = state_53446__$1;
(statearr_53476_53517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53447 === (23))){
var inst_53404 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_53446__$1 = state_53446;
if(cljs.core.truth_(inst_53404)){
var statearr_53477_53518 = state_53446__$1;
(statearr_53477_53518[(1)] = (25));

} else {
var statearr_53478_53519 = state_53446__$1;
(statearr_53478_53519[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53447 === (35))){
var state_53446__$1 = state_53446;
var statearr_53479_53520 = state_53446__$1;
(statearr_53479_53520[(2)] = null);

(statearr_53479_53520[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53447 === (19))){
var inst_53399 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_53446__$1 = state_53446;
if(cljs.core.truth_(inst_53399)){
var statearr_53480_53521 = state_53446__$1;
(statearr_53480_53521[(1)] = (22));

} else {
var statearr_53481_53522 = state_53446__$1;
(statearr_53481_53522[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53447 === (11))){
var inst_53370 = (state_53446[(2)]);
var state_53446__$1 = state_53446;
var statearr_53482_53523 = state_53446__$1;
(statearr_53482_53523[(2)] = inst_53370);

(statearr_53482_53523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53447 === (9))){
var inst_53372 = figwheel.client.heads_up.clear.call(null);
var state_53446__$1 = state_53446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53446__$1,(12),inst_53372);
} else {
if((state_val_53447 === (5))){
var inst_53363 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_53446__$1 = state_53446;
var statearr_53483_53524 = state_53446__$1;
(statearr_53483_53524[(2)] = inst_53363);

(statearr_53483_53524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53447 === (14))){
var inst_53390 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_53446__$1 = state_53446;
if(cljs.core.truth_(inst_53390)){
var statearr_53484_53525 = state_53446__$1;
(statearr_53484_53525[(1)] = (18));

} else {
var statearr_53485_53526 = state_53446__$1;
(statearr_53485_53526[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53447 === (26))){
var inst_53416 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_53446__$1 = state_53446;
if(cljs.core.truth_(inst_53416)){
var statearr_53486_53527 = state_53446__$1;
(statearr_53486_53527[(1)] = (30));

} else {
var statearr_53487_53528 = state_53446__$1;
(statearr_53487_53528[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53447 === (16))){
var inst_53382 = (state_53446[(2)]);
var inst_53383 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53384 = figwheel.client.heads_up.display_exception.call(null,inst_53383);
var state_53446__$1 = (function (){var statearr_53488 = state_53446;
(statearr_53488[(13)] = inst_53382);

return statearr_53488;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53446__$1,(17),inst_53384);
} else {
if((state_val_53447 === (30))){
var inst_53418 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53419 = figwheel.client.heads_up.display_warning.call(null,inst_53418);
var state_53446__$1 = state_53446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53446__$1,(33),inst_53419);
} else {
if((state_val_53447 === (10))){
var inst_53376 = (state_53446[(2)]);
var state_53446__$1 = state_53446;
var statearr_53489_53529 = state_53446__$1;
(statearr_53489_53529[(2)] = inst_53376);

(statearr_53489_53529[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53447 === (18))){
var inst_53392 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53393 = figwheel.client.heads_up.display_exception.call(null,inst_53392);
var state_53446__$1 = state_53446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53446__$1,(21),inst_53393);
} else {
if((state_val_53447 === (37))){
var inst_53429 = (state_53446[(2)]);
var state_53446__$1 = state_53446;
var statearr_53490_53530 = state_53446__$1;
(statearr_53490_53530[(2)] = inst_53429);

(statearr_53490_53530[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53447 === (8))){
var inst_53368 = figwheel.client.heads_up.flash_loaded.call(null);
var state_53446__$1 = state_53446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53446__$1,(11),inst_53368);
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
});})(c__50326__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__50236__auto__,c__50326__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50237__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50237__auto____0 = (function (){
var statearr_53491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53491[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50237__auto__);

(statearr_53491[(1)] = (1));

return statearr_53491;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50237__auto____1 = (function (state_53446){
while(true){
var ret_value__50238__auto__ = (function (){try{while(true){
var result__50239__auto__ = switch__50236__auto__.call(null,state_53446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50239__auto__;
}
break;
}
}catch (e53492){if((e53492 instanceof Object)){
var ex__50240__auto__ = e53492;
var statearr_53493_53531 = state_53446;
(statearr_53493_53531[(5)] = ex__50240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53532 = state_53446;
state_53446 = G__53532;
continue;
} else {
return ret_value__50238__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50237__auto__ = function(state_53446){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50237__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50237__auto____1.call(this,state_53446);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50237__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50237__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50237__auto__;
})()
;})(switch__50236__auto__,c__50326__auto__,msg_hist,msg_names,msg))
})();
var state__50328__auto__ = (function (){var statearr_53494 = f__50327__auto__.call(null);
(statearr_53494[(6)] = c__50326__auto__);

return statearr_53494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50328__auto__);
});})(c__50326__auto__,msg_hist,msg_names,msg))
);

return c__50326__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__50326__auto___53561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50326__auto___53561,ch){
return (function (){
var f__50327__auto__ = (function (){var switch__50236__auto__ = ((function (c__50326__auto___53561,ch){
return (function (state_53547){
var state_val_53548 = (state_53547[(1)]);
if((state_val_53548 === (1))){
var state_53547__$1 = state_53547;
var statearr_53549_53562 = state_53547__$1;
(statearr_53549_53562[(2)] = null);

(statearr_53549_53562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53548 === (2))){
var state_53547__$1 = state_53547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53547__$1,(4),ch);
} else {
if((state_val_53548 === (3))){
var inst_53545 = (state_53547[(2)]);
var state_53547__$1 = state_53547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53547__$1,inst_53545);
} else {
if((state_val_53548 === (4))){
var inst_53535 = (state_53547[(7)]);
var inst_53535__$1 = (state_53547[(2)]);
var state_53547__$1 = (function (){var statearr_53550 = state_53547;
(statearr_53550[(7)] = inst_53535__$1);

return statearr_53550;
})();
if(cljs.core.truth_(inst_53535__$1)){
var statearr_53551_53563 = state_53547__$1;
(statearr_53551_53563[(1)] = (5));

} else {
var statearr_53552_53564 = state_53547__$1;
(statearr_53552_53564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53548 === (5))){
var inst_53535 = (state_53547[(7)]);
var inst_53537 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_53535);
var state_53547__$1 = state_53547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53547__$1,(8),inst_53537);
} else {
if((state_val_53548 === (6))){
var state_53547__$1 = state_53547;
var statearr_53553_53565 = state_53547__$1;
(statearr_53553_53565[(2)] = null);

(statearr_53553_53565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53548 === (7))){
var inst_53543 = (state_53547[(2)]);
var state_53547__$1 = state_53547;
var statearr_53554_53566 = state_53547__$1;
(statearr_53554_53566[(2)] = inst_53543);

(statearr_53554_53566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53548 === (8))){
var inst_53539 = (state_53547[(2)]);
var state_53547__$1 = (function (){var statearr_53555 = state_53547;
(statearr_53555[(8)] = inst_53539);

return statearr_53555;
})();
var statearr_53556_53567 = state_53547__$1;
(statearr_53556_53567[(2)] = null);

(statearr_53556_53567[(1)] = (2));


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
});})(c__50326__auto___53561,ch))
;
return ((function (switch__50236__auto__,c__50326__auto___53561,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__50237__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__50237__auto____0 = (function (){
var statearr_53557 = [null,null,null,null,null,null,null,null,null];
(statearr_53557[(0)] = figwheel$client$heads_up_plugin_$_state_machine__50237__auto__);

(statearr_53557[(1)] = (1));

return statearr_53557;
});
var figwheel$client$heads_up_plugin_$_state_machine__50237__auto____1 = (function (state_53547){
while(true){
var ret_value__50238__auto__ = (function (){try{while(true){
var result__50239__auto__ = switch__50236__auto__.call(null,state_53547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50239__auto__;
}
break;
}
}catch (e53558){if((e53558 instanceof Object)){
var ex__50240__auto__ = e53558;
var statearr_53559_53568 = state_53547;
(statearr_53559_53568[(5)] = ex__50240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53569 = state_53547;
state_53547 = G__53569;
continue;
} else {
return ret_value__50238__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__50237__auto__ = function(state_53547){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__50237__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__50237__auto____1.call(this,state_53547);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__50237__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__50237__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__50237__auto__;
})()
;})(switch__50236__auto__,c__50326__auto___53561,ch))
})();
var state__50328__auto__ = (function (){var statearr_53560 = f__50327__auto__.call(null);
(statearr_53560[(6)] = c__50326__auto___53561);

return statearr_53560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50328__auto__);
});})(c__50326__auto___53561,ch))
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
var c__50326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50326__auto__){
return (function (){
var f__50327__auto__ = (function (){var switch__50236__auto__ = ((function (c__50326__auto__){
return (function (state_53575){
var state_val_53576 = (state_53575[(1)]);
if((state_val_53576 === (1))){
var inst_53570 = cljs.core.async.timeout.call(null,(3000));
var state_53575__$1 = state_53575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53575__$1,(2),inst_53570);
} else {
if((state_val_53576 === (2))){
var inst_53572 = (state_53575[(2)]);
var inst_53573 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_53575__$1 = (function (){var statearr_53577 = state_53575;
(statearr_53577[(7)] = inst_53572);

return statearr_53577;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53575__$1,inst_53573);
} else {
return null;
}
}
});})(c__50326__auto__))
;
return ((function (switch__50236__auto__,c__50326__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__50237__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__50237__auto____0 = (function (){
var statearr_53578 = [null,null,null,null,null,null,null,null];
(statearr_53578[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__50237__auto__);

(statearr_53578[(1)] = (1));

return statearr_53578;
});
var figwheel$client$enforce_project_plugin_$_state_machine__50237__auto____1 = (function (state_53575){
while(true){
var ret_value__50238__auto__ = (function (){try{while(true){
var result__50239__auto__ = switch__50236__auto__.call(null,state_53575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50239__auto__;
}
break;
}
}catch (e53579){if((e53579 instanceof Object)){
var ex__50240__auto__ = e53579;
var statearr_53580_53582 = state_53575;
(statearr_53580_53582[(5)] = ex__50240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53583 = state_53575;
state_53575 = G__53583;
continue;
} else {
return ret_value__50238__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__50237__auto__ = function(state_53575){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__50237__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__50237__auto____1.call(this,state_53575);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__50237__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__50237__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__50237__auto__;
})()
;})(switch__50236__auto__,c__50326__auto__))
})();
var state__50328__auto__ = (function (){var statearr_53581 = f__50327__auto__.call(null);
(statearr_53581[(6)] = c__50326__auto__);

return statearr_53581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50328__auto__);
});})(c__50326__auto__))
);

return c__50326__auto__;
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
var temp__5459__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5459__auto__)){
var figwheel_version = temp__5459__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__50326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50326__auto__,figwheel_version,temp__5459__auto__){
return (function (){
var f__50327__auto__ = (function (){var switch__50236__auto__ = ((function (c__50326__auto__,figwheel_version,temp__5459__auto__){
return (function (state_53590){
var state_val_53591 = (state_53590[(1)]);
if((state_val_53591 === (1))){
var inst_53584 = cljs.core.async.timeout.call(null,(2000));
var state_53590__$1 = state_53590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53590__$1,(2),inst_53584);
} else {
if((state_val_53591 === (2))){
var inst_53586 = (state_53590[(2)]);
var inst_53587 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_53588 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_53587);
var state_53590__$1 = (function (){var statearr_53592 = state_53590;
(statearr_53592[(7)] = inst_53586);

return statearr_53592;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53590__$1,inst_53588);
} else {
return null;
}
}
});})(c__50326__auto__,figwheel_version,temp__5459__auto__))
;
return ((function (switch__50236__auto__,c__50326__auto__,figwheel_version,temp__5459__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50237__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50237__auto____0 = (function (){
var statearr_53593 = [null,null,null,null,null,null,null,null];
(statearr_53593[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50237__auto__);

(statearr_53593[(1)] = (1));

return statearr_53593;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50237__auto____1 = (function (state_53590){
while(true){
var ret_value__50238__auto__ = (function (){try{while(true){
var result__50239__auto__ = switch__50236__auto__.call(null,state_53590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50239__auto__;
}
break;
}
}catch (e53594){if((e53594 instanceof Object)){
var ex__50240__auto__ = e53594;
var statearr_53595_53597 = state_53590;
(statearr_53595_53597[(5)] = ex__50240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53598 = state_53590;
state_53590 = G__53598;
continue;
} else {
return ret_value__50238__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50237__auto__ = function(state_53590){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50237__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50237__auto____1.call(this,state_53590);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50237__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50237__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50237__auto__;
})()
;})(switch__50236__auto__,c__50326__auto__,figwheel_version,temp__5459__auto__))
})();
var state__50328__auto__ = (function (){var statearr_53596 = f__50327__auto__.call(null);
(statearr_53596[(6)] = c__50326__auto__);

return statearr_53596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50328__auto__);
});})(c__50326__auto__,figwheel_version,temp__5459__auto__))
);

return c__50326__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__53599){
var map__53600 = p__53599;
var map__53600__$1 = ((((!((map__53600 == null)))?((((map__53600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53600.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53600):map__53600);
var file = cljs.core.get.call(null,map__53600__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__53600__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__53600__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__53602 = "";
var G__53602__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53602),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__53602);
var G__53602__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53602__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__53602__$1);
if(cljs.core.truth_((function (){var and__36913__auto__ = line;
if(cljs.core.truth_(and__36913__auto__)){
return column;
} else {
return and__36913__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53602__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__53602__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__53603){
var map__53604 = p__53603;
var map__53604__$1 = ((((!((map__53604 == null)))?((((map__53604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53604.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53604):map__53604);
var ed = map__53604__$1;
var formatted_exception = cljs.core.get.call(null,map__53604__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__53604__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__53604__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__53606_53610 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__53607_53611 = null;
var count__53608_53612 = (0);
var i__53609_53613 = (0);
while(true){
if((i__53609_53613 < count__53608_53612)){
var msg_53614 = cljs.core._nth.call(null,chunk__53607_53611,i__53609_53613);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_53614);

var G__53615 = seq__53606_53610;
var G__53616 = chunk__53607_53611;
var G__53617 = count__53608_53612;
var G__53618 = (i__53609_53613 + (1));
seq__53606_53610 = G__53615;
chunk__53607_53611 = G__53616;
count__53608_53612 = G__53617;
i__53609_53613 = G__53618;
continue;
} else {
var temp__5459__auto___53619 = cljs.core.seq.call(null,seq__53606_53610);
if(temp__5459__auto___53619){
var seq__53606_53620__$1 = temp__5459__auto___53619;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53606_53620__$1)){
var c__37856__auto___53621 = cljs.core.chunk_first.call(null,seq__53606_53620__$1);
var G__53622 = cljs.core.chunk_rest.call(null,seq__53606_53620__$1);
var G__53623 = c__37856__auto___53621;
var G__53624 = cljs.core.count.call(null,c__37856__auto___53621);
var G__53625 = (0);
seq__53606_53610 = G__53622;
chunk__53607_53611 = G__53623;
count__53608_53612 = G__53624;
i__53609_53613 = G__53625;
continue;
} else {
var msg_53626 = cljs.core.first.call(null,seq__53606_53620__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_53626);

var G__53627 = cljs.core.next.call(null,seq__53606_53620__$1);
var G__53628 = null;
var G__53629 = (0);
var G__53630 = (0);
seq__53606_53610 = G__53627;
chunk__53607_53611 = G__53628;
count__53608_53612 = G__53629;
i__53609_53613 = G__53630;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__53631){
var map__53632 = p__53631;
var map__53632__$1 = ((((!((map__53632 == null)))?((((map__53632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53632.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53632):map__53632);
var w = map__53632__$1;
var message = cljs.core.get.call(null,map__53632__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__36913__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__36913__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__36913__auto__;
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
var seq__53634 = cljs.core.seq.call(null,plugins);
var chunk__53635 = null;
var count__53636 = (0);
var i__53637 = (0);
while(true){
if((i__53637 < count__53636)){
var vec__53638 = cljs.core._nth.call(null,chunk__53635,i__53637);
var k = cljs.core.nth.call(null,vec__53638,(0),null);
var plugin = cljs.core.nth.call(null,vec__53638,(1),null);
if(cljs.core.truth_(plugin)){
var pl_53644 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__53634,chunk__53635,count__53636,i__53637,pl_53644,vec__53638,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_53644.call(null,msg_hist);
});})(seq__53634,chunk__53635,count__53636,i__53637,pl_53644,vec__53638,k,plugin))
);
} else {
}

var G__53645 = seq__53634;
var G__53646 = chunk__53635;
var G__53647 = count__53636;
var G__53648 = (i__53637 + (1));
seq__53634 = G__53645;
chunk__53635 = G__53646;
count__53636 = G__53647;
i__53637 = G__53648;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq.call(null,seq__53634);
if(temp__5459__auto__){
var seq__53634__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53634__$1)){
var c__37856__auto__ = cljs.core.chunk_first.call(null,seq__53634__$1);
var G__53649 = cljs.core.chunk_rest.call(null,seq__53634__$1);
var G__53650 = c__37856__auto__;
var G__53651 = cljs.core.count.call(null,c__37856__auto__);
var G__53652 = (0);
seq__53634 = G__53649;
chunk__53635 = G__53650;
count__53636 = G__53651;
i__53637 = G__53652;
continue;
} else {
var vec__53641 = cljs.core.first.call(null,seq__53634__$1);
var k = cljs.core.nth.call(null,vec__53641,(0),null);
var plugin = cljs.core.nth.call(null,vec__53641,(1),null);
if(cljs.core.truth_(plugin)){
var pl_53653 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__53634,chunk__53635,count__53636,i__53637,pl_53653,vec__53641,k,plugin,seq__53634__$1,temp__5459__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_53653.call(null,msg_hist);
});})(seq__53634,chunk__53635,count__53636,i__53637,pl_53653,vec__53641,k,plugin,seq__53634__$1,temp__5459__auto__))
);
} else {
}

var G__53654 = cljs.core.next.call(null,seq__53634__$1);
var G__53655 = null;
var G__53656 = (0);
var G__53657 = (0);
seq__53634 = G__53654;
chunk__53635 = G__53655;
count__53636 = G__53656;
i__53637 = G__53657;
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
var G__53659 = arguments.length;
switch (G__53659) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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

var seq__53660_53665 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__53661_53666 = null;
var count__53662_53667 = (0);
var i__53663_53668 = (0);
while(true){
if((i__53663_53668 < count__53662_53667)){
var msg_53669 = cljs.core._nth.call(null,chunk__53661_53666,i__53663_53668);
figwheel.client.socket.handle_incoming_message.call(null,msg_53669);

var G__53670 = seq__53660_53665;
var G__53671 = chunk__53661_53666;
var G__53672 = count__53662_53667;
var G__53673 = (i__53663_53668 + (1));
seq__53660_53665 = G__53670;
chunk__53661_53666 = G__53671;
count__53662_53667 = G__53672;
i__53663_53668 = G__53673;
continue;
} else {
var temp__5459__auto___53674 = cljs.core.seq.call(null,seq__53660_53665);
if(temp__5459__auto___53674){
var seq__53660_53675__$1 = temp__5459__auto___53674;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53660_53675__$1)){
var c__37856__auto___53676 = cljs.core.chunk_first.call(null,seq__53660_53675__$1);
var G__53677 = cljs.core.chunk_rest.call(null,seq__53660_53675__$1);
var G__53678 = c__37856__auto___53676;
var G__53679 = cljs.core.count.call(null,c__37856__auto___53676);
var G__53680 = (0);
seq__53660_53665 = G__53677;
chunk__53661_53666 = G__53678;
count__53662_53667 = G__53679;
i__53663_53668 = G__53680;
continue;
} else {
var msg_53681 = cljs.core.first.call(null,seq__53660_53675__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_53681);

var G__53682 = cljs.core.next.call(null,seq__53660_53675__$1);
var G__53683 = null;
var G__53684 = (0);
var G__53685 = (0);
seq__53660_53665 = G__53682;
chunk__53661_53666 = G__53683;
count__53662_53667 = G__53684;
i__53663_53668 = G__53685;
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
var args__38211__auto__ = [];
var len__38204__auto___53690 = arguments.length;
var i__38205__auto___53691 = (0);
while(true){
if((i__38205__auto___53691 < len__38204__auto___53690)){
args__38211__auto__.push((arguments[i__38205__auto___53691]));

var G__53692 = (i__38205__auto___53691 + (1));
i__38205__auto___53691 = G__53692;
continue;
} else {
}
break;
}

var argseq__38212__auto__ = ((((0) < args__38211__auto__.length))?(new cljs.core.IndexedSeq(args__38211__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__38212__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__53687){
var map__53688 = p__53687;
var map__53688__$1 = ((((!((map__53688 == null)))?((((map__53688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53688):map__53688);
var opts = map__53688__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq53686){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53686));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e53693){if((e53693 instanceof Error)){
var e = e53693;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e53693;

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
return (function (p__53694){
var map__53695 = p__53694;
var map__53695__$1 = ((((!((map__53695 == null)))?((((map__53695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53695.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53695):map__53695);
var msg_name = cljs.core.get.call(null,map__53695__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1517117193147
