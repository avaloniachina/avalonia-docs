"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[33719],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={description:"REFERENCE - Built-in Controls"},i="Tab Control",c={unversionedId:"reference/controls/detailed-reference/tabcontrol",id:"reference/controls/detailed-reference/tabcontrol",title:"Tab Control",description:"REFERENCE - Built-in Controls",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/controls/detailed-reference/tabcontrol.md",sourceDirName:"reference/controls/detailed-reference",slug:"/reference/controls/detailed-reference/tabcontrol",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/detailed-reference/tabcontrol",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/reference/controls/detailed-reference/tabcontrol.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Controls"},sidebar:"documentationSidebar",previous:{title:"Path Icon",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/detailed-reference/path-icon"},next:{title:"Tab Strip",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/detailed-reference/tabstrip"}},l={},s=[{value:"Examples",id:"examples",level:2},{value:"More Information",id:"more-information",level:2}],p={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tab-control"},"Tab Control"),(0,o.kt)("p",null,"The tab control allows you to sub-divide a view into tab items."," "),(0,o.kt)("img",{src:"/img/gitbook-import/assets/image (2) (4).png",alt:""}),(0,o.kt)("p",null,"Each tab item has a header and a content zone. The headers are presented in a strip, in the sequence they occur in the XAML. When the user clicks on a tab header, its content becomes visible, and is placed below the tab strip in the content zone of the tab control."),(0,o.kt)("p",null,"You can compose the UI in both the header and content zones to suit the UI requirements of your ",(0,o.kt)("em",{parentName:"p"},"Avalonia UI")," app."," "),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you only need the function of the tab headers part of this control, consider using the tab strip instead. See ",(0,o.kt)("a",{parentName:"p",href:"/avalonia-docs/zh-Hans/docs/next/reference/controls/detailed-reference/tabstrip"},"here"),".")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"This is simple tab example. The tab content is just some text: "," "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<TabControl Margin="5">\n  <TabItem Header="Tab 1">\n    <TextBlock Margin="5">This is tab 1 content</TextBlock>\n  </TabItem>\n  <TabItem Header="Tab 2">\n    <TextBlock Margin="5">This is tab 2 content</TextBlock>\n  </TabItem>\n  <TabItem Header="Tab 3">\n    <TextBlock Margin="5">This is tab 3 content</TextBlock>\n  </TabItem>\n</TabControl> Some code\n')),(0,o.kt)("p",null,"The tab control even works in the preview pane!"),(0,o.kt)("img",{src:"/img/gitbook-import/assets/tabcontrol1.gif",alt:""}),(0,o.kt)("h2",{id:"more-information"},"More Information"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For the complete API documentation about this control, see ",(0,o.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/TabControl/"},"here"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"View the source code on ",(0,o.kt)("em",{parentName:"p"},"GitHub")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/TabControl.cs"},(0,o.kt)("inlineCode",{parentName:"a"},"TabControl.cs")))))}m.isMDXComponent=!0}}]);