// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('secretary.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.walk');

/**
 * @interface
 */
secretary.core.IRouteMatches = function(){};

secretary.core.route_matches = (function secretary$core$route_matches(this$,route){
if((!((this$ == null))) && (!((this$.secretary$core$IRouteMatches$route_matches$arity$2 == null)))){
return this$.secretary$core$IRouteMatches$route_matches$arity$2(this$,route);
} else {
var x__8678__auto__ = (((this$ == null))?null:this$);
var m__8679__auto__ = (secretary.core.route_matches[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$2(this$,route) : m__8679__auto__.call(null,this$,route));
} else {
var m__8679__auto____$1 = (secretary.core.route_matches["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,route) : m__8679__auto____$1.call(null,this$,route));
} else {
throw cljs.core.missing_protocol("IRouteMatches.route-matches",this$);
}
}
}
});


/**
 * @interface
 */
secretary.core.IRouteValue = function(){};

secretary.core.route_value = (function secretary$core$route_value(this$){
if((!((this$ == null))) && (!((this$.secretary$core$IRouteValue$route_value$arity$1 == null)))){
return this$.secretary$core$IRouteValue$route_value$arity$1(this$);
} else {
var x__8678__auto__ = (((this$ == null))?null:this$);
var m__8679__auto__ = (secretary.core.route_value[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8679__auto__.call(null,this$));
} else {
var m__8679__auto____$1 = (secretary.core.route_value["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8679__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRouteValue.route-value",this$);
}
}
}
});


/**
 * @interface
 */
secretary.core.IRenderRoute = function(){};

secretary.core.render_route = (function secretary$core$render_route(var_args){
var args15064 = [];
var len__9181__auto___15067 = arguments.length;
var i__9182__auto___15068 = (0);
while(true){
if((i__9182__auto___15068 < len__9181__auto___15067)){
args15064.push((arguments[i__9182__auto___15068]));

var G__15069 = (i__9182__auto___15068 + (1));
i__9182__auto___15068 = G__15069;
continue;
} else {
}
break;
}

var G__15066 = args15064.length;
switch (G__15066) {
case 1:
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15064.length)].join('')));

}
});

secretary.core.render_route.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.secretary$core$IRenderRoute$render_route$arity$1 == null)))){
return this$.secretary$core$IRenderRoute$render_route$arity$1(this$);
} else {
var x__8678__auto__ = (((this$ == null))?null:this$);
var m__8679__auto__ = (secretary.core.render_route[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8679__auto__.call(null,this$));
} else {
var m__8679__auto____$1 = (secretary.core.render_route["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8679__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRenderRoute.render-route",this$);
}
}
}
});

secretary.core.render_route.cljs$core$IFn$_invoke$arity$2 = (function (this$,params){
if((!((this$ == null))) && (!((this$.secretary$core$IRenderRoute$render_route$arity$2 == null)))){
return this$.secretary$core$IRenderRoute$render_route$arity$2(this$,params);
} else {
var x__8678__auto__ = (((this$ == null))?null:this$);
var m__8679__auto__ = (secretary.core.render_route[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$2(this$,params) : m__8679__auto__.call(null,this$,params));
} else {
var m__8679__auto____$1 = (secretary.core.render_route["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,params) : m__8679__auto____$1.call(null,this$,params));
} else {
throw cljs.core.missing_protocol("IRenderRoute.render-route",this$);
}
}
}
});

secretary.core.render_route.cljs$lang$maxFixedArity = 2;


secretary.core._STAR_config_STAR_ = (function (){var G__15071 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$prefix,""], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15071) : cljs.core.atom.call(null,G__15071));
})();
/**
 * Gets a value for *config* at path.
 */
secretary.core.get_config = (function secretary$core$get_config(path){
var path__$1 = ((cljs.core.sequential_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(secretary.core._STAR_config_STAR_) : cljs.core.deref.call(null,secretary.core._STAR_config_STAR_)),path__$1);
});
/**
 * Associates a value val for *config* at path.
 */
secretary.core.set_config_BANG_ = (function secretary$core$set_config_BANG_(path,val){
var path__$1 = ((cljs.core.sequential_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_config_STAR_,cljs.core.assoc_in,path__$1,val);
});
secretary.core.encode = encodeURIComponent;
if(typeof secretary.core.encode_pair !== 'undefined'){
} else {
/**
 * Given a key and a value return and encoded key-value pair.
 */
secretary.core.encode_pair = (function (){var method_table__8991__auto__ = (function (){var G__15072 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15072) : cljs.core.atom.call(null,G__15072));
})();
var prefer_table__8992__auto__ = (function (){var G__15073 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15073) : cljs.core.atom.call(null,G__15073));
})();
var method_cache__8993__auto__ = (function (){var G__15074 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15074) : cljs.core.atom.call(null,G__15074));
})();
var cached_hierarchy__8994__auto__ = (function (){var G__15075 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15075) : cljs.core.atom.call(null,G__15075));
})();
var hierarchy__8995__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("secretary.core","encode-pair"),((function (method_table__8991__auto__,prefer_table__8992__auto__,method_cache__8993__auto__,cached_hierarchy__8994__auto__,hierarchy__8995__auto__){
return (function (p__15076){
var vec__15077 = p__15076;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15077,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15077,(1),null);
if((cljs.core.sequential_QMARK_(v)) || (cljs.core.set_QMARK_(v))){
return cljs.core.cst$kw$secretary$core_SLASH_sequential;
} else {
if((function (){var or__7960__auto__ = cljs.core.map_QMARK_(v);
if(or__7960__auto__){
return or__7960__auto__;
} else {
if(!((v == null))){
if(((v.cljs$lang$protocol_mask$partition0$ & (67108864))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IRecord$))){
return true;
} else {
if((!v.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,v);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,v);
}
}
})()){
return cljs.core.cst$kw$secretary$core_SLASH_map;
} else {
return null;
}
}
});})(method_table__8991__auto__,prefer_table__8992__auto__,method_cache__8993__auto__,cached_hierarchy__8994__auto__,hierarchy__8995__auto__))
,cljs.core.cst$kw$default,hierarchy__8995__auto__,method_table__8991__auto__,prefer_table__8992__auto__,method_cache__8993__auto__,cached_hierarchy__8994__auto__));
})();
}
secretary.core.key_index = (function secretary$core$key_index(var_args){
var args15082 = [];
var len__9181__auto___15085 = arguments.length;
var i__9182__auto___15086 = (0);
while(true){
if((i__9182__auto___15086 < len__9181__auto___15085)){
args15082.push((arguments[i__9182__auto___15086]));

var G__15087 = (i__9182__auto___15086 + (1));
i__9182__auto___15086 = G__15087;
continue;
} else {
}
break;
}

var G__15084 = args15082.length;
switch (G__15084) {
case 1:
return secretary.core.key_index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return secretary.core.key_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15082.length)].join('')));

}
});

secretary.core.key_index.cljs$core$IFn$_invoke$arity$1 = (function (k){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("[]")].join('');
});

secretary.core.key_index.cljs$core$IFn$_invoke$arity$2 = (function (k,index){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
});

secretary.core.key_index.cljs$lang$maxFixedArity = 2;

secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$secretary$core_SLASH_sequential,(function (p__15089){
var vec__15090 = p__15089;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15090,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15090,(1),null);
var encoded = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__15090,k,v){
return (function (i,x){
var pair = ((cljs.core.coll_QMARK_(x))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$2(k,i),x], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$1(k),x], null));
return (secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1(pair) : secretary.core.encode_pair.call(null,pair));
});})(vec__15090,k,v))
,v);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",encoded);
}));
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$secretary$core_SLASH_map,(function (p__15093){
var vec__15094 = p__15093;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15094,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15094,(1),null);
var encoded = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__15094,k,v){
return (function (p__15097){
var vec__15098 = p__15097;
var ik = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15098,(0),null);
var iv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15098,(1),null);
var G__15101 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$2(k,cljs.core.name(ik)),iv], null);
return (secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1(G__15101) : secretary.core.encode_pair.call(null,G__15101));
});})(vec__15094,k,v))
,v);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",encoded);
}));
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__15102){
var vec__15103 = p__15102;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15103,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15103,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__15106 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
return (secretary.core.encode.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode.cljs$core$IFn$_invoke$arity$1(G__15106) : secretary.core.encode.call(null,G__15106));
})())].join('');
}));
/**
 * Convert a map of query parameters into url encoded string.
 */
secretary.core.encode_query_params = (function secretary$core$encode_query_params(query_params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.encode_pair,query_params));
});
/**
 * Like js/encodeURIComponent excepts ignore slashes.
 */
secretary.core.encode_uri = (function secretary$core$encode_uri(uri){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.encode,clojure.string.split.cljs$core$IFn$_invoke$arity$2(uri,/\//)));
});
secretary.core.decode = decodeURIComponent;
/**
 * Parse a value from a serialized query-string key index. If the
 *   index value is empty 0 is returned, if it's a digit it returns the
 *   js/parseInt value, otherwise it returns the extracted index.
 */
secretary.core.parse_path = (function secretary$core$parse_path(path){
var index_re = /\[([^\]]*)\]*/;
var parts = cljs.core.re_seq(index_re,path);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (index_re,parts){
return (function (p__15111){
var vec__15112 = p__15111;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15112,(0),null);
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15112,(1),null);
if(cljs.core.empty_QMARK_(part)){
return (0);
} else {
if(cljs.core.truth_(cljs.core.re_matches(/\d+/,part))){
return parseInt(part);
} else {
return part;

}
}
});})(index_re,parts))
,parts);
});
/**
 * Return a key path for a serialized query-string entry.
 * 
 *   Ex.
 * 
 *  (key-parse "foo[][a][][b]")
 *  ;; => ("foo" 0 "a" 0 "b")
 *   
 */
secretary.core.key_parse = (function secretary$core$key_parse(k){
var re = /([^\[\]]+)((?:\[[^\]]*\])*)?/;
var vec__15118 = cljs.core.re_matches(re,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15118,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15118,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15118,(2),null);
var parsed_path = (cljs.core.truth_(path)?secretary.core.parse_path(path):null);
return cljs.core.cons(key,parsed_path);
});
/**
 * Like assoc-in but numbers in path create vectors instead of maps.
 * 
 *   Ex.
 * 
 *  (assoc-in-query-params {} ["foo" 0] 1)
 *  ;; => {"foo" [1]}
 * 
 *  (assoc-in-query-params {} ["foo" 0 "a"] 1)
 *  ;; => {"foo" [{"a" 1}]}
 *   
 */
secretary.core.assoc_in_query_params = (function secretary$core$assoc_in_query_params(m,path,v){
var heads = (function (xs){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,_){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((i + (1)),xs);
}),xs);
});
var hs = heads(path);
var m__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (heads,hs){
return (function (m__$1,h){
if((typeof cljs.core.last(h) === 'number') && (!(cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.butlast(h)))))){
return cljs.core.assoc_in(m__$1,cljs.core.butlast(h),cljs.core.PersistentVector.EMPTY);
} else {
return m__$1;
}
});})(heads,hs))
,m,hs);
if((cljs.core.last(path) === (0))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$1,cljs.core.butlast(path),cljs.core.conj,v);
} else {
return cljs.core.assoc_in(m__$1,path,v);
}
});
/**
 * Extract a map of query parameters from a query string.
 */
secretary.core.decode_query_params = (function secretary$core$decode_query_params(query_string){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(query_string,/&/);
var params = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parts){
return (function (m,part){
var vec__15124 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(part,/=/,(2));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15124,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15124,(1),null);
return secretary.core.assoc_in_query_params(m,secretary.core.key_parse(k),(secretary.core.decode.cljs$core$IFn$_invoke$arity$1 ? secretary.core.decode.cljs$core$IFn$_invoke$arity$1(v) : secretary.core.decode.call(null,v)));
});})(parts))
,cljs.core.PersistentArrayMap.EMPTY,parts);
var params__$1 = clojure.walk.keywordize_keys(params);
return params__$1;
});
/**
 * Like re-matches but result is a always vector. If re does not
 *   capture matches then it will return a vector of [m m] as if it had a
 *   single capture. Other wise it maintains consistent behavior with
 *   re-matches. 
 */
secretary.core.re_matches_STAR_ = (function secretary$core$re_matches_STAR_(re,s){
var ms = cljs.core.re_matches(re,s);
if(cljs.core.truth_(ms)){
if(cljs.core.sequential_QMARK_(ms)){
return ms;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms,ms], null);
}
} else {
return null;
}
});
secretary.core.re_escape_chars = cljs.core.set("\\.*+|?()[]{}$^");
secretary.core.re_escape = (function secretary$core$re_escape(s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,c){
if(cljs.core.truth_((secretary.core.re_escape_chars.cljs$core$IFn$_invoke$arity$1 ? secretary.core.re_escape_chars.cljs$core$IFn$_invoke$arity$1(c) : secretary.core.re_escape_chars.call(null,c)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}),"",s);
});
/**
 * Attempt to lex a single token from s with clauses. Each clause is a
 *   pair of [regexp action] where action is a function. regexp is
 *   expected to begin with ^ and contain a single capture. If the
 *   attempt is successful a vector of [s-without-token (action capture)]
 *   is returned. Otherwise the result is nil.
 */
secretary.core.lex_STAR_ = (function secretary$core$lex_STAR_(s,clauses){
return cljs.core.some((function (p__15134){
var vec__15135 = p__15134;
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15135,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15135,(1),null);
var temp__5278__auto__ = cljs.core.re_find(re,s);
if(cljs.core.truth_(temp__5278__auto__)){
var vec__15138 = temp__5278__auto__;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15138,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15138,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,cljs.core.count(m)),(action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(c) : action.call(null,c))], null);
} else {
return null;
}
}),clauses);
});
/**
 * Return a pair of [regex params]. regex is a compiled regular
 *   expression for matching routes. params is a list of route param
 *   names (:*, :id, etc.). 
 */
secretary.core.lex_route = (function secretary$core$lex_route(s,clauses){
var s__$1 = s;
var pattern = "";
var params = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq(s__$1)){
var vec__15147 = secretary.core.lex_STAR_(s__$1,clauses);
var s__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15147,(0),null);
var vec__15150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15147,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15150,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15150,(1),null);
var G__15153 = s__$2;
var G__15154 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
var G__15155 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,p);
s__$1 = G__15153;
pattern = G__15154;
params = G__15155;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.re_pattern([cljs.core.str.cljs$core$IFn$_invoke$arity$1("^"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join('')),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,params)], null);
}
break;
}
});
/**
 * Given a route return an instance of IRouteMatches.
 */
secretary.core.compile_route = (function secretary$core$compile_route(orig_route){
var clauses = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\*([^\s.:*\/]*)/,(function (v){
var r = "(.*?)";
var p = ((cljs.core.seq(v))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v):cljs.core.cst$kw$_STAR_);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\:([^\s.:*\/]+)/,(function (v){
var r = "([^,;?/]+)";
var p = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^([^:*]+)/,(function (v){
var r = secretary.core.re_escape(v);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null);
})], null)], null);
var vec__15165 = secretary.core.lex_route(orig_route,clauses);
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15165,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15165,(1),null);
if(typeof secretary.core.t_secretary$core15168 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {secretary.core.IRouteValue}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {secretary.core.IRouteMatches}
*/
secretary.core.t_secretary$core15168 = (function (orig_route,clauses,vec__15165,re,params,meta15169){
this.orig_route = orig_route;
this.clauses = clauses;
this.vec__15165 = vec__15165;
this.re = re;
this.params = params;
this.meta15169 = meta15169;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
secretary.core.t_secretary$core15168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (clauses,vec__15165,re,params){
return (function (_15170,meta15169__$1){
var self__ = this;
var _15170__$1 = this;
return (new secretary.core.t_secretary$core15168(self__.orig_route,self__.clauses,self__.vec__15165,self__.re,self__.params,meta15169__$1));
});})(clauses,vec__15165,re,params))
;

secretary.core.t_secretary$core15168.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (clauses,vec__15165,re,params){
return (function (_15170){
var self__ = this;
var _15170__$1 = this;
return self__.meta15169;
});})(clauses,vec__15165,re,params))
;

secretary.core.t_secretary$core15168.prototype.secretary$core$IRouteValue$ = cljs.core.PROTOCOL_SENTINEL;

secretary.core.t_secretary$core15168.prototype.secretary$core$IRouteValue$route_value$arity$1 = ((function (clauses,vec__15165,re,params){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.orig_route;
});})(clauses,vec__15165,re,params))
;

secretary.core.t_secretary$core15168.prototype.secretary$core$IRouteMatches$ = cljs.core.PROTOCOL_SENTINEL;

secretary.core.t_secretary$core15168.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = ((function (clauses,vec__15165,re,params){
return (function (_,route){
var self__ = this;
var ___$1 = this;
var temp__5278__auto__ = secretary.core.re_matches_STAR_(self__.re,route);
if(cljs.core.truth_(temp__5278__auto__)){
var vec__15171 = temp__5278__auto__;
var seq__15172 = cljs.core.seq(vec__15171);
var first__15173 = cljs.core.first(seq__15172);
var seq__15172__$1 = cljs.core.next(seq__15172);
var ___$2 = first__15173;
var ms = seq__15172__$1;
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(self__.params,cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.decode,ms)))], 0));
} else {
return null;
}
});})(clauses,vec__15165,re,params))
;

secretary.core.t_secretary$core15168.getBasis = ((function (clauses,vec__15165,re,params){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$orig_DASH_route,cljs.core.cst$sym$clauses,cljs.core.cst$sym$vec__15165,cljs.core.cst$sym$re,cljs.core.cst$sym$params,cljs.core.cst$sym$meta15169], null);
});})(clauses,vec__15165,re,params))
;

secretary.core.t_secretary$core15168.cljs$lang$type = true;

secretary.core.t_secretary$core15168.cljs$lang$ctorStr = "secretary.core/t_secretary$core15168";

secretary.core.t_secretary$core15168.cljs$lang$ctorPrWriter = ((function (clauses,vec__15165,re,params){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write(writer__8618__auto__,"secretary.core/t_secretary$core15168");
});})(clauses,vec__15165,re,params))
;

secretary.core.__GT_t_secretary$core15168 = ((function (clauses,vec__15165,re,params){
return (function secretary$core$compile_route_$___GT_t_secretary$core15168(orig_route__$1,clauses__$1,vec__15165__$1,re__$1,params__$1,meta15169){
return (new secretary.core.t_secretary$core15168(orig_route__$1,clauses__$1,vec__15165__$1,re__$1,params__$1,meta15169));
});})(clauses,vec__15165,re,params))
;

}

return (new secretary.core.t_secretary$core15168(orig_route,clauses,vec__15165,re,params,cljs.core.PersistentArrayMap.EMPTY));
});
secretary.core.render_route_STAR_ = (function secretary$core$render_route_STAR_(var_args){
var args__9188__auto__ = [];
var len__9181__auto___15177 = arguments.length;
var i__9182__auto___15178 = (0);
while(true){
if((i__9182__auto___15178 < len__9181__auto___15177)){
args__9188__auto__.push((arguments[i__9182__auto___15178]));

var G__15179 = (i__9182__auto___15178 + (1));
i__9182__auto___15178 = G__15179;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((1) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((1)),(0),null)):null);
return secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9189__auto__);
});

secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,args){
if(((!((obj == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.secretary$core$IRenderRoute$)))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(secretary.core.IRenderRoute,obj):false)):cljs.core.native_satisfies_QMARK_(secretary.core.IRenderRoute,obj))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route,obj,args);
} else {
return null;
}
});

secretary.core.render_route_STAR_.cljs$lang$maxFixedArity = (1);

secretary.core.render_route_STAR_.cljs$lang$applyTo = (function (seq15174){
var G__15175 = cljs.core.first(seq15174);
var seq15174__$1 = cljs.core.next(seq15174);
return secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__15175,seq15174__$1);
});

secretary.core._STAR_routes_STAR_ = (function (){var G__15180 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15180) : cljs.core.atom.call(null,G__15180));
})();
secretary.core.add_route_BANG_ = (function secretary$core$add_route_BANG_(obj,action){
var obj__$1 = ((typeof obj === 'string')?secretary.core.compile_route(obj):obj);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(secretary.core._STAR_routes_STAR_,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj__$1,action], null));
});
secretary.core.remove_route_BANG_ = (function secretary$core$remove_route_BANG_(obj){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(secretary.core._STAR_routes_STAR_,(function (rs){
return cljs.core.filterv((function (p__15185){
var vec__15186 = p__15185;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15186,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15186,(1),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,obj);
}),rs);
}));
});
secretary.core.reset_routes_BANG_ = (function secretary$core$reset_routes_BANG_(){
var G__15191 = secretary.core._STAR_routes_STAR_;
var G__15192 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15191,G__15192) : cljs.core.reset_BANG_.call(null,G__15191,G__15192));
});
secretary.core.locate_route = (function secretary$core$locate_route(route){
return cljs.core.some((function (p__15197){
var vec__15198 = p__15197;
var compiled_route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15198,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15198,(1),null);
var temp__5278__auto__ = secretary.core.route_matches(compiled_route,route);
if(cljs.core.truth_(temp__5278__auto__)){
var params = temp__5278__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$action,action,cljs.core.cst$kw$params,params,cljs.core.cst$kw$route,compiled_route], null);
} else {
return null;
}
}),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(secretary.core._STAR_routes_STAR_) : cljs.core.deref.call(null,secretary.core._STAR_routes_STAR_)));
});
/**
 * Returns original route value as set in defroute when passed a URI path.
 */
secretary.core.locate_route_value = (function secretary$core$locate_route_value(uri){
return secretary.core.route_value(cljs.core.cst$kw$route.cljs$core$IFn$_invoke$arity$1(secretary.core.locate_route(uri)));
});
secretary.core.prefix = (function secretary$core$prefix(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(secretary.core.get_config(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prefix], null)))].join('');
});
secretary.core.uri_without_prefix = (function secretary$core$uri_without_prefix(uri){
return clojure.string.replace(uri,cljs.core.re_pattern([cljs.core.str.cljs$core$IFn$_invoke$arity$1("^"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(secretary.core.prefix())].join('')),"");
});
/**
 * Ensures that the uri has a leading slash
 */
secretary.core.uri_with_leading_slash = (function secretary$core$uri_with_leading_slash(uri){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(uri))){
return uri;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join('');
}
});
/**
 * Dispatch an action for a given route if it matches the URI path.
 */
secretary.core.dispatch_BANG_ = (function secretary$core$dispatch_BANG_(uri){
var vec__15206 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(secretary.core.uri_without_prefix(uri),/\?/);
var uri_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15206,(0),null);
var query_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15206,(1),null);
var uri_path__$1 = secretary.core.uri_with_leading_slash(uri_path);
var query_params = (cljs.core.truth_(query_string)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query_DASH_params,secretary.core.decode_query_params(query_string)], null):null);
var map__15209 = secretary.core.locate_route(uri_path__$1);
var map__15209__$1 = ((((!((map__15209 == null)))?((((map__15209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15209.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15209):map__15209);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15209__$1,cljs.core.cst$kw$action);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15209__$1,cljs.core.cst$kw$params);
var action__$1 = (function (){var or__7960__auto__ = action;
if(cljs.core.truth_(or__7960__auto__)){
return or__7960__auto__;
} else {
return cljs.core.identity;
}
})();
var params__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params,query_params], 0));
return (action__$1.cljs$core$IFn$_invoke$arity$1 ? action__$1.cljs$core$IFn$_invoke$arity$1(params__$1) : action__$1.call(null,params__$1));
});
secretary.core.invalid_params = (function secretary$core$invalid_params(params,validations){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__15215){
var vec__15216 = p__15215;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15216,(0),null);
var validation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15216,(1),null);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,key);
if(cljs.core.truth_(cljs.core.re_matches(validation,value))){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,validation], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),validations));
});
secretary.core.params_valid_QMARK_ = (function secretary$core$params_valid_QMARK_(params,validations){
return cljs.core.empty_QMARK_(secretary.core.invalid_params(params,validations));
});
(secretary.core.IRouteMatches["string"] = true);

(secretary.core.route_matches["string"] = (function (this$,route){
return secretary.core.route_matches(secretary.core.compile_route(this$),route);
}));

RegExp.prototype.secretary$core$IRouteMatches$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (this$,route){
var this$__$1 = this;
var temp__5278__auto__ = secretary.core.re_matches_STAR_(this$__$1,route);
if(cljs.core.truth_(temp__5278__auto__)){
var vec__15219 = temp__5278__auto__;
var seq__15220 = cljs.core.seq(vec__15219);
var first__15221 = cljs.core.first(seq__15220);
var seq__15220__$1 = cljs.core.next(seq__15220);
var _ = first__15221;
var ms = seq__15220__$1;
return cljs.core.vec(ms);
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (p__15222,route){
var vec__15223 = p__15222;
var seq__15224 = cljs.core.seq(vec__15223);
var first__15225 = cljs.core.first(seq__15224);
var seq__15224__$1 = cljs.core.next(seq__15224);
var route_string = first__15225;
var validations = seq__15224__$1;
var vec__15226 = this;
var seq__15227 = cljs.core.seq(vec__15226);
var first__15228 = cljs.core.first(seq__15227);
var seq__15227__$1 = cljs.core.next(seq__15227);
var route_string__$1 = first__15228;
var validations__$1 = seq__15227__$1;
var params = secretary.core.route_matches(secretary.core.compile_route(route_string__$1),route);
if(cljs.core.truth_(secretary.core.params_valid_QMARK_(params,validations__$1))){
return params;
} else {
return null;
}
});
(secretary.core.IRouteValue["string"] = true);

(secretary.core.route_value["string"] = (function (this$){
return secretary.core.route_value(secretary.core.compile_route(this$));
}));

RegExp.prototype.secretary$core$IRouteValue$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (p__15229){
var vec__15230 = p__15229;
var seq__15231 = cljs.core.seq(vec__15230);
var first__15232 = cljs.core.first(seq__15231);
var seq__15231__$1 = cljs.core.next(seq__15231);
var route_string = first__15232;
var validations = seq__15231__$1;
var vec__15233 = this;
var seq__15234 = cljs.core.seq(vec__15233);
var first__15235 = cljs.core.first(seq__15234);
var seq__15234__$1 = cljs.core.next(seq__15234);
var route_string__$1 = first__15235;
var validations__$1 = seq__15234__$1;
return cljs.core.vec(cljs.core.cons(secretary.core.route_value(route_string__$1),validations__$1));
});
(secretary.core.IRenderRoute["string"] = true);

(secretary.core.render_route["string"] = (function() {
var G__15245 = null;
var G__15245__1 = (function (this$){
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.PersistentArrayMap.EMPTY);
});
var G__15245__2 = (function (this$,params){
var map__15236 = params;
var map__15236__$1 = ((((!((map__15236 == null)))?((((map__15236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15236.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15236):map__15236);
var m = map__15236__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15236__$1,cljs.core.cst$kw$query_DASH_params);
var a = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(m) : cljs.core.atom.call(null,m));
var path = this$.replace((new RegExp(":[^\\s.:*/]+|\\*[^\\s.:*/]*","g")),((function (map__15236,map__15236__$1,m,query_params,a){
return (function ($1){
var lookup = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($1,"*"))?$1:cljs.core.subs.cljs$core$IFn$_invoke$arity$2($1,(1))));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a)),lookup);
var replacement = ((cljs.core.sequential_QMARK_(v))?(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc,lookup,cljs.core.next(v));

return secretary.core.encode_uri(cljs.core.first(v));
})()
:(cljs.core.truth_(v)?secretary.core.encode_uri(v):$1));
return replacement;
});})(map__15236,map__15236__$1,m,query_params,a))
);
var path__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(secretary.core.get_config(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prefix], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
var temp__5276__auto__ = (function (){var and__7948__auto__ = query_params;
if(cljs.core.truth_(and__7948__auto__)){
return secretary.core.encode_query_params(query_params);
} else {
return and__7948__auto__;
}
})();
if(cljs.core.truth_(temp__5276__auto__)){
var query_string = temp__5276__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("?"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_string)].join('');
} else {
return path__$1;
}
});
G__15245 = function(this$,params){
switch(arguments.length){
case 1:
return G__15245__1.call(this,this$);
case 2:
return G__15245__2.call(this,this$,params);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__15245.cljs$core$IFn$_invoke$arity$1 = G__15245__1;
G__15245.cljs$core$IFn$_invoke$arity$2 = G__15245__2;
return G__15245;
})()
);

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$1 = (function (this$){
var this$__$1 = this;
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$2 = (function (p__15238,params){
var vec__15239 = p__15238;
var seq__15240 = cljs.core.seq(vec__15239);
var first__15241 = cljs.core.first(seq__15240);
var seq__15240__$1 = cljs.core.next(seq__15240);
var route_string = first__15241;
var validations = seq__15240__$1;
var vec__15242 = this;
var seq__15243 = cljs.core.seq(vec__15242);
var first__15244 = cljs.core.first(seq__15243);
var seq__15243__$1 = cljs.core.next(seq__15243);
var route_string__$1 = first__15244;
var validations__$1 = seq__15243__$1;
var invalid = secretary.core.invalid_params(params,validations__$1);
if(cljs.core.empty_QMARK_(invalid)){
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(route_string__$1,params);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Could not build route: invalid params",invalid);
}
});
