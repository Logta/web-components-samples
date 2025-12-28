import type { Meta, StoryObj } from '@storybook/web-components';
import './modal.ts';
import type { LitModal } from './modal.ts';

interface LitModalProps {
  open: boolean;
}

const meta: Meta<LitModalProps> = {
  title: 'Components/Lit Modal',
  component: 'lit-modal',
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the modal is initially open',
    },
  },
};

export default meta;
type Story = StoryObj<LitModalProps>;

export const Default: Story = {
  args: {
    open: false,
  },
  render: (args: LitModalProps) => {
    const element = document.createElement('lit-modal') as LitModal;
    element.open = args.open;
    return element;
  },
};

export const InitiallyOpen: Story = {
  args: {
    open: true,
  },
  render: (args: LitModalProps) => {
    const element = document.createElement('lit-modal') as LitModal;
    element.open = args.open;
    return element;
  },
};
