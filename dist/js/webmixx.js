(self.webpackChunkwebmixx=self.webpackChunkwebmixx||[]).push([[979],{639:(e,t,a)=>{"use strict";var r=a(669),i=a.n(r),n=a(538),s=a(968),p=a.n(s);const l={namespaced:!0,state:function(){return{page_templates:[],page_template:{page_attribute_templates:[]}}},actions:{index:function(e){var t=e.commit;return new Promise((function(e,a){i().get("/webmixx/api/page_templates").then((function(a){t("load",a.data.data),e(a.data.data)}))}))}},mutations:{load:function(e,t){e.page_templates=t},set:function(e,t){e.page_template=t}},getters:{page_templates:function(e){return e.page_templates},page_template:function(e){return e.page_template}}},o={namespaced:!0,state:function(){return{pages:[],page:{page_template_id:null,page_attributes:[]}}},actions:{show:function(e,t){var a=e.commit;return new Promise((function(e,r){i().get("/webmixx/api/page/"+t.id).then((function(t){a("set",t.data.data),e(t.data.data)}))}))}},mutations:{set:function(e,t){e.page=t}},getters:{page:function(e){return e.page}}};n.default.use(p());const u=new(p().Store)({modules:{page_templates:l,pages:o}});var c=a(272),d=a.n(c),m=a(486),g=a.n(m),b=a(564),f=a(980);function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(Object(a),!0).forEach((function(t){v(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function v(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const y={name:"pageAttributeTemplate",components:{draggable:a.n(f)()},beforeMount:function(){0===this.ownedPageAttributes.length&&this.addPageAttribute()},props:{pageAttributeTemplate:{required:!0,type:Object},pageAttribute:{required:!1,type:Object,default:function(){return{id:null,page_attribute_template_id:this.pageAttributeTemplate.id}}},baseName:{required:!1,type:String,default:"attributes"}},methods:{addPageAttribute:function(){var e=0;this.page.page_attributes.length>0&&(e=g().maxBy(this.page.page_attributes,"id").id),this.page.page_attributes.push({id:e+1,page_attribute_template_id:this.pageAttributeTemplate.id,page_attribute_id:this.pageAttribute.id,order:this.ownedPageAttributes.length})}},computed:h(h(h({},(0,b.Se)("pages",["page"])),(0,b.Se)("page_templates",["page_template"])),{},{elementId:function(){return"attributeTemplate"},ownedPageAttributes:{get:function(){return g().sortBy(g().filter(this.page.page_attributes,{page_attribute_template_id:this.pageAttributeTemplate.id,page_attribute_id:this.pageAttribute.id}),"order")},set:function(e){var t=this;g().each(e,(function(e,a){void 0!==e&&(g().find(t.page.page_attributes,{id:e.id}).order=a)}))}}})};var O=a(900);const P=(0,O.Z)(y,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:{repeatable:e.pageAttributeTemplate.repeatable},attrs:{id:"attributeTemplate"+e.pageAttributeTemplate.id}},[e.pageAttributeTemplate.repeatable?a("draggable",{model:{value:e.ownedPageAttributes,callback:function(t){e.ownedPageAttributes=t},expression:"ownedPageAttributes"}},e._l(e.ownedPageAttributes,(function(t){return a("page-attribute",{key:t.id,attrs:{"page-attribute":t,"page-attribute-template":e.pageAttributeTemplate,"base-name":e.baseName}})})),1):e._l(e.ownedPageAttributes,(function(t){return a("page-attribute",{key:t.id,attrs:{"page-attribute":t,"page-attribute-template":e.pageAttributeTemplate,"base-name":e.baseName}})})),e._v(" "),e.pageAttributeTemplate.repeatable?a("div",{staticClass:"form-group text-right"},[a("span",{staticClass:"btn btn-sm btn-outline-success",on:{click:e.addPageAttribute}},[a("i",{staticClass:"fas fa-plus"}),e._v(" "+e._s(e.pageAttributeTemplate.name)+"\n        ")])]):e._e()],2)}),[],!1,null,"252a5d13",null).exports;function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(Object(a),!0).forEach((function(t){x(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function x(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const T={name:"pageAttribute",props:{pageAttributeTemplate:{required:!0,type:Object},pageAttribute:{required:!1,type:Object,default:function(){return{id:null,page_attribute_template_id:this.pageAttributeTemplate.id}}},baseName:{required:!0,type:String}},methods:{removePageAttribute:function(){var e=this.page.page_attributes.indexOf(this.pageAttribute);this.page.page_attributes.splice(e,1)}},computed:w(w(w({},(0,b.Se)("pages",["page"])),(0,b.Se)("page_templates",["page_template"])),{},{hasChildPageAttributeTemplates:function(){return"compound"===this.pageAttributeTemplate.field_type},childPageAttributeTemplates:function(){return g().filter(this.page_template.page_attribute_templates,{page_attribute_template_id:this.pageAttributeTemplate.id})},fieldName:function(){return this.pageAttributeTemplate.repeatable?this.baseName+"["+this.pageAttributeTemplate.id+"][U"+this._uid+"]":this.baseName+"["+this.pageAttributeTemplate.id+"]"},fieldTypeComponent:function(){return"type"+g().replace(g().startCase(this.pageAttributeTemplate.field_type)," ","")}})};var j=a(379),C=a.n(j),k=a(607),S={insert:"head",singleton:!1};C()(k.Z,S);k.Z.locals;const q=(0,O.Z)(T,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:"row field-"+e.pageAttributeTemplate.field_type,attrs:{"data-bound-by":"attributeTemplate"+e.pageAttributeTemplate.id}},[a("div",{staticClass:"col"},[e._l(e.childPageAttributeTemplates,(function(t){return e.childPageAttributeTemplates.length>0?a("page-attribute-template",{key:t.id,attrs:{"page-attribute-template":t,"page-attribute":e.pageAttribute,"base-name":e.fieldName}}):e._e()})),e._v(" "),0===e.childPageAttributeTemplates.length?a(e.fieldTypeComponent,{tag:"component",attrs:{name:e.fieldName,label:e.pageAttributeTemplate.name,value:e.pageAttribute.value}}):e._e()],2),e._v(" "),e.pageAttributeTemplate.repeatable?a("div",{staticClass:"col-auto text-right"},[e._m(0),e._v(" "),a("span",{staticClass:"btn btn-sm btn-outline-danger",on:{click:e.removePageAttribute}},[a("i",{staticClass:"fas fa-trash-alt"})])]):e._e()])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"btn btn-sm btn-link handle"},[t("i",{staticClass:"fas fa-arrows-alt"})])}],!1,null,"162fd39d",null).exports;function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){D(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function D(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const Z={name:"pageForm",props:{pageId:{required:!1,type:Number,default:null}},watch:{"page.page_template_id":function(e){this.$store.commit("page_templates/set",g().find(this.page_templates,{id:e}))}},beforeMount:function(){var e=this;this.$store.dispatch("page_templates/index"),null!==this.pageId&&this.$store.dispatch("pages/show",{id:this.pageId}).then((function(t){e.$store.commit("page_templates/set",g().find(e.page_templates,{id:t.page_template_id}))}))},computed:N(N(N({},(0,b.Se)("pages",["page"])),(0,b.Se)("page_templates",["page_templates","page_template"])),{},{httpMethod:function(){return null===this.pageId?"post":"put"},httpUrl:function(){return null===this.pageId?"/webmixx/pages":"/webmixx/pages/"+this.pageId},rootPageAttributeTemplates:function(){return void 0===this.page_template?[]:g().filter(this.page_template.page_attribute_templates,{page_attribute_template_id:null})}})};const I=(0,O.Z)(Z,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{attrs:{method:"post",action:e.httpUrl}},[a("input",{attrs:{type:"hidden",name:"_method"},domProps:{value:e.httpMethod}}),e._v(" "),a("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:e.csrfToken}}),e._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-3 col-form-label",attrs:{for:"name"}},[e._v("Name")]),e._v(" "),a("div",{staticClass:"col-9"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.page.name,expression:"page.name"}],staticClass:"form-control ",attrs:{type:"text",id:"name",name:"name"},domProps:{value:e.page.name},on:{input:function(t){t.target.composing||e.$set(e.page,"name",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-3 col-form-label",attrs:{for:"page_template_id"}},[e._v("Page Template")]),e._v(" "),a("div",{staticClass:"col-9"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.page.page_template_id,expression:"page.page_template_id"}],staticClass:"form-control ",attrs:{disabled:null!==e.pageId,id:"page_template_id",name:"page_template_id"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.page,"page_template_id",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:"disabled"}},[e._v("Please Select")]),e._v(" "),e._l(e.page_templates,(function(t){return a("option",{domProps:{value:t.id,textContent:e._s(t.name)}})}))],2)])]),e._v(" "),a("h3",[e._v("Attributes")]),e._v(" "),e._l(e.rootPageAttributeTemplates,(function(e){return a("page-attribute-template",{key:e.id,attrs:{"page-attribute-template":e}})})),e._v(" "),e._m(0)],2)}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-group"},[a("a",{staticClass:"btn btn-secondary",attrs:{href:"/webmixx/pages"}},[e._v("Cancel")]),e._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",name:"save",value:"save"}},[e._v("Save")])])}],!1,null,"ff79de86",null).exports;const V={name:"type-string",props:{name:{required:!0,type:String},label:{required:!0,type:String},value:{required:!1,type:String,default:""}}};const M=(0,O.Z)(V,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-3 col-form-label",attrs:{for:e.name},domProps:{textContent:e._s(e.label)}}),e._v(" "),a("div",{staticClass:"col-9"},[a("input",{staticClass:"form-control",attrs:{type:"text",id:e.name,name:e.name},domProps:{value:e.value}})])])}),[],!1,null,"39a26520",null).exports;var L=a(234),R=a.n(L);const U={name:"type-rich-text",props:{name:{required:!0,type:String},label:{required:!0,type:String},value:{required:!1,type:String,default:""}},data:function(){return{editor:R(),editorConfig:{toolbar:{items:["heading","|","bold","italic","link","bulletedList","numberedList","|","indent","outdent","|","blockQuote","insertTable","undo","redo"]}},internalValue:this.value}},computed:{editorValue:{get:function(){return this.value},set:function(e){this.internalValue=e}}}};var B=a(6),F={insert:"head",singleton:!1};C()(B.Z,F);B.Z.locals;const X=(0,O.Z)(U,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-3 col-form-label",attrs:{for:e.name},domProps:{textContent:e._s(e.label)}}),e._v(" "),a("div",{staticClass:"col-9"},[a("ckeditor",{attrs:{editor:e.editor,config:e.editorConfig},model:{value:e.editorValue,callback:function(t){e.editorValue=t},expression:"editorValue"}}),e._v(" "),a("input",{staticClass:"d-none",attrs:{type:"text",id:e.name,name:e.name},domProps:{value:e.internalValue}})],1)])}),[],!1,null,null,null).exports;i().defaults.headers.common["X-Requested-With"]="XMLHttpRequest",Object.defineProperty(n.default.prototype,"csrfToken",{get:function(){return document.head.querySelector('meta[name="csrf-token"]').content}}),n.default.use(d()),!1===$("#app").hasClass("no-vue")&&(n.default.component("pageAttributeTemplate",P),n.default.component("pageAttribute",q),n.default.component("pageForm",I),n.default.component("typeString",M),n.default.component("typeRichText",X),new n.default({el:"#app",store:u}))},6:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var r=a(645),i=a.n(r)()((function(e){return e[1]}));i.push([e.id,".ck.ck-editor__editable{min-height:200px}",""]);const n=i},607:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var r=a(645),i=a.n(r)()((function(e){return e[1]}));i.push([e.id,".field-compound[data-v-162fd39d]{padding:7px 0;border:1px solid var(--secondary);border-radius:7px;margin-bottom:7px}.btn .handle[data-v-162fd39d]{cursor:move}",""]);const n=i},839:()=>{}},0,[[639,929,898],[839,929,898]]]);