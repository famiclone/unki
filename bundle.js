/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defineCustomElements": () => (/* binding */ defineCustomElements)
/* harmony export */ });
/* harmony import */ var _components_code_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


function defineCustomElements() {
    customElements.define('code-block', _components_code_block__WEBPACK_IMPORTED_MODULE_0__["default"]);
    customElements.define('card-component', _components_card__WEBPACK_IMPORTED_MODULE_1__["default"]);
}


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const dict = {
    js: {
        keywords: [
            'super',
            'switch',
            'synchronized',
            'this',
            'throw',
            'throws',
            'transient',
            'true',
            'try',
            'typeof',
            'var',
            'void',
            'volatile',
            'while',
            'with',
            'yield',
            'const',
            'let',
        ],
    },
    html: {
        keywords: [],
    },
};
class CodeBlock extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const container = document.createElement('div');
        const style = document.createElement('style');
        style.textContent = `
      @import 'colors.css';

      .code-block {
        margin: 0.5rem 0;
      }

      pre {
        font-family: 'Source Code Pro', monospace !important;
        font-size: 14px;
      }

      .code-block--wrapper {
        background-color: var(--fg-color);
        color: var(--bg-color);
        border-radius: 0.5rem;
        font-size: 16px;
        margin: 0;
      }

      .line {
        padding-left: 0.5rem;
        margin: 0;
      }

      .line--even {
        background-color: rgba(255, 255, 255, 0.05);
      }

      .line-number {
        color: var(--gray-color);
        font-size: 12px;
      }

      .js-keyword {
        color: var(--js-keyword-color);
      }
    `;
        const lang = this.getAttribute('lang') || 'js';
        const content = this.textContent
            ?.split('\n')
            .filter((c) => c !== '')
            .map((line, i) => {
            return `<pre class="line ${i % 2 === 0 && 'line--even'}"><span class="line-number">${++i}</span>${line
                .split(' ')
                .map((word) => {
                const lang = this.getAttribute('lang') || 'js';
                if (dict[lang].keywords.includes(word)) {
                    return `<span class="js-keyword">${word}</span>`;
                }
                return `<span>${word}</span>`;
            })
                .join(' ')}</pre>`;
        })
            .join('');
        container.className = 'code-block';
        const wrapper = document.createElement('pre');
        wrapper.className = 'code-block--wrapper';
        wrapper.innerHTML = `${content}`;
        container.append(wrapper);
        shadow.append(style, container.cloneNode(true));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CodeBlock);


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Card extends HTMLElement {
    constructor() {
        super();
        this._side = 0;
        const shadow = this.attachShadow({ mode: 'open' });
        const container = document.createElement('div');
        const style = document.createElement('style');
        style.textContent = `
      .card {
        width: 100%;
        box-shadow: 0 0.3125rem 1.25rem 0 rgba(0, 0, 0, 0.16);
        padding: 0 30px;
        height: 360px;
        aspect-ratio: 7/5;
        border-radius: 16px;
        overflow: auto;
        position: relative;
        font-size: 21px;
        font-weight: medium;
        transform: rotateY(0deg);
        transition: transform 0.3s, background-color 0.15s;
        transform-style: preserve-3d;
        background-color: var(--bg-color);
      }
      
      @media screen and (max-width: 500px) {
        #app {
          padding-top: 3rem;
        }
        .card {
          width: 300px;
          height: auto;
          aspect-ratio: 5/7;
        }
      }
      
      .content {
        width: 100%;
        font-weight: bold;
      }
      
      @keyframes flipOpacity {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      
      .cardTerm {
        background-color: var(--primary-color);
      }
      
      .cardTerm .content {
        animation: flipOpacity 1s;
        color: white;
        font-size: 2rem;
        /* transition: 0.3s; */
      }
      
      .cardDefinition {
        font-weight: normal;
        transform: rotateY(180deg);
      }
      
      .cardDefinition .content {
        transform: rotateY(-180deg);
        animation: flipOpacity 1s;
        font-weight: normal;
        /* transition: 0.3s; */
      }
      
      .cardWrapper {
        height: 100%;
        display: flex;
        align-items: center;
      }
      
      .cardViewer {
        display: flex;
        flex-flow: column;
        width: 100%;
        justify-content: center;
        align-items: center;
      }
      
      .controls {
        margin-top: 1rem;
        display: flex;
        justify-content: space-evenly;
        width: 100%;
      }
    `;
    }
    get side() {
        return this._side;
    }
    set side(side) {
        this._side = side;
    }
    changeSide(number) {
        if (number !== undefined) {
            this._side = number;
        }
        else {
            this._side = this.side === 0 ? 1 : 0;
        }
        if (this.side === 1) {
            this.classList.add('cardDefinition');
            this.classList.remove('cardTerm');
        }
        else {
            this.classList.remove('cardDefinition');
            this.classList.add('cardTerm');
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 5 */
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 7 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 8 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 9 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 10 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 11 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_colors_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,500;1,400&display=swap);"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_colors_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  color: var(--fg-color);\n  background: linear-gradient(90deg, var(--bg-color) 21px, transparent 1%)\n      center,\n    linear-gradient(var(--bg-color) 21px, transparent 1%) center,\n    var(--dot-color);\n  background-size: var(--dot-space) var(--dot-space);\n}\n\npre {\n  font-family: 'Source Code Pro', monospace !important;\n}\n\n#app {\n  padding-top: 9rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 520px;\n  margin: 0 auto;\n  font-family: sans-serif;\n}\n\n.card {\n  width: 100%;\n  box-shadow: 0 0.3125rem 1.25rem 0 rgba(0, 0, 0, 0.16);\n  padding: 0 30px;\n  height: 360px;\n  aspect-ratio: 7/5;\n  border-radius: 16px;\n  overflow: auto;\n  position: relative;\n  font-size: 21px;\n  font-weight: medium;\n  transform: rotateY(0deg);\n  transition: transform 0.3s, background-color 0.15s;\n  transform-style: preserve-3d;\n  background-color: var(--bg-color);\n}\n\n@media screen and (max-width: 500px) {\n  #app {\n    padding-top: 3rem;\n  }\n  .card {\n    width: 300px;\n    height: auto;\n    aspect-ratio: 5/7;\n  }\n}\n\n.content {\n  width: 100%;\n  font-weight: bold;\n}\n\n@keyframes flipOpacity {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.cardTerm {\n  background-color: var(--primary-color);\n}\n\n.cardTerm .content {\n  animation: flipOpacity 1s;\n  color: white;\n  font-size: 2rem;\n  /* transition: 0.3s; */\n}\n\n.cardDefinition {\n  font-weight: normal;\n  transform: rotateY(180deg);\n}\n\n.cardDefinition .content {\n  transform: rotateY(-180deg);\n  animation: flipOpacity 1s;\n  font-weight: normal;\n  /* transition: 0.3s; */\n}\n\n.cardWrapper {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.cardViewer {\n  display: flex;\n  flex-flow: column;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.controls {\n  margin-top: 1rem;\n  display: flex;\n  justify-content: space-evenly;\n  width: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;EACE,sBAAsB;EACtB;;;oBAGkB;EAClB,kDAAkD;AACpD;;AAEA;EACE,oDAAoD;AACtD;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,cAAc;EACd,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,qDAAqD;EACrD,eAAe;EACf,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,wBAAwB;EACxB,kDAAkD;EAClD,4BAA4B;EAC5B,iCAAiC;AACnC;;AAEA;EACE;IACE,iBAAiB;EACnB;EACA;IACE,YAAY;IACZ,YAAY;IACZ,iBAAiB;EACnB;AACF;;AAEA;EACE,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,0BAA0B;AAC5B;;AAEA;EACE,2BAA2B;EAC3B,yBAAyB;EACzB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,WAAW;EACX,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,6BAA6B;EAC7B,WAAW;AACb","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,500;1,400&display=swap');\n@import 'colors.css';\n\nbody {\n  color: var(--fg-color);\n  background: linear-gradient(90deg, var(--bg-color) 21px, transparent 1%)\n      center,\n    linear-gradient(var(--bg-color) 21px, transparent 1%) center,\n    var(--dot-color);\n  background-size: var(--dot-space) var(--dot-space);\n}\n\npre {\n  font-family: 'Source Code Pro', monospace !important;\n}\n\n#app {\n  padding-top: 9rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 520px;\n  margin: 0 auto;\n  font-family: sans-serif;\n}\n\n.card {\n  width: 100%;\n  box-shadow: 0 0.3125rem 1.25rem 0 rgba(0, 0, 0, 0.16);\n  padding: 0 30px;\n  height: 360px;\n  aspect-ratio: 7/5;\n  border-radius: 16px;\n  overflow: auto;\n  position: relative;\n  font-size: 21px;\n  font-weight: medium;\n  transform: rotateY(0deg);\n  transition: transform 0.3s, background-color 0.15s;\n  transform-style: preserve-3d;\n  background-color: var(--bg-color);\n}\n\n@media screen and (max-width: 500px) {\n  #app {\n    padding-top: 3rem;\n  }\n  .card {\n    width: 300px;\n    height: auto;\n    aspect-ratio: 5/7;\n  }\n}\n\n.content {\n  width: 100%;\n  font-weight: bold;\n}\n\n@keyframes flipOpacity {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.cardTerm {\n  background-color: var(--primary-color);\n}\n\n.cardTerm .content {\n  animation: flipOpacity 1s;\n  color: white;\n  font-size: 2rem;\n  /* transition: 0.3s; */\n}\n\n.cardDefinition {\n  font-weight: normal;\n  transform: rotateY(180deg);\n}\n\n.cardDefinition .content {\n  transform: rotateY(-180deg);\n  animation: flipOpacity 1s;\n  font-weight: normal;\n  /* transition: 0.3s; */\n}\n\n.cardWrapper {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.cardViewer {\n  display: flex;\n  flex-flow: column;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.controls {\n  margin-top: 1rem;\n  display: flex;\n  justify-content: space-evenly;\n  width: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 12 */
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 13 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 14 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --bg-color: white;\n  --fg-color: #303030;\n  --dot-color: #a392d9;\n\n  --dot-size: 1px;\n  --dot-space: 22px;\n\n  --primary-color: tomato;\n  --gray-color: gray;\n\n  /* Themes */\n  /* Monokai */\n  --monokai-bg: #272822;\n  --monokai-fg: #f8f8f2;\n  --monokai-comment: #75715e;\n  --monokai-red: #f92672;\n  --monokai-orange: #fd971f;\n  --monokai-light-orange: #e69f66;\n  --monokai-yellow: #e6db74;\n  --monokai-green: #a6e22e;\n  --monokai-blue: #66d9ef;\n  --monokai-purple: #ae81ff;\n\n  /* JS */\n  --js-keyword-color: var(--monokai-blue);\n  --js-comment: var(var(--monokai-comment));\n}\n", "",{"version":3,"sources":["webpack://./src/colors.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,oBAAoB;;EAEpB,eAAe;EACf,iBAAiB;;EAEjB,uBAAuB;EACvB,kBAAkB;;EAElB,WAAW;EACX,YAAY;EACZ,qBAAqB;EACrB,qBAAqB;EACrB,0BAA0B;EAC1B,sBAAsB;EACtB,yBAAyB;EACzB,+BAA+B;EAC/B,yBAAyB;EACzB,wBAAwB;EACxB,uBAAuB;EACvB,yBAAyB;;EAEzB,OAAO;EACP,uCAAuC;EACvC,yCAAyC;AAC3C","sourcesContent":[":root {\n  --bg-color: white;\n  --fg-color: #303030;\n  --dot-color: #a392d9;\n\n  --dot-size: 1px;\n  --dot-space: 22px;\n\n  --primary-color: tomato;\n  --gray-color: gray;\n\n  /* Themes */\n  /* Monokai */\n  --monokai-bg: #272822;\n  --monokai-fg: #f8f8f2;\n  --monokai-comment: #75715e;\n  --monokai-red: #f92672;\n  --monokai-orange: #fd971f;\n  --monokai-light-orange: #e69f66;\n  --monokai-yellow: #e6db74;\n  --monokai-green: #a6e22e;\n  --monokai-blue: #66d9ef;\n  --monokai-purple: #ae81ff;\n\n  /* JS */\n  --js-keyword-color: var(--monokai-blue);\n  --js-comment: var(var(--monokai-comment));\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


(0,_utils__WEBPACK_IMPORTED_MODULE_0__.defineCustomElements)();
class Card {
    constructor(cardData) {
        this._data = cardData;
        this.el = document.createElement('div');
        this.el.classList.add('card');
        this.el.classList.add('cardTerm');
        this._side = 0; // 0 | 1
        this.content = this.data.content;
        this.el.addEventListener('click', (e) => {
            this.changeSide();
        });
        this.el.innerHTML = `<div class="cardWrapper"><div class="content">${this.content[this.side]}</div></div>`;
        this.side = 1;
    }
    get side() {
        return this._side;
    }
    set side(number) {
        this.changeSide(number);
    }
    get data() {
        return this._data;
    }
    set data(cardData) {
        this._data = cardData;
        this.render();
    }
    changeSide(number) {
        if (number !== undefined) {
            this._side = number;
        }
        else {
            this._side = this.side === 0 ? 1 : 0;
        }
        if (this.side === 1) {
            this.el.classList.add('cardDefinition');
            this.el.classList.remove('cardTerm');
        }
        else {
            this.el.classList.remove('cardDefinition');
            this.el.classList.add('cardTerm');
        }
        this.render();
    }
    get element() {
        return this.el;
    }
    render() {
        this.el.innerHTML = `<div class="cardWrapper"><div class="content">${this.data.content[this.side]}</div></div>`;
    }
}
const decks = [
    {
        id: 1,
        name: 'Algorithms + Data structures',
    },
];
const cards = [
    {
        id: 1,
        deckId: 1,
        level: 0,
        content: [
            'Array',
            `In programming, a list of data values, all of the same type, any element of which can be referenced by an expression consisting of the array name followed by an indexing expression. Arrays are part of the fundamentals of data structures, which, in turn, are a major fundamental of computer programming
      <code-block lang="js">
 const array = [1, 2, 3, 4, 5];
 let array2 = [];
      </code-block>
      `,
        ],
    },
    {
        id: 2,
        deckId: 1,
        level: 0,
        content: [
            'Algorithm',
            'A computable set of steps to achieve a desired result.',
        ],
    },
    {
        id: 3,
        deckId: 1,
        level: 0,
        content: [
            'Linked list',
            'A data structure in which a list of nodes or elements of a data structure connected by pointers. A singly linked list has one pointer in each node pointing to the next node in the list; a doubly linked list has two pointers in each node pointing to the next and previous nodes. In a circular list, the first and last nodes of the list are linked together.',
        ],
    },
];
class CardViewer {
    constructor(data) {
        this.data = data;
        this.currentIndex = 0;
        this.card = new Card(data[this.currentIndex]);
        this.controls = document.createElement('div');
        this.buttonPrev = document.createElement('button');
        this.buttonPrev.innerText = 'Prev';
        this.buttonPrev.addEventListener('click', () => {
            this.changeCard(this.currentIndex - 1);
        });
        this.buttonNext = document.createElement('button');
        this.buttonNext.innerText = 'Next';
        this.buttonNext.addEventListener('click', () => {
            this.changeCard(this.currentIndex + 1);
        });
        this.total = document.createElement('div');
        this.total.innerText = `${this.currentIndex} / ${data.length}`;
        this.el = document.createElement('div');
        this.el.className = 'cardViewer';
        this.controls.append(this.buttonPrev, this.total, this.buttonNext);
        this.controls.className = 'controls';
        this.el.append(this.card.element, this.controls);
    }
    get element() {
        return this.el;
    }
    changeCard(number) {
        this.currentIndex = number;
        this.card.side = 0;
        this.render();
    }
    render() {
        this.total.innerText = `${this.currentIndex} / ${this.data.length}`;
        this.card.data = this.data[this.currentIndex];
        this.card.render();
    }
}
const viewer = new CardViewer(cards);
document.querySelector('#app').append(viewer.element);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q04rQztBQUMxQjtBQUNyQiw0REFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw2RUFBNkUsd0JBQXdCO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RSw2QkFBNkI7QUFDMUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVNQUF1TTtBQUN2TTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esa0NBQWtDLG1CQUFtQixJQUFJLFlBQVk7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG1CQUFtQixJQUFJLGlCQUFpQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmtpLXVpLy4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL3Vua2ktdWkvLi9zcmMvY29tcG9uZW50cy9jb2RlLWJsb2NrLnRzIiwid2VicGFjazovL3Vua2ktdWkvLi9zcmMvY29tcG9uZW50cy9jYXJkLnRzIiwid2VicGFjazovL3Vua2ktdWkvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdW5raS11aS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly91bmtpLXVpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdW5raS11aS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdW5raS11aS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly91bmtpLXVpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Vua2ktdWkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly91bmtpLXVpLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly91bmtpLXVpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdW5raS11aS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdW5raS11aS8uL3NyYy9jb2xvcnMuY3NzIiwid2VicGFjazovL3Vua2ktdWkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdW5raS11aS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly91bmtpLXVpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91bmtpLXVpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdW5raS11aS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Vua2ktdWkvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvZGVCbG9jayBmcm9tICcuL2NvbXBvbmVudHMvY29kZS1ibG9jayc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NvbXBvbmVudHMvY2FyZCc7XG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudHMoKSB7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjb2RlLWJsb2NrJywgQ29kZUJsb2NrKTtcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NhcmQtY29tcG9uZW50JywgQ2FyZCk7XG59XG4iLCJjb25zdCBkaWN0ID0ge1xuICAgIGpzOiB7XG4gICAgICAgIGtleXdvcmRzOiBbXG4gICAgICAgICAgICAnc3VwZXInLFxuICAgICAgICAgICAgJ3N3aXRjaCcsXG4gICAgICAgICAgICAnc3luY2hyb25pemVkJyxcbiAgICAgICAgICAgICd0aGlzJyxcbiAgICAgICAgICAgICd0aHJvdycsXG4gICAgICAgICAgICAndGhyb3dzJyxcbiAgICAgICAgICAgICd0cmFuc2llbnQnLFxuICAgICAgICAgICAgJ3RydWUnLFxuICAgICAgICAgICAgJ3RyeScsXG4gICAgICAgICAgICAndHlwZW9mJyxcbiAgICAgICAgICAgICd2YXInLFxuICAgICAgICAgICAgJ3ZvaWQnLFxuICAgICAgICAgICAgJ3ZvbGF0aWxlJyxcbiAgICAgICAgICAgICd3aGlsZScsXG4gICAgICAgICAgICAnd2l0aCcsXG4gICAgICAgICAgICAneWllbGQnLFxuICAgICAgICAgICAgJ2NvbnN0JyxcbiAgICAgICAgICAgICdsZXQnLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgaHRtbDoge1xuICAgICAgICBrZXl3b3JkczogW10sXG4gICAgfSxcbn07XG5jbGFzcyBDb2RlQmxvY2sgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGNvbnN0IHNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IGBcbiAgICAgIEBpbXBvcnQgJ2NvbG9ycy5jc3MnO1xuXG4gICAgICAuY29kZS1ibG9jayB7XG4gICAgICAgIG1hcmdpbjogMC41cmVtIDA7XG4gICAgICB9XG5cbiAgICAgIHByZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIENvZGUgUHJvJywgbW9ub3NwYWNlICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cblxuICAgICAgLmNvZGUtYmxvY2stLXdyYXBwZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mZy1jb2xvcik7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgIC5saW5lIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgLmxpbmUtLWV2ZW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICAgICAgfVxuXG4gICAgICAubGluZS1udW1iZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tZ3JheS1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cblxuICAgICAgLmpzLWtleXdvcmQge1xuICAgICAgICBjb2xvcjogdmFyKC0tanMta2V5d29yZC1jb2xvcik7XG4gICAgICB9XG4gICAgYDtcbiAgICAgICAgY29uc3QgbGFuZyA9IHRoaXMuZ2V0QXR0cmlidXRlKCdsYW5nJykgfHwgJ2pzJztcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMudGV4dENvbnRlbnRcbiAgICAgICAgICAgID8uc3BsaXQoJ1xcbicpXG4gICAgICAgICAgICAuZmlsdGVyKChjKSA9PiBjICE9PSAnJylcbiAgICAgICAgICAgIC5tYXAoKGxpbmUsIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgPHByZSBjbGFzcz1cImxpbmUgJHtpICUgMiA9PT0gMCAmJiAnbGluZS0tZXZlbid9XCI+PHNwYW4gY2xhc3M9XCJsaW5lLW51bWJlclwiPiR7KytpfTwvc3Bhbj4ke2xpbmVcbiAgICAgICAgICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAgICAgICAgIC5tYXAoKHdvcmQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYW5nID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2xhbmcnKSB8fCAnanMnO1xuICAgICAgICAgICAgICAgIGlmIChkaWN0W2xhbmddLmtleXdvcmRzLmluY2x1ZGVzKHdvcmQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPHNwYW4gY2xhc3M9XCJqcy1rZXl3b3JkXCI+JHt3b3JkfTwvc3Bhbj5gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYDxzcGFuPiR7d29yZH08L3NwYW4+YDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmpvaW4oJyAnKX08L3ByZT5gO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmpvaW4oJycpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2NvZGUtYmxvY2snO1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XG4gICAgICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gJ2NvZGUtYmxvY2stLXdyYXBwZXInO1xuICAgICAgICB3cmFwcGVyLmlubmVySFRNTCA9IGAke2NvbnRlbnR9YDtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZCh3cmFwcGVyKTtcbiAgICAgICAgc2hhZG93LmFwcGVuZChzdHlsZSwgY29udGFpbmVyLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ29kZUJsb2NrO1xuIiwiY2xhc3MgQ2FyZCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fc2lkZSA9IDA7XG4gICAgICAgIGNvbnN0IHNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IGBcbiAgICAgIC5jYXJkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC4zMTI1cmVtIDEuMjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgICAgIGhlaWdodDogMzYwcHg7XG4gICAgICAgIGFzcGVjdC1yYXRpbzogNy81O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBtZWRpdW07XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4xNXM7XG4gICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgI2FwcCB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDNyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgYXNwZWN0LXJhdGlvOiA1Lzc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmNvbnRlbnQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIEBrZXlmcmFtZXMgZmxpcE9wYWNpdHkge1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIHRvIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jYXJkVGVybSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuY2FyZFRlcm0gLmNvbnRlbnQge1xuICAgICAgICBhbmltYXRpb246IGZsaXBPcGFjaXR5IDFzO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgLyogdHJhbnNpdGlvbjogMC4zczsgKi9cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmNhcmREZWZpbml0aW9uIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jYXJkRGVmaW5pdGlvbiAuY29udGVudCB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcbiAgICAgICAgYW5pbWF0aW9uOiBmbGlwT3BhY2l0eSAxcztcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgLyogdHJhbnNpdGlvbjogMC4zczsgKi9cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmNhcmRXcmFwcGVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuY2FyZFZpZXdlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jb250cm9scyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICBgO1xuICAgIH1cbiAgICBnZXQgc2lkZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGU7XG4gICAgfVxuICAgIHNldCBzaWRlKHNpZGUpIHtcbiAgICAgICAgdGhpcy5fc2lkZSA9IHNpZGU7XG4gICAgfVxuICAgIGNoYW5nZVNpZGUobnVtYmVyKSB7XG4gICAgICAgIGlmIChudW1iZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fc2lkZSA9IG51bWJlcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NpZGUgPSB0aGlzLnNpZGUgPT09IDAgPyAxIDogMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zaWRlID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2NhcmREZWZpbml0aW9uJyk7XG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcmRUZXJtJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcmREZWZpbml0aW9uJyk7XG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2NhcmRUZXJtJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbG9ycy5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNvdXJjZStDb2RlK1BybzppdGFsLHdnaHRAMCw0MDA7MCw1MDA7MSw0MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBjb2xvcjogdmFyKC0tZmctY29sb3IpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1iZy1jb2xvcikgMjFweCwgdHJhbnNwYXJlbnQgMSUpXFxuICAgICAgY2VudGVyLFxcbiAgICBsaW5lYXItZ3JhZGllbnQodmFyKC0tYmctY29sb3IpIDIxcHgsIHRyYW5zcGFyZW50IDElKSBjZW50ZXIsXFxuICAgIHZhcigtLWRvdC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IHZhcigtLWRvdC1zcGFjZSkgdmFyKC0tZG90LXNwYWNlKTtcXG59XFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIENvZGUgUHJvJywgbW9ub3NwYWNlICFpbXBvcnRhbnQ7XFxufVxcblxcbiNhcHAge1xcbiAgcGFkZGluZy10b3A6IDlyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiA1MjBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbi5jYXJkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNoYWRvdzogMCAwLjMxMjVyZW0gMS4yNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XFxuICBwYWRkaW5nOiAwIDMwcHg7XFxuICBoZWlnaHQ6IDM2MHB4O1xcbiAgYXNwZWN0LXJhdGlvOiA3LzU7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDIxcHg7XFxuICBmb250LXdlaWdodDogbWVkaXVtO1xcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4xNXM7XFxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgI2FwcCB7XFxuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xcbiAgfVxcbiAgLmNhcmQge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYXNwZWN0LXJhdGlvOiA1Lzc7XFxuICB9XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbkBrZXlmcmFtZXMgZmxpcE9wYWNpdHkge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5jYXJkVGVybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmNhcmRUZXJtIC5jb250ZW50IHtcXG4gIGFuaW1hdGlvbjogZmxpcE9wYWNpdHkgMXM7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICAvKiB0cmFuc2l0aW9uOiAwLjNzOyAqL1xcbn1cXG5cXG4uY2FyZERlZmluaXRpb24ge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbn1cXG5cXG4uY2FyZERlZmluaXRpb24gLmNvbnRlbnQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xcbiAgYW5pbWF0aW9uOiBmbGlwT3BhY2l0eSAxcztcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAvKiB0cmFuc2l0aW9uOiAwLjNzOyAqL1xcbn1cXG5cXG4uY2FyZFdyYXBwZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkVmlld2VyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udHJvbHMge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0Usc0JBQXNCO0VBQ3RCOzs7b0JBR2tCO0VBQ2xCLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxREFBcUQ7RUFDckQsZUFBZTtFQUNmLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsa0RBQWtEO0VBQ2xELDRCQUE0QjtFQUM1QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNvdXJjZStDb2RlK1BybzppdGFsLHdnaHRAMCw0MDA7MCw1MDA7MSw0MDAmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCAnY29sb3JzLmNzcyc7XFxuXFxuYm9keSB7XFxuICBjb2xvcjogdmFyKC0tZmctY29sb3IpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1iZy1jb2xvcikgMjFweCwgdHJhbnNwYXJlbnQgMSUpXFxuICAgICAgY2VudGVyLFxcbiAgICBsaW5lYXItZ3JhZGllbnQodmFyKC0tYmctY29sb3IpIDIxcHgsIHRyYW5zcGFyZW50IDElKSBjZW50ZXIsXFxuICAgIHZhcigtLWRvdC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IHZhcigtLWRvdC1zcGFjZSkgdmFyKC0tZG90LXNwYWNlKTtcXG59XFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIENvZGUgUHJvJywgbW9ub3NwYWNlICFpbXBvcnRhbnQ7XFxufVxcblxcbiNhcHAge1xcbiAgcGFkZGluZy10b3A6IDlyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiA1MjBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbi5jYXJkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNoYWRvdzogMCAwLjMxMjVyZW0gMS4yNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XFxuICBwYWRkaW5nOiAwIDMwcHg7XFxuICBoZWlnaHQ6IDM2MHB4O1xcbiAgYXNwZWN0LXJhdGlvOiA3LzU7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDIxcHg7XFxuICBmb250LXdlaWdodDogbWVkaXVtO1xcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4xNXM7XFxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgI2FwcCB7XFxuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xcbiAgfVxcbiAgLmNhcmQge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYXNwZWN0LXJhdGlvOiA1Lzc7XFxuICB9XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbkBrZXlmcmFtZXMgZmxpcE9wYWNpdHkge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5jYXJkVGVybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmNhcmRUZXJtIC5jb250ZW50IHtcXG4gIGFuaW1hdGlvbjogZmxpcE9wYWNpdHkgMXM7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICAvKiB0cmFuc2l0aW9uOiAwLjNzOyAqL1xcbn1cXG5cXG4uY2FyZERlZmluaXRpb24ge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbn1cXG5cXG4uY2FyZERlZmluaXRpb24gLmNvbnRlbnQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xcbiAgYW5pbWF0aW9uOiBmbGlwT3BhY2l0eSAxcztcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAvKiB0cmFuc2l0aW9uOiAwLjNzOyAqL1xcbn1cXG5cXG4uY2FyZFdyYXBwZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkVmlld2VyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udHJvbHMge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWJnLWNvbG9yOiB3aGl0ZTtcXG4gIC0tZmctY29sb3I6ICMzMDMwMzA7XFxuICAtLWRvdC1jb2xvcjogI2EzOTJkOTtcXG5cXG4gIC0tZG90LXNpemU6IDFweDtcXG4gIC0tZG90LXNwYWNlOiAyMnB4O1xcblxcbiAgLS1wcmltYXJ5LWNvbG9yOiB0b21hdG87XFxuICAtLWdyYXktY29sb3I6IGdyYXk7XFxuXFxuICAvKiBUaGVtZXMgKi9cXG4gIC8qIE1vbm9rYWkgKi9cXG4gIC0tbW9ub2thaS1iZzogIzI3MjgyMjtcXG4gIC0tbW9ub2thaS1mZzogI2Y4ZjhmMjtcXG4gIC0tbW9ub2thaS1jb21tZW50OiAjNzU3MTVlO1xcbiAgLS1tb25va2FpLXJlZDogI2Y5MjY3MjtcXG4gIC0tbW9ub2thaS1vcmFuZ2U6ICNmZDk3MWY7XFxuICAtLW1vbm9rYWktbGlnaHQtb3JhbmdlOiAjZTY5ZjY2O1xcbiAgLS1tb25va2FpLXllbGxvdzogI2U2ZGI3NDtcXG4gIC0tbW9ub2thaS1ncmVlbjogI2E2ZTIyZTtcXG4gIC0tbW9ub2thaS1ibHVlOiAjNjZkOWVmO1xcbiAgLS1tb25va2FpLXB1cnBsZTogI2FlODFmZjtcXG5cXG4gIC8qIEpTICovXFxuICAtLWpzLWtleXdvcmQtY29sb3I6IHZhcigtLW1vbm9rYWktYmx1ZSk7XFxuICAtLWpzLWNvbW1lbnQ6IHZhcih2YXIoLS1tb25va2FpLWNvbW1lbnQpKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbG9ycy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG9CQUFvQjs7RUFFcEIsZUFBZTtFQUNmLGlCQUFpQjs7RUFFakIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjs7RUFFbEIsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQix5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2Qix5QkFBeUI7O0VBRXpCLE9BQU87RUFDUCx1Q0FBdUM7RUFDdkMseUNBQXlDO0FBQzNDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tYmctY29sb3I6IHdoaXRlO1xcbiAgLS1mZy1jb2xvcjogIzMwMzAzMDtcXG4gIC0tZG90LWNvbG9yOiAjYTM5MmQ5O1xcblxcbiAgLS1kb3Qtc2l6ZTogMXB4O1xcbiAgLS1kb3Qtc3BhY2U6IDIycHg7XFxuXFxuICAtLXByaW1hcnktY29sb3I6IHRvbWF0bztcXG4gIC0tZ3JheS1jb2xvcjogZ3JheTtcXG5cXG4gIC8qIFRoZW1lcyAqL1xcbiAgLyogTW9ub2thaSAqL1xcbiAgLS1tb25va2FpLWJnOiAjMjcyODIyO1xcbiAgLS1tb25va2FpLWZnOiAjZjhmOGYyO1xcbiAgLS1tb25va2FpLWNvbW1lbnQ6ICM3NTcxNWU7XFxuICAtLW1vbm9rYWktcmVkOiAjZjkyNjcyO1xcbiAgLS1tb25va2FpLW9yYW5nZTogI2ZkOTcxZjtcXG4gIC0tbW9ub2thaS1saWdodC1vcmFuZ2U6ICNlNjlmNjY7XFxuICAtLW1vbm9rYWkteWVsbG93OiAjZTZkYjc0O1xcbiAgLS1tb25va2FpLWdyZWVuOiAjYTZlMjJlO1xcbiAgLS1tb25va2FpLWJsdWU6ICM2NmQ5ZWY7XFxuICAtLW1vbm9rYWktcHVycGxlOiAjYWU4MWZmO1xcblxcbiAgLyogSlMgKi9cXG4gIC0tanMta2V5d29yZC1jb2xvcjogdmFyKC0tbW9ub2thaS1ibHVlKTtcXG4gIC0tanMtY29tbWVudDogdmFyKHZhcigtLW1vbm9rYWktY29tbWVudCkpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnRzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmRlZmluZUN1c3RvbUVsZW1lbnRzKCk7XG5jbGFzcyBDYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihjYXJkRGF0YSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gY2FyZERhdGE7XG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnY2FyZFRlcm0nKTtcbiAgICAgICAgdGhpcy5fc2lkZSA9IDA7IC8vIDAgfCAxXG4gICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuZGF0YS5jb250ZW50O1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU2lkZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImNhcmRXcmFwcGVyXCI+PGRpdiBjbGFzcz1cImNvbnRlbnRcIj4ke3RoaXMuY29udGVudFt0aGlzLnNpZGVdfTwvZGl2PjwvZGl2PmA7XG4gICAgICAgIHRoaXMuc2lkZSA9IDE7XG4gICAgfVxuICAgIGdldCBzaWRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZTtcbiAgICB9XG4gICAgc2V0IHNpZGUobnVtYmVyKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlU2lkZShudW1iZXIpO1xuICAgIH1cbiAgICBnZXQgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgfVxuICAgIHNldCBkYXRhKGNhcmREYXRhKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBjYXJkRGF0YTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gICAgY2hhbmdlU2lkZShudW1iZXIpIHtcbiAgICAgICAgaWYgKG51bWJlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9zaWRlID0gbnVtYmVyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2lkZSA9IHRoaXMuc2lkZSA9PT0gMCA/IDEgOiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNpZGUgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnY2FyZERlZmluaXRpb24nKTtcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnY2FyZFRlcm0nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnY2FyZERlZmluaXRpb24nKTtcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnY2FyZFRlcm0nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgICBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWw7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImNhcmRXcmFwcGVyXCI+PGRpdiBjbGFzcz1cImNvbnRlbnRcIj4ke3RoaXMuZGF0YS5jb250ZW50W3RoaXMuc2lkZV19PC9kaXY+PC9kaXY+YDtcbiAgICB9XG59XG5jb25zdCBkZWNrcyA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAnQWxnb3JpdGhtcyArIERhdGEgc3RydWN0dXJlcycsXG4gICAgfSxcbl07XG5jb25zdCBjYXJkcyA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBkZWNrSWQ6IDEsXG4gICAgICAgIGxldmVsOiAwLFxuICAgICAgICBjb250ZW50OiBbXG4gICAgICAgICAgICAnQXJyYXknLFxuICAgICAgICAgICAgYEluIHByb2dyYW1taW5nLCBhIGxpc3Qgb2YgZGF0YSB2YWx1ZXMsIGFsbCBvZiB0aGUgc2FtZSB0eXBlLCBhbnkgZWxlbWVudCBvZiB3aGljaCBjYW4gYmUgcmVmZXJlbmNlZCBieSBhbiBleHByZXNzaW9uIGNvbnNpc3Rpbmcgb2YgdGhlIGFycmF5IG5hbWUgZm9sbG93ZWQgYnkgYW4gaW5kZXhpbmcgZXhwcmVzc2lvbi4gQXJyYXlzIGFyZSBwYXJ0IG9mIHRoZSBmdW5kYW1lbnRhbHMgb2YgZGF0YSBzdHJ1Y3R1cmVzLCB3aGljaCwgaW4gdHVybiwgYXJlIGEgbWFqb3IgZnVuZGFtZW50YWwgb2YgY29tcHV0ZXIgcHJvZ3JhbW1pbmdcbiAgICAgIDxjb2RlLWJsb2NrIGxhbmc9XCJqc1wiPlxuIGNvbnN0IGFycmF5ID0gWzEsIDIsIDMsIDQsIDVdO1xuIGxldCBhcnJheTIgPSBbXTtcbiAgICAgIDwvY29kZS1ibG9jaz5cbiAgICAgIGAsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBkZWNrSWQ6IDEsXG4gICAgICAgIGxldmVsOiAwLFxuICAgICAgICBjb250ZW50OiBbXG4gICAgICAgICAgICAnQWxnb3JpdGhtJyxcbiAgICAgICAgICAgICdBIGNvbXB1dGFibGUgc2V0IG9mIHN0ZXBzIHRvIGFjaGlldmUgYSBkZXNpcmVkIHJlc3VsdC4nLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgZGVja0lkOiAxLFxuICAgICAgICBsZXZlbDogMCxcbiAgICAgICAgY29udGVudDogW1xuICAgICAgICAgICAgJ0xpbmtlZCBsaXN0JyxcbiAgICAgICAgICAgICdBIGRhdGEgc3RydWN0dXJlIGluIHdoaWNoIGEgbGlzdCBvZiBub2RlcyBvciBlbGVtZW50cyBvZiBhIGRhdGEgc3RydWN0dXJlIGNvbm5lY3RlZCBieSBwb2ludGVycy4gQSBzaW5nbHkgbGlua2VkIGxpc3QgaGFzIG9uZSBwb2ludGVyIGluIGVhY2ggbm9kZSBwb2ludGluZyB0byB0aGUgbmV4dCBub2RlIGluIHRoZSBsaXN0OyBhIGRvdWJseSBsaW5rZWQgbGlzdCBoYXMgdHdvIHBvaW50ZXJzIGluIGVhY2ggbm9kZSBwb2ludGluZyB0byB0aGUgbmV4dCBhbmQgcHJldmlvdXMgbm9kZXMuIEluIGEgY2lyY3VsYXIgbGlzdCwgdGhlIGZpcnN0IGFuZCBsYXN0IG5vZGVzIG9mIHRoZSBsaXN0IGFyZSBsaW5rZWQgdG9nZXRoZXIuJyxcbiAgICAgICAgXSxcbiAgICB9LFxuXTtcbmNsYXNzIENhcmRWaWV3ZXIge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuICAgICAgICB0aGlzLmNhcmQgPSBuZXcgQ2FyZChkYXRhW3RoaXMuY3VycmVudEluZGV4XSk7XG4gICAgICAgIHRoaXMuY29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5idXR0b25QcmV2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRoaXMuYnV0dG9uUHJldi5pbm5lclRleHQgPSAnUHJldic7XG4gICAgICAgIHRoaXMuYnV0dG9uUHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQ2FyZCh0aGlzLmN1cnJlbnRJbmRleCAtIDEpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5idXR0b25OZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRoaXMuYnV0dG9uTmV4dC5pbm5lclRleHQgPSAnTmV4dCc7XG4gICAgICAgIHRoaXMuYnV0dG9uTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQ2FyZCh0aGlzLmN1cnJlbnRJbmRleCArIDEpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50b3RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLnRvdGFsLmlubmVyVGV4dCA9IGAke3RoaXMuY3VycmVudEluZGV4fSAvICR7ZGF0YS5sZW5ndGh9YDtcbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTmFtZSA9ICdjYXJkVmlld2VyJztcbiAgICAgICAgdGhpcy5jb250cm9scy5hcHBlbmQodGhpcy5idXR0b25QcmV2LCB0aGlzLnRvdGFsLCB0aGlzLmJ1dHRvbk5leHQpO1xuICAgICAgICB0aGlzLmNvbnRyb2xzLmNsYXNzTmFtZSA9ICdjb250cm9scyc7XG4gICAgICAgIHRoaXMuZWwuYXBwZW5kKHRoaXMuY2FyZC5lbGVtZW50LCB0aGlzLmNvbnRyb2xzKTtcbiAgICB9XG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsO1xuICAgIH1cbiAgICBjaGFuZ2VDYXJkKG51bWJlcikge1xuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IG51bWJlcjtcbiAgICAgICAgdGhpcy5jYXJkLnNpZGUgPSAwO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMudG90YWwuaW5uZXJUZXh0ID0gYCR7dGhpcy5jdXJyZW50SW5kZXh9IC8gJHt0aGlzLmRhdGEubGVuZ3RofWA7XG4gICAgICAgIHRoaXMuY2FyZC5kYXRhID0gdGhpcy5kYXRhW3RoaXMuY3VycmVudEluZGV4XTtcbiAgICAgICAgdGhpcy5jYXJkLnJlbmRlcigpO1xuICAgIH1cbn1cbmNvbnN0IHZpZXdlciA9IG5ldyBDYXJkVmlld2VyKGNhcmRzKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKS5hcHBlbmQodmlld2VyLmVsZW1lbnQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9