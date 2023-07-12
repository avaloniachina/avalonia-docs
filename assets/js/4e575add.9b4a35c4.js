"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[55549],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={id:"defining-properties",title:"Defining Properties"},i="Styled Property",l={unversionedId:"guides/custom-controls/defining-properties",id:"guides/custom-controls/defining-properties",title:"Defining Properties",description:"If you are creating a custom control, you will usually want it to have properties that can be set by the Avalonia UI styling system.",source:"@site/docs/guides/custom-controls/defining-properties.md",sourceDirName:"guides/custom-controls",slug:"/guides/custom-controls/defining-properties",permalink:"/avalonia-docs/docs/next/guides/custom-controls/defining-properties",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/custom-controls/defining-properties.md",tags:[],version:"current",frontMatter:{id:"defining-properties",title:"Defining Properties"},sidebar:"documentationSidebar",previous:{title:"How To Create a Custom Panel",permalink:"/avalonia-docs/docs/next/guides/custom-controls/create-a-custom-panel"},next:{title:"Draw with a Property",permalink:"/avalonia-docs/docs/next/guides/custom-controls/draw-with-a-property"}},s={},p=[{value:"Register a Styled Property",id:"register-a-styled-property",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"styled-property"},"Styled Property"),(0,o.kt)("p",null,"If you are creating a custom control, you will usually want it to have properties that can be set by the ",(0,o.kt)("em",{parentName:"p"},"Avalonia UI")," styling system."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For more information about how to use styles in ",(0,o.kt)("em",{parentName:"p"},"Avalonia UI"),", see the guide ",(0,o.kt)("a",{parentName:"p",href:"../../basics/user-interface/styling"},"here"),".")),(0,o.kt)("p",null,"On this page, you will see how to implement a property so that it can be changed by the ",(0,o.kt)("em",{parentName:"p"},"Avalonia UI")," styling system. This is a two step process:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Register a styled property."),(0,o.kt)("li",{parentName:"ul"},"Provide the getter/setter for the property.")),(0,o.kt)("h3",{id:"register-a-styled-property"},"Register a Styled Property"),(0,o.kt)("p",null,"You register a styled property by defining a static read-only field and using the ",(0,o.kt)("inlineCode",{parentName:"p"},"AvaloniaProperty.Register")," method."),(0,o.kt)("p",null,"There is a convention for the name of a property. It must follow the pattern:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[AttributeName]Property\n")),(0,o.kt)("p",null,"This means that ",(0,o.kt)("em",{parentName:"p"},"Avalonia UI")," will look for an attribute in the XAML, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<MyCustomControl AttributeName="value" ... >\n')),(0,o.kt)("p",null,"For example, with a styled property in place, you can control the background color of the custom control from the window styles collection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title='MainWindow.axaml'",title:"'MainWindow.axaml'"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:cc="using:AvaloniaCCExample.CustomControls"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n        x:Class="AvaloniaCCExample.MainWindow"\n        Title="Avalonia Custom Control">\n\n  <Window.Styles>\n    <Style Selector="cc|MyCustomControl">\n      <Setter Property="Background" Value="Yellow"/>\n    </Style>\n  </Window.Styles>\n\n  <cc:MyCustomControl Height="200" Width="300"/>\n\n</Window>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"title='MainWindow.axaml.cs'",title:"'MainWindow.axaml.cs'"},"using Avalonia;\nusing Avalonia.Controls;\nusing Avalonia.Media;\n\nnamespace AvaloniaCCExample.CustomControls\n{\n    public class MyCustomControl : Control\n    {\n        public static readonly StyledProperty<IBrush?> BackgroundProperty =\n            Border.BackgroundProperty.AddOwner<MyCustomControl>();\n\n        public IBrush? Background\n        {\n            get { return GetValue(BackgroundProperty); }\n            set { SetValue(BackgroundProperty, value); }\n        }\n\n        public sealed override void Render(DrawingContext context)\n        {\n            if (Background != null)\n            {\n                var renderSize = Bounds.Size;\n                context.FillRectangle(Background, new Rect(renderSize));\n            }\n            base.Render(context);\n        }\n    }\n}\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Note that the getter/setter of the property uses the special Avalonia UI ",(0,o.kt)("inlineCode",{parentName:"p"},"GetValue")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"SetValue")," methods.")),(0,o.kt)("p",null,"The styled property will work both at run-time and in the preview panel."),(0,o.kt)("img",{src:"/img/gitbook-import/assets/image (4) (3).png",alt:""}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For more advanced information about how to create a custom control, see ",(0,o.kt)("a",{parentName:"p",href:"/avalonia-docs/docs/next/guides/custom-controls/how-to-create-advanced-custom-controls"},"here"),".")))}m.isMDXComponent=!0}}]);