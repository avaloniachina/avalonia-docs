"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[45563],{92963:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>A,frontMatter:()=>d,metadata:()=>a,toc:()=>l});var o=t(85893),i=t(11151),c=t(48917);const d={id:"how-to-implement-dependency-injection",title:"How To Implement Dependency Injection"},s="How To Implement Dependency Injection",a={id:"guides/implementation-guides/how-to-implement-dependency-injection",title:"How To Implement Dependency Injection",description:"Content in preparation.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/implementation-guides/how-to-implement-dependency-injection.md",sourceDirName:"guides/implementation-guides",slug:"/guides/implementation-guides/how-to-implement-dependency-injection",permalink:"/avalonia-docs/zh-Hans/docs/guides/implementation-guides/how-to-implement-dependency-injection",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/implementation-guides/how-to-implement-dependency-injection.md",tags:[],version:"current",frontMatter:{id:"how-to-implement-dependency-injection",title:"How To Implement Dependency Injection"},sidebar:"documentationSidebar",previous:{title:"How To Use the MVVM Pattern",permalink:"/avalonia-docs/zh-Hans/docs/guides/implementation-guides/how-to-use-the-mvvm-pattern"},next:{title:"Developer Tools",permalink:"/avalonia-docs/zh-Hans/docs/guides/implementation-guides/developer-tools"}},p={},l=[];function m(e){const n={em:"em",h1:"h1",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"how-to-implement-dependency-injection",children:"How To Implement Dependency Injection"}),"\n",(0,o.jsx)(n.p,{children:"Content in preparation."}),"\n",(0,o.jsxs)(n.p,{children:["This guide will show you how to use Dependency Injection (DI) with ",(0,o.jsx)(n.em,{children:"Avalonia UI"})," and the MVVM pattern."]}),"\n",(0,o.jsx)("img",{src:c.Z,alt:""})]})}function A(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},48917:(e,n,t)=>{t.d(n,{Z:()=>o});const o="data:image/png;base64,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"},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>d});var o=t(67294);const i={},c=o.createContext(i);function d(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);