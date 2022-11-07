"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[4538],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>c});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,u=m(t,["components","mdxType","originalType","parentName"]),k=o(n),c=l,N=k["".concat(p,".").concat(c)]||k[c]||d[c]||r;return n?a.createElement(N,i(i({ref:e},u),{},{components:n})):a.createElement(N,i({ref:e},u))}));function c(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=k;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m.mdxType="string"==typeof t?t:l,i[1]=m;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2343:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>m,toc:()=>o});var a=n(7462),l=(n(7294),n(3905));const r={},i="LAPACK Workload Metrics",m={unversionedId:"workloads/lapack/LAPACKMetrics",id:"workloads/lapack/LAPACKMetrics",title:"LAPACK Workload Metrics",description:"The following document illustrates the type of results that are emitted by the LAPACK workload and captured by the",source:"@site/docs/workloads/lapack/LAPACKMetrics.md",sourceDirName:"workloads/lapack",slug:"/workloads/lapack/LAPACKMetrics",permalink:"/docs/workloads/lapack/LAPACKMetrics",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/docs/workloads/lapack/LAPACKMetrics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LAPACK Workload",permalink:"/docs/workloads/lapack/"},next:{title:"LAPACK Workload Profiles",permalink:"/docs/workloads/lapack/LAPACKProfiles"}},p={},o=[{value:"System Metrics",id:"system-metrics",level:3},{value:"Workload-Specific Metrics",id:"workload-specific-metrics",level:3}],u={toc:o};function d(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"lapack-workload-metrics"},"LAPACK Workload Metrics"),(0,l.kt)("p",null,"The following document illustrates the type of results that are emitted by the LAPACK workload and captured by the\nVirtual Client for net impact analysis."),(0,l.kt)("h3",{id:"system-metrics"},"System Metrics"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./PerformanceCounterMetrics.md"},"Performance Counters")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./PowerMetrics.md"},"Power/Temperature Measurements"))),(0,l.kt)("h3",{id:"workload-specific-metrics"},"Workload-Specific Metrics"),(0,l.kt)("p",null,"The following metrics are emitted by the LAPACK workload itself."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Execution Profile"),(0,l.kt)("th",{parentName:"tr",align:null},"Test Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Value (avg)"),(0,l.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-CPU-LAPACK (win-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"LAPACK"),(0,l.kt)("td",{parentName:"tr",align:null},"compute_time_LIN_Single_Precision"),(0,l.kt)("td",{parentName:"tr",align:null},"4.31"),(0,l.kt)("td",{parentName:"tr",align:null},"seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-CPU-LAPACK (win-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"LAPACK"),(0,l.kt)("td",{parentName:"tr",align:null},"compute_time_LIN_Double_Precision"),(0,l.kt)("td",{parentName:"tr",align:null},"4.47"),(0,l.kt)("td",{parentName:"tr",align:null},"seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-CPU-LAPACK (win-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"LAPACK"),(0,l.kt)("td",{parentName:"tr",align:null},"compute_time_LIN_Complex"),(0,l.kt)("td",{parentName:"tr",align:null},"21.42"),(0,l.kt)("td",{parentName:"tr",align:null},"seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-CPU-LAPACK (win-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"LAPACK"),(0,l.kt)("td",{parentName:"tr",align:null},"compute_time_LIN_Complex_Double"),(0,l.kt)("td",{parentName:"tr",align:null},"34.64"),(0,l.kt)("td",{parentName:"tr",align:null},"seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-CPU-LAPACK (win-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"LAPACK"),(0,l.kt)("td",{parentName:"tr",align:null},"compute_time_EIG_Single_Precision"),(0,l.kt)("td",{parentName:"tr",align:null},"6.72"),(0,l.kt)("td",{parentName:"tr",align:null},"seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-CPU-LAPACK (win-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"LAPACK"),(0,l.kt)("td",{parentName:"tr",align:null},"compute_time_EIG_Double_Precision"),(0,l.kt)("td",{parentName:"tr",align:null},"8.6499999999999986"),(0,l.kt)("td",{parentName:"tr",align:null},"seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-CPU-LAPACK (win-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"LAPACK"),(0,l.kt)("td",{parentName:"tr",align:null},"compute_time_EIG_Complex"),(0,l.kt)("td",{parentName:"tr",align:null},"15.889999999999999"),(0,l.kt)("td",{parentName:"tr",align:null},"seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-CPU-LAPACK (win-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"LAPACK"),(0,l.kt)("td",{parentName:"tr",align:null},"compute_time_EIG_Complex_Double"),(0,l.kt)("td",{parentName:"tr",align:null},"24.129999999999995"),(0,l.kt)("td",{parentName:"tr",align:null},"seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-CPU-LAPACK (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"LAPACK"),(0,l.kt)("td",{parentName:"tr",align:null},"compute_time_LIN_Single_Precision"),(0,l.kt)("td",{parentName:"tr",align:null},"4.33"),(0,l.kt)("td",{parentName:"tr",align:null},"seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-CPU-LAPACK (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"LAPACK"),(0,l.kt)("td",{parentName:"tr",align:null},"compute_time_LIN_Double_Precision"),(0,l.kt)("td",{parentName:"tr",align:null},"4.4"),(0,l.kt)("td",{parentName:"tr",align:null},"seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-CPU-LAPACK (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"LAPACK"),(0,l.kt)("td",{parentName:"tr",align:null},"compute_time_LIN_Complex"),(0,l.kt)("td",{parentName:"tr",align:null},"11.26"),(0,l.kt)("td",{parentName:"tr",align:null},"seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-CPU-LAPACK (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"LAPACK"),(0,l.kt)("td",{parentName:"tr",align:null},"compute_time_LIN_Complex_Double"),(0,l.kt)("td",{parentName:"tr",align:null},"12.13"),(0,l.kt)("td",{parentName:"tr",align:null},"seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-CPU-LAPACK (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"LAPACK"),(0,l.kt)("td",{parentName:"tr",align:null},"compute_time_EIG_Single_Precision"),(0,l.kt)("td",{parentName:"tr",align:null},"6.75"),(0,l.kt)("td",{parentName:"tr",align:null},"seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-CPU-LAPACK (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"LAPACK"),(0,l.kt)("td",{parentName:"tr",align:null},"compute_time_EIG_Double_Precision"),(0,l.kt)("td",{parentName:"tr",align:null},"8.6699999999999964"),(0,l.kt)("td",{parentName:"tr",align:null},"seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-CPU-LAPACK (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"LAPACK"),(0,l.kt)("td",{parentName:"tr",align:null},"compute_time_EIG_Complex"),(0,l.kt)("td",{parentName:"tr",align:null},"11.689999999999998"),(0,l.kt)("td",{parentName:"tr",align:null},"seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-CPU-LAPACK (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"LAPACK"),(0,l.kt)("td",{parentName:"tr",align:null},"compute_time_EIG_Complex_Double"),(0,l.kt)("td",{parentName:"tr",align:null},"14.149999999999997"),(0,l.kt)("td",{parentName:"tr",align:null},"seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-CPU-LAPACK (win-arm64)"),(0,l.kt)("td",{parentName:"tr",align:null},"LAPACK"),(0,l.kt)("td",{parentName:"tr",align:null},"compute_time_LIN_Single_Precision"),(0,l.kt)("td",{parentName:"tr",align:null},"4.92"),(0,l.kt)("td",{parentName:"tr",align:null},"seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-CPU-LAPACK (win-arm64)"),(0,l.kt)("td",{parentName:"tr",align:null},"LAPACK"),(0,l.kt)("td",{parentName:"tr",align:null},"compute_time_LIN_Double_Precision"),(0,l.kt)("td",{parentName:"tr",align:null},"4.95"),(0,l.kt)("td",{parentName:"tr",align:null},"seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-CPU-LAPACK (win-arm64)"),(0,l.kt)("td",{parentName:"tr",align:null},"LAPACK"),(0,l.kt)("td",{parentName:"tr",align:null},"compute_time_LIN_Complex"),(0,l.kt)("td",{parentName:"tr",align:null},"20.78"),(0,l.kt)("td",{parentName:"tr",align:null},"seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-CPU-LAPACK (win-arm64)"),(0,l.kt)("td",{parentName:"tr",align:null},"LAPACK"),(0,l.kt)("td",{parentName:"tr",align:null},"compute_time_LIN_Complex_Double"),(0,l.kt)("td",{parentName:"tr",align:null},"31.91"),(0,l.kt)("td",{parentName:"tr",align:null},"seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-CPU-LAPACK (win-arm64)"),(0,l.kt)("td",{parentName:"tr",align:null},"LAPACK"),(0,l.kt)("td",{parentName:"tr",align:null},"compute_time_EIG_Single_Precision"),(0,l.kt)("td",{parentName:"tr",align:null},"7.8299999999999974"),(0,l.kt)("td",{parentName:"tr",align:null},"seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-CPU-LAPACK (win-arm64)"),(0,l.kt)("td",{parentName:"tr",align:null},"LAPACK"),(0,l.kt)("td",{parentName:"tr",align:null},"compute_time_EIG_Double_Precision"),(0,l.kt)("td",{parentName:"tr",align:null},"9.8099999999999987"),(0,l.kt)("td",{parentName:"tr",align:null},"seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-CPU-LAPACK (win-arm64)"),(0,l.kt)("td",{parentName:"tr",align:null},"LAPACK"),(0,l.kt)("td",{parentName:"tr",align:null},"compute_time_EIG_Complex_Double"),(0,l.kt)("td",{parentName:"tr",align:null},"24.400000000000006"),(0,l.kt)("td",{parentName:"tr",align:null},"seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-CPU-LAPACK (win-arm64)"),(0,l.kt)("td",{parentName:"tr",align:null},"LAPACK"),(0,l.kt)("td",{parentName:"tr",align:null},"compute_time_EIG_Complex"),(0,l.kt)("td",{parentName:"tr",align:null},"16.800000000000004"),(0,l.kt)("td",{parentName:"tr",align:null},"seconds")))))}d.isMDXComponent=!0}}]);