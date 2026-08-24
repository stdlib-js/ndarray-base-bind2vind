"use strict";var g=function(u,t){return function(){try{return t||u((t={exports:{}}).exports,t),t.exports}catch(i){throw (t=0, i)}};};var q=g(function(z,c){
var w=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),o=require('@stdlib/math-base-special-trunc/dist'),m=require('@stdlib/math-base-special-abs/dist'),y=require('@stdlib/error-tools-fmtprodmsg/dist');function j(u,t,i,b,r,v){var l,e,s,f,n,a;for(l=u.length,e=1,a=0;a<l;a++)e*=u[a];if(v==="clamp")r<0?r=0:r>=e&&(r=e-1);else if(v==="wrap")r<0?(r+=e,r<0&&(r%=e,r!==0&&(r+=e))):r>=e&&(r-=e,r>=e&&(r%=e));else if(v==="normalize"&&r<0&&(r+=e),r<0||r>=e)throw new RangeError(y('0i35E',e,r));if(s=0,w(b)){for(a=l-1;a>=0;a--)n=t[a],n<0?(f=o(r/n),r-=f*n,f+=u[a]-1):(f=o(r/n),r-=f*n),s+=f*m(n);return s}for(a=0;a<l;a++)n=t[a],n<0?(f=o(r/n),r-=f*n,f+=u[a]-1):(f=o(r/n),r-=f*n),s+=f*m(n);return s}c.exports=j
});var k=q();module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
