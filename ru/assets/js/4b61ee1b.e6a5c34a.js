"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[55541],{63046:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var o=t(85893),r=t(11151);const i={id:"treeview",title:"TreeView"},s=void 0,l={id:"controls/treeview",title:"TreeView",description:"The TreeView is a control that presents hierarchical tree data and allows selection of it.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-0.10.x/controls/treeview.md",sourceDirName:"controls",slug:"/controls/treeview",permalink:"/avalonia-docs/ru/docs/0.10.x/controls/treeview",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/ru/docusaurus-plugin-content-docs/version-0.10.x/controls/treeview.md",tags:[],version:"0.10.x",frontMatter:{id:"treeview",title:"TreeView"},sidebar:"documentationSidebar",previous:{title:"ToolTip",permalink:"/avalonia-docs/ru/docs/0.10.x/controls/tooltip"},next:{title:"TransitioningContentControl",permalink:"/avalonia-docs/ru/docs/0.10.x/controls/transitioningcontentcontrol"}},c={},a=[{value:"Reference",id:"reference",level:3},{value:"Source code",id:"source-code",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"TreeView"})," is a control that presents hierarchical tree data and allows selection of it."]}),"\n",(0,o.jsxs)(n.p,{children:["One example for populating a ",(0,o.jsx)(n.code,{children:"TreeView"})," can be from a directory on the computer. You can create a ",(0,o.jsx)(n.code,{children:"TreeView"})," in the ",(0,o.jsx)(n.code,{children:"MainWindow.axaml"})," file in an Avalonia MVVM project."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-markup",children:'<TreeView Items="{Binding Items}" \n\t  Width="400" Height="480" \n\t  HorizontalAlignment="Left">\n\t<TreeView.ItemTemplate>\n\t\t<TreeDataTemplate ItemsSource="{Binding Subfolders}">\n\t\t\t<TextBlock Text="{Binding strNodeText}"/>\n\t\t</TreeDataTemplate>\n\t</TreeView.ItemTemplate>\n</TreeView>\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:"MainWindowViewModel.cs"})," you can add this code which will recursively look up all the subfolders and populate the TreeView from ",(0,o.jsx)(n.code,{children:"Items"})," and ",(0,o.jsx)(n.code,{children:"Subfolders"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'public ObservableCollection<Node> Items { get; }\npublic ObservableCollection<Node> SelectedItems { get; }\npublic string strFolder { get; set; }\n\npublic MainWindowViewModel()\n{\n    strFolder = @"C:\\Users\\hooty\\Desktop"; // EDIT THIS FOR AN EXISTING FOLDER\n\n    Items = new ObservableCollection<Node>();\n\n    Node rootNode = new Node(strFolder);\n    rootNode.Subfolders = GetSubfolders(strFolder);\n    \n    Items.Add(rootNode);\n}\n\npublic ObservableCollection<Node> GetSubfolders(string strPath)\n{\n    ObservableCollection<Node> subfolders = new ObservableCollection<Node>();\n    string[] subdirs = Directory.GetDirectories(strPath, "*", SearchOption.TopDirectoryOnly);\n\n    foreach (string dir in subdirs)\n    {\n        Node thisnode = new Node(dir);\n\n        if (Directory.GetDirectories(dir, "*", SearchOption.TopDirectoryOnly).Length > 0)\n        {\n            thisnode.Subfolders = new ObservableCollection<Node>();\n\n            thisnode.Subfolders = GetSubfolders(dir);\n        }\n\n        subfolders.Add(thisnode);\n    }\n\n    return subfolders;\n}\n\npublic class Node\n{\n    public ObservableCollection<Node> Subfolders { get; set; }\n\n    public string strNodeText { get; }\n    public string strFullPath { get; }\n\n    public Node(string _strFullPath)\n    {\n        strFullPath = _strFullPath;\n        strNodeText = Path.GetFileName(_strFullPath);\n    }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The example project source can be found at ",(0,o.jsx)(n.a,{href:"https://github.com/hootyjeremy/avalonia-treeview-test",children:"avalonia-treeview-test"})]}),"\n",(0,o.jsx)(n.h3,{id:"reference",children:"Reference"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"http://reference.avaloniaui.net/api/Avalonia.Controls/TreeView/",children:"TreeView"})}),"\n",(0,o.jsx)(n.h3,{id:"source-code",children:"Source code"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/TreeView.cs",children:"TreeView.cs"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var o=t(67294);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);