import type { StorybookConfig } from '@storybook/web-components-vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import react from '@vitejs/plugin-react';
import type { UserConfig } from 'vite';
import { preprocessMeltUI } from '@melt-ui/pp';

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
        react(),
        svelte({
          compilerOptions: {
            customElement: true,
          },
          preprocess: [preprocessMeltUI()],
        }),
      ],
    } as UserConfig;
  },
};

export default config;
