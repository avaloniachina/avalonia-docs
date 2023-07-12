"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[83816],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>h});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),l=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},m=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=l(a),c=r,h=u["".concat(s,".").concat(c)]||u[c]||d[c]||i;return a?t.createElement(h,o(o({ref:n},m),{},{components:a})):t.createElement(h,o({ref:n},m))}));function h(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=a[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},52450:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var t=a(87462),r=(a(67294),a(3905));const i={id:"running-on-raspbian-lite-via-drm",title:"Running your Avalonia app on a Raspberry Pi with Raspbian Lite"},o="Running your Avalonia app on a Raspberry Pi with Raspbian Lite",p={unversionedId:"guides/deep-dives/running-on-raspbian-lite-via-drm",id:"version-0.10.x/guides/deep-dives/running-on-raspbian-lite-via-drm",title:"Running your Avalonia app on a Raspberry Pi with Raspbian Lite",description:"This tutorial shows you how to run your Avalonia app on a Raspberry Pi with Raspbian Lite",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-0.10.x/guides/deep-dives/running-on-raspbian-lite-via-drm.md",sourceDirName:"guides/deep-dives",slug:"/guides/deep-dives/running-on-raspbian-lite-via-drm",permalink:"/avalonia-docs/zh-Hans/docs/guides/deep-dives/running-on-raspbian-lite-via-drm",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/versioned_docs/version-0.10.x/guides/deep-dives/running-on-raspbian-lite-via-drm.md",tags:[],version:"0.10.x",frontMatter:{id:"running-on-raspbian-lite-via-drm",title:"Running your Avalonia app on a Raspberry Pi with Raspbian Lite"},sidebar:"documentationSidebar",previous:{title:"Running your app on a Raspberry Pi",permalink:"/avalonia-docs/zh-Hans/docs/guides/deep-dives/running-your-app-on-a-raspberry-pi"},next:{title:"ReactiveUI",permalink:"/avalonia-docs/zh-Hans/docs/guides/deep-dives/reactiveui/"}},s={},l=[{value:"Step 1 - Setup the Raspberry Pi",id:"step-1---setup-the-raspberry-pi",level:3},{value:"1.1 Download the Raspbian lite operation system image.",id:"11-download-the-raspbian-lite-operation-system-image",level:4},{value:"1.1 Prepare Raspberry for flashing",id:"11-prepare-raspberry-for-flashing",level:4},{value:"1.2 Flashing the operating system",id:"12-flashing-the-operating-system",level:4},{value:"1.3 Install missing libraries",id:"13-install-missing-libraries",level:4},{value:"1.4 Verify DRM (optional)",id:"14-verify-drm-optional",level:4},{value:"Step 2 - Prepare Avalonia App",id:"step-2---prepare-avalonia-app",level:3},{value:"Step 3 - Deploy and run on Raspberry",id:"step-3---deploy-and-run-on-raspberry",level:3}],m={toc:l},u="wrapper";function d(e){let{components:n,...a}=e;return(0,r.kt)(u,(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-your-avalonia-app-on-a-raspberry-pi-with-raspbian-lite"},"Running your Avalonia app on a Raspberry Pi with Raspbian Lite"),(0,r.kt)("p",null,"This tutorial shows you how to run your Avalonia app on a Raspberry Pi with Raspbian Lite\nvia ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Direct_Rendering_Manager"},"DRM"),"."),(0,r.kt)("h3",{id:"step-1---setup-the-raspberry-pi"},"Step 1 - Setup the Raspberry Pi"),(0,r.kt)("p",null,"First step is to setup your Raspberry Pi."),(0,r.kt)("h4",{id:"11-download-the-raspbian-lite-operation-system-image"},"1.1 Download the Raspbian lite operation system image."),(0,r.kt)("p",null,"You can download the Raspbian lite operating system image from the official Raspberry Pi website.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.raspberrypi.com/software/operating-systems/"},"Link to Raspberry Pi Operating system images")),(0,r.kt)("h4",{id:"11-prepare-raspberry-for-flashing"},"1.1 Prepare Raspberry for flashing"),(0,r.kt)("p",null,"The installation of Raspberry Lite is a bit different depending on the model."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.raspberrypi.com/products/raspberry-pi-4-model-b/"},"Raspberry Pi 4 b")),(0,r.kt)("br",{parentName:"p"}),"\n","For the Pi 4 b you need a SD Card on which the operating system will be installed.",(0,r.kt)("br",{parentName:"p"}),"\n","Insert the SD card into your computer.",(0,r.kt)("br",{parentName:"p"}),"\n","You can now go directly to step 1.2."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.raspberrypi.com/products/compute-module-4/?variant=raspberry-pi-cm4001000"},"Raspberry CM4")),(0,r.kt)("br",{parentName:"p"}),"\n","Since the CM4 is designed for embedded applications you still need an IO board. For this there is the\nofficial ",(0,r.kt)("a",{parentName:"p",href:"https://www.raspberrypi.com/products/compute-module-4-io-board/"},"Compute Module 4 IO board")," or alternatively\nmany other boards like the ",(0,r.kt)("a",{parentName:"p",href:"https://sourcekit.cc/#/?id=sourcekit%C2%AE-pitray-mini"},"SourceKit PiTray mini"),"."),(0,r.kt)("p",null,"To prepare the EMMC memory for mounting follow\nthese ",(0,r.kt)("a",{parentName:"p",href:"https://www.raspberrypi.com/documentation/computers/compute-module.html#flashing-the-compute-module-emmc"},"steps"),"."),(0,r.kt)("h4",{id:"12-flashing-the-operating-system"},"1.2 Flashing the operating system"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://etcher.io/"},"Download")," the Etcher image writing utility and install it."),(0,r.kt)("li",{parentName:"ul"},"Open Etcher and select from your hard drive the .zip file you downloaded in step 1.1."),(0,r.kt)("li",{parentName:"ul"},"Select the mass storage (SD card or CM4 EMMC) you wish to write your image to."),(0,r.kt)("li",{parentName:"ul"},"Review your selections and click 'Flash!' to begin writing data. Once flashing is complete, create a new empty file\nnamed ",(0,r.kt)("strong",{parentName:"li"},"ssh")," (with no extension, e.q with ",(0,r.kt)("inlineCode",{parentName:"li"},"touch ssh"),") in the boot drive of the Raspberry. This will ensure that the SSH daemon is enabled\nonce the Raspberry Pi has started and you can logon over the network."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"*Only for Cm4")," add the following to ",(0,r.kt)("inlineCode",{parentName:"li"},"/boot/config.txt")," to enable the Usb 2.0 ports*")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"dtoverlay=dwc2,dr_mode=host\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start up your Raspberry and login.",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("strong",{parentName:"li"},"Raspberry Pi 4 b"),": Put the SD card into the Raspberry and plug in power supply",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("strong",{parentName:"li"},"CM 4"),": On CM4 IO Board unplug the power supply, remove J2 jumper, plug in power supply again")),(0,r.kt)("h4",{id:"13-install-missing-libraries"},"1.3 Install missing libraries"),(0,r.kt)("p",null,"Some libraries required to run a Avalonia app via DRM on raspbian lite:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt upgrade\nsudo reboot\nsudo apt-get install libgbm1 libgl1-mesa-dri libegl1-mesa libinput10\n")),(0,r.kt)("h4",{id:"14-verify-drm-optional"},"1.4 Verify DRM (optional)"),(0,r.kt)("p",null,"You can test your installation with a simple but useful tool called ",(0,r.kt)("a",{parentName:"p",href:"https://gitlab.freedesktop.org/mesa/kmscube"},"kmscube"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install kmscube\nsudo kmscube\n")),(0,r.kt)("p",null,"You should see the spinning cube on your Raspberry pi screen now:  "),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"/img/guides/deep-dives/running-on-raspbian-lite-via-drm/avalonia-raspbian-lite-drm-kmscube.gif"})),(0,r.kt)("h3",{id:"step-2---prepare-avalonia-app"},"Step 2 - Prepare Avalonia App"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.1 Create new Avalonia App (Core or MVVM App)"),(0,r.kt)("br",{parentName:"p"}),"\n","We called it ",(0,r.kt)("em",{parentName:"p"},"AvaloniaRaspbianLiteDrm")," in this tutorial."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.2 Add package ",(0,r.kt)("a",{parentName:"strong",href:"https://www.nuget.org/packages/Avalonia.LinuxFramebuffer"},"Avalonia.LinuxFrameBuffer"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add package Avalonia.LinuxFramebuffer\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.3 Create MainView"),(0,r.kt)("br",{parentName:"p"}),"\n","When we work via FrameBuffer there are no windows, so we need a separate view (UserControl) which will be our toplevel control. This view is the\ncounterpart to the normal window."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MainView")," will be our app base in which we develop our UI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'<UserControl xmlns="https://github.com/avaloniaui"\n             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n             xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n             mc:Ignorable="d"\n             d:DesignWidth="800"\n             d:DesignHeight="450"\n             x:Class="AvaloniaRaspbianLiteDrm.MainView">\n    <StackPanel HorizontalAlignment="Center"\n                VerticalAlignment="Center"\n                Margin="30"\n                Spacing="30">\n        <TextBlock FontSize="25">\n            Welcome to Avalonia! The best XAML framework ever \u2665\n        </TextBlock>\n        <Slider />\n    </StackPanel>\n</UserControl>\n')),(0,r.kt)("p",null,"Now create a new UserControl with name ",(0,r.kt)("inlineCode",{parentName:"p"},"MainSingleView")," and host the ",(0,r.kt)("inlineCode",{parentName:"p"},"MainView"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'<UserControl xmlns="https://github.com/avaloniaui"\n             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n             xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n             xmlns:avaloniaRaspbianLiteDrm="clr-namespace:AvaloniaRaspbianLiteDrm"\n             mc:Ignorable="d"\n             d:DesignWidth="800"\n             d:DesignHeight="450"\n             x:Class="AvaloniaRaspbianLiteDrm.MainSingleView">\n    <avaloniaRaspbianLiteDrm:MainView />\n</UserControl>\n')),(0,r.kt)("p",null,"Also change the ",(0,r.kt)("inlineCode",{parentName:"p"},"MainWindow.axaml")," to host the ",(0,r.kt)("inlineCode",{parentName:"p"},"MainView")," inside:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        xmlns:avaloniaRaspbianLiteDrm="clr-namespace:AvaloniaRaspbianLiteDrm"\n        mc:Ignorable="d"\n        d:DesignWidth="800"\n        d:DesignHeight="450"\n        x:Class="AvaloniaRaspbianLiteDrm.MainWindow"\n        Title="AvaloniaRaspbianLiteDrm">\n    <avaloniaRaspbianLiteDrm:MainView />\n</Window>\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"So as you see the MainView is hosted in booth ",(0,r.kt)("inlineCode",{parentName:"em"},"MainSingleView")," and ",(0,r.kt)("inlineCode",{parentName:"em"},"MainWindow"),".\nThis makes it easier for development to run the app also on desktop and on the Raspberry")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.3 Prepare Program.cs"),(0,r.kt)("br",{parentName:"p"}),"\n","Next we need to prepare the ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs")," to enable the DRM usage.",(0,r.kt)("br",{parentName:"p"}),"\n","Change the Main void to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public static int Main(string[] args)\n{\n    var builder = BuildAvaloniaApp();\n    if (args.Contains("--drm"))\n    {\n        SilenceConsole();\n        return builder.StartLinuxDrm(args);\n    }\n\n    return builder.StartWithClassicDesktopLifetime(args);\n}\n\nprivate static void SilenceConsole()\n{\n    new Thread(() =>\n        {\n            Console.CursorVisible = false;\n            while (true)\n                Console.ReadKey(true);\n        })\n        { IsBackground = true }.Start();\n}\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"SilenceConsole()")," captures the console input and hide it. Otherwise you will see the console cursor blinking on the screen.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.4 Prepare App.axaml.cs"),(0,r.kt)("br",{parentName:"p"}),"\n","Next we need to set the MainView for the ",(0,r.kt)("inlineCode",{parentName:"p"},"ISingleViewApplicationLifetime")," for the DRM usage."),(0,r.kt)("p",null,"Change the ",(0,r.kt)("inlineCode",{parentName:"p"},"OnFrameworkInitializationCompleted()")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"App.axaml.cs"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public override void OnFrameworkInitializationCompleted()\n{\n    if (ApplicationLifetime is IClassicDesktopStyleApplicationLifetime desktop)\n        desktop.MainWindow = new MainWindow();\n    else if (ApplicationLifetime is ISingleViewApplicationLifetime singleView)\n        singleView.MainView = new MainSingleView();\n\n    base.OnFrameworkInitializationCompleted();\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.5 Run and test on desktop"),(0,r.kt)("br",{parentName:"p"}),"\n","Now you can run/debug your app on desktop as usual.",(0,r.kt)("br",{parentName:"p"}),"\n","When you start your app you should see this:  "),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"/img/guides/deep-dives/running-on-raspbian-lite-via-drm/avalonia-raspbian-lite-drm-desktop.jpg"})),(0,r.kt)("h3",{id:"step-3---deploy-and-run-on-raspberry"},"Step 3 - Deploy and run on Raspberry"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.1 Publish app")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet publish -c Release -o publish -r linux-arm -p:PublishReadyToRun=true -p:PublishSingleFile=true -p:PublishTrimmed=true --self-contained true -p:IncludeNativeLibrariesForSelfExtract=true\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.2 Copy app to Raspberry"),(0,r.kt)("br",{parentName:"p"}),"\n","Copy the files from ",(0,r.kt)("inlineCode",{parentName:"p"},"/publish")," directory of your project to your Raspberry.",(0,r.kt)("br",{parentName:"p"}),"\n","You can do this via ",(0,r.kt)("inlineCode",{parentName:"p"},"scp <source> <destination>")," or use a app like ",(0,r.kt)("a",{parentName:"p",href:"https://cyberduck.io"},"CyberDuck")," or via Usb stick."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.3 Run app on Raspberry"),(0,r.kt)("br",{parentName:"p"}),"\n","First we need to change the permission to executable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chmod +x /path/to/app/AvaloniaRaspbianLiteDrm\n")),(0,r.kt)("p",null,"Now you can run the app with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ./path/to/app/AvaloniaRaspbianLiteDrm --drm\n")),(0,r.kt)("p",null,"You should see the app running on your Raspberry Pi now:  "),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"/img/guides/deep-dives/running-on-raspbian-lite-via-drm/avalonia-raspbian-lite-drm-run-on-raspberry.jpg"})),(0,r.kt)("p",null,"If you have a touch display installed, try to slide the slider control :)"))}d.isMDXComponent=!0}}]);