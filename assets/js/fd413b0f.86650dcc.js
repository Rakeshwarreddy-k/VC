"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[4261],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),c=n,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return a?r.createElement(k,i(i({ref:t},m),{},{components:a})):r.createElement(k,i({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4828:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const l={},i="Compression Workloads",o={unversionedId:"workloads/compression/Compression",id:"workloads/compression/Compression",title:"Compression Workloads",description:"Virtual Client host different types of compression and decompression workloads which are:",source:"@site/docs/workloads/compression/Compression.md",sourceDirName:"workloads/compression",slug:"/workloads/compression/",permalink:"/docs/workloads/compression/",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/docs/workloads/compression/Compression.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AspNetBench Workload Profiles",permalink:"/docs/workloads/aspnetbench/AspNetBenchProfiles"},next:{title:"Compression/Decompression Workloads Metrics",permalink:"/docs/workloads/compression/CompressionMetrics"}},p={},s=[{value:"Documentation",id:"documentation",level:3},{value:"Package Details",id:"package-details",level:3},{value:"Supported Platforms and Architectures",id:"supported-platforms-and-architectures",level:3},{value:"Package Dependencies",id:"package-dependencies",level:3},{value:"Workload Usage",id:"workload-usage",level:3},{value:"What is Being Tested?",id:"what-is-being-tested",level:3}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"compression-workloads"},"Compression Workloads"),(0,n.kt)("p",null,"Virtual Client host different types of compression and decompression workloads which are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"7zip"),(0,n.kt)("li",{parentName:"ul"},"Gzip"),(0,n.kt)("li",{parentName:"ul"},"Lzbench"),(0,n.kt)("li",{parentName:"ul"},"Pbzip2")),(0,n.kt)("h3",{id:"documentation"},"Documentation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../VirtualClient.Documentation/Lzbench.md"},"Lzbench")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../VirtualClient.Documentation/7zip.md"},"7zip")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../VirtualClient.Documentation/Gzip.md"},"Gzip")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../VirtualClient.Documentation/Pbzip2.md"},"Pbzip2"))),(0,n.kt)("h3",{id:"package-details"},"Package Details"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../VirtualClient.Documentation/DependencyPackages.md"},"Workload Package Details"))),(0,n.kt)("h3",{id:"supported-platforms-and-architectures"},"Supported Platforms and Architectures"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"linux-x64"),(0,n.kt)("li",{parentName:"ul"},"linux-arm64"),(0,n.kt)("li",{parentName:"ul"},"win-x64"),(0,n.kt)("li",{parentName:"ul"},"win-arm64")),(0,n.kt)("h3",{id:"package-dependencies"},"Package Dependencies"),(0,n.kt)("p",null,"The following package dependencies are required to be installed on the Unix/Linux system in order to support the requirements\nof the Lzbench workload. Note that the Virtual Client will handle the installation of any required dependencies."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"gcc"),(0,n.kt)("li",{parentName:"ul"},"make"),(0,n.kt)("li",{parentName:"ul"},"g++"),(0,n.kt)("li",{parentName:"ul"},"unzip"),(0,n.kt)("li",{parentName:"ul"},"pbzip2"),(0,n.kt)("li",{parentName:"ul"},"gzip")),(0,n.kt)("h3",{id:"workload-usage"},"Workload Usage"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../VirtualClient.Documentation/Lzbench.md"},"Lzbench")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../VirtualClient.Documentation/7zip.md"},"7zip")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../VirtualClient.Documentation/Gzip.md"},"Gzip")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../VirtualClient.Documentation/Pbzip2.md"},"Pbzip2"))),(0,n.kt)("h3",{id:"what-is-being-tested"},"What is Being Tested?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Lzbench",(0,n.kt)("br",null),(0,n.kt)("br",null),"Lzbench is used to measure performance in terms of compression speed, decompression speed and ratio of compressed size and original size. Below are the metrics measured by Lzbench Workload.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Compression Speed"),(0,n.kt)("td",{parentName:"tr",align:null},"MB/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Decompression Speed"),(0,n.kt)("td",{parentName:"tr",align:null},"MB/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Compressed size and original size ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"-")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Gzip",(0,n.kt)("br",null),(0,n.kt)("br",null),"Gzip is used to measure performance in terms of ReductionRatio. Below are the metrics measured by Gzip Workload.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ReductionRatio"),(0,n.kt)("td",{parentName:"tr",align:null},"-")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"7zip ",(0,n.kt)("br",null),(0,n.kt)("br",null),"7zip is used to measure performance in terms of compressionTime, and ratio of compressed size and original size. Below are the metrics measured by 7zip Workload.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Compressed size and Original size ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CompressionTime"),(0,n.kt)("td",{parentName:"tr",align:null},"seconds")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pbzip2 ",(0,n.kt)("br",null),(0,n.kt)("br",null),"Pbzip2 is used to measure performance in terms of compressionTime, and ratio of compressed size and original size in case of compression and ratio of decompressed size and original size in case of compression. Below are the metrics measured by Pbzip2 Workload.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CompressionTime"),(0,n.kt)("td",{parentName:"tr",align:null},"seconds")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Compressed size and Original size ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Decompressed size and Original size ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"-")))),(0,n.kt)("h1",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/inikep/lzbench"},"Lzbench github")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://compression.ca/pbzip2/"},"Pbzip2 github")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.gzip.org/"},"Gzip github")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.7-zip.org/"},"7zip"))))}u.isMDXComponent=!0}}]);