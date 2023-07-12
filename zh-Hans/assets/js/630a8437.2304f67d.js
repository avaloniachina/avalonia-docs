"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[93996],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=o.createContext({}),s=function(t){var e=o.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return o.createElement(p.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(h,i(i({ref:e},c),{},{components:n})):o.createElement(h,i({ref:e},c))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[d]="string"==typeof t?t:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99598:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={id:"index",title:"To Do List App"},i=void 0,l={unversionedId:"tutorials/todo-list-app/index",id:"tutorials/todo-list-app/index",title:"To Do List App",description:"In this tutorial you will create a simple to do list application using Avalonia UI and the Model View View-Model (MVVM) pattern with binding to the to do list (collection) data.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/tutorials/todo-list-app/index.md",sourceDirName:"tutorials/todo-list-app",slug:"/tutorials/todo-list-app/",permalink:"/avalonia-docs/zh-Hans/docs/next/tutorials/todo-list-app/",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/tutorials/todo-list-app/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"To Do List App"},sidebar:"documentationSidebar",previous:{title:"Samples",permalink:"/avalonia-docs/zh-Hans/docs/next/tutorials/samples"},next:{title:"Create a New Project",permalink:"/avalonia-docs/zh-Hans/docs/next/tutorials/todo-list-app/creating-a-new-project"}},p={},s=[{value:"MVVM Pattern",id:"mvvm-pattern",level:2},{value:"Development Methods",id:"development-methods",level:2}],c={toc:s},d="wrapper";function u(t){let{components:e,...n}=t;return(0,a.kt)(d,(0,o.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this tutorial you will create a simple to do list application using ",(0,a.kt)("em",{parentName:"p"},"Avalonia UI")," and the Model View View-Model (MVVM) pattern with binding to the to do list (collection) data."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/tutorials/todo-list-app/image (14).png",alt:"The finished application"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can find the code for the completed application ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/grokys/todo-tutorial"},"here"),".")),(0,a.kt)("h2",{id:"mvvm-pattern"},"MVVM Pattern"),(0,a.kt)("p",null,"In this tutorial you will learn more about using the Model-View-ViewModel (MVVM) pattern. It is common to use the MVVM pattern when writing GUI applications, and MVVM is recommended in most scenarios for ",(0,a.kt)("em",{parentName:"p"},"Avalonia UI")," applications."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To revise some of the background concepts behind using the MVVM pattern with ",(0,a.kt)("em",{parentName:"p"},"Avalonia UI"),", and when its use is appropriate, see ",(0,a.kt)("a",{parentName:"p",href:"../../concepts/the-mvvm-pattern/"},"here"),".")),(0,a.kt)("h2",{id:"development-methods"},"Development Methods"),(0,a.kt)("p",null,"This tutorial contains instructions for you to use whether you program with ",(0,a.kt)("em",{parentName:"p"},"Microsoft Visual Studio")," on Windows, or the .NET Core Command Line Interface (.NET Core CLI) and a different editor. The screenshots shown are all from ",(0,a.kt)("em",{parentName:"p"},"Microsoft Visual Studio")," and running on Windows. "),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To read about other tutorials in this documentation, see ",(0,a.kt)("a",{parentName:"p",href:"/avalonia-docs/zh-Hans/docs/next/tutorials/"},"here"),".")))}u.isMDXComponent=!0}}]);