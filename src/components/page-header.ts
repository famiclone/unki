import { Component } from '../component';

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

class PageHeader extends Component {
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

        document.body.setAttribute(
          'data-theme',
          theme === 'light' ? 'dark' : 'light',
        );
      });
    }
  }
}

export default PageHeader;
