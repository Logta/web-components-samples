import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'node:path';
import { preprocessMeltUI } from '@melt-ui/pp';

// すべての依存関係を含むバンドルビルド（Rails/Go用）
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
      emitCss: false,
      preprocess: [preprocessMeltUI()],
    }),
  ],
  build: {
    outDir: resolve(__dirname, 'dist/bundle'),
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
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
