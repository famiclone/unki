const style = document.createElement('style');
style.textContent = `
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

class PageHeader extends HTMLElement {
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
