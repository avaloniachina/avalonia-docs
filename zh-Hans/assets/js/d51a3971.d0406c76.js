"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[2403],{25616:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=t(85893),s=t(11151);const l={id:"creating-data-templates-in-code",title:"Creating Data Templates in Code"},i=void 0,c={id:"templates/creating-data-templates-in-code",title:"Creating Data Templates in Code",description:"Avalonia also supports creating data templates in code with the FuncDataTemplate class.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/templates/creating-data-templates-in-code.md",sourceDirName:"templates",slug:"/templates/creating-data-templates-in-code",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/templates/creating-data-templates-in-code",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/templates/creating-data-templates-in-code.md",tags:[],version:"0.10.x",frontMatter:{id:"creating-data-templates-in-code",title:"Creating Data Templates in Code"},sidebar:"documentationSidebar",previous:{title:"Data Templates",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/templates/data-templates"},next:{title:"Implementing IDataTemplate",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/templates/implement-idatatemplates"}},o={},p=[{value:"Samples",id:"samples",level:2}];function r(e){const a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["Avalonia also supports creating data templates in code with the ",(0,n.jsx)(a.a,{href:"http://reference.avaloniaui.net/api/Avalonia.Controls.Templates/FuncDataTemplate_1/",children:(0,n.jsx)(a.code,{children:"FuncDataTemplate<T>"})})," class."]}),"\n",(0,n.jsxs)(a.p,{children:["At its simplest you can create a data template by passing a lambda which accepts an instance to the ",(0,n.jsx)(a.code,{children:"FuncDataTemplate<T>"})," constructor:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-csharp",children:'var template = new FuncDataTemplate<Student>((value, namescope) =>\n    new TextBlock\n    {\n        [!TextBlock.TextProperty] = new Binding("FirstName"),\n    });\n'})}),"\n",(0,n.jsx)(a.p,{children:"Is equivalent to:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-markup",children:'<DataTemplate DataType="{x:Type local:Student}">\n    <TextBlock Text="{Binding FirstName}"/>\n</DataTemplate>\n'})}),"\n",(0,n.jsx)(a.h2,{id:"samples",children:"Samples"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"https://github.com/AvaloniaUI/Avalonia.Samples/blob/main/src/Avalonia.Samples/DataTemplates/FuncDataTemplateSample",children:"FuncDataTemplate Sample"})})]})}function d(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>c,a:()=>i});var n=t(67294);const s={},l=n.createContext(s);function i(e){const a=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(l.Provider,{value:a},e.children)}}}]);