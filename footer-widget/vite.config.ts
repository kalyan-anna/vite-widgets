import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  publicDir: false,
  build: {
    lib: {
      entry: 'src/main.tsx',
      name: 'footer-widget',
      fileName: 'footer-widget.min',
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'footer-widget.css';
          return assetInfo.name;
        },
      },
    },
  },
});
