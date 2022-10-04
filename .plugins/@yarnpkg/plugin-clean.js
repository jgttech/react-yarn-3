/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-clean",
factory: function (require) {
var plugin=(()=>{var c=Object.defineProperty;var i=Object.getOwnPropertyDescriptor;var r=Object.getOwnPropertyNames;var l=Object.prototype.hasOwnProperty;var p=(o=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(o,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):o)(function(o){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+o+'" is not supported')});var d=(o,e)=>{for(var t in e)c(o,t,{get:e[t],enumerable:!0})},u=(o,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let m of r(e))!l.call(o,m)&&m!==t&&c(o,m,{get:()=>e[m],enumerable:!(n=i(e,m))||n.enumerable});return o};var f=o=>u(c({},"__esModule",{value:!0}),o);var P={};d(P,{default:()=>x});var a=p("@yarnpkg/cli"),s=class extends a.BaseCommand{async execute(){console.log("clean command!")}};s.paths=[["clean"]];var g={commands:[s]},x=g;return f(P);})();
return plugin;
}
};
