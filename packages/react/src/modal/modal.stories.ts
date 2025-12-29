import type { Meta, StoryObj } from '@storybook/web-components';
import './modal.tsx';

interface ReactModalProps {
  isOpen: boolean;
  title: string;
  description: string;
}

const meta: Meta<ReactModalProps> = {
  title: 'Components/React Modal',
  component: 'react-modal',
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
type Story = StoryObj<ReactModalProps>;

export const Default: Story = {
  args: {
    isOpen: false,
    title: 'React Modal',
    description: 'This is a modal dialog built with Headless UI for React.',
  },
  render: (args: ReactModalProps) => {
    const element = document.createElement('react-modal') as HTMLElement & ReactModalProps;
    element.setAttribute('isOpen', args.isOpen.toString());
    element.setAttribute('title', args.title);
    element.setAttribute('description', args.description);
    return element;
  },
};

export const CustomTitle: Story = {
  args: {
    isOpen: false,
    title: "Custom Modal Title",
    description: 'This is a modal dialog built with Headless UI for React.',
  },
  render: (args: ReactModalProps) => {
    const element = document.createElement('react-modal') as HTMLElement & ReactModalProps;
    element.setAttribute('isOpen', args.isOpen.toString());
    element.setAttribute('title', args.title);
    element.setAttribute('description', args.description);
    return element;
  },
};

export const CustomDescription: Story = {
  args: {
    isOpen: false,
    title: 'React Modal',
    description: 'This is a custom description for the modal dialog.',
  },
  render: (args: ReactModalProps) => {
    const element = document.createElement('react-modal') as HTMLElement & ReactModalProps;
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
  render: (args: ReactModalProps) => {
    const element = document.createElement('react-modal') as HTMLElement & ReactModalProps;
    element.setAttribute('isOpen', args.isOpen.toString());
    element.setAttribute('title', args.title);

    // カスタムコンテンツを innerHTML で注入（React は children prop として処理）
    element.innerHTML = `
      <div style="padding: 1rem; border: 2px dashed #06b6d4; background: #ecfeff; border-radius: 0.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #0e7490;">
          🎨 Custom Content via <code style="background: #fff; padding: 0.125rem 0.375rem; border-radius: 0.25rem; border: 1px solid #67e8f9;">children</code> prop
        </h4>
        <p style="margin: 0 0 0.75rem 0; color: #155e75; font-size: 0.875rem;">
          ✅ This content is passed as <strong>children</strong> to React component!
        </p>
        <div style="background: #fff; padding: 1rem; border-radius: 0.5rem; border: 1px solid #67e8f9;">
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
