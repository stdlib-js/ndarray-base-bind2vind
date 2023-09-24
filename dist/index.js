"use strict";var q=function(u,t){return function(){return t||u((t={exports:{}}).exports,t),t.exports}};var c=q(function(p,i){
var g=require('@stdlib/error-tools-fmtprodmsg/dist'),l=require('@stdlib/math-base-special-trunc/dist'),m=require('@stdlib/math-base-special-abs/dist');function w(u,t,j,b,r,v){var o,a,s,f,e,n;for(o=u.length,a=1,n=0;n<o;n++)a*=u[n];if(v==="clamp")r<0?r=0:r>=a&&(r=a-1);else if(v==="wrap")r<0?(r+=a,r<0&&(r%=a,r!==0&&(r+=a))):r>=a&&(r-=a,r>=a&&(r%=a));else if(r<0||r>=a)throw new RangeError(g('0i35E',a,r));if(s=0,b==="column-major"){for(n=o-1;n>=0;n--)e=t[n],e<0?(f=l(r/e),r-=f*e,f+=u[n]-1):(f=l(r/e),r-=f*e),s+=f*m(e);return s}for(n=0;n<o;n++)e=t[n],e<0?(f=l(r/e),r-=f*e,f+=u[n]-1):(f=l(r/e),r-=f*e),s+=f*m(e);return s}i.exports=w
});var y=c();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
