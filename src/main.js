import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import { InferSeoMetaPlugin } from '@unhead/addons'
import router from './router'

import App from './App.vue'
import '/src/assets/stylesheets/index.css'

const head = createHead({
  plugins: [InferSeoMetaPlugin()],
})

createApp(App).use(router).use(head).mount('#app')
