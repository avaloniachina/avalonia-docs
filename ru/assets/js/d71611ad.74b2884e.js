"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[73732],{99214:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=r(85893),t=r(11151);const o=r.p+"assets/images/gridsplitter-in-action-columns-6c594012f72fc6391128f45d0cb89007.gif",s=r.p+"assets/images/gridsplitter-in-action-rows-d3093bdc9893ace10edd61fe7adab441.gif",l={description:"REFERENCE - Built-in Controls"},c="Grid Splitter",d={id:"reference/controls/gridsplitter",title:"Grid Splitter",description:"REFERENCE - Built-in Controls",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/reference/controls/gridsplitter.md",sourceDirName:"reference/controls",slug:"/reference/controls/gridsplitter",permalink:"/avalonia-docs/ru/docs/reference/controls/gridsplitter",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/ru/docusaurus-plugin-content-docs/current/reference/controls/gridsplitter.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Controls"},sidebar:"documentationSidebar",previous:{title:"Grid",permalink:"/avalonia-docs/ru/docs/reference/controls/grid"},next:{title:"Image Controls",permalink:"/avalonia-docs/ru/docs/reference/controls/image-controls"}},a={},p=[{value:"Useful Properties",id:"useful-properties",level:2},{value:"Examples",id:"examples",level:2},{value:"More Information",id:"more-information",level:2}];function h(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"grid-splitter",children:"Grid Splitter"}),"\n",(0,n.jsx)(i.p,{children:"The grid splitter control allows a user to resize the columns or rows in a grid at runtime. The splitter is drawn as a column or row (size can be specified), and has a grip that the user can manipulate at runtime."}),"\n",(0,n.jsx)(i.h2,{id:"useful-properties",children:"Useful Properties"}),"\n",(0,n.jsx)(i.p,{children:"You will probably use these properties most often:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{width:"261",children:"Property"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"Background"})}),(0,n.jsx)("td",{children:"Background color for the splitter bar."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"Grid.Column"})}),(0,n.jsx)("td",{children:"Attached to give the (column) position of the splitter."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"Grid.Row"})}),(0,n.jsx)("td",{children:"Attached to give the (row) position of the splitter."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"ResizeDirection"})}),(0,n.jsx)("td",{children:"The direction of travel for the splitter. (See note below.)"})]})]})]}),"\n",(0,n.jsx)(i.admonition,{type:"warning",children:(0,n.jsxs)(i.p,{children:["To provide any meaningful movement, the direction of travel of the splitter must be the same as its position definition. That is: for a column splitter specify ",(0,n.jsx)(i.code,{children:'ResizeDirection="Columns"'})," and for a row splitter specify ",(0,n.jsx)(i.code,{children:'ResizeDirection="Rows"'}),"."]})}),"\n",(0,n.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(i.p,{children:"This is a column splitter:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-markup",children:'<Grid ColumnDefinitions="*, 4, *">\n    <Rectangle Grid.Column="0" Fill="Blue"/>\n    <GridSplitter Grid.Column="1" Background="Black" ResizeDirection="Columns"/>\n    <Rectangle Grid.Column="2" Fill="Red"/>\n</Grid>\n'})}),"\n",(0,n.jsx)("img",{src:o,alt:""}),"\n",(0,n.jsx)(i.p,{children:"This is a row splitter:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-markup",children:'<Grid RowDefinitions="*, 4, *">\n    <Rectangle Grid.Row="0" Fill="Blue"/>\n    <GridSplitter Grid.Row="1" Background="Black" ResizeDirection="Rows"/>\n    <Rectangle Grid.Row="2" Fill="Red"/>\n</Grid>\n'})}),"\n",(0,n.jsx)("img",{src:s,alt:""}),"\n",(0,n.jsx)(i.h2,{id:"more-information",children:"More Information"}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsxs)(i.p,{children:["For the complete API documentation about this control, see ",(0,n.jsx)(i.a,{href:"http://reference.avaloniaui.net/api/Avalonia.Controls/GridSplitter/",children:"here"}),"."]})}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsxs)(i.p,{children:["View the source code on ",(0,n.jsx)(i.em,{children:"GitHub"})," ",(0,n.jsx)(i.a,{href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/GridSplitter.cs",children:(0,n.jsx)(i.code,{children:"GridSplitter.cs"})})]})})]})}function u(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,i,r)=>{r.d(i,{Z:()=>l,a:()=>s});var n=r(67294);const t={},o=n.createContext(t);function s(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);