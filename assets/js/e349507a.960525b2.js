"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[21273],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(o),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return o?n.createElement(h,r(r({ref:t},c),{},{components:o})):n.createElement(h,r({ref:t},c))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=o[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},84160:(e,t,o)=>{o.d(t,{C:()=>a,G:()=>i});var n=o(67294);const a=e=>{let{label:t,link:o,height:a=40,width:i=40,title:r}=e;console.log(r);return n.createElement("a",{href:o,className:"card",style:{textDecoration:"none",color:"inherit"}},n.createElement("div",{className:"card-body"},n.createElement("div",{className:"card-info"},n.createElement("h3",{style:{margin:"0",paddingTop:"1rem"}},t),n.createElement("p",null,{"Try ToolJet":"Try out ToolJet with single docker command.",DigitalOcean:"Quickly deploy ToolJet using the Deploy to DigitalOcean button",Docker:"Deploy ToolJet on a server using docker-compose.",Heroku:"Deploy ToolJet on Heroku using the one-click-deployment button.","AWS EC2":"Deploy ToolJet on AWS EC2 instances.","AWS ECS":"Deploy ToolJet on AWS ECS instances.",Openshift:"Deploy ToolJet on Openshift",Kubernetes:"Deploy ToolJet on a Kubernetes cluster.","Kubernetes (GKE)":"Deploy ToolJet on a GKE Kubernetes cluster.","Kubernetes (AKS)":"Deploy ToolJet on a AKS Kubernetes cluster.","Google Cloud Run":"Deploy ToolJet on Cloud Run with GCloud CLI.","Deploying ToolJet client":"Deploy ToolJet Client on static website hosting services.","Environment variables":"Environment variables required by ToolJet Client and Server to start running.","Connecting via HTTP proxy":"Environment variables required by ToolJet to connect via HTTP proxy","Deploying ToolJet on a subpath":"Steps to deploy ToolJet on a subpath rather than root of domain.","V2 migration guide":"Things to know before migrating to ToolJet V2"}[t]))))},i=e=>{let{list:t}=e;return console.log("list",t),n.createElement("div",{className:"card-container-setup"},t.map((e=>n.createElement(a,{key:e.docId,label:e.label,link:e.href}))))}},12746:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=o(87462),a=(o(67294),o(3905)),i=o(84160),r=o(78259);const l={},s="Music Store App",p={unversionedId:"tutorials/music-store-app/index",id:"version-0.10.x/tutorials/music-store-app/index",title:"Music Store App",description:"The completed project can be found at https://github.com/AvaloniaUI/Avalonia.MusicStore.",source:"@site/versioned_docs/version-0.10.x/tutorials/music-store-app/index.md",sourceDirName:"tutorials/music-store-app",slug:"/tutorials/music-store-app/",permalink:"/avalonia-docs/docs/tutorials/music-store-app/",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/tutorials/music-store-app/index.md",tags:[],version:"0.10.x",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Adding new Items",permalink:"/avalonia-docs/docs/tutorials/todo-list-app/adding-new-items"},next:{title:"Setup Development Environment",permalink:"/avalonia-docs/docs/tutorials/music-store-app/setup-development-environment"}},c={},u=[{value:"A little background to Avalonia",id:"a-little-background-to-avalonia",level:2},{value:"Model View ViewModel",id:"model-view-viewmodel",level:3},{value:"In This Section",id:"in-this-section",level:2}],d={toc:u},m="wrapper";function h(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"music-store-app"},"Music Store App"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The completed project can be found at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia.MusicStore"},"https://github.com/AvaloniaUI/Avalonia.MusicStore"),"."),(0,a.kt)("p",{parentName:"admonition"},"It was created by ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/dwuk86"},"Dan Walmsley "),"for a ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=kZCIporjJ70"},"webinar "),"hosted by ",(0,a.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/"},"JetBrains"),".")),(0,a.kt)("p",null,"In this tutorial, you will see just how easy it is to build great looking visual desktop applications using Avalonia."),(0,a.kt)("p",null,"This guide has instructions for Rider on macOS, however the steps will be almost the same on other operating systems, and reasonably similar on other IDEs such as Visual Studio."),(0,a.kt)("p",null,"Our livestream assumes some knowledge of ",(0,a.kt)("a",{parentName:"p",href:"/avalonia-docs/docs/guides/basics/introduction-to-xaml"},"XAML"),", ",(0,a.kt)("a",{parentName:"p",href:"/avalonia-docs/docs/guides/basics/mvvm"},"MVVM "),"development, however this guide should fill in the gaps for beginners."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/tutorials/music-store-app/image-20210310184538120.png"})),(0,a.kt)("h2",{id:"a-little-background-to-avalonia"},"A little background to Avalonia"),(0,a.kt)("p",null,'Avalonia is a "',(0,a.kt)("a",{parentName:"p",href:"../../templates/"},"Template"),'" based UI framework. This means that controls have ',(0,a.kt)("inlineCode",{parentName:"p"},"Templates")," that describe how they look on the screen."),(0,a.kt)("p",null,"This is a different approach to other UI frameworks where native controls are used, for example a ",(0,a.kt)("inlineCode",{parentName:"p"},"Button")," will take on the standard look of a button on its respective operating system."),(0,a.kt)("p",null,'Some apps require or desire a native look and feel. Others require a "pixel perfect" style and design. This pixel perfect approach is becoming more popular and common place. Good examples of this kind of application are "Slack" where the company\'s branding is clear throughout the UI. It also looks the exact same no matter which OS you run it on.'),(0,a.kt)("p",null,'Avalonia is suited to these "Pixel Perfect" style apps, providing the advantage of native code and speed.'),(0,a.kt)("p",null,"If you are already familiar with MVVM you may wish to skip this next section, if you're new to Avalonia read on."),(0,a.kt)("h3",{id:"model-view-viewmodel"},"Model View ViewModel"),(0,a.kt)("p",null,"The best architecture to use Avalonia with ","(","not compulsory, just works best",")"," is MVVM ","(",(0,a.kt)("strong",{parentName:"p"},"M"),"odel ",(0,a.kt)("strong",{parentName:"p"},"V"),"iew ",(0,a.kt)("strong",{parentName:"p"},"V"),"iew",(0,a.kt)("strong",{parentName:"p"},"M"),"odel",")","."),(0,a.kt)("p",null,"It sounds complicated, and there are many over complicated guides and tutorials on the internet."),(0,a.kt)("p",null,"MVVM is simply a way to enforce ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Separation_of_concerns"},"Separation of concerns"),". For your quick demo tutorial app, this may seem overkill. Keeping UI and business logic separated in such a way. However the apps that you will soon be building, often start small but quickly grow. Your customers will spring new requirements on you, and you will need to shoe horn them into your software."),(0,a.kt)("p",null,"Following the MVVM approach will alleviate these difficulties and help keep your UI code scalable."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/tutorials/music-store-app/mvvm.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"How does MVVM work?")),(0,a.kt)("p",null,"Back to separation of concerns, in any GUI application there are at least 3 main concerns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"UI - Layout, Style, Content"),(0,a.kt)("li",{parentName:"ul"},"UI Logic - How the controls interact with each other and the user."),(0,a.kt)("li",{parentName:"ul"},"Business Logic - The actual functionality your application provides, dealing with a database, controlling some hardware you built for IOT, ordering products from your store.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Why is it a good idea to keep these separated?")),(0,a.kt)("p",null,"If your code combines or mixes these 3 aspects together, it will tie the design of your UI directly to your business logic. This will make it incredibly difficult to make large changes to the way your application works. This was common place in the not too distant past."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"How does MVVM achieve this?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Model ","(","Business Logic",")")),(0,a.kt)("p",null,"All your business logic can be contained in plain classes, they can be designed and implemented however you want. Most project you already may have this. The general term we call these business logic classes is ",(0,a.kt)("inlineCode",{parentName:"p"},"Models"),"."),(0,a.kt)("p",null,"Your models can simply expose ",(0,a.kt)("inlineCode",{parentName:"p"},"methods")," ","(","functions",")",", ",(0,a.kt)("inlineCode",{parentName:"p"},"properties")," and use ",(0,a.kt)("inlineCode",{parentName:"p"},"events")," to notify other parts of the MVVM architecture when something has changed in the system."),(0,a.kt)("p",null,"For example if your domain, is a music store. Perhaps your business logic provides a list of the top 10 albums. It may happen that the list changes and this change can be propagated by use of an ",(0,a.kt)("inlineCode",{parentName:"p"},"event"),"."),(0,a.kt)("p",null,"So now we have the ",(0,a.kt)("inlineCode",{parentName:"p"},"Model")," part of MVVM, all self contained, the ",(0,a.kt)("inlineCode",{parentName:"p"},"models")," know nothing about any of the other parts."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ViewModel ","(","UI Logic",")")),(0,a.kt)("p",null,"Your user interface is essentially the way your ",(0,a.kt)("inlineCode",{parentName:"p"},"users")," interact with your business logic or ",(0,a.kt)("inlineCode",{parentName:"p"},"models"),". There needs to be a way for your UI to interact with the business logic. We do this using a ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewModel"),". A ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewModel")," knows about the ",(0,a.kt)("inlineCode",{parentName:"p"},"Model")," that it represents. It does not know anything about the layout or design of the UI or ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," part."),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewModel")," is essentially special type of ",(0,a.kt)("inlineCode",{parentName:"p"},"Model")," that represents all the ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," that will be displayed in the UI. It also represents all the ",(0,a.kt)("inlineCode",{parentName:"p"},"actions")," that can be done with the UI. For example what happens when a button is clicked."),(0,a.kt)("p",null,"This keeps things like disabling buttons when the user hasn't input the correct information away from your business logic."),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewModel")," will ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe")," to or ",(0,a.kt)("inlineCode",{parentName:"p"},"observe")," events on a model so that it knows when something in your system has changed, with the intention that it can then update the UI so the ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," will know about it."),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewModel")," will also call or trigger functionality in response to user input like a ",(0,a.kt)("inlineCode",{parentName:"p"},"Button")," being ",(0,a.kt)("inlineCode",{parentName:"p"},"clicked"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"View ","(","UI",")")),(0,a.kt)("p",null,"The view provides the layout and content of the UI. It knows about the ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewModel")," and the information it provides that can be displayed in the UI."),(0,a.kt)("p",null,'The view describes how to "present" data and provides controls the user can interact with.'),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," can retrieve ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," to display with the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"Bindings")," . ",(0,a.kt)("inlineCode",{parentName:"p"},"Bindings")," can also be used for ",(0,a.kt)("inlineCode",{parentName:"p"},"interactions")," to be communicated back to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewModel")," ."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Summary")),(0,a.kt)("p",null,"A model provides the business logic and talks to the ViewModel."),(0,a.kt)("p",null,"A ViewModel provides the UI logic and invokes the business logic in response to user input."),(0,a.kt)("p",null,"A View provides the look, layout and content of the UI."),(0,a.kt)("p",null,"Lets get started building something!"),(0,a.kt)("h2",{id:"in-this-section"},"In This Section"),(0,a.kt)(i.G,{list:(0,r.jA)().items,mdxType:"DocsCardList"}))}h.isMDXComponent=!0}}]);