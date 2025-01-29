import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/retsgeografi/', // Relative base path
  build: {
    lib: {
      entry: 'main.js',
      name: 'MapViewerPlugin',
      fileName: (format) => `map-viewer-plugin.${format}.js`,
    },
    rollupOptions: {
      external: ['ol, lit'], // Only keep 'ol' external
      output: {
        globals: {
          ol: 'ol',
          lit: 'lit',
        },
      },
      input: 'index.html', // Include index.html
    },
    outDir: 'dist', // Output directory
    sourcemap: true,
  },
  optimizeDeps: {
    include: ['lit'],
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'public/examples', // Copy the src/examples folder
          dest: '.', // Place in the root of /dist
        },
        {
          src: 'node_modules/@dataforsyningen', // Copy everything from the package
          dest: '', // Place in /dist/designsystem
        },
        {
          src: 'node_modules/@nieuwlandgeo', // Copy everything from the package}
          dest: '',
        }
      ],
    }),
  ],
  assetsInclude: ['**/*.svg'],
  server: {
    open: true,
    port: 5000,
    cors: true,
  },
});
