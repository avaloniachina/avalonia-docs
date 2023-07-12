"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[41218],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},32363:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={description:"REFERENCE - Built-in Controls"},l="Grid Splitter",a={unversionedId:"reference/controls/gridsplitter",id:"reference/controls/gridsplitter",title:"Grid Splitter",description:"REFERENCE - Built-in Controls",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/controls/gridsplitter.md",sourceDirName:"reference/controls",slug:"/reference/controls/gridsplitter",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/gridsplitter",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/reference/controls/gridsplitter.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Controls"},sidebar:"documentationSidebar",previous:{title:"Grid",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/grid"},next:{title:"Image Controls",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/image-controls"}},s={},c=[{value:"Useful Properties ",id:"useful-properties-",level:2},{value:"Examples",id:"examples",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"grid-splitter"},"Grid Splitter"),(0,o.kt)("p",null,"The grid splitter control allows a user to resize the columns or rows in a grid at runtime. The splitter is drawn as a column or row (size can be specified), and has a grip that the user can manipulate at runtime."),(0,o.kt)("h2",{id:"useful-properties-"},"Useful Properties"," "),(0,o.kt)("p",null,"You will probably use these properties most often:"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{width:"261"},"Property"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"Background")),(0,o.kt)("td",null,"Background color for the splitter bar.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"Grid.Column")),(0,o.kt)("td",null,"Attached to give the (column) position of the splitter.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"Grid.Row")),(0,o.kt)("td",null,"Attached to give the (row) position of the splitter.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"ResizeDirection")),(0,o.kt)("td",null,"The direction of travel for the splitter. (See note below.)")))),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"To provide any meaningful movement, the direction of travel of the splitter must be the same as its position definition. That is: for a column splitter specify ",(0,o.kt)("inlineCode",{parentName:"p"},'ResizeDirection="Columns"')," and for a row splitter specify ",(0,o.kt)("inlineCode",{parentName:"p"},'ResizeDirection="Rows"'),".")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"This is a column splitter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<Grid ColumnDefinitions="*, 4, *">\n    <Rectangle Grid.Column="0" Fill="Blue"/>\n    <GridSplitter Grid.Column="1" Background="Black" ResizeDirection="Columns"/>\n    <Rectangle Grid.Column="2" Fill="Red"/>\n</Grid>\n')),(0,o.kt)("img",{src:"/img/gitbook-import/assets/gridsplitter-in-action-columns.gif",alt:""}),"This is a row splitter:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<Grid RowDefinitions="*, 4, *">\n    <Rectangle Grid.Row="0" Fill="Blue"/>\n    <GridSplitter Grid.Row="1" Background="Black" ResizeDirection="Rows"/>\n    <Rectangle Grid.Row="2" Fill="Red"/>\n</Grid>\n')),(0,o.kt)("img",{src:"/img/gitbook-import/assets/gridsplitter-in-action-rows.gif",alt:""}),":::info For the complete API documentation about this control, see [here](http://reference.avaloniaui.net/api/Avalonia.Controls/GridSplitter/). :::",(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"View the source code on ",(0,o.kt)("em",{parentName:"p"},"GitHub")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/GridSplitter.cs"},(0,o.kt)("inlineCode",{parentName:"a"},"GridSplitter.cs")))))}d.isMDXComponent=!0}}]);