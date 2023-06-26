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

/***/ "./components/meetups/MeetupList.js":
/*!******************************************!*\
  !*** ./components/meetups/MeetupList.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MeetupItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetupItem */ \"./components/meetups/MeetupItem.js\");\n/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MeetupList.module.css */ \"./components/meetups/MeetupList.module.css\");\n/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _s = $RefreshSig$();\n\n\nfunction MeetupList(props) {\n    var _this = this;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(useState(null), 2), selectedMeetup = ref[0], setSelectedMeetup = ref[1];\n    var handleDelete = function(meetup) {\n        setSelectedMeetup(meetup);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: (_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_3___default().list),\n        children: [\n            props.meetups.map(function(meetup) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MeetupItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    id: meetup.id,\n                    image: meetup.image,\n                    title: meetup.title,\n                    address: meetup.address,\n                    onDelete: handleDelete\n                }, meetup.id, false, {\n                    fileName: \"/home/antomos/code/projects/meetup-next-js/components/meetups/MeetupList.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, _this);\n            }),\n            selectedMeetup && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Modal, {\n                meetup: selectedMeetup,\n                onClose: function() {\n                    return setSelectedMeetup(null);\n                }\n            }, void 0, false, {\n                fileName: \"/home/antomos/code/projects/meetup-next-js/components/meetups/MeetupList.js\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/antomos/code/projects/meetup-next-js/components/meetups/MeetupList.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(MeetupList, \"u9m+jdmUXOYVtpHmO1GshiuUVmo=\");\n_c = MeetupList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupList);\nvar _c;\n$RefreshReg$(_c, \"MeetupList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7OztBQUFzQztBQUNRO0FBRTlDLFNBQVNFLFVBQVUsQ0FBQ0MsS0FBSyxFQUFFOzs7SUFDekIsSUFBNENDLEdBQWMsb0ZBQWRBLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBbkRDLGNBQWMsR0FBdUJELEdBQWMsR0FBckMsRUFBRUUsaUJBQWlCLEdBQUlGLEdBQWMsR0FBbEI7SUFFeEMsSUFBTUcsWUFBWSxHQUFHLFNBQUNDLE1BQU0sRUFBSztRQUMvQkYsaUJBQWlCLENBQUNFLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCxxQkFDRSw4REFBQ0MsSUFBRTtRQUFDQyxTQUFTLEVBQUVULG9FQUFZOztZQUN4QkUsS0FBSyxDQUFDUyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFDTCxNQUFNO3FDQUN4Qiw4REFBQ1IsbURBQVU7b0JBRVRjLEVBQUUsRUFBRU4sTUFBTSxDQUFDTSxFQUFFO29CQUNiQyxLQUFLLEVBQUVQLE1BQU0sQ0FBQ08sS0FBSztvQkFDbkJDLEtBQUssRUFBRVIsTUFBTSxDQUFDUSxLQUFLO29CQUNuQkMsT0FBTyxFQUFFVCxNQUFNLENBQUNTLE9BQU87b0JBQ3ZCQyxRQUFRLEVBQUVYLFlBQVk7bUJBTGpCQyxNQUFNLENBQUNNLEVBQUU7Ozs7eUJBTWQ7YUFDSCxDQUFDO1lBQ0FULGNBQWMsa0JBQ2QsOERBQUNjLEtBQUs7Z0JBQUNYLE1BQU0sRUFBRUgsY0FBYztnQkFBRWUsT0FBTyxFQUFFOzJCQUFNZCxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7aUJBQUE7Ozs7O29CQUFJOzs7Ozs7WUFFeEUsQ0FDTDtBQUNKLENBQUM7R0F2QlFKLFVBQVU7QUFBVkEsS0FBQUEsVUFBVTtBQXlCbkIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdC5qcz9hMGI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWV0dXBJdGVtIGZyb20gJy4vTWVldHVwSXRlbSc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL01lZXR1cExpc3QubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIE1lZXR1cExpc3QocHJvcHMpIHtcbiAgY29uc3QgW3NlbGVjdGVkTWVldHVwLCBzZXRTZWxlY3RlZE1lZXR1cF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAobWVldHVwKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRNZWV0dXAobWVldHVwKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxuICAgICAge3Byb3BzLm1lZXR1cHMubWFwKChtZWV0dXApID0+IChcbiAgICAgICAgPE1lZXR1cEl0ZW1cbiAgICAgICAgICBrZXk9e21lZXR1cC5pZH1cbiAgICAgICAgICBpZD17bWVldHVwLmlkfVxuICAgICAgICAgIGltYWdlPXttZWV0dXAuaW1hZ2V9XG4gICAgICAgICAgdGl0bGU9e21lZXR1cC50aXRsZX1cbiAgICAgICAgICBhZGRyZXNzPXttZWV0dXAuYWRkcmVzc31cbiAgICAgICAgICBvbkRlbGV0ZT17aGFuZGxlRGVsZXRlfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgICAge3NlbGVjdGVkTWVldHVwICYmIChcbiAgICAgICAgPE1vZGFsIG1lZXR1cD17c2VsZWN0ZWRNZWV0dXB9IG9uQ2xvc2U9eygpID0+IHNldFNlbGVjdGVkTWVldHVwKG51bGwpfSAvPlxuICAgICAgKX1cbiAgICA8L3VsPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBMaXN0O1xuIl0sIm5hbWVzIjpbIk1lZXR1cEl0ZW0iLCJjbGFzc2VzIiwiTWVldHVwTGlzdCIsInByb3BzIiwidXNlU3RhdGUiLCJzZWxlY3RlZE1lZXR1cCIsInNldFNlbGVjdGVkTWVldHVwIiwiaGFuZGxlRGVsZXRlIiwibWVldHVwIiwidWwiLCJjbGFzc05hbWUiLCJsaXN0IiwibWVldHVwcyIsIm1hcCIsImlkIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiLCJvbkRlbGV0ZSIsIk1vZGFsIiwib25DbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/meetups/MeetupList.js\n"));

/***/ })

});