// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('accountant.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('goog.history.Event');
goog.require('goog.history.Html5History');
goog.require('goog.Uri');
if(typeof accountant.core.history !== 'undefined'){
} else {
accountant.core.history = (new goog.history.Html5History());
}
accountant.core.listen = (function accountant$core$listen(el,type){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__19952_19955 = el;
var G__19953_19956 = type;
var G__19954_19957 = ((function (G__19952_19955,G__19953_19956,out){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,e);
});})(G__19952_19955,G__19953_19956,out))
;
goog.events.listen(G__19952_19955,G__19953_19956,G__19954_19957);

return out;
});
accountant.core.dispatch_on_navigate = (function accountant$core$dispatch_on_navigate(history,nav_handler){
var navigation = accountant.core.listen(history,goog.history.EventType.NAVIGATE);
var c__17075__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17075__auto__,navigation){
return (function (){
var f__17076__auto__ = (function (){var switch__16949__auto__ = ((function (c__17075__auto__,navigation){
return (function (state_20000){
var state_val_20001 = (state_20000[(1)]);
if((state_val_20001 === (1))){
var state_20000__$1 = state_20000;
var statearr_20002_20016 = state_20000__$1;
(statearr_20002_20016[(2)] = null);

(statearr_20002_20016[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20001 === (2))){
var state_20000__$1 = state_20000;
var statearr_20003_20017 = state_20000__$1;
(statearr_20003_20017[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_20001 === (3))){
var inst_19998 = (state_20000[(2)]);
var state_20000__$1 = state_20000;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20000__$1,inst_19998);
} else {
if((state_val_20001 === (4))){
var state_20000__$1 = state_20000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20000__$1,(7),navigation);
} else {
if((state_val_20001 === (5))){
var state_20000__$1 = state_20000;
var statearr_20005_20018 = state_20000__$1;
(statearr_20005_20018[(2)] = null);

(statearr_20005_20018[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20001 === (6))){
var inst_19996 = (state_20000[(2)]);
var state_20000__$1 = state_20000;
var statearr_20006_20019 = state_20000__$1;
(statearr_20006_20019[(2)] = inst_19996);

(statearr_20006_20019[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20001 === (7))){
var inst_19990 = (state_20000[(2)]);
var inst_19991 = inst_19990.token;
var inst_19992 = (nav_handler.cljs$core$IFn$_invoke$arity$1 ? nav_handler.cljs$core$IFn$_invoke$arity$1(inst_19991) : nav_handler.call(null,inst_19991));
var state_20000__$1 = (function (){var statearr_20007 = state_20000;
(statearr_20007[(7)] = inst_19992);

return statearr_20007;
})();
var statearr_20008_20020 = state_20000__$1;
(statearr_20008_20020[(2)] = null);

(statearr_20008_20020[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__17075__auto__,navigation))
;
return ((function (switch__16949__auto__,c__17075__auto__,navigation){
return (function() {
var accountant$core$dispatch_on_navigate_$_state_machine__16950__auto__ = null;
var accountant$core$dispatch_on_navigate_$_state_machine__16950__auto____0 = (function (){
var statearr_20012 = [null,null,null,null,null,null,null,null];
(statearr_20012[(0)] = accountant$core$dispatch_on_navigate_$_state_machine__16950__auto__);

(statearr_20012[(1)] = (1));

return statearr_20012;
});
var accountant$core$dispatch_on_navigate_$_state_machine__16950__auto____1 = (function (state_20000){
while(true){
var ret_value__16951__auto__ = (function (){try{while(true){
var result__16952__auto__ = switch__16949__auto__(state_20000);
if(cljs.core.keyword_identical_QMARK_(result__16952__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16952__auto__;
}
break;
}
}catch (e20013){if((e20013 instanceof Object)){
var ex__16953__auto__ = e20013;
var statearr_20014_20021 = state_20000;
(statearr_20014_20021[(5)] = ex__16953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20000);

return cljs.core.cst$kw$recur;
} else {
throw e20013;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16951__auto__,cljs.core.cst$kw$recur)){
var G__20022 = state_20000;
state_20000 = G__20022;
continue;
} else {
return ret_value__16951__auto__;
}
break;
}
});
accountant$core$dispatch_on_navigate_$_state_machine__16950__auto__ = function(state_20000){
switch(arguments.length){
case 0:
return accountant$core$dispatch_on_navigate_$_state_machine__16950__auto____0.call(this);
case 1:
return accountant$core$dispatch_on_navigate_$_state_machine__16950__auto____1.call(this,state_20000);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
accountant$core$dispatch_on_navigate_$_state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$0 = accountant$core$dispatch_on_navigate_$_state_machine__16950__auto____0;
accountant$core$dispatch_on_navigate_$_state_machine__16950__auto__.cljs$core$IFn$_invoke$arity$1 = accountant$core$dispatch_on_navigate_$_state_machine__16950__auto____1;
return accountant$core$dispatch_on_navigate_$_state_machine__16950__auto__;
})()
;})(switch__16949__auto__,c__17075__auto__,navigation))
})();
var state__17077__auto__ = (function (){var statearr_20015 = (f__17076__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17076__auto__.cljs$core$IFn$_invoke$arity$0() : f__17076__auto__.call(null));
(statearr_20015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17075__auto__);

return statearr_20015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17077__auto__);
});})(c__17075__auto__,navigation))
);

return c__17075__auto__;
});
/**
 * Given a DOM element that may or may not be a link, traverse up the DOM tree
 *   to see if any of its parents are links. If so, return the node.
 */
accountant.core.find_href_node = (function accountant$core$find_href_node(e){
while(true){
if(cljs.core.truth_(e.href)){
return e;
} else {
var temp__5278__auto__ = e.parentNode;
if(cljs.core.truth_(temp__5278__auto__)){
var parent = temp__5278__auto__;
var G__20023 = parent;
e = G__20023;
continue;
} else {
return null;
}
}
break;
}
});
/**
 * Gets the URL for a history token, but without preserving the query string
 *   as Google's version incorrectly does. (See https://goo.gl/xwgUos)
 */
accountant.core.get_url = (function accountant$core$get_url(history,token){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(history.pathPrefix_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('');
});
/**
 * Sets a history token, but without preserving the query string as Google's
 *   version incorrectly does. (See https://goo.gl/xwgUos)
 */
accountant.core.set_token_BANG_ = (function accountant$core$set_token_BANG_(history,token,title){
var js_history = history.window_.history;
var url = accountant.core.get_url(history,token);
js_history.pushState(null,(function (){var or__7960__auto__ = title;
if(cljs.core.truth_(or__7960__auto__)){
return or__7960__auto__;
} else {
var or__7960__auto____$1 = document.title;
if(cljs.core.truth_(or__7960__auto____$1)){
return or__7960__auto____$1;
} else {
return "";
}
}
})(),url);

return history.dispatchEvent((new goog.history.Event(token)));
});
accountant.core.uri__GT_query = (function accountant$core$uri__GT_query(uri){
var query = uri.getQuery();
if(cljs.core.empty_QMARK_(query)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('');
}
});
accountant.core.uri__GT_fragment = (function accountant$core$uri__GT_fragment(uri){
var fragment = uri.getFragment();
if(cljs.core.empty_QMARK_(fragment)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fragment)].join('');
}
});
/**
 * Create a click handler that blocks page reloads for known routes
 */
accountant.core.prevent_reload_on_known_path = (function accountant$core$prevent_reload_on_known_path(history,path_exists_QMARK_){
var G__20027 = document;
var G__20028 = "click";
var G__20029 = ((function (G__20027,G__20028){
return (function (e){
var target = e.target;
var button = e.button;
var meta_key = e.metaKey;
var alt_key = e.altKey;
var ctrl_key = e.ctrlKey;
var shift_key = e.shiftKey;
var any_key = (function (){var or__7960__auto__ = meta_key;
if(cljs.core.truth_(or__7960__auto__)){
return or__7960__auto__;
} else {
var or__7960__auto____$1 = alt_key;
if(cljs.core.truth_(or__7960__auto____$1)){
return or__7960__auto____$1;
} else {
var or__7960__auto____$2 = ctrl_key;
if(cljs.core.truth_(or__7960__auto____$2)){
return or__7960__auto____$2;
} else {
return shift_key;
}
}
}
})();
var href_node = accountant.core.find_href_node(target);
var href = (cljs.core.truth_(href_node)?href_node.href:null);
var link_target = (cljs.core.truth_(href_node)?href_node.target:null);
var uri = goog.Uri.parse(href);
var path = uri.getPath();
var query = accountant.core.uri__GT_query(uri);
var fragment = accountant.core.uri__GT_fragment(uri);
var relative_href = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fragment)].join('');
var title = target.title;
var host = uri.getDomain();
var port = uri.getPort();
var current_host = window.location.hostname;
var current_port = window.location.port;
var loc = window.location;
var current_relative_href = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.query),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.hash)].join('');
if(cljs.core.truth_((function (){var and__7948__auto__ = cljs.core.not(any_key);
if(and__7948__auto__){
var and__7948__auto____$1 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"_self",null], null), null).call(null,link_target);
if(cljs.core.truth_(and__7948__auto____$1)){
var and__7948__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(button,(0));
if(and__7948__auto____$2){
var and__7948__auto____$3 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(host,current_host);
if(and__7948__auto____$3){
var and__7948__auto____$4 = (cljs.core.not(port)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_port)].join('')));
if(and__7948__auto____$4){
return (path_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? path_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : path_exists_QMARK_.call(null,path));
} else {
return and__7948__auto____$4;
}
} else {
return and__7948__auto____$3;
}
} else {
return and__7948__auto____$2;
}
} else {
return and__7948__auto____$1;
}
} else {
return and__7948__auto__;
}
})())){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_relative_href,relative_href)){
accountant.core.set_token_BANG_(history,relative_href,title);
} else {
}

return e.preventDefault();
} else {
return null;
}
});})(G__20027,G__20028))
;
return goog.events.listen(G__20027,G__20028,G__20029);
});
if(typeof accountant.core.nav_handler !== 'undefined'){
} else {
accountant.core.nav_handler = null;
}
if(typeof accountant.core.path_exists_QMARK_ !== 'undefined'){
} else {
accountant.core.path_exists_QMARK_ = null;
}
/**
 * Create and configure HTML5 history navigation.
 * 
 *   nav-handler: a fn of one argument, a path. Called when we've decided
 *   to navigate to another page. You'll want to make your app draw the
 *   new page here.
 * 
 *   path-exists?: a fn of one argument, a path. Return truthy if this path is handled by the SPA
 */
accountant.core.configure_navigation_BANG_ = (function accountant$core$configure_navigation_BANG_(p__20030){
var map__20033 = p__20030;
var map__20033__$1 = ((((!((map__20033 == null)))?((((map__20033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20033.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20033):map__20033);
var nav_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20033__$1,cljs.core.cst$kw$nav_DASH_handler);
var path_exists_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20033__$1,cljs.core.cst$kw$path_DASH_exists_QMARK_);
accountant.core.history.setUseFragment(false);

accountant.core.history.setPathPrefix("");

accountant.core.history.setEnabled(true);

accountant.core.nav_handler = nav_handler;

accountant.core.path_exists_QMARK_ = path_exists_QMARK_;

accountant.core.dispatch_on_navigate(accountant.core.history,nav_handler);

return accountant.core.prevent_reload_on_known_path(accountant.core.history,path_exists_QMARK_);
});
accountant.core.map__GT_params = (function accountant$core$map__GT_params(query){
var params = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20035_SHARP_){
return cljs.core.name(p1__20035_SHARP_);
}),cljs.core.keys(query));
var values = cljs.core.vals(query);
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(params,values));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (params,values,pairs){
return (function (p1__20036_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("=",p1__20036_SHARP_);
});})(params,values,pairs))
,pairs));
});
/**
 * add a browser history entry. updates window/location
 */
accountant.core.navigate_BANG_ = (function accountant$core$navigate_BANG_(var_args){
var args20037 = [];
var len__9181__auto___20040 = arguments.length;
var i__9182__auto___20041 = (0);
while(true){
if((i__9182__auto___20041 < len__9181__auto___20040)){
args20037.push((arguments[i__9182__auto___20041]));

var G__20042 = (i__9182__auto___20041 + (1));
i__9182__auto___20041 = G__20042;
continue;
} else {
}
break;
}

var G__20039 = args20037.length;
switch (G__20039) {
case 1:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20037.length)].join('')));

}
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (route){
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2(route,cljs.core.PersistentArrayMap.EMPTY);
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (route,query){
if(cljs.core.truth_(accountant.core.nav_handler)){
var token = accountant.core.history.getToken();
var old_route = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(token,"?"));
var query_string = accountant.core.map__GT_params(cljs.core.reduce_kv(((function (token,old_route){
return (function (valid,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(valid,k,v);
} else {
return valid;
}
});})(token,old_route))
,cljs.core.PersistentArrayMap.EMPTY,query));
var with_params = ((cljs.core.empty_QMARK_(query_string))?route:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(route),cljs.core.str.cljs$core$IFn$_invoke$arity$1("?"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_string)].join(''));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_route,route)){
return accountant.core.history.replaceToken(with_params);
} else {
return accountant.core.history.setToken(with_params);
}
} else {
return console.error("can't navigate! until configure-navigation! called");
}
});

accountant.core.navigate_BANG_.cljs$lang$maxFixedArity = 2;

accountant.core.dispatch_current_BANG_ = (function accountant$core$dispatch_current_BANG_(){

var path = window.location.pathname;
var query = window.location.search;
var hash = window.location.hash;
if(cljs.core.truth_(accountant.core.nav_handler)){
var G__20045 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join('');
return (accountant.core.nav_handler.cljs$core$IFn$_invoke$arity$1 ? accountant.core.nav_handler.cljs$core$IFn$_invoke$arity$1(G__20045) : accountant.core.nav_handler.call(null,G__20045));
} else {
return console.error("can't dispatch-current until configure-navigation! called");
}
});
