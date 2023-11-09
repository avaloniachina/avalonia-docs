"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[80300],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=o.createContext({}),c=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(m.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(n),b=a,u=p["".concat(m,".").concat(b)]||p[b]||d[b]||r;return n?o.createElement(u,l(l({ref:t},s),{},{components:n})):o.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=b;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},48468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>x,frontMatter:()=>m,metadata:()=>s,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const r=n.p+"assets/images/combobox1-c017daab119ca6785ee574e763d9a6be.gif",l=n.p+"assets/images/combobox2-a1c00dd130b42d705b9a0d9e85f8c976.gif",i=n.p+"assets/images/combobox3-6dedb479ee272f17b8174e59e897485c.gif",m={description:"REFERENCE - Built-in Control"},c="Combo Box",s={unversionedId:"reference/controls/combobox",id:"reference/controls/combobox",title:"Combo Box",description:"REFERENCE - Built-in Control",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/controls/combobox.md",sourceDirName:"reference/controls",slug:"/reference/controls/combobox",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/combobox",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/reference/controls/combobox.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Control"},sidebar:"documentationSidebar",previous:{title:"ColorView",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/colorpicker/colorview"},next:{title:"Context Menu",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/contextmenu"}},p={},d=[{value:"Useful Properties",id:"useful-properties",level:2},{value:"Examples",id:"examples",level:2},{value:"More Information",id:"more-information",level:2}],b={toc:d},u="wrapper";function x(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"combo-box"},"Combo Box"),(0,a.kt)("p",null,"The combo box presents a selected item and a drop-down button that displays a list of options. The length and height of the combo box are determined by the selected item, unless otherwise defined."),(0,a.kt)("p",null,"The items in the list can be composed, bound and templated."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To review the concept behind ",(0,a.kt)("strong",{parentName:"p"},"data templates"),", see ",(0,a.kt)("a",{parentName:"p",href:"../../concepts/templates/"},"here"),".")),(0,a.kt)("h2",{id:"useful-properties"},"Useful Properties"),(0,a.kt)("p",null,"You will probably use these properties most often:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Items")),(0,a.kt)("td",{parentName:"tr",align:null},"The list items collection.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"SelectedIndex")),(0,a.kt)("td",{parentName:"tr",align:null},"The index (zero-based) of the selected item.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"SelectedItem")),(0,a.kt)("td",{parentName:"tr",align:null},"The selected item itself.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"SelectedItems")),(0,a.kt)("td",{parentName:"tr",align:null},"A collection of selected items that has more than one item when selection mode is set to multiple.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"AutoScrollToSelectedItem")),(0,a.kt)("td",{parentName:"tr",align:null},"Indicates whether to automatically scroll to newly selected items.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"IsDropDownOpen")),(0,a.kt)("td",{parentName:"tr",align:null},"Indicates whether the dropdown is currently open.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"MaxDropDownHeight")),(0,a.kt)("td",{parentName:"tr",align:null},"The maximum height for the dropdown list. This is the actual height of the list part, not the number of items that show.")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"This is basic example with text items has a limit set on the drop-down list height."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<StackPanel Margin="20">\n  <ComboBox SelectedIndex="0" MaxDropDownHeight="100">\n    <ComboBoxItem>Text Item 1</ComboBoxItem>\n    <ComboBoxItem>Text Item 2</ComboBoxItem>\n    <ComboBoxItem>Text Item 3</ComboBoxItem>\n    <ComboBoxItem>Text Item 4</ComboBoxItem>\n    <ComboBoxItem>Text Item 5</ComboBoxItem>\n    <ComboBoxItem>Text Item 6</ComboBoxItem>\n    <ComboBoxItem>Text Item 7</ComboBoxItem>\n    <ComboBoxItem>Text Item 8</ComboBoxItem>\n    <ComboBoxItem>Text Item 9</ComboBoxItem>\n  </ComboBox>\n</StackPanel>\n')),(0,a.kt)("img",{src:r,alt:""}),(0,a.kt)("p",null,"This example uses a composed view for each item:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<StackPanel Margin="20">\n  <ComboBox SelectedIndex="0">\n    <ComboBoxItem>\n      <Panel>\n        <Ellipse Width="50" Height="50" Fill="Red"/>\n        <TextBlock VerticalAlignment="Center"\n                    HorizontalAlignment="Center">Red</TextBlock>\n      </Panel>\n    </ComboBoxItem>\n    <ComboBoxItem>\n        <Panel>\n          <Ellipse Width="50" Height="50" Fill="Orange"/>\n          <TextBlock VerticalAlignment="Center" \n                      HorizontalAlignment="Center">Amber</TextBlock>\n        </Panel>\n    </ComboBoxItem>\n    <ComboBoxItem>\n      <Panel>\n        <Ellipse Width="50" Height="50" Fill="Green"/>\n        <TextBlock VerticalAlignment="Center"\n                    HorizontalAlignment="Center">Green</TextBlock>\n      </Panel>\n    </ComboBoxItem>\n  </ComboBox>\n</StackPanel>\n')),(0,a.kt)("img",{src:l,alt:""}),(0,a.kt)("p",null,"This example binds the items in a combo box using a data template. The C# code-behind loads the installed font family names and binds them to the items property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<StackPanel Margin="20">\n  <ComboBox x:Name="fontComboBox" SelectedIndex="0"\n            Width="200" MaxDropDownHeight="300">\n    <ComboBox.ItemTemplate>\n      <DataTemplate>\n        <TextBlock Text="{Binding Name}" FontFamily="{Binding}" />\n      </DataTemplate>\n    </ComboBox.ItemTemplate>\n  </ComboBox>\n</StackPanel>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"title='C#'",title:"'C#'"},"using Avalonia.Controls;\nusing Avalonia.Media;\nusing System.Linq;\n\nnamespace AvaloniaControls.Views\n{\n    public partial class MainWindow : Window\n    {\n        public MainWindow()\n        {\n            InitializeComponent();            \n            fontComboBox.Items = FontManager.Current\n                .GetInstalledFontFamilyNames()\n                .Select(x => new FontFamily(x))\n                .OrderBy(x=>x.Name);\n            fontComboBox.SelectedIndex = 0;\n        }\n    }\n}\n")),(0,a.kt)("img",{src:i,alt:""}),(0,a.kt)("h2",{id:"more-information"},"More Information"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For the complete API documentation about this control, see ",(0,a.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/ComboBox/"},"here"),".")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"View the source code on ",(0,a.kt)("em",{parentName:"p"},"GitHub")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/ComboBox.cs"},(0,a.kt)("inlineCode",{parentName:"a"},"ComboBox.cs")))))}x.isMDXComponent=!0}}]);