import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    open: true, // Automatically opens the app in the default browser
    port: 5000, // You can change the port if needed
    middlewareMode: false,
  },
});
