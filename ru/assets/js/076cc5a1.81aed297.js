"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[82674],{5297:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var a=t(85893),r=t(11151);const s={},i="DataGrid",l={id:"controls/datagrid/index",title:"DataGrid",description:"The DataGrid control is a control that displays data in a customizable grid.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-0.10.x/controls/datagrid/index.md",sourceDirName:"controls/datagrid",slug:"/controls/datagrid/",permalink:"/avalonia-docs/ru/docs/0.10.x/controls/datagrid/",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/ru/docusaurus-plugin-content-docs/version-0.10.x/controls/datagrid/index.md",tags:[],version:"0.10.x",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Decorator",permalink:"/avalonia-docs/ru/docs/0.10.x/controls/decorator"},next:{title:"DataGridColumns",permalink:"/avalonia-docs/ru/docs/0.10.x/controls/datagrid/datagridcolumns"}},d={},o=[{value:"Reference",id:"reference",level:2},{value:"Source code",id:"source-code",level:2},{value:"Reference required nuget package",id:"reference-required-nuget-package",level:2},{value:"Add required styles to App.axaml",id:"add-required-styles-to-appaxaml",level:2},{value:"Examples",id:"examples",level:2},{value:"Basic DataGrid",id:"basic-datagrid",level:3},{value:"Custom headers",id:"custom-headers",level:3},{value:"Common Properties",id:"common-properties",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"datagrid",children:"DataGrid"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"DataGrid"})," control is a control that displays data in a customizable grid."]}),"\n",(0,a.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"http://reference.avaloniaui.net/api/Avalonia.Controls/DataGrid/",children:"DataGrid"})}),"\n",(0,a.jsx)(n.h2,{id:"source-code",children:"Source code"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls.DataGrid/DataGrid.cs",children:"DataGrid.cs"})}),"\n",(0,a.jsx)(n.h2,{id:"reference-required-nuget-package",children:"Reference required nuget package"}),"\n",(0,a.jsxs)(n.p,{children:["To start using ",(0,a.jsx)(n.a,{href:"https://www.nuget.org/packages/Avalonia.Controls.DataGrid/",children:"DataGrid"}),', you need to reference it in your project first.\nYou can run "dotnet add package" from the command line:']}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"dotnet add package Avalonia.Controls.DataGrid\n"})}),"\n",(0,a.jsx)(n.p,{children:"Or add package reference directly to the csproj file:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'<PackageReference Include="Avalonia.Controls.DataGrid" Version="0.10.16" />\n'})}),"\n",(0,a.jsx)(n.p,{children:"Note, that version should match Avalonia version you are using."}),"\n",(0,a.jsx)(n.h2,{id:"add-required-styles-to-appaxaml",children:"Add required styles to App.axaml"}),"\n",(0,a.jsx)(n.p,{children:"The Themes can be changed to light or dark to fit your application theme."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-markup",children:'<Application.Styles>\n    <StyleInclude Source="avares://Avalonia.Themes.Default/DefaultTheme.xaml"/>\n    <StyleInclude Source="avares://Avalonia.Themes.Default/Accents/BaseLight.xaml"/>\n    <StyleInclude Source="avares://Avalonia.Controls.DataGrid/Themes/Default.xaml"/>\n</Application.Styles>\n'})}),"\n",(0,a.jsx)(n.p,{children:"Or if you are using new Fluent theme, you will need to include styles created specifically for that:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-markup",children:'<Application.Styles>\n    <FluentTheme Mode="Light" />\n    <StyleInclude Source="avares://Avalonia.Controls.DataGrid/Themes/Fluent.xaml"/>\n</Application.Styles>\n'})}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.h3,{id:"basic-datagrid",children:"Basic DataGrid"}),"\n",(0,a.jsx)(n.p,{children:"This will generate a DataGrid with column header names. FirstName and LastName."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-markup",children:'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n        x:Class="AvaloniaAppTemplate.MainWindow"\n        Title="AvaloniaAppTemplate">\n    <Grid>\n        <DataGrid Name="MyDataGrid" Items="{Binding People}" >\n        </DataGrid>\n    </Grid>\n</Window>\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"public class Person\n{\n    public string FirstName { get; set; }\n    public string LastName { get; set; }\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"custom-headers",children:"Custom headers"}),"\n",(0,a.jsx)(n.p,{children:"The DataGrid uses the same class Person as before, but now with custom column header name. Forename and Surname."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-markup",children:'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n        x:Class="AvaloniaAppTemplate.MainWindow"\n        Title="AvaloniaAppTemplate">\n    <Grid>\n        <DataGrid Name="MyDataGrid" Items="{Binding People}" AutoGenerateColumns="False" >\n            <DataGrid.Columns>\n                <DataGridTextColumn Header="Forename"  Binding="{Binding FirstName}"/>\n                <DataGridTextColumn Header="Surname" Binding="{Binding LastName}" />\n            </DataGrid.Columns>\n        </DataGrid>\n    </Grid>\n</Window>\n'})}),"\n",(0,a.jsx)(n.h3,{id:"common-properties",children:"Common Properties"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{style:{textAlign:"left"},children:"Property"}),(0,a.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"left"},children:(0,a.jsx)(n.code,{children:"AutoGenerateColumns"})}),(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"Control if the columns should be automatically generate for display in UI from the bounded data source."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"left"},children:(0,a.jsx)(n.code,{children:"Items"})}),(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"Gets or sets a collection that is used to generate the content of the control."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"left"},children:(0,a.jsx)(n.code,{children:"CanUserReorderColumns"})}),(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"Indicates whether the user can change the column display order by dragging column headers with the mouse."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"left"},children:(0,a.jsx)(n.code,{children:"CanUserResizeColumns"})}),(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"Indicates whether the user can adjust column widths using the mouse."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"left"},children:(0,a.jsx)(n.code,{children:"CanUserSortColumns"})}),(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"Indicates whether the user can sort columns by clicking the column header."})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var a=t(67294);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);