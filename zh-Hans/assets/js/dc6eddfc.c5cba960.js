"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[11249],{4215:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=t(85893),l=t(11151);const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAAEaBAMAAAD3YzZeAAAAD1BMVEX///8AgAD/AAAAAP//pQDceCmUAAAAoElEQVR42u3NUQmAMBQAwDkXwDUQEwgrsA/7ZzLBAxk88OOuwJUCAKyqV77T6XQ6nU6n0+l0Op1Op9PpdDqdzuDcR77b6XQ6nU6n0+l0Op1Op9PpdDqdzuDcer7D6XQ6nU6n0+l0Op1Op9PpdDqdTqfT6XQ6nU6n0+l0Op1Op9PpdDp/eLYn33Q6nU6n0+l0Op1Op9PpdDqdTqczOAGA716KN0UrTjzmWgAAAABJRU5ErkJggg==",a={description:"REFERENCE - Built-in Controls"},i="Stack Panel",s={id:"reference/controls/stackpanel",title:"Stack Panel",description:"REFERENCE - Built-in Controls",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/controls/stackpanel.md",sourceDirName:"reference/controls",slug:"/reference/controls/stackpanel",permalink:"/avalonia-docs/zh-Hans/docs/reference/controls/stackpanel",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/controls/stackpanel.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Controls"},sidebar:"documentationSidebar",previous:{title:"Split View",permalink:"/avalonia-docs/zh-Hans/docs/reference/controls/splitview"},next:{title:"Text Controls",permalink:"/avalonia-docs/zh-Hans/docs/reference/controls/text-controls"}},c={},d=[{value:"Useful Properties",id:"useful-properties",level:2},{value:"Example",id:"example",level:2},{value:"More Information",id:"more-information",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"stack-panel",children:"Stack Panel"}),"\n",(0,o.jsx)(n.p,{children:"The stack panel arranges its child controls by stacking them horizontally or vertically. The stack panel is often used to arrange a small subsection of the UI on a page."}),"\n",(0,o.jsx)(n.p,{children:"Inside a stack panel, if the size property perpendicular to the stack on a child control is not set, the child control will stretch to fill the available space. For example in horizontal orientation, the height of child controls will stretch if not set."}),"\n",(0,o.jsx)(n.p,{children:"In the direction of the stack, the stack panel will always expand to fit all the child controls."}),"\n",(0,o.jsx)(n.h2,{id:"useful-properties",children:"Useful Properties"}),"\n",(0,o.jsx)(n.p,{children:"You will probably use these properties most often:"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Property"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Orientation"})}),(0,o.jsx)(n.td,{children:"Sets the direction of the stack. Choose from horizontal or vertical (default)."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Spacing"})}),(0,o.jsx)(n.td,{children:"Creates an even spacing between the child controls."})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.p,{children:"The following XAML shows how to create a vertical stack panel."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-markup",children:'<StackPanel Width="200">\n    <Rectangle Fill="Red" Height="50"/>\n    <Rectangle Fill="Blue" Height="50"/>\n    <Rectangle Fill="Green" Height="100"/>\n    <Rectangle Fill="Orange" Height="50"/>\n</StackPanel>\n'})}),"\n",(0,o.jsx)(n.p,{children:"The result shows the child controls stretched to fit the width, and the overall height of the stack panel equal to the sum of the child control heights."}),"\n",(0,o.jsx)("img",{src:r,alt:""}),"\n",(0,o.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["For the complete API documentation about this control, see ",(0,o.jsx)(n.a,{href:"http://reference.avaloniaui.net/api/Avalonia.Controls/StackPanel/",children:"here"}),"."]})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["View the source code on ",(0,o.jsx)(n.em,{children:"GitHub"})," ",(0,o.jsx)(n.a,{href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/StackPanel.cs",children:(0,o.jsx)(n.code,{children:"StackPanel.cs"})})]})})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var o=t(67294);const l={},r=o.createContext(l);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);