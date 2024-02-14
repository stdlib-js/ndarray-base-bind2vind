// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function e(e){return"number"==typeof e}function r(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function i(e,i,a){var n=!1,t=i-e.length;return t<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=a?e+r(t):r(t)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,n=String.prototype.toUpperCase;function t(r){var t,o,s;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(o=r.arg,s=parseInt(o,10),!isFinite(s)){if(!e(o))throw new Error("invalid integer. Value: "+o);s=0}return s<0&&("u"===r.specifier||10!==t)&&(s=4294967295+s+1),s<0?(o=(-s).toString(t),r.precision&&(o=i(o,r.precision,r.padRight)),o="-"+o):(o=s.toString(t),s||r.precision?r.precision&&(o=i(o,r.precision,r.padRight)):o="",r.sign&&(o=r.sign+o)),16===t&&(r.alternate&&(o="0x"+o),o=r.specifier===n.call(r.specifier)?n.call(o):a.call(o)),8===t&&r.alternate&&"0"!==o.charAt(0)&&(o="0"+o),o}function o(e){return"string"==typeof e}var s=Math.abs,c=String.prototype.toLowerCase,p=String.prototype.toUpperCase,l=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,u=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function v(r){var i,a,n=parseFloat(r.arg);if(!isFinite(n)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+a);n=r.arg}switch(r.specifier){case"e":case"E":a=n.toExponential(r.precision);break;case"f":case"F":a=n.toFixed(r.precision);break;case"g":case"G":s(n)<1e-4?((i=r.precision)>0&&(i-=1),a=n.toExponential(i)):a=n.toPrecision(r.precision),r.alternate||(a=l.call(a,m,"$1e"),a=l.call(a,w,"e"),a=l.call(a,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return a=l.call(a,f,"e+0$1"),a=l.call(a,g,"e-0$1"),r.alternate&&(a=l.call(a,u,"$1."),a=l.call(a,d,"$1.e")),n>=0&&r.sign&&(a=r.sign+a),a=r.specifier===p.call(r.specifier)?p.call(a):c.call(a)}function b(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function y(e,r,i){var a=r-e.length;return a<0?e:e=i?e+b(a):b(a)+e}var x=String.fromCharCode,k=isNaN,E=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function $(e){var r,a,n,s,c,p,l,f,g;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,f=0;f<e.length;f++)if(o(n=e[f]))p+=n;else{if(r=void 0!==n.precision,!(n=V(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),a=n.flags,g=0;g<a.length;g++)switch(s=a.charAt(g)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=a.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+s)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,k(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=t(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!k(n.arg)){if((c=parseInt(n.arg,10))<0||c>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(c)?String(n.arg):x(c)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=y(n.arg,n.width,n.padRight)),p+=n.arg||"",l+=1}return p}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,i,a,n;for(i=[],n=0,a=S.exec(e);a;)(r=e.slice(n,S.lastIndex-a[0].length)).length&&i.push(r),i.push(F(a)),n=S.lastIndex,a=S.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function R(e){return"string"==typeof e}function C(e){var r,i;if(!R(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[I(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return $.apply(null,r)}var T=Math.floor,A=Math.ceil;function Z(e){return e<0?A(e):T(e)}function L(e){return Math.abs(e)}function M(e,r,i,a,n,t){var o,s,c,p,l,f;for(o=e.length,s=1,f=0;f<o;f++)s*=e[f];if("clamp"===t)n<0?n=0:n>=s&&(n=s-1);else if("wrap"===t)n<0?(n+=s)<0&&0!==(n%=s)&&(n+=s):n>=s&&(n-=s)>=s&&(n%=s);else if("normalize"===t&&n<0&&(n+=s),n<0||n>=s)throw new RangeError(C("invalid argument. Linear index must not exceed array dimensions. Number of array elements: `%u`. Value: `%d`.",s,n));if(c=0,"column-major"===a){for(f=o-1;f>=0;f--)(l=r[f])<0?(n-=(p=Z(n/l))*l,p+=e[f]-1):n-=(p=Z(n/l))*l,c+=p*L(l);return c}for(f=0;f<o;f++)(l=r[f])<0?(n-=(p=Z(n/l))*l,p+=e[f]-1):n-=(p=Z(n/l))*l,c+=p*L(l);return c}export{M as default};
//# sourceMappingURL=mod.js.map
