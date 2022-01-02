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
/* harmony import */ var _components_card_viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _components_page_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);




function defineCustomElements() {
    customElements.define('code-block', _components_code_block__WEBPACK_IMPORTED_MODULE_0__["default"]);
    customElements.define('card-component', _components_card__WEBPACK_IMPORTED_MODULE_1__["default"]);
    customElements.define('card-viewer', _components_card_viewer__WEBPACK_IMPORTED_MODULE_2__["default"]);
    customElements.define('page-header', _components_page_header__WEBPACK_IMPORTED_MODULE_3__["default"]);
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
      .code-block {
        margin: 0.5rem 0;
      }

      pre {
        font-family: 'Source Code Pro', monospace !important;
        font-size: 14px;
      }

      .code-block--wrapper {
        background-color: var(--monokai-bg);
        color: var(--monokai-fg);
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
const style = document.createElement('style');
style.textContent = `
  .container {
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
    background-color: var(--card-bg);
    cursor: default;
  }

  .move {
    cursor: grabbing !important;
  }

  .hide {
    opacity: 0;
  }
  
  @media screen and (max-width: 500px) {
    .container {
      width: 300px;
      height: auto;
      aspect-ratio: 5/7;
    }
  }

  .side-1 .main, .side-1 footer {
    transform: rotateY(-180deg);
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
  
  .side-0 {
    background-color: var(--primary-color);
  }
  
  .side-0 .content {
    animation: flipOpacity 1s;
    color: white;
    font-size: 2rem;
    transition: 0.3s;
  }
  
  .side-1 {
    font-weight: normal;
    transform: rotateY(180deg);
  }
  
  .side-1 .content {

    animation: flipOpacity 1s;
    font-weight: normal;
    /* transition: 0.3s; */
  }
  
  .wrapper {
    height: 100%;
    display: grid;
    align-items: center;
    flex-flow: column;
    grid-template-rows: repeat(7, 1fr);
    gap: 1rem;
  }

  .main {
    grid-row-start: 1;
    grid-row-end: 7;
  }

  footer {
    max-height: 32px;
    font-size: 11px;
    width: 100%;
    grid-row-start: 7;
    opacity: 0.5;
    text-transform: uppercase;
  }

  @keyframes moveLeft {
    0% {
    }
     
     25% {
       /* opacity: 0; */
       transform: translateX(100px)
     }
     27% {
       opacity: 0;
       transform: translateX(-100px)
     }
    100% {
      opacity: 1;
      transform: translateX(0px)
    }
 }
 @keyframes moveRight {
    0% {
    }
     
     25% {
       /* opacity: 0; */
       transform: translateX(-100px)
     }
     27% {
       opacity: 0;
       transform: translateX(100px)
     }
    100% {
      opacity: 1;
      transform: translateX(0px)
    }
 }
 
  .container.moveLeft {
   animation: moveLeft 1s;
 }
 
  .container.moveRight {
   animation: moveRight 1s;
 }
`;
class Card extends HTMLElement {
    constructor() {
        super();
        this._side = 0;
        this._data = {
            id: 0,
            deck: {
                id: 0,
                name: 'Deck name / 000',
            },
            content: ['Term', 'Definition'],
            level: 0,
        };
    }
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        console.log(this.data);
        const template = document.createElement('div');
        template.innerHTML = `
      <div class="container side-${this.side}">
        <div class="wrapper">
          <main class="main"></main>
          <footer>${this.data.deck.name}</footer>
        </div>
      </div>
    `;
        shadow.append(style, template.cloneNode(true));
        const container = this.shadowRoot?.querySelector('.container');
        if (container) {
            container.addEventListener('dblclick', (e) => {
                this.changeSide();
            });
        }
        this.changeContent(this.data.content[this.side], `${this.data.deck.name}`);
    }
    get side() {
        return this._side;
    }
    set side(side) {
        this._side = side;
    }
    get data() {
        return this._data;
    }
    set data(data) {
        this._data = data;
        this.changeSide(0);
        this.changeContent(this.data.content[this.side], this.info);
    }
    get info() {
        return `${this.data.deck.name} / ${this.data.id
            .toString()
            .padStart(3, '0')}`;
    }
    changeContent(text, footerData = this.info) {
        const content = this.shadowRoot?.querySelector('main');
        console.log(content);
        if (content) {
            content.innerHTML = `<div class="content">${text}</div>`;
            const footer = this.shadowRoot?.querySelector('footer');
            if (footer) {
                footer.innerHTML = footerData;
            }
        }
    }
    changeSide(number) {
        const element = this.shadowRoot?.querySelector('.container');
        if (number !== undefined) {
            this.side = number;
        }
        else {
            this.side = this.side === 0 ? 1 : 0;
        }
        if (element) {
            if (this.side === 1) {
                element.classList.remove(`side-0`);
                element.classList.add(`side-1`);
                element.querySelector('#side-0')?.classList.add('hide');
                element.querySelector('#side-1')?.classList.remove('hide');
            }
            else {
                element.classList.remove(`side-1`);
                element.classList.add(`side-0`);
                element.querySelector('#side-1')?.classList.add('hide');
                element.querySelector('#side-0')?.classList.remove('hide');
            }
        }
        this.changeContent(this.data.content[this.side], this.info);
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
const template = document.createElement('div');
template.innerHTML = `
  <div class="card-viewer">
    <div>
      <card-component/>
    </div>
    <div class="controls">
      <button class="button" id="buttonPrev">Prev</button>
      <div class="total">
        0 / 0
      </div>
      <button class="button" id="buttonNext">Next</button>
    </div>
  </div>
`;
const style = document.createElement('style');
style.textContent = `
  .card-viewer {
    width: 100%;
    height: 100%;
  }

  .controls {
    display: flex;
  }
`;
class CardViewer extends HTMLElement {
    constructor() {
        super();
        this._cards = [];
        this._currentIndex = 0;
    }
    connectedCallback() {
        const position = {
            startX: 0,
            startY: 0,
            endX: 0,
            endY: 0,
            isMoving: false,
        };
        const shadow = this.attachShadow({ mode: 'open' });
        const container = template.cloneNode(true);
        shadow.append(style, container);
        const buttonPrev = this.shadowRoot?.querySelector('#buttonPrev');
        const buttonNext = this.shadowRoot?.querySelector('#buttonNext');
        this.changeCard();
        buttonPrev.addEventListener('click', () => {
            this.currentIndex -= 1;
            console.log(this.currentIndex);
        });
        buttonNext.addEventListener('click', () => {
            this.currentIndex += 1;
        });
        container.addEventListener('mousedown', (e) => {
            position.startX = e.offsetX;
            position.isMoving = true;
        });
        container.addEventListener('mousedown', (e) => {
            position.endX = e.offsetX;
            container.classList[position.isMoving ? 'add' : 'remove']('move');
        });
        container.addEventListener('mouseup', (e) => {
            position.isMoving = false;
            const diff = position.endX - position.startX;
            if (diff > 100) {
                container.classList.add('moveRight');
            }
            position.endX = 0;
            container.classList.remove('move');
        });
    }
    get cards() {
        return this._cards;
    }
    set cards(data) {
        this._cards = data;
    }
    get currentIndex() {
        return this._currentIndex;
    }
    set currentIndex(idx) {
        this._currentIndex = idx;
        this.changeCard(this._cards[this._currentIndex]);
    }
    changeCard(data = this._cards[this.currentIndex]) {
        const card = this.shadowRoot?.querySelector('card-component');
        if (card) {
            console.log(this._cards[this.currentIndex]);
            card.data = this._cards[this.currentIndex];
            card.id = this.currentIndex.toString();
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardViewer);


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const style = document.createElement('style');
style.textContent = `
  .container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
  }

  .wrapper {
    display: flex;
  }
`;
const template = document.createElement('template');
template.innerHTML = `
  <header class="container">
    <div class="wrapper">
      <button class="button" id="themeBtn">
        Theme
      </button>
    </div>
  </header>
`;
class PageHeader extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.append(style, template.content.cloneNode(true));
        const themeBtn = this.shadowRoot?.querySelector('#themeBtn');
        if (themeBtn) {
            themeBtn.addEventListener('click', () => {
                const theme = document.body.getAttribute('data-theme');
                document.body.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
            });
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    decks: [
        {
            id: 1,
            name: 'Algorithms + Data structures',
        },
    ],
    cards: [
        {
            id: 1,
            deck: {
                id: 1,
                name: 'Algorithms + Data structures',
            },
            level: 0,
            content: [
                'Array',
                `In <b>programming</b>, a list of data values, all of the same type, any element of which can be referenced by an expression consisting of the array name followed by an indexing expression. Arrays are part of the fundamentals of data structures, which, in turn, are a major fundamental of computer programming
      <code-block lang='js'>
 const array = [1, 2, 3, 4, 5];
 let array2 = [];
      </code-block>
      `,
            ],
        },
        {
            id: 2,
            deck: {
                id: 1,
                name: 'Algorithms + Data structures',
            },
            level: 0,
            content: [
                'Algorithm',
                'A computable set of steps to achieve a desired result.',
            ],
        },
        {
            id: 3,
            deck: {
                id: 1,
                name: 'Algorithms + Data structures',
            },
            level: 0,
            content: [
                'Linked list',
                'A data structure in which a list of nodes or elements of a data structure connected by pointers. A singly linked list has one pointer in each node pointing to the next node in the list; a doubly linked list has two pointers in each node pointing to the next and previous nodes. In a circular list, the first and last nodes of the list are linked together.',
            ],
        },
    ],
});


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_colors_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_buttons_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,500;1,400&display=swap);"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_colors_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_buttons_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  color: var(--fg-color);\n  background: linear-gradient(90deg, var(--bg-color) 21px, transparent 1%)\n      center,\n    linear-gradient(var(--bg-color) 21px, transparent 1%) center,\n    var(--dot-color);\n  background-size: var(--dot-space) var(--dot-space);\n}\n\n#app {\n  padding-top: 9rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 520px;\n  margin: 0 auto;\n  position: relative;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAKA;EACE,sBAAsB;EACtB;;;oBAGkB;EAClB,kDAAkD;AACpD;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,cAAc;EACd,kBAAkB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,500;1,400&display=swap');\n@import 'colors.css';\n@import 'fonts.css';\n@import 'buttons.css';\n\nbody {\n  color: var(--fg-color);\n  background: linear-gradient(90deg, var(--bg-color) 21px, transparent 1%)\n      center,\n    linear-gradient(var(--bg-color) 21px, transparent 1%) center,\n    var(--dot-color);\n  background-size: var(--dot-space) var(--dot-space);\n}\n\n#app {\n  padding-top: 9rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 520px;\n  margin: 0 auto;\n  position: relative;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --bg-color: white;\n  --fg-color: #303030;\n  --dot-color: #a392d9;\n\n  --dot-size: 1px;\n  --dot-space: 22px;\n  --card-bg: #fdfefe;\n\n  --primary-color: tomato;\n  --gray-color: gray;\n\n  /* Themes */\n  /* Monokai */\n  --monokai-bg: #272822;\n  --monokai-fg: #f8f8f2;\n  --monokai-comment: #75715e;\n  --monokai-red: #f92672;\n  --monokai-orange: #fd971f;\n  --monokai-light-orange: #e69f66;\n  --monokai-yellow: #e6db74;\n  --monokai-green: #a6e22e;\n  --monokai-blue: #66d9ef;\n  --monokai-purple: #ae81ff;\n\n  /* JS */\n  --js-keyword-color: var(--monokai-blue);\n  --js-comment: var(var(--monokai-comment));\n}\n\n[data-theme='dark'] {\n  --secondary-color: #818cab;\n  --dot-color: #30363d;\n  --bg-color: #0d1117;\n  --fg-color: #e1e1ff;\n  --card-bg: #10171e;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/colors.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,oBAAoB;;EAEpB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;;EAElB,uBAAuB;EACvB,kBAAkB;;EAElB,WAAW;EACX,YAAY;EACZ,qBAAqB;EACrB,qBAAqB;EACrB,0BAA0B;EAC1B,sBAAsB;EACtB,yBAAyB;EACzB,+BAA+B;EAC/B,yBAAyB;EACzB,wBAAwB;EACxB,uBAAuB;EACvB,yBAAyB;;EAEzB,OAAO;EACP,uCAAuC;EACvC,yCAAyC;AAC3C;;AAEA;EACE,0BAA0B;EAC1B,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;AACpB","sourcesContent":[":root {\n  --bg-color: white;\n  --fg-color: #303030;\n  --dot-color: #a392d9;\n\n  --dot-size: 1px;\n  --dot-space: 22px;\n  --card-bg: #fdfefe;\n\n  --primary-color: tomato;\n  --gray-color: gray;\n\n  /* Themes */\n  /* Monokai */\n  --monokai-bg: #272822;\n  --monokai-fg: #f8f8f2;\n  --monokai-comment: #75715e;\n  --monokai-red: #f92672;\n  --monokai-orange: #fd971f;\n  --monokai-light-orange: #e69f66;\n  --monokai-yellow: #e6db74;\n  --monokai-green: #a6e22e;\n  --monokai-blue: #66d9ef;\n  --monokai-purple: #ae81ff;\n\n  /* JS */\n  --js-keyword-color: var(--monokai-blue);\n  --js-comment: var(var(--monokai-comment));\n}\n\n[data-theme='dark'] {\n  --secondary-color: #818cab;\n  --dot-color: #30363d;\n  --bg-color: #0d1117;\n  --fg-color: #e1e1ff;\n  --card-bg: #10171e;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 18 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: sans-serif;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/fonts.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;AACzB","sourcesContent":["body {\n  font-family: sans-serif;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 19 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".button {\n  padding: 1rem;\n  border: none;\n  background-color: greenyellow;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/buttons.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,YAAY;EACZ,6BAA6B;AAC/B","sourcesContent":[".button {\n  padding: 1rem;\n  border: none;\n  background-color: greenyellow;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);



(0,_utils__WEBPACK_IMPORTED_MODULE_0__.defineCustomElements)();
window.onload = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.setAttribute('data-theme', 'dark');
    }
    else {
        document.body.setAttribute('data-theme', 'light');
    }
};
const app = document.querySelector('#app');
const viewer = document.createElement('card-viewer');
viewer.cards = _db__WEBPACK_IMPORTED_MODULE_1__["default"].cards;
const pageHeader = document.createElement('page-header');
app.append(pageHeader, viewer);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7O0FDTitDO0FBQ3pCO0FBQ0s7QUFDM0IsNERBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpREFBUTtBQUN2QjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW5raS11aS8uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly91bmtpLXVpLy4vc3JjL2NvbXBvbmVudHMvY29kZS1ibG9jay50cyIsIndlYnBhY2s6Ly91bmtpLXVpLy4vc3JjL2NvbXBvbmVudHMvY2FyZC50cyIsIndlYnBhY2s6Ly91bmtpLXVpLy4vc3JjL2NvbXBvbmVudHMvY2FyZC12aWV3ZXIudHMiLCJ3ZWJwYWNrOi8vdW5raS11aS8uL3NyYy9jb21wb25lbnRzL3BhZ2UtaGVhZGVyLnRzIiwid2VicGFjazovL3Vua2ktdWkvLi9zcmMvZGIudHMiLCJ3ZWJwYWNrOi8vdW5raS11aS8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly91bmtpLXVpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Vua2ktdWkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly91bmtpLXVpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly91bmtpLXVpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Vua2ktdWkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdW5raS11aS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Vua2ktdWkvLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL3Vua2ktdWkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly91bmtpLXVpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly91bmtpLXVpLy4vc3JjL3N0eWxlcy9jb2xvcnMuY3NzIiwid2VicGFjazovL3Vua2ktdWkvLi9zcmMvc3R5bGVzL2ZvbnRzLmNzcyIsIndlYnBhY2s6Ly91bmtpLXVpLy4vc3JjL3N0eWxlcy9idXR0b25zLmNzcyIsIndlYnBhY2s6Ly91bmtpLXVpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Vua2ktdWkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdW5raS11aS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdW5raS11aS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Vua2ktdWkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91bmtpLXVpLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb2RlQmxvY2sgZnJvbSAnLi9jb21wb25lbnRzL2NvZGUtYmxvY2snO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9jb21wb25lbnRzL2NhcmQnO1xuaW1wb3J0IENhcmRWaWV3ZXIgZnJvbSAnLi9jb21wb25lbnRzL2NhcmQtdmlld2VyJztcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9wYWdlLWhlYWRlcic7XG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudHMoKSB7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjb2RlLWJsb2NrJywgQ29kZUJsb2NrKTtcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NhcmQtY29tcG9uZW50JywgQ2FyZCk7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjYXJkLXZpZXdlcicsIENhcmRWaWV3ZXIpO1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgncGFnZS1oZWFkZXInLCBQYWdlSGVhZGVyKTtcbn1cbiIsImNvbnN0IGRpY3QgPSB7XG4gICAganM6IHtcbiAgICAgICAga2V5d29yZHM6IFtcbiAgICAgICAgICAgICdzdXBlcicsXG4gICAgICAgICAgICAnc3dpdGNoJyxcbiAgICAgICAgICAgICdzeW5jaHJvbml6ZWQnLFxuICAgICAgICAgICAgJ3RoaXMnLFxuICAgICAgICAgICAgJ3Rocm93JyxcbiAgICAgICAgICAgICd0aHJvd3MnLFxuICAgICAgICAgICAgJ3RyYW5zaWVudCcsXG4gICAgICAgICAgICAndHJ1ZScsXG4gICAgICAgICAgICAndHJ5JyxcbiAgICAgICAgICAgICd0eXBlb2YnLFxuICAgICAgICAgICAgJ3ZhcicsXG4gICAgICAgICAgICAndm9pZCcsXG4gICAgICAgICAgICAndm9sYXRpbGUnLFxuICAgICAgICAgICAgJ3doaWxlJyxcbiAgICAgICAgICAgICd3aXRoJyxcbiAgICAgICAgICAgICd5aWVsZCcsXG4gICAgICAgICAgICAnY29uc3QnLFxuICAgICAgICAgICAgJ2xldCcsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBodG1sOiB7XG4gICAgICAgIGtleXdvcmRzOiBbXSxcbiAgICB9LFxufTtcbmNsYXNzIENvZGVCbG9jayBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgY29uc3Qgc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gYFxuICAgICAgLmNvZGUtYmxvY2sge1xuICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xuICAgICAgfVxuXG4gICAgICBwcmUge1xuICAgICAgICBmb250LWZhbWlseTogJ1NvdXJjZSBDb2RlIFBybycsIG1vbm9zcGFjZSAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgIC5jb2RlLWJsb2NrLS13cmFwcGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9ub2thaS1iZyk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tb25va2FpLWZnKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgLmxpbmUge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICAubGluZS0tZXZlbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gICAgICB9XG5cbiAgICAgIC5saW5lLW51bWJlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuXG4gICAgICAuanMta2V5d29yZCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1qcy1rZXl3b3JkLWNvbG9yKTtcbiAgICAgIH1cbiAgICBgO1xuICAgICAgICBjb25zdCBsYW5nID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2xhbmcnKSB8fCAnanMnO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy50ZXh0Q29udGVudFxuICAgICAgICAgICAgPy5zcGxpdCgnXFxuJylcbiAgICAgICAgICAgIC5maWx0ZXIoKGMpID0+IGMgIT09ICcnKVxuICAgICAgICAgICAgLm1hcCgobGluZSwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGA8cHJlIGNsYXNzPVwibGluZSAke2kgJSAyID09PSAwICYmICdsaW5lLS1ldmVuJ31cIj48c3BhbiBjbGFzcz1cImxpbmUtbnVtYmVyXCI+JHsrK2l9PC9zcGFuPiR7bGluZVxuICAgICAgICAgICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgICAgICAgICAgLm1hcCgod29yZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhbmcgPSB0aGlzLmdldEF0dHJpYnV0ZSgnbGFuZycpIHx8ICdqcyc7XG4gICAgICAgICAgICAgICAgaWYgKGRpY3RbbGFuZ10ua2V5d29yZHMuaW5jbHVkZXMod29yZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cImpzLWtleXdvcmRcIj4ke3dvcmR9PC9zcGFuPmA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBgPHNwYW4+JHt3b3JkfTwvc3Bhbj5gO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuam9pbignICcpfTwvcHJlPmA7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuam9pbignJyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29kZS1ibG9jayc7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcbiAgICAgICAgd3JhcHBlci5jbGFzc05hbWUgPSAnY29kZS1ibG9jay0td3JhcHBlcic7XG4gICAgICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gYCR7Y29udGVudH1gO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHdyYXBwZXIpO1xuICAgICAgICBzaGFkb3cuYXBwZW5kKHN0eWxlLCBjb250YWluZXIuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDb2RlQmxvY2s7XG4iLCJjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5zdHlsZS50ZXh0Q29udGVudCA9IGBcbiAgLmNvbnRhaW5lciB7XG4gICAgYm94LXNoYWRvdzogMCAwLjMxMjVyZW0gMS4yNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgcGFkZGluZzogMCAzMHB4O1xuICAgIGhlaWdodDogMzYwcHg7XG4gICAgYXNwZWN0LXJhdGlvOiA3LzU7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBtZWRpdW07XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iZyk7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG5cbiAgLm1vdmUge1xuICAgIGN1cnNvcjogZ3JhYmJpbmcgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5oaWRlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgYXNwZWN0LXJhdGlvOiA1Lzc7XG4gICAgfVxuICB9XG5cbiAgLnNpZGUtMSAubWFpbiwgLnNpZGUtMSBmb290ZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcbiAgfVxuICBcbiAgLmNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGZsaXBPcGFjaXR5IHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4gIFxuICAuc2lkZS0wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgfVxuICBcbiAgLnNpZGUtMCAuY29udGVudCB7XG4gICAgYW5pbWF0aW9uOiBmbGlwT3BhY2l0eSAxcztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gIH1cbiAgXG4gIC5zaWRlLTEge1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gIH1cbiAgXG4gIC5zaWRlLTEgLmNvbnRlbnQge1xuXG4gICAgYW5pbWF0aW9uOiBmbGlwT3BhY2l0eSAxcztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIC8qIHRyYW5zaXRpb246IDAuM3M7ICovXG4gIH1cbiAgXG4gIC53cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDcsIDFmcik7XG4gICAgZ2FwOiAxcmVtO1xuICB9XG5cbiAgLm1haW4ge1xuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgIGdyaWQtcm93LWVuZDogNztcbiAgfVxuXG4gIGZvb3RlciB7XG4gICAgbWF4LWhlaWdodDogMzJweDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDc7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cblxuICBAa2V5ZnJhbWVzIG1vdmVMZWZ0IHtcbiAgICAwJSB7XG4gICAgfVxuICAgICBcbiAgICAgMjUlIHtcbiAgICAgICAvKiBvcGFjaXR5OiAwOyAqL1xuICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweClcbiAgICAgfVxuICAgICAyNyUge1xuICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweClcbiAgICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpXG4gICAgfVxuIH1cbiBAa2V5ZnJhbWVzIG1vdmVSaWdodCB7XG4gICAgMCUge1xuICAgIH1cbiAgICAgXG4gICAgIDI1JSB7XG4gICAgICAgLyogb3BhY2l0eTogMDsgKi9cbiAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KVxuICAgICB9XG4gICAgIDI3JSB7XG4gICAgICAgb3BhY2l0eTogMDtcbiAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpXG4gICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KVxuICAgIH1cbiB9XG4gXG4gIC5jb250YWluZXIubW92ZUxlZnQge1xuICAgYW5pbWF0aW9uOiBtb3ZlTGVmdCAxcztcbiB9XG4gXG4gIC5jb250YWluZXIubW92ZVJpZ2h0IHtcbiAgIGFuaW1hdGlvbjogbW92ZVJpZ2h0IDFzO1xuIH1cbmA7XG5jbGFzcyBDYXJkIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9zaWRlID0gMDtcbiAgICAgICAgdGhpcy5fZGF0YSA9IHtcbiAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgZGVjazoge1xuICAgICAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdEZWNrIG5hbWUgLyAwMDAnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IFsnVGVybScsICdEZWZpbml0aW9uJ10sXG4gICAgICAgICAgICBsZXZlbDogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGNvbnN0IHNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEpO1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHNpZGUtJHt0aGlzLnNpZGV9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgPG1haW4gY2xhc3M9XCJtYWluXCI+PC9tYWluPlxuICAgICAgICAgIDxmb290ZXI+JHt0aGlzLmRhdGEuZGVjay5uYW1lfTwvZm9vdGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgICAgIHNoYWRvdy5hcHBlbmQoc3R5bGUsIHRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuc2hhZG93Um9vdD8ucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU2lkZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFuZ2VDb250ZW50KHRoaXMuZGF0YS5jb250ZW50W3RoaXMuc2lkZV0sIGAke3RoaXMuZGF0YS5kZWNrLm5hbWV9YCk7XG4gICAgfVxuICAgIGdldCBzaWRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZTtcbiAgICB9XG4gICAgc2V0IHNpZGUoc2lkZSkge1xuICAgICAgICB0aGlzLl9zaWRlID0gc2lkZTtcbiAgICB9XG4gICAgZ2V0IGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH1cbiAgICBzZXQgZGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLmNoYW5nZVNpZGUoMCk7XG4gICAgICAgIHRoaXMuY2hhbmdlQ29udGVudCh0aGlzLmRhdGEuY29udGVudFt0aGlzLnNpZGVdLCB0aGlzLmluZm8pO1xuICAgIH1cbiAgICBnZXQgaW5mbygpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZGF0YS5kZWNrLm5hbWV9IC8gJHt0aGlzLmRhdGEuaWRcbiAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAucGFkU3RhcnQoMywgJzAnKX1gO1xuICAgIH1cbiAgICBjaGFuZ2VDb250ZW50KHRleHQsIGZvb3RlckRhdGEgPSB0aGlzLmluZm8pIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuc2hhZG93Um9vdD8ucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50KTtcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJjb250ZW50XCI+JHt0ZXh0fTwvZGl2PmA7XG4gICAgICAgICAgICBjb25zdCBmb290ZXIgPSB0aGlzLnNoYWRvd1Jvb3Q/LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuICAgICAgICAgICAgaWYgKGZvb3Rlcikge1xuICAgICAgICAgICAgICAgIGZvb3Rlci5pbm5lckhUTUwgPSBmb290ZXJEYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZVNpZGUobnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnNoYWRvd1Jvb3Q/LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICAgICAgaWYgKG51bWJlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNpZGUgPSBudW1iZXI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNpZGUgPSB0aGlzLnNpZGUgPT09IDAgPyAxIDogMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2lkZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShgc2lkZS0wYCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGBzaWRlLTFgKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlLTAnKT8uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGUtMScpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYHNpZGUtMWApO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgc2lkZS0wYCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZS0xJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlLTAnKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbmdlQ29udGVudCh0aGlzLmRhdGEuY29udGVudFt0aGlzLnNpZGVdLCB0aGlzLmluZm8pO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxuICA8ZGl2IGNsYXNzPVwiY2FyZC12aWV3ZXJcIj5cbiAgICA8ZGl2PlxuICAgICAgPGNhcmQtY29tcG9uZW50Lz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHNcIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIiBpZD1cImJ1dHRvblByZXZcIj5QcmV2PC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzPVwidG90YWxcIj5cbiAgICAgICAgMCAvIDBcbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIGlkPVwiYnV0dG9uTmV4dFwiPk5leHQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5gO1xuY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuc3R5bGUudGV4dENvbnRlbnQgPSBgXG4gIC5jYXJkLXZpZXdlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmNvbnRyb2xzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5gO1xuY2xhc3MgQ2FyZFZpZXdlciBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fY2FyZHMgPSBbXTtcbiAgICAgICAgdGhpcy5fY3VycmVudEluZGV4ID0gMDtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0ge1xuICAgICAgICAgICAgc3RhcnRYOiAwLFxuICAgICAgICAgICAgc3RhcnRZOiAwLFxuICAgICAgICAgICAgZW5kWDogMCxcbiAgICAgICAgICAgIGVuZFk6IDAsXG4gICAgICAgICAgICBpc01vdmluZzogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIHNoYWRvdy5hcHBlbmQoc3R5bGUsIGNvbnRhaW5lcik7XG4gICAgICAgIGNvbnN0IGJ1dHRvblByZXYgPSB0aGlzLnNoYWRvd1Jvb3Q/LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b25QcmV2Jyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbk5leHQgPSB0aGlzLnNoYWRvd1Jvb3Q/LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b25OZXh0Jyk7XG4gICAgICAgIHRoaXMuY2hhbmdlQ2FyZCgpO1xuICAgICAgICBidXR0b25QcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggLT0gMTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudEluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJ1dHRvbk5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCArPSAxO1xuICAgICAgICB9KTtcbiAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICBwb3NpdGlvbi5zdGFydFggPSBlLm9mZnNldFg7XG4gICAgICAgICAgICBwb3NpdGlvbi5pc01vdmluZyA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcbiAgICAgICAgICAgIHBvc2l0aW9uLmVuZFggPSBlLm9mZnNldFg7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0W3Bvc2l0aW9uLmlzTW92aW5nID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ21vdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGUpID0+IHtcbiAgICAgICAgICAgIHBvc2l0aW9uLmlzTW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBkaWZmID0gcG9zaXRpb24uZW5kWCAtIHBvc2l0aW9uLnN0YXJ0WDtcbiAgICAgICAgICAgIGlmIChkaWZmID4gMTAwKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21vdmVSaWdodCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9zaXRpb24uZW5kWCA9IDA7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnbW92ZScpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IGNhcmRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FyZHM7XG4gICAgfVxuICAgIHNldCBjYXJkcyhkYXRhKSB7XG4gICAgICAgIHRoaXMuX2NhcmRzID0gZGF0YTtcbiAgICB9XG4gICAgZ2V0IGN1cnJlbnRJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRJbmRleDtcbiAgICB9XG4gICAgc2V0IGN1cnJlbnRJbmRleChpZHgpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudEluZGV4ID0gaWR4O1xuICAgICAgICB0aGlzLmNoYW5nZUNhcmQodGhpcy5fY2FyZHNbdGhpcy5fY3VycmVudEluZGV4XSk7XG4gICAgfVxuICAgIGNoYW5nZUNhcmQoZGF0YSA9IHRoaXMuX2NhcmRzW3RoaXMuY3VycmVudEluZGV4XSkge1xuICAgICAgICBjb25zdCBjYXJkID0gdGhpcy5zaGFkb3dSb290Py5xdWVyeVNlbGVjdG9yKCdjYXJkLWNvbXBvbmVudCcpO1xuICAgICAgICBpZiAoY2FyZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fY2FyZHNbdGhpcy5jdXJyZW50SW5kZXhdKTtcbiAgICAgICAgICAgIGNhcmQuZGF0YSA9IHRoaXMuX2NhcmRzW3RoaXMuY3VycmVudEluZGV4XTtcbiAgICAgICAgICAgIGNhcmQuaWQgPSB0aGlzLmN1cnJlbnRJbmRleC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ2FyZFZpZXdlcjtcbiIsImNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbnN0eWxlLnRleHRDb250ZW50ID0gYFxuICAuY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuXG4gIC53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5gO1xuY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxuICA8aGVhZGVyIGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIiBpZD1cInRoZW1lQnRuXCI+XG4gICAgICAgIFRoZW1lXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9oZWFkZXI+XG5gO1xuY2xhc3MgUGFnZUhlYWRlciBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGNvbnN0IHNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICBzaGFkb3cuYXBwZW5kKHN0eWxlLCB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIGNvbnN0IHRoZW1lQnRuID0gdGhpcy5zaGFkb3dSb290Py5xdWVyeVNlbGVjdG9yKCcjdGhlbWVCdG4nKTtcbiAgICAgICAgaWYgKHRoZW1lQnRuKSB7XG4gICAgICAgICAgICB0aGVtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aGVtZSA9IGRvY3VtZW50LmJvZHkuZ2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCB0aGVtZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBQYWdlSGVhZGVyO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlY2tzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgbmFtZTogJ0FsZ29yaXRobXMgKyBEYXRhIHN0cnVjdHVyZXMnLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgY2FyZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBkZWNrOiB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0FsZ29yaXRobXMgKyBEYXRhIHN0cnVjdHVyZXMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxldmVsOiAwLFxuICAgICAgICAgICAgY29udGVudDogW1xuICAgICAgICAgICAgICAgICdBcnJheScsXG4gICAgICAgICAgICAgICAgYEluIDxiPnByb2dyYW1taW5nPC9iPiwgYSBsaXN0IG9mIGRhdGEgdmFsdWVzLCBhbGwgb2YgdGhlIHNhbWUgdHlwZSwgYW55IGVsZW1lbnQgb2Ygd2hpY2ggY2FuIGJlIHJlZmVyZW5jZWQgYnkgYW4gZXhwcmVzc2lvbiBjb25zaXN0aW5nIG9mIHRoZSBhcnJheSBuYW1lIGZvbGxvd2VkIGJ5IGFuIGluZGV4aW5nIGV4cHJlc3Npb24uIEFycmF5cyBhcmUgcGFydCBvZiB0aGUgZnVuZGFtZW50YWxzIG9mIGRhdGEgc3RydWN0dXJlcywgd2hpY2gsIGluIHR1cm4sIGFyZSBhIG1ham9yIGZ1bmRhbWVudGFsIG9mIGNvbXB1dGVyIHByb2dyYW1taW5nXG4gICAgICA8Y29kZS1ibG9jayBsYW5nPSdqcyc+XG4gY29uc3QgYXJyYXkgPSBbMSwgMiwgMywgNCwgNV07XG4gbGV0IGFycmF5MiA9IFtdO1xuICAgICAgPC9jb2RlLWJsb2NrPlxuICAgICAgYCxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgZGVjazoge1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdBbGdvcml0aG1zICsgRGF0YSBzdHJ1Y3R1cmVzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZXZlbDogMCxcbiAgICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICAgICAnQWxnb3JpdGhtJyxcbiAgICAgICAgICAgICAgICAnQSBjb21wdXRhYmxlIHNldCBvZiBzdGVwcyB0byBhY2hpZXZlIGEgZGVzaXJlZCByZXN1bHQuJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgZGVjazoge1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdBbGdvcml0aG1zICsgRGF0YSBzdHJ1Y3R1cmVzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZXZlbDogMCxcbiAgICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICAgICAnTGlua2VkIGxpc3QnLFxuICAgICAgICAgICAgICAgICdBIGRhdGEgc3RydWN0dXJlIGluIHdoaWNoIGEgbGlzdCBvZiBub2RlcyBvciBlbGVtZW50cyBvZiBhIGRhdGEgc3RydWN0dXJlIGNvbm5lY3RlZCBieSBwb2ludGVycy4gQSBzaW5nbHkgbGlua2VkIGxpc3QgaGFzIG9uZSBwb2ludGVyIGluIGVhY2ggbm9kZSBwb2ludGluZyB0byB0aGUgbmV4dCBub2RlIGluIHRoZSBsaXN0OyBhIGRvdWJseSBsaW5rZWQgbGlzdCBoYXMgdHdvIHBvaW50ZXJzIGluIGVhY2ggbm9kZSBwb2ludGluZyB0byB0aGUgbmV4dCBhbmQgcHJldmlvdXMgbm9kZXMuIEluIGEgY2lyY3VsYXIgbGlzdCwgdGhlIGZpcnN0IGFuZCBsYXN0IG5vZGVzIG9mIHRoZSBsaXN0IGFyZSBsaW5rZWQgdG9nZXRoZXIuJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgXSxcbn07XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbG9ycy5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb250cy5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idXR0b25zLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U291cmNlK0NvZGUrUHJvOml0YWwsd2dodEAwLDQwMDswLDUwMDsxLDQwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGNvbG9yOiB2YXIoLS1mZy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLWJnLWNvbG9yKSAyMXB4LCB0cmFuc3BhcmVudCAxJSlcXG4gICAgICBjZW50ZXIsXFxuICAgIGxpbmVhci1ncmFkaWVudCh2YXIoLS1iZy1jb2xvcikgMjFweCwgdHJhbnNwYXJlbnQgMSUpIGNlbnRlcixcXG4gICAgdmFyKC0tZG90LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogdmFyKC0tZG90LXNwYWNlKSB2YXIoLS1kb3Qtc3BhY2UpO1xcbn1cXG5cXG4jYXBwIHtcXG4gIHBhZGRpbmctdG9wOiA5cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogNTIwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFLQTtFQUNFLHNCQUFzQjtFQUN0Qjs7O29CQUdrQjtFQUNsQixrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U291cmNlK0NvZGUrUHJvOml0YWwsd2dodEAwLDQwMDswLDUwMDsxLDQwMCZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0ICdjb2xvcnMuY3NzJztcXG5AaW1wb3J0ICdmb250cy5jc3MnO1xcbkBpbXBvcnQgJ2J1dHRvbnMuY3NzJztcXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiB2YXIoLS1mZy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLWJnLWNvbG9yKSAyMXB4LCB0cmFuc3BhcmVudCAxJSlcXG4gICAgICBjZW50ZXIsXFxuICAgIGxpbmVhci1ncmFkaWVudCh2YXIoLS1iZy1jb2xvcikgMjFweCwgdHJhbnNwYXJlbnQgMSUpIGNlbnRlcixcXG4gICAgdmFyKC0tZG90LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogdmFyKC0tZG90LXNwYWNlKSB2YXIoLS1kb3Qtc3BhY2UpO1xcbn1cXG5cXG4jYXBwIHtcXG4gIHBhZGRpbmctdG9wOiA5cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogNTIwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1iZy1jb2xvcjogd2hpdGU7XFxuICAtLWZnLWNvbG9yOiAjMzAzMDMwO1xcbiAgLS1kb3QtY29sb3I6ICNhMzkyZDk7XFxuXFxuICAtLWRvdC1zaXplOiAxcHg7XFxuICAtLWRvdC1zcGFjZTogMjJweDtcXG4gIC0tY2FyZC1iZzogI2ZkZmVmZTtcXG5cXG4gIC0tcHJpbWFyeS1jb2xvcjogdG9tYXRvO1xcbiAgLS1ncmF5LWNvbG9yOiBncmF5O1xcblxcbiAgLyogVGhlbWVzICovXFxuICAvKiBNb25va2FpICovXFxuICAtLW1vbm9rYWktYmc6ICMyNzI4MjI7XFxuICAtLW1vbm9rYWktZmc6ICNmOGY4ZjI7XFxuICAtLW1vbm9rYWktY29tbWVudDogIzc1NzE1ZTtcXG4gIC0tbW9ub2thaS1yZWQ6ICNmOTI2NzI7XFxuICAtLW1vbm9rYWktb3JhbmdlOiAjZmQ5NzFmO1xcbiAgLS1tb25va2FpLWxpZ2h0LW9yYW5nZTogI2U2OWY2NjtcXG4gIC0tbW9ub2thaS15ZWxsb3c6ICNlNmRiNzQ7XFxuICAtLW1vbm9rYWktZ3JlZW46ICNhNmUyMmU7XFxuICAtLW1vbm9rYWktYmx1ZTogIzY2ZDllZjtcXG4gIC0tbW9ub2thaS1wdXJwbGU6ICNhZTgxZmY7XFxuXFxuICAvKiBKUyAqL1xcbiAgLS1qcy1rZXl3b3JkLWNvbG9yOiB2YXIoLS1tb25va2FpLWJsdWUpO1xcbiAgLS1qcy1jb21tZW50OiB2YXIodmFyKC0tbW9ub2thaS1jb21tZW50KSk7XFxufVxcblxcbltkYXRhLXRoZW1lPSdkYXJrJ10ge1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICM4MThjYWI7XFxuICAtLWRvdC1jb2xvcjogIzMwMzYzZDtcXG4gIC0tYmctY29sb3I6ICMwZDExMTc7XFxuICAtLWZnLWNvbG9yOiAjZTFlMWZmO1xcbiAgLS1jYXJkLWJnOiAjMTAxNzFlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbG9ycy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG9CQUFvQjs7RUFFcEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7O0VBRWxCLHVCQUF1QjtFQUN2QixrQkFBa0I7O0VBRWxCLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0IseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIseUJBQXlCOztFQUV6QixPQUFPO0VBQ1AsdUNBQXVDO0VBQ3ZDLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1iZy1jb2xvcjogd2hpdGU7XFxuICAtLWZnLWNvbG9yOiAjMzAzMDMwO1xcbiAgLS1kb3QtY29sb3I6ICNhMzkyZDk7XFxuXFxuICAtLWRvdC1zaXplOiAxcHg7XFxuICAtLWRvdC1zcGFjZTogMjJweDtcXG4gIC0tY2FyZC1iZzogI2ZkZmVmZTtcXG5cXG4gIC0tcHJpbWFyeS1jb2xvcjogdG9tYXRvO1xcbiAgLS1ncmF5LWNvbG9yOiBncmF5O1xcblxcbiAgLyogVGhlbWVzICovXFxuICAvKiBNb25va2FpICovXFxuICAtLW1vbm9rYWktYmc6ICMyNzI4MjI7XFxuICAtLW1vbm9rYWktZmc6ICNmOGY4ZjI7XFxuICAtLW1vbm9rYWktY29tbWVudDogIzc1NzE1ZTtcXG4gIC0tbW9ub2thaS1yZWQ6ICNmOTI2NzI7XFxuICAtLW1vbm9rYWktb3JhbmdlOiAjZmQ5NzFmO1xcbiAgLS1tb25va2FpLWxpZ2h0LW9yYW5nZTogI2U2OWY2NjtcXG4gIC0tbW9ub2thaS15ZWxsb3c6ICNlNmRiNzQ7XFxuICAtLW1vbm9rYWktZ3JlZW46ICNhNmUyMmU7XFxuICAtLW1vbm9rYWktYmx1ZTogIzY2ZDllZjtcXG4gIC0tbW9ub2thaS1wdXJwbGU6ICNhZTgxZmY7XFxuXFxuICAvKiBKUyAqL1xcbiAgLS1qcy1rZXl3b3JkLWNvbG9yOiB2YXIoLS1tb25va2FpLWJsdWUpO1xcbiAgLS1qcy1jb21tZW50OiB2YXIodmFyKC0tbW9ub2thaS1jb21tZW50KSk7XFxufVxcblxcbltkYXRhLXRoZW1lPSdkYXJrJ10ge1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICM4MThjYWI7XFxuICAtLWRvdC1jb2xvcjogIzMwMzYzZDtcXG4gIC0tYmctY29sb3I6ICMwZDExMTc7XFxuICAtLWZnLWNvbG9yOiAjZTFlMWZmO1xcbiAgLS1jYXJkLWJnOiAjMTAxNzFlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2ZvbnRzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9idXR0b25zLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osNkJBQTZCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5idXR0b24ge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnRzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgZGIgZnJvbSAnLi9kYic7XG5pbXBvcnQgJy4vc3R5bGVzL21haW4uY3NzJztcbmRlZmluZUN1c3RvbUVsZW1lbnRzKCk7XG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnZGFyaycpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnbGlnaHQnKTtcbiAgICB9XG59O1xuY29uc3QgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpO1xuY29uc3Qgdmlld2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FyZC12aWV3ZXInKTtcbnZpZXdlci5jYXJkcyA9IGRiLmNhcmRzO1xuY29uc3QgcGFnZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BhZ2UtaGVhZGVyJyk7XG5hcHAuYXBwZW5kKHBhZ2VIZWFkZXIsIHZpZXdlcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=