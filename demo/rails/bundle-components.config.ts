import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Rails demo用のバンドル設定 - すべての依存関係を含める
export default defineConfig({
  plugins: [react()],
  define: {
    // process.env をブラウザ用に置き換え
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    outDir: resolve(__dirname, 'public/components'),
    emptyOutDir: true,
    lib: {
      entry: {
        vanilla: resolve(__dirname, '../../packages/vanilla/src/my-counter.ts'),
        react: resolve(__dirname, '../../packages/react/src/react-counter.tsx'),
        lit: resolve(__dirname, '../../packages/lit/src/lit-counter.ts'),
      },
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      // 依存関係を external にしない（すべてバンドルする）
      output: {
        // 各エントリーポイントを個別のファイルとして出力
        manualChunks: undefined,
      },
    },
  },
});
