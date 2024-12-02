"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_cms_layout_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/layout/Index.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/layout/Index.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
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
  name: "AdminCmsLayoutIndex",
  components: {
    ConfirmationModal: _components_core_modals_ConfirmationModal__WEBPACK_IMPORTED_MODULE_2__["default"],
    InputGroup: _components_core_forms_InputGroup__WEBPACK_IMPORTED_MODULE_3__["default"],
    SelectGroup: _components_core_forms_SelectGroup__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  layout: 'admin-layout',
  props: {
    layouts: {
      required: true,
      type: Object
    },
    searchOptions: {
      required: true,
      type: Object | Array
    },
    templates: {
      required: true,
      type: Object | Array
    }
  },
  data: function data() {
    return {
      editableSearchOptions: {
        per_page: 15,
        layout_name: '',
        layout_slug: '',
        template_id: ''
      },
      isInitialised: false,
      isLoadingDelete: false,
      showDeleteModal: false,
      layoutToDelete: null
    };
  },
  mounted: function mounted() {
    this.editableSearchOptions = _objectSpread(_objectSpread({}, this.editableSearchOptions), this.$page.props.searchOptions);
    this.setSearchOptions(this.searchOptions);
  },
  computed: {
    deleteModalText: function deleteModalText() {
      try {
        return 'Do you really want to delete \'' + this.layoutToDelete.name + '\'?';
      } catch (e) {
        return 'Do you really want to delete this layout?';
      }
    },
    isTemplates: function isTemplates() {
      try {
        return Object.keys(this.templates).length;
      } catch (e) {
        return false;
      }
    },
    showPagination: function showPagination() {
      try {
        return this.layouts.pagination.last_page > 1;
      } catch (e) {
        return false;
      }
    },
    showLayoutActions: function showLayoutActions() {
      return this.userCan('cms_advanced.edit') || this.userCan('cms_advanced.delete');
    },
    layoutsData: function layoutsData() {
      if (!this.layouts || !this.layouts.data || this.layouts.data.length < 1) {
        return false;
      }
      return this.layouts.data;
    }
  },
  methods: {
    cancelDelete: function cancelDelete() {
      if (!this.isLoadingDelete) {
        this.showDeleteModal = false;
        this.layoutToDelete = null;
      }
    },
    checkDelete: function checkDelete(layout) {
      this.showDeleteModal = true;
      this.layoutToDelete = layout;
    },
    confirmDelete: function confirmDelete() {
      if (this.isLoadingDelete) {
        return this.$errorToast('It\'s only possible to delete one layouts at a time.');
      }
      this.$inertia["delete"](this.$route('admin.cms.layouts.destroy', this.layoutToDelete.id), {
        only: ['flash', 'layouts']
      });
      this.layoutToDelete = null;
      this.showDeleteModal = false;
    },
    onSearchOptionsUpdate: lodash__WEBPACK_IMPORTED_MODULE_0___default().debounce(function () {
      if (!this.isInitialised) {
        this.isInitialised = true;

        // If there are already search results, don't attempt search
        if (this.layoutsData) {
          return;
        }
      }
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.get(this.$route('admin.cms.layouts.index'), this.editableSearchOptions, {
        only: ['layouts'],
        preserveState: true
      });
    }, 500),
    setSearchOptions: function setSearchOptions() {
      var new_options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = {
        per_page: 15,
        layout_name: '',
        layout_slug: '',
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/layout/Index.vue?vue&type=template&id=4ab57a7c":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/layout/Index.vue?vue&type=template&id=4ab57a7c ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("\n             Layout\n        ")]), _vm._v(" "), _vm.userCan("cms_advanced.create") ? _c("inertia-link", {
    staticClass: "button button-default-responsive button-primary flex flex-row items-center",
    attrs: {
      href: _vm.$route("admin.cms.layouts.create")
    }
  }, [_c("icon-plus", {
    staticClass: "w-5 md:mr-2"
  }), _vm._v(" "), _c("span", {
    staticClass: "hidden md:inline"
  }, [_vm._v("\n                Create Layout\n            ")])], 1) : _vm._e()], 1), _vm._v(" "), _c("div", {
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
      "input-autocomplete": "layout_name_search",
      "input-class": "form-control form-control-short",
      "input-id": "layout_name",
      "input-name": "layout_name",
      "input-placeholder": "Layout Name",
      "input-type": "text",
      "label-hidden": true,
      "label-text": "Layout Name"
    },
    model: {
      value: _vm.editableSearchOptions.layout_name,
      callback: function callback($$v) {
        _vm.$set(_vm.editableSearchOptions, "layout_name", $$v);
      },
      expression: "editableSearchOptions.layout_name"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "w-full md:w-1/3"
  }, [_c("input-group", {
    attrs: {
      "input-autocomplete": "layout_slug_search",
      "input-class": "form-control form-control-short",
      "input-id": "layout_slug",
      "input-name": "layout_slug",
      "input-placeholder": "Layout Slug",
      "input-type": "text",
      "label-hidden": true,
      "label-text": "Layout Slug"
    },
    model: {
      value: _vm.editableSearchOptions.layout_slug,
      callback: function callback($$v) {
        _vm.$set(_vm.editableSearchOptions, "layout_slug", $$v);
      },
      expression: "editableSearchOptions.layout_slug"
    }
  })], 1), _vm._v(" "), _vm.isTemplates ? _c("div", {
    staticClass: "w-full md:w-1/3"
  }, [_c("select-group", {
    attrs: {
      "label-hidden": true,
      "label-text": "Template",
      "input-any-option-enabled": true,
      "input-any-option-label": "Template",
      "input-class": "form-control form-control-short",
      "input-id": "template_id",
      "input-name": "template_id",
      "input-option-label-key": "name",
      "input-option-value-key": "id",
      "input-options": _vm.templates
    },
    model: {
      value: _vm.editableSearchOptions.template_id,
      callback: function callback($$v) {
        _vm.$set(_vm.editableSearchOptions, "template_id", $$v);
      },
      expression: "editableSearchOptions.template_id"
    }
  })], 1) : _vm._e()]), _vm._v(" "), !_vm.layoutsData ? _c("p", {
    staticClass: "bg-theme-base-subtle mt-8 mx-6 px-6 py-4 rounded text-center text-theme-base-subtle-contrast"
  }, [_vm._v("\n            No layouts\n        ")]) : [_c("div", {
    staticClass: "block mt-8 overflow-x-auto w-full"
  }, [_c("table", {
    staticClass: "table table-hover table-striped w-full"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Name")]), _vm._v(" "), _c("th", [_vm._v("Slug")]), _vm._v(" "), _c("th", [_vm._v("Template")]), _vm._v(" "), _vm.showLayoutActions ? _c("th") : _vm._e()])]), _vm._v(" "), _c("tbody", _vm._l(_vm.layoutsData, function (layout, index) {
    return _c("tr", {
      key: "layout-".concat(layout.id)
    }, [_c("td", [_vm._v("\n                            " + _vm._s(layout.name) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(layout.slug) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(layout.template.name) + "\n                        ")]), _vm._v(" "), _vm.showLayoutActions ? _c("td", [_c("div", {
      staticClass: "flex flex-row items-center justify-end -mx-1"
    }, [_vm.userCan("cms_advanced.edit") ? _c("inertia-link", {
      staticClass: "flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide focus:outline-none focus:ring hover:bg-theme-info hover:text-theme-info-contrast",
      attrs: {
        href: _vm.$route("admin.cms.layouts.edit", layout.id),
        title: "Edit Layout"
      }
    }, [_c("icon-edit", {
      staticClass: "w-4"
    })], 1) : _vm._e(), _vm._v(" "), _vm.userCan("cms_advanced.delete") ? _c("button", {
      staticClass: "flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide focus:outline-none focus:ring hover:bg-theme-danger hover:text-theme-danger-contrast",
      attrs: {
        title: "Delete Layout"
      },
      on: {
        click: function click($event) {
          return _vm.checkDelete(layout);
        }
      }
    }, [_c("icon-trash", {
      staticClass: "w-4"
    })], 1) : _vm._e()], 1)]) : _vm._e()]);
  }), 0)])]), _vm._v(" "), _vm.showPagination ? _c("div", {
    staticClass: "flex flex-row justify-center mt-12 px-6"
  }, [_c("pagination", {
    attrs: {
      pagination: _vm.layouts.pagination
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

/***/ "./resources/js/pages/admin/cms/layout/Index.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/admin/cms/layout/Index.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_4ab57a7c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=4ab57a7c */ "./resources/js/pages/admin/cms/layout/Index.vue?vue&type=template&id=4ab57a7c");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/pages/admin/cms/layout/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_4ab57a7c__WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_4ab57a7c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/cms/layout/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/cms/layout/Index.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/admin/cms/layout/Index.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/layout/Index.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/cms/layout/Index.vue?vue&type=template&id=4ab57a7c":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/admin/cms/layout/Index.vue?vue&type=template&id=4ab57a7c ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4ab57a7c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4ab57a7c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4ab57a7c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=4ab57a7c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/layout/Index.vue?vue&type=template&id=4ab57a7c");


/***/ })

}]);