"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7160],{7160:(t,e,s)=>{s.r(e),s.d(e,{default:()=>r});const a={name:"AuthPasswordEmail",components:{InputGroup:s(6786).A},layout:"auth-layout",data:function(){return{form:{email:""}}},methods:{submit:function(){this.$inertia.post(this.$route("password.email"),this.form)}}};const r=(0,s(4486).A)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"auth-card-container"},[e("div",{staticClass:"auth-card"},[e("h1",{staticClass:"auth-header"},[t._v("\n            Password Reset\n        ")]),t._v(" "),t.$page.props.flash.status?e("p",{staticClass:"pb-8 px-6 text-center text-green-700"},[t._v("\n            "+t._s(t.$page.props.flash.status)+"\n        ")]):e("form",{staticClass:"px-6",on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("input-group",{staticClass:"mt-4",attrs:{"error-message":t.getPageErrorMessage("email"),"input-autocomplete":"email","input-class":"auth-input","input-id":"email","input-name":"email","input-required":!0,"input-type":"email","label-text":"Email"},on:{errorHidden:function(e){return t.clearPageErrorMessage("email")}},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),t._m(0)],1)]),t._v(" "),e("div",{staticClass:"flex justify-between mt-4"},[e("inertia-link",{staticClass:"text-gray-300 text-sm tracking-wide hover:text-theme-base-subtle-contrast",attrs:{href:t.$route("login")}},[t._v("\n            Login\n        ")]),t._v(" "),t.$routeCheck("register")?e("inertia-link",{staticClass:"text-gray-300 text-sm tracking-wide hover:text-theme-base-subtle-contrast",attrs:{href:t.$route("register")}},[t._v("\n            Register\n        ")]):t._e()],1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"flex flex-row items-center justify-between mt-4 py-6"},[t("button",{staticClass:"bg-theme-primary px-4 py-2 rounded shadow text-theme-primary-contrast focus:outline-none focus:ring focus:ring-primary hover:bg-theme-primary-hover hover:shadow-lg transition-all ease-in-out duration-300",attrs:{type:"submit"}},[this._v("\n                    Send Password Reset Link\n                ")])])}],!1,null,null,null).exports}}]);