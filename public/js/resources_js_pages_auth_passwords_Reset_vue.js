"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_auth_passwords_Reset_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/passwords/Reset.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/passwords/Reset.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_core_forms_InputGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/core/forms/InputGroup */ "./resources/js/components/core/forms/InputGroup.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AuthPasswordReset",
  components: {
    InputGroup: _components_core_forms_InputGroup__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  layout: 'auth-layout',
  props: {
    email: {
      "default": '',
      type: String
    },
    token: {
      "default": '',
      type: String
    }
  },
  data: function data() {
    return {
      form: {
        email: '',
        password: '',
        password_confirmation: '',
        token: ''
      }
    };
  },
  mounted: function mounted() {
    this.form.email = this.email;
    this.form.token = this.token;
  },
  methods: {
    submit: function submit() {
      this.$inertia.post(this.$route('password.update'), this.form);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/passwords/Reset.vue?vue&type=template&id=8a3ce0cc":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/passwords/Reset.vue?vue&type=template&id=8a3ce0cc ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "auth-card-container"
  }, [_c("div", {
    staticClass: "auth-card"
  }, [_c("h1", {
    staticClass: "auth-header"
  }, [_vm._v("\n            Password Reset\n        ")]), _vm._v(" "), _c("form", {
    staticClass: "px-6",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      }
    }
  }, [_c("input-group", {
    staticClass: "mt-4",
    attrs: {
      "error-message": _vm.getPageErrorMessage("email"),
      "input-autocomplete": "email",
      "input-class": "auth-input",
      "input-id": "email",
      "input-name": "email",
      "input-required": true,
      "input-type": "email",
      "label-text": "Email"
    },
    on: {
      errorHidden: function errorHidden($event) {
        return _vm.clearPageErrorMessage("email");
      }
    },
    model: {
      value: _vm.form.email,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "email", $$v);
      },
      expression: "form.email"
    }
  }), _vm._v(" "), _c("input-group", {
    staticClass: "mt-4",
    attrs: {
      "error-message": _vm.getPageErrorMessage("password"),
      "input-autocomplete": "new-password",
      "input-autofocus": true,
      "input-class": "auth-input",
      "input-id": "password",
      "input-name": "password",
      "input-required": true,
      "input-type": "password",
      "label-text": "Password"
    },
    on: {
      errorHidden: function errorHidden($event) {
        return _vm.clearPageErrorMessage("password");
      }
    },
    model: {
      value: _vm.form.password,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "password", $$v);
      },
      expression: "form.password"
    }
  }), _vm._v(" "), _c("input-group", {
    staticClass: "mt-4",
    attrs: {
      "error-message": _vm.getPageErrorMessage("password_confirmation"),
      "input-autocomplete": "new-password",
      "input-class": "auth-input",
      "input-id": "password_confirmation",
      "input-name": "password_confirmation",
      "input-required": true,
      "input-type": "password",
      "label-text": "Confirm Password"
    },
    on: {
      errorHidden: function errorHidden($event) {
        return _vm.clearPageErrorMessage("password_confirmation");
      }
    },
    model: {
      value: _vm.form.password_confirmation,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "password_confirmation", $$v);
      },
      expression: "form.password_confirmation"
    }
  }), _vm._v(" "), _vm._m(0)], 1)]), _vm._v(" "), _c("div", {
    staticClass: "flex justify-between mt-4"
  }, [_c("inertia-link", {
    staticClass: "text-gray-300 text-sm tracking-wide hover:text-theme-base-subtle-contrast",
    attrs: {
      href: _vm.$route("login")
    }
  }, [_vm._v("\n            Login\n        ")]), _vm._v(" "), _vm.$routeCheck("register") ? _c("inertia-link", {
    staticClass: "text-gray-300 text-sm tracking-wide hover:text-theme-base-subtle-contrast",
    attrs: {
      href: _vm.$route("register")
    }
  }, [_vm._v("\n            Register\n        ")]) : _vm._e()], 1)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "flex flex-row items-center justify-between mt-4 py-6"
  }, [_c("button", {
    staticClass: "bg-theme-primary px-4 py-2 rounded shadow text-theme-primary-contrast focus:outline-none focus:ring focus:ring-primary hover:bg-theme-primary-hover hover:shadow-lg transition-all ease-in-out duration-300",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("\n                    Send Password Reset Link\n                ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/auth/passwords/Reset.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/auth/passwords/Reset.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Reset_vue_vue_type_template_id_8a3ce0cc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reset.vue?vue&type=template&id=8a3ce0cc */ "./resources/js/pages/auth/passwords/Reset.vue?vue&type=template&id=8a3ce0cc");
/* harmony import */ var _Reset_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reset.vue?vue&type=script&lang=js */ "./resources/js/pages/auth/passwords/Reset.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Reset_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reset_vue_vue_type_template_id_8a3ce0cc__WEBPACK_IMPORTED_MODULE_0__.render,
  _Reset_vue_vue_type_template_id_8a3ce0cc__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/auth/passwords/Reset.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/auth/passwords/Reset.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/auth/passwords/Reset.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Reset.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/passwords/Reset.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/auth/passwords/Reset.vue?vue&type=template&id=8a3ce0cc":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/auth/passwords/Reset.vue?vue&type=template&id=8a3ce0cc ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_vue_vue_type_template_id_8a3ce0cc__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_vue_vue_type_template_id_8a3ce0cc__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_vue_vue_type_template_id_8a3ce0cc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Reset.vue?vue&type=template&id=8a3ce0cc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/passwords/Reset.vue?vue&type=template&id=8a3ce0cc");


/***/ })

}]);