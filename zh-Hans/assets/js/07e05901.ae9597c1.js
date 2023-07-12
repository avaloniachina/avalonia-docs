"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[86331],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},48415:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={id:"troubleshooting",title:"Troubleshooting"},a=void 0,s={unversionedId:"basics/user-interface/styling/troubleshooting",id:"basics/user-interface/styling/troubleshooting",title:"Troubleshooting",description:"My Control Theme isn't being found",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/basics/user-interface/styling/troubleshooting.md",sourceDirName:"basics/user-interface/styling",slug:"/basics/user-interface/styling/troubleshooting",permalink:"/avalonia-docs/zh-Hans/docs/next/basics/user-interface/styling/troubleshooting",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/basics/user-interface/styling/troubleshooting.md",tags:[],version:"current",frontMatter:{id:"troubleshooting",title:"Troubleshooting"},sidebar:"documentationSidebar",previous:{title:"Simple Theme",permalink:"/avalonia-docs/zh-Hans/docs/next/basics/user-interface/styling/themes/simple"},next:{title:"Adding Interactivity",permalink:"/avalonia-docs/zh-Hans/docs/next/basics/user-interface/adding-interactivity"}},l={},c=[{value:"My Control Theme isn&#39;t being found",id:"my-control-theme-isnt-being-found",level:2},{value:"My Control Theme is Breaking Other Controls",id:"my-control-theme-is-breaking-other-controls",level:2},{value:"Application Window is transparent or there is no content rendered",id:"application-window-is-transparent-or-there-is-no-content-rendered",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"my-control-theme-isnt-being-found"},"My Control Theme isn't being found"),(0,o.kt)("p",null,"If you're having trouble getting Avalonia to find your theme, make sure it's returning a ",(0,o.kt)("a",{parentName:"p",href:"styles#style-key"},"style key")," which matches the ",(0,o.kt)("inlineCode",{parentName:"p"},"x:Key")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"TargetType")," of your control theme."),(0,o.kt)("h2",{id:"my-control-theme-is-breaking-other-controls"},"My Control Theme is Breaking Other Controls"),(0,o.kt)("p",null,"Many Avalonia controls consist of a combination of other Avalonia controls. If you create a style or control theme that applies to all controls of a type, you might get unexpected results. For example, if you create a style that targets the ",(0,o.kt)("inlineCode",{parentName:"p"},"TextBlock")," type in a ",(0,o.kt)("inlineCode",{parentName:"p"},"Window"),", the style is applied to all ",(0,o.kt)("inlineCode",{parentName:"p"},"TextBlock")," controls in the window, even if the ",(0,o.kt)("inlineCode",{parentName:"p"},"TextBlock")," is part of another control, such as a ",(0,o.kt)("inlineCode",{parentName:"p"},"ListBox"),"."),(0,o.kt)("h2",{id:"application-window-is-transparent-or-there-is-no-content-rendered"},"Application Window is transparent or there is no content rendered"),(0,o.kt)("p",null,"Make sure you have installed and included Avalonia theme in your application.\nIf you use build-in ",(0,o.kt)("a",{parentName:"p",href:"/avalonia-docs/zh-Hans/docs/next/basics/user-interface/styling/themes/fluent"},"Fluent")," or ",(0,o.kt)("a",{parentName:"p",href:"/avalonia-docs/zh-Hans/docs/next/basics/user-interface/styling/themes/simple"},"Simple")," themes, please visit their corresponding pages on how to install them."),(0,o.kt)("p",null,"If you use third party themes, please contact their maintainers."))}d.isMDXComponent=!0}}]);