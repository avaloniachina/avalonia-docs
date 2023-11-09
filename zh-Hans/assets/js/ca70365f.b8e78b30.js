"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[56865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={description:"REFERENCE - Built-in Controls"},o="ColorView",i={unversionedId:"reference/controls/colorpicker/colorview",id:"reference/controls/colorpicker/colorview",title:"ColorView",description:"REFERENCE - Built-in Controls",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/controls/colorpicker/colorview.md",sourceDirName:"reference/controls/colorpicker",slug:"/reference/controls/colorpicker/colorview",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/colorpicker/colorview",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/reference/controls/colorpicker/colorview.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Controls"},sidebar:"documentationSidebar",previous:{title:"ColorPicker",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/colorpicker/"},next:{title:"Combo Box",permalink:"/avalonia-docs/zh-Hans/docs/next/reference/controls/combobox"}},s={},p=[{value:"Common Properties",id:"common-properties",level:2},{value:"Pseudoclasses",id:"pseudoclasses",level:2},{value:"Template Parts",id:"template-parts",level:2}],d={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"colorview"},"ColorView"),(0,r.kt)("p",null,"Presents a color for user editing using a spectrum, palette and component sliders."),(0,r.kt)("h2",{id:"common-properties"},"Common Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Color")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the currently selected color in the RGB color model. For control authors, use ",(0,r.kt)("inlineCode",{parentName:"td"},"HsvColor")," instead to avoid loss of precision and color drifting.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ColorModel")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the active color model used by the sliders. This property is only applicable to the components tab. The spectrum tab must always be in HSV and the palette tab contains only pre-defined colors.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ColorSpectrumComponents")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the two HSV color components displayed by the spectrum.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ColorSpectrumShape")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the displayed shape of the spectrum.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"HexInputAlphaPosition")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the position of the alpha component in the hexadecimal input box relative to all other color components.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"HsvColor")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the currently selected color in the HSV color model. This should be used in all cases instead of the ",(0,r.kt)("inlineCode",{parentName:"td"},"Color")," property. Internally, the ",(0,r.kt)("inlineCode",{parentName:"td"},"ColorSpectrum")," uses the HSV color model and using this property will avoid loss of precision and color drifting.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IsAccentColorsVisible")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets a value indicating whether accent colors are visible along with the preview color.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IsAlphaEnabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets a value indicating whether the alpha component is enabled. When disabled (set to false) the alpha component will be fixed to maximum and editing controls disabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IsAlphaVisible")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets a value indicating whether the alpha component editing controls (Slider(s) and TextBox) are visible. When hidden, the existing alpha component value is maintained. Note that ",(0,r.kt)("inlineCode",{parentName:"td"},"IsComponentTextInputVisible")," also controls the alpha component TextBox visibility.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IsColorComponentsVisible")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets a value indicating whether the color components tab/panel/page (subview) is visible.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IsColorModelVisible")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets a value indicating whether the active color model indicator/selector is visible.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IsColorPaletteVisible")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets a value indicating whether the color palette tab/panel/page (subview) is visible.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IsColorPreviewVisible")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets a value indicating whether the color preview is visible. Note that accent color visibility is controlled separately by ",(0,r.kt)("inlineCode",{parentName:"td"},"IsAccentColorsVisible"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IsColorSpectrumVisible")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets a value indicating whether the color spectrum tab/panel/page (subview) is visible.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IsColorSpectrumSliderVisible")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets a value indicating whether the color spectrum's third component slider is visible.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IsComponentSliderVisible")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets a value indicating whether color component sliders are visible. All color components are controlled by this property but alpha can also be controlled with ",(0,r.kt)("inlineCode",{parentName:"td"},"IsAlphaVisible"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IsComponentTextInputVisible")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets a value indicating whether color component text inputs are visible. All color components are controlled by this property but alpha can also be controlled with ",(0,r.kt)("inlineCode",{parentName:"td"},"IsAlphaVisible"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IsHexInputVisible")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets a value indicating whether the hexadecimal color value text input is visible.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MaxHue")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the maximum value of the Hue component in the range from 0..359. This property must be greater than ",(0,r.kt)("inlineCode",{parentName:"td"},"MinHue"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MaxSaturation")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the maximum value of the Saturation component in the range from 0..100. This property must be greater than ",(0,r.kt)("inlineCode",{parentName:"td"},"MinSaturation"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MaxValue")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the maximum value of the Value component in the range from 0..100. This property must be greater than ",(0,r.kt)("inlineCode",{parentName:"td"},"MinValue"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MinHue")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the minimum value of the Hue component in the range from 0..359. This property must be less than ",(0,r.kt)("inlineCode",{parentName:"td"},"MaxHue"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MinSaturation")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the minimum value of the Saturation component in the range from 0..100. This property must be less than ",(0,r.kt)("inlineCode",{parentName:"td"},"MaxSaturation"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MinValue")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the minimum value of the Value component in the range from 0..100. This property must be less than ",(0,r.kt)("inlineCode",{parentName:"td"},"MaxValue"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PaletteColors")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the collection of individual colors in the palette. This is not commonly set manually. Instead, it should be set automatically by providing an ",(0,r.kt)("inlineCode",{parentName:"td"},"IColorPalette")," to the ",(0,r.kt)("inlineCode",{parentName:"td"},"Palette")," property.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PaletteColumnCount")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the number of colors in each row (section) of the color palette. Within a standard palette, rows are shades and columns are colors. This is not commonly set manually. Instead, it should be set automatically by providing an ",(0,r.kt)("inlineCode",{parentName:"td"},"IColorPalette")," to the ",(0,r.kt)("inlineCode",{parentName:"td"},"Palette")," property.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Palette")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the color palette. This will automatically set both ",(0,r.kt)("inlineCode",{parentName:"td"},"PaletteColors")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"PaletteColumnCount")," overwriting any existing values.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SelectedIndex")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the index of the selected tab/panel/page (subview). When using the default control theme, this property is designed to be used with the ",(0,r.kt)("inlineCode",{parentName:"td"},"ColorViewTab")," enum. The ",(0,r.kt)("inlineCode",{parentName:"td"},"ColorViewTab")," enum defines the index values of each of the three standard tabs. Use like ",(0,r.kt)("inlineCode",{parentName:"td"},"SelectedIndex = (int)ColorViewTab.Palette"),".")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'The properties for visibility use the naming pattern "IsThingVisible" rather than "ShowThing" because some elements of the UI have the ability to control both enabled and visible status separately. Naming also matches ',(0,r.kt)("inlineCode",{parentName:"p"},"Control")," in this case.")),(0,r.kt)("h2",{id:"pseudoclasses"},"Pseudoclasses"),(0,r.kt)("p",null,"None"),(0,r.kt)("h2",{id:"template-parts"},"Template Parts"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PART_HexTextBox")),(0,r.kt)("td",{parentName:"tr",align:null},"TextBox"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides an input or output for hexadecimal color notation that can be parsed by the control.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PART_TabControl")),(0,r.kt)("td",{parentName:"tr",align:null},"TabControl"),(0,r.kt)("td",{parentName:"tr",align:null},"The main control used to navigate through the spectrum, palette and components tab/panel/page (subviews). This template part is optional and is only required for some validation scenarios of the ",(0,r.kt)("inlineCode",{parentName:"td"},"SelectedIndex"),".")))))}c.isMDXComponent=!0}}]);