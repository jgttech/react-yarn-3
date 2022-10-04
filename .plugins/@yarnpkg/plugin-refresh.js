/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-refresh",
factory: function (require) {
var plugin=(()=>{var m=Object.defineProperty;var a=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var l=Object.prototype.hasOwnProperty;var p=(o=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(o,{get:(e,r)=>(typeof require<"u"?require:e)[r]}):o)(function(o){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+o+'" is not supported')});var d=(o,e)=>{for(var r in e)m(o,r,{get:e[r],enumerable:!0})},f=(o,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of c(e))!l.call(o,s)&&s!==r&&m(o,s,{get:()=>e[s],enumerable:!(i=a(e,s))||i.enumerable});return o};var u=o=>f(m({},"__esModule",{value:!0}),o);var P={};d(P,{default:()=>x});var n=p("@yarnpkg/cli"),t=class extends n.BaseCommand{async execute(){console.log("refresh command!")}};t.paths=[["refresh"]];var g={commands:[t]},x=g;return u(P);})();
return plugin;
}
};
