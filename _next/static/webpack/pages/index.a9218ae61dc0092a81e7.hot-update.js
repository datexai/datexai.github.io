webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/logo */ \"./src/components/logo.js\");\n/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ \"./src/components/link.js\");\n/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widget */ \"./src/components/footer/widget.js\");\n/* harmony import */ var _footer_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.data */ \"./src/components/footer/footer.data.js\");\n/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! polished */ \"./node_modules/polished/dist/polished.esm.js\");\nvar _jsxFileName = \"/Users/suleman/Desktop/datexai/inhouse/website/startup-agency-next/src/components/footer/footer.js\";\n\n/** @jsxRuntime classic */\n\n/** @jsx jsx */\n\n\n\n\n\n\nfunction Footer() {\n  var _this = this;\n\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], {\n    as: \"footer\",\n    sx: styles.footer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], {\n    sx: styles.footerTopInner,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], {\n    sx: styles.about,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 11\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], {\n    sx: styles.logo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(components_logo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 15\n    }\n  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], {\n    sx: styles.terms,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Text\"], {\n    as: \"p\",\n    sx: styles.copyright,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  })), _footer_data__WEBPACK_IMPORTED_MODULE_4__[\"menuItems\"].map(function (_ref) {\n    var id = _ref.id,\n        title = _ref.title,\n        items = _ref.items;\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: id,\n      title: title,\n      items: items,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 13\n      }\n    });\n  }))));\n}\n_c = Footer;\nvar styles = {\n  footer: {\n    pt: [8],\n    pb: [8]\n  },\n  footerTopInner: {\n    gap: [30, null, 50, '20px 50px', 17, 50],\n    display: ['grid'],\n    gridTemplateColumns: ['repeat(2, 1fr)', null, null, 'repeat(4, 1fr)', 'repeat(5, 1fr)']\n  },\n  footerInner: {\n    borderTop: \"1px solid #D9E0E7\",\n    display: ['block', null, 'flex'],\n    alignItems: 'center',\n    justifyContent: 'space-between',\n    padding: '35px 0 40px'\n  },\n  about: {\n    display: [null, null, null, 'grid', 'block'],\n    gridTemplateColumns: '205px 1fr 1fr',\n    alignItems: ['center'],\n    gridRow: ['3/4', null, '1/1', '3/4', 'unset'],\n    gridColumn: ['1/3', null, '1/2', '1/5', 'unset']\n  },\n  logo: {\n    display: ['flex'],\n    justifyContent: ['center', null, null, 'unset'],\n    gridColumn: '1/2'\n  },\n  terms: {\n    display: ['flex'],\n    gridColumn: '3/4',\n    alignItems: ['center', null, null, null, 'flex-start', 'center'],\n    flexDirection: ['row', null, null, null, 'column', 'row'],\n    justifyContent: ['center', null, 'flex-start', 'center', null, 'flex-start'],\n    mt: [4, null, null, 0, 4],\n    a: {\n      color: 'heading'\n    },\n    span: {\n      display: ['inline-flex', null, null, null, 'none', 'inline-flex'],\n      m: ['0 10px']\n    }\n  },\n  copyright: {\n    color: Object(polished__WEBPACK_IMPORTED_MODULE_5__[\"rgba\"])('#0F2137', 0.6),\n    fontSize: ['14px'],\n    mt: [3, null, null, -31, 3],\n    mr: [null, null, null, 'auto', 'unset'],\n    gridColumn: '2/3',\n    textAlign: ['center', null, 'left', 'center', 'left']\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcz83YzhiIl0sIm5hbWVzIjpbIkZvb3RlciIsInN0eWxlcyIsImZvb3RlciIsImZvb3RlclRvcElubmVyIiwiYWJvdXQiLCJsb2dvIiwidGVybXMiLCJjb3B5cmlnaHQiLCJtZW51SXRlbXMiLCJtYXAiLCJpZCIsInRpdGxlIiwiaXRlbXMiLCJwdCIsInBiIiwiZ2FwIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJmb290ZXJJbm5lciIsImJvcmRlclRvcCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJncmlkUm93IiwiZ3JpZENvbHVtbiIsImZsZXhEaXJlY3Rpb24iLCJtdCIsImEiLCJjb2xvciIsInNwYW4iLCJtIiwicmdiYSIsImZvbnRTaXplIiwibXIiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFDL0IsU0FDRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBQyxRQUFSO0FBQWlCLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFRCxNQUFNLENBQUNFLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUYsTUFBTSxDQUFDRyxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVILE1BQU0sQ0FBQ0ksSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUUscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVKLE1BQU0sQ0FBQ0ssS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBU0UscURBQUMsNkNBQUQ7QUFBTSxNQUFFLEVBQUMsR0FBVDtBQUFhLE1BQUUsRUFBRUwsTUFBTSxDQUFDTSxTQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsQ0FERixFQWNHQyxzREFBUyxDQUFDQyxHQUFWLENBQWM7QUFBQSxRQUFHQyxFQUFILFFBQUdBLEVBQUg7QUFBQSxRQUFPQyxLQUFQLFFBQU9BLEtBQVA7QUFBQSxRQUFjQyxLQUFkLFFBQWNBLEtBQWQ7QUFBQSxXQUNiLHFEQUFDLCtDQUFEO0FBQVEsU0FBRyxFQUFFRixFQUFiO0FBQWlCLFdBQUssRUFBRUMsS0FBeEI7QUFBK0IsV0FBSyxFQUFFQyxLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGE7QUFBQSxHQUFkLENBZEgsQ0FERixDQURGLENBREY7QUF3QkQ7S0F6QnVCWixNO0FBMkJ4QixJQUFNQyxNQUFNLEdBQUc7QUFDYkMsUUFBTSxFQUFFO0FBQ05XLE1BQUUsRUFBRSxDQUFDLENBQUQsQ0FERTtBQUVOQyxNQUFFLEVBQUUsQ0FBQyxDQUFEO0FBRkUsR0FESztBQUtiWCxnQkFBYyxFQUFFO0FBQ2RZLE9BQUcsRUFBRSxDQUFDLEVBQUQsRUFBSyxJQUFMLEVBQVcsRUFBWCxFQUFlLFdBQWYsRUFBNEIsRUFBNUIsRUFBZ0MsRUFBaEMsQ0FEUztBQUVkQyxXQUFPLEVBQUUsQ0FBQyxNQUFELENBRks7QUFHZEMsdUJBQW1CLEVBQUUsQ0FDbkIsZ0JBRG1CLEVBRW5CLElBRm1CLEVBR25CLElBSG1CLEVBSW5CLGdCQUptQixFQUtuQixnQkFMbUI7QUFIUCxHQUxIO0FBZ0JiQyxhQUFXLEVBQUU7QUFDWEMsYUFBUyxxQkFERTtBQUVYSCxXQUFPLEVBQUUsQ0FBQyxPQUFELEVBQVUsSUFBVixFQUFnQixNQUFoQixDQUZFO0FBR1hJLGNBQVUsRUFBRSxRQUhEO0FBSVhDLGtCQUFjLEVBQUUsZUFKTDtBQUtYQyxXQUFPLEVBQUU7QUFMRSxHQWhCQTtBQXVCYmxCLE9BQUssRUFBRTtBQUNMWSxXQUFPLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsTUFBbkIsRUFBMkIsT0FBM0IsQ0FESjtBQUVMQyx1QkFBbUIsRUFBRSxlQUZoQjtBQUdMRyxjQUFVLEVBQUUsQ0FBQyxRQUFELENBSFA7QUFJTEcsV0FBTyxFQUFFLENBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxLQUFkLEVBQXFCLEtBQXJCLEVBQTRCLE9BQTVCLENBSko7QUFLTEMsY0FBVSxFQUFFLENBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxLQUFkLEVBQXFCLEtBQXJCLEVBQTRCLE9BQTVCO0FBTFAsR0F2Qk07QUE4QmJuQixNQUFJLEVBQUU7QUFDSlcsV0FBTyxFQUFFLENBQUMsTUFBRCxDQURMO0FBRUpLLGtCQUFjLEVBQUUsQ0FBQyxRQUFELEVBQVcsSUFBWCxFQUFpQixJQUFqQixFQUF1QixPQUF2QixDQUZaO0FBR0pHLGNBQVUsRUFBRTtBQUhSLEdBOUJPO0FBbUNibEIsT0FBSyxFQUFFO0FBQ0xVLFdBQU8sRUFBRSxDQUFDLE1BQUQsQ0FESjtBQUVMUSxjQUFVLEVBQUUsS0FGUDtBQUdMSixjQUFVLEVBQUUsQ0FBQyxRQUFELEVBQVcsSUFBWCxFQUFpQixJQUFqQixFQUF1QixJQUF2QixFQUE2QixZQUE3QixFQUEyQyxRQUEzQyxDQUhQO0FBSUxLLGlCQUFhLEVBQUUsQ0FBQyxLQUFELEVBQVEsSUFBUixFQUFjLElBQWQsRUFBb0IsSUFBcEIsRUFBMEIsUUFBMUIsRUFBb0MsS0FBcEMsQ0FKVjtBQUtMSixrQkFBYyxFQUFFLENBQ2QsUUFEYyxFQUVkLElBRmMsRUFHZCxZQUhjLEVBSWQsUUFKYyxFQUtkLElBTGMsRUFNZCxZQU5jLENBTFg7QUFhTEssTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBYkM7QUFjTEMsS0FBQyxFQUFFO0FBQ0RDLFdBQUssRUFBRTtBQUROLEtBZEU7QUFpQkxDLFFBQUksRUFBRTtBQUNKYixhQUFPLEVBQUUsQ0FBQyxhQUFELEVBQWdCLElBQWhCLEVBQXNCLElBQXRCLEVBQTRCLElBQTVCLEVBQWtDLE1BQWxDLEVBQTBDLGFBQTFDLENBREw7QUFFSmMsT0FBQyxFQUFFLENBQUMsUUFBRDtBQUZDO0FBakJELEdBbkNNO0FBeURidkIsV0FBUyxFQUFFO0FBQ1RxQixTQUFLLEVBQUVHLHFEQUFJLENBQUMsU0FBRCxFQUFZLEdBQVosQ0FERjtBQUVUQyxZQUFRLEVBQUUsQ0FBQyxNQUFELENBRkQ7QUFHVE4sTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLENBQUMsRUFBakIsRUFBcUIsQ0FBckIsQ0FISztBQUlUTyxNQUFFLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsTUFBbkIsRUFBMkIsT0FBM0IsQ0FKSztBQUtUVCxjQUFVLEVBQUUsS0FMSDtBQU1UVSxhQUFTLEVBQUUsQ0FBQyxRQUFELEVBQVcsSUFBWCxFQUFpQixNQUFqQixFQUF5QixRQUF6QixFQUFtQyxNQUFuQztBQU5GO0FBekRFLENBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBCb3gsIFRleHQsIENvbnRhaW5lciB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBMb2dvIGZyb20gJ2NvbXBvbmVudHMvbG9nbyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcbmltcG9ydCBXaWRnZXQgZnJvbSAnLi93aWRnZXQnO1xuaW1wb3J0IHsgbWVudUl0ZW1zIH0gZnJvbSAnLi9mb290ZXIuZGF0YSc7XG5pbXBvcnQgeyByZ2JhIH0gZnJvbSAncG9saXNoZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPEJveCBhcz1cImZvb3RlclwiIHN4PXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5mb290ZXJUb3BJbm5lcn0+XG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmFib3V0fT5cbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5sb2dvfT5cbiAgICAgICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLnRlcm1zfT5cbiAgICAgICAgICAgICAgey8qIDxMaW5rIHBhdGg9XCIjIVwiPlRlcm1zIG9mIHVzZTwvTGluaz5cbiAgICAgICAgICAgICAgPFRleHQgYXM9XCJzcGFuXCI+fDwvVGV4dD5cbiAgICAgICAgICAgICAgPExpbmsgcGF0aD1cIiMhXCI+UHJpdmFjeTwvTGluaz4gKi99XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxUZXh0IGFzPVwicFwiIHN4PXtzdHlsZXMuY29weXJpZ2h0fT5cbiAgICAgICAgICAgICAgey8qIENvcHlyaWdodCBieSB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBSZWRRLCBJbmMgKi99XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAge21lbnVJdGVtcy5tYXAoKHsgaWQsIHRpdGxlLCBpdGVtcyB9KSA9PiAoXG4gICAgICAgICAgICA8V2lkZ2V0IGtleT17aWR9IHRpdGxlPXt0aXRsZX0gaXRlbXM9e2l0ZW1zfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGZvb3Rlcjoge1xuICAgIHB0OiBbOF0sXG4gICAgcGI6IFs4XSxcbiAgfSxcbiAgZm9vdGVyVG9wSW5uZXI6IHtcbiAgICBnYXA6IFszMCwgbnVsbCwgNTAsICcyMHB4IDUwcHgnLCAxNywgNTBdLFxuICAgIGRpc3BsYXk6IFsnZ3JpZCddLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcbiAgICAgICdyZXBlYXQoMiwgMWZyKScsXG4gICAgICBudWxsLFxuICAgICAgbnVsbCxcbiAgICAgICdyZXBlYXQoNCwgMWZyKScsXG4gICAgICAncmVwZWF0KDUsIDFmciknLFxuICAgIF0sXG4gIH0sXG4gIGZvb3RlcklubmVyOiB7XG4gICAgYm9yZGVyVG9wOiBgMXB4IHNvbGlkICNEOUUwRTdgLFxuICAgIGRpc3BsYXk6IFsnYmxvY2snLCBudWxsLCAnZmxleCddLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgcGFkZGluZzogJzM1cHggMCA0MHB4JyxcbiAgfSxcbiAgYWJvdXQ6IHtcbiAgICBkaXNwbGF5OiBbbnVsbCwgbnVsbCwgbnVsbCwgJ2dyaWQnLCAnYmxvY2snXSxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMjA1cHggMWZyIDFmcicsXG4gICAgYWxpZ25JdGVtczogWydjZW50ZXInXSxcbiAgICBncmlkUm93OiBbJzMvNCcsIG51bGwsICcxLzEnLCAnMy80JywgJ3Vuc2V0J10sXG4gICAgZ3JpZENvbHVtbjogWycxLzMnLCBudWxsLCAnMS8yJywgJzEvNScsICd1bnNldCddLFxuICB9LFxuICBsb2dvOiB7XG4gICAgZGlzcGxheTogWydmbGV4J10sXG4gICAganVzdGlmeUNvbnRlbnQ6IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ3Vuc2V0J10sXG4gICAgZ3JpZENvbHVtbjogJzEvMicsXG4gIH0sXG4gIHRlcm1zOiB7XG4gICAgZGlzcGxheTogWydmbGV4J10sXG4gICAgZ3JpZENvbHVtbjogJzMvNCcsXG4gICAgYWxpZ25JdGVtczogWydjZW50ZXInLCBudWxsLCBudWxsLCBudWxsLCAnZmxleC1zdGFydCcsICdjZW50ZXInXSxcbiAgICBmbGV4RGlyZWN0aW9uOiBbJ3JvdycsIG51bGwsIG51bGwsIG51bGwsICdjb2x1bW4nLCAncm93J10sXG4gICAganVzdGlmeUNvbnRlbnQ6IFtcbiAgICAgICdjZW50ZXInLFxuICAgICAgbnVsbCxcbiAgICAgICdmbGV4LXN0YXJ0JyxcbiAgICAgICdjZW50ZXInLFxuICAgICAgbnVsbCxcbiAgICAgICdmbGV4LXN0YXJ0JyxcbiAgICBdLFxuICAgIG10OiBbNCwgbnVsbCwgbnVsbCwgMCwgNF0sXG4gICAgYToge1xuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcbiAgICB9LFxuICAgIHNwYW46IHtcbiAgICAgIGRpc3BsYXk6IFsnaW5saW5lLWZsZXgnLCBudWxsLCBudWxsLCBudWxsLCAnbm9uZScsICdpbmxpbmUtZmxleCddLFxuICAgICAgbTogWycwIDEwcHgnXSxcbiAgICB9LFxuICB9LFxuICBjb3B5cmlnaHQ6IHtcbiAgICBjb2xvcjogcmdiYSgnIzBGMjEzNycsIDAuNiksXG4gICAgZm9udFNpemU6IFsnMTRweCddLFxuICAgIG10OiBbMywgbnVsbCwgbnVsbCwgLTMxLCAzXSxcbiAgICBtcjogW251bGwsIG51bGwsIG51bGwsICdhdXRvJywgJ3Vuc2V0J10sXG4gICAgZ3JpZENvbHVtbjogJzIvMycsXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsICdsZWZ0JywgJ2NlbnRlcicsICdsZWZ0J10sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/footer/footer.js\n");

/***/ })

})