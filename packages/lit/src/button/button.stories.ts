import type { Meta, StoryObj } from '@storybook/web-components';
import './button.ts';
import type { LitButton } from './button.ts';

interface LitButtonProps {
  label: string;
  variant: 'primary' | 'secondary' | 'success' | 'danger';
  size: 'small' | 'medium' | 'large';
  disabled: boolean;
}

const meta: Meta<LitButtonProps> = {
  title: 'Components/Lit Button',
  component: 'lit-button',
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
type Story = StoryObj<LitButtonProps>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
  render: (args: LitButtonProps) => {
    const element = document.createElement('lit-button') as LitButton;
    element.label = args.label;
    element.variant = args.variant;
    element.size = args.size;
    element.disabled = args.disabled;
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
  render: (args: LitButtonProps) => {
    const element = document.createElement('lit-button') as LitButton;
    element.label = args.label;
    element.variant = args.variant;
    element.size = args.size;
    element.disabled = args.disabled;
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
  render: (args: LitButtonProps) => {
    const element = document.createElement('lit-button') as LitButton;
    element.label = args.label;
    element.variant = args.variant;
    element.size = args.size;
    element.disabled = args.disabled;
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
  render: (args: LitButtonProps) => {
    const element = document.createElement('lit-button') as LitButton;
    element.label = args.label;
    element.variant = args.variant;
    element.size = args.size;
    element.disabled = args.disabled;
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
  render: (args: LitButtonProps) => {
    const element = document.createElement('lit-button') as LitButton;
    element.label = args.label;
    element.variant = args.variant;
    element.size = args.size;
    element.disabled = args.disabled;
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
  render: (args: LitButtonProps) => {
    const element = document.createElement('lit-button') as LitButton;
    element.label = args.label;
    element.variant = args.variant;
    element.size = args.size;
    element.disabled = args.disabled;
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
  render: (args: LitButtonProps) => {
    const element = document.createElement('lit-button') as LitButton;
    element.label = args.label;
    element.variant = args.variant;
    element.size = args.size;
    element.disabled = args.disabled;
    return element;
  },
};
