"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[76188],{81443:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var c=r(85893),t=r(11151);const o={id:"create-a-custom-panel",title:"\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u9762\u677f"},s="\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u9762\u677f",i={id:"guides/custom-controls/create-a-custom-panel",title:"\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u9762\u677f",description:"\u8fd9\u4e2a\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u8986\u76d6Panel\u5143\u7d20\u7684\u9ed8\u8ba4\u5e03\u5c40\u884c\u4e3a\uff0c\u5e76\u521b\u5efa\u4ecePanel\u6d3e\u751f\u7684\u81ea\u5b9a\u4e49\u5e03\u5c40\u5143\u7d20\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/custom-controls/create-a-custom-panel.md",sourceDirName:"guides/custom-controls",slug:"/guides/custom-controls/create-a-custom-panel",permalink:"/avalonia-docs/zh-Hans/docs/guides/custom-controls/create-a-custom-panel",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/custom-controls/create-a-custom-panel.md",tags:[],version:"current",frontMatter:{id:"create-a-custom-panel",title:"\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u9762\u677f"},sidebar:"documentationSidebar",previous:{title:"\u63a7\u4ef6\u7c7b\u578b",permalink:"/avalonia-docs/zh-Hans/docs/guides/custom-controls/types-of-control"},next:{title:"\u5b9a\u4e49\u5c5e\u6027",permalink:"/avalonia-docs/zh-Hans/docs/guides/custom-controls/defining-properties"}},a={},l=[];function d(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u9762\u677f",children:"\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u9762\u677f"}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u4e2a\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u8986\u76d6",(0,c.jsx)(n.code,{children:"Panel"}),"\u5143\u7d20\u7684\u9ed8\u8ba4\u5e03\u5c40\u884c\u4e3a\uff0c\u5e76\u521b\u5efa\u4ece",(0,c.jsx)(n.code,{children:"Panel"}),"\u6d3e\u751f\u7684\u81ea\u5b9a\u4e49\u5e03\u5c40\u5143\u7d20\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u8be5\u4f8b\u5b50\u5b9a\u4e49\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u81ea\u5b9a\u4e49",(0,c.jsx)(n.code,{children:"Panel"}),"\u5143\u7d20\uff0c\u79f0\u4e3a",(0,c.jsx)(n.code,{children:"PlotPanel"}),"\uff0c\u5b83\u6839\u636e\u4e24\u4e2a\u786c\u7f16\u7801\u7684x\u548cy\u5750\u6807\u6765\u5b9a\u4f4d\u5b50\u5143\u7d20\u3002\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"x"}),"\u548c",(0,c.jsx)(n.code,{children:"y"}),"\u90fd\u8bbe\u7f6e\u4e3a",(0,c.jsx)(n.code,{children:"50"}),"\uff0c\u56e0\u6b64\u6240\u6709\u5b50\u5143\u7d20\u90fd\u88ab\u5b9a\u4f4d\u5728x\u548cy\u8f74\u4e0a\u7684\u8be5\u4f4d\u7f6e\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4e3a\u4e86\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684",(0,c.jsx)(n.code,{children:"Panel"}),"\u884c\u4e3a\uff0c\u8be5\u4f8b\u5b50\u4f7f\u7528\u4e86",(0,c.jsx)(n.code,{children:"MeasureOverride"}),"\u548c",(0,c.jsx)(n.code,{children:"ArrangeOverride"}),"\u65b9\u6cd5\u3002\u6bcf\u4e2a\u65b9\u6cd5\u8fd4\u56de\u5fc5\u8981\u7684",(0,c.jsx)(n.code,{children:"Size"}),"\u6570\u636e\u6765\u5b9a\u4f4d\u548c\u6e32\u67d3\u5b50\u5143\u7d20\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-csharp",children:"public class PlotPanel : Panel\n{\n    // \u91cd\u5199Panel\u7684\u9ed8\u8ba4Measure\u65b9\u6cd5\n    protected override Size MeasureOverride(Size availableSize)\n    {\n        var panelDesiredSize = new Size();\n\n        // \u5728\u6211\u4eec\u7684\u4f8b\u5b50\u4e2d\uff0c\u8fd9\u91cc\u53ea\u6709\u4e00\u4e2a\u5b50\u5143\u7d20\u3002\n        // \u58f0\u660e\u6211\u4eec\u7684\u9762\u677f\u53ea\u9700\u8981\u5176\u552f\u4e00\u5b50\u5143\u7d20\u7684\u5927\u5c0f\u3002\n        foreach (var child in Children)\n        {\n            child.Measure(availableSize);\n            panelDesiredSize = child.DesiredSize;\n        }\n\n        return panelDesiredSize;\n    }\n\n    protected override Size ArrangeOverride(Size finalSize)\n    {\n        foreach (var child in Children)\n        {\n            double x = 50;\n            double y = 50;\n\n            child.Arrange(new Rect(new Point(x, y), child.DesiredSize));\n        }\n        \n        return finalSize; // \u8fd4\u56de\u6700\u7ec8\u6392\u5217\u7684\u5927\u5c0f\n    }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>s});var c=r(67294);const t={},o=c.createContext(t);function s(e){const n=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),c.createElement(o.Provider,{value:n},e.children)}}}]);