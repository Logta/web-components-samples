import type { Meta, StoryObj } from '@storybook/web-components';
import './dropdown.ts';

interface DropdownOption {
  label: string;
  value: string;
}

interface SvelteDropdownProps {
  options: DropdownOption[];
  selected: string;
  placeholder: string;
  disabled: boolean;
}

const fruitOptions = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
  { label: 'Grape', value: 'grape' },
  { label: 'Mango', value: 'mango' },
];

const colorOptions = [
  { label: 'Red', value: 'red' },
  { label: 'Blue', value: 'blue' },
  { label: 'Green', value: 'green' },
  { label: 'Yellow', value: 'yellow' },
];

const meta: Meta<SvelteDropdownProps> = {
  title: 'Components/Svelte Dropdown',
  component: 'svelte-dropdown',
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object', // Change control type to object
      description: 'Array of options',
    },
    selected: {
      control: 'text',
      description: 'Selected value',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<SvelteDropdownProps>;

export const Default: Story = {
  args: {
    options: fruitOptions,
    selected: '',
    placeholder: 'Select a fruit',
    disabled: false,
  },
  render: (args: SvelteDropdownProps) => {
    const element = document.createElement('svelte-dropdown') as any; // Use 'any' for now due to complex type casting
    element.options = args.options;
    element.selected = args.selected;
    element.placeholder = args.placeholder;
    element.disabled = args.disabled;
    return element;
  },
};

export const WithSelection: Story = {
  args: {
    options: fruitOptions,
    selected: 'banana',
    placeholder: 'Select a fruit',
    disabled: false,
  },
  render: (args: SvelteDropdownProps) => {
    const element = document.createElement('svelte-dropdown') as any;
    element.options = args.options;
    element.selected = args.selected;
    element.placeholder = args.placeholder;
    element.disabled = args.disabled;
    return element;
  },
};

export const Colors: Story = {
  args: {
    options: colorOptions,
    selected: '',
    placeholder: 'Choose a color',
    disabled: false,
  },
  render: (args: SvelteDropdownProps) => {
    const element = document.createElement('svelte-dropdown') as any;
    element.options = args.options;
    element.selected = args.selected;
    element.placeholder = args.placeholder;
    element.disabled = args.disabled;
    return element;
  },
};

export const Disabled: Story = {
  args: {
    options: fruitOptions,
    selected: 'apple',
    placeholder: 'Select a fruit',
    disabled: true,
  },
  render: (args: SvelteDropdownProps) => {
    const element = document.createElement('svelte-dropdown') as any;
    element.options = args.options;
    element.selected = args.selected;
    element.placeholder = args.placeholder;
    element.disabled = args.disabled;
    return element;
  },
};
