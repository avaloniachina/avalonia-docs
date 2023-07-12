"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[83420],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(o),f=r,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return o?n.createElement(m,i(i({ref:t},u),{},{components:o})):n.createElement(m,i({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},2704:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const a={id:"types-of-control",title:"Types of Control"},i=void 0,s={unversionedId:"guides/custom-controls/types-of-control",id:"guides/custom-controls/types-of-control",title:"Types of Control",description:"If you want to create your own controls, there are three main categories of control in Avalonia. The first thing to do is choose the category of control that best suits your use-case.",source:"@site/docs/guides/custom-controls/types-of-control.md",sourceDirName:"guides/custom-controls",slug:"/guides/custom-controls/types-of-control",permalink:"/avalonia-docs/docs/next/guides/custom-controls/types-of-control",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/custom-controls/types-of-control.md",tags:[],version:"current",frontMatter:{id:"types-of-control",title:"Types of Control"},sidebar:"documentationSidebar",previous:{title:"How To Use Transitions",permalink:"/avalonia-docs/docs/next/guides/graphics-and-animation/transitions"},next:{title:"How To Create a Custom Panel",permalink:"/avalonia-docs/docs/next/guides/custom-controls/create-a-custom-panel"}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you want to create your own controls, there are three main categories of control in Avalonia. The first thing to do is choose the category of control that best suits your use-case."),(0,r.kt)("p",null,'User Controls\nUserControls are the simplest way to author controls. This type of control is best for "views" or "pages" that are specific to an application. UserControls are authored in the same way as you would author a Window: by creating a new UserControl from a template and adding controls to it.'),(0,r.kt)("p",null,"Templated Controls\nTemplatedControls are best used for generic controls that can be shared among various applications. They are lookless controls, meaning that they can be restyled for different themes and applications. The majority of standard controls defined by Avalonia fit into this category."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In WPF/UWP you would inherit from the Control class to create a new templated control, but in Avalonia you should inherit from TemplatedControl. ")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to provide a Style for your TemplatedControl in a separate file, remember to include this file in your Application via StyleInclude. :::"),(0,r.kt)("p",{parentName:"admonition"},"Basic Control\nBasic Controls are the foundation of user interfaces - they draw themselves using geometry by overriding the Visual.Render method. Controls such as TextBlock and Image fall into this category.")),(0,r.kt)("p",null,"In WPF/UWP you would inherit from the FrameworkElement class to create a new basic control, but in Avalonia you should inherit from Control.\n:::"))}d.isMDXComponent=!0}}]);