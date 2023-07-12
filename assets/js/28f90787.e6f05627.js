"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[78217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=m(n),u=o,f=s["".concat(c,".").concat(u)]||s[u]||d[u]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var m=2;m<a;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60712:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var r=n(87462),o=(n(67294),n(3905));const a={},l="UIElement, FrameworkElement and Control",i={unversionedId:"get-started/wpf/uielement-frameworkelement-and-control",id:"get-started/wpf/uielement-frameworkelement-and-control",title:"UIElement, FrameworkElement and Control",description:"WPF's UIElement and FrameworkElement are non-templated control base classes, which roughly equate to the Avalonia Control class. WPF's Control class on the other hand is a templated control - Avalonia's equivalent of this is TemplatedControl.",source:"@site/docs/get-started/wpf/uielement-frameworkelement-and-control.md",sourceDirName:"get-started/wpf",slug:"/get-started/wpf/uielement-frameworkelement-and-control",permalink:"/avalonia-docs/docs/next/get-started/wpf/uielement-frameworkelement-and-control",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/get-started/wpf/uielement-frameworkelement-and-control.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"HierarchicalDataTemplate",permalink:"/avalonia-docs/docs/next/get-started/wpf/hierarchicaldatatemplate"},next:{title:"DependencyProperty",permalink:"/avalonia-docs/docs/next/get-started/wpf/dependencyproperty"}},c={},m=[],p={toc:m},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"uielement-frameworkelement-and-control"},"UIElement, FrameworkElement and Control"),(0,o.kt)("p",null,"WPF's ",(0,o.kt)("inlineCode",{parentName:"p"},"UIElement")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"FrameworkElement")," are non-templated control base classes, which roughly equate to the Avalonia ",(0,o.kt)("inlineCode",{parentName:"p"},"Control")," class. WPF's ",(0,o.kt)("inlineCode",{parentName:"p"},"Control")," class on the other hand is a templated control - Avalonia's equivalent of this is ",(0,o.kt)("inlineCode",{parentName:"p"},"TemplatedControl"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In WPF/UWP you would inherit from the ",(0,o.kt)("inlineCode",{parentName:"li"},"Control")," class to create a new templated control, but in Avalonia you should inherit from ",(0,o.kt)("inlineCode",{parentName:"li"},"TemplatedControl.")),(0,o.kt)("li",{parentName:"ul"},"In WPF/UWP you would inherit from the ",(0,o.kt)("inlineCode",{parentName:"li"},"FrameworkElement")," class to create a new custom-drawn control, but in Avalonia you should inherit from ",(0,o.kt)("inlineCode",{parentName:"li"},"Control."))),(0,o.kt)("p",null,"So to recap:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"UIElement")," \ud83e\udc1e ",(0,o.kt)("inlineCode",{parentName:"li"},"Control")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FrameworkElement"),"\ud83e\udc1e ",(0,o.kt)("inlineCode",{parentName:"li"},"Control")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Control")," \ud83e\udc1e ",(0,o.kt)("inlineCode",{parentName:"li"},"TemplatedControl"))))}d.isMDXComponent=!0}}]);