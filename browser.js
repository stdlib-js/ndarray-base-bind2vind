// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";var e=Math.floor,n=Math.ceil;function t(t){return t<0?n(t):e(t)}function o(e){return Math.abs(e)}return function(e,n,r,f,i,u){var a,l,d,s,c,h;for(a=e.length,l=1,h=0;h<a;h++)l*=e[h];if("clamp"===u)i<0?i=0:i>=l&&(i=l-1);else if("wrap"===u)i<0?(i+=l)<0&&0!=(i%=l)&&(i+=l):i>=l&&(i-=l)>=l&&(i%=l);else if(i<0||i>=l)throw new RangeError(function(){var e,n=arguments,t="https://stdlib.io/e/"+n[0]+"?";for(e=1;e<n.length;e++)t+="&arg[]="+encodeURIComponent(n[e]);return t}("0i35E,L1",l,i));if(d=0,"column-major"===f){for(h=a-1;h>=0;h--)(c=n[h])<0?(i-=(s=t(i/c))*c,s+=e[h]-1):i-=(s=t(i/c))*c,d+=s*o(c);return d}for(h=0;h<a;h++)(c=n[h])<0?(i-=(s=t(i/c))*c,s+=e[h]-1):i-=(s=t(i/c))*c,d+=s*o(c);return d}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).bind2vind=n();
//# sourceMappingURL=browser.js.map
