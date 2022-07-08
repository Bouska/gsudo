"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[360],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:7,hide_title:!0,title:"Troubleshooting"},i=void 0,l={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"Troubleshooting",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/gsudo/docs/troubleshooting",draft:!1,editUrl:"https://github.com/gerardog/gsudo/blob/docs/docs/docs/troubleshooting.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,hide_title:!0,title:"Troubleshooting"},sidebar:"tutorialSidebar",previous:{title:"Scripts Self-Elevation",permalink:"/gsudo/docs/tips/script-self-elevation"}},s={},p=[{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Known issues",id:"known-issues",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"After installation / upgrade. Please close your consoles and open new ones."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Same with error ",(0,o.kt)("inlineCode",{parentName:"li"},"Unauthorized. (Different gsudo.exe?)"),". "))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Be sure you have ",(0,o.kt)("a",{parentName:"p",href:"install#configure-your-shell"},"configured your shell"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"gsudo --debug {command}")," to see internal debug info.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Search ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gerardog/gsudo/issues?q="},"gsudo GitHub issues")," or create a new one if you have identified a problem.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Chat on ",(0,o.kt)("a",{parentName:"p",href:"https://gitter.im/gsudo/"},"gitter"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Chat on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/dEEA3P5WqF"},"Discord")))),(0,o.kt)("h2",{id:"known-issues"},"Known issues"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Do not install PowerShell as a .Net global tool (i.e. with ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet tool install --global PowerShell"),"), because it uses a shim tool with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PowerShell/PowerShell/issues/11747"},"unfixed issues"),". Install with any ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows"},"other official method")," instead, or with ",(0,o.kt)("inlineCode",{parentName:"p"},"choco install pwsh"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"winget install Microsoft.PowerShell"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The elevated instances do not have access to the network shares connected on the non-elevated space. This is not a ",(0,o.kt)("inlineCode",{parentName:"p"},"gsudo")," issue but how Windows works. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"--copyNS")," to replicate Network Shares into the elevated session, but this is not bi-directional and it's interactive (may prompt for user/password).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"gsudo.exe")," can be placed on a network share and invoked as ",(0,o.kt)("inlineCode",{parentName:"p"},"\\\\server\\share\\gsudo {command}")," but doesn't work if your ",(0,o.kt)("strong",{parentName:"p"},"current")," folder is a network drive. For example do not map ",(0,o.kt)("inlineCode",{parentName:"p"},"\\\\server\\share\\")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Z:")," and then ",(0,o.kt)("inlineCode",{parentName:"p"},"Z:\\>gsudo do-something"),"."))))}c.isMDXComponent=!0}}]);