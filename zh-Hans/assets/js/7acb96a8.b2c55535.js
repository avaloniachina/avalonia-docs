"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[89343],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(t),k=a,m=s["".concat(p,".").concat(k)]||s[k]||u[k]||o;return t?r.createElement(m,l(l({ref:n},d),{},{components:t})):r.createElement(m,l({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=k;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},60960:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={id:"binding-from-code",title:"\u5982\u4f55\u4ece\u4ee3\u7801\u4e2d\u7ed1\u5b9a"},l="\u5982\u4f55\u4ece\u4ee3\u7801\u4e2d\u7ed1\u5b9a",i={unversionedId:"guides/data-binding/binding-from-code",id:"guides/data-binding/binding-from-code",title:"\u5982\u4f55\u4ece\u4ee3\u7801\u4e2d\u7ed1\u5b9a",description:"\u5728Avalonia\u4e2d\uff0c\u4ece\u4ee3\u7801\u4e2d\u7ed1\u5b9a\u4e0eWPF/UWP\u4e2d\u7684\u65b9\u5f0f\u6709\u4e9b\u4e0d\u540c\u3002\u5728\u5e95\u5c42\uff0cAvalonia\u7684\u7ed1\u5b9a\u7cfb\u7edf\u57fa\u4e8eReactive Extensions\u7684 IObservable\uff0c\u7136\u540e\u7531XAML\u7ed1\u5b9a\u8fdb\u884c\u6784\u5efa\uff08\u8fd9\u4e9b\u7ed1\u5b9a\u4e5f\u53ef\u4ee5\u5728\u4ee3\u7801\u4e2d\u5b9e\u4f8b\u5316\uff09\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/data-binding/binding-from-code.md",sourceDirName:"guides/data-binding",slug:"/guides/data-binding/binding-from-code",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/data-binding/binding-from-code",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/data-binding/binding-from-code.md",tags:[],version:"current",frontMatter:{id:"binding-from-code",title:"\u5982\u4f55\u4ece\u4ee3\u7801\u4e2d\u7ed1\u5b9a"},sidebar:"documentationSidebar",previous:{title:"\u5982\u4f55\u7ed1\u5b9a\u5230\u96c6\u5408",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/data-binding/how-to-bind-to-a-collection"},next:{title:"\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u6570\u636e\u7ed1\u5b9a\u8f6c\u6362\u5668",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/data-binding/how-to-create-a-custom-data-binding-converter"}},p={},c=[{value:"\u8ba2\u9605\u5c5e\u6027\u7684\u66f4\u6539",id:"\u8ba2\u9605\u5c5e\u6027\u7684\u66f4\u6539",level:2},{value:"\u7ed1\u5b9a\u5230\u53ef\u89c2\u5bdf\u5bf9\u8c61",id:"\u7ed1\u5b9a\u5230\u53ef\u89c2\u5bdf\u5bf9\u8c61",level:2},{value:"\u5728\u5bf9\u8c61\u521d\u59cb\u5316\u5668\u4e2d\u8bbe\u7f6e\u7ed1\u5b9a",id:"\u5728\u5bf9\u8c61\u521d\u59cb\u5316\u5668\u4e2d\u8bbe\u7f6e\u7ed1\u5b9a",level:2},{value:"\u8f6c\u6362\u7ed1\u5b9a\u503c",id:"\u8f6c\u6362\u7ed1\u5b9a\u503c",level:2},{value:"\u4ece\u4ee3\u7801\u4e2d\u4f7f\u7528 XAML \u7ed1\u5b9a",id:"\u4ece\u4ee3\u7801\u4e2d\u4f7f\u7528-xaml-\u7ed1\u5b9a",level:2},{value:"\u8ba2\u9605\u4efb\u4f55\u5bf9\u8c61\u7684\u5c5e\u6027",id:"\u8ba2\u9605\u4efb\u4f55\u5bf9\u8c61\u7684\u5c5e\u6027",level:2},{value:"\u7ed1\u5b9a\u5230\u5b9e\u73b0\u4e86 <code>INotifyPropertyChanged</code> \u7684\u5bf9\u8c61",id:"\u7ed1\u5b9a\u5230\u5b9e\u73b0\u4e86-inotifypropertychanged-\u7684\u5bf9\u8c61",level:2}],d={toc:c},s="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5982\u4f55\u4ece\u4ee3\u7801\u4e2d\u7ed1\u5b9a"},"\u5982\u4f55\u4ece\u4ee3\u7801\u4e2d\u7ed1\u5b9a"),(0,a.kt)("p",null,"\u5728Avalonia\u4e2d\uff0c\u4ece\u4ee3\u7801\u4e2d\u7ed1\u5b9a\u4e0eWPF/UWP\u4e2d\u7684\u65b9\u5f0f\u6709\u4e9b\u4e0d\u540c\u3002\u5728\u5e95\u5c42\uff0cAvalonia\u7684\u7ed1\u5b9a\u7cfb\u7edf\u57fa\u4e8eReactive Extensions\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"IObservable"),"\uff0c\u7136\u540e\u7531XAML\u7ed1\u5b9a\u8fdb\u884c\u6784\u5efa\uff08\u8fd9\u4e9b\u7ed1\u5b9a\u4e5f\u53ef\u4ee5\u5728\u4ee3\u7801\u4e2d\u5b9e\u4f8b\u5316\uff09\u3002"),(0,a.kt)("h2",{id:"\u8ba2\u9605\u5c5e\u6027\u7684\u66f4\u6539"},"\u8ba2\u9605\u5c5e\u6027\u7684\u66f4\u6539"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"GetObservable")," \u65b9\u6cd5\u6765\u8ba2\u9605\u5c5e\u6027\u7684\u66f4\u6539\u3002\u8fd9\u5c06\u8fd4\u56de\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"IObservable<T>"),"\uff0c\u53ef\u7528\u4e8e\u76d1\u542c\u5c5e\u6027\u7684\u66f4\u6539\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"var textBlock = new TextBlock();\nvar text = textBlock.GetObservable(TextBlock.TextProperty);\n")),(0,a.kt)("p",null,"\u6bcf\u4e2a\u53ef\u8ba2\u9605\u7684\u5c5e\u6027\u90fd\u6709\u4e00\u4e2a\u9759\u6001\u53ea\u8bfb\u5b57\u6bb5\uff0c\u79f0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"[PropertyName]Property"),"\uff0c\u8be5\u5b57\u6bb5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"GetObservable")," \u4e2d\u4f20\u9012\u4ee5\u8ba2\u9605\u5c5e\u6027\u7684\u66f4\u6539\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"IObservable"),"\uff08\u662fReactive Extensions\u7684\u4e00\u90e8\u5206\uff0c\u7b80\u79f0\u4e3arx\uff09\u8d85\u51fa\u4e86\u672c\u6307\u5357\u7684\u8303\u56f4\uff0c\u4f46\u4ee5\u4e0b\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u8be5\u793a\u4f8b\u4f7f\u7528\u8fd4\u56de\u7684\u53ef\u89c2\u5bdf\u5bf9\u8c61\u5c06\u66f4\u6539\u7684\u5c5e\u6027\u503c\u6253\u5370\u5230\u63a7\u5236\u53f0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var textBlock = new TextBlock();\nvar text = textBlock.GetObservable(TextBlock.TextProperty);\ntext.Subscribe(value => Console.WriteLine(value + " Changed"));\n')),(0,a.kt)("p",null,"\u5f53\u8ba2\u9605\u8fd4\u56de\u7684\u53ef\u89c2\u5bdf\u5bf9\u8c61\u65f6\uff0c\u5b83\u5c06\u7acb\u5373\u8fd4\u56de\u5c5e\u6027\u7684\u5f53\u524d\u503c\uff0c\u7136\u540e\u5728\u6bcf\u6b21\u5c5e\u6027\u66f4\u6539\u65f6\u63a8\u9001\u4e00\u4e2a\u65b0\u503c\u3002\u5982\u679c\u60a8\u4e0d\u60f3\u8981\u5f53\u524d\u503c\uff0c\u53ef\u4ee5\u4f7f\u7528 rx \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Skip")," \u8fd0\u7b97\u7b26\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"var text = textBlock.GetObservable(TextBlock.TextProperty).Skip(1);\n")),(0,a.kt)("h2",{id:"\u7ed1\u5b9a\u5230\u53ef\u89c2\u5bdf\u5bf9\u8c61"},"\u7ed1\u5b9a\u5230\u53ef\u89c2\u5bdf\u5bf9\u8c61"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"AvaloniaObject.Bind")," \u65b9\u6cd5\u5c06\u5c5e\u6027\u7ed1\u5b9a\u5230\u53ef\u89c2\u5bdf\u5bf9\u8c61\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// \u5728\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528Rx Subject\uff0c\u4ee5\u4fbf\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528OnNext\u63a8\u9001\u65b0\u503c\nvar source = new Subject<string>();\nvar textBlock = new TextBlock();\n\n// \u5c06TextBlock.Text\u7ed1\u5b9a\u5230source\nvar subscription = textBlock.Bind(TextBlock.TextProperty, source);\n\n// \u5c06textBlock.Text\u8bbe\u7f6e\u4e3a"hello"\nsource.OnNext("hello");\n// \u5c06textBlock.Text\u8bbe\u7f6e\u4e3a"world!"\nsource.OnNext("world!");\n\n// \u7ec8\u6b62\u7ed1\u5b9a\nsubscription.Dispose();\n')),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Bind")," \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"IDisposable"),"\uff0c\u53ef\u7528\u4e8e\u7ec8\u6b62\u7ed1\u5b9a\u3002\u5982\u679c\u60a8\u4ece\u4e0d\u8c03\u7528\u6b64\u65b9\u6cd5\uff0c\u90a3\u4e48\u5f53\u53ef\u89c2\u5bdf\u5bf9\u8c61\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"OnCompleted")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"OnError")," \u7ed3\u675f\u65f6\uff0c\u7ed1\u5b9a\u5c06\u81ea\u52a8\u7ec8\u6b62\u3002"),(0,a.kt)("h2",{id:"\u5728\u5bf9\u8c61\u521d\u59cb\u5316\u5668\u4e2d\u8bbe\u7f6e\u7ed1\u5b9a"},"\u5728\u5bf9\u8c61\u521d\u59cb\u5316\u5668\u4e2d\u8bbe\u7f6e\u7ed1\u5b9a"),(0,a.kt)("p",null,"\u5728\u5bf9\u8c61\u521d\u59cb\u5316\u5668\u4e2d\u8bbe\u7f6e\u7ed1\u5b9a\u901a\u5e38\u5f88\u6709\u7528\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u7d22\u5f15\u5668\u6765\u5b9e\u73b0\u6b64\u76ee\u7684\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"var source = new Subject<string>();\nvar textBlock = new TextBlock\n{\n    Foreground = Brushes.Red,\n    MaxWidth = 200,\n    [!TextBlock.TextProperty] = source.ToBinding(),\n};\n")),(0,a.kt)("p",null,"\u4f7f\u7528\u6b64\u65b9\u6cd5\uff0c\u60a8\u8fd8\u53ef\u4ee5\u8f7b\u677e\u5730\u5c06\u4e00\u4e2a\u63a7\u4ef6\u7684\u5c5e\u6027\u7ed1\u5b9a\u5230\u53e6\u4e00\u4e2a\u63a7\u4ef6\u7684\u5c5e\u6027\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"var textBlock1 = new TextBlock();\nvar textBlock2 = new TextBlock\n{\n    Foreground = Brushes.Red,\n    MaxWidth = 200,\n    [!TextBlock.TextProperty] = textBlock1[!TextBlock.TextProperty],\n};\n")),(0,a.kt)("p",null,"\u5f53\u7136\uff0c\u7d22\u5f15\u5668\u4e5f\u53ef\u4ee5\u5728\u5bf9\u8c61\u521d\u59cb\u5316\u5668\u4e4b\u5916\u4f7f\u7528\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"textBlock2[!TextBlock.TextProperty] = textBlock1[!TextBlock.TextProperty];\n")),(0,a.kt)("p",null,"\u8fd9\u79cd\u8bed\u6cd5\u7684\u552f\u4e00\u7f3a\u70b9\u662f\u4e0d\u4f1a\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"IDisposable"),"\u3002\u5982\u679c\u60a8\u9700\u8981\u624b\u52a8\u7ec8\u6b62\u7ed1\u5b9a\uff0c\u5219\u5e94\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Bind")," \u65b9\u6cd5\u3002"),(0,a.kt)("h2",{id:"\u8f6c\u6362\u7ed1\u5b9a\u503c"},"\u8f6c\u6362\u7ed1\u5b9a\u503c"),(0,a.kt)("p",null,"\u56e0\u4e3a\u6211\u4eec\u4f7f\u7528\u7684\u662f\u53ef\u89c2\u5bdf\u5bf9\u8c61\uff0c\u6240\u4ee5\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u8f6c\u6362\u6211\u4eec\u7ed1\u5b9a\u7684\u503c\uff01"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var source = new Subject<string>();\nvar textBlock = new TextBlock\n{\n    Foreground = Brushes.Red,\n    MaxWidth = 200,\n    [!TextBlock.TextProperty] = source.Select(x => "Hello " + x).ToBinding(),\n};\n')),(0,a.kt)("h2",{id:"\u4ece\u4ee3\u7801\u4e2d\u4f7f\u7528-xaml-\u7ed1\u5b9a"},"\u4ece\u4ee3\u7801\u4e2d\u4f7f\u7528 XAML \u7ed1\u5b9a"),(0,a.kt)("p",null,"\u6709\u65f6\uff0c\u5f53\u60a8\u60f3\u8981\u4f7f\u7528XAML\u7ed1\u5b9a\u63d0\u4f9b\u7684\u9644\u52a0\u529f\u80fd\u65f6\uff0c\u4ece\u4ee3\u7801\u4e2d\u4f7f\u7528 XAML \u7ed1\u5b9a\u4f1a\u66f4\u52a0\u5bb9\u6613\u3002\u4f8b\u5982\uff0c\u4ec5\u4f7f\u7528\u53ef\u89c2\u5bdf\u5bf9\u8c61\uff0c\u60a8\u53ef\u4ee5\u50cf\u8fd9\u6837\u7ed1\u5b9a\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"DataContext")," \u4e0a\u7684\u5c5e\u6027\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"var textBlock = new TextBlock();\nvar viewModelProperty = textBlock.GetObservable(TextBlock.DataContext)\n    .OfType<MyViewModel>()\n    .Select(x => x?.Name);\ntextBlock.Bind(TextBlock.TextProperty, viewModelProperty);\n")),(0,a.kt)("p",null,"\u7136\u800c\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528 XAML \u7ed1\u5b9a\u53ef\u80fd\u66f4\u53ef\u53d6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var textBlock = new TextBlock\n{\n    [!TextBlock.TextProperty] = new Binding("Name")\n};\n')),(0,a.kt)("p",null,"\u6216\u8005\uff0c\u5982\u679c\u60a8\u9700\u8981\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"IDisposable")," \u6765\u7ec8\u6b62\u7ed1\u5b9a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var textBlock = new TextBlock();\nvar subscription = textBlock.Bind(TextBlock.TextProperty, new Binding("Name"));\n\nsubscription.Dispose();\n')),(0,a.kt)("h2",{id:"\u8ba2\u9605\u4efb\u4f55\u5bf9\u8c61\u7684\u5c5e\u6027"},"\u8ba2\u9605\u4efb\u4f55\u5bf9\u8c61\u7684\u5c5e\u6027"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GetObservable")," \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u53ef\u89c2\u5bdf\u5bf9\u8c61\uff0c\u7528\u4e8e\u8ddf\u8e2a\u5355\u4e2a\u5b9e\u4f8b\u4e0a\u5c5e\u6027\u7684\u66f4\u6539\u3002\u4f46\u662f\uff0c\u5982\u679c\u60a8\u6b63\u5728\u7f16\u5199\u4e00\u4e2a\u63a7\u4ef6\uff0c\u53ef\u80fd\u5e0c\u671b\u5b9e\u73b0\u4e00\u4e2a\u4e0e\u5bf9\u8c61\u5b9e\u4f8b\u65e0\u5173\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"OnPropertyChanged")," \u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u8981\u505a\u5230\u8fd9\u4e00\u70b9\uff0c\u60a8\u53ef\u4ee5\u8ba2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia/AvaloniaProperty/65237C52"},(0,a.kt)("inlineCode",{parentName:"a"},"AvaloniaProperty.Changed")),"\uff0c\u8fd9\u662f\u4e00\u4e2a\u53ef\u89c2\u5bdf\u5bf9\u8c61\uff0c",(0,a.kt)("em",{parentName:"p"},"\u6bcf\u6b21\u5728\u4efb\u4f55\u5b9e\u4f8b\u4e0a\u66f4\u6539\u5c5e\u6027\u65f6\u90fd\u4f1a\u89e6\u53d1\u8be5\u5bf9\u8c61"),"\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728 WPF \u4e2d\uff0c\u901a\u8fc7\u5c06\u9759\u6001\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"PropertyChangedCallback")," \u4f20\u9012\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},"DependencyProperty")," \u6ce8\u518c\u65b9\u6cd5\u6765\u5b8c\u6210\u6b64\u64cd\u4f5c\uff0c\u4f46\u8fd9\u53ea\u5141\u8bb8\u63a7\u4ef6\u4f5c\u8005\u6ce8\u518c\u5c5e\u6027\u66f4\u6539\u56de\u8c03\u3002")),(0,a.kt)("p",null,"\u6b64\u5916\uff0c\u8fd8\u6709\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"AddClassHandler")," \u6269\u5c55\u65b9\u6cd5\uff0c\u53ef\u4ee5\u81ea\u52a8\u5c06\u4e8b\u4ef6\u8def\u7531\u5230\u63a7\u4ef6\u4e0a\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u60f3\u8981\u76d1\u542c\u5bf9\u63a7\u4ef6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Foo")," \u5c5e\u6027\u7684\u66f4\u6539\uff0c\u53ef\u4ee5\u50cf\u8fd9\u6837\u505a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"static MyControl()\n{\n    FooProperty.Changed.AddClassHandler<MyControl>(x => x.FooChanged);\n}\n\nprivate void FooChanged(AvaloniaPropertyChangedEventArgs e)\n{\n    // 'e' \u53c2\u6570\u63cf\u8ff0\u4e86\u53d1\u751f\u7684\u66f4\u6539\u3002\n}\n")),(0,a.kt)("h2",{id:"\u7ed1\u5b9a\u5230\u5b9e\u73b0\u4e86-inotifypropertychanged-\u7684\u5bf9\u8c61"},"\u7ed1\u5b9a\u5230\u5b9e\u73b0\u4e86 ",(0,a.kt)("inlineCode",{parentName:"h2"},"INotifyPropertyChanged")," \u7684\u5bf9\u8c61"),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u7ed1\u5b9a\u5230\u5b9e\u73b0\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"INotifyPropertyChanged")," \u7684\u5bf9\u8c61\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"var textBlock = new TextBlock();\n\nvar binding = new Binding \n{ \n    Source = someObjectImplementingINotifyPropertyChanged, \n    Path = nameof(someObjectImplementingINotifyPropertyChanged.MyProperty)\n}; \n\ntextBlock.Bind(TextBlock.TextProperty, binding);\n")))}u.isMDXComponent=!0}}]);