"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[1957],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>g});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=n.createContext({}),s=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(d.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),c=i,g=u["".concat(d,".").concat(c)]||u[c]||m[c]||o;return t?n.createElement(g,r(r({ref:a},p),{},{components:t})):n.createElement(g,r({ref:a},p))}));function g(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=c;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},83470:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(87462),i=(t(67294),t(3905));const o={id:"data-validation",title:"Data Validation"},r="Data Validation",l={unversionedId:"guides/development-guides/data-validation",id:"guides/development-guides/data-validation",title:"Data Validation",description:"Avalonia offers different data validation options. In this section we will show you how you can validate the Properties of your ViewModel and how you can style the displayed error message.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/development-guides/data-validation.md",sourceDirName:"guides/development-guides",slug:"/guides/development-guides/data-validation",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/development-guides/data-validation",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/development-guides/data-validation.md",tags:[],version:"current",frontMatter:{id:"data-validation",title:"Data Validation"},sidebar:"documentationSidebar",previous:{title:"How To Access the UI Thread",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/development-guides/accessing-the-ui-thread"},next:{title:"How To Implement Multi-page Apps",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/development-guides/how-to-implement-multi-page-apps"}},d={},s=[{value:"Validating a property",id:"validating-a-property",level:2},{value:"DataAnnotations - ValidationPlugin",id:"dataannotations---validationplugin",level:3},{value:"INotifyDataErrorInfo - ValidationPlugin",id:"inotifydataerrorinfo---validationplugin",level:3},{value:"Exception - ValidationPlugin",id:"exception---validationplugin",level:3},{value:"Customize the appearance of the validation message",id:"customize-the-appearance-of-the-validation-message",level:2},{value:"Manage ValidationPlugins",id:"manage-validationplugins",level:2}],p={toc:s},u="wrapper";function m(e){let{components:a,...t}=e;return(0,i.kt)(u,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-validation"},"Data Validation"),(0,i.kt)("p",null,"Avalonia offers different data validation options. In this section we will show you how you can validate the ",(0,i.kt)("inlineCode",{parentName:"p"},"Properties")," of your ",(0,i.kt)("inlineCode",{parentName:"p"},"ViewModel")," and how you can style the displayed error message."),(0,i.kt)("h2",{id:"validating-a-property"},"Validating a property"),(0,i.kt)("p",null,"Avalonia uses ",(0,i.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Data.Core.Plugins/IDataValidationPlugin/"},(0,i.kt)("inlineCode",{parentName:"a"},"DataValidationPlugins"))," to validate the ",(0,i.kt)("inlineCode",{parentName:"p"},"Properties")," you bound to. Out of the box Avalonia provide these three validation plugins:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/avalonia-docs/zh-Hans/docs/next/guides/development-guides/data-validation#dataannotations---validationplugin"},"DataAnnotations - ValidationPlugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/avalonia-docs/zh-Hans/docs/next/guides/development-guides/data-validation#inotifydataerrorinfo---validationplugin"},"INotifyDataErrorInfo - ValidationPlugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/avalonia-docs/zh-Hans/docs/next/guides/development-guides/data-validation#exception---validationplugin"},"Exception - ValidationPlugin"))),(0,i.kt)("h3",{id:"dataannotations---validationplugin"},"DataAnnotations - ValidationPlugin"),(0,i.kt)("p",null,"You can decorate the ",(0,i.kt)("inlineCode",{parentName:"p"},"Properties")," of your ",(0,i.kt)("inlineCode",{parentName:"p"},"ViewModel")," with different ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.dataannotations.validationattribute"},(0,i.kt)("inlineCode",{parentName:"a"},"Validation-Attributes")),". You can use the build-in ones, use the ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.dataannotations.customvalidationattribute"},(0,i.kt)("inlineCode",{parentName:"a"},"CustomValidationAttribute"))," or create your own by derive from ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidationAttribute"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Sample: The property EMail is required and must be a valid e-mail-address")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"[Required]\n[EmailAddress]\npublic string? EMail\n{\n    get { return _EMail; }\n    set { this.RaiseAndSetIfChanged(ref _EMail, value); }\n}\n")),(0,i.kt)("h3",{id:"inotifydataerrorinfo---validationplugin"},"INotifyDataErrorInfo - ValidationPlugin"),(0,i.kt)("p",null,"Avalonia also supports validation of classes that implement ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.inotifydataerrorinfo"},(0,i.kt)("inlineCode",{parentName:"a"},"INotifyDataErrorInfo")),". Several ",(0,i.kt)("inlineCode",{parentName:"p"},"MVVM"),"-libraries are using this interface for their data validation, for example the ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/communitytoolkit/mvvm/observablevalidator"},"Microsoft.Toolkit.Mvvm"),"-package and the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reactiveui/ReactiveUI.Validation#inotifydataerrorinfo-support"},(0,i.kt)("inlineCode",{parentName:"a"},"ReactiveUI.Validation")),"-package. For usage instructions please visit the documentation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"MVVM"),"-package of your choice."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Some libraries like the ",(0,i.kt)("inlineCode",{parentName:"p"},"Microsoft.Toolkit.Mvvm")," use ",(0,i.kt)("inlineCode",{parentName:"p"},"DataAnnotiations")," for their validation. This may result in conflicts with the ",(0,i.kt)("a",{parentName:"p",href:"/avalonia-docs/zh-Hans/docs/next/guides/development-guides/data-validation#dataannotations---validationplugin"},"DataAnnotations - ValidationPlugin"),". Please see ",(0,i.kt)("a",{parentName:"p",href:"/avalonia-docs/zh-Hans/docs/next/guides/development-guides/data-validation#manage-validationplugins"},"Manage ValidationPlugins")," how to solve this issue.")),(0,i.kt)("h3",{id:"exception---validationplugin"},"Exception - ValidationPlugin"),(0,i.kt)("p",null,"One more option to validate a property is to raise an ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/exceptions/creating-and-throwing-exceptions"},(0,i.kt)("inlineCode",{parentName:"a"},"Exception"))," inside the setter of your property."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Sample: Validate the property EMail using ",(0,i.kt)("inlineCode",{parentName:"strong"},"Exceptions"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'public string? EMail\n{\n    get { return _EMail; }\n    set \n    {\n        if (string.IsNullOrEmpty(value))\n        {\n            throw new ArgumentNullException(nameof(EMail), "This field is required");\n        }\n        else if (!value.Contains(\'@\'))\n        {\n            throw new ArgumentException(nameof(EMail), "Not a valid E-Mail-Address");\n        }\n        else\n        { \n            this.RaiseAndSetIfChanged(ref _EMail, value); \n        } \n    }\n}\n')),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Exceptions inside the getter of your property are not allowed and will result in a crash of your application.")),(0,i.kt)("h2",{id:"customize-the-appearance-of-the-validation-message"},"Customize the appearance of the validation message"),(0,i.kt)("p",null,"To display the validation messages, Avalonia has a control called ",(0,i.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/DataValidationErrors/"},(0,i.kt)("inlineCode",{parentName:"a"},"DataValidationErrors")),". This control is typically placed inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"ControlTemplate")," of all ",(0,i.kt)("inlineCode",{parentName:"p"},"Controls")," that supports data validation, like ",(0,i.kt)("inlineCode",{parentName:"p"},"TextBox"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Slider")," and other. You can create your own ",(0,i.kt)("inlineCode",{parentName:"p"},"Style")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"DataValidationErrors"),"-control in order to customize the representation of the error messages."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example Style for DataValidationErrors")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<Style Selector="DataValidationErrors">\n  <Setter Property="Template">\n    <ControlTemplate>\n      <DockPanel LastChildFill="True">\n        <ContentControl DockPanel.Dock="Right"\n                        ContentTemplate="{TemplateBinding ErrorTemplate}"\n                        DataContext="{TemplateBinding Owner}"\n                        Content="{Binding (DataValidationErrors.Errors)}"\n                        IsVisible="{Binding (DataValidationErrors.HasErrors)}"/>\n        <ContentPresenter Name="PART_ContentPresenter"\n                          Background="{TemplateBinding Background}"\n                          BorderBrush="{TemplateBinding BorderBrush}"\n                          BorderThickness="{TemplateBinding BorderThickness}"\n                          CornerRadius="{TemplateBinding CornerRadius}"\n                          ContentTemplate="{TemplateBinding ContentTemplate}"\n                          Content="{TemplateBinding Content}"\n                          Padding="{TemplateBinding Padding}"/>\n      </DockPanel>\n    </ControlTemplate>\n  </Setter>\n  <Setter Property="ErrorTemplate">\n    <DataTemplate>\n      <Canvas Width="14" Height="14" Margin="4 0 1 0" \n              Background="Transparent">\n        <Canvas.Styles>\n          <Style Selector="ToolTip">\n            <Setter Property="Background" Value="LightRed"/>\n            <Setter Property="BorderBrush" Value="Red"/>\n          </Style>\n        </Canvas.Styles>\n        <ToolTip.Tip>\n          <ItemsControl Items="{Binding}"/>\n        </ToolTip.Tip>\n        <Path Data="M14,7 A7,7 0 0,0 0,7 M0,7 A7,7 0 1,0 14,7 M7,3l0,5 M7,9l0,2" \n              Stroke="Red" \n              StrokeThickness="2"/>\n      </Canvas>\n    </DataTemplate>\n  </Setter>\n</Style>\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Custom validation style")),(0,i.kt)("h2",{id:"manage-validationplugins"},"Manage ValidationPlugins"),(0,i.kt)("p",null,"if needed to, you can enable or disable a specific ",(0,i.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Data.Core.Plugins/IDataValidationPlugin/"},(0,i.kt)("inlineCode",{parentName:"a"},"ValidationPlugin"))," in your App. This can be useful if for example your MVVM-framework uses ",(0,i.kt)("inlineCode",{parentName:"p"},"DataAnnotations")," to validate the property via ",(0,i.kt)("inlineCode",{parentName:"p"},"INotifyDataErrorInfo"),". In that case you would see the message twice. Use the ",(0,i.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Data.Core/ExpressionObserver/"},(0,i.kt)("inlineCode",{parentName:"a"},"ExpressionObserver.DataValidators")),"-collection to add or remove a specific ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidationPlugin"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example: Remove the DataAnnotations validator")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"public override void OnFrameworkInitializationCompleted()\n{\n    // Remove the DataAnnotations validator\n    ExpressionObserver.DataValidators.RemoveAll(x => x is DataAnnotationsValidationPlugin);\n    \n    // Continue with normal startup\n    if (ApplicationLifetime is IClassicDesktopStyleApplicationLifetime desktop)\n    {\n        desktop.MainWindow = new MainWindow()\n        {\n            DataContext = MainWindowViewModel.Instance\n        };\n    }\n\n    base.OnFrameworkInitializationCompleted();\n}\n")))}m.isMDXComponent=!0}}]);