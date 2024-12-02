"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_user_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/user/Index.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/user/Index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _components_core_modals_ConfirmationModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/core/modals/ConfirmationModal */ "./resources/js/components/core/modals/ConfirmationModal.vue");
/* harmony import */ var _components_core_forms_InputGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/core/forms/InputGroup */ "./resources/js/components/core/forms/InputGroup.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AdminUserIndex",
  components: {
    ConfirmationModal: _components_core_modals_ConfirmationModal__WEBPACK_IMPORTED_MODULE_2__["default"],
    InputGroup: _components_core_forms_InputGroup__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  layout: 'admin-layout',
  props: {
    searchOptions: Array | Object,
    users: Object
  },
  data: function data() {
    return {
      editableSearchOptions: {
        per_page: 15,
        user_first_name: '',
        user_last_name: '',
        user_email: ''
      },
      isInitialised: false,
      isLoadingUserDelete: false,
      showDeleteModal: false,
      userToDelete: null
    };
  },
  computed: {
    deleteModalText: function deleteModalText() {
      try {
        return 'Do you really want to delete \'' + this.userToDelete.name + '\'?';
      } catch (e) {
        return 'Do you really want to delete this user?';
      }
    },
    show_users_actions: function show_users_actions() {
      return this.userCan('users.edit') || this.userCan('users.delete');
    },
    showPagination: function showPagination() {
      try {
        return this.users.pagination.last_page > 1;
      } catch (e) {
        return false;
      }
    },
    usersData: function usersData() {
      if (!this.users || !this.users.data || this.users.data.length < 1) {
        return false;
      }
      return this.users.data;
    }
  },
  mounted: function mounted() {
    this.setSearchOptions(this.searchOptions);
  },
  methods: {
    cancelUserDelete: function cancelUserDelete() {
      if (!this.isLoadingUserDelete) {
        this.showDeleteModal = false;
        this.userToDelete = null;
      }
    },
    checkUserDelete: function checkUserDelete(user) {
      this.showDeleteModal = true;
      this.userToDelete = user;
    },
    confirmUserDelete: function confirmUserDelete() {
      if (this.isLoadingUserDelete) {
        return this.$errorToast('It\'s only possible to delete one user at a time.');
      }
      this.$inertia["delete"](this.$route('admin.users.destroy', this.userToDelete.id), {
        only: ['flash', 'users']
      });
      this.userToDelete = null;
      this.showDeleteModal = false;
    },
    isUserCurrent: function isUserCurrent(user) {
      try {
        return user.id === this.$page.props.auth.user.id;
      } catch (e) {
        return false;
      }
    },
    onSearchOptionsUpdate: lodash__WEBPACK_IMPORTED_MODULE_0___default().debounce(function () {
      if (!this.isInitialised) {
        this.isInitialised = true;

        // If there are already search results, don't attempt search
        if (this.usersData) {
          return;
        }
      }
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.get(this.$route('admin.users.index'), this.editableSearchOptions, {
        only: ['users'],
        preserveState: true
      });
    }, 500),
    setSearchOptions: function setSearchOptions() {
      var new_options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = {
        per_page: 15,
        user_first_name: '',
        user_last_name: '',
        user_email: ''
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/user/Index.vue?vue&type=template&id=d1f1aad2":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/user/Index.vue?vue&type=template&id=d1f1aad2 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("\n            Users\n        ")]), _vm._v(" "), _vm.userCan("users.create") ? _c("inertia-link", {
    staticClass: "button button-default-responsive button-primary flex flex-row items-center",
    attrs: {
      href: _vm.$route("admin.users.create")
    }
  }, [_c("icon-plus", {
    staticClass: "w-5 md:mr-2"
  }), _vm._v(" "), _c("span", {
    staticClass: "hidden md:inline"
  }, [_vm._v("\n                Create User\n            ")])], 1) : _vm._e()], 1), _vm._v(" "), _c("div", {
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
      "input-autocomplete": "user_first_name_search",
      "input-class": "form-control form-control-short",
      "input-id": "user_first_name",
      "input-name": "user_first_name",
      "input-placeholder": "First Name",
      "input-type": "text",
      "label-hidden": true,
      "label-text": "First Name"
    },
    model: {
      value: _vm.editableSearchOptions.user_first_name,
      callback: function callback($$v) {
        _vm.$set(_vm.editableSearchOptions, "user_first_name", $$v);
      },
      expression: "editableSearchOptions.user_first_name"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "w-full md:w-1/3"
  }, [_c("input-group", {
    attrs: {
      "input-autocomplete": "user_last_name_search",
      "input-class": "form-control form-control-short",
      "input-id": "user_last_name",
      "input-name": "user_last_name",
      "input-placeholder": "Last Name",
      "input-type": "text",
      "label-hidden": true,
      "label-text": "Last Name"
    },
    model: {
      value: _vm.editableSearchOptions.user_last_name,
      callback: function callback($$v) {
        _vm.$set(_vm.editableSearchOptions, "user_last_name", $$v);
      },
      expression: "editableSearchOptions.user_last_name"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "w-full md:w-1/3"
  }, [_c("input-group", {
    attrs: {
      "input-autocomplete": "user_email_search",
      "input-class": "form-control form-control-short",
      "input-id": "user_email",
      "input-name": "user_email",
      "input-placeholder": "Email",
      "input-type": "text",
      "label-hidden": true,
      "label-text": "Email"
    },
    model: {
      value: _vm.editableSearchOptions.user_email,
      callback: function callback($$v) {
        _vm.$set(_vm.editableSearchOptions, "user_email", $$v);
      },
      expression: "editableSearchOptions.user_email"
    }
  })], 1)]), _vm._v(" "), !_vm.usersData ? _c("p", {
    staticClass: "bg-theme-base-subtle mt-6 mx-6 px-6 py-4 rounded text-center text-theme-base-subtle-contrast"
  }, [_vm._v("\n            No users\n        ")]) : [_c("div", {
    staticClass: "block mt-8 overflow-x-auto w-full"
  }, [_c("table", {
    staticClass: "table table-hover table-striped w-full"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Name")]), _vm._v(" "), _c("th", [_vm._v("Email")]), _vm._v(" "), _vm.show_users_actions ? _c("th") : _vm._e()])]), _vm._v(" "), _c("tbody", _vm._l(_vm.usersData, function (user, index) {
    return _c("tr", {
      key: "user-".concat(user.id)
    }, [_c("td", [_vm._v("\n                                " + _vm._s(user.name) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s(user.email) + "\n                            ")]), _vm._v(" "), _vm.show_users_actions ? _c("td", [_c("div", {
      staticClass: "flex flex-row items-center justify-end -mx-1"
    }, [_vm.userCan("users.edit") ? _c("inertia-link", {
      staticClass: "flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide focus:outline-none focus:ring hover:bg-theme-info hover:text-theme-info-contrast",
      attrs: {
        href: _vm.$route("admin.users.edit", user.id),
        title: "Edit User"
      }
    }, [_c("icon-edit", {
      staticClass: "w-4"
    })], 1) : _vm._e(), _vm._v(" "), _vm.userCan("users.delete") ? _c("button", {
      staticClass: "flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide focus:outline-none focus:ring hover:bg-theme-danger hover:text-theme-danger-contrast",
      attrs: {
        disabled: _vm.isUserCurrent(user),
        title: "Delete User"
      },
      on: {
        click: function click($event) {
          return _vm.checkUserDelete(user);
        }
      }
    }, [_c("icon-trash", {
      staticClass: "w-4"
    })], 1) : _vm._e()], 1)]) : _vm._e()]);
  }), 0)])])], _vm._v(" "), _vm.showPagination ? _c("div", {
    staticClass: "flex flex-row justify-center mt-12 px-6"
  }, [_c("pagination", {
    attrs: {
      pagination: _vm.users.pagination
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("confirmation-modal", {
    attrs: {
      "confirm-text": "Delete",
      "confirm-type": "danger",
      "show-modal": _vm.showDeleteModal,
      "message-text": _vm.deleteModalText
    },
    on: {
      cancelAction: _vm.cancelUserDelete,
      closeModal: _vm.cancelUserDelete,
      confirmAction: _vm.confirmUserDelete
    }
  })], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/admin/user/Index.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/admin/user/Index.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_d1f1aad2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=d1f1aad2 */ "./resources/js/pages/admin/user/Index.vue?vue&type=template&id=d1f1aad2");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/pages/admin/user/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_d1f1aad2__WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_d1f1aad2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/user/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/user/Index.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/admin/user/Index.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/user/Index.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/user/Index.vue?vue&type=template&id=d1f1aad2":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/admin/user/Index.vue?vue&type=template&id=d1f1aad2 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_d1f1aad2__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_d1f1aad2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_d1f1aad2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=d1f1aad2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/user/Index.vue?vue&type=template&id=d1f1aad2");


/***/ })

}]);