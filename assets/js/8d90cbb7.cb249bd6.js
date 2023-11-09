"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[32052],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),p=l(n),u=o,h=p["".concat(d,".").concat(u)]||p[u]||s[u]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var m={};for(var d in t)hasOwnProperty.call(t,d)&&(m[d]=t[d]);m.originalType=e,m[p]="string"==typeof e?e:o,r[1]=m;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>m,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i=n.p+"assets/images/command-3152cddc7d47d7e45638f382cb6790c8.gif",r={id:"how-to-bind-to-a-command-with-reactiveui",title:"How to Bind to a Command with ReactiveUI"},m="How to Bind to a Command with ReactiveUI",d={unversionedId:"guides/data-binding/how-to-bind-to-a-command-with-reactiveui",id:"guides/data-binding/how-to-bind-to-a-command-with-reactiveui",title:"How to Bind to a Command with ReactiveUI",description:"This guide shows you how to bind a view model method (that performs an action) to a control that can initiate an action in response to user interaction (for example, a button). This binding is defined in XAML using the Command attribute, for example:",source:"@site/docs/guides/data-binding/how-to-bind-to-a-command-with-reactiveui.md",sourceDirName:"guides/data-binding",slug:"/guides/data-binding/how-to-bind-to-a-command-with-reactiveui",permalink:"/avalonia-docs/docs/next/guides/data-binding/how-to-bind-to-a-command-with-reactiveui",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/data-binding/how-to-bind-to-a-command-with-reactiveui.md",tags:[],version:"current",frontMatter:{id:"how-to-bind-to-a-command-with-reactiveui",title:"How to Bind to a Command with ReactiveUI"},sidebar:"documentationSidebar",previous:{title:"How to Bind Can Execute",permalink:"/avalonia-docs/docs/next/guides/data-binding/how-to-bind-can-execute"},next:{title:"How to Bind to a Command without ReactiveUI",permalink:"/avalonia-docs/docs/next/guides/data-binding/how-to-bind-to-a-command-without-reactiveui"}},l={},c=[{value:"Command Parameter",id:"command-parameter",level:2}],p={toc:c},s="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-bind-to-a-command-with-reactiveui"},"How to Bind to a Command with ReactiveUI"),(0,o.kt)("p",null,"This guide shows you how to bind a view model method (that performs an action) to a control that can initiate an action in response to user interaction (for example, a button). This binding is defined in XAML using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Command")," attribute, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'<Window xmlns="https://github.com/avaloniaui">\n    ...\n  <StackPanel Margin="20">\n      <Button Command="{Binding ExampleCommand}">Run the example</Button>\n  </StackPanel>\n')),(0,o.kt)("p",null,"This guide assumes that you are using the MVVM implementation pattern, and you have based your view model on the ",(0,o.kt)("em",{parentName:"p"},"ReactiveUI")," framework."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To review the concept behind the MVVM implementation pattern, see ",(0,o.kt)("a",{parentName:"p",href:"../../concepts/the-mvvm-pattern/"},"here"),"."," ")),(0,o.kt)("p",null,"If you created your application using the ",(0,o.kt)("strong",{parentName:"p"},"Avalonia MVVM Application")," solution template then your solution will already contain the ",(0,o.kt)("em",{parentName:"p"},"ReactiveUI")," framework package, and you can reference it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"using ReactiveUI;\n")),(0,o.kt)("p",null,"A view model that can perform actions implements them through the ",(0,o.kt)("inlineCode",{parentName:"p"},"ICommand")," interface. The ",(0,o.kt)("em",{parentName:"p"},"ReactiveUI")," framework provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactiveCommand")," class that implements ",(0,o.kt)("inlineCode",{parentName:"p"},"ICommand"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For details of the definition of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ICommand")," interface, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-gb/dotnet/api/system.windows.input.icommand?view=netstandard-2.0"},"here"),".")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Command")," attribute data binding will call the bound view model method through its ",(0,o.kt)("inlineCode",{parentName:"p"},"ICommand.Execute")," interface, when the bound control is activated. In this example: when the button is clicked."),(0,o.kt)("p",null,"To create a view model with a ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactiveCommand"),", follow this example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In your view model, declare a command, like this:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public ReactiveCommand<Unit, Unit> ExampleCommand { get; } \n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a private method in the view model to perform the action."),(0,o.kt)("li",{parentName:"ul"},"Initialize the reactive command, passing the name of the method that performs the action.")),(0,o.kt)("p",null,"Your view model code will now look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace AvaloniaGuides.ViewModels\n{\n    public class MainWindowViewModel \n    {\n        public ReactiveCommand<Unit, Unit> ExampleCommand { get; }\n\n        public MainWindowViewModel()\n        {\n            ExampleCommand = ReactiveCommand.Create(PerformAction);\n        }\n        private void PerformAction()\n        {\n            Debug.WriteLine("The action was called.");\n        }\n    }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run the app and monitor the debug output.")),(0,o.kt)("p",null,"When the control bound to the reactive command is activated (in this example: when the button is clicked); then the private method to perform the action is called through the reactive command."," "),(0,o.kt)("img",{src:i,alt:""}),(0,o.kt)("h2",{id:"command-parameter"},"Command Parameter"),(0,o.kt)("p",null,"You will often need to pass an argument to the reactive command that is bound to a control. You can achieve this using the ",(0,o.kt)("inlineCode",{parentName:"p"},"CommandParameter")," attribute in the XAML. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<Window xmlns="https://github.com/avaloniaui">\n   ...\n   <StackPanel Margin="20">\n      <Button Command="{Binding ExampleCommand}"\n              CommandParameter="From the button">Run the example</Button>\n   </StackPanel>\n</Window>\n')),(0,o.kt)("p",null,"You must now modify the view model so that the reactive commend expects a string parameter, the initialisation expects a string parameter, and the private method to perform the action expects a string parameter. As follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace AvaloniaGuides.ViewModels\n{\n    public class MainWindowViewModel \n    {\n        public ReactiveCommand<string, Unit> ExampleCommand { get; }\n\n        public MainWindowViewModel()\n        {\n            ExampleCommand = ReactiveCommand.Create<string>(PerformAction);\n        }\n        private void PerformAction(string msg)\n        {\n            Debug.WriteLine($"The action was called. {msg}");\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Note that no type conversion is carried out on the ",(0,o.kt)("inlineCode",{parentName:"p"},"CommandParameter")," attribute, so if you need to use a type parameter that is not a string, then you must define the type in the XAML. You will also need to use the expanded XAML syntax for the parameter."," "),(0,o.kt)("p",null,"For example to pass an integer parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:sys="clr-namespace:System;assembly=mscorlib">\n ...   \n    <Button Command="{Binding ExampleIntegerCommand}">\n        <Button.CommandParameter>\n            <sys:Int32>42</sys:Int32>\n        </Button.CommandParameter>\n        What is the answer?\n    </Button>\n</Window>\n')),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"You will get an error if your parameter definitions are missing or not the correct type.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Like any other property, the command parameter can be bound.")))}u.isMDXComponent=!0}}]);