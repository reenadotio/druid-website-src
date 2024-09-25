"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6857],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,m=c["".concat(l,".").concat(d)]||c[d]||h[d]||s;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},90964:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),o=["components"],i={id:"web-console",title:"Web console"},l=void 0,u={unversionedId:"operations/web-console",id:"operations/web-console",title:"Web console",description:"\x3c!--",source:"@site/docs/30.0.1/operations/web-console.md",sourceDirName:"operations",slug:"/operations/web-console",permalink:"/docs/30.0.1/operations/web-console",draft:!1,tags:[],version:"current",frontMatter:{id:"web-console",title:"Web console"},sidebar:"docs",previous:{title:"Automatic compaction",permalink:"/docs/30.0.1/api-reference/automatic-compaction-api"},next:{title:"Java runtime",permalink:"/docs/30.0.1/operations/java"}},p={},c=[{value:"Home",id:"home",level:2},{value:"Query",id:"query",level:2},{value:"Data loader",id:"data-loader",level:2},{value:"Datasources",id:"datasources",level:2},{value:"Segments",id:"segments",level:2},{value:"Supervisors",id:"supervisors",level:2},{value:"Tasks",id:"tasks",level:2},{value:"Services",id:"services",level:2},{value:"Lookups",id:"lookups",level:2}],h={toc:c},d="wrapper";function m(e){var t=e.components,i=(0,r.Z)(e,o);return(0,s.kt)(d,(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Druid includes a web console for loading data, managing datasources and tasks, and viewing server status and segment information.\nYou can also run SQL and native Druid queries in the console."),(0,s.kt)("p",null,"Enable the following cluster settings to use the web console. Note that these settings are enabled by default."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Enable the Router's ",(0,s.kt)("a",{parentName:"li",href:"/docs/30.0.1/design/router#enable-the-management-proxy"},"management proxy"),"."),(0,s.kt)("li",{parentName:"ul"},"Enable ",(0,s.kt)("a",{parentName:"li",href:"/docs/30.0.1/configuration/#sql"},"Druid SQL")," for the Broker processes in the cluster.")),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"/docs/30.0.1/design/router"},"Router")," service hosts the web console.\nAccess the web console at the following address:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"http://<ROUTER_IP>:<ROUTER_PORT>\n")),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"}," ",(0,s.kt)("strong",{parentName:"p"},"Security note:")," Without ",(0,s.kt)("a",{parentName:"p",href:"/docs/30.0.1/operations/security-overview"},"Druid user permissions")," configured, any user of the\nAPI or web console has effectively the same level of access to local files and network services as the user under which\nDruid runs. It is a best practice to avoid running Druid as the root user, and to use Druid permissions\xa0or network\nfirewalls to restrict which users have access to potentially sensitive resources.")),(0,s.kt)("p",null,"This topic presents the high-level features and functionality of the web console."),(0,s.kt)("h2",{id:"home"},"Home"),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"Home")," view provides a high-level overview of the cluster.\nEach card is clickable and links to the appropriate view."),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"Home")," view displays the following cards:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Status"),". Click this card for information on the Druid version and any extensions loaded on the cluster."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#datasources"},"Datasources")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#segments"},"Segments")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#supervisors"},"Supervisors")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#tasks"},"Tasks")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#services"},"Services")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#lookups"},"Lookups"))),(0,s.kt)("p",null,"You can access the ",(0,s.kt)("a",{parentName:"p",href:"#data-loader"},"data loader")," and ",(0,s.kt)("a",{parentName:"p",href:"#lookups"},"lookups view")," from the top-level navigation of the ",(0,s.kt)("strong",{parentName:"p"},"Home")," view."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Web console home view",src:a(28569).Z,title:"home view",width:"1250",height:"840"})),(0,s.kt)("h2",{id:"query"},"Query"),(0,s.kt)("p",null,"SQL-based ingestion and the multi-stage query task engine use the ",(0,s.kt)("strong",{parentName:"p"},"Query")," view, which provides you with a UI to edit and use SQL queries. You should see this UI automatically in Druid 24.0 and later since the multi-stage query extension is loaded by default. "),(0,s.kt)("p",null,"The following screenshot shows a populated enhanced ",(0,s.kt)("strong",{parentName:"p"},"Query")," view along with a description of its parts:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Annotated multi-stage Query view",src:a(57970).Z,width:"1250",height:"740"})),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The multi-stage, tab-enabled, ",(0,s.kt)("strong",{parentName:"li"},"Query")," view is where you can issue queries and see results.\nAll other views are unchanged from the non-enhanced version. You can still access the original ",(0,s.kt)("strong",{parentName:"li"},"Query")," view by navigating to ",(0,s.kt)("inlineCode",{parentName:"li"},"#query")," in the URL.\nYou can tell that you're looking at the updated ",(0,s.kt)("strong",{parentName:"li"},"Query")," view by the presence of the tabs (3)."),(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("strong",{parentName:"li"},"druid")," panel shows the available schemas, datasources, and columns."),(0,s.kt)("li",{parentName:"ol"},"Query tabs allow you to manage and run several queries at once.\nClick the plus icon to open a new tab.\nTo manipulate existing tabs, click the tab name."),(0,s.kt)("li",{parentName:"ol"},"The tab bar contains some helpful tools including the ",(0,s.kt)("strong",{parentName:"li"},"Connect external data")," button that samples external data and creates an initial query with the appropriate ",(0,s.kt)("inlineCode",{parentName:"li"},"EXTERN")," definition that you can then edit as needed."),(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("strong",{parentName:"li"},"Recent query tasks")," panel lets you see currently running and previous queries from all users in the cluster.\nIt is equivalent to the ",(0,s.kt)("strong",{parentName:"li"},"Task")," view in the ",(0,s.kt)("strong",{parentName:"li"},"Ingestion")," view with the filter of ",(0,s.kt)("inlineCode",{parentName:"li"},"type='query_controller'"),"."),(0,s.kt)("li",{parentName:"ol"},"You can click on each query entry to attach to that query in a new tab."),(0,s.kt)("li",{parentName:"ol"},"You can download an archive of all the pertinent details about the query that you can share."),(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("strong",{parentName:"li"},"Run")," button runs the query."),(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("strong",{parentName:"li"},"Preview")," button appears when you enter an INSERT/REPLACE query. It runs the query inline without the INSERT/REPLACE clause and with an added LIMIT to give you a preview of the data that would be ingested if you click ",(0,s.kt)("strong",{parentName:"li"},"Run"),".\nThe added LIMIT makes the query run faster but provides incomplete results."),(0,s.kt)("li",{parentName:"ol"},"The engine selector lets you choose which engine (API endpoint) to send a query to. By default, it automatically picks which endpoint to use based on an analysis of the query, but you can select a specific engine explicitly. You can also configure the engine specific context parameters from this menu."),(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("strong",{parentName:"li"},"Max tasks")," picker appears when you have the ",(0,s.kt)("strong",{parentName:"li"},"sql-msq-task")," engine selected. It lets you configure the degree of parallelism."),(0,s.kt)("li",{parentName:"ol"},"The More menu (",(0,s.kt)("strong",{parentName:"li"},"..."),") contains the following helpful tools:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Explain SQL query")," shows you the logical plan returned by ",(0,s.kt)("inlineCode",{parentName:"li"},"EXPLAIN PLAN FOR")," for a SQL query."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Query history")," shows you previously executed queries."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Convert ingestion spec to SQL")," lets you convert a native batch ingestion spec to an equivalent SQL query."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Attach tab from task ID")," lets you create a new tab from the task ID of a query executed on this cluster."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Open query detail archive")," lets you open a detail archive generated on any cluster by (7).")),(0,s.kt)("ol",{start:13},(0,s.kt)("li",{parentName:"ol"},"The query timer indicates how long the query has been running for."),(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("strong",{parentName:"li"},"(cancel)")," link cancels the currently running query."),(0,s.kt)("li",{parentName:"ol"},"The main progress bar shows the overall progress of the query.\nThe progress is computed from the various counters in the live reports (16)."),(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("strong",{parentName:"li"},"Current stage")," progress bar shows the progress for the currently running query stage.\nIf several stages are executing concurrently, it conservatively shows the information for the earliest executing stage."),(0,s.kt)("li",{parentName:"ol"},"The live query reports show detailed information of all the stages (past, present, and future). The live reports are shown while the query is running. You can hide the report if you want.\nAfter queries finish, you can access them by clicking on the query time indicator or from the ",(0,s.kt)("strong",{parentName:"li"},"Recent query tasks")," panel (6)."),(0,s.kt)("li",{parentName:"ol"},"You can expand each stage of the live query report by clicking on the triangle to show per worker and per partition statistics.")),(0,s.kt)("h2",{id:"data-loader"},"Data loader"),(0,s.kt)("p",null,"You can use the data loader to build an ingestion spec with a step-by-step wizard."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Data loader tiles",src:a(94778).Z,width:"1250",height:"840"})),(0,s.kt)("p",null,"After selecting the location of your data, follow the series of steps displaying incremental previews of the data as it is ingested.\nAfter filling in the required details on every step you can navigate to the next step by clicking ",(0,s.kt)("strong",{parentName:"p"},"Next"),".\nYou can also freely navigate between the steps from the top navigation."),(0,s.kt)("p",null,"Navigating with the top navigation leaves the underlying spec unmodified while clicking ",(0,s.kt)("strong",{parentName:"p"},"Next")," attempts to fill in the subsequent steps with appropriate defaults."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Data loader ingestion",src:a(90239).Z,width:"1250",height:"840"})),(0,s.kt)("h2",{id:"datasources"},"Datasources"),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"Datasources")," view shows all the datasources currently loaded on the cluster, as well as their sizes and availability.\nFrom the ",(0,s.kt)("strong",{parentName:"p"},"Datasources")," view, you can edit the retention rules, configure automatic compaction, and drop data in a datasource."),(0,s.kt)("p",null,"A datasource is partitioned into one or more segments organized by time chunks.\nTo display a timeline of segments, toggle the option for ",(0,s.kt)("strong",{parentName:"p"},"Show segment timeline"),"."),(0,s.kt)("p",null,"Like any view that is powered by a Druid SQL query, you can click ",(0,s.kt)("strong",{parentName:"p"},"View SQL query for table")," from the ellipsis menu to run the underlying SQL query directly."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Datasources",src:a(20408).Z,width:"1250",height:"840"})),(0,s.kt)("p",null,"You can view and edit retention rules to determine the general availability of a datasource."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Retention",src:a(5222).Z,width:"1250",height:"840"})),(0,s.kt)("h2",{id:"segments"},"Segments"),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"Segments")," view shows all the ",(0,s.kt)("a",{parentName:"p",href:"/docs/30.0.1/design/segments"},"segments")," in the cluster.\nEach segment has a detail view that provides more information.\nThe Segment ID is also conveniently broken down into Datasource, Start, End, Version, and Partition columns for ease of filtering and sorting."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Segments",src:a(46607).Z,width:"1250",height:"840"})),(0,s.kt)("h2",{id:"supervisors"},"Supervisors"),(0,s.kt)("p",null,"From this view, you can check the status of existing supervisors as well as suspend, resume, and reset them.\nThe supervisor oversees the state of the indexing tasks to coordinate handoffs, manage failures, and ensure that the scalability and replication requirements are maintained. Submit a supervisor spec manually by clicking the ellipsis icon and selecting ",(0,s.kt)("strong",{parentName:"p"},"Submit JSON supervisor"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Supervisors",src:a(76722).Z,width:"1250",height:"840"})),(0,s.kt)("p",null,"Click the magnifying glass icon for any supervisor to see detailed reports of its progress."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Supervisors status",src:a(97097).Z,width:"1250",height:"840"})),(0,s.kt)("h2",{id:"tasks"},"Tasks"),(0,s.kt)("p",null,"The tasks table allows you to see the currently running and recently completed tasks.\nTo navigate your tasks more easily, you can group them by their ",(0,s.kt)("strong",{parentName:"p"},"Type"),", ",(0,s.kt)("strong",{parentName:"p"},"Datasource"),", or ",(0,s.kt)("strong",{parentName:"p"},"Status"),".\nSubmit a task manually by clicking the ellipsis icon and selecting ",(0,s.kt)("strong",{parentName:"p"},"Submit JSON task"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Tasks",src:a(83245).Z,width:"1250",height:"840"})),(0,s.kt)("p",null,"Click the magnifying glass icon for any task to see more detail about it."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Tasks status",src:a(77533).Z,width:"1250",height:"840"})),(0,s.kt)("h2",{id:"services"},"Services"),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"Services")," view lets you see the current status of the nodes making up your cluster.\nYou can group the nodes by ",(0,s.kt)("strong",{parentName:"p"},"Type")," or by ",(0,s.kt)("strong",{parentName:"p"},"Tier")," to get meaningful summary statistics. "),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Services",src:a(83766).Z,width:"1250",height:"840"})),(0,s.kt)("h2",{id:"lookups"},"Lookups"),(0,s.kt)("p",null,"Access the ",(0,s.kt)("strong",{parentName:"p"},"Lookups")," view from the ",(0,s.kt)("strong",{parentName:"p"},"Lookups")," card in the home view or by clicking the ellipsis icon in the top-level navigation.\nHere you can create and edit query time ",(0,s.kt)("a",{parentName:"p",href:"/docs/30.0.1/querying/lookups"},"lookups"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Lookups",src:a(20924).Z,width:"1250",height:"840"})))}m.isMDXComponent=!0},57970:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ui-annotated-7932933ce7ad968aa0f5e3ef2aeca5e0.png"},83245:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/web-console-0.7-tasks-d53bfa761253b59a0bd368825f8b5c48.png"},28569:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/web-console-01-home-view-99f09e8760740e04b982b4d4c56fe6ed.png"},94778:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/web-console-02-data-loader-1-fcc691fda096b9d9fb00f9a5cd30293f.png"},90239:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/web-console-03-data-loader-2-6eb770d4034261a96b968deb305f1258.png"},20408:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/web-console-04-datasources-d0ac928b0107a903b7c99fd8dff2fc39.png"},5222:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/web-console-05-retention-e5f87124a1e9c252043a45b84a6039ed.png"},46607:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/web-console-06-segments-2a1f30ad959f3af6b5bbe9818f29674d.png"},76722:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/web-console-07-supervisors-dc27d65a42df39922d4ad9cff556faf8.png"},97097:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/web-console-08-supervisor-status-07ece8b3920e682c3264c779053801a0.png"},77533:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/web-console-09-task-status-3bc2b07f8ebe5dca9d6259d011b97d47.png"},83766:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/web-console-10-servers-a6657c30723d278409d8d884d3655ed1.png"},20924:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/web-console-13-lookups-337b7e84ed82f5580448a5ba083f91c1.png"}}]);