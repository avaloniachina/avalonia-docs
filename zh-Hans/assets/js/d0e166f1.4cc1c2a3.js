"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[86643],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>v});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(t),g=i,v=c["".concat(l,".").concat(g)]||c[g]||p[g]||o;return t?n.createElement(v,a(a({ref:r},d),{},{components:t})):n.createElement(v,a({ref:r},d))}));function v(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=g;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},53699:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=t(87462),i=(t(67294),t(3905));const o={id:"debugging-previewer",title:"Debugging Previewer"},a=void 0,s={unversionedId:"guides/developer-guides/debugging-previewer",id:"version-0.10.x/guides/developer-guides/debugging-previewer",title:"Debugging Previewer",description:"By default, even if you would put a breakpoint in Avalonia main repo directly it would not be hit when Previewer executes this code. This is because Previewer is a completely different process usually run by IDE.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/guides/developer-guides/debugging-previewer.md",sourceDirName:"guides/developer-guides",slug:"/guides/developer-guides/debugging-previewer",permalink:"/avalonia-docs/zh-Hans/docs/guides/developer-guides/debugging-previewer",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/guides/developer-guides/debugging-previewer.md",tags:[],version:"0.10.x",frontMatter:{id:"debugging-previewer",title:"Debugging Previewer"},sidebar:"documentationSidebar",previous:{title:"Comparison of Avalonia with WPF and UWP",permalink:"/avalonia-docs/zh-Hans/docs/guides/developer-guides/comparison-of-avalonia-with-wpf-and-uwp"},next:{title:"Debugging the XAML compiler",permalink:"/avalonia-docs/zh-Hans/docs/guides/developer-guides/debugging-xamlil"}},l={},u=[],d={toc:u},c="wrapper";function p(e){let{components:r,...t}=e;return(0,i.kt)(c,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"By default, even if you would put a breakpoint in Avalonia main repo directly it would not be hit when Previewer executes this code. This is because Previewer is a completely different process usually run by IDE."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"But how do we debug it then?")),(0,i.kt)("p",null,'You may try to attach the debugger manually. For doing that you will need to find a previewer process. You may use e.g "Process Hacker". Here you will see all processes in the system. Everything you will need to do is to type Avalonia in the search field.'),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"/img/guides/developer-guides/debugging-previewer/132685500-1807dd51-b34c-47ea-b9dd-b1756189c620.png"})),(0,i.kt)("p",null,"In my case process was called ",(0,i.kt)("strong",{parentName:"p"},".NET Host"),'. You can understand that this process is Avalonia Previewer by clicking with the right mouse button on the process and selecting "Properties".Here in the "Command line" field, you will see a command that invokes previewer.'),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"/img/guides/developer-guides/debugging-previewer/132685764-7feff643-8c86-4095-bdad-0d168e435ac4.png"})),(0,i.kt)("p",null,'When you know the process id you can simply click "Debug" in process explorer. But sometimes previewer process may crash even before you would attach your debugger. Then you will need to modify this file ',(0,i.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/tools/Avalonia.Designer.HostApp/Program.cs"},"Program.cs")," specifically method Main","(","one of them depending on target framework",")","."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"Debugger.Launch();\nwhile (!Debugger.IsAttached)\n  Thread.Sleep(100);\n")),(0,i.kt)("p",null,"This code will attach debugger to the previewer programmatically."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How would I understand that I have launched a debugger?")),(0,i.kt)("p",null,"You should see a window like this."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"/img/guides/developer-guides/debugging-previewer/132686320-958f30a6-49f8-498f-853c-b9dd17262b54.png"})))}p.isMDXComponent=!0}}]);