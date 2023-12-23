"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[3622],{14546:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var t=i(85893),o=i(11151),r=i(89067),l=i(93214),a=i(81159);const s={description:"TUTORIALS - Music Store App"},c="Window Styling",d={id:"tutorials/music-store-app/creating-a-modern-looking-window",title:"Window Styling",description:"TUTORIALS - Music Store App",source:"@site/docs/tutorials/music-store-app/creating-a-modern-looking-window.md",sourceDirName:"tutorials/music-store-app",slug:"/tutorials/music-store-app/creating-a-modern-looking-window",permalink:"/avalonia-docs/docs/tutorials/music-store-app/creating-a-modern-looking-window",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/tutorials/music-store-app/creating-a-modern-looking-window.md",tags:[],version:"current",frontMatter:{description:"TUTORIALS - Music Store App"},sidebar:"documentationSidebar",previous:{title:"Create a New Project",permalink:"/avalonia-docs/docs/tutorials/music-store-app/creating-the-project"},next:{title:"Add and Layout Controls",permalink:"/avalonia-docs/docs/tutorials/music-store-app/add-and-layout-controls"}},h={},p=[{value:"Dark Mode",id:"dark-mode",level:2},{value:"Acrylic Blur",id:"acrylic-blur",level:2}];function u(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"window-styling",children:"Window Styling"}),"\n",(0,t.jsx)(n.p,{children:"On this page, you will make the main window look modern by applying a dark theme, and an acrylic blur to the window background."}),"\n",(0,t.jsx)(n.h2,{id:"dark-mode",children:"Dark Mode"}),"\n",(0,t.jsx)(n.p,{children:"Follow this procedure to style the main window in 'dark' mode:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Stop the app if it is still running."}),"\n",(0,t.jsxs)(n.li,{children:["Locate and open the file ",(0,t.jsx)(n.strong,{children:"App.axaml"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["In the XAML, change the ",(0,t.jsx)(n.code,{children:"RequestedThemeVariant"})," attribute in the ",(0,t.jsx)(n.code,{children:"<Application>"}),' element from "Default" to "Dark"']}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markup",children:'<Application ...\n    RequestedThemeVariant="Dark">\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Now locate and open the ",(0,t.jsx)(n.strong,{children:"MainWindow.axaml"})," file in the ",(0,t.jsx)(n.strong,{children:"/Views"})," folder."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Notice that the preview pane is still showing the window in 'light' mode. The application will require a rebuild for the new mode to show in the preview pane."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Build Startup Project"})," on the ",(0,t.jsx)(n.strong,{children:"Build"})," menu."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The preview pane now changes to the dark mode."}),"\n",(0,t.jsx)("p",{children:(0,t.jsx)("img",{className:"image-medium-zoom",src:r.Z,alt:""})}),"\n",(0,t.jsx)(n.h2,{id:"acrylic-blur",children:"Acrylic Blur"}),"\n",(0,t.jsx)(n.p,{children:"Follow this procedure to style the background of the main window with an acrylic blur:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Locate and open the ",(0,t.jsx)(n.strong,{children:"MainWindow.axaml"})," file in the ",(0,t.jsx)(n.strong,{children:"/Views"})," folder."]}),"\n",(0,t.jsxs)(n.li,{children:["Find the end of the opening tag of the ",(0,t.jsx)(n.code,{children:"<Window>"})," element."]}),"\n",(0,t.jsxs)(n.li,{children:["After the ",(0,t.jsx)(n.code,{children:'Title="Avalonia.MusicStore"'})," attribute, add two new attributes as follows:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markup",children:'<Window ...\n        Title="Avalonia.MusicStore"\n\n        TransparencyLevelHint="AcrylicBlur"\n        Background="Transparent">\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["To apply the acrylic effect to the whole window, replace the ",(0,t.jsx)(n.code,{children:"<TextBlock>"})," element in the content zone of the main window with the following XAML for a panel:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markup",children:'<Window ... >\n       <Panel>\n           <ExperimentalAcrylicBorder IsHitTestVisible="False">\n               <ExperimentalAcrylicBorder.Material>\n                   <ExperimentalAcrylicMaterial\n                       BackgroundSource="Digger"\n                       TintColor="Black"\n                       TintOpacity="1"\n                       MaterialOpacity="0.65" />\n               </ExperimentalAcrylicBorder.Material>\n           </ExperimentalAcrylicBorder>\n       </Panel>\n   </Window>\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Debug"})," (top right of the IDE) to compile and run the project."]}),"\n"]}),"\n",(0,t.jsx)("p",{children:(0,t.jsx)("img",{className:"image-medium-zoom",src:l.Z,alt:""})}),"\n",(0,t.jsx)(n.p,{children:"Notice that, as expected, the acrylic window effect covers the content zone of the main window. However the effect does not yet extend to the title bar."}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["Note that ",(0,t.jsx)(n.em,{children:"Linux"})," users can not yet take advantage of the following code due to limitations of the X11 version. The tutorial code will run and the window will still work on ",(0,t.jsx)(n.em,{children:"Linux"}),", but the full effect will not be realised."]})}),"\n",(0,t.jsx)(n.p,{children:"Follow this procedure to extend the acrylic blur effect onto the title bar:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Stop the app if is still running."}),"\n",(0,t.jsxs)(n.li,{children:["Find the end of the opening tag of the ",(0,t.jsx)(n.code,{children:"<Window>"})," element again."]}),"\n",(0,t.jsxs)(n.li,{children:["Add the ",(0,t.jsx)(n.code,{children:"ExtendClientAreaToDecorationsHint"})," attribute as shown:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markup",children:'   <Window ...\n           TransparencyLevelHint="AcrylicBlur"\n           Background="Transparent"\n\n           ExtendClientAreaToDecorationsHint="True">\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Debug"})," to compile and run the project."]}),"\n"]}),"\n",(0,t.jsx)("p",{children:(0,t.jsx)("img",{className:"image-medium-zoom",src:a.Z,alt:""})}),"\n",(0,t.jsx)(n.p,{children:"Now you have the acrylic blur effect extending into the title bar. On the next page you will learn how to add and layout a control in the window."})]})}function m(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},93214:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/acrylic-material-1b0b0067312af313995b16f7bde23462.png"},89067:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/dark-mode-preview-68b48dfb98a8b4770a110904c3c7f912.png"},81159:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/full-acrylic-window-9249c74f396ee9d6dde704063dc141e4.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>l});var t=i(67294);const o={},r=t.createContext(o);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);