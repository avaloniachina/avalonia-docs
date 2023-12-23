"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[19668],{5865:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var t=s(85893),l=s(11151);const c={id:"how-to-use-included-styles",title:"\u5982\u4f55\u4f7f\u7528\u5305\u542b\u7684\u6837\u5f0f"},o="\u5982\u4f55\u4f7f\u7528\u5305\u542b\u7684\u6837\u5f0f",i={id:"guides/styles-and-resources/how-to-use-included-styles",title:"\u5982\u4f55\u4f7f\u7528\u5305\u542b\u7684\u6837\u5f0f",description:"\u672c\u6307\u5357\u5411\u60a8\u5c55\u793a\u4e86\u5982\u4f55\u4ece\u4e00\u4e2a\u5355\u72ec\u7684\u6837\u5f0f\u6587\u4ef6\u4e2d\u5171\u4eab\u6837\u5f0f\uff08\u8be5\u6587\u4ef6\u5df2\u5305\u542b\u5728\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff09\u3002\u8fd9\u79cd\u65b9\u6cd5\u5141\u8bb8\u60a8\u5728\u591a\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u5171\u4eab\u6837\u5f0f\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/styles-and-resources/how-to-use-included-styles.md",sourceDirName:"guides/styles-and-resources",slug:"/guides/styles-and-resources/how-to-use-included-styles",permalink:"/avalonia-docs/zh-Hans/docs/guides/styles-and-resources/how-to-use-included-styles",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/styles-and-resources/how-to-use-included-styles.md",tags:[],version:"current",frontMatter:{id:"how-to-use-included-styles",title:"\u5982\u4f55\u4f7f\u7528\u5305\u542b\u7684\u6837\u5f0f"},sidebar:"documentationSidebar",previous:{title:"\u5c5e\u6027\u8bbe\u7f6e\u5668",permalink:"/avalonia-docs/zh-Hans/docs/guides/styles-and-resources/property-setters"},next:{title:"\u5982\u4f55\u4f7f\u7528\u8d44\u6e90",permalink:"/avalonia-docs/zh-Hans/docs/guides/styles-and-resources/resources"}},r={},d=[];function a(e){const n={code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u5982\u4f55\u4f7f\u7528\u5305\u542b\u7684\u6837\u5f0f",children:"\u5982\u4f55\u4f7f\u7528\u5305\u542b\u7684\u6837\u5f0f"}),"\n",(0,t.jsx)(n.p,{children:"\u672c\u6307\u5357\u5411\u60a8\u5c55\u793a\u4e86\u5982\u4f55\u4ece\u4e00\u4e2a\u5355\u72ec\u7684\u6837\u5f0f\u6587\u4ef6\u4e2d\u5171\u4eab\u6837\u5f0f\uff08\u8be5\u6587\u4ef6\u5df2\u5305\u542b\u5728\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff09\u3002\u8fd9\u79cd\u65b9\u6cd5\u5141\u8bb8\u60a8\u5728\u591a\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u5171\u4eab\u6837\u5f0f\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u8981\u5b9e\u73b0\u8fd9\u4e00\u70b9\uff0c\u60a8\u9700\u8981\u5728\u4e00\u4e2a\u65b0\u7684XAML\u6587\u4ef6\u4e2d\u5b9a\u4e49\u6837\u5f0f\u3002\u5728\u8fd9\u91cc\uff0c\u6839\u5143\u7d20\u5fc5\u987b\u662f",(0,t.jsx)(n.code,{children:"Style"}),"\u6216",(0,t.jsx)(n.code,{children:"Styles"}),"\u5143\u7d20\u4e4b\u4e00\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markup",children:'<Styles xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">\n    <Style Selector="TextBlock.h1">\n        <Setter Property="FontSize" Value="24"/>\n        <Setter Property="FontWeight" Value="Bold"/>\n    </Style>\n</Styles>\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Avalonia UI"})," \u89e3\u51b3\u65b9\u6848\u6a21\u677f\u63d0\u4f9b\u4e86\u4e00\u79cd\u5feb\u901f\u6dfb\u52a0\u6837\u5f0f\u6587\u4ef6\u5230\u60a8\u7684\u9879\u76ee\u7684\u65b9\u6cd5\u3002\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u64cd\u4f5c\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5728",(0,t.jsx)(n.strong,{children:"\u89e3\u51b3\u65b9\u6848\u8d44\u6e90\u7ba1\u7406\u5668"}),"\u4e2d\uff0c\u53f3\u952e\u5355\u51fb\u60a8\u7684\u9879\u76ee\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u70b9\u51fb",(0,t.jsx)(n.strong,{children:"\u6dfb\u52a0"}),"\u548c",(0,t.jsx)(n.strong,{children:"\u65b0\u5efa\u9879"})]}),"\n",(0,t.jsxs)(n.li,{children:["\u5728Avalonia\u9879\u76ee\u4e2d\uff0c\u70b9\u51fb ",(0,t.jsx)(n.strong,{children:"Styles(Avalonia)"})]}),"\n",(0,t.jsx)(n.li,{children:"\u4e3a\u60a8\u7684\u6837\u5f0f\u6587\u4ef6\u8f93\u5165\u4e00\u4e2a\u540d\u79f0"}),"\n"]}),"\n",(0,t.jsx)("img",{src:"/img/gitbook-import/assets/image (1) (4) (2).png",alt:""}),"\n",(0,t.jsxs)(n.p,{children:["\u8981\u4f7f\u7528\u5728\u4e00\u4e2a\u5355\u72ec\u6587\u4ef6\u4e2d\u5b9a\u4e49\u7684\u6837\u5f0f\uff0c\u60a8\u9700\u8981\u901a\u8fc7",(0,t.jsx)(n.code,{children:"StyleInclude"}),"\u5143\u7d20\u6765\u5f15\u7528\u5b83\u3002",(0,t.jsx)(n.code,{children:"source"}),"\u5c5e\u6027\u5b9a\u4e49\u4e86\u6837\u5f0f\u6587\u4ef6\u7684\u4f4d\u7f6e\u3002\u60a8\u53ef\u4ee5\u9009\u62e9\u5728\u54ea\u4e2a\u7ea7\u522b\u6dfb\u52a0\u8fd9\u4e2a\u5143\u7d20\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u8981\u4f7f\u7528\u5728\u540d\u4e3a",(0,t.jsx)(n.code,{children:"AppStyles.axaml"}),"\u7684\u6587\u4ef6\u4e2d\u5b9a\u4e49\u7684\u6837\u5f0f\uff08\u4fdd\u5b58\u5728",(0,t.jsx)(n.code,{children:"/Styles"}),"\u6587\u4ef6\u5939\u4e2d\uff09\uff0c\u60a8\u53ef\u4ee5\u5728\u7a97\u53e3\u4e2d\u6dfb\u52a0\u5982\u4e0b\u7684",(0,t.jsx)(n.code,{children:"StyleInclude"}),"\u5143\u7d20\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markup",children:'<Window ... >\n    <Window.Styles>\n        <StyleInclude Source="/Styles/AppStyles.axaml" />\n    </Window.Styles>\n\n    <StackPanel>\n       <TextBlock Classes="h1">Heading 1</TextBlock>\n       <TextBlock>This is not a heading and will not be changed.</TextBlock>\n    </StackPanel>\n</Window>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u7136\u800c\uff0c\u66f4\u5e38\u89c1\u7684\u662f\u5728",(0,t.jsx)(n.code,{children:"App.axaml"}),"\u6587\u4ef6\u4e2d\u5f15\u7528\u6837\u5f0f\u6587\u4ef6\uff0c\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<Application... > \n    <Application.Styles>\n        <FluentTheme Mode="Light"/>\n        <StyleInclude Source="/AppStyles.axaml"/>\n    </Application.Styles>\n</Application>\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u6837\u5c06\u5141\u8bb8\u60a8\u5728\u6574\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u6765\u81ea\u5355\u72ec\u6587\u4ef6\u7684\u6837\u5f0f\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u8fd8\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"avares://"})," \u524d\u7f00\u6765\u5305\u542b\u53e6\u4e00\u4e2a\u7a0b\u5e8f\u96c6\u7684\u6837\u5f0f\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<Application... > \n    <Application.Styles>\n        <FluentTheme Mode="Light"/>\n        <StyleInclude Source="avares://MyApp.Shared/Styles/CommonAppStyles.axaml"/>\n    </Application.Styles>\n</Application>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u5c06\u5f15\u7528 ",(0,t.jsx)(n.code,{children:"MyApp.Shared"})," \u9879\u76ee\u4e2d\u7684 ",(0,t.jsx)(n.code,{children:"/Styles/CommonAppStyles.axaml"})," \u6587\u4ef6\u3002"]})]})}function u(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>o});var t=s(67294);const l={},c=t.createContext(l);function o(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);