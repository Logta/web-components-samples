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
    // Tailwind CSS v4プラグインの動的インポート
    let tailwindcss;
    try {
      tailwindcss = (await import('@tailwindcss/vite')).default;
    } catch (e) {
      console.warn('Tailwind CSS v4 plugin not found, skipping...');
    }

    return {
      ...config,
      plugins: [
        ...(config.plugins || []),
        ...(tailwindcss ? [tailwindcss()] : []),
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
