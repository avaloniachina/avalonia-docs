"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[36053],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},78831:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={},l="DataGrid",i={unversionedId:"controls/datagrid/index",id:"version-0.10.x/controls/datagrid/index",title:"DataGrid",description:"The DataGrid control is a control that displays data in a customizable grid.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/controls/datagrid/index.md",sourceDirName:"controls/datagrid",slug:"/controls/datagrid/",permalink:"/avalonia-docs/zh-Hans/docs/controls/datagrid/",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/controls/datagrid/index.md",tags:[],version:"0.10.x",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Decorator",permalink:"/avalonia-docs/zh-Hans/docs/controls/decorator"},next:{title:"DataGridColumns",permalink:"/avalonia-docs/zh-Hans/docs/controls/datagrid/datagridcolumns"}},s={},d=[{value:"Reference",id:"reference",level:2},{value:"Source code",id:"source-code",level:2},{value:"Reference required nuget package",id:"reference-required-nuget-package",level:2},{value:"Add required styles to App.axaml",id:"add-required-styles-to-appaxaml",level:2},{value:"Examples",id:"examples",level:2},{value:"Basic DataGrid",id:"basic-datagrid",level:3},{value:"Custom headers",id:"custom-headers",level:3},{value:"Common Properties",id:"common-properties",level:3}],c={toc:d},m="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"datagrid"},"DataGrid"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DataGrid")," control is a control that displays data in a customizable grid."),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/DataGrid/"},"DataGrid")),(0,r.kt)("h2",{id:"source-code"},"Source code"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls.DataGrid/DataGrid.cs"},"DataGrid.cs")),(0,r.kt)("h2",{id:"reference-required-nuget-package"},"Reference required nuget package"),(0,r.kt)("p",null,"To start using ",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Avalonia.Controls.DataGrid/"},"DataGrid"),', you need to reference it in your project first.\nYou can run "dotnet add package" from the command line:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add package Avalonia.Controls.DataGrid\n")),(0,r.kt)("p",null,"Or add package reference directly to the csproj file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<PackageReference Include="Avalonia.Controls.DataGrid" Version="0.10.16" />\n')),(0,r.kt)("p",null,"Note, that version should match Avalonia version you are using."),(0,r.kt)("h2",{id:"add-required-styles-to-appaxaml"},"Add required styles to App.axaml"),(0,r.kt)("p",null,"The Themes can be changed to light or dark to fit your application theme."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'<Application.Styles>\n    <StyleInclude Source="avares://Avalonia.Themes.Default/DefaultTheme.xaml"/>\n    <StyleInclude Source="avares://Avalonia.Themes.Default/Accents/BaseLight.xaml"/>\n    <StyleInclude Source="avares://Avalonia.Controls.DataGrid/Themes/Default.xaml"/>\n</Application.Styles>\n')),(0,r.kt)("p",null,"Or if you are using new Fluent theme, you will need to include styles created specifically for that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'<Application.Styles>\n    <FluentTheme Mode="Light" />\n    <StyleInclude Source="avares://Avalonia.Controls.DataGrid/Themes/Fluent.xaml"/>\n</Application.Styles>\n')),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"basic-datagrid"},"Basic DataGrid"),(0,r.kt)("p",null,"This will generate a DataGrid with column header names. FirstName and LastName."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n        x:Class="AvaloniaAppTemplate.MainWindow"\n        Title="AvaloniaAppTemplate">\n    <Grid>\n        <DataGrid Name="MyDataGrid" Items="{Binding People}" >\n        </DataGrid>\n    </Grid>\n</Window>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Person\n{\n    public string FirstName { get; set; }\n    public string LastName { get; set; }\n}\n")),(0,r.kt)("h3",{id:"custom-headers"},"Custom headers"),(0,r.kt)("p",null,"The DataGrid uses the same class Person as before, but now with custom column header name. Forename and Surname."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n        x:Class="AvaloniaAppTemplate.MainWindow"\n        Title="AvaloniaAppTemplate">\n    <Grid>\n        <DataGrid Name="MyDataGrid" Items="{Binding People}" AutoGenerateColumns="False" >\n            <DataGrid.Columns>\n                <DataGridTextColumn Header="Forename"  Binding="{Binding FirstName}"/>\n                <DataGridTextColumn Header="Surname" Binding="{Binding LastName}" />\n            </DataGrid.Columns>\n        </DataGrid>\n    </Grid>\n</Window>\n')),(0,r.kt)("h3",{id:"common-properties"},"Common Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"AutoGenerateColumns")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Control if the columns should be automatically generate for display in UI from the bounded data source.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Items")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets a collection that is used to generate the content of the control.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CanUserReorderColumns")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Indicates whether the user can change the column display order by dragging column headers with the mouse.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CanUserResizeColumns")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Indicates whether the user can adjust column widths using the mouse.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CanUserSortColumns")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Indicates whether the user can sort columns by clicking the column header.")))))}p.isMDXComponent=!0}}]);