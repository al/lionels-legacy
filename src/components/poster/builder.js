import { jsPDF } from 'jspdf'
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const name = ref(null)
    const doc = new jsPDF({
      unit: 'px',
      format: 'a4'
    })
    const pdf = computed(() => {
      // const doc = new jsPDF()
      // doc.text("This is the default font.", 20, 20)
      // doc.setFont("courier", "normal")
      // doc.text(name, 20, 30)
      // return doc
      return name
    })

    return { pdf, name }
  },
  template: /*html*/ `
  <input placeholder="Your cat's name" v-model="name" />

  <div>Name is: {{ name }}</div>

  <pre>{{ pdf.value }}</pre>
 `
})
