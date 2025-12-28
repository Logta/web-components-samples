import type { Meta, StoryObj } from '@storybook/web-components';
import './button.tsx';

interface ReactButtonProps {
  label: string;
  variant: 'primary' | 'secondary' | 'success' | 'danger';
  size: 'small' | 'medium' | 'large';
  disabled: boolean;
}

const meta: Meta<ReactButtonProps> = {
  title: 'Components/React Button',
  component: 'react-button',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Button label text',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger'],
      description: 'Button variant/style',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<ReactButtonProps>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
  render: (args: ReactButtonProps) => {
    const element = document.createElement('react-button') as HTMLElement & ReactButtonProps;
    element.setAttribute('label', args.label);
    element.setAttribute('variant', args.variant);
    element.setAttribute('size', args.size);
    if (args.disabled) {
      element.setAttribute('disabled', '');
    }
    return element;
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'medium',
    disabled: false,
  },
  render: (args: ReactButtonProps) => {
    const element = document.createElement('react-button') as HTMLElement & ReactButtonProps;
    element.setAttribute('label', args.label);
    element.setAttribute('variant', args.variant);
    element.setAttribute('size', args.size);
    if (args.disabled) {
      element.setAttribute('disabled', '');
    }
    return element;
  },
};

export const Success: Story = {
  args: {
    label: 'Success Button',
    variant: 'success',
    size: 'medium',
    disabled: false,
  },
  render: (args: ReactButtonProps) => {
    const element = document.createElement('react-button') as HTMLElement & ReactButtonProps;
    element.setAttribute('label', args.label);
    element.setAttribute('variant', args.variant);
    element.setAttribute('size', args.size);
    if (args.disabled) {
      element.setAttribute('disabled', '');
    }
    return element;
  },
};

export const Danger: Story = {
  args: {
    label: 'Danger Button',
    variant: 'danger',
    size: 'medium',
    disabled: false,
  },
  render: (args: ReactButtonProps) => {
    const element = document.createElement('react-button') as HTMLElement & ReactButtonProps;
    element.setAttribute('label', args.label);
    element.setAttribute('variant', args.variant);
    element.setAttribute('size', args.size);
    if (args.disabled) {
      element.setAttribute('disabled', '');
    }
    return element;
  },
};

export const Small: Story = {
  args: {
    label: 'Small Button',
    variant: 'primary',
    size: 'small',
    disabled: false,
  },
  render: (args: ReactButtonProps) => {
    const element = document.createElement('react-button') as HTMLElement & ReactButtonProps;
    element.setAttribute('label', args.label);
    element.setAttribute('variant', args.variant);
    element.setAttribute('size', args.size);
    if (args.disabled) {
      element.setAttribute('disabled', '');
    }
    return element;
  },
};

export const Large: Story = {
  args: {
    label: 'Large Button',
    variant: 'primary',
    size: 'large',
    disabled: false,
  },
  render: (args: ReactButtonProps) => {
    const element = document.createElement('react-button') as HTMLElement & ReactButtonProps;
    element.setAttribute('label', args.label);
    element.setAttribute('variant', args.variant);
    element.setAttribute('size', args.size);
    if (args.disabled) {
      element.setAttribute('disabled', '');
    }
    return element;
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    size: 'medium',
    disabled: true,
  },
  render: (args: ReactButtonProps) => {
    const element = document.createElement('react-button') as HTMLElement & ReactButtonProps;
    element.setAttribute('label', args.label);
    element.setAttribute('variant', args.variant);
    element.setAttribute('size', args.size);
    if (args.disabled) {
      element.setAttribute('disabled', '');
    }
    return element;
  },
};
