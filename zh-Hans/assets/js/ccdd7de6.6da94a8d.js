"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[76880],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),d=u(n),c=o,k=d["".concat(p,".").concat(c)]||d[c]||s[c]||r;return n?a.createElement(k,l(l({ref:e},m),{},{components:n})):a.createElement(k,l({ref:e},m))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,l=new Array(r);l[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[d]="string"==typeof t?t:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},10781:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={},l="\u5206\u88c2\u6309\u94ae",i={unversionedId:"reference/controls/buttons/splitbutton",id:"reference/controls/buttons/splitbutton",title:"\u5206\u88c2\u6309\u94ae",description:"SplitButton \u4f5c\u4e3a Button \u7684\u6269\u5c55\uff0c\u5177\u6709\u53ef\u4ee5\u5355\u72ec\u6309\u4e0b\u7684\u4e3b\u8981\u548c\u6b21\u8981\u90e8\u5206\u3002\u4e3b\u8981\u90e8\u5206\u7684\u884c\u4e3a\u4e0e\u666e\u901a\u7684 Button \u76f8\u540c\uff0c\u800c\u6b21\u8981\u90e8\u5206\u4f1a\u6253\u5f00\u4e00\u4e2a Flyout\uff0c\u5176\u4e2d\u5305\u542b\u989d\u5916\u7684\u64cd\u4f5c\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/controls/buttons/splitbutton.md",sourceDirName:"reference/controls/buttons",slug:"/reference/controls/buttons/splitbutton",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/buttons/splitbutton",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/reference/controls/buttons/splitbutton.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\u91cd\u590d\u6309\u94ae",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/buttons/repeatbutton"},next:{title:"\u5207\u6362\u6309\u94ae",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/buttons/togglebutton"}},p={},u=[{value:"\u8fd9\u662f\u5426\u662f\u6b63\u786e\u7684\u63a7\u4ef6\uff1f",id:"\u8fd9\u662f\u5426\u662f\u6b63\u786e\u7684\u63a7\u4ef6",level:2},{value:"\u5e38\u89c1\u5c5e\u6027",id:"\u5e38\u89c1\u5c5e\u6027",level:2},{value:"\u4f2a\u7c7b",id:"\u4f2a\u7c7b",level:2},{value:"API \u53c2\u8003",id:"api-\u53c2\u8003",level:2},{value:"\u6e90\u4ee3\u7801",id:"\u6e90\u4ee3\u7801",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",level:3},{value:"\u989c\u8272\u9009\u62e9\u793a\u4f8b",id:"\u989c\u8272\u9009\u62e9\u793a\u4f8b",level:3},{value:"\u5bfc\u51fa\u6309\u94ae\u793a\u4f8b",id:"\u5bfc\u51fa\u6309\u94ae\u793a\u4f8b",level:3}],m={toc:u},d="wrapper";function s(t){let{components:e,...n}=t;return(0,o.kt)(d,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5206\u88c2\u6309\u94ae"},"\u5206\u88c2\u6309\u94ae"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SplitButton")," \u4f5c\u4e3a ",(0,o.kt)("a",{parentName:"p",href:"./button"},(0,o.kt)("inlineCode",{parentName:"a"},"Button"))," \u7684\u6269\u5c55\uff0c\u5177\u6709\u53ef\u4ee5\u5355\u72ec\u6309\u4e0b\u7684\u4e3b\u8981\u548c\u6b21\u8981\u90e8\u5206\u3002\u4e3b\u8981\u90e8\u5206\u7684\u884c\u4e3a\u4e0e\u666e\u901a\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Button")," \u76f8\u540c\uff0c\u800c\u6b21\u8981\u90e8\u5206\u4f1a\u6253\u5f00\u4e00\u4e2a ",(0,o.kt)("a",{parentName:"p",href:"docs/controls/flyouts"},(0,o.kt)("inlineCode",{parentName:"a"},"Flyout")),"\uff0c\u5176\u4e2d\u5305\u542b\u989d\u5916\u7684\u64cd\u4f5c\u3002"),(0,o.kt)("h2",{id:"\u8fd9\u662f\u5426\u662f\u6b63\u786e\u7684\u63a7\u4ef6"},"\u8fd9\u662f\u5426\u662f\u6b63\u786e\u7684\u63a7\u4ef6\uff1f"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SplitButton")," \u5e94\u8be5\u53ea\u7531\u7c7b\u4f3c\u7684\u64cd\u4f5c\u7ec4\u6210\u3002\u4ece\u6839\u672c\u4e0a\u8bb2\uff0c\u6b64\u63a7\u4ef6\u7528\u4e8e\u5c06\u5e38\u7528\u64cd\u4f5c\u5206\u7ec4\uff0c\u5176\u4e2d\u4e00\u4e2a\u64cd\u4f5c\u660e\u663e\u4f18\u5148\u4e8e\u5176\u4ed6\u64cd\u4f5c\u3002\u6700\u5e38\u89c1\u7684\u64cd\u4f5c\u5e94\u8be5\u4f5c\u4e3a\u9ed8\u8ba4\u64cd\u4f5c\u663e\u793a\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"SplitButton")," \u7684\u4e3b\u8981\u90e8\u5206\u4e2d\u3002\u8f83\u4e0d\u5e38\u89c1\u7684\u64cd\u4f5c\u5e94\u6dfb\u52a0\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"Flyout")," \u4e2d\uff0c\u5728\u6309\u4e0b\u6b21\u8981\uff08\u4e0b\u62c9\uff09\u90e8\u5206\u65f6\u663e\u793a\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u7528\u6237\u9009\u62e9\u7684\u64cd\u4f5c\u5e94\u5728\u6309\u4e0b\u4e3b\u8981\u90e8\u5206\u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"Flyout")," \u4e2d\u7684\u6b21\u8981\u64cd\u4f5c\u65f6\u7acb\u5373\u8c03\u7528\u3002\u6240\u6709\u6309\u4e0b\u7684\u64cd\u4f5c\uff0c\u65e0\u8bba\u662f\u4e3b\u8981\u8fd8\u662f\u6b21\u8981\u7684\uff0c\u90fd\u662f\u7acb\u5373\u751f\u6548\u7684\u3002")),(0,o.kt)("h2",{id:"\u5e38\u89c1\u5c5e\u6027"},"\u5e38\u89c1\u5c5e\u6027"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Content")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5728\u4e3b\u8981\u90e8\u5206\u663e\u793a\u7684\u5185\u5bb9")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Flyout")),(0,o.kt)("td",{parentName:"tr",align:null},"\u6b21\u8981\u90e8\u5206\u88ab\u70b9\u51fb\u65f6\u663e\u793a\u7684 ",(0,o.kt)("inlineCode",{parentName:"td"},"Flyout"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Command")),(0,o.kt)("td",{parentName:"tr",align:null},"\u4e3b\u6309\u94ae\u70b9\u51fb\u65f6\u8981\u8c03\u7528\u7684\u547d\u4ee4")))),(0,o.kt)("h2",{id:"\u4f2a\u7c7b"},"\u4f2a\u7c7b"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u4f2a\u7c7b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},":pressed")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5f53\u901a\u8fc7\u952e\u76d8\u8f93\u5165\uff08\u4f8b\u5982\u7a7a\u683c\u6216\u56de\u8f66\uff09\u6309\u4e0b\u6574\u4e2a ",(0,o.kt)("inlineCode",{parentName:"td"},"SplitButton")," \u65f6\u8bbe\u7f6e\u3002\u5728\u8fd9\u79cd\u72b6\u6001\u4e0b\uff0c\u4e0d\u533a\u5206\u4e3b\u8981\u90e8\u5206\u8fd8\u662f\u6b21\u8981\u90e8\u5206\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},":flyout-open")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5f53 ",(0,o.kt)("inlineCode",{parentName:"td"},"Flyout")," \u6253\u5f00\u65f6\u8bbe\u7f6e\u3002")))),(0,o.kt)("h2",{id:"api-\u53c2\u8003"},"API \u53c2\u8003"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/SplitButton/"},"SplitButton")),(0,o.kt)("h2",{id:"\u6e90\u4ee3\u7801"},"\u6e90\u4ee3\u7801"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/SplitButton/SplitButton.cs"},"SplitButton.cs")),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("h3",{id:"\u57fa\u672c\u793a\u4f8b"},"\u57fa\u672c\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<SplitButton Content="\u5185\u5bb9" >\n    <SplitButton.Flyout>\n        <MenuFlyout Placement="Bottom">\n            <MenuItem Header="\u9879\u76ee1">\n                <MenuItem Header="\u5b50\u98791" />\n                <MenuItem Header="\u5b50\u98792" />\n                <MenuItem Header="\u5b50\u98793" />\n            </MenuItem>\n            <MenuItem Header="\u9879\u76ee2"\n                      InputGesture="Ctrl+A" />\n            <MenuItem Header="\u9879\u76ee3" />\n        </MenuFlyout>\n    </SplitButton.Flyout>\n</SplitButton>\n')),(0,o.kt)("img",{src:"/img/gitbook-import/assets/SplitButtonClosed.png",alt:""}),"_SplitButton\uff08Flyout\u5df2\u5173\u95ed\uff09_",(0,o.kt)("img",{src:"/img/gitbook-import/assets/SplitButtonOpened.png",alt:""}),"_SplitButton\uff08Flyout\u5df2\u6253\u5f00\uff09_",(0,o.kt)("h3",{id:"\u989c\u8272\u9009\u62e9\u793a\u4f8b"},"\u989c\u8272\u9009\u62e9\u793a\u4f8b"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SplitButton")," \u7684\u4e00\u4e2a\u5e38\u89c1\u7528\u4f8b\u662f\u5728\u7f16\u8f91\u5668\u4e2d\u4e3a\u6587\u672c\u7740\u8272\u3002\u6309\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},"SplitButton")," \u7684\u4e3b\u8981\u90e8\u5206\u5c06\u5c06\u5f53\u524d\u989c\u8272\u5e94\u7528\u4e8e\u6240\u9009\u6587\u672c\u3002\u6309\u4e0b\u6b21\u8981\u90e8\u5206\u5c06\u6253\u5f00 ",(0,o.kt)("inlineCode",{parentName:"p"},"Flyout"),"\uff0c\u5141\u8bb8\u6307\u5b9a\u5e76\u5e94\u7528\u53e6\u4e00\u79cd\u989c\u8272\u3002\u518d\u6b21\u6ce8\u610f\uff0c\u5f53\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Flyout")," \u4e2d\u6307\u5b9a\u53e6\u4e00\u79cd\u989c\u8272\u65f6\uff0c\u6240\u9009\u6587\u672c\u7684\u989c\u8272\u5c06\u7acb\u5373\u66f4\u6539\uff0c\u5e76\u4e14\u5f53\u524d\u989c\u8272\u4e5f\u5c06\u66f4\u65b0\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- \u6211\u4eec\u5df2\u5b9a\u4e49\u4ee5\u4e0b DataTemplate --\x3e\n<DataTemplate DataType="Color">\n  <Border CornerRadius="4" Width="20" Height="20" BorderBrush="Gray" BorderThickness="1" >\n    <Border.Background>\n      <SolidColorBrush Color="{Binding}" />\n    </Border.Background>\n  </Border>\n</DataTemplate>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- SelectedColor\u3001ChangeColorCommand \u548c AvailableColors \u662f\u6211\u4eec ViewModel \u7684\u5c5e\u6027 --\x3e\n<SplitButton Content="{Binding SelectedColor}" \n             Command="{Binding ChangeColorCommand}">\n  <SplitButton.Flyout>\n    <Flyout Placement="Bottom">\n      <ListBox ItemsSource="{Binding AvailableColors}" \n               SelectedItem="{Binding SelectedColor}" \n               Height="200" Width="200" >\n        <ListBox.ItemsPanel>\n          <ItemsPanelTemplate>\n            <WrapPanel />\n          </ItemsPanelTemplate>\n        </ListBox.ItemsPanel>\n      </ListBox>\n    </Flyout>\n  </SplitButton.Flyout>\n</SplitButton>\n')),(0,o.kt)("img",{src:"/img/gitbook-import/assets/SplitButton\\_ColorPickerSample.png",alt:""}),"_\u7528\u4e8e\u989c\u8272\u9009\u62e9\u7684 SplitButton \u793a\u4f8b_",(0,o.kt)("h3",{id:"\u5bfc\u51fa\u6309\u94ae\u793a\u4f8b"},"\u5bfc\u51fa\u6309\u94ae\u793a\u4f8b"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SplitButton")," \u7684\u53e6\u4e00\u4e2a\u5e38\u89c1\u7528\u4f8b\u53ef\u80fd\u662f\u5bfc\u51fa\u6309\u94ae\u3002\u6309\u4e0b\u4e3b\u8981\u90e8\u5206\u65f6\uff0c\u5c06\u4f7f\u7528\u9ed8\u8ba4\u8bbe\u7f6e\u5bfc\u51fa\u6570\u636e\u3002\u4f46\u662f\uff0c\u5982\u679c\u6309\u4e0b\u6b21\u8981\u90e8\u5206\uff0c\u53ef\u4ee5\u6307\u5b9a\u5176\u4ed6\u5bfc\u51fa\u9009\u9879\uff0c\u4f8b\u5982\u2018\u5bfc\u51fa\u4e3a PNG\u2019\u3001\u2018\u5bfc\u51fa\u4e3a JPG\u2019\u7b49\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<SplitButton Content="\u5bfc\u51fa\u4e3aPDF"\n             Command="{Binding ExportCommand}"\n             CommandParameter=".pdf">\n    <SplitButton.Flyout>\n        <MenuFlyout Placement="RightEdgeAlignedTop">\n            <MenuItem Header="\u5bfc\u51fa\u4e3aPNG"\n                      Command="{Binding ExportCommand}"\n                      CommandParameter=".png" />\n            <MenuItem Header="\u5bfc\u51fa\u4e3aJPG"\n                      Command="{Binding ExportCommand}"\n                      CommandParameter=".jpg" />\n        </MenuFlyout>\n    </SplitButton.Flyout>\n</SplitButton>\n')),(0,o.kt)("img",{src:"/img/gitbook-import/assets/SplitButton\\_ExportButtonSample.png",alt:""}),"_\u5e26\u6709\u4e0d\u540c\u5bfc\u51fa\u9009\u9879\u7684 SplitButton \u793a\u4f8b_")}s.isMDXComponent=!0}}]);