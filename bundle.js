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
  .card {
    transform: translateY(0);
    transition: 0.3s ease-out;
  }

  .card:hover {
    transform: translateY(-0.25rem);
  }

  .container {
    box-shadow: 0 0.3125rem 1.25rem -12px rgba(0, 0, 0, 0.16);
    padding: 0 30px;
    border: 1px solid var(--gray-color);
    width: 540px;
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
    box-sizing: border-box;
  }

  .container.side-1 {
    // height: 100%;
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
    overflow: hidden;
  }
  
  .side-0 .content {
    animation: flipOpacity 1s;
    color: white;
    font-size: 2rem;
    transition: 0.3s;
    overflow: scroll-y;
  }
  
  .side-1 {
    font-weight: normal;
    transform: rotateY(180deg);
    padding-top: 1rem;
    padding-bottom: 1rem;
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
    gap: 1rem;
  }

  .side-1 .wrapper {
    align-items: start;
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
      <div class="card">
        <div class="container side-${this.side}">
          <div class="wrapper">
            <main class="main"></main>
            <footer>${this.data.deck.name}</footer>
          </div>
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
                `A service is <b>scalable</b> if it results in increased performance in a manner proportional to resources added. Generally, increasing performance means serving more units of work, but it can also be to handle larger units of work, such as when datasets grow.1
        <hr />
        Another way to look at performance vs scalability:
        <ul>
        <li>
         If you have a performance problem, your system is slow for a single user.
        </li>
        <li>
        If you have a scalability problem, your system is fast for a single user but slow under heavy load.
        </li>
        </ul>
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
                `<h3>Consistency patterns</h3>
        With multiple copies of the same data, we are faced with options on how to synchronize them so clients have a consistent view of the data. Recall the definition of consistency from the CAP theorem - Every read receives the most recent write or an error.
        
        <h4>Weak consistency</h4>
        After a write, reads may or may not see it. A best effort approach is taken.
        
        This approach is seen in systems such as memcached. Weak consistency works well in real time use cases such as VoIP, video chat, and realtime multiplayer games. For example, if you are on a phone call and lose reception for a few seconds, when you regain connection you do not hear what was spoken during connection loss.
        
        Eventual consistency
        After a write, reads will eventually see it (typically within milliseconds). Data is replicated asynchronously.
        
        This approach is seen in systems such as DNS and email. Eventual consistency works well in highly available systems.
        
        Strong consistency
        After a write, reads will see it. Data is replicated synchronously.
        
        This approach is seen in file systems and RDBMSes. Strong consistency works well in systems that need transactions.
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  color: var(--fg-color);\n  height: 100vh;\n  overflow: hidden;\n  background: linear-gradient(90deg, var(--bg-color) 21px, transparent 1%),\n    center, linear-gradient(var(--bg-color) 21px, transparent 1%) center,\n    var(--dot-color);\n  background-size: var(--dot-space) var(--dot-space);\n}\n\n#app {\n  padding-top: 9rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 520px;\n  margin: 0 auto;\n  position: relative;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAKA;EACE,sBAAsB;EACtB,aAAa;EACb,gBAAgB;EAChB;;oBAEkB;EAClB,kDAAkD;AACpD;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,cAAc;EACd,kBAAkB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,500;1,400&display=swap');\n@import 'colors.css';\n@import 'fonts.css';\n@import 'buttons.css';\n\nbody {\n  color: var(--fg-color);\n  height: 100vh;\n  overflow: hidden;\n  background: linear-gradient(90deg, var(--bg-color) 21px, transparent 1%),\n    center, linear-gradient(var(--bg-color) 21px, transparent 1%) center,\n    var(--dot-color);\n  background-size: var(--dot-space) var(--dot-space);\n}\n\n#app {\n  padding-top: 9rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 520px;\n  margin: 0 auto;\n  position: relative;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --bg-color: white;\n  --fg-color: #303030;\n  --dot-color: #a392d9;\n\n  --dot-size: 1px;\n  --dot-space: 22px;\n  --card-bg: #fdfefe;\n\n  --primary-color: #1faf7f;\n  --gray-color: #ececec;\n  --light-gray-color: #ececec;\n\n  /* Themes */\n  /* Monokai */\n  --monokai-bg: #272822;\n  --monokai-fg: #f8f8f2;\n  --monokai-comment: #75715e;\n  --monokai-red: #f92672;\n  --monokai-orange: #fd971f;\n  --monokai-light-orange: #e69f66;\n  --monokai-yellow: #e6db74;\n  --monokai-green: #a6e22e;\n  --monokai-blue: #66d9ef;\n  --monokai-purple: #ae81ff;\n\n  --number-color: pink;\n\n  /* JS */\n  --js-keyword-color: var(--monokai-blue);\n  --js-comment: var(var(--monokai-comment));\n}\n\n[data-theme='dark'] {\n  --secondary-color: #818cab;\n  --dot-color: #30363d;\n  --bg-color: #0d1117;\n  --fg-color: #e1e1ff;\n  --card-bg: #10171e;\n  --gray-color: #383838;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/colors.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,oBAAoB;;EAEpB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;;EAElB,wBAAwB;EACxB,qBAAqB;EACrB,2BAA2B;;EAE3B,WAAW;EACX,YAAY;EACZ,qBAAqB;EACrB,qBAAqB;EACrB,0BAA0B;EAC1B,sBAAsB;EACtB,yBAAyB;EACzB,+BAA+B;EAC/B,yBAAyB;EACzB,wBAAwB;EACxB,uBAAuB;EACvB,yBAAyB;;EAEzB,oBAAoB;;EAEpB,OAAO;EACP,uCAAuC;EACvC,yCAAyC;AAC3C;;AAEA;EACE,0BAA0B;EAC1B,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;EAClB,qBAAqB;AACvB","sourcesContent":[":root {\n  --bg-color: white;\n  --fg-color: #303030;\n  --dot-color: #a392d9;\n\n  --dot-size: 1px;\n  --dot-space: 22px;\n  --card-bg: #fdfefe;\n\n  --primary-color: #1faf7f;\n  --gray-color: #ececec;\n  --light-gray-color: #ececec;\n\n  /* Themes */\n  /* Monokai */\n  --monokai-bg: #272822;\n  --monokai-fg: #f8f8f2;\n  --monokai-comment: #75715e;\n  --monokai-red: #f92672;\n  --monokai-orange: #fd971f;\n  --monokai-light-orange: #e69f66;\n  --monokai-yellow: #e6db74;\n  --monokai-green: #a6e22e;\n  --monokai-blue: #66d9ef;\n  --monokai-purple: #ae81ff;\n\n  --number-color: pink;\n\n  /* JS */\n  --js-keyword-color: var(--monokai-blue);\n  --js-comment: var(var(--monokai-comment));\n}\n\n[data-theme='dark'] {\n  --secondary-color: #818cab;\n  --dot-color: #30363d;\n  --bg-color: #0d1117;\n  --fg-color: #e1e1ff;\n  --card-bg: #10171e;\n  --gray-color: #383838;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNYO0FBQ2E7QUFDQTtBQUMzQztBQUNQLHdDQUF3Qyw4REFBUztBQUNqRCw0Q0FBNEMsd0RBQUk7QUFDaEQseUNBQXlDLCtEQUFVO0FBQ25ELHlDQUF5QywrREFBVTtBQUNuRDs7Ozs7Ozs7Ozs7O0FDVHlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHdCQUF3QixpREFBUztBQUNqQztBQUNBO0FBQ0EsMkNBQTJDLGNBQWM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsOEJBQThCO0FBQ3JFLHVDQUF1QyxJQUFJO0FBQzNDLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFFBQVE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7O0FDekdsQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1J5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaURBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsY0FBYztBQUN6RDtBQUNBO0FB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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7OztBQ04rQztBQUN6QjtBQUNLO0FBQzNCLDREQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaURBQVE7QUFDdkI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Vua2ktdWkvLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vdW5raS11aS8uL3NyYy9jb21wb25lbnRzL2NvZGUtYmxvY2sudHMiLCJ3ZWJwYWNrOi8vdW5raS11aS8uL3NyYy9jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vdW5raS11aS8uL3NyYy9jb21wb25lbnRzL2NhcmQudHMiLCJ3ZWJwYWNrOi8vdW5raS11aS8uL3NyYy9jb21wb25lbnRzL2NhcmQtdmlld2VyLnRzIiwid2VicGFjazovL3Vua2ktdWkvLi9zcmMvY29tcG9uZW50cy9wYWdlLWhlYWRlci50cyIsIndlYnBhY2s6Ly91bmtpLXVpLy4vc3JjL2RiLnRzIiwid2VicGFjazovL3Vua2ktdWkvLi9zcmMvc3R5bGVzL21haW4uY3NzP2U4MGEiLCJ3ZWJwYWNrOi8vdW5raS11aS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly91bmtpLXVpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdW5raS11aS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdW5raS11aS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly91bmtpLXVpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Vua2ktdWkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly91bmtpLXVpLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly91bmtpLXVpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdW5raS11aS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdW5raS11aS8uL3NyYy9zdHlsZXMvY29sb3JzLmNzcyIsIndlYnBhY2s6Ly91bmtpLXVpLy4vc3JjL3N0eWxlcy9mb250cy5jc3MiLCJ3ZWJwYWNrOi8vdW5raS11aS8uL3NyYy9zdHlsZXMvYnV0dG9ucy5jc3MiLCJ3ZWJwYWNrOi8vdW5raS11aS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91bmtpLXVpL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Vua2ktdWkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Vua2ktdWkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly91bmtpLXVpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdW5raS11aS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29kZUJsb2NrIGZyb20gJy4vY29tcG9uZW50cy9jb2RlLWJsb2NrJztcbmltcG9ydCBDYXJkIGZyb20gJy4vY29tcG9uZW50cy9jYXJkJztcbmltcG9ydCBDYXJkVmlld2VyIGZyb20gJy4vY29tcG9uZW50cy9jYXJkLXZpZXdlcic7XG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvcGFnZS1oZWFkZXInO1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnRzKCkge1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY29kZS1ibG9jaycsIENvZGVCbG9jayk7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjYXJkLWNvbXBvbmVudCcsIENhcmQpO1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY2FyZC12aWV3ZXInLCBDYXJkVmlld2VyKTtcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ3BhZ2UtaGVhZGVyJywgUGFnZUhlYWRlcik7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnQnO1xuY29uc3QgZGljdCA9IHtcbiAgICBqczoge1xuICAgICAgICBrZXl3b3JkczogW1xuICAgICAgICAgICAgJ3N1cGVyJyxcbiAgICAgICAgICAgICdzd2l0Y2gnLFxuICAgICAgICAgICAgJ3N5bmNocm9uaXplZCcsXG4gICAgICAgICAgICAndGhpcycsXG4gICAgICAgICAgICAndGhyb3cnLFxuICAgICAgICAgICAgJ3Rocm93cycsXG4gICAgICAgICAgICAndHJhbnNpZW50JyxcbiAgICAgICAgICAgICd0cnVlJyxcbiAgICAgICAgICAgICd0cnknLFxuICAgICAgICAgICAgJ3R5cGVvZicsXG4gICAgICAgICAgICAndmFyJyxcbiAgICAgICAgICAgICd2b2lkJyxcbiAgICAgICAgICAgICd2b2xhdGlsZScsXG4gICAgICAgICAgICAnd2hpbGUnLFxuICAgICAgICAgICAgJ3dpdGgnLFxuICAgICAgICAgICAgJ3lpZWxkJyxcbiAgICAgICAgICAgICdjb25zdCcsXG4gICAgICAgICAgICAnbGV0JyxcbiAgICAgICAgICAgICdjbGFzcycsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBodG1sOiB7XG4gICAgICAgIGtleXdvcmRzOiBbXSxcbiAgICB9LFxufTtcbmNsYXNzIENvZGVCbG9jayBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGNvbnN0IHNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IGBcbiAgICAgIC5jb2RlLWJsb2NrIHtcbiAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgICAgIH1cblxuICAgICAgcHJlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgQ29kZSBQcm8nLCBtb25vc3BhY2UgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuXG4gICAgICAuY29kZS1ibG9jay0td3JhcHBlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vbm9rYWktYmcpO1xuICAgICAgICBjb2xvcjogdmFyKC0tbW9ub2thaS1mZyk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgIC5saW5lIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmxpbmVFdmVuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgICAgIH1cblxuICAgICAgLmxpbmVOdW1iZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tZ3JheS1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgICB9XG5cbiAgICAgIC5qcy1rZXl3b3JkIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWpzLWtleXdvcmQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAuanMtbnVtYmVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLW51bWJlci1jb2xvcik7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5qcy1icmFja2V0IHtcbiAgICAgICAgY29sb3I6IHZhcigtLWdyYXktY29sb3IpO1xuICAgICAgfVxuICAgIGA7XG4gICAgICAgIGNvbnN0IGxhbmcgPSB0aGlzLmdldEF0dHJpYnV0ZSgnbGFuZycpIHx8ICdqcyc7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnRleHRDb250ZW50XG4gICAgICAgICAgICA/LnNwbGl0KCdcXG4nKVxuICAgICAgICAgICAgLmZpbHRlcigoYykgPT4gYyAhPT0gJycpXG4gICAgICAgICAgICAubWFwKChsaW5lLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYDxwcmUgY2xhc3M9XCJsaW5lICR7aSAlIDIgPT09IDAgPyAnbGluZUV2ZW4nIDogJyd9XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVOdW1iZXJcIj4keysraX08L3NwYW4+IFxuICAgICAgICAgICAgJHtsaW5lXG4gICAgICAgICAgICAgICAgLy8ga2V5d29yZHNcbiAgICAgICAgICAgICAgICA/LnJlcGxhY2UoL2NsYXNzIHxjb25zdCB8bGV0IHxzdXBlci9naSwgJzxzcGFuIGNsYXNzPVwianMta2V5d29yZFwiPiQmPC9zcGFuPicpXG4gICAgICAgICAgICAgICAgLy8gbnVtYmVyc1xuICAgICAgICAgICAgICAgID8ucmVwbGFjZSgvXFxkL2dpLCAnPHNwYW4gY2xhc3M9XCJqcy1udW1iZXJcIj4kJjwvc3Bhbj4nKX1cbiAgICAgICAgICA8L3ByZT5gO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmpvaW4oJycpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2NvZGUtYmxvY2snO1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XG4gICAgICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gJ2NvZGUtYmxvY2stLXdyYXBwZXInO1xuICAgICAgICB3cmFwcGVyLmlubmVySFRNTCA9IGAke2NvbnRlbnR9YDtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZCh3cmFwcGVyKTtcbiAgICAgICAgc2hhZG93LmFwcGVuZChzdHlsZSwgY29udGFpbmVyLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ29kZUJsb2NrO1xuIiwiZXhwb3J0IGNsYXNzIENvbXBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7IH1cbiAgICBvbkNsaWNrKGZ1bmMpIHtcbiAgICAgICAgZnVuYygpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudCc7XG5jb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5zdHlsZS50ZXh0Q29udGVudCA9IGBcbiAgLmNhcmQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xuICB9XG5cbiAgLmNhcmQ6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAuMzEyNXJlbSAxLjI1cmVtIC0xMnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgcGFkZGluZzogMCAzMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXktY29sb3IpO1xuICAgIHdpZHRoOiA1NDBweDtcbiAgICBhc3BlY3QtcmF0aW86IDcvNTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgZm9udC13ZWlnaHQ6IG1lZGl1bTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4xNXM7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJnKTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIC5jb250YWluZXIuc2lkZS0xIHtcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAubW92ZSB7XG4gICAgY3Vyc29yOiBncmFiYmluZyAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmhpZGUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMzAwcHg7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBhc3BlY3QtcmF0aW86IDUvNztcbiAgICB9XG4gIH1cblxuICAuc2lkZS0xIC5tYWluLCAuc2lkZS0xIGZvb3RlciB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xuICB9XG4gIFxuICAuY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgZmxpcE9wYWNpdHkge1xuICAgIGZyb20ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbiAgXG4gIC5zaWRlLTAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIC5zaWRlLTAgLmNvbnRlbnQge1xuICAgIGFuaW1hdGlvbjogZmxpcE9wYWNpdHkgMXM7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIG92ZXJmbG93OiBzY3JvbGwteTtcbiAgfVxuICBcbiAgLnNpZGUtMSB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgfVxuICBcbiAgLnNpZGUtMSAuY29udGVudCB7XG5cbiAgICBhbmltYXRpb246IGZsaXBPcGFjaXR5IDFzO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgLyogdHJhbnNpdGlvbjogMC4zczsgKi9cbiAgfVxuICBcbiAgLndyYXBwZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xuICB9XG5cbiAgLnNpZGUtMSAud3JhcHBlciB7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICB9XG5cbiAgLm1haW4ge1xuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgIGdyaWQtcm93LWVuZDogNztcbiAgfVxuXG4gIGZvb3RlciB7XG4gICAgbWF4LWhlaWdodDogMzJweDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDc7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cblxuICBAa2V5ZnJhbWVzIG1vdmVMZWZ0IHtcbiAgICAwJSB7XG4gICAgfVxuICAgICBcbiAgICAgMjUlIHtcbiAgICAgICAvKiBvcGFjaXR5OiAwOyAqL1xuICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweClcbiAgICAgfVxuICAgICAyNyUge1xuICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweClcbiAgICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpXG4gICAgfVxuIH1cbiBAa2V5ZnJhbWVzIG1vdmVSaWdodCB7XG4gICAgMCUge1xuICAgIH1cbiAgICAgXG4gICAgIDI1JSB7XG4gICAgICAgLyogb3BhY2l0eTogMDsgKi9cbiAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KVxuICAgICB9XG4gICAgIDI3JSB7XG4gICAgICAgb3BhY2l0eTogMDtcbiAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpXG4gICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KVxuICAgIH1cbiB9XG4gXG4gIC5jb250YWluZXIubW92ZUxlZnQge1xuICAgYW5pbWF0aW9uOiBtb3ZlTGVmdCAxcztcbiB9XG4gXG4gIC5jb250YWluZXIubW92ZVJpZ2h0IHtcbiAgIGFuaW1hdGlvbjogbW92ZVJpZ2h0IDFzO1xuIH1cbmA7XG5jbGFzcyBDYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fc2lkZSA9IDA7XG4gICAgICAgIHRoaXMuY2FyZEhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuX2RhdGEgPSB7XG4gICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgIGRlY2s6IHtcbiAgICAgICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgICAgICBuYW1lOiAnRGVjayBuYW1lIC8gMDAwJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250ZW50OiBbJ1Rlcm0nLCAnRGVmaW5pdGlvbiddLFxuICAgICAgICAgICAgbGV2ZWw6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBjb25zdCBzaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBzaWRlLSR7dGhpcy5zaWRlfVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICA8bWFpbiBjbGFzcz1cIm1haW5cIj48L21haW4+XG4gICAgICAgICAgICA8Zm9vdGVyPiR7dGhpcy5kYXRhLmRlY2submFtZX08L2Zvb3Rlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgICAgICBzaGFkb3cuYXBwZW5kKHN0eWxlLCB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnNoYWRvd1Jvb3Q/LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVNpZGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbmdlQ29udGVudCh0aGlzLmRhdGEuY29udGVudFt0aGlzLnNpZGVdLCBgJHt0aGlzLmRhdGEuZGVjay5uYW1lfWApO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNhcmRIZWlnaHQpO1xuICAgIH1cbiAgICBnZXQgc2lkZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGU7XG4gICAgfVxuICAgIHNldCBzaWRlKHNpZGUpIHtcbiAgICAgICAgdGhpcy5fc2lkZSA9IHNpZGU7XG4gICAgfVxuICAgIGdldCBkYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICB9XG4gICAgc2V0IGRhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5jaGFuZ2VTaWRlKDApO1xuICAgICAgICB0aGlzLmNoYW5nZUNvbnRlbnQodGhpcy5kYXRhLmNvbnRlbnRbdGhpcy5zaWRlXSwgdGhpcy5pbmZvKTtcbiAgICB9XG4gICAgZ2V0IGluZm8oKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmRhdGEuZGVjay5uYW1lfSAvICR7dGhpcy5kYXRhLmlkXG4gICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgLnBhZFN0YXJ0KDMsICcwJyl9YDtcbiAgICB9XG4gICAgY2hhbmdlQ29udGVudCh0ZXh0LCBmb290ZXJEYXRhID0gdGhpcy5pbmZvKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnNoYWRvd1Jvb3Q/LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICAgICAgY29uc29sZS5sb2coY29udGVudCk7XG4gICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiY29udGVudFwiPiR7dGV4dH08L2Rpdj5gO1xuICAgICAgICAgICAgY29uc3QgZm9vdGVyID0gdGhpcy5zaGFkb3dSb290Py5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcbiAgICAgICAgICAgIGlmIChmb290ZXIpIHtcbiAgICAgICAgICAgICAgICBmb290ZXIuaW5uZXJIVE1MID0gZm9vdGVyRGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VTaWRlKG51bWJlcikge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5zaGFkb3dSb290Py5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgICAgIGlmIChudW1iZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zaWRlID0gbnVtYmVyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaWRlID0gdGhpcy5zaWRlID09PSAwID8gMSA6IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNpZGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYHNpZGUtMGApO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgc2lkZS0xYCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZS0wJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlLTEnKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGBzaWRlLTFgKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYHNpZGUtMGApO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGUtMScpPy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZS0wJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5nZUNvbnRlbnQodGhpcy5kYXRhLmNvbnRlbnRbdGhpcy5zaWRlXSwgdGhpcy5pbmZvKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50JztcbmNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBgXG4gIDxkaXYgY2xhc3M9XCJjYXJkLXZpZXdlclwiPlxuICAgIDxkaXY+XG4gICAgICA8Y2FyZC1jb21wb25lbnQvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIGlkPVwiYnV0dG9uUHJldlwiPlByZXY8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0b3RhbFwiPlxuICAgICAgICA8ZGl2IGlkPVwiY3VycmVudE51bWJlclwiPjA8L2Rpdj4gLyBcbiAgICAgICAgPGRpdiBpZD1cInRvdGFsTnVtYmVyXCI+MDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uXCIgaWQ9XCJidXR0b25OZXh0XCI+TmV4dDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImFjdGlvbnMgaGlkZGVuXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uXCI+QWdhaW48L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIj5IYXJkPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uXCI+R29vZDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiPkVhc3k8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5gO1xuY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuc3R5bGUudGV4dENvbnRlbnQgPSBgXG4gIC5jYXJkLXZpZXdlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmhpZGRlbiB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7IFxuICB9XG5cbiAgLnRvdGFsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5jb250cm9scyB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLmFjdGlvbnMge1xuICAgIG1hcmluZzogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmViZjE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywzMSwzNSwwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIH1cblxuICAuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlYmYxO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZjBmM2Y2IDAlLCAjZTZlYmYxIDkwJSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLS41ZW07XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI3LDMxLDM1LDAuMzUpO1xuICB9XG5cbiAgLmJ1dHRvbjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjcsMzEsMzUsMC4zNSk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwLjE1ZW0gMC4zZW0gcmdiYSgyNywzMSwzNSwwLjE1KTtcbiAgfVxuYDtcbmNsYXNzIENhcmRWaWV3ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9jYXJkcyA9IFtdO1xuICAgICAgICB0aGlzLl9jdXJyZW50SW5kZXggPSAwO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gbnVsbDtcbiAgICAgICAgdGhpcy5jb250cm9scyA9IG51bGw7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHN0YXJ0WDogMCxcbiAgICAgICAgICAgIHN0YXJ0WTogMCxcbiAgICAgICAgICAgIGVuZFg6IDAsXG4gICAgICAgICAgICBlbmRZOiAwLFxuICAgICAgICAgICAgaXNNb3Zpbmc6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgc2hhZG93LmFwcGVuZChzdHlsZSwgdGhpcy5jb250YWluZXIpO1xuICAgICAgICBjb25zdCBidXR0b25QcmV2ID0gdGhpcy5zaGFkb3dSb290Py5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uUHJldicpO1xuICAgICAgICBjb25zdCBidXR0b25OZXh0ID0gdGhpcy5zaGFkb3dSb290Py5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uTmV4dCcpO1xuICAgICAgICB0aGlzLmNoYW5nZUNhcmQoKTtcbiAgICAgICAgYnV0dG9uUHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4IC09IDE7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRJbmRleCk7XG4gICAgICAgIH0pO1xuICAgICAgICBidXR0b25OZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggKz0gMTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICBwb3NpdGlvbi5zdGFydFggPSBlLm9mZnNldFg7XG4gICAgICAgICAgICBwb3NpdGlvbi5pc01vdmluZyA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgICAgcG9zaXRpb24uZW5kWCA9IGUub2Zmc2V0WDtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdFtwb3NpdGlvbi5pc01vdmluZyA/ICdhZGQnIDogJ3JlbW92ZSddKCdtb3ZlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50TnVtYmVyJykudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgdGhpcy5fY3VycmVudEluZGV4ICsgMTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjdG90YWxOdW1iZXInKS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICB0aGlzLl9jYXJkcy5sZW5ndGg7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZSkgPT4ge1xuICAgICAgICAgICAgcG9zaXRpb24uaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBwb3NpdGlvbi5lbmRYIC0gcG9zaXRpb24uc3RhcnRYO1xuICAgICAgICAgICAgaWYgKGRpZmYgPiAxMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb3ZlUmlnaHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvc2l0aW9uLmVuZFggPSAwO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnbW92ZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignLmFjdGlvbnMnKTtcbiAgICAgICAgdGhpcy5jb250cm9scyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9scycpO1xuICAgICAgICBpZiAodGhpcy5zaGFkb3dSb290Py5xdWVyeVNlbGVjdG9yKCcuc2lkZS0wJykpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucz8uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgdGhpcy5jb250cm9scz8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2hhZG93Um9vdD8ucXVlcnlTZWxlY3RvcignLnNpZGUtMScpKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbnM/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbHM/LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgY2FyZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXJkcztcbiAgICB9XG4gICAgc2V0IGNhcmRzKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fY2FyZHMgPSBkYXRhO1xuICAgIH1cbiAgICBnZXQgY3VycmVudEluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudEluZGV4O1xuICAgIH1cbiAgICBzZXQgY3VycmVudEluZGV4KGlkeCkge1xuICAgICAgICBpZiAoaWR4IDwgdGhpcy5fY2FyZHMubGVuZ3RoICYmIGlkeCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50SW5kZXggPSBpZHg7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUNhcmQodGhpcy5fY2FyZHNbdGhpcy5fY3VycmVudEluZGV4XSk7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjY3VycmVudE51bWJlcicpLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50SW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZUNhcmQoZGF0YSA9IHRoaXMuX2NhcmRzW3RoaXMuY3VycmVudEluZGV4XSkge1xuICAgICAgICBjb25zdCBjYXJkID0gdGhpcy5zaGFkb3dSb290Py5xdWVyeVNlbGVjdG9yKCdjYXJkLWNvbXBvbmVudCcpO1xuICAgICAgICBpZiAoY2FyZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fY2FyZHNbdGhpcy5jdXJyZW50SW5kZXhdKTtcbiAgICAgICAgICAgIGNhcmQuZGF0YSA9IHRoaXMuX2NhcmRzW3RoaXMuY3VycmVudEluZGV4XTtcbiAgICAgICAgICAgIGNhcmQuaWQgPSB0aGlzLmN1cnJlbnRJbmRleC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ2FyZFZpZXdlcjtcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudCc7XG5jb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5zdHlsZS50ZXh0Q29udGVudCA9IGBcbiAgQGltcG9ydCB1cmwoJy4vc3R5bGVzL21haW4uY3NzJyk7XG4gIC5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG5cbiAgLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAuYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmViZjE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywzMSwzNSwwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIH1cblxuICAuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlYmYxO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZjBmM2Y2IDAlLCAjZTZlYmYxIDkwJSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLS41ZW07XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI3LDMxLDM1LDAuMzUpO1xuICB9XG5cbiAgLmJ1dHRvbjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjcsMzEsMzUsMC4zNSk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwLjE1ZW0gMC4zZW0gcmdiYSgyNywzMSwzNSwwLjE1KTtcbiAgfVxuYDtcbmNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcbiAgPGhlYWRlciBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uXCIgaWQ9XCJ0aGVtZUJ0blwiPlxuICAgICAgICBUaGVtZVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvaGVhZGVyPlxuYDtcbmNsYXNzIFBhZ2VIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgY29uc3Qgc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgIHNoYWRvdy5hcHBlbmQoc3R5bGUsIHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgY29uc3QgdGhlbWVCdG4gPSB0aGlzLnNoYWRvd1Jvb3Q/LnF1ZXJ5U2VsZWN0b3IoJyN0aGVtZUJ0bicpO1xuICAgICAgICBpZiAodGhlbWVCdG4pIHtcbiAgICAgICAgICAgIHRoZW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRoZW1lID0gZG9jdW1lbnQuYm9keS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsIHRoZW1lID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0Jyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFBhZ2VIZWFkZXI7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgZGVja3M6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBuYW1lOiAnQWxnb3JpdGhtcyArIERhdGEgc3RydWN0dXJlcycsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgbmFtZTogJ1N5c3RlbSBkZXNpZ24nLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgY2FyZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBkZWNrOiB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1N5c3RlbSBkZXNpZ24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxldmVsOiAwLFxuICAgICAgICAgICAgY29udGVudDogW1xuICAgICAgICAgICAgICAgICdQZXJmb3JtYW5jZSB2cyBzY2FsYWJpbGl0eScsXG4gICAgICAgICAgICAgICAgYEEgc2VydmljZSBpcyA8Yj5zY2FsYWJsZTwvYj4gaWYgaXQgcmVzdWx0cyBpbiBpbmNyZWFzZWQgcGVyZm9ybWFuY2UgaW4gYSBtYW5uZXIgcHJvcG9ydGlvbmFsIHRvIHJlc291cmNlcyBhZGRlZC4gR2VuZXJhbGx5LCBpbmNyZWFzaW5nIHBlcmZvcm1hbmNlIG1lYW5zIHNlcnZpbmcgbW9yZSB1bml0cyBvZiB3b3JrLCBidXQgaXQgY2FuIGFsc28gYmUgdG8gaGFuZGxlIGxhcmdlciB1bml0cyBvZiB3b3JrLCBzdWNoIGFzIHdoZW4gZGF0YXNldHMgZ3Jvdy4xXG4gICAgICAgIDxociAvPlxuICAgICAgICBBbm90aGVyIHdheSB0byBsb29rIGF0IHBlcmZvcm1hbmNlIHZzIHNjYWxhYmlsaXR5OlxuICAgICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgIElmIHlvdSBoYXZlIGEgcGVyZm9ybWFuY2UgcHJvYmxlbSwgeW91ciBzeXN0ZW0gaXMgc2xvdyBmb3IgYSBzaW5nbGUgdXNlci5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICBJZiB5b3UgaGF2ZSBhIHNjYWxhYmlsaXR5IHByb2JsZW0sIHlvdXIgc3lzdGVtIGlzIGZhc3QgZm9yIGEgc2luZ2xlIHVzZXIgYnV0IHNsb3cgdW5kZXIgaGVhdnkgbG9hZC5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIGAsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgIGRlY2s6IHtcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnU3lzdGVtIGRlc2lnbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGV2ZWw6IDAsXG4gICAgICAgICAgICBjb250ZW50OiBbXG4gICAgICAgICAgICAgICAgJ0xhdGVuY3kgdnMgdGhyb3VnaHB1dCcsXG4gICAgICAgICAgICAgICAgYExhdGVuY3kgaXMgdGhlIHRpbWUgdG8gcGVyZm9ybSBzb21lIGFjdGlvbiBvciB0byBwcm9kdWNlIHNvbWUgcmVzdWx0LlxuXG4gICAgICAgIFRocm91Z2hwdXQgaXMgdGhlIG51bWJlciBvZiBzdWNoIGFjdGlvbnMgb3IgcmVzdWx0cyBwZXIgdW5pdCBvZiB0aW1lLlxuICAgICAgICBcbiAgICAgICAgR2VuZXJhbGx5LCB5b3Ugc2hvdWxkIGFpbSBmb3IgbWF4aW1hbCB0aHJvdWdocHV0IHdpdGggYWNjZXB0YWJsZSBsYXRlbmN5LlxuICAgICAgYCxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgZGVjazoge1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdTeXN0ZW0gZGVzaWduJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZXZlbDogMCxcbiAgICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICAgICAnQ29uc2lzdGVuY3kgcGF0dGVybnMnLFxuICAgICAgICAgICAgICAgIGA8aDM+Q29uc2lzdGVuY3kgcGF0dGVybnM8L2gzPlxuICAgICAgICBXaXRoIG11bHRpcGxlIGNvcGllcyBvZiB0aGUgc2FtZSBkYXRhLCB3ZSBhcmUgZmFjZWQgd2l0aCBvcHRpb25zIG9uIGhvdyB0byBzeW5jaHJvbml6ZSB0aGVtIHNvIGNsaWVudHMgaGF2ZSBhIGNvbnNpc3RlbnQgdmlldyBvZiB0aGUgZGF0YS4gUmVjYWxsIHRoZSBkZWZpbml0aW9uIG9mIGNvbnNpc3RlbmN5IGZyb20gdGhlIENBUCB0aGVvcmVtIC0gRXZlcnkgcmVhZCByZWNlaXZlcyB0aGUgbW9zdCByZWNlbnQgd3JpdGUgb3IgYW4gZXJyb3IuXG4gICAgICAgIFxuICAgICAgICA8aDQ+V2VhayBjb25zaXN0ZW5jeTwvaDQ+XG4gICAgICAgIEFmdGVyIGEgd3JpdGUsIHJlYWRzIG1heSBvciBtYXkgbm90IHNlZSBpdC4gQSBiZXN0IGVmZm9ydCBhcHByb2FjaCBpcyB0YWtlbi5cbiAgICAgICAgXG4gICAgICAgIFRoaXMgYXBwcm9hY2ggaXMgc2VlbiBpbiBzeXN0ZW1zIHN1Y2ggYXMgbWVtY2FjaGVkLiBXZWFrIGNvbnNpc3RlbmN5IHdvcmtzIHdlbGwgaW4gcmVhbCB0aW1lIHVzZSBjYXNlcyBzdWNoIGFzIFZvSVAsIHZpZGVvIGNoYXQsIGFuZCByZWFsdGltZSBtdWx0aXBsYXllciBnYW1lcy4gRm9yIGV4YW1wbGUsIGlmIHlvdSBhcmUgb24gYSBwaG9uZSBjYWxsIGFuZCBsb3NlIHJlY2VwdGlvbiBmb3IgYSBmZXcgc2Vjb25kcywgd2hlbiB5b3UgcmVnYWluIGNvbm5lY3Rpb24geW91IGRvIG5vdCBoZWFyIHdoYXQgd2FzIHNwb2tlbiBkdXJpbmcgY29ubmVjdGlvbiBsb3NzLlxuICAgICAgICBcbiAgICAgICAgRXZlbnR1YWwgY29uc2lzdGVuY3lcbiAgICAgICAgQWZ0ZXIgYSB3cml0ZSwgcmVhZHMgd2lsbCBldmVudHVhbGx5IHNlZSBpdCAodHlwaWNhbGx5IHdpdGhpbiBtaWxsaXNlY29uZHMpLiBEYXRhIGlzIHJlcGxpY2F0ZWQgYXN5bmNocm9ub3VzbHkuXG4gICAgICAgIFxuICAgICAgICBUaGlzIGFwcHJvYWNoIGlzIHNlZW4gaW4gc3lzdGVtcyBzdWNoIGFzIEROUyBhbmQgZW1haWwuIEV2ZW50dWFsIGNvbnNpc3RlbmN5IHdvcmtzIHdlbGwgaW4gaGlnaGx5IGF2YWlsYWJsZSBzeXN0ZW1zLlxuICAgICAgICBcbiAgICAgICAgU3Ryb25nIGNvbnNpc3RlbmN5XG4gICAgICAgIEFmdGVyIGEgd3JpdGUsIHJlYWRzIHdpbGwgc2VlIGl0LiBEYXRhIGlzIHJlcGxpY2F0ZWQgc3luY2hyb25vdXNseS5cbiAgICAgICAgXG4gICAgICAgIFRoaXMgYXBwcm9hY2ggaXMgc2VlbiBpbiBmaWxlIHN5c3RlbXMgYW5kIFJEQk1TZXMuIFN0cm9uZyBjb25zaXN0ZW5jeSB3b3JrcyB3ZWxsIGluIHN5c3RlbXMgdGhhdCBuZWVkIHRyYW5zYWN0aW9ucy5cbiAgICAgIGAsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgIF0sXG59O1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb2xvcnMuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9udHMuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9ucy5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNvdXJjZStDb2RlK1BybzppdGFsLHdnaHRAMCw0MDA7MCw1MDA7MSw0MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBjb2xvcjogdmFyKC0tZmctY29sb3IpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLWJnLWNvbG9yKSAyMXB4LCB0cmFuc3BhcmVudCAxJSksXFxuICAgIGNlbnRlciwgbGluZWFyLWdyYWRpZW50KHZhcigtLWJnLWNvbG9yKSAyMXB4LCB0cmFuc3BhcmVudCAxJSkgY2VudGVyLFxcbiAgICB2YXIoLS1kb3QtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1zaXplOiB2YXIoLS1kb3Qtc3BhY2UpIHZhcigtLWRvdC1zcGFjZSk7XFxufVxcblxcbiNhcHAge1xcbiAgcGFkZGluZy10b3A6IDlyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiA1MjBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEI7O29CQUVrQjtFQUNsQixrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U291cmNlK0NvZGUrUHJvOml0YWwsd2dodEAwLDQwMDswLDUwMDsxLDQwMCZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0ICdjb2xvcnMuY3NzJztcXG5AaW1wb3J0ICdmb250cy5jc3MnO1xcbkBpbXBvcnQgJ2J1dHRvbnMuY3NzJztcXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiB2YXIoLS1mZy1jb2xvcik7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tYmctY29sb3IpIDIxcHgsIHRyYW5zcGFyZW50IDElKSxcXG4gICAgY2VudGVyLCBsaW5lYXItZ3JhZGllbnQodmFyKC0tYmctY29sb3IpIDIxcHgsIHRyYW5zcGFyZW50IDElKSBjZW50ZXIsXFxuICAgIHZhcigtLWRvdC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IHZhcigtLWRvdC1zcGFjZSkgdmFyKC0tZG90LXNwYWNlKTtcXG59XFxuXFxuI2FwcCB7XFxuICBwYWRkaW5nLXRvcDogOXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDUyMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tYmctY29sb3I6IHdoaXRlO1xcbiAgLS1mZy1jb2xvcjogIzMwMzAzMDtcXG4gIC0tZG90LWNvbG9yOiAjYTM5MmQ5O1xcblxcbiAgLS1kb3Qtc2l6ZTogMXB4O1xcbiAgLS1kb3Qtc3BhY2U6IDIycHg7XFxuICAtLWNhcmQtYmc6ICNmZGZlZmU7XFxuXFxuICAtLXByaW1hcnktY29sb3I6ICMxZmFmN2Y7XFxuICAtLWdyYXktY29sb3I6ICNlY2VjZWM7XFxuICAtLWxpZ2h0LWdyYXktY29sb3I6ICNlY2VjZWM7XFxuXFxuICAvKiBUaGVtZXMgKi9cXG4gIC8qIE1vbm9rYWkgKi9cXG4gIC0tbW9ub2thaS1iZzogIzI3MjgyMjtcXG4gIC0tbW9ub2thaS1mZzogI2Y4ZjhmMjtcXG4gIC0tbW9ub2thaS1jb21tZW50OiAjNzU3MTVlO1xcbiAgLS1tb25va2FpLXJlZDogI2Y5MjY3MjtcXG4gIC0tbW9ub2thaS1vcmFuZ2U6ICNmZDk3MWY7XFxuICAtLW1vbm9rYWktbGlnaHQtb3JhbmdlOiAjZTY5ZjY2O1xcbiAgLS1tb25va2FpLXllbGxvdzogI2U2ZGI3NDtcXG4gIC0tbW9ub2thaS1ncmVlbjogI2E2ZTIyZTtcXG4gIC0tbW9ub2thaS1ibHVlOiAjNjZkOWVmO1xcbiAgLS1tb25va2FpLXB1cnBsZTogI2FlODFmZjtcXG5cXG4gIC0tbnVtYmVyLWNvbG9yOiBwaW5rO1xcblxcbiAgLyogSlMgKi9cXG4gIC0tanMta2V5d29yZC1jb2xvcjogdmFyKC0tbW9ub2thaS1ibHVlKTtcXG4gIC0tanMtY29tbWVudDogdmFyKHZhcigtLW1vbm9rYWktY29tbWVudCkpO1xcbn1cXG5cXG5bZGF0YS10aGVtZT0nZGFyayddIHtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjODE4Y2FiO1xcbiAgLS1kb3QtY29sb3I6ICMzMDM2M2Q7XFxuICAtLWJnLWNvbG9yOiAjMGQxMTE3O1xcbiAgLS1mZy1jb2xvcjogI2UxZTFmZjtcXG4gIC0tY2FyZC1iZzogIzEwMTcxZTtcXG4gIC0tZ3JheS1jb2xvcjogIzM4MzgzODtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb2xvcnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7O0VBRXBCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCOztFQUVsQix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLDJCQUEyQjs7RUFFM0IsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQix5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2Qix5QkFBeUI7O0VBRXpCLG9CQUFvQjs7RUFFcEIsT0FBTztFQUNQLHVDQUF1QztFQUN2Qyx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWJnLWNvbG9yOiB3aGl0ZTtcXG4gIC0tZmctY29sb3I6ICMzMDMwMzA7XFxuICAtLWRvdC1jb2xvcjogI2EzOTJkOTtcXG5cXG4gIC0tZG90LXNpemU6IDFweDtcXG4gIC0tZG90LXNwYWNlOiAyMnB4O1xcbiAgLS1jYXJkLWJnOiAjZmRmZWZlO1xcblxcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMWZhZjdmO1xcbiAgLS1ncmF5LWNvbG9yOiAjZWNlY2VjO1xcbiAgLS1saWdodC1ncmF5LWNvbG9yOiAjZWNlY2VjO1xcblxcbiAgLyogVGhlbWVzICovXFxuICAvKiBNb25va2FpICovXFxuICAtLW1vbm9rYWktYmc6ICMyNzI4MjI7XFxuICAtLW1vbm9rYWktZmc6ICNmOGY4ZjI7XFxuICAtLW1vbm9rYWktY29tbWVudDogIzc1NzE1ZTtcXG4gIC0tbW9ub2thaS1yZWQ6ICNmOTI2NzI7XFxuICAtLW1vbm9rYWktb3JhbmdlOiAjZmQ5NzFmO1xcbiAgLS1tb25va2FpLWxpZ2h0LW9yYW5nZTogI2U2OWY2NjtcXG4gIC0tbW9ub2thaS15ZWxsb3c6ICNlNmRiNzQ7XFxuICAtLW1vbm9rYWktZ3JlZW46ICNhNmUyMmU7XFxuICAtLW1vbm9rYWktYmx1ZTogIzY2ZDllZjtcXG4gIC0tbW9ub2thaS1wdXJwbGU6ICNhZTgxZmY7XFxuXFxuICAtLW51bWJlci1jb2xvcjogcGluaztcXG5cXG4gIC8qIEpTICovXFxuICAtLWpzLWtleXdvcmQtY29sb3I6IHZhcigtLW1vbm9rYWktYmx1ZSk7XFxuICAtLWpzLWNvbW1lbnQ6IHZhcih2YXIoLS1tb25va2FpLWNvbW1lbnQpKTtcXG59XFxuXFxuW2RhdGEtdGhlbWU9J2RhcmsnXSB7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogIzgxOGNhYjtcXG4gIC0tZG90LWNvbG9yOiAjMzAzNjNkO1xcbiAgLS1iZy1jb2xvcjogIzBkMTExNztcXG4gIC0tZmctY29sb3I6ICNlMWUxZmY7XFxuICAtLWNhcmQtYmc6ICMxMDE3MWU7XFxuICAtLWdyYXktY29sb3I6ICMzODM4Mzg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZm9udHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb2xvcnMuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYnV0dG9ucy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLHNDQUFzQztBQUN4Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnLi9jb2xvcnMuY3NzJyk7XFxuXFxuLmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnRzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgZGIgZnJvbSAnLi9kYic7XG5pbXBvcnQgJy4vc3R5bGVzL21haW4uY3NzJztcbmRlZmluZUN1c3RvbUVsZW1lbnRzKCk7XG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnZGFyaycpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnbGlnaHQnKTtcbiAgICB9XG59O1xuY29uc3QgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpO1xuY29uc3Qgdmlld2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FyZC12aWV3ZXInKTtcbnZpZXdlci5jYXJkcyA9IGRiLmNhcmRzO1xuY29uc3QgcGFnZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BhZ2UtaGVhZGVyJyk7XG5hcHAuYXBwZW5kKHBhZ2VIZWFkZXIsIHZpZXdlcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=