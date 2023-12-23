"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[18577],{63547:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=e(85893),a=e(11151);const i={id:"the-datacontext",title:"The DataContext"},d=void 0,l={id:"data-binding/the-datacontext",title:"The DataContext",description:"The Control.DataContext property describes where controls will look by default for values when binding. The data context will usually be set for top-level controls such as Window and child controls will inherit this data context.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-0.10.x/data-binding/the-datacontext.md",sourceDirName:"data-binding",slug:"/data-binding/the-datacontext",permalink:"/avalonia-docs/ru/docs/0.10.x/data-binding/the-datacontext",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/ru/docusaurus-plugin-content-docs/version-0.10.x/data-binding/the-datacontext.md",tags:[],version:"0.10.x",frontMatter:{id:"the-datacontext",title:"The DataContext"},sidebar:"documentationSidebar",previous:{title:"Data Binding",permalink:"/avalonia-docs/ru/docs/0.10.x/data-binding/"},next:{title:"Change Notifications",permalink:"/avalonia-docs/ru/docs/0.10.x/data-binding/change-notifications"}},s={},c=[{value:"Binding DataContext",id:"binding-datacontext",level:2}];function r(n){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"Control.DataContext"})," property describes where controls will look by default for values when binding. The data context will usually be set for top-level controls such as ",(0,o.jsx)(t.a,{href:"http://reference.avaloniaui.net/api/Avalonia.Controls/Window",children:(0,o.jsx)(t.code,{children:"Window"})})," and child controls will inherit this data context."]}),"\n",(0,o.jsx)(t.p,{children:"When using the MVVM pattern, the data context will usually be an instance of a view model."}),"\n",(0,o.jsxs)(t.p,{children:["If you created your application with the ",(0,o.jsx)(t.a,{href:"../tutorials/todo-list-app/creating-a-new-project#net-core-cli",children:"Avalonia MVVM Application"})," template then you will see something like this in your ",(0,o.jsx)(t.code,{children:"Program.cs"})," file:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csharp",children:"private static void AppMain(Application app, string[] args)\n{\n    var window = new MainWindow\n    {\n        DataContext = new MainWindowViewModel(),\n    };\n\n    app.Run(window);\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["This means that when the ",(0,o.jsx)(t.code,{children:"MainWindow"})," is created, a new instance of ",(0,o.jsx)(t.code,{children:"MainWindowViewModel"})," will be created and assigned to the window's ",(0,o.jsx)(t.code,{children:"DataContext"})," property. From here all bindings will by default bind to properties on this object:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-markup",children:'<Window>\n    <Button Content="{Binding ButtonCaption}"/>\n</Window>\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Will bind the ",(0,o.jsx)(t.code,{children:"Button"}),"'s ",(0,o.jsx)(t.code,{children:"Content"})," to ",(0,o.jsx)(t.code,{children:"Window.DataContext.ButtonCaption"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"binding-datacontext",children:"Binding DataContext"}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Info:"})," In the samples below we consider that we have a ",(0,o.jsx)(t.code,{children:"ViewModel"})," that has a property named ",(0,o.jsx)(t.code,{children:"Content"}),". ",(0,o.jsx)(t.code,{children:"Content"})," itself is a class that has a property called ",(0,o.jsx)(t.code,{children:"Header"}),"."]})}),"\n",(0,o.jsxs)(t.p,{children:["When binding ",(0,o.jsx)(t.code,{children:"DataContext"}),", the ",(0,o.jsx)(t.code,{children:"DataContext"})," of the parent control is used as the source of the binding:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",children:'<Window>\n    \x3c!-- Will bind `DataContext` to `Window.DataContext.Content --\x3e\n    <StackPanel DataContext="{Binding Content}"/>\n</Window>\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Controls that display content based on a ",(0,o.jsx)(t.a,{href:"../templates/data-templates",children:"data template"})," will automatically set the ",(0,o.jsx)(t.code,{children:"DataContext"})," for the controls in the template. For example ",(0,o.jsx)(t.code,{children:"ContentControl"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",children:'<Window>\n    <ContentControl Content="{Binding Content}">\n        <ContentControl.ContentTemplate>\n            <DataTemplate>\n                \x3c!-- Will bind `Text` to `Window.DataContext.Content.Header --\x3e\n                <TextBlock Text="{Binding Header}"/>\n            </DataTemplate>\n        </ContentControl.ContentTemplate>\n    </ContentControl>\n</Window>\n'})})]})}function h(n={}){const{wrapper:t}={...(0,a.a)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},11151:(n,t,e)=>{e.d(t,{Z:()=>l,a:()=>d});var o=e(67294);const a={},i=o.createContext(a);function d(n){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function l(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:d(n.components),o.createElement(i.Provider,{value:t},n.children)}}}]);