import { PressbooksSelect } from './src/PressbooksSelect.js';

if (!window.customElements.get('pressbooks-select')) {
  window.customElements.define('pressbooks-select', PressbooksSelect);
}
