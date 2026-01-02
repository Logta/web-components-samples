import { defineConfig } from 'vite';

export default defineConfig({
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
