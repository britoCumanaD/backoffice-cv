"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_cms_layout_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/TopOptionSection.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/TopOptionSection.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_modules_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/modules/admin */ "./resources/js/store/modules/admin/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    userCanSection: {
      type: String,
      "default": ''
    },
    userCanBtn: {
      type: String,
      "default": ''
    },
    userCanBack: {
      type: String
    },
    address: {
      type: String
    },
    title: {
      type: String
    },
    buttonText: {
      type: String
    },
    btnView: {
      type: Boolean,
      "default": false
    },
    urlPage: {
      type: String,
      "default": ''
    },
    module: {
      type: String,
      "default": ''
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(_store_modules_admin__WEBPACK_IMPORTED_MODULE_0__.STORE_NAME_ADMIN, ["fixedBarAction"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/layout/Edit.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/layout/Edit.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slugify */ "./node_modules/slugify/slugify.js");
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_core_forms_InputGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/core/forms/InputGroup */ "./resources/js/components/core/forms/InputGroup.vue");
/* harmony import */ var _components_core_forms_SelectGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/core/forms/SelectGroup */ "./resources/js/components/core/forms/SelectGroup.vue");
/* harmony import */ var _components_admin_TopOptionSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/admin/TopOptionSection */ "./resources/js/components/admin/TopOptionSection.vue");
/* harmony import */ var _store_modules_admin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../store/modules/admin */ "./resources/js/store/modules/admin/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







var CancelToken = axios.CancelToken;
var templateCancelToken = CancelToken.source();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AdminCmsLayoutCreate",
  components: {
    InputGroup: _components_core_forms_InputGroup__WEBPACK_IMPORTED_MODULE_2__["default"],
    SelectGroup: _components_core_forms_SelectGroup__WEBPACK_IMPORTED_MODULE_3__["default"],
    TopOptionSection: _components_admin_TopOptionSection__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  layout: 'admin-layout',
  props: {
    'layout': {
      type: Object,
      required: true
    },
    'templates': {
      type: Object,
      required: true
    },
    'layoutTypes': {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      autoUpdateSlug: false,
      formData: {},
      isInitialisedTemplate: false,
      isInitialisedContent: false,
      isLoadingTemplate: false,
      selectedTemplate: null
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_6__.mapGetters)(_store_modules_admin__WEBPACK_IMPORTED_MODULE_5__.STORE_NAME_ADMIN, ["fixedBarAction"])), {}, {
    selectedTemplateHasFields: function selectedTemplateHasFields() {
      try {
        if (!this.selectedTemplate) {
          return false;
        }
        return this.selectedTemplate.template_fields.length;
      } catch (e) {
        return false;
      }
    },
    selectedTemplateId: function selectedTemplateId() {
      var _this$formData$templa;
      return (_this$formData$templa = this.formData.template_id) !== null && _this$formData$templa !== void 0 ? _this$formData$templa : '';
    }
  }),
  created: function created() {
    this.formData = {
      content: {},
      id: this.layout.id,
      name: this.layout.name,
      slug: this.layout.slug,
      type: this.layout.type,
      template_id: this.layout.template_id
    };
    this.selectedTemplate = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(this.layout.template);
    this.setInitialContent();
  },
  methods: {
    cancelLoadTemplate: function cancelLoadTemplate() {
      if (this.isLoadingTemplate) {
        templateCancelToken.cancel('Template load cancelled');
        templateCancelToken = CancelToken.source();
      }
    },
    doesObjectHaveKeys: function doesObjectHaveKeys(obj) {
      try {
        return Object.keys(obj).length;
      } catch (e) {
        return false;
      }
    },
    layoutHasContentField: function layoutHasContentField(template_field_id) {
      try {
        return this.layout.content.hasOwnProperty(template_field_id);
      } catch (e) {
        return false;
      }
    },
    onNameInput: function onNameInput() {
      if (!this.autoUpdateSlug) {
        return;
      }
      this.formData.slug = this.slugify(this.formData.name);
    },
    onSelectedTemplateIdChange: lodash__WEBPACK_IMPORTED_MODULE_0___default().debounce(function () {
      var _this = this;
      // The template id is set by default, so no need to re-load initially
      if (!this.isInitialisedTemplate) {
        this.isInitialisedTemplate = true;
        return;
      }
      this.selectedTemplate = null;
      this.cancelLoadTemplate();
      if (!this.selectedTemplateId) {
        return;
      }
      this.isLoadingTemplate = true;
      axios.get(this.$route('admin.api.cms.templates.show', this.selectedTemplateId)).then(function (response) {
        _this.selectedTemplate = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(response.data.data);
        _this.setNewTemplateContent();
      })["catch"](function (e) {
        if (!axios.isCancel(e)) {
          _this.$errorToast('Failed to load selected template');
          console.log(e); // TODO: This should go through to a log tracker once available
        }
      })["finally"](function () {
        _this.isLoadingTemplate = false;
      });
    }, 500),
    onSlugBlur: function onSlugBlur() {
      this.formData.slug = this.slugify(this.formData.slug);
    },
    onSlugInput: function onSlugInput() {
      this.autoUpdateSlug = false;
    },
    setInitialContent: function setInitialContent() {
      var _this2 = this;
      // This is a fix / hack to prevent an empty object from becoming an array.
      var content = {};
      if (this.doesObjectHaveKeys(this.layout.content)) {
        content = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(this.layout.content);
      }

      // Set the defaults for any missing content
      lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(this.selectedTemplate.template_fields, function (templateField) {
        if (!_this2.layoutHasContentField(templateField.id)) {
          content[templateField.id] = {
            data: '',
            template_field_id: templateField.id
          };
        }
      });
      this.formData.content = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(content);
      this.isInitialisedContent = true;
    },
    setNewTemplateContent: function setNewTemplateContent() {
      if (!this.selectedTemplateHasFields) {
        this.formData.content = {};
      }

      // Get all fields from the template and set the default data
      var new_content = {};
      lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(this.selectedTemplate.template_fields, function (templateField) {
        new_content[templateField.id] = {
          data: '',
          template_field_id: templateField.id
        };
      });

      // Replace the existing content
      this.$set(this.formData, 'content', lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(new_content));
    },
    slugify: function slugify(value) {
      if (!value || !value.length) {
        return '';
      }
      return slugify__WEBPACK_IMPORTED_MODULE_1___default()(value, {
        lower: true
      });
    },
    submit: function submit() {
      this.$inertia.put(this.$route('admin.cms.layouts.update', this.layout.id), this.formData);
    }
  },
  watch: {
    selectedTemplateId: {
      handler: 'onSelectedTemplateIdChange'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/TopOptionSection.vue?vue&type=template&id=023b9a74":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/TopOptionSection.vue?vue&type=template&id=023b9a74 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.userCan(_vm.userCanSection) || _vm.userCanSection == "" ? _c("section", {
    staticClass: "flex flex-row items-center mb-6",
    "class": {
      "fixed top-0 z-20 bg-white shadow-md p-3 right-0 w-full-side justify-between": _vm.fixedBarAction
    }
  }, [_c("h1", {
    staticClass: "font-medium text-lg",
    "class": _vm.fixedBarAction ? "mr-8" : "mr-auto",
    domProps: {
      textContent: _vm._s(_vm.title)
    }
  }), _vm._v(" "), _c("section", {
    staticClass: "flex flex-row"
  }, [_vm.userCan(_vm.userCanBack) ? _c("inertia-link", {
    staticClass: "button button-default-responsive button-primary-subtle flex flex-row items-center mr-2",
    attrs: {
      href: _vm.$route(_vm.address, {
        module: _vm.module
      })
    }
  }, [_c("icon-chevron-left", {
    staticClass: "w-5 md:mr-2"
  }), _vm._v(" "), _c("span", {
    staticClass: "hidden md:inline"
  }, [_vm._v("\n                Back\n            ")])], 1) : _vm._e(), _vm._v(" "), _vm.userCan(_vm.userCanBtn) || _vm.userCanBtn == "" ? _c("button", {
    staticClass: "button button-default-responsive button-primary flex flex-row items-center",
    attrs: {
      type: "submit"
    }
  }, [_c("icon-save", {
    staticClass: "w-5 md:mr-2"
  }), _vm._v(" "), _c("span", {
    staticClass: "hidden md:inline",
    domProps: {
      textContent: _vm._s(_vm.buttonText)
    }
  })], 1) : _vm._e()], 1)]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/layout/Edit.vue?vue&type=template&id=d6212d60":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/layout/Edit.vue?vue&type=template&id=d6212d60 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("form", {
    staticClass: "max-w-5xl mx-auto",
    attrs: {
      autocomplete: "off"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      }
    }
  }, [_c("TopOptionSection", {
    attrs: {
      userCanSection: "cms_advanced.edit",
      userCanBack: "cms_advanced.view",
      address: "admin.cms.layouts.index",
      title: "Edit Layout",
      buttonText: "Save Changes"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "bg-white py-6 shadow-subtle rounded-lg"
  }, [_c("div", {
    staticClass: "block px-6 w-full"
  }, [_c("select-group", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.$page.props.auth.user["super"],
      expression: "$page.props.auth.user.super"
    }],
    attrs: {
      "error-message": _vm.getPageErrorMessage("template_id"),
      "label-text": "Template",
      "input-any-option-enabled": true,
      "input-any-option-label": "Please select a template",
      "input-autofocus": true,
      "input-id": "template_id",
      "input-name": "template_id",
      "input-options": _vm.templates,
      "input-option-label-key": "name",
      "input-option-value-key": "id",
      "input-required": true
    },
    on: {
      errorHidden: function errorHidden($event) {
        return _vm.clearPageErrorMessage("template_id");
      }
    },
    model: {
      value: _vm.formData.template_id,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "template_id", $$v);
      },
      expression: "formData.template_id"
    }
  }), _vm._v(" "), _c("select-group", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.$page.props.auth.user["super"],
      expression: "$page.props.auth.user.super"
    }],
    staticClass: "mt-4",
    attrs: {
      "error-message": _vm.getPageErrorMessage("type"),
      "label-text": "Layout Type",
      "input-any-option-enabled": true,
      "input-any-option-label": "Please select a layout type",
      "input-id": "type",
      "input-name": "type",
      "input-options": _vm.layoutTypes,
      "input-required": true
    },
    on: {
      errorHidden: function errorHidden($event) {
        return _vm.clearPageErrorMessage("type");
      }
    },
    model: {
      value: _vm.formData.type,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "type", $$v);
      },
      expression: "formData.type"
    }
  }), _vm._v(" "), _c("input-group", {
    staticClass: "mt-4",
    attrs: {
      "error-message": _vm.getPageErrorMessage("name"),
      "input-autocomplete": "layout_name",
      "input-id": "name",
      "input-name": "name",
      "input-required": true,
      "input-type": "text",
      "label-text": "Layout Name"
    },
    on: {
      errorHidden: function errorHidden($event) {
        return _vm.clearPageErrorMessage("name");
      },
      input: _vm.onNameInput
    },
    model: {
      value: _vm.formData.name,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "name", $$v);
      },
      expression: "formData.name"
    }
  }), _vm._v(" "), _c("input-group", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.$page.props.auth.user["super"],
      expression: "$page.props.auth.user.super"
    }],
    staticClass: "mt-4",
    attrs: {
      "error-message": _vm.getPageErrorMessage("slug"),
      "input-autocomplete": "layout_slug",
      "input-id": "slug",
      "input-name": "slug",
      "input-required": true,
      "input-type": "text",
      "label-text": "Layout Slug"
    },
    on: {
      blur: _vm.onSlugBlur,
      errorHidden: function errorHidden($event) {
        return _vm.clearPageErrorMessage("slug");
      },
      input: _vm.onSlugInput
    },
    model: {
      value: _vm.formData.slug,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "slug", $$v);
      },
      expression: "formData.slug"
    }
  })], 1)]), _vm._v(" "), !this.isLoadingTemplate && _vm.selectedTemplateHasFields && _vm.isInitialisedContent ? _c("div", {
    staticClass: "bg-white mt-6 px-4 py-6 shadow-subtle rounded-lg"
  }, [_c("p", {
    staticClass: "text-lg"
  }, [_vm._v("Fields")]), _vm._v(" "), _c("content-editor", {
    staticClass: "mt-4",
    attrs: {
      "template-fields": _vm.selectedTemplate.template_fields
    },
    model: {
      value: _vm.formData.content,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "content", $$v);
      },
      expression: "formData.content"
    }
  })], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/admin/TopOptionSection.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/admin/TopOptionSection.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TopOptionSection_vue_vue_type_template_id_023b9a74__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopOptionSection.vue?vue&type=template&id=023b9a74 */ "./resources/js/components/admin/TopOptionSection.vue?vue&type=template&id=023b9a74");
/* harmony import */ var _TopOptionSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopOptionSection.vue?vue&type=script&lang=js */ "./resources/js/components/admin/TopOptionSection.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopOptionSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopOptionSection_vue_vue_type_template_id_023b9a74__WEBPACK_IMPORTED_MODULE_0__.render,
  _TopOptionSection_vue_vue_type_template_id_023b9a74__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/TopOptionSection.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/cms/layout/Edit.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/admin/cms/layout/Edit.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_d6212d60__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=d6212d60 */ "./resources/js/pages/admin/cms/layout/Edit.vue?vue&type=template&id=d6212d60");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js */ "./resources/js/pages/admin/cms/layout/Edit.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_d6212d60__WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_d6212d60__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/cms/layout/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/TopOptionSection.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/admin/TopOptionSection.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopOptionSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TopOptionSection.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/TopOptionSection.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopOptionSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/cms/layout/Edit.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/admin/cms/layout/Edit.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/layout/Edit.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/TopOptionSection.vue?vue&type=template&id=023b9a74":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/admin/TopOptionSection.vue?vue&type=template&id=023b9a74 ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopOptionSection_vue_vue_type_template_id_023b9a74__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopOptionSection_vue_vue_type_template_id_023b9a74__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopOptionSection_vue_vue_type_template_id_023b9a74__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TopOptionSection.vue?vue&type=template&id=023b9a74 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/TopOptionSection.vue?vue&type=template&id=023b9a74");


/***/ }),

/***/ "./resources/js/pages/admin/cms/layout/Edit.vue?vue&type=template&id=d6212d60":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/admin/cms/layout/Edit.vue?vue&type=template&id=d6212d60 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_d6212d60__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_d6212d60__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_d6212d60__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=d6212d60 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/layout/Edit.vue?vue&type=template&id=d6212d60");


/***/ })

}]);