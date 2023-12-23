"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[47196],{75178:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=s(85893),o=s(11151);const r={info:"itemscontrol",title:"ItemsControl"},i=void 0,c={id:"wpf-developer-tips/itemscontrol",title:"ItemsControl",description:"In WPF, ItemsControl and derived classes such as ListBox have two separate items properties Items which is same as WPF ItemsSource property.",source:"@site/versioned_docs/version-0.10.x/wpf-developer-tips/itemscontrol.md",sourceDirName:"wpf-developer-tips",slug:"/wpf-developer-tips/itemscontrol",permalink:"/avalonia-docs/docs/0.10.x/wpf-developer-tips/itemscontrol",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/wpf-developer-tips/itemscontrol.md",tags:[],version:"0.10.x",frontMatter:{info:"itemscontrol",title:"ItemsControl"},sidebar:"documentationSidebar",previous:{title:"Grid",permalink:"/avalonia-docs/docs/0.10.x/wpf-developer-tips/grid"},next:{title:"Tunnelling Events",permalink:"/avalonia-docs/docs/0.10.x/wpf-developer-tips/tunnelling-events"}},a={},l=[{value:"Before",id:"before",level:2},{value:"After",id:"after",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["In WPF, ",(0,n.jsx)(t.code,{children:"ItemsControl"})," and derived classes such as ",(0,n.jsx)(t.code,{children:"ListBox"})," have two separate items properties: ",(0,n.jsx)(t.code,{children:"Items"})," and ",(0,n.jsx)(t.code,{children:"ItemsSource"}),". Avalonia however just has a single one: ",(0,n.jsx)(t.code,{children:"Items"})," which is same as WPF ",(0,n.jsx)(t.code,{children:"ItemsSource"})," property."]}),"\n",(0,n.jsx)(t.h2,{id:"before",children:"Before"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:"contextMenu.Items.Add(runItem);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"after",children:"After"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:"var list = contextMenu.Items as IList;\nlist?.Add(runItem);\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>i});var n=s(67294);const o={},r=n.createContext(o);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);