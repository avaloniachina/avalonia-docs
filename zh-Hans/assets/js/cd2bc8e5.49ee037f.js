"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[34875],{84640:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>r});var s=i(85893),l=i(11151);const c={description:"CONCEPTS"},a="Avalonia XAML",o={id:"basics/user-interface/introduction-to-xaml",title:"Avalonia XAML",description:"CONCEPTS",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/basics/user-interface/introduction-to-xaml.md",sourceDirName:"basics/user-interface",slug:"/basics/user-interface/introduction-to-xaml",permalink:"/avalonia-docs/zh-Hans/docs/basics/user-interface/introduction-to-xaml",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/current/basics/user-interface/introduction-to-xaml.md",tags:[],version:"current",frontMatter:{description:"CONCEPTS"},sidebar:"documentationSidebar",previous:{title:"\u57fa\u7840\u77e5\u8bc6",permalink:"/avalonia-docs/zh-Hans/docs/basics/"},next:{title:"Code-behind",permalink:"/avalonia-docs/zh-Hans/docs/basics/user-interface/code-behind"}},d={},r=[{value:"AXAML\u6587\u4ef6\u6269\u5c55\u540d",id:"axaml\u6587\u4ef6\u6269\u5c55\u540d",level:2},{value:"\u6587\u4ef6\u683c\u5f0f",id:"\u6587\u4ef6\u683c\u5f0f",level:2},{value:"\u63a7\u4ef6\u5143\u7d20",id:"\u63a7\u4ef6\u5143\u7d20",level:2},{value:"\u63a7\u4ef6\u5c5e\u6027",id:"\u63a7\u4ef6\u5c5e\u6027",level:2},{value:"\u63a7\u4ef6\u5185\u5bb9",id:"\u63a7\u4ef6\u5185\u5bb9",level:2},{value:"\u6570\u636e\u7ed1\u5b9a",id:"\u6570\u636e\u7ed1\u5b9a",level:2},{value:"Code-behind\u6587\u4ef6",id:"code-behind\u6587\u4ef6",level:2},{value:"XML\u547d\u540d\u7a7a\u95f4",id:"xml\u547d\u540d\u7a7a\u95f4",level:2},{value:"<strong>CLR\u547d\u540d\u7a7a\u95f4\u524d\u7f00</strong>",id:"clr\u547d\u540d\u7a7a\u95f4\u524d\u7f00",level:3},{value:"<strong>Using\u524d\u7f00</strong>",id:"using\u524d\u7f00",level:3}];function t(n){const e={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"avalonia-xaml",children:"Avalonia XAML"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"Avalonia UI"})," \u4f7f\u7528XAML\u6765\u5b9a\u4e49\u7528\u6237\u754c\u9762\u3002XAML\u662f\u4e00\u79cd\u57fa\u4e8eXML\u7684\u6807\u8bb0\u8bed\u8a00\uff0c\u88ab\u8bb8\u591a\u7528\u6237\u754c\u9762\u6846\u67b6\u4f7f\u7528\u3002"]}),"\n",(0,s.jsxs)(e.admonition,{type:"info",children:[(0,s.jsxs)(e.p,{children:["\u8fd9\u4e9b\u9875\u9762\u5c06\u4e3a\u60a8\u4ecb\u7ecdXAML\u5728 ",(0,s.jsx)(e.em,{children:"Avalonia UI"})," \u4e2d\u7684\u5177\u4f53\u7528\u6cd5\u3002\u5173\u4e8eXAML\u5728Microsoft\u6280\u672f\u4e2d\u7684\u5176\u4ed6\u7528\u6cd5\u7684\u80cc\u666f\u4fe1\u606f\uff0c\u60a8\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u8d44\u6599\uff1a"]}),(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["WPF\u7684Microsoft XAML\u6587\u6863\uff0c\u8bf7\u53c2\u9605",(0,s.jsx)(e.a,{href:"https://docs.microsoft.com/en-us/dotnet/framework/wpf/advanced/xaml-overview-wpf",children:"\u8fd9\u91cc"}),"\uff1b"]}),"\n",(0,s.jsxs)(e.li,{children:["UWP\u7684Microsoft XAML\u6587\u6863\uff0c\u8bf7\u53c2\u9605",(0,s.jsx)(e.a,{href:"https://docs.microsoft.com/en-us/windows/uwp/xaml-platform/xaml-overview",children:"\u8fd9\u91cc"}),"\u3002"]}),"\n"]})]}),"\n",(0,s.jsx)(e.h2,{id:"axaml\u6587\u4ef6\u6269\u5c55\u540d",children:"AXAML\u6587\u4ef6\u6269\u5c55\u540d"}),"\n",(0,s.jsxs)(e.p,{children:["\u5176\u4ed6\u5730\u65b9\u4f7f\u7528XAML\u6587\u4ef6\u7684\u6269\u5c55\u540d\u662f",(0,s.jsx)(e.code,{children:".xaml"}),"\uff0c\u4f46\u7531\u4e8e\u4e0eVisual Studio\u7684\u6280\u672f\u95ee\u9898\u6574\u5408\uff0c",(0,s.jsx)(e.em,{children:"Avalonia UI"})," \u4f7f\u7528\u4e86\u81ea\u5df1\u7684",(0,s.jsx)(e.code,{children:".axaml"}),"\u6269\u5c55\u540d\u2014\u2014'Avalonia XAML'\u3002"]}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsxs)(e.p,{children:["\u4ece ",(0,s.jsx)(e.em,{children:"Avalonia UI"})," \u7248\u672c0.9.11\u5f00\u59cb\uff0c\u6240\u6709\u5728Visual Studio\u4e2d\u521b\u5efa\u7684XAML\u6587\u4ef6\u90fd\u5177\u6709",(0,s.jsx)(e.code,{children:".axaml"}),"\u6269\u5c55\u540d\uff1b\u4ece\u7248\u672c0.10\u5f00\u59cb\uff0c\u6240\u6709 ",(0,s.jsx)(e.em,{children:"Avalonia UI"})," \u6a21\u677f\u90fd\u4f7f\u7528",(0,s.jsx)(e.code,{children:".axaml"}),"\u6269\u5c55\u540d\u521b\u5efa\u6587\u4ef6\u3002"]})}),"\n",(0,s.jsx)(e.h2,{id:"\u6587\u4ef6\u683c\u5f0f",children:"\u6587\u4ef6\u683c\u5f0f"}),"\n",(0,s.jsx)(e.p,{children:"\u4e00\u4e2a\u5178\u578b\u7684Avalonia XAML\u6587\u4ef6\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-markup",children:'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        x:Class="AvaloniaApplication1.MainWindow">\n</Window>\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0e\u6240\u6709XML\u6587\u4ef6\u4e00\u6837\uff0c\u6709\u4e00\u4e2a\u6839\u5143\u7d20\u3002\u6839\u5143\u7d20\u6807\u7b7e",(0,s.jsx)(e.code,{children:"<Window></Window>"}),"\u5b9a\u4e49\u4e86\u6839\u7684\u7c7b\u578b\u3002\u8fd9\u5c06\u5bf9\u5e94\u4e8eAvalonia UI\u63a7\u4ef6\u7684\u4e00\u79cd\u7c7b\u578b\uff0c\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\u662f\u4e00\u4e2a\u7a97\u53e3\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u4e0a\u9762\u7684\u793a\u4f8b\u4f7f\u7528\u4e86\u4e09\u4e2a\u6709\u8da3\u7684\u5c5e\u6027\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:'xmlns="https://github.com/avaloniaui"'})," \u2014\u2014\u8fd9\u662f ",(0,s.jsx)(e.em,{children:"Avalonia UI"})," \u672c\u8eab\u7684XAML\u547d\u540d\u7a7a\u95f4\u58f0\u660e\u3002\u8fd9\u662f\u5fc5\u9700\u7684\uff0c\u5426\u5219\u6587\u4ef6\u5c06\u65e0\u6cd5\u88ab\u8bc6\u522b\u4e3aAvalonia XAML\u6587\u6863\uff1b"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:'xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"'})," \u2014\u2014\u8fd9\u662fXAML\u8bed\u8a00\u547d\u540d\u7a7a\u95f4\u7684\u58f0\u660e\uff1b"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:'x:Class="AvaloniaApplication1.MainWindow"'})," \u2014\u2014\u8fd9\u662f\u4e0a\u9762\u58f0\u660e\u7684\u6269\u5c55\uff08\u7528\u4e8e'x'\uff09\u544a\u8bc9XAML\u7f16\u8bd1\u5668\u5728\u6587\u4ef6\u4e2d\u627e\u5230\u76f8\u5173\u8054\u7684\u7c7b\u7684\u4f4d\u7f6e\u3002\u8fd9\u4e2a\u7c7b\u5728\u4ee3\u7801\u540e\u53f0\u6587\u4ef6\u4e2d\u5b9a\u4e49\uff0c\u901a\u5e38\u7528C#\u7f16\u5199\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsxs)(e.p,{children:["\u6709\u5173",(0,s.jsx)(e.code,{children:"code-behind"}),"\u6982\u5ff5\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,s.jsx)(e.a,{href:"code-behind",children:"\u8fd9\u91cc"}),"."]})}),"\n",(0,s.jsx)(e.h2,{id:"\u63a7\u4ef6\u5143\u7d20",children:"\u63a7\u4ef6\u5143\u7d20"}),"\n",(0,s.jsxs)(e.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0\u8868\u793a ",(0,s.jsx)(e.em,{children:"Avalonia UI"})," \u63a7\u4ef6\u4e4b\u4e00\u7684XML\u5143\u7d20\u6765\u6784\u5efa\u5e94\u7528\u7a0b\u5e8f\u7684\u7528\u6237\u754c\u9762\u3002\u5143\u7d20\u6807\u7b7e\u4f7f\u7528\u4e0e\u63a7\u4ef6\u7c7b\u540d\u76f8\u540c\u7684\u540d\u79f0\u3002"]}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsxs)(e.p,{children:["\u4e00\u4e2aUI\u53ef\u4ee5\u7531\u591a\u79cd\u4e0d\u540c\u7c7b\u578b\u7684\u63a7\u4ef6\u7ec4\u6210\u3002\u8981\u4e86\u89e3\u6709\u5173UI\u7ec4\u5408\u6982\u5ff5\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,s.jsx)(e.a,{href:"/avalonia-docs/zh-Hans/docs/concepts/ui-composition",children:"\u8fd9\u91cc"}),"\u3002"]})}),"\n",(0,s.jsx)(e.p,{children:"\u4f8b\u5982\uff0c\u4e0b\u9762\u7684XAML\u5c06\u6309\u94ae\u6dfb\u52a0\u5230\u7a97\u53e3\u7684\u5185\u5bb9\u4e2d\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-markup",children:'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">\n    <Button>Hello World!</Button>\n</Window>\n'})}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsxs)(e.p,{children:["\u8981\u83b7\u53d6 ",(0,s.jsx)(e.em,{children:"Avalonia UI"})," \u5185\u7f6e\u63a7\u4ef6\u7684\u5b8c\u6574\u5217\u8868\uff0c\u8bf7\u53c2\u9605",(0,s.jsx)(e.a,{href:"../../reference/controls",children:"\u6b64\u5904"}),"\u7684\u53c2\u8003\u8d44\u6599\u3002"]})}),"\n",(0,s.jsx)(e.h2,{id:"\u63a7\u4ef6\u5c5e\u6027",children:"\u63a7\u4ef6\u5c5e\u6027"}),"\n",(0,s.jsx)(e.p,{children:"\u8868\u793a\u63a7\u4ef6\u7684XML\u5143\u7d20\u5177\u6709\u4e0e\u53ef\u8bbe\u7f6e\u7684\u63a7\u4ef6\u5c5e\u6027\u5bf9\u5e94\u7684\u5c5e\u6027\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u5411\u5143\u7d20\u6dfb\u52a0\u5c5e\u6027\u6765\u8bbe\u7f6e\u63a7\u4ef6\u5c5e\u6027\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u4f8b\u5982\uff0c\u8981\u4e3a\u6309\u94ae\u63a7\u4ef6\u6307\u5b9a\u84dd\u8272\u80cc\u666f\uff0c\u60a8\u53ef\u4ee5\u6dfb\u52a0",(0,s.jsx)(e.code,{children:"Background"}),"\u5c5e\u6027\u5e76\u5c06\u503c\u8bbe\u7f6e\u4e3a",(0,s.jsx)(e.code,{children:'"Blue"'}),"\u3002\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-markup",children:'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">\n    <Button Background="Blue">Hello World!</Button>\n</Window>\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u63a7\u4ef6\u5185\u5bb9",children:"\u63a7\u4ef6\u5185\u5bb9"}),"\n",(0,s.jsx)(e.p,{children:'\u60a8\u53ef\u80fd\u5df2\u7ecf\u6ce8\u610f\u5230\u4e0a\u9762\u793a\u4f8b\u4e2d\u7684\u6309\u94ae\u7684\u5185\u5bb9\uff08"Hello World"\u5b57\u7b26\u4e32\uff09\u653e\u7f6e\u5728\u5176\u6253\u5f00\u548c\u5173\u95ed\u6807\u7b7e\u4e4b\u95f4\u3002\u6216\u8005\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528Content\u5c5e\u6027\u6765\u8bbe\u7f6e\u5185\u5bb9\u3002'}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-markup",children:'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">\n    <Button Content="Hello World!"/>\n</Window>\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u8fd9\u79cd\u884c\u4e3a\u662f ",(0,s.jsx)(e.em,{children:"Avalonia UI"})," \u63a7\u4ef6\u5185\u5bb9\u7279\u6709\u7684\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u6570\u636e\u7ed1\u5b9a",children:"\u6570\u636e\u7ed1\u5b9a"}),"\n",(0,s.jsxs)(e.p,{children:["\u60a8\u7ecf\u5e38\u4f1a\u4f7f\u7528 ",(0,s.jsx)(e.em,{children:"Avalonia UI"})," \u7ed1\u5b9a\u7cfb\u7edf\u5c06\u63a7\u4ef6\u5c5e\u6027\u94fe\u63a5\u5230\u5e95\u5c42\u5bf9\u8c61\u3002\u94fe\u63a5\u662f\u901a\u8fc7",(0,s.jsx)(e.code,{children:"{Binding}"}),"\u6807\u8bb0\u6269\u5c55\u6765\u58f0\u660e\u7684\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-markup",children:'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">\n    <Button Content="{Binding Greeting}"/>\n</Window>\n'})}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsxs)(e.p,{children:["\u6709\u5173\u6570\u636e\u7ed1\u5b9a\u80cc\u540e\u7684\u6982\u5ff5\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,s.jsx)(e.a,{href:"../data/data-binding",children:"\u8fd9\u91cc"}),"\u3002"]})}),"\n",(0,s.jsx)(e.h2,{id:"code-behind\u6587\u4ef6",children:"Code-behind\u6587\u4ef6"}),"\n",(0,s.jsxs)(e.p,{children:["\u8bb8\u591aXAML\u6587\u4ef6\u8fd8\u6709\u4e00\u4e2a\u5173\u8054\u7684code-behind\u6587\u4ef6\uff0c\u901a\u5e38\u7528C#\u7f16\u5199\uff0c\u5e76\u5177\u6709",(0,s.jsx)(e.code,{children:".xaml.cs"}),"\u6587\u4ef6\u6269\u5c55\u540d\u6765\u5904\u7406\u4e8b\u4ef6\u548c\u5176\u4ed6\u903b\u8f91\u3002"]}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsxs)(e.p,{children:["\u6709\u5173\u4f7f\u7528code-behind\u6587\u4ef6\u8fdb\u884c\u7f16\u7a0b\u7684\u6307\u5357\uff0c\u8bf7\u53c2\u9605",(0,s.jsx)(e.a,{href:"code-behind",children:"\u8fd9\u91cc"}),"."]})}),"\n",(0,s.jsx)(e.h2,{id:"xml\u547d\u540d\u7a7a\u95f4",children:"XML\u547d\u540d\u7a7a\u95f4"}),"\n",(0,s.jsx)(e.p,{children:"\u4e0e\u4efb\u4f55XML\u683c\u5f0f\u4e00\u6837\uff0c\u5728Avalonia XAML\u6587\u4ef6\u4e2d\uff0c\u60a8\u53ef\u4ee5\u58f0\u660e\u547d\u540d\u7a7a\u95f4\u3002\u8fd9\u5141\u8bb8XML\u5904\u7406\u5668\u627e\u5230\u6587\u4ef6\u4e2d\u4f7f\u7528\u7684\u5143\u7d20\u7684\u5b9a\u4e49\u3002"}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsxs)(e.p,{children:["\u6709\u5173\u80cc\u666f\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605Microsoft\u7684",(0,s.jsx)(e.a,{href:"https://docs.microsoft.com/en-us/dotnet/standard/data/xml/managing-namespaces-in-an-xml-document",children:"XML\u547d\u540d\u7a7a\u95f4\u6587\u6863"}),"\u3002"]})}),"\n",(0,s.jsxs)(e.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,s.jsx)(e.code,{children:"xmlns"}),"\u5c5e\u6027\u6dfb\u52a0\u547d\u540d\u7a7a\u95f4\u3002\u547d\u540d\u7a7a\u95f4\u58f0\u660e\u7684\u683c\u5f0f\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-xml",children:'xmlns:alias="definition"\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u901a\u5e38\u5728\u6839\u5143\u7d20\u4e2d\u5b9a\u4e49\u60a8\u8981\u4f7f\u7528\u7684\u6240\u6709\u547d\u540d\u7a7a\u95f4\u662f\u6807\u51c6\u505a\u6cd5\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u53ea\u80fd\u5728\u6587\u4ef6\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\u800c\u4e0d\u4f7f\u7528\u522b\u540d\u90e8\u5206\u7684\u5c5e\u6027\u540d\u3002\u522b\u540d\u5fc5\u987b\u5728\u6587\u4ef6\u5185\u59cb\u7ec8\u4fdd\u6301\u552f\u4e00\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u547d\u540d\u7a7a\u95f4\u58f0\u660e\u7684\u5b9a\u4e49\u90e8\u5206\u53ef\u4ee5\u662fURL\u6216\u4ee3\u7801\u5b9a\u4e49\u3002\u8fd9\u4e24\u8005\u90fd\u7528\u4e8e\u5b9a\u4f4d\u6587\u4ef6\u4e2d\u5143\u7d20\u7684\u5b9a\u4e49\u3002"}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsxs)(e.p,{children:["\u6709\u5173\u547d\u540d\u7a7a\u95f4\u58f0\u660e\u7684\u8be6\u7ec6\u6307\u5bfc\uff0c\u8bf7\u53c2\u9605",(0,s.jsx)(e.a,{href:"/avalonia-docs/zh-Hans/docs/guides/custom-controls/how-to-create-a-custom-controls-library",children:"\u8fd9\u91cc"}),"."]})}),"\n",(0,s.jsx)(e.p,{children:"\u547d\u540d\u7a7a\u95f4\u5c5e\u6027\u7684\u5b9a\u4e49\u90e8\u5206\u6709\u4e24\u79cd\u6709\u6548\u7684\u8bed\u6cd5\u9009\u9879\uff0c\u53ef\u4ee5\u5f15\u7528\u4ee3\u7801\uff1a"}),"\n",(0,s.jsx)(e.h3,{id:"clr\u547d\u540d\u7a7a\u95f4\u524d\u7f00",children:(0,s.jsx)(e.strong,{children:"CLR\u547d\u540d\u7a7a\u95f4\u524d\u7f00"})}),"\n",(0,s.jsxs)(e.p,{children:["\u6709\u4e00\u4e2a",(0,s.jsx)(e.code,{children:"clr-namespace:"}),"\u524d\u7f00\uff0c\u60a8\u53ef\u4ee5\u7528\u4e8e\u5f15\u7528\u5f53\u524d\u7a0b\u5e8f\u96c6\u4e2d\u7684\u4ee3\u7801\u548c\u5f15\u7528\u7a0b\u5e8f\u96c6\u4e2d\u7684\u4ee3\u7801\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u4f8b\u5982\uff0c\u5f53\u4ee3\u7801\u5b58\u5728\u4e8e\u4e0eXAML\u76f8\u540c\u7684\u7a0b\u5e8f\u96c6\u4e2d\u65f6\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u6b64\u8bed\u6cd5\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-xml",children:'<Window ...\n    xmlns:myAlias1="clr-namespace:MyNamespace.AppNameSpace.UI" \n... >\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u4ee3\u7801\u5728\u53e6\u4e00\u4e2a\u88ab\u5f15\u7528\u7684\u7a0b\u5e8f\u96c6\u4e2d\uff08\u4f8b\u5982\u4e00\u4e2a\u5e93\u4e2d\uff09\uff0c\u60a8\u5fc5\u987b\u6269\u5c55\u8bf4\u660e\u4ee5\u5305\u542b\u88ab\u5f15\u7528\u7a0b\u5e8f\u96c6\u7684\u540d\u79f0\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-xml",children:'<Window ...\n    xmlns:myAlias2="clr-namespace:MyNameSpace.OtherAssembly;assembly=OtherAssembly"\n ... >\n'})}),"\n",(0,s.jsx)(e.h3,{id:"using\u524d\u7f00",children:(0,s.jsx)(e.strong,{children:"Using\u524d\u7f00"})}),"\n",(0,s.jsxs)(e.p,{children:["\u6709\u4e00\u4e2a\u66ff\u4ee3\u524d\u7f00",(0,s.jsx)(e.code,{children:"using:"}),"\uff0c\u60a8\u53ef\u4ee5\u7528\u6765\u5f15\u7528\u5f53\u524d\u7a0b\u5e8f\u96c6\u4e2d\u7684\u4ee3\u7801\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-xml",children:'xmlns:myAlias3="using:MyNamespace.AppNameSpace.UI"\n'})})]})}function h(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(t,{...n})}):t(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>o,a:()=>a});var s=i(67294);const l={},c=s.createContext(l);function a(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:a(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);