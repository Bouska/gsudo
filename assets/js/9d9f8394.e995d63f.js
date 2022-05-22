"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[360],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3038:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:7,hide_title:!0,title:"Troubleshooting"},s=void 0,u={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"Troubleshooting",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/gsudo/docs/troubleshooting",editUrl:"https://github.com/gerardog/gsudo/blob/docs/docs/docs/troubleshooting.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,hide_title:!0,title:"Troubleshooting"},sidebar:"tutorialSidebar",previous:{title:"How it works",permalink:"/gsudo/docs/how-it-works"}},p={},c=[{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Known issues",id:"known-issues",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After installation / upgrade. Please close your consoles and open new ones."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Same with error ",(0,i.kt)("inlineCode",{parentName:"li"},"Unauthorized. (Different gsudo.exe?)"),". "))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Be sure you have ",(0,i.kt)("a",{parentName:"p",href:"install#configure-your-shell"},"configured your shell"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"gsudo --debug {command}")," to see internal debug info.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Search ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gerardog/gsudo/issues?q="},"gsudo GitHub issues")," or create a new one if you have identified a problem.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Chat on ",(0,i.kt)("a",{parentName:"p",href:"https://gitter.im/gsudo/"},"gitter"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Chat on ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/invite/dEEA3P5WqF"},"Discord")))),(0,i.kt)("h2",{id:"known-issues"},"Known issues"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Do not install PowerShell as a .Net global tool (i.e. with ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet tool install --global PowerShell"),"), because it uses a shim tool with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/PowerShell/PowerShell/issues/11747"},"unfixed issues"),". Install with any ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows"},"other official method")," instead, or with ",(0,i.kt)("inlineCode",{parentName:"p"},"choco install pwsh"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"winget install Microsoft.PowerShell"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The elevated instances do not have access to the network shares connected on the non-elevated space. This is not a ",(0,i.kt)("inlineCode",{parentName:"p"},"gsudo")," issue but how Windows works. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"--copyNS")," to replicate Network Shares into the elevated session, but this is not bi-directional and it's interactive (may prompt for user/password).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"gsudo.exe")," can be placed on a network share and invoked as ",(0,i.kt)("inlineCode",{parentName:"p"},"\\\\server\\share\\gsudo {command}")," but doesn't work if your ",(0,i.kt)("strong",{parentName:"p"},"current")," folder is a network drive. For example do not map ",(0,i.kt)("inlineCode",{parentName:"p"},"\\\\server\\share\\")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"Z:")," and then ",(0,i.kt)("inlineCode",{parentName:"p"},"Z:\\>gsudo do-something"),"."))))}m.isMDXComponent=!0}}]);