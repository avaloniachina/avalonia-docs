"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[51874],{51508:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=i(85893),n=i(11151);const s={id:"dealing-with-platforms",title:"Dealing with Multiple Platforms"},r=void 0,o={id:"guides/building-cross-platform-applications/dealing-with-platforms",title:"Dealing with Multiple Platforms",description:"Managing Platform Differences & Capabilities",source:"@site/docs/guides/building-cross-platform-applications/dealing-with-platforms.md",sourceDirName:"guides/building-cross-platform-applications",slug:"/guides/building-cross-platform-applications/dealing-with-platforms",permalink:"/avalonia-docs/docs/guides/building-cross-platform-applications/dealing-with-platforms",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/building-cross-platform-applications/dealing-with-platforms.md",tags:[],version:"current",frontMatter:{id:"dealing-with-platforms",title:"Dealing with Multiple Platforms"},sidebar:"documentationSidebar",previous:{title:"Setting Up A Cross Platform Solution",permalink:"/avalonia-docs/docs/guides/building-cross-platform-applications/solution-setup"},next:{title:"How To Use the MVVM Pattern",permalink:"/avalonia-docs/docs/guides/implementation-guides/how-to-use-the-mvvm-pattern"}},l={},c=[{value:"Managing Platform Differences &amp; Capabilities",id:"managing-platform-differences--capabilities",level:2},{value:"Examples of Platform Divergence",id:"examples-of-platform-divergence",level:3},{value:"Platform-specific features",id:"platform-specific-features",level:3},{value:"Dealing with Platform Divergence",id:"dealing-with-platform-divergence",level:3},{value:"Platform Abstraction",id:"platform-abstraction",level:2},{value:"Interfaces",id:"interfaces",level:3},{value:"How it works",id:"how-it-works",level:4},{value:"Advantages",id:"advantages",level:4},{value:"Disadvantages",id:"disadvantages",level:4},{value:"Inheritance",id:"inheritance",level:3},{value:"How it works",id:"how-it-works-1",level:4},{value:"Advantages and Disadvantages",id:"advantages-and-disadvantages",level:4}];function d(e){const a={h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"managing-platform-differences--capabilities",children:"Managing Platform Differences & Capabilities"}),"\n",(0,t.jsx)(a.p,{children:"Platform differences aren't just an issue in cross-platform development; even devices within the same platform can possess diverse capabilities."}),"\n",(0,t.jsx)(a.p,{children:"Most notably, this includes differences in screen size, but numerous other device characteristics may also vary, requiring the application to verify certain capabilities and adapt its behavior based on their presence (or absence). This is espically important when designing for cross paradigm situations, with desktop and mobile operating systems providing very different interaction models."}),"\n",(0,t.jsx)(a.p,{children:"Therefore, all applications must be equipped to handle a graceful scaling back of functionality, or risk presenting a minimal feature set that does not leverage the full potential of the underlying platform."}),"\n",(0,t.jsx)(a.h3,{id:"examples-of-platform-divergence",children:"Examples of Platform Divergence"}),"\n",(0,t.jsx)(a.p,{children:"There are certain fundamental characteristics inherent to applications that are universally applicable. These are high-level concepts that hold true across all devices and platforms and can thus form the core of your application's design:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"A screen, which can display your application UI."}),"\n",(0,t.jsx)(a.li,{children:"Some form of input devices, typically touch for mobile and mouse and keyboard for desktop."}),"\n",(0,t.jsx)(a.li,{children:"Display views of data."}),"\n",(0,t.jsx)(a.li,{children:"Editing data."}),"\n",(0,t.jsx)(a.li,{children:"Navigation capabilities."}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"platform-specific-features",children:"Platform-specific features"}),"\n",(0,t.jsx)(a.p,{children:"Beyond the universal application characteristics, you will also have to address key platform differences in your design. You may need to consider, and possibly write or tweak code specifically to handle, these differences:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Screen Sizes"}),": While some platforms (like iOS) have standardized screen sizes that are relatively easy to target, others, like Desktop and WebAssembly, enable an unlimited variety of screen dimensions which would require more effort to support in your application."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Navigation Metaphors"}),": These can vary across platforms (e.g., hardware 'back' button) and even within platforms (e.g., differences between Android 2 and 4, iPhone vs iPad)."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Keyboards"}),": Some devices may come with physical keyboards, while others only feature a software keyboard. Code that detects when a soft-keyboard is obscuring part of the screen needs to be sensitive to these differences."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"These platform-specific differences should be carefully considered when designing your Avalonia application to ensure a seamless user experience across all platforms. While you should strive to maximise your code reuse, you should also avoid attempting to reuse 100% of your code across all supported platforms. Instead, talyor each platform UIs to the feel at home on the device."}),"\n",(0,t.jsx)(a.h3,{id:"dealing-with-platform-divergence",children:"Dealing with Platform Divergence"}),"\n",(0,t.jsx)(a.p,{children:"Supporting multiple platforms from the same code-base can be achieved through abstracting platform features."}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Platform Abstraction"}),": This approach leverages the Business Fa\xe7ade pattern to provide uniform access across platforms. It abstracts the unique platform implementations into a single, cohesive API. The primary advantage is the ability to write platform-agnostic code, enhancing code reusability and maintainability. However, this approach may not fully exploit the unique features and capabilities of each platform."]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"platform-abstraction",children:"Platform Abstraction"}),"\n",(0,t.jsx)(a.p,{children:"In Avalonia, you can employ class abstractions to streamline your development process across different platforms. This can be achieved using interfaces or base classes defined in the shared code, then implemented or extended in platform-specific projects."}),"\n",(0,t.jsx)(a.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsx)(a.p,{children:"The utilization of interfaces empowers you to create platform-specific classes that can be incorporated into your shared libraries for code reuse."}),"\n",(0,t.jsx)(a.h4,{id:"how-it-works",children:"How it works"}),"\n",(0,t.jsx)(a.p,{children:"The interface is defined within the shared code and passed into the shared library as a parameter or property. The platform-specific applications can then implement the interface, allowing shared code to process it effectively."}),"\n",(0,t.jsx)(a.h4,{id:"advantages",children:"Advantages"}),"\n",(0,t.jsx)(a.p,{children:"The main advantage of this approach is that the implementation can contain platform-specific code and even reference platform-specific external libraries, offering high flexibility."}),"\n",(0,t.jsx)(a.h4,{id:"disadvantages",children:"Disadvantages"}),"\n",(0,t.jsx)(a.p,{children:"A potential disadvantage is the need to create and pass implementations into the shared code. If the interface is employed deep within the shared code, it may have to be passed through multiple method parameters, which might lead to a more complex call chain. If the shared code uses numerous different interfaces, they all must be created and set within the shared code."}),"\n",(0,t.jsx)(a.h3,{id:"inheritance",children:"Inheritance"}),"\n",(0,t.jsx)(a.p,{children:"Your shared code can implement abstract or virtual classes that could be extended in one or more platform-specific projects. This technique resembles the use of interfaces but provides some already implemented behaviors."}),"\n",(0,t.jsx)(a.h4,{id:"how-it-works-1",children:"How it works"}),"\n",(0,t.jsx)(a.p,{children:"By using inheritance, you can create base classes in your shared code that can be optionally extended in your platform-specific projects. However, as C# allows only single inheritance, this approach may influence your future API design. Hence, use inheritance with caution."}),"\n",(0,t.jsx)(a.h4,{id:"advantages-and-disadvantages",children:"Advantages and Disadvantages"}),"\n",(0,t.jsx)(a.p,{children:"The advantages and disadvantages of using interfaces apply equally to inheritance. However, an additional advantage of inheritance is that the base class can contain some implementation code. This potentially could provide an entire platform-agnostic implementation that can be optionally extended as needed."})]})}function h(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,a,i)=>{i.d(a,{Z:()=>o,a:()=>r});var t=i(67294);const n={},s=t.createContext(n);function r(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);