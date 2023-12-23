"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[70843],{86341:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=o(85893),s=o(11151);const a={id:"how-to-create-a-custom-flyout",title:"How To Create a Custom Flyout"},r="How To Create a Custom Flyout",c={id:"guides/custom-controls/how-to-create-a-custom-flyout",title:"How To Create a Custom Flyout",description:"Creating Custom Flyouts",source:"@site/docs/guides/custom-controls/how-to-create-a-custom-flyout.md",sourceDirName:"guides/custom-controls",slug:"/guides/custom-controls/how-to-create-a-custom-flyout",permalink:"/avalonia-docs/docs/guides/custom-controls/how-to-create-a-custom-flyout",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/custom-controls/how-to-create-a-custom-flyout.md",tags:[],version:"current",frontMatter:{id:"how-to-create-a-custom-flyout",title:"How To Create a Custom Flyout"},sidebar:"documentationSidebar",previous:{title:"How To Create a Custom Controls Library",permalink:"/avalonia-docs/docs/guides/custom-controls/how-to-create-a-custom-controls-library"},next:{title:"How To Create Advanced Custom Controls",permalink:"/avalonia-docs/docs/guides/custom-controls/how-to-create-advanced-custom-controls"}},u={},l=[{value:"Creating Custom Flyouts",id:"creating-custom-flyouts",level:2}];function i(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"how-to-create-a-custom-flyout",children:"How To Create a Custom Flyout"}),"\n",(0,n.jsx)(e.h2,{id:"creating-custom-flyouts",children:"Creating Custom Flyouts"}),"\n",(0,n.jsxs)(e.p,{children:["To create a custom flyout type, derive from FlyoutBase. You'll have to override the abstract method ",(0,n.jsx)(e.code,{children:"CreatePresenter()"})," to specify the presenter the ",(0,n.jsx)(e.code,{children:"Flyout"})," should use to display its content. This can be any type of control, but note that this is the root content for the inner popup and should be styled with background, border, corner radius, etc. to match other popups. You can still use a normal ",(0,n.jsx)(e.code,{children:"FlyoutPresenter"})," if you wish"]}),"\n",(0,n.jsxs)(e.p,{children:["The following example creates a simple ",(0,n.jsx)(e.code,{children:"Flyout"})," that hosts an image"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-csharp",children:"public class MyImageFlyout : FlyoutBase\n{\n    public static readonly StyledProperty<IImage> ImageProperty = AvaloniaProperty.Register<MyImageFlyout, IImage>(nameof(Image));\n\n    [Content]\n    public IImage Image { get; set; }\n\n    protected override Control CreatePresenter()\n    {\n        // In this example, we'll use the default FlyoutPresenter as the root content, and add an Image control to show our content\n        return new FlyoutPresenter\n        {\n            Content = new Image\n            {\n                // Use binding here so the image automatically updates when the property updates\n                [!Image.SourceProperty] = this[!ImageProperty]\n            }\n        };\n    }\n}\n"})}),"\n",(0,n.jsx)(e.h2,{id:""})]})}function d(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(i,{...t})}):i(t)}},11151:(t,e,o)=>{o.d(e,{Z:()=>c,a:()=>r});var n=o(67294);const s={},a=n.createContext(s);function r(t){const e=n.useContext(a);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),n.createElement(a.Provider,{value:e},t.children)}}}]);