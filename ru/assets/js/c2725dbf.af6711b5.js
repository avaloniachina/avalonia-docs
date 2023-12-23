"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[21323],{29052:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(85893),r=a(11151);const s={id:"treedatagrid-column-types",title:"TreeDataGrid column types"},o=void 0,i={id:"controls/treedatagrid/treedatagrid-column-types",title:"TreeDataGrid column types",description:"TreeDataGrid currently supports three different column types:",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-0.10.x/controls/treedatagrid/treedatagrid-column-types.md",sourceDirName:"controls/treedatagrid",slug:"/controls/treedatagrid/treedatagrid-column-types",permalink:"/avalonia-docs/ru/docs/0.10.x/controls/treedatagrid/treedatagrid-column-types",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/ru/docusaurus-plugin-content-docs/version-0.10.x/controls/treedatagrid/treedatagrid-column-types.md",tags:[],version:"0.10.x",frontMatter:{id:"treedatagrid-column-types",title:"TreeDataGrid column types"},sidebar:"documentationSidebar",previous:{title:"Creating a Flat TreeDataGrid",permalink:"/avalonia-docs/ru/docs/0.10.x/controls/treedatagrid/creating-a-flat-treedatagrid"},next:{title:"TimePicker",permalink:"/avalonia-docs/ru/docs/0.10.x/controls/timepicker"}},l={},c=[{value:"TextColumn",id:"textcolumn",level:3},{value:"HierarchicalExpanderColumn",id:"hierarchicalexpandercolumn",level:3},{value:"TemplateColumn",id:"templatecolumn",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"TreeDataGrid currently supports three different column types:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/AvaloniaUI/Avalonia.Controls.TreeDataGrid/blob/master/src/Avalonia.Controls.TreeDataGrid/Models/TreeDataGrid/TextColumn.cs",children:"TextColumn"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/AvaloniaUI/Avalonia.Controls.TreeDataGrid/blob/master/src/Avalonia.Controls.TreeDataGrid/Models/TreeDataGrid/HierarchicalExpanderColumn.cs",children:"HierarchicalExpanderColumn"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/AvaloniaUI/Avalonia.Controls.TreeDataGrid/blob/master/src/Avalonia.Controls.TreeDataGrid/Models/TreeDataGrid/TemplateColumn.cs",children:"TemplateColumn"})}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"textcolumn",children:"TextColumn"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"TextColumn"})," is useful when you want all cells in the column to have only text values. Usually, everything you need to instantiate ",(0,n.jsx)(t.code,{children:"TextColumn"})," class is"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'new TextColumn<Person, string>("First Name", x => x.FirstName)\n'})}),"\n",(0,n.jsx)(t.p,{children:"The first generic parameter here is your model type basically, the place where you want to grab data from. Person in this case. The second generic parameter here is the type of the property where you want to grab data from. In this case, it is a string, it will be used to know exactly which type your property has."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/53405089/157456551-dd394781-903a-4c7b-8874-e631e21534a1.png",alt:""})}),"\n",(0,n.jsxs)(t.p,{children:["This is the signature of the ",(0,n.jsx)(t.code,{children:"TextColumn"})," constructor. There are two most important parameters. The first one will be used to define the column header, usually, it would be a string. In the sample above it is ",(0,n.jsx)(t.em,{children:'"First Name"'}),". The second parameter is an expression to get the value of the property. In the sample above it is ",(0,n.jsx)(t.em,{children:"x => x.FirstName"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),":\nThe sample above is taken from ",(0,n.jsx)(t.a,{href:"https://github.com/AvaloniaUI/Avalonia.Controls.TreeDataGrid/blob/master/docs/get-started-flat.md",children:"this article"}),". If you feel like you need more examples feel free to check it, there is a sample that shows how to use TextColumns and how to run a whole ",(0,n.jsx)(t.code,{children:"TreeDataGrid"})," using them."]}),"\n",(0,n.jsx)(t.h3,{id:"hierarchicalexpandercolumn",children:"HierarchicalExpanderColumn"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"HierarchicalExpanderColumn"})," can be used only with ",(0,n.jsx)(t.code,{children:"HierarchicalTreeDataGrid"})," (a.k.a TreeView) that's what Hierarchical stands for in its name, also it can be used only with ",(0,n.jsx)(t.code,{children:"HierarchicalTreeDataGridSource"}),". This type of columns can be useful when you want cells to show an expander to reveal nested data."]}),"\n",(0,n.jsxs)(t.p,{children:["That's how you instantiate ",(0,n.jsx)(t.code,{children:"HierarchicalExpanderColumn"})," class:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'new HierarchicalExpanderColumn<Person>(new TextColumn<Person, string>("First Name", x => x.FirstName), x => x.Children)\n'})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"HierarchicalExpanderColumn"})," has only one generic parameter, it is your model type, same as in ",(0,n.jsx)(t.code,{children:"TextColumn"}),", Person in this case."]}),"\n",(0,n.jsxs)(t.p,{children:["Let's take a look at the ",(0,n.jsx)(t.code,{children:"HierarchicalExpanderColumn"})," constructor."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/53405089/157536079-fd14f1ed-0a7d-438a-abba-fd56766709a9.png",alt:""})}),"\n",(0,n.jsxs)(t.p,{children:["The first parameter in the constructor is a nested column, you would usually want to display something besides the expander and that's why you need this parameter. In the sample above, we want to display text and we use ",(0,n.jsx)(t.code,{children:"TextColumn"})," for that. The second parameter is a selector of the child elements, stuff that will be displayed when ",(0,n.jsx)(t.code,{children:"Expander"})," is in the expanded state below the parent element."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),":\nThe sample above is taken from ",(0,n.jsx)(t.a,{href:"https://github.com/AvaloniaUI/Avalonia.Controls.TreeDataGrid/blob/master/docs/get-started-hierarchical.md",children:"this article"}),". If you feel like you need more examples feel free to check it, there is a sample that shows how to use ",(0,n.jsx)(t.code,{children:"HierarchicalExpanderColumn"})," and how to run a whole ",(0,n.jsx)(t.code,{children:"TreeDataGrid"})," using it."]}),"\n",(0,n.jsx)(t.h3,{id:"templatecolumn",children:"TemplateColumn"}),"\n",(0,n.jsxs)(t.p,{children:["TemplateColumn is the most customizable option to create a column. You can put basically everything that you can put into ",(0,n.jsx)(t.code,{children:"IDataTemplate"})," into this column cells."]}),"\n",(0,n.jsxs)(t.p,{children:["That's how you instantiate ",(0,n.jsx)(t.code,{children:"TemplateColumn"})," class:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'new TemplateColumn<Person>(\n                        "Selected",\n                        new FuncDataTemplate<FileTreeNodeModel>((a,e) => new CheckBox()))\n'})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"TemplateColumn"})," has only one generic parameter, it is your model type, same as in ",(0,n.jsx)(t.code,{children:"TextColumn"}),", Person in this case. Code above will create a column with header ",(0,n.jsx)(t.em,{children:'"Selected"'})," and ",(0,n.jsx)(t.code,{children:"CheckBox"})," in each cell."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/53405089/157664231-8653bce9-f8d6-4fbc-8e78-e3ff93f1ace2.png",alt:""})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"TemplateColumn"})," has only two required parameters. The first one is the column header as everywhere. The second is ",(0,n.jsx)(t.code,{children:"IDataTemplate"})," basically, a template that contains stuff that you want to be displayed in the cells of this column."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>o});var n=a(67294);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);