"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[13885],{77019:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var t=o(85893),i=o(11151);const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT8AAAFBBAMAAADzoLUpAAAAElBMVEX///8AAP//AAAAgACAgID/0oCecbqiAAAA7UlEQVR42u3OMQ0AIAwAMCxgAQtYwAL+rRAk7IFlaRW0NQDyGykJCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKVgz2sBW2wwQFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFr/mAoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgYMUgAPDNAYMC1mwZJYQwAAAAAElFTkSuQmCC",c={description:"REFERENCE - Built-in Controls"},r="Dock Panel",a={id:"reference/controls/dockpanel",title:"Dock Panel",description:"REFERENCE - Built-in Controls",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/controls/dockpanel.md",sourceDirName:"reference/controls",slug:"/reference/controls/dockpanel",permalink:"/avalonia-docs/zh-Hans/docs/reference/controls/dockpanel",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/controls/dockpanel.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Controls"},sidebar:"documentationSidebar",previous:{title:"Wrap Panel",permalink:"/avalonia-docs/zh-Hans/docs/reference/controls/detailed-reference/wrappanel"},next:{title:"Expander",permalink:"/avalonia-docs/zh-Hans/docs/reference/controls/expander"}},s={},d=[{value:"Useful Properties",id:"useful-properties",level:2},{value:"Example",id:"example",level:2},{value:"More Information",id:"more-information",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"dock-panel",children:"Dock Panel"}),"\n",(0,t.jsx)(n.p,{children:"The dock panel control arranges its child controls along specified 'docking edges' (top, bottom, left, and right) with the last child filling any remaining space. The dock panel can maintain the child control's dimension that is parallel to the docking edge, so that the child fills all the available space along the docking edge."}),"\n",(0,t.jsx)(n.p,{children:"For example, if the docking edge on a child control is defined as 'top' and it has a height defined, but no width, it will draw like this:"}),"\n",(0,t.jsx)("img",{src:"/img/gitbook-import/assets/image (23).png",alt:""}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"You must define the child control dimension perpendicular to the docking edge, or it will not show."})}),"\n",(0,t.jsx)(n.p,{children:"You can optionally define the dimension that is parallel to the docking edge. In this case, the child will be drawn according to the alignment setting in the same direction. For example, a child with a defined width, docked to the top edge, will obey its horizontal alignment property (default center)."}),"\n",(0,t.jsxs)(n.p,{children:["Child controls are docked in the sequence that they are defined in the XAML. When ",(0,t.jsx)(n.em,{children:"Avalonia UI"})," is sizing a child control, the presence of any previously drawn controls is taken into account. That means there is never any overlap."]}),"\n",(0,t.jsx)(n.p,{children:"The last child control defined will fill any remaining space."}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"You must always define a last child control (with no dock property), or the docking calculation will not perform correctly. This means that a dock panel requires a minimum of two child controls."})}),"\n",(0,t.jsx)(n.h2,{id:"useful-properties",children:"Useful Properties"}),"\n",(0,t.jsx)(n.p,{children:"You will probably use these properties most often:"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{width:"266",children:"Property"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:["DockPanel.Dock",(0,t.jsx)("code",{children:".Left"})]}),(0,t.jsx)("td",{children:"Attached to a child control - dock this to the left side."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:["DockPanel.Dock",(0,t.jsx)("code",{children:".Top"})]}),(0,t.jsx)("td",{children:"Attached to a child control - dock this to the top edge."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:["DockPanel.Dock",(0,t.jsx)("code",{children:".Right"})]}),(0,t.jsx)("td",{children:"Attached to a child control - dock this to the right side."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:["DockPanel.Dock",(0,t.jsx)("code",{children:".Bottom"})]}),(0,t.jsx)("td",{children:"Attached to a child control - dock this to the bottom edge."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Setting the opacity of the orange rectangle to 0.5 demonstrates that there are no overlaps."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markup",children:'<DockPanel Width="300" Height="300">\n    <Rectangle Fill="Red" Height="100" DockPanel.Dock="Top"/>\n    <Rectangle Fill="Blue" Width="100" DockPanel.Dock="Left" />\n    <Rectangle Fill="Green" Height="100" DockPanel.Dock="Bottom"/>\n    <Rectangle Fill="Orange" Width="100" DockPanel.Dock="Right" Opacity="0.5"/>\n    <Rectangle Fill="Gray" />\n</DockPanel>\n'})}),"\n",(0,t.jsx)("img",{src:l,alt:""}),"\n",(0,t.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["For the complete API documentation about this control, see ",(0,t.jsx)(n.a,{href:"http://reference.avaloniaui.net/api/Avalonia.Controls/DockPanel/",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["View the source code on ",(0,t.jsx)(n.em,{children:"GitHub"})," ",(0,t.jsx)(n.a,{href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/DockPanel.cs",children:(0,t.jsx)(n.code,{children:"DockPanel.cs"})})]})})]})}function g(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>c});var t=o(67294);const i={},l=t.createContext(i);function c(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);