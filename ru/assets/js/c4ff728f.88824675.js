"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[71235],{28296:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var t=n(85893),a=n(11151);const l={id:"style-classes",title:"Style Classes"},o="Style Classes",c={id:"basics/user-interface/styling/style-classes",title:"Style Classes",description:"You can assign an Avalonia UI control one or more style classes, and use these to guide style selection. Style classes are assigned in a control element using the Classes attribute. If you want to assign more than one class, then use a space-separated list.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/basics/user-interface/styling/style-classes.md",sourceDirName:"basics/user-interface/styling",slug:"/basics/user-interface/styling/style-classes",permalink:"/avalonia-docs/ru/docs/basics/user-interface/styling/style-classes",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/ru/docusaurus-plugin-content-docs/current/basics/user-interface/styling/style-classes.md",tags:[],version:"current",frontMatter:{id:"style-classes",title:"Style Classes"},sidebar:"documentationSidebar",previous:{title:"Styles",permalink:"/avalonia-docs/ru/docs/basics/user-interface/styling/styles"},next:{title:"Control Themes",permalink:"/avalonia-docs/ru/docs/basics/user-interface/styling/control-themes"}},r={},i=[{value:"Pseudo Classes",id:"pseudo-classes",level:2},{value:"Conditional Classes",id:"conditional-classes",level:2},{value:"Classes in Code",id:"classes-in-code",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"style-classes",children:"Style Classes"}),"\n",(0,t.jsxs)(s.p,{children:["You can assign an ",(0,t.jsx)(s.em,{children:"Avalonia UI"})," control one or more style classes, and use these to guide style selection. Style classes are assigned in a control element using the ",(0,t.jsx)(s.code,{children:"Classes"})," attribute. If you want to assign more than one class, then use a space-separated list."]}),"\n",(0,t.jsxs)(s.p,{children:["For example, this button has both the ",(0,t.jsx)(s.code,{children:"h1"})," and ",(0,t.jsx)(s.code,{children:"blue"})," style classes applied:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-markup",children:'<Button Classes="h1 blue"/>\n'})}),"\n",(0,t.jsx)(s.h2,{id:"pseudo-classes",children:"Pseudo Classes"}),"\n",(0,t.jsx)(s.p,{children:"Like in CSS, controls can have pseudo classes; these are classes that are defined in the control itself rather than by the user. The names of pseudo classes in a selector always start with a colon."}),"\n",(0,t.jsxs)(s.p,{children:["For example ",(0,t.jsx)(s.code,{children:":pointerover"})," pseudo class indicates that the pointer input is currently over (inside the bounds of) a control. (This is pseudo class is the similar to ",(0,t.jsx)(s.code,{children:":hover"})," in CSS.)"]}),"\n",(0,t.jsxs)(s.p,{children:["This is an example of  a ",(0,t.jsx)(s.code,{children:":pointerover"})," pseudo class selector:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-markup",children:'<StackPanel>\n  <StackPanel.Styles>\n    <Style Selector="Border:pointerover">\n      <Setter Property="Background" Value="Red"/>\n    </Style>\n  </StackPanel.Styles>\n  <Border>\n    <TextBlock>I will have red background when hovered.</TextBlock>\n  </Border>\n</StackPanel>\n'})}),"\n",(0,t.jsx)(s.p,{children:"In this example, the pseudo class selector changes properties inside a control template:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-markup",children:'<StackPanel>\n  <StackPanel.Styles>\n    <Style Selector="Button:pressed /template/ ContentPresenter">\n        <Setter Property="TextBlock.Foreground" Value="Red"/>\n    </Style>\n  </StackPanel.Styles>\n  <Button>I will have red text when pressed.</Button>\n</StackPanel>\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Other pseudo classes include ",(0,t.jsx)(s.code,{children:":focus"}),", ",(0,t.jsx)(s.code,{children:":disabled"}),", ",(0,t.jsx)(s.code,{children:":pressed"})," for buttons, and ",(0,t.jsx)(s.code,{children:":checked"})," for checkboxes."]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:["For more detail about pseudo classes, see the reference ",(0,t.jsx)(s.a,{href:"/avalonia-docs/ru/docs/reference/styles/pseudo-classes",children:"here"}),"."]})}),"\n",(0,t.jsx)(s.h2,{id:"conditional-classes",children:"Conditional Classes"}),"\n",(0,t.jsx)(s.p,{children:"If you need to add or remove a class using a bound condition, then you can use following special syntax:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-markup",children:'<Button Classes.accent="{Binding IsSpecial}" />\n'})}),"\n",(0,t.jsx)(s.h2,{id:"classes-in-code",children:"Classes in Code"}),"\n",(0,t.jsxs)(s.p,{children:["You can manipulate style classes in code using the ",(0,t.jsx)(s.code,{children:"Classes"})," collection:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-csharp",children:'control.Classes.Add("blue");\ncontrol.Classes.Remove("red");\n'})})]})}function u(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>o});var t=n(67294);const a={},l=t.createContext(a);function o(e){const s=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);