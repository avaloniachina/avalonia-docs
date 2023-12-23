"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[87457],{61108:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var a=i(85893),s=i(11151);const t={id:"how-to-bind-image-files",title:"\u5982\u4f55\u7ed1\u5b9a\u56fe\u50cf\u6587\u4ef6"},o="\u5982\u4f55\u7ed1\u5b9a\u56fe\u50cf\u6587\u4ef6",r={id:"guides/data-binding/how-to-bind-image-files",title:"\u5982\u4f55\u7ed1\u5b9a\u56fe\u50cf\u6587\u4ef6",description:"\u8981\u5728\u5b9e\u9645\u64cd\u4f5c\u4e2d\u67e5\u770b\u8fd9\u4e9b\u6982\u5ff5\u7684\u5b8c\u6574\u53ef\u8fd0\u884c\u793a\u4f8b\uff0c\u8bf7\u67e5\u770b\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/data-binding/how-to-bind-image-files.md",sourceDirName:"guides/data-binding",slug:"/guides/data-binding/how-to-bind-image-files",permalink:"/avalonia-docs/zh-Hans/docs/guides/data-binding/how-to-bind-image-files",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/data-binding/how-to-bind-image-files.md",tags:[],version:"current",frontMatter:{id:"how-to-bind-image-files",title:"\u5982\u4f55\u7ed1\u5b9a\u56fe\u50cf\u6587\u4ef6"},sidebar:"documentationSidebar",previous:{title:"\u5982\u4f55\u7ed1\u5b9a\u9009\u9879\u5361",permalink:"/avalonia-docs/zh-Hans/docs/guides/data-binding/how-to-bind-tabs"},next:{title:"\u5982\u4f55\u7ed1\u5b9a Can Execute",permalink:"/avalonia-docs/zh-Hans/docs/guides/data-binding/how-to-bind-can-execute"}},d={},c=[{value:"\u4ece\u4e0d\u540c\u6765\u6e90\u7ed1\u5b9a\u56fe\u50cf\u6587\u4ef6",id:"\u4ece\u4e0d\u540c\u6765\u6e90\u7ed1\u5b9a\u56fe\u50cf\u6587\u4ef6",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"\u5982\u4f55\u7ed1\u5b9a\u56fe\u50cf\u6587\u4ef6",children:"\u5982\u4f55\u7ed1\u5b9a\u56fe\u50cf\u6587\u4ef6"}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["\u8981\u5728\u5b9e\u9645\u64cd\u4f5c\u4e2d\u67e5\u770b\u8fd9\u4e9b\u6982\u5ff5\u7684\u5b8c\u6574\u53ef\u8fd0\u884c\u793a\u4f8b\uff0c\u8bf7\u67e5\u770b",(0,a.jsx)(n.a,{href:"https://github.com/AvaloniaUI/AvaloniaUI.QuickGuides/tree/main/LoadingImages",children:"\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f"}),"\u3002"]})}),"\n",(0,a.jsx)(n.p,{children:"\u5728Avalonia UI\u4e2d\uff0c\u7ed1\u5b9a\u56fe\u50cf\u6587\u4ef6\u4e3a\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u663e\u793a\u52a8\u6001\u56fe\u50cf\u5185\u5bb9\u63d0\u4f9b\u4e86\u673a\u4f1a\u3002\u672c\u6307\u5357\u63d0\u4f9b\u4e86\u6709\u5173\u5982\u4f55\u4ece\u5404\u79cd\u6765\u6e90\u7ed1\u5b9a\u56fe\u50cf\u6587\u4ef6\u7684\u6982\u8ff0\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u4ece\u4e0d\u540c\u6765\u6e90\u7ed1\u5b9a\u56fe\u50cf\u6587\u4ef6",children:"\u4ece\u4e0d\u540c\u6765\u6e90\u7ed1\u5b9a\u56fe\u50cf\u6587\u4ef6"}),"\n",(0,a.jsx)(n.p,{children:"\u5047\u8bbe\u60a8\u6709\u6765\u81ea\u4e0d\u540c\u6765\u6e90\uff08\u4f8b\u5982\uff0c\u672c\u5730\u8d44\u6e90\u6216Web URL\uff09\u7684\u56fe\u50cf\uff0c\u60a8\u5e0c\u671b\u5728\u89c6\u56fe\u4e2d\u663e\u793a\u8fd9\u4e9b\u56fe\u50cf\uff0c\u4e0b\u9762\u662f\u5982\u4f55\u5b9e\u73b0\u7684\uff1a"}),"\n",(0,a.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u5728\u60a8\u7684 ",(0,a.jsx)(n.code,{children:"ViewModel"})," \u4e2d\uff0c\u60a8\u9700\u8981\u5b9a\u4e49\u8868\u793a\u8fd9\u4e9b\u56fe\u50cf\u6765\u6e90\u7684\u5c5e\u6027\u3002\u8fd9\u4e9b\u5c5e\u6027\u53ef\u4ee5\u662f ",(0,a.jsx)(n.code,{children:"Bitmap"})," \u7c7b\u578b\u6216 ",(0,a.jsx)(n.code,{children:"Task<Bitmap>"})," \u7c7b\u578b\uff08\u5982\u679c\u52a0\u8f7d\u56fe\u50cf\u6d89\u53ca\u5f02\u6b65\u64cd\u4f5c\uff09\u3002\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"ImageHelper"})," \u7c7b\u6765\u52a0\u8f7d\u8fd9\u4e9b\u56fe\u50cf\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'public class MainWindowViewModel : ViewModelBase\n{\n    public Bitmap? ImageFromBinding { get; } = ImageHelper.LoadFromResource(new Uri("avares://LoadingImages/Assets/abstract.jpg"));\n    public Task<Bitmap?> ImageFromWebsite { get; } = ImageHelper.LoadFromWeb(new Uri("https://upload.wikimedia.org/wikipedia/commons/4/41/NewtonsPrincipia.jpg"));\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u60a8\u9700\u8981\u4e00\u4e2a\u540d\u4e3a ",(0,a.jsx)(n.code,{children:"ImageHelper"})," \u7684\u8f85\u52a9\u7c7b\uff0c\u8be5\u7c7b\u63d0\u4f9b\u4ece\u8d44\u6e90\u548cWeb URL\u52a0\u8f7d\u56fe\u50cf\u7684\u65b9\u6cd5\u3002\u4e0b\u9762\u662f\u5982\u4f55\u5b9e\u73b0\u8fd9\u4e2a\u7c7b\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"using System;\nusing System.IO;\nusing System.Net.Http;\nusing System.Threading.Tasks;\nusing Avalonia;\nusing Avalonia.Media.Imaging;\nusing Avalonia.Platform;\n\nnamespace ImageExample.Helpers\n{\n    public static class ImageHelper\n    {\n        public static Bitmap LoadFromResource(Uri resourceUri)\n        {\n            return new Bitmap(AssetLoader.Open(resourceUri));\n        }\n\n        public static async Task<Bitmap?> LoadFromWeb(Uri url)\n        {\n            using var httpClient = new HttpClient();\n            try\n            {\n                var response = await httpClient.GetAsync(url);\n                response.EnsureSuccessStatusCode();\n                var data = await response.Content.ReadAsByteArrayAsync();\n                return new Bitmap(new MemoryStream(data));\n            }\n            catch (HttpRequestException ex)\n            {\n                Console.WriteLine($\"An error occurred while downloading image '{url}' : {ex.Message}\");\n                return null;\n            }\n        }\n    }\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"LoadFromResource"})," \u65b9\u6cd5\u63a5\u53d7\u8d44\u6e90URI\u5e76\u4f7f\u7528Avalonia\u63d0\u4f9b\u7684 ",(0,a.jsx)(n.code,{children:"AssetLoader"})," \u7c7b\u52a0\u8f7d\u56fe\u50cf\u3002",(0,a.jsx)(n.code,{children:"LoadFromWeb"})," \u65b9\u6cd5\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"HttpClient"})," \u7c7b\u4eceWeb URL\u52a0\u8f7d\u56fe\u50cf\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u7136\u540e\uff0c\u5728\u60a8\u7684\u89c6\u56fe\u4e2d\uff0c\u60a8\u53ef\u4ee5\u5c06\u8fd9\u4e9b\u56fe\u50cf\u6765\u6e90\u7ed1\u5b9a\u5230 ",(0,a.jsx)(n.code,{children:"Image"})," \u63a7\u4ef6\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'<Grid ColumnDefinitions="*,*,*" RenderOptions.BitmapInterpolationMode="HighQuality">\n    <Image Grid.Column="0" Source="avares://LoadingImages/Assets/abstract.jpg" MaxWidth="300" />\n    <Image Grid.Column="1" Source="{Binding ImageFromBinding}" MaxWidth="300" />\n    <Image Grid.Column="2" Source="{Binding ImageFromWebsite^}" MaxWidth="300" />\n</Grid>\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Image"})," \u63a7\u4ef6\u7684 ",(0,a.jsx)(n.code,{children:"Source"})," \u5c5e\u6027\u53ef\u4ee5\u63a5\u53d7\u5404\u79cd\u7c7b\u578b\u7684\u56fe\u50cf\u6765\u6e90\uff0c\u5305\u62ec\u6587\u4ef6\u8def\u5f84\u3001URL\u6216\u8d44\u6e90\u3002\u8bf7\u6ce8\u610f\uff0c\u5bf9\u4e8e\u5f02\u6b65\u56fe\u50cf\u6765\u6e90\uff0c\u5fc5\u987b\u5728\u7ed1\u5b9a\u8868\u8fbe\u5f0f\u540e\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"^"})," \u5b57\u7b26\uff0c\u4ee5\u544a\u8bc9Avalonia\u8fd9\u662f\u4e00\u4e2a\u5f02\u6b65\u7ed1\u5b9a\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u8bf7\u786e\u4fdd\u672c\u5730\u56fe\u50cf\u6587\u4ef6\u8def\u5f84\u51c6\u786e\uff0c\u56fe\u50cf\u6587\u4ef6\u53ef\u8bbf\u95ee\uff0c\u5e76\u4e14\u5982\u679c\u5b83\u662f\u5e94\u7528\u7a0b\u5e8f\u8d44\u6e90\u7684\u4e00\u90e8\u5206\uff0c\u5219\u5df2\u6b63\u786e\u5305\u542b\u5728\u60a8\u7684\u9879\u76ee\u4e2d\u3002\u5982\u679c\u8981\u7ed1\u5b9a\u5230Web\u56fe\u50cf\uff0c\u8bf7\u786e\u4fddURL\u53ef\u8bbf\u95ee\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>o});var a=i(67294);const s={},t=a.createContext(s);function o(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);