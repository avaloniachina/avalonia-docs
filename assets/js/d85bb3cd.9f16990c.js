"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[79266],{13198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var a=n(85893),l=n(11151);const s={id:"calendar",title:"Calendar"},d=void 0,i={id:"controls/calendar",title:"Calendar",description:"The Calendar control is a standard Calendar control for users to select date\\(s\\) or date ranges.",source:"@site/versioned_docs/version-0.10.x/controls/calendar.md",sourceDirName:"controls",slug:"/controls/calendar",permalink:"/avalonia-docs/docs/0.10.x/controls/calendar",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/controls/calendar.md",tags:[],version:"0.10.x",frontMatter:{id:"calendar",title:"Calendar"},sidebar:"documentationSidebar",previous:{title:"ButtonSpinner",permalink:"/avalonia-docs/docs/0.10.x/controls/buttons/buttonspinner"},next:{title:"CalendarDatePicker",permalink:"/avalonia-docs/docs/0.10.x/controls/calendardatepicker"}},r={},o=[{value:"Common Properties",id:"common-properties",level:2},{value:"Reference",id:"reference",level:2},{value:"Source code",id:"source-code",level:2},{value:"Examples",id:"examples",level:2},{value:"Basic Calendar",id:"basic-calendar",level:3},{value:"Range selection Calendar",id:"range-selection-calendar",level:3},{value:"Calendar with custom start and end dates",id:"calendar-with-custom-start-and-end-dates",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"Calendar"})," control is a standard Calendar control for users to select date(s) or date ranges."]}),"\n",(0,a.jsx)(t.h2,{id:"common-properties",children:"Common Properties"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.code,{children:"SelectionMode"})}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Gets or sets a value that indicates what kind of selections are allowed."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.code,{children:"DisplayMode"})}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Gets or sets a value indicating whether the calendar is displayed in months, years, or decades."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.code,{children:"SelectedDate"})}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Gets or sets the currently selected date."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.code,{children:"SelectedDates"})}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Gets a collection of selected dates."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.code,{children:"DisplayDate"})}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Gets or sets the date to display."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.code,{children:"DisplayDateStart"})}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Gets or sets the first date to be displayed."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.code,{children:"DisplayDateEnd"})}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Gets or sets the last date to be displayed."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.code,{children:"BlackoutDates"})}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Gets a collection of dates that are marked as not selectable."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"reference",children:"Reference"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"http://reference.avaloniaui.net/api/Avalonia.Controls/Calendar/",children:"Calendar"})}),"\n",(0,a.jsx)(t.h2,{id:"source-code",children:"Source code"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/Calendar/Calendar.cs",children:"Calendar.cs"})}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.h3,{id:"basic-calendar",children:"Basic Calendar"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-markup",children:'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n        x:Class="AvaloniaAppTemplate.MainWindow"\n        Title="AvaloniaAppTemplate">\n\t<StackPanel>\n\t\t<Calendar SelectionMode="SingleDate" />\n\t</StackPanel>\n</Window>\n'})}),"\n",(0,a.jsx)(t.h3,{id:"range-selection-calendar",children:"Range selection Calendar"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-markup",children:'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n        x:Class="AvaloniaAppTemplate.MainWindow"\n        Title="AvaloniaAppTemplate">\n\t<StackPanel>\n\t\t<Calendar SelectionMode="SingleRange" />\n\t</StackPanel>\n</Window>\n'})}),"\n",(0,a.jsx)(t.p,{children:"After selecting the start date, a single range can be selected by holding the shift key and clicking on the end date."}),"\n",(0,a.jsx)(t.h3,{id:"calendar-with-custom-start-and-end-dates",children:"Calendar with custom start and end dates"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-markup",children:'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n        x:Class="AvaloniaAppTemplate.MainWindow"\n        Title="AvaloniaAppTemplate">\n\t<StackPanel>\n\t\t<Calendar Name="DisplayDatesCalendar" SelectionMode="SingleDate"/>\n\t</StackPanel>\n</Window>\n'})}),"\n",(0,a.jsx)(t.p,{children:"With this code to set the start and end dates:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-csharp",children:'var today = DateTime.Today; \nvar cal1 = this.FindControl<Calendar>("DisplayDatesCalendar");\ncal1.DisplayDateStart = today.AddDays(-25);\ncal1.DisplayDateEnd = today.AddDays(25);\n'})})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>d});var a=n(67294);const l={},s=a.createContext(l);function d(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);