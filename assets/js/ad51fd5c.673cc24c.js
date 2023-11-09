"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[70260],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),u=i,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return t?a.createElement(g,r(r({ref:n},p),{},{components:t})):a.createElement(g,r({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},53449:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=t(87462),i=(t(67294),t(3905));const o=t.p+"assets/images/dark-mode-preview-c1eb3109100addd4273557157eb0a391.png",r=t.p+"assets/images/acrylic-material-e0ee8d16e19727376d76067239bb3d91.png",l=t.p+"assets/images/full-acrylic-window-203ce4cf0c65d807c63c7817abaf7328.png",s={info:"creating-a-modern-looking-window",title:"Creating a Modern looking Window"},c=void 0,p={unversionedId:"tutorials/music-store-app/creating-a-modern-looking-window",id:"version-0.10.x/tutorials/music-store-app/creating-a-modern-looking-window",title:"Creating a Modern looking Window",description:"Use Dark Mode and Add a little Acrylic",source:"@site/versioned_docs/version-0.10.x/tutorials/music-store-app/creating-a-modern-looking-window.md",sourceDirName:"tutorials/music-store-app",slug:"/tutorials/music-store-app/creating-a-modern-looking-window",permalink:"/avalonia-docs/docs/tutorials/music-store-app/creating-a-modern-looking-window",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/tutorials/music-store-app/creating-a-modern-looking-window.md",tags:[],version:"0.10.x",frontMatter:{info:"creating-a-modern-looking-window",title:"Creating a Modern looking Window"},sidebar:"documentationSidebar",previous:{title:"Create the Project",permalink:"/avalonia-docs/docs/tutorials/music-store-app/creating-the-project"},next:{title:"Add and Layout Controls",permalink:"/avalonia-docs/docs/tutorials/music-store-app/add-and-layout-controls"}},m={},d=[{value:"Use Dark Mode and Add a little Acrylic",id:"use-dark-mode-and-add-a-little-acrylic",level:2}],u={toc:d},g="wrapper";function h(e){let{components:n,...t}=e;return(0,i.kt)(g,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"use-dark-mode-and-add-a-little-acrylic"},"Use Dark Mode and Add a little Acrylic"),(0,i.kt)("p",null,"Let's try and make this look a little more modern by applying ",(0,i.kt)("inlineCode",{parentName:"p"},"Dark")," mode and some ",(0,i.kt)("inlineCode",{parentName:"p"},"Acrylic")," styling to the Window."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open App.axaml"),(0,i.kt)("p",{parentName:"li"},"Change the FluentTheme Mode from Default to Dark."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'<Application xmlns="https://github.com/avaloniaui"\n             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n             x:Class="Avolonia.MusicStore.App"\n             xmlns:local="using:Avolonia.MusicStore"\n             RequestedThemeVariant="Dark">\n             \x3c!-- "Default" ThemeVariant follows system theme variant. "Dark" or "Light" are other available options. --\x3e\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open ",(0,i.kt)("inlineCode",{parentName:"p"},"MainWindow.axaml")," notice that it's still showing the Light mode version in the previewer."),(0,i.kt)("p",{parentName:"li"},"This is because the previewer actually runs your application in a special mode.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Using the menu click ",(0,i.kt)("inlineCode",{parentName:"p"},"Build")," \u2192 ",(0,i.kt)("inlineCode",{parentName:"p"},"Build Startup Project")),(0,i.kt)("p",{parentName:"li"},"Notice that the preview now changes to the dark mode."),(0,i.kt)("p",{parentName:"li"},"The previewer knows about changes you make to the file your editing, but it doesn't know about changes in other files. This is why you need to build the project if another file was changed."))),(0,i.kt)("img",{className:"center",src:o,alt:""}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"After where it says ",(0,i.kt)("inlineCode",{parentName:"li"},'Title="Avalonia.MusicStore"')," add the following code:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:vm="using:Avalonia.MusicStore.ViewModels"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n        x:Class="Avalonia.MusicStore.Views.MainWindow"\n        Icon="/Assets/avalonia-logo.ico"\n        Title="Avalonia.MusicStore"\n\n        TransparencyLevelHint="AcrylicBlur"\n        Background="Transparent">\n')),(0,i.kt)("p",null,"This will make the Window Transparent and apply a Blur."),(0,i.kt)("p",null,"To apply acrylic to the window, that we can tint and customize for a modern look, replace the ",(0,i.kt)("inlineCode",{parentName:"p"},"<TextBlock>")," with the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'   <Window xmlns="https://github.com/avaloniaui"\n           xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n           xmlns:vm="using:Avalonia.MusicStore.ViewModels"\n           xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n           xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n           mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n           x:Class="Avalonia.MusicStore.Views.MainWindow"\n           Icon="/Assets/avalonia-logo.ico"\n           Title="Avalonia.MusicStore"\n           TransparencyLevelHint="AcrylicBlur"\n           Background="Transparent">\n\n       <Design.DataContext>\n           <vm:MainWindowViewModel />\n       </Design.DataContext>\n\n       <Panel>\n           <ExperimentalAcrylicBorder IsHitTestVisible="False">\n               <ExperimentalAcrylicBorder.Material>\n                   <ExperimentalAcrylicMaterial\n                       BackgroundSource="Digger"\n                       TintColor="Black"\n                       TintOpacity="1"\n                       MaterialOpacity="0.65" />\n               </ExperimentalAcrylicBorder.Material>\n           </ExperimentalAcrylicBorder>\n       </Panel>\n   </Window>\n')),(0,i.kt)("p",null,"Now click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Debug")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Button")," to run the application again."),(0,i.kt)("p",null,"Notice we have a nice acrylic window effect. Shame about the titlebar, though. Let's see how we can make that blend in a bit more."),(0,i.kt)("img",{className:"center",src:r,alt:""}),(0,i.kt)("p",null,"*Note, Linux users can not yet take advantage of this due to limitations of X11. The code will run and the window will still work on Linux, but the full effect will not be realised."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"It is possible to have Avalonia render into the ",(0,i.kt)("inlineCode",{parentName:"p"},"titlebar"),", allowing us to create a more blended look. Modern web browsers tend to render tabs into the titlebar with this technique."),(0,i.kt)("p",{parentName:"li"},"This works by extending the ",(0,i.kt)("inlineCode",{parentName:"p"},"Windows")," client area into the ",(0,i.kt)("inlineCode",{parentName:"p"},"non-client")," area."),(0,i.kt)("p",{parentName:"li"},"To enable this mode on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Window")," element set the ",(0,i.kt)("inlineCode",{parentName:"p"},"ExtendClientAreaToDecorationsHint")," property to ",(0,i.kt)("inlineCode",{parentName:"p"},"True"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'   <Window xmlns="https://github.com/avaloniaui"\n           xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n           xmlns:vm="using:Avalonia.MusicStore.ViewModels"\n           xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n           xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n           mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n           x:Class="Avalonia.MusicStore.Views.MainWindow"\n           Icon="/Assets/avalonia-logo.ico"\n           Title="Avalonia.MusicStore"\n           TransparencyLevelHint="AcrylicBlur"\n           Background="Transparent"\n\n           ExtendClientAreaToDecorationsHint="True">\n')),(0,i.kt)("p",null,"Press the ",(0,i.kt)("inlineCode",{parentName:"p"},"Debug")," button again to run."),(0,i.kt)("img",{className:"center",src:l,alt:"Full acrylic window"}),(0,i.kt)("p",null,"Perfect, a modern looking Window, Avalonia is able to render every pixel."))}h.isMDXComponent=!0}}]);