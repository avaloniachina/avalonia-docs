"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[41378],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>k});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=a.createContext({}),c=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(u.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(t),p=o,k=m["".concat(u,".").concat(p)]||m[p]||d[p]||r;return t?a.createElement(k,l(l({ref:n},s),{},{components:t})):a.createElement(k,l({ref:n},s))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},47469:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(87462),o=(t(67294),t(3905));const r={description:"REFERENCE - Built-in Controls"},l="Menu",i={unversionedId:"reference/controls/menu",id:"reference/controls/menu",title:"Menu",description:"REFERENCE - Built-in Controls",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/controls/menu.md",sourceDirName:"reference/controls",slug:"/reference/controls/menu",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/menu",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/reference/controls/menu.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Controls"},sidebar:"documentationSidebar",previous:{title:"Menu Controls",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/menu-controls"},next:{title:"Native Menu",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/nativemenu"}},u={},c=[{value:"Menu Items",id:"menu-items",level:2},{value:"Useful Properties",id:"useful-properties",level:2},{value:"Example",id:"example",level:2},{value:"Accelerator Keys",id:"accelerator-keys",level:2},{value:"Menu Commands",id:"menu-commands",level:2},{value:"Menu Icons",id:"menu-icons",level:2},{value:"More Information",id:"more-information",level:2}],s={toc:c},m="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"menu"},"Menu"),(0,o.kt)("p",null,"The menu control can add menu structure to an application. You will usually place a menu at the top edge of a dock panel control, so that it is drawn at the top of a window."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For reference information about the dock panel, see ",(0,o.kt)("a",{parentName:"p",href:"/avalonia-docs/zh-Hans/docs/next/reference/controls/dockpanel"},"here"),".")),(0,o.kt)("h2",{id:"menu-items"},"Menu Items"),(0,o.kt)("p",null,"A menu element will usually contain a set of nested ",(0,o.kt)("inlineCode",{parentName:"p"},"<MenuItem>")," elements. The first level of menu items defines the horizontal part of the menu. Subsequent levels of menu items are drop-downs."),(0,o.kt)("p",null,"The caption of a menu item is set by the ",(0,o.kt)("inlineCode",{parentName:"p"},"Header")," property. The content zone of a menu item can contain sub-items if required."),(0,o.kt)("p",null,"You can add menu separator lines by including a ",(0,o.kt)("inlineCode",{parentName:"p"},"<Separator>")," element or by adding a menu item with its header set to the minus sign, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<MenuItem Header="-" />\n')),(0,o.kt)("h2",{id:"useful-properties"},"Useful Properties"),(0,o.kt)("p",null,"You will probably use these properties most often:"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{width:"147.33333333333331"},"Element"),(0,o.kt)("th",{width:"190"},"Property"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"Menu")),(0,o.kt)("td",null,(0,o.kt)("code",null,"DockPanel.Dock")),(0,o.kt)("td",null,"Position the menu on the top edge of a dock panel.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"MenuItem")),(0,o.kt)("td",null,(0,o.kt)("code",null,"Header")),(0,o.kt)("td",null,"The menu item caption.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"MenuItem")),(0,o.kt)("td",null,(0,o.kt)("code",null,"Command")),(0,o.kt)("td",null,"The command to be executed when the menu item is clicked or selected with the keyboard.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"MenuItem")),(0,o.kt)("td",null,(0,o.kt)("code",null,"MenuItem.Icon")),(0,o.kt)("td",null,"Contains an icon graphic to display alongside the menu item.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"Separator")),(0,o.kt)("td",null),(0,o.kt)("td",null,"A menu item separator line.")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"This example creates a menu docked at the top edge of a window."," "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<Window ...>\n    <DockPanel>\n    <Menu DockPanel.Dock="Top">\n      <MenuItem Header="_File">\n        <MenuItem Header="_Open..."/>\n        <Separator/>\n        <MenuItem Header="_Exit"/>\n      </MenuItem>\n      <MenuItem Header="_Edit">\n        <MenuItem Header="Copy"/>\n        <MenuItem Header="Paste"/>\n      </MenuItem>\n    </Menu>\n    <TextBlock/>\n  </DockPanel>\n</Window>\n')),(0,o.kt)("img",{src:"/img/gitbook-import/assets/menu.gif",alt:""}),(0,o.kt)("h2",{id:"accelerator-keys"},"Accelerator Keys"),(0,o.kt)("p",null,"An accelerator key is identified by a single letter in the header preceded by an underscore. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},' <MenuItem Header="_File">\n')),(0,o.kt)("p",null,"It allows the user to access a menu item quickly. It is also sometimes called a hot key, access key or mnemonic."),(0,o.kt)("p",null,"The user can access this feature by first pressing the Alt key, and then the accelerator key (or they can be pressed together). This is demonstrated in the second of the menu sequences in the example above."),(0,o.kt)("p",null,"You will see that accelerator keys, where defined, are underlined on the menu as soon as the Alt key is pressed. Then any sub-menus are dropped down as soon as the accelerator key above is pressed."," "),(0,o.kt)("p",null,"Once keyboard interaction has been initiated with the Alt key, the user can also navigate the menus using the keyboard arrow keys. Menu items may be selected using the Enter key on the keyboard."),(0,o.kt)("h2",{id:"menu-commands"},"Menu Commands"),(0,o.kt)("p",null,"To initiate an action, the command property of a menu item can be bound to an ",(0,o.kt)("inlineCode",{parentName:"p"},"ICommand")," object. The command will be executed when the menu item is clicked or selected with the keyboard. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<Menu>\n    <MenuItem Header="_File">\n        <MenuItem Header="_Open..." Command="{Binding OpenCommand}"/>\n    </MenuItem>\n</Menu>\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For guidance on how to bind to commands, see ",(0,o.kt)("a",{parentName:"p",href:"/avalonia-docs/zh-Hans/docs/next/basics/user-interface/adding-interactivity"},"here"),".")),(0,o.kt)("h2",{id:"menu-icons"},"Menu Icons"),(0,o.kt)("p",null,"A menu icon can be displayed by placing an image or a path icon in the ",(0,o.kt)("inlineCode",{parentName:"p"},"<MenuItem.Icon>")," attached property. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<<MenuItem Header="_Edit">\n  <MenuItem Header="Copy">\n     <MenuItem.Icon>\n        <PathIcon Data="{StaticResource copy_regular}"/>\n     </MenuItem.Icon>\n  </MenuItem>\n  <MenuItem Header="Paste">\n     <MenuItem.Icon>\n        <PathIcon Data="{StaticResource clipboard_paste_regular}"/>\n     </MenuItem.Icon>\n</MenuItem>\n')),(0,o.kt)("img",{src:"/img/gitbook-import/assets/menu2.gif",alt:""}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For more detailed guidance on how to add icons to your menus, see ",(0,o.kt)("a",{parentName:"p",href:"/avalonia-docs/zh-Hans/docs/next/guides/graphics-and-animation/how-to-add-menu-icons"},"here"),".")),(0,o.kt)("h2",{id:"more-information"},"More Information"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For the complete API documentation about this control, see ",(0,o.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/Menu/"},"here"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"View the source code on ",(0,o.kt)("em",{parentName:"p"},"GitHub")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/Menu.cs"},(0,o.kt)("inlineCode",{parentName:"a"},"Menu.cs")))))}d.isMDXComponent=!0}}]);