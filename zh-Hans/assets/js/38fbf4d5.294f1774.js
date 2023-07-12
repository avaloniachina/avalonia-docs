"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[42105],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=i,m=c["".concat(s,".").concat(u)]||c[u]||h[u]||r;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={description:"CONCEPTS"},l="Layout",o={unversionedId:"basics/user-interface/building-layouts/index",id:"basics/user-interface/building-layouts/index",title:"Layout",description:"CONCEPTS",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/basics/user-interface/building-layouts/index.md",sourceDirName:"basics/user-interface/building-layouts",slug:"/basics/user-interface/building-layouts/",permalink:"/avalonia-docs/zh-Hans/docs/next/basics/user-interface/building-layouts/",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/basics/user-interface/building-layouts/index.md",tags:[],version:"current",frontMatter:{description:"CONCEPTS"},sidebar:"documentationSidebar",previous:{title:"Defining a ControlTheme",permalink:"/avalonia-docs/zh-Hans/docs/next/basics/user-interface/controls/creating-controls/control-themes"},next:{title:"Alignment, Margins and Padding",permalink:"/avalonia-docs/zh-Hans/docs/next/basics/user-interface/building-layouts/alignment-margins-and-padding"}},s={},d=[{value:"Panels",id:"panels",level:2},{value:"Element Bounding Boxes",id:"element-bounding-boxes",level:2},{value:"The Layout System",id:"the-layout-system",level:2},{value:"Measuring and Arranging Children",id:"measuring-and-arranging-children",level:2},{value:"In This Section",id:"in-this-section",level:2}],p={toc:d},c="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"layout"},"Layout"),(0,i.kt)("h2",{id:"panels"},"Panels"),(0,i.kt)("p",null,"Avalonia includes a group of elements that derive from ",(0,i.kt)("inlineCode",{parentName:"p"},"Panel"),". These ",(0,i.kt)("inlineCode",{parentName:"p"},"Panel")," elements enable many complex layouts. For example, stacking elements can easily be achieved by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"StackPanel")," element, while more complex and free flowing layouts are possible by using a ",(0,i.kt)("inlineCode",{parentName:"p"},"Canvas"),"."),(0,i.kt)("p",null,"The following table summarizes the available ",(0,i.kt)("inlineCode",{parentName:"p"},"Panel")," controls:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Panel")),(0,i.kt)("td",{parentName:"tr",align:null},"Lays out all children to fill the bounds of the ",(0,i.kt)("inlineCode",{parentName:"td"},"Panel"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Canvas")),(0,i.kt)("td",{parentName:"tr",align:null},"Defines an area within which you can explicitly position child elements by coordinates relative to the Canvas area.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DockPanel")),(0,i.kt)("td",{parentName:"tr",align:null},"Defines an area within which you can arrange child elements either horizontally or vertically, relative to each other.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Grid")),(0,i.kt)("td",{parentName:"tr",align:null},"Defines a flexible grid area that consists of columns and rows.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"RelativePanel")),(0,i.kt)("td",{parentName:"tr",align:null},"Arranges child elements relative to other elements or the panel itself.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"StackPanel")),(0,i.kt)("td",{parentName:"tr",align:null},"Arranges child elements into a single line that can be oriented horizontally or vertically.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"WrapPanel")),(0,i.kt)("td",{parentName:"tr",align:null},"Positions child elements in sequential position from left to right, breaking content to the next line at the edge of the containing box. Subsequent ordering occurs sequentially from top to bottom or right to left, depending on the value of the Orientation property.")))),(0,i.kt)("p",null,"In WPF, ",(0,i.kt)("inlineCode",{parentName:"p"},"Panel")," is an abstract class and laying out multiple controls to fill the available space is usually done with a ",(0,i.kt)("inlineCode",{parentName:"p"},"Grid")," with no rows/columns. In Avalonia ",(0,i.kt)("inlineCode",{parentName:"p"},"Panel")," is a usable control that has the same layout behavior as a ",(0,i.kt)("inlineCode",{parentName:"p"},"Grid")," with no rows/columns, but with a lighter runtime footprint."),(0,i.kt)("h2",{id:"element-bounding-boxes"},"Element Bounding Boxes"),(0,i.kt)("p",null,"When thinking about layout in Avalonia, it is important to understand the bounding box that surrounds all elements. Each ",(0,i.kt)("inlineCode",{parentName:"p"},"Control")," consumed by the layout system can be thought of as a rectangle that is slotted into the layout. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Bounds")," property returns the boundaries of an element's layout allocation. The size of the rectangle is determined by calculating the available screen space, the size of any constraints, layout-specific properties (such as margin and padding), and the individual behavior of the parent ",(0,i.kt)("inlineCode",{parentName:"p"},"Panel")," element. Processing this data, the layout system is able to calculate the position of all the children of a particular ",(0,i.kt)("inlineCode",{parentName:"p"},"Panel"),". It is important to remember that sizing characteristics defined on the parent element, such as a ",(0,i.kt)("inlineCode",{parentName:"p"},"Border"),", affect its children."),(0,i.kt)("h2",{id:"the-layout-system"},"The Layout System"),(0,i.kt)("p",null,"At its simplest, layout is a recursive system that leads to an element being sized, positioned, and drawn. More specifically, layout describes the process of measuring and arranging the members of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Panel")," element's ",(0,i.kt)("inlineCode",{parentName:"p"},"Children")," collection. Layout is an intensive process. The larger the ",(0,i.kt)("inlineCode",{parentName:"p"},"Children")," collection, the greater the number of calculations that must be made. Complexity can also be introduced based on the layout behavior defined by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Panel")," element that owns the collection. A relatively simple ",(0,i.kt)("inlineCode",{parentName:"p"},"Panel"),", such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Canvas"),", can have significantly better performance than a more complex ",(0,i.kt)("inlineCode",{parentName:"p"},"Panel"),", such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Grid"),"."),(0,i.kt)("p",null,"Each time that a child control changes its position, it has the potential to trigger a new pass by the layout system. Therefore, it is important to understand the events that can invoke the layout system, as unnecessary invocation can lead to poor application performance. The following describes the process that occurs when the layout system is invoked."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A child UIElement begins the layout process by first having its core properties measured."),(0,i.kt)("li",{parentName:"ol"},"Sizing properties defined on ",(0,i.kt)("inlineCode",{parentName:"li"},"Control")," are evaluated, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"Width"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Height"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"Margin"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Panel"),"-specific logic is applied, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"Dock")," direction or stacking ",(0,i.kt)("inlineCode",{parentName:"li"},"Orientation"),"."),(0,i.kt)("li",{parentName:"ol"},"Content is arranged after all children have been measured."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"Children")," collection is drawn on the screen."),(0,i.kt)("li",{parentName:"ol"},"The process is invoked again if additional ",(0,i.kt)("inlineCode",{parentName:"li"},"Children")," are added to the collection")),(0,i.kt)("p",null,"This process and how it is invoked are defined in more detail in the following sections."),(0,i.kt)("h2",{id:"measuring-and-arranging-children"},"Measuring and Arranging Children"),(0,i.kt)("p",null,"The layout system completes two passes for each member of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Children")," collection, a measure pass and an arrange pass. Each child ",(0,i.kt)("inlineCode",{parentName:"p"},"Panel")," provides its own ",(0,i.kt)("inlineCode",{parentName:"p"},"MeasureOverride")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrangeOverride")," methods to achieve its own specific layout behavior."),(0,i.kt)("p",null,"During the measure pass, each member of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Children")," collection is evaluated. The process begins with a call to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Measure")," method. This method is called within the implementation of the parent ",(0,i.kt)("inlineCode",{parentName:"p"},"Panel")," element, and does not have to be called explicitly for layout to occur."),(0,i.kt)("p",null,"First, native size properties of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Visual")," such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Clip")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"IsVisible")," are evaluated. This generates a constraint that is passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"MeasureCore"),"."),(0,i.kt)("p",null,"First, framework properties which affects the value of the constraint are processed. These properties generally describe the sizing characteristics of the underlying ",(0,i.kt)("inlineCode",{parentName:"p"},"Control"),", such as its ",(0,i.kt)("inlineCode",{parentName:"p"},"Height"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Width")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Margin"),". Each of these properties can change the space that is necessary to display the element. ",(0,i.kt)("inlineCode",{parentName:"p"},"MeasureOverride")," is then called with the constraint as a parameter."),(0,i.kt)("p",null,"Because ",(0,i.kt)("inlineCode",{parentName:"p"},"Bounds")," is a calculated value, you should be aware that there could be multiple or incremental reported changes to it as a result of various operations by the layout system. The layout system may be calculating required measure space for child elements, constraints by the parent element, and so on."),(0,i.kt)("p",null,"The ultimate goal of the measure pass is for the child to determine its ",(0,i.kt)("inlineCode",{parentName:"p"},"DesiredSize"),", which occurs during the ",(0,i.kt)("inlineCode",{parentName:"p"},"MeasureCore")," call. The ",(0,i.kt)("inlineCode",{parentName:"p"},"DesiredSize")," value is stored by ",(0,i.kt)("inlineCode",{parentName:"p"},"Measure")," for use during the content arrange pass."),(0,i.kt)("p",null,"The arrange pass begins with a call to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Arrange")," method. During the arrange pass, the parent ",(0,i.kt)("inlineCode",{parentName:"p"},"Panel")," element generates a rectangle that represents the bounds of the child. This value is passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrangeCore")," method for processing."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrangeCore")," method evaluates the ",(0,i.kt)("inlineCode",{parentName:"p"},"DesiredSize")," of the child and evaluates any additional margins that may affect the rendered size of the element. ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrangeCore")," generates an arrange size, which is passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrangeOverride")," method of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Panel")," as a parameter. ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrangeOverride")," generates the finalSize of the child. Finally, the ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrangeCore")," method does a final evaluation of offset properties, such as margin and alignment, and puts the child within its layout slot. The child does not have to (and frequently does not) fill the entire allocated space. Control is then returned to the parent ",(0,i.kt)("inlineCode",{parentName:"p"},"Panel")," and the layout process is complete."),(0,i.kt)("h2",{id:"in-this-section"},"In This Section"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/avalonia-docs/zh-Hans/docs/next/basics/user-interface/building-layouts/panels-overview"},"Panels Overview")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/avalonia-docs/zh-Hans/docs/next/basics/user-interface/building-layouts/alignment-margins-and-padding"},"Alignment, Margins and Padding")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/avalonia-docs/zh-Hans/docs/next/guides/custom-controls/create-a-custom-panel"},"Create a Custom Panel"))))}h.isMDXComponent=!0}}]);