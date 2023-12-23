"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[96217],{79757:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var s=i(85893),o=i(11151);const t={description:"TUTORIALS - Music Store App"},c="\u6309\u94ae\u547d\u4ee4",a={id:"tutorials/music-store-app/button-command",title:"\u6309\u94ae\u547d\u4ee4",description:"TUTORIALS - Music Store App",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/tutorials/music-store-app/button-command.md",sourceDirName:"tutorials/music-store-app",slug:"/tutorials/music-store-app/button-command",permalink:"/avalonia-docs/zh-Hans/docs/tutorials/music-store-app/button-command",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/current/tutorials/music-store-app/button-command.md",tags:[],version:"current",frontMatter:{description:"TUTORIALS - Music Store App"},sidebar:"documentationSidebar",previous:{title:"\u6dfb\u52a0\u5e76\u6392\u7248\u63a7\u4ef6",permalink:"/avalonia-docs/zh-Hans/docs/tutorials/music-store-app/add-and-layout-controls"},next:{title:"\u6253\u5f00\u5bf9\u8bdd\u6846",permalink:"/avalonia-docs/zh-Hans/docs/tutorials/music-store-app/opening-a-dialog"}},r={},d=[{value:"\u54cd\u5e94\u5f0f\u547d\u4ee4",id:"\u54cd\u5e94\u5f0f\u547d\u4ee4",level:2}];function l(n){const e={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u6309\u94ae\u547d\u4ee4",children:"\u6309\u94ae\u547d\u4ee4"}),"\n",(0,s.jsx)(e.p,{children:"\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u60a8\u53ea\u4fee\u6539\u4e86 MVVM \u6a21\u5f0f\u4e2d\u89c6\u56fe\u90e8\u5206\u7684\u6587\u4ef6\uff08\u4e3b\u7a97\u53e3\u548c\u5e94\u7528\u7a0b\u5e8f\u7684\u6587\u4ef6\uff09\u3002\u5728\u672c\u9875\u9762\u4e2d\uff0c\u60a8\u5c06\u5b66\u4e60\u5982\u4f55\u5c06\u4e3b\u7a97\u53e3\u89c6\u56fe\u4e2d\u7684\u6309\u94ae\u94fe\u63a5\u5230\u89c6\u56fe\u6a21\u578b\u4e2d\u7684\u547d\u4ee4\u3002\u8fd9\u5c06\u4f7f\u5f97\u7528\u6237\u4e0e\u89c6\u56fe\u7684\u4ea4\u4e92\uff08\u5728\u672c\u4f8b\u4e2d\u662f\u6309\u94ae\u70b9\u51fb\uff09\u4f1a\u5728\u89c6\u56fe\u6a21\u578b\u7684\u5e94\u7528\u903b\u8f91\u4e2d\u4ea7\u751f\u5f71\u54cd\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u5f53\u60a8\u4f7f\u7528 ",(0,s.jsx)(e.em,{children:"Avalonia UI"})," \u548c MVVM \u6a21\u5f0f\u8fdb\u884c\u5f00\u53d1\u65f6\uff0c\u89e3\u51b3\u65b9\u6848\u6a21\u677f\u5c06\u4e3a\u60a8\u63d0\u4f9b\u4e00\u4e9b MVVM \u5de5\u5177\u5305\u7684\u9009\u62e9\u3002\u672c\u6559\u7a0b\u4f7f\u7528 ",(0,s.jsx)(e.em,{children:"ReactiveUI"})," \u6846\u67b6\uff0c\u4e14\u89e3\u51b3\u65b9\u6848\u6a21\u677f\u5df2\u7ecf\u6dfb\u52a0\u4e86\u5fc5\u8981\u7684\u5305\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u54cd\u5e94\u5f0f\u547d\u4ee4",children:"\u54cd\u5e94\u5f0f\u547d\u4ee4"}),"\n",(0,s.jsxs)(e.p,{children:["\u5c06\u89c6\u56fe\u548c\u89c6\u56fe\u6a21\u578b\u94fe\u63a5\u8d77\u6765\u7684\u7b2c\u4e00\u6b65\u662f\u4f7f\u89c6\u56fe\u6a21\u578b\u80fd\u591f\u63a5\u53d7\u4e00\u4e2a\u547d\u4ee4\u3002\u8981\u5b9e\u73b0\u5b83\uff0c\u60a8\u53ef\u4ee5\u5728\u4e3b\u7a97\u53e3\u89c6\u56fe\u6a21\u578b\u4e2d\u4e2d\u6dfb\u52a0\u7c7b\u578b\u4e3a .NET ",(0,s.jsx)(e.code,{children:"ICommand"})," \u63a5\u53e3\u7684\u5c5e\u6027\uff0c\u5e76\u4f7f\u7528 ",(0,s.jsx)(e.em,{children:"ReactiveUI"})," \u7684 ",(0,s.jsx)(e.code,{children:"ReactiveCommand"})," \u4f5c\u4e3a\u63a5\u53e3\u7684\u5b9e\u73b0\u3002\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u64cd\u4f5c\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5982\u679c\u5e94\u7528\u7a0b\u5e8f\u4ecd\u5728\u8fd0\u884c\uff0c\u8bf7\u505c\u6b62\u5b83\u3002"}),"\n",(0,s.jsxs)(e.li,{children:["\u5728 ",(0,s.jsx)(e.strong,{children:"/ViewModels"})," \u6587\u4ef6\u5939\u4e2d\u627e\u5230\u5e76\u6253\u5f00 ",(0,s.jsx)(e.strong,{children:"MainWindowViewModel.cs"})," \u6587\u4ef6\u3002"]}),"\n",(0,s.jsx)(e.li,{children:"\u5220\u9664\u7c7b\u7684\u73b0\u6709\u5185\u5bb9\uff0c\u5e76\u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801\uff1a"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-csharp",children:"using ReactiveUI;\nusing System.Windows.Input;\n\nnamespace Avalonia.MusicStore.ViewModels\n{\n    public class MainWindowViewModel : ViewModelBase\n    {\n        public ICommand BuyMusicCommand { get; }\n\n        public MainWindowViewModel()\n        {\n            BuyMusicCommand = ReactiveCommand.Create(() =>\n            {\n                // \u5f53\u6309\u94ae\u88ab\u70b9\u51fb\u65f6\uff0c\u8fd9\u91cc\u7684\u4ee3\u7801\u5c06\u88ab\u6267\u884c\u3002\n            });\n        }\n    }\n}\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5728\u6ce8\u91ca\u884c\u4e0a\u65b9\u7684\u5de6\u82b1\u62ec\u53f7\u5904\u8bbe\u7f6e\u4e00\u4e2a\u8c03\u8bd5\u65ad\u70b9\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u8981\u5b8c\u6210\u4ece\u89c6\u56fe\u5230\u65b0\u7684 ",(0,s.jsx)(e.code,{children:"BuyMusicCommand"})," \u89c6\u56fe\u6a21\u578b\u5c5e\u6027\u7684\u94fe\u63a5\uff0c\u60a8\u5c06\u5411\u6309\u94ae\u6dfb\u52a0\u6570\u636e\u7ed1\u5b9a\u3002"]}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsxs)(e.p,{children:["\u6709\u5173\u6570\u636e\u7ed1\u5b9a\u6982\u5ff5\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,s.jsx)(e.a,{href:"../../basics/data/data-binding",children:"\u6b64\u5904"}),"\u3002"]})}),"\n",(0,s.jsx)(e.p,{children:"\u8981\u4e3a\u6309\u94ae\u6dfb\u52a0\u6570\u636e\u7ed1\u5b9a\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u64cd\u4f5c\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u627e\u5230\u5e76\u6253\u5f00 ",(0,s.jsx)(e.strong,{children:"MainWindow.axaml"})," \u6587\u4ef6\u3002"]}),"\n",(0,s.jsx)(e.li,{children:"\u627e\u5230\u6309\u94ae\u7684 XAML \u4ee3\u7801\uff0c\u5e76\u6dfb\u52a0\u547d\u4ee4\u5c5e\u6027\u548c\u7ed1\u5b9a\uff0c\u5982\u4e0b\u6240\u793a\uff1a"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'<Button HorizontalAlignment="Right" VerticalAlignment="Top"\n        Command="{Binding BuyMusicCommand}">\n   <PathIcon Data="{StaticResource store_microsoft_regular}"/>\n</Button>\n'})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"Avalonia UI"})," \u6309\u94ae\u7684 ",(0,s.jsx)(e.code,{children:"Command"})," \u5c5e\u6027\u786e\u5b9a\u4e86\u6309\u94ae\u88ab\u70b9\u51fb\u65f6\u4f1a\u53d1\u751f\u4ec0\u4e48\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6570\u636e\u7ed1\u5b9a\u8868\u8fbe\u5f0f\u94fe\u63a5\u5230\u5e95\u5c42\u89c6\u56fe\u6a21\u578b\u7684 ",(0,s.jsx)(e.code,{children:"BuyMusicCommand"})," \u5c5e\u6027\u3002\u8981\u786e\u8ba4\u4e8b\u5b9e\u5982\u6b64\uff0c\u8bf7\u9075\u5faa\u4ee5\u4e0b\u6b65\u9aa4\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u70b9\u51fb ",(0,s.jsx)(e.strong,{children:"\u8c03\u8bd5"})," \u4ee5\u7f16\u8bd1\u548c\u8fd0\u884c\u9879\u76ee\u3002"]}),"\n",(0,s.jsx)(e.li,{children:"\u70b9\u51fb\u56fe\u6807\u6309\u94ae\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u60a8\u5c06\u770b\u5230\u5e94\u7528\u7a0b\u5e8f\u5728\u89c6\u56fe\u6a21\u578b\u4e2d\u4e4b\u524d\u8bbe\u7f6e\u7684\u65ad\u70b9\u5904\u505c\u6b62\u6267\u884c\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u4e0b\u4e00\u9875\u4e2d\uff0c\u60a8\u5c06\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5bf9\u8bdd\u6846\u7a97\u53e3\uff0c\u5e76\u6dfb\u52a0\u4e00\u4e9b\u4ee3\u7801\u6765\u663e\u793a\u5b83\uff08\u5728\u89c6\u56fe\u6a21\u578b\u4e2d\u5f53\u524d\u65ad\u70b9\u7684\u4f4d\u7f6e\uff09\u3002"})]})}function u(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>a,a:()=>c});var s=i(67294);const o={},t=s.createContext(o);function c(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);