"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[78191],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(t),f=i,d=p["".concat(l,".").concat(f)]||p[f]||u[f]||r;return t?a.createElement(d,o(o({ref:n},m),{},{components:t})):a.createElement(d,o({ref:n},m))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6892:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(87462),i=(t(67294),t(3905));const r={id:"animations",title:"Animations"},o="Animations",s={unversionedId:"basics/user-interface/animations",id:"basics/user-interface/animations",title:"Animations",description:"There are two types of animations in Avalonia UI:",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/basics/user-interface/animations.md",sourceDirName:"basics/user-interface",slug:"/basics/user-interface/animations",permalink:"/avalonia-docs/zh-Hans/docs/next/basics/user-interface/animations",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/basics/user-interface/animations.md",tags:[],version:"current",frontMatter:{id:"animations",title:"Animations"},sidebar:"documentationSidebar",previous:{title:"Assets and Images",permalink:"/avalonia-docs/zh-Hans/docs/next/basics/user-interface/assets"},next:{title:"File Dialogs",permalink:"/avalonia-docs/zh-Hans/docs/next/basics/user-interface/file-dialogs"}},l={},c=[{value:"Keyframe Animation",id:"keyframe-animation",level:2},{value:"Triggering Animations",id:"triggering-animations",level:2},{value:"Other Animation Settings",id:"other-animation-settings",level:2}],m={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"animations"},"Animations"),(0,i.kt)("p",null,"There are two types of animations in ",(0,i.kt)("em",{parentName:"p"},"Avalonia UI"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Keyframe Animation -  can change one or more property values using a timeline. Keyframes are defined along the timeline at cue points. The properties being changed are adjusted between keyframes using an easing function (which is a straight-line interpolation by default). Keyframe animations are a very versatile type of animation."),(0,i.kt)("li",{parentName:"ul"},"Transitions - can change a single property.")),(0,i.kt)("h2",{id:"keyframe-animation"},"Keyframe Animation"),(0,i.kt)("p",null,"The simplest keyframe animation will change one property value over a a specified duration by defining two keyframes with cue points at the start (0% of the duration) and the end (100% of the duration)."," "),(0,i.kt)("img",{src:"/img/gitbook-import/assets/image (2) (1) (4).png",alt:""}),(0,i.kt)("p",null,"The property value is then changed over time between the keyframes using the profile defined by an easing function. The default easing function is also the simplest - a straight-line interpolation between two keyframes."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can see the full range of easing functions in the reference, ",(0,i.kt)("a",{parentName:"p",href:"/avalonia-docs/zh-Hans/docs/next/reference/animation-settings"},"here"),".")),(0,i.kt)("h2",{id:"triggering-animations"},"Triggering Animations"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Avalonia UI")," animations defined in XAML rely on selectors for their triggering behavior. Selectors can always apply to a control, or they can conditionally apply (for example if the control has a style class applied)."),(0,i.kt)("p",null,"If the selector is not conditional then the animation will be triggered when a matching ",(0,i.kt)("inlineCode",{parentName:"p"},"Control")," is spawned into the visual tree. Otherwise, the animations will run whenever its selector is activated. When the selector no longer matches, the currently running animation will be cancelled."),(0,i.kt)("h2",{id:"other-animation-settings"},"Other Animation Settings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Delay"),(0,i.kt)("li",{parentName:"ul"},"Repeat"),(0,i.kt)("li",{parentName:"ul"},"Playback Direction"),(0,i.kt)("li",{parentName:"ul"},"Value Fill Mode"),(0,i.kt)("li",{parentName:"ul"},"Easing Function")))}u.isMDXComponent=!0}}]);