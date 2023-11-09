"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[72734],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),y=a,m=p["".concat(s,".").concat(y)]||p[y]||c[y]||r;return n?o.createElement(m,l(l({ref:t},d),{},{components:n})):o.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},61116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACoCAYAAADdP20gAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAA7rSURBVHhe7Z0LqBbF+8fHP15SS80udrPMbmhKmWVSKVppqWQoWSbZDaXoppVoFNldUqxUCBItlMJKQyFMLRNDM8wykdQi7WJqF/GSt9I80O//ec7MObuv7/ued9LT+57j9wPL7szs2d2z853nmXl39tk6W7Zs+efvv/92f/zxh7v44otdDCtXrnQdO3b0KXG08H9+LUTBSDQiGolGRCPRiGgkGhGNRCOikWhENCXxO83OnTvd/v37fUrk4phjjnHHH3+8TxWPoovmhx9+MNGIwkA0rVu39qniUFT3hFgkmDhK4Z4VVTRySf+OYt83dYRFNBKNiEaiEdFINCIaiUZEU2NE89dff7k333zTDR482F166aVu+PDhbsmSJb60nPHjx7v58+fb9uzZs22fQvj+++/tmIXCOdg/19D3l19+sfJwLYXA/mvWrPGp0qZGiAbBvPjii27fvn1u7NixbunSpW7IkCFuypQpJo5s9O/f302YMMGnqofFixf7rTTLly/3W3E0bNjQb5U2NUI0n3zyiTvuuOPcvffe60477TS7ue3atTMBjRkzpmg/dmVausCcOXP8Vu2kRohmxowZ7vrrr/epShDQyy+/bJYoE1wD7irAPq+99pq5ARZcXba/A/Kzub8kffr0cdu3bz/EpYT0wIEDbR1Inh8Xm+/8pU7JiwYr8s0337hzzjnH56Tp2rWriacqcG+NGzd2CxcutGXDhg3uvffe86WVUJHsy3FZcoHl69mzp1u1apXPKefTTz91/fr186lKOOZZZ51l5540aZK52unTp/vSmkXJi2bHjh22Phx/T+vftWuXtXAe+LFgSajEJEEw5557rvWJquKaa65xEydOrLAYCHzq1Kmue/fulg4E69OrV6+K899xxx22b020NiUvmubNm9v6cG7upk2b3BlnnOFT5VBxmZYEwQRxFQIWDjf19ddfW5o1aY6dhPN/8MEHFa6RpUuXLlbGSKumUfKioQLatGljw+Js0O84UjceC0M/JWaojLVBEMBIDtFkg/x33333kKUQ11pq1IiO8KBBg9yCBQt8qhLE8sgjj1Tpulq2bOk2b97s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",l="data:image/png;base64,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",i={id:"flyouts",title:"Flyouts"},s=void 0,u={unversionedId:"controls/flyouts",id:"version-0.10.x/controls/flyouts",title:"Flyouts",description:"Overview",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/controls/flyouts.md",sourceDirName:"controls",slug:"/controls/flyouts",permalink:"/avalonia-docs/zh-Hans/docs/controls/flyouts",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/controls/flyouts.md",tags:[],version:"0.10.x",frontMatter:{id:"flyouts",title:"Flyouts"},sidebar:"documentationSidebar",previous:{title:"Expander",permalink:"/avalonia-docs/zh-Hans/docs/controls/expander"},next:{title:"Grid",permalink:"/avalonia-docs/zh-Hans/docs/controls/grid"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"FlyoutBase",id:"flyoutbase",level:2},{value:"Common Properties for all Flyouts",id:"common-properties-for-all-flyouts",level:2},{value:"Common Methods for all Flyouts",id:"common-methods-for-all-flyouts",level:2},{value:"Reference",id:"reference",level:2},{value:"Source code",id:"source-code",level:2},{value:"Flyout Types",id:"flyout-types",level:2},{value:"Reference",id:"reference-1",level:2},{value:"Source code",id:"source-code-1",level:2},{value:"Creating Flyouts",id:"creating-flyouts",level:2},{value:"Attached Flyouts",id:"attached-flyouts",level:3},{value:"Context Flyouts",id:"context-flyouts",level:3},{value:"Sharing Flyouts",id:"sharing-flyouts",level:2},{value:"Styling Flyouts",id:"styling-flyouts",level:2},{value:"Creating Custom Flyouts",id:"creating-custom-flyouts",level:2}],c={toc:p},y="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Flyouts are light dismissible containers that show arbitrary UI content. Flyouts are not controls and can be declared as a resource and shared between multiple elements within your app."),(0,a.kt)("h2",{id:"flyoutbase"},"FlyoutBase"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"FlyoutBase")," is the base class for all flyout implementations."),(0,a.kt)("h2",{id:"common-properties-for-all-flyouts"},"Common Properties for all Flyouts"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"IsOpen")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Gets whether the Flyout is currently open.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Placement")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Gets or sets where the Flyout opens relative to its target")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ShowMode")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the desired show mode of the Flyout, which determines if it is a transient (no focus) UI or not")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Target")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Gets the target the Flyout is currently assigned to")))),(0,a.kt)("h2",{id:"common-methods-for-all-flyouts"},"Common Methods for all Flyouts"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ShowAt(Control)")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Shows the Flyout at the specified target")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ShowAt(Control, bool)")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Shows the Flyout at the specified target, but places it at the current pointer position")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Hide")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Hides the Flyout")))),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/FlyoutBase/"},"FlyoutBase")),(0,a.kt)("h2",{id:"source-code"},"Source code"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/Flyouts/FlyoutBase.cs"},"FlyoutBase.cs")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/Flyouts/FlyoutShowMode.cs"},"FlyoutShowMode.cs (enum)")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/Flyouts/FlyoutPlacementMode.cs"},"FlyoutPlacementMode.cs (enum)")),(0,a.kt)("h2",{id:"flyout-types"},"Flyout Types"),(0,a.kt)("p",null,"There are two built-in types of Flyouts: ",(0,a.kt)("inlineCode",{parentName:"p"},"Flyout")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"MenuFlyout"),". A regular ",(0,a.kt)("inlineCode",{parentName:"p"},"Flyout")," has no special logic and is just a simple container for any arbitrary UI content."),(0,a.kt)("img",{className:"center",src:r,alt:"Basic Flyout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MenuFlyout"),", as the name implies, creates a Menu."),(0,a.kt)("img",{className:"center",src:l,alt:"Basic MenuFlyout"}),(0,a.kt)("h2",{id:"reference-1"},"Reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/Flyout/"},"Flyout")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/MenuFlyout/"},"MenuFlyout")),(0,a.kt)("h2",{id:"source-code-1"},"Source code"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/Flyouts/Flyout.cs"},"Flyout.cs")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/Flyouts/MenuFlyout.cs"},"MenuFlyout.cs")),(0,a.kt)("h2",{id:"creating-flyouts"},"Creating Flyouts"),(0,a.kt)("p",null,"In order to be shown Flyouts have to be attached to a specific control, though this is not a static assignment and can be changed at runtime. ",(0,a.kt)("inlineCode",{parentName:"p"},"Button")," has a ",(0,a.kt)("inlineCode",{parentName:"p"},"Flyout")," property that can be used to open a Flyout upon click."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<Button Content="Click me">\n    <Button.Flyout>\n        <Flyout>\n            <TextBlock Text="Flyout Content!" />\n        </Flyout>\n    </Button.Flyout>\n</Button>\n')),(0,a.kt)("h3",{id:"attached-flyouts"},"Attached Flyouts"),(0,a.kt)("p",null,"For other controls that don't have built-in support for flyouts, one can be assigned using attached flyouts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<Border Background="Red" PointerPressed="Border_PointerPressed">\n    <FlyoutBase.AttachedFlyout>\n        <Flyout>\n            <TextBlock Text="AttachedFlyout Content!" />\n        </Flyout>\n    </FlyoutBase.AttachedFlyout>\n</Border>\n')),(0,a.kt)("p",null,"Attached Flyouts can be shown by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"ShowAttachedFlyout")," method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public void Border_PointerPressed(object sender, RoutedEventArgs args)\n{\n    FlyoutBase.ShowAttachedFlyout(sender as Control);\n}\n")),(0,a.kt)("h3",{id:"context-flyouts"},"Context Flyouts"),(0,a.kt)("p",null,"Controls can also utilize Context Flyouts, which is an alternative/replacement to ",(0,a.kt)("inlineCode",{parentName:"p"},"ContextMenu"),"s that provides a sharable, richer UI experience than simple context menus. NOTE: A control cannot have both a ",(0,a.kt)("inlineCode",{parentName:"p"},"ContextFlyout")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ContextMenu")," at the same time."),(0,a.kt)("p",null,"ContextFlyouts are invoked automatically like normal ",(0,a.kt)("inlineCode",{parentName:"p"},"ContextMenu"),"s. Although custom behaviors and logic an be implemented by invoking it manually (like any other flyout: ",(0,a.kt)("inlineCode",{parentName:"p"},"ContextFlyout.ShowAt(Control)"),") or responding to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ContextRequested")," event"),(0,a.kt)("h2",{id:"sharing-flyouts"},"Sharing Flyouts"),(0,a.kt)("p",null,"As previously mentioned, Flyouts can be shared between various elements within your app."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<Window.Resources>\n    <Flyout x:Key="MySharedFlyout">\n        \x3c!-- Flyout content here --\x3e\n    </Flyout>\n</Window.Resources>\n\n<Button Content="Click me!" Flyout="{StaticResource MySharedFlyout}" />\n\n<Button Content="Now click me!" Flyout="{StaticResource MySharedFlyout}" />\n')),(0,a.kt)("h2",{id:"styling-flyouts"},"Styling Flyouts"),(0,a.kt)("p",null,"Although ",(0,a.kt)("inlineCode",{parentName:"p"},"Flyout"),"s are not controls themselves, their general appearance can still be customized by targeting the presenter the ",(0,a.kt)("inlineCode",{parentName:"p"},"Flyout")," uses to display its content. For a normal ",(0,a.kt)("inlineCode",{parentName:"p"},"Flyout")," this is ",(0,a.kt)("inlineCode",{parentName:"p"},"FlyoutPresenter")," and for ",(0,a.kt)("inlineCode",{parentName:"p"},"MenuFlyout")," this is ",(0,a.kt)("inlineCode",{parentName:"p"},"MenuFlyoutPresenter"),". Because flyout presenters are not exposed, special style classes that should pertain to specific flyouts can be passed using the ",(0,a.kt)("inlineCode",{parentName:"p"},"FlyoutPresenterClasses")," property on ",(0,a.kt)("inlineCode",{parentName:"p"},"FlyoutBase")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<Style Selector="FlyoutPresenter.mySpecialClass">\n    <Setter Property="Background" Value="Red" />\n</Style>\n\n<Flyout FlyoutPresenterClasses="mySpecialClass">\n    \x3c!-- Flyout content here --\x3e\n</Flyout>\n')),(0,a.kt)("h2",{id:"creating-custom-flyouts"},"Creating Custom Flyouts"),(0,a.kt)("p",null,"To create a custom flyout type, derive from FlyoutBase. You'll have to override the abstract method ",(0,a.kt)("inlineCode",{parentName:"p"},"CreatePresenter()")," to specify the presenter the ",(0,a.kt)("inlineCode",{parentName:"p"},"Flyout")," should use to display its content. This can be any type of control, but note that this is the root content for the inner popup and should be styled with background, border, corner radius, etc. to match other popups. You can still use a normal ",(0,a.kt)("inlineCode",{parentName:"p"},"FlyoutPresenter")," if you wish"),(0,a.kt)("p",null,"The following example creates a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"Flyout")," that hosts an image"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public class MyImageFlyout : FlyoutBase\n{\n    public static readonly StyledProperty<IImage> ImageProperty = AvaloniaProperty.Register<MyImageFlyout, IImage>(nameof(Image));\n\n    [Content]\n    public IImage Image { get; set; }\n\n    protected override Control CreatePresenter()\n    {\n        // In this example, we'll use the default FlyoutPresenter as the root content, and add an Image control to show our content\n        return new FlyoutPresenter\n        {\n            Content = new Image\n            {\n                // Use binding here so the image automatically updates when the property updates\n                [!Image.SourceProperty] = this[!ImageProperty]\n            }\n        };\n    }\n}\n")))}m.isMDXComponent=!0}}]);