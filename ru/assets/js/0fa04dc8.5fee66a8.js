"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[4494],{3125:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var o=i(85893),t=i(11151);const s={id:"window",title:"Window"},l=void 0,d={id:"controls/window",title:"Window",description:"Window is a top-level ContentControl.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-0.10.x/controls/window.md",sourceDirName:"controls",slug:"/controls/window",permalink:"/avalonia-docs/ru/docs/0.10.x/controls/window",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/ru/docusaurus-plugin-content-docs/version-0.10.x/controls/window.md",tags:[],version:"0.10.x",frontMatter:{id:"window",title:"Window"},sidebar:"documentationSidebar",previous:{title:"Viewbox",permalink:"/avalonia-docs/ru/docs/0.10.x/controls/viewbox"},next:{title:"WrapPanel",permalink:"/avalonia-docs/ru/docs/0.10.x/controls/wrappanel"}},a={},c=[{value:"Common Properties",id:"common-properties",level:3},{value:"Reference",id:"reference",level:3},{value:"Source code",id:"source-code",level:3},{value:"The main window",id:"the-main-window",level:3},{value:"Show, hide and close a window",id:"show-hide-and-close-a-window",level:3},{value:"Show a window as a dialog",id:"show-a-window-as-a-dialog",level:3},{value:"Prevent a window from closing",id:"prevent-a-window-from-closing",level:3}];function r(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"http://reference.avaloniaui.net/api/Avalonia.Controls/Window/",children:(0,o.jsx)(n.code,{children:"Window"})})," is a top-level ",(0,o.jsx)(n.a,{href:"contentcontrol",children:(0,o.jsx)(n.code,{children:"ContentControl"})}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["You will not usually create instances of the ",(0,o.jsx)(n.code,{children:"Window"})," class directly; instead the ",(0,o.jsx)(n.code,{children:"Window"})," class is usually sub-classed for each type of window to be shown by an application. For information on how to create new window classes from templates see the ",(0,o.jsx)(n.a,{href:"../getting-started/windows",children:"quickstart"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"common-properties",children:"Common Properties"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{style:{textAlign:"left"},children:"Property"}),(0,o.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"left"},children:(0,o.jsx)(n.code,{children:"Title"})}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"The window title"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"left"},children:(0,o.jsx)(n.code,{children:"Icon"})}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"The window icon"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"left"},children:(0,o.jsx)(n.code,{children:"SizeToContent"})}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"Describes the window's auto-sizing behavior"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"left"},children:(0,o.jsx)(n.code,{children:"WindowState"})}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"The minimized/maximized state of the window"})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"reference",children:"Reference"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"http://reference.avaloniaui.net/api/Avalonia.Controls/Window/",children:"Window"})}),"\n",(0,o.jsx)(n.h3,{id:"source-code",children:"Source code"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/Window.cs",children:"Window.cs"})}),"\n",(0,o.jsx)(n.h3,{id:"the-main-window",children:"The main window"}),"\n",(0,o.jsxs)(n.p,{children:["The main window is the window passed to ",(0,o.jsx)(n.code,{children:"ApplicationLifetime.MainWindow"})," in the ",(0,o.jsx)(n.code,{children:"OnFrameworkInitializationCompleted"})," method of your your ",(0,o.jsx)(n.code,{children:"App.axaml.cs"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"public override void OnFrameworkInitializationCompleted()\n{\n    if (ApplicationLifetime is IClassicDesktopStyleApplicationLifetime desktopLifetime)\n    {\n        desktopLifetime.MainWindow = new MainWindow();\n    }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["It can be retrieved at any time by casting ",(0,o.jsx)(n.code,{children:"Application.ApplicationLifetime"})," IClassicDesktopStyleApplicationLifetime."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"Mobile and browser platforms don't have a concept of Window in Avalonia.\nInstead you need to set MainView control in Application.ApplicationLifetime when it implements ISingleViewApplicationLifetime interface."})}),"\n",(0,o.jsx)(n.h3,{id:"show-hide-and-close-a-window",children:"Show, hide and close a window"}),"\n",(0,o.jsxs)(n.p,{children:["You can show a window using the ",(0,o.jsx)(n.code,{children:"Show"})," method:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"var window = new MyWindow();\nwindow.Show();\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Windows can be closed using the ",(0,o.jsx)(n.code,{children:"Close"})," method. This has the same effect as when a user clicks the window's close button:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"window.Close();\n\n// A closed window cannot be shown.\nwindow.Show();\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Note that once a window has been closed, it cannot be shown again. If you want to re-show the window then you should use the ",(0,o.jsx)(n.code,{children:"Hide"})," method:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"window.Hide();\n\n// Window can now be shown again later\nwindow.Show();\n"})}),"\n",(0,o.jsxs)(n.p,{children:["See also ",(0,o.jsx)(n.a,{href:"../controls/window#prevent-a-window-from-closing",children:"Prevent a window from closing"})]}),"\n",(0,o.jsx)(n.h3,{id:"show-a-window-as-a-dialog",children:"Show a window as a dialog"}),"\n",(0,o.jsxs)(n.p,{children:["You can show a window as a modal dialog by calling the ",(0,o.jsx)(n.code,{children:"ShowDialog"})," method. ",(0,o.jsx)(n.code,{children:"ShowDialog"})," requires an owner window to be passed:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'// Here we assume this code is executed from our current Window class and "this" object is a Window.\n// Alternatively you can get global MainWindow from Application.ApplicationLifetime casted to IClassicDesktopStyleApplicationLifetime.\nvar ownerWindow = this;\nvar window = new MyWindow();\nwindow.ShowDialog(ownerWindow);\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"ShowDialog"})," method will return immediately. If you want to wait for the dialog to be closed, you can ",(0,o.jsx)(n.code,{children:"await"})," the call:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"var window = new MyWindow();\nawait window.ShowDialog(ownerWindow);\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Dialogs can return a result by calling the ",(0,o.jsx)(n.code,{children:"Close"})," method with an object. This result can then be read by the caller of ",(0,o.jsx)(n.code,{children:"ShowDialog"}),". For example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'public class MyDialog : Window\n{\n    public MyDialog()\n    {\n        InitializeComponent();\n    }\n\n    private void OkButton_Click(object sender, EventArgs e)\n    {\n        Close("OK Clicked!");\n    }\n}\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"var dialog = new MyDialog();\n\n// The result is a string so call `ShowDialog<string>`.\nvar result = await dialog.ShowDialog<string>(ownerWindow);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"prevent-a-window-from-closing",children:"Prevent a window from closing"}),"\n",(0,o.jsxs)(n.p,{children:["A window can be prevented from closing by handling the ",(0,o.jsx)(n.code,{children:"Closing"})," event and setting ",(0,o.jsx)(n.code,{children:"e.Cancel = true"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"window.Closing += (s, e) =>\n{\n    e.Cancel = true;\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"You could also hide the window instead. This allows the window to be re-shown after the user clicks the close button:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"window.Closing += (s, e) =>\n{\n    ((Window)s).Hide();\n    e.Cancel = true;\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>l});var o=i(67294);const t={},s=o.createContext(t);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);