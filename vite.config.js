import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv'
import UnheadVite from '@unhead/addons/vite'

dotenv.config()

const envVariables = {}
for (const key in process.env) {
  if (key.startsWith('VITE_')) {
    envVariables[`process.env.${key}`] = JSON.stringify(process.env[key])
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  define: envVariables,
  plugins: [vue(), UnheadVite()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
