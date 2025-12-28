import type { StorybookConfig } from '@storybook/web-components-vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import react from '@vitejs/plugin-react';
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
        react(),
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
