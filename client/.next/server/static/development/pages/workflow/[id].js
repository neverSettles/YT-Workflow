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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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

/***/ "./components/Share.js":
/*!*****************************!*\
  !*** ./components/Share.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss_share_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/scss/share.module.scss */ "./styles/scss/share.module.scss");
/* harmony import */ var _styles_scss_share_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_share_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hapi/joi */ "@hapi/joi");
/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_hapi_joi__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Sarthak\\YT_Workflow_Cloud\\client\\components\\Share.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Share = ({
  id
}) => {
  const jwtToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.jwtToken);
  const {
    0: modalVisible,
    1: setModalVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: hideContent,
    1: setHideContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: inputActive,
    1: setInputActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: inputText,
    1: setInputText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: profileImagesInfo,
    1: setProfileImagesInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const schema = _hapi_joi__WEBPACK_IMPORTED_MODULE_5___default.a.object({
    email: _hapi_joi__WEBPACK_IMPORTED_MODULE_5___default.a.string().email({
      minDomainSegments: 2,
      tlds: {
        allow: ['com', 'net']
      }
    })
  });

  const getProfileImages = async () => {
    const imageUrlsRes = await fetch(`http://localhost:8000/get-workflow-profile-images/${id}`, {
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + jwtToken
      }
    });
    const imageUrlsJson = await imageUrlsRes.json();
    setProfileImagesInfo(Object.entries(imageUrlsJson['urls']));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setModalVisible(false);
    setHideContent(true);
    setInputActive(false);
    getProfileImages();
  }, []);

  const capitalize = str => {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  };

  const shareWorkflow = async () => {
    const validation = schema.validate({
      email: inputText
    });

    if (validation.error) {
      setError('**' + capitalize(validation.error.toString().replace('ValidationError: ', '').replace(`"`, ``).replace(`"`, '')));
      return;
    }

    const shareRes = await fetch(`http://localhost:8000/share-workflow/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + jwtToken
      },
      body: JSON.stringify({
        email: inputText
      })
    });
    const shareJson = await shareRes.json();

    if (shareJson.msg == 'Account matching query does not exist.') {
      setError('**User does not exist.');
      return;
    }

    setInputText('');
    setError('');
    await getProfileImages();
  };

  const toggleModal = () => {
    if (!modalVisible) {
      setTimeout(() => {
        setHideContent(false);
      }, 250);
    } else {
      setHideContent(true);
      setInputText('');
      setError('');
    }

    setModalVisible(!modalVisible);
  };

  const toggleInputActive = () => {
    setInputActive(!inputActive);
  };

  const updateInputText = e => {
    setInputText(e.target.value);
  };

  const unshareWorkflow = async email => {
    const unshareRes = await fetch(`http://localhost:8000/unshare-workflow/${id}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + jwtToken
      },
      body: JSON.stringify({
        email
      })
    });
    const unshareJson = await unshareRes.json();

    if (unshareJson['msg'] === 'The user and the user being unshared are the same. They must be different.') {
      setError('**You cannot unshare yourself.');
      return;
    }

    setError('');
    await getProfileImages();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      [_styles_scss_share_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.shareModalNotVisible]: true,
      [_styles_scss_share_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.shareModalVisible]: modalVisible,
      [_styles_scss_share_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.contentsHidden]: hideContent
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 4
    }
  }, __jsx("p", {
    className: _styles_scss_share_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 5
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: "user-plus",
    className: _styles_scss_share_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.addUserIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 6
    }
  }), __jsx("span", {
    className: _styles_scss_share_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.heading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 6
    }
  }, "Share with Other People")), __jsx("div", {
    className: _styles_scss_share_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inputSection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 5
    }
  }, __jsx("input", {
    onClick: toggleInputActive,
    onBlur: toggleInputActive,
    type: "email",
    className: _styles_scss_share_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.emailInput,
    onChange: updateInputText,
    value: inputText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 6
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      [_styles_scss_share_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inputBorderBottom]: true,
      [_styles_scss_share_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inputBorderBottomActive]: inputActive
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 6
    }
  }), __jsx("p", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      [_styles_scss_share_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.hoverLabel]: inputText !== ''
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 6
    }
  }, "Add People")), __jsx("p", {
    className: _styles_scss_share_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.usersHeading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 5
    }
  }, "Current Users"), __jsx("ul", {
    className: _styles_scss_share_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.workflowUsersList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 5
    }
  }, profileImagesInfo.map((profileImageInfo, index) => __jsx("li", {
    key: profileImageInfo[0],
    className: _styles_scss_share_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.workflowUsers,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: profileImageInfo[1],
    className: _styles_scss_share_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.workflowUserProfileImage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 8
    }
  }), __jsx("p", {
    className: _styles_scss_share_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.workflowUserEmail,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 8
    }
  }, profileImageInfo[0]), index !== 0 ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    className: _styles_scss_share_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.unshareBtn,
    icon: 'times',
    onClick: () => unshareWorkflow(profileImageInfo[0]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }) : __jsx("span", {
    className: _styles_scss_share_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.owner,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }
  }, "(Owner)")))), __jsx("div", {
    className: _styles_scss_share_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 6
    }
  }, error), __jsx("div", {
    className: _styles_scss_share_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.shareBtn,
    onClick: shareWorkflow,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 6
    }
  }, "Done"))), __jsx("div", {
    className: _styles_scss_share_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.shareBtn,
    onClick: () => toggleModal(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 4
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: "users",
    className: _styles_scss_share_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.shareIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 5
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 5
    }
  }, "Share")), __jsx("div", {
    onClick: toggleModal,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      [_styles_scss_share_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.backdropNotVisible]: true,
      [_styles_scss_share_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.backdropVisible]: modalVisible
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 4
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Share);

/***/ }),

/***/ "./components/WorkflowDeleteBtn.js":
/*!*****************************************!*\
  !*** ./components/WorkflowDeleteBtn.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss_workflow_delete_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/scss/workflow-delete.module.scss */ "./styles/scss/workflow-delete.module.scss");
/* harmony import */ var _styles_scss_workflow_delete_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_workflow_delete_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Sarthak\\YT_Workflow_Cloud\\client\\components\\WorkflowDeleteBtn.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const WorkflowDeleteBtn = ({
  id
}) => {
  const jwtToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.jwtToken);

  const deleteWorkflow = async () => {
    await fetch(`http://localhost:8000/delete-workflow/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + jwtToken
      }
    });
    return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/../dashboard/workflows');
  };

  return __jsx("div", {
    className: _styles_scss_workflow_delete_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.workflowDeleteBtn,
    onClick: () => {
      deleteWorkflow();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 3
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: "trash",
    className: _styles_scss_workflow_delete_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.trashIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }
  }), __jsx("span", {
    className: _styles_scss_workflow_delete_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.deleteText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }
  }, "Delete Workflow"));
};

/* harmony default export */ __webpack_exports__["default"] = (WorkflowDeleteBtn);

/***/ }),

/***/ "./components/WorkflowDescription.js":
/*!*******************************************!*\
  !*** ./components/WorkflowDescription.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss_workflow_description_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/scss/workflow-description.module.scss */ "./styles/scss/workflow-description.module.scss");
/* harmony import */ var _styles_scss_workflow_description_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_workflow_description_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Sarthak\\YT_Workflow_Cloud\\client\\components\\WorkflowDescription.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const WorkflowDescription = ({
  oldDescription,
  id
}) => {
  const {
    0: sameSessionOldDescription,
    1: setSameSessionOldDescription
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: descriptionChanged,
    1: setDescriptionChanged
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const jwtToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.jwtToken);
  const descTextArea = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const updateDescToBackend = async () => {
    const newDescJson = JSON.stringify({
      description: descTextArea.current.value
    });
    await fetch(`http://127.0.0.1:8000/set-workflow-description/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + jwtToken
      },
      body: newDescJson
    });
    setDescriptionChanged(false);
    setSameSessionOldDescription(descTextArea.current.value);
  };

  const updateDesc = () => {
    if (!sameSessionOldDescription) {
      setDescriptionChanged(descTextArea.current.value !== oldDescription);
    } else {
      setDescriptionChanged(descTextArea.current.value !== sameSessionOldDescription);
    }
  };

  return __jsx("div", {
    className: _styles_scss_workflow_description_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.descriptionContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 3
    }
  }, __jsx("h2", {
    className: _styles_scss_workflow_description_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.descriptionTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }
  }, "Description"), __jsx("textarea", {
    ref: descTextArea,
    name: "description",
    className: _styles_scss_workflow_description_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.description,
    defaultValue: oldDescription,
    onChange: () => updateDesc(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 4
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: 'arrow-right',
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      [_styles_scss_workflow_description_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.updateIcon]: true,
      [_styles_scss_workflow_description_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.descriptionChanged]: descriptionChanged
    }),
    onClick: () => updateDescToBackend(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (WorkflowDescription);

/***/ }),

/***/ "./components/WorkflowStarredAndFinished.js":
/*!**************************************************!*\
  !*** ./components/WorkflowStarredAndFinished.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss_workflow_starred_finished_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/scss/workflow-starred-finished.module.scss */ "./styles/scss/workflow-starred-finished.module.scss");
/* harmony import */ var _styles_scss_workflow_starred_finished_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_workflow_starred_finished_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Sarthak\\YT_Workflow_Cloud\\client\\components\\WorkflowStarredAndFinished.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const WorkflowStarredAndFinished = ({
  oldStarred,
  oldFinished,
  id
}) => {
  const {
    0: starred,
    1: setStarred
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(oldStarred);
  const {
    0: finished,
    1: setFinished
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(oldFinished);
  const jwtToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.jwtToken);

  const toggleStarred = async () => {
    setStarred(!starred);
    await fetch(`http://localhost:8000/toggle-workflow-starred/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + jwtToken
      }
    });
  };

  const toggleFinished = async () => {
    setFinished(!finished);
    await fetch(`http://localhost:8000/toggle-workflow-finished/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + jwtToken
      }
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 3
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: "star",
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      [_styles_scss_workflow_starred_finished_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.regular]: true,
      [_styles_scss_workflow_starred_finished_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.starred]: starred
    }),
    onClick: toggleStarred,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: "check",
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      [_styles_scss_workflow_starred_finished_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.regular]: true,
      [_styles_scss_workflow_starred_finished_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.finished]: finished
    }),
    onClick: toggleFinished,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 4
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (WorkflowStarredAndFinished);

/***/ }),

/***/ "./components/WorkflowTitle.js":
/*!*************************************!*\
  !*** ./components/WorkflowTitle.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss_workflow_title_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/scss/workflow-title.module.scss */ "./styles/scss/workflow-title.module.scss");
/* harmony import */ var _styles_scss_workflow_title_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_workflow_title_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Sarthak\\YT_Workflow_Cloud\\client\\components\\WorkflowTitle.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const WorkflowTitle = ({
  oldTitle,
  id
}) => {
  const titleInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const jwtToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.jwtToken);
  const inputLengthMultiplier = 18;

  const pushTitleChangeToBackend = async () => {
    await fetch(`http://localhost:8000/set-workflow-title/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + jwtToken
      },
      body: JSON.stringify({
        title: titleInput.current.innerText
      })
    });
  };

  const handleChange = async () => {
    if (titleInput.current.innertText !== oldTitle) {
      console.log('changing');
      await pushTitleChangeToBackend();
    }
  };

  return __jsx("h2", {
    contentEditable: 'plaintext-only',
    ref: titleInput,
    className: _styles_scss_workflow_title_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.titleInput,
    onBlur: handleChange,
    spellCheck: 'false',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 3
    }
  }, oldTitle);
};

/* harmony default export */ __webpack_exports__["default"] = (WorkflowTitle);

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

/***/ "./components/addFile.js":
/*!*******************************!*\
  !*** ./components/addFile.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss_file_upload_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/scss/file-upload.module.scss */ "./styles/scss/file-upload.module.scss");
/* harmony import */ var _styles_scss_file_upload_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_file_upload_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Sarthak\\YT_Workflow_Cloud\\client\\components\\addFile.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const AddFile = ({
  fileType,
  id,
  updateFileCollections
}) => {
  const fileInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const fileForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const jwtToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.jwtToken);

  const submitFile = async () => {
    const formData = new FormData(fileForm.current);
    await fetch(`http://localhost:8000/upload-file/${id}/${fileType}`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + jwtToken
      },
      body: formData
    });
    await updateFileCollections(fileType);
  };

  return __jsx("div", {
    className: _styles_scss_file_upload_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.fileUploadContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 3
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: 'plus-circle',
    className: _styles_scss_file_upload_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.fileUpload,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }
  }), __jsx("form", {
    ref: fileForm,
    encType: "multipart/form-data",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }
  }, __jsx("input", {
    ref: fileInput,
    type: "file",
    accept: `${fileType}/*`,
    name: "file",
    className: _styles_scss_file_upload_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.fileInput,
    onChange: () => {
      submitFile();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (AddFile);

/***/ }),

/***/ "./components/parseCookie.js":
/*!***********************************!*\
  !*** ./components/parseCookie.js ***!
  \***********************************/
/*! exports provided: parseCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCookie", function() { return parseCookie; });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);

function parseCookie(req) {
  return cookie__WEBPACK_IMPORTED_MODULE_0___default.a.parse(req ? req.headers.cookie || '' : document.cookie);
}

/***/ }),

/***/ "./pages/workflow/[id].js":
/*!********************************!*\
  !*** ./pages/workflow/[id].js ***!
  \********************************/
/*! exports provided: getServerSideProps, getServerSidePaths, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSidePaths", function() { return getServerSidePaths; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_DashboardMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/DashboardMenu */ "./components/DashboardMenu.js");
/* harmony import */ var _styles_scss_worklow_editor_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/scss/worklow_editor.module.scss */ "./styles/scss/worklow_editor.module.scss");
/* harmony import */ var _styles_scss_worklow_editor_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_worklow_editor_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_parseCookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/parseCookie */ "./components/parseCookie.js");
/* harmony import */ var _components_WorkflowDescription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/WorkflowDescription */ "./components/WorkflowDescription.js");
/* harmony import */ var _components_addFile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/addFile */ "./components/addFile.js");
/* harmony import */ var _components_Share__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Share */ "./components/Share.js");
/* harmony import */ var _components_WorkflowTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/WorkflowTitle */ "./components/WorkflowTitle.js");
/* harmony import */ var _components_WorkflowStarredAndFinished__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/WorkflowStarredAndFinished */ "./components/WorkflowStarredAndFinished.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_WorkflowDeleteBtn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/WorkflowDeleteBtn */ "./components/WorkflowDeleteBtn.js");
var _jsxFileName = "C:\\Sarthak\\YT_Workflow_Cloud\\client\\pages\\workflow\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;














const Workflow = props => {
  const jwtToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.jwtToken);
  const {
    0: audioUrls,
    1: setAudioUrls
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: imageUrls,
    1: setImageUrls
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: thumbnailUrls,
    1: setThumbnailUrls
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: videoUrls,
    1: setVideoUrls
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: description,
    1: setDescription
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: title,
    1: setTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: starred,
    1: setStarred
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: finished,
    1: setFinished
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: fetched,
    1: setFetched
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const id = props.id;
  const {
    0: creator,
    1: setCreator
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: otherUsers,
    1: setOtherUsers
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    async function fetchData() {
      const workflowInfoRes = await fetch(`http://127.0.0.1:8000/get-workflow/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwtToken}`
        }
      });
      const workflowInfoJson = await workflowInfoRes.json();
      const workflowInfo = workflowInfoJson['workflow'];
      setDescription(workflowInfo.description);
      setTitle(workflowInfo.title);
      setStarred(workflowInfo.starred);
      setFinished(workflowInfo.finished);
      setOtherUsers(workflowInfo['other_users']);
      setCreator(workflowInfoJson.creator);
      const workflowFilesRes = await fetch(`http://127.0.0.1:8000/get-workflow-files/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwtToken}`
        }
      });
      const filesJson = await workflowFilesRes.json();
      const fileUrlsJson = filesJson['workflow-file-urls'];
      setAudioUrls(fileUrlsJson['audio']);
      setImageUrls(fileUrlsJson['image']);
      setVideoUrls(fileUrlsJson['video']);
      setThumbnailUrls(fileUrlsJson['thumbnail']);
      setFetched(true);
    }

    fetchData();
  }, []);

  const updateFileCollections = async fileType => {
    const res = await fetch(`http://localhost:8000/get-workflow-files/${id}/${fileType}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + jwtToken
      }
    });
    const resJson = await res.json();
    const urls = resJson['workflow-specific-urls'];

    switch (fileType) {
      case 'image':
        setImageUrls(urls);
        break;

      case 'video':
        setVideoUrls(urls);
        break;

      case 'thumbnail':
        setThumbnailUrls(urls);
        break;

      case 'audio':
        setAudioUrls(urls);
        break;
    }
  };

  const deleteFile = async (url, fileType) => {
    if (confirm('Are you sure you want to delete this file?')) {
      const fileParts = url.split('/');
      const fileName = fileParts[fileParts.length - 1];
      await fetch(`http://localhost:8000/delete-file/${id}/${fileType}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + jwtToken
        },
        body: JSON.stringify({
          file_name: fileName
        })
      });
      await updateFileCollections(fileType);
    }
  };

  const pageInfo = () => {
    if (!fetched) {
      return __jsx("div", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }
      }, "Fetching");
    } else {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 5
        }
      }, __jsx("section", {
        className: _styles_scss_worklow_editor_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.header,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: _styles_scss_worklow_editor_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.workflowHeaderInfo,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 7
        }
      }, __jsx(_components_WorkflowTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
        oldTitle: title,
        id: id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 8
        }
      }), __jsx(_components_WorkflowStarredAndFinished__WEBPACK_IMPORTED_MODULE_10__["default"], {
        oldStarred: starred,
        oldFinished: finished,
        id: id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 8
        }
      })), __jsx(_components_Share__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 7
        }
      })), __jsx("section", {
        className: _styles_scss_worklow_editor_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.content,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: _styles_scss_worklow_editor_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.images,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 7
        }
      }, __jsx("h2", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 8
        }
      }, "Thumbnails"), __jsx("div", {
        className: _styles_scss_worklow_editor_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 8
        }
      }, thumbnailUrls.map(thumbnailUrl => {
        return __jsx("div", {
          className: _styles_scss_worklow_editor_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.fileContainer,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 11
          }
        }, __jsx("img", {
          src: thumbnailUrl,
          className: _styles_scss_worklow_editor_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.workflowImage,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 12
          }
        }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
          icon: "trash",
          className: _styles_scss_worklow_editor_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.deleteIcon,
          onClick: () => deleteFile(thumbnailUrl, 'thumbnail'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 12
          }
        }));
      }), __jsx(_components_addFile__WEBPACK_IMPORTED_MODULE_7__["default"], {
        fileType: 'thumbnail',
        id: id,
        updateFileCollections: updateFileCollections,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 9
        }
      }))), __jsx("div", {
        className: _styles_scss_worklow_editor_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.images,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 7
        }
      }, __jsx("h2", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 8
        }
      }, "Images"), __jsx("div", {
        className: _styles_scss_worklow_editor_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 8
        }
      }, imageUrls.map(imageUrl => {
        return __jsx("div", {
          className: _styles_scss_worklow_editor_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.fileContainer,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 11
          }
        }, __jsx("img", {
          src: imageUrl,
          className: _styles_scss_worklow_editor_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.workflowImage,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 12
          }
        }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
          icon: "trash",
          className: _styles_scss_worklow_editor_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.deleteIcon,
          onClick: () => deleteFile(imageUrl, 'image'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 12
          }
        }));
      }), __jsx(_components_addFile__WEBPACK_IMPORTED_MODULE_7__["default"], {
        fileType: 'image',
        id: id,
        updateFileCollections: updateFileCollections,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 9
        }
      }))), __jsx("div", {
        className: _styles_scss_worklow_editor_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.audios,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 7
        }
      }, __jsx("h2", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 8
        }
      }, "Audio"), __jsx("div", {
        className: _styles_scss_worklow_editor_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 8
        }
      }, audioUrls.map(audioUrl => {
        const dotParts = audioUrl.split('.');
        const mimeType = dotParts[dotParts.length - 1];
        return __jsx("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
            [_styles_scss_worklow_editor_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.fileContainer]: true,
            [_styles_scss_worklow_editor_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.audioFileContainer]: true
          }),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 11
          }
        }, __jsx("audio", {
          key: audioUrl,
          controls: true,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 12
          }
        }, __jsx("source", {
          src: audioUrl,
          type: `audio/${mimeType}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }
        }), ";"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
          icon: "trash",
          className: _styles_scss_worklow_editor_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.deleteIcon,
          onClick: () => deleteFile(audioUrl, 'audio'),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 12
          }
        }));
      }), __jsx(_components_addFile__WEBPACK_IMPORTED_MODULE_7__["default"], {
        fileType: 'audio',
        id: id,
        updateFileCollections: updateFileCollections,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 9
        }
      }))), __jsx("div", {
        className: _styles_scss_worklow_editor_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.videos,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 7
        }
      }, __jsx("h2", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 8
        }
      }, "Videos"), __jsx("div", {
        className: _styles_scss_worklow_editor_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 8
        }
      }, videoUrls.map(videoUrl => {
        const dotParts = videoUrl.split('.');
        const mimeType = dotParts[dotParts.length - 1];

        if (mimeType !== 'mov') {
          return __jsx("div", {
            className: _styles_scss_worklow_editor_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.fileContainer,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 12
            }
          }, __jsx("video", {
            key: videoUrl,
            className: _styles_scss_worklow_editor_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.workflowVideo,
            width: "320",
            height: "240",
            controls: true,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 13
            }
          }, __jsx("source", {
            src: videoUrl,
            type: `video/${mimeType}`,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 14
            }
          })), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
            icon: "trash",
            className: _styles_scss_worklow_editor_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.deleteIcon,
            onClick: () => deleteFile(videoUrl, 'video'),
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 13
            }
          }));
        } else {
          return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 18
            }
          });
        }
      }), __jsx(_components_addFile__WEBPACK_IMPORTED_MODULE_7__["default"], {
        fileType: 'video',
        id: id,
        updateFileCollections: updateFileCollections,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 9
        }
      }))), __jsx(_components_WorkflowDescription__WEBPACK_IMPORTED_MODULE_6__["default"], {
        oldDescription: description,
        id: id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 7
        }
      }), __jsx(_components_WorkflowDeleteBtn__WEBPACK_IMPORTED_MODULE_12__["default"], {
        id: id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 7
        }
      })));
    }
  }; // console.log('hi');


  return __jsx("main", {
    className: _styles_scss_worklow_editor_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.workflowEditorContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: _styles_scss_worklow_editor_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.dashboardMenuContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 4
    }
  }, __jsx(_components_DashboardMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 5
    }
  })), __jsx("div", {
    className: _styles_scss_worklow_editor_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.editor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 4
    }
  }, pageInfo()));
};

async function getServerSideProps({
  params
}) {
  // console.log(params.id);
  return {
    props: {
      id: params.id
    }
  };
}
async function getServerSidePaths({
  req
}) {
  const cookies = Object(_components_parseCookie__WEBPACK_IMPORTED_MODULE_5__["parseCookie"])(req);
  const origWorkflowsRes = await fetch('http://127.0.0.1:8000/get-workflow-ids', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: cookies.jwt
    }
  });
  const origWorkflowsJson = origWorkflowsRes.json();
  const workflowIds = origWorkflowsJson['workflow-ids'];
  const paths = workflowIds.map(workflowId => {
    return {
      params: {
        id: workflowId.toString()
      }
    };
  });
  return {
    paths,
    fallback: false
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Workflow);

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

/***/ "./styles/scss/file-upload.module.scss":
/*!*********************************************!*\
  !*** ./styles/scss/file-upload.module.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"fileUploadContainer": "file-upload_fileUploadContainer__1zd-e",
	"fileUpload": "file-upload_fileUpload__lKbWO",
	"fileInput": "file-upload_fileInput__2AL3r"
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

/***/ "./styles/scss/share.module.scss":
/*!***************************************!*\
  !*** ./styles/scss/share.module.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"shareBtn": "share_shareBtn__1bZrg",
	"shareIcon": "share_shareIcon__opitH",
	"shareModalNotVisible": "share_shareModalNotVisible__3KFvB",
	"title": "share_title__zZn7u",
	"addUserIcon": "share_addUserIcon__2gac9",
	"heading": "share_heading__1DLjS",
	"inputSection": "share_inputSection__2HK4J",
	"emailInput": "share_emailInput__2aZ8I",
	"inputBorderBottom": "share_inputBorderBottom__24-8u",
	"inputBorderBottomActive": "share_inputBorderBottomActive__3BORG",
	"hoverLabel": "share_hoverLabel__3g74G",
	"usersHeading": "share_usersHeading__iqcus",
	"contentsHidden": "share_contentsHidden__1aMwX",
	"shareModalVisible": "share_shareModalVisible__2HwTL",
	"workflowUsersList": "share_workflowUsersList__1B_V5",
	"workflowUsers": "share_workflowUsers__37zJe",
	"workflowUserProfileImage": "share_workflowUserProfileImage__1PZpP",
	"workflowUserEmail": "share_workflowUserEmail__QKRq5",
	"owner": "share_owner__9F8ir",
	"unshareBtn": "share_unshareBtn__3ZbWS",
	"footer": "share_footer__pBSRe",
	"backdropNotVisible": "share_backdropNotVisible__18nJU",
	"backdropVisible": "share_backdropVisible__3sRpy"
};


/***/ }),

/***/ "./styles/scss/workflow-delete.module.scss":
/*!*************************************************!*\
  !*** ./styles/scss/workflow-delete.module.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"workflowDeleteBtn": "workflow-delete_workflowDeleteBtn__205zx",
	"trashIcon": "workflow-delete_trashIcon__jzqEQ",
	"deleteText": "workflow-delete_deleteText__6neby"
};


/***/ }),

/***/ "./styles/scss/workflow-description.module.scss":
/*!******************************************************!*\
  !*** ./styles/scss/workflow-description.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"descriptionContainer": "workflow-description_descriptionContainer__2iYDW",
	"descriptionTitle": "workflow-description_descriptionTitle__1LxgY",
	"description": "workflow-description_description__eqYtk",
	"updateIcon": "workflow-description_updateIcon__277vU",
	"descriptionChanged": "workflow-description_descriptionChanged__36reH"
};


/***/ }),

/***/ "./styles/scss/workflow-starred-finished.module.scss":
/*!***********************************************************!*\
  !*** ./styles/scss/workflow-starred-finished.module.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"regular": "workflow-starred-finished_regular__2Ka9q",
	"starred": "workflow-starred-finished_starred__3CfaJ",
	"finished": "workflow-starred-finished_finished__3VRHI"
};


/***/ }),

/***/ "./styles/scss/workflow-title.module.scss":
/*!************************************************!*\
  !*** ./styles/scss/workflow-title.module.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"titleInput": "workflow-title_titleInput__2MhHM"
};


/***/ }),

/***/ "./styles/scss/worklow_editor.module.scss":
/*!************************************************!*\
  !*** ./styles/scss/worklow_editor.module.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"workflowEditorContainer": "worklow_editor_workflowEditorContainer__1ZiYW",
	"dashboardMenuContainer": "worklow_editor_dashboardMenuContainer__2IsQN",
	"editor": "worklow_editor_editor__qCC3P",
	"header": "worklow_editor_header__2n6cS",
	"workflowHeaderInfo": "worklow_editor_workflowHeaderInfo__2zRck",
	"content": "worklow_editor_content__2DL5e",
	"fileContainer": "worklow_editor_fileContainer__2qQOA",
	"deleteIcon": "worklow_editor_deleteIcon__Z3_6W",
	"container": "worklow_editor_container__pznUD",
	"images": "worklow_editor_images__1h54T",
	"workflowImage": "worklow_editor_workflowImage__1_uAS",
	"audios": "worklow_editor_audios__26a8I",
	"audioFileContainer": "worklow_editor_audioFileContainer__16BOE",
	"videos": "worklow_editor_videos__2xSJt",
	"workflowVideo": "worklow_editor_workflowVideo__bVFVM"
};


/***/ }),

/***/ 8:
/*!**************************************!*\
  !*** multi ./pages/workflow/[id].js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Sarthak\YT_Workflow_Cloud\client\pages\workflow\[id].js */"./pages/workflow/[id].js");


/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "@hapi/joi":
/*!****************************!*\
  !*** external "@hapi/joi" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@hapi/joi");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmRNZW51LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2hhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Xb3JrZmxvd0RlbGV0ZUJ0bi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dvcmtmbG93RGVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Xb3JrZmxvd1N0YXJyZWRBbmRGaW5pc2hlZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dvcmtmbG93VGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hY3Rpb25zL2p3dEFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FkZEZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYXJzZUNvb2tpZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy93b3JrZmxvdy8uanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3Njc3MvZGFzaGJvYXJkLW1lbnUtaXRlbS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvc2Nzcy9kYXNoYm9hcmQtbWVudS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvc2Nzcy9maWxlLXVwbG9hZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvc2Nzcy9wcm9maWxlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9zY3NzL3NoYXJlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9zY3NzL3dvcmtmbG93LWRlbGV0ZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvc2Nzcy93b3JrZmxvdy1kZXNjcmlwdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvc2Nzcy93b3JrZmxvdy1zdGFycmVkLWZpbmlzaGVkLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9zY3NzL3dvcmtmbG93LXRpdGxlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9zY3NzL3dvcmtsb3dfZWRpdG9yLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBoYXBpL2pvaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiJdLCJuYW1lcyI6WyJEYXNoYm9hcmRNZW51Iiwicm91dGVyIiwidXNlUm91dGVyIiwiY3VyUm91dGUiLCJyb3V0ZSIsImN1cnJlbnRQYWdlIiwic3BsaXQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaGlkZU1lbnVJdGVtcyIsInNldEhpZGVNZW51SXRlbXMiLCJ1c2VTdGF0ZSIsInRvZ2dsZU1vYmlsZU1lbnUiLCJsb2dvdXQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic2V0Snd0IiwiQ29va2llIiwic2V0IiwiSlNPTiIsInN0cmluZ2lmeSIsInB1c2giLCJjbGFzc25hbWVzIiwic3R5bGVzIiwidG9nZ2xlSWNvbiIsImRhc2hib2FyZE1lbnVDb250YWluZXIiLCJkaXZQcm9maWxlIiwiZGFzaGJvYXJkTWVudUl0ZW1zIiwiRGFzaGJvYXJkTWVudUl0ZW0iLCJtZW51VGl0bGUiLCJtZW51TGlua1JlZmVyZW5jZSIsIm1lbnVJdGVtRm9udEF3ZXNvbWVSZWYiLCJtZW51SXRlbUFjdGl2ZSIsIm1lbnVJdGVtTGluayIsIm1lbnVJdGVtQ29udGFpbmVyIiwibWVudUl0ZW1JbmZvIiwiaWNvbkNvbnRhaW5lciIsImljb25Db250YWluZXJBY3RpdmUiLCJhY3RpdmVDaXJjbGUiLCJhY3RpdmUiLCJQcm9maWxlIiwibW9udGhzIiwiY3VycmVudERhdGUiLCJzZXRDdXJyZW50RGF0ZSIsInByb2ZpbGVJbWFnZUZvcm1SZWYiLCJ1c2VSZWYiLCJqd3RUb2tlbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwcm9maWxlSW1hZ2UiLCJzZXRQcm9maWxlSW1hZ2UiLCJwcm9maWxlVXNlcm5hbWUiLCJzZXRQcm9maWxlVXNlcm5hbWUiLCJkaXNwbGF5TmFtZSIsInNldERpc3BsYXlOYW1lIiwiY2FwaXRhbGl6ZSIsInN0ciIsInNsaWNlIiwidG9VcHBlckNhc2UiLCJnZXRQcm9maWxlSW1hZ2UiLCJwcm9maWxlSW1hZ2VVcmxSZXMiLCJmZXRjaCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwic3RhdHVzIiwicHJvZmlsZUltYWdlVXJsSnNvbiIsImpzb24iLCJnZXRQcm9maWxlVXNlcm5hbWUiLCJwcm9maWxlVXNlcm5hbWVSZXMiLCJwcm9maWxlVXNlcm5hbWVKc29uIiwidXBkYXRlUHJvZmlsZUltYWdlIiwicHJvZmlsZUZvcm0iLCJGb3JtRGF0YSIsImN1cnJlbnQiLCJyZXMiLCJtZXRob2QiLCJib2R5IiwianNvblJlcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJjdXJyZW50RGF0ZUluZm8iLCJEYXRlIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJwcm9maWxlQ29udGFpbmVyIiwiaW1hZ2VTZWN0aW9uIiwiaW5wdXRTZWN0aW9uIiwiZWRpdEljb24iLCJwcm9maWxlSW1hZ2VJbnB1dCIsIlNoYXJlIiwiaWQiLCJtb2RhbFZpc2libGUiLCJzZXRNb2RhbFZpc2libGUiLCJoaWRlQ29udGVudCIsInNldEhpZGVDb250ZW50IiwiaW5wdXRBY3RpdmUiLCJzZXRJbnB1dEFjdGl2ZSIsImlucHV0VGV4dCIsInNldElucHV0VGV4dCIsInByb2ZpbGVJbWFnZXNJbmZvIiwic2V0UHJvZmlsZUltYWdlc0luZm8iLCJlcnJvciIsInNldEVycm9yIiwic2NoZW1hIiwiSm9pIiwib2JqZWN0IiwiZW1haWwiLCJzdHJpbmciLCJtaW5Eb21haW5TZWdtZW50cyIsInRsZHMiLCJhbGxvdyIsImdldFByb2ZpbGVJbWFnZXMiLCJpbWFnZVVybHNSZXMiLCJpbWFnZVVybHNKc29uIiwiT2JqZWN0IiwiZW50cmllcyIsInNoYXJlV29ya2Zsb3ciLCJ2YWxpZGF0aW9uIiwidmFsaWRhdGUiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJzaGFyZVJlcyIsInNoYXJlSnNvbiIsIm1zZyIsInRvZ2dsZU1vZGFsIiwic2V0VGltZW91dCIsInRvZ2dsZUlucHV0QWN0aXZlIiwidXBkYXRlSW5wdXRUZXh0IiwiZSIsInRhcmdldCIsInZhbHVlIiwidW5zaGFyZVdvcmtmbG93IiwidW5zaGFyZVJlcyIsInVuc2hhcmVKc29uIiwic2hhcmVNb2RhbE5vdFZpc2libGUiLCJzaGFyZU1vZGFsVmlzaWJsZSIsImNvbnRlbnRzSGlkZGVuIiwidGl0bGUiLCJhZGRVc2VySWNvbiIsImhlYWRpbmciLCJlbWFpbElucHV0IiwiaW5wdXRCb3JkZXJCb3R0b20iLCJpbnB1dEJvcmRlckJvdHRvbUFjdGl2ZSIsImhvdmVyTGFiZWwiLCJ1c2Vyc0hlYWRpbmciLCJ3b3JrZmxvd1VzZXJzTGlzdCIsIm1hcCIsInByb2ZpbGVJbWFnZUluZm8iLCJpbmRleCIsIndvcmtmbG93VXNlcnMiLCJ3b3JrZmxvd1VzZXJQcm9maWxlSW1hZ2UiLCJ3b3JrZmxvd1VzZXJFbWFpbCIsInVuc2hhcmVCdG4iLCJvd25lciIsImZvb3RlciIsInNoYXJlQnRuIiwic2hhcmVJY29uIiwiYmFja2Ryb3BOb3RWaXNpYmxlIiwiYmFja2Ryb3BWaXNpYmxlIiwiV29ya2Zsb3dEZWxldGVCdG4iLCJkZWxldGVXb3JrZmxvdyIsIlJvdXRlciIsIndvcmtmbG93RGVsZXRlQnRuIiwidHJhc2hJY29uIiwiZGVsZXRlVGV4dCIsIldvcmtmbG93RGVzY3JpcHRpb24iLCJvbGREZXNjcmlwdGlvbiIsInNhbWVTZXNzaW9uT2xkRGVzY3JpcHRpb24iLCJzZXRTYW1lU2Vzc2lvbk9sZERlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25DaGFuZ2VkIiwic2V0RGVzY3JpcHRpb25DaGFuZ2VkIiwiZGVzY1RleHRBcmVhIiwidXBkYXRlRGVzY1RvQmFja2VuZCIsIm5ld0Rlc2NKc29uIiwiZGVzY3JpcHRpb24iLCJ1cGRhdGVEZXNjIiwiZGVzY3JpcHRpb25Db250YWluZXIiLCJkZXNjcmlwdGlvblRpdGxlIiwidXBkYXRlSWNvbiIsIldvcmtmbG93U3RhcnJlZEFuZEZpbmlzaGVkIiwib2xkU3RhcnJlZCIsIm9sZEZpbmlzaGVkIiwic3RhcnJlZCIsInNldFN0YXJyZWQiLCJmaW5pc2hlZCIsInNldEZpbmlzaGVkIiwidG9nZ2xlU3RhcnJlZCIsInRvZ2dsZUZpbmlzaGVkIiwicmVndWxhciIsIldvcmtmbG93VGl0bGUiLCJvbGRUaXRsZSIsInRpdGxlSW5wdXQiLCJpbnB1dExlbmd0aE11bHRpcGxpZXIiLCJwdXNoVGl0bGVDaGFuZ2VUb0JhY2tlbmQiLCJpbm5lclRleHQiLCJoYW5kbGVDaGFuZ2UiLCJpbm5lcnRUZXh0Iiwiand0IiwidHlwZSIsInBheWxvYWQiLCJBZGRGaWxlIiwiZmlsZVR5cGUiLCJ1cGRhdGVGaWxlQ29sbGVjdGlvbnMiLCJmaWxlSW5wdXQiLCJmaWxlRm9ybSIsInN1Ym1pdEZpbGUiLCJmb3JtRGF0YSIsImZpbGVVcGxvYWRDb250YWluZXIiLCJmaWxlVXBsb2FkIiwicGFyc2VDb29raWUiLCJyZXEiLCJjb29raWUiLCJwYXJzZSIsImRvY3VtZW50IiwiV29ya2Zsb3ciLCJwcm9wcyIsImF1ZGlvVXJscyIsInNldEF1ZGlvVXJscyIsImltYWdlVXJscyIsInNldEltYWdlVXJscyIsInRodW1ibmFpbFVybHMiLCJzZXRUaHVtYm5haWxVcmxzIiwidmlkZW9VcmxzIiwic2V0VmlkZW9VcmxzIiwic2V0RGVzY3JpcHRpb24iLCJzZXRUaXRsZSIsImZldGNoZWQiLCJzZXRGZXRjaGVkIiwiY3JlYXRvciIsInNldENyZWF0b3IiLCJvdGhlclVzZXJzIiwic2V0T3RoZXJVc2VycyIsImZldGNoRGF0YSIsIndvcmtmbG93SW5mb1JlcyIsIndvcmtmbG93SW5mb0pzb24iLCJ3b3JrZmxvd0luZm8iLCJ3b3JrZmxvd0ZpbGVzUmVzIiwiZmlsZXNKc29uIiwiZmlsZVVybHNKc29uIiwicmVzSnNvbiIsInVybHMiLCJkZWxldGVGaWxlIiwidXJsIiwiY29uZmlybSIsImZpbGVQYXJ0cyIsImZpbGVOYW1lIiwibGVuZ3RoIiwiZmlsZV9uYW1lIiwicGFnZUluZm8iLCJoZWFkZXIiLCJ3b3JrZmxvd0hlYWRlckluZm8iLCJjb250ZW50IiwiaW1hZ2VzIiwiY29udGFpbmVyIiwidGh1bWJuYWlsVXJsIiwiZmlsZUNvbnRhaW5lciIsIndvcmtmbG93SW1hZ2UiLCJkZWxldGVJY29uIiwiaW1hZ2VVcmwiLCJhdWRpb3MiLCJhdWRpb1VybCIsImRvdFBhcnRzIiwibWltZVR5cGUiLCJhdWRpb0ZpbGVDb250YWluZXIiLCJ2aWRlb3MiLCJ2aWRlb1VybCIsIndvcmtmbG93VmlkZW8iLCJ3b3JrZmxvd0VkaXRvckNvbnRhaW5lciIsImVkaXRvciIsImdldFNlcnZlclNpZGVQcm9wcyIsInBhcmFtcyIsImdldFNlcnZlclNpZGVQYXRocyIsImNvb2tpZXMiLCJvcmlnV29ya2Zsb3dzUmVzIiwib3JpZ1dvcmtmbG93c0pzb24iLCJ3b3JrZmxvd0lkcyIsInBhdGhzIiwid29ya2Zsb3dJZCIsImZhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBLDJEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFx3b3JrZmxvd1xcW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3Njc3MvZGFzaGJvYXJkLW1lbnUubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuL1Byb2ZpbGUnO1xyXG5pbXBvcnQgRGFzaGJvYXJkTWVudUl0ZW0gZnJvbSAnLi9EYXNoYm9hcmRNZW51SXRlbSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHsgc2V0Snd0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9hY3Rpb25zL2p3dEFjdGlvbic7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgQ29va2llIGZyb20gJ2pzLWNvb2tpZSc7XHJcblxyXG5jb25zdCBEYXNoYm9hcmRNZW51ID0gKCkgPT4ge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IGN1clJvdXRlID0gcm91dGVyLnJvdXRlO1xyXG5cdGNvbnN0IGN1cnJlbnRQYWdlID0gY3VyUm91dGUuc3BsaXQoJy8nKVsyXTtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG5cdGNvbnN0IFsgaGlkZU1lbnVJdGVtcywgc2V0SGlkZU1lbnVJdGVtcyBdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG5cdGNvbnN0IHRvZ2dsZU1vYmlsZU1lbnUgPSAoKSA9PiB7XHJcblx0XHRzZXRIaWRlTWVudUl0ZW1zKCFoaWRlTWVudUl0ZW1zKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVmcmVzaC10b2tlbicsICcnKTtcclxuXHRcdGRpc3BhdGNoKHNldEp3dCgnJykpO1xyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2p3dCcsICcnKTtcclxuXHRcdENvb2tpZS5zZXQoJ2p3dCcsIEpTT04uc3RyaW5naWZ5KCcnKSk7XHJcblx0XHRDb29raWUuc2V0KCdyZWZyZXNoLXRva2VuJywgSlNPTi5zdHJpbmdpZnkoJycpKTtcclxuXHRcdHJldHVybiByb3V0ZXIucHVzaCgnLycpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHsgW3N0eWxlcy50b2dnbGVJY29uXTogdHJ1ZSB9KX0gb25DbGljaz17dG9nZ2xlTW9iaWxlTWVudX0+XHJcblx0XHRcdFx0PGRpdiAvPlxyXG5cdFx0XHRcdDxkaXYgLz5cclxuXHRcdFx0XHQ8ZGl2IC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuXHRcdFx0XHRcdFtzdHlsZXMuZGFzaGJvYXJkTWVudUNvbnRhaW5lcl06IHRydWUsXHJcblx0XHRcdFx0XHRbc3R5bGVzLmhpZGVNZW51SXRlbXNdOiAhaGlkZU1lbnVJdGVtc1xyXG5cdFx0XHRcdH0pfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaXZQcm9maWxlfT5cclxuXHRcdFx0XHRcdDxQcm9maWxlIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXNoYm9hcmRNZW51SXRlbXN9PlxyXG5cdFx0XHRcdFx0PERhc2hib2FyZE1lbnVJdGVtXHJcblx0XHRcdFx0XHRcdG1lbnVUaXRsZT17J1dvcmtmbG93cyd9XHJcblx0XHRcdFx0XHRcdG1lbnVJdGVtRm9udEF3ZXNvbWVSZWY9eydzaXRlbWFwJ31cclxuXHRcdFx0XHRcdFx0bWVudUxpbmtSZWZlcmVuY2U9eycvZGFzaGJvYXJkL3dvcmtmbG93cyd9XHJcblx0XHRcdFx0XHRcdG1lbnVJdGVtQWN0aXZlPXtjdXJyZW50UGFnZSA9PSAnd29ya2Zsb3dzJ31cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8RGFzaGJvYXJkTWVudUl0ZW1cclxuXHRcdFx0XHRcdFx0bWVudVRpdGxlPXsnU2hhcmVkIHdpdGggbWUnfVxyXG5cdFx0XHRcdFx0XHRtZW51SXRlbUZvbnRBd2Vzb21lUmVmPXsnc2hhcmUtYWx0J31cclxuXHRcdFx0XHRcdFx0bWVudUxpbmtSZWZlcmVuY2U9eycvZGFzaGJvYXJkL3NoYXJlZC13aXRoLW1lJ31cclxuXHRcdFx0XHRcdFx0bWVudUl0ZW1BY3RpdmU9e2N1cnJlbnRQYWdlID09ICdzaGFyZWQtd2l0aC1tZSd9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PERhc2hib2FyZE1lbnVJdGVtXHJcblx0XHRcdFx0XHRcdG1lbnVUaXRsZT17J1N0YXRpc3RpY3MnfVxyXG5cdFx0XHRcdFx0XHRtZW51SXRlbUZvbnRBd2Vzb21lUmVmPXsnY2hhcnQtcGllJ31cclxuXHRcdFx0XHRcdFx0bWVudUxpbmtSZWZlcmVuY2U9eycvZGFzaGJvYXJkL3N0YXRpc3RpY3MnfVxyXG5cdFx0XHRcdFx0XHRtZW51SXRlbUFjdGl2ZT17Y3VycmVudFBhZ2UgPT0gJ3N0YXRpc3RpY3MnfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ291dH0gb25DbGljaz17bG9nb3V0fT5cclxuXHRcdFx0XHRcdDxGb250QXdlc29tZUljb24gaWNvbj17J3NpZ24tb3V0LWFsdCd9IC8+XHJcblx0XHRcdFx0XHR7JyAgICAnfUxvZ291dFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZE1lbnU7XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3Njc3MvZGFzaGJvYXJkLW1lbnUtaXRlbS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5cclxuY29uc3QgRGFzaGJvYXJkTWVudUl0ZW0gPSAoeyBtZW51VGl0bGUsIG1lbnVMaW5rUmVmZXJlbmNlLCBtZW51SXRlbUZvbnRBd2Vzb21lUmVmLCBtZW51SXRlbUFjdGl2ZSB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxhIGhyZWY9e21lbnVMaW5rUmVmZXJlbmNlfSBjbGFzc05hbWU9e3N0eWxlcy5tZW51SXRlbUxpbmt9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVJdGVtQ29udGFpbmVyfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVJdGVtSW5mb30+XHJcblx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcblx0XHRcdFx0XHRcdFx0W3N0eWxlcy5pY29uQ29udGFpbmVyXTogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRbc3R5bGVzLmljb25Db250YWluZXJBY3RpdmVdOiBtZW51SXRlbUFjdGl2ZVxyXG5cdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PEZvbnRBd2Vzb21lSWNvbiBpY29uPXttZW51SXRlbUZvbnRBd2Vzb21lUmVmfSAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPXtzdHlsZXMubWVudVRpdGxlfT57bWVudVRpdGxlfTwvaDM+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoeyBbc3R5bGVzLmFjdGl2ZUNpcmNsZV06IHRydWUsIFtzdHlsZXMuYWN0aXZlXTogbWVudUl0ZW1BY3RpdmUgfSl9IC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9hPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRNZW51SXRlbTtcclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvc2Nzcy9wcm9maWxlLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcblxyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG5cdGNvbnN0IG1vbnRocyA9IFtcclxuXHRcdCdKYW51YXJ5JyxcclxuXHRcdCdGZWJydWFyeScsXHJcblx0XHQnTWFyY2gnLFxyXG5cdFx0J0FwcmlsJyxcclxuXHRcdCdNYXknLFxyXG5cdFx0J0p1bmUnLFxyXG5cdFx0J0p1bHknLFxyXG5cdFx0J0F1Z3VzdCcsXHJcblx0XHQnU2VwdGVtYmVyJyxcclxuXHRcdCdPY3RvYmVyJyxcclxuXHRcdCdOb3ZlbWJlcicsXHJcblx0XHQnRGVjZW1iZXInXHJcblx0XTtcclxuXHRjb25zdCBbIGN1cnJlbnREYXRlLCBzZXRDdXJyZW50RGF0ZSBdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuXHRjb25zdCBwcm9maWxlSW1hZ2VGb3JtUmVmID0gdXNlUmVmKCk7XHJcblx0Y29uc3Qgand0VG9rZW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmp3dFRva2VuKTtcclxuXHJcblx0Y29uc3QgWyBwcm9maWxlSW1hZ2UsIHNldFByb2ZpbGVJbWFnZSBdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFsgcHJvZmlsZVVzZXJuYW1lLCBzZXRQcm9maWxlVXNlcm5hbWUgXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbIGRpc3BsYXlOYW1lLCBzZXREaXNwbGF5TmFtZSBdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuXHRjb25zdCBjYXBpdGFsaXplID0gKHN0cikgPT4ge1xyXG5cdFx0cmV0dXJuIHN0ci5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGdldFByb2ZpbGVJbWFnZSA9IGFzeW5jICgpID0+IHtcclxuXHRcdGNvbnN0IHByb2ZpbGVJbWFnZVVybFJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvZ2V0LXByb2ZpbGUtaW1hZ2UnLCB7XHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHQnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIGp3dFRva2VuXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0aWYgKHByb2ZpbGVJbWFnZVVybFJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG5cdFx0XHRjb25zdCBwcm9maWxlSW1hZ2VVcmxKc29uID0gYXdhaXQgcHJvZmlsZUltYWdlVXJsUmVzLmpzb24oKTtcclxuXHRcdFx0c2V0UHJvZmlsZUltYWdlKHByb2ZpbGVJbWFnZVVybEpzb25bJ21zZyddKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBnZXRQcm9maWxlVXNlcm5hbWUgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRjb25zdCBwcm9maWxlVXNlcm5hbWVSZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2dldC1wcm9maWxlLXVzZXJuYW1lJywge1xyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0J0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0XHRBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBqd3RUb2tlblxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGlmIChwcm9maWxlVXNlcm5hbWVSZXMuc3RhdHVzID09PSAyMDApIHtcclxuXHRcdFx0Y29uc3QgcHJvZmlsZVVzZXJuYW1lSnNvbiA9IGF3YWl0IHByb2ZpbGVVc2VybmFtZVJlcy5qc29uKCk7XHJcblx0XHRcdHNldFByb2ZpbGVVc2VybmFtZShwcm9maWxlVXNlcm5hbWVKc29uWydtc2cnXSk7XHJcblx0XHRcdHNldERpc3BsYXlOYW1lKGNhcGl0YWxpemUocHJvZmlsZVVzZXJuYW1lSnNvblsnbXNnJ10uc3BsaXQoJyAnKVswXSkpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IHVwZGF0ZVByb2ZpbGVJbWFnZSA9IGFzeW5jICgpID0+IHtcclxuXHRcdGNvbnN0IHByb2ZpbGVGb3JtID0gbmV3IEZvcm1EYXRhKHByb2ZpbGVJbWFnZUZvcm1SZWYuY3VycmVudCk7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL3VwbG9hZC1wcm9maWxlLWltYWdlJywge1xyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIGp3dFRva2VuXHJcblx0XHRcdH0sXHJcblx0XHRcdGJvZHk6IHByb2ZpbGVGb3JtXHJcblx0XHR9KTtcclxuXHRcdGlmIChyZXMuc3RhdHVzICE9PSAyMDApIHtcclxuXHRcdFx0Y29uc3QganNvblJlcyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKGpzb25SZXMpO1xyXG5cdFx0fVxyXG5cdFx0Z2V0UHJvZmlsZUltYWdlKCk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGN1cnJlbnREYXRlSW5mbyA9IG5ldyBEYXRlKCk7XHJcblx0XHRjb25zdCBtb250aCA9IG1vbnRoc1tjdXJyZW50RGF0ZUluZm8uZ2V0TW9udGgoKV07XHJcblx0XHRjb25zdCBkYXkgPSBjdXJyZW50RGF0ZUluZm8uZ2V0RGF0ZSgpO1xyXG5cdFx0Y29uc3QgeWVhciA9IGN1cnJlbnREYXRlSW5mby5nZXRGdWxsWWVhcigpO1xyXG5cdFx0c2V0Q3VycmVudERhdGUobW9udGggKyAnICcgKyBkYXkgKyAnLCAnICsgeWVhcik7XHJcblx0XHRnZXRQcm9maWxlSW1hZ2UoKTtcclxuXHRcdGdldFByb2ZpbGVVc2VybmFtZSgpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUNvbnRhaW5lcn0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VTZWN0aW9ufT5cclxuXHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVJbWFnZX0gc3JjPXtwcm9maWxlSW1hZ2V9IGFsdD17cHJvZmlsZVVzZXJuYW1lLnNwbGl0KCcgJylbMF19IC8+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRTZWN0aW9ufT5cclxuXHRcdFx0XHRcdDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXtzdHlsZXMuZWRpdEljb259IGljb249eyd1c2VyLWVkaXQnfSAvPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8Zm9ybSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIHJlZj17cHJvZmlsZUltYWdlRm9ybVJlZn0+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT1cImZpbGVcIlxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17dXBkYXRlUHJvZmlsZUltYWdlfVxyXG5cdFx0XHRcdFx0XHRhY2NlcHQ9eydpbWFnZS8qJ31cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUltYWdlSW5wdXR9XHJcblx0XHRcdFx0XHRcdG5hbWU9XCJpbWFnZVwiXHJcblx0XHRcdFx0XHRcdHRpdGxlPVwiXCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGgyPkhleSB7ZGlzcGxheU5hbWV9ITwvaDI+XHJcblx0XHRcdDxoNT57Y3VycmVudERhdGV9PC9oNT5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xyXG4iLCJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9zY3NzL3NoYXJlLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBKb2kgZnJvbSAnQGhhcGkvam9pJztcclxuXHJcbmNvbnN0IFNoYXJlID0gKHsgaWQgfSkgPT4ge1xyXG5cdGNvbnN0IGp3dFRva2VuID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5qd3RUb2tlbik7XHJcblx0Y29uc3QgWyBtb2RhbFZpc2libGUsIHNldE1vZGFsVmlzaWJsZSBdID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBbIGhpZGVDb250ZW50LCBzZXRIaWRlQ29udGVudCBdID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBbIGlucHV0QWN0aXZlLCBzZXRJbnB1dEFjdGl2ZSBdID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBbIGlucHV0VGV4dCwgc2V0SW5wdXRUZXh0IF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG5cdGNvbnN0IFsgcHJvZmlsZUltYWdlc0luZm8sIHNldFByb2ZpbGVJbWFnZXNJbmZvIF0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgWyBlcnJvciwgc2V0RXJyb3IgXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcblx0Y29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCh7XHJcblx0XHRlbWFpbDogSm9pLnN0cmluZygpLmVtYWlsKHsgbWluRG9tYWluU2VnbWVudHM6IDIsIHRsZHM6IHsgYWxsb3c6IFsgJ2NvbScsICduZXQnIF0gfSB9KVxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBnZXRQcm9maWxlSW1hZ2VzID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0Y29uc3QgaW1hZ2VVcmxzUmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9nZXQtd29ya2Zsb3ctcHJvZmlsZS1pbWFnZXMvJHtpZH1gLCB7XHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHQnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIGp3dFRva2VuXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0Y29uc3QgaW1hZ2VVcmxzSnNvbiA9IGF3YWl0IGltYWdlVXJsc1Jlcy5qc29uKCk7XHJcblx0XHRzZXRQcm9maWxlSW1hZ2VzSW5mbyhPYmplY3QuZW50cmllcyhpbWFnZVVybHNKc29uWyd1cmxzJ10pKTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2V0TW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuXHRcdHNldEhpZGVDb250ZW50KHRydWUpO1xyXG5cdFx0c2V0SW5wdXRBY3RpdmUoZmFsc2UpO1xyXG5cdFx0Z2V0UHJvZmlsZUltYWdlcygpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3QgY2FwaXRhbGl6ZSA9IChzdHIpID0+IHtcclxuXHRcdHJldHVybiBzdHIuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzaGFyZVdvcmtmbG93ID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0Y29uc3QgdmFsaWRhdGlvbiA9IHNjaGVtYS52YWxpZGF0ZSh7IGVtYWlsOiBpbnB1dFRleHQgfSk7XHJcblx0XHRpZiAodmFsaWRhdGlvbi5lcnJvcikge1xyXG5cdFx0XHRzZXRFcnJvcihcclxuXHRcdFx0XHQnKionICtcclxuXHRcdFx0XHRcdGNhcGl0YWxpemUoXHJcblx0XHRcdFx0XHRcdHZhbGlkYXRpb24uZXJyb3IudG9TdHJpbmcoKS5yZXBsYWNlKCdWYWxpZGF0aW9uRXJyb3I6ICcsICcnKS5yZXBsYWNlKGBcImAsIGBgKS5yZXBsYWNlKGBcImAsICcnKVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3Qgc2hhcmVSZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL3NoYXJlLXdvcmtmbG93LyR7aWR9YCwge1xyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgand0VG9rZW5cclxuXHRcdFx0fSxcclxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG5cdFx0XHRcdGVtYWlsOiBpbnB1dFRleHRcclxuXHRcdFx0fSlcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IHNoYXJlSnNvbiA9IGF3YWl0IHNoYXJlUmVzLmpzb24oKTtcclxuXHJcblx0XHRpZiAoc2hhcmVKc29uLm1zZyA9PSAnQWNjb3VudCBtYXRjaGluZyBxdWVyeSBkb2VzIG5vdCBleGlzdC4nKSB7XHJcblx0XHRcdHNldEVycm9yKCcqKlVzZXIgZG9lcyBub3QgZXhpc3QuJyk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHNldElucHV0VGV4dCgnJyk7XHJcblx0XHRzZXRFcnJvcignJyk7XHJcblx0XHRhd2FpdCBnZXRQcm9maWxlSW1hZ2VzKCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiB7XHJcblx0XHRpZiAoIW1vZGFsVmlzaWJsZSkge1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRzZXRIaWRlQ29udGVudChmYWxzZSk7XHJcblx0XHRcdH0sIDI1MCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZXRIaWRlQ29udGVudCh0cnVlKTtcclxuXHRcdFx0c2V0SW5wdXRUZXh0KCcnKTtcclxuXHRcdFx0c2V0RXJyb3IoJycpO1xyXG5cdFx0fVxyXG5cdFx0c2V0TW9kYWxWaXNpYmxlKCFtb2RhbFZpc2libGUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHRvZ2dsZUlucHV0QWN0aXZlID0gKCkgPT4ge1xyXG5cdFx0c2V0SW5wdXRBY3RpdmUoIWlucHV0QWN0aXZlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCB1cGRhdGVJbnB1dFRleHQgPSAoZSkgPT4ge1xyXG5cdFx0c2V0SW5wdXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCB1bnNoYXJlV29ya2Zsb3cgPSBhc3luYyAoZW1haWwpID0+IHtcclxuXHRcdGNvbnN0IHVuc2hhcmVSZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL3Vuc2hhcmUtd29ya2Zsb3cvJHtpZH1gLCB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0J0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0XHRBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBqd3RUb2tlblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcblx0XHRcdFx0ZW1haWxcclxuXHRcdFx0fSlcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IHVuc2hhcmVKc29uID0gYXdhaXQgdW5zaGFyZVJlcy5qc29uKCk7XHJcblxyXG5cdFx0aWYgKHVuc2hhcmVKc29uWydtc2cnXSA9PT0gJ1RoZSB1c2VyIGFuZCB0aGUgdXNlciBiZWluZyB1bnNoYXJlZCBhcmUgdGhlIHNhbWUuIFRoZXkgbXVzdCBiZSBkaWZmZXJlbnQuJykge1xyXG5cdFx0XHRzZXRFcnJvcignKipZb3UgY2Fubm90IHVuc2hhcmUgeW91cnNlbGYuJyk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRzZXRFcnJvcignJyk7XHJcblx0XHRhd2FpdCBnZXRQcm9maWxlSW1hZ2VzKCk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcblx0XHRcdFx0XHRbc3R5bGVzLnNoYXJlTW9kYWxOb3RWaXNpYmxlXTogdHJ1ZSxcclxuXHRcdFx0XHRcdFtzdHlsZXMuc2hhcmVNb2RhbFZpc2libGVdOiBtb2RhbFZpc2libGUsXHJcblx0XHRcdFx0XHRbc3R5bGVzLmNvbnRlbnRzSGlkZGVuXTogaGlkZUNvbnRlbnRcclxuXHRcdFx0XHR9KX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuXHRcdFx0XHRcdDxGb250QXdlc29tZUljb24gaWNvbj1cInVzZXItcGx1c1wiIGNsYXNzTmFtZT17c3R5bGVzLmFkZFVzZXJJY29ufSAvPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZ30+U2hhcmUgd2l0aCBPdGhlciBQZW9wbGU8L3NwYW4+XHJcblx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRTZWN0aW9ufT5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVJbnB1dEFjdGl2ZX1cclxuXHRcdFx0XHRcdFx0b25CbHVyPXt0b2dnbGVJbnB1dEFjdGl2ZX1cclxuXHRcdFx0XHRcdFx0dHlwZT1cImVtYWlsXCJcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuZW1haWxJbnB1dH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3VwZGF0ZUlucHV0VGV4dH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9e2lucHV0VGV4dH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcblx0XHRcdFx0XHRcdFx0W3N0eWxlcy5pbnB1dEJvcmRlckJvdHRvbV06IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0W3N0eWxlcy5pbnB1dEJvcmRlckJvdHRvbUFjdGl2ZV06IGlucHV0QWN0aXZlXHJcblx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7IFtzdHlsZXMuaG92ZXJMYWJlbF06IGlucHV0VGV4dCAhPT0gJycgfSl9PkFkZCBQZW9wbGU8L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PHAgY2xhc3NOYW1lPXtzdHlsZXMudXNlcnNIZWFkaW5nfT5DdXJyZW50IFVzZXJzPC9wPlxyXG5cdFx0XHRcdDx1bCBjbGFzc05hbWU9e3N0eWxlcy53b3JrZmxvd1VzZXJzTGlzdH0+XHJcblx0XHRcdFx0XHR7cHJvZmlsZUltYWdlc0luZm8ubWFwKChwcm9maWxlSW1hZ2VJbmZvLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8bGkga2V5PXtwcm9maWxlSW1hZ2VJbmZvWzBdfSBjbGFzc05hbWU9e3N0eWxlcy53b3JrZmxvd1VzZXJzfT5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17cHJvZmlsZUltYWdlSW5mb1sxXX0gY2xhc3NOYW1lPXtzdHlsZXMud29ya2Zsb3dVc2VyUHJvZmlsZUltYWdlfSAvPlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17c3R5bGVzLndvcmtmbG93VXNlckVtYWlsfT57cHJvZmlsZUltYWdlSW5mb1swXX08L3A+XHJcblx0XHRcdFx0XHRcdFx0e2luZGV4ICE9PSAwID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PEZvbnRBd2Vzb21lSWNvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy51bnNoYXJlQnRufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uPXsndGltZXMnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB1bnNoYXJlV29ya2Zsb3cocHJvZmlsZUltYWdlSW5mb1swXSl9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5vd25lcn0+KE93bmVyKTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcblx0XHRcdFx0XHQ8cD57ZXJyb3J9PC9wPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaGFyZUJ0bn0gb25DbGljaz17c2hhcmVXb3JrZmxvd30+XHJcblx0XHRcdFx0XHRcdERvbmVcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaGFyZUJ0bn0gb25DbGljaz17KCkgPT4gdG9nZ2xlTW9kYWwoKX0+XHJcblx0XHRcdFx0PEZvbnRBd2Vzb21lSWNvbiBpY29uPVwidXNlcnNcIiBjbGFzc05hbWU9e3N0eWxlcy5zaGFyZUljb259IC8+XHJcblx0XHRcdFx0PHA+U2hhcmU8L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0b25DbGljaz17dG9nZ2xlTW9kYWx9XHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc25hbWVzKHsgW3N0eWxlcy5iYWNrZHJvcE5vdFZpc2libGVdOiB0cnVlLCBbc3R5bGVzLmJhY2tkcm9wVmlzaWJsZV06IG1vZGFsVmlzaWJsZSB9KX1cclxuXHRcdFx0Lz5cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoYXJlO1xyXG4iLCJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9zY3NzL3dvcmtmbG93LWRlbGV0ZS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IFdvcmtmbG93RGVsZXRlQnRuID0gKHsgaWQgfSkgPT4ge1xyXG5cdGNvbnN0IGp3dFRva2VuID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5qd3RUb2tlbik7XHJcblxyXG5cdGNvbnN0IGRlbGV0ZVdvcmtmbG93ID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0YXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9kZWxldGUtd29ya2Zsb3cvJHtpZH1gLCB7XHJcblx0XHRcdG1ldGhvZDogJ0RFTEVURScsXHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIGp3dFRva2VuXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBSb3V0ZXIucHVzaCgnLy4uL2Rhc2hib2FyZC93b3JrZmxvd3MnKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9e3N0eWxlcy53b3JrZmxvd0RlbGV0ZUJ0bn1cclxuXHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdGRlbGV0ZVdvcmtmbG93KCk7XHJcblx0XHRcdH19XHJcblx0XHQ+XHJcblx0XHRcdDxGb250QXdlc29tZUljb24gaWNvbj1cInRyYXNoXCIgY2xhc3NOYW1lPXtzdHlsZXMudHJhc2hJY29ufSAvPlxyXG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVUZXh0fT5EZWxldGUgV29ya2Zsb3c8L3NwYW4+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ya2Zsb3dEZWxldGVCdG47XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3Njc3Mvd29ya2Zsb3ctZGVzY3JpcHRpb24ubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5jb25zdCBXb3JrZmxvd0Rlc2NyaXB0aW9uID0gKHsgb2xkRGVzY3JpcHRpb24sIGlkIH0pID0+IHtcclxuXHRjb25zdCBbIHNhbWVTZXNzaW9uT2xkRGVzY3JpcHRpb24sIHNldFNhbWVTZXNzaW9uT2xkRGVzY3JpcHRpb24gXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFsgZGVzY3JpcHRpb25DaGFuZ2VkLCBzZXREZXNjcmlwdGlvbkNoYW5nZWQgXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBqd3RUb2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuand0VG9rZW4pO1xyXG5cdGNvbnN0IGRlc2NUZXh0QXJlYSA9IHVzZVJlZihudWxsKTtcclxuXHJcblx0Y29uc3QgdXBkYXRlRGVzY1RvQmFja2VuZCA9IGFzeW5jICgpID0+IHtcclxuXHRcdGNvbnN0IG5ld0Rlc2NKc29uID0gSlNPTi5zdHJpbmdpZnkoe1xyXG5cdFx0XHRkZXNjcmlwdGlvbjogZGVzY1RleHRBcmVhLmN1cnJlbnQudmFsdWVcclxuXHRcdH0pO1xyXG5cdFx0YXdhaXQgZmV0Y2goYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9zZXQtd29ya2Zsb3ctZGVzY3JpcHRpb24vJHtpZH1gLCB7XHJcblx0XHRcdG1ldGhvZDogJ1BVVCcsXHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIGp3dFRva2VuXHJcblx0XHRcdH0sXHJcblx0XHRcdGJvZHk6IG5ld0Rlc2NKc29uXHJcblx0XHR9KTtcclxuXHRcdHNldERlc2NyaXB0aW9uQ2hhbmdlZChmYWxzZSk7XHJcblx0XHRzZXRTYW1lU2Vzc2lvbk9sZERlc2NyaXB0aW9uKGRlc2NUZXh0QXJlYS5jdXJyZW50LnZhbHVlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCB1cGRhdGVEZXNjID0gKCkgPT4ge1xyXG5cdFx0aWYgKCFzYW1lU2Vzc2lvbk9sZERlc2NyaXB0aW9uKSB7XHJcblx0XHRcdHNldERlc2NyaXB0aW9uQ2hhbmdlZChkZXNjVGV4dEFyZWEuY3VycmVudC52YWx1ZSAhPT0gb2xkRGVzY3JpcHRpb24pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2V0RGVzY3JpcHRpb25DaGFuZ2VkKGRlc2NUZXh0QXJlYS5jdXJyZW50LnZhbHVlICE9PSBzYW1lU2Vzc2lvbk9sZERlc2NyaXB0aW9uKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbkNvbnRhaW5lcn0+XHJcblx0XHRcdDxoMiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvblRpdGxlfT5EZXNjcmlwdGlvbjwvaDI+XHJcblx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdHJlZj17ZGVzY1RleHRBcmVhfVxyXG5cdFx0XHRcdG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259XHJcblx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtvbGREZXNjcmlwdGlvbn1cclxuXHRcdFx0XHRvbkNoYW5nZT17KCkgPT4gdXBkYXRlRGVzYygpfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8Rm9udEF3ZXNvbWVJY29uXHJcblx0XHRcdFx0aWNvbj17J2Fycm93LXJpZ2h0J31cclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzbmFtZXMoeyBbc3R5bGVzLnVwZGF0ZUljb25dOiB0cnVlLCBbc3R5bGVzLmRlc2NyaXB0aW9uQ2hhbmdlZF06IGRlc2NyaXB0aW9uQ2hhbmdlZCB9KX1cclxuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB1cGRhdGVEZXNjVG9CYWNrZW5kKCl9XHJcblx0XHRcdC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ya2Zsb3dEZXNjcmlwdGlvbjtcclxuIiwiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvc2Nzcy93b3JrZmxvdy1zdGFycmVkLWZpbmlzaGVkLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNvbnN0IFdvcmtmbG93U3RhcnJlZEFuZEZpbmlzaGVkID0gKHsgb2xkU3RhcnJlZCwgb2xkRmluaXNoZWQsIGlkIH0pID0+IHtcclxuXHRjb25zdCBbIHN0YXJyZWQsIHNldFN0YXJyZWQgXSA9IHVzZVN0YXRlKG9sZFN0YXJyZWQpO1xyXG5cdGNvbnN0IFsgZmluaXNoZWQsIHNldEZpbmlzaGVkIF0gPSB1c2VTdGF0ZShvbGRGaW5pc2hlZCk7XHJcblx0Y29uc3Qgand0VG9rZW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmp3dFRva2VuKTtcclxuXHJcblx0Y29uc3QgdG9nZ2xlU3RhcnJlZCA9IGFzeW5jICgpID0+IHtcclxuXHRcdHNldFN0YXJyZWQoIXN0YXJyZWQpO1xyXG5cdFx0YXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC90b2dnbGUtd29ya2Zsb3ctc3RhcnJlZC8ke2lkfWAsIHtcclxuXHRcdFx0bWV0aG9kOiAnUFVUJyxcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgand0VG9rZW5cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHRjb25zdCB0b2dnbGVGaW5pc2hlZCA9IGFzeW5jICgpID0+IHtcclxuXHRcdHNldEZpbmlzaGVkKCFmaW5pc2hlZCk7XHJcblx0XHRhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL3RvZ2dsZS13b3JrZmxvdy1maW5pc2hlZC8ke2lkfWAsIHtcclxuXHRcdFx0bWV0aG9kOiAnUFVUJyxcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgand0VG9rZW5cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0PEZvbnRBd2Vzb21lSWNvblxyXG5cdFx0XHRcdGljb249XCJzdGFyXCJcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzbmFtZXMoeyBbc3R5bGVzLnJlZ3VsYXJdOiB0cnVlLCBbc3R5bGVzLnN0YXJyZWRdOiBzdGFycmVkIH0pfVxyXG5cdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZVN0YXJyZWR9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxGb250QXdlc29tZUljb25cclxuXHRcdFx0XHRpY29uPVwiY2hlY2tcIlxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7IFtzdHlsZXMucmVndWxhcl06IHRydWUsIFtzdHlsZXMuZmluaXNoZWRdOiBmaW5pc2hlZCB9KX1cclxuXHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVGaW5pc2hlZH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtmbG93U3RhcnJlZEFuZEZpbmlzaGVkO1xyXG4iLCJpbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3Njc3Mvd29ya2Zsb3ctdGl0bGUubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNvbnN0IFdvcmtmbG93VGl0bGUgPSAoeyBvbGRUaXRsZSwgaWQgfSkgPT4ge1xyXG5cdGNvbnN0IHRpdGxlSW5wdXQgPSB1c2VSZWYobnVsbCk7XHJcblx0Y29uc3Qgand0VG9rZW4gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmp3dFRva2VuKTtcclxuXHRjb25zdCBpbnB1dExlbmd0aE11bHRpcGxpZXIgPSAxODtcclxuXHJcblx0Y29uc3QgcHVzaFRpdGxlQ2hhbmdlVG9CYWNrZW5kID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0YXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9zZXQtd29ya2Zsb3ctdGl0bGUvJHtpZH1gLCB7XHJcblx0XHRcdG1ldGhvZDogJ1BVVCcsXHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIGp3dFRva2VuXHJcblx0XHRcdH0sXHJcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuXHRcdFx0XHR0aXRsZTogdGl0bGVJbnB1dC5jdXJyZW50LmlubmVyVGV4dFxyXG5cdFx0XHR9KVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0aWYgKHRpdGxlSW5wdXQuY3VycmVudC5pbm5lcnRUZXh0ICE9PSBvbGRUaXRsZSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnY2hhbmdpbmcnKTtcclxuXHRcdFx0YXdhaXQgcHVzaFRpdGxlQ2hhbmdlVG9CYWNrZW5kKCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxoMlxyXG5cdFx0XHRjb250ZW50RWRpdGFibGU9eydwbGFpbnRleHQtb25seSd9XHJcblx0XHRcdHJlZj17dGl0bGVJbnB1dH1cclxuXHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMudGl0bGVJbnB1dH1cclxuXHRcdFx0b25CbHVyPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdHNwZWxsQ2hlY2s9eydmYWxzZSd9XHJcblx0XHQ+XHJcblx0XHRcdHtvbGRUaXRsZX1cclxuXHRcdDwvaDI+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtmbG93VGl0bGU7XHJcbiIsImNvbnN0IHNldEp3dCA9IChqd3QpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1NFVF9KV1QnLFxyXG5cdFx0cGF5bG9hZDogand0XHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCB7IHNldEp3dCB9O1xyXG4iLCJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9zY3NzL2ZpbGUtdXBsb2FkLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNvbnN0IEFkZEZpbGUgPSAoeyBmaWxlVHlwZSwgaWQsIHVwZGF0ZUZpbGVDb2xsZWN0aW9ucyB9KSA9PiB7XHJcblx0Y29uc3QgZmlsZUlucHV0ID0gdXNlUmVmKG51bGwpO1xyXG5cdGNvbnN0IGZpbGVGb3JtID0gdXNlUmVmKG51bGwpO1xyXG5cclxuXHRjb25zdCBqd3RUb2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuand0VG9rZW4pO1xyXG5cdGNvbnN0IHN1Ym1pdEZpbGUgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmaWxlRm9ybS5jdXJyZW50KTtcclxuXHRcdGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwMDAvdXBsb2FkLWZpbGUvJHtpZH0vJHtmaWxlVHlwZX1gLCB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgand0VG9rZW5cclxuXHRcdFx0fSxcclxuXHRcdFx0Ym9keTogZm9ybURhdGFcclxuXHRcdH0pO1xyXG5cclxuXHRcdGF3YWl0IHVwZGF0ZUZpbGVDb2xsZWN0aW9ucyhmaWxlVHlwZSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsZVVwbG9hZENvbnRhaW5lcn0+XHJcblx0XHRcdDxGb250QXdlc29tZUljb24gaWNvbj17J3BsdXMtY2lyY2xlJ30gY2xhc3NOYW1lPXtzdHlsZXMuZmlsZVVwbG9hZH0gLz5cclxuXHRcdFx0PGZvcm0gcmVmPXtmaWxlRm9ybX0gZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdHJlZj17ZmlsZUlucHV0fVxyXG5cdFx0XHRcdFx0dHlwZT1cImZpbGVcIlxyXG5cdFx0XHRcdFx0YWNjZXB0PXtgJHtmaWxlVHlwZX0vKmB9XHJcblx0XHRcdFx0XHRuYW1lPVwiZmlsZVwiXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5maWxlSW5wdXR9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRzdWJtaXRGaWxlKCk7XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRGaWxlO1xyXG4iLCJpbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb29raWUocmVxKSB7XHJcblx0cmV0dXJuIGNvb2tpZS5wYXJzZShyZXEgPyByZXEuaGVhZGVycy5jb29raWUgfHwgJycgOiBkb2N1bWVudC5jb29raWUpO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IERhc2hib2FyZE1lbnUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EYXNoYm9hcmRNZW51JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvc2Nzcy93b3JrbG93X2VkaXRvci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGFyc2VDb29raWUnO1xyXG5pbXBvcnQgV29ya2Zsb3dEZXNjcmlwdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1dvcmtmbG93RGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgQWRkRmlsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2FkZEZpbGUnO1xyXG5pbXBvcnQgU2hhcmUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TaGFyZSc7XHJcbmltcG9ydCBXb3JrZmxvd1RpdGxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvV29ya2Zsb3dUaXRsZSc7XHJcbmltcG9ydCBXb3JrZmxvd1N0YXJyZWRBbmRGaW5pc2hlZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1dvcmtmbG93U3RhcnJlZEFuZEZpbmlzaGVkJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IFdvcmtmbG93RGVsZXRlQnRuIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvV29ya2Zsb3dEZWxldGVCdG4nO1xyXG5cclxuY29uc3QgV29ya2Zsb3cgPSAocHJvcHMpID0+IHtcclxuXHRjb25zdCBqd3RUb2tlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuand0VG9rZW4pO1xyXG5cclxuXHRjb25zdCBbIGF1ZGlvVXJscywgc2V0QXVkaW9VcmxzIF0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgWyBpbWFnZVVybHMsIHNldEltYWdlVXJscyBdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFsgdGh1bWJuYWlsVXJscywgc2V0VGh1bWJuYWlsVXJscyBdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFsgdmlkZW9VcmxzLCBzZXRWaWRlb1VybHMgXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbIGRlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbiBdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgWyB0aXRsZSwgc2V0VGl0bGUgXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFsgc3RhcnJlZCwgc2V0U3RhcnJlZCBdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgWyBmaW5pc2hlZCwgc2V0RmluaXNoZWQgXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFsgZmV0Y2hlZCwgc2V0RmV0Y2hlZCBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IGlkID0gcHJvcHMuaWQ7XHJcblx0Y29uc3QgWyBjcmVhdG9yLCBzZXRDcmVhdG9yIF0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgWyBvdGhlclVzZXJzLCBzZXRPdGhlclVzZXJzIF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcblx0XHRcdGNvbnN0IHdvcmtmbG93SW5mb1JlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvZ2V0LXdvcmtmbG93LyR7aWR9YCwge1xyXG5cdFx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7and0VG9rZW59YFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdGNvbnN0IHdvcmtmbG93SW5mb0pzb24gPSBhd2FpdCB3b3JrZmxvd0luZm9SZXMuanNvbigpO1xyXG5cdFx0XHRjb25zdCB3b3JrZmxvd0luZm8gPSB3b3JrZmxvd0luZm9Kc29uWyd3b3JrZmxvdyddO1xyXG5cdFx0XHRzZXREZXNjcmlwdGlvbih3b3JrZmxvd0luZm8uZGVzY3JpcHRpb24pO1xyXG5cdFx0XHRzZXRUaXRsZSh3b3JrZmxvd0luZm8udGl0bGUpO1xyXG5cdFx0XHRzZXRTdGFycmVkKHdvcmtmbG93SW5mby5zdGFycmVkKTtcclxuXHRcdFx0c2V0RmluaXNoZWQod29ya2Zsb3dJbmZvLmZpbmlzaGVkKTtcclxuXHRcdFx0c2V0T3RoZXJVc2Vycyh3b3JrZmxvd0luZm9bJ290aGVyX3VzZXJzJ10pO1xyXG5cdFx0XHRzZXRDcmVhdG9yKHdvcmtmbG93SW5mb0pzb24uY3JlYXRvcik7XHJcblx0XHRcdGNvbnN0IHdvcmtmbG93RmlsZXNSZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2dldC13b3JrZmxvdy1maWxlcy8ke2lkfWAsIHtcclxuXHRcdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke2p3dFRva2VufWBcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjb25zdCBmaWxlc0pzb24gPSBhd2FpdCB3b3JrZmxvd0ZpbGVzUmVzLmpzb24oKTtcclxuXHRcdFx0Y29uc3QgZmlsZVVybHNKc29uID0gZmlsZXNKc29uWyd3b3JrZmxvdy1maWxlLXVybHMnXTtcclxuXHRcdFx0c2V0QXVkaW9VcmxzKGZpbGVVcmxzSnNvblsnYXVkaW8nXSk7XHJcblx0XHRcdHNldEltYWdlVXJscyhmaWxlVXJsc0pzb25bJ2ltYWdlJ10pO1xyXG5cdFx0XHRzZXRWaWRlb1VybHMoZmlsZVVybHNKc29uWyd2aWRlbyddKTtcclxuXHRcdFx0c2V0VGh1bWJuYWlsVXJscyhmaWxlVXJsc0pzb25bJ3RodW1ibmFpbCddKTtcclxuXHRcdFx0c2V0RmV0Y2hlZCh0cnVlKTtcclxuXHRcdH1cclxuXHRcdGZldGNoRGF0YSgpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3QgdXBkYXRlRmlsZUNvbGxlY3Rpb25zID0gYXN5bmMgKGZpbGVUeXBlKSA9PiB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2dldC13b3JrZmxvdy1maWxlcy8ke2lkfS8ke2ZpbGVUeXBlfWAsIHtcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgand0VG9rZW5cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRjb25zdCByZXNKc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHRcdGNvbnN0IHVybHMgPSByZXNKc29uWyd3b3JrZmxvdy1zcGVjaWZpYy11cmxzJ107XHJcblx0XHRzd2l0Y2ggKGZpbGVUeXBlKSB7XHJcblx0XHRcdGNhc2UgJ2ltYWdlJzpcclxuXHRcdFx0XHRzZXRJbWFnZVVybHModXJscyk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ3ZpZGVvJzpcclxuXHRcdFx0XHRzZXRWaWRlb1VybHModXJscyk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ3RodW1ibmFpbCc6XHJcblx0XHRcdFx0c2V0VGh1bWJuYWlsVXJscyh1cmxzKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnYXVkaW8nOlxyXG5cdFx0XHRcdHNldEF1ZGlvVXJscyh1cmxzKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBkZWxldGVGaWxlID0gYXN5bmMgKHVybCwgZmlsZVR5cGUpID0+IHtcclxuXHRcdGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgZmlsZT8nKSkge1xyXG5cdFx0XHRjb25zdCBmaWxlUGFydHMgPSB1cmwuc3BsaXQoJy8nKTtcclxuXHRcdFx0Y29uc3QgZmlsZU5hbWUgPSBmaWxlUGFydHNbZmlsZVBhcnRzLmxlbmd0aCAtIDFdO1xyXG5cdFx0XHRhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2RlbGV0ZS1maWxlLyR7aWR9LyR7ZmlsZVR5cGV9YCwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ0RFTEVURScsXHJcblx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIGp3dFRva2VuXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcblx0XHRcdFx0XHRmaWxlX25hbWU6IGZpbGVOYW1lXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSk7XHJcblx0XHRcdGF3YWl0IHVwZGF0ZUZpbGVDb2xsZWN0aW9ucyhmaWxlVHlwZSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgcGFnZUluZm8gPSAoKSA9PiB7XHJcblx0XHRpZiAoIWZldGNoZWQpIHtcclxuXHRcdFx0cmV0dXJuIDxkaXY+RmV0Y2hpbmc8L2Rpdj47XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud29ya2Zsb3dIZWFkZXJJbmZvfT5cclxuXHRcdFx0XHRcdFx0XHQ8V29ya2Zsb3dUaXRsZSBvbGRUaXRsZT17dGl0bGV9IGlkPXtpZH0gLz5cclxuXHRcdFx0XHRcdFx0XHQ8V29ya2Zsb3dTdGFycmVkQW5kRmluaXNoZWQgb2xkU3RhcnJlZD17c3RhcnJlZH0gb2xkRmluaXNoZWQ9e2ZpbmlzaGVkfSBpZD17aWR9IC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8U2hhcmUgaWQ9e2lkfSAvPlxyXG5cdFx0XHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VzfT5cclxuXHRcdFx0XHRcdFx0XHQ8aDI+VGh1bWJuYWlsczwvaDI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0e3RodW1ibmFpbFVybHMubWFwKCh0aHVtYm5haWxVcmwpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbGVDb250YWluZXJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e3RodW1ibmFpbFVybH0gY2xhc3NOYW1lPXtzdHlsZXMud29ya2Zsb3dJbWFnZX0gLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxGb250QXdlc29tZUljb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cInRyYXNoXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlSWNvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZGVsZXRlRmlsZSh0aHVtYm5haWxVcmwsICd0aHVtYm5haWwnKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdFx0XHRcdDxBZGRGaWxlIGZpbGVUeXBlPXsndGh1bWJuYWlsJ30gaWQ9e2lkfSB1cGRhdGVGaWxlQ29sbGVjdGlvbnM9e3VwZGF0ZUZpbGVDb2xsZWN0aW9uc30gLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlc30+XHJcblx0XHRcdFx0XHRcdFx0PGgyPkltYWdlczwvaDI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0e2ltYWdlVXJscy5tYXAoKGltYWdlVXJsKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWxlQ29udGFpbmVyfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtpbWFnZVVybH0gY2xhc3NOYW1lPXtzdHlsZXMud29ya2Zsb3dJbWFnZX0gLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxGb250QXdlc29tZUljb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cInRyYXNoXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlSWNvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZGVsZXRlRmlsZShpbWFnZVVybCwgJ2ltYWdlJyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHRcdFx0XHQ8QWRkRmlsZSBmaWxlVHlwZT17J2ltYWdlJ30gaWQ9e2lkfSB1cGRhdGVGaWxlQ29sbGVjdGlvbnM9e3VwZGF0ZUZpbGVDb2xsZWN0aW9uc30gLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXVkaW9zfT5cclxuXHRcdFx0XHRcdFx0XHQ8aDI+QXVkaW88L2gyPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuXHRcdFx0XHRcdFx0XHRcdHthdWRpb1VybHMubWFwKChhdWRpb1VybCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBkb3RQYXJ0cyA9IGF1ZGlvVXJsLnNwbGl0KCcuJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IG1pbWVUeXBlID0gZG90UGFydHNbZG90UGFydHMubGVuZ3RoIC0gMV07XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0W3N0eWxlcy5maWxlQ29udGFpbmVyXTogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0W3N0eWxlcy5hdWRpb0ZpbGVDb250YWluZXJdOiB0cnVlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YXVkaW8ga2V5PXthdWRpb1VybH0gY29udHJvbHM+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzb3VyY2Ugc3JjPXthdWRpb1VybH0gdHlwZT17YGF1ZGlvLyR7bWltZVR5cGV9YH0gLz47XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2F1ZGlvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvbnRBd2Vzb21lSWNvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwidHJhc2hcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVJY29ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBkZWxldGVGaWxlKGF1ZGlvVXJsLCAnYXVkaW8nKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdFx0XHRcdDxBZGRGaWxlIGZpbGVUeXBlPXsnYXVkaW8nfSBpZD17aWR9IHVwZGF0ZUZpbGVDb2xsZWN0aW9ucz17dXBkYXRlRmlsZUNvbGxlY3Rpb25zfSAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWRlb3N9PlxyXG5cdFx0XHRcdFx0XHRcdDxoMj5WaWRlb3M8L2gyPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuXHRcdFx0XHRcdFx0XHRcdHt2aWRlb1VybHMubWFwKCh2aWRlb1VybCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBkb3RQYXJ0cyA9IHZpZGVvVXJsLnNwbGl0KCcuJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IG1pbWVUeXBlID0gZG90UGFydHNbZG90UGFydHMubGVuZ3RoIC0gMV07XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChtaW1lVHlwZSAhPT0gJ21vdicpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWxlQ29udGFpbmVyfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZGVvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXt2aWRlb1VybH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy53b3JrZmxvd1ZpZGVvfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPVwiMzIwXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9XCIyNDBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnRyb2xzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c291cmNlIHNyYz17dmlkZW9Vcmx9IHR5cGU9e2B2aWRlby8ke21pbWVUeXBlfWB9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlkZW8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxGb250QXdlc29tZUljb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwidHJhc2hcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZUljb259XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZGVsZXRlRmlsZSh2aWRlb1VybCwgJ3ZpZGVvJyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8UmVhY3QuRnJhZ21lbnQgLz47XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0PEFkZEZpbGUgZmlsZVR5cGU9eyd2aWRlbyd9IGlkPXtpZH0gdXBkYXRlRmlsZUNvbGxlY3Rpb25zPXt1cGRhdGVGaWxlQ29sbGVjdGlvbnN9IC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8V29ya2Zsb3dEZXNjcmlwdGlvbiBvbGREZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IGlkPXtpZH0gLz5cclxuXHRcdFx0XHRcdFx0PFdvcmtmbG93RGVsZXRlQnRuIGlkPXtpZH0gLz5cclxuXHRcdFx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIGNvbnNvbGUubG9nKCdoaScpO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy53b3JrZmxvd0VkaXRvckNvbnRhaW5lcn0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGFzaGJvYXJkTWVudUNvbnRhaW5lcn0+XHJcblx0XHRcdFx0PERhc2hib2FyZE1lbnUgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdG9yfT57cGFnZUluZm8oKX08L2Rpdj5cclxuXHRcdDwvbWFpbj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtcyB9KSB7XHJcblx0Ly8gY29uc29sZS5sb2cocGFyYW1zLmlkKTtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0aWQ6IHBhcmFtcy5pZFxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUGF0aHMoeyByZXEgfSkge1xyXG5cdGNvbnN0IGNvb2tpZXMgPSBwYXJzZUNvb2tpZShyZXEpO1xyXG5cdGNvbnN0IG9yaWdXb3JrZmxvd3NSZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2dldC13b3JrZmxvdy1pZHMnLCB7XHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdEF1dGhvcml6YXRpb246IGNvb2tpZXMuand0XHJcblx0XHR9XHJcblx0fSk7XHJcblx0Y29uc3Qgb3JpZ1dvcmtmbG93c0pzb24gPSBvcmlnV29ya2Zsb3dzUmVzLmpzb24oKTtcclxuXHRjb25zdCB3b3JrZmxvd0lkcyA9IG9yaWdXb3JrZmxvd3NKc29uWyd3b3JrZmxvdy1pZHMnXTtcclxuXHJcblx0Y29uc3QgcGF0aHMgPSB3b3JrZmxvd0lkcy5tYXAoKHdvcmtmbG93SWQpID0+IHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdGlkOiB3b3JrZmxvd0lkLnRvU3RyaW5nKClcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9KTtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cGF0aHMsXHJcblx0XHRmYWxsYmFjazogZmFsc2VcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JrZmxvdztcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWVudUl0ZW1MaW5rXCI6IFwiZGFzaGJvYXJkLW1lbnUtaXRlbV9tZW51SXRlbUxpbmtfXzFkYmEyXCIsXG5cdFwibWVudUl0ZW1Db250YWluZXJcIjogXCJkYXNoYm9hcmQtbWVudS1pdGVtX21lbnVJdGVtQ29udGFpbmVyX194RV9pclwiLFxuXHRcIm1lbnVJdGVtSW5mb1wiOiBcImRhc2hib2FyZC1tZW51LWl0ZW1fbWVudUl0ZW1JbmZvX18zSk9kS1wiLFxuXHRcImljb25Db250YWluZXJcIjogXCJkYXNoYm9hcmQtbWVudS1pdGVtX2ljb25Db250YWluZXJfXzJCZUVmXCIsXG5cdFwiaWNvbkNvbnRhaW5lckFjdGl2ZVwiOiBcImRhc2hib2FyZC1tZW51LWl0ZW1faWNvbkNvbnRhaW5lckFjdGl2ZV9fMXEzd1FcIixcblx0XCJtZW51VGl0bGVcIjogXCJkYXNoYm9hcmQtbWVudS1pdGVtX21lbnVUaXRsZV9fMUV2NENcIixcblx0XCJhY3RpdmVDaXJjbGVcIjogXCJkYXNoYm9hcmQtbWVudS1pdGVtX2FjdGl2ZUNpcmNsZV9fUjJpUFFcIixcblx0XCJhY3RpdmVcIjogXCJkYXNoYm9hcmQtbWVudS1pdGVtX2FjdGl2ZV9fMnpyM0tcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRvZ2dsZUljb25cIjogXCJkYXNoYm9hcmQtbWVudV90b2dnbGVJY29uX18zSHBtR1wiLFxuXHRcImRhc2hib2FyZE1lbnVDb250YWluZXJcIjogXCJkYXNoYm9hcmQtbWVudV9kYXNoYm9hcmRNZW51Q29udGFpbmVyX19zMmlWWFwiLFxuXHRcImRpdlByb2ZpbGVcIjogXCJkYXNoYm9hcmQtbWVudV9kaXZQcm9maWxlX18zaVQxYlwiLFxuXHRcImRhc2hib2FyZE1lbnVJdGVtc1wiOiBcImRhc2hib2FyZC1tZW51X2Rhc2hib2FyZE1lbnVJdGVtc19fM3dsczhcIixcblx0XCJsb2dvdXRcIjogXCJkYXNoYm9hcmQtbWVudV9sb2dvdXRfXzIyNjhUXCIsXG5cdFwiaGlkZU1lbnVJdGVtc1wiOiBcImRhc2hib2FyZC1tZW51X2hpZGVNZW51SXRlbXNfX2tINzJoXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmaWxlVXBsb2FkQ29udGFpbmVyXCI6IFwiZmlsZS11cGxvYWRfZmlsZVVwbG9hZENvbnRhaW5lcl9fMXpkLWVcIixcblx0XCJmaWxlVXBsb2FkXCI6IFwiZmlsZS11cGxvYWRfZmlsZVVwbG9hZF9fbEtiV09cIixcblx0XCJmaWxlSW5wdXRcIjogXCJmaWxlLXVwbG9hZF9maWxlSW5wdXRfXzJBTDNyXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwcm9maWxlQ29udGFpbmVyXCI6IFwicHJvZmlsZV9wcm9maWxlQ29udGFpbmVyX19US2YtUVwiLFxuXHRcImltYWdlU2VjdGlvblwiOiBcInByb2ZpbGVfaW1hZ2VTZWN0aW9uX18xeFQwYlwiLFxuXHRcInByb2ZpbGVJbWFnZVwiOiBcInByb2ZpbGVfcHJvZmlsZUltYWdlX18yVThBSlwiLFxuXHRcImlucHV0U2VjdGlvblwiOiBcInByb2ZpbGVfaW5wdXRTZWN0aW9uX195dVQ5U1wiLFxuXHRcImVkaXRJY29uXCI6IFwicHJvZmlsZV9lZGl0SWNvbl9fM2NuV21cIixcblx0XCJwcm9maWxlSW1hZ2VJbnB1dFwiOiBcInByb2ZpbGVfcHJvZmlsZUltYWdlSW5wdXRfXzM4SE03XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzaGFyZUJ0blwiOiBcInNoYXJlX3NoYXJlQnRuX18xYlpyZ1wiLFxuXHRcInNoYXJlSWNvblwiOiBcInNoYXJlX3NoYXJlSWNvbl9fb3BpdEhcIixcblx0XCJzaGFyZU1vZGFsTm90VmlzaWJsZVwiOiBcInNoYXJlX3NoYXJlTW9kYWxOb3RWaXNpYmxlX18zS0Z2QlwiLFxuXHRcInRpdGxlXCI6IFwic2hhcmVfdGl0bGVfX3pabjd1XCIsXG5cdFwiYWRkVXNlckljb25cIjogXCJzaGFyZV9hZGRVc2VySWNvbl9fMmdhYzlcIixcblx0XCJoZWFkaW5nXCI6IFwic2hhcmVfaGVhZGluZ19fMURMalNcIixcblx0XCJpbnB1dFNlY3Rpb25cIjogXCJzaGFyZV9pbnB1dFNlY3Rpb25fXzJISzRKXCIsXG5cdFwiZW1haWxJbnB1dFwiOiBcInNoYXJlX2VtYWlsSW5wdXRfXzJhWjhJXCIsXG5cdFwiaW5wdXRCb3JkZXJCb3R0b21cIjogXCJzaGFyZV9pbnB1dEJvcmRlckJvdHRvbV9fMjQtOHVcIixcblx0XCJpbnB1dEJvcmRlckJvdHRvbUFjdGl2ZVwiOiBcInNoYXJlX2lucHV0Qm9yZGVyQm90dG9tQWN0aXZlX18zQk9SR1wiLFxuXHRcImhvdmVyTGFiZWxcIjogXCJzaGFyZV9ob3ZlckxhYmVsX18zZzc0R1wiLFxuXHRcInVzZXJzSGVhZGluZ1wiOiBcInNoYXJlX3VzZXJzSGVhZGluZ19faXFjdXNcIixcblx0XCJjb250ZW50c0hpZGRlblwiOiBcInNoYXJlX2NvbnRlbnRzSGlkZGVuX18xYU13WFwiLFxuXHRcInNoYXJlTW9kYWxWaXNpYmxlXCI6IFwic2hhcmVfc2hhcmVNb2RhbFZpc2libGVfXzJId1RMXCIsXG5cdFwid29ya2Zsb3dVc2Vyc0xpc3RcIjogXCJzaGFyZV93b3JrZmxvd1VzZXJzTGlzdF9fMUJfVjVcIixcblx0XCJ3b3JrZmxvd1VzZXJzXCI6IFwic2hhcmVfd29ya2Zsb3dVc2Vyc19fMzd6SmVcIixcblx0XCJ3b3JrZmxvd1VzZXJQcm9maWxlSW1hZ2VcIjogXCJzaGFyZV93b3JrZmxvd1VzZXJQcm9maWxlSW1hZ2VfXzFQWnBQXCIsXG5cdFwid29ya2Zsb3dVc2VyRW1haWxcIjogXCJzaGFyZV93b3JrZmxvd1VzZXJFbWFpbF9fUUtScTVcIixcblx0XCJvd25lclwiOiBcInNoYXJlX293bmVyX185RjhpclwiLFxuXHRcInVuc2hhcmVCdG5cIjogXCJzaGFyZV91bnNoYXJlQnRuX18zWmJXU1wiLFxuXHRcImZvb3RlclwiOiBcInNoYXJlX2Zvb3Rlcl9fcEJTUmVcIixcblx0XCJiYWNrZHJvcE5vdFZpc2libGVcIjogXCJzaGFyZV9iYWNrZHJvcE5vdFZpc2libGVfXzE4bkpVXCIsXG5cdFwiYmFja2Ryb3BWaXNpYmxlXCI6IFwic2hhcmVfYmFja2Ryb3BWaXNpYmxlX18zc1JweVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid29ya2Zsb3dEZWxldGVCdG5cIjogXCJ3b3JrZmxvdy1kZWxldGVfd29ya2Zsb3dEZWxldGVCdG5fXzIwNXp4XCIsXG5cdFwidHJhc2hJY29uXCI6IFwid29ya2Zsb3ctZGVsZXRlX3RyYXNoSWNvbl9fanpxRVFcIixcblx0XCJkZWxldGVUZXh0XCI6IFwid29ya2Zsb3ctZGVsZXRlX2RlbGV0ZVRleHRfXzZuZWJ5XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJkZXNjcmlwdGlvbkNvbnRhaW5lclwiOiBcIndvcmtmbG93LWRlc2NyaXB0aW9uX2Rlc2NyaXB0aW9uQ29udGFpbmVyX18yaVlEV1wiLFxuXHRcImRlc2NyaXB0aW9uVGl0bGVcIjogXCJ3b3JrZmxvdy1kZXNjcmlwdGlvbl9kZXNjcmlwdGlvblRpdGxlX18xTHhnWVwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwid29ya2Zsb3ctZGVzY3JpcHRpb25fZGVzY3JpcHRpb25fX2VxWXRrXCIsXG5cdFwidXBkYXRlSWNvblwiOiBcIndvcmtmbG93LWRlc2NyaXB0aW9uX3VwZGF0ZUljb25fXzI3N3ZVXCIsXG5cdFwiZGVzY3JpcHRpb25DaGFuZ2VkXCI6IFwid29ya2Zsb3ctZGVzY3JpcHRpb25fZGVzY3JpcHRpb25DaGFuZ2VkX18zNnJlSFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicmVndWxhclwiOiBcIndvcmtmbG93LXN0YXJyZWQtZmluaXNoZWRfcmVndWxhcl9fMkthOXFcIixcblx0XCJzdGFycmVkXCI6IFwid29ya2Zsb3ctc3RhcnJlZC1maW5pc2hlZF9zdGFycmVkX18zQ2ZhSlwiLFxuXHRcImZpbmlzaGVkXCI6IFwid29ya2Zsb3ctc3RhcnJlZC1maW5pc2hlZF9maW5pc2hlZF9fM1ZSSElcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRpdGxlSW5wdXRcIjogXCJ3b3JrZmxvdy10aXRsZV90aXRsZUlucHV0X18yTWhITVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid29ya2Zsb3dFZGl0b3JDb250YWluZXJcIjogXCJ3b3JrbG93X2VkaXRvcl93b3JrZmxvd0VkaXRvckNvbnRhaW5lcl9fMVppWVdcIixcblx0XCJkYXNoYm9hcmRNZW51Q29udGFpbmVyXCI6IFwid29ya2xvd19lZGl0b3JfZGFzaGJvYXJkTWVudUNvbnRhaW5lcl9fMklzUU5cIixcblx0XCJlZGl0b3JcIjogXCJ3b3JrbG93X2VkaXRvcl9lZGl0b3JfX3FDQzNQXCIsXG5cdFwiaGVhZGVyXCI6IFwid29ya2xvd19lZGl0b3JfaGVhZGVyX18ybjZjU1wiLFxuXHRcIndvcmtmbG93SGVhZGVySW5mb1wiOiBcIndvcmtsb3dfZWRpdG9yX3dvcmtmbG93SGVhZGVySW5mb19fMnpSY2tcIixcblx0XCJjb250ZW50XCI6IFwid29ya2xvd19lZGl0b3JfY29udGVudF9fMkRMNWVcIixcblx0XCJmaWxlQ29udGFpbmVyXCI6IFwid29ya2xvd19lZGl0b3JfZmlsZUNvbnRhaW5lcl9fMnFRT0FcIixcblx0XCJkZWxldGVJY29uXCI6IFwid29ya2xvd19lZGl0b3JfZGVsZXRlSWNvbl9fWjNfNldcIixcblx0XCJjb250YWluZXJcIjogXCJ3b3JrbG93X2VkaXRvcl9jb250YWluZXJfX3B6blVEXCIsXG5cdFwiaW1hZ2VzXCI6IFwid29ya2xvd19lZGl0b3JfaW1hZ2VzX18xaDU0VFwiLFxuXHRcIndvcmtmbG93SW1hZ2VcIjogXCJ3b3JrbG93X2VkaXRvcl93b3JrZmxvd0ltYWdlX18xX3VBU1wiLFxuXHRcImF1ZGlvc1wiOiBcIndvcmtsb3dfZWRpdG9yX2F1ZGlvc19fMjZhOElcIixcblx0XCJhdWRpb0ZpbGVDb250YWluZXJcIjogXCJ3b3JrbG93X2VkaXRvcl9hdWRpb0ZpbGVDb250YWluZXJfXzE2Qk9FXCIsXG5cdFwidmlkZW9zXCI6IFwid29ya2xvd19lZGl0b3JfdmlkZW9zX18yeFNKdFwiLFxuXHRcIndvcmtmbG93VmlkZW9cIjogXCJ3b3JrbG93X2VkaXRvcl93b3JrZmxvd1ZpZGVvX19iVkZWTVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBoYXBpL2pvaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==