"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4673],{3905:(e,o,n)=>{n.d(o,{Zo:()=>p,kt:()=>m});var a=n(67294);function t(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function r(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?r(Object(n),!0).forEach((function(o){t(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function s(e,o){if(null==e)return{};var n,a,t=function(e,o){if(null==e)return{};var n,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],o.indexOf(n)>=0||(t[n]=e[n]);return t}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var d=a.createContext({}),l=function(e){var o=a.useContext(d),n=o;return e&&(n="function"==typeof e?e(o):i(i({},o),e)),n},p=function(e){var o=l(e.components);return a.createElement(d.Provider,{value:o},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},h=a.forwardRef((function(e,o){var n=e.components,t=e.mdxType,r=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),h=t,m=c["".concat(d,".").concat(h)]||c[h]||u[h]||r;return n?a.createElement(m,i(i({ref:o},p),{},{components:n})):a.createElement(m,i({ref:o},p))}));function m(e,o){var n=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var d in o)hasOwnProperty.call(o,d)&&(s[d]=o[d]);s.originalType=e,s[c]="string"==typeof e?e:t,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},27970:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(87462),t=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"other-hadoop",title:"Working with different versions of Apache Hadoop"},d=void 0,l={unversionedId:"operations/other-hadoop",id:"operations/other-hadoop",title:"Working with different versions of Apache Hadoop",description:"\x3c!--",source:"@site/docs/30.0.1/operations/other-hadoop.md",sourceDirName:"operations",slug:"/operations/other-hadoop",permalink:"/docs/30.0.1/operations/other-hadoop",draft:!1,tags:[],version:"current",frontMatter:{id:"other-hadoop",title:"Working with different versions of Apache Hadoop"},sidebar:"docs",previous:{title:"Migrate from firehose",permalink:"/docs/30.0.1/operations/migrate-from-firehose"},next:{title:"dump-segment tool",permalink:"/docs/30.0.1/operations/dump-segment"}},p={},c=[{value:"Tip #1: Place Hadoop XMLs on Druid classpath",id:"tip-1-place-hadoop-xmls-on-druid-classpath",level:2},{value:"Tip #2: Classloader modification on Hadoop (Map/Reduce jobs only)",id:"tip-2-classloader-modification-on-hadoop-mapreduce-jobs-only",level:2},{value:"Overriding specific classes",id:"overriding-specific-classes",level:3},{value:"Tip #3: Use specific versions of Hadoop libraries",id:"tip-3-use-specific-versions-of-hadoop-libraries",level:2},{value:"Preferred: Load using Druid&#39;s standard mechanism",id:"preferred-load-using-druids-standard-mechanism",level:3},{value:"Alternative: Append your Hadoop jars to the Druid classpath",id:"alternative-append-your-hadoop-jars-to-the-druid-classpath",level:3},{value:"Notes on specific Hadoop distributions",id:"notes-on-specific-hadoop-distributions",level:2},{value:"CDH",id:"cdh",level:3}],u={toc:c},h="wrapper";function m(e){var o=e.components,n=(0,t.Z)(e,i);return(0,r.kt)(h,(0,a.Z)({},u,n,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Apache Druid can interact with Hadoop in two ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/30.0.1/development/extensions-core/hdfs"},"Use HDFS for deep storage")," using the druid-hdfs-storage extension."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/30.0.1/ingestion/hadoop"},"Batch-load data from Hadoop")," using Map/Reduce jobs.")),(0,r.kt)("p",null,"These are not necessarily linked together; you can load data with Hadoop jobs into a non-HDFS deep storage (like S3),\nand you can use HDFS for deep storage even if you're loading data from streams rather than using Hadoop jobs."),(0,r.kt)("p",null,"For best results, use these tips when configuring Druid to interact with your favorite Hadoop distribution."),(0,r.kt)("h2",{id:"tip-1-place-hadoop-xmls-on-druid-classpath"},"Tip #1: Place Hadoop XMLs on Druid classpath"),(0,r.kt)("p",null,"Place your Hadoop configuration XMLs (core-site.xml, hdfs-site.xml, yarn-site.xml, mapred-site.xml) on the classpath\nof your Druid processes. You can do this by copying them into ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/druid/_common/core-site.xml"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"conf/druid/_common/hdfs-site.xml"),", and so on. This allows Druid to find your Hadoop cluster and properly submit jobs."),(0,r.kt)("h2",{id:"tip-2-classloader-modification-on-hadoop-mapreduce-jobs-only"},"Tip #2: Classloader modification on Hadoop (Map/Reduce jobs only)"),(0,r.kt)("p",null,"Druid uses a number of libraries that are also likely present on your Hadoop cluster, and if these libraries conflict,\nyour Map/Reduce jobs can fail. This problem can be avoided by enabling classloader isolation using the Hadoop job\nproperty ",(0,r.kt)("inlineCode",{parentName:"p"},"mapreduce.job.classloader = true"),". This instructs Hadoop to use a separate classloader for Druid dependencies\nand for Hadoop's own dependencies."),(0,r.kt)("p",null,"If your version of Hadoop does not support this functionality, you can also try setting the property\n",(0,r.kt)("inlineCode",{parentName:"p"},"mapreduce.job.user.classpath.first = true"),". This instructs Hadoop to prefer loading Druid's version of a library when\nthere is a conflict."),(0,r.kt)("p",null,"Generally, you should only set one of these parameters, not both."),(0,r.kt)("p",null,"These properties can be set in either one of the following ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using the task definition, e.g. add ",(0,r.kt)("inlineCode",{parentName:"li"},'"mapreduce.job.classloader": "true"')," to the ",(0,r.kt)("inlineCode",{parentName:"li"},"jobProperties")," of the ",(0,r.kt)("inlineCode",{parentName:"li"},"tuningConfig")," of your indexing task (see the ",(0,r.kt)("a",{parentName:"li",href:"/docs/30.0.1/ingestion/hadoop"},"Hadoop batch ingestion documentation"),")."),(0,r.kt)("li",{parentName:"ul"},"Using system properties, e.g. on the MiddleManager set ",(0,r.kt)("inlineCode",{parentName:"li"},"druid.indexer.runner.javaOpts=... -Dhadoop.mapreduce.job.classloader=true")," in ",(0,r.kt)("a",{parentName:"li",href:"/docs/30.0.1/configuration/#middlemanager-configuration"},"Middle Manager configuration"),".")),(0,r.kt)("h3",{id:"overriding-specific-classes"},"Overriding specific classes"),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"mapreduce.job.classloader = true"),", it is also possible to specifically define which classes should be loaded from the hadoop system classpath and which should be loaded from job-supplied JARs."),(0,r.kt)("p",null,"This is controlled by defining class inclusion/exclusion patterns in the ",(0,r.kt)("inlineCode",{parentName:"p"},"mapreduce.job.classloader.system.classes")," property in the ",(0,r.kt)("inlineCode",{parentName:"p"},"jobProperties")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"tuningConfig"),"."),(0,r.kt)("p",null,"For example, some community members have reported version incompatibility errors with the Validator class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Error: java.lang.ClassNotFoundException: javax.validation.Validator\n")),(0,r.kt)("p",null,"The following ",(0,r.kt)("inlineCode",{parentName:"p"},"jobProperties")," excludes ",(0,r.kt)("inlineCode",{parentName:"p"},"javax.validation.")," classes from being loaded from the system classpath, while including those from ",(0,r.kt)("inlineCode",{parentName:"p"},"java.,javax.,org.apache.commons.logging.,org.apache.log4j.,org.apache.hadoop."),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"jobProperties": {\n  "mapreduce.job.classloader": "true",\n  "mapreduce.job.classloader.system.classes": "-javax.validation.,java.,javax.,org.apache.commons.logging.,org.apache.log4j.,org.apache.hadoop."\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-mapreduce-client/hadoop-mapreduce-client-core/mapred-default.xml"},"mapred-default.xml")," documentation contains more information about this property."),(0,r.kt)("h2",{id:"tip-3-use-specific-versions-of-hadoop-libraries"},"Tip #3: Use specific versions of Hadoop libraries"),(0,r.kt)("p",null,"Druid loads Hadoop client libraries from two different locations. Each set of libraries is loaded in an isolated\nclassloader."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"HDFS deep storage uses jars from ",(0,r.kt)("inlineCode",{parentName:"li"},"extensions/druid-hdfs-storage/")," to read and write Druid data on HDFS."),(0,r.kt)("li",{parentName:"ol"},"Batch ingestion uses jars from ",(0,r.kt)("inlineCode",{parentName:"li"},"hadoop-dependencies/")," to submit Map/Reduce jobs (location customizable via the\n",(0,r.kt)("inlineCode",{parentName:"li"},"druid.extensions.hadoopDependenciesDir")," runtime property; see ",(0,r.kt)("a",{parentName:"li",href:"/docs/30.0.1/configuration/#extensions"},"Configuration"),").")),(0,r.kt)("p",null,"The default version of the Hadoop client bundled with Druid is ",(0,r.kt)("inlineCode",{parentName:"p"},"3.3.6"),". This works with\nmany Hadoop distributions (the version does not necessarily need to match), but if you run into issues, you can instead\nhave Druid load libraries that exactly match your distribution. To do this, either copy the jars from your Hadoop\ncluster, or use the ",(0,r.kt)("inlineCode",{parentName:"p"},"pull-deps")," tool to download the jars from a Maven repository."),(0,r.kt)("h3",{id:"preferred-load-using-druids-standard-mechanism"},"Preferred: Load using Druid's standard mechanism"),(0,r.kt)("p",null,"If you have issues with HDFS deep storage, you can switch your Hadoop client libraries by recompiling the\ndruid-hdfs-storage extension using an alternate version of the Hadoop client libraries. You can do this by editing\nthe main Druid pom.xml and rebuilding the distribution by running ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn package"),"."),(0,r.kt)("p",null,"If you have issues with Map/Reduce jobs, you can switch your Hadoop client libraries without rebuilding Druid. You can\ndo this by adding a new set of libraries to the ",(0,r.kt)("inlineCode",{parentName:"p"},"hadoop-dependencies/")," directory (or another directory specified by\ndruid.extensions.hadoopDependenciesDir) and then using ",(0,r.kt)("inlineCode",{parentName:"p"},"hadoopDependencyCoordinates")," in the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/ingestion/hadoop"},"Hadoop Index Task")," to specify the Hadoop dependencies you want Druid to load."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("p",null,"Suppose you specify ",(0,r.kt)("inlineCode",{parentName:"p"},"druid.extensions.hadoopDependenciesDir=/usr/local/druid_tarball/hadoop-dependencies"),", and you have downloaded\n",(0,r.kt)("inlineCode",{parentName:"p"},"hadoop-client")," 2.3.0 and 2.4.0, either by copying them from your Hadoop cluster or by using ",(0,r.kt)("inlineCode",{parentName:"p"},"pull-deps")," to download\nthe jars from a Maven repository. Then underneath ",(0,r.kt)("inlineCode",{parentName:"p"},"hadoop-dependencies"),", your jars should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hadoop-dependencies/\n\u2514\u2500\u2500 hadoop-client\n    \u251c\u2500\u2500 2.3.0\n    \u2502\xa0\xa0 \u251c\u2500\u2500 activation-1.1.jar\n    \u2502\xa0\xa0 \u251c\u2500\u2500 avro-1.7.4.jar\n    \u2502\xa0\xa0 \u251c\u2500\u2500 commons-beanutils-1.7.0.jar\n    \u2502\xa0\xa0 \u251c\u2500\u2500 commons-beanutils-core-1.8.0.jar\n    \u2502\xa0\xa0 \u251c\u2500\u2500 commons-cli-1.2.jar\n    \u2502\xa0\xa0 \u251c\u2500\u2500 commons-codec-1.4.jar\n    ..... lots of jars\n    \u2514\u2500\u2500 2.4.0\n        \u251c\u2500\u2500 activation-1.1.jar\n        \u251c\u2500\u2500 avro-1.7.4.jar\n        \u251c\u2500\u2500 commons-beanutils-1.7.0.jar\n        \u251c\u2500\u2500 commons-beanutils-core-1.8.0.jar\n        \u251c\u2500\u2500 commons-cli-1.2.jar\n        \u251c\u2500\u2500 commons-codec-1.4.jar\n    ..... lots of jars\n")),(0,r.kt)("p",null,"As you can see, under ",(0,r.kt)("inlineCode",{parentName:"p"},"hadoop-client"),", there are two sub-directories, each denotes a version of ",(0,r.kt)("inlineCode",{parentName:"p"},"hadoop-client"),"."),(0,r.kt)("p",null,"Next, use ",(0,r.kt)("inlineCode",{parentName:"p"},"hadoopDependencyCoordinates")," in ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/ingestion/hadoop"},"Hadoop Index Task")," to specify the Hadoop dependencies you want Druid to load."),(0,r.kt)("p",null,"For example, in your Hadoop Index Task spec file, you can write:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'"hadoopDependencyCoordinates": ["org.apache.hadoop:hadoop-client:2.4.0"]')),(0,r.kt)("p",null,"This instructs Druid to load hadoop-client 2.4.0 when processing the task. What happens behind the scene is that Druid first looks for a folder\ncalled ",(0,r.kt)("inlineCode",{parentName:"p"},"hadoop-client")," underneath ",(0,r.kt)("inlineCode",{parentName:"p"},"druid.extensions.hadoopDependenciesDir"),", then looks for a folder called ",(0,r.kt)("inlineCode",{parentName:"p"},"2.4.0"),"\nunderneath ",(0,r.kt)("inlineCode",{parentName:"p"},"hadoop-client"),", and upon successfully locating these folders, hadoop-client 2.4.0 is loaded."),(0,r.kt)("h3",{id:"alternative-append-your-hadoop-jars-to-the-druid-classpath"},"Alternative: Append your Hadoop jars to the Druid classpath"),(0,r.kt)("p",null,"You can also load Hadoop client libraries in Druid's main classloader, rather than an isolated classloader. This\nmechanism is relatively easy to reason about, but it also means that you have to ensure that all dependency jars on the\nclasspath are compatible. That is, Druid makes no provisions while using this method to maintain class loader isolation\nso you must make sure that the jars on your classpath are mutually compatible."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Set ",(0,r.kt)("inlineCode",{parentName:"li"},"druid.indexer.task.defaultHadoopCoordinates=[]"),". By setting this to an empty list, Druid will not load any other Hadoop dependencies except the ones specified in the classpath."),(0,r.kt)("li",{parentName:"ol"},"Append your Hadoop jars to Druid's classpath. Druid will load them into the system.")),(0,r.kt)("h2",{id:"notes-on-specific-hadoop-distributions"},"Notes on specific Hadoop distributions"),(0,r.kt)("p",null,"If the tips above do not solve any issues you are having with HDFS deep storage or Hadoop batch indexing, you may\nhave luck with one of the following suggestions contributed by the Druid community."),(0,r.kt)("h3",{id:"cdh"},"CDH"),(0,r.kt)("p",null,"Members of the community have reported dependency conflicts between the version of Jackson used in CDH and Druid when running a Mapreduce job like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"java.lang.VerifyError: class com.fasterxml.jackson.datatype.guava.deser.HostAndPortDeserializer overrides final method deserialize.(Lcom/fasterxml/jackson/core/JsonParser;Lcom/fasterxml/jackson/databind/DeserializationContext;)Ljava/lang/Object;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Preferred workaround")),(0,r.kt)("p",null,'First, try the tip under "Classloader modification on Hadoop" above. More recent versions of CDH have been reported to\nwork with the classloader isolation option (',(0,r.kt)("inlineCode",{parentName:"p"},"mapreduce.job.classloader = true"),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Alternate workaround - 1")),(0,r.kt)("p",null,"You can try editing Druid's pom.xml dependencies to match the version of Jackson in your Hadoop version and recompile Druid."),(0,r.kt)("p",null,"For more about building Druid, please see ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/development/build"},"Building Druid"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Alternate workaround - 2")),(0,r.kt)("p",null,"Another workaround solution is to build a custom fat jar of Druid using ",(0,r.kt)("a",{parentName:"p",href:"http://www.scala-sbt.org/"},"sbt"),", which manually excludes all the conflicting Jackson dependencies, and then put this fat jar in the classpath of the command that starts Overlord indexing service. To do this, please follow the following steps."),(0,r.kt)("p",null,"(1) Download and install sbt."),(0,r.kt)("p",null,"(2) Make a new directory named 'druid_build'."),(0,r.kt)("p",null,"(3) Cd to 'druid_build' and create the build.sbt file with the content ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/operations/use_sbt_to_build_fat_jar"},"here"),"."),(0,r.kt)("p",null,"You can always add more building targets or remove the ones you don't need."),(0,r.kt)("p",null,"(4) In the same directory create a new directory named 'project'."),(0,r.kt)("p",null,"(5) Put the druid source code into 'druid_build/project'."),(0,r.kt)("p",null,"(6) Create a file 'druid_build/project/assembly.sbt' with content as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'addSbtPlugin("com.eed3si9n" % "sbt-assembly" % "0.13.0")\n')),(0,r.kt)("p",null,"(7) In the 'druid_build' directory, run 'sbt assembly'."),(0,r.kt)("p",null,"(8) In the 'druid_build/target/scala-2.10' folder, you will find the fat jar you just build."),(0,r.kt)("p",null,"(9) Make sure the jars you've uploaded has been completely removed. The HDFS directory is by default '/tmp/druid-indexing/classpath'."),(0,r.kt)("p",null,"(10) Include the fat jar in the classpath when you start the indexing service. Make sure you've removed 'lib/*' from your classpath because now the fat jar includes all you need."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Alternate workaround - 3")),(0,r.kt)("p",null,"If sbt is not your choice, you can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"maven-shade-plugin")," to make a fat jar: relocation all Jackson packages will resolve it too. In this way, druid will not be affected by Jackson library embedded in hadoop. Please follow the steps below:"),(0,r.kt)("p",null,"(1) Add all extensions you needed to ",(0,r.kt)("inlineCode",{parentName:"p"},"services/pom.xml")," like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n     <groupId>org.apache.druid.extensions</groupId>\n     <artifactId>druid-avro-extensions</artifactId>\n     <version>${project.parent.version}</version>\n </dependency>\n\n <dependency>\n     <groupId>org.apache.druid.extensions</groupId>\n     <artifactId>druid-parquet-extensions</artifactId>\n     <version>${project.parent.version}</version>\n </dependency>\n\n <dependency>\n     <groupId>org.apache.druid.extensions</groupId>\n     <artifactId>druid-hdfs-storage</artifactId>\n     <version>${project.parent.version}</version>\n </dependency>\n\n <dependency>\n     <groupId>org.apache.druid.extensions</groupId>\n     <artifactId>mysql-metadata-storage</artifactId>\n     <version>${project.parent.version}</version>\n </dependency>\n")),(0,r.kt)("p",null,"(2) Shade Jackson packages and assemble a fat jar."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<plugin>\n     <groupId>org.apache.maven.plugins</groupId>\n     <artifactId>maven-shade-plugin</artifactId>\n     <executions>\n         <execution>\n             <phase>package</phase>\n             <goals>\n                 <goal>shade</goal>\n             </goals>\n             <configuration>\n                 <outputFile>\n                     ${project.build.directory}/${project.artifactId}-${project.version}-selfcontained.jar\n                 </outputFile>\n                 <relocations>\n                     <relocation>\n                         <pattern>com.fasterxml.jackson</pattern>\n                         <shadedPattern>shade.com.fasterxml.jackson</shadedPattern>\n                     </relocation>\n                 </relocations>\n                 <artifactSet>\n                     <includes>\n                         <include>*:*</include>\n                     </includes>\n                 </artifactSet>\n                 <filters>\n                     <filter>\n                         <artifact>*:*</artifact>\n                         <excludes>\n                             <exclude>META-INF/*.SF</exclude>\n                             <exclude>META-INF/*.DSA</exclude>\n                             <exclude>META-INF/*.RSA</exclude>\n                         </excludes>\n                     </filter>\n                 </filters>\n                 <transformers>\n                     <transformer implementation="org.apache.maven.plugins.shade.resource.ServicesResourceTransformer"/>\n                 </transformers>\n             </configuration>\n         </execution>\n     </executions>\n </plugin>\n')),(0,r.kt)("p",null,"Copy out ",(0,r.kt)("inlineCode",{parentName:"p"},"services/target/xxxxx-selfcontained.jar")," after ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn install")," in project root for further usage."),(0,r.kt)("p",null,"(3) run hadoop indexer (post an indexing task is not possible now) as below. ",(0,r.kt)("inlineCode",{parentName:"p"},"lib")," is not needed anymore. As hadoop indexer is a standalone tool, you don't have to replace the jars of your running services:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"java -Xmx32m \\\n  -Dfile.encoding=UTF-8 -Duser.timezone=UTC \\\n  -classpath config/hadoop:config/overlord:config/_common:$SELF_CONTAINED_JAR:$HADOOP_DISTRIBUTION/etc/hadoop \\\n  -Djava.security.krb5.conf=$KRB5 \\\n  org.apache.druid.cli.Main index hadoop \\\n  $config_path\n")))}m.isMDXComponent=!0}}]);