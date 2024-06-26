import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnheadVite from '@unhead/addons/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/lionels-legacy/',
  plugins: [vue(), UnheadVite()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
