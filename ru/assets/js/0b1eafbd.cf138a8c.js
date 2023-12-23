"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[10674],{92930:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=i(85893),o=i(11151);const s={description:"TUTORIALS - Music Store App"},l="Dialog Return",a={id:"tutorials/music-store-app/return-from-dialog",title:"Dialog Return",description:"TUTORIALS - Music Store App",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/tutorials/music-store-app/return-from-dialog.md",sourceDirName:"tutorials/music-store-app",slug:"/tutorials/music-store-app/return-from-dialog",permalink:"/avalonia-docs/ru/docs/tutorials/music-store-app/return-from-dialog",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/ru/docusaurus-plugin-content-docs/current/tutorials/music-store-app/return-from-dialog.md",tags:[],version:"current",frontMatter:{description:"TUTORIALS - Music Store App"},sidebar:"documentationSidebar",previous:{title:"Displaying Images",permalink:"/avalonia-docs/ru/docs/tutorials/music-store-app/displaying-images"},next:{title:"Add Items to the User's Collection",permalink:"/avalonia-docs/ru/docs/tutorials/music-store-app/add-items-to-users-collection"}},c={},d=[{value:"Buy Album Command",id:"buy-album-command",level:2},{value:"Button Data Binding",id:"button-data-binding",level:2},{value:"Close the Dialog",id:"close-the-dialog",level:2}];function r(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"dialog-return",children:"Dialog Return"}),"\n",(0,t.jsx)(n.p,{children:"On the this page you add code to return a selected album from the search dialog to the main window."}),"\n",(0,t.jsx)(n.h2,{id:"buy-album-command",children:"Buy Album Command"}),"\n",(0,t.jsxs)(n.p,{children:["The first step here is for you to add a reactive command to the music store view model. You will bind this to the ",(0,t.jsx)(n.strong,{children:"Buy Album"})," button on the music store view."]}),"\n",(0,t.jsx)(n.p,{children:"Follow this procedure to add the reactive command:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Stop the app if it is running."}),"\n",(0,t.jsxs)(n.li,{children:["Locate and open the ",(0,t.jsx)(n.strong,{children:"MusicStoreViewModel.cs"})," file."]}),"\n",(0,t.jsx)(n.li,{children:"Add the reactive command declaration, as shown:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public ReactiveCommand<Unit, AlbumViewModel?> BuyMusicCommand { get; }\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Add code to the constructor to initialize the reactive command, as shown:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public MusicStoreViewModel()\n{\n    BuyMusicCommand = ReactiveCommand.Create(() =>\n    {\n         return SelectedAlbum;\n    });\n    \n    ...\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Notice you are using ",(0,t.jsx)(n.code,{children:"ReactiveCommand"})," here. This is provided by the ",(0,t.jsx)(n.em,{children:"ReactiveUI"})," framework to implement some of the MVVM interactions. Specifically, it will allow us to pass an argument of class ",(0,t.jsx)(n.code,{children:"AlbumViewModel"})," back to the main window view model, when the button is clicked."]}),"\n",(0,t.jsx)(n.h2,{id:"button-data-binding",children:"Button Data Binding"}),"\n",(0,t.jsxs)(n.p,{children:["Your next step is bind the ",(0,t.jsx)(n.strong,{children:"Buy Album"})," button to the reactive command in the music store view model, follow this procedure:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Locate and open the ",(0,t.jsx)(n.strong,{children:"MusicStoreView .axaml"})," file."]}),"\n",(0,t.jsxs)(n.li,{children:["Add the data binding ",(0,t.jsx)(n.code,{children:'Command="{Binding BuyMusicCommand}"'})," to the button element."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"close-the-dialog",children:"Close the Dialog"}),"\n",(0,t.jsxs)(n.p,{children:["In this step, you will add some window management so that the dialog closes when the user clicks the ",(0,t.jsx)(n.strong,{children:"Buy Album"})," button. This is needed in addition to the data binding you just added."]}),"\n",(0,t.jsxs)(n.p,{children:["As you saw during coding for the dialog open, you implement window management in the code-behind for a window, and use features of the ",(0,t.jsx)(n.code,{children:"ReactiveWindow"})," from the ",(0,t.jsx)(n.em,{children:"ReactiveUI"})," framework."]}),"\n",(0,t.jsx)(n.p,{children:"To add code to close the dialog, follow this procedure:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Locate and open the ",(0,t.jsx)(n.strong,{children:"MusicStoreWindow.axaml.cs"})," file."]}),"\n",(0,t.jsxs)(n.li,{children:["Add a reference to the system ",(0,t.jsx)(n.code,{children:"using System;"})]}),"\n",(0,t.jsxs)(n.li,{children:["Change the base class so the view inherits from ",(0,t.jsx)(n.code,{children:"ReactiveWindow<MusicStoreViewModel>"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Then add the following line to the end of the constructor:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"this.WhenActivated(action => action(ViewModel!.BuyMusicCommand.Subscribe(Close)));\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"ReactiveUI"})," ",(0,t.jsx)(n.code,{children:"WhenActivated"})," method defines what happens when the window is activated (becomes visible on the screen). The lambda expression will be called, and it is passed an action that is disposable, so that it can be unsubscribed when the window is no longer active."]}),"\n",(0,t.jsx)(n.p,{children:"Your music store window code-behind should now look like this."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"using Avalonia.ReactiveUI;\nusing AvaloniaApplication11.ViewModels;\nusing ReactiveUI;\nusing System;\n\nnamespace Avalonia.MusicStore.Views\n{\n    public partial class MusicStoreWindow : ReactiveWindow<MusicStoreViewModel>\n    {\n        public MusicStoreWindow()\n        {\n            InitializeComponent();\n            this.WhenActivated(d => d(ViewModel!.BuyMusicCommand.Subscribe(Close)));\n        }\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Debug"})," to compile and run the project."]}),"\n",(0,t.jsx)(n.li,{children:"Click the icon button."}),"\n",(0,t.jsx)(n.li,{children:"Type some search text."}),"\n",(0,t.jsx)(n.li,{children:"Click an album to select it."}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Buy Album"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You will see the dialog close, but nothing happens in the main window! On the next page you will learn how to add the selected album to a collection in the main window."})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>l});var t=i(67294);const o={},s=t.createContext(o);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);