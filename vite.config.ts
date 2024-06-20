import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'node:path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    copyPublicDir: false,
    cssCodeSplit: true,
    lib: {
      name: 'BroVue',
      fileName: 'brovue',
      entry: {
        index: resolve(__dirname, 'src/BroVue/index.ts'),
        style: resolve(__dirname, 'src/BroVue/styles/main.scss'),
      },
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
