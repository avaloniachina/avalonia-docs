"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[31262],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,b=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={id:"running-your-app-on-a-raspberry-pi",title:"Running on Raspberry Pi"},o="Running on Raspberry Pi",l={unversionedId:"guides/platforms/rpi/running-your-app-on-a-raspberry-pi",id:"guides/platforms/rpi/running-your-app-on-a-raspberry-pi",title:"Running on Raspberry Pi",description:"Step 1",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/platforms/rpi/running-your-app-on-a-raspberry-pi.md",sourceDirName:"guides/platforms/rpi",slug:"/guides/platforms/rpi/running-your-app-on-a-raspberry-pi",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/platforms/rpi/running-your-app-on-a-raspberry-pi",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/guides/platforms/rpi/running-your-app-on-a-raspberry-pi.md",tags:[],version:"current",frontMatter:{id:"running-your-app-on-a-raspberry-pi",title:"Running on Raspberry Pi"},sidebar:"documentationSidebar",previous:{title:"How To Build and Run on the iOS Simulator",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/platforms/ios/build-and-run-your-application-on-a-simulator"},next:{title:"Running on Raspberry Pi with Raspbian Lite",permalink:"/avalonia-docs/zh-Hans/docs/next/guides/platforms/rpi/running-on-raspbian-lite-via-drm"}},p={},s=[{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Step 3",id:"step-3",level:3}],u={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"running-on-raspberry-pi"},"Running on Raspberry Pi"),(0,a.kt)("h3",{id:"step-1"},"Step 1"),(0,a.kt)("p",null,"Flash 8GB SD Card with Raspbian Stretch (2018-11-13). ",(0,a.kt)("inlineCode",{parentName:"p"},"BelenaEtcher")," is a nice tool for that."),(0,a.kt)("p",null,"Plug in the card and start the ",(0,a.kt)("inlineCode",{parentName:"p"},"Raspberry Pi"),"."),(0,a.kt)("p",null,"You can follow ",(0,a.kt)("a",{parentName:"p",href:"https://blogs.msdn.microsoft.com/david/2017/07/20/setting_up_raspian_and_dotnet_core_2_0_on_a_raspberry_pi/"},"this guide"),", next steps are summarized below."),(0,a.kt)("h3",{id:"step-2"},"Step 2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("inlineCode",{parentName:"li"},"curl"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"libunwind8"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"gettext")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"apt-transport-https"),". The ",(0,a.kt)("inlineCode",{parentName:"li"},"curl")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"apt-transport-https")," often are up-to-date.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install curl libunwind8 gettext apt-transport-https\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download tar-ball.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSL -o dotnet.tar.gz https://dotnetcli.blob.core.windows.net/dotnet/Runtime/release/2.0.0/dotnet-runtime-latest-linux-arm.tar.gz\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Unpack tarball to ",(0,a.kt)("inlineCode",{parentName:"li"},"/opt/dotnet"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir -p /opt/dotnet && sudo tar zxf dotnet.tar.gz -C /opt/dotnet\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Link ",(0,a.kt)("inlineCode",{parentName:"li"},"dotnet")," binary.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ln -s /opt/dotnet/dotnet /usr/local/bin\n")),(0,a.kt)("p",null,'Alternative: You can login as superuser (run "sudo su")'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt-get -y install curl libunwind8 gettext apt-transport-https\ncurl -sSL -o dotnet.tar.gz https://dotnetcli.blob.core.windows.net/dotnet/Runtime/release/2.0.0/dotnet-runtime-latest-linux-arm.tar.gz\nmkdir -p /opt/dotnet && sudo tar zxf dotnet.tar.gz -C /opt/dotnet\nln -s /opt/dotnet/dotnet /usr/local/bin\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Take care of line endings of the script. It should use ",(0,a.kt)("inlineCode",{parentName:"p"},"LF")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"CR LF"),". Save the script as ",(0,a.kt)("inlineCode",{parentName:"p"},".sh")," file and run it on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Raspberry Pi")," with bash ",(0,a.kt)("inlineCode",{parentName:"p"},"filename.sh"),".")),(0,a.kt)("h3",{id:"step-3"},"Step 3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To run an ",(0,a.kt)("inlineCode",{parentName:"li"},"Avalonia")," application on ",(0,a.kt)("inlineCode",{parentName:"li"},"Raspberry Pi")," you need to use this nuGet package:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://www.nuget.org/packages/Avalonia.Skia.Linux.Natives/1.68.0.2\n")),(0,a.kt)("p",null,"It includes the ",(0,a.kt)("inlineCode",{parentName:"p"},"libSkiaSharp.so"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Now publish the app with the following command:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet publish -r linux-arm -f netcoreapp2.0\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Copy publish directory to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Raspberry Pi")," and run it with ",(0,a.kt)("inlineCode",{parentName:"li"},"dotnet publish/ApplicationName.dll"))))}c.isMDXComponent=!0}}]);