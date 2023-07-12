"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[1800],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),i=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=i(t),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(m,s(s({ref:n},u),{},{components:t})):r.createElement(m,s({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},40210:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=t(87462),a=(t(67294),t(3905));const o={id:"focus-manager",title:"Focus Manager"},s=void 0,c={unversionedId:"concepts/services/focus-manager",id:"concepts/services/focus-manager",title:"Focus Manager",description:"The FocusManager service is responsible for managing the keyboard focus for the application. It keeps track of the currently focused element and the current focus scope.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/concepts/services/focus-manager.md",sourceDirName:"concepts/services",slug:"/concepts/services/focus-manager",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/services/focus-manager",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/concepts/services/focus-manager.md",tags:[],version:"current",frontMatter:{id:"focus-manager",title:"Focus Manager"},sidebar:"documentationSidebar",previous:{title:"Clipboard",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/services/clipboard"},next:{title:"Insets Manager",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/services/insets-manager"}},l={},i=[{value:"Methods",id:"methods",level:2},{value:"ClearFocus()",id:"clearfocus",level:3},{value:"Tips",id:"tips",level:2},{value:"Focusing a control",id:"focusing-a-control",level:3},{value:"Listening for global focus changes",id:"listening-for-global-focus-changes",level:3}],u={toc:i},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"FocusManager")," service is responsible for managing the keyboard focus for the application. It keeps track of the currently focused element and the current focus scope. "),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"FocusManager")," can be access through an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"TopLevel")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Window"),", for more details on accessing ",(0,a.kt)("inlineCode",{parentName:"p"},"TopLevel")," please visit ",(0,a.kt)("a",{parentName:"p",href:"../toplevel"},"TopLevel")," page:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"var focusManager = window.FocusManager;\n")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("p",null,"###\xa0GetFocusedElement()\nReturns the currently focused element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"IInputElement? GetFocusedElement()\n")),(0,a.kt)("h3",{id:"clearfocus"},"ClearFocus()"),(0,a.kt)("p",null,"Clears the currently focused element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"void ClearFocus()\n")),(0,a.kt)("h2",{id:"tips"},"Tips"),(0,a.kt)("h3",{id:"focusing-a-control"},"Focusing a control"),(0,a.kt)("p",null,"Developers usually don't need a ",(0,a.kt)("inlineCode",{parentName:"p"},"FocusManager")," service to focus a control.\nIt can be achieved with a method call directly on the control:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"var hasFocused = button.Focus();\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Focus")," method might return ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," is control is not visible and has ",(0,a.kt)("inlineCode",{parentName:"p"},"Focusable")," property set to false."),(0,a.kt)("h3",{id:"listening-for-global-focus-changes"},"Listening for global focus changes"),(0,a.kt)("p",null,"While ",(0,a.kt)("inlineCode",{parentName:"p"},"FocusManager.GetFocusedElement")," method allows to get currently focused control, it's not suitable as an event.\nInstead, please use ",(0,a.kt)("inlineCode",{parentName:"p"},"InputElement.GotFocusEvent.Raised.Subscribe(handler)")," method. Note, it listens events globally across all top levels."))}d.isMDXComponent=!0}}]);