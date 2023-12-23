"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[72798],{32827:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=t(85893),i=t(11151);const r={id:"binding-from-code",title:"Binding from Code"},s=void 0,a={id:"data-binding/binding-from-code",title:"Binding from Code",description:"Binding from code in Avalonia works somewhat differently to WPF/UWP. At the low level, Avalonia's binding system is based on Reactive Extensions' IObservable which is then built upon by XAML bindings \\(which can also be instantiated in code\\).",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/data-binding/binding-from-code.md",sourceDirName:"data-binding",slug:"/data-binding/binding-from-code",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/data-binding/binding-from-code",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/data-binding/binding-from-code.md",tags:[],version:"0.10.x",frontMatter:{id:"binding-from-code",title:"Binding from Code"},sidebar:"documentationSidebar",previous:{title:"Binding to Tasks and Observables",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/data-binding/binding-to-tasks-and-observables"},next:{title:"Binding in a Control Template",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/data-binding/binding-in-a-control-template"}},c={},d=[{value:"Subscribing to Changes to a Property",id:"subscribing-to-changes-to-a-property",level:2},{value:"Binding to an observable",id:"binding-to-an-observable",level:2},{value:"Setting a binding in an object initializer",id:"setting-a-binding-in-an-object-initializer",level:2},{value:"Transforming binding values",id:"transforming-binding-values",level:2},{value:"Using XAML bindings from code",id:"using-xaml-bindings-from-code",level:2},{value:"Subscribing to a Property on Any Object",id:"subscribing-to-a-property-on-any-object",level:2},{value:"Binding to <code>INotifyPropertyChanged</code> objects",id:"binding-to-inotifypropertychanged-objects",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Binding from code in Avalonia works somewhat differently to WPF/UWP. At the low level, Avalonia's binding system is based on Reactive Extensions' ",(0,o.jsx)(n.code,{children:"IObservable"})," which is then built upon by XAML bindings (which can also be instantiated in code)."]}),"\n",(0,o.jsx)(n.h2,{id:"subscribing-to-changes-to-a-property",children:"Subscribing to Changes to a Property"}),"\n",(0,o.jsxs)(n.p,{children:["You can subscribe to changes on a property by calling the ",(0,o.jsx)(n.code,{children:"GetObservable"})," method. This returns an ",(0,o.jsx)(n.code,{children:"IObservable<T>"})," which can be used to listen for changes to the property:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"var textBlock = new TextBlock();\nvar text = textBlock.GetObservable(TextBlock.TextProperty);\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Each property that can be subscribed to has a static readonly field called ",(0,o.jsx)(n.code,{children:"[PropertyName]Property"})," which is passed to ",(0,o.jsx)(n.code,{children:"GetObservable"})," in order to subscribe to the property's changes."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"IObservable"})," (part of Reactive Extensions, or rx for short) is out of scope for this guide, but here's an example which uses the returned observable to print a message with the changing property values to the console:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'var textBlock = new TextBlock();\nvar text = textBlock.GetObservable(TextBlock.TextProperty);\ntext.Subscribe(value => Console.WriteLine(value + " Changed"));\n'})}),"\n",(0,o.jsxs)(n.p,{children:["When the returned observable is subscribed, it will return the current value of the property immediately and then push a new value each time the property changes. If you don't want the current value, you can use the rx ",(0,o.jsx)(n.code,{children:"Skip"})," operator:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"var text = textBlock.GetObservable(TextBlock.TextProperty).Skip(1);\n"})}),"\n",(0,o.jsx)(n.h2,{id:"binding-to-an-observable",children:"Binding to an observable"}),"\n",(0,o.jsxs)(n.p,{children:["You can bind a property to an observable using the ",(0,o.jsx)(n.code,{children:"AvaloniaObject.Bind"})," method:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'// We use an Rx Subject here so we can push new values using OnNext\nvar source = new Subject<string>();\nvar textBlock = new TextBlock();\n\n// Bind TextBlock.Text to source\nvar subscription = textBlock.Bind(TextBlock.TextProperty, source);\n\n// Set textBlock.Text to "hello"\nsource.OnNext("hello");\n// Set textBlock.Text to "world!"\nsource.OnNext("world!");\n\n// Terminate the binding\nsubscription.Dispose();\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Notice that the ",(0,o.jsx)(n.code,{children:"Bind"})," method returns an ",(0,o.jsx)(n.code,{children:"IDisposable"})," which can be used to terminate the binding. If you never call this, then then binding will automatically terminate when the observable finishes via ",(0,o.jsx)(n.code,{children:"OnCompleted"})," or ",(0,o.jsx)(n.code,{children:"OnError"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"setting-a-binding-in-an-object-initializer",children:"Setting a binding in an object initializer"}),"\n",(0,o.jsx)(n.p,{children:"It is often useful to set up bindings in object initializers. You can do this using the indexer:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"var source = new Subject<string>();\nvar textBlock = new TextBlock\n{\n    Foreground = Brushes.Red,\n    MaxWidth = 200,\n    [!TextBlock.TextProperty] = source.ToBinding(),\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"Using this method you can also easily bind a property on one control to a property on another:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"var textBlock1 = new TextBlock();\nvar textBlock2 = new TextBlock\n{\n    Foreground = Brushes.Red,\n    MaxWidth = 200,\n    [!TextBlock.TextProperty] = textBlock1[!TextBlock.TextProperty],\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"Of course the indexer can be used outside object initializers too:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"textBlock2[!TextBlock.TextProperty] = textBlock1[!TextBlock.TextProperty];\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The only downside of this syntax is that no ",(0,o.jsx)(n.code,{children:"IDisposable"})," is returned. If you need to manually terminate the binding then you should use the ",(0,o.jsx)(n.code,{children:"Bind"})," method."]}),"\n",(0,o.jsx)(n.h2,{id:"transforming-binding-values",children:"Transforming binding values"}),"\n",(0,o.jsx)(n.p,{children:"Because we're working with observables, we can easily transform the values we're binding!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'var source = new Subject<string>();\nvar textBlock = new TextBlock\n{\n    Foreground = Brushes.Red,\n    MaxWidth = 200,\n    [!TextBlock.TextProperty] = source.Select(x => "Hello " + x).ToBinding(),\n};\n'})}),"\n",(0,o.jsx)(n.h2,{id:"using-xaml-bindings-from-code",children:"Using XAML bindings from code"}),"\n",(0,o.jsxs)(n.p,{children:["Sometimes when you want the additional features that XAML bindings provide, it's easier to use XAML bindings from code. For example, using only observables you could bind to a property on ",(0,o.jsx)(n.code,{children:"DataContext"})," like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"var textBlock = new TextBlock();\nvar viewModelProperty = textBlock.GetObservable(TextBlock.DataContext)\n    .OfType<MyViewModel>()\n    .Select(x => x?.Name);\ntextBlock.Bind(TextBlock.TextProperty, viewModelProperty);\n"})}),"\n",(0,o.jsx)(n.p,{children:"However, it might be preferable to use a XAML binding in this case:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'var textBlock = new TextBlock\n{\n    [!TextBlock.TextProperty] = new Binding("Name")\n};\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Or, if you need an ",(0,o.jsx)(n.code,{children:"IDisposable"})," to terminate the binding:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'var textBlock = new TextBlock();\nvar subscription = textBlock.Bind(TextBlock.TextProperty, new Binding("Name"));\n\nsubscription.Dispose();\n'})}),"\n",(0,o.jsx)(n.h2,{id:"subscribing-to-a-property-on-any-object",children:"Subscribing to a Property on Any Object"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"GetObservable"})," method returns an observable that tracks changes to a property on a single instance. However, if you're writing a control you may want to implement an ",(0,o.jsx)(n.code,{children:"OnPropertyChanged"})," method which isn't tied to an instance of an object."]}),"\n",(0,o.jsxs)(n.p,{children:["To do this you can subscribe to ",(0,o.jsx)(n.a,{href:"http://reference.avaloniaui.net/api/Avalonia/AvaloniaProperty/65237C52",children:(0,o.jsx)(n.code,{children:"AvaloniaProperty.Changed"})})," which is an observable which fires ",(0,o.jsx)(n.em,{children:"every time the property is changed on any instance"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["In WPF this is done by passing a static ",(0,o.jsx)(n.code,{children:"PropertyChangedCallback"})," to the ",(0,o.jsx)(n.code,{children:"DependencyProperty"})," registration method, but this only allows the control author to register a property changed callback."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In addition there is an ",(0,o.jsx)(n.code,{children:"AddClassHandler"})," extension method which can automatically route the event to a method on your control."]}),"\n",(0,o.jsxs)(n.p,{children:["For example if you want to listen to changes to your control's ",(0,o.jsx)(n.code,{children:"Foo"})," property you'd do it like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"static MyControl()\n{\n    FooProperty.Changed.AddClassHandler<MyControl>(x => x.FooChanged);\n}\n\nprivate void FooChanged(AvaloniaPropertyChangedEventArgs e)\n{\n    // The 'e' parameter describes what's changed.\n}\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"binding-to-inotifypropertychanged-objects",children:["Binding to ",(0,o.jsx)(n.code,{children:"INotifyPropertyChanged"})," objects"]}),"\n",(0,o.jsxs)(n.p,{children:["Binding to objects that implements ",(0,o.jsx)(n.code,{children:"INotifyPropertyChanged"})," is also available."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"var textBlock = new TextBlock();\n\nvar binding = new Binding \n{ \n    Source = someObjectImplementingINotifyPropertyChanged, \n    Path = nameof(someObjectImplementingINotifyPropertyChanged.MyProperty)\n}; \n\ntextBlock.Bind(TextBlock.TextProperty, binding);\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var o=t(67294);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);