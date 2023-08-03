"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[73840],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={description:"CONCEPTS - Data Templates"},l="\u6570\u636e\u6a21\u677f\u96c6\u5408",i={unversionedId:"concepts/templates/data-templates-collection",id:"concepts/templates/data-templates-collection",title:"\u6570\u636e\u6a21\u677f\u96c6\u5408",description:"CONCEPTS - Data Templates",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/concepts/templates/data-templates-collection.md",sourceDirName:"concepts/templates",slug:"/concepts/templates/data-templates-collection",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/templates/data-templates-collection",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/concepts/templates/data-templates-collection.md",tags:[],version:"current",frontMatter:{description:"CONCEPTS - Data Templates"},sidebar:"documentationSidebar",previous:{title:"\u5185\u5bb9\u6a21\u677f",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/templates/content-template"},next:{title:"\u91cd\u590d\u4f7f\u7528\u6570\u636e\u6a21\u677f",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/templates/reusing-data-templates"}},c={},p=[],s={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6570\u636e\u6a21\u677f\u96c6\u5408"},"\u6570\u636e\u6a21\u677f\u96c6\u5408"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Avalonia UI"),"\u4e2d\u7684\u6bcf\u4e2a\u63a7\u4ef6\u90fd\u6709\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"DataTemplates"),"\uff08\u6570\u636e\u6a21\u677f\uff09\u96c6\u5408\uff0c\u60a8\u53ef\u4ee5\u5728\u5176\u4e2d\u653e\u7f6e\u4efb\u610f\u6570\u91cf\u7684\u6570\u636e\u6a21\u677f\u5b9a\u4e49\u3002\u7136\u540e\uff0c\u60a8\u53ef\u4ee5\u6839\u636e\u7c7b\u7c7b\u578b\u9009\u62e9\u8981\u7528\u4e8e\u663e\u793a\u7684\u6a21\u677f\u3002 "),(0,o.kt)("p",null,"\u5f53\u4e00\u4e2a\u63a7\u4ef6\u5728\u5176",(0,o.kt)("inlineCode",{parentName:"p"},"ContentTemplate"),"\u5c5e\u6027\u4e2d\u6ca1\u6709\u76f4\u63a5\u8bbe\u7f6e\u6570\u636e\u6a21\u677f\uff08\u5982\u4e0a\u4e00\u9875\u6240\u793a\uff09\u65f6\uff0c\u5b83\u5c06\u4ece\u5176",(0,o.kt)("inlineCode",{parentName:"p"},"DataTemplates"),"\u96c6\u5408\u4e2d\u9009\u62e9\u4e00\u4e2a\u4e0e\u6b63\u5728\u663e\u793a\u7684\u5bf9\u8c61\u7684\u7c7b\u5339\u914d\u7684\u6a21\u677f\u3002\u8fd9\u9002\u7528\u4e8e\u7a97\u53e3\u3002"),(0,o.kt)("p",null,"\u6570\u636e\u6a21\u677f\u662f\u6839\u636e\u7c7b\u578b\u5339\u914d\u7684\uff1a\u5f53\u663e\u793a\u7684\u5bf9\u8c61\u7684\u7c7b\u4e0e\u6a21\u677f\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"DataType"),"\uff08\u6570\u636e\u7c7b\u578b\uff09\u5c5e\u6027\u4e2d\u6307\u5b9a\u7684\u5b8c\u5168\u9650\u5b9a\u7c7b\u540d\u76f8\u540c\u65f6\uff0c\u5c31\u4f1a\u8fdb\u884c\u5339\u914d\u3002"),(0,o.kt)("p",null,"\u56e0\u6b64\uff0c\u60a8\u53ef\u4ee5\u4fee\u6539\u524d\u9762\u7684\u793a\u4f8b\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"DataTemplates"),"\u96c6\u5408\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:local="using:MySample"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n        x:Class="MySample.MainWindow"\n        Title="MySample">\n  <Window.DataTemplates>\n    <DataTemplate DataType="{x:Type local:Student}">\n      <Grid ColumnDefinitions="Auto,Auto" RowDefinitions="Auto,Auto">\n        <TextBlock Grid.Row="0" Grid.Column="0">\u59d3:</TextBlock>\n        <TextBlock Grid.Row="0" Grid.Column="1" Text="{Binding FirstName}"/>\n        <TextBlock Grid.Row="1" Grid.Column="0">\u540d:</TextBlock>\n        <TextBlock Grid.Row="1" Grid.Column="1" Text="{Binding LastName}"/>\n      </Grid>\n    </DataTemplate>\n  </Window.DataTemplates>\n  \n  <local:Student FirstName="Jane" LastName="Deer"/>\n</Window>\n')),(0,o.kt)("p",null,"\u8fd9\u5c06\u5f97\u5230\u4e0e\u4e0a\u4e00\u9875\u5b8c\u5168\u76f8\u540c\u7684\u663e\u793a\u6548\u679c\uff1a"),(0,o.kt)("img",{src:"/img/gitbook-import/assets/image (57).png",alt:""}))}u.isMDXComponent=!0}}]);