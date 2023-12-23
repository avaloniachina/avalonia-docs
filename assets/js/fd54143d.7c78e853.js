"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[13135],{86294:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=t(85893),s=t(11151);const r={},l="Class Handlers",o={id:"get-started/wpf/class-handlers",title:"Class Handlers",description:"In WPF, class handlers for events can be added by calling EventManager.RegisterClassHandler. An example of registering a class handler in WPF might be:",source:"@site/docs/get-started/wpf/class-handlers.md",sourceDirName:"get-started/wpf",slug:"/get-started/wpf/class-handlers",permalink:"/avalonia-docs/docs/get-started/wpf/class-handlers",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/get-started/wpf/class-handlers.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Tunnelling Events",permalink:"/avalonia-docs/docs/get-started/wpf/tunnelling-events"},next:{title:"PropertyChangedCallback",permalink:"/avalonia-docs/docs/get-started/wpf/propertychangedcallback"}},c={},d=[];function i(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"class-handlers",children:"Class Handlers"}),"\n",(0,a.jsxs)(n.p,{children:["In WPF, class handlers for events can be added by calling ",(0,a.jsx)(n.a,{href:"https://msdn.microsoft.com/en-us/library/ms597875.aspx",children:"EventManager.RegisterClassHandler"}),". An example of registering a class handler in WPF might be:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",metastring:"title='WPF'",children:"static MyControl()\n{\n    EventManager.RegisterClassHandler(typeof(MyControl), MyEvent, HandleMyEvent));\n}\n\nprivate static void HandleMyEvent(object sender, RoutedEventArgs e)\n{\n}\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",metastring:"title='Avalonia'",children:"static MyControl()\n{\n    MyEvent.AddClassHandler<MyControl>((x, e) => x.HandleMyEvent(e));\n}\n\nprivate void HandleMyEvent(RoutedEventArgs e)\n{\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Notice that in WPF you have to add the class handler as a static method, whereas in Avalonia the class handler is not static: the notification is automatically directed to the correct instance. The ",(0,a.jsx)(n.code,{children:"sender"})," parameter typical of event handlers is not necessary in this case and everything remains strongly typed."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var a=t(67294);const s={},r=a.createContext(s);function l(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);