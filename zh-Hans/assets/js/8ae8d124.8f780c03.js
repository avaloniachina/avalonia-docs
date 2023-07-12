"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[68198],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),h=r,u=c["".concat(p,".").concat(h)]||c[h]||m[h]||i;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},29498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={id:"creating-the-project",title:"Create the Project"},o=void 0,l={unversionedId:"tutorials/music-store-app/creating-the-project",id:"version-0.10.x/tutorials/music-store-app/creating-the-project",title:"Create the Project",description:"Creating a New Project",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/tutorials/music-store-app/creating-the-project.md",sourceDirName:"tutorials/music-store-app",slug:"/tutorials/music-store-app/creating-the-project",permalink:"/avalonia-docs/zh-Hans/docs/tutorials/music-store-app/creating-the-project",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/tutorials/music-store-app/creating-the-project.md",tags:[],version:"0.10.x",frontMatter:{id:"creating-the-project",title:"Create the Project"},sidebar:"documentationSidebar",previous:{title:"Setup Development Environment",permalink:"/avalonia-docs/zh-Hans/docs/tutorials/music-store-app/setup-development-environment"},next:{title:"Creating a Modern looking Window",permalink:"/avalonia-docs/zh-Hans/docs/tutorials/music-store-app/creating-a-modern-looking-window"}},p={},s=[{value:"Creating a New Project",id:"creating-a-new-project",level:3},{value:"Compiling and Running the Project",id:"compiling-and-running-the-project",level:3}],d={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"creating-a-new-project"},"Creating a New Project"),(0,r.kt)("p",null,"From the Rider Welcome Screen, click on ",(0,r.kt)("inlineCode",{parentName:"p"},"New Solution"),". This will open a dialog with Project Types on the left and some input fields on the right."),(0,r.kt)("p",null,"At the bottom on the left hand side under the heading ",(0,r.kt)("inlineCode",{parentName:"p"},"Other")," you will see ",(0,r.kt)("inlineCode",{parentName:"p"},"Avalonia .NET Core MVVM App")," select it and then type ",(0,r.kt)("inlineCode",{parentName:"p"},"Avalonia.MusicStore")," as the ",(0,r.kt)("inlineCode",{parentName:"p"},"Solution Name"),". Everything else can be left as default."),(0,r.kt)("p",null,"Click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Create")," button."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"/img/tutorials/music-store-app/creating-the-project/CreateSolution.png"})),(0,r.kt)("p",null,"A new project will be created with the following structure."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"/img/tutorials/music-store-app/creating-the-project/project-structure.png"})),(0,r.kt)("p",null,"The folders are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Folder Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Assets"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contains any embedded assets that are compiled into the program. ",(0,r.kt)("inlineCode",{parentName:"td"},"Images"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Icons"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Fonts")," etc, anything that the UI might need to display,")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Models"),(0,r.kt)("td",{parentName:"tr",align:"left"},"This is an empty folder intended for code that is domain specific, non-ui code. Interaction with a database or web api, code to talk to a hardware device. Things like that.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ViewModels"),(0,r.kt)("td",{parentName:"tr",align:"left"},"This is a folder for all the ",(0,r.kt)("inlineCode",{parentName:"td"},"ViewModels")," of the project. Viewmodels should only contain UI logic. Button is enabled when the user has typed something. Open a dialog when the user clicks here, show an error if the user enters too high a number type of logic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Views"),(0,r.kt)("td",{parentName:"tr",align:"left"},"This is a folder for all the ",(0,r.kt)("inlineCode",{parentName:"td"},"Views")," of the project. Views are like HTML for native application, they describe the look and layout of your UI, but not the UI logic.")))),(0,r.kt)("p",null,"Some of the important files are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"File Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ViewModelBase.cs"),(0,r.kt)("td",{parentName:"tr",align:"left"},"This is a base class that all ViewModels should inherit. It implements the way the ViewModels signal changes to the Views to update the UI. ","(","google ",(0,r.kt)("inlineCode",{parentName:"td"},"INotifyPropertyChanged")," for more on that.",")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MainWindowViewModel.cs"),(0,r.kt)("td",{parentName:"tr",align:"left"},"This is the ViewModel for your ",(0,r.kt)("inlineCode",{parentName:"td"},"MainWindow"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MainWindow.axaml"),(0,r.kt)("td",{parentName:"tr",align:"left"},"This is the ",(0,r.kt)("inlineCode",{parentName:"td"},"xaml")," UI code that describes how the ",(0,r.kt)("inlineCode",{parentName:"td"},"MainWindow")," looks and its contents.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"App.axaml"),(0,r.kt)("td",{parentName:"tr",align:"left"},"This is a ",(0,r.kt)("inlineCode",{parentName:"td"},"xaml")," file that sets up the application, it chooses the theme the UI will use and declares the ",(0,r.kt)("inlineCode",{parentName:"td"},"ViewLocator")," ",(0,r.kt)("inlineCode",{parentName:"td"},"DataTemplate"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Program.cs"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Main")," method where the program starts and ",(0,r.kt)("inlineCode",{parentName:"td"},"Avalonia")," is configured and started.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ViewLocator.cs"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ViewLocator")," is a special ",(0,r.kt)("inlineCode",{parentName:"td"},"DataTemplate"),". When some ",(0,r.kt)("inlineCode",{parentName:"td"},"Data")," appears in the UI, it quickly looks to see if a ",(0,r.kt)("inlineCode",{parentName:"td"},"View")," exists for it. This is done by naming convention. If the datas ",(0,r.kt)("inlineCode",{parentName:"td"},"Type")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"MyDataViewModel")," then the ",(0,r.kt)("inlineCode",{parentName:"td"},"ViewLocator")," will use the ",(0,r.kt)("inlineCode",{parentName:"td"},"View")," named ",(0,r.kt)("inlineCode",{parentName:"td"},"MyDataView")," ","(","if it exists",")"," in that part of the UI. This is very powerful for list based controls ","(",(0,r.kt)("inlineCode",{parentName:"td"},"ItemsControl"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ListBox"),", etc",")"," and ",(0,r.kt)("inlineCode",{parentName:"td"},"ContentControl"),".")))),(0,r.kt)("h3",{id:"compiling-and-running-the-project"},"Compiling and Running the Project"),(0,r.kt)("p",null,"Press the debug button top right of the IDE to compile and run the project."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"/img/tutorials/music-store-app/creating-the-project/debug-button.png"})),(0,r.kt)("p",null,"This will show a Window that looks like:"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"/img/tutorials/music-store-app/creating-the-project/image-20210310192926578.png"})),(0,r.kt)("p",null,"A little plain but we now have a running application, and a blank canvas to start from."))}m.isMDXComponent=!0}}]);