import { defineConfig } from 'vite';
import { resolve } from 'node:path';

// React向けビルド（react, react-dom, @lit/reactは外部依存として扱う）
export default defineConfig({
  build: {
    outDir: resolve(__dirname, 'dist/react'),
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@lit/react', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@lit/react': 'LitReact',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
  },
});
