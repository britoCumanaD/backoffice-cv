"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_cms_template_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/template/Index.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/template/Index.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _components_core_modals_ConfirmationModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/core/modals/ConfirmationModal */ "./resources/js/components/core/modals/ConfirmationModal.vue");
/* harmony import */ var _components_core_forms_InputGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/core/forms/InputGroup */ "./resources/js/components/core/forms/InputGroup.vue");
/* harmony import */ var _components_core_forms_SelectGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/core/forms/SelectGroup */ "./resources/js/components/core/forms/SelectGroup.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AdminCmsTemplateIndex",
  components: {
    ConfirmationModal: _components_core_modals_ConfirmationModal__WEBPACK_IMPORTED_MODULE_2__["default"],
    InputGroup: _components_core_forms_InputGroup__WEBPACK_IMPORTED_MODULE_3__["default"],
    SelectGroup: _components_core_forms_SelectGroup__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  layout: 'admin-layout',
  props: {
    searchOptions: {
      required: true,
      type: Object | Array
    },
    templates: {
      required: true,
      type: Object
    },
    templateTypes: {
      required: true,
      type: Object
    }
  },
  data: function data() {
    return {
      editableSearchOptions: {
        per_page: 15,
        template_name: '',
        template_slug: '',
        template_type: ''
      },
      isInitialised: false,
      isLoadingDelete: false,
      showDeleteModal: false,
      templateToDelete: null
    };
  },
  computed: {
    deleteModalText: function deleteModalText() {
      try {
        return 'Do you really want to delete \'' + this.templateToDelete.name + '\'?';
      } catch (e) {
        return 'Do you really want to delete this template?';
      }
    },
    showPagination: function showPagination() {
      try {
        return this.templates.pagination.last_page > 1;
      } catch (e) {
        return false;
      }
    },
    showTemplateActions: function showTemplateActions() {
      return this.userCan('cms_advanced.edit') || this.userCan('cms_advanced.delete');
    },
    templatesData: function templatesData() {
      if (!this.templates || !this.templates.data || this.templates.data.length < 1) {
        return false;
      }
      return this.templates.data;
    }
  },
  mounted: function mounted() {
    this.editableSearchOptions = _objectSpread(_objectSpread({}, this.editableSearchOptions), this.$page.props.searchOptions);
    this.setSearchOptions(this.searchOptions);
  },
  methods: {
    cancelDelete: function cancelDelete() {
      if (!this.isLoadingDelete) {
        this.showDeleteModal = false;
        this.templateToDelete = null;
      }
    },
    checkDelete: function checkDelete(template) {
      this.showDeleteModal = true;
      this.templateToDelete = template;
    },
    confirmDelete: function confirmDelete() {
      if (this.isLoadingDelete) {
        return this.$errorToast('It\'s only possible to delete one template at a time.');
      }
      this.$inertia["delete"](this.$route('admin.cms.templates.destroy', this.templateToDelete.id), {
        only: ['flash', 'templates']
      });
      this.templateToDelete = null;
      this.showDeleteModal = false;
    },
    getTemplateTypeLabel: function getTemplateTypeLabel(type_slug) {
      try {
        return this.templateTypes.hasOwnProperty(type_slug) ? this.templateTypes[type_slug] : type_slug;
      } catch (e) {
        return type_slug;
      }
    },
    onSearchOptionsUpdate: lodash__WEBPACK_IMPORTED_MODULE_0___default().debounce(function () {
      if (!this.isInitialised) {
        this.isInitialised = true;

        // If there are already search results, don't attempt search
        if (this.templatesData) {
          return;
        }
      }
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.get(this.$route('admin.cms.templates.index'), this.editableSearchOptions, {
        only: ['templates'],
        preserveState: true
      });
    }, 500),
    setSearchOptions: function setSearchOptions() {
      var new_options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = {
        per_page: 15,
        template_name: '',
        template_slug: '',
        template_type: ''
      };
      try {
        // Overwrite the defaults with any new options
        lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(new_options, function (option, key) {
          options[key] = option;
        });
      } catch (e) {
        console.log(e);
      }
      this.editableSearchOptions = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(options);
    }
  },
  watch: {
    editableSearchOptions: {
      deep: true,
      handler: 'onSearchOptionsUpdate'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/template/Index.vue?vue&type=template&id=7a560e0c":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/template/Index.vue?vue&type=template&id=7a560e0c ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", [_c("div", {
    staticClass: "flex flex-row items-center mb-6"
  }, [_c("h1", {
    staticClass: "font-medium mr-auto text-lg"
  }, [_vm._v("\n             Templates\n        ")]), _vm._v(" "), _vm.userCan("cms_advanced.create") ? _c("inertia-link", {
    staticClass: "button button-default-responsive button-primary flex flex-row items-center",
    attrs: {
      href: _vm.$route("admin.cms.templates.create")
    }
  }, [_c("icon-plus", {
    staticClass: "w-5 md:mr-2"
  }), _vm._v(" "), _c("span", {
    staticClass: "hidden md:inline"
  }, [_vm._v("\n                Create Template\n            ")])], 1) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "bg-white py-6 shadow-subtle rounded-lg"
  }, [_c("h1", {
    staticClass: "font-semibold px-6 text-gray-850"
  }, [_vm._v("\n            Search\n            "), _c("button", {
    staticClass: "text-sm text-theme-base-subtle-contrast focus:outline-none focus:text-theme-primary hover:text-theme-primary",
    on: {
      click: _vm.setSearchOptions
    }
  }, [_vm._v("\n                (Clear)\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "flex flex-col items-center mt-4 px-6 space-y-4 md:flex-row md:space-y-0 md:space-x-8"
  }, [_c("div", {
    staticClass: "w-full md:w-1/3"
  }, [_c("input-group", {
    attrs: {
      "input-autocomplete": "template_name_search",
      "input-class": "form-control form-control-short",
      "input-id": "template_name",
      "input-name": "template_name",
      "input-placeholder": "Template Name",
      "input-type": "text",
      "label-hidden": true,
      "label-text": "Template Name"
    },
    model: {
      value: _vm.editableSearchOptions.template_name,
      callback: function callback($$v) {
        _vm.$set(_vm.editableSearchOptions, "template_name", $$v);
      },
      expression: "editableSearchOptions.template_name"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "w-full md:w-1/3"
  }, [_c("input-group", {
    attrs: {
      "input-autocomplete": "template_slug_search",
      "input-class": "form-control form-control-short",
      "input-id": "template_slug",
      "input-name": "template_slug",
      "input-placeholder": "Template Slug",
      "input-type": "text",
      "label-hidden": true,
      "label-text": "Template Slug"
    },
    model: {
      value: _vm.editableSearchOptions.template_slug,
      callback: function callback($$v) {
        _vm.$set(_vm.editableSearchOptions, "template_slug", $$v);
      },
      expression: "editableSearchOptions.template_slug"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "w-full md:w-1/3"
  }, [_c("select-group", {
    attrs: {
      "label-hidden": true,
      "label-text": "Template Type",
      "input-any-option-enabled": true,
      "input-any-option-label": "Template Type",
      "input-class": "form-control form-control-short",
      "input-id": "template_type",
      "input-name": "template_type",
      "input-options": _vm.templateTypes
    },
    model: {
      value: _vm.editableSearchOptions.template_type,
      callback: function callback($$v) {
        _vm.$set(_vm.editableSearchOptions, "template_type", $$v);
      },
      expression: "editableSearchOptions.template_type"
    }
  })], 1)]), _vm._v(" "), !_vm.templatesData ? _c("p", {
    staticClass: "bg-theme-base-subtle mt-8 mx-6 px-6 py-4 rounded text-center text-theme-base-subtle-contrast"
  }, [_vm._v("\n            No templates\n        ")]) : [_c("div", {
    staticClass: "block mt-8 overflow-x-auto w-full"
  }, [_c("table", {
    staticClass: "table table-hover table-striped w-full"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Name")]), _vm._v(" "), _c("th", [_vm._v("Slug")]), _vm._v(" "), _c("th", [_vm._v("Type")]), _vm._v(" "), _vm.showTemplateActions ? _c("th") : _vm._e()])]), _vm._v(" "), _c("tbody", _vm._l(_vm.templatesData, function (template, index) {
    return _c("tr", {
      key: "template-".concat(template.id)
    }, [_c("td", [_vm._v("\n                            " + _vm._s(template.name) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(template.slug) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(_vm.getTemplateTypeLabel(template.type)) + "\n                        ")]), _vm._v(" "), _vm.showTemplateActions ? _c("td", [_c("div", {
      staticClass: "flex flex-row items-center justify-end -mx-1"
    }, [_vm.userCan("cms_advanced.edit") ? _c("inertia-link", {
      staticClass: "flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide focus:outline-none focus:ring hover:bg-theme-info hover:text-theme-info-contrast",
      attrs: {
        href: _vm.$route("admin.cms.templates.edit", template.id),
        title: "Edit Template"
      }
    }, [_c("icon-edit", {
      staticClass: "w-4"
    })], 1) : _vm._e(), _vm._v(" "), _vm.userCan("cms_advanced.delete") ? _c("button", {
      staticClass: "flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide focus:outline-none focus:ring hover:bg-theme-danger hover:text-theme-danger-contrast",
      attrs: {
        title: "Delete Template"
      },
      on: {
        click: function click($event) {
          return _vm.checkDelete(template);
        }
      }
    }, [_c("icon-trash", {
      staticClass: "w-4"
    })], 1) : _vm._e()], 1)]) : _vm._e()]);
  }), 0)])]), _vm._v(" "), _vm.showPagination ? _c("div", {
    staticClass: "flex flex-row justify-center mt-12 px-6"
  }, [_c("pagination", {
    attrs: {
      pagination: _vm.templates.pagination
    }
  })], 1) : _vm._e()], _vm._v(" "), _c("confirmation-modal", {
    attrs: {
      "confirm-text": "Delete",
      "confirm-type": "danger",
      "show-modal": _vm.showDeleteModal,
      "message-text": _vm.deleteModalText
    },
    on: {
      cancelAction: _vm.cancelDelete,
      closeModal: _vm.cancelDelete,
      confirmAction: _vm.confirmDelete
    }
  })], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/admin/cms/template/Index.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/admin/cms/template/Index.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_7a560e0c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=7a560e0c */ "./resources/js/pages/admin/cms/template/Index.vue?vue&type=template&id=7a560e0c");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/pages/admin/cms/template/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_7a560e0c__WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_7a560e0c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/cms/template/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/cms/template/Index.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/admin/cms/template/Index.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/template/Index.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/cms/template/Index.vue?vue&type=template&id=7a560e0c":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/admin/cms/template/Index.vue?vue&type=template&id=7a560e0c ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7a560e0c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7a560e0c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7a560e0c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=7a560e0c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/template/Index.vue?vue&type=template&id=7a560e0c");


/***/ })

}]);