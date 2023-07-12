"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[23688],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={description:"REFERENCE"},i="Built-in Data Binding Converters",l={unversionedId:"reference/built-in-data-binding-converters",id:"reference/built-in-data-binding-converters",title:"Built-in Data Binding Converters",description:"REFERENCE",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/built-in-data-binding-converters.md",sourceDirName:"reference",slug:"/reference/built-in-data-binding-converters",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/built-in-data-binding-converters",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/reference/built-in-data-binding-converters.md",tags:[],version:"current",frontMatter:{description:"REFERENCE"},sidebar:"documentationSidebar",previous:{title:"Animation Settings",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/animation-settings"},next:{title:"Built-in Controls",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/"}},s={},u=[{value:"Negation Operator Examples",id:"negation-operator-examples",level:2},{value:"Other Conversion Examples",id:"other-conversion-examples",level:2},{value:"More Information",id:"more-information",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"built-in-data-binding-converters"},"Built-in Data Binding Converters"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Avalonia UI")," includes a number of built-in data binding converters for common scenarios:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Converter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Negation Operator"),(0,a.kt)("td",{parentName:"tr",align:null},"The ! operator can be placed in front of the data binding path to return the inversion of a Boolean value. See also the note below.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"StringConverters.IsNullOrEmpty")),(0,a.kt)("td",{parentName:"tr",align:null},"Returns ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," if the input string is null or empty")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"StringConverters.IsNotNullOrEmpty")),(0,a.kt)("td",{parentName:"tr",align:null},"Returns ",(0,a.kt)("inlineCode",{parentName:"td"},"false")," if the input string is null or empty")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ObjectConverters.IsNull")),(0,a.kt)("td",{parentName:"tr",align:null},"Returns ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," if the input is null")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ObjectConverters.IsNotNull")),(0,a.kt)("td",{parentName:"tr",align:null},"Returns ",(0,a.kt)("inlineCode",{parentName:"td"},"false")," if the input is null")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"BoolConverters.And")),(0,a.kt)("td",{parentName:"tr",align:null},"A multi-value converter that returns ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," if all inputs are true.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"BoolConverters.Or")),(0,a.kt)("td",{parentName:"tr",align:null},"A multi-value converter that returns ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," if any input is true.")))),(0,a.kt)("h2",{id:"negation-operator-examples"},"Negation Operator Examples"),(0,a.kt)("p",null,"This example shows the text block when the bound value is false:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<StackPanel>\n  <TextBox Name="input" IsEnabled="{Binding AllowInput}"/>\n  <TextBlock IsVisible="{Binding !AllowInput}">Input is not allowed</TextBlock>\n</StackPanel>\n')),(0,a.kt)("p",null,"Negation also works when you bind to a non-Boolean value. This works because the bound value is first converted to a Boolean (using the function ",(0,a.kt)("inlineCode",{parentName:"p"},"Convert.ToBoolean")," ) and then the result is negated."," "),(0,a.kt)("p",null,"For example, as the integer zero is converted to false (by the the function ",(0,a.kt)("inlineCode",{parentName:"p"},"Convert.ToBoolean"),") and all other integer values are converted to true, you can use the negation operator to show a message when a collection is empty, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<Panel>\n  <ListBox Items="{Binding Items}"/>\n  <TextBlock IsVisible="{Binding !Items.Count}">No results found</TextBlock>\n</Panel>\n')),(0,a.kt)("p",null,"You can also use the negation operator twice. For example, where you want to perform the conversion from integer to Boolean, and then negate that value."," "),(0,a.kt)("p",null,"You can use this to hide a control when a collection is empty (count is zero), like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<Panel>\n  <ListBox Items="{Binding Items}" IsVisible="{Binding !!Items.Count}"/>\n</Panel>\n')),(0,a.kt)("h2",{id:"other-conversion-examples"},"Other Conversion Examples"),(0,a.kt)("p",null,"This example binding will hide the text block if its bound text is null or empty:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<TextBlock Text="{Binding MyText}"\n           IsVisible="{Binding MyText, \n                       Converter={x:Static StringConverters.IsNotNullOrEmpty}}"/>\n')),(0,a.kt)("p",null,"And this example will hide the content control if the bound object is null or empty:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<ContentControl Content="{Binding MyContent}"\n                IsVisible="{Binding MyContent, \n                            Converter={x:Static ObjectConverters.IsNotNull}}"/>\n')),(0,a.kt)("h2",{id:"more-information"},"More Information"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can follow the Avalonia UI value converter sample, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia.Samples/tree/main/src/Avalonia.Samples/MVVM/ValueConversionSample"},"here"),".")))}d.isMDXComponent=!0}}]);