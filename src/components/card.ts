import { Component } from '../component';
import { CardData, Side } from '../types';

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

class Card extends Component {
  _side: Side;
  _data: CardData;
  cardHeight: number;

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
