import type { Meta, StoryObj } from '@storybook/web-components';
import './counter.ts';

interface SvelteCounterProps {
  count: number;
}

const meta: Meta<SvelteCounterProps> = {
  title: 'Components/Svelte Counter',
  component: 'svelte-counter',
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: 'number',
      description: 'Initial count value',
    },
  },
};

export default meta;
type Story = StoryObj<SvelteCounterProps>;

export const Default: Story = {
  args: {
    count: 0,
  },
  render: (args: SvelteCounterProps) => {
    const element = document.createElement('svelte-counter') as HTMLElement & SvelteCounterProps;
    element.setAttribute('count', args.count.toString());
    return element;
  },
};

export const WithInitialValue: Story = {
  args: {
    count: 10,
  },
  render: (args: SvelteCounterProps) => {
    const element = document.createElement('svelte-counter') as HTMLElement & SvelteCounterProps;
    element.setAttribute('count', args.count.toString());
    return element;
  },
};

export const NegativeValue: Story = {
  args: {
    count: -5,
  },
  render: (args: SvelteCounterProps) => {
    const element = document.createElement('svelte-counter') as HTMLElement & SvelteCounterProps;
    element.setAttribute('count', args.count.toString());
    return element;
  },
};

export const LargeValue: Story = {
  args: {
    count: 100,
  },
  render: (args: SvelteCounterProps) => {
    const element = document.createElement('svelte-counter') as HTMLElement & SvelteCounterProps;
    element.setAttribute('count', args.count.toString());
    return element;
  },
};

export const Zero: Story = {
  args: {
    count: 0,
  },
  render: (args: SvelteCounterProps) => {
    const element = document.createElement('svelte-counter') as HTMLElement & SvelteCounterProps;
    element.setAttribute('count', args.count.toString());
    return element;
  },
};
