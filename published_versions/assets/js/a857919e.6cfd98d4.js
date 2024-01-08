"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[125],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var i=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=i.createContext({}),u=function(e){var r=i.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=u(e.components);return i.createElement(l.Provider,{value:r},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},h=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(t),h=n,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||o;return t?i.createElement(m,a(a({ref:r},d),{},{components:t})):i.createElement(m,a({ref:r},d))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=h;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:n,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},95359:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var i=t(87462),n=t(63366),o=(t(67294),t(3905)),a=["components"],s={id:"mixed-workloads",title:"Configure Druid for mixed workloads",sidebar_label:"Mixed workloads"},l=void 0,u={unversionedId:"operations/mixed-workloads",id:"operations/mixed-workloads",title:"Configure Druid for mixed workloads",description:"\x3c!--",source:"@site/docs/28.0.1/operations/mixed-workloads.md",sourceDirName:"operations",slug:"/operations/mixed-workloads",permalink:"/docs/28.0.1/operations/mixed-workloads",draft:!1,tags:[],version:"current",frontMatter:{id:"mixed-workloads",title:"Configure Druid for mixed workloads",sidebar_label:"Mixed workloads"},sidebar:"docs",previous:{title:"Segment size optimization",permalink:"/docs/28.0.1/operations/segment-optimization"},next:{title:"HTTP compression",permalink:"/docs/28.0.1/operations/http-compression"}},d={},p=[{value:"Query laning",id:"query-laning",level:2},{value:"General properties",id:"general-properties",level:3},{value:"Lane-specific properties",id:"lane-specific-properties",level:3},{value:"Example",id:"example",level:3},{value:"Service tiering",id:"service-tiering",level:2},{value:"Historical tiering",id:"historical-tiering",level:3},{value:"Configure segment loading",id:"configure-segment-loading",level:4},{value:"Assign Historicals to tiers",id:"assign-historicals-to-tiers",level:4},{value:"Broker tiering",id:"broker-tiering",level:3},{value:"Assign Brokers to tiers",id:"assign-brokers-to-tiers",level:4},{value:"Configure query routing",id:"configure-query-routing",level:4},{value:"Learn more",id:"learn-more",level:2}],c={toc:p},h="wrapper";function m(e){var r=e.components,t=(0,n.Z)(e,a);return(0,o.kt)(h,(0,i.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you frequently run concurrent, heterogeneous workloads on your Apache Druid cluster, configure Druid to properly allocate cluster resources to optimize your overall query performance."),(0,o.kt)("p",null,'Each Druid query consumes a certain amount of cluster resources, such as processing threads, memory buffers for intermediate query results, and HTTP threads for communicating between Brokers and data servers.\n"Heavy" queries that return large results are more resource-intensive than short-running, "light" queries.\nYou typically do not want these long resource-intensive queries to throttle the performance of short interactive queries.\nFor example, if you run both sets of queries in the same Druid cluster, heavy queries may employ all available HTTP threads.\nThis situation slows down subsequent queries\u2014heavy and light\u2014and may trigger timeout errors for those queries.\nWith proper resource isolation, you can execute long-running, low priority queries without interfering with short-running, high priority queries.'),(0,o.kt)("p",null,"Druid provides the following strategies to isolate resources and improve query concurrency:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Query laning")," where you set a limit on the maximum number of long-running queries executed on each Broker. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Service tiering")," which defines separate groups of Historicals and Brokers to receive different query assignments based on query priority.")),(0,o.kt)("p",null,"You can profile Druid queries using normal performance profiling techniques such as Druid query metrics analysis, thread dumps of JVM, or flame graphs to identify what resources are affected by mixed workloads.\nThe largest bottleneck will likely be in the Broker HTTP threads.\nMitigate resource contention of the Broker HTTP threads with query laning.\nHowever, mixed workloads also affect other resources, including processing threads and merge buffers.\nTo reduce the burden on these resources, apply both service tiering and query laning."),(0,o.kt)("h2",{id:"query-laning"},"Query laning"),(0,o.kt)("p",null,"When you need to run many concurrent queries having heterogeneous workloads, start with query laning to optimize your query performance.\nQuery laning restricts resource usage for less urgent queries to ensure dedicated resources for high priority queries."),(0,o.kt)("p",null,"Query lanes are analogous to carpool and normal lanes on the freeway. With query laning, Druid sets apart prioritized lanes from other general lanes.\nDruid restricts low priority queries to the general lanes and allows high priority queries to run wherever possible, whether in a VIP or general lane."),(0,o.kt)("p",null,"In Druid, query lanes reserve resources for Broker HTTP threads. Each Druid query requires one Broker thread. The number of threads on a Broker is defined by the ",(0,o.kt)("inlineCode",{parentName:"p"},"druid.server.http.numThreads")," parameter. Broker threads may be occupied by tasks other than queries, such as health checks. You can use query laning to limit the number of HTTP threads designated for resource-intensive queries, leaving other threads available for short-running queries and other tasks."),(0,o.kt)("h3",{id:"general-properties"},"General properties"),(0,o.kt)("p",null,"Set the following query laning properties in the ",(0,o.kt)("inlineCode",{parentName:"p"},"broker/runtime.properties")," file."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"druid.query.scheduler.laning.strategy")," \u2013 The strategy used to assign queries to lanes.\nYou can use the built-in ",(0,o.kt)("a",{parentName:"li",href:"/docs/28.0.1/configuration/#highlow-laning-strategy"},"\u201chigh/low\u201d laning strategy"),", or ",(0,o.kt)("a",{parentName:"li",href:"/docs/28.0.1/configuration/#manual-laning-strategy"},"define your own laning strategy manually"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"druid.query.scheduler.numThreads")," \u2013 The total number of queries that can be served per Broker. We recommend setting this value to 1-2 less than ",(0,o.kt)("inlineCode",{parentName:"li"},"druid.server.http.numThreads"),".",(0,o.kt)("admonition",{parentName:"li",type:"info"},(0,o.kt)("p",{parentName:"admonition"}," The query scheduler by default does not limit the number of queries that a Broker can serve. Setting this property to a bounded number limits the thread count. If the allocated threads are all occupied, any incoming query, including interactive queries, will be rejected with an HTTP 429 status code.")))),(0,o.kt)("h3",{id:"lane-specific-properties"},"Lane-specific properties"),(0,o.kt)("p",null,"If you use the ",(0,o.kt)("strong",{parentName:"p"},"high/low laning strategy"),", set the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"druid.query.scheduler.laning.maxLowPercent")," \u2013 The maximum percent of query threads to handle low priority queries. The remaining query threads are dedicated to high priority queries.")),(0,o.kt)("p",null,"Consider also defining a ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.1/configuration/#prioritization-strategies"},"prioritization strategy")," for the Broker to label queries as high or low priority. Otherwise, manually set the priority for incoming queries on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.1/querying/query-context"},"query context"),"."),(0,o.kt)("p",null,"If you use a ",(0,o.kt)("strong",{parentName:"p"},"manual laning strategy"),", set the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"druid.query.scheduler.laning.lanes.{name}")," \u2013 The limit for how many queries can run in the ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," lane. Define as many named lanes as needed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"druid.query.scheduler.laning.isLimitPercent")," \u2013 Whether to treat the lane limit as an exact number or a percent of the minimum of ",(0,o.kt)("inlineCode",{parentName:"li"},"druid.server.http.numThreads")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"druid.query.scheduler.numThreads"),".")),(0,o.kt)("p",null,"With manual laning, incoming queries can be labeled with the desired lane in the ",(0,o.kt)("inlineCode",{parentName:"p"},"lane")," parameter of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.1/querying/query-context"},"query context"),"."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.1/configuration/#query-prioritization-and-laning"},"Query prioritization and laning")," for additional details on query laning configuration."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Example config for query laning with the high/low laning strategy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Laning strategy\ndruid.query.scheduler.laning.strategy=hilo\ndruid.query.scheduler.laning.maxLowPercent=20\n\n# Limit the number of HTTP threads for query processing\n# This value should be less than druid.server.http.numThreads\ndruid.query.scheduler.numThreads=40\n")),(0,o.kt)("h2",{id:"service-tiering"},"Service tiering"),(0,o.kt)("p",null,"In service tiering, you define separate groups of Historicals and Brokers to manage queries based on the segments and resource requirements of the query.\nYou can limit the resources that are set aside for certain types of queries.\nMany heavy queries involving complex subqueries or large result sets can hog resources away from high priority, interactive queries.\nMinimize the impact of these heavy queries by limiting them to a separate Broker tier.\nWhen all Brokers set aside for heavy queries are occupied, subsequent heavy queries must wait until the designated resources become available.\nA prolonged wait results in the later queries failing with a timeout error."),(0,o.kt)("p",null,"Note that you can separate Historical processes into tiers without having separate Broker tiers.\nHistorical-only tiering is not sufficient to meet the demands of mixed workloads on a Druid cluster.\nHowever, it is useful when you query certain segments more frequently than others, such as often analyzing the most recent data.\nHistorical tiering assigns data from specific time intervals to specific tiers in order to support higher concurrency on hot data. "),(0,o.kt)("p",null,"The examples below demonstrate two tiers\u2014hot and cold\u2014for both the Historicals and Brokers. The Brokers will serve short-running, light queries before long-running, heavy queries. Light queries will be routed to the hot tiers, and heavy queries will be routed to the cold tiers."),(0,o.kt)("h3",{id:"historical-tiering"},"Historical tiering"),(0,o.kt)("p",null,"This section describes how to configure segment loading and how to assign Historical services into tiers."),(0,o.kt)("h4",{id:"configure-segment-loading"},"Configure segment loading"),(0,o.kt)("p",null,"The Coordinator service assigns segments to different tiers of Historicals using load rules.\nDefine a ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.1/operations/rule-configuration#load-rules"},"load rule")," to indicate how segment replicas should be assigned to different Historical tiers. For example, you may store segments of more recent data on more powerful hardware for better performance."),(0,o.kt)("p",null,"There are several types of load rules: forever, interval, and period. Select the load rule that matches your use case for each Historical, whether you want all segments to be loaded, segments within a certain time interval, or segments within a certain time period.\nInterval and period load rules must be accompanied by corresponding ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.1/operations/rule-configuration#drop-rules"},"drop rules"),"."),(0,o.kt)("p",null,"In the load rule, define tiers in the ",(0,o.kt)("inlineCode",{parentName:"p"},"tieredReplicants")," property. Provide descriptive names for your tiers, and specify how many replicas each tier should have. You can designate a higher number of replicas for the hot tier to increase the concurrency for processing queries."),(0,o.kt)("p",null,"The following example shows a period load rule with two Historical tiers, named \u201chot\u201d and \u201c","_","default","_","tier\u201d.\nFor the most recent month of data, Druid loads three replicas in the hot tier and one replica in the default cold tier.\nIncoming queries that rely on this month of data can use the single replica in the cold Historical tier or any of the three replicas in the hot Historical tier."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "type" : "loadByPeriod",\n  "period" : "P1M",\n  "includeFuture" : true,\n  "tieredReplicants": {\n    "hot": 3,\n    "_default_tier" : 1\n  }\n}\n')),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.1/operations/rule-configuration#load-rules"},"Load rules")," for more information on segment load rules. Visit ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.1/tutorials/tutorial-retention"},"Tutorial: Configuring data retention")," for an example of setting retention rules from the Druid web console."),(0,o.kt)("h4",{id:"assign-historicals-to-tiers"},"Assign Historicals to tiers"),(0,o.kt)("p",null,"To assign a Historical to a tier, add a label for the tier name and set the priority value in the  ",(0,o.kt)("inlineCode",{parentName:"p"},"historical/runtime.properties")," for the Historical."),(0,o.kt)("p",null,"Example Historical in the hot tier:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"druid.server.tier=hot\ndruid.server.priority=1\n")),(0,o.kt)("p",null,"Example Historical in the cold tier:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"druid.server.tier=_default_tier\ndruid.server.priority=0\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.1/configuration/#historical-general-configuration"},"Historical general configuration")," for more details on these properties."),(0,o.kt)("h3",{id:"broker-tiering"},"Broker tiering"),(0,o.kt)("p",null,"You must set up Historical tiering before you can use Broker tiering.\nTo set up Broker tiering, assign Brokers to tiers, and configure query routing by the Router."),(0,o.kt)("h4",{id:"assign-brokers-to-tiers"},"Assign Brokers to tiers"),(0,o.kt)("p",null,"For each of the Brokers, define the Broker group in the ",(0,o.kt)("inlineCode",{parentName:"p"},"broker/runtime.properties")," files."),(0,o.kt)("p",null,"Example config for a Broker in the hot tier:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"druid.service=druid:broker-hot\n")),(0,o.kt)("p",null,"Example config for a Broker in the cold tier:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"druid.service=druid:broker-cold\n")),(0,o.kt)("p",null,"Also in the ",(0,o.kt)("inlineCode",{parentName:"p"},"broker/runtime.properties")," files, instruct the Broker to select Historicals by priority so that the Broker will select Historicals in the hot tier before Historicals in the cold tier."),(0,o.kt)("p",null,"Example Broker config to prioritize hot tier Historicals:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"druid.broker.select.tier=highestPriority\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.1/configuration/#broker-process-configs"},"Broker configuration")," for more details on these properties."),(0,o.kt)("h4",{id:"configure-query-routing"},"Configure query routing"),(0,o.kt)("p",null,"Direct the Router to route queries appropriately by setting the default Broker tier and the map of Historical tier to Broker tier in the ",(0,o.kt)("inlineCode",{parentName:"p"},"router/runtime.properties")," file."),(0,o.kt)("p",null,"Example Router config to map hot/cold tier Brokers to hot/cold tier Historicals, respectively:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'druid.router.defaultBrokerServiceName=druid:broker-cold\ndruid.router.tierToBrokerMap={"hot":"druid:broker-hot","_default_tier":"druid:broker-cold"}\n')),(0,o.kt)("p",null,"If you plan to run Druid SQL queries, also ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.1/design/router#routing-of-sql-queries-using-strategies"},"enable routing of SQL queries")," by setting the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"druid.router.sql.enable=true\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.1/design/router#example-production-configuration"},"Router process")," for an example production configuration."),(0,o.kt)("h2",{id:"learn-more"},"Learn more"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.1/querying/multitenancy"},"Multitenancy considerations")," for applying query concurrency to multitenant workloads."))}m.isMDXComponent=!0}}]);