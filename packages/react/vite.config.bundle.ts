import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// すべての依存関係を含むバンドルビルド（Rails/Go用）
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    outDir: resolve(__dirname, 'dist/bundle'),
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/react-counter.tsx'),
      formats: ['es'],
      fileName: 'react-counter',
    },
    rollupOptions: {
      // 依存関係を external にしない（すべてバンドル）
      output: {
        manualChunks: undefined,
      },
    },
  },
});
