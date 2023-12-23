"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[85529],{66832:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(85893),r=t(11151);const o={id:"converting-binding-values",title:"Converting Binding Values"},s=void 0,a={id:"data-binding/converting-binding-values",title:"Converting Binding Values",description:"Negating Values",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/data-binding/converting-binding-values.md",sourceDirName:"data-binding",slug:"/data-binding/converting-binding-values",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/data-binding/converting-binding-values",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/data-binding/converting-binding-values.md",tags:[],version:"0.10.x",frontMatter:{id:"converting-binding-values",title:"Converting Binding Values"},sidebar:"documentationSidebar",previous:{title:"Binding to Controls",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/data-binding/binding-to-controls"},next:{title:"Binding to Commands",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/data-binding/binding-to-commands"}},l={},c=[{value:"Negating Values",id:"negating-values",level:3},{value:"Binding Converters",id:"binding-converters",level:3},{value:"Built-in Converters",id:"built-in-converters",level:3},{value:"Examples",id:"examples",level:3},{value:"Samples",id:"samples",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"negating-values",children:"Negating Values"}),"\n",(0,i.jsxs)(n.p,{children:['Often you will need to negate a value that you\'re binding to. A frequent use for this is to show/hide a control or to enable/disable it. You can negate a binding value by prepending a "bang" operator: ',(0,i.jsx)(n.code,{children:"!"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"For example you might want to show one control when another control is disabled."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<StackPanel>\n  <TextBox Name="input" IsEnabled="{Binding AllowInput}"/>\n  <TextBlock IsVisible="{Binding !AllowInput}">Sorry, no can do!</TextBlock>\n</StackPanel>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Negation also works when binding to non-boolean values. First of all, the value is converted to a boolean using ",(0,i.jsx)(n.code,{children:"Convert.ToBoolean"})," and the result from this is negated. Because the integer value ",(0,i.jsx)(n.code,{children:"0"})," is considered ",(0,i.jsx)(n.code,{children:"false"})," and all other integer values are considered ",(0,i.jsx)(n.code,{children:"true"}),", you can use this to show a message when a collection is empty:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<Panel>\n  <ListBox Items="{Binding Items}"/>\n  <TextBlock IsVisible="{Binding !Items.Count}">No results found</TextBlock>\n</Panel>\n'})}),"\n",(0,i.jsx)(n.p,{children:'A "double-bang" can be used to convert a non-boolean value to a boolean value. For example to hide a control when a collection is empty:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-markup",children:'<Panel>\n  <ListBox Items="{Binding Items}" IsVisible="{Binding !!Items.Count}"/>\n</Panel>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"binding-converters",children:"Binding Converters"}),"\n",(0,i.jsxs)(n.p,{children:["For more advanced conversions, Avalonia supports ",(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/en-gb/dotnet/api/system.windows.data.ivalueconverter?view=netframework-4.7.1",children:(0,i.jsx)(n.code,{children:"IValueConverter"})})," the same as other XAML frameworks."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Note: The ",(0,i.jsx)(n.code,{children:"IValueConverter"})," interface is not available in .NET standard 2.0 so we ship our own, in the ",(0,i.jsx)(n.code,{children:"Avalonia.Data.Converters"})," namespace."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Usage is identical to other XAML frameworks:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:local="clr-namespace:ExampleApp;assembly=ExampleApp">\n\n  <Window.Resources>\n    <local:MyConverter x:Key="myConverter"/>\n  </Window.Resources>\n\n  <TextBlock Text="{Binding Value, Converter={StaticResource myConverter}}"/>\n</Window>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"built-in-converters",children:"Built-in Converters"}),"\n",(0,i.jsx)(n.p,{children:"Avalonia supplies a number of built-in value converters for common scenarios:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Converter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"StringConverters.IsNullOrEmpty"})}),(0,i.jsxs)(n.td,{children:["Returns ",(0,i.jsx)(n.code,{children:"true"})," if the input string is null or empty"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"StringConverters.IsNotNullOrEmpty"})}),(0,i.jsxs)(n.td,{children:["Returns ",(0,i.jsx)(n.code,{children:"false"})," if the input string is null or empty"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ObjectConverters.IsNull"})}),(0,i.jsxs)(n.td,{children:["Returns ",(0,i.jsx)(n.code,{children:"true"})," if the input is null"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ObjectConverters.IsNotNull"})}),(0,i.jsxs)(n.td,{children:["Returns ",(0,i.jsx)(n.code,{children:"false"})," if the input is null"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"BoolConverters.And"})}),(0,i.jsxs)(n.td,{children:["A multi-value converter that returns ",(0,i.jsx)(n.code,{children:"true"})," if all inputs are true."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"BoolConverters.Or"})}),(0,i.jsxs)(n.td,{children:["A multi-value converter that returns ",(0,i.jsx)(n.code,{children:"true"})," if any input is true."]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["You can see find list of default converters here: ",(0,i.jsx)(n.a,{href:"https://docs.avaloniaui.net/api/untitled/avalonia-ui-framework-23/avalonia-ui-framework-24#classtypes",children:"Avalonia.Data.Converters Namespace"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.p,{children:["Hiding a ",(0,i.jsx)(n.code,{children:"TextBlock"})," if the bound text is null or empty:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<TextBlock Text="{Binding MyText}"\n           IsVisible="{Binding MyText, Converter={x:Static StringConverters.IsNotNullOrEmpty}}"/>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Hiding a ",(0,i.jsx)(n.code,{children:"ContentControl"})," if the bound content is null or empty:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<ContentControl Content="{Binding MyContent}"\n                IsVisible="{Binding MyContent, Converter={x:Static ObjectConverters.IsNotNull}}"/>\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:'from now on assume converters are imported as shown in the previous "Binding Converters" section'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Convert text to specific case from a parameter"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<TextBlock Text="{Binding TheContent, \n    Converter={StaticResource textCaseConverter},\n    ConverterParameter=lower}" />\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'public class TextCaseConverter : IValueConverter\n{\n    public static readonly TextCaseConverter Instance = new();\n\n    public object? Convert( object? value, Type targetType, object? parameter, CultureInfo culture )\n    {\n        if (value is string sourceText && parameter is string targetCase\n            && targetType.IsAssignableTo(typeof(string)))\n        {\n            switch (targetCase)\n            {\n                case "upper":\n                case "SQL":\n                    return sourceText.ToUpper();\n                case "lower":\n                    return sourceText.ToLower();\n                case "title": // Every First Letter Uppercase\n                    var txtinfo = new System.Globalization.CultureInfo("en-US",false).TextInfo;\n                    return txtinfo.ToTitleCase(sourceText);\n                default:\n                    // invalid option, return the exception below\n                    break;\n            }\n        }\n        // converter used for the wrong type\n        return new BindingNotification(new InvalidCastException(), BindingErrorType.Error);\n    }\n\n    public object ConvertBack( object? value, Type targetType, object? parameter, CultureInfo culture )\n    {\n      throw new NotSupportedException();\n    }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Converting a bound object to different target types contextually"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<Image Width="42" \n       Source="{Binding Animal, Converter={StaticResource animalConverter}}"/>\n<TextBlock \n       Text="{Binding Animal, Converter={StaticResource animalConverter}}" />\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'public class AnimalConverter : IValueConverter\n{\n    public static readonly AnimalConverter Instance = new();\n\n    public object? Convert( object? value, Type targetType, object? parameter, CultureInfo culture )\n    {\n        if (value is Animal animal)\n        {\n            if (targetType.IsAssignableTo(typeof(IImage)))\n            {\n                img = @"icons/generic-animal-placeholder.png"\n                switch (animal)\n                {\n                    case Dog d:\n                      img = d.IsGoodBoy ? @"icons/dog-happy.png" : @"icons/dog.png";\n                      break;\n                    case Cat:\n                      img = @"icons/cat.png";\n                      break;\n                    // etc. etc.\n                }\n                // see https://docs.avaloniaui.net/docs/guides/data-binding/how-to-create-a-custom-data-binding-converter\n                return BitmapAssetValueConverter.Instance\n                    .Convert(img, typeof(Bitmap), parameter, culture);\n            }\n            else if (targetType.IsAssignableTo(typeof(string)))\n            {\n                return !string.IsNullOrEmpty(animal.NickName) ? \n                    $"{animal.Name} \\"{animal.NickName}\\"" : animal.Name;\n            }\n        }\n        // converter used for the wrong type\n        return new BindingNotification(new InvalidCastException(), BindingErrorType.Error);\n        \n    }\n\n    public object ConvertBack( object? value, Type targetType, object? parameter, CultureInfo culture )\n    {\n      throw new NotSupportedException();\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"samples",children:"Samples"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/AvaloniaUI/Avalonia.Samples/tree/main/src/Avalonia.Samples/MVVM/ValueConversionSample",children:"ValueConverter Sample"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(67294);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);