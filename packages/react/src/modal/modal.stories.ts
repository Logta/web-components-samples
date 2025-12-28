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
