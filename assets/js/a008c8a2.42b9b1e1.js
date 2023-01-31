"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[9714],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=s(a),c=r,d=k["".concat(p,".").concat(c)]||k[c]||u[c]||l;return a?n.createElement(d,i(i({ref:t},m),{},{components:a})):n.createElement(d,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8929:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={},i="SPEC CPU Workload Profiles",o={unversionedId:"workloads/speccpu/speccpu-profiles",id:"workloads/speccpu/speccpu-profiles",title:"SPEC CPU Workload Profiles",description:"The following profiles run customer-representative or benchmarking scenarios using the SPEC CPU workload.",source:"@site/docs/workloads/speccpu/speccpu-profiles.md",sourceDirName:"workloads/speccpu",slug:"/workloads/speccpu/speccpu-profiles",permalink:"/VirtualClient/docs/workloads/speccpu/speccpu-profiles",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/speccpu/speccpu-profiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SPECcpu",permalink:"/VirtualClient/docs/workloads/speccpu/"},next:{title:"SPECjbb",permalink:"/VirtualClient/docs/workloads/specjbb/"}},p={},s=[{value:"PERF-SPECCPU-FPRATE.json",id:"perf-speccpu-fpratejson",level:2},{value:"PERF-SPECCPU-FPSPEED.json",id:"perf-speccpu-fpspeedjson",level:2},{value:"PERF-SPECCPU-INTRATE.json",id:"perf-speccpu-intratejson",level:2},{value:"PERF-SPECCPU-INTSPEED.json",id:"perf-speccpu-intspeedjson",level:2}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spec-cpu-workload-profiles"},"SPEC CPU Workload Profiles"),(0,r.kt)("p",null,"The following profiles run customer-representative or benchmarking scenarios using the SPEC CPU workload."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/VirtualClient/docs/workloads/speccpu/"},"Workload Details"),"  ")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("em",{parentName:"p"},"SPEC CPU 2017 workloads are long running workloads. When running in Peak performance scenarios, some take more than 2 days to complete. Check the 'Profile Runtimes' section below for more details on what\nto expect."))),(0,r.kt)("h2",{id:"perf-speccpu-fpratejson"},"PERF-SPECCPU-FPRATE.json"),(0,r.kt)("p",null,"Runs the SPEC CPU Floating Point Rate (fprate) benchmark workload on the system focusing on baseline + peak measurements. This workload is an industry standard\nfor evaluating the performance of the CPU for processing calculations."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-SPECCPU-FPRATE.json"},"Workload Profile"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Supported Platform/Architectures")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"linux-x64"),(0,r.kt)("li",{parentName:"ul"},"linux-arm64"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Supports Disconnected Scenarios"),"  "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"No. Internet connection required."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Supported Compilers"),(0,r.kt)("br",{parentName:"p"}),"\n","The following compilers are supported with the workload for this profile. See profile parameters and usage examples below."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GCC Compiler Versions = 8, 9, 10"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Dependencies"),(0,r.kt)("br",{parentName:"p"}),"\n","The dependencies defined in the 'Dependencies' section of the profile itself are required in order to run the workload operations effectively."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Internet connection.")),(0,r.kt)("p",{parentName:"li"},"Additional information on components that exist within the 'Dependencies' section of the profile can be found in the following locations:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://microsoft.github.io/VirtualClient/docs/category/dependencies/"},"Installing Dependencies")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Profile Parameters"),(0,r.kt)("br",{parentName:"p"}),"\n","The following parameters can be optionally supplied on the command line to modify the behaviors of the workload."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CompilerName"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. The name of the compiler to use for compiling CoreMark on the system."),(0,r.kt)("td",{parentName:"tr",align:null},"gcc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CompilerVersion"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. The version of the compiler to use."),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RunPeak"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. True to run the workload 'Peak' scenario, False to run the workload 'Base' scenario."),(0,r.kt)("td",{parentName:"tr",align:null},"false (Base)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BaseOptimizationFlags"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Optimization flags to pass to the GCC compiler when running the 'Base' scenario"),(0,r.kt)("td",{parentName:"tr",align:null},"-g -O3 -march=native")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PeakOptimizationFlags"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Optimization flags to pass to the GCC compiler when running the 'Peak' scenario"),(0,r.kt)("td",{parentName:"tr",align:null},"-g -Ofast -march=native -flto"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Profile Runtimes"),(0,r.kt)("br",{parentName:"p"}),"\n","The following timings represent the length of time required to run a single round of profile actions. These timings can be used to determine\nminimum required runtimes for the Virtual Client in order to get results. These are estimates based on the number of system cores."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Base Scenario (8-cores/vCPUs) =~ 14 hours"),(0,r.kt)("li",{parentName:"ul"},"Base scenario (48-cores/vCPUs) =~ 10 hours"),(0,r.kt)("li",{parentName:"ul"},"Peak scenario (8-cores/vCPUs) =~ 28 hours"),(0,r.kt)("li",{parentName:"ul"},"Peak scenario (48-cores/vCPUs) =~ 18 hours"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Usage Examples"),(0,r.kt)("br",{parentName:"p"}),"\n","The following section provides a few basic examples of how to use the workload profile. Additional usage examples can be found in the\n'Usage Scenarios/Examples' link at the top."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'# Execute the workload profile\n./VirtualClient --profile=PERF-SPECCPU-FPRATE.json --system=Azure --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}"\n')))),(0,r.kt)("h2",{id:"perf-speccpu-fpspeedjson"},"PERF-SPECCPU-FPSPEED.json"),(0,r.kt)("p",null,"Runs the SPEC CPU Floating Point Speed (fpspeed) benchmark workload on the system focusing on baseline + peak measurements. This workload is an industry standard\nfor evaluating the performance of the CPU for processing calculations."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-SPECCPU-FPSPEED.json"},"Workload Profile"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"OS/Architecture Platforms")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"linux-x64"),(0,r.kt)("li",{parentName:"ul"},"linux-arm64"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Supports Disconnected Scenarios"),"  "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"No. Internet connection required."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Supported Compilers"),(0,r.kt)("br",{parentName:"p"}),"\n","The following compilers are supported with the workload for this profile. See profile parameters and usage examples below."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GCC Compiler Versions = 8, 9, 10"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Dependencies"),(0,r.kt)("br",{parentName:"p"}),"\n","The dependencies defined in the 'Dependencies' section of the profile itself are required in order to run the workload operations effectively."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Internet connection.")),(0,r.kt)("p",{parentName:"li"},"Additional information on components that exist within the 'Dependencies' section of the profile can be found in the following locations:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://microsoft.github.io/VirtualClient/docs/category/dependencies/"},"Installing Dependencies")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Profile Parameters"),(0,r.kt)("br",{parentName:"p"}),"\n","The following parameters can be optionally supplied on the command line to modify the behaviors of the workload."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CompilerName"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. The name of the compiler to use for compiling CoreMark on the system."),(0,r.kt)("td",{parentName:"tr",align:null},"gcc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CompilerVersion"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. The version of the compiler to use."),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RunPeak"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. True to run the workload 'Peak' scenario, False to run the workload 'Base' scenario."),(0,r.kt)("td",{parentName:"tr",align:null},"false (Base)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BaseOptimizationFlags"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Optimization flags to pass to the GCC compiler when running the 'Base' scenario"),(0,r.kt)("td",{parentName:"tr",align:null},"-g -O3 -march=native")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PeakOptimizationFlags"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Optimization flags to pass to the GCC compiler when running the 'Peak' scenario"),(0,r.kt)("td",{parentName:"tr",align:null},"-g -Ofast -march=native -flto")))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Profile Runtimes"),(0,r.kt)("br",{parentName:"p"}),"\n","See the 'Metadata' section of the profile for estimated runtimes. These timings represent the length of time required to run a single round of profile\nactions. These timings can be used to determine minimum required runtimes for the Virtual Client in order to get results. These are often estimates based on the\nnumber of system cores. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Usage Examples"),(0,r.kt)("br",{parentName:"p"}),"\n","The following section provides a few basic examples of how to use the workload profile."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Execute the workload profile\n./VirtualClient --profile=PERF-SPECCPU-FPSPEED.json --system=Azure --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}"\n')))),(0,r.kt)("h2",{id:"perf-speccpu-intratejson"},"PERF-SPECCPU-INTRATE.json"),(0,r.kt)("p",null,"Runs the SPEC CPU Integer Rate (intrate) benchmark workload on the system focusing on baseline + peak measurements. This workload is an industry standard\nfor evaluating the performance of the CPU for processing calculations."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-SPECCPU-INTRATE.json"},"Workload Profile"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"OS/Architecture Platforms")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"linux-x64"),(0,r.kt)("li",{parentName:"ul"},"linux-arm64"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Supports Disconnected Scenarios"),"  "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"No. Internet connection required."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Supported Compilers"),(0,r.kt)("br",{parentName:"p"}),"\n","The following compilers are supported with the workload for this profile. See profile parameters and usage examples below."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GCC Compiler Versions = 8, 9, 10"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Dependencies"),(0,r.kt)("br",{parentName:"p"}),"\n","The dependencies defined in the 'Dependencies' section of the profile itself are required in order to run the workload operations effectively."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Internet connection.")),(0,r.kt)("p",{parentName:"li"},"Additional information on components that exist within the 'Dependencies' section of the profile can be found in the following locations:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://microsoft.github.io/VirtualClient/docs/category/dependencies/"},"Installing Dependencies")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Profile Parameters"),(0,r.kt)("br",{parentName:"p"}),"\n","The following parameters can be optionally supplied on the command line to modify the behaviors of the workload."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CompilerName"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. The name of the compiler to use for compiling CoreMark on the system."),(0,r.kt)("td",{parentName:"tr",align:null},"gcc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CompilerVersion"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. The version of the compiler to use."),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RunPeak"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. True to run the workload 'Peak' scenario, False to run the workload 'Base' scenario."),(0,r.kt)("td",{parentName:"tr",align:null},"false (Base)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BaseOptimizationFlags"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Optimization flags to pass to the GCC compiler when running the 'Base' scenario"),(0,r.kt)("td",{parentName:"tr",align:null},"-g -O3 -march=native")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PeakOptimizationFlags"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Optimization flags to pass to the GCC compiler when running the 'Peak' scenario"),(0,r.kt)("td",{parentName:"tr",align:null},"-g -Ofast -march=native -flto"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Profile Runtimes"),(0,r.kt)("br",{parentName:"p"}),"\n","See the 'Metadata' section of the profile for estimated runtimes. These timings represent the length of time required to run a single round of profile\nactions. These timings can be used to determine minimum required runtimes for the Virtual Client in order to get results. These are often estimates based on the\nnumber of system cores. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Usage Examples"),(0,r.kt)("br",{parentName:"p"}),"\n","The following section provides a few basic examples of how to use the workload profile."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Execute the workload profile\n./VirtualClient --profile=PERF-SPECCPU-INTRATE.json --system=Azure --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}"\n')))),(0,r.kt)("h2",{id:"perf-speccpu-intspeedjson"},"PERF-SPECCPU-INTSPEED.json"),(0,r.kt)("p",null,"Runs the SPEC CPU Integer Speed (intspeed) benchmark workload on the system focusing on baseline + peak measurements. This workload is an industry standard\nfor evaluating the performance of the CPU for processing calculations."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-SPECCPU-INTSPEED.json"},"Workload Profile"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"OS/Architecture Platforms")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"linux-x64"),(0,r.kt)("li",{parentName:"ul"},"linux-arm64"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Supports Disconnected Scenarios"),"  "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"No. Internet connection required."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Supported Compilers"),(0,r.kt)("br",{parentName:"p"}),"\n","The following compilers are supported with the workload for this profile. See profile parameters and usage examples below."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GCC Compiler Versions = 8, 9, 10"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Dependencies"),(0,r.kt)("br",{parentName:"p"}),"\n","The dependencies defined in the 'Dependencies' section of the profile itself are required in order to run the workload operations effectively."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Internet connection.")),(0,r.kt)("p",{parentName:"li"},"Additional information on components that exist within the 'Dependencies' section of the profile can be found in the following locations:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://microsoft.github.io/VirtualClient/docs/category/dependencies/"},"Installing Dependencies")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Profile Parameters"),(0,r.kt)("br",{parentName:"p"}),"\n","The following parameters can be optionally supplied on the command line to modify the behaviors of the workload."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CompilerName"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. The name of the compiler to use for compiling CoreMark on the system."),(0,r.kt)("td",{parentName:"tr",align:null},"gcc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CompilerVersion"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. The version of the compiler to use."),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RunPeak"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. True to run the workload 'Peak' scenario, False to run the workload 'Base' scenario."),(0,r.kt)("td",{parentName:"tr",align:null},"false (Base)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BaseOptimizationFlags"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Optimization flags to pass to the GCC compiler when running the 'Base' scenario"),(0,r.kt)("td",{parentName:"tr",align:null},"-g -O3 -march=native")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PeakOptimizationFlags"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Optimization flags to pass to the GCC compiler when running the 'Peak' scenario"),(0,r.kt)("td",{parentName:"tr",align:null},"-g -Ofast -march=native -flto"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Profile Runtimes"),(0,r.kt)("br",{parentName:"p"}),"\n","See the 'Metadata' section of the profile for estimated runtimes. These timings represent the length of time required to run a single round of profile\nactions. These timings can be used to determine minimum required runtimes for the Virtual Client in order to get results. These are often estimates based on the\nnumber of system cores. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Usage Examples"),(0,r.kt)("br",{parentName:"p"}),"\n","The following section provides a few basic examples of how to use the workload profile."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Execute the workload profile\n./VirtualClient --profile=PERF-SPECCPU-INTSPEED.json --system=Azure --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}"\n')))))}u.isMDXComponent=!0}}]);