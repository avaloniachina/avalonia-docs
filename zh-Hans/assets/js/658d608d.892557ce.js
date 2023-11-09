"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[27155],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),p=c(t),s=i,g=p["".concat(l,".").concat(s)]||p[s]||u[s]||o;return t?a.createElement(g,r(r({ref:n},d),{},{components:t})):a.createElement(g,r({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=s;var m={};for(var l in n)hasOwnProperty.call(n,l)&&(m[l]=n[l]);m.originalType=e,m[p]="string"==typeof e?e:i,r[1]=m;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},52616:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>m,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=t(87462),i=(t(67294),t(3905));const o=t.p+"assets/images/command-3152cddc7d47d7e45638f382cb6790c8.gif",r={id:"how-to-bind-to-a-command-with-reactiveui",title:"\u5982\u4f55\u4f7f\u7528ReactiveUI\u7ed1\u5b9a\u547d\u4ee4"},m="\u5982\u4f55\u4f7f\u7528ReactiveUI\u7ed1\u5b9a\u547d\u4ee4",l={unversionedId:"guides/data-binding/how-to-bind-to-a-command-with-reactiveui",id:"guides/data-binding/how-to-bind-to-a-command-with-reactiveui",title:"\u5982\u4f55\u4f7f\u7528ReactiveUI\u7ed1\u5b9a\u547d\u4ee4",description:"\u672c\u6307\u5357\u5c06\u5411\u60a8\u5c55\u793a\u5982\u4f55\u5c06\u89c6\u56fe\u6a21\u578b\u65b9\u6cd5\uff08\u6267\u884c\u64cd\u4f5c\uff09\u7ed1\u5b9a\u5230\u53ef\u4ee5\u54cd\u5e94\u7528\u6237\u4ea4\u4e92\u800c\u542f\u52a8\u64cd\u4f5c\u7684\u63a7\u4ef6\uff08\u4f8b\u5982\u6309\u94ae\uff09\u3002\u6b64\u7ed1\u5b9a\u5728XAML\u4e2d\u4f7f\u7528Command\u5c5e\u6027\u8fdb\u884c\u5b9a\u4e49\uff0c\u4f8b\u5982\uff1a",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/data-binding/how-to-bind-to-a-command-with-reactiveui.md",sourceDirName:"guides/data-binding",slug:"/guides/data-binding/how-to-bind-to-a-command-with-reactiveui",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/data-binding/how-to-bind-to-a-command-with-reactiveui",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/data-binding/how-to-bind-to-a-command-with-reactiveui.md",tags:[],version:"current",frontMatter:{id:"how-to-bind-to-a-command-with-reactiveui",title:"\u5982\u4f55\u4f7f\u7528ReactiveUI\u7ed1\u5b9a\u547d\u4ee4"},sidebar:"documentationSidebar",previous:{title:"\u5982\u4f55\u7ed1\u5b9a Can Execute",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/data-binding/how-to-bind-can-execute"},next:{title:"\u5982\u4f55\u4e0d\u4f7f\u7528ReactiveUI\u7ed1\u5b9a\u547d\u4ee4",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/data-binding/how-to-bind-to-a-command-without-reactiveui"}},c={},d=[{value:"\u547d\u4ee4\u53c2\u6570",id:"\u547d\u4ee4\u53c2\u6570",level:2}],p={toc:d},u="wrapper";function s(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5982\u4f55\u4f7f\u7528reactiveui\u7ed1\u5b9a\u547d\u4ee4"},"\u5982\u4f55\u4f7f\u7528ReactiveUI\u7ed1\u5b9a\u547d\u4ee4"),(0,i.kt)("p",null,"\u672c\u6307\u5357\u5c06\u5411\u60a8\u5c55\u793a\u5982\u4f55\u5c06\u89c6\u56fe\u6a21\u578b\u65b9\u6cd5\uff08\u6267\u884c\u64cd\u4f5c\uff09\u7ed1\u5b9a\u5230\u53ef\u4ee5\u54cd\u5e94\u7528\u6237\u4ea4\u4e92\u800c\u542f\u52a8\u64cd\u4f5c\u7684\u63a7\u4ef6\uff08\u4f8b\u5982\u6309\u94ae\uff09\u3002\u6b64\u7ed1\u5b9a\u5728XAML\u4e2d\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"Command"),"\u5c5e\u6027\u8fdb\u884c\u5b9a\u4e49\uff0c\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'<Window xmlns="https://github.com/avaloniaui">\n    ...\n  <StackPanel Margin="20">\n      <Button Command="{Binding ExampleCommand}">Run the example</Button>\n  </StackPanel>\n')),(0,i.kt)("p",null,"\u672c\u6307\u5357\u5047\u8bbe\u60a8\u6b63\u5728\u4f7f\u7528MVVM\u5b9e\u73b0\u6a21\u5f0f\uff0c\u5e76\u4e14\u60a8\u7684\u89c6\u56fe\u6a21\u578b\u57fa\u4e8e ",(0,i.kt)("em",{parentName:"p"},"ReactiveUI")," \u6846\u67b6\u3002"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u8981\u4e86\u89e3MVVM\u5b9e\u73b0\u6a21\u5f0f\u80cc\u540e\u7684\u6982\u5ff5\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"../../concepts/the-mvvm-pattern/"},"\u6b64\u5904"),"\u3002")),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528",(0,i.kt)("strong",{parentName:"p"},"Avalonia MVVM Application"),"\u89e3\u51b3\u65b9\u6848\u6a21\u677f\u521b\u5efa\u4e86\u5e94\u7528\u7a0b\u5e8f\uff0c\u90a3\u4e48\u60a8\u7684\u89e3\u51b3\u65b9\u6848\u5df2\u7ecf\u5305\u542b ",(0,i.kt)("em",{parentName:"p"},"ReactiveUI")," \u6846\u67b6\u5305\uff0c\u60a8\u53ef\u4ee5\u50cf\u8fd9\u6837\u5f15\u7528\u5b83\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using ReactiveUI;\n")),(0,i.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"ICommand")," \u63a5\u53e3\u6765\u6267\u884c\u64cd\u4f5c\u7684\u89c6\u56fe\u6a21\u578b\u901a\u8fc7\u8be5\u63a5\u53e3\u6765\u5b9e\u73b0\u3002",(0,i.kt)("em",{parentName:"p"},"ReactiveUI")," \u6846\u67b6\u63d0\u4f9b\u4e86\u5b9e\u73b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"ICommand")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"ReactiveCommand")," \u7c7b\u3002"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u6709\u5173 ",(0,i.kt)("inlineCode",{parentName:"p"},"ICommand")," \u63a5\u53e3\u5b9a\u4e49\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-gb/dotnet/api/system.windows.input.icommand?view=netstandard-2.0"},"\u6b64\u5904"),"\u3002")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Command")," \u5c5e\u6027\u6570\u636e\u7ed1\u5b9a\u5c06\u901a\u8fc7\u5176 ",(0,i.kt)("inlineCode",{parentName:"p"},"ICommand.Execute")," \u63a5\u53e3\u8c03\u7528\u7ed1\u5b9a\u7684\u89c6\u56fe\u6a21\u578b\u65b9\u6cd5\uff0c\u5728\u7ed1\u5b9a\u7684\u63a7\u4ef6\u88ab\u6fc0\u6d3b\u65f6\u3002\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff1a\u5f53\u6309\u94ae\u88ab\u70b9\u51fb\u65f6\u3002"),(0,i.kt)("p",null,"\u8981\u521b\u5efa\u5e26\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"ReactiveCommand")," \u7684\u89c6\u56fe\u6a21\u578b\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u793a\u4f8b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u60a8\u7684\u89c6\u56fe\u6a21\u578b\u4e2d\uff0c\u58f0\u660e\u4e00\u4e2a\u547d\u4ee4\uff0c\u4f8b\u5982\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public ReactiveCommand<Unit, Unit> ExampleCommand { get; } \n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u89c6\u56fe\u6a21\u578b\u4e2d\u521b\u5efa\u4e00\u4e2a\u79c1\u6709\u65b9\u6cd5\u6765\u6267\u884c\u64cd\u4f5c\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316Reactive\u547d\u4ee4\uff0c\u4f20\u9012\u6267\u884c\u64cd\u4f5c\u7684\u65b9\u6cd5\u7684\u540d\u79f0\u3002")),(0,i.kt)("p",null,"\u60a8\u7684\u89c6\u56fe\u6a21\u578b\u4ee3\u7801\u73b0\u5728\u5c06\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace AvaloniaGuides.ViewModels\n{\n    public class MainWindowViewModel \n    {\n        public ReactiveCommand<Unit, Unit> ExampleCommand { get; }\n\n        public MainWindowViewModel()\n        {\n            ExampleCommand = ReactiveCommand.Create(PerformAction);\n        }\n        private void PerformAction()\n        {\n            Debug.WriteLine("The action was called.");\n        }\n    }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u5e76\u76d1\u89c6\u8c03\u8bd5\u8f93\u51fa\u3002")),(0,i.kt)("p",null,"\u5f53\u4e0eReactive\u547d\u4ee4\u7ed1\u5b9a\u7684\u63a7\u4ef6\u88ab\u6fc0\u6d3b\u65f6\uff08\u5728\u672c\u4f8b\u4e2d\uff1a\u5f53\u6309\u94ae\u88ab\u70b9\u51fb\u65f6\uff09\uff0c\u5c06\u901a\u8fc7Reactive\u547d\u4ee4\u8c03\u7528\u6267\u884c\u64cd\u4f5c\u7684\u79c1\u6709\u65b9\u6cd5\u3002"),(0,i.kt)("img",{src:o,alt:""}),(0,i.kt)("h2",{id:"\u547d\u4ee4\u53c2\u6570"},"\u547d\u4ee4\u53c2\u6570"),(0,i.kt)("p",null,"\u901a\u5e38\u9700\u8981\u5411\u7ed1\u5b9a\u5230\u63a7\u4ef6\u7684Reactive\u547d\u4ee4\u4f20\u9012\u53c2\u6570\u3002\u60a8\u53ef\u4ee5\u5728XAML\u4e2d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"CommandParameter")," \u5c5e\u6027\u6765\u5b9e\u73b0\u8fd9\u4e00\u70b9\u3002\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'<Window xmlns="https://github.com/avaloniaui">\n   ...\n   <StackPanel Margin="20">\n      <Button Command="{Binding ExampleCommand}"\n              CommandParameter="From the button">Run the example</Button>\n   </StackPanel>\n</Window>\n')),(0,i.kt)("p",null,"\u73b0\u5728\uff0c\u60a8\u5fc5\u987b\u4fee\u6539\u89c6\u56fe\u6a21\u578b\uff0c\u4ee5\u4fbfReactive\u547d\u4ee4\u671f\u671b\u4e00\u4e2a\u5b57\u7b26\u4e32\u53c2\u6570\uff0c\u521d\u59cb\u5316\u671f\u671b\u4e00\u4e2a\u5b57\u7b26\u4e32\u53c2\u6570\uff0c\u6267\u884c\u64cd\u4f5c\u7684\u79c1\u6709\u65b9\u6cd5\u671f\u671b\u4e00\u4e2a\u5b57\u7b26\u4e32\u53c2\u6570\u3002\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace AvaloniaGuides.ViewModels\n{\n    public class MainWindowViewModel \n    {\n        public ReactiveCommand<string, Unit> ExampleCommand { get; }\n\n        public MainWindowViewModel()\n        {\n            ExampleCommand = ReactiveCommand.Create<string>(PerformAction);\n        }\n        private void PerformAction(string msg)\n        {\n            Debug.WriteLine($"The action was called. {msg}");\n        }\n    }\n}\n')),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"CommandParameter")," \u5c5e\u6027\u4e0a\u4e0d\u4f1a\u6267\u884c\u4efb\u4f55\u7c7b\u578b\u8f6c\u6362\uff0c\u56e0\u6b64\uff0c\u5982\u679c\u60a8\u9700\u8981\u4f7f\u7528\u4e0d\u662f\u5b57\u7b26\u4e32\u7684\u7c7b\u578b\u53c2\u6570\uff0c\u5219\u5fc5\u987b\u5728XAML\u4e2d\u5b9a\u4e49\u8be5\u7c7b\u578b\u3002\u60a8\u8fd8\u9700\u8981\u4f7f\u7528\u6269\u5c55\u7684XAML\u8bed\u6cd5\u6765\u5b9a\u4e49\u53c2\u6570\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u8981\u4f20\u9012\u6574\u6570\u53c2\u6570\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:sys="clr-namespace:System;assembly=mscorlib">\n ...   \n    <Button Command="{Binding ExampleIntegerCommand}">\n        <Button.CommandParameter>\n            <sys:Int32>42</sys:Int32>\n        </Button.CommandParameter>\n        What is the answer?\n    </Button>\n</Window>\n')),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u53c2\u6570\u5b9a\u4e49\u7f3a\u5931\u6216\u7c7b\u578b\u4e0d\u6b63\u786e\uff0c\u5c06\u4f1a\u51fa\u73b0\u9519\u8bef\u3002")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u4e0e\u4efb\u4f55\u5176\u4ed6\u5c5e\u6027\u4e00\u6837\uff0c\u547d\u4ee4\u53c2\u6570\u4e5f\u53ef\u4ee5\u7ed1\u5b9a\u3002")))}s.isMDXComponent=!0}}]);