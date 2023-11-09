"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[78614],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var l=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,k=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return n?l.createElement(k,a(a({ref:t},d),{},{components:n})):l.createElement(k,a({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:i,a[1]=r;for(var c=2;c<o;c++)a[c]=n[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var l=n(87462),i=(n(67294),n(3905));const o=n.p+"assets/images/listbox1-c73e7c825948c40712127bd9cfd6a8f1.gif",a=n.p+"assets/images/listbox2-e3a2981c5c0809830c022a520078f853.gif",r=n.p+"assets/images/image (6) (1) (4)-ff9259872513332901636a348f5ae4c7.png",s=n.p+"assets/images/listbox3-ed902919943e8df5a8fde26bbab9fefb.gif",c={description:"REFERENCE - Built-in Controls"},d="List Box",p={unversionedId:"reference/controls/listbox",id:"reference/controls/listbox",title:"List Box",description:"REFERENCE - Built-in Controls",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/controls/listbox.md",sourceDirName:"reference/controls",slug:"/reference/controls/listbox",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/listbox",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/reference/controls/listbox.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Controls"},sidebar:"documentationSidebar",previous:{title:"Layout Transform Control",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/layouttransformcontrol"},next:{title:"Masked Text Box",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/maskedtextbox"}},m={},u=[{value:"Useful Properties",id:"useful-properties",level:2},{value:"Selection Mode",id:"selection-mode",level:2},{value:"Example",id:"example",level:2},{value:"Item Template",id:"item-template",level:2},{value:"Item Styling",id:"item-styling",level:2},{value:"More Information",id:"more-information",level:3}],k={toc:u},h="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,l.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"list-box"},"List Box"),(0,i.kt)("p",null,"The list box displays items from an items source collection, on multiple lines, and allows individual or multiple selection."),(0,i.kt)("p",null,"The items in the list can be composed, bound and templated."),(0,i.kt)("p",null,"The list height expands to fit all the items unless set specifically (using the height attribute), or set by a containing control, such as the dock panel."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To learn more about the dock panel, see the reference page ",(0,i.kt)("a",{parentName:"p",href:"/avalonia-docs/zh-Hans/docs/next/reference/controls/dockpanel"},"here"),".")),(0,i.kt)("p",null,"When the height is constrained, and the total item height is larger, then the built-in scroll viewer in the list box will display a vertical scrollbar."),(0,i.kt)("p",null,"Similarly when the width of any item exceeds the width of the list box, then the built-in scroll viewer in the list box will display a horizontal scrollbar (unless prevented - see below)."),(0,i.kt)("h2",{id:"useful-properties"},"Useful Properties"),(0,i.kt)("p",null,"You will probably use these properties most often:"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{width:"289"},"Property"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"Items")),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"SelectedIndex")),(0,i.kt)("td",null,"The (zero-based) index of the selected item, or in the case of multiple selection the first selected item.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"SelectedItem")),(0,i.kt)("td",null,"The selected item (object) from the items collection, or in the case of multiple selection the first selected item.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"SelectedItems")),(0,i.kt)("td",null,"The selected items in a list.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"Selection")),(0,i.kt)("td",null,"An ",(0,i.kt)("code",null,"ISelectionModel")," object with various methods to track multiple selected items. This is is optimized for a large items collection.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"SelectionMode")),(0,i.kt)("td",null,"The mode of selection, see table below.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("p",null,(0,i.kt)("code",null,"ScrollViewer.Horizontal")),(0,i.kt)("p",null,(0,i.kt)("code",null,"ScrollBarVisibility"))),(0,i.kt)("td",null,"The horizontal scrollbar visibility for the built-in scroll viewer. Options are 'Disabled' (default), 'Auto', 'Hidden' and 'Visible'. When disabled, overflow is hidden. ")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("p",null,(0,i.kt)("code",null,"ScrollViewer.Vertical")),(0,i.kt)("p",null,(0,i.kt)("code",null,"ScrollBarVisibility"))),(0,i.kt)("td",null,"The vertical scrollbar visibility for the built-in scroll viewer. Options are 'Disabled', 'Auto' (default), 'Hidden' and 'Visible'. When disabled, overflow is hidden. ")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To optimize performance when the items collection is large, use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ISelectionModel")," is recommended."," ")),(0,i.kt)("h2",{id:"selection-mode"},"Selection Mode"),(0,i.kt)("p",null,"The following selection modes are available for the list box:"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{width:"237"},"Selection Mode"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"Single")),(0,i.kt)("td",null,"Only a single item can be selected (default).")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"Multiple")),(0,i.kt)("td",null,"Multiple items can be selected.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"Toggle")),(0,i.kt)("td",null,"Item selection can be toggled by tapping/spacebar. When not enabled, shift or ctrl must be used to select multiple items.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"AlwaysSelected")),(0,i.kt)("td",null,"An item will always be selected as long as there are items to select.")))),(0,i.kt)("p",null,"These values can be combined, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'<ListBox SelectionMode="Multiple,Toggle">\n')),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"This simple example has the ",(0,i.kt)("inlineCode",{parentName:"p"},"Items")," property set to an array in the C# code-behind."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<StackPanel Margin="20">\n  <TextBlock Margin="0 5">Choose an animal:</TextBlock>\n  <ListBox x:Name="animals"/>\n</StackPanel>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"title='C#'",title:"'C#'"},'using Avalonia.Controls;\nusing System.Linq;\n\nnamespace AvaloniaControls.Views\n{\n    public partial class MainWindow : Window\n    {\n        public MainWindow()\n        {\n            InitializeComponent();\n            animals.Items = new string[]\n                {"cat", "camel", "cow", "chameleon", "mouse", "lion", "zebra" }\n            .OrderBy(x => x);\n        }\n    }\n}\n')),(0,i.kt)("img",{src:o,alt:""}),(0,i.kt)("h2",{id:"item-template"},"Item Template"),(0,i.kt)("p",null,"You can customize how an item is displayed by using an ",(0,i.kt)("strong",{parentName:"p"},"data template")," inside the list box ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTemplate")," element."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To review the concepts behind ",(0,i.kt)("strong",{parentName:"p"},"data template"),", see ",(0,i.kt)("a",{parentName:"p",href:"../../concepts/templates/"},"here"),".")),(0,i.kt)("p",null,"This example displays each item inside a blue border with rounded corners. The C# code-behind is the same as before:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<DockPanel Margin="20">\n  <TextBlock Margin="0 5" DockPanel.Dock="Top">Choose an animal:</TextBlock>\n  <ListBox x:Name="animals">\n    <ListBox.ItemTemplate>\n      <DataTemplate>\n        <Border BorderBrush="Blue" BorderThickness="1" \n                CornerRadius="4" Padding="4">\n          <TextBlock Text="{Binding}"/>\n        </Border>\n      </DataTemplate>\n    </ListBox.ItemTemplate>\n  </ListBox>\n</DockPanel>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"title='C#'",title:"'C#'"},'using Avalonia.Controls;\nusing System.Linq;\n\nnamespace AvaloniaControls.Views\n{\n    public partial class MainWindow : Window\n    {\n        public MainWindow()\n        {\n            InitializeComponent();\n            animals.Items = new string[]\n                {"cat", "camel", "cow", "chameleon", "mouse", "lion", "zebra" }\n            .OrderBy(x => x);\n        }\n    }\n}\n')),(0,i.kt)("p",null,"The list is the fill area of the dock panel here, so its height is set to the remaining. This shows the scrollbar in the list box."),(0,i.kt)("img",{src:a,alt:""}),(0,i.kt)("h2",{id:"item-styling"},"Item Styling"),(0,i.kt)("p",null,"Each item displayed in a list box is drawn inside a ",(0,i.kt)("inlineCode",{parentName:"p"},"ListBoxItem")," element. You can see this using the ",(0,i.kt)("em",{parentName:"p"},"Avalonia UI Dev Tools")," (F12), using the ",(0,i.kt)("strong",{parentName:"p"},"Visual Tools")," tab. For example:"),(0,i.kt)("img",{src:r,alt:""}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ListBoxItem")," element acts as a container for the content specified in a ",(0,i.kt)("inlineCode",{parentName:"p"},"ListBox.ItemTemplate")," element; but it is not ever defined in the XAML, instead it is generated by ",(0,i.kt)("em",{parentName:"p"},"Avalonia UI"),"."),(0,i.kt)("p",null,"This means you can target a style to customize the ",(0,i.kt)("inlineCode",{parentName:"p"},"ListBoxItem")," elements in a list box. For example, to give the list items a fixed width of 200 and then right-align them:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<DockPanel Margin="20">\n  <TextBlock Margin="0 5" DockPanel.Dock="Top">Choose an animal:</TextBlock>\n  <ListBox x:Name="animals">\n    <ListBox.Styles>\n      <Style Selector="ListBoxItem">\n        <Setter Property="Width" Value="200"/>\n        <Setter Property="HorizontalAlignment" Value="Right"/>\n      </Style>\n    </ListBox.Styles>\n  </ListBox>\n</DockPanel>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"title='C#'",title:"'C#'"},'using Avalonia.Controls;\nusing System.Linq;\n\nnamespace AvaloniaControls.Views\n{\n    public partial class MainWindow : Window\n    {\n        public MainWindow()\n        {\n            InitializeComponent();\n            animals.Items = new string[]\n                {"cat", "camel", "cow", "chameleon", "mouse", "lion", "zebra" }\n            .OrderBy(x => x);\n        }\n    }\n}code\n')),(0,i.kt)("img",{src:s,alt:""}),(0,i.kt)("h3",{id:"more-information"},"More Information"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For the complete API documentation about this control, see ",(0,i.kt)("a",{parentName:"p",href:"https://reference.avaloniaui.net/api/Avalonia.Controls/ListBox/"},"here"),".")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"View the source code on ",(0,i.kt)("em",{parentName:"p"},"GitHub")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/ListBox.cs"},(0,i.kt)("inlineCode",{parentName:"a"},"ListBox.cs")))))}b.isMDXComponent=!0}}]);