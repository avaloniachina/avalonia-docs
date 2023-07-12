"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[77614],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||l;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,a[1]=i;for(var u=2;u<l;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},22725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const l={id:"troubleshooting",title:"How To Troubleshoot Styles"},a="\ud83d\udc49 How To Troubleshoot Styles",i={unversionedId:"guides/styles-and-resources/troubleshooting",id:"guides/styles-and-resources/troubleshooting",title:"How To Troubleshoot Styles",description:"Much of the Avalonia UI styling system corresponds to CSS styling approaches. So without knowledge of this technology, you may find the hints here helpful.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/styles-and-resources/troubleshooting.md",sourceDirName:"guides/styles-and-resources",slug:"/guides/styles-and-resources/troubleshooting",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/styles-and-resources/troubleshooting",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/styles-and-resources/troubleshooting.md",tags:[],version:"current",frontMatter:{id:"troubleshooting",title:"How To Troubleshoot Styles"},sidebar:"documentationSidebar",previous:{title:"How To Use Custom Fonts",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/styles-and-resources/how-to-use-fonts"},next:{title:"How To Draw Graphics",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/graphics-and-animation/graphics-and-animations"}},s={},u=[{value:"Selector has no Targets",id:"selector-has-no-targets",level:2},{value:"Include File Sequence",id:"include-file-sequence",level:2},{value:"Locally Set Properties Have Priority",id:"locally-set-properties-have-priority",level:2},{value:"Missing style pseudo class (trigger) selector",id:"missing-style-pseudo-class-trigger-selector",level:3},{value:"Selector with a pseudoclass doesn&#39;t override the default",id:"selector-with-a-pseudoclass-doesnt-override-the-default",level:3},{value:"Previous value of specific properties is not restored when style is not applied anymore",id:"previous-value-of-specific-properties-is-not-restored-when-style-is-not-applied-anymore",level:3}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-how-to-troubleshoot-styles"},"\ud83d\udc49 How To Troubleshoot Styles"),(0,r.kt)("p",null,"Much of the ",(0,r.kt)("em",{parentName:"p"},"Avalonia UI")," styling system corresponds to CSS styling approaches. So without knowledge of this technology, you may find the hints here helpful."),(0,r.kt)("h2",{id:"selector-has-no-targets"},"Selector has no Targets"),(0,r.kt)("p",null,"An ",(0,r.kt)("em",{parentName:"p"},"Avalonia UI")," selector, like a CSS selector, does not raise an error or warning when there are no controls which can be matched. The style will silently fail to show."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Check whether you have used a name or class that does not exist."," ")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Check whether you have used a child selector where there are no children to match.")),(0,r.kt)("h2",{id:"include-file-sequence"},"Include File Sequence"),(0,r.kt)("p",null,"Styles are applied in order of declaration. If there are multiple style files included that target the same control property, the last style included will override the previous ones. For example:"),(0,r.kt)("p",null,'{% code title="Styles2.axaml" %}'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'<Style Selector="TextBlock.header">\n    <Style Property="Foreground" Value="Green" />\n</Style>\n')),(0,r.kt)("p",null,"{% endcode %}"),(0,r.kt)("p",null,'{% code title="Styles1.axaml" %}'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'<Style Selector="TextBlock.header">\n    <Style Property="Foreground" Value="Blue" />\n    <Style Property="FontSize" Value="16" />\n</Style>c\n')),(0,r.kt)("p",null,"{% endcode %}"),(0,r.kt)("p",null,'{% code title="App.axaml" %}'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'<StyleInclude Source="Style1.axaml" />\n<StyleInclude Source="Style2.axaml" />\n')),(0,r.kt)("p",null,"{% endcode %}"),(0,r.kt)("p",null,"Here styles from file ",(0,r.kt)("strong",{parentName:"p"},"Styles1.axaml")," were applied first, so setters in styles of file ",(0,r.kt)("strong",{parentName:"p"},"Styles2.axaml"),' take priority. The resulting TextBlock will have FontSize="16" and Foreground="Green". The same order prioritization happens within style files also.'),(0,r.kt)("h2",{id:"locally-set-properties-have-priority"},"Locally Set Properties Have Priority"),(0,r.kt)("p",null,"A local value defined directly on a control often has higher priority than any style value. So in this example the text block will have a red foreground:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'<Style Selector="TextBlock.header">\n    <Setter Property="Foreground" Value="Green" />\n</Style>\n...\n<TextBlock Classes="header" Foreground="Red" />\n')),(0,r.kt)("p",null,"You can see the full list of value priorities in the ",(0,r.kt)("inlineCode",{parentName:"p"},"BindingPriority")," enum, where lower enum values have the higher priority."," "),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{width:"218"},"BindingPriority "),(0,r.kt)("th",{width:"147.33333333333331"},"Value"),(0,r.kt)("th",null,"Comment"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"Animation")),(0,r.kt)("td",null,"-1"),(0,r.kt)("td",null,"The highest priority - even overrides a local value")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"LocalValue")),(0,r.kt)("td",null,"0"),(0,r.kt)("td",null,"A local value is set on the property of the control.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"StyleTrigger")),(0,r.kt)("td",null,"1"),(0,r.kt)("td",null,"This is triggered when a pseudo class becomes active.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"TemplatedParent")),(0,r.kt)("td",null,"2"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"Style")),(0,r.kt)("td",null,"3"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"Unset")),(0,r.kt)("td",null,"2147483647"),(0,r.kt)("td",null)))),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The exception is that ",(0,r.kt)("inlineCode",{parentName:"p"},"Animation")," values have the highest priority and can even override local values.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Some default ",(0,r.kt)("em",{parentName:"p"},"Avalonia UI")," styles use local values in their templates instead of template bindings or style setters. This makes it impossible to update the template property without replacing the whole template.")),(0,r.kt)("h3",{id:"missing-style-pseudo-class-trigger-selector"},"Missing style pseudo class (trigger) selector"),(0,r.kt)("p",null,"Let's imagine a situation in which you might expect a second style to override previous one, but it doesn't:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'<Style Selector="Border:pointerover">\n    <Setter Property="Background" Value="Blue" />\n</Style>\n<Style Selector="Border">\n    <Setter Property="Background" Value="Red" />\n</Style>\n...\n<Border Width="100" Height="100" Margin="100" />\n')),(0,r.kt)("p",null,"With this code example the ",(0,r.kt)("inlineCode",{parentName:"p"},"Border")," has a Red background normally and Blue when the pointer is over it. This is because as with CSS more specific selectors have precedence. It is an issue, when you want to override default styles of any state (pointerover, pressed or others) with a single style. To achieve it you will need to have new styles for these states as well."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Visit the Avalonia source code to find the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Themes.Fluent/Controls"},"original templates")," when this happens and copy and paste the styles with pseudoclasses into your code.")),(0,r.kt)("h3",{id:"selector-with-a-pseudoclass-doesnt-override-the-default"},"Selector with a pseudoclass doesn't override the default"),(0,r.kt)("p",null,"The following code example of styles that can be expected to work on top of default styles:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'<Style Selector="Button">\n    <Setter Property="Background" Value="Red" />\n</Style>\n<Style Selector="Button:poinverover">\n    <Setter Property="Background" Value="Blue" />\n</Style>\n')),(0,r.kt)("p",null,"You might expect the ",(0,r.kt)("inlineCode",{parentName:"p"},"Button")," to be red by default and blue when pointer is over it. In fact, only setter of first style will be applied, and second one will be ignored."),(0,r.kt)("p",null,"The reason is hidden in the Button's template. You can find the default templates in the Avalonia source code (old ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Themes.Default/Button.xaml"},"Default")," theme and new ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Themes.Fluent/Controls/Button.xaml"},"Fluent")," theme), but for convenience here we have simplified one from the Fluent theme:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'<Style Selector="Button">\n    <Setter Property="Background" Value="{DynamicResource ButtonBackground}"/>\n    <Setter Property="Template">\n        <ControlTemplate>\n            <ContentPresenter Name="PART_ContentPresenter"\n                              Background="{TemplateBinding Background}"\n                              Content="{TemplateBinding Content}"/>\n        </ControlTemplate>\n    </Setter>\n</Style>\n<Style Selector="Button:pointerover /template/ ContentPresenter#PART_ContentPresenter">\n    <Setter Property="Background" Value="{DynamicResource ButtonBackgroundPointerOver}" />\n</Style>\n')),(0,r.kt)("p",null,"The actual background is rendered by a ",(0,r.kt)("inlineCode",{parentName:"p"},"ContentPresenter"),", which in the default is bound to the Buttons ",(0,r.kt)("inlineCode",{parentName:"p"},"Background")," property. However in the pointer-over state the selector is directly applying the background to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ContentPresenter (Button:pointerover /template/ ContentPresenter#PART_ContentPresenter"),") That's why when our setter was ignored in the previous code example. The corrected code should target content presenter directly as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'\x3c!-- Here #PART_ContentPresenter name selector is not necessary, but was added to have more specific style --\x3e\n<Style Selector="Button:pointerover /template/ ContentPresenter#PART_ContentPresenter">\n    <Setter Property="Background" Value="Blue" />\n</Style>\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can see this behavior for all controls in the default themes (both old Default and the new Fluent), not just Button. And not just for Background, but also other state-dependent properties.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Why default styles change the ContentPresenter ",(0,r.kt)("inlineCode",{parentName:"p"},"Background")," property directly instead of changing the ",(0,r.kt)("inlineCode",{parentName:"p"},"Button.Background")," property?"),(0,r.kt)("p",{parentName:"admonition"},"This is because if the user were to set a local value on the button, it would override all styles, and make button always the same color. For more details see this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/pull/2662#issuecomment-515764732"},"reverted PR"),".")),(0,r.kt)("h3",{id:"previous-value-of-specific-properties-is-not-restored-when-style-is-not-applied-anymore"},"Previous value of specific properties is not restored when style is not applied anymore"),(0,r.kt)("p",null,"In Avalonia we have multiple types of properties, and one of them, Direct Property, doesn't support styling at all. These properties work in simplified way to achieve lower overhead and higher performance, and do not store multiple values depending on priority. Instead only latest value is saved and cannot be restored. You can find more details about properties ",(0,r.kt)("a",{parentName:"p",href:"../custom-controls/defining-properties"},"here"),"."),(0,r.kt)("p",null,"Typical example is ",(0,r.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/Button/B9689B29"},"CommandProperty"),". It is defined as a DirectProperty, and it will never work properly. In the future attempt to style direct property will be resulted in compile time error, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/issues/6837"},"#6837"),"."))}c.isMDXComponent=!0}}]);