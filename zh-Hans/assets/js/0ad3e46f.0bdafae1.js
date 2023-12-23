"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[23651],{71428:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=t(85893),o=t(11151),i=t(73992),r=t(18679);const l={id:"the-model-view-viewmodel-pattern-mvvm",title:"The Model-View-ViewModel Pattern"},s=void 0,d={id:"getting-started/programming-with-avalonia/the-model-view-viewmodel-pattern-mvvm",title:"The Model-View-ViewModel Pattern",description:"As well as writing code in code-behind, Avalonia supports using the Model-View-ViewModel pattern \\(or MVVM\\). MVVM is a common way to structure UI applications that separates view logic from application logic in a way that allows your applications to become unit-testable.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/getting-started/programming-with-avalonia/the-model-view-viewmodel-pattern-mvvm.md",sourceDirName:"getting-started/programming-with-avalonia",slug:"/getting-started/programming-with-avalonia/the-model-view-viewmodel-pattern-mvvm",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/getting-started/programming-with-avalonia/the-model-view-viewmodel-pattern-mvvm",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/getting-started/programming-with-avalonia/the-model-view-viewmodel-pattern-mvvm.md",tags:[],version:"0.10.x",frontMatter:{id:"the-model-view-viewmodel-pattern-mvvm",title:"The Model-View-ViewModel Pattern"},sidebar:"documentationSidebar",previous:{title:"Programming with Avalonia",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/getting-started/programming-with-avalonia/"},next:{title:"Controls & Layouts",permalink:"/avalonia-docs/zh-Hans/docs/0.10.x/getting-started/programming-with-avalonia/controls-and-layouts"}},c={},u=[];function h(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["As well as writing code in code-behind, Avalonia supports using the ",(0,a.jsx)(n.a,{href:"../../guides/basics/mvvm",children:"Model-View-ViewModel"})," pattern (or MVVM). MVVM is a common way to structure UI applications that separates view logic from application logic in a way that allows your applications to become unit-testable."]}),"\n",(0,a.jsxs)(n.p,{children:["MVVM relies upon Avalonia's ",(0,a.jsx)(n.a,{href:"../../data-binding/bindings",children:"binding"})," capabilities to separate your application into a View layer which displays standard Avalonia windows and controls, and a ViewModel layer which defines the functionality of the application independently of Avalonia itself."]}),"\n",(0,a.jsx)(n.p,{children:"The following example shows the code from the previous example implemented using the MVVM pattern:"}),"\n",(0,a.jsxs)(i.Z,{defaultValue:"xaml",values:[{label:"XAML",value:"xaml"},{label:"C#",value:"cs"}],children:[(0,a.jsx)(r.Z,{value:"xaml",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        x:Class="AvaloniaApplication1.MainWindow"\n        Title="Window with Button"\n        Width="250" Height="100">\n\n  \x3c!-- Add button to window --\x3e\n  <Button Content="{Binding ButtonText}" Command="{Binding ButtonClicked}"/>\n</Window>\n'})})}),(0,a.jsx)(r.Z,{value:"cs",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cs",children:'using System.ComponentModel;\nusing Avalonia.Controls;\nusing Avalonia.Markup.Xaml;\n\nnamespace AvaloniaApplication1\n{\n    public partial class MainWindow : Window\n    {\n        public MainWindow()\n        {\n            InitializeComponent();\n            DataContext = new MainWindowViewModel();\n        }\n    }\n\n    public class MainWindowViewModel : INotifyPropertyChanged\n    {\n        string buttonText = "Click Me!";\n\n        public string ButtonText\n        {\n            get => buttonText;\n            set \n            {\n                buttonText = value;\n                PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(ButtonText)));\n            }\n        }\n\n        public event PropertyChangedEventHandler PropertyChanged;\n\n        public void ButtonClicked() => ButtonText = "Hello, Avalonia!";\n    }\n}\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["In this example, the code-behind assigns the ",(0,a.jsx)(n.code,{children:"Window"}),"'s ",(0,a.jsx)(n.a,{href:"../../data-binding/the-datacontext",children:(0,a.jsx)(n.code,{children:"DataContext"})})," property to an instance of ",(0,a.jsx)(n.code,{children:"MainWindowViewModel"}),". The XAML then uses an Avalonia ",(0,a.jsx)(n.a,{href:"../../data-binding/bindings",children:(0,a.jsx)(n.code,{children:"{Binding}"})})," to bind the ",(0,a.jsx)(n.code,{children:"Button"}),"'s ",(0,a.jsx)(n.code,{children:"Content"})," property to the ",(0,a.jsx)(n.code,{children:"ButtonText"})," property on the ",(0,a.jsx)(n.code,{children:"MainWindowViewModel"}),". It also binds the ",(0,a.jsx)(n.code,{children:"Button"}),"'s ",(0,a.jsx)(n.a,{href:"../../data-binding/binding-to-commands",children:(0,a.jsx)(n.code,{children:"Command"})})," property to the ",(0,a.jsx)(n.code,{children:"ButtonClicked"})," method on the ",(0,a.jsx)(n.code,{children:"MainWindowViewModel"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["When the ",(0,a.jsx)(n.code,{children:"Button"})," is clicked it invokes its ",(0,a.jsx)(n.code,{children:"Command"}),", causing the bound ",(0,a.jsx)(n.code,{children:"MainWindowViewModel.ButtonClicked"})," method to be called. This method then sets the ",(0,a.jsx)(n.code,{children:"ButtonText"})," property which raises the ",(0,a.jsx)(n.code,{children:"INotifyPropertyChanged.PropertyChanged"})," event, causing the ",(0,a.jsx)(n.code,{children:"Button"})," to re-read its bound value and update the UI."]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},18679:(e,n,t)=>{t.d(n,{Z:()=>r});t(67294);var a=t(90512);const o={tabItem:"tabItem_Ymn6"};var i=t(85893);function r(e){let{children:n,hidden:t,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,r),hidden:t,children:n})}},73992:(e,n,t)=>{t.d(n,{Z:()=>V});var a=t(67294),o=t(90512),i=t(72957),r=t(16550),l=t(81270),s=t(75238),d=t(33609),c=t(92560);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const o=(0,r.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(o.location.search);n.set(i,e),o.replace({...o.location,search:n.toString()})}),[i,o])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,i=h(e),[r,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[d,u]=m({queryString:t,groupId:o}),[v,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,i]=(0,c.Nk)(t);return[o,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:o}),w=(()=>{const e=d??v;return p({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{w&&s(w)}),[w]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var g=t(51048);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function f(e){let{className:n,block:t,selectedValue:a,selectValue:r,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const n=e.currentTarget,t=s.indexOf(n),o=l[t].value;o!==a&&(d(n),r(o))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>s.push(e),onKeyDown:u,onClick:c,...i,className:(0,o.Z)("tabs__item",w.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:o}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function y(e){const n=v(e);return(0,b.jsxs)("div",{className:(0,o.Z)("tabs-container",w.tabList),children:[(0,b.jsx)(f,{...e,...n}),(0,b.jsx)(x,{...e,...n})]})}function V(e){const n=(0,g.Z)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var a=t(67294);const o={},i=a.createContext(o);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);