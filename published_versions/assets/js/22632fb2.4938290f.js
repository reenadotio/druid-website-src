"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6354],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=i(n),m=r,d=u["".concat(l,".").concat(m)]||u[m]||g[m]||o;return n?a.createElement(d,s(s({ref:t},c),{},{components:n})):a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,s[1]=p;for(var i=2;i<o;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96886:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>i,toc:()=>u});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),s=["components"],p={id:"test-stats",title:"Test Stats Aggregators"},l=void 0,i={unversionedId:"development/extensions-core/test-stats",id:"development/extensions-core/test-stats",title:"Test Stats Aggregators",description:"\x3c!--",source:"@site/docs/30.0.1/development/extensions-core/test-stats.md",sourceDirName:"development/extensions-core",slug:"/development/extensions-core/test-stats",permalink:"/docs/30.0.1/development/extensions-core/test-stats",draft:!1,tags:[],version:"current",frontMatter:{id:"test-stats",title:"Test Stats Aggregators"}},c={},u=[{value:"Z-Score for two sample ztests post aggregator",id:"z-score-for-two-sample-ztests-post-aggregator",level:2},{value:"zscore2sample post aggregator",id:"zscore2sample-post-aggregator",level:3},{value:"pvalue2tailedZtest post aggregator",id:"pvalue2tailedztest-post-aggregator",level:3},{value:"Example Usage",id:"example-usage",level:2}],g={toc:u},m="wrapper";function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)(m,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This Apache Druid extension incorporates test statistics related aggregators, including z-score and p-value. Please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://www.paypal-engineering.com/2017/06/29/democratizing-experimentation-data-for-product-innovations/"},"https://www.paypal-engineering.com/2017/06/29/democratizing-experimentation-data-for-product-innovations/")," for math background and details."),(0,o.kt)("p",null,"Make sure to include ",(0,o.kt)("inlineCode",{parentName:"p"},"druid-stats")," extension in order to use these aggregators."),(0,o.kt)("h2",{id:"z-score-for-two-sample-ztests-post-aggregator"},"Z-Score for two sample ztests post aggregator"),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://www.isixsigma.com/tools-templates/hypothesis-testing/making-sense-two-proportions-test/"},"https://www.isixsigma.com/tools-templates/hypothesis-testing/making-sense-two-proportions-test/")," and ",(0,o.kt)("a",{parentName:"p",href:"http://www.ucs.louisiana.edu/~jcb0773/Berry_statbook/Berry_statbook_chpt6.pdf"},"http://www.ucs.louisiana.edu/~jcb0773/Berry_statbook/Berry_statbook_chpt6.pdf")," for more details."),(0,o.kt)("p",null,"z = (p1\xa0- p2) / S.E.  (assuming null hypothesis is true)"),(0,o.kt)("p",null,"Please see below for p1 and p2.\nPlease note S.E. stands for standard error where"),(0,o.kt)("p",null,"S.E. = sqrt{ p1 ",(0,o.kt)("em",{parentName:"p"}," ( 1 - p1 )/n1 + p2 ")," (1 - p2)/n2) }"),(0,o.kt)("p",null,"(p1 \u2013 p2) is the observed difference between two sample proportions."),(0,o.kt)("h3",{id:"zscore2sample-post-aggregator"},"zscore2sample post aggregator"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"zscore2sample")),": calculate the z-score using two-sample z-test while converting binary variables (",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"e.g."))," success or not) to continuous variables (",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"e.g."))," conversion rate).")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "zscore2sample",\n  "name": "<output_name>",\n  "successCount1": <post_aggregator> success count of sample 1,\n  "sample1Size": <post_aggregaror> sample 1 size,\n  "successCount2": <post_aggregator> success count of sample 2,\n  "sample2Size" : <post_aggregator> sample 2 size\n}\n')),(0,o.kt)("p",null,"Please note the post aggregator will be converting binary variables to continuous variables for two population proportions.  Specifically"),(0,o.kt)("p",null,"p1 = (successCount1) / (sample size 1)"),(0,o.kt)("p",null,"p2 = (successCount2) / (sample size 2)"),(0,o.kt)("h3",{id:"pvalue2tailedztest-post-aggregator"},"pvalue2tailedZtest post aggregator"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"pvalue2tailedZtest")),": calculate p-value of two-sided z-test from zscore",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"pvalue2tailedZtest(zscore)"))," - the input is a z-score which can be calculated using the zscore2sample post aggregator")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "pvalue2tailedZtest",\n  "name": "<output_name>",\n  "zScore": <zscore post_aggregator>\n}\n')),(0,o.kt)("h2",{id:"example-usage"},"Example Usage"),(0,o.kt)("p",null,"In this example, we use zscore2sample post aggregator to calculate z-score, and then feed the z-score to pvalue2tailedZtest post aggregator to calculate p-value."),(0,o.kt)("p",null,"A JSON query example can be as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n    "postAggregations" : {\n    "type"   : "pvalue2tailedZtest",\n    "name"   : "pvalue",\n    "zScore" :\n    {\n     "type"   : "zscore2sample",\n     "name"   : "zscore",\n     "successCount1" :\n       { "type"   : "constant",\n         "name"   : "successCountFromPopulation1Sample",\n         "value"  : 300\n       },\n     "sample1Size" :\n       { "type"   : "constant",\n         "name"   : "sampleSizeOfPopulation1",\n         "value"  : 500\n       },\n     "successCount2":\n       { "type"   : "constant",\n         "name"   : "successCountFromPopulation2Sample",\n         "value"  : 450\n       },\n     "sample2Size" :\n       { "type"   : "constant",\n         "name"   : "sampleSizeOfPopulation2",\n         "value"  : 600\n       }\n     }\n    }\n}\n\n')))}d.isMDXComponent=!0}}]);