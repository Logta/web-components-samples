import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './dropdown';
import type { DropdownOption } from './dropdown';

const meta: Meta = {
  title: 'Components/Dropdown',
  component: 'lit-tailwind-dropdown',
  argTypes: {
    selected: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

const fruitOptions: DropdownOption[] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Durian', value: 'durian' },
  { label: 'Elderberry', value: 'elderberry' },
];

const colorOptions: DropdownOption[] = [
  { label: 'Red', value: 'red' },
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue' },
  { label: 'Yellow', value: 'yellow' },
];

export const Default: Story = {
  render: (args) => html`
    <lit-tailwind-dropdown
      .options=${fruitOptions}
      .selected=${args.selected}
      .placeholder=${args.placeholder}
      .disabled=${args.disabled}
      @change=${(e: CustomEvent) => console.log('Selection changed:', e.detail)}
    ></lit-tailwind-dropdown>
  `,
  args: {
    selected: '',
    placeholder: 'Select a fruit',
    disabled: false,
  },
};

export const WithDefaultSelection: Story = {
  render: () => html`
    <lit-tailwind-dropdown
      .options=${fruitOptions}
      .selected=${'banana'}
      placeholder="Select a fruit"
    ></lit-tailwind-dropdown>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <lit-tailwind-dropdown
      .options=${fruitOptions}
      .selected=${'cherry'}
      placeholder="Select a fruit"
      disabled
    ></lit-tailwind-dropdown>
  `,
};

export const ColorPicker: Story = {
  render: () => html`
    <lit-tailwind-dropdown
      .options=${colorOptions}
      placeholder="Choose a color"
    ></lit-tailwind-dropdown>
  `,
};

export const WithEventHandler: Story = {
  render: () => {
    const handleChange = (e: CustomEvent) => {
      const message = document.getElementById('dropdown-message');
      if (message) {
        message.textContent = `Selected: ${e.detail.option.label} (${e.detail.value})`;
      }
    };

    return html`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <lit-tailwind-dropdown
          .options=${fruitOptions}
          placeholder="Select a fruit"
          @change=${handleChange}
        ></lit-tailwind-dropdown>
        <div
          id="dropdown-message"
          style="padding: 1rem; background: #f0f0f0; border-radius: 0.5rem; font-weight: bold;"
        >
          Select an option to see the value
        </div>
      </div>
    `;
  },
};

export const MultipleDropdowns: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <div style="flex: 1; min-width: 200px;">
        <label style="display: block; margin-bottom: 0.5rem; font-weight: bold;">
          Select Fruit:
        </label>
        <lit-tailwind-dropdown
          .options=${fruitOptions}
          placeholder="Choose a fruit"
        ></lit-tailwind-dropdown>
      </div>
      <div style="flex: 1; min-width: 200px;">
        <label style="display: block; margin-bottom: 0.5rem; font-weight: bold;">
          Select Color:
        </label>
        <lit-tailwind-dropdown
          .options=${colorOptions}
          placeholder="Choose a color"
        ></lit-tailwind-dropdown>
      </div>
    </div>
  `,
};
