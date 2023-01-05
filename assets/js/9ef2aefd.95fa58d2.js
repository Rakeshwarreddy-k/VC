"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[8573],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),k=a,d=m["".concat(s,".").concat(k)]||m[k]||u[k]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="GeekBench5 Workload Profiles",l={unversionedId:"workloads/geekbench/geekbench-profiles",id:"workloads/geekbench/geekbench-profiles",title:"GeekBench5 Workload Profiles",description:"The following profiles run customer-representative or benchmarking scenarios using the GeekBench5 workload.",source:"@site/docs/workloads/geekbench/geekbench-profiles.md",sourceDirName:"workloads/geekbench",slug:"/workloads/geekbench/geekbench-profiles",permalink:"/VirtualClient/docs/workloads/geekbench/geekbench-profiles",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/geekbench/geekbench-profiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GeekBench5",permalink:"/VirtualClient/docs/workloads/geekbench/"},next:{title:"Graph500",permalink:"/VirtualClient/docs/workloads/graph500/"}},s={},p=[{value:"PERF-CPU-GEEKBENCH.json",id:"perf-cpu-geekbenchjson",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"geekbench5-workload-profiles"},"GeekBench5 Workload Profiles"),(0,a.kt)("p",null,"The following profiles run customer-representative or benchmarking scenarios using the GeekBench5 workload."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/VirtualClient/docs/workloads/geekbench/"},"Workload Details"),"  ")),(0,a.kt)("h2",{id:"perf-cpu-geekbenchjson"},"PERF-CPU-GEEKBENCH.json"),(0,a.kt)("p",null,"Runs a CPU-intensive workload using the GeekBench5 toolset to test the performance of the CPU across various types of common application algorithms\n(e.g. Gaussian Blur, AES-XTS, Text Compression, Image Compression). This profile is designed to identify general/broad regressions when compared\nagainst a baseline. GeekBench is an industry standard benchmarking toolset."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-CPU-GEEKBENCH.json"},"Workload Profile")," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Supported Platform/Architectures")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"linux-x64"),(0,a.kt)("li",{parentName:"ul"},"linux-arm64"),(0,a.kt)("li",{parentName:"ul"},"win-x64"),(0,a.kt)("li",{parentName:"ul"},"win-arm64"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Supports Disconnected Scenarios"),"  "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Yes. When the GeekBench5 package is included in 'packages' directory of the Virtual Client.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/VirtualClient/docs/dependencies/0001-install-vc-packages"},"Installing VC Packages"),". "))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Dependencies"),(0,a.kt)("br",{parentName:"p"}),"\n","The dependencies defined in the 'Dependencies' section of the profile itself are required in order to run the workload operations effectively."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Internet connection.")),(0,a.kt)("p",{parentName:"li"},"Additional information on components that exist within the 'Dependencies' section of the profile can be found in the following locations:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microsoft.github.io/VirtualClient/docs/category/dependencies/"},"Installing Dependencies")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Profile Runtimes"),(0,a.kt)("br",{parentName:"p"}),"\n","The following timings represent the length of time required to run a single round of profile actions. These timings can be used to determine\nminimum required runtimes for the Virtual Client in order to get results. These are estimates based on the number of system cores."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"(2-cores/vCPUs) = 2 - 4 minutes"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Usage Examples"),(0,a.kt)("br",{parentName:"p"}),"\n","The following section provides a few basic examples of how to use the workload profile. Additional usage examples can be found in the\n'Usage Scenarios/Examples' link at the top."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Execute the workload profile\nVirtualClient.exe --profile=PERF-CPU-GEEKBENCH.json --system=Demo --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}"\n')))))}u.isMDXComponent=!0}}]);