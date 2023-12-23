"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[96778],{96014:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>h,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=o(85893),s=o(11151);const c=o.p+"assets/images/checkbox1-c4051754d443364f78db1021cb871f13.gif",r=o.p+"assets/images/checkbox2-94c3d6039c5f2eccfbbf2d6b6061ab5a.gif",a={description:"REFERENCE - Built-in Control"},i="Check Box",l={id:"reference/controls/checkbox",title:"Check Box",description:"REFERENCE - Built-in Control",source:"@site/docs/reference/controls/checkbox.md",sourceDirName:"reference/controls",slug:"/reference/controls/checkbox",permalink:"/avalonia-docs/docs/reference/controls/checkbox",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/reference/controls/checkbox.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Control"},sidebar:"documentationSidebar",previous:{title:"Carousel",permalink:"/avalonia-docs/docs/reference/controls/carousel"},next:{title:"ColorPicker",permalink:"/avalonia-docs/docs/reference/controls/colorpicker/"}},h={},d=[{value:"Useful Properties",id:"useful-properties",level:2},{value:"Examples",id:"examples",level:2},{value:"More Information",id:"more-information",level:2}];function x(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"check-box",children:"Check Box"}),"\n",(0,t.jsx)(n.p,{children:"The check box control presents a Boolean value where the true value is represented using a check mark, and the false value is an empty box. The check box has an option to present a nullable Boolean, where the null value represents 'unknown' and is drawn as a shaded box."}),"\n",(0,t.jsx)(n.p,{children:"Click interaction toggles the value in the sequence: checked, unchecked, unknown (if three-state)."}),"\n",(0,t.jsx)(n.h2,{id:"useful-properties",children:"Useful Properties"}),"\n",(0,t.jsx)(n.p,{children:"You will probably use these properties most often:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"IsChecked"})}),(0,t.jsx)(n.td,{children:"Sets the Boolean value."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"IsThreeState"})}),(0,t.jsx)(n.td,{children:"(Boolean) Sets the three state mode."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"This is an example of two-state check boxes:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markup",children:'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n        x:Class="AvaloniaAppTemplate.MainWindow"\n        Title="CheckBox sample">\n    <StackPanel Margin="20">\n        <CheckBox>Not checked by default</CheckBox>\n        <CheckBox IsChecked="True">Checked by default</CheckBox>\n    </StackPanel>\n</Window>\n'})}),"\n",(0,t.jsx)(n.p,{children:"Looks like this when running on Windows:"}),"\n",(0,t.jsx)("img",{src:c,alt:""}),"\n",(0,t.jsx)(n.p,{children:"This is an example of a three-state checkbox:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markup",children:'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n        x:Class="AvaloniaAppTemplate.MainWindow"\n        Title="CheckBox sample">\n    <StackPanel Margin="20">\n        <CheckBox IsThreeState="True" IsChecked="False">Not checked by default</CheckBox>\n        <CheckBox IsThreeState="True" IsChecked="True">Checked by default</CheckBox>\n        <CheckBox IsThreeState="True" IsChecked="{x:Null}">Unknown by default</CheckBox>\n    </StackPanel>\n</Window>\n'})}),"\n",(0,t.jsx)(n.p,{children:"Looks like this when running on Windows:"}),"\n",(0,t.jsx)("img",{src:r,alt:""}),"\n",(0,t.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,t.jsxs)(n.p,{children:["For the complete API documentation about this control, see ",(0,t.jsx)(n.a,{href:"http://reference.avaloniaui.net/api/Avalonia.Controls/CheckBox/",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["View the source code on ",(0,t.jsx)(n.em,{children:"GitHub"})," ",(0,t.jsx)(n.a,{href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/CheckBox.cs",children:(0,t.jsx)(n.code,{children:"CheckBox.cs"})})]})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>r});var t=o(67294);const s={},c=t.createContext(s);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);