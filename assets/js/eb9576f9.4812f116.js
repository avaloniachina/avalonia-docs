"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[93252],{85410:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=a(85893),o=a(11151);const l={id:"implement-idatatemplates",title:"Implementing IDataTemplate"},i=void 0,s={id:"templates/implement-idatatemplates",title:"Implementing IDataTemplate",description:"If you need more control over your DataTemplate you can do this by creating a class which implements the IDataTemplate-interface. With this interface you can create your own DataTemplate not only respecting the DataType of your data, but also its properties or whatever you like.",source:"@site/versioned_docs/version-0.10.x/templates/implement-idatatemplates.md",sourceDirName:"templates",slug:"/templates/implement-idatatemplates",permalink:"/avalonia-docs/docs/0.10.x/templates/implement-idatatemplates",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/templates/implement-idatatemplates.md",tags:[],version:"0.10.x",frontMatter:{id:"implement-idatatemplates",title:"Implementing IDataTemplate"},sidebar:"documentationSidebar",previous:{title:"Creating Data Templates in Code",permalink:"/avalonia-docs/docs/0.10.x/templates/creating-data-templates-in-code"},next:{title:"Authoring Controls",permalink:"/avalonia-docs/docs/0.10.x/authoring-controls/"}},r={},c=[{value:"Samples",id:"samples",level:2},{value:"Basic Example",id:"basic-example",level:3},{value:"Advanced Samples",id:"advanced-samples",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["If you need more control over your ",(0,n.jsx)(t.code,{children:"DataTemplate"})," you can do this by creating a class which implements the ",(0,n.jsx)(t.code,{children:"IDataTemplate"}),"-interface. With this interface you can create your own ",(0,n.jsx)(t.code,{children:"DataTemplate"})," not only respecting the ",(0,n.jsx)(t.code,{children:"DataType"})," of your data, but also its properties or whatever you like."]}),"\n",(0,n.jsx)(t.p,{children:"To use this interface you must implement the following two members in your class:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"public bool Match(object data) { ... }"})," you need to check in this method if the provided data matches your ",(0,n.jsx)(t.code,{children:"IDataTemplate"})," or not. You need to return true if the data matches, otherwise false."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"public IControl Build(object param) { ... }"})," In this method you need to build and return the control which represents your data."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"samples",children:"Samples"}),"\n",(0,n.jsx)(t.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,n.jsxs)(t.p,{children:["Below is a very basic sample implementation of the ",(0,n.jsx)(t.code,{children:"IDataTemplate"}),"-interface:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:"// remember to import the needed namespace\n// using Avalonia.Controls.Templates;\n\npublic class MyDataTemplate : IDataTemplate\n{\n    public IControl Build(object param)\n    {\n        // build the control to display\n        return new TextBlock() { Text = (string)param };\n    }\n\n    public bool Match(object data)\n    {\n        // Check if we can accept the provided data\n        return data is string;\n    }\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You can now use the class ",(0,n.jsx)(t.code,{children:"MyDataTemplate"})," in your view like this:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-markup",children:'\x3c!-- remember to add the needed prefix in your view --\x3e\n\x3c!-- xmlns:dataTemplates="using:MyApp.DataTemplates" --\x3e\n\n<ContentControl Content="{Binding MyContent}">\n\t<ContentControl.ContentTemplate>\n\t\t<dataTemplates:MyDataTemplate />\n\t</ContentControl.ContentTemplate>\n</ContentControl>\n'})}),"\n",(0,n.jsx)(t.h3,{id:"advanced-samples",children:"Advanced Samples"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/AvaloniaUI/Avalonia.Samples/tree/main/src/Avalonia.Samples/DataTemplates/IDataTemplateSample",children:"Implementing IDataTemplate"})})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>i});var n=a(67294);const o={},l=n.createContext(o);function i(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);