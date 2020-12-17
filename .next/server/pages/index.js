module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./App.js":
/*!****************!*\
  !*** ./App.js ***!
  \****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/antoineluta/Documents/GitHub/cloud/App.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction App() {\n  const {\n    0: db,\n    1: setInfluencer\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    getInfluencer();\n  }, []);\n\n  function getInfluencer() {\n    fetch('http://localhost:3001').then(response => {\n      return response.text();\n    }).then(data => {\n      setInfluencer(data);\n    });\n  }\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, db ? db : 'There is no influencer data available');\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BcHAuanM/NDg0ZCJdLCJuYW1lcyI6WyJBcHAiLCJkYiIsInNldEluZmx1ZW5jZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldEluZmx1ZW5jZXIiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsInRleHQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBLFNBQVNBLEdBQVQsR0FBZTtBQUNiLFFBQU07QUFBQSxPQUFDQyxFQUFEO0FBQUEsT0FBS0M7QUFBTCxNQUFzQkMsc0RBQVEsQ0FBQyxLQUFELENBQXBDO0FBQ0FDLHlEQUFTLENBQUMsTUFBTTtBQUNkQyxpQkFBYTtBQUNkLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBR0EsV0FBU0EsYUFBVCxHQUF5QjtBQUN2QkMsU0FBSyxDQUFDLHVCQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRQyxRQUFRLElBQUk7QUFDaEIsYUFBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxLQUhILEVBSUdGLElBSkgsQ0FJUUcsSUFBSSxJQUFJO0FBQ1pSLG1CQUFhLENBQUNRLElBQUQsQ0FBYjtBQUNELEtBTkg7QUFPRDs7QUFDRCxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1QsRUFBRSxHQUFHQSxFQUFILEdBQVEsdUNBRGIsQ0FERjtBQUtEOztBQUNjRCxrRUFBZiIsImZpbGUiOiIuL0FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbZGIsIHNldEluZmx1ZW5jZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEluZmx1ZW5jZXIoKTtcbiAgfSwgW10pO1xuICBmdW5jdGlvbiBnZXRJbmZsdWVuY2VyKCkge1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEnKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBzZXRJbmZsdWVuY2VyKGRhdGEpO1xuICAgICAgfSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge2RiID8gZGIgOiAnVGhlcmUgaXMgbm8gaW5mbHVlbmNlciBkYXRhIGF2YWlsYWJsZSd9XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./App.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../App */ \"./App.js\");\nvar _jsxFileName = \"/Users/antoineluta/Documents/GitHub/cloud/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nclass Form extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      commerce: '',\n      product: '',\n      gender: '',\n      audience: '',\n      price: '',\n      app: ''\n    };\n    this.handleChange = this.handleChange.bind(this);\n    this.handleSubmit = this.handleSubmit.bind(this);\n  }\n\n  handleChange(event) {\n    this.setState({\n      commerce: event.target.commerce,\n      product: event.target.product,\n      gender: event.target.gender,\n      audience: event.target.audience,\n      price: event.target.price,\n      app: event.target.app\n    });\n  }\n\n  handleSubmit(event) {\n    event.preventDefault();\n    fetch('/influenceurs', {\n      method: 'POST',\n      data: {\n        commerce: this.state.commerce,\n        product: this.state.product,\n        gender: this.state.gender,\n        audience: this.state.audience,\n        price: this.state.price,\n        app: this.state.app\n      }\n    });\n  }\n\n  render() {\n    return __jsx(\"form\", {\n      onSubmit: this.handleSubmit,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }\n    }, __jsx(\"div\", {\n      className: \"row\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 13\n      }\n    }, __jsx(\"label\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 17\n      }\n    }, \"E-commerce\"), __jsx(\"input\", {\n      type: \"text\",\n      ref: \"commerce\",\n      commerce: this.state.commerce,\n      onChange: this.handleChange,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }\n    })), __jsx(\"div\", {\n      className: \"row\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 13\n      }\n    }, __jsx(\"label\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 17\n      }\n    }, \"Type de Produit/ Marque\"), __jsx(\"input\", {\n      type: \"text\",\n      ref: \"product\",\n      commerce: this.state.product,\n      onChange: this.handleChange,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }\n    })), __jsx(\"div\", {\n      className: \"row\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 13\n      }\n    }, __jsx(\"label\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 17\n      }\n    }, \"Genre recherch\\xE9\"), __jsx(\"input\", {\n      type: \"text\",\n      ref: \"gender\",\n      commerce: this.state.gender,\n      onChange: this.handleChange,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 17\n      }\n    })), __jsx(\"div\", {\n      className: \"row\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 13\n      }\n    }, __jsx(\"label\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 17\n      }\n    }, \"Public cibl\\xE9\"), __jsx(\"input\", {\n      type: \"text\",\n      ref: \"audience\",\n      commerce: this.state.audience,\n      onChange: this.handleChange,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 17\n      }\n    })), __jsx(\"div\", {\n      className: \"row\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 13\n      }\n    }, __jsx(\"label\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 17\n      }\n    }, \"Tarif de l'influenceur\"), __jsx(\"input\", {\n      type: \"text\",\n      ref: \"price\",\n      commerce: this.state.price,\n      onChange: this.handleChange,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 17\n      }\n    })), __jsx(\"div\", {\n      className: \"row\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 13\n      }\n    }, __jsx(\"label\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 17\n      }\n    }, \"Application souhait\\xE9e\"), __jsx(\"input\", {\n      type: \"text\",\n      ref: \"app\",\n      commerce: this.state.app,\n      onChange: this.handleChange,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 17\n      }\n    })), __jsx(\"input\", {\n      type: \"submit\",\n      commerce: \"Submit\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 11\n      }\n    }));\n  }\n\n}\n\nfunction Home() {\n  return __jsx(\"div\", {\n    className: \"jsx-2538286362\" + \" \" + \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 5\n    }\n  }, __jsx(Form, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }\n  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"2538286362\",\n    __self: this\n  }, \"html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}.row{margin-top:1%;margin-left:35%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}input[type=text]{width:50%;}input[type=submit]{width:10%;margin-left:45%;margin-top:1%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnRvaW5lbHV0YS9Eb2N1bWVudHMvR2l0SHViL2Nsb3VkL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFGeUIsQUFJcUIsQUFRWSxBQUlOLEFBUUosQUFJQSxVQXZCSCxBQW9CWCxBQUlvQixJQVpBLEtBVE4sR0FLZCxJQWlCa0IsSUFaRCxVQWFqQixnRUFaMkIsaURBVjNCLGtEQVcwQiw4RUFDMUIiLCJmaWxlIjoiL1VzZXJzL2FudG9pbmVsdXRhL0RvY3VtZW50cy9HaXRIdWIvY2xvdWQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQXBwIGZyb20gJy4uL0FwcCc7XG5cbmNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBjb21tZXJjZTogJycsXG4gICAgICAgIHByb2R1Y3Q6ICcnLFxuICAgICAgICBnZW5kZXI6ICcnLFxuICAgICAgICBhdWRpZW5jZTogJycsXG4gICAgICAgIHByaWNlOiAnJyxcbiAgICAgICAgYXBwOiAnJyxcbiAgICB9O1xuICBcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB9XG4gIFxuICAgIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY29tbWVyY2U6IGV2ZW50LnRhcmdldC5jb21tZXJjZSxcbiAgICAgICAgICBwcm9kdWN0OiBldmVudC50YXJnZXQucHJvZHVjdCxcbiAgICAgICAgICBnZW5kZXI6IGV2ZW50LnRhcmdldC5nZW5kZXIsXG4gICAgICAgICAgYXVkaWVuY2U6IGV2ZW50LnRhcmdldC5hdWRpZW5jZSxcbiAgICAgICAgICBwcmljZTogZXZlbnQudGFyZ2V0LnByaWNlLFxuICAgICAgICAgIGFwcDogZXZlbnQudGFyZ2V0LmFwcFxuICAgIH0pO1xuICAgIH1cbiAgXG4gICAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZmV0Y2goJy9pbmZsdWVuY2V1cnMnLCB7IFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNvbW1lcmNlOiB0aGlzLnN0YXRlLmNvbW1lcmNlLFxuICAgICAgICAgIHByb2R1Y3Q6IHRoaXMuc3RhdGUucHJvZHVjdCxcbiAgICAgICAgICBnZW5kZXI6IHRoaXMuc3RhdGUuZ2VuZGVyLFxuICAgICAgICAgIGF1ZGllbmNlOiB0aGlzLnN0YXRlLmF1ZGllbmNlLFxuICAgICAgICAgIHByaWNlOiB0aGlzLnN0YXRlLnByaWNlLFxuICAgICAgICAgIGFwcDogdGhpcy5zdGF0ZS5hcHBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIFxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5FLWNvbW1lcmNlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJjb21tZXJjZVwiIGNvbW1lcmNlPXt0aGlzLnN0YXRlLmNvbW1lcmNlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlR5cGUgZGUgUHJvZHVpdC8gTWFycXVlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJwcm9kdWN0XCIgY29tbWVyY2U9e3RoaXMuc3RhdGUucHJvZHVjdH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5HZW5yZSByZWNoZXJjaMOpPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJnZW5kZXJcIiBjb21tZXJjZT17dGhpcy5zdGF0ZS5nZW5kZXJ9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+UHVibGljIGNpYmzDqTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPVwiYXVkaWVuY2VcIiBjb21tZXJjZT17dGhpcy5zdGF0ZS5hdWRpZW5jZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5UYXJpZiBkZSBsJ2luZmx1ZW5jZXVyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJwcmljZVwiIGNvbW1lcmNlPXt0aGlzLnN0YXRlLnByaWNlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkFwcGxpY2F0aW9uIHNvdWhhaXTDqWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cImFwcFwiIGNvbW1lcmNlPXt0aGlzLnN0YXRlLmFwcH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjb21tZXJjZT1cIlN1Ym1pdFwiIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxGb3JtIC8+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cblxuICAgICAgICAucm93IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDElO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDM1JTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dFt0eXBlPXRleHRdIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0NSU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\\n/*@ sourceURL=/Users/antoineluta/Documents/GitHub/cloud/pages/index.js */\"));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkZvcm0iLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImNvbW1lcmNlIiwicHJvZHVjdCIsImdlbmRlciIsImF1ZGllbmNlIiwicHJpY2UiLCJhcHAiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJkYXRhIiwicmVuZGVyIiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxJQUFOLFNBQW1CQyw0Q0FBSyxDQUFDQyxTQUF6QixDQUFtQztBQUMvQkMsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLEVBQUUsRUFEQztBQUVYQyxhQUFPLEVBQUUsRUFGRTtBQUdYQyxZQUFNLEVBQUUsRUFIRztBQUlYQyxjQUFRLEVBQUUsRUFKQztBQUtYQyxXQUFLLEVBQUUsRUFMSTtBQU1YQyxTQUFHLEVBQUU7QUFOTSxLQUFiO0FBU0EsU0FBS0MsWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFwQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxDQUFrQkQsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBcEI7QUFDRDs7QUFFREQsY0FBWSxDQUFDRyxLQUFELEVBQVE7QUFDbEIsU0FBS0MsUUFBTCxDQUFjO0FBQ1ZWLGNBQVEsRUFBRVMsS0FBSyxDQUFDRSxNQUFOLENBQWFYLFFBRGI7QUFFVkMsYUFBTyxFQUFFUSxLQUFLLENBQUNFLE1BQU4sQ0FBYVYsT0FGWjtBQUdWQyxZQUFNLEVBQUVPLEtBQUssQ0FBQ0UsTUFBTixD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QUFaO0FBQW1CLFNBQUcsRUFBQyxPQUF2QjtBQUErQixjQUFRLEVBQUUsS0FBS1AsS0FBTCxDQUFXSyxLQUFwRDtBQUEyRCxjQUFRLEVBQUUsS0FBS0UsWUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZKLENBakJKLEVBcUJJO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREosRUFFSTtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLFNBQUcsRUFBQyxLQUF2QjtBQUE2QixjQUFRLEVBQUUsS0FBS1AsS0FBTCxDQUFXTSxHQUFsRDtBQUF1RCxjQUFRLEVBQUUsS0FBS0MsWUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZKLENBckJKLEVBeUJFO0FBQU8sVUFBSSxFQUFDLFFBQVo7QUFBcUIsY0FBUSxFQUFDLFFBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUF6QkYsQ0FERjtBQTZCRDs7QUF4RThCOztBQTJFcEIsU0FBU1csSUFBVCxHQUFnQjtBQUM3QixTQUNFO0FBQUEsd0NBQWUsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQUFBO0FBQUE7QUFBQSxxeExBREY7QUFzQ0QiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vQXBwJztcblxuY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIGNvbW1lcmNlOiAnJyxcbiAgICAgICAgcHJvZHVjdDogJycsXG4gICAgICAgIGdlbmRlcjogJycsXG4gICAgICAgIGF1ZGllbmNlOiAnJyxcbiAgICAgICAgcHJpY2U6ICcnLFxuICAgICAgICBhcHA6ICcnLFxuICAgIH07XG4gIFxuICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIH1cbiAgXG4gICAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjb21tZXJjZTogZXZlbnQudGFyZ2V0LmNvbW1lcmNlLFxuICAgICAgICAgIHByb2R1Y3Q6IGV2ZW50LnRhcmdldC5wcm9kdWN0LFxuICAgICAgICAgIGdlbmRlcjogZXZlbnQudGFyZ2V0LmdlbmRlcixcbiAgICAgICAgICBhdWRpZW5jZTogZXZlbnQudGFyZ2V0LmF1ZGllbmNlLFxuICAgICAgICAgIHByaWNlOiBldmVudC50YXJnZXQucHJpY2UsXG4gICAgICAgICAgYXBwOiBldmVudC50YXJnZXQuYXBwXG4gICAgfSk7XG4gICAgfVxuICBcbiAgICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBmZXRjaCgnL2luZmx1ZW5jZXVycycsIHsgXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY29tbWVyY2U6IHRoaXMuc3RhdGUuY29tbWVyY2UsXG4gICAgICAgICAgcHJvZHVjdDogdGhpcy5zdGF0ZS5wcm9kdWN0LFxuICAgICAgICAgIGdlbmRlcjogdGhpcy5zdGF0ZS5nZW5kZXIsXG4gICAgICAgICAgYXVkaWVuY2U6IHRoaXMuc3RhdGUuYXVkaWVuY2UsXG4gICAgICAgICAgcHJpY2U6IHRoaXMuc3RhdGUucHJpY2UsXG4gICAgICAgICAgYXBwOiB0aGlzLnN0YXRlLmFwcFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkUtY29tbWVyY2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cImNvbW1lcmNlXCIgY29tbWVyY2U9e3RoaXMuc3RhdGUuY29tbWVyY2V9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+VHlwZSBkZSBQcm9kdWl0LyBNYXJxdWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cInByb2R1Y3RcIiBjb21tZXJjZT17dGhpcy5zdGF0ZS5wcm9kdWN0fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkdlbnJlIHJlY2hlcmNow6k8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cImdlbmRlclwiIGNvbW1lcmNlPXt0aGlzLnN0YXRlLmdlbmRlcn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5QdWJsaWMgY2libMOpPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJhdWRpZW5jZVwiIGNvbW1lcmNlPXt0aGlzLnN0YXRlLmF1ZGllbmNlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlRhcmlmIGRlIGwnaW5mbHVlbmNldXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cInByaWNlXCIgY29tbWVyY2U9e3RoaXMuc3RhdGUucHJpY2V9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+QXBwbGljYXRpb24gc291aGFpdMOpZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPVwiYXBwXCIgY29tbWVyY2U9e3RoaXMuc3RhdGUuYXBwfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNvbW1lcmNlPVwiU3VibWl0XCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPEZvcm0gLz5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xuICAgICAgICB9XG5cbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yb3cge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMSU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMzUlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0W3R5cGU9dGV4dF0ge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQ1JTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDElO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIj81ZTlhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWRvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-dom\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });