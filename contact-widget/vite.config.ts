import { defineConfig, UserConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }): UserConfig => {
  return {
    plugins: [preact()],
    publicDir: false,
    build: {
      lib: {
        entry: mode === 'production' ? 'src/main.tsx' : 'src/test-app/main.tsx',
        name: 'contact-widget',
        fileName: 'contact-widget.min',
        formats: ['es'],
      },
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === 'style.css') return 'contact-widget.css';
            return assetInfo.name;
          },
        },
      },
      minify: 'esbuild',
    },
  };
});
