"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[83857],{42310:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var t=n(85893),o=n(11151);const a={id:"application-lifetimes",title:"Application Lifetimes"},l=void 0,s={id:"getting-started/application-lifetimes",title:"Application Lifetimes",description:"Platforms are not created equal. The lifetime management that we are used to in Windows Forms and WPF can work only on desktop-style platforms. AvaloniaUI is a cross-platform framework, so to help your application to be portable, we provide different lifetime models for your application and allow you to control everything manually if platform allows us to do so.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/getting-started/application-lifetimes.md",sourceDirName:"getting-started",slug:"/getting-started/application-lifetimes",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/getting-started/application-lifetimes",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/getting-started/application-lifetimes.md",tags:[],version:"0.10.x",frontMatter:{id:"application-lifetimes",title:"Application Lifetimes"},sidebar:"documentationSidebar",previous:{title:"Unhandled Exceptions",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/getting-started/unhandled-exceptions"},next:{title:"Data Binding",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/data-binding/"}},r={},c=[{value:"How do lifetimes work?",id:"how-do-lifetimes-work",level:2},{value:"Lifetime types",id:"lifetime-types",level:2},{value:"IControlledApplicationLifetime",id:"icontrolledapplicationlifetime",level:3},{value:"IClassicDesktopStyleApplicationLifetime",id:"iclassicdesktopstyleapplicationlifetime",level:3},{value:"ISingleViewApplicationLifetime",id:"isingleviewapplicationlifetime",level:3},{value:"Manual lifetime management",id:"manual-lifetime-management",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Platforms are not created equal. The lifetime management that we are used to in Windows Forms and WPF can work only on desktop-style platforms. AvaloniaUI is a cross-platform framework, so to help your application to be portable, we provide different lifetime models for your application and allow you to control everything manually if platform allows us to do so."}),"\n",(0,t.jsx)(i.h2,{id:"how-do-lifetimes-work",children:"How do lifetimes work?"}),"\n",(0,t.jsx)(i.p,{children:"The preferred way of initializing your application on desktop is:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csharp",children:"class Program\n{\n  // This method is needed for IDE previewer infrastructure\n  public static AppBuilder BuildAvaloniaApp() \n    => AppBuilder.Configure<App>().UsePlatformDetect();\n\n  // The entry point. Things aren't ready yet, so at this point\n  // you shouldn't use any Avalonia types or anything that expects\n  // a SynchronizationContext to be ready\n  public static int Main(string[] args) \n    => BuildAvaloniaApp().StartWithClassicDesktopLifetime(args);\n}\n"})}),"\n",(0,t.jsx)(i.p,{children:"So, where is the main window setup? It's now moved to Application class:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csharp",children:"public override void OnFrameworkInitializationCompleted()\n{\n  if (ApplicationLifetime is IClassicDesktopStyleApplicationLifetime desktop)\n    desktop.MainWindow = new MainWindow();\n  else if (ApplicationLifetime is ISingleViewApplicationLifetime singleView)\n    singleView.MainView = new MainView();\n  base.OnFrameworkInitializationCompleted();\n}\n"})}),"\n",(0,t.jsxs)(i.p,{children:["This method is called when the framework is ready to use and ",(0,t.jsx)(i.code,{children:"ApplicationLifetime"})," property contains the chosen lifetime if any. If your application is run in design mode by IDE previewer process, ",(0,t.jsx)(i.code,{children:"ApplicationLifetime"})," is ",(0,t.jsx)(i.code,{children:"null"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"lifetime-types",children:"Lifetime types"}),"\n",(0,t.jsx)(i.p,{children:"A particular lifetime might provide different aspects, so we have a set of interfaces to access them."}),"\n",(0,t.jsx)(i.h3,{id:"icontrolledapplicationlifetime",children:"IControlledApplicationLifetime"}),"\n",(0,t.jsx)(i.p,{children:"Provided by:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"StartWithClassicDesktopLifetime"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"StartLinuxFramebuffer"})}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Allows you to subscribe to ",(0,t.jsx)(i.code,{children:"Startup"}),"  ",(0,t.jsx)(i.code,{children:"Exit"})," events  and explicitly shutdown the application by calling ",(0,t.jsx)(i.code,{children:"Shutdown"})," method. Also provides the control of the application's exit code."]}),"\n",(0,t.jsx)(i.h3,{id:"iclassicdesktopstyleapplicationlifetime",children:"IClassicDesktopStyleApplicationLifetime"}),"\n",(0,t.jsxs)(i.p,{children:["Inherits: ",(0,t.jsx)(i.code,{children:"IControlledApplicationLifetime"})]}),"\n",(0,t.jsx)(i.p,{children:"Provided by:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"StartWithClassicDesktopLifetime"})}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Allows you to control your application lifetime in WindowsForms/WPF manner. Provides a way to access the list of the currently opened windows, set a main window and 3 shutdown modes:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"OnLastWindowClose - shuts down the application when the last window is closed"}),"\n",(0,t.jsx)(i.li,{children:"OnMainWindowClose - shuts down the application when MainWindow is closed, if MainWindow is set"}),"\n",(0,t.jsx)(i.li,{children:"OnExplicitShutdown - disables automatic shutdown of the application, you need to call Shutdown manually"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"isingleviewapplicationlifetime",children:"ISingleViewApplicationLifetime"}),"\n",(0,t.jsx)(i.p,{children:"Provided by:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"StartLinuxFramebuffer"})}),"\n",(0,t.jsx)(i.li,{children:"mobile platforms (WIP)"}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Some platforms doesn't have a concept of a desktop ",(0,t.jsx)(i.code,{children:"Window"})," and only allow one view on the screen simultaneously. For such platforms such lifetime allows you to set and change the ",(0,t.jsx)(i.code,{children:"MainView"}),". For now we don't provide our own navigation stack implementation, but you can use one from ReactiveUI."]}),"\n",(0,t.jsx)(i.h2,{id:"manual-lifetime-management",children:"Manual lifetime management"}),"\n",(0,t.jsxs)(i.p,{children:["We don't force you to use our lifetime model on platforms that allow us to do so. On desktop platforms you can pass a ",(0,t.jsx)(i.code,{children:"AppMain"})," delegate to ",(0,t.jsx)(i.code,{children:"BuildAvaloniaApp.Start"})," and manage things manually from there:"]}),"\n",(0,t.jsxs)(i.p,{children:["More docs will come later, for now see: ",(0,t.jsx)(i.a,{href:"https://github.com/AvaloniaUI/Avalonia/issues/2564",children:"Issue #2564"})," and  ",(0,t.jsx)(i.a,{href:"https://github.com/AvaloniaUI/Avalonia/pull/2676",children:"PR 2676"})]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csharp",children:"class Program\n{\n  // This method is needed for IDE previewer infrastructure\n  public static AppBuilder BuildAvaloniaApp() \n    => AppBuilder.Configure<App>().UsePlatformDetect();\n\n  // The entry point. Things aren't ready yet, so at this point\n  // you shouldn't use any Avalonia types or anything that expects\n  // a SynchronizationContext to be ready\n  public static int Main(string[] args) \n    => BuildAvaloniaApp().Start(AppMain, args);\n\n  // Application entry point. Avalonia is completely initialized.\n  static void AppMain(Application app, string[] args)\n  {\n     // A cancellation token source that will be used to stop the main loop\n     var cts = new CancellationTokenSource();\n     \n     // Do you startup code here\n     new Window().Show();\n\n     // Start the main loop\n     app.Run(cts.Token);\n  }\n}\n"})})]})}function p(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>s,a:()=>l});var t=n(67294);const o={},a=t.createContext(o);function l(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);