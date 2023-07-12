"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[52511],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),u=o,m=p["".concat(l,".").concat(u)]||p[u]||b[u]||r;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},97461:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=t(87462),o=(t(67294),t(3905));const r={id:"binding-to-tasks-and-observables",title:"Binding to Tasks and Observables"},i=void 0,s={unversionedId:"data-binding/binding-to-tasks-and-observables",id:"version-0.10.x/data-binding/binding-to-tasks-and-observables",title:"Binding to Tasks and Observables",description:"You can subscribe to the result of a task or an observable by using the ^ stream binding operator.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/data-binding/binding-to-tasks-and-observables.md",sourceDirName:"data-binding",slug:"/data-binding/binding-to-tasks-and-observables",permalink:"/avalonia-docs/zh-Hans/docs/data-binding/binding-to-tasks-and-observables",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/data-binding/binding-to-tasks-and-observables.md",tags:[],version:"0.10.x",frontMatter:{id:"binding-to-tasks-and-observables",title:"Binding to Tasks and Observables"},sidebar:"documentationSidebar",previous:{title:"Binding to Commands",permalink:"/avalonia-docs/zh-Hans/docs/data-binding/binding-to-commands"},next:{title:"Binding from Code",permalink:"/avalonia-docs/zh-Hans/docs/data-binding/binding-from-code"}},l={},d=[{value:"Example 1: Binding to an observable",id:"example-1-binding-to-an-observable",level:2},{value:"Example 2: Binding to a task",id:"example-2-binding-to-a-task",level:2}],c={toc:d},p="wrapper";function b(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can subscribe to the result of a task or an observable by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"^")," stream binding operator."),(0,o.kt)("h2",{id:"example-1-binding-to-an-observable"},"Example 1: Binding to an observable"),(0,o.kt)("p",null,"For example if ",(0,o.kt)("inlineCode",{parentName:"p"},"DataContext.Name")," is an ",(0,o.kt)("inlineCode",{parentName:"p"},"IObservable<string>")," then the following example will bind to the length of each string produced by the observable as each value is produced"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<TextBlock Text="{Binding Name^.Length}"/>\n')),(0,o.kt)("h2",{id:"example-2-binding-to-a-task"},"Example 2: Binding to a task"),(0,o.kt)("p",null,"If you need to do some heavy work to load the content of a property you can bind to the result of an ",(0,o.kt)("inlineCode",{parentName:"p"},"async Task<TResult>")),(0,o.kt)("p",null,"Consider you have the following view model which generates some text in a long running process:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'public Task<string> MyAsyncText => GetTextAsync();\n\nprivate async Task<string> GetTextAsync()\n{\n  await Task.Delay(1000); // The delay is just for demonstration purpose\n  return "Hello from async operation";\n}\n')),(0,o.kt)("p",null,"You can bind to the result in the following way: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},"<TextBlock Text=\"{Binding MyAsyncText^, FallbackValue='Wait a second'}\" />\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Note: You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"FallbackValue")," to display some loading indicator. ")))}b.isMDXComponent=!0}}]);