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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar Testimonials = function() {\n    _s();\n    var _useState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), testimonials = _useState[0], setTestimonials = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"http://localhost:3000/api/userData\").then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            setTestimonials(data.testimonials);\n        })[\"catch\"](function(error) {\n            console.error(\"Error fetching data: \", error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"testimonials\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"testimonials-container flex-column-mobile\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"quote-container animated-layer fade-in-right-animation fadeInUp wow\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"quote\",\n                                            children: [\n                                                '\"',\n                                                testimonials[0].review,\n                                                '\"'\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                                            lineNumber: 26,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"person\",\n                                            children: testimonials[0].name\n                                        }, void 0, false, {\n                                            fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                                            lineNumber: 29,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"job\",\n                                            children: testimonials[0].position\n                                        }, void 0, false, {\n                                            fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                                            lineNumber: 30,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"assets/testimonials/testimonial-1.jpg\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"quote-container animated-layer fade-in-right-animation fadeInUp wow\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"quote\",\n                                            children: '\" Steven is a great help managing a very out of date website. Everything we ask him to do is done quickly and efficiently, we would be lost without him. \"'\n                                        }, void 0, false, {\n                                            fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"person\",\n                                            children: \"Mark Eliott\"\n                                        }, void 0, false, {\n                                            fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"job\",\n                                            children: \"Manager - Envato\"\n                                        }, void 0, false, {\n                                            fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"assets/testimonials/testimonial-2.jpg\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: \"\",\n                className: \"z-1 hide-mobile opposite-separator\",\n                src: \"assets/separator-opposite.png\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"H:\\\\Sajeed\\\\projects\\\\salimov\\\\src\\\\components\\\\sections\\\\Testimonials.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_s(Testimonials, \"HjI5PeqWp7+NPFxxm9Onq2IKx8w=\");\n_c = Testimonials;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Testimonials);\nvar _c;\n$RefreshReg$(_c, \"Testimonials\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9UZXN0aW1vbmlhbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QztBQUU1QyxJQUFNRSxlQUFlLFdBQU07O0lBRXpCLElBQXdDRixZQUFBQSxnRkFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsU0FBMUNHLGVBQWlDSCxjQUFuQkksa0JBQW1CSjtJQUV4Q0MsZ0RBQVNBLENBQUMsV0FBTTtRQUNkSSxNQUFNLHNDQUNMQyxJQUFJLENBQUNDLFNBQUFBO21CQUFZQSxTQUFTQyxJQUFJO1dBQzlCRixJQUFJLENBQUNHLFNBQUFBLE1BQVE7WUFDWkwsZ0JBQWdCSyxLQUFLTixZQUFZO1FBQ25DLEVBQ0NPLENBQUFBLFFBQUssQ0FBQ0MsU0FBQUEsT0FBUztZQUNkQyxRQUFRRCxLQUFLLENBQUMseUJBQXlCQTtRQUN6QztJQUNGLEdBQUcsRUFBRTtJQUdMLHFCQUNFLDhEQUFDRTtRQUFRQyxXQUFVOzswQkFDakIsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FFYiw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNDOzs4Q0FDQyw4REFBQ0M7O3NEQUNDLDhEQUFDQzs0Q0FBS0gsV0FBVTs7Z0RBQVE7Z0RBQ3BCWCxZQUFZLENBQUMsRUFBRSxDQUFDZSxNQUFNO2dEQUFDOzs7Ozs7O3NEQUUzQiw4REFBQ0Q7NENBQUtILFdBQVU7c0RBQVVYLFlBQVksQ0FBQyxFQUFFLENBQUNnQixJQUFJOzs7Ozs7c0RBQzlDLDhEQUFDRjs0Q0FBS0gsV0FBVTtzREFBT1gsWUFBWSxDQUFDLEVBQUUsQ0FBQ2lCLFFBQVE7Ozs7Ozs7Ozs7Ozs4Q0FFakQsOERBQUNDO29DQUFJQyxLQUFJO29DQUF3Q0MsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS3pELDhEQUFDUjt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ0M7OzhDQUNDLDhEQUFDQzs7c0RBQ0MsOERBQUNDOzRDQUFLSCxXQUFVO3NEQUFROzs7Ozs7c0RBS3hCLDhEQUFDRzs0Q0FBS0gsV0FBVTtzREFBUzs7Ozs7O3NEQUN6Qiw4REFBQ0c7NENBQUtILFdBQVU7c0RBQU07Ozs7Ozs7Ozs7Ozs4Q0FFeEIsOERBQUNPO29DQUFJQyxLQUFJO29DQUF3Q0MsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSzNELDhEQUFDRjtnQkFDQ0UsS0FBSTtnQkFDSlQsV0FBVTtnQkFDVlEsS0FBSTs7Ozs7Ozs7Ozs7O0FBSVo7R0F6RE1wQjtLQUFBQTtBQTBETiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9UZXN0aW1vbmlhbHMuanM/NWMzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBUZXN0aW1vbmlhbHMgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFt0ZXN0aW1vbmlhbHMsIHNldFRlc3RpbW9uaWFsc10gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2VyRGF0YScpXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgc2V0VGVzdGltb25pYWxzKGRhdGEudGVzdGltb25pYWxzKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTogXCIsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXN0aW1vbmlhbHNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0aW1vbmlhbHMtY29udGFpbmVyIGZsZXgtY29sdW1uLW1vYmlsZVwiPlxyXG4gICAgICAgIHsvKiBURVNUSU1PTklBTCBJVEVNIFNUQVJUUyAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1b3RlLWNvbnRhaW5lciBhbmltYXRlZC1sYXllciBmYWRlLWluLXJpZ2h0LWFuaW1hdGlvbiBmYWRlSW5VcCB3b3dcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInF1b3RlXCI+XHJcbiAgICAgICAgICAgICAgICBcInt0ZXN0aW1vbmlhbHNbMF0ucmV2aWV3fVwiXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBlcnNvblwiPnt0ZXN0aW1vbmlhbHNbMF0ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiam9iXCI+e3Rlc3RpbW9uaWFsc1swXS5wb3NpdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvdGVzdGltb25pYWxzL3Rlc3RpbW9uaWFsLTEuanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiBURVNUSU1PTklBTCBJVEVNIEVORFMgKi99XHJcbiAgICAgICAgey8qIFRFU1RJTU9OSUFMIElURU0gU1RBUlRTICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVvdGUtY29udGFpbmVyIGFuaW1hdGVkLWxheWVyIGZhZGUtaW4tcmlnaHQtYW5pbWF0aW9uIGZhZGVJblVwIHdvd1wiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicXVvdGVcIj5cclxuICAgICAgICAgICAgICAgIFwiIFN0ZXZlbiBpcyBhIGdyZWF0IGhlbHAgbWFuYWdpbmcgYSB2ZXJ5IG91dCBvZiBkYXRlIHdlYnNpdGUuXHJcbiAgICAgICAgICAgICAgICBFdmVyeXRoaW5nIHdlIGFzayBoaW0gdG8gZG8gaXMgZG9uZSBxdWlja2x5IGFuZCBlZmZpY2llbnRseSwgd2VcclxuICAgICAgICAgICAgICAgIHdvdWxkIGJlIGxvc3Qgd2l0aG91dCBoaW0uIFwiXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBlcnNvblwiPk1hcmsgRWxpb3R0PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImpvYlwiPk1hbmFnZXIgLSBFbnZhdG88L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvdGVzdGltb25pYWxzL3Rlc3RpbW9uaWFsLTIuanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiBURVNUSU1PTklBTCBJVEVNIEVORFMgKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJ6LTEgaGlkZS1tb2JpbGUgb3Bwb3NpdGUtc2VwYXJhdG9yXCJcclxuICAgICAgICBzcmM9XCJhc3NldHMvc2VwYXJhdG9yLW9wcG9zaXRlLnBuZ1wiXHJcbiAgICAgIC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVGVzdGltb25pYWxzO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUZXN0aW1vbmlhbHMiLCJ0ZXN0aW1vbmlhbHMiLCJzZXRUZXN0aW1vbmlhbHMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwicCIsInNwYW4iLCJyZXZpZXciLCJuYW1lIiwicG9zaXRpb24iLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/sections/Testimonials.js\n"));

/***/ })

});