"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_module_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/module/Index.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/module/Index.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _components_core_modals_ConfirmationModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/core/modals/ConfirmationModal */ "./resources/js/components/core/modals/ConfirmationModal.vue");
/* harmony import */ var _components_core_forms_InputGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/core/forms/InputGroup */ "./resources/js/components/core/forms/InputGroup.vue");
/* harmony import */ var _components_core_forms_SelectGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/core/forms/SelectGroup */ "./resources/js/components/core/forms/SelectGroup.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _store_modules_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/modules/menu */ "./resources/js/store/modules/menu/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AdminCmsPageIndex",
  components: {
    ConfirmationModal: _components_core_modals_ConfirmationModal__WEBPACK_IMPORTED_MODULE_3__["default"],
    InputGroup: _components_core_forms_InputGroup__WEBPACK_IMPORTED_MODULE_4__["default"],
    SelectGroup: _components_core_forms_SelectGroup__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  layout: 'admin-layout',
  props: {
    modules: {
      required: true,
      type: Object
    }
  },
  data: function data() {
    return {
      isInitialised: false,
      isLoadingDelete: false,
      showDeleteModal: false,
      moduleToDelete: null
    };
  },
  mounted: function mounted() {
    this.setSearchOptions(this.searchOptions);
  },
  computed: {
    deleteModalText: function deleteModalText() {
      try {
        return "Do you really want to delete '".concat(this.moduleToDelete.name, "'? This will delete all of that module's data and it can't be restored");
      } catch (e) {
        return 'Do you really want to delete this module?';
      }
    },
    showPagination: function showPagination() {
      try {
        return this.modules.pagination.last_page > 1;
      } catch (e) {
        return false;
      }
    },
    modulesData: function modulesData() {
      if (!this.modules || !this.modules.data || this.modules.data.length < 1) {
        return false;
      }
      return this.modules.data;
    }
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_7__.mapActions)(_store_modules_menu__WEBPACK_IMPORTED_MODULE_6__.STORE_NAME_MENU, ["getModules"])), {}, {
    cancelDelete: function cancelDelete() {
      if (!this.isLoadingDelete) {
        this.showDeleteModal = false;
        this.moduleToDelete = null;
      }
    },
    checkDelete: function checkDelete(module) {
      this.showDeleteModal = true;
      this.moduleToDelete = module;
    },
    confirmDelete: function confirmDelete() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this.isLoadingDelete) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return", _this.$errorToast('It\'s only possible to delete one module at a time.'));
              case 2:
                _context.next = 4;
                return _this.$inertia["delete"](_this.$route('admin.modules.destroy', _this.moduleToDelete.id), {
                  only: ['flash', 'modules']
                });
              case 4:
                _this.getModules();
                _this.moduleToDelete = null;
                _this.showDeleteModal = false;
              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    onSearchOptionsUpdate: lodash__WEBPACK_IMPORTED_MODULE_1___default().debounce(function () {
      if (!this.isInitialised) {
        this.isInitialised = true;

        // If there are already search results, don't attempt search
        if (this.modulesData) {
          return;
        }
      }
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.get(this.$route('admin.modules.index'), this.editableSearchOptions, {
        only: ['modules'],
        preserveState: true
      });
    }, 500),
    setSearchOptions: function setSearchOptions() {
      var new_options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = {
        layout_id: '',
        per_page: 15,
        page_name: '',
        page_slug: '',
        template_type: ''
      };
      try {
        // Overwrite the defaults with any new options
        lodash__WEBPACK_IMPORTED_MODULE_1___default().forEach(new_options, function (option, key) {
          options[key] = option;
        });
      } catch (e) {
        console.log(e);
      }
      this.editableSearchOptions = lodash__WEBPACK_IMPORTED_MODULE_1___default().cloneDeep(options);
    }
  }),
  watch: {
    editableSearchOptions: {
      deep: true,
      handler: 'onSearchOptionsUpdate'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/module/Index.vue?vue&type=template&id=b130a090":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/module/Index.vue?vue&type=template&id=b130a090 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("\n            Modules\n        ")]), _vm._v(" "), _vm.userCan("cms.create") ? _c("inertia-link", {
    staticClass: "button button-default-responsive button-primary flex flex-row items-center",
    attrs: {
      href: _vm.$route("admin.modules.create")
    }
  }, [_c("icon-plus", {
    staticClass: "w-5 md:mr-2"
  }), _vm._v(" "), _c("span", {
    staticClass: "hidden md:inline"
  }, [_vm._v("\n                Create Module\n            ")])], 1) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "bg-white py-6 shadow-subtle rounded-lg"
  }, [!_vm.modulesData ? _c("p", {
    staticClass: "bg-theme-base-subtle mt-8 mx-6 px-6 py-4 rounded text-center text-theme-base-subtle-contrast"
  }, [_vm._v("\n            No aditionals modules\n        ")]) : [_c("div", {
    staticClass: "block mt-8 overflow-x-auto w-full"
  }, [_c("table", {
    staticClass: "table table-hover table-striped w-full"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", _vm._l(_vm.modulesData, function (m) {
    return _c("tr", {
      key: "module-".concat(m.id)
    }, [_c("td", {
      staticClass: "indicator-column"
    }, [_c("div", {
      staticClass: "h-3 rounded-full w-3",
      "class": {
        "bg-theme-success-contrast": m.status,
        "bg-theme-danger-contrast": !m.status
      }
    })]), _vm._v(" "), _c("td", {
      domProps: {
        textContent: _vm._s(m.name)
      }
    }), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "flex flex-row justify-center"
    }, [m.status ? _c("icon-check", {
      staticClass: "h-4 w-4"
    }) : _c("icon-x", {
      staticClass: "h-4 w-4"
    })], 1)]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "flex flex-row items-center justify-end -mx-1"
    }, [_c("inertia-link", {
      staticClass: "flex flex-row items-center mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide focus:outline-none focus:ring hover:bg-theme-info hover:text-theme-info-contrast",
      attrs: {
        href: _vm.$route("admin.modules.edit", m.id),
        title: "Edit module"
      }
    }, [_c("icon-edit", {
      staticClass: "w-4"
    })], 1), _vm._v(" "), _c("button", {
      staticClass: "flex flex-row items-center mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide focus:outline-none focus:ring hover:bg-theme-danger hover:text-theme-danger-contrast",
      attrs: {
        title: "Delete Page"
      },
      on: {
        click: function click($event) {
          return _vm.checkDelete(m);
        }
      }
    }, [_c("icon-trash", {
      staticClass: "w-4"
    })], 1)], 1)])]);
  }), 0)])]), _vm._v(" "), _vm.showPagination ? _c("div", {
    staticClass: "flex flex-row justify-center mt-12 px-6"
  }, [_c("pagination", {
    attrs: {
      pagination: _vm.modules.pagination
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
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "indicator-column"
  }), _vm._v(" "), _c("th", [_vm._v("Name")]), _vm._v(" "), _c("th", {
    staticClass: "text-center"
  }, [_vm._v("Enabled")]), _vm._v(" "), _c("th")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/admin/module/Index.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/admin/module/Index.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_b130a090__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=b130a090 */ "./resources/js/pages/admin/module/Index.vue?vue&type=template&id=b130a090");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/pages/admin/module/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_b130a090__WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_b130a090__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/module/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/module/Index.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/admin/module/Index.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/module/Index.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/module/Index.vue?vue&type=template&id=b130a090":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/admin/module/Index.vue?vue&type=template&id=b130a090 ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_b130a090__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_b130a090__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_b130a090__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=b130a090 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/module/Index.vue?vue&type=template&id=b130a090");


/***/ })

}]);