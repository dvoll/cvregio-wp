(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["commons~plugin~theme"],{

/***/ "./src/components/base/Icon.scss":
/*!***************************************!*\
  !*** ./src/components/base/Icon.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/base/Icon.scss?");

/***/ }),

/***/ "./src/components/base/Icon.tsx":
/*!**************************************!*\
  !*** ./src/components/base/Icon.tsx ***!
  \**************************************/
/*! exports provided: IconTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconTypes\", function() { return IconTypes; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Icon_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon.scss */ \"./src/components/base/Icon.scss\");\n/* harmony import */ var _Icon_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Icon_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nlet IconTypes;\n\n(function (IconTypes) {\n  IconTypes[\"ArrowRight\"] = \"arrow-right\";\n  IconTypes[\"ArrowLeft\"] = \"arrow-left\";\n})(IconTypes || (IconTypes = {}));\n\nclass Icon extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    const {\n      icon,\n      viewBox = '0 0 50 50',\n      fillRgb,\n      size,\n      className = ''\n    } = this.props;\n    const styles = {\n      width: size,\n      height: size,\n      ['--fill-rgb']: fillRgb\n    };\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"svg\", {\n      className: `base-icon ${fillRgb ? 'base-icon--has-fill' : ''} ${className}`,\n      viewBox: viewBox,\n      style: styles\n    }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"use\", {\n      href: `#${icon}`\n    }));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Icon);\n\n//# sourceURL=webpack:///./src/components/base/Icon.tsx?");

/***/ })

}]);