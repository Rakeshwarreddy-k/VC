"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[8308],{681:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var i=t(5893),s=t(3905);const n={id:"overview",sidebar_position:1},l="Platform Overview",o={id:"overview/overview",title:"Platform Overview",description:"The Virtual Client is a unified workload and system monitoring platform for running customer-representative scenarios on virtual machines or physical hosts/blades in the Azure Cloud.",source:"@site/docs/overview/overview.md",sourceDirName:"overview",slug:"/overview/",permalink:"/VirtualClient/docs/overview/",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/overview/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/VirtualClient/docs/category/overview"},next:{title:"Platform Features",permalink:"/VirtualClient/docs/overview/features"}},d={},c=[{value:"Team Contacts",id:"team-contacts",level:2},{value:"Downloads",id:"downloads",level:2},{value:"Platform/Architectures",id:"platformarchitectures",level:2},{value:"Supported Workloads/Benchmarks",id:"supported-workloadsbenchmarks",level:2},{value:"Supported System Monitoring Facilities",id:"supported-system-monitoring-facilities",level:2},{value:"Data Collection Notice",id:"data-collection-notice",level:2},{value:"Trademarks",id:"trademarks",level:2}];function h(e){const r={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.ah)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"platform-overview",children:"Platform Overview"}),"\n",(0,i.jsx)(r.p,{children:"The Virtual Client is a unified workload and system monitoring platform for running customer-representative scenarios on virtual machines or physical hosts/blades in the Azure Cloud.\nThe platform supports a wide range of different industry standard/benchmark workloads used to measuring various aspects of the system under test (e.g. CPU, I/O, network performance, power consumption).\nThe platform additionally provides the ability to capture important performance and reliability measurements from the underlying system. The platform supports all business-critical\nAzure environments including guest/VM systems, host/blade systems and data center/DC lab systems. The platform additionally supports both x64 and ARM64 compute architectures."}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/VirtualClient/docs/overview/features",children:"Platform Features"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/VirtualClient/docs/overview/design",children:"Platform Design"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/VirtualClient/docs/guides/0010-command-line",children:"Usage"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/VirtualClient/docs/guides/0200-usage-examples",children:"Usage Examples"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/VirtualClient/docs/developing/0010-develop-guide",children:"Developer Guide"})}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"team-contacts",children:"Team Contacts"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"mailto:virtualclient@microsoft.com",children:"virtualclient@microsoft.com"})}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"downloads",children:"Downloads"}),"\n",(0,i.jsx)(r.p,{children:"Release versions of the Virtual Client are available on public NuGet.org. Note that versions that are not tagged as 'Release'\nare considered beta quality. Production quality releases will be tagged appropriately."}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["NuGet Releases","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://www.nuget.org/packages/VirtualClient",children:"https://www.nuget.org/packages/VirtualClient"})}),"\n",(0,i.jsx)(r.li,{children:"Please note we will be renaming package to Microsoft.VirtualClient in the future pending MSFT internal processes."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"platformarchitectures",children:"Platform/Architectures"}),"\n",(0,i.jsx)(r.p,{children:"In the workload and profile sections below, the following designations are used to indicate the OS platform and CPU architecture on which the workloads are supported:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"linux-x64"}),"\nThe workload is supported on the Linux operating system for Intel and AMD x64 architectures.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"linux-arm64"}),"\nThe workload is supported on the Linux operating system for ARM64/AARCH64 architectures.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"win-x64"}),"\nThe workload is supported on the Windows operating system for Intel and AMD x64 architectures.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"win-arm64"}),"\nThe workload is supported on the Windows operating system for ARM64/AARCH64 architectures."]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"supported-workloadsbenchmarks",children:"Supported Workloads/Benchmarks"}),"\n",(0,i.jsx)(r.p,{children:"The following list of workloads are used by Virtual Client profiles to exercise the system components in a consistent way required to measure performance baselines and differences."}),"\n",(0,i.jsx)(r.admonition,{title:"Comply to licenses you are using",type:"caution",children:(0,i.jsx)(r.p,{children:"VirtualClient handles the installation and execution of various tools. Individual license files are not prompted for each workload. By using\nVirtualClient, users accept the license of each of the benchmarks individually, comply to the terms for the tool you are using, and take responsibility\nfor using them."})}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:(0,i.jsx)(r.strong,{children:"Workload/Benchmark"})}),(0,i.jsx)(r.th,{children:(0,i.jsx)(r.strong,{children:"Specialization"})}),(0,i.jsx)(r.th,{children:(0,i.jsx)(r.strong,{children:"Supported Platforms/Architectures"})}),(0,i.jsx)(r.th,{children:(0,i.jsx)(r.strong,{children:"License(s)"})})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/compression/7zip",children:"7zip"})}),(0,i.jsx)(r.td,{children:"Compression"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.7-zip.org/faq.html",children:"GNU LGPL"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/aspnetbench/aspnetbench",children:"AspNetBench"})}),(0,i.jsx)(r.td,{children:"ASP.NET Web Server."}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64, win-x64, win-arm64"}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)(r.a,{href:"https://github.com/dotnet/aspnetcore/blob/main/LICENSE.txt",children:"MIT (ASP.NET)"}),(0,i.jsx)("br",{}),(0,i.jsx)(r.a,{href:"https://github.com/codesenberg/bombardier/blob/master/LICENSE",children:"MIT (Bombardier)"})]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/blenderbenchmark",children:"BlenderBenchmark"})}),(0,i.jsx)(r.td,{children:"Graphics Rendering Performance"}),(0,i.jsx)(r.td,{children:"win-x64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://projects.blender.org/infrastructure/blender-open-data/src/branch/main/LICENSE",children:"GNU LGPL"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/coremark/coremark",children:"CoreMark"})}),(0,i.jsx)(r.td,{children:"CPU Performance"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://github.com/eembc/coremark/blob/main/LICENSE.md",children:"Apache+Custom"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/coremark",children:"CoreMark Pro"})}),(0,i.jsx)(r.td,{children:"Precision CPU"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64, win-x64, win-arm64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://github.com/eembc/coremark-pro/blob/main/LICENSE.md",children:"Apache+Custom"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/network-suite/network-suite.md",children:"CPS"})}),(0,i.jsx)(r.td,{children:"Network Connection Reliability"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64, win-x64, win-arm64"}),(0,i.jsx)(r.td,{children:"Microsoft-Developed"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/dcgmi/dcgmi.md",children:"DCGMI"})}),(0,i.jsx)(r.td,{children:"GPU Qualification"}),(0,i.jsx)(r.td,{children:"linux-x64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://github.com/NVIDIA/DCGM/blob/master/LICENSE",children:"Apache-2.0"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/deathstarbench/deathstarbench.md",children:"DeathStarBench"})}),(0,i.jsx)(r.td,{children:"Docker Swarm/Container Microservices"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64, win-x64, win-arm64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://github.com/delimitrou/DeathStarBench/blob/master/LICENSE",children:"Apache-2.0"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/diskspd/diskspd.md",children:"DiskSpd"})}),(0,i.jsx)(r.td,{children:"Disk I/O Performance"}),(0,i.jsx)(r.td,{children:"win-x64, win-arm64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://github.com/microsoft/diskspd/blob/master/LICENSE",children:"MIT"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/fio/fio.md",children:"Flexible IO Tester (FIO)"})}),(0,i.jsx)(r.td,{children:"Disk I/O Performance"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64, win-x64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://github.com/axboe/fio/blob/master/COPYING",children:"GPL-2.0"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/geekbench/",children:"GeekBench5"})}),(0,i.jsx)(r.td,{children:"CPU Performance"}),(0,i.jsx)(r.td,{children:"linux-x64, win-x64, win-arm64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.primatelabs.com/legal/eula-v5.html",children:"End User License Required"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/graph500/graph500.md",children:"Graph500"})}),(0,i.jsx)(r.td,{children:"3D Simulation"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://github.com/graph500/graph500/blob/newreference/license.txt",children:"Custom"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/compression/gzip.md",children:"Gzip"})}),(0,i.jsx)(r.td,{children:"Compression"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.gnu.org/software/gzip/",children:"GPL"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/hpcg/hpcg.md",children:"HPCG"})}),(0,i.jsx)(r.td,{children:"High Performance Compute (HPC)"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://github.com/hpcg-benchmark/hpcg/blob/master/COPYING",children:"Custom"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/hplinpack/hplinpack.md",children:"HPLinpack"})}),(0,i.jsx)(r.td,{children:"Linear Equations"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://netlib.org/benchmark/hpl/IBM_LICENSE.TXT",children:"IBM"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/lapack/lapack.md",children:"LAPACK"})}),(0,i.jsx)(r.td,{children:"Linear Equations"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64, win-x64, win-arm64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://github.com/Reference-LAPACK/lapack/blob/master/LICENSE",children:"Custom"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/network-suite/network-suite.md",children:"Latte"})}),(0,i.jsx)(r.td,{children:"Network Latencies"}),(0,i.jsx)(r.td,{children:"win-x64, win-arm64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://github.com/microsoft/latte/blob/main/LICENSE",children:"MIT"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/lmbench/lmbench.md",children:"LMbench"})}),(0,i.jsx)(r.td,{children:"Memory Performance"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://github.com/intel/lmbench/blob/master/COPYING",children:"GPL-2.0"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/compression/lzbench",children:"LZBench"})}),(0,i.jsx)(r.td,{children:"Compression/Streaming"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64, win-x64, win-arm64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://github.com/inikep/lzbench",children:"None"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/memcached/memcached.md",children:"Memcached"})}),(0,i.jsx)(r.td,{children:"In-Memory Data Cache"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64"}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)(r.a,{href:"https://github.com/memcached/memcached/blob/master/LICENSE",children:"BSD-3 (Memcached)"}),(0,i.jsx)("br",{}),(0,i.jsx)(r.a,{href:"https://github.com/RedisLabs/memtier_benchmark/blob/master/COPYING",children:"GPL-2.0 (Memtier)"})]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/mlperf/mlperf.md",children:"MLPerf"})}),(0,i.jsx)(r.td,{children:"Machine Learning"}),(0,i.jsx)(r.td,{children:"linux-x64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://github.com/mlcommons/training/blob/master/LICENSE.md",children:"Custom"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/nasparallel/nasparallel.md",children:"NAS Parallel"})}),(0,i.jsx)(r.td,{children:"High Performance Compute (HPC)"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://opensource.org/licenses/nasa1.3.php",children:"NASA-1.3"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/network-ping/network-ping.md",children:"Network ICMP Ping"})}),(0,i.jsx)(r.td,{children:"Network Latencies"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64, win-x64, win-arm64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://github.com/microsoft/VirtualClient/blob/main/LICENSE",children:"MIT"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/network-suite/network-suite.md",children:"NTttcp"})}),(0,i.jsx)(r.td,{children:"Network Bandwidth"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64, win-x64, win-arm64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://github.com/microsoft/ntttcp/blob/main/LICENSE",children:"MIT"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/openfoam/openfoam.md",children:"OpenFOAM"})}),(0,i.jsx)(r.td,{children:"Computational Fluid Dynamics"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://github.com/OpenFOAM/OpenFOAM-10/blob/master/COPYING",children:"Custom"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/openssl/openssl.md",children:"OpenSSL"})}),(0,i.jsx)(r.td,{children:"Cryptography/Encryption"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64, win-x64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://github.com/openssl/openssl/blob/master/LICENSE.txt",children:"Apache-2.0"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/compression/pbzip2.md",children:"Pbzip2"})}),(0,i.jsx)(r.td,{children:"Compression"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"http://compression.great-site.net/pbzip2/",children:"BSD"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/postgresql//postgresql.md",children:"PostgreSQL"})}),(0,i.jsx)(r.td,{children:"Relational Database Performance"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64, win-x64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.postgresql.org/about/licence/",children:"PostgreSQL"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/prime95/prime95.md",children:"Prime95"})}),(0,i.jsx)(r.td,{children:"CPU Stress"}),(0,i.jsx)(r.td,{children:"linux-x64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.mersenne.org/legal/",children:"Custom"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/redis/redis.md",children:"Redis"})}),(0,i.jsx)(r.td,{children:"In-Memory Data Cache"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64"}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)(r.a,{href:"https://github.com/redis/redis/blob/unstable/COPYING",children:"BSD-3 (Redis)"}),(0,i.jsx)("br",{}),(0,i.jsx)(r.a,{href:"https://github.com/RedisLabs/memtier_benchmark/blob/master/COPYING",children:"GPL-2.0 (Memtier)"})]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/network-suite/network-suite.md",children:"SockPerf"})}),(0,i.jsx)(r.td,{children:"Network Latencies"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://github.com/Mellanox/sockperf/blob/sockperf_v2/copying",children:"Custom"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/speccpu/",children:"SPEC CPU 2017, SPECrate Integer"})}),(0,i.jsx)(r.td,{children:"Precision CPU, Integer Calculations"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.spec.org/cpu2017/Docs/licenses.html",children:"End User License Required"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/speccpu/",children:"SPEC CPU 2017, SPECrate Floating Point"})}),(0,i.jsx)(r.td,{children:"Precision CPU, Floating-point Calculations"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.spec.org/cpu2017/Docs/licenses.html",children:"End User License Required"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/speccpu/",children:"SPEC CPU 2017, SPECspeed Integer"})}),(0,i.jsx)(r.td,{children:"Precision CPU, Integer Calculations"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.spec.org/cpu2017/Docs/licenses.html",children:"End User License Required"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/speccpu/",children:"SPEC CPU 2017, SPECspeed Floating Point"})}),(0,i.jsx)(r.td,{children:"Precision CPU, Floating-point Calculations"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.spec.org/cpu2017/Docs/licenses.html",children:"End User License Required"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/specjbb/",children:"SPEC JBB 2015, SPECjbb"})}),(0,i.jsx)(r.td,{children:"Java Server"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64, win-x64, win-arm64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.spec.org/jbb2015/",children:"End User License Required"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/specjvm/specjvm.md",children:"SPEC JVM 2008, SPECjvm"})}),(0,i.jsx)(r.td,{children:"Java Runtime Performance"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64, win-x64, win-arm64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.spec.org/spec/docs/SPEC_General_License.pdf",children:"SPEC"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/specpower/",children:"SPEC Power 2008, SPECpower"})}),(0,i.jsx)(r.td,{children:"High precision, steady-state CPU usage"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64, win-x64, win-arm64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.spec.org/power_ssj2008/",children:"End User License Required"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"/VirtualClient/docs/workloads/specview/",children:"SPECviewperf 2020, SPECview"})}),(0,i.jsx)(r.td,{children:"3D graphics performance"}),(0,i.jsx)(r.td,{children:"win-x64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://gwpg.spec.org/benchmarks/benchmark/specviewperf-2020-v3-0/",children:"SPEC"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/stressapptest/stressapptest.md",children:"Stressapptest"})}),(0,i.jsx)(r.td,{children:"Fault Tolerance"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://github.com/stressapptest/stressapptest/blob/master/NOTICE",children:"Apache-2.0"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/stress-ng/stress-ng.md",children:"Stress-ng"})}),(0,i.jsx)(r.td,{children:"Fault Tolerance"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://github.com/ColinIanKing/stress-ng/blob/master/COPYING",children:"GPL-2.0"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/superbenchmark/superbenchmark.md",children:"SuperBench"})}),(0,i.jsx)(r.td,{children:"Machine Learning"}),(0,i.jsx)(r.td,{children:"linux-x64"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://github.com/microsoft/superbenchmark/blob/main/LICENSE",children:"MIT"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/workloads/sysbench-oltp/sysbench-oltp.md",children:"Sysbench OLTP w/MySQL"})}),(0,i.jsx)(r.td,{children:"Relational Database Performance"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64"}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)(r.a,{href:"https://github.com/akopytov/sysbench/blob/master/COPYING",children:"GPL-2.0 (Sysbench)"}),(0,i.jsx)("br",{}),(0,i.jsx)(r.a,{href:"https://www.mysql.com/about/legal/licensing/oem/",children:"GPL-2.0 (MySQL)"})]})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"supported-system-monitoring-facilities",children:"Supported System Monitoring Facilities"}),"\n",(0,i.jsx)(r.p,{children:"The platform supports capturing information from the system in the background while workloads are running. The following list of monitoring facilities are available in the Virtual Client."}),"\n",(0,i.jsx)(r.admonition,{type:"info",children:(0,i.jsx)(r.p,{children:"Certain monitoring facilities are only available on specific hardware because they expect specific tools/hardware on the system (e.g. ipmiutil, nvidia monitors)."})}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:(0,i.jsx)(r.strong,{children:"Monitor"})}),(0,i.jsx)(r.th,{children:(0,i.jsx)(r.strong,{children:"Specialization"})}),(0,i.jsx)(r.th,{children:(0,i.jsx)(r.strong,{children:"Supported Platforms/Architectures"})}),(0,i.jsx)(r.th,{children:(0,i.jsx)(r.strong,{children:"License(s)"})})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/monitors/0300-nvidia-smi/",children:"Nvidia SMI"})}),(0,i.jsx)(r.td,{children:"Nvidia GPUs"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64"}),(0,i.jsx)(r.td,{})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://microsoft.github.io/VirtualClient/docs/monitors/0100-perf-counter-metrics/",children:"Performance Counters"})}),(0,i.jsx)(r.td,{children:"Performance Counters"}),(0,i.jsx)(r.td,{children:"linux-x64, linux-arm64, win-x64, win-arm64"}),(0,i.jsx)(r.td,{})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"data-collection-notice",children:"Data Collection Notice"}),"\n",(0,i.jsxs)(r.p,{children:["The software may collect information about you and your use of the software and send it to Microsoft. Microsoft may use this information to provide services\nand improve our products and services. You may turn off the telemetry as described in the repository. There are also some features in the software that may\nenable you and Microsoft to collect data from users of your applications. If you use these features, you must comply with applicable law, including providing\nappropriate notices to users of your applications together with a copy of Microsoft\u2019s privacy statement. Our privacy statement is located\nat ",(0,i.jsx)(r.a,{href:"https://go.microsoft.com/fwlink/?LinkID=824704",children:"https://go.microsoft.com/fwlink/?LinkID=824704"}),". You can learn more about data collection and use in the help documentation and our privacy statement.\nYour use of the software operates as your consent to these practices."]}),"\n",(0,i.jsx)(r.h2,{id:"trademarks",children:"Trademarks"}),"\n",(0,i.jsxs)(r.p,{children:["This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft\ntrademarks or logos is subject to and must follow ",(0,i.jsx)(r.a,{href:"https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general",children:"Microsoft's Trademark & Brand Guidelines"}),".\nUse of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.\nAny use of third-party trademarks or logos are subject to those third-party's policies."]})]})}function a(e={}){const{wrapper:r}={...(0,s.ah)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},3905:(e,r,t)=>{t.d(r,{ah:()=>c});var i=t(7294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,i,s=function(e,r){if(null==e)return{};var t,i,s={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var d=i.createContext({}),c=function(e){var r=i.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},h={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},a=i.forwardRef((function(e,r){var t=e.components,s=e.mdxType,n=e.originalType,d=e.parentName,a=o(e,["components","mdxType","originalType","parentName"]),x=c(t),u=s,m=x["".concat(d,".").concat(u)]||x[u]||h[u]||n;return t?i.createElement(m,l(l({ref:r},a),{},{components:t})):i.createElement(m,l({ref:r},a))}));a.displayName="MDXCreateElement"}}]);