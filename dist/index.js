"use strict";var b=function(u,t){return function(){return t||u((t={exports:{}}).exports,t),t.exports}};var c=b(function(z,m){
var g=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),o=require('@stdlib/math-base-special-trunc/dist'),i=require('@stdlib/math-base-special-abs/dist'),w=require('@stdlib/error-tools-fmtprodmsg/dist');function y(u,t,k,q,r,v){var l,e,s,f,n,a;for(l=u.length,e=1,a=0;a<l;a++)e*=u[a];if(v==="clamp")r<0?r=0:r>=e&&(r=e-1);else if(v==="wrap")r<0?(r+=e,r<0&&(r%=e,r!==0&&(r+=e))):r>=e&&(r-=e,r>=e&&(r%=e));else if(v==="normalize"&&r<0&&(r+=e),r<0||r>=e)throw new RangeError(w('0i35E',e,r));if(s=0,g(q)){for(a=l-1;a>=0;a--)n=t[a],n<0?(f=o(r/n),r-=f*n,f+=u[a]-1):(f=o(r/n),r-=f*n),s+=f*i(n);return s}for(a=0;a<l;a++)n=t[a],n<0?(f=o(r/n),r-=f*n,f+=u[a]-1):(f=o(r/n),r-=f*n),s+=f*i(n);return s}m.exports=y
});var j=c();module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
