import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'main.js', // Entry file for your plugin
      name: 'MapViewerPlugin', // Global name for UMD builds
      fileName: (format) => `map-viewer-plugin.${format}.js`,
    },
    rollupOptions: {
      external: ['lit', 'ol'], // Mark these as external dependencies
      output: {
        globals: {
          lit: 'lit',
          ol: 'ol',
        },
      },
    },
  },
  server: {
    open: true, // Automatically opens the app in the default browser
    port: 5000, // You can change the port if needed
    middlewareMode: false,
  },
});
