"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[87486],{73393:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var o=t(85893),i=t(11151);const s={id:"return-from-dialog",title:"Return from Dialog"},a=void 0,d={id:"tutorials/music-store-app/return-from-dialog",title:"Return from Dialog",description:"Returning from the Dialog",source:"@site/versioned_docs/version-0.10.x/tutorials/music-store-app/return-from-dialog.md",sourceDirName:"tutorials/music-store-app",slug:"/tutorials/music-store-app/return-from-dialog",permalink:"/avalonia-docs/docs/0.10.x/tutorials/music-store-app/return-from-dialog",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/tutorials/music-store-app/return-from-dialog.md",tags:[],version:"0.10.x",frontMatter:{id:"return-from-dialog",title:"Return from Dialog"},sidebar:"documentationSidebar",previous:{title:"Add Content to Dialog",permalink:"/avalonia-docs/docs/0.10.x/tutorials/music-store-app/add-content-to-dialog"},next:{title:"Searching for Albums",permalink:"/avalonia-docs/docs/0.10.x/tutorials/music-store-app/searching-for-albums"}},r={},c=[{value:"Returning from the Dialog",id:"returning-from-the-dialog",level:2}];function l(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"returning-from-the-dialog",children:"Returning from the Dialog"}),"\n",(0,o.jsxs)(n.p,{children:["Now that the user can select one of our Albums, we need to be able to close the Dialog and return the result to the ",(0,o.jsx)(n.code,{children:"ViewModel"})," that called the dialog."]}),"\n",(0,o.jsxs)(n.p,{children:["Notice that our ",(0,o.jsx)(n.code,{children:"MusicStoreViewModel"})," has a ",(0,o.jsx)(n.code,{children:"SelectedAlbum"})," property that we added previously and that the ",(0,o.jsx)(n.code,{children:"ListBox"})," on the ",(0,o.jsx)(n.code,{children:"MusicStoreView"})," has its ",(0,o.jsx)(n.code,{children:"SelectedItem"})," property bound to this ",(0,o.jsx)(n.code,{children:"SelectedAlbum"})," property of the view model."]}),"\n",(0,o.jsx)(n.p,{children:"This means that when the user clicks to select an album, the listbox shows that it is selected by highlighting the item."}),"\n",(0,o.jsxs)(n.p,{children:["At the same time the ",(0,o.jsx)(n.code,{children:"SelectedAlbum"})," property will be kept in sync and set to the ",(0,o.jsx)(n.code,{children:"AlbumViewModel"})," instance that represents the ",(0,o.jsx)(n.code,{children:"SelectedItem"})," of the ",(0,o.jsx)(n.code,{children:"ListBox"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Button"})," of the ",(0,o.jsx)(n.code,{children:"MusicStoreView"})," has its ",(0,o.jsx)(n.code,{children:"Command"})," property bound to ",(0,o.jsx)(n.code,{children:"BuyMusicCommand"}),". This doesn't exist yet so lets add this to ",(0,o.jsx)(n.code,{children:"MusicStoreViewModel"})," with the following code."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"public ReactiveCommand<Unit, AlbumViewModel?> BuyMusicCommand { get; }\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Note we are using ",(0,o.jsx)(n.code,{children:"ReactiveCommand"})," this is where we are using ReactiveUI to provide some of the plumbing for us. Avalonia expects commands to be of type ",(0,o.jsx)(n.code,{children:"ICommand"})," and ",(0,o.jsx)(n.code,{children:"ReactiveCommand"})," implements this interface."]}),"\n",(0,o.jsxs)(n.p,{children:["Note that ",(0,o.jsx)(n.code,{children:"ReactiveCommand<TParam, TResult>"})," has some type arguments. Commands can take a parameter, however we do not need a parameter in this case, so we use ",(0,o.jsx)(n.code,{children:"Unit"})," which is kind of a dummy type, it contains no data. Reactive Commands can also return a result. This will be useful for returning the Album the user wants to buy."]}),"\n",(0,o.jsxs)(n.p,{children:["Now add the following lines to the constructor of ",(0,o.jsx)(n.code,{children:"MusicStoreViewModel"})," in order to instantiate the command and implement the code needed to return a result from the dialog:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"BuyMusicCommand = ReactiveCommand.Create(() =>\n{\n    return SelectedAlbum;\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Simply when the button is clicked, this code will execute, and return the value assigned to ",(0,o.jsx)(n.code,{children:"SelectedAlbum"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"So far so good, but how does the actual dialog get closed?"}),"\n",(0,o.jsxs)(n.p,{children:["To close the dialog, we need to open ",(0,o.jsx)(n.code,{children:"MusicStoreWindow.axaml.cs"})," and make a few changes."]}),"\n",(0,o.jsxs)(n.p,{children:["Firstly make it inherit ",(0,o.jsx)(n.code,{children:"ReactiveWindow<MusicStoreViewModel>"})," so that ReactiveUI can help us out."]}),"\n",(0,o.jsx)(n.p,{children:"Then add the following line to the end of the constructor."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"this.WhenActivated(d => d(ViewModel!.BuyMusicCommand.Subscribe(Close)));\n"})}),"\n",(0,o.jsx)(n.p,{children:"This line says when the Window is activated (becomes visible on the screen), the lambda expression will be called."}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"d"})," is an action that we can pass a disposable to, so things can be unsubscribed when the Window is no longer active."]}),"\n",(0,o.jsxs)(n.p,{children:["We pass to that a ",(0,o.jsx)(n.code,{children:"Subscription"})," to our ",(0,o.jsx)(n.code,{children:"ViewModel"}),"s ",(0,o.jsx)(n.code,{children:"BuyMusicCommand"}),". We subscribe it directly to the ",(0,o.jsx)(n.code,{children:"Window"}),"s ",(0,o.jsx)(n.code,{children:"Close"})," method. A ",(0,o.jsx)(n.code,{children:"using System;"})," directive is required for this step."]}),"\n",(0,o.jsxs)(n.p,{children:["This means the result of the ",(0,o.jsx)(n.code,{children:"BuyMusicCommand"})," will be passed to the ",(0,o.jsx)(n.code,{children:"Close"})," method. Causing the Window to close and its result to be returned from the ",(0,o.jsx)(n.code,{children:"ShowDialog"})," call we made in the ",(0,o.jsx)(n.code,{children:"MainWindow.xaml.cs"})," code."]}),"\n",(0,o.jsxs)(n.p,{children:["The entire ",(0,o.jsx)(n.code,{children:"MusicStoreWindow.xaml.cs"})," should now look like this."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"using Avalonia;\nusing Avalonia.Controls;\nusing Avalonia.Markup.Xaml;\nusing Avalonia.MusicStore.ViewModels;\nusing Avalonia.ReactiveUI;\nusing ReactiveUI;\nusing System;\n\nnamespace Avalonia.MusicStore.Views\n{\n    public partial class MusicStoreWindow : ReactiveWindow<MusicStoreViewModel>\n    {\n        public MusicStoreWindow()\n        {\n            InitializeComponent();\n            this.WhenActivated(d => d(ViewModel!.BuyMusicCommand.Subscribe(Close)));\n        }\n    }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you build and run the application we will now see that we can Select an Album by clicking on it, and pressing the Buy Music button will cause the dialog to close. The result will be returned to the ",(0,o.jsx)(n.code,{children:"MainWindowViewModel"})," inside"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"BuyMusicCommand = ReactiveCommand.CreateFromTask(async () =>\n{\n    var store = new MusicStoreViewModel();\n\n    var result = await ShowDialog.Handle(store);\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"Lets come back to handling the result later."}),"\n",(0,o.jsx)(n.p,{children:"For now, we need to get some real data into our application instead of the 3 dummy albums we have now."})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>a});var o=t(67294);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);