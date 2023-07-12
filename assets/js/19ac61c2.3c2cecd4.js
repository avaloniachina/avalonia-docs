"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[30433],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const i={id:"add-items-to-users-collection",title:"Add Items to User Collection"},r=void 0,l={unversionedId:"tutorials/music-store-app/add-items-to-users-collection",id:"version-0.10.x/tutorials/music-store-app/add-items-to-users-collection",title:"Add Items to User Collection",description:"Adding Albums to the Users Collection",source:"@site/versioned_docs/version-0.10.x/tutorials/music-store-app/add-items-to-users-collection.md",sourceDirName:"tutorials/music-store-app",slug:"/tutorials/music-store-app/add-items-to-users-collection",permalink:"/avalonia-docs/docs/tutorials/music-store-app/add-items-to-users-collection",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/tutorials/music-store-app/add-items-to-users-collection.md",tags:[],version:"0.10.x",frontMatter:{id:"add-items-to-users-collection",title:"Add Items to User Collection"},sidebar:"documentationSidebar",previous:{title:"Displaying Images",permalink:"/avalonia-docs/docs/tutorials/music-store-app/displaying-images"},next:{title:"Add Data Persistence",permalink:"/avalonia-docs/docs/tutorials/music-store-app/add-data-persistence"}},s={},c=[{value:"Adding Albums to the Users Collection",id:"adding-albums-to-the-users-collection",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"adding-albums-to-the-users-collection"},"Adding Albums to the Users Collection"),(0,a.kt)("p",null,"Ok so now the user can find albums to purchase, it would be nice if the user could see which albums are in their collection. To do this we can add a similar UI to the MainWindow."),(0,a.kt)("p",null,"Modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"MainWindow.axaml")," so that it places the existing ",(0,a.kt)("inlineCode",{parentName:"p"},"Button")," inside a panel. We can then add a ",(0,a.kt)("inlineCode",{parentName:"p"},"TextBlock")," that we can show when the user has no music, to prompt them to buy some."),(0,a.kt)("p",null,"We can then use an ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemsControl")," instead of a ",(0,a.kt)("inlineCode",{parentName:"p"},"ListBox")," as we did before. An ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemsControl")," is the exact same as a ",(0,a.kt)("inlineCode",{parentName:"p"},"ListBox")," except it doesn't allow the user to select anything."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:vm="using:Avalonia.MusicStore.ViewModels"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        xmlns:local="clr-namespace:Avalonia.MusicStore.Views"\n        mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n        x:Class="Avalonia.MusicStore.Views.MainWindow"\n        Icon="/Assets/avalonia-logo.ico"\n        Title="Avalonia.MusicStore"\n        TransparencyLevelHint="AcrylicBlur"\n        Background="Transparent"\n        ExtendClientAreaToDecorationsHint="True"\n        WindowStartupLocation="CenterScreen">\n\n    <Design.DataContext>\n        <vm:MainWindowViewModel />\n    </Design.DataContext>\n\n    <Panel>\n        <ExperimentalAcrylicBorder IsHitTestVisible="False">\n            <ExperimentalAcrylicBorder.Material>\n                <ExperimentalAcrylicMaterial\n                    BackgroundSource="Digger"\n                    TintColor="Black"\n                    TintOpacity="1"\n                    MaterialOpacity="0.65" />\n            </ExperimentalAcrylicBorder.Material>\n        </ExperimentalAcrylicBorder>\n\n        <Panel Margin="40">\n            <Button HorizontalAlignment="Right" VerticalAlignment="Top" Command="{Binding BuyMusicCommand}">\n                <PathIcon Data="{StaticResource store_microsoft_regular}" />\n            </Button>\n\n            <TextBlock IsVisible="{Binding CollectionEmpty}" Text="Its lonely in here. Purchase some music to get your collection started." HorizontalAlignment="Center" VerticalAlignment="Center" />\n\n            <ItemsControl Margin="0 40 0 0" Items="{Binding Albums}">\n                <ItemsControl.ItemsPanel>\n                    <ItemsPanelTemplate>\n                        <WrapPanel />\n                    </ItemsPanelTemplate>\n                </ItemsControl.ItemsPanel>\n\n                <ItemsControl.ItemTemplate>\n                    <DataTemplate>\n                        <local:AlbumView Margin="0 0 20 20" />\n                    </DataTemplate>\n                </ItemsControl.ItemTemplate>\n            </ItemsControl>\n        </Panel>\n    </Panel>\n</Window>\n')),(0,a.kt)("p",null,"Just like in ",(0,a.kt)("inlineCode",{parentName:"p"},"MusicStoreWindow.axaml")," we have to add ",(0,a.kt)("inlineCode",{parentName:"p"},'xmlns:local="clr-namespace:Avalonia.MusicStore.Views"')," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Window")," properties in order to use our custom control."),(0,a.kt)("p",null,"Now open ",(0,a.kt)("inlineCode",{parentName:"p"},"MainWindowViewModel")," and add the following properties."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"private bool _collectionEmpty;\n\npublic bool CollectionEmpty\n{\n    get => _collectionEmpty;\n    set => this.RaiseAndSetIfChanged(ref _collectionEmpty, value);\n}\n\npublic ObservableCollection<AlbumViewModel> Albums { get; } = new();\n")),(0,a.kt)("p",null,"Notice again we use an ",(0,a.kt)("inlineCode",{parentName:"p"},"ObservableCollection")," for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Albums")," property, and we add a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"CollectionEmpty")," property to tell us when the users music collection is empty."),(0,a.kt)("p",null,"In order to have the ",(0,a.kt)("inlineCode",{parentName:"p"},"CollectionEmpty")," property updated we can add the following code to the constructor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"this.WhenAnyValue(x => x.Albums.Count)\n    .Subscribe(x => CollectionEmpty = x == 0);\n")),(0,a.kt)("p",null,"Then in the constructor we can modify the BuyMusicCommand so that it adds the purchased Album to the list of ",(0,a.kt)("inlineCode",{parentName:"p"},"Albums"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"BuyMusicCommand = ReactiveCommand.CreateFromTask(async () =>\n{\n    var store = new MusicStoreViewModel();\n\n    var result = await ShowDialog.Handle(store);\n\n    if (result != null)\n    {\n        Albums.Add(result);\n    }\n});\n")),(0,a.kt)("p",null,"Notice we check the result for ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),", this is because the ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," may have cancelled the dialog without selecting anything, in which case nothing should be added. If the dialog returns a result then we simply add it to the list of Albums."),(0,a.kt)("p",null,"Lets run the program and see if it works."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/tutorials/music-store-app/add-items-to-users-collection/image-20210310175949319.png"})),(0,a.kt)("p",null,"For the finishing touch we simply need to add persistence to the application."))}d.isMDXComponent=!0}}]);