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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
  }, __jsx("img", {
    src: profileImage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 6
    }
  })), __jsx("div", {
    className: _styles_scss_workflow_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.workflowExtraInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("h3", {
    className: _styles_scss_workflow_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.workflowCreated,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 6
    }
  }, workflow.created_at.slice(0, 10)), __jsx("div", {
    className: _styles_scss_workflow_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.workflowStatusIcons,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
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
      lineNumber: 41,
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
      lineNumber: 42,
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

/***/ 6:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmRNZW51LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvV29ya2Zsb3dJdGVtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWN0aW9ucy9qd3RBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hY3Rpb25zL3dvcmtmbG93SW5mby5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQvd29ya2Zsb3dzLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9zY3NzL2Rhc2hib2FyZC1tZW51LWl0ZW0ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3Njc3MvZGFzaGJvYXJkLW1lbnUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3Njc3MvcHJvZmlsZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvc2Nzcy93b3JrZmxvdy1pdGVtLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9zY3NzL3dvcmtmbG93cy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiXSwibmFtZXMiOlsiRGFzaGJvYXJkTWVudSIsInJvdXRlciIsInVzZVJvdXRlciIsImN1clJvdXRlIiwicm91dGUiLCJjdXJyZW50UGFnZSIsInNwbGl0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImhpZGVNZW51SXRlbXMiLCJzZXRIaWRlTWVudUl0ZW1zIiwidXNlU3RhdGUiLCJ0b2dnbGVNb2JpbGVNZW51IiwibG9nb3V0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInNldEp3dCIsIkNvb2tpZSIsInNldCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwdXNoIiwiY2xhc3NuYW1lcyIsInN0eWxlcyIsInRvZ2dsZUljb24iLCJkYXNoYm9hcmRNZW51Q29udGFpbmVyIiwiZGl2UHJvZmlsZSIsImRhc2hib2FyZE1lbnVJdGVtcyIsIkRhc2hib2FyZE1lbnVJdGVtIiwibWVudVRpdGxlIiwibWVudUxpbmtSZWZlcmVuY2UiLCJtZW51SXRlbUZvbnRBd2Vzb21lUmVmIiwibWVudUl0ZW1BY3RpdmUiLCJtZW51SXRlbUxpbmsiLCJtZW51SXRlbUNvbnRhaW5lciIsIm1lbnVJdGVtSW5mbyIsImljb25Db250YWluZXIiLCJpY29uQ29udGFpbmVyQWN0aXZlIiwiYWN0aXZlQ2lyY2xlIiwiYWN0aXZlIiwiUHJvZmlsZSIsIm1vbnRocyIsImN1cnJlbnREYXRlIiwic2V0Q3VycmVudERhdGUiLCJwcm9maWxlSW1hZ2VGb3JtUmVmIiwidXNlUmVmIiwiand0VG9rZW4iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicHJvZmlsZUltYWdlIiwic2V0UHJvZmlsZUltYWdlIiwicHJvZmlsZVVzZXJuYW1lIiwic2V0UHJvZmlsZVVzZXJuYW1lIiwiZGlzcGxheU5hbWUiLCJzZXREaXNwbGF5TmFtZSIsImNhcGl0YWxpemUiLCJzdHIiLCJzbGljZSIsInRvVXBwZXJDYXNlIiwiZ2V0UHJvZmlsZUltYWdlIiwicHJvZmlsZUltYWdlVXJsUmVzIiwiZmV0Y2giLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInN0YXR1cyIsInByb2ZpbGVJbWFnZVVybEpzb24iLCJqc29uIiwiZ2V0UHJvZmlsZVVzZXJuYW1lIiwicHJvZmlsZVVzZXJuYW1lUmVzIiwicHJvZmlsZVVzZXJuYW1lSnNvbiIsInVwZGF0ZVByb2ZpbGVJbWFnZSIsInByb2ZpbGVGb3JtIiwiRm9ybURhdGEiLCJjdXJyZW50IiwicmVzIiwibWV0aG9kIiwiYm9keSIsImpzb25SZXMiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiY3VycmVudERhdGVJbmZvIiwiRGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwicHJvZmlsZUNvbnRhaW5lciIsImltYWdlU2VjdGlvbiIsImlucHV0U2VjdGlvbiIsImVkaXRJY29uIiwicHJvZmlsZUltYWdlSW5wdXQiLCJXb3JrZmxvd0l0ZW0iLCJ3b3JrZmxvdyIsImlkIiwibWF4VGl0bGVMZW5ndGhCZWZvcmVDdXRvZmYiLCJtYXhEZXNjcmlwdGlvbkxlbmd0aEJlZm9yZUN1dG9mZiIsIndvcmtmbG93Q29udGFpbmVyIiwid29ya2Zsb3dGaW5pc2hlZCIsImltcG9ydGFudCIsImZpbmlzaGVkIiwid29ya2Zsb3dUaXRsZSIsInRpdGxlIiwibGVuZ3RoIiwiZGVzY3JpcHRpb24iLCJ3b3JrZmxvd1VzZXJzIiwid29ya2Zsb3dFeHRyYUluZm8iLCJ3b3JrZmxvd0NyZWF0ZWQiLCJjcmVhdGVkX2F0Iiwid29ya2Zsb3dTdGF0dXNJY29ucyIsInN0YXJyZWQiLCJqd3QiLCJ0eXBlIiwicGF5bG9hZCIsInNldFdvcmtmbG93SW5mbyIsIndvcmtmbG93SW5mbyIsIkRhc2hib2FyZCIsIndvcmtmbG93cyIsInNldFdvcmtmbG93cyIsIm9yaWdXb3JrZmxvdyIsInNldE9yaWdXb3JrZmxvdyIsImN1ckZpbHRlciIsInNldEN1ckZpbHRlciIsIlJvdXRlciIsInNldFdvcmtmbG93SWRzSW5Mb2NhbFN0b3JhZ2UiLCJ3b3JrZmxvd3NJbmZvIiwid29ya2Zsb3dJZHMiLCJtYXAiLCJnZXRJdGVtIiwiZ2V0TmV3Snd0VG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJkYXRhIiwicmVmcmVzaCIsImRhdGFTdHJpbmdpZmllZCIsIm5ld0FjY2Vzc1Rva2VuUmVzIiwibmV3QWNjZXNzVG9rZW5Kc29uIiwiZGV0YWlsIiwibmV3Snd0VG9rZW4iLCJhY2Nlc3MiLCJ3b3JrZmxvd3NSZXNwb25zZSIsIndvcmtmbG93c0pzb24iLCJnZXRXb3JrZmxvd3MiLCJqd3RCZWFyZXJTdHJpbmciLCJjb2RlIiwidGVtcFdvcmtmbG93cyIsIm9yaWciLCJzb3J0IiwidzEiLCJ3MiIsImNyZWF0ZVdvcmtmbG93IiwicmVzSnNvbiIsIm5ld1dvcmtmbG93SW5mbyIsImZpbHRlckJ5VW5maW5pc2hlZCIsImZpbHRlcmVkIiwiZmlsdGVyQnlTdGFycmVkIiwicmVtb3ZlRmlsdGVyIiwid29ya2Zsb3dzQ29udGFpbmVyIiwid29ya2Zsb3dzQm9keSIsIm5vV29ya2Zsb3dzIiwibnVtV29ya2Zsb3dzIiwiZmlsdGVyIiwiY2xlYXIiLCJ3b3JrZmxvd0xpc3QiLCJhZGRXb3JrZmxvd0J0biJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBC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RixFQWtDQztBQUFLLGFBQVMsRUFBRXpFLHlFQUFNLENBQUM4SSxjQUF2QjtBQUF1QyxXQUFPLEVBQUUsTUFBTWQsY0FBYyxFQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWxDRCxDQUpELENBREQ7QUE2Q0EsQ0F2TEQ7O0FBeUxlakMsd0VBQWYsRTs7Ozs7Ozs7Ozs7QUNuTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGRhc2hib2FyZFxcd29ya2Zsb3dzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvc2Nzcy9kYXNoYm9hcmQtbWVudS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gJy4vUHJvZmlsZSc7XHJcbmltcG9ydCBEYXNoYm9hcmRNZW51SXRlbSBmcm9tICcuL0Rhc2hib2FyZE1lbnVJdGVtJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgeyBzZXRKd3QgfSBmcm9tICcuLi9jb21wb25lbnRzL2FjdGlvbnMvand0QWN0aW9uJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBDb29raWUgZnJvbSAnanMtY29va2llJztcclxuXHJcbmNvbnN0IERhc2hib2FyZE1lbnUgPSAoKSA9PiB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3QgY3VyUm91dGUgPSByb3V0ZXIucm91dGU7XHJcblx0Y29uc3QgY3VycmVudFBhZ2UgPSBjdXJSb3V0ZS5zcGxpdCgnLycpWzJdO1xyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcblx0Y29uc3QgWyBoaWRlTWVudUl0ZW1zLCBzZXRIaWRlTWVudUl0ZW1zIF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcblx0Y29uc3QgdG9nZ2xlTW9iaWxlTWVudSA9ICgpID0+IHtcclxuXHRcdHNldEhpZGVNZW51SXRlbXMoIWhpZGVNZW51SXRlbXMpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZWZyZXNoLXRva2VuJywgJycpO1xyXG5cdFx0ZGlzcGF0Y2goc2V0Snd0KCcnKSk7XHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnand0JywgJycpO1xyXG5cdFx0Q29va2llLnNldCgnand0JywgSlNPTi5zdHJpbmdpZnkoJycpKTtcclxuXHRcdENvb2tpZS5zZXQoJ3JlZnJlc2gtdG9rZW4nLCBKU09OLnN0cmluZ2lmeSgnJykpO1xyXG5cdFx0cmV0dXJuIHJvdXRlci5wdXNoKCcvJyk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoeyBbc3R5bGVzLnRvZ2dsZUljb25dOiB0cnVlIH0pfSBvbkNsaWNrPXt0b2dnbGVNb2JpbGVNZW51fT5cclxuXHRcdFx0XHQ8ZGl2IC8+XHJcblx0XHRcdFx0PGRpdiAvPlxyXG5cdFx0XHRcdDxkaXYgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG5cdFx0XHRcdFx0W3N0eWxlcy5kYXNoYm9hcmRNZW51Q29udGFpbmVyXTogdHJ1ZSxcclxuXHRcdFx0XHRcdFtzdHlsZXMuaGlkZU1lbnVJdGVtc106ICFoaWRlTWVudUl0ZW1zXHJcblx0XHRcdFx0fSl9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpdlByb2ZpbGV9PlxyXG5cdFx0XHRcdFx0PFByb2ZpbGUgLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhc2hib2FyZE1lbnVJdGVtc30+XHJcblx0XHRcdFx0XHQ8RGFzaGJvYXJkTWVudUl0ZW1cclxuXHRcdFx0XHRcdFx0bWVudVRpdGxlPXsnV29ya2Zsb3dzJ31cclxuXHRcdFx0XHRcdFx0bWVudUl0ZW1Gb250QXdlc29tZVJlZj17J3NpdGVtYXAnfVxyXG5cdFx0XHRcdFx0XHRtZW51TGlua1JlZmVyZW5jZT17Jy9kYXNoYm9hcmQvd29ya2Zsb3dzJ31cclxuXHRcdFx0XHRcdFx0bWVudUl0ZW1BY3RpdmU9e2N1cnJlbnRQYWdlID09ICd3b3JrZmxvd3MnfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxEYXNoYm9hcmRNZW51SXRlbVxyXG5cdFx0XHRcdFx0XHRtZW51VGl0bGU9eydTaGFyZWQgd2l0aCBtZSd9XHJcblx0XHRcdFx0XHRcdG1lbnVJdGVtRm9udEF3ZXNvbWVSZWY9eydzaGFyZS1hbHQnfVxyXG5cdFx0XHRcdFx0XHRtZW51TGlua1JlZmVyZW5jZT17Jy9kYXNoYm9hcmQvc2hhcmVkLXdpdGgtbWUnfVxyXG5cdFx0XHRcdFx0XHRtZW51SXRlbUFjdGl2ZT17Y3VycmVudFBhZ2UgPT0gJ3NoYXJlZC13aXRoLW1lJ31cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8RGFzaGJvYXJkTWVudUl0ZW1cclxuXHRcdFx0XHRcdFx0bWVudVRpdGxlPXsnU3RhdGlzdGljcyd9XHJcblx0XHRcdFx0XHRcdG1lbnVJdGVtRm9udEF3ZXNvbWVSZWY9eydjaGFydC1waWUnfVxyXG5cdFx0XHRcdFx0XHRtZW51TGlua1JlZmVyZW5jZT17Jy9kYXNoYm9hcmQvc3RhdGlzdGljcyd9XHJcblx0XHRcdFx0XHRcdG1lbnVJdGVtQWN0aXZlPXtjdXJyZW50UGFnZSA9PSAnc3RhdGlzdGljcyd9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb3V0fSBvbkNsaWNrPXtsb2dvdXR9PlxyXG5cdFx0XHRcdFx0PEZvbnRBd2Vzb21lSWNvbiBpY29uPXsnc2lnbi1vdXQtYWx0J30gLz5cclxuXHRcdFx0XHRcdHsnICAgICd9TG9nb3V0XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkTWVudTtcclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvc2Nzcy9kYXNoYm9hcmQtbWVudS1pdGVtLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcblxyXG5jb25zdCBEYXNoYm9hcmRNZW51SXRlbSA9ICh7IG1lbnVUaXRsZSwgbWVudUxpbmtSZWZlcmVuY2UsIG1lbnVJdGVtRm9udEF3ZXNvbWVSZWYsIG1lbnVJdGVtQWN0aXZlIH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGEgaHJlZj17bWVudUxpbmtSZWZlcmVuY2V9IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVJdGVtTGlua30+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudUl0ZW1Db250YWluZXJ9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudUl0ZW1JbmZvfT5cclxuXHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuXHRcdFx0XHRcdFx0XHRbc3R5bGVzLmljb25Db250YWluZXJdOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFtzdHlsZXMuaWNvbkNvbnRhaW5lckFjdGl2ZV06IG1lbnVJdGVtQWN0aXZlXHJcblx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8Rm9udEF3ZXNvbWVJY29uIGljb249e21lbnVJdGVtRm9udEF3ZXNvbWVSZWZ9IC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9e3N0eWxlcy5tZW51VGl0bGV9PnttZW51VGl0bGV9PC9oMz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7IFtzdHlsZXMuYWN0aXZlQ2lyY2xlXTogdHJ1ZSwgW3N0eWxlcy5hY3RpdmVdOiBtZW51SXRlbUFjdGl2ZSB9KX0gLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2E+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZE1lbnVJdGVtO1xyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9zY3NzL3Byb2ZpbGUubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XHJcblx0Y29uc3QgbW9udGhzID0gW1xyXG5cdFx0J0phbnVhcnknLFxyXG5cdFx0J0ZlYnJ1YXJ5JyxcclxuXHRcdCdNYXJjaCcsXHJcblx0XHQnQXByaWwnLFxyXG5cdFx0J01heScsXHJcblx0XHQnSnVuZScsXHJcblx0XHQnSnVseScsXHJcblx0XHQnQXVndXN0JyxcclxuXHRcdCdTZXB0ZW1iZXInLFxyXG5cdFx0J09jdG9iZXInLFxyXG5cdFx0J05vdmVtYmVyJyxcclxuXHRcdCdEZWNlbWJlcidcclxuXHRdO1xyXG5cdGNvbnN0IFsgY3VycmVudERhdGUsIHNldEN1cnJlbnREYXRlIF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG5cdGNvbnN0IHByb2ZpbGVJbWFnZUZvcm1SZWYgPSB1c2VSZWYoKTtcclxuXHRjb25zdCBqd3RUb2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuand0VG9rZW4pO1xyXG5cclxuXHRjb25zdCBbIHByb2ZpbGVJbWFnZSwgc2V0UHJvZmlsZUltYWdlIF0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgWyBwcm9maWxlVXNlcm5hbWUsIHNldFByb2ZpbGVVc2VybmFtZSBdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFsgZGlzcGxheU5hbWUsIHNldERpc3BsYXlOYW1lIF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG5cdGNvbnN0IGNhcGl0YWxpemUgPSAoc3RyKSA9PiB7XHJcblx0XHRyZXR1cm4gc3RyLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZ2V0UHJvZmlsZUltYWdlID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0Y29uc3QgcHJvZmlsZUltYWdlVXJsUmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9nZXQtcHJvZmlsZS1pbWFnZScsIHtcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdCdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgand0VG9rZW5cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRpZiAocHJvZmlsZUltYWdlVXJsUmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcblx0XHRcdGNvbnN0IHByb2ZpbGVJbWFnZVVybEpzb24gPSBhd2FpdCBwcm9maWxlSW1hZ2VVcmxSZXMuanNvbigpO1xyXG5cdFx0XHRzZXRQcm9maWxlSW1hZ2UocHJvZmlsZUltYWdlVXJsSnNvblsnbXNnJ10pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGdldFByb2ZpbGVVc2VybmFtZSA9IGFzeW5jICgpID0+IHtcclxuXHRcdGNvbnN0IHByb2ZpbGVVc2VybmFtZVJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvZ2V0LXByb2ZpbGUtdXNlcm5hbWUnLCB7XHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHQnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIGp3dFRva2VuXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0aWYgKHByb2ZpbGVVc2VybmFtZVJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG5cdFx0XHRjb25zdCBwcm9maWxlVXNlcm5hbWVKc29uID0gYXdhaXQgcHJvZmlsZVVzZXJuYW1lUmVzLmpzb24oKTtcclxuXHRcdFx0c2V0UHJvZmlsZVVzZXJuYW1lKHByb2ZpbGVVc2VybmFtZUpzb25bJ21zZyddKTtcclxuXHRcdFx0c2V0RGlzcGxheU5hbWUoY2FwaXRhbGl6ZShwcm9maWxlVXNlcm5hbWVKc29uWydtc2cnXS5zcGxpdCgnICcpWzBdKSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgdXBkYXRlUHJvZmlsZUltYWdlID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0Y29uc3QgcHJvZmlsZUZvcm0gPSBuZXcgRm9ybURhdGEocHJvZmlsZUltYWdlRm9ybVJlZi5jdXJyZW50KTtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvdXBsb2FkLXByb2ZpbGUtaW1hZ2UnLCB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgand0VG9rZW5cclxuXHRcdFx0fSxcclxuXHRcdFx0Ym9keTogcHJvZmlsZUZvcm1cclxuXHRcdH0pO1xyXG5cdFx0aWYgKHJlcy5zdGF0dXMgIT09IDIwMCkge1xyXG5cdFx0XHRjb25zdCBqc29uUmVzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHRcdFx0Y29uc29sZS5sb2coanNvblJlcyk7XHJcblx0XHR9XHJcblx0XHRnZXRQcm9maWxlSW1hZ2UoKTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgY3VycmVudERhdGVJbmZvID0gbmV3IERhdGUoKTtcclxuXHRcdGNvbnN0IG1vbnRoID0gbW9udGhzW2N1cnJlbnREYXRlSW5mby5nZXRNb250aCgpXTtcclxuXHRcdGNvbnN0IGRheSA9IGN1cnJlbnREYXRlSW5mby5nZXREYXRlKCk7XHJcblx0XHRjb25zdCB5ZWFyID0gY3VycmVudERhdGVJbmZvLmdldEZ1bGxZZWFyKCk7XHJcblx0XHRzZXRDdXJyZW50RGF0ZShtb250aCArICcgJyArIGRheSArICcsICcgKyB5ZWFyKTtcclxuXHRcdGdldFByb2ZpbGVJbWFnZSgpO1xyXG5cdFx0Z2V0UHJvZmlsZVVzZXJuYW1lKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlQ29udGFpbmVyfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZVNlY3Rpb259PlxyXG5cdFx0XHRcdDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUltYWdlfSBzcmM9e3Byb2ZpbGVJbWFnZX0gYWx0PXtwcm9maWxlVXNlcm5hbWUuc3BsaXQoJyAnKVswXX0gLz5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dFNlY3Rpb259PlxyXG5cdFx0XHRcdFx0PEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0SWNvbn0gaWNvbj17J3VzZXItZWRpdCd9IC8+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxmb3JtIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgcmVmPXtwcm9maWxlSW1hZ2VGb3JtUmVmfT5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwiZmlsZVwiXHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt1cGRhdGVQcm9maWxlSW1hZ2V9XHJcblx0XHRcdFx0XHRcdGFjY2VwdD17J2ltYWdlLyonfVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlSW1hZ2VJbnB1dH1cclxuXHRcdFx0XHRcdFx0bmFtZT1cImltYWdlXCJcclxuXHRcdFx0XHRcdFx0dGl0bGU9XCJcIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8aDI+SGV5IHtkaXNwbGF5TmFtZX0hPC9oMj5cclxuXHRcdFx0PGg1PntjdXJyZW50RGF0ZX08L2g1PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3Njc3Mvd29ya2Zsb3ctaXRlbS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmNvbnN0IFdvcmtmbG93SXRlbSA9ICh7IHdvcmtmbG93LCBpZCB9KSA9PiB7XHJcblx0Y29uc3QgbWF4VGl0bGVMZW5ndGhCZWZvcmVDdXRvZmYgPSAxNTtcclxuXHRjb25zdCBtYXhEZXNjcmlwdGlvbkxlbmd0aEJlZm9yZUN1dG9mZiA9IDMwO1xyXG5cclxuXHRjb25zdCBwcm9maWxlSW1hZ2UgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnByb2ZpbGVJbWFnZSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcblx0XHRcdFx0W3N0eWxlcy53b3JrZmxvd0NvbnRhaW5lcl06IHRydWUsXHJcblx0XHRcdFx0W3N0eWxlcy53b3JrZmxvd0ZpbmlzaGVkXTogd29ya2Zsb3dbJ2ZpbmlzaGVkJ10sXHJcblx0XHRcdFx0W3N0eWxlcy5pbXBvcnRhbnRdOiB3b3JrZmxvd1snc3RhcnJlZCddICYmICF3b3JrZmxvdy5maW5pc2hlZFxyXG5cdFx0XHR9KX1cclxuXHRcdD5cclxuXHRcdFx0PGgyIGNsYXNzTmFtZT17c3R5bGVzLndvcmtmbG93VGl0bGV9PlxyXG5cdFx0XHRcdHt3b3JrZmxvdy50aXRsZS5sZW5ndGggPiBtYXhUaXRsZUxlbmd0aEJlZm9yZUN1dG9mZiA/IChcclxuXHRcdFx0XHRcdHdvcmtmbG93LnRpdGxlLnNsaWNlKDAsIG1heFRpdGxlTGVuZ3RoQmVmb3JlQ3V0b2ZmKSArICcuLi4nXHJcblx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdHdvcmtmbG93LnRpdGxlXHJcblx0XHRcdFx0KX1cclxuXHRcdFx0PC9oMj5cclxuXHRcdFx0PGg0PlxyXG5cdFx0XHRcdHt3b3JrZmxvdy5kZXNjcmlwdGlvbi5sZW5ndGggPiBtYXhEZXNjcmlwdGlvbkxlbmd0aEJlZm9yZUN1dG9mZiA/IChcclxuXHRcdFx0XHRcdHdvcmtmbG93LmRlc2NyaXB0aW9uLnNsaWNlKDAsIG1heERlc2NyaXB0aW9uTGVuZ3RoQmVmb3JlQ3V0b2ZmKSArICcuLi4nXHJcblx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdHdvcmtmbG93LmRlc2NyaXB0aW9uXHJcblx0XHRcdFx0KX1cclxuXHRcdFx0PC9oND5cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndvcmtmbG93VXNlcnN9PlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9e3Byb2ZpbGVJbWFnZX0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndvcmtmbG93RXh0cmFJbmZvfT5cclxuXHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9e3N0eWxlcy53b3JrZmxvd0NyZWF0ZWR9Pnt3b3JrZmxvdy5jcmVhdGVkX2F0LnNsaWNlKDAsIDEwKX08L2gzPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy53b3JrZmxvd1N0YXR1c0ljb25zfT5cclxuXHRcdFx0XHRcdFx0PEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoeyBbc3R5bGVzLnN0YXJyZWRdOiB3b3JrZmxvdy5zdGFycmVkIH0pfSBpY29uPVwic3RhclwiIC8+XHJcblx0XHRcdFx0XHRcdDxGb250QXdlc29tZUljb25cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzbmFtZXMoeyBbc3R5bGVzLmZpbmlzaGVkXTogd29ya2Zsb3cuZmluaXNoZWQgfSl9XHJcblx0XHRcdFx0XHRcdFx0aWNvbj1cImNoZWNrXCJcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JrZmxvd0l0ZW07XHJcbiIsImNvbnN0IHNldEp3dCA9IChqd3QpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1NFVF9KV1QnLFxyXG5cdFx0cGF5bG9hZDogand0XHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCB7IHNldEp3dCB9O1xyXG4iLCJjb25zdCBzZXRXb3JrZmxvd0luZm8gPSAod29ya2Zsb3dJbmZvKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdTRVRfV09SS0ZMT1dTJyxcclxuXHRcdHBheWxvYWQ6IHtcclxuXHRcdFx0d29ya2Zsb3dJbmZvXHJcblx0XHR9XHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCB7IHNldFdvcmtmbG93SW5mbyB9O1xyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9zY3NzL3dvcmtmbG93cy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHNldEp3dCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYWN0aW9ucy9qd3RBY3Rpb24nO1xyXG5pbXBvcnQgeyBzZXRXb3JrZmxvd0luZm8gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2FjdGlvbnMvd29ya2Zsb3dJbmZvJztcclxuaW1wb3J0IERhc2hib2FyZE1lbnUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EYXNoYm9hcmRNZW51JztcclxuaW1wb3J0IFdvcmtmbG93SXRlbSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1dvcmtmbG93SXRlbSc7XHJcbmltcG9ydCBDb29raWUgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcclxuXHRjb25zdCBbIHdvcmtmbG93cywgc2V0V29ya2Zsb3dzIF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHRjb25zdCBqd3RUb2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuand0VG9rZW4pO1xyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHRjb25zdCBbIG9yaWdXb3JrZmxvdywgc2V0T3JpZ1dvcmtmbG93IF0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgWyBjdXJGaWx0ZXIsIHNldEN1ckZpbHRlciBdID0gdXNlU3RhdGUoJycpO1xyXG5cdGlmIChqd3RUb2tlbiA9PT0gJycpIHtcclxuXHRcdFJvdXRlci5wdXNoKCcvJyk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBzZXRXb3JrZmxvd0lkc0luTG9jYWxTdG9yYWdlID0gKHdvcmtmbG93c0luZm8pID0+IHtcclxuXHRcdGNvbnN0IHdvcmtmbG93SWRzID0gd29ya2Zsb3dzSW5mby5tYXAoKHdvcmtmbG93SW5mbykgPT4gd29ya2Zsb3dJbmZvLmlkKTtcclxuXHRcdGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dvcmtmbG93SWRzJykpIHtcclxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3dvcmtmbG93SWRzJywgd29ya2Zsb3dJZHMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGdldE5ld0p3dFRva2VuID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0Y29uc3QgcmVmcmVzaFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZnJlc2gtdG9rZW4nKTtcclxuXHRcdGNvbnN0IGRhdGEgPSB7XHJcblx0XHRcdHJlZnJlc2g6IHJlZnJlc2hUb2tlblxyXG5cdFx0fTtcclxuXHRcdGNvbnN0IGRhdGFTdHJpbmdpZmllZCA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG5cdFx0Y29uc3QgbmV3QWNjZXNzVG9rZW5SZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9yZWZyZXNoJywge1xyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0Ym9keTogZGF0YVN0cmluZ2lmaWVkLFxyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IG5ld0FjY2Vzc1Rva2VuSnNvbiA9IGF3YWl0IG5ld0FjY2Vzc1Rva2VuUmVzLmpzb24oKTtcclxuXHRcdGlmIChuZXdBY2Nlc3NUb2tlbkpzb24uZGV0YWlsID09PSAnVG9rZW4gaXMgaW52YWxpZCBvciBleHBpcmVkJykge1xyXG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVmcmVzaC10b2tlbicsICcnKTtcclxuXHRcdFx0Q29va2llLnNldCgnand0JywgSlNPTi5zdHJpbmdpZnkoJycpKTtcclxuXHRcdFx0Q29va2llLnNldCgncmVmcmVzaC10b2tlbicsIEpTT04uc3RyaW5naWZ5KCcnKSk7XHJcblx0XHRcdGRpc3BhdGNoKHNldEp3dCgnJykpO1xyXG5cdFx0XHRyZXR1cm4gUm91dGVyLnB1c2goJy8nKTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IG5ld0p3dFRva2VuID0gbmV3QWNjZXNzVG9rZW5Kc29uLmFjY2VzcztcclxuXHRcdGRpc3BhdGNoKHNldEp3dChuZXdKd3RUb2tlbikpO1xyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2p3dCcsIG5ld0p3dFRva2VuKTtcclxuXHRcdENvb2tpZS5zZXQoJ2p3dCcsIEpTT04uc3RyaW5naWZ5KG5ld0p3dFRva2VuKSk7XHJcblx0XHRjb25zdCB3b3JrZmxvd3NSZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvZ2V0LXdvcmtmbG93cycsIHtcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIG5ld0p3dFRva2VuXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0Y29uc3Qgd29ya2Zsb3dzSnNvbiA9IGF3YWl0IHdvcmtmbG93c1Jlc3BvbnNlLmpzb24oKTtcclxuXHRcdHNldFdvcmtmbG93cyh3b3JrZmxvd3NKc29uWyd3b3JrZmxvd3MnXSk7XHJcblx0XHRkaXNwYXRjaChzZXRXb3JrZmxvd0luZm8od29ya2Zsb3dzSnNvblsnd29ya2Zsb3dzJ10pKTtcclxuXHRcdHNldFdvcmtmbG93SWRzSW5Mb2NhbFN0b3JhZ2Uod29ya2Zsb3dzSnNvblsnd29ya2Zsb3dzJ10pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGdldFdvcmtmbG93cyA9IGFzeW5jICgpID0+IHtcclxuXHRcdGNvbnN0IGp3dEJlYXJlclN0cmluZyA9ICdCZWFyZXIgJyArIGp3dFRva2VuO1xyXG5cdFx0Y29uc3Qgd29ya2Zsb3dzUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2dldC13b3JrZmxvd3MnLCB7XHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRBdXRob3JpemF0aW9uOiBqd3RCZWFyZXJTdHJpbmdcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRjb25zdCB3b3JrZmxvd3NKc29uID0gYXdhaXQgd29ya2Zsb3dzUmVzcG9uc2UuanNvbigpO1xyXG5cclxuXHRcdGlmICh3b3JrZmxvd3NKc29uLmNvZGUpIHtcclxuXHRcdFx0YXdhaXQgZ2V0TmV3Snd0VG9rZW4oKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgdGVtcFdvcmtmbG93cyA9IHdvcmtmbG93c0pzb25bJ3dvcmtmbG93cyddO1xyXG5cdFx0Y29uc3Qgb3JpZyA9IHRlbXBXb3JrZmxvd3Muc29ydCgodzEsIHcyKSA9PiB7XHJcblx0XHRcdGlmICh3MS5pZCA+IHcyLmlkKSByZXR1cm4gLTE7XHJcblx0XHRcdHJldHVybiAxO1xyXG5cdFx0fSk7XHJcblx0XHRzZXRXb3JrZmxvd3MoWyAuLi5vcmlnIF0pO1xyXG5cdFx0c2V0T3JpZ1dvcmtmbG93KFsgLi4ub3JpZyBdKTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Z2V0V29ya2Zsb3dzKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCBjcmVhdGVXb3JrZmxvdyA9IGFzeW5jICgpID0+IHtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvY3JlYXRlLXdvcmtmbG93Jywge1xyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgand0VG9rZW5cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRjb25zdCByZXNKc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHRcdGNvbnN0IG5ld1dvcmtmbG93SW5mbyA9IHJlc0pzb25bJ3dvcmtmbG93J107XHJcblx0XHRSb3V0ZXIucHVzaChgLy4uL3dvcmtmbG93LyR7bmV3V29ya2Zsb3dJbmZvLmlkfWApO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGZpbHRlckJ5VW5maW5pc2hlZCA9ICgpID0+IHtcclxuXHRcdGNvbnN0IGZpbHRlcmVkID0gd29ya2Zsb3dzLnNvcnQoKHcxLCB3MikgPT4ge1xyXG5cdFx0XHRpZiAodzEuZmluaXNoZWQgJiYgdzIuZmluaXNoZWQpIHtcclxuXHRcdFx0XHRpZiAodzEuc3RhcnJlZCAmJiB3MS5zdGFycmVkKSB7XHJcblx0XHRcdFx0XHRpZiAodzEuaWQgPiB3Mi5pZCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gLTE7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHcxLnN0YXJyZWQpIHtcclxuXHRcdFx0XHRcdHJldHVybiAtMTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdH0gZWxzZSBpZiAodzEuZmluaXNoZWQpIHJldHVybiAxO1xyXG5cdFx0XHRyZXR1cm4gLTE7XHJcblx0XHR9KTtcclxuXHRcdHNldFdvcmtmbG93cyhbIC4uLmZpbHRlcmVkIF0pO1xyXG5cdFx0c2V0Q3VyRmlsdGVyKCdmaW5pc2hlZCcpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGZpbHRlckJ5U3RhcnJlZCA9ICgpID0+IHtcclxuXHRcdGNvbnN0IGZpbHRlcmVkID0gd29ya2Zsb3dzLnNvcnQoKHcxLCB3MikgPT4ge1xyXG5cdFx0XHRpZiAodzEuc3RhcnJlZCAmJiB3Mi5zdGFycmVkKSB7XHJcblx0XHRcdFx0aWYgKHcxLmZpbmlzaGVkICYmIHcxLmZpbmlzaGVkKSB7XHJcblx0XHRcdFx0XHRpZiAodzEuaWQgPiB3MS5pZCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gLTE7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHcxLmZpbmlzaGVkKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHcxLnN0YXJyZWQpIHJldHVybiAtMTtcclxuXHRcdFx0cmV0dXJuIDE7XHJcblx0XHR9KTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHdvcmtmbG93cyk7XHJcblx0XHRzZXRXb3JrZmxvd3MoWyAuLi5maWx0ZXJlZCBdKTtcclxuXHRcdHNldEN1ckZpbHRlcignc3RhcnJlZCcpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHJlbW92ZUZpbHRlciA9ICgpID0+IHtcclxuXHRcdHNldFdvcmtmbG93cyhbIC4uLm9yaWdXb3JrZmxvdyBdKTtcclxuXHRcdHNldEN1ckZpbHRlcignJyk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLndvcmtmbG93c0NvbnRhaW5lcn0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGFzaGJvYXJkTWVudUNvbnRhaW5lcn0+XHJcblx0XHRcdFx0PERhc2hib2FyZE1lbnUgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud29ya2Zsb3dzQm9keX0+XHJcblx0XHRcdFx0eyF3b3JrZmxvd3MgPyAoXHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e3N0eWxlcy5ub1dvcmtmbG93c30+WW91IGRvbid0IGhhdmUgYW55IHdvcmtmbG93cy4gTGV0J3MgZ2V0IG9uZSBzdGFydGVkITwvcD5cclxuXHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPXtzdHlsZXMubnVtV29ya2Zsb3dzfT5cclxuXHRcdFx0XHRcdFx0XHR7d29ya2Zsb3dzLmxlbmd0aH0gV29ya2Zsb3d7d29ya2Zsb3dzLmxlbmd0aCAhPSAxID8gJ3MnIDogJyd9XHJcblx0XHRcdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJ9PlxyXG5cdFx0XHRcdFx0XHRcdDxsaVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ZmlsdGVyQnlTdGFycmVkfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc25hbWVzKHsgW3N0eWxlcy5hY3RpdmVdOiBjdXJGaWx0ZXIgPT09ICdzdGFycmVkJyB9KX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRTdGFycmVkXHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGlcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2ZpbHRlckJ5VW5maW5pc2hlZH1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7IFtzdHlsZXMuYWN0aXZlXTogY3VyRmlsdGVyID09PSAnZmluaXNoZWQnIH0pfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFVuZmluaXNoZWRcclxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaSBvbkNsaWNrPXtyZW1vdmVGaWx0ZXJ9IGNsYXNzTmFtZT17c3R5bGVzLmNsZWFyfT5cclxuXHRcdFx0XHRcdFx0XHRcdENsZWFyXHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy53b3JrZmxvd0xpc3R9PlxyXG5cdFx0XHRcdFx0XHRcdHt3b3JrZmxvd3MubWFwKCh3b3JrZmxvdykgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17YC4uL3dvcmtmbG93LyR7d29ya2Zsb3cuaWR9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxXb3JrZmxvd0l0ZW0gd29ya2Zsb3c9e3dvcmtmbG93fSBrZXk9e3dvcmtmbG93LmlkfSBpZD17d29ya2Zsb3cuaWR9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkV29ya2Zsb3dCdG59IG9uQ2xpY2s9eygpID0+IGNyZWF0ZVdvcmtmbG93KCl9PlxyXG5cdFx0XHRcdFx0QWRkIFdvcmtmbG93XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9tYWluPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1lbnVJdGVtTGlua1wiOiBcImRhc2hib2FyZC1tZW51LWl0ZW1fbWVudUl0ZW1MaW5rX18xZGJhMlwiLFxuXHRcIm1lbnVJdGVtQ29udGFpbmVyXCI6IFwiZGFzaGJvYXJkLW1lbnUtaXRlbV9tZW51SXRlbUNvbnRhaW5lcl9feEVfaXJcIixcblx0XCJtZW51SXRlbUluZm9cIjogXCJkYXNoYm9hcmQtbWVudS1pdGVtX21lbnVJdGVtSW5mb19fM0pPZEtcIixcblx0XCJpY29uQ29udGFpbmVyXCI6IFwiZGFzaGJvYXJkLW1lbnUtaXRlbV9pY29uQ29udGFpbmVyX18yQmVFZlwiLFxuXHRcImljb25Db250YWluZXJBY3RpdmVcIjogXCJkYXNoYm9hcmQtbWVudS1pdGVtX2ljb25Db250YWluZXJBY3RpdmVfXzFxM3dRXCIsXG5cdFwibWVudVRpdGxlXCI6IFwiZGFzaGJvYXJkLW1lbnUtaXRlbV9tZW51VGl0bGVfXzFFdjRDXCIsXG5cdFwiYWN0aXZlQ2lyY2xlXCI6IFwiZGFzaGJvYXJkLW1lbnUtaXRlbV9hY3RpdmVDaXJjbGVfX1IyaVBRXCIsXG5cdFwiYWN0aXZlXCI6IFwiZGFzaGJvYXJkLW1lbnUtaXRlbV9hY3RpdmVfXzJ6cjNLXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0b2dnbGVJY29uXCI6IFwiZGFzaGJvYXJkLW1lbnVfdG9nZ2xlSWNvbl9fM0hwbUdcIixcblx0XCJkYXNoYm9hcmRNZW51Q29udGFpbmVyXCI6IFwiZGFzaGJvYXJkLW1lbnVfZGFzaGJvYXJkTWVudUNvbnRhaW5lcl9fczJpVlhcIixcblx0XCJkaXZQcm9maWxlXCI6IFwiZGFzaGJvYXJkLW1lbnVfZGl2UHJvZmlsZV9fM2lUMWJcIixcblx0XCJkYXNoYm9hcmRNZW51SXRlbXNcIjogXCJkYXNoYm9hcmQtbWVudV9kYXNoYm9hcmRNZW51SXRlbXNfXzN3bHM4XCIsXG5cdFwibG9nb3V0XCI6IFwiZGFzaGJvYXJkLW1lbnVfbG9nb3V0X18yMjY4VFwiLFxuXHRcImhpZGVNZW51SXRlbXNcIjogXCJkYXNoYm9hcmQtbWVudV9oaWRlTWVudUl0ZW1zX19rSDcyaFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicHJvZmlsZUNvbnRhaW5lclwiOiBcInByb2ZpbGVfcHJvZmlsZUNvbnRhaW5lcl9fVEtmLVFcIixcblx0XCJpbWFnZVNlY3Rpb25cIjogXCJwcm9maWxlX2ltYWdlU2VjdGlvbl9fMXhUMGJcIixcblx0XCJwcm9maWxlSW1hZ2VcIjogXCJwcm9maWxlX3Byb2ZpbGVJbWFnZV9fMlU4QUpcIixcblx0XCJpbnB1dFNlY3Rpb25cIjogXCJwcm9maWxlX2lucHV0U2VjdGlvbl9feXVUOVNcIixcblx0XCJlZGl0SWNvblwiOiBcInByb2ZpbGVfZWRpdEljb25fXzNjbldtXCIsXG5cdFwicHJvZmlsZUltYWdlSW5wdXRcIjogXCJwcm9maWxlX3Byb2ZpbGVJbWFnZUlucHV0X18zOEhNN1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid29ya2Zsb3dGaW5pc2hlZFwiOiBcIndvcmtmbG93LWl0ZW1fd29ya2Zsb3dGaW5pc2hlZF9fMktiRHZcIixcblx0XCJpbXBvcnRhbnRcIjogXCJ3b3JrZmxvdy1pdGVtX2ltcG9ydGFudF9fMi05aVdcIixcblx0XCJ3b3JrZmxvd0NvbnRhaW5lclwiOiBcIndvcmtmbG93LWl0ZW1fd29ya2Zsb3dDb250YWluZXJfXzJ0M3JZXCIsXG5cdFwid29ya2Zsb3dUaXRsZVwiOiBcIndvcmtmbG93LWl0ZW1fd29ya2Zsb3dUaXRsZV9fMkpDVGdcIixcblx0XCJ3b3JrZmxvd0tleXdvcmRzXCI6IFwid29ya2Zsb3ctaXRlbV93b3JrZmxvd0tleXdvcmRzX18yYTg2YVwiLFxuXHRcIndvcmtmbG93VXNlcnNcIjogXCJ3b3JrZmxvdy1pdGVtX3dvcmtmbG93VXNlcnNfXzNBSEY3XCIsXG5cdFwid29ya2Zsb3dFeHRyYUluZm9cIjogXCJ3b3JrZmxvdy1pdGVtX3dvcmtmbG93RXh0cmFJbmZvX18zOHZ0VlwiLFxuXHRcIndvcmtmbG93Q3JlYXRlZFwiOiBcIndvcmtmbG93LWl0ZW1fd29ya2Zsb3dDcmVhdGVkX18zd253VVwiLFxuXHRcIndvcmtmbG93U3RhdHVzSWNvbnNcIjogXCJ3b3JrZmxvdy1pdGVtX3dvcmtmbG93U3RhdHVzSWNvbnNfXzNOQ1ZVXCIsXG5cdFwiZ3JpcFwiOiBcIndvcmtmbG93LWl0ZW1fZ3JpcF9fM25aXzBcIixcblx0XCJzdGFycmVkXCI6IFwid29ya2Zsb3ctaXRlbV9zdGFycmVkX18xNHZRbVwiLFxuXHRcImZpbmlzaGVkXCI6IFwid29ya2Zsb3ctaXRlbV9maW5pc2hlZF9fM2cycUZcIixcblx0XCJkcmFnZ2FibGVcIjogXCJ3b3JrZmxvdy1pdGVtX2RyYWdnYWJsZV9fY29GSFFcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndvcmtmbG93c0NvbnRhaW5lclwiOiBcIndvcmtmbG93c193b3JrZmxvd3NDb250YWluZXJfXzJxLV9DXCIsXG5cdFwiZGFzaGJvYXJkTWVudUNvbnRhaW5lclwiOiBcIndvcmtmbG93c19kYXNoYm9hcmRNZW51Q29udGFpbmVyX18zeXhPd1wiLFxuXHRcIndvcmtmbG93c0JvZHlcIjogXCJ3b3JrZmxvd3Nfd29ya2Zsb3dzQm9keV9fMW1kZ1pcIixcblx0XCJudW1Xb3JrZmxvd3NcIjogXCJ3b3JrZmxvd3NfbnVtV29ya2Zsb3dzX19jdnlMc1wiLFxuXHRcIm5vV29ya2Zsb3dzXCI6IFwid29ya2Zsb3dzX25vV29ya2Zsb3dzX18xXzQtZFwiLFxuXHRcImZpbHRlclwiOiBcIndvcmtmbG93c19maWx0ZXJfX1BFOHB3XCIsXG5cdFwiY2xlYXJcIjogXCJ3b3JrZmxvd3NfY2xlYXJfXzNGN1p1XCIsXG5cdFwiYWN0aXZlXCI6IFwid29ya2Zsb3dzX2FjdGl2ZV9fMnVoYnlcIixcblx0XCJ3b3JrZmxvd0xpc3RcIjogXCJ3b3JrZmxvd3Nfd29ya2Zsb3dMaXN0X18xb3FiMVwiLFxuXHRcImFkZFdvcmtmbG93QnRuXCI6IFwid29ya2Zsb3dzX2FkZFdvcmtmbG93QnRuX18xNmZFVVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=