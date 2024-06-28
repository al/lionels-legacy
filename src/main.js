import { createApp } from 'vue'
import { createGtm } from '@gtm-support/vue-gtm'
import { createHead } from '@unhead/vue'
import { InferSeoMetaPlugin } from '@unhead/addons'
import router from './router'

import App from './App.vue'
import '/src/assets/stylesheets/index.css'

const head = createHead({
  plugins: [InferSeoMetaPlugin()],
})
const app = createApp(App)
app.use(head)
app.use(router)

const gtmId = import.meta.env.VITE_GTM_ID
console.log(gtmId)
if (gtmId) {
  app.use(
    createGtm({
      id: gtmId,
      vueRouter: router,
    }),
  )
}

app.mount('#app')
