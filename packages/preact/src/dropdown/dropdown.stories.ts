import type { Meta, StoryObj } from '@storybook/web-components';
import './dropdown.tsx';

interface PreactDropdownProps {
  options: string;
  selected: string;
  placeholder: string;
  disabled: boolean;
  onvaluechange?: string;
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

const meta: Meta<PreactDropdownProps> = {
  title: 'Components/Preact Dropdown',
  component: 'preact-dropdown',
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
    onvaluechange: {
      control: 'text',
      description: 'JavaScript code to execute when value changes (receives value and option parameters)',
    },
  },
};

export default meta;
type Story = StoryObj<PreactDropdownProps>;

export const Default: Story = {
  args: {
    options: JSON.stringify(fruitOptions),
    selected: '',
    placeholder: 'Select a fruit',
    disabled: false,
  },
  render: (args: PreactDropdownProps) => {
    const element = document.createElement('preact-dropdown') as HTMLElement & PreactDropdownProps;
    element.setAttribute('options', args.options);
    element.setAttribute('selected', args.selected);
    element.setAttribute('placeholder', args.placeholder);
    if (args.disabled) {
      element.setAttribute('disabled', '');
    }
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
  render: (args: PreactDropdownProps) => {
    const element = document.createElement('preact-dropdown') as HTMLElement & PreactDropdownProps;
    element.setAttribute('options', args.options);
    element.setAttribute('selected', args.selected);
    element.setAttribute('placeholder', args.placeholder);
    if (args.disabled) {
      element.setAttribute('disabled', '');
    }
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
  render: (args: PreactDropdownProps) => {
    const element = document.createElement('preact-dropdown') as HTMLElement & PreactDropdownProps;
    element.setAttribute('options', args.options);
    element.setAttribute('selected', args.selected);
    element.setAttribute('placeholder', args.placeholder);
    if (args.disabled) {
      element.setAttribute('disabled', '');
    }
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
  render: (args: PreactDropdownProps) => {
    const element = document.createElement('preact-dropdown') as HTMLElement & PreactDropdownProps;
    element.setAttribute('options', args.options);
    element.setAttribute('selected', args.selected);
    element.setAttribute('placeholder', args.placeholder);
    if (args.disabled) {
      element.setAttribute('disabled', '');
    }
    return element;
  },
};

export const WithCallback: Story = {
  args: {
    options: JSON.stringify(fruitOptions),
    selected: '',
    placeholder: 'Select a fruit',
    disabled: false,
    onvaluechange: "alert('You selected: ' + value + ' (' + option.label + ')')",
  },
  render: (args: PreactDropdownProps) => {
    const element = document.createElement('preact-dropdown') as HTMLElement & PreactDropdownProps;
    element.setAttribute('options', args.options);
    element.setAttribute('selected', args.selected);
    element.setAttribute('placeholder', args.placeholder);
    if (args.disabled) {
      element.setAttribute('disabled', '');
    }
    if (args.onvaluechange) {
      element.setAttribute('onvaluechange', args.onvaluechange);
    }
    return element;
  },
};

export const WithConsoleLog: Story = {
  args: {
    options: JSON.stringify(colorOptions),
    selected: '',
    placeholder: 'Choose a color',
    disabled: false,
    onvaluechange: "console.log('Selected value:', value, 'Option:', option)",
  },
  render: (args: PreactDropdownProps) => {
    const element = document.createElement('preact-dropdown') as HTMLElement & PreactDropdownProps;
    element.setAttribute('options', args.options);
    element.setAttribute('selected', args.selected);
    element.setAttribute('placeholder', args.placeholder);
    if (args.disabled) {
      element.setAttribute('disabled', '');
    }
    if (args.onvaluechange) {
      element.setAttribute('onvaluechange', args.onvaluechange);
    }
    return element;
  },
};
