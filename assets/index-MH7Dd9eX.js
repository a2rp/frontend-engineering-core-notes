(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))p(m);new MutationObserver(m=>{for(const g of m)if(g.type==="childList")for(const b of g.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&p(b)}).observe(document,{childList:!0,subtree:!0});function l(m){const g={};return m.integrity&&(g.integrity=m.integrity),m.referrerPolicy&&(g.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?g.credentials="include":m.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function p(m){if(m.ep)return;m.ep=!0;const g=l(m);fetch(m.href,g)}})();function um(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Ao={exports:{}},at={},Do={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lp;function xm(){if(lp)return ne;lp=1;var a=Symbol.for("react.element"),c=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),b=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),q=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),D=Symbol.iterator;function F(v){return v===null||typeof v!="object"?null:(v=D&&v[D]||v["@@iterator"],typeof v=="function"?v:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ae=Object.assign,V={};function J(v,S,K){this.props=v,this.context=S,this.refs=V,this.updater=K||Q}J.prototype.isReactComponent={},J.prototype.setState=function(v,S){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,S,"setState")},J.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function me(){}me.prototype=J.prototype;function le(v,S,K){this.props=v,this.context=S,this.refs=V,this.updater=K||Q}var ie=le.prototype=new me;ie.constructor=le,ae(ie,J.prototype),ie.isPureReactComponent=!0;var ee=Array.isArray,ue=Object.prototype.hasOwnProperty,Y={current:null},H={key:!0,ref:!0,__self:!0,__source:!0};function Oe(v,S,K){var X,se={},re=null,xe=null;if(S!=null)for(X in S.ref!==void 0&&(xe=S.ref),S.key!==void 0&&(re=""+S.key),S)ue.call(S,X)&&!H.hasOwnProperty(X)&&(se[X]=S[X]);var oe=arguments.length-2;if(oe===1)se.children=K;else if(1<oe){for(var de=Array(oe),Ue=0;Ue<oe;Ue++)de[Ue]=arguments[Ue+2];se.children=de}if(v&&v.defaultProps)for(X in oe=v.defaultProps,oe)se[X]===void 0&&(se[X]=oe[X]);return{$$typeof:a,type:v,key:re,ref:xe,props:se,_owner:Y.current}}function ar(v,S){return{$$typeof:a,type:v.type,key:S,ref:v.ref,props:v.props,_owner:v._owner}}function wr(v){return typeof v=="object"&&v!==null&&v.$$typeof===a}function Ar(v){var S={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(K){return S[K]})}var ur=/\/+/g;function Ye(v,S){return typeof v=="object"&&v!==null&&v.key!=null?Ar(""+v.key):S.toString(36)}function ir(v,S,K,X,se){var re=typeof v;(re==="undefined"||re==="boolean")&&(v=null);var xe=!1;if(v===null)xe=!0;else switch(re){case"string":case"number":xe=!0;break;case"object":switch(v.$$typeof){case a:case c:xe=!0}}if(xe)return xe=v,se=se(xe),v=X===""?"."+Ye(xe,0):X,ee(se)?(K="",v!=null&&(K=v.replace(ur,"$&/")+"/"),ir(se,S,K,"",function(Ue){return Ue})):se!=null&&(wr(se)&&(se=ar(se,K+(!se.key||xe&&xe.key===se.key?"":(""+se.key).replace(ur,"$&/")+"/")+v)),S.push(se)),1;if(xe=0,X=X===""?".":X+":",ee(v))for(var oe=0;oe<v.length;oe++){re=v[oe];var de=X+Ye(re,oe);xe+=ir(re,S,K,de,se)}else if(de=F(v),typeof de=="function")for(v=de.call(v),oe=0;!(re=v.next()).done;)re=re.value,de=X+Ye(re,oe++),xe+=ir(re,S,K,de,se);else if(re==="object")throw S=String(v),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.");return xe}function xr(v,S,K){if(v==null)return v;var X=[],se=0;return ir(v,X,"","",function(re){return S.call(K,re,se++)}),X}function $e(v){if(v._status===-1){var S=v._result;S=S(),S.then(function(K){(v._status===0||v._status===-1)&&(v._status=1,v._result=K)},function(K){(v._status===0||v._status===-1)&&(v._status=2,v._result=K)}),v._status===-1&&(v._status=0,v._result=S)}if(v._status===1)return v._result.default;throw v._result}var ve={current:null},R={transition:null},B={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:R,ReactCurrentOwner:Y};function L(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:xr,forEach:function(v,S,K){xr(v,function(){S.apply(this,arguments)},K)},count:function(v){var S=0;return xr(v,function(){S++}),S},toArray:function(v){return xr(v,function(S){return S})||[]},only:function(v){if(!wr(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},ne.Component=J,ne.Fragment=l,ne.Profiler=m,ne.PureComponent=le,ne.StrictMode=p,ne.Suspense=h,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,ne.act=L,ne.cloneElement=function(v,S,K){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var X=ae({},v.props),se=v.key,re=v.ref,xe=v._owner;if(S!=null){if(S.ref!==void 0&&(re=S.ref,xe=Y.current),S.key!==void 0&&(se=""+S.key),v.type&&v.type.defaultProps)var oe=v.type.defaultProps;for(de in S)ue.call(S,de)&&!H.hasOwnProperty(de)&&(X[de]=S[de]===void 0&&oe!==void 0?oe[de]:S[de])}var de=arguments.length-2;if(de===1)X.children=K;else if(1<de){oe=Array(de);for(var Ue=0;Ue<de;Ue++)oe[Ue]=arguments[Ue+2];X.children=oe}return{$$typeof:a,type:v.type,key:se,ref:re,props:X,_owner:xe}},ne.createContext=function(v){return v={$$typeof:b,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:g,_context:v},v.Consumer=v},ne.createElement=Oe,ne.createFactory=function(v){var S=Oe.bind(null,v);return S.type=v,S},ne.createRef=function(){return{current:null}},ne.forwardRef=function(v){return{$$typeof:k,render:v}},ne.isValidElement=wr,ne.lazy=function(v){return{$$typeof:G,_payload:{_status:-1,_result:v},_init:$e}},ne.memo=function(v,S){return{$$typeof:q,type:v,compare:S===void 0?null:S}},ne.startTransition=function(v){var S=R.transition;R.transition={};try{v()}finally{R.transition=S}},ne.unstable_act=L,ne.useCallback=function(v,S){return ve.current.useCallback(v,S)},ne.useContext=function(v){return ve.current.useContext(v)},ne.useDebugValue=function(){},ne.useDeferredValue=function(v){return ve.current.useDeferredValue(v)},ne.useEffect=function(v,S){return ve.current.useEffect(v,S)},ne.useId=function(){return ve.current.useId()},ne.useImperativeHandle=function(v,S,K){return ve.current.useImperativeHandle(v,S,K)},ne.useInsertionEffect=function(v,S){return ve.current.useInsertionEffect(v,S)},ne.useLayoutEffect=function(v,S){return ve.current.useLayoutEffect(v,S)},ne.useMemo=function(v,S){return ve.current.useMemo(v,S)},ne.useReducer=function(v,S,K){return ve.current.useReducer(v,S,K)},ne.useRef=function(v){return ve.current.useRef(v)},ne.useState=function(v){return ve.current.useState(v)},ne.useSyncExternalStore=function(v,S,K){return ve.current.useSyncExternalStore(v,S,K)},ne.useTransition=function(){return ve.current.useTransition()},ne.version="18.3.1",ne}var cp;function ol(){return cp||(cp=1,Do.exports=xm()),Do.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp;function mm(){if(dp)return at;dp=1;var a=ol(),c=Symbol.for("react.element"),l=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,m=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function b(k,h,q){var G,D={},F=null,Q=null;q!==void 0&&(F=""+q),h.key!==void 0&&(F=""+h.key),h.ref!==void 0&&(Q=h.ref);for(G in h)p.call(h,G)&&!g.hasOwnProperty(G)&&(D[G]=h[G]);if(k&&k.defaultProps)for(G in h=k.defaultProps,h)D[G]===void 0&&(D[G]=h[G]);return{$$typeof:c,type:k,key:F,ref:Q,props:D,_owner:m.current}}return at.Fragment=l,at.jsx=b,at.jsxs=b,at}var pp;function hm(){return pp||(pp=1,Ao.exports=mm()),Ao.exports}var e=hm(),wa={},Fo={exports:{}},sr={},Uo={exports:{}},Wo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up;function fm(){return up||(up=1,(function(a){function c(R,B){var L=R.length;R.push(B);e:for(;0<L;){var v=L-1>>>1,S=R[v];if(0<m(S,B))R[v]=B,R[L]=S,L=v;else break e}}function l(R){return R.length===0?null:R[0]}function p(R){if(R.length===0)return null;var B=R[0],L=R.pop();if(L!==B){R[0]=L;e:for(var v=0,S=R.length,K=S>>>1;v<K;){var X=2*(v+1)-1,se=R[X],re=X+1,xe=R[re];if(0>m(se,L))re<S&&0>m(xe,se)?(R[v]=xe,R[re]=L,v=re):(R[v]=se,R[X]=L,v=X);else if(re<S&&0>m(xe,L))R[v]=xe,R[re]=L,v=re;else break e}}return B}function m(R,B){var L=R.sortIndex-B.sortIndex;return L!==0?L:R.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var g=performance;a.unstable_now=function(){return g.now()}}else{var b=Date,k=b.now();a.unstable_now=function(){return b.now()-k}}var h=[],q=[],G=1,D=null,F=3,Q=!1,ae=!1,V=!1,J=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ie(R){for(var B=l(q);B!==null;){if(B.callback===null)p(q);else if(B.startTime<=R)p(q),B.sortIndex=B.expirationTime,c(h,B);else break;B=l(q)}}function ee(R){if(V=!1,ie(R),!ae)if(l(h)!==null)ae=!0,$e(ue);else{var B=l(q);B!==null&&ve(ee,B.startTime-R)}}function ue(R,B){ae=!1,V&&(V=!1,me(Oe),Oe=-1),Q=!0;var L=F;try{for(ie(B),D=l(h);D!==null&&(!(D.expirationTime>B)||R&&!Ar());){var v=D.callback;if(typeof v=="function"){D.callback=null,F=D.priorityLevel;var S=v(D.expirationTime<=B);B=a.unstable_now(),typeof S=="function"?D.callback=S:D===l(h)&&p(h),ie(B)}else p(h);D=l(h)}if(D!==null)var K=!0;else{var X=l(q);X!==null&&ve(ee,X.startTime-B),K=!1}return K}finally{D=null,F=L,Q=!1}}var Y=!1,H=null,Oe=-1,ar=5,wr=-1;function Ar(){return!(a.unstable_now()-wr<ar)}function ur(){if(H!==null){var R=a.unstable_now();wr=R;var B=!0;try{B=H(!0,R)}finally{B?Ye():(Y=!1,H=null)}}else Y=!1}var Ye;if(typeof le=="function")Ye=function(){le(ur)};else if(typeof MessageChannel!="undefined"){var ir=new MessageChannel,xr=ir.port2;ir.port1.onmessage=ur,Ye=function(){xr.postMessage(null)}}else Ye=function(){J(ur,0)};function $e(R){H=R,Y||(Y=!0,Ye())}function ve(R,B){Oe=J(function(){R(a.unstable_now())},B)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(R){R.callback=null},a.unstable_continueExecution=function(){ae||Q||(ae=!0,$e(ue))},a.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ar=0<R?Math.floor(1e3/R):5},a.unstable_getCurrentPriorityLevel=function(){return F},a.unstable_getFirstCallbackNode=function(){return l(h)},a.unstable_next=function(R){switch(F){case 1:case 2:case 3:var B=3;break;default:B=F}var L=F;F=B;try{return R()}finally{F=L}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(R,B){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var L=F;F=R;try{return B()}finally{F=L}},a.unstable_scheduleCallback=function(R,B,L){var v=a.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?v+L:v):L=v,R){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=L+S,R={id:G++,callback:B,priorityLevel:R,startTime:L,expirationTime:S,sortIndex:-1},L>v?(R.sortIndex=L,c(q,R),l(h)===null&&R===l(q)&&(V?(me(Oe),Oe=-1):V=!0,ve(ee,L-v))):(R.sortIndex=S,c(h,R),ae||Q||(ae=!0,$e(ue))),R},a.unstable_shouldYield=Ar,a.unstable_wrapCallback=function(R){var B=F;return function(){var L=F;F=B;try{return R.apply(this,arguments)}finally{F=L}}}})(Wo)),Wo}var xp;function gm(){return xp||(xp=1,Uo.exports=fm()),Uo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function vm(){if(mp)return sr;mp=1;var a=ol(),c=gm();function l(r){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+r,s=1;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+r+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,m={};function g(r,n){b(r,n),b(r+"Capture",n)}function b(r,n){for(m[r]=n,r=0;r<n.length;r++)p.add(n[r])}var k=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),h=Object.prototype.hasOwnProperty,q=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,G={},D={};function F(r){return h.call(D,r)?!0:h.call(G,r)?!1:q.test(r)?D[r]=!0:(G[r]=!0,!1)}function Q(r,n,s,t){if(s!==null&&s.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return t?!1:s!==null?!s.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function ae(r,n,s,t){if(n===null||typeof n=="undefined"||Q(r,n,s,t))return!0;if(t)return!1;if(s!==null)switch(s.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function V(r,n,s,t,i,o,d){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=t,this.attributeNamespace=i,this.mustUseProperty=s,this.propertyName=r,this.type=n,this.sanitizeURL=o,this.removeEmptyString=d}var J={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){J[r]=new V(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var n=r[0];J[n]=new V(n,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){J[r]=new V(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){J[r]=new V(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){J[r]=new V(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){J[r]=new V(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){J[r]=new V(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){J[r]=new V(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){J[r]=new V(r,5,!1,r.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function le(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var n=r.replace(me,le);J[n]=new V(n,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var n=r.replace(me,le);J[n]=new V(n,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var n=r.replace(me,le);J[n]=new V(n,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){J[r]=new V(r,1,!1,r.toLowerCase(),null,!1,!1)}),J.xlinkHref=new V("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){J[r]=new V(r,1,!1,r.toLowerCase(),null,!0,!0)});function ie(r,n,s,t){var i=J.hasOwnProperty(n)?J[n]:null;(i!==null?i.type!==0:t||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(ae(n,s,i,t)&&(s=null),t||i===null?F(n)&&(s===null?r.removeAttribute(n):r.setAttribute(n,""+s)):i.mustUseProperty?r[i.propertyName]=s===null?i.type===3?!1:"":s:(n=i.attributeName,t=i.attributeNamespace,s===null?r.removeAttribute(n):(i=i.type,s=i===3||i===4&&s===!0?"":""+s,t?r.setAttributeNS(t,n,s):r.setAttribute(n,s))))}var ee=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ue=Symbol.for("react.element"),Y=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),Oe=Symbol.for("react.strict_mode"),ar=Symbol.for("react.profiler"),wr=Symbol.for("react.provider"),Ar=Symbol.for("react.context"),ur=Symbol.for("react.forward_ref"),Ye=Symbol.for("react.suspense"),ir=Symbol.for("react.suspense_list"),xr=Symbol.for("react.memo"),$e=Symbol.for("react.lazy"),ve=Symbol.for("react.offscreen"),R=Symbol.iterator;function B(r){return r===null||typeof r!="object"?null:(r=R&&r[R]||r["@@iterator"],typeof r=="function"?r:null)}var L=Object.assign,v;function S(r){if(v===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);v=n&&n[1]||""}return`
`+v+r}var K=!1;function X(r,n){if(!r||K)return"";K=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(w){var t=w}Reflect.construct(r,[],n)}else{try{n.call()}catch(w){t=w}r.call(n.prototype)}else{try{throw Error()}catch(w){t=w}r()}}catch(w){if(w&&t&&typeof w.stack=="string"){for(var i=w.stack.split(`
`),o=t.stack.split(`
`),d=i.length-1,u=o.length-1;1<=d&&0<=u&&i[d]!==o[u];)u--;for(;1<=d&&0<=u;d--,u--)if(i[d]!==o[u]){if(d!==1||u!==1)do if(d--,u--,0>u||i[d]!==o[u]){var x=`
`+i[d].replace(" at new "," at ");return r.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",r.displayName)),x}while(1<=d&&0<=u);break}}}finally{K=!1,Error.prepareStackTrace=s}return(r=r?r.displayName||r.name:"")?S(r):""}function se(r){switch(r.tag){case 5:return S(r.type);case 16:return S("Lazy");case 13:return S("Suspense");case 19:return S("SuspenseList");case 0:case 2:case 15:return r=X(r.type,!1),r;case 11:return r=X(r.type.render,!1),r;case 1:return r=X(r.type,!0),r;default:return""}}function re(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case H:return"Fragment";case Y:return"Portal";case ar:return"Profiler";case Oe:return"StrictMode";case Ye:return"Suspense";case ir:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case Ar:return(r.displayName||"Context")+".Consumer";case wr:return(r._context.displayName||"Context")+".Provider";case ur:var n=r.render;return r=r.displayName,r||(r=n.displayName||n.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case xr:return n=r.displayName||null,n!==null?n:re(r.type)||"Memo";case $e:n=r._payload,r=r._init;try{return re(r(n))}catch{}}return null}function xe(r){var n=r.type;switch(r.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=n.render,r=r.displayName||r.name||"",n.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(n);case 8:return n===Oe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function oe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function de(r){var n=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ue(r){var n=de(r)?"checked":"value",s=Object.getOwnPropertyDescriptor(r.constructor.prototype,n),t=""+r[n];if(!r.hasOwnProperty(n)&&typeof s!="undefined"&&typeof s.get=="function"&&typeof s.set=="function"){var i=s.get,o=s.set;return Object.defineProperty(r,n,{configurable:!0,get:function(){return i.call(this)},set:function(d){t=""+d,o.call(this,d)}}),Object.defineProperty(r,n,{enumerable:s.enumerable}),{getValue:function(){return t},setValue:function(d){t=""+d},stopTracking:function(){r._valueTracker=null,delete r[n]}}}}function Dr(r){r._valueTracker||(r._valueTracker=Ue(r))}function Nr(r){if(!r)return!1;var n=r._valueTracker;if(!n)return!0;var s=n.getValue(),t="";return r&&(t=de(r)?r.checked?"true":"false":r.value),r=t,r!==s?(n.setValue(r),!0):!1}function xt(r){if(r=r||(typeof document!="undefined"?document:void 0),typeof r=="undefined")return null;try{return r.activeElement||r.body}catch{return r.body}}function $a(r,n){var s=n.checked;return L({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s!=null?s:r._wrapperState.initialChecked})}function hl(r,n){var s=n.defaultValue==null?"":n.defaultValue,t=n.checked!=null?n.checked:n.defaultChecked;s=oe(n.value!=null?n.value:s),r._wrapperState={initialChecked:t,initialValue:s,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function fl(r,n){n=n.checked,n!=null&&ie(r,"checked",n,!1)}function Ga(r,n){fl(r,n);var s=oe(n.value),t=n.type;if(s!=null)t==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+s):r.value!==""+s&&(r.value=""+s);else if(t==="submit"||t==="reset"){r.removeAttribute("value");return}n.hasOwnProperty("value")?Va(r,n.type,s):n.hasOwnProperty("defaultValue")&&Va(r,n.type,oe(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(r.defaultChecked=!!n.defaultChecked)}function gl(r,n,s){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var t=n.type;if(!(t!=="submit"&&t!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+r._wrapperState.initialValue,s||n===r.value||(r.value=n),r.defaultValue=n}s=r.name,s!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,s!==""&&(r.name=s)}function Va(r,n,s){(n!=="number"||xt(r.ownerDocument)!==r)&&(s==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+s&&(r.defaultValue=""+s))}var ys=Array.isArray;function _n(r,n,s,t){if(r=r.options,n){n={};for(var i=0;i<s.length;i++)n["$"+s[i]]=!0;for(s=0;s<r.length;s++)i=n.hasOwnProperty("$"+r[s].value),r[s].selected!==i&&(r[s].selected=i),i&&t&&(r[s].defaultSelected=!0)}else{for(s=""+oe(s),n=null,i=0;i<r.length;i++){if(r[i].value===s){r[i].selected=!0,t&&(r[i].defaultSelected=!0);return}n!==null||r[i].disabled||(n=r[i])}n!==null&&(n.selected=!0)}}function qa(r,n){if(n.dangerouslySetInnerHTML!=null)throw Error(l(91));return L({},n,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function vl(r,n){var s=n.value;if(s==null){if(s=n.children,n=n.defaultValue,s!=null){if(n!=null)throw Error(l(92));if(ys(s)){if(1<s.length)throw Error(l(93));s=s[0]}n=s}n==null&&(n=""),s=n}r._wrapperState={initialValue:oe(s)}}function jl(r,n){var s=oe(n.value),t=oe(n.defaultValue);s!=null&&(s=""+s,s!==r.value&&(r.value=s),n.defaultValue==null&&r.defaultValue!==s&&(r.defaultValue=s)),t!=null&&(r.defaultValue=""+t)}function yl(r){var n=r.textContent;n===r._wrapperState.initialValue&&n!==""&&n!==null&&(r.value=n)}function bl(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qa(r,n){return r==null||r==="http://www.w3.org/1999/xhtml"?bl(n):r==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var mt,wl=(function(r){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(n,s,t,i){MSApp.execUnsafeLocalFunction(function(){return r(n,s,t,i)})}:r})(function(r,n){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=n;else{for(mt=mt||document.createElement("div"),mt.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=mt.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;n.firstChild;)r.appendChild(n.firstChild)}});function bs(r,n){if(n){var s=r.firstChild;if(s&&s===r.lastChild&&s.nodeType===3){s.nodeValue=n;return}}r.textContent=n}var ws={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fu=["Webkit","ms","Moz","O"];Object.keys(ws).forEach(function(r){fu.forEach(function(n){n=n+r.charAt(0).toUpperCase()+r.substring(1),ws[n]=ws[r]})});function Nl(r,n,s){return n==null||typeof n=="boolean"||n===""?"":s||typeof n!="number"||n===0||ws.hasOwnProperty(r)&&ws[r]?(""+n).trim():n+"px"}function kl(r,n){r=r.style;for(var s in n)if(n.hasOwnProperty(s)){var t=s.indexOf("--")===0,i=Nl(s,n[s],t);s==="float"&&(s="cssFloat"),t?r.setProperty(s,i):r[s]=i}}var gu=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ya(r,n){if(n){if(gu[r]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(l(137,r));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(l(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(l(61))}if(n.style!=null&&typeof n.style!="object")throw Error(l(62))}}function Ka(r,n){if(r.indexOf("-")===-1)return typeof n.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ja=null;function Xa(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Za=null,Bn=null,An=null;function Sl(r){if(r=$s(r)){if(typeof Za!="function")throw Error(l(280));var n=r.stateNode;n&&(n=Bt(n),Za(r.stateNode,r.type,n))}}function Tl(r){Bn?An?An.push(r):An=[r]:Bn=r}function Cl(){if(Bn){var r=Bn,n=An;if(An=Bn=null,Sl(r),n)for(r=0;r<n.length;r++)Sl(n[r])}}function Ml(r,n){return r(n)}function Il(){}var ei=!1;function Rl(r,n,s){if(ei)return r(n,s);ei=!0;try{return Ml(r,n,s)}finally{ei=!1,(Bn!==null||An!==null)&&(Il(),Cl())}}function Ns(r,n){var s=r.stateNode;if(s===null)return null;var t=Bt(s);if(t===null)return null;s=t[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(r=r.type,t=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!t;break e;default:r=!1}if(r)return null;if(s&&typeof s!="function")throw Error(l(231,n,typeof s));return s}var ri=!1;if(k)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){ri=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{ri=!1}function vu(r,n,s,t,i,o,d,u,x){var w=Array.prototype.slice.call(arguments,3);try{n.apply(s,w)}catch(C){this.onError(C)}}var Ss=!1,ht=null,ft=!1,ni=null,ju={onError:function(r){Ss=!0,ht=r}};function yu(r,n,s,t,i,o,d,u,x){Ss=!1,ht=null,vu.apply(ju,arguments)}function bu(r,n,s,t,i,o,d,u,x){if(yu.apply(this,arguments),Ss){if(Ss){var w=ht;Ss=!1,ht=null}else throw Error(l(198));ft||(ft=!0,ni=w)}}function vn(r){var n=r,s=r;if(r.alternate)for(;n.return;)n=n.return;else{r=n;do n=r,(n.flags&4098)!==0&&(s=n.return),r=n.return;while(r)}return n.tag===3?s:null}function Ll(r){if(r.tag===13){var n=r.memoizedState;if(n===null&&(r=r.alternate,r!==null&&(n=r.memoizedState)),n!==null)return n.dehydrated}return null}function zl(r){if(vn(r)!==r)throw Error(l(188))}function wu(r){var n=r.alternate;if(!n){if(n=vn(r),n===null)throw Error(l(188));return n!==r?null:r}for(var s=r,t=n;;){var i=s.return;if(i===null)break;var o=i.alternate;if(o===null){if(t=i.return,t!==null){s=t;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===s)return zl(i),r;if(o===t)return zl(i),n;o=o.sibling}throw Error(l(188))}if(s.return!==t.return)s=i,t=o;else{for(var d=!1,u=i.child;u;){if(u===s){d=!0,s=i,t=o;break}if(u===t){d=!0,t=i,s=o;break}u=u.sibling}if(!d){for(u=o.child;u;){if(u===s){d=!0,s=o,t=i;break}if(u===t){d=!0,t=o,s=i;break}u=u.sibling}if(!d)throw Error(l(189))}}if(s.alternate!==t)throw Error(l(190))}if(s.tag!==3)throw Error(l(188));return s.stateNode.current===s?r:n}function El(r){return r=wu(r),r!==null?Ol(r):null}function Ol(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var n=Ol(r);if(n!==null)return n;r=r.sibling}return null}var Pl=c.unstable_scheduleCallback,_l=c.unstable_cancelCallback,Nu=c.unstable_shouldYield,ku=c.unstable_requestPaint,Re=c.unstable_now,Su=c.unstable_getCurrentPriorityLevel,si=c.unstable_ImmediatePriority,Bl=c.unstable_UserBlockingPriority,gt=c.unstable_NormalPriority,Tu=c.unstable_LowPriority,Al=c.unstable_IdlePriority,vt=null,zr=null;function Cu(r){if(zr&&typeof zr.onCommitFiberRoot=="function")try{zr.onCommitFiberRoot(vt,r,void 0,(r.current.flags&128)===128)}catch{}}var kr=Math.clz32?Math.clz32:Ru,Mu=Math.log,Iu=Math.LN2;function Ru(r){return r>>>=0,r===0?32:31-(Mu(r)/Iu|0)|0}var jt=64,yt=4194304;function Ts(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function bt(r,n){var s=r.pendingLanes;if(s===0)return 0;var t=0,i=r.suspendedLanes,o=r.pingedLanes,d=s&268435455;if(d!==0){var u=d&~i;u!==0?t=Ts(u):(o&=d,o!==0&&(t=Ts(o)))}else d=s&~i,d!==0?t=Ts(d):o!==0&&(t=Ts(o));if(t===0)return 0;if(n!==0&&n!==t&&(n&i)===0&&(i=t&-t,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if((t&4)!==0&&(t|=s&16),n=r.entangledLanes,n!==0)for(r=r.entanglements,n&=t;0<n;)s=31-kr(n),i=1<<s,t|=r[s],n&=~i;return t}function Lu(r,n){switch(r){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zu(r,n){for(var s=r.suspendedLanes,t=r.pingedLanes,i=r.expirationTimes,o=r.pendingLanes;0<o;){var d=31-kr(o),u=1<<d,x=i[d];x===-1?((u&s)===0||(u&t)!==0)&&(i[d]=Lu(u,n)):x<=n&&(r.expiredLanes|=u),o&=~u}}function ti(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Dl(){var r=jt;return jt<<=1,(jt&4194240)===0&&(jt=64),r}function ai(r){for(var n=[],s=0;31>s;s++)n.push(r);return n}function Cs(r,n,s){r.pendingLanes|=n,n!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,n=31-kr(n),r[n]=s}function Eu(r,n){var s=r.pendingLanes&~n;r.pendingLanes=n,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=n,r.mutableReadLanes&=n,r.entangledLanes&=n,n=r.entanglements;var t=r.eventTimes;for(r=r.expirationTimes;0<s;){var i=31-kr(s),o=1<<i;n[i]=0,t[i]=-1,r[i]=-1,s&=~o}}function ii(r,n){var s=r.entangledLanes|=n;for(r=r.entanglements;s;){var t=31-kr(s),i=1<<t;i&n|r[t]&n&&(r[t]|=n),s&=~i}}var fe=0;function Fl(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Ul,oi,Wl,Hl,$l,li=!1,wt=[],Yr=null,Kr=null,Jr=null,Ms=new Map,Is=new Map,Xr=[],Ou="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gl(r,n){switch(r){case"focusin":case"focusout":Yr=null;break;case"dragenter":case"dragleave":Kr=null;break;case"mouseover":case"mouseout":Jr=null;break;case"pointerover":case"pointerout":Ms.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Is.delete(n.pointerId)}}function Rs(r,n,s,t,i,o){return r===null||r.nativeEvent!==o?(r={blockedOn:n,domEventName:s,eventSystemFlags:t,nativeEvent:o,targetContainers:[i]},n!==null&&(n=$s(n),n!==null&&oi(n)),r):(r.eventSystemFlags|=t,n=r.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),r)}function Pu(r,n,s,t,i){switch(n){case"focusin":return Yr=Rs(Yr,r,n,s,t,i),!0;case"dragenter":return Kr=Rs(Kr,r,n,s,t,i),!0;case"mouseover":return Jr=Rs(Jr,r,n,s,t,i),!0;case"pointerover":var o=i.pointerId;return Ms.set(o,Rs(Ms.get(o)||null,r,n,s,t,i)),!0;case"gotpointercapture":return o=i.pointerId,Is.set(o,Rs(Is.get(o)||null,r,n,s,t,i)),!0}return!1}function Vl(r){var n=jn(r.target);if(n!==null){var s=vn(n);if(s!==null){if(n=s.tag,n===13){if(n=Ll(s),n!==null){r.blockedOn=n,$l(r.priority,function(){Wl(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){r.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Nt(r){if(r.blockedOn!==null)return!1;for(var n=r.targetContainers;0<n.length;){var s=di(r.domEventName,r.eventSystemFlags,n[0],r.nativeEvent);if(s===null){s=r.nativeEvent;var t=new s.constructor(s.type,s);Ja=t,s.target.dispatchEvent(t),Ja=null}else return n=$s(s),n!==null&&oi(n),r.blockedOn=s,!1;n.shift()}return!0}function ql(r,n,s){Nt(r)&&s.delete(n)}function _u(){li=!1,Yr!==null&&Nt(Yr)&&(Yr=null),Kr!==null&&Nt(Kr)&&(Kr=null),Jr!==null&&Nt(Jr)&&(Jr=null),Ms.forEach(ql),Is.forEach(ql)}function Ls(r,n){r.blockedOn===n&&(r.blockedOn=null,li||(li=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,_u)))}function zs(r){function n(i){return Ls(i,r)}if(0<wt.length){Ls(wt[0],r);for(var s=1;s<wt.length;s++){var t=wt[s];t.blockedOn===r&&(t.blockedOn=null)}}for(Yr!==null&&Ls(Yr,r),Kr!==null&&Ls(Kr,r),Jr!==null&&Ls(Jr,r),Ms.forEach(n),Is.forEach(n),s=0;s<Xr.length;s++)t=Xr[s],t.blockedOn===r&&(t.blockedOn=null);for(;0<Xr.length&&(s=Xr[0],s.blockedOn===null);)Vl(s),s.blockedOn===null&&Xr.shift()}var Dn=ee.ReactCurrentBatchConfig,kt=!0;function Bu(r,n,s,t){var i=fe,o=Dn.transition;Dn.transition=null;try{fe=1,ci(r,n,s,t)}finally{fe=i,Dn.transition=o}}function Au(r,n,s,t){var i=fe,o=Dn.transition;Dn.transition=null;try{fe=4,ci(r,n,s,t)}finally{fe=i,Dn.transition=o}}function ci(r,n,s,t){if(kt){var i=di(r,n,s,t);if(i===null)Ci(r,n,t,St,s),Gl(r,t);else if(Pu(i,r,n,s,t))t.stopPropagation();else if(Gl(r,t),n&4&&-1<Ou.indexOf(r)){for(;i!==null;){var o=$s(i);if(o!==null&&Ul(o),o=di(r,n,s,t),o===null&&Ci(r,n,t,St,s),o===i)break;i=o}i!==null&&t.stopPropagation()}else Ci(r,n,t,null,s)}}var St=null;function di(r,n,s,t){if(St=null,r=Xa(t),r=jn(r),r!==null)if(n=vn(r),n===null)r=null;else if(s=n.tag,s===13){if(r=Ll(n),r!==null)return r;r=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;r=null}else n!==r&&(r=null);return St=r,null}function Ql(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Su()){case si:return 1;case Bl:return 4;case gt:case Tu:return 16;case Al:return 536870912;default:return 16}default:return 16}}var Zr=null,pi=null,Tt=null;function Yl(){if(Tt)return Tt;var r,n=pi,s=n.length,t,i="value"in Zr?Zr.value:Zr.textContent,o=i.length;for(r=0;r<s&&n[r]===i[r];r++);var d=s-r;for(t=1;t<=d&&n[s-t]===i[o-t];t++);return Tt=i.slice(r,1<t?1-t:void 0)}function Ct(r){var n=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&n===13&&(r=13)):r=n,r===10&&(r=13),32<=r||r===13?r:0}function Mt(){return!0}function Kl(){return!1}function or(r){function n(s,t,i,o,d){this._reactName=s,this._targetInst=i,this.type=t,this.nativeEvent=o,this.target=d,this.currentTarget=null;for(var u in r)r.hasOwnProperty(u)&&(s=r[u],this[u]=s?s(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Mt:Kl,this.isPropagationStopped=Kl,this}return L(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Mt)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Mt)},persist:function(){},isPersistent:Mt}),n}var Fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ui=or(Fn),Es=L({},Fn,{view:0,detail:0}),Du=or(Es),xi,mi,Os,It=L({},Es,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fi,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Os&&(Os&&r.type==="mousemove"?(xi=r.screenX-Os.screenX,mi=r.screenY-Os.screenY):mi=xi=0,Os=r),xi)},movementY:function(r){return"movementY"in r?r.movementY:mi}}),Jl=or(It),Fu=L({},It,{dataTransfer:0}),Uu=or(Fu),Wu=L({},Es,{relatedTarget:0}),hi=or(Wu),Hu=L({},Fn,{animationName:0,elapsedTime:0,pseudoElement:0}),$u=or(Hu),Gu=L({},Fn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Vu=or(Gu),qu=L({},Fn,{data:0}),Xl=or(qu),Qu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ku={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ju(r){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(r):(r=Ku[r])?!!n[r]:!1}function fi(){return Ju}var Xu=L({},Es,{key:function(r){if(r.key){var n=Qu[r.key]||r.key;if(n!=="Unidentified")return n}return r.type==="keypress"?(r=Ct(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Yu[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fi,charCode:function(r){return r.type==="keypress"?Ct(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Ct(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Zu=or(Xu),ex=L({},It,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zl=or(ex),rx=L({},Es,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fi}),nx=or(rx),sx=L({},Fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),tx=or(sx),ax=L({},It,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),ix=or(ax),ox=[9,13,27,32],gi=k&&"CompositionEvent"in window,Ps=null;k&&"documentMode"in document&&(Ps=document.documentMode);var lx=k&&"TextEvent"in window&&!Ps,ec=k&&(!gi||Ps&&8<Ps&&11>=Ps),rc=" ",nc=!1;function sc(r,n){switch(r){case"keyup":return ox.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tc(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Un=!1;function cx(r,n){switch(r){case"compositionend":return tc(n);case"keypress":return n.which!==32?null:(nc=!0,rc);case"textInput":return r=n.data,r===rc&&nc?null:r;default:return null}}function dx(r,n){if(Un)return r==="compositionend"||!gi&&sc(r,n)?(r=Yl(),Tt=pi=Zr=null,Un=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ec&&n.locale!=="ko"?null:n.data;default:return null}}var px={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ac(r){var n=r&&r.nodeName&&r.nodeName.toLowerCase();return n==="input"?!!px[r.type]:n==="textarea"}function ic(r,n,s,t){Tl(t),n=Ot(n,"onChange"),0<n.length&&(s=new ui("onChange","change",null,s,t),r.push({event:s,listeners:n}))}var _s=null,Bs=null;function ux(r){kc(r,0)}function Rt(r){var n=Vn(r);if(Nr(n))return r}function xx(r,n){if(r==="change")return n}var oc=!1;if(k){var vi;if(k){var ji="oninput"in document;if(!ji){var lc=document.createElement("div");lc.setAttribute("oninput","return;"),ji=typeof lc.oninput=="function"}vi=ji}else vi=!1;oc=vi&&(!document.documentMode||9<document.documentMode)}function cc(){_s&&(_s.detachEvent("onpropertychange",dc),Bs=_s=null)}function dc(r){if(r.propertyName==="value"&&Rt(Bs)){var n=[];ic(n,Bs,r,Xa(r)),Rl(ux,n)}}function mx(r,n,s){r==="focusin"?(cc(),_s=n,Bs=s,_s.attachEvent("onpropertychange",dc)):r==="focusout"&&cc()}function hx(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Rt(Bs)}function fx(r,n){if(r==="click")return Rt(n)}function gx(r,n){if(r==="input"||r==="change")return Rt(n)}function vx(r,n){return r===n&&(r!==0||1/r===1/n)||r!==r&&n!==n}var Sr=typeof Object.is=="function"?Object.is:vx;function As(r,n){if(Sr(r,n))return!0;if(typeof r!="object"||r===null||typeof n!="object"||n===null)return!1;var s=Object.keys(r),t=Object.keys(n);if(s.length!==t.length)return!1;for(t=0;t<s.length;t++){var i=s[t];if(!h.call(n,i)||!Sr(r[i],n[i]))return!1}return!0}function pc(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function uc(r,n){var s=pc(r);r=0;for(var t;s;){if(s.nodeType===3){if(t=r+s.textContent.length,r<=n&&t>=n)return{node:s,offset:n-r};r=t}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=pc(s)}}function xc(r,n){return r&&n?r===n?!0:r&&r.nodeType===3?!1:n&&n.nodeType===3?xc(r,n.parentNode):"contains"in r?r.contains(n):r.compareDocumentPosition?!!(r.compareDocumentPosition(n)&16):!1:!1}function mc(){for(var r=window,n=xt();n instanceof r.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)r=n.contentWindow;else break;n=xt(r.document)}return n}function yi(r){var n=r&&r.nodeName&&r.nodeName.toLowerCase();return n&&(n==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||n==="textarea"||r.contentEditable==="true")}function jx(r){var n=mc(),s=r.focusedElem,t=r.selectionRange;if(n!==s&&s&&s.ownerDocument&&xc(s.ownerDocument.documentElement,s)){if(t!==null&&yi(s)){if(n=t.start,r=t.end,r===void 0&&(r=n),"selectionStart"in s)s.selectionStart=n,s.selectionEnd=Math.min(r,s.value.length);else if(r=(n=s.ownerDocument||document)&&n.defaultView||window,r.getSelection){r=r.getSelection();var i=s.textContent.length,o=Math.min(t.start,i);t=t.end===void 0?o:Math.min(t.end,i),!r.extend&&o>t&&(i=t,t=o,o=i),i=uc(s,o);var d=uc(s,t);i&&d&&(r.rangeCount!==1||r.anchorNode!==i.node||r.anchorOffset!==i.offset||r.focusNode!==d.node||r.focusOffset!==d.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),r.removeAllRanges(),o>t?(r.addRange(n),r.extend(d.node,d.offset)):(n.setEnd(d.node,d.offset),r.addRange(n)))}}for(n=[],r=s;r=r.parentNode;)r.nodeType===1&&n.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<n.length;s++)r=n[s],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var yx=k&&"documentMode"in document&&11>=document.documentMode,Wn=null,bi=null,Ds=null,wi=!1;function hc(r,n,s){var t=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;wi||Wn==null||Wn!==xt(t)||(t=Wn,"selectionStart"in t&&yi(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Ds&&As(Ds,t)||(Ds=t,t=Ot(bi,"onSelect"),0<t.length&&(n=new ui("onSelect","select",null,n,s),r.push({event:n,listeners:t}),n.target=Wn)))}function Lt(r,n){var s={};return s[r.toLowerCase()]=n.toLowerCase(),s["Webkit"+r]="webkit"+n,s["Moz"+r]="moz"+n,s}var Hn={animationend:Lt("Animation","AnimationEnd"),animationiteration:Lt("Animation","AnimationIteration"),animationstart:Lt("Animation","AnimationStart"),transitionend:Lt("Transition","TransitionEnd")},Ni={},fc={};k&&(fc=document.createElement("div").style,"AnimationEvent"in window||(delete Hn.animationend.animation,delete Hn.animationiteration.animation,delete Hn.animationstart.animation),"TransitionEvent"in window||delete Hn.transitionend.transition);function zt(r){if(Ni[r])return Ni[r];if(!Hn[r])return r;var n=Hn[r],s;for(s in n)if(n.hasOwnProperty(s)&&s in fc)return Ni[r]=n[s];return r}var gc=zt("animationend"),vc=zt("animationiteration"),jc=zt("animationstart"),yc=zt("transitionend"),bc=new Map,wc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function en(r,n){bc.set(r,n),g(n,[r])}for(var ki=0;ki<wc.length;ki++){var Si=wc[ki],bx=Si.toLowerCase(),wx=Si[0].toUpperCase()+Si.slice(1);en(bx,"on"+wx)}en(gc,"onAnimationEnd"),en(vc,"onAnimationIteration"),en(jc,"onAnimationStart"),en("dblclick","onDoubleClick"),en("focusin","onFocus"),en("focusout","onBlur"),en(yc,"onTransitionEnd"),b("onMouseEnter",["mouseout","mouseover"]),b("onMouseLeave",["mouseout","mouseover"]),b("onPointerEnter",["pointerout","pointerover"]),b("onPointerLeave",["pointerout","pointerover"]),g("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),g("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),g("onBeforeInput",["compositionend","keypress","textInput","paste"]),g("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),g("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),g("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fs));function Nc(r,n,s){var t=r.type||"unknown-event";r.currentTarget=s,bu(t,n,void 0,r),r.currentTarget=null}function kc(r,n){n=(n&4)!==0;for(var s=0;s<r.length;s++){var t=r[s],i=t.event;t=t.listeners;e:{var o=void 0;if(n)for(var d=t.length-1;0<=d;d--){var u=t[d],x=u.instance,w=u.currentTarget;if(u=u.listener,x!==o&&i.isPropagationStopped())break e;Nc(i,u,w),o=x}else for(d=0;d<t.length;d++){if(u=t[d],x=u.instance,w=u.currentTarget,u=u.listener,x!==o&&i.isPropagationStopped())break e;Nc(i,u,w),o=x}}}if(ft)throw r=ni,ft=!1,ni=null,r}function ye(r,n){var s=n[Ei];s===void 0&&(s=n[Ei]=new Set);var t=r+"__bubble";s.has(t)||(Sc(n,r,2,!1),s.add(t))}function Ti(r,n,s){var t=0;n&&(t|=4),Sc(s,r,t,n)}var Et="_reactListening"+Math.random().toString(36).slice(2);function Us(r){if(!r[Et]){r[Et]=!0,p.forEach(function(s){s!=="selectionchange"&&(Nx.has(s)||Ti(s,!1,r),Ti(s,!0,r))});var n=r.nodeType===9?r:r.ownerDocument;n===null||n[Et]||(n[Et]=!0,Ti("selectionchange",!1,n))}}function Sc(r,n,s,t){switch(Ql(n)){case 1:var i=Bu;break;case 4:i=Au;break;default:i=ci}s=i.bind(null,n,s,r),i=void 0,!ri||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),t?i!==void 0?r.addEventListener(n,s,{capture:!0,passive:i}):r.addEventListener(n,s,!0):i!==void 0?r.addEventListener(n,s,{passive:i}):r.addEventListener(n,s,!1)}function Ci(r,n,s,t,i){var o=t;if((n&1)===0&&(n&2)===0&&t!==null)e:for(;;){if(t===null)return;var d=t.tag;if(d===3||d===4){var u=t.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(d===4)for(d=t.return;d!==null;){var x=d.tag;if((x===3||x===4)&&(x=d.stateNode.containerInfo,x===i||x.nodeType===8&&x.parentNode===i))return;d=d.return}for(;u!==null;){if(d=jn(u),d===null)return;if(x=d.tag,x===5||x===6){t=o=d;continue e}u=u.parentNode}}t=t.return}Rl(function(){var w=o,C=Xa(s),M=[];e:{var T=bc.get(r);if(T!==void 0){var z=ui,O=r;switch(r){case"keypress":if(Ct(s)===0)break e;case"keydown":case"keyup":z=Zu;break;case"focusin":O="focus",z=hi;break;case"focusout":O="blur",z=hi;break;case"beforeblur":case"afterblur":z=hi;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=Jl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=Uu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=nx;break;case gc:case vc:case jc:z=$u;break;case yc:z=tx;break;case"scroll":z=Du;break;case"wheel":z=ix;break;case"copy":case"cut":case"paste":z=Vu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=Zl}var P=(n&4)!==0,Le=!P&&r==="scroll",j=P?T!==null?T+"Capture":null:T;P=[];for(var f=w,y;f!==null;){y=f;var I=y.stateNode;if(y.tag===5&&I!==null&&(y=I,j!==null&&(I=Ns(f,j),I!=null&&P.push(Ws(f,I,y)))),Le)break;f=f.return}0<P.length&&(T=new z(T,O,null,s,C),M.push({event:T,listeners:P}))}}if((n&7)===0){e:{if(T=r==="mouseover"||r==="pointerover",z=r==="mouseout"||r==="pointerout",T&&s!==Ja&&(O=s.relatedTarget||s.fromElement)&&(jn(O)||O[Fr]))break e;if((z||T)&&(T=C.window===C?C:(T=C.ownerDocument)?T.defaultView||T.parentWindow:window,z?(O=s.relatedTarget||s.toElement,z=w,O=O?jn(O):null,O!==null&&(Le=vn(O),O!==Le||O.tag!==5&&O.tag!==6)&&(O=null)):(z=null,O=w),z!==O)){if(P=Jl,I="onMouseLeave",j="onMouseEnter",f="mouse",(r==="pointerout"||r==="pointerover")&&(P=Zl,I="onPointerLeave",j="onPointerEnter",f="pointer"),Le=z==null?T:Vn(z),y=O==null?T:Vn(O),T=new P(I,f+"leave",z,s,C),T.target=Le,T.relatedTarget=y,I=null,jn(C)===w&&(P=new P(j,f+"enter",O,s,C),P.target=y,P.relatedTarget=Le,I=P),Le=I,z&&O)r:{for(P=z,j=O,f=0,y=P;y;y=$n(y))f++;for(y=0,I=j;I;I=$n(I))y++;for(;0<f-y;)P=$n(P),f--;for(;0<y-f;)j=$n(j),y--;for(;f--;){if(P===j||j!==null&&P===j.alternate)break r;P=$n(P),j=$n(j)}P=null}else P=null;z!==null&&Tc(M,T,z,P,!1),O!==null&&Le!==null&&Tc(M,Le,O,P,!0)}}e:{if(T=w?Vn(w):window,z=T.nodeName&&T.nodeName.toLowerCase(),z==="select"||z==="input"&&T.type==="file")var _=xx;else if(ac(T))if(oc)_=gx;else{_=hx;var U=mx}else(z=T.nodeName)&&z.toLowerCase()==="input"&&(T.type==="checkbox"||T.type==="radio")&&(_=fx);if(_&&(_=_(r,w))){ic(M,_,s,C);break e}U&&U(r,T,w),r==="focusout"&&(U=T._wrapperState)&&U.controlled&&T.type==="number"&&Va(T,"number",T.value)}switch(U=w?Vn(w):window,r){case"focusin":(ac(U)||U.contentEditable==="true")&&(Wn=U,bi=w,Ds=null);break;case"focusout":Ds=bi=Wn=null;break;case"mousedown":wi=!0;break;case"contextmenu":case"mouseup":case"dragend":wi=!1,hc(M,s,C);break;case"selectionchange":if(yx)break;case"keydown":case"keyup":hc(M,s,C)}var W;if(gi)e:{switch(r){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Un?sc(r,s)&&($="onCompositionEnd"):r==="keydown"&&s.keyCode===229&&($="onCompositionStart");$&&(ec&&s.locale!=="ko"&&(Un||$!=="onCompositionStart"?$==="onCompositionEnd"&&Un&&(W=Yl()):(Zr=C,pi="value"in Zr?Zr.value:Zr.textContent,Un=!0)),U=Ot(w,$),0<U.length&&($=new Xl($,r,null,s,C),M.push({event:$,listeners:U}),W?$.data=W:(W=tc(s),W!==null&&($.data=W)))),(W=lx?cx(r,s):dx(r,s))&&(w=Ot(w,"onBeforeInput"),0<w.length&&(C=new Xl("onBeforeInput","beforeinput",null,s,C),M.push({event:C,listeners:w}),C.data=W))}kc(M,n)})}function Ws(r,n,s){return{instance:r,listener:n,currentTarget:s}}function Ot(r,n){for(var s=n+"Capture",t=[];r!==null;){var i=r,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ns(r,s),o!=null&&t.unshift(Ws(r,o,i)),o=Ns(r,n),o!=null&&t.push(Ws(r,o,i))),r=r.return}return t}function $n(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Tc(r,n,s,t,i){for(var o=n._reactName,d=[];s!==null&&s!==t;){var u=s,x=u.alternate,w=u.stateNode;if(x!==null&&x===t)break;u.tag===5&&w!==null&&(u=w,i?(x=Ns(s,o),x!=null&&d.unshift(Ws(s,x,u))):i||(x=Ns(s,o),x!=null&&d.push(Ws(s,x,u)))),s=s.return}d.length!==0&&r.push({event:n,listeners:d})}var kx=/\r\n?/g,Sx=/\u0000|\uFFFD/g;function Cc(r){return(typeof r=="string"?r:""+r).replace(kx,`
`).replace(Sx,"")}function Pt(r,n,s){if(n=Cc(n),Cc(r)!==n&&s)throw Error(l(425))}function _t(){}var Mi=null,Ii=null;function Ri(r,n){return r==="textarea"||r==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Li=typeof setTimeout=="function"?setTimeout:void 0,Tx=typeof clearTimeout=="function"?clearTimeout:void 0,Mc=typeof Promise=="function"?Promise:void 0,Cx=typeof queueMicrotask=="function"?queueMicrotask:typeof Mc!="undefined"?function(r){return Mc.resolve(null).then(r).catch(Mx)}:Li;function Mx(r){setTimeout(function(){throw r})}function zi(r,n){var s=n,t=0;do{var i=s.nextSibling;if(r.removeChild(s),i&&i.nodeType===8)if(s=i.data,s==="/$"){if(t===0){r.removeChild(i),zs(n);return}t--}else s!=="$"&&s!=="$?"&&s!=="$!"||t++;s=i}while(s);zs(n)}function rn(r){for(;r!=null;r=r.nextSibling){var n=r.nodeType;if(n===1||n===3)break;if(n===8){if(n=r.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return r}function Ic(r){r=r.previousSibling;for(var n=0;r;){if(r.nodeType===8){var s=r.data;if(s==="$"||s==="$!"||s==="$?"){if(n===0)return r;n--}else s==="/$"&&n++}r=r.previousSibling}return null}var Gn=Math.random().toString(36).slice(2),Er="__reactFiber$"+Gn,Hs="__reactProps$"+Gn,Fr="__reactContainer$"+Gn,Ei="__reactEvents$"+Gn,Ix="__reactListeners$"+Gn,Rx="__reactHandles$"+Gn;function jn(r){var n=r[Er];if(n)return n;for(var s=r.parentNode;s;){if(n=s[Fr]||s[Er]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(r=Ic(r);r!==null;){if(s=r[Er])return s;r=Ic(r)}return n}r=s,s=r.parentNode}return null}function $s(r){return r=r[Er]||r[Fr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Vn(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(l(33))}function Bt(r){return r[Hs]||null}var Oi=[],qn=-1;function nn(r){return{current:r}}function be(r){0>qn||(r.current=Oi[qn],Oi[qn]=null,qn--)}function je(r,n){qn++,Oi[qn]=r.current,r.current=n}var sn={},Ge=nn(sn),Xe=nn(!1),yn=sn;function Qn(r,n){var s=r.type.contextTypes;if(!s)return sn;var t=r.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===n)return t.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in s)i[o]=n[o];return t&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=n,r.__reactInternalMemoizedMaskedChildContext=i),i}function Ze(r){return r=r.childContextTypes,r!=null}function At(){be(Xe),be(Ge)}function Rc(r,n,s){if(Ge.current!==sn)throw Error(l(168));je(Ge,n),je(Xe,s)}function Lc(r,n,s){var t=r.stateNode;if(n=n.childContextTypes,typeof t.getChildContext!="function")return s;t=t.getChildContext();for(var i in t)if(!(i in n))throw Error(l(108,xe(r)||"Unknown",i));return L({},s,t)}function Dt(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||sn,yn=Ge.current,je(Ge,r),je(Xe,Xe.current),!0}function zc(r,n,s){var t=r.stateNode;if(!t)throw Error(l(169));s?(r=Lc(r,n,yn),t.__reactInternalMemoizedMergedChildContext=r,be(Xe),be(Ge),je(Ge,r)):be(Xe),je(Xe,s)}var Ur=null,Ft=!1,Pi=!1;function Ec(r){Ur===null?Ur=[r]:Ur.push(r)}function Lx(r){Ft=!0,Ec(r)}function tn(){if(!Pi&&Ur!==null){Pi=!0;var r=0,n=fe;try{var s=Ur;for(fe=1;r<s.length;r++){var t=s[r];do t=t(!0);while(t!==null)}Ur=null,Ft=!1}catch(i){throw Ur!==null&&(Ur=Ur.slice(r+1)),Pl(si,tn),i}finally{fe=n,Pi=!1}}return null}var Yn=[],Kn=0,Ut=null,Wt=0,mr=[],hr=0,bn=null,Wr=1,Hr="";function wn(r,n){Yn[Kn++]=Wt,Yn[Kn++]=Ut,Ut=r,Wt=n}function Oc(r,n,s){mr[hr++]=Wr,mr[hr++]=Hr,mr[hr++]=bn,bn=r;var t=Wr;r=Hr;var i=32-kr(t)-1;t&=~(1<<i),s+=1;var o=32-kr(n)+i;if(30<o){var d=i-i%5;o=(t&(1<<d)-1).toString(32),t>>=d,i-=d,Wr=1<<32-kr(n)+i|s<<i|t,Hr=o+r}else Wr=1<<o|s<<i|t,Hr=r}function _i(r){r.return!==null&&(wn(r,1),Oc(r,1,0))}function Bi(r){for(;r===Ut;)Ut=Yn[--Kn],Yn[Kn]=null,Wt=Yn[--Kn],Yn[Kn]=null;for(;r===bn;)bn=mr[--hr],mr[hr]=null,Hr=mr[--hr],mr[hr]=null,Wr=mr[--hr],mr[hr]=null}var lr=null,cr=null,ke=!1,Tr=null;function Pc(r,n){var s=jr(5,null,null,0);s.elementType="DELETED",s.stateNode=n,s.return=r,n=r.deletions,n===null?(r.deletions=[s],r.flags|=16):n.push(s)}function _c(r,n){switch(r.tag){case 5:var s=r.type;return n=n.nodeType!==1||s.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(r.stateNode=n,lr=r,cr=rn(n.firstChild),!0):!1;case 6:return n=r.pendingProps===""||n.nodeType!==3?null:n,n!==null?(r.stateNode=n,lr=r,cr=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(s=bn!==null?{id:Wr,overflow:Hr}:null,r.memoizedState={dehydrated:n,treeContext:s,retryLane:1073741824},s=jr(18,null,null,0),s.stateNode=n,s.return=r,r.child=s,lr=r,cr=null,!0):!1;default:return!1}}function Ai(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Di(r){if(ke){var n=cr;if(n){var s=n;if(!_c(r,n)){if(Ai(r))throw Error(l(418));n=rn(s.nextSibling);var t=lr;n&&_c(r,n)?Pc(t,s):(r.flags=r.flags&-4097|2,ke=!1,lr=r)}}else{if(Ai(r))throw Error(l(418));r.flags=r.flags&-4097|2,ke=!1,lr=r}}}function Bc(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;lr=r}function Ht(r){if(r!==lr)return!1;if(!ke)return Bc(r),ke=!0,!1;var n;if((n=r.tag!==3)&&!(n=r.tag!==5)&&(n=r.type,n=n!=="head"&&n!=="body"&&!Ri(r.type,r.memoizedProps)),n&&(n=cr)){if(Ai(r))throw Ac(),Error(l(418));for(;n;)Pc(r,n),n=rn(n.nextSibling)}if(Bc(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(l(317));e:{for(r=r.nextSibling,n=0;r;){if(r.nodeType===8){var s=r.data;if(s==="/$"){if(n===0){cr=rn(r.nextSibling);break e}n--}else s!=="$"&&s!=="$!"&&s!=="$?"||n++}r=r.nextSibling}cr=null}}else cr=lr?rn(r.stateNode.nextSibling):null;return!0}function Ac(){for(var r=cr;r;)r=rn(r.nextSibling)}function Jn(){cr=lr=null,ke=!1}function Fi(r){Tr===null?Tr=[r]:Tr.push(r)}var zx=ee.ReactCurrentBatchConfig;function Gs(r,n,s){if(r=s.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(l(309));var t=s.stateNode}if(!t)throw Error(l(147,r));var i=t,o=""+r;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(d){var u=i.refs;d===null?delete u[o]:u[o]=d},n._stringRef=o,n)}if(typeof r!="string")throw Error(l(284));if(!s._owner)throw Error(l(290,r))}return r}function $t(r,n){throw r=Object.prototype.toString.call(n),Error(l(31,r==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":r))}function Dc(r){var n=r._init;return n(r._payload)}function Fc(r){function n(j,f){if(r){var y=j.deletions;y===null?(j.deletions=[f],j.flags|=16):y.push(f)}}function s(j,f){if(!r)return null;for(;f!==null;)n(j,f),f=f.sibling;return null}function t(j,f){for(j=new Map;f!==null;)f.key!==null?j.set(f.key,f):j.set(f.index,f),f=f.sibling;return j}function i(j,f){return j=xn(j,f),j.index=0,j.sibling=null,j}function o(j,f,y){return j.index=y,r?(y=j.alternate,y!==null?(y=y.index,y<f?(j.flags|=2,f):y):(j.flags|=2,f)):(j.flags|=1048576,f)}function d(j){return r&&j.alternate===null&&(j.flags|=2),j}function u(j,f,y,I){return f===null||f.tag!==6?(f=zo(y,j.mode,I),f.return=j,f):(f=i(f,y),f.return=j,f)}function x(j,f,y,I){var _=y.type;return _===H?C(j,f,y.props.children,I,y.key):f!==null&&(f.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===$e&&Dc(_)===f.type)?(I=i(f,y.props),I.ref=Gs(j,f,y),I.return=j,I):(I=ma(y.type,y.key,y.props,null,j.mode,I),I.ref=Gs(j,f,y),I.return=j,I)}function w(j,f,y,I){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=Eo(y,j.mode,I),f.return=j,f):(f=i(f,y.children||[]),f.return=j,f)}function C(j,f,y,I,_){return f===null||f.tag!==7?(f=Rn(y,j.mode,I,_),f.return=j,f):(f=i(f,y),f.return=j,f)}function M(j,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=zo(""+f,j.mode,y),f.return=j,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ue:return y=ma(f.type,f.key,f.props,null,j.mode,y),y.ref=Gs(j,null,f),y.return=j,y;case Y:return f=Eo(f,j.mode,y),f.return=j,f;case $e:var I=f._init;return M(j,I(f._payload),y)}if(ys(f)||B(f))return f=Rn(f,j.mode,y,null),f.return=j,f;$t(j,f)}return null}function T(j,f,y,I){var _=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return _!==null?null:u(j,f,""+y,I);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ue:return y.key===_?x(j,f,y,I):null;case Y:return y.key===_?w(j,f,y,I):null;case $e:return _=y._init,T(j,f,_(y._payload),I)}if(ys(y)||B(y))return _!==null?null:C(j,f,y,I,null);$t(j,y)}return null}function z(j,f,y,I,_){if(typeof I=="string"&&I!==""||typeof I=="number")return j=j.get(y)||null,u(f,j,""+I,_);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ue:return j=j.get(I.key===null?y:I.key)||null,x(f,j,I,_);case Y:return j=j.get(I.key===null?y:I.key)||null,w(f,j,I,_);case $e:var U=I._init;return z(j,f,y,U(I._payload),_)}if(ys(I)||B(I))return j=j.get(y)||null,C(f,j,I,_,null);$t(f,I)}return null}function O(j,f,y,I){for(var _=null,U=null,W=f,$=f=0,De=null;W!==null&&$<y.length;$++){W.index>$?(De=W,W=null):De=W.sibling;var pe=T(j,W,y[$],I);if(pe===null){W===null&&(W=De);break}r&&W&&pe.alternate===null&&n(j,W),f=o(pe,f,$),U===null?_=pe:U.sibling=pe,U=pe,W=De}if($===y.length)return s(j,W),ke&&wn(j,$),_;if(W===null){for(;$<y.length;$++)W=M(j,y[$],I),W!==null&&(f=o(W,f,$),U===null?_=W:U.sibling=W,U=W);return ke&&wn(j,$),_}for(W=t(j,W);$<y.length;$++)De=z(W,j,$,y[$],I),De!==null&&(r&&De.alternate!==null&&W.delete(De.key===null?$:De.key),f=o(De,f,$),U===null?_=De:U.sibling=De,U=De);return r&&W.forEach(function(mn){return n(j,mn)}),ke&&wn(j,$),_}function P(j,f,y,I){var _=B(y);if(typeof _!="function")throw Error(l(150));if(y=_.call(y),y==null)throw Error(l(151));for(var U=_=null,W=f,$=f=0,De=null,pe=y.next();W!==null&&!pe.done;$++,pe=y.next()){W.index>$?(De=W,W=null):De=W.sibling;var mn=T(j,W,pe.value,I);if(mn===null){W===null&&(W=De);break}r&&W&&mn.alternate===null&&n(j,W),f=o(mn,f,$),U===null?_=mn:U.sibling=mn,U=mn,W=De}if(pe.done)return s(j,W),ke&&wn(j,$),_;if(W===null){for(;!pe.done;$++,pe=y.next())pe=M(j,pe.value,I),pe!==null&&(f=o(pe,f,$),U===null?_=pe:U.sibling=pe,U=pe);return ke&&wn(j,$),_}for(W=t(j,W);!pe.done;$++,pe=y.next())pe=z(W,j,$,pe.value,I),pe!==null&&(r&&pe.alternate!==null&&W.delete(pe.key===null?$:pe.key),f=o(pe,f,$),U===null?_=pe:U.sibling=pe,U=pe);return r&&W.forEach(function(pm){return n(j,pm)}),ke&&wn(j,$),_}function Le(j,f,y,I){if(typeof y=="object"&&y!==null&&y.type===H&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ue:e:{for(var _=y.key,U=f;U!==null;){if(U.key===_){if(_=y.type,_===H){if(U.tag===7){s(j,U.sibling),f=i(U,y.props.children),f.return=j,j=f;break e}}else if(U.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===$e&&Dc(_)===U.type){s(j,U.sibling),f=i(U,y.props),f.ref=Gs(j,U,y),f.return=j,j=f;break e}s(j,U);break}else n(j,U);U=U.sibling}y.type===H?(f=Rn(y.props.children,j.mode,I,y.key),f.return=j,j=f):(I=ma(y.type,y.key,y.props,null,j.mode,I),I.ref=Gs(j,f,y),I.return=j,j=I)}return d(j);case Y:e:{for(U=y.key;f!==null;){if(f.key===U)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){s(j,f.sibling),f=i(f,y.children||[]),f.return=j,j=f;break e}else{s(j,f);break}else n(j,f);f=f.sibling}f=Eo(y,j.mode,I),f.return=j,j=f}return d(j);case $e:return U=y._init,Le(j,f,U(y._payload),I)}if(ys(y))return O(j,f,y,I);if(B(y))return P(j,f,y,I);$t(j,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(s(j,f.sibling),f=i(f,y),f.return=j,j=f):(s(j,f),f=zo(y,j.mode,I),f.return=j,j=f),d(j)):s(j,f)}return Le}var Xn=Fc(!0),Uc=Fc(!1),Gt=nn(null),Vt=null,Zn=null,Ui=null;function Wi(){Ui=Zn=Vt=null}function Hi(r){var n=Gt.current;be(Gt),r._currentValue=n}function $i(r,n,s){for(;r!==null;){var t=r.alternate;if((r.childLanes&n)!==n?(r.childLanes|=n,t!==null&&(t.childLanes|=n)):t!==null&&(t.childLanes&n)!==n&&(t.childLanes|=n),r===s)break;r=r.return}}function es(r,n){Vt=r,Ui=Zn=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&n)!==0&&(er=!0),r.firstContext=null)}function fr(r){var n=r._currentValue;if(Ui!==r)if(r={context:r,memoizedValue:n,next:null},Zn===null){if(Vt===null)throw Error(l(308));Zn=r,Vt.dependencies={lanes:0,firstContext:r}}else Zn=Zn.next=r;return n}var Nn=null;function Gi(r){Nn===null?Nn=[r]:Nn.push(r)}function Wc(r,n,s,t){var i=n.interleaved;return i===null?(s.next=s,Gi(n)):(s.next=i.next,i.next=s),n.interleaved=s,$r(r,t)}function $r(r,n){r.lanes|=n;var s=r.alternate;for(s!==null&&(s.lanes|=n),s=r,r=r.return;r!==null;)r.childLanes|=n,s=r.alternate,s!==null&&(s.childLanes|=n),s=r,r=r.return;return s.tag===3?s.stateNode:null}var an=!1;function Vi(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hc(r,n){r=r.updateQueue,n.updateQueue===r&&(n.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Gr(r,n){return{eventTime:r,lane:n,tag:0,payload:null,callback:null,next:null}}function on(r,n,s){var t=r.updateQueue;if(t===null)return null;if(t=t.shared,(ce&2)!==0){var i=t.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n,$r(r,s)}return i=t.interleaved,i===null?(n.next=n,Gi(t)):(n.next=i.next,i.next=n),t.interleaved=n,$r(r,s)}function qt(r,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194240)!==0)){var t=n.lanes;t&=r.pendingLanes,s|=t,n.lanes=s,ii(r,s)}}function $c(r,n){var s=r.updateQueue,t=r.alternate;if(t!==null&&(t=t.updateQueue,s===t)){var i=null,o=null;if(s=s.firstBaseUpdate,s!==null){do{var d={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};o===null?i=o=d:o=o.next=d,s=s.next}while(s!==null);o===null?i=o=n:o=o.next=n}else i=o=n;s={baseState:t.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:t.shared,effects:t.effects},r.updateQueue=s;return}r=s.lastBaseUpdate,r===null?s.firstBaseUpdate=n:r.next=n,s.lastBaseUpdate=n}function Qt(r,n,s,t){var i=r.updateQueue;an=!1;var o=i.firstBaseUpdate,d=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var x=u,w=x.next;x.next=null,d===null?o=w:d.next=w,d=x;var C=r.alternate;C!==null&&(C=C.updateQueue,u=C.lastBaseUpdate,u!==d&&(u===null?C.firstBaseUpdate=w:u.next=w,C.lastBaseUpdate=x))}if(o!==null){var M=i.baseState;d=0,C=w=x=null,u=o;do{var T=u.lane,z=u.eventTime;if((t&T)===T){C!==null&&(C=C.next={eventTime:z,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var O=r,P=u;switch(T=n,z=s,P.tag){case 1:if(O=P.payload,typeof O=="function"){M=O.call(z,M,T);break e}M=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=P.payload,T=typeof O=="function"?O.call(z,M,T):O,T==null)break e;M=L({},M,T);break e;case 2:an=!0}}u.callback!==null&&u.lane!==0&&(r.flags|=64,T=i.effects,T===null?i.effects=[u]:T.push(u))}else z={eventTime:z,lane:T,tag:u.tag,payload:u.payload,callback:u.callback,next:null},C===null?(w=C=z,x=M):C=C.next=z,d|=T;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;T=u,u=T.next,T.next=null,i.lastBaseUpdate=T,i.shared.pending=null}}while(!0);if(C===null&&(x=M),i.baseState=x,i.firstBaseUpdate=w,i.lastBaseUpdate=C,n=i.shared.interleaved,n!==null){i=n;do d|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);Tn|=d,r.lanes=d,r.memoizedState=M}}function Gc(r,n,s){if(r=n.effects,n.effects=null,r!==null)for(n=0;n<r.length;n++){var t=r[n],i=t.callback;if(i!==null){if(t.callback=null,t=s,typeof i!="function")throw Error(l(191,i));i.call(t)}}}var Vs={},Or=nn(Vs),qs=nn(Vs),Qs=nn(Vs);function kn(r){if(r===Vs)throw Error(l(174));return r}function qi(r,n){switch(je(Qs,n),je(qs,r),je(Or,Vs),r=n.nodeType,r){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Qa(null,"");break;default:r=r===8?n.parentNode:n,n=r.namespaceURI||null,r=r.tagName,n=Qa(n,r)}be(Or),je(Or,n)}function rs(){be(Or),be(qs),be(Qs)}function Vc(r){kn(Qs.current);var n=kn(Or.current),s=Qa(n,r.type);n!==s&&(je(qs,r),je(Or,s))}function Qi(r){qs.current===r&&(be(Or),be(qs))}var Se=nn(0);function Yt(r){for(var n=r;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Yi=[];function Ki(){for(var r=0;r<Yi.length;r++)Yi[r]._workInProgressVersionPrimary=null;Yi.length=0}var Kt=ee.ReactCurrentDispatcher,Ji=ee.ReactCurrentBatchConfig,Sn=0,Te=null,Pe=null,Be=null,Jt=!1,Ys=!1,Ks=0,Ex=0;function Ve(){throw Error(l(321))}function Xi(r,n){if(n===null)return!1;for(var s=0;s<n.length&&s<r.length;s++)if(!Sr(r[s],n[s]))return!1;return!0}function Zi(r,n,s,t,i,o){if(Sn=o,Te=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Kt.current=r===null||r.memoizedState===null?Bx:Ax,r=s(t,i),Ys){o=0;do{if(Ys=!1,Ks=0,25<=o)throw Error(l(301));o+=1,Be=Pe=null,n.updateQueue=null,Kt.current=Dx,r=s(t,i)}while(Ys)}if(Kt.current=ea,n=Pe!==null&&Pe.next!==null,Sn=0,Be=Pe=Te=null,Jt=!1,n)throw Error(l(300));return r}function eo(){var r=Ks!==0;return Ks=0,r}function Pr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Te.memoizedState=Be=r:Be=Be.next=r,Be}function gr(){if(Pe===null){var r=Te.alternate;r=r!==null?r.memoizedState:null}else r=Pe.next;var n=Be===null?Te.memoizedState:Be.next;if(n!==null)Be=n,Pe=r;else{if(r===null)throw Error(l(310));Pe=r,r={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Be===null?Te.memoizedState=Be=r:Be=Be.next=r}return Be}function Js(r,n){return typeof n=="function"?n(r):n}function ro(r){var n=gr(),s=n.queue;if(s===null)throw Error(l(311));s.lastRenderedReducer=r;var t=Pe,i=t.baseQueue,o=s.pending;if(o!==null){if(i!==null){var d=i.next;i.next=o.next,o.next=d}t.baseQueue=i=o,s.pending=null}if(i!==null){o=i.next,t=t.baseState;var u=d=null,x=null,w=o;do{var C=w.lane;if((Sn&C)===C)x!==null&&(x=x.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),t=w.hasEagerState?w.eagerState:r(t,w.action);else{var M={lane:C,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};x===null?(u=x=M,d=t):x=x.next=M,Te.lanes|=C,Tn|=C}w=w.next}while(w!==null&&w!==o);x===null?d=t:x.next=u,Sr(t,n.memoizedState)||(er=!0),n.memoizedState=t,n.baseState=d,n.baseQueue=x,s.lastRenderedState=t}if(r=s.interleaved,r!==null){i=r;do o=i.lane,Te.lanes|=o,Tn|=o,i=i.next;while(i!==r)}else i===null&&(s.lanes=0);return[n.memoizedState,s.dispatch]}function no(r){var n=gr(),s=n.queue;if(s===null)throw Error(l(311));s.lastRenderedReducer=r;var t=s.dispatch,i=s.pending,o=n.memoizedState;if(i!==null){s.pending=null;var d=i=i.next;do o=r(o,d.action),d=d.next;while(d!==i);Sr(o,n.memoizedState)||(er=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),s.lastRenderedState=o}return[o,t]}function qc(){}function Qc(r,n){var s=Te,t=gr(),i=n(),o=!Sr(t.memoizedState,i);if(o&&(t.memoizedState=i,er=!0),t=t.queue,so(Jc.bind(null,s,t,r),[r]),t.getSnapshot!==n||o||Be!==null&&Be.memoizedState.tag&1){if(s.flags|=2048,Xs(9,Kc.bind(null,s,t,i,n),void 0,null),Ae===null)throw Error(l(349));(Sn&30)!==0||Yc(s,n,i)}return i}function Yc(r,n,s){r.flags|=16384,r={getSnapshot:n,value:s},n=Te.updateQueue,n===null?(n={lastEffect:null,stores:null},Te.updateQueue=n,n.stores=[r]):(s=n.stores,s===null?n.stores=[r]:s.push(r))}function Kc(r,n,s,t){n.value=s,n.getSnapshot=t,Xc(n)&&Zc(r)}function Jc(r,n,s){return s(function(){Xc(n)&&Zc(r)})}function Xc(r){var n=r.getSnapshot;r=r.value;try{var s=n();return!Sr(r,s)}catch{return!0}}function Zc(r){var n=$r(r,1);n!==null&&Rr(n,r,1,-1)}function ed(r){var n=Pr();return typeof r=="function"&&(r=r()),n.memoizedState=n.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Js,lastRenderedState:r},n.queue=r,r=r.dispatch=_x.bind(null,Te,r),[n.memoizedState,r]}function Xs(r,n,s,t){return r={tag:r,create:n,destroy:s,deps:t,next:null},n=Te.updateQueue,n===null?(n={lastEffect:null,stores:null},Te.updateQueue=n,n.lastEffect=r.next=r):(s=n.lastEffect,s===null?n.lastEffect=r.next=r:(t=s.next,s.next=r,r.next=t,n.lastEffect=r)),r}function rd(){return gr().memoizedState}function Xt(r,n,s,t){var i=Pr();Te.flags|=r,i.memoizedState=Xs(1|n,s,void 0,t===void 0?null:t)}function Zt(r,n,s,t){var i=gr();t=t===void 0?null:t;var o=void 0;if(Pe!==null){var d=Pe.memoizedState;if(o=d.destroy,t!==null&&Xi(t,d.deps)){i.memoizedState=Xs(n,s,o,t);return}}Te.flags|=r,i.memoizedState=Xs(1|n,s,o,t)}function nd(r,n){return Xt(8390656,8,r,n)}function so(r,n){return Zt(2048,8,r,n)}function sd(r,n){return Zt(4,2,r,n)}function td(r,n){return Zt(4,4,r,n)}function ad(r,n){if(typeof n=="function")return r=r(),n(r),function(){n(null)};if(n!=null)return r=r(),n.current=r,function(){n.current=null}}function id(r,n,s){return s=s!=null?s.concat([r]):null,Zt(4,4,ad.bind(null,n,r),s)}function to(){}function od(r,n){var s=gr();n=n===void 0?null:n;var t=s.memoizedState;return t!==null&&n!==null&&Xi(n,t[1])?t[0]:(s.memoizedState=[r,n],r)}function ld(r,n){var s=gr();n=n===void 0?null:n;var t=s.memoizedState;return t!==null&&n!==null&&Xi(n,t[1])?t[0]:(r=r(),s.memoizedState=[r,n],r)}function cd(r,n,s){return(Sn&21)===0?(r.baseState&&(r.baseState=!1,er=!0),r.memoizedState=s):(Sr(s,n)||(s=Dl(),Te.lanes|=s,Tn|=s,r.baseState=!0),n)}function Ox(r,n){var s=fe;fe=s!==0&&4>s?s:4,r(!0);var t=Ji.transition;Ji.transition={};try{r(!1),n()}finally{fe=s,Ji.transition=t}}function dd(){return gr().memoizedState}function Px(r,n,s){var t=pn(r);if(s={lane:t,action:s,hasEagerState:!1,eagerState:null,next:null},pd(r))ud(n,s);else if(s=Wc(r,n,s,t),s!==null){var i=Je();Rr(s,r,t,i),xd(s,n,t)}}function _x(r,n,s){var t=pn(r),i={lane:t,action:s,hasEagerState:!1,eagerState:null,next:null};if(pd(r))ud(n,i);else{var o=r.alternate;if(r.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var d=n.lastRenderedState,u=o(d,s);if(i.hasEagerState=!0,i.eagerState=u,Sr(u,d)){var x=n.interleaved;x===null?(i.next=i,Gi(n)):(i.next=x.next,x.next=i),n.interleaved=i;return}}catch{}finally{}s=Wc(r,n,i,t),s!==null&&(i=Je(),Rr(s,r,t,i),xd(s,n,t))}}function pd(r){var n=r.alternate;return r===Te||n!==null&&n===Te}function ud(r,n){Ys=Jt=!0;var s=r.pending;s===null?n.next=n:(n.next=s.next,s.next=n),r.pending=n}function xd(r,n,s){if((s&4194240)!==0){var t=n.lanes;t&=r.pendingLanes,s|=t,n.lanes=s,ii(r,s)}}var ea={readContext:fr,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},Bx={readContext:fr,useCallback:function(r,n){return Pr().memoizedState=[r,n===void 0?null:n],r},useContext:fr,useEffect:nd,useImperativeHandle:function(r,n,s){return s=s!=null?s.concat([r]):null,Xt(4194308,4,ad.bind(null,n,r),s)},useLayoutEffect:function(r,n){return Xt(4194308,4,r,n)},useInsertionEffect:function(r,n){return Xt(4,2,r,n)},useMemo:function(r,n){var s=Pr();return n=n===void 0?null:n,r=r(),s.memoizedState=[r,n],r},useReducer:function(r,n,s){var t=Pr();return n=s!==void 0?s(n):n,t.memoizedState=t.baseState=n,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:n},t.queue=r,r=r.dispatch=Px.bind(null,Te,r),[t.memoizedState,r]},useRef:function(r){var n=Pr();return r={current:r},n.memoizedState=r},useState:ed,useDebugValue:to,useDeferredValue:function(r){return Pr().memoizedState=r},useTransition:function(){var r=ed(!1),n=r[0];return r=Ox.bind(null,r[1]),Pr().memoizedState=r,[n,r]},useMutableSource:function(){},useSyncExternalStore:function(r,n,s){var t=Te,i=Pr();if(ke){if(s===void 0)throw Error(l(407));s=s()}else{if(s=n(),Ae===null)throw Error(l(349));(Sn&30)!==0||Yc(t,n,s)}i.memoizedState=s;var o={value:s,getSnapshot:n};return i.queue=o,nd(Jc.bind(null,t,o,r),[r]),t.flags|=2048,Xs(9,Kc.bind(null,t,o,s,n),void 0,null),s},useId:function(){var r=Pr(),n=Ae.identifierPrefix;if(ke){var s=Hr,t=Wr;s=(t&~(1<<32-kr(t)-1)).toString(32)+s,n=":"+n+"R"+s,s=Ks++,0<s&&(n+="H"+s.toString(32)),n+=":"}else s=Ex++,n=":"+n+"r"+s.toString(32)+":";return r.memoizedState=n},unstable_isNewReconciler:!1},Ax={readContext:fr,useCallback:od,useContext:fr,useEffect:so,useImperativeHandle:id,useInsertionEffect:sd,useLayoutEffect:td,useMemo:ld,useReducer:ro,useRef:rd,useState:function(){return ro(Js)},useDebugValue:to,useDeferredValue:function(r){var n=gr();return cd(n,Pe.memoizedState,r)},useTransition:function(){var r=ro(Js)[0],n=gr().memoizedState;return[r,n]},useMutableSource:qc,useSyncExternalStore:Qc,useId:dd,unstable_isNewReconciler:!1},Dx={readContext:fr,useCallback:od,useContext:fr,useEffect:so,useImperativeHandle:id,useInsertionEffect:sd,useLayoutEffect:td,useMemo:ld,useReducer:no,useRef:rd,useState:function(){return no(Js)},useDebugValue:to,useDeferredValue:function(r){var n=gr();return Pe===null?n.memoizedState=r:cd(n,Pe.memoizedState,r)},useTransition:function(){var r=no(Js)[0],n=gr().memoizedState;return[r,n]},useMutableSource:qc,useSyncExternalStore:Qc,useId:dd,unstable_isNewReconciler:!1};function Cr(r,n){if(r&&r.defaultProps){n=L({},n),r=r.defaultProps;for(var s in r)n[s]===void 0&&(n[s]=r[s]);return n}return n}function ao(r,n,s,t){n=r.memoizedState,s=s(t,n),s=s==null?n:L({},n,s),r.memoizedState=s,r.lanes===0&&(r.updateQueue.baseState=s)}var ra={isMounted:function(r){return(r=r._reactInternals)?vn(r)===r:!1},enqueueSetState:function(r,n,s){r=r._reactInternals;var t=Je(),i=pn(r),o=Gr(t,i);o.payload=n,s!=null&&(o.callback=s),n=on(r,o,i),n!==null&&(Rr(n,r,i,t),qt(n,r,i))},enqueueReplaceState:function(r,n,s){r=r._reactInternals;var t=Je(),i=pn(r),o=Gr(t,i);o.tag=1,o.payload=n,s!=null&&(o.callback=s),n=on(r,o,i),n!==null&&(Rr(n,r,i,t),qt(n,r,i))},enqueueForceUpdate:function(r,n){r=r._reactInternals;var s=Je(),t=pn(r),i=Gr(s,t);i.tag=2,n!=null&&(i.callback=n),n=on(r,i,t),n!==null&&(Rr(n,r,t,s),qt(n,r,t))}};function md(r,n,s,t,i,o,d){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(t,o,d):n.prototype&&n.prototype.isPureReactComponent?!As(s,t)||!As(i,o):!0}function hd(r,n,s){var t=!1,i=sn,o=n.contextType;return typeof o=="object"&&o!==null?o=fr(o):(i=Ze(n)?yn:Ge.current,t=n.contextTypes,o=(t=t!=null)?Qn(r,i):sn),n=new n(s,o),r.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ra,r.stateNode=n,n._reactInternals=r,t&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=i,r.__reactInternalMemoizedMaskedChildContext=o),n}function fd(r,n,s,t){r=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,t),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,t),n.state!==r&&ra.enqueueReplaceState(n,n.state,null)}function io(r,n,s,t){var i=r.stateNode;i.props=s,i.state=r.memoizedState,i.refs={},Vi(r);var o=n.contextType;typeof o=="object"&&o!==null?i.context=fr(o):(o=Ze(n)?yn:Ge.current,i.context=Qn(r,o)),i.state=r.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(ao(r,n,o,s),i.state=r.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&ra.enqueueReplaceState(i,i.state,null),Qt(r,s,i,t),i.state=r.memoizedState),typeof i.componentDidMount=="function"&&(r.flags|=4194308)}function ns(r,n){try{var s="",t=n;do s+=se(t),t=t.return;while(t);var i=s}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:r,source:n,stack:i,digest:null}}function oo(r,n,s){return{value:r,source:null,stack:s!=null?s:null,digest:n!=null?n:null}}function lo(r,n){try{console.error(n.value)}catch(s){setTimeout(function(){throw s})}}var Fx=typeof WeakMap=="function"?WeakMap:Map;function gd(r,n,s){s=Gr(-1,s),s.tag=3,s.payload={element:null};var t=n.value;return s.callback=function(){la||(la=!0,ko=t),lo(r,n)},s}function vd(r,n,s){s=Gr(-1,s),s.tag=3;var t=r.type.getDerivedStateFromError;if(typeof t=="function"){var i=n.value;s.payload=function(){return t(i)},s.callback=function(){lo(r,n)}}var o=r.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(s.callback=function(){lo(r,n),typeof t!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var d=n.stack;this.componentDidCatch(n.value,{componentStack:d!==null?d:""})}),s}function jd(r,n,s){var t=r.pingCache;if(t===null){t=r.pingCache=new Fx;var i=new Set;t.set(n,i)}else i=t.get(n),i===void 0&&(i=new Set,t.set(n,i));i.has(s)||(i.add(s),r=em.bind(null,r,n,s),n.then(r,r))}function yd(r){do{var n;if((n=r.tag===13)&&(n=r.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return r;r=r.return}while(r!==null);return null}function bd(r,n,s,t,i){return(r.mode&1)===0?(r===n?r.flags|=65536:(r.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(n=Gr(-1,1),n.tag=2,on(s,n,1))),s.lanes|=1),r):(r.flags|=65536,r.lanes=i,r)}var Ux=ee.ReactCurrentOwner,er=!1;function Ke(r,n,s,t){n.child=r===null?Uc(n,null,s,t):Xn(n,r.child,s,t)}function wd(r,n,s,t,i){s=s.render;var o=n.ref;return es(n,i),t=Zi(r,n,s,t,o,i),s=eo(),r!==null&&!er?(n.updateQueue=r.updateQueue,n.flags&=-2053,r.lanes&=~i,Vr(r,n,i)):(ke&&s&&_i(n),n.flags|=1,Ke(r,n,t,i),n.child)}function Nd(r,n,s,t,i){if(r===null){var o=s.type;return typeof o=="function"&&!Lo(o)&&o.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(n.tag=15,n.type=o,kd(r,n,o,t,i)):(r=ma(s.type,null,t,n,n.mode,i),r.ref=n.ref,r.return=n,n.child=r)}if(o=r.child,(r.lanes&i)===0){var d=o.memoizedProps;if(s=s.compare,s=s!==null?s:As,s(d,t)&&r.ref===n.ref)return Vr(r,n,i)}return n.flags|=1,r=xn(o,t),r.ref=n.ref,r.return=n,n.child=r}function kd(r,n,s,t,i){if(r!==null){var o=r.memoizedProps;if(As(o,t)&&r.ref===n.ref)if(er=!1,n.pendingProps=t=o,(r.lanes&i)!==0)(r.flags&131072)!==0&&(er=!0);else return n.lanes=r.lanes,Vr(r,n,i)}return co(r,n,s,t,i)}function Sd(r,n,s){var t=n.pendingProps,i=t.children,o=r!==null?r.memoizedState:null;if(t.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(ts,dr),dr|=s;else{if((s&1073741824)===0)return r=o!==null?o.baseLanes|s:s,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:r,cachePool:null,transitions:null},n.updateQueue=null,je(ts,dr),dr|=r,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=o!==null?o.baseLanes:s,je(ts,dr),dr|=t}else o!==null?(t=o.baseLanes|s,n.memoizedState=null):t=s,je(ts,dr),dr|=t;return Ke(r,n,i,s),n.child}function Td(r,n){var s=n.ref;(r===null&&s!==null||r!==null&&r.ref!==s)&&(n.flags|=512,n.flags|=2097152)}function co(r,n,s,t,i){var o=Ze(s)?yn:Ge.current;return o=Qn(n,o),es(n,i),s=Zi(r,n,s,t,o,i),t=eo(),r!==null&&!er?(n.updateQueue=r.updateQueue,n.flags&=-2053,r.lanes&=~i,Vr(r,n,i)):(ke&&t&&_i(n),n.flags|=1,Ke(r,n,s,i),n.child)}function Cd(r,n,s,t,i){if(Ze(s)){var o=!0;Dt(n)}else o=!1;if(es(n,i),n.stateNode===null)sa(r,n),hd(n,s,t),io(n,s,t,i),t=!0;else if(r===null){var d=n.stateNode,u=n.memoizedProps;d.props=u;var x=d.context,w=s.contextType;typeof w=="object"&&w!==null?w=fr(w):(w=Ze(s)?yn:Ge.current,w=Qn(n,w));var C=s.getDerivedStateFromProps,M=typeof C=="function"||typeof d.getSnapshotBeforeUpdate=="function";M||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(u!==t||x!==w)&&fd(n,d,t,w),an=!1;var T=n.memoizedState;d.state=T,Qt(n,t,d,i),x=n.memoizedState,u!==t||T!==x||Xe.current||an?(typeof C=="function"&&(ao(n,s,C,t),x=n.memoizedState),(u=an||md(n,s,u,t,T,x,w))?(M||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=t,n.memoizedState=x),d.props=t,d.state=x,d.context=w,t=u):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),t=!1)}else{d=n.stateNode,Hc(r,n),u=n.memoizedProps,w=n.type===n.elementType?u:Cr(n.type,u),d.props=w,M=n.pendingProps,T=d.context,x=s.contextType,typeof x=="object"&&x!==null?x=fr(x):(x=Ze(s)?yn:Ge.current,x=Qn(n,x));var z=s.getDerivedStateFromProps;(C=typeof z=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(u!==M||T!==x)&&fd(n,d,t,x),an=!1,T=n.memoizedState,d.state=T,Qt(n,t,d,i);var O=n.memoizedState;u!==M||T!==O||Xe.current||an?(typeof z=="function"&&(ao(n,s,z,t),O=n.memoizedState),(w=an||md(n,s,w,t,T,O,x)||!1)?(C||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(t,O,x),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(t,O,x)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||u===r.memoizedProps&&T===r.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||u===r.memoizedProps&&T===r.memoizedState||(n.flags|=1024),n.memoizedProps=t,n.memoizedState=O),d.props=t,d.state=O,d.context=x,t=w):(typeof d.componentDidUpdate!="function"||u===r.memoizedProps&&T===r.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||u===r.memoizedProps&&T===r.memoizedState||(n.flags|=1024),t=!1)}return po(r,n,s,t,o,i)}function po(r,n,s,t,i,o){Td(r,n);var d=(n.flags&128)!==0;if(!t&&!d)return i&&zc(n,s,!1),Vr(r,n,o);t=n.stateNode,Ux.current=n;var u=d&&typeof s.getDerivedStateFromError!="function"?null:t.render();return n.flags|=1,r!==null&&d?(n.child=Xn(n,r.child,null,o),n.child=Xn(n,null,u,o)):Ke(r,n,u,o),n.memoizedState=t.state,i&&zc(n,s,!0),n.child}function Md(r){var n=r.stateNode;n.pendingContext?Rc(r,n.pendingContext,n.pendingContext!==n.context):n.context&&Rc(r,n.context,!1),qi(r,n.containerInfo)}function Id(r,n,s,t,i){return Jn(),Fi(i),n.flags|=256,Ke(r,n,s,t),n.child}var uo={dehydrated:null,treeContext:null,retryLane:0};function xo(r){return{baseLanes:r,cachePool:null,transitions:null}}function Rd(r,n,s){var t=n.pendingProps,i=Se.current,o=!1,d=(n.flags&128)!==0,u;if((u=d)||(u=r!==null&&r.memoizedState===null?!1:(i&2)!==0),u?(o=!0,n.flags&=-129):(r===null||r.memoizedState!==null)&&(i|=1),je(Se,i&1),r===null)return Di(n),r=n.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((n.mode&1)===0?n.lanes=1:r.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(d=t.children,r=t.fallback,o?(t=n.mode,o=n.child,d={mode:"hidden",children:d},(t&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=d):o=ha(d,t,0,null),r=Rn(r,t,s,null),o.return=n,r.return=n,o.sibling=r,n.child=o,n.child.memoizedState=xo(s),n.memoizedState=uo,r):mo(n,d));if(i=r.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return Wx(r,n,d,t,u,i,s);if(o){o=t.fallback,d=n.mode,i=r.child,u=i.sibling;var x={mode:"hidden",children:t.children};return(d&1)===0&&n.child!==i?(t=n.child,t.childLanes=0,t.pendingProps=x,n.deletions=null):(t=xn(i,x),t.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=xn(u,o):(o=Rn(o,d,s,null),o.flags|=2),o.return=n,t.return=n,t.sibling=o,n.child=t,t=o,o=n.child,d=r.child.memoizedState,d=d===null?xo(s):{baseLanes:d.baseLanes|s,cachePool:null,transitions:d.transitions},o.memoizedState=d,o.childLanes=r.childLanes&~s,n.memoizedState=uo,t}return o=r.child,r=o.sibling,t=xn(o,{mode:"visible",children:t.children}),(n.mode&1)===0&&(t.lanes=s),t.return=n,t.sibling=null,r!==null&&(s=n.deletions,s===null?(n.deletions=[r],n.flags|=16):s.push(r)),n.child=t,n.memoizedState=null,t}function mo(r,n){return n=ha({mode:"visible",children:n},r.mode,0,null),n.return=r,r.child=n}function na(r,n,s,t){return t!==null&&Fi(t),Xn(n,r.child,null,s),r=mo(n,n.pendingProps.children),r.flags|=2,n.memoizedState=null,r}function Wx(r,n,s,t,i,o,d){if(s)return n.flags&256?(n.flags&=-257,t=oo(Error(l(422))),na(r,n,d,t)):n.memoizedState!==null?(n.child=r.child,n.flags|=128,null):(o=t.fallback,i=n.mode,t=ha({mode:"visible",children:t.children},i,0,null),o=Rn(o,i,d,null),o.flags|=2,t.return=n,o.return=n,t.sibling=o,n.child=t,(n.mode&1)!==0&&Xn(n,r.child,null,d),n.child.memoizedState=xo(d),n.memoizedState=uo,o);if((n.mode&1)===0)return na(r,n,d,null);if(i.data==="$!"){if(t=i.nextSibling&&i.nextSibling.dataset,t)var u=t.dgst;return t=u,o=Error(l(419)),t=oo(o,t,void 0),na(r,n,d,t)}if(u=(d&r.childLanes)!==0,er||u){if(t=Ae,t!==null){switch(d&-d){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(t.suspendedLanes|d))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,$r(r,i),Rr(t,r,i,-1))}return Ro(),t=oo(Error(l(421))),na(r,n,d,t)}return i.data==="$?"?(n.flags|=128,n.child=r.child,n=rm.bind(null,r),i._reactRetry=n,null):(r=o.treeContext,cr=rn(i.nextSibling),lr=n,ke=!0,Tr=null,r!==null&&(mr[hr++]=Wr,mr[hr++]=Hr,mr[hr++]=bn,Wr=r.id,Hr=r.overflow,bn=n),n=mo(n,t.children),n.flags|=4096,n)}function Ld(r,n,s){r.lanes|=n;var t=r.alternate;t!==null&&(t.lanes|=n),$i(r.return,n,s)}function ho(r,n,s,t,i){var o=r.memoizedState;o===null?r.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:t,tail:s,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=t,o.tail=s,o.tailMode=i)}function zd(r,n,s){var t=n.pendingProps,i=t.revealOrder,o=t.tail;if(Ke(r,n,t.children,s),t=Se.current,(t&2)!==0)t=t&1|2,n.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=n.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Ld(r,s,n);else if(r.tag===19)Ld(r,s,n);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t&=1}if(je(Se,t),(n.mode&1)===0)n.memoizedState=null;else switch(i){case"forwards":for(s=n.child,i=null;s!==null;)r=s.alternate,r!==null&&Yt(r)===null&&(i=s),s=s.sibling;s=i,s===null?(i=n.child,n.child=null):(i=s.sibling,s.sibling=null),ho(n,!1,i,s,o);break;case"backwards":for(s=null,i=n.child,n.child=null;i!==null;){if(r=i.alternate,r!==null&&Yt(r)===null){n.child=i;break}r=i.sibling,i.sibling=s,s=i,i=r}ho(n,!0,s,null,o);break;case"together":ho(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function sa(r,n){(n.mode&1)===0&&r!==null&&(r.alternate=null,n.alternate=null,n.flags|=2)}function Vr(r,n,s){if(r!==null&&(n.dependencies=r.dependencies),Tn|=n.lanes,(s&n.childLanes)===0)return null;if(r!==null&&n.child!==r.child)throw Error(l(153));if(n.child!==null){for(r=n.child,s=xn(r,r.pendingProps),n.child=s,s.return=n;r.sibling!==null;)r=r.sibling,s=s.sibling=xn(r,r.pendingProps),s.return=n;s.sibling=null}return n.child}function Hx(r,n,s){switch(n.tag){case 3:Md(n),Jn();break;case 5:Vc(n);break;case 1:Ze(n.type)&&Dt(n);break;case 4:qi(n,n.stateNode.containerInfo);break;case 10:var t=n.type._context,i=n.memoizedProps.value;je(Gt,t._currentValue),t._currentValue=i;break;case 13:if(t=n.memoizedState,t!==null)return t.dehydrated!==null?(je(Se,Se.current&1),n.flags|=128,null):(s&n.child.childLanes)!==0?Rd(r,n,s):(je(Se,Se.current&1),r=Vr(r,n,s),r!==null?r.sibling:null);je(Se,Se.current&1);break;case 19:if(t=(s&n.childLanes)!==0,(r.flags&128)!==0){if(t)return zd(r,n,s);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),je(Se,Se.current),t)break;return null;case 22:case 23:return n.lanes=0,Sd(r,n,s)}return Vr(r,n,s)}var Ed,fo,Od,Pd;Ed=function(r,n){for(var s=n.child;s!==null;){if(s.tag===5||s.tag===6)r.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},fo=function(){},Od=function(r,n,s,t){var i=r.memoizedProps;if(i!==t){r=n.stateNode,kn(Or.current);var o=null;switch(s){case"input":i=$a(r,i),t=$a(r,t),o=[];break;case"select":i=L({},i,{value:void 0}),t=L({},t,{value:void 0}),o=[];break;case"textarea":i=qa(r,i),t=qa(r,t),o=[];break;default:typeof i.onClick!="function"&&typeof t.onClick=="function"&&(r.onclick=_t)}Ya(s,t);var d;s=null;for(w in i)if(!t.hasOwnProperty(w)&&i.hasOwnProperty(w)&&i[w]!=null)if(w==="style"){var u=i[w];for(d in u)u.hasOwnProperty(d)&&(s||(s={}),s[d]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(m.hasOwnProperty(w)?o||(o=[]):(o=o||[]).push(w,null));for(w in t){var x=t[w];if(u=i!=null?i[w]:void 0,t.hasOwnProperty(w)&&x!==u&&(x!=null||u!=null))if(w==="style")if(u){for(d in u)!u.hasOwnProperty(d)||x&&x.hasOwnProperty(d)||(s||(s={}),s[d]="");for(d in x)x.hasOwnProperty(d)&&u[d]!==x[d]&&(s||(s={}),s[d]=x[d])}else s||(o||(o=[]),o.push(w,s)),s=x;else w==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,u=u?u.__html:void 0,x!=null&&u!==x&&(o=o||[]).push(w,x)):w==="children"?typeof x!="string"&&typeof x!="number"||(o=o||[]).push(w,""+x):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(m.hasOwnProperty(w)?(x!=null&&w==="onScroll"&&ye("scroll",r),o||u===x||(o=[])):(o=o||[]).push(w,x))}s&&(o=o||[]).push("style",s);var w=o;(n.updateQueue=w)&&(n.flags|=4)}},Pd=function(r,n,s,t){s!==t&&(n.flags|=4)};function Zs(r,n){if(!ke)switch(r.tailMode){case"hidden":n=r.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?r.tail=null:s.sibling=null;break;case"collapsed":s=r.tail;for(var t=null;s!==null;)s.alternate!==null&&(t=s),s=s.sibling;t===null?n||r.tail===null?r.tail=null:r.tail.sibling=null:t.sibling=null}}function qe(r){var n=r.alternate!==null&&r.alternate.child===r.child,s=0,t=0;if(n)for(var i=r.child;i!==null;)s|=i.lanes|i.childLanes,t|=i.subtreeFlags&14680064,t|=i.flags&14680064,i.return=r,i=i.sibling;else for(i=r.child;i!==null;)s|=i.lanes|i.childLanes,t|=i.subtreeFlags,t|=i.flags,i.return=r,i=i.sibling;return r.subtreeFlags|=t,r.childLanes=s,n}function $x(r,n,s){var t=n.pendingProps;switch(Bi(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return Ze(n.type)&&At(),qe(n),null;case 3:return t=n.stateNode,rs(),be(Xe),be(Ge),Ki(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(r===null||r.child===null)&&(Ht(n)?n.flags|=4:r===null||r.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tr!==null&&(Co(Tr),Tr=null))),fo(r,n),qe(n),null;case 5:Qi(n);var i=kn(Qs.current);if(s=n.type,r!==null&&n.stateNode!=null)Od(r,n,s,t,i),r.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!t){if(n.stateNode===null)throw Error(l(166));return qe(n),null}if(r=kn(Or.current),Ht(n)){t=n.stateNode,s=n.type;var o=n.memoizedProps;switch(t[Er]=n,t[Hs]=o,r=(n.mode&1)!==0,s){case"dialog":ye("cancel",t),ye("close",t);break;case"iframe":case"object":case"embed":ye("load",t);break;case"video":case"audio":for(i=0;i<Fs.length;i++)ye(Fs[i],t);break;case"source":ye("error",t);break;case"img":case"image":case"link":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"input":hl(t,o),ye("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!o.multiple},ye("invalid",t);break;case"textarea":vl(t,o),ye("invalid",t)}Ya(s,o),i=null;for(var d in o)if(o.hasOwnProperty(d)){var u=o[d];d==="children"?typeof u=="string"?t.textContent!==u&&(o.suppressHydrationWarning!==!0&&Pt(t.textContent,u,r),i=["children",u]):typeof u=="number"&&t.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&Pt(t.textContent,u,r),i=["children",""+u]):m.hasOwnProperty(d)&&u!=null&&d==="onScroll"&&ye("scroll",t)}switch(s){case"input":Dr(t),gl(t,o,!0);break;case"textarea":Dr(t),yl(t);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(t.onclick=_t)}t=i,n.updateQueue=t,t!==null&&(n.flags|=4)}else{d=i.nodeType===9?i:i.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=bl(s)),r==="http://www.w3.org/1999/xhtml"?s==="script"?(r=d.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof t.is=="string"?r=d.createElement(s,{is:t.is}):(r=d.createElement(s),s==="select"&&(d=r,t.multiple?d.multiple=!0:t.size&&(d.size=t.size))):r=d.createElementNS(r,s),r[Er]=n,r[Hs]=t,Ed(r,n,!1,!1),n.stateNode=r;e:{switch(d=Ka(s,t),s){case"dialog":ye("cancel",r),ye("close",r),i=t;break;case"iframe":case"object":case"embed":ye("load",r),i=t;break;case"video":case"audio":for(i=0;i<Fs.length;i++)ye(Fs[i],r);i=t;break;case"source":ye("error",r),i=t;break;case"img":case"image":case"link":ye("error",r),ye("load",r),i=t;break;case"details":ye("toggle",r),i=t;break;case"input":hl(r,t),i=$a(r,t),ye("invalid",r);break;case"option":i=t;break;case"select":r._wrapperState={wasMultiple:!!t.multiple},i=L({},t,{value:void 0}),ye("invalid",r);break;case"textarea":vl(r,t),i=qa(r,t),ye("invalid",r);break;default:i=t}Ya(s,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var x=u[o];o==="style"?kl(r,x):o==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&wl(r,x)):o==="children"?typeof x=="string"?(s!=="textarea"||x!=="")&&bs(r,x):typeof x=="number"&&bs(r,""+x):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(m.hasOwnProperty(o)?x!=null&&o==="onScroll"&&ye("scroll",r):x!=null&&ie(r,o,x,d))}switch(s){case"input":Dr(r),gl(r,t,!1);break;case"textarea":Dr(r),yl(r);break;case"option":t.value!=null&&r.setAttribute("value",""+oe(t.value));break;case"select":r.multiple=!!t.multiple,o=t.value,o!=null?_n(r,!!t.multiple,o,!1):t.defaultValue!=null&&_n(r,!!t.multiple,t.defaultValue,!0);break;default:typeof i.onClick=="function"&&(r.onclick=_t)}switch(s){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return qe(n),null;case 6:if(r&&n.stateNode!=null)Pd(r,n,r.memoizedProps,t);else{if(typeof t!="string"&&n.stateNode===null)throw Error(l(166));if(s=kn(Qs.current),kn(Or.current),Ht(n)){if(t=n.stateNode,s=n.memoizedProps,t[Er]=n,(o=t.nodeValue!==s)&&(r=lr,r!==null))switch(r.tag){case 3:Pt(t.nodeValue,s,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Pt(t.nodeValue,s,(r.mode&1)!==0)}o&&(n.flags|=4)}else t=(s.nodeType===9?s:s.ownerDocument).createTextNode(t),t[Er]=n,n.stateNode=t}return qe(n),null;case 13:if(be(Se),t=n.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(ke&&cr!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Ac(),Jn(),n.flags|=98560,o=!1;else if(o=Ht(n),t!==null&&t.dehydrated!==null){if(r===null){if(!o)throw Error(l(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));o[Er]=n}else Jn(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),o=!1}else Tr!==null&&(Co(Tr),Tr=null),o=!0;if(!o)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=s,n):(t=t!==null,t!==(r!==null&&r.memoizedState!==null)&&t&&(n.child.flags|=8192,(n.mode&1)!==0&&(r===null||(Se.current&1)!==0?_e===0&&(_e=3):Ro())),n.updateQueue!==null&&(n.flags|=4),qe(n),null);case 4:return rs(),fo(r,n),r===null&&Us(n.stateNode.containerInfo),qe(n),null;case 10:return Hi(n.type._context),qe(n),null;case 17:return Ze(n.type)&&At(),qe(n),null;case 19:if(be(Se),o=n.memoizedState,o===null)return qe(n),null;if(t=(n.flags&128)!==0,d=o.rendering,d===null)if(t)Zs(o,!1);else{if(_e!==0||r!==null&&(r.flags&128)!==0)for(r=n.child;r!==null;){if(d=Yt(r),d!==null){for(n.flags|=128,Zs(o,!1),t=d.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),n.subtreeFlags=0,t=s,s=n.child;s!==null;)o=s,r=t,o.flags&=14680066,d=o.alternate,d===null?(o.childLanes=0,o.lanes=r,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=d.childLanes,o.lanes=d.lanes,o.child=d.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=d.memoizedProps,o.memoizedState=d.memoizedState,o.updateQueue=d.updateQueue,o.type=d.type,r=d.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),s=s.sibling;return je(Se,Se.current&1|2),n.child}r=r.sibling}o.tail!==null&&Re()>as&&(n.flags|=128,t=!0,Zs(o,!1),n.lanes=4194304)}else{if(!t)if(r=Yt(d),r!==null){if(n.flags|=128,t=!0,s=r.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),Zs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!ke)return qe(n),null}else 2*Re()-o.renderingStartTime>as&&s!==1073741824&&(n.flags|=128,t=!0,Zs(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(s=o.last,s!==null?s.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Re(),n.sibling=null,s=Se.current,je(Se,t?s&1|2:s&1),n):(qe(n),null);case 22:case 23:return Io(),t=n.memoizedState!==null,r!==null&&r.memoizedState!==null!==t&&(n.flags|=8192),t&&(n.mode&1)!==0?(dr&1073741824)!==0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),null;case 24:return null;case 25:return null}throw Error(l(156,n.tag))}function Gx(r,n){switch(Bi(n),n.tag){case 1:return Ze(n.type)&&At(),r=n.flags,r&65536?(n.flags=r&-65537|128,n):null;case 3:return rs(),be(Xe),be(Ge),Ki(),r=n.flags,(r&65536)!==0&&(r&128)===0?(n.flags=r&-65537|128,n):null;case 5:return Qi(n),null;case 13:if(be(Se),r=n.memoizedState,r!==null&&r.dehydrated!==null){if(n.alternate===null)throw Error(l(340));Jn()}return r=n.flags,r&65536?(n.flags=r&-65537|128,n):null;case 19:return be(Se),null;case 4:return rs(),null;case 10:return Hi(n.type._context),null;case 22:case 23:return Io(),null;case 24:return null;default:return null}}var ta=!1,Qe=!1,Vx=typeof WeakSet=="function"?WeakSet:Set,E=null;function ss(r,n){var s=r.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(t){Me(r,n,t)}else s.current=null}function go(r,n,s){try{s()}catch(t){Me(r,n,t)}}var _d=!1;function qx(r,n){if(Mi=kt,r=mc(),yi(r)){if("selectionStart"in r)var s={start:r.selectionStart,end:r.selectionEnd};else e:{s=(s=r.ownerDocument)&&s.defaultView||window;var t=s.getSelection&&s.getSelection();if(t&&t.rangeCount!==0){s=t.anchorNode;var i=t.anchorOffset,o=t.focusNode;t=t.focusOffset;try{s.nodeType,o.nodeType}catch{s=null;break e}var d=0,u=-1,x=-1,w=0,C=0,M=r,T=null;r:for(;;){for(var z;M!==s||i!==0&&M.nodeType!==3||(u=d+i),M!==o||t!==0&&M.nodeType!==3||(x=d+t),M.nodeType===3&&(d+=M.nodeValue.length),(z=M.firstChild)!==null;)T=M,M=z;for(;;){if(M===r)break r;if(T===s&&++w===i&&(u=d),T===o&&++C===t&&(x=d),(z=M.nextSibling)!==null)break;M=T,T=M.parentNode}M=z}s=u===-1||x===-1?null:{start:u,end:x}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ii={focusedElem:r,selectionRange:s},kt=!1,E=n;E!==null;)if(n=E,r=n.child,(n.subtreeFlags&1028)!==0&&r!==null)r.return=n,E=r;else for(;E!==null;){n=E;try{var O=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(O!==null){var P=O.memoizedProps,Le=O.memoizedState,j=n.stateNode,f=j.getSnapshotBeforeUpdate(n.elementType===n.type?P:Cr(n.type,P),Le);j.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(I){Me(n,n.return,I)}if(r=n.sibling,r!==null){r.return=n.return,E=r;break}E=n.return}return O=_d,_d=!1,O}function et(r,n,s){var t=n.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&r)===r){var o=i.destroy;i.destroy=void 0,o!==void 0&&go(n,s,o)}i=i.next}while(i!==t)}}function aa(r,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&r)===r){var t=s.create;s.destroy=t()}s=s.next}while(s!==n)}}function vo(r){var n=r.ref;if(n!==null){var s=r.stateNode;switch(r.tag){case 5:r=s;break;default:r=s}typeof n=="function"?n(r):n.current=r}}function Bd(r){var n=r.alternate;n!==null&&(r.alternate=null,Bd(n)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(n=r.stateNode,n!==null&&(delete n[Er],delete n[Hs],delete n[Ei],delete n[Ix],delete n[Rx])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Ad(r){return r.tag===5||r.tag===3||r.tag===4}function Dd(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Ad(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function jo(r,n,s){var t=r.tag;if(t===5||t===6)r=r.stateNode,n?s.nodeType===8?s.parentNode.insertBefore(r,n):s.insertBefore(r,n):(s.nodeType===8?(n=s.parentNode,n.insertBefore(r,s)):(n=s,n.appendChild(r)),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=_t));else if(t!==4&&(r=r.child,r!==null))for(jo(r,n,s),r=r.sibling;r!==null;)jo(r,n,s),r=r.sibling}function yo(r,n,s){var t=r.tag;if(t===5||t===6)r=r.stateNode,n?s.insertBefore(r,n):s.appendChild(r);else if(t!==4&&(r=r.child,r!==null))for(yo(r,n,s),r=r.sibling;r!==null;)yo(r,n,s),r=r.sibling}var We=null,Mr=!1;function ln(r,n,s){for(s=s.child;s!==null;)Fd(r,n,s),s=s.sibling}function Fd(r,n,s){if(zr&&typeof zr.onCommitFiberUnmount=="function")try{zr.onCommitFiberUnmount(vt,s)}catch{}switch(s.tag){case 5:Qe||ss(s,n);case 6:var t=We,i=Mr;We=null,ln(r,n,s),We=t,Mr=i,We!==null&&(Mr?(r=We,s=s.stateNode,r.nodeType===8?r.parentNode.removeChild(s):r.removeChild(s)):We.removeChild(s.stateNode));break;case 18:We!==null&&(Mr?(r=We,s=s.stateNode,r.nodeType===8?zi(r.parentNode,s):r.nodeType===1&&zi(r,s),zs(r)):zi(We,s.stateNode));break;case 4:t=We,i=Mr,We=s.stateNode.containerInfo,Mr=!0,ln(r,n,s),We=t,Mr=i;break;case 0:case 11:case 14:case 15:if(!Qe&&(t=s.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){i=t=t.next;do{var o=i,d=o.destroy;o=o.tag,d!==void 0&&((o&2)!==0||(o&4)!==0)&&go(s,n,d),i=i.next}while(i!==t)}ln(r,n,s);break;case 1:if(!Qe&&(ss(s,n),t=s.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=s.memoizedProps,t.state=s.memoizedState,t.componentWillUnmount()}catch(u){Me(s,n,u)}ln(r,n,s);break;case 21:ln(r,n,s);break;case 22:s.mode&1?(Qe=(t=Qe)||s.memoizedState!==null,ln(r,n,s),Qe=t):ln(r,n,s);break;default:ln(r,n,s)}}function Ud(r){var n=r.updateQueue;if(n!==null){r.updateQueue=null;var s=r.stateNode;s===null&&(s=r.stateNode=new Vx),n.forEach(function(t){var i=nm.bind(null,r,t);s.has(t)||(s.add(t),t.then(i,i))})}}function Ir(r,n){var s=n.deletions;if(s!==null)for(var t=0;t<s.length;t++){var i=s[t];try{var o=r,d=n,u=d;e:for(;u!==null;){switch(u.tag){case 5:We=u.stateNode,Mr=!1;break e;case 3:We=u.stateNode.containerInfo,Mr=!0;break e;case 4:We=u.stateNode.containerInfo,Mr=!0;break e}u=u.return}if(We===null)throw Error(l(160));Fd(o,d,i),We=null,Mr=!1;var x=i.alternate;x!==null&&(x.return=null),i.return=null}catch(w){Me(i,n,w)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Wd(n,r),n=n.sibling}function Wd(r,n){var s=r.alternate,t=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Ir(n,r),_r(r),t&4){try{et(3,r,r.return),aa(3,r)}catch(P){Me(r,r.return,P)}try{et(5,r,r.return)}catch(P){Me(r,r.return,P)}}break;case 1:Ir(n,r),_r(r),t&512&&s!==null&&ss(s,s.return);break;case 5:if(Ir(n,r),_r(r),t&512&&s!==null&&ss(s,s.return),r.flags&32){var i=r.stateNode;try{bs(i,"")}catch(P){Me(r,r.return,P)}}if(t&4&&(i=r.stateNode,i!=null)){var o=r.memoizedProps,d=s!==null?s.memoizedProps:o,u=r.type,x=r.updateQueue;if(r.updateQueue=null,x!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&fl(i,o),Ka(u,d);var w=Ka(u,o);for(d=0;d<x.length;d+=2){var C=x[d],M=x[d+1];C==="style"?kl(i,M):C==="dangerouslySetInnerHTML"?wl(i,M):C==="children"?bs(i,M):ie(i,C,M,w)}switch(u){case"input":Ga(i,o);break;case"textarea":jl(i,o);break;case"select":var T=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var z=o.value;z!=null?_n(i,!!o.multiple,z,!1):T!==!!o.multiple&&(o.defaultValue!=null?_n(i,!!o.multiple,o.defaultValue,!0):_n(i,!!o.multiple,o.multiple?[]:"",!1))}i[Hs]=o}catch(P){Me(r,r.return,P)}}break;case 6:if(Ir(n,r),_r(r),t&4){if(r.stateNode===null)throw Error(l(162));i=r.stateNode,o=r.memoizedProps;try{i.nodeValue=o}catch(P){Me(r,r.return,P)}}break;case 3:if(Ir(n,r),_r(r),t&4&&s!==null&&s.memoizedState.isDehydrated)try{zs(n.containerInfo)}catch(P){Me(r,r.return,P)}break;case 4:Ir(n,r),_r(r);break;case 13:Ir(n,r),_r(r),i=r.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(No=Re())),t&4&&Ud(r);break;case 22:if(C=s!==null&&s.memoizedState!==null,r.mode&1?(Qe=(w=Qe)||C,Ir(n,r),Qe=w):Ir(n,r),_r(r),t&8192){if(w=r.memoizedState!==null,(r.stateNode.isHidden=w)&&!C&&(r.mode&1)!==0)for(E=r,C=r.child;C!==null;){for(M=E=C;E!==null;){switch(T=E,z=T.child,T.tag){case 0:case 11:case 14:case 15:et(4,T,T.return);break;case 1:ss(T,T.return);var O=T.stateNode;if(typeof O.componentWillUnmount=="function"){t=T,s=T.return;try{n=t,O.props=n.memoizedProps,O.state=n.memoizedState,O.componentWillUnmount()}catch(P){Me(t,s,P)}}break;case 5:ss(T,T.return);break;case 22:if(T.memoizedState!==null){Gd(M);continue}}z!==null?(z.return=T,E=z):Gd(M)}C=C.sibling}e:for(C=null,M=r;;){if(M.tag===5){if(C===null){C=M;try{i=M.stateNode,w?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=M.stateNode,x=M.memoizedProps.style,d=x!=null&&x.hasOwnProperty("display")?x.display:null,u.style.display=Nl("display",d))}catch(P){Me(r,r.return,P)}}}else if(M.tag===6){if(C===null)try{M.stateNode.nodeValue=w?"":M.memoizedProps}catch(P){Me(r,r.return,P)}}else if((M.tag!==22&&M.tag!==23||M.memoizedState===null||M===r)&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===r)break e;for(;M.sibling===null;){if(M.return===null||M.return===r)break e;C===M&&(C=null),M=M.return}C===M&&(C=null),M.sibling.return=M.return,M=M.sibling}}break;case 19:Ir(n,r),_r(r),t&4&&Ud(r);break;case 21:break;default:Ir(n,r),_r(r)}}function _r(r){var n=r.flags;if(n&2){try{e:{for(var s=r.return;s!==null;){if(Ad(s)){var t=s;break e}s=s.return}throw Error(l(160))}switch(t.tag){case 5:var i=t.stateNode;t.flags&32&&(bs(i,""),t.flags&=-33);var o=Dd(r);yo(r,o,i);break;case 3:case 4:var d=t.stateNode.containerInfo,u=Dd(r);jo(r,u,d);break;default:throw Error(l(161))}}catch(x){Me(r,r.return,x)}r.flags&=-3}n&4096&&(r.flags&=-4097)}function Qx(r,n,s){E=r,Hd(r)}function Hd(r,n,s){for(var t=(r.mode&1)!==0;E!==null;){var i=E,o=i.child;if(i.tag===22&&t){var d=i.memoizedState!==null||ta;if(!d){var u=i.alternate,x=u!==null&&u.memoizedState!==null||Qe;u=ta;var w=Qe;if(ta=d,(Qe=x)&&!w)for(E=i;E!==null;)d=E,x=d.child,d.tag===22&&d.memoizedState!==null?Vd(i):x!==null?(x.return=d,E=x):Vd(i);for(;o!==null;)E=o,Hd(o),o=o.sibling;E=i,ta=u,Qe=w}$d(r)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,E=o):$d(r)}}function $d(r){for(;E!==null;){var n=E;if((n.flags&8772)!==0){var s=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Qe||aa(5,n);break;case 1:var t=n.stateNode;if(n.flags&4&&!Qe)if(s===null)t.componentDidMount();else{var i=n.elementType===n.type?s.memoizedProps:Cr(n.type,s.memoizedProps);t.componentDidUpdate(i,s.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Gc(n,o,t);break;case 3:var d=n.updateQueue;if(d!==null){if(s=null,n.child!==null)switch(n.child.tag){case 5:s=n.child.stateNode;break;case 1:s=n.child.stateNode}Gc(n,d,s)}break;case 5:var u=n.stateNode;if(s===null&&n.flags&4){s=u;var x=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&s.focus();break;case"img":x.src&&(s.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var w=n.alternate;if(w!==null){var C=w.memoizedState;if(C!==null){var M=C.dehydrated;M!==null&&zs(M)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Qe||n.flags&512&&vo(n)}catch(T){Me(n,n.return,T)}}if(n===r){E=null;break}if(s=n.sibling,s!==null){s.return=n.return,E=s;break}E=n.return}}function Gd(r){for(;E!==null;){var n=E;if(n===r){E=null;break}var s=n.sibling;if(s!==null){s.return=n.return,E=s;break}E=n.return}}function Vd(r){for(;E!==null;){var n=E;try{switch(n.tag){case 0:case 11:case 15:var s=n.return;try{aa(4,n)}catch(x){Me(n,s,x)}break;case 1:var t=n.stateNode;if(typeof t.componentDidMount=="function"){var i=n.return;try{t.componentDidMount()}catch(x){Me(n,i,x)}}var o=n.return;try{vo(n)}catch(x){Me(n,o,x)}break;case 5:var d=n.return;try{vo(n)}catch(x){Me(n,d,x)}}}catch(x){Me(n,n.return,x)}if(n===r){E=null;break}var u=n.sibling;if(u!==null){u.return=n.return,E=u;break}E=n.return}}var Yx=Math.ceil,ia=ee.ReactCurrentDispatcher,bo=ee.ReactCurrentOwner,vr=ee.ReactCurrentBatchConfig,ce=0,Ae=null,ze=null,He=0,dr=0,ts=nn(0),_e=0,rt=null,Tn=0,oa=0,wo=0,nt=null,rr=null,No=0,as=1/0,qr=null,la=!1,ko=null,cn=null,ca=!1,dn=null,da=0,st=0,So=null,pa=-1,ua=0;function Je(){return(ce&6)!==0?Re():pa!==-1?pa:pa=Re()}function pn(r){return(r.mode&1)===0?1:(ce&2)!==0&&He!==0?He&-He:zx.transition!==null?(ua===0&&(ua=Dl()),ua):(r=fe,r!==0||(r=window.event,r=r===void 0?16:Ql(r.type)),r)}function Rr(r,n,s,t){if(50<st)throw st=0,So=null,Error(l(185));Cs(r,s,t),((ce&2)===0||r!==Ae)&&(r===Ae&&((ce&2)===0&&(oa|=s),_e===4&&un(r,He)),nr(r,t),s===1&&ce===0&&(n.mode&1)===0&&(as=Re()+500,Ft&&tn()))}function nr(r,n){var s=r.callbackNode;zu(r,n);var t=bt(r,r===Ae?He:0);if(t===0)s!==null&&_l(s),r.callbackNode=null,r.callbackPriority=0;else if(n=t&-t,r.callbackPriority!==n){if(s!=null&&_l(s),n===1)r.tag===0?Lx(Qd.bind(null,r)):Ec(Qd.bind(null,r)),Cx(function(){(ce&6)===0&&tn()}),s=null;else{switch(Fl(t)){case 1:s=si;break;case 4:s=Bl;break;case 16:s=gt;break;case 536870912:s=Al;break;default:s=gt}s=np(s,qd.bind(null,r))}r.callbackPriority=n,r.callbackNode=s}}function qd(r,n){if(pa=-1,ua=0,(ce&6)!==0)throw Error(l(327));var s=r.callbackNode;if(is()&&r.callbackNode!==s)return null;var t=bt(r,r===Ae?He:0);if(t===0)return null;if((t&30)!==0||(t&r.expiredLanes)!==0||n)n=xa(r,t);else{n=t;var i=ce;ce|=2;var o=Kd();(Ae!==r||He!==n)&&(qr=null,as=Re()+500,Mn(r,n));do try{Xx();break}catch(u){Yd(r,u)}while(!0);Wi(),ia.current=o,ce=i,ze!==null?n=0:(Ae=null,He=0,n=_e)}if(n!==0){if(n===2&&(i=ti(r),i!==0&&(t=i,n=To(r,i))),n===1)throw s=rt,Mn(r,0),un(r,t),nr(r,Re()),s;if(n===6)un(r,t);else{if(i=r.current.alternate,(t&30)===0&&!Kx(i)&&(n=xa(r,t),n===2&&(o=ti(r),o!==0&&(t=o,n=To(r,o))),n===1))throw s=rt,Mn(r,0),un(r,t),nr(r,Re()),s;switch(r.finishedWork=i,r.finishedLanes=t,n){case 0:case 1:throw Error(l(345));case 2:In(r,rr,qr);break;case 3:if(un(r,t),(t&130023424)===t&&(n=No+500-Re(),10<n)){if(bt(r,0)!==0)break;if(i=r.suspendedLanes,(i&t)!==t){Je(),r.pingedLanes|=r.suspendedLanes&i;break}r.timeoutHandle=Li(In.bind(null,r,rr,qr),n);break}In(r,rr,qr);break;case 4:if(un(r,t),(t&4194240)===t)break;for(n=r.eventTimes,i=-1;0<t;){var d=31-kr(t);o=1<<d,d=n[d],d>i&&(i=d),t&=~o}if(t=i,t=Re()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*Yx(t/1960))-t,10<t){r.timeoutHandle=Li(In.bind(null,r,rr,qr),t);break}In(r,rr,qr);break;case 5:In(r,rr,qr);break;default:throw Error(l(329))}}}return nr(r,Re()),r.callbackNode===s?qd.bind(null,r):null}function To(r,n){var s=nt;return r.current.memoizedState.isDehydrated&&(Mn(r,n).flags|=256),r=xa(r,n),r!==2&&(n=rr,rr=s,n!==null&&Co(n)),r}function Co(r){rr===null?rr=r:rr.push.apply(rr,r)}function Kx(r){for(var n=r;;){if(n.flags&16384){var s=n.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var t=0;t<s.length;t++){var i=s[t],o=i.getSnapshot;i=i.value;try{if(!Sr(o(),i))return!1}catch{return!1}}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function un(r,n){for(n&=~wo,n&=~oa,r.suspendedLanes|=n,r.pingedLanes&=~n,r=r.expirationTimes;0<n;){var s=31-kr(n),t=1<<s;r[s]=-1,n&=~t}}function Qd(r){if((ce&6)!==0)throw Error(l(327));is();var n=bt(r,0);if((n&1)===0)return nr(r,Re()),null;var s=xa(r,n);if(r.tag!==0&&s===2){var t=ti(r);t!==0&&(n=t,s=To(r,t))}if(s===1)throw s=rt,Mn(r,0),un(r,n),nr(r,Re()),s;if(s===6)throw Error(l(345));return r.finishedWork=r.current.alternate,r.finishedLanes=n,In(r,rr,qr),nr(r,Re()),null}function Mo(r,n){var s=ce;ce|=1;try{return r(n)}finally{ce=s,ce===0&&(as=Re()+500,Ft&&tn())}}function Cn(r){dn!==null&&dn.tag===0&&(ce&6)===0&&is();var n=ce;ce|=1;var s=vr.transition,t=fe;try{if(vr.transition=null,fe=1,r)return r()}finally{fe=t,vr.transition=s,ce=n,(ce&6)===0&&tn()}}function Io(){dr=ts.current,be(ts)}function Mn(r,n){r.finishedWork=null,r.finishedLanes=0;var s=r.timeoutHandle;if(s!==-1&&(r.timeoutHandle=-1,Tx(s)),ze!==null)for(s=ze.return;s!==null;){var t=s;switch(Bi(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&At();break;case 3:rs(),be(Xe),be(Ge),Ki();break;case 5:Qi(t);break;case 4:rs();break;case 13:be(Se);break;case 19:be(Se);break;case 10:Hi(t.type._context);break;case 22:case 23:Io()}s=s.return}if(Ae=r,ze=r=xn(r.current,null),He=dr=n,_e=0,rt=null,wo=oa=Tn=0,rr=nt=null,Nn!==null){for(n=0;n<Nn.length;n++)if(s=Nn[n],t=s.interleaved,t!==null){s.interleaved=null;var i=t.next,o=s.pending;if(o!==null){var d=o.next;o.next=i,t.next=d}s.pending=t}Nn=null}return r}function Yd(r,n){do{var s=ze;try{if(Wi(),Kt.current=ea,Jt){for(var t=Te.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Jt=!1}if(Sn=0,Be=Pe=Te=null,Ys=!1,Ks=0,bo.current=null,s===null||s.return===null){_e=1,rt=n,ze=null;break}e:{var o=r,d=s.return,u=s,x=n;if(n=He,u.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var w=x,C=u,M=C.tag;if((C.mode&1)===0&&(M===0||M===11||M===15)){var T=C.alternate;T?(C.updateQueue=T.updateQueue,C.memoizedState=T.memoizedState,C.lanes=T.lanes):(C.updateQueue=null,C.memoizedState=null)}var z=yd(d);if(z!==null){z.flags&=-257,bd(z,d,u,o,n),z.mode&1&&jd(o,w,n),n=z,x=w;var O=n.updateQueue;if(O===null){var P=new Set;P.add(x),n.updateQueue=P}else O.add(x);break e}else{if((n&1)===0){jd(o,w,n),Ro();break e}x=Error(l(426))}}else if(ke&&u.mode&1){var Le=yd(d);if(Le!==null){(Le.flags&65536)===0&&(Le.flags|=256),bd(Le,d,u,o,n),Fi(ns(x,u));break e}}o=x=ns(x,u),_e!==4&&(_e=2),nt===null?nt=[o]:nt.push(o),o=d;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var j=gd(o,x,n);$c(o,j);break e;case 1:u=x;var f=o.type,y=o.stateNode;if((o.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(cn===null||!cn.has(y)))){o.flags|=65536,n&=-n,o.lanes|=n;var I=vd(o,u,n);$c(o,I);break e}}o=o.return}while(o!==null)}Xd(s)}catch(_){n=_,ze===s&&s!==null&&(ze=s=s.return);continue}break}while(!0)}function Kd(){var r=ia.current;return ia.current=ea,r===null?ea:r}function Ro(){(_e===0||_e===3||_e===2)&&(_e=4),Ae===null||(Tn&268435455)===0&&(oa&268435455)===0||un(Ae,He)}function xa(r,n){var s=ce;ce|=2;var t=Kd();(Ae!==r||He!==n)&&(qr=null,Mn(r,n));do try{Jx();break}catch(i){Yd(r,i)}while(!0);if(Wi(),ce=s,ia.current=t,ze!==null)throw Error(l(261));return Ae=null,He=0,_e}function Jx(){for(;ze!==null;)Jd(ze)}function Xx(){for(;ze!==null&&!Nu();)Jd(ze)}function Jd(r){var n=rp(r.alternate,r,dr);r.memoizedProps=r.pendingProps,n===null?Xd(r):ze=n,bo.current=null}function Xd(r){var n=r;do{var s=n.alternate;if(r=n.return,(n.flags&32768)===0){if(s=$x(s,n,dr),s!==null){ze=s;return}}else{if(s=Gx(s,n),s!==null){s.flags&=32767,ze=s;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{_e=6,ze=null;return}}if(n=n.sibling,n!==null){ze=n;return}ze=n=r}while(n!==null);_e===0&&(_e=5)}function In(r,n,s){var t=fe,i=vr.transition;try{vr.transition=null,fe=1,Zx(r,n,s,t)}finally{vr.transition=i,fe=t}return null}function Zx(r,n,s,t){do is();while(dn!==null);if((ce&6)!==0)throw Error(l(327));s=r.finishedWork;var i=r.finishedLanes;if(s===null)return null;if(r.finishedWork=null,r.finishedLanes=0,s===r.current)throw Error(l(177));r.callbackNode=null,r.callbackPriority=0;var o=s.lanes|s.childLanes;if(Eu(r,o),r===Ae&&(ze=Ae=null,He=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||ca||(ca=!0,np(gt,function(){return is(),null})),o=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||o){o=vr.transition,vr.transition=null;var d=fe;fe=1;var u=ce;ce|=4,bo.current=null,qx(r,s),Wd(s,r),jx(Ii),kt=!!Mi,Ii=Mi=null,r.current=s,Qx(s),ku(),ce=u,fe=d,vr.transition=o}else r.current=s;if(ca&&(ca=!1,dn=r,da=i),o=r.pendingLanes,o===0&&(cn=null),Cu(s.stateNode),nr(r,Re()),n!==null)for(t=r.onRecoverableError,s=0;s<n.length;s++)i=n[s],t(i.value,{componentStack:i.stack,digest:i.digest});if(la)throw la=!1,r=ko,ko=null,r;return(da&1)!==0&&r.tag!==0&&is(),o=r.pendingLanes,(o&1)!==0?r===So?st++:(st=0,So=r):st=0,tn(),null}function is(){if(dn!==null){var r=Fl(da),n=vr.transition,s=fe;try{if(vr.transition=null,fe=16>r?16:r,dn===null)var t=!1;else{if(r=dn,dn=null,da=0,(ce&6)!==0)throw Error(l(331));var i=ce;for(ce|=4,E=r.current;E!==null;){var o=E,d=o.child;if((E.flags&16)!==0){var u=o.deletions;if(u!==null){for(var x=0;x<u.length;x++){var w=u[x];for(E=w;E!==null;){var C=E;switch(C.tag){case 0:case 11:case 15:et(8,C,o)}var M=C.child;if(M!==null)M.return=C,E=M;else for(;E!==null;){C=E;var T=C.sibling,z=C.return;if(Bd(C),C===w){E=null;break}if(T!==null){T.return=z,E=T;break}E=z}}}var O=o.alternate;if(O!==null){var P=O.child;if(P!==null){O.child=null;do{var Le=P.sibling;P.sibling=null,P=Le}while(P!==null)}}E=o}}if((o.subtreeFlags&2064)!==0&&d!==null)d.return=o,E=d;else e:for(;E!==null;){if(o=E,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:et(9,o,o.return)}var j=o.sibling;if(j!==null){j.return=o.return,E=j;break e}E=o.return}}var f=r.current;for(E=f;E!==null;){d=E;var y=d.child;if((d.subtreeFlags&2064)!==0&&y!==null)y.return=d,E=y;else e:for(d=f;E!==null;){if(u=E,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:aa(9,u)}}catch(_){Me(u,u.return,_)}if(u===d){E=null;break e}var I=u.sibling;if(I!==null){I.return=u.return,E=I;break e}E=u.return}}if(ce=i,tn(),zr&&typeof zr.onPostCommitFiberRoot=="function")try{zr.onPostCommitFiberRoot(vt,r)}catch{}t=!0}return t}finally{fe=s,vr.transition=n}}return!1}function Zd(r,n,s){n=ns(s,n),n=gd(r,n,1),r=on(r,n,1),n=Je(),r!==null&&(Cs(r,1,n),nr(r,n))}function Me(r,n,s){if(r.tag===3)Zd(r,r,s);else for(;n!==null;){if(n.tag===3){Zd(n,r,s);break}else if(n.tag===1){var t=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(cn===null||!cn.has(t))){r=ns(s,r),r=vd(n,r,1),n=on(n,r,1),r=Je(),n!==null&&(Cs(n,1,r),nr(n,r));break}}n=n.return}}function em(r,n,s){var t=r.pingCache;t!==null&&t.delete(n),n=Je(),r.pingedLanes|=r.suspendedLanes&s,Ae===r&&(He&s)===s&&(_e===4||_e===3&&(He&130023424)===He&&500>Re()-No?Mn(r,0):wo|=s),nr(r,n)}function ep(r,n){n===0&&((r.mode&1)===0?n=1:(n=yt,yt<<=1,(yt&130023424)===0&&(yt=4194304)));var s=Je();r=$r(r,n),r!==null&&(Cs(r,n,s),nr(r,s))}function rm(r){var n=r.memoizedState,s=0;n!==null&&(s=n.retryLane),ep(r,s)}function nm(r,n){var s=0;switch(r.tag){case 13:var t=r.stateNode,i=r.memoizedState;i!==null&&(s=i.retryLane);break;case 19:t=r.stateNode;break;default:throw Error(l(314))}t!==null&&t.delete(n),ep(r,s)}var rp;rp=function(r,n,s){if(r!==null)if(r.memoizedProps!==n.pendingProps||Xe.current)er=!0;else{if((r.lanes&s)===0&&(n.flags&128)===0)return er=!1,Hx(r,n,s);er=(r.flags&131072)!==0}else er=!1,ke&&(n.flags&1048576)!==0&&Oc(n,Wt,n.index);switch(n.lanes=0,n.tag){case 2:var t=n.type;sa(r,n),r=n.pendingProps;var i=Qn(n,Ge.current);es(n,s),i=Zi(null,n,t,r,i,s);var o=eo();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ze(t)?(o=!0,Dt(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vi(n),i.updater=ra,n.stateNode=i,i._reactInternals=n,io(n,t,r,s),n=po(null,n,t,!0,o,s)):(n.tag=0,ke&&o&&_i(n),Ke(null,n,i,s),n=n.child),n;case 16:t=n.elementType;e:{switch(sa(r,n),r=n.pendingProps,i=t._init,t=i(t._payload),n.type=t,i=n.tag=tm(t),r=Cr(t,r),i){case 0:n=co(null,n,t,r,s);break e;case 1:n=Cd(null,n,t,r,s);break e;case 11:n=wd(null,n,t,r,s);break e;case 14:n=Nd(null,n,t,Cr(t.type,r),s);break e}throw Error(l(306,t,""))}return n;case 0:return t=n.type,i=n.pendingProps,i=n.elementType===t?i:Cr(t,i),co(r,n,t,i,s);case 1:return t=n.type,i=n.pendingProps,i=n.elementType===t?i:Cr(t,i),Cd(r,n,t,i,s);case 3:e:{if(Md(n),r===null)throw Error(l(387));t=n.pendingProps,o=n.memoizedState,i=o.element,Hc(r,n),Qt(n,t,null,s);var d=n.memoizedState;if(t=d.element,o.isDehydrated)if(o={element:t,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=ns(Error(l(423)),n),n=Id(r,n,t,s,i);break e}else if(t!==i){i=ns(Error(l(424)),n),n=Id(r,n,t,s,i);break e}else for(cr=rn(n.stateNode.containerInfo.firstChild),lr=n,ke=!0,Tr=null,s=Uc(n,null,t,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Jn(),t===i){n=Vr(r,n,s);break e}Ke(r,n,t,s)}n=n.child}return n;case 5:return Vc(n),r===null&&Di(n),t=n.type,i=n.pendingProps,o=r!==null?r.memoizedProps:null,d=i.children,Ri(t,i)?d=null:o!==null&&Ri(t,o)&&(n.flags|=32),Td(r,n),Ke(r,n,d,s),n.child;case 6:return r===null&&Di(n),null;case 13:return Rd(r,n,s);case 4:return qi(n,n.stateNode.containerInfo),t=n.pendingProps,r===null?n.child=Xn(n,null,t,s):Ke(r,n,t,s),n.child;case 11:return t=n.type,i=n.pendingProps,i=n.elementType===t?i:Cr(t,i),wd(r,n,t,i,s);case 7:return Ke(r,n,n.pendingProps,s),n.child;case 8:return Ke(r,n,n.pendingProps.children,s),n.child;case 12:return Ke(r,n,n.pendingProps.children,s),n.child;case 10:e:{if(t=n.type._context,i=n.pendingProps,o=n.memoizedProps,d=i.value,je(Gt,t._currentValue),t._currentValue=d,o!==null)if(Sr(o.value,d)){if(o.children===i.children&&!Xe.current){n=Vr(r,n,s);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var u=o.dependencies;if(u!==null){d=o.child;for(var x=u.firstContext;x!==null;){if(x.context===t){if(o.tag===1){x=Gr(-1,s&-s),x.tag=2;var w=o.updateQueue;if(w!==null){w=w.shared;var C=w.pending;C===null?x.next=x:(x.next=C.next,C.next=x),w.pending=x}}o.lanes|=s,x=o.alternate,x!==null&&(x.lanes|=s),$i(o.return,s,n),u.lanes|=s;break}x=x.next}}else if(o.tag===10)d=o.type===n.type?null:o.child;else if(o.tag===18){if(d=o.return,d===null)throw Error(l(341));d.lanes|=s,u=d.alternate,u!==null&&(u.lanes|=s),$i(d,s,n),d=o.sibling}else d=o.child;if(d!==null)d.return=o;else for(d=o;d!==null;){if(d===n){d=null;break}if(o=d.sibling,o!==null){o.return=d.return,d=o;break}d=d.return}o=d}Ke(r,n,i.children,s),n=n.child}return n;case 9:return i=n.type,t=n.pendingProps.children,es(n,s),i=fr(i),t=t(i),n.flags|=1,Ke(r,n,t,s),n.child;case 14:return t=n.type,i=Cr(t,n.pendingProps),i=Cr(t.type,i),Nd(r,n,t,i,s);case 15:return kd(r,n,n.type,n.pendingProps,s);case 17:return t=n.type,i=n.pendingProps,i=n.elementType===t?i:Cr(t,i),sa(r,n),n.tag=1,Ze(t)?(r=!0,Dt(n)):r=!1,es(n,s),hd(n,t,i),io(n,t,i,s),po(null,n,t,!0,r,s);case 19:return zd(r,n,s);case 22:return Sd(r,n,s)}throw Error(l(156,n.tag))};function np(r,n){return Pl(r,n)}function sm(r,n,s,t){this.tag=r,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jr(r,n,s,t){return new sm(r,n,s,t)}function Lo(r){return r=r.prototype,!(!r||!r.isReactComponent)}function tm(r){if(typeof r=="function")return Lo(r)?1:0;if(r!=null){if(r=r.$$typeof,r===ur)return 11;if(r===xr)return 14}return 2}function xn(r,n){var s=r.alternate;return s===null?(s=jr(r.tag,n,r.key,r.mode),s.elementType=r.elementType,s.type=r.type,s.stateNode=r.stateNode,s.alternate=r,r.alternate=s):(s.pendingProps=n,s.type=r.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=r.flags&14680064,s.childLanes=r.childLanes,s.lanes=r.lanes,s.child=r.child,s.memoizedProps=r.memoizedProps,s.memoizedState=r.memoizedState,s.updateQueue=r.updateQueue,n=r.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=r.sibling,s.index=r.index,s.ref=r.ref,s}function ma(r,n,s,t,i,o){var d=2;if(t=r,typeof r=="function")Lo(r)&&(d=1);else if(typeof r=="string")d=5;else e:switch(r){case H:return Rn(s.children,i,o,n);case Oe:d=8,i|=8;break;case ar:return r=jr(12,s,n,i|2),r.elementType=ar,r.lanes=o,r;case Ye:return r=jr(13,s,n,i),r.elementType=Ye,r.lanes=o,r;case ir:return r=jr(19,s,n,i),r.elementType=ir,r.lanes=o,r;case ve:return ha(s,i,o,n);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case wr:d=10;break e;case Ar:d=9;break e;case ur:d=11;break e;case xr:d=14;break e;case $e:d=16,t=null;break e}throw Error(l(130,r==null?r:typeof r,""))}return n=jr(d,s,n,i),n.elementType=r,n.type=t,n.lanes=o,n}function Rn(r,n,s,t){return r=jr(7,r,t,n),r.lanes=s,r}function ha(r,n,s,t){return r=jr(22,r,t,n),r.elementType=ve,r.lanes=s,r.stateNode={isHidden:!1},r}function zo(r,n,s){return r=jr(6,r,null,n),r.lanes=s,r}function Eo(r,n,s){return n=jr(4,r.children!==null?r.children:[],r.key,n),n.lanes=s,n.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},n}function am(r,n,s,t,i){this.tag=n,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ai(0),this.expirationTimes=ai(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ai(0),this.identifierPrefix=t,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Oo(r,n,s,t,i,o,d,u,x){return r=new am(r,n,s,u,x),n===1?(n=1,o===!0&&(n|=8)):n=0,o=jr(3,null,null,n),r.current=o,o.stateNode=r,o.memoizedState={element:t,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vi(o),r}function im(r,n,s){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Y,key:t==null?null:""+t,children:r,containerInfo:n,implementation:s}}function sp(r){if(!r)return sn;r=r._reactInternals;e:{if(vn(r)!==r||r.tag!==1)throw Error(l(170));var n=r;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ze(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(l(171))}if(r.tag===1){var s=r.type;if(Ze(s))return Lc(r,s,n)}return n}function tp(r,n,s,t,i,o,d,u,x){return r=Oo(s,t,!0,r,i,o,d,u,x),r.context=sp(null),s=r.current,t=Je(),i=pn(s),o=Gr(t,i),o.callback=n!=null?n:null,on(s,o,i),r.current.lanes=i,Cs(r,i,t),nr(r,t),r}function fa(r,n,s,t){var i=n.current,o=Je(),d=pn(i);return s=sp(s),n.context===null?n.context=s:n.pendingContext=s,n=Gr(o,d),n.payload={element:r},t=t===void 0?null:t,t!==null&&(n.callback=t),r=on(i,n,d),r!==null&&(Rr(r,i,d,o),qt(r,i,d)),d}function ga(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function ap(r,n){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var s=r.retryLane;r.retryLane=s!==0&&s<n?s:n}}function Po(r,n){ap(r,n),(r=r.alternate)&&ap(r,n)}function om(){return null}var ip=typeof reportError=="function"?reportError:function(r){console.error(r)};function _o(r){this._internalRoot=r}va.prototype.render=_o.prototype.render=function(r){var n=this._internalRoot;if(n===null)throw Error(l(409));fa(r,n,null,null)},va.prototype.unmount=_o.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var n=r.containerInfo;Cn(function(){fa(null,r,null,null)}),n[Fr]=null}};function va(r){this._internalRoot=r}va.prototype.unstable_scheduleHydration=function(r){if(r){var n=Hl();r={blockedOn:null,target:r,priority:n};for(var s=0;s<Xr.length&&n!==0&&n<Xr[s].priority;s++);Xr.splice(s,0,r),s===0&&Vl(r)}};function Bo(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function ja(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function op(){}function lm(r,n,s,t,i){if(i){if(typeof t=="function"){var o=t;t=function(){var w=ga(d);o.call(w)}}var d=tp(n,t,r,0,null,!1,!1,"",op);return r._reactRootContainer=d,r[Fr]=d.current,Us(r.nodeType===8?r.parentNode:r),Cn(),d}for(;i=r.lastChild;)r.removeChild(i);if(typeof t=="function"){var u=t;t=function(){var w=ga(x);u.call(w)}}var x=Oo(r,0,!1,null,null,!1,!1,"",op);return r._reactRootContainer=x,r[Fr]=x.current,Us(r.nodeType===8?r.parentNode:r),Cn(function(){fa(n,x,s,t)}),x}function ya(r,n,s,t,i){var o=s._reactRootContainer;if(o){var d=o;if(typeof i=="function"){var u=i;i=function(){var x=ga(d);u.call(x)}}fa(n,d,r,i)}else d=lm(s,n,r,i,t);return ga(d)}Ul=function(r){switch(r.tag){case 3:var n=r.stateNode;if(n.current.memoizedState.isDehydrated){var s=Ts(n.pendingLanes);s!==0&&(ii(n,s|1),nr(n,Re()),(ce&6)===0&&(as=Re()+500,tn()))}break;case 13:Cn(function(){var t=$r(r,1);if(t!==null){var i=Je();Rr(t,r,1,i)}}),Po(r,1)}},oi=function(r){if(r.tag===13){var n=$r(r,134217728);if(n!==null){var s=Je();Rr(n,r,134217728,s)}Po(r,134217728)}},Wl=function(r){if(r.tag===13){var n=pn(r),s=$r(r,n);if(s!==null){var t=Je();Rr(s,r,n,t)}Po(r,n)}},Hl=function(){return fe},$l=function(r,n){var s=fe;try{return fe=r,n()}finally{fe=s}},Za=function(r,n,s){switch(n){case"input":if(Ga(r,s),n=s.name,s.type==="radio"&&n!=null){for(s=r;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<s.length;n++){var t=s[n];if(t!==r&&t.form===r.form){var i=Bt(t);if(!i)throw Error(l(90));Nr(t),Ga(t,i)}}}break;case"textarea":jl(r,s);break;case"select":n=s.value,n!=null&&_n(r,!!s.multiple,n,!1)}},Ml=Mo,Il=Cn;var cm={usingClientEntryPoint:!1,Events:[$s,Vn,Bt,Tl,Cl,Mo]},tt={findFiberByHostInstance:jn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dm={bundleType:tt.bundleType,version:tt.version,rendererPackageName:tt.rendererPackageName,rendererConfig:tt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=El(r),r===null?null:r.stateNode},findFiberByHostInstance:tt.findFiberByHostInstance||om,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ba=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ba.isDisabled&&ba.supportsFiber)try{vt=ba.inject(dm),zr=ba}catch{}}return sr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cm,sr.createPortal=function(r,n){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bo(n))throw Error(l(200));return im(r,n,null,s)},sr.createRoot=function(r,n){if(!Bo(r))throw Error(l(299));var s=!1,t="",i=ip;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(t=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Oo(r,1,!1,null,null,s,!1,t,i),r[Fr]=n.current,Us(r.nodeType===8?r.parentNode:r),new _o(n)},sr.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var n=r._reactInternals;if(n===void 0)throw typeof r.render=="function"?Error(l(188)):(r=Object.keys(r).join(","),Error(l(268,r)));return r=El(n),r=r===null?null:r.stateNode,r},sr.flushSync=function(r){return Cn(r)},sr.hydrate=function(r,n,s){if(!ja(n))throw Error(l(200));return ya(null,r,n,!0,s)},sr.hydrateRoot=function(r,n,s){if(!Bo(r))throw Error(l(405));var t=s!=null&&s.hydratedSources||null,i=!1,o="",d=ip;if(s!=null&&(s.unstable_strictMode===!0&&(i=!0),s.identifierPrefix!==void 0&&(o=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),n=tp(n,null,r,1,s!=null?s:null,i,!1,o,d),r[Fr]=n.current,Us(r),t)for(r=0;r<t.length;r++)s=t[r],i=s._getVersion,i=i(s._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[s,i]:n.mutableSourceEagerHydrationData.push(s,i);return new va(n)},sr.render=function(r,n,s){if(!ja(n))throw Error(l(200));return ya(null,r,n,!1,s)},sr.unmountComponentAtNode=function(r){if(!ja(r))throw Error(l(40));return r._reactRootContainer?(Cn(function(){ya(null,null,r,!1,function(){r._reactRootContainer=null,r[Fr]=null})}),!0):!1},sr.unstable_batchedUpdates=Mo,sr.unstable_renderSubtreeIntoContainer=function(r,n,s,t){if(!ja(s))throw Error(l(200));if(r==null||r._reactInternals===void 0)throw Error(l(38));return ya(r,n,s,!1,t)},sr.version="18.3.1-next-f1338f8080-20240426",sr}var hp;function jm(){if(hp)return Fo.exports;hp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(c){console.error(c)}}return a(),Fo.exports=vm(),Fo.exports}var fp;function ym(){if(fp)return wa;fp=1;var a=jm();return wa.createRoot=a.createRoot,wa.hydrateRoot=a.hydrateRoot,wa}var bm=ym(),N=ol();const yr=um(N);var tr=function(){return tr=Object.assign||function(c){for(var l,p=1,m=arguments.length;p<m;p++){l=arguments[p];for(var g in l)Object.prototype.hasOwnProperty.call(l,g)&&(c[g]=l[g])}return c},tr.apply(this,arguments)};function Ra(a,c,l){if(l||arguments.length===2)for(var p=0,m=c.length,g;p<m;p++)(g||!(p in c))&&(g||(g=Array.prototype.slice.call(c,0,p)),g[p]=c[p]);return a.concat(g||Array.prototype.slice.call(c))}var we="-ms-",lt="-moz-",he="-webkit-",Wp="comm",_a="rule",ll="decl",wm="@import",Hp="@keyframes",Nm="@layer",$p=Math.abs,cl=String.fromCharCode,Ko=Object.assign;function km(a,c){return Fe(a,0)^45?(((c<<2^Fe(a,0))<<2^Fe(a,1))<<2^Fe(a,2))<<2^Fe(a,3):0}function Gp(a){return a.trim()}function Qr(a,c){return(a=c.exec(a))?a[0]:a}function Z(a,c,l){return a.replace(c,l)}function Sa(a,c,l){return a.indexOf(c,l)}function Fe(a,c){return a.charCodeAt(c)|0}function cs(a,c,l){return a.slice(c,l)}function Br(a){return a.length}function Vp(a){return a.length}function ot(a,c){return c.push(a),a}function Sm(a,c){return a.map(c).join("")}function gp(a,c){return a.filter(function(l){return!Qr(l,c)})}var Ba=1,ds=1,qp=0,br=0,Ee=0,js="";function Aa(a,c,l,p,m,g,b,k){return{value:a,root:c,parent:l,type:p,props:m,children:g,line:Ba,column:ds,length:b,return:"",siblings:k}}function hn(a,c){return Ko(Aa("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},c)}function os(a){for(;a.root;)a=hn(a.root,{children:[a]});ot(a,a.siblings)}function Tm(){return Ee}function Cm(){return Ee=br>0?Fe(js,--br):0,ds--,Ee===10&&(ds=1,Ba--),Ee}function Lr(){return Ee=br<qp?Fe(js,br++):0,ds++,Ee===10&&(ds=1,Ba++),Ee}function zn(){return Fe(js,br)}function Ta(){return br}function Da(a,c){return cs(js,a,c)}function Jo(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Mm(a){return Ba=ds=1,qp=Br(js=a),br=0,[]}function Im(a){return js="",a}function Ho(a){return Gp(Da(br-1,Xo(a===91?a+2:a===40?a+1:a)))}function Rm(a){for(;(Ee=zn())&&Ee<33;)Lr();return Jo(a)>2||Jo(Ee)>3?"":" "}function Lm(a,c){for(;--c&&Lr()&&!(Ee<48||Ee>102||Ee>57&&Ee<65||Ee>70&&Ee<97););return Da(a,Ta()+(c<6&&zn()==32&&Lr()==32))}function Xo(a){for(;Lr();)switch(Ee){case a:return br;case 34:case 39:a!==34&&a!==39&&Xo(Ee);break;case 40:a===41&&Xo(a);break;case 92:Lr();break}return br}function zm(a,c){for(;Lr()&&a+Ee!==57;)if(a+Ee===84&&zn()===47)break;return"/*"+Da(c,br-1)+"*"+cl(a===47?a:Lr())}function Em(a){for(;!Jo(zn());)Lr();return Da(a,br)}function Om(a){return Im(Ca("",null,null,null,[""],a=Mm(a),0,[0],a))}function Ca(a,c,l,p,m,g,b,k,h){for(var q=0,G=0,D=b,F=0,Q=0,ae=0,V=1,J=1,me=1,le=0,ie="",ee=m,ue=g,Y=p,H=ie;J;)switch(ae=le,le=Lr()){case 40:if(ae!=108&&Fe(H,D-1)==58){Sa(H+=Z(Ho(le),"&","&\f"),"&\f",$p(q?k[q-1]:0))!=-1&&(me=-1);break}case 34:case 39:case 91:H+=Ho(le);break;case 9:case 10:case 13:case 32:H+=Rm(ae);break;case 92:H+=Lm(Ta()-1,7);continue;case 47:switch(zn()){case 42:case 47:ot(Pm(zm(Lr(),Ta()),c,l,h),h);break;default:H+="/"}break;case 123*V:k[q++]=Br(H)*me;case 125*V:case 59:case 0:switch(le){case 0:case 125:J=0;case 59+G:me==-1&&(H=Z(H,/\f/g,"")),Q>0&&Br(H)-D&&ot(Q>32?jp(H+";",p,l,D-1,h):jp(Z(H," ","")+";",p,l,D-2,h),h);break;case 59:H+=";";default:if(ot(Y=vp(H,c,l,q,G,m,k,ie,ee=[],ue=[],D,g),g),le===123)if(G===0)Ca(H,c,Y,Y,ee,g,D,k,ue);else switch(F===99&&Fe(H,3)===110?100:F){case 100:case 108:case 109:case 115:Ca(a,Y,Y,p&&ot(vp(a,Y,Y,0,0,m,k,ie,m,ee=[],D,ue),ue),m,ue,D,k,p?ee:ue);break;default:Ca(H,Y,Y,Y,[""],ue,0,k,ue)}}q=G=Q=0,V=me=1,ie=H="",D=b;break;case 58:D=1+Br(H),Q=ae;default:if(V<1){if(le==123)--V;else if(le==125&&V++==0&&Cm()==125)continue}switch(H+=cl(le),le*V){case 38:me=G>0?1:(H+="\f",-1);break;case 44:k[q++]=(Br(H)-1)*me,me=1;break;case 64:zn()===45&&(H+=Ho(Lr())),F=zn(),G=D=Br(ie=H+=Em(Ta())),le++;break;case 45:ae===45&&Br(H)==2&&(V=0)}}return g}function vp(a,c,l,p,m,g,b,k,h,q,G,D){for(var F=m-1,Q=m===0?g:[""],ae=Vp(Q),V=0,J=0,me=0;V<p;++V)for(var le=0,ie=cs(a,F+1,F=$p(J=b[V])),ee=a;le<ae;++le)(ee=Gp(J>0?Q[le]+" "+ie:Z(ie,/&\f/g,Q[le])))&&(h[me++]=ee);return Aa(a,c,l,m===0?_a:k,h,q,G,D)}function Pm(a,c,l,p){return Aa(a,c,l,Wp,cl(Tm()),cs(a,2,-2),0,p)}function jp(a,c,l,p,m){return Aa(a,c,l,ll,cs(a,0,p),cs(a,p+1,-1),p,m)}function Qp(a,c,l){switch(km(a,c)){case 5103:return he+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return he+a+a;case 4789:return lt+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return he+a+lt+a+we+a+a;case 5936:switch(Fe(a,c+11)){case 114:return he+a+we+Z(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return he+a+we+Z(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return he+a+we+Z(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return he+a+we+a+a;case 6165:return he+a+we+"flex-"+a+a;case 5187:return he+a+Z(a,/(\w+).+(:[^]+)/,he+"box-$1$2"+we+"flex-$1$2")+a;case 5443:return he+a+we+"flex-item-"+Z(a,/flex-|-self/g,"")+(Qr(a,/flex-|baseline/)?"":we+"grid-row-"+Z(a,/flex-|-self/g,""))+a;case 4675:return he+a+we+"flex-line-pack"+Z(a,/align-content|flex-|-self/g,"")+a;case 5548:return he+a+we+Z(a,"shrink","negative")+a;case 5292:return he+a+we+Z(a,"basis","preferred-size")+a;case 6060:return he+"box-"+Z(a,"-grow","")+he+a+we+Z(a,"grow","positive")+a;case 4554:return he+Z(a,/([^-])(transform)/g,"$1"+he+"$2")+a;case 6187:return Z(Z(Z(a,/(zoom-|grab)/,he+"$1"),/(image-set)/,he+"$1"),a,"")+a;case 5495:case 3959:return Z(a,/(image-set\([^]*)/,he+"$1$`$1");case 4968:return Z(Z(a,/(.+:)(flex-)?(.*)/,he+"box-pack:$3"+we+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+he+a+a;case 4200:if(!Qr(a,/flex-|baseline/))return we+"grid-column-align"+cs(a,c)+a;break;case 2592:case 3360:return we+Z(a,"template-","")+a;case 4384:case 3616:return l&&l.some(function(p,m){return c=m,Qr(p.props,/grid-\w+-end/)})?~Sa(a+(l=l[c].value),"span",0)?a:we+Z(a,"-start","")+a+we+"grid-row-span:"+(~Sa(l,"span",0)?Qr(l,/\d+/):+Qr(l,/\d+/)-+Qr(a,/\d+/))+";":we+Z(a,"-start","")+a;case 4896:case 4128:return l&&l.some(function(p){return Qr(p.props,/grid-\w+-start/)})?a:we+Z(Z(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return Z(a,/(.+)-inline(.+)/,he+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Br(a)-1-c>6)switch(Fe(a,c+1)){case 109:if(Fe(a,c+4)!==45)break;case 102:return Z(a,/(.+:)(.+)-([^]+)/,"$1"+he+"$2-$3$1"+lt+(Fe(a,c+3)==108?"$3":"$2-$3"))+a;case 115:return~Sa(a,"stretch",0)?Qp(Z(a,"stretch","fill-available"),c,l)+a:a}break;case 5152:case 5920:return Z(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(p,m,g,b,k,h,q){return we+m+":"+g+q+(b?we+m+"-span:"+(k?h:+h-+g)+q:"")+a});case 4949:if(Fe(a,c+6)===121)return Z(a,":",":"+he)+a;break;case 6444:switch(Fe(a,Fe(a,14)===45?18:11)){case 120:return Z(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+he+(Fe(a,14)===45?"inline-":"")+"box$3$1"+he+"$2$3$1"+we+"$2box$3")+a;case 100:return Z(a,":",":"+we)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Z(a,"scroll-","scroll-snap-")+a}return a}function La(a,c){for(var l="",p=0;p<a.length;p++)l+=c(a[p],p,a,c)||"";return l}function _m(a,c,l,p){switch(a.type){case Nm:if(a.children.length)break;case wm:case ll:return a.return=a.return||a.value;case Wp:return"";case Hp:return a.return=a.value+"{"+La(a.children,p)+"}";case _a:if(!Br(a.value=a.props.join(",")))return""}return Br(l=La(a.children,p))?a.return=a.value+"{"+l+"}":""}function Bm(a){var c=Vp(a);return function(l,p,m,g){for(var b="",k=0;k<c;k++)b+=a[k](l,p,m,g)||"";return b}}function Am(a){return function(c){c.root||(c=c.return)&&a(c)}}function Dm(a,c,l,p){if(a.length>-1&&!a.return)switch(a.type){case ll:a.return=Qp(a.value,a.length,l);return;case Hp:return La([hn(a,{value:Z(a.value,"@","@"+he)})],p);case _a:if(a.length)return Sm(l=a.props,function(m){switch(Qr(m,p=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":os(hn(a,{props:[Z(m,/:(read-\w+)/,":"+lt+"$1")]})),os(hn(a,{props:[m]})),Ko(a,{props:gp(l,p)});break;case"::placeholder":os(hn(a,{props:[Z(m,/:(plac\w+)/,":"+he+"input-$1")]})),os(hn(a,{props:[Z(m,/:(plac\w+)/,":"+lt+"$1")]})),os(hn(a,{props:[Z(m,/:(plac\w+)/,we+"input-$1")]})),os(hn(a,{props:[m]})),Ko(a,{props:gp(l,p)});break}return""})}}var Fm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},pr={},ps=typeof process!="undefined"&&pr!==void 0&&(pr.REACT_APP_SC_ATTR||pr.SC_ATTR)||"data-styled",Yp="active",Kp="data-styled-version",Fa="6.1.18",dl=`/*!sc*/
`,za=typeof window!="undefined"&&typeof document!="undefined",Um=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&pr!==void 0&&pr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&pr.REACT_APP_SC_DISABLE_SPEEDY!==""?pr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&pr.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&pr!==void 0&&pr.SC_DISABLE_SPEEDY!==void 0&&pr.SC_DISABLE_SPEEDY!==""&&pr.SC_DISABLE_SPEEDY!=="false"&&pr.SC_DISABLE_SPEEDY),Ua=Object.freeze([]),us=Object.freeze({});function Wm(a,c,l){return l===void 0&&(l=us),a.theme!==l.theme&&a.theme||c||l.theme}var Jp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Hm=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$m=/(^-|-$)/g;function yp(a){return a.replace(Hm,"-").replace($m,"")}var Gm=/(a)(d)/gi,Na=52,bp=function(a){return String.fromCharCode(a+(a>25?39:97))};function Zo(a){var c,l="";for(c=Math.abs(a);c>Na;c=c/Na|0)l=bp(c%Na)+l;return(bp(c%Na)+l).replace(Gm,"$1-$2")}var $o,Xp=5381,ls=function(a,c){for(var l=c.length;l;)a=33*a^c.charCodeAt(--l);return a},Zp=function(a){return ls(Xp,a)};function Vm(a){return Zo(Zp(a)>>>0)}function qm(a){return a.displayName||a.name||"Component"}function Go(a){return typeof a=="string"&&!0}var eu=typeof Symbol=="function"&&Symbol.for,ru=eu?Symbol.for("react.memo"):60115,Qm=eu?Symbol.for("react.forward_ref"):60112,Ym={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Km={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},nu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Jm=(($o={})[Qm]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$o[ru]=nu,$o);function wp(a){return("type"in(c=a)&&c.type.$$typeof)===ru?nu:"$$typeof"in a?Jm[a.$$typeof]:Ym;var c}var Xm=Object.defineProperty,Zm=Object.getOwnPropertyNames,Np=Object.getOwnPropertySymbols,eh=Object.getOwnPropertyDescriptor,rh=Object.getPrototypeOf,kp=Object.prototype;function su(a,c,l){if(typeof c!="string"){if(kp){var p=rh(c);p&&p!==kp&&su(a,p,l)}var m=Zm(c);Np&&(m=m.concat(Np(c)));for(var g=wp(a),b=wp(c),k=0;k<m.length;++k){var h=m[k];if(!(h in Km||l&&l[h]||b&&h in b||g&&h in g)){var q=eh(c,h);try{Xm(a,h,q)}catch{}}}}return a}function xs(a){return typeof a=="function"}function pl(a){return typeof a=="object"&&"styledComponentId"in a}function Ln(a,c){return a&&c?"".concat(a," ").concat(c):a||c||""}function Sp(a,c){if(a.length===0)return"";for(var l=a[0],p=1;p<a.length;p++)l+=a[p];return l}function ct(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function el(a,c,l){if(l===void 0&&(l=!1),!l&&!ct(a)&&!Array.isArray(a))return c;if(Array.isArray(c))for(var p=0;p<c.length;p++)a[p]=el(a[p],c[p]);else if(ct(c))for(var p in c)a[p]=el(a[p],c[p]);return a}function ul(a,c){Object.defineProperty(a,"toString",{value:c})}function ut(a){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var nh=(function(){function a(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c}return a.prototype.indexOfGroup=function(c){for(var l=0,p=0;p<c;p++)l+=this.groupSizes[p];return l},a.prototype.insertRules=function(c,l){if(c>=this.groupSizes.length){for(var p=this.groupSizes,m=p.length,g=m;c>=g;)if((g<<=1)<0)throw ut(16,"".concat(c));this.groupSizes=new Uint32Array(g),this.groupSizes.set(p),this.length=g;for(var b=m;b<g;b++)this.groupSizes[b]=0}for(var k=this.indexOfGroup(c+1),h=(b=0,l.length);b<h;b++)this.tag.insertRule(k,l[b])&&(this.groupSizes[c]++,k++)},a.prototype.clearGroup=function(c){if(c<this.length){var l=this.groupSizes[c],p=this.indexOfGroup(c),m=p+l;this.groupSizes[c]=0;for(var g=p;g<m;g++)this.tag.deleteRule(p)}},a.prototype.getGroup=function(c){var l="";if(c>=this.length||this.groupSizes[c]===0)return l;for(var p=this.groupSizes[c],m=this.indexOfGroup(c),g=m+p,b=m;b<g;b++)l+="".concat(this.tag.getRule(b)).concat(dl);return l},a})(),Ma=new Map,Ea=new Map,Ia=1,ka=function(a){if(Ma.has(a))return Ma.get(a);for(;Ea.has(Ia);)Ia++;var c=Ia++;return Ma.set(a,c),Ea.set(c,a),c},sh=function(a,c){Ia=c+1,Ma.set(a,c),Ea.set(c,a)},th="style[".concat(ps,"][").concat(Kp,'="').concat(Fa,'"]'),ah=new RegExp("^".concat(ps,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ih=function(a,c,l){for(var p,m=l.split(","),g=0,b=m.length;g<b;g++)(p=m[g])&&a.registerName(c,p)},oh=function(a,c){for(var l,p=((l=c.textContent)!==null&&l!==void 0?l:"").split(dl),m=[],g=0,b=p.length;g<b;g++){var k=p[g].trim();if(k){var h=k.match(ah);if(h){var q=0|parseInt(h[1],10),G=h[2];q!==0&&(sh(G,q),ih(a,G,h[3]),a.getTag().insertRules(q,m)),m.length=0}else m.push(k)}}},Tp=function(a){for(var c=document.querySelectorAll(th),l=0,p=c.length;l<p;l++){var m=c[l];m&&m.getAttribute(ps)!==Yp&&(oh(a,m),m.parentNode&&m.parentNode.removeChild(m))}};function lh(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var tu=function(a){var c=document.head,l=a||c,p=document.createElement("style"),m=(function(k){var h=Array.from(k.querySelectorAll("style[".concat(ps,"]")));return h[h.length-1]})(l),g=m!==void 0?m.nextSibling:null;p.setAttribute(ps,Yp),p.setAttribute(Kp,Fa);var b=lh();return b&&p.setAttribute("nonce",b),l.insertBefore(p,g),p},ch=(function(){function a(c){this.element=tu(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(l){if(l.sheet)return l.sheet;for(var p=document.styleSheets,m=0,g=p.length;m<g;m++){var b=p[m];if(b.ownerNode===l)return b}throw ut(17)})(this.element),this.length=0}return a.prototype.insertRule=function(c,l){try{return this.sheet.insertRule(l,c),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},a.prototype.getRule=function(c){var l=this.sheet.cssRules[c];return l&&l.cssText?l.cssText:""},a})(),dh=(function(){function a(c){this.element=tu(c),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(c,l){if(c<=this.length&&c>=0){var p=document.createTextNode(l);return this.element.insertBefore(p,this.nodes[c]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},a.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},a})(),ph=(function(){function a(c){this.rules=[],this.length=0}return a.prototype.insertRule=function(c,l){return c<=this.length&&(this.rules.splice(c,0,l),this.length++,!0)},a.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},a.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},a})(),Cp=za,uh={isServer:!za,useCSSOMInjection:!Um},au=(function(){function a(c,l,p){c===void 0&&(c=us),l===void 0&&(l={});var m=this;this.options=tr(tr({},uh),c),this.gs=l,this.names=new Map(p),this.server=!!c.isServer,!this.server&&za&&Cp&&(Cp=!1,Tp(this)),ul(this,function(){return(function(g){for(var b=g.getTag(),k=b.length,h="",q=function(D){var F=(function(me){return Ea.get(me)})(D);if(F===void 0)return"continue";var Q=g.names.get(F),ae=b.getGroup(D);if(Q===void 0||!Q.size||ae.length===0)return"continue";var V="".concat(ps,".g").concat(D,'[id="').concat(F,'"]'),J="";Q!==void 0&&Q.forEach(function(me){me.length>0&&(J+="".concat(me,","))}),h+="".concat(ae).concat(V,'{content:"').concat(J,'"}').concat(dl)},G=0;G<k;G++)q(G);return h})(m)})}return a.registerId=function(c){return ka(c)},a.prototype.rehydrate=function(){!this.server&&za&&Tp(this)},a.prototype.reconstructWithOptions=function(c,l){return l===void 0&&(l=!0),new a(tr(tr({},this.options),c),this.gs,l&&this.names||void 0)},a.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(l){var p=l.useCSSOMInjection,m=l.target;return l.isServer?new ph(m):p?new ch(m):new dh(m)})(this.options),new nh(c)));var c},a.prototype.hasNameForId=function(c,l){return this.names.has(c)&&this.names.get(c).has(l)},a.prototype.registerName=function(c,l){if(ka(c),this.names.has(c))this.names.get(c).add(l);else{var p=new Set;p.add(l),this.names.set(c,p)}},a.prototype.insertRules=function(c,l,p){this.registerName(c,l),this.getTag().insertRules(ka(c),p)},a.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},a.prototype.clearRules=function(c){this.getTag().clearGroup(ka(c)),this.clearNames(c)},a.prototype.clearTag=function(){this.tag=void 0},a})(),xh=/&/g,mh=/^\s*\/\/.*$/gm;function iu(a,c){return a.map(function(l){return l.type==="rule"&&(l.value="".concat(c," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(c," ")),l.props=l.props.map(function(p){return"".concat(c," ").concat(p)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=iu(l.children,c)),l})}function hh(a){var c,l,p,m=us,g=m.options,b=g===void 0?us:g,k=m.plugins,h=k===void 0?Ua:k,q=function(F,Q,ae){return ae.startsWith(l)&&ae.endsWith(l)&&ae.replaceAll(l,"").length>0?".".concat(c):F},G=h.slice();G.push(function(F){F.type===_a&&F.value.includes("&")&&(F.props[0]=F.props[0].replace(xh,l).replace(p,q))}),b.prefix&&G.push(Dm),G.push(_m);var D=function(F,Q,ae,V){Q===void 0&&(Q=""),ae===void 0&&(ae=""),V===void 0&&(V="&"),c=V,l=Q,p=new RegExp("\\".concat(l,"\\b"),"g");var J=F.replace(mh,""),me=Om(ae||Q?"".concat(ae," ").concat(Q," { ").concat(J," }"):J);b.namespace&&(me=iu(me,b.namespace));var le=[];return La(me,Bm(G.concat(Am(function(ie){return le.push(ie)})))),le};return D.hash=h.length?h.reduce(function(F,Q){return Q.name||ut(15),ls(F,Q.name)},Xp).toString():"",D}var fh=new au,rl=hh(),ou=yr.createContext({shouldForwardProp:void 0,styleSheet:fh,stylis:rl});ou.Consumer;yr.createContext(void 0);function Mp(){return N.useContext(ou)}var gh=(function(){function a(c,l){var p=this;this.inject=function(m,g){g===void 0&&(g=rl);var b=p.name+g.hash;m.hasNameForId(p.id,b)||m.insertRules(p.id,b,g(p.rules,b,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=l,ul(this,function(){throw ut(12,String(p.name))})}return a.prototype.getName=function(c){return c===void 0&&(c=rl),this.name+c.hash},a})(),vh=function(a){return a>="A"&&a<="Z"};function Ip(a){for(var c="",l=0;l<a.length;l++){var p=a[l];if(l===1&&p==="-"&&a[0]==="-")return a;vh(p)?c+="-"+p.toLowerCase():c+=p}return c.startsWith("ms-")?"-"+c:c}var lu=function(a){return a==null||a===!1||a===""},cu=function(a){var c,l,p=[];for(var m in a){var g=a[m];a.hasOwnProperty(m)&&!lu(g)&&(Array.isArray(g)&&g.isCss||xs(g)?p.push("".concat(Ip(m),":"),g,";"):ct(g)?p.push.apply(p,Ra(Ra(["".concat(m," {")],cu(g),!1),["}"],!1)):p.push("".concat(Ip(m),": ").concat((c=m,(l=g)==null||typeof l=="boolean"||l===""?"":typeof l!="number"||l===0||c in Fm||c.startsWith("--")?String(l).trim():"".concat(l,"px")),";")))}return p};function En(a,c,l,p){if(lu(a))return[];if(pl(a))return[".".concat(a.styledComponentId)];if(xs(a)){if(!xs(g=a)||g.prototype&&g.prototype.isReactComponent||!c)return[a];var m=a(c);return En(m,c,l,p)}var g;return a instanceof gh?l?(a.inject(l,p),[a.getName(p)]):[a]:ct(a)?cu(a):Array.isArray(a)?Array.prototype.concat.apply(Ua,a.map(function(b){return En(b,c,l,p)})):[a.toString()]}function jh(a){for(var c=0;c<a.length;c+=1){var l=a[c];if(xs(l)&&!pl(l))return!1}return!0}var yh=Zp(Fa),bh=(function(){function a(c,l,p){this.rules=c,this.staticRulesId="",this.isStatic=(p===void 0||p.isStatic)&&jh(c),this.componentId=l,this.baseHash=ls(yh,l),this.baseStyle=p,au.registerId(l)}return a.prototype.generateAndInjectStyles=function(c,l,p){var m=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,l,p):"";if(this.isStatic&&!p.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))m=Ln(m,this.staticRulesId);else{var g=Sp(En(this.rules,c,l,p)),b=Zo(ls(this.baseHash,g)>>>0);if(!l.hasNameForId(this.componentId,b)){var k=p(g,".".concat(b),void 0,this.componentId);l.insertRules(this.componentId,b,k)}m=Ln(m,b),this.staticRulesId=b}else{for(var h=ls(this.baseHash,p.hash),q="",G=0;G<this.rules.length;G++){var D=this.rules[G];if(typeof D=="string")q+=D;else if(D){var F=Sp(En(D,c,l,p));h=ls(h,F+G),q+=F}}if(q){var Q=Zo(h>>>0);l.hasNameForId(this.componentId,Q)||l.insertRules(this.componentId,Q,p(q,".".concat(Q),void 0,this.componentId)),m=Ln(m,Q)}}return m},a})(),du=yr.createContext(void 0);du.Consumer;var Vo={};function wh(a,c,l){var p=pl(a),m=a,g=!Go(a),b=c.attrs,k=b===void 0?Ua:b,h=c.componentId,q=h===void 0?(function(ee,ue){var Y=typeof ee!="string"?"sc":yp(ee);Vo[Y]=(Vo[Y]||0)+1;var H="".concat(Y,"-").concat(Vm(Fa+Y+Vo[Y]));return ue?"".concat(ue,"-").concat(H):H})(c.displayName,c.parentComponentId):h,G=c.displayName,D=G===void 0?(function(ee){return Go(ee)?"styled.".concat(ee):"Styled(".concat(qm(ee),")")})(a):G,F=c.displayName&&c.componentId?"".concat(yp(c.displayName),"-").concat(c.componentId):c.componentId||q,Q=p&&m.attrs?m.attrs.concat(k).filter(Boolean):k,ae=c.shouldForwardProp;if(p&&m.shouldForwardProp){var V=m.shouldForwardProp;if(c.shouldForwardProp){var J=c.shouldForwardProp;ae=function(ee,ue){return V(ee,ue)&&J(ee,ue)}}else ae=V}var me=new bh(l,F,p?m.componentStyle:void 0);function le(ee,ue){return(function(Y,H,Oe){var ar=Y.attrs,wr=Y.componentStyle,Ar=Y.defaultProps,ur=Y.foldedComponentIds,Ye=Y.styledComponentId,ir=Y.target,xr=yr.useContext(du),$e=Mp(),ve=Y.shouldForwardProp||$e.shouldForwardProp,R=Wm(H,xr,Ar)||us,B=(function(se,re,xe){for(var oe,de=tr(tr({},re),{className:void 0,theme:xe}),Ue=0;Ue<se.length;Ue+=1){var Dr=xs(oe=se[Ue])?oe(de):oe;for(var Nr in Dr)de[Nr]=Nr==="className"?Ln(de[Nr],Dr[Nr]):Nr==="style"?tr(tr({},de[Nr]),Dr[Nr]):Dr[Nr]}return re.className&&(de.className=Ln(de.className,re.className)),de})(ar,H,R),L=B.as||ir,v={};for(var S in B)B[S]===void 0||S[0]==="$"||S==="as"||S==="theme"&&B.theme===R||(S==="forwardedAs"?v.as=B.forwardedAs:ve&&!ve(S,L)||(v[S]=B[S]));var K=(function(se,re){var xe=Mp(),oe=se.generateAndInjectStyles(re,xe.styleSheet,xe.stylis);return oe})(wr,B),X=Ln(ur,Ye);return K&&(X+=" "+K),B.className&&(X+=" "+B.className),v[Go(L)&&!Jp.has(L)?"class":"className"]=X,Oe&&(v.ref=Oe),N.createElement(L,v)})(ie,ee,ue)}le.displayName=D;var ie=yr.forwardRef(le);return ie.attrs=Q,ie.componentStyle=me,ie.displayName=D,ie.shouldForwardProp=ae,ie.foldedComponentIds=p?Ln(m.foldedComponentIds,m.styledComponentId):"",ie.styledComponentId=F,ie.target=p?m.target:a,Object.defineProperty(ie,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ee){this._foldedDefaultProps=p?(function(ue){for(var Y=[],H=1;H<arguments.length;H++)Y[H-1]=arguments[H];for(var Oe=0,ar=Y;Oe<ar.length;Oe++)el(ue,ar[Oe],!0);return ue})({},m.defaultProps,ee):ee}}),ul(ie,function(){return".".concat(ie.styledComponentId)}),g&&su(ie,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ie}function Rp(a,c){for(var l=[a[0]],p=0,m=c.length;p<m;p+=1)l.push(c[p],a[p+1]);return l}var Lp=function(a){return Object.assign(a,{isCss:!0})};function Nh(a){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];if(xs(a)||ct(a))return Lp(En(Rp(Ua,Ra([a],c,!0))));var p=a;return c.length===0&&p.length===1&&typeof p[0]=="string"?En(p):Lp(En(Rp(p,c)))}function nl(a,c,l){if(l===void 0&&(l=us),!c)throw ut(1,c);var p=function(m){for(var g=[],b=1;b<arguments.length;b++)g[b-1]=arguments[b];return a(c,l,Nh.apply(void 0,Ra([m],g,!1)))};return p.attrs=function(m){return nl(a,c,tr(tr({},l),{attrs:Array.prototype.concat(l.attrs,m).filter(Boolean)}))},p.withConfig=function(m){return nl(a,c,tr(tr({},l),m))},p}var pu=function(a){return nl(wh,a)},te=pu;Jp.forEach(function(a){te[a]=pu(a)});const qo={Wrapper:te.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:te.header`
        /* border: 1px solid #f00; */
        height: 60px;
        flex-shrink: 0;
    `,Main:te.main`
        /* border: 1px solid #f00; */
        flex: 1;
        overflow-y: auto;
        position: relative;

        .contentWrapper {
            /* border: 1px solid #f00; */
            min-height: 100%;
            max-width: 1440px;
            margin: auto;
            display: flex;
            flex-direction: column;
            padding: 15px;

            .category {
                margin: 30px 0 15px 0;
            }
        }

        .footerWrapper {
            /* border: 1px solid #f00; */
            /* min-height: 300px; */
            flex-shrink: 0;
        }
    `};var uu={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},zp=yr.createContext&&yr.createContext(uu),kh=["attr","size","title"];function Sh(a,c){if(a==null)return{};var l=Th(a,c),p,m;if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(m=0;m<g.length;m++)p=g[m],!(c.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(a,p)&&(l[p]=a[p])}return l}function Th(a,c){if(a==null)return{};var l={};for(var p in a)if(Object.prototype.hasOwnProperty.call(a,p)){if(c.indexOf(p)>=0)continue;l[p]=a[p]}return l}function Oa(){return Oa=Object.assign?Object.assign.bind():function(a){for(var c=1;c<arguments.length;c++){var l=arguments[c];for(var p in l)Object.prototype.hasOwnProperty.call(l,p)&&(a[p]=l[p])}return a},Oa.apply(this,arguments)}function Ep(a,c){var l=Object.keys(a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);c&&(p=p.filter(function(m){return Object.getOwnPropertyDescriptor(a,m).enumerable})),l.push.apply(l,p)}return l}function Pa(a){for(var c=1;c<arguments.length;c++){var l=arguments[c]!=null?arguments[c]:{};c%2?Ep(Object(l),!0).forEach(function(p){Ch(a,p,l[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):Ep(Object(l)).forEach(function(p){Object.defineProperty(a,p,Object.getOwnPropertyDescriptor(l,p))})}return a}function Ch(a,c,l){return c=Mh(c),c in a?Object.defineProperty(a,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[c]=l,a}function Mh(a){var c=Ih(a,"string");return typeof c=="symbol"?c:c+""}function Ih(a,c){if(typeof a!="object"||!a)return a;var l=a[Symbol.toPrimitive];if(l!==void 0){var p=l.call(a,c);if(typeof p!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(a)}function xu(a){return a&&a.map((c,l)=>yr.createElement(c.tag,Pa({key:l},c.attr),xu(c.child)))}function A(a){return c=>yr.createElement(Rh,Oa({attr:Pa({},a.attr)},c),xu(a.child))}function Rh(a){var c=l=>{var{attr:p,size:m,title:g}=a,b=Sh(a,kh),k=m||l.size||"1em",h;return l.className&&(h=l.className),a.className&&(h=(h?h+" ":"")+a.className),yr.createElement("svg",Oa({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,p,b,{className:h,style:Pa(Pa({color:a.color||l.color},l.style),a.style),height:k,width:k,xmlns:"http://www.w3.org/2000/svg"}),g&&yr.createElement("title",null,g),a.children)};return zp!==void 0?yr.createElement(zp.Consumer,null,l=>c(l)):c(uu)}function ms(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(a)}function Wa(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(a)}function Lh(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"10",x2:"6",y2:"10"},child:[]},{tag:"line",attr:{x1:"21",y1:"6",x2:"3",y2:"6"},child:[]},{tag:"line",attr:{x1:"21",y1:"14",x2:"3",y2:"14"},child:[]},{tag:"line",attr:{x1:"18",y1:"18",x2:"6",y2:"18"},child:[]}]})(a)}function it(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(a)}function zh(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(a)}function Ha(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(a)}function ge(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(a)}function Ie(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(a)}function dt(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(a)}function hs(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(a)}function Eh(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(a)}function sl(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"},child:[]}]})(a)}function Op(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"},child:[]}]})(a)}function fs(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(a)}function Qo(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(a)}function Pp(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"},child:[]}]})(a)}function tl(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(a)}function gs(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(a)}function mu(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(a)}function _p(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"4"},child:[]},{tag:"line",attr:{x1:"1.05",y1:"12",x2:"7",y2:"12"},child:[]},{tag:"line",attr:{x1:"17.01",y1:"12",x2:"22.96",y2:"12"},child:[]}]})(a)}function Oh(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M6 21V9a9 9 0 0 0 9 9"},child:[]}]})(a)}function gn(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(a)}function On(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(a)}function Ph(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(a)}function _h(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"},child:[]}]})(a)}function Ne(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(a)}function vs(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"3",y1:"9",x2:"21",y2:"9"},child:[]},{tag:"line",attr:{x1:"9",y1:"21",x2:"9",y2:"9"},child:[]}]})(a)}function xl(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(a)}function Bh(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(a)}function Ah(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"18"},child:[]},{tag:"line",attr:{x1:"16",y1:"6",x2:"16",y2:"22"},child:[]}]})(a)}function Dh(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"polyline",attr:{points:"9 21 3 21 3 15"},child:[]},{tag:"line",attr:{x1:"21",y1:"3",x2:"14",y2:"10"},child:[]},{tag:"line",attr:{x1:"3",y1:"21",x2:"10",y2:"14"},child:[]}]})(a)}function Fh(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"},child:[]}]})(a)}function Uh(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"8",y1:"21",x2:"16",y2:"21"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12",y2:"21"},child:[]}]})(a)}function Wh(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(a)}function hu(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"5 9 2 12 5 15"},child:[]},{tag:"polyline",attr:{points:"9 5 12 2 15 5"},child:[]},{tag:"polyline",attr:{points:"15 19 12 22 9 19"},child:[]},{tag:"polyline",attr:{points:"19 9 22 12 19 15"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"2",x2:"12",y2:"22"},child:[]}]})(a)}function Bp(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"},child:[]},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(a)}function Hh(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polygon",attr:{points:"10 8 16 12 10 16 10 8"},child:[]}]})(a)}function $h(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"1 4 1 10 7 10"},child:[]},{tag:"polyline",attr:{points:"23 20 23 14 17 14"},child:[]},{tag:"path",attr:{d:"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"},child:[]}]})(a)}function Pn(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"polyline",attr:{points:"1 20 1 14 7 14"},child:[]},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"},child:[]}]})(a)}function Ap(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(a)}function Yo(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"4",x2:"8.12",y2:"15.88"},child:[]},{tag:"line",attr:{x1:"14.47",y1:"14.48",x2:"20",y2:"20"},child:[]},{tag:"line",attr:{x1:"8.12",y1:"8.12",x2:"12",y2:"12"},child:[]}]})(a)}function al(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(a)}function Gh(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"5",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"12",r:"3"},child:[]},{tag:"circle",attr:{cx:"18",cy:"19",r:"3"},child:[]},{tag:"line",attr:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"},child:[]},{tag:"line",attr:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"},child:[]}]})(a)}function fn(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(a)}function Vh(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(a)}function pt(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"12",y1:"18",x2:"12.01",y2:"18"},child:[]}]})(a)}function qh(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(a)}function Qh(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"2",width:"16",height:"20",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"12",y1:"18",x2:"12.01",y2:"18"},child:[]}]})(a)}function il(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"},child:[]},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"},child:[]}]})(a)}function ml(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(a)}function Dp(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 7 4 4 20 4 20 7"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"15",y2:"20"},child:[]},{tag:"line",attr:{x1:"12",y1:"4",x2:"12",y2:"20"},child:[]}]})(a)}function Ce(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(a)}const Fp={Wrapper:te.header`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;

        border-bottom: 1px solid var(--color-border);

        background: color-mix(
            in srgb,
            var(--color-bg) 92%,
            var(--color-surface)
        );

        position: sticky;
        top: 0;
        z-index: 50;
        height: 64px;

        box-shadow: 0 10px 28px var(--color-shadow);
        overflow: hidden;

        /* Frontend vibe: layout grid + subtle UI glow */
        &::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background-image:
                radial-gradient(
                    700px 180px at 20% 0%,
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                    transparent 65%
                ),
                repeating-linear-gradient(
                    90deg,
                    color-mix(in srgb, var(--color-border) 18%, transparent) 0px,
                    color-mix(in srgb, var(--color-border) 18%, transparent) 1px,
                    transparent 1px,
                    transparent 28px
                );

            opacity: 0.65;

            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0)
            );
        }

        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            pointer-events: none;
            background: linear-gradient(
                90deg,
                transparent,
                var(--color-primary),
                var(--color-accent),
                transparent
            );
            opacity: 0.9;
        }
    `,Main:te.div`
        width: 100%;
        max-width: 1440px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        position: relative;
        z-index: 1;

        .leftSide {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoNameWrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoWrapper {
            height: 50px;
            width: 50px;
            border-radius: 14px;
            position: relative;
            overflow: hidden;
            flex: 0 0 auto;
            padding: 6px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            border: 1px solid var(--color-border);

            box-shadow:
                0 0 0 1px
                    color-mix(in srgb, var(--color-primary) 10%, transparent),
                0 12px 24px var(--color-shadow);

            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
                display: block;
                transition: opacity 180ms ease;
            }

            .logoSkeleton {
                position: absolute;
                inset: 0;
                background: var(--color-surface-2);
                opacity: 0.8;
            }
        }

        .nameWrapper {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;

            .title {
                color: var(--color-text-primary);
                font-weight: 900;
                letter-spacing: 0.2px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .subTitle {
                color: var(--color-text-muted);
                font-size: 12px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            @media (width < 560px) {
                .subTitle {
                    display: none;
                }
            }

            @media (width < 420px) {
                display: none;
            }
        }

        .miniStats {
            display: flex;
            align-items: center;
            gap: 8px;
            flex: 0 0 auto;

            @media (width < 860px) {
                display: none;
            }
        }

        .stat {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 7px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: var(--color-surface-2);

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 800;

            .sIcon {
                color: var(--color-primary);
                display: inline-flex;
            }

            .sIcon svg {
                width: 14px;
                height: 14px;
            }
        }

        .rightSide {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .themeToggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 14px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            border: 1px solid var(--color-border);
            color: var(--color-text-primary);

            .icon {
                font-size: 18px;
                color: var(--color-primary);
            }

            .label {
                font-size: 13px;
                font-weight: 800;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
            }

            @media (width < 420px) {
                .label {
                    display: none;
                }
            }
        }
    `},Up="frontend-engineering-core-notes-theme",Yh=()=>{const[a,c]=N.useState(!1),[l,p]=N.useState("dark");N.useEffect(()=>{const k=localStorage.getItem(Up)||"dark";p(k),k==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),N.useEffect(()=>{l==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem(Up,l)},[l]);const m=N.useMemo(()=>l==="light"?"dark":"light",[l]),g=()=>{p(m)};return e.jsx(Fp.Wrapper,{children:e.jsxs(Fp.Main,{children:[e.jsxs("div",{className:"leftSide",children:[e.jsxs("div",{className:"logoNameWrapper",children:[e.jsxs("div",{className:"logoWrapper",children:[!a&&e.jsx("div",{className:"logoSkeleton"}),e.jsx("img",{src:"/frontend-engineering-core-notes/logo.png",alt:"frontend-engineering-core-notes",onLoad:()=>c(!0),style:{opacity:a?1:0}})]}),e.jsxs("div",{className:"nameWrapper",children:[e.jsx("div",{className:"title",children:"frontend-engineering-core-notes"}),e.jsx("div",{className:"subTitle",children:"HTML, CSS, rendering, React internals, performance"})]})]}),e.jsxs("div",{className:"miniStats","aria-label":"Frontend focus areas",children:[e.jsxs("span",{className:"stat",children:[e.jsx("span",{className:"sIcon",children:e.jsx(gn,{})}),e.jsx("span",{className:"sText",children:"Browser"})]}),e.jsxs("span",{className:"stat",children:[e.jsx("span",{className:"sIcon",children:e.jsx(vs,{})}),e.jsx("span",{className:"sText",children:"Layout"})]}),e.jsxs("span",{className:"stat",children:[e.jsx("span",{className:"sIcon",children:e.jsx(Ne,{})}),e.jsx("span",{className:"sText",children:"React"})]})]})]}),e.jsx("div",{className:"rightSide",children:e.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:g,"aria-label":`Switch to ${m} theme`,title:`Switch to ${m}`,children:[e.jsx("span",{className:"icon",children:l==="light"?e.jsx(Wh,{}):e.jsx(qh,{})}),e.jsx("span",{className:"label",children:l==="light"?"Light":"Dark"})]})})]})})};function Kh(a){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"},child:[]}]})(a)}function Jh(a){return A({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(a)}function Xh(a){return A({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(a)}function Zh(a){return A({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(a)}function ef(a){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 194.8c0 101.3-82.4 183.8-183.8 183.8-101.7 0-184.4-82.4-184.4-183.8 0-101.6 82.7-184.3 184.4-184.3C429.6 10.5 512 93.2 512 194.8zM0 501.5h90v-491H0v491z"},child:[]}]})(a)}function rf(a){return A({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(a)}const nf={Wrapper:te.footer`
        display: grid;
        gap: 20px;
        padding: 24px 15px 30px;
        border-top: 1px solid var(--color-border);
        color: var(--color-text-muted);

        .footerIntro,
        .footerBottom {
            width: min(1120px, 100%);
            margin: 0 auto;
        }

        .footerIntro {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .footerIntro img {
            width: 46px;
            height: 46px;
            padding: 6px;
            object-fit: contain;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-surface-2);
        }

        .footerIntro strong {
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .footerIntro p {
            margin-top: 3px;
            font-size: 12px;
        }

        .footerBottom {
            padding-top: 16px;
            border-top: 1px solid var(--color-border);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            flex-wrap: wrap;
            font-size: 12px;
        }

        .footerBottom p {
            margin: 0;
        }

        .footerBottom p a {
            color: var(--color-text-primary);
            font-weight: 800;
        }

        .footerLinks {
            display: flex;
            align-items: center;
            gap: 7px;
            flex-wrap: wrap;
        }

        .footerLinks a {
            width: 34px;
            height: 34px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--color-border);
            border-radius: 9px;
            color: var(--color-text-muted);
            transition: border-color 140ms ease, box-shadow 140ms ease,
                color 140ms ease;
        }

        .footerLinks a:hover,
        .footerLinks a:focus-visible {
            border-color: var(--color-primary);
            box-shadow: 0 0 16px color-mix(in srgb, var(--color-primary) 24%, transparent);
            color: var(--color-text-primary);
            outline: none;
        }

        @media (width < 620px) {
            .footerBottom {
                align-items: flex-start;
                flex-direction: column;
            }
        }
    `},sf=[["Portfolio","https://www.ashishranjan.net/",gn],["GitHub","https://github.com/a2rp",Xh],["CodePen","https://codepen.io/ash1198",Kh],["LinkedIn","https://www.linkedin.com/in/aashishranjan",Zh],["Facebook","https://www.facebook.com/theash.ashish/",Jh],["YouTube","https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",rf],["Email","mailto:ash.ranjan09@gmail.com",Bh],["Support","https://a2rp-donation-page.netlify.app/",Ph],["Buy Me a Coffee","https://buymeacoffee.com/a2rp",Eh],["Patreon","https://www.patreon.com/a2rp",ef]],tf=()=>{const a=new Date().getFullYear();return e.jsxs(nf.Wrapper,{children:[e.jsxs("div",{className:"footerIntro",children:[e.jsx("img",{src:"/frontend-engineering-core-notes/logo.png",alt:"Ashish Ranjan logo"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Frontend Engineering Core Notes"}),e.jsx("p",{children:"Clear revision notes for browser, layout, React, and performance concepts."})]})]}),e.jsxs("div",{className:"footerBottom",children:[e.jsxs("p",{children:["Copyright © ",a," ",e.jsx("a",{href:"https://www.ashishranjan.net/",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]}),e.jsx("nav",{className:"footerLinks","aria-label":"Social and support links",children:sf.map(([c,l,p])=>e.jsx("a",{href:l,target:l.startsWith("mailto:")?void 0:"_blank",rel:l.startsWith("mailto:")?void 0:"noopener noreferrer","aria-label":c,title:c,children:N.createElement(p,{"aria-hidden":!0})},c))})]})]})},af={Wrapper:te.section`
        display: flex;
        justify-content: center;
        padding: 80px 20px 60px;

        .inner {
            width: 100%;
            max-width: 1440px;
        }

        .top {
            max-width: 900px;
            margin-bottom: 50px;
        }

        .title {
            font-size: 34px;
            font-weight: 900;
            line-height: 1.2;
            margin-bottom: 16px;
            color: var(--color-text-primary);
        }

        .subtitle {
            font-size: 16px;
            color: var(--color-text-secondary);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 24px;
        }

        .card {
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border: 1px solid var(--color-border);
            border-radius: 18px;
            padding: 24px;
            transition:
                transform 200ms ease,
                border-color 200ms ease,
                box-shadow 200ms ease;
            box-shadow: 0 12px 28px var(--color-shadow);

            display: flex;
            flex-direction: column;
            gap: 12px;

            &:hover {
                transform: translateY(-4px);
                border-color: var(--color-primary);
            }

            h3 {
                font-size: 18px;
                font-weight: 800;
                color: var(--color-text-primary);
            }

            p {
                font-size: 14px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;

            background: color-mix(
                in srgb,
                var(--color-primary) 14%,
                transparent
            );

            color: var(--color-primary);
            font-size: 20px;
        }

        .bottomNote {
            margin-top: 60px;
            font-size: 14px;
            color: var(--color-text-muted);
            text-align: center;
        }

        @media (max-width: 768px) {
            padding: 60px 16px 40px;

            .title {
                font-size: 26px;
            }
        }
    `},of=()=>e.jsx(af.Wrapper,{id:"about",children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"top",children:[e.jsx("h1",{className:"title",children:"Frontend engineering - from markup to rendering"}),e.jsx("p",{className:"subtitle",children:"This project focuses on how browsers think, how layouts form, how React updates the UI, and how performance is shaped by architecture decisions."})]}),e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"icon",children:e.jsx(gn,{})}),e.jsx("h3",{children:"Browser mental model"}),e.jsx("p",{children:"Understand how HTML becomes DOM, CSS becomes CSSOM, and how both combine to form the render tree."})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"icon",children:e.jsx(vs,{})}),e.jsx("h3",{children:"Layout systems"}),e.jsx("p",{children:"Deep clarity on Flexbox, Grid, positioning, responsive design and how layout recalculations impact performance."})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"icon",children:e.jsx(Ne,{})}),e.jsx("h3",{children:"React internals"}),e.jsx("p",{children:"Virtual DOM, reconciliation, hooks lifecycle, context propagation and update batching."})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"icon",children:e.jsx(ml,{})}),e.jsx("h3",{children:"Performance engineering"}),e.jsx("p",{children:"Critical rendering path, reflow vs repaint, code splitting, memoization and bundle strategy."})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"icon",children:e.jsx(hs,{})}),e.jsx("h3",{children:"Architecture thinking"}),e.jsx("p",{children:"Component structure, scalability patterns, and frontend systems that survive real production traffic."})]})]}),e.jsx("div",{className:"bottomNote",children:"This is not just syntax revision. This is understanding how the browser actually paints pixels."})]})}),lf=220,cf={Wrapper:te.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 22px 16px 10px;

        .top {
            padding: 10px 2px 12px;
        }

        .title {
            font-size: 22px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .sub {
            margin-top: 8px;
            max-width: 1020px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 900;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
            box-shadow: 0 18px 42px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 14px;

            border: 0;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;

            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;

                background-image:
                    radial-gradient(
                        700px 240px at 15% 10%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 10%,
                            transparent
                        ),
                        transparent 60%
                    ),
                    repeating-linear-gradient(
                        90deg,
                        color-mix(in srgb, var(--color-border) 18%, transparent)
                            0px,
                        color-mix(in srgb, var(--color-border) 18%, transparent)
                            1px,
                        transparent 1px,
                        transparent 22px
                    );
                opacity: 0.72;

                mask-image: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.15)
                );
            }

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 24%,
                    transparent
                );
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .accIcon {
            height: 40px;
            width: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                width: 18px;
                height: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }
        }

        .accText {
            min-width: 0;
        }

        .accTitle {
            font-size: 14px;
            font-weight: 950;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accHint {
            margin-top: 3px;
            font-size: 12.5px;
            font-weight: 750;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .chev {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            width: 38px;
            height: 38px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );

            color: var(--color-text-secondary);
            box-shadow: 0 12px 26px var(--color-shadow);

            transition: transform 160ms ease;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .chev.open {
            transform: rotate(180deg);
        }

        /* load on click + smooth open close */
        .panel {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            border-top: 1px solid var(--color-border);
            transition: grid-template-rows ${lf}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            min-height: 0;
            padding: 14px;
        }

        .sec {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            background: color-mix(in srgb, var(--color-surface-2) 56%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
            margin-bottom: 12px;
            overflow: hidden;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;
                background-image: radial-gradient(
                    800px 250px at 10% 0%,
                    color-mix(in srgb, var(--color-primary) 9%, transparent),
                    transparent 62%
                );
                opacity: 0.9;
            }

            > * {
                position: relative;
                z-index: 1;
            }
        }

        .h3 {
            font-size: 15px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-weight: 650;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .miniTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .miniText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .termGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .term {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .tHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .tag {
            display: inline-flex;
            align-items: center;
            padding: 6px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );

            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
        }

        .tBody {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-weight: 650;
        }

        .callout {
            margin-top: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);
        }

        .cIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );
            color: var(--color-primary);

            svg {
                width: 16px;
                height: 16px;
            }
        }

        .cTitle {
            font-weight: 950;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cSub {
            margin-top: 4px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .exampleBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .exTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .code {
            padding: 12px;
            margin: 0;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .miniList {
            margin-top: 12px;
            display: grid;
            gap: 8px;
        }

        .row {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            @media (width < 720px) {
                flex-direction: column;
            }
        }

        .label {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
        }

        .value {
            color: var(--color-text-secondary);
            font-weight: 750;
            line-height: 1.6;
        }

        .abbrGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .abbr {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 60%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            line-height: 1.6;
        }

        .practice {
            margin-top: 10px;
            display: grid;
            gap: 8px;
        }

        .pRow {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            @media (width < 720px) {
                flex-direction: column;
            }
        }

        .checkGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 920px) {
                grid-template-columns: 1fr;
            }
        }

        .check {
            display: flex;
            align-items: center;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.55;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-primary);
                flex: 0 0 auto;
            }
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            letter-spacing: 0.1px;
            color: color-mix(
                in srgb,
                var(--color-primary) 76%,
                var(--color-text-primary)
            );
        }

        .finalNote {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.7;
            box-shadow: 0 18px 40px var(--color-shadow);
        }
    `},df=220,pf=()=>{const[a,c]=N.useState(!1),[l,p]=N.useState(!1),[m,g]=N.useState(!1),b=N.useMemo(()=>({title:"HTML deep",sub:"HTML is not just tags. It is document structure, meaning (semantics), accessibility, SEO basics, and predictable behavior for browsers, assistive tech, and search engines."}),[]),k=()=>c(h=>!h);return N.useEffect(()=>{let h=null;return a?(p(!0),requestAnimationFrame(()=>g(!0))):(g(!1),h=window.setTimeout(()=>p(!1),df)),()=>{h&&window.clearTimeout(h)}},[a]),e.jsxs(cf.Wrapper,{id:"html-deep",children:[e.jsxs("div",{className:"top",children:[e.jsx("h2",{className:"title",children:"HTML deep"}),e.jsx("p",{className:"sub",children:b.sub}),e.jsxs("div",{className:"pillRow","aria-label":"At a glance",children:[e.jsxs("span",{className:"pill",children:[e.jsx(il,{})," Semantics"]}),e.jsxs("span",{className:"pill",children:[e.jsx(fn,{})," Accessibility"]}),e.jsxs("span",{className:"pill",children:[e.jsx(al,{})," SEO"]}),e.jsxs("span",{className:"pill",children:[e.jsx(gs,{})," Document structure"]})]})]}),e.jsxs("div",{className:"accordion",children:[e.jsxs("button",{type:"button",className:"accBtn",onClick:k,"aria-expanded":a,"aria-controls":"html-deep-panel",children:[e.jsxs("div",{className:"accLeft",children:[e.jsx("span",{className:"accIcon",children:e.jsx(gn,{})}),e.jsxs("div",{className:"accText",children:[e.jsx("div",{className:"accTitle",children:b.title}),e.jsxs("div",{className:"accHint",children:["Click to ",a?"collapse":"expand"," with beginner explanations and practical examples"]})]})]}),e.jsx("span",{className:`chev ${a?"open":""}`,children:e.jsx(Ie,{})})]}),l&&e.jsx("div",{id:"html-deep-panel",className:`panel ${m?"open":""}`,children:e.jsxs("div",{className:"panelInner",children:[e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"1) What HTML really is"}),e.jsxs("p",{className:"p",children:[e.jsx("strong",{children:"HTML"})," means"," ",e.jsx("strong",{children:"HyperText Markup Language"}),". It describes the structure and meaning of a document, so the browser can build a"," ",e.jsx("strong",{children:"DOM"})," (Document Object Model) tree and render it."]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Markup"}),e.jsx("p",{className:"miniText",children:'You are marking up content with meaning like "this is navigation", "this is an article", "this is a heading".'})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Not styling"}),e.jsx("p",{className:"miniText",children:"HTML defines structure. CSS styles it. JavaScript adds behavior."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"2) Semantic elements"}),e.jsxs("p",{className:"p",children:[e.jsx("strong",{children:"Semantic HTML"})," means using the right element for the job. This helps:",e.jsx("br",{}),"- accessibility tools understand the page",e.jsx("br",{}),"- SEO understand content sections",e.jsx("br",{}),"- devs maintain code easily"]}),e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ge,{})}),e.jsxs("div",{className:"cText",children:[e.jsx("div",{className:"cTitle",children:"Simple rule"}),e.jsx("div",{className:"cSub",children:"If you can describe the purpose in one word, there is usually a semantic tag for it."})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Good structure example"}),e.jsx("pre",{className:"code",children:`<header>
  <nav aria-label="Primary">
    <a href="/">Home</a>
    <a href="/docs">Docs</a>
  </nav>
</header>

<main>
  <article>
    <h1>HTML deep notes</h1>
    <p>Use semantic elements for meaning.</p>
  </article>

  <aside>
    <h2>Quick tips</h2>
    <p>Prefer button for actions and a for navigation.</p>
  </aside>
</main>

<footer>
  <small>Copyright 2026</small>
</footer>`})]}),e.jsxs("div",{className:"miniList",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"header"}),e.jsx("span",{className:"value",children:"Page or section header"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"nav"}),e.jsx("span",{className:"value",children:"Main navigation links"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"main"}),e.jsx("span",{className:"value",children:"Primary content of the page"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"article"}),e.jsx("span",{className:"value",children:"Self-contained content unit"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"section"}),e.jsx("span",{className:"value",children:"Themed grouping of content"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"aside"}),e.jsx("span",{className:"value",children:"Related content, sidebar, notes"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"footer"}),e.jsx("span",{className:"value",children:"Page or section footer"})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"3) Accessibility (A11y)"}),e.jsxs("p",{className:"p",children:[e.jsx("strong",{children:"A11y"})," is short for"," ",e.jsx("strong",{children:"Accessibility"})," (a + 11 letters + y). It means your site works for keyboard users, screen reader users, and users with different vision and motor abilities."]}),e.jsxs("div",{className:"termGrid",children:[e.jsxs("div",{className:"term",children:[e.jsxs("div",{className:"tHead",children:[e.jsx("span",{className:"mono",children:"button"}),e.jsx("span",{className:"tag",children:"Action"})]}),e.jsxs("p",{className:"tBody",children:["Use"," ",e.jsx("span",{className:"mono",children:"button"})," ","for actions like submit, open modal, toggle theme. It supports keyboard and accessibility by default."]})]}),e.jsxs("div",{className:"term",children:[e.jsxs("div",{className:"tHead",children:[e.jsx("span",{className:"mono",children:"a"}),e.jsx("span",{className:"tag",children:"Navigation"})]}),e.jsxs("p",{className:"tBody",children:["Use ",e.jsx("span",{className:"mono",children:"a"})," ","for navigation. If it changes the URL, it is a link."]})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Labels and alt text"}),e.jsx("pre",{className:"code",children:`<!-- Good label -->
<label for="email">Email</label>
<input id="email" type="email" autocomplete="email" />

<!-- Good image alt -->
<img src="logo.png" alt="A2RP logo" />

<!-- Decorative image -->
<img src="wave.png" alt="" aria-hidden="true" />`})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"ARIA (Accessible Rich Internet Applications)"}),e.jsx("pre",{className:"code",children:`<!-- Use ARIA when you cannot express meaning with HTML alone -->
<button aria-expanded="false" aria-controls="menu">
  Open menu
</button>

<nav id="menu" hidden>
  <a href="/html">HTML</a>
  <a href="/css">CSS</a>
</nav>`})]}),e.jsx("div",{className:"finalNote",children:"Best accessibility is mostly free when you use correct HTML elements. ARIA is a helper, not a replacement."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"4) SEO fundamentals"}),e.jsxs("p",{className:"p",children:[e.jsx("strong",{children:"SEO"})," means"," ",e.jsx("strong",{children:"Search Engine Optimization"}),". For most apps, the biggest wins come from:",e.jsx("br",{}),"- correct title and meta description",e.jsx("br",{}),"- correct heading structure",e.jsx("br",{}),"- semantic content",e.jsx("br",{}),"- good links and readable URLs"]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Head tags example"}),e.jsx("pre",{className:"code",children:`<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <title>Frontend Engineering Core Notes</title>
  <meta name="description" content="At-a-glance notes on HTML, CSS, browser rendering, and React internals." />

  <link rel="canonical" href="https://a2rp.github.io/frontend-engineering-core-notes/" />
</head>`})]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Headings"}),e.jsxs("p",{className:"miniText",children:["Use one"," ",e.jsx("span",{className:"mono",children:"h1"})," for main page topic. Use"," ",e.jsx("span",{className:"mono",children:"h2"}),","," ",e.jsx("span",{className:"mono",children:"h3"})," for sections. Do not skip levels for styling."]})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Links"}),e.jsxs("p",{className:"miniText",children:['Use descriptive link text. Avoid "click here". Example:'," ",e.jsx("span",{className:"mono",children:"Read HTML deep notes"}),"."]})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"5) Forms and validation basics"}),e.jsx("p",{className:"p",children:"Forms are a big part of real products. Prefer native input types because they give you better keyboards on mobile and basic validation for free."}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Practical form example"}),e.jsx("pre",{className:"code",children:`<form>
  <label for="phone">Phone</label>
  <input id="phone" type="tel" autocomplete="tel" />

  <label for="age">Age</label>
  <input id="age" type="number" min="1" max="120" />

  <button type="submit">Save</button>
</form>`})]}),e.jsxs("div",{className:"miniList",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:'type="email"'}),e.jsx("span",{className:"value",children:"Email keyboard + basic checks"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:'type="tel"'}),e.jsx("span",{className:"value",children:"Phone keyboard"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"required"}),e.jsx("span",{className:"value",children:"Blocks empty submission"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"min max"}),e.jsx("span",{className:"value",children:"Numeric range constraints"})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"6) Terms and full forms"}),e.jsxs("div",{className:"abbrGrid",children:[e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"HTML"})," - HyperText Markup Language"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"DOM"})," - Document Object Model"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"A11y"})," - Accessibility"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"ARIA"})," - Accessible Rich Internet Applications"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"SEO"})," - Search Engine Optimization"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"URL"})," - Uniform Resource Locator"]})]}),e.jsx("div",{className:"finalNote",children:"HTML deep is about meaning, structure, and defaults. When the base is correct, CSS and React become easier and performance improves."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Mini practice"}),e.jsxs("div",{className:"practice",children:[e.jsxs("div",{className:"pRow",children:[e.jsx("span",{className:"label",children:"Try"}),e.jsx("span",{className:"value",children:'Make a card that has a heading, description, and a "Read more" link. Use semantic tags and proper heading level.'})]}),e.jsxs("div",{className:"pRow",children:[e.jsx("span",{className:"label",children:"Hint"}),e.jsxs("span",{className:"value",children:["Consider"," ",e.jsx("span",{className:"mono",children:"article"})," ","+ ",e.jsx("span",{className:"mono",children:"h2"})," +"," ",e.jsx("span",{className:"mono",children:"p"})," +"," ",e.jsx("span",{className:"mono",children:"a"}),"."]})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Quick checklist"}),e.jsxs("div",{className:"checkGrid",children:[e.jsxs("div",{className:"check",children:[e.jsx(il,{})," Use semantic elements"]}),e.jsxs("div",{className:"check",children:[e.jsx(fn,{})," Labels and keyboard support"]}),e.jsxs("div",{className:"check",children:[e.jsx(al,{})," Proper title and meta description"]}),e.jsxs("div",{className:"check",children:[e.jsx(xl,{})," Descriptive link text"]}),e.jsxs("div",{className:"check",children:[e.jsx(Ha,{})," Use correct input types"]})]})]})]})})]})]})},uf=220,xf={Wrapper:te.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 20px 16px;
    `,Top:te.div``,WrapperInner:te.div``,Accordion:te.div``,Wrapper:te.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 20px 16px;

        .top {
            margin-bottom: 16px;
        }

        .title {
            font-size: 22px;
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .sub {
            margin-top: 8px;
            color: var(--color-text-secondary);
        }

        .pillRow {
            margin-top: 10px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            font-size: 12px;
            font-weight: 700;
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
            background: var(--color-surface);
        }

        .accBtn {
            width: 100%;
            padding: 14px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: transparent;
            border: none;
            cursor: pointer;
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .accIcon {
            width: 36px;
            height: 36px;
            border-radius: 10px;
            background: var(--color-surface-2);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .accTitle {
            font-weight: 800;
        }

        .accHint {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .chev {
            transition: transform 200ms ease;
        }

        .chev.open {
            transform: rotate(180deg);
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows ${uf}ms ease;
            overflow: hidden;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            padding: 16px;
        }

        .sec {
            margin-bottom: 20px;
        }

        .sec h3 {
            margin-bottom: 8px;
        }

        .example {
            background: var(--color-code-bg);
            padding: 12px;
            border-radius: 10px;
            border: 1px solid var(--color-code-border);
            margin-top: 8px;
        }

        .example pre {
            font-size: 12px;
            line-height: 1.6;
            overflow-x: auto;
        }

        .listGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 10px;
        }

        .item {
            padding: 10px;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-surface-2);
        }

        ul {
            padding-left: 18px;
            list-style: disc;
        }
    `},mf=220,hf=()=>{const[a,c]=N.useState(!1),[l,p]=N.useState(!1),[m,g]=N.useState(!1),b=N.useMemo(()=>({title:"Semantic elements",sub:"Semantic HTML elements describe the meaning of content instead of just how it looks. They improve accessibility, SEO, and maintainability."}),[]),k=()=>c(h=>!h);return N.useEffect(()=>{let h=null;return a?(p(!0),requestAnimationFrame(()=>g(!0))):(g(!1),h=window.setTimeout(()=>p(!1),mf)),()=>{h&&window.clearTimeout(h)}},[a]),e.jsxs(xf.Wrapper,{id:"semantic-elements",children:[e.jsxs("div",{className:"top",children:[e.jsx("h2",{className:"title",children:"Semantic elements"}),e.jsx("p",{className:"sub",children:b.sub}),e.jsxs("div",{className:"pillRow",children:[e.jsxs("span",{className:"pill",children:[e.jsx(il,{})," Meaning"]}),e.jsxs("span",{className:"pill",children:[e.jsx(ge,{})," Accessibility"]}),e.jsxs("span",{className:"pill",children:[e.jsx(gn,{})," SEO"]})]})]}),e.jsxs("div",{className:"accordion",children:[e.jsxs("button",{className:"accBtn",onClick:k,"aria-expanded":a,children:[e.jsxs("div",{className:"accLeft",children:[e.jsx("span",{className:"accIcon",children:e.jsx(Ne,{})}),e.jsxs("div",{children:[e.jsx("div",{className:"accTitle",children:b.title}),e.jsxs("div",{className:"accHint",children:["Click to ",a?"collapse":"expand"," detailed explanation with examples"]})]})]}),e.jsx("span",{className:`chev ${a?"open":""}`,children:e.jsx(Ie,{})})]}),l&&e.jsx("div",{className:`panel ${m?"open":""}`,children:e.jsxs("div",{className:"panelInner",children:[e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"What is semantic HTML?"}),e.jsxs("p",{children:["A semantic element clearly describes its meaning to both the browser and the developer. For example,"," ",e.jsx("strong",{children:"header"})," means top section,",e.jsx("strong",{children:"nav"})," means navigation,",e.jsx("strong",{children:"article"})," means independent content."]}),e.jsx("div",{className:"example",children:e.jsx("pre",{children:`<!-- Non semantic -->
<div class="top"></div>

<!-- Semantic -->
<header></header>`})})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"Core semantic elements"}),e.jsxs("div",{className:"listGrid",children:[e.jsxs("div",{className:"item",children:[e.jsx("strong",{children:"header"}),e.jsx("p",{children:"Top section of page or section."})]}),e.jsxs("div",{className:"item",children:[e.jsx("strong",{children:"nav"}),e.jsx("p",{children:"Navigation links container."})]}),e.jsxs("div",{className:"item",children:[e.jsx("strong",{children:"main"}),e.jsx("p",{children:"Main content of the document. Only one per page."})]}),e.jsxs("div",{className:"item",children:[e.jsx("strong",{children:"section"}),e.jsx("p",{children:"Thematic grouping of content."})]}),e.jsxs("div",{className:"item",children:[e.jsx("strong",{children:"article"}),e.jsx("p",{children:"Self-contained content like blog post or news."})]}),e.jsxs("div",{className:"item",children:[e.jsx("strong",{children:"aside"}),e.jsx("p",{children:"Related content, sidebar, ads."})]}),e.jsxs("div",{className:"item",children:[e.jsx("strong",{children:"footer"}),e.jsx("p",{children:"Bottom section of page or section."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"Real world layout example"}),e.jsx("div",{className:"example",children:e.jsx("pre",{children:`<header>
  <nav>
    <a href="/">Home</a>
    <a href="/docs">Docs</a>
  </nav>
</header>

<main>
  <article>
    <h1>Semantic HTML</h1>
    <p>Meaning matters.</p>
  </article>

  <aside>
    Related links
  </aside>
</main>

<footer>
  Copyright 2026
</footer>`})})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"Why semantic matters"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Screen readers understand structure"}),e.jsx("li",{children:"Search engines rank content better"}),e.jsx("li",{children:"Code becomes self explanatory"}),e.jsx("li",{children:"Better long term maintainability"})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"Important rule"}),e.jsx("p",{children:"If an element has meaning, use the semantic tag. Use div only when no semantic element fits."})]})]})})]})]})},ff=220,gf={Wrapper:te.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 22px 16px 10px;

        .top {
            padding: 10px 2px 12px;
        }

        .title {
            font-size: 22px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .sub {
            margin-top: 8px;
            max-width: 1020px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 900;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
            box-shadow: 0 18px 42px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 14px;

            border: 0;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;

            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;

                background-image:
                    radial-gradient(
                        700px 240px at 15% 10%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 10%,
                            transparent
                        ),
                        transparent 60%
                    ),
                    repeating-linear-gradient(
                        90deg,
                        color-mix(in srgb, var(--color-border) 18%, transparent)
                            0px,
                        color-mix(in srgb, var(--color-border) 18%, transparent)
                            1px,
                        transparent 1px,
                        transparent 22px
                    );
                opacity: 0.72;

                mask-image: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.15)
                );
            }

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 24%,
                    transparent
                );
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .accIcon {
            height: 40px;
            width: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                width: 18px;
                height: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }
        }

        .accText {
            min-width: 0;
        }

        .accTitle {
            font-size: 14px;
            font-weight: 950;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accHint {
            margin-top: 3px;
            font-size: 12.5px;
            font-weight: 750;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .chev {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            width: 38px;
            height: 38px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );

            color: var(--color-text-secondary);
            box-shadow: 0 12px 26px var(--color-shadow);

            transition: transform 160ms ease;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .chev.open {
            transform: rotate(180deg);
        }

        /* load on click + smooth open close */
        .panel {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            border-top: 1px solid var(--color-border);
            transition: grid-template-rows ${ff}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            min-height: 0;
            padding: 14px;
        }

        .sec {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            background: color-mix(in srgb, var(--color-surface-2) 56%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
            margin-bottom: 12px;
            overflow: hidden;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;
                background-image: radial-gradient(
                    800px 250px at 10% 0%,
                    color-mix(in srgb, var(--color-primary) 9%, transparent),
                    transparent 62%
                );
                opacity: 0.9;
            }

            > * {
                position: relative;
                z-index: 1;
            }
        }

        .h3 {
            font-size: 15px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-weight: 650;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .miniTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .miniText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .termGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .term {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .tHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .tag {
            display: inline-flex;
            align-items: center;
            padding: 6px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );

            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
        }

        .tBody {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-weight: 650;
        }

        .callout {
            margin-top: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);
        }

        .cIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );
            color: var(--color-primary);

            svg {
                width: 16px;
                height: 16px;
            }
        }

        .cTitle {
            font-weight: 950;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cSub {
            margin-top: 4px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .exampleBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .exTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .code {
            padding: 12px;
            margin: 0;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .miniList {
            margin-top: 12px;
            display: grid;
            gap: 8px;
        }

        .row {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            @media (width < 720px) {
                flex-direction: column;
            }
        }

        .label {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
        }

        .value {
            color: var(--color-text-secondary);
            font-weight: 750;
            line-height: 1.6;
        }

        .abbrGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .abbr {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 60%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            line-height: 1.6;
        }

        .practice {
            margin-top: 10px;
            display: grid;
            gap: 8px;
        }

        .pRow {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            @media (width < 720px) {
                flex-direction: column;
            }
        }

        .checkGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 920px) {
                grid-template-columns: 1fr;
            }
        }

        .check {
            display: flex;
            align-items: center;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.55;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-primary);
                flex: 0 0 auto;
            }
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            letter-spacing: 0.1px;
            color: color-mix(
                in srgb,
                var(--color-primary) 76%,
                var(--color-text-primary)
            );
        }

        .finalNote {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.7;
            box-shadow: 0 18px 40px var(--color-shadow);
        }
    `},vf=220,jf=()=>{const[a,c]=N.useState(!1),[l,p]=N.useState(!1),[m,g]=N.useState(!1),b=N.useMemo(()=>({title:"Accessibility",sub:"Accessibility (A11y) means your UI works for everyone - keyboard users, screen readers, low vision users, and users with different devices and abilities. Most A11y is free when you use correct HTML and labels."}),[]),k=()=>c(h=>!h);return N.useEffect(()=>{let h=null;return a?(p(!0),requestAnimationFrame(()=>g(!0))):(g(!1),h=window.setTimeout(()=>p(!1),vf)),()=>{h&&window.clearTimeout(h)}},[a]),e.jsxs(gf.Wrapper,{id:"accessibility",children:[e.jsxs("div",{className:"top",children:[e.jsx("h2",{className:"title",children:"Accessibility"}),e.jsx("p",{className:"sub",children:b.sub}),e.jsxs("div",{className:"pillRow","aria-label":"At a glance",children:[e.jsxs("span",{className:"pill",children:[e.jsx(Op,{})," Keyboard"]}),e.jsxs("span",{className:"pill",children:[e.jsx(Dp,{})," Labels"]}),e.jsxs("span",{className:"pill",children:[e.jsx(tl,{})," Screen readers"]}),e.jsxs("span",{className:"pill",children:[e.jsx(fn,{})," A11y basics"]})]})]}),e.jsxs("div",{className:"accordion",children:[e.jsxs("button",{type:"button",className:"accBtn",onClick:k,"aria-expanded":a,"aria-controls":"accessibility-panel",children:[e.jsxs("div",{className:"accLeft",children:[e.jsx("span",{className:"accIcon",children:e.jsx(fn,{})}),e.jsxs("div",{className:"accText",children:[e.jsx("div",{className:"accTitle",children:b.title}),e.jsxs("div",{className:"accHint",children:["Click to ",a?"collapse":"expand"," with beginner explanations and practical examples"]})]})]}),e.jsx("span",{className:`chev ${a?"open":""}`,children:e.jsx(Ie,{})})]}),l&&e.jsx("div",{id:"accessibility-panel",className:`panel ${m?"open":""}`,children:e.jsxs("div",{className:"panelInner",children:[e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"1) Meaning"}),e.jsxs("p",{className:"p",children:[e.jsx("strong",{children:"Accessibility"})," means people can use your interface with different input methods and assistive technologies.",e.jsx("br",{}),"- keyboard only navigation",e.jsx("br",{}),"- screen readers",e.jsx("br",{}),"- low vision or color blindness",e.jsx("br",{}),"- motor limitations (precise mouse use is hard)",e.jsx("br",{}),e.jsx("br",{}),e.jsx("strong",{children:"A11y"})," is short for Accessibility (a + 11 letters + y)."]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"What you want"}),e.jsx("p",{className:"miniText",children:"Every action reachable by keyboard, every control labeled, every state clear."})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Biggest shortcut"}),e.jsx("p",{className:"miniText",children:"Use the correct HTML element (button, a, input, label). Defaults are already accessible."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"2) Keyboard navigation fundamentals"}),e.jsxs("p",{className:"p",children:["A keyboard user uses:",e.jsx("br",{}),"- ",e.jsx("span",{className:"mono",children:"Tab"})," to move focus forward",e.jsx("br",{}),"-"," ",e.jsx("span",{className:"mono",children:"Shift + Tab"})," to move focus backward",e.jsx("br",{}),"- ",e.jsx("span",{className:"mono",children:"Enter"})," ","or ",e.jsx("span",{className:"mono",children:"Space"})," to activate buttons"]}),e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ge,{})}),e.jsxs("div",{className:"cText",children:[e.jsx("div",{className:"cTitle",children:"Golden rule"}),e.jsxs("div",{className:"cSub",children:["If you used a"," ",e.jsx("span",{className:"mono",children:"div"})," ","with onClick, you probably broke keyboard accessibility. Use"," ",e.jsx("span",{className:"mono",children:"button"})," ","for actions."]})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Bad vs good (actions)"}),e.jsx("pre",{className:"code",children:`<!-- Bad: not keyboard-friendly by default -->
<div onclick="doThing()">Save</div>

<!-- Good: keyboard + semantics -->
<button type="button">Save</button>`})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Focus styling example"}),e.jsx("pre",{className:"code",children:`/* Good focus style for keyboard */
button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
}`})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"3) Labels, names, and descriptions"}),e.jsxs("p",{className:"p",children:["Screen readers need a reliable"," ",e.jsx("strong",{children:"accessible name"})," for controls. The best sources:",e.jsx("br",{}),"- ",e.jsx("span",{className:"mono",children:"label"})," ","linked with"," ",e.jsx("span",{className:"mono",children:"for"})," and"," ",e.jsx("span",{className:"mono",children:"id"}),e.jsx("br",{}),"-"," ",e.jsx("span",{className:"mono",children:"aria-label"})," for icon-only buttons",e.jsx("br",{}),"- visible text content (button text)"]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Correct input labeling"}),e.jsx("pre",{className:"code",children:`<label for="email">Email</label>
<input id="email" type="email" autocomplete="email" />`})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Icon button labeling"}),e.jsx("pre",{className:"code",children:`<!-- Icon only button must have an accessible name -->
<button type="button" aria-label="Close dialog">
  ✕
</button>`})]}),e.jsxs("div",{className:"miniList",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"label"}),e.jsx("span",{className:"value",children:"Best for form controls"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"aria-label"}),e.jsx("span",{className:"value",children:"Best for icon-only controls"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"aria-describedby"}),e.jsx("span",{className:"value",children:"Connect help text or error text"})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"4) Images and alt text"}),e.jsxs("p",{className:"p",children:[e.jsx("strong",{children:"alt"})," is the text alternative for images.",e.jsx("br",{}),"- informative images need meaningful"," ",e.jsx("span",{className:"mono",children:"alt"}),e.jsx("br",{}),"- decorative images should use"," ",e.jsx("span",{className:"mono",children:'alt=""'})," and can be hidden from screen readers"]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Alt text examples"}),e.jsx("pre",{className:"code",children:`<!-- Informative -->
<img src="logo.png" alt="A2RP logo" />

<!-- Decorative -->
<img src="dots.png" alt="" aria-hidden="true" />`})]}),e.jsx("div",{className:"finalNote",children:"If the image is important for meaning, write the meaning. If it is decoration, keep alt empty."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"5) ARIA basics (when needed)"}),e.jsxs("p",{className:"p",children:[e.jsx("strong",{children:"ARIA"})," means"," ",e.jsx("strong",{children:"Accessible Rich Internet Applications"}),". Use ARIA only when HTML alone cannot express the correct meaning."]}),e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Wa,{})}),e.jsxs("div",{className:"cText",children:[e.jsx("div",{className:"cTitle",children:"Warning"}),e.jsx("div",{className:"cSub",children:"Bad ARIA is worse than no ARIA. Prefer semantic HTML first."})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Common ARIA pattern: disclosure"}),e.jsx("pre",{className:"code",children:`<button aria-expanded="false" aria-controls="menu">
  Open menu
</button>

<nav id="menu" hidden>
  <a href="/html">HTML</a>
  <a href="/css">CSS</a>
</nav>`})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Live region example (status updates)"}),e.jsx("pre",{className:"code",children:`<!-- Screen reader will announce changes -->
<div aria-live="polite">
  Saved successfully
</div>`})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"6) Color contrast and clarity"}),e.jsxs("p",{className:"p",children:["Do not rely on color alone to communicate status.",e.jsx("br",{}),"- pair color with text or icons",e.jsx("br",{}),"- keep good contrast between text and background"]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Good status messaging"}),e.jsx("pre",{className:"code",children:`<!-- Bad: only color -->
<span style="color:red">●</span>

<!-- Good: color + text -->
<span style="color:red">●</span> <span>Error</span>`})]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Contrast idea"}),e.jsx("p",{className:"miniText",children:"If text looks faint for you, it will be painful for many users. Use strong contrast for body text."})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Focus visibility"}),e.jsx("p",{className:"miniText",children:"Never remove focus outline unless you replace it with a better visible focus style."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"7) Terms and full forms"}),e.jsxs("div",{className:"abbrGrid",children:[e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"A11y"})," - Accessibility"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"ARIA"})," - Accessible Rich Internet Applications"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"DOM"})," - Document Object Model"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"UI"})," - User Interface"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"UX"})," - User Experience"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"SR"})," - Screen Reader"]})]}),e.jsx("div",{className:"finalNote",children:"Accessibility is engineering quality. It reduces bugs, improves usability, and makes your product work for more people."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Mini practice"}),e.jsxs("div",{className:"practice",children:[e.jsxs("div",{className:"pRow",children:[e.jsx("span",{className:"label",children:"Try"}),e.jsx("span",{className:"value",children:"Build a modal close button that uses only an icon. Make it accessible."})]}),e.jsxs("div",{className:"pRow",children:[e.jsx("span",{className:"label",children:"Answer"}),e.jsxs("span",{className:"value",children:["Use"," ",e.jsx("span",{className:"mono",children:"button"})," ","with"," ",e.jsx("span",{className:"mono",children:'aria-label="Close dialog"'}),"."]})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Quick checklist"}),e.jsxs("div",{className:"checkGrid",children:[e.jsxs("div",{className:"check",children:[e.jsx(Op,{})," Everything works with Tab"]}),e.jsxs("div",{className:"check",children:[e.jsx(Dp,{})," Every input has a label"]}),e.jsxs("div",{className:"check",children:[e.jsx(fn,{})," Use semantic HTML first"]}),e.jsxs("div",{className:"check",children:[e.jsx(xl,{})," Links are descriptive"]}),e.jsxs("div",{className:"check",children:[e.jsx(tl,{})," Alt text is meaningful or empty"]})]})]})]})})]})]})},yf=220,bf={Wrapper:te.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 24px 16px;

        .title {
            font-size: 22px;
            font-weight: 900;
        }

        .sub {
            margin-top: 8px;
            color: var(--color-text-secondary);
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 6px 12px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            font-size: 13px;
            font-weight: 700;
        }

        .accordion {
            margin-top: 16px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
        }

        .accBtn {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 14px;
            background: var(--color-surface);
            border: none;
            cursor: pointer;
        }

        .accLeft {
            display: flex;
            gap: 12px;
            align-items: center;
        }

        .accIcon {
            font-size: 18px;
        }

        .accTitle {
            font-weight: 800;
        }

        .accHint {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .chev {
            transition: transform 160ms ease;
        }

        .chev.open {
            transform: rotate(180deg);
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            transition: grid-template-rows ${yf}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            min-height: 0;
            padding: 16px;
        }

        .sec {
            margin-bottom: 18px;
        }

        .h3 {
            font-size: 15px;
            font-weight: 800;
            margin-bottom: 8px;
        }

        .p {
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .code {
            background: var(--color-code-bg);
            padding: 12px;
            border-radius: 8px;
            font-size: 13px;
            overflow-x: auto;
        }

        .note {
            margin-top: 8px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }
    `},wf=220,Nf=()=>{const[a,c]=N.useState(!1),[l,p]=N.useState(!1),[m,g]=N.useState(!1),b=N.useMemo(()=>({title:"SEO - Search Engine Optimization",sub:"SEO is about making your content understandable, discoverable, and properly structured for search engines and users."}),[]),k=()=>c(h=>!h);return N.useEffect(()=>{let h;return a?(p(!0),requestAnimationFrame(()=>g(!0))):(g(!1),h=setTimeout(()=>p(!1),wf)),()=>clearTimeout(h)},[a]),e.jsxs(bf.Wrapper,{id:"seo",children:[e.jsxs("div",{className:"top",children:[e.jsx("h2",{className:"title",children:"SEO"}),e.jsx("p",{className:"sub",children:b.sub}),e.jsxs("div",{className:"pillRow",children:[e.jsxs("span",{className:"pill",children:[e.jsx(al,{})," Discoverability"]}),e.jsxs("span",{className:"pill",children:[e.jsx(gs,{})," Structure"]}),e.jsxs("span",{className:"pill",children:[e.jsx(xl,{})," Linking"]}),e.jsxs("span",{className:"pill",children:[e.jsx(ml,{})," Ranking signals"]})]})]}),e.jsxs("div",{className:"accordion",children:[e.jsxs("button",{className:"accBtn",onClick:k,"aria-expanded":a,children:[e.jsxs("div",{className:"accLeft",children:[e.jsx("span",{className:"accIcon",children:e.jsx(gn,{})}),e.jsxs("div",{children:[e.jsx("div",{className:"accTitle",children:b.title}),e.jsxs("div",{className:"accHint",children:["Click to ",a?"collapse":"expand"," full explanation"]})]})]}),e.jsx("span",{className:`chev ${a?"open":""}`,children:e.jsx(Ie,{})})]}),l&&e.jsx("div",{className:`panel ${m?"open":""}`,children:e.jsxs("div",{className:"panelInner",children:[e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"1) What SEO really means"}),e.jsxs("p",{className:"p",children:["SEO stands for"," ",e.jsx("strong",{children:"Search Engine Optimization"}),". It ensures that search engines like Google understand your content structure, purpose, and relevance."]}),e.jsx("p",{className:"p",children:"SEO is not tricks. It is clarity + structure + performance."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"2) Title and Meta Description"}),e.jsx("pre",{className:"code",children:`<head>
  <title>Frontend Engineering Core Notes</title>

  <meta name="description"
        content="Deep notes on HTML, CSS, browser rendering, React internals and performance." />
</head>`}),e.jsx("div",{className:"note",children:"- Title appears in search result headline - Meta description appears below title - Keep title under 60 characters - Keep description under 160 characters"})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"3) Proper Heading Structure"}),e.jsx("pre",{className:"code",children:`<h1>Frontend Engineering</h1>
<h2>HTML Deep</h2>
<h3>Semantic Elements</h3>`}),e.jsx("div",{className:"note",children:"- Only one h1 per page - Do not skip heading levels randomly - Headings define document hierarchy"})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"4) Semantic HTML improves SEO"}),e.jsx("pre",{className:"code",children:`<article>
  <h2>SEO Basics</h2>
  <p>Use semantic tags for clarity.</p>
</article>

<nav>
  <a href="/html">HTML</a>
</nav>`}),e.jsx("div",{className:"note",children:"Search engines understand article, nav, header, footer better than div."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"5) Canonical Links"}),e.jsx("pre",{className:"code",children:`<link rel="canonical"
      href="https://example.com/frontend-engineering" />`}),e.jsx("div",{className:"note",children:"Prevents duplicate content issues."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"6) Image SEO"}),e.jsx("pre",{className:"code",children:`<img src="render-tree.png"
     alt="Browser render tree diagram" />`}),e.jsx("div",{className:"note",children:"- Always use meaningful alt text - Do not stuff keywords"})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"7) URL Structure"}),e.jsx("div",{className:"note",children:"Good: /frontend-engineering/html-deep Bad: /page?id=123"})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"8) Performance as SEO signal"}),e.jsx("div",{className:"note",children:"- Fast loading pages rank better - Core Web Vitals matter - Optimize images and bundle size"})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Full Forms"}),e.jsx("div",{className:"note",children:"SEO - Search Engine Optimization URL - Uniform Resource Locator HTML - HyperText Markup Language"})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Checklist"}),e.jsx("div",{className:"note",children:"✔ Title + Meta ✔ Semantic HTML ✔ Clean URLs ✔ Proper headings ✔ Performance optimization"})]})]})})]})]})},kf=220,Sf={Wrapper:te.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 22px 16px 10px;

        .top {
            padding: 10px 2px 12px;
        }

        .title {
            font-size: 22px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .sub {
            margin-top: 8px;
            max-width: 1100px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 900;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
            box-shadow: 0 18px 42px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 14px;

            border: 0;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;

            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;

                background-image:
                    radial-gradient(
                        760px 240px at 18% 10%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 10%,
                            transparent
                        ),
                        transparent 60%
                    ),
                    repeating-linear-gradient(
                        90deg,
                        color-mix(in srgb, var(--color-border) 18%, transparent)
                            0px,
                        color-mix(in srgb, var(--color-border) 18%, transparent)
                            1px,
                        transparent 1px,
                        transparent 22px
                    );
                opacity: 0.72;

                mask-image: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.15)
                );
            }

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 24%,
                    transparent
                );
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .accIcon {
            height: 40px;
            width: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                width: 18px;
                height: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }
        }

        .accText {
            min-width: 0;
        }

        .accTitle {
            font-size: 14px;
            font-weight: 950;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accHint {
            margin-top: 3px;
            font-size: 12.5px;
            font-weight: 750;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .chev {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            width: 38px;
            height: 38px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );

            color: var(--color-text-secondary);
            box-shadow: 0 12px 26px var(--color-shadow);

            transition: transform 160ms ease;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .chev.open {
            transform: rotate(180deg);
        }

        /* load on click + smooth open close */
        .panel {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            border-top: 1px solid var(--color-border);
            transition: grid-template-rows ${kf}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            min-height: 0;
            padding: 14px;
        }

        .sec {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            background: color-mix(in srgb, var(--color-surface-2) 56%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
            margin-bottom: 12px;
            overflow: hidden;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;
                background-image: radial-gradient(
                    800px 250px at 10% 0%,
                    color-mix(in srgb, var(--color-primary) 9%, transparent),
                    transparent 62%
                );
                opacity: 0.9;
            }

            > * {
                position: relative;
                z-index: 1;
            }
        }

        .h3 {
            font-size: 15px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-weight: 650;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .miniTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .miniText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .termGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .term {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .tHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .tag {
            display: inline-flex;
            align-items: center;
            padding: 6px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );

            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
        }

        .tBody {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-weight: 650;
        }

        .callout {
            margin-top: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);
        }

        .cIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );
            color: var(--color-primary);

            svg {
                width: 16px;
                height: 16px;
            }
        }

        .cTitle {
            font-weight: 950;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cSub {
            margin-top: 4px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .exampleBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .exTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .code {
            padding: 12px;
            margin: 0;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .miniList {
            margin-top: 12px;
            display: grid;
            gap: 8px;
        }

        .row {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            @media (width < 720px) {
                flex-direction: column;
            }
        }

        .label {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
        }

        .value {
            color: var(--color-text-secondary);
            font-weight: 750;
            line-height: 1.6;
        }

        .abbrGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .abbr {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 60%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            line-height: 1.6;
        }

        .practice {
            margin-top: 10px;
            display: grid;
            gap: 8px;
        }

        .pRow {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            @media (width < 720px) {
                flex-direction: column;
            }
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            letter-spacing: 0.1px;
            color: color-mix(
                in srgb,
                var(--color-primary) 76%,
                var(--color-text-primary)
            );
        }

        .finalNote {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.7;
            box-shadow: 0 18px 40px var(--color-shadow);
        }
    `},Tf=220,Cf=()=>{const[a,c]=N.useState(!1),[l,p]=N.useState(!1),[m,g]=N.useState(!1),b=N.useMemo(()=>({title:"CSS deep",sub:"CSS is not just colors and padding. It is layout systems, sizing rules, stacking, responsive strategy, animation, and architecture that keeps UI stable and fast."}),[]),k=()=>c(h=>!h);return N.useEffect(()=>{let h=null;return a?(p(!0),requestAnimationFrame(()=>g(!0))):(g(!1),h=window.setTimeout(()=>p(!1),Tf)),()=>{h&&window.clearTimeout(h)}},[a]),e.jsxs(Sf.Wrapper,{id:"css-deep",children:[e.jsxs("div",{className:"top",children:[e.jsx("h2",{className:"title",children:"CSS deep"}),e.jsx("p",{className:"sub",children:b.sub}),e.jsxs("div",{className:"pillRow","aria-label":"At a glance",children:[e.jsxs("span",{className:"pill",children:[e.jsx(hu,{})," Flexbox"]}),e.jsxs("span",{className:"pill",children:[e.jsx(On,{})," Grid"]}),e.jsxs("span",{className:"pill",children:[e.jsx(pt,{})," Responsive"]}),e.jsxs("span",{className:"pill",children:[e.jsx(Ce,{})," Animation"]}),e.jsxs("span",{className:"pill",children:[e.jsx(Ne,{})," Architecture"]})]})]}),e.jsxs("div",{className:"accordion",children:[e.jsxs("button",{type:"button",className:"accBtn",onClick:k,"aria-expanded":a,"aria-controls":"css-deep-panel",children:[e.jsxs("div",{className:"accLeft",children:[e.jsx("span",{className:"accIcon",children:e.jsx(Ha,{})}),e.jsxs("div",{className:"accText",children:[e.jsx("div",{className:"accTitle",children:b.title}),e.jsxs("div",{className:"accHint",children:["Click to ",a?"collapse":"expand"," with beginner explanations and practical examples"]})]})]}),e.jsx("span",{className:`chev ${a?"open":""}`,children:e.jsx(Ie,{})})]}),l&&e.jsx("div",{id:"css-deep-panel",className:`panel ${m?"open":""}`,children:e.jsxs("div",{className:"panelInner",children:[e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"1) What CSS is"}),e.jsxs("p",{className:"p",children:[e.jsx("strong",{children:"CSS"})," means"," ",e.jsx("strong",{children:"Cascading Style Sheets"}),'. CSS decides how elements look and how they are placed. "Cascading" means rules can override each other based on priority.']}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Cascade"}),e.jsx("p",{className:"miniText",children:"When multiple rules match an element, the browser decides which one wins."})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Layout engine"}),e.jsx("p",{className:"miniText",children:"CSS is a layout language. Most bugs are sizing and layout issues, not colors."})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Cascade quick example"}),e.jsx("pre",{className:"code",children:`.btn { padding: 10px 12px; }
.btn { padding: 14px 16px; } /* later rule wins */

#saveBtn { padding: 18px 20px; } /* id selector usually wins */`})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"2) The box model"}),e.jsxs("p",{className:"p",children:["Every element is a box:"," ",e.jsx("strong",{children:"content"}),","," ",e.jsx("strong",{children:"padding"}),","," ",e.jsx("strong",{children:"border"}),","," ",e.jsx("strong",{children:"margin"}),".",e.jsx("br",{}),"Best practice is using"," ",e.jsx("span",{className:"mono",children:"box-sizing: border-box"})," ","so width and height include padding and border."]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Box model"}),e.jsx("pre",{className:"code",children:`* { box-sizing: border-box; }

.card {
  width: 300px;
  padding: 16px;     /* inside space */
  border: 1px solid; /* border line */
  margin: 12px;      /* outside space */
}`})]}),e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ge,{})}),e.jsxs("div",{className:"cText",children:[e.jsx("div",{className:"cTitle",children:"Rule"}),e.jsx("div",{className:"cSub",children:"If layout feels random, check box model and check the parent size."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"3) Layout systems"}),e.jsxs("p",{className:"p",children:["Modern UI is mostly built using Flexbox and Grid. Use the right tool:",e.jsx("br",{}),"- ",e.jsx("strong",{children:"Flexbox"})," for one-dimensional layout (row or column)",e.jsx("br",{}),"- ",e.jsx("strong",{children:"Grid"})," for two-dimensional layout (rows and columns)"]}),e.jsxs("div",{className:"termGrid",children:[e.jsxs("div",{className:"term",children:[e.jsxs("div",{className:"tHead",children:[e.jsx("span",{className:"mono",children:"display: flex"}),e.jsx("span",{className:"tag",children:"1D layout"})]}),e.jsx("p",{className:"tBody",children:"Best for toolbars, nav bars, card rows, aligning items, spacing along one axis."})]}),e.jsxs("div",{className:"term",children:[e.jsxs("div",{className:"tHead",children:[e.jsx("span",{className:"mono",children:"display: grid"}),e.jsx("span",{className:"tag",children:"2D layout"})]}),e.jsx("p",{className:"tBody",children:"Best for dashboards, galleries, complex page sections, equal columns without hacks."})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Flexbox example"}),e.jsx("pre",{className:"code",children:`.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.toolbar .left {
  display: flex;
  align-items: center;
  gap: 10px;
}`})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Grid example"}),e.jsx("pre",{className:"code",children:`.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

@media (max-width: 900px) {
  .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 600px) {
  .grid { grid-template-columns: 1fr; }
}`})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"4) Responsive design basics"}),e.jsxs("p",{className:"p",children:["Responsive design means UI adapts to screen size. The modern approach is:",e.jsx("br",{}),"- fluid widths (%, minmax, clamp)",e.jsx("br",{}),"- flexible grids",e.jsx("br",{}),"- media queries only when needed"]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"clamp()"}),e.jsx("p",{className:"miniText",children:"Sets a value that grows with screen but stays within min and max."})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"minmax()"}),e.jsx("p",{className:"miniText",children:"Grid helper that sets a minimum and maximum column size."})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Responsive text and container"}),e.jsx("pre",{className:"code",children:`.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;
}

.heroTitle {
  font-size: clamp(22px, 2.4vw, 40px);
}`})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"5) Positioning and stacking"}),e.jsx("p",{className:"p",children:"Positioning changes how an element is placed. Stacking decides which element is on top."}),e.jsxs("div",{className:"miniList",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"relative"}),e.jsx("span",{className:"value",children:"Moves relative to its normal place and becomes an anchor for absolute children."})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"absolute"}),e.jsx("span",{className:"value",children:"Removed from normal flow and placed inside nearest positioned ancestor."})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"fixed"}),e.jsx("span",{className:"value",children:"Stays pinned to the viewport (good for floating buttons)."})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"sticky"}),e.jsx("span",{className:"value",children:"Behaves like relative, then sticks after scroll threshold (headers)."})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"z-index"}),e.jsx("span",{className:"value",children:"Works only inside stacking contexts. Higher z-index is not always enough."})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Sticky header example"}),e.jsx("pre",{className:"code",children:`.header {
  position: sticky;
  top: 0;
  z-index: 50;
}`})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"6) Animation basics"}),e.jsxs("p",{className:"p",children:["Animation should feel smooth. Prefer animating"," ",e.jsx("span",{className:"mono",children:"transform"})," and"," ",e.jsx("span",{className:"mono",children:"opacity"})," ","because they are cheaper than layout-based properties."]}),e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Ce,{})}),e.jsxs("div",{className:"cText",children:[e.jsx("div",{className:"cTitle",children:"Performance rule"}),e.jsx("div",{className:"cSub",children:"Avoid animating width, height, top, left. Prefer transform and opacity."})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Hover animation example"}),e.jsx("pre",{className:"code",children:`.card {
  transition: transform 180ms ease, opacity 180ms ease;
}

.card:hover {
  transform: translateY(-4px);
}`})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Keyframes example"}),e.jsx("pre",{className:"code",children:`@keyframes floatUp {
  0%   { transform: translateY(0); }
  100% { transform: translateY(-6px); }
}

.badge {
  animation: floatUp 1.2s ease-in-out infinite alternate;
}`})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"7) CSS architecture"}),e.jsxs("p",{className:"p",children:["Architecture means keeping styles scalable and predictable. In component-driven apps:",e.jsx("br",{}),"- avoid global leaks",e.jsx("br",{}),"- keep tokens in theme.css",e.jsx("br",{}),"- keep utilities consistent"]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Naming"}),e.jsxs("p",{className:"miniText",children:["Choose consistent names:"," ",e.jsx("span",{className:"mono",children:".card"}),","," ",e.jsx("span",{className:"mono",children:".cardTitle"}),","," ",e.jsx("span",{className:"mono",children:".cardMeta"}),"."]})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Tokens"}),e.jsx("p",{className:"miniText",children:"Use CSS variables for colors, border, spacing. Then the theme is one file."})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Token example"}),e.jsx("pre",{className:"code",children:`:root {
  --space-1: 6px;
  --space-2: 10px;
  --radius: 14px;
}

.card {
  padding: var(--space-2);
  border-radius: var(--radius);
}`})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"8) Terms and full forms"}),e.jsxs("div",{className:"abbrGrid",children:[e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"CSS"})," - Cascading Style Sheets"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"px"})," - Pixels (screen unit)"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"vw"})," - Viewport width"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"vh"})," - Viewport height"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"rem"})," - Root em (based on root font size)"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"fr"})," - Fraction unit (Grid)"]})]}),e.jsx("div",{className:"finalNote",children:"CSS deep means you can build stable layout, predictable responsive UI, and smooth motion without hacks."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Mini practice"}),e.jsxs("div",{className:"practice",children:[e.jsxs("div",{className:"pRow",children:[e.jsx("span",{className:"label",children:"Try"}),e.jsx("span",{className:"value",children:"Create a 3-column card grid that becomes 2 columns on tablets and 1 column on mobile. Add hover lift animation using transform."})]}),e.jsxs("div",{className:"pRow",children:[e.jsx("span",{className:"label",children:"Hint"}),e.jsxs("span",{className:"value",children:["Use"," ",e.jsx("span",{className:"mono",children:"grid-template-columns"})," ","+ media queries +"," ",e.jsx("span",{className:"mono",children:"transform"}),"."]})]})]})]})]})})]})]})},Mf=220,If={Wrapper:te.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 22px 16px 10px;

        .top {
            padding: 10px 2px 12px;
        }

        .title {
            font-size: 22px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .sub {
            margin-top: 8px;
            max-width: 1080px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 900;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
            box-shadow: 0 18px 42px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 14px;

            border: 0;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;

            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;

                background-image:
                    radial-gradient(
                        720px 240px at 14% 10%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 10%,
                            transparent
                        ),
                        transparent 60%
                    ),
                    radial-gradient(
                        680px 220px at 92% 10%,
                        color-mix(in srgb, var(--color-accent) 9%, transparent),
                        transparent 62%
                    ),
                    repeating-linear-gradient(
                        90deg,
                        color-mix(in srgb, var(--color-border) 18%, transparent)
                            0px,
                        color-mix(in srgb, var(--color-border) 18%, transparent)
                            1px,
                        transparent 1px,
                        transparent 24px
                    );
                opacity: 0.68;

                mask-image: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.18)
                );
            }

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 24%,
                    transparent
                );
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .accIcon {
            height: 40px;
            width: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                width: 18px;
                height: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }
        }

        .accText {
            min-width: 0;
        }

        .accTitle {
            font-size: 14px;
            font-weight: 950;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accHint {
            margin-top: 3px;
            font-size: 12.5px;
            font-weight: 750;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .chev {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            width: 38px;
            height: 38px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );

            color: var(--color-text-secondary);
            box-shadow: 0 12px 26px var(--color-shadow);

            transition: transform 160ms ease;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .chev.open {
            transform: rotate(180deg);
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            border-top: 1px solid var(--color-border);
            transition: grid-template-rows ${Mf}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            min-height: 0;
            padding: 14px;
        }

        .sec {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            background: color-mix(in srgb, var(--color-surface-2) 56%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
            margin-bottom: 12px;
            overflow: hidden;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;
                background-image: radial-gradient(
                    900px 260px at 10% 0%,
                    color-mix(in srgb, var(--color-primary) 9%, transparent),
                    transparent 62%
                );
                opacity: 0.9;
            }

            > * {
                position: relative;
                z-index: 1;
            }
        }

        .h3 {
            font-size: 15px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-weight: 650;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .miniTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .miniText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .termGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .term {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .tHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .tag {
            display: inline-flex;
            align-items: center;
            padding: 6px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );

            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
        }

        .tBody {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-weight: 650;
        }

        .callout {
            margin-top: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);
        }

        .cIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );
            color: var(--color-primary);

            svg {
                width: 16px;
                height: 16px;
            }
        }

        .cTitle {
            font-weight: 950;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cSub {
            margin-top: 4px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .exampleBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .exTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .code {
            padding: 12px;
            margin: 0;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .miniList {
            margin-top: 12px;
            display: grid;
            gap: 8px;
        }

        .row {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            @media (width < 720px) {
                flex-direction: column;
            }
        }

        .label {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
        }

        .value {
            color: var(--color-text-secondary);
            font-weight: 750;
            line-height: 1.6;
        }

        .abbrGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .abbr {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 60%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            line-height: 1.6;
        }

        .practice {
            margin-top: 10px;
            display: grid;
            gap: 8px;
        }

        .pRow {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            @media (width < 720px) {
                flex-direction: column;
            }
        }

        .qaGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .qa {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .q {
            font-weight: 950;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .a {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 750;
        }

        .checkGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 920px) {
                grid-template-columns: 1fr;
            }
        }

        .check {
            display: flex;
            align-items: center;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.55;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-primary);
                flex: 0 0 auto;
            }
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            letter-spacing: 0.1px;
            color: color-mix(
                in srgb,
                var(--color-primary) 76%,
                var(--color-text-primary)
            );
        }

        .finalNote {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.7;
            box-shadow: 0 18px 40px var(--color-shadow);
        }
    `},Rf=220,Lf=()=>{const[a,c]=N.useState(!1),[l,p]=N.useState(!1),[m,g]=N.useState(!1),b=N.useMemo(()=>({title:"Layout systems",sub:"Layout systems are the rules the browser uses to place elements on the page. A strong layout mental model saves time and prevents messy CSS. The main tools are normal flow, Flexbox, Grid, positioning, and responsive constraints."}),[]),k=()=>c(h=>!h);return N.useEffect(()=>{let h=null;return a?(p(!0),requestAnimationFrame(()=>g(!0))):(g(!1),h=window.setTimeout(()=>p(!1),Rf)),()=>{h&&window.clearTimeout(h)}},[a]),e.jsxs(If.Wrapper,{id:"layout-systems",children:[e.jsxs("div",{className:"top",children:[e.jsx("h2",{className:"title",children:"Layout systems"}),e.jsx("p",{className:"sub",children:b.sub}),e.jsxs("div",{className:"pillRow","aria-label":"At a glance",children:[e.jsxs("span",{className:"pill",children:[e.jsx(Ne,{})," Normal flow"]}),e.jsxs("span",{className:"pill",children:[e.jsx(sl,{})," Flexbox"]}),e.jsxs("span",{className:"pill",children:[e.jsx(On,{})," Grid"]}),e.jsxs("span",{className:"pill",children:[e.jsx(pt,{})," Responsive"]})]})]}),e.jsxs("div",{className:"accordion",children:[e.jsxs("button",{type:"button",className:"accBtn",onClick:k,"aria-expanded":a,"aria-controls":"layout-systems-panel",children:[e.jsxs("div",{className:"accLeft",children:[e.jsx("span",{className:"accIcon",children:e.jsx(vs,{})}),e.jsxs("div",{className:"accText",children:[e.jsx("div",{className:"accTitle",children:b.title}),e.jsxs("div",{className:"accHint",children:["Click to ",a?"collapse":"expand"," with beginner explanation, rules, and practical examples"]})]})]}),e.jsx("span",{className:`chev ${a?"open":""}`,children:e.jsx(Ie,{})})]}),l&&e.jsx("div",{id:"layout-systems-panel",className:`panel ${m?"open":""}`,children:e.jsxs("div",{className:"panelInner",children:[e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"1) What is a layout system"}),e.jsxs("p",{className:"p",children:["A ",e.jsx("strong",{children:"layout system"})," is how the browser calculates element size and position. It starts from the root and works down the DOM (Document Object Model)."]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Goal"}),e.jsx("p",{className:"miniText",children:"Place boxes predictably based on rules, not guesses."})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Outcome"}),e.jsx("p",{className:"miniText",children:"Fewer hacks, less absolute positioning, cleaner responsive UI."})]})]}),e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ge,{})}),e.jsxs("div",{className:"cText",children:[e.jsx("div",{className:"cTitle",children:"Core idea"}),e.jsx("div",{className:"cSub",children:"Pick the correct system first, then use properties inside that system."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"2) Normal flow and the box model"}),e.jsxs("p",{className:"p",children:[e.jsx("strong",{children:"Normal flow"})," is the default layout behavior.",e.jsx("br",{}),"- block elements stack vertically",e.jsx("br",{}),"- inline elements flow within a line",e.jsx("br",{}),"The ",e.jsx("strong",{children:"box model"})," is how size is calculated using content, padding, border, and margin."]}),e.jsxs("div",{className:"miniList",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Content"}),e.jsx("span",{className:"value",children:"The actual text or child elements"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Padding"}),e.jsx("span",{className:"value",children:"Space inside the border"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Border"}),e.jsx("span",{className:"value",children:"The edge line of the box"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Margin"}),e.jsx("span",{className:"value",children:"Space outside the border"})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Box model example"}),e.jsx("pre",{className:"code",children:`/* With box-sizing: border-box (recommended)
   width includes padding + border */
.card {
  box-sizing: border-box;
  width: 300px;
  padding: 16px;
  border: 1px solid #333;
  margin: 12px;
}`})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"3) Flexbox system (one direction)"}),e.jsxs("p",{className:"p",children:[e.jsx("strong",{children:"Flexbox"})," is best when your layout is mainly one direction at a time:",e.jsx("br",{}),"- a row of items (navbar, chips)",e.jsx("br",{}),"- a column of items (sidebar list)",e.jsx("br",{}),"Flexbox solves alignment, spacing, and distribution."]}),e.jsxs("div",{className:"termGrid",children:[e.jsxs("div",{className:"term",children:[e.jsxs("div",{className:"tHead",children:[e.jsx("span",{className:"mono",children:"display: flex"}),e.jsx("span",{className:"tag",children:"Container"})]}),e.jsx("p",{className:"tBody",children:"Makes children become flex items and enables flex rules."})]}),e.jsxs("div",{className:"term",children:[e.jsxs("div",{className:"tHead",children:[e.jsx("span",{className:"mono",children:"justify-content"}),e.jsx("span",{className:"tag",children:"Main axis"})]}),e.jsx("p",{className:"tBody",children:"Controls spacing along the main axis. Example: center, space-between."})]}),e.jsxs("div",{className:"term",children:[e.jsxs("div",{className:"tHead",children:[e.jsx("span",{className:"mono",children:"align-items"}),e.jsx("span",{className:"tag",children:"Cross axis"})]}),e.jsx("p",{className:"tBody",children:"Aligns items perpendicular to main axis. Example: center, stretch."})]}),e.jsxs("div",{className:"term",children:[e.jsxs("div",{className:"tHead",children:[e.jsx("span",{className:"mono",children:"gap"}),e.jsx("span",{className:"tag",children:"Spacing"})]}),e.jsx("p",{className:"tBody",children:"Clean spacing between items, better than margin hacks."})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Navbar example (Flexbox)"}),e.jsx("pre",{className:"code",children:`header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.left {
  display: flex;
  align-items: center;
  gap: 10px;
}`})]}),e.jsx("div",{className:"finalNote",children:'Flexbox is not a grid replacement. It is a great "row or column" tool.'})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"4) Grid system (two dimensions)"}),e.jsxs("p",{className:"p",children:[e.jsx("strong",{children:"CSS Grid"})," is best when layout is two-dimensional:",e.jsx("br",{}),"- rows and columns together",e.jsx("br",{}),"- dashboards",e.jsx("br",{}),"- card grids",e.jsx("br",{}),"Grid makes structure predictable, especially on different screen sizes."]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Best use"}),e.jsx("p",{className:"miniText",children:"Page layouts, galleries, dashboards, complex grids."})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Key feature"}),e.jsx("p",{className:"miniText",children:"You define tracks (columns and rows) and place items reliably."})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Card grid example"}),e.jsx("pre",{className:"code",children:`.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}`})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Dashboard layout example"}),e.jsx("pre",{className:"code",children:`.page {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 16px;
}

@media (max-width: 900px) {
  .page {
    grid-template-columns: 1fr;
  }
}`})]}),e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"cIcon",children:e.jsx(On,{})}),e.jsxs("div",{className:"cText",children:[e.jsx("div",{className:"cTitle",children:"Mental shortcut"}),e.jsx("div",{className:"cSub",children:"Flexbox arranges items. Grid designs the space."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"5) Positioning and stacking"}),e.jsx("p",{className:"p",children:"Positioning is powerful, but should be used intentionally. Overuse usually causes bugs."}),e.jsxs("div",{className:"miniList",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"static"}),e.jsx("span",{className:"value",children:"Default, follows normal flow"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"relative"}),e.jsx("span",{className:"value",children:"Stays in flow, can be offset visually"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"absolute"}),e.jsx("span",{className:"value",children:"Removed from flow, positioned inside nearest positioned ancestor"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"fixed"}),e.jsx("span",{className:"value",children:"Relative to viewport, stays while scrolling"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"sticky"}),e.jsx("span",{className:"value",children:"Behaves like relative until it sticks at a threshold"})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Sticky header example"}),e.jsx("pre",{className:"code",children:`header {
  position: sticky;
  top: 0;
  z-index: 50;
}`})]}),e.jsx("div",{className:"finalNote",children:"Use positioning for overlays, tooltips, sticky headers, and small offsets. Not for building the main page layout."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"6) Responsive layout basics"}),e.jsxs("p",{className:"p",children:["Responsive design means the layout adapts to screen size, not just shrinks.",e.jsx("br",{}),"- prefer fluid grids",e.jsx("br",{}),"- use constraints like max-width",e.jsx("br",{}),"- switch layout at breakpoints"]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Common pattern"}),e.jsx("pre",{className:"code",children:`.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;
}`})]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Breakpoint meaning"}),e.jsx("p",{className:"miniText",children:"A breakpoint is a point where layout changes, not where font size changes."})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Modern tip"}),e.jsx("p",{className:"miniText",children:"Use auto-fit + minmax in Grid to reduce breakpoint count."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"7) Quick decision guide"}),e.jsxs("div",{className:"qaGrid",children:[e.jsxs("div",{className:"qa",children:[e.jsx("div",{className:"q",children:"I need a row with aligned items and gaps"}),e.jsx("div",{className:"a",children:"Use Flexbox: display flex + align-items + gap"})]}),e.jsxs("div",{className:"qa",children:[e.jsx("div",{className:"q",children:"I need a page layout with sidebar and content"}),e.jsx("div",{className:"a",children:"Use Grid with columns: 280px 1fr"})]}),e.jsxs("div",{className:"qa",children:[e.jsx("div",{className:"q",children:"I need a responsive card gallery"}),e.jsx("div",{className:"a",children:"Use Grid with auto-fit + minmax"})]}),e.jsxs("div",{className:"qa",children:[e.jsx("div",{className:"q",children:"I need an overlay or tooltip"}),e.jsx("div",{className:"a",children:"Use position absolute or fixed, plus z-index"})]})]}),e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Ce,{})}),e.jsxs("div",{className:"cText",children:[e.jsx("div",{className:"cTitle",children:"Rule of thumb"}),e.jsx("div",{className:"cSub",children:"Layout first, spacing second, polish last. Most bugs are from picking the wrong system."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"8) Terms and full forms"}),e.jsxs("div",{className:"abbrGrid",children:[e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"DOM"})," - Document Object Model"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"CSS"})," - Cascading Style Sheets"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"UI"})," - User Interface"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"px"})," - Pixel"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"fr"})," - Fraction unit (Grid)"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"z-index"})," - Stacking order"]})]}),e.jsx("div",{className:"finalNote",children:'Layout systems mastery is the difference between "CSS works sometimes" and "CSS works always".'})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Mini practice"}),e.jsxs("div",{className:"practice",children:[e.jsxs("div",{className:"pRow",children:[e.jsx("span",{className:"label",children:"Try"}),e.jsx("span",{className:"value",children:"Build a header with logo left, nav center, and theme toggle right."})]}),e.jsxs("div",{className:"pRow",children:[e.jsx("span",{className:"label",children:"Answer idea"}),e.jsx("span",{className:"value",children:"Use Flexbox for header row, and Grid for page layout with sidebar + content."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Quick checklist"}),e.jsxs("div",{className:"checkGrid",children:[e.jsxs("div",{className:"check",children:[e.jsx(Ne,{})," Understand normal flow"]}),e.jsxs("div",{className:"check",children:[e.jsx(sl,{})," Use Flexbox for 1D layouts"]}),e.jsxs("div",{className:"check",children:[e.jsx(On,{})," Use Grid for 2D layouts"]}),e.jsxs("div",{className:"check",children:[e.jsx(Dh,{})," Use max-width constraints"]}),e.jsxs("div",{className:"check",children:[e.jsx(pt,{})," Make layout responsive"]})]})]})]})})]})]})},zf=220,Ef={Wrapper:te.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 24px 16px;
    `,top:te.div``,Wrapper:te.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 24px 16px;

        .title {
            font-size: 22px;
            font-weight: 900;
            margin-bottom: 6px;
        }

        .sub {
            color: var(--color-text-secondary);
            margin-bottom: 12px;
        }

        .pillRow {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 12px;
        }

        .pill {
            padding: 6px 12px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            font-size: 12px;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
        }

        .accBtn {
            width: 100%;
            padding: 14px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--color-surface);
            cursor: pointer;
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .accIcon {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .accTitle {
            font-weight: 900;
        }

        .accHint {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .chev {
            transition: transform 0.2s ease;
        }

        .chev.open {
            transform: rotate(180deg);
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows ${zf}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            overflow: hidden;
            padding: 16px;
            background: var(--color-surface-2);
        }

        .sec {
            margin-bottom: 18px;
        }

        .miniGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 10px;
            margin-top: 10px;
        }

        .miniCard {
            border: 1px solid var(--color-border);
            padding: 10px;
            border-radius: 10px;
        }

        .miniList .row {
            margin-bottom: 6px;
        }

        .code {
            background: var(--color-code-bg);
            padding: 12px;
            border-radius: 10px;
            font-family: monospace;
            font-size: 13px;
            margin: 10px 0;
            overflow-x: auto;
        }

        .mono {
            font-family: monospace;
            font-weight: 700;
        }

        .finalNote {
            padding: 10px;
            border: 1px solid var(--color-border);
            border-radius: 10px;
        }
    `},Of=220,Pf=()=>{const[a,c]=N.useState(!1),[l,p]=N.useState(!1),[m,g]=N.useState(!1),b=N.useMemo(()=>({title:"Flexbox",sub:"Flexbox is a one dimensional layout system in CSS. It controls alignment and distribution of items along a single axis - either row or column."}),[]),k=()=>c(h=>!h);return N.useEffect(()=>{let h=null;return a?(p(!0),requestAnimationFrame(()=>g(!0))):(g(!1),h=window.setTimeout(()=>p(!1),Of)),()=>{h&&window.clearTimeout(h)}},[a]),e.jsxs(Ef.Wrapper,{id:"flexbox",children:[e.jsxs("div",{className:"top",children:[e.jsx("h2",{className:"title",children:"Flexbox"}),e.jsx("p",{className:"sub",children:b.sub}),e.jsxs("div",{className:"pillRow",children:[e.jsxs("span",{className:"pill",children:[e.jsx(vs,{})," Layout engine"]}),e.jsxs("span",{className:"pill",children:[e.jsx(hu,{})," Axis based"]}),e.jsxs("span",{className:"pill",children:[e.jsx(Lh,{})," Alignment control"]})]})]}),e.jsxs("div",{className:"accordion",children:[e.jsxs("button",{type:"button",className:"accBtn",onClick:k,"aria-expanded":a,children:[e.jsxs("div",{className:"accLeft",children:[e.jsx("span",{className:"accIcon",children:e.jsx(Ne,{})}),e.jsxs("div",{children:[e.jsx("div",{className:"accTitle",children:b.title}),e.jsxs("div",{className:"accHint",children:["Click to ",a?"collapse":"expand"," detailed explanation"]})]})]}),e.jsx("span",{className:`chev ${a?"open":""}`,children:e.jsx(Ie,{})})]}),l&&e.jsx("div",{className:`panel ${m?"open":""}`,children:e.jsxs("div",{className:"panelInner",children:[e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"Main concept"}),e.jsxs("p",{children:["Flexbox works on two axes:",e.jsx("br",{}),"- Main axis",e.jsx("br",{}),"- Cross axis"]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("strong",{children:"Main axis"}),e.jsxs("p",{children:["Direction defined by"," ",e.jsx("span",{className:"mono",children:"flex-direction"}),". Default is row."]})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("strong",{children:"Cross axis"}),e.jsx("p",{children:"Perpendicular to main axis."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"Basic example"}),e.jsx("pre",{className:"code",children:`<div class="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

.container {
  display: flex;
}`}),e.jsxs("p",{children:["Setting"," ",e.jsx("span",{className:"mono",children:"display: flex"})," ","turns the container into a flex formatting context."]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"flex-direction"}),e.jsx("pre",{className:"code",children:`.container {
  display: flex;
  flex-direction: row;      /* default */
  flex-direction: column;
}`}),e.jsx("p",{children:"Row means horizontal layout. Column means vertical layout."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"justify-content (main axis alignment)"}),e.jsx("pre",{className:"code",children:`.container {
  display: flex;
  justify-content: center;
}`}),e.jsxs("div",{className:"miniList",children:[e.jsx("div",{className:"row",children:"flex-start"}),e.jsx("div",{className:"row",children:"flex-end"}),e.jsx("div",{className:"row",children:"center"}),e.jsx("div",{className:"row",children:"space-between"}),e.jsx("div",{className:"row",children:"space-around"}),e.jsx("div",{className:"row",children:"space-evenly"})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"align-items (cross axis alignment)"}),e.jsx("pre",{className:"code",children:`.container {
  display: flex;
  align-items: center;
}`}),e.jsx("p",{children:"Controls vertical alignment when direction is row."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"flex property"}),e.jsx("pre",{className:"code",children:`.item {
  flex: 1;
}

/* shorthand */
flex: grow shrink basis;`}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("strong",{children:"flex-grow"}),e.jsx("p",{children:"How much item expands."})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("strong",{children:"flex-shrink"}),e.jsx("p",{children:"How much item shrinks."})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("strong",{children:"flex-basis"}),e.jsx("p",{children:"Initial size before growing."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"Real world example - Navbar"}),e.jsx("pre",{className:"code",children:`.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`}),e.jsx("p",{children:"Left logo, right menu items automatically align."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"Full forms and terms"}),e.jsxs("div",{className:"miniList",children:[e.jsx("div",{className:"row",children:"DOM - Document Object Model"}),e.jsx("div",{className:"row",children:"CSS - Cascading Style Sheets"}),e.jsx("div",{className:"row",children:"UI - User Interface"})]})]}),e.jsx("section",{className:"sec",children:e.jsx("div",{className:"finalNote",children:"Flexbox is ideal for components, navbars, cards, and alignment problems. It is not a full 2D grid system."})})]})})]})]})},_f=220,Bf={Wrapper:te.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 24px 16px;

        .top {
            margin-bottom: 16px;
        }

        .title {
            font-size: 22px;
            font-weight: 900;
        }

        .sub {
            margin-top: 6px;
            color: var(--color-text-secondary);
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .pill {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 6px 12px;
            border-radius: 999px;
            background: var(--color-surface-2);
            border: 1px solid var(--color-border);
            font-size: 13px;
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
            background: var(--color-surface);
        }

        .accBtn {
            width: 100%;
            padding: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: transparent;
            border: none;
            cursor: pointer;
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .accTitle {
            font-weight: 800;
        }

        .accHint {
            font-size: 13px;
            color: var(--color-text-muted);
        }

        .chev {
            transition: transform 200ms ease;
        }

        .chev.open {
            transform: rotate(180deg);
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows ${_f}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            overflow: hidden;
            padding: 16px;
        }

        .sec {
            margin-bottom: 24px;
        }

        h3 {
            margin-bottom: 8px;
        }

        pre {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 12px;
            border-radius: 8px;
            overflow-x: auto;
        }

        .note {
            margin-top: 8px;
            display: flex;
            align-items: center;
            gap: 6px;
            color: var(--color-primary);
        }

        .compare {
            display: flex;
            gap: 20px;
            margin-top: 10px;
        }

        ul {
            padding-left: 20px;
            list-style: disc;
        }
    `},Af=220,Df=()=>{const[a,c]=N.useState(!1),[l,p]=N.useState(!1),[m,g]=N.useState(!1),b=N.useMemo(()=>({title:"CSS Grid",sub:"CSS Grid is a 2-dimensional layout system. It controls rows and columns together. It is ideal for page layouts, dashboards, and structured UI."}),[]),k=()=>c(h=>!h);return N.useEffect(()=>{let h=null;return a?(p(!0),requestAnimationFrame(()=>g(!0))):(g(!1),h=window.setTimeout(()=>p(!1),Af)),()=>{h&&window.clearTimeout(h)}},[a]),e.jsxs(Bf.Wrapper,{id:"grid",children:[e.jsxs("div",{className:"top",children:[e.jsx("h2",{className:"title",children:"Grid"}),e.jsx("p",{className:"sub",children:b.sub}),e.jsxs("div",{className:"pillRow",children:[e.jsxs("span",{className:"pill",children:[e.jsx(vs,{})," 2D layout"]}),e.jsxs("span",{className:"pill",children:[e.jsx(sl,{})," Rows + Columns"]}),e.jsxs("span",{className:"pill",children:[e.jsx(Ha,{})," Explicit control"]})]})]}),e.jsxs("div",{className:"accordion",children:[e.jsxs("button",{className:"accBtn",onClick:k,children:[e.jsxs("div",{className:"accLeft",children:[e.jsx("span",{className:"accIcon",children:e.jsx(vs,{})}),e.jsxs("div",{children:[e.jsx("div",{className:"accTitle",children:b.title}),e.jsxs("div",{className:"accHint",children:["Click to ",a?"collapse":"expand"," with detailed explanations and examples"]})]})]}),e.jsx("span",{className:`chev ${a?"open":""}`,children:e.jsx(Ie,{})})]}),l&&e.jsx("div",{className:`panel ${m?"open":""}`,children:e.jsxs("div",{className:"panelInner",children:[e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"1) Grid basics"}),e.jsxs("p",{children:["To activate Grid, you use"," ",e.jsx("strong",{children:"display: grid"}),". This creates a grid formatting context."]}),e.jsx("pre",{children:`container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto;
}`}),e.jsxs("div",{className:"note",children:[e.jsx(ge,{})," Grid controls both horizontal and vertical placement."]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"2) grid-template-columns"}),e.jsx("p",{children:"Defines the number and size of columns."}),e.jsx("pre",{children:"grid-template-columns: 1fr 1fr 1fr;"}),e.jsxs("p",{children:[e.jsx("strong",{children:"fr"})," means fractional unit. It divides remaining space proportionally."]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"3) Repeat and auto-fit"}),e.jsx("pre",{children:"grid-template-columns: repeat(3, 1fr);"}),e.jsx("pre",{children:"grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));"}),e.jsxs("p",{children:[e.jsx("strong",{children:"auto-fit"})," automatically creates columns that fit the container.",e.jsx("br",{}),e.jsx("strong",{children:"minmax"})," defines minimum and maximum size."]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"4) Grid item placement"}),e.jsx("pre",{children:`.item {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}`}),e.jsx("p",{children:"This places the item between column line 1 and 3."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"5) Grid areas"}),e.jsx("pre",{children:`container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}`}),e.jsx("pre",{children:"header { grid-area: header; }"}),e.jsx("p",{children:"Named areas make layout readable and clean."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"6) Alignment"}),e.jsx("pre",{children:`justify-items: center;
align-items: center;`}),e.jsxs("p",{children:[e.jsx("strong",{children:"justify"})," controls horizontal alignment.",e.jsx("br",{}),e.jsx("strong",{children:"align"})," controls vertical alignment."]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"7) Real dashboard example"}),e.jsx("pre",{children:`.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}`}),e.jsx("p",{children:"Sidebar fixed width. Main content flexible. Header and footer span full width."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"8) Grid vs Flexbox"}),e.jsxs("div",{className:"compare",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Grid"}),e.jsx("br",{}),"2D layout",e.jsx("br",{}),"Page structure"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Flexbox"}),e.jsx("br",{}),"1D layout",e.jsx("br",{}),"Component layout"]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"Key terms"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Grid container"}),e.jsx("li",{children:"Grid item"}),e.jsx("li",{children:"Track"}),e.jsx("li",{children:"Grid line"}),e.jsx("li",{children:"Fraction unit (fr)"}),e.jsx("li",{children:"minmax()"}),e.jsx("li",{children:"auto-fit / auto-fill"})]})]})]})})]})]})},Ff=220,Uf={Wrapper:te.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 22px 16px 10px;

        .top {
            padding: 10px 2px 12px;
        }

        .title {
            font-size: 22px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .sub {
            margin-top: 8px;
            max-width: 1020px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 900;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
            box-shadow: 0 18px 42px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 14px;

            border: 0;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;

            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;

                background-image:
                    radial-gradient(
                        700px 240px at 15% 10%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 10%,
                            transparent
                        ),
                        transparent 60%
                    ),
                    repeating-linear-gradient(
                        90deg,
                        color-mix(in srgb, var(--color-border) 18%, transparent)
                            0px,
                        color-mix(in srgb, var(--color-border) 18%, transparent)
                            1px,
                        transparent 1px,
                        transparent 22px
                    );
                opacity: 0.72;

                mask-image: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.15)
                );
            }

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 24%,
                    transparent
                );
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .accIcon {
            height: 40px;
            width: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                width: 18px;
                height: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }
        }

        .accText {
            min-width: 0;
        }

        .accTitle {
            font-size: 14px;
            font-weight: 950;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accHint {
            margin-top: 3px;
            font-size: 12.5px;
            font-weight: 750;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .chev {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            width: 38px;
            height: 38px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );

            color: var(--color-text-secondary);
            box-shadow: 0 12px 26px var(--color-shadow);

            transition: transform 160ms ease;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .chev.open {
            transform: rotate(180deg);
        }

        /* load on click + smooth open close */
        .panel {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            border-top: 1px solid var(--color-border);
            transition: grid-template-rows ${Ff}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            min-height: 0;
            padding: 14px;
        }

        .sec {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            background: color-mix(in srgb, var(--color-surface-2) 56%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
            margin-bottom: 12px;
            overflow: hidden;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;
                background-image: radial-gradient(
                    800px 250px at 10% 0%,
                    color-mix(in srgb, var(--color-primary) 9%, transparent),
                    transparent 62%
                );
                opacity: 0.9;
            }

            > * {
                position: relative;
                z-index: 1;
            }
        }

        .h3 {
            font-size: 15px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-weight: 650;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .miniTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .miniText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .callout {
            margin-top: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);
        }

        .cIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );
            color: var(--color-primary);

            svg {
                width: 16px;
                height: 16px;
            }
        }

        .cTitle {
            font-weight: 950;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cSub {
            margin-top: 4px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .exampleBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .exTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .code {
            padding: 12px;
            margin: 0;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .miniList {
            margin-top: 12px;
            display: grid;
            gap: 8px;
        }

        .row {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            @media (width < 720px) {
                flex-direction: column;
            }
        }

        .label {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
        }

        .value {
            color: var(--color-text-secondary);
            font-weight: 750;
            line-height: 1.6;
        }

        .abbrGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .abbr {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 60%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            line-height: 1.6;
        }

        .checkGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 920px) {
                grid-template-columns: 1fr;
            }
        }

        .check {
            display: flex;
            align-items: center;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.55;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-primary);
                flex: 0 0 auto;
            }
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            letter-spacing: 0.1px;
            color: color-mix(
                in srgb,
                var(--color-primary) 76%,
                var(--color-text-primary)
            );
        }

        .finalNote {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.7;
            box-shadow: 0 18px 40px var(--color-shadow);
        }
    `},Wf=220,Hf=()=>{const[a,c]=N.useState(!1),[l,p]=N.useState(!1),[m,g]=N.useState(!1),b=N.useMemo(()=>({title:"Responsive design",sub:"Responsive design means your UI adapts to different screen sizes, device capabilities, and content lengths. The core mindset is flexible layouts first, then small adjustments using breakpoints."}),[]),k=()=>c(h=>!h);return N.useEffect(()=>{let h=null;return a?(p(!0),requestAnimationFrame(()=>g(!0))):(g(!1),h=window.setTimeout(()=>p(!1),Wf)),()=>{h&&window.clearTimeout(h)}},[a]),e.jsxs(Uf.Wrapper,{id:"responsive-design",children:[e.jsxs("div",{className:"top",children:[e.jsx("h2",{className:"title",children:"Responsive design"}),e.jsx("p",{className:"sub",children:b.sub}),e.jsxs("div",{className:"pillRow","aria-label":"At a glance",children:[e.jsxs("span",{className:"pill",children:[e.jsx(On,{})," Fluid layout"]}),e.jsxs("span",{className:"pill",children:[e.jsx(Vh,{})," Breakpoints"]}),e.jsxs("span",{className:"pill",children:[e.jsx(Fh,{})," Flexible media"]}),e.jsxs("span",{className:"pill",children:[e.jsx(Ce,{})," Mobile first"]})]})]}),e.jsxs("div",{className:"accordion",children:[e.jsxs("button",{type:"button",className:"accBtn",onClick:k,"aria-expanded":a,"aria-controls":"responsive-design-panel",children:[e.jsxs("div",{className:"accLeft",children:[e.jsx("span",{className:"accIcon",children:e.jsx(pt,{})}),e.jsxs("div",{className:"accText",children:[e.jsx("div",{className:"accTitle",children:b.title}),e.jsxs("div",{className:"accHint",children:["Click to ",a?"collapse":"expand"," with beginner explanation and practical CSS examples"]})]})]}),e.jsx("span",{className:`chev ${a?"open":""}`,children:e.jsx(Ie,{})})]}),l&&e.jsx("div",{id:"responsive-design-panel",className:`panel ${m?"open":""}`,children:e.jsxs("div",{className:"panelInner",children:[e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"1) Meaning"}),e.jsxs("p",{className:"p",children:[e.jsx("strong",{children:"Responsive design"})," means the same UI works on:",e.jsx("br",{}),"- mobile",e.jsx("br",{}),"- tablet",e.jsx("br",{}),"- laptop",e.jsx("br",{}),"- big desktop screens",e.jsx("br",{}),e.jsx("br",{}),"It is not only about screen width. It is also about content size, font scaling, touch vs mouse, and performance."]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Goal"}),e.jsx("p",{className:"miniText",children:"Make layout flexible by default, and only add breakpoints when needed."})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Common mistake"}),e.jsx("p",{className:"miniText",children:"Designing fixed pixels everywhere and adding random media queries later."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"2) The responsive toolkit"}),e.jsxs("div",{className:"miniList",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Fluid widths"}),e.jsxs("span",{className:"value",children:["Use ",e.jsx("span",{className:"mono",children:"%"}),","," ",e.jsx("span",{className:"mono",children:"max-width"}),","," ",e.jsx("span",{className:"mono",children:"min()"}),","," ",e.jsx("span",{className:"mono",children:"clamp()"})]})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Responsive typography"}),e.jsxs("span",{className:"value",children:["Use"," ",e.jsx("span",{className:"mono",children:"clamp()"})," ","for font sizes and spacing"]})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Flexbox and Grid"}),e.jsx("span",{className:"value",children:"Use modern layout, avoid floats for layout"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Breakpoints"}),e.jsx("span",{className:"value",children:"Use media queries for small adjustments"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Flexible media"}),e.jsx("span",{className:"value",children:"Images and videos should not overflow"})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"3) Mobile first approach"}),e.jsxs("p",{className:"p",children:[e.jsx("strong",{children:"Mobile first"})," means: start with styles for small screens, then add rules for larger screens.",e.jsx("br",{}),"This keeps CSS simpler and avoids fighting overrides."]}),e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ge,{})}),e.jsxs("div",{className:"cText",children:[e.jsx("div",{className:"cTitle",children:"Mental model"}),e.jsx("div",{className:"cSub",children:"Base CSS is for mobile. Media queries are upgrades for bigger screens."})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Example - mobile first media queries"}),e.jsx("pre",{className:"code",children:`/* Base - mobile */
.cardGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

/* Tablet */
@media (min-width: 768px) {
  .cardGrid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .cardGrid {
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }
}`})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"4) Fluid layout patterns"}),e.jsxs("p",{className:"p",children:["In real products, the best responsive UI is mostly achieved using flexible containers:",e.jsx("br",{}),"-"," ",e.jsx("span",{className:"mono",children:"max-width"})," +"," ",e.jsx("span",{className:"mono",children:"margin: 0 auto"}),e.jsx("br",{}),"-"," ",e.jsx("span",{className:"mono",children:"padding"})," for safe spacing",e.jsx("br",{}),"- ",e.jsx("span",{className:"mono",children:"min()"})," ","and ",e.jsx("span",{className:"mono",children:"clamp()"})," to avoid extreme sizes"]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Example - centered container"}),e.jsx("pre",{className:"code",children:`.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;
}`})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Example - responsive typography with clamp"}),e.jsx("pre",{className:"code",children:`/* clamp(min, preferred, max) */
.pageTitle {
  font-size: clamp(22px, 2.2vw, 38px);
  line-height: 1.2;
}

.sectionGap {
  padding: clamp(14px, 2vw, 26px);
}`})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"5) Responsive images and media"}),e.jsxs("p",{className:"p",children:["Images must scale inside containers. The safest default is:",e.jsx("br",{}),"-"," ",e.jsx("span",{className:"mono",children:"max-width: 100%"}),e.jsx("br",{}),"-"," ",e.jsx("span",{className:"mono",children:"height: auto"}),e.jsx("br",{}),"-"," ",e.jsx("span",{className:"mono",children:"object-fit"})," ","when you need consistent cropping"]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Example - images that never overflow"}),e.jsx("pre",{className:"code",children:`img {
  display: block;
  max-width: 100%;
  height: auto;
}

/* For fixed ratio cards */
.thumb {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 14px;
}`})]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Why object-fit helps"}),e.jsx("p",{className:"miniText",children:"Keeps the same visual crop across devices without stretching images."})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Common bug"}),e.jsx("p",{className:"miniText",children:"Fixed image height causing ugly stretching on mobile."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"6) Breakpoints that make sense"}),e.jsxs("p",{className:"p",children:["Breakpoints should follow your layout needs, not specific device models.",e.jsx("br",{}),"A simple practical set:",e.jsx("br",{}),"- 480px small phones",e.jsx("br",{}),"- 768px tablets",e.jsx("br",{}),"- 1024px laptops",e.jsx("br",{}),"- 1280px desktops"]}),e.jsxs("div",{className:"checkGrid",children:[e.jsxs("div",{className:"check",children:[e.jsx(pt,{})," 480px mobile"]}),e.jsxs("div",{className:"check",children:[e.jsx(Qh,{})," 768px tablet"]}),e.jsxs("div",{className:"check",children:[e.jsx(Uh,{})," 1024px desktop"]})]}),e.jsx("div",{className:"finalNote",children:"Use fewer breakpoints. The more breakpoints you add, the harder the UI becomes to maintain."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"7) Practical checklist for responsive UI"}),e.jsxs("div",{className:"miniList",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Touch targets"}),e.jsx("span",{className:"value",children:"Buttons should be comfortable to tap. Aim around 44px height."})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Avoid horizontal scroll"}),e.jsx("span",{className:"value",children:"Use overflow checks and flexible layouts. Fixed widths are the main cause."})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Long text"}),e.jsxs("span",{className:"value",children:["Handle overflow with wrapping and",e.jsxs("span",{className:"mono",children:[" ","text-overflow: ellipsis"]})," ","where needed."]})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Testing"}),e.jsx("span",{className:"value",children:"Test at 320px, 375px, 768px, 1024px, and 1440px widths."})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Quick fix for long words"}),e.jsx("pre",{className:"code",children:`.textSafe {
  overflow-wrap: anywhere;
  word-break: break-word;
}`})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Terms and full forms"}),e.jsxs("div",{className:"abbrGrid",children:[e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"CSS"})," - Cascading Style Sheets"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"UI"})," - User Interface"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"UX"})," - User Experience"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"vw"})," - Viewport width"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"px"})," - Pixels"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"DPR"})," - Device Pixel Ratio"]})]}),e.jsx("div",{className:"finalNote",children:"Responsive design is mostly about flexible constraints. Breakpoints are just the finishing touches."})]})]})})]})]})},$f=220,Gf={Wrapper:te.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 22px 16px 10px;

        .top {
            padding: 10px 2px 12px;
        }

        .title {
            font-size: 22px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .sub {
            margin-top: 8px;
            max-width: 1080px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 900;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            box-shadow: 0 18px 42px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 14px;

            border: 0;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;

            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;

                background-image:
                    radial-gradient(
                        700px 240px at 18% 10%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 10%,
                            transparent
                        ),
                        transparent 60%
                    ),
                    radial-gradient(
                        700px 240px at 85% 35%,
                        color-mix(in srgb, var(--color-accent) 8%, transparent),
                        transparent 62%
                    ),
                    repeating-linear-gradient(
                        90deg,
                        color-mix(in srgb, var(--color-border) 18%, transparent)
                            0px,
                        color-mix(in srgb, var(--color-border) 18%, transparent)
                            1px,
                        transparent 1px,
                        transparent 22px
                    );

                opacity: 0.7;

                mask-image: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.92),
                    rgba(0, 0, 0, 0.15)
                );
            }

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 24%,
                    transparent
                );
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .accIcon {
            height: 40px;
            width: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                width: 18px;
                height: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }
        }

        .accText {
            min-width: 0;
        }

        .accTitle {
            font-size: 14px;
            font-weight: 950;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accHint {
            margin-top: 3px;
            font-size: 12.5px;
            font-weight: 750;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .chev {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            width: 38px;
            height: 38px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );

            color: var(--color-text-secondary);
            box-shadow: 0 12px 26px var(--color-shadow);

            transition: transform 160ms ease;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .chev.open {
            transform: rotate(180deg);
        }

        /* load on click + smooth open close */
        .panel {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            border-top: 1px solid var(--color-border);
            transition: grid-template-rows ${$f}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            min-height: 0;
            padding: 14px;
        }

        .sec {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;

            background: color-mix(in srgb, var(--color-surface-2) 56%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);

            margin-bottom: 12px;
            overflow: hidden;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;
                background-image: radial-gradient(
                    820px 260px at 10% 0%,
                    color-mix(in srgb, var(--color-primary) 9%, transparent),
                    transparent 62%
                );
                opacity: 0.9;
            }

            > * {
                position: relative;
                z-index: 1;
            }
        }

        .h3 {
            font-size: 15px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-weight: 650;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .miniTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .miniText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .miniList {
            margin-top: 12px;
            display: grid;
            gap: 8px;
        }

        .row {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            @media (width < 720px) {
                flex-direction: column;
            }
        }

        .label {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
        }

        .value {
            color: var(--color-text-secondary);
            font-weight: 750;
            line-height: 1.6;
        }

        .callout {
            margin-top: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);
        }

        .cIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );
            color: var(--color-primary);

            svg {
                width: 16px;
                height: 16px;
            }
        }

        .cTitle {
            font-weight: 950;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cSub {
            margin-top: 4px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .exampleBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .exTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .code {
            padding: 12px;
            margin: 0;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .abbrGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .abbr {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 60%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            line-height: 1.6;
        }

        .practice {
            margin-top: 10px;
            display: grid;
            gap: 8px;
        }

        .pRow {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            @media (width < 720px) {
                flex-direction: column;
            }
        }

        .checkGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 920px) {
                grid-template-columns: 1fr;
            }
        }

        .check {
            display: flex;
            align-items: center;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.55;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-primary);
                flex: 0 0 auto;
            }
        }

        .note {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 56%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            line-height: 1.7;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            letter-spacing: 0.1px;
            color: color-mix(
                in srgb,
                var(--color-primary) 76%,
                var(--color-text-primary)
            );
        }

        .finalNote {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.7;
            box-shadow: 0 18px 40px var(--color-shadow);
        }
    `},Vf=220,qf=()=>{const[a,c]=N.useState(!1),[l,p]=N.useState(!1),[m,g]=N.useState(!1),b=N.useMemo(()=>({title:"Animation",sub:"Animation in frontend is about smooth motion without breaking performance. The big rule is: animate properties that do not trigger layout (reflow) when possible, and keep work on the compositor (transform, opacity)."}),[]),k=()=>c(h=>!h);return N.useEffect(()=>{let h=null;return a?(p(!0),requestAnimationFrame(()=>g(!0))):(g(!1),h=window.setTimeout(()=>p(!1),Vf)),()=>{h&&window.clearTimeout(h)}},[a]),e.jsxs(Gf.Wrapper,{id:"animation",children:[e.jsxs("div",{className:"top",children:[e.jsx("h2",{className:"title",children:"Animation"}),e.jsx("p",{className:"sub",children:b.sub}),e.jsxs("div",{className:"pillRow","aria-label":"At a glance",children:[e.jsxs("span",{className:"pill",children:[e.jsx(Hh,{})," Transitions and keyframes"]}),e.jsxs("span",{className:"pill",children:[e.jsx(dt,{})," Timing and easing"]}),e.jsxs("span",{className:"pill",children:[e.jsx(Ne,{})," Transform and opacity"]}),e.jsxs("span",{className:"pill",children:[e.jsx(Ce,{})," Performance friendly motion"]})]})]}),e.jsxs("div",{className:"accordion",children:[e.jsxs("button",{type:"button",className:"accBtn",onClick:k,"aria-expanded":a,"aria-controls":"animation-panel",children:[e.jsxs("div",{className:"accLeft",children:[e.jsx("span",{className:"accIcon",children:e.jsx(ms,{})}),e.jsxs("div",{className:"accText",children:[e.jsx("div",{className:"accTitle",children:b.title}),e.jsxs("div",{className:"accHint",children:["Click to ",a?"collapse":"expand"," with beginner explanations and real examples"]})]})]}),e.jsx("span",{className:`chev ${a?"open":""}`,children:e.jsx(Ie,{})})]}),l&&e.jsx("div",{id:"animation-panel",className:`panel ${m?"open":""}`,children:e.jsxs("div",{className:"panelInner",children:[e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"1) What animation means"}),e.jsxs("p",{className:"p",children:["Animation means changing visual properties over time to create motion. On the web, you typically use:",e.jsx("br",{}),"- CSS transitions for simple state changes",e.jsx("br",{}),"- CSS keyframes for repeated sequences",e.jsx("br",{}),"- JavaScript animation for dynamic, interactive control (usually via"," ",e.jsx("span",{className:"mono",children:"requestAnimationFrame"}),")"]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Transition"}),e.jsxs("p",{className:"miniText",children:["One change from A to B.",e.jsx("br",{}),"Example: button hover, expand accordion, fade in."]})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Keyframes"}),e.jsxs("p",{className:"miniText",children:["Multiple steps (0% to 100%).",e.jsx("br",{}),"Example: loader spinner, bouncing dot, pulsing glow."]})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"2) The performance rule"}),e.jsxs("p",{className:"p",children:["For smooth animations, prefer animating:",e.jsx("br",{}),"-"," ",e.jsx("span",{className:"mono",children:"transform"})," ","(translate, scale, rotate)",e.jsx("br",{}),"-"," ",e.jsx("span",{className:"mono",children:"opacity"}),e.jsx("br",{}),"Avoid animating properties that can trigger layout (reflow), like"," ",e.jsx("span",{className:"mono",children:"width"}),","," ",e.jsx("span",{className:"mono",children:"height"}),","," ",e.jsx("span",{className:"mono",children:"top"}),","," ",e.jsx("span",{className:"mono",children:"left"}),","," ",e.jsx("span",{className:"mono",children:"margin"}),"."]}),e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ge,{})}),e.jsxs("div",{className:"cText",children:[e.jsx("div",{className:"cTitle",children:"Best practice"}),e.jsxs("div",{className:"cSub",children:["If you need to move something, use"," ",e.jsx("span",{className:"mono",children:"transform: translate"}),", not"," ",e.jsx("span",{className:"mono",children:"top"})," or"," ",e.jsx("span",{className:"mono",children:"left"}),"."]})]})]}),e.jsxs("div",{className:"miniList",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Good to animate"}),e.jsx("span",{className:"value",children:"transform, opacity"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Risky to animate"}),e.jsx("span",{className:"value",children:"width, height, top, left, margin, padding"})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"3) CSS transitions example"}),e.jsx("p",{className:"p",children:"Use transitions for interactive state changes like hover, focus, open and close, active states."}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Transition example (hover card)"}),e.jsx("pre",{className:"code",children:`.card {
  transform: translateY(0);
  opacity: 1;
  transition: transform 180ms ease, opacity 180ms ease;
}

.card:hover {
  transform: translateY(-4px);
  opacity: 0.98;
}`})]}),e.jsxs("div",{className:"note",children:["If you transition many properties, keep the list explicit. Avoid"," ",e.jsx("span",{className:"mono",children:"transition: all"})," ","in production because it may animate unexpected properties."]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"4) CSS keyframes example"}),e.jsx("p",{className:"p",children:"Keyframes are best for repeated motion like loaders, attention pulses, or background shimmer."}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Keyframes example (spinner)"}),e.jsx("pre",{className:"code",children:`@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.spinner {
  width: 28px;
  height: 28px;
  border-radius: 999px;
  border: 3px solid rgba(255, 255, 255, 0.2);
  border-top-color: rgba(255, 255, 255, 0.9);
  animation: spin 900ms linear infinite;
}`})]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Duration"}),e.jsxs("p",{className:"miniText",children:["How long one cycle takes.",e.jsx("br",{}),"Example: 900ms"]})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Timing"}),e.jsxs("p",{className:"miniText",children:["Easing curve.",e.jsx("br",{}),"Example: linear, ease, ease-in-out"]})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"5) requestAnimationFrame (rAF)"}),e.jsxs("p",{className:"p",children:[e.jsx("strong",{children:"rAF"})," means"," ",e.jsx("strong",{children:"requestAnimationFrame"}),". It schedules your animation work just before the browser paints the next frame. This helps you sync updates with refresh rate and avoid jank."]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"rAF example (simple number tween)"}),e.jsx("pre",{className:"code",children:`let start = null;

function tick(ts) {
  if (start === null) start = ts;

  const elapsed = ts - start;
  const t = Math.min(elapsed / 400, 1); // 0 to 1 in 400ms
  const value = Math.round(0 + (100 - 0) * t);

  // update UI here (textContent, style, etc.)
  // element.textContent = value;

  if (t < 1) requestAnimationFrame(tick);
}

requestAnimationFrame(tick);`})]}),e.jsx("div",{className:"note",children:"Use rAF when animation depends on time, pointer movement, physics, or per frame calculations. Otherwise prefer pure CSS."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"6) Easing basics"}),e.jsxs("p",{className:"p",children:[e.jsx("strong",{children:"Easing"})," describes how speed changes over time. Real movement usually starts slower, speeds up, then slows down."]}),e.jsxs("div",{className:"miniList",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"linear"}),e.jsx("span",{className:"value",children:"Constant speed, good for spinners"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"ease"}),e.jsx("span",{className:"value",children:"Default smooth feel for UI"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"ease-in"}),e.jsx("span",{className:"value",children:"Starts slow, ends fast"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"ease-out"}),e.jsx("span",{className:"value",children:"Starts fast, ends slow, common for menus and modals"})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Cubic bezier example"}),e.jsx("pre",{className:"code",children:`.panel {
  transition: transform 220ms cubic-bezier(0.2, 0.9, 0.2, 1);
}`})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"7) Reduced motion support"}),e.jsxs("p",{className:"p",children:["Some users prefer fewer animations. Use"," ",e.jsx("span",{className:"mono",children:"prefers-reduced-motion"})," ","to respect that."]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Reduced motion CSS"}),e.jsx("pre",{className:"code",children:`@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}`})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"8) Terms and full forms"}),e.jsxs("div",{className:"abbrGrid",children:[e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"CSS"})," - Cascading Style Sheets"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"rAF"})," - requestAnimationFrame"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"FPS"})," - Frames Per Second"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"UI"})," - User Interface"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"GPU"})," - Graphics Processing Unit"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"CPU"})," - Central Processing Unit"]})]}),e.jsx("div",{className:"finalNote",children:"Fast animations are usually not about adding more code. They are about choosing the right properties to animate and keeping work away from layout."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Mini practice"}),e.jsxs("div",{className:"practice",children:[e.jsxs("div",{className:"pRow",children:[e.jsx("span",{className:"label",children:"Try"}),e.jsx("span",{className:"value",children:"Create a button that scales slightly on hover and fades on active. Use only transform and opacity."})]}),e.jsxs("div",{className:"pRow",children:[e.jsx("span",{className:"label",children:"Bonus"}),e.jsx("span",{className:"value",children:"Add reduced motion support so the effect turns off for those users."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Quick checklist"}),e.jsxs("div",{className:"checkGrid",children:[e.jsxs("div",{className:"check",children:[e.jsx(Ne,{})," Prefer transform and opacity"]}),e.jsxs("div",{className:"check",children:[e.jsx(Pn,{})," Avoid layout thrashing"]}),e.jsxs("div",{className:"check",children:[e.jsx(dt,{})," Keep durations short for UI"]}),e.jsxs("div",{className:"check",children:[e.jsx(Ce,{})," Use CSS first, JS when needed"]}),e.jsxs("div",{className:"check",children:[e.jsx(ms,{})," Respect reduced motion"]})]})]})]})})]})]})},Qf=220,Yf={Wrapper:te.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 22px 16px 10px;

        .top {
            padding: 10px 2px 12px;
        }

        .title {
            font-size: 22px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .sub {
            margin-top: 8px;
            max-width: 1120px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 900;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
            box-shadow: 0 18px 42px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 14px;

            border: 0;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;

            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;

                background-image:
                    radial-gradient(
                        720px 240px at 15% 10%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 10%,
                            transparent
                        ),
                        transparent 60%
                    ),
                    repeating-linear-gradient(
                        90deg,
                        color-mix(in srgb, var(--color-border) 18%, transparent)
                            0px,
                        color-mix(in srgb, var(--color-border) 18%, transparent)
                            1px,
                        transparent 1px,
                        transparent 22px
                    );
                opacity: 0.72;

                mask-image: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.15)
                );
            }

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 24%,
                    transparent
                );
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .accIcon {
            height: 40px;
            width: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                width: 18px;
                height: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }
        }

        .accText {
            min-width: 0;
        }

        .accTitle {
            font-size: 14px;
            font-weight: 950;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accHint {
            margin-top: 3px;
            font-size: 12.5px;
            font-weight: 750;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .chev {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            width: 38px;
            height: 38px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );

            color: var(--color-text-secondary);
            box-shadow: 0 12px 26px var(--color-shadow);

            transition: transform 160ms ease;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .chev.open {
            transform: rotate(180deg);
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            border-top: 1px solid var(--color-border);
            transition: grid-template-rows ${Qf}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            min-height: 0;
            padding: 14px;
        }

        .sec {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            background: color-mix(in srgb, var(--color-surface-2) 56%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
            margin-bottom: 12px;
            overflow: hidden;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;
                background-image: radial-gradient(
                    820px 260px at 10% 0%,
                    color-mix(in srgb, var(--color-primary) 9%, transparent),
                    transparent 62%
                );
                opacity: 0.9;
            }

            > * {
                position: relative;
                z-index: 1;
            }
        }

        .h3 {
            font-size: 15px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-weight: 650;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .miniTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .miniText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .layerGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 920px) {
                grid-template-columns: 1fr;
            }
        }

        .layer {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .lTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .lIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                transparent
            );
            color: var(--color-primary);

            svg {
                width: 16px;
                height: 16px;
            }
        }

        .lBody {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .termGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .term {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .tHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .tag {
            display: inline-flex;
            align-items: center;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
        }

        .tBody {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-weight: 650;
        }

        .callout {
            margin-top: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: color-mix(in srgb, var(--color-surface) 72%, #000);
        }

        .cIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );
            color: var(--color-primary);

            svg {
                width: 16px;
                height: 16px;
            }
        }

        .cTitle {
            font-weight: 950;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cSub {
            margin-top: 4px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .exampleBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .exTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .code {
            padding: 12px;
            margin: 0;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .miniList {
            margin-top: 12px;
            display: grid;
            gap: 8px;
        }

        .row {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            @media (width < 720px) {
                flex-direction: column;
            }
        }

        .label {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
        }

        .value {
            color: var(--color-text-secondary);
            font-weight: 750;
            line-height: 1.6;
        }

        .abbrGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .abbr {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 60%,
                transparent
            );
            color: var(--color-text-secondary);
            font-weight: 800;
            line-height: 1.6;
        }

        .practice {
            margin-top: 10px;
            display: grid;
            gap: 8px;
        }

        .pRow {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            @media (width < 720px) {
                flex-direction: column;
            }
        }

        .checkGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 920px) {
                grid-template-columns: 1fr;
            }
        }

        .check {
            display: flex;
            align-items: center;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.55;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-primary);
                flex: 0 0 auto;
            }
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            letter-spacing: 0.1px;
            color: color-mix(
                in srgb,
                var(--color-primary) 76%,
                var(--color-text-primary)
            );
        }

        .finalNote {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: color-mix(in srgb, var(--color-surface) 72%, #000);
            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.7;
            box-shadow: 0 18px 40px var(--color-shadow);
        }
    `},Kf=220,Jf=()=>{const[a,c]=N.useState(!1),[l,p]=N.useState(!1),[m,g]=N.useState(!1),b=N.useMemo(()=>({title:"Architecture",sub:"Frontend architecture means how you organize code so it stays readable, scalable, testable, and fast as features grow. It is the difference between a demo and a production system."}),[]),k=()=>c(h=>!h);return N.useEffect(()=>{let h=null;return a?(p(!0),requestAnimationFrame(()=>g(!0))):(g(!1),h=window.setTimeout(()=>p(!1),Kf)),()=>{h&&window.clearTimeout(h)}},[a]),e.jsxs(Yf.Wrapper,{id:"architecture",children:[e.jsxs("div",{className:"top",children:[e.jsx("h2",{className:"title",children:"Architecture"}),e.jsx("p",{className:"sub",children:b.sub}),e.jsxs("div",{className:"pillRow","aria-label":"At a glance",children:[e.jsxs("span",{className:"pill",children:[e.jsx(Ne,{})," Structure"]}),e.jsxs("span",{className:"pill",children:[e.jsx(Qo,{})," Data flow"]}),e.jsxs("span",{className:"pill",children:[e.jsx(fn,{})," Maintainability"]}),e.jsxs("span",{className:"pill",children:[e.jsx(Ce,{})," Performance"]})]})]}),e.jsxs("div",{className:"accordion",children:[e.jsxs("button",{type:"button",className:"accBtn",onClick:k,"aria-expanded":a,"aria-controls":"architecture-panel",children:[e.jsxs("div",{className:"accLeft",children:[e.jsx("span",{className:"accIcon",children:e.jsx(Ah,{})}),e.jsxs("div",{className:"accText",children:[e.jsx("div",{className:"accTitle",children:b.title}),e.jsxs("div",{className:"accHint",children:["Click to ",a?"collapse":"expand"," with clear rules, examples, and practical patterns"]})]})]}),e.jsx("span",{className:`chev ${a?"open":""}`,children:e.jsx(Ie,{})})]}),l&&e.jsx("div",{id:"architecture-panel",className:`panel ${m?"open":""}`,children:e.jsxs("div",{className:"panelInner",children:[e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:'1) What "frontend architecture" means'}),e.jsxs("p",{className:"p",children:["Architecture is your project blueprint:",e.jsx("br",{}),"- where code lives",e.jsx("br",{}),"- how UI layers talk to data layers",e.jsx("br",{}),"- what is reusable vs feature-specific",e.jsx("br",{}),"- how you keep changes small and safe"]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Goal"}),e.jsx("p",{className:"miniText",children:"Make new features easy to add without breaking old ones."})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Signal of good architecture"}),e.jsx("p",{className:"miniText",children:"You can find the right file fast, and changes do not cause random side effects."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"2) Layers (simple mental model)"}),e.jsxs("div",{className:"layerGrid",children:[e.jsxs("div",{className:"layer",children:[e.jsxs("div",{className:"lTitle",children:[e.jsx("span",{className:"lIcon",children:e.jsx(Ha,{})}),"UI layer"]}),e.jsx("div",{className:"lBody",children:"Components, pages, layout. Pure rendering. Minimal business logic."})]}),e.jsxs("div",{className:"layer",children:[e.jsxs("div",{className:"lTitle",children:[e.jsx("span",{className:"lIcon",children:e.jsx(Qo,{})}),"Data layer"]}),e.jsx("div",{className:"lBody",children:"API calls, caching, mapping server shape to UI shape. Centralized service layer."})]}),e.jsxs("div",{className:"layer",children:[e.jsxs("div",{className:"lTitle",children:[e.jsx("span",{className:"lIcon",children:e.jsx(mu,{})}),"State layer"]}),e.jsx("div",{className:"lBody",children:"Client state, server state, derived state. Context, reducers, query cache."})]}),e.jsxs("div",{className:"layer",children:[e.jsxs("div",{className:"lTitle",children:[e.jsx("span",{className:"lIcon",children:e.jsx(fn,{})}),"Quality layer"]}),e.jsx("div",{className:"lBody",children:"Validation, error boundaries, logging, testing, type rules (if used)."})]})]}),e.jsx("div",{className:"finalNote",children:"Rule: keep UI dumb, keep data logic centralized, keep state predictable."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"3) A clean folder structure example"}),e.jsx("p",{className:"p",children:"There are many valid structures. The best one is the one your team can follow consistently. Here is a common production-friendly layout:"}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Example (React + Vite)"}),e.jsx("pre",{className:"code",children:`src/
  components/
    header/
      index.jsx
      styled.js
    footer/
      index.jsx
      styled.js

  pages/
    home/
      index.jsx
      styled.js
    docs/
      index.jsx
      styled.js

  topics/
    htmlDeep/
      index.jsx
      styled.js
    architecture/
      index.jsx
      styled.js

  services/
    api.js
    endpoints.js

  utils/
    format.js
    guards.js

  App.jsx
  main.jsx`})]}),e.jsxs("div",{className:"miniList",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"components"}),e.jsx("span",{className:"value",children:"Reusable UI pieces (header, footer, buttons)"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"pages"}),e.jsx("span",{className:"value",children:"Route-level screens (composition happens here)"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"topics"}),e.jsx("span",{className:"value",children:"Single-focus content sections (your core notes)"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"services"}),e.jsx("span",{className:"value",children:"All API calls in one place (service layer)"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"utils"}),e.jsx("span",{className:"value",children:"Small helpers, pure functions, no side effects"})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"4) Component boundaries and responsibilities"}),e.jsxs("p",{className:"p",children:['Good architecture has clear "who does what":',e.jsx("br",{}),"- presentational components render UI",e.jsx("br",{}),"- container components connect data and state",e.jsx("br",{}),"- services handle API and mapping"]}),e.jsxs("div",{className:"termGrid",children:[e.jsxs("div",{className:"term",children:[e.jsxs("div",{className:"tHead",children:[e.jsx("span",{className:"mono",children:"Presentational"}),e.jsx("span",{className:"tag",children:"UI only"})]}),e.jsxs("p",{className:"tBody",children:["Receives props, renders UI. No fetching. Example:"," ",e.jsx("span",{className:"mono",children:"Card"}),","," ",e.jsx("span",{className:"mono",children:"Table"}),","," ",e.jsx("span",{className:"mono",children:"Badge"}),"."]})]}),e.jsxs("div",{className:"term",children:[e.jsxs("div",{className:"tHead",children:[e.jsx("span",{className:"mono",children:"Container"}),e.jsx("span",{className:"tag",children:"Wiring"})]}),e.jsx("p",{className:"tBody",children:"Fetches data, handles loading and errors, passes data to presentational components."})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Pseudo example"}),e.jsx("pre",{className:"code",children:`// Container
function UsersPage() {
  const { data, loading, error } = useUsers();
  return <UsersList data={data} loading={loading} error={error} />;
}

// Presentational
function UsersList({ data, loading, error }) {
  if (loading) return <Spinner />;
  if (error) return <ErrorBox />;
  return data.map(u => <UserCard key={u.id} user={u} />);
}`})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"5) Data flow rules (avoid spaghetti)"}),e.jsxs("p",{className:"p",children:["Most frontend bugs happen when data flow becomes unclear. Follow these rules:",e.jsx("br",{}),"- keep API calls in one service layer",e.jsx("br",{}),"- map server response to UI shape once",e.jsx("br",{}),"- do not spread fetch logic inside random components"]}),e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ge,{})}),e.jsxs("div",{className:"cText",children:[e.jsx("div",{className:"cTitle",children:"Service layer"}),e.jsx("div",{className:"cSub",children:"A single place for all API calls so later changes are minimal."})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Service layer sketch"}),e.jsx("pre",{className:"code",children:`// services/api.js
export async function getUser(id) {
  const res = await fetch("/api/users/" + id);
  if (!res.ok) throw new Error("Request failed");
  return res.json();
}`})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"6) Performance architecture (build it in)"}),e.jsxs("p",{className:"p",children:['Performance is not only "optimization". It is architecture decisions:',e.jsx("br",{}),"- split large routes (code splitting)",e.jsx("br",{}),"- keep components small and stable",e.jsx("br",{}),"- memoize only where needed",e.jsx("br",{}),"- avoid rerender chains"]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Code splitting"}),e.jsxs("p",{className:"miniText",children:["Load heavy pages only when user navigates. Example:"," ",e.jsx("span",{className:"mono",children:"React.lazy"}),"."]})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Stable props"}),e.jsx("p",{className:"miniText",children:"Avoid creating new objects/functions every render unless needed. It helps memoized components."})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Lazy loading example"}),e.jsx("pre",{className:"code",children:`const Docs = React.lazy(() => import("./pages/docs"));

<Route
  path="/docs"
  element={
    <React.Suspense fallback={<Spinner />}>
      <Docs />
    </React.Suspense>
  }
/>`})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"7) Error handling and reliability"}),e.jsxs("p",{className:"p",children:["Production apps must handle failures:",e.jsx("br",{}),"- network errors",e.jsx("br",{}),"- empty states",e.jsx("br",{}),"- permission issues",e.jsx("br",{}),"- unexpected crashes"]}),e.jsxs("div",{className:"miniList",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Loading state"}),e.jsx("span",{className:"value",children:"Skeletons or spinners, avoid blank screens"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Error state"}),e.jsx("span",{className:"value",children:"Human-readable messages, retry button"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Empty state"}),e.jsx("span",{className:"value",children:"No data is not an error, guide user next action"})]})]}),e.jsx("div",{className:"finalNote",children:"Reliability is a feature. Architecture should make failures predictable and recoverable."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"8) Terms and full forms"}),e.jsxs("div",{className:"abbrGrid",children:[e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"UI"})," - User Interface"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"API"})," - Application Programming Interface"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"DOM"})," - Document Object Model"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"SPA"})," - Single Page Application"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"CSR"})," - Client Side Rendering"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"SSR"})," - Server Side Rendering"]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Mini practice"}),e.jsxs("div",{className:"practice",children:[e.jsxs("div",{className:"pRow",children:[e.jsx("span",{className:"label",children:"Try"}),e.jsx("span",{className:"value",children:'Make a "Products" feature. Put UI in a page, put API calls in services, and keep reusable cards in components.'})]}),e.jsxs("div",{className:"pRow",children:[e.jsx("span",{className:"label",children:"Goal"}),e.jsx("span",{className:"value",children:"A new developer should locate product code in under 30 seconds."})]})]}),e.jsxs("div",{className:"checkGrid",children:[e.jsxs("div",{className:"check",children:[e.jsx(Ne,{})," Separate UI and data"]}),e.jsxs("div",{className:"check",children:[e.jsx(Qo,{})," Centralize API calls"]}),e.jsxs("div",{className:"check",children:[e.jsx(fn,{})," Predictable states"]}),e.jsxs("div",{className:"check",children:[e.jsx(Ce,{})," Ship performance by design"]}),e.jsxs("div",{className:"check",children:[e.jsx(hs,{})," Keep code discoverable"]})]})]})]})})]})]})},Xf=220,Zf={Wrapper:te.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 22px 16px 10px;

        .top {
            padding: 10px 2px 12px;
        }

        .title {
            font-size: 22px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .sub {
            margin-top: 8px;
            max-width: 1100px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 900;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
            box-shadow: 0 18px 42px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 14px;

            border: 0;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;

            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;

                background-image:
                    radial-gradient(
                        720px 240px at 15% 10%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 10%,
                            transparent
                        ),
                        transparent 60%
                    ),
                    radial-gradient(
                        620px 220px at 85% 0%,
                        color-mix(in srgb, var(--color-accent) 8%, transparent),
                        transparent 62%
                    ),
                    repeating-linear-gradient(
                        90deg,
                        color-mix(in srgb, var(--color-border) 18%, transparent)
                            0px,
                        color-mix(in srgb, var(--color-border) 18%, transparent)
                            1px,
                        transparent 1px,
                        transparent 26px
                    );
                opacity: 0.72;

                mask-image: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.15)
                );
            }

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 24%,
                    transparent
                );
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .accIcon {
            height: 40px;
            width: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                width: 18px;
                height: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }
        }

        .accText {
            min-width: 0;
        }

        .accTitle {
            font-size: 14px;
            font-weight: 950;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accHint {
            margin-top: 3px;
            font-size: 12.5px;
            font-weight: 750;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .chev {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            width: 38px;
            height: 38px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );

            color: var(--color-text-secondary);
            box-shadow: 0 12px 26px var(--color-shadow);

            transition: transform 160ms ease;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .chev.open {
            transform: rotate(180deg);
        }

        /* load on click + smooth open close */
        .panel {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            border-top: 1px solid var(--color-border);
            transition: grid-template-rows ${Xf}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            min-height: 0;
            padding: 14px;
        }

        .sec {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            background: color-mix(in srgb, var(--color-surface-2) 56%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
            margin-bottom: 12px;
            overflow: hidden;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;
                background-image: radial-gradient(
                    820px 260px at 10% 0%,
                    color-mix(in srgb, var(--color-primary) 9%, transparent),
                    transparent 62%
                );
                opacity: 0.9;
            }

            > * {
                position: relative;
                z-index: 1;
            }
        }

        .h3 {
            font-size: 15px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-weight: 650;
        }

        .flowGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 980px) {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            @media (width < 680px) {
                grid-template-columns: 1fr;
            }
        }

        .flow {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .flowTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .flowText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .miniTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .miniText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .termGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .term {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .tHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .tag {
            display: inline-flex;
            align-items: center;
            padding: 6px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );

            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
        }

        .tBody {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-weight: 650;
        }

        .callout {
            margin-top: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);
        }

        .callout.warn {
            border-color: color-mix(
                in srgb,
                var(--color-warning) 38%,
                var(--color-border)
            );
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                var(--color-surface)
            );
        }

        .cIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );
            color: var(--color-primary);

            svg {
                width: 16px;
                height: 16px;
            }
        }

        .callout.warn .cIcon {
            background: color-mix(
                in srgb,
                var(--color-warning) 14%,
                transparent
            );
            color: var(--color-warning);
        }

        .cTitle {
            font-weight: 950;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cSub {
            margin-top: 4px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .exampleBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .exTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .code {
            padding: 12px;
            margin: 0;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .miniList {
            margin-top: 12px;
            display: grid;
            gap: 8px;
        }

        .row {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            @media (width < 720px) {
                flex-direction: column;
            }
        }

        .label {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
        }

        .value {
            color: var(--color-text-secondary);
            font-weight: 750;
            line-height: 1.6;
        }

        .abbrGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .abbr {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 60%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            line-height: 1.6;
        }

        .practice {
            margin-top: 10px;
            display: grid;
            gap: 8px;
        }

        .pRow {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            @media (width < 720px) {
                flex-direction: column;
            }
        }

        .checkGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 920px) {
                grid-template-columns: 1fr;
            }
        }

        .check {
            display: flex;
            align-items: center;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.55;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-primary);
                flex: 0 0 auto;
            }
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            letter-spacing: 0.1px;
            color: color-mix(
                in srgb,
                var(--color-primary) 76%,
                var(--color-text-primary)
            );
        }

        .finalNote {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.7;
            box-shadow: 0 18px 40px var(--color-shadow);
        }
    `},eg=220,rg=()=>{const[a,c]=N.useState(!1),[l,p]=N.useState(!1),[m,g]=N.useState(!1),b=N.useMemo(()=>({title:"Browser rendering",sub:"Browser rendering is the pipeline that turns HTML + CSS into pixels on the screen. Understanding this explains reflow vs repaint, why some UI updates are slow, and how to optimize performance."}),[]),k=()=>c(h=>!h);return N.useEffect(()=>{let h=null;return a?(p(!0),requestAnimationFrame(()=>g(!0))):(g(!1),h=window.setTimeout(()=>p(!1),eg)),()=>{h&&window.clearTimeout(h)}},[a]),e.jsxs(Zf.Wrapper,{id:"browser-rendering",children:[e.jsxs("div",{className:"top",children:[e.jsx("h2",{className:"title",children:"Browser rendering"}),e.jsx("p",{className:"sub",children:b.sub}),e.jsxs("div",{className:"pillRow","aria-label":"At a glance",children:[e.jsxs("span",{className:"pill",children:[e.jsx(gs,{})," HTML to DOM"]}),e.jsxs("span",{className:"pill",children:[e.jsx(Ne,{})," CSS to CSSOM"]}),e.jsxs("span",{className:"pill",children:[e.jsx(ms,{})," Layout and paint"]}),e.jsxs("span",{className:"pill",children:[e.jsx(Ce,{})," Performance"]})]})]}),e.jsxs("div",{className:"accordion",children:[e.jsxs("button",{type:"button",className:"accBtn",onClick:k,"aria-expanded":a,"aria-controls":"browser-rendering-panel",children:[e.jsxs("div",{className:"accLeft",children:[e.jsx("span",{className:"accIcon",children:e.jsx(gn,{})}),e.jsxs("div",{className:"accText",children:[e.jsx("div",{className:"accTitle",children:b.title}),e.jsxs("div",{className:"accHint",children:["Click to ",a?"collapse":"expand"," with clear pipeline steps and real examples"]})]})]}),e.jsx("span",{className:`chev ${a?"open":""}`,children:e.jsx(Ie,{})})]}),l&&e.jsx("div",{id:"browser-rendering-panel",className:`panel ${m?"open":""}`,children:e.jsxs("div",{className:"panelInner",children:[e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"1) The full pipeline"}),e.jsx("p",{className:"p",children:"When you load a page, the browser runs a pipeline. Each step creates a structure that the next step depends on."}),e.jsxs("div",{className:"flowGrid",children:[e.jsxs("div",{className:"flow",children:[e.jsx("div",{className:"flowTitle",children:"HTML parse"}),e.jsxs("p",{className:"flowText",children:["HTML becomes"," ",e.jsx("span",{className:"mono",children:"DOM"})," ","(Document Object Model)."]})]}),e.jsxs("div",{className:"flow",children:[e.jsx("div",{className:"flowTitle",children:"CSS parse"}),e.jsxs("p",{className:"flowText",children:["CSS becomes"," ",e.jsx("span",{className:"mono",children:"CSSOM"})," ","(CSS Object Model)."]})]}),e.jsxs("div",{className:"flow",children:[e.jsx("div",{className:"flowTitle",children:"Render tree"}),e.jsxs("p",{className:"flowText",children:["DOM + CSSOM become a"," ",e.jsx("span",{className:"mono",children:"render tree"})," ","(only visible nodes)."]})]}),e.jsxs("div",{className:"flow",children:[e.jsx("div",{className:"flowTitle",children:"Layout"}),e.jsxs("p",{className:"flowText",children:["Compute sizes and positions. This is"," ",e.jsx("span",{className:"mono",children:"reflow"})," ","in common terms."]})]}),e.jsxs("div",{className:"flow",children:[e.jsx("div",{className:"flowTitle",children:"Paint"}),e.jsx("p",{className:"flowText",children:"Convert boxes into pixels (colors, text, borders, shadows)."})]}),e.jsxs("div",{className:"flow",children:[e.jsx("div",{className:"flowTitle",children:"Composite"}),e.jsx("p",{className:"flowText",children:"Combine layers on screen (often GPU-assisted)."})]})]}),e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ge,{})}),e.jsxs("div",{className:"cText",children:[e.jsx("div",{className:"cTitle",children:"Why this matters"}),e.jsx("div",{className:"cSub",children:"If your UI change triggers layout, it is usually more expensive than a paint-only change, and paint is usually more expensive than a pure composite change."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"2) DOM and CSSOM (what they mean)"}),e.jsxs("div",{className:"termGrid",children:[e.jsxs("div",{className:"term",children:[e.jsxs("div",{className:"tHead",children:[e.jsx("span",{className:"mono",children:"DOM"}),e.jsx("span",{className:"tag",children:"Tree"})]}),e.jsx("p",{className:"tBody",children:"DOM is the in-memory tree of your HTML. JavaScript reads and updates it."})]}),e.jsxs("div",{className:"term",children:[e.jsxs("div",{className:"tHead",children:[e.jsx("span",{className:"mono",children:"CSSOM"}),e.jsx("span",{className:"tag",children:"Rules"})]}),e.jsx("p",{className:"tBody",children:"CSSOM is the in-memory structure of CSS rules after parsing and resolving them."})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"DOM example (concept)"}),e.jsx("pre",{className:"code",children:`<main>
  <h1>Title</h1>
  <p>Text</p>
</main>

DOM becomes a tree:
main
- h1
- p`})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"CSSOM example (concept)"}),e.jsx("pre",{className:"code",children:`h1 { font-size: 32px; }
p  { color: #334155; }

CSSOM stores these rules so the browser can compute styles.`})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"3) Render tree (what gets rendered)"}),e.jsxs("p",{className:"p",children:["Render tree is not the same as DOM. It includes only nodes that actually appear on screen. For example, elements with"," ",e.jsx("span",{className:"mono",children:"display: none"})," ","do not appear in the render tree."]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"display: none"}),e.jsx("p",{className:"miniText",children:"Removed from layout and render tree. No space is reserved."})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"visibility: hidden"}),e.jsx("p",{className:"miniText",children:"Still takes space in layout, but not painted (invisible)."})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Visibility vs display"}),e.jsx("pre",{className:"code",children:`/* Not in render tree */
.hiddenA { display: none; }

/* In render tree + layout, but not visible */
.hiddenB { visibility: hidden; }`})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"4) Layout and paint"}),e.jsx("p",{className:"p",children:"Layout computes geometry, paint fills pixels. This is the core of UI cost."}),e.jsxs("div",{className:"miniList",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Layout"}),e.jsx("span",{className:"value",children:"widths, heights, positions, line wrapping, box model calculations"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Paint"}),e.jsx("span",{className:"value",children:"colors, text drawing, shadows, borders, images"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Composite"}),e.jsx("span",{className:"value",children:"combining layers, often cheaper than layout and paint"})]})]}),e.jsxs("div",{className:"callout warn",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Wa,{})}),e.jsxs("div",{className:"cText",children:[e.jsx("div",{className:"cTitle",children:"Common slow pattern"}),e.jsx("div",{className:"cSub",children:"Repeatedly reading layout values and then writing styles can cause layout thrashing."})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Layout thrashing (bad pattern)"}),e.jsx("pre",{className:"code",children:`// BAD: read then write repeatedly in a loop
for (let i = 0; i < 1000; i++) {
  const w = box.offsetWidth;   // read layout
  box.style.width = (w + 1) + "px"; // write layout
}

// This can force repeated layout work.`})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Better pattern (batch reads then writes)"}),e.jsx("pre",{className:"code",children:`// BETTER: read first, then write
const w = box.offsetWidth;
for (let i = 0; i < 1000; i++) {
  box.style.width = (w + i) + "px";
}

// Or use requestAnimationFrame for UI updates.`})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"5) Reflow vs repaint"}),e.jsx("p",{className:"p",children:"These are everyday words for layout and paint costs. Different changes trigger different work."}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Reflow (layout)"}),e.jsxs("p",{className:"miniText",children:["Triggered by changes like"," ",e.jsx("span",{className:"mono",children:"width"}),","," ",e.jsx("span",{className:"mono",children:"height"}),","," ",e.jsx("span",{className:"mono",children:"font-size"}),","," ",e.jsx("span",{className:"mono",children:"display"}),"."]})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Repaint (paint)"}),e.jsxs("p",{className:"miniText",children:["Triggered by changes like"," ",e.jsx("span",{className:"mono",children:"color"}),","," ",e.jsx("span",{className:"mono",children:"background"}),","," ",e.jsx("span",{className:"mono",children:"box-shadow"}),"."]})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Cheap animations (usually)"}),e.jsx("pre",{className:"code",children:`/* Often composite-friendly */
.card {
  transform: translateY(0);
  opacity: 1;
}

.card:hover {
  transform: translateY(-4px);
  opacity: 0.98;
}

/* transform and opacity typically avoid layout work */`})]}),e.jsxs("div",{className:"finalNote",children:["A common performance rule: prefer animating"," ",e.jsx("span",{className:"mono",children:"transform"})," and"," ",e.jsx("span",{className:"mono",children:"opacity"})," rather than width or height."]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"6) Critical Rendering Path (CRP)"}),e.jsxs("p",{className:"p",children:[e.jsx("strong",{children:"CRP"})," means"," ",e.jsx("strong",{children:"Critical Rendering Path"}),". It is the sequence of steps the browser must finish before it can show the first pixels."]}),e.jsxs("div",{className:"miniList",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Goal"}),e.jsx("span",{className:"value",children:"show content quickly, reduce blocking resources"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"CSS"}),e.jsx("span",{className:"value",children:"usually render-blocking (browser needs styles before paint)"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"JS"}),e.jsxs("span",{className:"value",children:["can block parsing when it runs, use"," ",e.jsx("span",{className:"mono",children:"defer"})," ","and"," ",e.jsx("span",{className:"mono",children:"async"})," ","wisely"]})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Defer vs async example"}),e.jsx("pre",{className:"code",children:`<!-- defer: downloads in parallel, runs after HTML parse -->
<script src="/app.js" defer><\/script>

<!-- async: downloads in parallel, runs as soon as downloaded -->
<script src="/analytics.js" async><\/script>`})]}),e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"cIcon",children:e.jsx(hs,{})}),e.jsxs("div",{className:"cText",children:[e.jsx("div",{className:"cTitle",children:"Quick practical rule"}),e.jsxs("div",{className:"cSub",children:["Use"," ",e.jsx("span",{className:"mono",children:"defer"})," ","for app scripts that depend on DOM. Use"," ",e.jsx("span",{className:"mono",children:"async"})," ","for independent scripts like analytics."]})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"7) Terms and full forms"}),e.jsxs("div",{className:"abbrGrid",children:[e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"DOM"})," - Document Object Model"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"CSSOM"})," - CSS Object Model"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"CRP"})," - Critical Rendering Path"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"GPU"})," - Graphics Processing Unit"]})]}),e.jsx("div",{className:"finalNote",children:"If you can explain DOM, CSSOM, render tree, layout, paint, and compositing, you can explain most frontend performance bugs."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Mini practice"}),e.jsxs("div",{className:"practice",children:[e.jsxs("div",{className:"pRow",children:[e.jsx("span",{className:"label",children:"Try"}),e.jsxs("span",{className:"value",children:["Create a card hover animation using"," ",e.jsx("span",{className:"mono",children:"transform"})," ","and"," ",e.jsx("span",{className:"mono",children:"opacity"}),". Avoid changing width and height."]})]}),e.jsxs("div",{className:"pRow",children:[e.jsx("span",{className:"label",children:"Think"}),e.jsx("span",{className:"value",children:"Which steps will this trigger: layout, paint, or composite?"})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Quick checklist"}),e.jsxs("div",{className:"checkGrid",children:[e.jsxs("div",{className:"check",children:[e.jsx(Ne,{})," Know DOM and CSSOM"]}),e.jsxs("div",{className:"check",children:[e.jsx(ms,{})," Avoid layout thrashing"]}),e.jsxs("div",{className:"check",children:[e.jsx(Ce,{})," Prefer transform and opacity"]}),e.jsxs("div",{className:"check",children:[e.jsx(gs,{})," Reduce render blocking CSS"]}),e.jsxs("div",{className:"check",children:[e.jsx(hs,{})," Use defer for app scripts"]})]})]})]})})]})]})},ng=220,sg={Wrapper:te.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 20px 16px;

        .top {
            margin-bottom: 16px;
        }

        .title {
            font-size: 22px;
            font-weight: 900;
        }

        .sub {
            margin-top: 6px;
            color: var(--color-text-secondary);
        }

        .pillRow {
            margin-top: 10px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            padding: 6px 12px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            font-size: 13px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
        }

        .accBtn {
            width: 100%;
            padding: 14px;
            background: var(--color-surface);
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: none;
            cursor: pointer;
        }

        .accLeft {
            display: flex;
            gap: 12px;
            align-items: center;
        }

        .accIcon {
            width: 36px;
            height: 36px;
            background: var(--color-surface-2);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .accTitle {
            font-weight: 800;
        }

        .accHint {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .chev {
            transition: transform 160ms ease;
        }

        .chev.open {
            transform: rotate(180deg);
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows ${ng}ms ease;
            overflow: hidden;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            padding: 16px;
        }

        .sec {
            margin-bottom: 20px;
        }

        .exampleBlock {
            margin-top: 10px;
            background: var(--color-code-bg);
            padding: 12px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
        }

        pre {
            margin: 0;
            font-size: 13px;
            line-height: 1.6;
        }

        .list {
            margin-top: 8px;
            padding-left: 16px;
            list-style: disc;
        }

        .finalNote {
            margin-top: 12px;
            padding: 10px;
            border-radius: 10px;
            background: var(--color-surface-2);
        }
    `},tg=220,ag=()=>{const[a,c]=N.useState(!1),[l,p]=N.useState(!1),[m,g]=N.useState(!1),b=N.useMemo(()=>({title:"DOM - Document Object Model",sub:"DOM is the browser's in-memory tree representation of your HTML document. JavaScript interacts with the DOM to read, modify, and update the UI."}),[]),k=()=>c(h=>!h);return N.useEffect(()=>{let h;return a?(p(!0),requestAnimationFrame(()=>g(!0))):(g(!1),h=setTimeout(()=>p(!1),tg)),()=>clearTimeout(h)},[a]),e.jsxs(sg.Wrapper,{id:"dom",children:[e.jsxs("div",{className:"top",children:[e.jsx("h2",{className:"title",children:"DOM"}),e.jsx("p",{className:"sub",children:b.sub}),e.jsxs("div",{className:"pillRow",children:[e.jsxs("span",{className:"pill",children:[e.jsx(Ne,{})," Tree structure"]}),e.jsxs("span",{className:"pill",children:[e.jsx(hs,{})," JS interaction"]}),e.jsxs("span",{className:"pill",children:[e.jsx(Pn,{})," Dynamic updates"]})]})]}),e.jsxs("div",{className:"accordion",children:[e.jsxs("button",{type:"button",className:"accBtn",onClick:k,"aria-expanded":a,children:[e.jsxs("div",{className:"accLeft",children:[e.jsx("span",{className:"accIcon",children:e.jsx(gn,{})}),e.jsxs("div",{children:[e.jsx("div",{className:"accTitle",children:b.title}),e.jsxs("div",{className:"accHint",children:["Click to ",a?"collapse":"expand"," full explanation"]})]})]}),e.jsx("span",{className:`chev ${a?"open":""}`,children:e.jsx(Ie,{})})]}),l&&e.jsx("div",{className:`panel ${m?"open":""}`,children:e.jsxs("div",{className:"panelInner",children:[e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"1) What DOM means"}),e.jsxs("p",{children:[e.jsx("strong",{children:"DOM"})," stands for"," ",e.jsx("strong",{children:"Document Object Model"}),". It is a structured tree of objects that represents your HTML document in memory."]}),e.jsx("div",{className:"exampleBlock",children:e.jsx("pre",{children:`HTML:

<body>
  <h1>Hello</h1>
  <p>World</p>
</body>

DOM Tree:

Document
 └── html
      └── body
           ├── h1
           └── p`})}),e.jsx("p",{children:"Every element becomes a node in this tree. JavaScript can access and modify these nodes."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"2) DOM Nodes"}),e.jsx("p",{children:"Everything in DOM is a node:"}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Element node"})," - HTML tags"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Text node"})," - text inside tags"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Attribute node"})," - class, id, etc"]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"3) Accessing DOM with JavaScript"}),e.jsx("div",{className:"exampleBlock",children:e.jsx("pre",{children:`const heading = document.querySelector("h1");
heading.textContent = "Updated Title";`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"document"})," represents the whole page.",e.jsx("br",{}),e.jsx("strong",{children:"querySelector"})," finds elements.",e.jsx("br",{}),e.jsx("strong",{children:"textContent"})," updates text."]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"4) Creating elements"}),e.jsx("div",{className:"exampleBlock",children:e.jsx("pre",{children:`const div = document.createElement("div");
div.textContent = "New Box";

document.body.appendChild(div);`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"createElement"})," creates new node.",e.jsx("br",{}),e.jsx("strong",{children:"appendChild"})," inserts into DOM."]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"5) Event handling"}),e.jsx("div",{className:"exampleBlock",children:e.jsx("pre",{children:`const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  alert("Clicked");
});`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"addEventListener"})," attaches behavior to DOM elements."]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"6) DOM and Rendering"}),e.jsx("p",{children:"When DOM changes, browser may:"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Recalculate styles"}),e.jsx("li",{children:"Recalculate layout (Reflow)"}),e.jsx("li",{children:"Repaint pixels"})]}),e.jsx("p",{children:"Too many DOM updates can slow performance."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"7) Important terms"}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"API"})," - Application Programming Interface"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tree"})," - Hierarchical structure"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reflow"})," - Layout recalculation"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Repaint"})," - Visual update"]})]}),e.jsx("div",{className:"finalNote",children:"DOM is the bridge between HTML and JavaScript. Mastering DOM helps you understand React better."})]})]})})]})]})},ig=220,og={Wrapper:te.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 22px 16px 10px;

        .top {
            padding: 10px 2px 12px;
        }

        .title {
            font-size: 22px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .sub {
            margin-top: 8px;
            max-width: 1080px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 900;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
            box-shadow: 0 18px 42px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 14px;

            border: 0;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;

            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;

                background-image:
                    radial-gradient(
                        720px 240px at 15% 10%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 10%,
                            transparent
                        ),
                        transparent 60%
                    ),
                    repeating-linear-gradient(
                        90deg,
                        color-mix(in srgb, var(--color-border) 18%, transparent)
                            0px,
                        color-mix(in srgb, var(--color-border) 18%, transparent)
                            1px,
                        transparent 1px,
                        transparent 22px
                    );
                opacity: 0.72;

                mask-image: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.15)
                );
            }

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 24%,
                    transparent
                );
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .accIcon {
            height: 40px;
            width: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                width: 18px;
                height: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }
        }

        .accText {
            min-width: 0;
        }

        .accTitle {
            font-size: 14px;
            font-weight: 950;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accHint {
            margin-top: 3px;
            font-size: 12.5px;
            font-weight: 750;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .chev {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            width: 38px;
            height: 38px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );

            color: var(--color-text-secondary);
            box-shadow: 0 12px 26px var(--color-shadow);

            transition: transform 160ms ease;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .chev.open {
            transform: rotate(180deg);
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            border-top: 1px solid var(--color-border);
            transition: grid-template-rows ${ig}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            min-height: 0;
            padding: 14px;
        }

        .sec {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            background: color-mix(in srgb, var(--color-surface-2) 56%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
            margin-bottom: 12px;
            overflow: hidden;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;
                background-image: radial-gradient(
                    800px 250px at 10% 0%,
                    color-mix(in srgb, var(--color-primary) 9%, transparent),
                    transparent 62%
                );
                opacity: 0.9;
            }

            > * {
                position: relative;
                z-index: 1;
            }
        }

        .h3 {
            font-size: 15px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-weight: 650;
        }

        .compareGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 920px) {
                grid-template-columns: 1fr;
            }
        }

        .compareCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .cHead {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );
            color: var(--color-primary);

            svg {
                width: 16px;
                height: 16px;
            }
        }

        .cTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badgeRow {
            margin-top: 10px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );
            color: var(--color-text-secondary);
            font-size: 12px;
            font-weight: 900;
        }

        .badge.ok {
            border-color: color-mix(
                in srgb,
                var(--color-success) 35%,
                var(--color-border)
            );
        }

        .badge.warn {
            border-color: color-mix(
                in srgb,
                var(--color-warning) 40%,
                var(--color-border)
            );
        }

        .flowGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 10px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .flow {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 60%,
                transparent
            );
        }

        .flowTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .flowText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            font-weight: 650;
            line-height: 1.6;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .miniTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .list {
            margin-top: 8px;
            display: grid;
            gap: 6px;
            color: var(--color-text-secondary);
            font-weight: 650;
            line-height: 1.6;

            li {
                padding-left: 12px;
                position: relative;
            }

            li::before {
                content: "-";
                position: absolute;
                left: 0;
                top: 0;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 70%,
                    var(--color-text-primary)
                );
                font-weight: 900;
            }
        }

        .callout {
            margin-top: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);
        }

        .callout.warn {
            border-color: color-mix(
                in srgb,
                var(--color-warning) 40%,
                var(--color-border)
            );
        }

        .callIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );
            color: var(--color-primary);

            svg {
                width: 16px;
                height: 16px;
            }
        }

        .callTitle {
            font-weight: 950;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .callSub {
            margin-top: 4px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .exampleBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .exTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .code {
            padding: 12px;
            margin: 0;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .tipGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .tip {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .tipHead {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-primary);
            }
        }

        .tipBody {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .abbrGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .abbr {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 60%,
                transparent
            );
            color: var(--color-text-secondary);
            font-weight: 800;
            line-height: 1.6;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            letter-spacing: 0.1px;
            color: color-mix(
                in srgb,
                var(--color-primary) 76%,
                var(--color-text-primary)
            );
        }

        .finalNote {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: color-mix(in srgb, var(--color-surface) 72%, #000);
            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.7;
            box-shadow: 0 18px 40px var(--color-shadow);
        }
    `},lg=220,cg=()=>{const[a,c]=N.useState(!1),[l,p]=N.useState(!1),[m,g]=N.useState(!1),b=N.useMemo(()=>({title:"Reflow vs repaint",sub:"Both are rendering costs. Reflow is layout recalculation (geometry). Repaint is drawing pixels (visual). Reflow usually triggers repaint, so reduce layout thrashing."}),[]),k=()=>c(h=>!h);return N.useEffect(()=>{let h=null;return a?(p(!0),requestAnimationFrame(()=>g(!0))):(g(!1),h=window.setTimeout(()=>p(!1),lg)),()=>{h&&window.clearTimeout(h)}},[a]),e.jsxs(og.Wrapper,{id:"reflow-vs-repaint",children:[e.jsxs("div",{className:"top",children:[e.jsx("h2",{className:"title",children:"Reflow vs repaint"}),e.jsx("p",{className:"sub",children:b.sub}),e.jsxs("div",{className:"pillRow","aria-label":"At a glance",children:[e.jsxs("span",{className:"pill",children:[e.jsx(Pn,{})," Reflow - layout"]}),e.jsxs("span",{className:"pill",children:[e.jsx(Pp,{})," Repaint - pixels"]}),e.jsxs("span",{className:"pill",children:[e.jsx(Ne,{})," Composite - layers"]}),e.jsxs("span",{className:"pill",children:[e.jsx(Ce,{})," Performance topic"]})]})]}),e.jsxs("div",{className:"accordion",children:[e.jsxs("button",{type:"button",className:"accBtn",onClick:k,"aria-expanded":a,"aria-controls":"reflow-vs-repaint-panel",children:[e.jsxs("div",{className:"accLeft",children:[e.jsx("span",{className:"accIcon",children:e.jsx(tl,{})}),e.jsxs("div",{className:"accText",children:[e.jsx("div",{className:"accTitle",children:b.title}),e.jsxs("div",{className:"accHint",children:["Click to ",a?"collapse":"expand"," with beginner explanation, examples, and what to avoid"]})]})]}),e.jsx("span",{className:`chev ${a?"open":""}`,children:e.jsx(Ie,{})})]}),l&&e.jsx("div",{id:"reflow-vs-repaint-panel",className:`panel ${m?"open":""}`,children:e.jsxs("div",{className:"panelInner",children:[e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Meaning in simple words"}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("div",{className:"compareCard",children:[e.jsxs("div",{className:"cHead",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Pn,{})}),e.jsx("div",{className:"cTitle",children:"Reflow (layout)"})]}),e.jsxs("p",{className:"p",children:["The browser recalculates positions and sizes of elements.",e.jsx("br",{}),"- width, height, margin, padding",e.jsx("br",{}),"- line wraps and text flow",e.jsx("br",{}),"- flex and grid layout changes"]}),e.jsxs("div",{className:"badgeRow",children:[e.jsx("span",{className:"badge warn",children:"Expensive"}),e.jsx("span",{className:"badge",children:"Affects geometry"})]})]}),e.jsxs("div",{className:"compareCard",children:[e.jsxs("div",{className:"cHead",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Pp,{})}),e.jsx("div",{className:"cTitle",children:"Repaint (paint)"})]}),e.jsxs("p",{className:"p",children:["The browser redraws pixels for an element.",e.jsx("br",{}),"- color, background, shadow",e.jsx("br",{}),"- border and outline",e.jsx("br",{}),"- visibility changes"]}),e.jsxs("div",{className:"badgeRow",children:[e.jsx("span",{className:"badge ok",children:"Usually cheaper"}),e.jsx("span",{className:"badge",children:"Affects visuals"})]})]})]}),e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"callIcon",children:e.jsx(ge,{})}),e.jsxs("div",{className:"callText",children:[e.jsx("div",{className:"callTitle",children:"Common relationship"}),e.jsx("div",{className:"callSub",children:"Reflow often triggers repaint because when geometry changes, pixels must be redrawn."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Tiny mental model (pipeline)"}),e.jsxs("p",{className:"p",children:["Typical browser rendering stages:",e.jsx("br",{}),"- Style calculation (apply CSS rules)",e.jsx("br",{}),"- Layout (reflow) - compute sizes and positions",e.jsx("br",{}),"- Paint (repaint) - draw pixels",e.jsx("br",{}),"- Composite - merge layers to final frame"]}),e.jsxs("div",{className:"flowGrid",children:[e.jsxs("div",{className:"flow",children:[e.jsx("div",{className:"flowTitle",children:"Style"}),e.jsx("p",{className:"flowText",children:"Which rules apply?"})]}),e.jsxs("div",{className:"flow",children:[e.jsx("div",{className:"flowTitle",children:"Layout (reflow)"}),e.jsx("p",{className:"flowText",children:"Where is it and how big?"})]}),e.jsxs("div",{className:"flow",children:[e.jsx("div",{className:"flowTitle",children:"Paint (repaint)"}),e.jsx("p",{className:"flowText",children:"What pixels should be drawn?"})]}),e.jsxs("div",{className:"flow",children:[e.jsx("div",{className:"flowTitle",children:"Composite"}),e.jsx("p",{className:"flowText",children:"Put layers together"})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"What changes cause what?"}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Usually causes reflow + repaint"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"width, height"}),e.jsx("li",{children:"margin, padding"}),e.jsx("li",{children:"font-size, line-height"}),e.jsx("li",{children:"display changes (none, block)"}),e.jsx("li",{children:"DOM insert/remove that affects layout"}),e.jsx("li",{children:"flex and grid changes"})]})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Usually causes repaint only"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"color"}),e.jsx("li",{children:"background-color"}),e.jsx("li",{children:"box-shadow"}),e.jsx("li",{children:"border-color"}),e.jsx("li",{children:"outline"}),e.jsx("li",{children:"visibility"})]})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Often only composite (best case)"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"transform (translate, scale)"}),e.jsx("li",{children:"opacity"}),e.jsx("li",{children:"filter (depends)"})]})]})]}),e.jsxs("div",{className:"finalNote",children:["If you animate position with"," ",e.jsx("span",{className:"mono",children:"top"})," and"," ",e.jsx("span",{className:"mono",children:"left"}),", you can trigger layout each frame. Prefer"," ",e.jsx("span",{className:"mono",children:"transform"})," for smoother animations."]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Layout thrashing (the real enemy)"}),e.jsxs("p",{className:"p",children:["Layout thrashing happens when you repeatedly:",e.jsx("br",{}),"- write styles (change layout)",e.jsx("br",{}),"- read layout (force browser to calculate)",e.jsx("br",{}),"- write again",e.jsx("br",{}),"This forces extra reflows and kills frame rate."]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Bad example (forces reflow repeatedly)"}),e.jsx("pre",{className:"code",children:`const box = document.querySelector(".box");

for (let i = 0; i < 1000; i++) {
  box.style.width = (box.offsetWidth + 1) + "px";
  // Reading offsetWidth forces layout (reflow)
}`})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Better example (batch reads then writes)"}),e.jsx("pre",{className:"code",children:`const box = document.querySelector(".box");

// Read once
const w = box.offsetWidth;

// Write once
box.style.width = (w + 1000) + "px";`})]}),e.jsxs("div",{className:"callout warn",children:[e.jsx("span",{className:"callIcon",children:e.jsx(Wa,{})}),e.jsxs("div",{className:"callText",children:[e.jsx("div",{className:"callTitle",children:"Common forced layout reads"}),e.jsx("div",{className:"callSub",children:"offsetWidth, offsetHeight, offsetTop, getBoundingClientRect, scrollTop, scrollHeight"})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Practical tips for React apps"}),e.jsxs("div",{className:"tipGrid",children:[e.jsxs("div",{className:"tip",children:[e.jsxs("div",{className:"tipHead",children:[e.jsx(Ne,{})," Prefer transform based animations"]}),e.jsxs("p",{className:"tipBody",children:["Use"," ",e.jsx("span",{className:"mono",children:"transform"})," ","and"," ",e.jsx("span",{className:"mono",children:"opacity"})," ","for smooth UI transitions."]})]}),e.jsxs("div",{className:"tip",children:[e.jsxs("div",{className:"tipHead",children:[e.jsx(Pn,{})," Avoid measuring in render loops"]}),e.jsx("p",{className:"tipBody",children:"If you measure layout, do it once, then set state once, not in a tight loop."})]}),e.jsxs("div",{className:"tip",children:[e.jsxs("div",{className:"tipHead",children:[e.jsx(Ce,{})," Use requestAnimationFrame for animation loops"]}),e.jsx("p",{className:"tipBody",children:"requestAnimationFrame syncs with the browser frame schedule."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Terms and full forms"}),e.jsxs("div",{className:"abbrGrid",children:[e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"DOM"})," - Document Object Model"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"CSS"})," - Cascading Style Sheets"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"FPS"})," - Frames Per Second"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"rAF"})," - requestAnimationFrame"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"Layout"})," - Reflow (geometry calculation)"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"Paint"})," - Repaint (pixel drawing)"]})]}),e.jsx("div",{className:"finalNote",children:"Reflow is geometry. Repaint is pixels. Composite is layer merging. Optimize by reducing layout changes and using transform for animations."})]})]})})]})]})},dg=220,pg={Wrapper:te.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 22px 16px 10px;

        .top {
            padding: 10px 2px 12px;
        }

        .title {
            font-size: 22px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .sub {
            margin-top: 8px;
            max-width: 1100px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 900;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            box-shadow: 0 18px 42px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 14px;

            border: 0;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;

            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;

                background-image:
                    radial-gradient(
                        700px 240px at 15% 10%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 10%,
                            transparent
                        ),
                        transparent 60%
                    ),
                    repeating-linear-gradient(
                        90deg,
                        color-mix(in srgb, var(--color-border) 18%, transparent)
                            0px,
                        color-mix(in srgb, var(--color-border) 18%, transparent)
                            1px,
                        transparent 1px,
                        transparent 26px
                    );
                opacity: 0.7;

                mask-image: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.15)
                );
            }

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 24%,
                    transparent
                );
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .accIcon {
            height: 40px;
            width: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                width: 18px;
                height: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }
        }

        .accText {
            min-width: 0;
        }

        .accTitle {
            font-size: 14px;
            font-weight: 950;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accHint {
            margin-top: 3px;
            font-size: 12.5px;
            font-weight: 750;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .chev {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            width: 38px;
            height: 38px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );

            color: var(--color-text-secondary);
            box-shadow: 0 12px 26px var(--color-shadow);

            transition: transform 160ms ease;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .chev.open {
            transform: rotate(180deg);
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            border-top: 1px solid var(--color-border);
            transition: grid-template-rows ${dg}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            min-height: 0;
            padding: 14px;
        }

        .sec {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            background: color-mix(in srgb, var(--color-surface-2) 56%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
            margin-bottom: 12px;
            overflow: hidden;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;
                background-image: radial-gradient(
                    800px 250px at 10% 0%,
                    color-mix(in srgb, var(--color-primary) 9%, transparent),
                    transparent 62%
                );
                opacity: 0.9;
            }

            > * {
                position: relative;
                z-index: 1;
            }
        }

        .h3 {
            font-size: 15px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-weight: 650;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .miniTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .miniText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .flowGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 920px) {
                grid-template-columns: 1fr;
            }
        }

        .flow {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .flowTop {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .flowIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );
            color: var(--color-primary);

            svg {
                width: 16px;
                height: 16px;
            }
        }

        .flowTitle {
            font-weight: 950;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .flowText {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .warn {
            margin-top: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);
        }

        .wIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-warning) 14%,
                transparent
            );
            color: var(--color-warning);

            svg {
                width: 16px;
                height: 16px;
            }
        }

        .wTitle {
            font-weight: 950;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .wSub {
            margin-top: 4px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .exampleBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .exTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .code {
            padding: 12px;
            margin: 0;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .miniList {
            margin-top: 12px;
            display: grid;
            gap: 8px;
        }

        .row {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            @media (width < 720px) {
                flex-direction: column;
            }
        }

        .label {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
        }

        .value {
            color: var(--color-text-secondary);
            font-weight: 750;
            line-height: 1.6;
        }

        .checkGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 920px) {
                grid-template-columns: 1fr;
            }
        }

        .check {
            display: flex;
            align-items: center;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.55;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-primary);
                flex: 0 0 auto;
            }
        }

        .mental {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: color-mix(in srgb, var(--color-surface-2) 64%, #000);
        }

        .mRow {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            padding: 12px;
            border-top: 1px solid var(--color-border);

            &:first-child {
                border-top: 0;
            }

            @media (width < 720px) {
                grid-template-columns: 1fr;
            }
        }

        .mLeft {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-primary);
            }
        }

        .mRight {
            color: var(--color-text-secondary);
            font-weight: 750;
            line-height: 1.6;
        }

        .abbrGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .abbr {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 60%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            line-height: 1.6;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            letter-spacing: 0.1px;
            color: color-mix(
                in srgb,
                var(--color-primary) 76%,
                var(--color-text-primary)
            );
        }

        .finalNote {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.7;
            box-shadow: 0 18px 40px var(--color-shadow);
        }
    `},ug=220,xg=()=>{const[a,c]=N.useState(!1),[l,p]=N.useState(!1),[m,g]=N.useState(!1),b=N.useMemo(()=>({title:"Critical rendering path",sub:"Critical rendering path (CRP) is the sequence of steps the browser follows to turn HTML, CSS, and JavaScript into pixels on the screen. If you understand CRP, you can predict why a page feels slow and how to fix it."}),[]),k=()=>c(h=>!h);return N.useEffect(()=>{let h=null;return a?(p(!0),requestAnimationFrame(()=>g(!0))):(g(!1),h=window.setTimeout(()=>p(!1),ug)),()=>{h&&window.clearTimeout(h)}},[a]),e.jsxs(pg.Wrapper,{id:"critical-rendering-path",children:[e.jsxs("div",{className:"top",children:[e.jsx("h2",{className:"title",children:"Critical rendering path"}),e.jsx("p",{className:"sub",children:b.sub}),e.jsxs("div",{className:"pillRow","aria-label":"At a glance",children:[e.jsxs("span",{className:"pill",children:[e.jsx(gs,{})," HTML to DOM"]}),e.jsxs("span",{className:"pill",children:[e.jsx(Ne,{})," CSS to CSSOM"]}),e.jsxs("span",{className:"pill",children:[e.jsx(On,{})," Render tree"]}),e.jsxs("span",{className:"pill",children:[e.jsx(Ce,{})," Paint pixels"]})]})]}),e.jsxs("div",{className:"accordion",children:[e.jsxs("button",{type:"button",className:"accBtn",onClick:k,"aria-expanded":a,"aria-controls":"crp-panel",children:[e.jsxs("div",{className:"accLeft",children:[e.jsx("span",{className:"accIcon",children:e.jsx(ms,{})}),e.jsxs("div",{className:"accText",children:[e.jsx("div",{className:"accTitle",children:b.title}),e.jsxs("div",{className:"accHint",children:["Click to ",a?"collapse":"expand"," with step-by-step pipeline and examples"]})]})]}),e.jsx("span",{className:`chev ${a?"open":""}`,children:e.jsx(Ie,{})})]}),l&&e.jsx("div",{id:"crp-panel",className:`panel ${m?"open":""}`,children:e.jsxs("div",{className:"panelInner",children:[e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Meaning"}),e.jsxs("p",{className:"p",children:[e.jsx("strong",{children:"Critical rendering path"})," ","means the minimum work required to show something useful on screen.",e.jsx("br",{}),"In simple words: how fast the browser can build structure, apply styles, and paint."]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Why it matters"}),e.jsx("p",{className:"miniText",children:"Slow CRP means slow first paint, slow content display, and a page that feels stuck."})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"What it controls"}),e.jsx("p",{className:"miniText",children:"When the browser can render, and what blocks rendering (CSS, JS, fonts)."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"The pipeline steps"}),e.jsxs("div",{className:"flowGrid",children:[e.jsxs("div",{className:"flow",children:[e.jsxs("div",{className:"flowTop",children:[e.jsx("span",{className:"flowIcon",children:e.jsx(gs,{})}),e.jsx("div",{className:"flowTitle",children:"Parse HTML"})]}),e.jsxs("p",{className:"flowText",children:["Browser parses HTML and builds the"," ",e.jsx("span",{className:"mono",children:"DOM"})," ","(Document Object Model)."]})]}),e.jsxs("div",{className:"flow",children:[e.jsxs("div",{className:"flowTop",children:[e.jsx("span",{className:"flowIcon",children:e.jsx(Ne,{})}),e.jsx("div",{className:"flowTitle",children:"Parse CSS"})]}),e.jsxs("p",{className:"flowText",children:["Browser parses CSS and builds the"," ",e.jsx("span",{className:"mono",children:"CSSOM"})," ","(CSS Object Model)."]})]}),e.jsxs("div",{className:"flow",children:[e.jsxs("div",{className:"flowTop",children:[e.jsx("span",{className:"flowIcon",children:e.jsx(On,{})}),e.jsx("div",{className:"flowTitle",children:"Build render tree"})]}),e.jsxs("p",{className:"flowText",children:["DOM + CSSOM combine to form the"," ",e.jsx("span",{className:"mono",children:"render tree"})," ","(only visible nodes)."]})]}),e.jsxs("div",{className:"flow",children:[e.jsxs("div",{className:"flowTop",children:[e.jsx("span",{className:"flowIcon",children:e.jsx(fs,{})}),e.jsx("div",{className:"flowTitle",children:"Layout"})]}),e.jsxs("p",{className:"flowText",children:["Compute sizes and positions of elements. This is also called"," ",e.jsx("span",{className:"mono",children:"reflow"}),"."]})]}),e.jsxs("div",{className:"flow",children:[e.jsxs("div",{className:"flowTop",children:[e.jsx("span",{className:"flowIcon",children:e.jsx(Ce,{})}),e.jsx("div",{className:"flowTitle",children:"Paint"})]}),e.jsx("p",{className:"flowText",children:"Fill pixels (text, colors, borders, shadows) on the screen."})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"CRP in one line"}),e.jsx("pre",{className:"code",children:`HTML -> DOM
CSS -> CSSOM
DOM + CSSOM -> Render Tree
Render Tree -> Layout (Reflow)
Layout -> Paint (Pixels)`})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"What blocks rendering"}),e.jsxs("p",{className:"p",children:["In CRP, some resources can stop the browser from painting quickly. These are called"," ",e.jsx("strong",{children:"render blocking"})," resources."]}),e.jsxs("div",{className:"warn",children:[e.jsx("span",{className:"wIcon",children:e.jsx(Wa,{})}),e.jsxs("div",{className:"wText",children:[e.jsx("div",{className:"wTitle",children:"Important rule"}),e.jsx("div",{className:"wSub",children:"CSS is render blocking by default. JavaScript can be parser blocking and can delay rendering if it touches DOM before styles are ready."})]})]}),e.jsxs("div",{className:"miniList",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"CSS"}),e.jsx("span",{className:"value",children:"Render blocking - browser often waits for CSS before first paint."})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"JS"}),e.jsx("span",{className:"value",children:"Parser blocking - normal scripts pause HTML parsing while they run."})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Fonts"}),e.jsx("span",{className:"value",children:"Can delay text rendering depending on font loading policy."})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Images"}),e.jsx("span",{className:"value",children:"Usually not render blocking for first paint, but can affect layout if sizes are unknown."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Scripts - normal vs defer vs async"}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Examples"}),e.jsx("pre",{className:"code",children:`<!-- Normal: blocks HTML parsing -->
<script src="app.js"><\/script>

<!-- Defer: downloads in parallel, runs after HTML is parsed -->
<script src="app.js" defer><\/script>

<!-- Async: downloads in parallel, runs as soon as ready (can interrupt parsing) -->
<script src="analytics.js" async><\/script>`})]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"defer"}),e.jsx("p",{className:"miniText",children:"Best default for app scripts. Keeps parsing fast and runs scripts after DOM is ready."})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"async"}),e.jsx("p",{className:"miniText",children:"Best for independent scripts (analytics). Order is not guaranteed."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"How to optimize the critical path"}),e.jsxs("div",{className:"checkGrid",children:[e.jsxs("div",{className:"check",children:[e.jsx(ge,{}),"Minimize render blocking CSS"]}),e.jsxs("div",{className:"check",children:[e.jsx(ge,{}),"Use defer for app scripts"]}),e.jsxs("div",{className:"check",children:[e.jsx(ge,{}),"Inline critical CSS for above-the-fold"]}),e.jsxs("div",{className:"check",children:[e.jsx(ge,{}),"Preload key fonts and CSS"]}),e.jsxs("div",{className:"check",children:[e.jsx(ge,{}),"Set image width and height to avoid layout jumps"]}),e.jsxs("div",{className:"check",children:[e.jsx(ge,{}),"Reduce DOM size and CSS complexity"]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Preload example"}),e.jsx("pre",{className:"code",children:`<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="/styles.css" as="style" />
<link rel="stylesheet" href="/styles.css" />`})]}),e.jsx("div",{className:"finalNote",children:"Optimization is about making the first useful paint happen faster. After that, you optimize interactivity and ongoing updates."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Tiny mental model"}),e.jsxs("div",{className:"mental",children:[e.jsxs("div",{className:"mRow",children:[e.jsxs("span",{className:"mLeft",children:["HTML",e.jsx(it,{}),"DOM"]}),e.jsx("span",{className:"mRight",children:"Structure tree"})]}),e.jsxs("div",{className:"mRow",children:[e.jsxs("span",{className:"mLeft",children:["CSS",e.jsx(it,{}),"CSSOM"]}),e.jsx("span",{className:"mRight",children:"Style rules tree"})]}),e.jsxs("div",{className:"mRow",children:[e.jsxs("span",{className:"mLeft",children:["DOM + CSSOM",e.jsx(it,{}),"Render tree"]}),e.jsx("span",{className:"mRight",children:"Visible nodes with styles"})]}),e.jsxs("div",{className:"mRow",children:[e.jsxs("span",{className:"mLeft",children:["Render tree",e.jsx(it,{}),"Layout"]}),e.jsx("span",{className:"mRight",children:"Sizes and positions"})]}),e.jsxs("div",{className:"mRow",children:[e.jsxs("span",{className:"mLeft",children:["Layout",e.jsx(it,{}),"Paint"]}),e.jsx("span",{className:"mRight",children:"Pixels on screen"})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Terms and full forms"}),e.jsxs("div",{className:"abbrGrid",children:[e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"CRP"})," - Critical Rendering Path"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"HTML"})," - HyperText Markup Language"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"DOM"})," - Document Object Model"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"CSSOM"})," - CSS Object Model"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"CSS"})," - Cascading Style Sheets"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"JS"})," - JavaScript"]})]})]})]})})]})]})},mg=220,hg={Wrapper:te.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 24px 16px;

        .top {
            margin-bottom: 16px;
        }

        .title {
            font-size: 22px;
            font-weight: 900;
        }

        .sub {
            margin-top: 6px;
            color: var(--color-text-secondary);
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 12px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            font-size: 13px;
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
        }

        .accBtn {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 16px;
            background: transparent;
            border: none;
            cursor: pointer;
        }

        .accLeft {
            display: flex;
            gap: 12px;
            align-items: center;
        }

        .accIcon {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            background: var(--color-surface-2);
        }

        .chev {
            transition: transform 150ms ease;
        }

        .chev.open {
            transform: rotate(180deg);
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows ${mg}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            padding: 20px;
        }

        .sec {
            margin-bottom: 24px;
            border: 1px solid var(--color-border);
            padding: 16px;
            border-radius: 14px;
        }

        h3 {
            margin-bottom: 10px;
            font-size: 16px;
            font-weight: 800;
        }

        p {
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        ul {
            padding-left: 18px;
            list-style: disc;
        }

        pre {
            background: var(--color-code-bg);
            padding: 12px;
            border-radius: 8px;
            font-size: 13px;
            overflow-x: auto;
        }
    `},fg=220,gg=()=>{const[a,c]=N.useState(!1),[l,p]=N.useState(!1),[m,g]=N.useState(!1),b=N.useMemo(()=>({title:"React deep",sub:"React is not just components. It is reconciliation, rendering phases, hooks lifecycle, context propagation, and performance engineering."}),[]),k=()=>c(h=>!h);return N.useEffect(()=>{let h=null;return a?(p(!0),requestAnimationFrame(()=>g(!0))):(g(!1),h=window.setTimeout(()=>p(!1),fg)),()=>{h&&window.clearTimeout(h)}},[a]),e.jsxs(hg.Wrapper,{id:"react-deep",children:[e.jsxs("div",{className:"top",children:[e.jsx("h2",{className:"title",children:"React deep"}),e.jsx("p",{className:"sub",children:b.sub}),e.jsxs("div",{className:"pillRow",children:[e.jsxs("span",{className:"pill",children:[e.jsx(Ne,{})," Virtual DOM"]}),e.jsxs("span",{className:"pill",children:[e.jsx(Oh,{})," Reconciliation"]}),e.jsxs("span",{className:"pill",children:[e.jsx(Ce,{})," Hooks"]}),e.jsxs("span",{className:"pill",children:[e.jsx(fs,{})," Performance"]})]})]}),e.jsxs("div",{className:"accordion",children:[e.jsxs("button",{className:"accBtn",onClick:k,"aria-expanded":a,children:[e.jsxs("div",{className:"accLeft",children:[e.jsx("span",{className:"accIcon",children:e.jsx(hs,{})}),e.jsxs("div",{children:[e.jsx("div",{className:"accTitle",children:b.title}),e.jsxs("div",{className:"accHint",children:["Click to ",a?"collapse":"expand"," deep internals"]})]})]}),e.jsx("span",{className:`chev ${a?"open":""}`,children:e.jsx(Ie,{})})]}),l&&e.jsx("div",{className:`panel ${m?"open":""}`,children:e.jsxs("div",{className:"panelInner",children:[e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"1) Virtual DOM"}),e.jsxs("p",{children:["The ",e.jsx("strong",{children:"Virtual DOM"})," is a lightweight JavaScript representation of the real DOM. React compares previous and new virtual trees before touching the browser."]}),e.jsx("pre",{children:`function App() {
  return <h1>Hello</h1>;
}`}),e.jsx("p",{children:"When state changes, React creates a new virtual tree, compares it with the old one, and updates only what changed."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"2) Reconciliation"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Reconciliation"})," is the process React uses to determine what changed between renders."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Different element type → full re-render"}),e.jsx("li",{children:"Same type → update props only"}),e.jsx("li",{children:"Keys help React track list items"})]}),e.jsx("pre",{children:`{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}`})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"3) Hooks internals"}),e.jsx("p",{children:"Hooks rely on call order. React internally stores hooks in an array-like structure per component."}),e.jsx("pre",{children:`useState()
useEffect()
useMemo()`}),e.jsx("p",{children:"Changing hook order breaks internal mapping."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"4) Render vs Commit phase"}),e.jsx("p",{children:"React has two main phases:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Render phase"})," - Calculates changes"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Commit phase"})," - Applies changes to DOM"]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"5) Context propagation"}),e.jsx("p",{children:"Context allows passing data without prop drilling. However, all consumers re-render when value changes."}),e.jsx("pre",{children:'const ThemeContext = createContext("dark");'})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"6) Performance optimization"}),e.jsxs("ul",{children:[e.jsx("li",{children:"React.memo"}),e.jsx("li",{children:"useMemo"}),e.jsx("li",{children:"useCallback"}),e.jsx("li",{children:"Code splitting"})]}),e.jsx("pre",{children:"const Expensive = React.memo(Component);"})]})]})})]})]})},vg=220,jg={Wrapper:te.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 24px 16px;

        .top {
            margin-bottom: 16px;
        }

        .title {
            font-size: 22px;
            font-weight: 900;
        }

        .sub {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            font-size: 12px;
            font-weight: 700;
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
        }

        .accBtn {
            width: 100%;
            padding: 14px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--color-surface);
            border: none;
            cursor: pointer;
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .accIcon {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .accTitle {
            font-weight: 800;
        }

        .accHint {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .chev {
            transition: transform 0.2s ease;
        }

        .chev.open {
            transform: rotate(180deg);
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            transition: grid-template-rows ${vg}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            padding: 16px;
        }

        .sec {
            margin-bottom: 20px;
        }

        h3 {
            font-size: 16px;
            font-weight: 800;
            margin-bottom: 8px;
        }

        p {
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .miniList {
            display: grid;
            gap: 8px;
            margin-top: 10px;
        }

        .row {
            display: flex;
            justify-content: space-between;
            gap: 10px;
            padding: 10px;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-surface-2);
        }

        .label {
            font-weight: 700;
        }

        .code {
            background: var(--color-code-bg);
            padding: 12px;
            border-radius: 10px;
            font-size: 12px;
            overflow-x: auto;
        }

        .callout {
            margin-top: 10px;
            padding: 10px;
            border-radius: 10px;
            background: var(--color-surface-2);
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 600;
        }
    `},yg=220,bg=()=>{const[a,c]=N.useState(!1),[l,p]=N.useState(!1),[m,g]=N.useState(!1),b=N.useMemo(()=>({title:"Reconciliation",sub:"Reconciliation is React's process of comparing previous Virtual DOM with the new one to determine the minimal changes needed to update the real DOM efficiently."}),[]),k=()=>c(h=>!h);return N.useEffect(()=>{let h=null;return a?(p(!0),requestAnimationFrame(()=>g(!0))):(g(!1),h=window.setTimeout(()=>p(!1),yg)),()=>{h&&window.clearTimeout(h)}},[a]),e.jsxs(jg.Wrapper,{id:"reconciliation",children:[e.jsxs("div",{className:"top",children:[e.jsx("h2",{className:"title",children:"Reconciliation"}),e.jsx("p",{className:"sub",children:b.sub}),e.jsxs("div",{className:"pillRow",children:[e.jsxs("span",{className:"pill",children:[e.jsx(Ne,{})," Virtual DOM"]}),e.jsxs("span",{className:"pill",children:[e.jsx(mu,{})," Diffing"]}),e.jsxs("span",{className:"pill",children:[e.jsx($h,{})," Efficient updates"]})]})]}),e.jsxs("div",{className:"accordion",children:[e.jsxs("button",{type:"button",className:"accBtn",onClick:k,"aria-expanded":a,children:[e.jsxs("div",{className:"accLeft",children:[e.jsx("span",{className:"accIcon",children:e.jsx(Ce,{})}),e.jsxs("div",{children:[e.jsx("div",{className:"accTitle",children:"How React updates UI"}),e.jsxs("div",{className:"accHint",children:["Click to ",a?"collapse":"expand"," detailed explanation"]})]})]}),e.jsx("span",{className:`chev ${a?"open":""}`,children:e.jsx(Ie,{})})]}),l&&e.jsx("div",{className:`panel ${m?"open":""}`,children:e.jsxs("div",{className:"panelInner",children:[e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"1) What is Reconciliation"}),e.jsxs("p",{children:["When state or props change, React creates a new ",e.jsx("strong",{children:"Virtual DOM"})," tree. React then compares the previous tree with the new tree. This comparison process is called"," ",e.jsx("strong",{children:"Reconciliation"}),"."]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"2) Virtual DOM"}),e.jsxs("p",{children:[e.jsx("strong",{children:"DOM"})," means Document Object Model. It represents HTML as a tree."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Virtual DOM"})," is a lightweight JavaScript object representation of the real DOM. React works with this instead of directly manipulating the real DOM."]}),e.jsx("pre",{className:"code",children:`// Example
function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"3) Diffing Algorithm"}),e.jsxs("p",{children:["React uses a heuristic ",e.jsx("strong",{children:"O(n)"}),"diffing algorithm instead of comparing every node deeply."]}),e.jsxs("div",{className:"miniList",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Rule 1"}),e.jsx("span",{children:"Different element types produce different trees."})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Rule 2"}),e.jsx("span",{children:"Keys help identify list items."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"4) Example - Without Keys"}),e.jsx("pre",{className:"code",children:`// Without key
{items.map(item => (
  <li>{item}</li>
))}`}),e.jsx("p",{children:"If list order changes, React may re-render more than necessary."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"5) Example - With Keys"}),e.jsx("pre",{className:"code",children:`// With key
{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}`}),e.jsx("p",{children:"Keys allow React to track elements properly and update only what changed."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"6) Re-render vs Repaint vs Reflow"}),e.jsxs("div",{className:"miniList",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Re-render"}),e.jsx("span",{children:"React recalculates component output."})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Repaint"}),e.jsx("span",{children:"Browser updates visual pixels."})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Reflow"}),e.jsx("span",{children:"Browser recalculates layout."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"7) Why Reconciliation is Fast"}),e.jsx("p",{children:"React avoids expensive DOM operations. Instead of rebuilding entire UI, it updates only changed nodes."}),e.jsxs("div",{className:"callout",children:[e.jsx(ge,{}),e.jsx("span",{children:"Efficient UI updates are the core advantage of React."})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"Full Forms"}),e.jsxs("div",{className:"miniList",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"DOM"}),e.jsx("span",{children:"Document Object Model"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"VDOM"}),e.jsx("span",{children:"Virtual DOM"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"O(n)"}),e.jsx("span",{children:"Linear Time Complexity"})]})]})]})]})})]})]})},wg=220,Ng={Wrapper:te.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 22px 16px 10px;

        .top {
            padding: 10px 2px 12px;
        }

        .title {
            font-size: 22px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .sub {
            margin-top: 8px;
            max-width: 1020px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 900;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
            box-shadow: 0 18px 42px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 14px;

            border: 0;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;

            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;

                background-image:
                    radial-gradient(
                        700px 240px at 15% 10%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 10%,
                            transparent
                        ),
                        transparent 60%
                    ),
                    repeating-linear-gradient(
                        90deg,
                        color-mix(in srgb, var(--color-border) 18%, transparent)
                            0px,
                        color-mix(in srgb, var(--color-border) 18%, transparent)
                            1px,
                        transparent 1px,
                        transparent 22px
                    );
                opacity: 0.72;

                mask-image: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.15)
                );
            }

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 24%,
                    transparent
                );
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .accIcon {
            height: 40px;
            width: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                width: 18px;
                height: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }
        }

        .accText {
            min-width: 0;
        }

        .accTitle {
            font-size: 14px;
            font-weight: 950;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accHint {
            margin-top: 3px;
            font-size: 12.5px;
            font-weight: 750;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .chev {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            width: 38px;
            height: 38px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );

            color: var(--color-text-secondary);
            box-shadow: 0 12px 26px var(--color-shadow);

            transition: transform 160ms ease;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .chev.open {
            transform: rotate(180deg);
        }

        /* load on click + smooth open close */
        .panel {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            border-top: 1px solid var(--color-border);
            transition: grid-template-rows ${wg}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            min-height: 0;
            padding: 14px;
        }

        .sec {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            background: color-mix(in srgb, var(--color-surface-2) 56%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
            margin-bottom: 12px;
            overflow: hidden;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;
                background-image: radial-gradient(
                    800px 250px at 10% 0%,
                    color-mix(in srgb, var(--color-primary) 9%, transparent),
                    transparent 62%
                );
                opacity: 0.9;
            }

            > * {
                position: relative;
                z-index: 1;
            }
        }

        .h3 {
            font-size: 15px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-weight: 650;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .miniTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .miniText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .callout {
            margin-top: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);
        }

        .cIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );
            color: var(--color-primary);

            svg {
                width: 16px;
                height: 16px;
            }
        }

        .cTitle {
            font-weight: 950;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cSub {
            margin-top: 4px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .flowGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 920px) {
                grid-template-columns: 1fr;
            }
        }

        .flow {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .flowTitle {
            font-weight: 950;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .flowText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .exampleBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .exTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .code {
            padding: 12px;
            margin: 0;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .miniList {
            margin-top: 12px;
            display: grid;
            gap: 8px;
        }

        .row {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            @media (width < 720px) {
                flex-direction: column;
            }
        }

        .label {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
        }

        .value {
            color: var(--color-text-secondary);
            font-weight: 750;
            line-height: 1.6;
        }

        .qaGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .qa {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .q {
            font-weight: 950;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .a {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .abbrGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .abbr {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 60%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            line-height: 1.6;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            letter-spacing: 0.1px;
            color: color-mix(
                in srgb,
                var(--color-primary) 76%,
                var(--color-text-primary)
            );
        }

        .finalNote {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.7;
            box-shadow: 0 18px 40px var(--color-shadow);
        }
    `};function kg(a){return A({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.01 2c-1.93 0-3.5 1.57-3.5 3.5 0 1.58 1.06 2.903 2.5 3.337v7.16c-.001.179.027 1.781 1.174 2.931C6.892 19.64 7.84 20 9 20v2l4-3-4-3v2c-1.823 0-1.984-1.534-1.99-2V8.837c1.44-.434 2.5-1.757 2.5-3.337 0-1.93-1.571-3.5-3.5-3.5zm0 5c-.827 0-1.5-.673-1.5-1.5S5.183 4 6.01 4s1.5.673 1.5 1.5S6.837 7 6.01 7zm13 8.163V7.997C19.005 6.391 17.933 4 15 4V2l-4 3 4 3V6c1.829 0 2.001 1.539 2.01 2v7.163c-1.44.434-2.5 1.757-2.5 3.337 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337zm-1 4.837c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5z"},child:[]}]})(a)}const Sg=220,Tg=()=>{const[a,c]=N.useState(!1),[l,p]=N.useState(!1),[m,g]=N.useState(!1),b=N.useMemo(()=>({title:"Virtual DOM",sub:"Virtual DOM is a lightweight JavaScript object tree that represents the UI. React compares the previous and next Virtual DOM trees, finds what changed, and updates the real DOM efficiently."}),[]),k=()=>c(h=>!h);return N.useEffect(()=>{let h=null;return a?(p(!0),requestAnimationFrame(()=>g(!0))):(g(!1),h=window.setTimeout(()=>p(!1),Sg)),()=>{h&&window.clearTimeout(h)}},[a]),e.jsxs(Ng.Wrapper,{id:"virtual-dom",children:[e.jsxs("div",{className:"top",children:[e.jsx("h2",{className:"title",children:"Virtual DOM"}),e.jsx("p",{className:"sub",children:b.sub}),e.jsxs("div",{className:"pillRow","aria-label":"At a glance",children:[e.jsxs("span",{className:"pill",children:[e.jsx(Ne,{})," UI as objects"]}),e.jsxs("span",{className:"pill",children:[e.jsx(kg,{})," Diff changes"]}),e.jsxs("span",{className:"pill",children:[e.jsx(Ce,{})," Efficient updates"]}),e.jsxs("span",{className:"pill",children:[e.jsx(fs,{})," Real DOM is expensive"]})]})]}),e.jsxs("div",{className:"accordion",children:[e.jsxs("button",{type:"button",className:"accBtn",onClick:k,"aria-expanded":a,"aria-controls":"virtual-dom-panel",children:[e.jsxs("div",{className:"accLeft",children:[e.jsx("span",{className:"accIcon",children:e.jsx(Pn,{})}),e.jsxs("div",{className:"accText",children:[e.jsx("div",{className:"accTitle",children:b.title}),e.jsxs("div",{className:"accHint",children:["Click to ",a?"collapse":"expand"," with clear mental model, examples, and interview points"]})]})]}),e.jsx("span",{className:`chev ${a?"open":""}`,children:e.jsx(Ie,{})})]}),l&&e.jsx("div",{id:"virtual-dom-panel",className:`panel ${m?"open":""}`,children:e.jsxs("div",{className:"panelInner",children:[e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Meaning"}),e.jsxs("p",{className:"p",children:[e.jsx("strong",{children:"Virtual DOM"})," is a"," ",e.jsx("strong",{children:"JavaScript representation"})," ","of what the UI should look like.",e.jsx("br",{}),"React renders components into a tree of objects (often called"," ",e.jsx("span",{className:"mono",children:"React elements"}),"). React then updates the real browser DOM based on differences between the old and new trees."]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Real DOM"}),e.jsx("p",{className:"miniText",children:"The browser's actual document tree. Updates can trigger layout and paint work, which can be slow."})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Virtual DOM"}),e.jsx("p",{className:"miniText",children:"Lightweight JS objects. Comparing and building them is usually cheaper than frequent real DOM operations."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Why it exists"}),e.jsxs("p",{className:"p",children:["Directly updating the real DOM on every tiny change is costly. Virtual DOM helps React:",e.jsx("br",{}),"- batch changes",e.jsx("br",{}),"- compute minimal updates",e.jsx("br",{}),"- update DOM in a predictable way"]}),e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ge,{})}),e.jsxs("div",{className:"cText",children:[e.jsx("div",{className:"cTitle",children:"Key idea"}),e.jsx("div",{className:"cSub",children:"React does not re-render the whole page in the browser. It re-runs your component functions to build a new UI description, then patches the DOM for what changed."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"How it works (simple pipeline)"}),e.jsxs("div",{className:"flowGrid",children:[e.jsxs("div",{className:"flow",children:[e.jsx("div",{className:"flowTitle",children:"1) Render"}),e.jsx("p",{className:"flowText",children:"Your component runs and returns UI elements (JS objects)."})]}),e.jsxs("div",{className:"flow",children:[e.jsx("div",{className:"flowTitle",children:"2) Diff"}),e.jsx("p",{className:"flowText",children:"React compares previous and next trees to find changes."})]}),e.jsxs("div",{className:"flow",children:[e.jsx("div",{className:"flowTitle",children:"3) Commit"}),e.jsx("p",{className:"flowText",children:"React updates the real DOM only where needed."})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Example mental model"}),e.jsx("pre",{className:"code",children:`State changes
  -> component function runs again
  -> new Virtual DOM tree is created
  -> React diffs old vs new
  -> minimal DOM updates are committed`})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Practical example"}),e.jsx("p",{className:"p",children:"Suppose only a counter value changes. React will update only that text node (or minimal DOM area) instead of rebuilding everything."}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"React component example"}),e.jsx("pre",{className:"code",children:`function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h3>Counter</h3>
      <p>Value: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}`})]}),e.jsxs("div",{className:"miniList",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"What changes?"}),e.jsxs("span",{className:"value",children:["Only"," ",e.jsx("span",{className:"mono",children:"{count}"})," ","output changes."]})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"What React updates?"}),e.jsx("span",{className:"value",children:"Minimal DOM update for the text, not the whole container."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Diffing and keys (very important)"}),e.jsxs("p",{className:"p",children:["React needs to understand identity of items in lists. That is why ",e.jsx("strong",{children:"keys"})," ","matter.",e.jsx("br",{}),"With stable keys, React can match old and new items correctly and update only what changed."]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Good keys"}),e.jsx("pre",{className:"code",children:`items.map((item) => (
  <li key={item.id}>{item.name}</li>
))`})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Bad keys (index as key)"}),e.jsx("pre",{className:"code",children:`items.map((item, index) => (
  <li key={index}>{item.name}</li>
))`})]}),e.jsx("div",{className:"finalNote",children:"Index as key can break UI state when items are inserted, removed, or reordered. Prefer stable IDs."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Common misunderstandings"}),e.jsxs("div",{className:"qaGrid",children:[e.jsxs("div",{className:"qa",children:[e.jsx("div",{className:"q",children:"Virtual DOM is faster than DOM?"}),e.jsx("div",{className:"a",children:"Not always. The win is reducing real DOM writes and batching work. React still must render and diff."})]}),e.jsxs("div",{className:"qa",children:[e.jsx("div",{className:"q",children:"React updates the DOM on every render?"}),e.jsx("div",{className:"a",children:"React re-runs components often, but it commits DOM changes only if something actually changed."})]}),e.jsxs("div",{className:"qa",children:[e.jsx("div",{className:"q",children:"Virtual DOM means full re-render of the page?"}),e.jsx("div",{className:"a",children:"No. It is a new UI description, then minimal DOM patching happens."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Terms and full forms"}),e.jsxs("div",{className:"abbrGrid",children:[e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"DOM"})," - Document Object Model"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"VDOM"})," - Virtual DOM"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"UI"})," - User Interface"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"JS"})," - JavaScript"]})]}),e.jsx("div",{className:"finalNote",children:'In interviews, say it like this: "React builds a Virtual DOM tree, diffs it with the previous tree, and commits minimal updates to the real DOM. Keys help keep identity stable in lists."'})]})]})})]})]})},Cg=220,Mg={Wrapper:te.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 22px 16px 10px;

        .top {
            padding: 10px 2px 12px;
        }

        .title {
            font-size: 22px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .sub {
            margin-top: 8px;
            max-width: 1080px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 900;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
            box-shadow: 0 18px 42px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 14px;

            border: 0;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;

            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;

                background-image:
                    radial-gradient(
                        760px 240px at 15% 10%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 10%,
                            transparent
                        ),
                        transparent 60%
                    ),
                    repeating-linear-gradient(
                        90deg,
                        color-mix(in srgb, var(--color-border) 18%, transparent)
                            0px,
                        color-mix(in srgb, var(--color-border) 18%, transparent)
                            1px,
                        transparent 1px,
                        transparent 24px
                    );
                opacity: 0.72;

                mask-image: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.18)
                );
            }

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 24%,
                    transparent
                );
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .accIcon {
            height: 40px;
            width: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                width: 18px;
                height: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }
        }

        .accText {
            min-width: 0;
        }

        .accTitle {
            font-size: 14px;
            font-weight: 950;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accHint {
            margin-top: 3px;
            font-size: 12.5px;
            font-weight: 750;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .chev {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            width: 38px;
            height: 38px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );

            color: var(--color-text-secondary);
            box-shadow: 0 12px 26px var(--color-shadow);

            transition: transform 160ms ease;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .chev.open {
            transform: rotate(180deg);
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            border-top: 1px solid var(--color-border);
            transition: grid-template-rows ${Cg}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            min-height: 0;
            padding: 14px;
        }

        .sec {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            background: color-mix(in srgb, var(--color-surface-2) 56%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
            margin-bottom: 12px;
            overflow: hidden;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;
                background-image: radial-gradient(
                    860px 260px at 10% 0%,
                    color-mix(in srgb, var(--color-primary) 9%, transparent),
                    transparent 62%
                );
                opacity: 0.9;
            }

            > * {
                position: relative;
                z-index: 1;
            }
        }

        .h3 {
            font-size: 15px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-weight: 650;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .miniTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .miniText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .miniList {
            margin-top: 12px;
            display: grid;
            gap: 8px;
        }

        .row {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            @media (width < 720px) {
                flex-direction: column;
            }
        }

        .label {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
        }

        .value {
            color: var(--color-text-secondary);
            font-weight: 750;
            line-height: 1.6;
        }

        .callout {
            margin-top: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);
        }

        .cIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );
            color: var(--color-primary);

            svg {
                width: 16px;
                height: 16px;
            }
        }

        .cTitle {
            font-weight: 950;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cSub {
            margin-top: 4px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .exampleBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .exTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .code {
            padding: 12px;
            margin: 0;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .abbrGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .abbr {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 60%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            line-height: 1.6;
        }

        .practice {
            margin-top: 10px;
            display: grid;
            gap: 8px;
        }

        .pRow {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            @media (width < 720px) {
                flex-direction: column;
            }
        }

        .checkGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 920px) {
                grid-template-columns: 1fr;
            }
        }

        .check {
            display: flex;
            align-items: center;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.55;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-primary);
                flex: 0 0 auto;
            }
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            letter-spacing: 0.1px;
            color: color-mix(
                in srgb,
                var(--color-primary) 76%,
                var(--color-text-primary)
            );
        }

        .finalNote {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.7;
            box-shadow: 0 18px 40px var(--color-shadow);
        }
    `},Ig=220,Rg=()=>{const[a,c]=N.useState(!1),[l,p]=N.useState(!1),[m,g]=N.useState(!1),b=N.useMemo(()=>({title:"Hooks internals",sub:"Hooks are not magic. React stores hook state in order, replays hooks on every render, and commits effects after render. Understanding the render phase vs commit phase helps you avoid bugs and performance issues."}),[]),k=()=>c(h=>!h);return N.useEffect(()=>{let h=null;return a?(p(!0),requestAnimationFrame(()=>g(!0))):(g(!1),h=window.setTimeout(()=>p(!1),Ig)),()=>{h&&window.clearTimeout(h)}},[a]),e.jsxs(Mg.Wrapper,{id:"hooks-internals",children:[e.jsxs("div",{className:"top",children:[e.jsx("h2",{className:"title",children:"Hooks internals"}),e.jsx("p",{className:"sub",children:b.sub}),e.jsxs("div",{className:"pillRow","aria-label":"At a glance",children:[e.jsxs("span",{className:"pill",children:[e.jsx(Ap,{})," Order matters"]}),e.jsxs("span",{className:"pill",children:[e.jsx(fs,{})," Render phase"]}),e.jsxs("span",{className:"pill",children:[e.jsx(_p,{})," Commit phase"]}),e.jsxs("span",{className:"pill",children:[e.jsx(Ce,{})," Effects timing"]})]})]}),e.jsxs("div",{className:"accordion",children:[e.jsxs("button",{type:"button",className:"accBtn",onClick:k,"aria-expanded":a,"aria-controls":"hooks-internals-panel",children:[e.jsxs("div",{className:"accLeft",children:[e.jsx("span",{className:"accIcon",children:e.jsx(Ne,{})}),e.jsxs("div",{className:"accText",children:[e.jsx("div",{className:"accTitle",children:b.title}),e.jsxs("div",{className:"accHint",children:["Click to ",a?"collapse":"expand"," with deep explanation and practical examples"]})]})]}),e.jsx("span",{className:`chev ${a?"open":""}`,children:e.jsx(Ie,{})})]}),l&&e.jsx("div",{id:"hooks-internals-panel",className:`panel ${m?"open":""}`,children:e.jsxs("div",{className:"panelInner",children:[e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"1) The core mental model"}),e.jsx("p",{className:"p",children:'React calls your function component to produce UI. During that call, it runs hooks in the exact order they appear. React keeps a per-component list of hook "slots". On the next render, React walks that list in the same order and reads or updates values.'}),e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ge,{})}),e.jsxs("div",{className:"cText",children:[e.jsx("div",{className:"cTitle",children:'Why "hooks must be called in the same order"'}),e.jsx("div",{className:"cSub",children:"React does not identify a hook by name. It identifies by position. Same order means same slot, so state stays correct."})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Hook slots intuition"}),e.jsx("pre",{className:"code",children:`Render 1:
1st hook call -> slot 1
2nd hook call -> slot 2
3rd hook call -> slot 3

Render 2:
React expects the same order:
1st hook call -> slot 1 (same state)
2nd hook call -> slot 2 (same state)
3rd hook call -> slot 3 (same state)`})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"2) Render phase vs commit phase"}),e.jsxs("p",{className:"p",children:["React work happens in two main phases:",e.jsx("br",{}),"- ",e.jsx("strong",{children:"Render phase"})," - compute next UI (pure calculation)",e.jsx("br",{}),"- ",e.jsx("strong",{children:"Commit phase"})," - apply changes to the DOM and run effects"]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Render phase"}),e.jsx("p",{className:"miniText",children:"React calls components, reads hooks, builds a new tree, and decides what changed. No DOM writes should happen here."})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Commit phase"}),e.jsxs("p",{className:"miniText",children:["React updates the DOM, then runs"," ",e.jsx("span",{className:"mono",children:"useLayoutEffect"})," ","before paint and"," ",e.jsx("span",{className:"mono",children:"useEffect"})," ","after paint."]})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Effects timing summary"}),e.jsx("pre",{className:"code",children:`Commit phase order (simplified):
1) DOM mutations (apply UI changes)
2) useLayoutEffect callbacks (before browser paint)
3) Browser paint (pixels on screen)
4) useEffect callbacks (after paint)`})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"3) Why conditionals break hooks"}),e.jsxs("p",{className:"p",children:["If you call a hook inside"," ",e.jsx("span",{className:"mono",children:"if"}),', loop, or early return, the order can change between renders. Then React reads the wrong slot and your state becomes "shifted".']}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Wrong example (do not do this)"}),e.jsx("pre",{className:"code",children:`function Bad({ enabled }) {
  if (enabled) {
    const [x, setX] = useState(0); // hook slot appears only sometimes
  }

  const [y, setY] = useState(0); // this becomes slot 1 or 2 depending on enabled
  return null;
}`})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Correct pattern"}),e.jsx("pre",{className:"code",children:`function Good({ enabled }) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // conditional logic inside effects or render logic, not around hooks
  const value = enabled ? x : y;

  return <div>{value}</div>;
}`})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"4) Closures and stale values"}),e.jsx("p",{className:"p",children:'Hooks rely on JavaScript closures. A closure "captures" variables from the render where it was created. If you start a timer or subscription and do not update it properly, it might keep using old values.'}),e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"cIcon",children:e.jsx(_h,{})}),e.jsxs("div",{className:"cText",children:[e.jsx("div",{className:"cTitle",children:"Simple rule"}),e.jsx("div",{className:"cSub",children:"Every render creates a new version of props and state. Effects and callbacks created in that render see that render's values."})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Common stale closure bug"}),e.jsx("pre",{className:"code",children:`function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      // count here can be stale if not handled correctly
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []); // count is not in deps

  return <div>{count}</div>;
}`})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Fix 1 - functional update"}),e.jsx("pre",{className:"code",children:`useEffect(() => {
  const id = setInterval(() => {
    setCount((c) => c + 1); // always uses latest
  }, 1000);
  return () => clearInterval(id);
}, []);`})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Fix 2 - include dependencies (when correct)"}),e.jsx("pre",{className:"code",children:`useEffect(() => {
  // if effect logic must re-run when count changes
}, [count]);`})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"5) Dependency array is a contract"}),e.jsx("p",{className:"p",children:'The dependency array tells React when it is safe to reuse the same effect or memoized value. If a value used inside changes, it should usually be in dependencies, otherwise you are telling React "it is fine to keep old values".'}),e.jsxs("div",{className:"miniList",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"useEffect"}),e.jsx("span",{className:"value",children:"Run side effects after commit. Dependencies control when it re-runs."})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"useMemo"}),e.jsx("span",{className:"value",children:"Cache a computed value across renders. Use for expensive calculations only."})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"useCallback"}),e.jsx("span",{className:"value",children:"Cache a function reference across renders. Useful when passing callbacks down."})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"useMemo and useCallback example"}),e.jsx("pre",{className:"code",children:`const sorted = useMemo(() => {
  return items.slice().sort((a, b) => a.value - b.value);
}, [items]);

const onSelect = useCallback((id) => {
  setSelectedId(id);
}, []);`})]}),e.jsx("div",{className:"finalNote",children:"Memoization is not free. It trades CPU for memory and complexity. Measure first, then optimize."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"6) Batching and state updates"}),e.jsxs("p",{className:"p",children:["React groups multiple state updates into a single render. This is called"," ",e.jsx("strong",{children:"batching"}),". It reduces unnecessary renders and improves performance."]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Batching idea"}),e.jsx("pre",{className:"code",children:`setA(1);
setB(2);
setC(3);

// React tries to render once instead of three times.`})]}),e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ms,{})}),e.jsxs("div",{className:"cText",children:[e.jsx("div",{className:"cTitle",children:"Why functional updates matter"}),e.jsxs("div",{className:"cSub",children:["When multiple updates depend on the previous state, use"," ",e.jsx("span",{className:"mono",children:"setState(prev => next)"})," ","to avoid bugs."]})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Correct incremental update"}),e.jsx("pre",{className:"code",children:`setCount((c) => c + 1);
setCount((c) => c + 1);
// final count increases by 2 reliably`})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"7) Strict Mode double invoke in dev"}),e.jsx("p",{className:"p",children:"In development, React Strict Mode can intentionally run certain lifecycles twice to help find unsafe side effects. This can make effects look like they fire twice."}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Where"}),e.jsx("p",{className:"miniText",children:"Mostly in development builds. Production behavior is not the same."})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"How to handle"}),e.jsx("p",{className:"miniText",children:"Write idempotent effects and cleanups properly. Avoid side effects in render."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"8) Terms and full forms"}),e.jsxs("div",{className:"abbrGrid",children:[e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"DOM"})," - Document Object Model"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"VDOM"})," - Virtual DOM"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"UI"})," - User Interface"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"API"})," - Application Programming Interface"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"CSR"})," - Client Side Rendering"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"SSR"})," - Server Side Rendering"]})]}),e.jsx("div",{className:"finalNote",children:"Hooks internals is basically this - React replays hooks on every render, stores their state by order, and runs effects during the commit phase."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Mini practice"}),e.jsxs("div",{className:"practice",children:[e.jsxs("div",{className:"pRow",children:[e.jsx("span",{className:"label",children:"Try"}),e.jsxs("span",{className:"value",children:["Build a search input that debounces API calls. Use"," ",e.jsx("span",{className:"mono",children:"useEffect"})," ","with cleanup."]})]}),e.jsxs("div",{className:"pRow",children:[e.jsx("span",{className:"label",children:"Hint"}),e.jsxs("span",{className:"value",children:["Use"," ",e.jsx("span",{className:"mono",children:"setTimeout"})," ","inside effect and"," ",e.jsx("span",{className:"mono",children:"clearTimeout"})," ","in cleanup."]})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Quick checklist"}),e.jsxs("div",{className:"checkGrid",children:[e.jsxs("div",{className:"check",children:[e.jsx(Ap,{})," Hooks order never changes"]}),e.jsxs("div",{className:"check",children:[e.jsx(fs,{})," No side effects in render"]}),e.jsxs("div",{className:"check",children:[e.jsx(_p,{})," Effects run after commit"]}),e.jsxs("div",{className:"check",children:[e.jsx(Ce,{})," Dependencies are a contract"]}),e.jsxs("div",{className:"check",children:[e.jsx(ge,{})," Cleanups are required"]})]})]})]})})]})]})},Lg=220,zg={Wrapper:te.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 24px 16px;
    `,Wrapper:te.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 24px 16px;

        .title {
            font-size: 22px;
            font-weight: 900;
        }

        .sub {
            margin-top: 6px;
            color: var(--color-text-secondary);
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .pill {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-surface-2);
            border: 1px solid var(--color-border);
            font-size: 12px;
            font-weight: 700;
        }

        .accordion {
            margin-top: 20px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
        }

        .accBtn {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 14px;
            background: var(--color-surface);
            border: none;
            cursor: pointer;
        }

        .accLeft {
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .chev {
            transition: transform 200ms ease;
        }

        .chev.open {
            transform: rotate(180deg);
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows ${Lg}ms ease;
            overflow: hidden;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            padding: 16px;
        }

        .sec {
            margin-bottom: 20px;
        }

        .miniList {
            margin-top: 10px;
            display: grid;
            gap: 6px;
        }

        .codeBlock {
            margin-top: 10px;
            background: var(--color-code-bg);
            padding: 12px;
            border-radius: 12px;
            border: 1px solid var(--color-code-border);
            font-size: 13px;
        }

        .finalNote {
            margin-top: 20px;
            padding: 12px;
            border-radius: 12px;
            background: var(--color-surface-2);
            border: 1px solid var(--color-border);
            font-weight: 700;
        }
    `},Eg=220,Og=()=>{const[a,c]=N.useState(!1),[l,p]=N.useState(!1),[m,g]=N.useState(!1),b=N.useMemo(()=>({title:"React Context",sub:"Context allows data to be shared across the component tree without manually passing props at every level."}),[]),k=()=>c(h=>!h);return N.useEffect(()=>{let h;return a?(p(!0),requestAnimationFrame(()=>g(!0))):(g(!1),h=setTimeout(()=>p(!1),Eg)),()=>clearTimeout(h)},[a]),e.jsxs(zg.Wrapper,{children:[e.jsxs("div",{className:"top",children:[e.jsx("h2",{className:"title",children:"Context"}),e.jsx("p",{className:"sub",children:b.sub}),e.jsxs("div",{className:"pillRow",children:[e.jsxs("span",{className:"pill",children:[e.jsx(Ne,{})," Global state"]}),e.jsxs("span",{className:"pill",children:[e.jsx(Gh,{})," Avoid prop drilling"]}),e.jsxs("span",{className:"pill",children:[e.jsx(Pn,{})," Rerender behavior"]})]})]}),e.jsxs("div",{className:"accordion",children:[e.jsxs("button",{className:"accBtn",onClick:k,"aria-expanded":a,children:[e.jsxs("div",{className:"accLeft",children:[e.jsx("span",{className:"accIcon",children:e.jsx(Ce,{})}),e.jsxs("div",{children:[e.jsx("div",{className:"accTitle",children:"React Context deep explanation"}),e.jsxs("div",{className:"accHint",children:["Click to ",a?"collapse":"expand"," full explanation with examples"]})]})]}),e.jsx("span",{className:`chev ${a?"open":""}`,children:e.jsx(Ie,{})})]}),l&&e.jsx("div",{className:`panel ${m?"open":""}`,children:e.jsxs("div",{className:"panelInner",children:[e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"1) Why Context exists"}),e.jsxs("p",{children:["In React, data flows from parent to child via props. But when many nested components need the same data, passing props at every level becomes painful. This is called",e.jsx("strong",{children:" prop drilling"}),"."]}),e.jsx("div",{className:"codeBlock",children:e.jsx("pre",{children:`App
 └── Layout
     └── Sidebar
         └── Menu
             └── MenuItem (needs theme)`})}),e.jsx("p",{children:"Without Context, you must pass theme through all intermediate components."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"2) What Context actually is"}),e.jsx("p",{children:"Context is a mechanism that lets you share data across the component tree without passing props manually."}),e.jsxs("div",{className:"miniList",children:[e.jsx("div",{children:"createContext - creates context"}),e.jsx("div",{children:"Provider - provides value"}),e.jsx("div",{children:"useContext - consumes value"})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"3) Basic Example"}),e.jsx("div",{className:"codeBlock",children:e.jsx("pre",{children:`// create context
import { createContext } from "react";

export const ThemeContext = createContext();

// provide value
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>

// consume value
import { useContext } from "react";

const theme = useContext(ThemeContext);`})})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"4) How React handles updates"}),e.jsx("p",{children:"When the Provider value changes, all components consuming that context re-render."}),e.jsxs("div",{className:"miniList",children:[e.jsx("div",{children:"Context update bypasses React.memo"}),e.jsx("div",{children:"All consumers re-render when value reference changes"}),e.jsx("div",{children:"Use useMemo to optimize object values"})]}),e.jsx("div",{className:"codeBlock",children:e.jsx("pre",{children:`// bad
<ThemeContext.Provider value={{ theme }}>

// better
const value = useMemo(() => ({ theme }), [theme]);

<ThemeContext.Provider value={value}>`})})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"5) When NOT to use Context"}),e.jsxs("div",{className:"miniList",children:[e.jsx("div",{children:"Do not use for rapidly changing data"}),e.jsx("div",{children:"Avoid for large state trees"}),e.jsx("div",{children:"Use local state when possible"})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{children:"6) Full Forms"}),e.jsxs("div",{className:"miniList",children:[e.jsx("div",{children:"DOM - Document Object Model"}),e.jsx("div",{children:"API - Application Programming Interface"}),e.jsx("div",{children:"JSX - JavaScript XML"})]})]}),e.jsx("div",{className:"finalNote",children:"Context is powerful but not a global state manager. Use it thoughtfully."})]})})]})]})},Pg=220,_g={Wrapper:te.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 24px 16px;

        .title {
            font-size: 22px;
            font-weight: 900;
        }

        .sub {
            margin-top: 8px;
            color: var(--color-text-secondary);
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .pill {
            padding: 6px 12px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            font-size: 12px;
            font-weight: 800;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .accordion {
            margin-top: 16px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
        }

        .accBtn {
            width: 100%;
            padding: 14px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--color-surface);
            border: none;
            cursor: pointer;
        }

        .accIcon {
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            background: var(--color-surface-2);
        }

        .accTitle {
            font-weight: 900;
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows ${Pg}ms ease;
            overflow: hidden;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            padding: 16px;
        }

        .sec {
            margin-bottom: 20px;
            border: 1px solid var(--color-border);
            padding: 16px;
            border-radius: 12px;
            background: var(--color-surface-2);
        }

        .h3 {
            font-size: 16px;
            font-weight: 900;
        }

        .p {
            margin-top: 8px;
            line-height: 1.6;
        }

        .exampleBlock {
            margin-top: 12px;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 10px;
            overflow: hidden;
        }

        .code {
            padding: 12px;
            font-size: 12px;
            font-family: monospace;
            white-space: pre-wrap;
        }

        .note {
            margin-top: 10px;
            font-size: 13px;
            color: var(--color-text-muted);
        }

        .miniList .row {
            display: flex;
            justify-content: space-between;
            margin-top: 8px;
        }

        .checkGrid {
            margin-top: 12px;
            display: grid;
            gap: 8px;
        }

        .check {
            display: flex;
            align-items: center;
            gap: 6px;
            font-weight: 800;
        }

        .mono {
            font-family: monospace;
        }
    `},Bg=220,Ag=()=>{const[a,c]=N.useState(!1),[l,p]=N.useState(!1),[m,g]=N.useState(!1),b=N.useMemo(()=>({title:"Performance optimization",sub:"Performance optimization means reducing load time, blocking work, unnecessary re-renders, layout shifts, and wasted computation. Fast UI is architecture plus discipline."}),[]),k=()=>c(h=>!h);return N.useEffect(()=>{let h=null;return a?(p(!0),requestAnimationFrame(()=>g(!0))):(g(!1),h=window.setTimeout(()=>p(!1),Bg)),()=>{h&&window.clearTimeout(h)}},[a]),e.jsxs(_g.Wrapper,{id:"performance-optimization",children:[e.jsxs("div",{className:"top",children:[e.jsx("h2",{className:"title",children:"Performance optimization"}),e.jsx("p",{className:"sub",children:b.sub}),e.jsxs("div",{className:"pillRow",children:[e.jsxs("span",{className:"pill",children:[e.jsx(Ce,{})," Speed"]}),e.jsxs("span",{className:"pill",children:[e.jsx(fs,{})," CPU efficiency"]}),e.jsxs("span",{className:"pill",children:[e.jsx(dt,{})," Load time"]}),e.jsxs("span",{className:"pill",children:[e.jsx(Ne,{})," Rendering"]})]})]}),e.jsxs("div",{className:"accordion",children:[e.jsxs("button",{type:"button",className:"accBtn",onClick:k,"aria-expanded":a,children:[e.jsxs("div",{className:"accLeft",children:[e.jsx("span",{className:"accIcon",children:e.jsx(ml,{})}),e.jsxs("div",{className:"accText",children:[e.jsx("div",{className:"accTitle",children:b.title}),e.jsxs("div",{className:"accHint",children:["Click to ",a?"collapse":"expand"," detailed explanation and examples"]})]})]}),e.jsx("span",{className:`chev ${a?"open":""}`,children:e.jsx(Ie,{})})]}),l&&e.jsx("div",{className:`panel ${m?"open":""}`,children:e.jsxs("div",{className:"panelInner",children:[e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"1) Critical Rendering Path"}),e.jsxs("p",{className:"p",children:["The ",e.jsx("strong",{children:"Critical Rendering Path"})," ","is the sequence of steps the browser takes to convert HTML, CSS, and JavaScript into pixels on the screen."]}),e.jsx("div",{className:"flow",children:"HTML → DOM → CSSOM → Render Tree → Layout → Paint → Composite"}),e.jsx("div",{className:"exampleBlock",children:e.jsx("pre",{className:"code",children:`<!-- Bad: blocking script -->
<script src="large-library.js"><\/script>

<!-- Better -->
<script src="large-library.js" defer><\/script>`})}),e.jsxs("div",{className:"note",children:["Use ",e.jsx("span",{className:"mono",children:"defer"})," to prevent blocking HTML parsing."]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"2) Reflow vs Repaint"}),e.jsxs("p",{className:"p",children:[e.jsx("strong",{children:"Reflow"})," means layout recalculation.",e.jsx("br",{}),e.jsx("strong",{children:"Repaint"})," means only visual change."]}),e.jsx("div",{className:"exampleBlock",children:e.jsx("pre",{className:"code",children:`// Causes reflow
element.style.width = "200px";

// Only repaint
element.style.color = "red";`})}),e.jsx("div",{className:"note",children:"Layout changes are expensive. Avoid frequent DOM measurement and mutation."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"3) Code splitting"}),e.jsx("p",{className:"p",children:"Load only what is needed initially."}),e.jsx("div",{className:"exampleBlock",children:e.jsx("pre",{className:"code",children:`// React lazy loading
const Dashboard = React.lazy(() => import("./Dashboard"));`})}),e.jsx("div",{className:"note",children:"Smaller initial bundle improves First Contentful Paint."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"4) Memoization"}),e.jsx("p",{className:"p",children:"Memoization means caching expensive computations."}),e.jsx("div",{className:"exampleBlock",children:e.jsx("pre",{className:"code",children:`const value = useMemo(() => {
  return heavyCalculation(data);
}, [data]);`})}),e.jsx("div",{className:"note",children:"Prevents unnecessary recalculation on every render."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"5) Image optimization"}),e.jsx("p",{className:"p",children:"Images are often the largest assets."}),e.jsx("div",{className:"exampleBlock",children:e.jsx("pre",{className:"code",children:`<img 
  src="hero.webp" 
  loading="lazy" 
  width="800" 
  height="400" 
  alt="Hero banner"
/>`})}),e.jsx("div",{className:"note",children:"Use WebP or AVIF formats and specify dimensions to prevent layout shift."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"6) Avoid unnecessary re-renders"}),e.jsx("div",{className:"exampleBlock",children:e.jsx("pre",{className:"code",children:"export default React.memo(MyComponent);"})}),e.jsx("div",{className:"note",children:"React.memo prevents re-render if props do not change."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"7) Performance metrics"}),e.jsxs("div",{className:"miniList",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"FCP"}),e.jsx("span",{className:"value",children:"First Contentful Paint"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"LCP"}),e.jsx("span",{className:"value",children:"Largest Contentful Paint"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"CLS"}),e.jsx("span",{className:"value",children:"Cumulative Layout Shift"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"TTI"}),e.jsx("span",{className:"value",children:"Time To Interactive"})]})]}),e.jsx("div",{className:"note",children:"Use Lighthouse and Web Vitals to measure these."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Quick checklist"}),e.jsxs("div",{className:"checkGrid",children:[e.jsxs("div",{className:"check",children:[e.jsx(ge,{})," Use code splitting"]}),e.jsxs("div",{className:"check",children:[e.jsx(ge,{})," Avoid layout thrashing"]}),e.jsxs("div",{className:"check",children:[e.jsx(ge,{})," Lazy load images"]}),e.jsxs("div",{className:"check",children:[e.jsx(ge,{})," Memoize expensive work"]}),e.jsxs("div",{className:"check",children:[e.jsx(ge,{})," Measure before optimizing"]})]})]})]})})]})]})},Dg=220,Fg={Wrapper:te.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 22px 16px 10px;

        .top {
            padding: 10px 2px 12px;
        }

        .title {
            font-size: 22px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .sub {
            margin-top: 8px;
            max-width: 1080px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 900;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
            box-shadow: 0 18px 42px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 14px;

            border: 0;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;

            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;

                background-image:
                    radial-gradient(
                        720px 240px at 12% 10%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 10%,
                            transparent
                        ),
                        transparent 62%
                    ),
                    radial-gradient(
                        720px 240px at 90% 20%,
                        color-mix(in srgb, var(--color-accent) 9%, transparent),
                        transparent 66%
                    ),
                    repeating-linear-gradient(
                        90deg,
                        color-mix(in srgb, var(--color-border) 16%, transparent)
                            0px,
                        color-mix(in srgb, var(--color-border) 16%, transparent)
                            1px,
                        transparent 1px,
                        transparent 26px
                    );
                opacity: 0.7;

                mask-image: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.92),
                    rgba(0, 0, 0, 0.12)
                );
            }

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 22%,
                    transparent
                );
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .accIcon {
            height: 40px;
            width: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                width: 18px;
                height: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }
        }

        .accText {
            min-width: 0;
        }

        .accTitle {
            font-size: 14px;
            font-weight: 950;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accHint {
            margin-top: 3px;
            font-size: 12.5px;
            font-weight: 750;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .chev {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            width: 38px;
            height: 38px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );

            color: var(--color-text-secondary);
            box-shadow: 0 12px 26px var(--color-shadow);

            transition: transform 160ms ease;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .chev.open {
            transform: rotate(180deg);
        }

        /* load on click + smooth open close */
        .panel {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            border-top: 1px solid var(--color-border);
            transition: grid-template-rows ${Dg}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            min-height: 0;
            padding: 14px;
        }

        .sec {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            background: color-mix(in srgb, var(--color-surface-2) 56%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
            margin-bottom: 12px;
            overflow: hidden;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;
                background-image: radial-gradient(
                    820px 260px at 10% 0%,
                    color-mix(in srgb, var(--color-primary) 9%, transparent),
                    transparent 62%
                );
                opacity: 0.9;
            }

            > * {
                position: relative;
                z-index: 1;
            }
        }

        .h3 {
            font-size: 15px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-weight: 650;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .miniTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .miniText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .callout {
            margin-top: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);
        }

        .cIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );
            color: var(--color-primary);

            svg {
                width: 16px;
                height: 16px;
            }
        }

        .cTitle {
            font-weight: 950;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cSub {
            margin-top: 4px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .flowGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .flow {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .flowTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .flowText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .exampleBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .exTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .code {
            padding: 12px;
            margin: 0;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .miniList {
            margin-top: 12px;
            display: grid;
            gap: 8px;
        }

        .row {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            @media (width < 720px) {
                flex-direction: column;
            }
        }

        .label {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
        }

        .value {
            color: var(--color-text-secondary);
            font-weight: 750;
            line-height: 1.6;
        }

        .abbrGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .abbr {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 60%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            line-height: 1.6;
        }

        .qaGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .qa {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .q {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .a {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .practice {
            margin-top: 10px;
            display: grid;
            gap: 8px;
        }

        .pRow {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            @media (width < 720px) {
                flex-direction: column;
            }
        }

        .checkGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 10px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .check {
            display: flex;
            align-items: center;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.55;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-primary);
                flex: 0 0 auto;
            }
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            letter-spacing: 0.1px;
            color: color-mix(
                in srgb,
                var(--color-primary) 76%,
                var(--color-text-primary)
            );
        }

        .finalNote {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.7;
            box-shadow: 0 18px 40px var(--color-shadow);
        }
    `},Ug=220,Wg=()=>{const[a,c]=N.useState(!1),[l,p]=N.useState(!1),[m,g]=N.useState(!1),b=N.useMemo(()=>({title:"Code splitting",sub:"Code splitting means breaking your JavaScript bundle into smaller chunks so the user downloads only what is needed right now. This improves initial load time and makes the app feel faster."}),[]),k=()=>c(h=>!h);return N.useEffect(()=>{let h=null;return a?(p(!0),requestAnimationFrame(()=>g(!0))):(g(!1),h=window.setTimeout(()=>p(!1),Ug)),()=>{h&&window.clearTimeout(h)}},[a]),e.jsxs(Fg.Wrapper,{id:"code-splitting",children:[e.jsxs("div",{className:"top",children:[e.jsx("h2",{className:"title",children:"Code splitting"}),e.jsx("p",{className:"sub",children:b.sub}),e.jsxs("div",{className:"pillRow","aria-label":"At a glance",children:[e.jsxs("span",{className:"pill",children:[e.jsx(Yo,{})," Split JS chunks"]}),e.jsxs("span",{className:"pill",children:[e.jsx(dt,{})," Faster first load"]}),e.jsxs("span",{className:"pill",children:[e.jsx(Bp,{})," Smaller bundles"]}),e.jsxs("span",{className:"pill",children:[e.jsx(Ce,{})," Better UX"]})]})]}),e.jsxs("div",{className:"accordion",children:[e.jsxs("button",{type:"button",className:"accBtn",onClick:k,"aria-expanded":a,"aria-controls":"code-splitting-panel",children:[e.jsxs("div",{className:"accLeft",children:[e.jsx("span",{className:"accIcon",children:e.jsx(Yo,{})}),e.jsxs("div",{className:"accText",children:[e.jsx("div",{className:"accTitle",children:b.title}),e.jsxs("div",{className:"accHint",children:["Click to ",a?"collapse":"expand"," with simple mental model, React examples, and do and do not rules"]})]})]}),e.jsx("span",{className:`chev ${a?"open":""}`,children:e.jsx(Ie,{})})]}),l&&e.jsx("div",{id:"code-splitting-panel",className:`panel ${m?"open":""}`,children:e.jsxs("div",{className:"panelInner",children:[e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Meaning"}),e.jsxs("p",{className:"p",children:["When you build a frontend app, the bundler (Vite, Webpack, etc.) produces one or more"," ",e.jsx("strong",{children:"bundles"})," (JavaScript files). If everything is in one big bundle, the initial download becomes heavy."]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Bundle"}),e.jsx("p",{className:"miniText",children:"A compiled JavaScript output file that the browser downloads to run your app."})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Chunk"}),e.jsx("p",{className:"miniText",children:"A smaller piece of a bundle loaded separately, often on demand."})]})]}),e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ge,{})}),e.jsxs("div",{className:"cText",children:[e.jsx("div",{className:"cTitle",children:"Core idea"}),e.jsx("div",{className:"cSub",children:"Load critical code first. Load the rest only when user needs it."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Why code splitting helps"}),e.jsxs("div",{className:"flowGrid",children:[e.jsxs("div",{className:"flow",children:[e.jsx("div",{className:"flowTitle",children:"Without splitting"}),e.jsxs("p",{className:"flowText",children:["- One big JS file",e.jsx("br",{}),"- Slow initial download",e.jsx("br",{}),"- Slow parse and execute",e.jsx("br",{}),"- First paint delays"]})]}),e.jsxs("div",{className:"flow",children:[e.jsx("div",{className:"flowTitle",children:"With splitting"}),e.jsxs("p",{className:"flowText",children:["- Smaller initial JS",e.jsx("br",{}),"- Faster first render",e.jsx("br",{}),"- Extra features load later",e.jsx("br",{}),"- Better perceived speed"]})]}),e.jsxs("div",{className:"flow",children:[e.jsx("div",{className:"flowTitle",children:"Best for"}),e.jsxs("p",{className:"flowText",children:["- Multi-page apps",e.jsx("br",{}),"- Heavy dashboards",e.jsx("br",{}),"- Feature-rich products",e.jsx("br",{}),"- Admin panels"]})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"React approach - route based splitting"}),e.jsx("p",{className:"p",children:"The most common and safest approach is: split by routes. Example: Home loads first, heavy pages load only when visited."}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"React lazy + Suspense example"}),e.jsx("pre",{className:"code",children:`import React, { lazy, Suspense } from "react";

const Reports = lazy(() => import("./pages/reports"));
const Settings = lazy(() => import("./pages/settings"));

export default function App() {
  return (
    <Suspense fallback={<div>Loading page...</div>}>
      {/* Your routes here */}
      {/* /reports -> loads Reports chunk */}
      {/* /settings -> loads Settings chunk */}
    </Suspense>
  );
}`})]}),e.jsxs("div",{className:"miniList",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"React.lazy"}),e.jsx("span",{className:"value",children:"Loads a component using dynamic import and creates a separate chunk."})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Suspense"}),e.jsx("span",{className:"value",children:"Shows a fallback UI while chunk is downloading."})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Route split"}),e.jsx("span",{className:"value",children:"Best default. Small initial bundle. Easy mental model."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Component level splitting"}),e.jsx("p",{className:"p",children:"Use this when a feature is heavy and not always needed. Example: a chart library, rich text editor, or a complex modal."}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Split a heavy modal feature"}),e.jsx("pre",{className:"code",children:`import React, { lazy, Suspense, useState } from "react";

const HeavyModal = lazy(() => import("./components/heavyModal"));

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open heavy modal</button>

      {open && (
        <Suspense fallback={<div>Loading modal...</div>}>
          <HeavyModal onClose={() => setOpen(false)} />
        </Suspense>
      )}
    </div>
  );
}`})]}),e.jsxs("div",{className:"callout",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Ne,{})}),e.jsxs("div",{className:"cText",children:[e.jsx("div",{className:"cTitle",children:"Good candidates"}),e.jsx("div",{className:"cSub",children:"Charts, editors, map SDKs, large tables, PDF viewers, code editors."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Terms and full forms"}),e.jsxs("div",{className:"abbrGrid",children:[e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"JS"})," - JavaScript"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"SPA"})," - Single Page Application"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"SSR"})," - Server Side Rendering"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"CSR"})," - Client Side Rendering"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"TTI"})," - Time To Interactive"]}),e.jsxs("div",{className:"abbr",children:[e.jsx("span",{className:"mono",children:"LCP"})," - Largest Contentful Paint"]})]}),e.jsx("div",{className:"finalNote",children:"Code splitting improves the first load by reducing initial JS size. But keep it practical. Split by routes first, then split heavy features."})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Do and do not rules"}),e.jsxs("div",{className:"qaGrid",children:[e.jsxs("div",{className:"qa",children:[e.jsx("div",{className:"q",children:"Do - split by routes"}),e.jsx("div",{className:"a",children:"Easy win and low complexity."})]}),e.jsxs("div",{className:"qa",children:[e.jsx("div",{className:"q",children:"Do - split heavy features"}),e.jsx("div",{className:"a",children:"Charts, editors, map, PDF, code editor."})]}),e.jsxs("div",{className:"qa",children:[e.jsx("div",{className:"q",children:"Do not - over split tiny components"}),e.jsx("div",{className:"a",children:"Too many requests can hurt."})]}),e.jsxs("div",{className:"qa",children:[e.jsx("div",{className:"q",children:"Do not - hide loading states"}),e.jsx("div",{className:"a",children:"Always show a clear fallback UI."})]})]}),e.jsxs("div",{className:"exampleBlock",children:[e.jsx("div",{className:"exTitle",children:"Bad pattern example"}),e.jsx("pre",{className:"code",children:`// Bad idea: splitting tiny UI pieces
// Causes too many chunks and requests

const Button = lazy(() => import("./Button"));
const Card = lazy(() => import("./Card"));
const Badge = lazy(() => import("./Badge"));`})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"Mini practice"}),e.jsxs("div",{className:"practice",children:[e.jsxs("div",{className:"pRow",children:[e.jsx("span",{className:"label",children:"Try"}),e.jsx("span",{className:"value",children:'Split your "Reports" page and "Settings" page using React lazy.'})]}),e.jsxs("div",{className:"pRow",children:[e.jsx("span",{className:"label",children:"Goal"}),e.jsx("span",{className:"value",children:"Home loads fast, Reports loads only when opened."})]})]})]}),e.jsxs("section",{className:"sec",children:[e.jsx("h3",{className:"h3",children:"At a glance checklist"}),e.jsxs("div",{className:"checkGrid",children:[e.jsxs("div",{className:"check",children:[e.jsx(Yo,{})," Route splitting first"]}),e.jsxs("div",{className:"check",children:[e.jsx(Bp,{})," Heavy feature splitting"]}),e.jsxs("div",{className:"check",children:[e.jsx(dt,{})," Fallback UI always"]}),e.jsxs("div",{className:"check",children:[e.jsx(Ce,{})," Measure load, not guess"]})]})]})]})})]})]})},Hg=()=>{const[a,c]=N.useState(!1);N.useEffect(()=>{const p=document.querySelector("main");if(!p)return;const m=()=>c(p.scrollTop>280);return m(),p.addEventListener("scroll",m,{passive:!0}),()=>p.removeEventListener("scroll",m)},[]);const l=()=>{var p;(p=document.querySelector("main"))==null||p.scrollTo({top:0,behavior:"smooth"})};return e.jsxs(qo.Wrapper,{children:[e.jsx(qo.Header,{children:e.jsx(Yh,{})}),e.jsxs(qo.Main,{id:"main-scroll",children:[e.jsxs("div",{className:"contentWrapper",children:[e.jsx(of,{}),e.jsx(pf,{}),e.jsx(hf,{}),e.jsx(jf,{}),e.jsx(Nf,{}),e.jsx(Cf,{}),e.jsx(Lf,{}),e.jsx(Pf,{}),e.jsx(Df,{}),e.jsx(Hf,{}),e.jsx(qf,{}),e.jsx(Jf,{}),e.jsx(rg,{}),e.jsx(ag,{}),e.jsx(cg,{}),e.jsx(xg,{}),e.jsx(gg,{}),e.jsx(bg,{}),e.jsx(Tg,{}),e.jsx(Rg,{}),e.jsx(Og,{}),e.jsx(Ag,{}),e.jsx(Wg,{})]}),e.jsx("div",{className:"footerWrapper",children:e.jsx(tf,{})})]}),a&&e.jsx("button",{type:"button",className:"floatingTopButton",onClick:l,"aria-label":"Scroll to top",title:"Scroll to top",children:e.jsx(zh,{"aria-hidden":"true"})})]})};bm.createRoot(document.getElementById("root")).render(e.jsx(e.Fragment,{children:e.jsx(Hg,{})}));
