import type { Meta, StoryObj } from '@storybook/web-components';
import './modal.ts';
import type { LitModal } from './modal.ts';

interface LitModalProps {
  open: boolean;
}

const meta: Meta<LitModalProps> = {
  title: 'Components/Lit Modal',
  component: 'lit-modal',
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the modal is initially open',
    },
  },
};

export default meta;
type Story = StoryObj<LitModalProps>;

export const Default: Story = {
  args: {
    open: false,
  },
  render: (args: LitModalProps) => {
    const element = document.createElement('lit-modal') as LitModal;
    element.open = args.open;
    return element;
  },
};

export const InitiallyOpen: Story = {
  args: {
    open: true,
  },
  render: (args: LitModalProps) => {
    const element = document.createElement('lit-modal') as LitModal;
    element.open = args.open;
    return element;
  },
};

export const WithCustomContent: Story = {
  args: {
    open: false,
  },
  render: (args: LitModalProps) => {
    const element = document.createElement('lit-modal') as LitModal;
    element.open = args.open;

    // カスタムコンテンツを slot="content" で注入
    element.innerHTML = `
      <div slot="content" style="padding: 1rem; border: 2px dashed #ef4444; background: #fef2f2; border-radius: 0.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #dc2626;">
          🎨 Custom Content via <code style="background: #fff; padding: 0.125rem 0.375rem; border-radius: 0.25rem; border: 1px solid #fca5a5;">slot="content"</code>
        </h4>
        <p style="margin: 0 0 0.75rem 0; color: #991b1b; font-size: 0.875rem;">
          ✅ This content is <strong>slotted</strong> into the modal body!
        </p>
        <div style="background: #fff; padding: 1rem; border-radius: 0.5rem; border: 1px solid #fca5a5;">
          <p style="margin: 0 0 0.5rem 0; color: #374151; font-weight: 600;">
            You can pass any HTML content:
          </p>
          <ul style="margin: 0; padding-left: 1.5rem; color: #6b7280; font-size: 0.875rem; line-height: 1.6;">
            <li>Rich text formatting</li>
            <li>Images and media</li>
            <li>Forms and inputs</li>
            <li>Custom components</li>
          </ul>
        </div>
      </div>
    `;

    return element;
  },
};
