"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[10150],{20700:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=t(85893),o=t(11151);const a=t.p+"assets/images/image (5)-7e08fc6750f619e6b42c7a7d2dedcce1.png",s={id:"creating-a-new-project",title:"Creating a new project"},r=void 0,l={id:"tutorials/todo-list-app/creating-a-new-project",title:"Creating a new project",description:"Visual Studio",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-0.10.x/tutorials/todo-list-app/creating-a-new-project.md",sourceDirName:"tutorials/todo-list-app",slug:"/tutorials/todo-list-app/creating-a-new-project",permalink:"/avalonia-docs/ru/docs/0.10.x/tutorials/todo-list-app/creating-a-new-project",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/ru/docusaurus-plugin-content-docs/version-0.10.x/tutorials/todo-list-app/creating-a-new-project.md",tags:[],version:"0.10.x",frontMatter:{id:"creating-a-new-project",title:"Creating a new project"},sidebar:"documentationSidebar",previous:{title:"ToDo List App",permalink:"/avalonia-docs/ru/docs/0.10.x/tutorials/todo-list-app/"},next:{title:"Creating a View",permalink:"/avalonia-docs/ru/docs/0.10.x/tutorials/todo-list-app/creating-a-view"}},c={},d=[{value:"Visual Studio",id:"visual-studio",level:2},{value:".NET Core CLI",id:"net-core-cli",level:2},{value:"Project structure",id:"project-structure",level:2}];function h(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"visual-studio",children:"Visual Studio"}),"\n",(0,n.jsxs)(i.p,{children:["The easiest way to get started with Avalonia from Visual Studio is to ",(0,n.jsx)(i.a,{href:"https://marketplace.visualstudio.com/items?itemName=AvaloniaTeam.AvaloniaforVisualStudio",children:"install the extension"})," from the Visual Studio Marketplace. Once that is installed, you can create an Avalonia MVVM application:"]}),"\n",(0,n.jsx)("img",{className:"center",src:a,alt:""}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Start Visual Studio"}),"\n",(0,n.jsxs)(i.li,{children:['Select "Create a new project" from the start window or ',(0,n.jsx)(i.code,{children:"File -> New -> Project"})," from the main menu"]}),"\n",(0,n.jsx)(i.li,{children:'Search for "Avalonia" and select "Avalonia MVVM Application"'}),"\n",(0,n.jsx)(i.li,{children:'Click "Next"'}),"\n",(0,n.jsx)(i.li,{children:'Enter "Todo" as the Project name'}),"\n",(0,n.jsx)(i.li,{children:'Click "Create"'}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"net-core-cli",children:".NET Core CLI"}),"\n",(0,n.jsxs)(i.p,{children:["First install the Avalonia templates for .NET Core by following the instructions ",(0,n.jsx)(i.a,{href:"https://github.com/AvaloniaUI/avalonia-dotnet-templates",children:"here"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"Now you can create the application from the template:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"dotnet new avalonia.mvvm -o Todo -n Todo\n"})}),"\n",(0,n.jsx)(i.h2,{id:"project-structure",children:"Project structure"}),"\n",(0,n.jsx)(i.p,{children:"The newly created project will be pre-filled with a number of files and directories:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"Todo\n |- App.axaml\n |- App.axaml.cs\n |- Assets\n |   |- avalonia-logo.ico\n |- Models \n |- nuget.config \n |- Program.cs\n |- Todo.csproj\n |- ViewLocator.cs\n |- ViewModels\n |   |- MainWindowViewModel.cs\n |   |- ViewModelBase.cs\n |- Views\n |   |- MainWindow.axaml\n |   |- MainWindow.axaml.cs\n"})}),"\n",(0,n.jsx)(i.p,{children:"You can see there are directories for each of the concepts in the MVVM pattern (models, views and view models) as well as couple of other files and directories:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.strong,{children:"Assets"})," directory holds the binary assets for your application such as icons and bitmaps. Files placed in this directory will automatically be included as resources in the application."]}),"\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.strong,{children:"Models"})," directory is currently empty, but as the name suggests this is where we'll be putting our models."]}),"\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.strong,{children:"ViewModels"})," directory is pre-filled with a base class for view models and a view model for the application main window."]}),"\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.strong,{children:"Views"})," directory just contains the application main window for now."]}),"\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.strong,{children:"App.axaml"})," file is where XAML styles and templates that will apply to the entire application will be placed."]}),"\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.strong,{children:"Program.cs"})," file is the entry point for execution of the application. Here you can configure the platform options for Avalonia if necessary."]}),"\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.strong,{children:"ViewLocator.cs"})," file is used to look up views for view models. This will be explained in more detail later."]}),"\n"]}),"\n",(0,n.jsxs)(i.admonition,{type:"info",children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:".xaml or .axaml?"})}),(0,n.jsxs)(i.p,{children:["In this tutorial we will use the ",(0,n.jsx)(i.code,{children:".axaml"})," file extension for XAML files which is what will be created by the Visual Studio extension. If you're using the .NET Core CLI, the extension will be ",(0,n.jsx)(i.code,{children:".xaml"}),". See the ",(0,n.jsx)(i.a,{href:"../../guides/basics/introduction-to-xaml#xaml-or-axaml-file",children:"Intro to XAML"})," page for information on why this happens."]})]})]})}function p(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>r,a:()=>s});var n=t(67294);const o={},a=n.createContext(o);function s(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);