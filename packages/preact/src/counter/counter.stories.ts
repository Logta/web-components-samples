import type { Meta, StoryObj } from '@storybook/web-components';
import './counter.tsx';

interface PreactCounterProps {
  count: number;
}

const meta: Meta<PreactCounterProps> = {
  title: 'Components/Preact Counter',
  component: 'preact-counter',
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: 'number',
      description: 'Initial count value',
    },
  },
};

export default meta;
type Story = StoryObj<PreactCounterProps>;

export const Default: Story = {
  args: {
    count: 0,
  },
  render: (args: PreactCounterProps) => {
    const element = document.createElement('preact-counter') as HTMLElement & PreactCounterProps;
    element.setAttribute('count', args.count.toString());
    return element;
  },
};

export const WithInitialValue: Story = {
  args: {
    count: 10,
  },
  render: (args: PreactCounterProps) => {
    const element = document.createElement('preact-counter') as HTMLElement & PreactCounterProps;
    element.setAttribute('count', args.count.toString());
    return element;
  },
};

export const NegativeValue: Story = {
  args: {
    count: -5,
  },
  render: (args: PreactCounterProps) => {
    const element = document.createElement('preact-counter') as HTMLElement & PreactCounterProps;
    element.setAttribute('count', args.count.toString());
    return element;
  },
};

export const LargeValue: Story = {
  args: {
    count: 100,
  },
  render: (args: PreactCounterProps) => {
    const element = document.createElement('preact-counter') as HTMLElement & PreactCounterProps;
    element.setAttribute('count', args.count.toString());
    return element;
  },
};

export const Zero: Story = {
  args: {
    count: 0,
  },
  render: (args: PreactCounterProps) => {
    const element = document.createElement('preact-counter') as HTMLElement & PreactCounterProps;
    element.setAttribute('count', args.count.toString());
    return element;
  },
};
