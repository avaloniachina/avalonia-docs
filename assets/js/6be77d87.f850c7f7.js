"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[91836],{1108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(85893),o=n(11151);const r={id:"how-to-create-attached-properties",title:"How To Create Attached Properties"},s="How To Create Attached Properties",i={id:"guides/custom-controls/how-to-create-attached-properties",title:"How To Create Attached Properties",description:"When you need more or let's say foreign properties on avalonia elements, then attached properties are the right thing to use. They can also be used to create so called behaviors to generally modify the hosted gui components. This can be utilized to bind a command to an event for instance.",source:"@site/docs/guides/custom-controls/how-to-create-attached-properties.md",sourceDirName:"guides/custom-controls",slug:"/guides/custom-controls/how-to-create-attached-properties",permalink:"/avalonia-docs/docs/guides/custom-controls/how-to-create-attached-properties",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/custom-controls/how-to-create-attached-properties.md",tags:[],version:"current",frontMatter:{id:"how-to-create-attached-properties",title:"How To Create Attached Properties"},sidebar:"documentationSidebar",previous:{title:"How To Create Advanced Custom Controls",permalink:"/avalonia-docs/docs/guides/custom-controls/how-to-create-advanced-custom-controls"},next:{title:"How To Create Templated Controls",permalink:"/avalonia-docs/docs/guides/custom-controls/how-to-create-templated-controls"}},c={},d=[];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"how-to-create-attached-properties",children:"How To Create Attached Properties"}),"\n",(0,a.jsx)(t.p,{children:"When you need more or let's say foreign properties on avalonia elements, then attached properties are the right thing to use. They can also be used to create so called behaviors to generally modify the hosted gui components. This can be utilized to bind a command to an event for instance."}),"\n",(0,a.jsx)(t.p,{children:"Here we present an example of how to use a command in an MVVM compatible way and bind it to an event."}),"\n",(0,a.jsxs)(t.p,{children:["It may not be the ideal solution as there are projects such as ",(0,a.jsx)(t.a,{href:"https://github.com/wieslawsoltes/AvaloniaBehaviors",children:"Avalonia Behaviors"})," where this is properly done. But it illustrates the following two learnings:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["How to create attached properties in ",(0,a.jsx)(t.em,{children:"Avalonia UI"})]}),"\n",(0,a.jsx)(t.li,{children:"How to use them in a MVVM way."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["First we have to create our attached property. The method ",(0,a.jsx)(t.code,{children:"AvaloniaProperty.RegisterAttached"})," is used for that purpose. Note that by convention the ",(0,a.jsx)(t.strong,{children:"public static"})," CLR-property for the attached property is named ",(0,a.jsx)(t.em,{children:"XxxxProperty"}),". Also note that by convention the name (the parameter) of the attaced property is ",(0,a.jsx)(t.em,{children:"Xxxx"})," without the ",(0,a.jsx)(t.em,{children:"Property"}),". And finally note that by convention one must provide two ",(0,a.jsx)(t.strong,{children:"public static"})," methods called ",(0,a.jsx)(t.em,{children:"SetXxxx(element,value)"})," and ",(0,a.jsx)(t.em,{children:"GetXxxx(element)"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"This call ensures that the property has a type, an owner type and one where it may be used."}),"\n",(0,a.jsxs)(t.p,{children:["The verify method can be used to clean up a value that is being set. Either by returning the corrected value or discard the process by returning ",(0,a.jsx)(t.code,{children:"AvaloniaProperty.UnsetValue"}),". Or one can perform special tasks with the element that the property is hosted by. The getter and setter methods should always just set the value and never do anything beyond. In fact they will usually never be called as the Binding system will recognize the convention and set the properties directly where they are stored."]}),"\n",(0,a.jsxs)(t.p,{children:["In this example file we create two attached properties that interact with each other: A ",(0,a.jsx)(t.em,{children:"Command"})," property and a ",(0,a.jsx)(t.em,{children:"CommandParameter"})," that is used by when invoking the command."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-csharp",children:'/// <summary>\n/// Container class for attached properties. Must inherit from <see cref="AvaloniaObject"/>.\n/// </summary>\npublic class DoubleTappedBehav : AvaloniaObject\n{\n    static DoubleTappedBehav()\n    {\n        CommandProperty.Changed.AddClassHandler<Interactive>(HandleCommandChanged);\n    }\n\n    /// <summary>\n    /// Identifies the <seealso cref="CommandProperty"/> avalonia attached property.\n    /// </summary>\n    /// <value>Provide an <see cref="ICommand"/> derived object or binding.</value>\n    public static readonly AttachedProperty<ICommand> CommandProperty = AvaloniaProperty.RegisterAttached<DoubleTappedBehav, Interactive, ICommand>(\n        "Command", default(ICommand), false, BindingMode.OneTime);\n\n    /// <summary>\n    /// Identifies the <seealso cref="CommandParameterProperty"/> avalonia attached property.\n    /// Use this as the parameter for the <see cref="CommandProperty"/>.\n    /// </summary>\n    /// <value>Any value of type <see cref="object"/>.</value>\n    public static readonly AttachedProperty<object> CommandParameterProperty = AvaloniaProperty.RegisterAttached<DoubleTappedBehav, Interactive, object>(\n        "CommandParameter", default(object), false, BindingMode.OneWay, null);\n\n\n    /// <summary>\n    /// <see cref="CommandProperty"/> changed event handler.\n    /// </summary>\n    private static void HandleCommandChanged(Interactive interactElem, AvaloniaPropertyChangedEventArgs args)\n    {\n        if (args.NewValue is ICommand commandValue)\n        {\n             // Add non-null value\n             interactElem.AddHandler(InputElement.DoubleTappedEvent, Handler);\n        }\n        else\n        {\n             // remove prev value\n             interactElem.RemoveHandler(InputElement.DoubleTappedEvent, Handler);\n        }\n        // local handler fcn\n        static void Handler(object s, RoutedEventArgs e)\n        {\n            if (s is Interactive interactElem)\n            {\n                // This is how we get the parameter off of the gui element.\n                object commandParameter = interactElem.GetValue(CommandParameterProperty);\n                ICommand commandValue = interactElem.GetValue(CommandProperty);\n                if (commandValue?.CanExecute(commandParameter) == true)\n                {\n                    commandValue.Execute(commandParameter);\n                }\n            }\n        }\n    }\n\n\n    /// <summary>\n    /// Accessor for Attached property <see cref="CommandProperty"/>.\n    /// </summary>\n    public static void SetCommand(AvaloniaObject element, ICommand commandValue)\n    {\n        element.SetValue(CommandProperty, commandValue);\n    }\n\n    /// <summary>\n    /// Accessor for Attached property <see cref="CommandProperty"/>.\n    /// </summary>\n    public static ICommand GetCommand(AvaloniaObject element)\n    {\n        return element.GetValue(CommandProperty);\n    }\n\n    /// <summary>\n    /// Accessor for Attached property <see cref="CommandParameterProperty"/>.\n    /// </summary>\n    public static void SetCommandParameter(AvaloniaObject element, object parameter)\n    {\n        element.SetValue(CommandParameterProperty, parameter);\n    }\n\n    /// <summary>\n    /// Accessor for Attached property <see cref="CommandParameterProperty"/>.\n    /// </summary>\n    public static object GetCommandParameter(AvaloniaObject element)\n    {\n        return element.GetValue(CommandParameterProperty);\n    }\n}\n\n'})}),"\n",(0,a.jsxs)(t.p,{children:["In the verify method we utilize the routed event system to attach a new handler. Note that the handler should be detached, again. The value of the property is requested by the normal program mechanisms using ",(0,a.jsx)(t.code,{children:"GetValue()"})," method."]}),"\n",(0,a.jsx)(t.p,{children:"This example UI shows how to use the attached property. After making the namespace known to the XAML compiler it can be used by qualifying it with a dot. Then bindings can be used."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-markup",children:'<UserControl xmlns="https://github.com/avaloniaui"\n             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n             xmlns:loc="clr-namespace:MyApp.Behaviors"\n             x:Class="MyApp.Views.TestView">\n    <ListBox ItemsSource="{Binding Accounts}"\n             SelectedIndex="{Binding SelectedAccountIdx, Mode=TwoWay}"\n             loc:DoubleTappedBehav.Command="{Binding EditCommand}"\n             loc:DoubleTappedBehav.CommandParameter="test77"\n             >\n      <ListBox.ItemTemplate>\n        <DataTemplate>\n          <TextBlock Text="{Binding }" />          \n        </DataTemplate>\n      </ListBox.ItemTemplate>\n    </ListBox>\n</UserControl>\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Although the ",(0,a.jsx)(t.code,{children:"CommandParameter"})," only uses a static value, it can be used with binding, too. When used with this view model, the ",(0,a.jsx)(t.code,{children:"EditCommandExecuted"})," will run once a double click happens."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-csharp",children:'public class TestViewModel : ReactiveObject\n{\n    public ObservableCollection<Profile> Accounts { get; } = new ObservableCollection<Profile>();\n\n    public ReactiveCommand<object, Unit> EditCommand { get; set; }\n\n    public TestViewModel()\n    {\n        EditCommand = ReactiveCommand.CreateFromTask<object, Unit>(EditCommandExecuted);\n    }\n\n    private async Task<Unit> EditCommandExecuted(object p)\n    {\n        // p contains "test77"\n\n        return Unit.Default;\n    }\n}\n'})})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var a=n(67294);const o={},r=a.createContext(o);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);