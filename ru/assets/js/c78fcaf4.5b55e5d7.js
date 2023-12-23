"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[87543],{9008:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var t=o(85893),i=o(11151);const l=o.p+"assets/images/tree1-c422200606b63b89a19463156ea90ecf.gif",s=o.p+"assets/images/tree2-fc80bde52e1d51e43d8f4fc519926345.gif",r={description:"REFERENCE - Built-in Controls"},a="Tree View",d={id:"reference/controls/detailed-reference/treeview-1",title:"Tree View",description:"REFERENCE - Built-in Controls",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/reference/controls/detailed-reference/treeview-1.md",sourceDirName:"reference/controls/detailed-reference",slug:"/reference/controls/detailed-reference/treeview-1",permalink:"/avalonia-docs/ru/docs/reference/controls/detailed-reference/treeview-1",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/ru/docusaurus-plugin-content-docs/current/reference/controls/detailed-reference/treeview-1.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Controls"},sidebar:"documentationSidebar",previous:{title:"Tree Data Grid Column Types",permalink:"/avalonia-docs/ru/docs/reference/controls/detailed-reference/treedatagrid/treedatagrid-column-types"},next:{title:"Uniform Grid",permalink:"/avalonia-docs/ru/docs/reference/controls/detailed-reference/uniform-grid"}},c={},u=[{value:"Example",id:"example",level:2},{value:"More Information",id:"more-information",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"tree-view",children:"Tree View"}),"\n",(0,t.jsx)(n.p,{children:"The tree view control can present hierarchical data and allows item selection. The items are templated so you can customise how they are displayed."}),"\n",(0,t.jsx)(n.p,{children:"There are two data sources: the main items source for the control, this gives the root of the hierarchical data. Then there is the items source in the item template which allows the control to list the next level in the hierarchical data."}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["This example uses a MVVM pattern view model to hold some hierarchical data based on a C# node class. In this example, there is a single root node in the ",(0,t.jsx)(n.code,{children:"Nodes"})," collection of the view model:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<TreeView ItemsSource="{Binding Nodes}">\n  <TreeView.ItemTemplate>\n    <TreeDataTemplate ItemsSource="{Binding SubNodes}">\n      <TextBlock Text="{Binding Title}"/>\n    </TreeDataTemplate>\n  </TreeView.ItemTemplate>\n</TreeView>\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",metastring:"title='C# View Model'",children:'using AvaloniaControls.Models;\nusing System.Collections.ObjectModel;\n\nnamespace AvaloniaControls.ViewModels\n{\n    public class MainWindowViewModel : ViewModelBase\n    {\n        public ObservableCollection<Node> Nodes{ get; }\n\n        public MainWindowViewModel()\n        {\n            Nodes = new ObservableCollection<Node>\n            {                \n                new Node("Animals", new ObservableCollection<Node>\n                {\n                    new Node("Mammals", new ObservableCollection<Node>\n                    {\n                        new Node("Lion"), new Node("Cat"), new Node("Zebra")\n                    })\n                })\n            };\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",metastring:"title='C# Node Class'",children:"using System.Collections.ObjectModel;\n\nnamespace AvaloniaControls.Models\n{\n    public class Node\n    {\n        public ObservableCollection<Node>? SubNodes { get; }\n        public string Title { get; }\n  \n        public Node(string title)\n        {\n            Title = title;\n        }\n\n        public Node(string title, ObservableCollection<Node> subNodes)\n        {\n            Title = title;\n            SubNodes = subNodes;\n        }\n    }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"By default the root node (or nodes) is shown. The user can expand or contract each node by clicking on the adjacent arrow. Clicking on the node title selects the item."}),"\n",(0,t.jsx)("img",{src:l,alt:""}),"\n",(0,t.jsx)(n.p,{children:"This is a development of the previous example with multiple root nodes, a revised item template, and an initial selection made in the view model code:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<TreeView Margin="10"\n          ItemsSource="{Binding Nodes}" \n          SelectedItems="{Binding SelectedNodes}"\n          SelectionMode="Multiple">\n  <TreeView.ItemTemplate>\n    <TreeDataTemplate ItemsSource="{Binding SubNodes}">\n      <Border HorizontalAlignment="Left"\n              BorderBrush="Gray" BorderThickness="1"\n              CornerRadius="5" Padding="15 3">\n        <TextBlock Text="{Binding Title}" />\n      </Border>\n    </TreeDataTemplate>\n  </TreeView.ItemTemplate>\n</TreeView>\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",metastring:"title='C# View Model'",children:'using AvaloniaControls.Models;\nusing System.Collections.ObjectModel;\nusing System.Linq;\n\nnamespace AvaloniaControls.ViewModels\n{\n    public class MainWindowViewModel : ViewModelBase\n    {\n        public ObservableCollection<Node> Nodes { get; }\n        public ObservableCollection<Node> SelectedNodes { get; }\n\n        public MainWindowViewModel()\n        {\n            SelectedNodes = new ObservableCollection<Node>();\n            Nodes = new ObservableCollection<Node>\n            {                \n                new Node("Animals", new ObservableCollection<Node>\n                {\n                    new Node("Mammals", new ObservableCollection<Node>\n                    {\n                        new Node("Lion"), new Node("Cat"), new Node("Zebra")\n                    })\n                }),\n                new Node("Birds", new ObservableCollection<Node>\n                {\n                    new Node("Robin"), new Node("Condor"), \n                    new Node("Parrot"), new Node("Eagle")\n                }),\n                new Node("Insects", new ObservableCollection<Node>\n                {\n                    new Node("Locust"), new Node("House Fly"), \n                    new Node("Butterfly"), new Node("Moth")\n                }),\n            };\n\n            var moth = Nodes.Last().SubNodes?.Last();\n            if (moth!=null) SelectedNodes.Add(moth);    \n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",metastring:"title='C# Node Class'",children:"using System.Collections.ObjectModel;\n\nnamespace AvaloniaControls.Models\n{\n    public class Node\n    {\n        public ObservableCollection<Node>? SubNodes { get; }\n        public string Title { get; }\n  \n        public Node(string title)\n        {\n            Title = title;\n        }\n\n        public Node(string title, ObservableCollection<Node> subNodes)\n        {\n            Title = title;\n            SubNodes = subNodes;\n        }\n    }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"The tree view adds a scroll bar when it is needed. The selection can be extended by holding down the Ctrl key."}),"\n",(0,t.jsx)("img",{src:s,alt:""}),"\n",(0,t.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["For the complete API documentation about this control, see ",(0,t.jsx)(n.a,{href:"http://reference.avaloniaui.net/api/Avalonia.Controls/TreeView/",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["View the source code on ",(0,t.jsx)(n.em,{children:"GitHub"})," ",(0,t.jsx)(n.a,{href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/TreeView.cs",children:(0,t.jsx)(n.code,{children:"TreeView.cs"})})]})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>s});var t=o(67294);const i={},l=t.createContext(i);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);