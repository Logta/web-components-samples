import type { Meta, StoryObj } from '@storybook/web-components-vite';
import './react-counter.tsx';

interface ReactCounterProps {
  count: number;
}

const meta: Meta<ReactCounterProps> = {
  title: 'Components/React Counter',
  component: 'react-counter',
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: 'number',
      description: 'Initial count value',
    },
  },
};

export default meta;
type Story = StoryObj<ReactCounterProps>;

export const Default: Story = {
  args: {
    count: 0,
  },
  render: (args) => {
    const element = document.createElement('react-counter');
    element.setAttribute('count', args.count.toString());
    return element;
  },
};

export const WithInitialValue: Story = {
  args: {
    count: 10,
  },
  render: (args) => {
    const element = document.createElement('react-counter');
    element.setAttribute('count', args.count.toString());
    return element;
  },
};

export const NegativeValue: Story = {
  args: {
    count: -5,
  },
  render: (args) => {
    const element = document.createElement('react-counter');
    element.setAttribute('count', args.count.toString());
    return element;
  },
};
