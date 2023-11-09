"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[75777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,v=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(v,i(i({ref:t},c),{},{components:n})):a.createElement(v,i({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>m,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o=n.p+"assets/images/rider-welcome-b78d2d68f675a67dfdceab0125466f15.png",i=n.p+"assets/images/configure-plugin-repos-36f77386eed1e7b7d0b9ac70d5b82fd4.png",l=n.p+"assets/images/enter-plugin-repo-4201038cd29dad12bd24bd34fa456d5d.png",p=n.p+"assets/images/plugin-install-8e85357c59e3e8a097e5b29f1881f939.png",s={id:"setup-development-environment",title:"Setup Development Environment"},c=void 0,m={unversionedId:"tutorials/music-store-app/setup-development-environment",id:"version-0.10.x/tutorials/music-store-app/setup-development-environment",title:"Setup Development Environment",description:"Setting up your development environment",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/tutorials/music-store-app/setup-development-environment.md",sourceDirName:"tutorials/music-store-app",slug:"/tutorials/music-store-app/setup-development-environment",permalink:"/avalonia-docs/zh-Hans/docs/tutorials/music-store-app/setup-development-environment",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/tutorials/music-store-app/setup-development-environment.md",tags:[],version:"0.10.x",frontMatter:{id:"setup-development-environment",title:"Setup Development Environment"},sidebar:"documentationSidebar",previous:{title:"Music Store App",permalink:"/avalonia-docs/zh-Hans/docs/tutorials/music-store-app/"},next:{title:"Create the Project",permalink:"/avalonia-docs/zh-Hans/docs/tutorials/music-store-app/creating-the-project"}},u={},d=[{value:"Setting up your development environment",id:"setting-up-your-development-environment",level:3}],v={toc:d},f="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"setting-up-your-development-environment"},"Setting up your development environment"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download and install .NET 5 SDK ",(0,r.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/download"},"Download .NET ","(","Linux, macOS, and Windows",")"," ","(","microsoft.com",")")),(0,r.kt)("p",{parentName:"li"},"This is the runtime, development kit ","(","compiler, etc",")"," that is used to build Avalonia applications.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install Avalonia Templates"),(0,r.kt)("p",{parentName:"li"},"Run the command ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet new -i Avalonia.Templates")," from the command prompt on your machine."),(0,r.kt)("p",{parentName:"li"},"The output will look similar to this."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet new -i Avalonia.Templates\n  Determining projects to restore...\n  Restored /Users/danwalmsley/.templateengine/dotnetcli/v5.0.200/scratch/restore.csproj (in 706 ms).\n\nTemplates                                     Short Name            Language    Tags\n.....\n\nAvalonia Resource Dictionary                  avalonia.resource                 ui/xaml/avalonia/avaloniaui\nAvalonia Styles                               avalonia.styles                   ui/xaml/avalonia/avaloniaui\n\nExamples:\n    dotnet new mvc --auth Individual\n    dotnet new mstest\n    dotnet new --help\n    dotnet new avalonia.mvvm --help\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download and install ",(0,r.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/rider/"},"Rider: The Cross-Platform .NET IDE from JetBrains")),(0,r.kt)("p",{parentName:"li"},"Rider will give you the very best development experience available for Avalonia. It is available for Windows, Linux and macOS")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the Avalonia Plugin"),(0,r.kt)("p",{parentName:"li"},"Once Rider loads you will see the Welcome Screen. Click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Configure")," dropdown and select ",(0,r.kt)("inlineCode",{parentName:"p"},"Plugins"),"."))),(0,r.kt)("img",{className:"center",src:o,alt:"Rider welcome"}),(0,r.kt)("p",null,"A new Preferences Screen will open up. Click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," icon as shown and select ",(0,r.kt)("inlineCode",{parentName:"p"},"Manage Plugin Repositories...")),(0,r.kt)("img",{className:"center",src:i,alt:"Configure plugin repos"}),(0,r.kt)("p",null,"Click the ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," icon and enter the URL ",(0,r.kt)("inlineCode",{parentName:"p"},"https://plugins.jetbrains.com/plugins/dev/14839"),"then click ",(0,r.kt)("inlineCode",{parentName:"p"},"OK")),(0,r.kt)("img",{className:"center",src:l,alt:"Enter plugin repo"}),(0,r.kt)("p",null,"Now click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Marketplace")," tab and search for ",(0,r.kt)("inlineCode",{parentName:"p"},"Avalonia"),". Select ",(0,r.kt)("inlineCode",{parentName:"p"},"AvaloniaRider")," and click ",(0,r.kt)("inlineCode",{parentName:"p"},"Install")," then once that's done, click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Restart IDE")," button that will appear."),(0,r.kt)("img",{className:"center",src:p,alt:"Plugin install"}),(0,r.kt)("p",null,"Now Rider should be ready to develop Avalonia applications."))}g.isMDXComponent=!0}}]);