import { Component } from '../component';

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
      'class',
    ],
  },

  html: {
    keywords: [],
  },
};

class CodeBlock extends Component {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const container = document.createElement('div');

    const style = document.createElement('style');
    style.textContent = `
      .code-block {
        margin: 0.5rem 0;
      }

      pre {
        font-family: 'Source Code Pro', monospace !important;
        font-size: 14px;
      }

      .code-block--wrapper {
        background-color: var(--monokai-bg);
        color: var(--monokai-fg);
        border-radius: 0.5rem;
        font-size: 16px;
        margin: 0;
      }

      .line {
        padding-left: 0.5rem;
        margin: 0;
        display: flex;
        align-items: center;
      }

      .lineEven {
        background-color: rgba(255, 255, 255, 0.05);
      }

      .lineNumber {
        color: var(--gray-color);
        font-size: 12px;
        margin-right: 0.5rem;
      }

      .js-keyword {
        color: var(--js-keyword-color);
      }

      .js-number {
        color: var(--number-color);
      }
      
      .js-bracket {
        color: var(--gray-color);
      }
    `;

    const lang: Language = (this.getAttribute('lang') as Language) || 'js';

    const content = this.textContent
      ?.split('\n')
      .filter((c) => c !== '')
      .map((line, i) => {
        return `<pre class="line ${i % 2 === 0 ? 'lineEven' : ''}">
            <span class="lineNumber">${++i}</span> 
            ${line
              // keywords
              ?.replace(
                /class |const |let |super/gi,
                '<span class="js-keyword">$&</span>',
              )
              // numbers
              ?.replace(/\d/gi, '<span class="js-number">$&</span>')}
          </pre>`;
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
