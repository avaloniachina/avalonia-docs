"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[44412],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=c(o),f=r,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||l;return o?n.createElement(m,i(i({ref:t},s),{},{components:o})):n.createElement(m,i({ref:t},s))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,i=new Array(l);i[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[u]="string"==typeof e?e:r,i[1]=a;for(var c=2;c<l;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},25620:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const l={description:"REFERENCE - Built-in Controls"},i="Tool Tip",a={unversionedId:"reference/controls/detailed-reference/tooltip",id:"reference/controls/detailed-reference/tooltip",title:"Tool Tip",description:"REFERENCE - Built-in Controls",source:"@site/docs/reference/controls/detailed-reference/tooltip.md",sourceDirName:"reference/controls/detailed-reference",slug:"/reference/controls/detailed-reference/tooltip",permalink:"/avalonia-docs/docs/next/reference/controls/detailed-reference/tooltip",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/reference/controls/detailed-reference/tooltip.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Controls"},sidebar:"documentationSidebar",previous:{title:"Time Picker",permalink:"/avalonia-docs/docs/next/reference/controls/detailed-reference/timepicker"},next:{title:"Transitioning Content Control",permalink:"/avalonia-docs/docs/next/reference/controls/detailed-reference/transitioningcontentcontrol"}},p={},c=[{value:"Useful Properties",id:"useful-properties",level:2},{value:"Examples",id:"examples",level:2},{value:"More Information",id:"more-information",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tool-tip"},"Tool Tip"),(0,r.kt)("p",null,"The tool tip is a popup that shows its content when the user hovers over the 'host' control to which it is attached."),(0,r.kt)("h2",{id:"useful-properties"},"Useful Properties"),(0,r.kt)("p",null,"You will probably use these properties most often:"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{width:"298"},"Property"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"ToolTip.Tip")),(0,r.kt)("td",null,"Attached property for the the tooltip contents.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"ToolTip.Placement")),(0,r.kt)("td",null,"Defines the placement for the tooltip relative to the host or the pointer. Choose from top, bottom, left, right, anchor and gravity, pointer. The default value is pointer which places the tip content at the position where the pointer stops moving.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"ToolTip.HorizontalOffset")),(0,r.kt)("td",null,"The tooltip horizontal offset from the placement (default 0).")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"ToolTip.VerticalOffset")),(0,r.kt)("td",null,"The tooltip vertical offset from the placement (default 20).")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"ToolTip.ShowDelay")),(0,r.kt)("td",null,"The the amount of time the pointer has to be still before the the tooltip appears. In microseconds (default 400).")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"This is a simple text-based tooltip, using default values for the placement and delay properties; this rectangle is placed in a window with larger dimensions:"," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'<Rectangle Fill="Aqua" Height="200" Width="400"\n            ToolTip.Tip="This is a rectangle" />\n')),(0,r.kt)("img",{src:"/img/gitbook-import/assets/tooltip.gif",alt:""}),(0,r.kt)("p",null,"To provide a richer presentation for a tooltip, use a ",(0,r.kt)("inlineCode",{parentName:"p"},"<ToolTip.Tip>")," element. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'<Rectangle Fill="Aqua" Height="200" Width="400"\n    ToolTip.Placement="Bottom">\n    <ToolTip.Tip >\n      <StackPanel >\n        <TextBlock FontSize="16">Rectangle</TextBlock>\n        <TextBlock>Some explanation here.</TextBlock>\n      </StackPanel>\n    </ToolTip.Tip>\n</Rectangle>\n')),(0,r.kt)("img",{src:"/img/gitbook-import/assets/tooltip2.gif",alt:""}),(0,r.kt)("h2",{id:"more-information"},"More Information"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For the complete API documentation about this control, see ",(0,r.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/ToolTip/"},"here"),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"View the source code on ",(0,r.kt)("em",{parentName:"p"},"GitHub")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/ToolTip.cs"},(0,r.kt)("inlineCode",{parentName:"a"},"ToolTip.cs")))))}d.isMDXComponent=!0}}]);