"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[8462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,f=m["".concat(d,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={},l="Install CUDA and NVIDIA GPU Drivers",o={unversionedId:"dependencies/0031-install-cuda-and-nvidia-drivers",id:"dependencies/0031-install-cuda-and-nvidia-drivers",title:"Install CUDA and NVIDIA GPU Drivers",description:"Virtual Client has a dependency component that can be added to a workload or monitor profile to install CUDA and NVIDIA drivers in Linux and Windows systems. The following section illustrates the",source:"@site/docs/dependencies/0031-install-cuda-and-nvidia-drivers.md",sourceDirName:"dependencies",slug:"/dependencies/0031-install-cuda-and-nvidia-drivers",permalink:"/VirtualClient/docs/dependencies/0031-install-cuda-and-nvidia-drivers",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/dependencies/0031-install-cuda-and-nvidia-drivers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation Chocolatey Packages",permalink:"/VirtualClient/docs/dependencies/0030-install-chocolatey-packages"},next:{title:"Install/Clone a Git Repo",permalink:"/VirtualClient/docs/dependencies/0040-install-git-repo"}},d={},s=[{value:"Supported Platform/Architectures",id:"supported-platformarchitectures",level:2},{value:"Profile Component Parameters for Windows",id:"profile-component-parameters-for-windows",level:2},{value:"Profile Component Parameters for Linux",id:"profile-component-parameters-for-linux",level:2},{value:"Example",id:"example",level:2},{value:"Windows example for downloading drivers from Web",id:"windows-example-for-downloading-drivers-from-web",level:3},{value:"Linux example for downloading drivers",id:"linux-example-for-downloading-drivers",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"install-cuda-and-nvidia-gpu-drivers"},"Install CUDA and NVIDIA GPU Drivers"),(0,r.kt)("p",null,"Virtual Client has a dependency component that can be added to a workload or monitor profile to install CUDA and NVIDIA drivers in Linux and Windows systems. The following section illustrates the\ndetails for integrating this into the profile."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.nvidia.com/Download/index.aspx"},"NVIDIA Official Drivers Page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.nvidia.com/cuda-downloads"},"CUDA Toolkit Downloads"))),(0,r.kt)("h2",{id:"supported-platformarchitectures"},"Supported Platform/Architectures"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"linux-x64 (Ubuntu, Debian, CentOS7, RHEL7, RHEL8, SUSE)"),(0,r.kt)("li",{parentName:"ul"},"win-x64")),(0,r.kt)("h2",{id:"profile-component-parameters-for-windows"},"Profile Component Parameters for Windows"),(0,r.kt)("p",null,"This dependency component can be used to download the drivers on Windows either from Web using Wget, or from a blob storage using the DependencyPackageInstallation.\nThe following section describes the parameters used by the individual component in the profile in Windows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PackageName"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The logical name of the package that will be registered with the Virtual Client runtime. This name can be used by other profile components to reference the installation parent directory location for Drivers."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Scenario"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"A name/identifier for the specific component in the profile. This is used for telemetry purposes only with components in dependency sections of the profile (i.e. cannot be used with --scenarios option on the command line)."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RebootRequired"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether or not reboot is required after installing the drivers."),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("h2",{id:"profile-component-parameters-for-linux"},"Profile Component Parameters for Linux"),(0,r.kt)("p",null,"The following section describes the parameters used by the individual component in the profile in Windows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PackageName"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The logical name of the package that will be registered with the Virtual Client runtime. This name can be used by other profile components to reference the installation parent directory location for Drivers."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Scenario"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"A name/identifier for the specific component in the profile. This is used for telemetry purposes only with components in dependency sections of the profile (i.e. cannot be used with --scenarios option on the command line)."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LinuxCudaVersion"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The version of CUDA to be installed in Linux Systems"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LinuxDriverVersion"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The version of Nvidia GPU driver to be installed in Linux Systems"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LinuxLocalRunFile"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The link to local runfile to install Cuda and Nvidia GPU driver in Linux Systems"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"The user who has the ssh identity registered for."),(0,r.kt)("td",{parentName:"tr",align:null},"The current logged in user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RebootRequired"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether or not reboot is required after installing the drivers."),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"The following sections provides examples for how to integrate the component into a profile."),(0,r.kt)("h3",{id:"windows-example-for-downloading-drivers-from-web"},"Windows example for downloading drivers from Web"),(0,r.kt)("p",null,"A sample URL for NVIDIA Drivers for Windows 10/11 is mentioned in example. The exact URL for the specific OS and Driver Version can be taken from NVIDIA Drivers website, given above."),(0,r.kt)("div",{class:"code-section"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Type": "WgetPackageInstallation",\n    "Parameters": {\n        "Scenario": "DownloadCudaAndNvidiaDriverUsingWget",\n        "PackageUri": "https://us.download.nvidia.com/tesla/528.33/528.33-data-center-tesla-desktop-win10-win11-64bit-dch-international.exe",\n        "PackageName": "nvidiaDrivers",\n        "Extract": true\n    }\n},\n{\n    "Type": "CudaAndNvidiaGPUDriverInstallation",\n    "Parameters": {\n        "Scenario": "InstallCudaAndNvidiaGPUDriverForWindows",\n        "RebootRequired": false,\n        "PackageName": "nvidiaDrivers"  \n    }\n}\n'))),"### Windows example for downloading drivers from Web",(0,r.kt)("div",{class:"code-section"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Type": "DependencyPackageInstallation",\n    "Parameters": {\n        "Scenario": "DownloadCudaAndNvidiaDriverFromBlob",\n        "BlobContainer": "packages",\n        "BlobName": "<package-name-in-blob>",\n        "PackageName": "nvidiaDrivers",\n        "Extract": true\n    }\n},\n{\n    "Type": "CudaAndNvidiaGPUDriverInstallation",\n    "Parameters": {\n        "Scenario": "InstallCudaAndNvidiaGPUDriverForWindows",\n        "RebootRequired": false,\n        "PackageName": "nvidiaDrivers"  \n    }\n}\n'))),(0,r.kt)("h3",{id:"linux-example-for-downloading-drivers"},"Linux example for downloading drivers"),(0,r.kt)("p",null,"A sample URL for NVIDIA Drivers RunFile for Linux Ubuntu is mentioned in example. The exact URL for the specific OS and Driver Version can be taken from CUDA Toolkit website, given above."),(0,r.kt)("div",{class:"code-section"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Type": "NvidiaCudaInstallation",\n    "Parameters": {\n        "Scenario": "InstallNvidiaCuda",\n        "LinuxCudaVersion": "12.0",\n        "LinuxDriverVersion": "525",\n        "Username": "",\n        "LinuxLocalRunFile": "https://developer.download.nvidia.com/compute/cuda/12.0.0/local_installers/cuda_12.0.0_525.60.13_linux.run"\n    }\n},\n'))))}u.isMDXComponent=!0}}]);