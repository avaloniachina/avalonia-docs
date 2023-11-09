"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[15840],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,l=t.originalType,s=t.parentName,p=r(t,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(h,i(i({ref:e},p),{},{components:n})):a.createElement(h,i({ref:e},p))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=n.length,i=new Array(l);i[0]=m;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r[d]="string"==typeof t?t:o,i[1]=r;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54382:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var a=n(87462),o=(n(67294),n(3905)),l=n(27915),i=n(89948),r=n(14045),s=n(18161);const u={id:"togglesplitbutton",title:"ToggleSplitButton"},p=void 0,d={unversionedId:"controls/buttons/togglesplitbutton",id:"version-0.10.x/controls/buttons/togglesplitbutton",title:"ToggleSplitButton",description:"The ToggleSplitButton functions as a ToggleButton with primary and secondary parts that can each be pressed separately. The primary part behaves like a normal ToggleButton and the secondary part opens a Flyout with additional actions.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/controls/buttons/togglesplitbutton.md",sourceDirName:"controls/buttons",slug:"/controls/buttons/togglesplitbutton",permalink:"/avalonia-docs/zh-Hans/docs/controls/buttons/togglesplitbutton",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/controls/buttons/togglesplitbutton.md",tags:[],version:"0.10.x",frontMatter:{id:"togglesplitbutton",title:"ToggleSplitButton"},sidebar:"documentationSidebar",previous:{title:"SplitButton",permalink:"/avalonia-docs/zh-Hans/docs/controls/buttons/splitbutton"},next:{title:"Calendar",permalink:"/avalonia-docs/zh-Hans/docs/controls/calendar"}},c={},m=[{value:"Is this the right control?",id:"is-this-the-right-control",level:2},{value:"Common Properties",id:"common-properties",level:2},{value:"Pseudoclasses",id:"pseudoclasses",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Source code",id:"source-code",level:2},{value:"Examples",id:"examples",level:2},{value:"Basic example",id:"basic-example",level:3},{value:"Text editor with numbered or bulleted list example",id:"text-editor-with-numbered-or-bulleted-list-example",level:3}],h={toc:m},g="wrapper";function k(t){let{components:e,...n}=t;return(0,o.kt)(g,(0,a.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ToggleSplitButton")," functions as a ",(0,o.kt)("a",{parentName:"p",href:"togglebutton"},(0,o.kt)("inlineCode",{parentName:"a"},"ToggleButton"))," with primary and secondary parts that can each be pressed separately. The primary part behaves like a normal ",(0,o.kt)("inlineCode",{parentName:"p"},"ToggleButton")," and the secondary part opens a ",(0,o.kt)("a",{parentName:"p",href:"../flyouts"},(0,o.kt)("inlineCode",{parentName:"a"},"Flyout"))," with additional actions."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ToggleSplitButton")," has only two states: checked and unchecked. Indeterminate is not supported like it is with a standard ",(0,o.kt)("inlineCode",{parentName:"p"},"ToggleButton"),". This was done intentionally to match WinUI and restricts the control\u2019s usage. The ",(0,o.kt)("inlineCode",{parentName:"p"},"ToggleSplitButton")," should only be used to turn features on/off. Anything other than that is currently considered poor practice from a usability standpoint.")),(0,o.kt)("h2",{id:"is-this-the-right-control"},"Is this the right control?"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"ToggleSplitButton")," is a fairly specialized control and its usage should be restricted to where it makes clear sense from a user-standpoint. It is intended to turn a feature on/off while allowing some additional configurations to be specified rather than the default."),(0,o.kt)("p",null,"Like a ",(0,o.kt)("a",{parentName:"p",href:"splitbutton"},(0,o.kt)("inlineCode",{parentName:"a"},"SplitButton")),", the most common action should be the default and what is shown in the primary part. However, unlike the ",(0,o.kt)("inlineCode",{parentName:"p"},"SplitButton"),", pressing the primary part will turn this feature on or off instead of simply invoking an action. Additional configurations for the feature should be added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Flyout")," which is shown when the secondary (drop down) part is pressed. "),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Pressing a configuration in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Flyout")," should either (1) turn on the feature with the selected configuration, or (2) change the feature to the selected configuration. Pressing a configuration in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Flyout")," should never turn off the feature \u2013 that can only be done by toggling the primary part.")),(0,o.kt)("h2",{id:"common-properties"},"Common Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Content")),(0,o.kt)("td",{parentName:"tr",align:null},"The content to display in the primary part")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Flyout")),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("inlineCode",{parentName:"td"},"Flyout")," which shows up when the secondary part is clicked")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Command")),(0,o.kt)("td",{parentName:"tr",align:null},"A command to be invoked when the primary button is clicked")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"IsChecked")),(0,o.kt)("td",{parentName:"tr",align:null},"Gets or sets if the ",(0,o.kt)("inlineCode",{parentName:"td"},"ToggleSplitButton")," is checked")))),(0,o.kt)("h2",{id:"pseudoclasses"},"Pseudoclasses"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Pseudoclass"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},":pressed")),(0,o.kt)("td",{parentName:"tr",align:null},"Set when the entire ",(0,o.kt)("inlineCode",{parentName:"td"},"ToggleSplitButton")," is pressed using a keyboard input such as Space or Enter. In this state no distinction is made between primary or secondary parts")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},":flyout-open")),(0,o.kt)("td",{parentName:"tr",align:null},"Set when the ",(0,o.kt)("inlineCode",{parentName:"td"},"Flyout")," is open")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},":checked")),(0,o.kt)("td",{parentName:"tr",align:null},"Set when the ",(0,o.kt)("inlineCode",{parentName:"td"},"ToggleSplitButton")," is checked. (",(0,o.kt)("inlineCode",{parentName:"td"},'IsChecked="true"'),")")))),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/ToggleSplitButton/"},"ToggleSplitButton")),(0,o.kt)("h2",{id:"source-code"},"Source code"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/SplitButton/ToggleSplitButton.cs"},"ToggleSplitButton.cs")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"basic-example"},"Basic example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<ToggleSplitButton Content="Content"\n                   IsChecked="{Binding IsChecked}">\n    <ToggleSplitButton.Flyout>\n        <MenuFlyout Placement="Bottom">\n            <MenuItem Header="Item 1">\n                <MenuItem Header="Subitem 1" />\n                <MenuItem Header="Subitem 2" />\n                <MenuItem Header="Subitem 3" />\n            </MenuItem>\n            <MenuItem Header="Item 2"\n                      InputGesture="Ctrl+A" />\n            <MenuItem Header="Item 3" />\n        </MenuFlyout>\n    </ToggleSplitButton.Flyout>\n</ToggleSplitButton>\n')),(0,o.kt)("img",{className:"center",src:l.Z,alt:""}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"SplitButton (Flyout closed, unchecked)")),(0,o.kt)("img",{className:"center",src:i.Z,alt:""}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"SplitButton (Flyout closed, checked)")),(0,o.kt)("img",{className:"center",src:r.Z,alt:""}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"SplitButton (Flyout opened, checked)")),(0,o.kt)("h3",{id:"text-editor-with-numbered-or-bulleted-list-example"},"Text editor with numbered or bulleted list example"),(0,o.kt)("p",null,"Continuing the text editor example from ",(0,o.kt)("inlineCode",{parentName:"p"},"SplitButton"),", a common use case of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ToggleSplitButton")," is to add bulleted/numbered lists to text. In this example the primary part will toggle the list on/off while the secondary part will open a ",(0,o.kt)("inlineCode",{parentName:"p"},"Flyout")," and allow selecting the bullet or number style."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- We have the following Icons defined in our Resources --\x3e\n<PathGeometry x:Key="IconData.NumberedList"> {{ Path Data }} </PathGeometry>\n<PathGeometry x:Key="IconData.BulletedList"> {{ Path Data }} </PathGeometry>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<ToggleSplitButton IsChecked="{Binding TextEditorHasList}">\n    <ToggleSplitButton.Content>\n        \x3c!-- Note: For this example we keep the content static, but you can use dynamic content --\x3e\n        <PathIcon Data="{DynamicResource IconData.BulletedList}" />\n    </ToggleSplitButton.Content>\n    <ToggleSplitButton.Flyout>\n        <Flyout Placement="Bottom">\n            \x3c!-- Note: For this example we keep the content static, but you can use dynamic content --\x3e\n            <ListBox Height="200" Width="200" >\n                <ListBoxItem>\n                    <StackPanel Orientation="Horizontal">\n                        <PathIcon Data="{DynamicResource IconData.NumberedList}" />\n                        <TextBlock Text="Numbered List" />\n                    </StackPanel>\n                </ListBoxItem>\n                <ListBoxItem>\n                    <StackPanel Orientation="Horizontal">\n                        <PathIcon Data="{DynamicResource IconData.BulletedList}" />\n                        <TextBlock Text="Bulleted List" />\n                    </StackPanel>\n                </ListBoxItem>\n            </ListBox>\n        </Flyout>\n    </ToggleSplitButton.Flyout>\n</ToggleSplitButton>\n')),(0,o.kt)("img",{className:"center",src:s.Z,alt:""}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Sample of ToggleSplitButton for toggle text lists on and off and selecting the list format")))}k.isMDXComponent=!0},18161:(t,e,n)=>{n.d(e,{Z:()=>a});const a="data:image/png;base64,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"},89948:(t,e,n)=>{n.d(e,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAcCAMAAACkuDr3AAABL1BMVEUAeNe/3fUgidz////P5vcwkd9HnuLL4/f7/f7z+f2n0PEch9tJn+Lj8Pvd7fpytOk9mOGXyO/x+P272/QNf9m83PTV6ficy+/k8ftCm+HC3/Xi8PqCvevw9/15uOoqjt5VpeTr9PwmjN2QxO5xtOmbyu+kz/HY6vn8/f/G4fb5/P5PouPX6vnZ6/lcqeVdqeaq0vLs9fzu9vx/u+vU6Ph+u+vv9/x2tuqUxu70+f2dy/D2+v6PxO2m0PE4luBaqOXe7vrm8vt8uupNoePT6Pjo8/vb7Pm01/Pf7vo1lN9FneLN5ffS5/iMwu1irOby+P2gzfCx1vP+/v+Zye/p8/xlredAmuFssejK4/e52vRRo+QiitxfqubE4PZYp+VqsOjh7/rR5/jl8fsfiNwvkd5eLv0eAAABeElEQVR42u3U2U7CQBgF4AODKLILZZFqKYpWQSoomyiIuICCCCjuK7z/MyiBdqJtaqI28aInaXruvvztPwOTGX8QAq2YLZAUPRlM0aonQ2MwBgPr9Ayxzdp1ZhxOl9vjnfP5oQgTgDLBUPgnzHwkDIBdWPwlw6lUmijvBYDY0jL8cRuxrfjBrJoEYY1DgJB1FomkIGykIPKbaZLZAkMICaow3DanrDTZXF6qhWLcEy/ugCn5rLulvfE0ZZelUknul8Vc9aB2eOT4Oo3CUVXA8uKkxY4ZACf1BlM9Bc6aY6bldADnfFZsXwD5XFaFoY780pgmyhcAtNIVJhQeEeOnQ0bp9sR2EBB5Vo2hjqRo/JvoZUuNqV+JH2loMtQZKVqb1mblj/aJKaQrQP/arslQZ6RonZsbv7wCMnMbubsPR5IPtcf0k8z0Ms+cgpEd7ttbQFpoyqRehAISr0L3zQ2Z6Te7nX98pxmMwejJDKSiJzOEaTipOjIDyztymjju9GCE1QAAAABJRU5ErkJggg=="},27915:(t,e,n)=>{n.d(e,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAcCAMAAACkuDr3AAABJlBMVEXMzMzy8vLS0tL////19fXW1tbDw8Nzc3MfHx8AAAA2NjaWlpbKyspVVVVdXV21tbXGxsahoaE6OjqEhITLy8uDg4NoaGidnZ1SUlLFxcV9fX1WVlatra08PDyysrKqqqrAwMBHR0empqa2traenp6Xl5djY2OAgIAZGRl6enrJyckmJibCwsJmZmZiYmK+vr69vb1GRkaSkpJFRUVBQUGurq4iIiKvr68/Pz+zs7OioqIzMzMtLS1vb29cXFw+Pj5QUFCxsbFqampNTU1hYWGKiopaWlrHx8fExMRycnJra2unp6dUVFS7u7s5OTmampqjo6OOjo4KCgqfn59LS0u6uro4ODi3t7d2dnaGhobBwcF7e3u4uLhXV1dubm4ODg5RUVHV1dUWNfl1AAABdUlEQVR42u3Wa0+CUBzH8Z9m1FHykqKSlJesyDAgLTWt7KalZZrdb+b7fxPFqOMKRltF6wHfjXGefXbgzxlwufELjcEqtwfvip0MxkGzkxnlMA4DZmKSeH2szQwz5Q8EQ9PhCAxxURiLxfnvMDMJHoAwO/dDJmm2pKXSIQBgM/OIZL3EuxABt7gkiss5RAlZESDlRXFVhqKuFUhxHRwhJGbCJDeSxuWoUrmCtzar2WC2GgNXCzOZmk/fTdC/Jcv57aCyU9+V9vaZz7sxOKYKBFWBHnvAAThsNLn6EXDc0pn2CQOcqiWlcwZUyiUTZuTQm8VuUukugHZB5uK8RuhXj2id95VODFBUwZShjkExvpvURduMaVwqrzWtGepoitWkXQn0oX1guqoM8NesNUMdTbH6bm4idAQoc5u4Y/lEXpHuVZky/eJDzsBQJ/nlKUAHmjLyo9iF9CQOngOgDN8a9P7xmeYwDmMn8ye/g0O4htCzkXF7XgBebTdF5BgxGAAAAABJRU5ErkJggg=="},14045:(t,e,n)=>{n.d(e,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAAB7CAMAAABQDtIBAAAC5VBMVEXy8vLp6eng4OBiYmKcnJx7e3vNzc3///8AWp7W1tYqda4AAABUVFTi4uLx8fHc3Ny81Obt7e3n5+fu7u5dlsGTk5Orq6u+vr6bm5thYWFChbd5eXnm5uZCQkLb29vk5OTU4++cv9ns7Ozk7vXv7+/r8vcdHR3CwsLr6+uCrs/q6urV5O/w8PD5+fnh4eGoqKjPz8/o6OgRERGenp7GxsZNTU3z9/ry9/pTU1ObvtkNYqOOjo46Ojrl5eXd3d1gYGBnZ2cMDAy6urrLy8vZ2dm3t7ehoaFYWFj8/f7MzMyUutbz8/PT09Ozs7Ps8/hAQEBjY2OXvNfa2tqJiYlVkb49gbUmc6xalMD0+Pvv9fl+rM5Jibqfn584ODji7PSMtdOSkpJtbW3Q0NAgb6qdnZ1lZWVbW1u1tbVLS0uIiIiZmZm2tra/1ufY2Nh2pstypMlra2tHiLnP4O0cbKnd6fLj7fSCgoKQkJA8PDyqqqpmZmaDg4MtLS3+/v+xzeE1fLLf6vNubm5BQUFqampkZGSEhIR1dXXe3t69vb3X5fCHh4dycnIveLAfbqp3d3c/Pz9+fn6jo6OBgYFdXV1WVlZMTExpaWlxcXE9PT2YmJiKioorKyv7/P3C2OjL3eunxt6RkZG/v7/Ozs7U1NTDw8Pf39/X19fx9vqysrKpqamMjIzj4+OPj4+Qt9Xu9Plxo8nb6PGkxNy70+W0zuKdwNpAg7aZvdjS4u7m7/VNjLv2+fxPjbxclsE4frMwebCwsLBHR0enp6d/f3+kpKQ0NDS7u7vV1dU+Pj68vLxISEixsbFGRkYgICAvLy/AwMDBwcFqn8aFhYXw9fnKysp5qMx6enqAgIDK3euWlpaNjY3p8fd8fHx/rM7o8PbT4+58qs2qyN/Y5vCgwtvl7vVFh7jR4e1Yk7/h7PSPt9TG2ukicKvZ5vHE2ene6vJsoMdRjr35+/1fl8Jlm8RimcO50uTN3+ymxd0XysFHAAAFU0lEQVR42u3bd1gTZxzA8V8i5N4QcgkJU2goNEzZe6sgGFCGgCKgOBEF1Lq6UbtLqx12ae1wtq7a1tat3Xvvvffe7d/eJSEhD5f3eOUOjud5v89DSJ48JJ/nvdwdzy/PAeO17gVIghiEa8FKxlvAeE0SmIgMPc4IhpchSRJ7GUYwKsPFCEZluBjBRr9sxb13Mzn3rUJnk6yy1jWrl0+f9sChAjQg4zg0sKjzxiJHcsvuaePfKeHtd5FnpDK/AXeHKGuMmYa4Zjz4ECrIz2FyHilAxq+6bbaf/NA4hvkzAZ3stdl+OYUCY76sYQ5+iozc30YJyPzO9et3VwpZS/My5KxqZv70/JmPIeOJQyt+PPG/Y81Or17Z1NT72+nA5mNfHP/8s1bva8Z5nHekWbOEmEDkaMbDRu720fXrjMe+Rei/ow7ZnDWtCP0T0xKY+zVCy5pbvMoQJ+r7JYnMvWaNMVWIk9Q0Gfn35lX8z1qGr+dIYG4U4jZpgncZb3LcSCNzf84aP54jJFv/dyDXukHIeJUDJomsb9/MTXBtTQ9ZVU0TQod/XzUYGUdzwiSROY9nHxS49gCX7N+2P34e29b71/Ffa753yY4cfNMPCcp4Wt9TUshc54C+o4ZbduoHWxU6+Z2t55vlyCU7fLRnLbIn95F2SIm9DCMYleFiBKMyXIxgVIaLEQwv24ikSES2gREML+vegCQIL9t4VtODEY6TJassWmVlUSXzsilavRmUlVmvncJAsjYRlFeiNhlUelBiehVYlLYpHZktoAVlpqUy4qhMpBtClCrrKNIoVAadN1mwMtUYH8DHvjHbF+To5sWRojIfzFubt2x9DfP0EEq647bEocg0dVpfzNNDKX5RnRUv89XpLtNARHhs7DUpoPG/uCijcNL4idlpwGe1glwyKL79ThYrs69Z/OVX6/Xh8+I1sy+NzLpoclpk+PnRYE8+GdTXLhGXZV2VDnCt/3zNFZWc5UKAOP9IZchSdXwTr9Oco+EsPsBtVrXcssFtzdQrS9Rc0cMoE98D7LK4PD33aFLS8MkGc9SYdUmxVTUhXB0xN08/fLLBHGlTJsTGQcQFsRnjtTBssi0iZ6cR6wnFntGV+18QAJVJEJWRR2XkURl5VEYelZFHZeSRzjXMmVsz6iyAKbr6xrDry1joV0hoAPRr/1ulIB7h9AAys3dGzF1UDF6LXnhLSsDUu7azYAoyCMvK5nVGg2iEssT2coCIW+PAa6WZvMKwb7dXmbViT+FSEI1wrsFGRuNlqqCpwJV0v97wSVhYMASX733a4JAZgkzAp/6oPrUcRCOfawBU53n/cqOkUA2OHGsW/P4Oc5KnLCs0oOzDeBCLfK4BhuynQDj327tle1kAD5m1ohT27xPfnORzjfT2TZhvXQasWTDYZQGhYXzcI3XDUk4nvjmJ5xrmTe3p4D3358xTxqpMOw+UmOIBdtmJ21QgEulcg12YbQBczn2zweCSeW5N86wuk8lkWfI8iEQ61+jaXAbYnMezDhbSD8w3D5Ttbqjn1zR1D4hEONfQP6njw50pXOcA9p33KqwuWV+7HPcrt+E+E6PpvKmkqIw8KiOPysijMvKojDwqI4/KyBstMvG5Bltdq6t9jgX5I5weQOnmFxM7XtCA/BHK2PBO/kZsZaWIcK7BNXIy0bkG+/riNJA/8rmGj+7VrhHcAzBzDZV6+ysVIH/Ecw2+lydHgOwRzjUix4QAQPkIyXBzDbbBf0di5UuZIH+Ecw2Iz3xWV/QMZoAmWaPlvKmkqIw8KiOPysijMvK0Cr5CRrlXFSn3SizlXr2m2Cv+zgBMF7VYpPjnTQAAAABJRU5ErkJggg=="}}]);