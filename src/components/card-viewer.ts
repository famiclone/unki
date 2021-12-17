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
`;
class CardViewer extends HTMLElement {
  _cards: CardData[];
  _currentIndex: number;

  constructor() {
    super();
    this._cards = [];
    this._currentIndex = 0;
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.append(style, template.cloneNode(true));
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
