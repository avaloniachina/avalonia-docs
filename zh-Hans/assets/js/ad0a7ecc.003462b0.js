"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[99862],{60452:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var s=t(85893),n=t(11151),o=t(70075);const i={info:"load-data-at-startup",title:"Load data at Startup"},r=void 0,d={id:"tutorials/music-store-app/load-data-at-startup",title:"Load data at Startup",description:"Loading Albums on Startup",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/tutorials/music-store-app/load-data-at-startup.md",sourceDirName:"tutorials/music-store-app",slug:"/tutorials/music-store-app/load-data-at-startup",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/tutorials/music-store-app/load-data-at-startup",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/tutorials/music-store-app/load-data-at-startup.md",tags:[],version:"0.10.x",frontMatter:{info:"load-data-at-startup",title:"Load data at Startup"},sidebar:"documentationSidebar",previous:{title:"Add Data Persistence",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/tutorials/music-store-app/add-data-persistence"},next:{title:"Summary",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/tutorials/music-store-app/summary"}},l={},c=[{value:"Loading Albums on Startup",id:"loading-albums-on-startup",level:2}];function u(e){const a={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h2,{id:"loading-albums-on-startup",children:"Loading Albums on Startup"}),"\n",(0,s.jsx)(a.p,{children:"Our backend code provides a nice way to load the users collection from disk."}),"\n",(0,s.jsxs)(a.p,{children:["Add a method to ",(0,s.jsx)(a.code,{children:"MainWindowViewModel.cs"})," like:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-csharp",children:"private async void LoadAlbums()\n{\n    var albums = (await Album.LoadCachedAsync()).Select(x => new AlbumViewModel(x));\n\n    foreach (var album in albums)\n    {\n        Albums.Add(album);\n    }\n\n    foreach (var album in Albums.ToList())\n    {\n        await album.LoadCover();\n    }\n}\n"})}),"\n",(0,s.jsx)(a.p,{children:"Register it in the constructor of the same class like:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-csharp",children:"RxApp.MainThreadScheduler.Schedule(LoadAlbums);\n"})}),"\n",(0,s.jsxs)(a.p,{children:['If you get an error about "Cannot resolve method Schedule", you may be missing the line ',(0,s.jsx)(a.code,{children:"using System.Reactive.Concurrency;"})," in ",(0,s.jsx)(a.code,{children:"MainWindowViewModel"}),"'s using section."]}),"\n",(0,s.jsxs)(a.p,{children:["As you can see it firstly uses the business logic apis to load the list of ",(0,s.jsx)(a.code,{children:"Albums"}),". It then transforms each one into an ",(0,s.jsx)(a.code,{children:"AlbumViewModel"}),". After this we add each ",(0,s.jsx)(a.code,{children:"AlbumViewModel"})," instance to the ",(0,s.jsx)(a.code,{children:"ObservableCollection"})," of ",(0,s.jsx)(a.code,{children:"Albums"}),", this will instantly update the UI."]}),"\n",(0,s.jsxs)(a.p,{children:["Note we then re-iterate over the ",(0,s.jsx)(a.code,{children:"Albums"})," and asynchronously load each cover. Note that we do this after adding all the albums to the list, as its more important to quickly show the user all the albums available and then load the images."]}),"\n",(0,s.jsx)("img",{className:"center",src:o.Z,alt:""})]})}function p(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},70075:(e,a,t)=>{t.d(a,{Z:()=>s});const s=t.p+"assets/images/image-20210310184202271-cc304d5487698305ef09b8c740f75069.png"},11151:(e,a,t)=>{t.d(a,{Z:()=>r,a:()=>i});var s=t(67294);const n={},o=s.createContext(n);function i(e){const a=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:a},e.children)}}}]);