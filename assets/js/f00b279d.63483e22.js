"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[55116],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={description:"REFERENCE - Built-in Control"},l="Items Control",i={unversionedId:"reference/controls/itemscontrol",id:"reference/controls/itemscontrol",title:"Items Control",description:"REFERENCE - Built-in Control",source:"@site/docs/reference/controls/itemscontrol.md",sourceDirName:"reference/controls",slug:"/reference/controls/itemscontrol",permalink:"/avalonia-docs/docs/next/reference/controls/itemscontrol",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/reference/controls/itemscontrol.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Control"},sidebar:"documentationSidebar",previous:{title:"Image",permalink:"/avalonia-docs/docs/next/reference/controls/image"},next:{title:"Items Repeater",permalink:"/avalonia-docs/docs/next/reference/controls/itemsrepeater"}},s={},c=[{value:"Useful Properties",id:"useful-properties",level:2},{value:"Example",id:"example",level:2},{value:"More Information",id:"more-information",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"items-control"},"Items Control"),(0,o.kt)("p",null,"The items control is the basis for controls that display repeating data (like the list box for example). It has no built-in formatting or interactions; but you can use it with data binding, styling and data templates to create a completely custom repeating data control."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To see the full list of ",(0,o.kt)("em",{parentName:"p"},"Avalonia UI")," built-in repeating data controls, see ",(0,o.kt)("a",{parentName:"p",href:"/avalonia-docs/docs/next/reference/controls/repeating-data-controls"},"here"),"."," ")),(0,o.kt)("h2",{id:"useful-properties"},"Useful Properties"),(0,o.kt)("p",null,"You will probably use these properties most often:"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{width:"316"},"Property"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"Items")),(0,o.kt)("td",null,"The bound collection that is used as the data source for the control.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"ItemsControl.ItemTemplate")),(0,o.kt)("td",null,"Attached property element to contain the data template for an individual item. ")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"This example binds an observable collection of crockery items to an items control, where some custom layout and formatting is provided by a data template:"," "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<StackPanel Margin="20">\n  <TextBlock Margin="0 5">List of crockery:</TextBlock>\n  <ItemsControl Items="{Binding CrockeryList}" >\n    <ItemsControl.ItemTemplate>\n    <DataTemplate>\n      <Border Margin="0,10,0,0"\n          CornerRadius="5"\n          BorderBrush="Gray" BorderThickness="1"\n          Padding="5">\n        <StackPanel Orientation="Horizontal">\n          <TextBlock Text="{Binding Title}"/>\n          <TextBlock Margin="5 0" FontWeight="Bold" \n                      Text="{Binding Number}"/>\n        </StackPanel>\n      </Border>\n    </DataTemplate>\n    </ItemsControl.ItemTemplate>\n    </ItemsControl>\n</StackPanel>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"title='C# View Model'",title:"'C#",View:!0,"Model'":!0},'using AvaloniaControls.Models;\nusing System.Collections.Generic;\nusing System.Collections.ObjectModel;\n\nnamespace AvaloniaControls.ViewModels\n{\n    public class MainWindowViewModel : ViewModelBase\n    {\n        public ObservableCollection<Crockery> CrockeryList { get; set; }\n        \n        public MainWindowViewModel()\n        {\n            CrockeryList = new ObservableCollection<Crockery>(new List<Crockery>\n            {\n                new Crockery("dinner plate", 12),\n                new Crockery("side plate", 12),\n                new Crockery("breakfast bowl", 6),\n                new Crockery("cup", 10),\n                new Crockery("saucer", 10),\n                new Crockery("mug", 6),\n                new Crockery("milk jug", 1)\n            });    \n        }\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"title='C# Item Class'",title:"'C#",Item:!0,"Class'":!0},"public class Crockery\n{\n    public string Title { get; set; }\n    public int Number{ get; set; }\n\n    public Crockery(string title, int number)\n    {\n        Title = title;\n        Number = number;\n    }\n}\n")),(0,o.kt)("p",null,"The view resizes horizontally, but content is hidden when it is too high. This control does not have a built-in scrollbar (unlike the list box)."),(0,o.kt)("img",{src:"/img/gitbook-import/assets/items.gif",alt:""}),(0,o.kt)("h2",{id:"more-information"},"More Information"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For the complete API documentation about this control, see ",(0,o.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/ItemsControl/"},"here"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"View the source code on ",(0,o.kt)("em",{parentName:"p"},"GitHub")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/ItemsControl.cs"},(0,o.kt)("inlineCode",{parentName:"a"},"ItemsControl.cs")))))}u.isMDXComponent=!0}}]);