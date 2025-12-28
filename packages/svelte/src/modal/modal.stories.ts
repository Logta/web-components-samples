import type { Meta, StoryObj } from '@storybook/web-components';
import './Modal.svelte';

interface SvelteModalProps {
  title: string;
  description: string;
}

const meta: Meta<SvelteModalProps> = {
  title: 'Components/Svelte Modal',
  component: 'svelte-modal',
  tags: ['autodocs'],
  argTypes: {
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
type Story = StoryObj<SvelteModalProps>;

export const Default: Story = {
  args: {
    title: 'Svelte Modal',
    description: 'This is a modal dialog built with Svelte and Melt UI.',
  },
  render: (args: SvelteModalProps) => {
    const element = document.createElement('svelte-modal') as HTMLElement & SvelteModalProps;
    element.setAttribute('title', args.title);
    element.setAttribute('description', args.description);
    return element;
  },
};

export const CustomTitle: Story = {
  args: {
    title: 'Custom Svelte Modal',
    description: 'This is a modal dialog built with Svelte and Melt UI.',
  },
  render: (args: SvelteModalProps) => {
    const element = document.createElement('svelte-modal') as HTMLElement & SvelteModalProps;
    element.setAttribute('title', args.title);
    element.setAttribute('description', args.description);
    return element;
  },
};

export const CustomDescription: Story = {
  args: {
    title: 'Svelte Modal',
    description: 'This is a custom description showcasing Melt UI integration with Svelte 5.',
  },
  render: (args: SvelteModalProps) => {
    const element = document.createElement('svelte-modal') as HTMLElement & SvelteModalProps;
    element.setAttribute('title', args.title);
    element.setAttribute('description', args.description);
    return element;
  },
};
