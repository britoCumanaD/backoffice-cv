"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9353],{3244:(t,e,n)=>{n.r(e),n.d(e,{default:()=>h});n(6486);var i=n(9680),o=n(5485),r=n(3128),s=n(5874),l=n(799);const a={name:"TextField",mixins:[s.u],components:{InputGroup:l.Z},mounted:function(){var t=this;window.addEventListener("click",(function(e){t.$el.contains(e.target)||(t.isOpen=!1)}))},data:function(){return{isOpen:!1,colors:["#FFFFFF","#143AA3","#D7E1FC","#2196F3","#009688","#9C27B0","#FFEB3B","#afbbc9","#4CAF50","#000000","#f56565","#ed64a6"]}},computed:{inputMaxLength:function(){try{return this.templateField.settings.max_length}catch(t){return""}},colorBlack:function(){return"#FFFFFF"==this.editableContent||"#D7E1FC"==this.editableContent||"#FFEB3B"==this.editableContent}}};var c=n(1900);const u=(0,c.Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input-group",{attrs:{"error-message":t.errorMessage,"input-autocomplete":t.inputName,"input-class":"input-group-input","input-id":t.inputName,"input-name":t.inputName,"input-required":t.templateField.is_required,"input-type":"text","input-wrapper-class":"flex flex-row items-center relative","label-class":"","label-text":"",readonly:""},scopedSlots:t._u([{key:"default",fn:function(){return[t._t("default")]},proxy:!0},{key:"inputAppend",fn:function(){return[n("button",{staticClass:"ml-2 w-10 h-10 rounded-full focus:outline-none focus:shadow-outline inline-flex p-2 shadow",style:"background: "+(""!=t.editableContent?t.editableContent:"#dbeafe")+"; color: "+(t.colorBlack?"#000000":"#FFFFFF"),attrs:{type:"button"},on:{click:function(e){t.isOpen=!t.isOpen}}},[n("svg",{staticClass:"w-6 h-6 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M15.584 10.001L13.998 8.417 5.903 16.512 5.374 18.626 7.488 18.097z"}}),n("path",{attrs:{d:"M4.03,15.758l-1,4c-0.086,0.341,0.015,0.701,0.263,0.949C3.482,20.896,3.738,21,4,21c0.081,0,0.162-0.01,0.242-0.03l4-1 c0.176-0.044,0.337-0.135,0.465-0.263l8.292-8.292l1.294,1.292l1.414-1.414l-1.294-1.292L21,7.414 c0.378-0.378,0.586-0.88,0.586-1.414S21.378,4.964,21,4.586L19.414,3c-0.756-0.756-2.072-0.756-2.828,0l-2.589,2.589l-1.298-1.296 l-1.414,1.414l1.298,1.296l-8.29,8.29C4.165,15.421,4.074,15.582,4.03,15.758z M5.903,16.512l8.095-8.095l1.586,1.584 l-8.096,8.096l-2.114,0.529L5.903,16.512z"}})])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"origin-top-right absolute right-0 top-0 mt-12 w-40 rounded-md shadow-lg z-20",on:{click:function(e){t.isOpen=!1}}},[n("div",{staticClass:"rounded-md bg-white shadow-xs px-4 py-3"},[n("div",{staticClass:"flex flex-wrap -mx-2"},t._l(t.colors,(function(e,i){return n("div",{key:i,staticClass:"px-2"},[t.editableContent===e?[n("div",{staticClass:"w-8 h-8 inline-flex rounded-full cursor-pointer border",style:"background: "+e+"; box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);"})]:t._e(),t._v(" "),t.editableContent!=e?[n("div",{staticClass:"w-8 h-8 inline-flex rounded-full cursor-pointer border focus:outline-none focus:shadow-outline",style:"background: "+e+";",attrs:{role:"checkbox",tabindex:"0","aria-checked":t.editableContent},on:{click:function(n){t.editableContent=e},keydown:function(n){if(!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter"))return null;t.editableContent=e}}})]:t._e()],2)})),0)])])]},proxy:!0}],null,!0),model:{value:t.editableContent,callback:function(e){t.editableContent=e},expression:"editableContent"}})}),[],!1,null,null,null).exports;var f=n(3073),d=n(629);function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function b(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==p(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===p(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const g={name:"AdminCmsConfigIndex",components:{ImageField:o.Z,TextField:r.Z,ColorField:u,Inertia:i.Inertia},layout:"admin-layout",props:{config:{required:!0,type:Object|Array},config_key:{required:!0,type:Object|Array}},data:function(){return{configValues:{},render:!1,logoValidFormat:["svg","jpg","jpeg","png","gif"],faviconValidFormat:["png","ico","svg"],logoError:!1,faviconError:!1}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},(0,d.Se)(f.z,["fixedBarAction"])),mounted:function(){var t=this;this.config_key.forEach((function(e){var n=t.config.find((function(t){return t.key===e.key}));t.configValues[e.key]=n?n.value:""})),this.render=!0},methods:{submit:function(){this.$inertia.post(this.$route("admin.cms.config.store"),this.configValues)},checkInput:function(){var t=this,e=this.configValues.logo.split("."),n=this.configValues.favicon.split(".");return e.length>0&&""!=this.configValues.logo&&(this.logoError=!this.logoValidFormat.find((function(t){return t===e[e.length-1]})),this.logoError)?(this.configValues.logo="",this.render=!1,void this.$nextTick((function(){t.render=!0}))):n.length>0&&""!=this.configValues.favicon&&(this.faviconError=!this.faviconValidFormat.find((function(t){return t===n[n.length-1]})),this.faviconError)?(this.configValues.favicon="",this.render=!1,void this.$nextTick((function(){t.render=!0}))):void 0}}};const h=(0,c.Z)(g,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"max-w-5xl mx-auto",attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[n("div",{staticClass:"flex flex-row items-center mb-6",class:{"fixed top-0 z-50 bg-white shadow-md p-3 right-0":t.fixedBarAction}},[n("h1",{staticClass:"font-medium text-lg",class:t.fixedBarAction?"mr-8":"mr-auto"},[t._v("\n             Setting\n        ")]),t._v(" "),t.userCan("cms.view")?n("inertia-link",{staticClass:"button button-default-responsive button-primary-subtle\n                flex flex-row items-center mr-2",attrs:{href:t.$route("admin.index")}},[n("icon-chevron-left",{staticClass:"w-5 md:mr-2"}),t._v(" "),n("span",{staticClass:"hidden md:inline"},[t._v("\n                Back\n            ")])],1):t._e(),t._v(" "),n("button",{staticClass:"button button-default-responsive button-primary\n                flex flex-row items-center",attrs:{type:"submit"}},[n("icon-save",{staticClass:"w-5 md:mr-2"}),t._v(" "),n("span",{staticClass:"hidden md:inline"},[t._v("\n                Save Changes\n            ")])],1)],1),t._v(" "),n("div",{staticClass:"bg-white py-6 shadow-subtle rounded-lg"},[t.render?n("div",{staticClass:"px-6 w-full grid grid-cols-2 gap-4"},t._l(t.config_key,(function(e,i){return n("section",{key:i,staticClass:"mb-4"},[n(e.component,{tag:"component",attrs:{"template-field":Object.assign({},e,{id:i}),typeInput:e.type},on:{input:t.checkInput},model:{value:t.configValues[e.key],callback:function(n){t.$set(t.configValues,e.key,n)},expression:"configValues[config.key]"}},[n("div",{staticClass:"mb-2"},[n("p",{staticClass:"flex flex-row font-medium items-baseline text-theme-base-contrast text-sm tracking-wider"},[n("span",[t._v(t._s(e.label))]),t._v(" "),e.is_required?n("sup",{staticClass:"text-theme-danger-contrast"},[t._v("\n                                *\n                            ")]):t._e()])])])],1)})),0):t._e()])])}),[],!1,null,null,null).exports}}]);