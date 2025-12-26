import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/my-counter.js',
      formats: ['es'],
      fileName: 'my-counter'
    },
    rollupOptions: {
      external: [],
    }
  }
});
