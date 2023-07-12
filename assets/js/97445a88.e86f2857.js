"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[58817],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(o),h=n,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||a;return o?r.createElement(m,l(l({ref:t},d),{},{components:o})):r.createElement(m,l({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<a;p++)l[p]=o[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},74831:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=o(87462),n=(o(67294),o(3905));const a={id:"troubleshooting",title:"Troubleshooting"},l=void 0,i={unversionedId:"styling/troubleshooting",id:"version-0.10.x/styling/troubleshooting",title:"Troubleshooting",description:"Avalonia styling system is a mix of XAML and CSS styling approaches, so developers with knowledge of only one of these technologies can be confused by details of another one.",source:"@site/versioned_docs/version-0.10.x/styling/troubleshooting.md",sourceDirName:"styling",slug:"/styling/troubleshooting",permalink:"/avalonia-docs/docs/styling/troubleshooting",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/styling/troubleshooting.md",tags:[],version:"0.10.x",frontMatter:{id:"troubleshooting",title:"Troubleshooting"},sidebar:"documentationSidebar",previous:{title:"Resources",permalink:"/avalonia-docs/docs/styling/resources"},next:{title:"Controls",permalink:"/avalonia-docs/docs/controls/"}},s={},p=[{value:"Selector targets a control that doesn&#39;t exist",id:"selector-targets-a-control-that-doesnt-exist",level:3},{value:"Target property is overridden by another style",id:"target-property-is-overridden-by-another-style",level:3},{value:"Locally set Properties override Styles",id:"locally-set-properties-override-styles",level:3},{value:"Missing style pseudoclass (trigger) selector",id:"missing-style-pseudoclass-trigger-selector",level:3},{value:"Selector with a pseudoclass doesn&#39;t override the default",id:"selector-with-a-pseudoclass-doesnt-override-the-default",level:3},{value:"Previous value of specific properties is not restored when style is not applied anymore",id:"previous-value-of-specific-properties-is-not-restored-when-style-is-not-applied-anymore",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Avalonia styling system is a mix of XAML and CSS styling approaches, so developers with knowledge of only one of these technologies can be confused by details of another one."),(0,n.kt)("p",null,"Let's imagine a problem when one or all style setters are not applied to the control. Below we will list common possible reasons and solutions."),(0,n.kt)("h3",{id:"selector-targets-a-control-that-doesnt-exist"},"Selector targets a control that doesn't exist"),(0,n.kt)("p",null,"Avalonia selectors, like CSS selectors, do not raise any errors or warnings, when there are no controls which can be matched by the selector. This includes using a name or class that doesn't exist or a child selector when there are no children to match the inner selector. The reason is simple, one style can target many controls, that can be created or removed at runtime, so there is no possible way to validate the selector."),(0,n.kt)("h3",{id:"target-property-is-overridden-by-another-style"},"Target property is overridden by another style"),(0,n.kt)("p",null,"Styles are applied in order of declaration. If there are ",(0,n.kt)("strong",{parentName:"p"},"multiple")," style files that target the same control property, one style can override the other:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markup",metastring:'title="Styles1.axaml"',title:'"Styles1.axaml"'},'<Style Selector="TextBlock.header">\n    <Style Property="Foreground" Value="Blue" />\n    <Style Property="FontSize" Value="16" />\n</Style>\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markup",metastring:'title="Styles2.axaml"',title:'"Styles2.axaml"'},'<Style Selector="TextBlock.header">\n    <Style Property="Foreground" Value="Green" />\n</Style>\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markup",metastring:'title="App.axaml"',title:'"App.axaml"'},'<StyleInclude Source="Style1.axaml" />\n<StyleInclude Source="Style2.axaml" />\n')),(0,n.kt)("p",null,"Here styles from file ",(0,n.kt)("strong",{parentName:"p"},"Styles1.axaml")," were applied first, so setters in styles of file ",(0,n.kt)("strong",{parentName:"p"},"Styles2.axaml"),' take priority. The resulting TextBlock will have FontSize="16" and Foreground="Green". The same order prioritization happens within style files also.'),(0,n.kt)("h3",{id:"locally-set-properties-override-styles"},"Locally set Properties override Styles"),(0,n.kt)("p",null,"Similarly, to WPF, Avalonia properties can have multiple values, often of different priorities."," "),(0,n.kt)("p",null,"In this example you can see that local value (defined directly on the control) has higher priority than style value, so text block will have red foreground:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markup"},'<TextBlock Classes="header" Foreground="Red" />\n...\n<Style Selector="TextBlock.header">\n    <Setter Property="Foreground" Value="Green" />\n</Style>\n')),(0,n.kt)("p",null,"You can see the full list of value priorities in the ",(0,n.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Data/BindingPriority/"},"BindingPriority")," enum, where lower enum values have higher priority. For example ",(0,n.kt)("inlineCode",{parentName:"p"},"Animation")," values have the highest priority and even override local values."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Some default Avalonia styles use local values in their templates instead of template bindings or styles-setters, which makes it impossible to update template property without replacing whole template.")),(0,n.kt)("h3",{id:"missing-style-pseudoclass-trigger-selector"},"Missing style pseudoclass (trigger) selector"),(0,n.kt)("p",null,"Let's imagine a situation in which you might expect a second style to override previous one, but it doesn't:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markup"},'<Style Selector="Border:pointerover">\n    <Setter Property="Background" Value="Blue" />\n</Style>\n<Style Selector="Border">\n    <Setter Property="Background" Value="Red" />\n</Style>\n...\n<Border Width="100" Height="100" Margin="100" />\n')),(0,n.kt)("p",null,"With this code example the ",(0,n.kt)("inlineCode",{parentName:"p"},"Border")," has a Red background normally and Blue when the pointer is over it. This is because as with CSS more specific selectors have precedence. It is an issue, when you want to override default styles of any state (pointerover, pressed or others) with a single style. To achieve it you will need to have new styles for these states as well."," "),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Visit the Avalonia source code to find the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Themes.Fluent/Controls"},"original templates")," when this happens and copy and paste the styles with pseudoclasses into your code.")),(0,n.kt)("h3",{id:"selector-with-a-pseudoclass-doesnt-override-the-default"},"Selector with a pseudoclass doesn't override the default"),(0,n.kt)("p",null,"The following code example of styles that can be expected to work on top of default styles:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markup"},'<Style Selector="Button">\n    <Setter Property="Background" Value="Red" />\n</Style>\n<Style Selector="Button:poinverover">\n    <Setter Property="Background" Value="Blue" />\n</Style>\n')),(0,n.kt)("p",null,"You might expect the ",(0,n.kt)("inlineCode",{parentName:"p"},"Button")," to be red by default and blue when pointer is over it. In fact, only setter of first style will be applied, and second one will be ignored."," "),(0,n.kt)("p",null,"The reason is hidden in the Button's template. You can find the default templates in the Avalonia source code (old ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Themes.Default/Button.xaml"},"Default")," theme and new ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Themes.Fluent/Controls/Button.xaml"},"Fluent")," theme), but for convenience here we have simplified one from the Fluent theme:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markup"},'<Style Selector="Button">\n    <Setter Property="Background" Value="{DynamicResource ButtonBackground}"/>\n    <Setter Property="Template">\n        <ControlTemplate>\n            <ContentPresenter Name="PART_ContentPresenter"\n                              Background="{TemplateBinding Background}"\n                              Content="{TemplateBinding Content}"/>\n        </ControlTemplate>\n    </Setter>\n</Style>\n<Style Selector="Button:pointerover /template/ ContentPresenter#PART_ContentPresenter">\n    <Setter Property="Background" Value="{DynamicResource ButtonBackgroundPointerOver}" />\n</Style>\n')),(0,n.kt)("p",null,"The actual background is rendered by a ",(0,n.kt)("inlineCode",{parentName:"p"},"ContentPresenter"),", which in the default is bound to the Buttons ",(0,n.kt)("inlineCode",{parentName:"p"},"Background")," property. However in the pointer-over state the selector is directly applying the background to the ",(0,n.kt)("inlineCode",{parentName:"p"},"ContentPresenter (Button:pointerover /template/ ContentPresenter#PART_ContentPresenter"),") That's why when our setter was ignored in the previous code example. The corrected code should target content presenter directly as well:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markup"},'\x3c!-- Here #PART_ContentPresenter name selector is not necessary, but was added to have more specific style --\x3e\n<Style Selector="Button:pointerover /template/ ContentPresenter#PART_ContentPresenter">\n    <Setter Property="Background" Value="Blue" />\n</Style>\n')),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You can see this behavior for all controls in the default themes (both old Default and the new Fluent), not just Button. And not just for Background, but also other state-dependent properties.")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Why default styles change the ContentPresenter ",(0,n.kt)("inlineCode",{parentName:"p"},"Background")," property directly instead of changing the ",(0,n.kt)("inlineCode",{parentName:"p"},"Button.Background")," property?"," "),(0,n.kt)("p",{parentName:"admonition"},"This is because if the user were to set a local value on the button, it would override all styles, and make button always the same color. For more details see this ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/pull/2662#issuecomment-515764732"},"reverted PR"),".")),(0,n.kt)("h3",{id:"previous-value-of-specific-properties-is-not-restored-when-style-is-not-applied-anymore"},"Previous value of specific properties is not restored when style is not applied anymore"),(0,n.kt)("p",null,"In Avalonia we have multiple types of properties, and one of them, Direct Property, doesn't support styling at all. These properties work in simplified way to achieve lower overhead and higher performance, and do not store multiple values depending on priority. Instead only latest value is saved and cannot be restored. You can find more details about properties ",(0,n.kt)("a",{parentName:"p",href:"/avalonia-docs/docs/authoring-controls/defining-properties#direct-avaloniaproperties"},"here"),"."),(0,n.kt)("p",null,"Typical example is ",(0,n.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/Button/B9689B29"},"CommandProperty"),". It is defined as a DirectProperty, and it will never work properly.\nIn the future attempt to style direct property will be resulted in compile time error, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/issues/6837"},"#6837"),"."))}u.isMDXComponent=!0}}]);