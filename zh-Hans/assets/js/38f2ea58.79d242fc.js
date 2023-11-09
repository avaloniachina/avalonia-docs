"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[27078],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(o),u=r,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},17038:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const a=o.p+"assets/images/color-palette-fluent-6e86f0ade381097e04fbe54ce3f3727e.png",i=(o.p,o.p,o.p,o.p,{description:"REFERENCE - Built-in Controls"}),l="ColorPicker",s={unversionedId:"reference/controls/colorpicker/README",id:"reference/controls/colorpicker/README",title:"ColorPicker",description:"REFERENCE - Built-in Controls",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/controls/colorpicker/README.md",sourceDirName:"reference/controls/colorpicker",slug:"/reference/controls/colorpicker/",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/colorpicker/",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/reference/controls/colorpicker/README.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Controls"},sidebar:"documentationSidebar",previous:{title:"Check Box",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/checkbox"},next:{title:"ColorView",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/colorpicker/colorview"}},p={},c=[{value:"Is this the right control?",id:"is-this-the-right-control",level:2},{value:"Using in Your App",id:"using-in-your-app",level:2},{value:"Background",id:"background",level:2},{value:"Controls &amp; Primitives",id:"controls--primitives",level:2},{value:"Color Palettes",id:"color-palettes",level:2}],d={toc:c},m="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"colorpicker"},"ColorPicker"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ColorPicker")," provides a highly customizable, general-purpose control that users can use to select colors in RGB or HSV color space. This implementation is just as much about providing primitive controls that developers can use to build their own color pickers as it is about providing a ready-to-use picker. "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ColorPicker")," includes a family of controls (components):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ColorSpectrum")," (primitive) : A two dimensional spectrum for color selection."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ColorSlider")," (primitive) : A slider with a background that represents a single color component."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ColorPreviewer")," (primitive) : Shows a preview color with optional accent colors."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ColorView")," : Presents a color for user editing using a spectrum, palette and component sliders."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ColorPicker")," : Presents a color for user editing using a spectrum, palette and component sliders within a drop down. Editing is available when the drop down flyout is opened; otherwise, only the preview color is shown.")),(0,r.kt)("p",null,"Each primitive component can be used on its own and mixed/matched with others. This allows significant composability that isn't possible with other color picker implementations. For example, you can quickly bind together the ",(0,r.kt)("inlineCode",{parentName:"p"},"ColorSpectrum"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ColorSlider")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ColorPreviewer")," primitives to create your own color picker with a brand-new design."),(0,r.kt)("p",null,'Note on terminology: "color picker" usually refers to the family of controls while ',(0,r.kt)("inlineCode",{parentName:"p"},"ColorPicker")," refers to the specific control."),(0,r.kt)("h2",{id:"is-this-the-right-control"},"Is this the right control?"),(0,r.kt)("p",null,"This control is intended to be used directly to select colors in a user-friendly, developer customizable way. This can be done using either a canvas-type ",(0,r.kt)("inlineCode",{parentName:"p"},"ColorView")," control or a compact ",(0,r.kt)("inlineCode",{parentName:"p"},"ColorPicker")," drop down."),(0,r.kt)("p",null,"For apps with even more special-purpose needs, each control and primitive component can be independently customized to create a new color picker without having to re-implement all the advanced rendering and color logic. This is very useful to match a specific app's design and usability requirements."),(0,r.kt)("p",null,"Developers using this control may:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"ColorView")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"ColorPicker")," as-is directly in their apps"),(0,r.kt)("li",{parentName:"ol"},"Customize ",(0,r.kt)("inlineCode",{parentName:"li"},"ColorView")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"ColorPicker")," using the included properties. These properties allow significant changes to the control such as disabling components sliders, showing different palettes or hiding all but the spectrum tab."),(0,r.kt)("li",{parentName:"ol"},"Create a new color picker to meet a specific app's design and usability requirements using the existing primitive components."),(0,r.kt)("li",{parentName:"ol"},"Re-template the existing components to create a brand-new fully customized color picker.")),(0,r.kt)("h2",{id:"using-in-your-app"},"Using in Your App"),(0,r.kt)("p",null,"Avalonia is used in several resource-constrained environments such as embedded devices. For this and other reasons, certain larger controls such as the ",(0,r.kt)("inlineCode",{parentName:"p"},"ColorPicker")," are not included with the main Avalonia UI Nuget packages. This means a bit of extra work is required to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"ColorPicker")," to your app:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add the ",(0,r.kt)("inlineCode",{parentName:"li"},"Avalonia.Controls.ColorPicker")," nuget to your project. This MUST match your version of Avalonia's other packages."),(0,r.kt)("li",{parentName:"ol"},"Add control themes and styles for all color picker controls in ",(0,r.kt)("inlineCode",{parentName:"li"},"App.axaml")," by adding:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'<StyleInclude Source="avares://Avalonia.Controls.ColorPicker/Themes/Fluent/Fluent.xaml" />')," for Fluent themes ",(0,r.kt)("strong",{parentName:"li"},"OR")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'<StyleInclude Source="avares://Avalonia.Controls.ColorPicker/Themes/Simple/Simple.xaml" />')," for Simple themes")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This step is not required for some theme packages such as FluentAvalonia which include all controls by default.")),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"This control originated as a re-styling of the one in UWP (later WinUI) using the basic designs implemented for the Windows Community Toolkit. The WinUI ",(0,r.kt)("inlineCode",{parentName:"p"},"ColorPicker")," isn't conducive to smaller screen sizes and the overall design/usability of the control left something to be desired for both users and developers."),(0,r.kt)("p",null,"With all its features, the WinUI control still wasn't as good as it should be. It couldn't be re-templated and customized without a lot of effort (partially because individual components were highly inter-dependent on each other). It also used a lot of template parts and code-behind. The Avalonia UI version of the control (a complete rewrite) attempts to fix all of these issues and become the predominant XAML color picker design."),(0,r.kt)("p",null,"Main improvements learning from WinUI were:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"ColorPicker"),' is implemented as a drop-down (matching all other "pickers"). There is also a ',(0,r.kt)("inlineCode",{parentName:"li"},"ColorView")," control for those that want the canvas-type control (similar to WinUI)."),(0,r.kt)("li",{parentName:"ul"},"The Avalonia controls attempt to do everything possible in XAML control themes keeping code-behind to an absolute minimum. This significantly increases composability and enables app developers to customize every part of these controls (and even the primitives in most cases)."),(0,r.kt)("li",{parentName:"ul"},"Primitives such as the ",(0,r.kt)("inlineCode",{parentName:"li"},"ColorSlider")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ColorSpectrum")," are fully self-contained and can be used separately enabling app developers to create custom color picker implementations."),(0,r.kt)("li",{parentName:"ul"},"A new ",(0,r.kt)("inlineCode",{parentName:"li"},"HsvColor")," struct was added to base Avalonia itself (alongside ",(0,r.kt)("inlineCode",{parentName:"li"},"Color")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"HslColor"),") and is now used in all color picker controls. This simplified code-behind and also made binding of color properties between primitives and controls possible. Color picker controls internally work in HSV color space."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HsvColor")," along with ",(0,r.kt)("inlineCode",{parentName:"li"},"ColorSlider")," together unlock a lot of power compared to WinUI (and enable easy re-templating)."),(0,r.kt)("li",{parentName:"ul"},"Many new properties (more than in WinUI) were added to control all aspects of the ",(0,r.kt)("inlineCode",{parentName:"li"},"ColorView")," visibility. Each tab can be separately hidden along with most individual subsections. This allows a lot of design customization without having to re-template or use complex style selectors."),(0,r.kt)("li",{parentName:"ul"},"Color palettes were added using the ",(0,r.kt)("inlineCode",{parentName:"li"},"IColorPalette")," interface (same as the Windows Community Toolkit). No color palettes are supported in the WinUI version of this control."),(0,r.kt)("li",{parentName:"ul"},"New properties such as ",(0,r.kt)("inlineCode",{parentName:"li"},"SelectedIndex")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ColorModel")," allow customizing the color picker and putting it into a pre-defined state. For example, the WinUI ColorPicker always defaults to RGB and this cannot be changed in code or XAML. This implementation does not have such limitations.")),(0,r.kt)("h2",{id:"controls--primitives"},"Controls & Primitives"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Control"),(0,r.kt)("th",{parentName:"tr",align:null},"Link"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ColorPicker")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ColorView")),(0,r.kt)("td",{parentName:"tr",align:null},"See the dedicated ",(0,r.kt)("a",{parentName:"td",href:"/avalonia-docs/zh-Hans/docs/next/reference/controls/colorpicker/colorview"},(0,r.kt)("inlineCode",{parentName:"a"},"ColorView"))," page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ColorSpectrum")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ColorSlider")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ColorPreviewer")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"color-palettes"},"Color Palettes"),(0,r.kt)("p",null,"Several pre-defined color palettes implementing the ",(0,r.kt)("inlineCode",{parentName:"p"},"IColorPalette")," interface are provided. Instances of these palettes may be set to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Palette")," property of a ",(0,r.kt)("inlineCode",{parentName:"p"},"ColorView")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ColorPicker"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Palette"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{src:a,alt:"Fluent Color Palette",width:"300"})),(0,r.kt)("td",{parentName:"tr",align:null},"Contains the Fluent color palette found in Windows 10 and later. This is the default color palette.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{src:"{ColorPaletteFlat}",alt:"Flat UI Color Palette",width:"300"})),(0,r.kt)("td",{parentName:"tr",align:null},"Contains the full ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/designmodo/Flat-UI"},"Flat UI color palette"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{src:"{ColorPaletteFlatHalf}",alt:"Flat UI Half Color Palette",width:"300"})),(0,r.kt)("td",{parentName:"tr",align:null},"Contains half of ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/designmodo/Flat-UI"},"Flat UI color palette")," for improved usability especially on mobile devices.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{src:"{ColorPaletteMaterial}",alt:"Material Color Palette",width:"300"})),(0,r.kt)("td",{parentName:"tr",align:null},"Contains most of the ",(0,r.kt)("a",{parentName:"td",href:"https://material.io/design/color/the-color-system.html#tools-for-picking-colors"},"Material design color palette"),". In order to make the palette uniform and rectangular the following alterations were made 1. The A100-A700 shades of each color are excluded. These shades do not exist for all colors (Brown/Gray). 2. Black/White are stand-alone colors and are also excluded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{src:"{ColorPaletteMaterialHalf}",alt:"Material Half Color Palette",width:"300"})),(0,r.kt)("td",{parentName:"tr",align:null},"Contains half of the ",(0,r.kt)("a",{parentName:"td",href:"https://material.io/design/color/the-color-system.html#tools-for-picking-colors"},"Material design color palette")," shown above for improved usability especially on mobile devices.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{src:"{ColorPaletteSixteen}",alt:"Sixteen Color Palette",width:"300"})),(0,r.kt)("td",{parentName:"tr",align:null},"Contains the standard ",(0,r.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Web_colors#HTML_color_names"},"sixteen color palette")," from the HTML 4.01 specification.")))))}u.isMDXComponent=!0}}]);