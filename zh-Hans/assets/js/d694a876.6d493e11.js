"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[76193],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77149:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={description:"CONCEPTS"},c="\u63a7\u4ef6\u6811",i={unversionedId:"concepts/control-trees",id:"concepts/control-trees",title:"\u63a7\u4ef6\u6811",description:"CONCEPTS",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/concepts/control-trees.md",sourceDirName:"concepts",slug:"/concepts/control-trees",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/control-trees",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/concepts/control-trees.md",tags:[],version:"current",frontMatter:{description:"CONCEPTS"},sidebar:"documentationSidebar",previous:{title:"\u9644\u52a0\u5c5e\u6027",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/attached-property"},next:{title:"\u63a7\u4ef6\u5185\u5bb9",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/templates/data-templates"}},l={},p=[{value:"\u903b\u8f91\u6811",id:"\u903b\u8f91\u6811",level:2},{value:"\u53ef\u89c6\u6811",id:"\u53ef\u89c6\u6811",level:2},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u63a7\u4ef6\u6811"},"\u63a7\u4ef6\u6811"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Avalonia UI")," \u4ece\u5e94\u7528\u7a0b\u5e8f\u7684 XAML \u6587\u4ef6\u4e2d\u521b\u5efa\u63a7\u4ef6\u6811\uff0c\u4ee5\u4fbf\u80fd\u591f\u6e32\u67d3 UI \u5e76\u7ba1\u7406\u5e94\u7528\u7a0b\u5e8f\u7684\u529f\u80fd\u3002"),(0,o.kt)("h2",{id:"\u903b\u8f91\u6811"},"\u903b\u8f91\u6811"),(0,o.kt)("p",null,"\u903b\u8f91\u63a7\u4ef6\u6811\u4ee5 XAML \u4e2d\u5b9a\u4e49\u7684\u5c42\u6b21\u7ed3\u6784\u8868\u793a\u5e94\u7528\u7a0b\u5e8f\u63a7\u4ef6\uff08\u5305\u62ec\u4e3b\u7a97\u53e3\uff09\u3002\u4f8b\u5982\uff1a\u7a97\u53e3\u4e2d\u7684\u4e00\u4e2a\u63a7\u4ef6\uff08\u6309\u94ae\uff09\u5728\u53e6\u4e00\u4e2a\u63a7\u4ef6\uff08\u5806\u6808\u9762\u677f\uff09\u5185\u90e8\uff0c\u5c06\u5f62\u6210\u4e00\u4e2a\u4e09\u5c42\u7684\u903b\u8f91\u6811\u3002"),(0,o.kt)("img",{src:"/img/gitbook-import/assets/image (61).png",alt:""}),(0,o.kt)("p",null,"\u5728\u5e94\u7528\u7a0b\u5e8f\u8fd0\u884c\u65f6\uff0c\u60a8\u53ef\u4ee5\u6253\u5f00 ",(0,o.kt)("em",{parentName:"p"},"Avalonia Dev Tools")," \u7a97\u53e3\uff08\u6309 F12 \u952e\uff09\u3002\u8fd9\u5c06\u5728\u5176 ",(0,o.kt)("strong",{parentName:"p"},"\u903b\u8f91\u6811")," \u9009\u9879\u5361\u4e0a\u663e\u793a\u903b\u8f91\u6811\u3002"),(0,o.kt)("h2",{id:"\u53ef\u89c6\u6811"},"\u53ef\u89c6\u6811"),(0,o.kt)("p",null,"\u53ef\u89c6\u63a7\u4ef6\u6811\u5305\u542b ",(0,o.kt)("em",{parentName:"p"},"Avalonia UI")," \u5b9e\u9645\u8fd0\u884c\u7684\u6240\u6709\u5185\u5bb9\u3002\u5b83\u663e\u793a\u4e86\u63a7\u4ef6\u4e0a\u8bbe\u7f6e\u7684\u6240\u6709\u5c5e\u6027\uff0c\u4ee5\u53ca ",(0,o.kt)("em",{parentName:"p"},"Avalonia UI")," \u6dfb\u52a0\u7684\u6240\u6709\u989d\u5916\u90e8\u5206\uff0c\u4ee5\u5448\u73b0 UI \u5e76\u7ba1\u7406\u5e94\u7528\u7a0b\u5e8f\u7684\u529f\u80fd\u3002"),(0,o.kt)("img",{src:"/img/gitbook-import/assets/image (15) (2).png",alt:""}),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728 ",(0,o.kt)("em",{parentName:"p"},"Avalonia Dev Tools")," \u7a97\u53e3\u7684 ",(0,o.kt)("strong",{parentName:"p"},"\u53ef\u89c6\u6811")," \u9009\u9879\u5361\u4e0a\u67e5\u770b\u53ef\u89c6\u63a7\u4ef6\u6811\u3002"),(0,o.kt)("h2",{id:"\u4e8b\u4ef6"},"\u4e8b\u4ef6"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Avalonia UI")," \u6267\u884c\u5e94\u7528\u7a0b\u5e8f\u529f\u80fd\u7ba1\u7406\u7684\u4e00\u4e2a\u91cd\u8981\u90e8\u5206\u662f\u4e8b\u4ef6\u7684\u751f\u6210\u548c\u4f20\u64ad\u3002",(0,o.kt)("strong",{parentName:"p"},"\u4e8b\u4ef6")," \u9009\u9879\u5361\u8bb0\u5f55\u4e86\u4e8b\u4ef6\u7684\u6e90\u548c\u4f20\u64ad\uff0c\u5f53\u60a8\u5728\u8fd0\u884c\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\u79fb\u52a8\u6216\u4e0e\u5176\u4ea4\u4e92\u65f6\u3002"),(0,o.kt)("img",{src:"/img/gitbook-import/assets/image (1) (1) (2).png",alt:""}))}m.isMDXComponent=!0}}]);