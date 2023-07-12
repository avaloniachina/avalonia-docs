"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[16926],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,g=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={description:"CONCEPTS - Input"},i="Gestures",s={unversionedId:"concepts/input/gestures",id:"concepts/input/gestures",title:"Gestures",description:"CONCEPTS - Input",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/concepts/input/gestures.md",sourceDirName:"concepts/input",slug:"/concepts/input/gestures",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/input/gestures",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/concepts/input/gestures.md",tags:[],version:"current",frontMatter:{description:"CONCEPTS - Input"},sidebar:"documentationSidebar",previous:{title:"Mouse and Pointer Devices",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/input/pointer"},next:{title:"Keyboard and Hotkeys",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/input/hotkeys"}},c={},l=[{value:"More Information",id:"more-information",level:2}],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gestures"},"Gestures"),(0,o.kt)("p",null,"Controls can detect gestures using Gesture Recognizers. These recognizers are hosted in controls, and listen for and track pointer events that the control receives, sending gesture events when they have detected a gesture has started."),(0,o.kt)("p",null,"All gesture recognizers derive from the base class ",(0,o.kt)("inlineCode",{parentName:"p"},"GestureRecognizer"),", and can be attached to a control using the control's ",(0,o.kt)("inlineCode",{parentName:"p"},"GestureRecognizers")," property. The following shows an Image hosting a ",(0,o.kt)("inlineCode",{parentName:"p"},"ScrollGestureRecognizer"),";"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<Image Stretch="UniformToFill"\n        Margin="5"\n        Name="image"\n        Source="/image.jpg">\n  <Image.GestureRecognizers>\n    <ScrollGestureRecognizer CanHorizontallyScroll="True"\n                              CanVerticallyScroll="True"/>\n  </Image.GestureRecognizers>\n</Image>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"title='C#'",title:"'C#'"},"image.GestureRecognizers.Add(new ScrollGestureRecognizer()\n            {\n                CanVerticallyScroll = true,\n                CanHorizontallyScroll = true,\n            });\n")),(0,o.kt)("h2",{id:"more-information"},"More Information"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can view more information on the available gesture recognizers ",(0,o.kt)("a",{parentName:"p",href:"../../reference/gestures"},"here")),(0,o.kt)("p",{parentName:"admonition"},"You can view the source for related classes"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Base/Input/GestureRecognizers/GestureRecognizer.cs"},"GestureRecognizer")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Base/Input/GestureRecognizers/GestureRecognizerCollection.cs"},"GestureRecognizerCollection"))))}m.isMDXComponent=!0}}]);