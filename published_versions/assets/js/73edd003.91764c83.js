"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,g=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return n?i.createElement(g,r(r({ref:t},d),{},{components:n})):i.createElement(g,r({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=["components"],s={id:"partitioning",title:"Partitioning",sidebar_label:"Partitioning",description:"Describes time chunk and secondary partitioning in Druid. Provides guidance to choose a secondary partition dimension."},l=void 0,p={unversionedId:"ingestion/partitioning",id:"ingestion/partitioning",title:"Partitioning",description:"Describes time chunk and secondary partitioning in Druid. Provides guidance to choose a secondary partition dimension.",source:"@site/docs/30.0.1/ingestion/partitioning.md",sourceDirName:"ingestion",slug:"/ingestion/partitioning",permalink:"/docs/30.0.1/ingestion/partitioning",draft:!1,tags:[],version:"current",frontMatter:{id:"partitioning",title:"Partitioning",sidebar_label:"Partitioning",description:"Describes time chunk and secondary partitioning in Druid. Provides guidance to choose a secondary partition dimension."},sidebar:"docs",previous:{title:"Rollup",permalink:"/docs/30.0.1/ingestion/rollup"},next:{title:"Task reference",permalink:"/docs/30.0.1/ingestion/tasks"}},d={},c=[{value:"Time chunk partitioning",id:"time-chunk-partitioning",level:2},{value:"Secondary partitioning",id:"secondary-partitioning",level:2},{value:"Partitioning and sorting",id:"partitioning-and-sorting",level:2},{value:"How to configure partitioning",id:"how-to-configure-partitioning",level:2},{value:"Learn more",id:"learn-more",level:2}],m={toc:c},u="wrapper";function g(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)(u,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can use segment partitioning and sorting within your Druid datasources to reduce the size of your data and increase performance."),(0,o.kt)("p",null,"One way to partition is to load data into separate datasources. This is a perfectly viable approach that works very well when the number of datasources does not lead to excessive per-datasource overheads."),(0,o.kt)("p",null,"This topic describes how to set up partitions within a single datasource. It does not cover how to use multiple datasources. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/30.0.1/querying/multitenancy"},"Multitenancy considerations")," for more details on splitting data into separate datasources and potential operational considerations."),(0,o.kt)("h2",{id:"time-chunk-partitioning"},"Time chunk partitioning"),(0,o.kt)("p",null,"Druid always partitions datasources by time into ",(0,o.kt)("em",{parentName:"p"},"time chunks"),". Each time chunk contains one or more segments. This partitioning happens for all ingestion methods based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"segmentGranularity")," parameter in your ingestion spec ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSchema")," object."),(0,o.kt)("p",null,"Partitioning by time is important for two reasons:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Queries that filter by ",(0,o.kt)("inlineCode",{parentName:"li"},"__time")," (SQL) or ",(0,o.kt)("inlineCode",{parentName:"li"},"intervals")," (native) are able to use time partitioning to prune the set of segments to consider."),(0,o.kt)("li",{parentName:"ol"},"Certain data management operations, such as overwriting and compacting existing data, acquire exclusive write locks on time partitions."),(0,o.kt)("li",{parentName:"ol"},"Each segment file is wholly contained within a time partition. Too-fine-grained partitioning may cause a large number\nof small segments, which leads to poor performance.")),(0,o.kt)("p",null,"The most common choices to balance these considerations are ",(0,o.kt)("inlineCode",{parentName:"p"},"hour")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"day"),". For streaming ingestion, ",(0,o.kt)("inlineCode",{parentName:"p"},"hour")," is especially\ncommon, because it allows compaction to follow ingestion with less of a time delay."),(0,o.kt)("h2",{id:"secondary-partitioning"},"Secondary partitioning"),(0,o.kt)("p",null,"Druid can partition segments within a particular time chunk further depending upon options that vary based on the ingestion type you have chosen. In general, secondary partitioning on a particular dimension improves locality. This means that rows with the same value for that dimension are stored together, decreasing access time."),(0,o.kt)("p",null,'To achieve the best performance and smallest overall footprint, partition your data on a "natural"\ndimension that you often use as a filter when possible. Such partitioning often improves compression and query performance. For example, some cases have yielded threefold storage size decreases.'),(0,o.kt)("h2",{id:"partitioning-and-sorting"},"Partitioning and sorting"),(0,o.kt)("p",null,'Partitioning and sorting work well together. If you do have a "natural" partitioning dimension, consider placing it first in the ',(0,o.kt)("inlineCode",{parentName:"p"},"dimensions")," list of your ",(0,o.kt)("inlineCode",{parentName:"p"},"dimensionsSpec"),". This way Druid sorts rows within each segment by that column. This sorting configuration frequently improves compression more than using partitioning alone."),(0,o.kt)("p",null,"Note that Druid always sorts rows within a segment by timestamp first, even before the first dimension listed in your ",(0,o.kt)("inlineCode",{parentName:"p"},"dimensionsSpec"),". This sorting can preclude the efficacy of dimension sorting. To work around this limitation if necessary, set your ",(0,o.kt)("inlineCode",{parentName:"p"},"queryGranularity")," equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"segmentGranularity")," in your ",(0,o.kt)("a",{parentName:"p",href:"/docs/30.0.1/ingestion/ingestion-spec#granularityspec"},(0,o.kt)("inlineCode",{parentName:"a"},"granularitySpec")),". Druid will set all timestamps within the segment to the same value, letting you identify a ",(0,o.kt)("a",{parentName:"p",href:"/docs/30.0.1/ingestion/schema-design#secondary-timestamps"},"secondary timestamp"),' as the "real" timestamp.'),(0,o.kt)("h2",{id:"how-to-configure-partitioning"},"How to configure partitioning"),(0,o.kt)("p",null,"Not all ingestion methods support an explicit partitioning configuration, and not all have equivalent levels of flexibility. If you are doing initial ingestion through a less-flexible method like\nKafka), you can use ",(0,o.kt)("a",{parentName:"p",href:"/docs/30.0.1/data-management/update#reindex"},"reindexing")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/30.0.1/data-management/compaction"},"compaction")," to repartition your data after initial ingestion. This is a powerful technique you can use to optimally partition any data older than a certain time threshold while you continuously add new data from a stream."),(0,o.kt)("p",null,"The following table shows how each ingestion method handles partitioning:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Method"),(0,o.kt)("th",{parentName:"tr",align:null},"How it works"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/30.0.1/ingestion/native-batch"},"Native batch")),(0,o.kt)("td",{parentName:"tr",align:null},"Configured using ",(0,o.kt)("a",{parentName:"td",href:"/docs/30.0.1/ingestion/native-batch#partitionsspec"},(0,o.kt)("inlineCode",{parentName:"a"},"partitionsSpec"))," inside the ",(0,o.kt)("inlineCode",{parentName:"td"},"tuningConfig"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/30.0.1/multi-stage-query/"},"SQL")),(0,o.kt)("td",{parentName:"tr",align:null},"Configured using ",(0,o.kt)("a",{parentName:"td",href:"/docs/30.0.1/multi-stage-query/concepts#partitioning"},(0,o.kt)("inlineCode",{parentName:"a"},"PARTITIONED BY"))," and ",(0,o.kt)("a",{parentName:"td",href:"/docs/30.0.1/multi-stage-query/concepts#clustering"},(0,o.kt)("inlineCode",{parentName:"a"},"CLUSTERED BY")),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/30.0.1/ingestion/hadoop"},"Hadoop")),(0,o.kt)("td",{parentName:"tr",align:null},"Configured using ",(0,o.kt)("a",{parentName:"td",href:"/docs/30.0.1/ingestion/hadoop#partitionsspec"},(0,o.kt)("inlineCode",{parentName:"a"},"partitionsSpec"))," inside the ",(0,o.kt)("inlineCode",{parentName:"td"},"tuningConfig"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/30.0.1/ingestion/kafka-ingestion"},"Kafka indexing service")),(0,o.kt)("td",{parentName:"tr",align:null},"Kafka topic partitioning defines how Druid partitions the datasource. You can also ",(0,o.kt)("a",{parentName:"td",href:"/docs/30.0.1/data-management/update#reindex"},"reindex")," or ",(0,o.kt)("a",{parentName:"td",href:"/docs/30.0.1/data-management/compaction"},"compact")," to repartition after initial ingestion.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/30.0.1/ingestion/kinesis-ingestion"},"Kinesis indexing service")),(0,o.kt)("td",{parentName:"tr",align:null},"Kinesis stream sharding defines how Druid partitions the datasource. You can also ",(0,o.kt)("a",{parentName:"td",href:"/docs/30.0.1/data-management/update#reindex"},"reindex")," or ",(0,o.kt)("a",{parentName:"td",href:"/docs/30.0.1/data-management/compaction"},"compact")," to repartition after initial ingestion.")))),(0,o.kt)("h2",{id:"learn-more"},"Learn more"),(0,o.kt)("p",null,"See the following topics for more information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/30.0.1/ingestion/native-batch#partitionsspec"},(0,o.kt)("inlineCode",{parentName:"a"},"partitionsSpec"))," for more detail on partitioning with Native Batch ingestion."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/30.0.1/data-management/update#reindex"},"Reindexing")," and ",(0,o.kt)("a",{parentName:"li",href:"/docs/30.0.1/data-management/compaction"},"Compaction")," for information on how to repartition existing data in Druid.")))}g.isMDXComponent=!0}}]);