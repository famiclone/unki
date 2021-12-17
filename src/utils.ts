import CodeBlock from './components/code-block';
import Card from './components/card';
import CardViewer from './components/card-viewer';
import PageHeader from './components/page-header';

export function defineCustomElements() {
  customElements.define('code-block', CodeBlock);
  customElements.define('card-component', Card);
  customElements.define('card-viewer', CardViewer);
  customElements.define('page-header', PageHeader);
}
