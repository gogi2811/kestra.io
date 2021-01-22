(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{658:function(t,a,s){"use strict";s.r(a);var e=s(9),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",[t._v("\n     FileTransform\n")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.task.scripts.nashorn.FileTransform"')]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("Transform ion format file from kestra with a nashorn (javascript) script.")])]),t._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file_transform"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.task.scripts.nashorn.FileTransform"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("outputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" out\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" map\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n  var Counter = Java.type('org.kestra.core.models.executions.metrics.Counter');\n  var File = Java.type('java.io.File');\n  var FileOutputStream = Java.type('java.io.FileOutputStream');")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("logger.info('executionId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" runContext.render('"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" execution.id "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("'));\n  runContext.metric(Counter.of('total'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("666")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'bla'));\n  \n  map = "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("'test'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'here'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v('\n  var tempFile = File.createTempFile("nashorn_"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \".out\")\n  var output = new FileOutputStream(tempFile)\n  output.write('555\\n666\\n'.getBytes())\n\n  out = runContext.putTempFile(tempFile)\n")])])]),s("h2",{attrs:{id:"inputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),s("h3",{attrs:{id:"from"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[t._v("#")]),t._v(" "),s("code",[t._v("from")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ✔️")])]),t._v(" "),s("blockquote",[s("p",[t._v("Source file URI")])]),t._v(" "),s("p",[t._v("The file must an ion file generated by kestra")]),t._v(" "),s("h3",{attrs:{id:"script"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#script"}},[t._v("#")]),t._v(" "),s("code",[t._v("script")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("A full script")])]),t._v(" "),s("h2",{attrs:{id:"outputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),s("h3",{attrs:{id:"uri"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uri"}},[t._v("#")]),t._v(" "),s("code",[t._v("uri")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("object")])])]),t._v(" "),s("blockquote",[s("p",[t._v("URI of a temporary result file")])]),t._v(" "),s("p",[t._v("The file will be serialized as ion file.")])])}),[],!1,null,null,null);a.default=n.exports}}]);