"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[6961],{83466:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>h});var t=o(85893),i=o(11151);const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUcAAAFJBAMAAAD6bfIoAAAAFVBMVEX///+AgP//AAD/pQCAwICAAH9BgYCJAbJvAAAA/UlEQVR42u3cUREAEAAFQRVUUEEFFVTQP4IMbzDjYy/BJrhSJEmSpON6XIubcZCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkP8h869BjYOEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhPwPOeJWHCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQk5GukJEnSvTa0MwbmVvp57wAAAABJRU5ErkJggg==",a={description:"REFERENCE - Built-in Controls"},l="Panel",s={id:"reference/controls/panel",title:"Panel",description:"REFERENCE - Built-in Controls",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/controls/panel.md",sourceDirName:"reference/controls",slug:"/reference/controls/panel",permalink:"/avalonia-docs/zh-Hans/docs/reference/controls/panel",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/controls/panel.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Controls"},sidebar:"documentationSidebar",previous:{title:"Numeric Up-Down",permalink:"/avalonia-docs/zh-Hans/docs/reference/controls/numericupdown"},next:{title:"Popup Controls",permalink:"/avalonia-docs/zh-Hans/docs/reference/controls/popup-controls"}},c={},h=[{value:"Example",id:"example",level:2},{value:"Other Panel Controls",id:"other-panel-controls",level:2},{value:"More Information",id:"more-information",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"panel",children:"Panel"}),"\n",(0,t.jsx)(n.p,{children:"The panel is the most basic control that can contain multiple child controls. Child controls are drawn according to their horizontal and vertical alignment properties, and in the sequence that they appear in the XAML. Child controls will overlap if they occupy the same space."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["For a discussion about using other panels, see ",(0,t.jsx)(n.a,{href:"/avalonia-docs/zh-Hans/docs/basics/user-interface/building-layouts/panels-overview",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"This example uses some 50% opacities to demonstrate that child controls overlap."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markup",children:'<Panel Height="300" Width="300">\n    <Rectangle Fill="Red" Height="100" VerticalAlignment="Top"/>\n    <Rectangle Fill="Blue" Opacity="0.5" Width="100" HorizontalAlignment="Right" />\n    <Rectangle Fill="Green" Opacity="0.5" Height="100" VerticalAlignment="Bottom"/>\n    <Rectangle Fill="Orange" Width="100" HorizontalAlignment="Left"/>\n</Panel>\n'})}),"\n",(0,t.jsx)("img",{src:r,alt:""}),"\n",(0,t.jsx)(n.h2,{id:"other-panel-controls",children:"Other Panel Controls"}),"\n",(0,t.jsx)(n.p,{children:"There are other more useful panels, that offer better control over the positioning of their child controls:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Stack Panel"}),"\n",(0,t.jsx)(n.li,{children:"Dock Panel"}),"\n",(0,t.jsx)(n.li,{children:"Relative Panel"}),"\n",(0,t.jsx)(n.li,{children:"Wrap Panel"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If you have specific requirements for positioning the child controls in a panel, you can create your own custom control based on the panel."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["For instructions about how to create a custom panel control, see ",(0,t.jsx)(n.a,{href:"/avalonia-docs/zh-Hans/docs/guides/custom-controls/create-a-custom-panel",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["For the complete API documentation about this control see ",(0,t.jsx)(n.a,{href:"http://reference.avaloniaui.net/api/Avalonia.Controls/Panel/",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["View the source code on GitHub ",(0,t.jsx)(n.a,{href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/Panel.cs",children:(0,t.jsx)(n.code,{children:"Panel.cs"})})]})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>a});var t=o(67294);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);