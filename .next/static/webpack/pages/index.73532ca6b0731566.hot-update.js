"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/sections/Testimonials.js":
/*!*************************************************!*\
  !*** ./src/components/sections/Testimonials.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar Testimonials = function() {\n    _s();\n    var _useState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), testimonials = _useState[0], setTestimonials = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"http://localhost:3000/api/userData\").then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            // Take the first 3 testimonials\n            var firstThreeTestimonials = data.testimonials.slice(0, 3);\n            setTestimonials(firstThreeTestimonials);\n        })[\"catch\"](function(error) {\n            console.error(\"Error fetching data: \", error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"testimonials\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"testimonials-container flex-column-mobile\",\n                children: [\n                    testimonials.length >= 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"quote-container animated-layer fade-in-right-animation fadeInUp wow\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"quote\",\n                                            children: [\n                                                '\"',\n                                                testimonials[0].review,\n                                                '\"'\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                                            lineNumber: 27,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"person\",\n                                            children: testimonials[0].name\n                                        }, void 0, false, {\n                                            fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                                            lineNumber: 30,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"job\",\n                                            children: testimonials[0].position\n                                        }, void 0, false, {\n                                            fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: testimonials[0].image.url,\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, _this),\n                    testimonials.length >= 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"quote-container animated-layer fade-in-right-animation fadeInUp wow\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"quote\",\n                                            children: [\n                                                '\"',\n                                                testimonials[1].review,\n                                                '\"'\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"person\",\n                                            children: testimonials[1].name\n                                        }, void 0, false, {\n                                            fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                                            lineNumber: 44,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"job\",\n                                            children: testimonials[1].position\n                                        }, void 0, false, {\n                                            fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: testimonials[1].image.url,\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, _this),\n                    testimonials.length >= 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"quote-container animated-layer fade-in-right-animation fadeInUp wow\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"quote\",\n                                            children: [\n                                                '\"',\n                                                testimonials[2].review,\n                                                '\"'\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"person\",\n                                            children: testimonials[2].name\n                                        }, void 0, false, {\n                                            fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"job\",\n                                            children: testimonials[2].position\n                                        }, void 0, false, {\n                                            fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: testimonials[2].image.url,\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: \"\",\n                className: \"z-1 hide-mobile opposite-separator\",\n                src: \"assets/separator-opposite.png\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_s(Testimonials, \"UYLtUlzB1jaIo2tZmHWKjo4pYJY=\");\n_c = Testimonials;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Testimonials);\nvar _c;\n$RefreshReg$(_c, \"Testimonials\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9UZXN0aW1vbmlhbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QztBQUU1QyxJQUFNRSxlQUFlLFdBQU07O0lBQ3pCLElBQXdDRixZQUFBQSxnRkFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsRUFBRSxPQUE1Q0csZUFBaUNILGNBQW5CSSxrQkFBbUJKO0lBRXhDQyxnREFBU0EsQ0FBQyxXQUFNO1FBQ2RJLE1BQU0sc0NBQ0hDLElBQUksQ0FBQ0MsU0FBQUE7bUJBQVlBLFNBQVNDLElBQUk7V0FDOUJGLElBQUksQ0FBQ0csU0FBQUEsTUFBUTtZQUNaLGdDQUFnQztZQUNoQyxJQUFNQyx5QkFBeUJELEtBQUtOLFlBQVksQ0FBQ1EsS0FBSyxDQUFDLEdBQUc7WUFDMURQLGdCQUFnQk07UUFDbEIsRUFDQ0UsQ0FBQUEsUUFBSyxDQUFDQyxTQUFBQSxPQUFTO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyx5QkFBeUJBO1FBQ3pDO0lBQ0osR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNFO1FBQVFDLFdBQVU7OzBCQUNqQiw4REFBQ0M7Z0JBQUlELFdBQVU7O29CQUVaYixhQUFhZSxNQUFNLElBQUksbUJBQ3RCLDhEQUFDRDt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ0M7OzhDQUNDLDhEQUFDRTs7c0RBQ0MsOERBQUNDOzRDQUFLSixXQUFVOztnREFBUTtnREFDcEJiLFlBQVksQ0FBQyxFQUFFLENBQUNrQixNQUFNO2dEQUFDOzs7Ozs7O3NEQUUzQiw4REFBQ0Q7NENBQUtKLFdBQVU7c0RBQVViLFlBQVksQ0FBQyxFQUFFLENBQUNtQixJQUFJOzs7Ozs7c0RBQzlDLDhEQUFDRjs0Q0FBS0osV0FBVTtzREFBT2IsWUFBWSxDQUFDLEVBQUUsQ0FBQ29CLFFBQVE7Ozs7Ozs7Ozs7Ozs4Q0FFakQsOERBQUNDO29DQUFJQyxLQUFLdEIsWUFBWSxDQUFDLEVBQUUsQ0FBQ3VCLEtBQUssQ0FBQ0MsR0FBRztvQ0FBRUMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBSTlDekIsYUFBYWUsTUFBTSxJQUFJLG1CQUN0Qiw4REFBQ0Q7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNDOzs4Q0FDQyw4REFBQ0U7O3NEQUNDLDhEQUFDQzs0Q0FBS0osV0FBVTs7Z0RBQVE7Z0RBQ3BCYixZQUFZLENBQUMsRUFBRSxDQUFDa0IsTUFBTTtnREFBQzs7Ozs7OztzREFFM0IsOERBQUNEOzRDQUFLSixXQUFVO3NEQUFVYixZQUFZLENBQUMsRUFBRSxDQUFDbUIsSUFBSTs7Ozs7O3NEQUM5Qyw4REFBQ0Y7NENBQUtKLFdBQVU7c0RBQU9iLFlBQVksQ0FBQyxFQUFFLENBQUNvQixRQUFROzs7Ozs7Ozs7Ozs7OENBRWpELDhEQUFDQztvQ0FBSUMsS0FBS3RCLFlBQVksQ0FBQyxFQUFFLENBQUN1QixLQUFLLENBQUNDLEdBQUc7b0NBQUVDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUk5Q3pCLGFBQWFlLE1BQU0sSUFBSSxtQkFDdEIsOERBQUNEO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDQzs7OENBQ0MsOERBQUNFOztzREFDQyw4REFBQ0M7NENBQUtKLFdBQVU7O2dEQUFRO2dEQUNwQmIsWUFBWSxDQUFDLEVBQUUsQ0FBQ2tCLE1BQU07Z0RBQUM7Ozs7Ozs7c0RBRTNCLDhEQUFDRDs0Q0FBS0osV0FBVTtzREFBVWIsWUFBWSxDQUFDLEVBQUUsQ0FBQ21CLElBQUk7Ozs7OztzREFDOUMsOERBQUNGOzRDQUFLSixXQUFVO3NEQUFPYixZQUFZLENBQUMsRUFBRSxDQUFDb0IsUUFBUTs7Ozs7Ozs7Ozs7OzhDQUVqRCw4REFBQ0M7b0NBQUlDLEtBQUt0QixZQUFZLENBQUMsRUFBRSxDQUFDdUIsS0FBSyxDQUFDQyxHQUFHO29DQUFFQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLakQsOERBQUNKO2dCQUNDSSxLQUFJO2dCQUNKWixXQUFVO2dCQUNWUyxLQUFJOzs7Ozs7Ozs7Ozs7QUFJWjtHQXRFTXZCO0tBQUFBO0FBd0VOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb25zL1Rlc3RpbW9uaWFscy5qcz81YzM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFRlc3RpbW9uaWFscyA9ICgpID0+IHtcclxuICBjb25zdCBbdGVzdGltb25pYWxzLCBzZXRUZXN0aW1vbmlhbHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXNlckRhdGEnKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIC8vIFRha2UgdGhlIGZpcnN0IDMgdGVzdGltb25pYWxzXHJcbiAgICAgICAgY29uc3QgZmlyc3RUaHJlZVRlc3RpbW9uaWFscyA9IGRhdGEudGVzdGltb25pYWxzLnNsaWNlKDAsIDMpO1xyXG4gICAgICAgIHNldFRlc3RpbW9uaWFscyhmaXJzdFRocmVlVGVzdGltb25pYWxzKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTogXCIsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGVzdGltb25pYWxzXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdGltb25pYWxzLWNvbnRhaW5lciBmbGV4LWNvbHVtbi1tb2JpbGVcIj5cclxuICAgICAgICB7LyogQ2hlY2sgaWYgdGVzdGltb25pYWxzIGFycmF5IGhhcyBhdCBsZWFzdCAzIGl0ZW1zIGJlZm9yZSByZW5kZXJpbmcgKi99XHJcbiAgICAgICAge3Rlc3RpbW9uaWFscy5sZW5ndGggPj0gMyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1b3RlLWNvbnRhaW5lciBhbmltYXRlZC1sYXllciBmYWRlLWluLXJpZ2h0LWFuaW1hdGlvbiBmYWRlSW5VcCB3b3dcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInF1b3RlXCI+XHJcbiAgICAgICAgICAgICAgICAgIFwie3Rlc3RpbW9uaWFsc1swXS5yZXZpZXd9XCJcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBlcnNvblwiPnt0ZXN0aW1vbmlhbHNbMF0ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJqb2JcIj57dGVzdGltb25pYWxzWzBdLnBvc2l0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e3Rlc3RpbW9uaWFsc1swXS5pbWFnZS51cmx9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7dGVzdGltb25pYWxzLmxlbmd0aCA+PSAzICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVvdGUtY29udGFpbmVyIGFuaW1hdGVkLWxheWVyIGZhZGUtaW4tcmlnaHQtYW5pbWF0aW9uIGZhZGVJblVwIHdvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicXVvdGVcIj5cclxuICAgICAgICAgICAgICAgICAgXCJ7dGVzdGltb25pYWxzWzFdLnJldmlld31cIlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGVyc29uXCI+e3Rlc3RpbW9uaWFsc1sxXS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImpvYlwiPnt0ZXN0aW1vbmlhbHNbMV0ucG9zaXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17dGVzdGltb25pYWxzWzFdLmltYWdlLnVybH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHt0ZXN0aW1vbmlhbHMubGVuZ3RoID49IDMgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdW90ZS1jb250YWluZXIgYW5pbWF0ZWQtbGF5ZXIgZmFkZS1pbi1yaWdodC1hbmltYXRpb24gZmFkZUluVXAgd293XCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJxdW90ZVwiPlxyXG4gICAgICAgICAgICAgICAgICBcInt0ZXN0aW1vbmlhbHNbMl0ucmV2aWV3fVwiXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwZXJzb25cIj57dGVzdGltb25pYWxzWzJdLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiam9iXCI+e3Rlc3RpbW9uaWFsc1syXS5wb3NpdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXt0ZXN0aW1vbmlhbHNbMl0uaW1hZ2UudXJsfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJ6LTEgaGlkZS1tb2JpbGUgb3Bwb3NpdGUtc2VwYXJhdG9yXCJcclxuICAgICAgICBzcmM9XCJhc3NldHMvc2VwYXJhdG9yLW9wcG9zaXRlLnBuZ1wiXHJcbiAgICAgIC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFscztcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVGVzdGltb25pYWxzIiwidGVzdGltb25pYWxzIiwic2V0VGVzdGltb25pYWxzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImZpcnN0VGhyZWVUZXN0aW1vbmlhbHMiLCJzbGljZSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImxlbmd0aCIsInAiLCJzcGFuIiwicmV2aWV3IiwibmFtZSIsInBvc2l0aW9uIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJ1cmwiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/sections/Testimonials.js\n"));

/***/ })

});