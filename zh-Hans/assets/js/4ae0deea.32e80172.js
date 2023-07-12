"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[73841],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>h});var t=a(67294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=t.createContext({}),d=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=d(a),m=o,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return a?t.createElement(h,l(l({ref:n},c),{},{components:a})):t.createElement(h,l({ref:n},c))}));function h(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=m;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[p]="string"==typeof e?e:o,l[1]=r;for(var d=2;d<i;d++)l[d]=a[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},64839:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var t=a(87462),o=(a(67294),a(3905));const i={id:"code-behind",title:"Code Behind"},l=void 0,r={unversionedId:"guides/basics/code-behind",id:"version-0.10.x/guides/basics/code-behind",title:"Code Behind",description:"Window and UserControl files also have an associated code-behind file which usually has the extension .xaml.cs or .axaml.cs and may be displayed collapsed under the XAML file in your editor. Below you can see a MainWindow.xaml file along with its markdown file MainWindow.xaml.cs in Visual Studio:",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/guides/basics/code-behind.md",sourceDirName:"guides/basics",slug:"/guides/basics/code-behind",permalink:"/avalonia-docs/zh-Hans/docs/guides/basics/code-behind",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/guides/basics/code-behind.md",tags:[],version:"0.10.x",frontMatter:{id:"code-behind",title:"Code Behind"},sidebar:"documentationSidebar",previous:{title:"Introduction to XAML",permalink:"/avalonia-docs/zh-Hans/docs/guides/basics/introduction-to-xaml"},next:{title:"MVVM Architecture",permalink:"/avalonia-docs/zh-Hans/docs/guides/basics/mvvm"}},s={},d=[{value:"Locating Controls",id:"locating-controls",level:3},{value:"Handling Events",id:"handling-events",level:3}],c={toc:d},p="wrapper";function u(e){let{components:n,...a}=e;return(0,o.kt)(p,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../../controls/window"},"Window")," and ",(0,o.kt)("a",{parentName:"p",href:"../../controls/usercontrol"},"UserControl")," files also have an associated ",(0,o.kt)("em",{parentName:"p"},"code-behind")," file which usually has the extension ",(0,o.kt)("inlineCode",{parentName:"p"},".xaml.cs")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".axaml.cs")," and may be displayed collapsed under the XAML file in your editor. Below you can see a ",(0,o.kt)("inlineCode",{parentName:"p"},"MainWindow.xaml")," file along with its markdown file ",(0,o.kt)("inlineCode",{parentName:"p"},"MainWindow.xaml.cs")," in Visual Studio:"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"/img/guides/basics/code-behind/codebehind-vs.png",alt:"Code-behind in Visual Studio"})),(0,o.kt)("p",null,"The code-behind file by default defines a .NET class with the same name as your XAML file, e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"using Avalonia;\nusing Avalonia.Controls;\nusing Avalonia.Markup.Xaml;\n\nnamespace AvaloniaApplication1\n{\n    public class MainWindow : Window\n    {\n        public MainWindow()\n        {\n            InitializeComponent();\n#if DEBUG\n            AttachDevTools();\n#endif\n        }\n\n        private void InitializeComponent()\n        {\n            AvaloniaXamlLoader.Load(this);\n        }\n    }\n}\n\n")),(0,o.kt)("p",null,"Note that this class definition corresponds closely to the XAML file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        x:Class="AvaloniaApplication1.MainWindow">\n</Window>\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The base class, ",(0,o.kt)("inlineCode",{parentName:"li"},"Window")," is the root element of the XAML file"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"x:Class")," attribute references the fully-qualified name of the class defined in code-behind")),(0,o.kt)("p",null,"If you make any changes to the base class, namespace, or name of the class, make sure to update both the code-behind and the XAML to ensure they match."),(0,o.kt)("p",null,"In addition, the class contains two more things of interest:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It enables ",(0,o.kt)("a",{parentName:"li",href:"../../getting-started/developer-tools"},"DevTools")," in debug mode"),(0,o.kt)("li",{parentName:"ul"},"It defines an ",(0,o.kt)("inlineCode",{parentName:"li"},"InitializeComponent")," method which is used to load the XAML at runtime")),(0,o.kt)("h3",{id:"locating-controls"},"Locating Controls"),(0,o.kt)("p",null,"One of the main uses of the code-behind file is to manipulate controls using C","#"," code. To do this you'll usually first want to get a reference to a named control. This can be done using the ",(0,o.kt)("inlineCode",{parentName:"p"},"FindControl<T>")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        x:Class="AvaloniaApplication4.MainWindow">\n  <Button Name="myButton">Hello World</Button>\n</Window>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'public class MainWindow : Window\n{\n    private Button myButton;\n\n    public MainWindow()\n    {\n        InitializeComponent();\n#if DEBUG\n        AttachDevTools();\n#endif\n    }\n\n    private void InitializeComponent()\n    {\n        AvaloniaXamlLoader.Load(this);\n        myButton = this.FindControl<Button>("myButton");\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"FindControl")," must be called after ",(0,o.kt)("inlineCode",{parentName:"p"},"AvaloniaXamlLoader.Load")," has run because it's not until this point that the control will have been created."),(0,o.kt)("p",null,"The good news this step is not necessary if you're using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia.NameGenerator"},"Avalonia.NameGenerator")," package (added to the Avalonia templates by default), because it provides a code-generation step which creates this code for you.",(0,o.kt)("br",{parentName:"p"}),"\n","In such case the code-behind class can be simplified to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public partial class MainWindow : Window\n{\n    public MainWindow()\n    {\n        InitializeComponent();\n    }\n}\n")),(0,o.kt)("p",null,"Note the class is now declared as ",(0,o.kt)("inlineCode",{parentName:"p"},"partial"),". That's because all the boilerplate code is now auto-generated by the Avalonia.NameGenerator at the second partial class which is not visible in the project.",(0,o.kt)("br",{parentName:"p"}),"\n","For the given XAML, it will look like follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// <auto-generated />\n\nusing Avalonia;\nusing Avalonia.Controls;\nusing Avalonia.Markup.Xaml;\n\nnamespace AvaloniaApplication1\n{\n    partial class MainWindow\n    {\n        internal global::Avalonia.Controls.Button myButton;\n\n        /// <summary>\n        /// Wires up the controls and optionally loads XAML markup and attaches dev tools (if Avalonia.Diagnostics package is referenced).\n        /// </summary>\n        /// <param name="loadXaml">Should the XAML be loaded into the component.</param>\n        /// <param name="attachDevTools">Should the dev tools be attached.</param>\n        public void InitializeComponent(bool loadXaml = true, bool attachDevTools = true)\n        {\n            if (loadXaml)\n            {\n                AvaloniaXamlLoader.Load(this);\n            }\n\n#if DEBUG\n            if (attachDevTools)\n            {\n                this.AttachDevTools();\n            }\n#endif\n\n            myButton = this.FindControl<global::Avalonia.Controls.Button>("myButton");\n        }\n    }\n}\n')),(0,o.kt)("p",null,"The auto-generated ",(0,o.kt)("inlineCode",{parentName:"p"},"InitializeComponent")," has arguments to optionally call the ",(0,o.kt)("inlineCode",{parentName:"p"},"AvaloniaXamlLoader.Load(this)")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AttachDevTools"),", so you don't need to call them yourself from your code-behind class anymore.",(0,o.kt)("br",{parentName:"p"}),"\n","Never keep a method named ",(0,o.kt)("inlineCode",{parentName:"p"},"InitializeComponent")," in your code-behind view class if you are using the generator with default settings. Read more at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia.NameGenerator#advanced-usage"},"Avalonia.NameGenerator documentation"),"."),(0,o.kt)("p",null,"For the rest of the documentation, we'll assume you're either using Avalonia templates or added the Avalonia.NameGenerator package to your project manually."),(0,o.kt)("h3",{id:"handling-events"},"Handling Events"),(0,o.kt)("p",null,"Another common use for the code-behind file is to define ",(0,o.kt)("em",{parentName:"p"},"event handlers"),". Event handlers are defined as methods in the code-behind and referenced from XAML. For example to add a handler for a button click:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        x:Class="AvaloniaApplication4.MainWindow">\n  <Button Click="MyButton_Click">Hello World</Button>\n</Window>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public partial class MainWindow : Window\n{\n    public MainWindow()\n    {\n        InitializeComponent();\n    }\n\n    public void MyButton_Click(object sender, RoutedEventArgs e)\n    {\n        // Handle click here.\n    }\n}\n")))}u.isMDXComponent=!0}}]);