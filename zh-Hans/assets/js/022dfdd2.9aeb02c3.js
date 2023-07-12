"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[15342],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=l.createContext({}),p=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(a),h=n,d=c["".concat(s,".").concat(h)]||c[h]||m[h]||i;return a?l.createElement(d,o(o({ref:t},u),{},{components:a})):l.createElement(d,o({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:n,o[1]=r;for(var p=2;p<i;p++)o[p]=a[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}h.displayName="MDXCreateElement"},16397:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var l=a(87462),n=(a(67294),a(3905));const i={description:"TUTORIALS - Music Store App"},o="Album View",r={unversionedId:"tutorials/music-store-app/album-view",id:"tutorials/music-store-app/album-view",title:"Album View",description:"TUTORIALS - Music Store App",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/tutorials/music-store-app/album-view.md",sourceDirName:"tutorials/music-store-app",slug:"/tutorials/music-store-app/album-view",permalink:"/avalonia-docs/zh-Hans/docs/next/tutorials/music-store-app/album-view",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/tutorials/music-store-app/album-view.md",tags:[],version:"current",frontMatter:{description:"TUTORIALS - Music Store App"},sidebar:"documentationSidebar",previous:{title:"Mock Search",permalink:"/avalonia-docs/zh-Hans/docs/next/tutorials/music-store-app/mock-search"},next:{title:"Album Service",permalink:"/avalonia-docs/zh-Hans/docs/next/tutorials/music-store-app/searching-for-albums"}},s={},p=[{value:"Icon Resource",id:"icon-resource",level:2},{value:"Album View",id:"album-view-1",level:2},{value:"View Locator",id:"view-locator",level:2},{value:"List Items Panel Template",id:"list-items-panel-template",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,l.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"album-view"},"Album View"),(0,n.kt)("p",null,"On this page you will continue developing the search results list for the app by replacing the text currently shown with graphical album tiles."," "),(0,n.kt)("h2",{id:"icon-resource"},"Icon Resource"),(0,n.kt)("p",null,"The first step here is to add a resource for the 'music note' icon. You will use this to act as a placeholder icon for the album covers in the app - they will eventually be replaced by the downloaded album cover artwork. "," "),(0,n.kt)("p",null,"To add the music note icon resource, follow this procedure:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Stop the app if it is still running."),(0,n.kt)("li",{parentName:"ul"},"Navigate to the ",(0,n.kt)("em",{parentName:"li"},"Avalonia UI")," ",(0,n.kt)("em",{parentName:"li"},"GitHub")," to find the list of Fluent Icons at ",(0,n.kt)("a",{parentName:"li",href:"https://avaloniaui.github.io/icons.html"},"https://avaloniaui.github.io/icons.html")),(0,n.kt)("li",{parentName:"ul"},"Use your browser's text search to locate the name of the icon 'music","_","regular'. There should be some code similar to:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markup"},'<StreamGeometry x:Key="music_regular">M11.5,2.75 C11.5,2.22634895 12.0230228,1.86388952 12.5133347,2.04775015 L18.8913911,4.43943933 C20.1598961,4.91511241 21.0002742,6.1277638 21.0002742,7.48252202 L21.0002742,10.7513533 C21.0002742,11.2750044 20.4772513,11.6374638 19.9869395,11.4536032 L13,8.83332147 L13,17.5 C13,17.5545945 12.9941667,17.6078265 12.9830895,17.6591069 C12.9940859,17.7709636 13,17.884807 13,18 C13,20.2596863 10.7242052,22 8,22 C5.27579485,22 3,20.2596863 3,18 C3,15.7403137 5.27579485,14 8,14 C9.3521238,14 10.5937815,14.428727 11.5015337,15.1368931 L11.5,2.75 Z M8,15.5 C6.02978478,15.5 4.5,16.6698354 4.5,18 C4.5,19.3301646 6.02978478,20.5 8,20.5 C9.97021522,20.5 11.5,19.3301646 11.5,18 C11.5,16.6698354 9.97021522,15.5 8,15.5 Z M13,3.83223733 L13,7.23159672 L19.5002742,9.669116 L19.5002742,7.48252202 C19.5002742,6.75303682 19.0477629,6.10007069 18.3647217,5.84393903 L13,3.83223733 Z</StreamGeometry>\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Copy all of the code for the icon."),(0,n.kt)("li",{parentName:"ul"},"Locate and open the ",(0,n.kt)("strong",{parentName:"li"},"Icons.axaml")," file that you created earlier."),(0,n.kt)("li",{parentName:"ul"},"Paste the copied",(0,n.kt)("inlineCode",{parentName:"li"},"<StreamGeometry>")," element inside ",(0,n.kt)("inlineCode",{parentName:"li"},"<Style.Resources>")," element.")),(0,n.kt)("h2",{id:"album-view-1"},"Album View"),(0,n.kt)("p",null,"The next step is to create a graphical 'tile' view for an album. You will then cause this to be used instead of the text that currently shows for each album in the list."," "),(0,n.kt)("p",null,"To create the graphical 'tile' view, follow this procedure:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In the solution explorer, right-click the ",(0,n.kt)("strong",{parentName:"li"},"/Views")," folder and then click ",(0,n.kt)("strong",{parentName:"li"},"Add"),". "," "),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Avalonia User Control"),"."),(0,n.kt)("li",{parentName:"ul"},"When prompted for the name, type 'AlbumView'."),(0,n.kt)("li",{parentName:"ul"},"Press enter."),(0,n.kt)("li",{parentName:"ul"},"Add the attribute ",(0,n.kt)("inlineCode",{parentName:"li"},'Width="200"')," to the ",(0,n.kt)("inlineCode",{parentName:"li"},"<UserControl>")," element."),(0,n.kt)("li",{parentName:"ul"},"Alter the XAML for the user control's content zone as follows:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markup"},'<StackPanel Spacing="5" Width="200">\n    <Border CornerRadius="10" ClipToBounds="True">\n        <Panel Background="#7FFF22DD">\n            <Image Width="200" Stretch="Uniform" />\n            <Panel Height="200">\n                <PathIcon Height="75" Width="75" Data="{StaticResource music_regular}" />\n            </Panel>\n        </Panel>\n    </Border>    \n</StackPanel>\n')),(0,n.kt)("p",null,"The preview pane will now show the new tile view with the music note icon placed in the center."," "),(0,n.kt)("h2",{id:"view-locator"},"View Locator"),(0,n.kt)("p",null,"The album view model will eventually contain data for the name of an album, the artist, and its downloaded cover art, but at this stage you will continue to use just the placeholder music note icon. "," "),(0,n.kt)("p",null,"As you saw on the last page, at this point the album list currently just shows the (fully qualified) name of the album view model class."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"/img/gitbook-import/assets/image (6) (1) (3) (1).png",alt:""})),(0,n.kt)("p",null,"In this step you will be using the view locator class (",(0,n.kt)("strong",{parentName:"p"},"ViewLocator.cs")," file) that was added to the project by the solution template. This class was registered (by the solution template) as a data template at the highest level in the app in the ",(0,n.kt)("strong",{parentName:"p"},"App.axaml")," file. The data template registration looks like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'<Application ...\n             xmlns:local="using:Avalonia.MusicStore"\n             ... >\n    <Application.DataTemplates>\n        <local:ViewLocator/>\n    </Application.DataTemplates>\n    ...\n</Application>\n')),(0,n.kt)("p",null,"The view locator can therefore always be found by ",(0,n.kt)("em",{parentName:"p"},"Avalonia UI,")," when it searches for a data template."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"For more details about the ",(0,n.kt)("strong",{parentName:"p"},"data template")," concept, see ",(0,n.kt)("a",{parentName:"p",href:"../../concepts/templates/"},"here"),"."," ")),(0,n.kt)("p",null,"The view locator acts as a data template for a view model (in this case the album view model) under the conditions that:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the view model inherits from the ",(0,n.kt)("inlineCode",{parentName:"li"},"ViewModelBase")," class,"),(0,n.kt)("li",{parentName:"ul"},"and there is a view that exists with the same base name.")),(0,n.kt)("p",null,"The view ",(0,n.kt)("inlineCode",{parentName:"p"},"AlbumView")," and the view model ",(0,n.kt)("inlineCode",{parentName:"p"},"AlbumViewModel")," already have the same base name 'Album' and the view ",(0,n.kt)("inlineCode",{parentName:"p"},"AlbumView")," exists. So the only remaining condition for the view locator to work is that the view model has to inherit from the ",(0,n.kt)("inlineCode",{parentName:"p"},"ViewModelBase")," class."),(0,n.kt)("p",null,"Follow this procedure:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Locate and open the ",(0,n.kt)("strong",{parentName:"li"},"AlbumViewModel.cs")," file you created earlier."),(0,n.kt)("li",{parentName:"ul"},"Add the code for the class to inherit from ",(0,n.kt)("inlineCode",{parentName:"li"},"ViewModelBase")," as shown:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public class AlbumViewModel : ViewModelBase\n{        \n}\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Debug")," to compile and run the project."),(0,n.kt)("li",{parentName:"ul"},"Click the icon button.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(43632).Z,width:"2710",height:"1466"})),(0,n.kt)("p",null,"The view locator is finding the view ",(0,n.kt)("inlineCode",{parentName:"p"},"AlbumView")," to use as a data template for the list items."),(0,n.kt)("h2",{id:"list-items-panel-template"},"List Items Panel Template"),(0,n.kt)("p",null,"In this step you will tidy up the list display so that the album covers wrap around to fill all the space available."," "),(0,n.kt)("p",null,"A list box has a property that contains a template control for laying out the list items. By default this is a stack panel. To make the album covers wrap around to fill all the space, you can change the panel template to be a wrap panel."," "),(0,n.kt)("p",null,"You will also add some style attributes to the list box."," "),(0,n.kt)("p",null,"To tidy up the list, follow this procedure:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Stop the app if it is still running."),(0,n.kt)("li",{parentName:"ul"},"Locate and open the ",(0,n.kt)("strong",{parentName:"li"},"MusicStoreView.axaml")," file."),(0,n.kt)("li",{parentName:"ul"},"Expand the ",(0,n.kt)("inlineCode",{parentName:"li"},"<ListBox>")," element so that it has start and end tags."),(0,n.kt)("li",{parentName:"ul"},"Add the ",(0,n.kt)("inlineCode",{parentName:"li"},"<ListBox.ItemsPanel>")," XAML shown:"," ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markup"},'<ListBox Items="{Binding SearchResults}" SelectedItem="{Binding SelectedAlbum}"\n    Background="Transparent" Margin="0 20">\n    <ListBox.ItemsPanel>\n        <ItemsPanelTemplate>\n            <WrapPanel />\n        </ItemsPanelTemplate>\n    </ListBox.ItemsPanel>\n</ListBox>\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Debug")," to compile and run the project."),(0,n.kt)("li",{parentName:"ul"},"Click the icon button.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(17008).Z,width:"2568",height:"1396"})),(0,n.kt)("p",null,"On the next page, you will add some business logic in the form of a data service, so that you can get real album data from the search."," "))}m.isMDXComponent=!0},43632:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/image-20210310010932979-bd72932515e000cdcff8f8fdb83957ab.png"},17008:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/image-20210310011526700-e7f63952d740639100e1d7f3c17f07a0.png"}}]);