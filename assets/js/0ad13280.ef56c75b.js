"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[5214],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=u(n),c=r,g=m["".concat(s,".").concat(c)]||m[c]||p[c]||i;return n?a.createElement(g,l(l({ref:e},d),{},{components:n})):a.createElement(g,l({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6160:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={},l="Command Line Options",o={unversionedId:"guides/0010-command-line",id:"guides/0010-command-line",title:"Command Line Options",description:"The following sections describe the command line options available on the Virtual Client application.",source:"@site/docs/guides/0010-command-line.md",sourceDirName:"guides",slug:"/guides/0010-command-line",permalink:"/VirtualClient/docs/guides/0010-command-line",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/guides/0010-command-line.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started (Docker)",permalink:"/VirtualClient/docs/guides/0003-getting-started-docker"},next:{title:"Profiles",permalink:"/VirtualClient/docs/guides/0011-profiles"}},s={},u=[{value:"Default Command Options",id:"default-command-options",level:2},{value:"Subcommands",id:"subcommands",level:2},{value:"Exit Codes",id:"exit-codes",level:2},{value:"Response File Support",id:"response-file-support",level:2}],d={toc:u};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"command-line-options"},"Command Line Options"),(0,r.kt)("p",null,"The following sections describe the command line options available on the Virtual Client application."),(0,r.kt)("h2",{id:"default-command-options"},"Default Command Options"),(0,r.kt)("p",null,"The following command line options are available on the default Virtual Client command. The default command allows the user to execute one or more profiles\non the system."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--p, --profile=\\<profile",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"string/text"),(0,r.kt)("td",{parentName:"tr",align:null},"The execution profile which indicates the set of workloads to run.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--ps, --packages, --packageStore=\\<authtoken",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,r.kt)("td",{parentName:"tr",align:null},"string/connection string/SAS"),(0,r.kt)("td",{parentName:"tr",align:null},"A full connection string or SAS URI to an Azure storage account blob store from which workload and dependency packages can be downloaded. This is required for most workloads because the workload binary/script packages are not typically packaged with the Virtual Client application itself. Contact the VC Team to get a SAS URI for your team. See ",(0,r.kt)("a",{parentName:"td",href:"/VirtualClient/docs/guides/0600-integration-blob-storage"},"Azure Storage Account Integration"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--a, --agentId, --clientId=\\<id",">"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"string/text"),(0,r.kt)("td",{parentName:"tr",align:null},"An identifier that can be used to uniquely identify the instance of the Virtual Client in telemetry separate from other instances. The default value is the name of the system if this option is not explicitly defined (i.e. the name as defined by the operating system).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--port, --api-port=\\<port",">"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The port to use for hosting the Virtual Client REST API service for profiles that allow multi-system, client/server operations (e.g. networking). Additionally, a port may be defined for each role associated with the profile operations using the format {Port}/{Role} with each port/role combination delimited by a comma (e.g. 4501/Client,4502/Server).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--cs, --content, --contentStore=\\<authtoken",">"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"string/connection string/SAS"),(0,r.kt)("td",{parentName:"tr",align:null},"A full connection string or SAS URI to an Azure storage account blob store where files/content can be uploaded as part of background monitoring processes. Contact the VC Team to get a SAS URI for your team. See ",(0,r.kt)("a",{parentName:"td",href:"/VirtualClient/docs/guides/0600-integration-blob-storage"},"Azure Storage Account Integration"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--cp, --contentPath, --contentPathTemplate=\\<folderPattern",">"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"string/text"),(0,r.kt)("td",{parentName:"tr",align:null},"The content path format/structure to use when uploading content to target storage resources. When not defined the 'Default' structure is used. Default: \"{experimentId}/{agentId}/{toolName}/{role}/{scenario}\"")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--eh, --eventHub, --eventHubConnectionString=\\<accesspolicy",">"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"string/connection string"),(0,r.kt)("td",{parentName:"tr",align:null},"A full connection string/access policy for the Azure Event Hub namespace where telemetry should be written. Contact the VC Team to get an access policy for your team. See ",(0,r.kt)("a",{parentName:"td",href:"/VirtualClient/docs/guides/0610-integration-event-hub"},"Azure Event Hub Integration"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--e, --experimentId=\\<guid",">"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"guid"),(0,r.kt)("td",{parentName:"tr",align:null},"A unique identifier that defines the ID of the experiment for which the Virtual Client workload is associated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--ff, --fail-fast"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Flag indicates that the application should exit immediately on first/any errors regardless of their severity. This applies to 'Actions' in the profile only. 'Dependencies' are ALWAYS implemented to fail fast. 'Monitors' are generally implemented to handle transient issues and to keep running/trying in the background.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--lp, --layoutPath=\\<path",">"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"string/path"),(0,r.kt)("td",{parentName:"tr",align:null},"A path to a environment layout file that provides additional metadata about the system/hardware on which the Virtual Client will run and information required to support client/server advanced topologies. See ",(0,r.kt)("a",{parentName:"td",href:"/VirtualClient/docs/guides/0020-client-server"},"Client/Server Support"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--ltf, --log-to-file, --logtofile"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Flag indicates that the output of processes executed by the Virtual Client should be written to log files in the logs directory.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--mt, --metadata=\\<key=value,,,key=value...",">"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"string/text"),(0,r.kt)("td",{parentName:"tr",align:null},"Metadata to include with all logs/telemetry output from the Virtual Client. ",(0,r.kt)("br",null),(0,r.kt)("br",null),'Each metadata entry should be akey value pair separated by ",,," delimiters (e.g. property1=value1,,,property2=value2).')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--pm, --parameters=\\<key=value,,,key=value...",">"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"string/text"),(0,r.kt)("td",{parentName:"tr",align:null},"Parameters or overrides to pass to the execution profiles that can modify aspects of their operation. ",(0,r.kt)("br",null),(0,r.kt)("br",null),'Each instruction should be a key value pair separated by ",,," delimiters (e.g. instruction1=value1,,,instruction2=value2).')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--sc, --scenarios=\\<scenario,scenario...",">"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"string/text"),(0,r.kt)("td",{parentName:"tr",align:null},"A comma-delimited list/subset of scenarios defined in the execution profile to include or exclude. Note that most components in a profile have a 'Scenario' parameter and this is the value to use. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"To include/run a subset of actions within the profile, provide the scenario names delimited by a comma (e.g. scenario1,scenario2,scenario3). To exclude one or more actions from being ran simply place a minus sign in front of the delimited scenario names (e.g. -scenario1,-scenario2,-scenario3).",(0,r.kt)("br",null),(0,r.kt)("br",null),"Monitors and dependencies within a profile can ONLY be excluded. This is specified in the same way that it is for actions with a minus sign in front of the scenario name(s).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--sd, --seed=\\<seed",">"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The seed used to guarantee identical randomization between executions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--s, --system=\\<executionSystem",">"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"string/text"),(0,r.kt)("td",{parentName:"tr",align:null},"The execution system/platform in which Virtual Client is running (e.g. Azure).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--t, --timeout=\\<mins_or_timespan",">",",deterministic",(0,r.kt)("br",null),"--timeout=\\<mins_or_timespan",">",",deterministic","*"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"timespan or integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies a timespan or the length of time (in minutes) that the Virtual Client should run before timing out and exiting (e.g. 1440, 01.00:00:00). The user can additionally provide an extra instruction to indicate the application should wait for deterministic completions.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Use the '",(0,r.kt)("strong",{parentName:"td"},"deterministic"),"' instruction to indicate the application should wait for the current action/workload to complete before timing out (e.g. --timeout=1440,deterministic).",(0,r.kt)("br",null),(0,r.kt)("br",null),"Use the '",(0,r.kt)("strong",{parentName:"td"},"deterministic*"),"' instruction to indicate the application should wait for all actions/workloads in the profile to complete before timing out (e.g. --timeout=1440,deterministic*).",(0,r.kt)("br",null),(0,r.kt)("br",null)," Note that this option cannot be used with the --iterations option.",(0,r.kt)("br",null),(0,r.kt)("br",null),"If neither the --timeout nor --iterations option are supplied, the Virtual Client will run non-stop until manually terminated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--i, --iterations=\\<count",">"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the number of iterations/rounds of all actions in the profile to execute before exiting.",(0,r.kt)("br",null),(0,r.kt)("br",null)," Note that this option cannot be used with the --timeout option.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--wt, --exit-wait, --flush-wait=<mins_or_timespan>"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"timespan or integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies a timespan or the length of time (in minutes) that the Virtual Client should wait for workload and monitor processes to complete and for telemetry to be fully flushed before exiting (e.g. 60, 01:00:00). This is useful for scenarios where Event Hub resources are used to ensure that all telemetry is uploaded successfully before exit. Default = 30 mins.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--dependencies"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Flag indicates that only the dependencies defined in the profile should be executed/installed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--debug"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"If this flag is set, verbose logging will be output to the console.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-?, -h, --help"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Show help information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--ver"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Show application version information.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' # Run a workload profile\n VirtualClient.exe --profile=PERF-CPU-OPENSSL.json --system=Demo --timeout=180 --packages="{BlobStoreConnectionString|SAS URI}"\n\n # Include specific metadata in the telemetry output by the application.\n VirtualClient.exe --profile=PERF-CPU-OPENSSL.json --system=Demo --timeout=180 --packages="{BlobStoreConnectionString|SAS URI}" --metadata="experimentGroup=Group A,,,cluster=cluster01,,,nodeId=eb3fc2d9-157b-4efc-b39c-a454a0779a5b,,,tipSessionId=5e66ecdf-575d-48b0-946f-5e6951545724,,,region=East US 2,,,vmName=VCTest4-01"\n\n # Include experiment/run IDs and agent IDs as correlation identifiers in addition to metadata output by the application.\n VirtualClient.exe --profile=PERF-CPU-OPENSSL.json --system=Demo --timeout=180 --experimentId=b9fd4dce-eb3b-455f-bc81-2a394d1ff849 --clientId=cluster01,eb3fc2d9-157b-4efc-b39c-a454a0779a5b,VCTest4-01 --packages="{BlobStoreConnectionString|SAS URI}" --metadata="experimentGroup=Group A,,,cluster=cluster01,,,nodeId=eb3fc2d9-157b-4efc-b39c-a454a0779a5b,,,tipSessionId=5e66ecdf-575d-48b0-946f-5e6951545724,,,region=East US 2,,,vmName=VCTest4-01"\n\n # Upload telemetry output to a target Event Hub namespace.\n VirtualClient.exe --profile=PERF-CPU-OPENSSL.json --system=Demo --timeout=180 --packages="{BlobStoreConnectionString|SAS URI}" --eventHub="{AccessPolicy}" --metadata="experimentGroup=Group A,,,cluster=cluster01,,,nodeId=eb3fc2d9-157b-4efc-b39c-a454a0779a5b,,,tipSessionId=5e66ecdf-575d-48b0-946f-5e6951545724,,,region=East US 2,,,vmName=VCTest4-01"\n\n # Use the \'deterministic\' instruction to ensure that an action/workload running is allowed\n # to complete before timing out.\n VirtualClient.exe --profile=PERF-CPU-OPENSSL.json --system=Demo --timeout=180,deterministic --packages="{BlobStoreConnectionString|SAS URI}"\n\n # Use the \'deterministic*\' instruction to ensure that all profile actions/workloads are allowed\n # to complete before timing out.\n VirtualClient.exe --profile=PERF-CPU-OPENSSL.json --system=Demo --timeout=180,deterministic* --packages="{BlobStoreConnectionString|SAS URI}"\n\n # Run the actions in a profile a certain number of iterations/rounds before exiting.\n VirtualClient.exe --profile=PERF-CPU-OPENSSL.json --system=Demo --iterations=3 --packages="{BlobStoreConnectionString|SAS URI}"\n\n # Install just the dependencies defined in the profile (but do not run the actions or monitors).\n VirtualClient.exe --profile=PERF-CPU-OPENSSL.json --system=Demo --dependencies --packages="{BlobStoreConnectionString|SAS URI}"\n\n # Log the output of workload, monitor and dependency processes to the logs directory on the file system.\n VirtualClient.exe --profile=PERF-CPU-OPENSSL.json --system=Demo --packages="{BlobStoreConnectionString|SAS URI}" --log-to-file\n')),(0,r.kt)("h2",{id:"subcommands"},"Subcommands"),(0,r.kt)("p",null,"The following tables describe the various subcommands that are supported by the Virtual Client application."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h3",{parentName:"li",id:"bootstrap"},"bootstrap"),'Command is used to bootstrap/install dependency packages on the system. This is used for example to install "extensions" packages to the Virtual Client before they\ncan be used (see the Developer Guide at the top for information on developing extensions). Note that many of the options below are similar to the default\ncommand documented above. Most are not required but allow the user/automation to use the same correlation identifiers for the bootstrapping operations as will\nbe used for the profile execution operations that may follow.')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--pkg, --package =\\<blobName",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"string/blob name"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the name/ID of a package to bootstrap/install (e.g. anypackage.1.0.0.zip).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--n, --name=\\<name",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"string/name"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the logical name of a package as it should be registered on the system (e.g. anypackage.1.0.0.zip -> anypackage).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--ps, --packages, --packageStore=\\<authtoken",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes/No"),(0,r.kt)("td",{parentName:"tr",align:null},"string/connection string/SAS"),(0,r.kt)("td",{parentName:"tr",align:null},"A full connection string or SAS URI to an Azure storage account blob store from which dependency packages can be downloaded. This is required if the dependency package DOES NOT already exist on the system and vice versa. Contact the VC Team to get a SAS URI for your team. See ",(0,r.kt)("a",{parentName:"td",href:"/VirtualClient/docs/guides/0600-integration-blob-storage"},"Azure Storage Account Integration"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--a, --agentId, --clientId=\\<id",">"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"string/text"),(0,r.kt)("td",{parentName:"tr",align:null},"An identifier that can be used to uniquely identify the instance of the Virtual Client in telemetry separate from other instances. The default value is the name of the system if this option is not explicitly defined (i.e. the name as defined by the operating system).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--eh, --eventHub, --eventHubConnectionString=\\<accesspolicy",">"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"string/connection string"),(0,r.kt)("td",{parentName:"tr",align:null},"A full connection string/access policy for the Azure Event Hub namespace where telemetry should be written. Contact the VC Team to get an access policy for your team. See ",(0,r.kt)("a",{parentName:"td",href:"/VirtualClient/docs/guides/0610-integration-event-hub"},"Azure Event Hub Integration"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--e, --experimentId=\\<guid",">"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"guid"),(0,r.kt)("td",{parentName:"tr",align:null},"A unique identifier that defines the ID of the experiment for which the Virtual Client workload is associated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--ltf, --log-to-file, --logtofile"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Flag indicates that the output of processes executed by the Virtual Client should be written to log files in the logs directory.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--mt, --metadata=\\<key=value,,,key=value...",">"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"string/text"),(0,r.kt)("td",{parentName:"tr",align:null},"Metadata to include with all logs/telemetry output from the Virtual Client. ",(0,r.kt)("br",null),(0,r.kt)("br",null),'Each metadata entry should be akey value pair separated by ",,," delimiters (e.g. property1=value1,,,property2=value2).')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--s, --system=\\<executionSystem",">"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"string/text"),(0,r.kt)("td",{parentName:"tr",align:null},"The execution system/platform in which Virtual Client is running (e.g. Azure).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--debug"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"If this flag is set, verbose logging will be output to the console.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-?, -h, --help"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Show help information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--ver"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Show application version information.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Run a basic bootstrap operation.\nVirtualClient.exe bootstrap --package=anyworkload.1.0.0.zip --name=anyworkload --packages="{BlobStoreConnectionString|SAS URI}"\n\n# Run a bootstrap operation supplying a range of additional correlation identifiers and metadata\n# that can then be associated with subsequent profile execution operations.\nVirtualClient.exe bootstrap --package=anyworkload.1.0.0.zip --name=anyworkload --system=Demo --experimentId=b9fd4dce-eb3b-455f-bc81-2a394d1ff849 --agentId=Agent01 --packages="{BlobStoreConnectionString|SAS URI}" --metadata="experimentGroup=Group A,,,cluster=cluster01,,,nodeId=eb3fc2d9-157b-4efc-b39c-a454a0779a5b,,,tipSessionId=5e66ecdf-575d-48b0-946f-5e6951545724,,,region=East US 2,,,vmName=VCTest4-01"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h3",{parentName:"li",id:"runapi"},"runapi"),"Runs the Virtual Client API service and optionally monitors the API (local or a remote instance) for heartbeats.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--port, --api-port=\\<port",">"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The port to use for hosting the Virtual Client REST API service. Additionally, a port may be defined for the Client system and Server system independently using the format '","{","Port","}","/","{","Role","}","' with each port/role combination delimited by a comma (e.g. 4501/Client,4502/Server).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--ip, --ipAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"string/IP address"),(0,r.kt)("td",{parentName:"tr",align:null},"An IPv4 or IPv6 address of a target/remote system on which a Virtual Client instance is running to monitor. The API service must also be running on the target instance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--mon, --monitor"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"If supplied as a flag (i.e. no argument), the Virtual Client will run a background thread that tests the local API. If an IP address is provided, the target Virtual Client API will be monitored/tested. This is typically used for debugging scenarios to make sure 2 different instances of the Virtual Client can communicate with each other through the API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--debug"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"If this flag is set, verbose logging will be output to the console.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-?, -h, --help"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Show help information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--ver"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Show application version information.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Run the API service locally.\nVirtualClient.exe runapi\n\n# Run the API service locally and monitor another remote instance of the Virtual Client.\nVirtualClient.exe runapi --monitor --ipAddress=1.2.3.4\n")),(0,r.kt)("h2",{id:"exit-codes"},"Exit Codes"),(0,r.kt)("p",null,"The Virtual Client application is instrumented to provide fine-grained return/exit codes that describe the outcome or result of the application operations. An exit code of\n0 means that the application was successful. Any non-zero exit code indicates a failure somewhere in the set of operations. See the definitions for a list of exit\ncodes and their meaning in the source code here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Contracts/Enumerations.cs"},"ErrorReason")),(0,r.kt)("h2",{id:"response-file-support"},"Response File Support"),(0,r.kt)("p",null,"The Virtual Client application supports response files out of the box. A response file is a file that contains the command line arguments within. This is useful for certain scenarios where\npassing in secrets (e.g. connection strings, SAS URIs) on the command line may not be supported by the automation process executing the Virtual Client application. The following examples shows\nhow to use response files with the Virtual Client on the command line."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# The extension does not really matter, but is is common to use one such as '*.rsp' or '*.response' to indicate the file is a response file.\nVirtualClient.exe @.\\CommandLineOptions.rsp\nVirtualClient.exe @C:\\VirtualClient\\win-x64\\CommandLineOptions.rsp\n\n# On Linux systems.\n./VirtualClient @./CommandLineOptions.rsp\n./VirtualClient @/home/anyuser/VirtualClient/linux-x64/CommandLineOptions.rsp\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Example Response File Contents\n# Each command line option and argument should be defined on a separate line within the file.\n#\n# Inside the CommandLineOptions.rsp File:\n\n--profile=PERF-CPU-OPENSSL.json\n--system=Demo\n--timeout=1440\n--experimentId=b9fd4dce-eb3b-455f-bc81-2a394d1ff849\n--clientId=cluster01,eb3fc2d9-157b-4efc-b39c-a454a0779a5b,VCTest4-01\n--packages="{BlobStoreConnectionString|SAS URI}"\n--eventHub="{AccessPolicy}"\n--metadata="experimentGroup=Group A,,,cluster=cluster01,,,nodeId=eb3fc2d9-157b-4efc-b39c-a454a0779a5b,,,tipSessionId=5e66ecdf-575d-48b0-946f-5e6951545724,,,region=East US 2,,,vmName=VCTest4-01" \n')))}p.isMDXComponent=!0}}]);