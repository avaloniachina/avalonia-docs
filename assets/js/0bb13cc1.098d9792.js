"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[40298],{3905:(A,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>v});var n=t(67294);function r(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function a(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function s(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function o(A,e){if(null==A)return{};var t,n,r=function(A,e){if(null==A)return{};var t,n,r={},a=Object.keys(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}var i=n.createContext({}),l=function(A){var e=n.useContext(i),t=e;return A&&(t="function"==typeof A?A(e):s(s({},e),A)),t},p=function(A){var e=l(A.components);return n.createElement(i.Provider,{value:e},A.children)},c="mdxType",d={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(A,e){var t=A.components,r=A.mdxType,a=A.originalType,i=A.parentName,p=o(A,["components","mdxType","originalType","parentName"]),c=l(t),m=r,v=c["".concat(i,".").concat(m)]||c[m]||d[m]||a;return t?n.createElement(v,s(s({ref:e},p),{},{components:t})):n.createElement(v,s({ref:e},p))}));function v(A,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var a=t.length,s=new Array(a);s[0]=m;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=A,o[c]="string"==typeof A?A:r,s[1]=o;for(var l=2;l<a;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},38419:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>v,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(87462),r=(t(67294),t(3905));const a="data:image/png;base64,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5aVZBPaOwa0+s9LW1pZKWyWpJV2d1dSqA2+iqtVq2W/ffbf20AAAgIJ1/CFepK2tklot6dy4MU899WzWrF2bJ5/8XTZs2JD2tva0tW8qq2q1mrZKW/bee+/s/urd/xBDAwAACvUHiZVk05TOyJEjM3LXkRm769g/1MsCAADbqK2+DAwAAGBziBUAAKBIYgUAACiSWAEAAIokVgAAgCKJFQAAoEhiBQAAKNIWfc/K008/PVzjANiqRo8e/VIPAQAYIjMrAABAkcQKAABQJLECAAAUSawAAABFEisAAECRxAoAAFAksQIAABRJrAAAAEUSKwAAQJHECgAAUCSxAgAAFEmsAAAARRIrAABAkcQKAABQJLECAAAUSawAAABFEisAAECRxAoAAFAksQIAABRJrAAAAEUSKwAAQJHECgAAUCSxAgAAFEmsAAAARRIrAABAkcQKAABQJLECAAAUSawAAABFEisAAECRxAoAAFAksQIAABRJrAAAAEUSKwAAQJHECgAAUCSxAgAAFEmsAAAARRIrAABAkcQKAABQJLECAAAUSawAAABFEisAAECRxAoAAFAksQIAABRJrAAAAEUSKwAAQJHECgAAUCSxAgAAFEmsAAAARRIrAABAkcQKAABQJLECAAAUSawAAABFEisAAECRxAoAAFAksQIAABRJrAAAAEUSKwAAQJHECgAAUCSxAgAAFEmsAAAARRIrAABAkcQKAABQJLECAAAUSawAAABFEisAAECRxAoAAFAksQIAABRJrAAAAEUSKwAAQJHECgAAUCSxAgAAFEmsAAAARRIrAABAkcQKAABQJLECAAAUSawAAABFEisAAECRxAoAAFAksQIAABRJrAAAAEUSKwAAQJHECgAAUCSxAgAAFEmsAAAARRIrAABAkcQKAABQJLECAAAUSawAAABFEisAAECRxAoAAFAksQIAABRJrAAAAEUSKwAAQJHECgAAUCSxAgAAFEmsAAAARRIrAABAkcQKAABQJLECAAAUSawAAABFEisAAECRxAoAAFAksQIAABRJrAAAAEUSKwAAQJHECgAAUCSxAgAAFEmsAAAARRIrAABAkcQKAABQJLECAAAUSawAAABFEisAAECRxAoAAFAksQIAABRJrAAAAEUSKwAAQJHECgAAUCSxAgAAFEmsAAAARRIrAABAkcQKAABQJLECAAAUSawAAABFEisAAECRxAoAAFAksQIAABRJrAAAAEUSKwAAQJHECgAAUCSxAgAAFEmsAAAARRIrAABAkcQKAABQJLECAAAUSawAAABFEisAAECRxAoAAFAksQIAABRJrAAAAEUSKwAAQJHECgAAUCSxAgAAFEmsAAAARRIrAABAkcQKAABQJLECAAAUSawAAABFEisAAECRxAoAAFAksQIAABRJrAAAAEUSKwAAQJHECgAAUCSxAgAAFEmsAAAARRIrAABAkcQKAABQJLECAAAUSawAAABFEisAAECRxAoAAFAksQIAABRJrAAAAEUSKwAAQJHECgAAUCSxAgAAFEmsAAAARRIrAABAkcQKAABQJLECAAAUSawAAABFEisAAECRxAoAAFAksQIAABRJrDAo69evz7x58zJmzJiml2nTpuWSSy7Jww8//FIPFYB+/Pa3v81VV12V6dOnZ8yYMalUKjn88MNz9tlnZ/ny5alWqy/1EAG6iRWGZOedd85RRx2VY489tvtyzDHHZN26dbnssssyc+bM/MM//ENqtdpLPVQAGnR2dubaa6/NpEmTcsYZZ+See+7J5MmTM2PGjDz33HP54he/mIMPPjjnnntu1q1b91IPN0ly3XXXpVKp5Lrrrnuph5Jk0z/cffCDH8xhhx2WlStXvtTDgZeFjpd6AGxbXvOa1+TKK6/MhAkTetxerVbzve99Lx/5yEcyf/78jBs3LgcddNBLNEoAGnV1dWXx4sU599xzM27cuFx//fU59thj09Gx6WNArVbLAw88kPnz5+cLX/hCnnvuuVx22WXZaaedXuKRAy93ZlYYFm1tbZkxY0bOOeecrFy5MrfeeqvZFYBCLF26NJ///Ofzute9Ltdff31mzJjRHSpJUqlUMmnSpCxevDinn356rr766nzjG994CUcMsIlYYdhUKpVMnjw5BxxwQH75y1/m+eef73H/hg0b8p3vfCezZ8/OfvvtlzFjxmTWrFm58sors3bt2j7HW7p0acaMGZPPf/7z2bBhQ2688cYce+yxGTNmTI444oh88YtfbPq83q/3rne9K3vttVf22muvnHzyybn55puzYcOGYX//ACXasGFDbrjhhqxbty4XX3xxJk2a1PKxO+20U04//fRMmjQp//iP/5gnn3yyz2MefvjhXHLJJTn88MNTqVSy//775/3vf3/uu+++pv9ItWTJklQqlcyfPz8bNmzI9ddfnylTpqRSqeTAAw/M5z73uaxZs6bHc+rLv0455ZQkySmnnJJKpZJKpZIlS5b0eY01a9bkc5/7XI8xffjDH245pvnz53cfa82aNbnwwguz//77p1KpZPr06fnWt77V4++J+vKvUaNGZdGiRbnvvvty4IEHplKp5Ljjjsvjjz/e+j8AsEXECsNqhx12yKhRo/KrX/0q69ev7779t7/9bebOnZs///M/z49+9KNMmjQpxx57bB577LFccMEFOfnkk/Pggw82PebGjRtz9dVX5+yzz86oUaPylre8JWvXrs1FF12UOXPm5Je//GWf5zS+3sqVK3PkkUfm8MMPz5IlS/Ke97wnZ5xxRr+hA7C9+MUvfpF/+7d/y/Tp03PkkUcO+Pjx48fnK1/5Ss4888y0tfX8mPCDH/wgM2bMyCc+8Yk899xzmTFjRvbcc898+ctfzrRp0/KFL3whnZ2dTY/7wgsvZMGCBfnQhz6UUaNG5ZhjjsmaNWvy8Y9/PLNnz85DDz3U/didd945M2bMyBve8IYkyRve8IbMmDEjM2bMyI477thnTNOmTcvHP/7xJOke05VXXplp06blb/7mb1qO6ZFHHskHPvCB3HjjjZk4cWKmTJmSf/7nf86JJ56Yiy66qDtYKpVKdt9990yfPj377bdfRo8enWnTpmXGjBnZZ599+vw5AcPHnhWG1bPPPps1a9bkyCOPzCte8Yokm/5Vb+HChfn2t7+d9773vfnkJz+Z3Xbbrfu+q666Kp/+9Kdz/fXX57zzzkt7e3uPY37729/O0Ucfnbvvvrv7eWvXrs3FF1+cr33ta/nOd76Tv/qrv0qlUkmy6V/ALrvssnzve9/LX//1X+ekk07qHstzzz2XhQsX5rOf/Wz23nvvnH/++T2WQgBsbx5++OHcd999OeGEE7LLLrsM+PgddtghU6ZM6XP7ihUr8rGPfSzPP/98vvvd72bmzJndH9IffPDBfPjDH878+fOzzz775M/+7M/6PP/v//7v87a3vS0PPPBAdt999ySbZkQuuOCCLF68ON/61rdy1llnpVKp5J3vfGfe+c535rrrrsspp5ySs88+O+95z3v6HHPVqlX52Mc+ll122SV33XVX3vjGN/YZ0/nnn5/Xvva1mTFjRp/nX3755TnttNPyzW9+MzvssENqtVqWLVuWM844I9dee23++I//OG984xuz4447Zv78+Vm/fn3OOuusLF26NIsXL87EiRMH/PMEtox/CmDYdHZ25vbbb89vfvObHH744d2BMGLEiPzFX/xFFixYkAsvvLA7OJJNfymefPLJmTZtWu699948/fTTfY6755575uyzz+7xvN122y2nnnpqDjjggPzkJz/p8bwf//jH+bu/+7vMmzcvp5xySvc4kmTUqFH50Ic+lHe/+925+eabs2rVqq3xRwFQjN/+9rdJkgkTJnT/o85QdXV15frrr8+Pf/zjXHLJJZk1a1aP2YRx48bl8ssvz7hx4/LlL385jz76aJ9j7LXXXjn//PO7QyVJdt999/zlX/5lJkyYkLvuuitPPfXUkMb09a9/PQ8//HAuvfTSTJkypc+YLr300uy99965/vrr8+yzz/Y5xtvf/vbMmTMnO+ywQ5LfL2eeM2dOHn300aZLzoA/LLHCFqvVannsscdy5ZVXZsGCBXnLW96S6dOnd9/f1taWiRMn5n3ve19e/epX93n+iBEj0tHRkc7Ozqbn9z/44IN7hErdPvvsk/333z9PP/109xR/rVbLXXfdlT322COzZs1qOmsyevToHH300Vm5cmV+/vOfb8lbB3hZeOyxx/LDH/4wRx99dI499tim0fPa1742s2bNyve///2m/xB02GGH9QiVun333Tfjxo3r8f/ywVi3bl3uuuuufpe3jR8/PlOnTs3Pfvazpkt/3/SmN/X5e6JSqeSQQw5JkjzzzDODHg+wdVj/wpD853/+Z4444oiW90+ZMiWf+cxnstdeezW9f/369Vm1alUeffTRrFy5MitWrMjy5ctz33335W1ve1vT5+yyyy4ZOXLkoMb3/PPP57HHHstjjz2Wj370o33WNtfVN0P6iwhgYE8//XSeeOKJTJkyJWPHjm36mPb29rz+9a9PkqZ7CceOHTvo/5cPxrp167JmzZqsWrUq73rXu5ruG6lWq1m1alV22WWXPid9SZJXvepVwzYeYOsQKwzJzjvvnEMOOaRPBBx88ME55phj8uY3v7nHsqu6X/3qV7n00ktz00039QiECRMm5KCDDmr6l8jmWL9+fR566KE888wzufPOOwd8fLO/UAG2J/UZ7VWrVqVWq23WUrC1a9fmvvvuy5/8yZ80/X98b61OmDKc6mNK0mNzfjPr1q3LE088sdXHBAw/scKQtPpSyP6sXbs25557bu64446cfPLJOfHEEzNhwoS88pWvTEdHR9atW5dTTz11WMb3ile8Ivvtt18OPvjgfO1rXxvSOAG2R/vuu28OPfTQ/PSnP83vfve7ljMjdRs2bMg999yTzs7OHHrooRk9enR22223HHroofn1r3+d9evXDxgs48aNG8630FR9TFOmTMkVV1wxqIgCtj32rLDVrVy5MjfffHPe//7353Of+1ymTJmSV73qVVvlLFwjR47M2LFj8/Of/9x57wGS7L///nnrW9+a73//+/n3f//3AR+/cuXKvO9978vChQu79xGOHj06Y8eOzcqVK1vOUHR1deW//uu/kmzaU7i11cf00EMPNd08D2wfxApbXf1Lxfbff/+mgbJixYruv+C2VHt7e9761rcmScsvf+zq6so3v/nN3HrrrUM68wzAtmiHHXbI7Nmzs+uuu+aTn/xkVqxY0fKxzz77bBYtWpQVK1bkhBNOyCtf+cokyR577JFp06blX//1X/Mv//IvTb9o8Wc/+1luvfXWTJ8+fdhntZvtL6yPacmSJS3P2rVmzZpcddVVWbp06ZA27w/kueee8+XC8AciVtjqXvOa12TixIm5+eabe6xjrtVqueeee/LpT386v/nNb4bt9d74xjfmxBNPzFe/+tUsWLCgx2mNN2zYkBtvvDEXX3xxrr76ahvsgZeFo446Kp/4xCdy//33593vfnduv/32Hh/eq9Vqli9fng984AO5+uqrc/rpp+eEE07ovr+9vT3vfve786Y3vSkXXnhhbr311h5nb3zwwQdzzjnn5MEHH8ypp56aPffcc1jGfcABB2T06NG5++67+8ye1Mc0bty4nHvuubnlllt6vKc1a9bksssuyxlnnJGbb755WMZTX2q8atWq/PSnP20abcDwsmeFrW7ChAk5+eST86lPfSqHHXZYjjzyyIwePTqPP/54/vu//zsXXHDBsK41HjVqVM4777w8+eST+cxnPpOrr746Bx98cNrb27N69er88pe/zIQJE/Lxj3+85VnLALYnlUolc+bMSUdHRz7ykY/kj/7oj7Lrrrvm0EMPzYgRI/LQQw9l5cqVGT16dM4///ycd9552WmnnXocY9KkSbnssssyd+7cvOMd78jEiROz33775amnnsrSpUszevTofOITn8iJJ544bOOeOHFijjvuuCxevDjLli3LXnvtlUsvvbT71MIHHnhgFixYkA9+8IM9xrR+/fru7+760z/903z4wx8etqXHb3/727No0aKcfvrpueaaa3LIIYfk0ksvzZgxY4bl+EBPZlbY6jo6OnLmmWfmu9/9bt7xjndkxYoV+clPfpJ99tkn3/jGN3LSSSc1PeXklthrr73ypS99Kddee22OOOKI/Md//EfuuOOO7LrrrrnooovyT//0T5k6deqwviZAyTo6OjJnzpysWLEiV155Zd7whjdk2bJluf322zNq1KhceOGF3V/6OHr06KbHeMtb3pLbb7898+fPz6hRo3L77bfn0Ucfzamnnpof/vCH+ehHPzqs+xHHjh2bL33pS7nggguybt26/OAHP8hPf/rT7vsrlUqOPvro3HHHHfnsZz/bPaZ77703U6dOzY033pivf/3r2WOPPYZtTJMnT85NN92U4447Lvfee2+WLl2aRx55ZNiOD/RU6ezsrNVqtdRqtVSr1T6XWq2Wrq6udHZ2ZuPGjXnhhRfy/PPPZ/Hixbn44otf6vEDDEqrD18AwNCdddZZOemkk7Ljjjtm5MiRGTlyZEaMGJH29vYel7a2tpaXSqXS45Kkz+nVzawAAABFEisAAECRxAoAAFAksQIAABRJrAAAAEUSKwAAQJHECgAAUCSxAgAAFEmsAAAARRIrAABAkcQKAABQJLECAAAUSawAAABFEisAAECRxAoAAFAksQIAABRJrAAAAEUSKwAAQJHECgAAUCSxAgAAFEmsAAAARRIrAABAkcQKAABQJLECAAAUSawAAABFEisAAECRxAoAAFAksQIAABRJrAAAAEUSKwAAQJHECgAAUCSxAgAAFEmsAAAARRIrAABAkcQKAABQJLECAAAUSawAAABFEisAAECRxAoAAFAksQIAABRJrAAAAEUSKwAAQJHECgAAUCSxAgAAFEmsAAAARRIrAABAkcQKAABQJLECAAAUSawAAABFEisAAECRxAoAAFAksQIAABRJrAAAAEUSKwAAQJHECgAAUCSxAgAAFEmsAAAARRIrAABAkcQKAABQJLECAAAUSawAAABFEisAAECRxAoAAFAksQIAABRJrAAAAEUSKwAAQJHECgAAUCSxAgAAFEmsAAAARRIrAABAkcQKAABQJLECAAAUSawAAABFEisAAECRxAoAAFAksQIA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";var s=t(68107);const o={description:"REFERENCE - Built-in Controls"},i="Split View",l={unversionedId:"reference/controls/splitview",id:"reference/controls/splitview",title:"Split View",description:"REFERENCE - Built-in Controls",source:"@site/docs/reference/controls/splitview.md",sourceDirName:"reference/controls",slug:"/reference/controls/splitview",permalink:"/avalonia-docs/docs/next/reference/controls/splitview",draft:!1,editUrl:"https://github.com/AvaloniaUI/avalonia-docs/tree/main/docs/reference/controls/splitview.md",tags:[],version:"current",frontMatter:{description:"REFERENCE - Built-in Controls"},sidebar:"documentationSidebar",previous:{title:"Slider",permalink:"/avalonia-docs/docs/next/reference/controls/slider"},next:{title:"Stack Panel",permalink:"/avalonia-docs/docs/next/reference/controls/stackpanel"}},p={},c=[{value:"Useful Properties ",id:"useful-properties-",level:2},{value:"Example",id:"example",level:2},{value:"Compact Display Mode",id:"compact-display-mode",level:2},{value:"More Information",id:"more-information",level:2}],d={toc:c},m="wrapper";function v(A){let{components:e,...t}=A;return(0,r.kt)(m,(0,n.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"split-view"},"Split View"),(0,r.kt)("p",null,"A split view presents a container with two parts: the main content zone and a side pane. The main content zone is always visible. The pane can be expanded and collapsed. The collapsed pane can be completely hidden, or left slightly open - with enough space to host some icon buttons for example. "," "),(0,r.kt)("h2",{id:"useful-properties-"},"Useful Properties"," "),(0,r.kt)("p",null,"You will probably use these properties most often:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PanePlacement")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the position of the pane (left or right).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IsPaneOpen")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean, default is true. Is the pane in its open state?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DisplayMode")),(0,r.kt)("td",{parentName:"tr",align:null},"Controls how the pane is drawn in its open and closed states. See below.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OpenPaneLength")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the width of the pane when it is open.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CompactPaneLength")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the width of the pane when it is closed and the display mode is compact.")))),(0,r.kt)("p",null,"The display mode property controls how the pane is drawn in its open and closed states. There are four options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Overlay")),(0,r.kt)("p",{parentName:"li"},"The pane is completely hidden until opened. When open, the pane overlays the content area.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Inline")),(0,r.kt)("p",{parentName:"li"},"The pane is always visible, is a fixed width, and does not overlay the content area. The pane and content areas divide the available screen real estate, but if the container changes width, it is the content zone that resizes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Compact Overlay")),(0,r.kt)("p",{parentName:"li"},"A narrow portion of the pane is always visible in this mode, which is just wide enough to show icons. The default closed pane width is 48px, which can be modified with the ",(0,r.kt)("inlineCode",{parentName:"p"},"CompactPaneLength"),"property value. If the pane is opened, it will overlay the content area.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Compact Inline")),(0,r.kt)("p",{parentName:"li"},"A narrow portion of the pane is always visible in this mode, which is just wide enough to show icons. The default closed pane width is 48px, which can be modified with ",(0,r.kt)("inlineCode",{parentName:"p"},"CompactPaneLength")," property value. If the pane is opened, it will reduce the size of the content zone."))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'<SplitView IsPaneOpen="True"\n           DisplayMode="Inline"\n           OpenPaneLength="300">\n    <SplitView.Pane>\n        <TextBlock Text="Pane"\n                   FontSize="24"\n                   VerticalAlignment="Center"\n                   HorizontalAlignment="Center"/>\n    </SplitView.Pane>\n\n    <Grid>\n        <TextBlock Text="Content"\n                   FontSize="24"\n                   VerticalAlignment="Center"\n                   HorizontalAlignment="Center"/>\n    </Grid>\n</SplitView>\n')),(0,r.kt)("p",null,"The control looks like this, running on Windows:"),(0,r.kt)("img",{src:a,alt:""}),(0,r.kt)("h2",{id:"compact-display-mode"},"Compact Display Mode"),(0,r.kt)("p",null,"You can use the MVVM pattern with the split view control and one of the compact display mode settings to implement a 'tool pane' style UI. There is enough room on the pane when it is closed to display an icon button that opens the pane."),(0,r.kt)("img",{src:s.Z,alt:""}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To learn how to use the split view control in this way, see the guide ",(0,r.kt)("a",{parentName:"p",href:"/avalonia-docs/docs/next/guides/development-guides/how-to-show-and-hide-a-split-view-pane-with-mvvm"},"here"),".")),(0,r.kt)("h2",{id:"more-information"},"More Information"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For the complete API documentation about this control, see ",(0,r.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Controls/SplitView/"},"here"),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"View the source code on ",(0,r.kt)("em",{parentName:"p"},"GitHub")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Controls/SplitView/SplitView.cs"},(0,r.kt)("inlineCode",{parentName:"a"},"SplitView.cs")))))}v.isMDXComponent=!0},68107:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/splitview2-5e5818f286f438697c70c43188b77d19.gif"}}]);