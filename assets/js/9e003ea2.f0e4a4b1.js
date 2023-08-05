"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[68086],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const i={description:"TUTORIALS - To Do List App"},r="Add New Items",l={unversionedId:"tutorials/todo-list-app/adding-new-items",id:"tutorials/todo-list-app/adding-new-items",title:"Add New Items",description:"TUTORIALS - To Do List App",source:"@site/docs/tutorials/todo-list-app/adding-new-items.md",sourceDirName:"tutorials/todo-list-app",slug:"/tutorials/todo-list-app/adding-new-items",permalink:"/avalonia-docs/docs/next/tutorials/todo-list-app/adding-new-items",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/tutorials/todo-list-app/adding-new-items.md",tags:[],version:"current",frontMatter:{description:"TUTORIALS - To Do List App"},sidebar:"documentationSidebar",previous:{title:"Add a Data Context",permalink:"/avalonia-docs/docs/next/tutorials/todo-list-app/add-a-data-context"},next:{title:"Navigate Views",permalink:"/avalonia-docs/docs/next/tutorials/todo-list-app/navigate-views"}},s={},p=[{value:"Create the View Model",id:"create-the-view-model",level:2},{value:"Create a New View",id:"create-a-new-view",level:2},{value:".NET Core CLI",id:"net-core-cli",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"add-new-items"},"Add New Items"),(0,a.kt)("p",null,"When you created the ",(0,a.kt)("inlineCode",{parentName:"p"},"ToDoListView")," user control earlier in this tutorial, you added a button so that the user can add a new item. On this page you will add an action to the button."," "),(0,a.kt)("p",null,"When the user clicks the button, you want the application to show a new view that will allow the user to enter the description of a new item."),(0,a.kt)("h2",{id:"create-the-view-model"},"Create the View Model"),(0,a.kt)("p",null,"To create a view model for the new view, follow this procedure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Solution Explorer")," locate and right-click the ",(0,a.kt)("strong",{parentName:"li"},"ViewModels")," folder."," "),(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Add"),", then ",(0,a.kt)("strong",{parentName:"li"},"Class"),"."," "),(0,a.kt)("li",{parentName:"ul"},"Name the class 'AddItemViewModel'. Click ",(0,a.kt)("strong",{parentName:"li"},"Add"),"."),(0,a.kt)("li",{parentName:"ul"},"Add the description property as shown:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\n\nnamespace ToDoList.ViewModels\n{\n    public class AddItemViewModel : ViewModelBase\n    {\n        public string Description { get; set; } = String.Empty;\n    }\n}\n")),(0,a.kt)("h2",{id:"create-a-new-view"},"Create a New View"),(0,a.kt)("p",null,"To create the new view, follow this procedure if you are using Visual Studio:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Solution Explorer")," locate and right-click the ",(0,a.kt)("strong",{parentName:"li"},"Views")," folder."," "),(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Add")),(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Avalonia")," under ",(0,a.kt)("strong",{parentName:"li"},"C# Items")," and then click ",(0,a.kt)("strong",{parentName:"li"},"User Control (Avalonia)")),(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("strong",{parentName:"li"},"Name")," enter 'AddItemView'"," "),(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Add")," ")),(0,a.kt)("h3",{id:"net-core-cli"},".NET Core CLI"),(0,a.kt)("p",null,"Run the following command to create the new view, follow this procedure if you are using .Net Core CLI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dotnet new avalonia.usercontrol -o Views -n AddItemView  --namespace ToDoList.Views\n")),(0,a.kt)("p",null,"Alter the XAML to match the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<UserControl xmlns="https://github.com/avaloniaui"\n             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n             xmlns:vm="using:ToDoList.ViewModels"\n             xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n             mc:Ignorable="d" d:DesignWidth="250" d:DesignHeight="450"\n             x:Class="ToDoList.Views.AddItemView"\n             x:DataType="vm:AddItemViewModel">\n  <DockPanel>\n    <Button DockPanel.Dock="Bottom" \n            HorizontalAlignment="Stretch"\n            HorizontalContentAlignment="Center">Cancel</Button>\n    <Button DockPanel.Dock="Bottom" \n            HorizontalAlignment="Stretch"\n            HorizontalContentAlignment="Center">OK</Button>\n    <TextBox AcceptsReturn="True"\n             Text="{Binding Description}"\n             Watermark="Enter your to do item"/>\n  </DockPanel>\n</UserControl>\n')),(0,a.kt)("p",null,"This gives you a view which looks like this:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/gitbook-import/assets/image (44).png",alt:""})),(0,a.kt)("p",null,"The new view has a text box control which has three properties for you to review:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AcceptsReturn")," creates a multi-line text box."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Text")," binds the text that is displayed in the text box to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Description")," property on a view model (that you have not created yet)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Watermark")," causes a placeholder to be displayed when the text box is empty.")),(0,a.kt)("p",null,"On the next page you will learn how to change the view in the main window to display the new item view in place of the to do list view."))}u.isMDXComponent=!0}}]);