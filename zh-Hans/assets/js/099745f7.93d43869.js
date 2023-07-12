"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[41440],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>k});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),p=u(n),m=s,k=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(k,l(l({ref:t},i),{},{components:n})):o.createElement(k,l({ref:t},i))}));function k(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,l=new Array(r);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:s,l[1]=a;for(var u=2;u<r;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var o=n(87462),s=(n(67294),n(3905));const r={description:"REFERENCE - Styles"},l="Pseudo Classes",a={unversionedId:"reference/styles/pseudo-classes",id:"reference/styles/pseudo-classes",title:"Pseudo Classes",description:"REFERENCE - Styles",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/styles/pseudo-classes.md",sourceDirName:"reference/styles",slug:"/reference/styles/pseudo-classes",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/styles/pseudo-classes",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/reference/styles/pseudo-classes.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Styles"},sidebar:"documentationSidebar",previous:{title:"Styles",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/styles/"},next:{title:"Style Selector Syntax",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/styles/style-selector-syntax"}},c={},u=[{value:"Custom Pseudo Classes",id:"custom-pseudo-classes",level:3}],i={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"pseudo-classes"},"Pseudo Classes"),(0,s.kt)("p",null,"Pseudo classes are generated by a control, usually as a response to some sort of state."),(0,s.kt)("p",null,"For example ",(0,s.kt)("inlineCode",{parentName:"p"},":pointerover")," pseudo class indicates that the pointer input is currently over (inside the bounds of) a control. "," "),(0,s.kt)("p",null,"Pseudo classes are not set in the ",(0,s.kt)("inlineCode",{parentName:"p"},"Classes")," attributes of a control (unlike style classes)."),(0,s.kt)("p",null,"Common pseudo classes include:"),(0,s.kt)("p",null," ",(0,s.kt)("inlineCode",{parentName:"p"},":focus"),", ",(0,s.kt)("inlineCode",{parentName:"p"},":disabled"),", ",(0,s.kt)("inlineCode",{parentName:"p"},":pressed")," for buttons, and ",(0,s.kt)("inlineCode",{parentName:"p"},":checked")," for checkboxes."),(0,s.kt)("p",null,"A control can have more than one pseudo class active at a time."),(0,s.kt)("p",null,"You can target one or more pseudo classes in a style selector.  For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<Style Selector="Button.red:focus:pointover">\n')),(0,s.kt)("p",null,"This selector targets button controls with the red class set, and that are in the ",(0,s.kt)("inlineCode",{parentName:"p"},":focus")," and the ",(0,s.kt)("inlineCode",{parentName:"p"},":pointover")," pseudo class state."),(0,s.kt)("p",null,"Some common pseudo classes:"),(0,s.kt)("table",null,(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("th",{width:"187"},"Pseudo Class"),(0,s.kt)("th",null,"Description"))),(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,":pointerover")),(0,s.kt)("td",null,"The pointer input is currently over (inside the bounds of) a control")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,":focus")),(0,s.kt)("td",null,"A control has the input focus.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,":disabled")),(0,s.kt)("td",null,"A control is unable to respond to user interaction.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,":pressed")),(0,s.kt)("td",null,"A button control is in the down position.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,":checked")),(0,s.kt)("td",null,"A checkbox control is selected (check mark is showing).")))),(0,s.kt)("h3",{id:"custom-pseudo-classes"},"Custom Pseudo Classes"),(0,s.kt)("p",null,"You can create your own pseudo classes for custom controls based on ",(0,s.kt)("inlineCode",{parentName:"p"},"CustomControl")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"TemplatedControl"),". The function below adds or remove a pseudo class depending on a Boolean value on a ",(0,s.kt)("inlineCode",{parentName:"p"},"StyledElement"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'PseudoClasses.Set(":className", bool);\n')))}d.isMDXComponent=!0}}]);