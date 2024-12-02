"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_crm_form_submission_Show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/crm/form_submission/Show.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/crm/form_submission/Show.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AdminCrmFormSubmissionShow",
  layout: 'admin-layout',
  props: {
    formSubmission: {
      required: true,
      type: Object
    }
  },
  data: function data() {
    return {
      marketingFields: {
        marketing_email: 'Email',
        marketing_sms: 'SMS',
        marketing_telephone: 'Telephone'
      }
    };
  },
  computed: {
    enabledFormMarketingFields: function enabledFormMarketingFields() {
      var _this = this;
      var fields = {};
      try {
        lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(this.marketingFields, function (label, slug) {
          if (_this.formSubmission.form.hasOwnProperty(slug)) {
            fields[slug] = _this.formSubmission.form[slug];
          } else {
            fields[slug] = false;
          }
        });
        return fields;
      } catch (e) {
        return fields;
      }
    }
  },
  methods: {
    getFormSubmissionDataField: function getFormSubmissionDataField(slug) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
      try {
        return this.formSubmission.data[slug];
      } catch (e) {
        return defaultValue;
      }
    },
    getFormSubmissionMarketingField: function getFormSubmissionMarketingField(slug) {
      try {
        return Boolean(this.getFormSubmissionDataField(slug, false)) ? 'Enabled' : 'Disabled';
      } catch (e) {
        return 'An error occurred.';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/crm/form_submission/Show.vue?vue&type=template&id=5bcf5502":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/crm/form_submission/Show.vue?vue&type=template&id=5bcf5502 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "max-w-5xl mx-auto"
  }, [_c("div", {
    staticClass: "flex flex-row items-center mb-6"
  }, [_c("h1", {
    staticClass: "font-medium mr-auto text-lg"
  }, [_vm._v("\n            Form Submission\n        ")]), _vm._v(" "), _c("inertia-link", {
    staticClass: "button button-default-responsive button-primary-subtle flex flex-row items-center",
    attrs: {
      href: _vm.$route("admin.crm.form-submissions.index")
    }
  }, [_c("icon-chevron-left", {
    staticClass: "w-5 md:mr-2"
  }), _vm._v(" "), _c("span", {
    staticClass: "hidden md:inline"
  }, [_vm._v("\n                All Submissions\n            ")])], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "bg-white py-6 shadow-subtle rounded-lg"
  }, [_c("div", {
    staticClass: "block px-6 w-full"
  }, [_c("h2", {
    staticClass: "font-semibold"
  }, [_vm._v("\n                Submission Details\n            ")]), _vm._v(" "), _c("p", {
    staticClass: "mt-2"
  }, [_c("span", {
    staticClass: "block font-semibold text-theme-base-subtle-contrast text-xs"
  }, [_vm._v("\n                    Form Name\n                ")]), _vm._v("\n                " + _vm._s(_vm.formSubmission.form.name) + "\n            ")]), _vm._v(" "), _c("p", {
    staticClass: "mt-2"
  }, [_c("span", {
    staticClass: "block font-semibold text-theme-base-subtle-contrast text-xs"
  }, [_vm._v("\n                    Submitted At\n                ")]), _vm._v("\n                " + _vm._s(_vm._f("humanFriendlyDateTime")(_vm.formSubmission.submitted_at)) + "\n            ")])])]), _vm._v(" "), _vm.formSubmission.contact ? _c("div", {
    staticClass: "bg-white mt-6 py-6 shadow-subtle rounded-lg"
  }, [_c("div", {
    staticClass: "block px-6 w-full"
  }, [_c("h2", {
    staticClass: "font-semibold"
  }, [_vm._v("\n                Contact Details\n\n                "), _vm._v(" "), _vm.userCan("crm_contacts.edit") ? _c("inertia-link", {
    staticClass: "text-sm text-theme-base-subtle-contrast",
    attrs: {
      href: _vm.$route("admin.crm.contacts.edit", _vm.formSubmission.contact_id)
    }
  }, [_vm._v("\n                    (View Contact)\n                ")]) : _vm._e()], 1), _vm._v(" "), _c("p", {
    staticClass: "mt-2"
  }, [_c("span", {
    staticClass: "block font-semibold text-theme-base-subtle-contrast text-xs"
  }, [_vm._v("\n                    Name\n                ")]), _vm._v("\n                " + _vm._s(_vm.formSubmission.contact.name_with_title ? _vm.formSubmission.contact.name_with_title : "-") + "\n            ")]), _vm._v(" "), _c("p", {
    staticClass: "mt-2"
  }, [_c("span", {
    staticClass: "block font-semibold text-theme-base-subtle-contrast text-xs"
  }, [_vm._v("\n                    Email\n                ")]), _vm._v("\n                " + _vm._s(_vm.formSubmission.contact.email) + "\n            ")])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "bg-white mt-6 py-6 shadow-subtle rounded-lg"
  }, [_c("div", {
    staticClass: "block px-6 w-full"
  }, [_c("h2", {
    staticClass: "font-semibold"
  }, [_vm._v("\n                Form Submission Data\n            ")]), _vm._v(" "), _vm._l(_vm.formSubmission.form.form_fields, function (formField) {
    return _c("p", {
      key: "form-field-".concat(formField.slug),
      staticClass: "mt-2"
    }, [_c("span", {
      staticClass: "block font-semibold text-theme-base-subtle-contrast text-xs"
    }, [_vm._v("\n                    " + _vm._s(formField.name) + "\n                ")]), _vm._v("\n                " + _vm._s(_vm.getFormSubmissionDataField(formField.slug)) + "\n            ")]);
  })], 2)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/admin/crm/form_submission/Show.vue":
/*!***************************************************************!*\
  !*** ./resources/js/pages/admin/crm/form_submission/Show.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_5bcf5502__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=5bcf5502 */ "./resources/js/pages/admin/crm/form_submission/Show.vue?vue&type=template&id=5bcf5502");
/* harmony import */ var _Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js */ "./resources/js/pages/admin/crm/form_submission/Show.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_5bcf5502__WEBPACK_IMPORTED_MODULE_0__.render,
  _Show_vue_vue_type_template_id_5bcf5502__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/crm/form_submission/Show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/crm/form_submission/Show.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/admin/crm/form_submission/Show.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/crm/form_submission/Show.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/crm/form_submission/Show.vue?vue&type=template&id=5bcf5502":
/*!*********************************************************************************************!*\
  !*** ./resources/js/pages/admin/crm/form_submission/Show.vue?vue&type=template&id=5bcf5502 ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_5bcf5502__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_5bcf5502__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_5bcf5502__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=template&id=5bcf5502 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/crm/form_submission/Show.vue?vue&type=template&id=5bcf5502");


/***/ })

}]);