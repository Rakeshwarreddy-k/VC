"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[5952],{3905:(t,a,e)=>{e.d(a,{Zo:()=>u,kt:()=>N});var n=e(7294);function l(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){l(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function p(t,a){if(null==t)return{};var e,n,l=function(t,a){if(null==t)return{};var e,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(l[e]=t[e]);return l}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var m=n.createContext({}),d=function(t){var a=n.useContext(m),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},u=function(t){var a=d(t.components);return n.createElement(m.Provider,{value:a},t.children)},o={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(t,a){var e=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),k=d(e),N=l,g=k["".concat(m,".").concat(N)]||k[N]||o[N]||r;return e?n.createElement(g,i(i({ref:a},u),{},{components:e})):n.createElement(g,i({ref:a},u))}));function N(t,a){var e=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var r=e.length,i=new Array(r);i[0]=k;var p={};for(var m in a)hasOwnProperty.call(a,m)&&(p[m]=a[m]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var d=2;d<r;d++)i[d]=e[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}k.displayName="MDXCreateElement"},541:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>m,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var n=e(7462),l=(e(7294),e(3905));const r={},i="NAS Parallel",p={unversionedId:"workloads/nasparallel/nasparallel",id:"workloads/nasparallel/nasparallel",title:"NAS Parallel",description:"The NAS Parallel Benchmarks (NPB) are a small set of programs designed to help evaluate the performance of parallel supercomputers.",source:"@site/docs/workloads/nasparallel/nasparallel.md",sourceDirName:"workloads/nasparallel",slug:"/workloads/nasparallel/",permalink:"/VirtualClient/docs/workloads/nasparallel/",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/nasparallel/nasparallel.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MLPerf Workload Profiles",permalink:"/VirtualClient/docs/workloads/mlperf/mlperf-profiles"},next:{title:"NAS Parallel Workload Profiles",permalink:"/VirtualClient/docs/workloads/nasparallel/nasparallel-profiles"}},m={},d=[{value:"System Requirements",id:"system-requirements",level:2},{value:"What is Being Measured?",id:"what-is-being-measured",level:2},{value:"Workload Metrics",id:"workload-metrics",level:2},{value:"Packaging and Setup",id:"packaging-and-setup",level:2},{value:"Common Issues",id:"common-issues",level:2}],u={toc:d};function o(t){let{components:a,...e}=t;return(0,l.kt)("wrapper",(0,n.Z)({},u,e,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nas-parallel"},"NAS Parallel"),(0,l.kt)("p",null,"The NAS Parallel Benchmarks (NPB) are a small set of programs designed to help evaluate the performance of parallel supercomputers.\nIt supports both single and multi machine scanerio.\nIn multi machine scanerio we can have 1 client to N server environment."),(0,l.kt)("p",null,"The Message Passing Interface(MPI) is used to communicate over the network for running on multiple machines.\nFor single machine Open Multi-Processing(OpenMP) is used for parallel programming."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.nas.nasa.gov/software/npb.html"},"NAS Parallel")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.nas.nasa.gov/aboutnas/about.html"},"About NAS"))),(0,l.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,l.kt)("p",null,"It is recommended to run this workload on machines with infiniband drivers and hardware. There are other more exhaustive workloads for testing network\nperformance for non-HPC machines in the Virtual Client. It is also required that all machines under test can communicate freely over port 22."),(0,l.kt)("h2",{id:"what-is-being-measured"},"What is Being Measured?"),(0,l.kt)("p",null,"The following workload tests the High Performance Computing(HPC)/Parallel Computing capabilities of system. Using MPI(For Multiple machines configuration)\nand OpenMP (for single-system configurations using threads)."),(0,l.kt)("p",null,"Depending on the configuration of the workload different pieces of hardware are tested. If the hardware that is being tested has ",(0,l.kt)("a",{parentName:"p",href:"https://www.mellanox.com/pdf/whitepapers/IB_Intro_WP_190.pdf"},"Infiniband"),",\nthen the hardware and drivers installed for the Infiniband infastruture are tested. If these are not present, regular network stacks/channels are tested.  "),(0,l.kt)("p",null,"The list of benchmarks that are currently executed as part of the NAS Parallel workload include the following:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Benchmark"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IS"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer Sort, random memory access")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EP"),(0,l.kt)("td",{parentName:"tr",align:null},"Embarrassingly Parallel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CG"),(0,l.kt)("td",{parentName:"tr",align:null},"Conjugate Gradient, irregular memory access and communication")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MG"),(0,l.kt)("td",{parentName:"tr",align:null},"Multi-Grid on a sequence of meshes, long- and short-distance communication, memory intensive")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FT"),(0,l.kt)("td",{parentName:"tr",align:null},"discrete 3D fast Fourier Transform, all-to-all communication")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BT"),(0,l.kt)("td",{parentName:"tr",align:null},"Block Tri-diagonal solver")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP"),(0,l.kt)("td",{parentName:"tr",align:null},"Scalar Penta-diagonal solver")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LU"),(0,l.kt)("td",{parentName:"tr",align:null},"Lower-Upper Gauss-Seidel solver")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DC"),(0,l.kt)("td",{parentName:"tr",align:null},"Data Cube")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DT"),(0,l.kt)("td",{parentName:"tr",align:null},"Data Traffic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UA"),(0,l.kt)("td",{parentName:"tr",align:null},"Unstructured Adaptive mesh, dynamic and irregular memory access")))),(0,l.kt)("h2",{id:"workload-metrics"},"Workload Metrics"),(0,l.kt)("p",null,"The following metrics are examples of those captured by the Virtual Client when running the NAS Parallel Benchmarks workloads."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Scenario Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Value (min)"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Value (max)"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Value (avg)"),(0,l.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MPI bt.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"ExecutionTime"),(0,l.kt)("td",{parentName:"tr",align:null},"21671.77"),(0,l.kt)("td",{parentName:"tr",align:null},"30122.8"),(0,l.kt)("td",{parentName:"tr",align:null},"25266.78541666667"),(0,l.kt)("td",{parentName:"tr",align:null},"Seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MPI bt.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s total"),(0,l.kt)("td",{parentName:"tr",align:null},"1936.6"),(0,l.kt)("td",{parentName:"tr",align:null},"2691.79"),(0,l.kt)("td",{parentName:"tr",align:null},"2325.0579166666668"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MPI bt.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s/process"),(0,l.kt)("td",{parentName:"tr",align:null},"968.3"),(0,l.kt)("td",{parentName:"tr",align:null},"1345.89"),(0,l.kt)("td",{parentName:"tr",align:null},"1162.5279166666667"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MPI cg.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"ExecutionTime"),(0,l.kt)("td",{parentName:"tr",align:null},"3152.5"),(0,l.kt)("td",{parentName:"tr",align:null},"6436.32"),(0,l.kt)("td",{parentName:"tr",align:null},"3843.4735714285718"),(0,l.kt)("td",{parentName:"tr",align:null},"Seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MPI cg.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s total"),(0,l.kt)("td",{parentName:"tr",align:null},"565.99"),(0,l.kt)("td",{parentName:"tr",align:null},"1155.56"),(0,l.kt)("td",{parentName:"tr",align:null},"977.1558928571428"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MPI cg.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s/process"),(0,l.kt)("td",{parentName:"tr",align:null},"283.0"),(0,l.kt)("td",{parentName:"tr",align:null},"577.78"),(0,l.kt)("td",{parentName:"tr",align:null},"488.5780952380952"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MPI ep.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"ExecutionTime"),(0,l.kt)("td",{parentName:"tr",align:null},"658.63"),(0,l.kt)("td",{parentName:"tr",align:null},"1983.27"),(0,l.kt)("td",{parentName:"tr",align:null},"850.881388888889"),(0,l.kt)("td",{parentName:"tr",align:null},"Seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MPI ep.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s total"),(0,l.kt)("td",{parentName:"tr",align:null},"69.3"),(0,l.kt)("td",{parentName:"tr",align:null},"208.68"),(0,l.kt)("td",{parentName:"tr",align:null},"186.3202777777778"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MPI ep.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s/process"),(0,l.kt)("td",{parentName:"tr",align:null},"34.65"),(0,l.kt)("td",{parentName:"tr",align:null},"104.34"),(0,l.kt)("td",{parentName:"tr",align:null},"93.15993055555555"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MPI ft.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"ExecutionTime"),(0,l.kt)("td",{parentName:"tr",align:null},"3253.22"),(0,l.kt)("td",{parentName:"tr",align:null},"5572.11"),(0,l.kt)("td",{parentName:"tr",align:null},"4044.5483333333338"),(0,l.kt)("td",{parentName:"tr",align:null},"Seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MPI ft.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s total"),(0,l.kt)("td",{parentName:"tr",align:null},"1608.68"),(0,l.kt)("td",{parentName:"tr",align:null},"2755.34"),(0,l.kt)("td",{parentName:"tr",align:null},"2267.0758333333335"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MPI ft.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s/process"),(0,l.kt)("td",{parentName:"tr",align:null},"804.34"),(0,l.kt)("td",{parentName:"tr",align:null},"1377.67"),(0,l.kt)("td",{parentName:"tr",align:null},"1133.5383333333332"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MPI is.C.x"),(0,l.kt)("td",{parentName:"tr",align:null},"ExecutionTime"),(0,l.kt)("td",{parentName:"tr",align:null},"3.18"),(0,l.kt)("td",{parentName:"tr",align:null},"18.98"),(0,l.kt)("td",{parentName:"tr",align:null},"4.746808510638298"),(0,l.kt)("td",{parentName:"tr",align:null},"Seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MPI is.C.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s total"),(0,l.kt)("td",{parentName:"tr",align:null},"70.71"),(0,l.kt)("td",{parentName:"tr",align:null},"422.28"),(0,l.kt)("td",{parentName:"tr",align:null},"340.1694326241135"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MPI is.C.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s/process"),(0,l.kt)("td",{parentName:"tr",align:null},"35.36"),(0,l.kt)("td",{parentName:"tr",align:null},"211.14"),(0,l.kt)("td",{parentName:"tr",align:null},"170.08503546099289"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MPI lu.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"ExecutionTime"),(0,l.kt)("td",{parentName:"tr",align:null},"4289.31"),(0,l.kt)("td",{parentName:"tr",align:null},"6640.01"),(0,l.kt)("td",{parentName:"tr",align:null},"4633.097168141593"),(0,l.kt)("td",{parentName:"tr",align:null},"Seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MPI lu.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s total"),(0,l.kt)("td",{parentName:"tr",align:null},"6008.71"),(0,l.kt)("td",{parentName:"tr",align:null},"9301.7"),(0,l.kt)("td",{parentName:"tr",align:null},"8731.985309734511"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MPI lu.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s/process"),(0,l.kt)("td",{parentName:"tr",align:null},"3004.36"),(0,l.kt)("td",{parentName:"tr",align:null},"4650.85"),(0,l.kt)("td",{parentName:"tr",align:null},"4365.992389380531"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OMP bt.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"ExecutionTime"),(0,l.kt)("td",{parentName:"tr",align:null},"1100.69"),(0,l.kt)("td",{parentName:"tr",align:null},"5811.24"),(0,l.kt)("td",{parentName:"tr",align:null},"3684.0739181286546"),(0,l.kt)("td",{parentName:"tr",align:null},"Seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OMP bt.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s total"),(0,l.kt)("td",{parentName:"tr",align:null},"10038.43"),(0,l.kt)("td",{parentName:"tr",align:null},"52999.25"),(0,l.kt)("td",{parentName:"tr",align:null},"17673.181461988304"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OMP bt.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s/thread"),(0,l.kt)("td",{parentName:"tr",align:null},"927.77"),(0,l.kt)("td",{parentName:"tr",align:null},"3541.78"),(0,l.kt)("td",{parentName:"tr",align:null},"2612.988596491228"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OMP cg.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"ExecutionTime"),(0,l.kt)("td",{parentName:"tr",align:null},"765.05"),(0,l.kt)("td",{parentName:"tr",align:null},"3576.5"),(0,l.kt)("td",{parentName:"tr",align:null},"1400.8384210526318"),(0,l.kt)("td",{parentName:"tr",align:null},"Seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OMP cg.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s total"),(0,l.kt)("td",{parentName:"tr",align:null},"1018.56"),(0,l.kt)("td",{parentName:"tr",align:null},"4761.68"),(0,l.kt)("td",{parentName:"tr",align:null},"3013.099298245614"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OMP cg.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s/thread"),(0,l.kt)("td",{parentName:"tr",align:null},"63.66"),(0,l.kt)("td",{parentName:"tr",align:null},"297.6"),(0,l.kt)("td",{parentName:"tr",align:null},"188.31877192982456"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OMP dc.B.x"),(0,l.kt)("td",{parentName:"tr",align:null},"ExecutionTime"),(0,l.kt)("td",{parentName:"tr",align:null},"150.25"),(0,l.kt)("td",{parentName:"tr",align:null},"956.53"),(0,l.kt)("td",{parentName:"tr",align:null},"290.0096078431372"),(0,l.kt)("td",{parentName:"tr",align:null},"Seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OMP dc.B.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s total"),(0,l.kt)("td",{parentName:"tr",align:null},"0.62"),(0,l.kt)("td",{parentName:"tr",align:null},"3.96"),(0,l.kt)("td",{parentName:"tr",align:null},"2.5537254901960786"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OMP dc.B.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s/thread"),(0,l.kt)("td",{parentName:"tr",align:null},"0.04"),(0,l.kt)("td",{parentName:"tr",align:null},"0.68"),(0,l.kt)("td",{parentName:"tr",align:null},"0.3661764705882352"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OMP ep.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"ExecutionTime"),(0,l.kt)("td",{parentName:"tr",align:null},"83.92"),(0,l.kt)("td",{parentName:"tr",align:null},"338.17"),(0,l.kt)("td",{parentName:"tr",align:null},"312.5922929936306"),(0,l.kt)("td",{parentName:"tr",align:null},"Seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OMP ep.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s total"),(0,l.kt)("td",{parentName:"tr",align:null},"406.41"),(0,l.kt)("td",{parentName:"tr",align:null},"1637.72"),(0,l.kt)("td",{parentName:"tr",align:null},"480.22484076433127"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OMP ep.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s/thread"),(0,l.kt)("td",{parentName:"tr",align:null},"25.79"),(0,l.kt)("td",{parentName:"tr",align:null},"103.16"),(0,l.kt)("td",{parentName:"tr",align:null},"80.0843949044586"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OMP is.C.x"),(0,l.kt)("td",{parentName:"tr",align:null},"ExecutionTime"),(0,l.kt)("td",{parentName:"tr",align:null},"0.35"),(0,l.kt)("td",{parentName:"tr",align:null},"2.49"),(0,l.kt)("td",{parentName:"tr",align:null},"1.3286624203821658"),(0,l.kt)("td",{parentName:"tr",align:null},"Seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OMP is.C.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s total"),(0,l.kt)("td",{parentName:"tr",align:null},"539.73"),(0,l.kt)("td",{parentName:"tr",align:null},"3841.83"),(0,l.kt)("td",{parentName:"tr",align:null},"1126.8812101910829"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OMP is.C.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s/thread"),(0,l.kt)("td",{parentName:"tr",align:null},"33.73"),(0,l.kt)("td",{parentName:"tr",align:null},"271.12"),(0,l.kt)("td",{parentName:"tr",align:null},"197.51891719745223"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OMP lu.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"ExecutionTime"),(0,l.kt)("td",{parentName:"tr",align:null},"618.09"),(0,l.kt)("td",{parentName:"tr",align:null},"2992.73"),(0,l.kt)("td",{parentName:"tr",align:null},"1967.2742666666669"),(0,l.kt)("td",{parentName:"tr",align:null},"Seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OMP lu.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s total"),(0,l.kt)("td",{parentName:"tr",align:null},"13331.59"),(0,l.kt)("td",{parentName:"tr",align:null},"64550.85"),(0,l.kt)("td",{parentName:"tr",align:null},"22582.2706"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OMP lu.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s/thread"),(0,l.kt)("td",{parentName:"tr",align:null},"961.44"),(0,l.kt)("td",{parentName:"tr",align:null},"4556.67"),(0,l.kt)("td",{parentName:"tr",align:null},"3596.0266666666668"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OMP mg.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"ExecutionTime"),(0,l.kt)("td",{parentName:"tr",align:null},"77.26"),(0,l.kt)("td",{parentName:"tr",align:null},"450.16"),(0,l.kt)("td",{parentName:"tr",align:null},"194.33686274509805"),(0,l.kt)("td",{parentName:"tr",align:null},"Seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OMP mg.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s total"),(0,l.kt)("td",{parentName:"tr",align:null},"6917.2"),(0,l.kt)("td",{parentName:"tr",align:null},"40304.46"),(0,l.kt)("td",{parentName:"tr",align:null},"21151.509411764706"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OMP mg.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s/thread"),(0,l.kt)("td",{parentName:"tr",align:null},"432.32"),(0,l.kt)("td",{parentName:"tr",align:null},"2519.03"),(0,l.kt)("td",{parentName:"tr",align:null},"1321.969411764706"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OMP sp.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"ExecutionTime"),(0,l.kt)("td",{parentName:"tr",align:null},"915.28"),(0,l.kt)("td",{parentName:"tr",align:null},"5499.23"),(0,l.kt)("td",{parentName:"tr",align:null},"2607.270882352942"),(0,l.kt)("td",{parentName:"tr",align:null},"Seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OMP sp.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s total"),(0,l.kt)("td",{parentName:"tr",align:null},"5370.93"),(0,l.kt)("td",{parentName:"tr",align:null},"32269.92"),(0,l.kt)("td",{parentName:"tr",align:null},"13349.254705882353"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OMP sp.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s/thread"),(0,l.kt)("td",{parentName:"tr",align:null},"474.1"),(0,l.kt)("td",{parentName:"tr",align:null},"2464.48"),(0,l.kt)("td",{parentName:"tr",align:null},"1727.7460784313724"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OMP ua.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"ExecutionTime"),(0,l.kt)("td",{parentName:"tr",align:null},"804.09"),(0,l.kt)("td",{parentName:"tr",align:null},"3669.81"),(0,l.kt)("td",{parentName:"tr",align:null},"2349.879591836735"),(0,l.kt)("td",{parentName:"tr",align:null},"Seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OMP ua.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s total"),(0,l.kt)("td",{parentName:"tr",align:null},"47.36"),(0,l.kt)("td",{parentName:"tr",align:null},"216.12"),(0,l.kt)("td",{parentName:"tr",align:null},"83.12265306122447"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OMP ua.D.x"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s/thread"),(0,l.kt)("td",{parentName:"tr",align:null},"3.42"),(0,l.kt)("td",{parentName:"tr",align:null},"16.42"),(0,l.kt)("td",{parentName:"tr",align:null},"11.545204081632655"),(0,l.kt)("td",{parentName:"tr",align:null},"Mop/s")))),(0,l.kt)("h2",{id:"packaging-and-setup"},"Packaging and Setup"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Create "suite.def" & "make.def" using the templates given for example.\na. For Multiple machines go to folder "NPI-MPI/config" folder.\nb. For Single machine go to folder "NPI-OMP/config" folder.')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Build benchmarks using ",(0,l.kt)("inlineCode",{parentName:"p"},"make suite")," command.\na. For Multiple machines build benchmarks in 'NPB-MPI' folder by going to it as working directory.\nb. For Single machine build benchmarks in 'NPB-OMP' folder by going to it as working directory.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Set Environment variable using the command :\n",(0,l.kt)("inlineCode",{parentName:"p"},"export OMP_NUM_THREADS=<available_number_of_physical_cores>")," (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"export OMP_NUM_THREADS=4"),")")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"For multi-system scenarios setup passwordless SSH. See the blog post ",(0,l.kt)("a",{parentName:"p",href:"https://linuxize.com/post/how-to-setup-passwordless-ssh-login/"},"here")," for examples. Skip\nthis step if you are running a single-system scenario.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run the benchmark:\na. For multi-system scenarios, run command ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo runuser -l <Username> -c 'mpiexec -np <Number_of_Machines> -host <Host_IP_Address> <benchmarkpath>'"),".\nb. For Single machine to run a benchmark run command ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo <benchmarkpath>'"),"."))),(0,l.kt)("h2",{id:"common-issues"},"Common Issues"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Before downloading any dependency run command ",(0,l.kt)("inlineCode",{parentName:"li"},"sudo apt-get update")," ."),(0,l.kt)("li",{parentName:"ul"},"Before running ",(0,l.kt)("inlineCode",{parentName:"li"},"mpiexec")," setup passwordless SSH. OpenMPI does not works without it."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sudo mpiexec")," does not works because it uses 'root' user which does not have passwordless login permission."),(0,l.kt)("li",{parentName:"ul"},"To run through sudo use ",(0,l.kt)("inlineCode",{parentName:"li"},"sudo runuser -l <Username> ... "))))}o.isMDXComponent=!0}}]);