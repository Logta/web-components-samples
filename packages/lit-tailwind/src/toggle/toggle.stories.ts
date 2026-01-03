import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './toggle';

const meta: Meta = {
  title: 'Components/Toggle',
  component: 'lit-tailwind-toggle',
  argTypes: {
    disabled: { control: 'boolean' },
    pressed: { control: 'boolean' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <lit-tailwind-toggle
      .disabled=${args.disabled}
      .pressed=${args.pressed}
      @pressed-change=${(e: CustomEvent) => {
        console.log('Pressed changed:', e.detail);
      }}
    >
      Toggle Me
    </lit-tailwind-toggle>
  `,
  args: {
    disabled: false,
    pressed: false,
  },
};

export const Pressed: Story = {
  render: () => html`
    <lit-tailwind-toggle pressed>
      Already Pressed
    </lit-tailwind-toggle>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <lit-tailwind-toggle disabled>
      Disabled Toggle
    </lit-tailwind-toggle>
  `,
};

export const DisabledPressed: Story = {
  render: () => html`
    <lit-tailwind-toggle disabled pressed>
      Disabled & Pressed
    </lit-tailwind-toggle>
  `,
};

export const MultipleToggles: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <lit-tailwind-toggle>Option 1</lit-tailwind-toggle>
      <lit-tailwind-toggle>Option 2</lit-tailwind-toggle>
      <lit-tailwind-toggle pressed>Option 3 (Pressed)</lit-tailwind-toggle>
      <lit-tailwind-toggle disabled>Option 4 (Disabled)</lit-tailwind-toggle>
    </div>
  `,
};

export const WithEventListener: Story = {
  render: () => {
    const handleChange = (e: CustomEvent) => {
      const status = document.getElementById('status');
      if (status) {
        status.textContent = `Toggle is now: ${e.detail.pressed ? 'PRESSED' : 'UNPRESSED'}`;
      }
    };

    return html`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <lit-tailwind-toggle @pressed-change=${handleChange}>
          Click to Toggle
        </lit-tailwind-toggle>
        <div
          id="status"
          style="padding: 1rem; background: #f0f0f0; border-radius: 0.5rem; font-weight: bold;"
        >
          Toggle is now: UNPRESSED
        </div>
      </div>
    `;
  },
};
