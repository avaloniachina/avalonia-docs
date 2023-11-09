"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[45417],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=l,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:l,r[1]=i;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(87462),l=(n(67294),n(3905));const o=n.p+"assets/images/image-20210310175949319-4d2dee80e9478dbba9cca55502cc8f0c.png",r={description:"TUTORIALS - Music Store App"},i="Add Items to the User's Collection",s={unversionedId:"tutorials/music-store-app/add-items-to-users-collection",id:"tutorials/music-store-app/add-items-to-users-collection",title:"Add Items to the User's Collection",description:"TUTORIALS - Music Store App",source:"@site/docs/tutorials/music-store-app/add-items-to-users-collection.md",sourceDirName:"tutorials/music-store-app",slug:"/tutorials/music-store-app/add-items-to-users-collection",permalink:"/avalonia-docs/docs/next/tutorials/music-store-app/add-items-to-users-collection",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/tutorials/music-store-app/add-items-to-users-collection.md",tags:[],version:"current",frontMatter:{description:"TUTORIALS - Music Store App"},sidebar:"documentationSidebar",previous:{title:"Dialog Return",permalink:"/avalonia-docs/docs/next/tutorials/music-store-app/return-from-dialog"},next:{title:"Add Data Persistence",permalink:"/avalonia-docs/docs/next/tutorials/music-store-app/add-data-persistence"}},c={},u=[{value:"Observable Collection",id:"observable-collection",level:2},{value:"Process the Dialog Result",id:"process-the-dialog-result",level:2},{value:"Main Window View",id:"main-window-view",level:2}],p={toc:u},m="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"add-items-to-the-users-collection"},"Add Items to the User's Collection"),(0,l.kt)("p",null,"On this page you will implement a collection of albums that the user has selected using the search dialog and the ",(0,l.kt)("strong",{parentName:"p"},"Buy Album")," button, and display them in the main window."),(0,l.kt)("h2",{id:"observable-collection"},"Observable Collection"),(0,l.kt)("p",null,"Your first step here is to add an observable collection to the main window view model. This will hold the albums that the user has selected using the search dialog."),(0,l.kt)("p",null,"Follow this procedure:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Stop the app if it is running."),(0,l.kt)("li",{parentName:"ul"},"Locate and open the ",(0,l.kt)("strong",{parentName:"li"},"MainWindowViewModel.cs")," file."),(0,l.kt)("li",{parentName:"ul"},"Add an observable collection, as shown:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public ObservableCollection<AlbumViewModel> Albums { get; } = new();\n")),(0,l.kt)("h2",{id:"process-the-dialog-result"},"Process the Dialog Result"),(0,l.kt)("p",null,"Your next step is to alter the buy music reactive command so that it adds the dialog return object (an ",(0,l.kt)("inlineCode",{parentName:"p"},"AlbumViewModel"),") to the observable collection. Follow this procedure:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Alter the code that initializes the reactive command, as shown:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"BuyMusicCommand = ReactiveCommand.CreateFromTask(async () =>\n{\n    var store = new MusicStoreViewModel();\n    var result = await ShowDialog.Handle(store);\n    if (result != null)\n    {\n        Albums.Add(result);\n    }\n});\n")),(0,l.kt)("h2",{id:"main-window-view"},"Main Window View"),(0,l.kt)("p",null,"Next you will add XAML to the main window view to display the items in the observable collection. Again you will use a ",(0,l.kt)("strong",{parentName:"p"},"data template"),", this time inside an ",(0,l.kt)("inlineCode",{parentName:"p"},"ItemsControl"),". The items control is actually  the base class for controls that display multiple items (like the list box), so some of this will already be familiar."," "),(0,l.kt)("p",null,"To add the items control and its data template, follow this procedure:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Locate and open the ",(0,l.kt)("strong",{parentName:"li"},"MainWindow.axaml")," file."),(0,l.kt)("li",{parentName:"ul"},"Add the following namespace declaration to the ",(0,l.kt)("inlineCode",{parentName:"li"},"<Window>")," element:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'xmlns:views="clr-namespace:Avalonia.MusicStore.Views"\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Under the button element, add the XAML as shown:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<ItemsControl Margin="0 40 0 0" ItemsSource="{Binding Albums}">\n  <ItemsControl.ItemsPanel>\n    <ItemsPanelTemplate>\n      <WrapPanel />\n    </ItemsPanelTemplate>\n  </ItemsControl.ItemsPanel>\n\n  <ItemsControl.ItemTemplate>\n    <DataTemplate>\n      <views:AlbumView Margin="0 0 20 20" />\n    </DataTemplate>\n  </ItemsControl.ItemTemplate>\n</ItemsControl>\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Debug")," to compile and run the project."),(0,l.kt)("li",{parentName:"ul"},"Click the icon button."),(0,l.kt)("li",{parentName:"ul"},"Type some search text."),(0,l.kt)("li",{parentName:"ul"},"Click an album to select it."),(0,l.kt)("li",{parentName:"ul"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Buy Album"),"."),(0,l.kt)("li",{parentName:"ul"},"Repeat another time.")),(0,l.kt)("p",null,(0,l.kt)("img",{className:"image-medium-zoom",src:o,alt:""})),(0,l.kt)("p",null,"You will see the user's album collection building as you search and select. However, if you stop the app running and then start it again, the collection reverts to empty."," "),(0,l.kt)("p",null,"For the finishing touch, on the next page you will learn how to add some data persistence to the app."))}d.isMDXComponent=!0}}]);