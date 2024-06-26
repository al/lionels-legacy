import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    url: {
      required: true,
      type: String
    }
  },
  template: /*html*/ `
  Preview
  <iframe :src="url"></iframe>
  `
})
