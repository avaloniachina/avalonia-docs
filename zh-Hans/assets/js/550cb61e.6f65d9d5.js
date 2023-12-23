"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[98860],{72089:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>t,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var s=l(85893),c=l(11151);const i={id:"upgrade-from-0.10",title:"\u4ece 0.10 \u5347\u7ea7"},d=void 0,r={id:"stay-up-to-date/upgrade-from-0.10",title:"\u4ece 0.10 \u5347\u7ea7",description:"Avalonia 11 \u7248\u672c\u5f15\u5165\u4e86\u8bb8\u591a\u4e0e 0.10 \u7248\u672c\u4e0d\u517c\u5bb9\u7684\u53d8\u5316\u3002\u4ee5\u4e0b\u6307\u5357\u6db5\u76d6\u4e86\u6700\u5e38\u89c1\u7684\u66f4\u6539\uff0c\u5e76\u63d0\u4f9b\u4e86\u89e3\u51b3\u65b9\u6cd5\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/stay-up-to-date/upgrade-from-0.10.md",sourceDirName:"stay-up-to-date",slug:"/stay-up-to-date/upgrade-from-0.10",permalink:"/avalonia-docs/zh-Hans/docs/stay-up-to-date/upgrade-from-0.10",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/current/stay-up-to-date/upgrade-from-0.10.md",tags:[],version:"current",frontMatter:{id:"upgrade-from-0.10",title:"\u4ece 0.10 \u5347\u7ea7"},sidebar:"documentationSidebar",previous:{title:"\u4fdd\u6301\u6700\u65b0",permalink:"/avalonia-docs/zh-Hans/docs/stay-up-to-date/"},next:{title:"What's new",permalink:"/avalonia-docs/zh-Hans/docs/stay-up-to-date/whats-new"}},o={},a=[{value:"\u66f4\u65b0\u9879\u76ee",id:"\u66f4\u65b0\u9879\u76ee",level:2},{value:"\u4e3b\u9898\u5904\u7406",id:"\u4e3b\u9898\u5904\u7406",level:2},{value:"\u4e3b\u9898\u5b57\u5178\u548c\u4e3b\u9898\u53d8\u4f53",id:"\u4e3b\u9898\u5b57\u5178\u548c\u4e3b\u9898\u53d8\u4f53",level:3},{value:"System.Reactive/Observables",id:"systemreactiveobservables",level:2},{value:"\u66f4\u65b0\u63a5\u53e3",id:"\u66f4\u65b0\u63a5\u53e3",level:2},{value:"\u63a8\u8350\u7684\u53ef\u9009\u62e9\u66f4\u6539\uff1a",id:"\u63a8\u8350\u7684\u53ef\u9009\u62e9\u66f4\u6539",level:3},{value:"\u89c6\u56fe",id:"\u89c6\u56fe",level:2},{value:"ItemsControl",id:"itemscontrol",level:2},{value:"Classes",id:"classes",level:2},{value:"Windows",id:"windows",level:2},{value:"AssetLoader",id:"assetloader",level:2},{value:"OnPropertyChanged",id:"onpropertychanged",level:2},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",level:2},{value:"\u5e03\u5c40",id:"\u5e03\u5c40",level:2},{value:"\u7126\u70b9",id:"\u7126\u70b9",level:2},{value:"\u89c6\u89c9\u6811",id:"\u89c6\u89c9\u6811",level:2},{value:"\u6e32\u67d3",id:"\u6e32\u67d3",level:2},{value:"\u5b9a\u4f4d\u5668",id:"\u5b9a\u4f4d\u5668",level:2},{value:"\u6742\u9879/\u9ad8\u7ea7\u573a\u666f",id:"\u6742\u9879\u9ad8\u7ea7\u573a\u666f",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Avalonia 11 \u7248\u672c\u5f15\u5165\u4e86\u8bb8\u591a\u4e0e 0.10 \u7248\u672c\u4e0d\u517c\u5bb9\u7684\u53d8\u5316\u3002\u4ee5\u4e0b\u6307\u5357\u6db5\u76d6\u4e86\u6700\u5e38\u89c1\u7684\u66f4\u6539\uff0c\u5e76\u63d0\u4f9b\u4e86\u89e3\u51b3\u65b9\u6cd5\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u66f4\u65b0\u9879\u76ee",children:"\u66f4\u65b0\u9879\u76ee"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5c06 Avalonia \u5305\u66f4\u65b0\u4e3a 11.x \u7248\u672c\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["Avalonia.Desktop \u5305\u4e0d\u518d\u5305\u542b\u4e3b\u9898\uff0c\u56e0\u6b64\u60a8\u9700\u8981\u6dfb\u52a0\u4ee5\u4e0b\u4efb\u4e00\u5305\u5f15\u7528\uff1a","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Avalonia.Themes.Fluent"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Avalonia.Themes.Simple"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u79fb\u9664\u5bf9",(0,s.jsx)(n.code,{children:"XamlNameReferenceGenerator"}),"\u5305\u7684\u5f15\u7528\uff0cAvalonia \u73b0\u5728\u9ed8\u8ba4\u5305\u542b\u5185\u7f6e\u7684\u751f\u6210\u5668\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5982\u6709\u9700\u8981\uff0c\u5c06",(0,s.jsx)(n.code,{children:"<LangVersion>"}),"\u66f4\u65b0\u81f3\u81f3\u5c11 9\uff0c\u4ee5\u4fbf\u4f7f\u7528\u4ec5\u9650\u521d\u59cb\u5316\u5c5e\u6027 (init-only properties)\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c\u9700\u8981\u4e0e 0.10 \u7248\u672c\u76f8\u540c\u7684\u5b57\u4f53\uff0c\u8fd8\u9700\u5305\u62ec",(0,s.jsx)(n.code,{children:"Avalonia.Fonts.Inter"}),"\u5305\uff0c\u5e76\u5728\u5e94\u7528\u7a0b\u5e8f\u6784\u5efa\u5668\u4e2d\u6dfb\u52a0",(0,s.jsx)(n.code,{children:".WithInterFont()"}),"\u3002\u5728 11.0 \u7248\u672c\u4e2d\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u5305\u542b\u4efb\u4f55\u81ea\u5b9a\u4e49\u5b57\u4f53\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4e3b\u9898\u5904\u7406",children:"\u4e3b\u9898\u5904\u7406"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 0.10 \u7248\u672c\u4e2d\uff0c\u4e3b\u9898\u76f4\u63a5\u5728",(0,s.jsx)(n.code,{children:"Application.axaml"}),"\u6587\u4ef6\u7684",(0,s.jsx)(n.code,{children:"Application.Styles"}),"\u6807\u7b7e\u5185\u6307\u5b9a\u3002\u4ee5\u4e0b\u662f\u793a\u4f8b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<Application.Styles>\n    <FluentTheme Mode="Light"/>\n</Application.Styles>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c",(0,s.jsx)(n.code,{children:"FluentTheme"}),"\u6807\u7b7e\u7684",(0,s.jsx)(n.code,{children:"Mode"}),'\u5c5e\u6027\u7528\u4e8e\u6307\u5b9a\u4e3b\u9898\u6a21\u5f0f\uff0c\u53ef\u4ee5\u662f "Light" \u6216 "Dark"\u3002']}),"\n",(0,s.jsxs)(n.p,{children:["\u5f15\u5165\u4e86\u4e00\u4e2a\u65b0\u5c5e\u6027",(0,s.jsx)(n.code,{children:"RequestedThemeVariant"}),"\uff0c\u7528\u4e8e",(0,s.jsx)(n.code,{children:"Application"}),'\u6807\u7b7e\uff0c\u8be5\u5c5e\u6027\u7528\u4e8e\u8bbe\u7f6e\u5e94\u7528\u7a0b\u5e8f\u7684\u4e3b\u9898\uff0c\u5982\u679c\u6307\u5b9a\u4e86\uff0c\u5219\u4f1a\u8986\u76d6\u7cfb\u7edf\u5f53\u524d\u7684\u4e3b\u9898\u3002\u5982\u679c\u8981\u9075\u5faa\u7cfb\u7edf\u5f53\u524d\u7684\u4e3b\u9898\uff0c\u53ef\u4ee5\u5c06\u5176\u8bbe\u7f6e\u4e3a "Default"\u3002\u5176\u4ed6\u53ef\u7528\u9009\u9879\u4e3a "Dark" \u548c "Light"\u3002']}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528\u8be5\u5c5e\u6027\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<Application xmlns="https://github.com/avaloniaui"\n             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n             x:Class="ILoveAvaloniaUI.App"\n             xmlns:local="using:ILoveAvaloniaUI"\n             RequestedThemeVariant="Default">\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"FluentTheme"}),"\u6807\u7b7e\u4e0d\u518d\u9700\u8981",(0,s.jsx)(n.code,{children:"Mode"}),"\u5c5e\u6027\uff0c\u53ef\u4ee5\u5c06\u5176\u7559\u7a7a\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"<Application.Styles>\n    <FluentTheme />\n</Application.Styles>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u4e3b\u9898\u5b57\u5178\u548c\u4e3b\u9898\u53d8\u4f53",children:"\u4e3b\u9898\u5b57\u5178\u548c\u4e3b\u9898\u53d8\u4f53"}),"\n",(0,s.jsxs)(n.p,{children:["\u6839\u636e PR ",(0,s.jsx)(n.a,{href:"https://github.com/AvaloniaUI/Avalonia/pull/8166",children:"#8166"}),"\uff0c\u73b0\u5728\u65b9\u6cd5 ",(0,s.jsx)(n.code,{children:"Styles.TryGetResource"})," \u9700\u8981\u4e00\u4e2a\u53ef\u4e3a\u7a7a\u7684 ",(0,s.jsx)(n.code,{children:"ThemeVariant"})," \u53c2\u6570\u3002\u8fd9\u5141\u8bb8\u7528\u6237\u6307\u5b9a ",(0,s.jsx)(n.code,{children:"Light"}),"\u3001",(0,s.jsx)(n.code,{children:"Dark"})," \u548c ",(0,s.jsx)(n.code,{children:"Default"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"ThemeVariant.Default"})," \u4f5c\u4e3a\u952e\u5c06\u7279\u5b9a\u7684\u4e3b\u9898\u5b57\u5178\u6807\u8bb0\u4e3a\u4e00\u79cd\u56de\u9000\uff08fallback\uff09\uff0c\u4ee5\u9632\u5728\u5176\u4ed6\u4e3b\u9898\u5b57\u5178\u4e2d\u627e\u4e0d\u5230\u4e3b\u9898\u53d8\u4f53\u6216\u8d44\u6e90\u952e\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u9664\u4e86\u5185\u7f6e\u7684 ",(0,s.jsx)(n.code,{children:"Light"}),"\u3001",(0,s.jsx)(n.code,{children:"Dark"})," \u548c ",(0,s.jsx)(n.code,{children:"Default"})," \u503c\u5916\uff0c\u4efb\u4f55\u5bf9\u8c61\u503c\u90fd\u53ef\u4ee5\u7528\u4f5c\u952e\uff08",(0,s.jsxs)(n.em,{children:["\u56e0\u4e3a\u5b83\u5305\u88c5\u5728 ",(0,s.jsx)(n.code,{children:"ThemeVariant(object key)"})," \u7ed3\u6784\u4e2d"]}),"\uff09\u3002\u5982\u679c\u5f00\u53d1\u4eba\u5458\u5e0c\u60f3\u8981\u5728 XAML \u4ee3\u7801\u4e2d\u5b9a\u4e49\u591a\u4e2a\u81ea\u5b9a\u4e49\u4e3b\u9898\u4f5c\u4e3a\u9759\u6001\u5c5e\u6027\u5e76\u4ece\u4e2d\u5f15\u7528\u5b83\u4eec\uff0c\u5219\u53ef\u4ee5\u5728\u6b64\u5904\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"{x:Static}"})," \u6807\u8bb0\u6269\u5c55\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:"// \u4ee5\u524d\nbool TryGetResource(object key, out object? value)\n\n// Avalonia v11\nbool TryGetResource(object key, ThemeVariant? theme, out object? value)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"systemreactiveobservables",children:"System.Reactive/Observables"}),"\n",(0,s.jsxs)(n.p,{children:["Avalonia \u4e0d\u518d\u4f9d\u8d56",(0,s.jsx)(n.code,{children:"System.Reactive"}),"\u3002\u5982\u679c\u60a8\u4f7f\u7528\u4e86\u54cd\u5e94\u5f0f\u7279\u6027\uff0c\u8bf7\u5c06",(0,s.jsx)(n.code,{children:"System.Reactive"}),"\u5305\u6dfb\u52a0\u5230\u60a8\u7684\u9879\u76ee\u4e2d\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u4e0d\u9700\u8981",(0,s.jsx)(n.code,{children:"System.Reactive"}),"\u7684\u5168\u90e8\u529f\u80fd\uff0c\u53ea\u662f\u60f3\u5bf9",(0,s.jsx)(n.code,{children:"IObservable<T>"}),"\u8fdb\u884c\u7b80\u5355\u7684\u8ba2\u9605\uff0c\u53ef\u4ee5\u4f7f\u7528 Avalonia \u63d0\u4f9b\u7684\u5b9e\u7528\u7c7b",(0,s.jsx)(n.code,{children:"AnonymousObserver<T>"}),"\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"observable.Subscribe(new AnonymousObserver<string>(() => { /* \u5f53\u53ef\u89c2\u5bdf\u5bf9\u8c61\u53d1\u751f\u66f4\u6539\u65f6\u6267\u884c\u7684\u4ee3\u7801 */ }));\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u9700\u8981\u8ba2\u9605\u5c5e\u6027\u6216\u4e8b\u4ef6\u66f4\u6539\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"AddClassHandler"})," \u800c\u4e0d\u662f observables\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u89c1",(0,s.jsx)(n.a,{href:"https://github.com/AvaloniaUI/Avalonia/pull/9749",children:"#9749"}),"\u548c",(0,s.jsx)(n.a,{href:"https://github.com/AvaloniaUI/Avalonia/pull/10105",children:"#10105"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u66f4\u65b0\u63a5\u53e3",children:"\u66f4\u65b0\u63a5\u53e3"}),"\n",(0,s.jsx)(n.p,{children:"\u5728 Avalonia 11 \u4e2d\u79fb\u9664\u4e86\u8bb8\u591a\u63a5\u53e3\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u5168\u5c40\u67e5\u627e/\u66ff\u6362\u5c06\u6bcf\u4e2a\u63a5\u53e3\u66ff\u6362\u4e3a\u5176\u5177\u4f53\u7c7b\u578b\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IAvaloniaObject"})," -> ",(0,s.jsx)(n.code,{children:"AvaloniaObject"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IBitmap"})," -> ",(0,s.jsx)(n.code,{children:"Bitmap"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IContentPresenter"})," -> ",(0,s.jsx)(n.code,{children:"ContentPresenter"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IControl"})," -> ",(0,s.jsx)(n.code,{children:"Control"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IInteractive"})," -> ",(0,s.jsx)(n.code,{children:"Interactive"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IItemsPresenter"})," -> ",(0,s.jsx)(n.code,{children:"ItemsPresenter"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ILayoutable"})," -> ",(0,s.jsx)(n.code,{children:"Layoutable"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IPanel"})," -> ",(0,s.jsx)(n.code,{children:"Panel"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IStyledElement"})," -> ",(0,s.jsx)(n.code,{children:"StyledElement"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ITemplatedControl"})," -> ",(0,s.jsx)(n.code,{children:"TemplatedControl"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IVisual"})," -> ",(0,s.jsx)(n.code,{children:"Visual"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u60a8\u6709\u81ea\u5df1\u7684\u63a5\u53e3\u6d3e\u751f\u81ea\u4e0a\u8ff0\u63a5\u53e3\u4e4b\u4e00\uff0c\u60a8\u9700\u8981\u79fb\u9664\u63a5\u53e3\u7ee7\u627f\uff0c\u5e76\u5728\u4f7f\u7528\u70b9\u4e0a\u663e\u5f0f\u5730\u5c06\u5176\u8f6c\u6362\u4e3a\u5177\u4f53\u7c7b\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u89c1",(0,s.jsx)(n.a,{href:"https://github.com/AvaloniaUI/Avalonia/pull/9553",children:"#9553"}),"\u548c",(0,s.jsx)(n.a,{href:"https://github.com/AvaloniaUI/Avalonia/pull/11495",children:"#11495"}),"\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u63a8\u8350\u7684\u53ef\u9009\u62e9\u66f4\u6539",children:"\u63a8\u8350\u7684\u53ef\u9009\u62e9\u66f4\u6539\uff1a"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"IStyleable"}),"\u63a5\u53e3\u73b0\u5728\u5df2\u88ab\u5f03\u7528\u3002\u5728 Avalonia 0.10.x \u4e2d\uff0c\u8981\u8986\u76d6\u63a7\u4ef6\u7684\u6837\u5f0f\u952e\uff0c\u60a8\u9700\u8981\u5b9e\u73b0",(0,s.jsx)(n.code,{children:"IStyleable"}),"\u5e76\u4e3a",(0,s.jsx)(n.code,{children:"StyleKey"}),"\u6dfb\u52a0\u663e\u5f0f\u63a5\u53e3\u5b9e\u73b0\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"class MyButton : Button, IStyleable\n{\n    Type IStyleable.StyleKey => typeof(Button);\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 Avalonia 11 \u4e2d\uff0c",(0,s.jsx)(n.code,{children:"IStyleable"}),"\u5f15\u7528\u5c06\u663e\u793a\u5f03\u7528\u8b66\u544a\u3002\u6539\u4e3a\u4f7f\u7528\u4ee5\u4e0b\u4ee3\u7801\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"class MyButton : Button\n{\n    protected override Type StyleKeyOverride => typeof(Button);\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u89c1",(0,s.jsx)(n.a,{href:"https://github.com/AvaloniaUI/Avalonia/pull/11380",children:"#11380"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u89c6\u56fe",children:"\u89c6\u56fe"}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee5",(0,s.jsx)(n.code,{children:".axaml"}),"/",(0,s.jsx)(n.code,{children:".axaml.cs"}),"\uff08\u6216",(0,s.jsx)(n.code,{children:".xaml"}),"/",(0,s.jsx)(n.code,{children:".xaml.cs"}),"\uff09\u5f62\u5f0f\u7684\u89c6\u56fe\u73b0\u5728\u5177\u6709\u81ea\u52a8\u751f\u6210\u7684 C# \u4ee3\u7801\u3002\u8981\u5b9e\u73b0\u6b64\u76ee\u7684\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5c06 .cs \u6587\u4ef6\u4e2d\u7684\u7c7b\u8bbe\u7f6e\u4e3a",(0,s.jsx)(n.code,{children:"partial"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u79fb\u9664 ",(0,s.jsx)(n.code,{children:"private void InitializeComponent()"})," \u65b9\u6cd5\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5728\u6784\u9020\u51fd\u6570\u4e2d",(0,s.jsx)(n.strong,{children:"\u4e0d\u8981"}),"\u79fb\u9664\u5bf9 ",(0,s.jsx)(n.code,{children:"InitializeComponent()"})," \u7684\u8c03\u7528\uff0c\u56e0\u4e3a\u8be5\u65b9\u6cd5\u73b0\u5728\u662f\u751f\u6210\u7684\u65b9\u6cd5\uff0c\u4ecd\u7136\u9700\u8981\u8c03\u7528\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4ece\u6784\u9020\u51fd\u6570\u4e2d\u79fb\u9664 ",(0,s.jsx)(n.code,{children:"this.AttachDevTools()"})," \u8c03\u7528\u2014\u2014",(0,s.jsx)(n.code,{children:"InitializeComponent"})," \u73b0\u5728\u6709\u4e00\u4e2a\u53c2\u6570\uff0c\u8be5\u53c2\u6570\u63a7\u5236\u662f\u5426\u5728\u8c03\u8bd5\u6a21\u5f0f\u4e0b\u9644\u52a0 DevTools\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,s.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee5\u524d\uff0c\u8981\u67e5\u627e\u5728 XAML \u6587\u4ef6\u4e2d\u58f0\u660e\u7684\u5177\u6709\u540d\u79f0\u7684\u63a7\u4ef6\uff0c\u9700\u8981\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"this.FindControl<T>(string name)"})," \u6216 ",(0,s.jsx)(n.code,{children:"this.GetControl<T>(string name)"}),"\u3002\u73b0\u5728\u4e0d\u518d\u9700\u8981\u2014\u2014\u5728 XAML \u6587\u4ef6\u4e2d\u5e26\u6709 ",(0,s.jsx)(n.code,{children:"Name"})," \u6216 ",(0,s.jsx)(n.code,{children:"x:Name"})," \u5c5e\u6027\u7684\u63a7\u4ef6\u5c06\u81ea\u52a8\u5728\u7c7b\u4e2d\u751f\u6210\u4e00\u4e2a\u5b57\u6bb5\uff0c\u7528\u4e8e\u8bbf\u95ee\u547d\u540d\u7684\u63a7\u4ef6\uff08\u4e0e WPF/UWP \u7b49\u7c7b\u4f3c\uff09\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u8bf7\u6ce8\u610f\uff0c\u6b64\u6e90\u751f\u6210\u5668\u4ec5\u9002\u7528\u4e8e C#\u3002\u5bf9\u4e8e F#\uff0c\u6ca1\u6709\u8fdb\u884c\u4efb\u4f55\u66f4\u6539\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"itemscontrol",children:"ItemsControl"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ItemsControl"})," \u548c\u6d3e\u751f\u7c7b\uff08\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"ListBox"})," \u548c ",(0,s.jsx)(n.code,{children:"ComboBox"}),"\uff09\u73b0\u5728\u90fd\u6709 ",(0,s.jsx)(n.code,{children:"Items"})," \u5c5e\u6027\u548c ",(0,s.jsx)(n.code,{children:"ItemsSource"})," \u5c5e\u6027\uff0c\u4e0e WPF/UWP \u7c7b\u4f3c\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Items"})," \u662f\u4e00\u4e2a\u53ea\u8bfb\u96c6\u5408\u5c5e\u6027\uff0c\u9884\u5148\u586b\u5145\u6570\u636e\uff0c\u800c ",(0,s.jsx)(n.code,{children:"ItemsSource"})," \u662f\u8bfb\u5199\u7248\u672c\uff0c\u5176\u9ed8\u8ba4\u503c\u4e3a null\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5c06\u6240\u6709\u7ed1\u5b9a\u5230 ",(0,s.jsx)(n.code,{children:"Items"})," \u7684\u7ed1\u5b9a\u66f4\u6539\u4e3a\u7ed1\u5b9a\u5230 ",(0,s.jsx)(n.code,{children:"ItemsSource"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<ListBox Items="{Binding Items}">\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u66ff\u6362\u4e3a\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<ListBox ItemsSource="{Binding Items}">\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u6b64\u5916\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ListBox.VirtualizationMode"})," \u5df2\u79fb\u9664\uff0c\u865a\u62df\u5316\u6a21\u5f0f\u901a\u8fc7\u66f4\u6539 ",(0,s.jsx)(n.code,{children:"ItemsPanel"})," \u5b9e\u73b0\uff1a","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u7981\u7528\u865a\u62df\u5316\uff0c\u8bf7\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"StackPanel"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u542f\u7528\u865a\u62df\u5316\uff0c\u8bf7\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"VirtualizingStackPanel"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Carousel.IsVirtualizing"})," \u5df2\u79fb\u9664\uff0c\u73b0\u5728\u53ea\u6709 ",(0,s.jsx)(n.code,{children:"Carousel"})," \u7684\u865a\u62df\u5316\u6a21\u5f0f\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u9879\u5bb9\u5668\u67e5\u627e\u5df2\u79fb\u81f3 ",(0,s.jsx)(n.code,{children:"ItemsControl"}),"\uff0c\u7c7b\u4f3c UWP\uff08\u65e7\u65b9\u6cd5\u4fdd\u7559\u5728 ItemContainerGenerator \u4e0a\uff0c\u5e76\u6807\u8bb0\u4e3a [Obsolete]\uff09\uff1a","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ItemsControl.ContainerFromIndex(object item)"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ItemsControl.IndexFromContainer(Control container)"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ItemsPresenter"})," \u4e0a\u7684 ",(0,s.jsx)(n.code,{children:"Items"})," \u548c ",(0,s.jsx)(n.code,{children:"ItemTemplate"})," \u5c5e\u6027\u5df2\u79fb\u9664\u3002\u5728\u63a7\u4ef6\u6a21\u677f\u4e2d\u5bf9\u8fd9\u4e9b\u5c5e\u6027\u7684\u6a21\u677f\u7ed1\u5b9a\u53ef\u4ee5\u76f4\u63a5\u79fb\u9664\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u89c1",(0,s.jsx)(n.a,{href:"https://github.com/AvaloniaUI/Avalonia/pull/10590",children:"#10590"}),"\u548c",(0,s.jsx)(n.a,{href:"https://github.com/AvaloniaUI/Avalonia/pull/10827",children:"#10827"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"StyledElement.Classes"})," \u73b0\u5728\u662f\u4e00\u4e2a\u53ea\u8bfb\u5c5e\u6027\u3002\u5728\u5bf9\u8c61\u521d\u59cb\u5316\u5668\u4e2d\u4f7f\u7528\u65f6\uff0c\u4ee5\u524d\u7684\u4ee3\u7801\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'var c = new Control\n{\n    Classes = new Classes("foo", "bar"),\n};\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u73b0\u5728\u53ef\u4ee5\u66f4\u6539\u4e3a\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'var c = new Control\n{\n    Classes = { "foo", "bar" },\n};\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u5bf9\u8c61\u521d\u59cb\u5316\u5668\u4e4b\u5916\u64cd\u4f5c ",(0,s.jsx)(n.code,{children:"Classes"})," \u96c6\u5408\u65f6\uff0c\u8bf7\u4f7f\u7528\u6807\u51c6\u7684 ",(0,s.jsx)(n.code,{children:"IList<string>"})," \u65b9\u6cd5\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u89c1",(0,s.jsx)(n.a,{href:"https://github.com/AvaloniaUI/Avalonia/pull/11013",children:"#11013"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"windows",children:"Windows"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"TopLEvel.PlatformImpl"})," API \u4e0d\u518d\u9002\u7528\u4e8e ",(0,s.jsx)(n.code,{children:"Window"})," \u7b49\u63a7\u4ef6\u3002\u76f8\u5173\u65b9\u6cd5\u5df2\u79fb\u81f3 ",(0,s.jsx)(n.code,{children:"TopLevel"}),"\u3001",(0,s.jsx)(n.code,{children:"WindowBase"})," \u6216 ",(0,s.jsx)(n.code,{children:"Window"})," \u81ea\u8eab\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"window.PlatformImpl.Handle"})," \u53d8\u4e3a ",(0,s.jsx)(n.code,{children:"window.TryGetPlatformHandle()"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"window.PlatformImpl.BeginMove(e)"})," \u53d8\u4e3a ",(0,s.jsx)(n.code,{children:"window.BeginMove()"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"window.PlatformImpl.Resized"})," \u53d8\u4e3a ",(0,s.jsx)(n.code,{children:"window.Resized"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"assetloader",children:"AssetLoader"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"IAssetLoader"})," \u63a5\u53e3\u4e0d\u518d\u53ef\u7528\u3002\u8bf7\u4f7f\u7528\u9759\u6001\u7c7b ",(0,s.jsx)(n.code,{children:"AssetLoader"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"var assets = AvaloniaLocator.Current.GetService<IAssetLoader>();\nvar bitmap = new Bitmap(assets.Open(new Uri(uri)));\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u66ff\u6362\u4e3a\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"var bitmap = new Bitmap(AssetLoader.Open(new Uri(uri)));\n"})}),"\n",(0,s.jsx)(n.h2,{id:"onpropertychanged",children:"OnPropertyChanged"}),"\n",(0,s.jsxs)(n.p,{children:["\u865a\u62df\u7684 ",(0,s.jsx)(n.code,{children:"AvaloniaObject.OnPropertyChanged"})," \u65b9\u6cd5\u73b0\u5728\u662f\u975e\u6cdb\u578b\u7684\u3002\u5c06\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"protected override void OnPropertyChanged<T>(AvaloniaPropertyChangedEventArgs<T> change)\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u66ff\u6362\u4e3a\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"protected override void OnPropertyChanged(AvaloniaPropertyChangedEventArgs change)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd8\u6709\u4e00\u79cd\u65b9\u6cd5\u53ef\u4ee5\u4ece ",(0,s.jsx)(n.code,{children:"AvaloniaPropertyChangedEventArgs"})," \u4e2d\u83b7\u53d6\u65e7\u503c\u548c\u65b0\u503c\uff0c\u800c\u65e0\u9700\u88c5\u7bb1\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5c06 ",(0,s.jsx)(n.code,{children:"change.NewValue.GetValueOrDefault<T>()"})," \u66ff\u6362\u4e3a ",(0,s.jsx)(n.code,{children:"change.GetNewValue<bool>()"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u5c06 ",(0,s.jsx)(n.code,{children:"change.OldValue.GetValueOrDefault<T>()"})," \u66ff\u6362\u4e3a ",(0,s.jsx)(n.code,{children:"change.GetOldValue<bool>()"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"change.GetOldAndNewValue<T>()"})," \u6765\u83b7\u53d6\u8fd9\u4e24\u4e2a\u503c"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u89c1",(0,s.jsx)(n.a,{href:"https://github.com/AvaloniaUI/Avalonia/pull/7980",children:"#7980"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4e8b\u4ef6",children:"\u4e8b\u4ef6"}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u4e8b\u4ef6\u5df2\u66f4\u540d\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"PointerEnter"})," -> ",(0,s.jsx)(n.code,{children:"PointerEntered"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"PointerLeave"})," -> ",(0,s.jsx)(n.code,{children:"PointerExited"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ContextMenu"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ContextMenuClosing"})," -> ",(0,s.jsx)(n.code,{children:"Closing"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ContextMenuOpening"})," -> ",(0,s.jsx)(n.code,{children:"Opening"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"MenuBase"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"MenuClosed"})," -> ",(0,s.jsx)(n.code,{children:"Closed"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"MenuOpened"})," -> ",(0,s.jsx)(n.code,{children:"Opened"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"RoutedEventArgs.Source"})," \u7684\u7c7b\u578b\u4ece ",(0,s.jsx)(n.code,{children:"IInteractive"})," \u66f4\u6539\u4e3a ",(0,s.jsx)(n.code,{children:"object"}),": \uff1a\u9700\u8981\u5c06\u5176\u8f6c\u6362\u4e3a\u5177\u4f53\u7c7b\u578b\uff08\u5982 ",(0,s.jsx)(n.code,{children:"Control"}),"\uff09\u624d\u80fd\u4f7f\u7528\u5b83\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5e03\u5c40",children:"\u5e03\u5c40"}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u524d\uff0c\u53ef\u4ee5\u901a\u8fc7\u83b7\u53d6\u5e03\u5c40\u6839\u5e76\u5728\u5e03\u5c40\u7ba1\u7406\u5668\u4e0a\u8c03\u7528\u65b9\u6cd5\u6765\u5b9e\u73b0\u5b8c\u6574\u7684\u5e03\u5c40\u8fc7\u7a0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"((ILayoutRoot)control).LayoutManager.ExecuteLayout();\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"LayoutManager"})," \u4e0d\u518d\u4ece ",(0,s.jsx)(n.code,{children:"ILayoutRoot"})," \u66b4\u9732\u51fa\u6765\uff0c\u800c\u662f\u4e0e WPF/UWP \u4e00\u6837\uff0c\u5728\u4efb\u4f55\u63a7\u4ef6\u4e0a\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"UpdateLayout"})," \u65b9\u6cd5\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"control.UpdateLayout();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 0.10.x \u7248\u672c\u4e2d\uff0c\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"ILayoutable"})," \u6765\u83b7\u53d6\u5148\u524d\u7684\u6d4b\u91cf\u7ea6\u675f\u548c\u6392\u5217\u8fb9\u754c\u3002\u7531\u4e8e ",(0,s.jsx)(n.code,{children:"ILayoutable"})," \u4e0d\u518d\u53ef\u7528\uff0c\u73b0\u5728\u53ef\u4ee5\u4ece ",(0,s.jsx)(n.code,{children:"LayoutInformation"})," \u4e2d\u83b7\u53d6\u5b83\u4eec\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Size? LayoutInformation.GetPreviousMeasureConstraint(Layoutable control)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Rect? LayoutInformation.GetPreviousArrangeBounds(Layoutable control)"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u7126\u70b9",children:"\u7126\u70b9"}),"\n",(0,s.jsxs)(n.p,{children:["\u7126\u70b9\u7ba1\u7406\u5668\u4e0d\u518d\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"FocusManager.Instance"})," \u8bbf\u95ee\uff0c\u800c\u662f\u79fb\u81f3 ",(0,s.jsx)(n.code,{children:"TopLevel"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"var focusManager = FocusManager.Instance;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u66ff\u6362\u4e3a:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"var focusManager = TopLevel.GetTopLevel(control).FocusManager;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6b64\u5916\uff0c",(0,s.jsx)(n.code,{children:"IFocusManager"})," API \u5df2\u66f4\u6539\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u8981\u83b7\u53d6\u5f53\u524d\u805a\u7126\u7684\u5143\u7d20\uff0c\u8bf7\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"IFocusManager.GetFocusedElement()"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u8981\u805a\u7126\u4e00\u4e2a\u63a7\u4ef6\uff0c\u8bf7\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"control.Focus()"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u76ee\u524d\u6ca1\u6709\u76d1\u542c ",(0,s.jsx)(n.code,{children:"IFocusManager"})," \u7684\u7126\u70b9\u66f4\u6539\u7684\u4e8b\u4ef6\u3002\u8981\u76d1\u542c\u7126\u70b9\u66f4\u6539\uff0c\u8bf7\u6dfb\u52a0\u4e00\u4e2a\u76d1\u542c\u5668\u5230 ",(0,s.jsx)(n.code,{children:"InputElement.GotFocusEvent"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"InputElement.GotFocusEvent.AddClassHandler<InputElement>((element, args) => { });\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u952e\u76d8\u8bbe\u5907\u4e5f\u662f\u5982\u6b64\uff0c\u4e0d\u518d\u53ef\u8bbf\u95ee\u3002\u8bf7\u4f7f\u7528\u4e0e\u7126\u70b9\u76f8\u5173\u7684\u76f8\u540c API \u8fdb\u884c\u66ff\u6362\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u89c1",(0,s.jsx)(n.a,{href:"https://github.com/AvaloniaUI/Avalonia/pull/11407",children:"#11407"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u89c6\u89c9\u6811",children:"\u89c6\u89c9\u6811"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 0.10.x \u7248\u672c\u4e2d\uff0c\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"IVisual"})," \u66b4\u9732\u63a7\u4ef6\u7684\u89c6\u89c9\u7236\u7ea7\u548c\u89c6\u89c9\u5b50\u7ea7\u3002\u7531\u4e8e ",(0,s.jsx)(n.code,{children:"IVisual"})," \u4e0d\u518d\u53ef\u7528\uff0c\u73b0\u5728\u5c06\u5176\u4f5c\u4e3a\u6269\u5c55\u65b9\u6cd5\u66b4\u9732\u5728 ",(0,s.jsx)(n.code,{children:"Avalonia.VisualTree"})," \u547d\u540d\u7a7a\u95f4\u4e2d\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"using Avalonia.VisualTree;\n\nvar visualParent = control.GetVisualParent();\nvar visualChildren = control.GetVisualChildren();\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6e32\u67d3",children:"\u6e32\u67d3"}),"\n",(0,s.jsxs)(n.p,{children:["\u67d0\u4e9b\u63a7\u4ef6\u7684 ",(0,s.jsx)(n.code,{children:"Render"})," \u65b9\u6cd5\u73b0\u5728\u5df2\u88ab\u6807\u8bb0\u4e3a sealed\u3002\u8fd9\u662f\u56e0\u4e3a\u8ba1\u5212\u8ba9\u8fd9\u4e9b\u63a7\u4ef6\u4f7f\u7528\u7ec4\u5408\u539f\u8bed\u800c\u4e0d\u662f\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"DrawingContext"})," \u8fdb\u884c\u6e32\u67d3\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u7684\u63a7\u4ef6\u7684 ",(0,s.jsx)(n.code,{children:"Render"})," \u65b9\u6cd5\u88ab\u91cd\u8f7d\u4f46\u73b0\u5728\u88ab\u6807\u8bb0\u4e3a sealed\uff0c\u8bf7\u8003\u8651\u4f7f\u7528\u4e00\u4e2a\u57fa\u7c7b\uff0c\u4f8b\u5982\u4e0d\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"Border"})," \u800c\u662f\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"Decorator"}),"\u3002\u8bf7\u6ce8\u610f\uff0c\u60a8\u73b0\u5728\u9700\u8981\u81ea\u884c\u7ed8\u5236\u80cc\u666f/\u8fb9\u6846\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u89c1",(0,s.jsx)(n.a,{href:"https://github.com/AvaloniaUI/Avalonia/pull/10299",children:"#10299"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5b9a\u4f4d\u5668",children:"\u5b9a\u4f4d\u5668"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"AvaloniaLocator"})," \u4e0d\u518d\u53ef\u7528\u3002\u73b0\u5728\u5927\u591a\u6570\u901a\u8fc7\u5b9a\u4f4d\u5668\u53ef\u7528\u7684\u670d\u52a1\u90fd\u6709\u66ff\u4ee3\u65b9\u6cd5\uff1a"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"AssetLoader"})," \u73b0\u5728\u662f\u4e00\u4e2a\u9759\u6001\u7c7b\uff0c\u5177\u6709\u6240\u6709\u65e7\u65b9\u6cd5\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IPlatformSettings"})," \u5df2\u79fb\u5230 ",(0,s.jsx)(n.code,{children:"TopLevel.PlatformSettings"})," \u548c ",(0,s.jsx)(n.code,{children:"Application.PlatformSettings"}),"\u3002\u8bf7\u6ce8\u610f\uff0c\u59cb\u7ec8\u5e94\u4f18\u5148\u4f7f\u7528\u7279\u5b9a\u9876\u7ea7\uff08\u7a97\u53e3\uff09\u7684\u8bbe\u7f6e\uff0c\u800c\u4e0d\u662f\u5168\u5c40\u8bbe\u7f6e\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IClipboard"})," \u5df2\u79fb\u5230 ",(0,s.jsx)(n.code,{children:"TopLevel.Clipboard"}),"\u3002\u8bf7\u6ce8\u610f\uff0c",(0,s.jsx)(n.code,{children:"Application.Clipboard"})," \u4e5f\u5df2\u88ab\u79fb\u9664\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"PlatformHotkeyConfiguration"})," \u5df2\u79fb\u5230 ",(0,s.jsx)(n.code,{children:"PlatformSettings.HotkeyConfiguration"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4e00\u4e9b\u5e94\u7528\u7a0b\u5e8f\u5c06 ",(0,s.jsx)(n.code,{children:"AvaloniaLocator"})," \u7528\u4f5c\u901a\u7528\u670d\u52a1\u5b9a\u4f4d\u5668\u3002\u8fd9\u4ece\u672a\u662f ",(0,s.jsx)(n.code,{children:"AvaloniaLocator"})," \u7684\u9884\u671f\u7528\u6cd5\uff0c\u8fd9\u4e9b\u5e94\u7528\u7a0b\u5e8f\u5e94\u8be5\u8f6c\u5411\u4e13\u4e3a\u6b64\u76ee\u7684\u8bbe\u8ba1\u7684\u670d\u52a1\u5b9a\u4f4d\u5668\u6216\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668\uff0c\u4f8b\u5982 ",(0,s.jsx)(n.a,{href:"https://www.reactiveui.net/docs/handbook/dependency-inversion/",children:(0,s.jsx)(n.code,{children:"Splat"})})," \u6216 ",(0,s.jsx)(n.code,{children:"Microsoft.Extensions.DependencyInjection"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6742\u9879\u9ad8\u7ea7\u573a\u666f",children:"\u6742\u9879/\u9ad8\u7ea7\u573a\u666f"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IRenderer"}),"/",(0,s.jsx)(n.code,{children:"DeferredRenderer"}),"/",(0,s.jsx)(n.code,{children:"ImmediateRenderer"})," \u73b0\u5728\u5df2\u79fb\u9664\u3002\u51fa\u4e8e\u6027\u80fd\u539f\u56e0\uff0c\u4e0d\u518d\u5141\u8bb8\u63d0\u4f9b\u81ea\u5df1\u7684\u6e32\u67d3\u5668\uff0c\u73b0\u5728\u6240\u6709\u5185\u5bb9\u90fd\u4f7f\u7528\u65b0\u7684\u7ec4\u5408\u6e32\u67d3\u5668\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Renderer.Diagnostics"})," \u73b0\u5728\u662f ",(0,s.jsx)(n.code,{children:"RendererDiagnostics"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ICustomDrawOperation.Render"})," \u73b0\u5728\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"ImmediateDrawingContext"})," \u800c\u4e0d\u662f ",(0,s.jsx)(n.code,{children:"DrawingContext"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u5728\u76f4\u63a5\u8fd4\u56de ",(0,s.jsx)(n.code,{children:"Task"})," \u7684\u65b9\u6cd5\u4e2d\uff0c\u5728\u5bf9 ",(0,s.jsx)(n.code,{children:"Dispatcher.UIThread.InvokeAsync"})," \u8fdb\u884c\u8c03\u7528\u65f6\uff0c\u8bf7\u5728\u8c03\u7528\u7ed3\u5c3e\u6dfb\u52a0 ",(0,s.jsx)(n.code,{children:".GetTask()"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IRenderRoot.RenderScaling"}),"  \u5df2\u79fb\u81f3 ",(0,s.jsx)(n.code,{children:"TopLevel.RenderScaling"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"LightweightObservableBase"})," \u548c ",(0,s.jsx)(n.code,{children:"SingleSubscriberObservableBase"})," \u73b0\u5728\u5df2\u53d8\u4e3a\u5185\u90e8\u7c7b\u3002\u8fd9\u4e9b\u5b9e\u7528\u7a0b\u5e8f\u7c7b\u8bbe\u8ba1\u7528\u4e8e Avalonia \u4e2d\u7684\u7279\u5b9a\u76ee\u7684\uff0c\u5e76\u4e0d\u6253\u7b97\u7531\u5ba2\u6237\u7aef\u4f7f\u7528\uff0c\u56e0\u4e3a\u5b83\u4eec\u4e0d\u80fd\u5904\u7406\u67d0\u4e9b\u8fb9\u7f18\u60c5\u51b5\u3002\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"System.Reactive"}),"  \u63d0\u4f9b\u7684\u673a\u5236\u6765\u521b\u5efa\u53ef\u89c2\u5bdf\u5bf9\u8c61\uff0c\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"Observable.Create"})]}),"\n",(0,s.jsx)(n.li,{children:"\u5728\u7ed1\u5b9a\u5230\u65b9\u6cd5\u65f6\uff0c\u65b9\u6cd5\u5fc5\u987b\u6ca1\u6709\u53c2\u6570\u6216\u4ec5\u6709\u4e00\u4e2a\u5bf9\u8c61\u53c2\u6570\u3002"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"OpenFileDialog"})," \u548c ",(0,s.jsx)(n.code,{children:"SaveFileDialog"})," \u73b0\u5728\u5df2\u79fb\u9664\u3002\u5bf9\u4e8e\u6587\u4ef6\u7cfb\u7edf\u5b58\u50a8\u670d\u52a1\uff0c\u8bf7\u5728 ",(0,s.jsx)(n.code,{children:"TopLevel"})," \u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"IStorageProvider"}),"\u3002"]}),"\n"]})]})}function t(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,l)=>{l.d(n,{Z:()=>r,a:()=>d});var s=l(67294);const c={},i=s.createContext(c);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);