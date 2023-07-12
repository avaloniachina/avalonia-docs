"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[33271],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return n?o.createElement(y,a(a({ref:t},p),{},{components:n})):o.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84160:(e,t,n)=>{n.d(t,{C:()=>r,G:()=>l});var o=n(67294);const r=e=>{let{label:t,link:n,height:r=40,width:l=40,title:a}=e;console.log(a);return o.createElement("a",{href:n,className:"card",style:{textDecoration:"none",color:"inherit"}},o.createElement("div",{className:"card-body"},o.createElement("div",{className:"card-info"},o.createElement("h3",{style:{margin:"0",paddingTop:"1rem"}},t),o.createElement("p",null,{"Try ToolJet":"Try out ToolJet with single docker command.",DigitalOcean:"Quickly deploy ToolJet using the Deploy to DigitalOcean button",Docker:"Deploy ToolJet on a server using docker-compose.",Heroku:"Deploy ToolJet on Heroku using the one-click-deployment button.","AWS EC2":"Deploy ToolJet on AWS EC2 instances.","AWS ECS":"Deploy ToolJet on AWS ECS instances.",Openshift:"Deploy ToolJet on Openshift",Kubernetes:"Deploy ToolJet on a Kubernetes cluster.","Kubernetes (GKE)":"Deploy ToolJet on a GKE Kubernetes cluster.","Kubernetes (AKS)":"Deploy ToolJet on a AKS Kubernetes cluster.","Google Cloud Run":"Deploy ToolJet on Cloud Run with GCloud CLI.","Deploying ToolJet client":"Deploy ToolJet Client on static website hosting services.","Environment variables":"Environment variables required by ToolJet Client and Server to start running.","Connecting via HTTP proxy":"Environment variables required by ToolJet to connect via HTTP proxy","Deploying ToolJet on a subpath":"Steps to deploy ToolJet on a subpath rather than root of domain.","V2 migration guide":"Things to know before migrating to ToolJet V2"}[t]))))},l=e=>{let{list:t}=e;return console.log("list",t),o.createElement("div",{className:"card-container-setup"},t.map((e=>o.createElement(r,{key:e.docId,label:e.label,link:e.href}))))}},34372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(87462),r=(n(67294),n(3905)),l=n(84160),a=n(78259);const i={id:"index",title:"Deployment"},c=void 0,s={unversionedId:"deployment/index",id:"deployment/index",title:"Deployment",description:"",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/deployment/index.md",sourceDirName:"deployment",slug:"/deployment/",permalink:"/avalonia-docs/zh-Hans/docs/next/deployment/",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/deployment/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Deployment"},sidebar:"documentationSidebar",previous:{title:"The View Locator",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/view-locator"},next:{title:"macOS Deployment",permalink:"/avalonia-docs/zh-Hans/docs/next/deployment/macOS"}},p={},u=[],d={toc:u},m="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.G,{list:(0,a.jA)().items,mdxType:"DocsCardList"}))}y.isMDXComponent=!0}}]);