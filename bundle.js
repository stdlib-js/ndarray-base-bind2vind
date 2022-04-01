// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).bind2vind=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,a=i.toString,o=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,f=i.__lookupSetter__;var s=function(r,e,t){var n,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,p="set"in t,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},l=n,p=s,v=t()?l:p;var g=function(r,e,t){v(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=g;var m=function(r){return"string"==typeof r};var h=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var b=function(){return h&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,y=w;var E=function(r){return y.call(r)},j=Object.prototype.hasOwnProperty;var P=function(r,e){return null!=r&&j.call(r,e)},_="function"==typeof Symbol?Symbol.toStringTag:"",x=P,T=_,O=w;var V=E,S=function(r){var e,t,n;if(null==r)return O.call(r);t=r[T],e=x(r,T);try{r[T]=void 0}catch(e){return O.call(r)}return n=O.call(r),e?r[T]=t:delete r[T],n},k=b()?S:V,I=String.prototype.valueOf;var A=k,R=function(r){try{return I.call(r),!0}catch(r){return!1}},$=b();var F=function(r){return"object"==typeof r&&(r instanceof String||($?R(r):"[object String]"===A(r)))},M=m,N=F;var C=d,B=function(r){return M(r)||N(r)},G=F;C(B,"isPrimitive",m),C(B,"isObject",G);var L=B,Z=Math.floor,W=Z;var X=function(r){return W(r)===r},z=X;var U=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&z(r.length)&&r.length>=0&&r.length<=9007199254740991};var Y=function(r){return"number"==typeof r},D=Number,q=D.prototype.toString;var H=k,J=D,K=function(r){try{return q.call(r),!0}catch(r){return!1}},Q=b();var rr=function(r){return"object"==typeof r&&(r instanceof J||(Q?K(r):"[object Number]"===H(r)))},er=Y,tr=rr;var nr=d,ir=function(r){return er(r)||tr(r)},ar=rr;nr(ir,"isPrimitive",Y),nr(ir,"isObject",ar);var or=ir,ur=Number.POSITIVE_INFINITY,cr=D.NEGATIVE_INFINITY,fr=ur,sr=cr,lr=X;var pr=function(r){return r<fr&&r>sr&&lr(r)},vr=or.isPrimitive,gr=pr;var dr=function(r){return vr(r)&&gr(r)},mr=or.isObject,hr=pr;var br=function(r){return mr(r)&&hr(r.valueOf())},wr=dr,yr=br;var Er=d,jr=function(r){return wr(r)||yr(r)},Pr=br;Er(jr,"isPrimitive",dr),Er(jr,"isObject",Pr);var _r=jr;var xr=function(r){return r!=r},Tr=or.isPrimitive,Or=xr;var Vr=function(r){return Tr(r)&&Or(r)},Sr=or.isObject,kr=xr;var Ir=function(r){return Sr(r)&&kr(r.valueOf())},Ar=Vr,Rr=Ir;var $r=d,Fr=function(r){return Ar(r)||Rr(r)},Mr=Ir;$r(Fr,"isPrimitive",Vr),$r(Fr,"isObject",Mr);var Nr=U,Cr=_r.isPrimitive,Br=L.isPrimitive,Gr=Fr.isPrimitive;var Lr=function(r,e,t){var n,i,a;if(!Nr(r)&&!Br(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Cr(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Br(r)){if(!Br(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Gr(e)){for(a=i;a<n;a++)if(Gr(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},Zr=Lr,Wr=L.isPrimitive;var Xr=function(r){if(!Wr(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},zr=L.isPrimitive;var Ur=function(r){if(!zr(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Yr=Xr,Dr=Ur,qr=L.isPrimitive;var Hr=function(r){return qr(r)&&r===Dr(r)&&r!==Yr(r)},Jr=ur,Kr=cr;var Qr=function(r){return r==r&&r>Kr&&r<Jr},re=_r.isPrimitive;var ee=function(r){return re(r)&&r>=0},te=_r.isObject;var ne=function(r){return te(r)&&r.valueOf()>=0},ie=ee,ae=ne;var oe=d,ue=function(r){return ie(r)||ae(r)},ce=ne;oe(ue,"isPrimitive",ee),oe(ue,"isObject",ce);var fe=ue.isPrimitive,se=L.isPrimitive;var le=function(r,e){var t,n;if(!se(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!fe(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},pe=_r.isPrimitive,ve=L.isPrimitive;var ge=function(r,e,t){var n,i;if(!ve(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!ve(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!pe(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},de=le,me=ge;var he=function(r,e,t){var n=!1,i=e-r.length;return i<0||(me(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+de("0",i):de("0",i)+r,n&&(r="-"+r)),r},be=Hr,we=Ur,ye=Xr,Ee=Qr,je=or.isPrimitive,Pe=he;var _e=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!Ee(n)){if(!je(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Pe(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Pe(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=be(r.specifier)?we(t):ye(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},xe=L.isPrimitive,Te=/[-\/\\^$*+?.()|[\]{}]/g;var Oe=function(r){var e,t;if(!xe(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Te,"\\$&"):(e=(e=r.substring(1,t)).replace(Te,"\\$&"),r=r[0]+e+r.substring(t))},Ve=/./;var Se=function(r){return"boolean"==typeof r},ke=Boolean.prototype.toString;var Ie=k,Ae=function(r){try{return ke.call(r),!0}catch(r){return!1}},Re=b();var $e=function(r){return"object"==typeof r&&(r instanceof Boolean||(Re?Ae(r):"[object Boolean]"===Ie(r)))},Fe=Se,Me=$e;var Ne=d,Ce=function(r){return Fe(r)||Me(r)},Be=$e;Ne(Ce,"isPrimitive",Se),Ne(Ce,"isObject",Be);var Ge=Ce;var Le=function(){return new Function("return this;")()},Ze="object"==typeof self?self:null,We="object"==typeof window?window:null,Xe="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ze="object"==typeof Xe?Xe:null;module.exports=ze;var Ue=Ge.isPrimitive,Ye=Le,De=Ze,qe=We,He=r(Object.freeze({__proto__:null}));var Je=function(r){if(arguments.length){if(!Ue(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Ye()}if(De)return De;if(qe)return qe;if(He)return He;throw new Error("unexpected error. Unable to resolve global object.")},Ke=Je(),Qe=Ke.document&&Ke.document.childNodes,rt=Int8Array,et=Ve,tt=Qe,nt=rt;var it=function(){return"function"==typeof et||"object"==typeof nt||"function"==typeof tt};var at=function(){return/^\s*function\s*([^(]*)/i},ot=at;d(ot,"REGEXP",at());var ut=ot,ct=k;var ft=Array.isArray?Array.isArray:function(r){return"[object Array]"===ct(r)};var st=function(r){return null!==r&&"object"==typeof r};d(st,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!ft(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(st));var lt=st;var pt=k,vt=ut.REGEXP,gt=function(r){return lt(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var dt=function(r){var e,t,n;if(("Object"===(t=pt(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=vt.exec(n.toString()))return e[1]}return gt(r)?"Buffer":t},mt=dt;var ht=dt;var bt=function(r){var e;return null===r?"null":"object"===(e=typeof r)?mt(r).toLowerCase():e},wt=function(r){return ht(r).toLowerCase()},yt=it()?wt:bt;var Et=function(r){return"function"===yt(r)},jt=RegExp.prototype.exec;var Pt=k,_t=function(r){try{return jt.call(r),!0}catch(r){return!1}},xt=b();var Tt=Oe,Ot=Et,Vt=L.isPrimitive,St=function(r){return"object"==typeof r&&(r instanceof RegExp||(xt?_t(r):"[object RegExp]"===Pt(r)))};var kt=function(r){return Math.abs(r)},It=Hr,At=Ur,Rt=Xr,$t=function(r,e,t){if(!Vt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Vt(e))e=Tt(e),e=new RegExp(e,"g");else if(!St(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Vt(t)&&!Ot(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Ft=Qr,Mt=or.isPrimitive,Nt=kt,Ct=/e\+(\d)$/,Bt=/e-(\d)$/,Gt=/^(\d+)$/,Lt=/^(\d+)e/,Zt=/\.0$/,Wt=/\.0*e/,Xt=/(\..*[^0])0*e/;var zt=function(r){var e,t,n=parseFloat(r.arg);if(!Ft(n)){if(!Mt(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Nt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=$t(t,Xt,"$1e"),t=$t(t,Wt,"e"),t=$t(t,Zt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=$t(t,Ct,"e+0$1"),t=$t(t,Bt,"e-0$1"),r.alternate&&(t=$t(t,Gt,"$1."),t=$t(t,Lt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=It(r.specifier)?At(t):Rt(t)},Ut=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Yt=le;var Dt=L.isPrimitive,qt=Zr,Ht=xr,Jt=_e,Kt=zt,Qt=function(r){var e,t,n,i,a;for(e=0,n=[],a=Ut.exec(r);a;)(t=r.slice(e,Ut.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=Ut.lastIndex,a=Ut.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},rn=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Yt(" ",n):Yt(" ",n)+r},en=he,tn=String.fromCharCode;var nn=function(r){var e,t,n,i,a,o,u,c,f;if(!Dt(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=Qt(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],Dt(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!qt(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Ht(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Ht(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Jt(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Ht(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Ht(a)?String(n.arg):tn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=Kt(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=en(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=rn(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o},an=nn,on=Math.ceil,un=Z,cn=on;var fn=an,sn=function(r){return r<0?cn(r):un(r)},ln=kt;return function(r,e,t,n,i,a){var o,u,c,f,s,l;for(o=r.length,u=1,l=0;l<o;l++)u*=r[l];if("clamp"===a)i<0?i=0:i>=u&&(i=u-1);else if("wrap"===a)i<0?(i+=u)<0&&0!==(i%=u)&&(i+=u):i>=u&&(i-=u)>=u&&(i%=u);else if(i<0||i>=u)throw new RangeError(fn("invalid argument. Linear index must not exceed array dimensions. Number of array elements: `%u`. Value: `%d`.",u,i));if(c=0,"column-major"===n){for(l=o-1;l>=0;l--)(s=e[l])<0?(i-=(f=sn(i/s))*s,f+=r[l]-1):i-=(f=sn(i/s))*s,c+=f*ln(s);return c}for(l=0;l<o;l++)(s=e[l])<0?(i-=(f=sn(i/s))*s,f+=r[l]-1):i-=(f=sn(i/s))*s,c+=f*ln(s);return c}}));
//# sourceMappingURL=bundle.js.map
