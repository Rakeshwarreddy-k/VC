"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[7929],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=i,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var d=2;d<o;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8340:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(7462),i=(r(7294),r(3905));const o={id:"redis",sidebar_position:1},a="REDIS Workload",s={unversionedId:"workloads/redis/redis",id:"workloads/redis/redis",title:"REDIS Workload",description:"Redis is an open source (BSD licensed), in-memory data structure store used as a database,",source:"@site/docs/workloads/redis/Redis.md",sourceDirName:"workloads/redis",slug:"/workloads/redis/",permalink:"/docs/workloads/redis/",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/docs/workloads/redis/Redis.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"redis",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"OpenSSL Workload Profiles",permalink:"/docs/workloads/openssl/OpenSSLProfiles"},next:{title:"Redis Workload Metrics",permalink:"/docs/workloads/redis/RedisMetrics"}},l={},d=[{value:"What is Being Tested?",id:"what-is-being-tested",level:3},{value:"1. Memtier Benchmarking Tool :",id:"1-memtier-benchmarking-tool-",level:4},{value:"2.Redis Benchmarking Tool:",id:"2redis-benchmarking-tool",level:4},{value:"Supported Platforms",id:"supported-platforms",level:3},{value:"Supported Distros",id:"supported-distros",level:3}],c={toc:d};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"redis-workload"},"REDIS Workload"),(0,i.kt)("p",null,"Redis is an open source (BSD licensed), in-memory data structure store used as a database,\ncache, message broker, and streaming engine. Redis works with an in-memory dataset. It is\na client-server model workload in which Redis acts as server. There are different tools that acts are clients.\nTwo of the widely used tools are onboarded into Virtual Client. They are"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://redis.com/blog/memtier_benchmark-a-high-throughput-benchmarking-tool-for-redis-memcached/"},"Memtier Benchmarking Tool")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://redis.io/docs/reference/optimization/benchmarks/"},"Redis Benchmarking Tool"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redis.io/docs/about/"},"Official Redis Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/redis/redis"},"Redis Github Repo"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"what-is-being-tested"},"What is Being Tested?"),(0,i.kt)("h4",{id:"1-memtier-benchmarking-tool-"},"1. Memtier Benchmarking Tool :"),(0,i.kt)("p",null,"This tool can be used to generate various traffic patterns against Redis instances.\nIt provides a robust set of customization and reporting capabilities all wrapped into a convenient\nand easy-to-use command-line interface. It performs GET and SET operations on to the Redis Server Instances\nand gives percentile latency distribution and Throughput."),(0,i.kt)("h4",{id:"2redis-benchmarking-tool"},"2.Redis Benchmarking Tool:"),(0,i.kt)("p",null,"Redis includes the redis-benchmark utility that simulates running commands done by N clients\nwhile at the same time sending M total queries. The utility provides a default set of tests,\nor you can supply a custom set of tests.Each of this tests generate load against the server and\ngives percentile latency distribution and Throughput."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"supported-platforms"},"Supported Platforms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Linux x64"),(0,i.kt)("li",{parentName:"ul"},"Linux arm64")),(0,i.kt)("h3",{id:"supported-distros"},"Supported Distros"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ubuntu"),(0,i.kt)("li",{parentName:"ul"},"Debian"),(0,i.kt)("li",{parentName:"ul"},"CentOS8"),(0,i.kt)("li",{parentName:"ul"},"RHEL8")))}u.isMDXComponent=!0}}]);