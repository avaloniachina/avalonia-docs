"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[33752],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={},i="Controls",s={unversionedId:"basics/user-interface/controls/index",id:"basics/user-interface/controls/index",title:"Controls",description:"Controls in Avalonia UI are fundamental building blocks used to create user interfaces. They represent various interactive elements such as buttons, text boxes, sliders, and more. Understanding controls is essential for developing applications using Avalonia UI.",source:"@site/docs/basics/user-interface/controls/index.md",sourceDirName:"basics/user-interface/controls",slug:"/basics/user-interface/controls/",permalink:"/avalonia-docs/docs/next/basics/user-interface/controls/",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/basics/user-interface/controls/index.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Code-behind",permalink:"/avalonia-docs/docs/next/basics/user-interface/code-behind"},next:{title:"Built-in Controls",permalink:"/avalonia-docs/docs/next/basics/user-interface/controls/builtin-controls"}},l={},c=[{value:"What are Controls?",id:"what-are-controls",level:2},{value:"Getting Started with Builtin Controls",id:"getting-started-with-builtin-controls",level:2},{value:"Creating Controls",id:"creating-controls",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"controls"},"Controls"),(0,r.kt)("p",null,"Controls in Avalonia UI are fundamental building blocks used to create user interfaces. They represent various interactive elements such as buttons, text boxes, sliders, and more. Understanding controls is essential for developing applications using Avalonia UI."),(0,r.kt)("h2",{id:"what-are-controls"},"What are Controls?"),(0,r.kt)("p",null,"Controls are UI elements that allow users to interact with an application. They provide functionality for input, display, and manipulation of data. Controls can be categorized into several types based on their purpose and behavior."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Buttons"),": Buttons are commonly used for triggering actions when clicked or tapped. They can have text, icons, or both, and are often used for tasks like submitting forms, opening dialogs, or executing commands."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Text Boxes"),": Text boxes allow users to enter and edit text. They are used for capturing user input, such as usernames, passwords, or any form of textual information. Text boxes can also be customized for specific input patterns and validation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Labels"),": Labels are used to display static text or captions for other controls. They provide additional information or context to the user and are generally non-interactive."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Checkboxes and Radio Buttons"),": Checkboxes and radio buttons are used for selection and multiple-choice options. Checkboxes allow users to select one or more options, while radio buttons enable users to choose a single option from a group."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sliders"),": Sliders are used to select a value from a range. They provide a visual representation of a value that can be adjusted by dragging a handle along a track. Sliders are commonly used for settings such as volume controls or image adjustments."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"List Boxes and Combo Boxes"),": List boxes and combo boxes allow users to select an item from a list or a dropdown menu. List boxes display multiple items at once, while combo boxes show a single item initially and expand to display a list when clicked.")),(0,r.kt)("p",null,"These are just a few examples of the many controls available in Avalonia UI. Each control has its own set of properties, methods, and events, allowing developers to customize their appearance and behavior to suit their application's needs."),(0,r.kt)("h2",{id:"getting-started-with-builtin-controls"},"Getting Started with Builtin Controls"),(0,r.kt)("p",null,"To get started with using controls in Avalonia UI, you can refer to the documentation for each control type. The documentation provides detailed explanations, examples, and code snippets to help you understand and utilize the controls effectively."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../../reference/controls/buttons/button"},"Button Control Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../../reference/controls/detailed-reference/textbox"},"Text Box Control Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../../reference/controls/detailed-reference/label"},"Label Control Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../../reference/controls/checkbox"},"Checkbox Control Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../../reference/controls/slider"},"Slider Control Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../../reference/controls/listbox"},"List Box Control Documentation"))),(0,r.kt)("p",null,"By exploring these resources, you'll gain a solid foundation in using controls within Avalonia UI and be able to create rich and interactive user interfaces for your applications."),(0,r.kt)("h2",{id:"creating-controls"},"Creating Controls"),(0,r.kt)("p",null,"In Avalonia, you have the flexibility to create custom controls tailored to your application's specific requirements. See the ",(0,r.kt)("a",{parentName:"p",href:"creating-controls"},"Creating Controls")," section for more information"))}p.isMDXComponent=!0}}]);