"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[4298],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),p=d(a),u=r,g=p["".concat(s,".").concat(u)]||p[u]||m[u]||i;return a?n.createElement(g,l(l({ref:e},c),{},{components:a})):n.createElement(g,l({ref:e},c))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4739:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={},l="DCGMI",o={unversionedId:"workloads/dcgmi/dcgmi",id:"workloads/dcgmi/dcgmi",title:"DCGMI",description:"The NVIDIA Data Center GPU Manager (DCGM) has DCGMI (Data Center GPU Management Interface) as a command line utility, which is a software tool for managing and monitoring GPU resources in a data center environment. DCGMi provides administrators with access to a wide range of information about the state of GPUs in their data center, including utilization, temperature, power consumption, and more.",source:"@site/docs/workloads/dcgmi/dcgmi.md",sourceDirName:"workloads/dcgmi",slug:"/workloads/dcgmi/",permalink:"/VirtualClient/docs/workloads/dcgmi/",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/dcgmi/dcgmi.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CtsTraffic Workload Profiles",permalink:"/VirtualClient/docs/workloads/ctstraffic/ctstraffic-profiles"},next:{title:"DCGMI Workload Profiles",permalink:"/VirtualClient/docs/workloads/dcgmi/dcgmi-profiles"}},s={},d=[{value:"Supported Commands",id:"supported-commands",level:2},{value:"DCGMI Output Description",id:"dcgmi-output-description",level:2}],c={toc:d};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dcgmi"},"DCGMI"),(0,r.kt)("p",null,"The NVIDIA Data Center GPU Manager (DCGM) has DCGMI (Data Center GPU Management Interface) as a command line utility, which is a software tool for managing and monitoring GPU resources in a data center environment. DCGMi provides administrators with access to a wide range of information about the state of GPUs in their data center, including utilization, temperature, power consumption, and more."),(0,r.kt)("p",null,"DCGM is part of the Nvidia GPU Deployment Kit and is designed to work with Nvidia's Tesla GPU accelerators, which are commonly used in data centers for high-performance computing and other GPU-accelerated workloads."),(0,r.kt)("p",null,"At its heart, DCGM is an intelligent, lightweight user space library/agent that performs a variety of functions on each host system:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GPU behavior monitoring"),(0,r.kt)("li",{parentName:"ul"},"GPU configuration management"),(0,r.kt)("li",{parentName:"ul"},"GPU policy oversight"),(0,r.kt)("li",{parentName:"ul"},"GPU health and diagnostics"),(0,r.kt)("li",{parentName:"ul"},"GPU accounting and process statistics"),(0,r.kt)("li",{parentName:"ul"},"NVSwitch configuration and monitoring")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/datacenter/dcgm/latest/user-guide/index.html"},"DCGMI user guide")),(0,r.kt)("h2",{id:"supported-commands"},"Supported Commands"),(0,r.kt)("p",null,"DCGM Diagnostics are designed to: "),(0,r.kt)("p",null,"Provide multiple test timeframes to facilitate different preparedness or failure conditions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Level 1 tests to use as a readiness metric"),(0,r.kt)("li",{parentName:"ul"},"Level 2 tests to use as an epilogue on failure"),(0,r.kt)("li",{parentName:"ul"},"Level 3 and Level 4 tests to be run by an administrator as post-mortem.")),(0,r.kt)("p",null,"It is a single tool to discover deployment, system software and hardware configuration issues, basic diagnostics, integration issues, and relative system performance."),(0,r.kt)("p",null,'Commands supported are "dcgmi diag", "dcgmi discovery","dcgmi fieldgroup", " dcgmi group", "dcgmi modules", "dcgmi health" and CUDA Generator scenario.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dcgmi diag -r {level} -j\ndcgmi discovery -l\ndcgmi fieldgroup -l\ndcgmi group -l\ndcgmi modules -l\ndcgmi health -c -j\nCUDA generator scenario:\n/usr/bin/dcgmproftester11 --no-dcgm-validation -t {FieldID} -d 10\ndcgmi dmon -e {ListOfFieldIDs} -c 15\n")),(0,r.kt)("p",null,"Please create a feature request if you need support for any other commands."),(0,r.kt)("h2",{id:"dcgmi-output-description"},"DCGMI Output Description"),(0,r.kt)("p",null,"The following section describes the various counters/metrics that are available with the dcgmi toolset."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deployment_Denylist"),(0,r.kt)("td",{parentName:"tr",align:null},"checks if machine has expected deny list of processes to run on GPU"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deployment_NVML Library"),(0,r.kt)("td",{parentName:"tr",align:null},"NVML library access and versioning check"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deployment_CUDA Main Library"),(0,r.kt)("td",{parentName:"tr",align:null},"CUDA library access and versioning"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deployment_Permissions and OS Blocks"),(0,r.kt)("td",{parentName:"tr",align:null},"checks permissions for a specific GPU and enforce OS level block to ensure GPU resources are being used in secure way"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deployment_Persistence Mode"),(0,r.kt)("td",{parentName:"tr",align:null},"checks the behaviour of GPU persistence mode, which allows GPUs to maintain their state even when a process terminates or the GPU is reset"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deployment_Environment Variables"),(0,r.kt)("td",{parentName:"tr",align:null},"checks the behaviour of environment variables, which are used to control and configure the behaviour of DCGM."),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deployment_Page Retirement/Row Remap"),(0,r.kt)("td",{parentName:"tr",align:null},"checks the behaviour of Page Retirement and Row Remap, which are advanced memory management features that can help to improve the reliability and stability of GPU-based applications."),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deployment_Graphics Processes"),(0,r.kt)("td",{parentName:"tr",align:null},"checks the behaviour of graphics processes, which are processes that are run on GPUs to perform graphical or computational tasks."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Integration_PCIe"),(0,r.kt)("td",{parentName:"tr",align:null},"Verify PCIe connection, Monitor PCIe performance, Verify results"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deployment_Inforom"),(0,r.kt)("td",{parentName:"tr",align:null},"checks the behavior of the Inforom, which is a chip located on the GPU that provides information about the GPU, its configuration, and its performance."),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hardware_GPU Memory"),(0,r.kt)("td",{parentName:"tr",align:null},"checks the GPU memory behaviour which is used to store data and perform computations."),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hardware_Diagnostic"),(0,r.kt)("td",{parentName:"tr",align:null},"diagnose any issues with the GPU and its components"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hardware_Pulse Test"),(0,r.kt)("td",{parentName:"tr",align:null},"performance test that is used to check the performance of the GPU"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stress_Targeted Stress"),(0,r.kt)("td",{parentName:"tr",align:null},"check the performance and stability under heavy load."),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stress_Targeted Power"),(0,r.kt)("td",{parentName:"tr",align:null},"check the power consumption under different load conditions"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hardware_EUD Test"),(0,r.kt)("td",{parentName:"tr",align:null},"check the error detection and correction capabilities of the GPU memory."),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stress_Memory Bandwidth"),(0,r.kt)("td",{parentName:"tr",align:null},"check the memory bandwidth performance of a GPU"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stress_Memtest"),(0,r.kt)("td",{parentName:"tr",align:null},"stresses the GPU memory in order to identify any issues or errors"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NOTE: Value 1,-1,0 indicates pass, skip, fail of tests respectively.\n")))}m.isMDXComponent=!0}}]);