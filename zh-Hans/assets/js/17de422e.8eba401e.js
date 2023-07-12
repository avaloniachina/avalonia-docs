"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[47935],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,h=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},39752:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={id:"border",title:"Border"},i=void 0,l={unversionedId:"controls/border",id:"version-0.10.x/controls/border",title:"Border",description:"The Border control decorates a child with a border and background. It can also be used to display rounded corners by setting the CornerRadius property.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/controls/border.md",sourceDirName:"controls",slug:"/controls/border",permalink:"/avalonia-docs/zh-Hans/docs/controls/border",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/controls/border.md",tags:[],version:"0.10.x",frontMatter:{id:"border",title:"Border"},sidebar:"documentationSidebar",previous:{title:"AutoCompleteBox",permalink:"/avalonia-docs/zh-Hans/docs/controls/autocompletebox"},next:{title:"Buttons",permalink:"/avalonia-docs/zh-Hans/docs/controls/buttons/"}},d={},s=[{value:"Box Shadows",id:"box-shadows",level:2},{value:"Values",id:"values",level:3},{value:"Common Properties",id:"common-properties",level:2},{value:"Pseudoclasses",id:"pseudoclasses",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Source code",id:"source-code",level:2}],p={toc:s},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Border")," control decorates a child with a border and background. It can also be used to display rounded corners by setting the ",(0,a.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia/CornerRadius/"},(0,a.kt)("inlineCode",{parentName:"a"},"CornerRadius"))," property."),(0,a.kt)("p",null,"An example of a border with a red background, 2 pixel black border, 3 pixel corner radius and a 4 pixel padding around its content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<Border Background="Red"\n        BorderBrush="Black"\n        BorderThickness="2"\n        CornerRadius="3"\n        Padding="4">\n    <StackPanel>\n        <Button>Button 1</Button>\n        <Button>Button 2</Button>\n    </StackPanel>\n</Border>\n')),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/controls/border/image (2).png"})),(0,a.kt)("h2",{id:"box-shadows"},"Box Shadows"),(0,a.kt)("p",null,"A border can display a box shadow around it by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"BoxShadow")," property."),(0,a.kt)("p",null,"Specify a single box shadow using:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An optional ",(0,a.kt)("inlineCode",{parentName:"li"},"inset")," keyword"),(0,a.kt)("li",{parentName:"ul"},"Two, three, or four ",(0,a.kt)("inlineCode",{parentName:"li"},"length")," values.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If only two values are given, they are interpreted as ",(0,a.kt)("inlineCode",{parentName:"li"},"offset-x")," ",(0,a.kt)("inlineCode",{parentName:"li"},"offset-y")," values."),(0,a.kt)("li",{parentName:"ul"},"If a third value is given, it is interpreted as a ",(0,a.kt)("inlineCode",{parentName:"li"},"blur-radius"),"."),(0,a.kt)("li",{parentName:"ul"},"If a fourth value is given, it is interpreted as a ",(0,a.kt)("inlineCode",{parentName:"li"},"spread-radius"),"."))),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"color")," value.")),(0,a.kt)("p",null,"To specify multiple shadows, provide a comma-separated list of shadows."),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"inset"),": If not specified ","(","default",")",", the shadow is assumed to be a drop shadow ","(","as if the box were raised above the content",")",". The presence of the inset keyword changes the shadow to one inside the frame ","(","as if the content was depressed inside the box",")",". Inset shadows are drawn inside the border ","(","even transparent ones",")",", above the background, but below content"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"offset-x")," ",(0,a.kt)("inlineCode",{parentName:"li"},"offset-y"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"offset-x")," specifies the horizontal distance. Negative values place the shadow to the left of the element. ",(0,a.kt)("inlineCode",{parentName:"li"},"offset-y")," specifies the vertical distance. Negative values place the shadow above the element. If both values are 0, the shadow is placed behind the element ","(","and may generate a blur effect if ",(0,a.kt)("inlineCode",{parentName:"li"},"blur-radius")," and/or ",(0,a.kt)("inlineCode",{parentName:"li"},"spread-radius")," is set",")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"blur-radius"),": The larger this value, the bigger the blur, so the shadow becomes bigger and lighter. Negative values are not allowed. If not specified, it will be 0 ","(","the shadow's edge is sharp",")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spread-radius"),": Positive values will cause the shadow to expand and grow bigger, negative values will cause the shadow to shrink. If not specified, it will be 0 ","(","the shadow will be the same size as the element",")","."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"color"),": The color of the shadow using a color name ","(","such as ",(0,a.kt)("inlineCode",{parentName:"li"},"red"),")"," or a ",(0,a.kt)("inlineCode",{parentName:"li"},"#")," hexadecimal color value")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<Border Background="Red"\n        BorderBrush="Black"\n        BorderThickness="2"\n        CornerRadius="3"\n        Padding="4"\n        BoxShadow="5 5 10 2 Blue">\n    <StackPanel>\n        <Button>Button 1</Button>\n        <Button>Button 2</Button>\n    </StackPanel>\n</Border>\n')),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/controls/border/image (8).png"})),(0,a.kt)("h2",{id:"common-properties"},"Common Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Background")),(0,a.kt)("td",{parentName:"tr",align:"left"},"A ",(0,a.kt)("inlineCode",{parentName:"td"},"Brush")," describing the color of the control's background")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"BorderBrush")),(0,a.kt)("td",{parentName:"tr",align:"left"},"A ",(0,a.kt)("inlineCode",{parentName:"td"},"Brush")," describing the color of the control's border stroke")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"BorderThickness")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The thickness of the control's border stroke")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Child")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The child control to decorate")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"CornerRadius")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The radius of the border's rounded corners")))),(0,a.kt)("h2",{id:"pseudoclasses"},"Pseudoclasses"),(0,a.kt)("p",null,"None"),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/Border/"},"Border")),(0,a.kt)("h2",{id:"source-code"},"Source code"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/Border.cs"},"Border.cs")))}u.isMDXComponent=!0}}]);