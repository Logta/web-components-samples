import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    // Ensure only one instance of React, React DOM, and Lit is used
    dedupe: ['react', 'react-dom', 'lit', '@lit/react'],
  },
});
