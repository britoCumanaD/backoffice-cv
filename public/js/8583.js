"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8583],{8583:(t,e,n)=>{n.r(e),n.d(e,{default:()=>r});var a=n(6486),o=n.n(a),c=n(9680),s=n(7117),i=n(799);const l={name:"AdminCrmContactIndex",components:{ConfirmationModal:s.Z,InputGroup:i.Z},layout:"admin-layout",props:{searchOptions:{required:!0,type:Array|Object},contacts:{required:!0,type:Object}},data:function(){return{editableSearchOptions:{contact_email:"",contact_first_name:"",contact_last_name:"",contact_telephone:"",per_page:15},isInitialised:!1,isLoadingDelete:!1,showDeleteModal:!1,contactToDelete:null}},computed:{contactsData:function(){return!(!this.contacts||!this.contacts.data||this.contacts.data.length<1)&&this.contacts.data},deleteModalText:function(){try{return"Do you really want to delete '"+this.contactToDelete.name_with_title+"'?"}catch(t){return"Do you really want to delete this contact?"}},showContactsActions:function(){return this.userCan("crm_contacts.edit")||this.userCan("crm_contacts.delete")},showPagination:function(){try{return this.contacts.pagination.last_page>1}catch(t){return!1}}},mounted:function(){this.setSearchOptions(this.searchOptions)},methods:{cancelDelete:function(){this.isLoadingDelete||(this.showDeleteModal=!1,this.contactToDelete=null)},checkDelete:function(t){this.showDeleteModal=!0,this.contactToDelete=t},confirmDelete:function(){if(this.isLoadingDelete)return this.$errorToast("It's only possible to delete one contact at a time.");this.$inertia.delete(this.$route("admin.crm.contacts.destroy",this.contactToDelete.id),{only:["flash","contacts"]}),this.contactToDelete=null,this.showDeleteModal=!1},onSearchOptionsUpdate:o().debounce((function(){!this.isInitialised&&(this.isInitialised=!0,this.contactsData)||c.Inertia.get(this.$route("admin.crm.contacts.index"),this.editableSearchOptions,{only:["contacts"],preserveState:!0})}),500),setSearchOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={contact_email:"",contact_first_name:"",contact_last_name:"",contact_telephone:"",per_page:15};try{o().forEach(t,(function(t,n){e[n]=t}))}catch(t){console.log(t)}this.editableSearchOptions=o().cloneDeep(e)}},watch:{editableSearchOptions:{deep:!0,handler:"onSearchOptionsUpdate"}}};const r=(0,n(1900).Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"flex flex-row items-center mb-6"},[n("h1",{staticClass:"font-medium mr-auto text-lg"},[t._v("\n            Contacts\n        ")]),t._v(" "),t.userCan("crm_contacts.create")?n("inertia-link",{staticClass:"\n                    button button-default-responsive button-primary\n                    flex flex-row items-center\n                ",attrs:{href:t.$route("admin.crm.contacts.create")}},[n("icon-plus",{staticClass:"w-5 md:mr-2"}),t._v(" "),n("span",{staticClass:"hidden md:inline"},[t._v("\n                    Create Contact\n                ")])],1):t._e()],1),t._v(" "),n("div",{staticClass:"bg-white py-6 shadow-subtle rounded-lg"},[n("h1",{staticClass:"font-semibold px-6 text-gray-850"},[t._v("\n            Search\n            "),n("button",{staticClass:"\n                    text-sm text-theme-base-subtle-contrast\n                    focus:outline-none focus:text-theme-primary\n                    hover:text-theme-primary\n                ",on:{click:t.setSearchOptions}},[t._v("\n                (Clear)\n            ")])]),t._v(" "),n("div",{staticClass:"\n                flex flex-col items-center mt-4 px-6 space-y-4\n                md:flex-row md:space-y-0 md:space-x-8\n            "},[n("div",{staticClass:"w-full md:w-1/4"},[n("input-group",{attrs:{"input-autocomplete":"contact_first_name_search","input-class":"form-control form-control-short","input-id":"contact_first_name","input-name":"contact_first_name","input-placeholder":"First Name","input-type":"text","label-hidden":!0,"label-text":"First Name"},model:{value:t.editableSearchOptions.contact_first_name,callback:function(e){t.$set(t.editableSearchOptions,"contact_first_name",e)},expression:"editableSearchOptions.contact_first_name"}})],1),t._v(" "),n("div",{staticClass:"w-full md:w-1/4"},[n("input-group",{attrs:{"input-autocomplete":"contact_last_name_search","input-class":"form-control form-control-short","input-id":"contact_last_name","input-name":"contact_last_name","input-placeholder":"Last Name","input-type":"text","label-hidden":!0,"label-text":"Last Name"},model:{value:t.editableSearchOptions.contact_last_name,callback:function(e){t.$set(t.editableSearchOptions,"contact_last_name",e)},expression:"editableSearchOptions.contact_last_name"}})],1),t._v(" "),n("div",{staticClass:"w-full md:w-1/4"},[n("input-group",{attrs:{"input-autocomplete":"contact_email_search","input-class":"form-control form-control-short","input-id":"contact_email","input-name":"contact_email","input-placeholder":"Email","input-type":"text","label-hidden":!0,"label-text":"Email"},model:{value:t.editableSearchOptions.contact_email,callback:function(e){t.$set(t.editableSearchOptions,"contact_email",e)},expression:"editableSearchOptions.contact_email"}})],1),t._v(" "),n("div",{staticClass:"w-full md:w-1/4"},[n("input-group",{attrs:{"input-autocomplete":"contact_telephone_search","input-class":"form-control form-control-short","input-id":"contact_telephone","input-name":"contact_telephone","input-placeholder":"Telephone","input-type":"text","label-hidden":!0,"label-text":"Telephone"},model:{value:t.editableSearchOptions.contact_telephone,callback:function(e){t.$set(t.editableSearchOptions,"contact_telephone",e)},expression:"editableSearchOptions.contact_telephone"}})],1)]),t._v(" "),t.contactsData?[n("div",{staticClass:"block mt-8 overflow-x-auto w-full"},[n("table",{staticClass:"table table-hover table-striped w-full"},[n("thead",[n("tr",[n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Email")]),t._v(" "),n("th",[t._v("Telephone")]),t._v(" "),t.showContactsActions?n("th"):t._e()])]),t._v(" "),n("tbody",t._l(t.contactsData,(function(e,a){return n("tr",{key:"contact-"+e.id},[n("td",[t._v("\n                                "+t._s(e.name_with_title)+"\n                            ")]),t._v(" "),n("td",[t._v("\n                                "+t._s(e.email)+"\n                            ")]),t._v(" "),n("td",[t._v("\n                                "+t._s(e.telephone)+"\n                            ")]),t._v(" "),t.showContactsActions?n("td",[n("div",{staticClass:"flex flex-row items-center justify-end -mx-1"},[t.userCan("crm_contacts.edit")?n("inertia-link",{staticClass:"\n                                                flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide\n                                                focus:outline-none focus:ring\n                                                hover:bg-theme-info hover:text-theme-info-contrast\n                                            ",attrs:{href:t.$route("admin.crm.contacts.edit",e.id),title:"Edit User"}},[n("icon-edit",{staticClass:"w-4"})],1):t._e(),t._v(" "),t.userCan("crm_contacts.delete")?n("button",{staticClass:"\n                                                flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide\n                                                focus:outline-none focus:ring\n                                                hover:bg-theme-danger hover:text-theme-danger-contrast\n                                            ",attrs:{title:"Delete Contact"},on:{click:function(n){return t.checkDelete(e)}}},[n("icon-trash",{staticClass:"w-4"})],1):t._e()],1)]):t._e()])})),0)])])]:n("p",{staticClass:"bg-theme-base-subtle mt-6 mx-6 px-6 py-4 rounded text-center text-theme-base-subtle-contrast"},[t._v("\n            No contacts\n        ")]),t._v(" "),t.showPagination?n("div",{staticClass:"flex flex-row justify-center mt-12 px-6"},[n("pagination",{attrs:{pagination:t.contacts.pagination}})],1):t._e(),t._v(" "),n("confirmation-modal",{attrs:{"confirm-text":"Delete","confirm-type":"danger","show-modal":t.showDeleteModal,"message-text":t.deleteModalText},on:{cancelAction:t.cancelDelete,closeModal:t.cancelDelete,confirmAction:t.confirmDelete}})],2)])}),[],!1,null,null,null).exports}}]);