"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[76138],{71020:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=o(85893),t=o(11151);const a={id:"how-to-use-web-assembly",title:"Web Assembly"},r="\ud83d\udc49 Web Assembly",l={id:"guides/platforms/how-to-use-web-assembly",title:"Web Assembly",description:"Run in the browser with WebAssembly",source:"@site/docs/guides/platforms/how-to-use-web-assembly.md",sourceDirName:"guides/platforms",slug:"/guides/platforms/how-to-use-web-assembly",permalink:"/avalonia-docs/docs/guides/platforms/how-to-use-web-assembly",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/platforms/how-to-use-web-assembly.md",tags:[],version:"current",frontMatter:{id:"how-to-use-web-assembly",title:"Web Assembly"},sidebar:"documentationSidebar",previous:{title:"Running on Raspberry Pi with Raspbian Lite",permalink:"/avalonia-docs/docs/guides/platforms/rpi/running-on-raspbian-lite-via-drm"},next:{title:"macOS Development",permalink:"/avalonia-docs/docs/guides/platforms/macos-development"}},i={},d=[{value:"Interop",id:"interop",level:2},{value:"Legacy Blazor backend",id:"legacy-blazor-backend",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"-web-assembly",children:"\ud83d\udc49 Web Assembly"}),"\n",(0,s.jsx)(n.p,{children:"Run in the browser with WebAssembly"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Install ",(0,s.jsx)(n.code,{children:"wasm-tools"})," workload tools. See ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-workload-install",children:"dotnet documentation"}),". If you have an older .NET SDK, it might ask you to install other workloads like ",(0,s.jsx)(n.code,{children:"wasm-experimental"})," as well."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dotnet workload install wasm-tools\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Install or update the dotnet templates to the latest version."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dotnet new install avalonia.templates\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Create a new directory for the project."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir BrowserTest\ncd BrowserTest\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Generate a new project that supports running in the browser."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dotnet new avalonia.xplat\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"In order to run simply do:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd BrowserTest.Browser\ndotnet run\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"In the console output you will see HTTP and HTTPS links to open the app."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"interop",children:"Interop"}),"\n",(0,s.jsxs)(n.p,{children:["It is possible to call JavaScript code from the Avalonia Web application. Avalonia app is compatible with standard ",(0,s.jsx)(n.strong,{children:"[JSImport]/[JSExport]"})," interop from Microsoft. You can find more information on ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/aspnet/core/blazor/javascript-interoperability/import-export-interop?view=aspnetcore-7.0",children:"their documentation"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"legacy-blazor-backend",children:"Legacy Blazor backend"}),"\n",(0,s.jsxs)(n.p,{children:["Starting from Avalonia 11.0 ",(0,s.jsx)(n.a,{href:"https://www.nuget.org/packages/Avalonia.Browser/",children:"Avalonia.Browser"})," package relies on build-in .NET interop with better stability and performance. Legacy Blazor backend is still available for compatibility and can be referenced using ",(0,s.jsx)(n.a,{href:"https://www.nuget.org/packages/Avalonia.Browser.Blazor/",children:"Avalonia.Browser.Blazor"})," package."]}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsxs)(n.p,{children:["If you have not performed the step to install required workloads, you might encounter errors when running the app in your browser later (e.g. ",(0,s.jsx)(n.code,{children:"System.DllNotFoundException: libSkiaSharp"}),") and you will need to rebuild again before the app will run."]}),"\n",(0,s.jsx)(n.p,{children:"Keep in mind, that WebAssembly in general as a technology is limited. .NET Multithreading is not supported by any browser and is only available starting .NET 8. Any normal app also has to comply with Browser sandboxing mechanism. And while Avalonia does its best to keep performance high, any WebAssembly GUI apps in some cases might be slow or with older browsers."})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>r});var s=o(67294);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);