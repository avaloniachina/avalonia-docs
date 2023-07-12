"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[91345],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=i,u=d["".concat(p,".").concat(h)]||d[h]||m[h]||o;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},41783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={description:"REFERENCE - Built-in Controls"},r="Split View",l={unversionedId:"reference/controls/splitview",id:"reference/controls/splitview",title:"Split View",description:"REFERENCE - Built-in Controls",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/controls/splitview.md",sourceDirName:"reference/controls",slug:"/reference/controls/splitview",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/splitview",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/reference/controls/splitview.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Controls"},sidebar:"documentationSidebar",previous:{title:"Slider",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/slider"},next:{title:"Stack Panel",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/stackpanel"}},p={},s=[{value:"Useful Properties ",id:"useful-properties-",level:2},{value:"Example",id:"example",level:2},{value:"Compact Display Mode",id:"compact-display-mode",level:2},{value:"More Information",id:"more-information",level:2}],c={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"split-view"},"Split View"),(0,i.kt)("p",null,"A split view presents a container with two parts: the main content zone and a side pane. The main content zone is always visible. The pane can be expanded and collapsed. The collapsed pane can be completely hidden, or left slightly open - with enough space to host some icon buttons for example. "," "),(0,i.kt)("h2",{id:"useful-properties-"},"Useful Properties"," "),(0,i.kt)("p",null,"You will probably use these properties most often:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PanePlacement")),(0,i.kt)("td",{parentName:"tr",align:null},"Sets the position of the pane (left or right).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"IsPaneOpen")),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean, default is true. Is the pane in its open state?")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DisplayMode")),(0,i.kt)("td",{parentName:"tr",align:null},"Controls how the pane is drawn in its open and closed states. See below.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"OpenPaneLength")),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the width of the pane when it is open.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CompactPaneLength")),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the width of the pane when it is closed and the display mode is compact.")))),(0,i.kt)("p",null,"The display mode property controls how the pane is drawn in its open and closed states. There are four options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Overlay")),(0,i.kt)("p",{parentName:"li"},"The pane is completely hidden until opened. When open, the pane overlays the content area.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Inline")),(0,i.kt)("p",{parentName:"li"},"The pane is always visible, is a fixed width, and does not overlay the content area. The pane and content areas divide the available screen real estate, but if the container changes width, it is the content zone that resizes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Compact Overlay")),(0,i.kt)("p",{parentName:"li"},"A narrow portion of the pane is always visible in this mode, which is just wide enough to show icons. The default closed pane width is 48px, which can be modified with the ",(0,i.kt)("inlineCode",{parentName:"p"},"CompactPaneLength"),"property value. If the pane is opened, it will overlay the content area.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Compact Inline")),(0,i.kt)("p",{parentName:"li"},"A narrow portion of the pane is always visible in this mode, which is just wide enough to show icons. The default closed pane width is 48px, which can be modified with ",(0,i.kt)("inlineCode",{parentName:"p"},"CompactPaneLength")," property value. If the pane is opened, it will reduce the size of the content zone."))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'<SplitView IsPaneOpen="True"\n           DisplayMode="Inline"\n           OpenPaneLength="300">\n    <SplitView.Pane>\n        <TextBlock Text="Pane"\n                   FontSize="24"\n                   VerticalAlignment="Center"\n                   HorizontalAlignment="Center"/>\n    </SplitView.Pane>\n\n    <Grid>\n        <TextBlock Text="Content"\n                   FontSize="24"\n                   VerticalAlignment="Center"\n                   HorizontalAlignment="Center"/>\n    </Grid>\n</SplitView>\n')),(0,i.kt)("p",null,"The control looks like this, running on Windows:"),(0,i.kt)("img",{src:"/img/gitbook-import/assets/image (5) (5) (1).png",alt:""}),(0,i.kt)("h2",{id:"compact-display-mode"},"Compact Display Mode"),(0,i.kt)("p",null,"You can use the MVVM pattern with the split view control and one of the compact display mode settings to implement a 'tool pane' style UI. There is enough room on the pane when it is closed to display an icon button that opens the pane."),(0,i.kt)("img",{src:"/img/gitbook-import/assets/splitview2.gif",alt:""}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To learn how to use the split view control in this way, see the guide ",(0,i.kt)("a",{parentName:"p",href:"/avalonia-docs/zh-Hans/docs/next/guides/development-guides/how-to-show-and-hide-a-split-view-pane-with-mvvm"},"here"),".")),(0,i.kt)("h2",{id:"more-information"},"More Information"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For the complete API documentation about this control, see ",(0,i.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/SplitView/"},"here"),".")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"View the source code on ",(0,i.kt)("em",{parentName:"p"},"GitHub")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/SplitView/SplitView.cs"},(0,i.kt)("inlineCode",{parentName:"a"},"SplitView.cs")))))}m.isMDXComponent=!0}}]);