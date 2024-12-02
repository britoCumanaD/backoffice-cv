"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1467],{1467:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(6486),s=n.n(a),i=n(9680),o=n(7117),r=n(799),l=n(5591);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==c(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===c(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const d={name:"AdminCmsWhatNewsIndex",components:{ConfirmationModal:o.Z,InputGroup:r.Z,SelectGroup:l.Z},layout:"admin-layout",props:{whatNews:{required:!0,type:Object},searchOptions:{required:!0,type:Object|Array}},data:function(){return{editableSearchOptions:{per_page:15,page_name:"",page_slug:""},isInitialised:!1,isLoadingDelete:!1,showDeleteModal:!1,whatNewToDelete:null}},mounted:function(){this.editableSearchOptions=h(h({},this.editableSearchOptions),this.$page.props.searchOptions),this.setSearchOptions(this.searchOptions)},computed:{deleteModalText:function(){try{return"Do you really want to delete '"+this.whatNewToDelete.name+"'?"}catch(e){return"Do you really want to delete this whatNews?"}},showPagination:function(){try{return this.whatNews.pagination.last_page>1}catch(e){return!1}},showActions:function(){return this.userCan("cms.edit")||this.userCan("cms.delete")},whatNewsData:function(){return!(!this.whatNews||!this.whatNews.data||this.whatNews.data.length<1)&&this.whatNews.data}},methods:{cancelDelete:function(){this.isLoadingDelete||(this.showDeleteModal=!1,this.whatNewToDelete=null)},checkDelete:function(e){this.showDeleteModal=!0,this.whatNewToDelete=e},confirmDelete:function(){if(this.isLoadingDelete)return this.$errorToast("It's only possible to delete one whatNews at a time.");this.$inertia.delete(this.$route("admin.cms.whatNews.destroy",this.whatNewToDelete.id),{only:["flash","whatNews"]}),this.whatNewToDelete=null,this.showDeleteModal=!1},onSearchOptionsUpdate:s().debounce((function(){!this.isInitialised&&(this.isInitialised=!0,this.whatNewsData)||i.Inertia.get(this.$route("admin.cms.whatNews.index"),this.editableSearchOptions,{only:["whatNews"],preserveState:!0})}),500),setSearchOptions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={per_page:15,page_name:"",page_slug:""};try{s().forEach(e,(function(e,n){t[n]=e}))}catch(e){console.log(e)}this.editableSearchOptions=s().cloneDeep(t)}},watch:{editableSearchOptions:{deep:!0,handler:"onSearchOptionsUpdate"}}};const m=(0,n(1900).Z)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"flex flex-row items-center mb-6"},[n("h1",{staticClass:"font-medium mr-auto text-lg"},[e._v("\n            What News\n        ")]),e._v(" "),e.userCan("cms.create")?n("inertia-link",{staticClass:"\n                button button-default-responsive button-primary\n                flex flex-row items-center\n            ",attrs:{href:e.$route("admin.cms.whatNews.create")}},[n("icon-plus",{staticClass:"w-5 md:mr-2"}),e._v(" "),n("span",{staticClass:"hidden md:inline"},[e._v("\n                Create whatNews\n            ")])],1):e._e()],1),e._v(" "),n("div",{staticClass:"bg-white py-6 shadow-subtle rounded-lg"},[n("h1",{staticClass:"font-semibold px-6 text-gray-850"},[e._v("\n            Search\n            "),n("button",{staticClass:"\n                    text-sm text-theme-base-subtle-contrast\n                    focus:outline-none focus:text-theme-primary\n                    hover:text-theme-primary\n                ",on:{click:e.setSearchOptions}},[e._v("\n                (Clear)\n            ")])]),e._v(" "),n("div",{staticClass:"\n                flex flex-row flex-wrap items-center -mx-4 -my-2 pt-4 px-6\n            "},[n("div",{staticClass:"\n                    my-2 w-full\n                    sm:w-1/2\n                    lg:w-1/4\n                "},[n("input-group",{staticClass:"mx-4",attrs:{"input-autocomplete":"page_name_search","input-class":"form-control form-control-short","input-id":"page_name","input-name":"page_name","input-placeholder":"Title","input-type":"text","label-hidden":!0,"label-text":"Title"},model:{value:e.editableSearchOptions.page_name,callback:function(t){e.$set(e.editableSearchOptions,"page_name",t)},expression:"editableSearchOptions.page_name"}})],1),e._v(" "),n("div",{staticClass:"\n                    my-2 w-full\n                    sm:w-1/2\n                    lg:w-1/4\n                "},[n("input-group",{staticClass:"mx-4",attrs:{"input-autocomplete":"page_slug_search","input-class":"form-control form-control-short","input-id":"page_slug","input-name":"page_slug","input-placeholder":"whatNews Slug","input-type":"text","label-hidden":!0,"label-text":"whatNews Slug"},model:{value:e.editableSearchOptions.page_slug,callback:function(t){e.$set(e.editableSearchOptions,"page_slug",t)},expression:"editableSearchOptions.page_slug"}})],1)]),e._v(" "),e.whatNewsData?[n("div",{staticClass:"block mt-8 overflow-x-auto w-full"},[n("table",{staticClass:"table table-hover table-striped w-full"},[n("thead",[n("tr",[n("th",[e._v("Name")]),e._v(" "),e.showActions?n("th"):e._e()])]),e._v(" "),n("tbody",e._l(e.whatNewsData,(function(t){return n("tr",{key:"whatNew-"+t.id},[n("td",[e._v("\n                            "+e._s(t.name)+"\n                            "),n("br"),e._v(" "),n("span",{staticClass:"text-sm text-theme-base-subtle-contrast"},[e._v("\n                                "+e._s(t.slug)+"\n                            ")])]),e._v(" "),e.showActions?n("td",[n("div",{staticClass:"flex flex-row items-center justify-end -mx-1"},[e.userCan("cms.edit")?n("inertia-link",{staticClass:"\n                                        flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide\n                                        focus:outline-none focus:ring\n                                        hover:bg-theme-info hover:text-theme-info-contrast\n                                    ",attrs:{href:e.$route("admin.cms.whatNews.edit",t.id),title:"Edit whatNew"}},[n("icon-edit",{staticClass:"w-4"})],1):e._e(),e._v(" "),e.userCan("cms.delete")?n("button",{staticClass:"\n                                        flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide\n                                        focus:outline-none focus:ring\n                                        hover:bg-theme-danger hover:text-theme-danger-contrast\n                                    ",attrs:{title:"Delete whatNew"},on:{click:function(n){return e.checkDelete(t)}}},[n("icon-trash",{staticClass:"w-4"})],1):e._e()],1)]):e._e()])})),0)])]),e._v(" "),e.showPagination?n("div",{staticClass:"flex flex-row justify-center mt-12 px-6"},[n("pagination",{attrs:{pagination:e.whatNews.pagination}})],1):e._e()]:n("p",{staticClass:"bg-theme-base-subtle mt-8 mx-6 px-6 py-4 rounded text-center text-theme-base-subtle-contrast"},[e._v("\n            No whatNews\n        ")]),e._v(" "),n("confirmation-modal",{attrs:{"confirm-text":"Delete","confirm-type":"danger","show-modal":e.showDeleteModal,"message-text":e.deleteModalText},on:{cancelAction:e.cancelDelete,closeModal:e.cancelDelete,confirmAction:e.confirmDelete}})],2)])}),[],!1,null,null,null).exports}}]);