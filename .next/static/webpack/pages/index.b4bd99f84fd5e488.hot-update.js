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

/***/ "./components/ui/Modal.js":
/*!********************************!*\
  !*** ./components/ui/Modal.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Modal_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal.module.css */ \"./components/ui/Modal.module.css\");\n/* harmony import */ var _Modal_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Modal_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Modal = function(param) {\n    var meetup = param.meetup, onClose = param.onClose;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isDeleted = ref[0], setIsDeleted = ref[1];\n    function handleConfirmDelete() {\n        return _handleConfirmDelete.apply(this, arguments);\n    }\n    function _handleConfirmDelete() {\n        _handleConfirmDelete = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function() {\n            var response, data;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        console.log(\"DELETE started for \" + meetup.id);\n                        return [\n                            4,\n                            fetch(\"/api/meetups/\".concat(meetup.id), {\n                                method: \"DELETE\"\n                            })\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 2:\n                        data = _state.sent();\n                        setIsDeleted(true);\n                        setTimeout(function() {\n                            onClose();\n                        }, 2000); // Close the modal after 2 seconds\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _handleConfirmDelete.apply(this, arguments);\n    }\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Modal_module_css__WEBPACK_IMPORTED_MODULE_4___default().backdrop),\n                onClick: onClose\n            }, void 0, false, {\n                fileName: \"/home/antomos/code/projects/meetup-next-js/components/ui/Modal.js\",\n                lineNumber: 25,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Modal_module_css__WEBPACK_IMPORTED_MODULE_4___default().modal),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Modal_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),\n                        children: [\n                            \"meetup Details: \",\n                            meetup.title\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/antomos/code/projects/meetup-next-js/components/ui/Modal.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this),\n                    isDeleted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Element deleted successfully!\"\n                    }, void 0, false, {\n                        fileName: \"/home/antomos/code/projects/meetup-next-js/components/ui/Modal.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Other meetup details go here...\"\n                            }, void 0, false, {\n                                fileName: \"/home/antomos/code/projects/meetup-next-js/components/ui/Modal.js\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Modal_module_css__WEBPACK_IMPORTED_MODULE_4___default().actions),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleConfirmDelete,\n                                        children: \"Confirm Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/antomos/code/projects/meetup-next-js/components/ui/Modal.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: onClose,\n                                        children: \"Cancel\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/antomos/code/projects/meetup-next-js/components/ui/Modal.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/antomos/code/projects/meetup-next-js/components/ui/Modal.js\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/antomos/code/projects/meetup-next-js/components/ui/Modal.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Modal, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL01vZGFsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7OztBQUEyQztBQUNGO0FBRXpDLElBQU1HLEtBQUssR0FBRyxnQkFBeUI7UUFBdEJDLE1BQU0sU0FBTkEsTUFBTSxFQUFFQyxPQUFPLFNBQVBBLE9BQU87O0lBQzlCLElBQWtDTCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQTFDTSxTQUFTLEdBQWtCTixHQUFlLEdBQWpDLEVBQUVPLFlBQVksR0FBSVAsR0FBZSxHQUFuQjthQUVmUSxtQkFBbUI7ZUFBbkJBLG9CQUFtQjs7YUFBbkJBLG9CQUFtQjtRQUFuQkEsb0JBQW1CLEdBQWxDLCtGQUFzQztnQkFHNUJDLFFBQVEsRUFJUkMsSUFBSTs7Ozt3QkFMVkMsT0FBTyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLEdBQUdSLE1BQU0sQ0FBQ1MsRUFBRSxDQUFDLENBQUM7d0JBQzlCOzs0QkFBTUMsS0FBSyxDQUFDLGVBQWMsQ0FBWSxPQUFWVixNQUFNLENBQUNTLEVBQUUsQ0FBRSxFQUFFO2dDQUN4REUsTUFBTSxFQUFFLFFBQVE7NkJBQ2pCLENBQUM7MEJBQUE7O3dCQUZJTixRQUFRLEdBQUcsYUFFZjt3QkFFVzs7NEJBQU1BLFFBQVEsQ0FBQ08sSUFBSSxFQUFFOzBCQUFBOzt3QkFBNUJOLElBQUksR0FBRyxhQUFxQjt3QkFHcENILFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDbkJVLFVBQVUsQ0FBQyxXQUFNOzRCQUNmWixPQUFPLEVBQUUsQ0FBQzt3QkFDWixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxrQ0FBa0M7Ozs7OztRQUM5QyxDQUFDO2VBZGNHLG9CQUFtQjs7O0lBZ0JsQyxxQkFDRTs7MEJBQ0EsOERBQUNVLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRWpCLG1FQUFnQjtnQkFBRW1CLE9BQU8sRUFBRWhCLE9BQU87Ozs7O3FCQUFHOzBCQUNuRCw4REFBQ2EsS0FBRztnQkFBQ0MsU0FBUyxFQUFFakIsZ0VBQWE7O2tDQUMzQiw4REFBQ2dCLEtBQUc7d0JBQUNDLFNBQVMsRUFBRWpCLGtFQUFlOzs0QkFBRSxrQkFBZ0I7NEJBQUNFLE1BQU0sQ0FBQ29CLEtBQUs7Ozs7Ozs2QkFBTztvQkFFcEVsQixTQUFTLGlCQUNSLDhEQUFDWSxLQUFHO2tDQUFDLCtCQUE2Qjs7Ozs7NkJBQU0saUJBRXhDOzswQ0FDRSw4REFBQ0EsS0FBRzswQ0FBQyxpQ0FBK0I7Ozs7O3FDQUFNOzBDQUMxQyw4REFBQ0EsS0FBRztnQ0FBQ0MsU0FBUyxFQUFFakIsa0VBQWU7O2tEQUM3Qiw4REFBQ3dCLFFBQU07d0NBQUNMLE9BQU8sRUFBRWIsbUJBQW1CO2tEQUFFLGdCQUFjOzs7Ozs2Q0FBUztrREFDN0QsOERBQUNrQixRQUFNO3dDQUFDTCxPQUFPLEVBQUVoQixPQUFPO2tEQUFFLFFBQU07Ozs7OzZDQUFTOzs7Ozs7cUNBQ3JDOztvQ0FDTDs7Ozs7O3FCQUVEOztvQkFHTCxDQUNIO0FBQ0osQ0FBQztHQXpDS0YsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBMkNYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9Nb2RhbC5qcz8zYjJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vTW9kYWwubW9kdWxlLmNzcyc7XG5cbmNvbnN0IE1vZGFsID0gKHsgbWVldHVwLCBvbkNsb3NlIH0pID0+IHtcbiAgY29uc3QgW2lzRGVsZXRlZCwgc2V0SXNEZWxldGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVDb25maXJtRGVsZXRlICgpIHtcblxuICAgICAgY29uc29sZS5sb2coJ0RFTEVURSBzdGFydGVkIGZvciAnICsgbWVldHVwLmlkKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvbWVldHVwcy8ke21lZXR1cC5pZH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURSdcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG5cbiAgICBzZXRJc0RlbGV0ZWQodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBvbkNsb3NlKCk7XG4gICAgfSwgMjAwMCk7IC8vIENsb3NlIHRoZSBtb2RhbCBhZnRlciAyIHNlY29uZHNcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmFja2Ryb3B9IG9uQ2xpY2s9e29uQ2xvc2V9Lz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+bWVldHVwIERldGFpbHM6IHttZWV0dXAudGl0bGV9PC9kaXY+XG5cbiAgICAgICAge2lzRGVsZXRlZCA/IChcbiAgICAgICAgICA8ZGl2PkVsZW1lbnQgZGVsZXRlZCBzdWNjZXNzZnVsbHkhPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXY+T3RoZXIgbWVldHVwIGRldGFpbHMgZ28gaGVyZS4uLjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ29uZmlybURlbGV0ZX0+Q29uZmlybSBEZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfT5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cblxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJGcmFnbWVudCIsImNsYXNzZXMiLCJNb2RhbCIsIm1lZXR1cCIsIm9uQ2xvc2UiLCJpc0RlbGV0ZWQiLCJzZXRJc0RlbGV0ZWQiLCJoYW5kbGVDb25maXJtRGVsZXRlIiwicmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImlkIiwiZmV0Y2giLCJtZXRob2QiLCJqc29uIiwic2V0VGltZW91dCIsImRpdiIsImNsYXNzTmFtZSIsImJhY2tkcm9wIiwib25DbGljayIsIm1vZGFsIiwiY29udGVudCIsInRpdGxlIiwiYWN0aW9ucyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ui/Modal.js\n"));

/***/ })

});