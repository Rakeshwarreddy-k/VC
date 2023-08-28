"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[9784],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),b=a,m=d["".concat(s,".").concat(b)]||d[b]||u[b]||r;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={},i="Azure Storage Account Integration",l={unversionedId:"guides/0600-integration-blob-storage",id:"guides/0600-integration-blob-storage",title:"Azure Storage Account Integration",description:"Virtual Client supports a few different types of Azure Blob stores that can be used as part of a workload profile execution. This documentation",source:"@site/docs/guides/0600-integration-blob-storage.md",sourceDirName:"guides",slug:"/guides/0600-integration-blob-storage",permalink:"/VirtualClient/docs/guides/0600-integration-blob-storage",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/guides/0600-integration-blob-storage.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Disconnected Scenarios Support",permalink:"/VirtualClient/docs/guides/0230-usage-disconnected-labs"},next:{title:"Azure Event Hub Integration",permalink:"/VirtualClient/docs/guides/0610-integration-event-hub"}},s={},c=[{value:"Supported Blob Stores",id:"supported-blob-stores",level:2},{value:"Blob Store Authentication",id:"blob-store-authentication",level:2},{value:"Blob Store Folder/File Naming Conventions",id:"blob-store-folderfile-naming-conventions",level:3},{value:"Integration with the Development Process",id:"integration-with-the-development-process",level:3},{value:"How Blob Stores are Integrated into Dependencies",id:"how-blob-stores-are-integrated-into-dependencies",level:5}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"azure-storage-account-integration"},"Azure Storage Account Integration"),(0,a.kt)("p",null,"Virtual Client supports a few different types of Azure Blob stores that can be used as part of a workload profile execution. This documentation\ncovers how to supply those blob stores to the Virtual Client on the command line as well as how to use them in Virtual Client codebase."),(0,a.kt)("h2",{id:"supported-blob-stores"},"Supported Blob Stores"),(0,a.kt)("p",null,"The following stores are supported by the Virtual Client. The stores must be Azure Storage Account blob stores."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Packages Store"),(0,a.kt)("br",{parentName:"p"}),"\n","The packages blob store contains workload and dependency packages that must be downloaded to a system during the execution of a\nworkload profile. These are typically NuGet/zip files that contain binaries, scripts, etc... that are required by the scenario profile."),(0,a.kt)("p",{parentName:"li"},"The packages store can be supplied to the Virtual Client on the command line using the '--packageStore' parameter and supplying the\nfull connection string to the Azure storage account blob resource."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# The blob container does not require authentication (i.e. blob-anonymous read access)\nVirtualClient.exe --profile=PERF-NETWORK.json --timeout=1440 --packageStore="https://any.blob.core.windows.net"\n\n# The blob continer requires authentication (e.g. a SAS token)\nVirtualClient.exe --profile=PERF-NETWORK.json --timeout=1440 --packageStore="https://any.blob.core.windows.net/packages?sp=r&st=2022-05-09T18:31:45Z&se=2030-05-10T02:31:45Z&spr=https&sv=2020-08-04&sr=c&sig=..."\n')),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"packages store",src:n(3702).Z,width:"1179",height:"479"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Content Store"),(0,a.kt)("br",{parentName:"p"}),"\n","The content blob store is used for uploading files and content captured by workloads or monitors that run as part of Virtual Client workload\noperations. For example, a monitor might be implemented to upload certain types of logs, bin files or cab files to the specified content blob\nstore."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'# The blob container does not require authentication (i.e. blob-anonymous read access)\nVirtualClient.exe --profile=PERF-NETWORK.json --timeout=1440 --contentStore="https://any.blob.core.windows.net"\n\n# The blob continer requires authentication (e.g. a SAS token)\nVirtualClient.exe --profile=PERF-NETWORK.json --timeout=1440 --contentStore="https://any.blob.core.windows.net/packages?sp=r&st=2022-05-09T18:31:45Z&se=2030-05-10T02:31:45Z&spr=https&sv=2020-08-04&sr=c&sig=..."\n')),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"monitoring content",src:n(9385).Z,width:"1350",height:"530"})))),(0,a.kt)("h2",{id:"blob-store-authentication"},"Blob Store Authentication"),(0,a.kt)("p",null,"Virtual Client supports the following authentication options for all blob stores:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview"},"Shared Access Signatures (SAS) Overview"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/rest/api/storageservices/create-account-sas?redirectedfrom=MSDN"},"Account Shared Access Signatures")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Storage Account Connection String"),(0,a.kt)("br",{parentName:"p"}),"\n","The primary or secondary connection string to the Azure storage account. This provides full access privileges to the entire\nstorage account but the least amount of security. This is generally recommended only for testing scenarios. The use of a\nSAS URI or connection string is preferred because it enables finer grained control of the exact resources within the storage\naccount that the application should be able to access.",(0,a.kt)("br",null),(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"(e.g. DefaultEndpointsProtocol=https;AccountName=anystorageaccount;AccountKey=w7Q+BxLw...;EndpointSuffix=core.windows.net)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Blob Service Connection String"),(0,a.kt)("br",{parentName:"p"}),"\n","This is a connection string to the Blob service in the storage account. It allows user-defined/restricted access privileges to be defined for\nall containers and blobs in the storage account. This is a good fit for scenarios where content (e.g. from different monitors) is uploaded to\ndifferent containers within the blob store and thus the application needs access to all containers.",(0,a.kt)("br",null),(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"(e.g. BlobEndpoint=https://anystorageaccount.blob.core.windows.net/;SharedAccessSignature=sv=2020-08-04&ss=b&srt=c&sp=rwlacx&se=2021-11-23T14:30:18Z&st=2021-11-23T02:19:18Z&spr=https&sig=jcql6El...)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Blob Service SAS URI"),(0,a.kt)("br",{parentName:"p"}),"\n","This is a SAS URI to the Blob service in the storage account. This provides exactly the same types of privileges as the Blob service-level connection string noted above.",(0,a.kt)("br",null),(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"(e.g. https://anystorageaccount.blob.core.windows.net/?sv=2020-08-04&ss=b&srt=c&sp=rwlacx&se=2021-11-23T14:30:18Z&st=2021-11-23T02:19:18Z&spr=https&sig=jcql6El...)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Blob Container SAS URI"),(0,a.kt)("br",{parentName:"p"}),"\n","This is a SAS URI to a single blob container within the storage account. This is the most restrictive way of providing privileges but is also the most secure because it\nprovides the least amount of access to the application. This is a good fit for scenarios where all content (e.g. across all monitors) is uploaded to a single container\nwithin the blob store.",(0,a.kt)("br",null),(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"(e.g. https://anystorageaccount.blob.core.windows.net/packages?sp=r&st=2021-11-23T18:22:49Z&se=2021-11-24T02:22:49Z&spr=https&sv=2020-08-04&sr=c&sig=ndyPRH...)")))),(0,a.kt)("p",null,"Use the following recommendations when creating shared access keys in the blob store to ensure the right amount of privileges\nare granted to the Virtual Client application for uploading and downloading blobs."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Blob Service Connection Strings or SAS URIs"),(0,a.kt)("br",{parentName:"p"}),"\n","Select the following options when defining shared access signatures at the Blob service level:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Allowed services = Blob"),(0,a.kt)("li",{parentName:"ul"},"Allowed resource types = Container, Object"),(0,a.kt)("li",{parentName:"ul"},"Allowed permissions = Read, Write, Create"),(0,a.kt)("li",{parentName:"ul"},"Allowed protocols = HTTPS only")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(379).Z,width:"1357",height:"914"})))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Blob Container SAS URIs"),(0,a.kt)("br",{parentName:"p"}),"\n","Select the following options when defining shared access signatures at the Blob container level:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Signing method = Account key"),(0,a.kt)("li",{parentName:"ul"},"Permissions = Read, Write, Create"),(0,a.kt)("li",{parentName:"ul"},"Allowed protocols = HTTPS only")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(9889).Z,width:"1000",height:"743"})))),(0,a.kt)("h3",{id:"blob-store-folderfile-naming-conventions"},"Blob Store Folder/File Naming Conventions"),(0,a.kt)("p",null,"In  order to ensure that files associated with Virtual Client executors or monitors are easy to find in the blob stores, Virtual Client supports a flexible blob path pattern.\nAt a high level, all files associated with a given experiment are contained together in the blob store."),(0,a.kt)("p",null,'The virtual path of uploaded logs in blob storage is controlled by a VirtualClient Command Line Option parameter "--contentPathPattern".'),(0,a.kt)("p",null,'Example: --contentPathPattern="any-value1/{standardProperty1}any-value2{standardProperty2}/{standardProperty3}/any-value3/{standardProperty4}".'),(0,a.kt)("p",null,'In above example, the virtual blob folder structure will have sub-folders corresponding to each element separated by a \'/\' in the\nContentPathPattern. The inlined values that are enclosed within brackets "{}", like "standaradProperty1" and "standaradProperty2",\nneeds to be one among the 5 defined standard properties of Virtual Client (ExperimentId, AgentId, ToolName, Role, Scenario).'),(0,a.kt)("p",null,"The first component of ContentPathPattern (any-value1 in above example) will be taken up as the name of Blob storage Container where all files will be uploaded.\nThe next component ({standardProperty1} in above example) will be the root folder within the container and so on for the complete virtual folder structure within the blob storage."),(0,a.kt)("p",null,'The default value of "ContentPathPattern" is "{experimentId}/{agentId}/{toolName}/{role}/{scenario}". In the default template, each element\nis a standard property identified by Virtual Client.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Experiment ID"),(0,a.kt)("br",{parentName:"p"}),"\n","The ID of the experiment is used to ensure all files associated with any executors or monitors are in the same virtual folder within the blob store.\nFurthermore because an experiment ID is a global identifier, it is easier for the user or automation to find files associated with a given experiment\n(e.g. for debugging/triage).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Agent ID"),(0,a.kt)("br",{parentName:"p"}),"\n","The ID of the Virtual Client instance running (i.e. the agent) is also included. This ensures that files captured from a specific VM or node etc... are easy\nto distinguish from each other.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Tool Name"),(0,a.kt)("br",{parentName:"p"}),"\n","This is the name of the executor or monitor that created the files (directly or indirectly).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Role"),(0,a.kt)("br",{parentName:"p"}),"\n","This is relevant for workloads that use multiple systems, and each system has an assigned role like Client or Server.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"ScenarioName"),(0,a.kt)("br",{parentName:"p"}),"\n","It is an indicator of the scenario being tested by the workload. It is defined for each action/monitor in an execution profile."))),(0,a.kt)("p",null,"All files will be uploaded in a virtual folder structure as defined by the ContentPathPattern. For each file uploaded, a timestamp will be\nprefixed to it so as to provide unique names."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"File Name"),(0,a.kt)("br",{parentName:"p"}),"\n","This is the name of the file as it should be reflected in the blob store. A timestamp (round-trip date/time format) will be added to the beginning of the file name\n(e.g. 2023-08-17t0637583781z-monitor.log). The addition of the timestamp ensures that the files within a given virtual folder in the blob store will all\nhave unique names in order to avoid collisions. Round-trip date/time formats in addition to being a valid timestamp are naturally sortable in UX experiences\nsuch as a web browser.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Round-Trip Formatted Timestamp"),(0,a.kt)("br",{parentName:"p"}),"\n","As noted above, a round-trip formatted timestamp will be added to each file name to ensure uniqueness."))),(0,a.kt)("p",null,"Given the pieces of information noted above, the format for virtual paths and file names will look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// ContentPathPattern and Parameters as defined in Virtual Client CommandLine:\n// -----------------------------------------------\nVirtualClient.exe --profile=........ --contentPathPattern="value1/expt_{experimentId}_agent_{agentId}/{toolName}/value-2" \n\n// Examples:\n// -----------------------------------------------\n// Given the Following Information:\n// - Experiment ID = 24149a49-66c9-4bd1-9332-18370c7c70e1\n// - Agent ID = cluster01,cc296787-aee6-4ce4-b814-180627508d12,anyvm-01\n// - ToolName - a Background Monitor = exampleMonitor\n// - Files Produced = monitor.log\n//\n// The blob virtual folder paths/names would like the following:\nvalue1/expt_24149a49-66c9-4bd1-9332-18370c7c70e1_expt_agent_cluster01,cc296787-aee6-4ce4-b814-180627508d12,anyvm-01/examplemonitor/value-2/2022-03-07T01:32:27.1237655Z-monitor.log\nvalue1/expt_24149a49-66c9-4bd1-9332-18370c7c70e1_expt_agent_cluster01,cc296787-aee6-4ce4-b814-180627508d12,anyvm-01/examplemonitor/value-2/2022-03-07T01:34:32.6483092Z-monitor.log\nvalue1/expt_24149a49-66c9-4bd1-9332-18370c7c70e1_expt_agent_cluster01,cc296787-aee6-4ce4-b814-180627508d12,anyvm-01/examplemonitor/value-2/2022-03-07T01:36:30.2645013Z-monitor.log\n\n// Structure Within the Blob Store:\n// -----------------------------------------------\n// (container) value1 \n//   -> (virtual folder) /expt_24149a49-66c9-4bd1-9332-18370c7c70e1_agent_cluster01,cc296787-aee6-4ce4-b814-180627508d12,anyvm-01\n//     -> (virtual folder) /examplemonitor\n//       -> (virtual folder) /value-2\n//         -> (blob) 2022-03-07T01:32:27.1237655Z-monitor.log\n//         -> (blob) 2022-03-07T01:34:32.6483092Z-monitor.log\n//         -> (blob) 2022-03-07T01:36:30.2645013Z-monitor.log\n')),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"integration-with-the-development-process"},"Integration with the Development Process"),(0,a.kt)("p",null,"This section describes how access to the supported blob stores can be integrated into the Virtual Client process."),(0,a.kt)("h5",{id:"how-blob-stores-are-integrated-into-dependencies"},"How Blob Stores are Integrated into Dependencies"),(0,a.kt)("p",null,"When the Virtual Client reads the blob stores (i.e. connection strings) from the command line, it will place a set of\nBlobStore objects into the dependencies collection that is passed into the constructors of ALL profile actions, dependencies\nand monitors."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// In the CommandBase class in the Main project\nList<BlobStore> blobStores = new List<BlobStore>();\nif (this.ContentBlobStore != null)\n{\n    blobStores.Add(this.ContentBlobStore);\n}\n\nif (this.PackagesBlobStore != null)\n{\n    blobStores.Add(this.PackagesBlobStore);\n}\n\nIServiceCollection dependencies = new ServiceCollection();\n...\ndependencies.AddSingleton<IEnumerable<BlobStore>>(blobStores);\n")),(0,a.kt)("p",null,"Each of the BlobStore instances describes a single blob store that can be then used within any of the components described\nin the profile. To use upload or download blobs from one of the stores, create a BlobManager instance. The blob manager has\nsimple download and upload methods available."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Monitors/ExampleMonitorWithBlobUploadIntegration.cs"},"Example Implementation/Usage")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// Using the example implementation noted above:\n//\n// Get the blob store reference and create a BlobManager to upload blobs to the store.\nif (this.TryGetContentStore(out BlobStore contentStore))\n{\n    DateTime snapshotTime = DateTime.UtcNow;\n    IBlobManager blobManager = new BlobManager(contentStore.ConnectionString);\n\n    // For this example, assume there is a file that contains the output of some monitoring\n    // toolset. We want to upload this file to the content blob store.\n    using (FileStream uploadStream = new FileStream(resultsFilePath, FileMode.Open, FileAccess.Read, FileShare.Read))\n    {\n        BlobDescriptor resultsBlob = new BlobDescriptor\n        {\n            // For this scenario, we have a folder structure and naming convention for each of the blobs\n            // that is specific to the monitor but that also allows for consecutive blobs to be uploaded without\n            // overwriting previously uploaded blobs.\n            //\n            // Example:\n            // Given an experiment ID = 24149a49-66c9-4bd1-9332-18370c7c70e1 and an Agent ID = cluster01,cc296787-aee6-4ce4-b814-180627508d12,anyvm-01:\n            //\n            // Format = 24149a49-66c9-4bd1-9332-18370c7c70e1/cluster01,cc296787-aee6-4ce4-b814-180627508d12,anyvm-01/examplemonitor/2022-03-07T01:32:27.1237655Z-monitor.log\n            BlobName = BlobDescriptor.ToPath(this.ExperimentId, this.AgentId, "examplemonitor", "monitor.log"),\n            ContainerName = "monitors",\n            ContentEncoding = Encoding.UTF8,\n            ContentType = "text/plain"\n        };\n\n        await blobManager.UploadBlobAsync(resultsBlob, uploadStream, cancellationToken)\n            .ConfigureAwait(false);\n    }\n}\n')))}u.isMDXComponent=!0},9889:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/blob-container-sas-1-92090121e019eb6d574ed1e48d2ec0ea.png"},379:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/blob-service-sas-1-913224b9cf8a2c796f3d819b91939292.png"},3702:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/blob-storage-support-1-d9b6235d6d18b00cc7b4386411085260.png"},9385:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/blob-storage-support-2-47336ce50b38a5094f58f1be47565aeb.png"}}]);