"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[16696],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),g=a,h=d["".concat(i,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(h,c(c({ref:t},s),{},{components:n})):r.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=g;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:a,c[1]=p;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},59854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={info:"propertychangedcallback",title:"PropertyChangedCallback"},c=void 0,p={unversionedId:"wpf-developer-tips/propertychangedcallback",id:"version-0.10.x/wpf-developer-tips/propertychangedcallback",title:"PropertyChangedCallback",description:"Listening to changes on DependencyProperties in WPF can be complex. When you register a DependencyProperty you can supply a static PropertyChangedCallback but if you want to listen to changes from elsewhere things can get complicated and error-prone.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/wpf-developer-tips/propertychangedcallback.md",sourceDirName:"wpf-developer-tips",slug:"/wpf-developer-tips/propertychangedcallback",permalink:"/avalonia-docs/zh-Hans/docs/wpf-developer-tips/propertychangedcallback",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/wpf-developer-tips/propertychangedcallback.md",tags:[],version:"0.10.x",frontMatter:{info:"propertychangedcallback",title:"PropertyChangedCallback"},sidebar:"documentationSidebar",previous:{title:"Class Handlers",permalink:"/avalonia-docs/zh-Hans/docs/wpf-developer-tips/class-handlers"},next:{title:"RenderTransforms and RenderTransformOrigin",permalink:"/avalonia-docs/zh-Hans/docs/wpf-developer-tips/rendertransforms-and-rendertransformorigin"}},i={},l=[],s={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Listening to changes on DependencyProperties in WPF can be complex. When you register a ",(0,a.kt)("inlineCode",{parentName:"p"},"DependencyProperty")," you can supply a static ",(0,a.kt)("inlineCode",{parentName:"p"},"PropertyChangedCallback")," but if you want to listen to changes from elsewhere ",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/23682232"},"things can get complicated and error-prone"),"."),(0,a.kt)("p",null,"In Avalonia, there is no ",(0,a.kt)("inlineCode",{parentName:"p"},"PropertyChangedCallback")," at the time of registration, instead a class listener is ",(0,a.kt)("a",{parentName:"p",href:"../data-binding/binding-from-code#subscribing-to-a-property-on-any-object"},"added to the control's static constructor in much the same way that event class listeners are added"),"."),(0,a.kt)("p",null,"As side effect of this change, you may need to dispatch events yourself.\n",(0,a.kt)("strong",{parentName:"p"},"WPF")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"treeView.SelectedItemChanged += TreeView_SelectedItemChanged;\n\n// ...\n\nprivate void TreeView_SelectedItemChanged(object sender, RoutedPropertyChangedEventArgs<object> e)\n{\n    var item = treeView.SelectedItem;\n    // work with selected item.\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Avalonia")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"treeView.PropertyChanged += TreeView_SelectedItemChanged;\n\n// ...\n\nprivate void TreeView_SelectedItemChanged(object sender, AvaloniaPropertyChangedEventArgs e)\n{\n    if (e.Property != TreeView.SelectedItemProperty) return;\n\n    var item = treeView.SelectedItem;\n    // work with selected item.\n}\n")),(0,a.kt)("p",null,"Even plain text box should be handled in same way.\n",(0,a.kt)("strong",{parentName:"p"},"WPF")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"searchTextBox.TextChanged += new TextChangedEventHandler(searchTextBox_TextChanged);\n\nprivate void searchTextBox_TextChanged(object sender, TextChangedEventArgs e)\n{\n    // handle text change\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Avalonia")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"searchTextBox.PropertyChanged += searchTextBox_TextChanged;\n\n// ...\n\nprivate void searchTextBox_TextChanged(object sender, AvaloniaPropertyChangedEventArgs e)\n{\n    if (e.Property != TextBox.TextProperty) return;\n\n    // handle text change\n}\n")))}u.isMDXComponent=!0}}]);