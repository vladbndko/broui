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
      name: 'broui',
      fileName: 'index',
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        style: resolve(__dirname, 'src/style.css'),
      },
    },
    rollupOptions: {
      treeshake: true,
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
  // @ts-ignore
  test: {
    globals: true,
    environment: 'happy-dom',
  },
});
