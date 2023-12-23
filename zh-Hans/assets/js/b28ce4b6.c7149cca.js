"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[72533],{48272:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=t(85893),o=t(11151);const s={id:"testing-with-ncrunch",title:"Testing with NCrunch"},r=void 0,c={id:"guides/developer-guides/testing-with-ncrunch",title:"Testing with NCrunch",description:"When you enable NCrunch on your solution the build will most likely fail with an error along the lines of The name 'InitializeComponent' does not exist in the current context. This is because the *.axaml files are not included in the NCrunch workspace directory because (currently) NCrunch does not know to include those files.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/guides/developer-guides/testing-with-ncrunch.md",sourceDirName:"guides/developer-guides",slug:"/guides/developer-guides/testing-with-ncrunch",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/guides/developer-guides/testing-with-ncrunch",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/guides/developer-guides/testing-with-ncrunch.md",tags:[],version:"0.10.x",frontMatter:{id:"testing-with-ncrunch",title:"Testing with NCrunch"},sidebar:"documentationSidebar",previous:{title:"Maintaining Stable Branch",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/guides/developer-guides/maintaining-stable-branch-pr-merge-process"},next:{title:"Tutorials",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/tutorials/"}},a={},d=[];function l(e){const n={a:"a",code:"code",em:"em",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["When you enable ",(0,i.jsx)(n.a,{href:"https://www.ncrunch.net",children:"NCrunch"})," on your solution the build will most likely fail with an error along the lines of ",(0,i.jsx)(n.code,{children:"The name 'InitializeComponent' does not exist in the current context"}),". This is because the ",(0,i.jsx)(n.code,{children:"*.axaml"})," files are not included in the NCrunch workspace directory because (currently) NCrunch does not know to include those files."]}),"\n",(0,i.jsxs)(n.p,{children:["To resolve this, in the NCrunch configuration of the project that uses Avalonia change the ",(0,i.jsx)(n.em,{children:"Additional files to include"})," setting and add ",(0,i.jsx)(n.code,{children:"Views\\*.axaml"}),". This will ensure the ",(0,i.jsx)(n.code,{children:"*.axaml"})," files are copied to the workspace and that the ",(0,i.jsx)(n.code,{children:"InitializeComponent"})," method is generated."]}),"\n",(0,i.jsx)(n.p,{children:"After adding that setting you can use NCrunch normally."})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var i=t(67294);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);