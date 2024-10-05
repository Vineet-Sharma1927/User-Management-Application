import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // This ensures the base URL is relative
  server: {
    historyApiFallback: true,
  }
});

