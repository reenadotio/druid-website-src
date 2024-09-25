"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2347],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),p=s(t),c=l,g=p["".concat(o,".").concat(c)]||p[c]||d[c]||r;return t?a.createElement(g,i(i({ref:n},m),{},{components:t})):a.createElement(g,i({ref:n},m))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=c;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u[p]="string"==typeof e?e:l,i[1]=u;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),l=t(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>v});var a=t(87462),l=t(67294),r=t(86010),i=t(12466),u=t(16550),o=t(91980),s=t(67392),m=t(50012);function p(e){return function(e){var n,t;return null!=(n=null==(t=l.Children.map(e,(function(e){if(!e||(0,l.isValidElement)(e)&&(n=e.props)&&"object"==typeof n&&"value"in n)return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function d(e){var n=e.values,t=e.children;return(0,l.useMemo)((function(){var e=null!=n?n:p(t);return function(e){var n=(0,s.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function c(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function g(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,r=(0,u.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,o._X)(i),(0,l.useCallback)((function(e){if(i){var n=new URLSearchParams(r.location.search);n.set(i,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}}),[i,r])]}function k(e){var n,t,a,r,i=e.defaultValue,u=e.queryString,o=void 0!==u&&u,s=e.groupId,p=d(e),k=(0,l.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var l=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:i,tabValues:p})})),h=k[0],f=k[1],N=g({queryString:o,groupId:s}),y=N[0],b=N[1],v=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),t=(0,m.Nk)(n),a=t[0],r=t[1],[a,(0,l.useCallback)((function(e){n&&r.set(e)}),[n,r])]),x=v[0],_=v[1],T=function(){var e=null!=y?y:x;return c({value:e,tabValues:p})?e:null}();return(0,l.useLayoutEffect)((function(){T&&f(T)}),[T]),{selectedValue:h,selectValue:(0,l.useCallback)((function(e){if(!c({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);f(e),b(e),_(e)}),[b,_,p]),tabValues:p}}var h=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){var n=e.className,t=e.block,u=e.selectedValue,o=e.selectValue,s=e.tabValues,m=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=m.indexOf(n),a=s[t].value;a!==u&&(p(n),o(a))},c=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,l=m.indexOf(e.currentTarget)+1;t=null!=(a=m[l])?a:m[0];break;case"ArrowLeft":var r,i=m.indexOf(e.currentTarget)-1;t=null!=(r=m[i])?r:m[m.length-1]}null==(n=t)||n.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},s.map((function(e){var n=e.value,t=e.label,i=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===n?0:-1,"aria-selected":u===n,key:n,ref:function(e){return m.push(e)},onKeyDown:c,onClick:d},i,{className:(0,r.Z)("tabs__item",f.tabItem,null==i?void 0:i.className,{"tabs__item--active":u===n})}),null!=t?t:n)})))}function y(e){var n=e.lazy,t=e.children,a=e.selectedValue,r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=r.find((function(e){return e.props.value===a}));return i?(0,l.cloneElement)(i,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==a})})))}function b(e){var n=k(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},l.createElement(N,(0,a.Z)({},e,n)),l.createElement(y,(0,a.Z)({},e,n)))}function v(e){var n=(0,h.Z)();return l.createElement(b,(0,a.Z)({key:String(n)},e))}},75421:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>m,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=t(87462),l=t(63366),r=(t(67294),t(3905)),i=t(74866),u=t(85162),o=["components"],s={id:"migr-ansi-sql-null",title:"Migration guide: SQL compliant mode",sidebar_label:"SQL compliant mode"},m=void 0,p={unversionedId:"release-info/migr-ansi-sql-null",id:"release-info/migr-ansi-sql-null",title:"Migration guide: SQL compliant mode",description:"\x3c!--",source:"@site/docs/30.0.1/release-info/migr-ansi-sql-null.md",sourceDirName:"release-info",slug:"/release-info/migr-ansi-sql-null",permalink:"/docs/30.0.1/release-info/migr-ansi-sql-null",draft:!1,tags:[],version:"current",frontMatter:{id:"migr-ansi-sql-null",title:"Migration guide: SQL compliant mode",sidebar_label:"SQL compliant mode"},sidebar:"docs",previous:{title:"Subquery limit",permalink:"/docs/30.0.1/release-info/migr-subquery-limit"},next:{title:"MVDs to arrays",permalink:"/docs/30.0.1/release-info/migr-mvd-array"}},d={},c=[{value:"SQL compliant null handling",id:"sql-compliant-null-handling",level:2},{value:"Legacy null handling and two-value logic",id:"legacy-null-handling-and-two-value-logic",level:2},{value:"Migrate to SQL compliant mode",id:"migrate-to-sql-compliant-mode",level:2},{value:"Replace null values at ingestion time",id:"replace-null-values-at-ingestion-time",level:3},{value:"Coerce empty strings to null at ingestion time",id:"coerce-empty-strings-to-null-at-ingestion-time",level:3},{value:"Rewrite your queries to be SQL compliant",id:"rewrite-your-queries-to-be-sql-compliant",level:3},{value:"Learn more",id:"learn-more",level:2}],g={toc:c},k="wrapper";function h(e){var n=e.components,t=(0,l.Z)(e,o);return(0,r.kt)(k,(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In Apache Druid 28.0.0, the default ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/querying/sql-data-types#null-values"},"null handling")," mode changed to be compliant with the ANSI SQL standard.\nThis guide provides strategies for Druid operators who rely on legacy Druid null handling behavior in their applications to transition to SQL compliant mode.\nLegacy mode is planned for removal from Druid. "),(0,r.kt)("h2",{id:"sql-compliant-null-handling"},"SQL compliant null handling"),(0,r.kt)("p",null,"As of Druid 28.0.0, Druid writes segments in an ANSI SQL compatible null handling mode by default.\nThis means that Druid stores null values distinctly from empty strings for string dimensions and distinctly from 0 for numeric dimensions."),(0,r.kt)("p",null,"This can impact your application behavior because the ANSI SQL standard defines any comparison to null to be unknown.\nAccording to this three-valued logic, ",(0,r.kt)("inlineCode",{parentName:"p"},"x <> 'some value'")," only returns non-null values."),(0,r.kt)("p",null,"The default Druid configurations for 28.0.0 and later that enable ANSI SQL compatible null handling mode are the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"druid.generic.useDefaultValueForNull=false")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"druid.expressions.useStrictBooleans=true")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"druid.generic.useThreeValueLogicForNativeFilters=true"),"\xa0")),(0,r.kt)("p",null,"Follow the ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/tutorials/tutorial-sql-null"},"Null handling tutorial")," to learn how the default null handling works in Druid."),(0,r.kt)("h2",{id:"legacy-null-handling-and-two-value-logic"},"Legacy null handling and two-value logic"),(0,r.kt)("p",null,"Prior to Druid 28.0.0, Druid defaulted to a legacy mode which stored default values instead of nulls.\nIn legacy mode, Druid created segments with the following characteristics at ingestion time:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"String columns couldn't distinguish an empty string, '', from null.\nTherefore, Druid treated them both as interchangeable values."),(0,r.kt)("li",{parentName:"ul"},"Numeric columns couldn't represent null valued rows.\nTherefore Druid stored 0 instead of null. ")),(0,r.kt)("p",null,"The Druid configurations for the deprecated legacy mode were the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"druid.generic.useDefaultValueForNull=true")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"druid.expressions.useStrictBooleans=false")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"druid.generic.useThreeValueLogicForNativeFilters=true"))),(0,r.kt)("p",null,"These configurations are deprecated and scheduled for removal.\nAfter the configurations are removed, Druid will ignore them if they exist in your configuration files and use the default SQL compliant mode."),(0,r.kt)("h2",{id:"migrate-to-sql-compliant-mode"},"Migrate to SQL compliant mode"),(0,r.kt)("p",null,"If your business logic relies on the behavior of legacy mode, you have the following options to operate Druid in an ANSI SQL compatible null handling mode:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Modify incoming data to either ",(0,r.kt)("a",{parentName:"p",href:"#replace-null-values-at-ingestion-time"},"avoid nulls")," or ",(0,r.kt)("a",{parentName:"p",href:"#coerce-empty-strings-to-null-at-ingestion-time"},"avoid empty strings")," to achieve the same query behavior as legacy mode. This means modifying your ingestion SQL queries and ingestion specs to handle nulls or empty strings.\nFor example, replacing a null for a string column with an empty string or a 0 for a numeric column.\nHowever, it means that your existing queries should operate as if Druid were in legacy mode.\nIf you do not care about preserving null values, this is a good option for you.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Preserve null values and ",(0,r.kt)("a",{parentName:"p",href:"#rewrite-your-queries-to-be-sql-compliant"},"update all of your SQL queries to be ANSI SQL compliant"),".\nThis means you can preserve the incoming data with nulls intact.\nHowever, you must rewrite any affected client-side queries to be ANSI SQL compliant.\nIf you have a requirement to preserve null values, choose this option."))),(0,r.kt)("h3",{id:"replace-null-values-at-ingestion-time"},"Replace null values at ingestion time"),(0,r.kt)("p",null,"If you don't need to preserve null values within Druid, you can use a transform at ingestion time to replace nulls with other values."),(0,r.kt)("p",null,"Consider the following input data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"time":"2024-01-01T00:00:00.000Z","string_example":"my_string","number_example":99}\n{"time":"2024-01-02T00:00:00.000Z","string_example":"","number_example":0}\n{"time":"2024-01-03T00:00:00.000Z","string_example":null,"number_example":null}\n')),(0,r.kt)("p",null,"The following example illustrates how to use COALESCE and NVL at ingestion time to avoid null values in Druid:"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"0",label:"SQL-based batch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'REPLACE INTO "no_nulls_example" OVERWRITE ALL\nWITH "ext" AS (\n  SELECT *\n  FROM TABLE(\n    EXTERN(\n      \'{"type":"inline","data":"{\\"time\\":\\"2024-01-01T00:00:00.000Z\\",\\"string_example\\":\\"my_string\\",\\"number_example\\":99}\\n{\\"time\\":\\"2024-01-02T00:00:00.000Z\\",\\"string_example\\":\\"\\",\\"number_example\\":0}\\n{\\"time\\":\\"2024-01-03T00:00:00.000Z\\",\\"string_example\\":null,\\"number_example\\":null}"}\',\n      \'{"type":"json"}\'\n    )\n  ) EXTEND ("time" VARCHAR, "string_example" VARCHAR, "number_example" BIGINT)\n)\nSELECT\n  TIME_PARSE("time") AS "__time",\n  -- Replace any null string values with an empty string\n  COALESCE("string_example",\'\') AS string_example,\n  -- Replace any null numeric values with 0\n  NVL("number_example",0) AS number_example\nFROM "ext"\nPARTITIONED BY MONTH\n'))),(0,r.kt)(u.Z,{value:"1",label:"JSON-based batch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "index_parallel",\n  "spec": {\n    "ioConfig": {\n      "type": "index_parallel",\n      "inputSource": {\n        "type": "inline",\n        "data": "{\\"time\\":\\"2024-01-01T00:00:00.000Z\\",\\"string_example\\":\\"my_string\\",\\"number_example\\":99}\\n{\\"time\\":\\"2024-01-02T00:00:00.000Z\\",\\"string_example\\":\\"\\",\\"number_example\\":0}\\n{\\"time\\":\\"2024-01-03T00:00:00.000Z\\",\\"string_example\\":null,\\"number_example\\":null}"\n      },\n      "inputFormat": {\n        "type": "json"\n      }\n    },\n    "tuningConfig": {\n      "type": "index_parallel",\n      "partitionsSpec": {\n        "type": "dynamic"\n      }\n    },\n    "dataSchema": {\n      "dataSource": "inline_data_native",\n      "timestampSpec": {\n        "column": "time",\n        "format": "iso"\n      },\n      "dimensionsSpec": {\n        "dimensions": [\n          "string_example",\n          {\n            "type": "long",\n            "name": "number_example"\n          }\n        ]\n      },\n      "granularitySpec": {\n        "queryGranularity": "none",\n        "rollup": false,\n        "segmentGranularity": "MONTH"\n      },\n      "transformSpec": {\n        "transforms": [\n          {\n            "type": "expression",\n            "name": "string_example",\n            "expression": "COALESCE(\\"string_example\\",\'\')"\n          },\n          {\n            "type": "expression",\n            "name": "number_example",\n            "expression": "NVL(\\"number_example\\",0)"\n          }\n        ]\n      }\n    }\n  }\n}\n')))),(0,r.kt)("p",null,"Druid ingests the data with no null values as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"__time")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"string_examle")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"number_example")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2024-01-01T00:00:00.000Z")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"my_string")),(0,r.kt)("td",{parentName:"tr",align:null},"99")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2024-01-02T00:00:00.000Z")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"empty")),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2024-01-03T00:00:00.000Z")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"empty")),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("h3",{id:"coerce-empty-strings-to-null-at-ingestion-time"},"Coerce empty strings to null at ingestion time"),(0,r.kt)("p",null,"In legacy mode, Druid recognized empty strings as nulls for equality comparison.\nIf your queries rely on empty strings to represent nulls, you can coerce empty strings to null at ingestion time using NULLIF."),(0,r.kt)("p",null,"For example, consider the following sample input data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"time":"2024-01-01T00:00:00.000Z","string_example":"my_string"}\n{"time":"2024-01-02T00:00:00.000Z","string_example":""}\n{"time":"2024-01-03T00:00:00.000Z","string_example":null}\n')),(0,r.kt)("p",null,"In legacy mode, Druid wrote an empty string for the third record.\nTherefore the following query returned 2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT count(*)\nFROM "null_string"\nWHERE "string_example" IS NULL\n')),(0,r.kt)("p",null,"In SQL compliant mode, Druid differentiates between empty strings and nulls, so the same query would return 1.\nThe following example shows how to coerce empty strings into null to accommodate IS NULL comparisons:"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"0",label:"SQL-based batcn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'REPLACE INTO "null_string" OVERWRITE ALL\nWITH "ext" AS (\n  SELECT *\n  FROM TABLE(\n    EXTERN(\n      \'{"type":"inline","data":"{\\"time\\":\\"2024-01-01T00:00:00.000Z\\",\\"string_example\\":\\"my_string\\"}\\n{\\"time\\":\\"2024-01-02T00:00:00.000Z\\",\\"string_example\\":\\"\\"}\\n{\\"time\\":\\"2024-01-03T00:00:00.000Z\\",\\"string_example\\":null}"}\',\n      \'{"type":"json"}\'\n    )\n  ) EXTEND ("time" VARCHAR, "string_example" VARCHAR)\n)\nSELECT\n  TIME_PARSE("time") AS "__time",\n  NULLIF("string_example",\'\') AS "string_example"\nFROM "ext"\nPARTITIONED BY MONTH\n'))),(0,r.kt)(u.Z,{value:"1",label:"JSON-based batch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "index_parallel",\n  "spec": {\n    "ioConfig": {\n      "type": "index_parallel",\n      "inputSource": {\n        "type": "inline",\n        "data": "{\\"time\\":\\"2024-01-01T00:00:00.000Z\\",\\"string_example\\":\\"my_string\\"}\\n{\\"time\\":\\"2024-01-02T00:00:00.000Z\\",\\"string_example\\":\\"\\"}\\n{\\"time\\":\\"2024-01-03T00:00:00.000Z\\",\\"string_example\\":null}"\n      },\n      "inputFormat": {\n        "type": "json"\n      }\n    },\n    "tuningConfig": {\n      "type": "index_parallel",\n      "partitionsSpec": {\n        "type": "dynamic"\n      }\n    },\n    "dataSchema": {\n      "dataSource": "null_string",\n      "timestampSpec": {\n        "column": "time",\n        "format": "iso"\n      },\n      "transformSpec": {\n        "transforms": [\n          {\n            "type": "expression",\n            "expression": "case_searched((\\"string_example\\" == \'\'),null,\\"string_example\\")",\n            "name": "string_example"\n          }\n        ]\n      },\n      "dimensionsSpec": {\n        "dimensions": [\n          "string_example"\n        ]\n      },\n      "granularitySpec": {\n        "queryGranularity": "none",\n        "rollup": false,\n        "segmentGranularity": "month"\n      }\n    }\n  }\n}\n')))),(0,r.kt)("p",null,"Druid ingests the data with no empty strings as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"__time")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"string_examle")),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2024-01-01T00:00:00.000Z")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"my_string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2024-01-02T00:00:00.000Z")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2024-01-03T00:00:00.000Z")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"Therefore ",(0,r.kt)("inlineCode",{parentName:"p"},'SELECT count(*) FROM "null_string" WHERE "string_example" IS NULL')," returns 2."),(0,r.kt)("h3",{id:"rewrite-your-queries-to-be-sql-compliant"},"Rewrite your queries to be SQL compliant"),(0,r.kt)("p",null,"If you want to maintain null values in your data within Druid, you can use the following ANSI SQL compliant querying strategies to achieve the same results as legacy null handling:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Modify inequality queries to include null values.\nFor example, ",(0,r.kt)("inlineCode",{parentName:"li"},"x <> 'some value'")," becomes ",(0,r.kt)("inlineCode",{parentName:"li"},"(x <> 'some value' OR x IS NULL)"),"."),(0,r.kt)("li",{parentName:"ul"},"Use COALESCE or NVL to replace nulls with a value.\nFor example, ",(0,r.kt)("inlineCode",{parentName:"li"},"x + 1")," becomes ",(0,r.kt)("inlineCode",{parentName:"li"},"NVL(numeric_value, 0)+1"))),(0,r.kt)("p",null,"Consider the following Druid datasource ",(0,r.kt)("inlineCode",{parentName:"p"},"null_example"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"__time")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"string_examle")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"number_example")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2024-01-01T00:00:00.000Z")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"my_string")),(0,r.kt)("td",{parentName:"tr",align:null},"99")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2024-01-02T00:00:00.000Z")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"empty")),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2024-01-03T00:00:00.000Z")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"null")))),(0,r.kt)("p",null,"Druid excludes null strings from equality comparisons. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT COUNT(*) AS count_example\nFROM "null_example"\nWHERE "string_example"<> \'my_string\'\n')),(0,r.kt)("p",null,"Druid returns 1 because null is considered unknown: neither equal nor unequal to the value."),(0,r.kt)("p",null,"To count null values in the result, you can use an OR operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT COUNT(*) AS count_example\nFROM "null_example"\nWHERE ("string_example"<> \'my_string\') OR "string_example" IS NULL\n')),(0,r.kt)("p",null,"Druid returns 2.\nTo achieve the same result, you can use IS DISTINCT FROM for null-safe comparison:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT COUNT(*) as count_example\nFROM "null_example"\nWHERE "string_example" IS DISTINCT FROM \'my_string\'\n')),(0,r.kt)("p",null,"Similarly, arithmetic operators on null return null. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT "number_example" + 1 AS additon_example\nFROM "null_example"\n')),(0,r.kt)("p",null,"Druid returns the following because null + any value is null for the ANSI SQL standard:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"addition_example")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"null")))),(0,r.kt)("p",null,"Use NVL to avoid nulls with arithmetic. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT NVL("number_example",0) + 1 AS additon_example\nFROM "null_example"\n')),(0,r.kt)("p",null,"Druid returns the following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"addition_example")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"null")))),(0,r.kt)("h2",{id:"learn-more"},"Learn more"),(0,r.kt)("p",null,"See the following topics for more information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/30.0.1/tutorials/tutorial-sql-null"},"Null handling tutorial")," to learn how the default null handling works in Druid."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/30.0.1/querying/sql-data-types#null-values"},"Null values")," for a description of Druid's behavior with null values."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/30.0.1/design/segments#handling-null-values"},"Handling null values")," for details about how Druid stores null values.")))}h.isMDXComponent=!0}}]);