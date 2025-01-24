import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'main.js', // Entry file for your plugin
      name: 'MapViewerPlugin', // Global name for UMD builds
      fileName: (format) => `map-viewer-plugin.${format}.js`,
    },
    rollupOptions: {
      external: [], // Remove 'lit' and 'ol' from here
      output: {
        globals: {}, // No need for globals if everything is bundled
      },
    },
  },
  server: {
    open: true,
    port: 5000,
    middlewareMode: false,
  },
});
