"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[1800],{9599:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var c=s(85893),a=s(11151);const o={id:"focus-manager",title:"Focus Manager"},r=void 0,l={id:"concepts/services/focus-manager",title:"Focus Manager",description:"FocusManager\u670d\u52a1\u8d1f\u8d23\u7ba1\u7406\u5e94\u7528\u7a0b\u5e8f\u7684\u952e\u76d8\u7126\u70b9\u3002\u5b83\u4f1a\u8ddf\u8e2a\u5f53\u524d\u805a\u7126\u7684\u5143\u7d20\u548c\u5f53\u524d\u7126\u70b9\u8303\u56f4\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/concepts/services/focus-manager.md",sourceDirName:"concepts/services",slug:"/concepts/services/focus-manager",permalink:"/avalonia-docs/zh-Hans/docs/concepts/services/focus-manager",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/current/concepts/services/focus-manager.md",tags:[],version:"current",frontMatter:{id:"focus-manager",title:"Focus Manager"},sidebar:"documentationSidebar",previous:{title:"Clipboard",permalink:"/avalonia-docs/zh-Hans/docs/concepts/services/clipboard"},next:{title:"Insets Manager",permalink:"/avalonia-docs/zh-Hans/docs/concepts/services/insets-manager"}},t={},d=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"GetFocusedElement()",id:"getfocusedelement",level:3},{value:"ClearFocus()",id:"clearfocus",level:3},{value:"\u63d0\u793a",id:"\u63d0\u793a",level:2},{value:"\u805a\u7126\u63a7\u4ef6",id:"\u805a\u7126\u63a7\u4ef6",level:3},{value:"\u76d1\u542c\u5168\u5c40\u7126\u70b9\u53d8\u5316",id:"\u76d1\u542c\u5168\u5c40\u7126\u70b9\u53d8\u5316",level:3}];function i(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"FocusManager"}),"\u670d\u52a1\u8d1f\u8d23\u7ba1\u7406\u5e94\u7528\u7a0b\u5e8f\u7684\u952e\u76d8\u7126\u70b9\u3002\u5b83\u4f1a\u8ddf\u8e2a\u5f53\u524d\u805a\u7126\u7684\u5143\u7d20\u548c\u5f53\u524d\u7126\u70b9\u8303\u56f4\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u901a\u8fc7",(0,c.jsx)(n.code,{children:"TopLevel"}),"\u6216",(0,c.jsx)(n.code,{children:"Window"}),"\u7684\u5b9e\u4f8b\u53ef\u4ee5\u8bbf\u95ee",(0,c.jsx)(n.code,{children:"FocusManager"}),"\uff0c\u6709\u5173\u8bbf\u95ee",(0,c.jsx)(n.code,{children:"TopLevel"}),"\u7684\u66f4\u591a\u7ec6\u8282\uff0c\u8bf7\u8bbf\u95ee",(0,c.jsx)(n.a,{href:"../toplevel",children:"TopLevel"}),"\u9875\u9762\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-cs",children:"var focusManager = window.FocusManager;\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,c.jsx)(n.h3,{id:"getfocusedelement",children:"GetFocusedElement()"}),"\n",(0,c.jsx)(n.p,{children:"\u8fd4\u56de\u5f53\u524d\u805a\u7126\u7684\u5143\u7d20\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-cs",children:"IInputElement? GetFocusedElement()\n"})}),"\n",(0,c.jsx)(n.h3,{id:"clearfocus",children:"ClearFocus()"}),"\n",(0,c.jsx)(n.p,{children:"\u6e05\u9664\u5f53\u524d\u805a\u7126\u7684\u5143\u7d20\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-cs",children:"void ClearFocus()\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u63d0\u793a",children:"\u63d0\u793a"}),"\n",(0,c.jsx)(n.h3,{id:"\u805a\u7126\u63a7\u4ef6",children:"\u805a\u7126\u63a7\u4ef6"}),"\n",(0,c.jsxs)(n.p,{children:["\u901a\u5e38\u5f00\u53d1\u4eba\u5458\u4e0d\u9700\u8981\u4f7f\u7528",(0,c.jsx)(n.code,{children:"FocusManager"}),"\u670d\u52a1\u6765\u805a\u7126\u63a7\u4ef6\u3002\n\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u8c03\u7528\u63a7\u4ef6\u7684\u65b9\u6cd5\u5b9e\u73b0\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-cs",children:"var hasFocused = button.Focus();\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u63a7\u4ef6\u4e0d\u53ef\u89c1\u5e76\u4e14",(0,c.jsx)(n.code,{children:"Focusable"}),"\u5c5e\u6027\u8bbe\u7f6e\u4e3afalse\uff0c",(0,c.jsx)(n.code,{children:"Focus"}),"\u65b9\u6cd5\u53ef\u80fd\u8fd4\u56de",(0,c.jsx)(n.code,{children:"false"}),"\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u76d1\u542c\u5168\u5c40\u7126\u70b9\u53d8\u5316",children:"\u76d1\u542c\u5168\u5c40\u7126\u70b9\u53d8\u5316"}),"\n",(0,c.jsxs)(n.p,{children:["\u867d\u7136",(0,c.jsx)(n.code,{children:"FocusManager.GetFocusedElement"}),"\u65b9\u6cd5\u5141\u8bb8\u83b7\u53d6\u5f53\u524d\u805a\u7126\u7684\u63a7\u4ef6\uff0c\u4f46\u5b83\u4e0d\u9002\u5408\u4f5c\u4e3a\u4e8b\u4ef6\u4f7f\u7528\u3002\n\u76f8\u53cd\uff0c\u8bf7\u4f7f\u7528",(0,c.jsx)(n.code,{children:"InputElement.GotFocusEvent.Raised.Subscribe(handler)"}),"\u65b9\u6cd5\u3002\u6ce8\u610f\uff0c\u5b83\u4f1a\u5728\u6240\u6709\u9876\u7ea7\u7a97\u53e3\u4e2d\u5168\u5c40\u76d1\u542c\u4e8b\u4ef6\u3002"]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(i,{...e})}):i(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var c=s(67294);const a={},o=c.createContext(a);function r(e){const n=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),c.createElement(o.Provider,{value:n},e.children)}}}]);