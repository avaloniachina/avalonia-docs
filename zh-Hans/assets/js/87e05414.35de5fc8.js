"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[96374],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84160:(e,t,n)=>{n.d(t,{C:()=>r,G:()=>a});var o=n(67294);const r=e=>{let{label:t,link:n,height:r=40,width:a=40,title:i}=e;console.log(i);return o.createElement("a",{href:n,className:"card",style:{textDecoration:"none",color:"inherit"}},o.createElement("div",{className:"card-body"},o.createElement("div",{className:"card-info"},o.createElement("h3",{style:{margin:"0",paddingTop:"1rem"}},t),o.createElement("p",null,{"Try ToolJet":"Try out ToolJet with single docker command.",DigitalOcean:"Quickly deploy ToolJet using the Deploy to DigitalOcean button",Docker:"Deploy ToolJet on a server using docker-compose.",Heroku:"Deploy ToolJet on Heroku using the one-click-deployment button.","AWS EC2":"Deploy ToolJet on AWS EC2 instances.","AWS ECS":"Deploy ToolJet on AWS ECS instances.",Openshift:"Deploy ToolJet on Openshift",Kubernetes:"Deploy ToolJet on a Kubernetes cluster.","Kubernetes (GKE)":"Deploy ToolJet on a GKE Kubernetes cluster.","Kubernetes (AKS)":"Deploy ToolJet on a AKS Kubernetes cluster.","Google Cloud Run":"Deploy ToolJet on Cloud Run with GCloud CLI.","Deploying ToolJet client":"Deploy ToolJet Client on static website hosting services.","Environment variables":"Environment variables required by ToolJet Client and Server to start running.","Connecting via HTTP proxy":"Environment variables required by ToolJet to connect via HTTP proxy","Deploying ToolJet on a subpath":"Steps to deploy ToolJet on a subpath rather than root of domain.","V2 migration guide":"Things to know before migrating to ToolJet V2"}[t]))))},a=e=>{let{list:t}=e;return console.log("list",t),o.createElement("div",{className:"card-container-setup"},t.map((e=>o.createElement(r,{key:e.docId,label:e.label,link:e.href}))))}},94158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var o=n(87462),r=(n(67294),n(3905)),a=n(84160),i=n(78259);const l={description:"REFERENCE"},s="Migrating from WPF",c={unversionedId:"get-started/wpf/index",id:"get-started/wpf/index",title:"Migrating from WPF",description:"REFERENCE",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/get-started/wpf/index.md",sourceDirName:"get-started/wpf",slug:"/get-started/wpf/",permalink:"/avalonia-docs/zh-Hans/docs/next/get-started/wpf/",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/get-started/wpf/index.md",tags:[],version:"current",frontMatter:{description:"REFERENCE"},sidebar:"documentationSidebar",previous:{title:"\u7528\u4ee3\u7801\u4fee\u6539\u63a7\u4ef6",permalink:"/avalonia-docs/zh-Hans/docs/next/get-started/test-drive/code-with-controls"},next:{title:"Styling",permalink:"/avalonia-docs/zh-Hans/docs/next/get-started/wpf/styling"}},p={},u=[],d={toc:u},m="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"migrating-from-wpf"},"Migrating from WPF"),(0,r.kt)("p",null,"This reference will help you leverage your existing knowledge of Windows Presentation Foundation (WPF) to learn ",(0,r.kt)("em",{parentName:"p"},"Avalonia UI")," quickly."),(0,r.kt)("p",null,"You will see how although ",(0,r.kt)("em",{parentName:"p"},"Avalonia UI")," is often very similar to WPF; there are some differences. In particular, in the way in which the following work:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Styling"),(0,r.kt)("li",{parentName:"ul"},"Data Templates")),(0,r.kt)(a.G,{list:(0,i.jA)().items,mdxType:"DocsCardList"}))}f.isMDXComponent=!0}}]);