import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  css: {
    devSourcemap: true,
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['lit', 'react', '@lit/react'],
      output: {
        globals: {
          lit: 'Lit',
          react: 'React',
          '@lit/react': 'LitReact',
        },
      },
    },
  },
});