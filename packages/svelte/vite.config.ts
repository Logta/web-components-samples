import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/svelte-counter.ts'),
      formats: ['es'],
      fileName: 'svelte-counter',
    },
  },
});
