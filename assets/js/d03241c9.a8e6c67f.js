"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[12871],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>y});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(o),m=r,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return o?n.createElement(y,i(i({ref:t},u),{},{components:o})):n.createElement(y,i({ref:t},u))}));function y(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},84160:(e,t,o)=>{o.d(t,{C:()=>r,G:()=>a});var n=o(67294);const r=e=>{let{label:t,link:o,height:r=40,width:a=40,title:i}=e;console.log(i);return n.createElement("a",{href:o,className:"card",style:{textDecoration:"none",color:"inherit"}},n.createElement("div",{className:"card-body"},n.createElement("div",{className:"card-info"},n.createElement("h3",{style:{margin:"0",paddingTop:"1rem"}},t),n.createElement("p",null,{"Try ToolJet":"Try out ToolJet with single docker command.",DigitalOcean:"Quickly deploy ToolJet using the Deploy to DigitalOcean button",Docker:"Deploy ToolJet on a server using docker-compose.",Heroku:"Deploy ToolJet on Heroku using the one-click-deployment button.","AWS EC2":"Deploy ToolJet on AWS EC2 instances.","AWS ECS":"Deploy ToolJet on AWS ECS instances.",Openshift:"Deploy ToolJet on Openshift",Kubernetes:"Deploy ToolJet on a Kubernetes cluster.","Kubernetes (GKE)":"Deploy ToolJet on a GKE Kubernetes cluster.","Kubernetes (AKS)":"Deploy ToolJet on a AKS Kubernetes cluster.","Google Cloud Run":"Deploy ToolJet on Cloud Run with GCloud CLI.","Deploying ToolJet client":"Deploy ToolJet Client on static website hosting services.","Environment variables":"Environment variables required by ToolJet Client and Server to start running.","Connecting via HTTP proxy":"Environment variables required by ToolJet to connect via HTTP proxy","Deploying ToolJet on a subpath":"Steps to deploy ToolJet on a subpath rather than root of domain.","V2 migration guide":"Things to know before migrating to ToolJet V2"}[t]))))},a=e=>{let{list:t}=e;return console.log("list",t),n.createElement("div",{className:"card-container-setup"},t.map((e=>n.createElement(r,{key:e.docId,label:e.label,link:e.href}))))}},12420:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=o(87462),r=(o(67294),o(3905)),a=o(84160),i=o(78259);const l={id:"index",title:"How-To Guides"},s="How-To Guides",c={unversionedId:"guides/index",id:"guides/index",title:"How-To Guides",description:'This section has practical guidance to help you implement specific tasks using Avalonia UI. Many are at the level of "how do I do that?". This section is arranged by subject area.',source:"@site/docs/guides/index.md",sourceDirName:"guides",slug:"/guides/",permalink:"/avalonia-docs/docs/next/guides/",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"How-To Guides"},sidebar:"documentationSidebar",previous:{title:"Data Templates",permalink:"/avalonia-docs/docs/next/basics/data/data-templates"},next:{title:"Building Cross-Platform Applications",permalink:"/avalonia-docs/docs/next/guides/building-cross-platform-applications/"}},u={},d=[],p={toc:d},m="wrapper";function y(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-guides"},"How-To Guides"),(0,r.kt)("p",null,'This section has practical guidance to help you implement specific tasks using Avalonia UI. Many are at the level of "how do I do that?". This section is arranged by subject area.'),(0,r.kt)(a.G,{list:(0,i.jA)().items,mdxType:"DocsCardList"}))}y.isMDXComponent=!0}}]);