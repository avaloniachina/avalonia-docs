"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[7788],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var s=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=s.createContext({}),c=function(e){var t=s.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return s.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?s.createElement(f,r(r({ref:t},p),{},{components:n})):s.createElement(f,r({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=n(87462),o=(n(67294),n(3905));const a={description:"CONCEPTS"},r="Pseudo Classes",l={unversionedId:"concepts/pseudo-classes",id:"concepts/pseudo-classes",title:"Pseudo Classes",description:"CONCEPTS",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/concepts/pseudo-classes.md",sourceDirName:"concepts",slug:"/concepts/pseudo-classes",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/pseudo-classes",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/concepts/pseudo-classes.md",tags:[],version:"current",frontMatter:{description:"CONCEPTS"},sidebar:"documentationSidebar",previous:{title:"Binding to Sorted/Filtered Data",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/reactiveui/binding-to-sorted-filtered-list"},next:{title:"Services",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/services/"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"Custom Pseudo Classes",id:"custom-pseudo-classes",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pseudo-classes"},"Pseudo Classes"),(0,o.kt)("p",null,"Pseudo classes in Avalonia, similar to those in CSS, are keywords added to a selector that specify a special state of the selected element(s). They can be used to style controls differently based on certain conditions. For example, a button could be styled differently when it's being pressed, or a TextBox can have a different style when it is disabled."),(0,o.kt)("p",null,"Avalonia supports a number of built-in pseudo classes, and controls can define their own."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"To use pseudo classes, you append a colon (:) and the pseudo class to the selector. Here's an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<Button Content="Click Me!">\n  <Button.Styles>\n    // highlight-start\n    <Style Selector="Button:pointerover">\n    // highlight-end\n      <Setter Property="Background" Value="Red"/>\n    </Style>\n  </Button.Styles>\n</Button>\n')),(0,o.kt)("p",null,"In this example, the button's background will change to red when the pointer is over it, thanks to the ",(0,o.kt)("inlineCode",{parentName:"p"},"pointerover")," pseudo class."),(0,o.kt)("p",null,"##\xa0Built-in Pseudo Classes\nSome of the built-in pseudo classes include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":pointerover"),": The mouse pointer is over the control."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":pressed"),": The control is being pressed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":disabled"),": The control is disabled."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":focus"),": The control has input focus."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":watermark"),": For TextBox control, when it's displaying a watermark."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":checked"),": For checkable controls, like CheckBox or MenuItem, when it's checked."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":indeterminate"),": For controls like CheckBox, when it's in the indeterminate state."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":valid"),": For input controls, when the input is valid."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":invalid"),": For input controls, when the input is invalid.")),(0,o.kt)("p",null,"You can combine pseudo classes with type selectors and class selectors to create a wide range of effects."),(0,o.kt)("h2",{id:"custom-pseudo-classes"},"Custom Pseudo Classes"),(0,o.kt)("p",null,"Controls can define their own pseudo classes for specific behaviors. To define a pseudo class, a control typically creates a static readonly field of type ",(0,o.kt)("inlineCode",{parentName:"p"},"PseudoClass")," and calls ",(0,o.kt)("inlineCode",{parentName:"p"},"PseudoClasses.Set()")," to enable the pseudo class and ",(0,o.kt)("inlineCode",{parentName:"p"},"PseudoClasses.Remove()")," to disable it."),(0,o.kt)("p",null,"For example, a custom ",(0,o.kt)("inlineCode",{parentName:"p"},":custom")," pseudo class might be defined as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'public static readonly PseudoClass CustomPseudoClass = PseudoClass.Parse(":custom");\n\n// to enable\nPseudoClasses.Set(CustomPseudoClass);\n\n// to disable\nPseudoClasses.Remove(CustomPseudoClass);\n')),(0,o.kt)("p",null,"This allows developers to add more expressiveness and control to their styles, tailoring styles to very specific control states."))}d.isMDXComponent=!0}}]);