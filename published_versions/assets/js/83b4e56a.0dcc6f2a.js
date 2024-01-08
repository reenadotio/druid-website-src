"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[469],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],s={id:"tutorial-rollup",title:"Aggregate data with rollup",sidebar_label:"Aggregate data with rollup"},i=void 0,p={unversionedId:"tutorials/tutorial-rollup",id:"tutorials/tutorial-rollup",title:"Aggregate data with rollup",description:"\x3c!--",source:"@site/docs/28.0.1/tutorials/tutorial-rollup.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-rollup",permalink:"/docs/28.0.1/tutorials/tutorial-rollup",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-rollup",title:"Aggregate data with rollup",sidebar_label:"Aggregate data with rollup"},sidebar:"docs",previous:{title:"Query data",permalink:"/docs/28.0.1/tutorials/tutorial-query"},next:{title:"Theta sketches",permalink:"/docs/28.0.1/tutorials/tutorial-sketches-theta"}},u={},c=[{value:"Example data",id:"example-data",level:2},{value:"Load the example data",id:"load-the-example-data",level:2},{value:"Query the example data",id:"query-the-example-data",level:2}],d={toc:c},m="wrapper";function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'Apache Druid can summarize raw data at ingestion time using a process we refer to as "rollup". Rollup is a first-level aggregation operation over a selected set of columns that reduces the size of stored data.'),(0,l.kt)("p",null,"This tutorial will demonstrate the effects of rollup on an example dataset."),(0,l.kt)("p",null,"For this tutorial, we'll assume you've already downloaded Druid as described in\nthe ",(0,l.kt)("a",{parentName:"p",href:"/docs/28.0.1/tutorials/"},"single-machine quickstart")," and have it running on your local machine."),(0,l.kt)("p",null,"It will also be helpful to have finished ",(0,l.kt)("a",{parentName:"p",href:"/docs/28.0.1/tutorials/tutorial-batch"},"Load a file")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/28.0.1/tutorials/tutorial-query"},"Query data")," tutorials."),(0,l.kt)("h2",{id:"example-data"},"Example data"),(0,l.kt)("p",null,"For this tutorial, we'll use a small sample of network flow event data, representing packet and byte counts for traffic from a source to a destination IP address that occurred within a particular second."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"timestamp":"2018-01-01T01:01:35Z","srcIP":"1.1.1.1", "dstIP":"2.2.2.2","packets":20,"bytes":9024}\n{"timestamp":"2018-01-01T01:01:51Z","srcIP":"1.1.1.1", "dstIP":"2.2.2.2","packets":255,"bytes":21133}\n{"timestamp":"2018-01-01T01:01:59Z","srcIP":"1.1.1.1", "dstIP":"2.2.2.2","packets":11,"bytes":5780}\n{"timestamp":"2018-01-01T01:02:14Z","srcIP":"1.1.1.1", "dstIP":"2.2.2.2","packets":38,"bytes":6289}\n{"timestamp":"2018-01-01T01:02:29Z","srcIP":"1.1.1.1", "dstIP":"2.2.2.2","packets":377,"bytes":359971}\n{"timestamp":"2018-01-01T01:03:29Z","srcIP":"1.1.1.1", "dstIP":"2.2.2.2","packets":49,"bytes":10204}\n{"timestamp":"2018-01-02T21:33:14Z","srcIP":"7.7.7.7", "dstIP":"8.8.8.8","packets":38,"bytes":6289}\n{"timestamp":"2018-01-02T21:33:45Z","srcIP":"7.7.7.7", "dstIP":"8.8.8.8","packets":123,"bytes":93999}\n{"timestamp":"2018-01-02T21:35:45Z","srcIP":"7.7.7.7", "dstIP":"8.8.8.8","packets":12,"bytes":2818}\n')),(0,l.kt)("p",null,"A file containing this sample input data is located at ",(0,l.kt)("inlineCode",{parentName:"p"},"quickstart/tutorial/rollup-data.json"),"."),(0,l.kt)("p",null,"We'll ingest this data using the following ingestion task spec, located at ",(0,l.kt)("inlineCode",{parentName:"p"},"quickstart/tutorial/rollup-index.json"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "index_parallel",\n  "spec" : {\n    "dataSchema" : {\n      "dataSource" : "rollup-tutorial",\n      "dimensionsSpec" : {\n        "dimensions" : [\n          "srcIP",\n          "dstIP"\n        ]\n      },\n      "timestampSpec": {\n        "column": "timestamp",\n        "format": "iso"\n      },\n      "metricsSpec" : [\n        { "type" : "count", "name" : "count" },\n        { "type" : "longSum", "name" : "packets", "fieldName" : "packets" },\n        { "type" : "longSum", "name" : "bytes", "fieldName" : "bytes" }\n      ],\n      "granularitySpec" : {\n        "type" : "uniform",\n        "segmentGranularity" : "week",\n        "queryGranularity" : "minute",\n        "intervals" : ["2018-01-01/2018-01-03"],\n        "rollup" : true\n      }\n    },\n    "ioConfig" : {\n      "type" : "index_parallel",\n      "inputSource" : {\n        "type" : "local",\n        "baseDir" : "quickstart/tutorial",\n        "filter" : "rollup-data.json"\n      },\n      "inputFormat" : {\n        "type" : "json"\n      },\n      "appendToExisting" : false\n    },\n    "tuningConfig" : {\n      "type" : "index_parallel",\n      "partitionsSpec": {\n        "type": "dynamic"\n      },\n      "maxRowsInMemory" : 25000\n    }\n  }\n}\n')),(0,l.kt)("p",null,"Rollup has been enabled by setting ",(0,l.kt)("inlineCode",{parentName:"p"},'"rollup" : true')," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"granularitySpec"),"."),(0,l.kt)("p",null,"Note that we have ",(0,l.kt)("inlineCode",{parentName:"p"},"srcIP")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"dstIP")," defined as dimensions, a longSum metric is defined for the ",(0,l.kt)("inlineCode",{parentName:"p"},"packets")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"bytes")," columns, and the ",(0,l.kt)("inlineCode",{parentName:"p"},"queryGranularity")," has been defined as ",(0,l.kt)("inlineCode",{parentName:"p"},"minute"),"."),(0,l.kt)("p",null,"We will see how these definitions are used after we load this data."),(0,l.kt)("h2",{id:"load-the-example-data"},"Load the example data"),(0,l.kt)("p",null,"From the apache-druid-28.0.1 package root, run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bin/post-index-task --file quickstart/tutorial/rollup-index.json --url http://localhost:8081\n")),(0,l.kt)("p",null,"After the script completes, we will query the data."),(0,l.kt)("h2",{id:"query-the-example-data"},"Query the example data"),(0,l.kt)("p",null,"Let's run ",(0,l.kt)("inlineCode",{parentName:"p"},"bin/dsql")," and issue a ",(0,l.kt)("inlineCode",{parentName:"p"},'select * from "rollup-tutorial";')," query to see what data was ingested."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ bin/dsql\nWelcome to dsql, the command-line client for Druid SQL.\nType "\\h" for help.\ndsql> select * from "rollup-tutorial";\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 __time                   \u2502 bytes  \u2502 count \u2502 dstIP   \u2502 packets \u2502 srcIP   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2018-01-01T01:01:00.000Z \u2502  35937 \u2502     3 \u2502 2.2.2.2 \u2502     286 \u2502 1.1.1.1 \u2502\n\u2502 2018-01-01T01:02:00.000Z \u2502 366260 \u2502     2 \u2502 2.2.2.2 \u2502     415 \u2502 1.1.1.1 \u2502\n\u2502 2018-01-01T01:03:00.000Z \u2502  10204 \u2502     1 \u2502 2.2.2.2 \u2502      49 \u2502 1.1.1.1 \u2502\n\u2502 2018-01-02T21:33:00.000Z \u2502 100288 \u2502     2 \u2502 8.8.8.8 \u2502     161 \u2502 7.7.7.7 \u2502\n\u2502 2018-01-02T21:35:00.000Z \u2502   2818 \u2502     1 \u2502 8.8.8.8 \u2502      12 \u2502 7.7.7.7 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\nRetrieved 5 rows in 1.18s.\n\ndsql>\n')),(0,l.kt)("p",null,"Let's look at the three events in the original input data that occurred during ",(0,l.kt)("inlineCode",{parentName:"p"},"2018-01-01T01:01"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"timestamp":"2018-01-01T01:01:35Z","srcIP":"1.1.1.1", "dstIP":"2.2.2.2","packets":20,"bytes":9024}\n{"timestamp":"2018-01-01T01:01:51Z","srcIP":"1.1.1.1", "dstIP":"2.2.2.2","packets":255,"bytes":21133}\n{"timestamp":"2018-01-01T01:01:59Z","srcIP":"1.1.1.1", "dstIP":"2.2.2.2","packets":11,"bytes":5780}\n')),(0,l.kt)("p",null,'These three rows have been "rolled up" into the following row:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 __time                   \u2502 bytes  \u2502 count \u2502 dstIP   \u2502 packets \u2502 srcIP   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2018-01-01T01:01:00.000Z \u2502  35937 \u2502     3 \u2502 2.2.2.2 \u2502     286 \u2502 1.1.1.1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"The input rows have been grouped by the timestamp and dimension columns ",(0,l.kt)("inlineCode",{parentName:"p"},"{timestamp, srcIP, dstIP}")," with sum aggregations on the metric columns ",(0,l.kt)("inlineCode",{parentName:"p"},"packets")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"bytes"),"."),(0,l.kt)("p",null,"Before the grouping occurs, the timestamps of the original input data are bucketed/floored by minute, due to the ",(0,l.kt)("inlineCode",{parentName:"p"},'"queryGranularity":"minute"')," setting in the ingestion spec."),(0,l.kt)("p",null,"Likewise, these two events that occurred during ",(0,l.kt)("inlineCode",{parentName:"p"},"2018-01-01T01:02")," have been rolled up:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"timestamp":"2018-01-01T01:02:14Z","srcIP":"1.1.1.1", "dstIP":"2.2.2.2","packets":38,"bytes":6289}\n{"timestamp":"2018-01-01T01:02:29Z","srcIP":"1.1.1.1", "dstIP":"2.2.2.2","packets":377,"bytes":359971}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 __time                   \u2502 bytes  \u2502 count \u2502 dstIP   \u2502 packets \u2502 srcIP   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2018-01-01T01:02:00.000Z \u2502 366260 \u2502     2 \u2502 2.2.2.2 \u2502     415 \u2502 1.1.1.1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"For the last event recording traffic between 1.1.1.1 and 2.2.2.2, no rollup took place, because this was the only event that occurred during ",(0,l.kt)("inlineCode",{parentName:"p"},"2018-01-01T01:03"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"timestamp":"2018-01-01T01:03:29Z","srcIP":"1.1.1.1", "dstIP":"2.2.2.2","packets":49,"bytes":10204}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 __time                   \u2502 bytes  \u2502 count \u2502 dstIP   \u2502 packets \u2502 srcIP   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2018-01-01T01:03:00.000Z \u2502  10204 \u2502     1 \u2502 2.2.2.2 \u2502      49 \u2502 1.1.1.1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Note that the ",(0,l.kt)("inlineCode",{parentName:"p"},"count"),' metric shows how many rows in the original input data contributed to the final "rolled up" row.'))}k.isMDXComponent=!0}}]);