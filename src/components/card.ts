import { CardData, Side } from '../types';

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
`;

class Card extends HTMLElement {
  _side: Side;
  _data: CardData;

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
      container.addEventListener('click', (e) => {
        this.changeSide();
      });
    }

    this.changeContent(this.data.content[this.side], `${this.data.deck.name}`);
  }

  get side() {
    return this._side;
  }

  set side(side: Side) {
    this._side = side;
  }

  get data() {
    return this._data;
  }

  set data(data: CardData) {
    this._data = data;
    this.changeSide(0);
    this.changeContent(this.data.content[this.side], this.info);
  }

  get info() {
    return `${this.data.deck.name} / ${this.data.id
      .toString()
      .padStart(3, '0')}`;
  }

  changeContent(text: string, footerData: string = this.info) {
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

  changeSide(number?: Side) {
    const element = this.shadowRoot?.querySelector('.container');
    if (number !== undefined) {
      this.side = number;
    } else {
      this.side = this.side === 0 ? 1 : 0;
    }

    if (element) {
      if (this.side === 1) {
        element.classList.remove(`side-0`);
        element.classList.add(`side-1`);
        element.querySelector('#side-0')?.classList.add('hide');
        element.querySelector('#side-1')?.classList.remove('hide');
      } else {
        element.classList.remove(`side-1`);
        element.classList.add(`side-0`);
        element.querySelector('#side-1')?.classList.add('hide');
        element.querySelector('#side-0')?.classList.remove('hide');
      }
    }

    this.changeContent(this.data.content[this.side], this.info);
  }
}

export default Card;
