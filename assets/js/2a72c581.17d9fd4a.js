"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[46870],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),d=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=d(t),u=r,b=p["".concat(s,".").concat(u)]||p[u]||m[u]||l;return t?o.createElement(b,i(i({ref:n},c),{},{components:t})):o.createElement(b,i({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:r,i[1]=a;for(var d=2;d<l;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},68703:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var o=t(87462),r=(t(67294),t(3905));const l={description:"REFERENCE - Built-in Controls"},i="Tree View",a={unversionedId:"reference/controls/detailed-reference/treeview-1",id:"reference/controls/detailed-reference/treeview-1",title:"Tree View",description:"REFERENCE - Built-in Controls",source:"@site/docs/reference/controls/detailed-reference/treeview-1.md",sourceDirName:"reference/controls/detailed-reference",slug:"/reference/controls/detailed-reference/treeview-1",permalink:"/avalonia-docs/docs/next/reference/controls/detailed-reference/treeview-1",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/reference/controls/detailed-reference/treeview-1.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Controls"},sidebar:"documentationSidebar",previous:{title:"Tree Data Grid Column Types",permalink:"/avalonia-docs/docs/next/reference/controls/detailed-reference/treedatagrid/treedatagrid-column-types"},next:{title:"Uniform Grid",permalink:"/avalonia-docs/docs/next/reference/controls/detailed-reference/uniform-grid"}},s={},d=[{value:"Example",id:"example",level:2},{value:"More Information",id:"more-information",level:2}],c={toc:d},p="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tree-view"},"Tree View"),(0,r.kt)("p",null,"The tree view control can present hierarchical data and allows item selection. The items are templated so you can customise how they are displayed."," "),(0,r.kt)("p",null,"There are two data sources: the main items source for the control, this gives the root of the hierarchical data. Then then there is the items source in the item template which allows the control to list the next level in the hierarchical data."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"This example uses a MVVM pattern view model to hold some hierarchical data based on a C# node class. In this example, there is a single root node in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Nodes")," collection of the view model:"," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<TreeView ItemsSource="{Binding Nodes}">\n  <TreeView.ItemTemplate>\n    <TreeDataTemplate ItemsSource="{Binding SubNodes}">\n      <TextBlock Text="{Binding Title}"/>\n    </TreeDataTemplate>\n  </TreeView.ItemTemplate>\n</TreeView>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"title='C# View Model'",title:"'C#",View:!0,"Model'":!0},'using AvaloniaControls.Models;\nusing System.Collections.ObjectModel;\n\nnamespace AvaloniaControls.ViewModels\n{\n    public class MainWindowViewModel : ViewModelBase\n    {\n        public ObservableCollection<Node> Nodes{ get; }\n\n        public MainWindowViewModel()\n        {\n            Nodes = new ObservableCollection<Node>\n            {                \n                new Node("Animals", new ObservableCollection<Node>\n                {\n                    new Node("Mammals", new ObservableCollection<Node>\n                    {\n                        new Node("Lion"), new Node("Cat"), new Node("Zebra")\n                    })\n                })\n            };\n        }\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"title='C# Node Class'",title:"'C#",Node:!0,"Class'":!0},"using System.Collections.ObjectModel;\n\nnamespace AvaloniaControls.Models\n{\n    public class Node\n    {\n        public ObservableCollection<Node>? SubNodes { get; }\n        public string Title { get; }\n  \n        public Node(string title)\n        {\n            Title = title;\n        }\n\n        public Node(string title, ObservableCollection<Node> subNodes)\n        {\n            Title = title;\n            SubNodes = subNodes;\n        }\n    }\n}\n")),(0,r.kt)("p",null,"By default the root node (or nodes) is shown. The user can expand or contract each node by clicking on the adjacent arrow. Clicking on the node title selects the item."),(0,r.kt)("img",{src:"/img/gitbook-import/assets/tree1.gif",alt:""}),(0,r.kt)("p",null,"This is a development of the previous example with multiple root nodes, a revised item template, and an initial selection made in the view model code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<TreeView Margin="10"\n          ItemsSource="{Binding Nodes}" \n          SelectedItems="{Binding SelectedNodes}"\n          SelectionMode="Multiple">\n  <TreeView.ItemTemplate>\n    <TreeDataTemplate ItemsSource="{Binding SubNodes}">\n      <Border HorizontalAlignment="Left"\n              BorderBrush="Gray" BorderThickness="1"\n              CornerRadius="5" Padding="15 3">\n        <TextBlock Text="{Binding Title}" />\n      </Border>\n    </TreeDataTemplate>\n  </TreeView.ItemTemplate>\n</TreeView>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"title='C# View Model'",title:"'C#",View:!0,"Model'":!0},'using AvaloniaControls.Models;\nusing System.Collections.ObjectModel;\nusing System.Linq;\n\nnamespace AvaloniaControls.ViewModels\n{\n    public class MainWindowViewModel : ViewModelBase\n    {\n        public ObservableCollection<Node> Nodes { get; }\n        public ObservableCollection<Node> SelectedNodes { get; }\n\n        public MainWindowViewModel()\n        {\n            SelectedNodes = new ObservableCollection<Node>();\n            Nodes = new ObservableCollection<Node>\n            {                \n                new Node("Animals", new ObservableCollection<Node>\n                {\n                    new Node("Mammals", new ObservableCollection<Node>\n                    {\n                        new Node("Lion"), new Node("Cat"), new Node("Zebra")\n                    })\n                }),\n                new Node("Birds", new ObservableCollection<Node>\n                {\n                    new Node("Robin"), new Node("Condor"), \n                    new Node("Parrot"), new Node("Eagle")\n                }),\n                new Node("Insects", new ObservableCollection<Node>\n                {\n                    new Node("Locust"), new Node("House Fly"), \n                    new Node("Butterfly"), new Node("Moth")\n                }),\n            };\n\n            var moth = Nodes.Last().SubNodes?.Last();\n            if (moth!=null) SelectedNodes.Add(moth);    \n        }\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"title='C# Node Class'",title:"'C#",Node:!0,"Class'":!0},"using System.Collections.ObjectModel;\n\nnamespace AvaloniaControls.Models\n{\n    public class Node\n    {\n        public ObservableCollection<Node>? SubNodes { get; }\n        public string Title { get; }\n  \n        public Node(string title)\n        {\n            Title = title;\n        }\n\n        public Node(string title, ObservableCollection<Node> subNodes)\n        {\n            Title = title;\n            SubNodes = subNodes;\n        }\n    }\n}\n")),(0,r.kt)("p",null,"The tree view adds a scroll bar when it is needed. The selection can be extended by holding down the Ctrl key."," "),(0,r.kt)("img",{src:"/img/gitbook-import/assets/tree2.gif",alt:""}),(0,r.kt)("h2",{id:"more-information"},"More Information"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For the complete API documentation about this control, see ",(0,r.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/TreeView/"},"here"),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"View the source code on ",(0,r.kt)("em",{parentName:"p"},"GitHub")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/TreeView.cs"},(0,r.kt)("inlineCode",{parentName:"a"},"TreeView.cs")))))}m.isMDXComponent=!0}}]);