"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[390],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(r),f=o,d=c["".concat(p,".").concat(f)]||c[f]||u[f]||a;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1191:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},i="OpenFOAM Workload Profiles",l={unversionedId:"workloads/openfoam/openfoam-profiles",id:"workloads/openfoam/openfoam-profiles",title:"OpenFOAM Workload Profiles",description:"The following profiles run customer-representative or benchmarking scenarios using the OpenFOAM workload.",source:"@site/docs/workloads/openfoam/openfoam-profiles.md",sourceDirName:"workloads/openfoam",slug:"/workloads/openfoam/openfoam-profiles",permalink:"/VirtualClient/docs/workloads/openfoam/openfoam-profiles",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/openfoam/openfoam-profiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenFOAM",permalink:"/VirtualClient/docs/workloads/openfoam/"},next:{title:"OpenSSL",permalink:"/VirtualClient/docs/workloads/openssl/"}},p={},s=[{value:"PERF-OPENFOAM.json",id:"perf-openfoamjson",level:2}],m={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"openfoam-workload-profiles"},"OpenFOAM Workload Profiles"),(0,o.kt)("p",null,"The following profiles run customer-representative or benchmarking scenarios using the OpenFOAM workload."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/VirtualClient/docs/workloads/openfoam/"},"Workload Details"),"  ")),(0,o.kt)("h2",{id:"perf-openfoamjson"},"PERF-OPENFOAM.json"),(0,o.kt)("p",null,"Runs the OpenFOAM workload which measures performance in terms of iterations per minute. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-OPENFOAM.json"},"Workload Profile")," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Supported Platform/Architectures")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"linux-x64"),(0,o.kt)("li",{parentName:"ul"},"linux-arm64"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Dependencies"),(0,o.kt)("br",{parentName:"p"}),"\n","The dependencies defined in the 'Dependencies' section of the profile itself are required in order to run the workload operations effectively."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Internet connection.")),(0,o.kt)("p",{parentName:"li"},"Additional information on components that exist within the 'Dependencies' section of the profile can be found in the following locations:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://microsoft.github.io/VirtualClient/docs/category/dependencies/"},"Installing Dependencies")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Scenarios"),(0,o.kt)("br",{parentName:"p"}),"\n","The following scenarios are covered by this workload profile."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"'airFoil2D' simulation using simpleFoam solver."),(0,o.kt)("li",{parentName:"ul"},"'elbow' simulation using icoFoam solver."),(0,o.kt)("li",{parentName:"ul"},"'lockExchange' simulation using twoLiquidMixingFoamSolver."),(0,o.kt)("li",{parentName:"ul"},"'motorBike' simulation using simpleFoam solver (on linux-x64 systems only)."),(0,o.kt)("li",{parentName:"ul"},"'pitzDaily' simulation using simpleFoam solver."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Profile Parameters"),(0,o.kt)("br",{parentName:"p"}),"\n","The following parameters can be optionally supplied on the command line to modify the behaviors of the workload."),(0,o.kt)("table",{parentName:"li"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Iterations"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional. Number of iterations for which particular simulation will be run."),(0,o.kt)("td",{parentName:"tr",align:null},"500"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Profile Runtimes"),(0,o.kt)("br",{parentName:"p"}),"\n","See the 'Metadata' section of the profile for estimated runtimes. These timings represent the length of time required to run a single round of profile\nactions. These timings can be used to determine minimum required runtimes for the Virtual Client in order to get results. These are often estimates based on the\nnumber of system cores. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Usage Examples"),(0,o.kt)("br",{parentName:"p"}),"\n","The following section provides a few basic examples of how to use the workload profile."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'./VirtualClient --profile=PERF-OPENFOAM.json --system=Demo --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}"\n./VirtualClient --profile=PERF-OPENFOAM.json --system=Demo --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}" --parameters=Iterations=10\n./VirtualClient --profile=PERF-OPENFOAM.json --system=Demo --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}" --scenarios=airFoil2D,elbow,motorBike\n\n')))))}u.isMDXComponent=!0}}]);