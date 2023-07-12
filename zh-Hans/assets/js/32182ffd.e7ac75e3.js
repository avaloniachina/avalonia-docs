"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[41517],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,u=d["".concat(s,".").concat(m)]||d[m]||b[m]||i;return t?o.createElement(u,l(l({ref:n},p),{},{components:t})):o.createElement(u,l({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[d]="string"==typeof e?e:a,l[1]=r;for(var c=2;c<i;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},92183:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=t(87462),a=(t(67294),t(3905));const i={id:"how-to-bind-to-a-collection",title:"How to Bind to a Collection"},l="How to Bind to a Collection",r={unversionedId:"guides/data-binding/how-to-bind-to-a-collection",id:"guides/data-binding/how-to-bind-to-a-collection",title:"How to Bind to a Collection",description:"Binding to a collection in Avalonia UI is an effective way to display dynamic data. This guide will demonstrate how to bind an ObservableCollection to a control, like a ListBox or ItemsControl, to show a list of items.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/data-binding/how-to-bind-to-a-collection.md",sourceDirName:"guides/data-binding",slug:"/guides/data-binding/how-to-bind-to-a-collection",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/data-binding/how-to-bind-to-a-collection",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/data-binding/how-to-bind-to-a-collection.md",tags:[],version:"current",frontMatter:{id:"how-to-bind-to-a-collection",title:"How to Bind to a Collection"},sidebar:"documentationSidebar",previous:{title:"How To Bind to a Control",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/data-binding/binding-to-controls"},next:{title:"How To Bind from Code",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/data-binding/binding-from-code"}},s={},c=[{value:"Binding to a Simple ObservableCollection",id:"binding-to-a-simple-observablecollection",level:2},{value:"Binding to an ObservableCollection of Complex Objects",id:"binding-to-an-observablecollection-of-complex-objects",level:2}],p={toc:c},d="wrapper";function b(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-bind-to-a-collection"},"How to Bind to a Collection"),(0,a.kt)("p",null,"Binding to a collection in Avalonia UI is an effective way to display dynamic data. This guide will demonstrate how to bind an ",(0,a.kt)("inlineCode",{parentName:"p"},"ObservableCollection")," to a control, like a ",(0,a.kt)("inlineCode",{parentName:"p"},"ListBox")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemsControl"),", to show a list of items."),(0,a.kt)("h2",{id:"binding-to-a-simple-observablecollection"},"Binding to a Simple ObservableCollection"),(0,a.kt)("p",null,"For a start, consider you have an ",(0,a.kt)("inlineCode",{parentName:"p"},"ObservableCollection<string>")," and you want to bind it to a ",(0,a.kt)("inlineCode",{parentName:"p"},"ListBox")," to display a list of string items."),(0,a.kt)("p",null,"Here's an example ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewModel")," with an ",(0,a.kt)("inlineCode",{parentName:"p"},"ObservableCollection<string>"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public class ViewModel : ObservableObject\n{\n    private ObservableCollection<string> _items;\n\n    public ObservableCollection<string> Items\n    {\n        get { return _items; }\n        set { SetProperty(ref _items, value); }\n    }\n\n    public ViewModel()\n    {\n        Items = new ObservableCollection<string> { "Item 1", "Item 2", "Item 3" };\n    }\n}\n')),(0,a.kt)("p",null,"In your view, you can bind this ",(0,a.kt)("inlineCode",{parentName:"p"},"ObservableCollection")," to a ",(0,a.kt)("inlineCode",{parentName:"p"},"ListBox")," like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<ListBox Items="{Binding Items}"/>\n')),(0,a.kt)("h2",{id:"binding-to-an-observablecollection-of-complex-objects"},"Binding to an ObservableCollection of Complex Objects"),(0,a.kt)("p",null,"But what if your ",(0,a.kt)("inlineCode",{parentName:"p"},"ObservableCollection")," contains complex objects that themselves need to propagate changes? Let's modify our ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewModel")," to accommodate this scenario."),(0,a.kt)("p",null,"Consider a ",(0,a.kt)("inlineCode",{parentName:"p"},"Person")," class:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Person : ObservableObject\n{\n    private string _name;\n    private int _age;\n\n    public string Name\n    {\n        get { return _name; }\n        set { SetProperty(ref _name, value); }\n    }\n\n    public int Age\n    {\n        get { return _age; }\n        set { SetProperty(ref _age, value); }\n    }\n}\n")),(0,a.kt)("p",null,"And an ",(0,a.kt)("inlineCode",{parentName:"p"},"ObservableCollection<Person>")," in our ViewModel:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public class ViewModel : ObservableObject\n{\n    private ObservableCollection<Person> _people;\n\n    public ObservableCollection<Person> People\n    {\n        get { return _people; }\n        set { SetProperty(ref _people, value); }\n    }\n\n    public ViewModel()\n    {\n        People = new ObservableCollection<Person> \n        {\n            new Person { Name = "John Doe", Age = 30 },\n            new Person { Name = "Jane Doe", Age = 28 }\n        };\n    }\n}\n')),(0,a.kt)("p",null,"You can bind this ",(0,a.kt)("inlineCode",{parentName:"p"},"ObservableCollection")," to a ",(0,a.kt)("inlineCode",{parentName:"p"},"ListBox")," in your view, and use a ",(0,a.kt)("inlineCode",{parentName:"p"},"DataTemplate")," to specify how each ",(0,a.kt)("inlineCode",{parentName:"p"},"Person")," should be presented:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<ListBox Items="{Binding People}">\n    <ListBox.ItemTemplate>\n        <DataTemplate>\n            <StackPanel Orientation="Horizontal">\n                <TextBlock Text="{Binding Name}" Margin="0,0,10,0"/>\n                <TextBlock Text="{Binding Age}"/>\n            </StackPanel>\n        </DataTemplate>\n    </ListBox.ItemTemplate>\n</ListBox>\n')),(0,a.kt)("p",null,"In this scenario, each ",(0,a.kt)("inlineCode",{parentName:"p"},"Person")," in the list will be displayed with their ",(0,a.kt)("inlineCode",{parentName:"p"},"Name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Age")," separated by a small margin. If any of items properties change, the ",(0,a.kt)("inlineCode",{parentName:"p"},"ListBox")," item will automatically update."))}b.isMDXComponent=!0}}]);