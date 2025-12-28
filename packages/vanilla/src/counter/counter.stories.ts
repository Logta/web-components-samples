import type { Meta, StoryObj } from '@storybook/web-components';
import './counter.ts';

interface MyCounterProps {
  count: number;
}

const meta: Meta<MyCounterProps> = {
  title: 'Components/Vanilla Counter',
  component: 'my-counter',
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: 'number',
      description: 'Current count value',
    },
  },
};

export default meta;
type Story = StoryObj<MyCounterProps>;

export const Default: Story = {
  args: {
    count: 0,
  },
  render: (args: MyCounterProps) => {
    const element = document.createElement('my-counter') as HTMLElement & { count: number };
    element.count = args.count;
    return element;
  },
};

export const WithInitialValue: Story = {
  args: {
    count: 10,
  },
  render: (args: MyCounterProps) => {
    const element = document.createElement('my-counter') as HTMLElement & { count: number };
    element.count = args.count;
    return element;
  },
};

export const NegativeValue: Story = {
  args: {
    count: -5,
  },
  render: (args: MyCounterProps) => {
    const element = document.createElement('my-counter') as HTMLElement & { count: number };
    element.count = args.count;
    return element;
  },
};
