"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[26949],{3905:(e,n,i)=>{i.d(n,{Zo:()=>p,kt:()=>g});var t=i(67294);function o(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){o(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function d(e,n){if(null==e)return{};var i,t,o=function(e,n){if(null==e)return{};var i,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(o[i]=e[i]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var r=t.createContext({}),s=function(e){var n=t.useContext(r),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},p=function(e){var n=s(e.components);return t.createElement(r.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var i=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=s(i),u=o,g=m["".concat(r,".").concat(u)]||m[u]||c[u]||a;return i?t.createElement(g,l(l({ref:n},p),{},{components:i})):t.createElement(g,l({ref:n},p))}));function g(e,n){var i=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=i.length,l=new Array(a);l[0]=u;var d={};for(var r in n)hasOwnProperty.call(n,r)&&(d[r]=n[r]);d.originalType=e,d[m]="string"==typeof e?e:o,l[1]=d;for(var s=2;s<a;s++)l[s]=i[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}u.displayName="MDXCreateElement"},21787:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var t=i(87462),o=(i(67294),i(3905));const a={id:"compiled-bindings",title:"Compiled Bindings"},l=void 0,d={unversionedId:"data-binding/compiled-bindings",id:"version-0.10.x/data-binding/compiled-bindings",title:"Compiled Bindings",description:"Bindings defined in the XAML are using reflection in order to find and access the requested property in your ViewModel. In Avalonia you can also use compiled bindings, which has some benefits:",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/data-binding/compiled-bindings.md",sourceDirName:"data-binding",slug:"/data-binding/compiled-bindings",permalink:"/avalonia-docs/zh-Hans/docs/data-binding/compiled-bindings",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/data-binding/compiled-bindings.md",tags:[],version:"0.10.x",frontMatter:{id:"compiled-bindings",title:"Compiled Bindings"},sidebar:"documentationSidebar",previous:{title:"Bindings",permalink:"/avalonia-docs/zh-Hans/docs/data-binding/bindings"},next:{title:"Binding to Controls",permalink:"/avalonia-docs/zh-Hans/docs/data-binding/binding-to-controls"}},r={},s=[{value:"Enable and disable compiled bindings",id:"enable-and-disable-compiled-bindings",level:2},{value:"CompiledBinding-Markup",id:"compiledbinding-markup",level:2},{value:"ReflectionBinding-Markup",id:"reflectionbinding-markup",level:2},{value:"Known limitations",id:"known-limitations",level:2}],p={toc:s},m="wrapper";function c(e){let{components:n,...i}=e;return(0,o.kt)(m,(0,t.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Bindings defined in the XAML are using reflection in order to find and access the requested property in your ",(0,o.kt)("inlineCode",{parentName:"p"},"ViewModel"),". In Avalonia you can also use compiled bindings, which has some benefits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you use compiled bindings and the property you bind to is not found, you will get a compile-time error. Hence you get a much better debugging experience."),(0,o.kt)("li",{parentName:"ul"},"Reflection is known to be slow (",(0,o.kt)("a",{parentName:"li",href:"https://www.codeproject.com/Articles/1161127/Why-is-reflection-slow"},"see this article on codeproject.com"),"). Using compiled bindings can therefore improve the performance of your application.")),(0,o.kt)("h2",{id:"enable-and-disable-compiled-bindings"},"Enable and disable compiled bindings"),(0,o.kt)("p",null,"Compiled bindings are not enabled by default. To enable compiled bindings, you will need to define the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataType")," of the object you want to bind to first. In ",(0,o.kt)("a",{parentName:"p",href:"/avalonia-docs/zh-Hans/docs/templates/data-templates"},(0,o.kt)("inlineCode",{parentName:"a"},"DataTemplates"))," there is a property ",(0,o.kt)("inlineCode",{parentName:"p"},"DataType"),", for all other elements you can set it via ",(0,o.kt)("inlineCode",{parentName:"p"},"x:DataType"),". Most likely you will set ",(0,o.kt)("inlineCode",{parentName:"p"},"x:DataType")," in your root node, for example in a ",(0,o.kt)("inlineCode",{parentName:"p"},"Window")," or an ",(0,o.kt)("inlineCode",{parentName:"p"},"UserControl"),". From Avalonia version ",(0,o.kt)("inlineCode",{parentName:"p"},"0.10.12")," onward you can also specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataType")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Binding")," directly."),(0,o.kt)("p",null,"You can now enable or disable compiled bindings by setting ",(0,o.kt)("inlineCode",{parentName:"p"},'x:CompileBindings="[True|False]"'),". All child nodes will inherit this property, so you can enable it in your root node and disable it for a specific child, if needed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'\x3c!-- Set DataType and enable compiled bindings --\x3e\n<UserControl xmlns="https://github.com/avaloniaui"\n             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n             xmlns:vm="using:MyApp.ViewModels"\n             x:DataType="vm:MyViewModel"\n             x:CompileBindings="True">\n    <StackPanel>\n        <TextBlock Text="Last name:" />\n        <TextBox Text="{Binding LastName}" />\n        <TextBlock Text="Given name:" />\n        <TextBox Text="{Binding GivenName}" />\n        <TextBlock Text="E-Mail:" />\n        \x3c!-- Set DataType inside the Binding-markup --\x3e\n        <TextBox Text="{Binding MailAddress, DataType={x:Type vm:MyViewModel}}" />\n\n        \x3c!-- We cannot use compiled bindings to bind to methods, so we opt them out for the button --\x3e\n        <Button x:CompileBindings="False"\n                Content="Send an E-Mail"\n                Command="{Binding SendEmailCommand}" />\n    </StackPanel>\n</UserControl>\n')),(0,o.kt)("p",null,"Starting from Avalonia ",(0,o.kt)("inlineCode",{parentName:"p"},"11.0-preview5")," you can also enable or disable it in whole project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<PropertyGroup>\n   <AvaloniaUseCompiledBindingsByDefault>true</AvaloniaUseCompiledBindingsByDefault>\n</PropertyGroup>\n")),(0,o.kt)("h2",{id:"compiledbinding-markup"},"CompiledBinding-Markup"),(0,o.kt)("p",null,"If you don't want to enable compiled bindings for all child nodes, you can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"CompiledBinding"),"-markup. You still need to define the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataType"),", but you can omit ",(0,o.kt)("inlineCode",{parentName:"p"},'x:CompileBindings="True"'),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'\x3c!-- Set DataType --\x3e\n<UserControl xmlns="https://github.com/avaloniaui"\n             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n             xmlns:vm="using:MyApp.ViewModels"\n             x:DataType="vm:MyViewModel">\n    <StackPanel>\n        <TextBlock Text="Last name:" />\n        \x3c!-- use CompiledBinding markup for your binding --\x3e\n        <TextBox Text="{CompiledBinding LastName}" />\n        <TextBlock Text="Given name:" />\n        <TextBox Text="{CompiledBinding GivenName}" />\n        <TextBlock Text="E-Mail:" />\n        <TextBox Text="{CompiledBinding MailAddress}" />\n\n        \x3c!-- We cannot use compiled bindings to bind to methods, so we use the normal Binding --\x3e\n        <Button Content="Send an E-Mail"\n                Command="{Binding SendEmailCommand}" />\n    </StackPanel>\n</UserControl>\n')),(0,o.kt)("h2",{id:"reflectionbinding-markup"},"ReflectionBinding-Markup"),(0,o.kt)("p",null,"If you have compiled bindings enabled in the root node (via ",(0,o.kt)("inlineCode",{parentName:"p"},'x:CompileBindings="True"'),") and you either don't want to use compiled binding at a certain position or you hit one of the ",(0,o.kt)("a",{parentName:"p",href:"#known-limitations"},"known limitations"),", you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ReflectionBinding"),"-markup."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'\x3c!-- Set DataType --\x3e\n<UserControl xmlns="https://github.com/avaloniaui"\n             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n             xmlns:vm="using:MyApp.ViewModels"\n             x:DataType="vm:MyViewModel"\n             x:CompileBindings="True">\n    <StackPanel>\n        <TextBlock Text="Last name:" />\n        <TextBox Text="{Binding LastName}" />\n        <TextBlock Text="Given name:" />\n        <TextBox Text="{Binding GivenName}" />\n        <TextBlock Text="E-Mail:" />\n        <TextBox Text="{Binding MailAddress}" />\n\n        \x3c!-- We cannot use compiled bindings to bind to methods, so we use ReflectionBinding instead --\x3e\n        <Button Content="Send an E-Mail"\n                Command="{ReflectionBinding SendEmailCommand}" />\n    </StackPanel>\n</UserControl>\n')),(0,o.kt)("h2",{id:"known-limitations"},"Known limitations"),(0,o.kt)("p",null,"Compiled bindings have some known limitations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Compiled bindings cannot be used to bind to named elements"),(0,o.kt)("li",{parentName:"ul"},"Compiled bindings cannot be used in Styles with RelativeSource set to TemplatedParent (e.g.: ",(0,o.kt)("inlineCode",{parentName:"li"},"{Binding Width, RelativeSource={RelativeSource TemplatedParent}}"),")")),(0,o.kt)("p",null,"If you hit one of those limitations you should disable compiled bindings for the failing XAML-node or use ",(0,o.kt)("inlineCode",{parentName:"p"},"ReflectionBinding")," instead."))}c.isMDXComponent=!0}}]);