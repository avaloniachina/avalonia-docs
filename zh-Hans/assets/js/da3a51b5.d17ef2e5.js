"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[13043],{97509:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var t=i(85893),a=i(11151);i.p,i.p;const s={id:"accessing-the-ui-thread",title:"\u5982\u4f55\u8bbf\u95eeUI\u7ebf\u7a0b"},o="\u5982\u4f55\u8bbf\u95eeUI\u7ebf\u7a0b",r={id:"guides/development-guides/accessing-the-ui-thread",title:"\u5982\u4f55\u8bbf\u95eeUI\u7ebf\u7a0b",description:"\u672c\u6307\u5357\u5c06\u5411\u60a8\u5c55\u793a\u5982\u4f55\u5728\u60a8\u7684 Avalonia UI \u5e94\u7528\u7a0b\u5e8f\u4e2d\u8bbf\u95eeUI\u7ebf\u7a0b\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/development-guides/accessing-the-ui-thread.md",sourceDirName:"guides/development-guides",slug:"/guides/development-guides/accessing-the-ui-thread",permalink:"/avalonia-docs/zh-Hans/docs/guides/development-guides/accessing-the-ui-thread",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/development-guides/accessing-the-ui-thread.md",tags:[],version:"current",frontMatter:{id:"accessing-the-ui-thread",title:"\u5982\u4f55\u8bbf\u95eeUI\u7ebf\u7a0b"},sidebar:"documentationSidebar",previous:{title:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u63a7\u4ef6\u7c7b",permalink:"/avalonia-docs/zh-Hans/docs/guides/custom-controls/add-custom-control-class"},next:{title:"\u6570\u636e\u9a8c\u8bc1",permalink:"/avalonia-docs/zh-Hans/docs/guides/development-guides/data-validation"}},c={},l=[{value:"\u8c03\u5ea6\u7a0b\u5e8f\u4f18\u5148\u7ea7",id:"\u8c03\u5ea6\u7a0b\u5e8f\u4f18\u5148\u7ea7",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u66f4\u591a\u4fe1\u606f",id:"\u66f4\u591a\u4fe1\u606f",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u5982\u4f55\u8bbf\u95eeui\u7ebf\u7a0b",children:"\u5982\u4f55\u8bbf\u95eeUI\u7ebf\u7a0b"}),"\n",(0,t.jsxs)(n.p,{children:["\u672c\u6307\u5357\u5c06\u5411\u60a8\u5c55\u793a\u5982\u4f55\u5728\u60a8\u7684 ",(0,t.jsx)(n.em,{children:"Avalonia UI"})," \u5e94\u7528\u7a0b\u5e8f\u4e2d\u8bbf\u95eeUI\u7ebf\u7a0b\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Avalonia UI"})," \u5e94\u7528\u7a0b\u5e8f\u6709\u4e00\u4e2a\u4e3b\u7ebf\u7a0b\uff0c\u8be5\u7ebf\u7a0b\u5904\u7406UI\u3002\u5f53\u60a8\u6709\u4e00\u4e2a\u5bc6\u96c6\u6216\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u8fdb\u7a0b\u65f6\uff0c\u901a\u5e38\u4f1a\u9009\u62e9\u5728\u4e0d\u540c\u7684\u7ebf\u7a0b\u4e0a\u8fd0\u884c\u5b83\u3002\u7136\u540e\uff0c\u60a8\u53ef\u80fd\u4f1a\u9047\u5230\u4e00\u4e9b\u60c5\u51b5\uff0c\u5e0c\u671b\u5728\u4e3bUI\u7ebf\u7a0b\u4e2d\u8fdb\u884c\u66f4\u65b0\uff08\u4f8b\u5982\uff0c\u8fdb\u5ea6\u66f4\u65b0\uff09\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u8c03\u5ea6\u7a0b\u5e8f\u63d0\u4f9b\u4e86\u5728\u4efb\u4f55\u7279\u5b9a\u7ebf\u7a0b\u4e0a\u7ba1\u7406\u5de5\u4f5c\u9879\u7684\u670d\u52a1\u3002\u5728 ",(0,t.jsx)(n.em,{children:"Avalonia UI"})," \u4e2d\uff0c\u60a8\u5df2\u7ecf\u6709\u4e86\u5904\u7406UI\u7ebf\u7a0b\u7684\u8c03\u5ea6\u7a0b\u5e8f\u3002\u5f53\u60a8\u9700\u8981\u4ece\u4e0d\u540c\u7684\u7ebf\u7a0b\u66f4\u65b0UI\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u6b64\u8c03\u5ea6\u7a0b\u5e8f\u8bbf\u95ee\u5b83\uff0c\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"Dispatcher.UIThread\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,t.jsx)(n.code,{children:"Post"}),"\u65b9\u6cd5\u6216",(0,t.jsx)(n.code,{children:"InvokeAsync"}),"\u65b9\u6cd5\u5728UI\u7ebf\u7a0b\u4e0a\u8fd0\u884c\u8fdb\u7a0b\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528",(0,t.jsx)(n.code,{children:"Post"}),"\u65b9\u6cd5\u5f53\u60a8\u53ea\u60f3\u542f\u52a8\u4e00\u4e2a\u4f5c\u4e1a\uff0c\u4f46\u4e0d\u9700\u8981\u7b49\u5f85\u4f5c\u4e1a\u5b8c\u6210\uff0c\u4e5f\u4e0d\u9700\u8981\u7ed3\u679c\uff1a\u8fd9\u662f",(0,t.jsx)(n.code,{children:"fire-and-forget"}),"\u8c03\u5ea6\u7a0b\u5e8f\u65b9\u6cd5\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528",(0,t.jsx)(n.code,{children:"InvokeAsync"}),"\u65b9\u6cd5\u5f53\u60a8\u9700\u8981\u7b49\u5f85\u7ed3\u679c\uff0c\u5e76\u53ef\u80fd\u60f3\u8981\u63a5\u6536\u7ed3\u679c\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8c03\u5ea6\u7a0b\u5e8f\u4f18\u5148\u7ea7",children:"\u8c03\u5ea6\u7a0b\u5e8f\u4f18\u5148\u7ea7"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0a\u8ff0\u4e24\u79cd\u65b9\u6cd5\u90fd\u6709\u4e00\u4e2a\u8c03\u5ea6\u7a0b\u5e8f\u4f18\u5148\u7ea7\u53c2\u6570\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,t.jsx)(n.code,{children:"DispatcherPriority"}),"\u679a\u4e3e\u4e0e\u6b64\u53c2\u6570\u914d\u5408\u4f7f\u7528\uff0c\u4ee5\u6307\u5b9a\u7ed9\u5b9a\u4f5c\u4e1a\u5e94\u8be5\u5177\u6709\u7684\u961f\u5217\u4f18\u5148\u7ea7\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["\u6709\u5173",(0,t.jsx)(n.code,{children:"DispatcherPriority"}),"\u679a\u4e3e\u7684\u53ef\u80fd\u503c\uff0c\u8bf7\u53c2\u9605",(0,t.jsx)(n.a,{href:"http://reference.avaloniaui.net/api/Avalonia.Threading/DispatcherPriority/",children:"\u6b64\u5904"}),"\u3002"]})}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u6b64\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4ece\u5de5\u4f5c\u7ebf\u7a0b\u8bbf\u95ee UI \u7ebf\u7a0b\u4ee5\u66f4\u65b0\u6216\u83b7\u53d6 TextBlock \u7684\u6587\u672c\u3002\n\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Avalonia \u9879\u76ee\uff0c\u5e76\u66ff\u6362\u4ee5\u4e0b\u4e24\u4e2a\u6587\u4ef6\u7684\u5185\u5bb9\uff1a"}),"\n",(0,t.jsx)(n.p,{children:"MainView.axaml:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",metastring:"title='XAML'",children:'<UserControl xmlns="https://github.com/avaloniaui"\n             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n             xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n             xmlns:vm="clr-namespace:AvaloniaApplication1.ViewModels"\n             mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n             x:Class="AvaloniaApplication1.Views.MainView"\n             x:DataType="vm:MainViewModel">\n  <Design.DataContext>\n    \x3c!-- \u8fd9\u4ec5\u4e3aIDE\u4e2d\u7684\u9884\u89c8\u5668\u8bbe\u7f6eDataContext\uff0c\u8981\u8bbe\u7f6e\u8fd0\u884c\u65f6\u7684\u5b9e\u9645DataContext\uff0c\n         \u8bf7\u5728\u4ee3\u7801\u4e2d\u8bbe\u7f6eDataContext\u5c5e\u6027\uff08\u53c2\u8003App.axaml.cs\uff09 --\x3e\n    <vm:MainViewModel />\n  </Design.DataContext>\n\n\t<StackPanel Margin="20">\n\t\t<TextBlock Name="TextBlock1" />\n\t</StackPanel>\n</UserControl>\n'})}),"\n",(0,t.jsx)(n.p,{children:"MainView.axaml.cs:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",metastring:"title='MainView C#'",children:'using Avalonia.Controls;\nusing Avalonia.Threading;\nusing System;\nusing System.Threading.Tasks;\n\nnamespace AvaloniaApplication1.Views;\n\npublic partial class MainView : UserControl\n{\n    public MainView()\n    {\n        InitializeComponent();\n\n        // \u5728\u7ebf\u7a0b\u6c60\u4e0a\u6267\u884c OnTextFromAnotherThread\uff0c\n        // \u6f14\u793a\u5982\u4f55\u4ece\u90a3\u91cc\u8bbf\u95ee UI \u7ebf\u7a0b\u3002\n        _ = Task.Run(() => OnTextFromAnotherThread("test"));\n    }\n\n    private void SetText(string text) => TextBlock1.Text = text;\n    private string GetText() => TextBlock1.Text ?? "";\n\n    private async void OnTextFromAnotherThread(string text)\n    {\n        try\n        {\n            // \u5728 UI \u7ebf\u7a0b\u4e0a\u5f00\u59cb\u4f5c\u4e1a\u5e76\u7acb\u5373\u8fd4\u56de\u3002\n            Dispatcher.UIThread.Post(() => SetText(text));\n\n            // \u5728 UI \u7ebf\u7a0b\u4e0a\u5f00\u59cb\u4f5c\u4e1a\u5e76\u7b49\u5f85\u7ed3\u679c\u3002\n            var result = await Dispatcher.UIThread.InvokeAsync(GetText);\n\n            // \u6b64\u8c03\u7528\u4f1a\u5bfc\u81f4\u5f02\u5e38\uff0c\u56e0\u4e3a\u6211\u4eec\u5728\u5de5\u4f5c\u7ebf\u7a0b\u4e0a\u8fd0\u884c\uff1a\n            // System.InvalidOperationException: \'Call from invalid thread\'\n            //SetText(text);\n        }\n        catch (Exception)\n        {\n            throw; // Todo: \u5904\u7406\u5f02\u5e38\u3002\n        }\n    }\n}\n\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u66f4\u591a\u4fe1\u606f",children:"\u66f4\u591a\u4fe1\u606f"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["\u6709\u5173\u8c03\u5ea6\u7a0b\u5e8f\u7684\u5b8c\u6574API\u6587\u6863\uff0c\u8bf7\u53c2\u9605",(0,t.jsx)(n.a,{href:"http://reference.avaloniaui.net/api/Avalonia.Threading/Dispatcher/",children:"\u6b64\u5904"}),"\u3002"]})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["\u5728 ",(0,t.jsx)(n.em,{children:"GitHub"})," \u4e0a\u67e5\u770b\u6e90\u4ee3\u7801 ",(0,t.jsx)(n.a,{href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Base/Threading/Dispatcher.cs",children:(0,t.jsx)(n.code,{children:"Dispatcher.cs"})})]})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>o});var t=i(67294);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);