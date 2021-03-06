// Compiled by ClojureScript 1.9.494 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__37115__auto__ = [];
var len__37108__auto___84582 = arguments.length;
var i__37109__auto___84583 = (0);
while(true){
if((i__37109__auto___84583 < len__37108__auto___84582)){
args__37115__auto__.push((arguments[i__37109__auto___84583]));

var G__84584 = (i__37109__auto___84583 + (1));
i__37109__auto___84583 = G__84584;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((2) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37116__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__84574_84585 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__84575_84586 = null;
var count__84576_84587 = (0);
var i__84577_84588 = (0);
while(true){
if((i__84577_84588 < count__84576_84587)){
var k_84589 = cljs.core._nth.call(null,chunk__84575_84586,i__84577_84588);
e.setAttribute(cljs.core.name.call(null,k_84589),cljs.core.get.call(null,attrs,k_84589));

var G__84590 = seq__84574_84585;
var G__84591 = chunk__84575_84586;
var G__84592 = count__84576_84587;
var G__84593 = (i__84577_84588 + (1));
seq__84574_84585 = G__84590;
chunk__84575_84586 = G__84591;
count__84576_84587 = G__84592;
i__84577_84588 = G__84593;
continue;
} else {
var temp__6753__auto___84594 = cljs.core.seq.call(null,seq__84574_84585);
if(temp__6753__auto___84594){
var seq__84574_84595__$1 = temp__6753__auto___84594;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84574_84595__$1)){
var c__36798__auto___84596 = cljs.core.chunk_first.call(null,seq__84574_84595__$1);
var G__84597 = cljs.core.chunk_rest.call(null,seq__84574_84595__$1);
var G__84598 = c__36798__auto___84596;
var G__84599 = cljs.core.count.call(null,c__36798__auto___84596);
var G__84600 = (0);
seq__84574_84585 = G__84597;
chunk__84575_84586 = G__84598;
count__84576_84587 = G__84599;
i__84577_84588 = G__84600;
continue;
} else {
var k_84601 = cljs.core.first.call(null,seq__84574_84595__$1);
e.setAttribute(cljs.core.name.call(null,k_84601),cljs.core.get.call(null,attrs,k_84601));

var G__84602 = cljs.core.next.call(null,seq__84574_84595__$1);
var G__84603 = null;
var G__84604 = (0);
var G__84605 = (0);
seq__84574_84585 = G__84602;
chunk__84575_84586 = G__84603;
count__84576_84587 = G__84604;
i__84577_84588 = G__84605;
continue;
}
} else {
}
}
break;
}

var seq__84578_84606 = cljs.core.seq.call(null,children);
var chunk__84579_84607 = null;
var count__84580_84608 = (0);
var i__84581_84609 = (0);
while(true){
if((i__84581_84609 < count__84580_84608)){
var ch_84610 = cljs.core._nth.call(null,chunk__84579_84607,i__84581_84609);
e.appendChild(ch_84610);

var G__84611 = seq__84578_84606;
var G__84612 = chunk__84579_84607;
var G__84613 = count__84580_84608;
var G__84614 = (i__84581_84609 + (1));
seq__84578_84606 = G__84611;
chunk__84579_84607 = G__84612;
count__84580_84608 = G__84613;
i__84581_84609 = G__84614;
continue;
} else {
var temp__6753__auto___84615 = cljs.core.seq.call(null,seq__84578_84606);
if(temp__6753__auto___84615){
var seq__84578_84616__$1 = temp__6753__auto___84615;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84578_84616__$1)){
var c__36798__auto___84617 = cljs.core.chunk_first.call(null,seq__84578_84616__$1);
var G__84618 = cljs.core.chunk_rest.call(null,seq__84578_84616__$1);
var G__84619 = c__36798__auto___84617;
var G__84620 = cljs.core.count.call(null,c__36798__auto___84617);
var G__84621 = (0);
seq__84578_84606 = G__84618;
chunk__84579_84607 = G__84619;
count__84580_84608 = G__84620;
i__84581_84609 = G__84621;
continue;
} else {
var ch_84622 = cljs.core.first.call(null,seq__84578_84616__$1);
e.appendChild(ch_84622);

var G__84623 = cljs.core.next.call(null,seq__84578_84616__$1);
var G__84624 = null;
var G__84625 = (0);
var G__84626 = (0);
seq__84578_84606 = G__84623;
chunk__84579_84607 = G__84624;
count__84580_84608 = G__84625;
i__84581_84609 = G__84626;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq84571){
var G__84572 = cljs.core.first.call(null,seq84571);
var seq84571__$1 = cljs.core.next.call(null,seq84571);
var G__84573 = cljs.core.first.call(null,seq84571__$1);
var seq84571__$2 = cljs.core.next.call(null,seq84571__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__84572,G__84573,seq84571__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__36918__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__36919__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__36920__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__36921__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__36922__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__36918__auto__,prefer_table__36919__auto__,method_cache__36920__auto__,cached_hierarchy__36921__auto__,hierarchy__36922__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__36918__auto__,prefer_table__36919__auto__,method_cache__36920__auto__,cached_hierarchy__36921__auto__,hierarchy__36922__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__36922__auto__,method_table__36918__auto__,prefer_table__36919__auto__,method_cache__36920__auto__,cached_hierarchy__36921__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_84627 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-o-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("border-top: 1px solid #f5f5f5;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #333;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 0px 10px 0px 70px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: fixed;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("bottom: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity: 0.0;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-sizing: border-box;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 10000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: left;")].join('')], null));
el_84627.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_84627.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_84627.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_84627);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__84628,st_map){
var map__84635 = p__84628;
var map__84635__$1 = ((((!((map__84635 == null)))?((((map__84635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84635.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84635):map__84635);
var container_el = cljs.core.get.call(null,map__84635__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__84635,map__84635__$1,container_el){
return (function (p__84637){
var vec__84638 = p__84637;
var k = cljs.core.nth.call(null,vec__84638,(0),null);
var v = cljs.core.nth.call(null,vec__84638,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__84635,map__84635__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__84641,dom_str){
var map__84644 = p__84641;
var map__84644__$1 = ((((!((map__84644 == null)))?((((map__84644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84644.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84644):map__84644);
var c = map__84644__$1;
var content_area_el = cljs.core.get.call(null,map__84644__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__84646){
var map__84649 = p__84646;
var map__84649__$1 = ((((!((map__84649 == null)))?((((map__84649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84649.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84649):map__84649);
var content_area_el = cljs.core.get.call(null,map__84649__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("float: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-decoration: none;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: rgba(84,84,84, 0.5);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__40807__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto__){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto__){
return (function (state_84692){
var state_val_84693 = (state_84692[(1)]);
if((state_val_84693 === (1))){
var inst_84677 = (state_84692[(7)]);
var inst_84677__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_84678 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_84679 = ["10px","10px","100%","68px","1.0"];
var inst_84680 = cljs.core.PersistentHashMap.fromArrays(inst_84678,inst_84679);
var inst_84681 = cljs.core.merge.call(null,inst_84680,style);
var inst_84682 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_84677__$1,inst_84681);
var inst_84683 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_84677__$1,msg);
var inst_84684 = cljs.core.async.timeout.call(null,(300));
var state_84692__$1 = (function (){var statearr_84694 = state_84692;
(statearr_84694[(8)] = inst_84683);

(statearr_84694[(7)] = inst_84677__$1);

(statearr_84694[(9)] = inst_84682);

return statearr_84694;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84692__$1,(2),inst_84684);
} else {
if((state_val_84693 === (2))){
var inst_84677 = (state_84692[(7)]);
var inst_84686 = (state_84692[(2)]);
var inst_84687 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_84688 = ["auto"];
var inst_84689 = cljs.core.PersistentHashMap.fromArrays(inst_84687,inst_84688);
var inst_84690 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_84677,inst_84689);
var state_84692__$1 = (function (){var statearr_84695 = state_84692;
(statearr_84695[(10)] = inst_84686);

return statearr_84695;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84692__$1,inst_84690);
} else {
return null;
}
}
});})(c__40807__auto__))
;
return ((function (switch__40784__auto__,c__40807__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__40785__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__40785__auto____0 = (function (){
var statearr_84699 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_84699[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__40785__auto__);

(statearr_84699[(1)] = (1));

return statearr_84699;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__40785__auto____1 = (function (state_84692){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_84692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e84700){if((e84700 instanceof Object)){
var ex__40788__auto__ = e84700;
var statearr_84701_84703 = state_84692;
(statearr_84701_84703[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e84700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84704 = state_84692;
state_84692 = G__84704;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__40785__auto__ = function(state_84692){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__40785__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__40785__auto____1.call(this,state_84692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__40785__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__40785__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto__))
})();
var state__40809__auto__ = (function (){var statearr_84702 = f__40808__auto__.call(null);
(statearr_84702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto__);

return statearr_84702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto__))
);

return c__40807__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args84705 = [];
var len__37108__auto___84708 = arguments.length;
var i__37109__auto___84709 = (0);
while(true){
if((i__37109__auto___84709 < len__37108__auto___84708)){
args84705.push((arguments[i__37109__auto___84709]));

var G__84710 = (i__37109__auto___84709 + (1));
i__37109__auto___84709 = G__84710;
continue;
} else {
}
break;
}

var G__84707 = args84705.length;
switch (G__84707) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args84705.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-bottom: 2px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding-top: 1px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" <span style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("display: inline-block;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-line=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-column=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__84712){
var map__84715 = p__84712;
var map__84715__$1 = ((((!((map__84715 == null)))?((((map__84715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84715.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84715):map__84715);
var file = cljs.core.get.call(null,map__84715__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__84715__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__84715__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__35887__auto__ = file;
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='color: #757575;'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("  </span>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__84717){
var vec__84724 = p__84717;
var typ = cljs.core.nth.call(null,vec__84724,(0),null);
var line_number = cljs.core.nth.call(null,vec__84724,(1),null);
var line = cljs.core.nth.call(null,vec__84724,(2),null);
var pred__84727 = cljs.core._EQ_;
var expr__84728 = typ;
if(cljs.core.truth_(pred__84727.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__84728))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__84727.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__84728))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__84727.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__84728))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__84730_SHARP_){
return cljs.core.update_in.call(null,p1__84730_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__84731_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__84731_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__84734){
var map__84737 = p__84734;
var map__84737__$1 = ((((!((map__84737 == null)))?((((map__84737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84737):map__84737);
var exception = map__84737__$1;
var message = cljs.core.get.call(null,map__84737__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__84737__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__84737__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__84737__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__84737__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__84737__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__84737__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__84737__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__84737__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__84737__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__84737__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__35875__auto__ = file;
if(cljs.core.truth_(and__35875__auto__)){
return line;
} else {
return and__35875__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__84737,map__84737__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__84732_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__84732_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__84737,map__84737__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": ")].join(''):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''),(cljs.core.truth_(display_ex_data)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__84737,map__84737__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__84733_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__84733_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__84733_SHARP_)))].join('');
});})(last_message,map__84737,map__84737__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__84739){
var map__84742 = p__84739;
var map__84742__$1 = ((((!((map__84742 == null)))?((((map__84742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84742.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84742):map__84742);
var file = cljs.core.get.call(null,map__84742__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__84742__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__84742__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__84747 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__84747__$1 = ((((!((map__84747 == null)))?((((map__84747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84747.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84747):map__84747);
var head = cljs.core.get.call(null,map__84747__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__84747__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__84747__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__84747__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__84747__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__84747__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__84747__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__84750){
var map__84753 = p__84750;
var map__84753__$1 = ((((!((map__84753 == null)))?((((map__84753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84753):map__84753);
var warning_data = map__84753__$1;
var file = cljs.core.get.call(null,map__84753__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__84753__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__84753__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__84753__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__84753__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__35875__auto__ = file;
if(cljs.core.truth_(and__35875__auto__)){
return line;
} else {
return and__35875__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__84753,map__84753__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__84749_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__84749_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__84753,map__84753__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__84757 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__84757__$1 = ((((!((map__84757 == null)))?((((map__84757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84757.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84757):map__84757);
var head = cljs.core.get.call(null,map__84757__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__84757__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__84757__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__84757__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__84757__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__84757__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__84757__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__84759){
var map__84763 = p__84759;
var map__84763__$1 = ((((!((map__84763 == null)))?((((map__84763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84763.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84763):map__84763);
var warning_data = map__84763__$1;
var message = cljs.core.get.call(null,map__84763__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__84763__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__84763__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__84763__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__84765 = message;
var G__84765__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__84765),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__84765);
var G__84765__$2 = (cljs.core.truth_((function (){var and__35875__auto__ = line;
if(cljs.core.truth_(and__35875__auto__)){
return column;
} else {
return and__35875__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__84765__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__84765__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__84765__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__84765__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__84766){
var map__84771 = p__84766;
var map__84771__$1 = ((((!((map__84771 == null)))?((((map__84771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84771.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84771):map__84771);
var warning_data = map__84771__$1;
var message = cljs.core.get.call(null,map__84771__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__84771__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__84771__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__84771__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__84773 = figwheel.client.heads_up.ensure_container.call(null);
var map__84773__$1 = ((((!((map__84773 == null)))?((((map__84773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84773.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84773):map__84773);
var content_area_el = cljs.core.get.call(null,map__84773__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__6753__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__6753__auto__)){
var last_child = temp__6753__auto__;
var temp__6751__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__6751__auto__)){
var message_count = temp__6751__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" more warnings have not been displayed ...")].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__40807__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto__){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto__){
return (function (state_84821){
var state_val_84822 = (state_84821[(1)]);
if((state_val_84822 === (1))){
var inst_84804 = (state_84821[(7)]);
var inst_84804__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_84805 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_84806 = ["0.0"];
var inst_84807 = cljs.core.PersistentHashMap.fromArrays(inst_84805,inst_84806);
var inst_84808 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_84804__$1,inst_84807);
var inst_84809 = cljs.core.async.timeout.call(null,(300));
var state_84821__$1 = (function (){var statearr_84823 = state_84821;
(statearr_84823[(8)] = inst_84808);

(statearr_84823[(7)] = inst_84804__$1);

return statearr_84823;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84821__$1,(2),inst_84809);
} else {
if((state_val_84822 === (2))){
var inst_84804 = (state_84821[(7)]);
var inst_84811 = (state_84821[(2)]);
var inst_84812 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_84813 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_84814 = cljs.core.PersistentHashMap.fromArrays(inst_84812,inst_84813);
var inst_84815 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_84804,inst_84814);
var inst_84816 = cljs.core.async.timeout.call(null,(200));
var state_84821__$1 = (function (){var statearr_84824 = state_84821;
(statearr_84824[(9)] = inst_84811);

(statearr_84824[(10)] = inst_84815);

return statearr_84824;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84821__$1,(3),inst_84816);
} else {
if((state_val_84822 === (3))){
var inst_84804 = (state_84821[(7)]);
var inst_84818 = (state_84821[(2)]);
var inst_84819 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_84804,"");
var state_84821__$1 = (function (){var statearr_84825 = state_84821;
(statearr_84825[(11)] = inst_84818);

return statearr_84825;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84821__$1,inst_84819);
} else {
return null;
}
}
}
});})(c__40807__auto__))
;
return ((function (switch__40784__auto__,c__40807__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__40785__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__40785__auto____0 = (function (){
var statearr_84829 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_84829[(0)] = figwheel$client$heads_up$clear_$_state_machine__40785__auto__);

(statearr_84829[(1)] = (1));

return statearr_84829;
});
var figwheel$client$heads_up$clear_$_state_machine__40785__auto____1 = (function (state_84821){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_84821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e84830){if((e84830 instanceof Object)){
var ex__40788__auto__ = e84830;
var statearr_84831_84833 = state_84821;
(statearr_84831_84833[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e84830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84834 = state_84821;
state_84821 = G__84834;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__40785__auto__ = function(state_84821){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__40785__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__40785__auto____1.call(this,state_84821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__40785__auto____0;
figwheel$client$heads_up$clear_$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__40785__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto__))
})();
var state__40809__auto__ = (function (){var statearr_84832 = f__40808__auto__.call(null);
(statearr_84832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto__);

return statearr_84832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto__))
);

return c__40807__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__40807__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40807__auto__){
return (function (){
var f__40808__auto__ = (function (){var switch__40784__auto__ = ((function (c__40807__auto__){
return (function (state_84866){
var state_val_84867 = (state_84866[(1)]);
if((state_val_84867 === (1))){
var inst_84856 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_84866__$1 = state_84866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84866__$1,(2),inst_84856);
} else {
if((state_val_84867 === (2))){
var inst_84858 = (state_84866[(2)]);
var inst_84859 = cljs.core.async.timeout.call(null,(400));
var state_84866__$1 = (function (){var statearr_84868 = state_84866;
(statearr_84868[(7)] = inst_84858);

return statearr_84868;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84866__$1,(3),inst_84859);
} else {
if((state_val_84867 === (3))){
var inst_84861 = (state_84866[(2)]);
var inst_84862 = figwheel.client.heads_up.clear.call(null);
var state_84866__$1 = (function (){var statearr_84869 = state_84866;
(statearr_84869[(8)] = inst_84861);

return statearr_84869;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84866__$1,(4),inst_84862);
} else {
if((state_val_84867 === (4))){
var inst_84864 = (state_84866[(2)]);
var state_84866__$1 = state_84866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84866__$1,inst_84864);
} else {
return null;
}
}
}
}
});})(c__40807__auto__))
;
return ((function (switch__40784__auto__,c__40807__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__40785__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__40785__auto____0 = (function (){
var statearr_84873 = [null,null,null,null,null,null,null,null,null];
(statearr_84873[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__40785__auto__);

(statearr_84873[(1)] = (1));

return statearr_84873;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__40785__auto____1 = (function (state_84866){
while(true){
var ret_value__40786__auto__ = (function (){try{while(true){
var result__40787__auto__ = switch__40784__auto__.call(null,state_84866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40787__auto__;
}
break;
}
}catch (e84874){if((e84874 instanceof Object)){
var ex__40788__auto__ = e84874;
var statearr_84875_84877 = state_84866;
(statearr_84875_84877[(5)] = ex__40788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e84874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84878 = state_84866;
state_84866 = G__84878;
continue;
} else {
return ret_value__40786__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__40785__auto__ = function(state_84866){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__40785__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__40785__auto____1.call(this,state_84866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__40785__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__40785__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__40785__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__40785__auto__;
})()
;})(switch__40784__auto__,c__40807__auto__))
})();
var state__40809__auto__ = (function (){var statearr_84876 = f__40808__auto__.call(null);
(statearr_84876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40807__auto__);

return statearr_84876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40809__auto__);
});})(c__40807__auto__))
);

return c__40807__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__6753__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__6753__auto__)){
var el = temp__6753__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color: rgba(24, 26, 38, 0.95);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: absolute;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 9000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 100vh;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("top: 0px; left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace")].join('')}),goog.dom.createDom("div",({"class": "message", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #FFF5DB;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin: auto;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-top: 10px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: center; "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 2px 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: relative")].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1512968130898