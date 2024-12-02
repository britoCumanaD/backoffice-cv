"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3688],{3688:(t,e,r)=>{r.r(e),r.d(e,{default:()=>o});const n={name:"WebsiteError",layout:"website-layout",props:{status:{required:!0,type:Number}},computed:{errorButtonClass:function(){return this.isAllowedError?{403:"bg-theme-warning text-theme-warning-contrast hover:bg-theme-warning-contrast hover:text-theme-warning",404:"bg-theme-info text-theme-info-contrast hover:bg-theme-info-contrast hover:text-theme-info",500:"bg-theme-danger text-theme-danger-contrast hover:bg-theme-danger-contrast hover:text-theme-danger"}[this.status]:"bg-theme-danger text-theme-danger-contrast hover:bg-theme-danger-contrast hover:text-theme-danger"},errorDescription:function(){return this.isAllowedError?{403:"Sorry, you are forbidden from accessing this page.",404:"Sorry, the page you are looking for could not be found.",500:"Whoops, something went wrong on our servers. We are looking into it.",503:"Sorry, we are doing some maintenance. Please check back soon."}[this.status]:"Whoops, something went wrong on our servers. We are looking into it."},errorTitleCase:function(){return this.isAllowedError?{403:"text-theme-warning-contrast",404:"text-theme-info-contrast",500:"text-theme-danger-contrast",503:"text-theme-primary"}[this.status]:"text-theme-danger-contrast"},isAllowedError:function(){return[403,404,500,503].indexOf(this.status)>=0}}};const o=(0,r(4486).A)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"flex flex-col items-center justify-center h-full min-h-screen p-6"},[e("div",{staticClass:"text-center"},[e("h1",{staticClass:"font-black text-7xl text-center",class:t.errorTitleCase},[t._v("\n            "+t._s(t.isAllowedError?t.status:"Error")+"\n        ")]),t._v(" "),e("p",{staticClass:"font-semibold mt-4 max-w-full text-center text-theme-base-subtle-contrast text-lg w-72"},[t._v("\n            "+t._s(t.errorDescription)+"\n        ")]),t._v(" "),503!==t.status?e("inertia-link",{staticClass:"button font-semibold inline-block mt-8 mx-auto px-12 text-lg",class:t.errorButtonClass,attrs:{href:"/"}},[t._v("\n            Go Home\n        ")]):t._e()],1)])}),[],!1,null,null,null).exports}}]);