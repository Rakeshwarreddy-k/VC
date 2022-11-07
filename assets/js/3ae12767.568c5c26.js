"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[5055],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>d});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var m=a.createContext({}),p=function(t){var e=a.useContext(m),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,m=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=p(r),d=n,k=u["".concat(m,".").concat(d)]||u[d]||c[d]||l;return r?a.createElement(k,o(o({ref:e},s),{},{components:r})):a.createElement(k,o({ref:e},s))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4500:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const l={},o="SPECjvm Workload Metrics",i={unversionedId:"workloads/specjvm/SPECjvmMetrics",id:"workloads/specjvm/SPECjvmMetrics",title:"SPECjvm Workload Metrics",description:"The following document illustrates the type of results that are emitted by the SPECjvm workload and captured by the",source:"@site/docs/workloads/specjvm/SPECjvmMetrics.md",sourceDirName:"workloads/specjvm",slug:"/workloads/specjvm/SPECjvmMetrics",permalink:"/docs/workloads/specjvm/SPECjvmMetrics",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/docs/workloads/specjvm/SPECjvmMetrics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SPECjvm Workload",permalink:"/docs/workloads/specjvm/"},next:{title:"SPECjvm Workload Profiles",permalink:"/docs/workloads/specjvm/SPECjvmProfiles"}},m={},p=[{value:"System Metrics",id:"system-metrics",level:3},{value:"Workload-Specific Metrics",id:"workload-specific-metrics",level:3},{value:"Metrics",id:"metrics",level:4}],s={toc:p};function c(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"specjvm-workload-metrics"},"SPECjvm Workload Metrics"),(0,n.kt)("p",null,"The following document illustrates the type of results that are emitted by the SPECjvm workload and captured by the\nVirtual Client for net impact analysis."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.spec.org/jvm2008/docs/benchmarks/index.html"},"SPECjvm Benchmarks"))),(0,n.kt)("h3",{id:"system-metrics"},"System Metrics"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./PerformanceCounterMetrics.md"},"Performance Counters")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./PowerMetrics.md"},"Power/Temperature Measurements"),"  ")),(0,n.kt)("h3",{id:"workload-specific-metrics"},"Workload-Specific Metrics"),(0,n.kt)("p",null,"The following metrics are captured during the operations of the SuperBenchmark workload."),(0,n.kt)("h4",{id:"metrics"},"Metrics"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"compress"),(0,n.kt)("td",{parentName:"tr",align:null},"ops/m"),(0,n.kt)("td",{parentName:"tr",align:null},"Compress workload operations per minute.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"crypto"),(0,n.kt)("td",{parentName:"tr",align:null},"ops/m"),(0,n.kt)("td",{parentName:"tr",align:null},"Crypto workload operations per minute.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"derby"),(0,n.kt)("td",{parentName:"tr",align:null},"ops/m"),(0,n.kt)("td",{parentName:"tr",align:null},"Derby workload operations per minute.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mpegaudio"),(0,n.kt)("td",{parentName:"tr",align:null},"ops/m"),(0,n.kt)("td",{parentName:"tr",align:null},"Mpegaudio workload operations per minute.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"scimark.large"),(0,n.kt)("td",{parentName:"tr",align:null},"ops/m"),(0,n.kt)("td",{parentName:"tr",align:null},"Scimark.large workload operations per minute.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"scimark.small"),(0,n.kt)("td",{parentName:"tr",align:null},"ops/m"),(0,n.kt)("td",{parentName:"tr",align:null},"Scimark.small workload operations per minute.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"serial"),(0,n.kt)("td",{parentName:"tr",align:null},"ops/m"),(0,n.kt)("td",{parentName:"tr",align:null},"Serial workload operations per minute.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sunflow"),(0,n.kt)("td",{parentName:"tr",align:null},"ops/m"),(0,n.kt)("td",{parentName:"tr",align:null},"Sunflow workload operations per minute.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Noncompliant composite result"),(0,n.kt)("td",{parentName:"tr",align:null},"ops/m"),(0,n.kt)("td",{parentName:"tr",align:null},"Summary of the composite result.                    W")))))}c.isMDXComponent=!0}}]);