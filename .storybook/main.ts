import type { StorybookConfig } from '@storybook/web-components-vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import type { UserConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../packages/**/*.mdx', '../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  async viteFinal(config) {
    return {
      ...config,
      plugins: [
        ...(config.plugins || []),
        svelte({
          compilerOptions: {
            customElement: true,
          },
        }),
      ],
    } as UserConfig;
  },
};

export default config;
