import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/lit-counter.ts',
      formats: ['es'],
      fileName: 'lit-counter'
    },
    rollupOptions: {
      external: ['lit'],
      output: {
        globals: {
          lit: 'Lit'
        }
      }
    }
  }
});
