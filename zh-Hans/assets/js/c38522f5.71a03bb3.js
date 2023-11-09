"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[17279],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),k=o,f=d["".concat(i,".").concat(k)]||d[k]||u[k]||a;return t?r.createElement(f,c(c({ref:n},s),{},{components:t})):r.createElement(f,c({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=k;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[d]="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},16984:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const a=t.p+"assets/images/dockpanel-cbfcb52d1f39480d9a952cf512799395.png",c={id:"dockpanel",title:"DockPanel"},l="DockPanel",i={unversionedId:"controls/dockpanel",id:"version-0.10.x/controls/dockpanel",title:"DockPanel",description:'The DockPanel control is a Panel which lays out its children by "docking" them to the sides or floating in the center.',source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/controls/dockpanel.md",sourceDirName:"controls",slug:"/controls/dockpanel",permalink:"/avalonia-docs/zh-Hans/docs/controls/dockpanel",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/controls/dockpanel.md",tags:[],version:"0.10.x",frontMatter:{id:"dockpanel",title:"DockPanel"},sidebar:"documentationSidebar",previous:{title:"DatePicker",permalink:"/avalonia-docs/zh-Hans/docs/controls/datepicker"},next:{title:"Expander",permalink:"/avalonia-docs/zh-Hans/docs/controls/expander"}},p={},s=[{value:'Reference <a href="#reference" id="reference"></a>',id:"reference-",level:3},{value:'Source code <a href="#source-code" id="source-code"></a>',id:"source-code-",level:3}],d={toc:s},u="wrapper";function k(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dockpanel"},"DockPanel"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DockPanel")," control is a ",(0,o.kt)("inlineCode",{parentName:"p"},"Panel"),' which lays out its children by "docking" them to the sides or floating in the center.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<DockPanel Width="300" Height="300">\n    <Rectangle Fill="Red" Height="100" DockPanel.Dock="Top"/>\n    <Rectangle Fill="Blue" Width="100" DockPanel.Dock="Left"/>\n    <Rectangle Fill="Green" Height="100" DockPanel.Dock="Bottom"/>\n    <Rectangle Fill="Orange" Width="100" DockPanel.Dock="Right"/>\n    <Rectangle Fill="Gray" />\n</DockPanel>\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"LastChildFill")," property means that the last child will fill any remaining space in the panel."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DockPanel.Dock")," attached property is used to control which side an element is docked to. The options are ",(0,o.kt)("inlineCode",{parentName:"p"},"Left"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Top")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"Right")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Bottom"),"."),(0,o.kt)("img",{className:"center",src:a,alt:"DockPanel"}),(0,o.kt)("h3",{id:"reference-"},"Reference ",(0,o.kt)("a",{href:"#reference",id:"reference"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/DockPanel/"},"DockPanel")),(0,o.kt)("h3",{id:"source-code-"},"Source code ",(0,o.kt)("a",{href:"#source-code",id:"source-code"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/DockPanel.cs"},"DockPanel.cs")))}k.isMDXComponent=!0}}]);