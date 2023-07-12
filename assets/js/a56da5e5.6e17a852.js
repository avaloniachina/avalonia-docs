"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[26077],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>h});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=l.createContext({}),s=function(t){var e=l.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=s(t.components);return l.createElement(c.Provider,{value:e},t.children)},u="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},f=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=s(n),f=r,h=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return n?l.createElement(h,a(a({ref:e},d),{},{components:n})):l.createElement(h,a({ref:e},d))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=f;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[u]="string"==typeof t?t:r,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}f.displayName="MDXCreateElement"},75289:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var l=n(87462),r=(n(67294),n(3905));const o={description:"REFERENCE - Built-in Controls"},a="Layout Controls",i={unversionedId:"reference/controls/layout-controls",id:"reference/controls/layout-controls",title:"Layout Controls",description:"REFERENCE - Built-in Controls",source:"@site/docs/reference/controls/layout-controls.md",sourceDirName:"reference/controls",slug:"/reference/controls/layout-controls",permalink:"/avalonia-docs/docs/next/reference/controls/layout-controls",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/reference/controls/layout-controls.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Controls"},sidebar:"documentationSidebar",previous:{title:"Items Repeater",permalink:"/avalonia-docs/docs/next/reference/controls/itemsrepeater"},next:{title:"Layout Transform Control",permalink:"/avalonia-docs/docs/next/reference/controls/layouttransformcontrol"}},c={},s=[],d={toc:s},u="wrapper";function p(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,l.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"layout-controls"},"Layout Controls"),(0,r.kt)("p",null,"Layout controls allow you to use ",(0,r.kt)("strong",{parentName:"p"},"UI Composition")," to arrange your UI in a variety of ways. Some allow just one child control, while others can have multiple child controls and follow specific rules for arranging them."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To review the concepts behind ",(0,r.kt)("strong",{parentName:"p"},"UI Composition"),", see ",(0,r.kt)("a",{parentName:"p",href:"../../concepts/ui-composition"},"here"),".")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{width:"168"},"Control"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"detailed-reference/border"},"Border")),(0,r.kt)("td",null,"Decorates a single child with a border and background.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"canvas"},"Canvas")),(0,r.kt)("td",null,"Displays child controls at specified positions.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"dockpanel"},"Dock Panel")),(0,r.kt)("td",null,"Arranges child controls along specified edges (top, bottom, left, right) with one filling any remaining space.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"expander"},"Expander")),(0,r.kt)("td",null,"Has a header area (always visible) and a collapsible content section (single child).")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"grid"},"Grid")),(0,r.kt)("td",null,"Arranges child controls in the cells of a grid, positioned by row and column. The cells can span rows and columns. ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"gridsplitter"},"Grid Splitter")),(0,r.kt)("td",null,"Can be added to a grid to allow the user to resize rows or columns at runtime.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"panel"},"Panel")),(0,r.kt)("td",null,"Allows multiple child controls, displayed in sequence. Layout calculated by child size and alignments (horizontal and vertical), relative to the panel itself. ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"relativepanel"},"Relative Panel")),(0,r.kt)("td",null,"Allows multiple child controls. The position and alignment of the child controls can be specified in relation to the panel itself, or in relation to other child controls.  The size of child controls can be specified, or calculated from relations and alignments.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"scrollbar"},"Scroll Bar")),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"scrollviewer"},"Scroll Viewer")),(0,r.kt)("td",null,"Adds scroll bars and scrolling behaviour if the (single) child is larger than the space available.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"splitview"},"Split View")),(0,r.kt)("td",null,"Adds a collapsible pane to the edge of its (single child) content zone.   ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"stackpanel"},"Stack Panel")),(0,r.kt)("td",null,"Allows multiple child controls, arranged in sequence, horizontally or vertically.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"detailed-reference/tabcontrol"},"Tab Control")),(0,r.kt)("td",null,"The tab control allows you to sub-divide a view into tab items.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"detailed-reference/uniform-grid"},"Uniform Grid")),(0,r.kt)("td",null,"Allows multiple child controls, arranged in a grid with cells of uniform column and row size.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"detailed-reference/wrappanel"},"Wrap Panel")),(0,r.kt)("td",null,"Arranges (multiple) child controls in sequence from left to right, while they fit in the width. Starts a new line when there is no space left. ")))))}p.isMDXComponent=!0}}]);