import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';

import '../pressbooks-select.js';

describe('PressbooksSelect', () => {
  it('renders with minimum requirements', async () => {
    const el = await fixture(
      html`<pressbooks-select>
        <label for="flavours">Flavours</label>
        <select name="flavours[]" id="flavours" multiple>
          <option value="chocolate">Chocolate</option>
          <option value="strawberry">Strawberry</option>
          <option value="vanilla">Vanilla</option>
        </select>
      </pressbooks-select>`,
    );

    expect(el.htmlId).to.equal('flavours');
    expect(el.label).to.equal('Flavours');
  });

  it('renders with a selection', async () => {
    const el = await fixture(
      html`<pressbooks-select>
        <label for="flavours">Flavours</label>
        <select name="flavours[]" id="flavours" multiple>
          <option value="chocolate" selected>Chocolate</option>
          <option value="strawberry">Strawberry</option>
          <option value="vanilla">Vanilla</option>
        </select>
      </pressbooks-select>`,
    );

    expect(el.selectedOptions).to.contain('chocolate');
  });

  it('renders with a hint', async () => {
    const el = await fixture(
      html`<pressbooks-select>
        <label for="flavours">Flavours</label>
        <p id="flavours-hint">Tell us your favourite flavours.</p>
        <select
          name="flavours[]"
          id="flavours"
          multiple
          aria-describedby="flavours-hint"
        >
          <option value="chocolate" selected>Chocolate</option>
          <option value="strawberry">Strawberry</option>
          <option value="vanilla">Vanilla</option>
        </select>
      </pressbooks-select>`,
    );

    expect(el.hint).to.equal('Tell us your favourite flavours.');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(
      html`<pressbooks-select>
        <label for="flavours">Flavours</label>
        <select name="flavours[]" id="flavours" multiple>
          <option value="chocolate">Chocolate</option>
          <option value="strawberry">Strawberry</option>
          <option value="vanilla">Vanilla</option>
        </select>
      </pressbooks-select>`,
    );

    await expect(el).shadowDom.to.be.accessible();
  });

  it('renders with groups', async () => {
    const el = await fixture(
      html`<pressbooks-select>
        <label for="flavours">Flavours</label>
        <select name="flavours[]" id="flavours" multiple>
          <optgroup label="Neapolitan">
            <option value="chocolate">Chocolate</option>
            <option value="strawberry">Strawberry</option>
            <option value="vanilla">Vanilla</option>
          </optgroup>
        </select>
      </pressbooks-select>`,
    );

    expect(el.groups).to.contain('Neapolitan');
  });
});
