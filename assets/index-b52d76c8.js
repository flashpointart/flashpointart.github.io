function ly(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function uy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Tg={exports:{}},Wl={},Ag={exports:{}},Ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var js=Symbol.for("react.element"),cy=Symbol.for("react.portal"),fy=Symbol.for("react.fragment"),dy=Symbol.for("react.strict_mode"),hy=Symbol.for("react.profiler"),py=Symbol.for("react.provider"),my=Symbol.for("react.context"),gy=Symbol.for("react.forward_ref"),_y=Symbol.for("react.suspense"),vy=Symbol.for("react.memo"),yy=Symbol.for("react.lazy"),eh=Symbol.iterator;function xy(t){return t===null||typeof t!="object"?null:(t=eh&&t[eh]||t["@@iterator"],typeof t=="function"?t:null)}var Cg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bg=Object.assign,Rg={};function Go(t,e,n){this.props=t,this.context=e,this.refs=Rg,this.updater=n||Cg}Go.prototype.isReactComponent={};Go.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Go.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Pg(){}Pg.prototype=Go.prototype;function Vf(t,e,n){this.props=t,this.context=e,this.refs=Rg,this.updater=n||Cg}var Wf=Vf.prototype=new Pg;Wf.constructor=Vf;bg(Wf,Go.prototype);Wf.isPureReactComponent=!0;var th=Array.isArray,Lg=Object.prototype.hasOwnProperty,$f={current:null},Dg={key:!0,ref:!0,__self:!0,__source:!0};function Ug(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Lg.call(e,i)&&!Dg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:js,type:t,key:o,ref:s,props:r,_owner:$f.current}}function Sy(t,e){return{$$typeof:js,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xf(t){return typeof t=="object"&&t!==null&&t.$$typeof===js}function Ey(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var nh=/\/+/g;function Ru(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ey(""+t.key):e.toString(36)}function qa(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case js:case cy:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+Ru(s,0):i,th(r)?(n="",t!=null&&(n=t.replace(nh,"$&/")+"/"),qa(r,e,n,"",function(u){return u})):r!=null&&(Xf(r)&&(r=Sy(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(nh,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",th(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+Ru(o,a);s+=qa(o,e,n,l,r)}else if(l=xy(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+Ru(o,a++),s+=qa(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function aa(t,e,n){if(t==null)return t;var i=[],r=0;return qa(t,i,"","",function(o){return e.call(n,o,r++)}),i}function My(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Jt={current:null},Ka={transition:null},wy={ReactCurrentDispatcher:Jt,ReactCurrentBatchConfig:Ka,ReactCurrentOwner:$f};Ne.Children={map:aa,forEach:function(t,e,n){aa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return aa(t,function(){e++}),e},toArray:function(t){return aa(t,function(e){return e})||[]},only:function(t){if(!Xf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ne.Component=Go;Ne.Fragment=fy;Ne.Profiler=hy;Ne.PureComponent=Vf;Ne.StrictMode=dy;Ne.Suspense=_y;Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wy;Ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=bg({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=$f.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Lg.call(e,l)&&!Dg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:js,type:t.type,key:r,ref:o,props:i,_owner:s}};Ne.createContext=function(t){return t={$$typeof:my,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:py,_context:t},t.Consumer=t};Ne.createElement=Ug;Ne.createFactory=function(t){var e=Ug.bind(null,t);return e.type=t,e};Ne.createRef=function(){return{current:null}};Ne.forwardRef=function(t){return{$$typeof:gy,render:t}};Ne.isValidElement=Xf;Ne.lazy=function(t){return{$$typeof:yy,_payload:{_status:-1,_result:t},_init:My}};Ne.memo=function(t,e){return{$$typeof:vy,type:t,compare:e===void 0?null:e}};Ne.startTransition=function(t){var e=Ka.transition;Ka.transition={};try{t()}finally{Ka.transition=e}};Ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ne.useCallback=function(t,e){return Jt.current.useCallback(t,e)};Ne.useContext=function(t){return Jt.current.useContext(t)};Ne.useDebugValue=function(){};Ne.useDeferredValue=function(t){return Jt.current.useDeferredValue(t)};Ne.useEffect=function(t,e){return Jt.current.useEffect(t,e)};Ne.useId=function(){return Jt.current.useId()};Ne.useImperativeHandle=function(t,e,n){return Jt.current.useImperativeHandle(t,e,n)};Ne.useInsertionEffect=function(t,e){return Jt.current.useInsertionEffect(t,e)};Ne.useLayoutEffect=function(t,e){return Jt.current.useLayoutEffect(t,e)};Ne.useMemo=function(t,e){return Jt.current.useMemo(t,e)};Ne.useReducer=function(t,e,n){return Jt.current.useReducer(t,e,n)};Ne.useRef=function(t){return Jt.current.useRef(t)};Ne.useState=function(t){return Jt.current.useState(t)};Ne.useSyncExternalStore=function(t,e,n){return Jt.current.useSyncExternalStore(t,e,n)};Ne.useTransition=function(){return Jt.current.useTransition()};Ne.version="18.2.0";Ag.exports=Ne;var ke=Ag.exports;const qe=uy(ke),ih=ly({__proto__:null,default:qe},[ke]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ty=ke,Ay=Symbol.for("react.element"),Cy=Symbol.for("react.fragment"),by=Object.prototype.hasOwnProperty,Ry=Ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Py={key:!0,ref:!0,__self:!0,__source:!0};function Ig(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)by.call(e,i)&&!Py.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Ay,type:t,key:o,ref:s,props:r,_owner:Ry.current}}Wl.Fragment=Cy;Wl.jsx=Ig;Wl.jsxs=Ig;Tg.exports=Wl;var ht=Tg.exports,Oc={},Ng={exports:{}},Sn={},Og={exports:{}},Fg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,H){var k=U.length;U.push(H);e:for(;0<k;){var ue=k-1>>>1,J=U[ue];if(0<r(J,H))U[ue]=H,U[k]=J,k=ue;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var H=U[0],k=U.pop();if(k!==H){U[0]=k;e:for(var ue=0,J=U.length,G=J>>>1;ue<G;){var K=2*(ue+1)-1,oe=U[K],se=K+1,P=U[se];if(0>r(oe,k))se<J&&0>r(P,oe)?(U[ue]=P,U[se]=k,ue=se):(U[ue]=oe,U[K]=k,ue=K);else if(se<J&&0>r(P,k))U[ue]=P,U[se]=k,ue=se;else break e}}return H}function r(U,H){var k=U.sortIndex-H.sortIndex;return k!==0?k:U.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],f=1,d=null,h=3,p=!1,y=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(U){for(var H=n(u);H!==null;){if(H.callback===null)i(u);else if(H.startTime<=U)i(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(u)}}function E(U){if(v=!1,_(U),!y)if(n(l)!==null)y=!0,ee(S);else{var H=n(u);H!==null&&Z(E,H.startTime-U)}}function S(U,H){y=!1,v&&(v=!1,c(D),D=-1),p=!0;var k=h;try{for(_(H),d=n(l);d!==null&&(!(d.expirationTime>H)||U&&!W());){var ue=d.callback;if(typeof ue=="function"){d.callback=null,h=d.priorityLevel;var J=ue(d.expirationTime<=H);H=t.unstable_now(),typeof J=="function"?d.callback=J:d===n(l)&&i(l),_(H)}else i(l);d=n(l)}if(d!==null)var G=!0;else{var K=n(u);K!==null&&Z(E,K.startTime-H),G=!1}return G}finally{d=null,h=k,p=!1}}var w=!1,C=null,D=-1,x=5,A=-1;function W(){return!(t.unstable_now()-A<x)}function Y(){if(C!==null){var U=t.unstable_now();A=U;var H=!0;try{H=C(!0,U)}finally{H?I():(w=!1,C=null)}}else w=!1}var I;if(typeof g=="function")I=function(){g(Y)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,$=B.port2;B.port1.onmessage=Y,I=function(){$.postMessage(null)}}else I=function(){m(Y,0)};function ee(U){C=U,w||(w=!0,I())}function Z(U,H){D=m(function(){U(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,ee(S))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var k=h;h=H;try{return U()}finally{h=k}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,H){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var k=h;h=U;try{return H()}finally{h=k}},t.unstable_scheduleCallback=function(U,H,k){var ue=t.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?ue+k:ue):k=ue,U){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=k+J,U={id:f++,callback:H,priorityLevel:U,startTime:k,expirationTime:J,sortIndex:-1},k>ue?(U.sortIndex=k,e(u,U),n(l)===null&&U===n(u)&&(v?(c(D),D=-1):v=!0,Z(E,k-ue))):(U.sortIndex=J,e(l,U),y||p||(y=!0,ee(S))),U},t.unstable_shouldYield=W,t.unstable_wrapCallback=function(U){var H=h;return function(){var k=h;h=H;try{return U.apply(this,arguments)}finally{h=k}}}})(Fg);Og.exports=Fg;var Ly=Og.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg=ke,xn=Ly;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zg=new Set,ws={};function Ir(t,e){Ro(t,e),Ro(t+"Capture",e)}function Ro(t,e){for(ws[t]=e,t=0;t<e.length;t++)zg.add(e[t])}var Ti=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fc=Object.prototype.hasOwnProperty,Dy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rh={},oh={};function Uy(t){return Fc.call(oh,t)?!0:Fc.call(rh,t)?!1:Dy.test(t)?oh[t]=!0:(rh[t]=!0,!1)}function Iy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ny(t,e,n,i){if(e===null||typeof e>"u"||Iy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var jf=/[\-:]([a-z])/g;function Yf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jf,Yf);Ot[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jf,Yf);Ot[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jf,Yf);Ot[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function qf(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ny(e,n,r,i)&&(n=null),i||r===null?Uy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ri=kg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,la=Symbol.for("react.element"),oo=Symbol.for("react.portal"),so=Symbol.for("react.fragment"),Kf=Symbol.for("react.strict_mode"),kc=Symbol.for("react.profiler"),Bg=Symbol.for("react.provider"),Hg=Symbol.for("react.context"),Zf=Symbol.for("react.forward_ref"),zc=Symbol.for("react.suspense"),Bc=Symbol.for("react.suspense_list"),Qf=Symbol.for("react.memo"),Oi=Symbol.for("react.lazy"),Gg=Symbol.for("react.offscreen"),sh=Symbol.iterator;function Yo(t){return t===null||typeof t!="object"?null:(t=sh&&t[sh]||t["@@iterator"],typeof t=="function"?t:null)}var at=Object.assign,Pu;function ls(t){if(Pu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Pu=e&&e[1]||""}return`
`+Pu+t}var Lu=!1;function Du(t,e){if(!t||Lu)return"";Lu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Lu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ls(t):""}function Oy(t){switch(t.tag){case 5:return ls(t.type);case 16:return ls("Lazy");case 13:return ls("Suspense");case 19:return ls("SuspenseList");case 0:case 2:case 15:return t=Du(t.type,!1),t;case 11:return t=Du(t.type.render,!1),t;case 1:return t=Du(t.type,!0),t;default:return""}}function Hc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case so:return"Fragment";case oo:return"Portal";case kc:return"Profiler";case Kf:return"StrictMode";case zc:return"Suspense";case Bc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Hg:return(t.displayName||"Context")+".Consumer";case Bg:return(t._context.displayName||"Context")+".Provider";case Zf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qf:return e=t.displayName||null,e!==null?e:Hc(t.type)||"Memo";case Oi:e=t._payload,t=t._init;try{return Hc(t(e))}catch{}}return null}function Fy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hc(e);case 8:return e===Kf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Zi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Vg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ky(t){var e=Vg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ua(t){t._valueTracker||(t._valueTracker=ky(t))}function Wg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Vg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gc(t,e){var n=e.checked;return at({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ah(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Zi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $g(t,e){e=e.checked,e!=null&&qf(t,"checked",e,!1)}function Vc(t,e){$g(t,e);var n=Zi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wc(t,e.type,Zi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function lh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wc(t,e,n){(e!=="number"||fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var us=Array.isArray;function yo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Zi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function $c(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return at({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function uh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(us(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Zi(n)}}function Xg(t,e){var n=Zi(e.value),i=Zi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ch(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function jg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?jg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ca,Yg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ca=ca||document.createElement("div"),ca.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ca.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ts(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var hs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zy=["Webkit","ms","Moz","O"];Object.keys(hs).forEach(function(t){zy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),hs[e]=hs[t]})});function qg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||hs.hasOwnProperty(t)&&hs[t]?(""+e).trim():e+"px"}function Kg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=qg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var By=at({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jc(t,e){if(e){if(By[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Yc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qc=null;function Jf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Kc=null,xo=null,So=null;function fh(t){if(t=Ks(t)){if(typeof Kc!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=ql(e),Kc(t.stateNode,t.type,e))}}function Zg(t){xo?So?So.push(t):So=[t]:xo=t}function Qg(){if(xo){var t=xo,e=So;if(So=xo=null,fh(t),e)for(t=0;t<e.length;t++)fh(e[t])}}function Jg(t,e){return t(e)}function e_(){}var Uu=!1;function t_(t,e,n){if(Uu)return t(e,n);Uu=!0;try{return Jg(t,e,n)}finally{Uu=!1,(xo!==null||So!==null)&&(e_(),Qg())}}function As(t,e){var n=t.stateNode;if(n===null)return null;var i=ql(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Zc=!1;if(Ti)try{var qo={};Object.defineProperty(qo,"passive",{get:function(){Zc=!0}}),window.addEventListener("test",qo,qo),window.removeEventListener("test",qo,qo)}catch{Zc=!1}function Hy(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var ps=!1,dl=null,hl=!1,Qc=null,Gy={onError:function(t){ps=!0,dl=t}};function Vy(t,e,n,i,r,o,s,a,l){ps=!1,dl=null,Hy.apply(Gy,arguments)}function Wy(t,e,n,i,r,o,s,a,l){if(Vy.apply(this,arguments),ps){if(ps){var u=dl;ps=!1,dl=null}else throw Error(ie(198));hl||(hl=!0,Qc=u)}}function Nr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function n_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dh(t){if(Nr(t)!==t)throw Error(ie(188))}function $y(t){var e=t.alternate;if(!e){if(e=Nr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return dh(r),t;if(o===i)return dh(r),e;o=o.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function i_(t){return t=$y(t),t!==null?r_(t):null}function r_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=r_(t);if(e!==null)return e;t=t.sibling}return null}var o_=xn.unstable_scheduleCallback,hh=xn.unstable_cancelCallback,Xy=xn.unstable_shouldYield,jy=xn.unstable_requestPaint,pt=xn.unstable_now,Yy=xn.unstable_getCurrentPriorityLevel,ed=xn.unstable_ImmediatePriority,s_=xn.unstable_UserBlockingPriority,pl=xn.unstable_NormalPriority,qy=xn.unstable_LowPriority,a_=xn.unstable_IdlePriority,$l=null,ai=null;function Ky(t){if(ai&&typeof ai.onCommitFiberRoot=="function")try{ai.onCommitFiberRoot($l,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:Jy,Zy=Math.log,Qy=Math.LN2;function Jy(t){return t>>>=0,t===0?32:31-(Zy(t)/Qy|0)|0}var fa=64,da=4194304;function cs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=cs(a):(o&=s,o!==0&&(i=cs(o)))}else s=n&~r,s!==0?i=cs(s):o!==0&&(i=cs(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-jn(e),r=1<<n,i|=t[n],e&=~r;return i}function ex(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-jn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=ex(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Jc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function l_(){var t=fa;return fa<<=1,!(fa&4194240)&&(fa=64),t}function Iu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ys(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function nx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-jn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function td(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Xe=0;function u_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var c_,nd,f_,d_,h_,ef=!1,ha=[],Gi=null,Vi=null,Wi=null,Cs=new Map,bs=new Map,ki=[],ix="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ph(t,e){switch(t){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Vi=null;break;case"mouseover":case"mouseout":Wi=null;break;case"pointerover":case"pointerout":Cs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":bs.delete(e.pointerId)}}function Ko(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=Ks(e),e!==null&&nd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function rx(t,e,n,i,r){switch(e){case"focusin":return Gi=Ko(Gi,t,e,n,i,r),!0;case"dragenter":return Vi=Ko(Vi,t,e,n,i,r),!0;case"mouseover":return Wi=Ko(Wi,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Cs.set(o,Ko(Cs.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,bs.set(o,Ko(bs.get(o)||null,t,e,n,i,r)),!0}return!1}function p_(t){var e=pr(t.target);if(e!==null){var n=Nr(e);if(n!==null){if(e=n.tag,e===13){if(e=n_(n),e!==null){t.blockedOn=e,h_(t.priority,function(){f_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Za(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=tf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);qc=i,n.target.dispatchEvent(i),qc=null}else return e=Ks(n),e!==null&&nd(e),t.blockedOn=n,!1;e.shift()}return!0}function mh(t,e,n){Za(t)&&n.delete(e)}function ox(){ef=!1,Gi!==null&&Za(Gi)&&(Gi=null),Vi!==null&&Za(Vi)&&(Vi=null),Wi!==null&&Za(Wi)&&(Wi=null),Cs.forEach(mh),bs.forEach(mh)}function Zo(t,e){t.blockedOn===e&&(t.blockedOn=null,ef||(ef=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,ox)))}function Rs(t){function e(r){return Zo(r,t)}if(0<ha.length){Zo(ha[0],t);for(var n=1;n<ha.length;n++){var i=ha[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Gi!==null&&Zo(Gi,t),Vi!==null&&Zo(Vi,t),Wi!==null&&Zo(Wi,t),Cs.forEach(e),bs.forEach(e),n=0;n<ki.length;n++)i=ki[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ki.length&&(n=ki[0],n.blockedOn===null);)p_(n),n.blockedOn===null&&ki.shift()}var Eo=Ri.ReactCurrentBatchConfig,gl=!0;function sx(t,e,n,i){var r=Xe,o=Eo.transition;Eo.transition=null;try{Xe=1,id(t,e,n,i)}finally{Xe=r,Eo.transition=o}}function ax(t,e,n,i){var r=Xe,o=Eo.transition;Eo.transition=null;try{Xe=4,id(t,e,n,i)}finally{Xe=r,Eo.transition=o}}function id(t,e,n,i){if(gl){var r=tf(t,e,n,i);if(r===null)Wu(t,e,i,_l,n),ph(t,i);else if(rx(r,t,e,n,i))i.stopPropagation();else if(ph(t,i),e&4&&-1<ix.indexOf(t)){for(;r!==null;){var o=Ks(r);if(o!==null&&c_(o),o=tf(t,e,n,i),o===null&&Wu(t,e,i,_l,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Wu(t,e,i,null,n)}}var _l=null;function tf(t,e,n,i){if(_l=null,t=Jf(i),t=pr(t),t!==null)if(e=Nr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=n_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _l=t,null}function m_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yy()){case ed:return 1;case s_:return 4;case pl:case qy:return 16;case a_:return 536870912;default:return 16}default:return 16}}var Bi=null,rd=null,Qa=null;function g_(){if(Qa)return Qa;var t,e=rd,n=e.length,i,r="value"in Bi?Bi.value:Bi.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return Qa=r.slice(t,1<i?1-i:void 0)}function Ja(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function pa(){return!0}function gh(){return!1}function En(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?pa:gh,this.isPropagationStopped=gh,this}return at(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pa)},persist:function(){},isPersistent:pa}),e}var Vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},od=En(Vo),qs=at({},Vo,{view:0,detail:0}),lx=En(qs),Nu,Ou,Qo,Xl=at({},qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qo&&(Qo&&t.type==="mousemove"?(Nu=t.screenX-Qo.screenX,Ou=t.screenY-Qo.screenY):Ou=Nu=0,Qo=t),Nu)},movementY:function(t){return"movementY"in t?t.movementY:Ou}}),_h=En(Xl),ux=at({},Xl,{dataTransfer:0}),cx=En(ux),fx=at({},qs,{relatedTarget:0}),Fu=En(fx),dx=at({},Vo,{animationName:0,elapsedTime:0,pseudoElement:0}),hx=En(dx),px=at({},Vo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mx=En(px),gx=at({},Vo,{data:0}),vh=En(gx),_x={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yx[t])?!!e[t]:!1}function sd(){return xx}var Sx=at({},qs,{key:function(t){if(t.key){var e=_x[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ja(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sd,charCode:function(t){return t.type==="keypress"?Ja(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ja(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ex=En(Sx),Mx=at({},Xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yh=En(Mx),wx=at({},qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sd}),Tx=En(wx),Ax=at({},Vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cx=En(Ax),bx=at({},Xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Rx=En(bx),Px=[9,13,27,32],ad=Ti&&"CompositionEvent"in window,ms=null;Ti&&"documentMode"in document&&(ms=document.documentMode);var Lx=Ti&&"TextEvent"in window&&!ms,__=Ti&&(!ad||ms&&8<ms&&11>=ms),xh=String.fromCharCode(32),Sh=!1;function v_(t,e){switch(t){case"keyup":return Px.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function y_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ao=!1;function Dx(t,e){switch(t){case"compositionend":return y_(e);case"keypress":return e.which!==32?null:(Sh=!0,xh);case"textInput":return t=e.data,t===xh&&Sh?null:t;default:return null}}function Ux(t,e){if(ao)return t==="compositionend"||!ad&&v_(t,e)?(t=g_(),Qa=rd=Bi=null,ao=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return __&&e.locale!=="ko"?null:e.data;default:return null}}var Ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ix[t.type]:e==="textarea"}function x_(t,e,n,i){Zg(i),e=vl(e,"onChange"),0<e.length&&(n=new od("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var gs=null,Ps=null;function Nx(t){L_(t,0)}function jl(t){var e=co(t);if(Wg(e))return t}function Ox(t,e){if(t==="change")return e}var S_=!1;if(Ti){var ku;if(Ti){var zu="oninput"in document;if(!zu){var Mh=document.createElement("div");Mh.setAttribute("oninput","return;"),zu=typeof Mh.oninput=="function"}ku=zu}else ku=!1;S_=ku&&(!document.documentMode||9<document.documentMode)}function wh(){gs&&(gs.detachEvent("onpropertychange",E_),Ps=gs=null)}function E_(t){if(t.propertyName==="value"&&jl(Ps)){var e=[];x_(e,Ps,t,Jf(t)),t_(Nx,e)}}function Fx(t,e,n){t==="focusin"?(wh(),gs=e,Ps=n,gs.attachEvent("onpropertychange",E_)):t==="focusout"&&wh()}function kx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jl(Ps)}function zx(t,e){if(t==="click")return jl(e)}function Bx(t,e){if(t==="input"||t==="change")return jl(e)}function Hx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qn=typeof Object.is=="function"?Object.is:Hx;function Ls(t,e){if(qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Fc.call(e,r)||!qn(t[r],e[r]))return!1}return!0}function Th(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ah(t,e){var n=Th(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Th(n)}}function M_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?M_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function w_(){for(var t=window,e=fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fl(t.document)}return e}function ld(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Gx(t){var e=w_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&M_(n.ownerDocument.documentElement,n)){if(i!==null&&ld(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Ah(n,o);var s=Ah(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Vx=Ti&&"documentMode"in document&&11>=document.documentMode,lo=null,nf=null,_s=null,rf=!1;function Ch(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rf||lo==null||lo!==fl(i)||(i=lo,"selectionStart"in i&&ld(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),_s&&Ls(_s,i)||(_s=i,i=vl(nf,"onSelect"),0<i.length&&(e=new od("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=lo)))}function ma(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var uo={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionend:ma("Transition","TransitionEnd")},Bu={},T_={};Ti&&(T_=document.createElement("div").style,"AnimationEvent"in window||(delete uo.animationend.animation,delete uo.animationiteration.animation,delete uo.animationstart.animation),"TransitionEvent"in window||delete uo.transitionend.transition);function Yl(t){if(Bu[t])return Bu[t];if(!uo[t])return t;var e=uo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in T_)return Bu[t]=e[n];return t}var A_=Yl("animationend"),C_=Yl("animationiteration"),b_=Yl("animationstart"),R_=Yl("transitionend"),P_=new Map,bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,e){P_.set(t,e),Ir(e,[t])}for(var Hu=0;Hu<bh.length;Hu++){var Gu=bh[Hu],Wx=Gu.toLowerCase(),$x=Gu[0].toUpperCase()+Gu.slice(1);er(Wx,"on"+$x)}er(A_,"onAnimationEnd");er(C_,"onAnimationIteration");er(b_,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er(R_,"onTransitionEnd");Ro("onMouseEnter",["mouseout","mouseover"]);Ro("onMouseLeave",["mouseout","mouseover"]);Ro("onPointerEnter",["pointerout","pointerover"]);Ro("onPointerLeave",["pointerout","pointerover"]);Ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xx=new Set("cancel close invalid load scroll toggle".split(" ").concat(fs));function Rh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Wy(i,e,void 0,t),t.currentTarget=null}function L_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;Rh(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;Rh(r,a,u),o=l}}}if(hl)throw t=Qc,hl=!1,Qc=null,t}function et(t,e){var n=e[uf];n===void 0&&(n=e[uf]=new Set);var i=t+"__bubble";n.has(i)||(D_(e,t,2,!1),n.add(i))}function Vu(t,e,n){var i=0;e&&(i|=4),D_(n,t,i,e)}var ga="_reactListening"+Math.random().toString(36).slice(2);function Ds(t){if(!t[ga]){t[ga]=!0,zg.forEach(function(n){n!=="selectionchange"&&(Xx.has(n)||Vu(n,!1,t),Vu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ga]||(e[ga]=!0,Vu("selectionchange",!1,e))}}function D_(t,e,n,i){switch(m_(e)){case 1:var r=sx;break;case 4:r=ax;break;default:r=id}n=r.bind(null,e,n,t),r=void 0,!Zc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Wu(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=pr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}t_(function(){var u=o,f=Jf(n),d=[];e:{var h=P_.get(t);if(h!==void 0){var p=od,y=t;switch(t){case"keypress":if(Ja(n)===0)break e;case"keydown":case"keyup":p=Ex;break;case"focusin":y="focus",p=Fu;break;case"focusout":y="blur",p=Fu;break;case"beforeblur":case"afterblur":p=Fu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=_h;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=cx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Tx;break;case A_:case C_:case b_:p=hx;break;case R_:p=Cx;break;case"scroll":p=lx;break;case"wheel":p=Rx;break;case"copy":case"cut":case"paste":p=mx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=yh}var v=(e&4)!==0,m=!v&&t==="scroll",c=v?h!==null?h+"Capture":null:h;v=[];for(var g=u,_;g!==null;){_=g;var E=_.stateNode;if(_.tag===5&&E!==null&&(_=E,c!==null&&(E=As(g,c),E!=null&&v.push(Us(g,E,_)))),m)break;g=g.return}0<v.length&&(h=new p(h,y,null,n,f),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==qc&&(y=n.relatedTarget||n.fromElement)&&(pr(y)||y[Ai]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?pr(y):null,y!==null&&(m=Nr(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(v=_h,E="onMouseLeave",c="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(v=yh,E="onPointerLeave",c="onPointerEnter",g="pointer"),m=p==null?h:co(p),_=y==null?h:co(y),h=new v(E,g+"leave",p,n,f),h.target=m,h.relatedTarget=_,E=null,pr(f)===u&&(v=new v(c,g+"enter",y,n,f),v.target=_,v.relatedTarget=m,E=v),m=E,p&&y)t:{for(v=p,c=y,g=0,_=v;_;_=kr(_))g++;for(_=0,E=c;E;E=kr(E))_++;for(;0<g-_;)v=kr(v),g--;for(;0<_-g;)c=kr(c),_--;for(;g--;){if(v===c||c!==null&&v===c.alternate)break t;v=kr(v),c=kr(c)}v=null}else v=null;p!==null&&Ph(d,h,p,v,!1),y!==null&&m!==null&&Ph(d,m,y,v,!0)}}e:{if(h=u?co(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var S=Ox;else if(Eh(h))if(S_)S=Bx;else{S=kx;var w=Fx}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=zx);if(S&&(S=S(t,u))){x_(d,S,n,f);break e}w&&w(t,h,u),t==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&Wc(h,"number",h.value)}switch(w=u?co(u):window,t){case"focusin":(Eh(w)||w.contentEditable==="true")&&(lo=w,nf=u,_s=null);break;case"focusout":_s=nf=lo=null;break;case"mousedown":rf=!0;break;case"contextmenu":case"mouseup":case"dragend":rf=!1,Ch(d,n,f);break;case"selectionchange":if(Vx)break;case"keydown":case"keyup":Ch(d,n,f)}var C;if(ad)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else ao?v_(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(__&&n.locale!=="ko"&&(ao||D!=="onCompositionStart"?D==="onCompositionEnd"&&ao&&(C=g_()):(Bi=f,rd="value"in Bi?Bi.value:Bi.textContent,ao=!0)),w=vl(u,D),0<w.length&&(D=new vh(D,t,null,n,f),d.push({event:D,listeners:w}),C?D.data=C:(C=y_(n),C!==null&&(D.data=C)))),(C=Lx?Dx(t,n):Ux(t,n))&&(u=vl(u,"onBeforeInput"),0<u.length&&(f=new vh("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=C))}L_(d,e)})}function Us(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=As(t,n),o!=null&&i.unshift(Us(t,o,r)),o=As(t,e),o!=null&&i.push(Us(t,o,r))),t=t.return}return i}function kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ph(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=As(n,o),l!=null&&s.unshift(Us(n,l,a))):r||(l=As(n,o),l!=null&&s.push(Us(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var jx=/\r\n?/g,Yx=/\u0000|\uFFFD/g;function Lh(t){return(typeof t=="string"?t:""+t).replace(jx,`
`).replace(Yx,"")}function _a(t,e,n){if(e=Lh(e),Lh(t)!==e&&n)throw Error(ie(425))}function yl(){}var of=null,sf=null;function af(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var lf=typeof setTimeout=="function"?setTimeout:void 0,qx=typeof clearTimeout=="function"?clearTimeout:void 0,Dh=typeof Promise=="function"?Promise:void 0,Kx=typeof queueMicrotask=="function"?queueMicrotask:typeof Dh<"u"?function(t){return Dh.resolve(null).then(t).catch(Zx)}:lf;function Zx(t){setTimeout(function(){throw t})}function $u(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Rs(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Rs(e)}function $i(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Uh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Wo=Math.random().toString(36).slice(2),oi="__reactFiber$"+Wo,Is="__reactProps$"+Wo,Ai="__reactContainer$"+Wo,uf="__reactEvents$"+Wo,Qx="__reactListeners$"+Wo,Jx="__reactHandles$"+Wo;function pr(t){var e=t[oi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ai]||n[oi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Uh(t);t!==null;){if(n=t[oi])return n;t=Uh(t)}return e}t=n,n=t.parentNode}return null}function Ks(t){return t=t[oi]||t[Ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function co(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function ql(t){return t[Is]||null}var cf=[],fo=-1;function tr(t){return{current:t}}function nt(t){0>fo||(t.current=cf[fo],cf[fo]=null,fo--)}function Je(t,e){fo++,cf[fo]=t.current,t.current=e}var Qi={},$t=tr(Qi),rn=tr(!1),Tr=Qi;function Po(t,e){var n=t.type.contextTypes;if(!n)return Qi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function on(t){return t=t.childContextTypes,t!=null}function xl(){nt(rn),nt($t)}function Ih(t,e,n){if($t.current!==Qi)throw Error(ie(168));Je($t,e),Je(rn,n)}function U_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,Fy(t)||"Unknown",r));return at({},n,i)}function Sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,Tr=$t.current,Je($t,t),Je(rn,rn.current),!0}function Nh(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=U_(t,e,Tr),i.__reactInternalMemoizedMergedChildContext=t,nt(rn),nt($t),Je($t,t)):nt(rn),Je(rn,n)}var yi=null,Kl=!1,Xu=!1;function I_(t){yi===null?yi=[t]:yi.push(t)}function eS(t){Kl=!0,I_(t)}function nr(){if(!Xu&&yi!==null){Xu=!0;var t=0,e=Xe;try{var n=yi;for(Xe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}yi=null,Kl=!1}catch(r){throw yi!==null&&(yi=yi.slice(t+1)),o_(ed,nr),r}finally{Xe=e,Xu=!1}}return null}var ho=[],po=0,El=null,Ml=0,An=[],Cn=0,Ar=null,Si=1,Ei="";function ur(t,e){ho[po++]=Ml,ho[po++]=El,El=t,Ml=e}function N_(t,e,n){An[Cn++]=Si,An[Cn++]=Ei,An[Cn++]=Ar,Ar=t;var i=Si;t=Ei;var r=32-jn(i)-1;i&=~(1<<r),n+=1;var o=32-jn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Si=1<<32-jn(e)+r|n<<r|i,Ei=o+t}else Si=1<<o|n<<r|i,Ei=t}function ud(t){t.return!==null&&(ur(t,1),N_(t,1,0))}function cd(t){for(;t===El;)El=ho[--po],ho[po]=null,Ml=ho[--po],ho[po]=null;for(;t===Ar;)Ar=An[--Cn],An[Cn]=null,Ei=An[--Cn],An[Cn]=null,Si=An[--Cn],An[Cn]=null}var _n=null,gn=null,it=!1,Vn=null;function O_(t,e){var n=Pn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Oh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_n=t,gn=$i(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_n=t,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ar!==null?{id:Si,overflow:Ei}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_n=t,gn=null,!0):!1;default:return!1}}function ff(t){return(t.mode&1)!==0&&(t.flags&128)===0}function df(t){if(it){var e=gn;if(e){var n=e;if(!Oh(t,e)){if(ff(t))throw Error(ie(418));e=$i(n.nextSibling);var i=_n;e&&Oh(t,e)?O_(i,n):(t.flags=t.flags&-4097|2,it=!1,_n=t)}}else{if(ff(t))throw Error(ie(418));t.flags=t.flags&-4097|2,it=!1,_n=t}}}function Fh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_n=t}function va(t){if(t!==_n)return!1;if(!it)return Fh(t),it=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!af(t.type,t.memoizedProps)),e&&(e=gn)){if(ff(t))throw F_(),Error(ie(418));for(;e;)O_(t,e),e=$i(e.nextSibling)}if(Fh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gn=$i(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gn=null}}else gn=_n?$i(t.stateNode.nextSibling):null;return!0}function F_(){for(var t=gn;t;)t=$i(t.nextSibling)}function Lo(){gn=_n=null,it=!1}function fd(t){Vn===null?Vn=[t]:Vn.push(t)}var tS=Ri.ReactCurrentBatchConfig;function Hn(t,e){if(t&&t.defaultProps){e=at({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var wl=tr(null),Tl=null,mo=null,dd=null;function hd(){dd=mo=Tl=null}function pd(t){var e=wl.current;nt(wl),t._currentValue=e}function hf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Mo(t,e){Tl=t,dd=mo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function Dn(t){var e=t._currentValue;if(dd!==t)if(t={context:t,memoizedValue:e,next:null},mo===null){if(Tl===null)throw Error(ie(308));mo=t,Tl.dependencies={lanes:0,firstContext:t}}else mo=mo.next=t;return e}var mr=null;function md(t){mr===null?mr=[t]:mr.push(t)}function k_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,md(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ci(t,i)}function Ci(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fi=!1;function gd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function z_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Be&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ci(t,n)}return r=i.interleaved,r===null?(e.next=e,md(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ci(t,n)}function el(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,td(t,n)}}function kh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Al(t,e,n,i){var r=t.updateQueue;Fi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(o!==null){var d=r.baseState;s=0,f=u=l=null,a=o;do{var h=a.lane,p=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(h=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){d=y.call(p,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(p,d,h):y,h==null)break e;d=at({},d,h);break e;case 2:Fi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=p,l=d):f=f.next=p,s|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);br|=s,t.lanes=s,t.memoizedState=d}}function zh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var B_=new kg.Component().refs;function pf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:at({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zl={isMounted:function(t){return(t=t._reactInternals)?Nr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=Yi(t),o=Mi(i,r);o.payload=e,n!=null&&(o.callback=n),e=Xi(t,o,r),e!==null&&(Yn(e,t,r,i),el(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=Yi(t),o=Mi(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Xi(t,o,r),e!==null&&(Yn(e,t,r,i),el(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),i=Yi(t),r=Mi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Xi(t,r,i),e!==null&&(Yn(e,t,i,n),el(e,t,i))}};function Bh(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!Ls(n,i)||!Ls(r,o):!0}function H_(t,e,n){var i=!1,r=Qi,o=e.contextType;return typeof o=="object"&&o!==null?o=Dn(o):(r=on(e)?Tr:$t.current,i=e.contextTypes,o=(i=i!=null)?Po(t,r):Qi),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function Hh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Zl.enqueueReplaceState(e,e.state,null)}function mf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=B_,gd(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Dn(o):(o=on(e)?Tr:$t.current,r.context=Po(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(pf(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Zl.enqueueReplaceState(r,r.state,null),Al(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Jo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;a===B_&&(a=r.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function ya(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gh(t){var e=t._init;return e(t._payload)}function G_(t){function e(c,g){if(t){var _=c.deletions;_===null?(c.deletions=[g],c.flags|=16):_.push(g)}}function n(c,g){if(!t)return null;for(;g!==null;)e(c,g),g=g.sibling;return null}function i(c,g){for(c=new Map;g!==null;)g.key!==null?c.set(g.key,g):c.set(g.index,g),g=g.sibling;return c}function r(c,g){return c=qi(c,g),c.index=0,c.sibling=null,c}function o(c,g,_){return c.index=_,t?(_=c.alternate,_!==null?(_=_.index,_<g?(c.flags|=2,g):_):(c.flags|=2,g)):(c.flags|=1048576,g)}function s(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,g,_,E){return g===null||g.tag!==6?(g=Ju(_,c.mode,E),g.return=c,g):(g=r(g,_),g.return=c,g)}function l(c,g,_,E){var S=_.type;return S===so?f(c,g,_.props.children,E,_.key):g!==null&&(g.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Oi&&Gh(S)===g.type)?(E=r(g,_.props),E.ref=Jo(c,g,_),E.return=c,E):(E=sl(_.type,_.key,_.props,null,c.mode,E),E.ref=Jo(c,g,_),E.return=c,E)}function u(c,g,_,E){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=ec(_,c.mode,E),g.return=c,g):(g=r(g,_.children||[]),g.return=c,g)}function f(c,g,_,E,S){return g===null||g.tag!==7?(g=xr(_,c.mode,E,S),g.return=c,g):(g=r(g,_),g.return=c,g)}function d(c,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ju(""+g,c.mode,_),g.return=c,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case la:return _=sl(g.type,g.key,g.props,null,c.mode,_),_.ref=Jo(c,null,g),_.return=c,_;case oo:return g=ec(g,c.mode,_),g.return=c,g;case Oi:var E=g._init;return d(c,E(g._payload),_)}if(us(g)||Yo(g))return g=xr(g,c.mode,_,null),g.return=c,g;ya(c,g)}return null}function h(c,g,_,E){var S=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return S!==null?null:a(c,g,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case la:return _.key===S?l(c,g,_,E):null;case oo:return _.key===S?u(c,g,_,E):null;case Oi:return S=_._init,h(c,g,S(_._payload),E)}if(us(_)||Yo(_))return S!==null?null:f(c,g,_,E,null);ya(c,_)}return null}function p(c,g,_,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return c=c.get(_)||null,a(g,c,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case la:return c=c.get(E.key===null?_:E.key)||null,l(g,c,E,S);case oo:return c=c.get(E.key===null?_:E.key)||null,u(g,c,E,S);case Oi:var w=E._init;return p(c,g,_,w(E._payload),S)}if(us(E)||Yo(E))return c=c.get(_)||null,f(g,c,E,S,null);ya(g,E)}return null}function y(c,g,_,E){for(var S=null,w=null,C=g,D=g=0,x=null;C!==null&&D<_.length;D++){C.index>D?(x=C,C=null):x=C.sibling;var A=h(c,C,_[D],E);if(A===null){C===null&&(C=x);break}t&&C&&A.alternate===null&&e(c,C),g=o(A,g,D),w===null?S=A:w.sibling=A,w=A,C=x}if(D===_.length)return n(c,C),it&&ur(c,D),S;if(C===null){for(;D<_.length;D++)C=d(c,_[D],E),C!==null&&(g=o(C,g,D),w===null?S=C:w.sibling=C,w=C);return it&&ur(c,D),S}for(C=i(c,C);D<_.length;D++)x=p(C,c,D,_[D],E),x!==null&&(t&&x.alternate!==null&&C.delete(x.key===null?D:x.key),g=o(x,g,D),w===null?S=x:w.sibling=x,w=x);return t&&C.forEach(function(W){return e(c,W)}),it&&ur(c,D),S}function v(c,g,_,E){var S=Yo(_);if(typeof S!="function")throw Error(ie(150));if(_=S.call(_),_==null)throw Error(ie(151));for(var w=S=null,C=g,D=g=0,x=null,A=_.next();C!==null&&!A.done;D++,A=_.next()){C.index>D?(x=C,C=null):x=C.sibling;var W=h(c,C,A.value,E);if(W===null){C===null&&(C=x);break}t&&C&&W.alternate===null&&e(c,C),g=o(W,g,D),w===null?S=W:w.sibling=W,w=W,C=x}if(A.done)return n(c,C),it&&ur(c,D),S;if(C===null){for(;!A.done;D++,A=_.next())A=d(c,A.value,E),A!==null&&(g=o(A,g,D),w===null?S=A:w.sibling=A,w=A);return it&&ur(c,D),S}for(C=i(c,C);!A.done;D++,A=_.next())A=p(C,c,D,A.value,E),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?D:A.key),g=o(A,g,D),w===null?S=A:w.sibling=A,w=A);return t&&C.forEach(function(Y){return e(c,Y)}),it&&ur(c,D),S}function m(c,g,_,E){if(typeof _=="object"&&_!==null&&_.type===so&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case la:e:{for(var S=_.key,w=g;w!==null;){if(w.key===S){if(S=_.type,S===so){if(w.tag===7){n(c,w.sibling),g=r(w,_.props.children),g.return=c,c=g;break e}}else if(w.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Oi&&Gh(S)===w.type){n(c,w.sibling),g=r(w,_.props),g.ref=Jo(c,w,_),g.return=c,c=g;break e}n(c,w);break}else e(c,w);w=w.sibling}_.type===so?(g=xr(_.props.children,c.mode,E,_.key),g.return=c,c=g):(E=sl(_.type,_.key,_.props,null,c.mode,E),E.ref=Jo(c,g,_),E.return=c,c=E)}return s(c);case oo:e:{for(w=_.key;g!==null;){if(g.key===w)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(c,g.sibling),g=r(g,_.children||[]),g.return=c,c=g;break e}else{n(c,g);break}else e(c,g);g=g.sibling}g=ec(_,c.mode,E),g.return=c,c=g}return s(c);case Oi:return w=_._init,m(c,g,w(_._payload),E)}if(us(_))return y(c,g,_,E);if(Yo(_))return v(c,g,_,E);ya(c,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(c,g.sibling),g=r(g,_),g.return=c,c=g):(n(c,g),g=Ju(_,c.mode,E),g.return=c,c=g),s(c)):n(c,g)}return m}var Do=G_(!0),V_=G_(!1),Zs={},li=tr(Zs),Ns=tr(Zs),Os=tr(Zs);function gr(t){if(t===Zs)throw Error(ie(174));return t}function _d(t,e){switch(Je(Os,e),Je(Ns,t),Je(li,Zs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xc(e,t)}nt(li),Je(li,e)}function Uo(){nt(li),nt(Ns),nt(Os)}function W_(t){gr(Os.current);var e=gr(li.current),n=Xc(e,t.type);e!==n&&(Je(Ns,t),Je(li,n))}function vd(t){Ns.current===t&&(nt(li),nt(Ns))}var ot=tr(0);function Cl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ju=[];function yd(){for(var t=0;t<ju.length;t++)ju[t]._workInProgressVersionPrimary=null;ju.length=0}var tl=Ri.ReactCurrentDispatcher,Yu=Ri.ReactCurrentBatchConfig,Cr=0,st=null,St=null,bt=null,bl=!1,vs=!1,Fs=0,nS=0;function zt(){throw Error(ie(321))}function xd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qn(t[n],e[n]))return!1;return!0}function Sd(t,e,n,i,r,o){if(Cr=o,st=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tl.current=t===null||t.memoizedState===null?sS:aS,t=n(i,r),vs){o=0;do{if(vs=!1,Fs=0,25<=o)throw Error(ie(301));o+=1,bt=St=null,e.updateQueue=null,tl.current=lS,t=n(i,r)}while(vs)}if(tl.current=Rl,e=St!==null&&St.next!==null,Cr=0,bt=St=st=null,bl=!1,e)throw Error(ie(300));return t}function Ed(){var t=Fs!==0;return Fs=0,t}function ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?st.memoizedState=bt=t:bt=bt.next=t,bt}function Un(){if(St===null){var t=st.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=bt===null?st.memoizedState:bt.next;if(e!==null)bt=e,St=t;else{if(t===null)throw Error(ie(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},bt===null?st.memoizedState=bt=t:bt=bt.next=t}return bt}function ks(t,e){return typeof e=="function"?e(t):e}function qu(t){var e=Un(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=St,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var f=u.lane;if((Cr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=i):l=l.next=d,st.lanes|=f,br|=f}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,qn(i,e.memoizedState)||(nn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,st.lanes|=o,br|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ku(t){var e=Un(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);qn(o,e.memoizedState)||(nn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function $_(){}function X_(t,e){var n=st,i=Un(),r=e(),o=!qn(i.memoizedState,r);if(o&&(i.memoizedState=r,nn=!0),i=i.queue,Md(q_.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||bt!==null&&bt.memoizedState.tag&1){if(n.flags|=2048,zs(9,Y_.bind(null,n,i,r,e),void 0,null),Rt===null)throw Error(ie(349));Cr&30||j_(n,e,r)}return r}function j_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=st.updateQueue,e===null?(e={lastEffect:null,stores:null},st.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Y_(t,e,n,i){e.value=n,e.getSnapshot=i,K_(e)&&Z_(t)}function q_(t,e,n){return n(function(){K_(e)&&Z_(t)})}function K_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qn(t,n)}catch{return!0}}function Z_(t){var e=Ci(t,1);e!==null&&Yn(e,t,1,-1)}function Vh(t){var e=ti();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:t},e.queue=t,t=t.dispatch=oS.bind(null,st,t),[e.memoizedState,t]}function zs(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=st.updateQueue,e===null?(e={lastEffect:null,stores:null},st.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Q_(){return Un().memoizedState}function nl(t,e,n,i){var r=ti();st.flags|=t,r.memoizedState=zs(1|e,n,void 0,i===void 0?null:i)}function Ql(t,e,n,i){var r=Un();i=i===void 0?null:i;var o=void 0;if(St!==null){var s=St.memoizedState;if(o=s.destroy,i!==null&&xd(i,s.deps)){r.memoizedState=zs(e,n,o,i);return}}st.flags|=t,r.memoizedState=zs(1|e,n,o,i)}function Wh(t,e){return nl(8390656,8,t,e)}function Md(t,e){return Ql(2048,8,t,e)}function J_(t,e){return Ql(4,2,t,e)}function ev(t,e){return Ql(4,4,t,e)}function tv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nv(t,e,n){return n=n!=null?n.concat([t]):null,Ql(4,4,tv.bind(null,e,t),n)}function wd(){}function iv(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function rv(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ov(t,e,n){return Cr&21?(qn(n,e)||(n=l_(),st.lanes|=n,br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function iS(t,e){var n=Xe;Xe=n!==0&&4>n?n:4,t(!0);var i=Yu.transition;Yu.transition={};try{t(!1),e()}finally{Xe=n,Yu.transition=i}}function sv(){return Un().memoizedState}function rS(t,e,n){var i=Yi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},av(t))lv(e,n);else if(n=k_(t,e,n,i),n!==null){var r=Qt();Yn(n,t,i,r),uv(n,e,i)}}function oS(t,e,n){var i=Yi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(av(t))lv(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,qn(a,s)){var l=e.interleaved;l===null?(r.next=r,md(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=k_(t,e,r,i),n!==null&&(r=Qt(),Yn(n,t,i,r),uv(n,e,i))}}function av(t){var e=t.alternate;return t===st||e!==null&&e===st}function lv(t,e){vs=bl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function uv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,td(t,n)}}var Rl={readContext:Dn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},sS={readContext:Dn,useCallback:function(t,e){return ti().memoizedState=[t,e===void 0?null:e],t},useContext:Dn,useEffect:Wh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nl(4194308,4,tv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return nl(4,2,t,e)},useMemo:function(t,e){var n=ti();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ti();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=rS.bind(null,st,t),[i.memoizedState,t]},useRef:function(t){var e=ti();return t={current:t},e.memoizedState=t},useState:Vh,useDebugValue:wd,useDeferredValue:function(t){return ti().memoizedState=t},useTransition:function(){var t=Vh(!1),e=t[0];return t=iS.bind(null,t[1]),ti().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=st,r=ti();if(it){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Rt===null)throw Error(ie(349));Cr&30||j_(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Wh(q_.bind(null,i,o,t),[t]),i.flags|=2048,zs(9,Y_.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=ti(),e=Rt.identifierPrefix;if(it){var n=Ei,i=Si;n=(i&~(1<<32-jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=nS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},aS={readContext:Dn,useCallback:iv,useContext:Dn,useEffect:Md,useImperativeHandle:nv,useInsertionEffect:J_,useLayoutEffect:ev,useMemo:rv,useReducer:qu,useRef:Q_,useState:function(){return qu(ks)},useDebugValue:wd,useDeferredValue:function(t){var e=Un();return ov(e,St.memoizedState,t)},useTransition:function(){var t=qu(ks)[0],e=Un().memoizedState;return[t,e]},useMutableSource:$_,useSyncExternalStore:X_,useId:sv,unstable_isNewReconciler:!1},lS={readContext:Dn,useCallback:iv,useContext:Dn,useEffect:Md,useImperativeHandle:nv,useInsertionEffect:J_,useLayoutEffect:ev,useMemo:rv,useReducer:Ku,useRef:Q_,useState:function(){return Ku(ks)},useDebugValue:wd,useDeferredValue:function(t){var e=Un();return St===null?e.memoizedState=t:ov(e,St.memoizedState,t)},useTransition:function(){var t=Ku(ks)[0],e=Un().memoizedState;return[t,e]},useMutableSource:$_,useSyncExternalStore:X_,useId:sv,unstable_isNewReconciler:!1};function Io(t,e){try{var n="",i=e;do n+=Oy(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Zu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function gf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var uS=typeof WeakMap=="function"?WeakMap:Map;function cv(t,e,n){n=Mi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ll||(Ll=!0,Af=i),gf(t,e)},n}function fv(t,e,n){n=Mi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){gf(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){gf(t,e),typeof i!="function"&&(ji===null?ji=new Set([this]):ji.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function $h(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new uS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=MS.bind(null,t,e,n),e.then(t,t))}function Xh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function jh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mi(-1,1),e.tag=2,Xi(n,e,1))),n.lanes|=1),t)}var cS=Ri.ReactCurrentOwner,nn=!1;function qt(t,e,n,i){e.child=t===null?V_(e,null,n,i):Do(e,t.child,n,i)}function Yh(t,e,n,i,r){n=n.render;var o=e.ref;return Mo(e,r),i=Sd(t,e,n,i,o,r),n=Ed(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,bi(t,e,r)):(it&&n&&ud(e),e.flags|=1,qt(t,e,i,r),e.child)}function qh(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Dd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,dv(t,e,o,i,r)):(t=sl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ls,n(s,i)&&t.ref===e.ref)return bi(t,e,r)}return e.flags|=1,t=qi(o,i),t.ref=e.ref,t.return=e,e.child=t}function dv(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Ls(o,i)&&t.ref===e.ref)if(nn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,bi(t,e,r)}return _f(t,e,n,i,r)}function hv(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Je(_o,pn),pn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Je(_o,pn),pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,Je(_o,pn),pn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,Je(_o,pn),pn|=i;return qt(t,e,r,n),e.child}function pv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _f(t,e,n,i,r){var o=on(n)?Tr:$t.current;return o=Po(e,o),Mo(e,r),n=Sd(t,e,n,i,o,r),i=Ed(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,bi(t,e,r)):(it&&i&&ud(e),e.flags|=1,qt(t,e,n,r),e.child)}function Kh(t,e,n,i,r){if(on(n)){var o=!0;Sl(e)}else o=!1;if(Mo(e,r),e.stateNode===null)il(t,e),H_(e,n,i),mf(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Dn(u):(u=on(n)?Tr:$t.current,u=Po(e,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Hh(e,s,i,u),Fi=!1;var h=e.memoizedState;s.state=h,Al(e,i,s,r),l=e.memoizedState,a!==i||h!==l||rn.current||Fi?(typeof f=="function"&&(pf(e,n,f,i),l=e.memoizedState),(a=Fi||Bh(e,n,a,i,h,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,z_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Hn(e.type,a),s.props=u,d=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dn(l):(l=on(n)?Tr:$t.current,l=Po(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Hh(e,s,i,l),Fi=!1,h=e.memoizedState,s.state=h,Al(e,i,s,r);var y=e.memoizedState;a!==d||h!==y||rn.current||Fi?(typeof p=="function"&&(pf(e,n,p,i),y=e.memoizedState),(u=Fi||Bh(e,n,u,i,h,y,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,y,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),s.props=i,s.state=y,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return vf(t,e,n,i,o,r)}function vf(t,e,n,i,r,o){pv(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Nh(e,n,!1),bi(t,e,o);i=e.stateNode,cS.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Do(e,t.child,null,o),e.child=Do(e,null,a,o)):qt(t,e,a,o),e.memoizedState=i.state,r&&Nh(e,n,!0),e.child}function mv(t){var e=t.stateNode;e.pendingContext?Ih(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ih(t,e.context,!1),_d(t,e.containerInfo)}function Zh(t,e,n,i,r){return Lo(),fd(r),e.flags|=256,qt(t,e,n,i),e.child}var yf={dehydrated:null,treeContext:null,retryLane:0};function xf(t){return{baseLanes:t,cachePool:null,transitions:null}}function gv(t,e,n){var i=e.pendingProps,r=ot.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Je(ot,r&1),t===null)return df(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=tu(s,i,0,null),t=xr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=xf(n),e.memoizedState=yf,t):Td(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return fS(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=qi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=qi(a,o):(o=xr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?xf(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=yf,i}return o=t.child,t=o.sibling,i=qi(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Td(t,e){return e=tu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xa(t,e,n,i){return i!==null&&fd(i),Do(e,t.child,null,n),t=Td(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function fS(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=Zu(Error(ie(422))),xa(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=tu({mode:"visible",children:i.children},r,0,null),o=xr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Do(e,t.child,null,s),e.child.memoizedState=xf(s),e.memoizedState=yf,o);if(!(e.mode&1))return xa(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(ie(419)),i=Zu(o,i,void 0),xa(t,e,s,i)}if(a=(s&t.childLanes)!==0,nn||a){if(i=Rt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Ci(t,r),Yn(i,t,r,-1))}return Ld(),i=Zu(Error(ie(421))),xa(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=wS.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,gn=$i(r.nextSibling),_n=e,it=!0,Vn=null,t!==null&&(An[Cn++]=Si,An[Cn++]=Ei,An[Cn++]=Ar,Si=t.id,Ei=t.overflow,Ar=e),e=Td(e,i.children),e.flags|=4096,e)}function Qh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),hf(t.return,e,n)}function Qu(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function _v(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(qt(t,e,i.children,n),i=ot.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qh(t,n,e);else if(t.tag===19)Qh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Je(ot,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Cl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Qu(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Cl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Qu(e,!0,n,null,o);break;case"together":Qu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function il(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=qi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=qi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function dS(t,e,n){switch(e.tag){case 3:mv(e),Lo();break;case 5:W_(e);break;case 1:on(e.type)&&Sl(e);break;case 4:_d(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Je(wl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Je(ot,ot.current&1),e.flags|=128,null):n&e.child.childLanes?gv(t,e,n):(Je(ot,ot.current&1),t=bi(t,e,n),t!==null?t.sibling:null);Je(ot,ot.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return _v(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Je(ot,ot.current),i)break;return null;case 22:case 23:return e.lanes=0,hv(t,e,n)}return bi(t,e,n)}var vv,Sf,yv,xv;vv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sf=function(){};yv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,gr(li.current);var o=null;switch(n){case"input":r=Gc(t,r),i=Gc(t,i),o=[];break;case"select":r=at({},r,{value:void 0}),i=at({},i,{value:void 0}),o=[];break;case"textarea":r=$c(t,r),i=$c(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=yl)}jc(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ws.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ws.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&et("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};xv=function(t,e,n,i){n!==i&&(e.flags|=4)};function es(t,e){if(!it)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function hS(t,e,n){var i=e.pendingProps;switch(cd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return on(e.type)&&xl(),Bt(e),null;case 3:return i=e.stateNode,Uo(),nt(rn),nt($t),yd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(va(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(Rf(Vn),Vn=null))),Sf(t,e),Bt(e),null;case 5:vd(e);var r=gr(Os.current);if(n=e.type,t!==null&&e.stateNode!=null)yv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Bt(e),null}if(t=gr(li.current),va(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[oi]=e,i[Is]=o,t=(e.mode&1)!==0,n){case"dialog":et("cancel",i),et("close",i);break;case"iframe":case"object":case"embed":et("load",i);break;case"video":case"audio":for(r=0;r<fs.length;r++)et(fs[r],i);break;case"source":et("error",i);break;case"img":case"image":case"link":et("error",i),et("load",i);break;case"details":et("toggle",i);break;case"input":ah(i,o),et("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},et("invalid",i);break;case"textarea":uh(i,o),et("invalid",i)}jc(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&_a(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&_a(i.textContent,a,t),r=["children",""+a]):ws.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&et("scroll",i)}switch(n){case"input":ua(i),lh(i,o,!0);break;case"textarea":ua(i),ch(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=yl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=jg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[oi]=e,t[Is]=i,vv(t,e,!1,!1),e.stateNode=t;e:{switch(s=Yc(n,i),n){case"dialog":et("cancel",t),et("close",t),r=i;break;case"iframe":case"object":case"embed":et("load",t),r=i;break;case"video":case"audio":for(r=0;r<fs.length;r++)et(fs[r],t);r=i;break;case"source":et("error",t),r=i;break;case"img":case"image":case"link":et("error",t),et("load",t),r=i;break;case"details":et("toggle",t),r=i;break;case"input":ah(t,i),r=Gc(t,i),et("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=at({},i,{value:void 0}),et("invalid",t);break;case"textarea":uh(t,i),r=$c(t,i),et("invalid",t);break;default:r=i}jc(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Kg(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Yg(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ts(t,l):typeof l=="number"&&Ts(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ws.hasOwnProperty(o)?l!=null&&o==="onScroll"&&et("scroll",t):l!=null&&qf(t,o,l,s))}switch(n){case"input":ua(t),lh(t,i,!1);break;case"textarea":ua(t),ch(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Zi(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?yo(t,!!i.multiple,o,!1):i.defaultValue!=null&&yo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=yl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)xv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=gr(Os.current),gr(li.current),va(e)){if(i=e.stateNode,n=e.memoizedProps,i[oi]=e,(o=i.nodeValue!==n)&&(t=_n,t!==null))switch(t.tag){case 3:_a(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_a(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[oi]=e,e.stateNode=i}return Bt(e),null;case 13:if(nt(ot),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(it&&gn!==null&&e.mode&1&&!(e.flags&128))F_(),Lo(),e.flags|=98560,o=!1;else if(o=va(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(ie(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ie(317));o[oi]=e}else Lo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),o=!1}else Vn!==null&&(Rf(Vn),Vn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ot.current&1?Mt===0&&(Mt=3):Ld())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return Uo(),Sf(t,e),t===null&&Ds(e.stateNode.containerInfo),Bt(e),null;case 10:return pd(e.type._context),Bt(e),null;case 17:return on(e.type)&&xl(),Bt(e),null;case 19:if(nt(ot),o=e.memoizedState,o===null)return Bt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)es(o,!1);else{if(Mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Cl(t),s!==null){for(e.flags|=128,es(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Je(ot,ot.current&1|2),e.child}t=t.sibling}o.tail!==null&&pt()>No&&(e.flags|=128,i=!0,es(o,!1),e.lanes=4194304)}else{if(!i)if(t=Cl(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),es(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!it)return Bt(e),null}else 2*pt()-o.renderingStartTime>No&&n!==1073741824&&(e.flags|=128,i=!0,es(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=pt(),e.sibling=null,n=ot.current,Je(ot,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return Pd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function pS(t,e){switch(cd(e),e.tag){case 1:return on(e.type)&&xl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Uo(),nt(rn),nt($t),yd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vd(e),null;case 13:if(nt(ot),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Lo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return nt(ot),null;case 4:return Uo(),null;case 10:return pd(e.type._context),null;case 22:case 23:return Pd(),null;case 24:return null;default:return null}}var Sa=!1,Wt=!1,mS=typeof WeakSet=="function"?WeakSet:Set,pe=null;function go(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ut(t,e,i)}else n.current=null}function Ef(t,e,n){try{n()}catch(i){ut(t,e,i)}}var Jh=!1;function gS(t,e){if(of=gl,t=w_(),ld(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,f=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=s+r),d!==o||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=s),h===o&&++f===i&&(l=s),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(sf={focusedElem:t,selectionRange:n},gl=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,m=y.memoizedState,c=e.stateNode,g=c.getSnapshotBeforeUpdate(e.elementType===e.type?v:Hn(e.type,v),m);c.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(E){ut(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return y=Jh,Jh=!1,y}function ys(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Ef(e,n,o)}r=r.next}while(r!==i)}}function Jl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Mf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Sv(t){var e=t.alternate;e!==null&&(t.alternate=null,Sv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[oi],delete e[Is],delete e[uf],delete e[Qx],delete e[Jx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ev(t){return t.tag===5||t.tag===3||t.tag===4}function ep(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ev(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=yl));else if(i!==4&&(t=t.child,t!==null))for(wf(t,e,n),t=t.sibling;t!==null;)wf(t,e,n),t=t.sibling}function Tf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Tf(t,e,n),t=t.sibling;t!==null;)Tf(t,e,n),t=t.sibling}var Lt=null,Gn=!1;function Li(t,e,n){for(n=n.child;n!==null;)Mv(t,e,n),n=n.sibling}function Mv(t,e,n){if(ai&&typeof ai.onCommitFiberUnmount=="function")try{ai.onCommitFiberUnmount($l,n)}catch{}switch(n.tag){case 5:Wt||go(n,e);case 6:var i=Lt,r=Gn;Lt=null,Li(t,e,n),Lt=i,Gn=r,Lt!==null&&(Gn?(t=Lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Lt.removeChild(n.stateNode));break;case 18:Lt!==null&&(Gn?(t=Lt,n=n.stateNode,t.nodeType===8?$u(t.parentNode,n):t.nodeType===1&&$u(t,n),Rs(t)):$u(Lt,n.stateNode));break;case 4:i=Lt,r=Gn,Lt=n.stateNode.containerInfo,Gn=!0,Li(t,e,n),Lt=i,Gn=r;break;case 0:case 11:case 14:case 15:if(!Wt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ef(n,e,s),r=r.next}while(r!==i)}Li(t,e,n);break;case 1:if(!Wt&&(go(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){ut(n,e,a)}Li(t,e,n);break;case 21:Li(t,e,n);break;case 22:n.mode&1?(Wt=(i=Wt)||n.memoizedState!==null,Li(t,e,n),Wt=i):Li(t,e,n);break;default:Li(t,e,n)}}function tp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new mS),e.forEach(function(i){var r=TS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function On(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Lt=a.stateNode,Gn=!1;break e;case 3:Lt=a.stateNode.containerInfo,Gn=!0;break e;case 4:Lt=a.stateNode.containerInfo,Gn=!0;break e}a=a.return}if(Lt===null)throw Error(ie(160));Mv(o,s,r),Lt=null,Gn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){ut(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)wv(e,t),e=e.sibling}function wv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(On(e,t),Qn(t),i&4){try{ys(3,t,t.return),Jl(3,t)}catch(v){ut(t,t.return,v)}try{ys(5,t,t.return)}catch(v){ut(t,t.return,v)}}break;case 1:On(e,t),Qn(t),i&512&&n!==null&&go(n,n.return);break;case 5:if(On(e,t),Qn(t),i&512&&n!==null&&go(n,n.return),t.flags&32){var r=t.stateNode;try{Ts(r,"")}catch(v){ut(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&$g(r,o),Yc(a,s);var u=Yc(a,o);for(s=0;s<l.length;s+=2){var f=l[s],d=l[s+1];f==="style"?Kg(r,d):f==="dangerouslySetInnerHTML"?Yg(r,d):f==="children"?Ts(r,d):qf(r,f,d,u)}switch(a){case"input":Vc(r,o);break;case"textarea":Xg(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?yo(r,!!o.multiple,p,!1):h!==!!o.multiple&&(o.defaultValue!=null?yo(r,!!o.multiple,o.defaultValue,!0):yo(r,!!o.multiple,o.multiple?[]:"",!1))}r[Is]=o}catch(v){ut(t,t.return,v)}}break;case 6:if(On(e,t),Qn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(v){ut(t,t.return,v)}}break;case 3:if(On(e,t),Qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Rs(e.containerInfo)}catch(v){ut(t,t.return,v)}break;case 4:On(e,t),Qn(t);break;case 13:On(e,t),Qn(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(bd=pt())),i&4&&tp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Wt=(u=Wt)||f,On(e,t),Wt=u):On(e,t),Qn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(pe=t,f=t.child;f!==null;){for(d=pe=f;pe!==null;){switch(h=pe,p=h.child,h.tag){case 0:case 11:case 14:case 15:ys(4,h,h.return);break;case 1:go(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){ut(i,n,v)}}break;case 5:go(h,h.return);break;case 22:if(h.memoizedState!==null){ip(d);continue}}p!==null?(p.return=h,pe=p):ip(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=qg("display",s))}catch(v){ut(t,t.return,v)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){ut(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:On(e,t),Qn(t),i&4&&tp(t);break;case 21:break;default:On(e,t),Qn(t)}}function Qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ev(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ts(r,""),i.flags&=-33);var o=ep(t);Tf(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=ep(t);wf(t,a,s);break;default:throw Error(ie(161))}}catch(l){ut(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function _S(t,e,n){pe=t,Tv(t)}function Tv(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Sa;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Wt;a=Sa;var u=Wt;if(Sa=s,(Wt=l)&&!u)for(pe=r;pe!==null;)s=pe,l=s.child,s.tag===22&&s.memoizedState!==null?rp(r):l!==null?(l.return=s,pe=l):rp(r);for(;o!==null;)pe=o,Tv(o),o=o.sibling;pe=r,Sa=a,Wt=u}np(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,pe=o):np(t)}}function np(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||Jl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Wt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&zh(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zh(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Rs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Wt||e.flags&512&&Mf(e)}catch(h){ut(e,e.return,h)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function ip(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function rp(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Jl(4,e)}catch(l){ut(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ut(e,r,l)}}var o=e.return;try{Mf(e)}catch(l){ut(e,o,l)}break;case 5:var s=e.return;try{Mf(e)}catch(l){ut(e,s,l)}}}catch(l){ut(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var vS=Math.ceil,Pl=Ri.ReactCurrentDispatcher,Ad=Ri.ReactCurrentOwner,Ln=Ri.ReactCurrentBatchConfig,Be=0,Rt=null,yt=null,It=0,pn=0,_o=tr(0),Mt=0,Bs=null,br=0,eu=0,Cd=0,xs=null,tn=null,bd=0,No=1/0,vi=null,Ll=!1,Af=null,ji=null,Ea=!1,Hi=null,Dl=0,Ss=0,Cf=null,rl=-1,ol=0;function Qt(){return Be&6?pt():rl!==-1?rl:rl=pt()}function Yi(t){return t.mode&1?Be&2&&It!==0?It&-It:tS.transition!==null?(ol===0&&(ol=l_()),ol):(t=Xe,t!==0||(t=window.event,t=t===void 0?16:m_(t.type)),t):1}function Yn(t,e,n,i){if(50<Ss)throw Ss=0,Cf=null,Error(ie(185));Ys(t,n,i),(!(Be&2)||t!==Rt)&&(t===Rt&&(!(Be&2)&&(eu|=n),Mt===4&&zi(t,It)),sn(t,i),n===1&&Be===0&&!(e.mode&1)&&(No=pt()+500,Kl&&nr()))}function sn(t,e){var n=t.callbackNode;tx(t,e);var i=ml(t,t===Rt?It:0);if(i===0)n!==null&&hh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&hh(n),e===1)t.tag===0?eS(op.bind(null,t)):I_(op.bind(null,t)),Kx(function(){!(Be&6)&&nr()}),n=null;else{switch(u_(i)){case 1:n=ed;break;case 4:n=s_;break;case 16:n=pl;break;case 536870912:n=a_;break;default:n=pl}n=Uv(n,Av.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Av(t,e){if(rl=-1,ol=0,Be&6)throw Error(ie(327));var n=t.callbackNode;if(wo()&&t.callbackNode!==n)return null;var i=ml(t,t===Rt?It:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ul(t,i);else{e=i;var r=Be;Be|=2;var o=bv();(Rt!==t||It!==e)&&(vi=null,No=pt()+500,yr(t,e));do try{SS();break}catch(a){Cv(t,a)}while(1);hd(),Pl.current=o,Be=r,yt!==null?e=0:(Rt=null,It=0,e=Mt)}if(e!==0){if(e===2&&(r=Jc(t),r!==0&&(i=r,e=bf(t,r))),e===1)throw n=Bs,yr(t,0),zi(t,i),sn(t,pt()),n;if(e===6)zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!yS(r)&&(e=Ul(t,i),e===2&&(o=Jc(t),o!==0&&(i=o,e=bf(t,o))),e===1))throw n=Bs,yr(t,0),zi(t,i),sn(t,pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:cr(t,tn,vi);break;case 3:if(zi(t,i),(i&130023424)===i&&(e=bd+500-pt(),10<e)){if(ml(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=lf(cr.bind(null,t,tn,vi),e);break}cr(t,tn,vi);break;case 4:if(zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-jn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*vS(i/1960))-i,10<i){t.timeoutHandle=lf(cr.bind(null,t,tn,vi),i);break}cr(t,tn,vi);break;case 5:cr(t,tn,vi);break;default:throw Error(ie(329))}}}return sn(t,pt()),t.callbackNode===n?Av.bind(null,t):null}function bf(t,e){var n=xs;return t.current.memoizedState.isDehydrated&&(yr(t,e).flags|=256),t=Ul(t,e),t!==2&&(e=tn,tn=n,e!==null&&Rf(e)),t}function Rf(t){tn===null?tn=t:tn.push.apply(tn,t)}function yS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!qn(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zi(t,e){for(e&=~Cd,e&=~eu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),i=1<<n;t[n]=-1,e&=~i}}function op(t){if(Be&6)throw Error(ie(327));wo();var e=ml(t,0);if(!(e&1))return sn(t,pt()),null;var n=Ul(t,e);if(t.tag!==0&&n===2){var i=Jc(t);i!==0&&(e=i,n=bf(t,i))}if(n===1)throw n=Bs,yr(t,0),zi(t,e),sn(t,pt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,cr(t,tn,vi),sn(t,pt()),null}function Rd(t,e){var n=Be;Be|=1;try{return t(e)}finally{Be=n,Be===0&&(No=pt()+500,Kl&&nr())}}function Rr(t){Hi!==null&&Hi.tag===0&&!(Be&6)&&wo();var e=Be;Be|=1;var n=Ln.transition,i=Xe;try{if(Ln.transition=null,Xe=1,t)return t()}finally{Xe=i,Ln.transition=n,Be=e,!(Be&6)&&nr()}}function Pd(){pn=_o.current,nt(_o)}function yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,qx(n)),yt!==null)for(n=yt.return;n!==null;){var i=n;switch(cd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&xl();break;case 3:Uo(),nt(rn),nt($t),yd();break;case 5:vd(i);break;case 4:Uo();break;case 13:nt(ot);break;case 19:nt(ot);break;case 10:pd(i.type._context);break;case 22:case 23:Pd()}n=n.return}if(Rt=t,yt=t=qi(t.current,null),It=pn=e,Mt=0,Bs=null,Cd=eu=br=0,tn=xs=null,mr!==null){for(e=0;e<mr.length;e++)if(n=mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}mr=null}return t}function Cv(t,e){do{var n=yt;try{if(hd(),tl.current=Rl,bl){for(var i=st.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}bl=!1}if(Cr=0,bt=St=st=null,vs=!1,Fs=0,Ad.current=null,n===null||n.return===null){Mt=1,Bs=e,yt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=It,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Xh(s);if(p!==null){p.flags&=-257,jh(p,s,a,o,e),p.mode&1&&$h(o,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){$h(o,u,e),Ld();break e}l=Error(ie(426))}}else if(it&&a.mode&1){var m=Xh(s);if(m!==null){!(m.flags&65536)&&(m.flags|=256),jh(m,s,a,o,e),fd(Io(l,a));break e}}o=l=Io(l,a),Mt!==4&&(Mt=2),xs===null?xs=[o]:xs.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var c=cv(o,l,e);kh(o,c);break e;case 1:a=l;var g=o.type,_=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ji===null||!ji.has(_)))){o.flags|=65536,e&=-e,o.lanes|=e;var E=fv(o,a,e);kh(o,E);break e}}o=o.return}while(o!==null)}Pv(n)}catch(S){e=S,yt===n&&n!==null&&(yt=n=n.return);continue}break}while(1)}function bv(){var t=Pl.current;return Pl.current=Rl,t===null?Rl:t}function Ld(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),Rt===null||!(br&268435455)&&!(eu&268435455)||zi(Rt,It)}function Ul(t,e){var n=Be;Be|=2;var i=bv();(Rt!==t||It!==e)&&(vi=null,yr(t,e));do try{xS();break}catch(r){Cv(t,r)}while(1);if(hd(),Be=n,Pl.current=i,yt!==null)throw Error(ie(261));return Rt=null,It=0,Mt}function xS(){for(;yt!==null;)Rv(yt)}function SS(){for(;yt!==null&&!Xy();)Rv(yt)}function Rv(t){var e=Dv(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?Pv(t):yt=e,Ad.current=null}function Pv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=pS(n,e),n!==null){n.flags&=32767,yt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mt=6,yt=null;return}}else if(n=hS(n,e,pn),n!==null){yt=n;return}if(e=e.sibling,e!==null){yt=e;return}yt=e=t}while(e!==null);Mt===0&&(Mt=5)}function cr(t,e,n){var i=Xe,r=Ln.transition;try{Ln.transition=null,Xe=1,ES(t,e,n,i)}finally{Ln.transition=r,Xe=i}return null}function ES(t,e,n,i){do wo();while(Hi!==null);if(Be&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(nx(t,o),t===Rt&&(yt=Rt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ea||(Ea=!0,Uv(pl,function(){return wo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ln.transition,Ln.transition=null;var s=Xe;Xe=1;var a=Be;Be|=4,Ad.current=null,gS(t,n),wv(n,t),Gx(sf),gl=!!of,sf=of=null,t.current=n,_S(n),jy(),Be=a,Xe=s,Ln.transition=o}else t.current=n;if(Ea&&(Ea=!1,Hi=t,Dl=r),o=t.pendingLanes,o===0&&(ji=null),Ky(n.stateNode),sn(t,pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ll)throw Ll=!1,t=Af,Af=null,t;return Dl&1&&t.tag!==0&&wo(),o=t.pendingLanes,o&1?t===Cf?Ss++:(Ss=0,Cf=t):Ss=0,nr(),null}function wo(){if(Hi!==null){var t=u_(Dl),e=Ln.transition,n=Xe;try{if(Ln.transition=null,Xe=16>t?16:t,Hi===null)var i=!1;else{if(t=Hi,Hi=null,Dl=0,Be&6)throw Error(ie(331));var r=Be;for(Be|=4,pe=t.current;pe!==null;){var o=pe,s=o.child;if(pe.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(pe=u;pe!==null;){var f=pe;switch(f.tag){case 0:case 11:case 15:ys(8,f,o)}var d=f.child;if(d!==null)d.return=f,pe=d;else for(;pe!==null;){f=pe;var h=f.sibling,p=f.return;if(Sv(f),f===u){pe=null;break}if(h!==null){h.return=p,pe=h;break}pe=p}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}pe=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,pe=s;else e:for(;pe!==null;){if(o=pe,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ys(9,o,o.return)}var c=o.sibling;if(c!==null){c.return=o.return,pe=c;break e}pe=o.return}}var g=t.current;for(pe=g;pe!==null;){s=pe;var _=s.child;if(s.subtreeFlags&2064&&_!==null)_.return=s,pe=_;else e:for(s=g;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Jl(9,a)}}catch(S){ut(a,a.return,S)}if(a===s){pe=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,pe=E;break e}pe=a.return}}if(Be=r,nr(),ai&&typeof ai.onPostCommitFiberRoot=="function")try{ai.onPostCommitFiberRoot($l,t)}catch{}i=!0}return i}finally{Xe=n,Ln.transition=e}}return!1}function sp(t,e,n){e=Io(n,e),e=cv(t,e,1),t=Xi(t,e,1),e=Qt(),t!==null&&(Ys(t,1,e),sn(t,e))}function ut(t,e,n){if(t.tag===3)sp(t,t,n);else for(;e!==null;){if(e.tag===3){sp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ji===null||!ji.has(i))){t=Io(n,t),t=fv(e,t,1),e=Xi(e,t,1),t=Qt(),e!==null&&(Ys(e,1,t),sn(e,t));break}}e=e.return}}function MS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,Rt===t&&(It&n)===n&&(Mt===4||Mt===3&&(It&130023424)===It&&500>pt()-bd?yr(t,0):Cd|=n),sn(t,e)}function Lv(t,e){e===0&&(t.mode&1?(e=da,da<<=1,!(da&130023424)&&(da=4194304)):e=1);var n=Qt();t=Ci(t,e),t!==null&&(Ys(t,e,n),sn(t,n))}function wS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Lv(t,n)}function TS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),Lv(t,n)}var Dv;Dv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,dS(t,e,n);nn=!!(t.flags&131072)}else nn=!1,it&&e.flags&1048576&&N_(e,Ml,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;il(t,e),t=e.pendingProps;var r=Po(e,$t.current);Mo(e,n),r=Sd(null,e,i,t,r,n);var o=Ed();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(i)?(o=!0,Sl(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,gd(e),r.updater=Zl,e.stateNode=r,r._reactInternals=e,mf(e,i,t,n),e=vf(null,e,i,!0,o,n)):(e.tag=0,it&&o&&ud(e),qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(il(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=CS(i),t=Hn(i,t),r){case 0:e=_f(null,e,i,t,n);break e;case 1:e=Kh(null,e,i,t,n);break e;case 11:e=Yh(null,e,i,t,n);break e;case 14:e=qh(null,e,i,Hn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),_f(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Kh(t,e,i,r,n);case 3:e:{if(mv(e),t===null)throw Error(ie(387));i=e.pendingProps,o=e.memoizedState,r=o.element,z_(t,e),Al(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Io(Error(ie(423)),e),e=Zh(t,e,i,n,r);break e}else if(i!==r){r=Io(Error(ie(424)),e),e=Zh(t,e,i,n,r);break e}else for(gn=$i(e.stateNode.containerInfo.firstChild),_n=e,it=!0,Vn=null,n=V_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Lo(),i===r){e=bi(t,e,n);break e}qt(t,e,i,n)}e=e.child}return e;case 5:return W_(e),t===null&&df(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,af(i,r)?s=null:o!==null&&af(i,o)&&(e.flags|=32),pv(t,e),qt(t,e,s,n),e.child;case 6:return t===null&&df(e),null;case 13:return gv(t,e,n);case 4:return _d(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Do(e,null,i,n):qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Yh(t,e,i,r,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,Je(wl,i._currentValue),i._currentValue=s,o!==null)if(qn(o.value,s)){if(o.children===r.children&&!rn.current){e=bi(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Mi(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),hf(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(ie(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),hf(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Mo(e,n),r=Dn(r),i=i(r),e.flags|=1,qt(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),qh(t,e,i,r,n);case 15:return dv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),il(t,e),e.tag=1,on(i)?(t=!0,Sl(e)):t=!1,Mo(e,n),H_(e,i,r),mf(e,i,r,n),vf(null,e,i,!0,t,n);case 19:return _v(t,e,n);case 22:return hv(t,e,n)}throw Error(ie(156,e.tag))};function Uv(t,e){return o_(t,e)}function AS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(t,e,n,i){return new AS(t,e,n,i)}function Dd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function CS(t){if(typeof t=="function")return Dd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zf)return 11;if(t===Qf)return 14}return 2}function qi(t,e){var n=t.alternate;return n===null?(n=Pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function sl(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")Dd(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case so:return xr(n.children,r,o,e);case Kf:s=8,r|=8;break;case kc:return t=Pn(12,n,e,r|2),t.elementType=kc,t.lanes=o,t;case zc:return t=Pn(13,n,e,r),t.elementType=zc,t.lanes=o,t;case Bc:return t=Pn(19,n,e,r),t.elementType=Bc,t.lanes=o,t;case Gg:return tu(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Bg:s=10;break e;case Hg:s=9;break e;case Zf:s=11;break e;case Qf:s=14;break e;case Oi:s=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Pn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function xr(t,e,n,i){return t=Pn(7,t,i,e),t.lanes=n,t}function tu(t,e,n,i){return t=Pn(22,t,i,e),t.elementType=Gg,t.lanes=n,t.stateNode={isHidden:!1},t}function Ju(t,e,n){return t=Pn(6,t,null,e),t.lanes=n,t}function ec(t,e,n){return e=Pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function bS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Iu(0),this.expirationTimes=Iu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Iu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ud(t,e,n,i,r,o,s,a,l){return t=new bS(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Pn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gd(o),t}function RS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Iv(t){if(!t)return Qi;t=t._reactInternals;e:{if(Nr(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(on(n))return U_(t,n,e)}return e}function Nv(t,e,n,i,r,o,s,a,l){return t=Ud(n,i,!0,t,r,o,s,a,l),t.context=Iv(null),n=t.current,i=Qt(),r=Yi(n),o=Mi(i,r),o.callback=e??null,Xi(n,o,r),t.current.lanes=r,Ys(t,r,i),sn(t,i),t}function nu(t,e,n,i){var r=e.current,o=Qt(),s=Yi(r);return n=Iv(n),e.context===null?e.context=n:e.pendingContext=n,e=Mi(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Xi(r,e,s),t!==null&&(Yn(t,r,s,o),el(t,r,s)),s}function Il(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ap(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Id(t,e){ap(t,e),(t=t.alternate)&&ap(t,e)}function PS(){return null}var Ov=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nd(t){this._internalRoot=t}iu.prototype.render=Nd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));nu(t,e,null,null)};iu.prototype.unmount=Nd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rr(function(){nu(null,t,null,null)}),e[Ai]=null}};function iu(t){this._internalRoot=t}iu.prototype.unstable_scheduleHydration=function(t){if(t){var e=d_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ki.length&&e!==0&&e<ki[n].priority;n++);ki.splice(n,0,t),n===0&&p_(t)}};function Od(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lp(){}function LS(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=Il(s);o.call(u)}}var s=Nv(e,i,t,0,null,!1,!1,"",lp);return t._reactRootContainer=s,t[Ai]=s.current,Ds(t.nodeType===8?t.parentNode:t),Rr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Il(l);a.call(u)}}var l=Ud(t,0,!1,null,null,!1,!1,"",lp);return t._reactRootContainer=l,t[Ai]=l.current,Ds(t.nodeType===8?t.parentNode:t),Rr(function(){nu(e,l,n,i)}),l}function ou(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=Il(s);a.call(l)}}nu(e,s,t,r)}else s=LS(n,e,t,r,i);return Il(s)}c_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=cs(e.pendingLanes);n!==0&&(td(e,n|1),sn(e,pt()),!(Be&6)&&(No=pt()+500,nr()))}break;case 13:Rr(function(){var i=Ci(t,1);if(i!==null){var r=Qt();Yn(i,t,1,r)}}),Id(t,1)}};nd=function(t){if(t.tag===13){var e=Ci(t,134217728);if(e!==null){var n=Qt();Yn(e,t,134217728,n)}Id(t,134217728)}};f_=function(t){if(t.tag===13){var e=Yi(t),n=Ci(t,e);if(n!==null){var i=Qt();Yn(n,t,e,i)}Id(t,e)}};d_=function(){return Xe};h_=function(t,e){var n=Xe;try{return Xe=t,e()}finally{Xe=n}};Kc=function(t,e,n){switch(e){case"input":if(Vc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ql(i);if(!r)throw Error(ie(90));Wg(i),Vc(i,r)}}}break;case"textarea":Xg(t,n);break;case"select":e=n.value,e!=null&&yo(t,!!n.multiple,e,!1)}};Jg=Rd;e_=Rr;var DS={usingClientEntryPoint:!1,Events:[Ks,co,ql,Zg,Qg,Rd]},ts={findFiberByHostInstance:pr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},US={bundleType:ts.bundleType,version:ts.version,rendererPackageName:ts.rendererPackageName,rendererConfig:ts.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ri.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=i_(t),t===null?null:t.stateNode},findFiberByHostInstance:ts.findFiberByHostInstance||PS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ma.isDisabled&&Ma.supportsFiber)try{$l=Ma.inject(US),ai=Ma}catch{}}Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DS;Sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Od(e))throw Error(ie(200));return RS(t,e,null,n)};Sn.createRoot=function(t,e){if(!Od(t))throw Error(ie(299));var n=!1,i="",r=Ov;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ud(t,1,!1,null,null,n,!1,i,r),t[Ai]=e.current,Ds(t.nodeType===8?t.parentNode:t),new Nd(e)};Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=i_(e),t=t===null?null:t.stateNode,t};Sn.flushSync=function(t){return Rr(t)};Sn.hydrate=function(t,e,n){if(!ru(e))throw Error(ie(200));return ou(null,t,e,!0,n)};Sn.hydrateRoot=function(t,e,n){if(!Od(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=Ov;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Nv(e,null,t,1,n??null,r,!1,o,s),t[Ai]=e.current,Ds(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new iu(e)};Sn.render=function(t,e,n){if(!ru(e))throw Error(ie(200));return ou(null,t,e,!1,n)};Sn.unmountComponentAtNode=function(t){if(!ru(t))throw Error(ie(40));return t._reactRootContainer?(Rr(function(){ou(null,null,t,!1,function(){t._reactRootContainer=null,t[Ai]=null})}),!0):!1};Sn.unstable_batchedUpdates=Rd;Sn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ru(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return ou(t,e,n,!1,i)};Sn.version="18.2.0-next-9e3b772b8-20220608";function Fv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fv)}catch(t){console.error(t)}}Fv(),Ng.exports=Sn;var IS=Ng.exports,up=IS;Oc.createRoot=up.createRoot,Oc.hydrateRoot=up.hydrateRoot;function NS(t){const e=ke.createContext(null);return[({children:r,value:o})=>qe.createElement(e.Provider,{value:o},r),()=>{const r=ke.useContext(e);if(r===null)throw new Error(t);return r}]}function kv(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=kv(t[e]))&&(i&&(i+=" "),i+=n);else for(e in t)t[e]&&(i&&(i+=" "),i+=e);return i}function OS(){for(var t=0,e,n,i="";t<arguments.length;)(e=arguments[t++])&&(n=kv(e))&&(i&&(i+=" "),i+=n);return i}const FS={dark:["#C1C2C5","#A6A7AB","#909296","#5c5f66","#373A40","#2C2E33","#25262b","#1A1B1E","#141517","#101113"],gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],red:["#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787","#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"],pink:["#fff0f6","#ffdeeb","#fcc2d7","#faa2c1","#f783ac","#f06595","#e64980","#d6336c","#c2255c","#a61e4d"],grape:["#f8f0fc","#f3d9fa","#eebefa","#e599f7","#da77f2","#cc5de8","#be4bdb","#ae3ec9","#9c36b5","#862e9c"],violet:["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"],indigo:["#edf2ff","#dbe4ff","#bac8ff","#91a7ff","#748ffc","#5c7cfa","#4c6ef5","#4263eb","#3b5bdb","#364fc7"],blue:["#e7f5ff","#d0ebff","#a5d8ff","#74c0fc","#4dabf7","#339af0","#228be6","#1c7ed6","#1971c2","#1864ab"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"],teal:["#e6fcf5","#c3fae8","#96f2d7","#63e6be","#38d9a9","#20c997","#12b886","#0ca678","#099268","#087f5b"],green:["#ebfbee","#d3f9d8","#b2f2bb","#8ce99a","#69db7c","#51cf66","#40c057","#37b24d","#2f9e44","#2b8a3e"],lime:["#f4fce3","#e9fac8","#d8f5a2","#c0eb75","#a9e34b","#94d82d","#82c91e","#74b816","#66a80f","#5c940d"],yellow:["#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b","#fcc419","#fab005","#f59f00","#f08c00","#e67700"],orange:["#fff4e6","#ffe8cc","#ffd8a8","#ffc078","#ffa94d","#ff922b","#fd7e14","#f76707","#e8590c","#d9480f"]};function kS(t){return()=>({fontFamily:t.fontFamily||"sans-serif"})}var zS=Object.defineProperty,cp=Object.getOwnPropertySymbols,BS=Object.prototype.hasOwnProperty,HS=Object.prototype.propertyIsEnumerable,fp=(t,e,n)=>e in t?zS(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,dp=(t,e)=>{for(var n in e||(e={}))BS.call(e,n)&&fp(t,n,e[n]);if(cp)for(var n of cp(e))HS.call(e,n)&&fp(t,n,e[n]);return t};function GS(t){return e=>({WebkitTapHighlightColor:"transparent",[e||"&:focus"]:dp({},t.focusRing==="always"||t.focusRing==="auto"?t.focusRingStyles.styles(t):t.focusRingStyles.resetStyles(t)),[e?e.replace(":focus",":focus:not(:focus-visible)"):"&:focus:not(:focus-visible)"]:dp({},t.focusRing==="auto"||t.focusRing==="never"?t.focusRingStyles.resetStyles(t):null)})}function Qs(t){return e=>typeof t.primaryShade=="number"?t.primaryShade:t.primaryShade[e||t.colorScheme]}function Fd(t){const e=Qs(t);return(n,i,r=!0,o=!0)=>{if(typeof n=="string"&&n.includes(".")){const[a,l]=n.split("."),u=parseInt(l,10);if(a in t.colors&&u>=0&&u<10)return t.colors[a][typeof i=="number"&&!o?i:u]}const s=typeof i=="number"?i:e();return n in t.colors?t.colors[n][s]:r?t.colors[t.primaryColor][s]:n}}function zv(t){let e="";for(let n=1;n<t.length-1;n+=1)e+=`${t[n]} ${n/(t.length-1)*100}%, `;return`${t[0]} 0%, ${e}${t[t.length-1]} 100%`}function VS(t,...e){return`linear-gradient(${t}deg, ${zv(e)})`}function WS(...t){return`radial-gradient(circle, ${zv(t)})`}function Bv(t){const e=Fd(t),n=Qs(t);return i=>{const r={from:(i==null?void 0:i.from)||t.defaultGradient.from,to:(i==null?void 0:i.to)||t.defaultGradient.to,deg:(i==null?void 0:i.deg)||t.defaultGradient.deg};return`linear-gradient(${r.deg}deg, ${e(r.from,n(),!1)} 0%, ${e(r.to,n(),!1)} 100%)`}}function Hv(t){return e=>{if(typeof e=="number")return`${e/16}${t}`;if(typeof e=="string"){const n=e.replace("px","");if(!Number.isNaN(Number(n)))return`${Number(n)/16}${t}`}return e}}const Et=Hv("rem"),Js=Hv("em");function In({size:t,sizes:e,units:n}){return t in e?e[t]:typeof t=="number"?n==="em"?Js(t):Et(t):t||e.md}function Oo(t){return typeof t=="number"?t:typeof t=="string"&&t.includes("rem")?Number(t.replace("rem",""))*16:typeof t=="string"&&t.includes("em")?Number(t.replace("em",""))*16:Number(t)}function $S(t){return e=>`@media (min-width: ${Js(Oo(In({size:e,sizes:t.breakpoints})))})`}function XS(t){return e=>`@media (max-width: ${Js(Oo(In({size:e,sizes:t.breakpoints}))-1)})`}function jS(t){return/^#?([0-9A-F]{3}){1,2}$/i.test(t)}function YS(t){let e=t.replace("#","");if(e.length===3){const s=e.split("");e=[s[0],s[0],s[1],s[1],s[2],s[2]].join("")}const n=parseInt(e,16),i=n>>16&255,r=n>>8&255,o=n&255;return{r:i,g:r,b:o,a:1}}function qS(t){const[e,n,i,r]=t.replace(/[^0-9,.]/g,"").split(",").map(Number);return{r:e,g:n,b:i,a:r||1}}function kd(t){return jS(t)?YS(t):t.startsWith("rgb")?qS(t):{r:0,g:0,b:0,a:1}}function io(t,e){if(typeof t!="string"||e>1||e<0)return"rgba(0, 0, 0, 1)";if(t.startsWith("var(--"))return t;const{r:n,g:i,b:r}=kd(t);return`rgba(${n}, ${i}, ${r}, ${e})`}function KS(t=0){return{position:"absolute",top:Et(t),right:Et(t),left:Et(t),bottom:Et(t)}}function ZS(t,e){if(typeof t=="string"&&t.startsWith("var(--"))return t;const{r:n,g:i,b:r,a:o}=kd(t),s=1-e,a=l=>Math.round(l*s);return`rgba(${a(n)}, ${a(i)}, ${a(r)}, ${o})`}function QS(t,e){if(typeof t=="string"&&t.startsWith("var(--"))return t;const{r:n,g:i,b:r,a:o}=kd(t),s=a=>Math.round(a+(255-a)*e);return`rgba(${s(n)}, ${s(i)}, ${s(r)}, ${o})`}function JS(t){return e=>{if(typeof e=="number")return Et(e);const n=typeof t.defaultRadius=="number"?t.defaultRadius:t.radius[t.defaultRadius]||t.defaultRadius;return t.radius[e]||e||n}}function eE(t,e){if(typeof t=="string"&&t.includes(".")){const[n,i]=t.split("."),r=parseInt(i,10);if(n in e.colors&&r>=0&&r<10)return{isSplittedColor:!0,key:n,shade:r}}return{isSplittedColor:!1}}function tE(t){const e=Fd(t),n=Qs(t),i=Bv(t);return({variant:r,color:o,gradient:s,primaryFallback:a})=>{const l=eE(o,t);switch(r){case"light":return{border:"transparent",background:io(e(o,t.colorScheme==="dark"?8:0,a,!1),t.colorScheme==="dark"?.2:1),color:o==="dark"?t.colorScheme==="dark"?t.colors.dark[0]:t.colors.dark[9]:e(o,t.colorScheme==="dark"?2:n("light")),hover:io(e(o,t.colorScheme==="dark"?7:1,a,!1),t.colorScheme==="dark"?.25:.65)};case"subtle":return{border:"transparent",background:"transparent",color:o==="dark"?t.colorScheme==="dark"?t.colors.dark[0]:t.colors.dark[9]:e(o,t.colorScheme==="dark"?2:n("light")),hover:io(e(o,t.colorScheme==="dark"?8:0,a,!1),t.colorScheme==="dark"?.2:1)};case"outline":return{border:e(o,t.colorScheme==="dark"?5:n("light")),background:"transparent",color:e(o,t.colorScheme==="dark"?5:n("light")),hover:t.colorScheme==="dark"?io(e(o,5,a,!1),.05):io(e(o,0,a,!1),.35)};case"default":return{border:t.colorScheme==="dark"?t.colors.dark[4]:t.colors.gray[4],background:t.colorScheme==="dark"?t.colors.dark[6]:t.white,color:t.colorScheme==="dark"?t.white:t.black,hover:t.colorScheme==="dark"?t.colors.dark[5]:t.colors.gray[0]};case"white":return{border:"transparent",background:t.white,color:e(o,n()),hover:null};case"transparent":return{border:"transparent",color:o==="dark"?t.colorScheme==="dark"?t.colors.dark[0]:t.colors.dark[9]:e(o,t.colorScheme==="dark"?2:n("light")),background:"transparent",hover:null};case"gradient":return{background:i(s),color:t.white,border:"transparent",hover:null};default:{const u=n(),f=l.isSplittedColor?l.shade:u,d=l.isSplittedColor?l.key:o;return{border:"transparent",background:e(d,f,a),color:t.white,hover:e(d,f===9?8:f+1)}}}}}function nE(t){return e=>{const n=Qs(t)(e);return t.colors[t.primaryColor][n]}}function iE(t){return{"@media (hover: hover)":{"&:hover":t},"@media (hover: none)":{"&:active":t}}}function rE(t){return()=>({userSelect:"none",color:t.colorScheme==="dark"?t.colors.dark[3]:t.colors.gray[5]})}function oE(t){return()=>t.colorScheme==="dark"?t.colors.dark[2]:t.colors.gray[6]}const xt={fontStyles:kS,themeColor:Fd,focusStyles:GS,linearGradient:VS,radialGradient:WS,smallerThan:XS,largerThan:$S,rgba:io,cover:KS,darken:ZS,lighten:QS,radius:JS,variant:tE,primaryShade:Qs,hover:iE,gradient:Bv,primaryColor:nE,placeholderStyles:rE,dimmed:oE};var sE=Object.defineProperty,aE=Object.defineProperties,lE=Object.getOwnPropertyDescriptors,hp=Object.getOwnPropertySymbols,uE=Object.prototype.hasOwnProperty,cE=Object.prototype.propertyIsEnumerable,pp=(t,e,n)=>e in t?sE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,fE=(t,e)=>{for(var n in e||(e={}))uE.call(e,n)&&pp(t,n,e[n]);if(hp)for(var n of hp(e))cE.call(e,n)&&pp(t,n,e[n]);return t},dE=(t,e)=>aE(t,lE(e));function Gv(t){return dE(fE({},t),{fn:{fontStyles:xt.fontStyles(t),themeColor:xt.themeColor(t),focusStyles:xt.focusStyles(t),largerThan:xt.largerThan(t),smallerThan:xt.smallerThan(t),radialGradient:xt.radialGradient,linearGradient:xt.linearGradient,gradient:xt.gradient(t),rgba:xt.rgba,cover:xt.cover,lighten:xt.lighten,darken:xt.darken,primaryShade:xt.primaryShade(t),radius:xt.radius(t),variant:xt.variant(t),hover:xt.hover,primaryColor:xt.primaryColor(t),placeholderStyles:xt.placeholderStyles(t),dimmed:xt.dimmed(t)}})}const Vv=["xs","sm","md","lg","xl"],hE={dir:"ltr",primaryShade:{light:6,dark:8},focusRing:"auto",loader:"oval",colorScheme:"light",white:"#fff",black:"#000",defaultRadius:"sm",transitionTimingFunction:"ease",colors:FS,lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",primaryColor:"blue",respectReducedMotion:!0,cursorType:"default",defaultGradient:{from:"indigo",to:"cyan",deg:45},shadows:{xs:"0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.1)",sm:"0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 0.625rem 0.9375rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.4375rem 0.4375rem -0.3125rem",md:"0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.25rem 1.5625rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.625rem 0.625rem -0.3125rem",lg:"0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.75rem 1.4375rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 0.75rem 0.75rem -0.4375rem",xl:"0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 2.25rem 1.75rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 1.0625rem 1.0625rem -0.4375rem"},fontSizes:{xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem"},radius:{xs:"0.125rem",sm:"0.25rem",md:"0.5rem",lg:"1rem",xl:"2rem"},spacing:{xs:"0.625rem",sm:"0.75rem",md:"1rem",lg:"1.25rem",xl:"1.5rem"},breakpoints:{xs:"36em",sm:"48em",md:"62em",lg:"75em",xl:"88em"},headings:{fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontWeight:700,sizes:{h1:{fontSize:"2.125rem",lineHeight:1.3,fontWeight:void 0},h2:{fontSize:"1.625rem",lineHeight:1.35,fontWeight:void 0},h3:{fontSize:"1.375rem",lineHeight:1.4,fontWeight:void 0},h4:{fontSize:"1.125rem",lineHeight:1.45,fontWeight:void 0},h5:{fontSize:"1rem",lineHeight:1.5,fontWeight:void 0},h6:{fontSize:"0.875rem",lineHeight:1.5,fontWeight:void 0}}},other:{},components:{},activeStyles:{transform:"translateY(0.0625rem)"},datesLocale:"en",globalStyles:void 0,focusRingStyles:{styles:t=>({outlineOffset:"0.125rem",outline:`0.125rem solid ${t.colors[t.primaryColor][t.colorScheme==="dark"?7:5]}`}),resetStyles:()=>({outline:"none"}),inputStyles:t=>({outline:"none",borderColor:t.colors[t.primaryColor][typeof t.primaryShade=="object"?t.primaryShade[t.colorScheme]:t.primaryShade]})}},zd=Gv(hE);function pE(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function mE(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var gE=function(){function t(n){var i=this;this._insertTag=function(r){var o;i.tags.length===0?i.insertionPoint?o=i.insertionPoint.nextSibling:i.prepend?o=i.container.firstChild:o=i.before:o=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(r,o),i.tags.push(r)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(mE(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var o=pE(r);try{o.insertRule(i,o.cssRules.length)}catch{}}else r.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){return i.parentNode&&i.parentNode.removeChild(i)}),this.tags=[],this.ctr=0},t}(),Vt="-ms-",Nl="-moz-",We="-webkit-",Wv="comm",Bd="rule",Hd="decl",_E="@import",$v="@keyframes",vE=Math.abs,su=String.fromCharCode,yE=Object.assign;function xE(t,e){return Dt(t,0)^45?(((e<<2^Dt(t,0))<<2^Dt(t,1))<<2^Dt(t,2))<<2^Dt(t,3):0}function Xv(t){return t.trim()}function SE(t,e){return(t=e.exec(t))?t[0]:t}function $e(t,e,n){return t.replace(e,n)}function Pf(t,e){return t.indexOf(e)}function Dt(t,e){return t.charCodeAt(e)|0}function Hs(t,e,n){return t.slice(e,n)}function ni(t){return t.length}function Gd(t){return t.length}function wa(t,e){return e.push(t),t}function EE(t,e){return t.map(e).join("")}var au=1,Fo=1,jv=0,un=0,vt=0,$o="";function lu(t,e,n,i,r,o,s){return{value:t,root:e,parent:n,type:i,props:r,children:o,line:au,column:Fo,length:s,return:""}}function ns(t,e){return yE(lu("",null,null,"",null,null,0),t,{length:-t.length},e)}function ME(){return vt}function wE(){return vt=un>0?Dt($o,--un):0,Fo--,vt===10&&(Fo=1,au--),vt}function vn(){return vt=un<jv?Dt($o,un++):0,Fo++,vt===10&&(Fo=1,au++),vt}function ui(){return Dt($o,un)}function al(){return un}function ea(t,e){return Hs($o,t,e)}function Gs(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Yv(t){return au=Fo=1,jv=ni($o=t),un=0,[]}function qv(t){return $o="",t}function ll(t){return Xv(ea(un-1,Lf(t===91?t+2:t===40?t+1:t)))}function TE(t){for(;(vt=ui())&&vt<33;)vn();return Gs(t)>2||Gs(vt)>3?"":" "}function AE(t,e){for(;--e&&vn()&&!(vt<48||vt>102||vt>57&&vt<65||vt>70&&vt<97););return ea(t,al()+(e<6&&ui()==32&&vn()==32))}function Lf(t){for(;vn();)switch(vt){case t:return un;case 34:case 39:t!==34&&t!==39&&Lf(vt);break;case 40:t===41&&Lf(t);break;case 92:vn();break}return un}function CE(t,e){for(;vn()&&t+vt!==47+10;)if(t+vt===42+42&&ui()===47)break;return"/*"+ea(e,un-1)+"*"+su(t===47?t:vn())}function bE(t){for(;!Gs(ui());)vn();return ea(t,un)}function RE(t){return qv(ul("",null,null,null,[""],t=Yv(t),0,[0],t))}function ul(t,e,n,i,r,o,s,a,l){for(var u=0,f=0,d=s,h=0,p=0,y=0,v=1,m=1,c=1,g=0,_="",E=r,S=o,w=i,C=_;m;)switch(y=g,g=vn()){case 40:if(y!=108&&Dt(C,d-1)==58){Pf(C+=$e(ll(g),"&","&\f"),"&\f")!=-1&&(c=-1);break}case 34:case 39:case 91:C+=ll(g);break;case 9:case 10:case 13:case 32:C+=TE(y);break;case 92:C+=AE(al()-1,7);continue;case 47:switch(ui()){case 42:case 47:wa(PE(CE(vn(),al()),e,n),l);break;default:C+="/"}break;case 123*v:a[u++]=ni(C)*c;case 125*v:case 59:case 0:switch(g){case 0:case 125:m=0;case 59+f:c==-1&&(C=$e(C,/\f/g,"")),p>0&&ni(C)-d&&wa(p>32?gp(C+";",i,n,d-1):gp($e(C," ","")+";",i,n,d-2),l);break;case 59:C+=";";default:if(wa(w=mp(C,e,n,u,f,r,a,_,E=[],S=[],d),o),g===123)if(f===0)ul(C,e,w,w,E,o,d,a,S);else switch(h===99&&Dt(C,3)===110?100:h){case 100:case 109:case 115:ul(t,w,w,i&&wa(mp(t,w,w,0,0,r,a,_,r,E=[],d),S),r,S,d,a,i?E:S);break;default:ul(C,w,w,w,[""],S,0,a,S)}}u=f=p=0,v=c=1,_=C="",d=s;break;case 58:d=1+ni(C),p=y;default:if(v<1){if(g==123)--v;else if(g==125&&v++==0&&wE()==125)continue}switch(C+=su(g),g*v){case 38:c=f>0?1:(C+="\f",-1);break;case 44:a[u++]=(ni(C)-1)*c,c=1;break;case 64:ui()===45&&(C+=ll(vn())),h=ui(),f=d=ni(_=C+=bE(al())),g++;break;case 45:y===45&&ni(C)==2&&(v=0)}}return o}function mp(t,e,n,i,r,o,s,a,l,u,f){for(var d=r-1,h=r===0?o:[""],p=Gd(h),y=0,v=0,m=0;y<i;++y)for(var c=0,g=Hs(t,d+1,d=vE(v=s[y])),_=t;c<p;++c)(_=Xv(v>0?h[c]+" "+g:$e(g,/&\f/g,h[c])))&&(l[m++]=_);return lu(t,e,n,r===0?Bd:a,l,u,f)}function PE(t,e,n){return lu(t,e,n,Wv,su(ME()),Hs(t,2,-2),0)}function gp(t,e,n,i){return lu(t,e,n,Hd,Hs(t,0,i),Hs(t,i+1,-1),i)}function To(t,e){for(var n="",i=Gd(t),r=0;r<i;r++)n+=e(t[r],r,t,e)||"";return n}function LE(t,e,n,i){switch(t.type){case _E:case Hd:return t.return=t.return||t.value;case Wv:return"";case $v:return t.return=t.value+"{"+To(t.children,i)+"}";case Bd:t.value=t.props.join(",")}return ni(n=To(t.children,i))?t.return=t.value+"{"+n+"}":""}function DE(t){var e=Gd(t);return function(n,i,r,o){for(var s="",a=0;a<e;a++)s+=t[a](n,i,r,o)||"";return s}}function UE(t){return function(e){e.root||(e=e.return)&&t(e)}}var _p=function(e){var n=new WeakMap;return function(i){if(n.has(i))return n.get(i);var r=e(i);return n.set(i,r),r}};function IE(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var NE=function(e,n,i){for(var r=0,o=0;r=o,o=ui(),r===38&&o===12&&(n[i]=1),!Gs(o);)vn();return ea(e,un)},OE=function(e,n){var i=-1,r=44;do switch(Gs(r)){case 0:r===38&&ui()===12&&(n[i]=1),e[i]+=NE(un-1,n,i);break;case 2:e[i]+=ll(r);break;case 4:if(r===44){e[++i]=ui()===58?"&\f":"",n[i]=e[i].length;break}default:e[i]+=su(r)}while(r=vn());return e},FE=function(e,n){return qv(OE(Yv(e),n))},vp=new WeakMap,kE=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,i=e.parent,r=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!vp.get(i))&&!r){vp.set(e,!0);for(var o=[],s=FE(n,o),a=i.props,l=0,u=0;l<s.length;l++)for(var f=0;f<a.length;f++,u++)e.props[u]=o[l]?s[l].replace(/&\f/g,a[f]):a[f]+" "+s[l]}}},zE=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function Kv(t,e){switch(xE(t,e)){case 5103:return We+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return We+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return We+t+Nl+t+Vt+t+t;case 6828:case 4268:return We+t+Vt+t+t;case 6165:return We+t+Vt+"flex-"+t+t;case 5187:return We+t+$e(t,/(\w+).+(:[^]+)/,We+"box-$1$2"+Vt+"flex-$1$2")+t;case 5443:return We+t+Vt+"flex-item-"+$e(t,/flex-|-self/,"")+t;case 4675:return We+t+Vt+"flex-line-pack"+$e(t,/align-content|flex-|-self/,"")+t;case 5548:return We+t+Vt+$e(t,"shrink","negative")+t;case 5292:return We+t+Vt+$e(t,"basis","preferred-size")+t;case 6060:return We+"box-"+$e(t,"-grow","")+We+t+Vt+$e(t,"grow","positive")+t;case 4554:return We+$e(t,/([^-])(transform)/g,"$1"+We+"$2")+t;case 6187:return $e($e($e(t,/(zoom-|grab)/,We+"$1"),/(image-set)/,We+"$1"),t,"")+t;case 5495:case 3959:return $e(t,/(image-set\([^]*)/,We+"$1$`$1");case 4968:return $e($e(t,/(.+:)(flex-)?(.*)/,We+"box-pack:$3"+Vt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+We+t+t;case 4095:case 3583:case 4068:case 2532:return $e(t,/(.+)-inline(.+)/,We+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ni(t)-1-e>6)switch(Dt(t,e+1)){case 109:if(Dt(t,e+4)!==45)break;case 102:return $e(t,/(.+:)(.+)-([^]+)/,"$1"+We+"$2-$3$1"+Nl+(Dt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Pf(t,"stretch")?Kv($e(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Dt(t,e+1)!==115)break;case 6444:switch(Dt(t,ni(t)-3-(~Pf(t,"!important")&&10))){case 107:return $e(t,":",":"+We)+t;case 101:return $e(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+We+(Dt(t,14)===45?"inline-":"")+"box$3$1"+We+"$2$3$1"+Vt+"$2box$3")+t}break;case 5936:switch(Dt(t,e+11)){case 114:return We+t+Vt+$e(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return We+t+Vt+$e(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return We+t+Vt+$e(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return We+t+Vt+t+t}return t}var BE=function(e,n,i,r){if(e.length>-1&&!e.return)switch(e.type){case Hd:e.return=Kv(e.value,e.length);break;case $v:return To([ns(e,{value:$e(e.value,"@","@"+We)})],r);case Bd:if(e.length)return EE(e.props,function(o){switch(SE(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return To([ns(e,{props:[$e(o,/:(read-\w+)/,":"+Nl+"$1")]})],r);case"::placeholder":return To([ns(e,{props:[$e(o,/:(plac\w+)/,":"+We+"input-$1")]}),ns(e,{props:[$e(o,/:(plac\w+)/,":"+Nl+"$1")]}),ns(e,{props:[$e(o,/:(plac\w+)/,Vt+"input-$1")]})],r)}return""})}},HE=[BE],Zv=function(e){var n=e.key;if(n==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(v){var m=v.getAttribute("data-emotion");m.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var r=e.stylisPlugins||HE,o={},s,a=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var m=v.getAttribute("data-emotion").split(" "),c=1;c<m.length;c++)o[m[c]]=!0;a.push(v)});var l,u=[kE,zE];{var f,d=[LE,UE(function(v){f.insert(v)})],h=DE(u.concat(r,d)),p=function(m){return To(RE(m),h)};l=function(m,c,g,_){f=g,p(m?m+"{"+c.styles+"}":c.styles),_&&(y.inserted[c.name]=!0)}}var y={key:n,sheet:new gE({key:n,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:l};return y.sheet.hydrate(a),y};function Df(){return Df=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Df.apply(this,arguments)}var Qv={exports:{}},je={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pt=typeof Symbol=="function"&&Symbol.for,Vd=Pt?Symbol.for("react.element"):60103,Wd=Pt?Symbol.for("react.portal"):60106,uu=Pt?Symbol.for("react.fragment"):60107,cu=Pt?Symbol.for("react.strict_mode"):60108,fu=Pt?Symbol.for("react.profiler"):60114,du=Pt?Symbol.for("react.provider"):60109,hu=Pt?Symbol.for("react.context"):60110,$d=Pt?Symbol.for("react.async_mode"):60111,pu=Pt?Symbol.for("react.concurrent_mode"):60111,mu=Pt?Symbol.for("react.forward_ref"):60112,gu=Pt?Symbol.for("react.suspense"):60113,GE=Pt?Symbol.for("react.suspense_list"):60120,_u=Pt?Symbol.for("react.memo"):60115,vu=Pt?Symbol.for("react.lazy"):60116,VE=Pt?Symbol.for("react.block"):60121,WE=Pt?Symbol.for("react.fundamental"):60117,$E=Pt?Symbol.for("react.responder"):60118,XE=Pt?Symbol.for("react.scope"):60119;function Mn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Vd:switch(t=t.type,t){case $d:case pu:case uu:case fu:case cu:case gu:return t;default:switch(t=t&&t.$$typeof,t){case hu:case mu:case vu:case _u:case du:return t;default:return e}}case Wd:return e}}}function Jv(t){return Mn(t)===pu}je.AsyncMode=$d;je.ConcurrentMode=pu;je.ContextConsumer=hu;je.ContextProvider=du;je.Element=Vd;je.ForwardRef=mu;je.Fragment=uu;je.Lazy=vu;je.Memo=_u;je.Portal=Wd;je.Profiler=fu;je.StrictMode=cu;je.Suspense=gu;je.isAsyncMode=function(t){return Jv(t)||Mn(t)===$d};je.isConcurrentMode=Jv;je.isContextConsumer=function(t){return Mn(t)===hu};je.isContextProvider=function(t){return Mn(t)===du};je.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vd};je.isForwardRef=function(t){return Mn(t)===mu};je.isFragment=function(t){return Mn(t)===uu};je.isLazy=function(t){return Mn(t)===vu};je.isMemo=function(t){return Mn(t)===_u};je.isPortal=function(t){return Mn(t)===Wd};je.isProfiler=function(t){return Mn(t)===fu};je.isStrictMode=function(t){return Mn(t)===cu};je.isSuspense=function(t){return Mn(t)===gu};je.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===uu||t===pu||t===fu||t===cu||t===gu||t===GE||typeof t=="object"&&t!==null&&(t.$$typeof===vu||t.$$typeof===_u||t.$$typeof===du||t.$$typeof===hu||t.$$typeof===mu||t.$$typeof===WE||t.$$typeof===$E||t.$$typeof===XE||t.$$typeof===VE)};je.typeOf=Mn;Qv.exports=je;var jE=Qv.exports,e0=jE,YE={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},qE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},t0={};t0[e0.ForwardRef]=YE;t0[e0.Memo]=qE;var KE=!0;function ZE(t,e,n){var i="";return n.split(" ").forEach(function(r){t[r]!==void 0?e.push(t[r]+";"):i+=r+" "}),i}var QE=function(e,n,i){var r=e.key+"-"+n.name;(i===!1||KE===!1)&&e.registered[r]===void 0&&(e.registered[r]=n.styles)},n0=function(e,n,i){QE(e,n,i);var r=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var o=n;do e.insert(n===o?"."+r:"",o,e.sheet,!0),o=o.next;while(o!==void 0)}};function JE(t){for(var e=0,n,i=0,r=t.length;r>=4;++i,r-=4)n=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(r){case 3:e^=(t.charCodeAt(i+2)&255)<<16;case 2:e^=(t.charCodeAt(i+1)&255)<<8;case 1:e^=t.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var eM={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},tM=/[A-Z]|^ms/g,nM=/_EMO_([^_]+?)_([^]*?)_EMO_/g,i0=function(e){return e.charCodeAt(1)===45},yp=function(e){return e!=null&&typeof e!="boolean"},tc=IE(function(t){return i0(t)?t:t.replace(tM,"-$&").toLowerCase()}),xp=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(nM,function(i,r,o){return ii={name:r,styles:o,next:ii},r})}return eM[e]!==1&&!i0(e)&&typeof n=="number"&&n!==0?n+"px":n};function Vs(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return ii={name:n.name,styles:n.styles,next:ii},n.name;if(n.styles!==void 0){var i=n.next;if(i!==void 0)for(;i!==void 0;)ii={name:i.name,styles:i.styles,next:ii},i=i.next;var r=n.styles+";";return r}return iM(t,e,n)}case"function":{if(t!==void 0){var o=ii,s=n(t);return ii=o,Vs(t,e,s)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function iM(t,e,n){var i="";if(Array.isArray(n))for(var r=0;r<n.length;r++)i+=Vs(t,e,n[r])+";";else for(var o in n){var s=n[o];if(typeof s!="object")e!=null&&e[s]!==void 0?i+=o+"{"+e[s]+"}":yp(s)&&(i+=tc(o)+":"+xp(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(e==null||e[s[0]]===void 0))for(var a=0;a<s.length;a++)yp(s[a])&&(i+=tc(o)+":"+xp(o,s[a])+";");else{var l=Vs(t,e,s);switch(o){case"animation":case"animationName":{i+=tc(o)+":"+l+";";break}default:i+=o+"{"+l+"}"}}}return i}var Sp=/label:\s*([^\s;\n{]+)\s*(;|$)/g,ii,r0=function(e,n,i){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,o="";ii=void 0;var s=e[0];s==null||s.raw===void 0?(r=!1,o+=Vs(i,n,s)):o+=s[0];for(var a=1;a<e.length;a++)o+=Vs(i,n,e[a]),r&&(o+=s[a]);Sp.lastIndex=0;for(var l="",u;(u=Sp.exec(o))!==null;)l+="-"+u[1];var f=JE(o)+l;return{name:f,styles:o,next:ii}},rM=ih["useInsertionEffect"]?ih["useInsertionEffect"]:!1,Ep=rM||ke.useLayoutEffect,o0=ke.createContext(typeof HTMLElement<"u"?Zv({key:"css"}):null);o0.Provider;var oM=function(e){return ke.forwardRef(function(n,i){var r=ke.useContext(o0);return e(n,r,i)})},Uf=ke.createContext({}),sM=function(e,n){if(typeof n=="function"){var i=n(e);return i}return Df({},e,n)},aM=_p(function(t){return _p(function(e){return sM(t,e)})}),lM=function(e){var n=ke.useContext(Uf);return e.theme!==n&&(n=aM(n)(e.theme)),ke.createElement(Uf.Provider,{value:n},e.children)},yu=oM(function(t,e){var n=t.styles,i=r0([n],void 0,ke.useContext(Uf)),r=ke.useRef();return Ep(function(){var o=e.key+"-global",s=new e.sheet.constructor({key:o,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),a=!1,l=document.querySelector('style[data-emotion="'+o+" "+i.name+'"]');return e.sheet.tags.length&&(s.before=e.sheet.tags[0]),l!==null&&(a=!0,l.setAttribute("data-emotion",o),s.hydrate([l])),r.current=[s,a],function(){s.flush()}},[e]),Ep(function(){var o=r.current,s=o[0],a=o[1];if(a){o[1]=!1;return}if(i.next!==void 0&&n0(e,i.next,!0),s.tags.length){var l=s.tags[s.tags.length-1].nextElementSibling;s.before=l,s.flush()}e.insert("",i,s,!1)},[e,i.name]),null}),uM=Object.defineProperty,cM=Object.defineProperties,fM=Object.getOwnPropertyDescriptors,Mp=Object.getOwnPropertySymbols,dM=Object.prototype.hasOwnProperty,hM=Object.prototype.propertyIsEnumerable,wp=(t,e,n)=>e in t?uM(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,pM=(t,e)=>{for(var n in e||(e={}))dM.call(e,n)&&wp(t,n,e[n]);if(Mp)for(var n of Mp(e))hM.call(e,n)&&wp(t,n,e[n]);return t},mM=(t,e)=>cM(t,fM(e));function gM({theme:t}){return qe.createElement(yu,{styles:{"*, *::before, *::after":{boxSizing:"border-box"},html:{colorScheme:t.colorScheme==="dark"?"dark":"light"},body:mM(pM({},t.fn.fontStyles()),{backgroundColor:t.colorScheme==="dark"?t.colors.dark[7]:t.white,color:t.colorScheme==="dark"?t.colors.dark[0]:t.black,lineHeight:t.lineHeight,fontSize:t.fontSizes.md,WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"})}})}function is(t,e,n,i=Et){Object.keys(e).forEach(r=>{t[`--mantine-${n}-${r}`]=i(e[r])})}function _M({theme:t}){const e={"--mantine-color-white":t.white,"--mantine-color-black":t.black,"--mantine-transition-timing-function":t.transitionTimingFunction,"--mantine-line-height":`${t.lineHeight}`,"--mantine-font-family":t.fontFamily,"--mantine-font-family-monospace":t.fontFamilyMonospace,"--mantine-font-family-headings":t.headings.fontFamily,"--mantine-heading-font-weight":`${t.headings.fontWeight}`};is(e,t.shadows,"shadow"),is(e,t.fontSizes,"font-size"),is(e,t.radius,"radius"),is(e,t.spacing,"spacing"),is(e,t.breakpoints,"breakpoints",Js),Object.keys(t.colors).forEach(i=>{t.colors[i].forEach((r,o)=>{e[`--mantine-color-${i}-${o}`]=r})});const n=t.headings.sizes;return Object.keys(n).forEach(i=>{e[`--mantine-${i}-font-size`]=n[i].fontSize,e[`--mantine-${i}-line-height`]=`${n[i].lineHeight}`}),qe.createElement(yu,{styles:{":root":e}})}var vM=Object.defineProperty,yM=Object.defineProperties,xM=Object.getOwnPropertyDescriptors,Tp=Object.getOwnPropertySymbols,SM=Object.prototype.hasOwnProperty,EM=Object.prototype.propertyIsEnumerable,Ap=(t,e,n)=>e in t?vM(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Jn=(t,e)=>{for(var n in e||(e={}))SM.call(e,n)&&Ap(t,n,e[n]);if(Tp)for(var n of Tp(e))EM.call(e,n)&&Ap(t,n,e[n]);return t},nc=(t,e)=>yM(t,xM(e));function MM(t,e){var n;if(!e)return t;const i=Object.keys(t).reduce((r,o)=>{if(o==="headings"&&e.headings){const s=e.headings.sizes?Object.keys(t.headings.sizes).reduce((a,l)=>(a[l]=Jn(Jn({},t.headings.sizes[l]),e.headings.sizes[l]),a),{}):t.headings.sizes;return nc(Jn({},r),{headings:nc(Jn(Jn({},t.headings),e.headings),{sizes:s})})}if(o==="breakpoints"&&e.breakpoints){const s=Jn(Jn({},t.breakpoints),e.breakpoints);return nc(Jn({},r),{breakpoints:Object.fromEntries(Object.entries(s).sort((a,l)=>Oo(a[1])-Oo(l[1])))})}return r[o]=typeof e[o]=="object"?Jn(Jn({},t[o]),e[o]):typeof e[o]=="number"||typeof e[o]=="boolean"||typeof e[o]=="function"?e[o]:e[o]||t[o],r},{});if(e!=null&&e.fontFamily&&!((n=e==null?void 0:e.headings)!=null&&n.fontFamily)&&(i.headings.fontFamily=e.fontFamily),!(i.primaryColor in i.colors))throw new Error("MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color");return i}function wM(t,e){return Gv(MM(t,e))}function s0(t){return Object.keys(t).reduce((e,n)=>(t[n]!==void 0&&(e[n]=t[n]),e),{})}const TM={html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:0},"article, aside, footer, header, nav, section, figcaption, figure, main":{display:"block"},h1:{fontSize:"2em"},hr:{boxSizing:"content-box",height:0,overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{background:"transparent",textDecorationSkip:"objects"},"a:active, a:hover":{outlineWidth:0},"abbr[title]":{borderBottom:"none",textDecoration:"underline"},"b, strong":{fontWeight:"bolder"},"code, kbp, samp":{fontFamily:"monospace, monospace",fontSize:"1em"},dfn:{fontStyle:"italic"},mark:{backgroundColor:"#ff0",color:"#000"},small:{fontSize:"80%"},"sub, sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sup:{top:"-0.5em"},sub:{bottom:"-0.25em"},"audio, video":{display:"inline-block"},"audio:not([controls])":{display:"none",height:0},img:{borderStyle:"none",verticalAlign:"middle"},"svg:not(:root)":{overflow:"hidden"},"button, input, optgroup, select, textarea":{fontFamily:"sans-serif",fontSize:"100%",lineHeight:"1.15",margin:0},"button, input":{overflow:"visible"},"button, select":{textTransform:"none"},"button, [type=reset], [type=submit]":{WebkitAppearance:"button"},"button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":{borderStyle:"none",padding:0},"button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":{outline:`${Et(1)} dotted ButtonText`},legend:{boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:0,whiteSpace:"normal"},progress:{display:"inline-block",verticalAlign:"baseline"},textarea:{overflow:"auto"},"[type=checkbox], [type=radio]":{boxSizing:"border-box",padding:0},"[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":{height:"auto"},"[type=search]":{appearance:"none"},"[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":{appearance:"none"},"::-webkit-file-upload-button":{appearance:"button",font:"inherit"},"details, menu":{display:"block"},summary:{display:"list-item"},canvas:{display:"inline-block"},template:{display:"none"}};function AM(){return qe.createElement(yu,{styles:TM})}var CM=Object.defineProperty,Cp=Object.getOwnPropertySymbols,bM=Object.prototype.hasOwnProperty,RM=Object.prototype.propertyIsEnumerable,bp=(t,e,n)=>e in t?CM(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Es=(t,e)=>{for(var n in e||(e={}))bM.call(e,n)&&bp(t,n,e[n]);if(Cp)for(var n of Cp(e))RM.call(e,n)&&bp(t,n,e[n]);return t};const Ol=ke.createContext({theme:zd});function xu(){var t;return((t=ke.useContext(Ol))==null?void 0:t.theme)||zd}function PM(t){const e=xu(),n=i=>{var r,o,s,a;return{styles:((r=e.components[i])==null?void 0:r.styles)||{},classNames:((o=e.components[i])==null?void 0:o.classNames)||{},variants:(s=e.components[i])==null?void 0:s.variants,sizes:(a=e.components[i])==null?void 0:a.sizes}};return Array.isArray(t)?t.map(n):[n(t)]}function a0(){var t;return(t=ke.useContext(Ol))==null?void 0:t.emotionCache}function ta(t,e,n){var i;const r=xu(),o=(i=r.components[t])==null?void 0:i.defaultProps,s=typeof o=="function"?o(r):o;return Es(Es(Es({},e),s),s0(n))}function l0({theme:t,emotionCache:e,withNormalizeCSS:n=!1,withGlobalStyles:i=!1,withCSSVariables:r=!1,inherit:o=!1,children:s}){const a=ke.useContext(Ol),l=wM(zd,o?Es(Es({},a.theme),t):t);return qe.createElement(lM,{theme:l},qe.createElement(Ol.Provider,{value:{theme:l,emotionCache:e}},n&&qe.createElement(AM,null),i&&qe.createElement(gM,{theme:l}),r&&qe.createElement(_M,{theme:l}),typeof l.globalStyles=="function"&&qe.createElement(yu,{styles:l.globalStyles(l)}),s))}l0.displayName="@mantine/core/MantineProvider";function LM(t,e){const n=ke.useRef();return(!n.current||e.length!==n.current.prevDeps.length||n.current.prevDeps.map((i,r)=>i===e[r]).indexOf(!1)>=0)&&(n.current={v:t(),prevDeps:[...e]}),n.current.v}const DM=Zv({key:"mantine",prepend:!0});function UM(){return a0()||DM}var IM=Object.defineProperty,Rp=Object.getOwnPropertySymbols,NM=Object.prototype.hasOwnProperty,OM=Object.prototype.propertyIsEnumerable,Pp=(t,e,n)=>e in t?IM(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,FM=(t,e)=>{for(var n in e||(e={}))NM.call(e,n)&&Pp(t,n,e[n]);if(Rp)for(var n of Rp(e))OM.call(e,n)&&Pp(t,n,e[n]);return t};const ic="ref";function kM(t){let e;if(t.length!==1)return{args:t,ref:e};const[n]=t;if(!(n instanceof Object))return{args:t,ref:e};if(!(ic in n))return{args:t,ref:e};e=n[ic];const i=FM({},n);return delete i[ic],{args:[i],ref:e}}const{cssFactory:zM}=(()=>{function t(n,i,r){const o=[],s=ZE(n,o,r);return o.length<2?r:s+i(o)}function e(n){const{cache:i}=n,r=(...s)=>{const{ref:a,args:l}=kM(s),u=r0(l,i.registered);return n0(i,u,!1),`${i.key}-${u.name}${a===void 0?"":` ${a}`}`};return{css:r,cx:(...s)=>t(i.registered,r,OS(s))}}return{cssFactory:e}})();function u0(){const t=UM();return LM(()=>zM({cache:t}),[t])}function BM({cx:t,classes:e,context:n,classNames:i,name:r,cache:o}){const s=n.reduce((a,l)=>(Object.keys(l.classNames).forEach(u=>{typeof a[u]!="string"?a[u]=`${l.classNames[u]}`:a[u]=`${a[u]} ${l.classNames[u]}`}),a),{});return Object.keys(e).reduce((a,l)=>(a[l]=t(e[l],s[l],i!=null&&i[l],Array.isArray(r)?r.filter(Boolean).map(u=>`${(o==null?void 0:o.key)||"mantine"}-${u}-${l}`).join(" "):r?`${(o==null?void 0:o.key)||"mantine"}-${r}-${l}`:null),a),{})}var HM=Object.defineProperty,Lp=Object.getOwnPropertySymbols,GM=Object.prototype.hasOwnProperty,VM=Object.prototype.propertyIsEnumerable,Dp=(t,e,n)=>e in t?HM(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,rc=(t,e)=>{for(var n in e||(e={}))GM.call(e,n)&&Dp(t,n,e[n]);if(Lp)for(var n of Lp(e))VM.call(e,n)&&Dp(t,n,e[n]);return t};function If(t,e){return e&&Object.keys(e).forEach(n=>{t[n]?t[n]=rc(rc({},t[n]),e[n]):t[n]=rc({},e[n])}),t}function Up(t,e,n,i){const r=o=>typeof o=="function"?o(e,n||{},i):o||{};return Array.isArray(t)?t.map(o=>r(o.styles)).reduce((o,s)=>If(o,s),{}):r(t)}function WM({ctx:t,theme:e,params:n,variant:i,size:r}){return t.reduce((o,s)=>(s.variants&&i in s.variants&&If(o,s.variants[i](e,n,{variant:i,size:r})),s.sizes&&r in s.sizes&&If(o,s.sizes[r](e,n,{variant:i,size:r})),o),{})}function na(t){const e=typeof t=="function"?t:()=>t;function n(i,r){const o=xu(),s=PM(r==null?void 0:r.name),a=a0(),l={variant:r==null?void 0:r.variant,size:r==null?void 0:r.size},{css:u,cx:f}=u0(),d=e(o,i,l),h=Up(r==null?void 0:r.styles,o,i,l),p=Up(s,o,i,l),y=WM({ctx:s,theme:o,params:i,variant:r==null?void 0:r.variant,size:r==null?void 0:r.size}),v=Object.fromEntries(Object.keys(d).map(m=>{const c=f({[u(d[m])]:!(r!=null&&r.unstyled)},u(y[m]),u(p[m]),u(h[m]));return[m,c]}));return{classes:BM({cx:f,classes:v,context:s,classNames:r==null?void 0:r.classNames,name:r==null?void 0:r.name,cache:a}),cx:f,theme:o}}return n}function $M(t,e){const n=ke.useRef(!1);ke.useEffect(()=>()=>{n.current=!1},[]),ke.useEffect(()=>{if(n.current)return t();n.current=!0},e)}var Ip=Object.getOwnPropertySymbols,XM=Object.prototype.hasOwnProperty,jM=Object.prototype.propertyIsEnumerable,YM=(t,e)=>{var n={};for(var i in t)XM.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&Ip)for(var i of Ip(t))e.indexOf(i)<0&&jM.call(t,i)&&(n[i]=t[i]);return n};function qM(t){const e=t,{m:n,mx:i,my:r,mt:o,mb:s,ml:a,mr:l,p:u,px:f,py:d,pt:h,pb:p,pl:y,pr:v,bg:m,c,opacity:g,ff:_,fz:E,fw:S,lts:w,ta:C,lh:D,fs:x,tt:A,td:W,w:Y,miw:I,maw:B,h:$,mih:ee,mah:Z,bgsz:U,bgp:H,bgr:k,bga:ue,pos:J,top:G,left:K,bottom:oe,right:se,inset:P,display:we}=e,Ee=YM(e,["m","mx","my","mt","mb","ml","mr","p","px","py","pt","pb","pl","pr","bg","c","opacity","ff","fz","fw","lts","ta","lh","fs","tt","td","w","miw","maw","h","mih","mah","bgsz","bgp","bgr","bga","pos","top","left","bottom","right","inset","display"]);return{systemStyles:s0({m:n,mx:i,my:r,mt:o,mb:s,ml:a,mr:l,p:u,px:f,py:d,pt:h,pb:p,pl:y,pr:v,bg:m,c,opacity:g,ff:_,fz:E,fw:S,lts:w,ta:C,lh:D,fs:x,tt:A,td:W,w:Y,miw:I,maw:B,h:$,mih:ee,mah:Z,bgsz:U,bgp:H,bgr:k,bga:ue,pos:J,top:G,left:K,bottom:oe,right:se,inset:P,display:we}),rest:Ee}}function KM(t,e){const n=Object.keys(t).filter(i=>i!=="base").sort((i,r)=>Oo(In({size:i,sizes:e.breakpoints}))-Oo(In({size:r,sizes:e.breakpoints})));return"base"in t?["base",...n]:n}function ZM({value:t,theme:e,getValue:n,property:i}){if(t==null)return;if(typeof t=="object")return KM(t,e).reduce((s,a)=>{if(a==="base"&&t.base!==void 0){const u=n(t.base,e);return Array.isArray(i)?(i.forEach(f=>{s[f]=u}),s):(s[i]=u,s)}const l=n(t[a],e);return Array.isArray(i)?(s[e.fn.largerThan(a)]={},i.forEach(u=>{s[e.fn.largerThan(a)][u]=l}),s):(s[e.fn.largerThan(a)]={[i]:l},s)},{});const r=n(t,e);return Array.isArray(i)?i.reduce((o,s)=>(o[s]=r,o),{}):{[i]:r}}function QM(t,e){return t==="dimmed"?e.colorScheme==="dark"?e.colors.dark[2]:e.colors.gray[6]:e.fn.variant({variant:"filled",color:t,primaryFallback:!1}).background}function JM(t){return Et(t)}function e1(t){return t}function t1(t,e){return In({size:t,sizes:e.fontSizes})}const n1=["-xs","-sm","-md","-lg","-xl"];function i1(t,e){return n1.includes(t)?`calc(${In({size:t.replace("-",""),sizes:e.spacing})} * -1)`:In({size:t,sizes:e.spacing})}const r1={identity:e1,color:QM,size:JM,fontSize:t1,spacing:i1},o1={m:{type:"spacing",property:"margin"},mt:{type:"spacing",property:"marginTop"},mb:{type:"spacing",property:"marginBottom"},ml:{type:"spacing",property:"marginLeft"},mr:{type:"spacing",property:"marginRight"},mx:{type:"spacing",property:["marginRight","marginLeft"]},my:{type:"spacing",property:["marginTop","marginBottom"]},p:{type:"spacing",property:"padding"},pt:{type:"spacing",property:"paddingTop"},pb:{type:"spacing",property:"paddingBottom"},pl:{type:"spacing",property:"paddingLeft"},pr:{type:"spacing",property:"paddingRight"},px:{type:"spacing",property:["paddingRight","paddingLeft"]},py:{type:"spacing",property:["paddingTop","paddingBottom"]},bg:{type:"color",property:"background"},c:{type:"color",property:"color"},opacity:{type:"identity",property:"opacity"},ff:{type:"identity",property:"fontFamily"},fz:{type:"fontSize",property:"fontSize"},fw:{type:"identity",property:"fontWeight"},lts:{type:"size",property:"letterSpacing"},ta:{type:"identity",property:"textAlign"},lh:{type:"identity",property:"lineHeight"},fs:{type:"identity",property:"fontStyle"},tt:{type:"identity",property:"textTransform"},td:{type:"identity",property:"textDecoration"},w:{type:"spacing",property:"width"},miw:{type:"spacing",property:"minWidth"},maw:{type:"spacing",property:"maxWidth"},h:{type:"spacing",property:"height"},mih:{type:"spacing",property:"minHeight"},mah:{type:"spacing",property:"maxHeight"},bgsz:{type:"size",property:"backgroundSize"},bgp:{type:"identity",property:"backgroundPosition"},bgr:{type:"identity",property:"backgroundRepeat"},bga:{type:"identity",property:"backgroundAttachment"},pos:{type:"identity",property:"position"},top:{type:"identity",property:"top"},left:{type:"size",property:"left"},bottom:{type:"size",property:"bottom"},right:{type:"size",property:"right"},inset:{type:"size",property:"inset"},display:{type:"identity",property:"display"}};var s1=Object.defineProperty,Np=Object.getOwnPropertySymbols,a1=Object.prototype.hasOwnProperty,l1=Object.prototype.propertyIsEnumerable,Op=(t,e,n)=>e in t?s1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Fp=(t,e)=>{for(var n in e||(e={}))a1.call(e,n)&&Op(t,n,e[n]);if(Np)for(var n of Np(e))l1.call(e,n)&&Op(t,n,e[n]);return t};function kp(t,e,n=o1){return Object.keys(n).reduce((r,o)=>(o in t&&t[o]!==void 0&&r.push(ZM({value:t[o],getValue:r1[n[o].type],property:n[o].property,theme:e})),r),[]).reduce((r,o)=>(Object.keys(o).forEach(s=>{typeof o[s]=="object"&&o[s]!==null&&s in r?r[s]=Fp(Fp({},r[s]),o[s]):r[s]=o[s]}),r),{})}function zp(t,e){return typeof t=="function"?t(e):t}function u1(t,e,n){const i=xu(),{css:r,cx:o}=u0();return Array.isArray(t)?o(n,r(kp(e,i)),t.map(s=>r(zp(s,i)))):o(n,r(zp(t,i)),r(kp(e,i)))}var c1=Object.defineProperty,Fl=Object.getOwnPropertySymbols,c0=Object.prototype.hasOwnProperty,f0=Object.prototype.propertyIsEnumerable,Bp=(t,e,n)=>e in t?c1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,f1=(t,e)=>{for(var n in e||(e={}))c0.call(e,n)&&Bp(t,n,e[n]);if(Fl)for(var n of Fl(e))f0.call(e,n)&&Bp(t,n,e[n]);return t},d1=(t,e)=>{var n={};for(var i in t)c0.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&Fl)for(var i of Fl(t))e.indexOf(i)<0&&f0.call(t,i)&&(n[i]=t[i]);return n};const d0=ke.forwardRef((t,e)=>{var n=t,{className:i,component:r,style:o,sx:s}=n,a=d1(n,["className","component","style","sx"]);const{systemStyles:l,rest:u}=qM(a),f=r||"div";return qe.createElement(f,f1({ref:e,className:u1(s,l,i),style:o},u))});d0.displayName="@mantine/core/Box";const ia=d0;var h1=Object.defineProperty,p1=Object.defineProperties,m1=Object.getOwnPropertyDescriptors,Hp=Object.getOwnPropertySymbols,g1=Object.prototype.hasOwnProperty,_1=Object.prototype.propertyIsEnumerable,Gp=(t,e,n)=>e in t?h1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ta=(t,e)=>{for(var n in e||(e={}))g1.call(e,n)&&Gp(t,n,e[n]);if(Hp)for(var n of Hp(e))_1.call(e,n)&&Gp(t,n,e[n]);return t},v1=(t,e)=>p1(t,m1(e));function y1({underline:t,strikethrough:e}){const n=[];return t&&n.push("underline"),e&&n.push("line-through"),n.length>0?n.join(" "):"none"}function x1({theme:t,color:e}){return e==="dimmed"?t.fn.dimmed():typeof e=="string"&&(e in t.colors||e.split(".")[0]in t.colors)?t.fn.variant({variant:"filled",color:e}).background:e||"inherit"}function S1(t){return typeof t=="number"?{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:t,WebkitBoxOrient:"vertical"}:null}function E1({theme:t,truncate:e}){return e==="start"?{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",direction:t.dir==="ltr"?"rtl":"ltr",textAlign:t.dir==="ltr"?"right":"left"}:e?{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}:null}var M1=na((t,{color:e,lineClamp:n,truncate:i,inline:r,inherit:o,underline:s,gradient:a,weight:l,transform:u,align:f,strikethrough:d,italic:h},{size:p})=>{const y=t.fn.variant({variant:"gradient",gradient:a});return{root:v1(Ta(Ta(Ta(Ta({},t.fn.fontStyles()),t.fn.focusStyles()),S1(n)),E1({theme:t,truncate:i})),{color:x1({color:e,theme:t}),fontFamily:o?"inherit":t.fontFamily,fontSize:o||p===void 0?"inherit":In({size:p,sizes:t.fontSizes}),lineHeight:o?"inherit":r?1:t.lineHeight,textDecoration:y1({underline:s,strikethrough:d}),WebkitTapHighlightColor:"transparent",fontWeight:o?"inherit":l,textTransform:u,textAlign:f,fontStyle:h?"italic":void 0}),gradient:{backgroundImage:y.background,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}});const w1=M1;var T1=Object.defineProperty,kl=Object.getOwnPropertySymbols,h0=Object.prototype.hasOwnProperty,p0=Object.prototype.propertyIsEnumerable,Vp=(t,e,n)=>e in t?T1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,A1=(t,e)=>{for(var n in e||(e={}))h0.call(e,n)&&Vp(t,n,e[n]);if(kl)for(var n of kl(e))p0.call(e,n)&&Vp(t,n,e[n]);return t},C1=(t,e)=>{var n={};for(var i in t)h0.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&kl)for(var i of kl(t))e.indexOf(i)<0&&p0.call(t,i)&&(n[i]=t[i]);return n};const b1={variant:"text"},m0=ke.forwardRef((t,e)=>{const n=ta("Text",b1,t),{className:i,size:r,weight:o,transform:s,color:a,align:l,variant:u,lineClamp:f,truncate:d,gradient:h,inline:p,inherit:y,underline:v,strikethrough:m,italic:c,classNames:g,styles:_,unstyled:E,span:S,__staticSelector:w}=n,C=C1(n,["className","size","weight","transform","color","align","variant","lineClamp","truncate","gradient","inline","inherit","underline","strikethrough","italic","classNames","styles","unstyled","span","__staticSelector"]),{classes:D,cx:x}=w1({color:a,lineClamp:f,truncate:d,inline:p,inherit:y,underline:v,strikethrough:m,italic:c,weight:o,transform:s,align:l,gradient:h},{unstyled:E,name:w||"Text",variant:u,size:r});return qe.createElement(ia,A1({ref:e,className:x(D.root,{[D.gradient]:u==="gradient"},i),component:S?"span":"div"},C))});m0.displayName="@mantine/core/Text";const R1=m0;var P1=na((t,{fluid:e,sizes:n},{size:i})=>({root:{paddingLeft:t.spacing.md,paddingRight:t.spacing.md,maxWidth:e?"100%":In({size:i,sizes:n}),marginLeft:"auto",marginRight:"auto"}}));const L1=P1;var D1=Object.defineProperty,zl=Object.getOwnPropertySymbols,g0=Object.prototype.hasOwnProperty,_0=Object.prototype.propertyIsEnumerable,Wp=(t,e,n)=>e in t?D1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,U1=(t,e)=>{for(var n in e||(e={}))g0.call(e,n)&&Wp(t,n,e[n]);if(zl)for(var n of zl(e))_0.call(e,n)&&Wp(t,n,e[n]);return t},I1=(t,e)=>{var n={};for(var i in t)g0.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&zl)for(var i of zl(t))e.indexOf(i)<0&&_0.call(t,i)&&(n[i]=t[i]);return n};const N1={sizes:{xs:Et(540),sm:Et(720),md:Et(960),lg:Et(1140),xl:Et(1320)}},v0=ke.forwardRef((t,e)=>{const n=ta("Container",N1,t),{className:i,fluid:r,size:o,unstyled:s,sizes:a,variant:l}=n,u=I1(n,["className","fluid","size","unstyled","sizes","variant"]),{classes:f,cx:d}=L1({fluid:r,sizes:a},{unstyled:s,name:"Container",variant:l,size:o});return qe.createElement(ia,U1({className:d(f.root,i),ref:e},u))});v0.displayName="@mantine/core/Container";const[O1,F1]=NS("Grid component was not found in tree");var k1=Object.defineProperty,$p=Object.getOwnPropertySymbols,z1=Object.prototype.hasOwnProperty,B1=Object.prototype.propertyIsEnumerable,Xp=(t,e,n)=>e in t?k1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,H1=(t,e)=>{for(var n in e||(e={}))z1.call(e,n)&&Xp(t,n,e[n]);if($p)for(var n of $p(e))B1.call(e,n)&&Xp(t,n,e[n]);return t};const Xd=(t,e)=>t==="content"?"auto":t==="auto"?"0rem":t?`${100/(e/t)}%`:void 0,y0=(t,e,n)=>n||t==="auto"||t==="content"?"unset":Xd(t,e),x0=(t,e)=>{if(t)return t==="auto"||e?1:0},S0=(t,e)=>t===0?0:t?`${100/(e/t)}%`:void 0,E0=(t,e)=>typeof t<"u"?`calc(${In({size:t,sizes:e.spacing})} / 2)`:void 0;function G1({sizes:t,offsets:e,orders:n,theme:i,columns:r,gutters:o,grow:s}){return Vv.reduce((a,l)=>(a[`@media (min-width: ${Js(i.breakpoints[l])})`]={order:n[l],flexBasis:Xd(t[l],r),padding:E0(o[l],i),flexShrink:0,width:t[l]==="content"?"auto":void 0,maxWidth:y0(t[l],r,s),marginLeft:S0(e[l],r),flexGrow:x0(t[l],s)},a),{})}var V1=na((t,{gutter:e,gutterXs:n,gutterSm:i,gutterMd:r,gutterLg:o,gutterXl:s,grow:a,offset:l,offsetXs:u,offsetSm:f,offsetMd:d,offsetLg:h,offsetXl:p,columns:y,span:v,xs:m,sm:c,md:g,lg:_,xl:E,order:S,orderXs:w,orderSm:C,orderMd:D,orderLg:x,orderXl:A})=>({col:H1({boxSizing:"border-box",flexGrow:x0(v,a),order:S,padding:E0(e,t),marginLeft:S0(l,y),flexBasis:Xd(v,y),flexShrink:0,width:v==="content"?"auto":void 0,maxWidth:y0(v,y,a)},G1({sizes:{xs:m,sm:c,md:g,lg:_,xl:E},offsets:{xs:u,sm:f,md:d,lg:h,xl:p},orders:{xs:w,sm:C,md:D,lg:x,xl:A},gutters:{xs:n,sm:i,md:r,lg:o,xl:s},theme:t,columns:y,grow:a}))}));const W1=V1;var $1=Object.defineProperty,Bl=Object.getOwnPropertySymbols,M0=Object.prototype.hasOwnProperty,w0=Object.prototype.propertyIsEnumerable,jp=(t,e,n)=>e in t?$1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,X1=(t,e)=>{for(var n in e||(e={}))M0.call(e,n)&&jp(t,n,e[n]);if(Bl)for(var n of Bl(e))w0.call(e,n)&&jp(t,n,e[n]);return t},j1=(t,e)=>{var n={};for(var i in t)M0.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&Bl)for(var i of Bl(t))e.indexOf(i)<0&&w0.call(t,i)&&(n[i]=t[i]);return n};const Y1={};function q1(t){return t==="auto"||t==="content"?!0:typeof t=="number"&&t>0&&t%1===0}const T0=ke.forwardRef((t,e)=>{const n=ta("GridCol",Y1,t),{children:i,span:r,offset:o,offsetXs:s,offsetSm:a,offsetMd:l,offsetLg:u,offsetXl:f,xs:d,sm:h,md:p,lg:y,xl:v,order:m,orderXs:c,orderSm:g,orderMd:_,orderLg:E,orderXl:S,className:w,id:C,unstyled:D,variant:x}=n,A=j1(n,["children","span","offset","offsetXs","offsetSm","offsetMd","offsetLg","offsetXl","xs","sm","md","lg","xl","order","orderXs","orderSm","orderMd","orderLg","orderXl","className","id","unstyled","variant"]),W=F1(),Y=r||W.columns,{classes:I,cx:B}=W1({gutter:W.gutter,gutterXs:W.gutterXs,gutterSm:W.gutterSm,gutterMd:W.gutterMd,gutterLg:W.gutterLg,gutterXl:W.gutterXl,offset:o,offsetXs:s,offsetSm:a,offsetMd:l,offsetLg:u,offsetXl:f,xs:d,sm:h,md:p,lg:y,xl:v,order:m,orderXs:c,orderSm:g,orderMd:_,orderLg:E,orderXl:S,grow:W.grow,columns:W.columns,span:Y},{unstyled:D,name:"Grid",variant:x});return!q1(Y)||Y>W.columns?null:qe.createElement(ia,X1({className:B(I.col,w),ref:e},A),i)});T0.displayName="@mantine/core/Col";var K1=Object.defineProperty,Yp=Object.getOwnPropertySymbols,Z1=Object.prototype.hasOwnProperty,Q1=Object.prototype.propertyIsEnumerable,qp=(t,e,n)=>e in t?K1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,J1=(t,e)=>{for(var n in e||(e={}))Z1.call(e,n)&&qp(t,n,e[n]);if(Yp)for(var n of Yp(e))Q1.call(e,n)&&qp(t,n,e[n]);return t};function ew(t,e){return Vv.reduce((n,i)=>(typeof t[i]<"u"&&(n[`@media (min-width: ${e.breakpoints[i]})`]={margin:`calc(-${In({size:t[i],sizes:e.spacing})} / 2)`}),n),{})}var tw=na((t,{justify:e,align:n,gutter:i,gutterXs:r,gutterSm:o,gutterMd:s,gutterLg:a,gutterXl:l})=>({root:J1({margin:`calc(-${In({size:i,sizes:t.spacing})} / 2)`,display:"flex",flexWrap:"wrap",justifyContent:e,alignItems:n},ew({xs:r,sm:o,md:s,lg:a,xl:l},t))}));const nw=tw;var iw=Object.defineProperty,Hl=Object.getOwnPropertySymbols,A0=Object.prototype.hasOwnProperty,C0=Object.prototype.propertyIsEnumerable,Kp=(t,e,n)=>e in t?iw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,rw=(t,e)=>{for(var n in e||(e={}))A0.call(e,n)&&Kp(t,n,e[n]);if(Hl)for(var n of Hl(e))C0.call(e,n)&&Kp(t,n,e[n]);return t},ow=(t,e)=>{var n={};for(var i in t)A0.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&Hl)for(var i of Hl(t))e.indexOf(i)<0&&C0.call(t,i)&&(n[i]=t[i]);return n};const sw={gutter:"md",justify:"flex-start",align:"stretch",columns:12},Gl=ke.forwardRef((t,e)=>{const n=ta("Grid",sw,t),{gutter:i,gutterXs:r,gutterSm:o,gutterMd:s,gutterLg:a,gutterXl:l,children:u,grow:f,justify:d,align:h,columns:p,className:y,id:v,unstyled:m,variant:c}=n,g=ow(n,["gutter","gutterXs","gutterSm","gutterMd","gutterLg","gutterXl","children","grow","justify","align","columns","className","id","unstyled","variant"]),{classes:_,cx:E}=nw({gutter:i,justify:d,align:h,gutterXs:r,gutterSm:o,gutterMd:s,gutterLg:a,gutterXl:l},{unstyled:m,name:"Grid",variant:c});return qe.createElement(O1,{value:{gutter:i,gutterXs:r,gutterSm:o,gutterMd:s,gutterLg:a,gutterXl:l,grow:f,columns:p}},qe.createElement(ia,rw({className:E(_.root,y),ref:e},g),u))});Gl.Col=T0;Gl.displayName="@mantine/core/Grid";var aw=Object.defineProperty,Zp=Object.getOwnPropertySymbols,lw=Object.prototype.hasOwnProperty,uw=Object.prototype.propertyIsEnumerable,Qp=(t,e,n)=>e in t?aw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,cw=(t,e)=>{for(var n in e||(e={}))lw.call(e,n)&&Qp(t,n,e[n]);if(Zp)for(var n of Zp(e))uw.call(e,n)&&Qp(t,n,e[n]);return t};function fw(t){return qe.createElement("svg",cw({viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),qe.createElement("path",{d:"M2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5C1 1.67157 1.67157 1 2.5 1ZM2.5 2C2.22386 2 2 2.22386 2 2.5V8.3636L3.6818 6.6818C3.76809 6.59551 3.88572 6.54797 4.00774 6.55007C4.12975 6.55216 4.24568 6.60372 4.32895 6.69293L7.87355 10.4901L10.6818 7.6818C10.8575 7.50607 11.1425 7.50607 11.3182 7.6818L13 9.3636V2.5C13 2.22386 12.7761 2 12.5 2H2.5ZM2 12.5V9.6364L3.98887 7.64753L7.5311 11.4421L8.94113 13H2.5C2.22386 13 2 12.7761 2 12.5ZM12.5 13H10.155L8.48336 11.153L11 8.6364L13 10.6364V12.5C13 12.7761 12.7761 13 12.5 13ZM6.64922 5.5C6.64922 5.03013 7.03013 4.64922 7.5 4.64922C7.96987 4.64922 8.35078 5.03013 8.35078 5.5C8.35078 5.96987 7.96987 6.35078 7.5 6.35078C7.03013 6.35078 6.64922 5.96987 6.64922 5.5ZM7.5 3.74922C6.53307 3.74922 5.74922 4.53307 5.74922 5.5C5.74922 6.46693 6.53307 7.25078 7.5 7.25078C8.46693 7.25078 9.25078 6.46693 9.25078 5.5C9.25078 4.53307 8.46693 3.74922 7.5 3.74922Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var dw=Object.defineProperty,hw=Object.defineProperties,pw=Object.getOwnPropertyDescriptors,Jp=Object.getOwnPropertySymbols,mw=Object.prototype.hasOwnProperty,gw=Object.prototype.propertyIsEnumerable,em=(t,e,n)=>e in t?dw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,tm=(t,e)=>{for(var n in e||(e={}))mw.call(e,n)&&em(t,n,e[n]);if(Jp)for(var n of Jp(e))gw.call(e,n)&&em(t,n,e[n]);return t},nm=(t,e)=>hw(t,pw(e)),_w=na((t,{radius:e})=>({root:{},imageWrapper:{position:"relative"},figure:{margin:0},image:nm(tm({},t.fn.fontStyles()),{display:"block",width:"100%",height:"100%",border:0,borderRadius:t.fn.radius(e)}),caption:{color:t.colorScheme==="dark"?t.colors.dark[2]:t.colors.gray[7],marginTop:t.spacing.xs},placeholder:nm(tm({},t.fn.cover()),{display:"flex",alignItems:"center",justifyContent:"center",color:t.colorScheme==="dark"?t.colors.dark[2]:t.colors.gray[6],backgroundColor:t.colorScheme==="dark"?t.colors.dark[8]:t.colors.gray[0],borderRadius:t.fn.radius(e)})}));const vw=_w;var yw=Object.defineProperty,xw=Object.defineProperties,Sw=Object.getOwnPropertyDescriptors,Vl=Object.getOwnPropertySymbols,b0=Object.prototype.hasOwnProperty,R0=Object.prototype.propertyIsEnumerable,im=(t,e,n)=>e in t?yw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Aa=(t,e)=>{for(var n in e||(e={}))b0.call(e,n)&&im(t,n,e[n]);if(Vl)for(var n of Vl(e))R0.call(e,n)&&im(t,n,e[n]);return t},Ew=(t,e)=>xw(t,Sw(e)),Mw=(t,e)=>{var n={};for(var i in t)b0.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&Vl)for(var i of Vl(t))e.indexOf(i)<0&&R0.call(t,i)&&(n[i]=t[i]);return n};const ww={fit:"cover",width:"100%",height:"auto",radius:0},P0=ke.forwardRef((t,e)=>{const n=ta("Image",ww,t),{className:i,alt:r,src:o,fit:s,width:a,height:l,radius:u,imageProps:f,withPlaceholder:d,placeholder:h,imageRef:p,classNames:y,styles:v,caption:m,unstyled:c,style:g,variant:_}=n,E=Mw(n,["className","alt","src","fit","width","height","radius","imageProps","withPlaceholder","placeholder","imageRef","classNames","styles","caption","unstyled","style","variant"]),{classes:S,cx:w}=vw({radius:u},{classNames:y,styles:v,unstyled:c,name:"Image",variant:_}),[C,D]=ke.useState(!o),x=d&&C;return $M(()=>{D(!o)},[o]),qe.createElement(ia,Aa({className:w(S.root,i),style:Aa({width:Et(a)},g),ref:e},E),qe.createElement("figure",{className:S.figure},qe.createElement("div",{className:S.imageWrapper},qe.createElement("img",Ew(Aa({src:o,alt:r,ref:p},f),{className:w(S.image,f==null?void 0:f.className),onError:A=>{D(!0),typeof(f==null?void 0:f.onError)=="function"&&f.onError(A)},style:Aa({objectFit:s,width:Et(a),height:Et(l)},f==null?void 0:f.style)})),x&&qe.createElement("div",{className:S.placeholder,title:r},h||qe.createElement("div",null,qe.createElement(fw,{width:Et(40),height:Et(40)})))),!!m&&qe.createElement(R1,{component:"figcaption",size:"sm",align:"center",className:S.caption},m)))});P0.displayName="@mantine/core/Image";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jd="152",zr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tw=0,rm=1,Aw=2,L0=1,Cw=2,_i=3,Ji=0,an=1,xi=2,Ki=0,Ao=1,om=2,sm=3,am=4,bw=5,ro=100,Rw=101,Pw=102,lm=103,um=104,Lw=200,Dw=201,Uw=202,Iw=203,D0=204,U0=205,Nw=206,Ow=207,Fw=208,kw=209,zw=210,Bw=0,Hw=1,Gw=2,Nf=3,Vw=4,Ww=5,$w=6,Xw=7,I0=0,jw=1,Yw=2,wi=0,qw=1,Kw=2,Zw=3,Qw=4,Jw=5,N0=300,ko=301,zo=302,Of=303,Ff=304,Su=306,kf=1e3,$n=1001,zf=1002,Kt=1003,cm=1004,oc=1005,bn=1006,eT=1007,Ws=1008,Pr=1009,tT=1010,nT=1011,O0=1012,iT=1013,_r=1014,vr=1015,$s=1016,rT=1017,oT=1018,Co=1020,sT=1021,Xn=1023,aT=1024,lT=1025,Sr=1026,Bo=1027,uT=1028,cT=1029,fT=1030,dT=1031,hT=1033,sc=33776,ac=33777,lc=33778,uc=33779,fm=35840,dm=35841,hm=35842,pm=35843,pT=36196,mm=37492,gm=37496,_m=37808,vm=37809,ym=37810,xm=37811,Sm=37812,Em=37813,Mm=37814,wm=37815,Tm=37816,Am=37817,Cm=37818,bm=37819,Rm=37820,Pm=37821,cc=36492,mT=36283,Lm=36284,Dm=36285,Um=36286,F0=3e3,Er=3001,gT=3200,_T=3201,vT=0,yT=1,Mr="",Ce="srgb",Kn="srgb-linear",k0="display-p3",fc=7680,xT=519,Im=35044,Nm="300 es",Bf=1035;class Or{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dc=Math.PI/180,Hf=180/Math.PI;function ra(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function ST(t,e){return(t%e+e)%e}function hc(t,e,n){return(1-n)*t+n*e}function Om(t){return(t&t-1)===0&&t!==0}function ET(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ca(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function fn(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Fe{constructor(e=0,n=0){Fe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,o,s,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=o,f[5]=l,f[6]=i,f[7]=s,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],f=i[4],d=i[7],h=i[2],p=i[5],y=i[8],v=r[0],m=r[3],c=r[6],g=r[1],_=r[4],E=r[7],S=r[2],w=r[5],C=r[8];return o[0]=s*v+a*g+l*S,o[3]=s*m+a*_+l*w,o[6]=s*c+a*E+l*C,o[1]=u*v+f*g+d*S,o[4]=u*m+f*_+d*w,o[7]=u*c+f*E+d*C,o[2]=h*v+p*g+y*S,o[5]=h*m+p*_+y*w,o[8]=h*c+p*E+y*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*s*f-n*a*u-i*o*f+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=f*s-a*u,h=a*l-f*o,p=u*o-s*l,y=n*d+i*h+r*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/y;return e[0]=d*v,e[1]=(r*u-f*i)*v,e[2]=(a*i-r*s)*v,e[3]=h*v,e[4]=(f*n-r*l)*v,e[5]=(r*o-a*n)*v,e[6]=p*v,e[7]=(i*l-u*n)*v,e[8]=(s*n-i*o)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(pc.makeScale(e,n)),this}rotate(e){return this.premultiply(pc.makeRotation(-e)),this}translate(e,n){return this.premultiply(pc.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pc=new Oe;function z0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Xs(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const Fm={};function Ms(t){t in Fm||(Fm[t]=!0,console.warn(t))}function bo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function mc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const MT=new Oe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),wT=new Oe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function TT(t){return t.convertSRGBToLinear().applyMatrix3(wT)}function AT(t){return t.applyMatrix3(MT).convertLinearToSRGB()}const CT={[Kn]:t=>t,[Ce]:t=>t.convertSRGBToLinear(),[k0]:TT},bT={[Kn]:t=>t,[Ce]:t=>t.convertLinearToSRGB(),[k0]:AT},Fn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Kn},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=CT[e],r=bT[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Hr;class B0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hr===void 0&&(Hr=Xs("canvas")),Hr.width=e.width,Hr.height=e.height;const i=Hr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Hr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Xs("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=bo(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(bo(n[i]/255)*255):n[i]=bo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class H0{constructor(e=null){this.isSource=!0,this.uuid=ra(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(gc(r[s].image)):o.push(gc(r[s]))}else o=gc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function gc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?B0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let RT=0;class ln extends Or{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=$n,r=$n,o=bn,s=Ws,a=Xn,l=Pr,u=ln.DEFAULT_ANISOTROPY,f=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RT++}),this.uuid=ra(),this.name="",this.source=new H0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Er?Ce:Mr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==N0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kf:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case zf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kf:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case zf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ce?Er:F0}set encoding(e){Ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Er?Ce:Mr}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=N0;ln.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],f=l[4],d=l[8],h=l[1],p=l[5],y=l[9],v=l[2],m=l[6],c=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-v)<.01&&Math.abs(y-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+v)<.1&&Math.abs(y+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,E=(p+1)/2,S=(c+1)/2,w=(f+h)/4,C=(d+v)/4,D=(y+m)/4;return _>E&&_>S?_<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(_),r=w/i,o=C/i):E>S?E<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(E),i=w/r,o=D/r):S<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(S),i=C/o,r=D/o),this.set(i,r,o,n),this}let g=Math.sqrt((m-y)*(m-y)+(d-v)*(d-v)+(h-f)*(h-f));return Math.abs(g)<.001&&(g=1),this.x=(m-y)/g,this.y=(d-v)/g,this.z=(h-f)/g,this.w=Math.acos((u+p+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lr extends Or{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ms("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Er?Ce:Mr),this.texture=new ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:bn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new H0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class G0 extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class PT extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],f=i[r+2],d=i[r+3];const h=o[s+0],p=o[s+1],y=o[s+2],v=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=y,e[n+3]=v;return}if(d!==v||l!==h||u!==p||f!==y){let m=1-a;const c=l*h+u*p+f*y+d*v,g=c>=0?1:-1,_=1-c*c;if(_>Number.EPSILON){const S=Math.sqrt(_),w=Math.atan2(S,c*g);m=Math.sin(m*w)/S,a=Math.sin(a*w)/S}const E=a*g;if(l=l*m+h*E,u=u*m+p*E,f=f*m+y*E,d=d*m+v*E,m===1-a){const S=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=S,u*=S,f*=S,d*=S}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],d=o[s],h=o[s+1],p=o[s+2],y=o[s+3];return e[n]=a*y+f*d+l*p-u*h,e[n+1]=l*y+f*h+u*d-a*p,e[n+2]=u*y+f*p+a*h-l*d,e[n+3]=f*y-a*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),d=a(o/2),h=l(i/2),p=l(r/2),y=l(o/2);switch(s){case"XYZ":this._x=h*f*d+u*p*y,this._y=u*p*d-h*f*y,this._z=u*f*y+h*p*d,this._w=u*f*d-h*p*y;break;case"YXZ":this._x=h*f*d+u*p*y,this._y=u*p*d-h*f*y,this._z=u*f*y-h*p*d,this._w=u*f*d+h*p*y;break;case"ZXY":this._x=h*f*d-u*p*y,this._y=u*p*d+h*f*y,this._z=u*f*y+h*p*d,this._w=u*f*d-h*p*y;break;case"ZYX":this._x=h*f*d-u*p*y,this._y=u*p*d+h*f*y,this._z=u*f*y-h*p*d,this._w=u*f*d+h*p*y;break;case"YZX":this._x=h*f*d+u*p*y,this._y=u*p*d+h*f*y,this._z=u*f*y-h*p*d,this._w=u*f*d-h*p*y;break;case"XZY":this._x=h*f*d-u*p*y,this._y=u*p*d-h*f*y,this._z=u*f*y+h*p*d,this._w=u*f*d+h*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(o-u)*p,this._z=(s-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(o-u)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(s-r)/p,this._x=(o+u)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+s*a+r*u-o*l,this._y=r*f+s*l+o*a-i*u,this._z=o*f+s*u+i*l-r*a,this._w=s*f-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),d=Math.sin((1-n)*f)/u,h=Math.sin(n*f)/u;return this._w=s*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=o*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(km.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(km.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=l*n+s*r-a*i,f=l*i+a*n-o*r,d=l*r+o*i-s*n,h=-o*n-s*i-a*r;return this.x=u*l+h*-o+f*-a-d*-s,this.y=f*l+h*-s+d*-o-u*-a,this.z=d*l+h*-a+u*-s-f*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _c.copy(this).projectOnVector(e),this.sub(_c)}reflect(e){return this.sub(_c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _c=new F,km=new Dr;class oa{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(di.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(di.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=di.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Gr.copy(e.boundingBox),Gr.applyMatrix4(e.matrixWorld),this.union(Gr);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const o=r.attributes.position;for(let s=0,a=o.count;s<a;s++)di.fromBufferAttribute(o,s).applyMatrix4(e.matrixWorld),this.expandByPoint(di)}else r.boundingBox===null&&r.computeBoundingBox(),Gr.copy(r.boundingBox),Gr.applyMatrix4(e.matrixWorld),this.union(Gr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rs),ba.subVectors(this.max,rs),Vr.subVectors(e.a,rs),Wr.subVectors(e.b,rs),$r.subVectors(e.c,rs),Di.subVectors(Wr,Vr),Ui.subVectors($r,Wr),sr.subVectors(Vr,$r);let n=[0,-Di.z,Di.y,0,-Ui.z,Ui.y,0,-sr.z,sr.y,Di.z,0,-Di.x,Ui.z,0,-Ui.x,sr.z,0,-sr.x,-Di.y,Di.x,0,-Ui.y,Ui.x,0,-sr.y,sr.x,0];return!vc(n,Vr,Wr,$r,ba)||(n=[1,0,0,0,1,0,0,0,1],!vc(n,Vr,Wr,$r,ba))?!1:(Ra.crossVectors(Di,Ui),n=[Ra.x,Ra.y,Ra.z],vc(n,Vr,Wr,$r,ba))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new F,new F,new F,new F,new F,new F,new F,new F],di=new F,Gr=new oa,Vr=new F,Wr=new F,$r=new F,Di=new F,Ui=new F,sr=new F,rs=new F,ba=new F,Ra=new F,ar=new F;function vc(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){ar.fromArray(t,o);const a=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),l=e.dot(ar),u=n.dot(ar),f=i.dot(ar);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const LT=new oa,os=new F,yc=new F;class Yd{constructor(e=new F,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):LT.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;os.subVectors(e,this.center);const n=os.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(os,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(os.copy(e.center).add(yc)),this.expandByPoint(os.copy(e.center).sub(yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new F,xc=new F,Pa=new F,Ii=new F,Sc=new F,La=new F,Ec=new F;class DT{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,n),hi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){xc.copy(e).add(n).multiplyScalar(.5),Pa.copy(n).sub(e).normalize(),Ii.copy(this.origin).sub(xc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Pa),a=Ii.dot(this.direction),l=-Ii.dot(Pa),u=Ii.lengthSq(),f=Math.abs(1-s*s);let d,h,p,y;if(f>0)if(d=s*l-a,h=s*a-l,y=o*f,d>=0)if(h>=-y)if(h<=y){const v=1/f;d*=v,h*=v,p=d*(d+s*h+2*a)+h*(s*d+h+2*l)+u}else h=o,d=Math.max(0,-(s*h+a)),p=-d*d+h*(h+2*l)+u;else h=-o,d=Math.max(0,-(s*h+a)),p=-d*d+h*(h+2*l)+u;else h<=-y?(d=Math.max(0,-(-s*o+a)),h=d>0?-o:Math.min(Math.max(-o,-l),o),p=-d*d+h*(h+2*l)+u):h<=y?(d=0,h=Math.min(Math.max(-o,-l),o),p=h*(h+2*l)+u):(d=Math.max(0,-(s*o+a)),h=d>0?o:Math.min(Math.max(-o,-l),o),p=-d*d+h*(h+2*l)+u);else h=s>0?-o:o,d=Math.max(0,-(s*h+a)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(xc).addScaledVector(Pa,h),p}intersectSphere(e,n){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),r=hi.dot(hi)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(o=(e.min.y-h.y)*f,s=(e.max.y-h.y)*f):(o=(e.max.y-h.y)*f,s=(e.min.y-h.y)*f),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,n,i,r,o){Sc.subVectors(n,e),La.subVectors(i,e),Ec.crossVectors(Sc,La);let s=this.direction.dot(Ec),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Ii.subVectors(this.origin,e);const l=a*this.direction.dot(La.crossVectors(Ii,La));if(l<0)return null;const u=a*this.direction.dot(Sc.cross(Ii));if(u<0||l+u>s)return null;const f=-a*Ii.dot(Ec);return f<0?null:this.at(f/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,o,s,a,l,u,f,d,h,p,y,v,m){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=o,c[5]=s,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=d,c[14]=h,c[3]=p,c[7]=y,c[11]=v,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),o=1/Xr.setFromMatrixColumn(e,1).length(),s=1/Xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const h=s*f,p=s*d,y=a*f,v=a*d;n[0]=l*f,n[4]=-l*d,n[8]=u,n[1]=p+y*u,n[5]=h-v*u,n[9]=-a*l,n[2]=v-h*u,n[6]=y+p*u,n[10]=s*l}else if(e.order==="YXZ"){const h=l*f,p=l*d,y=u*f,v=u*d;n[0]=h+v*a,n[4]=y*a-p,n[8]=s*u,n[1]=s*d,n[5]=s*f,n[9]=-a,n[2]=p*a-y,n[6]=v+h*a,n[10]=s*l}else if(e.order==="ZXY"){const h=l*f,p=l*d,y=u*f,v=u*d;n[0]=h-v*a,n[4]=-s*d,n[8]=y+p*a,n[1]=p+y*a,n[5]=s*f,n[9]=v-h*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const h=s*f,p=s*d,y=a*f,v=a*d;n[0]=l*f,n[4]=y*u-p,n[8]=h*u+v,n[1]=l*d,n[5]=v*u+h,n[9]=p*u-y,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,p=s*u,y=a*l,v=a*u;n[0]=l*f,n[4]=v-h*d,n[8]=y*d+p,n[1]=d,n[5]=s*f,n[9]=-a*f,n[2]=-u*f,n[6]=p*d+y,n[10]=h-v*d}else if(e.order==="XZY"){const h=s*l,p=s*u,y=a*l,v=a*u;n[0]=l*f,n[4]=-d,n[8]=u*f,n[1]=h*d+v,n[5]=s*f,n[9]=p*d-y,n[2]=y*d-p,n[6]=a*f,n[10]=v*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(UT,e,IT)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ni.crossVectors(i,dn),Ni.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ni.crossVectors(i,dn)),Ni.normalize(),Da.crossVectors(dn,Ni),r[0]=Ni.x,r[4]=Da.x,r[8]=dn.x,r[1]=Ni.y,r[5]=Da.y,r[9]=dn.y,r[2]=Ni.z,r[6]=Da.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],f=i[1],d=i[5],h=i[9],p=i[13],y=i[2],v=i[6],m=i[10],c=i[14],g=i[3],_=i[7],E=i[11],S=i[15],w=r[0],C=r[4],D=r[8],x=r[12],A=r[1],W=r[5],Y=r[9],I=r[13],B=r[2],$=r[6],ee=r[10],Z=r[14],U=r[3],H=r[7],k=r[11],ue=r[15];return o[0]=s*w+a*A+l*B+u*U,o[4]=s*C+a*W+l*$+u*H,o[8]=s*D+a*Y+l*ee+u*k,o[12]=s*x+a*I+l*Z+u*ue,o[1]=f*w+d*A+h*B+p*U,o[5]=f*C+d*W+h*$+p*H,o[9]=f*D+d*Y+h*ee+p*k,o[13]=f*x+d*I+h*Z+p*ue,o[2]=y*w+v*A+m*B+c*U,o[6]=y*C+v*W+m*$+c*H,o[10]=y*D+v*Y+m*ee+c*k,o[14]=y*x+v*I+m*Z+c*ue,o[3]=g*w+_*A+E*B+S*U,o[7]=g*C+_*W+E*$+S*H,o[11]=g*D+_*Y+E*ee+S*k,o[15]=g*x+_*I+E*Z+S*ue,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],f=e[2],d=e[6],h=e[10],p=e[14],y=e[3],v=e[7],m=e[11],c=e[15];return y*(+o*l*d-r*u*d-o*a*h+i*u*h+r*a*p-i*l*p)+v*(+n*l*p-n*u*h+o*s*h-r*s*p+r*u*f-o*l*f)+m*(+n*u*d-n*a*p-o*s*d+i*s*p+o*a*f-i*u*f)+c*(-r*a*f-n*l*d+n*a*h+r*s*d-i*s*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=e[9],h=e[10],p=e[11],y=e[12],v=e[13],m=e[14],c=e[15],g=d*m*u-v*h*u+v*l*p-a*m*p-d*l*c+a*h*c,_=y*h*u-f*m*u-y*l*p+s*m*p+f*l*c-s*h*c,E=f*v*u-y*d*u+y*a*p-s*v*p-f*a*c+s*d*c,S=y*d*l-f*v*l-y*a*h+s*v*h+f*a*m-s*d*m,w=n*g+i*_+r*E+o*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=g*C,e[1]=(v*h*o-d*m*o-v*r*p+i*m*p+d*r*c-i*h*c)*C,e[2]=(a*m*o-v*l*o+v*r*u-i*m*u-a*r*c+i*l*c)*C,e[3]=(d*l*o-a*h*o-d*r*u+i*h*u+a*r*p-i*l*p)*C,e[4]=_*C,e[5]=(f*m*o-y*h*o+y*r*p-n*m*p-f*r*c+n*h*c)*C,e[6]=(y*l*o-s*m*o-y*r*u+n*m*u+s*r*c-n*l*c)*C,e[7]=(s*h*o-f*l*o+f*r*u-n*h*u-s*r*p+n*l*p)*C,e[8]=E*C,e[9]=(y*d*o-f*v*o-y*i*p+n*v*p+f*i*c-n*d*c)*C,e[10]=(s*v*o-y*a*o+y*i*u-n*v*u-s*i*c+n*a*c)*C,e[11]=(f*a*o-s*d*o-f*i*u+n*d*u+s*i*p-n*a*p)*C,e[12]=S*C,e[13]=(f*v*r-y*d*r+y*i*h-n*v*h-f*i*m+n*d*m)*C,e[14]=(y*a*r-s*v*r-y*i*l+n*v*l+s*i*m-n*a*m)*C,e[15]=(s*d*r-f*a*r+f*i*l-n*d*l-s*i*h+n*a*h)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,f=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*s,0,u*l-r*a,f*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,f=s+s,d=a+a,h=o*u,p=o*f,y=o*d,v=s*f,m=s*d,c=a*d,g=l*u,_=l*f,E=l*d,S=i.x,w=i.y,C=i.z;return r[0]=(1-(v+c))*S,r[1]=(p+E)*S,r[2]=(y-_)*S,r[3]=0,r[4]=(p-E)*w,r[5]=(1-(h+c))*w,r[6]=(m+g)*w,r[7]=0,r[8]=(y+_)*C,r[9]=(m-g)*C,r[10]=(1-(h+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=Xr.set(r[0],r[1],r[2]).length();const s=Xr.set(r[4],r[5],r[6]).length(),a=Xr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],kn.copy(this);const u=1/o,f=1/s,d=1/a;return kn.elements[0]*=u,kn.elements[1]*=u,kn.elements[2]*=u,kn.elements[4]*=f,kn.elements[5]*=f,kn.elements[6]*=f,kn.elements[8]*=d,kn.elements[9]*=d,kn.elements[10]*=d,n.setFromRotationMatrix(kn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s){const a=this.elements,l=2*o/(n-e),u=2*o/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r),h=-(s+o)/(s-o),p=-2*s*o/(s-o);return a[0]=l,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,o,s){const a=this.elements,l=1/(n-e),u=1/(i-r),f=1/(s-o),d=(n+e)*l,h=(i+r)*u,p=(s+o)*f;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*f,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Xr=new F,kn=new Nt,UT=new F(0,0,0),IT=new F(1,1,1),Ni=new F,Da=new F,dn=new F,zm=new Nt,Bm=new Dr;class Eu{constructor(e=0,n=0,i=0,r=Eu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],f=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Zt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return zm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Bm.setFromEuler(this),this.setFromQuaternion(Bm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Eu.DEFAULT_ORDER="XYZ";class V0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let NT=0;const Hm=new F,jr=new Dr,pi=new Nt,Ua=new F,ss=new F,OT=new F,FT=new Dr,Gm=new F(1,0,0),Vm=new F(0,1,0),Wm=new F(0,0,1),kT={type:"added"},$m={type:"removed"};class yn extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NT++}),this.uuid=ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new F,n=new Eu,i=new Dr,r=new F(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Nt},normalMatrix:{value:new Oe}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new V0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return jr.setFromAxisAngle(e,n),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,n){return jr.setFromAxisAngle(e,n),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(Gm,e)}rotateY(e){return this.rotateOnAxis(Vm,e)}rotateZ(e){return this.rotateOnAxis(Wm,e)}translateOnAxis(e,n){return Hm.copy(e).applyQuaternion(this.quaternion),this.position.add(Hm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Gm,e)}translateY(e){return this.translateOnAxis(Vm,e)}translateZ(e){return this.translateOnAxis(Wm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ua.copy(e):Ua.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(ss,Ua,this.up):pi.lookAt(Ua,ss,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),jr.setFromRotationMatrix(pi),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(kT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent($m)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent($m)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const s=this.children[r].getObjectsByProperty(e,n);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,e,OT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,FT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),f=s(e.images),d=s(e.shapes),h=s(e.skeletons),p=s(e.animations),y=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),y.length>0&&(i.nodes=y)}return i.object=r,i;function s(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}yn.DEFAULT_UP=new F(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new F,mi=new F,Mc=new F,gi=new F,Yr=new F,qr=new F,Xm=new F,wc=new F,Tc=new F,Ac=new F;let Ia=!1;class Wn{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zn.subVectors(e,n),r.cross(zn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){zn.subVectors(r,n),mi.subVectors(i,n),Mc.subVectors(e,n);const s=zn.dot(zn),a=zn.dot(mi),l=zn.dot(Mc),u=mi.dot(mi),f=mi.dot(Mc),d=s*u-a*a;if(d===0)return o.set(-2,-1,-1);const h=1/d,p=(u*l-a*f)*h,y=(s*f-a*l)*h;return o.set(1-p-y,y,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi),gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getUV(e,n,i,r,o,s,a,l){return Ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ia=!0),this.getInterpolation(e,n,i,r,o,s,a,l)}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,gi),l.setScalar(0),l.addScaledVector(o,gi.x),l.addScaledVector(s,gi.y),l.addScaledVector(a,gi.z),l}static isFrontFacing(e,n,i,r){return zn.subVectors(i,n),mi.subVectors(e,n),zn.cross(mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),zn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return Ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ia=!0),Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;Yr.subVectors(r,i),qr.subVectors(o,i),wc.subVectors(e,i);const l=Yr.dot(wc),u=qr.dot(wc);if(l<=0&&u<=0)return n.copy(i);Tc.subVectors(e,r);const f=Yr.dot(Tc),d=qr.dot(Tc);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*u;if(h<=0&&l>=0&&f<=0)return s=l/(l-f),n.copy(i).addScaledVector(Yr,s);Ac.subVectors(e,o);const p=Yr.dot(Ac),y=qr.dot(Ac);if(y>=0&&p<=y)return n.copy(o);const v=p*u-l*y;if(v<=0&&u>=0&&y<=0)return a=u/(u-y),n.copy(i).addScaledVector(qr,a);const m=f*y-p*d;if(m<=0&&d-f>=0&&p-y>=0)return Xm.subVectors(o,r),a=(d-f)/(d-f+(p-y)),n.copy(r).addScaledVector(Xm,a);const c=1/(m+v+h);return s=v*c,a=h*c,n.copy(i).addScaledVector(Yr,s).addScaledVector(qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let zT=0;class Mu extends Or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zT++}),this.uuid=ra(),this.name="",this.type="Material",this.blending=Ao,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=D0,this.blendDst=U0,this.blendEquation=ro,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Nf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xT,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fc,this.stencilZFail=fc,this.stencilZPass=fc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ao&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const W0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Na={h:0,s:0,l:0};function Cc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ce){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Fn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Fn.workingColorSpace){return this.r=e,this.g=n,this.b=i,Fn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Fn.workingColorSpace){if(e=ST(e,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Cc(s,o,e+1/3),this.g=Cc(s,o,e),this.b=Cc(s,o,e-1/3)}return Fn.toWorkingColorSpace(this,r),this}setStyle(e,n=Ce){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ce){const i=W0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bo(e.r),this.g=bo(e.g),this.b=bo(e.b),this}copyLinearToSRGB(e){return this.r=mc(e.r),this.g=mc(e.g),this.b=mc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ce){return Fn.fromWorkingColorSpace(Gt.copy(this),e),Math.round(Zt(Gt.r*255,0,255))*65536+Math.round(Zt(Gt.g*255,0,255))*256+Math.round(Zt(Gt.b*255,0,255))}getHexString(e=Ce){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Fn.workingColorSpace){Fn.fromWorkingColorSpace(Gt.copy(this),n);const i=Gt.r,r=Gt.g,o=Gt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const f=(a+s)/2;if(a===s)l=0,u=0;else{const d=s-a;switch(u=f<=.5?d/(s+a):d/(2-s-a),s){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=Fn.workingColorSpace){return Fn.fromWorkingColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Ce){Fn.fromWorkingColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,r=Gt.b;return e!==Ce?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Bn),Bn.h+=e,Bn.s+=n,Bn.l+=i,this.setHSL(Bn.h,Bn.s,Bn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Bn),e.getHSL(Na);const i=hc(Bn.h,Na.h,n),r=hc(Bn.s,Na.s,n),o=hc(Bn.l,Na.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new tt;tt.NAMES=W0;class Ge extends Mu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=I0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new F,Oa=new Fe;class ci{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Im,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Oa.fromBufferAttribute(this,n),Oa.applyMatrix3(e),this.setXY(n,Oa.x,Oa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ca(n,this.array)),n}setX(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ca(n,this.array)),n}setY(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ca(n,this.array)),n}setZ(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ca(n,this.array)),n}setW(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array),o=fn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Im&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class $0 extends ci{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class X0 extends ci{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class wr extends ci{constructor(e,n,i){super(new Float32Array(e),n,i)}}let BT=0;const Tn=new Nt,bc=new yn,Kr=new F,hn=new oa,as=new oa,Ct=new F;class Fr extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=ra(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(z0(e)?X0:$0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Oe().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return bc.lookAt(e),bc.updateMatrix(),this.applyMatrix4(bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new wr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];hn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];as.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(hn.min,as.min),hn.expandByPoint(Ct),Ct.addVectors(hn.max,as.max),hn.expandByPoint(Ct)):(hn.expandByPoint(as.min),hn.expandByPoint(as.max))}hn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Ct.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Ct.fromBufferAttribute(a,u),l&&(Kr.fromBufferAttribute(e,u),Ct.add(Kr)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let A=0;A<a;A++)u[A]=new F,f[A]=new F;const d=new F,h=new F,p=new F,y=new Fe,v=new Fe,m=new Fe,c=new F,g=new F;function _(A,W,Y){d.fromArray(r,A*3),h.fromArray(r,W*3),p.fromArray(r,Y*3),y.fromArray(s,A*2),v.fromArray(s,W*2),m.fromArray(s,Y*2),h.sub(d),p.sub(d),v.sub(y),m.sub(y);const I=1/(v.x*m.y-m.x*v.y);isFinite(I)&&(c.copy(h).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(I),g.copy(p).multiplyScalar(v.x).addScaledVector(h,-m.x).multiplyScalar(I),u[A].add(c),u[W].add(c),u[Y].add(c),f[A].add(g),f[W].add(g),f[Y].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let A=0,W=E.length;A<W;++A){const Y=E[A],I=Y.start,B=Y.count;for(let $=I,ee=I+B;$<ee;$+=3)_(i[$+0],i[$+1],i[$+2])}const S=new F,w=new F,C=new F,D=new F;function x(A){C.fromArray(o,A*3),D.copy(C);const W=u[A];S.copy(W),S.sub(C.multiplyScalar(C.dot(W))).normalize(),w.crossVectors(D,W);const I=w.dot(f[A])<0?-1:1;l[A*4]=S.x,l[A*4+1]=S.y,l[A*4+2]=S.z,l[A*4+3]=I}for(let A=0,W=E.length;A<W;++A){const Y=E[A],I=Y.start,B=Y.count;for(let $=I,ee=I+B;$<ee;$+=3)x(i[$+0]),x(i[$+1]),x(i[$+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ci(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new F,o=new F,s=new F,a=new F,l=new F,u=new F,f=new F,d=new F;if(e)for(let h=0,p=e.count;h<p;h+=3){const y=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,y),o.fromBufferAttribute(n,v),s.fromBufferAttribute(n,m),f.subVectors(s,o),d.subVectors(r,o),f.cross(d),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,m),a.add(f),l.add(f),u.add(f),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),f.subVectors(s,o),d.subVectors(r,o),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,d=a.normalized,h=new u.constructor(l.length*f);let p=0,y=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*f;for(let c=0;c<f;c++)h[y++]=u[p++]}return new ci(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Fr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let f=0,d=u.length;f<d;f++){const h=u[f],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const o=e.morphAttributes;for(const u in o){const f=[],d=o[u];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,f=s.length;u<f;u++){const d=s[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jm=new Nt,ei=new DT,Fa=new Yd,Ym=new F,Zr=new F,Qr=new F,Jr=new F,Rc=new F,ka=new F,za=new Fe,Ba=new Fe,Ha=new Fe,qm=new F,Km=new F,Zm=new F,Ga=new F,Va=new F;class mn extends yn{constructor(e=new Fr,n=new Ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){ka.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const f=a[l],d=o[l];f!==0&&(Rc.fromBufferAttribute(d,e),s?ka.addScaledVector(Rc,f):ka.addScaledVector(Rc.sub(n),f))}n.add(ka)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(o),ei.copy(e.ray).recast(e.near),!(Fa.containsPoint(ei.origin)===!1&&(ei.intersectSphere(Fa,Ym)===null||ei.origin.distanceToSquared(Ym)>(e.far-e.near)**2))&&(jm.copy(o).invert(),ei.copy(e.ray).applyMatrix4(jm),!(i.boundingBox!==null&&ei.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n)))}_computeIntersections(e,n){let i;const r=this.geometry,o=this.material,s=r.index,a=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,h=r.drawRange;if(s!==null)if(Array.isArray(o))for(let p=0,y=d.length;p<y;p++){const v=d[p],m=o[v.materialIndex],c=Math.max(v.start,h.start),g=Math.min(s.count,Math.min(v.start+v.count,h.start+h.count));for(let _=c,E=g;_<E;_+=3){const S=s.getX(_),w=s.getX(_+1),C=s.getX(_+2);i=Wa(this,m,e,ei,l,u,f,S,w,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=v.materialIndex,n.push(i))}}else{const p=Math.max(0,h.start),y=Math.min(s.count,h.start+h.count);for(let v=p,m=y;v<m;v+=3){const c=s.getX(v),g=s.getX(v+1),_=s.getX(v+2);i=Wa(this,o,e,ei,l,u,f,c,g,_),i&&(i.faceIndex=Math.floor(v/3),n.push(i))}}else if(a!==void 0)if(Array.isArray(o))for(let p=0,y=d.length;p<y;p++){const v=d[p],m=o[v.materialIndex],c=Math.max(v.start,h.start),g=Math.min(a.count,Math.min(v.start+v.count,h.start+h.count));for(let _=c,E=g;_<E;_+=3){const S=_,w=_+1,C=_+2;i=Wa(this,m,e,ei,l,u,f,S,w,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=v.materialIndex,n.push(i))}}else{const p=Math.max(0,h.start),y=Math.min(a.count,h.start+h.count);for(let v=p,m=y;v<m;v+=3){const c=v,g=v+1,_=v+2;i=Wa(this,o,e,ei,l,u,f,c,g,_),i&&(i.faceIndex=Math.floor(v/3),n.push(i))}}}}function HT(t,e,n,i,r,o,s,a){let l;if(e.side===an?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===Ji,a),l===null)return null;Va.copy(a),Va.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Va);return u<n.near||u>n.far?null:{distance:u,point:Va.clone(),object:t}}function Wa(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,Zr),t.getVertexPosition(l,Qr),t.getVertexPosition(u,Jr);const f=HT(t,e,n,i,Zr,Qr,Jr,Ga);if(f){r&&(za.fromBufferAttribute(r,a),Ba.fromBufferAttribute(r,l),Ha.fromBufferAttribute(r,u),f.uv=Wn.getInterpolation(Ga,Zr,Qr,Jr,za,Ba,Ha,new Fe)),o&&(za.fromBufferAttribute(o,a),Ba.fromBufferAttribute(o,l),Ha.fromBufferAttribute(o,u),f.uv1=Wn.getInterpolation(Ga,Zr,Qr,Jr,za,Ba,Ha,new Fe),f.uv2=f.uv1),s&&(qm.fromBufferAttribute(s,a),Km.fromBufferAttribute(s,l),Zm.fromBufferAttribute(s,u),f.normal=Wn.getInterpolation(Ga,Zr,Qr,Jr,qm,Km,Zm,new F),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new F,materialIndex:0};Wn.getNormal(Zr,Qr,Jr,d.normal),f.face=d}return f}class si extends Fr{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],f=[],d=[];let h=0,p=0;y("z","y","x",-1,-1,i,n,e,s,o,0),y("z","y","x",1,-1,i,n,-e,s,o,1),y("x","z","y",1,1,e,i,n,r,s,2),y("x","z","y",1,-1,e,i,-n,r,s,3),y("x","y","z",1,-1,e,n,i,r,o,4),y("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new wr(u,3)),this.setAttribute("normal",new wr(f,3)),this.setAttribute("uv",new wr(d,2));function y(v,m,c,g,_,E,S,w,C,D,x){const A=E/C,W=S/D,Y=E/2,I=S/2,B=w/2,$=C+1,ee=D+1;let Z=0,U=0;const H=new F;for(let k=0;k<ee;k++){const ue=k*W-I;for(let J=0;J<$;J++){const G=J*A-Y;H[v]=G*g,H[m]=ue*_,H[c]=B,u.push(H.x,H.y,H.z),H[v]=0,H[m]=0,H[c]=w>0?1:-1,f.push(H.x,H.y,H.z),d.push(J/C),d.push(1-k/D),Z+=1}}for(let k=0;k<D;k++)for(let ue=0;ue<C;ue++){const J=h+ue+$*k,G=h+ue+$*(k+1),K=h+(ue+1)+$*(k+1),oe=h+(ue+1)+$*k;l.push(J,G,oe),l.push(G,K,oe),U+=6}a.addGroup(p,U,x),p+=U,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ho(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Yt(t){const e={};for(let n=0;n<t.length;n++){const i=Ho(t[n]);for(const r in i)e[r]=i[r]}return e}function GT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function j0(t){return t.getRenderTarget()===null?t.outputColorSpace:Kn}const VT={clone:Ho,merge:Yt};var WT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$T=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ur extends Mu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WT,this.fragmentShader=$T,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ho(e.uniforms),this.uniformsGroups=GT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Y0 extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Rn extends Y0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Hf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hf*2*Math.atan(Math.tan(dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(dc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const eo=-90,to=1;class XT extends yn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Rn(eo,to,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const o=new Rn(eo,to,e,n);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(-1,0,0),this.add(o);const s=new Rn(eo,to,e,n);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const a=new Rn(eo,to,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Rn(eo,to,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new Rn(eo,to,e,n);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,o,s,a,l,u]=this.children,f=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=wi,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,o),e.setRenderTarget(i,2),e.render(n,s),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(f),e.toneMapping=d,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class q0 extends ln{constructor(e,n,i,r,o,s,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:ko,super(e,n,i,r,o,s,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jT extends Lr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ms("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Er?Ce:Mr),this.texture=new q0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:bn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new si(5,5,5),o=new Ur({name:"CubemapFromEquirect",uniforms:Ho(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Ki});o.uniforms.tEquirect.value=n;const s=new mn(r,o),a=n.minFilter;return n.minFilter===Ws&&(n.minFilter=bn),new XT(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const Pc=new F,YT=new F,qT=new Oe;class fr{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Pc.subVectors(i,n).cross(YT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Pc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||qT.getNormalMatrix(e),r=this.coplanarPoint(Pc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new Yd,$a=new F;class K0{constructor(e=new fr,n=new fr,i=new fr,r=new fr,o=new fr,s=new fr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],o=i[1],s=i[2],a=i[3],l=i[4],u=i[5],f=i[6],d=i[7],h=i[8],p=i[9],y=i[10],v=i[11],m=i[12],c=i[13],g=i[14],_=i[15];return n[0].setComponents(a-r,d-l,v-h,_-m).normalize(),n[1].setComponents(a+r,d+l,v+h,_+m).normalize(),n[2].setComponents(a+o,d+u,v+p,_+c).normalize(),n[3].setComponents(a-o,d-u,v-p,_-c).normalize(),n[4].setComponents(a-s,d-f,v-y,_-g).normalize(),n[5].setComponents(a+s,d+f,v+y,_+g).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if($a.x=r.normal.x>0?e.max.x:e.min.x,$a.y=r.normal.y>0?e.max.y:e.min.y,$a.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($a)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Z0(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function KT(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const d=u.array,h=u.usage,p=t.createBuffer();t.bindBuffer(f,p),t.bufferData(f,d,h),u.onUploadCallback();let y;if(d instanceof Float32Array)y=t.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=t.SHORT;else if(d instanceof Uint32Array)y=t.UNSIGNED_INT;else if(d instanceof Int32Array)y=t.INT;else if(d instanceof Int8Array)y=t.BYTE;else if(d instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function o(u,f,d){const h=f.array,p=f.updateRange;t.bindBuffer(d,u),p.count===-1?t.bufferSubData(d,0,h):(n?t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),f.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,f)):d.version<u.version&&(o(d.buffer,u,f),d.version=u.version)}return{get:s,remove:a,update:l}}class qd extends Fr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,d=e/a,h=n/l,p=[],y=[],v=[],m=[];for(let c=0;c<f;c++){const g=c*h-s;for(let _=0;_<u;_++){const E=_*d-o;y.push(E,-g,0),v.push(0,0,1),m.push(_/a),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let g=0;g<a;g++){const _=g+u*c,E=g+u*(c+1),S=g+1+u*(c+1),w=g+1+u*c;p.push(_,E,w),p.push(E,S,w)}this.setIndex(p),this.setAttribute("position",new wr(y,3)),this.setAttribute("normal",new wr(v,3)),this.setAttribute("uv",new wr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qd(e.width,e.height,e.widthSegments,e.heightSegments)}}var ZT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,eA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iA="vec3 transformed = vec3( position );",rA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,aA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,uA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,gA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_A=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vA=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MA="gl_FragColor = linearToOutputTexel( gl_FragColor );",wA=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,AA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,CA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,PA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NA=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,OA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,BA=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,HA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$A=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,XA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jA=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,YA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,KA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,JA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,eC=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,tC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sC=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,lC=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,uC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,cC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,fC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,_C=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,EC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,RC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,PC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,LC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,DC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,IC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,OC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,BC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,HC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,GC=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VC=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WC=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$C=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,YC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,KC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,QC=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,JC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,eb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ib=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ob=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sb=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ab=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ub=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,db=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_b=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Eb=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,wb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Pe={alphamap_fragment:ZT,alphamap_pars_fragment:QT,alphatest_fragment:JT,alphatest_pars_fragment:eA,aomap_fragment:tA,aomap_pars_fragment:nA,begin_vertex:iA,beginnormal_vertex:rA,bsdfs:oA,iridescence_fragment:sA,bumpmap_pars_fragment:aA,clipping_planes_fragment:lA,clipping_planes_pars_fragment:uA,clipping_planes_pars_vertex:cA,clipping_planes_vertex:fA,color_fragment:dA,color_pars_fragment:hA,color_pars_vertex:pA,color_vertex:mA,common:gA,cube_uv_reflection_fragment:_A,defaultnormal_vertex:vA,displacementmap_pars_vertex:yA,displacementmap_vertex:xA,emissivemap_fragment:SA,emissivemap_pars_fragment:EA,encodings_fragment:MA,encodings_pars_fragment:wA,envmap_fragment:TA,envmap_common_pars_fragment:AA,envmap_pars_fragment:CA,envmap_pars_vertex:bA,envmap_physical_pars_fragment:BA,envmap_vertex:RA,fog_vertex:PA,fog_pars_vertex:LA,fog_fragment:DA,fog_pars_fragment:UA,gradientmap_pars_fragment:IA,lightmap_fragment:NA,lightmap_pars_fragment:OA,lights_lambert_fragment:FA,lights_lambert_pars_fragment:kA,lights_pars_begin:zA,lights_toon_fragment:HA,lights_toon_pars_fragment:GA,lights_phong_fragment:VA,lights_phong_pars_fragment:WA,lights_physical_fragment:$A,lights_physical_pars_fragment:XA,lights_fragment_begin:jA,lights_fragment_maps:YA,lights_fragment_end:qA,logdepthbuf_fragment:KA,logdepthbuf_pars_fragment:ZA,logdepthbuf_pars_vertex:QA,logdepthbuf_vertex:JA,map_fragment:eC,map_pars_fragment:tC,map_particle_fragment:nC,map_particle_pars_fragment:iC,metalnessmap_fragment:rC,metalnessmap_pars_fragment:oC,morphcolor_vertex:sC,morphnormal_vertex:aC,morphtarget_pars_vertex:lC,morphtarget_vertex:uC,normal_fragment_begin:cC,normal_fragment_maps:fC,normal_pars_fragment:dC,normal_pars_vertex:hC,normal_vertex:pC,normalmap_pars_fragment:mC,clearcoat_normal_fragment_begin:gC,clearcoat_normal_fragment_maps:_C,clearcoat_pars_fragment:vC,iridescence_pars_fragment:yC,output_fragment:xC,packing:SC,premultiplied_alpha_fragment:EC,project_vertex:MC,dithering_fragment:wC,dithering_pars_fragment:TC,roughnessmap_fragment:AC,roughnessmap_pars_fragment:CC,shadowmap_pars_fragment:bC,shadowmap_pars_vertex:RC,shadowmap_vertex:PC,shadowmask_pars_fragment:LC,skinbase_vertex:DC,skinning_pars_vertex:UC,skinning_vertex:IC,skinnormal_vertex:NC,specularmap_fragment:OC,specularmap_pars_fragment:FC,tonemapping_fragment:kC,tonemapping_pars_fragment:zC,transmission_fragment:BC,transmission_pars_fragment:HC,uv_pars_fragment:GC,uv_pars_vertex:VC,uv_vertex:WC,worldpos_vertex:$C,background_vert:XC,background_frag:jC,backgroundCube_vert:YC,backgroundCube_frag:qC,cube_vert:KC,cube_frag:ZC,depth_vert:QC,depth_frag:JC,distanceRGBA_vert:eb,distanceRGBA_frag:tb,equirect_vert:nb,equirect_frag:ib,linedashed_vert:rb,linedashed_frag:ob,meshbasic_vert:sb,meshbasic_frag:ab,meshlambert_vert:lb,meshlambert_frag:ub,meshmatcap_vert:cb,meshmatcap_frag:fb,meshnormal_vert:db,meshnormal_frag:hb,meshphong_vert:pb,meshphong_frag:mb,meshphysical_vert:gb,meshphysical_frag:_b,meshtoon_vert:vb,meshtoon_frag:yb,points_vert:xb,points_frag:Sb,shadow_vert:Eb,shadow_frag:Mb,sprite_vert:wb,sprite_frag:Tb},le={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaTest:{value:0}}},ri={basic:{uniforms:Yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:Yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new tt(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:Yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:Yt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:Yt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new tt(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:Yt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:Yt([le.points,le.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:Yt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:Yt([le.common,le.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:Yt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:Yt([le.sprite,le.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:Yt([le.common,le.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:Yt([le.lights,le.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};ri.physical={uniforms:Yt([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const Xa={r:0,b:0,g:0};function Ab(t,e,n,i,r,o,s){const a=new tt(0);let l=o===!0?0:1,u,f,d=null,h=0,p=null;function y(m,c){let g=!1,_=c.isScene===!0?c.background:null;switch(_&&_.isTexture&&(_=(c.backgroundBlurriness>0?n:e).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),g=!0),t.xr.getEnvironmentBlendMode()){case"opaque":g=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,s),g=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,s),g=!0;break}(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Su)?(f===void 0&&(f=new mn(new si(1,1,1),new Ur({name:"BackgroundCubeMaterial",uniforms:Ho(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(w,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=_,f.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,f.material.toneMapped=_.colorSpace!==Ce,(d!==_||h!==_.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,d=_,h=_.version,p=t.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new mn(new qd(2,2),new Ur({name:"BackgroundMaterial",uniforms:Ho(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=_.colorSpace!==Ce,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||h!==_.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=_,h=_.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function v(m,c){m.getRGB(Xa,j0(t)),i.buffers.color.setClear(Xa.r,Xa.g,Xa.b,c,s)}return{getClearColor:function(){return a},setClearColor:function(m,c=1){a.set(m),l=c,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:y}}function Cb(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=m(null);let u=l,f=!1;function d(B,$,ee,Z,U){let H=!1;if(s){const k=v(Z,ee,$);u!==k&&(u=k,p(u.object)),H=c(B,Z,ee,U),H&&g(B,Z,ee,U)}else{const k=$.wireframe===!0;(u.geometry!==Z.id||u.program!==ee.id||u.wireframe!==k)&&(u.geometry=Z.id,u.program=ee.id,u.wireframe=k,H=!0)}U!==null&&n.update(U,t.ELEMENT_ARRAY_BUFFER),(H||f)&&(f=!1,D(B,$,ee,Z),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(U).buffer))}function h(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function p(B){return i.isWebGL2?t.bindVertexArray(B):o.bindVertexArrayOES(B)}function y(B){return i.isWebGL2?t.deleteVertexArray(B):o.deleteVertexArrayOES(B)}function v(B,$,ee){const Z=ee.wireframe===!0;let U=a[B.id];U===void 0&&(U={},a[B.id]=U);let H=U[$.id];H===void 0&&(H={},U[$.id]=H);let k=H[Z];return k===void 0&&(k=m(h()),H[Z]=k),k}function m(B){const $=[],ee=[],Z=[];for(let U=0;U<r;U++)$[U]=0,ee[U]=0,Z[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ee,attributeDivisors:Z,object:B,attributes:{},index:null}}function c(B,$,ee,Z){const U=u.attributes,H=$.attributes;let k=0;const ue=ee.getAttributes();for(const J in ue)if(ue[J].location>=0){const K=U[J];let oe=H[J];if(oe===void 0&&(J==="instanceMatrix"&&B.instanceMatrix&&(oe=B.instanceMatrix),J==="instanceColor"&&B.instanceColor&&(oe=B.instanceColor)),K===void 0||K.attribute!==oe||oe&&K.data!==oe.data)return!0;k++}return u.attributesNum!==k||u.index!==Z}function g(B,$,ee,Z){const U={},H=$.attributes;let k=0;const ue=ee.getAttributes();for(const J in ue)if(ue[J].location>=0){let K=H[J];K===void 0&&(J==="instanceMatrix"&&B.instanceMatrix&&(K=B.instanceMatrix),J==="instanceColor"&&B.instanceColor&&(K=B.instanceColor));const oe={};oe.attribute=K,K&&K.data&&(oe.data=K.data),U[J]=oe,k++}u.attributes=U,u.attributesNum=k,u.index=Z}function _(){const B=u.newAttributes;for(let $=0,ee=B.length;$<ee;$++)B[$]=0}function E(B){S(B,0)}function S(B,$){const ee=u.newAttributes,Z=u.enabledAttributes,U=u.attributeDivisors;ee[B]=1,Z[B]===0&&(t.enableVertexAttribArray(B),Z[B]=1),U[B]!==$&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,$),U[B]=$)}function w(){const B=u.newAttributes,$=u.enabledAttributes;for(let ee=0,Z=$.length;ee<Z;ee++)$[ee]!==B[ee]&&(t.disableVertexAttribArray(ee),$[ee]=0)}function C(B,$,ee,Z,U,H){i.isWebGL2===!0&&(ee===t.INT||ee===t.UNSIGNED_INT)?t.vertexAttribIPointer(B,$,ee,U,H):t.vertexAttribPointer(B,$,ee,Z,U,H)}function D(B,$,ee,Z){if(i.isWebGL2===!1&&(B.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const U=Z.attributes,H=ee.getAttributes(),k=$.defaultAttributeValues;for(const ue in H){const J=H[ue];if(J.location>=0){let G=U[ue];if(G===void 0&&(ue==="instanceMatrix"&&B.instanceMatrix&&(G=B.instanceMatrix),ue==="instanceColor"&&B.instanceColor&&(G=B.instanceColor)),G!==void 0){const K=G.normalized,oe=G.itemSize,se=n.get(G);if(se===void 0)continue;const P=se.buffer,we=se.type,Ee=se.bytesPerElement;if(G.isInterleavedBufferAttribute){const ae=G.data,Se=ae.stride,Ve=G.offset;if(ae.isInstancedInterleavedBuffer){for(let ye=0;ye<J.locationSize;ye++)S(J.location+ye,ae.meshPerAttribute);B.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ye=0;ye<J.locationSize;ye++)E(J.location+ye);t.bindBuffer(t.ARRAY_BUFFER,P);for(let ye=0;ye<J.locationSize;ye++)C(J.location+ye,oe/J.locationSize,we,K,Se*Ee,(Ve+oe/J.locationSize*ye)*Ee)}else{if(G.isInstancedBufferAttribute){for(let ae=0;ae<J.locationSize;ae++)S(J.location+ae,G.meshPerAttribute);B.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ae=0;ae<J.locationSize;ae++)E(J.location+ae);t.bindBuffer(t.ARRAY_BUFFER,P);for(let ae=0;ae<J.locationSize;ae++)C(J.location+ae,oe/J.locationSize,we,K,oe*Ee,oe/J.locationSize*ae*Ee)}}else if(k!==void 0){const K=k[ue];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(J.location,K);break;case 3:t.vertexAttrib3fv(J.location,K);break;case 4:t.vertexAttrib4fv(J.location,K);break;default:t.vertexAttrib1fv(J.location,K)}}}}w()}function x(){Y();for(const B in a){const $=a[B];for(const ee in $){const Z=$[ee];for(const U in Z)y(Z[U].object),delete Z[U];delete $[ee]}delete a[B]}}function A(B){if(a[B.id]===void 0)return;const $=a[B.id];for(const ee in $){const Z=$[ee];for(const U in Z)y(Z[U].object),delete Z[U];delete $[ee]}delete a[B.id]}function W(B){for(const $ in a){const ee=a[$];if(ee[B.id]===void 0)continue;const Z=ee[B.id];for(const U in Z)y(Z[U].object),delete Z[U];delete ee[B.id]}}function Y(){I(),f=!0,u!==l&&(u=l,p(u.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:I,dispose:x,releaseStatesOfGeometry:A,releaseStatesOfProgram:W,initAttributes:_,enableAttribute:E,disableUnusedAttributes:w}}function bb(t,e,n,i){const r=i.isWebGL2;let o;function s(u){o=u}function a(u,f){t.drawArrays(o,u,f),n.update(f,o,1)}function l(u,f,d){if(d===0)return;let h,p;if(r)h=t,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](o,u,f,d),n.update(f,o,d)}this.setMode=s,this.render=a,this.renderInstances=l}function Rb(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=s||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,E=s||e.has("OES_texture_float"),S=_&&E,w=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:m,maxVaryings:c,maxFragmentUniforms:g,vertexTextures:_,floatFragmentTextures:E,floatVertexTextures:S,maxSamples:w}}function Pb(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new fr,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){o=!0,f(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){const y=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,c=t.get(d);if(!r||y===null||y.length===0||o&&!m)o?f(null):u();else{const g=o?0:i,_=g*4;let E=c.clippingState||null;l.value=E,E=f(y,h,_,p);for(let S=0;S!==_;++S)E[S]=n[S];c.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,p,y){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,y!==!0||m===null){const c=p+v*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<c)&&(m=new Float32Array(c));for(let _=0,E=p;_!==v;++_,E+=4)s.copy(d[_]).applyMatrix4(g,a),s.normal.toArray(m,E),m[E+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Lb(t){let e=new WeakMap;function n(s,a){return a===Of?s.mapping=ko:a===Ff&&(s.mapping=zo),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===Of||a===Ff)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new jT(l.height/2);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Db extends Y0{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const vo=4,Qm=[.125,.215,.35,.446,.526,.582],hr=20,Lc=new Db,Jm=new tt;let Dc=null;const dr=(1+Math.sqrt(5))/2,no=1/dr,eg=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,dr,no),new F(0,dr,-no),new F(no,0,dr),new F(-no,0,dr),new F(dr,no,0),new F(-dr,no,0)];class tg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Dc=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ig(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dc),e.scissorTest=!1,ja(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ko||e.mapping===zo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dc=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:$s,format:Xn,colorSpace:Kn,depthBuffer:!1},r=ng(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ng(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ub(o)),this._blurMaterial=Ib(o,e,n)}return r}_compileMaterial(e){const n=new mn(this._lodPlanes[0],e);this._renderer.compile(n,Lc)}_sceneToCubeUV(e,n,i,r){const a=new Rn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Jm),f.toneMapping=wi,f.autoClear=!1;const p=new Ge({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),y=new mn(new si,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Jm),v=!0);for(let c=0;c<6;c++){const g=c%3;g===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):g===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const _=this._cubeSize;ja(r,g*_,c>2?_:0,_,_),f.setRenderTarget(r),v&&f.render(y,a),f.render(e,a)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ko||e.mapping===zo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ig());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new mn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;ja(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Lc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=eg[(r-1)%eg.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new mn(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,y=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*hr-1),v=o/y,m=isFinite(o)?1+Math.floor(f*v):hr;m>hr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hr}`);const c=[];let g=0;for(let C=0;C<hr;++C){const D=C/v,x=Math.exp(-D*D/2);c.push(x),C===0?g+=x:C<m&&(g+=2*x)}for(let C=0;C<c.length;C++)c[C]=c[C]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=c,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=y,h.mipInt.value=_-i;const E=this._sizeLods[r],S=3*E*(r>_-vo?r-_+vo:0),w=4*(this._cubeSize-E);ja(n,S,w,3*E,2*E),l.setRenderTarget(n),l.render(d,Lc)}}function Ub(t){const e=[],n=[],i=[];let r=t;const o=t-vo+1+Qm.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-vo?l=Qm[s-t+vo-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,d=1+u,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,y=6,v=3,m=2,c=1,g=new Float32Array(v*y*p),_=new Float32Array(m*y*p),E=new Float32Array(c*y*p);for(let w=0;w<p;w++){const C=w%3*2/3-1,D=w>2?0:-1,x=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];g.set(x,v*y*w),_.set(h,m*y*w);const A=[w,w,w,w,w,w];E.set(A,c*y*w)}const S=new Fr;S.setAttribute("position",new ci(g,v)),S.setAttribute("uv",new ci(_,m)),S.setAttribute("faceIndex",new ci(E,c)),e.push(S),r>vo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function ng(t,e,n){const i=new Lr(t,e,n);return i.texture.mapping=Su,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ja(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Ib(t,e,n){const i=new Float32Array(hr),r=new F(0,1,0);return new Ur({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function ig(){return new Ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function rg(){return new Ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Kd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nb(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Of||l===Ff,f=l===ko||l===zo;if(u||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new tg(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||f&&d&&r(d)){n===null&&(n=new tg(t));const h=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",o),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function Ob(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Fb(t,e,n,i){const r={},o=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);h.removeEventListener("dispose",s),delete r[h.id];const p=o.get(h);p&&(e.remove(p),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const y in h)e.update(h[y],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const y in p){const v=p[y];for(let m=0,c=v.length;m<c;m++)e.update(v[m],t.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,y=d.attributes.position;let v=0;if(p!==null){const g=p.array;v=p.version;for(let _=0,E=g.length;_<E;_+=3){const S=g[_+0],w=g[_+1],C=g[_+2];h.push(S,w,w,C,C,S)}}else{const g=y.array;v=y.version;for(let _=0,E=g.length/3-1;_<E;_+=3){const S=_+0,w=_+1,C=_+2;h.push(S,w,w,C,C,S)}}const m=new(z0(h)?X0:$0)(h,1);m.version=v;const c=o.get(d);c&&e.remove(c),o.set(d,m)}function f(d){const h=o.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function kb(t,e,n,i){const r=i.isWebGL2;let o;function s(h){o=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function f(h,p){t.drawElements(o,p,a,h*l),n.update(p,o,1)}function d(h,p,y){if(y===0)return;let v,m;if(r)v=t,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](o,p,a,h*l,y),n.update(p,o,y)}this.setMode=s,this.setIndex=u,this.render=f,this.renderInstances=d}function zb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Bb(t,e){return t[0]-e[0]}function Hb(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Gb(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new Ut,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,f,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=y!==void 0?y.length:0;let m=o.get(f);if(m===void 0||m.count!==v){let $=function(){I.dispose(),o.delete(f),f.removeEventListener("dispose",$)};var p=$;m!==void 0&&m.texture.dispose();const _=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,w=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let x=0;_===!0&&(x=1),E===!0&&(x=2),S===!0&&(x=3);let A=f.attributes.position.count*x,W=1;A>e.maxTextureSize&&(W=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const Y=new Float32Array(A*W*4*v),I=new G0(Y,A,W,v);I.type=vr,I.needsUpdate=!0;const B=x*4;for(let ee=0;ee<v;ee++){const Z=w[ee],U=C[ee],H=D[ee],k=A*W*4*ee;for(let ue=0;ue<Z.count;ue++){const J=ue*B;_===!0&&(s.fromBufferAttribute(Z,ue),Y[k+J+0]=s.x,Y[k+J+1]=s.y,Y[k+J+2]=s.z,Y[k+J+3]=0),E===!0&&(s.fromBufferAttribute(U,ue),Y[k+J+4]=s.x,Y[k+J+5]=s.y,Y[k+J+6]=s.z,Y[k+J+7]=0),S===!0&&(s.fromBufferAttribute(H,ue),Y[k+J+8]=s.x,Y[k+J+9]=s.y,Y[k+J+10]=s.z,Y[k+J+11]=H.itemSize===4?s.w:1)}}m={count:v,texture:I,size:new Fe(A,W)},o.set(f,m),f.addEventListener("dispose",$)}let c=0;for(let _=0;_<h.length;_++)c+=h[_];const g=f.morphTargetsRelative?1:1-c;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const y=h===void 0?0:h.length;let v=i[f.id];if(v===void 0||v.length!==y){v=[];for(let E=0;E<y;E++)v[E]=[E,0];i[f.id]=v}for(let E=0;E<y;E++){const S=v[E];S[0]=E,S[1]=h[E]}v.sort(Hb);for(let E=0;E<8;E++)E<y&&v[E][1]?(a[E][0]=v[E][0],a[E][1]=v[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(Bb);const m=f.morphAttributes.position,c=f.morphAttributes.normal;let g=0;for(let E=0;E<8;E++){const S=a[E],w=S[0],C=S[1];w!==Number.MAX_SAFE_INTEGER&&C?(m&&f.getAttribute("morphTarget"+E)!==m[w]&&f.setAttribute("morphTarget"+E,m[w]),c&&f.getAttribute("morphNormal"+E)!==c[w]&&f.setAttribute("morphNormal"+E,c[w]),r[E]=C,g+=C):(m&&f.hasAttribute("morphTarget"+E)===!0&&f.deleteAttribute("morphTarget"+E),c&&f.hasAttribute("morphNormal"+E)===!0&&f.deleteAttribute("morphNormal"+E),r[E]=0)}const _=f.morphTargetsRelative?1:1-g;d.getUniforms().setValue(t,"morphTargetBaseInfluence",_),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Vb(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,f=l.geometry,d=e.get(l,f);return r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER)),d}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}const Q0=new ln,J0=new G0,ey=new PT,ty=new q0,og=[],sg=[],ag=new Float32Array(16),lg=new Float32Array(9),ug=new Float32Array(4);function Xo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=og[r];if(o===void 0&&(o=new Float32Array(r),og[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function wu(t,e){let n=sg[e];n===void 0&&(n=new Int32Array(e),sg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Wb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function $b(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),Tt(n,e)}}function Xb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),Tt(n,e)}}function jb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),Tt(n,e)}}function Yb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;ug.set(i),t.uniformMatrix2fv(this.addr,!1,ug),Tt(n,i)}}function qb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;lg.set(i),t.uniformMatrix3fv(this.addr,!1,lg),Tt(n,i)}}function Kb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;ag.set(i),t.uniformMatrix4fv(this.addr,!1,ag),Tt(n,i)}}function Zb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Qb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),Tt(n,e)}}function Jb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),Tt(n,e)}}function eR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),Tt(n,e)}}function tR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function nR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),Tt(n,e)}}function iR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),Tt(n,e)}}function rR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),Tt(n,e)}}function oR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Q0,r)}function sR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||ey,r)}function aR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ty,r)}function lR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||J0,r)}function uR(t){switch(t){case 5126:return Wb;case 35664:return $b;case 35665:return Xb;case 35666:return jb;case 35674:return Yb;case 35675:return qb;case 35676:return Kb;case 5124:case 35670:return Zb;case 35667:case 35671:return Qb;case 35668:case 35672:return Jb;case 35669:case 35673:return eR;case 5125:return tR;case 36294:return nR;case 36295:return iR;case 36296:return rR;case 35678:case 36198:case 36298:case 36306:case 35682:return oR;case 35679:case 36299:case 36307:return sR;case 35680:case 36300:case 36308:case 36293:return aR;case 36289:case 36303:case 36311:case 36292:return lR}}function cR(t,e){t.uniform1fv(this.addr,e)}function fR(t,e){const n=Xo(e,this.size,2);t.uniform2fv(this.addr,n)}function dR(t,e){const n=Xo(e,this.size,3);t.uniform3fv(this.addr,n)}function hR(t,e){const n=Xo(e,this.size,4);t.uniform4fv(this.addr,n)}function pR(t,e){const n=Xo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function mR(t,e){const n=Xo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function gR(t,e){const n=Xo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function _R(t,e){t.uniform1iv(this.addr,e)}function vR(t,e){t.uniform2iv(this.addr,e)}function yR(t,e){t.uniform3iv(this.addr,e)}function xR(t,e){t.uniform4iv(this.addr,e)}function SR(t,e){t.uniform1uiv(this.addr,e)}function ER(t,e){t.uniform2uiv(this.addr,e)}function MR(t,e){t.uniform3uiv(this.addr,e)}function wR(t,e){t.uniform4uiv(this.addr,e)}function TR(t,e,n){const i=this.cache,r=e.length,o=wu(n,r);wt(i,o)||(t.uniform1iv(this.addr,o),Tt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||Q0,o[s])}function AR(t,e,n){const i=this.cache,r=e.length,o=wu(n,r);wt(i,o)||(t.uniform1iv(this.addr,o),Tt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||ey,o[s])}function CR(t,e,n){const i=this.cache,r=e.length,o=wu(n,r);wt(i,o)||(t.uniform1iv(this.addr,o),Tt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||ty,o[s])}function bR(t,e,n){const i=this.cache,r=e.length,o=wu(n,r);wt(i,o)||(t.uniform1iv(this.addr,o),Tt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||J0,o[s])}function RR(t){switch(t){case 5126:return cR;case 35664:return fR;case 35665:return dR;case 35666:return hR;case 35674:return pR;case 35675:return mR;case 35676:return gR;case 5124:case 35670:return _R;case 35667:case 35671:return vR;case 35668:case 35672:return yR;case 35669:case 35673:return xR;case 5125:return SR;case 36294:return ER;case 36295:return MR;case 36296:return wR;case 35678:case 36198:case 36298:case 36306:case 35682:return TR;case 35679:case 36299:case 36307:return AR;case 35680:case 36300:case 36308:case 36293:return CR;case 36289:case 36303:case 36311:case 36292:return bR}}class PR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=uR(n.type)}}class LR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=RR(n.type)}}class DR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Uc=/(\w+)(\])?(\[|\.)?/g;function cg(t,e){t.seq.push(e),t.map[e.id]=e}function UR(t,e,n){const i=t.name,r=i.length;for(Uc.lastIndex=0;;){const o=Uc.exec(i),s=Uc.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){cg(n,u===void 0?new PR(a,t,e):new LR(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new DR(a),cg(n,d)),n=d}}}class cl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);UR(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function fg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let IR=0;function NR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function OR(t){switch(t){case Kn:return["Linear","( value )"];case Ce:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function dg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+NR(t.getShaderSource(e),s)}else return r}function FR(t,e){const n=OR(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function kR(t,e){let n;switch(e){case qw:n="Linear";break;case Kw:n="Reinhard";break;case Zw:n="OptimizedCineon";break;case Qw:n="ACESFilmic";break;case Jw:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function zR(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ds).join(`
`)}function BR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function HR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function ds(t){return t!==""}function hg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gf(t){return t.replace(GR,VR)}function VR(t,e){const n=Pe[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Gf(n)}const WR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mg(t){return t.replace(WR,$R)}function $R(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function gg(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function XR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===L0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Cw?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function jR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ko:case zo:e="ENVMAP_TYPE_CUBE";break;case Su:e="ENVMAP_TYPE_CUBE_UV";break}return e}function YR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case zo:e="ENVMAP_MODE_REFRACTION";break}return e}function qR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case I0:e="ENVMAP_BLENDING_MULTIPLY";break;case jw:e="ENVMAP_BLENDING_MIX";break;case Yw:e="ENVMAP_BLENDING_ADD";break}return e}function KR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ZR(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=XR(n),u=jR(n),f=YR(n),d=qR(n),h=KR(n),p=n.isWebGL2?"":zR(n),y=BR(o),v=r.createProgram();let m,c,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=[y].filter(ds).join(`
`),m.length>0&&(m+=`
`),c=[p,y].filter(ds).join(`
`),c.length>0&&(c+=`
`)):(m=[gg(n),"#define SHADER_NAME "+n.shaderName,y,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),c=[p,gg(n),"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wi?"#define TONE_MAPPING":"",n.toneMapping!==wi?Pe.tonemapping_pars_fragment:"",n.toneMapping!==wi?kR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Pe.encodings_pars_fragment,FR("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ds).join(`
`)),s=Gf(s),s=hg(s,n),s=pg(s,n),a=Gf(a),a=hg(a,n),a=pg(a,n),s=mg(s),a=mg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",n.glslVersion===Nm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Nm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const _=g+m+s,E=g+c+a,S=fg(r,r.VERTEX_SHADER,_),w=fg(r,r.FRAGMENT_SHADER,E);if(r.attachShader(v,S),r.attachShader(v,w),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),t.debug.checkShaderErrors){const x=r.getProgramInfoLog(v).trim(),A=r.getShaderInfoLog(S).trim(),W=r.getShaderInfoLog(w).trim();let Y=!0,I=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,S,w);else{const B=dg(r,S,"vertex"),$=dg(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+B+`
`+$)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(A===""||W==="")&&(I=!1);I&&(this.diagnostics={runnable:Y,programLog:x,vertexShader:{log:A,prefix:m},fragmentShader:{log:W,prefix:c}})}r.deleteShader(S),r.deleteShader(w);let C;this.getUniforms=function(){return C===void 0&&(C=new cl(r,v)),C};let D;return this.getAttributes=function(){return D===void 0&&(D=HR(r,v)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.name=n.shaderName,this.id=IR++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=w,this}let QR=0;class JR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new e2(e),n.set(e,i)),i}}class e2{constructor(e){this.id=QR++,this.code=e,this.usedTimes=0}}function t2(t,e,n,i,r,o,s){const a=new V0,l=new JR,u=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return x===1?"uv1":x===2?"uv2":x===3?"uv3":"uv"}function m(x,A,W,Y,I){const B=Y.fog,$=I.geometry,ee=x.isMeshStandardMaterial?Y.environment:null,Z=(x.isMeshStandardMaterial?n:e).get(x.envMap||ee),U=Z&&Z.mapping===Su?Z.image.height:null,H=y[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const k=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ue=k!==void 0?k.length:0;let J=0;$.morphAttributes.position!==void 0&&(J=1),$.morphAttributes.normal!==void 0&&(J=2),$.morphAttributes.color!==void 0&&(J=3);let G,K,oe,se;if(H){const Ke=ri[H];G=Ke.vertexShader,K=Ke.fragmentShader}else G=x.vertexShader,K=x.fragmentShader,l.update(x),oe=l.getVertexShaderID(x),se=l.getFragmentShaderID(x);const P=t.getRenderTarget(),we=I.isInstancedMesh===!0,Ee=!!x.map,ae=!!x.matcap,Se=!!Z,Ve=!!x.aoMap,ye=!!x.lightMap,be=!!x.bumpMap,lt=!!x.normalMap,rt=!!x.displacementMap,mt=!!x.emissiveMap,ct=!!x.metalnessMap,He=!!x.roughnessMap,Qe=x.clearcoat>0,Ft=x.iridescence>0,b=x.sheen>0,M=x.transmission>0,V=Qe&&!!x.clearcoatMap,te=Qe&&!!x.clearcoatNormalMap,re=Qe&&!!x.clearcoatRoughnessMap,ce=Ft&&!!x.iridescenceMap,R=Ft&&!!x.iridescenceThicknessMap,Q=b&&!!x.sheenColorMap,z=b&&!!x.sheenRoughnessMap,fe=!!x.specularMap,me=!!x.specularColorMap,_e=!!x.specularIntensityMap,de=M&&!!x.transmissionMap,ge=M&&!!x.thicknessMap,Te=!!x.gradientMap,Le=!!x.alphaMap,ft=x.alphaTest>0,L=!!x.extensions,X=!!$.attributes.uv1,ne=!!$.attributes.uv2,he=!!$.attributes.uv3;return{isWebGL2:f,shaderID:H,shaderName:x.type,vertexShader:G,fragmentShader:K,defines:x.defines,customVertexShaderID:oe,customFragmentShaderID:se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:we,instancingColor:we&&I.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:P===null?t.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Kn,map:Ee,matcap:ae,envMap:Se,envMapMode:Se&&Z.mapping,envMapCubeUVHeight:U,aoMap:Ve,lightMap:ye,bumpMap:be,normalMap:lt,displacementMap:h&&rt,emissiveMap:mt,normalMapObjectSpace:lt&&x.normalMapType===yT,normalMapTangentSpace:lt&&x.normalMapType===vT,metalnessMap:ct,roughnessMap:He,clearcoat:Qe,clearcoatMap:V,clearcoatNormalMap:te,clearcoatRoughnessMap:re,iridescence:Ft,iridescenceMap:ce,iridescenceThicknessMap:R,sheen:b,sheenColorMap:Q,sheenRoughnessMap:z,specularMap:fe,specularColorMap:me,specularIntensityMap:_e,transmission:M,transmissionMap:de,thicknessMap:ge,gradientMap:Te,opaque:x.transparent===!1&&x.blending===Ao,alphaMap:Le,alphaTest:ft,combine:x.combine,mapUv:Ee&&v(x.map.channel),aoMapUv:Ve&&v(x.aoMap.channel),lightMapUv:ye&&v(x.lightMap.channel),bumpMapUv:be&&v(x.bumpMap.channel),normalMapUv:lt&&v(x.normalMap.channel),displacementMapUv:rt&&v(x.displacementMap.channel),emissiveMapUv:mt&&v(x.emissiveMap.channel),metalnessMapUv:ct&&v(x.metalnessMap.channel),roughnessMapUv:He&&v(x.roughnessMap.channel),clearcoatMapUv:V&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:te&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:R&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:z&&v(x.sheenRoughnessMap.channel),specularMapUv:fe&&v(x.specularMap.channel),specularColorMapUv:me&&v(x.specularColorMap.channel),specularIntensityMapUv:_e&&v(x.specularIntensityMap.channel),transmissionMapUv:de&&v(x.transmissionMap.channel),thicknessMapUv:ge&&v(x.thicknessMap.channel),alphaMapUv:Le&&v(x.alphaMap.channel),vertexTangents:lt&&!!$.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUv1s:X,vertexUv2s:ne,vertexUv3s:he,pointsUvs:I.isPoints===!0&&!!$.attributes.uv&&(Ee||Le),fog:!!B,useFog:x.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:I.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:J,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&W.length>0,shadowMapType:t.shadowMap.type,toneMapping:x.toneMapped?t.toneMapping:wi,useLegacyLights:t.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===xi,flipSided:x.side===an,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:L&&x.extensions.derivatives===!0,extensionFragDepth:L&&x.extensions.fragDepth===!0,extensionDrawBuffers:L&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:L&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function c(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const W in x.defines)A.push(W),A.push(x.defines[W]);return x.isRawShaderMaterial===!1&&(g(A,x),_(A,x),A.push(t.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function g(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function _(x,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),x.push(a.mask)}function E(x){const A=y[x.type];let W;if(A){const Y=ri[A];W=VT.clone(Y.uniforms)}else W=x.uniforms;return W}function S(x,A){let W;for(let Y=0,I=u.length;Y<I;Y++){const B=u[Y];if(B.cacheKey===A){W=B,++W.usedTimes;break}}return W===void 0&&(W=new ZR(t,A,x,o),u.push(W)),W}function w(x){if(--x.usedTimes===0){const A=u.indexOf(x);u[A]=u[u.length-1],u.pop(),x.destroy()}}function C(x){l.remove(x)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:E,acquireProgram:S,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:D}}function n2(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function i2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function _g(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function vg(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(d,h,p,y,v,m){let c=t[e];return c===void 0?(c={id:d.id,object:d,geometry:h,material:p,groupOrder:y,renderOrder:d.renderOrder,z:v,group:m},t[e]=c):(c.id=d.id,c.object=d,c.geometry=h,c.material=p,c.groupOrder=y,c.renderOrder=d.renderOrder,c.z=v,c.group=m),e++,c}function a(d,h,p,y,v,m){const c=s(d,h,p,y,v,m);p.transmission>0?i.push(c):p.transparent===!0?r.push(c):n.push(c)}function l(d,h,p,y,v,m){const c=s(d,h,p,y,v,m);p.transmission>0?i.unshift(c):p.transparent===!0?r.unshift(c):n.unshift(c)}function u(d,h){n.length>1&&n.sort(d||i2),i.length>1&&i.sort(h||_g),r.length>1&&r.sort(h||_g)}function f(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:f,sort:u}}function r2(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new vg,t.set(i,[s])):r>=o.length?(s=new vg,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function o2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new tt};break;case"SpotLight":n={position:new F,direction:new F,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function s2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let a2=0;function l2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function u2(t,e){const n=new o2,i=s2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)r.probe.push(new F);const o=new F,s=new Nt,a=new Nt;function l(f,d){let h=0,p=0,y=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let v=0,m=0,c=0,g=0,_=0,E=0,S=0,w=0,C=0,D=0;f.sort(l2);const x=d===!0?Math.PI:1;for(let W=0,Y=f.length;W<Y;W++){const I=f[W],B=I.color,$=I.intensity,ee=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=B.r*$*x,p+=B.g*$*x,y+=B.b*$*x;else if(I.isLightProbe)for(let U=0;U<9;U++)r.probe[U].addScaledVector(I.sh.coefficients[U],$);else if(I.isDirectionalLight){const U=n.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*x),I.castShadow){const H=I.shadow,k=i.get(I);k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,r.directionalShadow[v]=k,r.directionalShadowMap[v]=Z,r.directionalShadowMatrix[v]=I.shadow.matrix,E++}r.directional[v]=U,v++}else if(I.isSpotLight){const U=n.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(B).multiplyScalar($*x),U.distance=ee,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,r.spot[c]=U;const H=I.shadow;if(I.map&&(r.spotLightMap[C]=I.map,C++,H.updateMatrices(I),I.castShadow&&D++),r.spotLightMatrix[c]=H.matrix,I.castShadow){const k=i.get(I);k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,r.spotShadow[c]=k,r.spotShadowMap[c]=Z,w++}c++}else if(I.isRectAreaLight){const U=n.get(I);U.color.copy(B).multiplyScalar($),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),r.rectArea[g]=U,g++}else if(I.isPointLight){const U=n.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*x),U.distance=I.distance,U.decay=I.decay,I.castShadow){const H=I.shadow,k=i.get(I);k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,k.shadowCameraNear=H.camera.near,k.shadowCameraFar=H.camera.far,r.pointShadow[m]=k,r.pointShadowMap[m]=Z,r.pointShadowMatrix[m]=I.shadow.matrix,S++}r.point[m]=U,m++}else if(I.isHemisphereLight){const U=n.get(I);U.skyColor.copy(I.color).multiplyScalar($*x),U.groundColor.copy(I.groundColor).multiplyScalar($*x),r.hemi[_]=U,_++}}g>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=y;const A=r.hash;(A.directionalLength!==v||A.pointLength!==m||A.spotLength!==c||A.rectAreaLength!==g||A.hemiLength!==_||A.numDirectionalShadows!==E||A.numPointShadows!==S||A.numSpotShadows!==w||A.numSpotMaps!==C)&&(r.directional.length=v,r.spot.length=c,r.rectArea.length=g,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=w+C-D,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=D,A.directionalLength=v,A.pointLength=m,A.spotLength=c,A.rectAreaLength=g,A.hemiLength=_,A.numDirectionalShadows=E,A.numPointShadows=S,A.numSpotShadows=w,A.numSpotMaps=C,r.version=a2++)}function u(f,d){let h=0,p=0,y=0,v=0,m=0;const c=d.matrixWorldInverse;for(let g=0,_=f.length;g<_;g++){const E=f[g];if(E.isDirectionalLight){const S=r.directional[h];S.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(o),S.direction.transformDirection(c),h++}else if(E.isSpotLight){const S=r.spot[y];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(c),S.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(o),S.direction.transformDirection(c),y++}else if(E.isRectAreaLight){const S=r.rectArea[v];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(c),a.identity(),s.copy(E.matrixWorld),s.premultiply(c),a.extractRotation(s),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(E.isPointLight){const S=r.point[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(c),p++}else if(E.isHemisphereLight){const S=r.hemi[m];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(c),m++}}}return{setup:l,setupView:u,state:r}}function yg(t,e){const n=new u2(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:s,pushShadow:a}}function c2(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new yg(t,e),n.set(o,[l])):s>=a.length?(l=new yg(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class f2 extends Mu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class d2 extends Mu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const h2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function m2(t,e,n){let i=new K0;const r=new Fe,o=new Fe,s=new Ut,a=new f2({depthPacking:_T}),l=new d2,u={},f=n.maxTextureSize,d={[Ji]:an,[an]:Ji,[xi]:xi},h=new Ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:h2,fragmentShader:p2}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const y=new Fr;y.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new mn(y,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=L0;let c=this.type;this.render=function(S,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const D=t.getRenderTarget(),x=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),W=t.state;W.setBlending(Ki),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const Y=c!==_i&&this.type===_i,I=c===_i&&this.type!==_i;for(let B=0,$=S.length;B<$;B++){const ee=S[B],Z=ee.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);const U=Z.getFrameExtents();if(r.multiply(U),o.copy(Z.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(o.x=Math.floor(f/U.x),r.x=o.x*U.x,Z.mapSize.x=o.x),r.y>f&&(o.y=Math.floor(f/U.y),r.y=o.y*U.y,Z.mapSize.y=o.y)),Z.map===null||Y===!0||I===!0){const k=this.type!==_i?{minFilter:Kt,magFilter:Kt}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Lr(r.x,r.y,k),Z.map.texture.name=ee.name+".shadowMap",Z.camera.updateProjectionMatrix()}t.setRenderTarget(Z.map),t.clear();const H=Z.getViewportCount();for(let k=0;k<H;k++){const ue=Z.getViewport(k);s.set(o.x*ue.x,o.y*ue.y,o.x*ue.z,o.y*ue.w),W.viewport(s),Z.updateMatrices(ee,k),i=Z.getFrustum(),E(w,C,Z.camera,ee,this.type)}Z.isPointLightShadow!==!0&&this.type===_i&&g(Z,C),Z.needsUpdate=!1}c=this.type,m.needsUpdate=!1,t.setRenderTarget(D,x,A)};function g(S,w){const C=e.update(v);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Lr(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(w,null,C,h,v,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(w,null,C,p,v,null)}function _(S,w,C,D){let x=null;const A=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(A!==void 0)x=A;else if(x=C.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const W=x.uuid,Y=w.uuid;let I=u[W];I===void 0&&(I={},u[W]=I);let B=I[Y];B===void 0&&(B=x.clone(),I[Y]=B),x=B}if(x.visible=w.visible,x.wireframe=w.wireframe,D===_i?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:d[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const W=t.properties.get(x);W.light=C}return x}function E(S,w,C,D,x){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===_i)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);const Y=e.update(S),I=S.material;if(Array.isArray(I)){const B=Y.groups;for(let $=0,ee=B.length;$<ee;$++){const Z=B[$],U=I[Z.materialIndex];if(U&&U.visible){const H=_(S,U,D,x);t.renderBufferDirect(C,null,Y,H,S,Z)}}}else if(I.visible){const B=_(S,I,D,x);t.renderBufferDirect(C,null,Y,B,S,null)}}const W=S.children;for(let Y=0,I=W.length;Y<I;Y++)E(W[Y],w,C,D,x)}}function g2(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const X=new Ut;let ne=null;const he=new Ut(0,0,0,0);return{setMask:function(ve){ne!==ve&&!L&&(t.colorMask(ve,ve,ve,ve),ne=ve)},setLocked:function(ve){L=ve},setClear:function(ve,Ke,Ze,kt,Pi){Pi===!0&&(ve*=kt,Ke*=kt,Ze*=kt),X.set(ve,Ke,Ze,kt),he.equals(X)===!1&&(t.clearColor(ve,Ke,Ze,kt),he.copy(X))},reset:function(){L=!1,ne=null,he.set(-1,0,0,0)}}}function o(){let L=!1,X=null,ne=null,he=null;return{setTest:function(ve){ve?P(t.DEPTH_TEST):we(t.DEPTH_TEST)},setMask:function(ve){X!==ve&&!L&&(t.depthMask(ve),X=ve)},setFunc:function(ve){if(ne!==ve){switch(ve){case Bw:t.depthFunc(t.NEVER);break;case Hw:t.depthFunc(t.ALWAYS);break;case Gw:t.depthFunc(t.LESS);break;case Nf:t.depthFunc(t.LEQUAL);break;case Vw:t.depthFunc(t.EQUAL);break;case Ww:t.depthFunc(t.GEQUAL);break;case $w:t.depthFunc(t.GREATER);break;case Xw:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ne=ve}},setLocked:function(ve){L=ve},setClear:function(ve){he!==ve&&(t.clearDepth(ve),he=ve)},reset:function(){L=!1,X=null,ne=null,he=null}}}function s(){let L=!1,X=null,ne=null,he=null,ve=null,Ke=null,Ze=null,kt=null,Pi=null;return{setTest:function(dt){L||(dt?P(t.STENCIL_TEST):we(t.STENCIL_TEST))},setMask:function(dt){X!==dt&&!L&&(t.stencilMask(dt),X=dt)},setFunc:function(dt,wn,Zn){(ne!==dt||he!==wn||ve!==Zn)&&(t.stencilFunc(dt,wn,Zn),ne=dt,he=wn,ve=Zn)},setOp:function(dt,wn,Zn){(Ke!==dt||Ze!==wn||kt!==Zn)&&(t.stencilOp(dt,wn,Zn),Ke=dt,Ze=wn,kt=Zn)},setLocked:function(dt){L=dt},setClear:function(dt){Pi!==dt&&(t.clearStencil(dt),Pi=dt)},reset:function(){L=!1,X=null,ne=null,he=null,ve=null,Ke=null,Ze=null,kt=null,Pi=null}}}const a=new r,l=new o,u=new s,f=new WeakMap,d=new WeakMap;let h={},p={},y=new WeakMap,v=[],m=null,c=!1,g=null,_=null,E=null,S=null,w=null,C=null,D=null,x=!1,A=null,W=null,Y=null,I=null,B=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,Z=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(U)[1]),ee=Z>=1):U.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),ee=Z>=2);let H=null,k={};const ue=t.getParameter(t.SCISSOR_BOX),J=t.getParameter(t.VIEWPORT),G=new Ut().fromArray(ue),K=new Ut().fromArray(J);function oe(L,X,ne,he){const ve=new Uint8Array(4),Ke=t.createTexture();t.bindTexture(L,Ke),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ze=0;Ze<ne;Ze++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(X,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(X+Ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return Ke}const se={};se[t.TEXTURE_2D]=oe(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=oe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(se[t.TEXTURE_2D_ARRAY]=oe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=oe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),P(t.DEPTH_TEST),l.setFunc(Nf),rt(!1),mt(rm),P(t.CULL_FACE),be(Ki);function P(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function we(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function Ee(L,X){return p[L]!==X?(t.bindFramebuffer(L,X),p[L]=X,i&&(L===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=X),L===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=X)),!0):!1}function ae(L,X){let ne=v,he=!1;if(L)if(ne=y.get(X),ne===void 0&&(ne=[],y.set(X,ne)),L.isWebGLMultipleRenderTargets){const ve=L.texture;if(ne.length!==ve.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let Ke=0,Ze=ve.length;Ke<Ze;Ke++)ne[Ke]=t.COLOR_ATTACHMENT0+Ke;ne.length=ve.length,he=!0}}else ne[0]!==t.COLOR_ATTACHMENT0&&(ne[0]=t.COLOR_ATTACHMENT0,he=!0);else ne[0]!==t.BACK&&(ne[0]=t.BACK,he=!0);he&&(n.isWebGL2?t.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function Se(L){return m!==L?(t.useProgram(L),m=L,!0):!1}const Ve={[ro]:t.FUNC_ADD,[Rw]:t.FUNC_SUBTRACT,[Pw]:t.FUNC_REVERSE_SUBTRACT};if(i)Ve[lm]=t.MIN,Ve[um]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Ve[lm]=L.MIN_EXT,Ve[um]=L.MAX_EXT)}const ye={[Lw]:t.ZERO,[Dw]:t.ONE,[Uw]:t.SRC_COLOR,[D0]:t.SRC_ALPHA,[zw]:t.SRC_ALPHA_SATURATE,[Fw]:t.DST_COLOR,[Nw]:t.DST_ALPHA,[Iw]:t.ONE_MINUS_SRC_COLOR,[U0]:t.ONE_MINUS_SRC_ALPHA,[kw]:t.ONE_MINUS_DST_COLOR,[Ow]:t.ONE_MINUS_DST_ALPHA};function be(L,X,ne,he,ve,Ke,Ze,kt){if(L===Ki){c===!0&&(we(t.BLEND),c=!1);return}if(c===!1&&(P(t.BLEND),c=!0),L!==bw){if(L!==g||kt!==x){if((_!==ro||w!==ro)&&(t.blendEquation(t.FUNC_ADD),_=ro,w=ro),kt)switch(L){case Ao:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case om:t.blendFunc(t.ONE,t.ONE);break;case sm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case am:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ao:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case om:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case sm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case am:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,S=null,C=null,D=null,g=L,x=kt}return}ve=ve||X,Ke=Ke||ne,Ze=Ze||he,(X!==_||ve!==w)&&(t.blendEquationSeparate(Ve[X],Ve[ve]),_=X,w=ve),(ne!==E||he!==S||Ke!==C||Ze!==D)&&(t.blendFuncSeparate(ye[ne],ye[he],ye[Ke],ye[Ze]),E=ne,S=he,C=Ke,D=Ze),g=L,x=!1}function lt(L,X){L.side===xi?we(t.CULL_FACE):P(t.CULL_FACE);let ne=L.side===an;X&&(ne=!ne),rt(ne),L.blending===Ao&&L.transparent===!1?be(Ki):be(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const he=L.stencilWrite;u.setTest(he),he&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),He(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?P(t.SAMPLE_ALPHA_TO_COVERAGE):we(t.SAMPLE_ALPHA_TO_COVERAGE)}function rt(L){A!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),A=L)}function mt(L){L!==Tw?(P(t.CULL_FACE),L!==W&&(L===rm?t.cullFace(t.BACK):L===Aw?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):we(t.CULL_FACE),W=L}function ct(L){L!==Y&&(ee&&t.lineWidth(L),Y=L)}function He(L,X,ne){L?(P(t.POLYGON_OFFSET_FILL),(I!==X||B!==ne)&&(t.polygonOffset(X,ne),I=X,B=ne)):we(t.POLYGON_OFFSET_FILL)}function Qe(L){L?P(t.SCISSOR_TEST):we(t.SCISSOR_TEST)}function Ft(L){L===void 0&&(L=t.TEXTURE0+$-1),H!==L&&(t.activeTexture(L),H=L)}function b(L,X,ne){ne===void 0&&(H===null?ne=t.TEXTURE0+$-1:ne=H);let he=k[ne];he===void 0&&(he={type:void 0,texture:void 0},k[ne]=he),(he.type!==L||he.texture!==X)&&(H!==ne&&(t.activeTexture(ne),H=ne),t.bindTexture(L,X||se[L]),he.type=L,he.texture=X)}function M(){const L=k[H];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function V(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function R(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(L){G.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),G.copy(L))}function ge(L){K.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),K.copy(L))}function Te(L,X){let ne=d.get(X);ne===void 0&&(ne=new WeakMap,d.set(X,ne));let he=ne.get(L);he===void 0&&(he=t.getUniformBlockIndex(X,L.name),ne.set(L,he))}function Le(L,X){const he=d.get(X).get(L);f.get(X)!==he&&(t.uniformBlockBinding(X,he,L.__bindingPointIndex),f.set(X,he))}function ft(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},H=null,k={},p={},y=new WeakMap,v=[],m=null,c=!1,g=null,_=null,E=null,S=null,w=null,C=null,D=null,x=!1,A=null,W=null,Y=null,I=null,B=null,G.set(0,0,t.canvas.width,t.canvas.height),K.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:P,disable:we,bindFramebuffer:Ee,drawBuffers:ae,useProgram:Se,setBlending:be,setMaterial:lt,setFlipSided:rt,setCullFace:mt,setLineWidth:ct,setPolygonOffset:He,setScissorTest:Qe,activeTexture:Ft,bindTexture:b,unbindTexture:M,compressedTexImage2D:V,compressedTexImage3D:te,texImage2D:me,texImage3D:_e,updateUBOMapping:Te,uniformBlockBinding:Le,texStorage2D:z,texStorage3D:fe,texSubImage2D:re,texSubImage3D:ce,compressedTexSubImage2D:R,compressedTexSubImage3D:Q,scissor:de,viewport:ge,reset:ft}}function _2(t,e,n,i,r,o,s){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,f=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let v;const m=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,M){return c?new OffscreenCanvas(b,M):Xs("canvas")}function _(b,M,V,te){let re=1;if((b.width>te||b.height>te)&&(re=te/Math.max(b.width,b.height)),re<1||M===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ce=M?ET:Math.floor,R=ce(re*b.width),Q=ce(re*b.height);v===void 0&&(v=g(R,Q));const z=V?g(R,Q):v;return z.width=R,z.height=Q,z.getContext("2d").drawImage(b,0,0,R,Q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+R+"x"+Q+")."),z}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function E(b){return Om(b.width)&&Om(b.height)}function S(b){return a?!1:b.wrapS!==$n||b.wrapT!==$n||b.minFilter!==Kt&&b.minFilter!==bn}function w(b,M){return b.generateMipmaps&&M&&b.minFilter!==Kt&&b.minFilter!==bn}function C(b){t.generateMipmap(b)}function D(b,M,V,te,re=!1){if(a===!1)return M;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ce=M;return M===t.RED&&(V===t.FLOAT&&(ce=t.R32F),V===t.HALF_FLOAT&&(ce=t.R16F),V===t.UNSIGNED_BYTE&&(ce=t.R8)),M===t.RG&&(V===t.FLOAT&&(ce=t.RG32F),V===t.HALF_FLOAT&&(ce=t.RG16F),V===t.UNSIGNED_BYTE&&(ce=t.RG8)),M===t.RGBA&&(V===t.FLOAT&&(ce=t.RGBA32F),V===t.HALF_FLOAT&&(ce=t.RGBA16F),V===t.UNSIGNED_BYTE&&(ce=te===Ce&&re===!1?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(ce=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(ce=t.RGB5_A1)),(ce===t.R16F||ce===t.R32F||ce===t.RG16F||ce===t.RG32F||ce===t.RGBA16F||ce===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function x(b,M,V){return w(b,V)===!0||b.isFramebufferTexture&&b.minFilter!==Kt&&b.minFilter!==bn?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function A(b){return b===Kt||b===cm||b===oc?t.NEAREST:t.LINEAR}function W(b){const M=b.target;M.removeEventListener("dispose",W),I(M),M.isVideoTexture&&y.delete(M)}function Y(b){const M=b.target;M.removeEventListener("dispose",Y),$(M)}function I(b){const M=i.get(b);if(M.__webglInit===void 0)return;const V=b.source,te=m.get(V);if(te){const re=te[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&B(b),Object.keys(te).length===0&&m.delete(V)}i.remove(b)}function B(b){const M=i.get(b);t.deleteTexture(M.__webglTexture);const V=b.source,te=m.get(V);delete te[M.__cacheKey],s.memory.textures--}function $(b){const M=b.texture,V=i.get(b),te=i.get(M);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),s.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)t.deleteFramebuffer(V.__webglFramebuffer[re]),V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer[re]);else{if(t.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&t.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let re=0;re<V.__webglColorRenderbuffer.length;re++)V.__webglColorRenderbuffer[re]&&t.deleteRenderbuffer(V.__webglColorRenderbuffer[re]);V.__webglDepthRenderbuffer&&t.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let re=0,ce=M.length;re<ce;re++){const R=i.get(M[re]);R.__webglTexture&&(t.deleteTexture(R.__webglTexture),s.memory.textures--),i.remove(M[re])}i.remove(M),i.remove(b)}let ee=0;function Z(){ee=0}function U(){const b=ee;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),ee+=1,b}function H(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function k(b,M){const V=i.get(b);if(b.isVideoTexture&&Qe(b),b.isRenderTargetTexture===!1&&b.version>0&&V.__version!==b.version){const te=b.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(V,b,M);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+M)}function ue(b,M){const V=i.get(b);if(b.version>0&&V.__version!==b.version){we(V,b,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+M)}function J(b,M){const V=i.get(b);if(b.version>0&&V.__version!==b.version){we(V,b,M);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+M)}function G(b,M){const V=i.get(b);if(b.version>0&&V.__version!==b.version){Ee(V,b,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+M)}const K={[kf]:t.REPEAT,[$n]:t.CLAMP_TO_EDGE,[zf]:t.MIRRORED_REPEAT},oe={[Kt]:t.NEAREST,[cm]:t.NEAREST_MIPMAP_NEAREST,[oc]:t.NEAREST_MIPMAP_LINEAR,[bn]:t.LINEAR,[eT]:t.LINEAR_MIPMAP_NEAREST,[Ws]:t.LINEAR_MIPMAP_LINEAR};function se(b,M,V){if(V?(t.texParameteri(b,t.TEXTURE_WRAP_S,K[M.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,K[M.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,K[M.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,oe[M.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,oe[M.minFilter])):(t.texParameteri(b,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(b,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==$n||M.wrapT!==$n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,t.TEXTURE_MAG_FILTER,A(M.magFilter)),t.texParameteri(b,t.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==Kt&&M.minFilter!==bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Kt||M.minFilter!==oc&&M.minFilter!==Ws||M.type===vr&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===$s&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(b,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function P(b,M){let V=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",W));const te=M.source;let re=m.get(te);re===void 0&&(re={},m.set(te,re));const ce=H(M);if(ce!==b.__cacheKey){re[ce]===void 0&&(re[ce]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,V=!0),re[ce].usedTimes++;const R=re[b.__cacheKey];R!==void 0&&(re[b.__cacheKey].usedTimes--,R.usedTimes===0&&B(M)),b.__cacheKey=ce,b.__webglTexture=re[ce].texture}return V}function we(b,M,V){let te=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(te=t.TEXTURE_3D);const re=P(b,M),ce=M.source;n.bindTexture(te,b.__webglTexture,t.TEXTURE0+V);const R=i.get(ce);if(ce.version!==R.__version||re===!0){n.activeTexture(t.TEXTURE0+V),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const Q=S(M)&&E(M.image)===!1;let z=_(M.image,Q,!1,f);z=Ft(M,z);const fe=E(z)||a,me=o.convert(M.format,M.colorSpace);let _e=o.convert(M.type),de=D(M.internalFormat,me,_e,M.colorSpace);se(te,M,fe);let ge;const Te=M.mipmaps,Le=a&&M.isVideoTexture!==!0,ft=R.__version===void 0||re===!0,L=x(M,z,fe);if(M.isDepthTexture)de=t.DEPTH_COMPONENT,a?M.type===vr?de=t.DEPTH_COMPONENT32F:M.type===_r?de=t.DEPTH_COMPONENT24:M.type===Co?de=t.DEPTH24_STENCIL8:de=t.DEPTH_COMPONENT16:M.type===vr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Sr&&de===t.DEPTH_COMPONENT&&M.type!==O0&&M.type!==_r&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=_r,_e=o.convert(M.type)),M.format===Bo&&de===t.DEPTH_COMPONENT&&(de=t.DEPTH_STENCIL,M.type!==Co&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Co,_e=o.convert(M.type))),ft&&(Le?n.texStorage2D(t.TEXTURE_2D,1,de,z.width,z.height):n.texImage2D(t.TEXTURE_2D,0,de,z.width,z.height,0,me,_e,null));else if(M.isDataTexture)if(Te.length>0&&fe){Le&&ft&&n.texStorage2D(t.TEXTURE_2D,L,de,Te[0].width,Te[0].height);for(let X=0,ne=Te.length;X<ne;X++)ge=Te[X],Le?n.texSubImage2D(t.TEXTURE_2D,X,0,0,ge.width,ge.height,me,_e,ge.data):n.texImage2D(t.TEXTURE_2D,X,de,ge.width,ge.height,0,me,_e,ge.data);M.generateMipmaps=!1}else Le?(ft&&n.texStorage2D(t.TEXTURE_2D,L,de,z.width,z.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,z.width,z.height,me,_e,z.data)):n.texImage2D(t.TEXTURE_2D,0,de,z.width,z.height,0,me,_e,z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Le&&ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,L,de,Te[0].width,Te[0].height,z.depth);for(let X=0,ne=Te.length;X<ne;X++)ge=Te[X],M.format!==Xn?me!==null?Le?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,ge.width,ge.height,z.depth,me,ge.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,X,de,ge.width,ge.height,z.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?n.texSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,ge.width,ge.height,z.depth,me,_e,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,X,de,ge.width,ge.height,z.depth,0,me,_e,ge.data)}else{Le&&ft&&n.texStorage2D(t.TEXTURE_2D,L,de,Te[0].width,Te[0].height);for(let X=0,ne=Te.length;X<ne;X++)ge=Te[X],M.format!==Xn?me!==null?Le?n.compressedTexSubImage2D(t.TEXTURE_2D,X,0,0,ge.width,ge.height,me,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,X,de,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?n.texSubImage2D(t.TEXTURE_2D,X,0,0,ge.width,ge.height,me,_e,ge.data):n.texImage2D(t.TEXTURE_2D,X,de,ge.width,ge.height,0,me,_e,ge.data)}else if(M.isDataArrayTexture)Le?(ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,L,de,z.width,z.height,z.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,me,_e,z.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,de,z.width,z.height,z.depth,0,me,_e,z.data);else if(M.isData3DTexture)Le?(ft&&n.texStorage3D(t.TEXTURE_3D,L,de,z.width,z.height,z.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,me,_e,z.data)):n.texImage3D(t.TEXTURE_3D,0,de,z.width,z.height,z.depth,0,me,_e,z.data);else if(M.isFramebufferTexture){if(ft)if(Le)n.texStorage2D(t.TEXTURE_2D,L,de,z.width,z.height);else{let X=z.width,ne=z.height;for(let he=0;he<L;he++)n.texImage2D(t.TEXTURE_2D,he,de,X,ne,0,me,_e,null),X>>=1,ne>>=1}}else if(Te.length>0&&fe){Le&&ft&&n.texStorage2D(t.TEXTURE_2D,L,de,Te[0].width,Te[0].height);for(let X=0,ne=Te.length;X<ne;X++)ge=Te[X],Le?n.texSubImage2D(t.TEXTURE_2D,X,0,0,me,_e,ge):n.texImage2D(t.TEXTURE_2D,X,de,me,_e,ge);M.generateMipmaps=!1}else Le?(ft&&n.texStorage2D(t.TEXTURE_2D,L,de,z.width,z.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,_e,z)):n.texImage2D(t.TEXTURE_2D,0,de,me,_e,z);w(M,fe)&&C(te),R.__version=ce.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Ee(b,M,V){if(M.image.length!==6)return;const te=P(b,M),re=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+V);const ce=i.get(re);if(re.version!==ce.__version||te===!0){n.activeTexture(t.TEXTURE0+V),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const R=M.isCompressedTexture||M.image[0].isCompressedTexture,Q=M.image[0]&&M.image[0].isDataTexture,z=[];for(let X=0;X<6;X++)!R&&!Q?z[X]=_(M.image[X],!1,!0,u):z[X]=Q?M.image[X].image:M.image[X],z[X]=Ft(M,z[X]);const fe=z[0],me=E(fe)||a,_e=o.convert(M.format,M.colorSpace),de=o.convert(M.type),ge=D(M.internalFormat,_e,de,M.colorSpace),Te=a&&M.isVideoTexture!==!0,Le=ce.__version===void 0||te===!0;let ft=x(M,fe,me);se(t.TEXTURE_CUBE_MAP,M,me);let L;if(R){Te&&Le&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ft,ge,fe.width,fe.height);for(let X=0;X<6;X++){L=z[X].mipmaps;for(let ne=0;ne<L.length;ne++){const he=L[ne];M.format!==Xn?_e!==null?Te?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ne,0,0,he.width,he.height,_e,he.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ne,ge,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ne,0,0,he.width,he.height,_e,de,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ne,ge,he.width,he.height,0,_e,de,he.data)}}}else{L=M.mipmaps,Te&&Le&&(L.length>0&&ft++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ft,ge,z[0].width,z[0].height));for(let X=0;X<6;X++)if(Q){Te?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,z[X].width,z[X].height,_e,de,z[X].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,ge,z[X].width,z[X].height,0,_e,de,z[X].data);for(let ne=0;ne<L.length;ne++){const ve=L[ne].image[X].image;Te?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ne+1,0,0,ve.width,ve.height,_e,de,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ne+1,ge,ve.width,ve.height,0,_e,de,ve.data)}}else{Te?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,_e,de,z[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,ge,_e,de,z[X]);for(let ne=0;ne<L.length;ne++){const he=L[ne];Te?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ne+1,0,0,_e,de,he.image[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ne+1,ge,_e,de,he.image[X])}}}w(M,me)&&C(t.TEXTURE_CUBE_MAP),ce.__version=re.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function ae(b,M,V,te,re){const ce=o.convert(V.format,V.colorSpace),R=o.convert(V.type),Q=D(V.internalFormat,ce,R,V.colorSpace);i.get(M).__hasExternalTextures||(re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,0,Q,M.width,M.height,M.depth,0,ce,R,null):n.texImage2D(re,0,Q,M.width,M.height,0,ce,R,null)),n.bindFramebuffer(t.FRAMEBUFFER,b),He(M)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,re,i.get(V).__webglTexture,0,ct(M)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,re,i.get(V).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Se(b,M,V){if(t.bindRenderbuffer(t.RENDERBUFFER,b),M.depthBuffer&&!M.stencilBuffer){let te=t.DEPTH_COMPONENT16;if(V||He(M)){const re=M.depthTexture;re&&re.isDepthTexture&&(re.type===vr?te=t.DEPTH_COMPONENT32F:re.type===_r&&(te=t.DEPTH_COMPONENT24));const ce=ct(M);He(M)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,te,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,te,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,te,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,b)}else if(M.depthBuffer&&M.stencilBuffer){const te=ct(M);V&&He(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,M.width,M.height):He(M)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,b)}else{const te=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let re=0;re<te.length;re++){const ce=te[re],R=o.convert(ce.format,ce.colorSpace),Q=o.convert(ce.type),z=D(ce.internalFormat,R,Q,ce.colorSpace),fe=ct(M);V&&He(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,z,M.width,M.height):He(M)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,z,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,z,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ve(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),k(M.depthTexture,0);const te=i.get(M.depthTexture).__webglTexture,re=ct(M);if(M.depthTexture.format===Sr)He(M)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(M.depthTexture.format===Bo)He(M)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ye(b){const M=i.get(b),V=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ve(M.__webglFramebuffer,b)}else if(V){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=t.createRenderbuffer(),Se(M.__webglDepthbuffer[te],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),Se(M.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(b,M,V){const te=i.get(b);M!==void 0&&ae(te.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),V!==void 0&&ye(b)}function lt(b){const M=b.texture,V=i.get(b),te=i.get(M);b.addEventListener("dispose",Y),b.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=M.version,s.memory.textures++);const re=b.isWebGLCubeRenderTarget===!0,ce=b.isWebGLMultipleRenderTargets===!0,R=E(b)||a;if(re){V.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)V.__webglFramebuffer[Q]=t.createFramebuffer()}else{if(V.__webglFramebuffer=t.createFramebuffer(),ce)if(r.drawBuffers){const Q=b.texture;for(let z=0,fe=Q.length;z<fe;z++){const me=i.get(Q[z]);me.__webglTexture===void 0&&(me.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&He(b)===!1){const Q=ce?M:[M];V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let z=0;z<Q.length;z++){const fe=Q[z];V.__webglColorRenderbuffer[z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[z]);const me=o.convert(fe.format,fe.colorSpace),_e=o.convert(fe.type),de=D(fe.internalFormat,me,_e,fe.colorSpace,b.isXRRenderTarget===!0),ge=ct(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,ge,de,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+z,t.RENDERBUFFER,V.__webglColorRenderbuffer[z])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),Se(V.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),se(t.TEXTURE_CUBE_MAP,M,R);for(let Q=0;Q<6;Q++)ae(V.__webglFramebuffer[Q],b,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q);w(M,R)&&C(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){const Q=b.texture;for(let z=0,fe=Q.length;z<fe;z++){const me=Q[z],_e=i.get(me);n.bindTexture(t.TEXTURE_2D,_e.__webglTexture),se(t.TEXTURE_2D,me,R),ae(V.__webglFramebuffer,b,me,t.COLOR_ATTACHMENT0+z,t.TEXTURE_2D),w(me,R)&&C(t.TEXTURE_2D)}n.unbindTexture()}else{let Q=t.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?Q=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Q,te.__webglTexture),se(Q,M,R),ae(V.__webglFramebuffer,b,M,t.COLOR_ATTACHMENT0,Q),w(M,R)&&C(Q),n.unbindTexture()}b.depthBuffer&&ye(b)}function rt(b){const M=E(b)||a,V=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let te=0,re=V.length;te<re;te++){const ce=V[te];if(w(ce,M)){const R=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Q=i.get(ce).__webglTexture;n.bindTexture(R,Q),C(R),n.unbindTexture()}}}function mt(b){if(a&&b.samples>0&&He(b)===!1){const M=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],V=b.width,te=b.height;let re=t.COLOR_BUFFER_BIT;const ce=[],R=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=i.get(b),z=b.isWebGLMultipleRenderTargets===!0;if(z)for(let fe=0;fe<M.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let fe=0;fe<M.length;fe++){ce.push(t.COLOR_ATTACHMENT0+fe),b.depthBuffer&&ce.push(R);const me=Q.__ignoreDepthValues!==void 0?Q.__ignoreDepthValues:!1;if(me===!1&&(b.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),z&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Q.__webglColorRenderbuffer[fe]),me===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[R]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[R])),z){const _e=i.get(M[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,_e,0)}t.blitFramebuffer(0,0,V,te,0,0,V,te,re,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ce)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),z)for(let fe=0;fe<M.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,Q.__webglColorRenderbuffer[fe]);const me=i.get(M[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,me,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}}function ct(b){return Math.min(d,b.samples)}function He(b){const M=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Qe(b){const M=s.render.frame;y.get(b)!==M&&(y.set(b,M),b.update())}function Ft(b,M){const V=b.colorSpace,te=b.format,re=b.type;return b.isCompressedTexture===!0||b.format===Bf||V!==Kn&&V!==Mr&&(V===Ce?a===!1?e.has("EXT_sRGB")===!0&&te===Xn?(b.format=Bf,b.minFilter=bn,b.generateMipmaps=!1):M=B0.sRGBToLinear(M):(te!==Xn||re!==Pr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}this.allocateTextureUnit=U,this.resetTextureUnits=Z,this.setTexture2D=k,this.setTexture2DArray=ue,this.setTexture3D=J,this.setTextureCube=G,this.rebindTextures=be,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=He}function v2(t,e,n){const i=n.isWebGL2;function r(o,s=Mr){let a;if(o===Pr)return t.UNSIGNED_BYTE;if(o===rT)return t.UNSIGNED_SHORT_4_4_4_4;if(o===oT)return t.UNSIGNED_SHORT_5_5_5_1;if(o===tT)return t.BYTE;if(o===nT)return t.SHORT;if(o===O0)return t.UNSIGNED_SHORT;if(o===iT)return t.INT;if(o===_r)return t.UNSIGNED_INT;if(o===vr)return t.FLOAT;if(o===$s)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===sT)return t.ALPHA;if(o===Xn)return t.RGBA;if(o===aT)return t.LUMINANCE;if(o===lT)return t.LUMINANCE_ALPHA;if(o===Sr)return t.DEPTH_COMPONENT;if(o===Bo)return t.DEPTH_STENCIL;if(o===Bf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===uT)return t.RED;if(o===cT)return t.RED_INTEGER;if(o===fT)return t.RG;if(o===dT)return t.RG_INTEGER;if(o===hT)return t.RGBA_INTEGER;if(o===sc||o===ac||o===lc||o===uc)if(s===Ce)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===sc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===uc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===sc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===ac)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===lc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===uc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===fm||o===dm||o===hm||o===pm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===fm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===dm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===hm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===pm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===pT)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===mm||o===gm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===mm)return s===Ce?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===gm)return s===Ce?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===_m||o===vm||o===ym||o===xm||o===Sm||o===Em||o===Mm||o===wm||o===Tm||o===Am||o===Cm||o===bm||o===Rm||o===Pm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===_m)return s===Ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===vm)return s===Ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===ym)return s===Ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===xm)return s===Ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Sm)return s===Ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Em)return s===Ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Mm)return s===Ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===wm)return s===Ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Tm)return s===Ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Am)return s===Ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Cm)return s===Ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===bm)return s===Ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Rm)return s===Ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Pm)return s===Ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===cc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===cc)return s===Ce?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===mT||o===Lm||o===Dm||o===Um)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===cc)return a.COMPRESSED_RED_RGTC1_EXT;if(o===Lm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Dm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Um)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Co?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class y2 extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ya extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const x2={type:"move"};class Ic{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ya,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ya,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ya,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),c=this._getHandJoint(u,v);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,y=.005;u.inputState.pinching&&h>p+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(x2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ya;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class S2 extends ln{constructor(e,n,i,r,o,s,a,l,u,f){if(f=f!==void 0?f:Sr,f!==Sr&&f!==Bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Sr&&(i=_r),i===void 0&&f===Bo&&(i=Co),super(null,r,o,s,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1}}class E2 extends Or{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,f=null,d=null,h=null,p=null,y=null;const v=n.getContextAttributes();let m=null,c=null;const g=[],_=[],E=new Set,S=new Map,w=new Rn;w.layers.enable(1),w.viewport=new Ut;const C=new Rn;C.layers.enable(2),C.viewport=new Ut;const D=[w,C],x=new y2;x.layers.enable(1),x.layers.enable(2);let A=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let K=g[G];return K===void 0&&(K=new Ic,g[G]=K),K.getTargetRaySpace()},this.getControllerGrip=function(G){let K=g[G];return K===void 0&&(K=new Ic,g[G]=K),K.getGripSpace()},this.getHand=function(G){let K=g[G];return K===void 0&&(K=new Ic,g[G]=K),K.getHandSpace()};function Y(G){const K=_.indexOf(G.inputSource);if(K===-1)return;const oe=g[K];oe!==void 0&&(oe.update(G.inputSource,G.frame,u||s),oe.dispatchEvent({type:G.type,data:G.inputSource}))}function I(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",B);for(let G=0;G<g.length;G++){const K=_[G];K!==null&&(_[G]=null,g[G].disconnect(K))}A=null,W=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,c=null,J.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",I),r.addEventListener("inputsourceschange",B),v.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:p}),c=new Lr(p.framebufferWidth,p.framebufferHeight,{format:Xn,type:Pr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let K=null,oe=null,se=null;v.depth&&(se=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=v.stencil?Bo:Sr,oe=v.stencil?Co:_r);const P={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:o};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(P),r.updateRenderState({layers:[h]}),c=new Lr(h.textureWidth,h.textureHeight,{format:Xn,type:Pr,depthTexture:new S2(h.textureWidth,h.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const we=e.properties.get(c);we.__ignoreDepthValues=h.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),J.setContext(r),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function B(G){for(let K=0;K<G.removed.length;K++){const oe=G.removed[K],se=_.indexOf(oe);se>=0&&(_[se]=null,g[se].disconnect(oe))}for(let K=0;K<G.added.length;K++){const oe=G.added[K];let se=_.indexOf(oe);if(se===-1){for(let we=0;we<g.length;we++)if(we>=_.length){_.push(oe),se=we;break}else if(_[we]===null){_[we]=oe,se=we;break}if(se===-1)break}const P=g[se];P&&P.connect(oe)}}const $=new F,ee=new F;function Z(G,K,oe){$.setFromMatrixPosition(K.matrixWorld),ee.setFromMatrixPosition(oe.matrixWorld);const se=$.distanceTo(ee),P=K.projectionMatrix.elements,we=oe.projectionMatrix.elements,Ee=P[14]/(P[10]-1),ae=P[14]/(P[10]+1),Se=(P[9]+1)/P[5],Ve=(P[9]-1)/P[5],ye=(P[8]-1)/P[0],be=(we[8]+1)/we[0],lt=Ee*ye,rt=Ee*be,mt=se/(-ye+be),ct=mt*-ye;K.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ct),G.translateZ(mt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const He=Ee+mt,Qe=ae+mt,Ft=lt-ct,b=rt+(se-ct),M=Se*ae/Qe*He,V=Ve*ae/Qe*He;G.projectionMatrix.makePerspective(Ft,b,M,V,He,Qe),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function U(G,K){K===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(K.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;x.near=C.near=w.near=G.near,x.far=C.far=w.far=G.far,(A!==x.near||W!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,W=x.far);const K=G.parent,oe=x.cameras;U(x,K);for(let se=0;se<oe.length;se++)U(oe[se],K);oe.length===2?Z(x,w,C):x.projectionMatrix.copy(w.projectionMatrix),H(G,x,K)};function H(G,K,oe){oe===null?G.matrix.copy(K.matrixWorld):(G.matrix.copy(oe.matrixWorld),G.matrix.invert(),G.matrix.multiply(K.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0);const se=G.children;for(let P=0,we=se.length;P<we;P++)se[P].updateMatrixWorld(!0);G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Hf*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(G){l=G,h!==null&&(h.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.getPlanes=function(){return E};let k=null;function ue(G,K){if(f=K.getViewerPose(u||s),y=K,f!==null){const oe=f.views;p!==null&&(e.setRenderTargetFramebuffer(c,p.framebuffer),e.setRenderTarget(c));let se=!1;oe.length!==x.cameras.length&&(x.cameras.length=0,se=!0);for(let P=0;P<oe.length;P++){const we=oe[P];let Ee=null;if(p!==null)Ee=p.getViewport(we);else{const Se=d.getViewSubImage(h,we);Ee=Se.viewport,P===0&&(e.setRenderTargetTextures(c,Se.colorTexture,h.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(c))}let ae=D[P];ae===void 0&&(ae=new Rn,ae.layers.enable(P),ae.viewport=new Ut,D[P]=ae),ae.matrix.fromArray(we.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(we.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),P===0&&(x.matrix.copy(ae.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),se===!0&&x.cameras.push(ae)}}for(let oe=0;oe<g.length;oe++){const se=_[oe],P=g[oe];se!==null&&P!==void 0&&P.update(se,K,u||s)}if(k&&k(G,K),K.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:K.detectedPlanes});let oe=null;for(const se of E)K.detectedPlanes.has(se)||(oe===null&&(oe=[]),oe.push(se));if(oe!==null)for(const se of oe)E.delete(se),S.delete(se),i.dispatchEvent({type:"planeremoved",data:se});for(const se of K.detectedPlanes)if(!E.has(se))E.add(se),S.set(se,K.lastChangedTime),i.dispatchEvent({type:"planeadded",data:se});else{const P=S.get(se);se.lastChangedTime>P&&(S.set(se,se.lastChangedTime),i.dispatchEvent({type:"planechanged",data:se}))}}y=null}const J=new Z0;J.setAnimationLoop(ue),this.setAnimationLoop=function(G){k=G},this.dispose=function(){}}}function M2(t,e){function n(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,j0(t)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function r(m,c,g,_,E){c.isMeshBasicMaterial||c.isMeshLambertMaterial?o(m,c):c.isMeshToonMaterial?(o(m,c),d(m,c)):c.isMeshPhongMaterial?(o(m,c),f(m,c)):c.isMeshStandardMaterial?(o(m,c),h(m,c),c.isMeshPhysicalMaterial&&p(m,c,E)):c.isMeshMatcapMaterial?(o(m,c),y(m,c)):c.isMeshDepthMaterial?o(m,c):c.isMeshDistanceMaterial?(o(m,c),v(m,c)):c.isMeshNormalMaterial?o(m,c):c.isLineBasicMaterial?(s(m,c),c.isLineDashedMaterial&&a(m,c)):c.isPointsMaterial?l(m,c,g,_):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function o(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,n(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===an&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,n(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===an&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,n(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,n(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const g=e.get(c).envMap;if(g&&(m.envMap.value=g,m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap){m.lightMap.value=c.lightMap;const _=t.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=c.lightMapIntensity*_,n(c.lightMap,m.lightMapTransform)}c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,m.aoMapTransform))}function s(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform))}function a(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,g,_){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*g,m.scale.value=_*.5,c.map&&(m.map.value=c.map,n(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function f(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function d(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function h(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,m.roughnessMapTransform)),e.get(c).envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,g){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===an&&m.clearcoatNormalScale.value.negate())),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,c){c.matcap&&(m.matcap.value=c.matcap)}function v(m,c){const g=e.get(c).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function w2(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,_){const E=_.program;i.uniformBlockBinding(g,E)}function u(g,_){let E=r[g.id];E===void 0&&(y(g),E=f(g),r[g.id]=E,g.addEventListener("dispose",m));const S=_.program;i.updateUBOMapping(g,S);const w=e.render.frame;o[g.id]!==w&&(h(g),o[g.id]=w)}function f(g){const _=d();g.__bindingPointIndex=_;const E=t.createBuffer(),S=g.__size,w=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,S,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,E),E}function d(){for(let g=0;g<a;g++)if(s.indexOf(g)===-1)return s.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const _=r[g.id],E=g.uniforms,S=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let w=0,C=E.length;w<C;w++){const D=E[w];if(p(D,w,S)===!0){const x=D.__offset,A=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let Y=0;Y<A.length;Y++){const I=A[Y],B=v(I);typeof I=="number"?(D.__data[0]=I,t.bufferSubData(t.UNIFORM_BUFFER,x+W,D.__data)):I.isMatrix3?(D.__data[0]=I.elements[0],D.__data[1]=I.elements[1],D.__data[2]=I.elements[2],D.__data[3]=I.elements[0],D.__data[4]=I.elements[3],D.__data[5]=I.elements[4],D.__data[6]=I.elements[5],D.__data[7]=I.elements[0],D.__data[8]=I.elements[6],D.__data[9]=I.elements[7],D.__data[10]=I.elements[8],D.__data[11]=I.elements[0]):(I.toArray(D.__data,W),W+=B.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,x,D.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,_,E){const S=g.value;if(E[_]===void 0){if(typeof S=="number")E[_]=S;else{const w=Array.isArray(S)?S:[S],C=[];for(let D=0;D<w.length;D++)C.push(w[D].clone());E[_]=C}return!0}else if(typeof S=="number"){if(E[_]!==S)return E[_]=S,!0}else{const w=Array.isArray(E[_])?E[_]:[E[_]],C=Array.isArray(S)?S:[S];for(let D=0;D<w.length;D++){const x=w[D];if(x.equals(C[D])===!1)return x.copy(C[D]),!0}}return!1}function y(g){const _=g.uniforms;let E=0;const S=16;let w=0;for(let C=0,D=_.length;C<D;C++){const x=_[C],A={boundary:0,storage:0},W=Array.isArray(x.value)?x.value:[x.value];for(let Y=0,I=W.length;Y<I;Y++){const B=W[Y],$=v(B);A.boundary+=$.boundary,A.storage+=$.storage}if(x.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=E,C>0){w=E%S;const Y=S-w;w!==0&&Y-A.boundary<0&&(E+=S-w,x.__offset=E)}E+=A.storage}return w=E%S,w>0&&(E+=S-w),g.__size=E,g.__cache={},this}function v(g){const _={boundary:0,storage:0};return typeof g=="number"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const E=s.indexOf(_.__bindingPointIndex);s.splice(E,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete o[_.id]}function c(){for(const g in r)t.deleteBuffer(r[g]);s=[],r={},o={}}return{bind:l,update:u,dispose:c}}function T2(){const t=Xs("canvas");return t.style.display="block",t}class ny{constructor(e={}){const{canvas:n=T2(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=s;let p=null,y=null;const v=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ce,this.useLegacyLights=!0,this.toneMapping=wi,this.toneMappingExposure=1;const c=this;let g=!1,_=0,E=0,S=null,w=-1,C=null;const D=new Ut,x=new Ut;let A=null,W=n.width,Y=n.height,I=1,B=null,$=null;const ee=new Ut(0,0,W,Y),Z=new Ut(0,0,W,Y);let U=!1;const H=new K0;let k=!1,ue=!1,J=null;const G=new Nt,K=new F,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return S===null?I:1}let P=i;function we(T,O){for(let j=0;j<T.length;j++){const N=T[j],q=n.getContext(N,O);if(q!==null)return q}return null}try{const T={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${jd}`),n.addEventListener("webglcontextlost",ge,!1),n.addEventListener("webglcontextrestored",Te,!1),n.addEventListener("webglcontextcreationerror",Le,!1),P===null){const O=["webgl2","webgl","experimental-webgl"];if(c.isWebGL1Renderer===!0&&O.shift(),P=we(O,T),P===null)throw we(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ee,ae,Se,Ve,ye,be,lt,rt,mt,ct,He,Qe,Ft,b,M,V,te,re,ce,R,Q,z,fe,me;function _e(){Ee=new Ob(P),ae=new Rb(P,Ee,e),Ee.init(ae),z=new v2(P,Ee,ae),Se=new g2(P,Ee,ae),Ve=new zb(P),ye=new n2,be=new _2(P,Ee,Se,ye,ae,z,Ve),lt=new Lb(c),rt=new Nb(c),mt=new KT(P,ae),fe=new Cb(P,Ee,mt,ae),ct=new Fb(P,mt,Ve,fe),He=new Vb(P,ct,mt,Ve),ce=new Gb(P,ae,be),V=new Pb(ye),Qe=new t2(c,lt,rt,Ee,ae,fe,V),Ft=new M2(c,ye),b=new r2,M=new c2(Ee,ae),re=new Ab(c,lt,rt,Se,He,h,l),te=new m2(c,He,ae),me=new w2(P,Ve,ae,Se),R=new bb(P,Ee,Ve,ae),Q=new kb(P,Ee,Ve,ae),Ve.programs=Qe.programs,c.capabilities=ae,c.extensions=Ee,c.properties=ye,c.renderLists=b,c.shadowMap=te,c.state=Se,c.info=Ve}_e();const de=new E2(c,P);this.xr=de,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=Ee.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ee.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(T){T!==void 0&&(I=T,this.setSize(W,Y,!1))},this.getSize=function(T){return T.set(W,Y)},this.setSize=function(T,O,j=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,Y=O,n.width=Math.floor(T*I),n.height=Math.floor(O*I),j===!0&&(n.style.width=T+"px",n.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(W*I,Y*I).floor()},this.setDrawingBufferSize=function(T,O,j){W=T,Y=O,I=j,n.width=Math.floor(T*j),n.height=Math.floor(O*j),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(ee)},this.setViewport=function(T,O,j,N){T.isVector4?ee.set(T.x,T.y,T.z,T.w):ee.set(T,O,j,N),Se.viewport(D.copy(ee).multiplyScalar(I).floor())},this.getScissor=function(T){return T.copy(Z)},this.setScissor=function(T,O,j,N){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,O,j,N),Se.scissor(x.copy(Z).multiplyScalar(I).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(T){Se.setScissorTest(U=T)},this.setOpaqueSort=function(T){B=T},this.setTransparentSort=function(T){$=T},this.getClearColor=function(T){return T.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(T=!0,O=!0,j=!0){let N=0;T&&(N|=P.COLOR_BUFFER_BIT),O&&(N|=P.DEPTH_BUFFER_BIT),j&&(N|=P.STENCIL_BUFFER_BIT),P.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ge,!1),n.removeEventListener("webglcontextrestored",Te,!1),n.removeEventListener("webglcontextcreationerror",Le,!1),b.dispose(),M.dispose(),ye.dispose(),lt.dispose(),rt.dispose(),He.dispose(),fe.dispose(),me.dispose(),Qe.dispose(),de.dispose(),de.removeEventListener("sessionstart",ve),de.removeEventListener("sessionend",Ke),J&&(J.dispose(),J=null),Ze.stop()};function ge(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),g=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),g=!1;const T=Ve.autoReset,O=te.enabled,j=te.autoUpdate,N=te.needsUpdate,q=te.type;_e(),Ve.autoReset=T,te.enabled=O,te.autoUpdate=j,te.needsUpdate=N,te.type=q}function Le(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ft(T){const O=T.target;O.removeEventListener("dispose",ft),L(O)}function L(T){X(T),ye.remove(T)}function X(T){const O=ye.get(T).programs;O!==void 0&&(O.forEach(function(j){Qe.releaseProgram(j)}),T.isShaderMaterial&&Qe.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,j,N,q,xe){O===null&&(O=oe);const Me=q.isMesh&&q.matrixWorld.determinant()<0,Ae=ry(T,O,j,N,q);Se.setMaterial(N,Me);let Re=j.index,De=1;N.wireframe===!0&&(Re=ct.getWireframeAttribute(j),De=2);const Ue=j.drawRange,Ie=j.attributes.position;let Ye=Ue.start*De,Xt=(Ue.start+Ue.count)*De;xe!==null&&(Ye=Math.max(Ye,xe.start*De),Xt=Math.min(Xt,(xe.start+xe.count)*De)),Re!==null?(Ye=Math.max(Ye,0),Xt=Math.min(Xt,Re.count)):Ie!=null&&(Ye=Math.max(Ye,0),Xt=Math.min(Xt,Ie.count));const Nn=Xt-Ye;if(Nn<0||Nn===1/0)return;fe.setup(q,N,Ae,j,Re);let ir,gt=R;if(Re!==null&&(ir=mt.get(Re),gt=Q,gt.setIndex(ir)),q.isMesh)N.wireframe===!0?(Se.setLineWidth(N.wireframeLinewidth*se()),gt.setMode(P.LINES)):gt.setMode(P.TRIANGLES);else if(q.isLine){let ze=N.linewidth;ze===void 0&&(ze=1),Se.setLineWidth(ze*se()),q.isLineSegments?gt.setMode(P.LINES):q.isLineLoop?gt.setMode(P.LINE_LOOP):gt.setMode(P.LINE_STRIP)}else q.isPoints?gt.setMode(P.POINTS):q.isSprite&&gt.setMode(P.TRIANGLES);if(q.isInstancedMesh)gt.renderInstances(Ye,Nn,q.count);else if(j.isInstancedBufferGeometry){const ze=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Tu=Math.min(j.instanceCount,ze);gt.renderInstances(Ye,Nn,Tu)}else gt.render(Ye,Nn)},this.compile=function(T,O){function j(N,q,xe){N.transparent===!0&&N.side===xi&&N.forceSinglePass===!1?(N.side=an,N.needsUpdate=!0,sa(N,q,xe),N.side=Ji,N.needsUpdate=!0,sa(N,q,xe),N.side=xi):sa(N,q,xe)}y=M.get(T),y.init(),m.push(y),T.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(y.pushLight(N),N.castShadow&&y.pushShadow(N))}),y.setupLights(c.useLegacyLights),T.traverse(function(N){const q=N.material;if(q)if(Array.isArray(q))for(let xe=0;xe<q.length;xe++){const Me=q[xe];j(Me,T,N)}else j(q,T,N)}),m.pop(),y=null};let ne=null;function he(T){ne&&ne(T)}function ve(){Ze.stop()}function Ke(){Ze.start()}const Ze=new Z0;Ze.setAnimationLoop(he),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(T){ne=T,de.setAnimationLoop(T),T===null?Ze.stop():Ze.start()},de.addEventListener("sessionstart",ve),de.addEventListener("sessionend",Ke),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(g===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(O),O=de.getCamera()),T.isScene===!0&&T.onBeforeRender(c,T,O,S),y=M.get(T,m.length),y.init(),m.push(y),G.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),H.setFromProjectionMatrix(G),ue=this.localClippingEnabled,k=V.init(this.clippingPlanes,ue),p=b.get(T,v.length),p.init(),v.push(p),kt(T,O,0,c.sortObjects),p.finish(),c.sortObjects===!0&&p.sort(B,$),k===!0&&V.beginShadows();const j=y.state.shadowsArray;if(te.render(j,T,O),k===!0&&V.endShadows(),this.info.autoReset===!0&&this.info.reset(),re.render(p,T),y.setupLights(c.useLegacyLights),O.isArrayCamera){const N=O.cameras;for(let q=0,xe=N.length;q<xe;q++){const Me=N[q];Pi(p,T,Me,Me.viewport)}}else Pi(p,T,O);S!==null&&(be.updateMultisampleRenderTarget(S),be.updateRenderTargetMipmap(S)),T.isScene===!0&&T.onAfterRender(c,T,O),fe.resetDefaultState(),w=-1,C=null,m.pop(),m.length>0?y=m[m.length-1]:y=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function kt(T,O,j,N){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)y.pushLight(T),T.castShadow&&y.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||H.intersectsSprite(T)){N&&K.setFromMatrixPosition(T.matrixWorld).applyMatrix4(G);const Me=He.update(T),Ae=T.material;Ae.visible&&p.push(T,Me,Ae,j,K.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||H.intersectsObject(T))){T.isSkinnedMesh&&T.skeleton.frame!==Ve.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ve.render.frame);const Me=He.update(T),Ae=T.material;if(N&&(Me.boundingSphere===null&&Me.computeBoundingSphere(),K.copy(Me.boundingSphere.center).applyMatrix4(T.matrixWorld).applyMatrix4(G)),Array.isArray(Ae)){const Re=Me.groups;for(let De=0,Ue=Re.length;De<Ue;De++){const Ie=Re[De],Ye=Ae[Ie.materialIndex];Ye&&Ye.visible&&p.push(T,Me,Ye,j,K.z,Ie)}}else Ae.visible&&p.push(T,Me,Ae,j,K.z,null)}}const xe=T.children;for(let Me=0,Ae=xe.length;Me<Ae;Me++)kt(xe[Me],O,j,N)}function Pi(T,O,j,N){const q=T.opaque,xe=T.transmissive,Me=T.transparent;y.setupLightsView(j),k===!0&&V.setGlobalState(c.clippingPlanes,j),xe.length>0&&dt(q,xe,O,j),N&&Se.viewport(D.copy(N)),q.length>0&&wn(q,O,j),xe.length>0&&wn(xe,O,j),Me.length>0&&wn(Me,O,j),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function dt(T,O,j,N){if(J===null){const Ae=ae.isWebGL2;J=new Lr(1024,1024,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?$s:Pr,minFilter:Ws,samples:Ae&&a===!0?4:0})}const q=c.getRenderTarget();c.setRenderTarget(J),c.clear();const xe=c.toneMapping;c.toneMapping=wi,wn(T,j,N),be.updateMultisampleRenderTarget(J),be.updateRenderTargetMipmap(J);let Me=!1;for(let Ae=0,Re=O.length;Ae<Re;Ae++){const De=O[Ae],Ue=De.object,Ie=De.geometry,Ye=De.material,Xt=De.group;if(Ye.side===xi&&Ue.layers.test(N.layers)){const Nn=Ye.side;Ye.side=an,Ye.needsUpdate=!0,Zn(Ue,j,N,Ie,Ye,Xt),Ye.side=Nn,Ye.needsUpdate=!0,Me=!0}}Me===!0&&(be.updateMultisampleRenderTarget(J),be.updateRenderTargetMipmap(J)),c.setRenderTarget(q),c.toneMapping=xe}function wn(T,O,j){const N=O.isScene===!0?O.overrideMaterial:null;for(let q=0,xe=T.length;q<xe;q++){const Me=T[q],Ae=Me.object,Re=Me.geometry,De=N===null?Me.material:N,Ue=Me.group;Ae.layers.test(j.layers)&&Zn(Ae,O,j,Re,De,Ue)}}function Zn(T,O,j,N,q,xe){T.onBeforeRender(c,O,j,N,q,xe),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(c,O,j,N,T,xe),q.transparent===!0&&q.side===xi&&q.forceSinglePass===!1?(q.side=an,q.needsUpdate=!0,c.renderBufferDirect(j,O,N,q,T,xe),q.side=Ji,q.needsUpdate=!0,c.renderBufferDirect(j,O,N,q,T,xe),q.side=xi):c.renderBufferDirect(j,O,N,q,T,xe),T.onAfterRender(c,O,j,N,q,xe)}function sa(T,O,j){O.isScene!==!0&&(O=oe);const N=ye.get(T),q=y.state.lights,xe=y.state.shadowsArray,Me=q.state.version,Ae=Qe.getParameters(T,q.state,xe,O,j),Re=Qe.getProgramCacheKey(Ae);let De=N.programs;N.environment=T.isMeshStandardMaterial?O.environment:null,N.fog=O.fog,N.envMap=(T.isMeshStandardMaterial?rt:lt).get(T.envMap||N.environment),De===void 0&&(T.addEventListener("dispose",ft),De=new Map,N.programs=De);let Ue=De.get(Re);if(Ue!==void 0){if(N.currentProgram===Ue&&N.lightsStateVersion===Me)return Zd(T,Ae),Ue}else Ae.uniforms=Qe.getUniforms(T),T.onBuild(j,Ae,c),T.onBeforeCompile(Ae,c),Ue=Qe.acquireProgram(Ae,Re),De.set(Re,Ue),N.uniforms=Ae.uniforms;const Ie=N.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ie.clippingPlanes=V.uniform),Zd(T,Ae),N.needsLights=sy(T),N.lightsStateVersion=Me,N.needsLights&&(Ie.ambientLightColor.value=q.state.ambient,Ie.lightProbe.value=q.state.probe,Ie.directionalLights.value=q.state.directional,Ie.directionalLightShadows.value=q.state.directionalShadow,Ie.spotLights.value=q.state.spot,Ie.spotLightShadows.value=q.state.spotShadow,Ie.rectAreaLights.value=q.state.rectArea,Ie.ltc_1.value=q.state.rectAreaLTC1,Ie.ltc_2.value=q.state.rectAreaLTC2,Ie.pointLights.value=q.state.point,Ie.pointLightShadows.value=q.state.pointShadow,Ie.hemisphereLights.value=q.state.hemi,Ie.directionalShadowMap.value=q.state.directionalShadowMap,Ie.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ie.spotShadowMap.value=q.state.spotShadowMap,Ie.spotLightMatrix.value=q.state.spotLightMatrix,Ie.spotLightMap.value=q.state.spotLightMap,Ie.pointShadowMap.value=q.state.pointShadowMap,Ie.pointShadowMatrix.value=q.state.pointShadowMatrix);const Ye=Ue.getUniforms(),Xt=cl.seqWithValue(Ye.seq,Ie);return N.currentProgram=Ue,N.uniformsList=Xt,Ue}function Zd(T,O){const j=ye.get(T);j.outputColorSpace=O.outputColorSpace,j.instancing=O.instancing,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}function ry(T,O,j,N,q){O.isScene!==!0&&(O=oe),be.resetTextureUnits();const xe=O.fog,Me=N.isMeshStandardMaterial?O.environment:null,Ae=S===null?c.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Kn,Re=(N.isMeshStandardMaterial?rt:lt).get(N.envMap||Me),De=N.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ue=!!N.normalMap&&!!j.attributes.tangent,Ie=!!j.morphAttributes.position,Ye=!!j.morphAttributes.normal,Xt=!!j.morphAttributes.color,Nn=N.toneMapped?c.toneMapping:wi,ir=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,gt=ir!==void 0?ir.length:0,ze=ye.get(N),Tu=y.state.lights;if(k===!0&&(ue===!0||T!==C)){const cn=T===C&&N.id===w;V.setState(N,T,cn)}let At=!1;N.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Tu.state.version||ze.outputColorSpace!==Ae||q.isInstancedMesh&&ze.instancing===!1||!q.isInstancedMesh&&ze.instancing===!0||q.isSkinnedMesh&&ze.skinning===!1||!q.isSkinnedMesh&&ze.skinning===!0||ze.envMap!==Re||N.fog===!0&&ze.fog!==xe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==V.numPlanes||ze.numIntersection!==V.numIntersection)||ze.vertexAlphas!==De||ze.vertexTangents!==Ue||ze.morphTargets!==Ie||ze.morphNormals!==Ye||ze.morphColors!==Xt||ze.toneMapping!==Nn||ae.isWebGL2===!0&&ze.morphTargetsCount!==gt)&&(At=!0):(At=!0,ze.__version=N.version);let rr=ze.currentProgram;At===!0&&(rr=sa(N,O,q));let Qd=!1,jo=!1,Au=!1;const jt=rr.getUniforms(),or=ze.uniforms;if(Se.useProgram(rr.program)&&(Qd=!0,jo=!0,Au=!0),N.id!==w&&(w=N.id,jo=!0),Qd||C!==T){if(jt.setValue(P,"projectionMatrix",T.projectionMatrix),ae.logarithmicDepthBuffer&&jt.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),C!==T&&(C=T,jo=!0,Au=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const cn=jt.map.cameraPosition;cn!==void 0&&cn.setValue(P,K.setFromMatrixPosition(T.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&jt.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||q.isSkinnedMesh)&&jt.setValue(P,"viewMatrix",T.matrixWorldInverse)}if(q.isSkinnedMesh){jt.setOptional(P,q,"bindMatrix"),jt.setOptional(P,q,"bindMatrixInverse");const cn=q.skeleton;cn&&(ae.floatVertexTextures?(cn.boneTexture===null&&cn.computeBoneTexture(),jt.setValue(P,"boneTexture",cn.boneTexture,be),jt.setValue(P,"boneTextureSize",cn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Cu=j.morphAttributes;if((Cu.position!==void 0||Cu.normal!==void 0||Cu.color!==void 0&&ae.isWebGL2===!0)&&ce.update(q,j,rr),(jo||ze.receiveShadow!==q.receiveShadow)&&(ze.receiveShadow=q.receiveShadow,jt.setValue(P,"receiveShadow",q.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(or.envMap.value=Re,or.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),jo&&(jt.setValue(P,"toneMappingExposure",c.toneMappingExposure),ze.needsLights&&oy(or,Au),xe&&N.fog===!0&&Ft.refreshFogUniforms(or,xe),Ft.refreshMaterialUniforms(or,N,I,Y,J),cl.upload(P,ze.uniformsList,or,be)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(cl.upload(P,ze.uniformsList,or,be),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&jt.setValue(P,"center",q.center),jt.setValue(P,"modelViewMatrix",q.modelViewMatrix),jt.setValue(P,"normalMatrix",q.normalMatrix),jt.setValue(P,"modelMatrix",q.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const cn=N.uniformsGroups;for(let bu=0,ay=cn.length;bu<ay;bu++)if(ae.isWebGL2){const Jd=cn[bu];me.update(Jd,rr),me.bind(Jd,rr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return rr}function oy(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function sy(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(T,O,j){ye.get(T.texture).__webglTexture=O,ye.get(T.depthTexture).__webglTexture=j;const N=ye.get(T);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=j===void 0,N.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,O){const j=ye.get(T);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,j=0){S=T,_=O,E=j;let N=!0,q=null,xe=!1,Me=!1;if(T){const Re=ye.get(T);Re.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(P.FRAMEBUFFER,null),N=!1):Re.__webglFramebuffer===void 0?be.setupRenderTarget(T):Re.__hasExternalTextures&&be.rebindTextures(T,ye.get(T.texture).__webglTexture,ye.get(T.depthTexture).__webglTexture);const De=T.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Me=!0);const Ue=ye.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(q=Ue[O],xe=!0):ae.isWebGL2&&T.samples>0&&be.useMultisampledRTT(T)===!1?q=ye.get(T).__webglMultisampledFramebuffer:q=Ue,D.copy(T.viewport),x.copy(T.scissor),A=T.scissorTest}else D.copy(ee).multiplyScalar(I).floor(),x.copy(Z).multiplyScalar(I).floor(),A=U;if(Se.bindFramebuffer(P.FRAMEBUFFER,q)&&ae.drawBuffers&&N&&Se.drawBuffers(T,q),Se.viewport(D),Se.scissor(x),Se.setScissorTest(A),xe){const Re=ye.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,Re.__webglTexture,j)}else if(Me){const Re=ye.get(T.texture),De=O||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Re.__webglTexture,j||0,De)}w=-1},this.readRenderTargetPixels=function(T,O,j,N,q,xe,Me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=ye.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae){Se.bindFramebuffer(P.FRAMEBUFFER,Ae);try{const Re=T.texture,De=Re.format,Ue=Re.type;if(De!==Xn&&z.convert(De)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Ue===$s&&(Ee.has("EXT_color_buffer_half_float")||ae.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ue!==Pr&&z.convert(Ue)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===vr&&(ae.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-N&&j>=0&&j<=T.height-q&&P.readPixels(O,j,N,q,z.convert(De),z.convert(Ue),xe)}finally{const Re=S!==null?ye.get(S).__webglFramebuffer:null;Se.bindFramebuffer(P.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(T,O,j=0){const N=Math.pow(2,-j),q=Math.floor(O.image.width*N),xe=Math.floor(O.image.height*N);be.setTexture2D(O,0),P.copyTexSubImage2D(P.TEXTURE_2D,j,0,0,T.x,T.y,q,xe),Se.unbindTexture()},this.copyTextureToTexture=function(T,O,j,N=0){const q=O.image.width,xe=O.image.height,Me=z.convert(j.format),Ae=z.convert(j.type);be.setTexture2D(j,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,j.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,j.unpackAlignment),O.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,N,T.x,T.y,q,xe,Me,Ae,O.image.data):O.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,N,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,Me,O.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,N,T.x,T.y,Me,Ae,O.image),N===0&&j.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(T,O,j,N,q=0){if(c.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=T.max.x-T.min.x+1,Me=T.max.y-T.min.y+1,Ae=T.max.z-T.min.z+1,Re=z.convert(N.format),De=z.convert(N.type);let Ue;if(N.isData3DTexture)be.setTexture3D(N,0),Ue=P.TEXTURE_3D;else if(N.isDataArrayTexture)be.setTexture2DArray(N,0),Ue=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const Ie=P.getParameter(P.UNPACK_ROW_LENGTH),Ye=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Xt=P.getParameter(P.UNPACK_SKIP_PIXELS),Nn=P.getParameter(P.UNPACK_SKIP_ROWS),ir=P.getParameter(P.UNPACK_SKIP_IMAGES),gt=j.isCompressedTexture?j.mipmaps[0]:j.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,gt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,gt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,T.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,T.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,T.min.z),j.isDataTexture||j.isData3DTexture?P.texSubImage3D(Ue,q,O.x,O.y,O.z,xe,Me,Ae,Re,De,gt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Ue,q,O.x,O.y,O.z,xe,Me,Ae,Re,gt.data)):P.texSubImage3D(Ue,q,O.x,O.y,O.z,xe,Me,Ae,Re,De,gt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ie),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ye),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Xt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Nn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ir),q===0&&N.generateMipmaps&&P.generateMipmap(Ue),Se.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?be.setTextureCube(T,0):T.isData3DTexture?be.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?be.setTexture2DArray(T,0):be.setTexture2D(T,0),Se.unbindTexture()},this.resetState=function(){_=0,E=0,S=null,Se.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ce?Er:F0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Er?Ce:Kn}}class A2 extends ny{}A2.prototype.isWebGL1Renderer=!0;class C2 extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const xg={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class b2{constructor(e,n,i){const r=this;let o=!1,s=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(f){a++,o===!1&&r.onStart!==void 0&&r.onStart(f,s,a),o=!0},this.itemEnd=function(f){s++,r.onProgress!==void 0&&r.onProgress(f,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,d){return u.push(f,d),this},this.removeHandler=function(f){const d=u.indexOf(f);return d!==-1&&u.splice(d,2),this},this.getHandler=function(f){for(let d=0,h=u.length;d<h;d+=2){const p=u[d],y=u[d+1];if(p.global&&(p.lastIndex=0),p.test(f))return y}return null}}}const R2=new b2;class iy{constructor(e){this.manager=e!==void 0?e:R2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,o){i.load(e,r,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class P2 extends iy{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=xg.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){n&&n(s),o.manager.itemEnd(e)},0),s;const a=Xs("img");function l(){f(),xg.add(e,this),n&&n(this),o.manager.itemEnd(e)}function u(d){f(),r&&r(d),o.manager.itemError(e),o.manager.itemEnd(e)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class Sg extends iy{constructor(e){super(e)}load(e,n,i,r){const o=new ln,s=new P2(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,n!==void 0&&n(o)},i,r),o}}class Eg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Zt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jd);const Mg={type:"change"},Nc={type:"start"},wg={type:"end"};class L2 extends Or{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zr.ROTATE,MIDDLE:zr.DOLLY,RIGHT:zr.PAN},this.touches={ONE:Br.ROTATE,TWO:Br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",Qe),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Qe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Mg),i.update(),o=r.NONE},this.update=function(){const R=new F,Q=new Dr().setFromUnitVectors(e.up,new F(0,1,0)),z=Q.clone().invert(),fe=new F,me=new Dr,_e=2*Math.PI;return function(){const ge=i.object.position;R.copy(ge).sub(i.target),R.applyQuaternion(Q),a.setFromVector3(R),i.autoRotate&&o===r.NONE&&x(C()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Te=i.minAzimuthAngle,Le=i.maxAzimuthAngle;return isFinite(Te)&&isFinite(Le)&&(Te<-Math.PI?Te+=_e:Te>Math.PI&&(Te-=_e),Le<-Math.PI?Le+=_e:Le>Math.PI&&(Le-=_e),Te<=Le?a.theta=Math.max(Te,Math.min(Le,a.theta)):a.theta=a.theta>(Te+Le)/2?Math.max(Te,a.theta):Math.min(Le,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),R.setFromSpherical(a),R.applyQuaternion(z),ge.copy(i.target).add(R),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0)),u=1,d||fe.distanceToSquared(i.object.position)>s||8*(1-me.dot(i.object.quaternion))>s?(i.dispatchEvent(Mg),fe.copy(i.object.position),me.copy(i.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",M),i.domElement.removeEventListener("pointerdown",be),i.domElement.removeEventListener("pointercancel",rt),i.domElement.removeEventListener("wheel",He),i.domElement.removeEventListener("pointermove",lt),i.domElement.removeEventListener("pointerup",rt),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Qe),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const s=1e-6,a=new Eg,l=new Eg;let u=1;const f=new F;let d=!1;const h=new Fe,p=new Fe,y=new Fe,v=new Fe,m=new Fe,c=new Fe,g=new Fe,_=new Fe,E=new Fe,S=[],w={};function C(){return 2*Math.PI/60/60*i.autoRotateSpeed}function D(){return Math.pow(.95,i.zoomSpeed)}function x(R){l.theta-=R}function A(R){l.phi-=R}const W=function(){const R=new F;return function(z,fe){R.setFromMatrixColumn(fe,0),R.multiplyScalar(-z),f.add(R)}}(),Y=function(){const R=new F;return function(z,fe){i.screenSpacePanning===!0?R.setFromMatrixColumn(fe,1):(R.setFromMatrixColumn(fe,0),R.crossVectors(i.object.up,R)),R.multiplyScalar(z),f.add(R)}}(),I=function(){const R=new F;return function(z,fe){const me=i.domElement;if(i.object.isPerspectiveCamera){const _e=i.object.position;R.copy(_e).sub(i.target);let de=R.length();de*=Math.tan(i.object.fov/2*Math.PI/180),W(2*z*de/me.clientHeight,i.object.matrix),Y(2*fe*de/me.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(W(z*(i.object.right-i.object.left)/i.object.zoom/me.clientWidth,i.object.matrix),Y(fe*(i.object.top-i.object.bottom)/i.object.zoom/me.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function B(R){i.object.isPerspectiveCamera?u/=R:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*R)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(R){i.object.isPerspectiveCamera?u*=R:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/R)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ee(R){h.set(R.clientX,R.clientY)}function Z(R){g.set(R.clientX,R.clientY)}function U(R){v.set(R.clientX,R.clientY)}function H(R){p.set(R.clientX,R.clientY),y.subVectors(p,h).multiplyScalar(i.rotateSpeed);const Q=i.domElement;x(2*Math.PI*y.x/Q.clientHeight),A(2*Math.PI*y.y/Q.clientHeight),h.copy(p),i.update()}function k(R){_.set(R.clientX,R.clientY),E.subVectors(_,g),E.y>0?B(D()):E.y<0&&$(D()),g.copy(_),i.update()}function ue(R){m.set(R.clientX,R.clientY),c.subVectors(m,v).multiplyScalar(i.panSpeed),I(c.x,c.y),v.copy(m),i.update()}function J(R){R.deltaY<0?$(D()):R.deltaY>0&&B(D()),i.update()}function G(R){let Q=!1;switch(R.code){case i.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?A(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(0,i.keyPanSpeed),Q=!0;break;case i.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?A(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(0,-i.keyPanSpeed),Q=!0;break;case i.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?x(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(i.keyPanSpeed,0),Q=!0;break;case i.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?x(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(-i.keyPanSpeed,0),Q=!0;break}Q&&(R.preventDefault(),i.update())}function K(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const R=.5*(S[0].pageX+S[1].pageX),Q=.5*(S[0].pageY+S[1].pageY);h.set(R,Q)}}function oe(){if(S.length===1)v.set(S[0].pageX,S[0].pageY);else{const R=.5*(S[0].pageX+S[1].pageX),Q=.5*(S[0].pageY+S[1].pageY);v.set(R,Q)}}function se(){const R=S[0].pageX-S[1].pageX,Q=S[0].pageY-S[1].pageY,z=Math.sqrt(R*R+Q*Q);g.set(0,z)}function P(){i.enableZoom&&se(),i.enablePan&&oe()}function we(){i.enableZoom&&se(),i.enableRotate&&K()}function Ee(R){if(S.length==1)p.set(R.pageX,R.pageY);else{const z=ce(R),fe=.5*(R.pageX+z.x),me=.5*(R.pageY+z.y);p.set(fe,me)}y.subVectors(p,h).multiplyScalar(i.rotateSpeed);const Q=i.domElement;x(2*Math.PI*y.x/Q.clientHeight),A(2*Math.PI*y.y/Q.clientHeight),h.copy(p)}function ae(R){if(S.length===1)m.set(R.pageX,R.pageY);else{const Q=ce(R),z=.5*(R.pageX+Q.x),fe=.5*(R.pageY+Q.y);m.set(z,fe)}c.subVectors(m,v).multiplyScalar(i.panSpeed),I(c.x,c.y),v.copy(m)}function Se(R){const Q=ce(R),z=R.pageX-Q.x,fe=R.pageY-Q.y,me=Math.sqrt(z*z+fe*fe);_.set(0,me),E.set(0,Math.pow(_.y/g.y,i.zoomSpeed)),B(E.y),g.copy(_)}function Ve(R){i.enableZoom&&Se(R),i.enablePan&&ae(R)}function ye(R){i.enableZoom&&Se(R),i.enableRotate&&Ee(R)}function be(R){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(R.pointerId),i.domElement.addEventListener("pointermove",lt),i.domElement.addEventListener("pointerup",rt)),V(R),R.pointerType==="touch"?Ft(R):mt(R))}function lt(R){i.enabled!==!1&&(R.pointerType==="touch"?b(R):ct(R))}function rt(R){te(R),S.length===0&&(i.domElement.releasePointerCapture(R.pointerId),i.domElement.removeEventListener("pointermove",lt),i.domElement.removeEventListener("pointerup",rt)),i.dispatchEvent(wg),o=r.NONE}function mt(R){let Q;switch(R.button){case 0:Q=i.mouseButtons.LEFT;break;case 1:Q=i.mouseButtons.MIDDLE;break;case 2:Q=i.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case zr.DOLLY:if(i.enableZoom===!1)return;Z(R),o=r.DOLLY;break;case zr.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enablePan===!1)return;U(R),o=r.PAN}else{if(i.enableRotate===!1)return;ee(R),o=r.ROTATE}break;case zr.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enableRotate===!1)return;ee(R),o=r.ROTATE}else{if(i.enablePan===!1)return;U(R),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Nc)}function ct(R){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;H(R);break;case r.DOLLY:if(i.enableZoom===!1)return;k(R);break;case r.PAN:if(i.enablePan===!1)return;ue(R);break}}function He(R){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(R.preventDefault(),i.dispatchEvent(Nc),J(R),i.dispatchEvent(wg))}function Qe(R){i.enabled===!1||i.enablePan===!1||G(R)}function Ft(R){switch(re(R),S.length){case 1:switch(i.touches.ONE){case Br.ROTATE:if(i.enableRotate===!1)return;K(),o=r.TOUCH_ROTATE;break;case Br.PAN:if(i.enablePan===!1)return;oe(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case Br.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;P(),o=r.TOUCH_DOLLY_PAN;break;case Br.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;we(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Nc)}function b(R){switch(re(R),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ee(R),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ae(R),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ve(R),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ye(R),i.update();break;default:o=r.NONE}}function M(R){i.enabled!==!1&&R.preventDefault()}function V(R){S.push(R)}function te(R){delete w[R.pointerId];for(let Q=0;Q<S.length;Q++)if(S[Q].pointerId==R.pointerId){S.splice(Q,1);return}}function re(R){let Q=w[R.pointerId];Q===void 0&&(Q=new Fe,w[R.pointerId]=Q),Q.set(R.pageX,R.pageY)}function ce(R){const Q=R.pointerId===S[0].pointerId?S[1]:S[0];return w[Q.pointerId]}i.domElement.addEventListener("contextmenu",M),i.domElement.addEventListener("pointerdown",be),i.domElement.addEventListener("pointercancel",rt),i.domElement.addEventListener("wheel",He,{passive:!1}),this.update()}}const D2=t=>ht.jsxs("div",{className:"grid-item",children:[ht.jsx("div",{className:"sceneElement"}),ht.jsx("div",{className:"titleElement",children:t.title.toUpperCase()}),ht.jsx("div",{className:"descriptionElement",children:t.description.map((e,n)=>ht.jsx("p",{children:e},n))})]}),U2=()=>{const[t,e]=ke.useState([]),[n,i]=ke.useState(null);//! Retrieve paintings list
ke.useEffect(()=>{fetch("/paintings.json").then(r=>r.json()).then(r=>e(r.paintings))},[]);//! Setup renderer
ke.useEffect(()=>{const r=document.getElementById("webgl");i(o=>new ny({canvas:r,antialias:!0}))},[]);//! Setup scenes
return ke.useEffect(()=>{if(!n||!t)return;n.outputColorSpace=Kn;const r=document.getElementById("webgl");n.setClearColor(16777215,0),n.setPixelRatio(window.devicePixelRatio);const o=document.getElementsByClassName("sceneElement"),s=[];function a(){for(let d=0;d<t.length;d++){let h=function(c,g){const _=Math.max(c.image.width,c.image.height)*1.05,E=c.image.width/_,S=c.image.height/_;let w="black";t[d].frame&&(w=t[d].frame),g===null?g={color:w}:g={map:g};const C=new mn(new si(E,S,.025),[new Ge({color:w}),new Ge({color:w}),new Ge({color:w}),new Ge({color:w}),new Ge({map:c}),new Ge(g)]);if(t[d].frame){let D=new tt(w);D=D.offsetHSL(0,0,-.3),D=`#${D.getHexString()}`;const x=.05,A=.07,W=new mn(new si(E,x,A),[new Ge({color:w}),new Ge({color:w}),new Ge({color:w}),new Ge({color:D}),new Ge({color:w}),new Ge({color:w})]);W.position.y=S/2+x/2;const Y=new mn(new si(E,x,A),[new Ge({color:w}),new Ge({color:w}),new Ge({color:D}),new Ge({color:w}),new Ge({color:w}),new Ge({color:w})]);Y.position.y=-1*(S/2+x/2);const I=new mn(new si(x,S+2*x,A),[new Ge({color:D}),new Ge({color:w}),new Ge({color:w}),new Ge({color:w}),new Ge({color:w}),new Ge({color:w})]);I.position.x=-1*(E/2+x/2);const B=new mn(new si(x,S+2*x,A),[new Ge({color:w}),new Ge({color:D}),new Ge({color:w}),new Ge({color:w}),new Ge({color:w}),new Ge({color:w})]);B.position.x=E/2+x/2,y.add(W),y.add(Y),y.add(I),y.add(B)}y.add(C)},p=function(c){t[d].backImg||h(c,null),new Sg().load(t[d].backImg,g=>h(c,g))};const y=new C2;y.userData.element=o[d];const v=new Rn(50,1,.1,10);v.position.z=1.25,y.userData.camera=v;const m=new L2(y.userData.camera,y.userData.element);m.minDistance=1,m.maxDistance=3,m.enablePan=!1,m.enableZoom=!0,m.autoRotate=!0,m.autoRotateSpeed=.5,m.enableDamping=!0,y.userData.controls=m,new Sg().load(t[d].frontImg,c=>p(c)),s.push(y)}}const l=()=>{const d=r.clientWidth,h=r.clientHeight;(r.width!==d||r.height!==h)&&n.setSize(d,h,!1)},u=()=>{l(),r.style.transform=`translateY(${window.scrollY}px)`,n.setClearColor(16777215,0),n.setScissorTest(!1),n.clear(),n.setClearColor(14737632,0),n.setScissorTest(!0),s.forEach(d=>{const p=d.userData.element.getBoundingClientRect();if(p.bottom<0||p.top>n.domElement.clientHeight||p.right<0||p.left>n.domElement.clientWidth)return;const y=p.right-p.left,v=p.bottom-p.top,m=p.left,c=n.domElement.clientHeight-p.bottom;n.setViewport(m,c,y,v),n.setScissor(m,c,y,v);const g=d.userData.camera;d.userData.controls.update(),n.render(d,g)})},f=()=>{u(),requestAnimationFrame(f)};a(),f()},[t,n]),ht.jsxs(v0,{style:{paddingTop:"2rem"},children:[ht.jsx(P0,{src:"./title.png"}),ht.jsx("canvas",{id:"webgl"}),ht.jsx(Gl,{style:{marginTop:"2rem"},children:t.map((r,o)=>ht.jsx(Gl.Col,{xl:4,children:ht.jsx(D2,{title:r.title,description:r.description})},o))}),ht.jsxs("footer",{children:[ht.jsx("h5",{children:"flashpointartshop@gmail.com"}),ht.jsx("h5",{children:"‍(0039) ‍339 ‍107 ‍6327"}),ht.jsx("h5",{children:"Copyright 2021 Flashpoint Art"}),ht.jsx("h5",{children:"P.IVA: ‍01238430316"}),ht.jsx("h5",{children:"flashpointart@pec.it"}),ht.jsx("br",{})]})]})};Oc.createRoot(document.getElementById("root")).render(ht.jsx(qe.StrictMode,{children:ht.jsx(l0,{withGlobalStyles:!0,withNormalizeCSS:!0,theme:{colorScheme:"dark",globalStyles:t=>({body:{backgroundColor:"#000bdf"}})},children:ht.jsx(U2,{})})}));
