type Side = 0 | 1;

class Card extends HTMLElement {
  _side: Side;
  _cardContent: string[];
  container: HTMLDivElement;

  constructor() {
    super();

    this._side = 0;
    this._cardContent = [
      this.getAttribute('term') || 't',
      this.getAttribute('def') || 'd',
    ];

    console.log(this.getAttribute('term'));

    const shadow = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = `
      .card {
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
      
      .card--side-0 {
        background-color: var(--primary-color);
      }
      
      .card--side-0 .content {
        animation: flipOpacity 1s;
        color: white;
        font-size: 2rem;
        /* transition: 0.3s; */
      }
      
      .card--side-1 {
        font-weight: normal;
        transform: rotateY(180deg);
      }
      
      .card--side-1 .content {
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

    this.container = document.createElement('div');
    const wrapper = document.createElement('div');
    const content = document.createElement('div');

    this.container.classList.add('card');
    this.container.classList.add(`card--side-${this.side}`);
    wrapper.className = 'cardWrapper';
    content.className = 'content';
    content.textContent = this._cardContent[this._side];

    wrapper.append(content);
    this.container.append(wrapper);

    this.addEventListener('click', (e) => {
      this.changeSide();
    });

    shadow.append(style, this.container);
  }

  get side() {
    return this._side;
  }

  set side(side: Side) {
    this._side = side;
  }

  changeSide(number?: 0 | 1) {
    if (number !== undefined) {
      this._side = number;
    } else {
      this._side = this.side === 0 ? 1 : 0;
    }

    if (this.side === 1) {
      this.container.classList.add('card--side-1');
      this.container.classList.remove('card--side-0');
    } else {
      this.container.classList.add('card--side-0');
      this.container.classList.remove('card--side-1');
    }
  }
}

export default Card;
