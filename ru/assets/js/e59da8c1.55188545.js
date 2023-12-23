"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[64715],{57987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>j,frontMatter:()=>c,metadata:()=>h,toc:()=>u});var i=n(85893),r=n(11151),s=n(13199),o=n(87670),a=n(86715),l=n(64394);const c={description:"TUTORIALS - Music Store App"},d="Create a New Project",h={id:"tutorials/music-store-app/creating-the-project",title:"Create a New Project",description:"TUTORIALS - Music Store App",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/tutorials/music-store-app/creating-the-project.md",sourceDirName:"tutorials/music-store-app",slug:"/tutorials/music-store-app/creating-the-project",permalink:"/avalonia-docs/ru/docs/tutorials/music-store-app/creating-the-project",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/ru/docusaurus-plugin-content-docs/current/tutorials/music-store-app/creating-the-project.md",tags:[],version:"current",frontMatter:{description:"TUTORIALS - Music Store App"},sidebar:"documentationSidebar",previous:{title:"Music Store App",permalink:"/avalonia-docs/ru/docs/tutorials/music-store-app/"},next:{title:"Window Styling",permalink:"/avalonia-docs/ru/docs/tutorials/music-store-app/creating-a-modern-looking-window"}},p={},u=[{value:"JetBrains Rider",id:"jetbrains-rider",level:3},{value:"Run the Project",id:"run-the-project",level:2}];function m(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"create-a-new-project",children:"Create a New Project"}),"\n",(0,i.jsx)(t.p,{children:"On this page you will lean how to create a new project for the app."}),"\n",(0,i.jsx)(t.h3,{id:"jetbrains-rider",children:"JetBrains Rider"}),"\n",(0,i.jsxs)(t.p,{children:["Before you start, check you have installed the ",(0,i.jsx)(t.em,{children:"Avalonia UI"})," solution templates for ",(0,i.jsx)(t.em,{children:"JetBrains Rider"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["For full instructions on preparing ",(0,i.jsx)(t.em,{children:"JetBrains Rider"})," for developing with ",(0,i.jsx)(t.em,{children:"Avalonia UI"}),", see ",(0,i.jsx)(t.a,{href:"/avalonia-docs/ru/docs/reference/jetbrains-rider-ide/jetbrains-rider-setup",children:"here"}),"."]})}),"\n",(0,i.jsx)(t.p,{children:"With the solution templates installed, begin this tutorial by following these instructions:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["On the ",(0,i.jsx)(t.strong,{children:"Welcome to JetBrains Rider"})," screen, click ",(0,i.jsx)(t.strong,{children:"New Solution"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["From the project types list on the left, locate and click ",(0,i.jsx)(t.strong,{children:"Avalonia .NET Core MVVM App"}),". It will be under the section ",(0,i.jsx)(t.strong,{children:"Other"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Leave the ",(0,i.jsx)(t.strong,{children:"MVVM Toolkit"})," option as (the default) ",(0,i.jsx)(t.em,{children:"ReactiveUI"})," framework."]}),"\n",(0,i.jsxs)(t.li,{children:["Enter the ",(0,i.jsx)(t.strong,{children:"Solution name"})," as 'Avalonia.MusicStore'."]}),"\n",(0,i.jsxs)(t.li,{children:["Click ",(0,i.jsx)(t.strong,{children:"Create"}),"."]}),"\n"]}),"\n",(0,i.jsx)("p",{children:(0,i.jsx)("img",{className:"image-medium-zoom",src:s.Z,alt:""})}),"\n",(0,i.jsx)(t.p,{children:"A new project will be created with the following solution folders and files:"}),"\n",(0,i.jsx)("p",{children:(0,i.jsx)("img",{className:"image-medium-zoom",src:o.Z,alt:""})}),"\n",(0,i.jsx)(t.p,{children:"Take some time to review the files and folders that the solution template created. You will see that the following the MVVM pattern, these folders were created:"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{width:"188",children:"Folder Name"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Assets"}),(0,i.jsxs)("td",{children:["Contains any embedded assets that are compiled into the program. ",(0,i.jsx)("code",{children:"Images"}),", ",(0,i.jsx)("code",{children:"Icons"}),", ",(0,i.jsx)("code",{children:"Fonts"})," etc, anything that the UI might need to display,"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Models"}),(0,i.jsx)("td",{children:"This is an empty folder for code that is the 'model' part of the MVVM pattern. This often contains everything else the app needs that is not part of the UI. For example: interaction with a database, Web API, or  interfaces with a hardware device. "})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"View Models"}),(0,i.jsx)("td",{children:"This is a folder for all the view models in the project, and it already contains an example. View models contain the application logic in the MVVM pattern. For example: a button is enabled only when the user has typed something; or open a dialog when the user clicks here; or show an error if the user enters too high a number type of logic in this input."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Views"}),(0,i.jsxs)("td",{children:["This is a folder for all the views in the project, and it already contains the view for the application main window. Views in the MVVM pattern contain only the presentation for the application; that is layout and form, fonts, colors, icons and images. In MVVM they have only enough code to link them to the view model layer. In ",(0,i.jsx)("em",{children:"Avalonia UI"})," there is only enough code to manage windows and dialogs here."]})]})]})]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["To explore the concepts behind the MVVM pattern, and when is appropriate to use it, see ",(0,i.jsx)(t.a,{href:"../../concepts/the-mvvm-pattern/",children:"here"}),"."]})}),"\n",(0,i.jsx)(t.p,{children:"The solution template has created enough files for the application to run. You will meet all of these during the rest of this tutorial."}),"\n",(0,i.jsx)(t.h2,{id:"run-the-project",children:"Run the Project"}),"\n",(0,i.jsx)(t.p,{children:"Press the debug button top-right of the IDE to compile and run the project."}),"\n",(0,i.jsx)("p",{children:(0,i.jsx)("img",{className:"image-medium-zoom",src:a.Z,alt:""})}),"\n",(0,i.jsx)(t.p,{children:"This will show a window that looks like:"}),"\n",(0,i.jsx)("p",{children:(0,i.jsx)("img",{className:"image-medium-zoom",src:l.Z,alt:""})}),"\n",(0,i.jsx)(t.p,{children:"It is a little plain - but you now have a running application, and a blank canvas to start developing with. On the next page you will learn how to add a modern-looking acrylic blur dark background."})]})}function j(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},13199:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/CreateSolution-202a3d03750fa6a3c87259727df4918e.png"},86715:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABQBAMAAABMs/6/AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAeUExURT4/QDIyMjg4OFaYSikqKgAAAE+CRgD8AEVePwCcAIf4wksAAAEASURBVEjH7ZXBCoJAFEUnF9K2aNEyJcL9g9mPzKYPaC8JUl8g7aQg5gPc+Le9UQYsc96AQgYeURg4PC9XZmRs5mecXGDSBRa6MFv/ZvkePhLC2gEaPnh26wDcC1M4E29MIfGBU7lwWHdUx9oCcqesh7Y4kT6CGmt6pR6NxZXqt6DFUAtLMGSW9FHdQtSJzz46Hc1yyzVmE8XT5EqKwU04WeppUl2UcEjPq0rS1rWqyrjHyrLMjMrzW9y/H5v2F9oSlr2tpWSvLdlvrZcpv4QBMUsThMExz0tBnjkSm4hJa4+/FYfzayPmk3wiFn4w0brl1zVbvRPg1V1/Wt+ZralbL0Nlbp7kyfCdAAAAAElFTkSuQmCC"},64394:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-20210310192926578-6855084c1148e885d408d3b51c482643.png"},87670:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/project-structure-89cccbf53c429b4723bab6ae5860defb.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var i=n(67294);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);