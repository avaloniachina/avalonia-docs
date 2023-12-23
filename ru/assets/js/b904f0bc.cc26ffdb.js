"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[5247],{34082:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=s(85893),o=s(11151),n=s(70075);const i={description:"TUTORIALS - Music Store App"},r="Load Data at Start-up",l={id:"tutorials/music-store-app/load-data-at-startup",title:"Load Data at Start-up",description:"TUTORIALS - Music Store App",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/tutorials/music-store-app/load-data-at-startup.md",sourceDirName:"tutorials/music-store-app",slug:"/tutorials/music-store-app/load-data-at-startup",permalink:"/avalonia-docs/ru/docs/tutorials/music-store-app/load-data-at-startup",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/ru/docusaurus-plugin-content-docs/current/tutorials/music-store-app/load-data-at-startup.md",tags:[],version:"current",frontMatter:{description:"TUTORIALS - Music Store App"},sidebar:"documentationSidebar",previous:{title:"Add Data Persistence",permalink:"/avalonia-docs/ru/docs/tutorials/music-store-app/add-data-persistence"},next:{title:"Conclusion",permalink:"/avalonia-docs/ru/docs/tutorials/music-store-app/summary"}},d={},c=[];function u(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"load-data-at-start-up",children:"Load Data at Start-up"}),"\n",(0,a.jsx)(t.p,{children:"On this page you will add code to load the user's album collection from disk when the app starts."}),"\n",(0,a.jsx)(t.p,{children:"You have already added code to the business service that can load both the files you will need from disk. All that remains for you to do, is to add some code to the main window view model to handle the start-up."}),"\n",(0,a.jsx)(t.p,{children:"Follow this procedure to add a method to load the user's album collection from disk:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Stop the app if it is running"}),"\n",(0,a.jsxs)(t.li,{children:["Locate and open the ",(0,a.jsx)(t.strong,{children:"MainWindowViewModel.cs"})," file."]}),"\n",(0,a.jsx)(t.li,{children:"Add the code as shown:"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-csharp",children:"private async void LoadAlbums()\n{\n    var albums = (await Album.LoadCachedAsync()).Select(x => new AlbumViewModel(x));\n\n    foreach (var album in albums)\n    {\n        Albums.Add(album);\n    }\n\n    foreach (var album in Albums.ToList())\n    {\n        await album.LoadCover();\n    }\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["As you can see this method uses the business service to load the list of albums from the disk cache. It then transforms each data model (",(0,a.jsx)(t.code,{children:"Album"})," class) into a view model (",(0,a.jsx)(t.code,{children:"AlbumViewModel"})," class). After this all the album view models are added to the observable collection - this will instantly update the UI with the text data for the albums."]}),"\n",(0,a.jsx)(t.p,{children:"You will notice that after the JSON album files are loaded, the second loop loads the cover art image files. This provides your user with visual feedback as quickly as possible (in the form of album tiles with text and the placeholder music note icon) about what albums are in the collection. The cover art is then loaded asynchronously. This ensures that the app remains responsive during the image loading process."}),"\n",(0,a.jsxs)(t.p,{children:["You next step is to schedule the ",(0,a.jsx)(t.code,{children:"LoadAlbum"})," method to run when the app starts."]}),"\n",(0,a.jsx)(t.p,{children:"To schedule the method on the main thread, follow this procedure:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Keep the ",(0,a.jsx)(t.strong,{children:"MainWindowViewModel.cs"})," file open."]}),"\n",(0,a.jsxs)(t.li,{children:["Add a reference to ",(0,a.jsx)(t.code,{children:"using System.Reactive.Concurrency;"})]}),"\n",(0,a.jsx)(t.li,{children:"Add this code to the class constructor:"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-csharp",children:"RxApp.MainThreadScheduler.Schedule(LoadAlbums);\n"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Click ",(0,a.jsx)(t.strong,{children:"Debug"})," to compile and run the project."]}),"\n"]}),"\n",(0,a.jsx)("p",{children:(0,a.jsx)("img",{className:"image-medium-zoom",src:n.Z,alt:""})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},70075:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/image-20210310184202271-cc304d5487698305ef09b8c740f75069.png"},11151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>i});var a=s(67294);const o={},n=a.createContext(o);function i(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);