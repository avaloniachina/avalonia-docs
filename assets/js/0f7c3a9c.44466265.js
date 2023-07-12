"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[64054],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},v=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=c(n),v=r,m=p["".concat(l,".").concat(v)]||p[v]||u[v]||a;return n?i.createElement(m,o(o({ref:t},s),{},{components:n})):i.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=v;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[p]="string"==typeof e?e:r,o[1]=d;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}v.displayName="MDXCreateElement"},3514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const a={id:"binding-to-sorted-filtered-list",title:"Binding to Sorted/Filtered Data"},o=void 0,d={unversionedId:"guides/deep-dives/reactiveui/binding-to-sorted-filtered-list",id:"version-0.10.x/guides/deep-dives/reactiveui/binding-to-sorted-filtered-list",title:"Binding to Sorted/Filtered Data",description:"A common UI task that applications need to do is display sorted and/or filtered 'views' of data. In Avalonia this can be accomplished by connecting a SourceCache or a SourceList to a ReadOnlyObservableCollection and binding to that collection",source:"@site/versioned_docs/version-0.10.x/guides/deep-dives/reactiveui/binding-to-sorted-filtered-list.md",sourceDirName:"guides/deep-dives/reactiveui",slug:"/guides/deep-dives/reactiveui/binding-to-sorted-filtered-list",permalink:"/avalonia-docs/docs/guides/deep-dives/reactiveui/binding-to-sorted-filtered-list",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/guides/deep-dives/reactiveui/binding-to-sorted-filtered-list.md",tags:[],version:"0.10.x",frontMatter:{id:"binding-to-sorted-filtered-list",title:"Binding to Sorted/Filtered Data"},sidebar:"documentationSidebar",previous:{title:"Data Persistence",permalink:"/avalonia-docs/docs/guides/deep-dives/reactiveui/data-persistence"},next:{title:"Developer Guides",permalink:"/avalonia-docs/docs/guides/developer-guides/"}},l={},c=[{value:"Creating a Source Cache",id:"creating-a-source-cache",level:2},{value:"Creating Sorted Or Filtered Views",id:"creating-sorted-or-filtered-views",level:2},{value:"Binding",id:"binding",level:2}],s={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A common UI task that applications need to do is display sorted and/or filtered 'views' of data. In Avalonia this can be accomplished by connecting a ",(0,r.kt)("inlineCode",{parentName:"p"},"SourceCache<TObject, TKey>")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"SourceList<T>")," to a ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadOnlyObservableCollection<T>")," and binding to that collection"),(0,r.kt)("h2",{id:"creating-a-source-cache"},"Creating a Source Cache"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SourceCache<TObject, TKey>")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"SourceList<T>")," come from ",(0,r.kt)("a",{parentName:"p",href:"https://www.reactiveui.net/docs/handbook/collections/"},"Dynamic Data in ReactiveUI"),"\nExample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// (x => x.Id) property that serves as the unique key for the cache\nprivate SourceCache<TestViewModel, Guid> _sourceCache = new (x => x.Id);\n")),(0,r.kt)("p",null,"Then the ",(0,r.kt)("inlineCode",{parentName:"p"},"_sourceCache")," can be populated through the ",(0,r.kt)("inlineCode",{parentName:"p"},"AddOrUpdate"),"  method"),(0,r.kt)("h2",{id:"creating-sorted-or-filtered-views"},"Creating Sorted Or Filtered Views"),(0,r.kt)("p",null,"Next the ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadOnlyObservableCollection<T>")," can be bound to the filtered or sorted ",(0,r.kt)("inlineCode",{parentName:"p"},"_sourceCache"),".\nThe sorting/filtering is done similarly to linq."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"private readonly ReadOnlyObservableCollection<TestViewModel> _testViewModels;\npublic ReadOnlyObservableCollection<TestViewModel> TestViewModels => _testViewModels;\n...\npublic MainWindowViewModel(){\n    // Populate the source cache via _sourceCache.AddOrUpdate\n    ...\n    _sourceCache.Connect()\n        // Sort Ascending on the OrderIndex property\n        .Sort(SortExpressionComparer<TestViewModel>.Ascending(t => t.OrderIndex))\n        .Filter(x => x.Id.ToString().EndsWith('1'))\n        // Bind to our ReadOnlyObservableCollection<T>\n        .Bind(out _testViewModels)\n        // Subscribe for changes\n        .Subscribe();\n}\n")),(0,r.kt)("h2",{id:"binding"},"Binding"),(0,r.kt)("p",null,"Now that the ",(0,r.kt)("inlineCode",{parentName:"p"},"_sourceCache")," is created and populated and the ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadOnlyObservableCollection<T>")," is created and bound we can go into our view and bind exactly the way we normally would with an ",(0,r.kt)("inlineCode",{parentName:"p"},"ObservableCollection<T>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'    <Design.DataContext>\n        <vm:MainWindowViewModel/>\n    </Design.DataContext>\n\n    <TreeView Items="{Binding TestViewModels}">\n        <TreeView.DataTemplates>\n            !-- DataTemplate Definitions --\x3e\n        </TreeView.DataTemplates> \n    </TreeView>\n')))}u.isMDXComponent=!0}}]);