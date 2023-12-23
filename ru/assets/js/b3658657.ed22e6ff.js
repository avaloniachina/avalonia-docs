"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[52358],{5621:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=t(85893),r=t(11151);const o={description:"REFERENCE - Built-in Controls"},a="Native Menu",s={id:"reference/controls/nativemenu",title:"Native Menu",description:"REFERENCE - Built-in Controls",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/reference/controls/nativemenu.md",sourceDirName:"reference/controls",slug:"/reference/controls/nativemenu",permalink:"/avalonia-docs/ru/docs/reference/controls/nativemenu",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/ru/docusaurus-plugin-content-docs/current/reference/controls/nativemenu.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Controls"},sidebar:"documentationSidebar",previous:{title:"Menu",permalink:"/avalonia-docs/ru/docs/reference/controls/menu"},next:{title:"Numeric Up-Down",permalink:"/avalonia-docs/ru/docs/reference/controls/numericupdown"}},c={},l=[{value:"Useful Properties",id:"useful-properties",level:2},{value:"Example",id:"example",level:2},{value:"More Information",id:"more-information",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"native-menu",children:"Native Menu"}),"\n",(0,i.jsxs)(n.p,{children:["The native menu can display a menu on ",(0,i.jsx)(n.em,{children:"macOS"})," and some Linux distributions."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["This control can only be used attached to a tray icon. For full details about the tray icon, see the reference ",(0,i.jsx)(n.a,{href:"/avalonia-docs/ru/docs/reference/controls/detailed-reference/tray-icon",children:"here"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["You can create sub-menus by nesting ",(0,i.jsx)(n.code,{children:"<MenuItem>"})," elements."]}),"\n",(0,i.jsxs)(n.p,{children:["You can add menu separator lines by including a ",(0,i.jsx)(n.code,{children:"<NativeMenuItemSeparator>"})," element or by adding a menu item with its header set to the minus sign, like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<NativeMenuItemSeparator Header="-" />\n'})}),"\n",(0,i.jsx)(n.h2,{id:"useful-properties",children:"Useful Properties"}),"\n",(0,i.jsx)(n.p,{children:"You will probably use these properties most often:"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{width:"204",children:"Property"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"Header"})}),(0,i.jsx)("td",{children:"The menu caption."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"Command"})}),(0,i.jsx)("td",{children:"A command to execute when the user clicks the menu item."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"This example defines a native menu that can be attached to a tray icon:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<NativeMenu>\n  <NativeMenuItem Header="Settings">\n    <NativeMenu>\n      <NativeMenuItem Header="Option 1"   />\n      <NativeMenuItem Header="Option 2"   />\n      <NativeMenuItemSeparator />\n      <NativeMenuItem Header="Option 3"  />\n    </NativeMenu>\n  </NativeMenuItem>\n</NativeMenu>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["For the complete API documentation about this control, see ",(0,i.jsx)(n.a,{href:"http://reference.avaloniaui.net/api/Avalonia.Controls/NativeMenu/",children:"here"}),"."]})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["View the source code on GitHub ",(0,i.jsx)(n.a,{href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/NativeMenu.cs",children:"NativeMenu.cs"})]})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var i=t(67294);const r={},o=i.createContext(r);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);