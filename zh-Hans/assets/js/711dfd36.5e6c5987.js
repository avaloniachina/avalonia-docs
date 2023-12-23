"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[54834],{59765:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=s(85893),r=s(11151);const a={id:"storage-item",title:"\u5b58\u50a8\u9879 Storage Items"},i="\u5b58\u50a8\u9879",o={id:"concepts/services/storage-provider/storage-item",title:"\u5b58\u50a8\u9879 Storage Items",description:"StorageFile \u548c StorageFolder \u7684\u5171\u540c\u6210\u5458",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/concepts/services/storage-provider/storage-item.md",sourceDirName:"concepts/services/storage-provider",slug:"/concepts/services/storage-provider/storage-item",permalink:"/avalonia-docs/zh-Hans/docs/concepts/services/storage-provider/storage-item",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/current/concepts/services/storage-provider/storage-item.md",tags:[],version:"current",frontMatter:{id:"storage-item",title:"\u5b58\u50a8\u9879 Storage Items"},sidebar:"documentationSidebar",previous:{title:"StorageProvider",permalink:"/avalonia-docs/zh-Hans/docs/concepts/services/storage-provider/"},next:{title:"\u4e66\u7b7e Bookmarks",permalink:"/avalonia-docs/zh-Hans/docs/concepts/services/storage-provider/bookmarks"}},l={},c=[{value:"StorageFile \u548c StorageFolder \u7684\u5171\u540c\u6210\u5458",id:"storagefile-\u548c-storagefolder-\u7684\u5171\u540c\u6210\u5458",level:2},{value:"Name",id:"name",level:3},{value:"Path",id:"path",level:3},{value:"CanBookmark",id:"canbookmark",level:3},{value:"SaveBookmarkAsync",id:"savebookmarkasync",level:3},{value:"GetBasicPropertiesAsync",id:"getbasicpropertiesasync",level:3},{value:"GetParentAsync",id:"getparentasync",level:3},{value:"DeleteAsync",id:"deleteasync",level:3},{value:"MoveAsync",id:"moveasync",level:3},{value:"StorageFile \u6210\u5458",id:"storagefile-\u6210\u5458",level:2},{value:"OpenReadAsync",id:"openreadasync",level:3},{value:"OpenWriteAsync",id:"openwriteasync",level:3},{value:"StorageFolder \u6210\u5458",id:"storagefolder-\u6210\u5458",level:2},{value:"GetItemsAsync",id:"getitemsasync",level:3},{value:"CreateFileAsync",id:"createfileasync",level:3},{value:"CreateFolderAsync",id:"createfolderasync",level:3},{value:"Extension methods",id:"extension-methods",level:2},{value:"TryGetLocalPath",id:"trygetlocalpath",level:3}];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u5b58\u50a8\u9879",children:"\u5b58\u50a8\u9879"}),"\n",(0,t.jsx)(n.h2,{id:"storagefile-\u548c-storagefolder-\u7684\u5171\u540c\u6210\u5458",children:"StorageFile \u548c StorageFolder \u7684\u5171\u540c\u6210\u5458"}),"\n",(0,t.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,t.jsx)(n.p,{children:"\u83b7\u53d6\u9879\u7684\u77ed\u540d\u79f0\uff0c\u5982\u679c\u6709\u7684\u8bdd\uff0c\u5305\u62ec\u6587\u4ef6\u6269\u5c55\u540d\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"path",children:"Path"}),"\n",(0,t.jsx)(n.p,{children:"\u83b7\u53d6\u9879\u7684\u6587\u4ef6\u7cfb\u7edf\u8def\u5f84\u3002"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:'Android \u540e\u7aef\u53ef\u80fd\u8fd4\u56de\u5e26\u6709 "content:" \u65b9\u6848\u7684\u6587\u4ef6\u8def\u5f84\u3002\n\u6d4f\u89c8\u5668\u548c iOS \u540e\u7aef\u53ef\u80fd\u8fd4\u56de\u76f8\u5bf9 URI\u3002'})}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsxs)(n.p,{children:["\u8bf7\u52ff\u4f7f\u7528 Path \u5c5e\u6027\u6765\u4fdd\u7559\u5bf9\u6587\u4ef6\u6216\u6587\u4ef6\u5939\u7684\u8bbf\u95ee\u3002\u800c\u662f\u8bf7\u53c2\u9605 ",(0,t.jsx)(n.a,{href:"./bookmarks",children:"Bookmarks"})," \u9875\u9762\uff0c\u4e86\u89e3\u5982\u4f55\u4fdd\u6301\u5bf9\u5b58\u50a8\u9879\u7684\u8bbf\u95ee\u3002"]}),(0,t.jsxs)(n.p,{children:["\u8bf7\u52ff\u76f4\u63a5\u4f7f\u7528 Path \u5c5e\u6027\u6309\u8def\u5f84\u76f4\u63a5\u8bfb\u53d6\u6587\u4ef6\uff0c\u56e0\u4e3a\u5728\u5927\u591a\u6570\u79fb\u52a8\u548c\u6d4f\u89c8\u5668\u5e73\u53f0\u4e0a\u4e0d\u8d77\u4f5c\u7528\u3002\u8bf7\u6539\u7528 ",(0,t.jsx)(n.a,{href:"#openreadasync",children:"OpenReadAsync"})," \u548c ",(0,t.jsx)(n.a,{href:"#openwriteasync",children:"OpenWriteAsync"}),"\u3002"]})]}),"\n",(0,t.jsx)(n.h3,{id:"canbookmark",children:"CanBookmark"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u9879\u662f\u5426\u53ef\u4ee5\u88ab\u52a0\u5165\u4e66\u7b7e\u5e76\u5728\u4ee5\u540e\u91cd\u7528\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"savebookmarkasync",children:"SaveBookmarkAsync"}),"\n",(0,t.jsx)(n.p,{children:"\u5c06\u9879\u4fdd\u5b58\u4e3a\u4e66\u7b7e\u3002\n\u8fd4\u56de\u4e66\u7b7e\u7684\u6807\u8bc6\u7b26\u3002\u5982\u679c\u64cd\u4f5c\u7cfb\u7edf\u62d2\u7edd\u8bf7\u6c42\uff0c\u5219\u53ef\u80fd\u4e3a\u7a7a\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"getbasicpropertiesasync",children:"GetBasicPropertiesAsync"}),"\n",(0,t.jsx)(n.p,{children:"\u83b7\u53d6\u5f53\u524d\u9879\u7684\u57fa\u672c\u5c5e\u6027\u3002\n\u5f53\u524d\u53ef\u7528\u7684\u5c5e\u6027\u6709\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5927\u5c0f"}),"\n",(0,t.jsx)(n.li,{children:"\u521b\u5efa\u65e5\u671f"}),"\n",(0,t.jsx)(n.li,{children:"\u4fee\u6539\u65e5\u671f"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"getparentasync",children:"GetParentAsync"}),"\n",(0,t.jsx)(n.p,{children:"\u83b7\u53d6\u5f53\u524d\u5b58\u50a8\u9879\u7684\u7236\u6587\u4ef6\u5939\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"deleteasync",children:"DeleteAsync"}),"\n",(0,t.jsx)(n.p,{children:"\u5220\u9664\u5f53\u524d\u5b58\u50a8\u9879\u53ca\u5176\u5185\u5bb9\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"moveasync",children:"MoveAsync"}),"\n",(0,t.jsx)(n.p,{children:"\u5c06\u5f53\u524d\u5b58\u50a8\u9879\u53ca\u5176\u5185\u5bb9\u79fb\u52a8\u5230 IStorageFolder\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"storagefile-\u6210\u5458",children:"StorageFile \u6210\u5458"}),"\n",(0,t.jsx)(n.h3,{id:"openreadasync",children:"OpenReadAsync"}),"\n",(0,t.jsx)(n.p,{children:"\u6253\u5f00\u4e00\u4e2a\u7528\u4e8e\u8bfb\u53d6\u8bbf\u95ee\u7684\u6d41\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"openwriteasync",children:"OpenWriteAsync"}),"\n",(0,t.jsx)(n.p,{children:"\u6253\u5f00\u4e00\u4e2a\u7528\u4e8e\u5199\u5165\u6587\u4ef6\u7684\u6d41\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"storagefolder-\u6210\u5458",children:"StorageFolder \u6210\u5458"}),"\n",(0,t.jsx)(n.h3,{id:"getitemsasync",children:"GetItemsAsync"}),"\n",(0,t.jsx)(n.p,{children:"\u83b7\u53d6\u5f53\u524d\u6587\u4ef6\u5939\u4e2d\u7684\u6587\u4ef6\u548c\u5b50\u6587\u4ef6\u5939\u3002\n\u5f53\u6b64\u65b9\u6cd5\u6210\u529f\u5b8c\u6210\u65f6\uff0c\u5b83\u8fd4\u56de\u5f53\u524d\u6587\u4ef6\u5939\u4e2d\u6587\u4ef6\u548c\u6587\u4ef6\u5939\u7684\u5217\u8868\u3002\u5217\u8868\u4e2d\u7684\u6bcf\u4e2a\u9879\u90fd\u7531 IStorageItem \u5b9e\u73b0\u5bf9\u8c61\u8868\u793a\u3002"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"\u8be5\u65b9\u6cd5\u662f\u60f0\u6027\u6c42\u503c\u7684\uff0c\u5e76\u4e14\u662f\u5f02\u6b65\u7684\u3002"})}),"\n",(0,t.jsx)(n.h3,{id:"createfileasync",children:"CreateFileAsync"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u5f53\u524d\u5b58\u50a8\u6587\u4ef6\u5939\u7684\u5b50\u7ea7\u4e2d\u521b\u5efa\u4e00\u4e2a\u5177\u6709\u6307\u5b9a\u540d\u79f0\u7684\u6587\u4ef6\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"createfolderasync",children:"CreateFolderAsync"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u5f53\u524d\u5b58\u50a8\u6587\u4ef6\u5939\u7684\u5b50\u7ea7\u4e2d\u521b\u5efa\u4e00\u4e2a\u5177\u6709\u6307\u5b9a\u540d\u79f0\u7684\u6587\u4ef6\u5939\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"extension-methods",children:"Extension methods"}),"\n",(0,t.jsx)(n.h3,{id:"trygetlocalpath",children:"TryGetLocalPath"}),"\n",(0,t.jsx)(n.p,{children:'Gets the local file system path of the item as a string.\nAndroid platform usually uses "content:" virtual file paths and Browser platform has isolated access without full paths, so on these platforms this method will return null.'}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If you want to save file path to reuse it later (in combination with TryGetFileFromPathAsync), please consider using ",(0,t.jsx)(n.a,{href:"./bookmarks",children:"Bookmarks"})," instead as they are designed to work in sandboxed environment, where user app might not have direct access to the physical file system."]})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>i});var t=s(67294);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);