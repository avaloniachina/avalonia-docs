"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[77872],{82965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>i});var o=n(85893),s=n(11151);const c={id:"togglebutton",title:"ToggleButton"},r=void 0,l={id:"controls/buttons/togglebutton",title:"ToggleButton",description:"The ToggleButton control is a subclass of the Button control that has a built-in checked state. This means the button can be checked or unchecked on click by a user. You may change the styling of controls based on whether ToggleButton is checked or not by using the :checked pseudoclass.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/controls/buttons/togglebutton.md",sourceDirName:"controls/buttons",slug:"/controls/buttons/togglebutton",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/controls/buttons/togglebutton",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/controls/buttons/togglebutton.md",tags:[],version:"0.10.x",frontMatter:{id:"togglebutton",title:"ToggleButton"},sidebar:"documentationSidebar",previous:{title:"RadioButton",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/controls/buttons/radiobutton"},next:{title:"ButtonSpinner",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/controls/buttons/buttonspinner"}},a={},i=[{value:"Source code",id:"source-code",level:2},{value:"Examples",id:"examples",level:2},{value:"Speaker Mute Button",id:"speaker-mute-button",level:3}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"ToggleButton"})," control is a subclass of the ",(0,o.jsx)(t.code,{children:"Button"})," control that has a built-in ",(0,o.jsx)(t.code,{children:"checked"})," state. This means the button can be checked or unchecked on click by a user. You may change the styling of controls based on whether ",(0,o.jsx)(t.code,{children:"ToggleButton"})," is checked or not by using the ",(0,o.jsx)(t.code,{children:":checked"})," ",(0,o.jsx)(t.a,{href:"../../styling/styles#pseudoclasses",children:"pseudoclass."})]}),"\n",(0,o.jsx)(t.h2,{id:"source-code",children:"Source code"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/Primitives/ToggleButton.cs",children:"ToggleButton.cs"})}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.h3,{id:"speaker-mute-button",children:"Speaker Mute Button"}),"\n",(0,o.jsxs)(t.p,{children:["This button will show a muted speaker icon or an un-muted speaker icon based on whether the button is checked or unchecked, which the ",(0,o.jsx)(t.code,{children:"ToggleButton"})," control toggles between when users click on the button."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-markup",children:'<Style Selector="ToggleButton DrawingPresenter.tbchecked">\n    <Setter Property="IsVisible" Value="False"/>\n</Style>\n<Style Selector="ToggleButton:checked DrawingPresenter.tbchecked">\n    <Setter Property="IsVisible" Value="True"/>\n</Style>\n<Style Selector="ToggleButton DrawingPresenter.tbunchecked">\n    <Setter Property="IsVisible" Value="True"/>\n</Style>\n<Style Selector="ToggleButton:checked DrawingPresenter.tbunchecked">\n    <Setter Property="IsVisible" Value="False"/>\n</Style>\n'})}),"\n",(0,o.jsxs)(t.p,{children:["The style code above reacts to ",(0,o.jsx)(t.code,{children:"ToggleButton"}),"'s ",(0,o.jsx)(t.code,{children:":checked"})," pseudoclass, so that if the ",(0,o.jsx)(t.code,{children:"ToggleButton"})," is checked, any ",(0,o.jsx)(t.code,{children:"DrawingPresenter"})," with the class ",(0,o.jsx)(t.code,{children:".tbchecked"})," will be visible, and any ",(0,o.jsx)(t.code,{children:"DrawingPresenter"})," with the class ",(0,o.jsx)(t.code,{children:".tbunchecked"})," will not be visible."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-markup",children:'<ToggleButton Classes="vtrx" IsChecked="{Binding Path=vtrx.muted}" ToolTip.Tip="stop audio">\n    <Panel>\n        <DrawingPresenter Drawing="{DynamicResource Icon.Speaker}" Classes="tbunchecked"/>\n        <DrawingPresenter Width="14" Height="14" Margin="14,14,0,0" Drawing="{DynamicResource Icon.SpeakerMute}" Classes="tbchecked"/>\n    </Panel>\n</ToggleButton>\n'})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var o=n(67294);const s={},c=o.createContext(s);function r(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);