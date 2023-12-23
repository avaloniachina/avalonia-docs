"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[97633],{37414:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>p,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var s=i(85893),a=i(11151);const r=i.p+"assets/images/avalonia-raspbian-lite-drm-kmscube-a0f330d09b27aa4497a2b324c7644322.gif",l=i.p+"assets/images/avalonia-raspbian-lite-drm-desktop-c76c51e445fece347fb52774df2bda8d.jpg",t=i.p+"assets/images/avalonia-raspbian-lite-drm-run-on-raspberry-95dfa4d7dabb2228d3de1b80e1e01635.jpg",o={id:"running-on-raspbian-lite-via-drm",title:"\u5728\u6811\u8393\u6d3e\u4e0a\u901a\u8fc7 Raspbian Lite \u8fd0\u884c"},c="\u5728\u6811\u8393\u6d3e\u4e0a\u901a\u8fc7 Raspbian Lite \u8fd0\u884c",d={id:"guides/platforms/rpi/running-on-raspbian-lite-via-drm",title:"\u5728\u6811\u8393\u6d3e\u4e0a\u901a\u8fc7 Raspbian Lite \u8fd0\u884c",description:"\u672c\u6559\u7a0b\u5c06\u5411\u60a8\u5c55\u793a\u5982\u4f55\u5728\u6811\u8393\u6d3e\u4e0a\u901a\u8fc7 Raspbian Lite \u548c DRM \u8fd0\u884c Avalonia \u5e94\u7528\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/platforms/rpi/running-on-raspbian-lite-via-drm.md",sourceDirName:"guides/platforms/rpi",slug:"/guides/platforms/rpi/running-on-raspbian-lite-via-drm",permalink:"/avalonia-docs/zh-Hans/docs/guides/platforms/rpi/running-on-raspbian-lite-via-drm",draft:!1,unlisted:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/platforms/rpi/running-on-raspbian-lite-via-drm.md",tags:[],version:"current",frontMatter:{id:"running-on-raspbian-lite-via-drm",title:"\u5728\u6811\u8393\u6d3e\u4e0a\u901a\u8fc7 Raspbian Lite \u8fd0\u884c"},sidebar:"documentationSidebar",previous:{title:"\u5728\u6811\u8393\u6d3e\u4e0a\u8fd0\u884c",permalink:"/avalonia-docs/zh-Hans/docs/guides/platforms/rpi/running-your-app-on-a-raspberry-pi"},next:{title:"Web Assembly",permalink:"/avalonia-docs/zh-Hans/docs/guides/platforms/how-to-use-web-assembly"}},p={},h=[{value:"\u6b65\u9aa4 1 - \u8bbe\u7f6e\u6811\u8393\u6d3e",id:"\u6b65\u9aa4-1---\u8bbe\u7f6e\u6811\u8393\u6d3e",level:3},{value:"1.1 \u4e0b\u8f7d Raspbian Lite \u64cd\u4f5c\u7cfb\u7edf\u955c\u50cf",id:"11-\u4e0b\u8f7d-raspbian-lite-\u64cd\u4f5c\u7cfb\u7edf\u955c\u50cf",level:4},{value:"1.2 \u51c6\u5907\u6811\u8393\u6d3e\u8fdb\u884c\u70e7\u5f55",id:"12-\u51c6\u5907\u6811\u8393\u6d3e\u8fdb\u884c\u70e7\u5f55",level:4},{value:"1.3 \u70e7\u5f55\u64cd\u4f5c\u7cfb\u7edf",id:"13-\u70e7\u5f55\u64cd\u4f5c\u7cfb\u7edf",level:4},{value:"1.4 \u5b89\u88c5\u7f3a\u5931\u7684\u5e93",id:"14-\u5b89\u88c5\u7f3a\u5931\u7684\u5e93",level:4},{value:"1.5 \u9a8c\u8bc1 DRM\uff08\u53ef\u9009\uff09",id:"15-\u9a8c\u8bc1-drm\u53ef\u9009",level:4},{value:"\u6b65\u9aa4 2 - \u51c6\u5907 Avalonia \u5e94\u7528",id:"\u6b65\u9aa4-2---\u51c6\u5907-avalonia-\u5e94\u7528",level:3},{value:"\u6b65\u9aa43 - \u90e8\u7f72\u5e76\u5728\u6811\u8393\u6d3e\u4e0a\u8fd0\u884c",id:"\u6b65\u9aa43---\u90e8\u7f72\u5e76\u5728\u6811\u8393\u6d3e\u4e0a\u8fd0\u884c",level:3}];function m(n){const e={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u5728\u6811\u8393\u6d3e\u4e0a\u901a\u8fc7-raspbian-lite-\u8fd0\u884c",children:"\u5728\u6811\u8393\u6d3e\u4e0a\u901a\u8fc7 Raspbian Lite \u8fd0\u884c"}),"\n",(0,s.jsxs)(e.p,{children:["\u672c\u6559\u7a0b\u5c06\u5411\u60a8\u5c55\u793a\u5982\u4f55\u5728\u6811\u8393\u6d3e\u4e0a\u901a\u8fc7 Raspbian Lite \u548c ",(0,s.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Direct_Rendering_Manager",children:"DRM"})," \u8fd0\u884c Avalonia \u5e94\u7528\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"\u6b65\u9aa4-1---\u8bbe\u7f6e\u6811\u8393\u6d3e",children:"\u6b65\u9aa4 1 - \u8bbe\u7f6e\u6811\u8393\u6d3e"}),"\n",(0,s.jsx)(e.p,{children:"\u7b2c\u4e00\u6b65\u662f\u8bbe\u7f6e\u60a8\u7684\u6811\u8393\u6d3e\u3002"}),"\n",(0,s.jsx)(e.h4,{id:"11-\u4e0b\u8f7d-raspbian-lite-\u64cd\u4f5c\u7cfb\u7edf\u955c\u50cf",children:"1.1 \u4e0b\u8f7d Raspbian Lite \u64cd\u4f5c\u7cfb\u7edf\u955c\u50cf"}),"\n",(0,s.jsxs)(e.p,{children:["\u60a8\u53ef\u4ee5\u4ece\u5b98\u65b9\u6811\u8393\u6d3e\u7f51\u7ad9\u4e0b\u8f7d Raspbian Lite \u64cd\u4f5c\u7cfb\u7edf\u6620\u50cf\u3002\n",(0,s.jsx)(e.a,{href:"https://www.raspberrypi.com/software/operating-systems/",children:"\u4e0b\u8f7d\u6811\u8393\u6d3e\u64cd\u4f5c\u7cfb\u7edf\u955c\u50cf"})]}),"\n",(0,s.jsx)(e.h4,{id:"12-\u51c6\u5907\u6811\u8393\u6d3e\u8fdb\u884c\u70e7\u5f55",children:"1.2 \u51c6\u5907\u6811\u8393\u6d3e\u8fdb\u884c\u70e7\u5f55"}),"\n",(0,s.jsx)(e.p,{children:"Raspberry Lite \u7684\u5b89\u88c5\u65b9\u6cd5\u56e0\u578b\u53f7\u4e0d\u540c\u800c\u6709\u6240\u4e0d\u540c\u3002"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://www.raspberrypi.com/products/raspberry-pi-4-model-b/",children:(0,s.jsx)(e.strong,{children:"Raspberry Pi 4 b"})}),"\n\u5bf9\u4e8e Pi 4 b\uff0c\u60a8\u9700\u8981\u4e00\u4e2a SD \u5361\u6765\u5b89\u88c5\u64cd\u4f5c\u7cfb\u7edf\u3002\n\u5c06 SD \u5361\u63d2\u5165\u60a8\u7684\u8ba1\u7b97\u673a\u3002\n\u7136\u540e\u60a8\u53ef\u4ee5\u76f4\u63a5\u8fdb\u5165\u6b65\u9aa4 1.3\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://www.raspberrypi.com/products/compute-module-4/?variant=raspberry-pi-cm4001000",children:(0,s.jsx)(e.strong,{children:"Raspberry CM4"})}),"\n\u7531\u4e8e CM4 \u662f\u4e3a\u5d4c\u5165\u5f0f\u5e94\u7528\u800c\u8bbe\u8ba1\u7684\uff0c\u60a8\u4ecd\u7136\u9700\u8981\u4e00\u4e2a IO \u677f\u3002\u6709\u5b98\u65b9\u7684 ",(0,s.jsx)(e.a,{href:"https://www.raspberrypi.com/products/compute-module-4-io-board/",children:"Compute Module 4 IO board"}),"\uff0c\u6216\u8005\u4e5f\u6709\u5176\u4ed6\u8bb8\u591a\u9009\u62e9\uff0c\u5982 ",(0,s.jsx)(e.a,{href:"https://sourcekit.cc/#/?id=sourcekit%C2%AE-pitray-mini",children:"SourceKit PiTray mini"}),"\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u8981\u51c6\u5907 EMMC \u5b58\u50a8\u5668\u8fdb\u884c\u6302\u8f7d\uff0c\u8bf7\u6309\u7167\u8fd9\u4e9b",(0,s.jsx)(e.a,{href:"https://www.raspberrypi.com/documentation/computers/compute-module.html#flashing-the-compute-module-emmc",children:"\u6b65\u9aa4"}),"\u3002"]}),"\n",(0,s.jsx)(e.h4,{id:"13-\u70e7\u5f55\u64cd\u4f5c\u7cfb\u7edf",children:"1.3 \u70e7\u5f55\u64cd\u4f5c\u7cfb\u7edf"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"https://etcher.io/",children:"\u4e0b\u8f7d"})," Etcher \u6620\u50cf\u5199\u5165\u5de5\u5177\u5e76\u5b89\u88c5\u3002"]}),"\n",(0,s.jsx)(e.li,{children:"\u6253\u5f00 Etcher\uff0c\u5e76\u4ece\u60a8\u7684\u786c\u76d8\u4e2d\u9009\u62e9\u5728\u6b65\u9aa4 1.1 \u4e2d\u4e0b\u8f7d\u7684 .zip \u6587\u4ef6\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u9009\u62e9\u8981\u5c06\u955c\u50cf\u5199\u5165\u7684\u5b58\u50a8\u8bbe\u5907\uff08SD \u5361\u6216 CM4 EMMC\uff09\u3002"}),"\n",(0,s.jsxs)(e.li,{children:['\u67e5\u770b\u60a8\u7684\u9009\u62e9\u5e76\u70b9\u51fb "Flash!" \u5f00\u59cb\u5199\u5165\u6570\u636e\u3002\u4e00\u65e6\u5199\u5165\u5b8c\u6210\uff0c\u5728 Raspberry \u7684\u542f\u52a8\u76d8\u9a71\u52a8\u5668\u4e0a\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ',(0,s.jsx)(e.strong,{children:"ssh"}),"\uff08\u6ca1\u6709\u6269\u5c55\u540d\uff0c\u4f8b\u5982\u7528 ",(0,s.jsx)(e.code,{children:"touch ssh"})," \u521b\u5efa\uff09\u7684\u65b0\u7a7a\u6587\u4ef6\u3002\u8fd9\u5c06\u786e\u4fdd SSH \u5b88\u62a4\u7a0b\u5e8f\u5728\u6811\u8393\u6d3e\u542f\u52a8\u540e\u542f\u7528\uff0c\u4ece\u800c\u53ef\u4ee5\u901a\u8fc7\u7f51\u7edc\u767b\u5f55\u3002"]}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsxs)(e.em,{children:[(0,s.jsx)(e.strong,{children:"\u4ec5\u9488\u5bf9 Cm4"})," \u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\u5230 ",(0,s.jsx)(e.code,{children:"/boot/config.txt"})," \u4ee5\u542f\u7528 USB 2.0 \u7aef\u53e3"]})}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"dtoverlay=dwc2,dr_mode=host\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u542f\u52a8 Raspberry \u5e76\u767b\u5f55\u3002\n",(0,s.jsx)(e.strong,{children:"Raspberry Pi 4 b"}),"\uff1a\u5c06 SD \u5361\u63d2\u5165 Raspberry \u5e76\u8fde\u63a5\u7535\u6e90\n",(0,s.jsx)(e.strong,{children:"CM 4"}),"\uff1a\u5728 CM4 IO Board \u4e0a\u62d4\u6389\u7535\u6e90\uff0c\u79fb\u9664 J2 \u8df3\u7ebf\uff0c\u7136\u540e\u518d\u6b21\u8fde\u63a5\u7535\u6e90"]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"14-\u5b89\u88c5\u7f3a\u5931\u7684\u5e93",children:"1.4 \u5b89\u88c5\u7f3a\u5931\u7684\u5e93"}),"\n",(0,s.jsx)(e.p,{children:"\u5728 Raspbian Lite \u4e0a\u8fd0\u884c Avalonia \u5e94\u7528\u6240\u9700\u7684\u4e00\u4e9b\u5e93\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sudo apt update\nsudo apt upgrade\nsudo reboot\nsudo apt-get install libgbm1 libgl1-mesa-dri libegl1-mesa libinput10\n"})}),"\n",(0,s.jsx)(e.h4,{id:"15-\u9a8c\u8bc1-drm\u53ef\u9009",children:"1.5 \u9a8c\u8bc1 DRM\uff08\u53ef\u9009\uff09"}),"\n",(0,s.jsxs)(e.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u7b80\u5355\u4f46\u5b9e\u7528\u7684\u5de5\u5177 ",(0,s.jsx)(e.a,{href:"https://gitlab.freedesktop.org/mesa/kmscube",children:"kmscube"})," \u6765\u6d4b\u8bd5\u60a8\u7684\u5b89\u88c5\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sudo apt-get install kmscube\nsudo kmscube\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u73b0\u5728\u60a8\u5e94\u8be5\u5728\u6811\u8393\u6d3e\u5c4f\u5e55\u4e0a\u770b\u5230\u65cb\u8f6c\u7684\u7acb\u65b9\u4f53\uff1a"}),"\n",(0,s.jsx)("img",{src:r,alt:""}),"\n",(0,s.jsx)(e.h3,{id:"\u6b65\u9aa4-2---\u51c6\u5907-avalonia-\u5e94\u7528",children:"\u6b65\u9aa4 2 - \u51c6\u5907 Avalonia \u5e94\u7528"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"2.1 \u521b\u5efa\u65b0\u7684 Avalonia \u5e94\u7528\uff08Core \u6216 MVVM App\uff09"}),"\n\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u79f0\u5176\u4e3a ",(0,s.jsx)(e.em,{children:"AvaloniaRaspbianLiteDrm"}),"\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"2.2 \u6dfb\u52a0\u5305"})," ",(0,s.jsx)(e.a,{href:"https://www.nuget.org/packages/Avalonia.LinuxFramebuffer",children:(0,s.jsx)(e.strong,{children:"Avalonia.LinuxFrameBuffer"})})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"dotnet add package Avalonia.LinuxFramebuffer\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"2.3 \u521b\u5efa MainView"}),"\n\u5f53\u6211\u4eec\u901a\u8fc7 FrameBuffer \u5de5\u4f5c\u65f6\uff0c\u6ca1\u6709\u7a97\u53e3\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u5355\u72ec\u7684\u89c6\u56fe\uff08UserControl\uff09\uff0c\u5b83\u5c06\u662f\u6211\u4eec\u7684\u9876\u7ea7\u63a7\u4ef6\u3002\u8be5\u89c6\u56fe\u662f\u666e\u901a\u7a97\u53e3\u7684\u5bf9\u5e94\u7269\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"MainView"})," \u5c06\u662f\u6211\u4eec\u5f00\u53d1 UI \u7684\u5e94\u7528\u57fa\u7840\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-markup",children:'<UserControl xmlns="https://github.com/avaloniaui"\n             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n             xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n             mc:Ignorable="d"\n             d:DesignWidth="800"\n             d:DesignHeight="450"\n             x:Class="AvaloniaRaspbianLiteDrm.MainView">\n    <StackPanel HorizontalAlignment="Center"\n                VerticalAlignment="Center"\n                Margin="30"\n                Spacing="30">\n        <TextBlock FontSize="25">\n            Welcome to Avalonia! The best XAML framework ever \u2665\n        </TextBlock>\n        <Slider />\n    </StackPanel>\n</UserControl>\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u73b0\u5728\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,s.jsx)(e.code,{children:"MainSingleView"})," \u7684\u65b0 ",(0,s.jsx)(e.code,{children:"UserControl"}),"\uff0c\u5e76\u6258\u7ba1 ",(0,s.jsx)(e.code,{children:"MainView"}),"\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-markup",children:'<UserControl xmlns="https://github.com/avaloniaui"\n             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n             xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n             xmlns:avaloniaRaspbianLiteDrm="clr-namespace:AvaloniaRaspbianLiteDrm"\n             mc:Ignorable="d"\n             d:DesignWidth="800"\n             d:DesignHeight="450"\n             x:Class="AvaloniaRaspbianLiteDrm.MainSingleView">\n    <avaloniaRaspbianLiteDrm:MainView />\n</UserControl>\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u8fd8\u8981\u66f4\u6539 ",(0,s.jsx)(e.code,{children:"MainWindow.axaml"})," \u4ee5\u5728\u5176\u4e2d\u6258\u7ba1 ",(0,s.jsx)(e.code,{children:"MainView"}),"\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-markup",children:'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        xmlns:avaloniaRaspbianLiteDrm="clr-namespace:AvaloniaRaspbianLiteDrm"\n        mc:Ignorable="d"\n        d:DesignWidth="800"\n        d:DesignHeight="450"\n        x:Class="AvaloniaRaspbianLiteDrm.MainWindow"\n        Title="AvaloniaRaspbianLiteDrm">\n    <avaloniaRaspbianLiteDrm:MainView />\n</Window>\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.em,{children:["\u6b63\u5982\u60a8\u6240\u770b\u5230\u7684\uff0c",(0,s.jsx)(e.code,{children:"MainView"})," \u5728 ",(0,s.jsx)(e.code,{children:"MainSingleView"})," \u548c ",(0,s.jsx)(e.code,{children:"MainWindow"})," \u4e2d\u90fd\u88ab\u6258\u7ba1\u3002\u8fd9\u4f7f\u5f97\u5f00\u53d1\u65f6\u5728\u684c\u9762\u548c\u6811\u8393\u6d3e\u4e0a\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u53d8\u5f97\u66f4\u52a0\u5bb9\u6613\u3002"]})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"2.4 \u51c6\u5907 Program.cs"}),"\n\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u9700\u8981\u51c6\u5907 ",(0,s.jsx)(e.code,{children:"Program.cs"})," \u4ee5\u542f\u7528DRM\u7684\u4f7f\u7528\u3002\n\u5c06 Main \u65b9\u6cd5\u66f4\u6539\u4e3a\u4ee5\u4e0b\u5185\u5bb9\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-csharp",children:'public static int Main(string[] args)\n{\n    var builder = BuildAvaloniaApp();\n    if (args.Contains("--drm"))\n    {\n        SilenceConsole();\n        return builder.StartLinuxDrm(args);\n    }\n\n    return builder.StartWithClassicDesktopLifetime(args);\n}\n\nprivate static void SilenceConsole()\n{\n    new Thread(() =>\n        {\n            Console.CursorVisible = false;\n            while (true)\n                Console.ReadKey(true);\n        })\n        { IsBackground = true }.Start();\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.em,{children:[(0,s.jsx)(e.code,{children:"SilenceConsole()"}),"\u6355\u83b7\u63a7\u5236\u53f0\u8f93\u5165\u5e76\u9690\u85cf\u5b83\u3002\u5426\u5219\uff0c\u60a8\u5c06\u5728\u5c4f\u5e55\u4e0a\u770b\u5230\u63a7\u5236\u53f0\u5149\u6807\u95ea\u70c1\u3002"]})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"2.5 \u51c6\u5907 App.axaml.cs"}),"\n\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u9700\u8981\u4e3aDRM\u4f7f\u7528\u8bbe\u7f6e ",(0,s.jsx)(e.code,{children:"ISingleViewApplicationLifetime"})," \u7684MainView\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5728 ",(0,s.jsx)(e.code,{children:"App.axaml.cs"})," \u4e2d\u66f4\u6539 ",(0,s.jsx)(e.code,{children:"OnFrameworkInitializationCompleted()"}),"\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-csharp",children:"public override void OnFrameworkInitializationCompleted()\n{\n    if (ApplicationLifetime is IClassicDesktopStyleApplicationLifetime desktop)\n        desktop.MainWindow = new MainWindow();\n    else if (ApplicationLifetime is ISingleViewApplicationLifetime singleView)\n        singleView.MainView = new MainSingleView();\n\n    base.OnFrameworkInitializationCompleted();\n}\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"2.6 \u5728\u684c\u9762\u4e0a\u8fd0\u884c\u548c\u6d4b\u8bd5"}),"\n\u73b0\u5728\uff0c\u60a8\u53ef\u4ee5\u50cf\u5f80\u5e38\u4e00\u6837\u5728\u684c\u9762\u4e0a\u8fd0\u884c/\u8c03\u8bd5\u5e94\u7528\u7a0b\u5e8f\u3002\n\u542f\u52a8\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u60a8\u5e94\u8be5\u4f1a\u770b\u5230\u8fd9\u6837\u7684\u754c\u9762\uff1a"]}),"\n",(0,s.jsx)("img",{src:l,alt:""}),"\n",(0,s.jsx)(e.h3,{id:"\u6b65\u9aa43---\u90e8\u7f72\u5e76\u5728\u6811\u8393\u6d3e\u4e0a\u8fd0\u884c",children:"\u6b65\u9aa43 - \u90e8\u7f72\u5e76\u5728\u6811\u8393\u6d3e\u4e0a\u8fd0\u884c"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"3.1 \u53d1\u5e03\u5e94\u7528\u7a0b\u5e8f\u53d1\u5e03\u5e94\u7528\u7a0b\u5e8f"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"dotnet publish -c Release -o publish -r linux-arm -p:PublishReadyToRun=true -p:PublishSingleFile=true -p:PublishTrimmed=true --self-contained true -p:IncludeNativeLibrariesForSelfExtract=true\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"3.2 \u5c06\u5e94\u7528\u7a0b\u5e8f\u590d\u5236\u5230\u6811\u8393\u6d3e"}),"\n\u5c06\u9879\u76ee\u7684 ",(0,s.jsx)(e.code,{children:"/publish"})," \u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u590d\u5236\u5230\u6811\u8393\u6d3e\u3002\n\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"scp <\u6e90> <\u76ee\u6807>"})," \u6216\u4f7f\u7528 ",(0,s.jsx)(e.a,{href:"https://cyberduck.io",children:"CyberDuck"})," \u6216\u901a\u8fc7USB\u8bbe\u5907\u5b8c\u6210\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"3.3 \u5728\u6811\u8393\u6d3e\u4e0a\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f"}),"\n\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u66f4\u6539\u6743\u9650\u4e3a\u53ef\u6267\u884c\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sudo chmod +x /path/to/app/AvaloniaRaspbianLiteDrm\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u73b0\u5728\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sudo ./path/to/app/AvaloniaRaspbianLiteDrm --drm\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u60a8\u5e94\u8be5\u5728\u6811\u8393\u6d3e\u4e0a\u770b\u5230\u5e94\u7528\u7a0b\u5e8f\u6b63\u5728\u8fd0\u884c\uff1a"}),"\n",(0,s.jsx)("img",{src:t,alt:""}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u60a8\u5b89\u88c5\u4e86\u89e6\u6478\u663e\u793a\u5668\uff0c\u8bf7\u5c1d\u8bd5\u6ed1\u52a8\u6ed1\u52a8\u6761\u63a7\u4ef6 :)"})]})}function x(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(m,{...n})}):m(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>t,a:()=>l});var s=i(67294);const a={},r=s.createContext(a);function l(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);