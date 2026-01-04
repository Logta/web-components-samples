import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './button';

const meta: Meta = {
  title: 'Components/Button',
  component: 'lit-tailwind-button',
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger']
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    disabled: { control: 'boolean' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <lit-tailwind-button
      .label=${args.label}
      .variant=${args.variant}
      .size=${args.size}
      .disabled=${args.disabled}
      @button-click=${() => console.log('Button clicked!')}
    ></lit-tailwind-button>
  `,
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
};

export const Primary: Story = {
  render: () => html`
    <lit-tailwind-button label="Primary Button" variant="primary"></lit-tailwind-button>
  `,
};

export const Secondary: Story = {
  render: () => html`
    <lit-tailwind-button label="Secondary Button" variant="secondary"></lit-tailwind-button>
  `,
};

export const Success: Story = {
  render: () => html`
    <lit-tailwind-button label="Success Button" variant="success"></lit-tailwind-button>
  `,
};

export const Danger: Story = {
  render: () => html`
    <lit-tailwind-button label="Danger Button" variant="danger"></lit-tailwind-button>
  `,
};

export const Small: Story = {
  render: () => html`
    <lit-tailwind-button label="Small Button" size="small"></lit-tailwind-button>
  `,
};

export const Medium: Story = {
  render: () => html`
    <lit-tailwind-button label="Medium Button" size="medium"></lit-tailwind-button>
  `,
};

export const Large: Story = {
  render: () => html`
    <lit-tailwind-button label="Large Button" size="large"></lit-tailwind-button>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <lit-tailwind-button label="Disabled Button" disabled></lit-tailwind-button>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <lit-tailwind-button label="Primary" variant="primary"></lit-tailwind-button>
      <lit-tailwind-button label="Secondary" variant="secondary"></lit-tailwind-button>
      <lit-tailwind-button label="Success" variant="success"></lit-tailwind-button>
      <lit-tailwind-button label="Danger" variant="danger"></lit-tailwind-button>
    </div>
  `,
};

export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <lit-tailwind-button label="Small" size="small"></lit-tailwind-button>
      <lit-tailwind-button label="Medium" size="medium"></lit-tailwind-button>
      <lit-tailwind-button label="Large" size="large"></lit-tailwind-button>
    </div>
  `,
};

export const WithEventHandler: Story = {
  render: () => {
    const handleClick = () => {
      const message = document.getElementById('button-message');
      if (message) {
        message.textContent = `Button clicked at ${new Date().toLocaleTimeString()}`;
      }
    };

    return html`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <lit-tailwind-button
          label="Click Me!"
          @button-click=${handleClick}
        ></lit-tailwind-button>
        <div
          id="button-message"
          style="padding: 1rem; background: #f0f0f0; border-radius: 0.5rem; font-weight: bold;"
        >
          Click the button to see the message
        </div>
      </div>
    `;
  },
};
