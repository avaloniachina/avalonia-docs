"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[84470],{65695:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=o(85893),n=o(11151);const a={id:"solution-setup",title:"Setting Up A Cross Platform Solution"},s=void 0,r={id:"guides/building-cross-platform-applications/solution-setup",title:"Setting Up A Cross Platform Solution",description:'Despite the platform diversity, Avalonia projects all leverage the same solution file format (the Visual Studio ".SLN\u201d file format). Solutions can be shared across development environments, providing a unified approach to multi-platform app development.',source:"@site/docs/guides/building-cross-platform-applications/solution-setup.md",sourceDirName:"guides/building-cross-platform-applications",slug:"/guides/building-cross-platform-applications/solution-setup",permalink:"/avalonia-docs/docs/guides/building-cross-platform-applications/solution-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/building-cross-platform-applications/solution-setup.md",tags:[],version:"current",frontMatter:{id:"solution-setup",title:"Setting Up A Cross Platform Solution"},sidebar:"documentationSidebar",previous:{title:"Architecture",permalink:"/avalonia-docs/docs/guides/building-cross-platform-applications/architecture"},next:{title:"Dealing with Multiple Platforms",permalink:"/avalonia-docs/docs/guides/building-cross-platform-applications/dealing-with-platforms"}},l={},c=[{value:"Populating the Solution",id:"populating-the-solution",level:2},{value:"Core Project",id:"core-project",level:3},{value:"Desktop Project",id:"desktop-project",level:3},{value:"Android Project",id:"android-project",level:3},{value:"iOS Project",id:"ios-project",level:3},{value:"Browser Project",id:"browser-project",level:3},{value:"Core Project",id:"core-project-1",level:2},{value:"Platform-Specific Application Projects",id:"platform-specific-application-projects",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:'Despite the platform diversity, Avalonia projects all leverage the same solution file format (the Visual Studio ".SLN\u201d file format). Solutions can be shared across development environments, providing a unified approach to multi-platform app development.'}),"\n",(0,i.jsx)(t.p,{children:"The first step to creating a new cross platform application is to create a solution. This section will elaborate on what happens next: the process of setting up the projects for building cross-platform applications with Avalonia."}),"\n",(0,i.jsx)(t.h2,{id:"populating-the-solution",children:"Populating the Solution"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"Avalonia Cross Platform Application"})," template creates a solution structure that includes the following projects to allow seamless sharing and reusability of code across multiple platforms:"]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"../../get-started/install#install-avalonia-ui-templates",children:"Ensure you've installed the Avalonia Templates."})})}),"\n",(0,i.jsx)(t.h3,{id:"core-project",children:"Core Project"}),"\n",(0,i.jsx)(t.p,{children:"This forms the heart of your application and is designed to be platform-agnostic. It contains all the reusable components of your application, including business logic, view models, and views. All other projects reference this core project. The majority of your development efforts should reside here."}),"\n",(0,i.jsx)(t.h3,{id:"desktop-project",children:"Desktop Project"}),"\n",(0,i.jsx)(t.p,{children:"This project enables running the app to run on Windows, macOS, and Linux platforms, with an output type of 'WinExe'."}),"\n",(0,i.jsx)(t.h3,{id:"android-project",children:"Android Project"}),"\n",(0,i.jsxs)(t.p,{children:["This is a ",(0,i.jsx)(t.code,{children:"NET-Android"})," based project that references the Core Project. It features a MainActivity that inherits from ",(0,i.jsx)(t.code,{children:"AvaloniaMainActivity"}),", acting as the entry point for the Android application."]}),"\n",(0,i.jsx)(t.h3,{id:"ios-project",children:"iOS Project"}),"\n",(0,i.jsxs)(t.p,{children:["This is a ",(0,i.jsx)(t.code,{children:"NET-iOS"})," project tailored for iOS and iPadOS platforms. The entry point for this project is the ",(0,i.jsx)(t.code,{children:"AppDelegate"}),", which inherits from ",(0,i.jsx)(t.code,{children:"AvaloniaAppDelegate"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"browser-project",children:"Browser Project"}),"\n",(0,i.jsxs)(t.p,{children:["This WebAssembly (WASM) project allows your Avalonia application to run in a web browser. Its RuntimeIdentifier is ",(0,i.jsx)(t.code,{children:"'browser-wasm'"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"core-project-1",children:"Core Project"}),"\n",(0,i.jsxs)(t.p,{children:["Shared code projects should only reference assemblies that are universally available across all platforms. This generally includes common framework namespaces like ",(0,i.jsx)(t.code,{children:"System"}),", ",(0,i.jsx)(t.code,{children:"System.Core"}),", and ",(0,i.jsx)(t.code,{children:"System.Xml"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"These shared projects aim to implement as much application functionality as possible, including UI components, thereby maximizing the reusability of code."}),"\n",(0,i.jsx)(t.p,{children:"By separating functionalities into distinct layers, code becomes easier to manage, test, and reuse across multiple platforms. This layered architecture approach in Avalonia UI projects promotes efficiency and scalability in application development."}),"\n",(0,i.jsx)(t.h2,{id:"platform-specific-application-projects",children:"Platform-Specific Application Projects"}),"\n",(0,i.jsx)(t.p,{children:"Platform-Specific projects must reference the Core Project. The Platform Specific projects exist to enable the application to run on unique platforms including iOS, Android and WASM."}),"\n",(0,i.jsxs)(t.p,{children:["While desktop platforms can be all share a single project, it may be benefitual to create a seperate project for macOS using the ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/xamarin/mac/platform/target-framework",children:"Xamarin.Mac Target Framework"}),". This will enable easier distribution and packaging of your application."]})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>s});var i=o(67294);const n={},a=i.createContext(n);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);