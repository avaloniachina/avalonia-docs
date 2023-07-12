"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[37583],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>f});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(i),m=a,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return i?n.createElement(f,o(o({ref:t},d),{},{components:i})):n.createElement(f,o({ref:t},d))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},17260:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=i(87462),a=(i(67294),i(3905));const r={id:"improving-performance",title:"Improving Performance"},o=void 0,s={unversionedId:"guides/development-guides/improving-performance",id:"guides/development-guides/improving-performance",title:"Improving Performance",description:"The performance of Avalonia applications can be significantly improved by taking into account several key considerations during the development process. This document discusses the steps you can take to optimize the performance of your Avalonia applications.",source:"@site/docs/guides/development-guides/improving-performance.md",sourceDirName:"guides/development-guides",slug:"/guides/development-guides/improving-performance",permalink:"/avalonia-docs/docs/next/guides/development-guides/improving-performance",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/development-guides/improving-performance.md",tags:[],version:"current",frontMatter:{id:"improving-performance",title:"Improving Performance"},sidebar:"documentationSidebar",previous:{title:"How To Show and Hide a Split View Pane with MVVM",permalink:"/avalonia-docs/docs/next/guides/development-guides/how-to-show-and-hide-a-split-view-pane-with-mvvm"},next:{title:"Android",permalink:"/avalonia-docs/docs/next/guides/platforms/android/"}},l={},p=[{value:"Use CompiledBindings",id:"use-compiledbindings",level:2},{value:"Choose the Right Control for Data Display",id:"choose-the-right-control-for-data-display",level:2},{value:"Virtualization",id:"virtualization",level:2},{value:"TreeDataGrid",id:"treedatagrid",level:3},{value:"Optimize Your Visual Tree Structure",id:"optimize-your-visual-tree-structure",level:2},{value:"Minimize Use of Run for Setting Text Properties",id:"minimize-use-of-run-for-setting-text-properties",level:2},{value:"Use StreamGeometries Over PathGeometries",id:"use-streamgeometries-over-pathgeometries",level:2},{value:"Use Reduced Image Sizes",id:"use-reduced-image-sizes",level:2},{value:"Resolve Your Binding Errors",id:"resolve-your-binding-errors",level:2},{value:"Asynchronously Load Data",id:"asynchronously-load-data",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The performance of Avalonia applications can be significantly improved by taking into account several key considerations during the development process. This document discusses the steps you can take to optimize the performance of your Avalonia applications."),(0,a.kt)("h2",{id:"use-compiledbindings"},"Use CompiledBindings"),(0,a.kt)("p",null,"One of the most effective ways to improve performance in Avalonia is to use ",(0,a.kt)("a",{parentName:"p",href:"../../basics/data/data-binding/compiled-bindings"},(0,a.kt)("inlineCode",{parentName:"a"},"CompiledBindings"))," in your application. Compiled bindings enable faster data binding by compiling the binding path at compile time, thus reducing the overhead of reflection at runtime. "),(0,a.kt)("h2",{id:"choose-the-right-control-for-data-display"},"Choose the Right Control for Data Display"),(0,a.kt)("p",null,"\u200b\u200bWhen you need to display a large amount of data in a ",(0,a.kt)("inlineCode",{parentName:"p"},"DataGrid")," or a ",(0,a.kt)("inlineCode",{parentName:"p"},"TreeView")," with many nodes, it is recommended to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"TreeDataGrid")," control. ",(0,a.kt)("inlineCode",{parentName:"p"},"TreeDataGrid")," is built from scratch and provides better performance than the normal ",(0,a.kt)("inlineCode",{parentName:"p"},"DataGrid"),". It supports virtualization and is particularly useful if you need a virtualized tree, as it has hierarchical data templates\u200b."),(0,a.kt)("p",null,"Avoid using the ",(0,a.kt)("inlineCode",{parentName:"p"},"DataGrid")," control if you don't need editing features. It's generally regarded as a less optimal control for performance\u200b\u200b."),(0,a.kt)("h2",{id:"virtualization"},"Virtualization"),(0,a.kt)("p",null,"When working with large amounts of data, enabling virtualization can improve the performance of your Avalonia application. Virtualization means that only the visible items in the control are rendered, which significantly improves the performance when there are a large number of items to display."),(0,a.kt)("h3",{id:"treedatagrid"},"TreeDataGrid"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TreeDataGrid")," supports virtualization and can handle thousands of rows with complex cells effectively\u200b\u200b."),(0,a.kt)("h2",{id:"optimize-your-visual-tree-structure"},"Optimize Your Visual Tree Structure"),(0,a.kt)("p",null,'Performance can often be hindered by a deeply nested and complicated layout. Strive to maintain your XAML markup as uncomplicated and flat as possible. Rendering UI elements onscreen triggers a "layout pass" twice for every single element (a measure pass followed by an arrange pass). '),(0,a.kt)("p",null,"This layout pass process is computation-heavy\u2014the more child elements an item has, the more calculations are needed. Therefore, minimizing the complexity of your visual tree in Avalonia UI can significantly enhance the application's performance."),(0,a.kt)("h2",{id:"minimize-use-of-run-for-setting-text-properties"},"Minimize Use of Run for Setting Text Properties"),(0,a.kt)("p",null,"It's advisable to minimize the use of Run within a TextBlock as it can lead to more resource-demanding operations. If you're utilizing Run to define text properties, consider setting those properties directly on the TextBlock instead. This practice can help enhance the performance of your application."),(0,a.kt)("h2",{id:"use-streamgeometries-over-pathgeometries"},"Use StreamGeometries Over PathGeometries"),(0,a.kt)("p",null,"When dealing with geometries in Avalonia UI, ",(0,a.kt)("inlineCode",{parentName:"p"},"StreamGeometry")," is a more efficient alternative to ",(0,a.kt)("inlineCode",{parentName:"p"},"PathGeometry"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"StreamGeometry")," is specifically optimized to handle numerous ",(0,a.kt)("inlineCode",{parentName:"p"},"PathGeometry")," objects, consuming less memory and offering superior performance. Hence, when a choice is available, it's recommended to use ",(0,a.kt)("inlineCode",{parentName:"p"},"StreamGeometry")," over ",(0,a.kt)("inlineCode",{parentName:"p"},"PathGeometry")," for improved application performance."),(0,a.kt)("h2",{id:"use-reduced-image-sizes"},"Use Reduced Image Sizes"),(0,a.kt)("p",null,"When your application necessitates the display of smaller images or thumbnails, it's beneficial to generate and use reduced-size versions of your images. By default, Avalonia will load and decode your image at its original full size, which can potentially lead to performance bottlenecks if you're loading large images and scaling them down to thumbnail sizes in controls like an ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemsControl"),"."),(0,a.kt)("h2",{id:"resolve-your-binding-errors"},"Resolve Your Binding Errors"),(0,a.kt)("p",null,"Binding errors are a prevalent source of performance issues in Avalonia UI applications. Each occurrence of a binding error causes a performance dip as the application attempts to resolve the binding and logs the error to the trace log. Naturally, the more binding errors present, the greater the impact on performance. "),(0,a.kt)("p",null,"A significant contributor to binding errors is the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"RelativeSource")," bindings in ",(0,a.kt)("inlineCode",{parentName:"p"},"DataTemplates"),", as the binding usually isn't resolved correctly until the ",(0,a.kt)("inlineCode",{parentName:"p"},"DataTemplate")," has completed its initialization. It's recommended to avoid ",(0,a.kt)("inlineCode",{parentName:"p"},"RelativeSource.FindAncestor")," entirely. A more efficient approach is to define an attached property and utilize property inheritance to push values down the visual tree, rather than performing a lookup of the visual tree."),(0,a.kt)("h2",{id:"asynchronously-load-data"},"Asynchronously Load Data"),(0,a.kt)("p",null,"Performance issues, UI freezes, and unresponsive applications often stem from the way data is loaded. To prevent overloading the UI thread, ensure that your data is loaded asynchronously."))}u.isMDXComponent=!0}}]);