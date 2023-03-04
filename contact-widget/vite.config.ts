import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  publicDir: false,
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'contact-widget',
      fileName: 'contact-widget',
      formats: ['es'],
    },
  },
});
