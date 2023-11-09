"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[27176],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(f,r(r({ref:t},c),{},{components:n})):o.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:a,r[1]=p;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const i=n.p+"assets/images/image (14)-3e4a321bade703e6a1dab55677d03c8c.png",r={},p="ToDo List App",l={unversionedId:"tutorials/todo-list-app/index",id:"version-0.10.x/tutorials/todo-list-app/index",title:"ToDo List App",description:"In this tutorial we're going to be creating a simple TODO application in Avalonia using the Model-View-ViewModel \\(MVVM\\) pattern.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/tutorials/todo-list-app/index.md",sourceDirName:"tutorials/todo-list-app",slug:"/tutorials/todo-list-app/",permalink:"/avalonia-docs/zh-Hans/docs/tutorials/todo-list-app/",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/tutorials/todo-list-app/index.md",tags:[],version:"0.10.x",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Tutorials",permalink:"/avalonia-docs/zh-Hans/docs/tutorials/"},next:{title:"Creating a new project",permalink:"/avalonia-docs/zh-Hans/docs/tutorials/todo-list-app/creating-a-new-project"}},s={},c=[{value:"Model-View-ViewModel (MVVM)",id:"model-view-viewmodel-mvvm",level:2}],d={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"todo-list-app"},"ToDo List App"),(0,a.kt)("p",null,"In this tutorial we're going to be creating a simple TODO application in Avalonia using the Model-View-ViewModel ","(","MVVM",")"," pattern."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can find the code for the completed application ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/grokys/todo-tutorial"},"here"),".")),(0,a.kt)("img",{className:"center",src:i,alt:""}),(0,a.kt)("h2",{id:"model-view-viewmodel-mvvm"},"Model-View-ViewModel ","(","MVVM",")"),(0,a.kt)("p",null,"We're going to be using the ",(0,a.kt)("a",{parentName:"p",href:"../../guides/basics/mvvm"},"Model-View-ViewModel pattern ","(","MVVM",")")," for this tutorial. MVVM is a common pattern used for writing GUI applications, and is the recommended pattern to use when writing Avalonia applications. We'll be assuming a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Create,_read,_update_and_delete"},"CRUD")," application here, but most of these concepts can be applied to all types of applications."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"For this guide we're going to be using ",(0,a.kt)("a",{parentName:"p",href:"https://reactiveui.net/"},"ReactiveUI")," which is a MVVM framework based on ",(0,a.kt)("a",{parentName:"p",href:"https://reactivex.io/"},".NET Reactive Extensions"),". This guide will explain how to use MVVM and ReactiveUI with Avalonia but you can also see the ",(0,a.kt)("a",{parentName:"p",href:"https://reactiveui.net/docs/"},"ReactiveUI documentation")," for more detailed information.")))}m.isMDXComponent=!0}}]);