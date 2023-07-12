"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[21878],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=o.createContext({}),s=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(d.Provider,{value:n},e.children)},c="mdxType",w={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,u=c["".concat(d,".").concat(m)]||c[m]||w[m]||i;return t?o.createElement(u,r(r({ref:n},p),{},{components:t})):o.createElement(u,r({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},16581:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>w,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=t(87462),a=(t(67294),t(3905));const i={id:"window",title:"Window"},r=void 0,l={unversionedId:"controls/window",id:"version-0.10.x/controls/window",title:"Window",description:"Window is a top-level ContentControl.",source:"@site/versioned_docs/version-0.10.x/controls/window.md",sourceDirName:"controls",slug:"/controls/window",permalink:"/avalonia-docs/docs/controls/window",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/controls/window.md",tags:[],version:"0.10.x",frontMatter:{id:"window",title:"Window"},sidebar:"documentationSidebar",previous:{title:"ViewBox",permalink:"/avalonia-docs/docs/controls/viewbox"},next:{title:"WrapPanel",permalink:"/avalonia-docs/docs/controls/wrappanel"}},d={},s=[{value:"Common Properties",id:"common-properties",level:3},{value:"Reference",id:"reference",level:3},{value:"Source code",id:"source-code",level:3},{value:"The main window",id:"the-main-window",level:3},{value:"Show, hide and close a window",id:"show-hide-and-close-a-window",level:3},{value:"Show a window as a dialog",id:"show-a-window-as-a-dialog",level:3},{value:"Prevent a window from closing",id:"prevent-a-window-from-closing",level:3}],p={toc:s},c="wrapper";function w(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/Window/"},(0,a.kt)("inlineCode",{parentName:"a"},"Window"))," is a top-level ",(0,a.kt)("a",{parentName:"p",href:"contentcontrol"},(0,a.kt)("inlineCode",{parentName:"a"},"ContentControl")),"."),(0,a.kt)("p",null,"You will not usually create instances of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Window")," class directly; instead the ",(0,a.kt)("inlineCode",{parentName:"p"},"Window")," class is usually sub-classed for each type of window to be shown by an application. For information on how to create new window classes from templates see the ",(0,a.kt)("a",{parentName:"p",href:"../getting-started/windows"},"quickstart"),"."),(0,a.kt)("h3",{id:"common-properties"},"Common Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Title")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The window title")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Icon")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The window icon")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"SizeToContent")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Describes the window's auto-sizing behavior")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"WindowState")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The minimized/maximized state of the window")))),(0,a.kt)("h3",{id:"reference"},"Reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/Window/"},"Window")),(0,a.kt)("h3",{id:"source-code"},"Source code"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/Window.cs"},"Window.cs")),(0,a.kt)("h3",{id:"the-main-window"},"The main window"),(0,a.kt)("p",null,"The main window is the window passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"ApplicationLifetime.MainWindow")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"OnFrameworkInitializationCompleted")," method of your your ",(0,a.kt)("inlineCode",{parentName:"p"},"App.axaml.cs")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public override void OnFrameworkInitializationCompleted()\n{\n    if (ApplicationLifetime is IClassicDesktopStyleApplicationLifetime desktopLifetime)\n    {\n        desktopLifetime.MainWindow = new MainWindow();\n    }\n}\n")),(0,a.kt)("p",null,"It can be retrieved at any time by casting ",(0,a.kt)("inlineCode",{parentName:"p"},"Application.ApplicationLifetime")," IClassicDesktopStyleApplicationLifetime."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Mobile and browser platforms don't have a concept of Window in Avalonia.\nInstead you need to set MainView control in Application.ApplicationLifetime when it implements ISingleViewApplicationLifetime interface.")),(0,a.kt)("h3",{id:"show-hide-and-close-a-window"},"Show, hide and close a window"),(0,a.kt)("p",null,"You can show a window using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Show")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"var window = new MyWindow();\nwindow.Show();\n")),(0,a.kt)("p",null,"Windows can be closed using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Close")," method. This has the same effect as when a user clicks the window's close button:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"window.Close();\n\n// A closed window cannot be shown.\nwindow.Show();\n")),(0,a.kt)("p",null,"Note that once a window has been closed, it cannot be shown again. If you want to re-show the window then you should use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Hide")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"window.Hide();\n\n// Window can now be shown again later\nwindow.Show();\n")),(0,a.kt)("p",null,"See also ",(0,a.kt)("a",{parentName:"p",href:"docs/controls/window#prevent-a-window-from-closing"},"Prevent a window from closing")),(0,a.kt)("h3",{id:"show-a-window-as-a-dialog"},"Show a window as a dialog"),(0,a.kt)("p",null,"You can show a window as a modal dialog by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"ShowDialog")," method. ",(0,a.kt)("inlineCode",{parentName:"p"},"ShowDialog")," requires an owner window to be passed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// Here we assume this code is executed from our current Window class and "this" object is a Window.\n// Alternatively you can get global MainWindow from Application.ApplicationLifetime casted to IClassicDesktopStyleApplicationLifetime.\nvar ownerWindow = this;\nvar window = new MyWindow();\nwindow.ShowDialog(ownerWindow);\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ShowDialog")," method will return immediately. If you want to wait for the dialog to be closed, you can ",(0,a.kt)("inlineCode",{parentName:"p"},"await")," the call:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"var window = new MyWindow();\nawait window.ShowDialog(ownerWindow);\n")),(0,a.kt)("p",null,"Dialogs can return a result by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"Close")," method with an object. This result can then be read by the caller of ",(0,a.kt)("inlineCode",{parentName:"p"},"ShowDialog"),". For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public class MyDialog : Window\n{\n    public MyDialog()\n    {\n        InitializeComponent();\n    }\n\n    private void OkButton_Click(object sender, EventArgs e)\n    {\n        Close("OK Clicked!");\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"var dialog = new MyDialog();\n\n// The result is a string so call `ShowDialog<string>`.\nvar result = await dialog.ShowDialog<string>(ownerWindow);\n")),(0,a.kt)("h3",{id:"prevent-a-window-from-closing"},"Prevent a window from closing"),(0,a.kt)("p",null,"A window can be prevented from closing by handling the ",(0,a.kt)("inlineCode",{parentName:"p"},"Closing")," event and setting ",(0,a.kt)("inlineCode",{parentName:"p"},"e.Cancel = true"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"window.Closing += (s, e) =>\n{\n    e.Cancel = true;\n};\n")),(0,a.kt)("p",null,"You could also hide the window instead. This allows the window to be re-shown after the user clicks the close button:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"window.Closing += (s, e) =>\n{\n    ((Window)s).Hide();\n    e.Cancel = true;\n};\n")))}w.isMDXComponent=!0}}]);