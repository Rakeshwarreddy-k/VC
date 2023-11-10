"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[3084],{5782:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var r=t(5893),s=t(3905);const i={},o="Redis Workload Profiles",l={id:"workloads/redis/redis-profiles",title:"Redis Workload Profiles",description:"The following profiles run customer-representative or benchmarking scenarios using the Memtier or Redis workloads against",source:"@site/docs/workloads/redis/redis-profiles.md",sourceDirName:"workloads/redis",slug:"/workloads/redis/redis-profiles",permalink:"/VirtualClient/docs/workloads/redis/redis-profiles",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/redis/redis-profiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Redis",permalink:"/VirtualClient/docs/workloads/redis/"},next:{title:"SPECcpu",permalink:"/VirtualClient/docs/workloads/speccpu/"}},d={},a=[{value:"Client/Server Topology Support",id:"clientserver-topology-support",level:2},{value:"PERF-REDIS.json",id:"perf-redisjson",level:2}];function c(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"redis-workload-profiles",children:"Redis Workload Profiles"}),"\n",(0,r.jsx)(n.p,{children:"The following profiles run customer-representative or benchmarking scenarios using the Memtier or Redis workloads against\na Redis server."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/VirtualClient/docs/workloads/redis/",children:"Workload Details"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/VirtualClient/docs/guides/0020-client-server",children:"Client/Server Workloads"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"clientserver-topology-support",children:"Client/Server Topology Support"}),"\n",(0,r.jsx)(n.p,{children:"Redis workload profiles support running the workload on both a single system as well as in a client/server topology. This means that the workload supports\noperation on a single system or on 2 distinct systems. The client/server topology is typically used when it is desirable to include a network component in the\noverall performance evaluation. In a client/server topology, one system operates in the 'Client' role making calls to the system operating in the 'Server' role.\nThe Virtual Client instances running on the client and server systems will synchronize with each other before running the workload. In order to support a client/server topology,\nan environment layout file MUST be supplied to each instance of the Virtual Client on the command line to describe the IP address/location of other Virtual Client instances. An\nenvironment layout file is not required for the single system topology."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/VirtualClient/docs/guides/0020-client-server",children:"Environment Layouts"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'In the environment layout file provided to the Virtual Client, define the role of the client system/VM as "Client" and the role of the server system(s)/VM(s) as "Server".\nThe spelling of the roles must be exact. The IP addresses of the systems/VMs must be correct as well. The following example illustrates the\nidea. The name of the client must match the name of the system or the value of the agent ID passed in on the command line.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# Single System (environment layout not required)\n./VirtualClient --profile=PERF-REDIS.json --system=Juno --timeout=1440\n\n# Multi-System\n# On Client Role System...\n./VirtualClient --profile=PERF-REDIS.json --system=Juno --timeout=1440 --clientId=Client01 --layoutPath=/any/path/to/layout.json\n\n# On Server Role System...\n./VirtualClient --profile=PERF-REDIS.json --system=Juno --timeout=1440 --clientId=Server01 --layoutPath=/any/path/to/layout.json\n\n# Example contents of the \'layout.json\' file:\n{\n    "clients": [\n        {\n            "name": "Client01",\n            "role": "Client",\n            "ipAddress": "10.1.0.1"\n        },\n        {\n            "name": "Server01",\n            "role": "Server",\n            "ipAddress": "10.1.0.2"\n        }\n    ]\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"perf-redisjson",children:"PERF-REDIS.json"}),"\n",(0,r.jsx)(n.p,{children:"Runs the Memtier workload against to generate various network traffic patterns against a Redis server. Although this is the default client workload\nthe Redis benchmark itself can also be run to evaluate the performance of the Redis server.\nWe have two profiles for Redis.One supports redis with TLS and one without TLS."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-REDIS.json",children:"Workload Profile"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Supported Platform/Architectures"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"linux-x64"}),"\n",(0,r.jsx)(n.li,{children:"linux-arm64"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Supports Disconnected Scenarios"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"No. Internet connection required."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Dependencies"}),(0,r.jsx)(n.br,{}),"\n","The dependencies defined in the 'Dependencies' section of the profile itself are required in order to run the workload operations effectively."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Internet connection."}),"\n",(0,r.jsx)(n.li,{children:"The IP addresses defined in the environment layout (see above) for the Client and Server systems must be correct."}),"\n",(0,r.jsx)(n.li,{children:"The name of the Client and Server instances defined in the environment layout must match the agent/client IDs supplied on the command line (e.g. --agentId)\nor must match the name of the system as defined by the operating system itself."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Additional information on components that exist within the 'Dependencies' section of the profile can be found in the following locations:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://microsoft.github.io/VirtualClient/docs/category/dependencies/",children:"Installing Dependencies"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Profile Parameters"}),(0,r.jsx)(n.br,{}),"\n","The following parameters can be optionally supplied on the command line to modify the behaviors of the workload."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Purpose"}),(0,r.jsx)(n.th,{children:"Default Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Duration"}),(0,r.jsx)(n.td,{children:"Optional. Defines the length of time to execute the Memtier benchmark operations against the Redis servers for each scenario in the profile."}),(0,r.jsx)(n.td,{children:"2 mins"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ClientInstances"}),(0,r.jsx)(n.td,{children:"Optional. Defines the number of distinct client instances that to execute requests against each Redis server concurrently."}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ServerInstances"}),(0,r.jsx)(n.td,{children:"Optional. Defines the number of distinct Redis server instances to run concurrently. This allows the user to adjust alongside the number of client instances for higher scale situations."}),(0,r.jsx)(n.td,{children:"# logical processors"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ServerThreadCount"}),(0,r.jsx)(n.td,{children:"Optional. The number of threads to use by the Redis server to handle operations."}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ServerPort"}),(0,r.jsx)(n.td,{children:"Optional. The initial port on which the Redis servers will listen for traffic. Additional ports will be used for each 1 server instance defined in a sequential manner (e.g. 6379, 6380, 6381)"}),(0,r.jsx)(n.td,{children:"6379"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"IsTLSEnabled"}),(0,r.jsx)(n.td,{children:'Optional. It defines if Redis server runs with TLS or not. "yes" for TLS, "no" for no TLS'}),(0,r.jsx)(n.td,{children:"no"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Component Parameters"}),(0,r.jsx)(n.br,{}),"\n","The following parameters describe the parameters within the profile components."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Server Role Parameter"}),(0,r.jsx)(n.th,{children:"Purpose"}),(0,r.jsx)(n.th,{children:"Default Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Scenario"}),(0,r.jsx)(n.td,{children:"Scenario use to define the purpose of the action in the profile. This can be used to specify exact actions to run or exclude from the profile."}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"BindToCores"}),(0,r.jsx)(n.td,{children:"True to instruct the Redis servers to bind to explicit cores on the system (e.g. 0, 1, 2, 3 )"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CommandLine"}),(0,r.jsx)(n.td,{children:"The command line to use for executing the Redis server."}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PackageName"}),(0,r.jsx)(n.td,{children:"The name of the package that contains the Redis server binaries/scripts."}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Port"}),(0,r.jsx)(n.td,{children:"The initial port on which the Redis servers will listen for traffic. Additional ports will be used for each 1 server instance defined in a sequental manner (e.g. 6379, 6380, 6381)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ServerInstances"}),(0,r.jsx)(n.td,{children:"The number of distinct Redis server instances to run concurrently."}),(0,r.jsx)(n.td,{children:"# logical processors"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ServerThreadCount"}),(0,r.jsx)(n.td,{children:"The number of threads to use by the Redis server to handle operations."}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Username"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)("mark",{children:"Required when Virtual Client itself is launched by any process running as 'root' (e.g. a daemon)"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Defines a specific username under which to run the Redis server."]}),(0,r.jsx)(n.td,{children:"The user account for the process that launches Virtual Client."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"IsTLSEnabled"}),(0,r.jsx)(n.td,{children:'It defines if Redis server runs with TLS or not. "yes" for TLS, "no" for no TLS'}),(0,r.jsx)(n.td,{children:"no"})]})]})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Client Role Parameter"}),(0,r.jsx)(n.th,{children:"Purpose"}),(0,r.jsx)(n.th,{children:"Default Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Scenario"}),(0,r.jsx)(n.td,{children:"Scenario use to define the purpose of the action in the profile. This can be used to specify exact actions to run or exclude from the profile."}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ClientInstances"}),(0,r.jsx)(n.td,{children:"Defines the number of concurrent Memtier processes to start for execution of requests against the Memcached server. Note that each client instance will open 1 connection against the server for each --thread and --clients definition (e.g. --threads 16 --clients 16 == 256 connections). Ensure the Memcached server OS limits exceed this number of connections (e.g. ulimit -Sn on Linux)."}),(0,r.jsx)(n.td,{children:"8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CommandLine"}),(0,r.jsx)(n.td,{children:"The command line to use for executing the Memtier workload against the Memcached server. Note that the --port and --server options will be added automatically by the executor. For the --key-pattern option, 'S' means sequential distribution, 'R' means uniform random distribution and 'G' means Gaussian distribution of object."}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PackageName"}),(0,r.jsx)(n.td,{children:"The name of the package that contains the Memtier benchmark binaries/scripts."}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"WarmUp"}),(0,r.jsx)(n.td,{children:"True if the component/action is meant to be used to warmup the Memcached server. Metrics will not be captured in warmup steps."}),(0,r.jsx)(n.td,{children:"false"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"IsTLSEnabled"}),(0,r.jsx)(n.td,{children:'It defines if Redis server runs with TLS or not. "yes" for TLS, "no" for no TLS'}),(0,r.jsx)(n.td,{children:"no"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Profile Runtimes"}),(0,r.jsx)(n.br,{}),"\n","See the 'Metadata' section of the profile for estimated runtimes. These timings represent the length of time required to run a single round of profile\nactions. These timings can be used to determine minimum required runtimes for the Virtual Client in order to get results. These are often estimates based on the\nnumber of system cores."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Usage Examples"}),(0,r.jsx)(n.br,{}),"\n","The following section provides a few basic examples of how to use the workload profile. Additional usage examples can be found in the\n'Usage Scenarios/Examples' link at the top."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# When running on a single system (environment layout not required)\n./VirtualClient --profile=PERF-REDIS.json --system=Demo --timeout=250 --packageStore="{BlobConnectionString|SAS Uri}"\n\n# When running in a client/server environment\n./VirtualClient --profile=PERF-REDIS.json --system=Demo --timeout=1440 --clientId=Client01 --layoutPath="/any/path/to/layout.json" --packageStore="{BlobConnectionString|SAS Uri}"\n./VirtualClient --profile=PERF-REDIS.json --system=Demo --timeout=1440 --clientId=Server01 --layoutPath="/any/path/to/layout.json" --packageStore="{BlobConnectionString|SAS Uri}"\n'})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},3905:(e,n,t)=>{t.d(n,{ah:()=>a});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var d=r.createContext({}),a=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,d=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=a(t),p=s,f=u["".concat(d,".").concat(p)]||u[p]||c[p]||i;return t?r.createElement(f,o(o({ref:n},h),{},{components:t})):r.createElement(f,o({ref:n},h))}));h.displayName="MDXCreateElement"}}]);