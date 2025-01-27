import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: './', // Relative base path
  build: {
    lib: {
      entry: 'main.js',
      name: 'MapViewerPlugin',
      fileName: (format) => `map-viewer-plugin.${format}.js`,
    },
    rollupOptions: {
      external: ['lit', 'ol'], // Keep 'lit' and 'ol' external
      output: {
        globals: {
          lit: 'lit',
          ol: 'ol',
        },
      },
      input: 'index.html', // Include index.html
    },
    outDir: 'dist', // Output directory
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'src/examples', // Copy the src/examples folder
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
