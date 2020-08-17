webpackHotUpdate("static\\development\\pages\\dashboard\\workflows.js",{

/***/ "./components/WorkflowItem.js":
/*!************************************!*\
  !*** ./components/WorkflowItem.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss_workflow_item_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/scss/workflow-item.module.scss */ "./styles/scss/workflow-item.module.scss");
/* harmony import */ var _styles_scss_workflow_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_workflow_item_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "C:\\Sarthak\\YT_Workflow_Cloud\\client\\components\\WorkflowItem.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var WorkflowItem = function WorkflowItem(_ref) {
  _s();

  var _classnames;

  var workflow = _ref.workflow,
      id = _ref.id;
  var maxTitleLengthBeforeCutoff = 15;
  var maxDescriptionLengthBeforeCutoff = 30;
  var profileImage = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.profileImage;
  });
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classnames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_scss_workflow_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.workflowContainer, true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_scss_workflow_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.workflowFinished, workflow['finished']), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_scss_workflow_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.important, workflow['starred'] && !workflow.finished), _classnames)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 3
    }
  }, __jsx("h2", {
    className: _styles_scss_workflow_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.workflowTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }
  }, workflow.title.length > maxTitleLengthBeforeCutoff ? workflow.title.slice(0, maxTitleLengthBeforeCutoff) + '...' : workflow.title), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }
  }, workflow.description.length > maxDescriptionLengthBeforeCutoff ? workflow.description.slice(0, maxDescriptionLengthBeforeCutoff) + '...' : workflow.description), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: _styles_scss_workflow_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.workflowUsers,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: _styles_scss_workflow_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.workflowExtraInfo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx("h3", {
    className: _styles_scss_workflow_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.workflowCreated,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 6
    }
  }, workflow.created_at.slice(0, 10)), __jsx("div", {
    className: _styles_scss_workflow_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.workflowStatusIcons,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 6
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_scss_workflow_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.starred, workflow.starred)),
    icon: "star",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_scss_workflow_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.finished, workflow.finished)),
    icon: "check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  })))));
};

_s(WorkflowItem, "+/AfnPZPtBS3VRCj1XZfGBF1KOI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = WorkflowItem;
/* harmony default export */ __webpack_exports__["default"] = (WorkflowItem);

var _c;

$RefreshReg$(_c, "WorkflowItem");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dvcmtmbG93SXRlbS5qcyJdLCJuYW1lcyI6WyJXb3JrZmxvd0l0ZW0iLCJ3b3JrZmxvdyIsImlkIiwibWF4VGl0bGVMZW5ndGhCZWZvcmVDdXRvZmYiLCJtYXhEZXNjcmlwdGlvbkxlbmd0aEJlZm9yZUN1dG9mZiIsInByb2ZpbGVJbWFnZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJjbGFzc25hbWVzIiwic3R5bGVzIiwid29ya2Zsb3dDb250YWluZXIiLCJ3b3JrZmxvd0ZpbmlzaGVkIiwiaW1wb3J0YW50IiwiZmluaXNoZWQiLCJ3b3JrZmxvd1RpdGxlIiwidGl0bGUiLCJsZW5ndGgiLCJzbGljZSIsImRlc2NyaXB0aW9uIiwid29ya2Zsb3dVc2VycyIsIndvcmtmbG93RXh0cmFJbmZvIiwid29ya2Zsb3dDcmVhdGVkIiwiY3JlYXRlZF9hdCIsIndvcmtmbG93U3RhdHVzSWNvbnMiLCJzdGFycmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBc0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFuQkMsUUFBbUIsUUFBbkJBLFFBQW1CO0FBQUEsTUFBVEMsRUFBUyxRQUFUQSxFQUFTO0FBQzFDLE1BQU1DLDBCQUEwQixHQUFHLEVBQW5DO0FBQ0EsTUFBTUMsZ0NBQWdDLEdBQUcsRUFBekM7QUFFQSxNQUFNQyxZQUFZLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0YsWUFBakI7QUFBQSxHQUFELENBQWhDO0FBRUEsU0FDQztBQUNDLGFBQVMsRUFBRUcsaURBQVUsMkhBQ25CQyw2RUFBTSxDQUFDQyxpQkFEWSxFQUNRLElBRFIsMEdBRW5CRCw2RUFBTSxDQUFDRSxnQkFGWSxFQUVPVixRQUFRLENBQUMsVUFBRCxDQUZmLDBHQUduQlEsNkVBQU0sQ0FBQ0csU0FIWSxFQUdBWCxRQUFRLENBQUMsU0FBRCxDQUFSLElBQXVCLENBQUNBLFFBQVEsQ0FBQ1ksUUFIakMsZ0JBRHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPQztBQUFJLGFBQVMsRUFBRUosNkVBQU0sQ0FBQ0ssYUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFYixRQUFRLENBQUNjLEtBQVQsQ0FBZUMsTUFBZixHQUF3QmIsMEJBQXhCLEdBQ0FGLFFBQVEsQ0FBQ2MsS0FBVCxDQUFlRSxLQUFmLENBQXFCLENBQXJCLEVBQXdCZCwwQkFBeEIsSUFBc0QsS0FEdEQsR0FHQUYsUUFBUSxDQUFDYyxLQUpYLENBUEQsRUFjQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VkLFFBQVEsQ0FBQ2lCLFdBQVQsQ0FBcUJGLE1BQXJCLEdBQThCWixnQ0FBOUIsR0FDQUgsUUFBUSxDQUFDaUIsV0FBVCxDQUFxQkQsS0FBckIsQ0FBMkIsQ0FBM0IsRUFBOEJiLGdDQUE5QixJQUFrRSxLQURsRSxHQUdBSCxRQUFRLENBQUNpQixXQUpYLENBZEQsRUFxQkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFFVCw2RUFBTSxDQUFDVSxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFQztBQUFLLGFBQVMsRUFBRVYsNkVBQU0sQ0FBQ1csaUJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFJLGFBQVMsRUFBRVgsNkVBQU0sQ0FBQ1ksZUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3Q3BCLFFBQVEsQ0FBQ3FCLFVBQVQsQ0FBb0JMLEtBQXBCLENBQTBCLENBQTFCLEVBQTZCLEVBQTdCLENBQXhDLENBREQsRUFFQztBQUFLLGFBQVMsRUFBRVIsNkVBQU0sQ0FBQ2MsbUJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDhFQUFEO0FBQWlCLGFBQVMsRUFBRWYsaURBQVUsQ0FBQyw4RkFBR0MsNkVBQU0sQ0FBQ2UsT0FBWCxFQUFxQnZCLFFBQVEsQ0FBQ3VCLE9BQTlCLEVBQXRDO0FBQWdGLFFBQUksRUFBQyxNQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFQyxNQUFDLDhFQUFEO0FBQ0MsYUFBUyxFQUFFaEIsaURBQVUsQ0FBQyw4RkFBR0MsNkVBQU0sQ0FBQ0ksUUFBWCxFQUFzQlosUUFBUSxDQUFDWSxRQUEvQixFQUR0QjtBQUVDLFFBQUksRUFBQyxPQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxDQUZELENBRkQsQ0FyQkQsQ0FERDtBQXFDQSxDQTNDRDs7R0FBTWIsWTtVQUlnQk0sdUQ7OztLQUpoQk4sWTtBQTZDU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGRhc2hib2FyZFxcd29ya2Zsb3dzLmpzLmQ0YWM1ZTQ3NTMwZGE0YzdlZmQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9zY3NzL3dvcmtmbG93LWl0ZW0ubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5jb25zdCBXb3JrZmxvd0l0ZW0gPSAoeyB3b3JrZmxvdywgaWQgfSkgPT4ge1xyXG5cdGNvbnN0IG1heFRpdGxlTGVuZ3RoQmVmb3JlQ3V0b2ZmID0gMTU7XHJcblx0Y29uc3QgbWF4RGVzY3JpcHRpb25MZW5ndGhCZWZvcmVDdXRvZmYgPSAzMDtcclxuXHJcblx0Y29uc3QgcHJvZmlsZUltYWdlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9maWxlSW1hZ2UpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG5cdFx0XHRcdFtzdHlsZXMud29ya2Zsb3dDb250YWluZXJdOiB0cnVlLFxyXG5cdFx0XHRcdFtzdHlsZXMud29ya2Zsb3dGaW5pc2hlZF06IHdvcmtmbG93WydmaW5pc2hlZCddLFxyXG5cdFx0XHRcdFtzdHlsZXMuaW1wb3J0YW50XTogd29ya2Zsb3dbJ3N0YXJyZWQnXSAmJiAhd29ya2Zsb3cuZmluaXNoZWRcclxuXHRcdFx0fSl9XHJcblx0XHQ+XHJcblx0XHRcdDxoMiBjbGFzc05hbWU9e3N0eWxlcy53b3JrZmxvd1RpdGxlfT5cclxuXHRcdFx0XHR7d29ya2Zsb3cudGl0bGUubGVuZ3RoID4gbWF4VGl0bGVMZW5ndGhCZWZvcmVDdXRvZmYgPyAoXHJcblx0XHRcdFx0XHR3b3JrZmxvdy50aXRsZS5zbGljZSgwLCBtYXhUaXRsZUxlbmd0aEJlZm9yZUN1dG9mZikgKyAnLi4uJ1xyXG5cdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHR3b3JrZmxvdy50aXRsZVxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdDwvaDI+XHJcblx0XHRcdDxoND5cclxuXHRcdFx0XHR7d29ya2Zsb3cuZGVzY3JpcHRpb24ubGVuZ3RoID4gbWF4RGVzY3JpcHRpb25MZW5ndGhCZWZvcmVDdXRvZmYgPyAoXHJcblx0XHRcdFx0XHR3b3JrZmxvdy5kZXNjcmlwdGlvbi5zbGljZSgwLCBtYXhEZXNjcmlwdGlvbkxlbmd0aEJlZm9yZUN1dG9mZikgKyAnLi4uJ1xyXG5cdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHR3b3JrZmxvdy5kZXNjcmlwdGlvblxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdDwvaDQ+XHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy53b3JrZmxvd1VzZXJzfT57LyogPGltZyBzcmM9e3Byb2ZpbGVJbWFnZX0gLz4gKi99PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy53b3JrZmxvd0V4dHJhSW5mb30+XHJcblx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPXtzdHlsZXMud29ya2Zsb3dDcmVhdGVkfT57d29ya2Zsb3cuY3JlYXRlZF9hdC5zbGljZSgwLCAxMCl9PC9oMz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud29ya2Zsb3dTdGF0dXNJY29uc30+XHJcblx0XHRcdFx0XHRcdDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXtjbGFzc25hbWVzKHsgW3N0eWxlcy5zdGFycmVkXTogd29ya2Zsb3cuc3RhcnJlZCB9KX0gaWNvbj1cInN0YXJcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8Rm9udEF3ZXNvbWVJY29uXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc25hbWVzKHsgW3N0eWxlcy5maW5pc2hlZF06IHdvcmtmbG93LmZpbmlzaGVkIH0pfVxyXG5cdFx0XHRcdFx0XHRcdGljb249XCJjaGVja1wiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ya2Zsb3dJdGVtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9