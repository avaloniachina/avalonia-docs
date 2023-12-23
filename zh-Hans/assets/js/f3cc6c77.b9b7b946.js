"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[31404],{96932:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>t,metadata:()=>c,toc:()=>r});var o=a(85893),i=a(11151);const t={id:"how-to-add-menu-icons",title:"\u5982\u4f55\u6dfb\u52a0\u83dc\u5355\u56fe\u6807"},s="\u5982\u4f55\u6dfb\u52a0\u83dc\u5355\u56fe\u6807",c={id:"guides/graphics-and-animation/how-to-add-menu-icons",title:"\u5982\u4f55\u6dfb\u52a0\u83dc\u5355\u56fe\u6807",description:"\u5728 Avalonia \u4e2d\uff0c\u901a\u8fc7\u4e3a\u83dc\u5355\u9879\u6dfb\u52a0\u56fe\u6807\uff0c\u60a8\u53ef\u4ee5\u589e\u5f3a\u5e94\u7528\u7a0b\u5e8f\u7684\u5916\u89c2\u548c\u7528\u6237\u4f53\u9a8c\u3002\u56fe\u6807\u53ef\u4ee5\u4e3a\u83dc\u5355\u9879\u7684\u64cd\u4f5c\u63d0\u4f9b\u89c6\u89c9\u63d0\u793a\uff0c\u4f7f\u7528\u6237\u66f4\u5bb9\u6613\u6d4f\u89c8\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u672c\u6307\u5357\u5c06\u6307\u5bfc\u60a8\u5982\u4f55\u5728 Avalonia \u4e2d\u4e3a\u83dc\u5355\u9879\u6dfb\u52a0\u56fe\u6807\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/graphics-and-animation/how-to-add-menu-icons.md",sourceDirName:"guides/graphics-and-animation",slug:"/guides/graphics-and-animation/how-to-add-menu-icons",permalink:"/avalonia-docs/zh-Hans/docs/guides/graphics-and-animation/how-to-add-menu-icons",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/graphics-and-animation/how-to-add-menu-icons.md",tags:[],version:"current",frontMatter:{id:"how-to-add-menu-icons",title:"\u5982\u4f55\u6dfb\u52a0\u83dc\u5355\u56fe\u6807"},sidebar:"documentationSidebar",previous:{title:"\u5982\u4f55\u7ed8\u5236\u56fe\u5f62",permalink:"/avalonia-docs/zh-Hans/docs/guides/graphics-and-animation/graphics-and-animations"},next:{title:"\u5982\u4f55\u4f7f\u7528\u56fe\u6807",permalink:"/avalonia-docs/zh-Hans/docs/guides/graphics-and-animation/how-to-use-icons"}},d={},r=[{value:"\u6dfb\u52a0\u83dc\u5355\u9879\u56fe\u6807",id:"\u6dfb\u52a0\u83dc\u5355\u9879\u56fe\u6807",level:2}];function u(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"\u5982\u4f55\u6dfb\u52a0\u83dc\u5355\u56fe\u6807",children:"\u5982\u4f55\u6dfb\u52a0\u83dc\u5355\u56fe\u6807"}),"\n",(0,o.jsx)(e.p,{children:"\u5728 Avalonia \u4e2d\uff0c\u901a\u8fc7\u4e3a\u83dc\u5355\u9879\u6dfb\u52a0\u56fe\u6807\uff0c\u60a8\u53ef\u4ee5\u589e\u5f3a\u5e94\u7528\u7a0b\u5e8f\u7684\u5916\u89c2\u548c\u7528\u6237\u4f53\u9a8c\u3002\u56fe\u6807\u53ef\u4ee5\u4e3a\u83dc\u5355\u9879\u7684\u64cd\u4f5c\u63d0\u4f9b\u89c6\u89c9\u63d0\u793a\uff0c\u4f7f\u7528\u6237\u66f4\u5bb9\u6613\u6d4f\u89c8\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u672c\u6307\u5357\u5c06\u6307\u5bfc\u60a8\u5982\u4f55\u5728 Avalonia \u4e2d\u4e3a\u83dc\u5355\u9879\u6dfb\u52a0\u56fe\u6807\u3002"}),"\n",(0,o.jsx)(e.h2,{id:"\u6dfb\u52a0\u83dc\u5355\u9879\u56fe\u6807",children:"\u6dfb\u52a0\u83dc\u5355\u9879\u56fe\u6807"}),"\n",(0,o.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,o.jsx)(e.code,{children:"MenuItem.Icon"})," \u5c5e\u6027\u53ef\u4ee5\u4e3a\u83dc\u5355\u9879\u8bbe\u7f6e\u56fe\u6807\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u5404\u79cd\u7c7b\u578b\u7684\u56fe\u50cf\u6e90\u4f5c\u4e3a\u56fe\u6807\uff0c\u5305\u62ec\u8d44\u6e90 URI\u3001\u6587\u4ef6\u8def\u5f84\u6216 web URL\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u5c06\u56fe\u6807\u6dfb\u52a0\u5230\u83dc\u5355\u9879\u7684\u793a\u4f8b\uff1a"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-xml",children:'<Menu>\n  <MenuItem Header="File">\n    <MenuItem Header="Open" Command="{Binding OpenCommand}">\n      <MenuItem.Icon>\n        <Image Width="16" Height="16" Source="avares://MyApp/Assets/open_icon.png" />\n      </MenuItem.Icon>\n    </MenuItem>\n  </MenuItem>\n</Menu>\n'})}),"\n",(0,o.jsxs)(e.p,{children:["\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c",(0,o.jsx)(e.code,{children:"MenuItem.Icon"})," \u5c5e\u6027\u88ab\u8bbe\u7f6e\u4e3a\u4e00\u4e2a ",(0,o.jsx)(e.code,{children:"Image"})," \u63a7\u4ef6\uff0c\u7528\u4e8e\u663e\u793a\u6765\u81ea\u5e94\u7528\u7a0b\u5e8f\u8d44\u6e90\u7684\u56fe\u50cf\u3002",(0,o.jsx)(e.code,{children:"Image"})," \u63a7\u4ef6\u7684 ",(0,o.jsx)(e.code,{children:"Source"})," \u5c5e\u6027\u88ab\u8bbe\u7f6e\u4e3a\u8868\u793a\u56fe\u50cf\u6e90\u7684\u8d44\u6e90 URI\u3002",(0,o.jsx)(e.code,{children:"Width"})," \u548c ",(0,o.jsx)(e.code,{children:"Height"})," \u5c5e\u6027\u7528\u4e8e\u63a7\u5236\u56fe\u50cf\u7684\u5927\u5c0f\u3002"]})]})}function l(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}},11151:(n,e,a)=>{a.d(e,{Z:()=>c,a:()=>s});var o=a(67294);const i={},t=o.createContext(i);function s(n){const e=o.useContext(t);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),o.createElement(t.Provider,{value:e},n.children)}}}]);