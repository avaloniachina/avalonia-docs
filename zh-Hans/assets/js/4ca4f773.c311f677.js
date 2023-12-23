"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[72529],{61423:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var i=s(85893),t=s(11151);const a=s.p+"assets/images/image (6)-cc46373b1d13515248a454404b3dcde0.png",r=s.p+"assets/images/image (13)-92ee86355a4a446e54c0346f12d84055.png",o={id:"maintaining-stable-branch-pr-merge-process",title:"Maintaining Stable Branch"},c=void 0,l={id:"guides/developer-guides/maintaining-stable-branch-pr-merge-process",title:"Maintaining Stable Branch",description:"This Process MUST be followed during any period that master branch is allowing breaking changes.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/guides/developer-guides/maintaining-stable-branch-pr-merge-process.md",sourceDirName:"guides/developer-guides",slug:"/guides/developer-guides/maintaining-stable-branch-pr-merge-process",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/guides/developer-guides/maintaining-stable-branch-pr-merge-process",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/guides/developer-guides/maintaining-stable-branch-pr-merge-process.md",tags:[],version:"0.10.x",frontMatter:{id:"maintaining-stable-branch-pr-merge-process",title:"Maintaining Stable Branch"},sidebar:"documentationSidebar",previous:{title:"Release Process",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/guides/developer-guides/release-process"},next:{title:"Testing with NCrunch",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/guides/developer-guides/testing-with-ncrunch"}},d={},h=[];function g(e){const n={admonition:"admonition",br:"br",code:"code",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["This Process MUST be followed during any period that ",(0,i.jsx)(n.code,{children:"master"})," branch is allowing breaking changes."]})}),"\n",(0,i.jsx)(n.p,{children:"In order to maintain a stable branch it is required to follow a process on every PR that gets merged to ensure they are back ported."}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsx)(n.p,{children:"For a PR to be back ported it MUST reach the following criteria"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Contain no breaking API changes, (changing signatures, removing a method, etc)",(0,i.jsx)(n.br,{}),"\n","Additional overloads, methods, classes and extension methods are allowable."]}),"\n",(0,i.jsx)(n.li,{children:"Be suitable for the stable release, by default most changes and features should be considered."}),"\n"]})]}),"\n",(0,i.jsx)(n.p,{children:"Provided the criteria are met:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Merge the PR to master generating a merge commit."}),"\n",(0,i.jsx)(n.li,{children:'i.e. "Merge pull request #5797 from AvaloniaUI/double-tapped-event-args"'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"At this point the git tree should look similar to this."}),"\n",(0,i.jsx)("img",{className:"center",src:a,alt:""}),"\n",(0,i.jsx)(n.p,{children:"Now we need to get the new PR merged into the stable branch."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Pay careful attention here, we don't just merge into the stable branch!"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Checkout the ",(0,i.jsx)(n.code,{children:"stable/0.10.x"})," branch."]}),"\n",(0,i.jsx)(n.li,{children:"Cherrypick the merge commit from master."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The git tree should look like this now."}),"\n",(0,i.jsx)("img",{className:"center",src:r,alt:""}),"\n",(0,i.jsxs)(n.p,{children:["Please also use the ",(0,i.jsx)(n.code,{children:"backport-candidate"})," and ",(0,i.jsx)(n.code,{children:"backported 0.10.x"})," labels on the PRs themselves."]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>r});var i=s(67294);const t={},a=i.createContext(t);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);