"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[42095],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=p(n),u=o,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(h,r(r({ref:e},d),{},{components:n})):a.createElement(h,r({ref:e},d))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[c]="string"==typeof t?t:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24978:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={description:"TUTORIALS - To Do List App"},r="Add a Data Context",l={unversionedId:"tutorials/todo-list-app/add-a-data-context",id:"tutorials/todo-list-app/add-a-data-context",title:"Add a Data Context",description:"TUTORIALS - To Do List App",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/tutorials/todo-list-app/add-a-data-context.md",sourceDirName:"tutorials/todo-list-app",slug:"/tutorials/todo-list-app/add-a-data-context",permalink:"/avalonia-docs/zh-Hans/docs/next/tutorials/todo-list-app/add-a-data-context",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/tutorials/todo-list-app/add-a-data-context.md",tags:[],version:"current",frontMatter:{description:"TUTORIALS - To Do List App"},sidebar:"documentationSidebar",previous:{title:"Data Binding",permalink:"/avalonia-docs/zh-Hans/docs/next/tutorials/todo-list-app/wiring-up-the-views"},next:{title:"Add New Items",permalink:"/avalonia-docs/zh-Hans/docs/next/tutorials/todo-list-app/adding-new-items"}},s={},p=[],d={toc:p},c="wrapper";function m(t){let{components:e,...n}=t;return(0,o.kt)(c,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"add-a-data-context"},"Add a Data Context"),(0,o.kt)("p",null,"On this page, you will set the data context of the to do list view to be the ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoList")," property."),(0,o.kt)("p",null,"To set the data context, follow this procedure:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Locate the ",(0,o.kt)("strong",{parentName:"li"},"MainWindowView.axaml")," file in the ",(0,o.kt)("strong",{parentName:"li"},"Views")," folder."),(0,o.kt)("li",{parentName:"ul"},"Remove the namespace declaration for ",(0,o.kt)("inlineCode",{parentName:"li"},"xmlns:vm")," "),(0,o.kt)("li",{parentName:"ul"},"Remove the ",(0,o.kt)("inlineCode",{parentName:"li"},"<Design.DataContext>")," tag completely."),(0,o.kt)("li",{parentName:"ul"},"Edit the title attribute to change the window caption to 'Avalonia To Do List'."),(0,o.kt)("li",{parentName:"ul"},"Locate the content ",(0,o.kt)("inlineCode",{parentName:"li"},"<views:ToDoListView/>")," "),(0,o.kt)("li",{parentName:"ul"},"Add the attribute ",(0,o.kt)("inlineCode",{parentName:"li"},'DataContext="{Binding ToDoList}"')," as follows:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        mc:Ignorable="d" d:DesignWidth="250" d:DesignHeight="450"\n        xmlns:views="clr-namespace:ToDoList.Views"\n        x:Class="ToDoList.Views.MainWindow"\n        Icon="/Assets/avalonia-logo.ico"\n        Title="Avalonia To Do List">\n  <views:ToDoListView DataContext="{Binding ToDoList}"/>\n</Window\n')),(0,o.kt)("p",null,"The arrangement of views and view models now has an additional data context; defined as a binding, that will allow the ",(0,o.kt)("em",{parentName:"p"},"Avalonia UI")," binder to locate the ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoList")," property on the ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoListViewModel")," object. This object has already been instantiated in code during app initialization."," "),(0,o.kt)("p",null,"So here is the arrangement after the data context binding has been resolved:"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"/img/gitbook-import/assets/image (20) (3).png",alt:""})),(0,o.kt)("p",null,"Now if you run the app, the ",(0,o.kt)("em",{parentName:"p"},"Avalonia UI")," binder has a suitable data context for the items control binding; and the items show up in the view:"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"/img/gitbook-import/assets/image (5) (1) (2).png",alt:""})))}m.isMDXComponent=!0}}]);