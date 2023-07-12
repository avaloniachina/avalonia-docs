"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[6538],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3290:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={description:"REFERENCE - Built-in Controls"},l="Text Box",i={unversionedId:"reference/controls/detailed-reference/textbox",id:"reference/controls/detailed-reference/textbox",title:"Text Box",description:"REFERENCE - Built-in Controls",source:"@site/docs/reference/controls/detailed-reference/textbox.md",sourceDirName:"reference/controls/detailed-reference",slug:"/reference/controls/detailed-reference/textbox",permalink:"/avalonia-docs/docs/next/reference/controls/detailed-reference/textbox",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/reference/controls/detailed-reference/textbox.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Controls"},sidebar:"documentationSidebar",previous:{title:"Text Block",permalink:"/avalonia-docs/docs/next/reference/controls/detailed-reference/textblock"},next:{title:"Time Picker",permalink:"/avalonia-docs/docs/next/reference/controls/detailed-reference/timepicker"}},c={},s=[{value:"Useful Properties",id:"useful-properties",level:2},{value:"Example",id:"example",level:2},{value:"More Information",id:"more-information",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"text-box"},"Text Box"),(0,o.kt)("p",null,"The text box presents an area for typed (keyboard) input. It can be for a single or multiple lines of input."," "),(0,o.kt)("h2",{id:"useful-properties"},"Useful Properties"),(0,o.kt)("p",null,"You will probably use these properties most often:"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{width:"220"},"Property"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"Text")),(0,o.kt)("td",null,"The current text in the input.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"PasswordChar")),(0,o.kt)("td",null,"Hides any characters typed, and replacing them with the given  character instead.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"Watermark")),(0,o.kt)("td",null,"Appears as a faded hint whenever the input is empty.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"AcceptsReturn")),(0,o.kt)("td",null,"Makes the input multi-line by allowing the user to enter line returns. A vertical scrollbar will appear if the content exceeds the height available.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"TextWrapping")),(0,o.kt)("td",null,"Defines how horizontal line overflow will be handled. Options are: 'NoWrap', 'Wrap' and 'WrapWithOverflow'.")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"This example has a basic one line text box, a password box, and a text-wrapping multiline text box:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<StackPanel Margin="20">\n  <TextBlock Margin="0 5" >Name:</TextBlock>\n  <TextBox  Watermark="Enter your name"/>\n  <TextBlock Margin="0 5" >Password:</TextBlock>\n  <TextBox PasswordChar="*" Watermark="Enter your password"/>\n  <TextBlock Margin="0 15 0 5">Notes:</TextBlock>\n  <TextBox Height="100" AcceptsReturn="True" TextWrapping="Wrap"/>\n</StackPanel>\n')),(0,o.kt)("img",{src:"/img/gitbook-import/assets/textbox.gif",alt:""}),(0,o.kt)("h2",{id:"more-information"},"More Information"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For the complete API documentation about this control, see ",(0,o.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/TextBox/"},"here"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"View the source code on GitHub ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/TextBox.cs"},"TextBox.cs"))))}d.isMDXComponent=!0}}]);