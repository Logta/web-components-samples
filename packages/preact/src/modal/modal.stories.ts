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
