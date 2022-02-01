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
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _components_card_viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _components_page_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);




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
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

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
            'class',
        ],
    },
    html: {
        keywords: [],
    },
};
class CodeBlock extends _component__WEBPACK_IMPORTED_MODULE_0__.Component {
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
        display: flex;
        align-items: center;
      }

      .lineEven {
        background-color: rgba(255, 255, 255, 0.05);
      }

      .lineNumber {
        color: var(--gray-color);
        font-size: 12px;
        margin-right: 0.5rem;
      }

      .js-keyword {
        color: var(--js-keyword-color);
      }

      .js-number {
        color: var(--number-color);
      }
      
      .js-bracket {
        color: var(--gray-color);
      }
    `;
        const lang = this.getAttribute('lang') || 'js';
        const content = this.textContent
            ?.split('\n')
            .filter((c) => c !== '')
            .map((line, i) => {
            return `<pre class="line ${i % 2 === 0 ? 'lineEven' : ''}">
            <span class="lineNumber">${++i}</span> 
            ${line
                // keywords
                ?.replace(/class |const |let |super/gi, '<span class="js-keyword">$&</span>')
                // numbers
                ?.replace(/\d/gi, '<span class="js-number">$&</span>')}
          </pre>`;
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
/* harmony export */   "Component": () => (/* binding */ Component)
/* harmony export */ });
class Component extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() { }
    onClick(func) {
        func();
    }
}


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

const style = document.createElement('style');
style.textContent = `
  .container {
    box-shadow: 0 0.3125rem 1.25rem 0 rgba(0, 0, 0, 0.16);
    padding: 0 30px;
    width: 500px;
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
    height: 100%;
    font-weight: bold;
    overflow: scroll;
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
class Card extends _component__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor() {
        super();
        this._side = 0;
        this.cardHeight = 0;
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
            container.addEventListener('click', (e) => {
                this.changeSide();
            });
        }
        this.changeContent(this.data.content[this.side], `${this.data.deck.name}`);
        console.log(this.cardHeight);
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
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

const template = document.createElement('div');
template.innerHTML = `
  <div class="card-viewer">
    <div>
      <card-component/>
    </div>
    <div class="controls">
      <button class="button" id="buttonPrev">Prev</button>
      <div class="total">
        <div id="currentNumber">0</div> / 
        <div id="totalNumber">0</div>
      </div>
      <button class="button" id="buttonNext">Next</button>
    </div>

    <div class="actions hidden">
      <button class="button">Again</button>
      <button class="button">Hard</button>
      <button class="button">Good</button>
      <button class="button">Easy</button>
    </div>
  </div>
`;
const style = document.createElement('style');
style.textContent = `
  .card-viewer {
    width: 100%;
    height: 100%;
  }

  .hidden {
    visibility: hidden;
    opacity: 0; 
  }

  .total {
    display: flex;
    width: 36px;
    justify-content: space-between;
  }

  .controls {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .actions {
    maring: 0 auto;
    display: flex;
    justify-content: center;
  }

  .button {
    position: relative;
    display: inline-block;
    padding: 6px 12px;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    background-color: #e6ebf1;
    border: 1px solid rgba(27,31,35,0.2);
    border-radius: 0.25em;
    -webkit-appearance: none;
  }

  .button:hover {
    background-color: #e6ebf1;
    background-image: linear-gradient(-180deg, #f0f3f6 0%, #e6ebf1 90%);
    background-position: -.5em;
    border-color: rgba(27,31,35,0.35);
  }

  .button:active {
    background-color: #e9ecef;
    background-image: none;
    border-color: rgba(27,31,35,0.35);
    box-shadow: inset 0 0.15em 0.3em rgba(27,31,35,0.15);
  }
`;
class CardViewer extends _component__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor() {
        super();
        this._cards = [];
        this._currentIndex = 0;
        this.container = template.cloneNode(true);
        this.actions = null;
        this.controls = null;
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
        shadow.append(style, this.container);
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
        this.container.addEventListener('mousedown', (e) => {
            position.startX = e.offsetX;
            position.isMoving = true;
        });
        this.container.addEventListener('mousedown', (e) => {
            position.endX = e.offsetX;
            this.container.classList[position.isMoving ? 'add' : 'remove']('move');
        });
        // @ts-ignore
        this.container.querySelector('#currentNumber').textContent =
            this._currentIndex + 1;
        // @ts-ignore
        this.container.querySelector('#totalNumber').textContent =
            this._cards.length;
        this.container.addEventListener('mouseup', (e) => {
            position.isMoving = false;
            const diff = position.endX - position.startX;
            if (diff > 100) {
                this.container.classList.add('moveRight');
            }
            position.endX = 0;
            this.container.classList.remove('move');
        });
        this.actions = this.container.querySelector('.actions');
        this.controls = this.container.querySelector('.controls');
        if (this.shadowRoot?.querySelector('.side-0')) {
            this.actions?.classList.add('hide');
            this.controls?.classList.remove('hide');
        }
        else if (this.shadowRoot?.querySelector('.side-1')) {
            this.actions?.classList.remove('hide');
            this.controls?.classList.add('hide');
        }
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
        if (idx < this._cards.length && idx >= 0) {
            this._currentIndex = idx;
            this.changeCard(this._cards[this._currentIndex]);
            // @ts-ignore
            this.container.querySelector('#currentNumber').textContent =
                this._currentIndex + 1;
        }
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
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

const style = document.createElement('style');
style.textContent = `
  @import url('./styles/main.css');
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

  .button {
    position: relative;
    display: inline-block;
    padding: 6px 12px;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    background-color: #e6ebf1;
    border: 1px solid rgba(27,31,35,0.2);
    border-radius: 0.25em;
    -webkit-appearance: none;
  }

  .button:hover {
    background-color: #e6ebf1;
    background-image: linear-gradient(-180deg, #f0f3f6 0%, #e6ebf1 90%);
    background-position: -.5em;
    border-color: rgba(27,31,35,0.35);
  }

  .button:active {
    background-color: #e9ecef;
    background-image: none;
    border-color: rgba(27,31,35,0.35);
    box-shadow: inset 0 0.15em 0.3em rgba(27,31,35,0.15);
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
class PageHeader extends _component__WEBPACK_IMPORTED_MODULE_0__.Component {
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
/* 7 */
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
        {
            id: 2,
            name: 'System design',
        },
    ],
    cards: [
        {
            id: 1,
            deck: {
                id: 1,
                name: 'System design',
            },
            level: 0,
            content: [
                'Performance vs scalability',
                `A service is scalable if it results in increased performance in a manner proportional to resources added. Generally, increasing performance means serving more units of work, but it can also be to handle larger units of work, such as when datasets grow.1
      `,
            ],
        },
        {
            id: 2,
            deck: {
                id: 1,
                name: 'System design',
            },
            level: 0,
            content: [
                'Latency vs throughput',
                `Latency is the time to perform some action or to produce some result.

        Throughput is the number of such actions or results per unit of time.
        
        Generally, you should aim for maximal throughput with acceptable latency.
      `,
            ],
        },
        {
            id: 3,
            deck: {
                id: 1,
                name: 'System design',
            },
            level: 0,
            content: [
                'Consistency patterns',
                `With multiple copies of the same data, we are faced with options on how to synchronize them so clients have a consistent view of the data. Recall the definition of consistency from the CAP theorem - Every read receives the most recent write or an error.
      `,
            ],
        },
    ],
});


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_colors_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_buttons_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
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
/* 16 */
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
/* 17 */
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
/* 18 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --bg-color: white;\n  --fg-color: #303030;\n  --dot-color: #a392d9;\n\n  --dot-size: 1px;\n  --dot-space: 22px;\n  --card-bg: #fdfefe;\n\n  --primary-color: tomato;\n  --gray-color: gray;\n\n  /* Themes */\n  /* Monokai */\n  --monokai-bg: #272822;\n  --monokai-fg: #f8f8f2;\n  --monokai-comment: #75715e;\n  --monokai-red: #f92672;\n  --monokai-orange: #fd971f;\n  --monokai-light-orange: #e69f66;\n  --monokai-yellow: #e6db74;\n  --monokai-green: #a6e22e;\n  --monokai-blue: #66d9ef;\n  --monokai-purple: #ae81ff;\n\n  --number-color: pink;\n\n  /* JS */\n  --js-keyword-color: var(--monokai-blue);\n  --js-comment: var(var(--monokai-comment));\n}\n\n[data-theme='dark'] {\n  --secondary-color: #818cab;\n  --dot-color: #30363d;\n  --bg-color: #0d1117;\n  --fg-color: #e1e1ff;\n  --card-bg: #10171e;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/colors.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,oBAAoB;;EAEpB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;;EAElB,uBAAuB;EACvB,kBAAkB;;EAElB,WAAW;EACX,YAAY;EACZ,qBAAqB;EACrB,qBAAqB;EACrB,0BAA0B;EAC1B,sBAAsB;EACtB,yBAAyB;EACzB,+BAA+B;EAC/B,yBAAyB;EACzB,wBAAwB;EACxB,uBAAuB;EACvB,yBAAyB;;EAEzB,oBAAoB;;EAEpB,OAAO;EACP,uCAAuC;EACvC,yCAAyC;AAC3C;;AAEA;EACE,0BAA0B;EAC1B,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;AACpB","sourcesContent":[":root {\n  --bg-color: white;\n  --fg-color: #303030;\n  --dot-color: #a392d9;\n\n  --dot-size: 1px;\n  --dot-space: 22px;\n  --card-bg: #fdfefe;\n\n  --primary-color: tomato;\n  --gray-color: gray;\n\n  /* Themes */\n  /* Monokai */\n  --monokai-bg: #272822;\n  --monokai-fg: #f8f8f2;\n  --monokai-comment: #75715e;\n  --monokai-red: #f92672;\n  --monokai-orange: #fd971f;\n  --monokai-light-orange: #e69f66;\n  --monokai-yellow: #e6db74;\n  --monokai-green: #a6e22e;\n  --monokai-blue: #66d9ef;\n  --monokai-purple: #ae81ff;\n\n  --number-color: pink;\n\n  /* JS */\n  --js-keyword-color: var(--monokai-blue);\n  --js-comment: var(var(--monokai-comment));\n}\n\n[data-theme='dark'] {\n  --secondary-color: #818cab;\n  --dot-color: #30363d;\n  --bg-color: #0d1117;\n  --fg-color: #e1e1ff;\n  --card-bg: #10171e;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 19 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: sans-serif;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/fonts.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;AACzB","sourcesContent":["body {\n  font-family: sans-serif;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 20 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_colors_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_colors_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".button {\n  padding: 0.5rem 1rem;\n  border: none;\n  background-color: var(--primary-color);\n}\n", "",{"version":3,"sources":["webpack://./src/styles/buttons.css"],"names":[],"mappings":"AAEA;EACE,oBAAoB;EACpB,YAAY;EACZ,sCAAsC;AACxC","sourcesContent":["@import url('./colors.css');\n\n.button {\n  padding: 0.5rem 1rem;\n  border: none;\n  background-color: var(--primary-color);\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpREFBUTtBQUN2QjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW5raS11aS8uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly91bmtpLXVpLy4vc3JjL2NvbXBvbmVudHMvY29kZS1ibG9jay50cyIsIndlYnBhY2s6Ly91bmtpLXVpLy4vc3JjL2NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly91bmtpLXVpLy4vc3JjL2NvbXBvbmVudHMvY2FyZC50cyIsIndlYnBhY2s6Ly91bmtpLXVpLy4vc3JjL2NvbXBvbmVudHMvY2FyZC12aWV3ZXIudHMiLCJ3ZWJwYWNrOi8vdW5raS11aS8uL3NyYy9jb21wb25lbnRzL3BhZ2UtaGVhZGVyLnRzIiwid2VicGFjazovL3Vua2ktdWkvLi9zcmMvZGIudHMiLCJ3ZWJwYWNrOi8vdW5raS11aS8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly91bmtpLXVpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Vua2ktdWkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly91bmtpLXVpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly91bmtpLXVpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Vua2ktdWkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdW5raS11aS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Vua2ktdWkvLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL3Vua2ktdWkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly91bmtpLXVpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly91bmtpLXVpLy4vc3JjL3N0eWxlcy9jb2xvcnMuY3NzIiwid2VicGFjazovL3Vua2ktdWkvLi9zcmMvc3R5bGVzL2ZvbnRzLmNzcyIsIndlYnBhY2s6Ly91bmtpLXVpLy4vc3JjL3N0eWxlcy9idXR0b25zLmNzcyIsIndlYnBhY2s6Ly91bmtpLXVpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Vua2ktdWkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdW5raS11aS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdW5raS11aS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Vua2ktdWkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91bmtpLXVpLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb2RlQmxvY2sgZnJvbSAnLi9jb21wb25lbnRzL2NvZGUtYmxvY2snO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9jb21wb25lbnRzL2NhcmQnO1xuaW1wb3J0IENhcmRWaWV3ZXIgZnJvbSAnLi9jb21wb25lbnRzL2NhcmQtdmlld2VyJztcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9wYWdlLWhlYWRlcic7XG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudHMoKSB7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjb2RlLWJsb2NrJywgQ29kZUJsb2NrKTtcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NhcmQtY29tcG9uZW50JywgQ2FyZCk7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjYXJkLXZpZXdlcicsIENhcmRWaWV3ZXIpO1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgncGFnZS1oZWFkZXInLCBQYWdlSGVhZGVyKTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudCc7XG5jb25zdCBkaWN0ID0ge1xuICAgIGpzOiB7XG4gICAgICAgIGtleXdvcmRzOiBbXG4gICAgICAgICAgICAnc3VwZXInLFxuICAgICAgICAgICAgJ3N3aXRjaCcsXG4gICAgICAgICAgICAnc3luY2hyb25pemVkJyxcbiAgICAgICAgICAgICd0aGlzJyxcbiAgICAgICAgICAgICd0aHJvdycsXG4gICAgICAgICAgICAndGhyb3dzJyxcbiAgICAgICAgICAgICd0cmFuc2llbnQnLFxuICAgICAgICAgICAgJ3RydWUnLFxuICAgICAgICAgICAgJ3RyeScsXG4gICAgICAgICAgICAndHlwZW9mJyxcbiAgICAgICAgICAgICd2YXInLFxuICAgICAgICAgICAgJ3ZvaWQnLFxuICAgICAgICAgICAgJ3ZvbGF0aWxlJyxcbiAgICAgICAgICAgICd3aGlsZScsXG4gICAgICAgICAgICAnd2l0aCcsXG4gICAgICAgICAgICAneWllbGQnLFxuICAgICAgICAgICAgJ2NvbnN0JyxcbiAgICAgICAgICAgICdsZXQnLFxuICAgICAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIGh0bWw6IHtcbiAgICAgICAga2V5d29yZHM6IFtdLFxuICAgIH0sXG59O1xuY2xhc3MgQ29kZUJsb2NrIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgY29uc3Qgc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gYFxuICAgICAgLmNvZGUtYmxvY2sge1xuICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xuICAgICAgfVxuXG4gICAgICBwcmUge1xuICAgICAgICBmb250LWZhbWlseTogJ1NvdXJjZSBDb2RlIFBybycsIG1vbm9zcGFjZSAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgIC5jb2RlLWJsb2NrLS13cmFwcGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9ub2thaS1iZyk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tb25va2FpLWZnKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgLmxpbmUge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAubGluZUV2ZW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICAgICAgfVxuXG4gICAgICAubGluZU51bWJlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICAgIH1cblxuICAgICAgLmpzLWtleXdvcmQge1xuICAgICAgICBjb2xvcjogdmFyKC0tanMta2V5d29yZC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5qcy1udW1iZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tbnVtYmVyLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmpzLWJyYWNrZXQge1xuICAgICAgICBjb2xvcjogdmFyKC0tZ3JheS1jb2xvcik7XG4gICAgICB9XG4gICAgYDtcbiAgICAgICAgY29uc3QgbGFuZyA9IHRoaXMuZ2V0QXR0cmlidXRlKCdsYW5nJykgfHwgJ2pzJztcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMudGV4dENvbnRlbnRcbiAgICAgICAgICAgID8uc3BsaXQoJ1xcbicpXG4gICAgICAgICAgICAuZmlsdGVyKChjKSA9PiBjICE9PSAnJylcbiAgICAgICAgICAgIC5tYXAoKGxpbmUsIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgPHByZSBjbGFzcz1cImxpbmUgJHtpICUgMiA9PT0gMCA/ICdsaW5lRXZlbicgOiAnJ31cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZU51bWJlclwiPiR7KytpfTwvc3Bhbj4gXG4gICAgICAgICAgICAke2xpbmVcbiAgICAgICAgICAgICAgICAvLyBrZXl3b3Jkc1xuICAgICAgICAgICAgICAgID8ucmVwbGFjZSgvY2xhc3MgfGNvbnN0IHxsZXQgfHN1cGVyL2dpLCAnPHNwYW4gY2xhc3M9XCJqcy1rZXl3b3JkXCI+JCY8L3NwYW4+JylcbiAgICAgICAgICAgICAgICAvLyBudW1iZXJzXG4gICAgICAgICAgICAgICAgPy5yZXBsYWNlKC9cXGQvZ2ksICc8c3BhbiBjbGFzcz1cImpzLW51bWJlclwiPiQmPC9zcGFuPicpfVxuICAgICAgICAgIDwvcHJlPmA7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuam9pbignJyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29kZS1ibG9jayc7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcbiAgICAgICAgd3JhcHBlci5jbGFzc05hbWUgPSAnY29kZS1ibG9jay0td3JhcHBlcic7XG4gICAgICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gYCR7Y29udGVudH1gO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHdyYXBwZXIpO1xuICAgICAgICBzaGFkb3cuYXBwZW5kKHN0eWxlLCBjb250YWluZXIuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDb2RlQmxvY2s7XG4iLCJleHBvcnQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHsgfVxuICAgIG9uQ2xpY2soZnVuYykge1xuICAgICAgICBmdW5jKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50JztcbmNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbnN0eWxlLnRleHRDb250ZW50ID0gYFxuICAuY29udGFpbmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAuMzEyNXJlbSAxLjI1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGFzcGVjdC1yYXRpbzogNy81O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBmb250LXdlaWdodDogbWVkaXVtO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjE1cztcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmcpO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxuXG4gIC5tb3ZlIHtcbiAgICBjdXJzb3I6IGdyYWJiaW5nICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaGlkZSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIGFzcGVjdC1yYXRpbzogNS83O1xuICAgIH1cbiAgfVxuXG4gIC5zaWRlLTEgLm1haW4sIC5zaWRlLTEgZm9vdGVyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XG4gIH1cbiAgXG4gIC5jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmbGlwT3BhY2l0eSB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICBcbiAgLnNpZGUtMCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIH1cbiAgXG4gIC5zaWRlLTAgLmNvbnRlbnQge1xuICAgIGFuaW1hdGlvbjogZmxpcE9wYWNpdHkgMXM7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG4gIFxuICAuc2lkZS0xIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICB9XG4gIFxuICAuc2lkZS0xIC5jb250ZW50IHtcblxuICAgIGFuaW1hdGlvbjogZmxpcE9wYWNpdHkgMXM7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAvKiB0cmFuc2l0aW9uOiAwLjNzOyAqL1xuICB9XG4gIFxuICAud3JhcHBlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg3LCAxZnIpO1xuICAgIGdhcDogMXJlbTtcbiAgfVxuXG4gIC5tYWluIHtcbiAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICBncmlkLXJvdy1lbmQ6IDc7XG4gIH1cblxuICBmb290ZXIge1xuICAgIG1heC1oZWlnaHQ6IDMycHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGdyaWQtcm93LXN0YXJ0OiA3O1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG5cbiAgQGtleWZyYW1lcyBtb3ZlTGVmdCB7XG4gICAgMCUge1xuICAgIH1cbiAgICAgXG4gICAgIDI1JSB7XG4gICAgICAgLyogb3BhY2l0eTogMDsgKi9cbiAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpXG4gICAgIH1cbiAgICAgMjclIHtcbiAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpXG4gICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KVxuICAgIH1cbiB9XG4gQGtleWZyYW1lcyBtb3ZlUmlnaHQge1xuICAgIDAlIHtcbiAgICB9XG4gICAgIFxuICAgICAyNSUge1xuICAgICAgIC8qIG9wYWNpdHk6IDA7ICovXG4gICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweClcbiAgICAgfVxuICAgICAyNyUge1xuICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KVxuICAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweClcbiAgICB9XG4gfVxuIFxuICAuY29udGFpbmVyLm1vdmVMZWZ0IHtcbiAgIGFuaW1hdGlvbjogbW92ZUxlZnQgMXM7XG4gfVxuIFxuICAuY29udGFpbmVyLm1vdmVSaWdodCB7XG4gICBhbmltYXRpb246IG1vdmVSaWdodCAxcztcbiB9XG5gO1xuY2xhc3MgQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3NpZGUgPSAwO1xuICAgICAgICB0aGlzLmNhcmRIZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLl9kYXRhID0ge1xuICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICBkZWNrOiB7XG4gICAgICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0RlY2sgbmFtZSAvIDAwMCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGVudDogWydUZXJtJywgJ0RlZmluaXRpb24nXSxcbiAgICAgICAgICAgIGxldmVsOiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgY29uc3Qgc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgc2lkZS0ke3RoaXMuc2lkZX1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICAgICAgICA8bWFpbiBjbGFzcz1cIm1haW5cIj48L21haW4+XG4gICAgICAgICAgPGZvb3Rlcj4ke3RoaXMuZGF0YS5kZWNrLm5hbWV9PC9mb290ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICAgICAgc2hhZG93LmFwcGVuZChzdHlsZSwgdGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5zaGFkb3dSb290Py5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTaWRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5nZUNvbnRlbnQodGhpcy5kYXRhLmNvbnRlbnRbdGhpcy5zaWRlXSwgYCR7dGhpcy5kYXRhLmRlY2submFtZX1gKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jYXJkSGVpZ2h0KTtcbiAgICB9XG4gICAgZ2V0IHNpZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlO1xuICAgIH1cbiAgICBzZXQgc2lkZShzaWRlKSB7XG4gICAgICAgIHRoaXMuX3NpZGUgPSBzaWRlO1xuICAgIH1cbiAgICBnZXQgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgfVxuICAgIHNldCBkYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMuY2hhbmdlU2lkZSgwKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VDb250ZW50KHRoaXMuZGF0YS5jb250ZW50W3RoaXMuc2lkZV0sIHRoaXMuaW5mbyk7XG4gICAgfVxuICAgIGdldCBpbmZvKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5kYXRhLmRlY2submFtZX0gLyAke3RoaXMuZGF0YS5pZFxuICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgIC5wYWRTdGFydCgzLCAnMCcpfWA7XG4gICAgfVxuICAgIGNoYW5nZUNvbnRlbnQodGV4dCwgZm9vdGVyRGF0YSA9IHRoaXMuaW5mbykge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5zaGFkb3dSb290Py5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnQpO1xuICAgICAgICBpZiAoY29udGVudCkge1xuICAgICAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj4ke3RleHR9PC9kaXY+YDtcbiAgICAgICAgICAgIGNvbnN0IGZvb3RlciA9IHRoaXMuc2hhZG93Um9vdD8ucXVlcnlTZWxlY3RvcignZm9vdGVyJyk7XG4gICAgICAgICAgICBpZiAoZm9vdGVyKSB7XG4gICAgICAgICAgICAgICAgZm9vdGVyLmlubmVySFRNTCA9IGZvb3RlckRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlU2lkZShudW1iZXIpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuc2hhZG93Um9vdD8ucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgICAgICBpZiAobnVtYmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2lkZSA9IG51bWJlcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2lkZSA9IHRoaXMuc2lkZSA9PT0gMCA/IDEgOiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zaWRlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGBzaWRlLTBgKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYHNpZGUtMWApO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGUtMCcpPy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZS0xJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShgc2lkZS0xYCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGBzaWRlLTBgKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlLTEnKT8uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGUtMCcpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFuZ2VDb250ZW50KHRoaXMuZGF0YS5jb250ZW50W3RoaXMuc2lkZV0sIHRoaXMuaW5mbyk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudCc7XG5jb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxuICA8ZGl2IGNsYXNzPVwiY2FyZC12aWV3ZXJcIj5cbiAgICA8ZGl2PlxuICAgICAgPGNhcmQtY29tcG9uZW50Lz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHNcIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIiBpZD1cImJ1dHRvblByZXZcIj5QcmV2PC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzPVwidG90YWxcIj5cbiAgICAgICAgPGRpdiBpZD1cImN1cnJlbnROdW1iZXJcIj4wPC9kaXY+IC8gXG4gICAgICAgIDxkaXYgaWQ9XCJ0b3RhbE51bWJlclwiPjA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIGlkPVwiYnV0dG9uTmV4dFwiPk5leHQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zIGhpZGRlblwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiPkFnYWluPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uXCI+SGFyZDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiPkdvb2Q8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIj5FYXN5PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcbmNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbnN0eWxlLnRleHRDb250ZW50ID0gYFxuICAuY2FyZC12aWV3ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5oaWRkZW4ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBvcGFjaXR5OiAwOyBcbiAgfVxuXG4gIC50b3RhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMzZweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAuY29udHJvbHMge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5hY3Rpb25zIHtcbiAgICBtYXJpbmc6IDAgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmJ1dHRvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlYmYxO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsMzEsMzUsMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB9XG5cbiAgLmJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZWJmMTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgI2YwZjNmNiAwJSwgI2U2ZWJmMSA5MCUpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0uNWVtO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNywzMSwzNSwwLjM1KTtcbiAgfVxuXG4gIC5idXR0b246YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI3LDMxLDM1LDAuMzUpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMC4xNWVtIDAuM2VtIHJnYmEoMjcsMzEsMzUsMC4xNSk7XG4gIH1cbmA7XG5jbGFzcyBDYXJkVmlld2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fY2FyZHMgPSBbXTtcbiAgICAgICAgdGhpcy5fY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IG51bGw7XG4gICAgICAgIHRoaXMuY29udHJvbHMgPSBudWxsO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB7XG4gICAgICAgICAgICBzdGFydFg6IDAsXG4gICAgICAgICAgICBzdGFydFk6IDAsXG4gICAgICAgICAgICBlbmRYOiAwLFxuICAgICAgICAgICAgZW5kWTogMCxcbiAgICAgICAgICAgIGlzTW92aW5nOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgIHNoYWRvdy5hcHBlbmQoc3R5bGUsIHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgYnV0dG9uUHJldiA9IHRoaXMuc2hhZG93Um9vdD8ucXVlcnlTZWxlY3RvcignI2J1dHRvblByZXYnKTtcbiAgICAgICAgY29uc3QgYnV0dG9uTmV4dCA9IHRoaXMuc2hhZG93Um9vdD8ucXVlcnlTZWxlY3RvcignI2J1dHRvbk5leHQnKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VDYXJkKCk7XG4gICAgICAgIGJ1dHRvblByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCAtPSAxO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50SW5kZXgpO1xuICAgICAgICB9KTtcbiAgICAgICAgYnV0dG9uTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ICs9IDE7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgICAgcG9zaXRpb24uc3RhcnRYID0gZS5vZmZzZXRYO1xuICAgICAgICAgICAgcG9zaXRpb24uaXNNb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcbiAgICAgICAgICAgIHBvc2l0aW9uLmVuZFggPSBlLm9mZnNldFg7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3RbcG9zaXRpb24uaXNNb3ZpbmcgPyAnYWRkJyA6ICdyZW1vdmUnXSgnbW92ZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjY3VycmVudE51bWJlcicpLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRJbmRleCArIDE7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignI3RvdGFsTnVtYmVyJykudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgdGhpcy5fY2FyZHMubGVuZ3RoO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGUpID0+IHtcbiAgICAgICAgICAgIHBvc2l0aW9uLmlzTW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBkaWZmID0gcG9zaXRpb24uZW5kWCAtIHBvc2l0aW9uLnN0YXJ0WDtcbiAgICAgICAgICAgIGlmIChkaWZmID4gMTAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW92ZVJpZ2h0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb3NpdGlvbi5lbmRYID0gMDtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ21vdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpb25zJyk7XG4gICAgICAgIHRoaXMuY29udHJvbHMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMnKTtcbiAgICAgICAgaWYgKHRoaXMuc2hhZG93Um9vdD8ucXVlcnlTZWxlY3RvcignLnNpZGUtMCcpKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbnM/LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbHM/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnNoYWRvd1Jvb3Q/LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLTEnKSkge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25zPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xzPy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGNhcmRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FyZHM7XG4gICAgfVxuICAgIHNldCBjYXJkcyhkYXRhKSB7XG4gICAgICAgIHRoaXMuX2NhcmRzID0gZGF0YTtcbiAgICB9XG4gICAgZ2V0IGN1cnJlbnRJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRJbmRleDtcbiAgICB9XG4gICAgc2V0IGN1cnJlbnRJbmRleChpZHgpIHtcbiAgICAgICAgaWYgKGlkeCA8IHRoaXMuX2NhcmRzLmxlbmd0aCAmJiBpZHggPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudEluZGV4ID0gaWR4O1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VDYXJkKHRoaXMuX2NhcmRzW3RoaXMuX2N1cnJlbnRJbmRleF0pO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignI2N1cnJlbnROdW1iZXInKS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudEluZGV4ICsgMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VDYXJkKGRhdGEgPSB0aGlzLl9jYXJkc1t0aGlzLmN1cnJlbnRJbmRleF0pIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IHRoaXMuc2hhZG93Um9vdD8ucXVlcnlTZWxlY3RvcignY2FyZC1jb21wb25lbnQnKTtcbiAgICAgICAgaWYgKGNhcmQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2NhcmRzW3RoaXMuY3VycmVudEluZGV4XSk7XG4gICAgICAgICAgICBjYXJkLmRhdGEgPSB0aGlzLl9jYXJkc1t0aGlzLmN1cnJlbnRJbmRleF07XG4gICAgICAgICAgICBjYXJkLmlkID0gdGhpcy5jdXJyZW50SW5kZXgudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENhcmRWaWV3ZXI7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnQnO1xuY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuc3R5bGUudGV4dENvbnRlbnQgPSBgXG4gIEBpbXBvcnQgdXJsKCcuL3N0eWxlcy9tYWluLmNzcycpO1xuICAuY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuXG4gIC53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLmJ1dHRvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlYmYxO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsMzEsMzUsMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB9XG5cbiAgLmJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZWJmMTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgI2YwZjNmNiAwJSwgI2U2ZWJmMSA5MCUpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0uNWVtO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNywzMSwzNSwwLjM1KTtcbiAgfVxuXG4gIC5idXR0b246YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI3LDMxLDM1LDAuMzUpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMC4xNWVtIDAuM2VtIHJnYmEoMjcsMzEsMzUsMC4xNSk7XG4gIH1cbmA7XG5jb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBgXG4gIDxoZWFkZXIgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIGlkPVwidGhlbWVCdG5cIj5cbiAgICAgICAgVGhlbWVcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2hlYWRlcj5cbmA7XG5jbGFzcyBQYWdlSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGNvbnN0IHNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICBzaGFkb3cuYXBwZW5kKHN0eWxlLCB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIGNvbnN0IHRoZW1lQnRuID0gdGhpcy5zaGFkb3dSb290Py5xdWVyeVNlbGVjdG9yKCcjdGhlbWVCdG4nKTtcbiAgICAgICAgaWYgKHRoZW1lQnRuKSB7XG4gICAgICAgICAgICB0aGVtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aGVtZSA9IGRvY3VtZW50LmJvZHkuZ2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCB0aGVtZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBQYWdlSGVhZGVyO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlY2tzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgbmFtZTogJ0FsZ29yaXRobXMgKyBEYXRhIHN0cnVjdHVyZXMnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgIG5hbWU6ICdTeXN0ZW0gZGVzaWduJyxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIGNhcmRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgZGVjazoge1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdTeXN0ZW0gZGVzaWduJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZXZlbDogMCxcbiAgICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICAgICAnUGVyZm9ybWFuY2UgdnMgc2NhbGFiaWxpdHknLFxuICAgICAgICAgICAgICAgIGBBIHNlcnZpY2UgaXMgc2NhbGFibGUgaWYgaXQgcmVzdWx0cyBpbiBpbmNyZWFzZWQgcGVyZm9ybWFuY2UgaW4gYSBtYW5uZXIgcHJvcG9ydGlvbmFsIHRvIHJlc291cmNlcyBhZGRlZC4gR2VuZXJhbGx5LCBpbmNyZWFzaW5nIHBlcmZvcm1hbmNlIG1lYW5zIHNlcnZpbmcgbW9yZSB1bml0cyBvZiB3b3JrLCBidXQgaXQgY2FuIGFsc28gYmUgdG8gaGFuZGxlIGxhcmdlciB1bml0cyBvZiB3b3JrLCBzdWNoIGFzIHdoZW4gZGF0YXNldHMgZ3Jvdy4xXG4gICAgICBgLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICBkZWNrOiB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1N5c3RlbSBkZXNpZ24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxldmVsOiAwLFxuICAgICAgICAgICAgY29udGVudDogW1xuICAgICAgICAgICAgICAgICdMYXRlbmN5IHZzIHRocm91Z2hwdXQnLFxuICAgICAgICAgICAgICAgIGBMYXRlbmN5IGlzIHRoZSB0aW1lIHRvIHBlcmZvcm0gc29tZSBhY3Rpb24gb3IgdG8gcHJvZHVjZSBzb21lIHJlc3VsdC5cblxuICAgICAgICBUaHJvdWdocHV0IGlzIHRoZSBudW1iZXIgb2Ygc3VjaCBhY3Rpb25zIG9yIHJlc3VsdHMgcGVyIHVuaXQgb2YgdGltZS5cbiAgICAgICAgXG4gICAgICAgIEdlbmVyYWxseSwgeW91IHNob3VsZCBhaW0gZm9yIG1heGltYWwgdGhyb3VnaHB1dCB3aXRoIGFjY2VwdGFibGUgbGF0ZW5jeS5cbiAgICAgIGAsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIGRlY2s6IHtcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnU3lzdGVtIGRlc2lnbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGV2ZWw6IDAsXG4gICAgICAgICAgICBjb250ZW50OiBbXG4gICAgICAgICAgICAgICAgJ0NvbnNpc3RlbmN5IHBhdHRlcm5zJyxcbiAgICAgICAgICAgICAgICBgV2l0aCBtdWx0aXBsZSBjb3BpZXMgb2YgdGhlIHNhbWUgZGF0YSwgd2UgYXJlIGZhY2VkIHdpdGggb3B0aW9ucyBvbiBob3cgdG8gc3luY2hyb25pemUgdGhlbSBzbyBjbGllbnRzIGhhdmUgYSBjb25zaXN0ZW50IHZpZXcgb2YgdGhlIGRhdGEuIFJlY2FsbCB0aGUgZGVmaW5pdGlvbiBvZiBjb25zaXN0ZW5jeSBmcm9tIHRoZSBDQVAgdGhlb3JlbSAtIEV2ZXJ5IHJlYWQgcmVjZWl2ZXMgdGhlIG1vc3QgcmVjZW50IHdyaXRlIG9yIGFuIGVycm9yLlxuICAgICAgYCxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgXSxcbn07XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbG9ycy5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb250cy5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idXR0b25zLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U291cmNlK0NvZGUrUHJvOml0YWwsd2dodEAwLDQwMDswLDUwMDsxLDQwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGNvbG9yOiB2YXIoLS1mZy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLWJnLWNvbG9yKSAyMXB4LCB0cmFuc3BhcmVudCAxJSlcXG4gICAgICBjZW50ZXIsXFxuICAgIGxpbmVhci1ncmFkaWVudCh2YXIoLS1iZy1jb2xvcikgMjFweCwgdHJhbnNwYXJlbnQgMSUpIGNlbnRlcixcXG4gICAgdmFyKC0tZG90LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogdmFyKC0tZG90LXNwYWNlKSB2YXIoLS1kb3Qtc3BhY2UpO1xcbn1cXG5cXG4jYXBwIHtcXG4gIHBhZGRpbmctdG9wOiA5cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogNTIwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFLQTtFQUNFLHNCQUFzQjtFQUN0Qjs7O29CQUdrQjtFQUNsQixrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U291cmNlK0NvZGUrUHJvOml0YWwsd2dodEAwLDQwMDswLDUwMDsxLDQwMCZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0ICdjb2xvcnMuY3NzJztcXG5AaW1wb3J0ICdmb250cy5jc3MnO1xcbkBpbXBvcnQgJ2J1dHRvbnMuY3NzJztcXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiB2YXIoLS1mZy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLWJnLWNvbG9yKSAyMXB4LCB0cmFuc3BhcmVudCAxJSlcXG4gICAgICBjZW50ZXIsXFxuICAgIGxpbmVhci1ncmFkaWVudCh2YXIoLS1iZy1jb2xvcikgMjFweCwgdHJhbnNwYXJlbnQgMSUpIGNlbnRlcixcXG4gICAgdmFyKC0tZG90LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogdmFyKC0tZG90LXNwYWNlKSB2YXIoLS1kb3Qtc3BhY2UpO1xcbn1cXG5cXG4jYXBwIHtcXG4gIHBhZGRpbmctdG9wOiA5cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogNTIwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1iZy1jb2xvcjogd2hpdGU7XFxuICAtLWZnLWNvbG9yOiAjMzAzMDMwO1xcbiAgLS1kb3QtY29sb3I6ICNhMzkyZDk7XFxuXFxuICAtLWRvdC1zaXplOiAxcHg7XFxuICAtLWRvdC1zcGFjZTogMjJweDtcXG4gIC0tY2FyZC1iZzogI2ZkZmVmZTtcXG5cXG4gIC0tcHJpbWFyeS1jb2xvcjogdG9tYXRvO1xcbiAgLS1ncmF5LWNvbG9yOiBncmF5O1xcblxcbiAgLyogVGhlbWVzICovXFxuICAvKiBNb25va2FpICovXFxuICAtLW1vbm9rYWktYmc6ICMyNzI4MjI7XFxuICAtLW1vbm9rYWktZmc6ICNmOGY4ZjI7XFxuICAtLW1vbm9rYWktY29tbWVudDogIzc1NzE1ZTtcXG4gIC0tbW9ub2thaS1yZWQ6ICNmOTI2NzI7XFxuICAtLW1vbm9rYWktb3JhbmdlOiAjZmQ5NzFmO1xcbiAgLS1tb25va2FpLWxpZ2h0LW9yYW5nZTogI2U2OWY2NjtcXG4gIC0tbW9ub2thaS15ZWxsb3c6ICNlNmRiNzQ7XFxuICAtLW1vbm9rYWktZ3JlZW46ICNhNmUyMmU7XFxuICAtLW1vbm9rYWktYmx1ZTogIzY2ZDllZjtcXG4gIC0tbW9ub2thaS1wdXJwbGU6ICNhZTgxZmY7XFxuXFxuICAtLW51bWJlci1jb2xvcjogcGluaztcXG5cXG4gIC8qIEpTICovXFxuICAtLWpzLWtleXdvcmQtY29sb3I6IHZhcigtLW1vbm9rYWktYmx1ZSk7XFxuICAtLWpzLWNvbW1lbnQ6IHZhcih2YXIoLS1tb25va2FpLWNvbW1lbnQpKTtcXG59XFxuXFxuW2RhdGEtdGhlbWU9J2RhcmsnXSB7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogIzgxOGNhYjtcXG4gIC0tZG90LWNvbG9yOiAjMzAzNjNkO1xcbiAgLS1iZy1jb2xvcjogIzBkMTExNztcXG4gIC0tZmctY29sb3I6ICNlMWUxZmY7XFxuICAtLWNhcmQtYmc6ICMxMDE3MWU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29sb3JzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsb0JBQW9COztFQUVwQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7RUFFbEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjs7RUFFbEIsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQix5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2Qix5QkFBeUI7O0VBRXpCLG9CQUFvQjs7RUFFcEIsT0FBTztFQUNQLHVDQUF1QztFQUN2Qyx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tYmctY29sb3I6IHdoaXRlO1xcbiAgLS1mZy1jb2xvcjogIzMwMzAzMDtcXG4gIC0tZG90LWNvbG9yOiAjYTM5MmQ5O1xcblxcbiAgLS1kb3Qtc2l6ZTogMXB4O1xcbiAgLS1kb3Qtc3BhY2U6IDIycHg7XFxuICAtLWNhcmQtYmc6ICNmZGZlZmU7XFxuXFxuICAtLXByaW1hcnktY29sb3I6IHRvbWF0bztcXG4gIC0tZ3JheS1jb2xvcjogZ3JheTtcXG5cXG4gIC8qIFRoZW1lcyAqL1xcbiAgLyogTW9ub2thaSAqL1xcbiAgLS1tb25va2FpLWJnOiAjMjcyODIyO1xcbiAgLS1tb25va2FpLWZnOiAjZjhmOGYyO1xcbiAgLS1tb25va2FpLWNvbW1lbnQ6ICM3NTcxNWU7XFxuICAtLW1vbm9rYWktcmVkOiAjZjkyNjcyO1xcbiAgLS1tb25va2FpLW9yYW5nZTogI2ZkOTcxZjtcXG4gIC0tbW9ub2thaS1saWdodC1vcmFuZ2U6ICNlNjlmNjY7XFxuICAtLW1vbm9rYWkteWVsbG93OiAjZTZkYjc0O1xcbiAgLS1tb25va2FpLWdyZWVuOiAjYTZlMjJlO1xcbiAgLS1tb25va2FpLWJsdWU6ICM2NmQ5ZWY7XFxuICAtLW1vbm9rYWktcHVycGxlOiAjYWU4MWZmO1xcblxcbiAgLS1udW1iZXItY29sb3I6IHBpbms7XFxuXFxuICAvKiBKUyAqL1xcbiAgLS1qcy1rZXl3b3JkLWNvbG9yOiB2YXIoLS1tb25va2FpLWJsdWUpO1xcbiAgLS1qcy1jb21tZW50OiB2YXIodmFyKC0tbW9ub2thaS1jb21tZW50KSk7XFxufVxcblxcbltkYXRhLXRoZW1lPSdkYXJrJ10ge1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICM4MThjYWI7XFxuICAtLWRvdC1jb2xvcjogIzMwMzYzZDtcXG4gIC0tYmctY29sb3I6ICMwZDExMTc7XFxuICAtLWZnLWNvbG9yOiAjZTFlMWZmO1xcbiAgLS1jYXJkLWJnOiAjMTAxNzFlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2ZvbnRzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29sb3JzLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2J1dHRvbnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixzQ0FBc0M7QUFDeENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJy4vY29sb3JzLmNzcycpO1xcblxcbi5idXR0b24ge1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50cyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IGRiIGZyb20gJy4vZGInO1xuaW1wb3J0ICcuL3N0eWxlcy9tYWluLmNzcyc7XG5kZWZpbmVDdXN0b21FbGVtZW50cygpO1xud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2RhcmsnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2xpZ2h0Jyk7XG4gICAgfVxufTtcbmNvbnN0IGFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKTtcbmNvbnN0IHZpZXdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhcmQtdmlld2VyJyk7XG52aWV3ZXIuY2FyZHMgPSBkYi5jYXJkcztcbmNvbnN0IHBhZ2VIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwYWdlLWhlYWRlcicpO1xuYXBwLmFwcGVuZChwYWdlSGVhZGVyLCB2aWV3ZXIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9