"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_cms_menu_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/menu/Index.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/menu/Index.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AdminCmsMenuIndex",
  components: {
    ConfirmationModal: _components_core_modals_ConfirmationModal__WEBPACK_IMPORTED_MODULE_2__["default"],
    InputGroup: _components_core_forms_InputGroup__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  layout: 'admin-layout',
  props: {
    menus: {
      required: true,
      type: Object
    },
    searchOptions: {
      required: true,
      type: Object | Array
    }
  },
  data: function data() {
    return {
      editableSearchOptions: {
        menu_name: '',
        menu_slug: '',
        per_page: 15
      },
      isInitialised: false,
      isLoadingDelete: false,
      showDeleteModal: false,
      menuToDelete: null
    };
  },
  mounted: function mounted() {
    this.editableSearchOptions = _objectSpread(_objectSpread({}, this.editableSearchOptions), this.$page.props.searchOptions);
    this.setSearchOptions(this.searchOptions);
  },
  computed: {
    deleteModalText: function deleteModalText() {
      try {
        return 'Do you really want to delete \'' + this.menuToDelete.name + '\'?';
      } catch (e) {
        return 'Do you really want to delete this menu?';
      }
    },
    showPagination: function showPagination() {
      try {
        return this.menus.pagination.last_page > 1;
      } catch (e) {
        return false;
      }
    },
    showMenuActions: function showMenuActions() {
      return this.userCan('cms.edit') || this.userCan('cms.delete');
    },
    menusData: function menusData() {
      if (!this.menus || !this.menus.data || this.menus.data.length < 1) {
        return false;
      }
      return this.menus.data;
    }
  },
  methods: {
    cancelDelete: function cancelDelete() {
      if (!this.isLoadingDelete) {
        this.showDeleteModal = false;
        this.menuToDelete = null;
      }
    },
    checkDelete: function checkDelete(menu) {
      this.showDeleteModal = true;
      this.menuToDelete = menu;
    },
    confirmDelete: function confirmDelete() {
      if (this.isLoadingDelete) {
        return this.$errorToast('It\'s only possible to delete one menu at a time.');
      }
      this.$inertia["delete"](this.$route('admin.cms.menus.destroy', this.menuToDelete.id), {
        only: ['flash', 'menus']
      });
      this.menuToDelete = null;
      this.showDeleteModal = false;
    },
    onSearchOptionsUpdate: lodash__WEBPACK_IMPORTED_MODULE_0___default().debounce(function () {
      if (!this.isInitialised) {
        this.isInitialised = true;

        // If there are already search results, don't attempt search
        if (this.menusData) {
          return;
        }
      }
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.get(this.$route('admin.cms.menus.index'), this.editableSearchOptions, {
        only: ['menus'],
        preserveState: true
      });
    }, 500),
    setSearchOptions: function setSearchOptions() {
      var new_options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = {
        menu_name: '',
        menu_slug: '',
        per_page: 15
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/menu/Index.vue?vue&type=template&id=421f6031":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/menu/Index.vue?vue&type=template&id=421f6031 ***!
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
  return _c("section", [_c("div", {
    staticClass: "flex flex-row items-center mb-6"
  }, [_c("h1", {
    staticClass: "font-medium mr-auto text-lg"
  }, [_vm._v("\n            Menu\n        ")]), _vm._v(" "), _vm.userCan("cms.create") ? _c("inertia-link", {
    staticClass: "button button-default-responsive button-primary flex flex-row items-center",
    attrs: {
      href: _vm.$route("admin.cms.menus.create")
    }
  }, [_c("icon-plus", {
    staticClass: "w-5 md:mr-2"
  }), _vm._v(" "), _c("span", {
    staticClass: "hidden md:inline"
  }, [_vm._v("\n                Create Menu\n            ")])], 1) : _vm._e()], 1), _vm._v(" "), _c("div", {
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
      "input-autocomplete": "menu_name_search",
      "input-class": "form-control form-control-short",
      "input-id": "menu_name",
      "input-name": "menu_name",
      "input-placeholder": "Menu Name",
      "input-type": "text",
      "label-hidden": true,
      "label-text": "Menu Name"
    },
    model: {
      value: _vm.editableSearchOptions.menu_name,
      callback: function callback($$v) {
        _vm.$set(_vm.editableSearchOptions, "menu_name", $$v);
      },
      expression: "editableSearchOptions.menu_name"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "w-full md:w-1/3"
  }, [_c("input-group", {
    attrs: {
      "input-autocomplete": "menu_slug_search",
      "input-class": "form-control form-control-short",
      "input-id": "menu_slug",
      "input-name": "menu_slug",
      "input-placeholder": "Menu Slug",
      "input-type": "text",
      "label-hidden": true,
      "label-text": "Menu Slug"
    },
    model: {
      value: _vm.editableSearchOptions.menu_slug,
      callback: function callback($$v) {
        _vm.$set(_vm.editableSearchOptions, "menu_slug", $$v);
      },
      expression: "editableSearchOptions.menu_slug"
    }
  })], 1)]), _vm._v(" "), !_vm.menusData ? _c("p", {
    staticClass: "bg-theme-base-subtle mt-8 mx-6 px-6 py-4 rounded text-center text-theme-base-subtle-contrast"
  }, [_vm._v("\n            No menus\n        ")]) : [_c("div", {
    staticClass: "block mt-8 overflow-x-auto w-full"
  }, [_c("table", {
    staticClass: "table table-hover table-striped w-full"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Name")]), _vm._v(" "), _c("th", [_vm._v("Slug")]), _vm._v(" "), _vm.showMenuActions ? _c("th") : _vm._e()])]), _vm._v(" "), _c("tbody", _vm._l(_vm.menusData, function (menu) {
    return _c("tr", {
      key: "menu-".concat(menu.id)
    }, [_c("td", [_vm._v("\n                            " + _vm._s(menu.name) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(menu.slug) + "\n                        ")]), _vm._v(" "), _vm.showMenuActions ? _c("td", [_c("div", {
      staticClass: "flex flex-row items-center justify-end -mx-1"
    }, [_vm.userCan("cms.edit") ? _c("inertia-link", {
      staticClass: "flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide focus:outline-none focus:ring hover:bg-theme-info hover:text-theme-info-contrast",
      attrs: {
        href: _vm.$route("admin.cms.menus.edit", menu.id),
        title: "Edit Menu"
      }
    }, [_c("icon-edit", {
      staticClass: "w-4"
    })], 1) : _vm._e(), _vm._v(" "), _vm.userCan("cms.delete") ? _c("button", {
      staticClass: "flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide focus:outline-none focus:ring hover:bg-theme-danger hover:text-theme-danger-contrast",
      attrs: {
        title: "Delete Menu"
      },
      on: {
        click: function click($event) {
          return _vm.checkDelete(menu);
        }
      }
    }, [_c("icon-trash", {
      staticClass: "w-4"
    })], 1) : _vm._e()], 1)]) : _vm._e()]);
  }), 0)])]), _vm._v(" "), _vm.showPagination ? _c("div", {
    staticClass: "flex flex-row justify-center mt-12 px-6"
  }, [_c("pagination", {
    attrs: {
      pagination: _vm.menus.pagination
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

/***/ "./resources/js/pages/admin/cms/menu/Index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/admin/cms/menu/Index.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_421f6031__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=421f6031 */ "./resources/js/pages/admin/cms/menu/Index.vue?vue&type=template&id=421f6031");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/pages/admin/cms/menu/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_421f6031__WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_421f6031__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/cms/menu/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/cms/menu/Index.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/admin/cms/menu/Index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/menu/Index.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/cms/menu/Index.vue?vue&type=template&id=421f6031":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/admin/cms/menu/Index.vue?vue&type=template&id=421f6031 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_421f6031__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_421f6031__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_421f6031__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=421f6031 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/menu/Index.vue?vue&type=template&id=421f6031");


/***/ })

}]);