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
class CardViewer extends Component {
  _cards: CardData[];
  _currentIndex: number;

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

    const container = template.cloneNode(true) as Element;

    shadow.append(style, container);
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

    container.addEventListener('mousedown', (e: any) => {
      position.startX = e.offsetX;
      position.isMoving = true;
    });

    container.addEventListener('mousedown', (e: any) => {
      position.endX = e.offsetX;
      container.classList[position.isMoving ? 'add' : 'remove']('move');
    });

    container.addEventListener('mouseup', (e: any) => {
      position.isMoving = false;

      const diff = position.endX - position.startX;

      if (diff > 100) {
        container.classList.add('moveRight');
      }

      position.endX = 0;
      container.classList.remove('move');
    });
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
    this._currentIndex = idx;
    this.changeCard(this._cards[this._currentIndex]);
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
