"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[46789],{19119:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=r(85893),a=r(11151);const o={},i="RenderTransforms and RenderTransformOrigin",s={id:"get-started/wpf/rendertransforms-and-rendertransformorigin",title:"RenderTransforms and RenderTransformOrigin",description:"RenderTransformOrigins are different in WPF and Avalonia",source:"@site/docs/get-started/wpf/rendertransforms-and-rendertransformorigin.md",sourceDirName:"get-started/wpf",slug:"/get-started/wpf/rendertransforms-and-rendertransformorigin",permalink:"/avalonia-docs/docs/get-started/wpf/rendertransforms-and-rendertransformorigin",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/get-started/wpf/rendertransforms-and-rendertransformorigin.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"PropertyChangedCallback",permalink:"/avalonia-docs/docs/get-started/wpf/propertychangedcallback"},next:{title:"WPF and UWP Comparison",permalink:"/avalonia-docs/docs/get-started/wpf/comparison-of-avalonia-with-wpf-and-uwp"}},d={},c=[];function l(e){const n={code:"code",h1:"h1",img:"img",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"rendertransforms-and-rendertransformorigin",children:"RenderTransforms and RenderTransformOrigin"}),"\n",(0,t.jsxs)(n.p,{children:["RenderTransformOrigins are different in WPF and Avalonia: If you apply a ",(0,t.jsx)(n.code,{children:"RenderTransform"}),", keep in mind that default value for the RenderTransformOrigin in Avalonia is ",(0,t.jsx)(n.code,{children:"RelativePoint.Center"}),". In WPF the default value is ",(0,t.jsx)(n.code,{children:"RelativePoint.TopLeft"})," (0, 0). In controls like Viewbox the same code will lead to a different rendering behavior:"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"In WPF:"})," ",(0,t.jsx)(n.img,{src:"https://files.gitter.im/AvaloniaUI/Avalonia/cDrM/image.png",alt:"WPF"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"In Avalonia:"})," ",(0,t.jsx)(n.img,{src:"https://files.gitter.im/AvaloniaUI/Avalonia/KGk7/image.png",alt:"Avalonia"})]}),"\n",(0,t.jsx)(n.p,{children:"In AvaloniaUI, to get the same scale transform we should indicate that the RenderTransformOrigin is the TopLeft part of the Visual."})]})}function f(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>i});var t=r(67294);const a={},o=t.createContext(a);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);