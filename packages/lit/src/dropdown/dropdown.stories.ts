import type { Meta, StoryObj } from '@storybook/web-components';
import './dropdown.ts';
import type { LitDropdown } from './dropdown.ts';

interface LitDropdownProps {
  options: string;
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

const meta: Meta<LitDropdownProps> = {
  title: 'Components/Lit Dropdown',
  component: 'lit-dropdown',
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'text',
      description: 'JSON string of options',
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
type Story = StoryObj<LitDropdownProps>;

export const Default: Story = {
  args: {
    options: JSON.stringify(fruitOptions),
    selected: '',
    placeholder: 'Select a fruit',
    disabled: false,
  },
  render: (args: LitDropdownProps) => {
    const element = document.createElement('lit-dropdown') as LitDropdown;
    element.options = args.options;
    element.selected = args.selected;
    element.placeholder = args.placeholder;
    element.disabled = args.disabled;
    return element;
  },
};

export const WithSelection: Story = {
  args: {
    options: JSON.stringify(fruitOptions),
    selected: 'banana',
    placeholder: 'Select a fruit',
    disabled: false,
  },
  render: (args: LitDropdownProps) => {
    const element = document.createElement('lit-dropdown') as LitDropdown;
    element.options = args.options;
    element.selected = args.selected;
    element.placeholder = args.placeholder;
    element.disabled = args.disabled;
    return element;
  },
};

export const Colors: Story = {
  args: {
    options: JSON.stringify(colorOptions),
    selected: '',
    placeholder: 'Choose a color',
    disabled: false,
  },
  render: (args: LitDropdownProps) => {
    const element = document.createElement('lit-dropdown') as LitDropdown;
    element.options = args.options;
    element.selected = args.selected;
    element.placeholder = args.placeholder;
    element.disabled = args.disabled;
    return element;
  },
};

export const Disabled: Story = {
  args: {
    options: JSON.stringify(fruitOptions),
    selected: 'apple',
    placeholder: 'Select a fruit',
    disabled: true,
  },
  render: (args: LitDropdownProps) => {
    const element = document.createElement('lit-dropdown') as LitDropdown;
    element.options = args.options;
    element.selected = args.selected;
    element.placeholder = args.placeholder;
    element.disabled = args.disabled;
    return element;
  },
};

export const WithCallback: Story = {
  args: {
    options: JSON.stringify(fruitOptions),
    selected: '',
    placeholder: 'Select a fruit',
    disabled: false,
  },
  render: (args: LitDropdownProps) => {
    const element = document.createElement('lit-dropdown') as LitDropdown;
    element.options = args.options;
    element.selected = args.selected;
    element.placeholder = args.placeholder;
    element.disabled = args.disabled;
    element.addEventListener('change', (e: Event) => {
      const customEvent = e as CustomEvent<{ value: string; option: { label: string; value: string } }>;
      alert('You selected: ' + customEvent.detail.value + ' (' + customEvent.detail.option.label + ')');
    });
    return element;
  },
};

export const WithConsoleLog: Story = {
  args: {
    options: JSON.stringify(colorOptions),
    selected: '',
    placeholder: 'Choose a color',
    disabled: false,
  },
  render: (args: LitDropdownProps) => {
    const element = document.createElement('lit-dropdown') as LitDropdown;
    element.options = args.options;
    element.selected = args.selected;
    element.placeholder = args.placeholder;
    element.disabled = args.disabled;
    element.addEventListener('change', (e: Event) => {
      const customEvent = e as CustomEvent<{ value: string; option: { label: string; value: string } }>;
      console.log('Selected value:', customEvent.detail.value, 'Option:', customEvent.detail.option);
    });
    return element;
  },
};

export const WithInitialSelection: Story = {
  args: {
    options: JSON.stringify(fruitOptions),
    selected: 'orange',
    placeholder: 'Select a fruit',
    disabled: false,
  },
  render: (args: LitDropdownProps) => {
    const element = document.createElement('lit-dropdown') as LitDropdown;
    element.options = args.options;
    element.selected = args.selected;
    element.placeholder = args.placeholder;
    element.disabled = args.disabled;
    return element;
  },
};
