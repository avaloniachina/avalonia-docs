"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[93996],{48761:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=e(85893),o=e(11151);const s={id:"index",title:"\u5f85\u529e\u4e8b\u9879\u5217\u8868\u5e94\u7528"},a=void 0,r={id:"tutorials/todo-list-app/index",title:"\u5f85\u529e\u4e8b\u9879\u5217\u8868\u5e94\u7528",description:"\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u60a8\u5c06\u4f7f\u7528 Avalonia UI \u548c Model View View-Model (MVVM) \u6a21\u5f0f\u6765\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684\u5f85\u529e\u4e8b\u9879\u5217\u8868\u5e94\u7528\uff0c\u8be5\u5e94\u7528\u4e0e\u5f85\u529e\u4e8b\u9879\u5217\u8868\uff08\u96c6\u5408\u6570\u636e\uff09\u8fdb\u884c\u7ed1\u5b9a\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/tutorials/todo-list-app/index.md",sourceDirName:"tutorials/todo-list-app",slug:"/tutorials/todo-list-app/",permalink:"/avalonia-docs/zh-Hans/docs/tutorials/todo-list-app/",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/current/tutorials/todo-list-app/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"\u5f85\u529e\u4e8b\u9879\u5217\u8868\u5e94\u7528"},sidebar:"documentationSidebar",previous:{title:"\u793a\u4f8b",permalink:"/avalonia-docs/zh-Hans/docs/tutorials/samples"},next:{title:"\u521b\u5efa\u65b0\u9879\u76ee",permalink:"/avalonia-docs/zh-Hans/docs/tutorials/todo-list-app/creating-a-new-project"}},l={},d=[{value:"MVVM \u6a21\u5f0f",id:"mvvm-\u6a21\u5f0f",level:2},{value:"\u5f00\u53d1\u65b9\u6cd5",id:"\u5f00\u53d1\u65b9\u6cd5",level:2}];function c(t){const n={a:"a",admonition:"admonition",em:"em",h2:"h2",p:"p",...(0,o.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u60a8\u5c06\u4f7f\u7528 Avalonia UI \u548c Model View View-Model (MVVM) \u6a21\u5f0f\u6765\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684\u5f85\u529e\u4e8b\u9879\u5217\u8868\u5e94\u7528\uff0c\u8be5\u5e94\u7528\u4e0e\u5f85\u529e\u4e8b\u9879\u5217\u8868\uff08\u96c6\u5408\u6570\u636e\uff09\u8fdb\u884c\u7ed1\u5b9a\u3002"}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{src:"/img/tutorials/todo-list-app/image (14).png",alt:"The finished application"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u5728\u6b64\u627e\u5230\u5df2\u5b8c\u6210\u5e94\u7528\u7a0b\u5e8f\u7684\u4ee3\u7801\uff1a",(0,i.jsx)(n.a,{href:"https://github.com/grokys/todo-tutorial",children:"\u8fd9\u91cc"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"mvvm-\u6a21\u5f0f",children:"MVVM \u6a21\u5f0f"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u60a8\u5c06\u5b66\u4e60\u66f4\u591a\u5173\u4e8e\u4f7f\u7528 Model-View-ViewModel (MVVM) \u6a21\u5f0f\u7684\u77e5\u8bc6\u3002\u5728\u7f16\u5199\u56fe\u5f62\u7528\u6237\u754c\u9762\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u901a\u5e38\u4f1a\u4f7f\u7528 MVVM \u6a21\u5f0f\uff0c\u5e76\u4e14\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0cAvalonia UI \u5e94\u7528\u7a0b\u5e8f\u90fd\u63a8\u8350\u4f7f\u7528 MVVM\u3002"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["\u8981\u4e86\u89e3\u6709\u5173\u5728 Avalonia UI \u4e2d\u4f7f\u7528 MVVM \u6a21\u5f0f\u4ee5\u53ca\u4f55\u65f6\u9002\u7528\u8be5\u6a21\u5f0f\u7684\u4e00\u4e9b\u80cc\u666f\u6982\u5ff5\uff0c\u8bf7\u53c2\u9605\uff1a",(0,i.jsx)(n.a,{href:"../../concepts/the-mvvm-pattern/",children:"\u8fd9\u91cc"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"\u5f00\u53d1\u65b9\u6cd5",children:"\u5f00\u53d1\u65b9\u6cd5"}),"\n",(0,i.jsxs)(n.p,{children:["\u672c\u6559\u7a0b\u5305\u542b\u4f9b\u60a8\u4f7f\u7528\u7684\u8bf4\u660e\uff0c\u65e0\u8bba\u60a8\u662f\u5728 Windows \u4e0a\u4f7f\u7528 ",(0,i.jsx)(n.em,{children:"Microsoft Visual Studio"}),"\uff0c\u8fd8\u662f\u5728 .NET Core \u547d\u4ee4\u884c\u754c\u9762 (.NET Core CLI) \u548c\u5176\u4ed6\u7f16\u8f91\u5668\u8fdb\u884c\u7f16\u7a0b\u3002\u6240\u5c55\u793a\u7684\u5c4f\u5e55\u622a\u56fe\u5747\u6765\u81ea ",(0,i.jsx)(n.em,{children:"Microsoft Visual Studio"}),"\uff0c\u5e76\u5728 Windows \u4e0a\u8fd0\u884c\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["\u8981\u4e86\u89e3\u672c\u6587\u6863\u4e2d\u7684\u5176\u4ed6\u6559\u7a0b\uff0c\u8bf7\u53c2\u9605\uff1a",(0,i.jsx)(n.a,{href:"/avalonia-docs/zh-Hans/docs/tutorials/",children:"\u8fd9\u91cc"}),"."]})})]})}function p(t={}){const{wrapper:n}={...(0,o.a)(),...t.components};return n?(0,i.jsx)(n,{...t,children:(0,i.jsx)(c,{...t})}):c(t)}},11151:(t,n,e)=>{e.d(n,{Z:()=>r,a:()=>a});var i=e(67294);const o={},s=i.createContext(o);function a(t){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function r(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:a(t.components),i.createElement(s.Provider,{value:n},t.children)}}}]);