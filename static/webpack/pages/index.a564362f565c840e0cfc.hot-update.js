webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/logo */ \"./src/components/logo.js\");\n/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ \"./src/components/link.js\");\n/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widget */ \"./src/components/footer/widget.js\");\n/* harmony import */ var _footer_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.data */ \"./src/components/footer/footer.data.js\");\n/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! polished */ \"./node_modules/polished/dist/polished.esm.js\");\nvar _jsxFileName = \"/Users/suleman/Desktop/datexai/inhouse/website/startup-agency-next/src/components/footer/footer.js\";\n\n/** @jsxRuntime classic */\n\n/** @jsx jsx */\n\n\n\n\n\n\nfunction Footer() {\n  var _this = this;\n\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], {\n    as: \"footer\",\n    sx: styles.footer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], {\n    sx: styles.footerTopInner,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], {\n    sx: styles.about,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 11\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], {\n    sx: styles.logo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], {\n    sx: styles.terms,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(components_link__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    path: \"#!\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 15\n    }\n  }, \"Terms of use\"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(components_link__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    path: \"#!\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 15\n    }\n  }, \"Privacy\")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Text\"], {\n    as: \"p\",\n    sx: styles.copyright,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  })), _footer_data__WEBPACK_IMPORTED_MODULE_4__[\"menuItems\"].map(function (_ref) {\n    var id = _ref.id,\n        title = _ref.title,\n        items = _ref.items;\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: id,\n      title: title,\n      items: items,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 13\n      }\n    });\n  }))));\n}\n_c = Footer;\nvar styles = {\n  footer: {\n    pt: [8],\n    pb: [8]\n  },\n  footerTopInner: {\n    gap: [30, null, 50, '20px 50px', 17, 50],\n    display: ['grid'],\n    gridTemplateColumns: ['repeat(2, 1fr)', null, null, 'repeat(4, 1fr)', 'repeat(5, 1fr)']\n  },\n  footerInner: {\n    borderTop: \"1px solid #D9E0E7\",\n    display: ['block', null, 'flex'],\n    alignItems: 'center',\n    justifyContent: 'space-between',\n    padding: '35px 0 40px'\n  },\n  about: {\n    display: [null, null, null, 'grid', 'block'],\n    gridTemplateColumns: '205px 1fr 1fr',\n    alignItems: ['center'],\n    gridRow: ['3/4', null, '1/1', '3/4', 'unset'],\n    gridColumn: ['1/3', null, '1/2', '1/5', 'unset']\n  },\n  logo: {\n    display: ['flex'],\n    justifyContent: ['center', null, null, 'unset'],\n    gridColumn: '1/2'\n  },\n  terms: {\n    display: ['flex'],\n    gridColumn: '3/4',\n    alignItems: ['center', null, null, null, 'flex-start', 'center'],\n    flexDirection: ['row', null, null, null, 'column', 'row'],\n    justifyContent: ['center', null, 'flex-start', 'center', null, 'flex-start'],\n    mt: [4, null, null, 0, 4],\n    a: {\n      color: 'heading'\n    },\n    span: {\n      display: ['inline-flex', null, null, null, 'none', 'inline-flex'],\n      m: ['0 10px']\n    }\n  },\n  copyright: {\n    color: Object(polished__WEBPACK_IMPORTED_MODULE_5__[\"rgba\"])('#0F2137', 0.6),\n    fontSize: ['14px'],\n    mt: [3, null, null, -31, 3],\n    mr: [null, null, null, 'auto', 'unset'],\n    gridColumn: '2/3',\n    textAlign: ['center', null, 'left', 'center', 'left']\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcz83YzhiIl0sIm5hbWVzIjpbIkZvb3RlciIsInN0eWxlcyIsImZvb3RlciIsImZvb3RlclRvcElubmVyIiwiYWJvdXQiLCJsb2dvIiwidGVybXMiLCJjb3B5cmlnaHQiLCJtZW51SXRlbXMiLCJtYXAiLCJpZCIsInRpdGxlIiwiaXRlbXMiLCJwdCIsInBiIiwiZ2FwIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJmb290ZXJJbm5lciIsImJvcmRlclRvcCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJncmlkUm93IiwiZ3JpZENvbHVtbiIsImZsZXhEaXJlY3Rpb24iLCJtdCIsImEiLCJjb2xvciIsInNwYW4iLCJtIiwicmdiYSIsImZvbnRTaXplIiwibXIiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFDL0IsU0FDRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBQyxRQUFSO0FBQWlCLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFRCxNQUFNLENBQUNFLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUYsTUFBTSxDQUFDRyxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVILE1BQU0sQ0FBQ0ksSUFBaEI7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QUQsRUFBUSxJQUFSLEVBQWMsSUFBZCxFQUFvQixJQUFwQixFQUEwQixRQUExQixFQUFvQyxLQUFwQyxDQUpWO0FBS0xKLGtCQUFjLEVBQUUsQ0FDZCxRQURjLEVBRWQsSUFGYyxFQUdkLFlBSGMsRUFJZCxRQUpjLEVBS2QsSUFMYyxFQU1kLFlBTmMsQ0FMWDtBQWFMSyxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FiQztBQWNMQyxLQUFDLEVBQUU7QUFDREMsV0FBSyxFQUFFO0FBRE4sS0FkRTtBQWlCTEMsUUFBSSxFQUFFO0FBQ0piLGFBQU8sRUFBRSxDQUFDLGFBQUQsRUFBZ0IsSUFBaEIsRUFBc0IsSUFBdEIsRUFBNEIsSUFBNUIsRUFBa0MsTUFBbEMsRUFBMEMsYUFBMUMsQ0FETDtBQUVKYyxPQUFDLEVBQUUsQ0FBQyxRQUFEO0FBRkM7QUFqQkQsR0FuQ007QUF5RGJ2QixXQUFTLEVBQUU7QUFDVHFCLFNBQUssRUFBRUcscURBQUksQ0FBQyxTQUFELEVBQVksR0FBWixDQURGO0FBRVRDLFlBQVEsRUFBRSxDQUFDLE1BQUQsQ0FGRDtBQUdUTixNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsQ0FBQyxFQUFqQixFQUFxQixDQUFyQixDQUhLO0FBSVRPLE1BQUUsRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixNQUFuQixFQUEyQixPQUEzQixDQUpLO0FBS1RULGNBQVUsRUFBRSxLQUxIO0FBTVRVLGFBQVMsRUFBRSxDQUFDLFFBQUQsRUFBVyxJQUFYLEVBQWlCLE1BQWpCLEVBQXlCLFFBQXpCLEVBQW1DLE1BQW5DO0FBTkY7QUF6REUsQ0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCwgVGV4dCwgQ29udGFpbmVyIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IExvZ28gZnJvbSAnY29tcG9uZW50cy9sb2dvJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xuaW1wb3J0IFdpZGdldCBmcm9tICcuL3dpZGdldCc7XG5pbXBvcnQgeyBtZW51SXRlbXMgfSBmcm9tICcuL2Zvb3Rlci5kYXRhJztcbmltcG9ydCB7IHJnYmEgfSBmcm9tICdwb2xpc2hlZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGFzPVwiZm9vdGVyXCIgc3g9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmZvb3RlclRvcElubmVyfT5cbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuYWJvdXR9PlxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmxvZ299PlxuICAgICAgICAgICAgICB7LyogPExvZ28gLz4gKi99XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy50ZXJtc30+XG4gICAgICAgICAgICAgIDxMaW5rIHBhdGg9XCIjIVwiPlRlcm1zIG9mIHVzZTwvTGluaz5cbiAgICAgICAgICAgICAgey8qIDxUZXh0IGFzPVwic3BhblwiPnw8L1RleHQ+ICovfVxuICAgICAgICAgICAgICA8TGluayBwYXRoPVwiIyFcIj5Qcml2YWN5PC9MaW5rPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8VGV4dCBhcz1cInBcIiBzeD17c3R5bGVzLmNvcHlyaWdodH0+XG4gICAgICAgICAgICAgIHsvKiBDb3B5cmlnaHQgYnkge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gUmVkUSwgSW5jICovfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIHttZW51SXRlbXMubWFwKCh7IGlkLCB0aXRsZSwgaXRlbXMgfSkgPT4gKFxuICAgICAgICAgICAgPFdpZGdldCBrZXk9e2lkfSB0aXRsZT17dGl0bGV9IGl0ZW1zPXtpdGVtc30gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBmb290ZXI6IHtcbiAgICBwdDogWzhdLFxuICAgIHBiOiBbOF0sXG4gIH0sXG4gIGZvb3RlclRvcElubmVyOiB7XG4gICAgZ2FwOiBbMzAsIG51bGwsIDUwLCAnMjBweCA1MHB4JywgMTcsIDUwXSxcbiAgICBkaXNwbGF5OiBbJ2dyaWQnXSxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXG4gICAgICAncmVwZWF0KDIsIDFmciknLFxuICAgICAgbnVsbCxcbiAgICAgIG51bGwsXG4gICAgICAncmVwZWF0KDQsIDFmciknLFxuICAgICAgJ3JlcGVhdCg1LCAxZnIpJyxcbiAgICBdLFxuICB9LFxuICBmb290ZXJJbm5lcjoge1xuICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAjRDlFMEU3YCxcbiAgICBkaXNwbGF5OiBbJ2Jsb2NrJywgbnVsbCwgJ2ZsZXgnXSxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIHBhZGRpbmc6ICczNXB4IDAgNDBweCcsXG4gIH0sXG4gIGFib3V0OiB7XG4gICAgZGlzcGxheTogW251bGwsIG51bGwsIG51bGwsICdncmlkJywgJ2Jsb2NrJ10sXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzIwNXB4IDFmciAxZnInLFxuICAgIGFsaWduSXRlbXM6IFsnY2VudGVyJ10sXG4gICAgZ3JpZFJvdzogWyczLzQnLCBudWxsLCAnMS8xJywgJzMvNCcsICd1bnNldCddLFxuICAgIGdyaWRDb2x1bW46IFsnMS8zJywgbnVsbCwgJzEvMicsICcxLzUnLCAndW5zZXQnXSxcbiAgfSxcbiAgbG9nbzoge1xuICAgIGRpc3BsYXk6IFsnZmxleCddLFxuICAgIGp1c3RpZnlDb250ZW50OiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICd1bnNldCddLFxuICAgIGdyaWRDb2x1bW46ICcxLzInLFxuICB9LFxuICB0ZXJtczoge1xuICAgIGRpc3BsYXk6IFsnZmxleCddLFxuICAgIGdyaWRDb2x1bW46ICczLzQnLFxuICAgIGFsaWduSXRlbXM6IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgbnVsbCwgJ2ZsZXgtc3RhcnQnLCAnY2VudGVyJ10sXG4gICAgZmxleERpcmVjdGlvbjogWydyb3cnLCBudWxsLCBudWxsLCBudWxsLCAnY29sdW1uJywgJ3JvdyddLFxuICAgIGp1c3RpZnlDb250ZW50OiBbXG4gICAgICAnY2VudGVyJyxcbiAgICAgIG51bGwsXG4gICAgICAnZmxleC1zdGFydCcsXG4gICAgICAnY2VudGVyJyxcbiAgICAgIG51bGwsXG4gICAgICAnZmxleC1zdGFydCcsXG4gICAgXSxcbiAgICBtdDogWzQsIG51bGwsIG51bGwsIDAsIDRdLFxuICAgIGE6IHtcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXG4gICAgfSxcbiAgICBzcGFuOiB7XG4gICAgICBkaXNwbGF5OiBbJ2lubGluZS1mbGV4JywgbnVsbCwgbnVsbCwgbnVsbCwgJ25vbmUnLCAnaW5saW5lLWZsZXgnXSxcbiAgICAgIG06IFsnMCAxMHB4J10sXG4gICAgfSxcbiAgfSxcbiAgY29weXJpZ2h0OiB7XG4gICAgY29sb3I6IHJnYmEoJyMwRjIxMzcnLCAwLjYpLFxuICAgIGZvbnRTaXplOiBbJzE0cHgnXSxcbiAgICBtdDogWzMsIG51bGwsIG51bGwsIC0zMSwgM10sXG4gICAgbXI6IFtudWxsLCBudWxsLCBudWxsLCAnYXV0bycsICd1bnNldCddLFxuICAgIGdyaWRDb2x1bW46ICcyLzMnLFxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCAnbGVmdCcsICdjZW50ZXInLCAnbGVmdCddLFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/footer/footer.js\n");

/***/ })

})