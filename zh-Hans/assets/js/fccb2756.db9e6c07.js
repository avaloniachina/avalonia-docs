"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[43414],{3905:(e,A,t)=>{t.d(A,{Zo:()=>c,kt:()=>d});var n=t(67294);function a(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function o(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);A&&(n=n.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?o(Object(t),!0).forEach((function(A){a(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function r(e,A){if(null==e)return{};var t,n,a=function(e,A){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],A.indexOf(t)>=0||(a[t]=e[t]);return a}(e,A);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var A=n.useContext(l),t=A;return e&&(t="function"==typeof e?e(A):i(i({},A),e)),t},c=function(e){var A=s(e.components);return n.createElement(l.Provider,{value:A},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var A=e.children;return n.createElement(n.Fragment,{},A)}},m=n.forwardRef((function(e,A){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return t?n.createElement(d,i(i({ref:A},c),{},{components:t})):n.createElement(d,i({ref:A},c))}));function d(e,A){var t=arguments,a=A&&A.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var r={};for(var l in A)hasOwnProperty.call(A,l)&&(r[l]=A[l]);r.originalType=e,r[p]="string"==typeof e?e:a,i[1]=r;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},59230:(e,A,t)=>{t.r(A),t.d(A,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=t(87462),a=(t(67294),t(3905));const o="data:image/png;base64,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",i="data:image/png;base64,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",r="data:image/png;base64,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",l="data:image/png;base64,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",s={id:"textbox",title:"TextBox"},c=void 0,p={unversionedId:"controls/textbox",id:"version-0.10.x/controls/textbox",title:"TextBox",description:"The TextBox control is an editable text field where a user can input text.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/controls/textbox.md",sourceDirName:"controls",slug:"/controls/textbox",permalink:"/avalonia-docs/zh-Hans/docs/controls/textbox",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/controls/textbox.md",tags:[],version:"0.10.x",frontMatter:{id:"textbox",title:"TextBox"},sidebar:"documentationSidebar",previous:{title:"TimePicker",permalink:"/avalonia-docs/zh-Hans/docs/controls/timepicker"},next:{title:"ToolTip",permalink:"/avalonia-docs/zh-Hans/docs/controls/tooltip"}},u={},m=[{value:"Reference",id:"reference",level:2},{value:"Source code",id:"source-code",level:2},{value:"Examples",id:"examples",level:2},{value:"Basic one line TextBox",id:"basic-one-line-textbox",level:3},{value:"Password input TextBox",id:"password-input-textbox",level:3},{value:"TextBox with watermark",id:"textbox-with-watermark",level:3},{value:"Multiline TextBox",id:"multiline-textbox",level:3},{value:"TextInput Event Handling",id:"textinput-event-handling",level:3}],d={toc:m},x="wrapper";function g(e){let{components:A,...t}=e;return(0,a.kt)(x,(0,n.Z)({},d,t,{components:A,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"TextBox")," control is an editable text field where a user can input text."),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/TextBox/"},"TextBox")),(0,a.kt)("h2",{id:"source-code"},"Source code"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/TextBox.cs"},"TextBox.cs")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"basic-one-line-textbox"},"Basic one line TextBox"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n        x:Class="AvaloniaAppTemplate.MainWindow"\n        Title="AvaloniaAppTemplate">\n    <StackPanel Margin="10">\n        <TextBox />\n    </StackPanel>\n</Window>\n')),(0,a.kt)("p",null,"produces the following output in ",(0,a.kt)("strong",{parentName:"p"},"Windows 10")),(0,a.kt)("img",{className:"center",src:o,alt:""}),(0,a.kt)("h3",{id:"password-input-textbox"},"Password input TextBox"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n        x:Class="AvaloniaAppTemplate.MainWindow"\n        Title="AvaloniaAppTemplate">\n    <StackPanel Margin="10">\n        <TextBox PasswordChar="#" />\n    </StackPanel>\n</Window>\n')),(0,a.kt)("p",null,"produces the following output in ",(0,a.kt)("strong",{parentName:"p"},"Windows 10")," when text is input"),(0,a.kt)("img",{className:"center",src:i,alt:""}),(0,a.kt)("p",null,"When using the Fluent theme, you can apply the style class, ",(0,a.kt)("inlineCode",{parentName:"p"},"revealPasswordButton"),", and the TextBox will provide an eye \ud83d\udc41 glyph for the user to show the plane text temporally. Please note, the ",(0,a.kt)("inlineCode",{parentName:"p"},"TextBox")," may be written to but not copied from."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<TextBox Classes="revealPasswordButton" PasswordChar="\u2022" />\n')),(0,a.kt)("h3",{id:"textbox-with-watermark"},"TextBox with watermark"),(0,a.kt)("p",null,'Avalonia can show a "watermark" in a ',(0,a.kt)("inlineCode",{parentName:"p"},"TextBox"),", which is a piece of text that is displayed when the ",(0,a.kt)("inlineCode",{parentName:"p"},"TextBox")," is empty ","(","in HTML5 this is called a ",(0,a.kt)("em",{parentName:"p"},"placeholder"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n        x:Class="AvaloniaAppTemplate.MainWindow"\n        Title="AvaloniaAppTemplate">\n    <StackPanel Margin="10">\n        <TextBox Watermark="Street address" />\n    </StackPanel>\n</Window>\n')),(0,a.kt)("p",null,"produces the following output in ",(0,a.kt)("strong",{parentName:"p"},"Windows 10")),(0,a.kt)("img",{className:"center",src:r,alt:""}),(0,a.kt)("h3",{id:"multiline-textbox"},"Multiline TextBox"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n        x:Class="AvaloniaAppTemplate.MainWindow"\n        Title="AvaloniaAppTemplate">\n    <Grid Margin="10">\n        <TextBox AcceptsReturn="True" TextWrapping="Wrap" />\n    </Grid>\n</Window>\n')),(0,a.kt)("p",null,"produces the following output in ",(0,a.kt)("strong",{parentName:"p"},"Windows 10")," when text is input"),(0,a.kt)("img",{className:"center",src:l,alt:""}),(0,a.kt)("h3",{id:"textinput-event-handling"},"TextInput Event Handling"),(0,a.kt)("p",null,"By default the ",(0,a.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Input/InputElement/37F81F6F"},"TextInput")," event does nothing if you assign directly to it. This is due to the TextBox itself handling the event from the underlying InputElement."),(0,a.kt)("p",null,"If you wish to access the TextInput event, then you will have to use the TextBox.AddHandler method to intercept the event via event tunneling."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"MyTextInput.AddHandler(TextInputEvent, MyTextInput_InputHandler, RoutingStrategies.Tunnel);\n")),(0,a.kt)("p",null,"To see more details about this behavior, read ",(0,a.kt)("a",{parentName:"p",href:"/avalonia-docs/zh-Hans/docs/input/routed-events"},"routed events")," documentation page."))}g.isMDXComponent=!0}}]);