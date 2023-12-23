"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[42236],{26289:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=o(85893),i=o(11151);const s={description:"TUTORIALS - To Do List App"},d="\u5904\u7406\u65b0\u4e8b\u9879",c={id:"tutorials/todo-list-app/process-a-new-item",title:"\u5904\u7406\u65b0\u4e8b\u9879",description:"TUTORIALS - To Do List App",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/tutorials/todo-list-app/process-a-new-item.md",sourceDirName:"tutorials/todo-list-app",slug:"/tutorials/todo-list-app/process-a-new-item",permalink:"/avalonia-docs/zh-Hans/docs/tutorials/todo-list-app/process-a-new-item",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/current/tutorials/todo-list-app/process-a-new-item.md",tags:[],version:"current",frontMatter:{description:"TUTORIALS - To Do List App"},sidebar:"documentationSidebar",previous:{title:"\u6dfb\u52a0\u9879\u76ee\u6309\u94ae",permalink:"/avalonia-docs/zh-Hans/docs/tutorials/todo-list-app/add-item-buttons"},next:{title:"\u7ed3\u8bba",permalink:"/avalonia-docs/zh-Hans/docs/tutorials/todo-list-app/conclusion"}},l={},a=[];function r(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u5904\u7406\u65b0\u4e8b\u9879",children:"\u5904\u7406\u65b0\u4e8b\u9879"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u672c\u9875\u9762\u4e2d\uff0c\u60a8\u5c06\u5b66\u4e60\u5982\u4f55\u5904\u7406\u6309\u4e0b OK \u548c Cancel \u6309\u94ae\u540e\u7684\u8f93\u51fa\uff0c\u5e76\u91cd\u65b0\u663e\u793a\u5217\u8868\u3002\u5982\u679c\u6309\u4e0b OK\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u5c06\u65b0\u9879\u76ee\u6dfb\u52a0\u5230\u5217\u8868\u4e2d\u3002\u6211\u4eec\u5c06\u5728 ",(0,t.jsx)(n.code,{children:"MainWindowViewModel"})," \u4e2d\u5b9e\u73b0\u6b64\u529f\u80fd\uff1a"]}),"\n",(0,t.jsx)(n.p,{children:"\u8981\u66f4\u6539\u4e3b\u7a97\u53e3\u89c6\u56fe\u6a21\u578b\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5982\u679c\u5e94\u7528\u7a0b\u5e8f\u6b63\u5728\u8fd0\u884c\uff0c\u8bf7\u505c\u6b62\u5b83\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u5728 ",(0,t.jsx)(n.strong,{children:"/ViewModels"})," \u6587\u4ef6\u5939\u4e2d\u627e\u5230 ",(0,t.jsx)(n.strong,{children:"MainWindowViewModel.cs"})," \u6587\u4ef6\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u4ee3\u7801\u5982\u4e0b\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"using ReactiveUI;\nusing System;\nusing System.Reactive.Linq;\nusing ToDoList.DataModel;\nusing ToDoList.Services;\n\nnamespace ToDoList.ViewModels\n{\n    public class MainWindowViewModel : ViewModelBase\n    {\n        private ViewModelBase _contentViewModel;\n\n        // \u8fd9\u4e2a\u89c6\u56fe\u6a21\u578b\u4f9d\u8d56\u4e8e ToDoListService\n\n        public MainWindowViewModel()\n        {\n            var service = new ToDoListService();\n            ToDoList = new ToDoListViewModel(service.GetItems());\n            _contentViewModel = ToDoList;\n        }\n\n        public ViewModelBase ContentViewModel\n        {\n            get => _contentViewModel;\n            private set => this.RaiseAndSetIfChanged(ref _contentViewModel, value);\n        }\n\n        public ToDoListViewModel ToDoList { get; }\n\n        public void AddItem()\n        {\n            AddItemViewModel addItemViewModel = new();\n\n            Observable.Merge(\n                addItemViewModel.OkCommand,\n                addItemViewModel.CancelCommand.Select(_ => (ToDoItem?)null))\n                .Take(1)\n                .Subscribe(newItem =>\n                {\n                    if (newItem != null)\n                    {\n                        ToDoList.ListItems.Add(newItem );\n                    }\n                    ContentViewModel = ToDoList;\n                });\n\n            ContentViewModel = addItemViewModel;\n        }\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4ed4\u7ec6\u67e5\u770b\u521a\u521a\u6dfb\u52a0\u7684\u4ee3\u7801\u3002\u4e3b\u8981\u66f4\u6539\u662f ",(0,t.jsx)(n.code,{children:"AddItem"})," \u65b9\u6cd5\u3002\u73b0\u5728\u5b83\u8bbe\u7f6e\u4e86\u4e00\u4e2a\u53ef\u89c2\u5bdf\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u8ba2\u9605\u4e86\u4e24\u4e2a\u53cd\u5e94\u5f0f\u547d\u4ee4\uff08\u4e0a\u4e00\u9875\u4e2d\u5b9a\u4e49\u7684\uff09\u7684\u5408\u5e76\u8f93\u51fa\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"Observable.Merge(\n                addItemViewModel.OkCommand,\n                addItemViewModel.CancelCommand.Select(_ => (ToDoItem?)null))\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u6bb5\u4ee3\u7801\u5229\u7528\u4e86\u53cd\u5e94\u5f0f\u547d\u4ee4\u672c\u8eab\u5c31\u662f\u53ef\u89c2\u5bdf\u5bf9\u8c61\u7684\u4e8b\u5b9e\uff0c\u5b83\u5728\u6bcf\u6b21\u6267\u884c\u65f6\u751f\u6210\u4e00\u4e2a\u503c\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5408\u5e76\u65b9\u6cd5\u5c06\u6765\u81ea\u4efb\u610f\u6570\u91cf\u7684\u53ef\u89c2\u5bdf\u6d41\u7684\u8f93\u51fa\u5408\u5e76\u5728\u4e00\u8d77\uff0c\u4f46\u5b83\u4eec\u5fc5\u987b\u5177\u6709\u76f8\u540c\u7684\u503c\u7c7b\u578b\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u60a8\u4f1a\u8bb0\u5f97\u4e24\u4e2a\u53cd\u5e94\u5f0f\u547d\u4ee4\u7684\u58f0\u660e\u662f\u4e0d\u540c\u7684\u3002\u5b83\u4eec\u662f\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public ReactiveCommand<Unit, ToDoItem> OkCommand { get; }\npublic ReactiveCommand<Unit, Unit> CancelCommand { get; }\n"})}),"\n",(0,t.jsxs)(n.p,{children:["OK \u547d\u4ee4\u5728\u6267\u884c\u65f6\u751f\u6210\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"ToDoItem"})," \u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u800c\u53d6\u6d88\u547d\u4ee4\u53ea\u751f\u6210\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"Unit"})," \u7c7b\u578b\u7684\u5bf9\u8c61\u3002",(0,t.jsx)(n.code,{children:"Unit"})," \u662f ",(0,t.jsx)(n.code,{children:"void"})," \u7684\u53cd\u5e94\u5f0f\u7248\u672c - \u5b83\u8868\u793a\u547d\u4ee4\u751f\u6210\u7684\u503c\u4e3a\u7a7a\uff0c\u4f46\u4ecd\u7136\u901a\u77e5\u547d\u4ee4\u5df2\u6267\u884c\uff01"]}),"\n",(0,t.jsxs)(n.p,{children:["\u56e0\u6b64\uff0c\u4e3a\u4e86\u5c06\u6765\u81ea\u4e0d\u540c\u53cd\u5e94\u5f0f\u547d\u4ee4\u7684\u8f93\u51fa\u5408\u5e76\u8d77\u6765\uff0c\u4ee3\u7801\u5c06\u53d6\u6d88\u547d\u4ee4\u7684\u8f93\u51fa\u8f6c\u6362\u4e3a\u4e00\u4e2a\u7a7a\u7684 ",(0,t.jsx)(n.code,{children:"ToDoItem"})," \u5bf9\u8c61\u6d41\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:".Take(1)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u53ea\u5bf9 OK \u6216 Cancel \u6309\u94ae\u7684\u7b2c\u4e00\u6b21\u70b9\u51fb\u611f\u5174\u8da3\uff1b\u4e00\u65e6\u70b9\u51fb\u4e86\u8fd9\u4e9b\u6309\u94ae\uff0c\u5176\u4ed6\u70b9\u51fb\u5c06\u88ab\u5ffd\u7565\u3002\u56e0\u6b64\uff0c",(0,t.jsx)(n.a,{href:"https://reactivex.io/documentation/operators/take.html",children:(0,t.jsx)(n.code,{children:"Take(1)"})})," \u65b9\u6cd5\u8868\u793a\u53ea\u5904\u7406\u53ef\u89c2\u5bdf\u5e8f\u5217\u4e2d\u7684\u7b2c\u4e00\u4e2a\u9879\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:".Subscribe(newItem =>\n{\n   if (newItem != null)\n   {\n      ToDoListViewModel.ListItems.Add(newItem);\n   }\n   ContentViewModel = ToDoList;\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u540e\uff0c\u4ee3\u7801\u8ba2\u9605\u4e86\u5408\u5e76\u540e\u53ef\u89c2\u5bdf\u5e8f\u5217\u7684\u7b2c\u4e00\u4e2a\u9879\u3002\u8ba2\u9605\u4ece\u4e2d\u63d0\u53d6\u51fa\u65b0\u7684\u5f85\u529e\u4e8b\u9879\u5bf9\u8c61\uff0c\u5e76\u68c0\u67e5\u5b83\u662f\u5426\u4e3a\u7a7a\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u503c\u4e3a\u7a7a\uff0c\u5219\u8868\u793a\u70b9\u51fb\u4e86\u53d6\u6d88\u6309\u94ae - \u6b64\u65f6\u65e0\u9700\u8fdb\u4e00\u6b65\u64cd\u4f5c\uff1b\u53ea\u9700\u6062\u590d\u4e3b\u7a97\u53e3\u5185\u5bb9\u4ee5\u663e\u793a\uff08\u672a\u66f4\u6539\u7684\uff09\u5f85\u529e\u4e8b\u9879\u5217\u8868\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"ContentViewModel = ToDoList;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u503c\u4e0d\u4e3a\u7a7a\uff0c\u5219\u8868\u793a\u70b9\u51fb\u4e86 OK \u6309\u94ae\uff1b\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u503c\u5e94\u8be5\u662f\u5305\u542b\u7528\u6237\u8f93\u5165\u7684\u63cf\u8ff0\u7684 ",(0,t.jsx)(n.code,{children:"ToDoItem"})," \u5bf9\u8c61\u3002\u56e0\u6b64\uff0c\u53ef\u4ee5\u5c06\u5176\u6dfb\u52a0\u5230\u5217\u8868\u4e2d\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u60a8\u53ef\u80fd\u8fd8\u6ce8\u610f\u5230\u8fd9\u91cc\u7684\u53e6\u4e00\u4e2a\u91cd\u8981\u6539\u52a8\uff1a\u5f85\u529e\u4e8b\u9879\u5217\u8868\u89c6\u56fe\u6a21\u578b\u88ab\u58f0\u660e\u4e3a\u4e3b\u7a97\u53e3\u89c6\u56fe\u6a21\u578b\u7684\u516c\u5171\u6210\u5458\u3002\u8fd9\u5c06\u786e\u4fdd\u5217\u8868\u5728\u89c6\u56fe\u66f4\u6539\u671f\u95f4\u4fdd\u7559\uff0c\u5b83\u5145\u5f53\u4e86\u5e94\u7528\u7a0b\u5e8f\u7684\u72b6\u6001\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u4ee5\u68c0\u67e5\u5b83\u662f\u5426\u6309\u9884\u671f\u5de5\u4f5c\uff01"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u4e0b\u4e00\u9875\u4e2d\uff0c\u60a8\u5c06\u4e86\u89e3\u4e3a\u4ec0\u4e48\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u5b9e\u73b0\u5e94\u7528\u7a0b\u5e8f\uff0c\u5e76\u63a8\u8350\u4e00\u4e9b\u8fdb\u4e00\u6b65\u9605\u8bfb\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>d});var t=o(67294);const i={},s=t.createContext(i);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);