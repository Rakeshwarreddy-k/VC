"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[870],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),b=a,f=m["".concat(p,".").concat(b)]||m[b]||c[b]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8463:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i="SPECjbb Workload Profiles",l={unversionedId:"workloads/specjbb/specjbb-profiles",id:"workloads/specjbb/specjbb-profiles",title:"SPECjbb Workload Profiles",description:"The following profiles run customer-representative or benchmarking scenarios using the SPECjbb workload.",source:"@site/docs/workloads/specjbb/specjbb-profiles.md",sourceDirName:"workloads/specjbb",slug:"/workloads/specjbb/specjbb-profiles",permalink:"/VirtualClient/docs/workloads/specjbb/specjbb-profiles",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/specjbb/specjbb-profiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SPECjbb",permalink:"/VirtualClient/docs/workloads/specjbb/"},next:{title:"SPECjvm",permalink:"/VirtualClient/docs/workloads/specjvm/"}},p={},s=[{value:"PERF-SPECJBB.json",id:"perf-specjbbjson",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"specjbb-workload-profiles"},"SPECjbb Workload Profiles"),(0,a.kt)("p",null,"The following profiles run customer-representative or benchmarking scenarios using the SPECjbb workload."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/VirtualClient/docs/workloads/specjbb/"},"Workload Details"),"  ")),(0,a.kt)("h2",{id:"perf-specjbbjson"},"PERF-SPECJBB.json"),(0,a.kt)("p",null,"Runs the SPECjbb benchmark workload to assess the performance of a Java Server."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-SPECJBB.json"},"Workload Profile"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Supported Platform/Architectures")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"linux-x64"),(0,a.kt)("li",{parentName:"ul"},"linux-arm64"),(0,a.kt)("li",{parentName:"ul"},"win-x64"),(0,a.kt)("li",{parentName:"ul"},"win-arm64"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Supported Operating Systems")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ubuntu 18"),(0,a.kt)("li",{parentName:"ul"},"Ubuntu 20"),(0,a.kt)("li",{parentName:"ul"},"Ubuntu 22"),(0,a.kt)("li",{parentName:"ul"},"Windows 10"),(0,a.kt)("li",{parentName:"ul"},"Windows 11"),(0,a.kt)("li",{parentName:"ul"},"Windows Server 2016"),(0,a.kt)("li",{parentName:"ul"},"Windows Server 2019"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Supports Disconnected Scenarios"),"  "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"No. Internet connection required."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Dependencies"),(0,a.kt)("br",{parentName:"p"}),"\n","The dependencies defined in the 'Dependencies' section of the profile itself are required in order to run the workload operations effectively."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Internet connection.")),(0,a.kt)("p",{parentName:"li"},"Additional information on components that exist within the 'Dependencies' section of the profile can be found in the following locations:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microsoft.github.io/VirtualClient/docs/category/dependencies/"},"Installing Dependencies")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Profile Runtimes"),(0,a.kt)("br",{parentName:"p"}),"\n","The following timings represent the length of time required to run a single round of profile actions. These timings can be used to determine\nminimum required runtimes for the Virtual Client in order to get results. These are estimates based on the number of system cores."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"(8-cores/vCPUs) = 3 hours"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Usage Examples"),(0,a.kt)("br",{parentName:"p"}),"\n","The following section provides a few basic examples of how to use the workload profile."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Execute the workload profile\nVirtualClient.exe --profile=PERF-SPECJBB.json --system=Azure --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}"\n')))))}c.isMDXComponent=!0}}]);