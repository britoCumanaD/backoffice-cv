"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4318],{4318:(t,e,a)=>{a.r(e),a.d(e,{default:()=>h});var n=a(2543),o=a.n(n),i=a(8646),l=a(1162),s=a(6786),r=a(6054);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){d(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e,a){return(e=function(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var n=a.call(t,e||"default");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===u(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const m={name:"AdminCmsLayoutIndex",components:{ConfirmationModal:l.A,InputGroup:s.A,SelectGroup:r.A},layout:"admin-layout",props:{layouts:{required:!0,type:Object},searchOptions:{required:!0,type:Object|Array},templates:{required:!0,type:Object|Array}},data:function(){return{editableSearchOptions:{per_page:15,layout_name:"",layout_slug:"",template_id:""},isInitialised:!1,isLoadingDelete:!1,showDeleteModal:!1,layoutToDelete:null}},mounted:function(){this.editableSearchOptions=p(p({},this.editableSearchOptions),this.$page.props.searchOptions),this.setSearchOptions(this.searchOptions)},computed:{deleteModalText:function(){try{return"Do you really want to delete '"+this.layoutToDelete.name+"'?"}catch(t){return"Do you really want to delete this layout?"}},isTemplates:function(){try{return Object.keys(this.templates).length}catch(t){return!1}},showPagination:function(){try{return this.layouts.pagination.last_page>1}catch(t){return!1}},showLayoutActions:function(){return this.userCan("cms_advanced.edit")||this.userCan("cms_advanced.delete")},layoutsData:function(){return!(!this.layouts||!this.layouts.data||this.layouts.data.length<1)&&this.layouts.data}},methods:{cancelDelete:function(){this.isLoadingDelete||(this.showDeleteModal=!1,this.layoutToDelete=null)},checkDelete:function(t){this.showDeleteModal=!0,this.layoutToDelete=t},confirmDelete:function(){if(this.isLoadingDelete)return this.$errorToast("It's only possible to delete one layouts at a time.");this.$inertia.delete(this.$route("admin.cms.layouts.destroy",this.layoutToDelete.id),{only:["flash","layouts"]}),this.layoutToDelete=null,this.showDeleteModal=!1},onSearchOptionsUpdate:o().debounce((function(){!this.isInitialised&&(this.isInitialised=!0,this.layoutsData)||i.Inertia.get(this.$route("admin.cms.layouts.index"),this.editableSearchOptions,{only:["layouts"],preserveState:!0})}),500),setSearchOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={per_page:15,layout_name:"",layout_slug:"",template_type:""};try{o().forEach(t,(function(t,a){e[a]=t}))}catch(t){console.log(t)}this.editableSearchOptions=o().cloneDeep(e)}},watch:{editableSearchOptions:{deep:!0,handler:"onSearchOptionsUpdate"}}};const h=(0,a(4486).A)(m,(function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"flex flex-row items-center mb-6"},[e("h1",{staticClass:"font-medium mr-auto text-lg"},[t._v("\n             Layout\n        ")]),t._v(" "),t.userCan("cms_advanced.create")?e("inertia-link",{staticClass:"button button-default-responsive button-primary flex flex-row items-center",attrs:{href:t.$route("admin.cms.layouts.create")}},[e("icon-plus",{staticClass:"w-5 md:mr-2"}),t._v(" "),e("span",{staticClass:"hidden md:inline"},[t._v("\n                Create Layout\n            ")])],1):t._e()],1),t._v(" "),e("div",{staticClass:"bg-white py-6 shadow-subtle rounded-lg"},[e("h1",{staticClass:"font-semibold px-6 text-gray-850"},[t._v("\n            Search\n            "),e("button",{staticClass:"text-sm text-theme-base-subtle-contrast focus:outline-none focus:text-theme-primary hover:text-theme-primary",on:{click:t.setSearchOptions}},[t._v("\n                (Clear)\n            ")])]),t._v(" "),e("div",{staticClass:"flex flex-col items-center mt-4 px-6 space-y-4 md:flex-row md:space-y-0 md:space-x-8"},[e("div",{staticClass:"w-full md:w-1/3"},[e("input-group",{attrs:{"input-autocomplete":"layout_name_search","input-class":"form-control form-control-short","input-id":"layout_name","input-name":"layout_name","input-placeholder":"Layout Name","input-type":"text","label-hidden":!0,"label-text":"Layout Name"},model:{value:t.editableSearchOptions.layout_name,callback:function(e){t.$set(t.editableSearchOptions,"layout_name",e)},expression:"editableSearchOptions.layout_name"}})],1),t._v(" "),e("div",{staticClass:"w-full md:w-1/3"},[e("input-group",{attrs:{"input-autocomplete":"layout_slug_search","input-class":"form-control form-control-short","input-id":"layout_slug","input-name":"layout_slug","input-placeholder":"Layout Slug","input-type":"text","label-hidden":!0,"label-text":"Layout Slug"},model:{value:t.editableSearchOptions.layout_slug,callback:function(e){t.$set(t.editableSearchOptions,"layout_slug",e)},expression:"editableSearchOptions.layout_slug"}})],1),t._v(" "),t.isTemplates?e("div",{staticClass:"w-full md:w-1/3"},[e("select-group",{attrs:{"label-hidden":!0,"label-text":"Template","input-any-option-enabled":!0,"input-any-option-label":"Template","input-class":"form-control form-control-short","input-id":"template_id","input-name":"template_id","input-option-label-key":"name","input-option-value-key":"id","input-options":t.templates},model:{value:t.editableSearchOptions.template_id,callback:function(e){t.$set(t.editableSearchOptions,"template_id",e)},expression:"editableSearchOptions.template_id"}})],1):t._e()]),t._v(" "),t.layoutsData?[e("div",{staticClass:"block mt-8 overflow-x-auto w-full"},[e("table",{staticClass:"table table-hover table-striped w-full"},[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Slug")]),t._v(" "),e("th",[t._v("Template")]),t._v(" "),t.showLayoutActions?e("th"):t._e()])]),t._v(" "),e("tbody",t._l(t.layoutsData,(function(a,n){return e("tr",{key:"layout-".concat(a.id)},[e("td",[t._v("\n                            "+t._s(a.name)+"\n                        ")]),t._v(" "),e("td",[t._v("\n                            "+t._s(a.slug)+"\n                        ")]),t._v(" "),e("td",[t._v("\n                            "+t._s(a.template.name)+"\n                        ")]),t._v(" "),t.showLayoutActions?e("td",[e("div",{staticClass:"flex flex-row items-center justify-end -mx-1"},[t.userCan("cms_advanced.edit")?e("inertia-link",{staticClass:"flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide focus:outline-none focus:ring hover:bg-theme-info hover:text-theme-info-contrast",attrs:{href:t.$route("admin.cms.layouts.edit",a.id),title:"Edit Layout"}},[e("icon-edit",{staticClass:"w-4"})],1):t._e(),t._v(" "),t.userCan("cms_advanced.delete")?e("button",{staticClass:"flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide focus:outline-none focus:ring hover:bg-theme-danger hover:text-theme-danger-contrast",attrs:{title:"Delete Layout"},on:{click:function(e){return t.checkDelete(a)}}},[e("icon-trash",{staticClass:"w-4"})],1):t._e()],1)]):t._e()])})),0)])]),t._v(" "),t.showPagination?e("div",{staticClass:"flex flex-row justify-center mt-12 px-6"},[e("pagination",{attrs:{pagination:t.layouts.pagination}})],1):t._e()]:e("p",{staticClass:"bg-theme-base-subtle mt-8 mx-6 px-6 py-4 rounded text-center text-theme-base-subtle-contrast"},[t._v("\n            No layouts\n        ")]),t._v(" "),e("confirmation-modal",{attrs:{"confirm-text":"Delete","confirm-type":"danger","show-modal":t.showDeleteModal,"message-text":t.deleteModalText},on:{cancelAction:t.cancelDelete,closeModal:t.cancelDelete,confirmAction:t.confirmDelete}})],2)])}),[],!1,null,null,null).exports}}]);