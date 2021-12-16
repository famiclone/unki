import { defineCustomElements } from './utils';
import db from './db';
import './style.css';

defineCustomElements();

type IdType = number;

type CardData = {
  id: IdType;
  deckId: IdType;
  content: string[];
  level: number;
};

class Card {
  el: HTMLDivElement;
  _side: 0 | 1;
  content: CardData['content'];
  _data: CardData;

  constructor(cardData: CardData) {
    this._data = cardData;
    this.el = document.createElement('div');
    this.el.classList.add('card');
    this.el.classList.add('cardTerm');
    this._side = 0; // 0 | 1
    this.content = this.data.content;

    this.el.addEventListener('click', (e) => {
      this.changeSide();
    });

    this.el.innerHTML = `<div class="cardWrapper"><div class="content">${
      this.content[this.side]
    }</div></div>`;

    this.side = 1;
  }

  get side(): 0 | 1 {
    return this._side;
  }

  set side(number: 0 | 1) {
    this.changeSide(number);
  }

  get data(): CardData {
    return this._data;
  }

  set data(cardData: CardData) {
    this._data = cardData;
    this.render();
  }

  changeSide(number?: 0 | 1) {
    if (number !== undefined) {
      this._side = number;
    } else {
      this._side = this.side === 0 ? 1 : 0;
    }

    if (this.side === 1) {
      this.el.classList.add('cardDefinition');
      this.el.classList.remove('cardTerm');
    } else {
      this.el.classList.remove('cardDefinition');
      this.el.classList.add('cardTerm');
    }
    this.render();
  }

  get element() {
    return this.el;
  }

  render() {
    this.el.innerHTML = `<div class="cardWrapper"><div class="content">${
      this.data.content[this.side]
    }</div></div>`;
  }
}

class CardViewer {
  card: Card;
  data: CardData[];
  currentIndex: number;
  controls: HTMLDivElement;
  buttonPrev: HTMLButtonElement;
  buttonNext: HTMLButtonElement;
  total: HTMLDivElement;
  el: HTMLDivElement;

  constructor(data: CardData[]) {
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

  changeCard(number: number) {
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

const viewer = new CardViewer(db.cards);

document.querySelector('#app')!.append(viewer.element);

const testCard = document.createElement('card-component');
testCard.setAttribute('term', 'Term');
testCard.setAttribute('def', 'Definition');

document.body.append(testCard);
