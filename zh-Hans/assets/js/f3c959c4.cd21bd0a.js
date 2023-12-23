"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[28576],{82473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>v,frontMatter:()=>x,metadata:()=>f,toc:()=>j});var s=n(85893),l=n(11151),r=n(73992),i=n(18679);const a=n.p+"assets/images/scale-uniform-both-c1f520bb5cf7149ba9ea8b7337cacd7d.gif",c=n.p+"assets/images/scale-uniformtofill-both-04c50c76c30f50de10048164245ca3b7.gif",o=n.p+"assets/images/scale-fill-both-623c913d4ef2ad83ca33413baffe240a.gif",d=n.p+"assets/images/scale-none-both-3614b534e6b3dee855a3ce51e7e856b1.gif",u=n.p+"assets/images/scale-uniform-uponly-6d5bada65810ad3dd6468e82a21806c6.gif",h=n.p+"assets/images/scale-uniform-downonly-02e2c906172c31e96650bd1780051a44.gif",x={id:"viewbox",title:"Viewbox"},p=void 0,f={id:"controls/viewbox",title:"Viewbox",description:"The Viewbox is a decorator control which scales its child. It can be used to scale its child to fit the available space.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/controls/viewbox.md",sourceDirName:"controls",slug:"/controls/viewbox",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/controls/viewbox",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/controls/viewbox.md",tags:[],version:"0.10.x",frontMatter:{id:"viewbox",title:"Viewbox"},sidebar:"documentationSidebar",previous:{title:"UserControl",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/controls/usercontrol"},next:{title:"Window",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/controls/window"}},b={},j=[{value:"Common Properties",id:"common-properties",level:3},{value:"Examples",id:"examples",level:3},{value:"Pseudoclasses",id:"pseudoclasses",level:3},{value:"Reference",id:"reference",level:3},{value:"Source code",id:"source-code",level:3}];function m(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"Viewbox"})," is a decorator control which scales its child. It can be used to scale its child to fit the available space."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"Viewbox"})," gives its child infinite space in the measure phase. It will constrain either or both sides when arranging it. This depends on the value of the ",(0,s.jsx)(t.code,{children:"Stretch"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["To restrict scaling direction one can use ",(0,s.jsx)(t.code,{children:"StretchDirection"})," which can prevent up or down scaling."]}),"\n",(0,s.jsxs)(r.Z,{defaultValue:"xaml",values:[{label:"XAML",value:"xaml"},{label:"C#",value:"cs"}],children:[(0,s.jsx)(i.Z,{value:"xaml",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'\x3c!-- Ellipse will occupy 50x50px space --\x3e\n<Ellipse Width="50" Height="50" Fill="CornflowerBlue" />  \n\n\x3c!-- Ellipse will be scaled to occupy 300x300px space --\x3e\n<Viewbox Stretch="Uniform" Width="300" Height="300">\n\t<Ellipse Width="50" Height="50" Fill="CornflowerBlue" />  \n</Viewbox>\n'})})}),(0,s.jsx)(i.Z,{value:"cs",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cs",children:"// Ellipse will occupy 50x50px space\nnew Ellipse\n{\n\tWidth = 50,\n\tHeight = 50,\n\tFill = Brushes.CornflowerBlue\n};\n\n// Ellipse will be scaled to occupy 300x300px space\nnew Viewbox\n{\n\tStretch = Stretch.Uniform,\n\tWidth = 300,\n\tHeight = 300,\n\tChild = new Ellipse\n\t{\n\t\tWidth = 50,\n\t\tHeight = 50,\n\t\tFill = Brushes.CornflowerBlue\n\t}\n};\n"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"common-properties",children:"Common Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Default"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"Stretch"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"http://reference.avaloniaui.net/api/Avalonia.Media/Stretch",children:"Stretch"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Uniform"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Determines how child fits into the available space"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"StretchDirection"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"http://reference.avaloniaui.net/api/Avalonia.Media/StretchDirection",children:"StretchDirection"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Both"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Determines in what direction child will be scaled"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)("code",{children:"Stretch"})}),(0,s.jsx)("th",{})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"Uniform"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{}),(0,s.jsx)("p",{children:(0,s.jsx)("img",{src:a,alt:""})})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"UniformToFill"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{}),(0,s.jsx)("p",{children:(0,s.jsx)("img",{src:c,alt:""})})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"Fill"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{}),(0,s.jsx)("p",{children:(0,s.jsx)("img",{src:o,alt:""})})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"None"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{}),(0,s.jsx)("p",{children:(0,s.jsx)("img",{src:d,alt:""})})]})]})]})]}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)("code",{children:"StretchDirection"})}),(0,s.jsx)("th",{})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"Both"})}),(0,s.jsx)("td",{children:(0,s.jsx)("img",{src:a,alt:""})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"UpOnly"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{}),(0,s.jsx)("p",{children:(0,s.jsx)("img",{src:u,alt:""})})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"DownOnly"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{}),(0,s.jsx)("p",{children:(0,s.jsx)("img",{src:h,alt:""})})]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"pseudoclasses",children:"Pseudoclasses"}),"\n",(0,s.jsx)(t.p,{children:"None"}),"\n",(0,s.jsx)(t.h3,{id:"reference",children:"Reference"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"http://reference.avaloniaui.net/api/Avalonia.Controls/Viewbox/",children:"Viewbox"})}),"\n",(0,s.jsx)(t.h3,{id:"source-code",children:"Source code"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/Viewbox.cs",children:"Viewbox.cs"})})]})}function v(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},18679:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var s=n(90512);const l={tabItem:"tabItem_Ymn6"};var r=n(85893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(l.tabItem,i),hidden:n,children:t})}},73992:(e,t,n)=>{n.d(t,{Z:()=>y});var s=n(67294),l=n(90512),r=n(72957),i=n(16550),a=n(81270),c=n(75238),o=n(33609),d=n(92560);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:l}}=e;return{value:t,label:n,attributes:s,default:l}}))}(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const l=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(l.location.search);t.set(r,e),l.replace({...l.location,search:t.toString()})}),[r,l])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,r=h(e),[i,c]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[o,u]=p({queryString:n,groupId:l}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,r]=(0,d.Nk)(n);return[l,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:l}),j=(()=>{const e=o??f;return x({value:e,tabValues:r})?e:null})();(0,a.Z)((()=>{j&&c(j)}),[j]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var b=n(51048);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(85893);function v(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),l=a[n].value;l!==s&&(o(t),i(l))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...r,className:(0,l.Z)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:l}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===l));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function w(e){const t=f(e);return(0,m.jsxs)("div",{className:(0,l.Z)("tabs-container",j.tabList),children:[(0,m.jsx)(v,{...e,...t}),(0,m.jsx)(g,{...e,...t})]})}function y(e){const t=(0,b.Z)();return(0,m.jsx)(w,{...e,children:u(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var s=n(67294);const l={},r=s.createContext(l);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);