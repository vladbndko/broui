import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'node:path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    copyPublicDir: false,
    lib: {
      name: 'broui',
      fileName: 'broui',
      entry: resolve(__dirname, 'src/index.ts'),
    },
    rollupOptions: {
      treeshake: true,
      external: ['vue'],
      output: {
        exports: 'named',
        globals: { vue: 'Vue' },
      },
      input: {
        main: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
