"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[16984],{46162:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var t=n(85893),o=n(11151);const a={id:"view-activation",title:"View Activation"},s=void 0,d={id:"guides/deep-dives/reactiveui/view-activation",title:"View Activation",description:"For the WhenActivated ReactiveUI feature to work, you need to use custom base classes from the Avalonia.ReactiveUI package, such as ReactiveWindow or ReactiveUserControl. Of course, you can also implement the IViewFor interface by hand in your class, but make sure you store the ViewModel in an AvaloniaProperty.",source:"@site/versioned_docs/version-0.10.x/guides/deep-dives/reactiveui/view-activation.md",sourceDirName:"guides/deep-dives/reactiveui",slug:"/guides/deep-dives/reactiveui/view-activation",permalink:"/avalonia-docs/docs/0.10.x/guides/deep-dives/reactiveui/view-activation",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/guides/deep-dives/reactiveui/view-activation.md",tags:[],version:"0.10.x",frontMatter:{id:"view-activation",title:"View Activation"},sidebar:"documentationSidebar",previous:{title:"ReactiveUI",permalink:"/avalonia-docs/docs/0.10.x/guides/deep-dives/reactiveui/"},next:{title:"Routing",permalink:"/avalonia-docs/docs/0.10.x/guides/deep-dives/reactiveui/routing"}},c={},l=[{value:"Activation Example",id:"activation-example",level:3},{value:"Code-Behind ReactiveUI Bindings",id:"code-behind-reactiveui-bindings",level:3}];function r(e){const i={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["For the ",(0,t.jsx)(i.a,{href:"https://reactiveui.net/docs/handbook/when-activated/",children:"WhenActivated"})," ReactiveUI feature to work, you need to use custom base classes from the ",(0,t.jsx)(i.code,{children:"Avalonia.ReactiveUI"})," package, such as ",(0,t.jsx)(i.code,{children:"ReactiveWindow<TViewModel>"})," or ",(0,t.jsx)(i.code,{children:"ReactiveUserControl<TViewModel>"}),". Of course, you can also implement the ",(0,t.jsx)(i.code,{children:"IViewFor<TViewModel>"})," interface by hand in your class, but make sure you store the ",(0,t.jsx)(i.code,{children:"ViewModel"})," in an ",(0,t.jsx)(i.code,{children:"AvaloniaProperty"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"activation-example",children:"Activation Example"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"ViewModel.cs"})}),"\n",(0,t.jsxs)(i.p,{children:["This view model implements the ",(0,t.jsx)(i.code,{children:"IActivatableViewModel"})," interface. When the corresponding view gets attached to the visual tree, the code inside the WhenActivated block will get called. When the corresponding view gets detached from the visual tree, the composite disposable will be disposed. ",(0,t.jsx)(i.code,{children:"ReactiveObject"})," is the base class for ",(0,t.jsx)(i.a,{href:"https://reactiveui.net/docs/handbook/view-models/",children:"view model classes"}),", and it implements ",(0,t.jsx)(i.code,{children:"INotifyPropertyChanged"}),"."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csharp",children:"public class ViewModel : ReactiveObject, IActivatableViewModel\n{\n    public ViewModelActivator Activator { get; }\n\n    public ViewModel()\n    {\n        Activator = new ViewModelActivator();\n        this.WhenActivated((CompositeDisposable disposables) =>\n        {\n            /* handle activation */\n            Disposable\n                .Create(() => { /* handle deactivation */ })\n                .DisposeWith(disposables);\n        });\n    }\n}\n"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"View.xaml"})}),"\n",(0,t.jsx)(i.p,{children:"This is the UI for the view model you see above."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-markup",children:'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        Background="#f0f0f0" FontFamily="Ubuntu"\n        MinHeight="590" MinWidth="750">\n  <TextBlock Text="Hello, world!" />\n</Window>\n'})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"View.xaml.cs"})}),"\n",(0,t.jsxs)(i.p,{children:["This is the code-behind for the ",(0,t.jsx)(i.code,{children:"View.xaml"})," file you see above. Remember to always put a call to ",(0,t.jsx)(i.code,{children:"WhenActivated"})," into your View constructor, otherwise ReactiveUI won't be able to determine when the view model gets activated."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csharp",children:"public class View : ReactiveWindow<ViewModel>\n{\n    public View()\n    {\n        // ViewModel's WhenActivated block will also get called.\n        this.WhenActivated(disposables => { /* Handle view activation etc. */ });\n        AvaloniaXamlLoader.Load(this);\n    }\n}\n"})}),"\n",(0,t.jsx)(i.h3,{id:"code-behind-reactiveui-bindings",children:"Code-Behind ReactiveUI Bindings"}),"\n",(0,t.jsxs)(i.p,{children:["The Avalonia XAML engine doesn't generate strongly typed ",(0,t.jsx)(i.code,{children:"x:Name"})," references to controls. The only way to use ",(0,t.jsx)(i.a,{href:"https://reactiveui.net/docs/handbook/data-binding/",children:"code-behind ReactiveUI bindings"})," for now is to use the ",(0,t.jsx)(i.code,{children:"FindControl"})," method that will find a control by the name specified in XAML, or to use ",(0,t.jsx)(i.code,{children:"{Binding Path}"})," syntax."]}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"FindControl"})," method shouldn't be used inside an expression. Instead, create a custom property which calls the ",(0,t.jsx)(i.code,{children:"FindControl"})," method, or store the control in a variable. See the example below illustrating how to use ReactiveUI code-behind bindings with Avalonia."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csharp",children:"public class View : ReactiveWindow<ViewModel>\n{\n    // Assume the Button control has the Name=\"ExampleButton\" attribute defined in XAML.\n    public Button ExampleButton => this.FindControl<Button>(\"ExampleButton\");\n\n    public View()\n    {\n        this.WhenActivated(disposables => \n        {\n            // Bind the 'ExampleCommand' to 'ExampleButton' defined above.\n            this.BindCommand(ViewModel, x => x.ExampleCommand, x => x.ExampleButton)\n                .DisposeWith(disposables);\n        });\n        AvaloniaXamlLoader.Load(this);\n    }\n}\n"})})]})}function h(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>d,a:()=>s});var t=n(67294);const o={},a=t.createContext(o);function s(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);