"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_auth_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Register.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Register.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_core_forms_InputGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/core/forms/InputGroup */ "./resources/js/components/core/forms/InputGroup.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AuthRegister",
  components: {
    InputGroup: _components_core_forms_InputGroup__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  layout: 'auth-layout',
  data: function data() {
    return {
      form: {
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        password_confirmation: ''
      }
    };
  },
  methods: {
    submit: function submit() {
      this.$inertia.post(this.$route('register'), this.form);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("\n            Welcome\n        ")]), _vm._v(" "), _c("form", {
    staticClass: "px-6",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "flex flex-col md:flex-row md:space-x-2"
  }, [_c("input-group", {
    staticClass: "mt-4",
    attrs: {
      "error-message": _vm.getPageErrorMessage("first_name"),
      "input-autocomplete": "given-name",
      "input-autofocus": true,
      "input-class": "auth-input",
      "input-id": "first_name",
      "input-name": "first_name",
      "input-required": true,
      "input-type": "first_name",
      "label-text": "First Name"
    },
    on: {
      errorHidden: function errorHidden($event) {
        return _vm.clearPageErrorMessage("first_name");
      }
    },
    model: {
      value: _vm.form.first_name,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "first_name", $$v);
      },
      expression: "form.first_name"
    }
  }), _vm._v(" "), _c("input-group", {
    staticClass: "mt-4",
    attrs: {
      "error-message": _vm.getPageErrorMessage("last_name"),
      "input-autocomplete": "family-name",
      "input-class": "auth-input",
      "input-id": "last_name",
      "input-name": "last_name",
      "input-required": true,
      "input-type": "last_name",
      "label-text": "Last Name"
    },
    on: {
      errorHidden: function errorHidden($event) {
        return _vm.clearPageErrorMessage("last_name");
      }
    },
    model: {
      value: _vm.form.last_name,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "last_name", $$v);
      },
      expression: "form.last_name"
    }
  })], 1), _vm._v(" "), _c("input-group", {
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
  }), _vm._v(" "), _c("div", {
    staticClass: "flex flex-row items-center justify-between mt-4 py-6"
  }, [_c("button", {
    staticClass: "bg-theme-primary px-4 py-2 rounded shadow text-theme-primary-contrast focus:outline-none focus:ring focus:ring-primary hover:bg-theme-primary-hover hover:shadow-lg transition-all ease-in-out duration-300",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("\n                    Register\n                ")]), _vm._v(" "), _c("inertia-link", {
    staticClass: "text-gray-900 hover:text-theme-primary transition-all ease-in-out duration-300",
    attrs: {
      href: _vm.$route("login")
    }
  }, [_vm._v("\n                    Already registered?\n                ")])], 1)], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/auth/Register.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/auth/Register.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_2ebeb09e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=2ebeb09e */ "./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e");
/* harmony import */ var _Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js */ "./resources/js/pages/auth/Register.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_2ebeb09e__WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_2ebeb09e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/auth/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/auth/Register.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/auth/Register.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Register.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_2ebeb09e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_2ebeb09e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_2ebeb09e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=2ebeb09e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e");


/***/ })

}]);