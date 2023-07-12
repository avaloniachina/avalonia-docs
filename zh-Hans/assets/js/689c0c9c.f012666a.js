"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[7863],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const l={description:"REFERENCE - Built-in Controls"},i="Slider",a={unversionedId:"reference/controls/slider",id:"reference/controls/slider",title:"Slider",description:"REFERENCE - Built-in Controls",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/controls/slider.md",sourceDirName:"reference/controls",slug:"/reference/controls/slider",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/slider",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/reference/controls/slider.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Controls"},sidebar:"documentationSidebar",previous:{title:"Scroll Viewer",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/scrollviewer"},next:{title:"Split View",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/splitview"}},s={},c=[{value:"Useful Properties",id:"useful-properties",level:2},{value:"Example",id:"example",level:2},{value:"More Information",id:"more-information",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"slider"},"Slider"),(0,o.kt)("p",null,"The slider control presents its numerical value as the relative position of a slider button along the length of a track. The position is relative to maximum and minimum values."," "),(0,o.kt)("p",null,"Drag interaction on the slider button can alter the value between the maximum and minimum values. Keyboard and click interactions can also nudge the value."),(0,o.kt)("h2",{id:"useful-properties"},"Useful Properties"),(0,o.kt)("p",null,"You will probably use these properties most often:"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{width:"197"},"Property"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"Maximum"),(0,o.kt)("td",null,"Sets the maximum value.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Minimum"),(0,o.kt)("td",null,"Sets the minimum value.")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"In this example the slider value is displayed in the text block below, using binding to a control."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To review how to bind one control to another, see the guide ",(0,o.kt)("a",{parentName:"p",href:"/avalonia-docs/zh-Hans/docs/next/guides/data-binding/binding-to-controls"},"here"),".")),(0,o.kt)("p",null,"Here the maximum and minimum values are default (0 and 100 respectively)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<StackPanel Margin="20">\n  <TextBlock Text="{Binding #slider.Value}" \n              HorizontalAlignment="Center"/>\n  <Slider x:Name="slider" />\n</StackPanel>\n')),(0,o.kt)("p",null,"The slider looks like this on Windows:"),(0,o.kt)("img",{src:"/img/gitbook-import/assets/slider.gif",alt:""}),(0,o.kt)("h2",{id:"more-information"},"More Information"),(0,o.kt)("p",null,"For the complete API documentation about this control, see ",(0,o.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/Slider/"},"here"),"."),(0,o.kt)("p",null,"View the source code on ",(0,o.kt)("em",{parentName:"p"},"GitHub")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/Slider.cs"},(0,o.kt)("inlineCode",{parentName:"a"},"Slider.cs"))))}d.isMDXComponent=!0}}]);