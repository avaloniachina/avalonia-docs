"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[224],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(g,r(r({ref:n},s),{},{components:t})):a.createElement(g,r({ref:n},s))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},80481:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=t(87462),i=(t(67294),t(3905));const o=t.p+"assets/images/routing-b7e6cef0cfc384c0f301403588e442cb.gif",r={},l="\u8def\u7531",p={unversionedId:"concepts/reactiveui/routing",id:"concepts/reactiveui/routing",title:"\u8def\u7531",description:"ReactiveUI \u8def\u7531\u7531\u5305\u542b\u5f53\u524d RoutingState \u7684 IScreen\u3001\u591a\u4e2a IRoutableViewModel \u548c\u4e00\u4e2a\u7279\u5b9a\u4e8e\u5e73\u53f0\u7684 XAML \u63a7\u4ef6 RoutedViewHost \u7ec4\u6210\u3002RoutingState \u7ba1\u7406\u89c6\u56fe\u6a21\u578b\u5bfc\u822a\u5806\u6808\uff0c\u5e76\u5141\u8bb8\u89c6\u56fe\u6a21\u578b\u5bfc\u822a\u5230\u5176\u4ed6\u89c6\u56fe\u6a21\u578b\u3002IScreen \u662f\u5bfc\u822a\u5806\u6808\u7684\u6839\uff1b\u5c3d\u7ba1\u540d\u79f0\u5982\u6b64\uff0c\u4f46\u5b83\u7684\u89c6\u56fe\u4e0d\u5fc5\u5360\u636e\u6574\u4e2a\u5c4f\u5e55\u3002RoutedViewHost \u76d1\u89c6 RoutingState \u7684\u5b9e\u4f8b\uff0c\u901a\u8fc7\u521b\u5efa\u548c\u5d4c\u5165\u9002\u5f53\u7684\u89c6\u56fe\u6765\u54cd\u5e94\u5bfc\u822a\u5806\u6808\u4e2d\u7684\u4efb\u4f55\u66f4\u6539\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/concepts/reactiveui/routing.md",sourceDirName:"concepts/reactiveui",slug:"/concepts/reactiveui/routing",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/reactiveui/routing",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/concepts/reactiveui/routing.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\u67e5\u770b\u6fc0\u6d3b",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/reactiveui/view-activation"},next:{title:"\u6570\u636e\u6301\u4e45\u5316",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/reactiveui/data-persistence"}},c={},s=[{value:"\u8def\u7531\u793a\u4f8b",id:"\u8def\u7531\u793a\u4f8b",level:2}],u={toc:s},d="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u8def\u7531"},"\u8def\u7531"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://reactiveui.net/docs/handbook/routing/"},"ReactiveUI \u8def\u7531"),"\u7531\u5305\u542b\u5f53\u524d ",(0,i.kt)("a",{parentName:"p",href:"https://reactiveui.net/api/reactiveui/routingstate/"},"RoutingState")," \u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://reactiveui.net/api/reactiveui/iscreen/"},"IScreen"),"\u3001\u591a\u4e2a ",(0,i.kt)("a",{parentName:"p",href:"https://reactiveui.net/api/reactiveui/iroutableviewmodel/"},"IRoutableViewModel")," \u548c\u4e00\u4e2a\u7279\u5b9a\u4e8e\u5e73\u53f0\u7684 XAML \u63a7\u4ef6 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/55458cf7af24d6c987268ab5ff8a1ead1173310b/src/Avalonia.ReactiveUI/RoutedViewHost.cs"},"RoutedViewHost")," \u7ec4\u6210\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"RoutingState")," \u7ba1\u7406\u89c6\u56fe\u6a21\u578b\u5bfc\u822a\u5806\u6808\uff0c\u5e76\u5141\u8bb8\u89c6\u56fe\u6a21\u578b\u5bfc\u822a\u5230\u5176\u4ed6\u89c6\u56fe\u6a21\u578b\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"IScreen")," \u662f\u5bfc\u822a\u5806\u6808\u7684\u6839\uff1b\u5c3d\u7ba1\u540d\u79f0\u5982\u6b64\uff0c\u4f46\u5b83\u7684\u89c6\u56fe\u4e0d\u5fc5\u5360\u636e\u6574\u4e2a\u5c4f\u5e55\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"RoutedViewHost")," \u76d1\u89c6 ",(0,i.kt)("inlineCode",{parentName:"p"},"RoutingState")," \u7684\u5b9e\u4f8b\uff0c\u901a\u8fc7\u521b\u5efa\u548c\u5d4c\u5165\u9002\u5f53\u7684\u89c6\u56fe\u6765\u54cd\u5e94\u5bfc\u822a\u5806\u6808\u4e2d\u7684\u4efb\u4f55\u66f4\u6539\u3002"),(0,i.kt)("h2",{id:"\u8def\u7531\u793a\u4f8b"},"\u8def\u7531\u793a\u4f8b"),(0,i.kt)("p",null,"\u4ece Avalonia \u6a21\u677f\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u7a7a\u9879\u76ee\u3002\u8981\u4f7f\u7528\u8fd9\u4e9b\u6a21\u677f\uff0c\u8bf7\u514b\u9686 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/avalonia-dotnet-templates"},"avalonia-dotnet-templates")," \u5b58\u50a8\u5e93\uff0c\u5b89\u88c5\u6a21\u677f\uff0c\u5e76\u57fa\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"avalonia.app")," \u6a21\u677f\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"RoutingExample")," \u7684\u65b0\u9879\u76ee\u3002\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"Avalonia.ReactiveUI")," \u5305\u5b89\u88c5\u5230\u9879\u76ee\u4e2d\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/AvaloniaUI/avalonia-dotnet-templates\ndotnet new --install ./avalonia-dotnet-templates\ndotnet new avalonia.app -o RoutingExample\ncd ./RoutingExample\ndotnet add package Avalonia.ReactiveUI\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FirstViewModel.cs")),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u521b\u5efa\u53ef\u8def\u7531\u7684\u89c6\u56fe\u6a21\u578b\u548c\u76f8\u5e94\u7684\u89c6\u56fe\u3002\u6211\u4eec\u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},"ReactiveUI")," \u547d\u540d\u7a7a\u95f4\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"IRoutableViewModel")," \u63a5\u53e3\u6d3e\u751f\u53ef\u8def\u7531\u7684\u89c6\u56fe\u6a21\u578b\uff0c\u5e76\u4e14\u4e5f\u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},"ReactiveObject")," \u6d3e\u751f\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"ReactiveObject")," \u662f",(0,i.kt)("a",{parentName:"p",href:"https://reactiveui.net/docs/handbook/view-models/"},"\u89c6\u56fe\u6a21\u578b\u7c7b"),"\u7684\u57fa\u7c7b\uff0c\u5e76\u5b9e\u73b0\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"INotifyPropertyChanged"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace RoutingExample\n{\n    public class FirstViewModel : ReactiveObject, IRoutableViewModel\n    {\n        // \u62e5\u6709\u53ef\u8def\u7531\u89c6\u56fe\u6a21\u578b\u7684 IScreen \u5f15\u7528\u3002\n        public IScreen HostScreen { get; }\n\n        // \u53ef\u8def\u7531\u89c6\u56fe\u6a21\u578b\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002\n        public string UrlPathSegment { get; } = Guid.NewGuid().ToString().Substring(0, 5);\n\n        public FirstViewModel(IScreen screen) => HostScreen = screen;\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FirstView.xaml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'<UserControl xmlns="https://github.com/avaloniaui"\n             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n             x:Class="RoutingExample.FirstView">\n    <StackPanel HorizontalAlignment="Center"\n                VerticalAlignment="Center">\n        <TextBlock Text="Hi, I\'m the first view!" />\n        <TextBlock Text="{Binding UrlPathSegment}" />\n    </StackPanel>\n</UserControl>\n```"\n\n**FirstView.xaml.cs**\n\n\u5982\u679c\u6211\u4eec\u9700\u8981\u5904\u7406\u89c6\u56fe\u6a21\u578b\u7684\u6fc0\u6d3b\u548c\u505c\u7528\uff0c\u90a3\u4e48\u6211\u4eec\u5728\u89c6\u56fe\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u8c03\u7528WhenActivated\u7684\u65b9\u6cd5\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u4e00\u4e2a\u7ecf\u9a8c\u6cd5\u5219\u662f\u59cb\u7ec8\u5728\u89c6\u56fe\u4e2d\u6dfb\u52a0WhenActivated\uff0c\u8be6\u89c1[Activation](../../concepts/reactiveui/view-activation)\u6587\u6863\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002\n\n```csharp\nnamespace RoutingExample\n{\n    public class FirstView : ReactiveUserControl<FirstViewModel>\n    {\n        public FirstView()\n        {\n            this.WhenActivated(disposables => { });\n            AvaloniaXamlLoader.Load(this);\n        }\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MainWindowViewModel.cs")),(0,i.kt)("p",null,"\u7136\u540e\uff0c\u521b\u5efa\u4e00\u4e2a\u5b9e\u73b0",(0,i.kt)("inlineCode",{parentName:"p"},"IScreen"),"\u63a5\u53e3\u7684\u89c6\u56fe\u6a21\u578b\u3002\u5b83\u5305\u542b\u7ba1\u7406\u5bfc\u822a\u5806\u6808\u7684\u5f53\u524d",(0,i.kt)("inlineCode",{parentName:"p"},"RoutingState"),"\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"RoutingState"),"\u8fd8\u5305\u542b\u4e00\u4e9b\u8f85\u52a9\u547d\u4ee4\uff0c\u5141\u8bb8\u60a8\u5411\u540e\u548c\u5411\u524d\u5bfc\u822a\u3002"),(0,i.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u60a8\u53ef\u4ee5\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u4efb\u610f\u6570\u91cf\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"IScreen"),"\u3002\u5c3d\u7ba1\u540d\u79f0\u5982\u6b64\uff0c\u5b83\u4e0d\u5fc5\u5360\u636e\u6574\u4e2a\u5c4f\u5e55\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u5d4c\u5957\u8def\u7531\uff0c\u5728\u4e00\u4fa7\u653e\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},"IScreen"),"\u7b49\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace RoutingExample\n{\n    public class MainWindowViewModel : ReactiveObject, IScreen\n    {\n        // \u4e0e\u6b64Screen\u5173\u8054\u7684Router\u3002\n        // IScreen\u63a5\u53e3\u6240\u9700\u3002\n        public RoutingState Router { get; } = new RoutingState();\n\n        // \u5bfc\u822a\u7528\u6237\u5230\u7b2c\u4e00\u4e2a\u89c6\u56fe\u6a21\u578b\u7684\u547d\u4ee4\u3002\n        public ReactiveCommand<Unit, IRoutableViewModel> GoNext { get; }\n\n        // \u5bfc\u822a\u7528\u6237\u8fd4\u56de\u7684\u547d\u4ee4\u3002\n        public ReactiveCommand<Unit, IRoutableViewModel> GoBack => Router.NavigateBack;\n\n        public MainWindowViewModel()\n        {\n            // \u7ba1\u7406\u8def\u7531\u72b6\u6001\u3002\u4f7f\u7528Router.Navigate.Execute\u547d\u4ee4\u5bfc\u822a\u5230\u4e0d\u540c\u7684\u89c6\u56fe\u6a21\u578b\u3002\n            //\n            // \u6ce8\u610f\uff0cNavigate.Execute\u65b9\u6cd5\u63a5\u53d7\u4e00\u4e2a\u89c6\u56fe\u6a21\u578b\u7684\u5b9e\u4f8b\uff0c\u8fd9\u5141\u8bb8\u60a8\u5411\u89c6\u56fe\u6a21\u578b\u4f20\u9012\u53c2\u6570\uff0c\u6216\u8005\u91cd\u7528\u73b0\u6709\u7684\u89c6\u56fe\u6a21\u578b\u3002\n            //\n            GoNext = ReactiveCommand.CreateFromObservable(\n                () => Router.Navigate.Execute(new FirstViewModel(this))\n            );\n        }\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MainWindow.xaml")),(0,i.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u9700\u8981\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"RoutedViewHost")," XAML\u63a7\u4ef6\u653e\u7f6e\u5728\u6211\u4eec\u7684\u4e3b\u89c6\u56fe\u4e2d\u3002\u5b83\u5c06\u6839\u636e\u63d0\u4f9b\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"IViewLocator"),"\u5b9e\u73b0\u548c\u4f20\u9012\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Router"),"\u5b9e\u4f8b\uff08\u7c7b\u578b\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"RoutingState"),"\uff09\u89e3\u6790\u548c\u5d4c\u5165\u9002\u5f53\u7684\u89c6\u56fe\u6a21\u578b\u3002\u8bf7\u6ce8\u610f\uff0c\u60a8\u9700\u8981\u5bfc\u5165",(0,i.kt)("inlineCode",{parentName:"p"},"rxui"),"\u547d\u540d\u7a7a\u95f4\u4ee5\u4f7f",(0,i.kt)("inlineCode",{parentName:"p"},"RoutedViewHost"),"\u6b63\u5e38\u5de5\u4f5c\u3002\u6b64\u5916\uff0c\u60a8\u53ef\u4ee5\u5728XAML\u4e2d\u91cd\u5199",(0,i.kt)("inlineCode",{parentName:"p"},"RoutedViewHost.PageTransition"),"\u5c5e\u6027\uff0c\u4ee5\u8986\u76d6",(0,i.kt)("inlineCode",{parentName:"p"},"RoutedViewHost"),"\u66f4\u6539\u89c6\u56fe\u65f6\u64ad\u653e\u7684\u52a8\u753b\u3002\u5bf9\u4e8e\u6765\u81eaMyGet\u7684\u6700\u65b0\u6784\u5efa\uff0c\u8bf7\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},'xmlns:rxui="https://reactiveui.net"'),"\uff0c\u5bf9\u4e8eNuGet\u4e0a\u76840.8.0\u7248\u672c\uff0c\u8bf7\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},'xmlns:rxui="clr-namespace:Avalonia;assembly=Avalonia.ReactiveUI"'),"\uff0c\u5982\u4e0b\u9762\u7684\u793a\u4f8b\u6240\u793a\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:rxui="clr-namespace:Avalonia.ReactiveUI;assembly=Avalonia.ReactiveUI"\n        xmlns:app="clr-namespace:RoutingExample"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n        x:Class="RoutingExample.MainWindow"\n        Title="RoutingExample">\n    <Grid>\n        <Grid.RowDefinitions>\n            <RowDefinition Height="*" />\n            <RowDefinition Height="Auto" />\n        </Grid.RowDefinitions>\n        <rxui:RoutedViewHost Grid.Row="0" Router="{Binding Router}">\n            <rxui:RoutedViewHost.DefaultContent>\n                <TextBlock Text="Default content"\n                           HorizontalAlignment="Center"\n                           VerticalAlignment="Center" />\n            </rxui:RoutedViewHost.DefaultContent>\n            <rxui:RoutedViewHost.ViewLocator>\n                \x3c!-- See AppViewLocator.cs section below --\x3e\n                <app:AppViewLocator />\n            </rxui:RoutedViewHost.ViewLocator>\n        </rxui:RoutedViewHost>\n        <StackPanel Grid.Row="1" Orientation="Horizontal" Margin="15">\n            <StackPanel.Styles>\n                <Style Selector="StackPanel > :is(Control)">\n                    <Setter Property="Margin" Value="2"/>\n                </Style>\n                <Style Selector="StackPanel > TextBlock">\n                    <Setter Property="VerticalAlignment" Value="Center"/>\n                </Style>\n            </StackPanel.Styles>\n            <Button Content="Go next" Command="{Binding GoNext}" />\n            <Button Content="Go back" Command="{Binding GoBack}" />\n            <TextBlock Text="{Binding Router.NavigationStack.Count}" />\n        </StackPanel>\n    </Grid>\n</Window>\n')),(0,i.kt)("p",null,"\u8981\u7981\u7528\u52a8\u753b\uff0c\u53ea\u9700\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"RoutedViewHost.PageTransition"),"\u5c5e\u6027\u8bbe\u7f6e\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"{x:Null}"),"\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'<rxui:RoutedViewHost Grid.Row="0" Router="{Binding Router}" PageTransition="{x:Null}">\n    <rxui:RoutedViewHost.DefaultContent>\n        <TextBlock Text="Default content"\n                   HorizontalAlignment="Center"\n                   VerticalAlignment="Center" />\n    </rxui:RoutedViewHost.DefaultContent>\n</rxui:RoutedViewHost>\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"AppViewLocator.cs")),(0,i.kt)("p",null,"\u6211\u4eec\u5728\u4e0a\u9762\u663e\u793a\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"MainWindow.xaml"),"\u6807\u8bb0\u4e2d\u4f20\u9012\u7ed9",(0,i.kt)("inlineCode",{parentName:"p"},"RoutedViewHost"),"\u63a7\u4ef6\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"AppViewLocator"),"\u8d1f\u8d23\u6839\u636eViewModel\u7684\u7c7b\u578b\u89e3\u6790View\u3002\u7c7b\u578b\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"RoutingState"),"\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"IScreen.Router"),"\u5b9e\u4f8b\u786e\u5b9a\u5f53\u524d\u5e94\u663e\u793a\u54ea\u4e2aViewModel\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"https://reactiveui.net/docs/handbook/view-location/"},"View Location"),"\u3002\u57fa\u4e8e\u6a21\u5f0f\u5339\u914d\u7684\u6700\u7b80\u5355\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"IViewLocator"),"\u5b9e\u73b0\u53ef\u80fd\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace RoutingExample\n{\n    public class AppViewLocator : ReactiveUI.IViewLocator\n    {\n        public IViewFor ResolveView<T>(T viewModel, string contract = null) => viewModel switch\n        {\n            FirstViewModel context => new FirstView { DataContext = context },\n            _ => throw new ArgumentOutOfRangeException(nameof(viewModel))\n        };\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MainWindow.xaml.cs")),(0,i.kt)("p",null,"\u8fd9\u662f\u4e0a\u9762\u58f0\u660e\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"MainWindow.xaml"),"\u7684\u4ee3\u7801\u540e\u53f0\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace RoutingExample\n{\n    public class MainWindow : ReactiveWindow<MainWindowViewModel>\n    {\n        public MainWindow()\n        {\n            this.WhenActivated(disposables => { });\n            AvaloniaXamlLoader.Load(this);\n        }\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"App.axaml.cs")),(0,i.kt)("p",null,"\u8bf7\u786e\u4fdd\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"App.axaml.cs")," \u4e2d\u521d\u59cb\u5316\u6839\u89c6\u56fe\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"DataContext"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public override void OnFrameworkInitializationCompleted()\n{\n    if (ApplicationLifetime is IClassicDesktopStyleApplicationLifetime desktop)\n    {\n        desktop.MainWindow = new MainWindow\n        {\n            DataContext = new MainWindowViewModel(),\n        };\n    }\n\n    base.OnFrameworkInitializationCompleted();\n}\n")),(0,i.kt)("p",null,"\u6700\u540e\uff0c\u5728\u4f60\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"AppBuilder")," \u4e2d\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},".UseReactiveUI()")," \uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace RoutingExample\n{\n    public static class Program\n    {\n        public static void Main(string[] args)\n        {\n            BuildAvaloniaApp().StartWithClassicDesktopLifetime(args);\n        }\n\n        public static AppBuilder BuildAvaloniaApp() =>\n            AppBuilder.Configure<App>()\n                .UseReactiveUI()\n                .UsePlatformDetect()\n                .LogToDebug();\n    }\n}\n")),(0,i.kt)("p",null,"\u73b0\u5728\uff0c\u60a8\u53ef\u4ee5\u8fd0\u884c\u8be5\u5e94\u7528\u7a0b\u5e8f\u5e76\u67e5\u770b\u8def\u7531\u7684\u6548\u679c\uff01"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet run --framework netcoreapp2.1\n")),(0,i.kt)("img",{src:o,alt:""}))}m.isMDXComponent=!0}}]);