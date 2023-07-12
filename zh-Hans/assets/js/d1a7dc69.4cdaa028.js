"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[84052],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>h});var t=a(67294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},d=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),g=i,h=c["".concat(l,".").concat(g)]||c[g]||m[g]||r;return a?t.createElement(h,o(o({ref:n},d),{},{components:a})):t.createElement(h,o({ref:n},d))}));function h(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},29764:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var t=a(87462),i=(a(67294),a(3905));const r={id:"graphics-and-animations",title:"Graphics & Animations"},o=void 0,s={unversionedId:"getting-started/programming-with-avalonia/graphics-and-animations",id:"version-0.10.x/getting-started/programming-with-avalonia/graphics-and-animations",title:"Graphics & Animations",description:"Graphics",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/getting-started/programming-with-avalonia/graphics-and-animations.md",sourceDirName:"getting-started/programming-with-avalonia",slug:"/getting-started/programming-with-avalonia/graphics-and-animations",permalink:"/avalonia-docs/zh-Hans/docs/getting-started/programming-with-avalonia/graphics-and-animations",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/getting-started/programming-with-avalonia/graphics-and-animations.md",tags:[],version:"0.10.x",frontMatter:{id:"graphics-and-animations",title:"Graphics & Animations"},sidebar:"documentationSidebar",previous:{title:"Data Binding",permalink:"/avalonia-docs/zh-Hans/docs/getting-started/programming-with-avalonia/data-binding"},next:{title:"Windows",permalink:"/avalonia-docs/zh-Hans/docs/getting-started/windows"}},l={},p=[{value:"Graphics",id:"graphics",level:2},{value:"2D Shapes and Geometries",id:"2d-shapes-and-geometries",level:2},{value:"Animation",id:"animation",level:2}],d={toc:p},c="wrapper";function m(e){let{components:n,...a}=e;return(0,i.kt)(c,(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"graphics"},"Graphics"),(0,i.kt)("p",null,"Avalonia introduces an extensive, scalable, and flexible set of graphics features that have the following benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Resolution-independent and device-independent graphics. The basic unit of measurement in the Avalonia graphics system is the device-independent pixel, which is 1/96th of an inch, regardless of actual screen resolution, and provides the foundation for resolution-independent and device-independent rendering. Each device-independent pixel automatically scales to match the dots-per-inch ","(","dpi",")"," setting of the system it renders on."),(0,i.kt)("li",{parentName:"ul"},"Improved precision. The Avalonia coordinate system is measured with double-precision floating-point numbers rather than single-precision. Transformations and opacity values are also expressed as double-precision."),(0,i.kt)("li",{parentName:"ul"},"Advanced graphics and animation support. Avalonia simplifies graphics programming by managing animation scenes for you; there is no need to worry about scene processing, rendering loops, and bilinear interpolation. Additionally, Avalonia provides hit-testing support and full alpha-compositing support."),(0,i.kt)("li",{parentName:"ul"},"Skia. By default Avalonia uses the ",(0,i.kt)("a",{parentName:"li",href:"https://skia.org/"},"Skia rendering engine"),", the same rendering engine that powers Google Chrome and Chrome OS, Android, Mozilla Firefox and Firefox OS, and many other products.")),(0,i.kt)("h2",{id:"2d-shapes-and-geometries"},"2D Shapes and Geometries"),(0,i.kt)("p",null,"Avalonia provides a library of common vector-drawn 2D shapes such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Ellipse"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Line"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Path"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Polygon")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Rectangle"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'<Canvas Background="Yellow" Width="300" Height="400">\n    <Rectangle Fill="Blue" Width="63" Height="41" Canvas.Left="40" Canvas.Top="31">\n        <Rectangle.OpacityMask>\n            <LinearGradientBrush StartPoint="0%,0%" EndPoint="100%,100%">\n                <LinearGradientBrush.GradientStops>\n                    <GradientStop Offset="0" Color="Black"/>\n                    <GradientStop Offset="1" Color="Transparent"/>\n                </LinearGradientBrush.GradientStops>\n            </LinearGradientBrush>\n        </Rectangle.OpacityMask>     \n    </Rectangle>\n    <Ellipse Fill="Green" Width="58" Height="58" Canvas.Left="88" Canvas.Top="100"/>\n    <Path Fill="Orange" Data="M 0,0 c 0,0 50,0 50,-50 c 0,0 50,0 50,50 h -50 v 50 l -50,-50 Z" Canvas.Left="30" Canvas.Top="250"/>\n    <Path Fill="OrangeRed" Canvas.Left="180" Canvas.Top="250">\n        <Path.Data>\n            <PathGeometry>\n                <PathFigure StartPoint="0,0" IsClosed="True">\n                    <QuadraticBezierSegment Point1="50,0" Point2="50,-50" />\n                    <QuadraticBezierSegment Point1="100,-50" Point2="100,0" />\n                    <LineSegment Point="50,0" />\n                    <LineSegment Point="50,50" />\n                </PathFigure>\n            </PathGeometry>\n        </Path.Data>\n    </Path>\n    <Line StartPoint="120,185" EndPoint="30,115" Stroke="Red" StrokeThickness="2"/>\n    <Polygon Points="75,0 120,120 0,45 150,45 30,120" Stroke="DarkBlue" StrokeThickness="1" Fill="Violet" Canvas.Left="150" Canvas.Top="31"/>\n    <Polyline Points="0,0 65,0 78,-26 91,39 104,-39 117,13 130,0 195,0" Stroke="Brown" Canvas.Left="30" Canvas.Top="350"/>\n</Canvas>\n')),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"/img/getting-started/graphics-and-animations/shapes.png",alt:"Graphics shapes drawn on a yellow background"})),(0,i.kt)("h2",{id:"animation"},"Animation"),(0,i.kt)("p",null,"Avalonia's animation support lets you make controls grow, shake, spin, and fade, to create interesting page transitions, and more. Avalonia uses a CSS-like animation system which supports ",(0,i.kt)("a",{parentName:"p",href:"../../animations/transitions"},"property transitions")," and ",(0,i.kt)("a",{parentName:"p",href:"../../animations/keyframe-animations"},"keyframe animations"),"."))}m.isMDXComponent=!0}}]);