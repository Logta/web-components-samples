import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './modal';

const meta: Meta = {
  title: 'Components/Modal',
  component: 'lit-tailwind-modal',
  argTypes: {
    open: { control: 'boolean' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <lit-tailwind-modal
      .open=${args.open}
      @modal-close=${() => console.log('Modal closed')}
    ></lit-tailwind-modal>
  `,
  args: {
    open: false,
  },
};

export const WithCustomContent: Story = {
  render: () => html`
    <lit-tailwind-modal>
      <div slot="content">
        <h4 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem; color: #1f2937;">
          Custom Modal Content
        </h4>
        <p style="color: #4b5563; margin-bottom: 1rem;">
          You can customize the modal content using the "content" slot.
        </p>
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 1.5rem; border-radius: 0.5rem; color: white;">
          <p style="font-weight: 600; margin-bottom: 0.5rem;">
            💡 Pro Tip
          </p>
          <p style="opacity: 0.9;">
            This modal uses the native HTML &lt;dialog&gt; element for better accessibility and performance.
          </p>
        </div>
      </div>
    </lit-tailwind-modal>
  `,
};

export const WithEventHandler: Story = {
  render: () => {
    const handleClose = () => {
      const message = document.getElementById('modal-message');
      if (message) {
        message.textContent = `Modal closed at ${new Date().toLocaleTimeString()}`;
      }
    };

    return html`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <lit-tailwind-modal @modal-close=${handleClose}></lit-tailwind-modal>
        <div
          id="modal-message"
          style="padding: 1rem; background: #f0f0f0; border-radius: 0.5rem; font-weight: bold;"
        >
          Open and close the modal to see the event
        </div>
      </div>
    `;
  },
};

export const FormModal: Story = {
  render: () => html`
    <lit-tailwind-modal>
      <div slot="content">
        <h4 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 1.5rem; color: #1f2937;">
          Contact Form
        </h4>
        <form style="display: flex; flex-direction: column; gap: 1rem;">
          <div>
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              style="
                width: 100%;
                padding: 0.5rem 0.75rem;
                border: 2px solid #d1d5db;
                border-radius: 0.5rem;
                font-size: 1rem;
              "
            />
          </div>
          <div>
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              style="
                width: 100%;
                padding: 0.5rem 0.75rem;
                border: 2px solid #d1d5db;
                border-radius: 0.5rem;
                font-size: 1rem;
              "
            />
          </div>
          <div>
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Enter your message"
              style="
                width: 100%;
                padding: 0.5rem 0.75rem;
                border: 2px solid #d1d5db;
                border-radius: 0.5rem;
                font-size: 1rem;
                resize: vertical;
              "
            ></textarea>
          </div>
        </form>
      </div>
    </lit-tailwind-modal>
  `,
};
