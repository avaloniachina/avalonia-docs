"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[12890],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},82494:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={info:"datatemplates",title:"DataTempaltes"},l=void 0,i={unversionedId:"wpf-developer-tips/datatemplates",id:"version-0.10.x/wpf-developer-tips/datatemplates",title:"DataTempaltes",description:"As styles aren't stored in Resources, neither are DataTemplates. Instead, DataTemplates are placed in a DataTemplates collection on each control \\(and on Application\\):",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/wpf-developer-tips/datatemplates.md",sourceDirName:"wpf-developer-tips",slug:"/wpf-developer-tips/datatemplates",permalink:"/avalonia-docs/zh-Hans/docs/wpf-developer-tips/datatemplates",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/wpf-developer-tips/datatemplates.md",tags:[],version:"0.10.x",frontMatter:{info:"datatemplates",title:"DataTempaltes"},sidebar:"documentationSidebar",previous:{title:"Styling",permalink:"/avalonia-docs/zh-Hans/docs/wpf-developer-tips/styling"},next:{title:"HierachicalDataTemplate",permalink:"/avalonia-docs/zh-Hans/docs/wpf-developer-tips/hierachicaldatatemplate"}},p={},s=[{value:"DataTemplateSelector",id:"datatemplateselector",level:2}],c={toc:s},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As styles aren't stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"Resources"),", neither are ",(0,r.kt)("inlineCode",{parentName:"p"},"DataTemplates"),". Instead, ",(0,r.kt)("inlineCode",{parentName:"p"},"DataTemplates")," are placed in a ",(0,r.kt)("inlineCode",{parentName:"p"},"DataTemplates")," collection on each control ","(","and on ",(0,r.kt)("inlineCode",{parentName:"p"},"Application"),")",":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'<UserControl xmlns:viewmodels="clr-namespace:MyApp.ViewModels;assembly=MyApp">\n    <UserControl.DataTemplates>\n        <DataTemplate DataType="viewmodels:FooViewModel">\n            <Border Background="Red" CornerRadius="8">\n                <TextBox Text="{Binding Name}"/>\n            </Border>\n        </DataTemplate>\n    </UserControl.DataTemplates>\n    \x3c!-- Assuming that DataContext.Foo is an object of type\n         MyApp.ViewModels.FooViewModel then a red border with a corner\n         radius of 8 containing a TextBox will be displayed here --\x3e\n    <ContentControl Content="{Binding Foo}"/>\n<UserControl>\n')),(0,r.kt)("p",null,"Data templates in Avalonia can also target interfaces and derived classes ","(","which cannot be done in WPF",")"," and so the order of ",(0,r.kt)("inlineCode",{parentName:"p"},"DataTemplate"),"s can be important: ",(0,r.kt)("inlineCode",{parentName:"p"},"DataTemplate"),"s within the same collection are evaluated in declaration order so you need to place them from most-specific to least-specific as you would in code."),(0,r.kt)("h2",{id:"datatemplateselector"},"DataTemplateSelector"),(0,r.kt)("p",null,"In WPF you can create a ",(0,r.kt)("inlineCode",{parentName:"p"},"DataTemplateSelector")," to select or create a ",(0,r.kt)("inlineCode",{parentName:"p"},"DataTemplate")," based on the provided data. In Avalonia you cannot do this, but you can implement ",(0,r.kt)("inlineCode",{parentName:"p"},"IDataTemplate")," which can be seen as a good replacement for the ",(0,r.kt)("inlineCode",{parentName:"p"},"DataTemplateSelector"),". Please find a sample ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia.Samples/tree/main/src/Avalonia.Samples/DataTemplates/IDataTemplateSample"},"here"),"."))}m.isMDXComponent=!0}}]);