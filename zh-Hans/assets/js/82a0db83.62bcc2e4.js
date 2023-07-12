"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[45553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=m(n),u=a,f=s["".concat(c,".").concat(u)]||s[u]||d[u]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const o={},l="UIElement, FrameworkElement and Control",i={unversionedId:"get-started/wpf/uielement-frameworkelement-and-control",id:"get-started/wpf/uielement-frameworkelement-and-control",title:"UIElement, FrameworkElement and Control",description:"WPF's UIElement and FrameworkElement are non-templated control base classes, which roughly equate to the Avalonia Control class. WPF's Control class on the other hand is a templated control - Avalonia's equivalent of this is TemplatedControl.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/get-started/wpf/uielement-frameworkelement-and-control.md",sourceDirName:"get-started/wpf",slug:"/get-started/wpf/uielement-frameworkelement-and-control",permalink:"/avalonia-docs/zh-Hans/docs/next/get-started/wpf/uielement-frameworkelement-and-control",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/get-started/wpf/uielement-frameworkelement-and-control.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"HierarchicalDataTemplate",permalink:"/avalonia-docs/zh-Hans/docs/next/get-started/wpf/hierarchicaldatatemplate"},next:{title:"DependencyProperty",permalink:"/avalonia-docs/zh-Hans/docs/next/get-started/wpf/dependencyproperty"}},c={},m=[],p={toc:m},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"uielement-frameworkelement-and-control"},"UIElement, FrameworkElement and Control"),(0,a.kt)("p",null,"WPF's ",(0,a.kt)("inlineCode",{parentName:"p"},"UIElement")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"FrameworkElement")," are non-templated control base classes, which roughly equate to the Avalonia ",(0,a.kt)("inlineCode",{parentName:"p"},"Control")," class. WPF's ",(0,a.kt)("inlineCode",{parentName:"p"},"Control")," class on the other hand is a templated control - Avalonia's equivalent of this is ",(0,a.kt)("inlineCode",{parentName:"p"},"TemplatedControl"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In WPF/UWP you would inherit from the ",(0,a.kt)("inlineCode",{parentName:"li"},"Control")," class to create a new templated control, but in Avalonia you should inherit from ",(0,a.kt)("inlineCode",{parentName:"li"},"TemplatedControl.")),(0,a.kt)("li",{parentName:"ul"},"In WPF/UWP you would inherit from the ",(0,a.kt)("inlineCode",{parentName:"li"},"FrameworkElement")," class to create a new custom-drawn control, but in Avalonia you should inherit from ",(0,a.kt)("inlineCode",{parentName:"li"},"Control."))),(0,a.kt)("p",null,"So to recap:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UIElement")," \ud83e\udc1e ",(0,a.kt)("inlineCode",{parentName:"li"},"Control")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FrameworkElement"),"\ud83e\udc1e ",(0,a.kt)("inlineCode",{parentName:"li"},"Control")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Control")," \ud83e\udc1e ",(0,a.kt)("inlineCode",{parentName:"li"},"TemplatedControl"))))}d.isMDXComponent=!0}}]);