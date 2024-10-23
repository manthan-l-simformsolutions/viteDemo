import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true, // Opens the app in the browser automatically
    strictPort: true, // Do not switch to another port if 3000 is busy
  },
  envPrefix: 'VITE_', // Environment variables prefix (to expose them in the client-side)
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Use '@' as alias for src folder
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
});
