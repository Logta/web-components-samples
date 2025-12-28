import { defineConfig } from 'vite';
import { resolve } from 'node:path';

// すべての依存関係を含むバンドルビルド（Rails/Go用）
export default defineConfig({
  build: {
    outDir: resolve(__dirname, 'dist/bundle'),
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      // 依存関係を external にしない（すべてバンドル）
      output: {
        manualChunks: undefined,
      },
    },
  },
});
