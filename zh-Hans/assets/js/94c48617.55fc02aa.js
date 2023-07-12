"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[68829],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={info:"running-in-the-browser",title:"Running in the Browser"},i=void 0,l={unversionedId:"tutorials/running-in-the-browser",id:"version-0.10.x/tutorials/running-in-the-browser",title:"Running in the Browser",description:"It is currently very early days and not ready for production, however if you want to test this exciting new feature please take the following steps.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/tutorials/running-in-the-browser.md",sourceDirName:"tutorials",slug:"/tutorials/running-in-the-browser",permalink:"/avalonia-docs/zh-Hans/docs/tutorials/running-in-the-browser",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/tutorials/running-in-the-browser.md",tags:[],version:"0.10.x",frontMatter:{info:"running-in-the-browser",title:"Running in the Browser"},sidebar:"documentationSidebar",previous:{title:"Summary",permalink:"/avalonia-docs/zh-Hans/docs/tutorials/music-store-app/summary"},next:{title:"Developing for Mobile",permalink:"/avalonia-docs/zh-Hans/docs/tutorials/developing-for-mobile/"}},s={},p=[{value:"Interop",id:"interop",level:2},{value:"Legacy Blazor backend",id:"legacy-blazor-backend",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It is currently very early days and not ready for production, however if you want to test this exciting new feature please take the following steps."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install ",(0,a.kt)("inlineCode",{parentName:"li"},"wasm-experimental")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"wasm-tools")," workload tools. See ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-workload-install"},"dotnet documentation"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet workload install wasm-experimental wasm-tools\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install or update the dotnet templates to the latest version.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet new install avalonia.templates\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Create a new directory for the project.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir WebTest\ncd WebTest\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Generate a new project that supports running in the browser.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet new avalonia.xplat\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"In order to run simply do:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd WebTest.Web\ndotnet run\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"In the console output you will see HTTP and HTTPS links to open the app.")),(0,a.kt)("h2",{id:"interop"},"Interop"),(0,a.kt)("p",null,"It is possible to call JavaScript code from the Avalonia Web application.\nAvalonia app is compatible with standard ",(0,a.kt)("strong",{parentName:"p"},"[JSImport]","/","[JSExport]")," interop from Microsoft. You can find more information on ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/blazor/javascript-interoperability/import-export-interop?view=aspnetcore-7.0"},"their documentation"),"."),(0,a.kt)("h2",{id:"legacy-blazor-backend"},"Legacy Blazor backend"),(0,a.kt)("p",null,"Starting from Avalonia 11.0 ",(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Avalonia.Web/"},"Avalonia.Web")," package relies on build-in .NET interop with better stability and performance.\nLegacy Blazor backend is still available for compatability and can be referenced using ",(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Avalonia.Web.Blazor/"},"Avalonia.Web.Blazor")," package."),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"If you have not performed the step to install required workloads, you will encounter errors when running the app in your browser later (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"System.DllNotFoundException: libSkiaSharp"),") and you will need to rebuild again before the app will run."))}d.isMDXComponent=!0}}]);