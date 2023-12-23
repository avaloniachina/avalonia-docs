"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[99801],{91729:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var s=t(85893),r=t(11151);const a={id:"accessing-the-ui-thread",title:"Accessing the UI thread"},i=void 0,o={id:"guides/basics/accessing-the-ui-thread",title:"Accessing the UI thread",description:"A Dispatcher provides services for managing work items on a specific thread. In Avalonia you will usually have only one Dispatcher, the one that handles the UI thread. Whenever you need to update the UI from a different thread than the UI thread, you need to access the UI thread via the running Dispatcher.",source:"@site/versioned_docs/version-0.10.x/guides/basics/accessing-the-ui-thread.md",sourceDirName:"guides/basics",slug:"/guides/basics/accessing-the-ui-thread",permalink:"/avalonia-docs/docs/0.10.x/guides/basics/accessing-the-ui-thread",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/guides/basics/accessing-the-ui-thread.md",tags:[],version:"0.10.x",frontMatter:{id:"accessing-the-ui-thread",title:"Accessing the UI thread"},sidebar:"documentationSidebar",previous:{title:"MVVM Architecture",permalink:"/avalonia-docs/docs/0.10.x/guides/basics/mvvm"},next:{title:"Deep Dives",permalink:"/avalonia-docs/docs/0.10.x/guides/deep-dives/"}},c={},h=[{value:"Access the UI thread from a different thread",id:"access-the-ui-thread-from-a-different-thread",level:2},{value:"The DispatcherPriority",id:"the-dispatcherpriority",level:2},{value:"Examples",id:"examples",level:2},{value:"Reference",id:"reference",level:2},{value:"Source Code",id:"source-code",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"Dispatcher"})," provides services for managing work items on a specific thread. In Avalonia you will usually have only one ",(0,s.jsx)(n.code,{children:"Dispatcher"}),", the one that handles the UI thread. Whenever you need to update the UI from a different thread than the UI thread, you need to access the UI thread via the running ",(0,s.jsx)(n.code,{children:"Dispatcher"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"access-the-ui-thread-from-a-different-thread",children:"Access the UI thread from a different thread"}),"\n",(0,s.jsxs)(n.p,{children:["You can access the current UI thread via ",(0,s.jsx)(n.code,{children:"Dispatcher.UIThread"}),". You can either use ",(0,s.jsx)(n.code,{children:"Post"})," or ",(0,s.jsx)(n.code,{children:"InvokeAsync"}),", if you want to run a job on the UI thread. Use ",(0,s.jsx)(n.code,{children:"Post"})," when you just want to start a job, but you don't need to wait for the job to be finished and you don't need the result. If you need to wait for the result, then use ",(0,s.jsx)(n.code,{children:"InvokeAsync"})," instead."]}),"\n",(0,s.jsx)(n.h2,{id:"the-dispatcherpriority",children:"The DispatcherPriority"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"DispatcherPriority"})," specifies at which priority the given job should be queued. For possible values please refer to the ",(0,s.jsx)(n.a,{href:"http://reference.avaloniaui.net/api/Avalonia.Threading/DispatcherPriority/",children:"API-Reference"})]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["In the below example we have a ",(0,s.jsx)(n.code,{children:"TextBlock"})," which shows the result and a ",(0,s.jsx)(n.code,{children:"Button"})," which is used to start our work."]}),"\n",(0,s.jsx)(n.p,{children:"Our view looks like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markup",children:'<StackPanel>\n  <TextBlock x:Name="TextBlock_Result" />\n  <Button Content="Run long running process" Click="Button_OnClick" />\n</StackPanel>\n'})}),"\n",(0,s.jsx)(n.p,{children:"The long running task looks like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'async Task LongRunningTask()\n{\n    // Do some work\n    this.FindControl<TextBlock>("TextBlock_Result").Text = "I\'m working ...";\n    await Task.Delay(2000);\n    this.FindControl<TextBlock>("TextBlock_Result").Text = "Done";\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Finally we can run the long running task as shown below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"private void Button_OnClick(object sender, RoutedEventArgs e)\n{\n    // Start the job and return immediately\n    Dispatcher.UIThread.Post(() => LongRunningTask(), DispatcherPriority.Background);\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"if we want to get the result to work with it further, we need to change the long running task to return the result:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'async Task<string> LongRunningTask()\n{\n    // Do some work\n    this.FindControl<TextBlock>("TextBlock_Result").Text = "I\'m working ...";\n    await Task.Delay(2000);\n    this.FindControl<TextBlock>("TextBlock_Result").Text = "Done";\n    \n    // return a result\n    return "Success";\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"We can use the result now:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"private async void Button_OnClick(object sender, RoutedEventArgs e)\n{\n    // Run the job\n    var result = await Dispatcher.UIThread.InvokeAsync(LongRunningTask, DispatcherPriority.Background);\n    \n    // Work with the result\n    Debug.WriteLine(result);\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"http://reference.avaloniaui.net/api/Avalonia.Threading/Dispatcher/",children:"Dispatcher"})}),"\n",(0,s.jsx)(n.h2,{id:"source-code",children:"Source Code"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Base/Threading/Dispatcher.cs",children:"Dispatcher.cs"})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var s=t(67294);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);