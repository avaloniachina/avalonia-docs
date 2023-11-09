"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[32995],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),k=a,h=p["".concat(c,".").concat(k)]||p[k]||u[k]||l;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},16105:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const l=r.p+"assets/images/masked-3e7264c602dcdb2aafda8b142a897e33.gif",o={description:"REFERENCE - Built-in Controls"},i="Masked Text Box",c={unversionedId:"reference/controls/maskedtextbox",id:"reference/controls/maskedtextbox",title:"Masked Text Box",description:"REFERENCE - Built-in Controls",source:"@site/docs/reference/controls/maskedtextbox.md",sourceDirName:"reference/controls",slug:"/reference/controls/maskedtextbox",permalink:"/avalonia-docs/docs/next/reference/controls/maskedtextbox",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/reference/controls/maskedtextbox.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Controls"},sidebar:"documentationSidebar",previous:{title:"List Box",permalink:"/avalonia-docs/docs/next/reference/controls/listbox"},next:{title:"Menu Controls",permalink:"/avalonia-docs/docs/next/reference/controls/menu-controls"}},s={},d=[{value:"Useful Properties",id:"useful-properties",level:2},{value:"Mask Characters",id:"mask-characters",level:2},{value:"Example",id:"example",level:2},{value:"More Information",id:"more-information",level:2}],p={toc:d},u="wrapper";function k(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"masked-text-box"},"Masked Text Box"),(0,a.kt)("p",null,"The masked text box presents an area for typed (keyboard) input, but where the format and characters permitted can be constrained by a mask pattern formed from special characters."),(0,a.kt)("p",null,"The mask pattern can also contain literal characters that appear in the input, and cannot be typed over."),(0,a.kt)("h2",{id:"useful-properties"},"Useful Properties"),(0,a.kt)("p",null,"You will probably use these properties most often:"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{width:"235"},"Property"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"Mask")),(0,a.kt)("td",null,"The mask pattern to use. See the special mask characters in the table below.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"AsciiOnly")),(0,a.kt)("td",null,"Restricts input to the ASCII letters a-z and A-Z.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"Text")),(0,a.kt)("td",null,"The resulting text input including any literal characters.")))),(0,a.kt)("h2",{id:"mask-characters"},"Mask Characters"),(0,a.kt)("p",null,"The mask property accepts a string that can contain a combination of  fixed characters, and the following special characters:"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{width:"287",align:"center"},"Mask Character"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",null,"Digit, required. This element will accept any single digit between 0 and 9.")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"9"),(0,a.kt)("td",null,"Digit or space, optional.")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"#"),(0,a.kt)("td",null,"Digit or space, optional. If this position is blank in the mask, it will be rendered as a space in the Text property. Plus (+) and minus (-) signs are allowed.")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"L"),(0,a.kt)("td",null,"Letter, required. Restricts input to the ASCII letters a-z and A-Z")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"?"),(0,a.kt)("td",null,"Letter, optional. Restricts input to the ASCII letters a-z and A-Z")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"&"),(0,a.kt)("td",null,"Character, required. If the ",(0,a.kt)("code",null,"AsciiOnly"),' property is true, this element behaves like the "L" element.')),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"C"),(0,a.kt)("td",null,'Character, optional. Any non-control character. If the AsciiOnly property is set to true, this element behaves like the "?" element.')),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"A"),(0,a.kt)("td",null,'Alphanumeric, required. If the AsciiOnly property is true, the only characters it will accept are the ASCII letters a-z and A-Z. This mask element behaves like the "a" element.')),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"a"),(0,a.kt)("td",null,'Alphanumeric, optional. If the AsciiOnly property is set to true, the only characters it will accept are the ASCII letters a-z and A-Z. This mask element behaves like the "A" element.')),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"."),(0,a.kt)("td",null,"Decimal placeholder. The actual display character used will be the decimal symbol appropriate to the format provider, as determined by the control's FormatProvider property.")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},","),(0,a.kt)("td",null,"Thousands placeholder. The actual display character used will be the thousands placeholder appropriate to the format provider, as determined by the control's FormatProvider property.")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},":"),(0,a.kt)("td",null,"Time separator. The actual display character used will be the time symbol appropriate to the format provider, as determined by the control's FormatProvider property.")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"/"),(0,a.kt)("td",null,"Date separator. The actual display character used will be the date symbol appropriate to the format provider, as determined by the control's FormatProvider property.")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"$"),(0,a.kt)("td",null,"Currency symbol. The actual character displayed will be the currency symbol appropriate to the format provider, as determined by the control's FormatProvider property.")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"<"),(0,a.kt)("td",null,"Shift down. Converts all characters that follow to lowercase.")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},">"),(0,a.kt)("td",null,"Shift up. Converts all characters that follow to uppercase.")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"|"),(0,a.kt)("td",null,"Disable a previous shift up or shift down.")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"\\"),(0,a.kt)("td",null,'Escape. Escapes a mask character, turning it into a literal. "\\"')))),(0,a.kt)("p",null,"The escape character (backslash) can be used to include a special character as a literal. For example, to include the dollar sign:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'Mask="\\$999,000.00"')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"This is a basic example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<StackPanel Margin="20">\n  <TextBlock Margin="0 5">International phone number:</TextBlock>\n  <MaskedTextBox Mask="(+09) 000 000 0000" />\n  <TextBlock Margin="0 15 0 5">UK VAT number:</TextBlock>\n  <MaskedTextBox Mask="GB 000 000 000" />\n</StackPanel>\n')),(0,a.kt)("img",{src:l,alt:""}),(0,a.kt)("h2",{id:"more-information"},"More Information"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For the complete API documentation about this control, see here.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"View the source code on ",(0,a.kt)("em",{parentName:"p"},"GitHub")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/MaskedTextBox.cs"},(0,a.kt)("inlineCode",{parentName:"a"},"MaskedTextBox.cs")))))}k.isMDXComponent=!0}}]);