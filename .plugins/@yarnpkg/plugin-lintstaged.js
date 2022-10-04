/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-lintstaged",
factory: function (require) {
var plugin=(()=>{var e=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var d=Object.prototype.hasOwnProperty;var m=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(o,i)=>(typeof require<"u"?require:o)[i]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')});var f=(t,o)=>{for(var i in o)e(t,i,{get:o[i],enumerable:!0})},u=(t,o,i,n)=>{if(o&&typeof o=="object"||typeof o=="function")for(let s of l(o))!d.call(t,s)&&s!==i&&e(t,s,{get:()=>o[s],enumerable:!(n=c(o,s))||n.enumerable});return t};var g=t=>u(e({},"__esModule",{value:!0}),t);var P={};f(P,{default:()=>y});var a=m("@yarnpkg/cli"),p=m("child_process"),r=class extends a.BaseCommand{async execute(){(0,p.spawnSync)("yarn",["lint-staged"],{stdio:"inherit"})}};r.paths=[["lintstaged"]];var x={commands:[r]},y=x;return g(P);})();
return plugin;
}
};
