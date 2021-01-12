/* eslint-disable max-classes-per-file */
import { LitElement, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

// Setup app with some placeholders
class BarElement extends ScopedElementsMixin(LitElement) {
  render() {
    return html`
      <p>This list is inside a scoped element</p>
      <ul>
        <li>1</li>
        <li>
          <div>
            2
            <div style="color: red;">2.5 <-- selecting this element</div>
          </div>
        </li>
        <li>3</li>
      </ul>
      <p>4</p>
    `;
  }
}

class FooElement extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'bar-element': BarElement,
    };
  }

  render() {
    return html`
      <h1>Hello, World!</h1>
      <h2>Hi, Planet!</h2>
      <bar-element></bar-element>
    `;
  }
}
customElements.define('foo-element', FooElement);
