import type { Meta, StoryObj } from '@storybook/web-components';
import './modal.tsx';

interface PreactModalProps {
  isOpen: boolean;
  title: string;
  description: string;
}

const meta: Meta<PreactModalProps> = {
  title: 'Components/Preact Modal',
  component: 'preact-modal',
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Whether the modal is initially open',
    },
    title: {
      control: 'text',
      description: 'Modal title',
    },
    description: {
      control: 'text',
      description: 'Modal description',
    },
  },
};

export default meta;
type Story = StoryObj<PreactModalProps>;

export const Default: Story = {
  args: {
    isOpen: false,
    title: 'Preact Modal',
    description: 'This is a modal dialog built with Preact and native HTML <dialog> element.',
  },
  render: (args: PreactModalProps) => {
    const element = document.createElement('preact-modal') as HTMLElement & PreactModalProps;
    element.setAttribute('isOpen', args.isOpen.toString());
    element.setAttribute('title', args.title);
    element.setAttribute('description', args.description);
    return element;
  },
};

export const CustomTitle: Story = {
  args: {
    isOpen: false,
    title: 'Custom Preact Modal',
    description: 'This is a modal dialog built with Preact and native HTML <dialog> element.',
  },
  render: (args: PreactModalProps) => {
    const element = document.createElement('preact-modal') as HTMLElement & PreactModalProps;
    element.setAttribute('isOpen', args.isOpen.toString());
    element.setAttribute('title', args.title);
    element.setAttribute('description', args.description);
    return element;
  },
};

export const CustomDescription: Story = {
  args: {
    isOpen: false,
    title: 'Preact Modal',
    description: 'This is a custom description demonstrating the lightweight Preact modal component.',
  },
  render: (args: PreactModalProps) => {
    const element = document.createElement('preact-modal') as HTMLElement & PreactModalProps;
    element.setAttribute('isOpen', args.isOpen.toString());
    element.setAttribute('title', args.title);
    element.setAttribute('description', args.description);
    return element;
  },
};

export const WithCustomContent: Story = {
  args: {
    isOpen: false,
    title: 'Custom Content Modal',
    description: '',
  },
  render: (args: PreactModalProps) => {
    const element = document.createElement('preact-modal') as HTMLElement & PreactModalProps;
    element.setAttribute('isOpen', args.isOpen.toString());
    element.setAttribute('title', args.title);

    // カスタムコンテンツを innerHTML で注入（Preact は children prop として処理）
    element.innerHTML = `
      <div style="padding: 1rem; border: 2px dashed #8b5cf6; background: #f5f3ff; border-radius: 0.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #6d28d9;">
          🎨 Custom Content via <code style="background: #fff; padding: 0.125rem 0.375rem; border-radius: 0.25rem; border: 1px solid #c4b5fd;">children</code> prop
        </h4>
        <p style="margin: 0 0 0.75rem 0; color: #5b21b6; font-size: 0.875rem;">
          ✅ This content is passed as <strong>children</strong> to Preact component!
        </p>
        <div style="background: #fff; padding: 1rem; border-radius: 0.5rem; border: 1px solid #c4b5fd;">
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
