"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8438],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),m=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=m(e.components);return i.createElement(p.Provider,{value:n},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=m(t),d=a,u=g["".concat(p,".").concat(d)]||g[d]||y[d]||r;return t?i.createElement(u,o(o({ref:n},l),{},{components:t})):i.createElement(u,o({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[g]="string"==typeof e?e:a,o[1]=s;for(var m=2;m<r;m++)o[m]=t[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},35223:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>m,toc:()=>g});var i=t(87462),a=t(63366),r=(t(67294),t(3905)),o=["components"],s={id:"examples",title:"SQL-based ingestion query examples",sidebar_label:"Examples"},p=void 0,m={unversionedId:"multi-stage-query/examples",id:"multi-stage-query/examples",title:"SQL-based ingestion query examples",description:"\x3c!--",source:"@site/docs/30.0.1/multi-stage-query/examples.md",sourceDirName:"multi-stage-query",slug:"/multi-stage-query/examples",permalink:"/docs/30.0.1/multi-stage-query/examples",draft:!1,tags:[],version:"current",frontMatter:{id:"examples",title:"SQL-based ingestion query examples",sidebar_label:"Examples"},sidebar:"docs",previous:{title:"Security",permalink:"/docs/30.0.1/multi-stage-query/security"},next:{title:"Reference",permalink:"/docs/30.0.1/multi-stage-query/reference"}},l={},g=[{value:"INSERT with no rollup",id:"insert-with-no-rollup",level:2},{value:"INSERT with rollup",id:"insert-with-rollup",level:2},{value:"INSERT for reindexing an existing datasource",id:"insert-for-reindexing-an-existing-datasource",level:2},{value:"INSERT with JOIN",id:"insert-with-join",level:2},{value:"REPLACE an entire datasource",id:"replace-an-entire-datasource",level:2},{value:"REPLACE for replacing a specific time segment",id:"replace-for-replacing-a-specific-time-segment",level:2},{value:"REPLACE for reindexing an existing datasource into itself",id:"replace-for-reindexing-an-existing-datasource-into-itself",level:2},{value:"SELECT with EXTERN and JOIN",id:"select-with-extern-and-join",level:2}],y={toc:g},d="wrapper";function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)(d,(0,i.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"}," This page describes SQL-based batch ingestion using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/multi-stage-query/"},(0,r.kt)("inlineCode",{parentName:"a"},"druid-multi-stage-query")),"\nextension, new in Druid 24.0. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/ingestion/#batch"},"ingestion methods")," table to determine which\ningestion method is right for you.")),(0,r.kt)("p",null,"These example queries show you some of the things you can do when modifying queries for your use case. Copy the example queries into the ",(0,r.kt)("strong",{parentName:"p"},"Query")," view of the web console and run them to see what they do."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When you insert or replace data with SQL-based ingestion, set the context parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"finalizeAggregations")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". This context parameter is automatically set for you if you use the Druid console. If you use the API, you must explicitly set it. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/multi-stage-query/concepts#rollup"},"Rollup"),".")),(0,r.kt)("h2",{id:"insert-with-no-rollup"},"INSERT with no rollup"),(0,r.kt)("p",null,"This example inserts data into a table named ",(0,r.kt)("inlineCode",{parentName:"p"},"w000")," without performing any data rollup:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show the query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'INSERT INTO w000\nSELECT\n  TIME_PARSE("timestamp") AS __time,\n  isRobot,\n  channel,\n  flags,\n  isUnpatrolled,\n  page,\n  diffUrl,\n  added,\n  comment,\n  commentLength,\n  isNew,\n  isMinor,\n  delta,\n  isAnonymous,\n  user,\n  deltaBucket,\n  deleted,\n  namespace,\n  cityName,\n  countryName,\n  regionIsoCode,\n  metroCode,\n  countryIsoCode,\n  regionName\nFROM TABLE(\n    EXTERN(\n      \'{"type":"http","uris":["https://druid.apache.org/data/wikipedia.json.gz"]}\',\n      \'{"type":"json"}\',\n      \'[{"name":"isRobot","type":"string"},{"name":"channel","type":"string"},{"name":"timestamp","type":"string"},{"name":"flags","type":"string"},{"name":"isUnpatrolled","type":"string"},{"name":"page","type":"string"},{"name":"diffUrl","type":"string"},{"name":"added","type":"long"},{"name":"comment","type":"string"},{"name":"commentLength","type":"long"},{"name":"isNew","type":"string"},{"name":"isMinor","type":"string"},{"name":"delta","type":"long"},{"name":"isAnonymous","type":"string"},{"name":"user","type":"string"},{"name":"deltaBucket","type":"long"},{"name":"deleted","type":"long"},{"name":"namespace","type":"string"},{"name":"cityName","type":"string"},{"name":"countryName","type":"string"},{"name":"regionIsoCode","type":"string"},{"name":"metroCode","type":"long"},{"name":"countryIsoCode","type":"string"},{"name":"regionName","type":"string"}]\'\n    )\n  )\nPARTITIONED BY HOUR\nCLUSTERED BY channel\n'))),(0,r.kt)("h2",{id:"insert-with-rollup"},"INSERT with rollup"),(0,r.kt)("p",null,"This example inserts data into a table named ",(0,r.kt)("inlineCode",{parentName:"p"},"kttm_rollup")," and performs data rollup. This example implements the recommendations described in ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/multi-stage-query/concepts#rollup"},"Rollup"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show the query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'INSERT INTO "kttm_rollup"\n\nWITH kttm_data AS (\nSELECT * FROM TABLE(\n  EXTERN(\n    \'{"type":"http","uris":["https://static.imply.io/example-data/kttm-v2/kttm-v2-2019-08-25.json.gz"]}\',\n    \'{"type":"json"}\',\n    \'[{"name":"timestamp","type":"string"},{"name":"agent_category","type":"string"},{"name":"agent_type","type":"string"},{"name":"browser","type":"string"},{"name":"browser_version","type":"string"},{"name":"city","type":"string"},{"name":"continent","type":"string"},{"name":"country","type":"string"},{"name":"version","type":"string"},{"name":"event_type","type":"string"},{"name":"event_subtype","type":"string"},{"name":"loaded_image","type":"string"},{"name":"adblock_list","type":"string"},{"name":"forwarded_for","type":"string"},{"name":"number","type":"long"},{"name":"os","type":"string"},{"name":"path","type":"string"},{"name":"platform","type":"string"},{"name":"referrer","type":"string"},{"name":"referrer_host","type":"string"},{"name":"region","type":"string"},{"name":"remote_address","type":"string"},{"name":"screen","type":"string"},{"name":"session","type":"string"},{"name":"session_length","type":"long"},{"name":"timezone","type":"string"},{"name":"timezone_offset","type":"long"},{"name":"window","type":"string"}]\'\n  )\n))\n\nSELECT\n  FLOOR(TIME_PARSE("timestamp") TO MINUTE) AS __time,\n  session,\n  agent_category,\n  agent_type,\n  browser,\n  browser_version\n  os,\n  city,\n  country,\n  forwarded_for AS ip_address,\n\n  COUNT(*) AS "cnt",\n  SUM(session_length) AS session_length,\n  APPROX_COUNT_DISTINCT_DS_HLL(event_type) AS unique_event_types\nFROM kttm_data\nWHERE os = \'iOS\'\nGROUP BY 1, 2, 3, 4, 5, 6, 7, 8, 9, 10\nPARTITIONED BY HOUR\nCLUSTERED BY browser, session\n'))),(0,r.kt)("h2",{id:"insert-for-reindexing-an-existing-datasource"},"INSERT for reindexing an existing datasource"),(0,r.kt)("p",null,"This example aggregates data from a table named ",(0,r.kt)("inlineCode",{parentName:"p"},"w000")," and inserts the result into ",(0,r.kt)("inlineCode",{parentName:"p"},"w002"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show the query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO w002\nSELECT\n  FLOOR(__time TO MINUTE) AS __time,\n  channel,\n  countryIsoCode,\n  countryName,\n  regionIsoCode,\n  regionName,\n  page,\n  COUNT(*) AS cnt,\n  SUM(added) AS sum_added,\n  SUM(deleted) AS sum_deleted\nFROM w000\nGROUP BY 1, 2, 3, 4, 5, 6, 7\nPARTITIONED BY HOUR\nCLUSTERED BY page\n"))),(0,r.kt)("h2",{id:"insert-with-join"},"INSERT with JOIN"),(0,r.kt)("p",null,"This example inserts data into a table named ",(0,r.kt)("inlineCode",{parentName:"p"},"w003")," and joins data from two sources:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show the query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'INSERT INTO w003\nWITH\nwikidata AS (SELECT * FROM TABLE(\n  EXTERN(\n    \'{"type":"http","uris":["https://druid.apache.org/data/wikipedia.json.gz"]}\',\n    \'{"type":"json"}\',\n    \'[{"name":"isRobot","type":"string"},{"name":"channel","type":"string"},{"name":"timestamp","type":"string"},{"name":"flags","type":"string"},{"name":"isUnpatrolled","type":"string"},{"name":"page","type":"string"},{"name":"diffUrl","type":"string"},{"name":"added","type":"long"},{"name":"comment","type":"string"},{"name":"commentLength","type":"long"},{"name":"isNew","type":"string"},{"name":"isMinor","type":"string"},{"name":"delta","type":"long"},{"name":"isAnonymous","type":"string"},{"name":"user","type":"string"},{"name":"deltaBucket","type":"long"},{"name":"deleted","type":"long"},{"name":"namespace","type":"string"},{"name":"cityName","type":"string"},{"name":"countryName","type":"string"},{"name":"regionIsoCode","type":"string"},{"name":"metroCode","type":"long"},{"name":"countryIsoCode","type":"string"},{"name":"regionName","type":"string"}]\'\n  )\n)),\ncountries AS (SELECT * FROM TABLE(\n  EXTERN(\n    \'{"type":"http","uris":["https://static.imply.io/example-data/lookup/countries.tsv"]}\',\n    \'{"type":"tsv","findColumnsFromHeader":true}\',\n    \'[{"name":"Country","type":"string"},{"name":"Capital","type":"string"},{"name":"ISO3","type":"string"},{"name":"ISO2","type":"string"}]\'\n  )\n))\nSELECT\n  TIME_PARSE("timestamp") AS __time,\n  isRobot,\n  channel,\n  flags,\n  isUnpatrolled,\n  page,\n  diffUrl,\n  added,\n  comment,\n  commentLength,\n  isNew,\n  isMinor,\n  delta,\n  isAnonymous,\n  user,\n  deltaBucket,\n  deleted,\n  namespace,\n  cityName,\n  countryName,\n  regionIsoCode,\n  metroCode,\n  countryIsoCode,\n  countries.Capital AS countryCapital,\n  regionName\nFROM wikidata\nLEFT JOIN countries ON wikidata.countryIsoCode = countries.ISO2\nPARTITIONED BY HOUR\n'))),(0,r.kt)("h2",{id:"replace-an-entire-datasource"},"REPLACE an entire datasource"),(0,r.kt)("p",null,"This example replaces the entire datasource used in the table ",(0,r.kt)("inlineCode",{parentName:"p"},"w007")," with the new query data while dropping the old data:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show the query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'REPLACE INTO w007\nOVERWRITE ALL\nSELECT\n  TIME_PARSE("timestamp") AS __time,\n  isRobot,\n  channel,\n  flags,\n  isUnpatrolled,\n  page,\n  diffUrl,\n  added,\n  comment,\n  commentLength,\n  isNew,\n  isMinor,\n  delta,\n  isAnonymous,\n  user,\n  deltaBucket,\n  deleted,\n  namespace,\n  cityName,\n  countryName,\n  regionIsoCode,\n  metroCode,\n  countryIsoCode,\n  regionName\nFROM TABLE(\n    EXTERN(\n      \'{"type":"http","uris":["https://druid.apache.org/data/wikipedia.json.gz"]}\',\n      \'{"type":"json"}\',\n      \'[{"name":"isRobot","type":"string"},{"name":"channel","type":"string"},{"name":"timestamp","type":"string"},{"name":"flags","type":"string"},{"name":"isUnpatrolled","type":"string"},{"name":"page","type":"string"},{"name":"diffUrl","type":"string"},{"name":"added","type":"long"},{"name":"comment","type":"string"},{"name":"commentLength","type":"long"},{"name":"isNew","type":"string"},{"name":"isMinor","type":"string"},{"name":"delta","type":"long"},{"name":"isAnonymous","type":"string"},{"name":"user","type":"string"},{"name":"deltaBucket","type":"long"},{"name":"deleted","type":"long"},{"name":"namespace","type":"string"},{"name":"cityName","type":"string"},{"name":"countryName","type":"string"},{"name":"regionIsoCode","type":"string"},{"name":"metroCode","type":"long"},{"name":"countryIsoCode","type":"string"},{"name":"regionName","type":"string"}]\'\n    )\n  )\nPARTITIONED BY HOUR\nCLUSTERED BY channel\n'))),(0,r.kt)("h2",{id:"replace-for-replacing-a-specific-time-segment"},"REPLACE for replacing a specific time segment"),(0,r.kt)("p",null,"This example replaces certain segments in a datasource with the new query data while dropping old segments:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show the query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"REPLACE INTO w007\nOVERWRITE WHERE __time >= TIMESTAMP '2019-08-25 02:00:00' AND __time < TIMESTAMP '2019-08-25 03:00:00'\nSELECT\n  FLOOR(__time TO MINUTE) AS __time,\n  channel,\n  countryIsoCode,\n  countryName,\n  regionIsoCode,\n  regionName,\n  page\nFROM w007\nWHERE __time >= TIMESTAMP '2019-08-25 02:00:00' AND __time < TIMESTAMP '2019-08-25 03:00:00' AND countryName = \"Canada\"\nPARTITIONED BY HOUR\nCLUSTERED BY page\n"))),(0,r.kt)("h2",{id:"replace-for-reindexing-an-existing-datasource-into-itself"},"REPLACE for reindexing an existing datasource into itself"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show the query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"REPLACE INTO w000\nOVERWRITE ALL\nSELECT\n  FLOOR(__time TO MINUTE) AS __time,\n  channel,\n  countryIsoCode,\n  countryName,\n  regionIsoCode,\n  regionName,\n  page,\n  COUNT(*) AS cnt,\n  SUM(added) AS sum_added,\n  SUM(deleted) AS sum_deleted\nFROM w000\nGROUP BY 1, 2, 3, 4, 5, 6, 7\nPARTITIONED BY HOUR\nCLUSTERED BY page\n"))),(0,r.kt)("h2",{id:"select-with-extern-and-join"},"SELECT with EXTERN and JOIN"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show the query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'WITH flights AS (\n  SELECT * FROM TABLE(\n  EXTERN(\n    \'{"type":"http","uris":["https://static.imply.io/example-data/flight_on_time/flights/On_Time_Reporting_Carrier_On_Time_Performance_(1987_present)_2005_11.csv.zip"]}\',\n    \'{"type":"csv","findColumnsFromHeader":true}\',\n    \'[{"name":"depaturetime","type":"string"},{"name":"arrivalime","type":"string"},{"name":"Year","type":"long"},{"name":"Quarter","type":"long"},{"name":"Month","type":"long"},{"name":"DayofMonth","type":"long"},{"name":"DayOfWeek","type":"long"},{"name":"FlightDate","type":"string"},{"name":"Reporting_Airline","type":"string"},{"name":"DOT_ID_Reporting_Airline","type":"long"},{"name":"IATA_CODE_Reporting_Airline","type":"string"},{"name":"Tail_Number","type":"string"},{"name":"Flight_Number_Reporting_Airline","type":"long"},{"name":"OriginAirportID","type":"long"},{"name":"OriginAirportSeqID","type":"long"},{"name":"OriginCityMarketID","type":"long"},{"name":"Origin","type":"string"},{"name":"OriginCityName","type":"string"},{"name":"OriginState","type":"string"},{"name":"OriginStateFips","type":"long"},{"name":"OriginStateName","type":"string"},{"name":"OriginWac","type":"long"},{"name":"DestAirportID","type":"long"},{"name":"DestAirportSeqID","type":"long"},{"name":"DestCityMarketID","type":"long"},{"name":"Dest","type":"string"},{"name":"DestCityName","type":"string"},{"name":"DestState","type":"string"},{"name":"DestStateFips","type":"long"},{"name":"DestStateName","type":"string"},{"name":"DestWac","type":"long"},{"name":"CRSDepTime","type":"long"},{"name":"DepTime","type":"long"},{"name":"DepDelay","type":"long"},{"name":"DepDelayMinutes","type":"long"},{"name":"DepDel15","type":"long"},{"name":"DepartureDelayGroups","type":"long"},{"name":"DepTimeBlk","type":"string"},{"name":"TaxiOut","type":"long"},{"name":"WheelsOff","type":"long"},{"name":"WheelsOn","type":"long"},{"name":"TaxiIn","type":"long"},{"name":"CRSArrTime","type":"long"},{"name":"ArrTime","type":"long"},{"name":"ArrDelay","type":"long"},{"name":"ArrDelayMinutes","type":"long"},{"name":"ArrDel15","type":"long"},{"name":"ArrivalDelayGroups","type":"long"},{"name":"ArrTimeBlk","type":"string"},{"name":"Cancelled","type":"long"},{"name":"CancellationCode","type":"string"},{"name":"Diverted","type":"long"},{"name":"CRSElapsedTime","type":"long"},{"name":"ActualElapsedTime","type":"long"},{"name":"AirTime","type":"long"},{"name":"Flights","type":"long"},{"name":"Distance","type":"long"},{"name":"DistanceGroup","type":"long"},{"name":"CarrierDelay","type":"long"},{"name":"WeatherDelay","type":"long"},{"name":"NASDelay","type":"long"},{"name":"SecurityDelay","type":"long"},{"name":"LateAircraftDelay","type":"long"},{"name":"FirstDepTime","type":"string"},{"name":"TotalAddGTime","type":"string"},{"name":"LongestAddGTime","type":"string"},{"name":"DivAirportLandings","type":"string"},{"name":"DivReachedDest","type":"string"},{"name":"DivActualElapsedTime","type":"string"},{"name":"DivArrDelay","type":"string"},{"name":"DivDistance","type":"string"},{"name":"Div1Airport","type":"string"},{"name":"Div1AirportID","type":"string"},{"name":"Div1AirportSeqID","type":"string"},{"name":"Div1WheelsOn","type":"string"},{"name":"Div1TotalGTime","type":"string"},{"name":"Div1LongestGTime","type":"string"},{"name":"Div1WheelsOff","type":"string"},{"name":"Div1TailNum","type":"string"},{"name":"Div2Airport","type":"string"},{"name":"Div2AirportID","type":"string"},{"name":"Div2AirportSeqID","type":"string"},{"name":"Div2WheelsOn","type":"string"},{"name":"Div2TotalGTime","type":"string"},{"name":"Div2LongestGTime","type":"string"},{"name":"Div2WheelsOff","type":"string"},{"name":"Div2TailNum","type":"string"},{"name":"Div3Airport","type":"string"},{"name":"Div3AirportID","type":"string"},{"name":"Div3AirportSeqID","type":"string"},{"name":"Div3WheelsOn","type":"string"},{"name":"Div3TotalGTime","type":"string"},{"name":"Div3LongestGTime","type":"string"},{"name":"Div3WheelsOff","type":"string"},{"name":"Div3TailNum","type":"string"},{"name":"Div4Airport","type":"string"},{"name":"Div4AirportID","type":"string"},{"name":"Div4AirportSeqID","type":"string"},{"name":"Div4WheelsOn","type":"string"},{"name":"Div4TotalGTime","type":"string"},{"name":"Div4LongestGTime","type":"string"},{"name":"Div4WheelsOff","type":"string"},{"name":"Div4TailNum","type":"string"},{"name":"Div5Airport","type":"string"},{"name":"Div5AirportID","type":"string"},{"name":"Div5AirportSeqID","type":"string"},{"name":"Div5WheelsOn","type":"string"},{"name":"Div5TotalGTime","type":"string"},{"name":"Div5LongestGTime","type":"string"},{"name":"Div5WheelsOff","type":"string"},{"name":"Div5TailNum","type":"string"},{"name":"Unnamed: 109","type":"string"}]\'\n  )\n)),\nL_AIRPORT AS (\n  SELECT * FROM TABLE(\n  EXTERN(\n    \'{"type":"http","uris":["https://static.imply.io/example-data/flight_on_time/dimensions/L_AIRPORT.csv"]}\',\n    \'{"type":"csv","findColumnsFromHeader":true}\',\n    \'[{"name":"Code","type":"string"},{"name":"Description","type":"string"}]\'\n  )\n)),\nL_AIRPORT_ID AS (\n  SELECT * FROM TABLE(\n  EXTERN(\n    \'{"type":"http","uris":["https://static.imply.io/example-data/flight_on_time/dimensions/L_AIRPORT_ID.csv"]}\',\n    \'{"type":"csv","findColumnsFromHeader":true}\',\n    \'[{"name":"Code","type":"long"},{"name":"Description","type":"string"}]\'\n  )\n)),\nL_AIRLINE_ID AS (\n  SELECT * FROM TABLE(\n  EXTERN(\n    \'{"type":"http","uris":["https://static.imply.io/example-data/flight_on_time/dimensions/L_AIRLINE_ID.csv"]}\',\n    \'{"type":"csv","findColumnsFromHeader":true}\',\n    \'[{"name":"Code","type":"long"},{"name":"Description","type":"string"}]\'\n  )\n)),\nL_CITY_MARKET_ID AS (\n  SELECT * FROM TABLE(\n  EXTERN(\n    \'{"type":"http","uris":["https://static.imply.io/example-data/flight_on_time/dimensions/L_CITY_MARKET_ID.csv"]}\',\n    \'{"type":"csv","findColumnsFromHeader":true}\',\n    \'[{"name":"Code","type":"long"},{"name":"Description","type":"string"}]\'\n  )\n)),\nL_CANCELLATION AS (\n  SELECT * FROM TABLE(\n  EXTERN(\n    \'{"type":"http","uris":["https://static.imply.io/example-data/flight_on_time/dimensions/L_CANCELLATION.csv"]}\',\n    \'{"type":"csv","findColumnsFromHeader":true}\',\n    \'[{"name":"Code","type":"string"},{"name":"Description","type":"string"}]\'\n  )\n)),\nL_STATE_FIPS AS (\n  SELECT * FROM TABLE(\n  EXTERN(\n    \'{"type":"http","uris":["https://static.imply.io/example-data/flight_on_time/dimensions/L_STATE_FIPS.csv"]}\',\n    \'{"type":"csv","findColumnsFromHeader":true}\',\n    \'[{"name":"Code","type":"long"},{"name":"Description","type":"string"}]\'\n  )\n))\nSELECT\n  depaturetime,\n  arrivalime,\n  -- "Year",\n  -- Quarter,\n  -- "Month",\n  -- DayofMonth,\n  -- DayOfWeek,\n  -- FlightDate,\n  Reporting_Airline,\n\n  DOT_ID_Reporting_Airline,\n  DOTAirlineLookup.Description AS DOT_Reporting_Airline,\n\n  IATA_CODE_Reporting_Airline,\n  Tail_Number,\n  Flight_Number_Reporting_Airline,\n\n  OriginAirportID,\n  OriginAirportIDLookup.Description AS OriginAirport,\n\n  OriginAirportSeqID,\n\n  OriginCityMarketID,\n  OriginCityMarketIDLookup.Description AS OriginCityMarket,\n\n  Origin,\n  OriginAirportLookup.Description AS OriginDescription,\n\n  OriginCityName,\n  OriginState,\n\n  OriginStateFips,\n  OriginStateFipsLookup.Description AS OriginStateFipsDescription,\n\n  OriginStateName,\n  OriginWac,\n\n  DestAirportID,\n  DestAirportIDLookup.Description AS DestAirport,\n\n  DestAirportSeqID,\n\n  DestCityMarketID,\n  DestCityMarketIDLookup.Description AS DestCityMarket,\n\n  Dest,\n  DestAirportLookup.Description AS DestDescription,\n\n  DestCityName,\n  DestState,\n\n  DestStateFips,\n  DestStateFipsLookup.Description AS DestStateFipsDescription,\n\n  DestStateName,\n  DestWac,\n\n  CRSDepTime,\n  DepTime,\n  DepDelay,\n  DepDelayMinutes,\n  DepDel15,\n  DepartureDelayGroups,\n  DepTimeBlk,\n  TaxiOut,\n  WheelsOff,\n  WheelsOn,\n  TaxiIn,\n  CRSArrTime,\n  ArrTime,\n  ArrDelay,\n  ArrDelayMinutes,\n  ArrDel15,\n  ArrivalDelayGroups,\n  ArrTimeBlk,\n\n  Cancelled,\n  CancellationCode,\n  CancellationCodeLookup.Description AS CancellationReason,\n\n  Diverted,\n  CRSElapsedTime,\n  ActualElapsedTime,\n  AirTime,\n  Flights,\n  Distance,\n  DistanceGroup,\n  CarrierDelay,\n  WeatherDelay,\n  NASDelay,\n  SecurityDelay,\n  LateAircraftDelay,\n  FirstDepTime,\n  TotalAddGTime,\n  LongestAddGTime\nFROM "flights"\nLEFT JOIN L_AIRLINE_ID AS DOTAirlineLookup ON DOT_ID_Reporting_Airline = DOTAirlineLookup.Code\nLEFT JOIN L_AIRPORT AS OriginAirportLookup ON Origin = OriginAirportLookup.Code\nLEFT JOIN L_AIRPORT AS DestAirportLookup ON Dest = DestAirportLookup.Code\nLEFT JOIN L_AIRPORT_ID AS OriginAirportIDLookup ON OriginAirportID = OriginAirportIDLookup.Code\nLEFT JOIN L_AIRPORT_ID AS DestAirportIDLookup ON DestAirportID = DestAirportIDLookup.Code\nLEFT JOIN L_CITY_MARKET_ID AS OriginCityMarketIDLookup ON OriginCityMarketID = OriginCityMarketIDLookup.Code\nLEFT JOIN L_CITY_MARKET_ID AS DestCityMarketIDLookup ON DestCityMarketID = DestCityMarketIDLookup.Code\nLEFT JOIN L_STATE_FIPS AS OriginStateFipsLookup ON OriginStateFips = OriginStateFipsLookup.Code\nLEFT JOIN L_STATE_FIPS AS DestStateFipsLookup ON DestStateFips = DestStateFipsLookup.Code\nLEFT JOIN L_CANCELLATION AS CancellationCodeLookup ON CancellationCode = CancellationCodeLookup.Code\nLIMIT 1000\n'))))}u.isMDXComponent=!0}}]);