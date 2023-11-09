"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[71968],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>b});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),d=p(t),u=i,b=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return t?a.createElement(b,l(l({ref:n},s),{},{components:t})):a.createElement(b,l({ref:n},s))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=u;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r[d]="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},86110:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var a=t(87462),i=(t(67294),t(3905));const o="data:image/png;base64,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",l={id:"code-behind",title:"Code-behind"},r="Code-behind",c={unversionedId:"basics/user-interface/code-behind",id:"basics/user-interface/code-behind",title:"Code-behind",description:"\u9664\u4e86XAML\u6587\u4ef6\u5916\uff0c\u5927\u591a\u6570Avalonia\u63a7\u4ef6\u8fd8\u5177\u6709\u5e38\u5e38\u7528C#\u7f16\u5199\u7684 code-behind \u6587\u4ef6\u3002\u4ee3\u7801\u540e\u53f0\u6587\u4ef6\u901a\u5e38\u5177\u6709.axaml.cs\u6587\u4ef6\u6269\u5c55\u540d\uff0c\u5e76\u4e14\u901a\u5e38\u5728IDE\u4e2d\u663e\u793a\u5728XAML\u6587\u4ef6\u7684\u4e0b\u4e00\u7ea7\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/basics/user-interface/code-behind.md",sourceDirName:"basics/user-interface",slug:"/basics/user-interface/code-behind",permalink:"/avalonia-docs/zh-Hans/docs/next/basics/user-interface/code-behind",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/basics/user-interface/code-behind.md",tags:[],version:"current",frontMatter:{id:"code-behind",title:"Code-behind"},sidebar:"documentationSidebar",previous:{title:"Avalonia XAML",permalink:"/avalonia-docs/zh-Hans/docs/next/basics/user-interface/introduction-to-xaml"},next:{title:"\u63a7\u4ef6",permalink:"/avalonia-docs/zh-Hans/docs/next/basics/user-interface/controls/"}},p={},s=[{value:"\u5b9a\u4f4d\u63a7\u4ef6",id:"\u5b9a\u4f4d\u63a7\u4ef6",level:2},{value:"\u8bbe\u7f6e\u5c5e\u6027",id:"\u8bbe\u7f6e\u5c5e\u6027",level:2},{value:"\u5904\u7406\u4e8b\u4ef6",id:"\u5904\u7406\u4e8b\u4ef6",level:2}],d={toc:s},m="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"code-behind"},"Code-behind"),(0,i.kt)("p",null,"\u9664\u4e86XAML\u6587\u4ef6\u5916\uff0c\u5927\u591a\u6570Avalonia\u63a7\u4ef6\u8fd8\u5177\u6709\u5e38\u5e38\u7528C#\u7f16\u5199\u7684 ",(0,i.kt)("em",{parentName:"p"},"code-behind")," \u6587\u4ef6\u3002\u4ee3\u7801\u540e\u53f0\u6587\u4ef6\u901a\u5e38\u5177\u6709",(0,i.kt)("inlineCode",{parentName:"p"},".axaml.cs"),"\u6587\u4ef6\u6269\u5c55\u540d\uff0c\u5e76\u4e14\u901a\u5e38\u5728IDE\u4e2d\u663e\u793a\u5728XAML\u6587\u4ef6\u7684\u4e0b\u4e00\u7ea7\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u5728Visual Studio\u7684\u89e3\u51b3\u65b9\u6848\u8d44\u6e90\u7ba1\u7406\u5668\u4e2d\uff0c\u60a8\u53ef\u4ee5\u770b\u5230\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"MainWindow.axaml"),"\u6587\u4ef6\u4ee5\u53ca\u5b83\u7684code-behind\u6587\u4ef6",(0,i.kt)("inlineCode",{parentName:"p"},"MainWindow.axaml.cs"),"\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{src:o,className:"medium-zoom-image"})),(0,i.kt)("p",null,"code-behind\u6587\u4ef6\u5305\u542b\u4e00\u4e2a\u4e0eXAML\u6587\u4ef6\u540c\u540d\u7684\u7c7b\u3002\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"title='MainWindow.axaml.cs'",title:"'MainWindow.axaml.cs'"},"using Avalonia.Controls;\n\nnamespace AvaloniaApplication1.Views\n{\n    public partial class MainWindow : Window\n    {\n        public MainWindow()\n        {\n            InitializeComponent();\n        }\n    }\n}\n")),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u7c7b\u540d\u4e0eXAML\u6587\u4ef6\u7684\u540d\u79f0\u5339\u914d\uff0c\u5e76\u4e14\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"Window"),"\u5143\u7d20\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"x:Class"),"\u5c5e\u6027\u4e2d\u4e5f\u6709\u5f15\u7528\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title='MainWindow.axaml'",title:"'MainWindow.axaml'"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        // highlight-next-line\n        x:Class="AvaloniaApplication1.Views.MainWindow">\n  ...\n</Window>\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5728\u4ee3\u7801\u4e2d\u5bf9\u7c7b\u540d\u6216\u5176\u547d\u540d\u7a7a\u95f4\u8fdb\u884c\u4e86\u4efb\u4f55\u66f4\u6539\uff0c\u8bf7\u786e\u4fdd",(0,i.kt)("inlineCode",{parentName:"p"},"x:Class"),"\u5c5e\u6027\u59cb\u7ec8\u5339\u914d\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u9519\u8bef\u3002")),(0,i.kt)("p",null,"\u5f53\u9996\u6b21\u6dfb\u52a0code-behind\u6587\u4ef6\u65f6\uff0c\u5b83\u53ea\u6709\u4e00\u4e2a\u6784\u9020\u51fd\u6570\uff0c\u8be5\u6784\u9020\u51fd\u6570\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"InitializeComponent()"),"\u65b9\u6cd5\u3002\u8c03\u7528\u6b64\u65b9\u6cd5\u5728\u8fd0\u884c\u65f6\u52a0\u8f7dXAML\u662f\u5fc5\u9700\u7684\u3002"),(0,i.kt)("h2",{id:"\u5b9a\u4f4d\u63a7\u4ef6"},"\u5b9a\u4f4d\u63a7\u4ef6"),(0,i.kt)("p",null,"\u5728\u4f7f\u7528code-behind\u65f6\uff0c\u60a8\u901a\u5e38\u9700\u8981\u8bbf\u95ee\u5728XAML\u4e2d\u5b9a\u4e49\u7684\u63a7\u4ef6\u3002"),(0,i.kt)("p",null,"\u4e3a\u6b64\uff0c\u60a8\u9700\u8981\u901a\u8fc7\u5728XAML\u4e2d\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"Name"),"\uff08\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"x:Name"),"\uff09\u5c5e\u6027\u4e3a\u6240\u9700\u7684\u63a7\u4ef6\u6307\u5b9a\u540d\u79f0\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u5177\u6709\u547d\u540d\u6309\u94ae\u7684XAML\u6587\u4ef6\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title='MainWindow.axaml'",title:"'MainWindow.axaml'"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        x:Class="AvaloniaApplication5.MainWindow">\n  // highlight-next-line\n  <Button Name="greetingButton">Hello World</Button>\n</Window>\n')),(0,i.kt)("p",null,"\u73b0\u5728\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7code-behind\u4e2d\u81ea\u52a8\u751f\u6210\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"greetingButton"),"\u5b57\u6bb5\u8bbf\u95ee\u8be5\u6309\u94ae\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"title='MainWindow.axaml.cs'",title:"'MainWindow.axaml.cs'"},'using Avalonia.Controls;\n\nnamespace AvaloniaApplication1.Views\n{\n    public partial class MainWindow : Window\n    {\n        public MainWindow()\n        {\n            InitializeComponent();\n            // highlight-next-line\n            greetingButton.Content = "Goodbye Cruel World!";\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"\u8bbe\u7f6e\u5c5e\u6027"},"\u8bbe\u7f6e\u5c5e\u6027"),(0,i.kt)("p",null,"\u901a\u8fc7\u5728code-behind\u4e2d\u63d0\u4f9b\u63a7\u4ef6\u5f15\u7528\uff0c\u60a8\u53ef\u4ee5\u8bbe\u7f6e\u5c5e\u6027\u3002\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u50cf\u8fd9\u6837\u66f4\u6539\u80cc\u666f\u5c5e\u6027\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"greetingButton.Background = Brushes.Blue;\n")),(0,i.kt)("h2",{id:"\u5904\u7406\u4e8b\u4ef6"},"\u5904\u7406\u4e8b\u4ef6"),(0,i.kt)("p",null,"\u4efb\u4f55\u6709\u7528\u7684\u5e94\u7528\u7a0b\u5e8f\u90fd\u9700\u8981\u60a8\u6267\u884c\u4e00\u4e9b\u64cd\u4f5c\uff01\u5f53\u4f7f\u7528\u4ee3\u7801\u540e\u53f0\u6a21\u5f0f\u65f6\uff0c\u60a8\u9700\u8981\u5728code-behind\u6587\u4ef6\u4e2d\u7f16\u5199\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u3002"),(0,i.kt)("p",null,"\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u7f16\u5199\u4e3acode-behind\u6587\u4ef6\u4e2d\u7684\u65b9\u6cd5\uff0c\u7136\u540e\u4f7f\u7528\u4e8b\u4ef6\u5c5e\u6027\u5728XAML\u4e2d\u5f15\u7528\u5b83\u4eec\u3002\u4f8b\u5982\uff0c\u8981\u4e3a\u6309\u94ae\u70b9\u51fb\u4e8b\u4ef6\u6dfb\u52a0\u5904\u7406\u7a0b\u5e8f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title='MainWindow.axaml'",title:"'MainWindow.axaml'"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        x:Class="AvaloniaApplication4.MainWindow">\n  <Button Click="GreetingButtonClickHandler">Hello World</Button>\n</Window>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"title='MainWindow.axaml.cs'",title:"'MainWindow.axaml.cs'"},"public partial class MainWindow : Window\n{\n    public MainWindow()\n    {\n        InitializeComponent();\n    }\n\n    public void GreetingButtonClickHandler(object sender, RoutedEventArgs e)\n    {\n        // code here.\n    }\n}\n")),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u8bb8\u591aAvalonia\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u4f20\u9012\u4e86\u4e00\u4e2a\u540d\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"RoutedEventArgs"),"\u7684\u7279\u6b8a\u53c2\u6570\u3002\u5b83\u5305\u542b\u6709\u5173\u4e8b\u4ef6\u7684\u751f\u6210\u548c\u4f20\u64ad\u65b9\u5f0f\u7684\u4fe1\u606f\u3002"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u6709\u5173\u4e8b\u4ef6\u8def\u7531\u6982\u5ff5\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"/avalonia-docs/zh-Hans/docs/next/concepts/input/routed-events"},"\u8fd9\u91cc"),".")))}u.isMDXComponent=!0}}]);