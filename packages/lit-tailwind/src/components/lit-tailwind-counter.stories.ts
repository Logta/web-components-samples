import type { Meta, StoryObj } from '@storybook/web-components';
import './lit-tailwind-counter.ts';
import type { LitTailwindCounter } from './lit-tailwind-counter.ts';

interface LitTailwindCounterProps {
  count: number;
}

const meta: Meta<LitTailwindCounterProps> = {
  title: 'Components/Lit Tailwind Counter',
  component: 'lit-tailwind-counter',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A modern counter component built with Lit and styled with Tailwind CSS v4. Features Shadow DOM encapsulation with Constructable Stylesheets for optimal performance.',
      },
    },
    layout: 'centered',
  },
  argTypes: {
    count: {
      control: 'number',
      description: 'Current count value',
      defaultValue: 0,
    },
  },
};

export default meta;
type Story = StoryObj<LitTailwindCounterProps>;

export const Default: Story = {
  args: {
    count: 0,
  },
  render: (args: LitTailwindCounterProps) => {
    const element = document.createElement('lit-tailwind-counter') as LitTailwindCounter;
    element.count = args.count;
    return element;
  },
};

export const WithInitialValue: Story = {
  args: {
    count: 42,
  },
  render: (args: LitTailwindCounterProps) => {
    const element = document.createElement('lit-tailwind-counter') as LitTailwindCounter;
    element.count = args.count;
    return element;
  },
  parameters: {
    docs: {
      description: {
        story: 'Counter with a custom initial value of 42.',
      },
    },
  },
};

export const NegativeValue: Story = {
  args: {
    count: -15,
  },
  render: (args: LitTailwindCounterProps) => {
    const element = document.createElement('lit-tailwind-counter') as LitTailwindCounter;
    element.count = args.count;
    return element;
  },
  parameters: {
    docs: {
      description: {
        story: 'Counter displaying negative values.',
      },
    },
  },
};

export const LargeValue: Story = {
  args: {
    count: 9999,
  },
  render: (args: LitTailwindCounterProps) => {
    const element = document.createElement('lit-tailwind-counter') as LitTailwindCounter;
    element.count = args.count;
    return element;
  },
  parameters: {
    docs: {
      description: {
        story: 'Counter with a large value to test UI layout.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    count: 5,
  },
  render: (args: LitTailwindCounterProps) => {
    const element = document.createElement('lit-tailwind-counter') as LitTailwindCounter;
    element.count = args.count;
    return element;
  },
  parameters: {
    docs: {
      description: {
        story: 'Fully interactive counter - click the + and - buttons to see Tailwind CSS animations in action.',
      },
    },
  },
};

export const Multiple: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; padding: 1rem;';
    
    const counters = [0, 10, -5, 100].map(count => {
      const element = document.createElement('lit-tailwind-counter') as LitTailwindCounter;
      element.count = count;
      return element;
    });
    
    counters.forEach(counter => container.appendChild(counter));
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple counters in a grid layout showcasing Tailwind CSS responsive design.',
      },
    },
  },
};