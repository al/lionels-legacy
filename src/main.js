import '/src/assets/stylesheets/index.css'

import { createGtm } from '@gtm-support/vue-gtm'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

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
