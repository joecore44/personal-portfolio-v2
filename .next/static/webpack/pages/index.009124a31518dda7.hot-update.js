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

/***/ "./src/components/utils/Logo.jsx":
/*!***************************************!*\
  !*** ./src/components/utils/Logo.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Logo = function(param) {\n    var _url = param.url, url = _url === void 0 ? \"/\" : _url, _text = param.text, text = _text === void 0 ? false : _text;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: url,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            className: \"sitelogo py-2\",\n            children: text ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-4xl font-bold uppercase leading-none text-primary\",\n                children: \"JoeShepard\"\n            }, void 0, false, {\n                fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/components/utils/Logo.jsx\",\n                lineNumber: 8,\n                columnNumber: 11\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"h-8 max-h-full w-auto\",\n                    src: \"/images/logo.png\",\n                    alt: \"Joe Shepard\"\n                }, void 0, false, {\n                    fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/components/utils/Logo.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false)\n        }, void 0, false, {\n            fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/components/utils/Logo.jsx\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/components/utils/Logo.jsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, _this);\n};\n_c = Logo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logo);\nvar _c;\n$RefreshReg$(_c, \"Logo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91dGlscy9Mb2dvLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUE2QjtBQUU3QixJQUFNQyxJQUFJLEdBQUcsZ0JBQWlDO3FCQUE5QkMsR0FBRyxFQUFIQSxHQUFHLHFCQUFHLEdBQUcsdUJBQUVDLElBQUksRUFBSkEsSUFBSSxzQkFBRyxLQUFLO0lBQ3JDLHFCQUNFLDhEQUFDSCxrREFBSTtRQUFDSSxJQUFJLEVBQUVGLEdBQUc7a0JBQ2IsNEVBQUNHLEdBQUM7WUFBQ0MsU0FBUyxFQUFDLGVBQWU7c0JBQ3pCSCxJQUFJLGlCQUNILDhEQUFDSSxNQUFJO2dCQUFDRCxTQUFTLEVBQUMsd0RBQXdEOzBCQUFDLFlBRXpFOzs7OztxQkFBTyxpQkFFUDswQkFFRSw0RUFBQ0UsS0FBRztvQkFDRkYsU0FBUyxFQUFDLHVCQUF1QjtvQkFDakNHLEdBQUcsRUFBQyxrQkFBa0I7b0JBQ3RCQyxHQUFHLEVBQUMsYUFBYTs7Ozs7eUJBQ2pCOzZCQUNEOzs7OztpQkFFSDs7Ozs7YUFDQyxDQUNQO0NBQ0g7QUFyQktULEtBQUFBLElBQUk7QUF1QlYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy91dGlscy9Mb2dvLmpzeD8yYzA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgTG9nbyA9ICh7IHVybCA9IFwiL1wiLCB0ZXh0ID0gZmFsc2UgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9e3VybH0+XG4gICAgICA8YSBjbGFzc05hbWU9XCJzaXRlbG9nbyBweS0yXCI+XG4gICAgICAgIHt0ZXh0ID8gKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB1cHBlcmNhc2UgbGVhZGluZy1ub25lIHRleHQtcHJpbWFyeVwiPlxuICAgICAgICAgICAgSm9lU2hlcGFyZFxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgey8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50ICovfVxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTggbWF4LWgtZnVsbCB3LWF1dG9cIlxuICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCJcbiAgICAgICAgICAgICAgYWx0PVwiSm9lIFNoZXBhcmRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dvO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJMb2dvIiwidXJsIiwidGV4dCIsImhyZWYiLCJhIiwiY2xhc3NOYW1lIiwic3BhbiIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/utils/Logo.jsx\n");

/***/ })

});