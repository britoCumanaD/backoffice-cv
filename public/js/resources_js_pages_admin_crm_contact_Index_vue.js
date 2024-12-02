"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_crm_contact_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/crm/contact/Index.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/crm/contact/Index.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
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




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AdminCrmContactIndex",
  components: {
    ConfirmationModal: _components_core_modals_ConfirmationModal__WEBPACK_IMPORTED_MODULE_2__["default"],
    InputGroup: _components_core_forms_InputGroup__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  layout: 'admin-layout',
  props: {
    searchOptions: {
      required: true,
      type: Array | Object
    },
    contacts: {
      required: true,
      type: Object
    }
  },
  data: function data() {
    return {
      editableSearchOptions: {
        contact_email: '',
        contact_first_name: '',
        contact_last_name: '',
        contact_telephone: '',
        per_page: 15
      },
      isInitialised: false,
      isLoadingDelete: false,
      showDeleteModal: false,
      contactToDelete: null
    };
  },
  computed: {
    contactsData: function contactsData() {
      if (!this.contacts || !this.contacts.data || this.contacts.data.length < 1) {
        return false;
      }
      return this.contacts.data;
    },
    deleteModalText: function deleteModalText() {
      try {
        return 'Do you really want to delete \'' + this.contactToDelete.name_with_title + '\'?';
      } catch (e) {
        return 'Do you really want to delete this contact?';
      }
    },
    showContactsActions: function showContactsActions() {
      return this.userCan('crm_contacts.edit') || this.userCan('crm_contacts.delete');
    },
    showPagination: function showPagination() {
      try {
        return this.contacts.pagination.last_page > 1;
      } catch (e) {
        return false;
      }
    }
  },
  mounted: function mounted() {
    this.setSearchOptions(this.searchOptions);
  },
  methods: {
    cancelDelete: function cancelDelete() {
      if (!this.isLoadingDelete) {
        this.showDeleteModal = false;
        this.contactToDelete = null;
      }
    },
    checkDelete: function checkDelete(contact) {
      this.showDeleteModal = true;
      this.contactToDelete = contact;
    },
    confirmDelete: function confirmDelete() {
      if (this.isLoadingDelete) {
        return this.$errorToast('It\'s only possible to delete one contact at a time.');
      }
      this.$inertia["delete"](this.$route('admin.crm.contacts.destroy', this.contactToDelete.id), {
        only: ['flash', 'contacts']
      });
      this.contactToDelete = null;
      this.showDeleteModal = false;
    },
    onSearchOptionsUpdate: lodash__WEBPACK_IMPORTED_MODULE_0___default().debounce(function () {
      if (!this.isInitialised) {
        this.isInitialised = true;

        // If there are already search results, don't attempt search
        if (this.contactsData) {
          return;
        }
      }
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.get(this.$route('admin.crm.contacts.index'), this.editableSearchOptions, {
        only: ['contacts'],
        preserveState: true
      });
    }, 500),
    setSearchOptions: function setSearchOptions() {
      var new_options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = {
        contact_email: '',
        contact_first_name: '',
        contact_last_name: '',
        contact_telephone: '',
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/crm/contact/Index.vue?vue&type=template&id=49bb1e79":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/crm/contact/Index.vue?vue&type=template&id=49bb1e79 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("\n            Contacts\n        ")]), _vm._v(" "), _vm.userCan("crm_contacts.create") ? _c("inertia-link", {
    staticClass: "button button-default-responsive button-primary flex flex-row items-center",
    attrs: {
      href: _vm.$route("admin.crm.contacts.create")
    }
  }, [_c("icon-plus", {
    staticClass: "w-5 md:mr-2"
  }), _vm._v(" "), _c("span", {
    staticClass: "hidden md:inline"
  }, [_vm._v("\n                    Create Contact\n                ")])], 1) : _vm._e()], 1), _vm._v(" "), _c("div", {
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
    staticClass: "w-full md:w-1/4"
  }, [_c("input-group", {
    attrs: {
      "input-autocomplete": "contact_first_name_search",
      "input-class": "form-control form-control-short",
      "input-id": "contact_first_name",
      "input-name": "contact_first_name",
      "input-placeholder": "First Name",
      "input-type": "text",
      "label-hidden": true,
      "label-text": "First Name"
    },
    model: {
      value: _vm.editableSearchOptions.contact_first_name,
      callback: function callback($$v) {
        _vm.$set(_vm.editableSearchOptions, "contact_first_name", $$v);
      },
      expression: "editableSearchOptions.contact_first_name"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "w-full md:w-1/4"
  }, [_c("input-group", {
    attrs: {
      "input-autocomplete": "contact_last_name_search",
      "input-class": "form-control form-control-short",
      "input-id": "contact_last_name",
      "input-name": "contact_last_name",
      "input-placeholder": "Last Name",
      "input-type": "text",
      "label-hidden": true,
      "label-text": "Last Name"
    },
    model: {
      value: _vm.editableSearchOptions.contact_last_name,
      callback: function callback($$v) {
        _vm.$set(_vm.editableSearchOptions, "contact_last_name", $$v);
      },
      expression: "editableSearchOptions.contact_last_name"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "w-full md:w-1/4"
  }, [_c("input-group", {
    attrs: {
      "input-autocomplete": "contact_email_search",
      "input-class": "form-control form-control-short",
      "input-id": "contact_email",
      "input-name": "contact_email",
      "input-placeholder": "Email",
      "input-type": "text",
      "label-hidden": true,
      "label-text": "Email"
    },
    model: {
      value: _vm.editableSearchOptions.contact_email,
      callback: function callback($$v) {
        _vm.$set(_vm.editableSearchOptions, "contact_email", $$v);
      },
      expression: "editableSearchOptions.contact_email"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "w-full md:w-1/4"
  }, [_c("input-group", {
    attrs: {
      "input-autocomplete": "contact_telephone_search",
      "input-class": "form-control form-control-short",
      "input-id": "contact_telephone",
      "input-name": "contact_telephone",
      "input-placeholder": "Telephone",
      "input-type": "text",
      "label-hidden": true,
      "label-text": "Telephone"
    },
    model: {
      value: _vm.editableSearchOptions.contact_telephone,
      callback: function callback($$v) {
        _vm.$set(_vm.editableSearchOptions, "contact_telephone", $$v);
      },
      expression: "editableSearchOptions.contact_telephone"
    }
  })], 1)]), _vm._v(" "), !_vm.contactsData ? _c("p", {
    staticClass: "bg-theme-base-subtle mt-6 mx-6 px-6 py-4 rounded text-center text-theme-base-subtle-contrast"
  }, [_vm._v("\n            No contacts\n        ")]) : [_c("div", {
    staticClass: "block mt-8 overflow-x-auto w-full"
  }, [_c("table", {
    staticClass: "table table-hover table-striped w-full"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Name")]), _vm._v(" "), _c("th", [_vm._v("Email")]), _vm._v(" "), _c("th", [_vm._v("Telephone")]), _vm._v(" "), _vm.showContactsActions ? _c("th") : _vm._e()])]), _vm._v(" "), _c("tbody", _vm._l(_vm.contactsData, function (contact, index) {
    return _c("tr", {
      key: "contact-".concat(contact.id)
    }, [_c("td", [_vm._v("\n                                " + _vm._s(contact.name_with_title) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s(contact.email) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s(contact.telephone) + "\n                            ")]), _vm._v(" "), _vm.showContactsActions ? _c("td", [_c("div", {
      staticClass: "flex flex-row items-center justify-end -mx-1"
    }, [_vm.userCan("crm_contacts.edit") ? _c("inertia-link", {
      staticClass: "flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide focus:outline-none focus:ring hover:bg-theme-info hover:text-theme-info-contrast",
      attrs: {
        href: _vm.$route("admin.crm.contacts.edit", contact.id),
        title: "Edit User"
      }
    }, [_c("icon-edit", {
      staticClass: "w-4"
    })], 1) : _vm._e(), _vm._v(" "), _vm.userCan("crm_contacts.delete") ? _c("button", {
      staticClass: "flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide focus:outline-none focus:ring hover:bg-theme-danger hover:text-theme-danger-contrast",
      attrs: {
        title: "Delete Contact"
      },
      on: {
        click: function click($event) {
          return _vm.checkDelete(contact);
        }
      }
    }, [_c("icon-trash", {
      staticClass: "w-4"
    })], 1) : _vm._e()], 1)]) : _vm._e()]);
  }), 0)])])], _vm._v(" "), _vm.showPagination ? _c("div", {
    staticClass: "flex flex-row justify-center mt-12 px-6"
  }, [_c("pagination", {
    attrs: {
      pagination: _vm.contacts.pagination
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("confirmation-modal", {
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

/***/ "./resources/js/pages/admin/crm/contact/Index.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/admin/crm/contact/Index.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_49bb1e79__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=49bb1e79 */ "./resources/js/pages/admin/crm/contact/Index.vue?vue&type=template&id=49bb1e79");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/pages/admin/crm/contact/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_49bb1e79__WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_49bb1e79__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/crm/contact/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/crm/contact/Index.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/admin/crm/contact/Index.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/crm/contact/Index.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/crm/contact/Index.vue?vue&type=template&id=49bb1e79":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/admin/crm/contact/Index.vue?vue&type=template&id=49bb1e79 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_49bb1e79__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_49bb1e79__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_49bb1e79__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=49bb1e79 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/crm/contact/Index.vue?vue&type=template&id=49bb1e79");


/***/ })

}]);