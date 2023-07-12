"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[83574],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=i,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return a?n.createElement(f,r(r({ref:t},d),{},{components:a})):n.createElement(f,r({ref:t},d))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},10062:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const o={id:"data-templates",title:"Data Templates"},r=void 0,l={unversionedId:"basics/data/data-templates",id:"basics/data/data-templates",title:"Data Templates",description:"Data Templates in Avalonia provide a powerful way to define the visual representation of your data. They allow you to specify how your data should be presented and formatted, enabling you to create dynamic and customizable user interfaces. This document will introduce you to the concept of Data Templates in Avalonia and demonstrate how to use them effectively in your applications.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/basics/data/data-templates.md",sourceDirName:"basics/data",slug:"/basics/data/data-templates",permalink:"/avalonia-docs/zh-Hans/docs/next/basics/data/data-templates",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/basics/data/data-templates.md",tags:[],version:"current",frontMatter:{id:"data-templates",title:"Data Templates"},sidebar:"documentationSidebar",previous:{title:"Compiled Bindings",permalink:"/avalonia-docs/zh-Hans/docs/next/basics/data/data-binding/compiled-bindings"},next:{title:"\u64cd\u4f5c\u6307\u5357",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/"}},s={},p=[{value:"What is a Data Template?",id:"what-is-a-data-template",level:2},{value:"Applying a Data Template to a ListBox",id:"applying-a-data-template-to-a-listbox",level:2},{value:"Customizing Data Templates",id:"customizing-data-templates",level:2},{value:"Further Reading",id:"further-reading",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Data Templates in Avalonia provide a powerful way to define the visual representation of your data. They allow you to specify how your data should be presented and formatted, enabling you to create dynamic and customizable user interfaces. This document will introduce you to the concept of Data Templates in Avalonia and demonstrate how to use them effectively in your applications."),(0,i.kt)("h2",{id:"what-is-a-data-template"},"What is a Data Template?"),(0,i.kt)("p",null,"At its core, a Data Template is a reusable definition that specifies how to present data of a particular type. It defines the visual structure and appearance of the data when displayed in the user interface. In Avalonia, a Data Template is often associated with a list control, such as a ",(0,i.kt)("inlineCode",{parentName:"p"},"ListBox")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemsControl"),", and is responsible for rendering individual items of data within that control."),(0,i.kt)("h2",{id:"applying-a-data-template-to-a-listbox"},"Applying a Data Template to a ListBox"),(0,i.kt)("p",null,"To apply a Data Template to a ",(0,i.kt)("inlineCode",{parentName:"p"},"ListBox"),", you typically use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTemplate")," property of the control. "),(0,i.kt)("p",null,"For instance, if you have a ",(0,i.kt)("inlineCode",{parentName:"p"},"ListBox")," that should display a collection of ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," objects using the defined Data Template, you can set the ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTemplate")," property like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<ListBox ItemsSource="{Binding Items}">\n  <ListBox.ItemTemplate>\n    <DataTemplate>\n        <StackPanel Orientation="Horizontal">\n            <TextBlock Text="{Binding Name}" />\n            <Image Source="{Binding ImageSource}" />\n        </StackPanel>\n    </DataTemplate>\n  </ListBox.ItemTemplate>\n<ListBox/>\n')),(0,i.kt)("p",null,"In this example, the Data Template defines a visual layout using a ",(0,i.kt)("inlineCode",{parentName:"p"},"StackPanel")," container. Within the ",(0,i.kt)("inlineCode",{parentName:"p"},"StackPanel"),", we have a ",(0,i.kt)("inlineCode",{parentName:"p"},"TextBlock")," bound to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Name")," property of the item and an ",(0,i.kt)("inlineCode",{parentName:"p"},"Image")," control bound to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ImageSource")," property."),(0,i.kt)("h2",{id:"customizing-data-templates"},"Customizing Data Templates"),(0,i.kt)("p",null,"Data Templates can be customized and tailored to specific scenarios. You can include additional visual elements, apply styling, and even define nested templates within a Data Template. By leveraging data binding expressions and converters, you can dynamically populate and format the visual elements based on the data properties."),(0,i.kt)("h2",{id:"further-reading"},"Further Reading"),(0,i.kt)("p",null,"For more information see the Deep Dive into to ",(0,i.kt)("a",{parentName:"p",href:"../../concepts/templates"},"data templates"),"."))}m.isMDXComponent=!0}}]);