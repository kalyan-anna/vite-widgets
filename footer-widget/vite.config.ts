import { defineConfig, UserConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }): UserConfig => {
  const isProduction = mode === 'production';
  return {
    plugins: [preact()],
    publicDir: isProduction ? '' : 'public',
    build: {
      lib: {
        entry: isProduction ? 'src/main.tsx' : 'src/test-app/main.tsx',
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
      minify: 'terser',
    },
  };
});
