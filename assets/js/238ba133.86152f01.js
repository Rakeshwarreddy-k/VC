"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[6436],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(b,i(i({ref:t},p),{},{components:n})):o.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={id:"blob-storage",sidebar_position:9},i="Blob storage support",l={unversionedId:"guides/blob-storage",id:"guides/blob-storage",title:"Blob storage support",description:"Virtual Client supports a few different types of Azure Blob stores that can be used as part of a workload profile execution. This documentation",source:"@site/docs/guides/blob-storage.md",sourceDirName:"guides",slug:"/guides/blob-storage",permalink:"/VirtualClient/docs/guides/blob-storage",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/guides/blob-storage.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"blob-storage",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Upload logs",permalink:"/VirtualClient/docs/guides/upload-logs"},next:{title:"Usage Scenarios (WIP)",permalink:"/VirtualClient/docs/category/usage-scenarios-wip"}},s={},c=[{value:"Supported Blob Stores",id:"supported-blob-stores",level:3},{value:"Blob Store Authentication",id:"blob-store-authentication",level:3},{value:"Blob Store Folder/File Naming Conventions",id:"blob-store-folderfile-naming-conventions",level:3},{value:"Integration with the Development Process",id:"integration-with-the-development-process",level:3},{value:"How Blob Stores are Integrated into Dependencies",id:"how-blob-stores-are-integrated-into-dependencies",level:5}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"blob-storage-support"},"Blob storage support"),(0,r.kt)("p",null,"Virtual Client supports a few different types of Azure Blob stores that can be used as part of a workload profile execution. This documentation\ncovers how to supply those blob stores to the Virtual Client on the command line as well as how to use them in Virtual Client codebase."),(0,r.kt)("h3",{id:"supported-blob-stores"},"Supported Blob Stores"),(0,r.kt)("p",null,"The following stores are supported by the Virtual Client. The stores must be Azure Storage Account blob stores."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Packages Store"),(0,r.kt)("br",{parentName:"p"}),"\n","The packages blob store contains workload and dependency packages that must be downloaded to a system during the execution of a\nworkload profile. These are typically NuGet/zip files that contain binaries, scripts, etc... that are required by the scenario profile."),(0,r.kt)("p",{parentName:"li"},"The packages store can be supplied to the Virtual Client on the command line using the '--packageStore' parameter and supplying the\nfull connection string to the Azure storage account blob resource."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Example:\nVirtualClient.exe --profile=PERF-NETWORK.json --timeout=1440 --packageStore={ConnectionString or SASTokenUri}\n")),(0,r.kt)("p",{parentName:"li"}," Note that Virtual Client expects the packages to exist in the blob store in a container called 'packages'."))),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{alt:"packages store",src:n(3702).Z,width:"1179",height:"479"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Content Store"),(0,r.kt)("br",{parentName:"p"}),"\n","The content blob store is used for uploading files and content captured by workloads or monitors that run as part of Virtual Client workload\noperations. For example, a monitor might be implemented to upload certain types of logs, bin files or cab files to the specified content blob\nstore."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Example:\nVirtualClient.exe --profile=PERF-NETWORK.json --timeout=1440 --contentStore={ConnectionString or SASTokenUri}\n")))),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{alt:"monitoring content",src:n(9385).Z,width:"1350",height:"530"})),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"blob-store-authentication"},"Blob Store Authentication"),(0,r.kt)("p",null,"Virtual Client supports the following authentication options for all blob stores:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview"},"Shared Access Signatures (SAS) Overview"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/rest/api/storageservices/create-account-sas?redirectedfrom=MSDN"},"Account Shared Access Signatures")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Storage Account Connection String"),(0,r.kt)("br",{parentName:"p"}),"\n","The primary or secondary connection string to the Azure storage account. This provides full access privileges to the entire\nstorage account but the least amount of security. This is generally recommended only for testing scenarios. The use of a\nSAS URI or connection string is preferred because it enables finer grained control of the exact resources within the storage\naccount that the application should be able to access.",(0,r.kt)("br",null),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"(e.g. DefaultEndpointsProtocol=https;AccountName=anystorageaccount;AccountKey=w7Q+BxLw...;EndpointSuffix=core.windows.net)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Blob Service Connection String"),(0,r.kt)("br",{parentName:"p"}),"\n","This is a connection string to the Blob service in the storage account. It allows user-defined/restricted access privileges to be defined for\nall containers and blobs in the storage account. This is a good fit for scenarios where content (e.g. from different monitors) is uploaded to\ndifferent containers within the blob store and thus the application needs access to all containers.",(0,r.kt)("br",null),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"(e.g. BlobEndpoint=https://anystorageaccount.blob.core.windows.net/;SharedAccessSignature=sv=2020-08-04&ss=b&srt=c&sp=rwlacx&se=2021-11-23T14:30:18Z&st=2021-11-23T02:19:18Z&spr=https&sig=jcql6El...)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Blob Service SAS URI"),(0,r.kt)("br",{parentName:"p"}),"\n","This is a SAS URI to the Blob service in the storage account. This provides exactly the same types of privileges as the Blob service-level connection string noted above.",(0,r.kt)("br",null),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"(e.g. https://anystorageaccount.blob.core.windows.net/?sv=2020-08-04&ss=b&srt=c&sp=rwlacx&se=2021-11-23T14:30:18Z&st=2021-11-23T02:19:18Z&spr=https&sig=jcql6El...)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Blob Container SAS URI"),(0,r.kt)("br",{parentName:"p"}),"\n","This is a SAS URI to a single blob container within the storage account. This is the most restrictive way of providing privileges but is also the most secure because it\nprovides the least amount of access to the application. This is a good fit for scenarios where all content (e.g. across all monitors) is uploaded to a single container\nwithin the blob store.",(0,r.kt)("br",null),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"(e.g. https://anystorageaccount.blob.core.windows.net/packages?sp=r&st=2021-11-23T18:22:49Z&se=2021-11-24T02:22:49Z&spr=https&sv=2020-08-04&sr=c&sig=ndyPRH...)")))),(0,r.kt)("p",null,"Use the following recommendations when creating shared access keys in the blob store to ensure the right amount of privileges\nare granted to the Virtual Client application for uploading and downloading blobs."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Blob Service Connection Strings or SAS URIs"),(0,r.kt)("br",{parentName:"li"}),"Select the following options when defining shared access signatures at the Blob service level:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Allowed services = Blob"),(0,r.kt)("li",{parentName:"ul"},"Allowed resource types = Container, Object"),(0,r.kt)("li",{parentName:"ul"},"Allowed permissions = Read, Write, Create"),(0,r.kt)("li",{parentName:"ul"},"Allowed protocols = HTTPS only")))),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{src:n(379).Z,width:"1357",height:"914"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Blob Container SAS URIs"),(0,r.kt)("br",{parentName:"li"}),"Select the following options when defining shared access signatures at the Blob container level:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Signing method = Account key"),(0,r.kt)("li",{parentName:"ul"},"Permissions = Read, Write, Create"),(0,r.kt)("li",{parentName:"ul"},"Allowed protocols = HTTPS only")))),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{src:n(9889).Z,width:"1000",height:"743"})),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"blob-store-folderfile-naming-conventions"},"Blob Store Folder/File Naming Conventions"),(0,r.kt)("p",null,"In  order to ensure that files associated with Virtual Client executors or monitors are easy to find in the blob stores, a naming convention is used.\nAt a high level, all files associated with a given experiment are contained together in the blob store. The following pieces of information are included\nin the virtual path and file name that is used to ensure that files associated with that experiment are organized in the blob store:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Experiment ID"),(0,r.kt)("br",{parentName:"p"}),"\n","The ID of the experiment is used to ensure all files associated with any executors or monitors are in the same virtual folder within the blob store.\nFurthermore because an experiment ID is a global identifier, it is easier for the user or automation to find files associated with a given experiment\n(e.g. for debugging/triage).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Agent ID"),(0,r.kt)("br",{parentName:"p"}),"\n","The ID of the Virtual Client instance running (i.e. the agent) is also included. This ensures that files captured from a specific VM or node etc... are easy\nto distinguish from each other.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Component Name"),(0,r.kt)("br",{parentName:"p"}),"\n","This is the name of the executor or monitor that created the files (directly or indirectly).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"File Name"),(0,r.kt)("br",{parentName:"p"}),"\n","This is the name of the file as it should be reflected in the blob store. A timestamp (round-trip date/time format) will be added to the beginning of the file name\n(e.g. 2022-03-07T01:32:27.1237655Z-monitor.log). The addition of the timestamp ensures that the files within a given virtual folder in the blob store will all\nhave unique names in order to avoid collisions. Round-trip date/time formats in addition to being a valid timestamp are naturally sortable in UX experiences\nsuch as a web browser.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Round-Trip Formatted Timestamp"),(0,r.kt)("br",{parentName:"p"}),"\n","As noted above, a round-trip formatted timestamp will be added to each file name to ensure uniqueness."))),(0,r.kt)("p",null,"Given the pieces of information noted above, the format for virtual paths and file names will look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// Path Format:\n// -----------------------------------------------\n{ExperimentID}/{AgentID}/{ComponentName}/{RoundTripFormattedTimestamp}-{FileName}\n\n// Examples:\n// -----------------------------------------------\n// Given the Following Information:\n// - Experiment ID = 24149a49-66c9-4bd1-9332-18370c7c70e1\n// - Agent ID = cluster01,cc296787-aee6-4ce4-b814-180627508d12,anyvm-01\n// - A Background Monitor = ExampleMonitor\n// - Files Produced = monitor.log\n//\n// The blob virtual folder paths/names would like the following:\n24149a49-66c9-4bd1-9332-18370c7c70e1/cluster01,cc296787-aee6-4ce4-b814-180627508d12,anyvm-01/examplemonitor/2022-03-07T01:32:27.1237655Z-monitor.log\n24149a49-66c9-4bd1-9332-18370c7c70e1/cluster01,cc296787-aee6-4ce4-b814-180627508d12,anyvm-01/examplemonitor/2022-03-07T01:34:32.6483092Z-monitor.log\n24149a49-66c9-4bd1-9332-18370c7c70e1/cluster01,cc296787-aee6-4ce4-b814-180627508d12,anyvm-01/examplemonitor/2022-03-07T01:36:30.2645013Z-monitor.log\n\n// Structure Within the Blob Store:\n// -----------------------------------------------\n// (container) monitors\n//   -> (virtual folder) /24149a49-66c9-4bd1-9332-18370c7c70e1 \n//      -> (virtual folder) /cluster01,cc296787-aee6-4ce4-b814-180627508d12,anyvm-01\n//          -> (virtual folder) /examplemonitor\n//             -> (blob) 2022-03-07T01:32:27.1237655Z-monitor.log\n//             -> (blob) 2022-03-07T01:34:32.6483092Z-monitor.log\n//             -> (blob) 2022-03-07T01:36:30.2645013Z-monitor.log\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"integration-with-the-development-process"},"Integration with the Development Process"),(0,r.kt)("p",null,"This section describes how access to the supported blob stores can be integrated into the Virtual Client process."),(0,r.kt)("h5",{id:"how-blob-stores-are-integrated-into-dependencies"},"How Blob Stores are Integrated into Dependencies"),(0,r.kt)("p",null,"When the Virtual Client reads the blob stores (i.e. connection strings) from the command line, it will place a set of\nBlobStore objects into the dependencies collection that is passed into the constructors of ALL profile actions, dependencies\nand monitors."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// In the CommandBase class in the Main project\nList<BlobStore> blobStores = new List<BlobStore>();\nif (this.ContentBlobStore != null)\n{\n    blobStores.Add(this.ContentBlobStore);\n}\n\nif (this.PackagesBlobStore != null)\n{\n    blobStores.Add(this.PackagesBlobStore);\n}\n\nIServiceCollection dependencies = new ServiceCollection();\n...\ndependencies.AddSingleton<IEnumerable<BlobStore>>(blobStores);\n")),(0,r.kt)("p",null,"Each of the BlobStore instances describes a single blob store that can be then used within any of the components described\nin the profile. To use upload or download blobs from one of the stores, create a BlobManager instance. The blob manager has\nsimple download and upload methods available."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Monitors/ExampleMonitorWithBlobUploadIntegration.cs"},"Example Implementation/Usage")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// Using the example implementation noted above:\n//\n// Get the blob store reference and create a BlobManager to upload blobs to the store.\nif (this.TryGetContentStore(out BlobStore contentStore))\n{\n    DateTime snapshotTime = DateTime.UtcNow;\n    IBlobManager blobManager = new BlobManager(contentStore.ConnectionString);\n\n    // For this example, assume there is a file that contains the output of some monitoring\n    // toolset. We want to upload this file to the content blob store.\n    using (FileStream uploadStream = new FileStream(resultsFilePath, FileMode.Open, FileAccess.Read, FileShare.Read))\n    {\n        BlobDescriptor resultsBlob = new BlobDescriptor\n        {\n            // For this scenario, we have a folder structure and naming convention for each of the blobs\n            // that is specific to the monitor but that also allows for consecutive blobs to be uploaded without\n            // overwriting previously uploaded blobs.\n            //\n            // Example:\n            // Given an experiment ID = 24149a49-66c9-4bd1-9332-18370c7c70e1 and an Agent ID = cluster01,cc296787-aee6-4ce4-b814-180627508d12,anyvm-01:\n            //\n            // Format = 24149a49-66c9-4bd1-9332-18370c7c70e1/cluster01,cc296787-aee6-4ce4-b814-180627508d12,anyvm-01/examplemonitor/2022-03-07T01:32:27.1237655Z-monitor.log\n            BlobName = BlobDescriptor.ToPath(this.ExperimentId, this.AgentId, "examplemonitor", "monitor.log"),\n            ContainerName = "monitors",\n            ContentEncoding = Encoding.UTF8,\n            ContentType = "text/plain"\n        };\n\n        await blobManager.UploadBlobAsync(resultsBlob, uploadStream, cancellationToken)\n            .ConfigureAwait(false);\n    }\n}\n')))}u.isMDXComponent=!0},9889:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/blob-container-sas-1-92090121e019eb6d574ed1e48d2ec0ea.png"},379:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/blob-service-sas-1-913224b9cf8a2c796f3d819b91939292.png"},3702:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/blob-storage-support-1-d9b6235d6d18b00cc7b4386411085260.png"},9385:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/blob-storage-support-2-47336ce50b38a5094f58f1be47565aeb.png"}}]);