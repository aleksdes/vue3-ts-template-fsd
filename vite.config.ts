import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import stylelint from 'vite-plugin-stylelint';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    stylelint({
      fix: true,
    }),
    eslint({
      fix: true,
    }),
    vue(),

    // Docs: https://github.com/jpkleemans/vite-svg-loader
    svgLoader({
      svgoConfig: {
        plugins: [{
          name: 'preset-default',
          params: {
            overrides: {
              // viewBox is required to resize SVGs with CSS.
              // @see https://github.com/svg/svgo/issues/1128
              removeViewBox: false,
            },
          },
        }],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
