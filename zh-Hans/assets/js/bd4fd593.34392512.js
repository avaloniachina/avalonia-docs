"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[60275],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||l;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:o,i[1]=r;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},40284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const l={description:"TUTORIALS - Music Store App"},i="Mock Search",r={unversionedId:"tutorials/music-store-app/mock-search",id:"tutorials/music-store-app/mock-search",title:"Mock Search",description:"TUTORIALS - Music Store App",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/tutorials/music-store-app/mock-search.md",sourceDirName:"tutorials/music-store-app",slug:"/tutorials/music-store-app/mock-search",permalink:"/avalonia-docs/zh-Hans/docs/next/tutorials/music-store-app/mock-search",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/tutorials/music-store-app/mock-search.md",tags:[],version:"current",frontMatter:{description:"TUTORIALS - Music Store App"},sidebar:"documentationSidebar",previous:{title:"Add Dialog Content",permalink:"/avalonia-docs/zh-Hans/docs/next/tutorials/music-store-app/add-content-to-dialog"},next:{title:"Album View",permalink:"/avalonia-docs/zh-Hans/docs/next/tutorials/music-store-app/album-view"}},s={},c=[{value:"Reactive View Model   ",id:"reactive-view-model---",level:2},{value:"Data Binding",id:"data-binding",level:2},{value:"Album Search and Selection",id:"album-search-and-selection",level:2},{value:"Mock Data",id:"mock-data",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...l}=e;return(0,o.kt)(u,(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mock-search"},"Mock Search"),(0,o.kt)("p",null,"On this page you will create the view model for the album search feature, and then bind it to the controls on the new user control. At this stage you will use a mock of the search itself, so that you can concentrate on the view model."),(0,o.kt)("h2",{id:"reactive-view-model---"},"Reactive View Model  "," "),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"ReactiveUI")," framework provides ",(0,o.kt)("em",{parentName:"p"},"Avalonia UI")," with support for its data binding system. You add this support by deriving your view model from the ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactiveObject")," class, via the ",(0,o.kt)("inlineCode",{parentName:"p"},"ViewModelBase")," class that was added to your project at the start, by the solution template."," "),(0,o.kt)("p",null,"Follow this procedure to derive from the ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactiveObject")," class:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Locate and open the ",(0,o.kt)("strong",{parentName:"li"},"MusicStoreViewModel.cs")," file."),(0,o.kt)("li",{parentName:"ul"},"Add the code to derive the class from ",(0,o.kt)("inlineCode",{parentName:"li"},"ViewModelBase"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace Avalonia.MusicStore.ViewModels\n{\n    public class MusicStoreViewModel : ViewModelBase\n    {\n    }\n}\n")),(0,o.kt)("p",null,"This adds the important extension method ",(0,o.kt)("inlineCode",{parentName:"p"},"RaiseAndSetIfChanged")," to your view model, and will allow you to give the properties there the ability to notify changes to the view.  "," "),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To review the concepts behind the MVVM pattern and notification, see ",(0,o.kt)("a",{parentName:"p",href:"../../concepts/the-mvvm-pattern/"},"here"),"."," ")),(0,o.kt)("p",null,"At this stage, you will create two properties for the search application logic:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A text string that is the search criteria,"," "),(0,o.kt)("li",{parentName:"ul"},"A Boolean that indicates whether the search is busy."," ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add the following code to implement the above properties:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"using ReactiveUI;\n\nnamespace AvaloniaApplication11.ViewModels\n{\n    public class MusicStoreViewModel : ViewModelBase\n    {\n        private string? _searchText;\n        private bool _isBusy;\n\n        public string? SearchText\n        {\n            get => _searchText;\n            set => this.RaiseAndSetIfChanged(ref _searchText, value);\n        }\n\n        public bool IsBusy\n        {\n            get => _isBusy;\n            set => this.RaiseAndSetIfChanged(ref _isBusy, value);\n        }\n\n    }\n}\n")),(0,o.kt)("p",null,"You can see that the properties have a normal public getter which returns the private value field; but the setter calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"RaiseAndSetIfChanged")," method - in order to implement the notification."),(0,o.kt)("h2",{id:"data-binding"},"Data Binding"),(0,o.kt)("p",null,"Next you will add a data binding to link the view to the view model. The text box will be bound to the search text, and whether the progress bar is visible to the user will  be bound to the Boolean."," "),(0,o.kt)("p",null,"Follow this procedure to add data binding to the view:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Locate and open the ",(0,o.kt)("strong",{parentName:"li"},"MusicStoreView.axaml")," file."),(0,o.kt)("li",{parentName:"ul"},"Add the binding expressions shown:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<DockPanel>\n  <StackPanel DockPanel.Dock="Top">\n    <TextBox Text="{Binding SearchText}" Watermark="Search for Albums...." />\n    <ProgressBar IsIndeterminate="True" IsVisible="{Binding IsBusy}" />\n  </StackPanel>\n  <Button Content="Buy Album"\n          DockPanel.Dock="Bottom"\n          HorizontalAlignment="Center" />\n  <ListBox/>\n</DockPanel>\n')),(0,o.kt)("h2",{id:"album-search-and-selection"},"Album Search and Selection"),(0,o.kt)("p",null,"Your next step is to create the music store view model properties needed to process albums. These are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a collection of album view models to represent the albums that the search might find,"," "),(0,o.kt)("li",{parentName:"ul"},"and a property to hold an album if the user selects one."," ")),(0,o.kt)("p",null,"Here you will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ObservableCollection")," - this is a collection is capable of notification, and it is provided by the .NET framework."),(0,o.kt)("p",null,"Follow this procedure to add the above properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Locate and open the ",(0,o.kt)("strong",{parentName:"li"},"MusicStoreViewModel.cs")," file."),(0,o.kt)("li",{parentName:"ul"},"Add the following code to the class:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"private AlbumViewModel? _selectedAlbum;\n\npublic ObservableCollection<AlbumViewModel> SearchResults { get; } = new();\n\npublic AlbumViewModel? SelectedAlbum\n{\n    get => _selectedAlbum;\n    set => this.RaiseAndSetIfChanged(ref _selectedAlbum, value);\n}\n")),(0,o.kt)("p",null,"Next to bind these properties to the list box in the view, follow this procedure:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Locate and open the ",(0,o.kt)("strong",{parentName:"li"},"MusicStoreView.axaml")," file."),(0,o.kt)("li",{parentName:"ul"},"Add the binding expressions shown to the ",(0,o.kt)("inlineCode",{parentName:"li"},"<ListBox>")," element:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<ListBox Items="{Binding SearchResults}" SelectedItem="{Binding SelectedAlbum}" />\n')),(0,o.kt)("h2",{id:"mock-data"},"Mock Data"),(0,o.kt)("p",null,"Now, to test the app at this stage, you will add some mock data directly to the view model."," "),(0,o.kt)("p",null,"Follow this procedure:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Locate and open the ",(0,o.kt)("strong",{parentName:"li"},"MusicStoreViewModel.cs")," file again."),(0,o.kt)("li",{parentName:"ul"},"Add a constructor to the class, as shown:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public MusicStoreViewModel()\n{\n    SearchResults.Add(new AlbumViewModel());\n    SearchResults.Add(new AlbumViewModel());\n    SearchResults.Add(new AlbumViewModel());\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Debug")," to compile and run the project.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(82650).Z,width:"2658",height:"1456"})),(0,o.kt)("p",null,"This shows that the data binding from the list to the album collection in the view model is working, but the view is not graphical yet. On the next page you will develop the app further by replacing the text with graphical album tiles. "," "))}d.isMDXComponent=!0},82650:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/text-list-f7b40caf6c7c4243ba580bcea9e693f6.png"}}]);