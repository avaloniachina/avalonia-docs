"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[30466],{1035:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var i=o(85893),s=o(11151);const t={id:"window",title:"Window"},l=void 0,d={id:"reference/controls/window",title:"Window",description:"Window is a top-level ContentControl.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/controls/window.md",sourceDirName:"reference/controls",slug:"/reference/controls/window",permalink:"/avalonia-docs/zh-Hans/docs/reference/controls/window",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/controls/window.md",tags:[],version:"current",frontMatter:{id:"window",title:"Window"},sidebar:"documentationSidebar",previous:{title:"Value Selector Controls",permalink:"/avalonia-docs/zh-Hans/docs/reference/controls/value-selector-controls"},next:{title:"\u624b\u52bf",permalink:"/avalonia-docs/zh-Hans/docs/reference/gestures/"}},r={},a=[{value:"Common Properties",id:"common-properties",level:3},{value:"Source code",id:"source-code",level:3},{value:"Show, hide and close a window",id:"show-hide-and-close-a-window",level:3},{value:"Show a window as a dialog",id:"show-a-window-as-a-dialog",level:3},{value:"Prevent a window from closing",id:"prevent-a-window-from-closing",level:3},{value:"Additional Resources",id:"additional-resources",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Window"})," is a top-level ",(0,i.jsx)(n.a,{href:"contentcontrol",children:(0,i.jsx)(n.code,{children:"ContentControl"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["You will not usually create instances of the ",(0,i.jsx)(n.code,{children:"Window"})," class directly; instead the ",(0,i.jsx)(n.code,{children:"Window"})," class is usually sub-classed for each type of window to be shown by an application. For information on how to create new window classes from templates see the ",(0,i.jsx)(n.a,{href:"../../get-started/getting-started",children:"quickstart"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"common-properties",children:"Common Properties"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"Title"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"The window title"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"Icon"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"The window icon"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"SizeToContent"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Describes the window's auto-sizing behavior"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"WindowState"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"The minimized/maximized state of the window"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"source-code",children:"Source code"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/Window.cs",children:"Window.cs"})}),"\n",(0,i.jsx)(n.h3,{id:"show-hide-and-close-a-window",children:"Show, hide and close a window"}),"\n",(0,i.jsxs)(n.p,{children:["You can show a window using the ",(0,i.jsx)(n.code,{children:"Show"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"var window = new MyWindow();\nwindow.Show();\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Windows can be closed using the ",(0,i.jsx)(n.code,{children:"Close"})," method. This has the same effect as when a user clicks the window's close button:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"window.Close();\n\n// A closed window cannot be shown.\nwindow.Show();\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note that once a window has been closed, it cannot be shown again. If you want to re-show the window then you should use the ",(0,i.jsx)(n.code,{children:"Hide"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"window.Hide();\n\n// Window can now be shown again later\nwindow.Show();\n"})}),"\n",(0,i.jsxs)(n.p,{children:["See also ",(0,i.jsx)(n.a,{href:"../controls/window#prevent-a-window-from-closing",children:"Prevent a window from closing"})]}),"\n",(0,i.jsx)(n.h3,{id:"show-a-window-as-a-dialog",children:"Show a window as a dialog"}),"\n",(0,i.jsxs)(n.p,{children:["You can show a window as a modal dialog by calling the ",(0,i.jsx)(n.code,{children:"ShowDialog"})," method. ",(0,i.jsx)(n.code,{children:"ShowDialog"})," requires an owner window to be passed:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'// Here we assume this code is executed from our current Window class and "this" object is a Window.\n// Alternatively you can get global MainWindow from Application.ApplicationLifetime casted to IClassicDesktopStyleApplicationLifetime.\nvar ownerWindow = this;\nvar window = new MyWindow();\nwindow.ShowDialog(ownerWindow);\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ShowDialog"})," method will return immediately. If you want to wait for the dialog to be closed, you can ",(0,i.jsx)(n.code,{children:"await"})," the call:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"var window = new MyWindow();\nawait window.ShowDialog(ownerWindow);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Dialogs can return a result by calling the ",(0,i.jsx)(n.code,{children:"Close"})," method with an object. This result can then be read by the caller of ",(0,i.jsx)(n.code,{children:"ShowDialog"}),". For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'public class MyDialog : Window\n{\n    public MyDialog()\n    {\n        InitializeComponent();\n    }\n\n    private void OkButton_Click(object sender, EventArgs e)\n    {\n        Close("OK Clicked!");\n    }\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"var dialog = new MyDialog();\n\n// The result is a string so call `ShowDialog<string>`.\nvar result = await dialog.ShowDialog<string>(ownerWindow);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"prevent-a-window-from-closing",children:"Prevent a window from closing"}),"\n",(0,i.jsxs)(n.p,{children:["A window can be prevented from closing by handling the ",(0,i.jsx)(n.code,{children:"Closing"})," event and setting ",(0,i.jsx)(n.code,{children:"e.Cancel = true"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"window.Closing += (s, e) =>\n{\n    e.Cancel = true;\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"You could also hide the window instead. This allows the window to be re-shown after the user clicks the close button:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"window.Closing += (s, e) =>\n{\n    ((Window)s).Hide();\n    e.Cancel = true;\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.a,{href:"../../get-started/test-drive/main-window",children:"Main Window"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>d,a:()=>l});var i=o(67294);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);