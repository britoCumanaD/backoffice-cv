"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_website_MobileMedia_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/MobileMedia.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/MobileMedia.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixins_configMixin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/configMixin.js */ "./resources/js/mixins/configMixin.js");
/* harmony import */ var _common_Icon_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/Icon.vue */ "./resources/js/components/website/common/Icon.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MobileMedia",
  mixins: [_mixins_configMixin_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    ComponentIcon: _common_Icon_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      showText: false
    };
  },
  props: {
    items: {
      type: Array,
      "default": null
    },
    title: {
      "default": null
    }
  },
  methods: {
    onClickShowText: function onClickShowText() {
      this.showText = !this.showText;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/common/Icon.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/common/Icon.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_inline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-inline-svg */ "./node_modules/vue-inline-svg/src/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ComponentIcon",
  props: {
    color: {
      type: String,
      "default": "icon-primary"
    },
    name: {
      type: String
    },
    height: {
      required: true
    },
    width: {
      required: true
    }
  },
  components: {
    InlineSvg: vue_inline_svg__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/MobileMedia.vue?vue&type=template&id=4b2147d3":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/MobileMedia.vue?vue&type=template&id=4b2147d3 ***!
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
  return _c("section", {
    staticClass: "md:px-40 px-8"
  }, [_vm.isTablet ? _c("section", [_c("section", {
    staticClass: "flex max-w-360 justify-between pb-6",
    on: {
      click: function click($event) {
        return _vm.onClickShowText();
      }
    }
  }, [_c("section", [_c("p", {
    staticClass: "text-blue-600",
    domProps: {
      textContent: _vm._s(_vm.title)
    }
  })]), _vm._v(" "), _c("section", [_c("button", [_c("component-icon", {
    staticClass: "transform ease-out transition duration-700",
    "class": {
      "rotate-180": _vm.showText
    },
    attrs: {
      name: "arrow",
      width: 24,
      height: 24,
      color: "blue-600"
    }
  })], 1)])]), _vm._v(" "), _vm.showText ? _c("section", {
    staticClass: "pb-6"
  }, _vm._l(_vm.items, function (item, index) {
    return _c("section", {
      key: index
    }, [item.target !== "inertia" ? _c("a", {
      ref: item.rel !== "null" ? item.rel : "",
      refInFor: true,
      staticClass: "text-gray-500 hover:text-black duration-500",
      "class": item.custom_class,
      attrs: {
        href: item.href,
        target: item.target
      }
    }, [_c("p", {
      staticClass: "pb-3",
      domProps: {
        textContent: _vm._s(item.label)
      }
    })]) : _vm._e(), _vm._v(" "), item.target == "inertia" ? _c("inertia-link", {
      staticClass: "text-gray-500 hover:text-black duration-500",
      "class": item.custom_class,
      attrs: {
        href: item.href
      }
    }, [_c("p", {
      staticClass: "pb-3",
      domProps: {
        textContent: _vm._s(item.label)
      }
    })]) : _vm._e()], 1);
  }), 0) : _vm._e()]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/common/Icon.vue?vue&type=template&id=5de10f64":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/common/Icon.vue?vue&type=template&id=5de10f64 ***!
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
  return _c("inline-svg", {
    "class": "text-".concat(_vm.color, " fill-current"),
    attrs: {
      src: "./images/".concat(this.name, ".svg"),
      width: _vm.width,
      height: _vm.height
    }
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/website/MobileMedia.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/website/MobileMedia.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MobileMedia_vue_vue_type_template_id_4b2147d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileMedia.vue?vue&type=template&id=4b2147d3 */ "./resources/js/components/website/MobileMedia.vue?vue&type=template&id=4b2147d3");
/* harmony import */ var _MobileMedia_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MobileMedia.vue?vue&type=script&lang=js */ "./resources/js/components/website/MobileMedia.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MobileMedia_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MobileMedia_vue_vue_type_template_id_4b2147d3__WEBPACK_IMPORTED_MODULE_0__.render,
  _MobileMedia_vue_vue_type_template_id_4b2147d3__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/website/MobileMedia.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/website/common/Icon.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/website/common/Icon.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Icon_vue_vue_type_template_id_5de10f64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon.vue?vue&type=template&id=5de10f64 */ "./resources/js/components/website/common/Icon.vue?vue&type=template&id=5de10f64");
/* harmony import */ var _Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon.vue?vue&type=script&lang=js */ "./resources/js/components/website/common/Icon.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Icon_vue_vue_type_template_id_5de10f64__WEBPACK_IMPORTED_MODULE_0__.render,
  _Icon_vue_vue_type_template_id_5de10f64__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/website/common/Icon.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/website/MobileMedia.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/website/MobileMedia.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMedia_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MobileMedia.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/MobileMedia.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMedia_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/website/common/Icon.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/website/common/Icon.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Icon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/common/Icon.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/website/MobileMedia.vue?vue&type=template&id=4b2147d3":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/website/MobileMedia.vue?vue&type=template&id=4b2147d3 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMedia_vue_vue_type_template_id_4b2147d3__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMedia_vue_vue_type_template_id_4b2147d3__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMedia_vue_vue_type_template_id_4b2147d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MobileMedia.vue?vue&type=template&id=4b2147d3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/MobileMedia.vue?vue&type=template&id=4b2147d3");


/***/ }),

/***/ "./resources/js/components/website/common/Icon.vue?vue&type=template&id=5de10f64":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/website/common/Icon.vue?vue&type=template&id=5de10f64 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_template_id_5de10f64__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_template_id_5de10f64__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_template_id_5de10f64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Icon.vue?vue&type=template&id=5de10f64 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/common/Icon.vue?vue&type=template&id=5de10f64");


/***/ }),

/***/ "./node_modules/vue-inline-svg/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/vue-inline-svg/src/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineSvgComponent: () => (/* binding */ InlineSvgComponent),
/* harmony export */   InlineSvgPlugin: () => (/* binding */ InlineSvgPlugin),
/* harmony export */   "default": () => (/* binding */ InlineSvgComponent)
/* harmony export */ });
/** @type {Record<string, PromiseWithState<Element>>} */
const cache = {};

/**
 * Remove false attrs
 * @param {Object} attrs
 */
function filterAttrs(attrs) {
    return Object.keys(attrs).reduce((result, key) => {
        if (attrs[key] !== false && attrs[key] !== null && attrs[key] !== undefined) {
            result[key] = attrs[key];
        }
        return result;
    }, {});
}

const InlineSvgComponent = {
    name: 'InlineSvg',
    inheritAttrs: false,
    render(createElement) {
        if (!this.svgElSource) {
            return null;
        }
        return createElement(
            'svg',
            {
                on: this.$listeners,
                attrs: Object.assign(this.getSvgAttrs(this.svgElSource), filterAttrs(this.$attrs)),
                domProps: {
                    innerHTML: this.getSvgContent(this.svgElSource),
                },
            },
        );
    },
    props: {
        src: {
            type: String,
            required: true,
        },
        title: {
            type: String,
        },
        transformSource: {
            type: Function,
            default: (svg) => svg,
        },
        keepDuringLoading: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            /** @type {SVGElement} */
            svgElSource: null,
            /** @type {XMLHttpRequest} */
            request: undefined,
        };
    },
    watch: {
        src(newValue) {
            // re-generate cached svg (`svgElSource`)
            this.getSource(newValue);
        },
    },
    mounted() {
        // generate `svgElSource`
        this.getSource(this.src);
    },
    methods: {
        getSvgAttrs(svgEl) {
            // copy attrs
            let svgAttrs = {};
            const attrs = svgEl.attributes;
            if (!attrs) {
                return svgAttrs;
            }
            for (let i = attrs.length - 1; i >= 0; i--) {
                svgAttrs[attrs[i].name] = attrs[i].value;
            }
            return svgAttrs;
        },
        getSvgContent(svgEl) {
            svgEl = svgEl.cloneNode(true);
            svgEl = this.transformSource(svgEl);
            if (this.title) {
                setTitle(svgEl, this.title);
            }

            // copy inner html
            return svgEl.innerHTML;
        },
        /**
         * Get svgElSource
         * @param {string} src
         */
        getSource(src) {
            // fill cache by src with promise
            if (!cache[src]) {
                // download
                cache[src] = this.download(src);
            }
            // notify svg is unloaded
            if (this.svgElSource && cache[src].getIsPending() && !this.keepDuringLoading) {
                this.svgElSource = null;
                this.$emit('unloaded');
            }

            // inline svg when cached promise resolves
            cache[src]
                .then((svg) => {
                    this.svgElSource = svg;
                    // wait to render
                    this.$nextTick(() => {
                        // notify
                        this.$emit('loaded', this.$el);
                    });
                })
                .catch((err) => {
                    // notify svg is unloaded
                    if (this.svgElSource) {
                        this.svgElSource = null;
                        this.$emit('unloaded');
                    }
                    // remove cached rejected promise so next image can try load again
                    delete cache[src];
                    this.$emit('error', err);
                });
        },

        /**
         * Get the contents of the SVG
         * @param {string} url
         * @returns {PromiseWithState<Element>}
         */
        download(url) {
            return makePromiseState(new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
                request.open('GET', url, true);
                this.request = request;

                request.onload = () => {
                    if (request.status >= 200 && request.status < 400) {
                        try {
                            // Setup a parser to convert the response to text/xml in order for it to be manipulated and changed
                            const parser = new DOMParser();
                            const result = parser.parseFromString(request.responseText, 'text/xml');
                            let svgEl = result.getElementsByTagName('svg')[0];
                            if (svgEl) {
                                // svgEl = this.transformSource(svgEl);
                                resolve(svgEl);
                            } else {
                                reject(new Error('Loaded file is not valid SVG"'));
                            }
                        } catch (e) {
                            reject(e);
                        }
                    } else {
                        reject(new Error('Error loading SVG'));
                    }
                };

                request.onerror = reject;
                request.send();
            }));
        },
    },
};

/**
 * Create or edit the <title> element of a SVG
 * @param {SVGElement} svg
 * @param {string} title
 */
function setTitle(svg, title) {
    const titleTags = svg.getElementsByTagName('title');
    if (titleTags.length) { // overwrite existing title
        titleTags[0].textContent = title;
    } else { // create a title element if one doesn't already exist
        const titleEl = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        titleEl.textContent = title;
        // svg.prepend(titleEl);
        svg.insertBefore(titleEl, svg.firstChild);
    }
}

/**
 * @typedef {Promise & object} PromiseWithState
 * @property {function: boolean} getIsPending
 * @template T
 */

/**
 * This function allow you to modify a JS Promise by adding some status properties.
 * @template {any} T
 * @param {Promise<T>|PromiseWithState<T>} promise
 * @return {PromiseWithState<T>}
 */
function makePromiseState(promise) {
    // Don't modify any promise that has been already modified.
    if (promise.getIsPending) return promise;

    // Set initial state
    let isPending = true;

    // Observe the promise, saving the fulfillment in a closure scope.
    let result = promise.then(
        (v) => {
            isPending = false;
            return v;
        },
        (e) => {
            isPending = false;
            throw e;
        },
    );

    result.getIsPending = function getIsPending() { return isPending; };
    return result;
}

const InlineSvgPlugin = {
    install(Vue) {
        Vue.component('inline-svg', InlineSvgComponent);
    },
};

// @TODO https://github.com/airbnb/javascript/pull/2721 need to be fixed
// eslint-disable-next-line no-restricted-exports



/***/ })

}]);