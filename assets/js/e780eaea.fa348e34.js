"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[83667],{60935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(85893),a=n(11151);const i={id:"how-to-implement-multi-page-apps",title:"How To Implement Multi-page Apps"},p="How To Implement Multi-page Apps",l={id:"guides/development-guides/how-to-implement-multi-page-apps",title:"How To Implement Multi-page Apps",description:"Content in preparation.",source:"@site/docs/guides/development-guides/how-to-implement-multi-page-apps.md",sourceDirName:"guides/development-guides",slug:"/guides/development-guides/how-to-implement-multi-page-apps",permalink:"/avalonia-docs/docs/guides/development-guides/how-to-implement-multi-page-apps",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/development-guides/how-to-implement-multi-page-apps.md",tags:[],version:"current",frontMatter:{id:"how-to-implement-multi-page-apps",title:"How To Implement Multi-page Apps"},sidebar:"documentationSidebar",previous:{title:"Data Validation",permalink:"/avalonia-docs/docs/guides/development-guides/data-validation"},next:{title:"How To Show and Hide a Split View Pane with MVVM",permalink:"/avalonia-docs/docs/guides/development-guides/how-to-show-and-hide-a-split-view-pane-with-mvvm"}},s={},d=[];function r(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"how-to-implement-multi-page-apps",children:"How To Implement Multi-page Apps"}),"\n",(0,o.jsx)(t.p,{children:"Content in preparation."}),"\n",(0,o.jsx)(t.p,{children:"This guide will show you how to employ user controls as page views, and the view locator class, to implement a multiple-page application."}),"\n",(0,o.jsx)(t.p,{children:"that is added by the Avalonia MVVM solution template."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csharp",children:'public class ViewLocator : IDataTemplate\n{\n    public Control? Build(object? data)\n    {\n        if (data==null) return null;\n        var name = data.GetType().FullName!.Replace("ViewModel", "View");\n        var type = Type.GetType(name);\n\n        if (type != null)\n        {\n            return (Control)Activator.CreateInstance(type)!;\n        }\n\n        return new TextBlock { Text = "Not Found: " + name };\n    }\n\n    public bool Match(object? data)\n    {\n        return data is ViewModelBase;\n    }\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>p});var o=n(67294);const a={},i=o.createContext(a);function p(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:p(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);