"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[13043],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45415:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={id:"accessing-the-ui-thread",title:"\u5982\u4f55\u8bbf\u95eeUI\u7ebf\u7a0b"},o="\u5982\u4f55\u8bbf\u95eeUI\u7ebf\u7a0b",l={unversionedId:"guides/development-guides/accessing-the-ui-thread",id:"guides/development-guides/accessing-the-ui-thread",title:"\u5982\u4f55\u8bbf\u95eeUI\u7ebf\u7a0b",description:"\u672c\u6307\u5357\u5c06\u5411\u60a8\u5c55\u793a\u5982\u4f55\u5728\u60a8\u7684 Avalonia UI \u5e94\u7528\u7a0b\u5e8f\u4e2d\u8bbf\u95eeUI\u7ebf\u7a0b\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/development-guides/accessing-the-ui-thread.md",sourceDirName:"guides/development-guides",slug:"/guides/development-guides/accessing-the-ui-thread",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/development-guides/accessing-the-ui-thread",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/development-guides/accessing-the-ui-thread.md",tags:[],version:"current",frontMatter:{id:"accessing-the-ui-thread",title:"\u5982\u4f55\u8bbf\u95eeUI\u7ebf\u7a0b"},sidebar:"documentationSidebar",previous:{title:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u63a7\u4ef6\u7c7b",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/custom-controls/add-custom-control-class"},next:{title:"\u6570\u636e\u9a8c\u8bc1",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/development-guides/data-validation"}},s={},c=[{value:"\u8c03\u5ea6\u7a0b\u5e8f\u4f18\u5148\u7ea7",id:"\u8c03\u5ea6\u7a0b\u5e8f\u4f18\u5148\u7ea7",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u66f4\u591a\u4fe1\u606f",id:"\u66f4\u591a\u4fe1\u606f",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5982\u4f55\u8bbf\u95eeui\u7ebf\u7a0b"},"\u5982\u4f55\u8bbf\u95eeUI\u7ebf\u7a0b"),(0,r.kt)("p",null,"\u672c\u6307\u5357\u5c06\u5411\u60a8\u5c55\u793a\u5982\u4f55\u5728\u60a8\u7684 ",(0,r.kt)("em",{parentName:"p"},"Avalonia UI")," \u5e94\u7528\u7a0b\u5e8f\u4e2d\u8bbf\u95eeUI\u7ebf\u7a0b\u3002"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Avalonia UI")," \u5e94\u7528\u7a0b\u5e8f\u6709\u4e00\u4e2a\u4e3b\u7ebf\u7a0b\uff0c\u8be5\u7ebf\u7a0b\u5904\u7406UI\u3002\u5f53\u60a8\u6709\u4e00\u4e2a\u5bc6\u96c6\u6216\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u8fdb\u7a0b\u65f6\uff0c\u901a\u5e38\u4f1a\u9009\u62e9\u5728\u4e0d\u540c\u7684\u7ebf\u7a0b\u4e0a\u8fd0\u884c\u5b83\u3002\u7136\u540e\uff0c\u60a8\u53ef\u80fd\u4f1a\u9047\u5230\u4e00\u4e9b\u60c5\u51b5\uff0c\u5e0c\u671b\u5728\u4e3bUI\u7ebf\u7a0b\u4e2d\u8fdb\u884c\u66f4\u65b0\uff08\u4f8b\u5982\uff0c\u8fdb\u5ea6\u66f4\u65b0\uff09\u3002"),(0,r.kt)("p",null,"\u8c03\u5ea6\u7a0b\u5e8f\u63d0\u4f9b\u4e86\u5728\u4efb\u4f55\u7279\u5b9a\u7ebf\u7a0b\u4e0a\u7ba1\u7406\u5de5\u4f5c\u9879\u7684\u670d\u52a1\u3002\u5728 ",(0,r.kt)("em",{parentName:"p"},"Avalonia UI")," \u4e2d\uff0c\u60a8\u5df2\u7ecf\u6709\u4e86\u5904\u7406UI\u7ebf\u7a0b\u7684\u8c03\u5ea6\u7a0b\u5e8f\u3002\u5f53\u60a8\u9700\u8981\u4ece\u4e0d\u540c\u7684\u7ebf\u7a0b\u66f4\u65b0UI\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u6b64\u8c03\u5ea6\u7a0b\u5e8f\u8bbf\u95ee\u5b83\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"Dispatcher.UIThread\n")),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Post"),"\u65b9\u6cd5\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"InvokeAsync"),"\u65b9\u6cd5\u5728UI\u7ebf\u7a0b\u4e0a\u8fd0\u884c\u8fdb\u7a0b\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Post"),"\u65b9\u6cd5\u5f53\u60a8\u53ea\u60f3\u542f\u52a8\u4e00\u4e2a\u4f5c\u4e1a\uff0c\u4f46\u4e0d\u9700\u8981\u7b49\u5f85\u4f5c\u4e1a\u5b8c\u6210\uff0c\u4e5f\u4e0d\u9700\u8981\u7ed3\u679c\uff1a\u8fd9\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"fire-and-forget"),"\u8c03\u5ea6\u7a0b\u5e8f\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"InvokeAsync"),"\u65b9\u6cd5\u5f53\u60a8\u9700\u8981\u7b49\u5f85\u7ed3\u679c\uff0c\u5e76\u53ef\u80fd\u60f3\u8981\u63a5\u6536\u7ed3\u679c\u3002"),(0,r.kt)("h2",{id:"\u8c03\u5ea6\u7a0b\u5e8f\u4f18\u5148\u7ea7"},"\u8c03\u5ea6\u7a0b\u5e8f\u4f18\u5148\u7ea7"),(0,r.kt)("p",null,"\u4e0a\u8ff0\u4e24\u79cd\u65b9\u6cd5\u90fd\u6709\u4e00\u4e2a\u8c03\u5ea6\u7a0b\u5e8f\u4f18\u5148\u7ea7\u53c2\u6570\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"DispatcherPriority"),"\u679a\u4e3e\u4e0e\u6b64\u53c2\u6570\u914d\u5408\u4f7f\u7528\uff0c\u4ee5\u6307\u5b9a\u7ed9\u5b9a\u4f5c\u4e1a\u5e94\u8be5\u5177\u6709\u7684\u961f\u5217\u4f18\u5148\u7ea7\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u6709\u5173",(0,r.kt)("inlineCode",{parentName:"p"},"DispatcherPriority"),"\u679a\u4e3e\u7684\u53ef\u80fd\u503c\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Threading/DispatcherPriority/"},"\u6b64\u5904"),"\u3002")),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u4f7f\u7528\u6587\u672c\u5757\u6765\u663e\u793a\u957f\u65f6\u95f4\u8fd0\u884c\u4efb\u52a1\u7684\u7ed3\u679c\uff0c\u5e76\u4f7f\u7528\u6309\u94ae\u6765\u542f\u52a8\u8be5\u4efb\u52a1\u3002\u5728\u6b64\u7248\u672c\u4e2d\uff0c\u4f7f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"fire-and-forget")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Post"),"\u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title='XAML'",title:"'XAML'"},'<StackPanel Margin="20">    \n  <Button x:Name="RunButton" Content="Run long running process" \n          Click="ButtonClickHandler" />\n  <TextBlock x:Name="ResultText" Margin="10"/>\n</StackPanel>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"title='Task C#'",title:"'Task","C#'":!0},'using System.Threading.Tasks;\n...\nprivate async Task LongRunningTask()\n{\n    this.FindControl<Button>("RunButton").IsEnabled = false;\n    this.FindControl<TextBlock>("ResultText").Text = "I\'m working ...";\n    await Task.Delay(5000);\n    this.FindControl<TextBlock>("ResultText").Text = "Done";\n    this.FindControl<Button>("RunButton").IsEnabled = true;\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"title='Post C#'",title:"'Post","C#'":!0},"private void ButtonClickHandler(object sender, RoutedEventArgs e)\n{\n    // \u542f\u52a8\u4f5c\u4e1a\u5e76\u7acb\u5373\u8fd4\u56de\n    Dispatcher.UIThread.Post(() => LongRunningTask(), \n                                            DispatcherPriority.Background);\n}\n")),(0,r.kt)("img",{src:"/img/gitbook-import/assets/long1.gif",alt:""}),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u7531\u4e8e\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u4efb\u52a1\u5728\u5176\u81ea\u5df1\u7684\u7ebf\u7a0b\u4e0a\u6267\u884c\uff0cUI\u4e0d\u4f1a\u5931\u53bb\u54cd\u5e94\u3002"),(0,r.kt)("p",null,"\u8981\u4ece\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u4efb\u52a1\u83b7\u53d6\u7ed3\u679c\uff0cXAML\u4ee3\u7801\u4fdd\u6301\u4e0d\u53d8\uff0c\u4f46\u6b64\u7248\u672c\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"InvokeAsync"),"\u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title='XAML'",title:"'XAML'"},'<StackPanel Margin="20">    \n  <Button x:Name="RunButton" Content="Run long running process" \n          Click="ButtonClickHandler" />\n  <TextBlock x:Name="ResultText" Margin="10"/>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"title='Task C#'",title:"'Task","C#'":!0},'using System.Threading.Tasks;\n...\nprivate async Task<string> LongRunningTask()\n{\n    this.FindControl<Button>("RunButton").IsEnabled = false;\n    this.FindControl<TextBlock>("ResultText").Text = "I\'m working ...";\n    await Task.Delay(5000);    \n    return "Success";\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"title='InvokeAsync C#'",title:"'InvokeAsync","C#'":!0},'private async void ButtonClickHandler(object sender, RoutedEventArgs e)\n{\n    var result = await Dispatcher.UIThread.InvokeAsync(LongRunningTask, \n                                    DispatcherPriority.Background);\n    //\u7ed3\u679c\u5c06\u5728\u8fd9\u91cc\u8fd4\u56de\n    this.FindControl<TextBlock>("ResultText").Text = result;\n    this.FindControl<Button>("RunButton").IsEnabled = true;\n}\n')),(0,r.kt)("img",{src:"/img/gitbook-import/assets/long2.gif",alt:""}),(0,r.kt)("h2",{id:"\u66f4\u591a\u4fe1\u606f"},"\u66f4\u591a\u4fe1\u606f"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u6709\u5173\u8c03\u5ea6\u7a0b\u5e8f\u7684\u5b8c\u6574API\u6587\u6863\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Threading/Dispatcher/"},"\u6b64\u5904"),"\u3002")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5728 ",(0,r.kt)("em",{parentName:"p"},"GitHub")," \u4e0a\u67e5\u770b\u6e90\u4ee3\u7801 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Base/Threading/Dispatcher.cs"},(0,r.kt)("inlineCode",{parentName:"a"},"Dispatcher.cs")))))}d.isMDXComponent=!0}}]);