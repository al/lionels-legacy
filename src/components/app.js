import { defineComponent } from 'vue';
import PosterBuilder from './poster/builder.js'
import PosterPreview from './poster/preview.js'

export default defineComponent({
  components: {
    PosterBuilder,
    PosterPreview
  },
  template: /*html*/ `
  <PosterBuilder />
  <PosterPreview url="https://www.google.com" />
  ` // doc.output('bloburl')
})
