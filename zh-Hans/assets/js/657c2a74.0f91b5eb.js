"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[39504],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,d=u["".concat(i,".").concat(h)]||u[h]||m[h]||a;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},96153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a=n.p+"assets/images/checkbox1-c4051754d443364f78db1021cb871f13.gif",l=n.p+"assets/images/checkbox2-94c3d6039c5f2eccfbbf2d6b6061ab5a.gif",c={description:"REFERENCE - Built-in Control"},i="Check Box",s={unversionedId:"reference/controls/checkbox",id:"reference/controls/checkbox",title:"Check Box",description:"REFERENCE - Built-in Control",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/controls/checkbox.md",sourceDirName:"reference/controls",slug:"/reference/controls/checkbox",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/checkbox",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/reference/controls/checkbox.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Control"},sidebar:"documentationSidebar",previous:{title:"Carousel",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/carousel"},next:{title:"ColorPicker",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/colorpicker/"}},p={},u=[{value:"Useful Properties",id:"useful-properties",level:2},{value:"Examples",id:"examples",level:2},{value:"More Information",id:"more-information",level:2}],m={toc:u},h="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"check-box"},"Check Box"),(0,o.kt)("p",null,"The check box control presents a Boolean value where the true value is represented using a check mark, and the false value is an empty box. The check box has an option to present a nullable Boolean, where the null value represents 'unknown' and is drawn as a shaded box."),(0,o.kt)("p",null,"Click interaction toggles the value in the sequence: checked, unchecked, unknown (if three-state)."),(0,o.kt)("h2",{id:"useful-properties"},"Useful Properties"),(0,o.kt)("p",null,"You will probably use these properties most often:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"IsChecked")),(0,o.kt)("td",{parentName:"tr",align:null},"Sets the Boolean value.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"IsThreeState")),(0,o.kt)("td",{parentName:"tr",align:null},"(Boolean) Sets the three state mode.")))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"This is an example of two-state check boxes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n        x:Class="AvaloniaAppTemplate.MainWindow"\n        Title="CheckBox sample">\n    <StackPanel Margin="20">\n        <CheckBox>Not checked by default</CheckBox>\n        <CheckBox IsChecked="True">Checked by default</CheckBox>\n    </StackPanel>\n</Window>\n')),(0,o.kt)("p",null,"Looks like this when running on Windows:"),(0,o.kt)("img",{src:a,alt:""}),(0,o.kt)("p",null,"This is an example of a three-state checkbox:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n        x:Class="AvaloniaAppTemplate.MainWindow"\n        Title="CheckBox sample">\n    <StackPanel Margin="20">\n        <CheckBox IsThreeState="True" IsChecked="False">Not checked by default</CheckBox>\n        <CheckBox IsThreeState="True" IsChecked="True">Checked by default</CheckBox>\n        <CheckBox IsThreeState="True" IsChecked="{x:Null}">Unknown by default</CheckBox>\n    </StackPanel>\n</Window>\n')),(0,o.kt)("p",null,"Looks like this when running on Windows:"),(0,o.kt)("img",{src:l,alt:""}),(0,o.kt)("h2",{id:"more-information"},"More Information"),(0,o.kt)("p",null,"For the complete API documentation about this control, see ",(0,o.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/CheckBox/"},"here"),"."),(0,o.kt)("p",null,"View the source code on ",(0,o.kt)("em",{parentName:"p"},"GitHub")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/CheckBox.cs"},(0,o.kt)("inlineCode",{parentName:"a"},"CheckBox.cs"))))}d.isMDXComponent=!0}}]);