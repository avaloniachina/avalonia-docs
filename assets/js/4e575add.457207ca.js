"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[55549],{3067:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=t(85893),r=t(11151);const i={id:"defining-properties",title:"Defining Properties"},s="Styled Property",a={id:"guides/custom-controls/defining-properties",title:"Defining Properties",description:"If you are creating a custom control, you will usually want it to have properties that can be set by the Avalonia UI styling system.",source:"@site/docs/guides/custom-controls/defining-properties.md",sourceDirName:"guides/custom-controls",slug:"/guides/custom-controls/defining-properties",permalink:"/avalonia-docs/docs/guides/custom-controls/defining-properties",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/custom-controls/defining-properties.md",tags:[],version:"current",frontMatter:{id:"defining-properties",title:"Defining Properties"},sidebar:"documentationSidebar",previous:{title:"How To Create a Custom Panel",permalink:"/avalonia-docs/docs/guides/custom-controls/create-a-custom-panel"},next:{title:"Draw with a Property",permalink:"/avalonia-docs/docs/guides/custom-controls/draw-with-a-property"}},l={},c=[{value:"Register a Styled Property",id:"register-a-styled-property",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"styled-property",children:"Styled Property"}),"\n",(0,o.jsxs)(n.p,{children:["If you are creating a custom control, you will usually want it to have properties that can be set by the ",(0,o.jsx)(n.em,{children:"Avalonia UI"})," styling system."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["For more information about how to use styles in ",(0,o.jsx)(n.em,{children:"Avalonia UI"}),", see the guide ",(0,o.jsx)(n.a,{href:"../../basics/user-interface/styling",children:"here"}),"."]})}),"\n",(0,o.jsxs)(n.p,{children:["On this page, you will see how to implement a property so that it can be changed by the ",(0,o.jsx)(n.em,{children:"Avalonia UI"})," styling system. This is a two step process:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Register a styled property."}),"\n",(0,o.jsx)(n.li,{children:"Provide the getter/setter for the property."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"register-a-styled-property",children:"Register a Styled Property"}),"\n",(0,o.jsxs)(n.p,{children:["You register a styled property by defining a static read-only field and using the ",(0,o.jsx)(n.code,{children:"AvaloniaProperty.Register"})," method."]}),"\n",(0,o.jsx)(n.p,{children:"There is a convention for the name of a property. It must follow the pattern:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"[AttributeName]Property\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This means that ",(0,o.jsx)(n.em,{children:"Avalonia UI"})," will look for an attribute in the XAML, like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'<MyCustomControl AttributeName="value" ... >\n'})}),"\n",(0,o.jsx)(n.p,{children:"For example, with a styled property in place, you can control the background color of the custom control from the window styles collection:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",metastring:"title='MainWindow.axaml'",children:'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:cc="using:AvaloniaCCExample.CustomControls"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n        x:Class="AvaloniaCCExample.MainWindow"\n        Title="Avalonia Custom Control">\n\n  <Window.Styles>\n    <Style Selector="cc|MyCustomControl">\n      <Setter Property="Background" Value="Yellow"/>\n    </Style>\n  </Window.Styles>\n\n  <cc:MyCustomControl Height="200" Width="300"/>\n\n</Window>\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",metastring:"title='MainWindow.axaml.cs'",children:"using Avalonia;\nusing Avalonia.Controls;\nusing Avalonia.Media;\n\nnamespace AvaloniaCCExample.CustomControls\n{\n    public class MyCustomControl : Control\n    {\n        public static readonly StyledProperty<IBrush?> BackgroundProperty =\n            Border.BackgroundProperty.AddOwner<MyCustomControl>();\n\n        public IBrush? Background\n        {\n            get { return GetValue(BackgroundProperty); }\n            set { SetValue(BackgroundProperty, value); }\n        }\n\n        public sealed override void Render(DrawingContext context)\n        {\n            if (Background != null)\n            {\n                var renderSize = Bounds.Size;\n                context.FillRectangle(Background, new Rect(renderSize));\n            }\n            base.Render(context);\n        }\n    }\n}\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Note that the getter/setter of the property uses the special Avalonia UI ",(0,o.jsx)(n.code,{children:"GetValue"})," and ",(0,o.jsx)(n.code,{children:"SetValue"})," methods."]})}),"\n",(0,o.jsx)(n.p,{children:"The styled property will work both at run-time and in the preview panel."}),"\n",(0,o.jsx)("img",{src:"/img/gitbook-import/assets/image (4) (3).png",alt:""}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["For more advanced information about how to create a custom control, see ",(0,o.jsx)(n.a,{href:"/avalonia-docs/docs/guides/custom-controls/how-to-create-advanced-custom-controls",children:"here"}),"."]})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var o=t(67294);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);