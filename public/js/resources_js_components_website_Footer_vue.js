"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_website_Footer_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/Footer.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/Footer.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixins_configMixin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/configMixin.js */ "./resources/js/mixins/configMixin.js");
var _name$mixins$name$com;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_name$mixins$name$com = {
  name: "Footer",
  mixins: [_mixins_configMixin_js__WEBPACK_IMPORTED_MODULE_0__["default"]]
}, _defineProperty(_name$mixins$name$com, "name", "Footer"), _defineProperty(_name$mixins$name$com, "components", {
  MobileMedia: function MobileMedia() {
    return __webpack_require__.e(/*! import() */ "resources_js_components_website_MobileMedia_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./MobileMedia.vue */ "./resources/js/components/website/MobileMedia.vue"));
  }
}), _defineProperty(_name$mixins$name$com, "props", {
  config: {
    type: Object
  },
  page: {
    type: Object
  }
}), _defineProperty(_name$mixins$name$com, "computed", {
  layoutContent: function layoutContent() {
    return this.page.data && this.page.data.layout ? this.page.data.layout.content : null;
  },
  copyright: function copyright() {
    return this.config && this.config.copyright ? this.config.copyright : '';
  }
}), _defineProperty(_name$mixins$name$com, "data", function data() {
  return {
    mainUrl: ''
  };
}), _defineProperty(_name$mixins$name$com, "mounted", function mounted() {
  this.mainUrl = window.location.origin;
}), _name$mixins$name$com);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/Footer.vue?vue&type=template&id=f5fde58c":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/Footer.vue?vue&type=template&id=f5fde58c ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "px-4 bg-white"
  }, [_c("footer", {
    staticClass: "w-full flex flex-col lg:flex-row justify-center bg-white"
  }, [_vm.isTablet ? _c("section", {
    staticClass: "border-gray-2000 border-t w-full px-4 flex flex-col items-center mb-16 pt-12"
  }, [_c("img", {
    staticClass: "items-center",
    attrs: {
      src: "".concat(_vm.mainUrl, "/images/Footer.svg")
    }
  })]) : _vm._e(), _vm._v(" "), _vm.isTablet ? _c("section", {
    staticClass: "mb-12 md:px-5"
  }, [_vm.layoutContent && _vm.layoutContent["footer-1"] ? _c("mobile-media", {
    staticClass: "pr-19.5 pl-19.5",
    attrs: {
      items: _vm.layoutContent["footer-1"].menu_items,
      title: _vm.layoutContent["footer-1"].name
    }
  }) : _vm._e(), _vm._v(" "), _vm.layoutContent && _vm.layoutContent["footer-2"] ? _c("mobile-media", {
    staticClass: "pr-19.5 pl-19.5 pt-3",
    attrs: {
      items: _vm.layoutContent["footer-2"].menu_items,
      title: _vm.layoutContent["footer-2"].name
    }
  }) : _vm._e(), _vm._v(" "), _vm.layoutContent && _vm.layoutContent["footer-3"] ? _c("mobile-media", {
    staticClass: "pr-19.5 pl-19.5 pt-3",
    attrs: {
      items: _vm.layoutContent["footer-3"].menu_items,
      title: _vm.layoutContent["footer-3"].name
    }
  }) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c("section", {
    staticClass: "max-w-360 w-full pb-12 lg:py-12 flex flex-col items-center justify-center"
  }, [_c("p", {
    staticClass: "text-center px-4 md:w-99 lg:w-full text-gray-500",
    domProps: {
      textContent: _vm._s(_vm.copyright)
    }
  })])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/website/Footer.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/website/Footer.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_vue_vue_type_template_id_f5fde58c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=f5fde58c */ "./resources/js/components/website/Footer.vue?vue&type=template&id=f5fde58c");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js */ "./resources/js/components/website/Footer.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footer_vue_vue_type_template_id_f5fde58c__WEBPACK_IMPORTED_MODULE_0__.render,
  _Footer_vue_vue_type_template_id_f5fde58c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/website/Footer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/website/Footer.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/website/Footer.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/Footer.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/website/Footer.vue?vue&type=template&id=f5fde58c":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/website/Footer.vue?vue&type=template&id=f5fde58c ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_f5fde58c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_f5fde58c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_f5fde58c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=template&id=f5fde58c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/Footer.vue?vue&type=template&id=f5fde58c");


/***/ })

}]);