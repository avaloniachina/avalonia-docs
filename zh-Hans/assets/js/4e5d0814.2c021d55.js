"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[95242],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(y,c(c({ref:t},i),{},{components:r})):n.createElement(y,c({ref:t},i))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,c[1]=l;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71069:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={id:"how-to-create-a-custom-flyout",title:"\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u9762\u677f"},c="\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u5f39\u51fa\u7a97\u53e3",l={unversionedId:"guides/custom-controls/how-to-create-a-custom-flyout",id:"guides/custom-controls/how-to-create-a-custom-flyout",title:"\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u9762\u677f",description:"\u521b\u5efa\u81ea\u5b9a\u4e49\u5f39\u51fa\u7a97\u53e3",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/custom-controls/how-to-create-a-custom-flyout.md",sourceDirName:"guides/custom-controls",slug:"/guides/custom-controls/how-to-create-a-custom-flyout",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/custom-controls/how-to-create-a-custom-flyout",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/custom-controls/how-to-create-a-custom-flyout.md",tags:[],version:"current",frontMatter:{id:"how-to-create-a-custom-flyout",title:"\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u9762\u677f"},sidebar:"documentationSidebar",previous:{title:"How To Create a Custom Controls Library",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/custom-controls/how-to-create-a-custom-controls-library"},next:{title:"\u5982\u4f55\u521b\u5efa\u9ad8\u7ea7\u81ea\u5b9a\u4e49\u63a7\u4ef6",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/custom-controls/how-to-create-advanced-custom-controls"}},s={},u=[{value:"\u521b\u5efa\u81ea\u5b9a\u4e49\u5f39\u51fa\u7a97\u53e3",id:"\u521b\u5efa\u81ea\u5b9a\u4e49\u5f39\u51fa\u7a97\u53e3",level:2}],i={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u5f39\u51fa\u7a97\u53e3"},"\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u5f39\u51fa\u7a97\u53e3"),(0,o.kt)("h2",{id:"\u521b\u5efa\u81ea\u5b9a\u4e49\u5f39\u51fa\u7a97\u53e3"},"\u521b\u5efa\u81ea\u5b9a\u4e49\u5f39\u51fa\u7a97\u53e3"),(0,o.kt)("p",null,"\u8981\u521b\u5efa\u81ea\u5b9a\u4e49\u7684\u5f39\u51fa\u7a97\u53e3\u7c7b\u578b\uff0c\u9700\u8981\u4eceFlyoutBase\u6d3e\u751f\u3002\u60a8\u9700\u8981\u91cd\u5199\u62bd\u8c61\u65b9\u6cd5",(0,o.kt)("inlineCode",{parentName:"p"},"CreatePresenter()"),"\u6765\u6307\u5b9a",(0,o.kt)("inlineCode",{parentName:"p"},"Flyout"),"\u5e94\u8be5\u4f7f\u7528\u54ea\u4e2aPresenter\u6765\u663e\u793a\u5176\u5185\u5bb9\u3002\u8fd9\u53ef\u4ee5\u662f\u4efb\u4f55\u7c7b\u578b\u7684\u63a7\u4ef6\uff0c\u4f46\u8bf7\u6ce8\u610f\uff0c\u8fd9\u662f\u5185\u90e8\u5f39\u51fa\u7a97\u53e3\u7684\u6839\u5185\u5bb9\uff0c\u5e94\u8be5\u4f7f\u7528\u80cc\u666f\u3001\u8fb9\u6846\u3001\u5706\u89d2\u7b49\u6837\u5f0f\u6765\u5339\u914d\u5176\u4ed6\u5f39\u51fa\u7a97\u53e3\u3002\u5982\u679c\u5e0c\u671b\uff0c\u4ecd\u7136\u53ef\u4ee5\u4f7f\u7528\u666e\u901a\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"FlyoutPresenter"),"\u3002"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u521b\u5efa\u4e86\u4e00\u4e2a\u7b80\u5355\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Flyout"),"\uff0c\u5176\u4e2d\u5305\u542b\u4e00\u4e2a\u56fe\u50cf\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public class MyImageFlyout : FlyoutBase\n{\n    public static readonly StyledProperty<IImage> ImageProperty = AvaloniaProperty.Register<MyImageFlyout, IImage>(nameof(Image));\n\n    [Content]\n    public IImage Image { get; set; }\n\n    protected override Control CreatePresenter()\n    {\n        // \u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u9ed8\u8ba4\u7684FlyoutPresenter\u4f5c\u4e3a\u6839\u5185\u5bb9\uff0c\u5e76\u6dfb\u52a0\u4e00\u4e2a\u56fe\u50cf\u63a7\u4ef6\u6765\u663e\u793a\u6211\u4eec\u7684\u5185\u5bb9\n        return new FlyoutPresenter\n        {\n            Content = new Image\n            {\n                // \u5728\u8fd9\u91cc\u4f7f\u7528\u7ed1\u5b9a\uff0c\u8fd9\u6837\u5f53\u5c5e\u6027\u66f4\u65b0\u65f6\uff0c\u56fe\u50cf\u4f1a\u81ea\u52a8\u66f4\u65b0\n                [!Image.SourceProperty] = this[!ImageProperty]\n            }\n        };\n    }\n}\n")),(0,o.kt)("h2",{id:""}))}m.isMDXComponent=!0}}]);