"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[28691],{66321:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=i(85893),t=i(11151);const o={id:"localizing",title:"\u4f7f\u7528 ResX \u8fdb\u884c\u672c\u5730\u5316"},l=void 0,a={id:"guides/implementation-guides/localizing",title:"\u4f7f\u7528 ResX \u8fdb\u884c\u672c\u5730\u5316",description:"\u672c\u5730\u5316\u662f\u4e3a\u5168\u7403\u7528\u6237\u63d0\u4f9b\u51fa\u8272\u7528\u6237\u4f53\u9a8c\u7684\u5173\u952e\u6b65\u9aa4\u3002\u5728 .NET \u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528 ResXResourceReader \u548c ResXResourceWriter \u7c7b\u6765\u8bfb\u53d6\u548c\u5199\u5165\u57fa\u4e8e XML \u7684\u8d44\u6e90\u6587\u4ef6\uff08.resx\uff09\u3002\u672c\u6307\u5357\u5c06\u5f15\u5bfc\u60a8\u901a\u8fc7\u4f7f\u7528 ResX \u6587\u4ef6\u6765\u672c\u5730\u5316 Avalonia \u5e94\u7528\u7a0b\u5e8f\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/implementation-guides/localizing.md",sourceDirName:"guides/implementation-guides",slug:"/guides/implementation-guides/localizing",permalink:"/avalonia-docs/zh-Hans/docs/guides/implementation-guides/localizing",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/implementation-guides/localizing.md",tags:[],version:"current",frontMatter:{id:"localizing",title:"\u4f7f\u7528 ResX \u8fdb\u884c\u672c\u5730\u5316"},sidebar:"documentationSidebar",previous:{title:"\u5982\u4f55\u4f7f\u7528\u8bbe\u8ba1\u65f6\u6570\u636e",permalink:"/avalonia-docs/zh-Hans/docs/guides/implementation-guides/how-to-use-design-time-data"},next:{title:"\u5982\u4f55\u4f7f\u7528 INotifyPropertyChanged",permalink:"/avalonia-docs/zh-Hans/docs/guides/data-binding/inotifypropertychanged"}},r={},c=[{value:"\u6dfb\u52a0 ResX \u6587\u4ef6\u5230\u9879\u76ee",id:"\u6dfb\u52a0-resx-\u6587\u4ef6\u5230\u9879\u76ee",level:2},{value:"\u8bbe\u7f6e\u6587\u5316\uff08Culture\uff09",id:"\u8bbe\u7f6e\u6587\u5316culture",level:2},{value:"\u5728\u89c6\u56fe\u4e2d\u4f7f\u7528\u672c\u5730\u5316\u6587\u672c",id:"\u5728\u89c6\u56fe\u4e2d\u4f7f\u7528\u672c\u5730\u5316\u6587\u672c",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u672c\u5730\u5316\u662f\u4e3a\u5168\u7403\u7528\u6237\u63d0\u4f9b\u51fa\u8272\u7528\u6237\u4f53\u9a8c\u7684\u5173\u952e\u6b65\u9aa4\u3002\u5728 .NET \u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"ResXResourceReader"})," \u548c ",(0,s.jsx)(n.code,{children:"ResXResourceWriter"})," \u7c7b\u6765\u8bfb\u53d6\u548c\u5199\u5165\u57fa\u4e8e XML \u7684\u8d44\u6e90\u6587\u4ef6\uff08.resx\uff09\u3002\u672c\u6307\u5357\u5c06\u5f15\u5bfc\u60a8\u901a\u8fc7\u4f7f\u7528 ResX \u6587\u4ef6\u6765\u672c\u5730\u5316 Avalonia \u5e94\u7528\u7a0b\u5e8f\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["\u8981\u4e86\u89e3\u8fd9\u4e9b\u6982\u5ff5\u5728\u5b9e\u9645\u64cd\u4f5c\u4e2d\u7684\u5b8c\u6574\u793a\u4f8b\uff0c\u8bf7\u67e5\u770b ",(0,s.jsx)(n.a,{href:"https://github.com/AvaloniaUI/AvaloniaUI.QuickGuides/tree/main/Localization/",children:"\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"\u6dfb\u52a0-resx-\u6587\u4ef6\u5230\u9879\u76ee",children:"\u6dfb\u52a0 ResX \u6587\u4ef6\u5230\u9879\u76ee"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u8fdb\u884c\u672c\u5730\u5316\u4e4b\u524d\uff0c\u60a8\u9700\u8981\u4e3a\u6bcf\u79cd\u8bed\u8a00\u6dfb\u52a0\u76f8\u5e94\u7684 ResX \u6587\u4ef6\u3002\u5bf9\u4e8e\u672c\u6307\u5357\uff0c\u6211\u4eec\u5c06\u8003\u8651\u4e09\u4e2a ResX \u6587\u4ef6\uff0c\u5206\u522b\u5bf9\u5e94\u4ee5\u4e0b\u8bed\u8a00\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Resources.fil-PH.resx"}),"\uff08\u83f2\u5f8b\u5bbe\u8bed\uff09"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Resources.ja-JP.resx"}),"\uff08\u65e5\u8bed\uff09"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Resources.resx"}),"\uff08\u9ed8\u8ba4\u8bed\u8a00\uff0c\u901a\u5e38\u4e3a\u82f1\u8bed\uff09"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u6bcf\u4e2a ResX \u6587\u4ef6\u5c06\u5305\u542b\u4e0e\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u7684\u952e\u76f8\u5bf9\u5e94\u7684\u7ffb\u8bd1\u6587\u672c\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u65b0\u6587\u4ef6\u6dfb\u52a0\u5230",(0,s.jsx)(n.code,{children:"Assets"}),"\u6587\u4ef6\u5939\u4e2d\u3002\u7531\u4e8e.NET\u751f\u6210\u5668\u6839\u636e\u6587\u4ef6\u5939\u7ed3\u6784\u521b\u5efa\u540d\u79f0\u7a7a\u95f4\uff0c\u53ef\u80fd\u4f1a\u6709\u6240\u4e0d\u540c\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8bbe\u7f6e\u6587\u5316culture",children:"\u8bbe\u7f6e\u6587\u5316\uff08Culture\uff09"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e3a\u4e86\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u7279\u5b9a\u7684\u8bed\u8a00\uff0c\u60a8\u9700\u8981\u8bbe\u7f6e\u5f53\u524d\u7684\u6587\u5316\uff08Culture\uff09\u3002\u8fd9\u53ef\u4ee5\u5728 ",(0,s.jsx)(n.code,{children:"App.axaml.cs"})," \u6587\u4ef6\u4e2d\u5b8c\u6210\u3002\u4e0b\u9762\u7684\u793a\u4f8b\u5c06\u6587\u5316\uff08Culture\uff09\u8bbe\u7f6e\u4e3a\u83f2\u5f8b\u5bbe\u8bed\uff08",(0,s.jsx)(n.code,{children:"fil-PH"}),"\uff09\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:'title="App.xaml.cs"',children:'public partial class App : Application\n{\n    public override void Initialize()\n    {\n        AvaloniaXamlLoader.Load(this);\n    }\n\n    public override void OnFrameworkInitializationCompleted()\n    {\n        // highlight-start\n        Assets.Resources.Culture = new CultureInfo("fil-PH");\n        // highlight-end\n        if (ApplicationLifetime is IClassicDesktopStyleApplicationLifetime desktop)\n        {\n            desktop.MainWindow = new MainWindow\n            {\n                DataContext = new MainWindowViewModel(),\n            };\n        }\n\n        base.OnFrameworkInitializationCompleted();\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u6839\u636e\u9700\u8981\uff0c\u5c06 ",(0,s.jsx)(n.code,{children:"fil-PH"})," \u66ff\u6362\u4e3a\u9002\u5f53\u7684\u6587\u5316\u4ee3\u7801\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5728\u89c6\u56fe\u4e2d\u4f7f\u7528\u672c\u5730\u5316\u6587\u672c",children:"\u5728\u89c6\u56fe\u4e2d\u4f7f\u7528\u672c\u5730\u5316\u6587\u672c"}),"\n",(0,s.jsx)(n.p,{children:"\u8981\u5728\u89c6\u56fe\u4e2d\u4f7f\u7528\u672c\u5730\u5316\u6587\u672c\uff0c\u60a8\u53ef\u4ee5\u5728 XAML \u4e2d\u9759\u6001\u5730\u5f15\u7528\u8d44\u6e90\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<TextBlock Text="{x:Static assets:Resources.GreetingText}"/>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c",(0,s.jsx)(n.code,{children:"GreetingText"})," \u662f\u4e0e ResX \u6587\u4ef6\u4e2d\u7684\u5b57\u7b26\u4e32\u5bf9\u5e94\u7684\u952e\u3002",(0,s.jsx)(n.code,{children:"{x:Static}"})," \u6807\u8bb0\u6269\u5c55\u7528\u4e8e\u5f15\u7528\u5728 .NET \u7c7b\u4e2d\u5b9a\u4e49\u7684\u9759\u6001\u5c5e\u6027\uff0c\u800c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5373\u8d44\u6e90\u6587\u4ef6\uff08",(0,s.jsx)(n.code,{children:"assets:Resources.GreetingText"}),"\uff09\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5c31\u662f\u8fd9\u6837\uff01\u73b0\u5728\u60a8\u5df2\u6210\u529f\u4f7f\u7528 ResX \u8fdb\u884c\u4e86 Avalonia \u5e94\u7528\u7a0b\u5e8f\u7684\u672c\u5730\u5316\u3002\u901a\u8fc7\u8bbe\u7f6e\u6587\u5316\u4e3a\u4e0d\u540c\u7684\u533a\u57df\u8bbe\u7f6e\uff0c\u60a8\u53ef\u4ee5\u4ee5\u6240\u9009\u8bed\u8a00\u663e\u793a\u7528\u6237\u754c\u9762\uff0c\u4ece\u800c\u521b\u5efa\u652f\u6301\u591a\u79cd\u8bed\u8a00\u5e76\u9762\u5411\u5168\u7403\u7528\u6237\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>l});var s=i(67294);const t={},o=s.createContext(t);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);