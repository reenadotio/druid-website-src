"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[464],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),c=s(t),d=r,g=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var m={};for(var l in n)hasOwnProperty.call(n,l)&&(m[l]=n[l]);m.originalType=e,m[c]="string"==typeof e?e:r,o[1]=m;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},69718:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>m,metadata:()=>s,toc:()=>c});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],m={id:"time-min-max",title:"Timestamp Min/Max aggregators"},l=void 0,s={unversionedId:"development/extensions-contrib/time-min-max",id:"development/extensions-contrib/time-min-max",title:"Timestamp Min/Max aggregators",description:"\x3c!--",source:"@site/docs/30.0.1/development/extensions-contrib/time-min-max.md",sourceDirName:"development/extensions-contrib",slug:"/development/extensions-contrib/time-min-max",permalink:"/docs/30.0.1/development/extensions-contrib/time-min-max",draft:!1,tags:[],version:"current",frontMatter:{id:"time-min-max",title:"Timestamp Min/Max aggregators"}},p={},c=[],u={toc:c},d="wrapper";function g(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)(d,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To use this Apache Druid extension, ",(0,i.kt)("a",{parentName:"p",href:"/docs/30.0.1/configuration/extensions#loading-extensions"},"include")," ",(0,i.kt)("inlineCode",{parentName:"p"},"druid-time-min-max")," in the extensions load list."),(0,i.kt)("p",null,"These aggregators enable more precise calculation of min and max time of given events than ",(0,i.kt)("inlineCode",{parentName:"p"},"__time"),' column whose granularity is sparse, the same as query granularity.\nTo use this feature, a "timeMin" or "timeMax" aggregator must be included at indexing time.\nThey can apply to any columns that can be converted to timestamp, which include Long, DateTime, Timestamp, and String types.'),(0,i.kt)("p",null,"For example, when a data set consists of timestamp, dimension, and metric value like followings."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"2015-07-28T01:00:00.000Z  A  1\n2015-07-28T02:00:00.000Z  A  1\n2015-07-28T03:00:00.000Z  A  1\n2015-07-28T04:00:00.000Z  B  1\n2015-07-28T05:00:00.000Z  A  1\n2015-07-28T06:00:00.000Z  B  1\n2015-07-29T01:00:00.000Z  C  1\n2015-07-29T02:00:00.000Z  C  1\n2015-07-29T03:00:00.000Z  A  1\n2015-07-29T04:00:00.000Z  A  1\n")),(0,i.kt)("p",null,"At ingestion time, timeMin and timeMax aggregator can be included as other aggregators."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "timeMin",\n    "name": "tmin",\n    "fieldName": "<field_name, typically column specified in timestamp spec>"\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "timeMax",\n    "name": "tmax",\n    "fieldName": "<field_name, typically column specified in timestamp spec>"\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"name")," is output name of aggregator and can be any string. ",(0,i.kt)("inlineCode",{parentName:"p"},"fieldName")," is typically column specified in timestamp spec but can be any column that can be converted to timestamp."),(0,i.kt)("p",null,'To query for results, the same aggregators "timeMin" and "timeMax" is used.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "queryType": "groupBy",\n  "dataSource": "timeMinMax",\n  "granularity": "DAY",\n  "dimensions": ["product"],\n  "aggregations": [\n    {\n      "type": "count",\n      "name": "count"\n    },\n    {\n      "type": "timeMin",\n      "name": "<output_name of timeMin>",\n      "fieldName": "tmin"\n    },\n    {\n      "type": "timeMax",\n      "name": "<output_name of timeMax>",\n      "fieldName": "tmax"\n    }\n  ],\n  "intervals": [\n    "2010-01-01T00:00:00.000Z/2020-01-01T00:00:00.000Z"\n  ]\n}\n')),(0,i.kt)("p",null,"Then, result has min and max of timestamp, which is finer than query granularity."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"2015-07-28T00:00:00.000Z A 4 2015-07-28T01:00:00.000Z 2015-07-28T05:00:00.000Z\n2015-07-28T00:00:00.000Z B 2 2015-07-28T04:00:00.000Z 2015-07-28T06:00:00.000Z\n2015-07-29T00:00:00.000Z A 2 2015-07-29T03:00:00.000Z 2015-07-29T04:00:00.000Z\n2015-07-29T00:00:00.000Z C 2 2015-07-29T01:00:00.000Z 2015-07-29T02:00:00.000Z\n")))}g.isMDXComponent=!0}}]);