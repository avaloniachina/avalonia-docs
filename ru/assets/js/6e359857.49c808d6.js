"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[51327],{67748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>x,default:()=>u,frontMatter:()=>h,metadata:()=>j,toc:()=>p});var i=n(85893),s=n(11151);const r=n.p+"assets/images/scale-uniform-both-c1f520bb5cf7149ba9ea8b7337cacd7d.gif",c=n.p+"assets/images/scale-uniformtofill-both-04c50c76c30f50de10048164245ca3b7.gif",o=n.p+"assets/images/scale-fill-both-623c913d4ef2ad83ca33413baffe240a.gif",l=n.p+"assets/images/scale-none-both-3614b534e6b3dee855a3ce51e7e856b1.gif",d=n.p+"assets/images/scale-uniform-downonly-02e2c906172c31e96650bd1780051a44.gif",a=n.p+"assets/images/scale-uniform-uponly-6d5bada65810ad3dd6468e82a21806c6.gif",h={description:"REFERENCE - Built-in Controls"},x="Viewbox",j={id:"reference/controls/detailed-reference/viewbox",title:"Viewbox",description:"REFERENCE - Built-in Controls",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/reference/controls/detailed-reference/viewbox.md",sourceDirName:"reference/controls/detailed-reference",slug:"/reference/controls/detailed-reference/viewbox",permalink:"/avalonia-docs/ru/docs/reference/controls/detailed-reference/viewbox",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/ru/docusaurus-plugin-content-docs/current/reference/controls/detailed-reference/viewbox.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Controls"},sidebar:"documentationSidebar",previous:{title:"Uniform Grid",permalink:"/avalonia-docs/ru/docs/reference/controls/detailed-reference/uniform-grid"},next:{title:"Wrap Panel",permalink:"/avalonia-docs/ru/docs/reference/controls/detailed-reference/wrappanel"}},f={},p=[{value:"Useful Properties",id:"useful-properties",level:2},{value:"Example",id:"example",level:3},{value:"Demonstrations",id:"demonstrations",level:3},{value:"More Information",id:"more-information",level:2}];function m(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"viewbox",children:"Viewbox"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"Viewbox"})," is a container control which can scale its contents. The way in which the contents are stretched can be defined, as well as when the stretch will occur (stretch direction)."]}),"\n",(0,i.jsx)(t.h2,{id:"useful-properties",children:"Useful Properties"}),"\n",(0,i.jsx)(t.p,{children:"You will probably use these properties most often:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Stretch"})}),(0,i.jsx)(t.td,{children:"Uniform"}),(0,i.jsx)(t.td,{children:"Determines how contents are fitted into the available space."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"StretchDirection"})}),(0,i.jsx)(t.td,{children:"Both"}),(0,i.jsx)(t.td,{children:"Determines when the scaling occurs."})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["The values for the ",(0,i.jsx)(t.code,{children:"Stretch"})," property are as follows:"]}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{width:"250",children:"Stretch"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"Uniform"})}),(0,i.jsx)("td",{children:"(Default) The content is resized to fit in the container's dimensions while preserving its native aspect ratio."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"Fill"})}),(0,i.jsx)("td",{children:"The content is resized to fill the container's dimensions. The aspect ratio is not preserved."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"UniformToFill"})}),(0,i.jsx)("td",{children:"The content is resized to completely fill the container while preserving its native aspect ratio. However, a portion of the content may be hidden if the aspect ratio of the content does not match the aspect ratio of the allocated space."})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["The values for the ",(0,i.jsx)(t.code,{children:"StretchDirecton"})," property are as follows:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Stretch Directon"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"UpOnly"})}),(0,i.jsx)(t.td,{children:"Only scales the content up when the content is smaller than the available space. If the content is larger, no scaling down is done."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"DownOnly"})}),(0,i.jsx)(t.td,{children:"Only scales the content down when the content is larger than the available space. If the content is smaller, no scaling up is done."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Both"})}),(0,i.jsx)(t.td,{children:"(Default) Always stretches to fit the available space according to the stretch mode."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.p,{children:["This simple example shows a ",(0,i.jsx)(t.code,{children:"Viewbox"})," scaling up a circle uniformly (both stretch and direction are default)."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-markup",children:'<Viewbox Stretch="Uniform" Width="300" Height="300">\n   <Ellipse Width="50" Height="50" Fill="CornflowerBlue" />  \n</Viewbox>\n'})}),"\n",(0,i.jsx)(t.h3,{id:"demonstrations",children:"Demonstrations"}),"\n",(0,i.jsx)(t.p,{children:"The following demonstrations show the different combinations of stretch and stretch direction property settings. This first set shows the effect of the stretch property:"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{width:"275",children:"Stretch Value"}),(0,i.jsx)("th",{children:"Demonstration"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"Uniform"})}),(0,i.jsx)("td",{children:(0,i.jsx)("img",{src:r,alt:"","data-size":"original"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"UniformToFill"})}),(0,i.jsx)("td",{children:(0,i.jsx)("img",{src:c,alt:"","data-size":"original"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"Fill"})}),(0,i.jsx)("td",{children:(0,i.jsx)("img",{src:o,alt:"","data-size":"original"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"None"})}),(0,i.jsx)("td",{children:(0,i.jsx)("img",{src:l,alt:"","data-size":"original"})})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"This set of demonstrations shows the effect of the stretch direction property:"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{width:"276",children:"Stretch Direction"}),(0,i.jsx)("th",{children:"Demonstration"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"UpOnly"})}),(0,i.jsx)("td",{children:(0,i.jsx)("img",{src:a,alt:""})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"DownOnly"})}),(0,i.jsx)("td",{children:(0,i.jsx)("img",{src:d,alt:""})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"more-information",children:"More Information"}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["For the complete API documentation about this control, see ",(0,i.jsx)(t.a,{href:"http://reference.avaloniaui.net/api/Avalonia.Controls/Viewbox/",children:"here"}),"."]})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["View the source code on ",(0,i.jsx)(t.em,{children:"GitHub"})," ",(0,i.jsx)(t.a,{href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/Viewbox.cs",children:(0,i.jsx)(t.code,{children:"Viewbox.cs"})})]})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>c});var i=n(67294);const s={},r=i.createContext(s);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);