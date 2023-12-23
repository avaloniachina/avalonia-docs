"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[87175],{96231:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=t(85893),s=t(11151);const a={},l="Layout",r={id:"layout/index",title:"Layout",description:"Panels",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/layout/index.md",sourceDirName:"layout",slug:"/layout/",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/layout/",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/layout/index.md",tags:[],version:"0.10.x",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Page Transitions",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/animations/page-transitions"},next:{title:"Panels Overview",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/layout/panels-overview"}},o={},d=[{value:"Panels",id:"panels",level:2},{value:"Element Bounding Boxes",id:"element-bounding-boxes",level:2},{value:"The Layout System",id:"the-layout-system",level:2},{value:"Measuring and Arranging Children",id:"measuring-and-arranging-children",level:2},{value:"In This Section",id:"in-this-section",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"layout",children:"Layout"}),"\n",(0,i.jsx)(n.h2,{id:"panels",children:"Panels"}),"\n",(0,i.jsxs)(n.p,{children:["Avalonia includes a group of elements that derive from ",(0,i.jsx)(n.code,{children:"Panel"}),". These ",(0,i.jsx)(n.code,{children:"Panel"})," elements enable many complex layouts. For example, stacking elements can easily be achieved by using the ",(0,i.jsx)(n.code,{children:"StackPanel"})," element, while more complex and free flowing layouts are possible by using a ",(0,i.jsx)(n.code,{children:"Canvas"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The following table summarizes the available ",(0,i.jsx)(n.code,{children:"Panel"})," controls:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"Panel"})}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["Lays out all children to fill the bounds of the ",(0,i.jsx)(n.code,{children:"Panel"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"Canvas"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Defines an area within which you can explicitly position child elements by coordinates relative to the Canvas area."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"DockPanel"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Defines an area within which you can arrange child elements either horizontally or vertically, relative to each other."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"Grid"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Defines a flexible grid area that consists of columns and rows."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"RelativePanel"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Arranges child elements relative to other elements or the panel itself."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"StackPanel"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Arranges child elements into a single line that can be oriented horizontally or vertically."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"WrapPanel"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Positions child elements in sequential position from left to right, breaking content to the next line at the edge of the containing box. Subsequent ordering occurs sequentially from top to bottom or right to left, depending on the value of the Orientation property."})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["In WPF, ",(0,i.jsx)(n.code,{children:"Panel"})," is an abstract class and laying out multiple controls to fill the available space is usually done with a ",(0,i.jsx)(n.code,{children:"Grid"})," with no rows/columns. In Avalonia ",(0,i.jsx)(n.code,{children:"Panel"})," is a usable control that has the same layout behavior as a ",(0,i.jsx)(n.code,{children:"Grid"})," with no rows/columns, but with a lighter runtime footprint."]}),"\n",(0,i.jsx)(n.h2,{id:"element-bounding-boxes",children:"Element Bounding Boxes"}),"\n",(0,i.jsxs)(n.p,{children:["When thinking about layout in Avalonia, it is important to understand the bounding box that surrounds all elements. Each ",(0,i.jsx)(n.code,{children:"Control"})," consumed by the layout system can be thought of as a rectangle that is slotted into the layout. The ",(0,i.jsx)(n.code,{children:"Bounds"})," property returns the boundaries of an element's layout allocation. The size of the rectangle is determined by calculating the available screen space, the size of any constraints, layout-specific properties (such as margin and padding), and the individual behavior of the parent ",(0,i.jsx)(n.code,{children:"Panel"})," element. Processing this data, the layout system is able to calculate the position of all the children of a particular ",(0,i.jsx)(n.code,{children:"Panel"}),". It is important to remember that sizing characteristics defined on the parent element, such as a ",(0,i.jsx)(n.code,{children:"Border"}),", affect its children."]}),"\n",(0,i.jsx)(n.h2,{id:"the-layout-system",children:"The Layout System"}),"\n",(0,i.jsxs)(n.p,{children:["At its simplest, layout is a recursive system that leads to an element being sized, positioned, and drawn. More specifically, layout describes the process of measuring and arranging the members of a ",(0,i.jsx)(n.code,{children:"Panel"})," element's ",(0,i.jsx)(n.code,{children:"Children"})," collection. Layout is an intensive process. The larger the ",(0,i.jsx)(n.code,{children:"Children"})," collection, the greater the number of calculations that must be made. Complexity can also be introduced based on the layout behavior defined by the ",(0,i.jsx)(n.code,{children:"Panel"})," element that owns the collection. A relatively simple ",(0,i.jsx)(n.code,{children:"Panel"}),", such as ",(0,i.jsx)(n.code,{children:"Canvas"}),", can have significantly better performance than a more complex ",(0,i.jsx)(n.code,{children:"Panel"}),", such as ",(0,i.jsx)(n.code,{children:"Grid"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Each time that a child control changes its position, it has the potential to trigger a new pass by the layout system. Therefore, it is important to understand the events that can invoke the layout system, as unnecessary invocation can lead to poor application performance. The following describes the process that occurs when the layout system is invoked."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"A child UIElement begins the layout process by first having its core properties measured."}),"\n",(0,i.jsxs)(n.li,{children:["Sizing properties defined on ",(0,i.jsx)(n.code,{children:"Control"})," are evaluated, such as ",(0,i.jsx)(n.code,{children:"Width"}),", ",(0,i.jsx)(n.code,{children:"Height"}),", and ",(0,i.jsx)(n.code,{children:"Margin"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Panel"}),"-specific logic is applied, such as ",(0,i.jsx)(n.code,{children:"Dock"})," direction or stacking ",(0,i.jsx)(n.code,{children:"Orientation"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Content is arranged after all children have been measured."}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"Children"})," collection is drawn on the screen."]}),"\n",(0,i.jsxs)(n.li,{children:["The process is invoked again if additional ",(0,i.jsx)(n.code,{children:"Children"})," are added to the collection"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This process and how it is invoked are defined in more detail in the following sections."}),"\n",(0,i.jsx)(n.h2,{id:"measuring-and-arranging-children",children:"Measuring and Arranging Children"}),"\n",(0,i.jsxs)(n.p,{children:["The layout system completes two passes for each member of the ",(0,i.jsx)(n.code,{children:"Children"})," collection, a measure pass and an arrange pass. Each child ",(0,i.jsx)(n.code,{children:"Panel"})," provides its own ",(0,i.jsx)(n.code,{children:"MeasureOverride"})," and ",(0,i.jsx)(n.code,{children:"ArrangeOverride"})," methods to achieve its own specific layout behavior."]}),"\n",(0,i.jsxs)(n.p,{children:["During the measure pass, each member of the ",(0,i.jsx)(n.code,{children:"Children"})," collection is evaluated. The process begins with a call to the ",(0,i.jsx)(n.code,{children:"Measure"})," method. This method is called within the implementation of the parent ",(0,i.jsx)(n.code,{children:"Panel"})," element, and does not have to be called explicitly for layout to occur."]}),"\n",(0,i.jsxs)(n.p,{children:["First, native size properties of the ",(0,i.jsx)(n.code,{children:"Visual"})," such as ",(0,i.jsx)(n.code,{children:"Clip"})," and ",(0,i.jsx)(n.code,{children:"IsVisible"})," are evaluated. This generates a constraint that is passed to ",(0,i.jsx)(n.code,{children:"MeasureCore"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["First, framework properties which affects the value of the constraint are processed. These properties generally describe the sizing characteristics of the underlying ",(0,i.jsx)(n.code,{children:"Control"}),", such as its ",(0,i.jsx)(n.code,{children:"Height"}),", ",(0,i.jsx)(n.code,{children:"Width"})," and ",(0,i.jsx)(n.code,{children:"Margin"}),". Each of these properties can change the space that is necessary to display the element. ",(0,i.jsx)(n.code,{children:"MeasureOverride"})," is then called with the constraint as a parameter."]}),"\n",(0,i.jsxs)(n.p,{children:["Because ",(0,i.jsx)(n.code,{children:"Bounds"})," is a calculated value, you should be aware that there could be multiple or incremental reported changes to it as a result of various operations by the layout system. The layout system may be calculating required measure space for child elements, constraints by the parent element, and so on."]}),"\n",(0,i.jsxs)(n.p,{children:["The ultimate goal of the measure pass is for the child to determine its ",(0,i.jsx)(n.code,{children:"DesiredSize"}),", which occurs during the ",(0,i.jsx)(n.code,{children:"MeasureCore"})," call. The ",(0,i.jsx)(n.code,{children:"DesiredSize"})," value is stored by ",(0,i.jsx)(n.code,{children:"Measure"})," for use during the content arrange pass."]}),"\n",(0,i.jsxs)(n.p,{children:["The arrange pass begins with a call to the ",(0,i.jsx)(n.code,{children:"Arrange"})," method. During the arrange pass, the parent ",(0,i.jsx)(n.code,{children:"Panel"})," element generates a rectangle that represents the bounds of the child. This value is passed to the ",(0,i.jsx)(n.code,{children:"ArrangeCore"})," method for processing."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ArrangeCore"})," method evaluates the ",(0,i.jsx)(n.code,{children:"DesiredSize"})," of the child and evaluates any additional margins that may affect the rendered size of the element. ",(0,i.jsx)(n.code,{children:"ArrangeCore"})," generates an arrange size, which is passed to the ",(0,i.jsx)(n.code,{children:"ArrangeOverride"})," method of the ",(0,i.jsx)(n.code,{children:"Panel"})," as a parameter. ",(0,i.jsx)(n.code,{children:"ArrangeOverride"})," generates the finalSize of the child. Finally, the ",(0,i.jsx)(n.code,{children:"ArrangeCore"})," method does a final evaluation of offset properties, such as margin and alignment, and puts the child within its layout slot. The child does not have to (and frequently does not) fill the entire allocated space. Control is then returned to the parent ",(0,i.jsx)(n.code,{children:"Panel"})," and the layout process is complete."]}),"\n",(0,i.jsx)(n.h2,{id:"in-this-section",children:"In This Section"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"panels-overview",children:"Panels Overview"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"alignment-margins-and-padding",children:"Alignment, Margins and Padding"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"create-a-custom-panel",children:"Create a Custom Panel"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>l});var i=t(67294);const s={},a=i.createContext(s);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);