"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[29063],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=l.createContext({}),p=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),h=n,k=u["".concat(s,".").concat(h)]||u[h]||c[h]||r;return a?l.createElement(k,o(o({ref:t},d),{},{components:a})):l.createElement(k,o({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}h.displayName="MDXCreateElement"},18392:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var l=a(87462),n=(a(67294),a(3905));const r={},o="Controls",i={unversionedId:"controls/index",id:"version-0.10.x/controls/index",title:"Controls",description:"Avalonia provides following groups of controls:",source:"@site/versioned_docs/version-0.10.x/controls/index.md",sourceDirName:"controls",slug:"/controls/",permalink:"/avalonia-docs/docs/controls/",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/controls/index.md",tags:[],version:"0.10.x",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Troubleshooting",permalink:"/avalonia-docs/docs/styling/troubleshooting"},next:{title:"AutoCompleteBox",permalink:"/avalonia-docs/docs/controls/autocompletebox"}},s={},p=[{value:"Layout",id:"layout",level:2},{value:"Border",id:"border",level:3},{value:"Canvas",id:"canvas",level:3},{value:"DockPanel",id:"dockpanel",level:3},{value:"Expander",id:"expander",level:3},{value:"Grid",id:"grid",level:3},{value:"GridSplitter",id:"gridsplitter",level:3},{value:"Panel",id:"panel",level:3},{value:"RelativePanel",id:"relativepanel",level:3},{value:"ScrollBar",id:"scrollbar",level:3},{value:"ScrollViewer",id:"scrollviewer",level:3},{value:"SplitView",id:"splitview",level:3},{value:"StackPanel",id:"stackpanel",level:3},{value:"UniformGrid",id:"uniformgrid",level:3},{value:"Window",id:"window",level:3},{value:"WrapPanel",id:"wrappanel",level:3},{value:"Buttons",id:"buttons",level:2},{value:"Button",id:"button",level:3},{value:"RepeatButton",id:"repeatbutton",level:3},{value:"RadioButton",id:"radiobutton",level:3},{value:"ToggleButton",id:"togglebutton",level:3},{value:"ButtonSpinner",id:"buttonspinner",level:3},{value:"SplitButton",id:"splitbutton",level:3},{value:"ToggleSplitButton",id:"togglesplitbutton",level:3},{value:"Data Display",id:"data-display",level:2},{value:"DataGrid",id:"datagrid",level:3},{value:"ItemsControl",id:"itemscontrol",level:3},{value:"ItemsRepeater",id:"itemsrepeater",level:3},{value:"ListBox",id:"listbox",level:3},{value:"Text",id:"text",level:2},{value:"AutoCompleteBox",id:"autocompletebox",level:3},{value:"TextBlock",id:"textblock",level:3},{value:"TextBox",id:"textbox",level:3},{value:"MaskedTextBox",id:"maskedtextbox",level:3},{value:"Value selectors",id:"value-selectors",level:2},{value:"CheckBox",id:"checkbox",level:3},{value:"ComboBox",id:"combobox",level:3},{value:"Slider",id:"slider",level:3},{value:"Images",id:"images",level:2},{value:"DrawingImage",id:"drawingimage",level:3},{value:"Image",id:"image",level:3},{value:"Date and Time",id:"date-and-time",level:2},{value:"Calendar",id:"calendar",level:3},{value:"CalendarDatePicker",id:"calendardatepicker",level:3},{value:"DatePicker",id:"datepicker",level:3},{value:"TimePicker",id:"timepicker",level:3},{value:"Menus",id:"menus",level:2},{value:"ContextMenu",id:"contextmenu",level:3},{value:"Menu",id:"menu",level:3}],d={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,l.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"controls"},"Controls"),(0,n.kt)("p",null,"Avalonia provides following groups of controls:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#layout"},"Layout controls")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#buttons"},"Buttons")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#data-display"},"Data display controls")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#text"},"Text display and editing")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#value-selectors"},"Value selection")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#images"},"Displaying images")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#date-and-time"},"Date and time controls")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#menus"},"Menus"))),(0,n.kt)("h2",{id:"layout"},"Layout"),(0,n.kt)("p",null,"Layout controls provide ability for developer to arrange child controls according to specific rules."),(0,n.kt)("h3",{id:"border"},(0,n.kt)("a",{parentName:"h3",href:"border"},"Border")),(0,n.kt)("p",null,"A control which decorates a child with a border and background."),(0,n.kt)("h3",{id:"canvas"},(0,n.kt)("a",{parentName:"h3",href:"canvas"},"Canvas")),(0,n.kt)("p",null,"A panel that displays child controls at arbitrary locations."),(0,n.kt)("h3",{id:"dockpanel"},(0,n.kt)("a",{parentName:"h3",href:"dockpanel"},"DockPanel")),(0,n.kt)("p",null,"A panel which arranges its children at the top, bottom, left, right or center."),(0,n.kt)("h3",{id:"expander"},(0,n.kt)("a",{parentName:"h3",href:"expander"},"Expander")),(0,n.kt)("p",null,"A control with a header that has a collapsible content section."),(0,n.kt)("h3",{id:"grid"},(0,n.kt)("a",{parentName:"h3",href:"grid"},"Grid")),(0,n.kt)("p",null,"A flexible grid area that consists of columns and rows."),(0,n.kt)("h3",{id:"gridsplitter"},(0,n.kt)("a",{parentName:"h3",href:"gridsplitter"},"GridSplitter")),(0,n.kt)("p",null,"Redistributes space between columns or rows of a ",(0,n.kt)("a",{parentName:"p",href:"grid"},"Grid")," control."),(0,n.kt)("h3",{id:"panel"},(0,n.kt)("a",{parentName:"h3",href:"panel"},"Panel")),(0,n.kt)("p",null,"Base class for controls that can contain multiple children."),(0,n.kt)("h3",{id:"relativepanel"},(0,n.kt)("a",{parentName:"h3",href:"relativepanel"},"RelativePanel")),(0,n.kt)("p",null,"Defines an area within which you can position and align child objects in relation to each other or the parent panel."),(0,n.kt)("h3",{id:"scrollbar"},(0,n.kt)("a",{parentName:"h3",href:"scrollbar"},"ScrollBar")),(0,n.kt)("p",null,"A scrollbar control."),(0,n.kt)("h3",{id:"scrollviewer"},(0,n.kt)("a",{parentName:"h3",href:"scrollviewer"},"ScrollViewer")),(0,n.kt)("p",null,"A control scrolls its content if the content is bigger than the space available."),(0,n.kt)("h3",{id:"splitview"},(0,n.kt)("a",{parentName:"h3",href:"splitview"},"SplitView")),(0,n.kt)("p",null,"A control with two views: A collapsible pane and an area for content."),(0,n.kt)("h3",{id:"stackpanel"},(0,n.kt)("a",{parentName:"h3",href:"stackpanel"},"StackPanel")),(0,n.kt)("p",null,"A panel which lays out its children horizontally or vertically."),(0,n.kt)("h3",{id:"uniformgrid"},"UniformGrid"),(0,n.kt)("p",null,"A panel with uniform column and row sizes."),(0,n.kt)("h3",{id:"window"},(0,n.kt)("a",{parentName:"h3",href:"../getting-started/windows"},"Window")),(0,n.kt)("p",null,"A top-level window."),(0,n.kt)("h3",{id:"wrappanel"},(0,n.kt)("a",{parentName:"h3",href:"wrappanel"},"WrapPanel")),(0,n.kt)("p",null,"Positions child elements in sequential position from left to right,"," ","\nbreaking content to the next line at the edge of the containing box."," "),(0,n.kt)("h2",{id:"buttons"},"Buttons"),(0,n.kt)("h3",{id:"button"},(0,n.kt)("a",{parentName:"h3",href:"buttons/button"},"Button")),(0,n.kt)("p",null,"A button control."),(0,n.kt)("h3",{id:"repeatbutton"},(0,n.kt)("a",{parentName:"h3",href:"buttons/repeatbutton"},"RepeatButton")),(0,n.kt)("p",null,"Represents a control that raises its click event repeatedly when it is pressed and held."),(0,n.kt)("h3",{id:"radiobutton"},(0,n.kt)("a",{parentName:"h3",href:"buttons/radiobutton"},"RadioButton")),(0,n.kt)("p",null,"Represents a button that allows a user to select a single option from a group of options."),(0,n.kt)("h3",{id:"togglebutton"},(0,n.kt)("a",{parentName:"h3",href:"buttons/togglebutton"},"ToggleButton")),(0,n.kt)("p",null,"Represents a control that a user can select (check) or clear (uncheck)."),(0,n.kt)("h3",{id:"buttonspinner"},(0,n.kt)("a",{parentName:"h3",href:"buttons/buttonspinner"},"ButtonSpinner")),(0,n.kt)("p",null,"Represents a spinner control that includes two Buttons"),(0,n.kt)("h3",{id:"splitbutton"},(0,n.kt)("a",{parentName:"h3",href:"buttons/splitbutton"},"SplitButton")),(0,n.kt)("p",null,"Functions as a button with primary and secondary parts that can each be pressed separately. The primary part behaves like normal button and the secondary part opens a flyout with additional actions."),(0,n.kt)("h3",{id:"togglesplitbutton"},(0,n.kt)("a",{parentName:"h3",href:"buttons/togglesplitbutton"},"ToggleSplitButton")),(0,n.kt)("p",null,"Functions as a toggle button with primary and secondary parts that can each be pressed separately. The primary part behaves like a normal toggle button and the secondary part opens a flyout with additional actions."),(0,n.kt)("h2",{id:"data-display"},"Data Display"),(0,n.kt)("p",null,"These controls helps display data, either in tabular or list form."),(0,n.kt)("h3",{id:"datagrid"},(0,n.kt)("a",{parentName:"h3",href:"datagrid/"},"DataGrid")),(0,n.kt)("p",null,"Displays data in a customizable grid."),(0,n.kt)("h3",{id:"itemscontrol"},(0,n.kt)("a",{parentName:"h3",href:"itemscontrol"},"ItemsControl")),(0,n.kt)("p",null,"Displays a collection of items."),(0,n.kt)("h3",{id:"itemsrepeater"},(0,n.kt)("a",{parentName:"h3",href:"itemsrepeater"},"ItemsRepeater")),(0,n.kt)("p",null,"Represents a data-driven collection control that incorporates a flexible layout system, custom views, and virtualization."),(0,n.kt)("h3",{id:"listbox"},(0,n.kt)("a",{parentName:"h3",href:"listbox"},"ListBox")),(0,n.kt)("p",null,"An items control in which individual items can be selected."),(0,n.kt)("h2",{id:"text"},"Text"),(0,n.kt)("p",null,"Controls for displaying and editing text"),(0,n.kt)("h3",{id:"autocompletebox"},(0,n.kt)("a",{parentName:"h3",href:"autocompletebox"},"AutoCompleteBox")),(0,n.kt)("p",null,"Represents a control that provides a text box for user input and a drop-down that contains possible matches based on the input in the text box."),(0,n.kt)("h3",{id:"textblock"},(0,n.kt)("a",{parentName:"h3",href:"textblock"},"TextBlock")),(0,n.kt)("p",null,"A control that displays a block of text."),(0,n.kt)("h3",{id:"textbox"},(0,n.kt)("a",{parentName:"h3",href:"textbox"},"TextBox")),(0,n.kt)("p",null,"Represents a control that can be used to display or edit unformatted text."),(0,n.kt)("h3",{id:"maskedtextbox"},(0,n.kt)("a",{parentName:"h3",href:"maskedtextbox"},"MaskedTextBox")),(0,n.kt)("p",null,"Represents a control that can be used to display or edit text format it uses a mask to distinguish between proper and improper user input format."),(0,n.kt)("h2",{id:"value-selectors"},"Value selectors"),(0,n.kt)("h3",{id:"checkbox"},(0,n.kt)("a",{parentName:"h3",href:"checkbox"},"CheckBox")),(0,n.kt)("p",null,"A check box control."),(0,n.kt)("h3",{id:"combobox"},(0,n.kt)("a",{parentName:"h3",href:"combobox"},"ComboBox")),(0,n.kt)("p",null,"A drop-down list control."),(0,n.kt)("h3",{id:"slider"},(0,n.kt)("a",{parentName:"h3",href:"slider"},"Slider")),(0,n.kt)("p",null,"A control that lets the user select from a range of values by moving a thumb control along a track."),(0,n.kt)("h2",{id:"images"},"Images"),(0,n.kt)("p",null,"These controls display bitmap or vector images."),(0,n.kt)("h3",{id:"drawingimage"},"DrawingImage"),(0,n.kt)("p",null,"Displays a vector image."),(0,n.kt)("h3",{id:"image"},(0,n.kt)("a",{parentName:"h3",href:"image"},"Image")),(0,n.kt)("p",null,"Displays a bitmap image."),(0,n.kt)("h2",{id:"date-and-time"},"Date and Time"),(0,n.kt)("p",null,"Set of controls which gives you ability display display and select dates, point of time, or display calendar.."),(0,n.kt)("h3",{id:"calendar"},(0,n.kt)("a",{parentName:"h3",href:"calendar"},"Calendar")),(0,n.kt)("p",null,"Represents a control that enables a user to select a date by using a visual calendar display."),(0,n.kt)("h3",{id:"calendardatepicker"},(0,n.kt)("a",{parentName:"h3",href:"calendardatepicker"},"CalendarDatePicker")),(0,n.kt)("p",null,"A control for selecting dates with a calendar drop-down."),(0,n.kt)("h3",{id:"datepicker"},(0,n.kt)("a",{parentName:"h3",href:"datepicker"},"DatePicker")),(0,n.kt)("p",null,"A control to allow the user to select a date."),(0,n.kt)("h3",{id:"timepicker"},(0,n.kt)("a",{parentName:"h3",href:"timepicker"},"TimePicker")),(0,n.kt)("p",null,"A control to allow the user to select a time."),(0,n.kt)("h2",{id:"menus"},"Menus"),(0,n.kt)("h3",{id:"contextmenu"},(0,n.kt)("a",{parentName:"h3",href:"contextmenu"},"ContextMenu")),(0,n.kt)("p",null,"A context menu attached to a control."),(0,n.kt)("h3",{id:"menu"},(0,n.kt)("a",{parentName:"h3",href:"menu"},"Menu")),(0,n.kt)("p",null,"A top-level menu control."))}c.isMDXComponent=!0}}]);