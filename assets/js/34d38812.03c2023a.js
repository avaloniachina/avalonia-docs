"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[55903],{6811:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=n(85893),t=n(11151);const s={id:"file-dialogs",title:"File Dialogs"},o=void 0,r={id:"basics/user-interface/file-dialogs",title:"File Dialogs",description:"The file dialog functionality is accessed through the StorageProvider service API, which is available from the Window or TopLevel classes. This page shows only basic usage and for more information about this API please visit StorageProvider page.",source:"@site/docs/basics/user-interface/file-dialogs.md",sourceDirName:"basics/user-interface",slug:"/basics/user-interface/file-dialogs",permalink:"/avalonia-docs/docs/basics/user-interface/file-dialogs",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/basics/user-interface/file-dialogs.md",tags:[],version:"current",frontMatter:{id:"file-dialogs",title:"File Dialogs"},sidebar:"documentationSidebar",previous:{title:"Animations",permalink:"/avalonia-docs/docs/basics/user-interface/animations"},next:{title:"Multi-Touch",permalink:"/avalonia-docs/docs/basics/user-interface/multi-touch"}},l={},c=[{value:"OpenFilePickerAsync",id:"openfilepickerasync",level:2},{value:"SaveFilePickerAsync",id:"savefilepickerasync",level:2},{value:"Example",id:"example",level:3}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.p,{children:["The file dialog functionality is accessed through the ",(0,a.jsx)(i.a,{href:"../../concepts/services/storage-provider",children:(0,a.jsx)(i.code,{children:"StorageProvider"})})," service API, which is available from the ",(0,a.jsx)(i.code,{children:"Window"})," or ",(0,a.jsx)(i.code,{children:"TopLevel"})," classes. This page shows only basic usage and for more information about this API please visit StorageProvider page."]}),"\n",(0,a.jsx)(i.admonition,{type:"info",children:(0,a.jsxs)(i.p,{children:["For a complete, runnable example of these concepts in action, check out ",(0,a.jsx)(i.a,{href:"https://github.com/AvaloniaUI/AvaloniaUI.QuickGuides/tree/main/FileOps",children:"the sample application."})]})}),"\n",(0,a.jsx)(i.h2,{id:"openfilepickerasync",children:"OpenFilePickerAsync"}),"\n",(0,a.jsxs)(i.p,{children:["This method opens a file picker dialog, allowing the user to select a file. ",(0,a.jsx)(i.code,{children:"FilePickerOpenOptions"})," defines options that are passed to the OS dialog."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-cs",children:'public class MyView : UserControl\n{\n    private async void OpenFileButton_Clicked(object sender, RoutedEventArgs args)\n    {\n        // Get top level from the current control. Alternatively, you can use Window reference instead.\n        var topLevel = TopLevel.GetTopLevel(this);\n\n        // Start async operation to open the dialog.\n        var files = await topLevel.StorageProvider.OpenFilePickerAsync(new FilePickerOpenOptions\n        {\n            Title = "Open Text File",\n            AllowMultiple = false\n        });\n\n        if (files.Count >= 1)\n        {\n            // Open reading stream from the first file.\n            await using var stream = await files[0].OpenReadAsync();\n            using var streamReader = new StreamReader(stream);\n            // Reads all the content of file as a text.\n            var fileContent = await streamReader.ReadToEndAsync();\n        }\n    }\n}\n'})}),"\n",(0,a.jsx)(i.hr,{}),"\n",(0,a.jsx)(i.h2,{id:"savefilepickerasync",children:"SaveFilePickerAsync"}),"\n",(0,a.jsxs)(i.p,{children:["This method opens a file save dialog, allowing the user to save a file. ",(0,a.jsx)(i.code,{children:"FilePickerSaveOptions"})," defines options that are passed to the OS dialog."]}),"\n",(0,a.jsx)(i.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-cs",children:'public class MyView : UserControl\n{\n    private async void SaveFileButton_Clicked(object sender, RoutedEventArgs args)\n    {\n        // Get top level from the current control. Alternatively, you can use Window reference instead.\n        var topLevel = TopLevel.GetTopLevel(this);\n\n        // Start async operation to open the dialog.\n        var file = await topLevel.StorageProvider.SaveFilePickerAsync(new FilePickerSaveOptions\n        {\n            Title = "Save Text File"\n        });\n\n        if (file is not null)\n        {\n            // Open writing stream from the file.\n            await using var stream = await file.OpenWriteAsync();\n            using var streamWriter = new StreamWriter(stream);\n            // Write some content to the file.\n            await streamWriter.WriteLineAsync("Hello World!");\n        }\n    }\n}\n'})}),"\n",(0,a.jsxs)(i.p,{children:["For more information on StorageProvider service including on how to keep access to the picked files and what possible options are supported, please visit ",(0,a.jsx)(i.a,{href:"../../concepts/services/storage-provider",children:(0,a.jsx)(i.code,{children:"StorageProvider"})})," documentation page and subpages."]}),"\n",(0,a.jsx)(i.admonition,{type:"note",children:(0,a.jsxs)(i.p,{children:["The provided examples directly access the ",(0,a.jsx)(i.a,{href:"../../concepts/services/storage-provider",children:(0,a.jsx)(i.code,{children:"StorageProvider"})})," API inside the ViewModel for learning purposes. In a real-world application, it's recommended to adhere to MVVM principles by creating service classes and locating them with Dependency Injection / Inversion of Control (DI/IoC). Please refer to the ",(0,a.jsx)(i.a,{href:"https://github.com/AvaloniaUI/AvaloniaUI.QuickGuides/tree/main/IoCFileOps",children:"IoCFileOps"})," and DepInject projects for samples of how to achieve this."]})})]})}function p(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>r,a:()=>o});var a=n(67294);const t={},s=a.createContext(t);function o(e){const i=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(s.Provider,{value:i},e.children)}}}]);