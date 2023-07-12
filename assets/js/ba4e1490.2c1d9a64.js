"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[69482],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,b=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(b,i(i({ref:t},p),{},{components:a})):n.createElement(b,i({ref:t},p))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},33865:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={info:"load-data-at-startup",title:"Load data at Startup"},i=void 0,l={unversionedId:"tutorials/music-store-app/load-data-at-startup",id:"version-0.10.x/tutorials/music-store-app/load-data-at-startup",title:"Load data at Startup",description:"Loading Albums on Startup",source:"@site/versioned_docs/version-0.10.x/tutorials/music-store-app/load-data-at-startup.md",sourceDirName:"tutorials/music-store-app",slug:"/tutorials/music-store-app/load-data-at-startup",permalink:"/avalonia-docs/docs/tutorials/music-store-app/load-data-at-startup",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/tutorials/music-store-app/load-data-at-startup.md",tags:[],version:"0.10.x",frontMatter:{info:"load-data-at-startup",title:"Load data at Startup"},sidebar:"documentationSidebar",previous:{title:"Add Data Persistence",permalink:"/avalonia-docs/docs/tutorials/music-store-app/add-data-persistence"},next:{title:"Summary",permalink:"/avalonia-docs/docs/tutorials/music-store-app/summary"}},s={},u=[{value:"Loading Albums on Startup",id:"loading-albums-on-startup",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"loading-albums-on-startup"},"Loading Albums on Startup"),(0,r.kt)("p",null,"Our backend code provides a nice way to load the users collection from disk."),(0,r.kt)("p",null,"Add a method to ",(0,r.kt)("inlineCode",{parentName:"p"},"MainWindowViewModel.cs")," like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"private async void LoadAlbums()\n{\n    var albums = (await Album.LoadCachedAsync()).Select(x => new AlbumViewModel(x));\n\n    foreach (var album in albums)\n    {\n        Albums.Add(album);\n    }\n\n    foreach (var album in Albums.ToList())\n    {\n        await album.LoadCover();\n    }\n}\n")),(0,r.kt)("p",null,"Register it in the constructor of the same class like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"RxApp.MainThreadScheduler.Schedule(LoadAlbums);\n")),(0,r.kt)("p",null,'If you get an error about "Cannot resolve method Schedule", you may be missing the line ',(0,r.kt)("inlineCode",{parentName:"p"},"using System.Reactive.Concurrency;")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"MainWindowViewModel"),"'s using section."),(0,r.kt)("p",null,"As you can see it firstly uses the business logic apis to load the list of ",(0,r.kt)("inlineCode",{parentName:"p"},"Albums"),". It then transforms each one into an ",(0,r.kt)("inlineCode",{parentName:"p"},"AlbumViewModel"),". After this we add each ",(0,r.kt)("inlineCode",{parentName:"p"},"AlbumViewModel")," instance to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ObservableCollection")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"Albums"),", this will instantly update the UI."),(0,r.kt)("p",null,"Note we then re-iterate over the ",(0,r.kt)("inlineCode",{parentName:"p"},"Albums")," and asynchronously load each cover. Note that we do this after adding all the albums to the list, as its more important to quickly show the user all the albums available and then load the images."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"/img/tutorials/music-store-app/load-data-at-startup/image-20210310184202271.png"})))}d.isMDXComponent=!0}}]);