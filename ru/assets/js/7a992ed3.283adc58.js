"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[28151],{22960:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var o=i(85893),t=i(11151),s=i(87582),a=i(15016);const l={id:"opening-a-dialog",title:"Opening a Dialog"},c=void 0,d={id:"tutorials/music-store-app/opening-a-dialog",title:"Opening a Dialog",description:"Opening a Dialog",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-0.10.x/tutorials/music-store-app/opening-a-dialog.md",sourceDirName:"tutorials/music-store-app",slug:"/tutorials/music-store-app/opening-a-dialog",permalink:"/avalonia-docs/ru/docs/0.10.x/tutorials/music-store-app/opening-a-dialog",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/ru/docusaurus-plugin-content-docs/version-0.10.x/tutorials/music-store-app/opening-a-dialog.md",tags:[],version:"0.10.x",frontMatter:{id:"opening-a-dialog",title:"Opening a Dialog"},sidebar:"documentationSidebar",previous:{title:"Add and Layout Controls",permalink:"/avalonia-docs/ru/docs/0.10.x/tutorials/music-store-app/add-and-layout-controls"},next:{title:"Add Content to Dialog",permalink:"/avalonia-docs/ru/docs/0.10.x/tutorials/music-store-app/add-content-to-dialog"}},r={},h=[{value:"Opening a Dialog",id:"opening-a-dialog",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"opening-a-dialog",children:"Opening a Dialog"}),"\n",(0,o.jsx)(n.p,{children:"Opening a dialog is an advanced topic, if you are very new to Avalonia, try not to get too stuck on this section, you may want to just copy in the code and move on. Then come back once you have a better understanding of some of the basics."}),"\n",(0,o.jsxs)(n.p,{children:["In this section we shall make it so that clicking the Store Button opens a ",(0,o.jsx)(n.code,{children:"modal dialog"})," where the user can search for albums to buy."]}),"\n",(0,o.jsxs)(n.p,{children:["First we need to add a Window to the project, right click on the ",(0,o.jsx)(n.code,{children:"Views"})," folder and select ",(0,o.jsx)(n.code,{children:"Add"})," \u2192 ",(0,o.jsx)(n.code,{children:"Avalonia Window"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["When prompted name this MusicStoreWindow and press the ",(0,o.jsx)(n.code,{children:"Enter"})," key."]}),"\n",(0,o.jsx)("img",{className:"center",src:s.Z,alt:"Add Window"}),"\n",(0,o.jsx)(n.p,{children:"This will add the following code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-markup",children:'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n        x:Class="Avalonia.MusicStore.Views.MusicStoreWindow"\n        Title="MusicStoreWindow">\n    Welcome to Avalonia!\n</Window>\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Change this code as follows to enable the Acrylic and extended client area so the Window will look like our ",(0,o.jsx)(n.code,{children:"MainWindow"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-markup",children:'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n        x:Class="Avalonia.MusicStore.Views.MusicStoreWindow"\n        Title="MusicStoreWindow"\n        TransparencyLevelHint="AcrylicBlur"\n        ExtendClientAreaToDecorationsHint="True">\n    <Panel>\n        <ExperimentalAcrylicBorder IsHitTestVisible="False">\n            <ExperimentalAcrylicBorder.Material>\n                <ExperimentalAcrylicMaterial\n                    BackgroundSource="Digger"\n                    TintColor="Black"\n                    TintOpacity="1"\n                    MaterialOpacity="0.65" />\n            </ExperimentalAcrylicBorder.Material>\n        </ExperimentalAcrylicBorder>\n\n        <Panel Margin="40">\n\n        </Panel>\n    </Panel>\n</Window>\n'})}),"\n",(0,o.jsx)(n.p,{children:"Now lets see how we can open this Window."}),"\n",(0,o.jsxs)(n.p,{children:["Avalonia comes with the ",(0,o.jsx)(n.a,{href:"https://www.reactiveui.net/",children:"ReactiveUI - An advanced, composable, reactive model-view-viewmodel framework"}),". Other MVVM frameworks are available and you can work without one if you wish."]}),"\n",(0,o.jsx)(n.p,{children:"ReactiveUI makes it very easy to get started and provides a lot of functionality out of the box."}),"\n",(0,o.jsxs)(n.p,{children:["In order that we can open the dialog from the ViewModel, we will use what is called an ",(0,o.jsx)(n.code,{children:"interaction"})," (",(0,o.jsx)(n.a,{href:"https://www.reactiveui.net/docs/handbook/interactions/",children:"ReactiveUI - Interactions"}),")"]}),"\n",(0,o.jsxs)(n.p,{children:["Firstly right click on your ViewModel folder and ",(0,o.jsx)(n.code,{children:"Add"})," \u2192 ",(0,o.jsx)(n.code,{children:"Class / Interface"})," the following class names:"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"MusicStoreViewModel"}),", ",(0,o.jsx)(n.code,{children:"AlbumViewModel"})]}),"\n",(0,o.jsx)(n.p,{children:"we will leave the code as it is for now."}),"\n",(0,o.jsxs)(n.p,{children:["Now open ",(0,o.jsx)(n.code,{children:"MainWindowViewModel.cs"})," and add the following code:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"public Interaction<MusicStoreViewModel, AlbumViewModel?> ShowDialog { get; }\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The constructor will also change so that it instantiates the ",(0,o.jsx)(n.code,{children:"ShowDialog"})," interaction. Notice that the ",(0,o.jsx)(n.code,{children:"System.Reactive.Linq"})," namespace is added to the top and the BuyMusicCommand is changed to use ",(0,o.jsx)(n.code,{children:"CreateFromTask"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"using System;\nusing System.Collections.Generic;\nusing System.Reactive.Linq;\nusing System.Text;\nusing System.Windows.Input;\nusing ReactiveUI;\n\nnamespace Avalonia.MusicStore.ViewModels\n{\n    public class MainWindowViewModel : ViewModelBase\n    {\n        public MainWindowViewModel()\n        {\n            ShowDialog = new Interaction<MusicStoreViewModel, AlbumViewModel?>();\n\n            BuyMusicCommand = ReactiveCommand.CreateFromTask(async () =>\n            {\n                var store = new MusicStoreViewModel();\n\n                var result = await ShowDialog.Handle(store);\n            });\n        }\n\n        public ICommand BuyMusicCommand { get; }\n\n        public Interaction<MusicStoreViewModel, AlbumViewModel?> ShowDialog { get; }\n    }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:'This still wont do much because some plumbing code is required in the so called "code behind".'}),"\n",(0,o.jsxs)(n.p,{children:["Open ",(0,o.jsx)(n.code,{children:"MainWindow.axaml.cs"})," you may need to expand the ",(0,o.jsx)(n.code,{children:"MainWindow.axaml"})," file in to see this file."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Make the ",(0,o.jsx)(n.code,{children:"MainWindow"})," class inherit ",(0,o.jsx)(n.code,{children:"ReactiveWindow<MainWindowViewModel>"})," instead of just ",(0,o.jsx)(n.code,{children:"Window"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"This allows ReactiveUI to help us out a little bit. It also shows that this View knows about its ViewModel, this is allowed. Check the MVVM section above."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Add a ",(0,o.jsx)(n.code,{children:"DoShowDialogAsync"})," method like so:"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"private async Task DoShowDialogAsync(InteractionContext<MusicStoreViewModel, AlbumViewModel?> interaction)\n{\n     var dialog = new MusicStoreWindow();\n     dialog.DataContext = interaction.Input;\n\n     var result = await dialog.ShowDialog<AlbumViewModel?>(this);\n     interaction.SetOutput(result);\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This method creates the MusicStoreWindow, it sets its ",(0,o.jsx)(n.code,{children:"DataContext"})," to interaction.Input, which is the instance of the ",(0,o.jsx)(n.code,{children:"MusicStoreViewModel"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["It then calls ",(0,o.jsx)(n.code,{children:"await dialog.ShowDialog<AlbumViewModel?>(this)"})," on the dialog, passing ",(0,o.jsx)(n.code,{children:"this"})," as an argument, showing that the ",(0,o.jsx)(n.code,{children:"MainWindow"})," currently represented by ",(0,o.jsx)(n.code,{children:"this"})," pointer will be the ",(0,o.jsx)(n.code,{children:"owner"})," or ",(0,o.jsx)(n.code,{children:"parent"})," window."]}),"\n",(0,o.jsx)(n.p,{children:"The code will stay awaiting asynchronously until the viewmodel closes the dialog and sets a result on the interaction."}),"\n",(0,o.jsxs)(n.p,{children:["Once the dialog has closed, it will return the result, which will be of type ",(0,o.jsx)(n.code,{children:"AlbumViewModel"})," or ",(0,o.jsx)(n.code,{children:"null"})," if the dialog is cancelled."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"interaction.SetOutput (result)"})," is then called. This causes the interaction to end, and the program will return to our ",(0,o.jsx)(n.code,{children:"MainWindowViewModel"})," where we left of at the call to ",(0,o.jsx)(n.code,{children:"var result = await ShowDialog.Handle(store);"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Add the following ",(0,o.jsx)(n.code,{children:"WhenActivated"})," call to the Windows constructor."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"this.WhenActivated(d => d(ViewModel!.ShowDialog.RegisterHandler(DoShowDialogAsync)));\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"d"})," is an ",(0,o.jsx)(n.code,{children:"Action"})," that takes a ",(0,o.jsx)(n.code,{children:"disposable"}),", this means that ReactiveUI will clean up any subscriptions when this View is not on the screen for us."]}),"\n",(0,o.jsxs)(n.p,{children:["Our entire ",(0,o.jsx)(n.code,{children:"MainWindow.xaml.cs"})," should now look like:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"using System.Threading.Tasks;\nusing Avalonia;\nusing Avalonia.Controls;\nusing Avalonia.Markup.Xaml;\nusing Avalonia.MusicStore.ViewModels;\nusing Avalonia.ReactiveUI;\nusing ReactiveUI;\n\nnamespace Avalonia.MusicStore.Views\n{\n    public partial class MainWindow : ReactiveWindow<MainWindowViewModel>\n    {\n        public MainWindow()\n        {\n            InitializeComponent();\n            this.WhenActivated(d => d(ViewModel!.ShowDialog.RegisterHandler(DoShowDialogAsync)));\n        }\n\n        private async Task DoShowDialogAsync(InteractionContext<MusicStoreViewModel, AlbumViewModel?> interaction)\n        {\n            var dialog = new MusicStoreWindow();\n            dialog.DataContext = interaction.Input;\n\n            var result = await dialog.ShowDialog<AlbumViewModel?>(this);\n            interaction.SetOutput(result);\n        }\n    }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now open ",(0,o.jsx)(n.code,{children:"MainWindow.axaml"})," and set the property ",(0,o.jsx)(n.code,{children:'WindowStartupLocation="CenterScreen"'}),"on the ",(0,o.jsx)(n.code,{children:"<Window>"})," element."]}),"\n",(0,o.jsxs)(n.p,{children:["Open ",(0,o.jsx)(n.code,{children:"MusicStoreWindow.axaml"})," and set ",(0,o.jsx)(n.code,{children:'WindowStartupLocation="CenterOwner"'})," on the ",(0,o.jsx)(n.code,{children:"<Window>"})," element."]}),"\n",(0,o.jsxs)(n.p,{children:["These properties mean that the ",(0,o.jsx)(n.code,{children:"MainWindow"})," will be positioned in the center of the users monitor when the program loads, and that the dialog window will be positioned in the center of the ",(0,o.jsx)(n.code,{children:"MainWindow"})," that owns it."]}),"\n",(0,o.jsxs)(n.p,{children:["Also set ",(0,o.jsx)(n.code,{children:"Width"})," and ",(0,o.jsx)(n.code,{children:"Height"})," properties of the ",(0,o.jsx)(n.code,{children:"MusicStoreWindows"})," ",(0,o.jsx)(n.code,{children:"<Window>"})," element to 1000 and 550 respectively."]}),"\n",(0,o.jsx)(n.p,{children:"Now run the application and click the Store button."}),"\n",(0,o.jsx)("img",{className:"center",src:a.Z,alt:"Dialog opened"}),"\n",(0,o.jsx)(n.p,{children:"As you can see the dialog window is opened perfectly centered inside the MainWindow."})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},87582:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/add-window-a2a520bf9bfef8e3144d15a36f604bdf.png"},15016:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/dialog-opened-b156cc3067a7c7353e592f5f075c41a3.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>a});var o=i(67294);const t={},s=o.createContext(t);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);