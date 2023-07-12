"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[38577],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={id:"image",title:"Image"},i=void 0,l={unversionedId:"controls/image",id:"version-0.10.x/controls/image",title:"Image",description:"The Image control is a control for displaying raster images.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/controls/image.md",sourceDirName:"controls",slug:"/controls/image",permalink:"/avalonia-docs/zh-Hans/docs/controls/image",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/controls/image.md",tags:[],version:"0.10.x",frontMatter:{id:"image",title:"Image"},sidebar:"documentationSidebar",previous:{title:"GridSplitter",permalink:"/avalonia-docs/zh-Hans/docs/controls/gridsplitter"},next:{title:"ItemsControl",permalink:"/avalonia-docs/zh-Hans/docs/controls/itemscontrol"}},s={},p=[{value:"Binding",id:"binding",level:3},{value:"Examples",id:"examples",level:3},{value:"Swappable Image Button",id:"swappable-image-button",level:4},{value:"Reference",id:"reference",level:3},{value:"Source code",id:"source-code",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Image")," control is a control for displaying raster images."),(0,r.kt)("h3",{id:"binding"},"Binding"),(0,r.kt)("p",null,"Binding onto an ",(0,r.kt)("inlineCode",{parentName:"p"},"Image")," control's ",(0,r.kt)("inlineCode",{parentName:"p"},"Source")," property with a ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," must be done using a ",(0,r.kt)("a",{parentName:"p",href:"../data-binding/converting-binding-values"},"binding converter")," that will convert the ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," to an ",(0,r.kt)("inlineCode",{parentName:"p"},"IBitmap"),"."),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("h4",{id:"swappable-image-button"},"Swappable Image Button"),(0,r.kt)("p",null,"An image button that changes images based on state is an example where binding to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Image")," control's ",(0,r.kt)("inlineCode",{parentName:"p"},"Source")," property might seem necessary."),(0,r.kt)("p",null,"To have a button that swaps the image it's showing based on its state, you could either use a ",(0,r.kt)("a",{parentName:"p",href:"../data-binding/converting-binding-values"},"binding converter")," that converts a ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," into a ",(0,r.kt)("inlineCode",{parentName:"p"},"IBitmap"),", or you could use the declarative approaches below, which don't use binding."),(0,r.kt)("p",null,"The declarative approaches keep images in memory and won't have to load them in on-demand, which will net you greater performance than a binding approach. You must declare every image you will use inside your XAML with the declarative approach."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Binding Converter Approach")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'<UserControl.Resources>\n    <ext:BitmapAssetValueConverter x:Key="variableImage"/>\n</UserControl.Resources>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'<Image Width="75"\n       Height="73"\n       Source="{Binding PlaySource, Converter={StaticResource variableImage}}">\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'/// <summary>\n/// <para>\n/// Converts a string path to a bitmap asset.\n/// </para>\n/// <para>\n/// The asset must be in the same assembly as the program. If it isn\'t,\n/// specify "avares://<assemblynamehere>/" in front of the path to the asset.\n/// </para>\n/// </summary>\npublic class BitmapAssetValueConverter : IValueConverter\n{\n    public static BitmapAssetValueConverter Instance = new BitmapAssetValueConverter();\n\n    public object Convert(object value, Type targetType, object parameter, CultureInfo culture)\n    {\n        if (value == null)\n            return null;\n\n        if (value is string rawUri && targetType.IsAssignableFrom(typeof(Bitmap)))\n        {\n            Uri uri;\n\n            // Allow for assembly overrides\n            if (rawUri.StartsWith("avares://"))\n            {\n                uri = new Uri(rawUri);\n            }\n            else\n            {\n                string assemblyName = Assembly.GetEntryAssembly().GetName().Name;\n                uri = new Uri($"avares://{assemblyName}/{rawUri}");\n            }\n\n            var assets = AvaloniaLocator.Current.GetService<IAssetLoader>();\n            var asset = assets.Open(uri);\n\n            return new Bitmap(asset);\n        }\n\n        throw new NotSupportedException();\n    }\n\n    public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)\n    {\n        throw new NotSupportedException();\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Declarative Approaches")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Using a Button")),(0,r.kt)("p",null,"View the ",(0,r.kt)("a",{parentName:"p",href:"buttons/button#play-button"},'"Play Button" example')," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Button")," documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Using a ToggleButton")),(0,r.kt)("p",null,"View the ",(0,r.kt)("a",{parentName:"p",href:"buttons/togglebutton#speaker-mute-button"},'"Speaker Mute Button" example')," in the ToggleButton documentation."),(0,r.kt)("h3",{id:"reference"},"Reference"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/Image/"},"Image")),(0,r.kt)("h3",{id:"source-code"},"Source code"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/Image.cs"},"Image.cs")))}m.isMDXComponent=!0}}]);