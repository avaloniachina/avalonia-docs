"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[98149],{3905:(A,e,n)=>{n.d(e,{Zo:()=>g,kt:()=>m});var t=n(67294);function r(A,e,n){return e in A?Object.defineProperty(A,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):A[e]=n,A}function o(A,e){var n=Object.keys(A);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),n.push.apply(n,t)}return n}function i(A){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(A,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(n,e))}))}return A}function E(A,e){if(null==A)return{};var n,t,r=function(A,e){if(null==A)return{};var n,t,r={},o=Object.keys(A);for(t=0;t<o.length;t++)n=o[t],e.indexOf(n)>=0||(r[n]=A[n]);return r}(A,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(t=0;t<o.length;t++)n=o[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(A,n)&&(r[n]=A[n])}return r}var a=t.createContext({}),l=function(A){var e=t.useContext(a),n=e;return A&&(n="function"==typeof A?A(e):i(i({},e),A)),n},g=function(A){var e=l(A.components);return t.createElement(a.Provider,{value:e},A.children)},s="mdxType",C={inlineCode:"code",wrapper:function(A){var e=A.children;return t.createElement(t.Fragment,{},e)}},c=t.forwardRef((function(A,e){var n=A.components,r=A.mdxType,o=A.originalType,a=A.parentName,g=E(A,["components","mdxType","originalType","parentName"]),s=l(n),c=r,m=s["".concat(a,".").concat(c)]||s[c]||C[c]||o;return n?t.createElement(m,i(i({ref:e},g),{},{components:n})):t.createElement(m,i({ref:e},g))}));function m(A,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var o=n.length,i=new Array(o);i[0]=c;var E={};for(var a in e)hasOwnProperty.call(e,a)&&(E[a]=e[a]);E.originalType=A,E[s]="string"==typeof A?A:r,i[1]=E;for(var l=2;l<o;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},94611:(A,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>E,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>g});var t=n(87462),r=(n(67294),n(3905));const o="data:image/png;base64,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+xz8zOzXL78txwJwG3Xicxw7d+684Q+tmg+Ktf6hVY2nnvpR6/nnR2+60j/+87/krrvuuuHyZrOZZrOZmenpzCwa7sMPPsgfDfxh7rnnnjUbGAD44nj66adXdmVi8E//JOfOnVt1xTQajWzevPmWhgMAOsOKYqKnpyc9PT23exYAoAP5f4MDACViAgAoERMAQImYAABKxAQAUCImAIASMQEAlIgJAKBETAAAJWICACgREwBAiZgAAErEBABQIiYAgBIxAQCUiAkAoERMAAAlYgIAKBETAECJmAAASsQEAFAiJgCAEjEBAJSICQCgREwAACViAgAoERMAQImYAABKxAQAUCImAIASMQEAlIgJAKBETAAAJWICACgREwBAiZgAAErEBABQIiYAgBIxAQCUiAkAoERMAAAlYgIAKBETAECJmAAASsQEAFAiJgCAEjEBAJSICQCgREwAACViAgAoERMAQImYAABKxAQAUCImAIASMQEAlIgJAKBETAAAJWICACgREwBAiZgAAErEBABQIiYAgBIxAQCUiAkAoERMAAAlYgIAKBETAECJmAAASsQEAFAiJgCAEjEBAJSICQCgREwAACViAgAoERMAQImYAABKxAQAUCImAIASMQEAlIgJAKBETAAAJWICACgREwBAiZgAAErEBABQIiYAgBIxAQCUiAkAoERMAAAlYgIAKBETAECJmAAASsQEAFAiJgCAEjEBAJSICQCgREwAACViAgAoERMAQImYAABKxAQAUCImAIASMQEAlIgJAKBETAAAJWICACgREwBAiZgAAErEBABQIiYAgBIxAQCUiAkAoKTZ1aUnAIBbpyQAgJLudg/AGmo02j0BwMq0Wu2egDXkygQAUCImAIASMQEAlIgJAKBETAAAJWICACgREwBAiZgAAErEBABQIiYAgBIxAQCUiAkAoERMAAAlYgIAKBETAECJmAAASsQEAFAiJgCAEjEBAJSICQCgREwAACXNcxcutnsGAKCDNTdv6mn3DABAB3ObAwAoERMAQImYAABKxAQAUCImAIASMQEAlIgJAKBETAAAJWICACgREwBAiZgAAErEBABQIiYAgBIxAQCUiAkAoERMAAAlYgIAKBETAECJmAAASsQEAFAiJgCAEjEBAJSICQCgREwAACViAgAoERMAQImYAABKxAQAUCImAIASMQEAlIgJAKBETAAAJc1XJl9t9wwAQAdrrl+3rt0zAAAdrHnft+9t9wwAQAfzzAQAUCImAIASMQEAlIgJAKBETAAAJWICACgREwBAiZgAAErEBABQIiYAgBIxAQCUiAkAoERMAAAlYgIAKBETAECJmAAASsQEAFAiJgCAEjEBAJSICQCgREwAACXNt95+t90zAAAdrPmL119v9wwAQAdrPrrj4XbPAAB0sOadd9zR7hkAgA7WbDY9gwkA3DolAQCUNKempto9AwDQwZq/eM2nOQCAW9f85JNL7Z4BAOhgzcce3dHuGQCADuYBTACgREwAACViAgAoERMAQImYAABKxAQAUCImAIASMQEAlIgJAKBETAAAJWICACgREwBAiZgAAErEBABQIiYAgBIxAQCUiAkAoERMAAAlYgIAKBETAECJmAAASsQEAFAiJgCAEjEBAJSICQCgREwAACViAgAoERMAQImYAABKxAQAUNL82f+81O4ZAIAO1ty6ZUu7ZwAAOljzvm/f2+4ZAIAO5pkJAKBETAAAJWICACgREwBASfPSpcvtngEA6GDNE//13+2eAQDoYM0//uEP2j0DANDBml1dXe2eAQDoYB7ABABKxAQAUCImAIASMQEAlIgJAKBETAAAJWICACgREwBAiZgAAErEBABQIiYAgBIxAQCUiAkAoERMAAAlYgIAKBETAECJmAAASsQEAFAiJgCAEjEBAJSICQCgREwAACViAgAoERMAQImYAABKxAQAUCImAIASMQEAlIgJAKBETAAAJWICACgREwBAiZgAAErEBABQIiYAgBIxAQCUiAkAoERMAAAlYgIAKBETAECJmAAASsQEAFAiJgCAEjEBAJSICQCgREwAACViAgAoERMAQImYAABKxAQAUCImAIASMQEAlIgJAKBETAAAJWICACgREwBAiZgAAErEBABQIiYAgBIxAQCUiAkAoERMAAAlYgIAKBETAECJmAAASsQEAFAiJgCAEjEBAJSICQCgpLvdA7CGWq12TwDA/0OuTAAAJWICACgREwBAiZgAAErEBABQIiYAgBIxAQCUNN94+712zwAAdLDmzMxMu2cAADpY81tf/912zwAAdLBmo9Fo9wwAQAfzACYAUCImAIASMQEAlDQ//OhCu2cAADpY8ze//bDdMwAAHaz5wHe+2e4ZAIAO5qOhAECJBzABgBIxAQCUiAkAoERMAAAlYgIAKBETAECJmAAASsQEAFAiJgCAEjEBAJSICQCgREwAACViAgAoERMAQImYAABKxAQAUCImAIASMQEAlIgJAKBETAAAJWICACgREwBAiZgAAErEBABQIiYAgBIxAQCUiAkAoERMAAAlYgIAKBETAECJmAAASsQEAFAiJgCAEjEBAJSICQCgREwAACViAgAoERMAQImYAABKxAQAUCImAIASMQEAlIgJAKBETAAAJWICACgREwBAiZgAAErEBABQIiYAgBIxAQCUiAkAoERMAAAlYgIAKBETAECJmAAASsQEAFAiJgCAEjEBAJSICQCgREwAACViAgAoERMAQImYAABKxAQAUCImAIASMQEAlIgJAKBETAAAJWICACgREwBAiZgAAErEBABQIiYAgBIxAQCUiAkAoERMAAAlYgIAKBETAECJmAAASsQEAFAiJgCAEjEBAJSICQCgREwAACViAgAoERMAQEl3kgz/2Z/njo3ryxv7+SuTOXv2XB579JGsX79u4dfPnjuX8TP/mzvv6MmO7dvS3dWVt95+JxO/eC2P7ng4mzfftbDu+QsX0tXVlZ6NPWk0kvc/+DAvvvRyHui9P/d+4+tJkitXpvLTF09ny5bNefCB3uu+n/fGm2/llclX8+iOh/M7d29d2Nb892+8+VZe++Wv8tgjO7Jp053XbLunZ2O2b3swM61WXjw9npnpmXz/kYezccOGJMlv3vttxs/8PF//2j3X7HMlr8dnLTXH1NRUfnb65XR3deWR7Q+lu7s7SXLuo/N58aXxfONrX0vv/fctzDvTauX3v789PRs3JkkuXPg4Pz39Un7vq1/N9/q+u6LXe2ZmOuNnfp4k2b7twXR1dV035+LXM8l1r+mK9tOayUcfnc+GDetzR09PkuTq1at58aWXs667e8l9A9f65NKVNfnvNqyF/wNbuHplvjKxIAAAAABJRU5ErkJggg==",i={id:"draw-with-a-property",title:"\u4f7f\u7528\u5c5e\u6027\u7ed8\u5236"},E="\u4f7f\u7528\u5c5e\u6027\u8fdb\u884c\u7ed8\u5236",a={unversionedId:"guides/custom-controls/draw-with-a-property",id:"guides/custom-controls/draw-with-a-property",title:"\u4f7f\u7528\u5c5e\u6027\u7ed8\u5236",description:"\u5728\u8fd9\u4e2a\u9875\u9762\u4e0a\uff0c\u60a8\u5c06\u770b\u5230\u5982\u4f55\u4f7f\u7528\u4e00\u4e2a\u7b80\u5355\u5c5e\u6027\u7684\u503c\u6765\u7ed8\u5236\u81ea\u5b9a\u4e49\u63a7\u4ef6\uff0c\u8be5\u5c5e\u6027\u5b9a\u4e49\u4e86\u80cc\u666f\u989c\u8272\u3002\u4ee3\u7801\u73b0\u5728\u5982\u4e0b\u6240\u793a\uff1a",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/custom-controls/draw-with-a-property.md",sourceDirName:"guides/custom-controls",slug:"/guides/custom-controls/draw-with-a-property",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/custom-controls/draw-with-a-property",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/custom-controls/draw-with-a-property.md",tags:[],version:"current",frontMatter:{id:"draw-with-a-property",title:"\u4f7f\u7528\u5c5e\u6027\u7ed8\u5236"},sidebar:"documentationSidebar",previous:{title:"\u5b9a\u4e49\u5c5e\u6027",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/custom-controls/defining-properties"},next:{title:"\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u63a7\u4ef6\u5e93",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/custom-controls/how-to-create-a-custom-controls-library"}},l={},g=[],s={toc:g},C="wrapper";function c(A){let{components:e,...n}=A;return(0,r.kt)(C,(0,t.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4f7f\u7528\u5c5e\u6027\u8fdb\u884c\u7ed8\u5236"},"\u4f7f\u7528\u5c5e\u6027\u8fdb\u884c\u7ed8\u5236"),(0,r.kt)("p",null,"\u5728\u8fd9\u4e2a\u9875\u9762\u4e0a\uff0c\u60a8\u5c06\u770b\u5230\u5982\u4f55\u4f7f\u7528\u4e00\u4e2a\u7b80\u5355\u5c5e\u6027\u7684\u503c\u6765\u7ed8\u5236\u81ea\u5b9a\u4e49\u63a7\u4ef6\uff0c\u8be5\u5c5e\u6027\u5b9a\u4e49\u4e86\u80cc\u666f\u989c\u8272\u3002\u4ee3\u7801\u73b0\u5728\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title='MainWindow.xaml'",title:"'MainWindow.xaml'"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:cc="using:AvaloniaCCExample.CustomControls"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        mc:Ignorable="d" d:DesignWidth="800" d:DesignHeight="450"\n        x:Class="AvaloniaCCExample.MainWindow"\n        Title="Avalonia Custom Control">\n  <cc:MyCustomControl Height="200" Width="300" Background="Red"/>\n</Window>\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"title='MyCustomControl.cs'",title:"'MyCustomControl.cs'"},"using Avalonia.Controls;\n\nnamespace AvaloniaCCExample.CustomControls\n{\n    public class MyCustomControl : Control\n    {\n        public IBrush? Background { get; set; }\n\n        public sealed override void Render(DrawingContext context)\n        {\n            if (Background != null)\n            {\n                var renderSize = Bounds.Size;\n                context.FillRectangle(Background, new Rect(renderSize));\n            }\n            \n            base.Render(context);\n        }\n    }\n}\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u793a\u4f8b\u5728\u81ea\u5b9a\u4e49\u63a7\u4ef6\u4e0a\u5b9a\u4e49\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u7b14\u5237\u5c5e\u6027\uff0c\u7528\u4e8e\u80cc\u666f\u989c\u8272\u3002\u7136\u540e\uff0c\u5b83\u91cd\u5199\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"Render"),"\u65b9\u6cd5\u6765\u7ed8\u5236\u63a7\u4ef6\u3002"),(0,r.kt)("p",null,"\u7ed8\u5236\u4ee3\u7801\u4f7f\u7528",(0,r.kt)("em",{parentName:"p"},"Avalonia UI"),"\u56fe\u5f62\u4e0a\u4e0b\u6587\uff08\u4f20\u9012\u7ed9\u6e32\u67d3\u65b9\u6cd5\uff09\uff0c\u7ed8\u5236\u4e00\u4e2a\u586b\u5145\u6709\u80cc\u666f\u989c\u8272\u7684\u77e9\u5f62\uff0c\u5927\u5c0f\u4e0e\u63a7\u4ef6\u76f8\u540c\uff08\u7531",(0,r.kt)("inlineCode",{parentName:"p"},"Bounds.Size"),"\u5bf9\u8c61\u63d0\u4f9b\uff09\u3002"),(0,r.kt)("img",{src:o,alt:""}),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u63a7\u4ef6\u73b0\u5728\u5728\u8fd0\u884c\u65f6\uff08\u5982\u4e0a\u56fe\uff09\u548c\u9884\u89c8\u7a97\u683c\u4e2d\u90fd\u663e\u793a\u51fa\u6765\u3002"),(0,r.kt)("p",null,"\u5728\u4e0b\u4e00\u9875\u4e2d\uff0c\u60a8\u5c06\u770b\u5230\u5982\u4f55\u5b9e\u73b0\u80cc\u666f\u5c5e\u6027\uff0c\u4ee5\u4fbf\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("em",{parentName:"p"},"Avalonia UI"),"\u6837\u5f0f\u7cfb\u7edf\u8fdb\u884c\u66f4\u6539\u3002"))}c.isMDXComponent=!0}}]);