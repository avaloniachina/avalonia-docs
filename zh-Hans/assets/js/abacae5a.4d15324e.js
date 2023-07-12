"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[51574],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),h=o,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||a;return t?i.createElement(m,r(r({ref:n},c),{},{components:t})):i.createElement(m,r({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<a;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},79189:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=t(87462),o=(t(67294),t(3905));const a={id:"code-behind",title:"How To Use Code-behind"},r="How To Use Code-behind",l={unversionedId:"guides/implementation-guides/code-behind",id:"guides/implementation-guides/code-behind",title:"How To Use Code-behind",description:"This guide will show you how to use the code-behind programming pattern with Avalonia UI.&#x20;",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/implementation-guides/code-behind.md",sourceDirName:"guides/implementation-guides",slug:"/guides/implementation-guides/code-behind",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/implementation-guides/code-behind",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/implementation-guides/code-behind.md",tags:[],version:"current",frontMatter:{id:"code-behind",title:"How To Use Code-behind"}},s={},d=[{value:"Code-behind File",id:"code-behind-file",level:2},{value:'Locating Controls <a href="#locating-controls" id="locating-controls"></a>',id:"locating-controls-",level:2},{value:"Set Properties",id:"set-properties",level:2},{value:'Handling Events <a href="#handling-events" id="handling-events"></a>',id:"handling-events-",level:2}],c={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-use-code-behind"},"How To Use Code-behind"),(0,o.kt)("p",null,"This guide will show you how to use the code-behind programming pattern with ",(0,o.kt)("em",{parentName:"p"},"Avalonia UI"),"."," "),(0,o.kt)("p",null,"You can use this pattern for small and simple applications. For large or complex applications it is  recommended that you use the alternative MVVM pattern."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For information about the concept of the MVVM programming pattern, see ",(0,o.kt)("a",{parentName:"p",href:"../../concepts/the-mvvm-pattern/"},"here"),".")),(0,o.kt)("h2",{id:"code-behind-file"},"Code-behind File"),(0,o.kt)("p",null,"Window and user control files have an associated code-behind file that is commonly written in C#, and has the file extension ",(0,o.kt)("inlineCode",{parentName:"p"},".axaml.cs"),". The code-behind file is usually displayed underneath the XAML file in your editor."," "),(0,o.kt)("p",null,"For example, below you can see a ",(0,o.kt)("inlineCode",{parentName:"p"},"MainWindow.xaml")," file with its code-behind file ",(0,o.kt)("inlineCode",{parentName:"p"},"MainWindow.xaml.cs")," in the Visual Studio solution explorer:"),(0,o.kt)("p",null,"The code-behind file contains a class that (when it is created) has the same name as the XAML file. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"using Avalonia.Controls;\n\nnamespace AvaloniaApplication1.Views\n{\n    public partial class MainWindow : Window\n    {\n        public MainWindow()\n        {\n            InitializeComponent();\n        }\n    }\n}\n")),(0,o.kt)("p",null,"Notice that this class name is the same as name of the XAML file, and is also referenced in the ",(0,o.kt)("inlineCode",{parentName:"p"},"x:Class")," attribute of the window element."," "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:vm="using:AvaloniaApplication1.ViewModels"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n        x:Class="AvaloniaApplication1.Views.h"\n        Icon="/Assets/avalonia-logo.ico"\n        Title="AvaloniaApplication1">\n  ...\n</Window>\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you make any changes to the class name in code, or its namespace, ensure that the  ",(0,o.kt)("inlineCode",{parentName:"p"},"x:Class")," attribute always matches, or you will get an error.")),(0,o.kt)("p",null,"When the code-behind file is first added, it only has its constructor, and a call to the  ",(0,o.kt)("inlineCode",{parentName:"p"},"InitializeComponent()")," method - which is used to load the XAML at runtime."),(0,o.kt)("h2",{id:"locating-controls-"},"Locating Controls ",(0,o.kt)("a",{href:"#locating-controls",id:"locating-controls"})),(0,o.kt)("p",null,"When you use this programming pattern, you will write code (in the code-behind file) that manipulates the controls defined in the XAML."," "),(0,o.kt)("p",null,"To do this you will first need a reference to a control. Your code will use find-by-name to locate the button. So for this to work the control will need a name property - and this will come from a ",(0,o.kt)("inlineCode",{parentName:"p"},"Name")," attribute in XAML."),(0,o.kt)("p",null,"In this example, the button in the XAML has the name attribute defined:"," "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        x:Class="AvaloniaApplication5.MainWindow">\n  <Button Name=GreetingButton">Hello World</Button>\n</Window>\n')),(0,o.kt)("p",null,"So now you can see that button appears by name in the Intellisense when you type in the code-behind file. It looks like this:"),(0,o.kt)("h2",{id:"set-properties"},"Set Properties"),(0,o.kt)("p",null,"With the control reference available in the code-behind, you can set properties. For example, you can change the background property like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"GreetingButton.Background = Brushes.Blue;\n")),(0,o.kt)("h2",{id:"handling-events-"},"Handling Events ",(0,o.kt)("a",{href:"#handling-events",id:"handling-events"})),(0,o.kt)("p",null,"Any useful application will require you to implement some action! When you use the code-behind pattern, you write event handling procedures in the code-behind file."," "),(0,o.kt)("p",null,"You write event handlers as methods in the code-behind file, and then reference them in the XAML with an event attribute. For example to add a handler for a button click:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        x:Class="AvaloniaApplication4.MainWindow">\n  <Button Click="GreetingButtonClickHandler">Hello World</Button>\n</Window>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public partial class MainWindow : Window\n{\n    public MainWindow()\n    {\n        InitializeComponent();\n    }\n\n    public void GreetingButtonClickHandler(object sender, RoutedEventArgs e)\n    {\n        // code here.\n    }\n}\n")),(0,o.kt)("p",null,"Notice that an event handler in ",(0,o.kt)("em",{parentName:"p"},"Avalonia UI")," code uses a special argument of class ",(0,o.kt)("inlineCode",{parentName:"p"},"RoutedEventArgs"),". This includes information about how the event has been generated and propagated."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For more information on the concepts of event routing, see ",(0,o.kt)("a",{parentName:"p",href:"/avalonia-docs/zh-Hans/docs/next/concepts/input/routed-events"},"here"),"."," ")))}u.isMDXComponent=!0}}]);