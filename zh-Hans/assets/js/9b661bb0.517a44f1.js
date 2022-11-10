"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[9329],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const r={},o="Writing Virtual Client Extensions",l={unversionedId:"developing/vc-extension",id:"developing/vc-extension",title:"Writing Virtual Client Extensions",description:"This document hasn't been migrated. Links will be broken.",source:"@site/docs/developing/vc-extension.md",sourceDirName:"developing",slug:"/developing/vc-extension",permalink:"/VirtualClient/zh-Hans/docs/developing/vc-extension",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/docs/developing/vc-extension.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Error Handling",permalink:"/VirtualClient/zh-Hans/docs/developing/error-handling"},next:{title:"Workload Onboarding LifeCycle",permalink:"/VirtualClient/zh-Hans/docs/developing/workload-onboarding"}},s={},p=[{value:"Platform Libraries",id:"platform-libraries",level:3},{value:"Platform Requirements",id:"platform-requirements",level:3},{value:"Versioning Requirements",id:"versioning-requirements",level:3},{value:"Packaging Requirements",id:"packaging-requirements",level:3},{value:"How To Use/Integrate Extensions",id:"how-to-useintegrate-extensions",level:3},{value:"How To Debug Extensions",id:"how-to-debug-extensions",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"writing-virtual-client-extensions"},"Writing Virtual Client Extensions"),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"This document hasn't been migrated. Links will be broken.")),(0,a.kt)("p",null,"The following sections cover the fundamentals to consider when developing extensions to the Virtual Client. Extensions refers to profiles or component\nbinaries/.dlls containing actions, monitors, dependency handlers etc... that are developed in a separate repo/location than the Virtual Client platform/core\nrepo. Extensions allow development teams to add features to the Virtual Client runtime platform that are specialized towards their team's needs and charter.\nBefore getting started, it is helpful to familiarize yourself with the Virtual Client platform design and concepts."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"DEVELOPER_GUIDE.md"},"General Developer Guide"))),(0,a.kt)("p",null,"The following example extensions repo can be used for reference to the details described within this guide."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://msazure.visualstudio.com/One/_git/CRC-VirtualClient-Examples"},"CRC-VirtualClient-Examples Git Repo"))),(0,a.kt)("h3",{id:"platform-libraries"},"Platform Libraries"),(0,a.kt)("p",null,"In order to develop extensions to the Virtual Client platform, the following libraries are required. These can be referenced or downloaded from the CRC\nteam's NuGet feeds."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"nuget-feeds"},"NuGet Feeds"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://msazure.visualstudio.com/One/_artifacts/feed/CRC"},"Production Release NuGet Feed"),"  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://msazure.visualstudio.com/One/_artifacts/feed/CRC-Dev"},"Pre-Release NuGet Feed")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"nuget-packageslibraries"},"NuGet Packages/Libraries"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"VirtualClient.Framework"),(0,a.kt)("br",{parentName:"p"}),"\n","Contains the fundamental classes and interfaces required to develop actions, monitors and dependency handlers for the Virtual Client.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"VirtualClient.TestFramework"),(0,a.kt)("br",{parentName:"p"}),"\n","Contains classes and interfaces that ease the task of writing unit and functional tests for extensions codebase."))),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<Project Sdk="Microsoft.NET.Sdk">\n\n  <PropertyGroup>\n      <TargetFramework>net6.0</TargetFramework>\n      <RootNamespace>CRC.VirtualClient.Extensions</RootNamespace>\n  </PropertyGroup>\n\n  <ItemGroup>\n      <PackageReference Include="VirtualClient.Framework" Version="1.0.1900.660" />\n  </ItemGroup>\n\n  <Import Project="$([MSBuild]::GetDirectoryNameOfFileAbove($(MSBuildThisFileDirectory), Module.props))\\Module.props" />\n</Project>\n')))),(0,a.kt)("h3",{id:"platform-requirements"},"Platform Requirements"),(0,a.kt)("p",null,"The Virtual Client is a .NET 6.0 application. Assemblies containing extensions to the Virtual Client must likewise be built against the .NET 6.0 framework\nSDK. Assemblies compiled for the Virtual Client must have the term 'VirtualClient' in them. It is recommended that the following format be used when\nnaming your assemblies. This will help to avoid any conflicts with extensions produced by other teams."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Format:\n{TeamName}.VirtualClient.Extensions.{ComponentTypesWithin}.dll\n\n# Examples:\nCRC.VirtualClient.Extensions.Actions.dll\nCRC.VirtualClient.Extensions.Monitors.dll\nCRC.VirtualClient.Extensions.Dependencies.dll\n")),(0,a.kt)("p",null,"In addition, the following attribute must be added to a code file (typically an AssemblyInfo.cs file) within the each project that contains components\nthat when compiled can be used in the Virtual Client."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"# Contents of an AssemblyInfo.cs file.\n[assembly: VirtualClient.Contracts.VirtualClientComponentAssembly]\n")),(0,a.kt)("h3",{id:"versioning-requirements"},"Versioning Requirements"),(0,a.kt)("p",null,"The following section provides requirements to follow when considering versions of the platform libraries to reference. The VC Team follows a process of\nsemantic versioning with the Virtual Client runtime application and framework libraries. The versions of the assemblies/.dlls/.exes can be used to determine\nwhich version of the NuGet packages should be used. The following resource explains the versioning process."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"VERSIONING.md"},"Platform Versioning"))),(0,a.kt)("p",null,"It is recommended that you follow the same \"semantic versioning\" strategy as is followed for the Virtual Client platform. The following examples\nillustrate versions of extensions (when compiled) that would be expected to work with a specific Virtual Client release. It is really only the\n'major' and 'minor' versions that are important here. The following table illustrates the general idea."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"VirtualClient.Framework Library Version"),(0,a.kt)("th",{parentName:"tr",align:null},"Supported VirtualClient.exe Versions"),(0,a.kt)("th",{parentName:"tr",align:null},"Version to use for Extensions Library Builds"),(0,a.kt)("th",{parentName:"tr",align:null},"Examples"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1.0.","*"," (e.g. 1.0.1900.660)"),(0,a.kt)("td",{parentName:"tr",align:null},"1.0.","*"," (e.g. 1.0.1930.665)"),(0,a.kt)("td",{parentName:"tr",align:null},"1.0.","*"," (e.g. 1.0.0.0)"),(0,a.kt)("td",{parentName:"tr",align:null},"VirtualClient.exe version 1.0.1900.660 will support framework library versions from 1.0.0.0 to < 1.1.0.0. The framework versions will almost always have a version similar to the runtime .exe version; however, this illustrates the idea of the version range supported.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1.1.","*"," (e.g. 1.1.1950.120)"),(0,a.kt)("td",{parentName:"tr",align:null},"1.1.","*"," (e.g. 1.1.1960.125)"),(0,a.kt)("td",{parentName:"tr",align:null},"1.1.","*"," (e.g. 1.1.0.0)"),(0,a.kt)("td",{parentName:"tr",align:null},"VirtualClient.exe version 1.1.1950.120 will support framework library versions from 1.1.0.0 to < 1.2.0.0.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2.0.","*"," (e.g. 2.0.2000.500)"),(0,a.kt)("td",{parentName:"tr",align:null},"2.0.","*"," (e.g. 2.0.2001.505)"),(0,a.kt)("td",{parentName:"tr",align:null},"2.0.","*"," (e.g. 2.0.0.0)"),(0,a.kt)("td",{parentName:"tr",align:null},"VirtualClient.exe version 2.0.2000.500 will support framework library versions from 2.0.0.0 to < 2.1.0.0.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2.1.","*"," (e.g. 2.1.2100.100)"),(0,a.kt)("td",{parentName:"tr",align:null},"2.1.","*"," (e.g. 2.1.2200.300)"),(0,a.kt)("td",{parentName:"tr",align:null},"2.1.","*"," (e.g. 2.1.0.0)"),(0,a.kt)("td",{parentName:"tr",align:null},"VirtualClient.exe version 2.1.2100.100 will support framework library versions from 2.1.0.0 to < 2.2.0.0.")))),(0,a.kt)("h3",{id:"packaging-requirements"},"Packaging Requirements"),(0,a.kt)("p",null,"Virtual Client extensions are loaded into runtime execution via dependency packages similarly to the way that other types of dependencies\n(e.g. workload binaries, scripts etc...) are integrated. A Virtual Client dependency package is nothing more than a structured .zip file\nthat contains the files required for a particular dependency. Dependency packages allow Virtual Client to support a number of different scenarios\nincluding those that are disconnected from the internet. Additionally, they enable each version of the Virtual Client to operate using exact/known\nbinaries, scripts etc... This is an important concept both for producing repeatable results as well as for simplifying deployment and setup requirements."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"VirtualClient.Documentation/DependencyPackages.md"},"Dependency Packages"))),(0,a.kt)("p",null,"For extensions packages, the following illustrates the expected folder structure and contents. Note that you do not have to compile your libraries\nspecifically for the platform/architectures noted below. Compilation against 'AnyCPU' is sufficient to keep things simple. An extensions package\nwill have the following content."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Package Definition File"),(0,a.kt)("br",{parentName:"li"}),"A package definition is a simple JSON file that is placed in the root directory of the package that defines the name and description of the\npackage, its version and any metadata properties desired. In this way, Virtual Client packages are \"self-describing\". This file should typically be\nnamed the same as the 'name' property within its contents and MUST have a ",(0,a.kt)("strong",{parentName:"li"},".vcpkg")," extension. Additionally, the 'metadata' should contain a property\nnamed ",(0,a.kt)("strong",{parentName:"li"},"extensions")," that is set to true.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'# Example contents of the package definition file named \'crcvcextensions.vcpkg\'.\n{\n  "name": "crcvcextensions",\n  "description": "VC Team Virtual Client extensions.",\n  "version": "1.0.1",\n  "metadata": {\n      "extensions": true\n  }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Profile Extensions"),(0,a.kt)("br",{parentName:"p"}),"\n","Profile extensions are not required. If they exist, the files should be placed inside of the appropriate folder for each platform/architecture supported\n(e.g. win-x64, linux-x64) in a folder named ",(0,a.kt)("strong",{parentName:"p"},"profiles"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Binary/.dll Extensions"),(0,a.kt)("br",{parentName:"p"}),"\n","Binary extensions are not required. If they exist, the binary/.dll extensions should be placed inside of the appropriate folder for each platform/architecture supported\n(e.g. win-x64, linux-x64)."),(0,a.kt)("p",{parentName:"li"},"The following illustrates the folder structure expected for an extensions package called 'crc.vc.extensions'."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," -------------------------------------------------------------------\n # Folder Structure\n -------------------------------------------------------------------\n /crc.vc.extensions\n    crcvcextensions.vcpkg\n        A Virtual Client package (.vcpkg) definition that has a metadata property called 'extensions' set to true. This file should exist\n        in the root directory of the package.\n              \n    /linux-arm64\n          {binaries}\n              Any additional binaries that can be used on Linux/ARM64 systems are placed directly in the linux-arm64 folder.\n              \n          /profiles\n              Folder contains any additional profiles that can be used on Linux/ARM64 systems.\n\n    /linux-x64\n          {binaries}\n              Any additional binaries that can be used on Linux/x64 systems are placed directly in the linux-x64 folder.\n              \n          /profiles\n              Folder contains any additional profiles that can be used on Linux/x64 (Intel, AMD) systems.\n           \n    /win-arm64\n          {binaries}\n              Any additional binaries that can be used on Windows/ARM64 systems are placed directly in the win-arm64 folder.\n              \n          /profiles\n              Folder contains any additional profiles that can be used on Windows/ARM64 systems.\n        \n    /win-x64\n          {binaries}\n              Any additional binaries that can be used on Windows/x64 systems are placed directly in the win-x64 folder.\n              \n          /profiles\n              Folder contains any additional profiles that can be used on Windows/x64 (Intel, AMD) systems.\n\n -------------------------------------------------------------------\n # Example \n -------------------------------------------------------------------\n /crc.vc.extensions\n /crc.vc.extensions/crcvcextensions.vcpkg\n\n # binaries...\n /crc.vc.extensions/linux-arm64/CRC.VirtualClient.Extensions.Actions.dll\n /crc.vc.extensions/linux-arm64/CRC.VirtualClient.Extensions.Actions.pdb\n /crc.vc.extensions/linux-x64/CRC.VirtualClient.Extensions.Actions.dll\n /crc.vc.extensions/linux-x64/CRC.VirtualClient.Extensions.Actions.pdb\n /crc.vc.extensions/win-arm64/CRC.VirtualClient.Extensions.Actions.dll\n /crc.vc.extensions/win-arm64/CRC.VirtualClient.Extensions.Actions.pdb\n /crc.vc.extensions/win-x64/CRC.VirtualClient.Extensions.Actions.dll\n /crc.vc.extensions/win-x64/CRC.VirtualClient.Extensions.Actions.pdb\n\n # profiles...\n /crc.vc.extensions/linux-arm64/profiles/EXAMPLE-WORKLOAD-PROFILE.json\n /crc.vc.extensions/linux-x64/profiles/EXAMPLE-WORKLOAD-PROFILE.json\n /crc.vc.extensions/win-arm64/profiles/EXAMPLE-WORKLOAD-PROFILE.json\n /crc.vc.extensions/win-x64/profiles/EXAMPLE-WORKLOAD-PROFILE.json\n")),(0,a.kt)("h3",{id:"how-to-useintegrate-extensions"},"How To Use/Integrate Extensions"),(0,a.kt)("p",null,"Once extensions have been developed and an extensions package exists, they can be used in the Virtual Client runtime. There are a number of different ways that\nextensions can be bootstrapped/installed on the system to suit the needs of the situation. The following examples illustrate some common ways that extensions can\nbe integrated into the Virtual Client runtime."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"extensions-are-downloaded-from-a-package-store"},"Extensions are Downloaded from a Package Store"),"The default for most Virtual Client scenarios is to download extensions from a package store. The ",(0,a.kt)("strong",{parentName:"li"},"VirtualClient bootstrap")," command can be used to download\nextensions from a package store and install them.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Package/Blob Store Structure\n/container=packages/blob=crc.vc.extensions.zip\n\n# 1) Execute Bootstrap Command\n/VirtualClient/VirtualClient.exe bootstrap --package=crc.vc.extensions.zip --name=crcvcextensions --packages="{BlobStoreConnectionString|SAS URI}"\n\n# 2) Execute Extensions Profile\n/VirtualClient/VirtualClient.exe --profile=EXAMPLE-WORKLOAD-PROFILE.json --timeout=1440 --packages="{BlobStoreConnectionString|SAS URI}"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"extensions-are-placed-directly-in-packages-folder"},"Extensions are Placed Directly in Packages Folder"),"Extensions .zip packages can be placed directly in the Virtual Client 'packages' directory. To integrate \"drop-in\" packages,\nthe ",(0,a.kt)("strong",{parentName:"li"},"VirtualClient bootstrap")," command can be used to extract extensions packages on the file system and install the profiles and binaries.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Folder Location\n/VirtualClient/packages/crc.vc.extensions.zip\n\n# 1) Execute Bootstrap Command\n/VirtualClient/VirtualClient.exe bootstrap --package=crc.vc.extensions.zip --name=crcvcextensions\n\n# 2) Execute Extensions Profile\n/VirtualClient/VirtualClient.exe --profile=EXAMPLE-WORKLOAD-PROFILE.json --timeout=1440\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"a-custom-defined-bootstrap-profile-is-used"},"A Custom-Defined Bootstrap Profile is Used"),"The developer can choose to use a custom profile for bootstrapping/installing extensions as well.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'# Profile = BOOTSTRAP-EXTENSIONS.json\n{\n  "Description": "Installs extensions from a package store.",\n  "Dependencies": [\n      {\n          "Type": "DependencyPackageInstallation",\n          "Parameters": {\n              "Scenario": "InstallCRCExtensionsPackage",\n              "BlobContainer": "packages",\n              "BlobName": "crc.vc.extensions.zip",\n              "PackageName": "crcvcextensions",\n              "Extract": true\n          }\n      }\n  ]\n}\n')),(0,a.kt)("p",null,"  ...Then use it! Note that the profile can exist in another directory location and be referenced by the path to the file (full or relative path)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Package/Blob Store Structure\n/container=packages/blob=crc.vc.extensions.zip\n\n# 1) Execute Bootstrap Command\n/VirtualClient/VirtualClient.exe --profile=S:\\Some\\Other\\Folder\\BOOTSTRAP-EXTENSIONS.json --installDependencies --packages="{BlobStoreConnectionString|SAS URI}"\n\n# 2) Execute Extensions Profile\n/VirtualClient/VirtualClient.exe --profile=EXAMPLE-WORKLOAD-PROFILE.json --timeout=1440\n')),(0,a.kt)("h3",{id:"how-to-debug-extensions"},"How To Debug Extensions"),(0,a.kt)("p",null,'This next section is going to cover the topic of debugging Virtual Client extensions. It is very helpful at times when doing development work to have\nthe ability to run the Virtual Client runtime executable while enabling the ability to step through the code line by line. For this section, we will be\nlooking at how to do this using the Visual Studio IDE and facilities that it has to make debugging easier. Make sure to review the section "Debugging Virtual Client Code"\nat the bottom of the ',(0,a.kt)("a",{parentName:"p",href:"DEVELOPER_GUIDE.md"},"General Developer Guide")," for more information on debugging."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Debug Using Unit/Functional Tests"),(0,a.kt)("br",{parentName:"p"}),"\n","This option is documented in the general developer guide. The technique is the same for debugging extensions as it is for any other component.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Debug by Running a Custom Profile #1"),(0,a.kt)("br",{parentName:"p"}),"\n","The preliminary setup for this option is the same as what is documented in the general developer guide in the section on debugging at the bottom. There are a few extra steps here\nwhere the developer must provide the Visual Studio runtime with a hint as to where to find the extensions binaries. We will be essentially setting up Visual Studio to run an instance of\nthe VirtualClient.exe on the system and supplying it with the location of the extensions binaries."),(0,a.kt)("p",{parentName:"li"},'Note that in this scenario, we are executing the debugging scenario from Visual Studio in the extensions project. It is a good idea (for consistency) to reference a\n"just-built" version of the Virtual Client runtime executable in many cases. This is typically done by cloning the Virtual Client platform repo, building it and referencing the\nVirtualClient.exe from the built output location (e.g. /',"{","repoDir","}","/out/bin/Debug/x64/VirtualClient.Main/net6.0/VirtualClient.exe). See the repo\ngeneral ",(0,a.kt)("a",{parentName:"p",href:"../../README.md"},"README")," for guidance on building the platform/core repo."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'# A custom profile is created and placed on the file system somewhere (typically somewhere outside of the source directory). In this profile, the\n# custom action/executor component is added to the actions.\n{\n  "Description": "Debug Custom Workload Executor",\n  "Actions": [\n      {\n          "Type": "CustomWorkloadExecutor",\n          "Parameters": {\n              "Scenario": "Scenario1",\n              "Duration": "00:00:10",\n              "ExampleParameter1": "AnyValue1",\n              "ExampleParameter2": 4567,\n              "PackageName": "exampleworkload",\n              "Tags": "Test,VC"\n          }\n      }\n  ],\n  "Dependencies": [\n      {\n          "Type": "DependencyPackageInstallation",\n          "Parameters": {\n              "Scenario": "InstallExampleWorkloadPackage",\n              "BlobContainer": "packages",\n              "BlobName": "exampleworkload.1.0.0.zip",\n              "PackageName": "exampleworkload",\n              "Extract": true\n          }\n      }\n  ]\n}\n')),(0,a.kt)("p",null,"  The Virtual Client platform allows the developer to define a custom environment variable ",(0,a.kt)("strong",{parentName:"p"},"VCDependencyPath")," to provide an extra location\nto search for binaries that contain Virtual Client components. This environment variable should be set to the build output path for your extensions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"e.g.\n\n# Example output directory for extensions\nS:\\one\\crc-virtualclient-examples\\out\\bin\\Debug\\AnyCPU\\CRC.VirtualClient.Extensions.Actions\\net6.0\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Setup Visual Studio for debugging:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Set the solution configuration to ",(0,a.kt)("strong",{parentName:"li"},"Debug")," at the top of the Visual Studio IDE window."),(0,a.kt)("li",{parentName:"ol"},"Set the extensions project containing the code to debug as the startup project. To do so, right-click on the project in the Solution Explorer and select\n",(0,a.kt)("strong",{parentName:"li"},"Set as Startup Project")," from the context menu."),(0,a.kt)("li",{parentName:"ol"},"Right-click on the VirtualClient.Main project and open the ",(0,a.kt)("strong",{parentName:"li"},"Debug")," options. Set the following information.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Launch = Executable"),(0,a.kt)("li",{parentName:"ul"},"Executable = ","{","PathToVirtualClientExe","}",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("strong",{parentName:"li"},"(e.g. ",(0,a.kt)("inlineCode",{parentName:"strong"},"S:\\one\\crc-air-workloads\\out\\bin\\Debug\\x64\\VirtualClient.Main\\net6.0\\VirtualClient.exe"),")")),(0,a.kt)("li",{parentName:"ul"},"Application arguments = ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},'--profile={PathToCustomProfile} --profile=MONITORS.NONE.json --packages="{PackageStoreConnectionString|SASUri}"')),".",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("strong",{parentName:"li"},"(e.g. ",(0,a.kt)("inlineCode",{parentName:"strong"},'--profile=S:\\one\\debugging\\DEBUG-EXAMPLE-WORKLOAD.json --profile=MONITORS.NONE.json --packages="https://virtualclient..."'),")")),(0,a.kt)("li",{parentName:"ul"},"Environment variables = ",(0,a.kt)("strong",{parentName:"li"},"Add the ",(0,a.kt)("inlineCode",{parentName:"strong"},"VCDependenciesPath")," variable and the path to your built extensions binaries"),".",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("strong",{parentName:"li"},"(e.g. ",(0,a.kt)("inlineCode",{parentName:"strong"},"VCDependenciesPath = S:\\one\\crc-virtualclient-examples\\out\\bin\\Debug\\AnyCPU\\CRC.VirtualClient.Extensions.Actions\\net6.0"),")")))),(0,a.kt)("li",{parentName:"ol"},"Place a breakpoint in the code where you like (e.g. in the InitializeAsync or ExecuteAsync methods of your component)."),(0,a.kt)("li",{parentName:"ol"},"Click the play/continue button at the top-center of the Visual Studio IDE window (or press the F5 key).")))}u.isMDXComponent=!0}}]);