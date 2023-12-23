"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[14207],{83802:(o,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=e(85893),r=e(11151);const s={id:"types-of-control",title:"Types of Control"},a=void 0,i={id:"guides/custom-controls/types-of-control",title:"Types of Control",description:"If you want to create your own controls, there are three main categories of control in Avalonia. The first thing to do is choose the category of control that best suits your use-case.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/guides/custom-controls/types-of-control.md",sourceDirName:"guides/custom-controls",slug:"/guides/custom-controls/types-of-control",permalink:"/avalonia-docs/ru/docs/guides/custom-controls/types-of-control",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/ru/docusaurus-plugin-content-docs/current/guides/custom-controls/types-of-control.md",tags:[],version:"current",frontMatter:{id:"types-of-control",title:"Types of Control"},sidebar:"documentationSidebar",previous:{title:"How To Create a Custom Page Transition",permalink:"/avalonia-docs/ru/docs/guides/graphics-and-animation/page-transitions/how-to-create-a-custom-page-transition"},next:{title:"How To Create a Custom Panel",permalink:"/avalonia-docs/ru/docs/guides/custom-controls/create-a-custom-panel"}},l={},c=[{value:"User Controls",id:"user-controls",level:3},{value:"Templated Controls",id:"templated-controls",level:3},{value:"Basic Controls",id:"basic-controls",level:3}];function d(o){const t={admonition:"admonition",h3:"h3",p:"p",...(0,r.a)(),...o.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"If you want to create your own controls, there are three main categories of control in Avalonia. The first thing to do is choose the category of control that best suits your use-case."}),"\n",(0,n.jsx)(t.h3,{id:"user-controls",children:"User Controls"}),"\n",(0,n.jsx)(t.p,{children:'UserControls are the simplest way to author controls. This type of control is best for "views" or "pages" that are specific to an application. UserControls are authored in the same way as you would author a Window: by creating a new UserControl from a template and adding controls to it.'}),"\n",(0,n.jsx)(t.h3,{id:"templated-controls",children:"Templated Controls"}),"\n",(0,n.jsx)(t.p,{children:"TemplatedControls are best used for generic controls that can be shared among various applications. They are lookless controls, meaning that they can be restyled for different themes and applications. The majority of standard controls defined by Avalonia fit into this category."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"In WPF/UWP you would inherit from the Control class to create a new templated control, but in Avalonia you should inherit from TemplatedControl."})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"If you want to provide a Style for your TemplatedControl in a separate file, remember to include this file in your Application via StyleInclude."})}),"\n",(0,n.jsx)(t.h3,{id:"basic-controls",children:"Basic Controls"}),"\n",(0,n.jsx)(t.p,{children:"Basic Controls are the foundation of user interfaces - they draw themselves using geometry by overriding the Visual.Render method. Controls such as TextBlock and Image fall into this category."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"In WPF/UWP you would inherit from the FrameworkElement class to create a new basic control, but in Avalonia you should inherit from Control."})})]})}function u(o={}){const{wrapper:t}={...(0,r.a)(),...o.components};return t?(0,n.jsx)(t,{...o,children:(0,n.jsx)(d,{...o})}):d(o)}},11151:(o,t,e)=>{e.d(t,{Z:()=>i,a:()=>a});var n=e(67294);const r={},s=n.createContext(r);function a(o){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof o?o(t):{...t,...o}}),[t,o])}function i(o){let t;return t=o.disableParentContext?"function"==typeof o.components?o.components(r):o.components||r:a(o.components),n.createElement(s.Provider,{value:t},o.children)}}}]);