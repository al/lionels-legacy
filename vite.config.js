import UnheadVite from '@unhead/addons/vite'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

dotenv.config()

const envVariables = {}
for (const key in process.env) {
  if (key.startsWith('VITE_')) {
    envVariables[`process.env.${key}`] = JSON.stringify(process.env[key])
  }
}

export default defineConfig({
  base: '/',
  define: envVariables,
  plugins: [UnheadVite(), vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
