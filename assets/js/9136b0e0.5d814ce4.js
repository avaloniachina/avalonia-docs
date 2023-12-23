"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[61407],{26224:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=t(85893),o=t(11151);const i={info:"tunnelling-events",title:"Tunnelling Events"},l=void 0,r={id:"wpf-developer-tips/tunnelling-events",title:"Tunnelling Events",description:"Avalonia has tunnelling events but they're not exposed via separate Preview CLR event handlers. To subscribe to a tunnelling event you must call AddHandler with RoutingStrategies.Tunnel:",source:"@site/versioned_docs/version-0.10.x/wpf-developer-tips/tunnelling-events.md",sourceDirName:"wpf-developer-tips",slug:"/wpf-developer-tips/tunnelling-events",permalink:"/avalonia-docs/docs/0.10.x/wpf-developer-tips/tunnelling-events",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/wpf-developer-tips/tunnelling-events.md",tags:[],version:"0.10.x",frontMatter:{info:"tunnelling-events",title:"Tunnelling Events"},sidebar:"documentationSidebar",previous:{title:"ItemsControl",permalink:"/avalonia-docs/docs/0.10.x/wpf-developer-tips/itemscontrol"},next:{title:"Class Handlers",permalink:"/avalonia-docs/docs/0.10.x/wpf-developer-tips/class-handlers"}},a={},d=[];function c(e){const n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Avalonia has tunnelling events but they're not exposed via separate ",(0,s.jsx)(n.code,{children:"Preview"})," CLR event handlers. To subscribe to a tunnelling event you must call ",(0,s.jsx)(n.code,{children:"AddHandler"})," with ",(0,s.jsx)(n.code,{children:"RoutingStrategies.Tunnel"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"target.AddHandler(InputElement.KeyDownEvent, OnPreviewKeyDown, RoutingStrategies.Tunnel);\n\nvoid OnPreviewKeyDown(object sender, KeyEventArgs e)\n{\n    // Handler code\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>l});var s=t(67294);const o={},i=s.createContext(o);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);