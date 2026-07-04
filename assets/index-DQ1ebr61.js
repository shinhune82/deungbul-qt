(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function aT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Sy={exports:{}},bl={},xy={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wo=Symbol.for("react.element"),lT=Symbol.for("react.portal"),uT=Symbol.for("react.fragment"),cT=Symbol.for("react.strict_mode"),hT=Symbol.for("react.profiler"),dT=Symbol.for("react.provider"),fT=Symbol.for("react.context"),pT=Symbol.for("react.forward_ref"),mT=Symbol.for("react.suspense"),gT=Symbol.for("react.memo"),yT=Symbol.for("react.lazy"),Bp=Symbol.iterator;function vT(t){return t===null||typeof t!="object"?null:(t=Bp&&t[Bp]||t["@@iterator"],typeof t=="function"?t:null)}var Ay={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ky=Object.assign,Cy={};function zi(t,e,n){this.props=t,this.context=e,this.refs=Cy,this.updater=n||Ay}zi.prototype.isReactComponent={};zi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ry(){}Ry.prototype=zi.prototype;function Hh(t,e,n){this.props=t,this.context=e,this.refs=Cy,this.updater=n||Ay}var Kh=Hh.prototype=new Ry;Kh.constructor=Hh;ky(Kh,zi.prototype);Kh.isPureReactComponent=!0;var zp=Array.isArray,Py=Object.prototype.hasOwnProperty,Qh={current:null},Ny={key:!0,ref:!0,__self:!0,__source:!0};function by(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Py.call(e,r)&&!Ny.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:wo,type:t,key:s,ref:o,props:i,_owner:Qh.current}}function _T(t,e){return{$$typeof:wo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gh(t){return typeof t=="object"&&t!==null&&t.$$typeof===wo}function wT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $p=/\/+/g;function Mu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wT(""+t.key):e.toString(36)}function Sa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case wo:case lT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Mu(o,0):r,zp(i)?(n="",t!=null&&(n=t.replace($p,"$&/")+"/"),Sa(i,e,n,"",function(h){return h})):i!=null&&(Gh(i)&&(i=_T(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace($p,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",zp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Mu(s,l);o+=Sa(s,e,n,u,i)}else if(u=vT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Mu(s,l++),o+=Sa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Zo(t,e,n){if(t==null)return t;var r=[],i=0;return Sa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ET(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},xa={transition:null},TT={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:xa,ReactCurrentOwner:Qh};function Dy(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Zo,forEach:function(t,e,n){Zo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Zo(t,function(){e++}),e},toArray:function(t){return Zo(t,function(e){return e})||[]},only:function(t){if(!Gh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=zi;ee.Fragment=uT;ee.Profiler=hT;ee.PureComponent=Hh;ee.StrictMode=cT;ee.Suspense=mT;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TT;ee.act=Dy;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ky({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Qh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Py.call(e,u)&&!Ny.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:wo,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:fT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:dT,_context:t},t.Consumer=t};ee.createElement=by;ee.createFactory=function(t){var e=by.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:pT,render:t}};ee.isValidElement=Gh;ee.lazy=function(t){return{$$typeof:yT,_payload:{_status:-1,_result:t},_init:ET}};ee.memo=function(t,e){return{$$typeof:gT,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=xa.transition;xa.transition={};try{t()}finally{xa.transition=e}};ee.unstable_act=Dy;ee.useCallback=function(t,e){return ht.current.useCallback(t,e)};ee.useContext=function(t){return ht.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};ee.useEffect=function(t,e){return ht.current.useEffect(t,e)};ee.useId=function(){return ht.current.useId()};ee.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return ht.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};ee.useRef=function(t){return ht.current.useRef(t)};ee.useState=function(t){return ht.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return ht.current.useTransition()};ee.version="18.3.1";xy.exports=ee;var H=xy.exports;const IT=aT(H);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ST=H,xT=Symbol.for("react.element"),AT=Symbol.for("react.fragment"),kT=Object.prototype.hasOwnProperty,CT=ST.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,RT={key:!0,ref:!0,__self:!0,__source:!0};function Oy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)kT.call(e,r)&&!RT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:xT,type:t,key:s,ref:o,props:i,_owner:CT.current}}bl.Fragment=AT;bl.jsx=Oy;bl.jsxs=Oy;Sy.exports=bl;var m=Sy.exports,kc={},Vy={exports:{}},It={},Ly={exports:{}},My={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,K){var Y=B.length;B.push(K);e:for(;0<Y;){var ve=Y-1>>>1,ce=B[ve];if(0<i(ce,K))B[ve]=K,B[Y]=ce,Y=ve;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var K=B[0],Y=B.pop();if(Y!==K){B[0]=Y;e:for(var ve=0,ce=B.length,xe=ce>>>1;ve<xe;){var on=2*(ve+1)-1,an=B[on],ln=on+1,un=B[ln];if(0>i(an,Y))ln<ce&&0>i(un,an)?(B[ve]=un,B[ln]=Y,ve=ln):(B[ve]=an,B[on]=Y,ve=on);else if(ln<ce&&0>i(un,Y))B[ve]=un,B[ln]=Y,ve=ln;else break e}}return K}function i(B,K){var Y=B.sortIndex-K.sortIndex;return Y!==0?Y:B.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,y=null,v=3,k=!1,C=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(B){for(var K=n(h);K!==null;){if(K.callback===null)r(h);else if(K.startTime<=B)r(h),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(h)}}function b(B){if(N=!1,x(B),!C)if(n(u)!==null)C=!0,be(F);else{var K=n(h);K!==null&&Ce(b,K.startTime-B)}}function F(B,K){C=!1,N&&(N=!1,I(p),p=-1),k=!0;var Y=v;try{for(x(K),y=n(u);y!==null&&(!(y.expirationTime>K)||B&&!A());){var ve=y.callback;if(typeof ve=="function"){y.callback=null,v=y.priorityLevel;var ce=ve(y.expirationTime<=K);K=t.unstable_now(),typeof ce=="function"?y.callback=ce:y===n(u)&&r(u),x(K)}else r(u);y=n(u)}if(y!==null)var xe=!0;else{var on=n(h);on!==null&&Ce(b,on.startTime-K),xe=!1}return xe}finally{y=null,v=Y,k=!1}}var j=!1,_=null,p=-1,w=5,T=-1;function A(){return!(t.unstable_now()-T<w)}function R(){if(_!==null){var B=t.unstable_now();T=B;var K=!0;try{K=_(!0,B)}finally{K?S():(j=!1,_=null)}}else j=!1}var S;if(typeof E=="function")S=function(){E(R)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,se=Z.port2;Z.port1.onmessage=R,S=function(){se.postMessage(null)}}else S=function(){O(R,0)};function be(B){_=B,j||(j=!0,S())}function Ce(B,K){p=O(function(){B(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){C||k||(C=!0,be(F))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(v){case 1:case 2:case 3:var K=3;break;default:K=v}var Y=v;v=K;try{return B()}finally{v=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=v;v=B;try{return K()}finally{v=Y}},t.unstable_scheduleCallback=function(B,K,Y){var ve=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ve+Y:ve):Y=ve,B){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=Y+ce,B={id:f++,callback:K,priorityLevel:B,startTime:Y,expirationTime:ce,sortIndex:-1},Y>ve?(B.sortIndex=Y,e(h,B),n(u)===null&&B===n(h)&&(N?(I(p),p=-1):N=!0,Ce(b,Y-ve))):(B.sortIndex=ce,e(u,B),C||k||(C=!0,be(F))),B},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(B){var K=v;return function(){var Y=v;v=K;try{return B.apply(this,arguments)}finally{v=Y}}}})(My);Ly.exports=My;var PT=Ly.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NT=H,Tt=PT;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jy=new Set,$s={};function qr(t,e){ki(t,e),ki(t+"Capture",e)}function ki(t,e){for($s[t]=e,t=0;t<e.length;t++)jy.add(e[t])}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cc=Object.prototype.hasOwnProperty,bT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qp={},Wp={};function DT(t){return Cc.call(Wp,t)?!0:Cc.call(qp,t)?!1:bT.test(t)?Wp[t]=!0:(qp[t]=!0,!1)}function OT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function VT(t,e,n,r){if(e===null||typeof e>"u"||OT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){We[t]=new dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];We[e]=new dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){We[t]=new dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){We[t]=new dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){We[t]=new dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){We[t]=new dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){We[t]=new dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){We[t]=new dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){We[t]=new dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Yh=/[\-:]([a-z])/g;function Xh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Yh,Xh);We[e]=new dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yh,Xh);We[e]=new dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Yh,Xh);We[e]=new dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){We[t]=new dt(t,1,!1,t.toLowerCase(),null,!1,!1)});We.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){We[t]=new dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jh(t,e,n,r){var i=We.hasOwnProperty(e)?We[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(VT(e,n,i,r)&&(n=null),r||i===null?DT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Dn=NT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ea=Symbol.for("react.element"),ii=Symbol.for("react.portal"),si=Symbol.for("react.fragment"),Zh=Symbol.for("react.strict_mode"),Rc=Symbol.for("react.profiler"),Fy=Symbol.for("react.provider"),Uy=Symbol.for("react.context"),ed=Symbol.for("react.forward_ref"),Pc=Symbol.for("react.suspense"),Nc=Symbol.for("react.suspense_list"),td=Symbol.for("react.memo"),Fn=Symbol.for("react.lazy"),By=Symbol.for("react.offscreen"),Hp=Symbol.iterator;function ds(t){return t===null||typeof t!="object"?null:(t=Hp&&t[Hp]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,ju;function Es(t){if(ju===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ju=e&&e[1]||""}return`
`+ju+t}var Fu=!1;function Uu(t,e){if(!t||Fu)return"";Fu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Fu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Es(t):""}function LT(t){switch(t.tag){case 5:return Es(t.type);case 16:return Es("Lazy");case 13:return Es("Suspense");case 19:return Es("SuspenseList");case 0:case 2:case 15:return t=Uu(t.type,!1),t;case 11:return t=Uu(t.type.render,!1),t;case 1:return t=Uu(t.type,!0),t;default:return""}}function bc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case si:return"Fragment";case ii:return"Portal";case Rc:return"Profiler";case Zh:return"StrictMode";case Pc:return"Suspense";case Nc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Uy:return(t.displayName||"Context")+".Consumer";case Fy:return(t._context.displayName||"Context")+".Provider";case ed:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case td:return e=t.displayName||null,e!==null?e:bc(t.type)||"Memo";case Fn:e=t._payload,t=t._init;try{return bc(t(e))}catch{}}return null}function MT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bc(e);case 8:return e===Zh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jT(t){var e=zy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ta(t){t._valueTracker||(t._valueTracker=jT(t))}function $y(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=zy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Wa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dc(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Kp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qy(t,e){e=e.checked,e!=null&&Jh(t,"checked",e,!1)}function Oc(t,e){qy(t,e);var n=ur(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vc(t,e.type,ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vc(t,e,n){(e!=="number"||Wa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ts=Array.isArray;function yi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ur(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Lc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(Ts(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ur(n)}}function Wy(t,e){var n=ur(e.value),r=ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Yp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Hy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Hy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var na,Ky=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(na=na||document.createElement("div"),na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=na.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Rs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},FT=["Webkit","ms","Moz","O"];Object.keys(Rs).forEach(function(t){FT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Rs[e]=Rs[t]})});function Qy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Rs.hasOwnProperty(t)&&Rs[t]?(""+e).trim():e+"px"}function Gy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var UT=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jc(t,e){if(e){if(UT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function Fc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uc=null;function nd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bc=null,vi=null,_i=null;function Xp(t){if(t=Io(t)){if(typeof Bc!="function")throw Error(M(280));var e=t.stateNode;e&&(e=Ml(e),Bc(t.stateNode,t.type,e))}}function Yy(t){vi?_i?_i.push(t):_i=[t]:vi=t}function Xy(){if(vi){var t=vi,e=_i;if(_i=vi=null,Xp(t),e)for(t=0;t<e.length;t++)Xp(e[t])}}function Jy(t,e){return t(e)}function Zy(){}var Bu=!1;function ev(t,e,n){if(Bu)return t(e,n);Bu=!0;try{return Jy(t,e,n)}finally{Bu=!1,(vi!==null||_i!==null)&&(Zy(),Xy())}}function Ws(t,e){var n=t.stateNode;if(n===null)return null;var r=Ml(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var zc=!1;if(Sn)try{var fs={};Object.defineProperty(fs,"passive",{get:function(){zc=!0}}),window.addEventListener("test",fs,fs),window.removeEventListener("test",fs,fs)}catch{zc=!1}function BT(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Ps=!1,Ha=null,Ka=!1,$c=null,zT={onError:function(t){Ps=!0,Ha=t}};function $T(t,e,n,r,i,s,o,l,u){Ps=!1,Ha=null,BT.apply(zT,arguments)}function qT(t,e,n,r,i,s,o,l,u){if($T.apply(this,arguments),Ps){if(Ps){var h=Ha;Ps=!1,Ha=null}else throw Error(M(198));Ka||(Ka=!0,$c=h)}}function Wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function tv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jp(t){if(Wr(t)!==t)throw Error(M(188))}function WT(t){var e=t.alternate;if(!e){if(e=Wr(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Jp(i),t;if(s===r)return Jp(i),e;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function nv(t){return t=WT(t),t!==null?rv(t):null}function rv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=rv(t);if(e!==null)return e;t=t.sibling}return null}var iv=Tt.unstable_scheduleCallback,Zp=Tt.unstable_cancelCallback,HT=Tt.unstable_shouldYield,KT=Tt.unstable_requestPaint,ke=Tt.unstable_now,QT=Tt.unstable_getCurrentPriorityLevel,rd=Tt.unstable_ImmediatePriority,sv=Tt.unstable_UserBlockingPriority,Qa=Tt.unstable_NormalPriority,GT=Tt.unstable_LowPriority,ov=Tt.unstable_IdlePriority,Dl=null,Gt=null;function YT(t){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(Dl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:ZT,XT=Math.log,JT=Math.LN2;function ZT(t){return t>>>=0,t===0?32:31-(XT(t)/JT|0)|0}var ra=64,ia=4194304;function Is(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ga(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Is(l):(s&=o,s!==0&&(r=Is(s)))}else o=n&~i,o!==0?r=Is(o):s!==0&&(r=Is(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ft(e),i=1<<n,r|=t[n],e&=~i;return r}function eI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ft(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=eI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function qc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function av(){var t=ra;return ra<<=1,!(ra&4194240)&&(ra=64),t}function zu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Eo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ft(e),t[e]=n}function nI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ft(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function id(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ft(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var le=0;function lv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var uv,sd,cv,hv,dv,Wc=!1,sa=[],Yn=null,Xn=null,Jn=null,Hs=new Map,Ks=new Map,Bn=[],rI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function em(t,e){switch(t){case"focusin":case"focusout":Yn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":Jn=null;break;case"pointerover":case"pointerout":Hs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ks.delete(e.pointerId)}}function ps(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Io(e),e!==null&&sd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function iI(t,e,n,r,i){switch(e){case"focusin":return Yn=ps(Yn,t,e,n,r,i),!0;case"dragenter":return Xn=ps(Xn,t,e,n,r,i),!0;case"mouseover":return Jn=ps(Jn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Hs.set(s,ps(Hs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ks.set(s,ps(Ks.get(s)||null,t,e,n,r,i)),!0}return!1}function fv(t){var e=xr(t.target);if(e!==null){var n=Wr(e);if(n!==null){if(e=n.tag,e===13){if(e=tv(n),e!==null){t.blockedOn=e,dv(t.priority,function(){cv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Aa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Hc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Uc=r,n.target.dispatchEvent(r),Uc=null}else return e=Io(n),e!==null&&sd(e),t.blockedOn=n,!1;e.shift()}return!0}function tm(t,e,n){Aa(t)&&n.delete(e)}function sI(){Wc=!1,Yn!==null&&Aa(Yn)&&(Yn=null),Xn!==null&&Aa(Xn)&&(Xn=null),Jn!==null&&Aa(Jn)&&(Jn=null),Hs.forEach(tm),Ks.forEach(tm)}function ms(t,e){t.blockedOn===e&&(t.blockedOn=null,Wc||(Wc=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,sI)))}function Qs(t){function e(i){return ms(i,t)}if(0<sa.length){ms(sa[0],t);for(var n=1;n<sa.length;n++){var r=sa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Yn!==null&&ms(Yn,t),Xn!==null&&ms(Xn,t),Jn!==null&&ms(Jn,t),Hs.forEach(e),Ks.forEach(e),n=0;n<Bn.length;n++)r=Bn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Bn.length&&(n=Bn[0],n.blockedOn===null);)fv(n),n.blockedOn===null&&Bn.shift()}var wi=Dn.ReactCurrentBatchConfig,Ya=!0;function oI(t,e,n,r){var i=le,s=wi.transition;wi.transition=null;try{le=1,od(t,e,n,r)}finally{le=i,wi.transition=s}}function aI(t,e,n,r){var i=le,s=wi.transition;wi.transition=null;try{le=4,od(t,e,n,r)}finally{le=i,wi.transition=s}}function od(t,e,n,r){if(Ya){var i=Hc(t,e,n,r);if(i===null)Ju(t,e,r,Xa,n),em(t,r);else if(iI(i,t,e,n,r))r.stopPropagation();else if(em(t,r),e&4&&-1<rI.indexOf(t)){for(;i!==null;){var s=Io(i);if(s!==null&&uv(s),s=Hc(t,e,n,r),s===null&&Ju(t,e,r,Xa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ju(t,e,r,null,n)}}var Xa=null;function Hc(t,e,n,r){if(Xa=null,t=nd(r),t=xr(t),t!==null)if(e=Wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=tv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xa=t,null}function pv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(QT()){case rd:return 1;case sv:return 4;case Qa:case GT:return 16;case ov:return 536870912;default:return 16}default:return 16}}var Kn=null,ad=null,ka=null;function mv(){if(ka)return ka;var t,e=ad,n=e.length,r,i="value"in Kn?Kn.value:Kn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ka=i.slice(t,1<r?1-r:void 0)}function Ca(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function oa(){return!0}function nm(){return!1}function St(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?oa:nm,this.isPropagationStopped=nm,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oa)},persist:function(){},isPersistent:oa}),e}var $i={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ld=St($i),To=Ee({},$i,{view:0,detail:0}),lI=St(To),$u,qu,gs,Ol=Ee({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ud,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==gs&&(gs&&t.type==="mousemove"?($u=t.screenX-gs.screenX,qu=t.screenY-gs.screenY):qu=$u=0,gs=t),$u)},movementY:function(t){return"movementY"in t?t.movementY:qu}}),rm=St(Ol),uI=Ee({},Ol,{dataTransfer:0}),cI=St(uI),hI=Ee({},To,{relatedTarget:0}),Wu=St(hI),dI=Ee({},$i,{animationName:0,elapsedTime:0,pseudoElement:0}),fI=St(dI),pI=Ee({},$i,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mI=St(pI),gI=Ee({},$i,{data:0}),im=St(gI),yI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_I={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_I[t])?!!e[t]:!1}function ud(){return wI}var EI=Ee({},To,{key:function(t){if(t.key){var e=yI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ca(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ud,charCode:function(t){return t.type==="keypress"?Ca(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ca(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),TI=St(EI),II=Ee({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sm=St(II),SI=Ee({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ud}),xI=St(SI),AI=Ee({},$i,{propertyName:0,elapsedTime:0,pseudoElement:0}),kI=St(AI),CI=Ee({},Ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),RI=St(CI),PI=[9,13,27,32],cd=Sn&&"CompositionEvent"in window,Ns=null;Sn&&"documentMode"in document&&(Ns=document.documentMode);var NI=Sn&&"TextEvent"in window&&!Ns,gv=Sn&&(!cd||Ns&&8<Ns&&11>=Ns),om=" ",am=!1;function yv(t,e){switch(t){case"keyup":return PI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var oi=!1;function bI(t,e){switch(t){case"compositionend":return vv(e);case"keypress":return e.which!==32?null:(am=!0,om);case"textInput":return t=e.data,t===om&&am?null:t;default:return null}}function DI(t,e){if(oi)return t==="compositionend"||!cd&&yv(t,e)?(t=mv(),ka=ad=Kn=null,oi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gv&&e.locale!=="ko"?null:e.data;default:return null}}var OI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!OI[t.type]:e==="textarea"}function _v(t,e,n,r){Yy(r),e=Ja(e,"onChange"),0<e.length&&(n=new ld("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var bs=null,Gs=null;function VI(t){Pv(t,0)}function Vl(t){var e=ui(t);if($y(e))return t}function LI(t,e){if(t==="change")return e}var wv=!1;if(Sn){var Hu;if(Sn){var Ku="oninput"in document;if(!Ku){var um=document.createElement("div");um.setAttribute("oninput","return;"),Ku=typeof um.oninput=="function"}Hu=Ku}else Hu=!1;wv=Hu&&(!document.documentMode||9<document.documentMode)}function cm(){bs&&(bs.detachEvent("onpropertychange",Ev),Gs=bs=null)}function Ev(t){if(t.propertyName==="value"&&Vl(Gs)){var e=[];_v(e,Gs,t,nd(t)),ev(VI,e)}}function MI(t,e,n){t==="focusin"?(cm(),bs=e,Gs=n,bs.attachEvent("onpropertychange",Ev)):t==="focusout"&&cm()}function jI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vl(Gs)}function FI(t,e){if(t==="click")return Vl(e)}function UI(t,e){if(t==="input"||t==="change")return Vl(e)}function BI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bt=typeof Object.is=="function"?Object.is:BI;function Ys(t,e){if(Bt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Cc.call(e,i)||!Bt(t[i],e[i]))return!1}return!0}function hm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dm(t,e){var n=hm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hm(n)}}function Tv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Tv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Iv(){for(var t=window,e=Wa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wa(t.document)}return e}function hd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function zI(t){var e=Iv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Tv(n.ownerDocument.documentElement,n)){if(r!==null&&hd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=dm(n,s);var o=dm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $I=Sn&&"documentMode"in document&&11>=document.documentMode,ai=null,Kc=null,Ds=null,Qc=!1;function fm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qc||ai==null||ai!==Wa(r)||(r=ai,"selectionStart"in r&&hd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ds&&Ys(Ds,r)||(Ds=r,r=Ja(Kc,"onSelect"),0<r.length&&(e=new ld("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ai)))}function aa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var li={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionend:aa("Transition","TransitionEnd")},Qu={},Sv={};Sn&&(Sv=document.createElement("div").style,"AnimationEvent"in window||(delete li.animationend.animation,delete li.animationiteration.animation,delete li.animationstart.animation),"TransitionEvent"in window||delete li.transitionend.transition);function Ll(t){if(Qu[t])return Qu[t];if(!li[t])return t;var e=li[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Sv)return Qu[t]=e[n];return t}var xv=Ll("animationend"),Av=Ll("animationiteration"),kv=Ll("animationstart"),Cv=Ll("transitionend"),Rv=new Map,pm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(t,e){Rv.set(t,e),qr(e,[t])}for(var Gu=0;Gu<pm.length;Gu++){var Yu=pm[Gu],qI=Yu.toLowerCase(),WI=Yu[0].toUpperCase()+Yu.slice(1);mr(qI,"on"+WI)}mr(xv,"onAnimationEnd");mr(Av,"onAnimationIteration");mr(kv,"onAnimationStart");mr("dblclick","onDoubleClick");mr("focusin","onFocus");mr("focusout","onBlur");mr(Cv,"onTransitionEnd");ki("onMouseEnter",["mouseout","mouseover"]);ki("onMouseLeave",["mouseout","mouseover"]);ki("onPointerEnter",["pointerout","pointerover"]);ki("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ss="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),HI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ss));function mm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,qT(r,e,void 0,t),t.currentTarget=null}function Pv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;mm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;mm(i,l,h),s=u}}}if(Ka)throw t=$c,Ka=!1,$c=null,t}function pe(t,e){var n=e[Zc];n===void 0&&(n=e[Zc]=new Set);var r=t+"__bubble";n.has(r)||(Nv(e,t,2,!1),n.add(r))}function Xu(t,e,n){var r=0;e&&(r|=4),Nv(n,t,r,e)}var la="_reactListening"+Math.random().toString(36).slice(2);function Xs(t){if(!t[la]){t[la]=!0,jy.forEach(function(n){n!=="selectionchange"&&(HI.has(n)||Xu(n,!1,t),Xu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[la]||(e[la]=!0,Xu("selectionchange",!1,e))}}function Nv(t,e,n,r){switch(pv(e)){case 1:var i=oI;break;case 4:i=aI;break;default:i=od}n=i.bind(null,e,n,t),i=void 0,!zc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ju(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=xr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}ev(function(){var h=s,f=nd(n),y=[];e:{var v=Rv.get(t);if(v!==void 0){var k=ld,C=t;switch(t){case"keypress":if(Ca(n)===0)break e;case"keydown":case"keyup":k=TI;break;case"focusin":C="focus",k=Wu;break;case"focusout":C="blur",k=Wu;break;case"beforeblur":case"afterblur":k=Wu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=rm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=cI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=xI;break;case xv:case Av:case kv:k=fI;break;case Cv:k=kI;break;case"scroll":k=lI;break;case"wheel":k=RI;break;case"copy":case"cut":case"paste":k=mI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=sm}var N=(e&4)!==0,O=!N&&t==="scroll",I=N?v!==null?v+"Capture":null:v;N=[];for(var E=h,x;E!==null;){x=E;var b=x.stateNode;if(x.tag===5&&b!==null&&(x=b,I!==null&&(b=Ws(E,I),b!=null&&N.push(Js(E,b,x)))),O)break;E=E.return}0<N.length&&(v=new k(v,C,null,n,f),y.push({event:v,listeners:N}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",v&&n!==Uc&&(C=n.relatedTarget||n.fromElement)&&(xr(C)||C[xn]))break e;if((k||v)&&(v=f.window===f?f:(v=f.ownerDocument)?v.defaultView||v.parentWindow:window,k?(C=n.relatedTarget||n.toElement,k=h,C=C?xr(C):null,C!==null&&(O=Wr(C),C!==O||C.tag!==5&&C.tag!==6)&&(C=null)):(k=null,C=h),k!==C)){if(N=rm,b="onMouseLeave",I="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(N=sm,b="onPointerLeave",I="onPointerEnter",E="pointer"),O=k==null?v:ui(k),x=C==null?v:ui(C),v=new N(b,E+"leave",k,n,f),v.target=O,v.relatedTarget=x,b=null,xr(f)===h&&(N=new N(I,E+"enter",C,n,f),N.target=x,N.relatedTarget=O,b=N),O=b,k&&C)t:{for(N=k,I=C,E=0,x=N;x;x=ei(x))E++;for(x=0,b=I;b;b=ei(b))x++;for(;0<E-x;)N=ei(N),E--;for(;0<x-E;)I=ei(I),x--;for(;E--;){if(N===I||I!==null&&N===I.alternate)break t;N=ei(N),I=ei(I)}N=null}else N=null;k!==null&&gm(y,v,k,N,!1),C!==null&&O!==null&&gm(y,O,C,N,!0)}}e:{if(v=h?ui(h):window,k=v.nodeName&&v.nodeName.toLowerCase(),k==="select"||k==="input"&&v.type==="file")var F=LI;else if(lm(v))if(wv)F=UI;else{F=jI;var j=MI}else(k=v.nodeName)&&k.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(F=FI);if(F&&(F=F(t,h))){_v(y,F,n,f);break e}j&&j(t,v,h),t==="focusout"&&(j=v._wrapperState)&&j.controlled&&v.type==="number"&&Vc(v,"number",v.value)}switch(j=h?ui(h):window,t){case"focusin":(lm(j)||j.contentEditable==="true")&&(ai=j,Kc=h,Ds=null);break;case"focusout":Ds=Kc=ai=null;break;case"mousedown":Qc=!0;break;case"contextmenu":case"mouseup":case"dragend":Qc=!1,fm(y,n,f);break;case"selectionchange":if($I)break;case"keydown":case"keyup":fm(y,n,f)}var _;if(cd)e:{switch(t){case"compositionstart":var p="onCompositionStart";break e;case"compositionend":p="onCompositionEnd";break e;case"compositionupdate":p="onCompositionUpdate";break e}p=void 0}else oi?yv(t,n)&&(p="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(p="onCompositionStart");p&&(gv&&n.locale!=="ko"&&(oi||p!=="onCompositionStart"?p==="onCompositionEnd"&&oi&&(_=mv()):(Kn=f,ad="value"in Kn?Kn.value:Kn.textContent,oi=!0)),j=Ja(h,p),0<j.length&&(p=new im(p,t,null,n,f),y.push({event:p,listeners:j}),_?p.data=_:(_=vv(n),_!==null&&(p.data=_)))),(_=NI?bI(t,n):DI(t,n))&&(h=Ja(h,"onBeforeInput"),0<h.length&&(f=new im("onBeforeInput","beforeinput",null,n,f),y.push({event:f,listeners:h}),f.data=_))}Pv(y,e)})}function Js(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ja(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ws(t,n),s!=null&&r.unshift(Js(t,s,i)),s=Ws(t,e),s!=null&&r.push(Js(t,s,i))),t=t.return}return r}function ei(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Ws(n,s),u!=null&&o.unshift(Js(n,u,l))):i||(u=Ws(n,s),u!=null&&o.push(Js(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var KI=/\r\n?/g,QI=/\u0000|\uFFFD/g;function ym(t){return(typeof t=="string"?t:""+t).replace(KI,`
`).replace(QI,"")}function ua(t,e,n){if(e=ym(e),ym(t)!==e&&n)throw Error(M(425))}function Za(){}var Gc=null,Yc=null;function Xc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jc=typeof setTimeout=="function"?setTimeout:void 0,GI=typeof clearTimeout=="function"?clearTimeout:void 0,vm=typeof Promise=="function"?Promise:void 0,YI=typeof queueMicrotask=="function"?queueMicrotask:typeof vm<"u"?function(t){return vm.resolve(null).then(t).catch(XI)}:Jc;function XI(t){setTimeout(function(){throw t})}function Zu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Qs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qs(e)}function Zn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _m(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qi=Math.random().toString(36).slice(2),Ht="__reactFiber$"+qi,Zs="__reactProps$"+qi,xn="__reactContainer$"+qi,Zc="__reactEvents$"+qi,JI="__reactListeners$"+qi,ZI="__reactHandles$"+qi;function xr(t){var e=t[Ht];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xn]||n[Ht]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_m(t);t!==null;){if(n=t[Ht])return n;t=_m(t)}return e}t=n,n=t.parentNode}return null}function Io(t){return t=t[Ht]||t[xn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ui(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function Ml(t){return t[Zs]||null}var eh=[],ci=-1;function gr(t){return{current:t}}function ge(t){0>ci||(t.current=eh[ci],eh[ci]=null,ci--)}function de(t,e){ci++,eh[ci]=t.current,t.current=e}var cr={},nt=gr(cr),mt=gr(!1),Dr=cr;function Ci(t,e){var n=t.type.contextTypes;if(!n)return cr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function gt(t){return t=t.childContextTypes,t!=null}function el(){ge(mt),ge(nt)}function wm(t,e,n){if(nt.current!==cr)throw Error(M(168));de(nt,e),de(mt,n)}function bv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,MT(t)||"Unknown",i));return Ee({},n,r)}function tl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,Dr=nt.current,de(nt,t),de(mt,mt.current),!0}function Em(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=bv(t,e,Dr),r.__reactInternalMemoizedMergedChildContext=t,ge(mt),ge(nt),de(nt,t)):ge(mt),de(mt,n)}var pn=null,jl=!1,ec=!1;function Dv(t){pn===null?pn=[t]:pn.push(t)}function eS(t){jl=!0,Dv(t)}function yr(){if(!ec&&pn!==null){ec=!0;var t=0,e=le;try{var n=pn;for(le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}pn=null,jl=!1}catch(i){throw pn!==null&&(pn=pn.slice(t+1)),iv(rd,yr),i}finally{le=e,ec=!1}}return null}var hi=[],di=0,nl=null,rl=0,xt=[],At=0,Or=null,mn=1,gn="";function Tr(t,e){hi[di++]=rl,hi[di++]=nl,nl=t,rl=e}function Ov(t,e,n){xt[At++]=mn,xt[At++]=gn,xt[At++]=Or,Or=t;var r=mn;t=gn;var i=32-Ft(r)-1;r&=~(1<<i),n+=1;var s=32-Ft(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,mn=1<<32-Ft(e)+i|n<<i|r,gn=s+t}else mn=1<<s|n<<i|r,gn=t}function dd(t){t.return!==null&&(Tr(t,1),Ov(t,1,0))}function fd(t){for(;t===nl;)nl=hi[--di],hi[di]=null,rl=hi[--di],hi[di]=null;for(;t===Or;)Or=xt[--At],xt[At]=null,gn=xt[--At],xt[At]=null,mn=xt[--At],xt[At]=null}var Et=null,wt=null,ye=!1,Mt=null;function Vv(t,e){var n=Ct(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Tm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Et=t,wt=Zn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Et=t,wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Or!==null?{id:mn,overflow:gn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ct(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Et=t,wt=null,!0):!1;default:return!1}}function th(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nh(t){if(ye){var e=wt;if(e){var n=e;if(!Tm(t,e)){if(th(t))throw Error(M(418));e=Zn(n.nextSibling);var r=Et;e&&Tm(t,e)?Vv(r,n):(t.flags=t.flags&-4097|2,ye=!1,Et=t)}}else{if(th(t))throw Error(M(418));t.flags=t.flags&-4097|2,ye=!1,Et=t}}}function Im(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Et=t}function ca(t){if(t!==Et)return!1;if(!ye)return Im(t),ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xc(t.type,t.memoizedProps)),e&&(e=wt)){if(th(t))throw Lv(),Error(M(418));for(;e;)Vv(t,e),e=Zn(e.nextSibling)}if(Im(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wt=Zn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wt=null}}else wt=Et?Zn(t.stateNode.nextSibling):null;return!0}function Lv(){for(var t=wt;t;)t=Zn(t.nextSibling)}function Ri(){wt=Et=null,ye=!1}function pd(t){Mt===null?Mt=[t]:Mt.push(t)}var tS=Dn.ReactCurrentBatchConfig;function ys(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function ha(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sm(t){var e=t._init;return e(t._payload)}function Mv(t){function e(I,E){if(t){var x=I.deletions;x===null?(I.deletions=[E],I.flags|=16):x.push(E)}}function n(I,E){if(!t)return null;for(;E!==null;)e(I,E),E=E.sibling;return null}function r(I,E){for(I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function i(I,E){return I=rr(I,E),I.index=0,I.sibling=null,I}function s(I,E,x){return I.index=x,t?(x=I.alternate,x!==null?(x=x.index,x<E?(I.flags|=2,E):x):(I.flags|=2,E)):(I.flags|=1048576,E)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,E,x,b){return E===null||E.tag!==6?(E=ac(x,I.mode,b),E.return=I,E):(E=i(E,x),E.return=I,E)}function u(I,E,x,b){var F=x.type;return F===si?f(I,E,x.props.children,b,x.key):E!==null&&(E.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Fn&&Sm(F)===E.type)?(b=i(E,x.props),b.ref=ys(I,E,x),b.return=I,b):(b=Va(x.type,x.key,x.props,null,I.mode,b),b.ref=ys(I,E,x),b.return=I,b)}function h(I,E,x,b){return E===null||E.tag!==4||E.stateNode.containerInfo!==x.containerInfo||E.stateNode.implementation!==x.implementation?(E=lc(x,I.mode,b),E.return=I,E):(E=i(E,x.children||[]),E.return=I,E)}function f(I,E,x,b,F){return E===null||E.tag!==7?(E=Nr(x,I.mode,b,F),E.return=I,E):(E=i(E,x),E.return=I,E)}function y(I,E,x){if(typeof E=="string"&&E!==""||typeof E=="number")return E=ac(""+E,I.mode,x),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ea:return x=Va(E.type,E.key,E.props,null,I.mode,x),x.ref=ys(I,null,E),x.return=I,x;case ii:return E=lc(E,I.mode,x),E.return=I,E;case Fn:var b=E._init;return y(I,b(E._payload),x)}if(Ts(E)||ds(E))return E=Nr(E,I.mode,x,null),E.return=I,E;ha(I,E)}return null}function v(I,E,x,b){var F=E!==null?E.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return F!==null?null:l(I,E,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ea:return x.key===F?u(I,E,x,b):null;case ii:return x.key===F?h(I,E,x,b):null;case Fn:return F=x._init,v(I,E,F(x._payload),b)}if(Ts(x)||ds(x))return F!==null?null:f(I,E,x,b,null);ha(I,x)}return null}function k(I,E,x,b,F){if(typeof b=="string"&&b!==""||typeof b=="number")return I=I.get(x)||null,l(E,I,""+b,F);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ea:return I=I.get(b.key===null?x:b.key)||null,u(E,I,b,F);case ii:return I=I.get(b.key===null?x:b.key)||null,h(E,I,b,F);case Fn:var j=b._init;return k(I,E,x,j(b._payload),F)}if(Ts(b)||ds(b))return I=I.get(x)||null,f(E,I,b,F,null);ha(E,b)}return null}function C(I,E,x,b){for(var F=null,j=null,_=E,p=E=0,w=null;_!==null&&p<x.length;p++){_.index>p?(w=_,_=null):w=_.sibling;var T=v(I,_,x[p],b);if(T===null){_===null&&(_=w);break}t&&_&&T.alternate===null&&e(I,_),E=s(T,E,p),j===null?F=T:j.sibling=T,j=T,_=w}if(p===x.length)return n(I,_),ye&&Tr(I,p),F;if(_===null){for(;p<x.length;p++)_=y(I,x[p],b),_!==null&&(E=s(_,E,p),j===null?F=_:j.sibling=_,j=_);return ye&&Tr(I,p),F}for(_=r(I,_);p<x.length;p++)w=k(_,I,p,x[p],b),w!==null&&(t&&w.alternate!==null&&_.delete(w.key===null?p:w.key),E=s(w,E,p),j===null?F=w:j.sibling=w,j=w);return t&&_.forEach(function(A){return e(I,A)}),ye&&Tr(I,p),F}function N(I,E,x,b){var F=ds(x);if(typeof F!="function")throw Error(M(150));if(x=F.call(x),x==null)throw Error(M(151));for(var j=F=null,_=E,p=E=0,w=null,T=x.next();_!==null&&!T.done;p++,T=x.next()){_.index>p?(w=_,_=null):w=_.sibling;var A=v(I,_,T.value,b);if(A===null){_===null&&(_=w);break}t&&_&&A.alternate===null&&e(I,_),E=s(A,E,p),j===null?F=A:j.sibling=A,j=A,_=w}if(T.done)return n(I,_),ye&&Tr(I,p),F;if(_===null){for(;!T.done;p++,T=x.next())T=y(I,T.value,b),T!==null&&(E=s(T,E,p),j===null?F=T:j.sibling=T,j=T);return ye&&Tr(I,p),F}for(_=r(I,_);!T.done;p++,T=x.next())T=k(_,I,p,T.value,b),T!==null&&(t&&T.alternate!==null&&_.delete(T.key===null?p:T.key),E=s(T,E,p),j===null?F=T:j.sibling=T,j=T);return t&&_.forEach(function(R){return e(I,R)}),ye&&Tr(I,p),F}function O(I,E,x,b){if(typeof x=="object"&&x!==null&&x.type===si&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ea:e:{for(var F=x.key,j=E;j!==null;){if(j.key===F){if(F=x.type,F===si){if(j.tag===7){n(I,j.sibling),E=i(j,x.props.children),E.return=I,I=E;break e}}else if(j.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Fn&&Sm(F)===j.type){n(I,j.sibling),E=i(j,x.props),E.ref=ys(I,j,x),E.return=I,I=E;break e}n(I,j);break}else e(I,j);j=j.sibling}x.type===si?(E=Nr(x.props.children,I.mode,b,x.key),E.return=I,I=E):(b=Va(x.type,x.key,x.props,null,I.mode,b),b.ref=ys(I,E,x),b.return=I,I=b)}return o(I);case ii:e:{for(j=x.key;E!==null;){if(E.key===j)if(E.tag===4&&E.stateNode.containerInfo===x.containerInfo&&E.stateNode.implementation===x.implementation){n(I,E.sibling),E=i(E,x.children||[]),E.return=I,I=E;break e}else{n(I,E);break}else e(I,E);E=E.sibling}E=lc(x,I.mode,b),E.return=I,I=E}return o(I);case Fn:return j=x._init,O(I,E,j(x._payload),b)}if(Ts(x))return C(I,E,x,b);if(ds(x))return N(I,E,x,b);ha(I,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,E!==null&&E.tag===6?(n(I,E.sibling),E=i(E,x),E.return=I,I=E):(n(I,E),E=ac(x,I.mode,b),E.return=I,I=E),o(I)):n(I,E)}return O}var Pi=Mv(!0),jv=Mv(!1),il=gr(null),sl=null,fi=null,md=null;function gd(){md=fi=sl=null}function yd(t){var e=il.current;ge(il),t._currentValue=e}function rh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ei(t,e){sl=t,md=fi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pt=!0),t.firstContext=null)}function Nt(t){var e=t._currentValue;if(md!==t)if(t={context:t,memoizedValue:e,next:null},fi===null){if(sl===null)throw Error(M(308));fi=t,sl.dependencies={lanes:0,firstContext:t}}else fi=fi.next=t;return e}var Ar=null;function vd(t){Ar===null?Ar=[t]:Ar.push(t)}function Fv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,vd(e)):(n.next=i.next,i.next=n),e.interleaved=n,An(t,r)}function An(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Un=!1;function _d(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function En(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function er(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,An(t,n)}return i=r.interleaved,i===null?(e.next=e,vd(r)):(e.next=i.next,i.next=e),r.interleaved=e,An(t,n)}function Ra(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,id(t,n)}}function xm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ol(t,e,n,r){var i=t.updateQueue;Un=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var y=i.baseState;o=0,f=h=u=null,l=s;do{var v=l.lane,k=l.eventTime;if((r&v)===v){f!==null&&(f=f.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,N=l;switch(v=e,k=n,N.tag){case 1:if(C=N.payload,typeof C=="function"){y=C.call(k,y,v);break e}y=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=N.payload,v=typeof C=="function"?C.call(k,y,v):C,v==null)break e;y=Ee({},y,v);break e;case 2:Un=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else k={eventTime:k,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=k,u=y):f=f.next=k,o|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);if(f===null&&(u=y),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Lr|=o,t.lanes=o,t.memoizedState=y}}function Am(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var So={},Yt=gr(So),eo=gr(So),to=gr(So);function kr(t){if(t===So)throw Error(M(174));return t}function wd(t,e){switch(de(to,e),de(eo,t),de(Yt,So),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Mc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Mc(e,t)}ge(Yt),de(Yt,e)}function Ni(){ge(Yt),ge(eo),ge(to)}function Bv(t){kr(to.current);var e=kr(Yt.current),n=Mc(e,t.type);e!==n&&(de(eo,t),de(Yt,n))}function Ed(t){eo.current===t&&(ge(Yt),ge(eo))}var _e=gr(0);function al(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var tc=[];function Td(){for(var t=0;t<tc.length;t++)tc[t]._workInProgressVersionPrimary=null;tc.length=0}var Pa=Dn.ReactCurrentDispatcher,nc=Dn.ReactCurrentBatchConfig,Vr=0,we=null,De=null,Me=null,ll=!1,Os=!1,no=0,nS=0;function Ye(){throw Error(M(321))}function Id(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bt(t[n],e[n]))return!1;return!0}function Sd(t,e,n,r,i,s){if(Vr=s,we=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pa.current=t===null||t.memoizedState===null?oS:aS,t=n(r,i),Os){s=0;do{if(Os=!1,no=0,25<=s)throw Error(M(301));s+=1,Me=De=null,e.updateQueue=null,Pa.current=lS,t=n(r,i)}while(Os)}if(Pa.current=ul,e=De!==null&&De.next!==null,Vr=0,Me=De=we=null,ll=!1,e)throw Error(M(300));return t}function xd(){var t=no!==0;return no=0,t}function Wt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?we.memoizedState=Me=t:Me=Me.next=t,Me}function bt(){if(De===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var e=Me===null?we.memoizedState:Me.next;if(e!==null)Me=e,De=t;else{if(t===null)throw Error(M(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Me===null?we.memoizedState=Me=t:Me=Me.next=t}return Me}function ro(t,e){return typeof e=="function"?e(t):e}function rc(t){var e=bt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=De,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Vr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var y={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=y,o=r):u=u.next=y,we.lanes|=f,Lr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,Bt(r,e.memoizedState)||(pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,we.lanes|=s,Lr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ic(t){var e=bt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Bt(s,e.memoizedState)||(pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function zv(){}function $v(t,e){var n=we,r=bt(),i=e(),s=!Bt(r.memoizedState,i);if(s&&(r.memoizedState=i,pt=!0),r=r.queue,Ad(Hv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,io(9,Wv.bind(null,n,r,i,e),void 0,null),je===null)throw Error(M(349));Vr&30||qv(n,e,i)}return i}function qv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Wv(t,e,n,r){e.value=n,e.getSnapshot=r,Kv(e)&&Qv(t)}function Hv(t,e,n){return n(function(){Kv(e)&&Qv(t)})}function Kv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bt(t,n)}catch{return!0}}function Qv(t){var e=An(t,1);e!==null&&Ut(e,t,1,-1)}function km(t){var e=Wt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ro,lastRenderedState:t},e.queue=t,t=t.dispatch=sS.bind(null,we,t),[e.memoizedState,t]}function io(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Gv(){return bt().memoizedState}function Na(t,e,n,r){var i=Wt();we.flags|=t,i.memoizedState=io(1|e,n,void 0,r===void 0?null:r)}function Fl(t,e,n,r){var i=bt();r=r===void 0?null:r;var s=void 0;if(De!==null){var o=De.memoizedState;if(s=o.destroy,r!==null&&Id(r,o.deps)){i.memoizedState=io(e,n,s,r);return}}we.flags|=t,i.memoizedState=io(1|e,n,s,r)}function Cm(t,e){return Na(8390656,8,t,e)}function Ad(t,e){return Fl(2048,8,t,e)}function Yv(t,e){return Fl(4,2,t,e)}function Xv(t,e){return Fl(4,4,t,e)}function Jv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Zv(t,e,n){return n=n!=null?n.concat([t]):null,Fl(4,4,Jv.bind(null,e,t),n)}function kd(){}function e_(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Id(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function t_(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Id(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function n_(t,e,n){return Vr&21?(Bt(n,e)||(n=av(),we.lanes|=n,Lr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pt=!0),t.memoizedState=n)}function rS(t,e){var n=le;le=n!==0&&4>n?n:4,t(!0);var r=nc.transition;nc.transition={};try{t(!1),e()}finally{le=n,nc.transition=r}}function r_(){return bt().memoizedState}function iS(t,e,n){var r=nr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},i_(t))s_(e,n);else if(n=Fv(t,e,n,r),n!==null){var i=lt();Ut(n,t,r,i),o_(n,e,r)}}function sS(t,e,n){var r=nr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(i_(t))s_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Bt(l,o)){var u=e.interleaved;u===null?(i.next=i,vd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Fv(t,e,i,r),n!==null&&(i=lt(),Ut(n,t,r,i),o_(n,e,r))}}function i_(t){var e=t.alternate;return t===we||e!==null&&e===we}function s_(t,e){Os=ll=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function o_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,id(t,n)}}var ul={readContext:Nt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},oS={readContext:Nt,useCallback:function(t,e){return Wt().memoizedState=[t,e===void 0?null:e],t},useContext:Nt,useEffect:Cm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Na(4194308,4,Jv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Na(4194308,4,t,e)},useInsertionEffect:function(t,e){return Na(4,2,t,e)},useMemo:function(t,e){var n=Wt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Wt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=iS.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var e=Wt();return t={current:t},e.memoizedState=t},useState:km,useDebugValue:kd,useDeferredValue:function(t){return Wt().memoizedState=t},useTransition:function(){var t=km(!1),e=t[0];return t=rS.bind(null,t[1]),Wt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=we,i=Wt();if(ye){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),je===null)throw Error(M(349));Vr&30||qv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Cm(Hv.bind(null,r,s,t),[t]),r.flags|=2048,io(9,Wv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Wt(),e=je.identifierPrefix;if(ye){var n=gn,r=mn;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=no++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=nS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},aS={readContext:Nt,useCallback:e_,useContext:Nt,useEffect:Ad,useImperativeHandle:Zv,useInsertionEffect:Yv,useLayoutEffect:Xv,useMemo:t_,useReducer:rc,useRef:Gv,useState:function(){return rc(ro)},useDebugValue:kd,useDeferredValue:function(t){var e=bt();return n_(e,De.memoizedState,t)},useTransition:function(){var t=rc(ro)[0],e=bt().memoizedState;return[t,e]},useMutableSource:zv,useSyncExternalStore:$v,useId:r_,unstable_isNewReconciler:!1},lS={readContext:Nt,useCallback:e_,useContext:Nt,useEffect:Ad,useImperativeHandle:Zv,useInsertionEffect:Yv,useLayoutEffect:Xv,useMemo:t_,useReducer:ic,useRef:Gv,useState:function(){return ic(ro)},useDebugValue:kd,useDeferredValue:function(t){var e=bt();return De===null?e.memoizedState=t:n_(e,De.memoizedState,t)},useTransition:function(){var t=ic(ro)[0],e=bt().memoizedState;return[t,e]},useMutableSource:zv,useSyncExternalStore:$v,useId:r_,unstable_isNewReconciler:!1};function Vt(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ih(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ul={isMounted:function(t){return(t=t._reactInternals)?Wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=lt(),i=nr(t),s=En(r,i);s.payload=e,n!=null&&(s.callback=n),e=er(t,s,i),e!==null&&(Ut(e,t,i,r),Ra(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=lt(),i=nr(t),s=En(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=er(t,s,i),e!==null&&(Ut(e,t,i,r),Ra(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=lt(),r=nr(t),i=En(n,r);i.tag=2,e!=null&&(i.callback=e),e=er(t,i,r),e!==null&&(Ut(e,t,r,n),Ra(e,t,r))}};function Rm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ys(n,r)||!Ys(i,s):!0}function a_(t,e,n){var r=!1,i=cr,s=e.contextType;return typeof s=="object"&&s!==null?s=Nt(s):(i=gt(e)?Dr:nt.current,r=e.contextTypes,s=(r=r!=null)?Ci(t,i):cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ul,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Pm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ul.enqueueReplaceState(e,e.state,null)}function sh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},_d(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Nt(s):(s=gt(e)?Dr:nt.current,i.context=Ci(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ih(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ul.enqueueReplaceState(i,i.state,null),ol(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function bi(t,e){try{var n="",r=e;do n+=LT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function sc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function oh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var uS=typeof WeakMap=="function"?WeakMap:Map;function l_(t,e,n){n=En(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){hl||(hl=!0,gh=r),oh(t,e)},n}function u_(t,e,n){n=En(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){oh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){oh(t,e),typeof r!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Nm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new uS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=IS.bind(null,t,e,n),e.then(t,t))}function bm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=En(-1,1),e.tag=2,er(n,e,1))),n.lanes|=1),t)}var cS=Dn.ReactCurrentOwner,pt=!1;function at(t,e,n,r){e.child=t===null?jv(e,null,n,r):Pi(e,t.child,n,r)}function Om(t,e,n,r,i){n=n.render;var s=e.ref;return Ei(e,i),r=Sd(t,e,n,r,s,i),n=xd(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kn(t,e,i)):(ye&&n&&dd(e),e.flags|=1,at(t,e,r,i),e.child)}function Vm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Vd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,c_(t,e,s,r,i)):(t=Va(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ys,n(o,r)&&t.ref===e.ref)return kn(t,e,i)}return e.flags|=1,t=rr(s,r),t.ref=e.ref,t.return=e,e.child=t}function c_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ys(s,r)&&t.ref===e.ref)if(pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(pt=!0);else return e.lanes=t.lanes,kn(t,e,i)}return ah(t,e,n,r,i)}function h_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(mi,_t),_t|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(mi,_t),_t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(mi,_t),_t|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(mi,_t),_t|=r;return at(t,e,i,n),e.child}function d_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ah(t,e,n,r,i){var s=gt(n)?Dr:nt.current;return s=Ci(e,s),Ei(e,i),n=Sd(t,e,n,r,s,i),r=xd(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kn(t,e,i)):(ye&&r&&dd(e),e.flags|=1,at(t,e,n,i),e.child)}function Lm(t,e,n,r,i){if(gt(n)){var s=!0;tl(e)}else s=!1;if(Ei(e,i),e.stateNode===null)ba(t,e),a_(e,n,r),sh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Nt(h):(h=gt(n)?Dr:nt.current,h=Ci(e,h));var f=n.getDerivedStateFromProps,y=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Pm(e,o,r,h),Un=!1;var v=e.memoizedState;o.state=v,ol(e,r,o,i),u=e.memoizedState,l!==r||v!==u||mt.current||Un?(typeof f=="function"&&(ih(e,n,f,r),u=e.memoizedState),(l=Un||Rm(e,n,l,r,v,u,h))?(y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Uv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Vt(e.type,l),o.props=h,y=e.pendingProps,v=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Nt(u):(u=gt(n)?Dr:nt.current,u=Ci(e,u));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==y||v!==u)&&Pm(e,o,r,u),Un=!1,v=e.memoizedState,o.state=v,ol(e,r,o,i);var C=e.memoizedState;l!==y||v!==C||mt.current||Un?(typeof k=="function"&&(ih(e,n,k,r),C=e.memoizedState),(h=Un||Rm(e,n,h,r,v,C,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),r=!1)}return lh(t,e,n,r,s,i)}function lh(t,e,n,r,i,s){d_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Em(e,n,!1),kn(t,e,s);r=e.stateNode,cS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Pi(e,t.child,null,s),e.child=Pi(e,null,l,s)):at(t,e,l,s),e.memoizedState=r.state,i&&Em(e,n,!0),e.child}function f_(t){var e=t.stateNode;e.pendingContext?wm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wm(t,e.context,!1),wd(t,e.containerInfo)}function Mm(t,e,n,r,i){return Ri(),pd(i),e.flags|=256,at(t,e,n,r),e.child}var uh={dehydrated:null,treeContext:null,retryLane:0};function ch(t){return{baseLanes:t,cachePool:null,transitions:null}}function p_(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(_e,i&1),t===null)return nh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$l(o,r,0,null),t=Nr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ch(n),e.memoizedState=uh,t):Cd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return hS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=rr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=rr(l,s):(s=Nr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ch(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=uh,r}return s=t.child,t=s.sibling,r=rr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Cd(t,e){return e=$l({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function da(t,e,n,r){return r!==null&&pd(r),Pi(e,t.child,null,n),t=Cd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=sc(Error(M(422))),da(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=$l({mode:"visible",children:r.children},i,0,null),s=Nr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Pi(e,t.child,null,o),e.child.memoizedState=ch(o),e.memoizedState=uh,s);if(!(e.mode&1))return da(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(M(419)),r=sc(s,r,void 0),da(t,e,o,r)}if(l=(o&t.childLanes)!==0,pt||l){if(r=je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,An(t,i),Ut(r,t,i,-1))}return Od(),r=sc(Error(M(421))),da(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=SS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,wt=Zn(i.nextSibling),Et=e,ye=!0,Mt=null,t!==null&&(xt[At++]=mn,xt[At++]=gn,xt[At++]=Or,mn=t.id,gn=t.overflow,Or=e),e=Cd(e,r.children),e.flags|=4096,e)}function jm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),rh(t.return,e,n)}function oc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function m_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(at(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jm(t,n,e);else if(t.tag===19)jm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&al(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),oc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&al(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}oc(e,!0,n,null,s);break;case"together":oc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ba(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function kn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Lr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function dS(t,e,n){switch(e.tag){case 3:f_(e),Ri();break;case 5:Bv(e);break;case 1:gt(e.type)&&tl(e);break;case 4:wd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(il,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?p_(t,e,n):(de(_e,_e.current&1),t=kn(t,e,n),t!==null?t.sibling:null);de(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return m_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,h_(t,e,n)}return kn(t,e,n)}var g_,hh,y_,v_;g_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hh=function(){};y_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,kr(Yt.current);var s=null;switch(n){case"input":i=Dc(t,i),r=Dc(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=Lc(t,i),r=Lc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Za)}jc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&($s.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&($s.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&pe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};v_=function(t,e,n,r){n!==r&&(e.flags|=4)};function vs(t,e){if(!ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function fS(t,e,n){var r=e.pendingProps;switch(fd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(e),null;case 1:return gt(e.type)&&el(),Xe(e),null;case 3:return r=e.stateNode,Ni(),ge(mt),ge(nt),Td(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ca(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mt!==null&&(_h(Mt),Mt=null))),hh(t,e),Xe(e),null;case 5:Ed(e);var i=kr(to.current);if(n=e.type,t!==null&&e.stateNode!=null)y_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return Xe(e),null}if(t=kr(Yt.current),ca(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ht]=e,r[Zs]=s,t=(e.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<Ss.length;i++)pe(Ss[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":Kp(r,s),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},pe("invalid",r);break;case"textarea":Gp(r,s),pe("invalid",r)}jc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ua(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ua(r.textContent,l,t),i=["children",""+l]):$s.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":ta(r),Qp(r,s,!0);break;case"textarea":ta(r),Yp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Za)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Hy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ht]=e,t[Zs]=r,g_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Fc(n,r),n){case"dialog":pe("cancel",t),pe("close",t),i=r;break;case"iframe":case"object":case"embed":pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ss.length;i++)pe(Ss[i],t);i=r;break;case"source":pe("error",t),i=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),i=r;break;case"details":pe("toggle",t),i=r;break;case"input":Kp(t,r),i=Dc(t,r),pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),pe("invalid",t);break;case"textarea":Gp(t,r),i=Lc(t,r),pe("invalid",t);break;default:i=r}jc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Gy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ky(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&qs(t,u):typeof u=="number"&&qs(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($s.hasOwnProperty(s)?u!=null&&s==="onScroll"&&pe("scroll",t):u!=null&&Jh(t,s,u,o))}switch(n){case"input":ta(t),Qp(t,r,!1);break;case"textarea":ta(t),Yp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ur(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?yi(t,!!r.multiple,s,!1):r.defaultValue!=null&&yi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Za)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xe(e),null;case 6:if(t&&e.stateNode!=null)v_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=kr(to.current),kr(Yt.current),ca(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ht]=e,(s=r.nodeValue!==n)&&(t=Et,t!==null))switch(t.tag){case 3:ua(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ua(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ht]=e,e.stateNode=r}return Xe(e),null;case 13:if(ge(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&wt!==null&&e.mode&1&&!(e.flags&128))Lv(),Ri(),e.flags|=98560,s=!1;else if(s=ca(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(M(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[Ht]=e}else Ri(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xe(e),s=!1}else Mt!==null&&(_h(Mt),Mt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?Oe===0&&(Oe=3):Od())),e.updateQueue!==null&&(e.flags|=4),Xe(e),null);case 4:return Ni(),hh(t,e),t===null&&Xs(e.stateNode.containerInfo),Xe(e),null;case 10:return yd(e.type._context),Xe(e),null;case 17:return gt(e.type)&&el(),Xe(e),null;case 19:if(ge(_e),s=e.memoizedState,s===null)return Xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)vs(s,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=al(t),o!==null){for(e.flags|=128,vs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&ke()>Di&&(e.flags|=128,r=!0,vs(s,!1),e.lanes=4194304)}else{if(!r)if(t=al(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),vs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return Xe(e),null}else 2*ke()-s.renderingStartTime>Di&&n!==1073741824&&(e.flags|=128,r=!0,vs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ke(),e.sibling=null,n=_e.current,de(_e,r?n&1|2:n&1),e):(Xe(e),null);case 22:case 23:return Dd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?_t&1073741824&&(Xe(e),e.subtreeFlags&6&&(e.flags|=8192)):Xe(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function pS(t,e){switch(fd(e),e.tag){case 1:return gt(e.type)&&el(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ni(),ge(mt),ge(nt),Td(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ed(e),null;case 13:if(ge(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));Ri()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(_e),null;case 4:return Ni(),null;case 10:return yd(e.type._context),null;case 22:case 23:return Dd(),null;case 24:return null;default:return null}}var fa=!1,et=!1,mS=typeof WeakSet=="function"?WeakSet:Set,z=null;function pi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(t,e,r)}else n.current=null}function dh(t,e,n){try{n()}catch(r){Se(t,e,r)}}var Fm=!1;function gS(t,e){if(Gc=Ya,t=Iv(),hd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,y=t,v=null;t:for(;;){for(var k;y!==n||i!==0&&y.nodeType!==3||(l=o+i),y!==s||r!==0&&y.nodeType!==3||(u=o+r),y.nodeType===3&&(o+=y.nodeValue.length),(k=y.firstChild)!==null;)v=y,y=k;for(;;){if(y===t)break t;if(v===n&&++h===i&&(l=o),v===s&&++f===r&&(u=o),(k=y.nextSibling)!==null)break;y=v,v=y.parentNode}y=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yc={focusedElem:t,selectionRange:n},Ya=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var N=C.memoizedProps,O=C.memoizedState,I=e.stateNode,E=I.getSnapshotBeforeUpdate(e.elementType===e.type?N:Vt(e.type,N),O);I.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(b){Se(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return C=Fm,Fm=!1,C}function Vs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&dh(e,n,s)}i=i.next}while(i!==r)}}function Bl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function fh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function __(t){var e=t.alternate;e!==null&&(t.alternate=null,__(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ht],delete e[Zs],delete e[Zc],delete e[JI],delete e[ZI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function w_(t){return t.tag===5||t.tag===3||t.tag===4}function Um(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||w_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ph(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Za));else if(r!==4&&(t=t.child,t!==null))for(ph(t,e,n),t=t.sibling;t!==null;)ph(t,e,n),t=t.sibling}function mh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(mh(t,e,n),t=t.sibling;t!==null;)mh(t,e,n),t=t.sibling}var Ue=null,Lt=!1;function Mn(t,e,n){for(n=n.child;n!==null;)E_(t,e,n),n=n.sibling}function E_(t,e,n){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(Dl,n)}catch{}switch(n.tag){case 5:et||pi(n,e);case 6:var r=Ue,i=Lt;Ue=null,Mn(t,e,n),Ue=r,Lt=i,Ue!==null&&(Lt?(t=Ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Lt?(t=Ue,n=n.stateNode,t.nodeType===8?Zu(t.parentNode,n):t.nodeType===1&&Zu(t,n),Qs(t)):Zu(Ue,n.stateNode));break;case 4:r=Ue,i=Lt,Ue=n.stateNode.containerInfo,Lt=!0,Mn(t,e,n),Ue=r,Lt=i;break;case 0:case 11:case 14:case 15:if(!et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&dh(n,e,o),i=i.next}while(i!==r)}Mn(t,e,n);break;case 1:if(!et&&(pi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Se(n,e,l)}Mn(t,e,n);break;case 21:Mn(t,e,n);break;case 22:n.mode&1?(et=(r=et)||n.memoizedState!==null,Mn(t,e,n),et=r):Mn(t,e,n);break;default:Mn(t,e,n)}}function Bm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new mS),e.forEach(function(r){var i=xS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ot(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ue=l.stateNode,Lt=!1;break e;case 3:Ue=l.stateNode.containerInfo,Lt=!0;break e;case 4:Ue=l.stateNode.containerInfo,Lt=!0;break e}l=l.return}if(Ue===null)throw Error(M(160));E_(s,o,i),Ue=null,Lt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Se(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)T_(e,t),e=e.sibling}function T_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ot(e,t),qt(t),r&4){try{Vs(3,t,t.return),Bl(3,t)}catch(N){Se(t,t.return,N)}try{Vs(5,t,t.return)}catch(N){Se(t,t.return,N)}}break;case 1:Ot(e,t),qt(t),r&512&&n!==null&&pi(n,n.return);break;case 5:if(Ot(e,t),qt(t),r&512&&n!==null&&pi(n,n.return),t.flags&32){var i=t.stateNode;try{qs(i,"")}catch(N){Se(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&qy(i,s),Fc(l,o);var h=Fc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],y=u[o+1];f==="style"?Gy(i,y):f==="dangerouslySetInnerHTML"?Ky(i,y):f==="children"?qs(i,y):Jh(i,f,y,h)}switch(l){case"input":Oc(i,s);break;case"textarea":Wy(i,s);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var k=s.value;k!=null?yi(i,!!s.multiple,k,!1):v!==!!s.multiple&&(s.defaultValue!=null?yi(i,!!s.multiple,s.defaultValue,!0):yi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Zs]=s}catch(N){Se(t,t.return,N)}}break;case 6:if(Ot(e,t),qt(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Se(t,t.return,N)}}break;case 3:if(Ot(e,t),qt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qs(e.containerInfo)}catch(N){Se(t,t.return,N)}break;case 4:Ot(e,t),qt(t);break;case 13:Ot(e,t),qt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Nd=ke())),r&4&&Bm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(et=(h=et)||f,Ot(e,t),et=h):Ot(e,t),qt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(z=t,f=t.child;f!==null;){for(y=z=f;z!==null;){switch(v=z,k=v.child,v.tag){case 0:case 11:case 14:case 15:Vs(4,v,v.return);break;case 1:pi(v,v.return);var C=v.stateNode;if(typeof C.componentWillUnmount=="function"){r=v,n=v.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(N){Se(r,n,N)}}break;case 5:pi(v,v.return);break;case 22:if(v.memoizedState!==null){$m(y);continue}}k!==null?(k.return=v,z=k):$m(y)}f=f.sibling}e:for(f=null,y=t;;){if(y.tag===5){if(f===null){f=y;try{i=y.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=y.stateNode,u=y.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Qy("display",o))}catch(N){Se(t,t.return,N)}}}else if(y.tag===6){if(f===null)try{y.stateNode.nodeValue=h?"":y.memoizedProps}catch(N){Se(t,t.return,N)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===t)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;f===y&&(f=null),y=y.return}f===y&&(f=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Ot(e,t),qt(t),r&4&&Bm(t);break;case 21:break;default:Ot(e,t),qt(t)}}function qt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(w_(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qs(i,""),r.flags&=-33);var s=Um(t);mh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Um(t);ph(t,l,o);break;default:throw Error(M(161))}}catch(u){Se(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yS(t,e,n){z=t,I_(t)}function I_(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||et;l=fa;var h=et;if(fa=o,(et=u)&&!h)for(z=i;z!==null;)o=z,u=o.child,o.tag===22&&o.memoizedState!==null?qm(i):u!==null?(u.return=o,z=u):qm(i);for(;s!==null;)z=s,I_(s),s=s.sibling;z=i,fa=l,et=h}zm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,z=s):zm(t)}}function zm(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:et||Bl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Vt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Am(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Am(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var y=f.dehydrated;y!==null&&Qs(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}et||e.flags&512&&fh(e)}catch(v){Se(e,e.return,v)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function $m(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function qm(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Bl(4,e)}catch(u){Se(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Se(e,i,u)}}var s=e.return;try{fh(e)}catch(u){Se(e,s,u)}break;case 5:var o=e.return;try{fh(e)}catch(u){Se(e,o,u)}}}catch(u){Se(e,e.return,u)}if(e===t){z=null;break}var l=e.sibling;if(l!==null){l.return=e.return,z=l;break}z=e.return}}var vS=Math.ceil,cl=Dn.ReactCurrentDispatcher,Rd=Dn.ReactCurrentOwner,Rt=Dn.ReactCurrentBatchConfig,ie=0,je=null,Pe=null,$e=0,_t=0,mi=gr(0),Oe=0,so=null,Lr=0,zl=0,Pd=0,Ls=null,ft=null,Nd=0,Di=1/0,dn=null,hl=!1,gh=null,tr=null,pa=!1,Qn=null,dl=0,Ms=0,yh=null,Da=-1,Oa=0;function lt(){return ie&6?ke():Da!==-1?Da:Da=ke()}function nr(t){return t.mode&1?ie&2&&$e!==0?$e&-$e:tS.transition!==null?(Oa===0&&(Oa=av()),Oa):(t=le,t!==0||(t=window.event,t=t===void 0?16:pv(t.type)),t):1}function Ut(t,e,n,r){if(50<Ms)throw Ms=0,yh=null,Error(M(185));Eo(t,n,r),(!(ie&2)||t!==je)&&(t===je&&(!(ie&2)&&(zl|=n),Oe===4&&zn(t,$e)),yt(t,r),n===1&&ie===0&&!(e.mode&1)&&(Di=ke()+500,jl&&yr()))}function yt(t,e){var n=t.callbackNode;tI(t,e);var r=Ga(t,t===je?$e:0);if(r===0)n!==null&&Zp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Zp(n),e===1)t.tag===0?eS(Wm.bind(null,t)):Dv(Wm.bind(null,t)),YI(function(){!(ie&6)&&yr()}),n=null;else{switch(lv(r)){case 1:n=rd;break;case 4:n=sv;break;case 16:n=Qa;break;case 536870912:n=ov;break;default:n=Qa}n=N_(n,S_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function S_(t,e){if(Da=-1,Oa=0,ie&6)throw Error(M(327));var n=t.callbackNode;if(Ti()&&t.callbackNode!==n)return null;var r=Ga(t,t===je?$e:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=fl(t,r);else{e=r;var i=ie;ie|=2;var s=A_();(je!==t||$e!==e)&&(dn=null,Di=ke()+500,Pr(t,e));do try{ES();break}catch(l){x_(t,l)}while(!0);gd(),cl.current=s,ie=i,Pe!==null?e=0:(je=null,$e=0,e=Oe)}if(e!==0){if(e===2&&(i=qc(t),i!==0&&(r=i,e=vh(t,i))),e===1)throw n=so,Pr(t,0),zn(t,r),yt(t,ke()),n;if(e===6)zn(t,r);else{if(i=t.current.alternate,!(r&30)&&!_S(i)&&(e=fl(t,r),e===2&&(s=qc(t),s!==0&&(r=s,e=vh(t,s))),e===1))throw n=so,Pr(t,0),zn(t,r),yt(t,ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:Ir(t,ft,dn);break;case 3:if(zn(t,r),(r&130023424)===r&&(e=Nd+500-ke(),10<e)){if(Ga(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Jc(Ir.bind(null,t,ft,dn),e);break}Ir(t,ft,dn);break;case 4:if(zn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ft(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vS(r/1960))-r,10<r){t.timeoutHandle=Jc(Ir.bind(null,t,ft,dn),r);break}Ir(t,ft,dn);break;case 5:Ir(t,ft,dn);break;default:throw Error(M(329))}}}return yt(t,ke()),t.callbackNode===n?S_.bind(null,t):null}function vh(t,e){var n=Ls;return t.current.memoizedState.isDehydrated&&(Pr(t,e).flags|=256),t=fl(t,e),t!==2&&(e=ft,ft=n,e!==null&&_h(e)),t}function _h(t){ft===null?ft=t:ft.push.apply(ft,t)}function _S(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Bt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zn(t,e){for(e&=~Pd,e&=~zl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ft(e),r=1<<n;t[n]=-1,e&=~r}}function Wm(t){if(ie&6)throw Error(M(327));Ti();var e=Ga(t,0);if(!(e&1))return yt(t,ke()),null;var n=fl(t,e);if(t.tag!==0&&n===2){var r=qc(t);r!==0&&(e=r,n=vh(t,r))}if(n===1)throw n=so,Pr(t,0),zn(t,e),yt(t,ke()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ir(t,ft,dn),yt(t,ke()),null}function bd(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(Di=ke()+500,jl&&yr())}}function Mr(t){Qn!==null&&Qn.tag===0&&!(ie&6)&&Ti();var e=ie;ie|=1;var n=Rt.transition,r=le;try{if(Rt.transition=null,le=1,t)return t()}finally{le=r,Rt.transition=n,ie=e,!(ie&6)&&yr()}}function Dd(){_t=mi.current,ge(mi)}function Pr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,GI(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(fd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&el();break;case 3:Ni(),ge(mt),ge(nt),Td();break;case 5:Ed(r);break;case 4:Ni();break;case 13:ge(_e);break;case 19:ge(_e);break;case 10:yd(r.type._context);break;case 22:case 23:Dd()}n=n.return}if(je=t,Pe=t=rr(t.current,null),$e=_t=e,Oe=0,so=null,Pd=zl=Lr=0,ft=Ls=null,Ar!==null){for(e=0;e<Ar.length;e++)if(n=Ar[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ar=null}return t}function x_(t,e){do{var n=Pe;try{if(gd(),Pa.current=ul,ll){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ll=!1}if(Vr=0,Me=De=we=null,Os=!1,no=0,Rd.current=null,n===null||n.return===null){Oe=1,so=e,Pe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=$e,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,y=f.tag;if(!(f.mode&1)&&(y===0||y===11||y===15)){var v=f.alternate;v?(f.updateQueue=v.updateQueue,f.memoizedState=v.memoizedState,f.lanes=v.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=bm(o);if(k!==null){k.flags&=-257,Dm(k,o,l,s,e),k.mode&1&&Nm(s,h,e),e=k,u=h;var C=e.updateQueue;if(C===null){var N=new Set;N.add(u),e.updateQueue=N}else C.add(u);break e}else{if(!(e&1)){Nm(s,h,e),Od();break e}u=Error(M(426))}}else if(ye&&l.mode&1){var O=bm(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Dm(O,o,l,s,e),pd(bi(u,l));break e}}s=u=bi(u,l),Oe!==4&&(Oe=2),Ls===null?Ls=[s]:Ls.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=l_(s,u,e);xm(s,I);break e;case 1:l=u;var E=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(tr===null||!tr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=u_(s,l,e);xm(s,b);break e}}s=s.return}while(s!==null)}C_(n)}catch(F){e=F,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function A_(){var t=cl.current;return cl.current=ul,t===null?ul:t}function Od(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),je===null||!(Lr&268435455)&&!(zl&268435455)||zn(je,$e)}function fl(t,e){var n=ie;ie|=2;var r=A_();(je!==t||$e!==e)&&(dn=null,Pr(t,e));do try{wS();break}catch(i){x_(t,i)}while(!0);if(gd(),ie=n,cl.current=r,Pe!==null)throw Error(M(261));return je=null,$e=0,Oe}function wS(){for(;Pe!==null;)k_(Pe)}function ES(){for(;Pe!==null&&!HT();)k_(Pe)}function k_(t){var e=P_(t.alternate,t,_t);t.memoizedProps=t.pendingProps,e===null?C_(t):Pe=e,Rd.current=null}function C_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=pS(n,e),n!==null){n.flags&=32767,Pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,Pe=null;return}}else if(n=fS(n,e,_t),n!==null){Pe=n;return}if(e=e.sibling,e!==null){Pe=e;return}Pe=e=t}while(e!==null);Oe===0&&(Oe=5)}function Ir(t,e,n){var r=le,i=Rt.transition;try{Rt.transition=null,le=1,TS(t,e,n,r)}finally{Rt.transition=i,le=r}return null}function TS(t,e,n,r){do Ti();while(Qn!==null);if(ie&6)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(nI(t,s),t===je&&(Pe=je=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pa||(pa=!0,N_(Qa,function(){return Ti(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rt.transition,Rt.transition=null;var o=le;le=1;var l=ie;ie|=4,Rd.current=null,gS(t,n),T_(n,t),zI(Yc),Ya=!!Gc,Yc=Gc=null,t.current=n,yS(n),KT(),ie=l,le=o,Rt.transition=s}else t.current=n;if(pa&&(pa=!1,Qn=t,dl=i),s=t.pendingLanes,s===0&&(tr=null),YT(n.stateNode),yt(t,ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(hl)throw hl=!1,t=gh,gh=null,t;return dl&1&&t.tag!==0&&Ti(),s=t.pendingLanes,s&1?t===yh?Ms++:(Ms=0,yh=t):Ms=0,yr(),null}function Ti(){if(Qn!==null){var t=lv(dl),e=Rt.transition,n=le;try{if(Rt.transition=null,le=16>t?16:t,Qn===null)var r=!1;else{if(t=Qn,Qn=null,dl=0,ie&6)throw Error(M(331));var i=ie;for(ie|=4,z=t.current;z!==null;){var s=z,o=s.child;if(z.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(z=h;z!==null;){var f=z;switch(f.tag){case 0:case 11:case 15:Vs(8,f,s)}var y=f.child;if(y!==null)y.return=f,z=y;else for(;z!==null;){f=z;var v=f.sibling,k=f.return;if(__(f),f===h){z=null;break}if(v!==null){v.return=k,z=v;break}z=k}}}var C=s.alternate;if(C!==null){var N=C.child;if(N!==null){C.child=null;do{var O=N.sibling;N.sibling=null,N=O}while(N!==null)}}z=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,z=o;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Vs(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,z=I;break e}z=s.return}}var E=t.current;for(z=E;z!==null;){o=z;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,z=x;else e:for(o=E;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Bl(9,l)}}catch(F){Se(l,l.return,F)}if(l===o){z=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,z=b;break e}z=l.return}}if(ie=i,yr(),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(Dl,t)}catch{}r=!0}return r}finally{le=n,Rt.transition=e}}return!1}function Hm(t,e,n){e=bi(n,e),e=l_(t,e,1),t=er(t,e,1),e=lt(),t!==null&&(Eo(t,1,e),yt(t,e))}function Se(t,e,n){if(t.tag===3)Hm(t,t,n);else for(;e!==null;){if(e.tag===3){Hm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tr===null||!tr.has(r))){t=bi(n,t),t=u_(e,t,1),e=er(e,t,1),t=lt(),e!==null&&(Eo(e,1,t),yt(e,t));break}}e=e.return}}function IS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=lt(),t.pingedLanes|=t.suspendedLanes&n,je===t&&($e&n)===n&&(Oe===4||Oe===3&&($e&130023424)===$e&&500>ke()-Nd?Pr(t,0):Pd|=n),yt(t,e)}function R_(t,e){e===0&&(t.mode&1?(e=ia,ia<<=1,!(ia&130023424)&&(ia=4194304)):e=1);var n=lt();t=An(t,e),t!==null&&(Eo(t,e,n),yt(t,n))}function SS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),R_(t,n)}function xS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),R_(t,n)}var P_;P_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mt.current)pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pt=!1,dS(t,e,n);pt=!!(t.flags&131072)}else pt=!1,ye&&e.flags&1048576&&Ov(e,rl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ba(t,e),t=e.pendingProps;var i=Ci(e,nt.current);Ei(e,n),i=Sd(null,e,r,t,i,n);var s=xd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gt(r)?(s=!0,tl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_d(e),i.updater=Ul,e.stateNode=i,i._reactInternals=e,sh(e,r,t,n),e=lh(null,e,r,!0,s,n)):(e.tag=0,ye&&s&&dd(e),at(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ba(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=kS(r),t=Vt(r,t),i){case 0:e=ah(null,e,r,t,n);break e;case 1:e=Lm(null,e,r,t,n);break e;case 11:e=Om(null,e,r,t,n);break e;case 14:e=Vm(null,e,r,Vt(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),ah(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Lm(t,e,r,i,n);case 3:e:{if(f_(e),t===null)throw Error(M(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Uv(t,e),ol(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=bi(Error(M(423)),e),e=Mm(t,e,r,n,i);break e}else if(r!==i){i=bi(Error(M(424)),e),e=Mm(t,e,r,n,i);break e}else for(wt=Zn(e.stateNode.containerInfo.firstChild),Et=e,ye=!0,Mt=null,n=jv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ri(),r===i){e=kn(t,e,n);break e}at(t,e,r,n)}e=e.child}return e;case 5:return Bv(e),t===null&&nh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Xc(r,i)?o=null:s!==null&&Xc(r,s)&&(e.flags|=32),d_(t,e),at(t,e,o,n),e.child;case 6:return t===null&&nh(e),null;case 13:return p_(t,e,n);case 4:return wd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Pi(e,null,r,n):at(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Om(t,e,r,i,n);case 7:return at(t,e,e.pendingProps,n),e.child;case 8:return at(t,e,e.pendingProps.children,n),e.child;case 12:return at(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(il,r._currentValue),r._currentValue=o,s!==null)if(Bt(s.value,o)){if(s.children===i.children&&!mt.current){e=kn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=En(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),rh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(M(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),rh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}at(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ei(e,n),i=Nt(i),r=r(i),e.flags|=1,at(t,e,r,n),e.child;case 14:return r=e.type,i=Vt(r,e.pendingProps),i=Vt(r.type,i),Vm(t,e,r,i,n);case 15:return c_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),ba(t,e),e.tag=1,gt(r)?(t=!0,tl(e)):t=!1,Ei(e,n),a_(e,r,i),sh(e,r,i,n),lh(null,e,r,!0,t,n);case 19:return m_(t,e,n);case 22:return h_(t,e,n)}throw Error(M(156,e.tag))};function N_(t,e){return iv(t,e)}function AS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(t,e,n,r){return new AS(t,e,n,r)}function Vd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kS(t){if(typeof t=="function")return Vd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ed)return 11;if(t===td)return 14}return 2}function rr(t,e){var n=t.alternate;return n===null?(n=Ct(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Va(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Vd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case si:return Nr(n.children,i,s,e);case Zh:o=8,i|=8;break;case Rc:return t=Ct(12,n,e,i|2),t.elementType=Rc,t.lanes=s,t;case Pc:return t=Ct(13,n,e,i),t.elementType=Pc,t.lanes=s,t;case Nc:return t=Ct(19,n,e,i),t.elementType=Nc,t.lanes=s,t;case By:return $l(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fy:o=10;break e;case Uy:o=9;break e;case ed:o=11;break e;case td:o=14;break e;case Fn:o=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=Ct(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Nr(t,e,n,r){return t=Ct(7,t,r,e),t.lanes=n,t}function $l(t,e,n,r){return t=Ct(22,t,r,e),t.elementType=By,t.lanes=n,t.stateNode={isHidden:!1},t}function ac(t,e,n){return t=Ct(6,t,null,e),t.lanes=n,t}function lc(t,e,n){return e=Ct(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function CS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zu(0),this.expirationTimes=zu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ld(t,e,n,r,i,s,o,l,u){return t=new CS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ct(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_d(s),t}function RS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ii,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function b_(t){if(!t)return cr;t=t._reactInternals;e:{if(Wr(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(gt(n))return bv(t,n,e)}return e}function D_(t,e,n,r,i,s,o,l,u){return t=Ld(n,r,!0,t,i,s,o,l,u),t.context=b_(null),n=t.current,r=lt(),i=nr(n),s=En(r,i),s.callback=e??null,er(n,s,i),t.current.lanes=i,Eo(t,i,r),yt(t,r),t}function ql(t,e,n,r){var i=e.current,s=lt(),o=nr(i);return n=b_(n),e.context===null?e.context=n:e.pendingContext=n,e=En(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=er(i,e,o),t!==null&&(Ut(t,i,o,s),Ra(t,i,o)),o}function pl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Km(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Md(t,e){Km(t,e),(t=t.alternate)&&Km(t,e)}function PS(){return null}var O_=typeof reportError=="function"?reportError:function(t){console.error(t)};function jd(t){this._internalRoot=t}Wl.prototype.render=jd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));ql(t,e,null,null)};Wl.prototype.unmount=jd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mr(function(){ql(null,t,null,null)}),e[xn]=null}};function Wl(t){this._internalRoot=t}Wl.prototype.unstable_scheduleHydration=function(t){if(t){var e=hv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bn.length&&e!==0&&e<Bn[n].priority;n++);Bn.splice(n,0,t),n===0&&fv(t)}};function Fd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qm(){}function NS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=pl(o);s.call(h)}}var o=D_(e,r,t,0,null,!1,!1,"",Qm);return t._reactRootContainer=o,t[xn]=o.current,Xs(t.nodeType===8?t.parentNode:t),Mr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=pl(u);l.call(h)}}var u=Ld(t,0,!1,null,null,!1,!1,"",Qm);return t._reactRootContainer=u,t[xn]=u.current,Xs(t.nodeType===8?t.parentNode:t),Mr(function(){ql(e,u,n,r)}),u}function Kl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=pl(o);l.call(u)}}ql(e,o,t,i)}else o=NS(n,e,t,i,r);return pl(o)}uv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Is(e.pendingLanes);n!==0&&(id(e,n|1),yt(e,ke()),!(ie&6)&&(Di=ke()+500,yr()))}break;case 13:Mr(function(){var r=An(t,1);if(r!==null){var i=lt();Ut(r,t,1,i)}}),Md(t,1)}};sd=function(t){if(t.tag===13){var e=An(t,134217728);if(e!==null){var n=lt();Ut(e,t,134217728,n)}Md(t,134217728)}};cv=function(t){if(t.tag===13){var e=nr(t),n=An(t,e);if(n!==null){var r=lt();Ut(n,t,e,r)}Md(t,e)}};hv=function(){return le};dv=function(t,e){var n=le;try{return le=t,e()}finally{le=n}};Bc=function(t,e,n){switch(e){case"input":if(Oc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ml(r);if(!i)throw Error(M(90));$y(r),Oc(r,i)}}}break;case"textarea":Wy(t,n);break;case"select":e=n.value,e!=null&&yi(t,!!n.multiple,e,!1)}};Jy=bd;Zy=Mr;var bS={usingClientEntryPoint:!1,Events:[Io,ui,Ml,Yy,Xy,bd]},_s={findFiberByHostInstance:xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},DS={bundleType:_s.bundleType,version:_s.version,rendererPackageName:_s.rendererPackageName,rendererConfig:_s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=nv(t),t===null?null:t.stateNode},findFiberByHostInstance:_s.findFiberByHostInstance||PS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ma.isDisabled&&ma.supportsFiber)try{Dl=ma.inject(DS),Gt=ma}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bS;It.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fd(e))throw Error(M(200));return RS(t,e,null,n)};It.createRoot=function(t,e){if(!Fd(t))throw Error(M(299));var n=!1,r="",i=O_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ld(t,1,!1,null,null,n,!1,r,i),t[xn]=e.current,Xs(t.nodeType===8?t.parentNode:t),new jd(e)};It.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=nv(e),t=t===null?null:t.stateNode,t};It.flushSync=function(t){return Mr(t)};It.hydrate=function(t,e,n){if(!Hl(e))throw Error(M(200));return Kl(null,t,e,!0,n)};It.hydrateRoot=function(t,e,n){if(!Fd(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=O_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=D_(e,null,t,1,n??null,i,!1,s,o),t[xn]=e.current,Xs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Wl(e)};It.render=function(t,e,n){if(!Hl(e))throw Error(M(200));return Kl(null,t,e,!1,n)};It.unmountComponentAtNode=function(t){if(!Hl(t))throw Error(M(40));return t._reactRootContainer?(Mr(function(){Kl(null,null,t,!1,function(){t._reactRootContainer=null,t[xn]=null})}),!0):!1};It.unstable_batchedUpdates=bd;It.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Hl(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return Kl(t,e,n,!1,r)};It.version="18.3.1-next-f1338f8080-20240426";function V_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(V_)}catch(t){console.error(t)}}V_(),Vy.exports=It;var OS=Vy.exports,Gm=OS;kc.createRoot=Gm.createRoot,kc.hydrateRoot=Gm.hydrateRoot;const VS="0000";function LS({onSelect:t}){const[e,n]=H.useState(!1),[r,i]=H.useState(""),[s,o]=H.useState(""),l=()=>{r===VS?t("coordinator"):o("코드가 맞지 않아요. 다시 확인해 주세요.")};return m.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center px-6 text-center",children:[m.jsx("p",{className:"font-display text-lampSoft text-sm tracking-widest mb-2",children:"DEUNGBUL · 等"}),m.jsx("h1",{className:"font-display text-3xl mb-1",children:"누구로 들어가시겠어요?"}),m.jsx("p",{className:"text-faint text-sm mb-10",children:"이 기기에서 사용할 역할을 한 번만 선택하면 됩니다"}),m.jsxs("div",{className:"w-full max-w-xs flex flex-col gap-3",children:[m.jsx("button",{className:"bg-lamp text-nightDeep font-semibold py-4 rounded-2xl shadow-glow",onClick:()=>t("writer"),children:"작성자로 들어가기"}),e?m.jsxs("div",{className:"border border-faint rounded-2xl p-4 flex flex-col gap-2",children:[m.jsx("input",{autoFocus:!0,inputMode:"numeric",maxLength:4,placeholder:"4자리 코드",value:r,onChange:u=>{o(""),i(u.target.value)},className:"bg-night border border-faint rounded-xl px-4 py-3 text-center text-lg tracking-widest"}),s&&m.jsx("p",{className:"text-sm text-red-300",children:s}),m.jsx("button",{className:"bg-sage text-nightDeep font-semibold py-3 rounded-xl",onClick:l,children:"확인"})]}):m.jsx("button",{className:"border border-faint text-paper py-4 rounded-2xl",onClick:()=>n(!0),children:"코디네이터로 들어가기"})]})]})}function MS(){var i;const t=navigator.userAgent,e=/iPad|iPhone|iPod/.test(t)&&!window.MSStream,n=/Android/.test(t),r=((i=window.matchMedia)==null?void 0:i.call(window,"(display-mode: standalone)").matches)||window.navigator.standalone===!0;return{isIOS:e,isAndroid:n,isStandalone:r}}function jS({onDone:t}){const[e,n]=H.useState(MS()),[r,i]=H.useState(null);H.useEffect(()=>{const o=l=>{l.preventDefault(),i(l)};return window.addEventListener("beforeinstallprompt",o),()=>window.removeEventListener("beforeinstallprompt",o)},[]),H.useEffect(()=>{e.isStandalone&&t()},[e.isStandalone]);const s=async()=>{r&&(r.prompt(),await r.userChoice,t())};return m.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center px-6 text-center",children:[m.jsx("p",{className:"font-display text-lampSoft text-sm tracking-widest mb-2",children:"한 번만 하면 끝나요"}),m.jsx("h1",{className:"font-display text-2xl mb-6",children:"홈 화면에 등불 추가하기"}),e.isAndroid&&m.jsx("div",{className:"w-full max-w-xs flex flex-col gap-3",children:r?m.jsx("button",{className:"bg-lamp text-nightDeep font-semibold py-4 rounded-2xl shadow-glow",onClick:s,children:"설치하기"}):m.jsxs("p",{className:"text-faint text-sm leading-relaxed",children:["브라우저 메뉴(⋮)에서 ",m.jsx("span",{className:"text-paper",children:'"앱 설치"'})," 또는"," ",m.jsx("span",{className:"text-paper",children:'"홈 화면에 추가"'}),"를 눌러주세요."]})}),e.isIOS&&m.jsxs("ol",{className:"w-full max-w-xs text-left text-faint text-sm leading-relaxed space-y-3",children:[m.jsxs("li",{children:["1. 하단(또는 상단) 공유 버튼 ",m.jsx("span",{className:"text-paper",children:"[ ⬆️ ]"})," 을 눌러요"]}),m.jsxs("li",{children:["2. 아래로 스크롤해서 ",m.jsx("span",{className:"text-paper",children:'"홈 화면에 추가"'}),"를 선택해요"]}),m.jsxs("li",{children:["3. 오른쪽 위 ",m.jsx("span",{className:"text-paper",children:'"추가"'}),"를 누르면 끝이에요"]})]}),!e.isAndroid&&!e.isIOS&&m.jsx("p",{className:"text-faint text-sm",children:"PC에서는 주소창의 설치 아이콘을 눌러 추가할 수 있어요."}),m.jsx("button",{className:"mt-10 text-faint text-sm underline",onClick:t,children:"나중에 할게요"})]})}var Ym={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},FS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},M_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,y=(s&3)<<4|l>>4;let v=(l&15)<<2|h>>6,k=h&63;u||(k=64,o||(v=64)),r.push(n[f],n[y],n[v],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(L_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):FS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const y=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||y==null)throw new US;const v=s<<2|l>>4;if(r.push(v),h!==64){const k=l<<4&240|h>>2;if(r.push(k),y!==64){const C=h<<6&192|y;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class US extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const BS=function(t){const e=L_(t);return M_.encodeByteArray(e,!0)},ml=function(t){return BS(t).replace(/\./g,"")},j_=function(t){try{return M_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=()=>zS().__FIREBASE_DEFAULTS__,qS=()=>{if(typeof process>"u"||typeof Ym>"u")return;const t=Ym.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},WS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&j_(t[1]);return e&&JSON.parse(e)},Ql=()=>{try{return $S()||qS()||WS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},F_=t=>{var e,n;return(n=(e=Ql())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},HS=t=>{const e=F_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},U_=()=>{var t;return(t=Ql())===null||t===void 0?void 0:t.config},B_=t=>{var e;return(e=Ql())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ml(JSON.stringify(n)),ml(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function GS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function YS(){var t;const e=(t=Ql())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function XS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function JS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ZS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ex(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tx(){return!YS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function z_(){try{return typeof indexedDB=="object"}catch{return!1}}function $_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function nx(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx="FirebaseError";class sn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=rx,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hr.prototype.create)}}class Hr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ix(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new sn(i,l,r)}}function ix(t,e){return t.replace(sx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const sx=/\{\$([^}]+)}/g;function ox(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Xm(s)&&Xm(o)){if(!gl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Xm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ax(t,e){const n=new lx(t,e);return n.subscribe.bind(n)}class lx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ux(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=uc),i.error===void 0&&(i.error=uc),i.complete===void 0&&(i.complete=uc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ux(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function uc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t){return t&&t._delegate?t._delegate:t}class zt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new KS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dx(e))try{this.getOrInitializeService({instanceIdentifier:Sr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Sr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sr){return this.instances.has(e)}getOptions(e=Sr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Sr){return this.component?this.component.multipleInstances?e:Sr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hx(t){return t===Sr?void 0:t}function dx(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const px={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},mx=ne.INFO,gx={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},yx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=gx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ud{constructor(e){this.name=e,this._logLevel=mx,this._logHandler=yx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?px[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const vx=(t,e)=>e.some(n=>t instanceof n);let Jm,Zm;function _x(){return Jm||(Jm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wx(){return Zm||(Zm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const q_=new WeakMap,wh=new WeakMap,W_=new WeakMap,cc=new WeakMap,Bd=new WeakMap;function Ex(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Tn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&q_.set(n,t)}).catch(()=>{}),Bd.set(e,t),e}function Tx(t){if(wh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});wh.set(t,e)}let Eh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||W_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ix(t){Eh=t(Eh)}function Sx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hc(this),e,...n);return W_.set(r,e.sort?e.sort():[e]),Tn(r)}:wx().includes(t)?function(...e){return t.apply(hc(this),e),Tn(q_.get(this))}:function(...e){return Tn(t.apply(hc(this),e))}}function xx(t){return typeof t=="function"?Sx(t):(t instanceof IDBTransaction&&Tx(t),vx(t,_x())?new Proxy(t,Eh):t)}function Tn(t){if(t instanceof IDBRequest)return Ex(t);if(cc.has(t))return cc.get(t);const e=xx(t);return e!==t&&(cc.set(t,e),Bd.set(e,t)),e}const hc=t=>Bd.get(t);function Gl(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Tn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Tn(o.result),u.oldVersion,u.newVersion,Tn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}function dc(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Tn(n).then(()=>{})}const Ax=["get","getKey","getAll","getAllKeys","count"],kx=["put","add","delete","clear"],fc=new Map;function eg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fc.get(e))return fc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=kx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ax.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return fc.set(e,s),s}Ix(t=>({...t,get:(e,n,r)=>eg(e,n)||t.get(e,n,r),has:(e,n)=>!!eg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Rx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Th="@firebase/app",tg="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new Ud("@firebase/app"),Px="@firebase/app-compat",Nx="@firebase/analytics-compat",bx="@firebase/analytics",Dx="@firebase/app-check-compat",Ox="@firebase/app-check",Vx="@firebase/auth",Lx="@firebase/auth-compat",Mx="@firebase/database",jx="@firebase/data-connect",Fx="@firebase/database-compat",Ux="@firebase/functions",Bx="@firebase/functions-compat",zx="@firebase/installations",$x="@firebase/installations-compat",qx="@firebase/messaging",Wx="@firebase/messaging-compat",Hx="@firebase/performance",Kx="@firebase/performance-compat",Qx="@firebase/remote-config",Gx="@firebase/remote-config-compat",Yx="@firebase/storage",Xx="@firebase/storage-compat",Jx="@firebase/firestore",Zx="@firebase/vertexai-preview",eA="@firebase/firestore-compat",tA="firebase",nA="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="[DEFAULT]",rA={[Th]:"fire-core",[Px]:"fire-core-compat",[bx]:"fire-analytics",[Nx]:"fire-analytics-compat",[Ox]:"fire-app-check",[Dx]:"fire-app-check-compat",[Vx]:"fire-auth",[Lx]:"fire-auth-compat",[Mx]:"fire-rtdb",[jx]:"fire-data-connect",[Fx]:"fire-rtdb-compat",[Ux]:"fire-fn",[Bx]:"fire-fn-compat",[zx]:"fire-iid",[$x]:"fire-iid-compat",[qx]:"fire-fcm",[Wx]:"fire-fcm-compat",[Hx]:"fire-perf",[Kx]:"fire-perf-compat",[Qx]:"fire-rc",[Gx]:"fire-rc-compat",[Yx]:"fire-gcs",[Xx]:"fire-gcs-compat",[Jx]:"fire-fst",[eA]:"fire-fst-compat",[Zx]:"fire-vertex","fire-js":"fire-js",[tA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=new Map,iA=new Map,Sh=new Map;function ng(t,e){try{t.container.addComponent(e)}catch(n){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function nn(t){const e=t.name;if(Sh.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;Sh.set(e,t);for(const n of yl.values())ng(n,t);for(const n of iA.values())ng(n,t);return!0}function Wi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function yn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ir=new Hr("app","Firebase",sA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ir.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=nA;function H_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ih,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ir.create("bad-app-name",{appName:String(i)});if(n||(n=U_()),!n)throw ir.create("no-options");const s=yl.get(i);if(s){if(gl(n,s.options)&&gl(r,s.config))return s;throw ir.create("duplicate-app",{appName:i})}const o=new fx(i);for(const u of Sh.values())o.addComponent(u);const l=new oA(n,r,o);return yl.set(i,l),l}function zd(t=Ih){const e=yl.get(t);if(!e&&t===Ih&&U_())return H_();if(!e)throw ir.create("no-app",{appName:t});return e}function Pt(t,e,n){var r;let i=(r=rA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(l.join(" "));return}nn(new zt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA="firebase-heartbeat-database",lA=1,oo="firebase-heartbeat-store";let pc=null;function K_(){return pc||(pc=Gl(aA,lA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(oo)}catch(n){console.warn(n)}}}}).catch(t=>{throw ir.create("idb-open",{originalErrorMessage:t.message})})),pc}async function uA(t){try{const n=(await K_()).transaction(oo),r=await n.objectStore(oo).get(Q_(t));return await n.done,r}catch(e){if(e instanceof sn)Cn.warn(e.message);else{const n=ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(n.message)}}}async function rg(t,e){try{const r=(await K_()).transaction(oo,"readwrite");await r.objectStore(oo).put(e,Q_(t)),await r.done}catch(n){if(n instanceof sn)Cn.warn(n.message);else{const r=ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cn.warn(r.message)}}}function Q_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=1024,hA=30*24*60*60*1e3;class dA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ig();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=hA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Cn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ig(),{heartbeatsToSend:r,unsentEntries:i}=fA(this._heartbeatsCache.heartbeats),s=ml(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Cn.warn(n),""}}}function ig(){return new Date().toISOString().substring(0,10)}function fA(t,e=cA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),sg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return z_()?$_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sg(t){return ml(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(t){nn(new zt("platform-logger",e=>new Cx(e),"PRIVATE")),nn(new zt("heartbeat",e=>new dA(e),"PRIVATE")),Pt(Th,tg,t),Pt(Th,tg,"esm2017"),Pt("fire-js","")}mA("");var og=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var br,G_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,p){function w(){}w.prototype=p.prototype,_.D=p.prototype,_.prototype=new w,_.prototype.constructor=_,_.C=function(T,A,R){for(var S=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)S[Z-2]=arguments[Z];return p.prototype[A].apply(T,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,p,w){w||(w=0);var T=Array(16);if(typeof p=="string")for(var A=0;16>A;++A)T[A]=p.charCodeAt(w++)|p.charCodeAt(w++)<<8|p.charCodeAt(w++)<<16|p.charCodeAt(w++)<<24;else for(A=0;16>A;++A)T[A]=p[w++]|p[w++]<<8|p[w++]<<16|p[w++]<<24;p=_.g[0],w=_.g[1],A=_.g[2];var R=_.g[3],S=p+(R^w&(A^R))+T[0]+3614090360&4294967295;p=w+(S<<7&4294967295|S>>>25),S=R+(A^p&(w^A))+T[1]+3905402710&4294967295,R=p+(S<<12&4294967295|S>>>20),S=A+(w^R&(p^w))+T[2]+606105819&4294967295,A=R+(S<<17&4294967295|S>>>15),S=w+(p^A&(R^p))+T[3]+3250441966&4294967295,w=A+(S<<22&4294967295|S>>>10),S=p+(R^w&(A^R))+T[4]+4118548399&4294967295,p=w+(S<<7&4294967295|S>>>25),S=R+(A^p&(w^A))+T[5]+1200080426&4294967295,R=p+(S<<12&4294967295|S>>>20),S=A+(w^R&(p^w))+T[6]+2821735955&4294967295,A=R+(S<<17&4294967295|S>>>15),S=w+(p^A&(R^p))+T[7]+4249261313&4294967295,w=A+(S<<22&4294967295|S>>>10),S=p+(R^w&(A^R))+T[8]+1770035416&4294967295,p=w+(S<<7&4294967295|S>>>25),S=R+(A^p&(w^A))+T[9]+2336552879&4294967295,R=p+(S<<12&4294967295|S>>>20),S=A+(w^R&(p^w))+T[10]+4294925233&4294967295,A=R+(S<<17&4294967295|S>>>15),S=w+(p^A&(R^p))+T[11]+2304563134&4294967295,w=A+(S<<22&4294967295|S>>>10),S=p+(R^w&(A^R))+T[12]+1804603682&4294967295,p=w+(S<<7&4294967295|S>>>25),S=R+(A^p&(w^A))+T[13]+4254626195&4294967295,R=p+(S<<12&4294967295|S>>>20),S=A+(w^R&(p^w))+T[14]+2792965006&4294967295,A=R+(S<<17&4294967295|S>>>15),S=w+(p^A&(R^p))+T[15]+1236535329&4294967295,w=A+(S<<22&4294967295|S>>>10),S=p+(A^R&(w^A))+T[1]+4129170786&4294967295,p=w+(S<<5&4294967295|S>>>27),S=R+(w^A&(p^w))+T[6]+3225465664&4294967295,R=p+(S<<9&4294967295|S>>>23),S=A+(p^w&(R^p))+T[11]+643717713&4294967295,A=R+(S<<14&4294967295|S>>>18),S=w+(R^p&(A^R))+T[0]+3921069994&4294967295,w=A+(S<<20&4294967295|S>>>12),S=p+(A^R&(w^A))+T[5]+3593408605&4294967295,p=w+(S<<5&4294967295|S>>>27),S=R+(w^A&(p^w))+T[10]+38016083&4294967295,R=p+(S<<9&4294967295|S>>>23),S=A+(p^w&(R^p))+T[15]+3634488961&4294967295,A=R+(S<<14&4294967295|S>>>18),S=w+(R^p&(A^R))+T[4]+3889429448&4294967295,w=A+(S<<20&4294967295|S>>>12),S=p+(A^R&(w^A))+T[9]+568446438&4294967295,p=w+(S<<5&4294967295|S>>>27),S=R+(w^A&(p^w))+T[14]+3275163606&4294967295,R=p+(S<<9&4294967295|S>>>23),S=A+(p^w&(R^p))+T[3]+4107603335&4294967295,A=R+(S<<14&4294967295|S>>>18),S=w+(R^p&(A^R))+T[8]+1163531501&4294967295,w=A+(S<<20&4294967295|S>>>12),S=p+(A^R&(w^A))+T[13]+2850285829&4294967295,p=w+(S<<5&4294967295|S>>>27),S=R+(w^A&(p^w))+T[2]+4243563512&4294967295,R=p+(S<<9&4294967295|S>>>23),S=A+(p^w&(R^p))+T[7]+1735328473&4294967295,A=R+(S<<14&4294967295|S>>>18),S=w+(R^p&(A^R))+T[12]+2368359562&4294967295,w=A+(S<<20&4294967295|S>>>12),S=p+(w^A^R)+T[5]+4294588738&4294967295,p=w+(S<<4&4294967295|S>>>28),S=R+(p^w^A)+T[8]+2272392833&4294967295,R=p+(S<<11&4294967295|S>>>21),S=A+(R^p^w)+T[11]+1839030562&4294967295,A=R+(S<<16&4294967295|S>>>16),S=w+(A^R^p)+T[14]+4259657740&4294967295,w=A+(S<<23&4294967295|S>>>9),S=p+(w^A^R)+T[1]+2763975236&4294967295,p=w+(S<<4&4294967295|S>>>28),S=R+(p^w^A)+T[4]+1272893353&4294967295,R=p+(S<<11&4294967295|S>>>21),S=A+(R^p^w)+T[7]+4139469664&4294967295,A=R+(S<<16&4294967295|S>>>16),S=w+(A^R^p)+T[10]+3200236656&4294967295,w=A+(S<<23&4294967295|S>>>9),S=p+(w^A^R)+T[13]+681279174&4294967295,p=w+(S<<4&4294967295|S>>>28),S=R+(p^w^A)+T[0]+3936430074&4294967295,R=p+(S<<11&4294967295|S>>>21),S=A+(R^p^w)+T[3]+3572445317&4294967295,A=R+(S<<16&4294967295|S>>>16),S=w+(A^R^p)+T[6]+76029189&4294967295,w=A+(S<<23&4294967295|S>>>9),S=p+(w^A^R)+T[9]+3654602809&4294967295,p=w+(S<<4&4294967295|S>>>28),S=R+(p^w^A)+T[12]+3873151461&4294967295,R=p+(S<<11&4294967295|S>>>21),S=A+(R^p^w)+T[15]+530742520&4294967295,A=R+(S<<16&4294967295|S>>>16),S=w+(A^R^p)+T[2]+3299628645&4294967295,w=A+(S<<23&4294967295|S>>>9),S=p+(A^(w|~R))+T[0]+4096336452&4294967295,p=w+(S<<6&4294967295|S>>>26),S=R+(w^(p|~A))+T[7]+1126891415&4294967295,R=p+(S<<10&4294967295|S>>>22),S=A+(p^(R|~w))+T[14]+2878612391&4294967295,A=R+(S<<15&4294967295|S>>>17),S=w+(R^(A|~p))+T[5]+4237533241&4294967295,w=A+(S<<21&4294967295|S>>>11),S=p+(A^(w|~R))+T[12]+1700485571&4294967295,p=w+(S<<6&4294967295|S>>>26),S=R+(w^(p|~A))+T[3]+2399980690&4294967295,R=p+(S<<10&4294967295|S>>>22),S=A+(p^(R|~w))+T[10]+4293915773&4294967295,A=R+(S<<15&4294967295|S>>>17),S=w+(R^(A|~p))+T[1]+2240044497&4294967295,w=A+(S<<21&4294967295|S>>>11),S=p+(A^(w|~R))+T[8]+1873313359&4294967295,p=w+(S<<6&4294967295|S>>>26),S=R+(w^(p|~A))+T[15]+4264355552&4294967295,R=p+(S<<10&4294967295|S>>>22),S=A+(p^(R|~w))+T[6]+2734768916&4294967295,A=R+(S<<15&4294967295|S>>>17),S=w+(R^(A|~p))+T[13]+1309151649&4294967295,w=A+(S<<21&4294967295|S>>>11),S=p+(A^(w|~R))+T[4]+4149444226&4294967295,p=w+(S<<6&4294967295|S>>>26),S=R+(w^(p|~A))+T[11]+3174756917&4294967295,R=p+(S<<10&4294967295|S>>>22),S=A+(p^(R|~w))+T[2]+718787259&4294967295,A=R+(S<<15&4294967295|S>>>17),S=w+(R^(A|~p))+T[9]+3951481745&4294967295,_.g[0]=_.g[0]+p&4294967295,_.g[1]=_.g[1]+(A+(S<<21&4294967295|S>>>11))&4294967295,_.g[2]=_.g[2]+A&4294967295,_.g[3]=_.g[3]+R&4294967295}r.prototype.u=function(_,p){p===void 0&&(p=_.length);for(var w=p-this.blockSize,T=this.B,A=this.h,R=0;R<p;){if(A==0)for(;R<=w;)i(this,_,R),R+=this.blockSize;if(typeof _=="string"){for(;R<p;)if(T[A++]=_.charCodeAt(R++),A==this.blockSize){i(this,T),A=0;break}}else for(;R<p;)if(T[A++]=_[R++],A==this.blockSize){i(this,T),A=0;break}}this.h=A,this.o+=p},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var p=1;p<_.length-8;++p)_[p]=0;var w=8*this.o;for(p=_.length-8;p<_.length;++p)_[p]=w&255,w/=256;for(this.u(_),_=Array(16),p=w=0;4>p;++p)for(var T=0;32>T;T+=8)_[w++]=this.g[p]>>>T&255;return _};function s(_,p){var w=l;return Object.prototype.hasOwnProperty.call(w,_)?w[_]:w[_]=p(_)}function o(_,p){this.h=p;for(var w=[],T=!0,A=_.length-1;0<=A;A--){var R=_[A]|0;T&&R==p||(w[A]=R,T=!1)}this.g=w}var l={};function u(_){return-128<=_&&128>_?s(_,function(p){return new o([p|0],0>p?-1:0)}):new o([_|0],0>_?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return y;if(0>_)return O(h(-_));for(var p=[],w=1,T=0;_>=w;T++)p[T]=_/w|0,w*=4294967296;return new o(p,0)}function f(_,p){if(_.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(_.charAt(0)=="-")return O(f(_.substring(1),p));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(p,8)),T=y,A=0;A<_.length;A+=8){var R=Math.min(8,_.length-A),S=parseInt(_.substring(A,A+R),p);8>R?(R=h(Math.pow(p,R)),T=T.j(R).add(h(S))):(T=T.j(w),T=T.add(h(S)))}return T}var y=u(0),v=u(1),k=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-O(this).m();for(var _=0,p=1,w=0;w<this.g.length;w++){var T=this.i(w);_+=(0<=T?T:4294967296+T)*p,p*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(C(this))return"0";if(N(this))return"-"+O(this).toString(_);for(var p=h(Math.pow(_,6)),w=this,T="";;){var A=b(w,p).g;w=I(w,A.j(p));var R=((0<w.g.length?w.g[0]:w.h)>>>0).toString(_);if(w=A,C(w))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function C(_){if(_.h!=0)return!1;for(var p=0;p<_.g.length;p++)if(_.g[p]!=0)return!1;return!0}function N(_){return _.h==-1}t.l=function(_){return _=I(this,_),N(_)?-1:C(_)?0:1};function O(_){for(var p=_.g.length,w=[],T=0;T<p;T++)w[T]=~_.g[T];return new o(w,~_.h).add(v)}t.abs=function(){return N(this)?O(this):this},t.add=function(_){for(var p=Math.max(this.g.length,_.g.length),w=[],T=0,A=0;A<=p;A++){var R=T+(this.i(A)&65535)+(_.i(A)&65535),S=(R>>>16)+(this.i(A)>>>16)+(_.i(A)>>>16);T=S>>>16,R&=65535,S&=65535,w[A]=S<<16|R}return new o(w,w[w.length-1]&-2147483648?-1:0)};function I(_,p){return _.add(O(p))}t.j=function(_){if(C(this)||C(_))return y;if(N(this))return N(_)?O(this).j(O(_)):O(O(this).j(_));if(N(_))return O(this.j(O(_)));if(0>this.l(k)&&0>_.l(k))return h(this.m()*_.m());for(var p=this.g.length+_.g.length,w=[],T=0;T<2*p;T++)w[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<_.g.length;A++){var R=this.i(T)>>>16,S=this.i(T)&65535,Z=_.i(A)>>>16,se=_.i(A)&65535;w[2*T+2*A]+=S*se,E(w,2*T+2*A),w[2*T+2*A+1]+=R*se,E(w,2*T+2*A+1),w[2*T+2*A+1]+=S*Z,E(w,2*T+2*A+1),w[2*T+2*A+2]+=R*Z,E(w,2*T+2*A+2)}for(T=0;T<p;T++)w[T]=w[2*T+1]<<16|w[2*T];for(T=p;T<2*p;T++)w[T]=0;return new o(w,0)};function E(_,p){for(;(_[p]&65535)!=_[p];)_[p+1]+=_[p]>>>16,_[p]&=65535,p++}function x(_,p){this.g=_,this.h=p}function b(_,p){if(C(p))throw Error("division by zero");if(C(_))return new x(y,y);if(N(_))return p=b(O(_),p),new x(O(p.g),O(p.h));if(N(p))return p=b(_,O(p)),new x(O(p.g),p.h);if(30<_.g.length){if(N(_)||N(p))throw Error("slowDivide_ only works with positive integers.");for(var w=v,T=p;0>=T.l(_);)w=F(w),T=F(T);var A=j(w,1),R=j(T,1);for(T=j(T,2),w=j(w,2);!C(T);){var S=R.add(T);0>=S.l(_)&&(A=A.add(w),R=S),T=j(T,1),w=j(w,1)}return p=I(_,A.j(p)),new x(A,p)}for(A=y;0<=_.l(p);){for(w=Math.max(1,Math.floor(_.m()/p.m())),T=Math.ceil(Math.log(w)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=h(w),S=R.j(p);N(S)||0<S.l(_);)w-=T,R=h(w),S=R.j(p);C(R)&&(R=v),A=A.add(R),_=I(_,S)}return new x(A,_)}t.A=function(_){return b(this,_).h},t.and=function(_){for(var p=Math.max(this.g.length,_.g.length),w=[],T=0;T<p;T++)w[T]=this.i(T)&_.i(T);return new o(w,this.h&_.h)},t.or=function(_){for(var p=Math.max(this.g.length,_.g.length),w=[],T=0;T<p;T++)w[T]=this.i(T)|_.i(T);return new o(w,this.h|_.h)},t.xor=function(_){for(var p=Math.max(this.g.length,_.g.length),w=[],T=0;T<p;T++)w[T]=this.i(T)^_.i(T);return new o(w,this.h^_.h)};function F(_){for(var p=_.g.length+1,w=[],T=0;T<p;T++)w[T]=_.i(T)<<1|_.i(T-1)>>>31;return new o(w,_.h)}function j(_,p){var w=p>>5;p%=32;for(var T=_.g.length-w,A=[],R=0;R<T;R++)A[R]=0<p?_.i(R+w)>>>p|_.i(R+w+1)<<32-p:_.i(R+w);return new o(A,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,G_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,br=o}).apply(typeof og<"u"?og:typeof self<"u"?self:typeof window<"u"?window:{});var ga=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Y_,xs,X_,La,xh,J_,Z_,ew;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ga=="object"&&ga];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in d))break e;d=d[P]}a=a[a.length-1],g=d[a],c=c(g),c!=g&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,g=!1,P={next:function(){if(!g&&d<a.length){var D=d++;return{value:c(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function y(a,c,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),a.apply(c,P)}}return function(){return a.apply(c,arguments)}}function v(a,c,d){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:y,v.apply(null,arguments)}function k(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,P,D){for(var U=Array(arguments.length-2),he=2;he<arguments.length;he++)U[he-2]=arguments[he];return c.prototype[P].apply(g,U)}}function N(a){const c=a.length;if(0<c){const d=Array(c);for(let g=0;g<c;g++)d[g]=a[g];return d}return[]}function O(a,c){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const P=a.length||0,D=g.length||0;a.length=P+D;for(let U=0;U<D;U++)a[P+U]=g[U]}else a.push(g)}}class I{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function E(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function b(a){return b[" "](a),a}b[" "]=function(){};var F=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function j(a,c,d){for(const g in a)c.call(d,a[g],g,a)}function _(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function p(a){const c={};for(const d in a)c[d]=a[d];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,c){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)a[d]=g[d];for(let D=0;D<w.length;D++)d=w[D],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function A(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function R(a){l.setTimeout(()=>{throw a},0)}function S(){var a=K;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Z{constructor(){this.h=this.g=null}add(c,d){const g=se.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var se=new I(()=>new be,a=>a.reset());class be{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ce,B=!1,K=new Z,Y=()=>{const a=l.Promise.resolve(void 0);Ce=()=>{a.then(ve)}};var ve=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(d){R(d)}var c=se;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}B=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var on=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function an(a,c){if(xe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(F){e:{try{b(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ln[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&an.aa.h.call(this)}}C(an,xe);var ln={2:"touch",3:"pen",4:"mouse"};an.prototype.h=function(){an.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var un="closure_listenable_"+(1e6*Math.random()|0),PE=0;function NE(a,c,d,g,P){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=P,this.key=++PE,this.da=this.fa=!1}function Vo(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Lo(a){this.src=a,this.g={},this.h=0}Lo.prototype.add=function(a,c,d,g,P){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var U=mu(a,c,g,P);return-1<U?(c=a[U],d||(c.fa=!1)):(c=new NE(c,this.src,D,!!g,P),c.fa=d,a.push(c)),c};function pu(a,c){var d=c.type;if(d in a.g){var g=a.g[d],P=Array.prototype.indexOf.call(g,c,void 0),D;(D=0<=P)&&Array.prototype.splice.call(g,P,1),D&&(Vo(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function mu(a,c,d,g){for(var P=0;P<a.length;++P){var D=a[P];if(!D.da&&D.listener==c&&D.capture==!!d&&D.ha==g)return P}return-1}var gu="closure_lm_"+(1e6*Math.random()|0),yu={};function zf(a,c,d,g,P){if(Array.isArray(c)){for(var D=0;D<c.length;D++)zf(a,c[D],d,g,P);return null}return d=Wf(d),a&&a[un]?a.K(c,d,h(g)?!!g.capture:!1,P):bE(a,c,d,!1,g,P)}function bE(a,c,d,g,P,D){if(!c)throw Error("Invalid event type");var U=h(P)?!!P.capture:!!P,he=_u(a);if(he||(a[gu]=he=new Lo(a)),d=he.add(c,d,g,U,D),d.proxy)return d;if(g=DE(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)on||(P=U),P===void 0&&(P=!1),a.addEventListener(c.toString(),g,P);else if(a.attachEvent)a.attachEvent(qf(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function DE(){function a(d){return c.call(a.src,a.listener,d)}const c=OE;return a}function $f(a,c,d,g,P){if(Array.isArray(c))for(var D=0;D<c.length;D++)$f(a,c[D],d,g,P);else g=h(g)?!!g.capture:!!g,d=Wf(d),a&&a[un]?(a=a.i,c=String(c).toString(),c in a.g&&(D=a.g[c],d=mu(D,d,g,P),-1<d&&(Vo(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[c],a.h--)))):a&&(a=_u(a))&&(c=a.g[c.toString()],a=-1,c&&(a=mu(c,d,g,P)),(d=-1<a?c[a]:null)&&vu(d))}function vu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[un])pu(c.i,a);else{var d=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(d,g,a.capture):c.detachEvent?c.detachEvent(qf(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=_u(c))?(pu(d,a),d.h==0&&(d.src=null,c[gu]=null)):Vo(a)}}}function qf(a){return a in yu?yu[a]:yu[a]="on"+a}function OE(a,c){if(a.da)a=!0;else{c=new an(c,this);var d=a.listener,g=a.ha||a.src;a.fa&&vu(a),a=d.call(g,c)}return a}function _u(a){return a=a[gu],a instanceof Lo?a:null}var wu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wf(a){return typeof a=="function"?a:(a[wu]||(a[wu]=function(c){return a.handleEvent(c)}),a[wu])}function Ke(){ce.call(this),this.i=new Lo(this),this.M=this,this.F=null}C(Ke,ce),Ke.prototype[un]=!0,Ke.prototype.removeEventListener=function(a,c,d,g){$f(this,a,c,d,g)};function st(a,c){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new xe(c,a);else if(c instanceof xe)c.target=c.target||a;else{var P=c;c=new xe(g,a),T(c,P)}if(P=!0,d)for(var D=d.length-1;0<=D;D--){var U=c.g=d[D];P=Mo(U,g,!0,c)&&P}if(U=c.g=a,P=Mo(U,g,!0,c)&&P,P=Mo(U,g,!1,c)&&P,d)for(D=0;D<d.length;D++)U=c.g=d[D],P=Mo(U,g,!1,c)&&P}Ke.prototype.N=function(){if(Ke.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],g=0;g<d.length;g++)Vo(d[g]);delete a.g[c],a.h--}}this.F=null},Ke.prototype.K=function(a,c,d,g){return this.i.add(String(a),c,!1,d,g)},Ke.prototype.L=function(a,c,d,g){return this.i.add(String(a),c,!0,d,g)};function Mo(a,c,d,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,D=0;D<c.length;++D){var U=c[D];if(U&&!U.da&&U.capture==d){var he=U.listener,Fe=U.ha||U.src;U.fa&&pu(a.i,U),P=he.call(Fe,g)!==!1&&P}}return P&&!g.defaultPrevented}function Hf(a,c,d){if(typeof a=="function")d&&(a=v(a,d));else if(a&&typeof a.handleEvent=="function")a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Kf(a){a.g=Hf(()=>{a.g=null,a.i&&(a.i=!1,Kf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class VE extends ce{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Kf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zi(a){ce.call(this),this.h=a,this.g={}}C(Zi,ce);var Qf=[];function Gf(a){j(a.g,function(c,d){this.g.hasOwnProperty(d)&&vu(c)},a),a.g={}}Zi.prototype.N=function(){Zi.aa.N.call(this),Gf(this)},Zi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Eu=l.JSON.stringify,LE=l.JSON.parse,ME=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Tu(){}Tu.prototype.h=null;function Yf(a){return a.h||(a.h=a.i())}function Xf(){}var es={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Iu(){xe.call(this,"d")}C(Iu,xe);function Su(){xe.call(this,"c")}C(Su,xe);var vr={},Jf=null;function jo(){return Jf=Jf||new Ke}vr.La="serverreachability";function Zf(a){xe.call(this,vr.La,a)}C(Zf,xe);function ts(a){const c=jo();st(c,new Zf(c))}vr.STAT_EVENT="statevent";function ep(a,c){xe.call(this,vr.STAT_EVENT,a),this.stat=c}C(ep,xe);function ot(a){const c=jo();st(c,new ep(c,a))}vr.Ma="timingevent";function tp(a,c){xe.call(this,vr.Ma,a),this.size=c}C(tp,xe);function ns(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function rs(){this.g=!0}rs.prototype.xa=function(){this.g=!1};function jE(a,c,d,g,P,D){a.info(function(){if(a.g)if(D)for(var U="",he=D.split("&"),Fe=0;Fe<he.length;Fe++){var oe=he[Fe].split("=");if(1<oe.length){var Qe=oe[0];oe=oe[1];var Ge=Qe.split("_");U=2<=Ge.length&&Ge[1]=="type"?U+(Qe+"="+oe+"&"):U+(Qe+"=redacted&")}}else U=null;else U=D;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+c+`
`+d+`
`+U})}function FE(a,c,d,g,P,D,U){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+c+`
`+d+`
`+D+" "+U})}function Yr(a,c,d,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+BE(a,d)+(g?" "+g:"")})}function UE(a,c){a.info(function(){return"TIMEOUT: "+c})}rs.prototype.info=function(){};function BE(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var U=1;U<P.length;U++)P[U]=""}}}}return Eu(d)}catch{return c}}var Fo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},np={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xu;function Uo(){}C(Uo,Tu),Uo.prototype.g=function(){return new XMLHttpRequest},Uo.prototype.i=function(){return{}},xu=new Uo;function On(a,c,d,g){this.j=a,this.i=c,this.l=d,this.R=g||1,this.U=new Zi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new rp}function rp(){this.i=null,this.g="",this.h=!1}var ip={},Au={};function ku(a,c,d){a.L=1,a.v=qo(cn(c)),a.m=d,a.P=!0,sp(a,null)}function sp(a,c){a.F=Date.now(),Bo(a),a.A=cn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),_p(d.i,"t",g),a.C=0,d=a.j.J,a.h=new rp,a.g=Mp(a.j,d?c:null,!a.m),0<a.O&&(a.M=new VE(v(a.Y,a,a.g),a.O)),c=a.U,d=a.g,g=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Qf[0]=P.toString()),P=Qf);for(var D=0;D<P.length;D++){var U=zf(d,P[D],g||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=a.H?p(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),ts(),jE(a.i,a.u,a.A,a.l,a.R,a.m)}On.prototype.ca=function(a){a=a.target;const c=this.M;c&&hn(a)==3?c.j():this.Y(a)},On.prototype.Y=function(a){try{if(a==this.g)e:{const Ge=hn(this.g);var c=this.g.Ba();const Zr=this.g.Z();if(!(3>Ge)&&(Ge!=3||this.g&&(this.h.h||this.g.oa()||Ap(this.g)))){this.J||Ge!=4||c==7||(c==8||0>=Zr?ts(3):ts(2)),Cu(this);var d=this.g.Z();this.X=d;t:if(op(this)){var g=Ap(this.g);a="";var P=g.length,D=hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_r(this),is(this);var U="";break t}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,a+=this.h.i.decode(g[c],{stream:!(D&&c==P-1)});g.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=d==200,FE(this.i,this.u,this.A,this.l,this.R,Ge,d),this.o){if(this.T&&!this.K){t:{if(this.g){var he,Fe=this.g;if((he=Fe.g?Fe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(he)){var oe=he;break t}}oe=null}if(d=oe)Yr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ru(this,d);else{this.o=!1,this.s=3,ot(12),_r(this),is(this);break e}}if(this.P){d=!0;let Dt;for(;!this.J&&this.C<U.length;)if(Dt=zE(this,U),Dt==Au){Ge==4&&(this.s=4,ot(14),d=!1),Yr(this.i,this.l,null,"[Incomplete Response]");break}else if(Dt==ip){this.s=4,ot(15),Yr(this.i,this.l,U,"[Invalid Chunk]"),d=!1;break}else Yr(this.i,this.l,Dt,null),Ru(this,Dt);if(op(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ge!=4||U.length!=0||this.h.h||(this.s=1,ot(16),d=!1),this.o=this.o&&d,!d)Yr(this.i,this.l,U,"[Invalid Chunked Response]"),_r(this),is(this);else if(0<U.length&&!this.W){this.W=!0;var Qe=this.j;Qe.g==this&&Qe.ba&&!Qe.M&&(Qe.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),Vu(Qe),Qe.M=!0,ot(11))}}else Yr(this.i,this.l,U,null),Ru(this,U);Ge==4&&_r(this),this.o&&!this.J&&(Ge==4?Dp(this.j,this):(this.o=!1,Bo(this)))}else sT(this.g),d==400&&0<U.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),_r(this),is(this)}}}catch{}finally{}};function op(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function zE(a,c){var d=a.C,g=c.indexOf(`
`,d);return g==-1?Au:(d=Number(c.substring(d,g)),isNaN(d)?ip:(g+=1,g+d>c.length?Au:(c=c.slice(g,g+d),a.C=g+d,c)))}On.prototype.cancel=function(){this.J=!0,_r(this)};function Bo(a){a.S=Date.now()+a.I,ap(a,a.I)}function ap(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ns(v(a.ba,a),c)}function Cu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}On.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(UE(this.i,this.A),this.L!=2&&(ts(),ot(17)),_r(this),this.s=2,is(this)):ap(this,this.S-a)};function is(a){a.j.G==0||a.J||Dp(a.j,a)}function _r(a){Cu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Gf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Ru(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Pu(d.h,a))){if(!a.K&&Pu(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Yo(d),Qo(d);else break e;Ou(d),ot(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=ns(v(d.Za,d),6e3));if(1>=cp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Er(d,11)}else if((a.K||d.g==a)&&Yo(d),!E(c))for(P=d.Da.g.parse(c),c=0;c<P.length;c++){let oe=P[c];if(d.T=oe[0],oe=oe[1],d.G==2)if(oe[0]=="c"){d.K=oe[1],d.ia=oe[2];const Qe=oe[3];Qe!=null&&(d.la=Qe,d.j.info("VER="+d.la));const Ge=oe[4];Ge!=null&&(d.Aa=Ge,d.j.info("SVER="+d.Aa));const Zr=oe[5];Zr!=null&&typeof Zr=="number"&&0<Zr&&(g=1.5*Zr,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Dt=a.g;if(Dt){const Jo=Dt.g?Dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jo){var D=g.h;D.g||Jo.indexOf("spdy")==-1&&Jo.indexOf("quic")==-1&&Jo.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Nu(D,D.h),D.h=null))}if(g.D){const Lu=Dt.g?Dt.g.getResponseHeader("X-HTTP-Session-Id"):null;Lu&&(g.ya=Lu,fe(g.I,g.D,Lu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var U=a;if(g.qa=Lp(g,g.J?g.ia:null,g.W),U.K){hp(g.h,U);var he=U,Fe=g.L;Fe&&(he.I=Fe),he.B&&(Cu(he),Bo(he)),g.g=U}else Np(g);0<d.i.length&&Go(d)}else oe[0]!="stop"&&oe[0]!="close"||Er(d,7);else d.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?Er(d,7):Du(d):oe[0]!="noop"&&d.l&&d.l.ta(oe),d.v=0)}}ts(4)}catch{}}var $E=class{constructor(a,c){this.g=a,this.map=c}};function lp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function up(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function cp(a){return a.h?1:a.g?a.g.size:0}function Pu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Nu(a,c){a.g?a.g.add(c):a.h=c}function hp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}lp.prototype.cancel=function(){if(this.i=dp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function dp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return N(a.i)}function qE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,g=0;g<d;g++)c.push(a[g]);return c}c=[],d=0;for(g in a)c[d++]=a[g];return c}function WE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const g in a)c[d++]=g;return c}}}function fp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=WE(a),g=qE(a),P=g.length,D=0;D<P;D++)c.call(void 0,g[D],d&&d[D],a)}var pp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function HE(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),P=null;if(0<=g){var D=a[d].substring(0,g);P=a[d].substring(g+1)}else D=a[d];c(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function wr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof wr){this.h=a.h,zo(this,a.j),this.o=a.o,this.g=a.g,$o(this,a.s),this.l=a.l;var c=a.i,d=new as;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),mp(this,d),this.m=a.m}else a&&(c=String(a).match(pp))?(this.h=!1,zo(this,c[1]||"",!0),this.o=ss(c[2]||""),this.g=ss(c[3]||"",!0),$o(this,c[4]),this.l=ss(c[5]||"",!0),mp(this,c[6]||"",!0),this.m=ss(c[7]||"")):(this.h=!1,this.i=new as(null,this.h))}wr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(os(c,gp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(os(c,gp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(os(d,d.charAt(0)=="/"?GE:QE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",os(d,XE)),a.join("")};function cn(a){return new wr(a)}function zo(a,c,d){a.j=d?ss(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function $o(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function mp(a,c,d){c instanceof as?(a.i=c,JE(a.i,a.h)):(d||(c=os(c,YE)),a.i=new as(c,a.h))}function fe(a,c,d){a.i.set(c,d)}function qo(a){return fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ss(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function os(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,KE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function KE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var gp=/[#\/\?@]/g,QE=/[#\?:]/g,GE=/[#\?]/g,YE=/[#\?@]/g,XE=/#/g;function as(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Vn(a){a.g||(a.g=new Map,a.h=0,a.i&&HE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=as.prototype,t.add=function(a,c){Vn(this),this.i=null,a=Xr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function yp(a,c){Vn(a),c=Xr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function vp(a,c){return Vn(a),c=Xr(a,c),a.g.has(c)}t.forEach=function(a,c){Vn(this),this.g.forEach(function(d,g){d.forEach(function(P){a.call(c,P,g,this)},this)},this)},t.na=function(){Vn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let g=0;g<c.length;g++){const P=a[g];for(let D=0;D<P.length;D++)d.push(c[g])}return d},t.V=function(a){Vn(this);let c=[];if(typeof a=="string")vp(this,a)&&(c=c.concat(this.g.get(Xr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Vn(this),this.i=null,a=Xr(this,a),vp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function _p(a,c,d){yp(a,c),0<d.length&&(a.i=null,a.g.set(Xr(a,c),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var g=c[d];const D=encodeURIComponent(String(g)),U=this.V(g);for(g=0;g<U.length;g++){var P=D;U[g]!==""&&(P+="="+encodeURIComponent(String(U[g]))),a.push(P)}}return this.i=a.join("&")};function Xr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function JE(a,c){c&&!a.j&&(Vn(a),a.i=null,a.g.forEach(function(d,g){var P=g.toLowerCase();g!=P&&(yp(this,g),_p(this,P,d))},a)),a.j=c}function ZE(a,c){const d=new rs;if(l.Image){const g=new Image;g.onload=k(Ln,d,"TestLoadImage: loaded",!0,c,g),g.onerror=k(Ln,d,"TestLoadImage: error",!1,c,g),g.onabort=k(Ln,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=k(Ln,d,"TestLoadImage: timeout",!1,c,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function eT(a,c){const d=new rs,g=new AbortController,P=setTimeout(()=>{g.abort(),Ln(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(P),D.ok?Ln(d,"TestPingServer: ok",!0,c):Ln(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),Ln(d,"TestPingServer: error",!1,c)})}function Ln(a,c,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function tT(){this.g=new ME}function nT(a,c,d){const g=d||"";try{fp(a,function(P,D){let U=P;h(P)&&(U=Eu(P)),c.push(g+D+"="+encodeURIComponent(U))})}catch(P){throw c.push(g+"type="+encodeURIComponent("_badmap")),P}}function Wo(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Wo,Tu),Wo.prototype.g=function(){return new Ho(this.l,this.j)},Wo.prototype.i=function(a){return function(){return a}}({});function Ho(a,c){Ke.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Ho,Ke),t=Ho.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,us(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ls(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,us(this)),this.g&&(this.readyState=3,us(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function wp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ls(this):us(this),this.readyState==3&&wp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ls(this))},t.Qa=function(a){this.g&&(this.response=a,ls(this))},t.ga=function(){this.g&&ls(this)};function ls(a){a.readyState=4,a.l=null,a.j=null,a.v=null,us(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function us(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ho.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ep(a){let c="";return j(a,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function bu(a,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Ep(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):fe(a,c,d))}function Ie(a){Ke.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ie,Ke);var rT=/^https?$/i,iT=["POST","PUT"];t=Ie.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xu.g(),this.v=this.o?Yf(this.o):Yf(xu),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){Tp(this,D);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())d.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(iT,c,void 0))||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,U]of d)this.g.setRequestHeader(D,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xp(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Tp(this,D)}};function Tp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Ip(a),Ko(a)}function Ip(a){a.A||(a.A=!0,st(a,"complete"),st(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,st(this,"complete"),st(this,"abort"),Ko(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ko(this,!0)),Ie.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Sp(this):this.bb())},t.bb=function(){Sp(this)};function Sp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||hn(a)!=4||a.Z()!=2)){if(a.u&&hn(a)==4)Hf(a.Ea,0,a);else if(st(a,"readystatechange"),hn(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=U===0){var P=String(a.D).match(pp)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),g=!rT.test(P?P.toLowerCase():"")}d=g}if(d)st(a,"complete"),st(a,"success");else{a.m=6;try{var D=2<hn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Ip(a)}}finally{Ko(a)}}}}function Ko(a,c){if(a.g){xp(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||st(a,"ready");try{d.onreadystatechange=g}catch{}}}function xp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function hn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<hn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),LE(c)}};function Ap(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function sT(a){const c={};a=(a.g&&2<=hn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(E(a[g]))continue;var d=A(a[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=c[P]||[];c[P]=D,D.push(d)}_(c,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function cs(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function kp(a){this.Aa=0,this.i=[],this.j=new rs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=cs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=cs("baseRetryDelayMs",5e3,a),this.cb=cs("retryDelaySeedMs",1e4,a),this.Wa=cs("forwardChannelMaxRetries",2,a),this.wa=cs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new lp(a&&a.concurrentRequestLimit),this.Da=new tT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=kp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,g){ot(0),this.W=a,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Lp(this,null,this.W),Go(this)};function Du(a){if(Cp(a),a.G==3){var c=a.U++,d=cn(a.I);if(fe(d,"SID",a.K),fe(d,"RID",c),fe(d,"TYPE","terminate"),hs(a,d),c=new On(a,a.j,c),c.L=2,c.v=qo(cn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Mp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Bo(c)}Vp(a)}function Qo(a){a.g&&(Vu(a),a.g.cancel(),a.g=null)}function Cp(a){Qo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Yo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Go(a){if(!up(a.h)&&!a.s){a.s=!0;var c=a.Ga;Ce||Y(),B||(Ce(),B=!0),K.add(c,a),a.B=0}}function oT(a,c){return cp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ns(v(a.Ga,a,c),Op(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new On(this,this.j,a);let D=this.o;if(this.S&&(D?(D=p(D),T(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Pp(this,P,c),d=cn(this.I),fe(d,"RID",a),fe(d,"CVER",22),this.D&&fe(d,"X-HTTP-Session-Id",this.D),hs(this,d),D&&(this.O?c="headers="+encodeURIComponent(String(Ep(D)))+"&"+c:this.m&&bu(d,this.m,D)),Nu(this.h,P),this.Ua&&fe(d,"TYPE","init"),this.P?(fe(d,"$req",c),fe(d,"SID","null"),P.T=!0,ku(P,d,null)):ku(P,d,c),this.G=2}}else this.G==3&&(a?Rp(this,a):this.i.length==0||up(this.h)||Rp(this))};function Rp(a,c){var d;c?d=c.l:d=a.U++;const g=cn(a.I);fe(g,"SID",a.K),fe(g,"RID",d),fe(g,"AID",a.T),hs(a,g),a.m&&a.o&&bu(g,a.m,a.o),d=new On(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Pp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Nu(a.h,d),ku(d,g,c)}function hs(a,c){a.H&&j(a.H,function(d,g){fe(c,g,d)}),a.l&&fp({},function(d,g){fe(c,g,d)})}function Pp(a,c,d){d=Math.min(a.i.length,d);var g=a.l?v(a.l.Na,a.l,a):null;e:{var P=a.i;let D=-1;for(;;){const U=["count="+d];D==-1?0<d?(D=P[0].g,U.push("ofs="+D)):D=0:U.push("ofs="+D);let he=!0;for(let Fe=0;Fe<d;Fe++){let oe=P[Fe].g;const Qe=P[Fe].map;if(oe-=D,0>oe)D=Math.max(0,P[Fe].g-100),he=!1;else try{nT(Qe,U,"req"+oe+"_")}catch{g&&g(Qe)}}if(he){g=U.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,g}function Np(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Ce||Y(),B||(Ce(),B=!0),K.add(c,a),a.v=0}}function Ou(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ns(v(a.Fa,a),Op(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,bp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ns(v(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),Qo(this),bp(this))};function Vu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function bp(a){a.g=new On(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=cn(a.qa);fe(c,"RID","rpc"),fe(c,"SID",a.K),fe(c,"AID",a.T),fe(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&fe(c,"TO",a.ja),fe(c,"TYPE","xmlhttp"),hs(a,c),a.m&&a.o&&bu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=qo(cn(c)),d.m=null,d.P=!0,sp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Qo(this),Ou(this),ot(19))};function Yo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Dp(a,c){var d=null;if(a.g==c){Yo(a),Vu(a),a.g=null;var g=2}else if(Pu(a.h,c))d=c.D,hp(a.h,c),g=1;else return;if(a.G!=0){if(c.o)if(g==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var P=a.B;g=jo(),st(g,new tp(g,d)),Go(a)}else Np(a);else if(P=c.s,P==3||P==0&&0<c.X||!(g==1&&oT(a,c)||g==2&&Ou(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),P){case 1:Er(a,5);break;case 4:Er(a,10);break;case 3:Er(a,6);break;default:Er(a,2)}}}function Op(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function Er(a,c){if(a.j.info("Error code "+c),c==2){var d=v(a.fb,a),g=a.Xa;const P=!g;g=new wr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||zo(g,"https"),qo(g),P?ZE(g.toString(),d):eT(g.toString(),d)}else ot(2);a.G=0,a.l&&a.l.sa(c),Vp(a),Cp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Vp(a){if(a.G=0,a.ka=[],a.l){const c=dp(a.h);(c.length!=0||a.i.length!=0)&&(O(a.ka,c),O(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Lp(a,c,d){var g=d instanceof wr?cn(d):new wr(d);if(g.g!="")c&&(g.g=c+"."+g.g),$o(g,g.s);else{var P=l.location;g=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var D=new wr(null);g&&zo(D,g),c&&(D.g=c),P&&$o(D,P),d&&(D.l=d),g=D}return d=a.D,c=a.ya,d&&c&&fe(g,d,c),fe(g,"VER",a.la),hs(a,g),g}function Mp(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Ie(new Wo({eb:d})):new Ie(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function jp(){}t=jp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Xo(){}Xo.prototype.g=function(a,c){return new vt(a,c)};function vt(a,c){Ke.call(this),this.g=new kp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!E(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Jr(this)}C(vt,Ke),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){Du(this.g)},vt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Eu(a),a=d);c.i.push(new $E(c.Ya++,a)),c.G==3&&Go(c)},vt.prototype.N=function(){this.g.l=null,delete this.j,Du(this.g),delete this.g,vt.aa.N.call(this)};function Fp(a){Iu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}C(Fp,Iu);function Up(){Su.call(this),this.status=1}C(Up,Su);function Jr(a){this.g=a}C(Jr,jp),Jr.prototype.ua=function(){st(this.g,"a")},Jr.prototype.ta=function(a){st(this.g,new Fp(a))},Jr.prototype.sa=function(a){st(this.g,new Up)},Jr.prototype.ra=function(){st(this.g,"b")},Xo.prototype.createWebChannel=Xo.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,ew=function(){return new Xo},Z_=function(){return jo()},J_=vr,xh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fo.NO_ERROR=0,Fo.TIMEOUT=8,Fo.HTTP_ERROR=6,La=Fo,np.COMPLETE="complete",X_=np,Xf.EventType=es,es.OPEN="a",es.CLOSE="b",es.ERROR="c",es.MESSAGE="d",Ke.prototype.listen=Ke.prototype.K,xs=Xf,Ie.prototype.listenOnce=Ie.prototype.L,Ie.prototype.getLastError=Ie.prototype.Ka,Ie.prototype.getLastErrorCode=Ie.prototype.Ba,Ie.prototype.getStatus=Ie.prototype.Z,Ie.prototype.getResponseJson=Ie.prototype.Oa,Ie.prototype.getResponseText=Ie.prototype.oa,Ie.prototype.send=Ie.prototype.ea,Ie.prototype.setWithCredentials=Ie.prototype.Ha,Y_=Ie}).apply(typeof ga<"u"?ga:typeof self<"u"?self:typeof window<"u"?window:{});const ag="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ki="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new Ud("@firebase/firestore");function ws(){return jr.logLevel}function q(t,...e){if(jr.logLevel<=ne.DEBUG){const n=e.map($d);jr.debug(`Firestore (${Ki}): ${t}`,...n)}}function Rn(t,...e){if(jr.logLevel<=ne.ERROR){const n=e.map($d);jr.error(`Firestore (${Ki}): ${t}`,...n)}}function Oi(t,...e){if(jr.logLevel<=ne.WARN){const n=e.map($d);jr.warn(`Firestore (${Ki}): ${t}`,...n)}}function $d(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Ki}) INTERNAL ASSERTION FAILED: `+t;throw Rn(e),new Error(e)}function ue(t,e){t||G()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class yA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class vA{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ue(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new sr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new sr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new sr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string"),new tw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string"),new Ze(e)}}class _A{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new _A(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class EA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ue(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string"),this.R=n.token,new EA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=IA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function Vi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Ve(0,0))}static max(){return new X(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ao.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ao?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends ao{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new me(n)}static emptyPath(){return new me([])}}const SA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends ao{construct(e,n,r){return new ze(e,n,r)}static isValidIdentifier(e){return SA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new $(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new $(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(me.fromString(e))}static fromName(e){return new W(me.fromString(e).popFirst(5))}static empty(){return new W(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new me(e.slice()))}}function xA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new hr(i,W.empty(),e)}function AA(t){return new hr(t.readTime,t.key,-1)}class hr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new hr(X.min(),W.empty(),-1)}static max(){return new hr(X.max(),W.empty(),-1)}}function kA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class RA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==CA)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function PA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ko(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}qd.oe=-1;function Yl(t){return t==null}function vl(t){return t===0&&1/t==-1/0}function NA(t){return typeof t=="number"&&Number.isInteger(t)&&!vl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function rw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ya(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ya(this.root,e,this.comparator,!1)}getReverseIterator(){return new ya(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ya(this.root,e,this.comparator,!0)}}class ya{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Be.RED,this.left=i??Be.EMPTY,this.right=s??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Be.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ug(this.data.getIterator())}getIteratorFrom(e){return new ug(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class ug{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new jt([])}unionWith(e){let n=new qe(ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Vi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new iw("Invalid base64 string: "+s):s}}(e);return new He(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new He(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const bA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function dr(t){if(ue(!!t),typeof t=="string"){let e=0;const n=bA.exec(t);if(ue(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fr(t){return typeof t=="string"?He.fromBase64String(t):He.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Hd(t){const e=t.mapValue.fields.__previous_value__;return Wd(e)?Hd(e):e}function lo(t){const e=dr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class uo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new uo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof uo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va={mapValue:{}};function Ur(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wd(t)?4:VA(t)?9007199254740991:OA(t)?10:11:G()}function rn(t,e){if(t===e)return!0;const n=Ur(t);if(n!==Ur(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return lo(t).isEqual(lo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=dr(i.timestampValue),l=dr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Fr(i.bytesValue).isEqual(Fr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ae(i.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(i.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ae(i.integerValue)===Ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ae(i.doubleValue),l=Ae(s.doubleValue);return o===l?vl(o)===vl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Vi(t.arrayValue.values||[],e.arrayValue.values||[],rn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(lg(o)!==lg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!rn(o[u],l[u])))return!1;return!0}(t,e);default:return G()}}function co(t,e){return(t.values||[]).find(n=>rn(n,e))!==void 0}function Li(t,e){if(t===e)return 0;const n=Ur(t),r=Ur(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ae(s.integerValue||s.doubleValue),u=Ae(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return cg(t.timestampValue,e.timestampValue);case 4:return cg(lo(t),lo(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Fr(s),u=Fr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ae(l[h],u[h]);if(f!==0)return f}return ae(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ae(Ae(s.latitude),Ae(o.latitude));return l!==0?l:ae(Ae(s.longitude),Ae(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return hg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const y=s.fields||{},v=o.fields||{},k=(l=y.value)===null||l===void 0?void 0:l.arrayValue,C=(u=v.value)===null||u===void 0?void 0:u.arrayValue,N=ae(((h=k==null?void 0:k.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:hg(k,C)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===va.mapValue&&o===va.mapValue)return 0;if(s===va.mapValue)return 1;if(o===va.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let y=0;y<u.length&&y<f.length;++y){const v=ae(u[y],f[y]);if(v!==0)return v;const k=Li(l[u[y]],h[f[y]]);if(k!==0)return k}return ae(u.length,f.length)}(t.mapValue,e.mapValue);default:throw G()}}function cg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=dr(t),r=dr(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function hg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Li(n[i],r[i]);if(s)return s}return ae(n.length,r.length)}function Mi(t){return Ah(t)}function Ah(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=dr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Fr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ah(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ah(n.fields[o])}`;return i+"}"}(t.mapValue):G()}function dg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function kh(t){return!!t&&"integerValue"in t}function Kd(t){return!!t&&"arrayValue"in t}function fg(t){return!!t&&"nullValue"in t}function pg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ma(t){return!!t&&"mapValue"in t}function OA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function js(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=js(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=js(t.arrayValue.values[n]);return e}return Object.assign({},t)}function VA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ma(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=js(n)}setAll(e){let n=ze.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=js(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ma(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ma(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Qi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new kt(js(this.value))}}function sw(t){const e=[];return Qi(t.fields,(n,r)=>{const i=new ze([n]);if(Ma(r)){const s=sw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new tt(e,0,X.min(),X.min(),X.min(),kt.empty(),0)}static newFoundDocument(e,n,r,i){return new tt(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new tt(e,2,n,X.min(),X.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,X.min(),X.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,n){this.position=e,this.inclusive=n}}function mg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=Li(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function gg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!rn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n="asc"){this.field=e,this.dir=n}}function LA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{}class Ne extends ow{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new jA(e,n,r):n==="array-contains"?new BA(e,r):n==="in"?new zA(e,r):n==="not-in"?new $A(e,r):n==="array-contains-any"?new qA(e,r):new Ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new FA(e,r):new UA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Li(n,this.value)):n!==null&&Ur(this.value)===Ur(n)&&this.matchesComparison(Li(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $t extends ow{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new $t(e,n)}matches(e){return aw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function aw(t){return t.op==="and"}function lw(t){return MA(t)&&aw(t)}function MA(t){for(const e of t.filters)if(e instanceof $t)return!1;return!0}function Ch(t){if(t instanceof Ne)return t.field.canonicalString()+t.op.toString()+Mi(t.value);if(lw(t))return t.filters.map(e=>Ch(e)).join(",");{const e=t.filters.map(n=>Ch(n)).join(",");return`${t.op}(${e})`}}function uw(t,e){return t instanceof Ne?function(r,i){return i instanceof Ne&&r.op===i.op&&r.field.isEqual(i.field)&&rn(r.value,i.value)}(t,e):t instanceof $t?function(r,i){return i instanceof $t&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&uw(o,i.filters[l]),!0):!1}(t,e):void G()}function cw(t){return t instanceof Ne?function(n){return`${n.field.canonicalString()} ${n.op} ${Mi(n.value)}`}(t):t instanceof $t?function(n){return n.op.toString()+" {"+n.getFilters().map(cw).join(" ,")+"}"}(t):"Filter"}class jA extends Ne{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class FA extends Ne{constructor(e,n){super(e,"in",n),this.keys=hw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class UA extends Ne{constructor(e,n){super(e,"not-in",n),this.keys=hw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function hw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class BA extends Ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Kd(n)&&co(n.arrayValue,this.value)}}class zA extends Ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&co(this.value.arrayValue,n)}}class $A extends Ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(co(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!co(this.value.arrayValue,n)}}class qA extends Ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Kd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>co(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function yg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new WA(t,e,n,r,i,s,o)}function Qd(t){const e=J(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ch(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Yl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Mi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Mi(r)).join(",")),e.ue=n}return e.ue}function Gd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!LA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!uw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!gg(t.startAt,e.startAt)&&gg(t.endAt,e.endAt)}function Rh(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function HA(t,e,n,r,i,s,o,l){return new Gi(t,e,n,r,i,s,o,l)}function Xl(t){return new Gi(t)}function vg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function dw(t){return t.collectionGroup!==null}function Fs(t){const e=J(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new qe(ze.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ho(s,r))}),n.has(ze.keyField().canonicalString())||e.ce.push(new ho(ze.keyField(),r))}return e.ce}function Xt(t){const e=J(t);return e.le||(e.le=KA(e,Fs(t))),e.le}function KA(t,e){if(t.limitType==="F")return yg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ho(i.field,s)});const n=t.endAt?new _l(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new _l(t.startAt.position,t.startAt.inclusive):null;return yg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ph(t,e){const n=t.filters.concat([e]);return new Gi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Nh(t,e,n){return new Gi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Jl(t,e){return Gd(Xt(t),Xt(e))&&t.limitType===e.limitType}function fw(t){return`${Qd(Xt(t))}|lt:${t.limitType}`}function ti(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>cw(i)).join(", ")}]`),Yl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Mi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Mi(i)).join(",")),`Target(${r})`}(Xt(t))}; limitType=${t.limitType})`}function Zl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Fs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=mg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Fs(r),i)||r.endAt&&!function(o,l,u){const h=mg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Fs(r),i))}(t,e)}function QA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function pw(t){return(e,n)=>{let r=!1;for(const i of Fs(t)){const s=GA(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function GA(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Li(u,h):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Qi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return rw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=new Te(W.comparator);function Pn(){return YA}const mw=new Te(W.comparator);function As(...t){let e=mw;for(const n of t)e=e.insert(n.key,n);return e}function gw(t){let e=mw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Cr(){return Us()}function yw(){return Us()}function Us(){return new Yi(t=>t.toString(),(t,e)=>t.isEqual(e))}const XA=new Te(W.comparator),JA=new qe(W.comparator);function te(...t){let e=JA;for(const n of t)e=e.add(n);return e}const ZA=new qe(ae);function ek(){return ZA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vl(e)?"-0":e}}function vw(t){return{integerValue:""+t}}function tk(t,e){return NA(e)?vw(e):Yd(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(){this._=void 0}}function nk(t,e,n){return t instanceof fo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Wd(s)&&(s=Hd(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof po?ww(t,e):t instanceof mo?Ew(t,e):function(i,s){const o=_w(i,s),l=_g(o)+_g(i.Pe);return kh(o)&&kh(i.Pe)?vw(l):Yd(i.serializer,l)}(t,e)}function rk(t,e,n){return t instanceof po?ww(t,e):t instanceof mo?Ew(t,e):n}function _w(t,e){return t instanceof wl?function(r){return kh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class fo extends eu{}class po extends eu{constructor(e){super(),this.elements=e}}function ww(t,e){const n=Tw(e);for(const r of t.elements)n.some(i=>rn(i,r))||n.push(r);return{arrayValue:{values:n}}}class mo extends eu{constructor(e){super(),this.elements=e}}function Ew(t,e){let n=Tw(e);for(const r of t.elements)n=n.filter(i=>!rn(i,r));return{arrayValue:{values:n}}}class wl extends eu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function _g(t){return Ae(t.integerValue||t.doubleValue)}function Tw(t){return Kd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e,n){this.field=e,this.transform=n}}function sk(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof po&&i instanceof po||r instanceof mo&&i instanceof mo?Vi(r.elements,i.elements,rn):r instanceof wl&&i instanceof wl?rn(r.Pe,i.Pe):r instanceof fo&&i instanceof fo}(t.transform,e.transform)}class ok{constructor(e,n){this.version=e,this.transformResults=n}}class Jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Jt}static exists(e){return new Jt(void 0,e)}static updateTime(e){return new Jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ja(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class tu{}function Iw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Xd(t.key,Jt.none()):new Co(t.key,t.data,Jt.none());{const n=t.data,r=kt.empty();let i=new qe(ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Kr(t.key,r,new jt(i.toArray()),Jt.none())}}function ak(t,e,n){t instanceof Co?function(i,s,o){const l=i.value.clone(),u=Eg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Kr?function(i,s,o){if(!ja(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Eg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Sw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Bs(t,e,n,r){return t instanceof Co?function(s,o,l,u){if(!ja(s.precondition,o))return l;const h=s.value.clone(),f=Tg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Kr?function(s,o,l,u){if(!ja(s.precondition,o))return l;const h=Tg(s.fieldTransforms,u,o),f=o.data;return f.setAll(Sw(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(y=>y.field))}(t,e,n,r):function(s,o,l){return ja(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function lk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=_w(r.transform,i||null);s!=null&&(n===null&&(n=kt.empty()),n.set(r.field,s))}return n||null}function wg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Vi(r,i,(s,o)=>sk(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Co extends tu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Kr extends tu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Sw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Eg(t,e,n){const r=new Map;ue(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,rk(o,l,n[i]))}return r}function Tg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,nk(s,o,e))}return r}class Xd extends tu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uk extends tu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ak(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=yw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=Iw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Vi(this.mutations,e.mutations,(n,r)=>wg(n,r))&&Vi(this.baseMutations,e.baseMutations,(n,r)=>wg(n,r))}}class Jd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ue(e.mutations.length===r.length);let i=function(){return XA}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Jd(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,re;function fk(t){switch(t){default:return G();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function xw(t){if(t===void 0)return Rn("GRPC error has no .code"),V.UNKNOWN;switch(t){case Re.OK:return V.OK;case Re.CANCELLED:return V.CANCELLED;case Re.UNKNOWN:return V.UNKNOWN;case Re.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Re.INTERNAL:return V.INTERNAL;case Re.UNAVAILABLE:return V.UNAVAILABLE;case Re.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Re.NOT_FOUND:return V.NOT_FOUND;case Re.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Re.ABORTED:return V.ABORTED;case Re.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Re.DATA_LOSS:return V.DATA_LOSS;default:return G()}}(re=Re||(Re={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=new br([4294967295,4294967295],0);function Ig(t){const e=pk().encode(t),n=new G_;return n.update(e),new Uint8Array(n.digest())}function Sg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new br([n,r],0),new br([i,s],0)]}class Zd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ks(`Invalid padding: ${n}`);if(r<0)throw new ks(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ks(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ks(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=br.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(br.fromNumber(r)));return i.compare(mk)===1&&(i=new br([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Ig(e),[r,i]=Sg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Zd(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Ig(e),[r,i]=Sg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ks extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ro.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new nu(X.min(),i,new Te(ae),Pn(),te())}}class Ro{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ro(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Aw{constructor(e,n){this.targetId=e,this.me=n}}class kw{constructor(e,n,r=He.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class xg{constructor(){this.fe=0,this.ge=kg(),this.pe=He.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),n=te(),r=te();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new Ro(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=kg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class gk{constructor(e){this.Le=e,this.Be=new Map,this.ke=Pn(),this.qe=Ag(),this.Qe=new Te(ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Rh(s))if(r===0){const o=new W(s.path);this.Ue(n,o,tt.newNoDocument(o,X.min()))}else ue(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Fr(r).toUint8Array()}catch(u){if(u instanceof iw)return Oi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Zd(o,i,s)}catch(u){return Oi(u instanceof ks?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Rh(l.target)){const u=new W(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,tt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=te();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new nu(e,n,this.Qe,this.ke,r);return this.ke=Pn(),this.qe=Ag(),this.Qe=new Te(ae),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new xg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new qe(ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new xg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Ag(){return new Te(W.comparator)}function kg(){return new Te(W.comparator)}const yk={asc:"ASCENDING",desc:"DESCENDING"},vk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_k={and:"AND",or:"OR"};class wk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bh(t,e){return t.useProto3Json||Yl(e)?e:{value:e}}function El(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Cw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ek(t,e){return El(t,e.toTimestamp())}function Zt(t){return ue(!!t),X.fromTimestamp(function(n){const r=dr(n);return new Ve(r.seconds,r.nanos)}(t))}function ef(t,e){return Dh(t,e).canonicalString()}function Dh(t,e){const n=function(i){return new me(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Rw(t){const e=me.fromString(t);return ue(Ow(e)),e}function Oh(t,e){return ef(t.databaseId,e.path)}function mc(t,e){const n=Rw(e);if(n.get(1)!==t.databaseId.projectId)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(Nw(n))}function Pw(t,e){return ef(t.databaseId,e)}function Tk(t){const e=Rw(t);return e.length===4?me.emptyPath():Nw(e)}function Vh(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Nw(t){return ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Cg(t,e,n){return{name:Oh(t,e),fields:n.value.mapValue.fields}}function Ik(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ue(f===void 0||typeof f=="string"),He.fromBase64String(f||"")):(ue(f===void 0||f instanceof Buffer||f instanceof Uint8Array),He.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?V.UNKNOWN:xw(h.code);return new $(f,h.message||"")}(o);n=new kw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=mc(t,r.document.name),s=Zt(r.document.updateTime),o=r.document.createTime?Zt(r.document.createTime):X.min(),l=new kt({mapValue:{fields:r.document.fields}}),u=tt.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Fa(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=mc(t,r.document),s=r.readTime?Zt(r.readTime):X.min(),o=tt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Fa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=mc(t,r.document),s=r.removedTargetIds||[];n=new Fa([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new dk(i,s),l=r.targetId;n=new Aw(l,o)}}return n}function Sk(t,e){let n;if(e instanceof Co)n={update:Cg(t,e.key,e.value)};else if(e instanceof Xd)n={delete:Oh(t,e.key)};else if(e instanceof Kr)n={update:Cg(t,e.key,e.data),updateMask:Dk(e.fieldMask)};else{if(!(e instanceof uk))return G();n={verify:Oh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof fo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof po)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof mo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof wl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Ek(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function xk(t,e){return t&&t.length>0?(ue(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Zt(i.updateTime):Zt(s);return o.isEqual(X.min())&&(o=Zt(s)),new ok(o,i.transformResults||[])}(n,e))):[]}function Ak(t,e){return{documents:[Pw(t,e.path)]}}function kk(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Pw(t,i);const s=function(h){if(h.length!==0)return Dw($t.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(v){return{field:ni(v.field),direction:Pk(v.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=bh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function Ck(t){let e=Tk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ue(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(y){const v=bw(y);return v instanceof $t&&lw(v)?v.getFilters():[v]}(n.where));let o=[];n.orderBy&&(o=function(y){return y.map(v=>function(C){return new ho(ri(C.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(v))}(n.orderBy));let l=null;n.limit&&(l=function(y){let v;return v=typeof y=="object"?y.value:y,Yl(v)?null:v}(n.limit));let u=null;n.startAt&&(u=function(y){const v=!!y.before,k=y.values||[];return new _l(k,v)}(n.startAt));let h=null;return n.endAt&&(h=function(y){const v=!y.before,k=y.values||[];return new _l(k,v)}(n.endAt)),HA(e,i,o,s,l,"F",u,h)}function Rk(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function bw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ri(n.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ri(n.unaryFilter.field);return Ne.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ri(n.unaryFilter.field);return Ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ri(n.unaryFilter.field);return Ne.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return Ne.create(ri(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return $t.create(n.compositeFilter.filters.map(r=>bw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function Pk(t){return yk[t]}function Nk(t){return vk[t]}function bk(t){return _k[t]}function ni(t){return{fieldPath:t.canonicalString()}}function ri(t){return ze.fromServerFormat(t.fieldPath)}function Dw(t){return t instanceof Ne?function(n){if(n.op==="=="){if(pg(n.value))return{unaryFilter:{field:ni(n.field),op:"IS_NAN"}};if(fg(n.value))return{unaryFilter:{field:ni(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(pg(n.value))return{unaryFilter:{field:ni(n.field),op:"IS_NOT_NAN"}};if(fg(n.value))return{unaryFilter:{field:ni(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ni(n.field),op:Nk(n.op),value:n.value}}}(t):t instanceof $t?function(n){const r=n.getFilters().map(i=>Dw(i));return r.length===1?r[0]:{compositeFilter:{op:bk(n.op),filters:r}}}(t):G()}function Dk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ow(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n,r,i,s=X.min(),o=X.min(),l=He.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e){this.ct=e}}function Vk(t){const e=Ck({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(){this.un=new Mk}addToCollectionParentIndex(e,n){return this.un.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(hr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(hr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class Mk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new qe(me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new qe(me.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ji(0)}static kn(){return new ji(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(){this.changes=new Yi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Bs(r.mutation,i,jt.empty(),Ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=Cr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=As();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Cr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Pn();const o=Us(),l=function(){return Us()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Kr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Bs(f.mutation,h,f.mutation.getFieldMask(),Ve.now())):o.set(h.key,jt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var y;return l.set(h,new Fk(f,(y=o.get(h))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Us();let i=new Te((o,l)=>o-l),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||jt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const y=(i.get(l.batchId)||te()).add(u);i=i.insert(l.batchId,y)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,y=yw();f.forEach(v=>{if(!s.has(v)){const k=Iw(n.get(v),r.get(v));k!==null&&y.set(v,k),s=s.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,y))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):dw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(Cr());let l=-1,u=s;return o.next(h=>L.forEach(h,(f,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(v=>{u=u.insert(f,v)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,te())).next(f=>({batchId:l,changes:gw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=As();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=As();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const h=function(y,v){return new Gi(v,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((y,v)=>{o=o.insert(y,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,tt.newInvalidDocument(f)))});let l=As();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Bs(f.mutation,h,jt.empty(),Ve.now()),Zl(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return L.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Zt(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Vk(i.bundledQuery),readTime:Zt(i.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(){this.overlays=new Te(W.comparator),this.Ir=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Cr();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Cr(),s=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Te((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Cr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Cr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return L.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new hk(n,r));let s=this.Ir.get(n);s===void 0&&(s=te(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(){this.sessionToken=He.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.Tr=new qe(Le.Er),this.dr=new qe(Le.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Le(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Le(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new W(new me([])),r=new Le(n,e),i=new Le(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new W(new me([])),r=new Le(n,e),i=new Le(n,e+1);let s=te();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Le(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return W.comparator(e.key,n.key)||ae(e.wr,n.wr)}static Ar(e,n){return ae(e.wr,n.wr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new qe(Le.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ck(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Le(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Le(n,0),i=new Le(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(ae);return n.forEach(i=>{const s=new Le(i,0),o=new Le(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new Le(new W(s),0);let l=new qe(ae);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),L.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ue(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(n.mutations,i=>{const s=new Le(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Le(n,0),i=this.br.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e){this.Mr=e,this.docs=function(){return new Te(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let r=Pn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():tt.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Pn();const o=n.path,l=new W(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||kA(AA(f),r)<=0||(i.has(f.key)||Zl(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Or(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Hk(this)}getSize(e){return L.resolve(this.size)}}class Hk extends jk{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e){this.persistence=e,this.Nr=new Yi(n=>Qd(n),Gd),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new tf,this.targetCount=0,this.kr=ji.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),L.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ji(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Kn(n),L.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e,n){this.qr={},this.overlays={},this.Qr=new qd(0),this.Kr=!1,this.Kr=!0,this.$r=new $k,this.referenceDelegate=e(this),this.Ur=new Kk(this),this.indexManager=new Lk,this.remoteDocumentCache=function(i){return new Wk(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Ok(n),this.Gr=new Bk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new zk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new qk(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new Gk(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Gk extends RA{constructor(e){super(),this.currentSequenceNumber=e}}class nf{constructor(e){this.persistence=e,this.Jr=new tf,this.Yr=null}static Zr(e){return new nf(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),L.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const i=W.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return L.or([()=>L.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new rf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return tx()?8:PA(rt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Yk;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ws()<=ne.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",ti(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(ws()<=ne.DEBUG&&q("QueryEngine","Query:",ti(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ws()<=ne.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",ti(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xt(n))):L.resolve())}Yi(e,n){if(vg(n))return L.resolve(null);let r=Xt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Nh(n,null,"F"),r=Xt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,Nh(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return vg(n)||i.isEqual(X.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?L.resolve(null):(ws()<=ne.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ti(n)),this.rs(e,o,n,xA(i,-1)).next(l=>l))})}ts(e,n){let r=new qe(pw(e));return n.forEach((i,s)=>{Zl(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ws()<=ne.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",ti(n)),this.Ji.getDocumentsMatchingQuery(e,n,hr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Te(ae),this._s=new Yi(s=>Qd(s),Gd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Uk(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Zk(t,e,n,r){return new Jk(t,e,n,r)}async function Vw(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=te();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function e1(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const y=h.batch,v=y.keys();let k=L.resolve();return v.forEach(C=>{k=k.next(()=>f.getEntry(u,C)).next(N=>{const O=h.docVersions.get(C);ue(O!==null),N.version.compareTo(O)<0&&(y.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),k.next(()=>l.mutationQueue.removeMutationBatch(u,y))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Lw(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function t1(t,e){const n=J(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,y)=>{const v=i.get(y);if(!v)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,y).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,y)));let k=v.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(y)!==null?k=k.withResumeToken(He.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):f.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(f.resumeToken,r)),i=i.insert(y,k),function(N,O,I){return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(v,k,f)&&l.push(n.Ur.updateTargetData(s,k))});let u=Pn(),h=te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(n1(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(X.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(y=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function n1(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Pn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function r1(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function i1(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Gn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Lh(t,e,n){const r=J(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ko(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Rg(t,e,n){const r=J(t);let i=X.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const y=J(u),v=y._s.get(f);return v!==void 0?L.resolve(y.os.get(v)):y.Ur.getTargetData(h,f)}(r,o,Xt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:te())).next(l=>(s1(r,QA(e),l),{documents:l,Ts:s})))}function s1(t,e,n){let r=t.us.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Pg{constructor(){this.activeTargetIds=ek()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class o1{constructor(){this.so=new Pg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Pg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _a=null;function gc(){return _a===null?_a=function(){return 268435456+Math.round(2147483648*Math.random())}():_a++,"0x"+_a.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="WebChannelConnection";class c1 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=gc(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>(q("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Oi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ki}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=l1[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=gc();return new Promise((o,l)=>{const u=new Y_;u.setWithCredentials(!0),u.listenOnce(X_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case La.NO_ERROR:const f=u.getResponseJson();q(Je,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case La.TIMEOUT:q(Je,`RPC '${e}' ${s} timed out`),l(new $(V.DEADLINE_EXCEEDED,"Request time out"));break;case La.HTTP_ERROR:const y=u.getStatus();if(q(Je,`RPC '${e}' ${s} failed with status:`,y,"response text:",u.getResponseText()),y>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const k=v==null?void 0:v.error;if(k&&k.status&&k.message){const C=function(O){const I=O.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(I)>=0?I:V.UNKNOWN}(k.status);l(new $(C,k.message))}else l(new $(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new $(V.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{q(Je,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);q(Je,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=gc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ew(),l=Z_(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");q(Je,`Creating RPC '${e}' stream ${i}: ${f}`,u);const y=o.createWebChannel(f,u);let v=!1,k=!1;const C=new u1({Io:O=>{k?q(Je,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(v||(q(Je,`Opening RPC '${e}' stream ${i} transport.`),y.open(),v=!0),q(Je,`RPC '${e}' stream ${i} sending:`,O),y.send(O))},To:()=>y.close()}),N=(O,I,E)=>{O.listen(I,x=>{try{E(x)}catch(b){setTimeout(()=>{throw b},0)}})};return N(y,xs.EventType.OPEN,()=>{k||(q(Je,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),N(y,xs.EventType.CLOSE,()=>{k||(k=!0,q(Je,`RPC '${e}' stream ${i} transport closed`),C.So())}),N(y,xs.EventType.ERROR,O=>{k||(k=!0,Oi(Je,`RPC '${e}' stream ${i} transport errored:`,O),C.So(new $(V.UNAVAILABLE,"The operation could not be completed")))}),N(y,xs.EventType.MESSAGE,O=>{var I;if(!k){const E=O.data[0];ue(!!E);const x=E,b=x.error||((I=x[0])===null||I===void 0?void 0:I.error);if(b){q(Je,`RPC '${e}' stream ${i} received error:`,b);const F=b.status;let j=function(w){const T=Re[w];if(T!==void 0)return xw(T)}(F),_=b.message;j===void 0&&(j=V.INTERNAL,_="Unknown error status: "+F+" with message "+b.message),k=!0,C.So(new $(j,_)),y.close()}else q(Je,`RPC '${e}' stream ${i} received:`,E),C.bo(E)}}),N(l,J_.STAT_EVENT,O=>{O.stat===xh.PROXY?q(Je,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===xh.NOPROXY&&q(Je,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function yc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(t){return new wk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Mw(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Rn(n.toString()),Rn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new $(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class h1 extends jw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Ik(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Zt(o.readTime):X.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Vh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Rh(u)?{documents:Ak(s,u)}:{query:kk(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Cw(s,o.resumeToken);const h=bh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=El(s,o.snapshotVersion.toTimestamp());const h=bh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=Rk(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Vh(this.serializer),n.removeTarget=e,this.a_(n)}}class d1 extends jw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ue(!!e.streamToken),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=xk(e.writeResults,e.commitTime),r=Zt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Vh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Sk(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Dh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(V.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Dh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class p1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Rn(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Qr(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=J(u);h.L_.add(4),await Po(h),h.q_.set("Unknown"),h.L_.delete(4),await iu(h)}(this))})}),this.q_=new p1(r,i)}}async function iu(t){if(Qr(t))for(const e of t.B_)await e(!0)}async function Po(t){for(const e of t.B_)await e(!1)}function Fw(t,e){const n=J(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),lf(n)?af(n):Xi(n).r_()&&of(n,e))}function sf(t,e){const n=J(t),r=Xi(n);n.N_.delete(e),r.r_()&&Uw(n,e),n.N_.size===0&&(r.r_()?r.o_():Qr(n)&&n.q_.set("Unknown"))}function of(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Xi(t).A_(e)}function Uw(t,e){t.Q_.xe(e),Xi(t).R_(e)}function af(t){t.Q_=new gk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Xi(t).start(),t.q_.v_()}function lf(t){return Qr(t)&&!Xi(t).n_()&&t.N_.size>0}function Qr(t){return J(t).L_.size===0}function Bw(t){t.Q_=void 0}async function g1(t){t.q_.set("Online")}async function y1(t){t.N_.forEach((e,n)=>{of(t,e)})}async function v1(t,e){Bw(t),lf(t)?(t.q_.M_(e),af(t)):t.q_.set("Unknown")}async function _1(t,e,n){if(t.q_.set("Online"),e instanceof kw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Tl(t,r)}else if(e instanceof Fa?t.Q_.Ke(e):e instanceof Aw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(X.min()))try{const r=await Lw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(He.EMPTY_BYTE_STRING,f.snapshotVersion)),Uw(s,u);const y=new Gn(f.target,u,h,f.sequenceNumber);of(s,y)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Tl(t,r)}}async function Tl(t,e,n){if(!ko(e))throw e;t.L_.add(1),await Po(t),t.q_.set("Offline"),n||(n=()=>Lw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await iu(t)})}function zw(t,e){return e().catch(n=>Tl(t,n,e))}async function su(t){const e=J(t),n=fr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;w1(e);)try{const i=await r1(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,E1(e,i)}catch(i){await Tl(e,i)}$w(e)&&qw(e)}function w1(t){return Qr(t)&&t.O_.length<10}function E1(t,e){t.O_.push(e);const n=fr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function $w(t){return Qr(t)&&!fr(t).n_()&&t.O_.length>0}function qw(t){fr(t).start()}async function T1(t){fr(t).p_()}async function I1(t){const e=fr(t);for(const n of t.O_)e.m_(n.mutations)}async function S1(t,e,n){const r=t.O_.shift(),i=Jd.from(r,e,n);await zw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await su(t)}async function x1(t,e){e&&fr(t).V_&&await async function(r,i){if(function(o){return fk(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();fr(r).s_(),await zw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await su(r)}}(t,e),$w(t)&&qw(t)}async function bg(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=Qr(n);n.L_.add(3),await Po(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await iu(n)}async function A1(t,e){const n=J(t);e?(n.L_.delete(2),await iu(n)):e||(n.L_.add(2),await Po(n),n.q_.set("Unknown"))}function Xi(t){return t.K_||(t.K_=function(n,r,i){const s=J(n);return s.w_(),new h1(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:g1.bind(null,t),Ro:y1.bind(null,t),mo:v1.bind(null,t),d_:_1.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),lf(t)?af(t):t.q_.set("Unknown")):(await t.K_.stop(),Bw(t))})),t.K_}function fr(t){return t.U_||(t.U_=function(n,r,i){const s=J(n);return s.w_(),new d1(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:T1.bind(null,t),mo:x1.bind(null,t),f_:I1.bind(null,t),g_:S1.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await su(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new uf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cf(t,e){if(Rn("AsyncQueue",`${e}: ${t}`),ko(t))return new $(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=As(),this.sortedSet=new Te(this.comparator)}static emptySet(e){return new Ii(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ii)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ii;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(){this.W_=new Te(W.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Fi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Fi(e,n,Ii.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class C1{constructor(){this.queries=Og(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=Og(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new $(V.ABORTED,"Firestore shutting down"))}}function Og(){return new Yi(t=>fw(t),Jl)}async function Ww(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new k1,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=cf(o,`Initialization of query '${ti(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&hf(n)}async function Hw(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function R1(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&hf(n)}function P1(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function hf(t){t.Y_.forEach(e=>{e.next()})}var Mh,Vg;(Vg=Mh||(Mh={})).ea="default",Vg.Cache="cache";class Kw{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Fi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Fi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Mh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e){this.key=e}}class Gw{constructor(e){this.key=e}}class N1{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=pw(e),this.Ra=new Ii(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Dg,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,y)=>{const v=i.get(f),k=Zl(this.query,y)?y:null,C=!!v&&this.mutatedKeys.has(v.key),N=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let O=!1;v&&k?v.data.isEqual(k.data)?C!==N&&(r.track({type:3,doc:k}),O=!0):this.ga(v,k)||(r.track({type:2,doc:k}),O=!0,(u&&this.Aa(k,u)>0||h&&this.Aa(k,h)<0)&&(l=!0)):!v&&k?(r.track({type:0,doc:k}),O=!0):v&&!k&&(r.track({type:1,doc:v}),O=!0,(u||h)&&(l=!0)),O&&(k?(o=o.add(k),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,y)=>function(k,C){const N=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return N(k)-N(C)}(f.type,y.type)||this.Aa(f.doc,y.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Fi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Dg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Gw(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Qw(r))}),n}ba(e){this.Ta=e.Ts,this.da=te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Fi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class b1{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class D1{constructor(e){this.key=e,this.va=!1}}class O1{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Yi(l=>fw(l),Jl),this.Ma=new Map,this.xa=new Set,this.Oa=new Te(W.comparator),this.Na=new Map,this.La=new tf,this.Ba={},this.ka=new Map,this.qa=ji.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function V1(t,e,n=!0){const r=t0(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Yw(r,e,n,!0),i}async function L1(t,e){const n=t0(t);await Yw(n,e,!0,!1)}async function Yw(t,e,n,r){const i=await i1(t.localStore,Xt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await M1(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Fw(t.remoteStore,i),l}async function M1(t,e,n,r,i){t.Ka=(y,v,k)=>async function(N,O,I,E){let x=O.view.ma(I);x.ns&&(x=await Rg(N.localStore,O.query,!1).then(({documents:_})=>O.view.ma(_,x)));const b=E&&E.targetChanges.get(O.targetId),F=E&&E.targetMismatches.get(O.targetId)!=null,j=O.view.applyChanges(x,N.isPrimaryClient,b,F);return Mg(N,O.targetId,j.wa),j.snapshot}(t,y,v,k);const s=await Rg(t.localStore,e,!0),o=new N1(e,s.Ts),l=o.ma(s.documents),u=Ro.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);Mg(t,n,h.wa);const f=new b1(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function j1(t,e,n){const r=J(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Jl(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Lh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&sf(r.remoteStore,i.targetId),jh(r,i.targetId)}).catch(Ao)):(jh(r,i.targetId),await Lh(r.localStore,i.targetId,!0))}async function F1(t,e){const n=J(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),sf(n.remoteStore,r.targetId))}async function U1(t,e,n){const r=K1(t);try{const i=await function(o,l){const u=J(o),h=Ve.now(),f=l.reduce((k,C)=>k.add(C.key),te());let y,v;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let C=Pn(),N=te();return u.cs.getEntries(k,f).next(O=>{C=O,C.forEach((I,E)=>{E.isValidDocument()||(N=N.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,C)).next(O=>{y=O;const I=[];for(const E of l){const x=lk(E,y.get(E.key).overlayedDocument);x!=null&&I.push(new Kr(E.key,x,sw(x.value.mapValue),Jt.exists(!0)))}return u.mutationQueue.addMutationBatch(k,h,I,l)}).next(O=>{v=O;const I=O.applyToLocalDocumentSet(y,N);return u.documentOverlayCache.saveOverlays(k,O.batchId,I)})}).then(()=>({batchId:v.batchId,changes:gw(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Te(ae)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await No(r,i.changes),await su(r.remoteStore)}catch(i){const s=cf(i,"Failed to persist write");n.reject(s)}}async function Xw(t,e){const n=J(t);try{const r=await t1(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ue(o.va):i.removedDocuments.size>0&&(ue(o.va),o.va=!1))}),await No(n,r,e)}catch(r){await Ao(r)}}function Lg(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let h=!1;u.queries.forEach((f,y)=>{for(const v of y.j_)v.Z_(l)&&(h=!0)}),h&&hf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function B1(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Te(W.comparator);o=o.insert(s,tt.newNoDocument(s,X.min()));const l=te().add(s),u=new nu(X.min(),new Map,new Te(ae),o,l);await Xw(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),df(r)}else await Lh(r.localStore,e,!1).then(()=>jh(r,e,n)).catch(Ao)}async function z1(t,e){const n=J(t),r=e.batch.batchId;try{const i=await e1(n.localStore,e);Zw(n,r,null),Jw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await No(n,i)}catch(i){await Ao(i)}}async function $1(t,e,n){const r=J(t);try{const i=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(y=>(ue(y!==null),f=y.keys(),u.mutationQueue.removeMutationBatch(h,y))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Zw(r,e,n),Jw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await No(r,i)}catch(i){await Ao(i)}}function Jw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Zw(t,e,n){const r=J(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function jh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||e0(t,r)})}function e0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(sf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),df(t))}function Mg(t,e,n){for(const r of n)r instanceof Qw?(t.La.addReference(r.key,e),q1(t,r)):r instanceof Gw?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||e0(t,r.key)):G()}function q1(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),df(t))}function df(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new W(me.fromString(e)),r=t.qa.next();t.Na.set(r,new D1(n)),t.Oa=t.Oa.insert(n,r),Fw(t.remoteStore,new Gn(Xt(Xl(n.path)),r,"TargetPurposeLimboResolution",qd.oe))}}async function No(t,e,n){const r=J(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const y=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(h){i.push(h);const y=rf.Wi(u.targetId,h);s.push(y)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=J(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>L.forEach(h,v=>L.forEach(v.$i,k=>f.persistence.referenceDelegate.addReference(y,v.targetId,k)).next(()=>L.forEach(v.Ui,k=>f.persistence.referenceDelegate.removeReference(y,v.targetId,k)))))}catch(y){if(!ko(y))throw y;q("LocalStore","Failed to update sequence numbers: "+y)}for(const y of h){const v=y.targetId;if(!y.fromCache){const k=f.os.get(v),C=k.snapshotVersion,N=k.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(v,N)}}}(r.localStore,s))}async function W1(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await Vw(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new $(V.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await No(n,r.hs)}}function H1(t,e){const n=J(t),r=n.Na.get(e);if(r&&r.va)return te().add(r.key);{let i=te();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function t0(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Xw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=H1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=B1.bind(null,e),e.Ca.d_=R1.bind(null,e.eventManager),e.Ca.$a=P1.bind(null,e.eventManager),e}function K1(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=z1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$1.bind(null,e),e}class Il{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ru(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Zk(this.persistence,new Xk,e.initialUser,this.serializer)}Ga(e){return new Qk(nf.Zr,this.serializer)}Wa(e){return new o1}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Il.provider={build:()=>new Il};class Fh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Lg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=W1.bind(null,this.syncEngine),await A1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new C1}()}createDatastore(e){const n=ru(e.databaseInfo.databaseId),r=function(s){return new c1(s)}(e.databaseInfo);return function(s,o,l,u){return new f1(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new m1(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Lg(this.syncEngine,n,0),function(){return Ng.D()?new Ng:new a1}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const y=new O1(i,s,o,l,u,h);return f&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Po(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Fh.provider={build:()=>new Fh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Rn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ze.UNAUTHENTICATED,this.clientId=nw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vc(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Vw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function jg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await G1(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>bg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>bg(e.remoteStore,i)),t._onlineComponents=e}async function G1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await vc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Oi("Error using user provided cache. Falling back to memory cache: "+n),await vc(t,new Il)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await vc(t,new Il);return t._offlineComponents}async function r0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await jg(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await jg(t,new Fh))),t._onlineComponents}function Y1(t){return r0(t).then(e=>e.syncEngine)}async function Uh(t){const e=await r0(t),n=e.eventManager;return n.onListen=V1.bind(null,e.syncEngine),n.onUnlisten=j1.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=L1.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=F1.bind(null,e.syncEngine),n}function X1(t,e,n={}){const r=new sr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new n0({next:v=>{f.Za(),o.enqueueAndForget(()=>Hw(s,y));const k=v.docs.has(l);!k&&v.fromCache?h.reject(new $(V.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&v.fromCache&&u&&u.source==="server"?h.reject(new $(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(v)},error:v=>h.reject(v)}),y=new Kw(Xl(l.path),f,{includeMetadataChanges:!0,_a:!0});return Ww(s,y)}(await Uh(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(t,e,n){if(!n)throw new $(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function J1(t,e,n,r){if(e===!0&&r===!0)throw new $(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ug(t){if(!W.isDocumentKey(t))throw new $(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Bg(t){if(W.isDocumentKey(t))throw new $(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ou(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function In(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ou(t);throw new $(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}J1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=i0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class au{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new gA;switch(r.type){case"firstParty":return new wA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Fg.get(n);r&&(q("ComponentProvider","Removing Datastore"),Fg.delete(n),r.terminate())}(this),Promise.resolve()}}function Z1(t,e,n,r={}){var i;const s=(t=In(t,au))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Oi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ze.MOCK_USER;else{l=QS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new $(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ze(h)}t._authCredentials=new yA(new tw(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Gr(this.firestore,e,this._query)}}class ut{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new or(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ut(this.firestore,e,this._key)}}class or extends Gr{constructor(e,n,r){super(e,n,Xl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ut(this.firestore,null,new W(e))}withConverter(e){return new or(this.firestore,e,this._path)}}function o0(t,e,...n){if(t=it(t),s0("collection","path",e),t instanceof au){const r=me.fromString(e,...n);return Bg(r),new or(t,null,r)}{if(!(t instanceof ut||t instanceof or))throw new $(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return Bg(r),new or(t.firestore,null,r)}}function ar(t,e,...n){if(t=it(t),arguments.length===1&&(e=nw.newId()),s0("doc","path",e),t instanceof au){const r=me.fromString(e,...n);return Ug(r),new ut(t,null,new W(r))}{if(!(t instanceof ut||t instanceof or))throw new $(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return Ug(r),new ut(t.firestore,t instanceof or?t.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Mw(this,"async_queue_retry"),this.Vu=()=>{const r=yc();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=yc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=yc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new sr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ko(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Rn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=uf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function qg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Ui extends au{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new $g,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $g(e),this._firestoreClient=void 0,await e}}}function eC(t,e){const n=typeof t=="object"?t:zd(),r=typeof t=="string"?t:"(default)",i=Wi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=HS("firestore");s&&Z1(i,...s)}return i}function ff(t){if(t._terminated)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||tC(t),t._firestoreClient}function tC(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new DA(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,i0(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Q1(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bi(He.fromBase64String(e))}catch(n){throw new $(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Bi(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=/^__.*__$/;class rC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Kr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Co(e,this.data,n,this.fieldTransforms)}}function a0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class vf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new vf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Sl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(a0(this.Cu)&&nC.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class iC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ru(e)}Qu(e,n,r,i=!1){return new vf({Cu:e,methodName:n,qu:r,path:ze.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function l0(t){const e=t._freezeSettings(),n=ru(t._databaseId);return new iC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sC(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);h0("Data must be an object, but it was:",o,r);const l=u0(r,o);let u,h;if(s.merge)u=new jt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const y of s.mergeFields){const v=aC(e,y,n);if(!o.contains(v))throw new $(V.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);uC(f,v)||f.push(v)}u=new jt(f),h=o.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,h=o.fieldTransforms;return new rC(new kt(l),u,h)}class _f extends mf{_toFieldTransform(e){return new ik(e.path,new fo)}isEqual(e){return e instanceof _f}}function oC(t,e,n,r=!1){return wf(n,t.Qu(r?4:3,e))}function wf(t,e){if(c0(t=it(t)))return h0("Unsupported field value:",e,t),u0(t,e);if(t instanceof mf)return function(r,i){if(!a0(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=wf(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=it(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ve.fromDate(r);return{timestampValue:El(i.serializer,s)}}if(r instanceof Ve){const s=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:El(i.serializer,s)}}if(r instanceof gf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Bi)return{bytesValue:Cw(i.serializer,r._byteString)};if(r instanceof ut){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ef(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof yf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Yd(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${ou(r)}`)}(t,e)}function u0(t,e){const n={};return rw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qi(t,(r,i)=>{const s=wf(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function c0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof gf||t instanceof Bi||t instanceof ut||t instanceof mf||t instanceof yf)}function h0(t,e,n){if(!c0(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ou(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function aC(t,e,n){if((e=it(e))instanceof pf)return e._internalPath;if(typeof e=="string")return d0(t,e);throw Sl("Field path arguments must be of type string or ",t,!1,void 0,n)}const lC=new RegExp("[~\\*/\\[\\]]");function d0(t,e,n){if(e.search(lC)>=0)throw Sl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new pf(...e.split("."))._internalPath}catch{throw Sl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new $(V.INVALID_ARGUMENT,l+t+u)}function uC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ef("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cC extends f0{data(){return super.data()}}function Ef(t,e){return typeof e=="string"?d0(t,e):e instanceof pf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Tf{}class p0 extends Tf{}function m0(t,e,...n){let r=[];e instanceof Tf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Sf).length,l=s.filter(u=>u instanceof If).length;if(o>1||o>0&&l>0)throw new $(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class If extends p0{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new If(e,n,r)}_apply(e){const n=this._parse(e);return y0(e._query,n),new Gr(e.firestore,e.converter,Ph(e._query,n))}_parse(e){const n=l0(e.firestore);return function(s,o,l,u,h,f,y){let v;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new $(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Hg(y,f);const k=[];for(const C of y)k.push(Wg(u,s,C));v={arrayValue:{values:k}}}else v=Wg(u,s,y)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Hg(y,f),v=oC(l,o,y,f==="in"||f==="not-in");return Ne.create(h,f,v)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Sf extends Tf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Sf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:$t.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)y0(o,u),o=Ph(o,u)}(e._query,n),new Gr(e.firestore,e.converter,Ph(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class xf extends p0{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new xf(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new $(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ho(s,o)}(e._query,this._field,this._direction);return new Gr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Gi(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function g0(t,e="asc"){const n=e,r=Ef("orderBy",t);return xf._create(r,n)}function Wg(t,e,n){if(typeof(n=it(n))=="string"){if(n==="")throw new $(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dw(e)&&n.indexOf("/")!==-1)throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(me.fromString(n));if(!W.isDocumentKey(r))throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return dg(t,new W(r))}if(n instanceof ut)return dg(t,n._key);throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ou(n)}.`)}function Hg(t,e){if(!Array.isArray(t)||t.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function y0(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class dC{convertValue(e,n="none"){switch(Ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Qi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ae(o.doubleValue));return new yf(s)}convertGeoPoint(e){return new gf(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Hd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(lo(e));default:return null}}convertTimestamp(e){const n=dr(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=me.fromString(e);ue(Ow(r));const i=new uo(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||Rn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class v0 extends f0{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ua(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ef("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ua extends v0{data(e={}){return super.data(e)}}class pC{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Cs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ua(this._firestore,this._userDataWriter,r.key,r,new Cs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Ua(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Cs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Ua(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Cs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:mC(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function mC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(t){t=In(t,ut);const e=In(t.firestore,Ui);return X1(ff(e),t._key).then(n=>I0(e,t,n))}class _0 extends dC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ut(this.firestore,null,n)}}function go(t,e,n){t=In(t,ut);const r=In(t.firestore,Ui),i=fC(t.converter,e,n);return T0(r,[sC(l0(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Jt.none())])}function w0(t){return T0(In(t.firestore,Ui),[new Xd(t._key,Jt.none())])}function E0(t,...e){var n,r,i;t=it(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||qg(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(qg(e[o])){const y=e[o];e[o]=(n=y.next)===null||n===void 0?void 0:n.bind(y),e[o+1]=(r=y.error)===null||r===void 0?void 0:r.bind(y),e[o+2]=(i=y.complete)===null||i===void 0?void 0:i.bind(y)}let u,h,f;if(t instanceof ut)h=In(t.firestore,Ui),f=Xl(t._key.path),u={next:y=>{e[o]&&e[o](I0(h,t,y))},error:e[o+1],complete:e[o+2]};else{const y=In(t,Gr);h=In(y.firestore,Ui),f=y._query;const v=new _0(h);u={next:k=>{e[o]&&e[o](new pC(h,v,y,k))},error:e[o+1],complete:e[o+2]},hC(t._query)}return function(v,k,C,N){const O=new n0(N),I=new Kw(k,O,C);return v.asyncQueue.enqueueAndForget(async()=>Ww(await Uh(v),I)),()=>{O.Za(),v.asyncQueue.enqueueAndForget(async()=>Hw(await Uh(v),I))}}(ff(h),f,l,u)}function T0(t,e){return function(r,i){const s=new sr;return r.asyncQueue.enqueueAndForget(async()=>U1(await Y1(r),i,s)),s.promise}(ff(t),e)}function I0(t,e,n){const r=n.docs.get(e._key),i=new _0(t);return new v0(t,i,e._key,r,new Cs(n.hasPendingWrites,n.fromCache),e.converter)}function Kg(){return new _f("serverTimestamp")}(function(e,n=!0){(function(i){Ki=i})(Hi),nn(new zt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Ui(new vA(r.getProvider("auth-internal")),new TA(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new $(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new uo(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Pt(ag,"4.7.3",e),Pt(ag,"4.7.3","esm2017")})();var yC="firebase",vC="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt(yC,vC,"app");function Af(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function S0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _C=S0,x0=new Hr("auth","Firebase",S0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=new Ud("@firebase/auth");function wC(t,...e){xl.logLevel<=ne.WARN&&xl.warn(`Auth (${Hi}): ${t}`,...e)}function Ba(t,...e){xl.logLevel<=ne.ERROR&&xl.error(`Auth (${Hi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t,...e){throw kf(t,...e)}function en(t,...e){return kf(t,...e)}function A0(t,e,n){const r=Object.assign(Object.assign({},_C()),{[e]:n});return new Hr("auth","Firebase",r).create(e,{appName:t.name})}function lr(t){return A0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return x0.create(t,...e)}function Q(t,e,...n){if(!t)throw kf(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ba(e),new Error(e)}function bn(t,e){t||vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function EC(){return Qg()==="http:"||Qg()==="https:"}function Qg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(EC()||JS()||"connection"in navigator)?navigator.onLine:!0}function IC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n){this.shortDelay=e,this.longDelay=n,bn(n>e,"Short delay should be less than long delay!"),this.isMobile=GS()||ZS()}get(){return TC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(t,e){bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC=new bo(3e4,6e4);function lu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ji(t,e,n,r,i={}){return C0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=xo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return XS()||(h.referrerPolicy="no-referrer"),k0.fetch()(P0(t,t.config.apiHost,n,l),h)})}async function C0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},SC),e);try{const i=new AC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw wa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw wa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw wa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw wa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw A0(t,f,h);Nn(t,f)}}catch(i){if(i instanceof sn)throw i;Nn(t,"network-request-failed",{message:String(i)})}}async function R0(t,e,n,r,i={}){const s=await Ji(t,e,n,r,i);return"mfaPendingCredential"in s&&Nn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function P0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Cf(t.config,i):`${t.config.apiScheme}://${i}`}class AC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),xC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=en(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kC(t,e){return Ji(t,"POST","/v1/accounts:delete",e)}async function N0(t,e){return Ji(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CC(t,e=!1){const n=it(t),r=await n.getIdToken(e),i=Rf(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:zs(_c(i.auth_time)),issuedAtTime:zs(_c(i.iat)),expirationTime:zs(_c(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function _c(t){return Number(t)*1e3}function Rf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ba("JWT malformed, contained fewer than 3 sections"),null;try{const i=j_(n);return i?JSON.parse(i):(Ba("Failed to decode base64 JWT payload"),null)}catch(i){return Ba("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Gg(t){const e=Rf(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof sn&&RC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function RC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zs(this.lastLoginAt),this.creationTime=zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Al(t){var e;const n=t.auth,r=await t.getIdToken(),i=await yo(t,N0(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?b0(s.providerUserInfo):[],l=bC(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new zh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,y)}async function NC(t){const e=it(t);await Al(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function b0(t){return t.map(e=>{var{providerId:n}=e,r=Af(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DC(t,e){const n=await C0(t,{},async()=>{const r=xo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=P0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",k0.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function OC(t,e){return Ji(t,"POST","/v2/accounts:revokeToken",lu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=Gg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await DC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Si;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Si,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _n{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Af(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new PC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await yo(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return CC(this,e)}reload(){return NC(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Al(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yn(this.auth.app))return Promise.reject(lr(this.auth));const e=await this.getIdToken();return await yo(this,kC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const y=(r=n.displayName)!==null&&r!==void 0?r:void 0,v=(i=n.email)!==null&&i!==void 0?i:void 0,k=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(h=n.createdAt)!==null&&h!==void 0?h:void 0,E=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:x,emailVerified:b,isAnonymous:F,providerData:j,stsTokenManager:_}=n;Q(x&&_,e,"internal-error");const p=Si.fromJSON(this.name,_);Q(typeof x=="string",e,"internal-error"),jn(y,e.name),jn(v,e.name),Q(typeof b=="boolean",e,"internal-error"),Q(typeof F=="boolean",e,"internal-error"),jn(k,e.name),jn(C,e.name),jn(N,e.name),jn(O,e.name),jn(I,e.name),jn(E,e.name);const w=new _n({uid:x,auth:e,email:v,emailVerified:b,displayName:y,isAnonymous:F,photoURL:C,phoneNumber:k,tenantId:N,stsTokenManager:p,createdAt:I,lastLoginAt:E});return j&&Array.isArray(j)&&(w.providerData=j.map(T=>Object.assign({},T))),O&&(w._redirectEventId=O),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new Si;i.updateFromServerResponse(n);const s=new _n({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Al(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?b0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Si;l.updateFromIdToken(r);const u=new _n({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new zh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=new Map;function wn(t){bn(t instanceof Function,"Expected a class definition");let e=Yg.get(t);return e?(bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}D0.type="NONE";const Xg=D0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(t,e,n){return`firebase:${t}:${e}:${n}`}class xi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=za(this.userKey,i.apiKey,s),this.fullPersistenceKey=za("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xi(wn(Xg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||wn(Xg);const o=za(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const y=_n._fromJSON(e,f);h!==s&&(l=y),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new xi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new xi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(M0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(O0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(F0(e))return"Blackberry";if(U0(e))return"Webos";if(V0(e))return"Safari";if((e.includes("chrome/")||L0(e))&&!e.includes("edge/"))return"Chrome";if(j0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function O0(t=rt()){return/firefox\//i.test(t)}function V0(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function L0(t=rt()){return/crios\//i.test(t)}function M0(t=rt()){return/iemobile/i.test(t)}function j0(t=rt()){return/android/i.test(t)}function F0(t=rt()){return/blackberry/i.test(t)}function U0(t=rt()){return/webos/i.test(t)}function Pf(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function VC(t=rt()){var e;return Pf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function LC(){return ex()&&document.documentMode===10}function B0(t=rt()){return Pf(t)||j0(t)||U0(t)||F0(t)||/windows phone/i.test(t)||M0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(t,e=[]){let n;switch(t){case"Browser":n=Jg(rt());break;case"Worker":n=`${Jg(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jC(t,e={}){return Ji(t,"GET","/v2/passwordPolicy",lu(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=6;class UC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:FC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zg(this),this.idTokenSubscription=new Zg(this),this.beforeStateQueue=new MC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=x0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await N0(this,{idToken:e}),r=await _n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(yn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Al(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=IC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yn(this.app))return Promise.reject(lr(this));const n=e?it(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yn(this.app)?Promise.reject(lr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yn(this.app)?Promise.reject(lr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jC(this),n=new UC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await OC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await xi.create(this,[wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=z0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&wC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function uu(t){return it(t)}class Zg{constructor(e){this.auth=e,this.observer=null,this.addObserver=ax(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zC(t){Nf=t}function $C(t){return Nf.loadJS(t)}function qC(){return Nf.gapiScript}function WC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(t,e){const n=Wi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(gl(s,e??{}))return i;Nn(i,"already-initialized")}return n.initialize({options:e})}function KC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function QC(t,e,n){const r=uu(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=$0(e),{host:o,port:l}=GC(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),YC()}function $0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function GC(t){const e=$0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ey(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ey(o)}}}function ey(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function YC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(t,e){return R0(t,"POST","/v1/accounts:signInWithIdp",lu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC="http://localhost";class Br extends q0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Af(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Br(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ai(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ai(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ai(e,n)}buildRequest(){const e={requestUri:XC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends W0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Do{constructor(){super("facebook.com")}static credential(e){return Br._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.FACEBOOK_SIGN_IN_METHOD="facebook.com";$n.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Do{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Br._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Do{constructor(){super("github.com")}static credential(e){return Br._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.GITHUB_SIGN_IN_METHOD="github.com";Wn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Do{constructor(){super("twitter.com")}static credential(e,n){return Br._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JC(t,e){return R0(t,"POST","/v1/accounts:signUp",lu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await _n._fromIdTokenResponse(e,r,i),o=ty(r);return new pr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ty(r);return new pr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ty(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZC(t){var e;if(yn(t.app))return Promise.reject(lr(t));const n=uu(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new pr({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await JC(n,{returnSecureToken:!0}),i=await pr._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl extends sn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,kl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new kl(e,n,r,i)}}function H0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?kl._fromErrorAndOperation(t,s,e,r):s})}async function eR(t,e,n=!1){const r=await yo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tR(t,e,n=!1){const{auth:r}=t;if(yn(r.app))return Promise.reject(lr(r));const i="reauthenticate";try{const s=await yo(t,H0(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=Rf(s.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),pr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Nn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nR(t,e,n=!1){if(yn(t.app))return Promise.reject(lr(t));const r="signIn",i=await H0(t,r,e),s=await pr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function rR(t,e,n,r){return it(t).onIdTokenChanged(e,n,r)}function iR(t,e,n){return it(t).beforeAuthStateChanged(e,n)}function sR(t,e,n,r){return it(t).onAuthStateChanged(e,n,r)}const Cl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Cl,"1"),this.storage.removeItem(Cl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=1e3,aR=10;class Q0 extends K0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=B0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);LC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,aR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},oR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Q0.type="LOCAL";const lR=Q0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0 extends K0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}G0.type="SESSION";const Y0=G0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new cu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await uR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=bf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(y){const v=y;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(v.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return window}function hR(t){tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function dR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function pR(){return X0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0="firebaseLocalStorageDb",mR=1,Rl="firebaseLocalStorage",Z0="fbase_key";class Oo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hu(t,e){return t.transaction([Rl],e?"readwrite":"readonly").objectStore(Rl)}function gR(){const t=indexedDB.deleteDatabase(J0);return new Oo(t).toPromise()}function $h(){const t=indexedDB.open(J0,mR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Rl,{keyPath:Z0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Rl)?e(r):(r.close(),await gR(),e(await $h()))})})}async function ny(t,e,n){const r=hu(t,!0).put({[Z0]:e,value:n});return new Oo(r).toPromise()}async function yR(t,e){const n=hu(t,!1).get(e),r=await new Oo(n).toPromise();return r===void 0?null:r.value}function ry(t,e){const n=hu(t,!0).delete(e);return new Oo(n).toPromise()}const vR=800,_R=3;class eE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $h(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_R)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return X0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cu._getInstance(pR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dR(),!this.activeServiceWorker)return;this.sender=new cR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $h();return await ny(e,Cl,"1"),await ry(e,Cl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ny(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>yR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ry(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=hu(i,!1).getAll();return new Oo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}eE.type="LOCAL";const wR=eE;new bo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(t,e){return e?wn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df extends q0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ai(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ai(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ai(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TR(t){return nR(t.auth,new Df(t),t.bypassAuthState)}function IR(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),tR(n,new Df(t),t.bypassAuthState)}async function SR(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),eR(n,new Df(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TR;case"linkViaPopup":case"linkViaRedirect":return SR;case"reauthViaPopup":case"reauthViaRedirect":return IR;default:Nn(this.auth,"internal-error")}}resolve(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=new bo(2e3,1e4);class gi extends tE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,gi.currentPopupAction&&gi.currentPopupAction.cancel(),gi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const e=bf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xR.get())};e()}}gi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR="pendingRedirect",$a=new Map;class kR extends tE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=$a.get(this.auth._key());if(!e){try{const r=await CR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}$a.set(this.auth._key(),e)}return this.bypassAuthState||$a.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CR(t,e){const n=NR(e),r=PR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function RR(t,e){$a.set(t._key(),e)}function PR(t){return wn(t._redirectPersistence)}function NR(t){return za(AR,t.config.apiKey,t.name)}async function bR(t,e,n=!1){if(yn(t.app))return Promise.reject(lr(t));const r=uu(t),i=ER(r,e),o=await new kR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR=10*60*1e3;class OR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!nE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(en(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DR&&this.cachedEventUids.clear(),this.cachedEventUids.has(iy(e))}saveEventToCache(e){this.cachedEventUids.add(iy(e)),this.lastProcessedEventTime=Date.now()}}function iy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function nE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function VR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LR(t,e={}){return Ji(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jR=/^https?/;async function FR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await LR(t);for(const n of e)try{if(UR(n))return}catch{}Nn(t,"unauthorized-domain")}function UR(t){const e=Bh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jR.test(n))return!1;if(MR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR=new bo(3e4,6e4);function sy(){const t=tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zR(t){return new Promise((e,n)=>{var r,i,s;function o(){sy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sy(),n(en(t,"network-request-failed"))},timeout:BR.get()})}if(!((i=(r=tn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tn().gapi)===null||s===void 0)&&s.load)o();else{const l=WC("iframefcb");return tn()[l]=()=>{gapi.load?o():n(en(t,"network-request-failed"))},$C(`${qC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw qa=null,e})}let qa=null;function $R(t){return qa=qa||zR(t),qa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR=new bo(5e3,15e3),WR="__/auth/iframe",HR="emulator/auth/iframe",KR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GR(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cf(e,HR):`https://${t.config.authDomain}/${WR}`,r={apiKey:e.apiKey,appName:t.name,v:Hi},i=QR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${xo(r).slice(1)}`}async function YR(t){const e=await $R(t),n=tn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:GR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=en(t,"network-request-failed"),l=tn().setTimeout(()=>{s(o)},qR.get());function u(){tn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JR=500,ZR=600,eP="_blank",tP="http://localhost";class oy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nP(t,e,n,r=JR,i=ZR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},XR),{width:r.toString(),height:i.toString(),top:s,left:o}),h=rt().toLowerCase();n&&(l=L0(h)?eP:n),O0(h)&&(e=e||tP,u.scrollbars="yes");const f=Object.entries(u).reduce((v,[k,C])=>`${v}${k}=${C},`,"");if(VC(h)&&l!=="_self")return rP(e||"",l),new oy(null);const y=window.open(e||"",l,f);Q(y,t,"popup-blocked");try{y.focus()}catch{}return new oy(y)}function rP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP="__/auth/handler",sP="emulator/auth/handler",oP=encodeURIComponent("fac");async function ay(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Hi,eventId:i};if(e instanceof W0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ox(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,y]of Object.entries({}))o[f]=y}if(e instanceof Do){const f=e.getScopes().filter(y=>y!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${oP}=${encodeURIComponent(u)}`:"";return`${aP(t)}?${xo(l).slice(1)}${h}`}function aP({config:t}){return t.emulator?Cf(t,sP):`https://${t.authDomain}/${iP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="webStorageSupport";class lP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Y0,this._completeRedirectFn=bR,this._overrideRedirectResult=RR}async _openPopup(e,n,r,i){var s;bn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ay(e,n,r,Bh(),i);return nP(e,o,bf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ay(e,n,r,Bh(),i);return hR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(bn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await YR(e),r=new OR(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wc,{type:wc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[wc];o!==void 0&&n(!!o),Nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return B0()||V0()||Pf()}}const uP=lP;var ly="@firebase/auth",uy="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dP(t){nn(new zt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:z0(t)},h=new BC(r,i,s,u);return KC(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),nn(new zt("auth-internal",e=>{const n=uu(e.getProvider("auth").getImmediate());return(r=>new cP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pt(ly,uy,hP(t)),Pt(ly,uy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=5*60,pP=B_("authIdTokenMaxAge")||fP;let cy=null;const mP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>pP)return;const i=n==null?void 0:n.token;cy!==i&&(cy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function gP(t=zd()){const e=Wi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=HC(t,{popupRedirectResolver:uP,persistence:[wR,lR,Y0]}),r=B_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=mP(s.toString());iR(n,o,()=>o(n.currentUser)),rR(n,l=>o(l))}}const i=F_("auth");return i&&QC(n,`http://${i}`),n}function yP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}zC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=en("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",yP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dP("Browser");const rE="@firebase/installations",Of="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE=1e4,sE=`w:${Of}`,oE="FIS_v2",vP="https://firebaseinstallations.googleapis.com/v1",_P=60*60*1e3,wP="installations",EP="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},zr=new Hr(wP,EP,TP);function aE(t){return t instanceof sn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE({projectId:t}){return`${vP}/projects/${t}/installations`}function uE(t){return{token:t.token,requestStatus:2,expiresIn:SP(t.expiresIn),creationTime:Date.now()}}async function cE(t,e){const r=(await e.json()).error;return zr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function hE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function IP(t,{refreshToken:e}){const n=hE(t);return n.append("Authorization",xP(e)),n}async function dE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function SP(t){return Number(t.replace("s","000"))}function xP(t){return`${oE} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AP({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=lE(t),i=hE(t),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={fid:n,authVersion:oE,appId:t.appId,sdkVersion:sE},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await dE(()=>fetch(r,l));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:uE(h.authToken)}}else throw await cE("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP=/^[cdef][\w-]{21}$/,qh="";function RP(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=PP(t);return CP.test(n)?n:qh}catch{return qh}}function PP(t){return kP(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE=new Map;function mE(t,e){const n=du(t);gE(n,e),NP(n,e)}function gE(t,e){const n=pE.get(t);if(n)for(const r of n)r(e)}function NP(t,e){const n=bP();n&&n.postMessage({key:t,fid:e}),DP()}let Rr=null;function bP(){return!Rr&&"BroadcastChannel"in self&&(Rr=new BroadcastChannel("[Firebase] FID Change"),Rr.onmessage=t=>{gE(t.data.key,t.data.fid)}),Rr}function DP(){pE.size===0&&Rr&&(Rr.close(),Rr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP="firebase-installations-database",VP=1,$r="firebase-installations-store";let Ec=null;function Vf(){return Ec||(Ec=Gl(OP,VP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore($r)}}})),Ec}async function Pl(t,e){const n=du(t),i=(await Vf()).transaction($r,"readwrite"),s=i.objectStore($r),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&mE(t,e.fid),e}async function yE(t){const e=du(t),r=(await Vf()).transaction($r,"readwrite");await r.objectStore($r).delete(e),await r.done}async function fu(t,e){const n=du(t),i=(await Vf()).transaction($r,"readwrite"),s=i.objectStore($r),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&mE(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lf(t){let e;const n=await fu(t.appConfig,r=>{const i=LP(r),s=MP(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===qh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function LP(t){const e=t||{fid:RP(),registrationStatus:0};return vE(e)}function MP(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(zr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=jP(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:FP(t)}:{installationEntry:e}}async function jP(t,e){try{const n=await AP(t,e);return Pl(t.appConfig,n)}catch(n){throw aE(n)&&n.customData.serverCode===409?await yE(t.appConfig):await Pl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function FP(t){let e=await hy(t.appConfig);for(;e.registrationStatus===1;)await fE(100),e=await hy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Lf(t);return r||n}return e}function hy(t){return fu(t,e=>{if(!e)throw zr.create("installation-not-found");return vE(e)})}function vE(t){return UP(t)?{fid:t.fid,registrationStatus:0}:t}function UP(t){return t.registrationStatus===1&&t.registrationTime+iE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BP({appConfig:t,heartbeatServiceProvider:e},n){const r=zP(t,n),i=IP(t,n),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={installation:{sdkVersion:sE,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await dE(()=>fetch(r,l));if(u.ok){const h=await u.json();return uE(h)}else throw await cE("Generate Auth Token",u)}function zP(t,{fid:e}){return`${lE(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mf(t,e=!1){let n;const r=await fu(t.appConfig,s=>{if(!_E(s))throw zr.create("not-registered");const o=s.authToken;if(!e&&WP(o))return s;if(o.requestStatus===1)return n=$P(t,e),s;{if(!navigator.onLine)throw zr.create("app-offline");const l=KP(s);return n=qP(t,l),l}});return n?await n:r.authToken}async function $P(t,e){let n=await dy(t.appConfig);for(;n.authToken.requestStatus===1;)await fE(100),n=await dy(t.appConfig);const r=n.authToken;return r.requestStatus===0?Mf(t,e):r}function dy(t){return fu(t,e=>{if(!_E(e))throw zr.create("not-registered");const n=e.authToken;return QP(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function qP(t,e){try{const n=await BP(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Pl(t.appConfig,r),n}catch(n){if(aE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await yE(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Pl(t.appConfig,r)}throw n}}function _E(t){return t!==void 0&&t.registrationStatus===2}function WP(t){return t.requestStatus===2&&!HP(t)}function HP(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+_P}function KP(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function QP(t){return t.requestStatus===1&&t.requestTime+iE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GP(t){const e=t,{installationEntry:n,registrationPromise:r}=await Lf(e);return r?r.catch(console.error):Mf(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YP(t,e=!1){const n=t;return await XP(n),(await Mf(n,e)).token}async function XP(t){const{registrationPromise:e}=await Lf(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JP(t){if(!t||!t.options)throw Tc("App Configuration");if(!t.name)throw Tc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Tc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Tc(t){return zr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE="installations",ZP="installations-internal",eN=t=>{const e=t.getProvider("app").getImmediate(),n=JP(e),r=Wi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},tN=t=>{const e=t.getProvider("app").getImmediate(),n=Wi(e,wE).getImmediate();return{getId:()=>GP(n),getToken:i=>YP(n,i)}};function nN(){nn(new zt(wE,eN,"PUBLIC")),nn(new zt(ZP,tN,"PRIVATE"))}nN();Pt(rE,Of);Pt(rE,Of,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN="/firebase-messaging-sw.js",iN="/firebase-cloud-messaging-push-scope",EE="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",sN="https://fcmregistrations.googleapis.com/v1",TE="google.c.a.c_id",oN="google.c.a.c_l",aN="google.c.a.ts",lN="google.c.a.e";var fy;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(fy||(fy={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var vo;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(vo||(vo={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function uN(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="fcm_token_details_db",cN=5,py="fcm_token_object_Store";async function hN(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Ic))return null;let e=null;return(await Gl(Ic,cN,{upgrade:async(r,i,s,o)=>{var l;if(i<2||!r.objectStoreNames.contains(py))return;const u=o.objectStore(py),h=await u.index("fcmSenderId").get(t);if(await u.clear(),!!h){if(i===2){const f=h;if(!f.auth||!f.p256dh||!f.endpoint)return;e={token:f.fcmToken,createTime:(l=f.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:f.auth,p256dh:f.p256dh,endpoint:f.endpoint,swScope:f.swScope,vapidKey:typeof f.vapidKey=="string"?f.vapidKey:fn(f.vapidKey)}}}else if(i===3){const f=h;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:fn(f.auth),p256dh:fn(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:fn(f.vapidKey)}}}else if(i===4){const f=h;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:fn(f.auth),p256dh:fn(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:fn(f.vapidKey)}}}}}})).close(),await dc(Ic),await dc("fcm_vapid_details_db"),await dc("undefined"),dN(e)?e:null}function dN(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN="firebase-messaging-database",pN=1,_o="firebase-messaging-store";let Sc=null;function IE(){return Sc||(Sc=Gl(fN,pN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_o)}}})),Sc}async function mN(t){const e=SE(t),r=await(await IE()).transaction(_o).objectStore(_o).get(e);if(r)return r;{const i=await hN(t.appConfig.senderId);if(i)return await jf(t,i),i}}async function jf(t,e){const n=SE(t),i=(await IE()).transaction(_o,"readwrite");return await i.objectStore(_o).put(e,n),await i.done,e}function SE({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},ct=new Hr("messaging","Messaging",gN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yN(t,e){const n=await Uf(t),r=xE(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Ff(t.appConfig),i)).json()}catch(o){throw ct.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw ct.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw ct.create("token-subscribe-no-token");return s.token}async function vN(t,e){const n=await Uf(t),r=xE(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Ff(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw ct.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw ct.create("token-update-failed",{errorInfo:o})}if(!s.token)throw ct.create("token-update-no-token");return s.token}async function _N(t,e){const r={method:"DELETE",headers:await Uf(t)};try{const s=await(await fetch(`${Ff(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw ct.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw ct.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Ff({projectId:t}){return`${sN}/projects/${t}/registrations`}async function Uf({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function xE({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==EE&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=7*24*60*60*1e3;async function EN(t){const e=await IN(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:fn(e.getKey("auth")),p256dh:fn(e.getKey("p256dh"))},r=await mN(t.firebaseDependencies);if(r){if(SN(r.subscriptionOptions,n))return Date.now()>=r.createTime+wN?TN(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await _N(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return my(t.firebaseDependencies,n)}else return my(t.firebaseDependencies,n)}async function TN(t,e){try{const n=await vN(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await jf(t.firebaseDependencies,r),n}catch(n){throw n}}async function my(t,e){const r={token:await yN(t,e),createTime:Date.now(),subscriptionOptions:e};return await jf(t,r),r.token}async function IN(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:uN(e)})}function SN(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return xN(e,t),AN(e,t),kN(e,t),e}function xN(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function AN(t,e){e.data&&(t.data=e.data)}function kN(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const l=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;l&&(t.fcmOptions.link=l);const u=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;u&&(t.fcmOptions.analyticsLabel=u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CN(t){return typeof t=="object"&&!!t&&TE in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RN(t){if(!t||!t.options)throw xc("App Configuration Object");if(!t.name)throw xc("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw xc(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function xc(t){return ct.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=RN(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NN(t){try{t.swRegistration=await navigator.serviceWorker.register(rN,{scope:iN}),t.swRegistration.update().catch(()=>{})}catch(e){throw ct.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bN(t,e){if(!e&&!t.swRegistration&&await NN(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw ct.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DN(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=EE)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AE(t,e){if(!navigator)throw ct.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw ct.create("permission-blocked");return await DN(t,e==null?void 0:e.vapidKey),await bN(t,e==null?void 0:e.serviceWorkerRegistration),EN(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ON(t,e,n){const r=VN(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[TE],message_name:n[oN],message_time:n[aN],message_device_time:Math.floor(Date.now()/1e3)})}function VN(t){switch(t){case vo.NOTIFICATION_CLICKED:return"notification_open";case vo.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LN(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===vo.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(gy(n)):t.onMessageHandler.next(gy(n)));const r=n.data;CN(r)&&r[lN]==="1"&&await ON(t,n.messageType,r)}const yy="@firebase/messaging",vy="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=t=>{const e=new PN(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>LN(e,n)),e},jN=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>AE(e,r)}};function FN(){nn(new zt("messaging",MN,"PUBLIC")),nn(new zt("messaging-internal",jN,"PRIVATE")),Pt(yy,vy),Pt(yy,vy,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kE(){try{await $_()}catch{return!1}return typeof window<"u"&&z_()&&nx()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UN(t=zd()){return kE().then(e=>{if(!e)throw ct.create("unsupported-browser")},e=>{throw ct.create("indexed-db-unsupported")}),Wi(it(t),"messaging").getImmediate()}async function BN(t,e){return t=it(t),AE(t,e)}FN();const zN={apiKey:"AIzaSyACbnHcH9OPbZurDjWf8m1cazFOSSadYKE",authDomain:"deungbul-qt.firebaseapp.com",projectId:"deungbul-qt",storageBucket:"deungbul-qt.firebasestorage.app",messagingSenderId:"1048157032708",appId:"1:1048157032708:web:46aab740a361a9f5ebc051",measurementId:"G-GQXXJHHKL7"},$N="BCm1sLB19B--eH-e3FgGQhaxwZlWeoF7oA7Fa2V3FWZWE44quYgHDyugQNux5hIe7U7qhRSvRvLEERpojWaXqEo",Bf=H_(zN),Qt=eC(Bf),Wh=gP(Bf);let Ea=null;async function qN(){return Ea||(await kE().catch(()=>!1)?(Ea=UN(Bf),Ea):null)}function WN(t){sR(Wh,e=>{e?t(e):ZC(Wh).catch(n=>console.error("익명 로그인 실패",n))})}const Ta="qt_entries";function Nl(t=new Date){const e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${n}-${r}`}function HN(){const[t,e]=H.useState({}),[n,r]=H.useState(!0);H.useEffect(()=>{const l=m0(o0(Qt,Ta),g0("date","desc"));return E0(l,h=>{const f={};h.forEach(y=>{f[y.id]=y.data()}),e(f),r(!1)},h=>{console.error("entries 구독 실패",h),r(!1)})},[]);const i=H.useCallback(async(l,u)=>{const h=ar(Qt,Ta,l);await go(h,{date:l,...u,writtenAt:Kg()},{merge:!0})},[]),s=H.useCallback(async(l,u,h)=>{const f=ar(Qt,Ta,l);await go(f,{date:l,checked:u,comment:h??"",checkedAt:Kg()},{merge:!0})},[]),o=H.useCallback(async l=>{const u=ar(Qt,Ta,l);await w0(u)},[]);return{entries:t,loading:n,saveEntry:i,setCheck:s,deleteEntry:o}}const KN=["일","월","화","수","목","금","토"];function QN({entries:t,onSelectDate:e}){const[n,r]=H.useState(new Date),i=n.getFullYear(),s=n.getMonth(),l=new Date(i,s,1).getDay(),u=new Date(i,s+1,0).getDate(),h=Nl(),f=[];for(let v=0;v<l;v++)f.push(null);for(let v=1;v<=u;v++)f.push(v);const y=v=>{r(new Date(i,s+v,1))};return m.jsxs("div",{className:"px-4 pt-4",children:[m.jsxs("div",{className:"flex items-center justify-between mb-4",children:[m.jsx("button",{onClick:()=>y(-1),className:"text-faint text-xl px-3 py-1",children:"‹"}),m.jsxs("h2",{className:"font-display text-lg",children:[i,"년 ",s+1,"월"]}),m.jsx("button",{onClick:()=>y(1),className:"text-faint text-xl px-3 py-1",children:"›"})]}),m.jsx("div",{className:"grid grid-cols-7 gap-1 mb-2",children:KN.map(v=>m.jsx("div",{className:"text-center text-xs text-faint py-1",children:v},v))}),m.jsx("div",{className:"grid grid-cols-7 gap-1",children:f.map((v,k)=>{var F,j;if(v===null)return m.jsx("div",{},`empty-${k}`);const C=`${i}-${String(s+1).padStart(2,"0")}-${String(v).padStart(2,"0")}`,N=t[C],O=Array.isArray(N==null?void 0:N.sectionQA)?N.sectionQA.some(_=>{var p;return(p=_.answer)==null?void 0:p.trim()}):!1,I=Array.isArray(N==null?void 0:N.groupQA)?N.groupQA.some(_=>{var p;return(p=_.answer)==null?void 0:p.trim()}):!1,E=!!(O||I||(F=N==null?void 0:N.groupSummary)!=null&&F.trim()||(j=N==null?void 0:N.content)!=null&&j.trim()||Array.isArray(N==null?void 0:N.passageQA)&&N.passageQA.some(_=>{var p;return(p=_.answer)==null?void 0:p.trim()})),x=!!(N!=null&&N.checked),b=C===h;return m.jsxs("button",{onClick:()=>e(C),className:"flex flex-col items-center gap-0.5 py-1",children:[m.jsx("div",{className:["lamp-dot",x?"is-checked":E?"is-written":""].join(" "),style:b?{outline:"2px solid rgba(247,241,226,0.6)",outlineOffset:"2px"}:{},children:x&&m.jsx("span",{className:"rabbit-icon",children:"🐇"})}),m.jsx("span",{className:`text-[10px] ${b?"text-paper font-semibold":"text-faint"}`,children:v})]},C)})}),m.jsxs("div",{className:"flex gap-5 mt-6 text-xs text-faint justify-center pb-2",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("div",{style:{width:18,height:18,borderRadius:"50%",border:"1.5px solid #D9CFB8"}}),m.jsx("span",{children:"미작성"})]}),m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("div",{style:{width:18,height:18,borderRadius:"50%",background:"radial-gradient(circle, #fff5c0 0%, #E8A33D 60%, #F2C879 100%)",boxShadow:"0 0 8px 2px rgba(232,163,61,0.5)"}}),m.jsx("span",{children:"보름달 (작성)"})]}),m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("div",{style:{width:22,height:22,borderRadius:"50%",background:"radial-gradient(circle, #fff5c0 0%, #E8A33D 60%, #F2C879 100%)",boxShadow:"0 0 8px 2px rgba(232,163,61,0.5)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13},children:m.jsx("span",{style:{filter:"brightness(0) saturate(100%)"},children:"🐇"})}),m.jsx("span",{children:"코디네이터 확인"})]})]})]})}const Ac="units";function CE(){const[t,e]=H.useState([]),[n,r]=H.useState(!0);H.useEffect(()=>{const o=m0(o0(Qt,Ac),g0("startDate","asc"));return E0(o,u=>{const h=[];u.forEach(f=>h.push({id:f.id,...f.data()})),e(h),r(!1)},u=>{console.error("units 구독 실패",u),r(!1)})},[]);const i=H.useCallback(async(o,l)=>{const u=ar(Qt,Ac,o);await go(u,l,{merge:!1})},[]),s=H.useCallback(async o=>{await w0(ar(Qt,Ac,o))},[]);return{units:t,loading:n,saveUnit:i,deleteUnit:s}}function RE(t,e){const n=new Date(e+"T00:00:00"),r=n.getDay();if(r===0)return null;for(const i of t){if(!i.startDate||!Array.isArray(i.days))continue;const s=new Date(i.startDate+"T00:00:00"),o=Math.floor((n-s)/864e5);if(o<0)continue;const l=Math.floor(o/7);if(r===6){if(l===0)return{unitId:i.id,unitTitle:i.title,dayIndex:-1,isSaturdaySharing:!0,title:"코디네이터(소그룹)와의 나눔",sections:[],groupQuestions:i.groupQuestions??[]};continue}const u=r-1;if(l===0&&u>=0&&u<i.days.length)return{unitId:i.id,unitTitle:i.title,dayIndex:u,isSaturdaySharing:!1,...i.days[u],groupQuestions:i.groupQuestions??[]}}return null}function _y(){return Math.random().toString(36).slice(2,9)}function wy(t){if(!t)return[];if(Array.isArray(t.sections)&&t.sections.length>0)return t.sections;const e=Array.isArray(t.reflectionQuestions)?t.reflectionQuestions:[],n=[];return t.body&&n.push({type:"body",body:t.body,question:null}),e.forEach(r=>{n.push({type:"reflection",body:null,question:r})}),n}function GN({dateKey:t,entry:e,units:n,onSave:r,onDelete:i,onClose:s}){var R,S;const o=RE(n??[],t),l=(o==null?void 0:o.isSaturdaySharing)===!0,[u,h]=H.useState("view"),[f,y]=H.useState([]),[v,k]=H.useState([]),[C,N]=H.useState(""),[O,I]=H.useState(!1),[E,x]=H.useState(!1),b=Array.isArray(e==null?void 0:e.sectionQA)?e.sectionQA.some(Z=>{var se;return(se=Z.answer)==null?void 0:se.trim()}):!1,F=Array.isArray(e==null?void 0:e.groupQA)?e.groupQA.some(Z=>{var se;return(se=Z.answer)==null?void 0:se.trim()}):!1,j=!!(b||F||(R=e==null?void 0:e.groupSummary)!=null&&R.trim()||(S=e==null?void 0:e.groupSharing)!=null&&S.trim());H.useEffect(()=>{if(h(j?"view":"edit"),x(!1),N((e==null?void 0:e.groupSummary)??""),o){const Z=Array.isArray(e==null?void 0:e.groupQA)?e.groupQA:[];if(k((o.groupQuestions??[]).map((se,be)=>{var Ce,B;return{id:((Ce=Z[be])==null?void 0:Ce.id)??_y(),question:se,answer:((B=Z[be])==null?void 0:B.answer)??""}})),l)y([]);else{const se=wy(o),be=Array.isArray(e==null?void 0:e.sectionQA)?e.sectionQA:[];y(se.map((Ce,B)=>{var K,Y;return{id:((K=be[B])==null?void 0:K.id)??_y(),question:Ce.question??"",answer:((Y=be[B])==null?void 0:Y.answer)??""}}))}}else y([]),k([])},[t,e]);const _=async()=>{O||(I(!0),await r(t,{passage:(o==null?void 0:o.title)??"",content:o?`${o.unitTitle} - ${o.title}`:"",sectionQA:f,groupQA:v,groupSummary:C}),I(!1),s())},p=async()=>{if(!E){x(!0);return}I(!0),await i(t),I(!1),s()},w=(e==null?void 0:e.checked)||(e==null?void 0:e.comment),T=Array.isArray(e==null?void 0:e.sectionQA)?e.sectionQA:[];Array.isArray(e==null?void 0:e.groupQA)&&e.groupQA;const A=!l&&o?wy(o):[];return l?m.jsxs("div",{className:"px-5 pb-10",children:[m.jsxs("div",{className:"flex items-center justify-between mb-5 pt-6",children:[m.jsx("button",{onClick:s,className:"text-faint",children:"‹ 닫기"}),m.jsx("h2",{className:"font-display text-base",children:t}),m.jsx("div",{className:"w-10"})]}),m.jsxs("div",{className:"mb-6 border border-sage/40 rounded-xl px-4 py-3 bg-sage/5",children:[m.jsx("p",{className:"text-xs text-sage mb-0.5",children:o.unitTitle}),m.jsx("p",{className:"font-display text-base text-sage",children:"코디네이터(소그룹)와의 나눔"})]}),u==="view"?m.jsxs(m.Fragment,{children:[v.length>0&&m.jsxs("div",{className:"mb-6",children:[m.jsx("p",{className:"text-xs text-sage font-semibold mb-1",children:"*개인이 생각할 질문"}),m.jsx("p",{className:"text-xs text-faint/70 mb-3",children:"다음의 질문들은 이미 2단원을 공부하면서 생각했던 질문들입니다. 다시 한 번 질문들을 생각하시며 정리해보십시오."}),m.jsx("div",{className:"flex flex-col gap-3",children:v.map((Z,se)=>m.jsxs("div",{className:"border border-sage/30 rounded-xl p-3 bg-sage/5",children:[m.jsxs("p",{className:"text-paper text-sm font-semibold mb-1",children:[se+1,". ",Z.question]}),m.jsx("p",{className:"text-paper text-sm leading-relaxed whitespace-pre-wrap",children:Z.answer||"-"})]},Z.id??se))})]}),m.jsxs("div",{className:"mb-6",children:[m.jsx("p",{className:"text-xs text-sage font-semibold mb-1",children:"*코디네이터(소그룹)와 나눌 생각 정리하기"}),m.jsx("p",{className:"text-xs text-faint/70 mb-3",children:"잠언 1장 1절에서 7절을 읽을 때 다가온 구절(lexio)을 쪽지에 적었을텐데, 그 쪽지묵상 말씀과 함께 몇 번이나 읽으며 묵상했는지, 또한 깨달은 것은 무엇인지를 적고 동시에 내가 대답한 기도(oratio)를 정리하십시오."}),m.jsx("p",{className:"text-paper text-sm leading-relaxed whitespace-pre-wrap",children:(e==null?void 0:e.groupSummary)||"-"})]}),m.jsxs("div",{className:"mb-6 border border-sage/20 rounded-xl p-3 bg-sage/5",children:[m.jsx("p",{className:"text-xs text-sage font-semibold mb-1",children:"*코디네이터(소그룹)에서 나누기"}),m.jsx("p",{className:"text-xs text-faint/70",children:"정리된 생각을 코디네이터에게 먼저 얘기하고 나누는 시간을 가지십시오."})]}),w&&m.jsxs("div",{className:"mt-2 mb-6 border border-sage/50 rounded-xl p-4 bg-sage/10",children:[m.jsx("p",{className:"text-sage text-sm font-semibold mb-1",children:e!=null&&e.checked?"코디네이터가 확인했어요 🐇":"코디네이터 코멘트"}),(e==null?void 0:e.comment)&&m.jsx("p",{className:"text-paper text-sm leading-relaxed",children:e.comment})]}),m.jsx("button",{onClick:()=>h("edit"),className:"w-full border border-sage text-sage font-semibold py-4 rounded-2xl mb-3",children:"수정하기"}),E?m.jsxs("div",{className:"border border-red-400/40 rounded-xl p-4 text-center",children:[m.jsx("p",{className:"text-sm text-paper mb-3",children:"정말 삭제할까요? 되돌릴 수 없어요."}),m.jsxs("div",{className:"flex gap-2",children:[m.jsx("button",{onClick:()=>x(!1),className:"flex-1 border border-faint text-faint py-2 rounded-xl text-sm",children:"취소"}),m.jsx("button",{onClick:p,disabled:O,className:"flex-1 bg-red-400/80 text-nightDeep py-2 rounded-xl text-sm font-semibold disabled:opacity-60",children:O?"삭제 중...":"삭제하기"})]})]}):m.jsx("button",{onClick:p,className:"w-full text-faint text-sm py-2",children:"이 날짜 기록 삭제"})]}):m.jsxs(m.Fragment,{children:[v.length>0&&m.jsxs("div",{className:"mb-6",children:[m.jsx("p",{className:"text-xs text-sage font-semibold mb-1",children:"*개인이 생각할 질문"}),m.jsx("p",{className:"text-xs text-faint/70 mb-3",children:"다음의 질문들은 이미 2단원을 공부하면서 생각했던 질문들입니다. 다시 한 번 질문들을 생각하시며 정리해보십시오."}),m.jsx("div",{className:"flex flex-col gap-3",children:v.map((Z,se)=>m.jsxs("div",{className:"border border-sage/30 rounded-xl p-3 bg-sage/5",children:[m.jsxs("p",{className:"text-paper text-sm font-semibold mb-2",children:[se+1,". ",Z.question]}),m.jsx("textarea",{value:Z.answer,onChange:be=>{const Ce=[...v];Ce[se]={...Ce[se],answer:be.target.value},k(Ce)},rows:3,placeholder:"답변을 적어주세요",className:"w-full bg-night/40 border border-faint/40 rounded-xl p-3 text-paper text-sm placeholder:text-faint/60 focus:outline-none focus:border-sage resize-none"})]},Z.id))})]}),m.jsxs("div",{className:"mb-6 border border-sage/40 rounded-xl p-4 bg-sage/5",children:[m.jsx("p",{className:"text-xs text-sage font-semibold mb-1",children:"*코디네이터(소그룹)와 나눌 생각 정리하기"}),m.jsx("p",{className:"text-xs text-faint/70 mb-3",children:"잠언 1장 1절에서 7절을 읽을 때 다가온 구절(lexio)을 쪽지에 적었을텐데, 그 쪽지묵상 말씀과 함께 몇 번이나 읽으며 묵상했는지, 또한 깨달은 것은 무엇인지를 적고 동시에 내가 대답한 기도(oratio)를 정리하십시오."}),m.jsx("textarea",{value:C,onChange:Z=>N(Z.target.value),rows:6,placeholder:"깨닫게 된 것을 정리하고 나눔 후 느낀 점도 함께 적어두세요",className:"w-full bg-night/40 border border-faint/40 rounded-xl p-3 text-paper text-sm placeholder:text-faint/60 focus:outline-none focus:border-sage resize-none"})]}),m.jsxs("div",{className:"mb-6 border border-sage/20 rounded-xl p-3 bg-sage/5",children:[m.jsx("p",{className:"text-xs text-sage font-semibold mb-1",children:"*코디네이터(소그룹)에서 나누기"}),m.jsx("p",{className:"text-xs text-faint/70",children:"정리된 생각을 코디네이터에게 먼저 얘기하고 나누는 시간을 가지십시오."})]}),m.jsxs("div",{className:"flex gap-3",children:[j&&m.jsx("button",{onClick:()=>h("view"),className:"flex-1 border border-faint text-faint font-semibold py-4 rounded-2xl",children:"취소"}),m.jsx("button",{onClick:_,disabled:O,className:"flex-1 bg-lamp text-nightDeep font-semibold py-4 rounded-2xl shadow-glow disabled:opacity-60",children:O?"저장 중...":"저장하기"})]})]})]}):m.jsxs("div",{className:"px-5 pb-10",children:[m.jsxs("div",{className:"flex items-center justify-between mb-5 pt-6",children:[m.jsx("button",{onClick:s,className:"text-faint",children:"‹ 닫기"}),m.jsx("h2",{className:"font-display text-base",children:t}),m.jsx("div",{className:"w-10"})]}),o?m.jsxs("div",{className:"mb-4 border border-lamp/30 rounded-xl px-4 py-3 bg-lamp/5",children:[m.jsx("p",{className:"text-xs text-lampSoft mb-0.5",children:o.unitTitle}),m.jsx("p",{className:"font-display text-base text-lamp",children:o.title})]}):m.jsx("div",{className:"mb-6 border border-faint/30 rounded-xl p-4 text-center text-faint text-sm",children:"이 날짜에는 등록된 본문이 없어요 (주말이거나 단원 범위 밖)"}),u==="view"?m.jsxs(m.Fragment,{children:[A.map((Z,se)=>{var be;return m.jsxs("div",{children:[Z.body&&m.jsx("div",{className:"mb-4 border border-lamp/20 rounded-xl p-4 bg-lamp/5",children:m.jsx("p",{className:"text-paper text-sm leading-relaxed whitespace-pre-wrap",children:Z.body})}),Z.question&&m.jsxs("div",{className:"mb-5 border border-faint/40 rounded-xl p-3",children:[m.jsx("p",{className:"text-xs text-lampSoft mb-1",children:"묵상 질문"}),m.jsx("p",{className:"text-paper text-sm font-semibold mb-2",children:Z.question}),m.jsx("p",{className:"text-paper text-sm leading-relaxed whitespace-pre-wrap",children:((be=T[se])==null?void 0:be.answer)||"-"})]})]},se)}),w&&m.jsxs("div",{className:"mt-2 mb-6 border border-sage/50 rounded-xl p-4 bg-sage/10",children:[m.jsx("p",{className:"text-sage text-sm font-semibold mb-1",children:e!=null&&e.checked?"코디네이터가 확인했어요 🐇":"코디네이터 코멘트"}),(e==null?void 0:e.comment)&&m.jsx("p",{className:"text-paper text-sm leading-relaxed",children:e.comment})]}),m.jsx("button",{onClick:()=>h("edit"),className:"w-full border border-lamp text-lamp font-semibold py-4 rounded-2xl mb-3",children:"수정하기"}),E?m.jsxs("div",{className:"border border-red-400/40 rounded-xl p-4 text-center",children:[m.jsx("p",{className:"text-sm text-paper mb-3",children:"정말 삭제할까요? 되돌릴 수 없어요."}),m.jsxs("div",{className:"flex gap-2",children:[m.jsx("button",{onClick:()=>x(!1),className:"flex-1 border border-faint text-faint py-2 rounded-xl text-sm",children:"취소"}),m.jsx("button",{onClick:p,disabled:O,className:"flex-1 bg-red-400/80 text-nightDeep py-2 rounded-xl text-sm font-semibold disabled:opacity-60",children:O?"삭제 중...":"삭제하기"})]})]}):m.jsx("button",{onClick:p,className:"w-full text-faint text-sm py-2",children:"이 날짜 기록 삭제"})]}):m.jsxs(m.Fragment,{children:[A.map((Z,se)=>{var be;return m.jsxs("div",{children:[Z.body&&m.jsx("div",{className:"mb-4 border border-lamp/20 rounded-xl p-4 bg-lamp/5",children:m.jsx("p",{className:"text-paper text-sm leading-relaxed whitespace-pre-wrap",children:Z.body})}),Z.question&&m.jsxs("div",{className:"mb-5 border border-faint/40 rounded-xl p-3",children:[m.jsx("p",{className:"text-xs text-lampSoft mb-1",children:"묵상 질문"}),m.jsx("p",{className:"text-paper text-sm font-semibold mb-2",children:Z.question}),m.jsx("textarea",{value:((be=f[se])==null?void 0:be.answer)??"",onChange:Ce=>{const B=[...f];B[se]={...B[se],answer:Ce.target.value},y(B)},rows:3,placeholder:"답변을 적어주세요",className:"w-full bg-night/40 border border-faint/40 rounded-xl p-3 text-paper text-sm placeholder:text-faint/60 focus:outline-none focus:border-lamp resize-none"})]})]},se)}),m.jsxs("div",{className:"flex gap-3",children:[j&&m.jsx("button",{onClick:()=>h("view"),className:"flex-1 border border-faint text-faint font-semibold py-4 rounded-2xl",children:"취소"}),m.jsx("button",{onClick:_,disabled:O,className:"flex-1 bg-lamp text-nightDeep font-semibold py-4 rounded-2xl shadow-glow disabled:opacity-60",children:O?"저장 중...":"저장하기"})]})]})]})}function YN({dateKey:t,entry:e,units:n,onCheck:r,onClose:i}){var O;const s=RE(n??[],t),[o,l]=H.useState(""),[u,h]=H.useState(!1);H.useEffect(()=>{l((e==null?void 0:e.comment)??"")},[t,e]);const f=(s==null?void 0:s.sections)??[],y=Array.isArray(e==null?void 0:e.sectionQA)?e.sectionQA:[],v=Array.isArray(e==null?void 0:e.groupQA)?e.groupQA:[],k=!!(y.some(I=>{var E;return(E=I.answer)==null?void 0:E.trim()})||v.some(I=>{var E;return(E=I.answer)==null?void 0:E.trim()})||(O=e==null?void 0:e.groupSummary)!=null&&O.trim()),C=async()=>{h(!0),await r(t,!(e!=null&&e.checked),o),h(!1),e!=null&&e.checked||i()},N=async()=>{await r(t,(e==null?void 0:e.checked)??!1,o)};return m.jsxs("div",{className:"px-5 pb-10",children:[m.jsxs("div",{className:"flex items-center justify-between mb-5 pt-6",children:[m.jsx("button",{onClick:i,className:"text-faint",children:"‹ 닫기"}),m.jsx("h2",{className:"font-display text-base",children:t}),m.jsx("div",{className:"w-10"})]}),s&&m.jsxs("div",{className:"mb-4 border border-lamp/30 rounded-xl px-4 py-3 bg-lamp/5",children:[m.jsx("p",{className:"text-xs text-lampSoft mb-0.5",children:s.unitTitle}),m.jsx("p",{className:"font-display text-base text-lamp",children:s.title})]}),k?m.jsxs(m.Fragment,{children:[f.map((I,E)=>{var x;return m.jsxs("div",{children:[m.jsx("div",{className:"mb-4 border border-lamp/20 rounded-xl p-4 bg-lamp/5",children:m.jsx("p",{className:"text-paper text-sm leading-relaxed whitespace-pre-wrap",children:I.body})}),I.question&&m.jsxs("div",{className:"mb-5 border border-faint/40 rounded-xl p-3",children:[m.jsx("p",{className:"text-xs text-lampSoft mb-1",children:"묵상 질문"}),m.jsx("p",{className:"text-paper text-sm font-semibold mb-2",children:I.question}),m.jsx("p",{className:"text-paper text-sm leading-relaxed whitespace-pre-wrap",children:((x=y[E])==null?void 0:x.answer)||"-"})]})]},E)}),v.length>0&&m.jsxs("div",{className:"mb-5",children:[m.jsx("p",{className:"text-xs text-sage mb-2",children:"코디네이터(소그룹)와의 나눔 — 개인 생각 질문"}),m.jsx("div",{className:"flex flex-col gap-3",children:v.map((I,E)=>m.jsxs("div",{className:"border border-sage/40 rounded-xl p-3 bg-sage/5",children:[m.jsx("p",{className:"text-paper text-sm font-semibold mb-1",children:I.question}),m.jsx("p",{className:"text-paper text-sm leading-relaxed whitespace-pre-wrap",children:I.answer||"-"})]},I.id??E))})]}),(e==null?void 0:e.groupSummary)&&m.jsxs("div",{className:"mb-5 border border-sage/40 rounded-xl p-3 bg-sage/5",children:[m.jsx("p",{className:"text-xs text-sage mb-1",children:"코디네이터와 나눌 내용 정리"}),m.jsx("p",{className:"text-paper text-sm leading-relaxed whitespace-pre-wrap",children:e.groupSummary})]}),m.jsxs("div",{className:"mb-5",children:[m.jsx("p",{className:"text-xs text-lampSoft mb-2",children:"피드백 코멘트"}),m.jsx("textarea",{value:o,onChange:I=>l(I.target.value),onBlur:N,rows:4,placeholder:"피드백이나 격려를 남겨주세요",className:"w-full bg-night/40 border border-faint/40 rounded-xl p-3 text-paper placeholder:text-faint/60 focus:outline-none focus:border-sage resize-none"})]}),m.jsx("button",{onClick:C,disabled:u,className:`w-full font-semibold py-4 rounded-2xl transition-colors disabled:opacity-60 ${e!=null&&e.checked?"bg-transparent border border-sage text-sage":"bg-sage text-nightDeep"}`,children:u?"처리 중...":e!=null&&e.checked?"확인 취소하기":"확인했어요 🐇"})]}):m.jsx("div",{className:"text-center text-faint py-16",children:m.jsx("p",{children:"아직 작성되지 않았어요."})})]})}function XN({role:t}){const[e,n]=H.useState(t==="writer"?{time:"23:00"}:{mode:"off",time:"21:00",intervalDays:3}),[r,i]=H.useState("idle"),[s,o]=H.useState(!1);H.useEffect(()=>{const h=ar(Qt,"settings",t);gC(h).then(f=>{f.exists()&&n(y=>({...y,...f.data()}))})},[t]);const l=async()=>{await go(ar(Qt,"settings",t),e,{merge:!0}),o(!0),setTimeout(()=>o(!1),1500)},u=async()=>{var h;try{if(await Notification.requestPermission()!=="granted"){i("denied");return}const y=await qN();if(!y){i("unsupported");return}const v=await navigator.serviceWorker.ready,k=await BN(y,{vapidKey:$N,serviceWorkerRegistration:v});k&&(await go(ar(Qt,"fcm_tokens",t),{token:k,updatedAt:Date.now(),uid:((h=Wh.currentUser)==null?void 0:h.uid)??null},{merge:!0}),i("granted"))}catch(f){console.error("알림 등록 실패",f),i("unsupported")}};return m.jsxs("div",{className:"px-5 pb-10",children:[m.jsx("h2",{className:"font-display text-lg mb-6",children:"알림 설정"}),m.jsxs("div",{className:"border border-faint/40 rounded-2xl p-4 mb-6",children:[m.jsx("p",{className:"text-sm text-faint mb-3",children:"이 기기로 알림을 받으려면 먼저 푸시 권한을 허용해 주세요. (아이폰은 홈 화면에 추가한 뒤에만 동작해요)"}),m.jsx("button",{onClick:u,className:"w-full bg-lamp text-nightDeep font-semibold py-3 rounded-xl",children:r==="granted"?"알림 켜짐 ✓":"이 기기에서 알림 받기"}),r==="denied"&&m.jsx("p",{className:"text-xs text-red-300 mt-2",children:"알림이 거부되어 있어요. 기기 설정에서 허용해 주세요."}),r==="unsupported"&&m.jsx("p",{className:"text-xs text-red-300 mt-2",children:"이 브라우저/상태에서는 푸시가 지원되지 않아요. 홈 화면에 추가한 뒤 다시 시도해 주세요."})]}),t==="writer"?m.jsxs("div",{className:"border border-faint/40 rounded-2xl p-4",children:[m.jsx("p",{className:"text-xs text-lampSoft mb-2",children:"매일 알림 시간"}),m.jsx("input",{type:"time",value:e.time,onChange:h=>n({...e,time:h.target.value}),className:"bg-night/40 border border-faint/40 rounded-xl px-4 py-3 text-paper"}),m.jsx("p",{className:"text-xs text-faint mt-3",children:"작성자는 매일 같은 시간에 알림을 받아요."})]}):m.jsxs("div",{className:"border border-faint/40 rounded-2xl p-4 flex flex-col gap-4",children:[m.jsxs("div",{children:[m.jsx("p",{className:"text-xs text-lampSoft mb-2",children:"알림 방식"}),m.jsx("div",{className:"flex gap-2",children:[{v:"off",label:"안 함"},{v:"daily",label:"매일"},{v:"interval",label:"N일마다"}].map(h=>m.jsx("button",{onClick:()=>n({...e,mode:h.v}),className:`flex-1 py-2 rounded-xl text-sm border ${e.mode===h.v?"bg-sage text-nightDeep border-sage":"border-faint/40 text-faint"}`,children:h.label},h.v))})]}),e.mode!=="off"&&m.jsxs("div",{children:[m.jsx("p",{className:"text-xs text-lampSoft mb-2",children:"시간"}),m.jsx("input",{type:"time",value:e.time,onChange:h=>n({...e,time:h.target.value}),className:"bg-night/40 border border-faint/40 rounded-xl px-4 py-3 text-paper"})]}),e.mode==="interval"&&m.jsxs("div",{children:[m.jsx("p",{className:"text-xs text-lampSoft mb-2",children:"며칠마다"}),m.jsx("input",{type:"number",min:1,max:30,value:e.intervalDays,onChange:h=>n({...e,intervalDays:Number(h.target.value)}),className:"bg-night/40 border border-faint/40 rounded-xl px-4 py-3 text-paper w-24"}),m.jsx("span",{className:"text-faint text-sm ml-2",children:"일마다"})]})]}),m.jsx("button",{onClick:l,className:"w-full mt-6 bg-transparent border border-lamp text-lamp font-semibold py-3 rounded-xl",children:s?"저장됨":"설정 저장"})]})}function JN(t){var r;let e=0;const n=new Date;for(;;){const i=Nl(n);if((r=t[i])!=null&&r.content)e+=1,n.setDate(n.getDate()-1);else break}return e}function ZN(t){var u,h;const e=new Date,n=e.getFullYear(),r=e.getMonth(),i=new Date(n,r+1,0).getDate(),s=e.getDate();let o=0,l=0;for(let f=1;f<=s;f++){const y=`${n}-${String(r+1).padStart(2,"0")}-${String(f).padStart(2,"0")}`;(u=t[y])!=null&&u.content&&(o+=1),(h=t[y])!=null&&h.checked&&(l+=1)}return{written:o,checked:l,total:i,soFar:s}}function eb({entries:t}){const e=JN(t),{written:n,checked:r,soFar:i}=ZN(t);return m.jsxs("div",{className:"px-5 pt-6 pb-10",children:[m.jsx("h2",{className:"font-display text-lg mb-6",children:"타고 있는 등불"}),m.jsxs("div",{className:"border border-faint/40 rounded-2xl p-6 mb-4 text-center",children:[m.jsx("p",{className:"text-5xl font-display text-lamp",children:e}),m.jsx("p",{className:"text-faint text-sm mt-1",children:"일째 연속 작성 중"})]}),m.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[m.jsx(Ey,{label:"이번 달 작성",value:`${n} / ${i}일`}),m.jsx(Ey,{label:"이번 달 확인",value:`${r} / ${i}일`})]})]})}function Ey({label:t,value:e}){return m.jsxs("div",{className:"border border-faint/40 rounded-2xl p-4 text-center",children:[m.jsx("p",{className:"text-paper text-lg font-display",children:e}),m.jsx("p",{className:"text-faint text-xs mt-1",children:t})]})}function tb(){return Math.random().toString(36).slice(2,9)}function Kt(){return{title:"",body:"",reflectionQuestions:[""]}}function nb(){return{title:"",startDate:"",days:[Kt(),Kt(),Kt(),Kt(),Kt()],groupQuestions:[""]}}function rb({onClose:t}){const{units:e,saveUnit:n,deleteUnit:r}=CE(),[i,s]=H.useState(null),[o,l]=H.useState(null),[u,h]=H.useState(!1),[f,y]=H.useState(null),v=H.useRef(),k=async C=>{var O;const N=(O=C.target.files)==null?void 0:O[0];if(N){h(!0),y(null);try{const I=await N.text(),E=JSON.parse(I),x=Array.isArray(E)?E:[E];for(const b of x){if(!b.id||!b.title||!b.startDate||!Array.isArray(b.days))throw new Error(`필수 필드(id, title, startDate, days) 누락: ${b.title||"?"}`);await n(b.id,{title:b.title,startDate:b.startDate,days:b.days,groupQuestions:b.groupQuestions??[]})}y({ok:!0,text:`${x.length}개 단원을 가져왔어요 ✓`})}catch(I){y({ok:!1,text:`오류: ${I.message}`})}finally{h(!1),C.target.value=""}}};return i?m.jsx(sb,{unit:i,onCancel:()=>s(null),onSaved:()=>s(null),saveUnit:n}):m.jsxs("div",{className:"px-5 pb-10",children:[m.jsxs("div",{className:"flex items-center justify-between mb-5 pt-6",children:[m.jsx("button",{onClick:t,className:"text-faint",children:"‹ 닫기"}),m.jsx("h2",{className:"font-display text-base",children:"본문 관리"}),m.jsx("div",{className:"w-10"})]}),m.jsx("button",{onClick:()=>s({...nb(),id:"unit_"+tb()}),className:"w-full bg-lamp text-nightDeep font-semibold py-4 rounded-2xl shadow-glow mb-3",children:"+ 새 단원 추가"}),m.jsx("button",{onClick:()=>{var C;return(C=v.current)==null?void 0:C.click()},disabled:u,className:"w-full border border-lamp text-lamp font-semibold py-4 rounded-2xl mb-2 disabled:opacity-60",children:u?"가져오는 중...":"📂 JSON으로 단원 가져오기"}),m.jsx("input",{ref:v,type:"file",accept:".json",className:"hidden",onChange:k}),f&&m.jsx("p",{className:`text-sm text-center mb-4 ${f.ok?"text-lamp":"text-red-400"}`,children:f.text}),e.length===0&&m.jsx("p",{className:"text-faint text-sm text-center py-8",children:"등록된 단원이 없어요."}),m.jsx("div",{className:"flex flex-col gap-3 mt-3",children:e.map(C=>m.jsxs("div",{className:"border border-faint/30 rounded-xl p-4",children:[m.jsx("p",{className:"text-paper font-semibold mb-1",children:C.title||"(제목 없음)"}),m.jsxs("p",{className:"text-faint text-xs mb-3",children:["시작일(월요일): ",C.startDate]}),m.jsxs("div",{className:"flex gap-2",children:[m.jsx("button",{onClick:()=>s(C),className:"flex-1 border border-lamp text-lamp text-sm py-2 rounded-xl",children:"수정"}),o===C.id?m.jsx("button",{onClick:async()=>{await r(C.id),l(null)},className:"flex-1 bg-red-400/80 text-nightDeep text-sm py-2 rounded-xl font-semibold",children:"정말 삭제"}):m.jsx("button",{onClick:()=>l(C.id),className:"flex-1 border border-faint text-faint text-sm py-2 rounded-xl",children:"삭제"})]})]},C.id))})]})}const ib=["월요일","화요일","수요일","목요일","금요일"];function sb({unit:t,onCancel:e,onSaved:n,saveUnit:r}){var j;const[i,s]=H.useState(t.title||""),[o,l]=H.useState(t.startDate||""),[u,h]=H.useState(t.days&&t.days.length===5?t.days.map(_=>{var p;return{title:_.title||"",body:_.body||"",reflectionQuestions:(p=_.reflectionQuestions)!=null&&p.length?_.reflectionQuestions:[""]}}):[Kt(),Kt(),Kt(),Kt(),Kt()]),[f,y]=H.useState((j=t.groupQuestions)!=null&&j.length?t.groupQuestions:[""]),[v,k]=H.useState(!1),C=(_,p,w)=>{h(T=>T.map((A,R)=>R===_?{...A,[p]:w}:A))},N=(_,p,w)=>{h(T=>T.map((A,R)=>{if(R!==_)return A;const S=[...A.reflectionQuestions];return S[p]=w,{...A,reflectionQuestions:S}}))},O=_=>{h(p=>p.map((w,T)=>T===_?{...w,reflectionQuestions:[...w.reflectionQuestions,""]}:w))},I=(_,p)=>{h(w=>w.map((T,A)=>A!==_||T.reflectionQuestions.length<=1?T:{...T,reflectionQuestions:T.reflectionQuestions.filter((R,S)=>S!==p)}))},E=(_,p)=>{y(w=>w.map((T,A)=>A===_?p:T))},x=()=>y(_=>[..._,""]),b=_=>{y(p=>p.length>1?p.filter((w,T)=>T!==_):p)},F=async()=>{if(!i.trim()||!o){alert("단원 제목과 시작일(월요일)을 입력해 주세요.");return}k(!0);const _={title:i.trim(),startDate:o,days:u.map(p=>({title:p.title.trim(),body:p.body,reflectionQuestions:p.reflectionQuestions.map(w=>w.trim()).filter(Boolean)})),groupQuestions:f.map(p=>p.trim()).filter(Boolean)};await r(t.id,_),k(!1),n()};return m.jsxs("div",{className:"px-5 pb-10",children:[m.jsxs("div",{className:"flex items-center justify-between mb-5 pt-6",children:[m.jsx("button",{onClick:e,className:"text-faint",children:"‹ 취소"}),m.jsx("h2",{className:"font-display text-base",children:"단원 편집"}),m.jsx("div",{className:"w-10"})]}),m.jsx(Ia,{label:"단원 제목",children:m.jsx("input",{value:i,onChange:_=>s(_.target.value),placeholder:"예) 2단원 ○○○",className:"w-full bg-transparent border-b border-faint pb-2 text-paper placeholder:text-faint/60 focus:outline-none focus:border-lamp"})}),m.jsx(Ia,{label:"시작일 (이 단원의 월요일)",children:m.jsx("input",{type:"date",value:o,onChange:_=>l(_.target.value),className:"bg-night/40 border border-faint/40 rounded-xl px-4 py-3 text-paper"})}),u.map((_,p)=>m.jsxs("div",{className:"mb-6 border border-faint/30 rounded-xl p-4",children:[m.jsxs("p",{className:"text-lamp text-sm font-semibold mb-3",children:[ib[p]," 본문"]}),m.jsx(Ia,{label:"본문 제목",children:m.jsx("input",{value:_.title,onChange:w=>C(p,"title",w.target.value),placeholder:"예) 01. 예수가 모르는 크리스천",className:"w-full bg-transparent border-b border-faint/50 pb-2 text-paper text-sm placeholder:text-faint/60 focus:outline-none focus:border-lamp"})}),m.jsx(Ia,{label:"본문 내용",children:m.jsx("textarea",{value:_.body,onChange:w=>C(p,"body",w.target.value),rows:8,placeholder:"본문 전체 텍스트를 붙여넣으세요",className:"w-full bg-night/40 border border-faint/40 rounded-xl p-3 text-paper text-sm placeholder:text-faint/60 focus:outline-none focus:border-lamp resize-none"})}),m.jsxs("div",{className:"mb-2",children:[m.jsxs("div",{className:"flex items-center justify-between mb-2",children:[m.jsx("p",{className:"text-xs text-lampSoft",children:"묵상 질문"}),m.jsx("button",{onClick:()=>O(p),type:"button",className:"text-xs text-lamp border border-lamp/50 rounded-lg px-2 py-1",children:"+ 질문 추가"})]}),m.jsx("div",{className:"flex flex-col gap-2",children:_.reflectionQuestions.map((w,T)=>m.jsxs("div",{className:"flex gap-2 items-start",children:[m.jsx("textarea",{value:w,onChange:A=>N(p,T,A.target.value),rows:2,placeholder:`묵상질문 ${T+1}`,className:"flex-1 bg-night/40 border border-faint/40 rounded-xl p-2 text-paper text-sm placeholder:text-faint/60 focus:outline-none focus:border-lamp resize-none"}),_.reflectionQuestions.length>1&&m.jsx("button",{onClick:()=>I(p,T),type:"button",className:"text-xs text-faint underline mt-2",children:"삭제"})]},T))})]})]},p)),m.jsxs("div",{className:"mb-6 border border-sage/40 rounded-xl p-4 bg-sage/5",children:[m.jsxs("div",{className:"flex items-center justify-between mb-3",children:[m.jsx("p",{className:"text-sage text-sm font-semibold",children:"코디네이터(소그룹)와 나눔 질문"}),m.jsx("button",{onClick:x,type:"button",className:"text-xs text-sage border border-sage/50 rounded-lg px-2 py-1",children:"+ 질문 추가"})]}),m.jsx("div",{className:"flex flex-col gap-2",children:f.map((_,p)=>m.jsxs("div",{className:"flex gap-2 items-start",children:[m.jsx("textarea",{value:_,onChange:w=>E(p,w.target.value),rows:2,placeholder:`나눔 질문 ${p+1}`,className:"flex-1 bg-night/40 border border-faint/40 rounded-xl p-2 text-paper text-sm placeholder:text-faint/60 focus:outline-none focus:border-sage resize-none"}),f.length>1&&m.jsx("button",{onClick:()=>b(p),type:"button",className:"text-xs text-faint underline mt-2",children:"삭제"})]},p))})]}),m.jsx("button",{onClick:F,disabled:v,className:"w-full bg-lamp text-nightDeep font-semibold py-4 rounded-2xl shadow-glow disabled:opacity-60",children:v?"저장 중...":"단원 저장하기"})]})}function Ia({label:t,children:e}){return m.jsxs("div",{className:"mb-4",children:[m.jsx("p",{className:"text-xs text-lampSoft mb-2",children:t}),e]})}const ob=[{version:"v1.3",date:"2026-07-04",items:["토요일 코디네이터 나눔 화면 추가","홈 화면 신설 — 캘린더·오늘·등불·설정 바로가기","THE PLAN 클릭 시 홈으로 이동","2단원 말씀의 능력 본문 등록"]},{version:"v1.2",date:"2026-06-22",items:["JSON으로 단원 가져오기 기능 추가","본문 구조 sections 배열 방식으로 개선","묵상 질문 위치 원문 그대로 유지"]},{version:"v1.1",date:"2026-06-10",items:["코디네이터 나눔 필드 토요일에만 표시","단원 관리(UnitManager) 화면 추가","알림 설정 기능 추가"]},{version:"v1.0",date:"2026-06-01",items:["더플랜 앱 최초 출시","캘린더·오늘·등불·설정 탭 구성","1단원 본문 탑재","Firebase 연동 및 코디네이터 확인 기능"]}];function ab(){return m.jsxs("div",{className:"mt-6",children:[m.jsx("p",{className:"text-xs text-lampSoft mb-4 tracking-widest",children:"업데이트 내역"}),m.jsx("div",{className:"flex flex-col gap-4",children:ob.map((t,e)=>m.jsxs("div",{className:`border rounded-2xl p-4 ${e===0?"border-lamp/40 bg-lamp/5":"border-faint/20 bg-night/30"}`,children:[m.jsxs("div",{className:"flex items-center justify-between mb-3",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("span",{className:`text-sm font-semibold font-display ${e===0?"text-lamp":"text-faint"}`,children:t.version}),e===0&&m.jsx("span",{className:"text-xs bg-lamp text-nightDeep px-2 py-0.5 rounded-full font-semibold",children:"최신"})]}),m.jsx("span",{className:"text-xs text-faint/60",children:t.date})]}),m.jsx("ul",{className:"flex flex-col gap-1.5",children:t.items.map((n,r)=>m.jsxs("li",{className:"flex items-start gap-2",children:[m.jsx("span",{className:`mt-1 text-xs ${e===0?"text-lamp":"text-faint/40"}`,children:"·"}),m.jsx("span",{className:`text-sm leading-relaxed ${e===0?"text-paper":"text-faint/70"}`,children:n})]},r))})]},t.version))})]})}const lb=[{id:"unit1",title:"1단원 일상의 믿음",startDate:"2026-06-22",days:[{title:"01. 예수가 모르는 크리스천",sections:[{body:`"그 때에 천국은 마치 등을 들고 신랑을 맞으러 나간 열 처녀와 같다 하리니"(마25:1)

마태복음에 기록된 열 처녀 비유의 시작입니다. 그 당시 유대 풍습을 보면 열 처녀는 신부의 둘러리들인데, 신부를 위하여 신랑을 기다리는 역할을 하였습니다. 그런데 비유는 언제 올지 모르는 신랑을 기다리다가 모두 졸며 잠에 떨어진 모습을 그립니다. "신랑이 더디 오므로 다 졸며 잘새"(마25:5) 예외없이 열 처녀 모두 다 졸다가 잡니다. 열 처녀 모두가 똑같은 사람이라는 뜻입니다. 특별한 존재가 아니었습니다. 일상적인 삶속에서 전혀 아무런 차이가 없었습니다.

그런데 "밤중에"(마25:6) 신랑이 나타납니다. 갑작스러운 일이었습니다. 모두가 잠이 들었었지만 그 중 다섯 처녀는 기름을 충분히 준비한 상태에서 자고 있었던 까닭에 신랑이 한 밤중에 와도 맞이하는데 문제가 없었습니다. 하지만 나머지 다섯 처녀는 충분히 기름을 준비하지 못한 까닭에 신랑을 맞이할 수 없었습니다. 급하게 기름을 구하려했지만 여의치 못했고 그 사이에 혼인 잔치는 시작되었고, 그들은 들어가지 못합니다.

분명히 그들은 기다리고 있었습니다. 그런데 준비하지 않은 채 기다리고 있었던 것입니다. 그냥 기다린 것입니다. 그러다가 밤을 만난 것입니다. 주님은 이 비유를 통하여 말씀하고자 하신 것은 분명했습니다.

"그런즉 깨어 있으라 너희는 그 날과 그 때를 알지 못하느니라"(마25:13)

성경은 신랑이 "밤 중에" 왔다고 기록하고 있는데, 매우 상징적인 표현입니다. 사실 누구나 다 그 날과 그 때를 알 수는 없습니다. 그리고 모르는 것은 문제가 되지 않습니다. 열 처녀 모두 다 자고 있었기 때문입니다. 그런데 갑자기 신랑이 온 것입니다.

이 비유는 하나님 나라 도래에 대한 비유입니다. 그래서 25장 전체에 나오는 비유들, 지금의 열 처녀 비유, 14절부터 기록된 달란트 비유 그리고 31절부터 이어지는 마지막 날의 양과 염소 비유를 말씀하시면서 하나님 나라 도래에 대한 비유를 말씀하셨습니다.

"인자가 자기 영광으로 모든 천사와 함께 올 때에 자기 영광의 보좌에 앉으리"(마25:31)

끝 곧 종말을 말하는 것입니다. 그런데 언제 올지 모르는데 어떻게 준비할 수 있는 것입니까? 여기서 우리가 주의해야 할 단어는 '밤 중에'라는 단어입니다. 헬라어로는 '메세스 뉘크토스'인데, '밤의 한 가운데에'라는 뜻입니다. 그런데 '뉘크토스'는 단순히 '밤'으로 번역되지만 사실은 그 안에 내포된 의미가 있는데, '죄와 수치의 때 혹은 도덕적인 어리석음과 흑암의 때'라는 의미입니다. 그러므로 이것을 은유적으로 "밤 중에"를 다시 해석하면 우리가 죄와 더러움 혹은 죄로 인한 흑암에 거할 때를 말합니다.

그런데 그때 신랑이 온 것입니다. 그런데 그 중 다섯 처녀는 그 상황에서 신랑을 맞이할 수 있었지만 나머지 다섯 처녀는 신랑을 맞이할 수 없었습니다. 준비가 되어있지 않았기 때문입니다. 은유적으로 해석하면 열 처녀 모두가 죄와 수치의 어둠 가운데 있었다고 할 수 있습니다. 그런데 신랑을 맞이할 수 있었던 다섯 처녀들이 다른 처녀들과 다른 점은 기름이 고갈되지 않은 상태였다는 점입니다. 반면에 신랑을 맞이하지 못한 다섯 처녀들은 기름이 고갈된 상태, 곧 그 죄를 먹고 씹고 아예 일상이 된 상태, 하나님과 관계없이 자신을 방임하고 죄의 밤 중에 푹 잠겨 살았다는 뜻입니다.

그런데 이런 상태가 평상시에는 문제 없어 보입니다. 그런데 신랑이 올 때, 곧 결정적인 순간에 신앙이 악세서리 정도 역할만 하는 껍데기였음이 드러난 것입니다. 교회를 다니고 직분이 있는 성도로, 심지어 목사일지라도 말입니다.

직업적인 설교자

나는 고등학교 2학년 때 예수님을 영접하고 교회를 다니기 시작했습니다. 그리고 신학대학을 들어가고 전도사를 거쳐 목사가 되었는데, 어느 날 나는 목사라는 직업을 갖고 있는 직업 설교자가 되어 있는 것을 발견했습니다. 서서히 밤으로 들어가고 있었습니다. 나는 하나님의 말씀을 전한다고 하지만 사람들의 반응을 살피고 사람들이 원하는 설교를 시도하려는 모습을 보았습니다. 그것만이 아니었습니다. 세속적인 성공과 번영의 기준을 따라 추구하고 있었고 영적인 존재처럼 나를 포장하고 있었습니다. 그 사이에 늘어나고 쌓인 것이 있었는데, 바로 죄였습니다. 이미 나를 둘러싸고 있었습니다. 다윗이 고백한 것처럼 말입니다.

"이루 다 헤아릴 수도 없이 많은 재앙이 나를 에워쌌고, 나의 죄가 나의 덜미를 잡았습니다. 눈 앞이 캄캄합니다. 나의 죄가 내 머리털보다도 더 많기에, 나는 희망을 잃었습니다."(새번역/시40:12)

죄가 나의 목덜미를 잡고 있었습니다. 갑자기 나는 신랑과 아무런 관계가 없는 존재, 예수 그리스도와 깊은 인격적 관계를 맺지 못한채 있다는 것도 발견하였습니다. 그런데 더 심각한 것은 분명 회개하고 죄로부터 돌아서야 할 때도 돌아서기 어려워하는 나를 발견한 것입니다. 분명히 여전히 나는 목사로 살고 있었지만 목사의 모양만 있을뿐 근사한 모습으로 자신을 위장하고 포장하는 하나님과 상관없는 목사가 될지도 모른다는 위기를 느꼈습니다.

다행인 것은 아직은 힘들지만 돌아갈 수 있었습니다. 그러니까 기름이 바닥에 조금은 남아있었던 것입니다.

기름이 고갈되어서는 안됩니다. 그러니까 밤 중에 거한 채로 돌아설 수 없을정도로 죄와 불신앙이 라이프스타일이 되어서는 안됩니다. "그 날과 그 때"를 만났을 때 신랑과 아무런 관계가 없는 존재, 예수 그리스도가 알지 못하는 존재가 되어 있어서는 안됩니다. 다시 말해서 신랑이 모르는 존재, 예수가 모르는 크리스천이 될 수도 있다는 사실을 기억해야 합니다.`,question:"주님이 자신을 알아보리라 생각하십니까? 주님이 아실 것 같은 크리스천이라고 생각이 드십니까?"},{body:`기도는 점점 힘들어지고 정말 한 번의 기도조차 힘듭니다. 죄를 범하되 그 죄에 거하는 시간과 방임의 시간이 길어지며 돌아설지라도 여전히 그 죄의 끈을 붙잡은 채 주님 앞에 나오는 것이 일상이 되어 있습니다. 분명 교회에서 무슨 봉사도 하고 무슨 직분도 있지만 아무도 보지 않을 때 스스로 크리스천이라고 말하기가 부끄럽습니다. 그렇다면 정말 위험한 상황입니다. 이제 주님의 경고를 심각하게 들어야 할 것입니다.

"그런즉 깨어 있으라 너희는 그 날과 그 때를 알지 못하느니라"(마25:13)

만일 이 음성이 들린다면 그래서 자신의 상태를 심각하게 생각하며 이 시간 주님 앞에 무릎을 꿇고 그 음성에 청종하려 한다면 아직 희망이 있는 때입니다. 그러나 어느 날 이같은 소리가 전혀 들리지 않으며 그저 껍데기만 교회를 다니는 사람, 그것도 사회적 체면이나 멤버쉽 정도가 된 채 죄와 더러움에 방치하고 "밤 중"을 살고 있게 된다면 끝난 상태입니다. 그러므로 지금 깨어 있어야 합니다. 더 무너지고 모든 것이 소멸되기 전에 말입니다.`,question:"지금 자신의 상태를 심각하게 생각하고 있다면 다행입니다. 앞으로의 수련은 큰 도움이 될 것입니다. 그 다짐의 기도를 쓰신 후 그 자리에 무릎을 꿇고 주님께 그 기도를 드려보십시오."}]},{title:"02. 일상의 내용",sections:[{body:`바벨론 왕조의 마지막 왕은 나보니두스(BC 556-539)로 알려지지만 다니엘서 기록에 의하면 마지막 왕으로 벨사살을 말합니다. 분명 나보니두스가 바벨론의 마지막 왕이지만 그는 재위 중 많은 시간을 아들 벨사살에게 맡기고 바벨론 밖에서 지낸 것으로 알려집니다. 그러니까 실제적인 왕은 벨사살이었고 정확하게 말하면 섭정이었습니다. 그런데 바사(페르시아)의 고레스가 벨사살을 죽이고 바벨론을 멸망시킵니다.

그 날과 그 때가 온다

BC 559년 바사의 왕이 된 고레스는 왕국을 유지하던 중 BC 550년 메대를 멸망시킨 후 아스티아게스를 폐위시키지만 형제 국가처럼 고레스는 메대 왕국을 유지시켰고 명목상 메대-바사 제국으로 남습니다. 그러다 메대-바사 제국의 이름으로 BC 539년 바벨론 제국을 멸망시킨 것입니다. 그리고 고레스는 바벨론의 분봉왕으로 자신의 외삼촌이기도 한 62살의 메대의 다리오를 세운 것입니다.

다리오가 통치를 시작하면서 바벨론의 총리를 지낸 이스라엘 포로 다니엘을 총리로 중용한 것입니다. 당연히 이같은 중용에 페르시아의 사람들은 불만을 갖습니다. 다니엘이 하나님 외에 다른 신을 섬기지 않는다는 것을 안 그들이 기막힌 방법을 찾은 것입니다.

"나라의 모든 총리와 지사와 총독과 법관과 관원이 의논하고 왕에게 한 법률을 세우며 한 금령을 정하실 것을 구하나이다 왕이여 그것은 곧 이제부터 삼십일 동안에 누구든지 왕 외의 어떤 신에게나 사람에게 무엇을 구하면 사자 굴에 던져 넣기로 한 것이니이다"(단6:7)

이같은 금령은 다니엘에게는 죽음을 의미했습니다. 하지만 다리오는 다니엘을 살리고 싶었습니다. 하지만 다리오는 실질적 권력이 없었습니다. 그가 할 수 있는 것은 "밤이 새도록 금식하고 그 앞에 오락을 그치고 잠자기를 마다"(단6:18) 하는 것이 전부였습니다. 그리고 이튿날 누구보다도 사자굴에 가서 다니엘의 안위를 물어봅니다. 다니엘이 "항상 섬기는 하나님이 사자들에게서 구원하셨느냐"(단6:20)고 물었을 때였습니다. 우리가 알듯이 다니엘은 살아있었습니다.

일상의 믿음

분명 다니엘에게 어느 누구도 피할 수 없는 "그 날과 그 때"가 왔던 것입니다. 하지만 다니엘에게 "그 날과 그 때"는 두려운 때가 아니라 그가 누구인지가 드러나는 시간이었습니다. 그것은 다니엘이 평상시에 준비한 것과 관계 있습니다. 비록 열 처녀 비유에서 보듯 그에게도 밤이 왔지만 그의 밤은 다니엘 자신이 죄와 더러움에 있거나 기웃거리는 밤이 아니라 온전하고 거룩한 자가 만난 밤이었습니다. 그의 평상의 일상적인 삶이 그를 증명한 것입니다. 왕의 금령에도 흔들리지 않는 일상이었기 때문입니다. 성경은 그것을 "전에 하던 대로"라고 기록했습니다.

"자기 집에 돌아가서는 윗방에 올라가 예루살렘으로 향한 창문을 열고 전에 하던 대로 하루 세번씩 무릎을 꿇고 기도하며 그의 하나님께 감사하였더라"(단6:10)

"전에 하던 대로" 잠시 망설였을지도 모르지만 그런 흔적이 성경에는 없습니다. 그러니까 그는 전혀 거침없이 늘 하던 대로 하나님께 기도한 것입니다. "그 날과 그 때"가 와도 아무런 문제가 없었다는 뜻입니다. 오히려 "그 날과 그 때"는 다니엘이 얼마나 특별한 존재인지를 드러나게 하는 순간이 되었을 뿐입니다. 그가 늘 하던 일상이 능력이었던 것입니다.

'일상의 믿음' 이것이 우리가 할 일입니다. 그 다음은 하나님이 하시는 영역입니다. 다리오가 물었던 질문, "네가 항상 섬기는 네 하나님이 사자들에게서 능히 너를 구원하셨느냐"에 응답하신 것은 하나님이셨기 때문입니다. 다니엘이 하고 있는 선한 일, 착한 일, 아름다운 일이 무너지지 않고 끝까지 이끄신 것입니다. 바울이 고백한 것처럼 말입니다.

"여러분들에게 훌륭한 일을 시작하신 하나님께서는 그 일을 계속하실 것이며 마침내 그리스도 예수께서 다시 오시는 날 완성하실 것입니다. 이것이 나의 신념입니다."(공동번역/빌1:6)

우리가 무엇을 계획하든 그 계획보다 더 크게, 더 놀랍게도, 오묘하게 이끄시고 인도하십니다. 이처럼 하나님 안에서 온전해진 자들에 대한 하나님의 역사는 확실합니다. 다니엘도 그런 경우입니다. 특별한 것이 아니라 일상 곧 생활이었습니다. 이처럼 하나님과의 관계가 일상인 이들에게 하나님의 역사는 걱정할 필요가 없습니다. 하나님은 그 사람을 책임지실 뿐만 아니라 사용하시기 때문입니다. 또한 부르짖을 때 크고 비밀한 일을 보이실 것이며 하나님의 역사에 참여시키실 것이기 때문입니다.

"너는 내게 부르짖으라 내가 네게 응답하겠고 네가 알지 못하는 크고 비밀한 일을 네게 보이리라"(렘33:3)`,question:"기도는 힘이 들고 말씀묵상은 졸리는 일이며 예배조차 늘 신경써야만 지킬 수 있는 사람이라면 얼마나 억울한 일입니까? 그 기도에 크고 비밀한 일을 보는 사건이 있을지 모르며 혹 보여주신다고 해도 알아채릴 수 있겠습니까? 일상이 예배가 아니라 일상이 세상의 삶뿐이라면 그렇지 않겠습니까? 억울하지 않겠습니까?"}]},{title:"03. 하나님과 관계없는 자의 기도",sections:[{body:`우리는 모두 기도를 합니다. 기도하지 않는 크리스천은 존재하지 않습니다. 그리고 나름대로 기도하는 방법이 있습니다. 하지만 문제는 기도의 힘을 가진 사람이 있는 반면에 전혀 기도의 힘이 없는 사람도 존재합니다. 기도는 하지만 두 종류의 사람이 존재한다는 말입니다. 왜 이런 일이 벌어지는 것입니까? 다시 말해서 어떻게 해야 우리는 능력있는 기도의 사람이 될 수 있는 것입니까?

특별한 기도

이스라엘이 애굽을 탈출한 후 가나안 땅을 향해 갈 때 시내산 광야에서 있었던 일입니다. 이스라엘은 시내산에 하나님을 만나러 간 모세를 기다리던 40일동안 참지 못하고 하나님 대신 눈에 보이는 금송아지 형상을 만든 후 하나님이라고 생각하며 예배합니다. 그것은 자신들 마음대로 움직일 수 있는 신으로 하나님을 전락시키는 천박한 행위였습니다. 하나님은 그런 모습에 대하여 분노하십니다. 하나님은 그들을 멸망시키려 합니다. 그 절박한 상황에서 모세가 기도합니다.

"모세가 주께로 돌아가서 아뢰었다. 슬픕니다. 이 백성이 금으로 신상을 만듦으로써 큰 죄를 지었습니다. 그러나 이제 주께서 그들의 죄를 용서하여 주십시오. 그렇게 하지 않으시려면, 주께서 기록하신 책에서 저의 이름을 지워 주십시오."(출32:31-32)

하나님은 이같은 모세의 기도를 들으시고 당신의 멸망계획을 철회하십니다. 대단한 기도의 힘입니다. 모세의 기도는 특별했습니다. 그런데 놀라운 것은 그 기도의 힘은 모세에게만 적용되는 것이 아니라 모든 크리스천들이 누릴 수 있는 권세라는 사실입니다. 분명히 주님은 우리에게 수없이 강조하셨습니다.

"구하라 그러면 너희에게 주실 것이요 찾으라 그러면 찾을 것이요 문을 두드리라 그러면 너희에게 열릴 것이니 구하는 이마다 얻을 것이요 찾는 이가 찾을 것이요 두드리는 이에게 열릴 것이니라"(마7:7-8)

크리스천의 매력은 이처럼 응답받는 기도에 있습니다. 그런데 문제는 우리의 기도가 능력이 없다는데 있습니다. 분명히 기도는 하는데, 기도의 응답에 대한 확신은 없습니다. 그냥 그저 그런 기도를 드리고 있었던 것입니다. 왜 이런 현상이 벌어지는 것입니까?

특별한 관계

엄밀하게 말해서 특별한 기도와 보통 기도는 존재하지 않습니다. 무슨 형식의 차이가 있는 것도 아닙니다. 똑같이 금식기도를 하더라도, 똑같이 철야기도를 하더라도 어떤 사람의 기도는 일반적인 평범한 기도에 불과하지만 또 다른 사람의 기도는 하나님의 보좌를 움직이는 특별한 기도가 될 수 있는 것입니다.

우리가 다니엘의 경우를 앞에서 살폈듯이 그는 왕의 금령 앞에서도 기도를 멈추지 않고 기도하였습니다. 사실 다니엘은 왕의 금령을 받았을 때 늘 하던 대로 창문을 열고 기도하지 않고 창문을 닫고 기도할 수 있었습니다. 하지만 다니엘은 여전히 창문을 연 상태로, 조금도 위축되지 않고 기도를 하였습니다. 분명 다른 기도를 한 것이 아닙니다. 하지만 그때 그의 기도는 특별한 기도가 되었다고 말하는 이유는 하나님과의 관계에서 기도했기 때문입니다.

우리의 기도가 특별하지 않은 이유는 다니엘처럼 기도하지 않기 때문입니다. 우리의 기도는 매우 제한적이면서 언제나 실패에 익숙합니다. 흥미로운 텔레비전 프로그램에도 쉽게 넘어가고 친구들의 갑작스러운 전화에도 넘어가고 맙니다. 정말로 심각하지 않은 문제들 앞에서 우리는 넘어갑니다. 그리고 그 기도의 시간을 다른 시간으로, 다른 날로, 다른 상황으로 마음대로 옮기고 혹은 포기합니다.

진정한 기도란 우리의 소원을 하나님께 아뢰는 것이 아니라 하나님과의 관계이기 때문입니다. 그러므로 우리가 하나님과 아버지와 자녀로서의 관계만 확인하고 누리는 것이 중요합니다. 기도의 깊이와 능력의 문제는 관계의 문제입니다.

"또 기도할 때에 이방인과 같이 중언부언하지 말라 그들은 말을 많이 하여야 들으실 줄 생각하느니라 그러므로 그들을 본받지 말라 구하기 전에 너희에게 있어야 할 것을 하나님 너희 아버지께서 아시느니라"(마6:7-8)

"그러므로 너희는 이렇게 기도하라 하늘에 계신 우리 아버지여"(마6:9)

어떤 의미에서 하나님을 아버지라고 부를 수 있다면 이미 기도의 전부입니다. 아버지라고 부르는 것만으로 충분합니다. 관계가 기도의 응답이기 때문입니다.`,question:"하나님을 아버지라고 부를 수 있습니까? 자신의 어머니나 아버지를 부르듯이 하나님을 '아빠 아버지'라고 부를 수 있습니까? 한번 불러보십시오. 자연스럽습니까?"},{body:"기도훈련의 시작은 하나님을 아버지라고 부를 수 있는 영적 관계의 회복에 있습니다. 그것이 기도의 전부이기 때문입니다.",question:"준비되셨습니까? 어떤 기대를 가지고 계십니까?"}]},{title:"04. 말씀 없이 사는 그리스도인",sections:[{body:`"나는 너희를 위하여 기도하기를 쉬는 죄를 여호와 앞에 결단코 범하지 아니하고"(삼상12:23)

이 놀라운 다짐은 사무엘의 인간적인 결심 때문이 아니라 하나님의 음성이 들렸기 때문입니다. 그러나 일반적으로 사람들이 죄를 범하는 것은 하나님의 음성을 듣지 못하거나 듣지 않는 불순종 혹은 연약한 믿음과 관계있습니다. 그래서 인간은 근본적으로 하나님의 말씀을 듣기 싫어합니다. 근본적으로 죄인이기 때문이고 하나님을 사랑하기보다 자기 마음대로 살고 싶어하는 이기적 욕망 때문입니다. 그러므로 말씀을 사모하고 그 말씀을 듣기를 즐거워하며 그 말씀대로 살기를 원한다면 그것은 성숙의 증거입니다.

말씀없이 산다

대부분은 말씀을 사모하지 않습니다. 사모하는 경우에도 대부분은 자신이 듣고 싶은 말씀에만 집중합니다. 그것은 말씀 없이 사는 것과 다름없습니다. 말씀 없이 산다는 것은 이미 영적인 싸움에서 패배할 조건을 갖췄다는 뜻입니다. 왜냐하면 말씀이 무기이기 때문입니다.

"성령의 검 곧 하나님의 말씀을 가지라"(엡6:17)

그런데 말씀이 없다. 그래서 우리가 무기력하고 죄에 사로잡히는 이유입니다. 언제나 결정적인 순간에 죄에 빠지고 유혹에 흔들리는 것입니다. 그러나 우리 안에 말씀이 있다면, 비록 우리가 죄로 무너지더라도 회복될 수 있는 가능성이 열립니다.

바울이 사랑하고 즐거워하는 말씀을 통해 성령이 그를 위로하고 붙잡은 것이고 능히 이기고 걸어갈 수 있는 힘을 주신 것입니다. "성경은 스스로 자신을 해석한다"라고 루터가 고백한 것처럼 말씀이 스스로 바울 안에서 일하고 계셨던 것입니다.

"주의 종에게 하신 말씀을 기억하소서 주께서 내게 소망을 가지게 하셨나이다 이 말씀은 나의 고난 중의 위로라 주의 말씀이 나를 살리셨기 때문이니이다"(시119:49-50)

그러므로 말씀은 주님이 말씀하신 것처럼 육체가 먹어야 하는 떡 혹은 밥입니다. 모든 크리스천들이 반드시 먹어야 하는 양식입니다.

"사람이 떡으로만 살 것이 아니요 하나님의 입으로부터 나오는 모든 말씀으로 살 것이라"(마4:4)

그러므로 매일 밥을 먹는 것을 포기할 수 없듯이 매일 말씀을 묵상하는 것을 포기해서는 안됩니다. 그것이 우리가 살 길이기 때문입니다.

"주의 말씀은 내 발에 등이요 내 길에 빛이니이다 주의 의로운 규례들을 지키기로 맹세하고 굳게 정하였나이다"(시119:105-106)`,question:"나에게 성경 말씀은 무엇입니까? 매일 먹는 밥입니까? 그래서 매일 큐티를 하는 것이 자연스럽습니까?"},{body:"하루 하루를 사는 동안 말씀이 살아서 우리를 인도하고 격려합니다. 언제나 말씀이 스스로 일하시고 우리를 살리기 때문입니다. 또한 우리에게 길을 보이시고 이끄시기 때문입니다.",question:"하루 하루를 사는 동안 내가 묵상했던 말씀이 살아서 나를 인도하고 격려하였던 경험이 있습니까? 이같은 질문 앞에 어떤 생각이 드십니까?"}]},{title:"05. 일상의 믿음",sections:[{body:`345년 지금의 튀르키에 북쪽에 위치한 폰투스의 이보라에서 태어난 에바그리우스의 아버지는 주교였습니다. 그는 어릴 때부터 신앙의 바른 기반에서 자랐고 카파도키아의 교부들의 영향을 받았습니다. 특히 바실리우스와 그레고리우스의 영향을 받았던 그는 379년에 부제품을 받았습니다. 그 후 그는 콘스탄티노플 공의회 등에서 이단논박에 혁혁한 공로를 세웁니다. 그런데 그가 유명해지면서 그에게 문제가 생겼습니다. 영적인 타락과 훼손이 벌어진 것입니다. 한 고관 부인과의 사랑, 그리고 이어진 음욕의 노예가 됩니다. 그러다 6개월 정도 엄청난 질병으로 고통을 당하는데, 모든 것을 청산해야 하는 상황이었습니다.

에바그리우스에게서 보는 것처럼 우리는 우리 자신을 자신할 수 없습니다. 영적인 것처럼 보여도 지극히 육체적일 수 있습니다. 이 싸움에서 승리하지 않으면 우리는 어떤 존재가 될지 모릅니다.

옛 사람의 문제

에바그리우스 폰티쿠스는 바울의 구분처럼 사람을 영과 혼과 육으로 나누었습니다. 영적인 훼손이 이뤄지면 욕정부, 곧 정신적인 것과 육체적인 것의 과도한 욕구가 발생합니다. 이미 육체와 정신이 영을 지배하는 상황이 벌어진 것입니다. 이것을 바울은 "옛 사람"이라고 정의했습니다.

"너희는 유혹의 욕심을 따라 썩어져 가는 구습을 따르는 옛 사람을 벗어 버리고"(엡4:22)

"마음에서 나오는 것은 악한 생각과 살인과 간음과 음란과 도둑질과 거짓 증언과 비방이니 이런 것들이 사람을 더럽게 하는 것이요 씻지 않은 손으로 먹는 것은 사람을 더럽게 하지 못하느니라"(마15:19-20)

말씀과 기도의 일상

우리에게 필요한 것은 바울이 말한 것처럼 우리 "몸의 구원"(롬8:23)입니다.

"아무든지 나를 따라오려거든 자기를 부인하고 날마다 제 십자가를 지고 나를 따를 것이니라"(눅9:23)

첫째, 오랜 시간동안 만들어져서 프로그램된 옛 사람 곧 거짓 자아를 해체하는 것으로 자기 부인이 필요합니다. 그래서 하나님을 잠잠히 기다리는 수동적인 침묵이 필요한 이유입니다. 한 마디로 요약하면 "오랜 시간동안 만들어진 옛사람의 생각과 감정의 프로그램을 제거하는 훈련"입니다. 소위 수동적 기도입니다.

두 번째 중요한 것은 말씀입니다. 내 안에 존재하는 오랫동안 프로그램된 옛 사람을 하나님의 말씀으로 채우는 것입니다. 그동안 우리는 내가 듣고 싶은 말씀을 듣는데 길들여졌습니다. 그러나 우리가 추구해야 할 것은 우리가 원하는 메시지가 아니라 하나님이 말씀하시는 메시지를 바르게 듣는 것입니다. 말씀 묵상으로서 큐티가 중요한 이유입니다.

"하나님의 말씀은 살아 있고 활력이 있어 좌우에 날선 어떤 검보다도 예리하여 혼과 영과 및 관절과 골수를 찔러 쪼개기까지 하며 또 마음의 생각과 뜻을 판단하나니 지으신 것이 하나도 그 앞에 나타나지 않음이 없고 우리의 결산을 받으실 이의 눈 앞에 만물이 벌거벗은 것 같이 드러나느니라"(히4:12-13)

수도자의 열심 단계에서 우리가 추구할 수련은 기도와 말씀에 집중하지만 이같은 삶이 일상이 되도록 이끄는데 있습니다.`,question:"이제 본격적으로 기도와 말씀을 훈련할텐데 어떤 다짐을 갖고 있는지 적어보십시오."}]}],groupQuestions:["만일 주님이 오늘 이 땅에 오셔서 나를 만난다면 알아보시며 반가워하실 것 같습니까?","'전에 하던 대로' 다니엘의 신앙을 볼 때 나의 일상, 늘 하는 것은 어떤 모습입니까? 나의 일상 생활 중 24시간 예수님이 곁에 있다고 생각하고 자신의 삶을 평가해보십시오.","한 주간동안 공부하면 하나님을 '아버지'라고 몇 번이나 부르신 것 같습니까?","나에게 성경 말씀은 무엇입니까? 매일 먹는 밥입니까? 지난 한 주간 몇 일이나 큐티를 하셨습니까?","이 훈련을 시작하면서 새롭게 다짐하게 된 기도와 말씀의 루틴이 있다면 적어보십시오."]}],Ty="qt_role",Iy="qt_install_seen";function ub({onTabSelect:t,onTodaySelect:e}){return m.jsxs("div",{className:"flex flex-col min-h-[calc(100vh-6rem)] px-5",children:[m.jsx("div",{className:"mt-3 mb-4 rounded-2xl overflow-hidden border border-lamp/20",style:{position:"relative",height:"min(38vw, 220px)",background:"linear-gradient(135deg, #1a1f35 0%, #0d1526 50%, #101828 100%)"},children:m.jsx("img",{src:"./home-image.jpeg",alt:"더플랜",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center center",opacity:.85},onError:n=>{n.target.style.display="none"}})}),m.jsxs("div",{className:"mb-4 text-center",children:[m.jsx("p",{className:"font-display text-lampSoft text-base mb-0.5",children:"말씀과 함께하는 하루"}),m.jsx("p",{className:"text-faint text-xs tracking-wider",children:"· THE PLAN ·"})]}),m.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[m.jsxs("button",{onClick:()=>t("calendar"),className:"flex flex-col items-center justify-center gap-1.5 border border-lamp/30 rounded-2xl py-5 bg-lamp/5 active:bg-lamp/10",children:[m.jsx("span",{className:"text-2xl",children:"📅"}),m.jsx("span",{className:"text-lamp font-semibold text-sm",children:"캘린더"}),m.jsx("span",{className:"text-faint text-xs",children:"기록 보기"})]}),m.jsxs("button",{onClick:e,className:"flex flex-col items-center justify-center gap-1.5 border border-lamp rounded-2xl py-5 bg-lamp/10 shadow-glow active:bg-lamp/20",children:[m.jsx("span",{className:"text-2xl",children:"✍️"}),m.jsx("span",{className:"text-lamp font-semibold text-sm",children:"오늘"}),m.jsx("span",{className:"text-faint text-xs",children:"오늘 큐티 작성"})]}),m.jsxs("button",{onClick:()=>t("stats"),className:"flex flex-col items-center justify-center gap-1.5 border border-lamp/30 rounded-2xl py-5 bg-lamp/5 active:bg-lamp/10",children:[m.jsx("span",{className:"text-2xl",children:"🕯️"}),m.jsx("span",{className:"text-lamp font-semibold text-sm",children:"등불"}),m.jsx("span",{className:"text-faint text-xs",children:"연속 기록"})]}),m.jsxs("button",{onClick:()=>t("settings"),className:"flex flex-col items-center justify-center gap-1.5 border border-lamp/30 rounded-2xl py-5 bg-lamp/5 active:bg-lamp/10",children:[m.jsx("span",{className:"text-2xl",children:"⚙️"}),m.jsx("span",{className:"text-lamp font-semibold text-sm",children:"설정"}),m.jsx("span",{className:"text-faint text-xs",children:"알림·단원 관리"})]})]}),m.jsx(ab,{}),m.jsx("div",{className:"h-8"})]})}function cb(){const[t,e]=H.useState(()=>localStorage.getItem(Ty)),[n,r]=H.useState(()=>localStorage.getItem(Iy)==="1"),[i,s]=H.useState("home"),[o,l]=H.useState(null),[u,h]=H.useState(!1),[f,y]=H.useState(!1),{entries:v,saveEntry:k,setCheck:C,deleteEntry:N}=HN(),{units:O}=CE(),I=[...lb,...O];H.useEffect(()=>{WN(()=>y(!0))},[]);const E=_=>{localStorage.setItem(Ty,_),e(_)},x=()=>{localStorage.setItem(Iy,"1"),r(!0)},b=()=>{l(null),h(!1),s("home")},F=_=>{l(null),h(!1),s(_)},j=()=>{h(!1),l(Nl()),s("calendar")};return t?n?f?m.jsxs("div",{className:"min-h-screen pb-24",children:[m.jsxs("div",{className:"px-5 pt-6 flex items-center justify-between",children:[m.jsx("button",{onClick:b,className:"font-display text-lampSoft text-sm tracking-widest",children:"THE PLAN"}),m.jsx("span",{className:"text-xs text-faint",children:t==="writer"?"작성자":"코디네이터"})]}),u?m.jsx(rb,{onClose:()=>h(!1)}):o?t==="writer"?m.jsx(GN,{dateKey:o,entry:v[o],units:I,onSave:k,onDelete:N,onClose:()=>l(null)}):m.jsx(YN,{dateKey:o,entry:v[o],units:I,onCheck:C,onClose:()=>l(null)}):m.jsxs(m.Fragment,{children:[i==="home"&&m.jsx(ub,{onTabSelect:F,onTodaySelect:j}),i==="calendar"&&m.jsx(QN,{entries:v,onSelectDate:l}),i==="stats"&&m.jsx(eb,{entries:v}),i==="settings"&&m.jsxs("div",{className:"px-5 pb-6",children:[m.jsx("button",{onClick:()=>h(!0),className:"w-full border border-lamp text-lamp font-semibold py-4 rounded-2xl mb-6",children:"📖 본문 관리 (단원 추가/수정)"}),m.jsx(XN,{role:t})]})]}),m.jsxs("div",{className:"fixed bottom-0 left-0 right-0 bg-nightDeep border-t border-faint/20 flex",children:[m.jsx("button",{onClick:()=>F("home"),className:`flex-1 py-4 text-sm ${i==="home"&&!o&&!u?"text-lamp":"text-faint"}`,children:"홈"}),m.jsx("button",{onClick:()=>F("calendar"),className:`flex-1 py-4 text-sm ${i==="calendar"&&!o?"text-lamp":"text-faint"}`,children:"캘린더"}),m.jsx("button",{onClick:j,className:`flex-1 py-4 text-sm ${o===Nl()?"text-lamp":"text-faint"}`,children:"오늘"}),m.jsx("button",{onClick:()=>F("stats"),className:`flex-1 py-4 text-sm ${i==="stats"&&!o?"text-lamp":"text-faint"}`,children:"등불"}),m.jsx("button",{onClick:()=>F("settings"),className:`flex-1 py-4 text-sm ${i==="settings"&&!o?"text-lamp":"text-faint"}`,children:"설정"})]})]}):m.jsx("div",{className:"min-h-screen flex items-center justify-center text-faint",children:m.jsx("p",{children:"연결 중..."})}):m.jsx(jS,{onDone:x}):m.jsx(LS,{onSelect:E})}kc.createRoot(document.getElementById("root")).render(m.jsx(IT.StrictMode,{children:m.jsx(cb,{})}));
