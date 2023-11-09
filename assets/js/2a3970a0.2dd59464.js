"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[46698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var l=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=i,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||a;return n?l.createElement(k,r(r({ref:t},d),{},{components:n})):l.createElement(k,r({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var s=2;s<a;s++)r[s]=n[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},81237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var l=n(87462),i=(n(67294),n(3905));const a={id:"file-picker-options",title:"File Picker Options"},r="File Picker Options",o={unversionedId:"concepts/services/storage-provider/file-picker-options",id:"concepts/services/storage-provider/file-picker-options",title:"File Picker Options",description:"Common PickerOptions",source:"@site/docs/concepts/services/storage-provider/file-picker-options.md",sourceDirName:"concepts/services/storage-provider",slug:"/concepts/services/storage-provider/file-picker-options",permalink:"/avalonia-docs/docs/next/concepts/services/storage-provider/file-picker-options",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/concepts/services/storage-provider/file-picker-options.md",tags:[],version:"current",frontMatter:{id:"file-picker-options",title:"File Picker Options"},sidebar:"documentationSidebar",previous:{title:"Bookmarks",permalink:"/avalonia-docs/docs/next/concepts/services/storage-provider/bookmarks"},next:{title:"Templated Controls",permalink:"/avalonia-docs/docs/next/concepts/templated-controls"}},p={},s=[{value:"Common PickerOptions",id:"common-pickeroptions",level:2},{value:"Title",id:"title",level:3},{value:"SuggestedStartLocation",id:"suggestedstartlocation",level:3},{value:"FilePickerOpenOptions",id:"filepickeropenoptions",level:2},{value:"AllowMultiple",id:"allowmultiple",level:3},{value:"FileTypeFilter",id:"filetypefilter",level:3},{value:"FilePickerSaveOptions",id:"filepickersaveoptions",level:2},{value:"SuggestedFileName",id:"suggestedfilename",level:3},{value:"DefaultExtension",id:"defaultextension",level:3},{value:"FileTypeChoices",id:"filetypechoices",level:3},{value:"ShowOverwritePrompt",id:"showoverwriteprompt",level:3},{value:"FolderPickerOpenOptions",id:"folderpickeropenoptions",level:2},{value:"AllowMultiple",id:"allowmultiple-1",level:3},{value:"Platform compatibility:",id:"platform-compatibility",level:2}],d={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"file-picker-options"},"File Picker Options"),(0,i.kt)("h2",{id:"common-pickeroptions"},"Common PickerOptions"),(0,i.kt)("h3",{id:"title"},"Title"),(0,i.kt)("p",null,"Gets or sets the text that appears in the title bar of a picker."),(0,i.kt)("h3",{id:"suggestedstartlocation"},"SuggestedStartLocation"),(0,i.kt)("p",null,"Gets or sets the initial location where the file open picker looks for files to present to the user.\nCan be obtained from previously picked folder or using ",(0,i.kt)("inlineCode",{parentName:"p"},"StorageProvider.TryGetFolderFromPathAsync")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"StorageProvider.TryGetWellKnownFolderAsync"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This is a suggestion for the system, that can ignore this parameter, if application doesn't have access to the folder or it doesn't exist.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"On Linux some DBus file picker don't support start location. For using GTK Free Desktop disable ",(0,i.kt)("inlineCode",{parentName:"p"},"UseDBusFilePicker")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"X11PlatformOptions"))),(0,i.kt)("h2",{id:"filepickeropenoptions"},"FilePickerOpenOptions"),(0,i.kt)("h3",{id:"allowmultiple"},"AllowMultiple"),(0,i.kt)("p",null,"Gets or sets an option indicating whether open picker allows users to select multiple files."),(0,i.kt)("h3",{id:"filetypefilter"},"FileTypeFilter"),(0,i.kt)("p",null,"Gets or sets the collection of file types that the file open picker displays."),(0,i.kt)("p",null,"To create a list of file types for the file picker:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'//This can also be applied for SaveFilePicker.\nvar files = await _target.StorageProvider.OpenFilePickerAsync(new FilePickerOpenOptions()\n{\n Title = title,\n//You can add either custom or from the built-in file types. See "Defining custom file types" on how to create a custom one.\n FileTypeFilter = new[] { ImageAll, FilePickerFileTypes.TextPlain }\n});\n')),(0,i.kt)("h2",{id:"filepickersaveoptions"},"FilePickerSaveOptions"),(0,i.kt)("h3",{id:"suggestedfilename"},"SuggestedFileName"),(0,i.kt)("p",null,"Gets or sets the file name that the file save picker suggests to the user."),(0,i.kt)("h3",{id:"defaultextension"},"DefaultExtension"),(0,i.kt)("p",null,"Gets or sets the default extension to be used to save the file."),(0,i.kt)("h3",{id:"filetypechoices"},"FileTypeChoices"),(0,i.kt)("p",null,"Gets or sets the collection of valid file types that the user can choose to assign to a file."),(0,i.kt)("h3",{id:"showoverwriteprompt"},"ShowOverwritePrompt"),(0,i.kt)("p",null,"Gets or sets a value indicating whether file open picker displays a warning if the user specifies the name of a file that already exists."),(0,i.kt)("h2",{id:"folderpickeropenoptions"},"FolderPickerOpenOptions"),(0,i.kt)("h3",{id:"allowmultiple-1"},"AllowMultiple"),(0,i.kt)("p",null,"Gets or sets an option indicating whether open picker allows users to select multiple folders."),(0,i.kt)("h2",{id:"platform-compatibility"},"Platform compatibility:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Feature"),(0,i.kt)("th",{parentName:"tr",align:null},"Managed"),(0,i.kt)("th",{parentName:"tr",align:null},"Windows"),(0,i.kt)("th",{parentName:"tr",align:null},"macOS"),(0,i.kt)("th",{parentName:"tr",align:null},"Linux"),(0,i.kt)("th",{parentName:"tr",align:null},"Browser"),(0,i.kt)("th",{parentName:"tr",align:null},"Android"),(0,i.kt)("th",{parentName:"tr",align:null},"iOS"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Title")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2716"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SuggestedStartLocation")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"AllowMultiple")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"FileTypeFilter")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SuggestedFileName")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2716")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DefaultExtension")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2716")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"FileTypeChoices")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2716")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ShowOverwritePrompt")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2716"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2716"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2716"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2716")))),(0,i.kt)("h1",{id:"defining-custom-file-types"},"Defining custom file types"),(0,i.kt)("p",null,"Avalonia has set of build in file types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"FilePickerFileTypes.All - all files"),(0,i.kt)("li",{parentName:"ul"},"FilePickerFileTypes.TextPlain - txt files"),(0,i.kt)("li",{parentName:"ul"},"FilePickerFileTypes.ImageAll - all images"),(0,i.kt)("li",{parentName:"ul"},"FilePickerFileTypes.ImageJpg - jpg images"),(0,i.kt)("li",{parentName:"ul"},"FilePickerFileTypes.ImagePng - png images"),(0,i.kt)("li",{parentName:"ul"},"FilePickerFileTypes.Pdf - pdf images")),(0,i.kt)("p",null,"However it is possible to define custom file types that can be used by the picker:"),(0,i.kt)("p",null,"For instance, build-in ImageAll type is defined as"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'public static FilePickerFileType ImageAll { get; } = new("All Images")\n{\n    Patterns = new[] { "*.png", "*.jpg", "*.jpeg", "*.gif", "*.bmp" },\n    AppleUniformTypeIdentifiers = new[] { "public.image" },\n    MimeTypes = new[] { "image/*" }\n};\n')),(0,i.kt)("p",null,"Where each file type has following hints that are used by the different platforms:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Patterns")," are used by most Windows, Linux and Browser platforms, and is a basic GLOB patten that can be matched on types."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AppleUniformTypeIdentifiers")," is a standard identifier defined by Apple and is used on macOS and iOS platforms."),(0,i.kt)("li",{parentName:"ul"},"And ",(0,i.kt)("inlineCode",{parentName:"li"},"MimeTypes")," is a web identfier for the files used on most of platforms, but Windows and iOS.")),(0,i.kt)("p",null,"In general, it is recommended to define as much as possible information in each file type. But at least ",(0,i.kt)("inlineCode",{parentName:"p"},"Patterns")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"MimeTypes")," have to defined."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If specific hint is not known, don't set random values or \"",(0,i.kt)("em",{parentName:"p"},"."),'" wildcard, instead keep this collection null. It will tell the platform to ignore this collection and instead try to use another one.')))}u.isMDXComponent=!0}}]);