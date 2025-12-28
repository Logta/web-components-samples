import type { Meta, StoryObj } from '@storybook/web-components';
import './modal.ts';

interface VanillaModalProps {}

const meta: Meta<VanillaModalProps> = {
  title: 'Components/Vanilla Modal',
  component: 'vanilla-modal',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VanillaModalProps>;

export const Default: Story = {
  render: () => {
    const element = document.createElement('vanilla-modal');
    return element;
  },
};
