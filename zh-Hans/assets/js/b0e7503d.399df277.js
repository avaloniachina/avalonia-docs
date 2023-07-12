"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[87457],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(g,r(r({ref:n},p),{},{components:t})):a.createElement(g,r({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},13175:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(87462),i=(t(67294),t(3905));const o={id:"how-to-bind-image-files",title:"How To Bind Image Files"},r="How To Bind Image Files",s={unversionedId:"guides/data-binding/how-to-bind-image-files",id:"guides/data-binding/how-to-bind-image-files",title:"How To Bind Image Files",description:"For a complete, runnable example of these concepts in action, check out the sample application.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/data-binding/how-to-bind-image-files.md",sourceDirName:"guides/data-binding",slug:"/guides/data-binding/how-to-bind-image-files",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/data-binding/how-to-bind-image-files",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/data-binding/how-to-bind-image-files.md",tags:[],version:"current",frontMatter:{id:"how-to-bind-image-files",title:"How To Bind Image Files"},sidebar:"documentationSidebar",previous:{title:"How To Bind Tabs",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/data-binding/how-to-bind-tabs"},next:{title:"How to Bind Can Execute",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/data-binding/how-to-bind-can-execute"}},l={},c=[{value:"Binding to Image Files from Various Sources",id:"binding-to-image-files-from-various-sources",level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-bind-image-files"},"How To Bind Image Files"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For a complete, runnable example of these concepts in action, check out ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/AvaloniaUI.QuickGuides/tree/main/LoadingImages"},"the sample application."))),(0,i.kt)("p",null,"In Avalonia UI, binding to an image file opens up opportunities for displaying dynamic image content within your application. This guide provides an overview on how to bind image files from various sources."),(0,i.kt)("h2",{id:"binding-to-image-files-from-various-sources"},"Binding to Image Files from Various Sources"),(0,i.kt)("p",null,"Assuming you have images from various sources (i.e., a local resource or a web URL) that you want to display in your view, here's how you can achieve this:"),(0,i.kt)("p",null,"First, in your ",(0,i.kt)("inlineCode",{parentName:"p"},"ViewModel"),", you need to define properties that represent these image sources. The properties can be of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Bitmap")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Task<Bitmap>")," (if loading the image involves an asynchronous operation). The ",(0,i.kt)("inlineCode",{parentName:"p"},"ImageHelper")," class is used to load these images."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'public class MainWindowViewModel : ViewModelBase\n{\n    public Bitmap? ImageFromBinding { get; } = ImageHelper.LoadFromResource(new Uri("avares://LoadingImages/Assets/abstract.jpg"));\n    public Task<Bitmap?> ImageFromWebsite { get; } = ImageHelper.LoadFromWeb(new Uri("https://upload.wikimedia.org/wikipedia/commons/4/41/NewtonsPrincipia.jpg"));\n}\n')),(0,i.kt)("p",null,"You'll need to have a helper class ",(0,i.kt)("inlineCode",{parentName:"p"},"ImageHelper")," that provides methods to load images from resources and from a web URL. Here's how you can implement this class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.IO;\nusing System.Net.Http;\nusing System.Threading.Tasks;\nusing Avalonia;\nusing Avalonia.Media.Imaging;\nusing Avalonia.Platform;\n\nnamespace ImageExample.Helpers\n{\n    public static class ImageHelper\n    {\n        public static Bitmap LoadFromResource(Uri resourceUri)\n        {\n            return new Bitmap(AssetLoader.Open(resourceUri));\n        }\n\n        public static async Task<Bitmap?> LoadFromWeb(Uri url)\n        {\n            using var httpClient = new HttpClient();\n            try\n            {\n                var response = await httpClient.GetAsync(url);\n                response.EnsureSuccessStatusCode();\n                var data = await response.Content.ReadAsByteArrayAsync();\n                return new Bitmap(new MemoryStream(data));\n            }\n            catch (HttpRequestException ex)\n            {\n                Console.WriteLine($\"An error occurred while downloading image '{url}' : {ex.Message}\");\n                return null;\n            }\n        }\n    }\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"LoadFromResource")," method takes a resource URI and loads the image using the ",(0,i.kt)("inlineCode",{parentName:"p"},"AssetLoader")," class provided by Avalonia. The ",(0,i.kt)("inlineCode",{parentName:"p"},"LoadFromWeb")," method loads an image from a web URL using the ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpClient")," class."),(0,i.kt)("p",null,"Then, in your view, you can bind these image sources to ",(0,i.kt)("inlineCode",{parentName:"p"},"Image")," controls:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<Grid ColumnDefinitions="*,*,*" RenderOptions.BitmapInterpolationMode="HighQuality">\n    <Image Grid.Column="0" Source="avares://LoadingImages/Assets/abstract.jpg" MaxWidth="300" />\n    <Image Grid.Column="1" Source="{Binding ImageFromBinding}" MaxWidth="300" />\n    <Image Grid.Column="2" Source="{Binding ImageFromWebsite^}" MaxWidth="300" />\n</Grid>\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Source")," property of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Image")," control can accept various types of image sources including a file path, a URL, or a resource. Please note that for asynchronous image sources, you must use the ",(0,i.kt)("inlineCode",{parentName:"p"},"^")," character after the binding expression to tell Avalonia that this is an asynchronous binding."),(0,i.kt)("p",null,"Ensure that local image file paths are accurate, the image file is accessible, and if it's part of your application resources, it's been correctly included in your project. If you're binding to a web image, ensure that the URL is reachable."))}u.isMDXComponent=!0}}]);