"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[43250],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||l;return n?o.createElement(d,r(r({ref:t},c),{},{components:n})):o.createElement(d,r({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,r[1]=i;for(var p=2;p<l;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},53808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const l={id:"control-themes",title:"Control Themes"},r=void 0,i={unversionedId:"basics/user-interface/styling/control-themes",id:"basics/user-interface/styling/control-themes",title:"Control Themes",description:"Control themes build upon Styles to create switchable themes for controls. Control themes are analogous to Styles in WPF/UWP, though their mechanism is slightly different.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/basics/user-interface/styling/control-themes.md",sourceDirName:"basics/user-interface/styling",slug:"/basics/user-interface/styling/control-themes",permalink:"/avalonia-docs/zh-Hans/docs/next/basics/user-interface/styling/control-themes",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/basics/user-interface/styling/control-themes.md",tags:[],version:"current",frontMatter:{id:"control-themes",title:"Control Themes"},sidebar:"documentationSidebar",previous:{title:"Style Classes",permalink:"/avalonia-docs/zh-Hans/docs/next/basics/user-interface/styling/style-classes"},next:{title:"Themes",permalink:"/avalonia-docs/zh-Hans/docs/next/basics/user-interface/styling/themes/"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Example: Round Button",id:"example-round-button",level:2},{value:"Interaction in Control Themes",id:"interaction-in-control-themes",level:2},{value:"Example: Round Button Hover State",id:"example-round-button-hover-state",level:2},{value:"Control Theme Lookup",id:"control-theme-lookup",level:2},{value:"Example: Make all the Buttons Round",id:"example-make-all-the-buttons-round",level:2},{value:"TargetType",id:"targettype",level:2},{value:"Additional Resources",id:"additional-resources",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...l}=e;return(0,a.kt)(m,(0,o.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Control themes build upon ",(0,a.kt)("a",{parentName:"p",href:"styles"},"Styles")," to create switchable themes for controls. Control themes are analogous to Styles in WPF/UWP, though their mechanism is slightly different."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Because control themes are based on styles, it is important to understand the Avalonia ",(0,a.kt)("a",{parentName:"p",href:"styles"},"styling system")," first.")),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Before Avalonia 11, control themes were created using standard styles. However, this approach had a fundamental problem: once a style was applied to a control, there was no way to remove it. Consequently, if you wanted to change the theme for a specific instance of a control or a section of the user interface (UI), the only option was to apply a second theme to the control and hope that it would override all the properties set in the original theme."),(0,a.kt)("p",null,"The solution for this was introduced in Avalonia 11 in the form of ",(0,a.kt)("em",{parentName:"p"},"Control Themes"),"."),(0,a.kt)("p",null,"Control themes are themselves styles, but with some important differences:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Control themes don't have a selector: instead they have a ",(0,a.kt)("inlineCode",{parentName:"li"},"TargetType")," property which describes the control that they target"),(0,a.kt)("li",{parentName:"ul"},"Control themes are stored in a ",(0,a.kt)("inlineCode",{parentName:"li"},"ResourceDictionary")," instead of a ",(0,a.kt)("inlineCode",{parentName:"li"},"Styles")," collection"),(0,a.kt)("li",{parentName:"ul"},"Control themes are assigned to a control by setting the ",(0,a.kt)("inlineCode",{parentName:"li"},"Theme")," property, usually using the ",(0,a.kt)("inlineCode",{parentName:"li"},"{StaticResource}")," markup extension")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Control themes are typically applied to ",(0,a.kt)("a",{parentName:"p",href:"/avalonia-docs/zh-Hans/docs/next/basics/user-interface/controls/creating-controls/choosing-a-custom-contro-type"},"templated (lookless)")," controls, but they can actually be applied to any control. However, for non-templated controls, it is often more convenient to use standard styles instead.")),(0,a.kt)("h2",{id:"example-round-button"},"Example: Round Button"),(0,a.kt)("p",null,"The following example shows a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"Button")," theme which displays a button with an ellipse background with a 90's geocities aesthetic:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="App.axaml"',title:'"App.axaml"'},'<Application xmlns="https://github.com/avaloniaui"\n             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n             x:Class="AvaloniaApplication.App">\n  <Application.Styles>\n    <FluentTheme />\n  </Application.Styles>\n\n  <Application.Resources>\n    // highlight-start\n    <ControlTheme x:Key="EllipseButton" TargetType="Button">\n      <Setter Property="Background" Value="Blue"/>\n      <Setter Property="Foreground" Value="Yellow"/>\n      <Setter Property="Padding" Value="8"/>\n      <Setter Property="Template">\n        <ControlTemplate>\n          <Panel>\n            <Ellipse Fill="{TemplateBinding Background}"\n                     HorizontalAlignment="Stretch"\n                     VerticalAlignment="Stretch"/>\n            <ContentPresenter x:Name="PART_ContentPresenter"\n                              Content="{TemplateBinding Content}"\n                              Margin="{TemplateBinding Padding}"/>\n          </Panel>\n        </ControlTemplate>\n      </Setter>\n    </ControlTheme>\n    // highlight-end\n  </Application.Resources>\n</Application>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title='MainWindow.xaml'",title:"'MainWindow.xaml'"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x=\'http://schemas.microsoft.com/winfx/2006/xaml\'\n        x:Class="Sandbox.MainWindow">\n  // highlight-start\n  <Button Theme="{StaticResource EllipseButton}"\n          HorizontalAlignment="Center"\n          VerticalAlignment="Center">\n    Hello World!\n  </Button>\n  // highlight-end\n</Window>\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Ellipe Button",src:n(38754).Z,width:"182",height:"93"})),(0,a.kt)("h2",{id:"interaction-in-control-themes"},"Interaction in Control Themes"),(0,a.kt)("p",null,"Like standard styles, control themes support ",(0,a.kt)("a",{parentName:"p",href:"/avalonia-docs/zh-Hans/docs/next/basics/user-interface/styling/styles#nesting-styles"},"nested styles")," which can be used to add interactions such as pointer-over and pressed states."),(0,a.kt)("h2",{id:"example-round-button-hover-state"},"Example: Round Button Hover State"),(0,a.kt)("p",null,"Using nested styles we can make our button change color when the pointer is hovered over it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="App.axaml"',title:'"App.axaml"'},'<Application xmlns="https://github.com/avaloniaui"\n             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n             x:Class="AvaloniaApplication.App">\n  <Application.Styles>\n    <FluentTheme />\n  </Application.Styles>\n\n  <Application.Resources>\n    <ControlTheme x:Key="EllipseButton" TargetType="Button">\n      <Setter Property="Background" Value="Blue"/>\n      <Setter Property="Foreground" Value="Yellow"/>\n      <Setter Property="Padding" Value="8"/>\n      <Setter Property="Template">\n        <ControlTemplate>\n          <Panel>\n            <Ellipse Fill="{TemplateBinding Background}"\n                     HorizontalAlignment="Stretch"\n                     VerticalAlignment="Stretch"/>\n            <ContentPresenter x:Name="PART_ContentPresenter"\n                              Content="{TemplateBinding Content}"\n                              Margin="{TemplateBinding Padding}"/>\n          </Panel>\n        </ControlTemplate>\n      </Setter>\n      \n      // highlight-start\n      <Style Selector="^:pointerover">\n        <Setter Property="Background" Value="Red"/>\n        <Setter Property="Foreground" Value="White"/>\n      </Style>\n      // highlight-end\n    </ControlTheme>\n  </Application.Resources>\n</Application>\n')),(0,a.kt)("h2",{id:"control-theme-lookup"},"Control Theme Lookup"),(0,a.kt)("p",null,"There a two ways in which a control theme can be found:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the control's ",(0,a.kt)("inlineCode",{parentName:"li"},"Theme")," property is set, then that control theme will be used; otherwise"),(0,a.kt)("li",{parentName:"ul"},"Avalonia will search the upwards through the logical tree for a ",(0,a.kt)("inlineCode",{parentName:"li"},"ControlTheme")," resource with an ",(0,a.kt)("inlineCode",{parentName:"li"},"x:Key")," which matches the control's ",(0,a.kt)("a",{parentName:"li",href:"styles#style-key"},"style key"))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you're having trouble getting Avalonia to find your theme, make sure it's returning a ",(0,a.kt)("a",{parentName:"p",href:"styles#style-key"},"style key")," which matches the ",(0,a.kt)("inlineCode",{parentName:"p"},"x:Key")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TargetType")," of your control theme")),(0,a.kt)("p",null,"In effect this means that you have two choices for how to define your control theme:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"If you want the control theme to apply to all instances of the control")," then use an ",(0,a.kt)("inlineCode",{parentName:"li"},"{x:Type}")," as the resource key. For example\n",(0,a.kt)("inlineCode",{parentName:"li"},'<ControlTheme x:Key="{x:Type Button}" TargetType="Button">')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"If you want the control theme to be applied to selected instances of the control")," then use anything else as the resource key and look up this resource using ",(0,a.kt)("inlineCode",{parentName:"li"},"{StaticResource}"),". Commonly this key will be a ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Notice that this means that only a single control theme can be applied to a control at any one time.")),(0,a.kt)("h2",{id:"example-make-all-the-buttons-round"},"Example: Make all the Buttons Round"),(0,a.kt)("p",null,"We can apply our new control theme to all of the buttons in the application by simply changing the ",(0,a.kt)("inlineCode",{parentName:"p"},"x:Key")," of the control theme to match the ",(0,a.kt)("inlineCode",{parentName:"p"},"Button")," type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="App.axaml"',title:'"App.axaml"'},'<Application xmlns="https://github.com/avaloniaui"\n             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n             x:Class="AvaloniaApplication.App">\n  <Application.Styles>\n    <FluentTheme />\n  </Application.Styles>\n\n  <Application.Resources>\n      // highlight-next-line\n    <ControlTheme x:Key="{x:Type Button}" TargetType="Button">\n      <Setter Property="Background" Value="Blue"/>\n      <Setter Property="Foreground" Value="Yellow"/>\n      <Setter Property="Padding" Value="8"/>\n      <Setter Property="Template">\n        <ControlTemplate>\n          <Panel>\n            <Ellipse Fill="{TemplateBinding Background}"\n                     HorizontalAlignment="Stretch"\n                     VerticalAlignment="Stretch"/>\n            <ContentPresenter x:Name="PART_ContentPresenter"\n                              Content="{TemplateBinding Content}"\n                              Margin="{TemplateBinding Padding}"/>\n          </Panel>\n        </ControlTemplate>\n      </Setter>\n      \n      <Style Selector="^:pointerover">\n        <Setter Property="Background" Value="Red"/>\n        <Setter Property="Foreground" Value="White"/>\n      </Style>\n    </ControlTheme>\n  </Application.Resources>\n</Application>\n')),(0,a.kt)("h2",{id:"targettype"},"TargetType"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ControlTheme.TargetType")," property specifies the type to which setter properties apply. If you don't specify a ",(0,a.kt)("inlineCode",{parentName:"p"},"TargetType"),", you must qualify the properties in your Setter objects with a class name by using the syntax ",(0,a.kt)("inlineCode",{parentName:"p"},'Property="ClassName.Property"'),'. For example, instead of setting Property="FontSize", you must set Property to ',(0,a.kt)("inlineCode",{parentName:"p"},"TextBlock.FontSize")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Control.FontSize"),"."),(0,a.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/AvaloniaUI/AvaloniaUI.QuickGuides/tree/main/ButtonCustomize"},"ButtonCustomize")," sample has an ",(0,a.kt)("inlineCode",{parentName:"li"},"WinClassicButtonTheme")),(0,a.kt)("li",{parentName:"ul"},"You can see the control themes for the inbuilt Avalonia controls here:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Themes.Simple/Controls"},"Simple Theme")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Themes.Fluent/Controls"},"Fluent Theme"))))))}u.isMDXComponent=!0},38754:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);