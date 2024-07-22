import '/src/assets/stylesheets/index.css'

import { createGtm } from '@gtm-support/vue-gtm'
import { InferSeoMetaPlugin } from '@unhead/addons'
import { createHead } from '@unhead/vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const head = createHead({
  plugins: [InferSeoMetaPlugin()],
})

app.use(head)
app.use(router)

const gtmId = import.meta.env.VITE_GTM_ID
if (gtmId) {
  app.use(
    createGtm({
      id: gtmId,
      vueRouter: router,
    })
  )
}

app.mount('#app')
