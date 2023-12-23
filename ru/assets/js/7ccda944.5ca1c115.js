"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[3358],{61425:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=t(85893),i=t(11151);const a={id:"how-to-use-theme-variants",title:"How To Use Theme Variants"},s=void 0,o={id:"guides/styles-and-resources/how-to-use-theme-variants",title:"How To Use Theme Variants",description:"Because theme variants are deeply integrated into resources system, it is important to understand the Avalonia resources first.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/guides/styles-and-resources/how-to-use-theme-variants.md",sourceDirName:"guides/styles-and-resources",slug:"/guides/styles-and-resources/how-to-use-theme-variants",permalink:"/avalonia-docs/ru/docs/guides/styles-and-resources/how-to-use-theme-variants",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/ru/docusaurus-plugin-content-docs/current/guides/styles-and-resources/how-to-use-theme-variants.md",tags:[],version:"current",frontMatter:{id:"how-to-use-theme-variants",title:"How To Use Theme Variants"},sidebar:"documentationSidebar",previous:{title:"How To Use Resources",permalink:"/avalonia-docs/ru/docs/guides/styles-and-resources/resources"},next:{title:"How To Use Custom Fonts",permalink:"/avalonia-docs/ru/docs/guides/styles-and-resources/how-to-use-fonts"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Switching current theme variant",id:"switching-current-theme-variant",level:2},{value:"<code>ActualThemeVariant</code> Property",id:"actualthemevariant-property",level:3},{value:"<code>RequestedThemeVariant</code> Property",id:"requestedthemevariant-property",level:3},{value:"Defining and referencing custom variant specific resources",id:"defining-and-referencing-custom-variant-specific-resources",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Because theme variants are deeply integrated into resources system, it is important to understand the Avalonia ",(0,r.jsx)(n.a,{href:"resources",children:"resources"})," first."]})}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(n.p,{children:["In Avalonia, a ",(0,r.jsx)(n.code,{children:"theme variant"})," refers to a specific visual appearance of control based on a chosen theme."]}),"\n",(0,r.jsx)(n.p,{children:"By using theme variants, developers can create visually appealing and consistent user interfaces that adapt to different user preferences or system settings. For example, an application may provide a light theme variant with a white background and black text, as well as a dark theme variant with a black background and white text. The user can choose their preferred theme, and the application will adjust its appearance accordingly."}),"\n",(0,r.jsxs)(n.p,{children:["Avalonia's built-in themes, ",(0,r.jsx)(n.code,{children:"SimpleTheme"})," and ",(0,r.jsx)(n.code,{children:"FluentTheme"}),", seamlessly support ",(0,r.jsx)(n.code,{children:"Dark"})," and ",(0,r.jsx)(n.code,{children:"Light"})," variants without extra code. This allows applications to adapt dynamically based on system preferences while using build-in controls. For advanced customization, this documentation explains defining custom variant-dependent resources and their referencing."]}),"\n",(0,r.jsx)(n.h2,{id:"switching-current-theme-variant",children:"Switching current theme variant"}),"\n",(0,r.jsxs)(n.p,{children:["By default, Avalonia inherits theme variant set by user preferences system-wide.\nApplication has control over theme variants through two important properties: ",(0,r.jsx)(n.a,{href:"#actualthemevariant-property",children:"ActualThemeVariant"})," and ",(0,r.jsx)(n.a,{href:"#requestedthemevariant-property",children:"RequestedThemeVariant"}),". These properties allow to manage and switch theme variants at different levels within your application."]}),"\n",(0,r.jsxs)(n.h3,{id:"actualthemevariant-property",children:[(0,r.jsx)(n.code,{children:"ActualThemeVariant"})," Property"]}),"\n",(0,r.jsxs)(n.p,{children:["The ActualThemeVariant read-only property is used to retrieve the UI theme currently in use by a control, window, or application. It represents the theme variant that is actively applied to the element.\nThis property is available on each control and is inherited down the tree. Its value also used by the styling system while accessing ",(0,r.jsx)(n.code,{children:"theme dictionaries"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"requestedthemevariant-property",children:[(0,r.jsx)(n.code,{children:"RequestedThemeVariant"})," Property"]}),"\n",(0,r.jsxs)(n.p,{children:["The RequestedThemeVariant property allows to override theme variant and specify a desired variant for a ",(0,r.jsx)(n.code,{children:"Application"}),", ",(0,r.jsx)(n.code,{children:"Window"})," (",(0,r.jsx)(n.code,{children:"TopLevel"}),") or ",(0,r.jsx)(n.code,{children:"ThemeVariantScope"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"To override global application variant instead of using system default:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",metastring:'title="App.axaml"',children:'<Application xmlns="https://github.com/avaloniaui"\n             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n             x:Class="AvaloniaApplication.App"\n    // highlight-start\n             RequestedThemeVariant="Dark">\n    // highlight-end\n  <Application.Styles>\n    <FluentTheme />\n  </Application.Styles>\n</Application>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Or it is possible to redefine theme variant per specific subtree using ",(0,r.jsx)(n.code,{children:"ThemeVariantScope"})," control. In the example below Window uses Dark variant, while ThemeVariantScope inside redefines it with Light variant:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",metastring:'title="MainWindow.axaml"',children:'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x=\'http://schemas.microsoft.com/winfx/2006/xaml\'\n        x:Class="AvaloniaApplication.MainWindow"\n    // highlight-start\n        RequestedThemeVariant="Dark"\n    // highlight-end\n        Background="Gray">\n  <StackPanel Spacing="5" Margin="5">\n    <Button Content="Dark button" />\n    // highlight-start\n    <ThemeVariantScope RequestedThemeVariant="Light">\n    // highlight-end\n      <Button Content="Light button" />\n    </ThemeVariantScope>\n  </StackPanel>\n</Window>\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Overriden Theme Variant",src:t(64052).Z+"",width:"150",height:"110"})}),"\n",(0,r.jsxs)(n.p,{children:["If it's required to use reset RequestedThemeVariant value, ",(0,r.jsx)(n.code,{children:'RequestedThemeVariant="Default"'})," value can be set on it."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Changing Window RequestedThemeVariant also affects window decorations variant on platform where it is supported."})}),"\n",(0,r.jsx)(n.h2,{id:"defining-and-referencing-custom-variant-specific-resources",children:"Defining and referencing custom variant specific resources"}),"\n",(0,r.jsxs)(n.p,{children:["In Avalonia, theme variant specific resources can be defined in the ",(0,r.jsx)(n.code,{children:"ResourceDictionary"})," using the ",(0,r.jsx)(n.code,{children:"ThemeDictionaries"})," property."]}),"\n",(0,r.jsxs)(n.p,{children:["Typically, developers use ",(0,r.jsx)(n.code,{children:"Light"})," or ",(0,r.jsx)(n.code,{children:"Dark"})," as the key for the theme variants. Using ",(0,r.jsx)(n.code,{children:"Default"})," as the key marks this specific theme dictionary as a fallback in case the theme variant or resource key is not found in other theme dictionaries."]}),"\n",(0,r.jsxs)(n.p,{children:["Continuing previous example, let's add ",(0,r.jsx)(n.code,{children:"BackgroundBrush"})," and ",(0,r.jsx)(n.code,{children:"ForegroundBrush"})," with different values per theme variant:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",metastring:'title="MainWindow.axaml"',children:'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x=\'http://schemas.microsoft.com/winfx/2006/xaml\'\n        x:Class="Sandbox.MainWindow"\n        RequestedThemeVariant="Dark"\n        Background="Gray">\n  <Window.Resources>\n    // highlight-start\n    <ResourceDictionary>\n      <ResourceDictionary.ThemeDictionaries>\n        <ResourceDictionary x:Key=\'Light\'>\n          <SolidColorBrush x:Key=\'BackgroundBrush\'>SpringGreen</SolidColorBrush>\n          <SolidColorBrush x:Key=\'ForegroundBrush\'>Black</SolidColorBrush>\n        </ResourceDictionary>\n        <ResourceDictionary x:Key=\'Dark\'>\n          <SolidColorBrush x:Key=\'BackgroundBrush\'>DodgerBlue</SolidColorBrush>\n          <SolidColorBrush x:Key=\'ForegroundBrush\'>White</SolidColorBrush>\n        </ResourceDictionary>\n      </ResourceDictionary.ThemeDictionaries>\n    </ResourceDictionary>\n    // highlight-end\n  </Window.Resources>\n  \n  <Window.Styles>\n    // highlight-start\n    <Style Selector="Button">\n      <Setter Property="Background" Value="{DynamicResource BackgroundBrush}" />\n      <Setter Property="Foreground" Value="{DynamicResource ForegroundBrush}" />\n    </Style>\n    // highlight-end\n  </Window.Styles>\n\n  <StackPanel Spacing="5" Margin="5">\n    <Button Content="Dark button"\n            Background="{DynamicResource BackgroundBrush}"\n            Foreground="{DynamicResource ForegroundBrush}" />\n    <ThemeVariantScope RequestedThemeVariant="Light">\n      <Button Content="Light button"\n              Background="{DynamicResource BackgroundBrush}"\n              Foreground="{DynamicResource ForegroundBrush}" />\n    </ThemeVariantScope>\n  </StackPanel>\n</Window>\n\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Custom Theme Dictionaries",src:t(60718).Z+"",width:"163",height:"113"})}),"\n",(0,r.jsxs)(n.p,{children:["For more details about using resources please follow ",(0,r.jsx)(n.a,{href:"resources",children:"How To Use Resources"})," page."]})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},60718:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAABxCAMAAACOROOWAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACTUExURR6Q/9v//wD/YwCmKU+IvwAAAP///4CAgAD/f0C/fwCmc9vV/wBVUv/u/wDjUgCCAADjfwAAKfH//wCCYx7B/wAAQoPj/8XB//Hj/6iQ///4/4OQ/wDHf6ju/8X4/x7V/wBVAADHQgD/c1aGtnWCjh+Q/km2fwH+f3KOgF2GrlKugACCKYPV/wBVKd3u/wCmaPH4/93VSswAAALxSURBVHja7dl9e5owEABwIsJQQDqrVTZBUWtt9/r9P93ucgmBVrfhw6vP5Q+IIZgfyR21YH3qf7HYyEY2spGNbGQjGxs1Hg/jNsvhWN34+my1W55fqxqPbRMBeaxoPFjtl0NF47gD45iNbGQjG+/JKPzCh6cvXzszChdL2G/jGrep699iTMIP/ZozWk/uqvfGfN9nYwKGLYamL0dNIERx7MXcjbURQzfGKceWrbuS3d2fOp5TtV/MVwn1rNuII6exWnTxm6QwXpjP4zxGR2yMpXmkngKuFC4LGtLSvNdnzFdYqLENUQcsdL9spOpijte11sebMMIUuO5aNwpfhO/jMQ2vGFVQwnFYa6WtPR5DvFeuqIEGFMWg+odRkxo1wkCJZBSMfmqQ2rgGXUfziCEujVu3YLQMkuIRR6ZIS94Z00I8NmJczJFHKV0ywsdYG7GL0Bu476x0oqWhyevQasIob3KUg/K2JkpGOO6rtf6u/65jZoU0mzJkt9QuKN8aMPLvRzaykY1sZGO9xiE8Ix3Cs+YhPLMfxLsPfs/FRjbeofF8mrRbTueqxrcXr+3y8lbNeG6fCMhzJePJ66KcKhknnRgnbGQjG9l4F0Y7uNAYPXZjHDnT0n6QxpGz+Ztx9vkh3zZtvLrWbLxhrWeO4wT2Eo0jqIIpcmhPRnnc8/Y72RIF+x0e/iW3U/wS2pvT6zdmOGe2s1SbGY1r5vFHgJ8DYyzPY4b9Z0gzp9dt3O9kPUKjHDQKysalXF1nc9moTs+gbk6v2zgjDq21rn2IR+h52aiCEr/JnF63MaNBbjVmfTJuVK2LeaT6fnfVuNTxJiMNs6doVF8l47ExI6Rjntf5IGpdpRFTVuatzODICfT5tFV5PfVqN8rySKPYeH8rrzWMbO6Ptrr/yY4bOZu2Q1dHPmz26jb+72+efv02KyxuH43fHvLM6K0Ro8xpZKX5/xk2spGNQ3hGOoRnzUN4Zj+Idx/8nouNbGQjG9nIRjZWKH8AGjG9L+A08FgAAAAASUVORK5CYII="},64052:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABuCAMAAADyHhqkAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABgUExURWZmZgAAAO///5uZ14yMjP7//uzSmYCAgJmZmXNzc1ZmZmVmT1xCITUAACFCXD1XZksvAGZYPv/96wEiQtCZmQABMCEAF970///v1wA0T8fl+ZnG5fnkyJmZx5nY7087IaVJzdcAAAK/SURBVHja7dmLcqowEABQgoYLiDy0CEWk//+X3d0sr6tWp0ZMx81MwyOEHJJNyqD3z8nkCUtYwhKWsITlBGu9bLqPtQ6XTut7WOHy6Q7W+gWstbCEJSxhvS9r5QeTo2b3sSBr5WtMtXOsFvJTpYPfsKr67DqbLGj13OUCq986xgoraLbDMAuooUrX1NxRM6fZYRjigQF2OqDLdz7HJgSCidGjhtp6/hS/ZkFjp+rDjCYADA6a6CdDgw2dED+wZr1FV658KDvio9GVdljD0K18bm5UcfDh5ZdZtIs9BX9tX26JdcQBafkk5H79X2ydoPWLLA4wLD/qgIE2Yqs2Y4cnTBtwOBmIGyxW2GbhvSkcpqx2EiA9qw275XqLIpQQnR5ZwSRwm6ExEzXVnHWaxpYtllkGeBJOWGZqjTORDinraCWhLjQinol1aImlebGiHtC76SDS4HBZs2v6/504MerOrCHaEGu+UxvaYcn7lrCEJSxhCWsJlqMfKV39pOvoB3D5FUNYwnKDFS2d7mFF3vIpus3yXpFusqKXsCJhCUtYwnpHVrKPz0/mn4uxNtt0tv0rrM02+4lVHLIhfwLr6iAK6+ogFgel9l9lDKzNVilg5ErR1rCoPO6B+T6m4tTkeBOzHatbYRUKHjpRyMKsOKTz3iqBtNlCNrBmvVUgqTh8epPqNlh5aloHVplxuzNWzITLLFO9gKpjdQssjpCEBjHmvbPYwisvsrg6lo/VbbDKx1jla1nZsr3F+/lVloktwFPUUPBPWFydYssmCybQMBPH+46rVY5TnmYazblc0YxIx+XFzMTUs8FStDKZGye47swHERob162E1yW6MKM+S+iMyXFZwyd7nHXv28PrX2weelF4BusrGwLbJRZGjHrKEMq7vLCEJaxHWI5+pHT1k66jH8DlVwxhCUtYwhLWW7K+AdRLg9Z8GfBQAAAAAElFTkSuQmCC"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var r=t(67294);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);