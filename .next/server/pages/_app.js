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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    //uri: 'https://dev.graylingagency.co/sites/grayling-v2/graphql',\n    uri: \"http://52.88.143.227/graphql\",\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2Fwb2xsby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkU7QUFFdEUsTUFBTUcsTUFBTSxHQUFHLElBQUlILHdEQUFZLENBQUM7SUFDbkMsaUVBQWlFO0lBQ2pFSSxHQUFHLEVBQUUsOEJBQThCO0lBQ25DQyxLQUFLLEVBQUUsSUFBSUoseURBQWEsRUFBRTtDQUM3QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vam9laHNlcGFyZC8uL3NyYy9saWIvYXBvbGxvLmpzP2ZkMmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlLCBBcG9sbG9Qcm92aWRlciB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcblxuZXhwb3J0IGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIC8vdXJpOiAnaHR0cHM6Ly9kZXYuZ3JheWxpbmdhZ2VuY3kuY28vc2l0ZXMvZ3JheWxpbmctdjIvZ3JhcGhxbCcsXG4gICAgdXJpOiAnaHR0cDovLzUyLjg4LjE0My4yMjcvZ3JhcGhxbCcsXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG59KVxuIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkluTWVtb3J5Q2FjaGUiLCJBcG9sbG9Qcm92aWRlciIsImNsaWVudCIsInVyaSIsImNhY2hlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/apollo.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_appContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/appContext */ \"./src/context/appContext.js\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-query/devtools */ \"react-query/devtools\");\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-scroll-parallax */ \"react-scroll-parallax\");\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _apollo_client_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client/react */ \"@apollo/client/react\");\n/* harmony import */ var _apollo_client_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/apollo */ \"./src/lib/apollo.js\");\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! nprogress/nprogress.css */ \"./node_modules/nprogress/nprogress.css\");\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/globals.scss */ \"./src/styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_15__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nnprogress__WEBPACK_IMPORTED_MODULE_3___default().configure({\n    showSpinner: true\n});\nnext_router__WEBPACK_IMPORTED_MODULE_2___default().events.on(\"routeChangeStart\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_3___default().start()\n);\nnext_router__WEBPACK_IMPORTED_MODULE_2___default().events.on(\"routeChangeComplete\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_3___default().done()\n);\nnext_router__WEBPACK_IMPORTED_MODULE_2___default().events.on(\"routeChangeError\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_3___default().done()\n);\nfunction MyApp({ Component , pageProps  }) {\n    const queryClientRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n    if (!queryClientRef.current) {\n        queryClientRef.current = new react_query__WEBPACK_IMPORTED_MODULE_6__.QueryClient();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_6__.QueryClientProvider, {\n        client: queryClientRef.current,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_appContext__WEBPACK_IMPORTED_MODULE_5__.AppProvider, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"viewport\",\n                            content: \"width=device-width, initial-scale=1 maximum-scale=1\"\n                        }, void 0, false, {\n                            fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"Joe Shepard - Full Stack Software Engineer\"\n                        }, void 0, false, {\n                            fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"keywords\",\n                            content: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"author\",\n                            content: \"Joe Shepard\"\n                        }, void 0, false, {\n                            fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"theme-color\",\n                            content: \"#72E2AE\"\n                        }, void 0, false, {\n                            fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            httpEquiv: \"X-UA-Compatible\",\n                            content: \"IE=edge\"\n                        }, void 0, false, {\n                            fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"manifest\",\n                            href: \"/manifest.json\"\n                        }, void 0, false, {\n                            fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"shortcut icon\",\n                            href: \"/favicon.ico\",\n                            type: \"image/x-icon\"\n                        }, void 0, false, {\n                            fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"apple-touch-icon\",\n                            href: \"/icon-192x192.png\"\n                        }, void 0, false, {\n                            fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Joe Shepard - Software Engineer\"\n                        }, void 0, false, {\n                            fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_8__.ParallaxProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client_react__WEBPACK_IMPORTED_MODULE_9__.ApolloProvider, {\n                        client: _lib_apollo__WEBPACK_IMPORTED_MODULE_10__.client,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_6__.Hydrate, {\n                            state: pageProps.dehydratedState,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                                ...pageProps\n                            }, void 0, false, {\n                                fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/josephshepard/Documents/web/1st/joe-shepard-dev/src/pages/_app.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDSTtBQUNDO0FBQ0g7QUFDcUI7QUFDb0I7QUFDZDtBQUNEO0FBQ0g7QUFDZjtBQUNoQjtBQUNVO0FBQ2I7QUFDVztBQUNDO0FBRWhDRSwwREFBbUIsQ0FBQztJQUFFVyxXQUFXLEVBQUUsSUFBSTtDQUFFLENBQUMsQ0FBQztBQUMzQ1osNERBQWdCLENBQUMsa0JBQWtCLEVBQUUsSUFBTUMsc0RBQWUsRUFBRTtBQUFBLENBQUMsQ0FBQztBQUM5REQsNERBQWdCLENBQUMscUJBQXFCLEVBQUUsSUFBTUMscURBQWMsRUFBRTtBQUFBLENBQUMsQ0FBQztBQUNoRUQsNERBQWdCLENBQUMsa0JBQWtCLEVBQUUsSUFBTUMscURBQWMsRUFBRTtBQUFBLENBQUMsQ0FBQztBQUU3RCxTQUFTZ0IsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDdkMsTUFBTUMsY0FBYyxHQUFHbEIsNkNBQU0sRUFBRTtJQUUvQixJQUFJLENBQUNrQixjQUFjLENBQUNDLE9BQU8sRUFBRTtRQUMzQkQsY0FBYyxDQUFDQyxPQUFPLEdBQUcsSUFBSWhCLG9EQUFXLEVBQUUsQ0FBQztLQUM1QztJQUVELHFCQUNFLDhEQUFDQyw0REFBbUI7UUFBQ0ksTUFBTSxFQUFFVSxjQUFjLENBQUNDLE9BQU87a0JBQ2pELDRFQUFDbEIsNERBQVc7OzhCQUNWLDhEQUFDSixrREFBSTs7c0NBQ0gsOERBQUN1QixNQUFJOzRCQUNIQyxJQUFJLEVBQUMsVUFBVTs0QkFDZkMsT0FBTyxFQUFDLHFEQUFxRDs7Ozs7Z0NBQzdEO3NDQUNGLDhEQUFDRixNQUFJOzRCQUFDQyxJQUFJLEVBQUMsYUFBYTs0QkFBQ0MsT0FBTyxFQUFDLDRDQUE0Qzs7Ozs7Z0NBQUc7c0NBQ2hGLDhEQUFDRixNQUFJOzRCQUFDQyxJQUFJLEVBQUMsVUFBVTs0QkFBQ0MsT0FBTyxFQUFDLEVBQUU7Ozs7O2dDQUFHO3NDQUNuQyw4REFBQ0YsTUFBSTs0QkFBQ0MsSUFBSSxFQUFDLFFBQVE7NEJBQUNDLE9BQU8sRUFBQyxhQUFhOzs7OztnQ0FBRztzQ0FDNUMsOERBQUNGLE1BQUk7NEJBQUNDLElBQUksRUFBQyxhQUFhOzRCQUFDQyxPQUFPLEVBQUMsU0FBUzs7Ozs7Z0NBQUc7c0NBQzdDLDhEQUFDRixNQUFJOzRCQUFDRyxTQUFTLEVBQUMsaUJBQWlCOzRCQUFDRCxPQUFPLEVBQUMsU0FBUzs7Ozs7Z0NBQUc7c0NBQ3RELDhEQUFDRSxNQUFJOzRCQUFDQyxHQUFHLEVBQUMsVUFBVTs0QkFBQ0MsSUFBSSxFQUFDLGdCQUFnQjs7Ozs7Z0NBQUc7c0NBQzdDLDhEQUFDRixNQUFJOzRCQUFDQyxHQUFHLEVBQUMsZUFBZTs0QkFBQ0MsSUFBSSxFQUFDLGNBQWM7NEJBQUNDLElBQUksRUFBQyxjQUFjOzs7OztnQ0FBRztzQ0FDcEUsOERBQUNILE1BQUk7NEJBQUNDLEdBQUcsRUFBQyxrQkFBa0I7NEJBQUNDLElBQUksRUFBQyxtQkFBbUI7Ozs7O2dDQUFHO3NDQUN4RCw4REFBQ0UsT0FBSztzQ0FBQyxpQ0FBK0I7Ozs7O2dDQUFROzs7Ozs7d0JBQ3pDOzhCQUNQLDhEQUFDdEIsbUVBQWdCOzhCQUNmLDRFQUFDQyxnRUFBYzt3QkFBQ0MsTUFBTSxFQUFFQSxnREFBTTtrQ0FDNUIsNEVBQUNOLGdEQUFPOzRCQUFDMkIsS0FBSyxFQUFFWixTQUFTLENBQUNhLGVBQWU7c0NBQ3ZDLDRFQUFDZCxTQUFTO2dDQUFFLEdBQUdDLFNBQVM7Ozs7O29DQUFJOzs7OztnQ0FDcEI7Ozs7OzRCQUNLOzs7Ozt3QkFDQTs7Ozs7O2dCQUNQOzs7OztZQUVNLENBQ3RCO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vam9laHNlcGFyZC8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcHBQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L2FwcENvbnRleHRcIjtcbmltcG9ydCB7IEh5ZHJhdGUsIFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBSZWFjdFF1ZXJ5RGV2dG9vbHMgfSBmcm9tIFwicmVhY3QtcXVlcnkvZGV2dG9vbHNcIjtcbmltcG9ydCB7IFBhcmFsbGF4UHJvdmlkZXIgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsLXBhcmFsbGF4XCI7XG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gXCJAYXBvbGxvL2NsaWVudC9yZWFjdFwiO1xuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSBcIi4uL2xpYi9hcG9sbG9cIjtcbmltcG9ydCBcIm5vcm1hbGl6ZS5jc3NcIjtcbmltcG9ydCBcIm5wcm9ncmVzcy9ucHJvZ3Jlc3MuY3NzXCI7XG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XG5pbXBvcnQgXCJzd2lwZXIvY3NzL25hdmlnYXRpb25cIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLnNjc3NcIjtcblxuTlByb2dyZXNzLmNvbmZpZ3VyZSh7IHNob3dTcGlubmVyOiB0cnVlIH0pO1xuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCkpO1xuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VFcnJvclwiLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IHF1ZXJ5Q2xpZW50UmVmID0gdXNlUmVmKCk7XG5cbiAgaWYgKCFxdWVyeUNsaWVudFJlZi5jdXJyZW50KSB7XG4gICAgcXVlcnlDbGllbnRSZWYuY3VycmVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50UmVmLmN1cnJlbnR9PlxuICAgICAgPEFwcFByb3ZpZGVyPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSBtYXhpbXVtLXNjYWxlPTFcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkpvZSBTaGVwYXJkIC0gRnVsbCBTdGFjayBTb2Z0d2FyZSBFbmdpbmVlclwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIlwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJKb2UgU2hlcGFyZFwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiM3MkUyQUVcIiAvPlxuICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvbWFuaWZlc3QuanNvblwiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgaHJlZj1cIi9pY29uLTE5MngxOTIucG5nXCIgLz5cbiAgICAgICAgICA8dGl0bGU+Sm9lIFNoZXBhcmQgLSBTb2Z0d2FyZSBFbmdpbmVlcjwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPFBhcmFsbGF4UHJvdmlkZXI+XG4gICAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgICAgICAgIDxIeWRyYXRlIHN0YXRlPXtwYWdlUHJvcHMuZGVoeWRyYXRlZFN0YXRlfT5cbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9IeWRyYXRlPlxuICAgICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgICAgIDwvUGFyYWxsYXhQcm92aWRlcj5cbiAgICAgIDwvQXBwUHJvdmlkZXI+XG4gICAgICB7LyogPFJlYWN0UXVlcnlEZXZ0b29scyBpbml0aWFsSXNPcGVuPXtmYWxzZX0gLz4gKi99XG4gICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiUm91dGVyIiwiTlByb2dyZXNzIiwidXNlUmVmIiwiQXBwUHJvdmlkZXIiLCJIeWRyYXRlIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiUmVhY3RRdWVyeURldnRvb2xzIiwiUGFyYWxsYXhQcm92aWRlciIsIkFwb2xsb1Byb3ZpZGVyIiwiY2xpZW50IiwiY29uZmlndXJlIiwic2hvd1NwaW5uZXIiLCJldmVudHMiLCJvbiIsInN0YXJ0IiwiZG9uZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicXVlcnlDbGllbnRSZWYiLCJjdXJyZW50IiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiaHR0cEVxdWl2IiwibGluayIsInJlbCIsImhyZWYiLCJ0eXBlIiwidGl0bGUiLCJzdGF0ZSIsImRlaHlkcmF0ZWRTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

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