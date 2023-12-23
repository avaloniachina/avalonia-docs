"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[85836],{40368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>r});var i=n(85893),l=n(11151);const s={id:"listbox",title:"ListBox"},o=void 0,c={id:"controls/listbox",title:"ListBox",description:"The ListBox is an ItemsControl which displays items in a multi-line list box and allows individual selection.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/controls/listbox.md",sourceDirName:"controls",slug:"/controls/listbox",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/controls/listbox",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/controls/listbox.md",tags:[],version:"0.10.x",frontMatter:{id:"listbox",title:"ListBox"},sidebar:"documentationSidebar",previous:{title:"LayoutTransformControl",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/controls/layouttransformcontrol"},next:{title:"MaskedTextBox",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/controls/maskedtextbox"}},d={},r=[{value:"Customizing the item display",id:"customizing-the-item-display",level:2},{value:"Containers",id:"containers",level:2},{value:"Selection",id:"selection",level:2},{value:"SelectionMode",id:"selectionmode",level:3},{value:"SelectedIndex",id:"selectedindex",level:3},{value:"SelectedItem",id:"selecteditem",level:3},{value:"Selection",id:"selection-1",level:3},{value:"SelectedItems",id:"selecteditems",level:3},{value:"Preventing Horizontal Scrolling",id:"preventing-horizontal-scrolling",level:2},{value:"Source code",id:"source-code",level:2}];function a(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"ListBox"})," is an ",(0,i.jsx)(t.code,{children:"ItemsControl"})," which displays items in a multi-line list box and allows individual selection."]}),"\n",(0,i.jsxs)(t.p,{children:["The items to display in the ",(0,i.jsx)(t.code,{children:"ListBox"})," are specified using the ",(0,i.jsx)(t.code,{children:"Items"})," property. This property will often be bound to a collection on the control's ",(0,i.jsx)(t.code,{children:"DataContext"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-markup",children:'<ListBox Items="{Binding MyItems}"/>\n'})}),"\n",(0,i.jsx)(t.h2,{id:"customizing-the-item-display",children:"Customizing the item display"}),"\n",(0,i.jsxs)(t.p,{children:["You can customize how an item is displayed by specifying an ",(0,i.jsx)(t.code,{children:"ItemTemplate"}),". For example to display each item inside a red border with rounded corners:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-markup",children:'<ListBox Items="{Binding MyItems}">\n    <ListBox.ItemTemplate>\n        <DataTemplate>\n            <Border Background="Red" CornerRadius="4" Padding="4">\n                <TextBlock Text="{Binding}"/>\n            </Border>\n        </DataTemplate>\n    </ListBox.ItemTemplate>\n</ListBox>\n'})}),"\n",(0,i.jsx)(t.h2,{id:"containers",children:"Containers"}),"\n",(0,i.jsxs)(t.p,{children:["Each item displayed in a ",(0,i.jsx)(t.code,{children:"ListBox"})," will be wrapped in a ",(0,i.jsx)(t.code,{children:"ListBoxItem"})," - this is called the ",(0,i.jsx)(t.em,{children:"container"}),". The container hosts the content specified in the ",(0,i.jsx)(t.code,{children:"ItemTemplate"})," but it is not part of the ",(0,i.jsx)(t.code,{children:"ItemTemplate"})," itself. It is the container that contains the logic for displaying selected items."]}),"\n",(0,i.jsxs)(t.p,{children:["Sometimes you will want to customize the container itself. You can do this by including a style targeting ",(0,i.jsx)(t.code,{children:"ListBoxItem"})," in the ",(0,i.jsx)(t.code,{children:"ListBox"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-markup",children:'<ListBox Items="{Binding Items}">\n    <ListBox.Styles>\n        \x3c!-- Give the ListBoxItems a fixed with of 100 and right-align them --\x3e\n        <Style Selector="ListBoxItem">\n            <Setter Property="Width" Value="100"/>\n            <Setter Property="HorizontalAlignment" Value="Right"/>\n        </Style>\n    </ListBox.Styles>\n</ListBox>\n'})}),"\n",(0,i.jsxs)(t.p,{children:["In WPF and UWP this is done via the ",(0,i.jsx)(t.code,{children:"ItemContainerStyle"})," - this property does not exist in Avalonia; you should use the method outlined above."]}),"\n",(0,i.jsx)(t.h2,{id:"selection",children:"Selection"}),"\n",(0,i.jsxs)(t.p,{children:["There are several properties related to selection on ",(0,i.jsx)(t.code,{children:"ListBox"}),":"]}),"\n",(0,i.jsxs)(t.p,{children:["It is recommended that you only bind one of the ",(0,i.jsx)(t.code,{children:"SelectedIndex"}),", ",(0,i.jsx)(t.code,{children:"SelectedItem"}),", ",(0,i.jsx)(t.code,{children:"SelectedItems"})," or ",(0,i.jsx)(t.code,{children:"Selection"})," properties."]}),"\n",(0,i.jsx)(t.h3,{id:"selectionmode",children:"SelectionMode"}),"\n",(0,i.jsxs)(t.p,{children:["Controls the type of selection that can be made on the ",(0,i.jsx)(t.code,{children:"ListBox"}),":"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"Single"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Only a single item can be selected (default)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"Multiple"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Multiple items can be selected"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"Toggle"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Item selection can be toggled by tapping/spacebar. When not enabled, shift or ctrl must be used to select multiple items"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"AlwaysSelected"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"An item will always be selected as long as there are items to select."})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"These values can be combined, e.g.:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-markup",children:'<ListBox SelectionMode="Multiple,Toggle"/>\n'})}),"\n",(0,i.jsx)(t.h3,{id:"selectedindex",children:"SelectedIndex"}),"\n",(0,i.jsxs)(t.p,{children:["Exposes the index of the selected item, or in the case of multiple selection the first selected item. You will often want to bind this to a view model if your list ",(0,i.jsx)(t.code,{children:"SelectionMode"})," is set to ",(0,i.jsx)(t.code,{children:"Single"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-markup",children:'<ListBox SelectedIndex="{Binding SelectedIndex}"/>\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:"public MyViewModel : ReactiveObject\n{\n    int selectedIndex;\n\n    public int SelectedIndex\n    {\n        get => selectedIndex;\n        set => this.RaiseAndSetIfChanged(ref selectedIndex, value);\n    }\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"By default bindings to this property are two-way."}),"\n",(0,i.jsx)(t.h3,{id:"selecteditem",children:"SelectedItem"}),"\n",(0,i.jsxs)(t.p,{children:["Exposes the selected item in the ",(0,i.jsx)(t.code,{children:"Items"})," collection, or in the case of multiple selection the first selected item. You will often want to bind this to a view model if your list ",(0,i.jsx)(t.code,{children:"SelectionMode"})," is set to ",(0,i.jsx)(t.code,{children:"Single"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-markup",children:'<ListBox SelectedItem="{Binding SelectedItem}"/>\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:"public MyViewModel : ReactiveObject\n{\n    MyItem selectedItem;\n\n    public MyItem SelectedItem\n    {\n        get => selectedItem;\n        set => this.RaiseAndSetIfChanged(ref selectedItem, value);\n    }\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"By default bindings to this property are two-way."}),"\n",(0,i.jsxs)(t.p,{children:["Do not bind to this property if your ",(0,i.jsx)(t.code,{children:"Items"})," collection contains duplicates as it is impossible to distinguish between duplicate values."]}),"\n",(0,i.jsx)(t.h3,{id:"selection-1",children:"Selection"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"Selection"})," property exposes an ",(0,i.jsx)(t.code,{children:"ISelectionModel"})," object with various methods to track multiple selected items. You can create a ",(0,i.jsx)(t.code,{children:"SelectionModel"})," object in your view model and bind it to this property and subsequently control the selection from your view model."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"ISelectionModel"})," is optimized for large collections. Because of this it is recommended that you use this property in preference to ",(0,i.jsx)(t.code,{children:"SelectedItems"})," for performance reasons."]}),"\n",(0,i.jsxs)(t.p,{children:["Once ",(0,i.jsx)(t.code,{children:"Selection"})," is bound to a ",(0,i.jsx)(t.code,{children:"SelectionModel"}),", ",(0,i.jsx)(t.code,{children:"SelectedItems"})," will no longer function."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"SelectionModel"})," also exposes batching functionality through its ",(0,i.jsx)(t.code,{children:"Update()"})," method and a ",(0,i.jsx)(t.code,{children:"SelectionChanged"})," event which details exactly which items have been selected and deselected."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-markup",children:'<ListBox Items="{Binding Items}" Selection="{Binding Selection}"/>\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:"public class MyViewModel\n{\n    public MyViewModel()\n    {\n        Items = CreateItems();\n\n        // SelectionModel.Source can be set to Items here, or if it is left null it will be set by\n        // the `ListBox` when bound.\n        Selection = new SelectionModel();\n        Selection.SelectionChanged += SelectionChanged;\n\n        // Select item 10 in Items.\n        Selection.Select(10);\n    }\n\n    public ObservableCollection<MyItem> Items { get; }\n    public SelectionModel Selection { get; }\n\n    // A method bound to e.g. a button which will select the first 100 items.\n    public void SelectFirst100() => Selection.SelectRange(0, 99);\n\n    // Switch to single selection via the view model.\n    public void SwitchToSingleSelect() => Selection.SingleSelect = true;\n\n    void SelectionChanged(object sender, SelectionModelSelectionChangedEventArgs e)\n    {\n        // ... handle selection changed\n    }\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"By default bindings to this property are one-way."}),"\n",(0,i.jsx)(t.h3,{id:"selecteditems",children:"SelectedItems"}),"\n",(0,i.jsxs)(t.p,{children:["This property holds the selected items in an ",(0,i.jsx)(t.code,{children:"IList"}),". It can be bound to any list that implements ",(0,i.jsx)(t.code,{children:"IList"})," but it will usually be bound to a collection which also implements ",(0,i.jsx)(t.code,{children:"INotifyCollectionChanged"})," such as ",(0,i.jsx)(t.code,{children:"ObservableCollection<>"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["For various reasons the performance of ",(0,i.jsx)(t.code,{children:"SelectedItems"})," can be very poor, particularly on large collections. It is recommended that you use the ",(0,i.jsx)(t.code,{children:"Selection"})," property instead."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-markup",children:'<ListBox SelectedItems="{Binding SelectedItems}"/>\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:"public MyViewModel : ReactiveObject\n{\n    public ObservableCollection<MyItem> SelectedItems { get; } = new ObservableCollection<MyItem>();\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"preventing-horizontal-scrolling",children:"Preventing Horizontal Scrolling"}),"\n",(0,i.jsxs)(t.p,{children:["By default if an item is too wide to display in the ",(0,i.jsx)(t.code,{children:"ListBox"}),", a horizontal scrollbar will be displayed. If instead you want items to be constrained to the width of the ",(0,i.jsx)(t.code,{children:"ListBox"})," (for example if you want wrapping text in the items) you can disable the horizontal scrollbar by setting ",(0,i.jsx)(t.code,{children:'ScrollViewer.HorizontalScrollBarVisibility="Disabled"'}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-markup",children:'<ListBox Items="{Binding MyItems}" Width="250" ScrollViewer.HorizontalScrollBarVisibility="Disabled">\n    <ListBox.ItemTemplate>\n        <DataTemplate>\n            <Border Background="Red" CornerRadius="4" Padding="4">\n                <TextBlock Text="{Binding}" TextWrapping="Wrap"/>\n            </Border>\n        </DataTemplate>\n    </ListBox.ItemTemplate>\n</ListBox>\n'})}),"\n",(0,i.jsx)(t.h2,{id:"source-code",children:"Source code"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/ListBox.cs",children:"ListBox.cs"})})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var i=n(67294);const l={},s=i.createContext(l);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);