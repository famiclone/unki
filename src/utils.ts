import CodeBlock from './components/code-block';
import Card from './components/card';

export function defineCustomElements() {
  customElements.define('code-block', CodeBlock);
  customElements.define('card-component', Card);
}
