import type { Meta, StoryObj } from '@storybook/web-components';
import './lit-counter.ts';
import type { LitCounter } from './lit-counter.ts';

interface LitCounterProps {
  count: number;
}

const meta: Meta<LitCounterProps> = {
  title: 'Components/Lit Counter',
  component: 'lit-counter',
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: 'number',
      description: 'Current count value',
    },
  },
};

export default meta;
type Story = StoryObj<LitCounterProps>;

export const Default: Story = {
  args: {
    count: 0,
  },
  render: (args: LitCounterProps) => {
    const element = document.createElement('lit-counter') as LitCounter;
    element.count = args.count;
    return element;
  },
};

export const WithInitialValue: Story = {
  args: {
    count: 10,
  },
  render: (args: LitCounterProps) => {
    const element = document.createElement('lit-counter') as LitCounter;
    element.count = args.count;
    return element;
  },
};

export const NegativeValue: Story = {
  args: {
    count: -5,
  },
  render: (args: LitCounterProps) => {
    const element = document.createElement('lit-counter') as LitCounter;
    element.count = args.count;
    return element;
  },
};
