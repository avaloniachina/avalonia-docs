"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[22965],{3905:(A,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>s});var n=t(67294);function o(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function a(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){o(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function i(A,e){if(null==A)return{};var t,n,o=function(A,e){if(null==A)return{};var t,n,o={},r=Object.keys(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(o[t]=A[t]);return o}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(o[t]=A[t])}return o}var l=n.createContext({}),g=function(A){var e=n.useContext(l),t=e;return A&&(t="function"==typeof A?A(e):a(a({},e),A)),t},c=function(A){var e=g(A.components);return n.createElement(l.Provider,{value:e},A.children)},C="mdxType",E={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},Q=n.forwardRef((function(A,e){var t=A.components,o=A.mdxType,r=A.originalType,l=A.parentName,c=i(A,["components","mdxType","originalType","parentName"]),C=g(t),Q=o,s=C["".concat(l,".").concat(Q)]||C[Q]||E[Q]||r;return t?n.createElement(s,a(a({ref:e},c),{},{components:t})):n.createElement(s,a({ref:e},c))}));function s(A,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof A||o){var r=t.length,a=new Array(r);a[0]=Q;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=A,i[C]="string"==typeof A?A:o,a[1]=i;for(var g=2;g<r;g++)a[g]=t[g];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}Q.displayName="MDXCreateElement"},70840:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>g,toc:()=>C});var n=t(87462),o=(t(67294),t(3905));const r="data:image/png;base64,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",a="data:image/png;base64,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",i={description:"REFERENCE - Built-in Controls"},l="Canvas",g={unversionedId:"reference/controls/canvas",id:"reference/controls/canvas",title:"Canvas",description:"REFERENCE - Built-in Controls",source:"@site/docs/reference/controls/canvas.md",sourceDirName:"reference/controls",slug:"/reference/controls/canvas",permalink:"/avalonia-docs/docs/next/reference/controls/canvas",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/reference/controls/canvas.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Controls"},sidebar:"documentationSidebar",previous:{title:"Toggle Split Button",permalink:"/avalonia-docs/docs/next/reference/controls/buttons/togglesplitbutton"},next:{title:"Carousel",permalink:"/avalonia-docs/docs/next/reference/controls/carousel"}},c={},C=[{value:"Useful Properties ",id:"useful-properties-",level:2},{value:"Z-index",id:"z-index",level:2},{value:"Opacity",id:"opacity",level:2},{value:"Example",id:"example",level:2},{value:"More Information",id:"more-information",level:2}],E={toc:C},Q="wrapper";function s(A){let{components:e,...t}=A;return(0,o.kt)(Q,(0,n.Z)({},E,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"canvas"},"Canvas"),(0,o.kt)("p",null,"The canvas control displays its child controls at specified positions (given as coordinates)."),(0,o.kt)("p",null,"The position of each child control is defined as two distances between edge the canvas content zone, and the outer edge of the child margin zone. For example, this might be the top-left corner of the child to the top-left of canvas, as shown here:"),(0,o.kt)("img",{src:r,alt:""}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To review the concept of layout zones, see ",(0,o.kt)("a",{parentName:"p",href:"../../concepts/layout/layout-zones"},"here"),".")),(0,o.kt)("h2",{id:"useful-properties-"},"Useful Properties"," "),(0,o.kt)("p",null,"You will probably use these properties most often:"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{width:"205"},"Property"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"Canvas.Left")),(0,o.kt)("td",null,"Attached to a child control - gives the distance between the inner left edge of the canvas content zone to the outer left edge of the child (margin zone).")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"Canvas.Top")),(0,o.kt)("td",null,"Attached to a child control - gives the distance between the inner top edge of the canvas content zone to the outer top edge of the child (margin zone).")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"Canvas.Right")),(0,o.kt)("td",null,"Attached to a child control - gives the distance between the inner right edge of the canvas content zone to the outer right edge of the child (margin zone).")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"Canvas.Bottom")),(0,o.kt)("td",null,"Attached to a child control - gives the distance between the inner bottom edge of the canvas content zone to the outer bottom edge of the child (margin zone).")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"Canvas.ZIndex")),(0,o.kt)("td",null,"Attached to a child control - this can override the default drawing sequence (see below).")))),(0,o.kt)("p",null,"Child controls in a canvas are drawn in the sequence that the are defined. This can cause them to overlap."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"The canvas does not size any of its child controls. You must set width and height properties on a child control, or it will not appear!")),(0,o.kt)("h2",{id:"z-index"},"Z-index"),(0,o.kt)("p",null,"By default each child has a z-index of zero. However, the canvas supports the ",(0,o.kt)("inlineCode",{parentName:"p"},"Canvas.ZIndex")," attached property that you can set any of the child controls. This will override the drawing sequence (highest number is drawn last) and may therefore change how the child controls overlap."),(0,o.kt)("h2",{id:"opacity"},"Opacity"),(0,o.kt)("p",null,"However you define the drawing sequence, the opacity of child controls is respected. This means that where child controls elements overlap, the contents shown in overlap areas might be blended where the top control has an opacity value less than one."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<Canvas Background="AliceBlue" Margin="20">\n  <Rectangle Fill="Red" Height="100" Width="100" Margin="10"/>\n  <Rectangle Fill="Blue" Height="100" Width="100" Opacity="0.5"\n             Canvas.Left="50" Canvas.Top="20"/>\n  <Rectangle Fill="Green" Height="100" Width="100" \n             Canvas.Left="60" Margin="40" Canvas.Top="40"/>\n  <Rectangle Fill="Orange" Height="100" Width="100" \n             Canvas.Right="70" Canvas.Bottom="60"/>\n</Canvas>\n')),(0,o.kt)("p",null,"The result looks like this:"),(0,o.kt)("img",{src:a,alt:""}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Use the canvas panel with discretion. While it may be convenient to position child controls like this, your UI will no longer be adaptive to changes in the app window size.")),(0,o.kt)("h2",{id:"more-information"},"More Information"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For the complete API documentation about this control, see ",(0,o.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/Canvas/"},"here"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"View the source code on ",(0,o.kt)("em",{parentName:"p"},"GitHub")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/Canvas.cs"},(0,o.kt)("inlineCode",{parentName:"a"},"Canvas.cs")))))}s.isMDXComponent=!0}}]);