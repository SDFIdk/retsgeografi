import { resolve } from 'path'
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, './index.html')
      }
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@modules': '/node_modules'
    }
  },
  server: {
    open: true, // Automatically opens the app in the default browser
    port: 5000, // You can change the port if needed
  },
});
