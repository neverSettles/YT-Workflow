module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/DashboardMenu.js":
/*!*************************************!*\
  !*** ./components/DashboardMenu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss_dashboard_menu_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/scss/dashboard-menu.module.scss */ "./styles/scss/dashboard-menu.module.scss");
/* harmony import */ var _styles_scss_dashboard_menu_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_dashboard_menu_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile */ "./components/Profile.js");
/* harmony import */ var _DashboardMenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DashboardMenuItem */ "./components/DashboardMenuItem.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_actions_jwtAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/actions/jwtAction */ "./components/actions/jwtAction.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Sarthak\\YT_Workflow_Cloud\\client\\components\\DashboardMenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const DashboardMenu = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const curRoute = router.route;
  const currentPage = curRoute.split('/')[2];
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  const {
    0: hideMenuItems,
    1: setHideMenuItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const toggleMobileMenu = () => {
    setHideMenuItems(!hideMenuItems);
  };

  const logout = () => {
    localStorage.setItem('refresh-token', '');
    dispatch(Object(_components_actions_jwtAction__WEBPACK_IMPORTED_MODULE_6__["setJwt"])(''));
    localStorage.setItem('jwt', '');
    js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.set('jwt', JSON.stringify(''));
    js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.set('refresh-token', JSON.stringify(''));
    return router.push('/');
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()({
      [_styles_scss_dashboard_menu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.toggleIcon]: true
    }),
    onClick: toggleMobileMenu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  })), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()({
      [_styles_scss_dashboard_menu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.dashboardMenuContainer]: true,
      [_styles_scss_dashboard_menu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.hideMenuItems]: !hideMenuItems
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: _styles_scss_dashboard_menu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.divProfile,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx(_Profile__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 6
    }
  })), __jsx("div", {
    className: _styles_scss_dashboard_menu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.dashboardMenuItems,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx(_DashboardMenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    menuTitle: 'Workflows',
    menuItemFontAwesomeRef: 'sitemap',
    menuLinkReference: '/dashboard/workflows',
    menuItemActive: currentPage == 'workflows',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 6
    }
  }), __jsx(_DashboardMenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    menuTitle: 'Shared with me',
    menuItemFontAwesomeRef: 'share-alt',
    menuLinkReference: '/dashboard/shared-with-me',
    menuItemActive: currentPage == 'shared-with-me',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 6
    }
  }), __jsx(_DashboardMenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    menuTitle: 'Statistics',
    menuItemFontAwesomeRef: 'chart-pie',
    menuLinkReference: '/dashboard/statistics',
    menuItemActive: currentPage == 'statistics',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 6
    }
  })), __jsx("div", {
    className: _styles_scss_dashboard_menu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.logout,
    onClick: logout,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: 'sign-out-alt',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 6
    }
  }), '    ', "Logout")));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardMenu);

/***/ }),

/***/ "./components/DashboardMenuItem.js":
/*!*****************************************!*\
  !*** ./components/DashboardMenuItem.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss_dashboard_menu_item_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/scss/dashboard-menu-item.module.scss */ "./styles/scss/dashboard-menu-item.module.scss");
/* harmony import */ var _styles_scss_dashboard_menu_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_dashboard_menu_item_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Sarthak\\YT_Workflow_Cloud\\client\\components\\DashboardMenuItem.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const DashboardMenuItem = ({
  menuTitle,
  menuLinkReference,
  menuItemFontAwesomeRef,
  menuItemActive
}) => {
  return __jsx("a", {
    href: menuLinkReference,
    className: _styles_scss_dashboard_menu_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menuItemLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: _styles_scss_dashboard_menu_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menuItemContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: _styles_scss_dashboard_menu_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menuItemInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      [_styles_scss_dashboard_menu_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.iconContainer]: true,
      [_styles_scss_dashboard_menu_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.iconContainerActive]: menuItemActive
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: menuItemFontAwesomeRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  })), __jsx("h3", {
    className: _styles_scss_dashboard_menu_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menuTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 6
    }
  }, menuTitle)), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      [_styles_scss_dashboard_menu_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.activeCircle]: true,
      [_styles_scss_dashboard_menu_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.active]: menuItemActive
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardMenuItem);

/***/ }),

/***/ "./components/Profile.js":
/*!*******************************!*\
  !*** ./components/Profile.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss_profile_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/scss/profile.module.scss */ "./styles/scss/profile.module.scss");
/* harmony import */ var _styles_scss_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_profile_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Sarthak\\YT_Workflow_Cloud\\client\\components\\Profile.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Profile = () => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const {
    0: currentDate,
    1: setCurrentDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const profileImageFormRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const jwtToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.jwtToken);
  const {
    0: profileImage,
    1: setProfileImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: profileUsername,
    1: setProfileUsername
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: displayName,
    1: setDisplayName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const capitalize = str => {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  };

  const getProfileImage = async () => {
    const profileImageUrlRes = await fetch('http://localhost:8000/get-profile-image', {
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + jwtToken
      }
    });

    if (profileImageUrlRes.status === 200) {
      const profileImageUrlJson = await profileImageUrlRes.json();
      setProfileImage(profileImageUrlJson['msg']);
    }
  };

  const getProfileUsername = async () => {
    const profileUsernameRes = await fetch('http://localhost:8000/get-profile-username', {
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + jwtToken
      }
    });

    if (profileUsernameRes.status === 200) {
      const profileUsernameJson = await profileUsernameRes.json();
      setProfileUsername(profileUsernameJson['msg']);
      setDisplayName(capitalize(profileUsernameJson['msg'].split(' ')[0]));
    }
  };

  const updateProfileImage = async () => {
    const profileForm = new FormData(profileImageFormRef.current);
    const res = await fetch('http://localhost:8000/upload-profile-image', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + jwtToken
      },
      body: profileForm
    });

    if (res.status !== 200) {
      const jsonRes = await res.json();
      console.log(jsonRes);
    }

    getProfileImage();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const currentDateInfo = new Date();
    const month = months[currentDateInfo.getMonth()];
    const day = currentDateInfo.getDate();
    const year = currentDateInfo.getFullYear();
    setCurrentDate(month + ' ' + day + ', ' + year);
    getProfileImage();
    getProfileUsername();
  }, []);
  return __jsx("div", {
    className: _styles_scss_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.profileContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: _styles_scss_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.imageSection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 4
    }
  }, __jsx("img", {
    className: _styles_scss_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.profileImage,
    src: profileImage,
    alt: profileUsername.split(' ')[0],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }), __jsx("span", {
    className: _styles_scss_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inputSection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    className: _styles_scss_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.editIcon,
    icon: 'user-edit',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 6
    }
  })), __jsx("form", {
    encType: "multipart/form-data",
    ref: profileImageFormRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, __jsx("input", {
    type: "file",
    onChange: updateProfileImage,
    accept: 'image/*',
    className: _styles_scss_profile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.profileImageInput,
    name: "image",
    title: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 6
    }
  }))), __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 4
    }
  }, "Hey ", displayName, "!"), __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 4
    }
  }, currentDate));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./components/WorkflowItem.js":
/*!************************************!*\
  !*** ./components/WorkflowItem.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss_workflow_item_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/scss/workflow-item.module.scss */ "./styles/scss/workflow-item.module.scss");
/* harmony import */ var _styles_scss_workflow_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_workflow_item_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Sarthak\\YT_Workflow_Cloud\\client\\components\\WorkflowItem.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const WorkflowItem = ({
  workflow,
  id
}) => {
  const maxTitleLengthBeforeCutoff = 15;
  const maxDescriptionLengthBeforeCutoff = 30;
  const profileImage = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.profileImage);
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      [_styles_scss_workflow_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.workflowContainer]: true,
      [_styles_scss_workflow_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.workflowFinished]: workflow['finished'],
      [_styles_scss_workflow_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.important]: workflow['starred'] && !workflow.finished
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 3
    }
  }, __jsx("h2", {
    className: _styles_scss_workflow_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.workflowTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }
  }, workflow.title.length > maxTitleLengthBeforeCutoff ? workflow.title.slice(0, maxTitleLengthBeforeCutoff) + '...' : workflow.title), __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }
  }, workflow.description.length > maxDescriptionLengthBeforeCutoff ? workflow.description.slice(0, maxDescriptionLengthBeforeCutoff) + '...' : workflow.description), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: _styles_scss_workflow_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.workflowUsers,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: _styles_scss_workflow_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.workflowExtraInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx("h3", {
    className: _styles_scss_workflow_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.workflowCreated,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 6
    }
  }, workflow.created_at.slice(0, 10)), __jsx("div", {
    className: _styles_scss_workflow_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.workflowStatusIcons,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 6
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      [_styles_scss_workflow_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.starred]: workflow.starred
    }),
    icon: "star",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      [_styles_scss_workflow_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.finished]: workflow.finished
    }),
    icon: "check",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (WorkflowItem);

/***/ }),

/***/ "./components/actions/jwtAction.js":
/*!*****************************************!*\
  !*** ./components/actions/jwtAction.js ***!
  \*****************************************/
/*! exports provided: setJwt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setJwt", function() { return setJwt; });
const setJwt = jwt => {
  return {
    type: 'SET_JWT',
    payload: jwt
  };
};



/***/ }),

/***/ "./components/actions/workflowInfo.js":
/*!********************************************!*\
  !*** ./components/actions/workflowInfo.js ***!
  \********************************************/
/*! exports provided: setWorkflowInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWorkflowInfo", function() { return setWorkflowInfo; });
const setWorkflowInfo = workflowInfo => {
  return {
    type: 'SET_WORKFLOWS',
    payload: {
      workflowInfo
    }
  };
};



/***/ }),

/***/ "./pages/dashboard/workflows.js":
/*!**************************************!*\
  !*** ./pages/dashboard/workflows.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss_workflows_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/scss/workflows.module.scss */ "./styles/scss/workflows.module.scss");
/* harmony import */ var _styles_scss_workflows_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_workflows_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_actions_jwtAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/actions/jwtAction */ "./components/actions/jwtAction.js");
/* harmony import */ var _components_actions_workflowInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/actions/workflowInfo */ "./components/actions/workflowInfo.js");
/* harmony import */ var _components_DashboardMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/DashboardMenu */ "./components/DashboardMenu.js");
/* harmony import */ var _components_WorkflowItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/WorkflowItem */ "./components/WorkflowItem.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Sarthak\\YT_Workflow_Cloud\\client\\pages\\dashboard\\workflows.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Dashboard = () => {
  const {
    0: workflows,
    1: setWorkflows
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const jwtToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.jwtToken);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: origWorkflow,
    1: setOrigWorkflow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: curFilter,
    1: setCurFilter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  if (jwtToken === '') {
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/');
  }

  const setWorkflowIdsInLocalStorage = workflowsInfo => {
    const workflowIds = workflowsInfo.map(workflowInfo => workflowInfo.id);

    if (!localStorage.getItem('workflowIds')) {
      localStorage.setItem('workflowIds', workflowIds);
    }
  };

  const getNewJwtToken = async () => {
    const refreshToken = localStorage.getItem('refresh-token');
    const data = {
      refresh: refreshToken
    };
    const dataStringified = JSON.stringify(data);
    const newAccessTokenRes = await fetch('http://127.0.0.1:8000/api/refresh', {
      method: 'POST',
      body: dataStringified,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const newAccessTokenJson = await newAccessTokenRes.json();

    if (newAccessTokenJson.detail === 'Token is invalid or expired') {
      localStorage.setItem('refresh-token', '');
      js_cookie__WEBPACK_IMPORTED_MODULE_8___default.a.set('jwt', JSON.stringify(''));
      js_cookie__WEBPACK_IMPORTED_MODULE_8___default.a.set('refresh-token', JSON.stringify(''));
      dispatch(Object(_components_actions_jwtAction__WEBPACK_IMPORTED_MODULE_4__["setJwt"])(''));
      return next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/');
    }

    const newJwtToken = newAccessTokenJson.access;
    dispatch(Object(_components_actions_jwtAction__WEBPACK_IMPORTED_MODULE_4__["setJwt"])(newJwtToken));
    localStorage.setItem('jwt', newJwtToken);
    js_cookie__WEBPACK_IMPORTED_MODULE_8___default.a.set('jwt', JSON.stringify(newJwtToken));
    const workflowsResponse = await fetch('http://localhost:8000/get-workflows', {
      headers: {
        Authorization: 'Bearer ' + newJwtToken
      }
    });
    const workflowsJson = await workflowsResponse.json();
    setWorkflows(workflowsJson['workflows']);
    dispatch(Object(_components_actions_workflowInfo__WEBPACK_IMPORTED_MODULE_5__["setWorkflowInfo"])(workflowsJson['workflows']));
    setWorkflowIdsInLocalStorage(workflowsJson['workflows']);
  };

  const getWorkflows = async () => {
    const jwtBearerString = 'Bearer ' + jwtToken;
    const workflowsResponse = await fetch('http://localhost:8000/get-workflows', {
      headers: {
        Authorization: jwtBearerString
      }
    });
    const workflowsJson = await workflowsResponse.json();

    if (workflowsJson.code) {
      await getNewJwtToken();
      return;
    }

    const tempWorkflows = workflowsJson['workflows'];
    const orig = tempWorkflows.sort((w1, w2) => {
      if (w1.id > w2.id) return -1;
      return 1;
    });
    setWorkflows([...orig]);
    setOrigWorkflow([...orig]);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getWorkflows();
  }, []);

  const createWorkflow = async () => {
    const res = await fetch('http://localhost:8000/create-workflow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + jwtToken
      }
    });
    const resJson = await res.json();
    const newWorkflowInfo = resJson['workflow'];
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push(`/../workflow/${newWorkflowInfo.id}`);
  };

  const filterByUnfinished = () => {
    const filtered = workflows.sort((w1, w2) => {
      if (w1.finished && w2.finished) {
        if (w1.starred && w1.starred) {
          if (w1.id > w2.id) {
            return -1;
          }

          return 1;
        }

        if (w1.starred) {
          return -1;
        }

        return 1;
      } else if (w1.finished) return 1;

      return -1;
    });
    setWorkflows([...filtered]);
    setCurFilter('finished');
  };

  const filterByStarred = () => {
    const filtered = workflows.sort((w1, w2) => {
      if (w1.starred && w2.starred) {
        if (w1.finished && w1.finished) {
          if (w1.id > w1.id) {
            return -1;
          }

          return 1;
        }

        if (w1.finished) {
          return 1;
        }

        return -1;
      } else if (w1.starred) return -1;

      return 1;
    }); // console.log(workflows);

    setWorkflows([...filtered]);
    setCurFilter('starred');
  };

  const removeFilter = () => {
    setWorkflows([...origWorkflow]);
    setCurFilter('');
  };

  return __jsx("main", {
    className: _styles_scss_workflows_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.workflowsContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: _styles_scss_workflows_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.dashboardMenuContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 4
    }
  }, __jsx(_components_DashboardMenu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 5
    }
  })), __jsx("div", {
    className: _styles_scss_workflows_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.workflowsBody,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 4
    }
  }, !workflows ? __jsx("p", {
    className: _styles_scss_workflows_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.noWorkflows,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 6
    }
  }, "You don't have any workflows. Let's get one started!") : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 6
    }
  }, __jsx("h1", {
    className: _styles_scss_workflows_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.numWorkflows,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }
  }, workflows.length, " Workflow", workflows.length != 1 ? 's' : ''), __jsx("ul", {
    className: _styles_scss_workflows_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.filter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }, __jsx("li", {
    onClick: filterByStarred,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      [_styles_scss_workflows_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.active]: curFilter === 'starred'
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 8
    }
  }, "Starred"), __jsx("li", {
    onClick: filterByUnfinished,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      [_styles_scss_workflows_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.active]: curFilter === 'finished'
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 8
    }
  }, "Unfinished"), __jsx("li", {
    onClick: removeFilter,
    className: _styles_scss_workflows_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.clear,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 8
    }
  }, "Clear")), __jsx("div", {
    className: _styles_scss_workflows_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.workflowList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }
  }, workflows.map(workflow => __jsx("a", {
    href: `../workflow/${workflow.id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 9
    }
  }, __jsx(_components_WorkflowItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    workflow: workflow,
    key: workflow.id,
    id: workflow.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 10
    }
  }))))), __jsx("div", {
    className: _styles_scss_workflows_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.addWorkflowBtn,
    onClick: () => createWorkflow(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 5
    }
  }, "Add Workflow")));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./styles/scss/dashboard-menu-item.module.scss":
/*!*****************************************************!*\
  !*** ./styles/scss/dashboard-menu-item.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menuItemLink": "dashboard-menu-item_menuItemLink__1dba2",
	"menuItemContainer": "dashboard-menu-item_menuItemContainer__xE_ir",
	"menuItemInfo": "dashboard-menu-item_menuItemInfo__3JOdK",
	"iconContainer": "dashboard-menu-item_iconContainer__2BeEf",
	"iconContainerActive": "dashboard-menu-item_iconContainerActive__1q3wQ",
	"menuTitle": "dashboard-menu-item_menuTitle__1Ev4C",
	"activeCircle": "dashboard-menu-item_activeCircle__R2iPQ",
	"active": "dashboard-menu-item_active__2zr3K"
};


/***/ }),

/***/ "./styles/scss/dashboard-menu.module.scss":
/*!************************************************!*\
  !*** ./styles/scss/dashboard-menu.module.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"toggleIcon": "dashboard-menu_toggleIcon__3HpmG",
	"dashboardMenuContainer": "dashboard-menu_dashboardMenuContainer__s2iVX",
	"divProfile": "dashboard-menu_divProfile__3iT1b",
	"dashboardMenuItems": "dashboard-menu_dashboardMenuItems__3wls8",
	"logout": "dashboard-menu_logout__2268T",
	"hideMenuItems": "dashboard-menu_hideMenuItems__kH72h"
};


/***/ }),

/***/ "./styles/scss/profile.module.scss":
/*!*****************************************!*\
  !*** ./styles/scss/profile.module.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"profileContainer": "profile_profileContainer__TKf-Q",
	"imageSection": "profile_imageSection__1xT0b",
	"profileImage": "profile_profileImage__2U8AJ",
	"inputSection": "profile_inputSection__yuT9S",
	"editIcon": "profile_editIcon__3cnWm",
	"profileImageInput": "profile_profileImageInput__38HM7"
};


/***/ }),

/***/ "./styles/scss/workflow-item.module.scss":
/*!***********************************************!*\
  !*** ./styles/scss/workflow-item.module.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"workflowFinished": "workflow-item_workflowFinished__2KbDv",
	"important": "workflow-item_important__2-9iW",
	"workflowContainer": "workflow-item_workflowContainer__2t3rY",
	"workflowTitle": "workflow-item_workflowTitle__2JCTg",
	"workflowKeywords": "workflow-item_workflowKeywords__2a86a",
	"workflowUsers": "workflow-item_workflowUsers__3AHF7",
	"workflowExtraInfo": "workflow-item_workflowExtraInfo__38vtV",
	"workflowCreated": "workflow-item_workflowCreated__3wnwU",
	"workflowStatusIcons": "workflow-item_workflowStatusIcons__3NCVU",
	"grip": "workflow-item_grip__3nZ_0",
	"starred": "workflow-item_starred__14vQm",
	"finished": "workflow-item_finished__3g2qF",
	"draggable": "workflow-item_draggable__coFHQ"
};


/***/ }),

/***/ "./styles/scss/workflows.module.scss":
/*!*******************************************!*\
  !*** ./styles/scss/workflows.module.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"workflowsContainer": "workflows_workflowsContainer__2q-_C",
	"dashboardMenuContainer": "workflows_dashboardMenuContainer__3yxOw",
	"workflowsBody": "workflows_workflowsBody__1mdgZ",
	"numWorkflows": "workflows_numWorkflows__cvyLs",
	"noWorkflows": "workflows_noWorkflows__1_4-d",
	"filter": "workflows_filter__PE8pw",
	"clear": "workflows_clear__3F7Zu",
	"active": "workflows_active__2uhby",
	"workflowList": "workflows_workflowList__1oqb1",
	"addWorkflowBtn": "workflows_addWorkflowBtn__16fEU"
};


/***/ }),

/***/ 4:
/*!********************************************!*\
  !*** multi ./pages/dashboard/workflows.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Sarthak\YT_Workflow_Cloud\client\pages\dashboard\workflows.js */"./pages/dashboard/workflows.js");


/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmRNZW51LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvV29ya2Zsb3dJdGVtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWN0aW9ucy9qd3RBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hY3Rpb25zL3dvcmtmbG93SW5mby5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQvd29ya2Zsb3dzLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9zY3NzL2Rhc2hib2FyZC1tZW51LWl0ZW0ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3Njc3MvZGFzaGJvYXJkLW1lbnUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3Njc3MvcHJvZmlsZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvc2Nzcy93b3JrZmxvdy1pdGVtLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9zY3NzL3dvcmtmbG93cy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiXSwibmFtZXMiOlsiRGFzaGJvYXJkTWVudSIsInJvdXRlciIsInVzZVJvdXRlciIsImN1clJvdXRlIiwicm91dGUiLCJjdXJyZW50UGFnZSIsInNwbGl0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImhpZGVNZW51SXRlbXMiLCJzZXRIaWRlTWVudUl0ZW1zIiwidXNlU3RhdGUiLCJ0b2dnbGVNb2JpbGVNZW51IiwibG9nb3V0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInNldEp3dCIsIkNvb2tpZSIsInNldCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwdXNoIiwiY2xhc3NuYW1lcyIsInN0eWxlcyIsInRvZ2dsZUljb24iLCJkYXNoYm9hcmRNZW51Q29udGFpbmVyIiwiZGl2UHJvZmlsZSIsImRhc2hib2FyZE1lbnVJdGVtcyIsIkRhc2hib2FyZE1lbnVJdGVtIiwibWVudVRpdGxlIiwibWVudUxpbmtSZWZlcmVuY2UiLCJtZW51SXRlbUZvbnRBd2Vzb21lUmVmIiwibWVudUl0ZW1BY3RpdmUiLCJtZW51SXRlbUxpbmsiLCJtZW51SXRlbUNvbnRhaW5lciIsIm1lbnVJdGVtSW5mbyIsImljb25Db250YWluZXIiLCJpY29uQ29udGFpbmVyQWN0aXZlIiwiYWN0aXZlQ2lyY2xlIiwiYWN0aXZlIiwiUHJvZmlsZSIsIm1vbnRocyIsImN1cnJlbnREYXRlIiwic2V0Q3VycmVudERhdGUiLCJwcm9maWxlSW1hZ2VGb3JtUmVmIiwidXNlUmVmIiwiand0VG9rZW4iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicHJvZmlsZUltYWdlIiwic2V0UHJvZmlsZUltYWdlIiwicHJvZmlsZVVzZXJuYW1lIiwic2V0UHJvZmlsZVVzZXJuYW1lIiwiZGlzcGxheU5hbWUiLCJzZXREaXNwbGF5TmFtZSIsImNhcGl0YWxpemUiLCJzdHIiLCJzbGljZSIsInRvVXBwZXJDYXNlIiwiZ2V0UHJvZmlsZUltYWdlIiwicHJvZmlsZUltYWdlVXJsUmVzIiwiZmV0Y2giLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInN0YXR1cyIsInByb2ZpbGVJbWFnZVVybEpzb24iLCJqc29uIiwiZ2V0UHJvZmlsZVVzZXJuYW1lIiwicHJvZmlsZVVzZXJuYW1lUmVzIiwicHJvZmlsZVVzZXJuYW1lSnNvbiIsInVwZGF0ZVByb2ZpbGVJbWFnZSIsInByb2ZpbGVGb3JtIiwiRm9ybURhdGEiLCJjdXJyZW50IiwicmVzIiwibWV0aG9kIiwiYm9keSIsImpzb25SZXMiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiY3VycmVudERhdGVJbmZvIiwiRGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwicHJvZmlsZUNvbnRhaW5lciIsImltYWdlU2VjdGlvbiIsImlucHV0U2VjdGlvbiIsImVkaXRJY29uIiwicHJvZmlsZUltYWdlSW5wdXQiLCJXb3JrZmxvd0l0ZW0iLCJ3b3JrZmxvdyIsImlkIiwibWF4VGl0bGVMZW5ndGhCZWZvcmVDdXRvZmYiLCJtYXhEZXNjcmlwdGlvbkxlbmd0aEJlZm9yZUN1dG9mZiIsIndvcmtmbG93Q29udGFpbmVyIiwid29ya2Zsb3dGaW5pc2hlZCIsImltcG9ydGFudCIsImZpbmlzaGVkIiwid29ya2Zsb3dUaXRsZSIsInRpdGxlIiwibGVuZ3RoIiwiZGVzY3JpcHRpb24iLCJ3b3JrZmxvd1VzZXJzIiwid29ya2Zsb3dFeHRyYUluZm8iLCJ3b3JrZmxvd0NyZWF0ZWQiLCJjcmVhdGVkX2F0Iiwid29ya2Zsb3dTdGF0dXNJY29ucyIsInN0YXJyZWQiLCJqd3QiLCJ0eXBlIiwicGF5bG9hZCIsInNldFdvcmtmbG93SW5mbyIsIndvcmtmbG93SW5mbyIsIkRhc2hib2FyZCIsIndvcmtmbG93cyIsInNldFdvcmtmbG93cyIsIm9yaWdXb3JrZmxvdyIsInNldE9yaWdXb3JrZmxvdyIsImN1ckZpbHRlciIsInNldEN1ckZpbHRlciIsIlJvdXRlciIsInNldFdvcmtmbG93SWRzSW5Mb2NhbFN0b3JhZ2UiLCJ3b3JrZmxvd3NJbmZvIiwid29ya2Zsb3dJZHMiLCJtYXAiLCJnZXRJdGVtIiwiZ2V0TmV3Snd0VG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJkYXRhIiwicmVmcmVzaCIsImRhdGFTdHJpbmdpZmllZCIsIm5ld0FjY2Vzc1Rva2VuUmVzIiwibmV3QWNjZXNzVG9rZW5Kc29uIiwiZGV0YWlsIiwibmV3Snd0VG9rZW4iLCJhY2Nlc3MiLCJ3b3JrZmxvd3NSZXNwb25zZSIsIndvcmtmbG93c0pzb24iLCJnZXRXb3JrZmxvd3MiLCJqd3RCZWFyZXJTdHJpbmciLCJjb2RlIiwidGVtcFdvcmtmbG93cyIsIm9yaWciLCJzb3J0IiwidzEiLCJ3MiIsImNyZWF0ZVdvcmtmbG93IiwicmVzSnNvbiIsIm5ld1dvcmtmbG93SW5mbyIsImZpbHRlckJ5VW5maW5pc2hlZCIsImZpbHRlcmVkIiwiZmlsdGVyQnlTdGFycmVkIiwicmVtb3ZlRmlsdGVyIiwid29ya2Zsb3dzQ29udGFpbmVyIiwid29ya2Zsb3dzQm9keSIsIm5vV29ya2Zsb3dzIiwibnVtV29ya2Zsb3dzIiwiZmlsdGVyIiwiY2xlYXIiLCJ3b3JrZmxvd0xpc3QiLCJhZGRXb3JrZmxvd0J0biJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUcsTUFBTTtBQUMzQixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHRixNQUFNLENBQUNHLEtBQXhCO0FBQ0EsUUFBTUMsV0FBVyxHQUFHRixRQUFRLENBQUNHLEtBQVQsQ0FBZSxHQUFmLEVBQW9CLENBQXBCLENBQXBCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBLFFBQU07QUFBQSxPQUFFQyxhQUFGO0FBQUEsT0FBaUJDO0FBQWpCLE1BQXNDQyxzREFBUSxDQUFDLElBQUQsQ0FBcEQ7O0FBRUEsUUFBTUMsZ0JBQWdCLEdBQUcsTUFBTTtBQUM5QkYsb0JBQWdCLENBQUMsQ0FBQ0QsYUFBRixDQUFoQjtBQUNBLEdBRkQ7O0FBSUEsUUFBTUksTUFBTSxHQUFHLE1BQU07QUFDcEJDLGdCQUFZLENBQUNDLE9BQWIsQ0FBcUIsZUFBckIsRUFBc0MsRUFBdEM7QUFDQVIsWUFBUSxDQUFDUyw0RUFBTSxDQUFDLEVBQUQsQ0FBUCxDQUFSO0FBQ0FGLGdCQUFZLENBQUNDLE9BQWIsQ0FBcUIsS0FBckIsRUFBNEIsRUFBNUI7QUFDQUUsb0RBQU0sQ0FBQ0MsR0FBUCxDQUFXLEtBQVgsRUFBa0JDLElBQUksQ0FBQ0MsU0FBTCxDQUFlLEVBQWYsQ0FBbEI7QUFDQUgsb0RBQU0sQ0FBQ0MsR0FBUCxDQUFXLGVBQVgsRUFBNEJDLElBQUksQ0FBQ0MsU0FBTCxDQUFlLEVBQWYsQ0FBNUI7QUFDQSxXQUFPbkIsTUFBTSxDQUFDb0IsSUFBUCxDQUFZLEdBQVosQ0FBUDtBQUNBLEdBUEQ7O0FBU0EsU0FDQyxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUVDLGlEQUFVLENBQUM7QUFBRSxPQUFDQyw4RUFBTSxDQUFDQyxVQUFSLEdBQXFCO0FBQXZCLEtBQUQsQ0FBMUI7QUFBMkQsV0FBTyxFQUFFWixnQkFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxFQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRCxDQURELEVBTUM7QUFDQyxhQUFTLEVBQUVVLGlEQUFVLENBQUM7QUFDckIsT0FBQ0MsOEVBQU0sQ0FBQ0Usc0JBQVIsR0FBaUMsSUFEWjtBQUVyQixPQUFDRiw4RUFBTSxDQUFDZCxhQUFSLEdBQXdCLENBQUNBO0FBRkosS0FBRCxDQUR0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUM7QUFBSyxhQUFTLEVBQUVjLDhFQUFNLENBQUNHLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQU5ELEVBU0M7QUFBSyxhQUFTLEVBQUVILDhFQUFNLENBQUNJLGtCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywwREFBRDtBQUNDLGFBQVMsRUFBRSxXQURaO0FBRUMsMEJBQXNCLEVBQUUsU0FGekI7QUFHQyxxQkFBaUIsRUFBRSxzQkFIcEI7QUFJQyxrQkFBYyxFQUFFdEIsV0FBVyxJQUFJLFdBSmhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQU9DLE1BQUMsMERBQUQ7QUFDQyxhQUFTLEVBQUUsZ0JBRFo7QUFFQywwQkFBc0IsRUFBRSxXQUZ6QjtBQUdDLHFCQUFpQixFQUFFLDJCQUhwQjtBQUlDLGtCQUFjLEVBQUVBLFdBQVcsSUFBSSxnQkFKaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBELEVBYUMsTUFBQywwREFBRDtBQUNDLGFBQVMsRUFBRSxZQURaO0FBRUMsMEJBQXNCLEVBQUUsV0FGekI7QUFHQyxxQkFBaUIsRUFBRSx1QkFIcEI7QUFJQyxrQkFBYyxFQUFFQSxXQUFXLElBQUksWUFKaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJELENBVEQsRUE2QkM7QUFBSyxhQUFTLEVBQUVrQiw4RUFBTSxDQUFDVixNQUF2QjtBQUErQixXQUFPLEVBQUVBLE1BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBRSxjQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFRSxNQUZGLFdBN0JELENBTkQsQ0FERDtBQTJDQSxDQWhFRDs7QUFrRWViLDRFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTRCLGlCQUFpQixHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQyxtQkFBYjtBQUFnQ0Msd0JBQWhDO0FBQXdEQztBQUF4RCxDQUFELEtBQThFO0FBQ3ZHLFNBQ0M7QUFBRyxRQUFJLEVBQUVGLGlCQUFUO0FBQTRCLGFBQVMsRUFBRVAsbUZBQU0sQ0FBQ1UsWUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFFVixtRkFBTSxDQUFDVyxpQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFFWCxtRkFBTSxDQUFDWSxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFDQyxhQUFTLEVBQUViLGlEQUFVLENBQUM7QUFDckIsT0FBQ0MsbUZBQU0sQ0FBQ2EsYUFBUixHQUF3QixJQURIO0FBRXJCLE9BQUNiLG1GQUFNLENBQUNjLG1CQUFSLEdBQThCTDtBQUZULEtBQUQsQ0FEdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1DLE1BQUMsOEVBQUQ7QUFBaUIsUUFBSSxFQUFFRCxzQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5ELENBREQsRUFTQztBQUFJLGFBQVMsRUFBRVIsbUZBQU0sQ0FBQ00sU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQ0EsU0FBbEMsQ0FURCxDQURELEVBWUM7QUFBSyxhQUFTLEVBQUVQLGlEQUFVLENBQUM7QUFBRSxPQUFDQyxtRkFBTSxDQUFDZSxZQUFSLEdBQXVCLElBQXpCO0FBQStCLE9BQUNmLG1GQUFNLENBQUNnQixNQUFSLEdBQWlCUDtBQUFoRCxLQUFELENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRCxDQURELENBREQ7QUFrQkEsQ0FuQkQ7O0FBcUJlSixnRkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTVksT0FBTyxHQUFHLE1BQU07QUFDckIsUUFBTUMsTUFBTSxHQUFHLENBQ2QsU0FEYyxFQUVkLFVBRmMsRUFHZCxPQUhjLEVBSWQsT0FKYyxFQUtkLEtBTGMsRUFNZCxNQU5jLEVBT2QsTUFQYyxFQVFkLFFBUmMsRUFTZCxXQVRjLEVBVWQsU0FWYyxFQVdkLFVBWGMsRUFZZCxVQVpjLENBQWY7QUFjQSxRQUFNO0FBQUEsT0FBRUMsV0FBRjtBQUFBLE9BQWVDO0FBQWYsTUFBa0NoQyxzREFBUSxDQUFDLEVBQUQsQ0FBaEQ7QUFFQSxRQUFNaUMsbUJBQW1CLEdBQUdDLG9EQUFNLEVBQWxDO0FBQ0EsUUFBTUMsUUFBUSxHQUFHQywrREFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ0YsUUFBbEIsQ0FBNUI7QUFFQSxRQUFNO0FBQUEsT0FBRUcsWUFBRjtBQUFBLE9BQWdCQztBQUFoQixNQUFvQ3ZDLHNEQUFRLENBQUMsRUFBRCxDQUFsRDtBQUNBLFFBQU07QUFBQSxPQUFFd0MsZUFBRjtBQUFBLE9BQW1CQztBQUFuQixNQUEwQ3pDLHNEQUFRLENBQUMsRUFBRCxDQUF4RDtBQUNBLFFBQU07QUFBQSxPQUFFMEMsV0FBRjtBQUFBLE9BQWVDO0FBQWYsTUFBa0MzQyxzREFBUSxDQUFDLEVBQUQsQ0FBaEQ7O0FBRUEsUUFBTTRDLFVBQVUsR0FBSUMsR0FBRCxJQUFTO0FBQzNCLFdBQU9BLEdBQUcsQ0FBQ0MsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCQyxXQUFoQixLQUFnQ0YsR0FBRyxDQUFDQyxLQUFKLENBQVUsQ0FBVixDQUF2QztBQUNBLEdBRkQ7O0FBSUEsUUFBTUUsZUFBZSxHQUFHLFlBQVk7QUFDbkMsVUFBTUMsa0JBQWtCLEdBQUcsTUFBTUMsS0FBSyxDQUFDLHlDQUFELEVBQTRDO0FBQ2pGQyxhQUFPLEVBQUU7QUFDUix3QkFBZ0Isa0JBRFI7QUFFUkMscUJBQWEsRUFBRSxZQUFZakI7QUFGbkI7QUFEd0UsS0FBNUMsQ0FBdEM7O0FBTUEsUUFBSWMsa0JBQWtCLENBQUNJLE1BQW5CLEtBQThCLEdBQWxDLEVBQXVDO0FBQ3RDLFlBQU1DLG1CQUFtQixHQUFHLE1BQU1MLGtCQUFrQixDQUFDTSxJQUFuQixFQUFsQztBQUNBaEIscUJBQWUsQ0FBQ2UsbUJBQW1CLENBQUMsS0FBRCxDQUFwQixDQUFmO0FBQ0E7QUFDRCxHQVhEOztBQWFBLFFBQU1FLGtCQUFrQixHQUFHLFlBQVk7QUFDdEMsVUFBTUMsa0JBQWtCLEdBQUcsTUFBTVAsS0FBSyxDQUFDLDRDQUFELEVBQStDO0FBQ3BGQyxhQUFPLEVBQUU7QUFDUix3QkFBZ0Isa0JBRFI7QUFFUkMscUJBQWEsRUFBRSxZQUFZakI7QUFGbkI7QUFEMkUsS0FBL0MsQ0FBdEM7O0FBTUEsUUFBSXNCLGtCQUFrQixDQUFDSixNQUFuQixLQUE4QixHQUFsQyxFQUF1QztBQUN0QyxZQUFNSyxtQkFBbUIsR0FBRyxNQUFNRCxrQkFBa0IsQ0FBQ0YsSUFBbkIsRUFBbEM7QUFDQWQsd0JBQWtCLENBQUNpQixtQkFBbUIsQ0FBQyxLQUFELENBQXBCLENBQWxCO0FBQ0FmLG9CQUFjLENBQUNDLFVBQVUsQ0FBQ2MsbUJBQW1CLENBQUMsS0FBRCxDQUFuQixDQUEyQi9ELEtBQTNCLENBQWlDLEdBQWpDLEVBQXNDLENBQXRDLENBQUQsQ0FBWCxDQUFkO0FBQ0E7QUFDRCxHQVpEOztBQWNBLFFBQU1nRSxrQkFBa0IsR0FBRyxZQUFZO0FBQ3RDLFVBQU1DLFdBQVcsR0FBRyxJQUFJQyxRQUFKLENBQWE1QixtQkFBbUIsQ0FBQzZCLE9BQWpDLENBQXBCO0FBQ0EsVUFBTUMsR0FBRyxHQUFHLE1BQU1iLEtBQUssQ0FBQyw0Q0FBRCxFQUErQztBQUNyRWMsWUFBTSxFQUFFLE1BRDZEO0FBRXJFYixhQUFPLEVBQUU7QUFDUkMscUJBQWEsRUFBRSxZQUFZakI7QUFEbkIsT0FGNEQ7QUFLckU4QixVQUFJLEVBQUVMO0FBTCtELEtBQS9DLENBQXZCOztBQU9BLFFBQUlHLEdBQUcsQ0FBQ1YsTUFBSixLQUFlLEdBQW5CLEVBQXdCO0FBQ3ZCLFlBQU1hLE9BQU8sR0FBRyxNQUFNSCxHQUFHLENBQUNSLElBQUosRUFBdEI7QUFDQVksYUFBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFDQTs7QUFDRGxCLG1CQUFlO0FBQ2YsR0FkRDs7QUFnQkFxQix5REFBUyxDQUFDLE1BQU07QUFDZixVQUFNQyxlQUFlLEdBQUcsSUFBSUMsSUFBSixFQUF4QjtBQUNBLFVBQU1DLEtBQUssR0FBRzFDLE1BQU0sQ0FBQ3dDLGVBQWUsQ0FBQ0csUUFBaEIsRUFBRCxDQUFwQjtBQUNBLFVBQU1DLEdBQUcsR0FBR0osZUFBZSxDQUFDSyxPQUFoQixFQUFaO0FBQ0EsVUFBTUMsSUFBSSxHQUFHTixlQUFlLENBQUNPLFdBQWhCLEVBQWI7QUFDQTdDLGtCQUFjLENBQUN3QyxLQUFLLEdBQUcsR0FBUixHQUFjRSxHQUFkLEdBQW9CLElBQXBCLEdBQTJCRSxJQUE1QixDQUFkO0FBQ0E1QixtQkFBZTtBQUNmUSxzQkFBa0I7QUFDbEIsR0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVVBLFNBQ0M7QUFBSyxhQUFTLEVBQUU1Qyx1RUFBTSxDQUFDa0UsZ0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBRWxFLHVFQUFNLENBQUNtRSxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUVuRSx1RUFBTSxDQUFDMEIsWUFBdkI7QUFBcUMsT0FBRyxFQUFFQSxZQUExQztBQUF3RCxPQUFHLEVBQUVFLGVBQWUsQ0FBQzdDLEtBQWhCLENBQXNCLEdBQXRCLEVBQTJCLENBQTNCLENBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVDO0FBQU0sYUFBUyxFQUFFaUIsdUVBQU0sQ0FBQ29FLFlBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDhFQUFEO0FBQWlCLGFBQVMsRUFBRXBFLHVFQUFNLENBQUNxRSxRQUFuQztBQUE2QyxRQUFJLEVBQUUsV0FBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBRkQsRUFLQztBQUFNLFdBQU8sRUFBQyxxQkFBZDtBQUFvQyxPQUFHLEVBQUVoRCxtQkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQ0MsUUFBSSxFQUFDLE1BRE47QUFFQyxZQUFRLEVBQUUwQixrQkFGWDtBQUdDLFVBQU0sRUFBRSxTQUhUO0FBSUMsYUFBUyxFQUFFL0MsdUVBQU0sQ0FBQ3NFLGlCQUpuQjtBQUtDLFFBQUksRUFBQyxPQUxOO0FBTUMsU0FBSyxFQUFDLEVBTlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBTEQsQ0FERCxFQWlCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVN4QyxXQUFULE1BakJELEVBa0JDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS1gsV0FBTCxDQWxCRCxDQUREO0FBc0JBLENBdkdEOztBQXlHZUYsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTXNELFlBQVksR0FBRyxDQUFDO0FBQUVDLFVBQUY7QUFBWUM7QUFBWixDQUFELEtBQXNCO0FBQzFDLFFBQU1DLDBCQUEwQixHQUFHLEVBQW5DO0FBQ0EsUUFBTUMsZ0NBQWdDLEdBQUcsRUFBekM7QUFFQSxRQUFNakQsWUFBWSxHQUFHRiwrREFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsWUFBbEIsQ0FBaEM7QUFFQSxTQUNDO0FBQ0MsYUFBUyxFQUFFM0IsaURBQVUsQ0FBQztBQUNyQixPQUFDQyw2RUFBTSxDQUFDNEUsaUJBQVIsR0FBNEIsSUFEUDtBQUVyQixPQUFDNUUsNkVBQU0sQ0FBQzZFLGdCQUFSLEdBQTJCTCxRQUFRLENBQUMsVUFBRCxDQUZkO0FBR3JCLE9BQUN4RSw2RUFBTSxDQUFDOEUsU0FBUixHQUFvQk4sUUFBUSxDQUFDLFNBQUQsQ0FBUixJQUF1QixDQUFDQSxRQUFRLENBQUNPO0FBSGhDLEtBQUQsQ0FEdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9DO0FBQUksYUFBUyxFQUFFL0UsNkVBQU0sQ0FBQ2dGLGFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRVIsUUFBUSxDQUFDUyxLQUFULENBQWVDLE1BQWYsR0FBd0JSLDBCQUF4QixHQUNBRixRQUFRLENBQUNTLEtBQVQsQ0FBZS9DLEtBQWYsQ0FBcUIsQ0FBckIsRUFBd0J3QywwQkFBeEIsSUFBc0QsS0FEdEQsR0FHQUYsUUFBUSxDQUFDUyxLQUpYLENBUEQsRUFjQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VULFFBQVEsQ0FBQ1csV0FBVCxDQUFxQkQsTUFBckIsR0FBOEJQLGdDQUE5QixHQUNBSCxRQUFRLENBQUNXLFdBQVQsQ0FBcUJqRCxLQUFyQixDQUEyQixDQUEzQixFQUE4QnlDLGdDQUE5QixJQUFrRSxLQURsRSxHQUdBSCxRQUFRLENBQUNXLFdBSlgsQ0FkRCxFQXFCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUVuRiw2RUFBTSxDQUFDb0YsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBRUM7QUFBSyxhQUFTLEVBQUVwRiw2RUFBTSxDQUFDcUYsaUJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFJLGFBQVMsRUFBRXJGLDZFQUFNLENBQUNzRixlQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXdDZCxRQUFRLENBQUNlLFVBQVQsQ0FBb0JyRCxLQUFwQixDQUEwQixDQUExQixFQUE2QixFQUE3QixDQUF4QyxDQURELEVBRUM7QUFBSyxhQUFTLEVBQUVsQyw2RUFBTSxDQUFDd0YsbUJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDhFQUFEO0FBQWlCLGFBQVMsRUFBRXpGLGlEQUFVLENBQUM7QUFBRSxPQUFDQyw2RUFBTSxDQUFDeUYsT0FBUixHQUFrQmpCLFFBQVEsQ0FBQ2lCO0FBQTdCLEtBQUQsQ0FBdEM7QUFBZ0YsUUFBSSxFQUFDLE1BQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVDLE1BQUMsOEVBQUQ7QUFDQyxhQUFTLEVBQUUxRixpREFBVSxDQUFDO0FBQUUsT0FBQ0MsNkVBQU0sQ0FBQytFLFFBQVIsR0FBbUJQLFFBQVEsQ0FBQ087QUFBOUIsS0FBRCxDQUR0QjtBQUVDLFFBQUksRUFBQyxPQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxDQUZELENBRkQsQ0FyQkQsQ0FERDtBQXFDQSxDQTNDRDs7QUE2Q2VSLDJFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUFBO0FBQUEsTUFBTTlFLE1BQU0sR0FBSWlHLEdBQUQsSUFBUztBQUN2QixTQUFPO0FBQ05DLFFBQUksRUFBRSxTQURBO0FBRU5DLFdBQU8sRUFBRUY7QUFGSCxHQUFQO0FBSUEsQ0FMRDs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUEsTUFBTUcsZUFBZSxHQUFJQyxZQUFELElBQWtCO0FBQ3pDLFNBQU87QUFDTkgsUUFBSSxFQUFFLGVBREE7QUFFTkMsV0FBTyxFQUFFO0FBQ1JFO0FBRFE7QUFGSCxHQUFQO0FBTUEsQ0FQRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1DLFNBQVMsR0FBRyxNQUFNO0FBQ3ZCLFFBQU07QUFBQSxPQUFFQyxTQUFGO0FBQUEsT0FBYUM7QUFBYixNQUE4QjdHLHNEQUFRLENBQUMsSUFBRCxDQUE1QztBQUNBLFFBQU1tQyxRQUFRLEdBQUdDLCtEQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBSyxDQUFDRixRQUFsQixDQUE1QjtBQUNBLFFBQU12QyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsUUFBTTtBQUFBLE9BQUVpSCxZQUFGO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DL0csc0RBQVEsQ0FBQyxFQUFELENBQWxEO0FBQ0EsUUFBTTtBQUFBLE9BQUVnSCxTQUFGO0FBQUEsT0FBYUM7QUFBYixNQUE4QmpILHNEQUFRLENBQUMsRUFBRCxDQUE1Qzs7QUFDQSxNQUFJbUMsUUFBUSxLQUFLLEVBQWpCLEVBQXFCO0FBQ3BCK0Usc0RBQU0sQ0FBQ3hHLElBQVAsQ0FBWSxHQUFaO0FBQ0E7O0FBRUQsUUFBTXlHLDRCQUE0QixHQUFJQyxhQUFELElBQW1CO0FBQ3ZELFVBQU1DLFdBQVcsR0FBR0QsYUFBYSxDQUFDRSxHQUFkLENBQW1CWixZQUFELElBQWtCQSxZQUFZLENBQUNyQixFQUFqRCxDQUFwQjs7QUFDQSxRQUFJLENBQUNsRixZQUFZLENBQUNvSCxPQUFiLENBQXFCLGFBQXJCLENBQUwsRUFBMEM7QUFDekNwSCxrQkFBWSxDQUFDQyxPQUFiLENBQXFCLGFBQXJCLEVBQW9DaUgsV0FBcEM7QUFDQTtBQUNELEdBTEQ7O0FBT0EsUUFBTUcsY0FBYyxHQUFHLFlBQVk7QUFDbEMsVUFBTUMsWUFBWSxHQUFHdEgsWUFBWSxDQUFDb0gsT0FBYixDQUFxQixlQUFyQixDQUFyQjtBQUNBLFVBQU1HLElBQUksR0FBRztBQUNaQyxhQUFPLEVBQUVGO0FBREcsS0FBYjtBQUdBLFVBQU1HLGVBQWUsR0FBR3BILElBQUksQ0FBQ0MsU0FBTCxDQUFlaUgsSUFBZixDQUF4QjtBQUNBLFVBQU1HLGlCQUFpQixHQUFHLE1BQU0zRSxLQUFLLENBQUMsbUNBQUQsRUFBc0M7QUFDMUVjLFlBQU0sRUFBRSxNQURrRTtBQUUxRUMsVUFBSSxFQUFFMkQsZUFGb0U7QUFHMUV6RSxhQUFPLEVBQUU7QUFDUix3QkFBZ0I7QUFEUjtBQUhpRSxLQUF0QyxDQUFyQztBQU9BLFVBQU0yRSxrQkFBa0IsR0FBRyxNQUFNRCxpQkFBaUIsQ0FBQ3RFLElBQWxCLEVBQWpDOztBQUNBLFFBQUl1RSxrQkFBa0IsQ0FBQ0MsTUFBbkIsS0FBOEIsNkJBQWxDLEVBQWlFO0FBQ2hFNUgsa0JBQVksQ0FBQ0MsT0FBYixDQUFxQixlQUFyQixFQUFzQyxFQUF0QztBQUNBRSxzREFBTSxDQUFDQyxHQUFQLENBQVcsS0FBWCxFQUFrQkMsSUFBSSxDQUFDQyxTQUFMLENBQWUsRUFBZixDQUFsQjtBQUNBSCxzREFBTSxDQUFDQyxHQUFQLENBQVcsZUFBWCxFQUE0QkMsSUFBSSxDQUFDQyxTQUFMLENBQWUsRUFBZixDQUE1QjtBQUNBYixjQUFRLENBQUNTLDRFQUFNLENBQUMsRUFBRCxDQUFQLENBQVI7QUFDQSxhQUFPNkcsa0RBQU0sQ0FBQ3hHLElBQVAsQ0FBWSxHQUFaLENBQVA7QUFDQTs7QUFDRCxVQUFNc0gsV0FBVyxHQUFHRixrQkFBa0IsQ0FBQ0csTUFBdkM7QUFDQXJJLFlBQVEsQ0FBQ1MsNEVBQU0sQ0FBQzJILFdBQUQsQ0FBUCxDQUFSO0FBQ0E3SCxnQkFBWSxDQUFDQyxPQUFiLENBQXFCLEtBQXJCLEVBQTRCNEgsV0FBNUI7QUFDQTFILG9EQUFNLENBQUNDLEdBQVAsQ0FBVyxLQUFYLEVBQWtCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZXVILFdBQWYsQ0FBbEI7QUFDQSxVQUFNRSxpQkFBaUIsR0FBRyxNQUFNaEYsS0FBSyxDQUFDLHFDQUFELEVBQXdDO0FBQzVFQyxhQUFPLEVBQUU7QUFDUkMscUJBQWEsRUFBRSxZQUFZNEU7QUFEbkI7QUFEbUUsS0FBeEMsQ0FBckM7QUFLQSxVQUFNRyxhQUFhLEdBQUcsTUFBTUQsaUJBQWlCLENBQUMzRSxJQUFsQixFQUE1QjtBQUNBc0QsZ0JBQVksQ0FBQ3NCLGFBQWEsQ0FBQyxXQUFELENBQWQsQ0FBWjtBQUNBdkksWUFBUSxDQUFDNkcsd0ZBQWUsQ0FBQzBCLGFBQWEsQ0FBQyxXQUFELENBQWQsQ0FBaEIsQ0FBUjtBQUNBaEIsZ0NBQTRCLENBQUNnQixhQUFhLENBQUMsV0FBRCxDQUFkLENBQTVCO0FBQ0EsR0FsQ0Q7O0FBb0NBLFFBQU1DLFlBQVksR0FBRyxZQUFZO0FBQ2hDLFVBQU1DLGVBQWUsR0FBRyxZQUFZbEcsUUFBcEM7QUFDQSxVQUFNK0YsaUJBQWlCLEdBQUcsTUFBTWhGLEtBQUssQ0FBQyxxQ0FBRCxFQUF3QztBQUM1RUMsYUFBTyxFQUFFO0FBQ1JDLHFCQUFhLEVBQUVpRjtBQURQO0FBRG1FLEtBQXhDLENBQXJDO0FBS0EsVUFBTUYsYUFBYSxHQUFHLE1BQU1ELGlCQUFpQixDQUFDM0UsSUFBbEIsRUFBNUI7O0FBRUEsUUFBSTRFLGFBQWEsQ0FBQ0csSUFBbEIsRUFBd0I7QUFDdkIsWUFBTWQsY0FBYyxFQUFwQjtBQUNBO0FBQ0E7O0FBQ0QsVUFBTWUsYUFBYSxHQUFHSixhQUFhLENBQUMsV0FBRCxDQUFuQztBQUNBLFVBQU1LLElBQUksR0FBR0QsYUFBYSxDQUFDRSxJQUFkLENBQW1CLENBQUNDLEVBQUQsRUFBS0MsRUFBTCxLQUFZO0FBQzNDLFVBQUlELEVBQUUsQ0FBQ3JELEVBQUgsR0FBUXNELEVBQUUsQ0FBQ3RELEVBQWYsRUFBbUIsT0FBTyxDQUFDLENBQVI7QUFDbkIsYUFBTyxDQUFQO0FBQ0EsS0FIWSxDQUFiO0FBSUF3QixnQkFBWSxDQUFDLENBQUUsR0FBRzJCLElBQUwsQ0FBRCxDQUFaO0FBQ0F6QixtQkFBZSxDQUFDLENBQUUsR0FBR3lCLElBQUwsQ0FBRCxDQUFmO0FBQ0EsR0FwQkQ7O0FBc0JBbkUseURBQVMsQ0FBQyxNQUFNO0FBQ2YrRCxnQkFBWTtBQUNaLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsUUFBTVEsY0FBYyxHQUFHLFlBQVk7QUFDbEMsVUFBTTdFLEdBQUcsR0FBRyxNQUFNYixLQUFLLENBQUMsdUNBQUQsRUFBMEM7QUFDaEVjLFlBQU0sRUFBRSxNQUR3RDtBQUVoRWIsYUFBTyxFQUFFO0FBQ1Isd0JBQWdCLGtCQURSO0FBRVJDLHFCQUFhLEVBQUUsWUFBWWpCO0FBRm5CO0FBRnVELEtBQTFDLENBQXZCO0FBT0EsVUFBTTBHLE9BQU8sR0FBRyxNQUFNOUUsR0FBRyxDQUFDUixJQUFKLEVBQXRCO0FBQ0EsVUFBTXVGLGVBQWUsR0FBR0QsT0FBTyxDQUFDLFVBQUQsQ0FBL0I7QUFDQTNCLHNEQUFNLENBQUN4RyxJQUFQLENBQWEsZ0JBQWVvSSxlQUFlLENBQUN6RCxFQUFHLEVBQS9DO0FBQ0EsR0FYRDs7QUFhQSxRQUFNMEQsa0JBQWtCLEdBQUcsTUFBTTtBQUNoQyxVQUFNQyxRQUFRLEdBQUdwQyxTQUFTLENBQUM2QixJQUFWLENBQWUsQ0FBQ0MsRUFBRCxFQUFLQyxFQUFMLEtBQVk7QUFDM0MsVUFBSUQsRUFBRSxDQUFDL0MsUUFBSCxJQUFlZ0QsRUFBRSxDQUFDaEQsUUFBdEIsRUFBZ0M7QUFDL0IsWUFBSStDLEVBQUUsQ0FBQ3JDLE9BQUgsSUFBY3FDLEVBQUUsQ0FBQ3JDLE9BQXJCLEVBQThCO0FBQzdCLGNBQUlxQyxFQUFFLENBQUNyRCxFQUFILEdBQVFzRCxFQUFFLENBQUN0RCxFQUFmLEVBQW1CO0FBQ2xCLG1CQUFPLENBQUMsQ0FBUjtBQUNBOztBQUNELGlCQUFPLENBQVA7QUFDQTs7QUFDRCxZQUFJcUQsRUFBRSxDQUFDckMsT0FBUCxFQUFnQjtBQUNmLGlCQUFPLENBQUMsQ0FBUjtBQUNBOztBQUNELGVBQU8sQ0FBUDtBQUNBLE9BWEQsTUFXTyxJQUFJcUMsRUFBRSxDQUFDL0MsUUFBUCxFQUFpQixPQUFPLENBQVA7O0FBQ3hCLGFBQU8sQ0FBQyxDQUFSO0FBQ0EsS0FkZ0IsQ0FBakI7QUFlQWtCLGdCQUFZLENBQUMsQ0FBRSxHQUFHbUMsUUFBTCxDQUFELENBQVo7QUFDQS9CLGdCQUFZLENBQUMsVUFBRCxDQUFaO0FBQ0EsR0FsQkQ7O0FBb0JBLFFBQU1nQyxlQUFlLEdBQUcsTUFBTTtBQUM3QixVQUFNRCxRQUFRLEdBQUdwQyxTQUFTLENBQUM2QixJQUFWLENBQWUsQ0FBQ0MsRUFBRCxFQUFLQyxFQUFMLEtBQVk7QUFDM0MsVUFBSUQsRUFBRSxDQUFDckMsT0FBSCxJQUFjc0MsRUFBRSxDQUFDdEMsT0FBckIsRUFBOEI7QUFDN0IsWUFBSXFDLEVBQUUsQ0FBQy9DLFFBQUgsSUFBZStDLEVBQUUsQ0FBQy9DLFFBQXRCLEVBQWdDO0FBQy9CLGNBQUkrQyxFQUFFLENBQUNyRCxFQUFILEdBQVFxRCxFQUFFLENBQUNyRCxFQUFmLEVBQW1CO0FBQ2xCLG1CQUFPLENBQUMsQ0FBUjtBQUNBOztBQUNELGlCQUFPLENBQVA7QUFDQTs7QUFDRCxZQUFJcUQsRUFBRSxDQUFDL0MsUUFBUCxFQUFpQjtBQUNoQixpQkFBTyxDQUFQO0FBQ0E7O0FBQ0QsZUFBTyxDQUFDLENBQVI7QUFDQSxPQVhELE1BV08sSUFBSStDLEVBQUUsQ0FBQ3JDLE9BQVAsRUFBZ0IsT0FBTyxDQUFDLENBQVI7O0FBQ3ZCLGFBQU8sQ0FBUDtBQUNBLEtBZGdCLENBQWpCLENBRDZCLENBZ0I3Qjs7QUFDQVEsZ0JBQVksQ0FBQyxDQUFFLEdBQUdtQyxRQUFMLENBQUQsQ0FBWjtBQUNBL0IsZ0JBQVksQ0FBQyxTQUFELENBQVo7QUFDQSxHQW5CRDs7QUFxQkEsUUFBTWlDLFlBQVksR0FBRyxNQUFNO0FBQzFCckMsZ0JBQVksQ0FBQyxDQUFFLEdBQUdDLFlBQUwsQ0FBRCxDQUFaO0FBQ0FHLGdCQUFZLENBQUMsRUFBRCxDQUFaO0FBQ0EsR0FIRDs7QUFLQSxTQUNDO0FBQU0sYUFBUyxFQUFFckcseUVBQU0sQ0FBQ3VJLGtCQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUV2SSx5RUFBTSxDQUFDRSxzQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREQsRUFJQztBQUFLLGFBQVMsRUFBRUYseUVBQU0sQ0FBQ3dJLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxDQUFDeEMsU0FBRCxHQUNBO0FBQUcsYUFBUyxFQUFFaEcseUVBQU0sQ0FBQ3lJLFdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNERBREEsR0FHQSxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSSxhQUFTLEVBQUV6SSx5RUFBTSxDQUFDMEksWUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFMUMsU0FBUyxDQUFDZCxNQURaLGVBQzZCYyxTQUFTLENBQUNkLE1BQVYsSUFBb0IsQ0FBcEIsR0FBd0IsR0FBeEIsR0FBOEIsRUFEM0QsQ0FERCxFQUlDO0FBQUksYUFBUyxFQUFFbEYseUVBQU0sQ0FBQzJJLE1BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUNDLFdBQU8sRUFBRU4sZUFEVjtBQUVDLGFBQVMsRUFBRXRJLGlEQUFVLENBQUM7QUFBRSxPQUFDQyx5RUFBTSxDQUFDZ0IsTUFBUixHQUFpQm9GLFNBQVMsS0FBSztBQUFqQyxLQUFELENBRnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxFQU9DO0FBQ0MsV0FBTyxFQUFFK0Isa0JBRFY7QUFFQyxhQUFTLEVBQUVwSSxpREFBVSxDQUFDO0FBQUUsT0FBQ0MseUVBQU0sQ0FBQ2dCLE1BQVIsR0FBaUJvRixTQUFTLEtBQUs7QUFBakMsS0FBRCxDQUZ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBELEVBYUM7QUFBSSxXQUFPLEVBQUVrQyxZQUFiO0FBQTJCLGFBQVMsRUFBRXRJLHlFQUFNLENBQUM0SSxLQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkQsQ0FKRCxFQXFCQztBQUFLLGFBQVMsRUFBRTVJLHlFQUFNLENBQUM2SSxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U3QyxTQUFTLENBQUNVLEdBQVYsQ0FBZWxDLFFBQUQsSUFDZDtBQUFHLFFBQUksRUFBRyxlQUFjQSxRQUFRLENBQUNDLEVBQUcsRUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0VBQUQ7QUFBYyxZQUFRLEVBQUVELFFBQXhCO0FBQWtDLE9BQUcsRUFBRUEsUUFBUSxDQUFDQyxFQUFoRDtBQUFvRCxNQUFFLEVBQUVELFFBQVEsQ0FBQ0MsRUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREEsQ0FERixDQXJCRCxDQUpGLEVBa0NDO0FBQUssYUFBUyxFQUFFekUseUVBQU0sQ0FBQzhJLGNBQXZCO0FBQXVDLFdBQU8sRUFBRSxNQUFNZCxjQUFjLEVBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbENELENBSkQsQ0FERDtBQTZDQSxDQXZMRDs7QUF5TGVqQyx3RUFBZixFOzs7Ozs7Ozs7OztBQ25NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQSwyRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZGFzaGJvYXJkXFx3b3JrZmxvd3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9zY3NzL2Rhc2hib2FyZC1tZW51Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi9Qcm9maWxlJztcclxuaW1wb3J0IERhc2hib2FyZE1lbnVJdGVtIGZyb20gJy4vRGFzaGJvYXJkTWVudUl0ZW0nO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IHNldEp3dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvYWN0aW9ucy9qd3RBY3Rpb24nO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IENvb2tpZSBmcm9tICdqcy1jb29raWUnO1xyXG5cclxuY29uc3QgRGFzaGJvYXJkTWVudSA9ICgpID0+IHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCBjdXJSb3V0ZSA9IHJvdXRlci5yb3V0ZTtcclxuXHRjb25zdCBjdXJyZW50UGFnZSA9IGN1clJvdXRlLnNwbGl0KCcvJylbMl07XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuXHRjb25zdCBbIGhpZGVNZW51SXRlbXMsIHNldEhpZGVNZW51SXRlbXMgXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuXHRjb25zdCB0b2dnbGVNb2JpbGVNZW51ID0gKCkgPT4ge1xyXG5cdFx0c2V0SGlkZU1lbnVJdGVtcyghaGlkZU1lbnVJdGVtcyk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JlZnJlc2gtdG9rZW4nLCAnJyk7XHJcblx0XHRkaXNwYXRjaChzZXRKd3QoJycpKTtcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdqd3QnLCAnJyk7XHJcblx0XHRDb29raWUuc2V0KCdqd3QnLCBKU09OLnN0cmluZ2lmeSgnJykpO1xyXG5cdFx0Q29va2llLnNldCgncmVmcmVzaC10b2tlbicsIEpTT04uc3RyaW5naWZ5KCcnKSk7XHJcblx0XHRyZXR1cm4gcm91dGVyLnB1c2goJy8nKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7IFtzdHlsZXMudG9nZ2xlSWNvbl06IHRydWUgfSl9IG9uQ2xpY2s9e3RvZ2dsZU1vYmlsZU1lbnV9PlxyXG5cdFx0XHRcdDxkaXYgLz5cclxuXHRcdFx0XHQ8ZGl2IC8+XHJcblx0XHRcdFx0PGRpdiAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcblx0XHRcdFx0XHRbc3R5bGVzLmRhc2hib2FyZE1lbnVDb250YWluZXJdOiB0cnVlLFxyXG5cdFx0XHRcdFx0W3N0eWxlcy5oaWRlTWVudUl0ZW1zXTogIWhpZGVNZW51SXRlbXNcclxuXHRcdFx0XHR9KX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGl2UHJvZmlsZX0+XHJcblx0XHRcdFx0XHQ8UHJvZmlsZSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGFzaGJvYXJkTWVudUl0ZW1zfT5cclxuXHRcdFx0XHRcdDxEYXNoYm9hcmRNZW51SXRlbVxyXG5cdFx0XHRcdFx0XHRtZW51VGl0bGU9eydXb3JrZmxvd3MnfVxyXG5cdFx0XHRcdFx0XHRtZW51SXRlbUZvbnRBd2Vzb21lUmVmPXsnc2l0ZW1hcCd9XHJcblx0XHRcdFx0XHRcdG1lbnVMaW5rUmVmZXJlbmNlPXsnL2Rhc2hib2FyZC93b3JrZmxvd3MnfVxyXG5cdFx0XHRcdFx0XHRtZW51SXRlbUFjdGl2ZT17Y3VycmVudFBhZ2UgPT0gJ3dvcmtmbG93cyd9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PERhc2hib2FyZE1lbnVJdGVtXHJcblx0XHRcdFx0XHRcdG1lbnVUaXRsZT17J1NoYXJlZCB3aXRoIG1lJ31cclxuXHRcdFx0XHRcdFx0bWVudUl0ZW1Gb250QXdlc29tZVJlZj17J3NoYXJlLWFsdCd9XHJcblx0XHRcdFx0XHRcdG1lbnVMaW5rUmVmZXJlbmNlPXsnL2Rhc2hib2FyZC9zaGFyZWQtd2l0aC1tZSd9XHJcblx0XHRcdFx0XHRcdG1lbnVJdGVtQWN0aXZlPXtjdXJyZW50UGFnZSA9PSAnc2hhcmVkLXdpdGgtbWUnfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxEYXNoYm9hcmRNZW51SXRlbVxyXG5cdFx0XHRcdFx0XHRtZW51VGl0bGU9eydTdGF0aXN0aWNzJ31cclxuXHRcdFx0XHRcdFx0bWVudUl0ZW1Gb250QXdlc29tZVJlZj17J2NoYXJ0LXBpZSd9XHJcblx0XHRcdFx0XHRcdG1lbnVMaW5rUmVmZXJlbmNlPXsnL2Rhc2hib2FyZC9zdGF0aXN0aWNzJ31cclxuXHRcdFx0XHRcdFx0bWVudUl0ZW1BY3RpdmU9e2N1cnJlbnRQYWdlID09ICdzdGF0aXN0aWNzJ31cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvdXR9IG9uQ2xpY2s9e2xvZ291dH0+XHJcblx0XHRcdFx0XHQ8Rm9udEF3ZXNvbWVJY29uIGljb249eydzaWduLW91dC1hbHQnfSAvPlxyXG5cdFx0XHRcdFx0eycgICAgJ31Mb2dvdXRcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRNZW51O1xyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9zY3NzL2Rhc2hib2FyZC1tZW51LWl0ZW0ubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuXHJcbmNvbnN0IERhc2hib2FyZE1lbnVJdGVtID0gKHsgbWVudVRpdGxlLCBtZW51TGlua1JlZmVyZW5jZSwgbWVudUl0ZW1Gb250QXdlc29tZVJlZiwgbWVudUl0ZW1BY3RpdmUgfSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8YSBocmVmPXttZW51TGlua1JlZmVyZW5jZX0gY2xhc3NOYW1lPXtzdHlsZXMubWVudUl0ZW1MaW5rfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51SXRlbUNvbnRhaW5lcn0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51SXRlbUluZm99PlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFtzdHlsZXMuaWNvbkNvbnRhaW5lcl06IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0W3N0eWxlcy5pY29uQ29udGFpbmVyQWN0aXZlXTogbWVudUl0ZW1BY3RpdmVcclxuXHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxGb250QXdlc29tZUljb24gaWNvbj17bWVudUl0ZW1Gb250QXdlc29tZVJlZn0gLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVUaXRsZX0+e21lbnVUaXRsZX08L2gzPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHsgW3N0eWxlcy5hY3RpdmVDaXJjbGVdOiB0cnVlLCBbc3R5bGVzLmFjdGl2ZV06IG1lbnVJdGVtQWN0aXZlIH0pfSAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvYT5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkTWVudUl0ZW07XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3Njc3MvcHJvZmlsZS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5cclxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcclxuXHRjb25zdCBtb250aHMgPSBbXHJcblx0XHQnSmFudWFyeScsXHJcblx0XHQnRmVicnVhcnknLFxyXG5cdFx0J01hcmNoJyxcclxuXHRcdCdBcHJpbCcsXHJcblx0XHQnTWF5JyxcclxuXHRcdCdKdW5lJyxcclxuXHRcdCdKdWx5JyxcclxuXHRcdCdBdWd1c3QnLFxyXG5cdFx0J1NlcHRlbWJlcicsXHJcblx0XHQnT2N0b2JlcicsXHJcblx0XHQnTm92ZW1iZXInLFxyXG5cdFx0J0RlY2VtYmVyJ1xyXG5cdF07XHJcblx0Y29uc3QgWyBjdXJyZW50RGF0ZSwgc2V0Q3VycmVudERhdGUgXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcblx0Y29uc3QgcHJvZmlsZUltYWdlRm9ybVJlZiA9IHVzZVJlZigpO1xyXG5cdGNvbnN0IGp3dFRva2VuID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5qd3RUb2tlbik7XHJcblxyXG5cdGNvbnN0IFsgcHJvZmlsZUltYWdlLCBzZXRQcm9maWxlSW1hZ2UgXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbIHByb2ZpbGVVc2VybmFtZSwgc2V0UHJvZmlsZVVzZXJuYW1lIF0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgWyBkaXNwbGF5TmFtZSwgc2V0RGlzcGxheU5hbWUgXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcblx0Y29uc3QgY2FwaXRhbGl6ZSA9IChzdHIpID0+IHtcclxuXHRcdHJldHVybiBzdHIuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBnZXRQcm9maWxlSW1hZ2UgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRjb25zdCBwcm9maWxlSW1hZ2VVcmxSZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2dldC1wcm9maWxlLWltYWdlJywge1xyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0J0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0XHRBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBqd3RUb2tlblxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGlmIChwcm9maWxlSW1hZ2VVcmxSZXMuc3RhdHVzID09PSAyMDApIHtcclxuXHRcdFx0Y29uc3QgcHJvZmlsZUltYWdlVXJsSnNvbiA9IGF3YWl0IHByb2ZpbGVJbWFnZVVybFJlcy5qc29uKCk7XHJcblx0XHRcdHNldFByb2ZpbGVJbWFnZShwcm9maWxlSW1hZ2VVcmxKc29uWydtc2cnXSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZ2V0UHJvZmlsZVVzZXJuYW1lID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0Y29uc3QgcHJvZmlsZVVzZXJuYW1lUmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9nZXQtcHJvZmlsZS11c2VybmFtZScsIHtcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdCdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgand0VG9rZW5cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRpZiAocHJvZmlsZVVzZXJuYW1lUmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcblx0XHRcdGNvbnN0IHByb2ZpbGVVc2VybmFtZUpzb24gPSBhd2FpdCBwcm9maWxlVXNlcm5hbWVSZXMuanNvbigpO1xyXG5cdFx0XHRzZXRQcm9maWxlVXNlcm5hbWUocHJvZmlsZVVzZXJuYW1lSnNvblsnbXNnJ10pO1xyXG5cdFx0XHRzZXREaXNwbGF5TmFtZShjYXBpdGFsaXplKHByb2ZpbGVVc2VybmFtZUpzb25bJ21zZyddLnNwbGl0KCcgJylbMF0pKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCB1cGRhdGVQcm9maWxlSW1hZ2UgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRjb25zdCBwcm9maWxlRm9ybSA9IG5ldyBGb3JtRGF0YShwcm9maWxlSW1hZ2VGb3JtUmVmLmN1cnJlbnQpO1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC91cGxvYWQtcHJvZmlsZS1pbWFnZScsIHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBqd3RUb2tlblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRib2R5OiBwcm9maWxlRm9ybVxyXG5cdFx0fSk7XHJcblx0XHRpZiAocmVzLnN0YXR1cyAhPT0gMjAwKSB7XHJcblx0XHRcdGNvbnN0IGpzb25SZXMgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhqc29uUmVzKTtcclxuXHRcdH1cclxuXHRcdGdldFByb2ZpbGVJbWFnZSgpO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBjdXJyZW50RGF0ZUluZm8gPSBuZXcgRGF0ZSgpO1xyXG5cdFx0Y29uc3QgbW9udGggPSBtb250aHNbY3VycmVudERhdGVJbmZvLmdldE1vbnRoKCldO1xyXG5cdFx0Y29uc3QgZGF5ID0gY3VycmVudERhdGVJbmZvLmdldERhdGUoKTtcclxuXHRcdGNvbnN0IHllYXIgPSBjdXJyZW50RGF0ZUluZm8uZ2V0RnVsbFllYXIoKTtcclxuXHRcdHNldEN1cnJlbnREYXRlKG1vbnRoICsgJyAnICsgZGF5ICsgJywgJyArIHllYXIpO1xyXG5cdFx0Z2V0UHJvZmlsZUltYWdlKCk7XHJcblx0XHRnZXRQcm9maWxlVXNlcm5hbWUoKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVDb250YWluZXJ9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlU2VjdGlvbn0+XHJcblx0XHRcdFx0PGltZyBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlSW1hZ2V9IHNyYz17cHJvZmlsZUltYWdlfSBhbHQ9e3Byb2ZpbGVVc2VybmFtZS5zcGxpdCgnICcpWzBdfSAvPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0U2VjdGlvbn0+XHJcblx0XHRcdFx0XHQ8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17c3R5bGVzLmVkaXRJY29ufSBpY29uPXsndXNlci1lZGl0J30gLz5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PGZvcm0gZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiByZWY9e3Byb2ZpbGVJbWFnZUZvcm1SZWZ9PlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHR5cGU9XCJmaWxlXCJcclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3VwZGF0ZVByb2ZpbGVJbWFnZX1cclxuXHRcdFx0XHRcdFx0YWNjZXB0PXsnaW1hZ2UvKid9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVJbWFnZUlucHV0fVxyXG5cdFx0XHRcdFx0XHRuYW1lPVwiaW1hZ2VcIlxyXG5cdFx0XHRcdFx0XHR0aXRsZT1cIlwiXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxoMj5IZXkge2Rpc3BsYXlOYW1lfSE8L2gyPlxyXG5cdFx0XHQ8aDU+e2N1cnJlbnREYXRlfTwvaDU+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvc2Nzcy93b3JrZmxvdy1pdGVtLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuY29uc3QgV29ya2Zsb3dJdGVtID0gKHsgd29ya2Zsb3csIGlkIH0pID0+IHtcclxuXHRjb25zdCBtYXhUaXRsZUxlbmd0aEJlZm9yZUN1dG9mZiA9IDE1O1xyXG5cdGNvbnN0IG1heERlc2NyaXB0aW9uTGVuZ3RoQmVmb3JlQ3V0b2ZmID0gMzA7XHJcblxyXG5cdGNvbnN0IHByb2ZpbGVJbWFnZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvZmlsZUltYWdlKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuXHRcdFx0XHRbc3R5bGVzLndvcmtmbG93Q29udGFpbmVyXTogdHJ1ZSxcclxuXHRcdFx0XHRbc3R5bGVzLndvcmtmbG93RmluaXNoZWRdOiB3b3JrZmxvd1snZmluaXNoZWQnXSxcclxuXHRcdFx0XHRbc3R5bGVzLmltcG9ydGFudF06IHdvcmtmbG93WydzdGFycmVkJ10gJiYgIXdvcmtmbG93LmZpbmlzaGVkXHJcblx0XHRcdH0pfVxyXG5cdFx0PlxyXG5cdFx0XHQ8aDIgY2xhc3NOYW1lPXtzdHlsZXMud29ya2Zsb3dUaXRsZX0+XHJcblx0XHRcdFx0e3dvcmtmbG93LnRpdGxlLmxlbmd0aCA+IG1heFRpdGxlTGVuZ3RoQmVmb3JlQ3V0b2ZmID8gKFxyXG5cdFx0XHRcdFx0d29ya2Zsb3cudGl0bGUuc2xpY2UoMCwgbWF4VGl0bGVMZW5ndGhCZWZvcmVDdXRvZmYpICsgJy4uLidcclxuXHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0d29ya2Zsb3cudGl0bGVcclxuXHRcdFx0XHQpfVxyXG5cdFx0XHQ8L2gyPlxyXG5cdFx0XHQ8aDQ+XHJcblx0XHRcdFx0e3dvcmtmbG93LmRlc2NyaXB0aW9uLmxlbmd0aCA+IG1heERlc2NyaXB0aW9uTGVuZ3RoQmVmb3JlQ3V0b2ZmID8gKFxyXG5cdFx0XHRcdFx0d29ya2Zsb3cuZGVzY3JpcHRpb24uc2xpY2UoMCwgbWF4RGVzY3JpcHRpb25MZW5ndGhCZWZvcmVDdXRvZmYpICsgJy4uLidcclxuXHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0d29ya2Zsb3cuZGVzY3JpcHRpb25cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHQ8L2g0PlxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud29ya2Zsb3dVc2Vyc30+ey8qIDxpbWcgc3JjPXtwcm9maWxlSW1hZ2V9IC8+ICovfTwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud29ya2Zsb3dFeHRyYUluZm99PlxyXG5cdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT17c3R5bGVzLndvcmtmbG93Q3JlYXRlZH0+e3dvcmtmbG93LmNyZWF0ZWRfYXQuc2xpY2UoMCwgMTApfTwvaDM+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndvcmtmbG93U3RhdHVzSWNvbnN9PlxyXG5cdFx0XHRcdFx0XHQ8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7IFtzdHlsZXMuc3RhcnJlZF06IHdvcmtmbG93LnN0YXJyZWQgfSl9IGljb249XCJzdGFyXCIgLz5cclxuXHRcdFx0XHRcdFx0PEZvbnRBd2Vzb21lSWNvblxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7IFtzdHlsZXMuZmluaXNoZWRdOiB3b3JrZmxvdy5maW5pc2hlZCB9KX1cclxuXHRcdFx0XHRcdFx0XHRpY29uPVwiY2hlY2tcIlxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtmbG93SXRlbTtcclxuIiwiY29uc3Qgc2V0Snd0ID0gKGp3dCkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU0VUX0pXVCcsXHJcblx0XHRwYXlsb2FkOiBqd3RcclxuXHR9O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgc2V0Snd0IH07XHJcbiIsImNvbnN0IHNldFdvcmtmbG93SW5mbyA9ICh3b3JrZmxvd0luZm8pID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1NFVF9XT1JLRkxPV1MnLFxyXG5cdFx0cGF5bG9hZDoge1xyXG5cdFx0XHR3b3JrZmxvd0luZm9cclxuXHRcdH1cclxuXHR9O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgc2V0V29ya2Zsb3dJbmZvIH07XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3Njc3Mvd29ya2Zsb3dzLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc2V0Snd0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hY3Rpb25zL2p3dEFjdGlvbic7XHJcbmltcG9ydCB7IHNldFdvcmtmbG93SW5mbyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYWN0aW9ucy93b3JrZmxvd0luZm8nO1xyXG5pbXBvcnQgRGFzaGJvYXJkTWVudSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Rhc2hib2FyZE1lbnUnO1xyXG5pbXBvcnQgV29ya2Zsb3dJdGVtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvV29ya2Zsb3dJdGVtJztcclxuaW1wb3J0IENvb2tpZSBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xyXG5cdGNvbnN0IFsgd29ya2Zsb3dzLCBzZXRXb3JrZmxvd3MgXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IGp3dFRva2VuID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5qd3RUb2tlbik7XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cdGNvbnN0IFsgb3JpZ1dvcmtmbG93LCBzZXRPcmlnV29ya2Zsb3cgXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbIGN1ckZpbHRlciwgc2V0Q3VyRmlsdGVyIF0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0aWYgKGp3dFRva2VuID09PSAnJykge1xyXG5cdFx0Um91dGVyLnB1c2goJy8nKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHNldFdvcmtmbG93SWRzSW5Mb2NhbFN0b3JhZ2UgPSAod29ya2Zsb3dzSW5mbykgPT4ge1xyXG5cdFx0Y29uc3Qgd29ya2Zsb3dJZHMgPSB3b3JrZmxvd3NJbmZvLm1hcCgod29ya2Zsb3dJbmZvKSA9PiB3b3JrZmxvd0luZm8uaWQpO1xyXG5cdFx0aWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd29ya2Zsb3dJZHMnKSkge1xyXG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd29ya2Zsb3dJZHMnLCB3b3JrZmxvd0lkcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZ2V0TmV3Snd0VG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcblx0XHRjb25zdCByZWZyZXNoVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVmcmVzaC10b2tlbicpO1xyXG5cdFx0Y29uc3QgZGF0YSA9IHtcclxuXHRcdFx0cmVmcmVzaDogcmVmcmVzaFRva2VuXHJcblx0XHR9O1xyXG5cdFx0Y29uc3QgZGF0YVN0cmluZ2lmaWVkID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcblx0XHRjb25zdCBuZXdBY2Nlc3NUb2tlblJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3JlZnJlc2gnLCB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRib2R5OiBkYXRhU3RyaW5naWZpZWQsXHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0Y29uc3QgbmV3QWNjZXNzVG9rZW5Kc29uID0gYXdhaXQgbmV3QWNjZXNzVG9rZW5SZXMuanNvbigpO1xyXG5cdFx0aWYgKG5ld0FjY2Vzc1Rva2VuSnNvbi5kZXRhaWwgPT09ICdUb2tlbiBpcyBpbnZhbGlkIG9yIGV4cGlyZWQnKSB7XHJcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZWZyZXNoLXRva2VuJywgJycpO1xyXG5cdFx0XHRDb29raWUuc2V0KCdqd3QnLCBKU09OLnN0cmluZ2lmeSgnJykpO1xyXG5cdFx0XHRDb29raWUuc2V0KCdyZWZyZXNoLXRva2VuJywgSlNPTi5zdHJpbmdpZnkoJycpKTtcclxuXHRcdFx0ZGlzcGF0Y2goc2V0Snd0KCcnKSk7XHJcblx0XHRcdHJldHVybiBSb3V0ZXIucHVzaCgnLycpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgbmV3Snd0VG9rZW4gPSBuZXdBY2Nlc3NUb2tlbkpzb24uYWNjZXNzO1xyXG5cdFx0ZGlzcGF0Y2goc2V0Snd0KG5ld0p3dFRva2VuKSk7XHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnand0JywgbmV3Snd0VG9rZW4pO1xyXG5cdFx0Q29va2llLnNldCgnand0JywgSlNPTi5zdHJpbmdpZnkobmV3Snd0VG9rZW4pKTtcclxuXHRcdGNvbnN0IHdvcmtmbG93c1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9nZXQtd29ya2Zsb3dzJywge1xyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgbmV3Snd0VG9rZW5cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRjb25zdCB3b3JrZmxvd3NKc29uID0gYXdhaXQgd29ya2Zsb3dzUmVzcG9uc2UuanNvbigpO1xyXG5cdFx0c2V0V29ya2Zsb3dzKHdvcmtmbG93c0pzb25bJ3dvcmtmbG93cyddKTtcclxuXHRcdGRpc3BhdGNoKHNldFdvcmtmbG93SW5mbyh3b3JrZmxvd3NKc29uWyd3b3JrZmxvd3MnXSkpO1xyXG5cdFx0c2V0V29ya2Zsb3dJZHNJbkxvY2FsU3RvcmFnZSh3b3JrZmxvd3NKc29uWyd3b3JrZmxvd3MnXSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZ2V0V29ya2Zsb3dzID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0Y29uc3Qgand0QmVhcmVyU3RyaW5nID0gJ0JlYXJlciAnICsgand0VG9rZW47XHJcblx0XHRjb25zdCB3b3JrZmxvd3NSZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvZ2V0LXdvcmtmbG93cycsIHtcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdEF1dGhvcml6YXRpb246IGp3dEJlYXJlclN0cmluZ1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IHdvcmtmbG93c0pzb24gPSBhd2FpdCB3b3JrZmxvd3NSZXNwb25zZS5qc29uKCk7XHJcblxyXG5cdFx0aWYgKHdvcmtmbG93c0pzb24uY29kZSkge1xyXG5cdFx0XHRhd2FpdCBnZXROZXdKd3RUb2tlbigpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdCB0ZW1wV29ya2Zsb3dzID0gd29ya2Zsb3dzSnNvblsnd29ya2Zsb3dzJ107XHJcblx0XHRjb25zdCBvcmlnID0gdGVtcFdvcmtmbG93cy5zb3J0KCh3MSwgdzIpID0+IHtcclxuXHRcdFx0aWYgKHcxLmlkID4gdzIuaWQpIHJldHVybiAtMTtcclxuXHRcdFx0cmV0dXJuIDE7XHJcblx0XHR9KTtcclxuXHRcdHNldFdvcmtmbG93cyhbIC4uLm9yaWcgXSk7XHJcblx0XHRzZXRPcmlnV29ya2Zsb3coWyAuLi5vcmlnIF0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRnZXRXb3JrZmxvd3MoKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnN0IGNyZWF0ZVdvcmtmbG93ID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9jcmVhdGUtd29ya2Zsb3cnLCB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0XHRBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBqd3RUb2tlblxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IHJlc0pzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG5cdFx0Y29uc3QgbmV3V29ya2Zsb3dJbmZvID0gcmVzSnNvblsnd29ya2Zsb3cnXTtcclxuXHRcdFJvdXRlci5wdXNoKGAvLi4vd29ya2Zsb3cvJHtuZXdXb3JrZmxvd0luZm8uaWR9YCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZmlsdGVyQnlVbmZpbmlzaGVkID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgZmlsdGVyZWQgPSB3b3JrZmxvd3Muc29ydCgodzEsIHcyKSA9PiB7XHJcblx0XHRcdGlmICh3MS5maW5pc2hlZCAmJiB3Mi5maW5pc2hlZCkge1xyXG5cdFx0XHRcdGlmICh3MS5zdGFycmVkICYmIHcxLnN0YXJyZWQpIHtcclxuXHRcdFx0XHRcdGlmICh3MS5pZCA+IHcyLmlkKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiAtMTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodzEuc3RhcnJlZCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0fSBlbHNlIGlmICh3MS5maW5pc2hlZCkgcmV0dXJuIDE7XHJcblx0XHRcdHJldHVybiAtMTtcclxuXHRcdH0pO1xyXG5cdFx0c2V0V29ya2Zsb3dzKFsgLi4uZmlsdGVyZWQgXSk7XHJcblx0XHRzZXRDdXJGaWx0ZXIoJ2ZpbmlzaGVkJyk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZmlsdGVyQnlTdGFycmVkID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgZmlsdGVyZWQgPSB3b3JrZmxvd3Muc29ydCgodzEsIHcyKSA9PiB7XHJcblx0XHRcdGlmICh3MS5zdGFycmVkICYmIHcyLnN0YXJyZWQpIHtcclxuXHRcdFx0XHRpZiAodzEuZmluaXNoZWQgJiYgdzEuZmluaXNoZWQpIHtcclxuXHRcdFx0XHRcdGlmICh3MS5pZCA+IHcxLmlkKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiAtMTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodzEuZmluaXNoZWQpIHtcclxuXHRcdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gLTE7XHJcblx0XHRcdH0gZWxzZSBpZiAodzEuc3RhcnJlZCkgcmV0dXJuIC0xO1xyXG5cdFx0XHRyZXR1cm4gMTtcclxuXHRcdH0pO1xyXG5cdFx0Ly8gY29uc29sZS5sb2cod29ya2Zsb3dzKTtcclxuXHRcdHNldFdvcmtmbG93cyhbIC4uLmZpbHRlcmVkIF0pO1xyXG5cdFx0c2V0Q3VyRmlsdGVyKCdzdGFycmVkJyk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgcmVtb3ZlRmlsdGVyID0gKCkgPT4ge1xyXG5cdFx0c2V0V29ya2Zsb3dzKFsgLi4ub3JpZ1dvcmtmbG93IF0pO1xyXG5cdFx0c2V0Q3VyRmlsdGVyKCcnKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PG1haW4gY2xhc3NOYW1lPXtzdHlsZXMud29ya2Zsb3dzQ29udGFpbmVyfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXNoYm9hcmRNZW51Q29udGFpbmVyfT5cclxuXHRcdFx0XHQ8RGFzaGJvYXJkTWVudSAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy53b3JrZmxvd3NCb2R5fT5cclxuXHRcdFx0XHR7IXdvcmtmbG93cyA/IChcclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17c3R5bGVzLm5vV29ya2Zsb3dzfT5Zb3UgZG9uJ3QgaGF2ZSBhbnkgd29ya2Zsb3dzLiBMZXQncyBnZXQgb25lIHN0YXJ0ZWQhPC9wPlxyXG5cdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9e3N0eWxlcy5udW1Xb3JrZmxvd3N9PlxyXG5cdFx0XHRcdFx0XHRcdHt3b3JrZmxvd3MubGVuZ3RofSBXb3JrZmxvd3t3b3JrZmxvd3MubGVuZ3RoICE9IDEgPyAncycgOiAnJ31cclxuXHRcdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlcn0+XHJcblx0XHRcdFx0XHRcdFx0PGxpXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtmaWx0ZXJCeVN0YXJyZWR9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzbmFtZXMoeyBbc3R5bGVzLmFjdGl2ZV06IGN1ckZpbHRlciA9PT0gJ3N0YXJyZWQnIH0pfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFN0YXJyZWRcclxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ZmlsdGVyQnlVbmZpbmlzaGVkfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc25hbWVzKHsgW3N0eWxlcy5hY3RpdmVdOiBjdXJGaWx0ZXIgPT09ICdmaW5pc2hlZCcgfSl9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0VW5maW5pc2hlZFxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpIG9uQ2xpY2s9e3JlbW92ZUZpbHRlcn0gY2xhc3NOYW1lPXtzdHlsZXMuY2xlYXJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0Q2xlYXJcclxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndvcmtmbG93TGlzdH0+XHJcblx0XHRcdFx0XHRcdFx0e3dvcmtmbG93cy5tYXAoKHdvcmtmbG93KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtgLi4vd29ya2Zsb3cvJHt3b3JrZmxvdy5pZH1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFdvcmtmbG93SXRlbSB3b3JrZmxvdz17d29ya2Zsb3d9IGtleT17d29ya2Zsb3cuaWR9IGlkPXt3b3JrZmxvdy5pZH0gLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRXb3JrZmxvd0J0bn0gb25DbGljaz17KCkgPT4gY3JlYXRlV29ya2Zsb3coKX0+XHJcblx0XHRcdFx0XHRBZGQgV29ya2Zsb3dcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L21haW4+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWVudUl0ZW1MaW5rXCI6IFwiZGFzaGJvYXJkLW1lbnUtaXRlbV9tZW51SXRlbUxpbmtfXzFkYmEyXCIsXG5cdFwibWVudUl0ZW1Db250YWluZXJcIjogXCJkYXNoYm9hcmQtbWVudS1pdGVtX21lbnVJdGVtQ29udGFpbmVyX194RV9pclwiLFxuXHRcIm1lbnVJdGVtSW5mb1wiOiBcImRhc2hib2FyZC1tZW51LWl0ZW1fbWVudUl0ZW1JbmZvX18zSk9kS1wiLFxuXHRcImljb25Db250YWluZXJcIjogXCJkYXNoYm9hcmQtbWVudS1pdGVtX2ljb25Db250YWluZXJfXzJCZUVmXCIsXG5cdFwiaWNvbkNvbnRhaW5lckFjdGl2ZVwiOiBcImRhc2hib2FyZC1tZW51LWl0ZW1faWNvbkNvbnRhaW5lckFjdGl2ZV9fMXEzd1FcIixcblx0XCJtZW51VGl0bGVcIjogXCJkYXNoYm9hcmQtbWVudS1pdGVtX21lbnVUaXRsZV9fMUV2NENcIixcblx0XCJhY3RpdmVDaXJjbGVcIjogXCJkYXNoYm9hcmQtbWVudS1pdGVtX2FjdGl2ZUNpcmNsZV9fUjJpUFFcIixcblx0XCJhY3RpdmVcIjogXCJkYXNoYm9hcmQtbWVudS1pdGVtX2FjdGl2ZV9fMnpyM0tcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRvZ2dsZUljb25cIjogXCJkYXNoYm9hcmQtbWVudV90b2dnbGVJY29uX18zSHBtR1wiLFxuXHRcImRhc2hib2FyZE1lbnVDb250YWluZXJcIjogXCJkYXNoYm9hcmQtbWVudV9kYXNoYm9hcmRNZW51Q29udGFpbmVyX19zMmlWWFwiLFxuXHRcImRpdlByb2ZpbGVcIjogXCJkYXNoYm9hcmQtbWVudV9kaXZQcm9maWxlX18zaVQxYlwiLFxuXHRcImRhc2hib2FyZE1lbnVJdGVtc1wiOiBcImRhc2hib2FyZC1tZW51X2Rhc2hib2FyZE1lbnVJdGVtc19fM3dsczhcIixcblx0XCJsb2dvdXRcIjogXCJkYXNoYm9hcmQtbWVudV9sb2dvdXRfXzIyNjhUXCIsXG5cdFwiaGlkZU1lbnVJdGVtc1wiOiBcImRhc2hib2FyZC1tZW51X2hpZGVNZW51SXRlbXNfX2tINzJoXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwcm9maWxlQ29udGFpbmVyXCI6IFwicHJvZmlsZV9wcm9maWxlQ29udGFpbmVyX19US2YtUVwiLFxuXHRcImltYWdlU2VjdGlvblwiOiBcInByb2ZpbGVfaW1hZ2VTZWN0aW9uX18xeFQwYlwiLFxuXHRcInByb2ZpbGVJbWFnZVwiOiBcInByb2ZpbGVfcHJvZmlsZUltYWdlX18yVThBSlwiLFxuXHRcImlucHV0U2VjdGlvblwiOiBcInByb2ZpbGVfaW5wdXRTZWN0aW9uX195dVQ5U1wiLFxuXHRcImVkaXRJY29uXCI6IFwicHJvZmlsZV9lZGl0SWNvbl9fM2NuV21cIixcblx0XCJwcm9maWxlSW1hZ2VJbnB1dFwiOiBcInByb2ZpbGVfcHJvZmlsZUltYWdlSW5wdXRfXzM4SE03XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3b3JrZmxvd0ZpbmlzaGVkXCI6IFwid29ya2Zsb3ctaXRlbV93b3JrZmxvd0ZpbmlzaGVkX18yS2JEdlwiLFxuXHRcImltcG9ydGFudFwiOiBcIndvcmtmbG93LWl0ZW1faW1wb3J0YW50X18yLTlpV1wiLFxuXHRcIndvcmtmbG93Q29udGFpbmVyXCI6IFwid29ya2Zsb3ctaXRlbV93b3JrZmxvd0NvbnRhaW5lcl9fMnQzcllcIixcblx0XCJ3b3JrZmxvd1RpdGxlXCI6IFwid29ya2Zsb3ctaXRlbV93b3JrZmxvd1RpdGxlX18ySkNUZ1wiLFxuXHRcIndvcmtmbG93S2V5d29yZHNcIjogXCJ3b3JrZmxvdy1pdGVtX3dvcmtmbG93S2V5d29yZHNfXzJhODZhXCIsXG5cdFwid29ya2Zsb3dVc2Vyc1wiOiBcIndvcmtmbG93LWl0ZW1fd29ya2Zsb3dVc2Vyc19fM0FIRjdcIixcblx0XCJ3b3JrZmxvd0V4dHJhSW5mb1wiOiBcIndvcmtmbG93LWl0ZW1fd29ya2Zsb3dFeHRyYUluZm9fXzM4dnRWXCIsXG5cdFwid29ya2Zsb3dDcmVhdGVkXCI6IFwid29ya2Zsb3ctaXRlbV93b3JrZmxvd0NyZWF0ZWRfXzN3bndVXCIsXG5cdFwid29ya2Zsb3dTdGF0dXNJY29uc1wiOiBcIndvcmtmbG93LWl0ZW1fd29ya2Zsb3dTdGF0dXNJY29uc19fM05DVlVcIixcblx0XCJncmlwXCI6IFwid29ya2Zsb3ctaXRlbV9ncmlwX18zblpfMFwiLFxuXHRcInN0YXJyZWRcIjogXCJ3b3JrZmxvdy1pdGVtX3N0YXJyZWRfXzE0dlFtXCIsXG5cdFwiZmluaXNoZWRcIjogXCJ3b3JrZmxvdy1pdGVtX2ZpbmlzaGVkX18zZzJxRlwiLFxuXHRcImRyYWdnYWJsZVwiOiBcIndvcmtmbG93LWl0ZW1fZHJhZ2dhYmxlX19jb0ZIUVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid29ya2Zsb3dzQ29udGFpbmVyXCI6IFwid29ya2Zsb3dzX3dvcmtmbG93c0NvbnRhaW5lcl9fMnEtX0NcIixcblx0XCJkYXNoYm9hcmRNZW51Q29udGFpbmVyXCI6IFwid29ya2Zsb3dzX2Rhc2hib2FyZE1lbnVDb250YWluZXJfXzN5eE93XCIsXG5cdFwid29ya2Zsb3dzQm9keVwiOiBcIndvcmtmbG93c193b3JrZmxvd3NCb2R5X18xbWRnWlwiLFxuXHRcIm51bVdvcmtmbG93c1wiOiBcIndvcmtmbG93c19udW1Xb3JrZmxvd3NfX2N2eUxzXCIsXG5cdFwibm9Xb3JrZmxvd3NcIjogXCJ3b3JrZmxvd3Nfbm9Xb3JrZmxvd3NfXzFfNC1kXCIsXG5cdFwiZmlsdGVyXCI6IFwid29ya2Zsb3dzX2ZpbHRlcl9fUEU4cHdcIixcblx0XCJjbGVhclwiOiBcIndvcmtmbG93c19jbGVhcl9fM0Y3WnVcIixcblx0XCJhY3RpdmVcIjogXCJ3b3JrZmxvd3NfYWN0aXZlX18ydWhieVwiLFxuXHRcIndvcmtmbG93TGlzdFwiOiBcIndvcmtmbG93c193b3JrZmxvd0xpc3RfXzFvcWIxXCIsXG5cdFwiYWRkV29ya2Zsb3dCdG5cIjogXCJ3b3JrZmxvd3NfYWRkV29ya2Zsb3dCdG5fXzE2ZkVVXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==