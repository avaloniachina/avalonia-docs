"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[61785],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=d(n),p=i,g=s["".concat(l,".").concat(p)]||s[p]||u[p]||o;return n?a.createElement(g,r(r({ref:t},m),{},{components:n})):a.createElement(g,r({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:i,r[1]=c;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},64259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o=n.p+"assets/images/command2-0233991fda4964f5ef62ba1b3bf5dc1e.gif",r=n.p+"assets/images/command3-ecc2618acd65efa6781870afa298d771.gif",c={id:"how-to-bind-to-a-command-without-reactiveui",title:"\u5982\u4f55\u4e0d\u4f7f\u7528ReactiveUI\u7ed1\u5b9a\u547d\u4ee4"},l="\u5982\u4f55\u4e0d\u4f7f\u7528ReactiveUI\u7ed1\u5b9a\u547d\u4ee4",d={unversionedId:"guides/data-binding/how-to-bind-to-a-command-without-reactiveui",id:"guides/data-binding/how-to-bind-to-a-command-without-reactiveui",title:"\u5982\u4f55\u4e0d\u4f7f\u7528ReactiveUI\u7ed1\u5b9a\u547d\u4ee4",description:"\u6709\u65f6\u5019\u4f60\u53ea\u662f\u60f3\u5728\u70b9\u51fb\u6309\u94ae\u65f6\u8c03\u7528\u4e00\u4e2a\u65b9\u6cd5\uff0c\u800c\u4e0d\u60f3\u4f7f\u7528 ReactiveUI \u6846\u67b6\u521b\u5efa\u54cd\u5e94\u5f0f\u547d\u4ee4\u7684\u6574\u5957\u6d41\u7a0b\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/data-binding/how-to-bind-to-a-command-without-reactiveui.md",sourceDirName:"guides/data-binding",slug:"/guides/data-binding/how-to-bind-to-a-command-without-reactiveui",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/data-binding/how-to-bind-to-a-command-without-reactiveui",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/data-binding/how-to-bind-to-a-command-without-reactiveui.md",tags:[],version:"current",frontMatter:{id:"how-to-bind-to-a-command-without-reactiveui",title:"\u5982\u4f55\u4e0d\u4f7f\u7528ReactiveUI\u7ed1\u5b9a\u547d\u4ee4"},sidebar:"documentationSidebar",previous:{title:"\u5982\u4f55\u4f7f\u7528ReactiveUI\u7ed1\u5b9a\u547d\u4ee4",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/data-binding/how-to-bind-to-a-command-with-reactiveui"},next:{title:"\u5982\u4f55\u7ed1\u5b9a\u4efb\u52a1\u7ed3\u679c",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/data-binding/how-to-bind-to-a-task-result"}},m={},s=[{value:"\u80fd\u5426\u6267\u884c\uff1f",id:"\u80fd\u5426\u6267\u884c",level:2},{value:"<strong>\u89e6\u53d1\u201c\u80fd\u5426\u6267\u884c\u201d</strong>",id:"\u89e6\u53d1\u80fd\u5426\u6267\u884c",level:2}],u={toc:s},p="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5982\u4f55\u4e0d\u4f7f\u7528reactiveui\u7ed1\u5b9a\u547d\u4ee4"},"\u5982\u4f55\u4e0d\u4f7f\u7528ReactiveUI\u7ed1\u5b9a\u547d\u4ee4"),(0,i.kt)("p",null,"\u6709\u65f6\u5019\u4f60\u53ea\u662f\u60f3\u5728\u70b9\u51fb\u6309\u94ae\u65f6\u8c03\u7528\u4e00\u4e2a\u65b9\u6cd5\uff0c\u800c\u4e0d\u60f3\u4f7f\u7528 ",(0,i.kt)("em",{parentName:"p"},"ReactiveUI")," \u6846\u67b6\u521b\u5efa\u54cd\u5e94\u5f0f\u547d\u4ee4\u7684\u6574\u5957\u6d41\u7a0b\u3002"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u8981\u4e86\u89e3\u5982\u4f55\u4f7f\u7528 ",(0,i.kt)("em",{parentName:"p"},"ReactiveUI")," \u7ed1\u5b9a\u5230\u547d\u4ee4\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/avalonia-docs/zh-Hans/docs/next/guides/data-binding/how-to-bind-to-a-command-with-reactiveui"},"\u8fd9\u91cc"),"\u3002")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Avalonia UI")," \u6570\u636e\u7ed1\u5b9a\u5141\u8bb8\u4f60\u76f4\u63a5\u5b9e\u73b0\u65e2\u53ef\u4ee5\u6267\u884c\u64cd\u4f5c\u7684\u89c6\u56fe\u6a21\u578b\u65b9\u6cd5\uff0c\u53c8\u53ef\u4ee5\u63a7\u5236\u65b9\u6cd5\u662f\u5426\u53ef\u4ee5\u6267\u884c\u7684\u5c5e\u6027\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u4f7f\u7528\u4ee5\u4e0bXAML\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<Window xmlns="https://github.com/avaloniaui">\n   ...\n   <StackPanel Margin="20">\n      <Button Command="{Binding PerformAction}"\n              CommandParameter="From the button, without ReactiveUI">\n              Run the example</Button>\n   </StackPanel>\n</Window>\n')),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u7f16\u5199\u4e00\u4e2a\u80fd\u591f\u8fd0\u884c\u64cd\u4f5c\u7684\u89c6\u56fe\u6a21\u578b\uff0c\u50cf\u8fd9\u6837\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace AvaloniaGuides.ViewModels\n{\n    public class MainWindowViewModel \n    {\n        public void PerformAction(object msg)\n        {\n            Debug.WriteLine($"The action was called. {msg}");\n        }\n    }\n}\n')),(0,i.kt)("img",{src:o,alt:""}),(0,i.kt)("h2",{id:"\u80fd\u5426\u6267\u884c"},"\u80fd\u5426\u6267\u884c\uff1f"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Avalonia UI")," \u6570\u636e\u7ed1\u5b9a\u63d0\u4f9b\u4e86\u4e00\u79cd\u4f7f\u7528\u547d\u540d\u7ea6\u5b9a\u6765\u5b9e\u73b0\u201c\u80fd\u5426\u6267\u884c\uff1f\u201d\u7684\u529f\u80fd\u7684\u7b80\u5355\u65b9\u6cd5\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u6839\u636e\u547d\u4ee4\u53c2\u6570\u7684\u503c\u6216\u89c6\u56fe\u6a21\u578b\u5c5e\u6027\u7684\u503c\u6765\u51b3\u5b9a\u662f\u5426\u6267\u884c\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u7f16\u5199\u4e00\u4e2a\u7b2c\u4e8c\u4e2a\u5e03\u5c14\u65b9\u6cd5\u6765\u68c0\u67e5\u64cd\u4f5c\u65b9\u6cd5\u662f\u5426\u53ef\u4ee5\u6267\u884c\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u4f7f\u5176\u5de5\u4f5c\uff0c",(0,i.kt)("em",{parentName:"p"},"Avalonia UI")," \u4f7f\u7528\u4e86\u5e03\u5c14\u65b9\u6cd5\u4e0e\u64cd\u4f5c\u65b9\u6cd5\u76f8\u540c\u7684\u6839\u540d\u79f0\uff0c\u4f46\u52a0\u4e0a\u4e86\u524d\u7f00 ",(0,i.kt)("inlineCode",{parentName:"p"},"Can")," \u7684\u547d\u540d\u7ea6\u5b9a\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace AvaloniaGuides.ViewModels\n{\n    public class MainWindowViewModel \n    {\n        public void PerformAction(object msg)\n        {\n            Debug.WriteLine($"The action was called. {msg}");\n        }\n\n        public bool CanPerformAction(object msg)\n        {\n            if (msg!=null) return !string.IsNullOrWhiteSpace( msg.ToString() );\n            return false;\n        }\n    }\n}\n')),(0,i.kt)("p",null,"\u56e0\u6b64\uff0c\u6269\u5c55\u793a\u4f8bXAML\u4ee5\u4ece\u6587\u672c\u6846\u63d0\u4f9b\u53c2\u6570\uff08\u5b57\u7b26\u4e32\uff09\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<StackPanel Margin="20">\n  <TextBox Margin="0 5" x:Name="message" \n           Watermark="Add a message to enable the button"/>\n  <Button Command="{Binding PerformAction}"\n          CommandParameter="{Binding #message.Text}">\n    Run the example\n  </Button>\n</StackPanel>\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u8fd9\u4e2a\u793a\u4f8b\u4f7f\u7528\u4e86\u76f4\u63a5\u7ed1\u5b9a\u5230\u53e6\u4e00\u4e2a\u63a7\u4ef6\u7684\u6280\u672f\u3002\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u770b\u5230\u5982\u4f55\u505a\u5230\u8fd9\u4e00\u70b9\uff0c",(0,i.kt)("a",{parentName:"p",href:"/avalonia-docs/zh-Hans/docs/next/guides/data-binding/binding-to-controls"},"\u8fd9\u91cc"),"\u3002")),(0,i.kt)("p",null,"\u4f60\u4f1a\u53d1\u73b0\u53ea\u6709\u5f53\u6587\u672c\u6846\u5305\u542b\u5b57\u7b26\u4e32\u65f6\uff0c\u6309\u94ae\u624d\u4f1a\u53d8\u4e3a\u53ef\u7528\u72b6\u6001\u3002"),(0,i.kt)("img",{src:r,alt:""}),(0,i.kt)("h2",{id:"\u89e6\u53d1\u80fd\u5426\u6267\u884c"},(0,i.kt)("strong",{parentName:"h2"},"\u89e6\u53d1\u201c\u80fd\u5426\u6267\u884c\u201d")),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u8981\u4ece\u89c6\u56fe\u6a21\u578b\u4e2d\u7684\u53e6\u4e00\u4e2a\u5c5e\u6027\u89e6\u53d1\u201c\u80fd\u5426\u6267\u884c\u201d\u65b9\u6cd5\uff0c\u90a3\u4e48\u4f60\u5c06\u4e0d\u5f97\u4e0d\u4e3a\u8be5\u5c5e\u6027\u6dfb\u52a0\u4e00\u4e2a\u6216\u591a\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"DependsOn")," \u5c5e\u6027\uff0c\u5e76\u7f16\u5199\u4ee3\u7801\u6765\u624b\u52a8\u8c03\u7528\u5c5e\u6027\u66f4\u6539\u4e8b\u4ef6\u3002"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u8fd9\u79cd\u6280\u672f\u9002\u7528\u4e8e\u6ca1\u6709\u4f7f\u7528 ",(0,i.kt)("em",{parentName:"p"},"ReactiveUI")," \u6846\u67b6\u7684\u89c6\u56fe\u6a21\u578b\u3002")))}g.isMDXComponent=!0}}]);