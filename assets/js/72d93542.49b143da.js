"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[42654],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?o.createElement(h,i(i({ref:t},p),{},{components:a})):o.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92918:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=a(87462),n=(a(67294),a(3905));const r={description:"TUTORIALS - To Do List App"},i="Create a Model",l={unversionedId:"tutorials/todo-list-app/creating-a-model",id:"tutorials/todo-list-app/creating-a-model",title:"Create a Model",description:"TUTORIALS - To Do List App",source:"@site/docs/tutorials/todo-list-app/creating-a-model.md",sourceDirName:"tutorials/todo-list-app",slug:"/tutorials/todo-list-app/creating-a-model",permalink:"/avalonia-docs/docs/next/tutorials/todo-list-app/creating-a-model",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/tutorials/todo-list-app/creating-a-model.md",tags:[],version:"current",frontMatter:{description:"TUTORIALS - To Do List App"},sidebar:"documentationSidebar",previous:{title:"Main Window Content",permalink:"/avalonia-docs/docs/next/tutorials/todo-list-app/main-window-content"},next:{title:"Create a View Model",permalink:"/avalonia-docs/docs/next/tutorials/todo-list-app/creating-a-view-model"}},s={},c=[{value:"Data Model",id:"data-model",level:3},{value:"Create a Fake Data Service",id:"create-a-fake-data-service",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-a-model"},"Create a Model"),(0,n.kt)("p",null,"So far the in this tutorial, you have created a basic view where none of the controls do anything yet; and linking it all together using the MVVM pattern is still a couple of steps away."),(0,n.kt)("p",null,"On this page you will create the model part of the MVVM pattern for app."),(0,n.kt)("p",null,"In a real MVVM application, the model handles everything that is not in the application-specific logic of the view model, or the view itself. This may include data storage and any services needed to supply storage, and maybe other external services that the app needs (email for example)."),(0,n.kt)("p",null,"In this tutorial example, you will create a mock database and a service to access it. These will take the place of the model part of the application."),(0,n.kt)("h3",{id:"data-model"},"Data Model"),(0,n.kt)("p",null,"The data model contains data entities (as they would appear if stored in a database for example)."),(0,n.kt)("p",null,"In this tutorial, you will create a single entity for the data model.  Follow this procedure to create the data model:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Stop the app if it is still running."),(0,n.kt)("li",{parentName:"ul"},"Locate the ",(0,n.kt)("strong",{parentName:"li"},"Models")," folder in the project, and rename it as 'DataModel'."),(0,n.kt)("li",{parentName:"ul"},"Add a new class to the folder. Name the class 'ToDoItem'."),(0,n.kt)("li",{parentName:"ul"},"Change the code in the class as shown:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\n\nnamespace ToDoList.DataModel\n{\n    public class ToDoItem\n    {\n        public string Description { get; set; } = String.Empty;\n        public bool IsChecked { get; set; }\n    }\n}\n")),(0,n.kt)("h3",{id:"create-a-fake-data-service"},"Create a Fake Data Service"),(0,n.kt)("p",null,"In a real application, you might use a SQL database and write services based on the ",(0,n.kt)("em",{parentName:"p"},"Microsoft Entity Framework")," to read and write data.  However, this is well beyond the scope of this tutorial! So to test the app, you will create a fake data service that acts as if it has a database, but really just uses an array in memory."),(0,n.kt)("p",null,"Follow this procedure to create the fake database service:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create a new project folder and name it 'Services'."),(0,n.kt)("li",{parentName:"ul"},"Add a new class to the folder, name it 'ToDoListService'."),(0,n.kt)("li",{parentName:"ul"},"Add the code shown to the new class:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Collections.Generic;\nusing ToDoList.DataModel;\n\nnamespace ToDoList.Services\n{\n    public class ToDoListService\n    {\n        public IEnumerable<ToDoItem> GetItems() => new[]\n        {\n            new ToDoItem { Description = "Walk the dog" },\n            new ToDoItem { Description = "Buy some milk" },\n            new ToDoItem { Description = "Learn Avalonia", IsChecked = true },\n        };\n    }\n}\n')),(0,n.kt)("p",null,"That is the model done for now. On the next page, you will learn how to add a view model to the app to complete the MVVM pattern."))}u.isMDXComponent=!0}}]);