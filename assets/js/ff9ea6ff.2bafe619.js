"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[4377],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),k=n,d=m["".concat(s,".").concat(k)]||m[k]||c[k]||o;return r?a.createElement(d,l(l({ref:t},u),{},{components:r})):a.createElement(d,l({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8586:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={},l="LAPACK Workload Profiles",i={unversionedId:"workloads/lapack/LAPACKProfiles",id:"workloads/lapack/LAPACKProfiles",title:"LAPACK Workload Profiles",description:"The following profiles run customer-representative or benchmarking scenarios using the LAPACK workload.",source:"@site/docs/workloads/lapack/LAPACKProfiles.md",sourceDirName:"workloads/lapack",slug:"/workloads/lapack/LAPACKProfiles",permalink:"/docs/workloads/lapack/LAPACKProfiles",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/docs/workloads/lapack/LAPACKProfiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LAPACK Workload Metrics",permalink:"/docs/workloads/lapack/LAPACKMetrics"},next:{title:"MEMCACHED Workload",permalink:"/docs/workloads/memcached/"}},s={},p=[{value:"Preliminaries",id:"preliminaries",level:3},{value:"PERF-CPU-LAPACK.json",id:"perf-cpu-lapackjson",level:3},{value:"Resources",id:"resources",level:3}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"lapack-workload-profiles"},"LAPACK Workload Profiles"),(0,n.kt)("p",null,"The following profiles run customer-representative or benchmarking scenarios using the LAPACK workload.  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/workloads/lapack/"},"Workload Details"),"  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/workloads/lapack/LAPACKMetrics"},"Workload Profile Metrics"),"  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./DependencyPackages.md"},"Workload Packages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./UsageScenarios.md"},"Usage Scenarios/Examples"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"preliminaries"},"Preliminaries"),(0,n.kt)("p",null,"The profiles below require the ability to download workload packages and dependencies from a package store. In order to download the workload packages, connection information\nmust be supplied on the command line. See the 'Workload Packages' documentation above for details on how that works."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"perf-cpu-lapackjson"},"PERF-CPU-LAPACK.json"),(0,n.kt)("p",null,"Runs a CPU-intensive workload using the LAPACK toolset to test the performance of the CPU in processing different tests for fortran subroutines.\nThis profile is designed to identify general/broad regressions when compared against a baseline by testing routines that provide complete\nsolutions for the most common problems of numerical linear algebra."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Supported Platform/Architectures")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"linux-x64"),(0,n.kt)("li",{parentName:"ul"},"linux-arm64"),(0,n.kt)("li",{parentName:"ul"},"win-x64"),(0,n.kt)("li",{parentName:"ul"},"win-arm64"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Supported Operating Systems")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Ubuntu 18"),(0,n.kt)("li",{parentName:"ul"},"Ubuntu 20"),(0,n.kt)("li",{parentName:"ul"},"Ubuntu 22"),(0,n.kt)("li",{parentName:"ul"},"Windows 10"),(0,n.kt)("li",{parentName:"ul"},"Windows 11"),(0,n.kt)("li",{parentName:"ul"},"Windows Server 2016"),(0,n.kt)("li",{parentName:"ul"},"Windows Server 2019"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Dependencies"),(0,n.kt)("br",{parentName:"p"}),"\n","The following dependencies must be met to run this workload profile."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Workload package must exist in the 'packages' directory or connection information for the package store supplied on the command line (see 'Workload Packages' link above)."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Workload Runtimes"),(0,n.kt)("br",{parentName:"p"}),"\n","The following timings represent the length of time required to run a single round of tests ran. These timings can be used to determine\nminimum required runtimes for the Virtual Client in order to get results. These are estimates based on the use of prescribed VM SKUs.\nIt is practical to allow for 1 to 2 hours extra runtime to ensure the tests can complete full test runs."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Expected Runtime on Linux Systems",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"(2-core/vCPU VM) = 1.5 hours"))),(0,n.kt)("li",{parentName:"ul"},"Expected Runtime on Windows Systems",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"(2-core/vCPU VM) = 1.5 hours"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Usage Examples"),(0,n.kt)("br",{parentName:"p"}),"\n","The following section provides a few basic examples of how to use the workload profile. Additional usage examples can be found in the\n'Usage Scenarios/Examples' link at the top."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'VirtualClient.exe --profile=PERF-CPU-LAPACK.json --system=Azure --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}"\n')),(0,n.kt)("h3",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/virtual-machines/sizes"},"Azure VM Sizes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/pricing/details/managed-disks/"},"Azure Managed Disks"))))}c.isMDXComponent=!0}}]);