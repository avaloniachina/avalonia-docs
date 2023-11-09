"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[52257],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),c=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return a?r.createElement(f,o(o({ref:t},s),{},{components:a})):r.createElement(f,o({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},79657:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const i=a.p+"assets/images/files-b9eb068462061837ee3a518fdfbfff7c.png",o=a.p+"assets/images/countries-445f00a29176941629337f71537bc6a2.png",l=a.p+"assets/images/image (4)-ec52cd8a639676e109592b33d0293647.png",d={description:"REFERENCE - Built-in Controls"},c="Tree Data Grid",s={unversionedId:"reference/controls/detailed-reference/treedatagrid/README",id:"reference/controls/detailed-reference/treedatagrid/README",title:"Tree Data Grid",description:"REFERENCE - Built-in Controls",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/controls/detailed-reference/treedatagrid/README.md",sourceDirName:"reference/controls/detailed-reference/treedatagrid",slug:"/reference/controls/detailed-reference/treedatagrid/",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/detailed-reference/treedatagrid/",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/reference/controls/detailed-reference/treedatagrid/README.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Controls"},sidebar:"documentationSidebar",previous:{title:"Tray Icon",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/detailed-reference/tray-icon"},next:{title:"Flat Tree Data Grid",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/detailed-reference/treedatagrid/creating-a-flat-treedatagrid"}},p={},u=[{value:"Hierarchical Data",id:"hierarchical-data",level:2},{value:"Flat Data",id:"flat-data",level:2},{value:"NuGet Package Reference",id:"nuget-package-reference",level:2},{value:"Include Data Grid Styles ",id:"include-data-grid-styles-",level:2},{value:"Useful Properties",id:"useful-properties",level:2},{value:"Source",id:"source",level:2},{value:"More Information",id:"more-information",level:2}],m={toc:u},f="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(f,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tree-data-grid"},"Tree Data Grid"),(0,n.kt)("p",null,"The tree data grid displays hierarchical and tabular data together in a single view. It is a combination of a tree view and data grid."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"For full information on the tree view control, see the reference ",(0,n.kt)("a",{parentName:"p",href:"/avalonia-docs/zh-Hans/docs/next/reference/controls/detailed-reference/treeview-1"},"here"),".")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"For full information on the data grid control, see the reference ",(0,n.kt)("a",{parentName:"p",href:"../../datagrid/"},"here"),".")),(0,n.kt)("p",null,"The control has two modes of operation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Hierarchical -")," data is displayed in a tree with optional columns"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Flat -")," data is displayed in a two dimensional table, similar to the data grid control")),(0,n.kt)("h2",{id:"hierarchical-data"},"Hierarchical Data"),(0,n.kt)("p",null,"This is an illustration of a tree data grid displaying hierarchical data:"),(0,n.kt)("img",{src:i,alt:""}),(0,n.kt)("h2",{id:"flat-data"},"Flat Data"),(0,n.kt)("p",null,"This is an illustration An example of  a tree data grid displaying flat data:"),(0,n.kt)("img",{src:o,alt:""}),(0,n.kt)("h2",{id:"nuget-package-reference"},"NuGet Package Reference"),(0,n.kt)("p",null,"You must install the ",(0,n.kt)("em",{parentName:"p"},"NuGet")," package for the data grid, there are several ways of doing this. You can use ",(0,n.kt)("strong",{parentName:"p"},"Manage NuGet Packages")," from the project menu of your IDE:"),(0,n.kt)("img",{src:l,alt:""}),"Alternatively,  you can run this instruction from the command line:",(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add package Avalonia.Controls.TreeDataGrid\n")),(0,n.kt)("p",null,"Or add package reference directly to the project (",(0,n.kt)("inlineCode",{parentName:"p"},".csproj"),") file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<PackageReference Include="Avalonia.Controls.TreeDataGrid" Version="11.0.0" />\n')),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Note you must always install the data grid version that matches the ",(0,n.kt)("em",{parentName:"p"},"Avalonia UI")," version you are using.")),(0,n.kt)("h2",{id:"include-data-grid-styles-"},"Include Data Grid Styles"," "),(0,n.kt)("p",null,"You must reference the data grid themes to include the additional styles that the tree data grid uses. You can do this by adding a ",(0,n.kt)("inlineCode",{parentName:"p"},"<StyleInclude>")," element to the application (",(0,n.kt)("inlineCode",{parentName:"p"},"App.axaml")," file)."),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markup"},'<Application xmlns="https://github.com/avaloniaui"\n             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n             x:Class="AvaloniaApplication.App">\n  <Application.Styles>\n    <FluentTheme/>\n    <StyleInclude \n        Source="avares://Avalonia.Controls.TreeDataGrid/Themes/Fluent.axaml"/>\n  </Application.Styles>\n</Application>\n')),(0,n.kt)("h2",{id:"useful-properties"},"Useful Properties"),(0,n.kt)("p",null,"You will probably use these properties most often:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Source")),(0,n.kt)("td",{parentName:"tr",align:null},"The bound collection that is used as the data source for the control.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"CanUserResizeColumns")),(0,n.kt)("td",{parentName:"tr",align:null},"Indicates whether the user can adjust column widths using the pointer. (Default is false.)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"CanUserSortColumns")),(0,n.kt)("td",{parentName:"tr",align:null},"Indicates whether the user can sort columns by clicking the column header. (Default is true.)")))),(0,n.kt)("h2",{id:"source"},"Source"),(0,n.kt)("p",null,"You will use the ",(0,n.kt)("inlineCode",{parentName:"p"},"Source")," property to bind to a view model that is defined in code. The view model  includes the definition of how the columns map to the properties of the class that holds the grid items."," "),(0,n.kt)("h2",{id:"more-information"},"More Information"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"For the complete API documentation about this control, see here.")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"View the source code on GitHub ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia.Controls.TreeDataGrid"},"TreeDataGrid.cs"))),(0,n.kt)("p",null,"The next page shows an example of creating a hierarchical tree data grid with columns."))}h.isMDXComponent=!0}}]);