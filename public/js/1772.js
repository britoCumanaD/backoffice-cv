"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1772],{1772:(t,s,e)=>{e.r(s),e.d(s,{default:()=>l});const a={name:"AdminProfileIndex",layout:"admin-layout",props:{auth:Object,profile:Object}};const l=(0,e(4486).A)(a,(function(){var t=this,s=t._self._c;return s("section",{staticClass:"max-w-5xl mx-auto"},[t.userCan("profile.edit")?s("div",{staticClass:"flex flex-row items-center mb-6"},[s("h1",{staticClass:"font-medium mr-auto text-lg"},[t._v("\n            My Profile\n        ")]),t._v(" "),s("inertia-link",{staticClass:"button button-default-responsive button-primary-subtle flex flex-row items-center",attrs:{href:t.$route("admin.profile.edit")}},[s("icon-edit",{staticClass:"w-5 md:mr-2"}),t._v(" "),s("span",{staticClass:"hidden md:inline"},[t._v("\n                Edit Profile\n            ")])],1)],1):t._e(),t._v(" "),s("div",{staticClass:"bg-white py-6 shadow-subtle rounded-lg"},[s("div",{staticClass:"block px-6 w-full"},[s("p",[s("span",{staticClass:"block font-semibold text-theme-base-subtle-contrast text-xs"},[t._v("\n                    First Name\n                ")]),t._v("\n                "+t._s(t.profile.first_name)+"\n            ")]),t._v(" "),s("p",{staticClass:"mt-2"},[s("span",{staticClass:"block font-semibold text-theme-base-subtle-contrast text-xs"},[t._v("\n                    Last Name\n                ")]),t._v("\n                "+t._s(t.profile.last_name)+"\n            ")]),t._v(" "),s("p",{staticClass:"mt-2"},[s("span",{staticClass:"block font-semibold text-theme-base-subtle-contrast text-xs"},[t._v("\n                    Email\n                ")]),t._v("\n                "+t._s(t.profile.email)+"\n            ")])])])])}),[],!1,null,null,null).exports}}]);