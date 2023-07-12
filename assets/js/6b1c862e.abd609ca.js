"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[68903],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,y=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(y,r(r({ref:t},p),{},{components:n})):a.createElement(y,r({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const i={id:"add-and-layout-controls",title:"Add and Layout Controls"},r=void 0,l={unversionedId:"tutorials/music-store-app/add-and-layout-controls",id:"version-0.10.x/tutorials/music-store-app/add-and-layout-controls",title:"Add and Layout Controls",description:"Add and Layout some Controls",source:"@site/versioned_docs/version-0.10.x/tutorials/music-store-app/add-and-layout-controls.md",sourceDirName:"tutorials/music-store-app",slug:"/tutorials/music-store-app/add-and-layout-controls",permalink:"/avalonia-docs/docs/tutorials/music-store-app/add-and-layout-controls",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/tutorials/music-store-app/add-and-layout-controls.md",tags:[],version:"0.10.x",frontMatter:{id:"add-and-layout-controls",title:"Add and Layout Controls"},sidebar:"documentationSidebar",previous:{title:"Creating a Modern looking Window",permalink:"/avalonia-docs/docs/tutorials/music-store-app/creating-a-modern-looking-window"},next:{title:"Opening a Dialog",permalink:"/avalonia-docs/docs/tutorials/music-store-app/opening-a-dialog"}},s={},d=[{value:"Add and Layout some Controls",id:"add-and-layout-some-controls",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"add-and-layout-some-controls"},"Add and Layout some Controls"),(0,o.kt)("p",null,"Let's start by adding a ",(0,o.kt)("inlineCode",{parentName:"p"},"Button")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"MainWindow"),". The button will allow the ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," to purchase music in order to add to their collection."),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"MainWindow.axaml")," change the code as follows, adding a Button inside the Panel."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<Panel>\n    <ExperimentalAcrylicBorder IsHitTestVisible="False">\n        <ExperimentalAcrylicBorder.Material>\n            <ExperimentalAcrylicMaterial\n                 BackgroundSource="Digger"\n                 TintColor="Black"\n                 TintOpacity="1"\n                 MaterialOpacity="0.65" />\n        </ExperimentalAcrylicBorder.Material>\n     </ExperimentalAcrylicBorder>\n\n     <Button Content="Buy Music" Command="{Binding BuyMusicCommand}"/>\n</Panel>\n')),(0,o.kt)("p",null,"Notice that we have set the ",(0,o.kt)("inlineCode",{parentName:"p"},"Content")," property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Button")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Buy Music"),", and we also set a property called ",(0,o.kt)("inlineCode",{parentName:"p"},"Command")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"{Binding BuyMusicCommand}"),"."),(0,o.kt)("p",null,"If you remember earlier in the section about MVVM we discussed how ",(0,o.kt)("inlineCode",{parentName:"p"},"Views")," use ",(0,o.kt)("inlineCode",{parentName:"p"},"Bindings")," to talk to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ViewModel"),"."),(0,o.kt)("p",null,"This ",(0,o.kt)("inlineCode",{parentName:"p"},"Binding Expression")," is saying, when the button is ",(0,o.kt)("inlineCode",{parentName:"p"},"clicked"),", then ",(0,o.kt)("inlineCode",{parentName:"p"},"execute")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"command")," called ",(0,o.kt)("inlineCode",{parentName:"p"},"BuyMusicCommand")," on the ViewModel."),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"MainWindowViewModel.cs")," and add the following code (the ",(0,o.kt)("inlineCode",{parentName:"p"},"ICommand")," Interface requires ",(0,o.kt)("inlineCode",{parentName:"p"},"System.Windows.Input")," but you'll need the additional namespaces, specified at the top, later on in the tutorial):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Collections.ObjectModel;\nusing System.Linq;\nusing System.Reactive.Concurrency;\nusing System.Reactive.Linq;\nusing System.Windows.Input;\nusing ReactiveUI;\n\nnamespace Avalonia.MusicStore.ViewModels\n\npublic class MainWindowViewModel : ViewModelBase\n    {\n        public MainWindowViewModel()\n        {\n            BuyMusicCommand = ReactiveCommand.Create(() =>\n            {\n                // Code here will be executed when the button is clicked.\n            });\n        }\n\n        public ICommand BuyMusicCommand { get; }\n    }\n")),(0,o.kt)("p",null,"Pressing the ",(0,o.kt)("inlineCode",{parentName:"p"},"Debug Button")," again to run the program we can see we have a button and when clicked setting a breakpoint inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"BuyMusicCommand")," code we can see that the code is executed when it's hit."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"/img/tutorials/music-store-app/add-and-layout-controls/buy-button.png",alt:"Buy Button"})),(0,o.kt)("p",null,"Let's position the button to the top right of the screen and make it look a bit nicer."),(0,o.kt)("p",null,"Place the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Button>")," element inside a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"<Panel>")," element."),(0,o.kt)("p",null,"The simplest way to control the layout of a control is with the ",(0,o.kt)("inlineCode",{parentName:"p"},"HorizontalAlignment"),"and ",(0,o.kt)("inlineCode",{parentName:"p"},"VerticalAlignment")," properties."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<Panel>\n  <Button Content="Buy Music" Margin="40" Command="{Binding BuyMusicCommand}" HorizontalAlignment="Right" VerticalAlignment="Top" />\n</Panel>\n')),(0,o.kt)("p",null,"We also add a ",(0,o.kt)("inlineCode",{parentName:"p"},"Margin")," of 40 to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Button")," so that the button is not right at the edge of the Window."),(0,o.kt)("p",null,"You may prefer to have an icon or image instead of text inside your button. The are a few ways to do this, let's grab a store icon from ",(0,o.kt)("a",{parentName:"p",href:"https://avaloniaui.github.io/icons.html"},"Avalonia - Fluent Icons")),(0,o.kt)("p",null,"Scroll through this page and find an icon you like, then simply copy the code provided."),(0,o.kt)("p",null,"Find the name, in this case ",(0,o.kt)("inlineCode",{parentName:"p"},"store_microsoft_regular"),"."),(0,o.kt)("p",null,"There should be some code similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<StreamGeometry x:Key="store_microsoft_regular">M11.5 9.5V13H8V9.5H11.5Z M11.5 17.5V14H8V17.5H11.5Z M16 9.5V13H12.5V9.5H16Z M16 17.5V14H12.5V17.5H16Z M8 6V3.75C8 2.7835 8.7835 2 9.75 2H14.25C15.2165 2 16 2.7835 16 3.75V6H21.25C21.6642 6 22 6.33579 22 6.75V18.25C22 19.7688 20.7688 21 19.25 21H4.75C3.23122 21 2 19.7688 2 18.25V6.75C2 6.33579 2.33579 6 2.75 6H8ZM9.5 3.75V6H14.5V3.75C14.5 3.61193 14.3881 3.5 14.25 3.5H9.75C9.61193 3.5 9.5 3.61193 9.5 3.75ZM3.5 18.25C3.5 18.9404 4.05964 19.5 4.75 19.5H19.25C19.9404 19.5 20.5 18.9404 20.5 18.25V7.5H3.5V18.25Z</StreamGeometry>\n')),(0,o.kt)("p",null,"Let's create a file just for Icons."),(0,o.kt)("p",null,"In Rider right click on the project and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Add")," \u2192 ",(0,o.kt)("inlineCode",{parentName:"p"},"Avalonia Styles")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"/img/tutorials/music-store-app/add-and-layout-controls/add-styles.png",alt:"Add Styles"})),(0,o.kt)("p",null,"Enter the name ",(0,o.kt)("inlineCode",{parentName:"p"},"Icons")," when prompted and press ",(0,o.kt)("inlineCode",{parentName:"p"},"Enter"),"."),(0,o.kt)("p",null,"A new ",(0,o.kt)("inlineCode",{parentName:"p"},"xaml")," file will be created that we can put styles or icons inside."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<Styles xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">\n    <Design.PreviewWith>\n        <Border Padding="20">\n            \x3c!-- Add Controls for Previewer Here --\x3e\n        </Border>\n    </Design.PreviewWith>\n\n    \x3c!-- Add Styles Here --\x3e\n</Styles>\n')),(0,o.kt)("p",null,"Add your Icon code inside wrapped in a ",(0,o.kt)("inlineCode",{parentName:"p"},"Style")," element as a resource like so."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<Styles xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">\n    <Design.PreviewWith>\n        <Border Padding="20">\n            \x3c!-- Add Controls for Previewer Here --\x3e\n        </Border>\n    </Design.PreviewWith>\n\n    \x3c!-- Add Styles Here --\x3e\n    <Style>\n        <Style.Resources>\n            <StreamGeometry x:Key="store_microsoft_regular">M11.5 9.5V13H8V9.5H11.5Z M11.5 17.5V14H8V17.5H11.5Z M16 9.5V13H12.5V9.5H16Z M16 17.5V14H12.5V17.5H16Z M8 6V3.75C8 2.7835 8.7835 2 9.75 2H14.25C15.2165 2 16 2.7835 16 3.75V6H21.25C21.6642 6 22 6.33579 22 6.75V18.25C22 19.7688 20.7688 21 19.25 21H4.75C3.23122 21 2 19.7688 2 18.25V6.75C2 6.33579 2.33579 6 2.75 6H8ZM9.5 3.75V6H14.5V3.75C14.5 3.61193 14.3881 3.5 14.25 3.5H9.75C9.61193 3.5 9.5 3.61193 9.5 3.75ZM3.5 18.25C3.5 18.9404 4.05964 19.5 4.75 19.5H19.25C19.9404 19.5 20.5 18.9404 20.5 18.25V7.5H3.5V18.25Z</StreamGeometry>\n        </Style.Resources>\n    </Style>\n</Styles>\n')),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"App.axaml")," and add a ",(0,o.kt)("inlineCode",{parentName:"p"},"StyleInclude")," so that the ",(0,o.kt)("inlineCode",{parentName:"p"},"Icons.axaml"),"can be loaded."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<Application.Styles>\n    <FluentTheme Mode="Dark"/>\n    <StyleInclude Source="avares://Avalonia.MusicStore/Icons.axaml" />\n</Application.Styles>\n')),(0,o.kt)("p",null,"Now build the application so that the Icons are available in the previewer."),(0,o.kt)("p",null,"Return to ",(0,o.kt)("inlineCode",{parentName:"p"},"MainWindow.axaml"),", we can add the Icon to the Button like so..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<Button Margin="40" HorizontalAlignment="Right" VerticalAlignment="Top" Command="{Binding BuyMusicCommand}">\n    <PathIcon Data="{StaticResource store_microsoft_regular}" />\n</Button>\n')),(0,o.kt)("p",null,"Running the application we now have a nice button."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"/img/tutorials/music-store-app/add-and-layout-controls/pretty-button.png",alt:"Pretty Button"})))}u.isMDXComponent=!0}}]);