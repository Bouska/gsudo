"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[943],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=l,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var u=2;u<o;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8177:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>w,contentTitle:()=>b,default:()=>T,frontMatter:()=>v,metadata:()=>k,toc:()=>N});var n=a(7462),l=a(7294),o=a(3905),r=a(6010),i=a(2389),s=a(7392),u=a(7094),c=a(2466);const d="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,a;const{lazy:o,block:i,defaultValue:m,values:h,groupId:f,className:g}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,s.l)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===m?m:null!=(t=null!=m?m:null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)?t:v[0].props.value;if(null!==w&&!b.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:y}=(0,u.U)(),[T,O]=(0,l.useState)(w),P=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=f){const e=N[f];null!=e&&e!==T&&b.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,a=P.indexOf(t),n=b[a].value;n!==T&&(C(t),O(n),null!=f&&y(f,String(n)))},x=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=P.indexOf(e.currentTarget)+1;a=null!=(n=P[t])?n:P[0];break}case"ArrowLeft":{var l;const t=P.indexOf(e.currentTarget)-1;a=null!=(l=P[t])?l:P[P.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},g)},b.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>P.push(e),onKeyDown:x,onFocus:E,onClick:E},o,{className:(0,r.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),o?(0,l.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function h(e){const t=(0,i.Z)();return l.createElement(m,(0,n.Z)({key:String(t)},e))}const f="tabItem_Ymn6";function g(e){let{children:t,hidden:a,className:n}=e;return l.createElement("div",{role:"tabpanel",className:(0,r.Z)(f,n),hidden:a},t)}const v={hide_title:!0,title:"How to Install",sidebar_position:2},b=void 0,k={unversionedId:"install",id:"install",title:"How to Install",description:"How to Install gsudo",source:"@site/docs/install.md",sourceDirName:".",slug:"/install",permalink:"/gsudo/docs/install",draft:!1,editUrl:"https://github.com/gerardog/gsudo/blob/docs/docs/docs/install.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{hide_title:!0,title:"How to Install",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/gsudo/docs/intro"},next:{title:"How to Use",permalink:"/gsudo/docs/usage/"}},w={},N=[{value:"How to Install gsudo",id:"how-to-install-gsudo",level:2},{value:"Configure your Shell",id:"configure-your-shell",level:2}],y={toc:N};function T(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-install-gsudo"},"How to Install gsudo"),(0,o.kt)(h,{mdxType:"Tabs"},(0,o.kt)(g,{value:"W10",label:"On Windows 10/11",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"If you use any of the following Package Managers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/winget-cli/releases"},"WinGet"),": Run ",(0,o.kt)("inlineCode",{parentName:"li"},"winget install gerardog.gsudo")),(0,o.kt)("li",{parentName:"ul"},"Using ",(0,o.kt)("a",{parentName:"li",href:"https://chocolatey.org/install"},"Chocolatey"),": Run  ",(0,o.kt)("inlineCode",{parentName:"li"},"choco install gsudo")),(0,o.kt)("li",{parentName:"ul"},"Using ",(0,o.kt)("a",{parentName:"li",href:"https://scoop.sh"},"Scoop"),": Run ",(0,o.kt)("inlineCode",{parentName:"li"},"scoop install gsudo"))),(0,o.kt)("p",null,"Or:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Download and run the ",(0,o.kt)("inlineCode",{parentName:"li"},"MSI")," file from the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/gerardog/gsudo/releases/latest"},"latest release"),"."),(0,o.kt)("li",{parentName:"ul"},"Or use the following script to achieve the same:  ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"PowerShell -Command \"Set-ExecutionPolicy RemoteSigned -scope Process; [Net.ServicePointManager]::SecurityProtocol = 'Tls12'; iwr -useb https://raw.githubusercontent.com/gerardog/gsudo/master/installgsudo.ps1 | iex\"\n"))),(0,o.kt)("li",{parentName:"ul"},"Manually: Download the ",(0,o.kt)("inlineCode",{parentName:"li"},"ZIP")," file from the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/gerardog/gsudo/releases/latest"},"latest release"),". Uncompress and add to ",(0,o.kt)("inlineCode",{parentName:"li"},"PATH"),"."))),(0,o.kt)(g,{value:"W8",label:"Windows 8.1",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Download ",(0,o.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/download/dotnet-framework"},".NET Framework 4.8")," (4.6 should work but, since you are there...)"),(0,o.kt)("li",{parentName:"ul"},"Download ",(0,o.kt)("inlineCode",{parentName:"li"},"gsudoSetup.msi")," from the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/gerardog/gsudo/releases/latest"},"latest release"),", and run."))),(0,o.kt)(g,{value:"W7",label:"Windows 7 SP1",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enable TLS 1.2 using ",(0,o.kt)("a",{parentName:"li",href:"https://support.microsoft.com/en-us/topic/update-to-enable-tls-1-1-and-tls-1-2-as-default-secure-protocols-in-winhttp-in-windows-c4bd73d2-31d7-761e-0178-11268bb10392#bkmk_easy"},'Microsoft "Easy Fix"\n')),(0,o.kt)("li",{parentName:"ul"},"Download ",(0,o.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/download/dotnet-framework"},".NET Framework 4.8")," (4.6 should work but, since you are there...)"),(0,o.kt)("li",{parentName:"ul"},"Download ",(0,o.kt)("inlineCode",{parentName:"li"},"gsudoSetup.msi")," from the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/gerardog/gsudo/releases/latest"},"latest release"),", and run."),(0,o.kt)("li",{parentName:"ul"},"You probably want to update PowerShell up to 5.1")))),(0,o.kt)("hr",null),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please restart your consoles after installing, to refresh the ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"gsudo")," is just a portable console app. No Windows service is required or system change is done, except adding gsudo to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),"."))),(0,o.kt)("h2",{id:"configure-your-shell"},"Configure your Shell"),(0,o.kt)("p",null,"On the following shells you get a better experience if you follow some manual configuration:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"usage/powershell#powershell-profile-config"},"PowerShell")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"usage/bash-for-windows#bash-profile-config"},"Bash for Windows (MinGW / MSYS2 / Git-Bash / Cygwin)"))))}T.isMDXComponent=!0}}]);