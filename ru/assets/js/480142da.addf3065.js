"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[94158],{59227:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(85893),o=a(11151);const r={description:"GUIDES - WPF Conversion"},s="Data Templates (\u0440\u0443\u0441: \u0428\u0430\u0431\u043b\u043e\u043d\u044b \u0414\u0430\u043d\u043d\u044b\u0445)",l={id:"get-started/wpf/datatemplates",title:"Data Templates (\u0440\u0443\u0441: \u0428\u0430\u0431\u043b\u043e\u043d\u044b \u0414\u0430\u043d\u043d\u044b\u0445)",description:"GUIDES - WPF Conversion",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/get-started/wpf/datatemplates.md",sourceDirName:"get-started/wpf",slug:"/get-started/wpf/datatemplates",permalink:"/avalonia-docs/ru/docs/get-started/wpf/datatemplates",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/ru/docusaurus-plugin-content-docs/current/get-started/wpf/datatemplates.md",tags:[],version:"current",frontMatter:{description:"GUIDES - WPF Conversion"},sidebar:"documentationSidebar",previous:{title:"Styling (\u0440\u0443\u0441: \u0421\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f)",permalink:"/avalonia-docs/ru/docs/get-started/wpf/styling"},next:{title:"HierarchicalDataTemplate",permalink:"/avalonia-docs/ru/docs/get-started/wpf/hierarchicaldatatemplate"}},i={},d=[{value:"Data Template Selector (\u0440\u0443\u0441: \u0421\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u0428\u0430\u0431\u043b\u043e\u043d\u0430 \u0414\u0430\u043d\u043d\u044b\u0445)",id:"data-template-selector-\u0440\u0443\u0441-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u0448\u0430\u0431\u043b\u043e\u043d\u0430-\u0434\u0430\u043d\u043d\u044b\u0445",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"data-templates-\u0440\u0443\u0441-\u0448\u0430\u0431\u043b\u043e\u043d\u044b-\u0434\u0430\u043d\u043d\u044b\u0445",children:"Data Templates (\u0440\u0443\u0441: \u0428\u0430\u0431\u043b\u043e\u043d\u044b \u0414\u0430\u043d\u043d\u044b\u0445)"}),"\n",(0,n.jsxs)(t.p,{children:["\u0412 Avalonia UI, \u0448\u0430\u0431\u043b\u043e\u043d\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0435 \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0432\u043d\u0443\u0442\u0440\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f.\n(\u042d\u0442\u043e \u0432\u0435\u0440\u043d\u043e \u0438 \u0434\u043b\u044f \u0441\u0442\u0438\u043b\u0435\u0439, \u0441\u043c. ",(0,n.jsx)(t.a,{href:"styling",children:"\u0437\u0434\u0435\u0441\u044c"}),".)"]}),"\n",(0,n.jsxs)(t.p,{children:["\u0412\u043c\u0435\u0441\u0442\u043e \u044d\u0442\u043e\u0433\u043e, \u0448\u0430\u0431\u043b\u043e\u043d\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043c\u0435\u0449\u0430\u044e\u0442\u0441\u044f \u0432 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044e ",(0,n.jsx)(t.code,{children:"DataTemplates"})," \u0443 Control, \u0438\u043b\u0438 \u0432\u043d\u0443\u0442\u0440\u044c ... (\u0438 \u0432 ",(0,n.jsx)(t.code,{children:"Application"}),"):"]}),"\n",(0,n.jsxs)(t.p,{children:["\u041a \u043f\u0440\u0438\u043c\u0435\u0440\u0443, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u043d\u0438\u0436\u0435 \u043a\u043e\u0434, \u0434\u043e\u0431\u0430\u0432\u0438\u0442 \u0448\u0430\u0431\u043b\u043e\u043d \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u043a\u043b\u0430\u0441\u0441\u0430 ",(0,n.jsx)(t.code,{children:"MyViewModel"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-markup",children:'<UserControl xmlns:viewmodels="using:MyApp.ViewModels"\n             x:DataType="viewmodels:ControlViewModel">\n    <UserControl.DataTemplates>\n        <DataTemplate DataType="viewmodels:FooViewModel">\n            <Border Background="Red" CornerRadius="8">\n                <TextBox Text="{Binding Name}"/>\n            </Border>\n        </DataTemplate>\n    </UserControl.DataTemplates>\n    \x3c!-- Assuming that ControlViewModel.Foo is an object of type\n         MyApp.ViewModels.FooViewModel then a red border with a corner\n         radius of 8 containing a TextBox will be displayed here.\n         DataType is required only if you use Compiled Bindings, so it can be type-checked.  --\x3e\n    <ContentControl Content="{Binding Foo}"/>\n<UserControl>\n'})}),"\n",(0,n.jsxs)(t.p,{children:["\u0412 Avalonia, \u0448\u0430\u0431\u043b\u043e\u043d\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u043c\u043e\u0433\u0443\u0442 \u043f\u0440\u0438\u0432\u044f\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043a \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430\u043c \u0438 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u043d\u044b\u043c \u043a\u043b\u0430\u0441\u0441\u0430\u043c, \u0447\u0435\u0433\u043e \u043d\u0435\u043b\u044c\u0437\u044f \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0432 WPF.\n\u041f\u043e \u044d\u0442\u043e\u0439 \u043f\u0440\u0438\u0447\u0438\u043d\u0435, \u0432 ",(0,n.jsx)(t.code,{children:"DataTemplate"})," \u0432\u0430\u0436\u0435\u043d \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 (\u0442\u0430\u043a\u0436\u0435, \u043a\u0430\u043a \u0432\u044b \u0441\u0434\u0435\u043b\u0430\u043b\u0438 \u0431\u044b \u044d\u0442\u043e \u0432 \u043a\u043e\u0434\u0435)."]}),"\n",(0,n.jsx)(t.h2,{id:"data-template-selector-\u0440\u0443\u0441-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u0448\u0430\u0431\u043b\u043e\u043d\u0430-\u0434\u0430\u043d\u043d\u044b\u0445",children:"Data Template Selector (\u0440\u0443\u0441: \u0421\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u0428\u0430\u0431\u043b\u043e\u043d\u0430 \u0414\u0430\u043d\u043d\u044b\u0445)"}),"\n",(0,n.jsxs)(t.p,{children:["\u0412 WPF, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,n.jsx)(t.code,{children:"DataTemplateSelector"})," \u0434\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u0430 \u0438\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f ",(0,n.jsx)(t.code,{children:"DataTemplate"})," \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043f\u0440\u043e\u0431\u0440\u043e\u0448\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445.\n\u0412 Avalonia \u0442\u0430\u043a \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043d\u0435\u043b\u044c\u0437\u044f, \u043d\u043e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c ",(0,n.jsx)(t.code,{children:"IDataTemplate"}),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044c \u043a\u0430\u043a \u0445\u043e\u0440\u043e\u0448\u0438\u0439 \u0430\u043d\u0430\u043b\u043e\u0433 ",(0,n.jsx)(t.code,{children:"DataTemplateSelector"}),". \u041f\u0440\u0438\u043c\u0435\u0440 \u0441\u043c. ",(0,n.jsx)(t.a,{href:"https://github.com/AvaloniaUI/Avalonia.Samples/tree/main/src/Avalonia.Samples/DataTemplates/IDataTemplateSample",children:"\u0437\u0434\u0435\u0441\u044c"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>l,a:()=>s});var n=a(67294);const o={},r=n.createContext(o);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);