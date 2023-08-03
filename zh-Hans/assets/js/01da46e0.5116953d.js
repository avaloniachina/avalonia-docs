"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[89930],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,k=s["".concat(u,".").concat(d)]||s[d]||m[d]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93443:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={description:"TUTORIALS - Music Store App"},l="\u5bf9\u8bdd\u6846\u8fd4\u56de",o={unversionedId:"tutorials/music-store-app/return-from-dialog",id:"tutorials/music-store-app/return-from-dialog",title:"\u5bf9\u8bdd\u6846\u8fd4\u56de",description:"TUTORIALS - Music Store App",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/tutorials/music-store-app/return-from-dialog.md",sourceDirName:"tutorials/music-store-app",slug:"/tutorials/music-store-app/return-from-dialog",permalink:"/avalonia-docs/zh-Hans/docs/next/tutorials/music-store-app/return-from-dialog",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/tutorials/music-store-app/return-from-dialog.md",tags:[],version:"current",frontMatter:{description:"TUTORIALS - Music Store App"},sidebar:"documentationSidebar",previous:{title:"\u5c55\u793a\u56fe\u8c61",permalink:"/avalonia-docs/zh-Hans/docs/next/tutorials/music-store-app/displaying-images"},next:{title:"\u5c06\u9879\u76ee\u6dfb\u52a0\u5230\u7528\u6237\u7684\u96c6\u5408\u4e2d",permalink:"/avalonia-docs/zh-Hans/docs/next/tutorials/music-store-app/add-items-to-users-collection"}},u={},p=[{value:"\u8d2d\u4e70\u4e13\u8f91\u547d\u4ee4",id:"\u8d2d\u4e70\u4e13\u8f91\u547d\u4ee4",level:2},{value:"\u6309\u94ae\u6570\u636e\u7ed1\u5b9a",id:"\u6309\u94ae\u6570\u636e\u7ed1\u5b9a",level:2},{value:"\u5173\u95ed\u5bf9\u8bdd\u6846",id:"\u5173\u95ed\u5bf9\u8bdd\u6846",level:2}],c={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5bf9\u8bdd\u6846\u8fd4\u56de"},"\u5bf9\u8bdd\u6846\u8fd4\u56de"),(0,r.kt)("p",null,"\u5728\u8fd9\u4e00\u9875\u4e2d\uff0c\u60a8\u5c06\u6dfb\u52a0\u4ee3\u7801\uff0c\u4ece\u641c\u7d22\u5bf9\u8bdd\u6846\u8fd4\u56de\u9009\u5b9a\u7684\u4e13\u8f91\u4f20\u9012\u7ed9\u4e3b\u7a97\u53e3\u3002"),(0,r.kt)("h2",{id:"\u8d2d\u4e70\u4e13\u8f91\u547d\u4ee4"},"\u8d2d\u4e70\u4e13\u8f91\u547d\u4ee4"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u60a8\u9700\u8981\u5728\u97f3\u4e50\u5546\u5e97\u89c6\u56fe\u6a21\u578b\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u54cd\u5e94\u5f0f\u547d\u4ee4\u3002\u60a8\u5c06\u628a\u5b83\u7ed1\u5b9a\u5230\u97f3\u4e50\u5546\u5e97\u89c6\u56fe\u4e0a\u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u8d2d\u4e70\u4e13\u8f91")," \u6309\u94ae\u3002"),(0,r.kt)("p",null,"\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u6dfb\u52a0\u54cd\u5e94\u5f0f\u547d\u4ee4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u5e94\u7528\u7a0b\u5e8f\u6b63\u5728\u8fd0\u884c\uff0c\u8bf7\u505c\u6b62\u5b83\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u627e\u5230\u5e76\u6253\u5f00 ",(0,r.kt)("strong",{parentName:"li"},"MusicStoreViewModel.cs")," \u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u54cd\u5e94\u5f0f\u547d\u4ee4\u58f0\u660e\uff0c\u5982\u4e0b\u6240\u793a\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public ReactiveCommand<Unit, AlbumViewModel?> BuyMusicCommand { get; }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u6784\u9020\u51fd\u6570\u4e2d\u6dfb\u52a0\u4ee3\u7801\u4ee5\u521d\u59cb\u5316\u54cd\u5e94\u5f0f\u547d\u4ee4\uff0c\u5982\u4e0b\u6240\u793a\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public MusicStoreViewModel()\n{\n    BuyMusicCommand = ReactiveCommand.Create(() =>\n    {\n         return SelectedAlbum;\n    });\n    \n    ...\n}\n")),(0,r.kt)("p",null,"\u6ce8\u610f\u8fd9\u91cc\u4f7f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactiveCommand"),"\u3002\u8fd9\u662f\u7531 ",(0,r.kt)("em",{parentName:"p"},"ReactiveUI")," \u6846\u67b6\u63d0\u4f9b\u7684\uff0c\u7528\u4e8e\u5b9e\u73b0\u4e00\u4e9b MVVM \u4ea4\u4e92\u3002\u5177\u4f53\u6765\u8bf4\uff0c\u5b83\u5c06\u5141\u8bb8\u6211\u4eec\u5728\u6309\u94ae\u88ab\u70b9\u51fb\u65f6\u5c06\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"AlbumViewModel")," \u7c7b\u7684\u53c2\u6570\u4f20\u9012\u56de\u4e3b\u7a97\u53e3\u89c6\u56fe\u6a21\u578b\u3002"),(0,r.kt)("h2",{id:"\u6309\u94ae\u6570\u636e\u7ed1\u5b9a"},"\u6309\u94ae\u6570\u636e\u7ed1\u5b9a"),(0,r.kt)("p",null,"\u60a8\u7684\u4e0b\u4e00\u6b65\u662f\u5c06 ",(0,r.kt)("strong",{parentName:"p"},"\u8d2d\u4e70\u4e13\u8f91")," \u6309\u94ae\u7ed1\u5b9a\u5230\u97f3\u4e50\u5546\u5e97\u89c6\u56fe\u6a21\u578b\u4e2d\u7684\u54cd\u5e94\u5f0f\u547d\u4ee4\uff0c\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u627e\u5230\u5e76\u6253\u5f00 ",(0,r.kt)("strong",{parentName:"li"},"MusicStoreView.cs")," \u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5c06\u6570\u636e\u7ed1\u5b9a ",(0,r.kt)("inlineCode",{parentName:"li"},'Command="{Binding BuyMusicCommand}"')," \u6dfb\u52a0\u5230\u6309\u94ae\u5143\u7d20\u4e2d\u3002")),(0,r.kt)("h2",{id:"\u5173\u95ed\u5bf9\u8bdd\u6846"},"\u5173\u95ed\u5bf9\u8bdd\u6846"),(0,r.kt)("p",null,"\u5728\u8fd9\u4e00\u6b65\u4e2d\uff0c\u60a8\u5c06\u6dfb\u52a0\u4e00\u4e9b\u7a97\u53e3\u7ba1\u7406\u4ee3\u7801\uff0c\u4ee5\u4fbf\u5728\u7528\u6237\u5355\u51fb ",(0,r.kt)("strong",{parentName:"p"},"\u8d2d\u4e70\u4e13\u8f91")," \u6309\u94ae\u65f6\u5173\u95ed\u5bf9\u8bdd\u6846\u3002\u8fd9\u662f\u9664\u4e86\u60a8\u521a\u521a\u6dfb\u52a0\u7684\u6570\u636e\u7ed1\u5b9a\u4e4b\u5916\u6240\u9700\u7684\u3002"),(0,r.kt)("p",null,"\u6b63\u5982\u60a8\u5728\u6253\u5f00\u5bf9\u8bdd\u6846\u7684\u4ee3\u7801\u4e2d\u6240\u770b\u5230\u7684\uff0c\u60a8\u53ef\u4ee5\u5728\u7a97\u53e3\u7684\u4ee3\u7801\u540e\u53f0\u5b9e\u73b0\u7a97\u53e3\u7ba1\u7406\uff0c\u5e76\u4f7f\u7528 ",(0,r.kt)("em",{parentName:"p"},"ReactiveUI")," \u6846\u67b6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactiveWindow")," \u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u6dfb\u52a0\u5173\u95ed\u5bf9\u8bdd\u6846\u7684\u4ee3\u7801\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u627e\u5230\u5e76\u6253\u5f00 ",(0,r.kt)("strong",{parentName:"li"},"MusicStoreWindow.axaml.cs")," \u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"li"},"using System;")," \u7684\u5f15\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u66f4\u6539\u57fa\u7c7b\uff0c\u4f7f\u89c6\u56fe\u7ee7\u627f\u81ea ",(0,r.kt)("inlineCode",{parentName:"li"},"ReactiveWindow<MusicStoreViewModel>"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u6784\u9020\u51fd\u6570\u7684\u672b\u5c3e\u6dfb\u52a0\u4ee5\u4e0b\u884c\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"this.WhenActivated(action => action(ViewModel!.BuyMusicCommand.Subscribe(Close)));\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"ReactiveUI")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"WhenActivated")," \u65b9\u6cd5\u5b9a\u4e49\u4e86\u7a97\u53e3\u6fc0\u6d3b\u65f6\uff08\u5728\u5c4f\u5e55\u4e0a\u53ef\u89c1\uff09\u53d1\u751f\u7684\u64cd\u4f5c\u3002Lambda \u8868\u8fbe\u5f0f\u5c06\u88ab\u8c03\u7528\uff0c\u5e76\u4f20\u9012\u4e00\u4e2a\u53ef\u91ca\u653e\u7684\u64cd\u4f5c\uff0c\u4ee5\u4fbf\u5728\u7a97\u53e3\u4e0d\u518d\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u65f6\u53d6\u6d88\u8ba2\u9605\u3002"),(0,r.kt)("p",null,"\u60a8\u7684\u97f3\u4e50\u5546\u5e97\u7a97\u53e3\u4ee3\u7801\u540e\u53f0\u73b0\u5728\u5e94\u8be5\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using Avalonia.ReactiveUI;\nusing AvaloniaApplication11.ViewModels;\nusing ReactiveUI;\nusing System;\n\nnamespace Avalonia.MusicStore.Views\n{\n    public partial class MusicStoreWindow : ReactiveWindow<MusicStoreViewModel>\n    {\n        public MusicStoreWindow()\n        {\n            InitializeComponent();\n            this.WhenActivated(d => d(ViewModel!.BuyMusicCommand.Subscribe(Close)));\n        }\n    }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u8c03\u8bd5")," \u7f16\u8bd1\u5e76\u8fd0\u884c\u9879\u76ee\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u56fe\u6807\u6309\u94ae\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8f93\u5165\u4e00\u4e9b\u641c\u7d22\u6587\u672c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u4e00\u4e2a\u4e13\u8f91\u8fdb\u884c\u9009\u62e9\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u8d2d\u4e70\u4e13\u8f91"),"\u3002")),(0,r.kt)("p",null,"\u60a8\u5c06\u770b\u5230\u5bf9\u8bdd\u6846\u5173\u95ed\uff0c\u4f46\u4e3b\u7a97\u53e3\u4e2d\u6ca1\u6709\u4efb\u4f55\u53d8\u5316\uff01\u5728\u4e0b\u4e00\u9875\u4e2d\uff0c\u60a8\u5c06\u5b66\u4e60\u5982\u4f55\u5c06\u6240\u9009\u4e13\u8f91\u6dfb\u52a0\u5230\u4e3b\u7a97\u53e3\u7684\u96c6\u5408\u4e2d\u3002"))}m.isMDXComponent=!0}}]);