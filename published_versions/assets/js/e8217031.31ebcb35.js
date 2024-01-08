"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3948],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>g});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,g=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return t?n.createElement(g,o(o({ref:r},u),{},{components:t})):n.createElement(g,o({ref:r},u))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},96148:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],s={id:"sorting-orders",title:"String comparators"},l=void 0,c={unversionedId:"querying/sorting-orders",id:"querying/sorting-orders",title:"String comparators",description:"\x3c!--",source:"@site/docs/28.0.1/querying/sorting-orders.md",sourceDirName:"querying",slug:"/querying/sorting-orders",permalink:"/docs/28.0.1/querying/sorting-orders",draft:!1,tags:[],version:"current",frontMatter:{id:"sorting-orders",title:"String comparators"},sidebar:"docs",previous:{title:"Sorting (topN)",permalink:"/docs/28.0.1/querying/topnmetricspec"},next:{title:"Virtual columns",permalink:"/docs/28.0.1/querying/virtual-columns"}},u={},p=[{value:"Lexicographic",id:"lexicographic",level:2},{value:"Alphanumeric",id:"alphanumeric",level:2},{value:"Numeric",id:"numeric",level:2},{value:"Strlen",id:"strlen",level:2},{value:"Version",id:"version",level:2}],m={toc:p},d="wrapper";function g(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)(d,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," Apache Druid supports two query languages: ",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.1/querying/sql"},"Druid SQL")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.1/querying/"},"native queries"),".\nThis document describes the native\nlanguage. For information about functions available in SQL, refer to the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.1/querying/sql-scalar"},"SQL documentation"),".")),(0,i.kt)("p",null,"These sorting orders are used by the ",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.1/querying/topnmetricspec"},"TopNMetricSpec"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.1/querying/searchquery"},"SearchQuery"),", GroupByQuery's ",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.1/querying/limitspec"},"LimitSpec"),", and ",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.1/querying/filters#bound-filter"},"BoundFilter"),"."),(0,i.kt)("h2",{id:"lexicographic"},"Lexicographic"),(0,i.kt)("p",null,"Sorts values by converting Strings to their UTF-8 byte array representations and comparing lexicographically, byte-by-byte."),(0,i.kt)("h2",{id:"alphanumeric"},"Alphanumeric"),(0,i.kt)("p",null,'Suitable for strings with both numeric and non-numeric content, e.g.: "file12 sorts after file2"'),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/amjjd/java-alphanum"},"https://github.com/amjjd/java-alphanum")," for more details on how this ordering sorts values."),(0,i.kt)("p",null,"This ordering is not suitable for numbers with decimal points or negative numbers."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'For example, "1.3" precedes "1.15" in this ordering because "15" has more significant digits than "3".'),(0,i.kt)("li",{parentName:"ul"},'Negative numbers are sorted after positive numbers (because numeric characters precede the "-" in the negative numbers).')),(0,i.kt)("h2",{id:"numeric"},"Numeric"),(0,i.kt)("p",null,"Sorts values as numbers, supports integers and floating point values. Negative values are supported."),(0,i.kt)("p",null,"This sorting order will try to parse all string values as numbers. Unparseable values are treated as nulls, and nulls precede numbers."),(0,i.kt)("p",null,'When comparing two unparseable values (e.g., "hello" and "world"), this ordering will sort by comparing the unparsed strings lexicographically.'),(0,i.kt)("h2",{id:"strlen"},"Strlen"),(0,i.kt)("p",null,"Sorts values by their string lengths. When there is a tie, this comparator falls back to using the String compareTo method."),(0,i.kt)("h2",{id:"version"},"Version"),(0,i.kt)("p",null,'Sorts values as versions, e.g.: "10.0 sorts after 9.0", "1.0.0-SNAPSHOT sorts after 1.0.0".'),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://maven.apache.org/ref/3.6.0/maven-artifact/apidocs/org/apache/maven/artifact/versioning/ComparableVersion.html"},"https://maven.apache.org/ref/3.6.0/maven-artifact/apidocs/org/apache/maven/artifact/versioning/ComparableVersion.html")," for more details on how this ordering sorts values."))}g.isMDXComponent=!0}}]);