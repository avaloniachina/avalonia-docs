"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[27176],{87726:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var t=o(85893),i=o(11151);const a={id:"embed-native-views",title:"Embed Native Views"},d=void 0,r={id:"guides/platforms/android/embed-native-views",title:"Embed Native Views",description:"In Avalonia UI, you can use the native control host feature on Android by creating an instance of AndroidViewControlHandle from an Android view.",source:"@site/docs/guides/platforms/android/embed-native-views.md",sourceDirName:"guides/platforms/android",slug:"/guides/platforms/android/embed-native-views",permalink:"/avalonia-docs/docs/guides/platforms/android/embed-native-views",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/platforms/android/embed-native-views.md",tags:[],version:"current",frontMatter:{id:"embed-native-views",title:"Embed Native Views"},sidebar:"documentationSidebar",previous:{title:"How To Set Up an Android Dev Environment",permalink:"/avalonia-docs/docs/guides/platforms/android/setting-up-your-developer-environment-for-android"},next:{title:"How To Develop For Mobile iOS",permalink:"/avalonia-docs/docs/guides/platforms/ios/"}},s={},l=[];function c(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["In Avalonia UI, you can use the native control host feature on Android by creating an instance of ",(0,t.jsx)(n.code,{children:"AndroidViewControlHandle"})," from an Android view."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["This documentation is based on the ",(0,t.jsx)(n.a,{href:"https://github.com/AvaloniaUI/Avalonia/blob/master/samples/ControlCatalog.Android/EmbedSample.Android.cs",children:"following example"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["We have a class named ",(0,t.jsx)(n.code,{children:"EmbedSampleAndroid"})," implementing the ",(0,t.jsx)(n.code,{children:"INativeDemoControl"})," interface. This class contains a method ",(0,t.jsx)(n.code,{children:"CreateControl"})," which demonstrates how to use native control host."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:' public interface INativeDemoControl\n    {\n        /// <param name="isSecond">Used to specify which control should be displayed as a demo</param>\n        /// <param name="parent"></param>\n        /// <param name="createDefault"></param>\n        IPlatformHandle CreateControl(bool isSecond, IPlatformHandle parent, Func<IPlatformHandle> createDefault);\n    }\n\npublic class EmbedSampleAndroid : INativeDemoControl\n{\n    public IPlatformHandle CreateControl(bool isSecond, IPlatformHandle parent, Func<IPlatformHandle> createDefault)\n    {\n        var parentContext = (parent as AndroidViewControlHandle)?.View.Context\n            ?? global::Android.App.Application.Context;\n\n        if (isSecond)\n        {\n            var webView = new global::Android.Webkit.WebView(parentContext);\n            webView.LoadUrl("https://www.android.com/");\n\n            return new AndroidViewControlHandle(webView);\n        }\n        else\n        {\n            var button = new global::Android.Widget.Button(parentContext) { Text = "Hello world" };\n            var clickCount = 0;\n            button.Click += (sender, args) =>\n            {\n                clickCount++;\n                button.Text = $"Click count {clickCount}";\n            };\n\n            return new AndroidViewControlHandle(button);\n        }\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this method, ",(0,t.jsx)(n.code,{children:"CreateControl"}),", the ",(0,t.jsx)(n.code,{children:"parent"})," object is cast to ",(0,t.jsx)(n.code,{children:"AndroidViewControlHandle"})," to get the ",(0,t.jsx)(n.code,{children:"View"}),"'s Context. If this fails, the global application context is used."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"isSecond"})," parameter is used to decide which control to create. If it's ",(0,t.jsx)(n.code,{children:"true"}),", a ",(0,t.jsx)(n.code,{children:"WebView"}),' is created, navigates to "',(0,t.jsx)(n.a,{href:"https://www.android.com/",children:"https://www.android.com/"}),'", and its instance is wrapped in an ',(0,t.jsx)(n.code,{children:"AndroidViewControlHandle"})," which is then returned."]}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"isSecond"})," is ",(0,t.jsx)(n.code,{children:"false"}),', a Button is created with the text "Hello world". The button\'s ',(0,t.jsx)(n.code,{children:"Click"})," event is wired up to an event handler that increases the ",(0,t.jsx)(n.code,{children:"clickCount"})," and updates the button's text to display the number of clicks. The ",(0,t.jsx)(n.code,{children:"Button"})," instance is also wrapped in an ",(0,t.jsx)(n.code,{children:"AndroidViewControlHandle"})," and returned."]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>d});var t=o(67294);const i={},a=t.createContext(i);function d(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);