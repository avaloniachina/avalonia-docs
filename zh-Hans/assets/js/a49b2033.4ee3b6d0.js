"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[83164],{61962:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var t=n(85893),i=n(11151);const l={id:"datagridcolumns",title:"DataGridColumns"},d=void 0,r={id:"controls/datagrid/datagridcolumns",title:"DataGridColumns",description:"Overview",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/controls/datagrid/datagridcolumns.md",sourceDirName:"controls/datagrid",slug:"/controls/datagrid/datagridcolumns",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/controls/datagrid/datagridcolumns",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/controls/datagrid/datagridcolumns.md",tags:[],version:"0.10.x",frontMatter:{id:"datagridcolumns",title:"DataGridColumns"},sidebar:"documentationSidebar",previous:{title:"DataGrid",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/controls/datagrid/"},next:{title:"DatePicker",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/controls/datepicker"}},o={},s=[{value:"Overview",id:"overview",level:2},{value:"Build-in DataGridColumns",id:"build-in-datagridcolumns",level:3},{value:"Common Properties for all DataGridColumns",id:"common-properties-for-all-datagridcolumns",level:3},{value:"DataGridTextColumn",id:"datagridtextcolumn",level:2},{value:"Example",id:"example",level:3},{value:"API Reference",id:"api-reference",level:3},{value:"Source code",id:"source-code",level:3},{value:"DataGridCheckBoxColumn",id:"datagridcheckboxcolumn",level:2},{value:"Example",id:"example-1",level:3},{value:"API Reference",id:"api-reference-1",level:3},{value:"Source code",id:"source-code-1",level:3},{value:"DataGridTemplateColumn",id:"datagridtemplatecolumn",level:2},{value:"Example",id:"example-2",level:3},{value:"API Reference",id:"api-reference-2",level:3},{value:"Source code",id:"source-code-2",level:3}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(a.p,{children:["Every ",(0,t.jsx)(a.a,{href:"./",title:"mention",children:"."})," can hold multiple ",(0,t.jsx)(a.code,{children:"DataGridColumns"}),". Avalonia has several build-in ",(0,t.jsx)(a.code,{children:"DataGridColumns"}),", which can be used to display a certain data type with a certain appearance."]}),"\n",(0,t.jsx)(a.h3,{id:"build-in-datagridcolumns",children:"Build-in DataGridColumns"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"/avalonia-docs/zh-Hans/docs/0.10.x/controls/datagrid/datagridcolumns#datagridtextcolumn",children:"DataGridTextColumn"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"/avalonia-docs/zh-Hans/docs/0.10.x/controls/datagrid/datagridcolumns#datagridcheckboxcolumn",children:"DataGridCheckBoxColumn"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"/avalonia-docs/zh-Hans/docs/0.10.x/controls/datagrid/datagridcolumns#datagridtemplatecolumn",children:"DataGridTemplateColumn"})}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"common-properties-for-all-datagridcolumns",children:"Common Properties for all DataGridColumns"}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Property"}),(0,t.jsx)(a.th,{children:"Description"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"Header"}),(0,t.jsx)(a.td,{children:"Gets or sets the header content of the column"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"HeaderTemplate"}),(0,t.jsxs)(a.td,{children:["Gets or sets a data template for the column (see: ",(0,t.jsx)(a.a,{href:"../../templates/data-templates",children:"datatemplates.md"}),")"]})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"IsReadOnly"}),(0,t.jsx)(a.td,{children:"Gets or sets if the column is read-only. If the owning grid is read-only, then the column is also read-only, even if this property is set to true."})]})]})]}),"\n",(0,t.jsx)(a.h2,{id:"datagridtextcolumn",children:"DataGridTextColumn"}),"\n",(0,t.jsxs)(a.p,{children:["This column is used to display text data, normally represented by a ",(0,t.jsx)(a.code,{children:"string"}),". In the normal state the text is displayed in a ",(0,t.jsx)(a.code,{children:"TextBlock"}),". If the user edits the current cell, a ",(0,t.jsx)(a.code,{children:"TextBox"})," will be shown. This column has some properties which can be used to control the appearance like ",(0,t.jsx)(a.code,{children:"FontSize"})," and ",(0,t.jsx)(a.code,{children:"FontFamily"}),"."]}),"\n",(0,t.jsx)(a.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-markup",children:'<DataGrid Name="MyDataGrid" Items="{Binding People}" AutoGenerateColumns="False" >\n    <DataGrid.Columns>\n        <DataGridTextColumn Header="Forename" Binding="{Binding FirstName}"/>\n        <DataGridTextColumn Header="Surname" Binding="{Binding LastName}" />\n    </DataGrid.Columns>\n</DataGrid>\n'})}),"\n",(0,t.jsx)(a.h3,{id:"api-reference",children:"API Reference"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"http://reference.avaloniaui.net/api/Avalonia.Controls/DataGridTextColumn/",children:"DataGridTextColumn"})}),"\n",(0,t.jsx)(a.h3,{id:"source-code",children:"Source code"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls.DataGrid/DataGridTextColumn.cs",children:"DataGridTextColumn.cs"})}),"\n",(0,t.jsx)(a.h2,{id:"datagridcheckboxcolumn",children:"DataGridCheckBoxColumn"}),"\n",(0,t.jsxs)(a.p,{children:["This column is used to represent a ",(0,t.jsx)(a.code,{children:"bool"})," value. The  value is represented by a ",(0,t.jsx)(a.code,{children:"CheckBox"}),", which is disabled in the normal state and enabled in the editing state of the ",(0,t.jsx)(a.code,{children:"DataGridCell"}),". If needed you can enable the indeterminate state by setting the property ",(0,t.jsx)(a.code,{children:"IsThreeState"})," to true."]}),"\n",(0,t.jsx)(a.h3,{id:"example-1",children:"Example"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-markup",children:'<DataGrid Name="MyDataGrid" Items="{Binding ToDoListItems}" AutoGenerateColumns="False" >\n    <DataGrid.Columns>\n        <DataGridCheckBoxColumn Header="\u2714" Binding="{Binding IsChecked}"/>\n        <DataGridTextColumn Header="ToDo" Binding="{Binding Content}" />\n    </DataGrid.Columns>\n</DataGrid>\n'})}),"\n",(0,t.jsx)(a.h3,{id:"api-reference-1",children:"API Reference"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"http://reference.avaloniaui.net/api/Avalonia.Controls/DataGridCheckBoxColumn/",children:"DataGridCheckBoxColumn"})}),"\n",(0,t.jsx)(a.h3,{id:"source-code-1",children:"Source code"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls.DataGrid/DataGridCheckBoxColumn.cs",children:"DataGridCheckBoxColumn.cs"})}),"\n",(0,t.jsx)(a.h2,{id:"datagridtemplatecolumn",children:"DataGridTemplateColumn"}),"\n",(0,t.jsxs)(a.p,{children:["This column is used to display any content you like. There  are two ",(0,t.jsx)(a.a,{href:"../../templates/data-templates",children:"datatemplates.md"})," which you can define, the ",(0,t.jsx)(a.code,{children:"CellTemplate"})," for the normal state and the ",(0,t.jsx)(a.code,{children:"CellEditingTemplate"})," for the editing state of the current ",(0,t.jsx)(a.code,{children:"DataGridCell"}),"."]}),"\n",(0,t.jsx)(a.admonition,{type:"info",children:(0,t.jsxs)(a.p,{children:["The DataGridTemplateColumn is editable from Avalonia version 0.10.12 onward. If you do not set a ",(0,t.jsx)(a.code,{children:"CellEditingTemplate"}),", the column will stay read-only."]})}),"\n",(0,t.jsx)(a.h3,{id:"example-2",children:"Example"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-markup",children:'<DataGrid Name="MyDataGrid"\n          xmlns:model="using:MyApp.Models"  >\n  <DataGrid.Columns>\n    <DataGridTextColumn Header="First Name" Binding="{Binding FirstName}" Width="2*" FontSize="{Binding #FontSizeSlider.Value, Mode=OneWay}" />\n    <DataGridTextColumn Header="Last Name" Binding="{Binding LastName}" Width="2*" FontSize="{Binding #FontSizeSlider.Value, Mode=OneWay}" />\n    <DataGridTemplateColumn Header="Age">\n      <DataGridTemplateColumn.CellTemplate>\n        <DataTemplate DataType="model:Person">\n          <TextBlock Text="{Binding Age, StringFormat=\'{}{0} years\'}" VerticalAlignment="Center" HorizontalAlignment="Center" />\n        </DataTemplate>\n      </DataGridTemplateColumn.CellTemplate>\n      <DataGridTemplateColumn.CellEditingTemplate>\n        <DataTemplate DataType="model:Person">\n          <NumericUpDown Value="{Binding Age}" FormatString="N0" HorizontalAlignment="Stretch" Minimum="0" Maximum="120"  />\n        </DataTemplate>\n      </DataGridTemplateColumn.CellEditingTemplate>\n    </DataGridTemplateColumn>\n  </DataGrid.Columns>\n</DataGrid>\n'})}),"\n",(0,t.jsx)(a.h3,{id:"api-reference-2",children:"API Reference"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"http://reference.avaloniaui.net/api/Avalonia.Controls/DataGridTemplateColumn/",children:"DataGridTemplateColumn"})}),"\n",(0,t.jsx)(a.h3,{id:"source-code-2",children:"Source code"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls.DataGrid/DataGridTemplateColumn.cs",children:"DataGridTemplateColumn.cs"})})]})}function m(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>r,a:()=>d});var t=n(67294);const i={},l=t.createContext(i);function d(e){const a=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(l.Provider,{value:a},e.children)}}}]);