"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2777],{2777:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var n=s(6486),a=s.n(n),i=s(9680),r=s(7117),l=s(799);const o={name:"AdminUserIndex",components:{ConfirmationModal:r.Z,InputGroup:l.Z},layout:"admin-layout",props:{searchOptions:Array|Object,users:Object},data:function(){return{editableSearchOptions:{per_page:15,user_first_name:"",user_last_name:"",user_email:""},isInitialised:!1,isLoadingUserDelete:!1,showDeleteModal:!1,userToDelete:null}},computed:{deleteModalText:function(){try{return"Do you really want to delete '"+this.userToDelete.name+"'?"}catch(e){return"Do you really want to delete this user?"}},show_users_actions:function(){return this.userCan("users.edit")||this.userCan("users.delete")},showPagination:function(){try{return this.users.pagination.last_page>1}catch(e){return!1}},usersData:function(){return!(!this.users||!this.users.data||this.users.data.length<1)&&this.users.data}},mounted:function(){this.setSearchOptions(this.searchOptions)},methods:{cancelUserDelete:function(){this.isLoadingUserDelete||(this.showDeleteModal=!1,this.userToDelete=null)},checkUserDelete:function(e){this.showDeleteModal=!0,this.userToDelete=e},confirmUserDelete:function(){if(this.isLoadingUserDelete)return this.$errorToast("It's only possible to delete one user at a time.");this.$inertia.delete(this.$route("admin.users.destroy",this.userToDelete.id),{only:["flash","users"]}),this.userToDelete=null,this.showDeleteModal=!1},isUserCurrent:function(e){try{return e.id===this.$page.props.auth.user.id}catch(e){return!1}},onSearchOptionsUpdate:a().debounce((function(){!this.isInitialised&&(this.isInitialised=!0,this.usersData)||i.Inertia.get(this.$route("admin.users.index"),this.editableSearchOptions,{only:["users"],preserveState:!0})}),500),setSearchOptions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={per_page:15,user_first_name:"",user_last_name:"",user_email:""};try{a().forEach(e,(function(e,s){t[s]=e}))}catch(e){console.log(e)}this.editableSearchOptions=a().cloneDeep(t)}},watch:{editableSearchOptions:{deep:!0,handler:"onSearchOptionsUpdate"}}};const u=(0,s(1900).Z)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("div",{staticClass:"flex flex-row items-center mb-6"},[s("h1",{staticClass:"font-medium mr-auto text-lg"},[e._v("\n            Users\n        ")]),e._v(" "),e.userCan("users.create")?s("inertia-link",{staticClass:"\n                button button-default-responsive button-primary\n                flex flex-row items-center\n            ",attrs:{href:e.$route("admin.users.create")}},[s("icon-plus",{staticClass:"w-5 md:mr-2"}),e._v(" "),s("span",{staticClass:"hidden md:inline"},[e._v("\n                Create User\n            ")])],1):e._e()],1),e._v(" "),s("div",{staticClass:"bg-white py-6 shadow-subtle rounded-lg"},[s("h1",{staticClass:"font-semibold px-6 text-gray-850"},[e._v("\n            Search\n            "),s("button",{staticClass:"\n                    text-sm text-theme-base-subtle-contrast\n                    focus:outline-none focus:text-theme-primary\n                    hover:text-theme-primary\n                ",on:{click:e.setSearchOptions}},[e._v("\n                (Clear)\n            ")])]),e._v(" "),s("div",{staticClass:"\n                flex flex-col items-center mt-4 px-6 space-y-4\n                md:flex-row md:space-y-0 md:space-x-8\n            "},[s("div",{staticClass:"w-full md:w-1/3"},[s("input-group",{attrs:{"input-autocomplete":"user_first_name_search","input-class":"form-control form-control-short","input-id":"user_first_name","input-name":"user_first_name","input-placeholder":"First Name","input-type":"text","label-hidden":!0,"label-text":"First Name"},model:{value:e.editableSearchOptions.user_first_name,callback:function(t){e.$set(e.editableSearchOptions,"user_first_name",t)},expression:"editableSearchOptions.user_first_name"}})],1),e._v(" "),s("div",{staticClass:"w-full md:w-1/3"},[s("input-group",{attrs:{"input-autocomplete":"user_last_name_search","input-class":"form-control form-control-short","input-id":"user_last_name","input-name":"user_last_name","input-placeholder":"Last Name","input-type":"text","label-hidden":!0,"label-text":"Last Name"},model:{value:e.editableSearchOptions.user_last_name,callback:function(t){e.$set(e.editableSearchOptions,"user_last_name",t)},expression:"editableSearchOptions.user_last_name"}})],1),e._v(" "),s("div",{staticClass:"w-full md:w-1/3"},[s("input-group",{attrs:{"input-autocomplete":"user_email_search","input-class":"form-control form-control-short","input-id":"user_email","input-name":"user_email","input-placeholder":"Email","input-type":"text","label-hidden":!0,"label-text":"Email"},model:{value:e.editableSearchOptions.user_email,callback:function(t){e.$set(e.editableSearchOptions,"user_email",t)},expression:"editableSearchOptions.user_email"}})],1)]),e._v(" "),e.usersData?[s("div",{staticClass:"block mt-8 overflow-x-auto w-full"},[s("table",{staticClass:"table table-hover table-striped w-full"},[s("thead",[s("tr",[s("th",[e._v("Name")]),e._v(" "),s("th",[e._v("Email")]),e._v(" "),e.show_users_actions?s("th"):e._e()])]),e._v(" "),s("tbody",e._l(e.usersData,(function(t,n){return s("tr",{key:"user-"+t.id},[s("td",[e._v("\n                                "+e._s(t.name)+"\n                            ")]),e._v(" "),s("td",[e._v("\n                                "+e._s(t.email)+"\n                            ")]),e._v(" "),e.show_users_actions?s("td",[s("div",{staticClass:"flex flex-row items-center justify-end -mx-1"},[e.userCan("users.edit")?s("inertia-link",{staticClass:"\n                                            flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide\n                                            focus:outline-none focus:ring\n                                            hover:bg-theme-info hover:text-theme-info-contrast\n                                        ",attrs:{href:e.$route("admin.users.edit",t.id),title:"Edit User"}},[s("icon-edit",{staticClass:"w-4"})],1):e._e(),e._v(" "),e.userCan("users.delete")?s("button",{staticClass:"\n                                            flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide\n                                            focus:outline-none focus:ring\n                                            hover:bg-theme-danger hover:text-theme-danger-contrast\n                                        ",attrs:{disabled:e.isUserCurrent(t),title:"Delete User"},on:{click:function(s){return e.checkUserDelete(t)}}},[s("icon-trash",{staticClass:"w-4"})],1):e._e()],1)]):e._e()])})),0)])])]:s("p",{staticClass:"bg-theme-base-subtle mt-6 mx-6 px-6 py-4 rounded text-center text-theme-base-subtle-contrast"},[e._v("\n            No users\n        ")]),e._v(" "),e.showPagination?s("div",{staticClass:"flex flex-row justify-center mt-12 px-6"},[s("pagination",{attrs:{pagination:e.users.pagination}})],1):e._e(),e._v(" "),s("confirmation-modal",{attrs:{"confirm-text":"Delete","confirm-type":"danger","show-modal":e.showDeleteModal,"message-text":e.deleteModalText},on:{cancelAction:e.cancelUserDelete,closeModal:e.cancelUserDelete,confirmAction:e.confirmUserDelete}})],2)])}),[],!1,null,null,null).exports}}]);