"use strict";var q=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var x=q(function(G,p){
var b=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-special-abs/dist');function O(r,e,n,f,t,o,m){var a,v,s,u,i;if(r<=0)return NaN;for(v=f,s=m,i=0;i<r&&t[s]!==0;i++)v+=n,s+=o;if(i===r)return NaN;if(a=e[v],b(a))return a;for(a=d(a),i+=1,i;i<r;i++)if(v+=n,s+=o,!t[s]){if(u=e[v],b(u))return u;u=d(u),u>a&&(a=u)}return a}p.exports=O
});var k=q(function(H,j){
var y=require('@stdlib/strided-base-stride2offset/dist'),g=x();function h(r,e,n,f,t){var o=y(r,n),m=y(r,t);return g(r,e,n,o,f,t,m)}j.exports=h
});var _=q(function(I,R){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=k(),z=x();w(l,"ndarray",z);R.exports=l
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=_(),c,E=B(A(__dirname,"./native.js"));C(E)?c=D:c=E;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
