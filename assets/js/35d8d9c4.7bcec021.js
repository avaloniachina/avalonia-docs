"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[50262],{21417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=n(85893),r=n(11151);const a={id:"storage-item",title:"Storage Items"},o="Storage Items",i={id:"concepts/services/storage-provider/storage-item",title:"Storage Items",description:"Common members for StorageFile and StorageFolder",source:"@site/docs/concepts/services/storage-provider/storage-item.md",sourceDirName:"concepts/services/storage-provider",slug:"/concepts/services/storage-provider/storage-item",permalink:"/avalonia-docs/docs/concepts/services/storage-provider/storage-item",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/concepts/services/storage-provider/storage-item.md",tags:[],version:"current",frontMatter:{id:"storage-item",title:"Storage Items"},sidebar:"documentationSidebar",previous:{title:"StorageProvider",permalink:"/avalonia-docs/docs/concepts/services/storage-provider/"},next:{title:"Bookmarks",permalink:"/avalonia-docs/docs/concepts/services/storage-provider/bookmarks"}},l={},c=[{value:"Common members for StorageFile and StorageFolder",id:"common-members-for-storagefile-and-storagefolder",level:2},{value:"Name",id:"name",level:3},{value:"Path",id:"path",level:3},{value:"CanBookmark",id:"canbookmark",level:3},{value:"SaveBookmarkAsync",id:"savebookmarkasync",level:3},{value:"GetBasicPropertiesAsync",id:"getbasicpropertiesasync",level:3},{value:"GetParentAsync",id:"getparentasync",level:3},{value:"DeleteAsync",id:"deleteasync",level:3},{value:"MoveAsync",id:"moveasync",level:3},{value:"StorageFile members",id:"storagefile-members",level:2},{value:"OpenReadAsync",id:"openreadasync",level:3},{value:"OpenWriteAsync",id:"openwriteasync",level:3},{value:"StorageFolder members",id:"storagefolder-members",level:2},{value:"GetItemsAsync",id:"getitemsasync",level:3},{value:"CreateFileAsync",id:"createfileasync",level:3},{value:"CreateFolderAsync",id:"createfolderasync",level:3},{value:"Extension methods",id:"extension-methods",level:2},{value:"TryGetLocalPath",id:"trygetlocalpath",level:3}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"storage-items",children:"Storage Items"}),"\n",(0,s.jsx)(t.h2,{id:"common-members-for-storagefile-and-storagefolder",children:"Common members for StorageFile and StorageFolder"}),"\n",(0,s.jsx)(t.h3,{id:"name",children:"Name"}),"\n",(0,s.jsx)(t.p,{children:"Gets a short name of the item including the file name extension if there is one."}),"\n",(0,s.jsx)(t.h3,{id:"path",children:"Path"}),"\n",(0,s.jsx)(t.p,{children:"Gets the file-system path of the item."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:'Android backend might return file path with "content:" scheme.\nBrowser and iOS backends might return relative uris.'})}),"\n",(0,s.jsxs)(t.admonition,{type:"warning",children:[(0,s.jsxs)(t.p,{children:["DO NOT use Path property to preserve access to the file or folder. Instead see ",(0,s.jsx)(t.a,{href:"./bookmarks",children:"Bookmarks"})," page on how to keep access to the storage items."]}),(0,s.jsxs)(t.p,{children:["DO NOT use Path property to directly read file by its path, as it won't work on most of mobile and browser platforms. Instead use ",(0,s.jsx)(t.a,{href:"#openreadasync",children:"OpenReadAsync"})," and ",(0,s.jsx)(t.a,{href:"#openwriteasync",children:"OpenWriteAsync"}),"."]})]}),"\n",(0,s.jsx)(t.h3,{id:"canbookmark",children:"CanBookmark"}),"\n",(0,s.jsx)(t.p,{children:"Returns true is item can be bookmarked and reused later."}),"\n",(0,s.jsx)(t.h3,{id:"savebookmarkasync",children:"SaveBookmarkAsync"}),"\n",(0,s.jsx)(t.p,{children:"Saves items to a bookmark.\nReturns identifier of a bookmark. Can be null if OS denied request."}),"\n",(0,s.jsx)(t.h3,{id:"getbasicpropertiesasync",children:"GetBasicPropertiesAsync"}),"\n",(0,s.jsx)(t.p,{children:"Gets the basic properties of the current item.\nCurrently available properties:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Size"}),"\n",(0,s.jsx)(t.li,{children:"DateCreated"}),"\n",(0,s.jsx)(t.li,{children:"DateModified"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"getparentasync",children:"GetParentAsync"}),"\n",(0,s.jsx)(t.p,{children:"Gets the parent folder of the current storage item."}),"\n",(0,s.jsx)(t.h3,{id:"deleteasync",children:"DeleteAsync"}),"\n",(0,s.jsx)(t.p,{children:"Deletes the current storage item and it's contents"}),"\n",(0,s.jsx)(t.h3,{id:"moveasync",children:"MoveAsync"}),"\n",(0,s.jsx)(t.p,{children:"Moves the current storage item and it's contents to a IStorageFolder"}),"\n",(0,s.jsx)(t.h2,{id:"storagefile-members",children:"StorageFile members"}),"\n",(0,s.jsx)(t.h3,{id:"openreadasync",children:"OpenReadAsync"}),"\n",(0,s.jsx)(t.p,{children:"Opens a stream for read access."}),"\n",(0,s.jsx)(t.h3,{id:"openwriteasync",children:"OpenWriteAsync"}),"\n",(0,s.jsx)(t.p,{children:"Opens stream for writing to the file."}),"\n",(0,s.jsx)(t.h2,{id:"storagefolder-members",children:"StorageFolder members"}),"\n",(0,s.jsx)(t.h3,{id:"getitemsasync",children:"GetItemsAsync"}),"\n",(0,s.jsx)(t.p,{children:"Gets the files and subfolders in the current folder.\nWhen this method completes successfully, it returns a list of the files and folders in the current folder. Each item in the list is represented by an IStorageItem implementation object."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"This method is lazily evaluate and is async."})}),"\n",(0,s.jsx)(t.h3,{id:"createfileasync",children:"CreateFileAsync"}),"\n",(0,s.jsx)(t.p,{children:"Creates a file with specified name as a child of the current storage folder"}),"\n",(0,s.jsx)(t.h3,{id:"createfolderasync",children:"CreateFolderAsync"}),"\n",(0,s.jsx)(t.p,{children:"Creates a folder with specified name as a child of the current storage folder"}),"\n",(0,s.jsx)(t.h2,{id:"extension-methods",children:"Extension methods"}),"\n",(0,s.jsx)(t.h3,{id:"trygetlocalpath",children:"TryGetLocalPath"}),"\n",(0,s.jsx)(t.p,{children:'Gets the local file system path of the item as a string.\nAndroid platform usually uses "content:" virtual file paths and Browser platform has isolated access without full paths, so on these platforms this method will return null.'}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["If you want to save file path to reuse it later (in combination with TryGetFileFromPathAsync), please consider using ",(0,s.jsx)(t.a,{href:"./bookmarks",children:"Bookmarks"})," instead as they are designed to work in sandboxed environment, where user app might not have direct access to the physical file system."]})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var s=n(67294);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);