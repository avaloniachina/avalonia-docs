"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[74016],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),y=r,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||i;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},84160:(e,t,n)=>{n.d(t,{C:()=>r,G:()=>i});var o=n(67294);const r=e=>{let{label:t,link:n,height:r=40,width:i=40,title:a}=e;console.log(a);return o.createElement("a",{href:n,className:"card",style:{textDecoration:"none",color:"inherit"}},o.createElement("div",{className:"card-body"},o.createElement("div",{className:"card-info"},o.createElement("h3",{style:{margin:"0",paddingTop:"1rem"}},t),o.createElement("p",null,{"Try ToolJet":"Try out ToolJet with single docker command.",DigitalOcean:"Quickly deploy ToolJet using the Deploy to DigitalOcean button",Docker:"Deploy ToolJet on a server using docker-compose.",Heroku:"Deploy ToolJet on Heroku using the one-click-deployment button.","AWS EC2":"Deploy ToolJet on AWS EC2 instances.","AWS ECS":"Deploy ToolJet on AWS ECS instances.",Openshift:"Deploy ToolJet on Openshift",Kubernetes:"Deploy ToolJet on a Kubernetes cluster.","Kubernetes (GKE)":"Deploy ToolJet on a GKE Kubernetes cluster.","Kubernetes (AKS)":"Deploy ToolJet on a AKS Kubernetes cluster.","Google Cloud Run":"Deploy ToolJet on Cloud Run with GCloud CLI.","Deploying ToolJet client":"Deploy ToolJet Client on static website hosting services.","Environment variables":"Environment variables required by ToolJet Client and Server to start running.","Connecting via HTTP proxy":"Environment variables required by ToolJet to connect via HTTP proxy","Deploying ToolJet on a subpath":"Steps to deploy ToolJet on a subpath rather than root of domain.","V2 migration guide":"Things to know before migrating to ToolJet V2"}[t]))))},i=e=>{let{list:t}=e;return console.log("list",t),o.createElement("div",{className:"card-container-setup"},t.map((e=>o.createElement(r,{key:e.docId,label:e.label,link:e.href}))))}},95840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var o=n(87462),r=(n(67294),n(3905)),i=n(84160),a=n(78259);const l={},s="Deep Dives",c={unversionedId:"guides/deep-dives/index",id:"version-0.10.x/guides/deep-dives/index",title:"Deep Dives",description:"",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/guides/deep-dives/index.md",sourceDirName:"guides/deep-dives",slug:"/guides/deep-dives/",permalink:"/avalonia-docs/zh-Hans/docs/guides/deep-dives/",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/guides/deep-dives/index.md",tags:[],version:"0.10.x",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Accessing the UI thread",permalink:"/avalonia-docs/zh-Hans/docs/guides/basics/accessing-the-ui-thread"},next:{title:"Running your app on a Raspberry Pi",permalink:"/avalonia-docs/zh-Hans/docs/guides/deep-dives/running-your-app-on-a-raspberry-pi"}},p={},d=[],u={toc:d},y="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(y,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deep-dives"},"Deep Dives"),(0,r.kt)(i.G,{list:(0,a.jA)().items,mdxType:"DocsCardList"}))}m.isMDXComponent=!0}}]);