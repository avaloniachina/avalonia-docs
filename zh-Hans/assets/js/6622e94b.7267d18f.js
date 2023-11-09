"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[63109],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},76569:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o=a.p+"assets/images/image-20210310184202271-5cffbd28d3c99dfb3d9d93481de708ed.png",l={description:"TUTORIALS - Music Store App"},i="\u5728\u542f\u52a8\u65f6\u52a0\u8f7d\u6570\u636e",u={unversionedId:"tutorials/music-store-app/load-data-at-startup",id:"tutorials/music-store-app/load-data-at-startup",title:"\u5728\u542f\u52a8\u65f6\u52a0\u8f7d\u6570\u636e",description:"TUTORIALS - Music Store App",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/tutorials/music-store-app/load-data-at-startup.md",sourceDirName:"tutorials/music-store-app",slug:"/tutorials/music-store-app/load-data-at-startup",permalink:"/avalonia-docs/zh-Hans/docs/next/tutorials/music-store-app/load-data-at-startup",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/tutorials/music-store-app/load-data-at-startup.md",tags:[],version:"current",frontMatter:{description:"TUTORIALS - Music Store App"},sidebar:"documentationSidebar",previous:{title:"\u6dfb\u52a0\u6570\u636e\u6301\u4e45\u6027",permalink:"/avalonia-docs/zh-Hans/docs/next/tutorials/music-store-app/add-data-persistence"},next:{title:"\u7ed3\u8bba",permalink:"/avalonia-docs/zh-Hans/docs/next/tutorials/music-store-app/summary"}},s={},p=[],c={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5728\u542f\u52a8\u65f6\u52a0\u8f7d\u6570\u636e"},"\u5728\u542f\u52a8\u65f6\u52a0\u8f7d\u6570\u636e"),(0,r.kt)("p",null,"\u5728\u672c\u9875\u4e0a\uff0c\u60a8\u5c06\u6dfb\u52a0\u4ee3\u7801\u4ee5\u5728\u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u65f6\u4ece\u78c1\u76d8\u52a0\u8f7d\u7528\u6237\u7684\u4e13\u8f91\u6536\u85cf\u3002"),(0,r.kt)("p",null,"\u60a8\u5df2\u7ecf\u5728\u4e1a\u52a1\u670d\u52a1\u4e2d\u6dfb\u52a0\u4e86\u53ef\u4ee5\u4ece\u78c1\u76d8\u52a0\u8f7d\u6240\u9700\u6587\u4ef6\u7684\u4ee3\u7801\uff0c\u73b0\u5728\u9700\u8981\u505a\u7684\u5c31\u662f\u5728\u4e3b\u7a97\u53e3\u89c6\u56fe\u6a21\u578b\u4e2d\u6dfb\u52a0\u4e00\u4e9b\u4ee3\u7801\u6765\u5904\u7406\u542f\u52a8\u3002"),(0,r.kt)("p",null,"\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u6dfb\u52a0\u4e00\u4e2a\u65b9\u6cd5\u6765\u4ece\u78c1\u76d8\u52a0\u8f7d\u7528\u6237\u7684\u4e13\u8f91\u6536\u85cf\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u5e94\u7528\u7a0b\u5e8f\u6b63\u5728\u8fd0\u884c\uff0c\u8bf7\u505c\u6b62\u5b83\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u627e\u5230\u5e76\u6253\u5f00 ",(0,r.kt)("strong",{parentName:"li"},"MainWindowViewModel.cs")," \u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u5982\u4e0b\u6240\u793a\u7684\u4ee3\u7801\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"private async void LoadAlbums()\n{\n    var albums = (await Album.LoadCachedAsync()).Select(x => new AlbumViewModel(x));\n\n    foreach (var album in albums)\n    {\n        Albums.Add(album);\n    }\n\n    foreach (var album in Albums.ToList())\n    {\n        await album.LoadCover();\n    }\n}\n")),(0,r.kt)("p",null,"\u6b63\u5982\u60a8\u6240\u770b\u5230\u7684\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u4f7f\u7528\u4e1a\u52a1\u670d\u52a1\u4ece\u78c1\u76d8\u7f13\u5b58\u4e2d\u52a0\u8f7d\u4e13\u8f91\u5217\u8868\u3002\u7136\u540e\uff0c\u5b83\u5c06\u6bcf\u4e2a\u6570\u636e\u6a21\u578b\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"Album")," \u7c7b\uff09\u8f6c\u6362\u4e3a\u89c6\u56fe\u6a21\u578b\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"AlbumViewModel")," \u7c7b\uff09\u3002\u5728\u6b64\u4e4b\u540e\uff0c\u6240\u6709\u4e13\u8f91\u89c6\u56fe\u6a21\u578b\u90fd\u5c06\u6dfb\u52a0\u5230\u53ef\u89c2\u5bdf\u96c6\u5408\u4e2d\uff0c\u8fd9\u5c06\u7acb\u5373\u4f7f\u7528\u4e13\u8f91\u7684\u6587\u672c\u6570\u636e\u66f4\u65b0 UI\u3002"),(0,r.kt)("p",null,"\u60a8\u4f1a\u6ce8\u610f\u5230\uff0c\u5728\u52a0\u8f7d JSON \u4e13\u8f91\u6587\u4ef6\u4e4b\u540e\uff0c\u7b2c\u4e8c\u4e2a\u5faa\u73af\u52a0\u8f7d\u5c01\u9762\u827a\u672f\u56fe\u7247\u6587\u4ef6\u3002\u8fd9\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u5c3d\u53ef\u80fd\u5feb\u7684\u89c6\u89c9\u53cd\u9988\uff08\u4ee5\u4e13\u8f91\u78c1\u8d34\u7684\u5f62\u5f0f\uff0c\u5305\u542b\u6587\u672c\u548c\u5360\u4f4d\u7b26\u97f3\u7b26\u56fe\u6807\uff09\uff0c\u544a\u8bc9\u7528\u6237\u6536\u85cf\u4e2d\u6709\u54ea\u4e9b\u4e13\u8f91\u3002\u7136\u540e\u5f02\u6b65\u52a0\u8f7d\u5c01\u9762\u56fe\u50cf\uff0c\u8fd9\u786e\u4fdd\u4e86\u5728\u56fe\u50cf\u52a0\u8f7d\u8fc7\u7a0b\u4e2d\u5e94\u7528\u7a0b\u5e8f\u4ecd\u80fd\u4fdd\u6301\u54cd\u5e94\u3002"),(0,r.kt)("p",null,"\u4e0b\u4e00\u6b65\u662f\u5728\u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u65f6\u8c03\u5ea6 ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadAlbum")," \u65b9\u6cd5\u8fd0\u884c\u3002"),(0,r.kt)("p",null,"\u8981\u5728\u4e3b\u7ebf\u7a0b\u4e0a\u8c03\u5ea6\u8be5\u65b9\u6cd5\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4fdd\u6301 ",(0,r.kt)("strong",{parentName:"li"},"MainWindowViewModel.cs")," \u6587\u4ef6\u6253\u5f00\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"li"},"using System.Reactive.Concurrency;")," \u7684\u5f15\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5c06\u4ee5\u4e0b\u4ee3\u7801\u6dfb\u52a0\u5230\u7c7b\u7684\u6784\u9020\u51fd\u6570\u4e2d\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"RxApp.MainThreadScheduler.Schedule(LoadAlbums);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u70b9\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u8c03\u8bd5"),"\u4ee5\u7f16\u8bd1\u548c\u8fd0\u884c\u9879\u76ee\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{className:"image-medium-zoom",src:o,alt:""})))}m.isMDXComponent=!0}}]);