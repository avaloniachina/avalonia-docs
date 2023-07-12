"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[97030],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),m=i,h=l["".concat(s,".").concat(m)]||l[m]||g[m]||o;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77987:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const o={description:"REFERENCE - Gestures"},a="PinchGestureRecognizer",c={unversionedId:"reference/gestures/pinchgesturerecognizer",id:"reference/gestures/pinchgesturerecognizer",title:"PinchGestureRecognizer",description:"REFERENCE - Gestures",source:"@site/docs/reference/gestures/pinchgesturerecognizer.md",sourceDirName:"reference/gestures",slug:"/reference/gestures/pinchgesturerecognizer",permalink:"/avalonia-docs/docs/next/reference/gestures/pinchgesturerecognizer",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/reference/gestures/pinchgesturerecognizer.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Gestures"},sidebar:"documentationSidebar",previous:{title:"Gestures",permalink:"/avalonia-docs/docs/next/reference/gestures/"},next:{title:"PullGestureRecognizer",permalink:"/avalonia-docs/docs/next/reference/gestures/pullgesturerecognizer"}},s={},u=[{value:"Using a PinchGestureRecognizer",id:"using-a-pinchgesturerecognizer",level:2},{value:"More Information",id:"more-information",level:2}],p={toc:u},l="wrapper";function g(e){let{components:t,...r}=e;return(0,i.kt)(l,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pinchgesturerecognizer"},"PinchGestureRecognizer"),(0,i.kt)("p",null,"A gesture recognizer that tracks a pinch gesture. A pinch gesture occurs when two pointer contacts are brought towards each other, or away from each other. This is useful in controls that implements a pinch to zoom interaction."),(0,i.kt)("h2",{id:"using-a-pinchgesturerecognizer"},"Using a PinchGestureRecognizer"),(0,i.kt)("p",null,"A PinchGestureRecognizer can be attached to a control using the control's ",(0,i.kt)("inlineCode",{parentName:"p"},"GestureRecognizers")," property."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<Image Stretch="UniformToFill"\n        Margin="5"\n        Name="image"\n        Source="/image.jpg">\n  <Image.GestureRecognizers>\n    <PinchGestureRecognizer/>\n  </Image.GestureRecognizers>\n</Image>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"title='C#'",title:"'C#'"},"image.GestureRecognizers.Add(new PinchGestureRecognizer());\n")),(0,i.kt)("p",null,"The PinchGestureRegonizer raises a ",(0,i.kt)("inlineCode",{parentName:"p"},"Gestures.PinchEvent")," when it detects the start of a pull gesture. When the pull ends, from the pointer being released or another gesture start, it raises a ",(0,i.kt)("inlineCode",{parentName:"p"},"Gestures.PinchEndedEvent"),".\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"Scale")," property in the args passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Gestures.PinchEvent")," event handler contains the relative size of the pinch since it started."),(0,i.kt)("h2",{id:"more-information"},"More Information"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"View the source code on ",(0,i.kt)("em",{parentName:"p"},"GitHub")," "),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Base/Input/GestureRecognizers/PinchGestureRecognizer.cs"},(0,i.kt)("inlineCode",{parentName:"a"},"PinchGestureRecognizer.cs"))),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Base/Input/PinchEventArgs.cs"},(0,i.kt)("inlineCode",{parentName:"a"},"PinchEventArgs.cs")))))}g.isMDXComponent=!0}}]);