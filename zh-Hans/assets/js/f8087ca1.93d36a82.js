"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[77702],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,m=p["".concat(s,".").concat(d)]||p[d]||g[d]||l;return t?n.createElement(m,a(a({ref:r},u),{},{components:t})):n.createElement(m,a({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},38695:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const l={description:"REFERENCE - Gestures"},a="ScrollGestureRecognizer",i={unversionedId:"reference/gestures/scrollgesturerecognizer",id:"reference/gestures/scrollgesturerecognizer",title:"ScrollGestureRecognizer",description:"REFERENCE - Gestures",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/gestures/scrollgesturerecognizer.md",sourceDirName:"reference/gestures",slug:"/reference/gestures/scrollgesturerecognizer",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/gestures/scrollgesturerecognizer",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/reference/gestures/scrollgesturerecognizer.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Gestures"},sidebar:"documentationSidebar",previous:{title:"PullGestureRecognizer",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/gestures/pullgesturerecognizer"},next:{title:"index",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/"}},s={},c=[{value:"Using a ScrollGestureRecognizer",id:"using-a-scrollgesturerecognizer",level:2},{value:"Useful Properties ",id:"useful-properties-",level:2},{value:"More Information",id:"more-information",level:2}],u={toc:c},p="wrapper";function g(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scrollgesturerecognizer"},"ScrollGestureRecognizer"),(0,o.kt)("p",null,"A gesture recognizer that tracks a scrolling gesture. This can be attached to a control to detect when a pointer moves in a specific direction inside the control's bounds. This is especially useful when a control pans its contents, either horizontally, vertically or both."),(0,o.kt)("h2",{id:"using-a-scrollgesturerecognizer"},"Using a ScrollGestureRecognizer"),(0,o.kt)("p",null,"A ScrollGestureRecognizer can be attached to a control using the control's ",(0,o.kt)("inlineCode",{parentName:"p"},"GestureRecognizers")," property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<Image Stretch="UniformToFill"\n        Margin="5"\n        Name="image"\n        Source="/image.jpg">\n  <Image.GestureRecognizers>\n    <ScrollGestureRecognizer CanHorizontallyScroll="True"\n                              CanVerticallyScroll="True"/>\n  </Image.GestureRecognizers>\n</Image>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"title='C#'",title:"'C#'"},"image.GestureRecognizers.Add(new ScrollGestureRecognizer()\n            {\n                CanVerticallyScroll = true,\n                CanHorizontallyScroll = true,\n            });\n")),(0,o.kt)("p",null,"The ScrollGestureRegonizer raises a ",(0,o.kt)("inlineCode",{parentName:"p"},"Gestures.ScrollGestureEvent")," when it detects the start of a scroll gesture. When the scroll ends, from the pointer being released or another gesture start, it raises a ",(0,o.kt)("inlineCode",{parentName:"p"},"Gestures.ScrollGestureEndedEvent"),"."),(0,o.kt)("h2",{id:"useful-properties-"},"Useful Properties"," "),(0,o.kt)("p",null,"You will probably use these properties most often:"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{width:"266"},"Property"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"CanVerticallyScroll"),(0,o.kt)("td",null,"Defines whether the content can be scrolled vertically. ")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"CanHorizontallyScroll"),(0,o.kt)("td",null,"Defines whether the content can be scrolled horizontally. ")))),(0,o.kt)("h2",{id:"more-information"},"More Information"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For the complete API documentation about this gesture recognizer, see ",(0,o.kt)("a",{parentName:"p",href:"https://reference.avaloniaui.net/api/Avalonia.Input.GestureRecognizers/ScrollGestureRecognizer/"},"here"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"View the source code on ",(0,o.kt)("em",{parentName:"p"},"GitHub")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Base/Input/GestureRecognizers/ScrollGestureRecognizer.cs"},(0,o.kt)("inlineCode",{parentName:"a"},"ScrollGestureRecognizer.cs")))))}g.isMDXComponent=!0}}]);