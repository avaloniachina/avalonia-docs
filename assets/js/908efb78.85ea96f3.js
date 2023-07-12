"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[74605],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var r=a.createContext({}),c=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(r.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,r=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),g=s,m=p["".concat(r,".").concat(g)]||p[g]||u[g]||i;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o[p]="string"==typeof e?e:s,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},46002:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),s=(n(67294),n(3905));const i={id:"binding-classes",title:"How To Bind Style Classes"},l="How To Bind Style Classes",o={unversionedId:"guides/data-binding/binding-classes",id:"guides/data-binding/binding-classes",title:"How To Bind Style Classes",description:"This guide will show you how to apply style classes to a control depending on the Boolean value of a data binding.&#x20;",source:"@site/docs/guides/data-binding/binding-classes.md",sourceDirName:"guides/data-binding",slug:"/guides/data-binding/binding-classes",permalink:"/avalonia-docs/docs/next/guides/data-binding/binding-classes",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/data-binding/binding-classes.md",tags:[],version:"current",frontMatter:{id:"binding-classes",title:"How To Bind Style Classes"},sidebar:"documentationSidebar",previous:{title:"How to use INotifyPropertyChanged",permalink:"/avalonia-docs/docs/next/guides/data-binding/inotifypropertychanged"},next:{title:"How To Bind to a Control",permalink:"/avalonia-docs/docs/next/guides/data-binding/binding-to-controls"}},r={},c=[{value:"Example",id:"example",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"how-to-bind-style-classes"},"How To Bind Style Classes"),(0,s.kt)("p",null,"This guide will show you how to apply style classes to a control depending on the Boolean value of a data binding."," "),(0,s.kt)("p",null,"To do this, you will need some classes defined in a ",(0,s.kt)("inlineCode",{parentName:"p"},"<Styles>")," collection that target the control class you are using."),(0,s.kt)("p",null,"You can then conditionally apply the classes to a control using special classes syntax and a data binding. The syntax is like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<SomeControl Classes.class1="Binding IsClass1Active}">\n')),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("p",null,"In this example, two styles with class selectors have been defined. These give a text block either a red or a green background. The style class binding assigns ",(0,s.kt)("inlineCode",{parentName:"p"},"class1")," when the ",(0,s.kt)("inlineCode",{parentName:"p"},"IsClass1")," property of an item is true. Using the negation operator, ",(0,s.kt)("inlineCode",{parentName:"p"},"class2")," is assigned when the ",(0,s.kt)("inlineCode",{parentName:"p"},"IsClass1")," property is false."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title='XAML'",title:"'XAML'"},'<StackPanel Margin="20">\n  <ListBox Items="{Binding ItemList}">\n    <ListBox.Styles>\n      <Style Selector="TextBlock.class1">\n        <Setter Property="Background" Value="OrangeRed" />\n      </Style>\n      <Style Selector="TextBlock.class2">\n        <Setter Property="Background" Value="PaleGreen" />\n      </Style>\n    </ListBox.Styles>\n    <ListBox.ItemTemplate>\n      <DataTemplate>\n        <StackPanel>\n          <TextBlock\n              Classes.class1="{Binding IsClass1 }"\n              Classes.class2="{Binding !IsClass1 }"\n              Text="{Binding Title}"/>\n        </StackPanel>\n      </DataTemplate>\n    </ListBox.ItemTemplate>\n  </ListBox>\n</StackPanel>\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"title='C#'",title:"'C#'"},'public class MainWindowViewModel : ViewModelBase\n{\n    public ObservableCollection<ItemClass> ItemList { get; set; }\n\n    public MainWindowViewModel()\n    {\n        ItemList = new ObservableCollection<ItemClass>(new List<ItemClass>\n        {\n            new ItemClass("Item 1", false),\n            new ItemClass("Item Two", false),\n            new ItemClass("Third Item", true),\n            new ItemClass("Item #4", false),\n               \n        });\n    }\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"title='ItemClass.cs'",title:"'ItemClass.cs'"},"public class ItemClass\n{\n    public string Title { get; set; }\n    public bool IsClass1 { get; set; }\n\n    public ItemClass(string title, bool isClass1 )\n    {\n        Title = title;\n        IsClass1 = isClass1;\n    }\n}\n")),(0,s.kt)("img",{src:"/img/gitbook-import/assets/image (5).png",alt:""}))}u.isMDXComponent=!0}}]);