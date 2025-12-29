import type { Meta, StoryObj } from '@storybook/web-components';
import './modal.ts';

interface SvelteModalProps {
  title: string;
  description: string;
}

const meta: Meta<SvelteModalProps> = {
  title: 'Components/Svelte Modal',
  component: 'svelte-modal',
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Modal title',
    },
    description: {
      control: 'text',
      description: 'Modal description',
    },
  },
};

export default meta;
type Story = StoryObj<SvelteModalProps>;

export const Default: Story = {
  args: {
    title: 'Svelte Modal',
    description: 'This is a modal dialog built with Svelte and Melt UI.',
  },
  render: (args: SvelteModalProps) => {
    const element = document.createElement('svelte-modal') as HTMLElement & SvelteModalProps;
    element.setAttribute('title', args.title);
    element.setAttribute('description', args.description);
    return element;
  },
};

export const CustomTitle: Story = {
  args: {
    title: 'Custom Svelte Modal',
    description: 'This is a modal dialog built with Svelte and Melt UI.',
  },
  render: (args: SvelteModalProps) => {
    const element = document.createElement('svelte-modal') as HTMLElement & SvelteModalProps;
    element.setAttribute('title', args.title);
    element.setAttribute('description', args.description);
    return element;
  },
};

export const CustomDescription: Story = {
  args: {
    title: 'Svelte Modal',
    description: 'This is a custom description showcasing Melt UI integration with Svelte 5.',
  },
  render: (args: SvelteModalProps) => {
    const element = document.createElement('svelte-modal') as HTMLElement & SvelteModalProps;
    element.setAttribute('title', args.title);
    element.setAttribute('description', args.description);
    return element;
  },
};

export const WithCustomContent: Story = {
  args: {
    title: 'Custom Content Modal',
    description: 'This modal uses slot for custom content',
  },
  render: (args: SvelteModalProps) => {
    const element = document.createElement('svelte-modal') as HTMLElement & SvelteModalProps;
    element.setAttribute('title', args.title);

    // カスタムコンテンツを slot="content" で注入
    element.innerHTML = `
      <div slot="content" style="padding: 1rem; border: 2px dashed #f97316; background: #fff7ed; border-radius: 0.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #c2410c;">
          🎨 Custom Content via <code style="background: #fff; padding: 0.125rem 0.375rem; border-radius: 0.25rem; border: 1px solid #fdba74;">slot="content"</code>
        </h4>
        <p style="margin: 0 0 0.75rem 0; color: #9a3412; font-size: 0.875rem;">
          ✅ This content is <strong>slotted</strong> into the modal body!
        </p>
        <div style="background: #fff; padding: 1rem; border-radius: 0.5rem; border: 1px solid #fdba74;">
          <p style="margin: 0 0 0.5rem 0; color: #374151; font-weight: 600;">
            You can pass any HTML content:
          </p>
          <ul style="margin: 0; padding-left: 1.5rem; color: #6b7280; font-size: 0.875rem; line-height: 1.6;">
            <li>Rich text formatting</li>
            <li>Images and media</li>
            <li>Forms and inputs</li>
            <li>Custom components</li>
          </ul>
        </div>
      </div>
    `;

    return element;
  },
};
