"use strict";var q=function(u,t){return function(){return t||u((t={exports:{}}).exports,t),t.exports}};var c=q(function(p,i){
var g=require('@stdlib/error-tools-fmtprodmsg/dist'),o=require('@stdlib/math-base-special-trunc/dist'),m=require('@stdlib/math-base-special-abs/dist');function w(u,t,j,b,r,v){var l,e,s,f,n,a;for(l=u.length,e=1,a=0;a<l;a++)e*=u[a];if(v==="clamp")r<0?r=0:r>=e&&(r=e-1);else if(v==="wrap")r<0?(r+=e,r<0&&(r%=e,r!==0&&(r+=e))):r>=e&&(r-=e,r>=e&&(r%=e));else if(v==="normalize"&&r<0&&(r+=e),r<0||r>=e)throw new RangeError(g('0i35E',e,r));if(s=0,b==="column-major"){for(a=l-1;a>=0;a--)n=t[a],n<0?(f=o(r/n),r-=f*n,f+=u[a]-1):(f=o(r/n),r-=f*n),s+=f*m(n);return s}for(a=0;a<l;a++)n=t[a],n<0?(f=o(r/n),r-=f*n,f+=u[a]-1):(f=o(r/n),r-=f*n),s+=f*m(n);return s}i.exports=w
});var y=c();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
