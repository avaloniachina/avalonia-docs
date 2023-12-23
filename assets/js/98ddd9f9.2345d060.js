"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[22978],{36332:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=o(85893),i=o(11151);const t=o.p+"assets/images/scrollview-466e1b3181a9d81eda8cfabc5c8fc8ec.gif",l={description:"REFERENCE - Built-in Controls"},c="Scroll Viewer",s={id:"reference/controls/scrollviewer",title:"Scroll Viewer",description:"REFERENCE - Built-in Controls",source:"@site/docs/reference/controls/scrollviewer.md",sourceDirName:"reference/controls",slug:"/reference/controls/scrollviewer",permalink:"/avalonia-docs/docs/reference/controls/scrollviewer",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/reference/controls/scrollviewer.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Controls"},sidebar:"documentationSidebar",previous:{title:"Scroll Bar",permalink:"/avalonia-docs/docs/reference/controls/scrollbar"},next:{title:"Separator",permalink:"/avalonia-docs/docs/reference/controls/separator"}},a={},d=[{value:"Useful Properties",id:"useful-properties",level:2},{value:"Scroll Chaining",id:"scroll-chaining",level:2},{value:"Example",id:"example",level:2},{value:"More Information",id:"more-information",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"scroll-viewer",children:"Scroll Viewer"}),"\n",(0,r.jsx)(n.p,{children:"The scroll viewer control can have content that is bigger than its content zone, and will can provide scroll bars to move hidden content into view."}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"ScrollViewer"})," cannot be contained in a control that has infinite height or width (depending on scrolling direction) such as a ",(0,r.jsx)(n.code,{children:"StackPanel"}),". To avoid it, you can either set fixed Height/Width or MaxHeight/MaxWidth or choose another container panel."]}),"\n",(0,r.jsx)(n.h2,{id:"useful-properties",children:"Useful Properties"}),"\n",(0,r.jsx)(n.p,{children:"You will probably use these properties most often:"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{width:"288",children:"Property"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"AllowAutoHide"})}),(0,r.jsx)("td",{children:"Boolean, default is true. Sets whether the scroll bar hides itself automatically when the pointer is not over, or it does not have the focus. "})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"ScrollViewer"}),". ",(0,r.jsx)("code",{children:"IsScrollChainingEnabled"})]}),(0,r.jsx)("td",{children:"Boolean, default is true. Attached to an inner controlSee below for more details. "})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"scroll-chaining",children:"Scroll Chaining"}),"\n",(0,r.jsx)(n.p,{children:"If you have a control that can itself scroll (see list below) nested inside a scroll viewer, and the user hits a limit on the control, this property sets whether the outer scroll viewer should continue scrolling or not. You enable or disable this behaviour with an attached property on the inner control, using the format:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"ScrollViewer.IsScrollChainingEnabled=[true|false]"})}),"\n",(0,r.jsx)(n.p,{children:"This attached property is available on these controls:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Scroll Viewer"}),"\n",(0,r.jsx)(n.li,{children:"Data Grid"}),"\n",(0,r.jsx)(n.li,{children:"List Box"}),"\n",(0,r.jsx)(n.li,{children:"Text Box"}),"\n",(0,r.jsx)(n.li,{children:"Tree View"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"This example creates a stack panel that is bigger than the border it is inside. The scroll viewer automatically creates a vertical scroll bar."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<Border Background="AliceBlue" Width="300" Height="300">\n  <ScrollViewer>\n    <StackPanel>\n      <TextBlock FontSize="22" Height="100" Background="LightBlue">Block 1</TextBlock>\n      <TextBlock FontSize="22" Height="100">Block 2</TextBlock>\n      <TextBlock FontSize="22" Height="100" Background="LightBlue">Block 3</TextBlock>\n      <TextBlock FontSize="22" Height="100">Block 4</TextBlock>\n      <TextBlock FontSize="22" Height="100" Background="LightBlue">Block 5</TextBlock>\n    </StackPanel>\n  </ScrollViewer>\n</Border>\n'})}),"\n",(0,r.jsx)("img",{src:t,alt:""}),"\n",(0,r.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["For the complete API documentation, see ",(0,r.jsx)(n.a,{href:"http://reference.avaloniaui.net/api/Avalonia.Controls/ScrollViewer/",children:"here"}),"."]})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["View the source code on ",(0,r.jsx)(n.em,{children:"GitHub"})," ",(0,r.jsx)(n.a,{href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/ScrollViewer.cs",children:(0,r.jsx)(n.code,{children:"ScrollViewer.cs"})})]})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>l});var r=o(67294);const i={},t=r.createContext(i);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);