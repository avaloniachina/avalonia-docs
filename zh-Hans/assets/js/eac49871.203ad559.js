"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[43257],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=o,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},59105:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={id:"controls-and-layouts",title:"Controls & Layouts"},i=void 0,l={unversionedId:"getting-started/programming-with-avalonia/controls-and-layouts",id:"version-0.10.x/getting-started/programming-with-avalonia/controls-and-layouts",title:"Controls & Layouts",description:"Controls",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/getting-started/programming-with-avalonia/controls-and-layouts.md",sourceDirName:"getting-started/programming-with-avalonia",slug:"/getting-started/programming-with-avalonia/controls-and-layouts",permalink:"/avalonia-docs/zh-Hans/docs/getting-started/programming-with-avalonia/controls-and-layouts",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/getting-started/programming-with-avalonia/controls-and-layouts.md",tags:[],version:"0.10.x",frontMatter:{id:"controls-and-layouts",title:"Controls & Layouts"},sidebar:"documentationSidebar",previous:{title:"The Model-View-ViewModel Pattern",permalink:"/avalonia-docs/zh-Hans/docs/getting-started/programming-with-avalonia/the-model-view-viewmodel-pattern-mvvm"},next:{title:"Data Binding",permalink:"/avalonia-docs/zh-Hans/docs/getting-started/programming-with-avalonia/data-binding"}},s={},p=[{value:"Controls",id:"controls",level:3},{value:"Input and Commands",id:"input-and-commands",level:2},{value:"Layout",id:"layout",level:3}],c={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"controls"},"Controls"),(0,o.kt)("p",null,"Avalonia provides many core controls. Here are some of the most common:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Buttons: ",(0,o.kt)("a",{parentName:"li",href:"../../controls/buttons/button"},(0,o.kt)("inlineCode",{parentName:"a"},"Button")),", ",(0,o.kt)("a",{parentName:"li",href:"../../controls/buttons/repeatbutton"},(0,o.kt)("inlineCode",{parentName:"a"},"RepeatButton"))),(0,o.kt)("li",{parentName:"ul"},"Data Display: ",(0,o.kt)("a",{parentName:"li",href:"../../controls/itemscontrol"},(0,o.kt)("inlineCode",{parentName:"a"},"ItemsControl")),", ",(0,o.kt)("a",{parentName:"li",href:"../../controls/itemsrepeater"},(0,o.kt)("inlineCode",{parentName:"a"},"ItemsRepeater")),", ",(0,o.kt)("a",{parentName:"li",href:"../../controls/listbox"},(0,o.kt)("inlineCode",{parentName:"a"},"ListBox")),", ",(0,o.kt)("a",{parentName:"li",href:"../../controls/treeview"},(0,o.kt)("inlineCode",{parentName:"a"},"TreeView"))),(0,o.kt)("li",{parentName:"ul"},"Input: ",(0,o.kt)("a",{parentName:"li",href:"../../controls/checkbox"},(0,o.kt)("inlineCode",{parentName:"a"},"CheckBox")),", ",(0,o.kt)("a",{parentName:"li",href:"../../controls/combobox"},(0,o.kt)("inlineCode",{parentName:"a"},"ComboBox")),", ",(0,o.kt)("a",{parentName:"li",href:"../../controls/buttons/radiobutton"},(0,o.kt)("inlineCode",{parentName:"a"},"RadioButton")),", ",(0,o.kt)("a",{parentName:"li",href:"../../controls/slider"},(0,o.kt)("inlineCode",{parentName:"a"},"Slider")),", ",(0,o.kt)("a",{parentName:"li",href:"../../controls/textbox"},(0,o.kt)("inlineCode",{parentName:"a"},"TextBox"))),(0,o.kt)("li",{parentName:"ul"},"Layout: ",(0,o.kt)("a",{parentName:"li",href:"../../controls/border"},(0,o.kt)("inlineCode",{parentName:"a"},"Border")),", ",(0,o.kt)("a",{parentName:"li",href:"../../controls/canvas"},(0,o.kt)("inlineCode",{parentName:"a"},"Canvas")),", ",(0,o.kt)("a",{parentName:"li",href:"../../controls/dockpanel"},(0,o.kt)("inlineCode",{parentName:"a"},"DockPanel")),", ",(0,o.kt)("a",{parentName:"li",href:"../../controls/expander"},(0,o.kt)("inlineCode",{parentName:"a"},"Expander")),", ",(0,o.kt)("a",{parentName:"li",href:"../../controls/grid"},(0,o.kt)("inlineCode",{parentName:"a"},"Grid")),", ",(0,o.kt)("a",{parentName:"li",href:"../../controls/gridsplitter"},(0,o.kt)("inlineCode",{parentName:"a"},"GridSplitter")),", ",(0,o.kt)("a",{parentName:"li",href:"../../controls/panel"},(0,o.kt)("inlineCode",{parentName:"a"},"Panel")),", ",(0,o.kt)("a",{parentName:"li",href:"../../controls/separator"},(0,o.kt)("inlineCode",{parentName:"a"},"Separator")),", ",(0,o.kt)("a",{parentName:"li",href:"../../controls/scrollbar"},(0,o.kt)("inlineCode",{parentName:"a"},"ScrollBar")),", ",(0,o.kt)("a",{parentName:"li",href:"../../controls/scrollviewer"},(0,o.kt)("inlineCode",{parentName:"a"},"ScrollViewer")),", ",(0,o.kt)("a",{parentName:"li",href:"../../controls/stackpanel"},(0,o.kt)("inlineCode",{parentName:"a"},"StackPanel")),", ",(0,o.kt)("a",{parentName:"li",href:"../../controls/viewbox"},(0,o.kt)("inlineCode",{parentName:"a"},"Viewbox")),", ",(0,o.kt)("a",{parentName:"li",href:"../../controls/wrappanel"},(0,o.kt)("inlineCode",{parentName:"a"},"WrapPanel"))),(0,o.kt)("li",{parentName:"ul"},"Menus: ",(0,o.kt)("a",{parentName:"li",href:"../../controls/contextmenu"},(0,o.kt)("inlineCode",{parentName:"a"},"ContextMenu")),", ",(0,o.kt)("a",{parentName:"li",href:"../../controls/menu"},(0,o.kt)("inlineCode",{parentName:"a"},"Menu")),", ",(0,o.kt)("a",{parentName:"li",href:"../../controls/nativemenu"},(0,o.kt)("inlineCode",{parentName:"a"},"NativeMenu"))),(0,o.kt)("li",{parentName:"ul"},"Navigation: ",(0,o.kt)("a",{parentName:"li",href:"../../controls/tabcontrol"},(0,o.kt)("inlineCode",{parentName:"a"},"TabControl")),", ",(0,o.kt)("a",{parentName:"li",href:"../../controls/tabstrip"},(0,o.kt)("inlineCode",{parentName:"a"},"TabStrip"))),(0,o.kt)("li",{parentName:"ul"},"User Information: ",(0,o.kt)("a",{parentName:"li",href:"../../controls/progressbar"},(0,o.kt)("inlineCode",{parentName:"a"},"ProgressBar")),", ",(0,o.kt)("a",{parentName:"li",href:"../../controls/textblock"},(0,o.kt)("inlineCode",{parentName:"a"},"TextBlock")),", ",(0,o.kt)("a",{parentName:"li",href:"../../controls/tooltip"},(0,o.kt)("inlineCode",{parentName:"a"},"ToolTip")))),(0,o.kt)("h2",{id:"input-and-commands"},"Input and Commands"),(0,o.kt)("p",null,"Controls most often detect and respond to user input. The Avalonia ",(0,o.kt)("a",{parentName:"p",href:"../../input/"},"input system")," uses both ",(0,o.kt)("a",{parentName:"p",href:"../../input/routed-events"},"direct and routed events")," to support text input, focus management, and mouse positioning."),(0,o.kt)("p",null,"Applications often have complex input requirements. Avalonia provides a ",(0,o.kt)("a",{parentName:"p",href:"../../data-binding/binding-to-commands"},"command system")," that separates user-input actions from the code that responds to those actions."),(0,o.kt)("h3",{id:"layout"},"Layout"),(0,o.kt)("p",null,"When you create a user interface, you arrange your controls by location and size to form a layout. A key requirement of any layout is to adapt to changes in window size and display settings. Rather than forcing you to write the code to adapt a layout in these circumstances, Avalonia provides a first-class, extensible layout system for you."),(0,o.kt)("p",null,"The cornerstone of the layout system is relative positioning, which increases the ability to adapt to changing window and display conditions. In addition, the layout system manages the negotiation between controls to determine the layout. The negotiation is a two-step process: first, a control tells its parent what location and size it requires; second, the parent tells the control what space it can have."),(0,o.kt)("p",null,"The layout system is exposed to child controls through base Avalonia classes. For common layouts such as grids, stacking, and docking, Avalonia includes several layout controls"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../controls/panel"},(0,o.kt)("inlineCode",{parentName:"a"},"Panel")),": Child controls are stacked on top of each other to fill the panel"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../controls/dockpanel"},(0,o.kt)("inlineCode",{parentName:"a"},"DockPanel")),": Child controls are aligned to the edges of the panel"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../controls/stackpanel"},(0,o.kt)("inlineCode",{parentName:"a"},"StackPanel")),": Child controls are stacked either vertically or horizontally"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../controls/wrappanel"},(0,o.kt)("inlineCode",{parentName:"a"},"WrapPanel")),": Child controls are positioned in left-to-right order and wrapped to the next line when there are more controls on the current line than space allows"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../controls/grid"},(0,o.kt)("inlineCode",{parentName:"a"},"Grid")),": Child controls are positioned by rows and columns"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../controls/canvas"},(0,o.kt)("inlineCode",{parentName:"a"},"Canvas")),": Child controls provide their own layout")),(0,o.kt)("p",null,"You can also create your own layouts by deriving from the ",(0,o.kt)("a",{parentName:"p",href:"../../controls/panel"},(0,o.kt)("inlineCode",{parentName:"a"},"Panel"))," class."))}d.isMDXComponent=!0}}]);