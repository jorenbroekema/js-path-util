import { jsPath } from '../src/js-path.js';

// Run the example. Wait a bit for custom elements to load and render, and then select an item, and log the JSPath of it
new Promise((resolve) => setTimeout(resolve, 100)).then(() => {
  const el = document
    .querySelector('foo-element')
    .shadowRoot.querySelector('[data-tag-name=bar-element]')
    .shadowRoot.querySelector('li > div > div');

  const resultEl = document.createElement('code');
  resultEl.innerHTML = `<pre>${jsPath(el).replace(/.shadowRoot/g, '\n.shadowRoot')}</pre>`;
  document.body.appendChild(resultEl);
});
