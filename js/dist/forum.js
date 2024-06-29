module.exports =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ "./src/forum/components/tagList.js":
/*!*****************************************!*\
  !*** ./src/forum/components/tagList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TagList; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5__);

function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }





var TagList = /*#__PURE__*/function (_Component) {
  function TagList() {
    return _Component.apply(this, arguments) || this;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TagList, _Component);
  var _proto = TagList.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
  };
  _proto.view = function view() {
    var user = this.attrs.user;
    var tags = "";
    var tagList = user.tagList().split(",");
    if (tagList.length > 0) {
      for (var _iterator = _createForOfIteratorHelperLoose(tagList), _step; !(_step = _iterator()).done;) {
        var tag = _step.value;
        tags += "<span class=\"userTag\">" + tag + "</span>";
      }
    }
    return m("div", {
      className: "userTags"
    }, m.trust(tags));
  };
  return TagList;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default.a);


/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_EditUserModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/EditUserModal */ "flarum/common/components/EditUserModal");
/* harmony import */ var flarum_common_components_EditUserModal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_EditUserModal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/models/User */ "flarum/common/models/User");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_User__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/forum/components/UserCard */ "flarum/forum/components/UserCard");
/* harmony import */ var flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_forum_components_PostUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/forum/components/PostUser */ "flarum/forum/components/PostUser");
/* harmony import */ var flarum_forum_components_PostUser__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_PostUser__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_tagList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tagList */ "./src/forum/components/tagList.js");











// From: https://github.com/clarkwinkelmann/flarum-ext-circle-groups/blob/f5c17aa696ef906f05e8b0fbe6d369f20e56ecb3/js/src/forum/index.js#L8
function matchTag(tag) {
  return function (node) {
    return node && node.tag && node.tag === tag;
  };
}
flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('serakoi/flarumstaffbadge', function () {
  flarum_common_models_User__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.staffBadge = flarum_Model__WEBPACK_IMPORTED_MODULE_3___default.a.attribute('staffBadge');
  flarum_common_models_User__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.tagList = flarum_Model__WEBPACK_IMPORTED_MODULE_3___default.a.attribute('tagList');
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_PostUser__WEBPACK_IMPORTED_MODULE_8___default.a.prototype, 'oncreate', function (_out, vnode) {
    var _app$forum$attribute, _app$forum$attribute2, _app$forum$attribute3;
    var user = this.attrs.post.user();
    if (!user) return;
    var data = user.data.attributes;
    var badge = data.staffBadge;
    if (!badge) return;
    if (badge.toLowerCase() !== "true") return;
    var staffBadgeText = (_app$forum$attribute = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('staffBadgeTitle')) == null ? void 0 : _app$forum$attribute.toString();
    var staffBadgeColor = (_app$forum$attribute2 = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('staffBadgeColor')) == null ? void 0 : _app$forum$attribute2.toString();
    var staffBadgeBg = (_app$forum$attribute3 = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('staffBadgeBg')) == null ? void 0 : _app$forum$attribute3.toString();
    if (!staffBadgeText) staffBadgeText = "STAFF";
    if (staffBadgeText == "") staffBadgeText = "STAFF";
    if (!staffBadgeBg) staffBadgeBg = "rgb(70, 209, 96)";
    if (staffBadgeBg == "") staffBadgeBg = "rgb(70, 209, 96)";
    if (!staffBadgeColor) staffBadgeColor = "#fff";
    if (staffBadgeColor == "") staffBadgeColor = "#fff";
    var anchor = vnode.dom;
    if (!anchor) return console.log('No anchor found');
    var newEl = document.createElement('div');
    newEl.className = 'badgeHolder';
    newEl.innerHTML = "<div style=\"background-color:" + staffBadgeBg + ";color:" + staffBadgeColor + "\" class=\"ext_staffbadge_sm\">\n            " + staffBadgeText + "\n        </div>";
    anchor.appendChild(newEl);
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_7___default.a.prototype, 'oncreate', function (_out, vnode) {
    var card_user = this.attrs.user.data.attributes;
    if (card_user.staffBadge) {
      if (card_user.staffBadge.toLowerCase() === "true") {
        var _app$forum$attribute4, _app$forum$attribute5, _app$forum$attribute6;
        var staffBadgeText = (_app$forum$attribute4 = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('staffBadgeTitle')) == null ? void 0 : _app$forum$attribute4.toString();
        var staffBadgeColor = (_app$forum$attribute5 = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('staffBadgeColor')) == null ? void 0 : _app$forum$attribute5.toString();
        var staffBadgeBg = (_app$forum$attribute6 = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('staffBadgeBg')) == null ? void 0 : _app$forum$attribute6.toString();
        if (!staffBadgeText) staffBadgeText = "STAFF";
        if (staffBadgeText == "") staffBadgeText = "STAFF";
        if (!staffBadgeBg) staffBadgeBg = "rgb(70, 209, 96)";
        if (staffBadgeBg == "") staffBadgeBg = "rgb(70, 209, 96)";
        if (!staffBadgeColor) staffBadgeColor = "#fff";
        if (staffBadgeColor == "") staffBadgeColor = "#fff";
        var userCardDom = vnode.dom;
        var avatarDom = userCardDom.querySelector('.UserCard-avatar');
        var avatarStaffElement = document.createElement("div");
        avatarStaffElement.classList.add("ext_staffbadge");
        avatarStaffElement.style.color = staffBadgeColor;
        avatarStaffElement.style.backgroundColor = staffBadgeBg;
        avatarStaffElement.innerText = staffBadgeText;
        avatarDom.append(avatarStaffElement);
      }
    }
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_7___default.a.prototype, 'infoItems', function (items) {
    var user = this.attrs.user;
    if (!user.attribute('tagList')) return;
    var tags = user.attribute('tagList').split(',');
    if (tags.length === 0) return;
    items.add('tagList', m(_components_tagList__WEBPACK_IMPORTED_MODULE_9__["default"], {
      user: user
    }));
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_common_components_EditUserModal__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'oninit', function () {
    var _this$attrs$user, _this$attrs$user2;
    this.status = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_6___default()(((_this$attrs$user = this.attrs.user) == null ? void 0 : _this$attrs$user.staffBadge()) || '');
    this.tagList = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_6___default()(((_this$attrs$user2 = this.attrs.user) == null ? void 0 : _this$attrs$user2.tagList()) || '');
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_common_components_EditUserModal__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'fields', function (items) {
    // Try to print attributes
    console.log('canEditStaffBadge: ' + flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.attribute('canEditStaffBadge'));
    console.log('canEditTagList: ' + flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.attribute('canEditTagList'));
    console.log(this.attrs.user.data.attributes);
    if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.attribute('canEditStaffBadge')) {
      items.add('hasbadge', m("div", {
        className: "Form-group"
      }, m("label", null, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('serakoi-flarumstaffbadge.forum.edit_user.heading')), m("input", {
        className: "FormControl",
        placeholder: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5___default()(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('serakoi-flarumstaffbadge.forum.edit_user.placeholder')),
        bidi: this.status
      })), 100);
    }
    if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.attribute('canEditTagList')) {
      items.add('tagList', m("div", {
        className: "Form-group"
      }, m("label", null, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('serakoi-flarumstaffbadge.forum.edit_user.tagList.heading')), m("input", {
        className: "FormControl",
        placeholder: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5___default()(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('serakoi-flarumstaffbadge.forum.edit_user.tagList.placeholder')),
        bidi: this.tagList
      })), 100);
    }
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_common_components_EditUserModal__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'data', function (data) {
    data.staffBadge = this.status();
    data.tagList = this.tagList();
  });
});

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/components/EditUserModal":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['common/components/EditUserModal']" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/EditUserModal'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/models/User":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/models/User']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/models/User'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/common/utils/classList":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/utils/classList']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/classList'];

/***/ }),

/***/ "flarum/common/utils/extractText":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/utils/extractText']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/extractText'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/PostUser":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/PostUser']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/PostUser'];

/***/ }),

/***/ "flarum/forum/components/UserCard":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/UserCard']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/UserCard'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map