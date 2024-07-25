import UnheadVite from '@unhead/addons/vite'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv-flow'
import { createRequire } from 'module'
import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

const require = createRequire(import.meta.url)
const vitePluginPrerender = require('vite-plugin-prerender')

dotenv.config()

const envVariables = {}
for (const key in process.env) {
  if (key.startsWith('VITE_')) {
    envVariables[`process.env.${key}`] = JSON.stringify(process.env[key])
  }
}

/**
 * NOTE: If encountering prerendering problems when running on an Apple M1 chip, see README.md for
 *       possible workarounds.
 */
const prerenderOptions = {
  renderer: new vitePluginPrerender.PuppeteerRenderer({
    args: ['--no-sandbox '],
    headless: true,
    maxConcurrentRoutes: 1,
    renderAfterDocumentEvent: 'render-complete',
  }),
  routes: ['/'], // TODO: Figure out how to set this dynamically.
  staticDir: path.join(__dirname, 'dist/'),
}

export default defineConfig({
  base: '/',
  build: {
    assetsInlineLimit: 0,
  },
  define: envVariables,
  plugins: [UnheadVite(), vitePluginPrerender(prerenderOptions), vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
