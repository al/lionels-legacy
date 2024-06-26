import { createApp } from 'vue'
import PDFObjectPlugin from 'pdfobject-vue'
import App from './App.vue'

import '/src/assets/stylesheets/index.css'

const app = createApp(App)
app.use(PDFObjectPlugin)
app.mount('#app')
