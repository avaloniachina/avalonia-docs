"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[8740],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=i,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7996:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const o=a.p+"assets/images/mvvm-e962a98bcab7f4220895dfe5a425f8d5.png",r={id:"mvvm",title:"MVVM Architecture"},l=void 0,s={unversionedId:"guides/basics/mvvm",id:"version-0.10.x/guides/basics/mvvm",title:"MVVM Architecture",description:"The Model-View-ViewModel pattern (MVVM) is a common way of structuring a UI application. It takes advantage of Avalonia's binding system to separate the logic of the application from the display of the application.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/guides/basics/mvvm.md",sourceDirName:"guides/basics",slug:"/guides/basics/mvvm",permalink:"/avalonia-docs/zh-Hans/docs/guides/basics/mvvm",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/guides/basics/mvvm.md",tags:[],version:"0.10.x",frontMatter:{id:"mvvm",title:"MVVM Architecture"},sidebar:"documentationSidebar",previous:{title:"Code Behind",permalink:"/avalonia-docs/zh-Hans/docs/guides/basics/code-behind"},next:{title:"Accessing the UI thread",permalink:"/avalonia-docs/zh-Hans/docs/guides/basics/accessing-the-ui-thread"}},p={},c=[{value:"When to use MVVM",id:"when-to-use-mvvm",level:2},{value:"Views and ViewModels",id:"views-and-viewmodels",level:2},{value:"Models",id:"models",level:2},{value:"Services",id:"services",level:2},{value:"Frameworks",id:"frameworks",level:2}],d={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Model-View-ViewModel pattern (MVVM) is a common way of structuring a UI application. It takes advantage of Avalonia's ",(0,i.kt)("a",{parentName:"p",href:"../../data-binding"},"binding")," system to separate the logic of the application from the display of the application."),(0,i.kt)("p",null,"MVVM might be overkill for a simple application, but as applications grow over time, they usually reach a point where tracking logic in ",(0,i.kt)("a",{parentName:"p",href:"code-behind"},"code-behind")," becomes problematic for two main reasons:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The interactions between UI components becomes overly complicated and error-prone"),(0,i.kt)("li",{parentName:"ul"},"It's very difficult to unit test code in code-behind")),(0,i.kt)("p",null,"MVVM solves this by abstracting the user interface into regular .NET classes that can be unit tested like any other classes."),(0,i.kt)("p",null,"This is intended as a brief introduction to MVVM, there are many resources online that go into this subject in more depth."),(0,i.kt)("h2",{id:"when-to-use-mvvm"},"When to use MVVM"),(0,i.kt)("p",null,"First of all, MVVM has overhead in terms of complexity."),(0,i.kt)("p",null,"Because the advantages of using the MVVM pattern usually only become apparent when an application becomes more complex, it is often difficult to understand from simple examples ",(0,i.kt)("em",{parentName:"p"},"why")," MVVM should be used. Indeed if your application is going to remain small, using code-behind may well be easier to understand and maintain."),(0,i.kt)("p",null,"Many people prefer to start off their application using code-behind and once this starts proving problematic, refactor to use the MVVM pattern. This step usually happens while the application is relatively simple so generally doesn't take too much time."),(0,i.kt)("h2",{id:"views-and-viewmodels"},"Views and ViewModels"),(0,i.kt)("p",null,"When we talk about the MVVM pattern, the most important parts are the ",(0,i.kt)("strong",{parentName:"p"},"View")," layer and the ",(0,i.kt)("strong",{parentName:"p"},"ViewModel")," layer. Views are usually implemented as ",(0,i.kt)("a",{parentName:"p",href:"../../controls/window"},(0,i.kt)("inlineCode",{parentName:"a"},"Window")),"s and ",(0,i.kt)("a",{parentName:"p",href:"../../controls/usercontrol"},(0,i.kt)("inlineCode",{parentName:"a"},"UserControl")),"s while ViewModels are .NET classes."),(0,i.kt)("p",null,"One way to imagine an MVVM application is to imagine these two layers as hovering over one another, connected by bindings:"),(0,i.kt)("img",{className:"center",src:o,alt:""}),(0,i.kt)("p",null,"The above example has, at the View layer:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"MainWindow")," which is an Avalonia ",(0,i.kt)("inlineCode",{parentName:"li"},"Window")," containing;"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"Document")," which is an Avalonia ",(0,i.kt)("inlineCode",{parentName:"li"},"UserControl")," containing;"),(0,i.kt)("li",{parentName:"ul"},"Two ",(0,i.kt)("inlineCode",{parentName:"li"},"TextBox"),"es: ",(0,i.kt)("inlineCode",{parentName:"li"},"Name")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Address")),(0,i.kt)("li",{parentName:"ul"},"Two ",(0,i.kt)("inlineCode",{parentName:"li"},"Button"),"s: ",(0,i.kt)("inlineCode",{parentName:"li"},"OK")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Cancel")),(0,i.kt)("li",{parentName:"ul"},"Various bindings, indicated by arrows")),(0,i.kt)("p",null,"At the ViewModel layer there are .NET classes which mirror the view layer:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"MainWindowViewModel")," which has a property containing;"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"DocumentViewModel")," which has;"),(0,i.kt)("li",{parentName:"ul"},"Two ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," properties: ",(0,i.kt)("inlineCode",{parentName:"li"},"Name")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Address")),(0,i.kt)("li",{parentName:"ul"},"Two methods: ",(0,i.kt)("inlineCode",{parentName:"li"},"Ok")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Cancel"))),(0,i.kt)("p",null,"The ViewModel layer knows nothing of the view layer, so it is ",(0,i.kt)("em",{parentName:"p"},"independent")," of Avalonia. Each View usually has a corresponding ViewModel which contains all of the logic for the View. The View layer is connected to the ViewModel layer by bindings. Because the ViewModel layer is independent of Avalonia, it can be unit tested like any other code."),(0,i.kt)("h2",{id:"models"},"Models"),(0,i.kt)("p",null,"The Model layer is the lowest layer in an MVVM application. Models usually represent data read from a database, or classes from a low-level library which implements the business logic of the application. The Model layer will be very specific to each application."),(0,i.kt)("p",null,"An example of a model might be a table row read from a database using Entity Framework."),(0,i.kt)("h2",{id:"services"},"Services"),(0,i.kt)("p",null,"In addition, most applications will add ",(0,i.kt)("em",{parentName:"p"},"services")," to this mix, which usually implement the reading and writing of models and other application-specific logic."),(0,i.kt)("h2",{id:"frameworks"},"Frameworks"),(0,i.kt)("p",null,"There are a number of frameworks designed to help write applications using the MVVM pattern. ",(0,i.kt)("a",{parentName:"p",href:"https://reactiveui.net"},"ReactiveUI")," is one of the most popular and has support for Avalonia which can be added via the ",(0,i.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Avalonia.ReactiveUI/"},"Avalonia.ReactiveUI NuGet package"),"."))}u.isMDXComponent=!0}}]);