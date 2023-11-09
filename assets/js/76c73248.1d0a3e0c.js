"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[33619],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const l=n.p+"assets/images/scrollbar-437d6cbb000e9810e8120ce96d9b7413.gif",a={description:"REFERENCE - Built-in Controls"},i="Scroll Bar",c={unversionedId:"reference/controls/scrollbar",id:"reference/controls/scrollbar",title:"Scroll Bar",description:"REFERENCE - Built-in Controls",source:"@site/docs/reference/controls/scrollbar.md",sourceDirName:"reference/controls",slug:"/reference/controls/scrollbar",permalink:"/avalonia-docs/docs/next/reference/controls/scrollbar",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/reference/controls/scrollbar.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Controls"},sidebar:"documentationSidebar",previous:{title:"Repeating Data Controls",permalink:"/avalonia-docs/docs/next/reference/controls/repeating-data-controls"},next:{title:"Scroll Viewer",permalink:"/avalonia-docs/docs/next/reference/controls/scrollviewer"}},s={},p=[{value:"Useful Properties",id:"useful-properties",level:2},{value:"Example",id:"example",level:2},{value:"More Information",id:"more-information",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scroll-bar"},"Scroll Bar"),(0,o.kt)("p",null,"A scroll bar control can be displayed in a horizontal or vertical orientation. The default value (double) range for the scroll bar is 0-100."),(0,o.kt)("p",null,"You can configure the range and how the value changes (small and large steps). Small steps can be controlled by the keyboard arrow keys, and large steps by mouse clicks in the scroll bar track, or by the page-up and page-down keys."),(0,o.kt)("h2",{id:"useful-properties"},"Useful Properties"),(0,o.kt)("p",null,"You will probably use these properties most often:"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{width:"241"},"Property"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"Orientation")),(0,o.kt)("td",null,"The orientation of the scroll bar.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"VerticalAlignment")),(0,o.kt)("td",null,"The vertical alignment of the scroll bar in its container. Choose from top, bottom, center and stretch.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"HorizontalAlignment")),(0,o.kt)("td",null,"The horizontal alignment of the scroll bar in its container. Choose from left, right, center and stretch.")))),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"To create a meaningful layout, you will need to use corresponding orientation and alignment properties. For example, a vertical orientation matches a horizontal alignment.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<Panel>\n  <Border Background="AliceBlue">\n    <ScrollBar Visibility="Auto" \n             HorizontalAlignment="Left" \n             Scroll="ScrollHandler"></ScrollBar>\n  </Border>\n  <TextBlock Name="valueText" Margin="60">0</TextBlock>\n</Panel>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"title='C#'",title:"'C#'"},"using Avalonia.Controls;\nusing Avalonia.Controls.Primitives;\n\nnamespace AvaloniaControls.Views\n{\n    public partial class MainWindow : Window\n    {\n        public MainWindow()\n        {\n            InitializeComponent();\n        }\n\n        public void ScrollHandler(object source, ScrollEventArgs args)\n        {\n            valueText.Text = args.NewValue.ToString();\n        }\n    }\n}\n")),(0,o.kt)("p",null,"With the example code-behind, the text block displays the value of the scrollbar."),(0,o.kt)("img",{src:l,alt:""}),(0,o.kt)("h2",{id:"more-information"},"More Information"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For the complete API documentation about this control, see ",(0,o.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls.Primitives/ScrollBar/"},"here"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"View the source code on ",(0,o.kt)("em",{parentName:"p"},"GitHub")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/Primitives/ScrollBar.cs"},(0,o.kt)("inlineCode",{parentName:"a"},"ScrollBar.cs")))))}m.isMDXComponent=!0}}]);