"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3618],{3618:(t,e,a)=>{a.r(e),a.d(e,{default:()=>m});var n=a(6486),s=a.n(n),r=a(9680),o=a(7117),i=a(799),c=a(5591);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){p(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e,a){return(e=function(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var n=a.call(t,e||"default");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===l(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const h={name:"AdminCmsCategoryIndex",components:{ConfirmationModal:o.Z,InputGroup:i.Z,SelectGroup:c.Z},layout:"admin-layout",props:{product_category:{required:!0,type:Object},searchOptions:{required:!0,type:Object|Array}},data:function(){return{editableSearchOptions:{per_page:15,page_name:"",page_slug:""},isInitialised:!1,isLoadingDelete:!1,showDeleteModal:!1,categoryToDelete:null}},mounted:function(){this.editableSearchOptions=d(d({},this.editableSearchOptions),this.$page.props.searchOptions),this.setSearchOptions(this.searchOptions)},computed:{deleteModalText:function(){try{return"Do you really want to delete '"+this.categoryToDelete.name+"'?"}catch(t){return"Do you really want to delete this category?"}},showPagination:function(){try{return this.product_category.pagination.last_page>1}catch(t){return!1}},showCategoryActions:function(){return this.userCan("cms_product.edit")||this.userCan("cms_product.delete")},categoriesData:function(){return!(!this.product_category||!this.product_category.data||this.product_category.data.length<1)&&this.product_category.data}},methods:{cancelDelete:function(){this.isLoadingDelete||(this.showDeleteModal=!1,this.categoryToDelete=null)},checkDelete:function(t){this.showDeleteModal=!0,this.categoryToDelete=t},confirmDelete:function(){if(this.isLoadingDelete)return this.$errorToast("It's only possible to delete one category at a time.");this.$inertia.delete(this.$route("admin.cms.productCategories.destroy",this.categoryToDelete.id),{only:["flash","product_category"]}),this.categoryToDelete=null,this.showDeleteModal=!1},onSearchOptionsUpdate:s().debounce((function(){!this.isInitialised&&(this.isInitialised=!0,this.categoriesData)||r.Inertia.get(this.$route("admin.cms.productCategories.index"),this.editableSearchOptions,{only:["product_category"],preserveState:!0})}),500),setSearchOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={per_page:15,page_name:"",page_slug:""};try{s().forEach(t,(function(t,a){e[a]=t}))}catch(t){console.log(t)}this.editableSearchOptions=s().cloneDeep(e)}},watch:{editableSearchOptions:{deep:!0,handler:"onSearchOptionsUpdate"}}};const m=(0,a(1900).Z)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"flex flex-row items-center mb-6"},[a("h1",{staticClass:"font-medium mr-auto text-lg"},[t._v("\n            Product Categories\n        ")]),t._v(" "),t.userCan("cms_product.create")?a("inertia-link",{staticClass:"\n                button button-default-responsive button-primary\n                flex flex-row items-center\n            ",attrs:{href:t.$route("admin.cms.productCategories.create")}},[a("icon-plus",{staticClass:"w-5 md:mr-2"}),t._v(" "),a("span",{staticClass:"hidden md:inline"},[t._v("\n                Create Product Categories\n            ")])],1):t._e()],1),t._v(" "),a("div",{staticClass:"bg-white py-6 shadow-subtle rounded-lg"},[a("h1",{staticClass:"font-semibold px-6 text-gray-850"},[t._v("\n            Search\n            "),a("button",{staticClass:"\n                    text-sm text-theme-base-subtle-contrast\n                    focus:outline-none focus:text-theme-primary\n                    hover:text-theme-primary\n                ",on:{click:t.setSearchOptions}},[t._v("\n                (Clear)\n            ")])]),t._v(" "),a("div",{staticClass:"\n                flex flex-row flex-wrap items-center -mx-4 -my-2 pt-4 px-6\n            "},[a("div",{staticClass:"\n                    my-2 w-full\n                    sm:w-1/2\n                    lg:w-1/4\n                "},[a("input-group",{staticClass:"mx-4",attrs:{"input-autocomplete":"page_name_search","input-class":"form-control form-control-short","input-id":"page_name","input-name":"page_name","input-placeholder":"Product Categories Name","input-type":"text","label-hidden":!0,"label-text":"Product Categories Name"},model:{value:t.editableSearchOptions.page_name,callback:function(e){t.$set(t.editableSearchOptions,"page_name",e)},expression:"editableSearchOptions.page_name"}})],1),t._v(" "),a("div",{staticClass:"\n                    my-2 w-full\n                    sm:w-1/2\n                    lg:w-1/4\n                "},[a("input-group",{staticClass:"mx-4",attrs:{"input-autocomplete":"page_slug_search","input-class":"form-control form-control-short","input-id":"page_slug","input-name":"page_slug","input-placeholder":"Product Categories Slug","input-type":"text","label-hidden":!0,"label-text":"Product Categories Slug"},model:{value:t.editableSearchOptions.page_slug,callback:function(e){t.$set(t.editableSearchOptions,"page_slug",e)},expression:"editableSearchOptions.page_slug"}})],1)]),t._v(" "),t.categoriesData?[a("div",{staticClass:"block mt-8 overflow-x-auto w-full"},[a("table",{staticClass:"table table-hover table-striped w-full"},[a("thead",[a("tr",[a("th",{staticClass:"indicator-column"}),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("URL")]),t._v(" "),a("th",{staticClass:"text-center"},[t._v("Enabled")]),t._v(" "),a("th",{staticClass:"text-center"},[t._v("Publish / Expiry Date")]),t._v(" "),t.showCategoryActions?a("th"):t._e()])]),t._v(" "),a("tbody",t._l(t.categoriesData,(function(e){return a("tr",{key:"category-"+e.id},[a("td",{staticClass:"indicator-column"},[a("div",{staticClass:"h-3 rounded-full w-3",class:{"bg-theme-success-contrast":e.url.is_live,"bg-theme-danger-contrast":!e.url.is_live}})]),t._v(" "),a("td",[t._v("\n                            "+t._s(e.name)+"\n                            "),a("br"),t._v(" "),a("span",{staticClass:"text-sm text-theme-base-subtle-contrast"},[t._v("\n                                "+t._s(e.slug)+"\n                            ")])]),t._v(" "),a("td",{staticClass:"text-sm"},[t._v("\n                            "+t._s(e.url.url_full)+"\n                        ")]),t._v(" "),a("td",[a("div",{staticClass:"flex flex-row justify-center"},[e.url.is_enabled?a("icon-check",{staticClass:"h-4 w-4"}):a("icon-x",{staticClass:"h-4 w-4"})],1)]),t._v(" "),a("td",{staticClass:"text-sm"},[a("div",{staticClass:"flex flex-col opacity-75 space-y-1"},[a("span",{staticClass:"text-center"},[e.url.published_at?[t._v("\n                                        "+t._s(t._f("humanFriendlyDateTime")(e.url.published_at))+"\n                                    ")]:[t._v("\n                                        -\n                                    ")]],2),t._v(" "),a("span",{staticClass:"text-center"},[e.url.expired_at?[t._v("\n                                        "+t._s(t._f("humanFriendlyDateTime")(e.url.expired_at))+"\n                                    ")]:[t._v("\n                                        -\n                                    ")]],2)])]),t._v(" "),t.showCategoryActions?a("td",[a("div",{staticClass:"flex flex-row items-center justify-end -mx-1"},[t.userCan("cms_product.edit")?a("inertia-link",{staticClass:"\n                                        flex flex-row items-center mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide\n                                        focus:outline-none focus:ring\n                                        hover:bg-theme-info hover:text-theme-info-contrast\n                                    ",attrs:{href:t.$route("admin.cms.productCategories.edit",e.id),title:"Edit Category"}},[a("icon-edit",{staticClass:"w-4"})],1):t._e(),t._v(" "),t.userCan("cms_product.delete")?a("button",{staticClass:"\n                                        flex flex-row items-center mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide\n                                        focus:outline-none focus:ring\n                                        hover:bg-theme-danger hover:text-theme-danger-contrast\n                                    ",attrs:{title:"Delete Category"},on:{click:function(a){return t.checkDelete(e)}}},[a("icon-trash",{staticClass:"w-4"})],1):t._e()],1)]):t._e()])})),0)])]),t._v(" "),t.showPagination?a("div",{staticClass:"flex flex-row justify-center mt-12 px-6"},[a("pagination",{attrs:{pagination:t.product_category.pagination}})],1):t._e()]:a("p",{staticClass:"bg-theme-base-subtle mt-8 mx-6 px-6 py-4 rounded text-center text-theme-base-subtle-contrast"},[t._v("\n            No Product Categories\n        ")]),t._v(" "),a("confirmation-modal",{attrs:{"confirm-text":"Delete","confirm-type":"danger","show-modal":t.showDeleteModal,"message-text":t.deleteModalText},on:{cancelAction:t.cancelDelete,closeModal:t.cancelDelete,confirmAction:t.confirmDelete}})],2)])}),[],!1,null,null,null).exports}}]);