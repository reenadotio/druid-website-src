"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7381],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>p});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),u=d(a),c=i,p=u["".concat(l,".").concat(c)]||u[c]||h[c]||s;return a?n.createElement(p,o(o({ref:t},m),{},{components:a})):n.createElement(p,o({ref:t},m))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,o=new Array(s);o[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:i,o[1]=r;for(var d=2;d<s;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},40316:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var n=a(87462),i=a(63366),s=(a(67294),a(3905)),o=["components"],r={id:"storage",title:"Storage overview",sidebar_label:"Storage"},l=void 0,d={unversionedId:"design/storage",id:"design/storage",title:"Storage overview",description:"\x3c!--",source:"@site/docs/30.0.1/design/storage.md",sourceDirName:"design",slug:"/design/storage",permalink:"/docs/30.0.1/design/storage",draft:!1,tags:[],version:"current",frontMatter:{id:"storage",title:"Storage overview",sidebar_label:"Storage"},sidebar:"docs",previous:{title:"Indexer",permalink:"/docs/30.0.1/design/indexer"},next:{title:"Segments",permalink:"/docs/30.0.1/design/segments"}},m={},u=[{value:"Indexing and handoff",id:"indexing-and-handoff",level:2},{value:"Segment identifiers",id:"segment-identifiers",level:2},{value:"Segment versioning",id:"segment-versioning",level:2},{value:"Segment lifecycle",id:"segment-lifecycle",level:2},{value:"Availability and consistency",id:"availability-and-consistency",level:2}],h={toc:u},c="wrapper";function p(e){var t=e.components,r=(0,i.Z)(e,o);return(0,s.kt)(c,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Druid stores data in datasources, which are similar to tables in a traditional RDBMS. Each datasource is partitioned by time and, optionally, further partitioned by other attributes. Each time range is called a chunk (for example, a single day, if your datasource is partitioned by day). Within a chunk, data is partitioned into one or more ",(0,s.kt)("a",{parentName:"p",href:"/docs/30.0.1/design/segments"},"segments"),". Each segment is a single file, typically comprising up to a few million rows of data. Since segments are organized into time chunks, it's sometimes helpful to think of segments as living on a timeline like the following:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Segment timeline",src:a(3473).Z,width:"1548",height:"535"})),(0,s.kt)("p",null,"A datasource may have anywhere from just a few segments, up to hundreds of thousands and even millions of segments. Each segment is created by a MiddleManager as mutable and uncommitted. Data is queryable as soon as it is added to an uncommitted segment. The segment building process accelerates later queries by producing a data file that is compact and indexed:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Conversion to columnar format"),(0,s.kt)("li",{parentName:"ul"},"Indexing with bitmap indexes"),(0,s.kt)("li",{parentName:"ul"},"Compression",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Dictionary encoding with id storage minimization for String columns"),(0,s.kt)("li",{parentName:"ul"},"Bitmap compression for bitmap indexes"),(0,s.kt)("li",{parentName:"ul"},"Type-aware compression for all columns")))),(0,s.kt)("p",null,"Periodically, segments are committed and published to ",(0,s.kt)("a",{parentName:"p",href:"/docs/30.0.1/design/deep-storage"},"deep storage"),", become immutable, and move from MiddleManagers to the Historical services. An entry about the segment is also written to the ",(0,s.kt)("a",{parentName:"p",href:"/docs/30.0.1/design/metadata-storage"},"metadata store"),". This entry is a self-describing bit of metadata about the segment, including things like the schema of the segment, its size, and its location on deep storage. These entries tell the Coordinator what data is available on the cluster."),(0,s.kt)("p",null,"For details on the segment file format, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/30.0.1/design/segments"},"segment files"),"."),(0,s.kt)("p",null,"For details on modeling your data in Druid, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/30.0.1/ingestion/schema-design"},"schema design"),"."),(0,s.kt)("h2",{id:"indexing-and-handoff"},"Indexing and handoff"),(0,s.kt)("p",null,"Indexing is the mechanism by which new segments are created, and handoff is the mechanism by which they are published and served by Historical services. "),(0,s.kt)("p",null,"On the indexing side:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},'An indexing task starts running and building a new segment. It must determine the identifier of the segment before it starts building it. For a task that is appending (like a Kafka task, or an index task in append mode) this is done by calling an "allocate" API on the Overlord to potentially add a new partition to an existing set of segments. For\na task that is overwriting (like a Hadoop task, or an index task not in append mode) this is done by locking an interval and creating a new version number and new set of segments.'),(0,s.kt)("li",{parentName:"ol"},"If the indexing task is a realtime task (like a Kafka task) then the segment is immediately queryable at this point. It's available, but unpublished."),(0,s.kt)("li",{parentName:"ol"},"When the indexing task has finished reading data for the segment, it pushes it to deep storage and then publishes it by writing a record into the metadata store."),(0,s.kt)("li",{parentName:"ol"},"If the indexing task is a realtime task, then to ensure data is continuously available for queries, it waits for a Historical service to load the segment. If the indexing task is not a realtime task, it exits immediately.")),(0,s.kt)("p",null,"On the Coordinator / Historical side:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The Coordinator polls the metadata store periodically (by default, every 1 minute) for newly published segments."),(0,s.kt)("li",{parentName:"ol"},"When the Coordinator finds a segment that is published and used, but unavailable, it chooses a Historical service to load that segment and instructs that Historical to do so."),(0,s.kt)("li",{parentName:"ol"},"The Historical loads the segment and begins serving it."),(0,s.kt)("li",{parentName:"ol"},"At this point, if the indexing task was waiting for handoff, it will exit.")),(0,s.kt)("h2",{id:"segment-identifiers"},"Segment identifiers"),(0,s.kt)("p",null,"Segments all have a four-part identifier with the following components:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Datasource name."),(0,s.kt)("li",{parentName:"ul"},"Time interval (for the time chunk containing the segment; this corresponds to the ",(0,s.kt)("inlineCode",{parentName:"li"},"segmentGranularity")," specified at ingestion time)."),(0,s.kt)("li",{parentName:"ul"},"Version number (generally an ISO8601 timestamp corresponding to when the segment set was first started)."),(0,s.kt)("li",{parentName:"ul"},"Partition number (an integer, unique within a datasource+interval+version; may not necessarily be contiguous).")),(0,s.kt)("p",null,"For example, this is the identifier for a segment in datasource ",(0,s.kt)("inlineCode",{parentName:"p"},"clarity-cloud0"),", time chunk\n",(0,s.kt)("inlineCode",{parentName:"p"},"2018-05-21T16:00:00.000Z/2018-05-21T17:00:00.000Z"),", version ",(0,s.kt)("inlineCode",{parentName:"p"},"2018-05-21T15:56:09.909Z"),", and partition number 1:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"clarity-cloud0_2018-05-21T16:00:00.000Z_2018-05-21T17:00:00.000Z_2018-05-21T15:56:09.909Z_1\n")),(0,s.kt)("p",null,"Segments with partition number 0 (the first partition in a chunk) omit the partition number, like the following example, which is a segment in the same time chunk as the previous one, but with partition number 0 instead of 1:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"clarity-cloud0_2018-05-21T16:00:00.000Z_2018-05-21T17:00:00.000Z_2018-05-21T15:56:09.909Z\n")),(0,s.kt)("h2",{id:"segment-versioning"},"Segment versioning"),(0,s.kt)("p",null,"The version number provides a form of ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Multiversion_concurrency_control"},"multi-version concurrency control")," (MVCC) to support batch-mode overwriting. If all you ever do is append data, then there will be just a single version for each time chunk. But when you overwrite data, Druid will seamlessly switch from querying the old version to instead query the new, updated versions. Specifically, a new set of segments is created with the same datasource, same time interval, but a higher version number. This is a signal to the rest of the Druid system that the older version should be removed from the cluster, and the new version should replace it."),(0,s.kt)("p",null,"The switch appears to happen instantaneously to a user, because Druid handles this by first loading the new data (but not allowing it to be queried), and then, as soon as the new data is all loaded, switching all new queries to use those new segments. Then it drops the old segments a few minutes later."),(0,s.kt)("h2",{id:"segment-lifecycle"},"Segment lifecycle"),(0,s.kt)("p",null,"Each segment has a lifecycle that involves the following three major areas:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Metadata store:")," Segment metadata (a small JSON payload generally no more than a few KB) is stored in the ",(0,s.kt)("a",{parentName:"li",href:"/docs/30.0.1/design/metadata-storage"},"metadata store")," once a segment is done being constructed. The act of inserting a record for a segment into the metadata store is called publishing. These metadata records have a boolean flag named ",(0,s.kt)("inlineCode",{parentName:"li"},"used"),", which controls whether the segment is intended to be queryable or not. Segments created by realtime tasks will be\navailable before they are published, since they are only published when the segment is complete and will not accept any additional rows of data."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Deep storage:")," Segment data files are pushed to deep storage once a segment is done being constructed. This happens immediately before publishing metadata to the metadata store."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Availability for querying:")," Segments are available for querying on some Druid data server, like a realtime task, directly from deep storage, or a Historical service.")),(0,s.kt)("p",null,"You can inspect the state of currently active segments using the Druid SQL\n",(0,s.kt)("a",{parentName:"p",href:"/docs/30.0.1/querying/sql-metadata-tables#segments-table"},(0,s.kt)("inlineCode",{parentName:"a"},"sys.segments")," table"),". It includes the following flags:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"is_published"),": True if segment metadata has been published to the metadata store and ",(0,s.kt)("inlineCode",{parentName:"li"},"used")," is true."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"is_available"),": True if the segment is currently available for querying, either on a realtime task or Historical service."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"is_realtime"),": True if the segment is only available on realtime tasks. For datasources that use realtime ingestion, this will generally start off ",(0,s.kt)("inlineCode",{parentName:"li"},"true")," and then become ",(0,s.kt)("inlineCode",{parentName:"li"},"false")," as the segment is published and handed off."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"is_overshadowed"),": True if the segment is published (with ",(0,s.kt)("inlineCode",{parentName:"li"},"used")," set to true) and is fully overshadowed by some other published segments. Generally this is a transient state, and segments in this state will soon have their ",(0,s.kt)("inlineCode",{parentName:"li"},"used")," flag automatically set to false.")),(0,s.kt)("h2",{id:"availability-and-consistency"},"Availability and consistency"),(0,s.kt)("p",null,"Druid has an architectural separation between ingestion and querying, as described above in\n",(0,s.kt)("a",{parentName:"p",href:"#indexing-and-handoff"},"Indexing and handoff"),". This means that when understanding Druid's availability and consistency properties, we must look at each function separately."),(0,s.kt)("p",null,"On the ingestion side, Druid's primary ",(0,s.kt)("a",{parentName:"p",href:"/docs/30.0.1/ingestion/#ingestion-methods"},"ingestion methods")," are all pull-based and offer transactional guarantees. This means that you are guaranteed that ingestion using these methods will publish in an all-or-nothing manner:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'Supervised "seekable-stream" ingestion methods like ',(0,s.kt)("a",{parentName:"li",href:"/docs/30.0.1/ingestion/kafka-ingestion"},"Kafka")," and ",(0,s.kt)("a",{parentName:"li",href:"/docs/30.0.1/ingestion/kinesis-ingestion"},"Kinesis"),". With these methods, Druid commits stream offsets to its ",(0,s.kt)("a",{parentName:"li",href:"/docs/30.0.1/design/metadata-storage"},"metadata store")," alongside segment metadata, in the same transaction. Note that ingestion of data that has not yet been published can be rolled back if ingestion tasks fail. In this case, partially-ingested data is\ndiscarded, and Druid will resume ingestion from the last committed set of stream offsets. This ensures exactly-once publishing behavior."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/30.0.1/ingestion/hadoop"},"Hadoop-based batch ingestion"),". Each task publishes all segment metadata in a single transaction."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/30.0.1/ingestion/native-batch"},"Native batch ingestion"),". In parallel mode, the supervisor task publishes all segment metadata in a single transaction after the subtasks are finished. In simple (single-task) mode, the single task publishes all segment metadata in a single transaction after it is complete.")),(0,s.kt)("p",null,"Additionally, some ingestion methods offer an ",(0,s.kt)("em",{parentName:"p"},"idempotency")," guarantee. This means that repeated executions of the same ingestion will not cause duplicate data to be ingested:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'Supervised "seekable-stream" ingestion methods like ',(0,s.kt)("a",{parentName:"li",href:"/docs/30.0.1/ingestion/kafka-ingestion"},"Kafka")," and ",(0,s.kt)("a",{parentName:"li",href:"/docs/30.0.1/ingestion/kinesis-ingestion"},"Kinesis")," are idempotent due to the fact that stream offsets and segment metadata are stored together and updated in lock-step."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/30.0.1/ingestion/hadoop"},"Hadoop-based batch ingestion")," is idempotent unless one of your input sources is the same Druid datasource that you are ingesting into. In this case, running the same task twice is non-idempotent, because you are adding to existing data instead of overwriting it."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/30.0.1/ingestion/native-batch"},"Native batch ingestion")," is idempotent unless\n",(0,s.kt)("a",{parentName:"li",href:"/docs/30.0.1/ingestion/native-batch"},(0,s.kt)("inlineCode",{parentName:"a"},"appendToExisting"))," is true, or one of your input sources is the same Druid datasource that you are ingesting into. In either of these two cases, running the same task twice is non-idempotent, because you are adding to existing data instead of overwriting it.")),(0,s.kt)("p",null,"On the query side, the Druid Broker is responsible for ensuring that a consistent set of segments is involved in a given query. It selects the appropriate set of segment versions to use when the query starts based on what is currently available. This is supported by atomic replacement, a feature that ensures that from a user's perspective, queries flip instantaneously from an older version of data to a newer set of data, with no consistency or performance impact.\nThis is used for Hadoop-based batch ingestion, native batch ingestion when ",(0,s.kt)("inlineCode",{parentName:"p"},"appendToExisting")," is false, and compaction."),(0,s.kt)("p",null,"Note that atomic replacement happens for each time chunk individually. If a batch ingestion task or compaction involves multiple time chunks, then each time chunk will undergo atomic replacement soon after the task finishes, but the replacements will not all happen simultaneously."),(0,s.kt)("p",null,"Typically, atomic replacement in Druid is based on a core set concept that works in conjunction with segment versions.\nWhen a time chunk is overwritten, a new core set of segments is created with a higher version number. The core set must all be available before the Broker will use them instead of the older set. There can also only be one core set per version per time chunk. Druid will also only use a single version at a time per time chunk. Together, these properties provide Druid's atomic replacement guarantees."),(0,s.kt)("p",null,"Druid also supports an experimental segment locking mode that is activated by setting\n",(0,s.kt)("a",{parentName:"p",href:"/docs/30.0.1/ingestion/tasks#context"},(0,s.kt)("inlineCode",{parentName:"a"},"forceTimeChunkLock"))," to false in the context of an ingestion task. In this case, Druid creates an atomic update group using the existing version for the time chunk, instead of creating a new core set with a new version number. There can be multiple atomic update groups with the same version number per time chunk. Each one replaces a specific set of earlier segments in the same time chunk and with the same version number. Druid will query the latest one that is fully available. This is a more powerful version of the core set concept, because it enables atomically replacing a subset of data for a time chunk, as well as doing atomic replacement and appending simultaneously."),(0,s.kt)("p",null,"If segments become unavailable due to multiple Historicals going offline simultaneously (beyond your replication factor), then Druid queries will include only the segments that are still available. In the background, Druid will reload these unavailable segments on other Historicals as quickly as possible, at which point they will be included in queries again."))}p.isMDXComponent=!0},3473:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/druid-timeline-1eb095729ad3c5084dc7ff60aad39421.png"}}]);