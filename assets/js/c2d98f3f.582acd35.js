"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[8537],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>d});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=u(r),d=a,s=k["".concat(p,".").concat(d)]||k[d]||c[d]||l;return r?n.createElement(s,i(i({ref:e},m),{},{components:r})):n.createElement(s,i({ref:e},m))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},9233:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={},i="Network Ping/ICMP Workload Metrics",o={unversionedId:"workloads/network-ping/NetworkPingMetrics",id:"workloads/network-ping/NetworkPingMetrics",title:"Network Ping/ICMP Workload Metrics",description:"The following document illustrates the type of results that are emitted by the Network Ping workload and captured by the",source:"@site/docs/workloads/network-ping/NetworkPingMetrics.md",sourceDirName:"workloads/network-ping",slug:"/workloads/network-ping/NetworkPingMetrics",permalink:"/docs/workloads/network-ping/NetworkPingMetrics",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/docs/workloads/network-ping/NetworkPingMetrics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Network Ping/ICMP",permalink:"/docs/workloads/network-ping/"},next:{title:"Network Ping/ICMP Workload Profiles",permalink:"/docs/workloads/network-ping/NetworkPingProfiles"}},p={},u=[{value:"System Metrics",id:"system-metrics",level:3},{value:"Workload-Specific Metrics",id:"workload-specific-metrics",level:3}],m={toc:u};function c(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"network-pingicmp-workload-metrics"},"Network Ping/ICMP Workload Metrics"),(0,a.kt)("p",null,"The following document illustrates the type of results that are emitted by the Network Ping workload and captured by the\nVirtual Client for net impact analysis."),(0,a.kt)("h3",{id:"system-metrics"},"System Metrics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./PerformanceCounterMetrics.md"},"Performance Counters")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./PowerMetrics.md"},"Power/Temperature Measurements"))),(0,a.kt)("h3",{id:"workload-specific-metrics"},"Workload-Specific Metrics"),(0,a.kt)("p",null,"The following metrics are emitted by the Network Ping workload itself."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Execution Profile"),(0,a.kt)("th",{parentName:"tr",align:null},"Test Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Example Value (min)"),(0,a.kt)("th",{parentName:"tr",align:null},"Example Value (max)"),(0,a.kt)("th",{parentName:"tr",align:null},"Example Value (avg)"),(0,a.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PERF-NETWORK-PING.json"),(0,a.kt)("td",{parentName:"tr",align:null},"Network Ping"),(0,a.kt)("td",{parentName:"tr",align:null},"# of blips"),(0,a.kt)("td",{parentName:"tr",align:null},"1.0"),(0,a.kt)("td",{parentName:"tr",align:null},"1.0"),(0,a.kt)("td",{parentName:"tr",align:null},"1.0"),(0,a.kt)("td",{parentName:"tr",align:null},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PERF-NETWORK-PING.json"),(0,a.kt)("td",{parentName:"tr",align:null},"Network Ping"),(0,a.kt)("td",{parentName:"tr",align:null},"avg. number of connections"),(0,a.kt)("td",{parentName:"tr",align:null},"7.666666666666667"),(0,a.kt)("td",{parentName:"tr",align:null},"117.06333333333333"),(0,a.kt)("td",{parentName:"tr",align:null},"11.180472020509118"),(0,a.kt)("td",{parentName:"tr",align:null},"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PERF-NETWORK-PING.json"),(0,a.kt)("td",{parentName:"tr",align:null},"Network Ping"),(0,a.kt)("td",{parentName:"tr",align:null},"avg. round trip time"),(0,a.kt)("td",{parentName:"tr",align:null},"0.5066666666666667"),(0,a.kt)("td",{parentName:"tr",align:null},"190.85333333333333"),(0,a.kt)("td",{parentName:"tr",align:null},"87.0910239051444"),(0,a.kt)("td",{parentName:"tr",align:null},"milliseconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PERF-NETWORK-PING.json"),(0,a.kt)("td",{parentName:"tr",align:null},"Network Ping"),(0,a.kt)("td",{parentName:"tr",align:null},"blip duration"),(0,a.kt)("td",{parentName:"tr",align:null},"1019.0"),(0,a.kt)("td",{parentName:"tr",align:null},"8016.0"),(0,a.kt)("td",{parentName:"tr",align:null},"2017.125"),(0,a.kt)("td",{parentName:"tr",align:null},"milliseconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PERF-NETWORK-PING.json"),(0,a.kt)("td",{parentName:"tr",align:null},"Network Ping"),(0,a.kt)("td",{parentName:"tr",align:null},"dropped pings"),(0,a.kt)("td",{parentName:"tr",align:null},"1.0"),(0,a.kt)("td",{parentName:"tr",align:null},"8.0"),(0,a.kt)("td",{parentName:"tr",align:null},"2.0"),(0,a.kt)("td",{parentName:"tr",align:null},"count")))))}c.isMDXComponent=!0}}]);