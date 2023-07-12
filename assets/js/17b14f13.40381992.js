"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[708],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=m(n),c=i,k=p["".concat(s,".").concat(c)]||p[c]||d[c]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:i,l[1]=r;for(var m=2;m<o;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},48211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>m});var a=n(87462),i=(n(67294),n(3905));const o={id:"keyframe-animations",title:"How To Use Keyframe Animations"},l="How To Use Keyframe Animations",r={unversionedId:"guides/graphics-and-animation/keyframe-animations",id:"guides/graphics-and-animation/keyframe-animations",title:"How To Use Keyframe Animations",description:"You can use a keyframe animation to change one or more control properties following a timeline. The keyframes are defined in Avalonia UI styles with cue points along the duration of the animation, and set the intermediate values of the properties at a point in time.",source:"@site/docs/guides/graphics-and-animation/keyframe-animations.md",sourceDirName:"guides/graphics-and-animation",slug:"/guides/graphics-and-animation/keyframe-animations",permalink:"/avalonia-docs/docs/next/guides/graphics-and-animation/keyframe-animations",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/graphics-and-animation/keyframe-animations.md",tags:[],version:"current",frontMatter:{id:"keyframe-animations",title:"How To Use Keyframe Animations"},sidebar:"documentationSidebar",previous:{title:"How To Use Icons",permalink:"/avalonia-docs/docs/next/guides/graphics-and-animation/how-to-use-icons"},next:{title:"How To Use Transitions",permalink:"/avalonia-docs/docs/next/guides/graphics-and-animation/transitions"}},s={},m=[{value:"Example",id:"example",level:2},{value:"Animate Two Properties",id:"animate-two-properties",level:2},{value:"Delay",id:"delay",level:2},{value:"Repeat",id:"repeat",level:2},{value:"Playback Direction",id:"playback-direction",level:2},{value:"Fill Mode",id:"fill-mode",level:2},{value:"Easing Function",id:"easing-function",level:2}],u={toc:m},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-use-keyframe-animations"},"How To Use Keyframe Animations"),(0,i.kt)("p",null,"You can use a keyframe animation to change one or more control properties following a timeline. The keyframes are defined in ",(0,i.kt)("em",{parentName:"p"},"Avalonia UI")," styles with ",(0,i.kt)("strong",{parentName:"p"},"cue")," points along the ",(0,i.kt)("strong",{parentName:"p"},"duration")," of the animation, and set the intermediate values of the properties at a point in time."),(0,i.kt)("img",{src:"/img/gitbook-import/assets/image (2) (1) (4).png",alt:""}),(0,i.kt)("p",null,"The property values between keyframes are set following the profile of an ",(0,i.kt)("strong",{parentName:"p"},"easing function"),". The default easing function is a straight-line interpolation."," "),(0,i.kt)("p",null,"The animation is triggered to start, and then can run any number of times, in either direction. There are also options to delay the start of the animation, and to repeat it."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you are familiar with keyframe animations keyframe work in CSS, you will recognise the similarity with how they are done in in ",(0,i.kt)("em",{parentName:"p"},"Avalonia UI"),"."," ")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"You define a keyframe animation using styles."," "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To revise how ",(0,i.kt)("em",{parentName:"p"},"Avalonia UI")," uses styles, see the concept ",(0,i.kt)("a",{parentName:"p",href:"../../basics/user-interface/styling"},"here"),".")),(0,i.kt)("p",null,"Follow this procedure to define a simple color fade animation using XAML:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a styles collection at your chosen level."),(0,i.kt)("li",{parentName:"ul"},"Add a style to the collection with a selector that can target the control you want to animate."),(0,i.kt)("li",{parentName:"ul"},"Add a ",(0,i.kt)("inlineCode",{parentName:"li"},"Setter")," element to define the property that you wan the animation to change. In this example ",(0,i.kt)("inlineCode",{parentName:"li"},'<Setter Property="Fill" Value="Red"/>')),(0,i.kt)("li",{parentName:"ul"},"Add a ",(0,i.kt)("inlineCode",{parentName:"li"},"Style.Animations")," element to contain your animation."),(0,i.kt)("li",{parentName:"ul"},"Add an ",(0,i.kt)("inlineCode",{parentName:"li"},"Animation")," element and set its ",(0,i.kt)("inlineCode",{parentName:"li"},"Duration")," attribute. This is in the format ",(0,i.kt)("inlineCode",{parentName:"li"},'"Hours:Minutes:Seconds"'),"."),(0,i.kt)("li",{parentName:"ul"},"Now define the keyframes for the animation. This example uses cues at 0% and 100%."),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"Setter")," elements to each keyframe for value of the fill opacity. This example animates between opacity values of 0.0 and 1.0.")),(0,i.kt)("p",null,"The finished code will look like this: "," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<Window xmlns="https://github.com/avaloniaui">\n    <Window.Styles>\n        <Style Selector="Rectangle.red">\n            <Setter Property="Fill" Value="Red"/>\n            <Style.Animations>\n                <Animation Duration="0:0:3"> \n                    <KeyFrame Cue="0%">\n                        <Setter Property="Opacity" Value="0.0"/>\n                    </KeyFrame>\n                    <KeyFrame Cue="100%">\n                        <Setter Property="Opacity" Value="1.0"/>\n                    </KeyFrame>\n                </Animation>\n            </Style.Animations>\n        </Style>\n    </Window.Styles>\n\n    <Rectangle Classes="red" Width="100" Height="100"/>\n</Window>\n')),(0,i.kt)("p",null,"The resulting animation looks like this:"),(0,i.kt)("img",{src:"/img/gitbook-import/assets/anim1 (1).gif",alt:""}),(0,i.kt)("p",null,"The animation runs as soon as the rectangle control is loaded and can be selected by the style. In fact it runs in the preview pane as well!"," "),(0,i.kt)("h2",{id:"animate-two-properties"},"Animate Two Properties"),(0,i.kt)("p",null,"This example shows you how to animate two properties on the same timeline."," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'<Window.Styles>\n    <Style Selector="Rectangle.red">\n      <Setter Property="Fill" Value="Red"/>\n      <Style.Animations>\n        <Animation Duration="0:0:3" RepeatCount="4">\n          <KeyFrame Cue="0%">\n            <Setter Property="Opacity" Value="0.0"/>\n            <Setter Property="RotateTransform.Angle" Value="0.0"/>\n          </KeyFrame>\n          <KeyFrame Cue="100%"> \n            <Setter Property="Opacity" Value="1.0"/>\n            <Setter Property="RotateTransform.Angle" Value="90.0"/>\n          </KeyFrame>\n        </Animation> \n    </Style.Animations>\n    </Style>\n  </Window.Styles>\n')),(0,i.kt)("p",null,"The red rectangle is faded-in and rotated at the same time."),(0,i.kt)("img",{src:"/img/gitbook-import/assets/anim2.gif",alt:""}),(0,i.kt)("h2",{id:"delay"},"Delay"),(0,i.kt)("p",null,"You can add a delay to the start of an animation by setting the delay attribute of the animation element. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'<Animation Duration="0:0:1"\n           Delay="0:0:1"> \n    ...\n</Animation>\n')),(0,i.kt)("h2",{id:"repeat"},"Repeat"),(0,i.kt)("p",null,"You can make an animation repeat for a set number of times, or indefinitely. To repeat for a finite number of iterations set the ",(0,i.kt)("inlineCode",{parentName:"p"},"RepeatCount")," attribute on the animation element like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<Animation RepeatCount="5">\n    ...\n</Animation>\n')),(0,i.kt)("p",null,"To repeat an animation indefinitely, use the special  ",(0,i.kt)("inlineCode",{parentName:"p"},'"INFINITE"')," value. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<Animation RepeatCount="INFINITE">\n    ...\n</Animation>\n')),(0,i.kt)("h2",{id:"playback-direction"},"Playback Direction"),(0,i.kt)("p",null,"By default an animation plays forward. That is it follows the profile of the easing function from left to right. You can alter this behavior by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"PlaybackDirection")," attribute on the animation element. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<Animation RepeatCount="9" PlaybackDirection="AlternateReverse">\n    ...\n</Animation>\n')),(0,i.kt)("p",null,"The following table describes the options:"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{width:"245"},"Value"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"Normal")),(0,i.kt)("td",null,"(Default) The animation is played forwards.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"Reverse")),(0,i.kt)("td",null,"The animation is played in reverse direction.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"Alternate")),(0,i.kt)("td",null,"The animation is played forwards first, then backwards.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"AlternateReverse")),(0,i.kt)("td",null,"The animation is played backwards first, then forwards.")))),(0,i.kt)("h2",{id:"fill-mode"},"Fill Mode"),(0,i.kt)("p",null,"The fill mode attribute of an animation defines how the properties being set will persist after it runs, or during any gaps between runs. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<Animation RepeatCount="9" FillMode="Backward">\n    ...\n</Animation>\n')),(0,i.kt)("p",null,"The following table describes the options:"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{width:"240"},"Value"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"None")),(0,i.kt)("td",null,"Value will not persist after animation nor the first value will be applied when the animation is delayed.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"Forward")),(0,i.kt)("td",null,"The last interpolated value will be persisted to the target property.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"Backward")),(0,i.kt)("td",null,"The first interpolated value will be displayed on animation delay.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"Both")),(0,i.kt)("td",null,"Both ",(0,i.kt)("code",null,"Forward")," and ",(0,i.kt)("code",null,"Backward")," behaviors will be applied.")))),(0,i.kt)("h2",{id:"easing-function"},"Easing Function"),(0,i.kt)("p",null,"An easing function defines how a property is varied over time during an animation."),(0,i.kt)("div",null,(0,i.kt)("img",{src:"/img/gitbook-import/assets/image (72).png",alt:""}),(0,i.kt)("img",{src:"/img/gitbook-import/assets/image (76).png",alt:""})),(0,i.kt)("p",null,"The default easing function is linear (above left), but you use another pattern by setting the name of the desired function in the easing attribute. For example to use the 'bounce ease in' function (above right):"," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'<Animation Duration="0:0:1"\n           Delay="0:0:1"\n           Easing="BounceEaseIn"> \n    ...\n</Animation>\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For a full list of the ",(0,i.kt)("em",{parentName:"p"},"Avalonia UI")," easing functions, see the reference ",(0,i.kt)("a",{parentName:"p",href:"/avalonia-docs/docs/next/reference/animation-settings"},"here"),".")),(0,i.kt)("p",null,"You can also add your own custom easing function class like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'<Animation Duration="0:0:1"\n           Delay="0:0:1">\n    <Animation.Easing>\n        <local:YourCustomEasingClassHere/>\n    </Animation.Easing> \n    ...\n</Animation>\n')))}d.isMDXComponent=!0}}]);