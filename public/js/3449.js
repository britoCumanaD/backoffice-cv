"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3449],{3449:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var o=n(6486),r=n.n(o),s=n(9680),i=n(7117),a=n(799),l=n(5591);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==c(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===c(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const d={name:"AdminCrmFormIndex",components:{ConfirmationModal:i.Z,InputGroup:a.Z,SelectGroup:l.Z},layout:"admin-layout",props:{searchOptions:{required:!0,type:Object|Array},forms:{required:!0,type:Object}},data:function(){return{editableSearchOptions:{per_page:15,form_name:"",form_slug:""},isInitialised:!1,isLoadingDelete:!1,showDeleteModal:!1,formToDelete:null}},computed:{deleteModalText:function(){try{return"Do you really want to delete '"+this.formToDelete.name+"'?"}catch(e){return"Do you really want to delete this form?"}},showPagination:function(){try{return this.forms.pagination.last_page>1}catch(e){return!1}},showFormActions:function(){return this.userCan("crm_forms.edit")||this.userCan("crm_forms.delete")},formsData:function(){return!(!this.forms||!this.forms.data||this.forms.data.length<1)&&this.forms.data}},mounted:function(){this.editableSearchOptions=u(u({},this.editableSearchOptions),this.$page.props.searchOptions),this.setSearchOptions(this.searchOptions)},methods:{cancelDelete:function(){this.isLoadingDelete||(this.showDeleteModal=!1,this.formToDelete=null)},checkDelete:function(e){this.showDeleteModal=!0,this.formToDelete=e},confirmDelete:function(){if(this.isLoadingDelete)return this.$errorToast("It's only possible to delete one form at a time.");this.$inertia.delete(this.$route("admin.crm.forms.destroy",this.formToDelete.id),{only:["flash","forms"]}),this.formToDelete=null,this.showDeleteModal=!1},onSearchOptionsUpdate:r().debounce((function(){!this.isInitialised&&(this.isInitialised=!0,this.formsData)||s.Inertia.get(this.$route("admin.crm.forms.index"),this.editableSearchOptions,{only:["forms"],preserveState:!0})}),500),setSearchOptions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={per_page:15,form_name:"",form_slug:""};try{r().forEach(e,(function(e,n){t[n]=e}))}catch(e){console.log(e)}this.editableSearchOptions=r().cloneDeep(t)}},watch:{editableSearchOptions:{deep:!0,handler:"onSearchOptionsUpdate"}}};const p=(0,n(1900).Z)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"flex flex-row items-center mb-6"},[n("h1",{staticClass:"font-medium mr-auto text-lg"},[e._v("\n            Forms\n        ")]),e._v(" "),e.userCan("crm_forms.create")?n("inertia-link",{staticClass:"\n                button button-default-responsive button-primary\n                flex flex-row items-center\n            ",attrs:{href:e.$route("admin.crm.forms.create")}},[n("icon-plus",{staticClass:"w-5 md:mr-2"}),e._v(" "),n("span",{staticClass:"hidden md:inline"},[e._v("\n                Create Form\n            ")])],1):e._e()],1),e._v(" "),n("div",{staticClass:"bg-white py-6 shadow-subtle rounded-lg"},[n("h1",{staticClass:"font-semibold px-6 text-gray-850"},[e._v("\n            Search\n            "),n("button",{staticClass:"\n                    text-sm text-theme-base-subtle-contrast\n                    focus:outline-none focus:text-theme-primary\n                    hover:text-theme-primary\n                ",on:{click:e.setSearchOptions}},[e._v("\n                (Clear)\n            ")])]),e._v(" "),n("div",{staticClass:"\n                flex flex-col items-center mt-4 px-6 space-y-4\n                md:flex-row md:space-y-0 md:space-x-8\n            "},[n("div",{staticClass:"w-full md:w-1/2"},[n("input-group",{attrs:{"input-autocomplete":"form_name_search","input-class":"form-control form-control-short","input-id":"form_name","input-name":"form_name","input-placeholder":"Form Name","input-type":"text","label-hidden":!0,"label-text":"Form Name"},model:{value:e.editableSearchOptions.form_name,callback:function(t){e.$set(e.editableSearchOptions,"form_name",t)},expression:"editableSearchOptions.form_name"}})],1),e._v(" "),n("div",{staticClass:"w-full md:w-1/2"},[n("input-group",{attrs:{"input-autocomplete":"form_slug_search","input-class":"form-control form-control-short","input-id":"form_slug","input-name":"form_slug","input-placeholder":"Form Slug","input-type":"text","label-hidden":!0,"label-text":"Form Slug"},model:{value:e.editableSearchOptions.form_slug,callback:function(t){e.$set(e.editableSearchOptions,"form_slug",t)},expression:"editableSearchOptions.form_slug"}})],1)]),e._v(" "),e.formsData?[n("div",{staticClass:"block mt-8 overflow-x-auto w-full"},[n("table",{staticClass:"table table-hover table-striped w-full"},[n("thead",[n("tr",[n("th",[e._v("Name")]),e._v(" "),n("th",[e._v("Slug")]),e._v(" "),e.showFormActions?n("th"):e._e()])]),e._v(" "),n("tbody",e._l(e.formsData,(function(t){return n("tr",{key:"template-"+t.id},[n("td",[e._v("\n                            "+e._s(t.name)+"\n                        ")]),e._v(" "),n("td",[e._v("\n                            "+e._s(t.slug)+"\n                        ")]),e._v(" "),e.showFormActions?n("td",[n("div",{staticClass:"flex flex-row items-center justify-end -mx-1"},[e.userCan("crm_forms.edit")?n("inertia-link",{staticClass:"\n                                        flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide\n                                        focus:outline-none focus:ring\n                                        hover:bg-theme-info hover:text-theme-info-contrast\n                                    ",attrs:{href:e.$route("admin.crm.forms.edit",t.id),title:"Edit Form"}},[n("icon-edit",{staticClass:"w-4"})],1):e._e(),e._v(" "),e.userCan("crm_forms.delete")?n("button",{staticClass:"\n                                        flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide\n                                        focus:outline-none focus:ring\n                                        hover:bg-theme-danger hover:text-theme-danger-contrast\n                                    ",attrs:{title:"Delete Template"},on:{click:function(n){return e.checkDelete(t)}}},[n("icon-trash",{staticClass:"w-4"})],1):e._e()],1)]):e._e()])})),0)])]),e._v(" "),e.showPagination?n("div",{staticClass:"flex flex-row justify-center mt-12 px-6"},[n("pagination",{attrs:{pagination:e.forms.pagination}})],1):e._e()]:n("p",{staticClass:"bg-theme-base-subtle mt-8 mx-6 px-6 py-4 rounded text-center text-theme-base-subtle-contrast"},[e._v("\n            No forms\n        ")]),e._v(" "),n("confirmation-modal",{attrs:{"confirm-text":"Delete","confirm-type":"danger","show-modal":e.showDeleteModal,"message-text":e.deleteModalText},on:{cancelAction:e.cancelDelete,closeModal:e.cancelDelete,confirmAction:e.confirmDelete}})],2)])}),[],!1,null,null,null).exports}}]);