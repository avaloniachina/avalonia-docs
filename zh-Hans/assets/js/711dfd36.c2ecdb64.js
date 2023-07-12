"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[54834],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(r),u=n,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return r?a.createElement(f,s(s({ref:t},d),{},{components:r})):a.createElement(f,s({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},57735:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={id:"storage-item",title:"Storage Items"},s="Storage Items",i={unversionedId:"concepts/services/storage-provider/storage-item",id:"concepts/services/storage-provider/storage-item",title:"Storage Items",description:"Common members for StorageFile and StorageFolder",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/concepts/services/storage-provider/storage-item.md",sourceDirName:"concepts/services/storage-provider",slug:"/concepts/services/storage-provider/storage-item",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/services/storage-provider/storage-item",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/concepts/services/storage-provider/storage-item.md",tags:[],version:"current",frontMatter:{id:"storage-item",title:"Storage Items"},sidebar:"documentationSidebar",previous:{title:"StorageProvider",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/services/storage-provider/"},next:{title:"Bookmarks",permalink:"/avalonia-docs/zh-Hans/docs/next/concepts/services/storage-provider/bookmarks"}},l={},c=[{value:"Common members for StorageFile and StorageFolder",id:"common-members-for-storagefile-and-storagefolder",level:2},{value:"Name",id:"name",level:3},{value:"Path",id:"path",level:3},{value:"CanBookmark",id:"canbookmark",level:3},{value:"SaveBookmarkAsync",id:"savebookmarkasync",level:3},{value:"GetBasicPropertiesAsync",id:"getbasicpropertiesasync",level:3},{value:"GetParentAsync",id:"getparentasync",level:3},{value:"DeleteAsync",id:"deleteasync",level:3},{value:"MoveAsync",id:"moveasync",level:3},{value:"StorageFile members",id:"storagefile-members",level:2},{value:"OpenReadAsync",id:"openreadasync",level:3},{value:"OpenWriteAsync",id:"openwriteasync",level:3},{value:"StorageFolder members",id:"storagefolder-members",level:2},{value:"GetItemsAsync",id:"getitemsasync",level:3},{value:"CreateFileAsync",id:"createfileasync",level:3},{value:"CreateFolderAsync",id:"createfolderasync",level:3}],d={toc:c},m="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"storage-items"},"Storage Items"),(0,n.kt)("h2",{id:"common-members-for-storagefile-and-storagefolder"},"Common members for StorageFile and StorageFolder"),(0,n.kt)("h3",{id:"name"},"Name"),(0,n.kt)("p",null,"Gets a short name of the item including the file name extension if there is one."),(0,n.kt)("h3",{id:"path"},"Path"),(0,n.kt)("p",null,"Gets the file-system path of the item."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},'Android backend might return file path with "content:" scheme.\nBrowser and iOS backends might return relative uris.')),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"DO NOT use Path property to preserve access to the file or folder. Instead see ",(0,n.kt)("a",{parentName:"p",href:"./bookmarks"},"Bookmarks")," page on how to keep access to the storage items."),(0,n.kt)("p",{parentName:"admonition"},"DO NOT use Path property to directly read file by its path, as it won't work on most of mobile and browser platforms. Instead use ",(0,n.kt)("a",{parentName:"p",href:"#openreadasync"},"OpenReadAsync")," and ",(0,n.kt)("a",{parentName:"p",href:"#openwriteasync"},"OpenWriteAsync"),".")),(0,n.kt)("h3",{id:"canbookmark"},"CanBookmark"),(0,n.kt)("p",null,"Returns true is item can be bookmarked and reused later."),(0,n.kt)("h3",{id:"savebookmarkasync"},"SaveBookmarkAsync"),(0,n.kt)("p",null,"Saves items to a bookmark.\nReturns identifier of a bookmark. Can be null if OS denied request."),(0,n.kt)("h3",{id:"getbasicpropertiesasync"},"GetBasicPropertiesAsync"),(0,n.kt)("p",null,"Gets the basic properties of the current item.\nCurrently available properties:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Size"),(0,n.kt)("li",{parentName:"ul"},"DateCreated"),(0,n.kt)("li",{parentName:"ul"},"DateModified")),(0,n.kt)("h3",{id:"getparentasync"},"GetParentAsync"),(0,n.kt)("p",null,"Gets the parent folder of the current storage item."),(0,n.kt)("h3",{id:"deleteasync"},"DeleteAsync"),(0,n.kt)("p",null,"Deletes the current storage item and it's contents"),(0,n.kt)("h3",{id:"moveasync"},"MoveAsync"),(0,n.kt)("p",null,"Moves the current storage item and it's contents to a IStorageFolder"),(0,n.kt)("h2",{id:"storagefile-members"},"StorageFile members"),(0,n.kt)("h3",{id:"openreadasync"},"OpenReadAsync"),(0,n.kt)("p",null,"Opens a stream for read access."),(0,n.kt)("h3",{id:"openwriteasync"},"OpenWriteAsync"),(0,n.kt)("p",null,"Opens stream for writing to the file."),(0,n.kt)("h2",{id:"storagefolder-members"},"StorageFolder members"),(0,n.kt)("h3",{id:"getitemsasync"},"GetItemsAsync"),(0,n.kt)("p",null,"Gets the files and subfolders in the current folder.\nWhen this method completes successfully, it returns a list of the files and folders in the current folder. Each item in the list is represented by an IStorageItem implementation object."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This method is lazily evaluate and is async.")),(0,n.kt)("h3",{id:"createfileasync"},"CreateFileAsync"),(0,n.kt)("p",null,"Creates a file with specified name as a child of the current storage folder"),(0,n.kt)("h3",{id:"createfolderasync"},"CreateFolderAsync"),(0,n.kt)("p",null,"Creates a folder with specified name as a child of the current storage folder"))}p.isMDXComponent=!0}}]);