import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../pressbooks-select.js';

export default {
  title: 'PressbooksSelect',
  component: 'pressbooks-select',
};

function Template({ slot, max, styles }) {
  return html`<style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; } ${styles}
    </style>
    <pressbooks-select max=${ifDefined(max)}>
      ${slot}
    </pressbooks-select> `;
}

export const Single = Template.bind({});
Single.args = {
  slot: html`<label for="wizard">Wizard</label>
    <p id="wizard-hint" slot="after">Type to choose a wizard.</p>
    <select
      id="wizard"
      name="wizard"
      aria-describedby="wizard-hint"
    >
      <option value="gandalf">Gandalf</option>
      <option value="radagast">Radagast</option>
      <option value="saruman">Saruman</option>
    </select>`,
};

export const SingleDisabled = Template.bind({});
SingleDisabled.args = {
  slot: html`<label for="wizard">Wizard</label>
    <p id="wizard-hint" slot="after">Type to choose a wizard.</p>
    <select
      id="wizard"
      name="wizard"
      aria-describedby="wizard-hint"
      disabled
    >
      <option value="gandalf">Gandalf</option>
      <option value="radagast">Radagast</option>
      <option value="saruman">Saruman</option>
    </select>`,
};

export const Multiple = Template.bind({});
Multiple.args = {
  max: 0,
  slot: html`<label for="dwarves">Dwarves</label>
    <select
      id="dwarves"
      name="dwarves[]"
      multiple
      aria-describedby="dwarves-hint"
    >
      <option value="thorin">Thorin</option>
      <option value="dwalin">Dwalin</option>
      <option value="balin">Balin</option>
      <option value="bifur">Bifur</option>
      <option value="bofur">Bofur</option>
      <option value="bombur">Bombur</option>
      <option value="fili">Fili</option>
      <option value="kili">Kili</option>
      <option value="oin">Oin</option>
      <option value="gloin">Gloin</option>
      <option value="nori">Nori</option>
      <option value="dori">Dori</option>
      <option value="ori">Ori</option>
    </select>`,
};

export const MaxWidth = Template.bind({});

MaxWidth.args = {
  styles: `:root {
    --pb-combo-container-max-width: 40rem;
  }`,
  slot: html`<label for="dwarves">Dwarves</label>
    <select
      id="dwarves"
      name="dwarves[]"
      multiple
      aria-describedby="dwarves-hint"
    >
      <option value="thorin">Thorin</option>
      <option value="dwalin">Dwalin</option>
      <option value="balin">Balin</option>
      <option value="bifur">Bifur</option>
      <option value="bofur">Bofur</option>
      <option value="bombur">Bombur</option>
      <option value="fili">Fili</option>
      <option value="kili">Kili</option>
      <option value="oin">Oin</option>
      <option value="gloin">Gloin</option>
      <option value="nori">Nori</option>
      <option value="dori">Dori</option>
      <option value="ori">Ori</option>
    </select>`,
};

export const WithSelection = Template.bind({});
WithSelection.args = {
  slot: html`<label for="dwarves">Dwarves</label>
    <select
      id="dwarves"
      name="dwarves[]"
      multiple
      aria-describedby="dwarves-hint"
    >
      <option value="thorin">Thorin</option>
      <option value="dwalin">Dwalin</option>
      <option value="balin">Balin</option>
      <option value="bifur" selected>Bifur</option>
      <option value="bofur" selected>Bofur</option>
      <option value="bombur" selected>Bombur</option>
      <option value="fili">Fili</option>
      <option value="kili">Kili</option>
      <option value="oin">Oin</option>
      <option value="gloin">Gloin</option>
      <option value="nori">Nori</option>
      <option value="dori">Dori</option>
      <option value="ori">Ori</option>
    </select>`,
};

export const HintedBefore = Template.bind({});
HintedBefore.args = {
  slot: html`<label for="dwarves">Dwarves</label>
    <p id="dwarves-hint">Type to choose some dwarves.</p>
    <select
      id="dwarves"
      name="dwarves[]"
      multiple
      aria-describedby="dwarves-hint"
    >
      <option value="thorin">Thorin</option>
      <option value="dwalin">Dwalin</option>
      <option value="balin">Balin</option>
      <option value="bifur">Bifur</option>
      <option value="bofur">Bofur</option>
      <option value="bombur">Bombur</option>
      <option value="fili">Fili</option>
      <option value="kili">Kili</option>
      <option value="oin">Oin</option>
      <option value="gloin">Gloin</option>
      <option value="nori">Nori</option>
      <option value="dori">Dori</option>
      <option value="ori">Ori</option>
    </select>`,
};

export const HintedAfter = Template.bind({});
HintedAfter.args = {
  slot: html`<label for="dwarves">Dwarves</label>
    <select
      id="dwarves"
      name="dwarves[]"
      multiple
      aria-describedby="dwarves-hint"
    >
      <option value="thorin">Thorin</option>
      <option value="dwalin">Dwalin</option>
      <option value="balin">Balin</option>
      <option value="bifur">Bifur</option>
      <option value="bofur">Bofur</option>
      <option value="bombur">Bombur</option>
      <option value="fili">Fili</option>
      <option value="kili">Kili</option>
      <option value="oin">Oin</option>
      <option value="gloin">Gloin</option>
      <option value="nori">Nori</option>
      <option value="dori">Dori</option>
      <option value="ori">Ori</option>
    </select>
    <p id="dwarves-hint" slot="after">Type to choose some dwarves.</p>`,
};

export const Grouped = Template.bind({});
Grouped.args = {
  slot: html`<label for="adventurers">Adventurers</label>
    <p id="adventurers-hint">Type to choose some adventurers.</p>
    <select
      id="adventurers"
      name="adventurers[]"
      multiple
      aria-describedby="adventurers-hint"
    >
      <option value="smeagol">Smeagol</option>
      <optgroup label="Dwarves">
        <option value="gimli">Gimli</option>
      </optgroup>
      <optgroup label="Elves">
        <option value="legolas">Legolas</option>
      </optgroup>
      <optgroup label="Hobbits">
        <option value="frodo">Frodo</option>
        <option value="merry">Merry</option>
        <option value="pippin">Pippin</option>
        <option value="samwise">Sam</option>
      </optgroup>
      <optgroup label="Humans">
        <option value="aragorn">Aragorn</option>
        <option value="boromir">Boromir</option>
      </optgroup>
      <optgroup label="Wizards">
        <option value="gandalf">Gandalf</option>
      </optgroup>
    </select>`,
};

export const Disabled = Template.bind({});
Disabled.args = {
  slot: html`<label for="dwarves">Dwarves</label>
    <select
      id="dwarves"
      name="dwarves[]"
      disabled
      multiple
      aria-describedby="dwarves-hint"
    >
      <option value="thorin">Thorin</option>
      <option value="dwalin">Dwalin</option>
      <option value="balin">Balin</option>
      <option value="bifur">Bifur</option>
      <option value="bofur">Bofur</option>
      <option value="bombur">Bombur</option>
      <option value="fili">Fili</option>
      <option value="kili">Kili</option>
      <option value="oin">Oin</option>
      <option value="gloin">Gloin</option>
      <option value="nori">Nori</option>
      <option value="dori">Dori</option>
      <option value="ori">Ori</option>
    </select>`,
};

export const MaxItems = Template.bind({});
MaxItems.args = {
  max: 3,
  slot: html`<label for="dwarves">Dwarves</label>
    <p id="dwarves-hint">Type to choose some dwarves (maximum 3).</p>
    <select
      id="dwarves"
      name="dwarves[]"
      multiple
      aria-describedby="dwarves-hint"
    >
      <option value="thorin">Thorin</option>
      <option value="dwalin">Dwalin</option>
      <option value="balin">Balin</option>
      <option value="bifur">Bifur</option>
      <option value="bofur">Bofur</option>
      <option value="bombur">Bombur</option>
      <option value="fili">Fili</option>
      <option value="kili">Kili</option>
      <option value="oin">Oin</option>
      <option value="gloin">Gloin</option>
      <option value="nori">Nori</option>
      <option value="dori">Dori</option>
      <option value="ori">Ori</option>
    </select>`,
};
