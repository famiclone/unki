export class Component extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {}

  onClick(func: () => void) {
    func();
  }
}
