import { Component } from '../component';
import db from '../db';
import { CardData, DeckType } from '../types';
import Card from './card';

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
class CardViewer extends Component {
  _cards: CardData[];
  _currentIndex: number;
  actions: Element | null;
  controls: Element | null;
  container: Element;
  constructor() {
    super();
    this._cards = [];
    this._currentIndex = 0;

    this.container = template.cloneNode(true) as Element;
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
    const buttonPrev = this.shadowRoot?.querySelector('#buttonPrev')!;
    const buttonNext = this.shadowRoot?.querySelector('#buttonNext')!;

    this.changeCard();

    buttonPrev.addEventListener('click', () => {
      this.currentIndex -= 1;
      console.log(this.currentIndex);
    });

    buttonNext.addEventListener('click', () => {
      this.currentIndex += 1;
    });

    this.container.addEventListener('mousedown', (e: any) => {
      position.startX = e.offsetX;
      position.isMoving = true;
    });

    this.container.addEventListener('mousedown', (e: any) => {
      position.endX = e.offsetX;
      this.container.classList[position.isMoving ? 'add' : 'remove']('move');
    });

    // @ts-ignore
    this.container.querySelector('#currentNumber')!.textContent =
      this._currentIndex + 1;

    // @ts-ignore
    this.container.querySelector('#totalNumber')!.textContent =
      this._cards.length;

    this.container.addEventListener('mouseup', (e: any) => {
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
    } else if (this.shadowRoot?.querySelector('.side-1')) {
      this.actions?.classList.remove('hide');
      this.controls?.classList.add('hide');
    }
  }

  get cards(): CardData[] {
    return this._cards;
  }
  set cards(data: CardData[]) {
    this._cards = data;
  }

  get currentIndex(): number {
    return this._currentIndex;
  }

  set currentIndex(idx: number) {
    if (idx < this._cards.length && idx >= 0) {
      this._currentIndex = idx;
      this.changeCard(this._cards[this._currentIndex]);
      // @ts-ignore
      this.container.querySelector('#currentNumber')!.textContent =
        this._currentIndex + 1;
    }
  }

  changeCard(data: CardData = this._cards[this.currentIndex]) {
    const card = this.shadowRoot?.querySelector('card-component') as Card;

    if (card) {
      console.log(this._cards[this.currentIndex]);
      card.data = this._cards[this.currentIndex];
      card.id = this.currentIndex.toString();
    }
  }
}

export default CardViewer;
