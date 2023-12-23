"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[748],{51578:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var o=t(85893),s=t(11151),i=t(3015);const a={id:"add-items-to-users-collection",title:"Add Items to User Collection"},l=void 0,c={id:"tutorials/music-store-app/add-items-to-users-collection",title:"Add Items to User Collection",description:"Adding Albums to the Users Collection",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-0.10.x/tutorials/music-store-app/add-items-to-users-collection.md",sourceDirName:"tutorials/music-store-app",slug:"/tutorials/music-store-app/add-items-to-users-collection",permalink:"/avalonia-docs/ru/docs/0.10.x/tutorials/music-store-app/add-items-to-users-collection",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/ru/docusaurus-plugin-content-docs/version-0.10.x/tutorials/music-store-app/add-items-to-users-collection.md",tags:[],version:"0.10.x",frontMatter:{id:"add-items-to-users-collection",title:"Add Items to User Collection"},sidebar:"documentationSidebar",previous:{title:"Displaying Images",permalink:"/avalonia-docs/ru/docs/0.10.x/tutorials/music-store-app/displaying-images"},next:{title:"Add Data Persistence",permalink:"/avalonia-docs/ru/docs/0.10.x/tutorials/music-store-app/add-data-persistence"}},r={},d=[{value:"Adding Albums to the Users Collection",id:"adding-albums-to-the-users-collection",level:2}];function u(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"adding-albums-to-the-users-collection",children:"Adding Albums to the Users Collection"}),"\n",(0,o.jsx)(n.p,{children:"Ok so now the user can find albums to purchase, it would be nice if the user could see which albums are in their collection. To do this we can add a similar UI to the MainWindow."}),"\n",(0,o.jsxs)(n.p,{children:["Modify the ",(0,o.jsx)(n.code,{children:"MainWindow.axaml"})," so that it places the existing ",(0,o.jsx)(n.code,{children:"Button"})," inside a panel. We can then add a ",(0,o.jsx)(n.code,{children:"TextBlock"})," that we can show when the user has no music, to prompt them to buy some."]}),"\n",(0,o.jsxs)(n.p,{children:["We can then use an ",(0,o.jsx)(n.code,{children:"ItemsControl"})," instead of a ",(0,o.jsx)(n.code,{children:"ListBox"})," as we did before. An ",(0,o.jsx)(n.code,{children:"ItemsControl"})," is the exact same as a ",(0,o.jsx)(n.code,{children:"ListBox"})," except it doesn't allow the user to select anything."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-markup",children:'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:vm="using:Avalonia.MusicStore.ViewModels"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        xmlns:local="clr-namespace:Avalonia.MusicStore.Views"\n        mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n        x:Class="Avalonia.MusicStore.Views.MainWindow"\n        Icon="/Assets/avalonia-logo.ico"\n        Title="Avalonia.MusicStore"\n        TransparencyLevelHint="AcrylicBlur"\n        Background="Transparent"\n        ExtendClientAreaToDecorationsHint="True"\n        WindowStartupLocation="CenterScreen">\n\n    <Design.DataContext>\n        <vm:MainWindowViewModel />\n    </Design.DataContext>\n\n    <Panel>\n        <ExperimentalAcrylicBorder IsHitTestVisible="False">\n            <ExperimentalAcrylicBorder.Material>\n                <ExperimentalAcrylicMaterial\n                    BackgroundSource="Digger"\n                    TintColor="Black"\n                    TintOpacity="1"\n                    MaterialOpacity="0.65" />\n            </ExperimentalAcrylicBorder.Material>\n        </ExperimentalAcrylicBorder>\n\n        <Panel Margin="40">\n            <Button HorizontalAlignment="Right" VerticalAlignment="Top" Command="{Binding BuyMusicCommand}">\n                <PathIcon Data="{StaticResource store_microsoft_regular}" />\n            </Button>\n\n            <TextBlock IsVisible="{Binding CollectionEmpty}" Text="Its lonely in here. Purchase some music to get your collection started." HorizontalAlignment="Center" VerticalAlignment="Center" />\n\n            <ItemsControl Margin="0 40 0 0" Items="{Binding Albums}">\n                <ItemsControl.ItemsPanel>\n                    <ItemsPanelTemplate>\n                        <WrapPanel />\n                    </ItemsPanelTemplate>\n                </ItemsControl.ItemsPanel>\n\n                <ItemsControl.ItemTemplate>\n                    <DataTemplate>\n                        <local:AlbumView Margin="0 0 20 20" />\n                    </DataTemplate>\n                </ItemsControl.ItemTemplate>\n            </ItemsControl>\n        </Panel>\n    </Panel>\n</Window>\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Just like in ",(0,o.jsx)(n.code,{children:"MusicStoreWindow.axaml"})," we have to add ",(0,o.jsx)(n.code,{children:'xmlns:local="clr-namespace:Avalonia.MusicStore.Views"'})," to the ",(0,o.jsx)(n.code,{children:"Window"})," properties in order to use our custom control."]}),"\n",(0,o.jsxs)(n.p,{children:["Now open ",(0,o.jsx)(n.code,{children:"MainWindowViewModel"})," and add the following properties."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"private bool _collectionEmpty;\n\npublic bool CollectionEmpty\n{\n    get => _collectionEmpty;\n    set => this.RaiseAndSetIfChanged(ref _collectionEmpty, value);\n}\n\npublic ObservableCollection<AlbumViewModel> Albums { get; } = new();\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Notice again we use an ",(0,o.jsx)(n.code,{children:"ObservableCollection"})," for the ",(0,o.jsx)(n.code,{children:"Albums"})," property, and we add a simple ",(0,o.jsx)(n.code,{children:"CollectionEmpty"})," property to tell us when the users music collection is empty."]}),"\n",(0,o.jsxs)(n.p,{children:["In order to have the ",(0,o.jsx)(n.code,{children:"CollectionEmpty"})," property updated we can add the following code to the constructor."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"this.WhenAnyValue(x => x.Albums.Count)\n    .Subscribe(x => CollectionEmpty = x == 0);\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then in the constructor we can modify the BuyMusicCommand so that it adds the purchased Album to the list of ",(0,o.jsx)(n.code,{children:"Albums"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"BuyMusicCommand = ReactiveCommand.CreateFromTask(async () =>\n{\n    var store = new MusicStoreViewModel();\n\n    var result = await ShowDialog.Handle(store);\n\n    if (result != null)\n    {\n        Albums.Add(result);\n    }\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Notice we check the result for ",(0,o.jsx)(n.code,{children:"null"}),", this is because the ",(0,o.jsx)(n.code,{children:"user"})," may have cancelled the dialog without selecting anything, in which case nothing should be added. If the dialog returns a result then we simply add it to the list of Albums."]}),"\n",(0,o.jsx)(n.p,{children:"Lets run the program and see if it works."}),"\n",(0,o.jsx)("img",{className:"center",src:i.Z,alt:""}),"\n",(0,o.jsx)(n.p,{children:"For the finishing touch we simply need to add persistence to the application."})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},3015:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/image-20210310175949319-be5b284800f9b0b04ecda94a33a44ddc.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var o=t(67294);const s={},i=o.createContext(s);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);