import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@headlessui/react', '@r2wc/react-to-web-component'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@headlessui/react': 'HeadlessUI',
          '@r2wc/react-to-web-component': 'R2WC',
        },
      },
    },
  },
});
