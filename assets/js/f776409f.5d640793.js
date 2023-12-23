"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[24570],{96643:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var t=o(85893),a=o(11151);const i={id:"binding-to-controls",title:"How To Bind to a Control"},r="How To Bind to a Control",d={id:"guides/data-binding/binding-to-controls",title:"How To Bind to a Control",description:"With Avalonia UI, as well as binding to a data context you can also bind one control directly to another.",source:"@site/docs/guides/data-binding/binding-to-controls.md",sourceDirName:"guides/data-binding",slug:"/guides/data-binding/binding-to-controls",permalink:"/avalonia-docs/docs/guides/data-binding/binding-to-controls",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/data-binding/binding-to-controls.md",tags:[],version:"current",frontMatter:{id:"binding-to-controls",title:"How To Bind to a Control"},sidebar:"documentationSidebar",previous:{title:"How To Bind Style Classes",permalink:"/avalonia-docs/docs/guides/data-binding/binding-classes"},next:{title:"How to Bind to a Collection",permalink:"/avalonia-docs/docs/guides/data-binding/how-to-bind-to-a-collection"}},l={},s=[{value:"Binding to a Named Control",id:"binding-to-a-named-control",level:2},{value:"Binding to an Ancestor",id:"binding-to-an-ancestor",level:2}];function c(n){const e={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"how-to-bind-to-a-control",children:"How To Bind to a Control"}),"\n",(0,t.jsxs)(e.p,{children:["With ",(0,t.jsx)(e.em,{children:"Avalonia UI"}),", as well as binding to a data context you can also bind one control directly to another."]}),"\n",(0,t.jsx)(e.admonition,{type:"info",children:(0,t.jsx)(e.p,{children:"Note that this technique does not use a data context at all. When you do this, you are binding directly to another control itself."})}),"\n",(0,t.jsx)(e.h2,{id:"binding-to-a-named-control",children:"Binding to a Named Control"}),"\n",(0,t.jsxs)(e.p,{children:["If you want to bind to a property on another named control, you can use the control name prefixed by a ",(0,t.jsx)(e.code,{children:"#"})," character."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-markup",children:'<TextBox Name="other">\n\n\x3c!-- Binds to the Text property of the "other" control --\x3e\n<TextBlock Text="{Binding #other.Text}"/>\n'})}),"\n",(0,t.jsx)(e.p,{children:"This is the equivalent to the long-form binding that will be familiar to WPF and UWP users:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-markup",children:'<TextBox Name="other">\n<TextBlock Text="{Binding Text, ElementName=other}"/>\n'})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"Avalonia UI"})," supports both syntaxes."]}),"\n",(0,t.jsx)(e.h2,{id:"binding-to-an-ancestor",children:"Binding to an Ancestor"}),"\n",(0,t.jsxs)(e.p,{children:["You can bind to the (logical control tree) parent of the target using the ",(0,t.jsx)(e.code,{children:"$parent"})," syntax:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-markup",children:'<Border Tag="Hello World!">\n  <TextBlock Text="{Binding $parent.Tag}"/>\n</Border>\n'})}),"\n",(0,t.jsxs)(e.p,{children:["Or to any level of ancestor by using an index with the ",(0,t.jsx)(e.code,{children:"$parent"})," syntax:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-markup",children:'<Border Tag="Hello World!">\n  <Border>\n    <TextBlock Text="{Binding $parent[1].Tag}"/>\n  </Border>\n</Border>\n'})}),"\n",(0,t.jsxs)(e.p,{children:["The index is zero based so ",(0,t.jsx)(e.code,{children:"$parent[0]"})," is equivalent to ",(0,t.jsx)(e.code,{children:"$parent"}),"."]}),"\n",(0,t.jsx)(e.p,{children:"You can also bind to the closest ancestor of a given type, like this:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-markup",children:'<Border Tag="Hello World!">\n  <Decorator>\n    <TextBlock Text="{Binding $parent[Border].Tag}"/>\n  </Decorator>\n</Border>\n'})}),"\n",(0,t.jsx)(e.p,{children:"Finally, you can combine the index and the type:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-markup",children:'<Border Tag="Hello World!">\n  <Border>\n    <Decorator>\n    <TextBlock Text="{Binding $parent[Border;1].Tag}"/>\n    </Decorator>\n  </Border>\n</Border>\n'})}),"\n",(0,t.jsx)(e.p,{children:"If you need to include a XAML namespace in the ancestor type, you separate the namespace and class using a colon, like this:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-markup",children:'<local:MyControl Tag="Hello World!">\n  <Decorator>\n    <TextBlock Text="{Binding $parent[local:MyControl].Tag}"/>\n  </Decorator>\n</local:MyControl>\n'})}),"\n",(0,t.jsx)(e.admonition,{type:"warning",children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"Avalonia UI"})," also supports WPF/UWP's ",(0,t.jsx)(e.code,{children:"RelativeSource"})," syntax which does something similar, but is ",(0,t.jsx)(e.em,{children:"not"})," the same. ",(0,t.jsx)(e.code,{children:"RelativeSource"})," works on the ",(0,t.jsx)(e.em,{children:"visual"})," tree whereas the syntax given here works on the ",(0,t.jsx)(e.em,{children:"logical"})," tree."]})})]})}function h(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},11151:(n,e,o)=>{o.d(e,{Z:()=>d,a:()=>r});var t=o(67294);const a={},i=t.createContext(a);function r(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);