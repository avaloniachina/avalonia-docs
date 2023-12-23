"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[87655],{77735:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=s(85893),t=s(11151);const i={id:"headless-custom",title:"Manual Setup of Headless Platform"},o=void 0,l={id:"concepts/headless/headless-custom",title:"Manual Setup of Headless Platform",description:"This page explains an advanced usage scenario with the Headless platform.",source:"@site/docs/concepts/headless/headless-custom.md",sourceDirName:"concepts/headless",slug:"/concepts/headless/headless-custom",permalink:"/avalonia-docs/docs/concepts/headless/headless-custom",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/concepts/headless/headless-custom.md",tags:[],version:"current",frontMatter:{id:"headless-custom",title:"Manual Setup of Headless Platform"},sidebar:"documentationSidebar",previous:{title:"Headless Testing with NUnit",permalink:"/avalonia-docs/docs/concepts/headless/headless-nunit"},next:{title:"Input",permalink:"/avalonia-docs/docs/concepts/input/"}},c={},d=[{value:"Install Packages",id:"install-packages",level:2},{value:"Setup Application",id:"setup-application",level:2},{value:"Run Headless Session",id:"run-headless-session",level:2}];function r(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["This page explains an advanced usage scenario with the Headless platform.\nWe recommend using the ",(0,a.jsx)(n.a,{href:"/avalonia-docs/docs/concepts/headless/headless-xunit",children:"XUnit"})," or ",(0,a.jsx)(n.a,{href:"/avalonia-docs/docs/concepts/headless/headless-nunit",children:"NUnit"})," testing frameworks instead."]})}),"\n",(0,a.jsx)(n.h2,{id:"install-packages",children:"Install Packages"}),"\n",(0,a.jsx)(n.p,{children:"To set up the Headless platform, you need to install two packages:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://www.nuget.org/packages/Avalonia.Headless",children:"Avalonia.Headless"}),", which also includes Avalonia."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://www.nuget.org/packages/Avalonia.Themes.Fluent",children:"Avalonia.Themes.Fluent"}),", as even headless controls need a theme."]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"The Headless platform doesn't require any specific theme, and it is possible to swap FluentTheme with any other."})}),"\n",(0,a.jsx)(n.h2,{id:"setup-application",children:"Setup Application"}),"\n",(0,a.jsxs)(n.p,{children:["As in any other Avalonia app, an ",(0,a.jsx)(n.code,{children:"Application"})," instance needs to be created, and themes need to be applied. When using the Headless platform, the setup is not much different from a regular Avalonia app and can mostly be reused."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",metastring:"title=App.axaml",children:'<Application xmlns="https://github.com/avaloniaui"\n             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n             x:Class="Tests.App">\n  <Application.Styles>\n    <FluentTheme />\n  </Application.Styles>\n</Application>\n'})}),"\n",(0,a.jsx)(n.p,{children:"And the code:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",metastring:"title=App.axaml.cs",children:"using Avalonia;\nusing Avalonia.Headless;\n\npublic class App : Application\n{\n    public override void Initialize()\n    {\n        AvaloniaXamlLoader.Load(this);\n    }\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"run-headless-session",children:"Run Headless Session"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",metastring:"title=Program.cs",children:'using Avalonia.Controls;\nusing Avalonia.Headless;\n\n// Start Headless session passing Application type.\nusing var session = HeadlessUnitTestSession.StartNew(typeof(App));\n\n// Since the Headless session has its own thread internally, we need to dispatch actions there:\nawait session.Dispatch(() =>\n{\n    // Setup controls:\n    var textBox = new TextBox();\n    var window = new Window { Content = textBox };\n\n    // Open window:\n    window.Show();\n\n    // Focus text box:\n    textBox.Focus();\n\n    // Simulate text input:\n    window.KeyTextInput("Hello World");\n\n    // Assert:\n    if (textBox.Text != "Hello World")\n    {\n        throw new Exception("Assert");\n    }\n}, CancellationToken.None);\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>o});var a=s(67294);const t={},i=a.createContext(t);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);