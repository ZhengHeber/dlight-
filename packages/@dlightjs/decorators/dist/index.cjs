"use strict";var c=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var O=Object.prototype.hasOwnProperty;var d=(e,r)=>{for(var t in r)c(e,t,{get:r[t],enumerable:!0})},m=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of x(r))!O.call(e,a)&&a!==t&&c(e,a,{get:()=>r[a],enumerable:!(n=p(r,a))||n.enumerable});return e};var A=e=>m(c({},"__esModule",{value:!0}),e);var P={};d(P,{Await:()=>o,StateObject:()=>u,Watch:()=>l});module.exports=A(P);function s(e){return typeof e!="object"?e:Array.isArray(e)?e.filter(r=>r!=null).map(r=>s(r)):Object.fromEntries(Object.entries(e).filter(([r,t])=>t!=null).map(([r,t])=>[r,s(t)]))}function f(e,r){if(typeof e!="object")return e;if(Array.isArray(e))for(let[t,n]of e.entries())e[t]=f(n,r);else for(let[t,n]of Object.entries(e))e[t]=f(n,r);return new Proxy(e,r)}var u={preset:(e,r)=>u.func(e,r),func:(e,r)=>{if(!e||typeof e!="object")return;let n=f(e,{get:function(a,y){switch(y){case"push":case"pop":case"slice":case"splice":return(...i)=>{a[y](...i),n=s(JSON.parse(JSON.stringify(n))),r(n)}}return a[y]},set(a,y,i){return Array.isArray(a)&&y==="length"?(a[y]=i,!0):(a[y]=i,n=JSON.parse(JSON.stringify(n)),r(n),!0)},deleteProperty(a,y){return y in a&&(delete a[y],n=s(JSON.parse(JSON.stringify(n))),r(n)),!0}});return n}};var o=(e,r)=>{let t=r?void 0:e,n=(a,y)=>(a.then(i=>y(i)),y(t),t);return t?n:n(e,r)};var l=e=>({preset:r=>(e(r),r)});0&&(module.exports={Await,StateObject,Watch});
