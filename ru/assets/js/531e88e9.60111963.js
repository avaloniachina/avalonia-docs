"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[24002],{43952:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=t(85893),o=t(11151);const r={id:"create-a-custom-panel",title:"Create a Custom Panel"},i=void 0,s={id:"layout/create-a-custom-panel",title:"Create a Custom Panel",description:"This example shows how to override the default layout behavior of the Panel element and create custom layout elements that are derived from Panel.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-0.10.x/layout/create-a-custom-panel.md",sourceDirName:"layout",slug:"/layout/create-a-custom-panel",permalink:"/avalonia-docs/ru/docs/0.10.x/layout/create-a-custom-panel",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/ru/docusaurus-plugin-content-docs/version-0.10.x/layout/create-a-custom-panel.md",tags:[],version:"0.10.x",frontMatter:{id:"create-a-custom-panel",title:"Create a Custom Panel"},sidebar:"documentationSidebar",previous:{title:"Alignment, Margins and Padding",permalink:"/avalonia-docs/ru/docs/0.10.x/layout/alignment-margins-and-padding"},next:{title:"Distribution / Publishing",permalink:"/avalonia-docs/ru/docs/0.10.x/distribution-publishing/"}},l={},d=[];function c(e){const n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["This example shows how to override the default layout behavior of the ",(0,a.jsx)(n.code,{children:"Panel"})," element and create custom layout elements that are derived from ",(0,a.jsx)(n.code,{children:"Panel"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The example defines a simple custom ",(0,a.jsx)(n.code,{children:"Panel"})," element called ",(0,a.jsx)(n.code,{children:"PlotPanel"}),", which positions child elements according to two hard-coded x- and y-coordinates. In this example, ",(0,a.jsx)(n.code,{children:"x"})," and ",(0,a.jsx)(n.code,{children:"y"})," are both set to ",(0,a.jsx)(n.code,{children:"50"}),"; therefore, all child elements are positioned at that location on the x and y axes."]}),"\n",(0,a.jsxs)(n.p,{children:["To implement custom ",(0,a.jsx)(n.code,{children:"Panel"})," behaviors, the example uses the ",(0,a.jsx)(n.code,{children:"MeasureOverride"})," and ",(0,a.jsx)(n.code,{children:"ArrangeOverride"})," methods. Each method returns the ",(0,a.jsx)(n.code,{children:"Size"})," data that is necessary to position and render child elements."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"public class PlotPanel : Panel\n{\n    // Override the default Measure method of Panel\n    protected override Size MeasureOverride(Size availableSize)\n    {\n        var panelDesiredSize = new Size();\n\n        // In our example, we just have one child. \n        // Report that our panel requires just the size of its only child.\n        foreach (var child in Children)\n        {\n            child.Measure(availableSize);\n            panelDesiredSize = child.DesiredSize;\n        }\n\n        return panelDesiredSize;\n    }\n\n    protected override Size ArrangeOverride(Size finalSize)\n    {\n        foreach (var child in Children)\n        {\n            double x = 50;\n            double y = 50;\n\n            child.Arrange(new Rect(new Point(x, y), child.DesiredSize));\n        }\n        \n        return finalSize; // Returns the final Arranged size\n    }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var a=t(67294);const o={},r=a.createContext(o);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);