import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'node:path';

// すべての依存関係を含むバンドルビルド（Rails/Go用）
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
      emitCss: false,
    }),
  ],
  build: {
    outDir: resolve(__dirname, 'dist/bundle'),
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, 'src/SvelteCounter.svelte'),
      formats: ['es'],
      fileName: 'svelte-counter',
    },
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  resolve: {
    dedupe: ['svelte'],
    conditions: ['browser', 'default', 'import'],
  },
});
