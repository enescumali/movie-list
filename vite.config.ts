import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  publicDir:  process.env.NODE_ENV === 'production' ? '/movie-list/' : '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      exclude: [
        '**/src/context/**',
        '**/src/router/**',
        '**/src/types/**',
        '**/*.cjs',
        '**/src/components/icons/**',
        '**/src/components/states/skeletons/**'
      ]
    }
  }
});
