module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/reducers/allReducers.js":
/*!********************************************!*\
  !*** ./components/reducers/allReducers.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profileNameReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profileNameReducer */ "./components/reducers/profileNameReducer.js");
/* harmony import */ var _imageReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageReducer */ "./components/reducers/imageReducer.js");
/* harmony import */ var _jwtReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwtReducer */ "./components/reducers/jwtReducer.js");
/* harmony import */ var _workflowInfoReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workflowInfoReducer */ "./components/reducers/workflowInfoReducer.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_6__);







const persistConfig = {
  key: 'root',
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5___default()),
  whitelist: ['jwtToken', 'profileImage', 'profileName']
};
const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_6__["combineReducers"])({
  profileImage: _imageReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  profileName: _profileNameReducer__WEBPACK_IMPORTED_MODULE_0__["default"],
  jwtToken: _jwtReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  workflowsInfo: _workflowInfoReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_persist__WEBPACK_IMPORTED_MODULE_4__["persistReducer"])(persistConfig, rootReducer));

/***/ }),

/***/ "./components/reducers/imageReducer.js":
/*!*********************************************!*\
  !*** ./components/reducers/imageReducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const imageReducer = (state = '', action) => {
  console.log(action.type);

  switch (action.type) {
    case 'SET_PROFILE_IMAGE':
      return action.payload.profile_image;

    case 'REMOVE_PROFILE_IMAGE':
      return '';

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (imageReducer);

/***/ }),

/***/ "./components/reducers/jwtReducer.js":
/*!*******************************************!*\
  !*** ./components/reducers/jwtReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const jwtReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_JWT':
      return action.payload;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (jwtReducer);

/***/ }),

/***/ "./components/reducers/profileNameReducer.js":
/*!***************************************************!*\
  !*** ./components/reducers/profileNameReducer.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const profileNameReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_PROFILE_NAME':
      return action.payload.name;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (profileNameReducer);

/***/ }),

/***/ "./components/reducers/workflowInfoReducer.js":
/*!****************************************************!*\
  !*** ./components/reducers/workflowInfoReducer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const workflowsInfo = (state = [], action) => {
  switch (action.type) {
    case 'SET_WORKFLOWS':
      return action.payload.workflowInfo;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (workflowsInfo);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ "./styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-persist/integration/react */ "redux-persist/integration/react");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_reducers_allReducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/reducers/allReducers */ "./components/reducers/allReducers.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Sarthak\\YT_Workflow_Cloud\\client\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











const icons = [_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faHome"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faShareAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faStar"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faChartPie"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faUserAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faSitemap"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faCheck"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faGripVertical"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faArrowRight"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faPlusCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faUsers"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faTrash"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faUserPlus"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faTimes"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faUserEdit"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faSignOutAlt"]];
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__["fab"], ...icons);

const App = ({
  Component,
  pageProps
}) => {
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(_components_reducers_allReducers__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_4__["persistStore"])(store);
  react_chartjs_2__WEBPACK_IMPORTED_MODULE_9__["defaults"].global.defaultFontFamily = 'Poppins';
  react_chartjs_2__WEBPACK_IMPORTED_MODULE_9__["defaults"].global.defaultFontSize = 10;
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: store,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 3
    }
  }, __jsx(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5__["PersistGate"], {
    persistor: persistor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZWR1Y2Vycy9hbGxSZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlZHVjZXJzL2ltYWdlUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlZHVjZXJzL2p3dFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZWR1Y2Vycy9wcm9maWxlTmFtZVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZWR1Y2Vycy93b3JrZmxvd0luZm9SZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY2hhcnRqcy0yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiIl0sIm5hbWVzIjpbInBlcnNpc3RDb25maWciLCJrZXkiLCJzdG9yYWdlIiwid2hpdGVsaXN0Iiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJwcm9maWxlSW1hZ2UiLCJpbWFnZVJlZHVjZXIiLCJwcm9maWxlTmFtZSIsInByb2ZpbGVOYW1lUmVkdWNlciIsImp3dFRva2VuIiwiand0UmVkdWNlciIsIndvcmtmbG93c0luZm8iLCJ3b3JrZmxvd3NSZWR1Y2VyIiwicGVyc2lzdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwicGF5bG9hZCIsInByb2ZpbGVfaW1hZ2UiLCJuYW1lIiwid29ya2Zsb3dJbmZvIiwiaWNvbnMiLCJmYUhvbWUiLCJmYVNoYXJlQWx0IiwiZmFTdGFyIiwiZmFDaGFydFBpZSIsImZhVXNlckFsdCIsImZhU2l0ZW1hcCIsImZhQ2hlY2siLCJmYUdyaXBWZXJ0aWNhbCIsImZhQXJyb3dSaWdodCIsImZhUGx1c0NpcmNsZSIsImZhVXNlcnMiLCJmYVRyYXNoIiwiZmFVc2VyUGx1cyIsImZhVGltZXMiLCJmYVVzZXJFZGl0IiwiZmFTaWduT3V0QWx0IiwibGlicmFyeSIsImFkZCIsImZhYiIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJhbGxSZWR1Y2VycyIsInBlcnNpc3RvciIsInBlcnNpc3RTdG9yZSIsImRlZmF1bHRzIiwiZ2xvYmFsIiwiZGVmYXVsdEZvbnRGYW1pbHkiLCJkZWZhdWx0Rm9udFNpemUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNB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QywwRUFYYSxFQVliQywwRUFaYSxFQWFiQyw2RUFiYSxFQWNiQywwRUFkYSxFQWViQyw2RUFmYSxFQWdCYkMsK0VBaEJhLENBQWQ7QUFrQkFDLHlFQUFPLENBQUNDLEdBQVIsQ0FBWUMsc0VBQVosRUFBaUIsR0FBR25CLEtBQXBCOztBQUVBLE1BQU1vQixHQUFHLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUE4QjtBQUN6QyxRQUFNQyxLQUFLLEdBQUdDLHlEQUFXLENBQUNDLHdFQUFELENBQXpCO0FBRUEsUUFBTUMsU0FBUyxHQUFHQyxrRUFBWSxDQUFDSixLQUFELENBQTlCO0FBRUFLLDBEQUFRLENBQUNDLE1BQVQsQ0FBZ0JDLGlCQUFoQixHQUFvQyxTQUFwQztBQUNBRiwwREFBUSxDQUFDQyxNQUFULENBQWdCRSxlQUFoQixHQUFrQyxFQUFsQztBQUVBLFNBQ0MsTUFBQyxvREFBRDtBQUFVLFNBQUssRUFBRVIsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMkVBQUQ7QUFBYSxhQUFTLEVBQUVHLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLFNBQUQsZUFBZUosU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREQsQ0FERCxDQUREO0FBT0EsQ0FmRDs7QUFpQmVGLGtFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsc0QiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgcHJvZmlsZU5hbWVSZWR1Y2VyIGZyb20gJy4vcHJvZmlsZU5hbWVSZWR1Y2VyJztcclxuaW1wb3J0IGltYWdlUmVkdWNlciBmcm9tICcuL2ltYWdlUmVkdWNlcic7XHJcbmltcG9ydCBqd3RSZWR1Y2VyIGZyb20gJy4vand0UmVkdWNlcic7XHJcbmltcG9ydCB3b3JrZmxvd3NSZWR1Y2VyIGZyb20gJy4vd29ya2Zsb3dJbmZvUmVkdWNlcic7XHJcbmltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSAncmVkdXgtcGVyc2lzdCc7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcblxyXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG5cdGtleTogJ3Jvb3QnLFxyXG5cdHN0b3JhZ2UsXHJcblx0d2hpdGVsaXN0OiBbICdqd3RUb2tlbicsICdwcm9maWxlSW1hZ2UnLCAncHJvZmlsZU5hbWUnIF1cclxufTtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuXHRwcm9maWxlSW1hZ2U6IGltYWdlUmVkdWNlcixcclxuXHRwcm9maWxlTmFtZTogcHJvZmlsZU5hbWVSZWR1Y2VyLFxyXG5cdGp3dFRva2VuOiBqd3RSZWR1Y2VyLFxyXG5cdHdvcmtmbG93c0luZm86IHdvcmtmbG93c1JlZHVjZXJcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByb290UmVkdWNlcik7XHJcbiIsImNvbnN0IGltYWdlUmVkdWNlciA9IChzdGF0ZSA9ICcnLCBhY3Rpb24pID0+IHtcclxuXHRjb25zb2xlLmxvZyhhY3Rpb24udHlwZSk7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnU0VUX1BST0ZJTEVfSU1BR0UnOlxyXG5cdFx0XHRyZXR1cm4gYWN0aW9uLnBheWxvYWQucHJvZmlsZV9pbWFnZTtcclxuXHRcdGNhc2UgJ1JFTU9WRV9QUk9GSUxFX0lNQUdFJzpcclxuXHRcdFx0cmV0dXJuICcnO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGltYWdlUmVkdWNlcjtcclxuIiwiY29uc3Qgand0UmVkdWNlciA9IChzdGF0ZSA9ICcnLCBhY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlICdTRVRfSldUJzpcclxuXHRcdFx0cmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGp3dFJlZHVjZXI7XHJcbiIsImNvbnN0IHByb2ZpbGVOYW1lUmVkdWNlciA9IChzdGF0ZSA9ICcnLCBhY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlICdTRVRfUFJPRklMRV9OQU1FJzpcclxuXHRcdFx0cmV0dXJuIGFjdGlvbi5wYXlsb2FkLm5hbWU7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZmlsZU5hbWVSZWR1Y2VyO1xyXG4iLCJjb25zdCB3b3JrZmxvd3NJbmZvID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ1NFVF9XT1JLRkxPV1MnOlxyXG5cdFx0XHRyZXR1cm4gYWN0aW9uLnBheWxvYWQud29ya2Zsb3dJbmZvO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdvcmtmbG93c0luZm87XHJcbiIsImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5jc3MnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHBlcnNpc3RTdG9yZSB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnO1xyXG5pbXBvcnQgeyBQZXJzaXN0R2F0ZSB9IGZyb20gJ3JlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3QnO1xyXG5pbXBvcnQgYWxsUmVkdWNlcnMgZnJvbSAnLi4vY29tcG9uZW50cy9yZWR1Y2Vycy9hbGxSZWR1Y2Vycyc7XHJcbmltcG9ydCB7IGxpYnJhcnkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xyXG5pbXBvcnQgeyBmYWIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xyXG5pbXBvcnQge1xyXG5cdGZhSG9tZSxcclxuXHRmYVNoYXJlQWx0LFxyXG5cdGZhU3RhcixcclxuXHRmYUNoYXJ0UGllLFxyXG5cdGZhVXNlckFsdCxcclxuXHRmYVNpdGVtYXAsXHJcblx0ZmFDaGVjayxcclxuXHRmYUdyaXBWZXJ0aWNhbCxcclxuXHRmYUFycm93UmlnaHQsXHJcblx0ZmFVc2VycyxcclxuXHRmYVBsdXNDaXJjbGUsXHJcblx0ZmFUcmFzaCxcclxuXHRmYVVzZXJQbHVzLFxyXG5cdGZhVGltZXMsXHJcblx0ZmFVc2VyRWRpdCxcclxuXHRmYVNpZ25PdXRBbHRcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5cclxuY29uc3QgaWNvbnMgPSBbXHJcblx0ZmFIb21lLFxyXG5cdGZhU2hhcmVBbHQsXHJcblx0ZmFTdGFyLFxyXG5cdGZhQ2hhcnRQaWUsXHJcblx0ZmFVc2VyQWx0LFxyXG5cdGZhU2l0ZW1hcCxcclxuXHRmYUNoZWNrLFxyXG5cdGZhR3JpcFZlcnRpY2FsLFxyXG5cdGZhQXJyb3dSaWdodCxcclxuXHRmYVBsdXNDaXJjbGUsXHJcblx0ZmFVc2VycyxcclxuXHRmYVRyYXNoLFxyXG5cdGZhVXNlclBsdXMsXHJcblx0ZmFUaW1lcyxcclxuXHRmYVVzZXJFZGl0LFxyXG5cdGZhU2lnbk91dEFsdFxyXG5dO1xyXG5saWJyYXJ5LmFkZChmYWIsIC4uLmljb25zKTtcclxuXHJcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuXHRjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKGFsbFJlZHVjZXJzKTtcclxuXHJcblx0Y29uc3QgcGVyc2lzdG9yID0gcGVyc2lzdFN0b3JlKHN0b3JlKTtcclxuXHJcblx0ZGVmYXVsdHMuZ2xvYmFsLmRlZmF1bHRGb250RmFtaWx5ID0gJ1BvcHBpbnMnO1xyXG5cdGRlZmF1bHRzLmdsb2JhbC5kZWZhdWx0Rm9udFNpemUgPSAxMDtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG5cdFx0XHQ8UGVyc2lzdEdhdGUgcGVyc2lzdG9yPXtwZXJzaXN0b3J9PlxyXG5cdFx0XHRcdDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuXHRcdFx0PC9QZXJzaXN0R2F0ZT5cclxuXHRcdDwvUHJvdmlkZXI+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNoYXJ0anMtMlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9