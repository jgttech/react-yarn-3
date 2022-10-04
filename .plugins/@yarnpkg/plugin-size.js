/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-size",
factory: function (require) {
var plugin=(()=>{var i=Object.defineProperty;var a=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var l=Object.prototype.hasOwnProperty;var p=(o=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(o,{get:(s,e)=>(typeof require<"u"?require:s)[e]}):o)(function(o){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+o+'" is not supported')});var d=(o,s)=>{for(var e in s)i(o,e,{get:s[e],enumerable:!0})},u=(o,s,e,n)=>{if(s&&typeof s=="object"||typeof s=="function")for(let t of c(s))!l.call(o,t)&&t!==e&&i(o,t,{get:()=>s[t],enumerable:!(n=a(s,t))||n.enumerable});return o};var f=o=>u(i({},"__esModule",{value:!0}),o);var P={};d(P,{default:()=>x});var r=p("@yarnpkg/cli"),m=class extends r.BaseCommand{async execute(){console.log("size command!")}};m.paths=[["size"]];var g={commands:[m]},x=g;return f(P);})();
return plugin;
}
};
