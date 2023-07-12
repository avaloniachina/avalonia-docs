"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[42977],{3905:(e,o,n)=>{n.d(o,{Zo:()=>s,kt:()=>f});var t=n(67294);function r(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function i(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?i(Object(n),!0).forEach((function(o){r(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function l(e,o){if(null==e)return{};var n,t,r=function(e,o){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],o.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=t.createContext({}),p=function(e){var o=t.useContext(u),n=o;return e&&(n="function"==typeof e?e(o):a(a({},o),e)),n},s=function(e){var o=p(e.components);return t.createElement(u.Provider,{value:o},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},m=t.forwardRef((function(e,o){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?t.createElement(f,a(a({ref:o},s),{},{components:n})):t.createElement(f,a({ref:o},s))}));function f(e,o){var n=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var u in o)hasOwnProperty.call(o,u)&&(l[u]=o[u]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46783:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var t=n(87462),r=(n(67294),n(3905));const i={info:"build-and-run-your-application-on-a-simulator",title:"Build and run your application on a Simulator"},a=void 0,l={unversionedId:"tutorials/developing-for-mobile/ios/build-and-run-your-application-on-a-simulator",id:"version-0.10.x/tutorials/developing-for-mobile/ios/build-and-run-your-application-on-a-simulator",title:"Build and run your application on a Simulator",description:"Please ensure you have followed the guide create-a-cross-platform-solution.md.",source:"@site/versioned_docs/version-0.10.x/tutorials/developing-for-mobile/ios/build-and-run-your-application-on-a-simulator.md",sourceDirName:"tutorials/developing-for-mobile/ios",slug:"/tutorials/developing-for-mobile/ios/build-and-run-your-application-on-a-simulator",permalink:"/avalonia-docs/docs/tutorials/developing-for-mobile/ios/build-and-run-your-application-on-a-simulator",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/tutorials/developing-for-mobile/ios/build-and-run-your-application-on-a-simulator.md",tags:[],version:"0.10.x",frontMatter:{info:"build-and-run-your-application-on-a-simulator",title:"Build and run your application on a Simulator"},sidebar:"documentationSidebar",previous:{title:"Setting up your developer environment for iOS",permalink:"/avalonia-docs/docs/tutorials/developing-for-mobile/ios/setting-up-your-developer-environment-for-ios"},next:{title:"Build and Run your Application on your iPhone or iPad",permalink:"/avalonia-docs/docs/tutorials/developing-for-mobile/ios/build-and-run-your-application-on-your-iphone-or-ipad"}},u={},p=[],s={toc:p},d="wrapper";function c(e){let{components:o,...n}=e;return(0,r.kt)(d,(0,t.Z)({},s,n,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Please ensure you have followed the guide ",(0,r.kt)("a",{parentName:"p",href:"/avalonia-docs/docs/tutorials/developing-for-mobile/create-a-cross-platform-solution",title:"mention"},"create-a-cross-platform-solution.md"),"."),(0,r.kt)("p",null,"Assuming you have created a project called ",(0,r.kt)("inlineCode",{parentName:"p"},"HelloWord"),". Enter the directory ",(0,r.kt)("inlineCode",{parentName:"p"},"HelloWorld.iOS")," from the command line."),(0,r.kt)("p",null,"To build the project for iOS run the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet build\n")),(0,r.kt)("p",null,"To run the project in a simulator, run the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet run\n")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"/img/tutorials/developing-for-mobile/ios/build-and-run-your-application-on-a-simulator/image (34).png",alt:"Application running on iPad simulator"})),(0,r.kt)("p",null,"If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"JetBrains Rider")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Visual Studio for Mac")," you can open the solution and run, build and debug your program inside the simulator."))}c.isMDXComponent=!0}}]);