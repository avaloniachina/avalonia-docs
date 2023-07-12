"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[22978],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(r),h=o,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||l;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=h;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},26099:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const l={description:"REFERENCE - Built-in Controls"},i="Scroll Viewer",a={unversionedId:"reference/controls/scrollviewer",id:"reference/controls/scrollviewer",title:"Scroll Viewer",description:"REFERENCE - Built-in Controls",source:"@site/docs/reference/controls/scrollviewer.md",sourceDirName:"reference/controls",slug:"/reference/controls/scrollviewer",permalink:"/avalonia-docs/docs/next/reference/controls/scrollviewer",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/reference/controls/scrollviewer.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Controls"},sidebar:"documentationSidebar",previous:{title:"Scroll Bar",permalink:"/avalonia-docs/docs/next/reference/controls/scrollbar"},next:{title:"Slider",permalink:"/avalonia-docs/docs/next/reference/controls/slider"}},c={},s=[{value:"Useful Properties",id:"useful-properties",level:2},{value:"Scroll Chaining",id:"scroll-chaining",level:2},{value:"Example",id:"example",level:2},{value:"More Information",id:"more-information",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scroll-viewer"},"Scroll Viewer"),(0,o.kt)("p",null,"The scroll viewer control can have content that is bigger than its content zone, and will can provide scroll bars to move hidden content into view."," "),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"ScrollViewer")," cannot be contained in a control that has infinite height or width (depending on scrolling direction) such as a ",(0,o.kt)("inlineCode",{parentName:"p"},"StackPanel"),". To avoid it, you can either set fixed Height/Width or MaxHeight/MaxWidth or choose another container panel."),(0,o.kt)("h2",{id:"useful-properties"},"Useful Properties"),(0,o.kt)("p",null,"You will probably use these properties most often:"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{width:"288"},"Property"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"AllowAutoHide")),(0,o.kt)("td",null,"Boolean, default is true. Sets whether the scroll bar hides itself automatically when the pointer is not over, or it does not have the focus. ")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"ScrollViewer"),". ",(0,o.kt)("code",null,"IsScrollChainingEnabled")),(0,o.kt)("td",null,"Boolean, default is true. Attached to an inner controlSee below for more details. ")))),(0,o.kt)("h2",{id:"scroll-chaining"},"Scroll Chaining"),(0,o.kt)("p",null,"If you have a control that can itself scroll (see list below) nested inside a scroll viewer, and the user hits a limit on the control, this property sets whether the outer scroll viewer should continue scrolling or not. You enable or disable this behaviour with an attached property on the inner control, using the format:"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"ScrollViewer.IsScrollChainingEnabled=[true|false]"),"."," "),(0,o.kt)("p",null,"This attached property is available on these controls:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Scroll Viewer"),(0,o.kt)("li",{parentName:"ul"},"Data Grid"),(0,o.kt)("li",{parentName:"ul"},"List Box"),(0,o.kt)("li",{parentName:"ul"},"Text Box"),(0,o.kt)("li",{parentName:"ul"},"Tree View")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"This example creates a stack panel that is bigger than the border it is inside. The scroll viewer automatically creates a vertical scroll bar."," "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<Border Background="AliceBlue" Width="300" Height="300">\n  <ScrollViewer>\n    <StackPanel>\n      <TextBlock FontSize="22" Height="100" Background="LightBlue">Block 1</TextBlock>\n      <TextBlock FontSize="22" Height="100">Block 2</TextBlock>\n      <TextBlock FontSize="22" Height="100" Background="LightBlue">Block 3</TextBlock>\n      <TextBlock FontSize="22" Height="100">Block 4</TextBlock>\n      <TextBlock FontSize="22" Height="100" Background="LightBlue">Block 5</TextBlock>\n    </StackPanel>\n  </ScrollViewer>\n</Border>\n')),(0,o.kt)("img",{src:"/img/gitbook-import/assets/scrollview.gif",alt:""}),(0,o.kt)("h2",{id:"more-information"},"More Information"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For the complete API documentation, see ",(0,o.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/ScrollViewer/"},"here"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"View the source code on ",(0,o.kt)("em",{parentName:"p"},"GitHub")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/ScrollViewer.cs"},(0,o.kt)("inlineCode",{parentName:"a"},"ScrollViewer.cs")))))}d.isMDXComponent=!0}}]);