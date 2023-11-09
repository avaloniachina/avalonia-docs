"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[85021],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},o=void 0,l={unversionedId:"get-started/getting-started",id:"get-started/getting-started",title:"getting-started",description:"s---",source:"@site/docs/get-started/getting-started.md",sourceDirName:"get-started",slug:"/get-started/getting-started",permalink:"/avalonia-docs/docs/next/get-started/getting-started",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/get-started/getting-started.md",tags:[],version:"current",frontMatter:{}},p={},c=[{value:"title: Starting with the CLI",id:"title-starting-with-the-cli",level:2},{value:"Install Avalonia UI Templates",id:"install-avalonia-ui-templates",level:2},{value:"Create a new Application",id:"create-a-new-application",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"s---\nid: getting-started"),(0,r.kt)("h2",{id:"title-starting-with-the-cli"},"title: Starting with the CLI"),(0,r.kt)("p",null,"If you build your projects with the .NET CLI, then follow the procedures here to install the ",(0,r.kt)("em",{parentName:"p"},"Avalonia UI")," templates and create your first application."),(0,r.kt)("h2",{id:"install-avalonia-ui-templates"},"Install Avalonia UI Templates"),(0,r.kt)("p",null,"To install the ",(0,r.kt)("em",{parentName:"p"},"Avalonia UI")," templates, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet new install Avalonia.Templates\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note: For .NET 6.0 and earlier, you must use ",(0,r.kt)("inlineCode",{parentName:"p"},"--install")," instead.")),(0,r.kt)("h2",{id:"create-a-new-application"},"Create a new Application"),(0,r.kt)("p",null,"Once the templates are installed, you can create a new ",(0,r.kt)("em",{parentName:"p"},"Avalonia UI")," application by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet new avalonia.app -o MyApp\n")),(0,r.kt)("p",null,"This will create a new folder called ",(0,r.kt)("inlineCode",{parentName:"p"},"MyApp")," containing your application files. To run the application, navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"MyApp")," folder and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd MyApp\ndotnet run\n")),(0,r.kt)("p",null,"That is all there is to it! Your ",(0,r.kt)("em",{parentName:"p"},"Avalonia UI")," application is now up and running. Next you can open the ",(0,r.kt)("inlineCode",{parentName:"p"},"MyApp")," folder to start improving and building your application further."))}d.isMDXComponent=!0}}]);