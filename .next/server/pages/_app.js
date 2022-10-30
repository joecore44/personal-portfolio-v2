/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/appContext.js":
/*!***********************************!*\
  !*** ./src/context/appContext.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppContext\": () => (/* binding */ AppContext),\n/* harmony export */   \"AppProvider\": () => (/* binding */ AppProvider),\n/* harmony export */   \"useAppContext\": () => (/* binding */ useAppContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _appReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appReducer */ \"./src/context/appReducer.js\");\n\n\n\nconst initialState = {\n    blurredBg: false\n};\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialState);\nconst appActions = (dispatch)=>{\n    return {\n        setBlurred: (value)=>dispatch({\n                type: \"SET_BLURRED\",\n                payload: value\n            })\n    };\n};\nconst AppProvider = ({ children  })=>{\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_appReducer__WEBPACK_IMPORTED_MODULE_2__.appReducer, initialState);\n    const actions = appActions(dispatch);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: {\n            ...state,\n            ...actions\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/context/appContext.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, undefined);\n};\nconst useAppContext = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9hcHBDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBcUU7QUFDM0I7QUFFMUMsTUFBTUssWUFBWSxHQUFHO0lBQ2pCQyxTQUFTLEVBQUUsS0FBSztDQUNuQjtBQUVELE1BQU1DLFVBQVUsaUJBQUdOLG9EQUFhLENBQUNJLFlBQVksQ0FBQztBQUU5QyxNQUFNRyxVQUFVLEdBQUcsQ0FBQ0MsUUFBUSxHQUFLO0lBQzdCLE9BQU87UUFDSEMsVUFBVSxFQUFFLENBQUNDLEtBQUssR0FDZEYsUUFBUSxDQUFDO2dCQUFFRyxJQUFJLEVBQUUsYUFBYTtnQkFBRUMsT0FBTyxFQUFFRixLQUFLO2FBQUUsQ0FBQztLQUN4RCxDQUFDO0NBQ0w7QUFFRCxNQUFNRyxXQUFXLEdBQUcsQ0FBQyxFQUFFQyxRQUFRLEdBQUUsR0FBSztJQUNsQyxNQUFNLEVBakJWLEdBaUJXQyxLQUFLLEdBakJoQixHQWlCa0JQLFFBQVEsTUFBSVAsaURBQVUsQ0FBQ0UsbURBQVUsRUFBRUMsWUFBWSxDQUFDO0lBQzlELE1BQU1ZLE9BQU8sR0FBR1QsVUFBVSxDQUFDQyxRQUFRLENBQUM7SUFDcEMscUJBQ0ksOERBQUNGLFVBQVUsQ0FBQ1csUUFBUTtRQUFDUCxLQUFLLEVBQUU7WUFBRSxHQUFHSyxLQUFLO1lBQUUsR0FBR0MsT0FBTztTQUFFO2tCQUMvQ0YsUUFBUTs7Ozs7aUJBQ1MsQ0FDeEI7Q0FDTDtBQUVELE1BQU1JLGFBQWEsR0FBRyxJQUFNO0lBQ3hCLE9BQU9oQixpREFBVSxDQUFDSSxVQUFVLENBQUMsQ0FBQztDQUNqQztBQUVpRCIsInNvdXJjZXMiOlsid2VicGFjazovL2pvZWhzZXBhcmQvLi9zcmMvY29udGV4dC9hcHBDb250ZXh0LmpzP2QzNzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGFwcFJlZHVjZXIgfSBmcm9tIFwiLi9hcHBSZWR1Y2VyXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBibHVycmVkQmc6IGZhbHNlLFxufTtcblxuY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoaW5pdGlhbFN0YXRlKTtcblxuY29uc3QgYXBwQWN0aW9ucyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHNldEJsdXJyZWQ6ICh2YWx1ZSkgPT5cbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfQkxVUlJFRFwiLCBwYXlsb2FkOiB2YWx1ZSB9KSxcbiAgICB9O1xufTtcblxuY29uc3QgQXBwUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGFwcFJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG4gICAgY29uc3QgYWN0aW9ucyA9IGFwcEFjdGlvbnMoZGlzcGF0Y2gpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IC4uLnN0YXRlLCAuLi5hY3Rpb25zIH19PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbn07XG5cbmNvbnN0IHVzZUFwcENvbnRleHQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG59O1xuXG5leHBvcnQgeyBBcHBQcm92aWRlciwgQXBwQ29udGV4dCwgdXNlQXBwQ29udGV4dCB9O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJ1c2VDb250ZXh0IiwiYXBwUmVkdWNlciIsImluaXRpYWxTdGF0ZSIsImJsdXJyZWRCZyIsIkFwcENvbnRleHQiLCJhcHBBY3Rpb25zIiwiZGlzcGF0Y2giLCJzZXRCbHVycmVkIiwidmFsdWUiLCJ0eXBlIiwicGF5bG9hZCIsIkFwcFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsImFjdGlvbnMiLCJQcm92aWRlciIsInVzZUFwcENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/appContext.js\n");

/***/ }),

/***/ "./src/context/appReducer.js":
/*!***********************************!*\
  !*** ./src/context/appReducer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appReducer\": () => (/* binding */ appReducer)\n/* harmony export */ });\nconst appReducer = (state, action)=>{\n    switch(action.type){\n        case \"SET_BLURRED\":\n             false ? 0 : null;\n            return {\n                ...state,\n                blurredBg: action.payload\n            };\n        default:\n            return state;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9hcHBSZWR1Y2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxVQUFVLEdBQUcsQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLEdBQUs7SUFDekMsT0FBUUEsTUFBTSxDQUFDQyxJQUFJO1FBQ2YsS0FBSyxhQUFhO1lBQ2QsTUFBNkIsR0FDdkJDLENBQWtELEdBQ2xELElBQUksQ0FBQztZQUNYLE9BQU87Z0JBQUUsR0FBR0gsS0FBSztnQkFBRU0sU0FBUyxFQUFFTCxNQUFNLENBQUNJLE9BQU87YUFBRSxDQUFDO1FBRW5EO1lBQ0ksT0FBT0wsS0FBSyxDQUFDO0tBQ3BCO0NBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pvZWhzZXBhcmQvLi9zcmMvY29udGV4dC9hcHBSZWR1Y2VyLmpzP2JkMzMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFwcFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIlNFVF9CTFVSUkVEXCI6XG4gICAgICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgICAgPyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIklTX0JMVVJSRURcIiwgYWN0aW9uLnBheWxvYWQpXG4gICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGJsdXJyZWRCZzogYWN0aW9uLnBheWxvYWQgfTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG4iXSwibmFtZXMiOlsiYXBwUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJwYXlsb2FkIiwiYmx1cnJlZEJnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/appReducer.js\n");

/***/ }),

/***/ "./src/lib/apollo.js":
/*!***************************!*\
  !*** ./src/lib/apollo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    uri: \"https://dev.graylingagency.co/sites/grayling-v2/graphql\",\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2Fwb2xsby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkU7QUFFdEUsTUFBTUcsTUFBTSxHQUFHLElBQUlILHdEQUFZLENBQUM7SUFDbkNJLEdBQUcsRUFBRSx5REFBeUQ7SUFDOURDLEtBQUssRUFBRSxJQUFJSix5REFBYSxFQUFFO0NBQzdCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qb2Voc2VwYXJkLy4vc3JjL2xpYi9hcG9sbG8uanM/ZmQyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUsIEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuXG5leHBvcnQgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgdXJpOiAnaHR0cHM6Ly9kZXYuZ3JheWxpbmdhZ2VuY3kuY28vc2l0ZXMvZ3JheWxpbmctdjIvZ3JhcGhxbCcsXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG59KVxuIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkluTWVtb3J5Q2FjaGUiLCJBcG9sbG9Qcm92aWRlciIsImNsaWVudCIsInVyaSIsImNhY2hlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/apollo.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_appContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/appContext */ \"./src/context/appContext.js\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-query/devtools */ \"react-query/devtools\");\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-scroll-parallax */ \"react-scroll-parallax\");\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _apollo_client_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client/react */ \"@apollo/client/react\");\n/* harmony import */ var _apollo_client_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/apollo */ \"./src/lib/apollo.js\");\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! nprogress/nprogress.css */ \"./node_modules/nprogress/nprogress.css\");\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/globals.scss */ \"./src/styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_15__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nnprogress__WEBPACK_IMPORTED_MODULE_3___default().configure({\n    showSpinner: true\n});\nnext_router__WEBPACK_IMPORTED_MODULE_2___default().events.on(\"routeChangeStart\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_3___default().start()\n);\nnext_router__WEBPACK_IMPORTED_MODULE_2___default().events.on(\"routeChangeComplete\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_3___default().done()\n);\nnext_router__WEBPACK_IMPORTED_MODULE_2___default().events.on(\"routeChangeError\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_3___default().done()\n);\nfunction MyApp({ Component , pageProps  }) {\n    const queryClientRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n    if (!queryClientRef.current) {\n        queryClientRef.current = new react_query__WEBPACK_IMPORTED_MODULE_6__.QueryClient();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_6__.QueryClientProvider, {\n        client: queryClientRef.current,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_appContext__WEBPACK_IMPORTED_MODULE_5__.AppProvider, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"viewport\",\n                            content: \"width=device-width, initial-scale=1 maximum-scale=1\"\n                        }, void 0, false, {\n                            fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"description\"\n                        }, void 0, false, {\n                            fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"robots\",\n                            content: \"noindex, nofollow\"\n                        }, void 0, false, {\n                            fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"keywords\",\n                            content: \"React Template, Portfolio Template\"\n                        }, void 0, false, {\n                            fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"author\",\n                            content: \"Nuclear Themes\"\n                        }, void 0, false, {\n                            fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"theme-color\",\n                            content: \"#72E2AE\"\n                        }, void 0, false, {\n                            fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            httpEquiv: \"X-UA-Compatible\",\n                            content: \"IE=edge\"\n                        }, void 0, false, {\n                            fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"manifest\",\n                            href: \"/manifest.json\"\n                        }, void 0, false, {\n                            fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"shortcut icon\",\n                            href: \"/favicon.ico\",\n                            type: \"image/x-icon\"\n                        }, void 0, false, {\n                            fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"apple-touch-icon\",\n                            href: \"/icon-192x192.png\"\n                        }, void 0, false, {\n                            fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Joe Shepard - Software Engineer\"\n                        }, void 0, false, {\n                            fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_8__.ParallaxProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client_react__WEBPACK_IMPORTED_MODULE_9__.ApolloProvider, {\n                        client: _lib_apollo__WEBPACK_IMPORTED_MODULE_10__.client,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_6__.Hydrate, {\n                            state: pageProps.dehydratedState,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                                ...pageProps\n                            }, void 0, false, {\n                                fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b2Voc2VwYXJkLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFwcFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvYXBwQ29udGV4dFwiO1xuaW1wb3J0IHsgSHlkcmF0ZSwgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IFJlYWN0UXVlcnlEZXZ0b29scyB9IGZyb20gXCJyZWFjdC1xdWVyeS9kZXZ0b29sc1wiO1xuaW1wb3J0IHsgUGFyYWxsYXhQcm92aWRlciB9IGZyb20gXCJyZWFjdC1zY3JvbGwtcGFyYWxsYXhcIjtcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50L3JlYWN0XCI7XG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tIFwiLi4vbGliL2Fwb2xsb1wiO1xuaW1wb3J0IFwibm9ybWFsaXplLmNzc1wiO1xuaW1wb3J0IFwibnByb2dyZXNzL25wcm9ncmVzcy5jc3NcIjtcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcbmltcG9ydCBcInN3aXBlci9jc3MvbmF2aWdhdGlvblwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuc2Nzc1wiO1xuXG5OUHJvZ3Jlc3MuY29uZmlndXJlKHsgc2hvd1NwaW5uZXI6IHRydWUgfSk7XG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCAoKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKSk7XG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcblJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUVycm9yXCIsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgcXVlcnlDbGllbnRSZWYgPSB1c2VSZWYoKTtcblxuICBpZiAoIXF1ZXJ5Q2xpZW50UmVmLmN1cnJlbnQpIHtcbiAgICBxdWVyeUNsaWVudFJlZi5jdXJyZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnRSZWYuY3VycmVudH0+XG4gICAgICA8QXBwUHJvdmlkZXI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xIG1heGltdW0tc2NhbGU9MVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiZGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwibm9pbmRleCwgbm9mb2xsb3dcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJSZWFjdCBUZW1wbGF0ZSwgUG9ydGZvbGlvIFRlbXBsYXRlXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIk51Y2xlYXIgVGhlbWVzXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzcyRTJBRVwiIC8+XG4gICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9tYW5pZmVzdC5qc29uXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIHR5cGU9XCJpbWFnZS94LWljb25cIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBocmVmPVwiL2ljb24tMTkyeDE5Mi5wbmdcIiAvPlxuICAgICAgICAgIDx0aXRsZT5Kb2UgU2hlcGFyZCAtIFNvZnR3YXJlIEVuZ2luZWVyPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8UGFyYWxsYXhQcm92aWRlcj5cbiAgICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgICAgICAgPEh5ZHJhdGUgc3RhdGU9e3BhZ2VQcm9wcy5kZWh5ZHJhdGVkU3RhdGV9PlxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0h5ZHJhdGU+XG4gICAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICAgICAgPC9QYXJhbGxheFByb3ZpZGVyPlxuICAgICAgPC9BcHBQcm92aWRlcj5cbiAgICAgIHsvKiA8UmVhY3RRdWVyeURldnRvb2xzIGluaXRpYWxJc09wZW49e2ZhbHNlfSAvPiAqL31cbiAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJSb3V0ZXIiLCJOUHJvZ3Jlc3MiLCJ1c2VSZWYiLCJBcHBQcm92aWRlciIsIkh5ZHJhdGUiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJSZWFjdFF1ZXJ5RGV2dG9vbHMiLCJQYXJhbGxheFByb3ZpZGVyIiwiQXBvbGxvUHJvdmlkZXIiLCJjbGllbnQiLCJjb25maWd1cmUiLCJzaG93U3Bpbm5lciIsImV2ZW50cyIsIm9uIiwic3RhcnQiLCJkb25lIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJxdWVyeUNsaWVudFJlZiIsImN1cnJlbnQiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJodHRwRXF1aXYiLCJsaW5rIiwicmVsIiwiaHJlZiIsInR5cGUiLCJ0aXRsZSIsInN0YXRlIiwiZGVoeWRyYXRlZFN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/nprogress/nprogress.css":
/*!**********************************************!*\
  !*** ./node_modules/nprogress/nprogress.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/modules/navigation/navigation.min.css":
/*!*******************************************************************!*\
  !*** ./node_modules/swiper/modules/navigation/navigation.min.css ***!
  \*******************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/swiper.min.css":
/*!********************************************!*\
  !*** ./node_modules/swiper/swiper.min.css ***!
  \********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.scss":
/*!*********************************!*\
  !*** ./src/styles/globals.scss ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/react":
/*!***************************************!*\
  !*** external "@apollo/client/react" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ "react-query/devtools":
/*!***************************************!*\
  !*** external "react-query/devtools" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query/devtools");

/***/ }),

/***/ "react-scroll-parallax":
/*!****************************************!*\
  !*** external "react-scroll-parallax" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-scroll-parallax");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();