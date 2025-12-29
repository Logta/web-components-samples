import type { Meta, StoryObj } from '@storybook/web-components';
import './modal.ts';

interface VanillaModalProps {}

const meta: Meta<VanillaModalProps> = {
  title: 'Components/Vanilla Modal',
  component: 'vanilla-modal',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VanillaModalProps>;

export const Default: Story = {
  render: () => {
    const element = document.createElement('vanilla-modal');
    return element;
  },
};

export const WithCustomContent: Story = {
  render: () => {
    const element = document.createElement('vanilla-modal');

    // カスタムコンテンツを slot="content" で注入
    element.innerHTML = `
      <div slot="content" style="padding: 1rem; border: 2px dashed #3b82f6; background: #eff6ff; border-radius: 0.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #1d4ed8;">
          🎨 Custom Content via <code style="background: #fff; padding: 0.125rem 0.375rem; border-radius: 0.25rem; border: 1px solid #93c5fd;">slot="content"</code>
        </h4>
        <p style="margin: 0 0 0.75rem 0; color: #1e40af; font-size: 0.875rem;">
          ✅ This content is <strong>slotted</strong> into the modal body!
        </p>
        <div style="background: #fff; padding: 1rem; border-radius: 0.5rem; border: 1px solid #93c5fd;">
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
