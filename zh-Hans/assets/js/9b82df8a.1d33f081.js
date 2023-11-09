"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[70942],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},A=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),A=r,h=d["".concat(s,".").concat(A)]||d[A]||p[A]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=A;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}A.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:a},t)}},73992:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(87462),r=a(67294),o=a(86010),i=a(72957),l=a(16550),s=a(75238),c=a(33609),u=a(92560);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function A(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!A({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:n}),[d,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??d;return A({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!A({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),m(e)}),[c,m,o]),tabValues:o}}var f=a(51048);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==l&&(d(t),s(n))},A=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:A,onClick:p},i,{className:(0,o.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function I(e){const t=m(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function E(e){const t=(0,f.Z)();return r.createElement(I,(0,n.Z)({key:String(t)},e))}},14538:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>A});var n=a(87462),r=(a(67294),a(3905)),o=a(73992),i=a(18679);const l="data:image/png;base64,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",s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUIAAABUCAMAAADAi86cAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABaUExURf///8PDwwAAAKenp93d3SMjI0dHR2lpaYmJifv7+6SkpGZmZqamppeXl66urvj4+MzMzPb29piYmGhoaG1tbevr66Wlpbi4uMrKypGRkXt7e9vb2/r6+pOTkz6sSUwAAAAJcEhZcwAAHYUAAB2FAfAbMuwAAANJSURBVHhe7ZoNV5swFIZDKFDHNqcb3+7//829bxKmdm2CBdee9n2Op4QEL7kPuUGPGiGEEEIIIYQQQgghhBDiislsHlqe3O5Ca6bIQgOU7y8WpCrL0DrFCYVvu+8ba/5ZdgdIYZy8NNUexyK3hbG5LXfWVBU68LG31sLT7KqytqLCwuLSHcascZf40fsFTrICx4IfFjUNhfhCe2dgMkd3ULhHM8fGmcFiCevszmkxtRHcON4WlxorlA32wCtW5zweFHJwLuQ97LLbf5frultYiKjP4Im7IqXBH11lHNv9Vcgtk90oaC5Xp5BXpPbSG8cto2xearNCvmN8le4OFOL6EsJZvE6hH7pnKA9AzHuF1exp/6qwcqe4EtYLKsSR++OdQ1MAJt4rzPySQ4m/KuTpnm8flC515nwXs6h9DCGEEEIIIe6Zhy+1SPL1Ieg6xrfvj6F1UX6E41ZsG+8pfw6tY/yM+f1/XLdC8/QrNI5Rh+OFuXKFUU1SuAgpXI0UrkYKVyOFq9lMYd2ExuYsSLntQmMJ16iwH/AhhceQwkUsVThOdT2YsXamBvxqiGPbodGbFmedqXHBUucfI5Fyh4lRISeFOU/oGns/dJxIvIkZNMgNOY1oIl8cprFDgidZrJDTY2ysuKHFysN5i/ny6Fch7sWB7Ykr5AQmZNggybY1HaYwMfvTxOINkI8QHSIg2ISzoXPhI7zVdMjbsRFPF0E5PfeoeDOes4C9QlzgGpsTV+hWXChk3L/B5BJlHYvHDJAqk2n8g4BQn/BJzlHoYmOebqpciU4hKruPP/4zSShk5XImKGhXCX1qW47Gqxumh1BuW+AeNaRW9TkKXT9X4dUoRLVxh+H9+yFVC9F4bceswkPgxtR9hkIz4uj2wlkhb3Ephdy2emxWsGgGN5E2+jJJxJuGEYnweQBuEuOnKOSLimOzQpzjjXwhhXwTt5hJgzm1vL/7iJFY1UjSBUVO/CEDNjdSeEESCg9xDzZGQiE3hg9xcwr5U12caLwzCunWFI7cWOJE4mE3CK0PcHOrMM3W8aRwNVK4GilcjRSuJqZJf4pfQvRP8fqHkAXE/yHk5Td+wREJnl+CLiGEEEIIIYQQQgghhBDiqjDmDzQIQuHuM4TlAAAAAElFTkSuQmCC",c={id:"datepicker",title:"DatePicker"},u=void 0,d={unversionedId:"controls/datepicker",id:"version-0.10.x/controls/datepicker",title:"DatePicker",description:"The DatePicker control allows the user to pick a date value.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/controls/datepicker.md",sourceDirName:"controls",slug:"/controls/datepicker",permalink:"/avalonia-docs/zh-Hans/docs/controls/datepicker",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/controls/datepicker.md",tags:[],version:"0.10.x",frontMatter:{id:"datepicker",title:"DatePicker"},sidebar:"documentationSidebar",previous:{title:"DataGridColumns",permalink:"/avalonia-docs/zh-Hans/docs/controls/datagrid/datagridcolumns"},next:{title:"DockPanel",permalink:"/avalonia-docs/zh-Hans/docs/controls/dockpanel"}},p={},A=[{value:"Examples",id:"examples",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Formatting the date picker",id:"formatting-the-date-picker",level:3},{value:"Date values",id:"date-values",level:3},{value:"Reference",id:"reference",level:2},{value:"Source code",id:"source-code",level:2}],h={toc:A},m="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DatePicker")," control allows the user to pick a date value."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)(o.Z,{defaultValue:"xaml",values:[{label:"XAML",value:"xaml"},{label:"C#",value:"cs"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"xaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<DatePicker/>\n"))),(0,r.kt)(i.Z,{value:"cs",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"DatePicker birthDatePicker = new DatePicker();\n")))),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"Use a ",(0,r.kt)("inlineCode",{parentName:"p"},"DatePicker")," to let a user enter a date value. The user picks the date using ",(0,r.kt)("a",{parentName:"p",href:"/avalonia-docs/zh-Hans/docs/controls/combobox"},"ComboBox")," selection for month, day, and year values. You can customize the ",(0,r.kt)("inlineCode",{parentName:"p"},"DatePicker")," in various ways to suit your app."),(0,r.kt)("img",{className:"center",src:l,alt:"A date picker with a date selected."}),(0,r.kt)("h3",{id:"formatting-the-date-picker"},"Formatting the date picker"),(0,r.kt)("p",null,"By default, the date picker shows the day, month, and year. If your scenario for the date picker doesn't require all the fields, you can hide the ones you don't need. To hide a field, set its corresponding ","_","field","_","Visible property to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". For more info, see the ",(0,r.kt)("inlineCode",{parentName:"p"},"DayVisible"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MonthVisible"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"YearVisible")," properties."),(0,r.kt)("p",null,"The string content of each ",(0,r.kt)("inlineCode",{parentName:"p"},"ComboBox")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"DatePicker")," is created by a ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTimeFormatter"),". You can use a string that is either a ",(0,r.kt)("em",{parentName:"p"},"format template")," or a ",(0,r.kt)("em",{parentName:"p"},"format pattern")," to specify the format. For more info, see the ",(0,r.kt)("inlineCode",{parentName:"p"},"DayFormat"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MonthFormat"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"YearFormat")," properties."),(0,r.kt)("h3",{id:"date-values"},"Date values"),(0,r.kt)("p",null,"The date picker control has both ",(0,r.kt)("inlineCode",{parentName:"p"},"Date")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"DateChanged")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SelectedDate")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"SelectedDateChanged")," APIs. The difference between these is that ",(0,r.kt)("inlineCode",{parentName:"p"},"Date")," is not nullable, while ",(0,r.kt)("inlineCode",{parentName:"p"},"SelectedDate")," is nullable."),(0,r.kt)("p",null,"The value of ",(0,r.kt)("inlineCode",{parentName:"p"},"SelectedDate")," is used to populate the date picker and is ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," by default. If ",(0,r.kt)("inlineCode",{parentName:"p"},"SelectedDate")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"Date")," property is set to 12/31/1600; otherwise, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Date")," value is synchronized with the ",(0,r.kt)("inlineCode",{parentName:"p"},"SelectedDate")," value. When ",(0,r.kt)("inlineCode",{parentName:"p"},"SelectedDate")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", the picker is 'unset' and shows the field names instead of a date."),(0,r.kt)("img",{className:"center",src:s,alt:"A date picker with no date selected."}),(0,r.kt)("p",null,"To use the date value in your app, you typically use a data binding to the ",(0,r.kt)("inlineCode",{parentName:"p"},"SelectedDate")," property, or handle the ",(0,r.kt)("inlineCode",{parentName:"p"},"SelectedDateChanged")," event."),(0,r.kt)("p",null,"You can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"MinYear")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MaxYear")," properties to restrict the date values in the picker. By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"MinYear")," is set to 100 years prior to the current date and ",(0,r.kt)("inlineCode",{parentName:"p"},"MaxYear")," is set to 100 years past the current date."),(0,r.kt)("p",null,"If you set only ",(0,r.kt)("inlineCode",{parentName:"p"},"MinYear")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"MaxYear"),", you need to ensure that a valid date range is created by the date you set and the default value of the other date; otherwise, no date will be available to select in the picker. For example, setting only ",(0,r.kt)("inlineCode",{parentName:"p"},"yearDatePicker.MaxYear = new DateTimeOffset(new DateTime(900, 1, 1));")," creates an invalid date range with the default value of ",(0,r.kt)("inlineCode",{parentName:"p"},"MinYear"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Initializing a date value")),(0,r.kt)("p",null,"The date properties can't be set as a XAML attribute string, because the Windows Runtime XAML parser doesn't have a conversion logic for converting strings to dates as ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/uwp/api/windows.foundation.datetime"},"DateTime")," / ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.datetimeoffset?view=dotnet-uwp-10.0&preserve-view=true"},"DateTimeOffset")," objects."),(0,r.kt)("p",null,"This example demonstrates setting the"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"myDatePicker.SelectedDate = new DateTimeOffset(new DateTime(1950, 1, 1));\n")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/DatePicker/"},"DatePicker")),(0,r.kt)("h2",{id:"source-code"},"Source code"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/DateTimePickers/DatePicker.cs"},"DatePicker.cs")))}f.isMDXComponent=!0}}]);