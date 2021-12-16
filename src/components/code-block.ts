type Language = 'js' | 'html';

type Dict = {
  [key in Language]: {
    keywords: string[];
  };
};

const dict: Dict = {
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
    ],
  },

  html: {
    keywords: [],
  },
};

class CodeBlock extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const container = document.createElement('div');

    const style = document.createElement('style');
    style.textContent = `
      @import 'colors.css';

      .code-block {
        margin: 0.5rem 0;
      }

      pre {
        font-family: 'Source Code Pro', monospace !important;
        font-size: 14px;
      }

      .code-block--wrapper {
        background-color: var(--fg-color);
        color: var(--bg-color);
        border-radius: 0.5rem;
        font-size: 16px;
        margin: 0;
      }

      .line {
        padding-left: 0.5rem;
        margin: 0;
      }

      .line--even {
        background-color: rgba(255, 255, 255, 0.05);
      }

      .line-number {
        color: var(--gray-color);
        font-size: 12px;
      }

      .js-keyword {
        color: var(--js-keyword-color);
      }
    `;

    const lang: Language = (this.getAttribute('lang') as Language) || 'js';

    const content = this.textContent
      ?.split('\n')
      .filter((c) => c !== '')
      .map((line: string, i: number) => {
        return `<pre class="line ${
          i % 2 === 0 && 'line--even'
        }"><span class="line-number">${++i}</span>${line
          .split(' ')
          .map((word: string) => {
            const lang: Language =
              (this.getAttribute('lang') as Language) || 'js';
            if (dict[lang].keywords.includes(word)) {
              return `<span class="js-keyword">${word}</span>`;
            }
            return `<span>${word}</span>`;
          })
          .join(' ')}</pre>`;
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

export default CodeBlock;
