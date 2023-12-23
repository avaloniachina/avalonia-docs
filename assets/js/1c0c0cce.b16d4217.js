"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[4399],{33313:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=o(85893),t=o(11151);const a={id:"index",title:"Building Cross-Platform Applications"},s=void 0,r={id:"guides/building-cross-platform-applications/index",title:"Building Cross-Platform Applications",description:"This guide introduces Avalonia and outlines how to architect a cross-platform application to maximize code re-use and deliver a high-quality UI experience across all major platforms: Windows, Linux, macOS, iOS, Android and WebAssembly.",source:"@site/docs/guides/building-cross-platform-applications/index.md",sourceDirName:"guides/building-cross-platform-applications",slug:"/guides/building-cross-platform-applications/",permalink:"/avalonia-docs/docs/guides/building-cross-platform-applications/",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/building-cross-platform-applications/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Building Cross-Platform Applications"},sidebar:"documentationSidebar",previous:{title:"How-To Guides",permalink:"/avalonia-docs/docs/guides/"},next:{title:"Architecture",permalink:"/avalonia-docs/docs/guides/building-cross-platform-applications/architecture"}},l={},c=[];function d(e){const i={code:"code",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"This guide introduces Avalonia and outlines how to architect a cross-platform application to maximize code re-use and deliver a high-quality UI experience across all major platforms: Windows, Linux, macOS, iOS, Android and WebAssembly."}),"\n",(0,n.jsx)(i.p,{children:"Unlike the Xamarin.Forms and MAUI approach, which tends to yield applications with a lowest-common-denominator feature-set and a generic-looking user interface, Avalonia UI encourages leveraging its drawn UI capabilities. It allows developers to write their data storage and business logic code once, while offering a responsive and high-performing UI across all platforms. This document discusses a general architectural approach to achieve this goal."}),"\n",(0,n.jsx)(i.p,{children:"Here is a summary of the key points for creating Avalonia cross-platform apps:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Use .NET"})," - Develop your apps in C#, F# or VB.NET. Existing code written with .NET can be seamlessly ported to Windows, Linux, macOS, iOS, Android and WebAssembly using Avalonia."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Utilize the MVVM design pattern"})," - Develop your application\u2019s User Interface using the ",(0,n.jsx)(i.code,{children:"Model/View/ViewModel"}),' pattern. This approach promotes a clear separation between the "Model\u201d and the "View", with the "ViewModel" acting as an intermediary. This ensures that your UI logic remains agnostic of the underlying platform, thereby promoting code reuse and maintainability.']}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Leverage Avalonia's drawing capabilities"})," - Avalonia doesn't rely on native UI controls, instead, it operates similarly to Flutter, drawing the entire UI. This not only ensures a consistent look and feel across all platforms but also offers an unparalleled level of customization, allowing you to tailor the UI to your exact needs."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Balance between core and platform-specific code"})," - The key to achieving high code reuse is striking the right balance between platform-agnostic core code and platform-specific code. The core code comprises everything that does not interact directly with the underlying operating system."]}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,i,o)=>{o.d(i,{Z:()=>r,a:()=>s});var n=o(67294);const t={},a=n.createContext(t);function s(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);