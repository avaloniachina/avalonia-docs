"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[98907],{47842:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>t});var l=n(85893),s=n(11151);const o={id:"build-avalonia-from-source",title:"Build Avalonia from Source"},a=void 0,d={id:"guides/developer-guides/build-avalonia-from-source",title:"Build Avalonia from Source",description:"Prerequisites",source:"@site/versioned_docs/version-0.10.x/guides/developer-guides/build-avalonia-from-source.md",sourceDirName:"guides/developer-guides",slug:"/guides/developer-guides/build-avalonia-from-source",permalink:"/avalonia-docs/docs/0.10.x/guides/developer-guides/build-avalonia-from-source",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/guides/developer-guides/build-avalonia-from-source.md",tags:[],version:"0.10.x",frontMatter:{id:"build-avalonia-from-source",title:"Build Avalonia from Source"},sidebar:"documentationSidebar",previous:{title:"Developer Guides",permalink:"/avalonia-docs/docs/0.10.x/guides/developer-guides/"},next:{title:"Comparison of Avalonia with WPF and UWP",permalink:"/avalonia-docs/docs/0.10.x/guides/developer-guides/comparison-of-avalonia-with-wpf-and-uwp"}},r={},t=[{value:"Prerequisites",id:"prerequisites",level:2},{value:".NET Core (Windows, Linux and macOS)",id:"net-core-windows-linux-and-macos",level:2},{value:"Install .NET Core",id:"install-net-core",level:3},{value:"Build",id:"build",level:3},{value:"Run",id:"run",level:3},{value:"Special Requirements",id:"special-requirements",level:2},{value:"Windows",id:"windows",level:3},{value:"Install Visual Studio",id:"install-visual-studio",level:4},{value:"Build",id:"build-1",level:4},{value:"macOS",id:"macos",level:3}];function u(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,l.jsx)(i.hr,{}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"git clone https://github.com/AvaloniaUI/Avalonia.git\ncd Avalonia\ngit submodule update --init --recursive\n"})}),"\n",(0,l.jsx)(i.h2,{id:"net-core-windows-linux-and-macos",children:".NET Core (Windows, Linux and macOS)"}),"\n",(0,l.jsx)(i.hr,{}),"\n",(0,l.jsx)(i.h3,{id:"install-net-core",children:"Install .NET Core"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://www.microsoft.com/net/core",children:".NET Core - All Supported OS's"})}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"At least the following versions must be installed:"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:".NET Core 3.1 SDK"}),"\n",(0,l.jsx)(i.li,{children:".NET 6 SDK"}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"build",children:"Build"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"cd samples/ControlCatalog.NetCore\ndotnet restore\ndotnet build\n"})}),"\n",(0,l.jsx)(i.h3,{id:"run",children:"Run"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"cd samples/ControlCatalog.NetCore\ndotnet restore\ndotnet run\n"})}),"\n",(0,l.jsx)(i.h2,{id:"special-requirements",children:"Special Requirements"}),"\n",(0,l.jsx)(i.hr,{}),"\n",(0,l.jsx)(i.h3,{id:"windows",children:"Windows"}),"\n",(0,l.jsx)(i.h4,{id:"install-visual-studio",children:"Install Visual Studio"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://www.visualstudio.com/en/downloads/",children:"Visual Studio 2019"})}),"\n"]}),"\n",(0,l.jsx)(i.h4,{id:"build-1",children:"Build"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"Open Avalonia.sln in Visual Studios 2019 or above.\n"})}),"\n",(0,l.jsx)(i.h3,{id:"macos",children:"macOS"}),"\n",(0,l.jsxs)(i.p,{children:["The native interop layer requires code generation, this can be triggered by:\n",(0,l.jsx)(i.code,{children:"./build.sh --target CompileNative"})]})]})}function c(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>d,a:()=>a});var l=n(67294);const s={},o=l.createContext(s);function a(e){const i=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),l.createElement(o.Provider,{value:i},e.children)}}}]);