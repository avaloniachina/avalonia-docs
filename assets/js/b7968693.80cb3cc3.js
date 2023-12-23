"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[41026],{44244:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var t=r(85893),o=r(11151);const i={info:"dependencyproperty",title:"DependencyProperty"},a=void 0,p={id:"wpf-developer-tips/dependencyproperty",title:"DependencyProperty",description:"The Avalonia equivalent of DependencyProperty is StyledProperty, however Avalonia has a richer property system than WPF, and includes DirectProperty for turning standard CLR properties into Avalonia properties. The common base class of StyledProperty and DirectProperty is AvaloniaProperty.",source:"@site/versioned_docs/version-0.10.x/wpf-developer-tips/dependencyproperty.md",sourceDirName:"wpf-developer-tips",slug:"/wpf-developer-tips/dependencyproperty",permalink:"/avalonia-docs/docs/0.10.x/wpf-developer-tips/dependencyproperty",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/wpf-developer-tips/dependencyproperty.md",tags:[],version:"0.10.x",frontMatter:{info:"dependencyproperty",title:"DependencyProperty"},sidebar:"documentationSidebar",previous:{title:"UIElement, FrameworkElement and Control",permalink:"/avalonia-docs/docs/0.10.x/wpf-developer-tips/uielement-frameworkelement-and-control"},next:{title:"Grid",permalink:"/avalonia-docs/docs/0.10.x/wpf-developer-tips/grid"}},s={},d=[];function c(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The Avalonia equivalent of ",(0,t.jsx)(n.code,{children:"DependencyProperty"})," is ",(0,t.jsx)(n.code,{children:"StyledProperty"}),", however Avalonia ",(0,t.jsx)(n.a,{href:"../authoring-controls/defining-properties",children:"has a richer property system than WPF"}),", and includes ",(0,t.jsx)(n.code,{children:"DirectProperty"})," for turning standard CLR properties into Avalonia properties. The common base class of ",(0,t.jsx)(n.code,{children:"StyledProperty"})," and ",(0,t.jsx)(n.code,{children:"DirectProperty"})," is ",(0,t.jsx)(n.code,{children:"AvaloniaProperty"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If your dependency property uses ",(0,t.jsx)(n.code,{children:"FrameworkPropertyMetadataOptions.AffectsMeasure"})," now you should use ",(0,t.jsx)(n.code,{children:"AffectsMeasure<TControl>(MyProperty)"})," to obtain desired effect."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"WPF"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'// SplitterPanel control\npublic static readonly DependencyProperty OrientationProperty =\n    DependencyProperty.Register(\n        "Orientation",\n        typeof(Orientation),\n        typeof(SplitterPanel),\n        new FrameworkPropertyMetadata(\n            Orientation.Horizontal,\n            FrameworkPropertyMetadataOptions.AffectsMeasure));\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Avalonia"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"// SplitterPanel control\npublic static readonly StyledProperty<Orientation> OrientationProperty =\n    AvaloniaProperty.Register<SplitterPanel, Orientation>(nameof(Orientation), Orientation.Horizontal);\n\nstatic SplitterPanel()\n{\n    AffectsMeasure<SplitterPanel>(OrientationProperty);\n}\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>p,a:()=>a});var t=r(67294);const o={},i=t.createContext(o);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);