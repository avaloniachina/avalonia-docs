"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[11471],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(o),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return o?n.createElement(f,i(i({ref:t},c),{},{components:o})):n.createElement(f,i({ref:t},c))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9677:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=o(87462),r=(o(67294),o(3905));const a={description:"TUTORIALS - To Do List App"},i="Conclusion",p={unversionedId:"tutorials/todo-list-app/conclusion",id:"tutorials/todo-list-app/conclusion",title:"Conclusion",description:"TUTORIALS - To Do List App",source:"@site/docs/tutorials/todo-list-app/conclusion.md",sourceDirName:"tutorials/todo-list-app",slug:"/tutorials/todo-list-app/conclusion",permalink:"/avalonia-docs/docs/next/tutorials/todo-list-app/conclusion",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/tutorials/todo-list-app/conclusion.md",tags:[],version:"current",frontMatter:{description:"TUTORIALS - To Do List App"},sidebar:"documentationSidebar",previous:{title:"Process a New Item",permalink:"/avalonia-docs/docs/next/tutorials/todo-list-app/process-a-new-item"},next:{title:"Music Store App",permalink:"/avalonia-docs/docs/next/tutorials/music-store-app/"}},l={},s=[{value:"Application Solution Architecture",id:"application-solution-architecture",level:2},{value:"Further Reading",id:"further-reading",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"On this page you will learn why the app was implemented in the way that it has been, and recommended some further reading."," "),(0,r.kt)("h2",{id:"application-solution-architecture"},"Application Solution Architecture"),(0,r.kt)("p",null,"This tutorial has used an application solution architecture that uses the MVVM pattern, and swaps the content of the main window to navigate between pages; while keeping the 'top level' view model in memory to provide application state. The pages (views) are composed in ",(0,r.kt)("em",{parentName:"p"},"Avalonia UI")," user controls."," "),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"/img/gitbook-import/assets/image (2) (3).png",alt:""})),(0,r.kt)("p",null,"This tutorial application is targeted at the ",(0,r.kt)("em",{parentName:"p"},"Windows")," platform where the main window exists - so it may appear to be an over complex approach."," "),(0,r.kt)("p",null,"However on other target platforms, there is no main window. An application has to be arranged as a series of views."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To learn more about targeting applications for iOS (Apple) platforms, see ",(0,r.kt)("a",{parentName:"p",href:"../../guides/platforms/ios/"},"here"),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To learn more about targeting applications for Android mobile devices, see ",(0,r.kt)("a",{parentName:"p",href:"../../guides/platforms/android/"},"here"),".")),(0,r.kt)("h2",{id:"further-reading"},"Further Reading"),(0,r.kt)("p",null,"For a full list of the ",(0,r.kt)("em",{parentName:"p"},"Avalonia UI")," tutorials, see ",(0,r.kt)("a",{parentName:"p",href:".."},"here"),"."))}d.isMDXComponent=!0}}]);