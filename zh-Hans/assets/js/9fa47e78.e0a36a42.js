"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[54335],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=s(t),u=i,b=m["".concat(d,".").concat(u)]||m[u]||c[u]||o;return t?a.createElement(b,l(l({ref:n},p),{},{components:t})):a.createElement(b,l({ref:n},p))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=u;var r={};for(var d in n)hasOwnProperty.call(n,d)&&(r[d]=n[d]);r.originalType=e,r[m]="string"==typeof e?e:i,l[1]=r;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},25614:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=t(87462),i=(t(67294),t(3905));const o={description:"CONCEPTS"},l="Compiled Bindings",r={unversionedId:"basics/data/data-binding/compiled-bindings",id:"basics/data/data-binding/compiled-bindings",title:"Compiled Bindings",description:"CONCEPTS",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/basics/data/data-binding/compiled-bindings.md",sourceDirName:"basics/data/data-binding",slug:"/basics/data/data-binding/compiled-bindings",permalink:"/avalonia-docs/zh-Hans/docs/next/basics/data/data-binding/compiled-bindings",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/basics/data/data-binding/compiled-bindings.md",tags:[],version:"current",frontMatter:{description:"CONCEPTS"},sidebar:"documentationSidebar",previous:{title:"Data Binding Syntax",permalink:"/avalonia-docs/zh-Hans/docs/next/basics/data/data-binding/data-binding-syntax"},next:{title:"Data Templates",permalink:"/avalonia-docs/zh-Hans/docs/next/basics/data/data-templates"}},d={},s=[{value:"Enable and disable compiled bindings",id:"enable-and-disable-compiled-bindings",level:2},{value:"Enable and disable per UserControl or Window",id:"enable-and-disable-per-usercontrol-or-window",level:3},{value:"Enable and disable globally",id:"enable-and-disable-globally",level:3},{value:"CompiledBinding-Markup",id:"compiledbinding-markup",level:2},{value:"ReflectionBinding-Markup",id:"reflectionbinding-markup",level:2},{value:"Type casting",id:"type-casting",level:2}],p={toc:s},m="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"compiled-bindings"},"Compiled Bindings"),(0,i.kt)("p",null,"Bindings defined in the XAML are using reflection in order to find and access the requested property in your ",(0,i.kt)("inlineCode",{parentName:"p"},"ViewModel"),". In Avalonia you can also use compiled bindings, which has some benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you use compiled bindings and the property you bind to is not found, you will get a compile-time error. Hence you get a much better debugging experience."),(0,i.kt)("li",{parentName:"ul"},"Reflection is known to be slow (",(0,i.kt)("a",{parentName:"li",href:"https://www.codeproject.com/Articles/1161127/Why-is-reflection-slow"},"see this article on codeproject.com"),"). Using compiled bindings can therefore improve the performance of your application.")),(0,i.kt)("h2",{id:"enable-and-disable-compiled-bindings"},"Enable and disable compiled bindings"),(0,i.kt)("h3",{id:"enable-and-disable-per-usercontrol-or-window"},"Enable and disable per UserControl or Window"),(0,i.kt)("p",null,"Compiled bindings are not enabled by default. To enable compiled bindings, you will need to define the ",(0,i.kt)("inlineCode",{parentName:"p"},"DataType")," of the object you want to bind to first. In ",(0,i.kt)("a",{parentName:"p",href:"../data-templates"},(0,i.kt)("inlineCode",{parentName:"a"},"DataTemplates"))," there is a property ",(0,i.kt)("inlineCode",{parentName:"p"},"DataType"),", for all other elements you can set it via ",(0,i.kt)("inlineCode",{parentName:"p"},"x:DataType"),". Most likely you will set ",(0,i.kt)("inlineCode",{parentName:"p"},"x:DataType")," in your root node, for example in a ",(0,i.kt)("inlineCode",{parentName:"p"},"Window")," or an ",(0,i.kt)("inlineCode",{parentName:"p"},"UserControl"),". You can also specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"DataType")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Binding")," directly."),(0,i.kt)("p",null,"You can now enable or disable compiled bindings by setting ",(0,i.kt)("inlineCode",{parentName:"p"},'x:CompileBindings="[True|False]"'),". All child nodes will inherit this property, so you can enable it in your root node and disable it for a specific child, if needed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'\x3c!-- Set DataType and enable compiled bindings --\x3e\n<UserControl xmlns="https://github.com/avaloniaui"\n             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n             xmlns:vm="using:MyApp.ViewModels"\n             x:DataType="vm:MyViewModel"\n             x:CompileBindings="True">\n    <StackPanel>\n        <TextBlock Text="Last name:" />\n        <TextBox Text="{Binding LastName}" />\n        <TextBlock Text="Given name:" />\n        <TextBox Text="{Binding GivenName}" />\n        <TextBlock Text="E-Mail:" />\n        \x3c!-- Set DataType inside the Binding-markup --\x3e\n        <TextBox Text="{Binding MailAddress, DataType={x:Type vm:MyViewModel}}" />\n\n        <Button Content="Send an E-Mail"\n                Command="{Binding SendEmailCommand}" />\n    </StackPanel>\n</UserControl>\n')),(0,i.kt)("h3",{id:"enable-and-disable-globally"},"Enable and disable globally"),(0,i.kt)("p",null,"If you want your application to use compiled bindings globally by default, you can add"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},"<AvaloniaUseCompiledBindingsByDefault>true</AvaloniaUseCompiledBindingsByDefault>\n")),(0,i.kt)("p",null,"to your project file. You will still need to provide ",(0,i.kt)("inlineCode",{parentName:"p"},"x:DataType")," for the objects you want to bind but you don't need to to set ",(0,i.kt)("inlineCode",{parentName:"p"},'x:CompileBindings="[True|False]"')," for each ",(0,i.kt)("inlineCode",{parentName:"p"},"UserControl")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Window"),"."),(0,i.kt)("h2",{id:"compiledbinding-markup"},"CompiledBinding-Markup"),(0,i.kt)("p",null,"If you don't want to enable compiled bindings for all child nodes, you can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"CompiledBinding"),"-markup. You still need to define the ",(0,i.kt)("inlineCode",{parentName:"p"},"DataType"),", but you can omit ",(0,i.kt)("inlineCode",{parentName:"p"},'x:CompileBindings="True"'),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'\x3c!-- Set DataType --\x3e\n<UserControl xmlns="https://github.com/avaloniaui"\n             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n             xmlns:vm="using:MyApp.ViewModels"\n             x:DataType="vm:MyViewModel">\n    <StackPanel>\n        <TextBlock Text="Last name:" />\n        \x3c!-- use CompiledBinding markup for your binding --\x3e\n        <TextBox Text="{CompiledBinding LastName}" />\n        <TextBlock Text="Given name:" />\n        <TextBox Text="{CompiledBinding GivenName}" />\n        <TextBlock Text="E-Mail:" />\n        <TextBox Text="{CompiledBinding MailAddress}" />\n\n        \x3c!-- This command will use ReflectionBinding, as it\'s default --\x3e\n        <Button Content="Send an E-Mail"\n                Command="{Binding SendEmailCommand}" />\n    </StackPanel>\n</UserControl>\n')),(0,i.kt)("h2",{id:"reflectionbinding-markup"},"ReflectionBinding-Markup"),(0,i.kt)("p",null,"If you have compiled bindings enabled in the root node (via ",(0,i.kt)("inlineCode",{parentName:"p"},'x:CompileBindings="True"'),") and you either don't want to use compiled binding at a certain position or you hit one of the ",(0,i.kt)("a",{parentName:"p",href:"#known-limitations"},"known limitations"),", you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ReflectionBinding"),"-markup."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'\x3c!-- Set DataType --\x3e\n<UserControl xmlns="https://github.com/avaloniaui"\n             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n             xmlns:vm="using:MyApp.ViewModels"\n             x:DataType="vm:MyViewModel"\n             x:CompileBindings="True">\n    <StackPanel>\n        <TextBlock Text="Last name:" />\n        <TextBox Text="{Binding LastName}" />\n        <TextBlock Text="Given name:" />\n        <TextBox Text="{Binding GivenName}" />\n        <TextBlock Text="E-Mail:" />\n        <TextBox Text="{Binding MailAddress}" />\n\n        \x3c!-- We use ReflectionBinding instead --\x3e\n        <Button Content="Send an E-Mail"\n                Command="{ReflectionBinding SendEmailCommand}" />\n    </StackPanel>\n</UserControl>\n')),(0,i.kt)("h2",{id:"type-casting"},"Type casting"),(0,i.kt)("p",null,"In some cases the target type of the binding expression cannot be automatically evaluated. In such cases you muss provide an explicite type cast in the binding expression."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'<ItemsRepeater Items="{Binding MyItems}">\n<ItemsRepeater.ItemTemplate>\n    <DataTemplate>\n    <StackPanel Orientation="Horizontal">\n        <TextBlock Text="{Binding DisplayName}"/>\n        <Grid>\n        <Button Command="{Binding $parent[ItemsRepeater].((vm:MyUserControlViewModel)DataContext).DoItCommand}"\n                CommandParameter="{Binding ItemId}"/>\n        </Grid>\n    </StackPanel>\n    </DataTemplate>\n</ItemsRepeater.ItemTemplate>\n</ItemsRepeater>\n')),(0,i.kt)("p",null,"In this case, the button command shall not be bound to the item's ",(0,i.kt)("inlineCode",{parentName:"p"},"DataContext")," but to a command that is defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"DataContext"),"of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemsRepeater"),". The single item will be identified using a ",(0,i.kt)("inlineCode",{parentName:"p"},"CommandParameter")," bound to the item's ",(0,i.kt)("inlineCode",{parentName:"p"},"DataContext"),'. Therefore, you must specify the type of the "parent" ',(0,i.kt)("inlineCode",{parentName:"p"},"DataContext")," via cast expression ",(0,i.kt)("inlineCode",{parentName:"p"},"((vm:MyUserControlViewModel)DataContext)"),"."))}c.isMDXComponent=!0}}]);