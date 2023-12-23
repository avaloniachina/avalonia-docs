"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[23114],{85615:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var i=r(85893),t=r(11151);const s={description:"REFERENCE - Built-in Controls"},l="Refresh Container",o={id:"reference/controls/refreshcontainer",title:"Refresh Container",description:"REFERENCE - Built-in Controls",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/reference/controls/refreshcontainer.md",sourceDirName:"reference/controls",slug:"/reference/controls/refreshcontainer",permalink:"/avalonia-docs/ru/docs/reference/controls/refreshcontainer",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/ru/docusaurus-plugin-content-docs/current/reference/controls/refreshcontainer.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Controls"},sidebar:"documentationSidebar",previous:{title:"Progress Bar",permalink:"/avalonia-docs/ru/docs/reference/controls/progressbar"},next:{title:"Relative Panel",permalink:"/avalonia-docs/ru/docs/reference/controls/relativepanel"}},h={},a=[{value:"Example",id:"example",level:2},{value:"Refreshing",id:"refreshing",level:2},{value:"Idle",id:"idle",level:4},{value:"Interacting",id:"interacting",level:4},{value:"Pending",id:"pending",level:4},{value:"Refreshing",id:"refreshing-1",level:4},{value:"Peeking",id:"peeking",level:4},{value:"More Information",id:"more-information",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"refresh-container",children:"Refresh Container"}),"\n",(0,i.jsxs)(n.p,{children:["The refresh container allows a user to pull down on content or a list of data to refresh the content or retrieve more data. The refresh progress is indicated by a ",(0,i.jsx)(n.code,{children:"RefreshVisualizer"})," that appears from the edge by which the pull gesture was initiated. The content of a ",(0,i.jsx)(n.code,{children:"RefreshContainer"})," must be a ",(0,i.jsx)(n.code,{children:"ScrollViewer"}),", or a control that has one."]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"This example shows hows to use a RefreshContainer with a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"In the axaml file."})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-markup",children:'<RefreshContainer PullDirection="TopToBottom"\n                RefreshRequested="RefreshContainerPage_RefreshRequested">\n    <ListBox ItemsSource="{Binding Items}"/>\n</RefreshContainer>\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"In the class file."})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"private void RefreshContainerPage_RefreshRequested(object? sender, RefreshRequestedEventArgs e)\n{\n    // Retrieve a deferral object.\n    var deferral = e.GetDeferral();\n\n    // Refresh List Box Items\n\n    // Notify the Refresh Container that the refresh is complete.\n    deferral.Complete();\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"refreshing",children:"Refreshing"}),"\n",(0,i.jsxs)(n.p,{children:["A refresh can be initiated by pulling in the direction specified by the ",(0,i.jsx)(n.code,{children:"PullDirection"})," property to the full extent of the visualizer, or by calling the ",(0,i.jsx)(n.code,{children:"RequestRefresh"})," method on the RefreshContainer. The progress of the refresh is indicated by the ",(0,i.jsx)(n.code,{children:"RefreshVisualizerState"})," of the ",(0,i.jsx)(n.code,{children:"Visualizer"}),", which can be in any of the following;"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.h4,{id:"idle",children:"Idle"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This is the default state of the visualizer. The user is not interacting with the container, and no refresh is in progress. The visualizer is hidden."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.h4,{id:"interacting",children:"Interacting"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The user is pulling in the direction specified in the ",(0,i.jsx)(n.code,{children:"PullDirection"})," property, but has not reached the pull threshold. The visualizer gradually becomes visible until the pull threshold is reached.\nIf the pull is releaseed before reaching the pull threshold, the ",(0,i.jsx)(n.code,{children:"Visualizer"})," returns to the ",(0,i.jsx)(n.code,{children:"Idle"})," state, and no refresh is initiated.\nIf the pull threshold is reached, the ",(0,i.jsx)(n.code,{children:"Visualizer"})," enters the ",(0,i.jsx)(n.code,{children:"Pending"})," state."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.h4,{id:"pending",children:"Pending"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The user has pulled past the pull threshold. In this state, the visualizer is fully visible. If the user moves the contact back to before the pull threshold, the visualizer returns to the ",(0,i.jsx)(n.code,{children:"Interacting"})," state. If the user releases contact while in the ",(0,i.jsx)(n.code,{children:"Pending"})," state, the visualizer enters the ",(0,i.jsx)(n.code,{children:"Refreshing"})," state."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.h4,{id:"refreshing-1",children:"Refreshing"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The user has released the touch contact while the visualizer is in the ",(0,i.jsx)(n.code,{children:"Pending"})," state. The ",(0,i.jsx)(n.code,{children:"RefreshRequested"})," event is raised. The event args contains a ",(0,i.jsx)(n.code,{children:"Deferral"})," object. This object is used to notify the Refresh Container that the refresh action has completed, and should be used in long refreshes without blocking the UI thread. If not retrieved, the ",(0,i.jsx)(n.code,{children:"Refreshing"})," state ends when the ",(0,i.jsx)(n.code,{children:"RefreshRequested"})," invocation is complete.\nIn this state, the visualizer is fully visible, and the refresh animation begins."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.h4,{id:"peeking",children:"Peeking"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This occurs when the user starts a pull gesture while the content is in a position where refresh is not allowed. This typical happens when the child ScrollViewer isn't at Offset 0, with respect to the pull direction and scroll direction, when the pull is started. The visualizer is hidden and the visualizer's state can only progress to ",(0,i.jsx)(n.code,{children:"Idle"})," when the pull is released."]}),"\n",(0,i.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["View the source code on GitHub ",(0,i.jsx)(n.a,{href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/PullToRefresh/RefreshContainer.cs",children:(0,i.jsx)(n.code,{children:"RefreshContainer.cs"})})]})})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>l});var i=r(67294);const t={},s=i.createContext(t);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);