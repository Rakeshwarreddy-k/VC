"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[9908],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>d});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),p=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},m=function(e){var r=p(e.components);return o.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=n,k=u["".concat(l,".").concat(d)]||u[d]||c[d]||a;return t?o.createElement(k,s(s({ref:r},m),{},{components:t})):o.createElement(k,s({ref:r},m))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3900:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=t(7462),n=(t(7294),t(3905));const a={},s="Compression/Decompression Workloads Profiles",i={unversionedId:"workloads/compression/compression-profiles",id:"workloads/compression/compression-profiles",title:"Compression/Decompression Workloads Profiles",description:"The following profiles run customer-representative or benchmarking scenarios using the compression/decompression workloads.",source:"@site/docs/workloads/compression/compression-profiles.md",sourceDirName:"workloads/compression",slug:"/workloads/compression/compression-profiles",permalink:"/VirtualClient/docs/workloads/compression/compression-profiles",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/compression/compression-profiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Compression/Decompression Workloads Metrics",permalink:"/VirtualClient/docs/workloads/compression/compression-metrics"},next:{title:"Compression Workloads",permalink:"/VirtualClient/docs/workloads/compression/compressions"}},l={},p=[{value:"Preliminaries",id:"preliminaries",level:3},{value:"PERF-COMPRESSION.json",id:"perf-compressionjson",level:3}],m={toc:p};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"compressiondecompression-workloads-profiles"},"Compression/Decompression Workloads Profiles"),(0,n.kt)("p",null,"The following profiles run customer-representative or benchmarking scenarios using the compression/decompression workloads."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/VirtualClient/docs/workloads/compression/compressions"},"Workload Details"),"  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/VirtualClient/docs/workloads/compression/compression-metrics"},"Workload Profile Metrics"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"preliminaries"},"Preliminaries"),(0,n.kt)("p",null,"The profiles below require the ability to download workload packages and dependencies from a package store. In order to download the workload packages, connection information\nmust be supplied on the command line. See the 'Workload Packages' documentation above for details on how that works."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"perf-compressionjson"},"PERF-COMPRESSION.json"),(0,n.kt)("p",null,"Runs the compression/decompression workloads which measures performance in terms of compression and decompression speed. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Supported Platform/Architectures"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"win-x64"),(0,n.kt)("li",{parentName:"ul"},"win-arm64"),(0,n.kt)("li",{parentName:"ul"},"linux-x64"),(0,n.kt)("li",{parentName:"ul"},"linux-arm64")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Profile Parameters"),"  "),(0,n.kt)("br",null),(0,n.kt)("br",null),"The following parameters can be optionally supplied on the command line to modify the behaviors of the workload. See the 'Usage Scenarios/Examples' above for examples on how to supply parameters to Virtual Client profiles.",(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"InputFilesOrDirs"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional. Input files and/or directories to be compressed and decompressed."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://sun.aei.polsl.pl//~sdeor/corpus/silesia.zip"},"https://sun.aei.polsl.pl//~sdeor/corpus/silesia.zip"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"InputFiles"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional. Input files to be compressed and decompressed."),(0,n.kt)("td",{parentName:"tr",align:null},"unzipped ",(0,n.kt)("a",{parentName:"td",href:"https://sun.aei.polsl.pl//~sdeor/corpus/silesia.zip"},"https://sun.aei.polsl.pl//~sdeor/corpus/silesia.zip")))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Usage Examples"),(0,n.kt)("br",{parentName:"p"}),"\n","The following section provides a few basic examples of how to use the workload profile. Additional usage examples can be found in the\n'Usage Scenarios/Examples' link at the top."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'./VirtualClient --profile=PERF-COMPRESSION.json --system=Azure --timeout=1440\n./VirtualClient --profile=PERF-COMPRESSION.json --system=Azure --timeout=1440 --parameters="InputFiles=abc.zip" \n\n')))}c.isMDXComponent=!0}}]);