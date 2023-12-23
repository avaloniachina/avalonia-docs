"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[74874],{46987:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var t=n(85893),i=n(11151);const r={info:"setting-up-your-developer-environment-for-android",title:"Setting up your developer environment for Android"},d=void 0,l={id:"tutorials/developing-for-mobile/android/setting-up-your-developer-environment-for-android",title:"Setting up your developer environment for Android",description:"Install the dotnet SDK",source:"@site/versioned_docs/version-0.10.x/tutorials/developing-for-mobile/android/setting-up-your-developer-environment-for-android.md",sourceDirName:"tutorials/developing-for-mobile/android",slug:"/tutorials/developing-for-mobile/android/setting-up-your-developer-environment-for-android",permalink:"/avalonia-docs/docs/0.10.x/tutorials/developing-for-mobile/android/setting-up-your-developer-environment-for-android",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/tutorials/developing-for-mobile/android/setting-up-your-developer-environment-for-android.md",tags:[],version:"0.10.x",frontMatter:{info:"setting-up-your-developer-environment-for-android",title:"Setting up your developer environment for Android"},sidebar:"documentationSidebar",previous:{title:"Android",permalink:"/avalonia-docs/docs/0.10.x/tutorials/developing-for-mobile/android/"},next:{title:"Build and run your Application on a Simulator",permalink:"/avalonia-docs/docs/0.10.x/tutorials/developing-for-mobile/android/build-and-run-your-application-on-a-simulator"}},a={},s=[{value:"Install the dotnet SDK",id:"install-the-dotnet-sdk",level:3},{value:"Install the Workload",id:"install-the-workload",level:3},{value:"Install the Android SDK",id:"install-the-android-sdk",level:3}];function c(e){const o={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h3,{id:"install-the-dotnet-sdk",children:"Install the dotnet SDK"}),"\n",(0,t.jsxs)(o.p,{children:["First it is very important to install the correct ",(0,t.jsx)(o.a,{href:"https://dotnet.microsoft.com/en-us/download/dotnet/6.0",children:"dotnet SDK"}),". At the time of writing, the lowest sdk version that works is 6.0.200."]}),"\n",(0,t.jsx)(o.h3,{id:"install-the-workload",children:"Install the Workload"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"dotnet workload install android\n"})}),"\n",(0,t.jsxs)(o.admonition,{type:"info",children:[(0,t.jsxs)(o.p,{children:["You may need to run the command with ",(0,t.jsx)(o.code,{children:"sudo"})]}),(0,t.jsxs)(o.p,{children:["You may also need to uninstall old versions. ",(0,t.jsx)(o.code,{children:"dotnet workload remove android"})]})]}),"\n",(0,t.jsx)(o.h3,{id:"install-the-android-sdk",children:"Install the Android SDK"}),"\n",(0,t.jsx)(o.p,{children:"There are a few ways to install the Android SDK."}),"\n",(0,t.jsx)(o.p,{children:"If you have Visual Studio or Visual Studio for Mac you should follow the guide found here:"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/xamarin/android/get-started/installation/android-sdk",children:"Setting up Android SDK for Xamarin"})}),"\n",(0,t.jsx)(o.p,{children:"If you use Rider then please follow the guide here:"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"https://www.jetbrains.com/help/rider/Xamarin.html",children:"Xamarin | JetBrains Rider"})}),"\n",(0,t.jsx)(o.p,{children:"Alternatively you can install the Android command line tools from here:"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"https://developer.android.com/studio#command-tools",children:"Download Android Studio & SDK"})}),"\n",(0,t.jsx)(o.p,{children:"This has a command line based SDK manager that can be used to install the SDK."}),"\n",(0,t.jsx)(o.p,{children:"There is also a tool in development called maui check that can do all of this for you automatically:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"dotnet tool install -g Redth.Net.Maui.Check\nmaui-check\n"})}),"\n",(0,t.jsx)(o.p,{children:"This should install all the required SDKs and tools."}),"\n",(0,t.jsx)(o.p,{children:"This will allow you to build applications for Android and run them in the simulator on any platform."})]})}function u(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,o,n)=>{n.d(o,{Z:()=>l,a:()=>d});var t=n(67294);const i={},r=t.createContext(i);function d(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);