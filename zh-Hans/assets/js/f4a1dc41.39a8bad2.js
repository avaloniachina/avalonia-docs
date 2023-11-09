"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[42408],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,y=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const o=n.p+"assets/images/image (22) (3)-99d0103502f2c6cbcc87b90e07576a3e.png",l=n.p+"assets/images/image (11) (2)-0b4cf55b72e88ec0dade2220eaa2fb58.png",s={id:"how-to-create-a-custom-controls-library",title:"\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u63a7\u4ef6\u5e93"},c="\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u63a7\u4ef6\u5e93",i={unversionedId:"guides/custom-controls/how-to-create-a-custom-controls-library",id:"guides/custom-controls/how-to-create-a-custom-controls-library",title:"\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u63a7\u4ef6\u5e93",description:"\u672c\u6307\u5357\u5c06\u5411\u60a8\u5c55\u793a\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u63a7\u4ef6\u5e93\u5e76\u5728Avalonia UI\u5e94\u7528\u7a0b\u5e8f\u4e2d\u5f15\u7528\u5b83\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/custom-controls/how-to-create-a-custom-controls-library.md",sourceDirName:"guides/custom-controls",slug:"/guides/custom-controls/how-to-create-a-custom-controls-library",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/custom-controls/how-to-create-a-custom-controls-library",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/custom-controls/how-to-create-a-custom-controls-library.md",tags:[],version:"current",frontMatter:{id:"how-to-create-a-custom-controls-library",title:"\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u63a7\u4ef6\u5e93"},sidebar:"documentationSidebar",previous:{title:"\u4f7f\u7528\u5c5e\u6027\u7ed8\u5236",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/custom-controls/draw-with-a-property"},next:{title:"\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u5f39\u51fa\u7a97\u53e3",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/custom-controls/how-to-create-a-custom-flyout"}},u={},m=[{value:"XML\u547d\u540d\u7a7a\u95f4\u5b9a\u4e49",id:"xml\u547d\u540d\u7a7a\u95f4\u5b9a\u4e49",level:2},{value:"\u5e38\u89c1\u7684\u547d\u540d\u7a7a\u95f4\u5b9a\u4e49",id:"\u5e38\u89c1\u7684\u547d\u540d\u7a7a\u95f4\u5b9a\u4e49",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=p("Tabs"),y=p("TabItem"),b={toc:m},g="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u63a7\u4ef6\u5e93"},"\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u63a7\u4ef6\u5e93"),(0,a.kt)("p",null,"\u672c\u6307\u5357\u5c06\u5411\u60a8\u5c55\u793a\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u63a7\u4ef6\u5e93\u5e76\u5728",(0,a.kt)("em",{parentName:"p"},"Avalonia UI"),"\u5e94\u7528\u7a0b\u5e8f\u4e2d\u5f15\u7528\u5b83\u3002"),(0,a.kt)("img",{src:o,alt:""}),(0,a.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u5c06\u4e00\u4e2a\u81ea\u5b9a\u4e49\u63a7\u4ef6\u6587\u4ef6\u6dfb\u52a0\u5230\u4e00\u4e2a.NET\u7c7b\u5e93\u4e2d\u3002\u8be5\u5e93\u5df2\u5b89\u88c5\u4e86",(0,a.kt)("em",{parentName:"p"},"Avalonia UI")," ",(0,a.kt)("em",{parentName:"p"},"NuGet"),"\u5305\uff1a"),(0,a.kt)("img",{src:l,alt:""}),(0,a.kt)(d,{defaultValue:"xaml",values:[{label:"XAML",value:"xaml"},{label:"C#",value:"cs"}],mdxType:"Tabs"},(0,a.kt)(y,{value:"xaml",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:cc="clr-namespace:CCLibrary;assembly=CCLibrary"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n        x:Class="AvaloniaCCLib.MainWindow"\n        Title="AvaloniaCCLib">\n  <Window.Styles>\n    <Style Selector="cc|MyCustomControl">\n      <Setter Property="Background" Value="Yellow"/>\n    </Style>\n  </Window.Styles>\n\n  <cc:MyCustomControl Height="200" Width="300"/>\n\n</Window>\n'))),(0,a.kt)(y,{value:"cs",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"using Avalonia;\nusing Avalonia.Controls;\nusing Avalonia.Media;\n\nnamespace CCLibrary\n{\n\n    public class MyCustomControl : Control\n    {\n        public static readonly StyledProperty<IBrush?> BackgroundProperty =\n            Border.BackgroundProperty.AddOwner<MyCustomControl>();\n\n        public IBrush? Background\n        {\n            get { return GetValue(BackgroundProperty); }\n            set { SetValue(BackgroundProperty, value); }\n        }\n\n        public sealed override void Render(DrawingContext context)\n        {\n            if (Background != null)\n            {\n                var renderSize = Bounds.Size;\n                context.FillRectangle(Background, new Rect(renderSize));\n            }\n            base.Render(context);\n        }\n    }\n}\n")))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8bf7\u6ce8\u610f\uff0c\u63a7\u4ef6\u5e93\u7684\u547d\u540d\u7a7a\u95f4\u5f15\u7528\u4e2d\u5305\u542b\u4e86\u7a0b\u5e8f\u96c6\u7684\u540d\u79f0\u3002")),(0,a.kt)("h2",{id:"xml\u547d\u540d\u7a7a\u95f4\u5b9a\u4e49"},"XML\u547d\u540d\u7a7a\u95f4\u5b9a\u4e49"),(0,a.kt)("p",null,"\u5f53\u60a8\u5728",(0,a.kt)("em",{parentName:"p"},"Avalonia UI"),"\u7684XAML\u6587\u4ef6\u4e2d\u6dfb\u52a0\u5bf9\u63a7\u4ef6\u5e93\u7684\u5f15\u7528\u65f6\uff0c\u60a8\u53ef\u80fd\u5e0c\u671b\u4f7f\u7528URL\u6807\u8bc6\u683c\u5f0f\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'xmlns:cc="https://my.controls.url"\n')),(0,a.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3a\u63a7\u4ef6\u5e93\u4e2d\u5b58\u5728XML\u547d\u540d\u7a7a\u95f4\u5b9a\u4e49\u3002\u8fd9\u4e9b\u5b9a\u4e49\u5c06URL\u6620\u5c04\u5230\u4ee3\u7801\u547d\u540d\u7a7a\u95f4\uff0c\u5e76\u4f4d\u4e8e\u9879\u76ee\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Properties/AssemblyInfo.cs"),"\u6587\u4ef6\u4e2d\u3002\u4f8b\u5982\uff1a"," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'[assembly: XmlnsDefinition("https://github.com/avaloniaui", "Avalonia")]\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u60a8\u53ef\u4ee5\u5728",(0,a.kt)("em",{parentName:"p"},"Avalonia UI"),"\u5185\u7f6e\u63a7\u4ef6\u7684\u6e90\u4ee3\u7801\u4e2d\u67e5\u770b\u6b64\u5185\u5bb9",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/Properties/AssemblyInfo.cs"},"\u6b64\u5904"),"\u3002")),(0,a.kt)("h3",{id:"\u5e38\u89c1\u7684\u547d\u540d\u7a7a\u95f4\u5b9a\u4e49"},"\u5e38\u89c1\u7684\u547d\u540d\u7a7a\u95f4\u5b9a\u4e49"),(0,a.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u4e00\u4e2aURL\u6620\u5c04\u5230\u63a7\u4ef6\u5e93\u4e2d\u7684\u591a\u4e2a\u547d\u540d\u7a7a\u95f4\u3002\u53ea\u9700\u6dfb\u52a0\u591a\u4e2a\u4f7f\u7528\u76f8\u540cURL\u7684XML\u547d\u540d\u7a7a\u95f4\u5b9a\u4e49\uff0c\u4f46\u6620\u5c04\u5230\u4e0d\u540c\u7684\u4ee3\u7801\u547d\u540d\u7a7a\u95f4\uff0c\u5982\u4e0b\u6240\u793a\uff1a"," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'using Avalonia.Metadata;\n\n[assembly: XmlnsDefinition("https://my.controls.url", "My.NameSpace")]\n[assembly: XmlnsDefinition("https://my.controls.url", "My.NameSpace.Other")]\n')))}f.isMDXComponent=!0}}]);