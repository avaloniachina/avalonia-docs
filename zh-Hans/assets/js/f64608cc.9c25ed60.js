"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[10227],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(k,r(r({ref:t},c),{},{components:n})):o.createElement(k,r({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const a={description:"TUTORIALS - To Do List"},r="\u4e3b\u7a97\u53e3\u5185\u5bb9",l={unversionedId:"tutorials/todo-list-app/main-window-content",id:"tutorials/todo-list-app/main-window-content",title:"\u4e3b\u7a97\u53e3\u5185\u5bb9",description:"TUTORIALS - To Do List",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/tutorials/todo-list-app/main-window-content.md",sourceDirName:"tutorials/todo-list-app",slug:"/tutorials/todo-list-app/main-window-content",permalink:"/avalonia-docs/zh-Hans/docs/next/tutorials/todo-list-app/main-window-content",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/tutorials/todo-list-app/main-window-content.md",tags:[],version:"current",frontMatter:{description:"TUTORIALS - To Do List"},sidebar:"documentationSidebar",previous:{title:"\u68c0\u67e5 XAML",permalink:"/avalonia-docs/zh-Hans/docs/next/tutorials/todo-list-app/inspect-the-xaml"},next:{title:"\u521b\u5efa\u6570\u636e\u6a21\u578b",permalink:"/avalonia-docs/zh-Hans/docs/next/tutorials/todo-list-app/creating-a-model"}},s={},p=[{value:"\u68c0\u67e5 XAML",id:"\u68c0\u67e5-xaml",level:2},{value:"\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f",id:"\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4e3b\u7a97\u53e3\u5185\u5bb9"},"\u4e3b\u7a97\u53e3\u5185\u5bb9"),(0,i.kt)("p",null,"\u6b64\u65f6\uff0c\u60a8\u7684\u4e3b\u7a97\u53e3\u4ecd\u7136\u663e\u793a\u89e3\u51b3\u65b9\u6848\u6a21\u677f\u521b\u5efa\u7684\u95ee\u5019\u6587\u672c\u3002\u5728\u672c\u9875\u4e2d\uff0c\u60a8\u5c06\u66f4\u6539\u4e3b\u7a97\u53e3\u7684\u5185\u5bb9\u533a\u57df\uff0c\u4f7f\u5176\u663e\u793a\u60a8\u7684\u65b0\u7528\u6237\u63a7\u4ef6\u3002"),(0,i.kt)("p",null,"\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u66f4\u6539\u4e3b\u7a97\u53e3\u5185\u5bb9\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5b9a\u4f4d\u5e76\u6253\u5f00\u4e3b\u7a97\u53e3\u7684 XAML \u6587\u4ef6\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"Views/MainWindow.axaml")),(0,i.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u547d\u540d\u7a7a\u95f4\u58f0\u660e ",(0,i.kt)("inlineCode",{parentName:"li"},'xmlns:views="clr-namespace:ToDoList.Views"')),(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"Title")," \u5c5e\u6027\u66f4\u6539\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},'Title="Avalonia To Do List"')," \u6765\u66f4\u6539\u5e94\u7528\u7a0b\u5e8f\u7684\u6807\u9898"),(0,i.kt)("li",{parentName:"ul"},"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"<TextBlock>")," \u5143\u7d20\u66ff\u6362\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"<views:ToDoListView/>"))),(0,i.kt)("p",null,"\u73b0\u5728\uff0c\u4e3b\u7a97\u53e3\u7684 XAML \u5e94\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:vm="using:ToDoList.ViewModels"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        mc:Ignorable="d" d:DesignWidth="250" d:DesignHeight="450"\n        xmlns:views="clr-namespace:ToDoList.Views"\n        x:Class="ToDoList.Views.MainWindow"\n        Icon="/Assets/avalonia-logo.ico"\n        Title="Avalonia To Do List">\n\n    <Design.DataContext>\n        <vm:MainWindowViewModel/>\n    </Design.DataContext>\n\n  <views:ToDoListView/>\n\n</Window>\n')),(0,i.kt)("h2",{id:"\u68c0\u67e5-xaml"},"\u68c0\u67e5 XAML"),(0,i.kt)("p",null,"\u8fd9\u4e2a XAML \u5728\u5f88\u591a\u65b9\u9762\u4e0e\u60a8\u5728\u524d\u4e00\u9875\u4e0a\u67e5\u770b\u7684\u7528\u6237\u63a7\u4ef6 XAML \u76f8\u4f3c\u3002\u5177\u4f53\u6765\u8bf4\uff0c\u60a8\u6dfb\u52a0\u4e86\uff1a"),(0,i.kt)("pre",{class:"language-markup"},(0,i.kt)("code",{class:"lang-markup"},(0,i.kt)("strong",null,"<Window ..."),(0,i.kt)("strong",null,'        xmlns:views="clr-namespace:ToDoList.Views" ..>'))),(0,i.kt)("p",null,"\u8fd9\u5c06\u4ee3\u7801\u547d\u540d\u7a7a\u95f4 ",(0,i.kt)("inlineCode",{parentName:"p"},"ToDoList.Views")," \u6620\u5c04\u5230 XML \u547d\u540d\u7a7a\u95f4\u522b\u540d ",(0,i.kt)("inlineCode",{parentName:"p"},"views"),"\u3002"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"\u60a8\u521b\u5efa\u7684\u4efb\u4f55\u7528\u6237\u63a7\u4ef6\u90fd\u9700\u8981\u8fd9\u79cd\u7c7b\u578b\u7684\u6620\u5c04\uff0c\u5426\u5219 Avalonia UI XAML \u5f15\u64ce\u5c06\u65e0\u6cd5\u627e\u5230\u5b83\uff0c\u60a8\u5c06\u6536\u5230\u9519\u8bef\u4fe1\u606f\u3002")),(0,i.kt)("p",null,"\u6700\u540e\u4e00\u6b65\u5c06\u7a97\u53e3\u7684\u5185\u5bb9\u533a\u57df\u8bbe\u7f6e\u4e3a\u663e\u793a\u60a8\u7684\u65b0\u7528\u6237\u63a7\u4ef6\u89c6\u56fe\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},"<views:ToDoListView/>\n")),(0,i.kt)("h2",{id:"\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f"},"\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f"),(0,i.kt)("p",null,"\u73b0\u5728\u8fd0\u884c\u60a8\u5df2\u7ecf\u6784\u5efa\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f Visual Studio\uff0c\u8bf7\u6309\u529f\u80fd\u952e F5\u3002\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f .NET Core CLI\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dotnet run\n")),(0,i.kt)("p",null,"\u60a8\u5c06\u770b\u5230\u4e3b\u7a97\u53e3\uff0c\u5e26\u6709\u65b0\u7684\u6807\u9898\u548c\u7528\u6237\u63a7\u4ef6\uff1a"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"/img/gitbook-import/assets/image (4) (1) (1).png",alt:""})),(0,i.kt)("p",null,"\u8fd9\u53ea\u662f\u89c6\u56fe - \u76ee\u524d\u8fd8\u6ca1\u6709\u4efb\u4f55\u5b9e\u9645\u529f\u80fd\uff01\u5728\u63a5\u4e0b\u6765\u7684\u9875\u9762\u4e0a\uff0c\u60a8\u5c06\u5b66\u4e60\u5982\u4f55\u521b\u5efa\u5e94\u7528\u7a0b\u5e8f\u7684\u5de5\u4f5c\u90e8\u5206\uff1a\u6a21\u578b\u548c\u89c6\u56fe\u6a21\u578b\u3002"))}u.isMDXComponent=!0}}]);