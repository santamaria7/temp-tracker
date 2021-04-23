/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/TempTracker.ts":
/*!*******************************!*\
  !*** ./src/ts/TempTracker.ts ***!
  \*******************************/
/*! exports provided: tracker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tracker\", function() { return tracker; });\nvar TempTracker = /** @class */ (function () {\n    function TempTracker() {\n        this.inputList = [];\n        this.input = 0;\n        this.minTemp = -Infinity;\n        this.maxTemp = Infinity;\n        this.aveTemp = 0;\n    }\n    TempTracker.prototype.setHighest = function () {\n        if (this.maxTemp === Infinity || this.input > this.maxTemp) {\n            this.maxTemp = this.input;\n        }\n    };\n    TempTracker.prototype.setLowest = function () {\n        if (this.minTemp === -Infinity || this.input < this.minTemp) {\n            this.minTemp = this.input;\n        }\n    };\n    TempTracker.prototype.setAverage = function () {\n        var l = this.inputList.length;\n        this.aveTemp = this.inputList.reduce(function (a, b) { return a + b; }, 0) / l;\n    };\n    TempTracker.prototype.insertNew = function (input) {\n        this.input = input;\n        this.inputList.push(input);\n        this.setHighest();\n        this.setLowest();\n        this.setAverage();\n    };\n    TempTracker.prototype.getHighest = function () {\n        return this.maxTemp;\n    };\n    TempTracker.prototype.getLowest = function () {\n        return this.minTemp;\n    };\n    TempTracker.prototype.getAverage = function () {\n        return this.aveTemp;\n    };\n    TempTracker.getInstance = function () {\n        if (!this.instance) {\n            this.instance = new TempTracker();\n        }\n        return this.instance;\n    };\n    return TempTracker;\n}());\nvar tracker = TempTracker.getInstance();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvVGVtcFRyYWNrZXIudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3RzL1RlbXBUcmFja2VyLnRzPzBlZmEiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVGVtcFRyYWNrZXIge1xuICBwcml2YXRlIGlucHV0TGlzdDogbnVtYmVyW10gPSBbXTtcbiAgcHJpdmF0ZSBpbnB1dCA9IDA7XG4gIHByaXZhdGUgbWluVGVtcDogbnVtYmVyID0gLUluZmluaXR5O1xuICBwcml2YXRlIG1heFRlbXA6IG51bWJlciA9IEluZmluaXR5O1xuICBwcml2YXRlIGF2ZVRlbXA6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBUZW1wVHJhY2tlcjtcbiAgY29uc3RydWN0b3IoKSB7fVxuICBwcml2YXRlIHNldEhpZ2hlc3QoKSB7XG4gICAgaWYodGhpcy5tYXhUZW1wID09PSBJbmZpbml0eSB8fCB0aGlzLmlucHV0ID4gdGhpcy5tYXhUZW1wKXtcbiAgICAgIHRoaXMubWF4VGVtcCA9IHRoaXMuaW5wdXQ7XG4gICAgfVxuXG4gIH1cbiAgcHJpdmF0ZSBzZXRMb3dlc3QoKSB7XG4gICAgaWYgKHRoaXMubWluVGVtcCA9PT0gLUluZmluaXR5IHx8IHRoaXMuaW5wdXQgPCB0aGlzLm1pblRlbXApIHtcbiAgICAgIHRoaXMubWluVGVtcCA9IHRoaXMuaW5wdXQ7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgc2V0QXZlcmFnZSgpIHtcbiAgICBjb25zdCBsID0gdGhpcy5pbnB1dExpc3QubGVuZ3RoO1xuICAgIHRoaXMuYXZlVGVtcCA9IHRoaXMuaW5wdXRMaXN0LnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApIC8gbDtcbiAgfVxuICBpbnNlcnROZXcoaW5wdXQ6IG51bWJlcikge1xuICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICB0aGlzLmlucHV0TGlzdC5wdXNoKGlucHV0KTtcbiAgICB0aGlzLnNldEhpZ2hlc3QoKTtcbiAgICB0aGlzLnNldExvd2VzdCgpO1xuICAgIHRoaXMuc2V0QXZlcmFnZSgpO1xuICB9XG4gIGdldEhpZ2hlc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF4VGVtcDtcbiAgfVxuICBnZXRMb3dlc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMubWluVGVtcDtcbiAgfVxuICBnZXRBdmVyYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmF2ZVRlbXA7XG4gIH1cbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBUZW1wVHJhY2tlcigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdHJhY2tlciA9IFRlbXBUcmFja2VyLmdldEluc3RhbmNlKCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQU9BO0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/TempTracker.ts\n");

/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TempTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TempTracker */ \"./src/ts/TempTracker.ts\");\n\n(function () {\n    var value;\n    var min, max, average;\n    function onInputChange(e) {\n        value = e.target.value;\n    }\n    function onSubmit(e) {\n        e.preventDefault();\n        var temperature = parseInt(value, 10);\n        _TempTracker__WEBPACK_IMPORTED_MODULE_0__[\"tracker\"].insertNew(temperature);\n        min = _TempTracker__WEBPACK_IMPORTED_MODULE_0__[\"tracker\"].getLowest();\n        max = _TempTracker__WEBPACK_IMPORTED_MODULE_0__[\"tracker\"].getHighest();\n        average = _TempTracker__WEBPACK_IMPORTED_MODULE_0__[\"tracker\"].getAverage();\n        alert(\"min: \" + min + \", max: \" + max + \", average: \" + average);\n    }\n    document.addEventListener(\"submit\", onSubmit);\n    document.addEventListener(\"input\", onInputChange);\n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3RzL2luZGV4LnRzPzYwYTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHJhY2tlciB9IGZyb20gXCIuL1RlbXBUcmFja2VyXCI7XG4oZnVuY3Rpb24gKCkge1xuICBsZXQgdmFsdWU6IHN0cmluZztcbiAgbGV0IG1pbiwgbWF4LCBhdmVyYWdlO1xuXG4gIGZ1bmN0aW9uIG9uSW5wdXRDaGFuZ2UoZTogSW5wdXRFdmVudCkge1xuICAgIHZhbHVlID0gKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICB9XG4gIGZ1bmN0aW9uIG9uU3VibWl0KGU6IEV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB0cmFja2VyLmluc2VydE5ldyh0ZW1wZXJhdHVyZSk7XG4gICAgbWluID0gdHJhY2tlci5nZXRMb3dlc3QoKTtcbiAgICBtYXggPSB0cmFja2VyLmdldEhpZ2hlc3QoKTtcbiAgICBhdmVyYWdlID0gdHJhY2tlci5nZXRBdmVyYWdlKCk7XG4gICAgYWxlcnQoYG1pbjogJHttaW59LCBtYXg6ICR7bWF4fSwgYXZlcmFnZTogJHthdmVyYWdlfWApO1xuICB9XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgb25TdWJtaXQpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgb25JbnB1dENoYW5nZSk7XG59KSgpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/index.ts\n");

/***/ })

/******/ });