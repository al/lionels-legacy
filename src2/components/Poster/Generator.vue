<template>
  <div>
    <input v-model="name" placeholder="Enter your cat's name" />
  </div>
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue'
import { refDebounced } from '@vueuse/core'
import { jsPDF } from 'jspdf'
const emit = defineEmits(['update:pdfDataUrl'])

const name = ref('')
const nameDebounced = refDebounced(name, 750)

const generatePdf = (name) => {
  const intro = `
  My name was ${name}.
  I was killed here.
  The driver did not notify anyone about the accident. By not reporting the \
  accident the driver broke the law.
  `
  const regulation = `ROAD TRAFFIC (No. 68) (JERSEY) REGULATIONS 2021`
  const jspca = "JSPCA"
  const jspcaPhone = "724331 or 07797 720331"
  const detail1 = `
  UNDER THE UPDATED REGULATIONS, THE DRIVER OF A MOTOR VEHICLE ON A PUBLIC \
  ROAD WHO THINKS HE OR SHE HAS HIT OR RUN OVER A CAT MUST DO TWO THINGS.
  `
  const detail2a = `
  1) THE DRIVER MUST STOP "AS SOON AS IT IS SAFE AND REASONABLY PRACTICABLE TO \
     DO SO."
  `
  const detail2b = `
  2) THE DRIVER MUST NOTIFY EITHER A PERSON WHO IS RESPONSIBLE FOR CARING FOR \
     THE CAT OR THE JSPCA.
  `
  const detail3 = `
  FAILURE TO COMPLY WITH THIS IS NOW AN OFFENCE, PUNISHABLE WITH A MAXIMUM \
  FINE OF £10,000 AND/OR IMPRISONMENT FOR UP TO 6 MONTHS.
  `

  const doc = new jsPDF()
  doc.addFont("/src/assets/fonts/Andika-Regular.ttf", "Andika", "normal")
  doc.addFont("/src/assets/fonts/Mansalva-Regular.ttf", "Mansalva", "normal")
  doc.addFont("/src/assets/fonts/OpenSans-VariableFont_wdth,wght.ttf", "OpenSans", "normal")
  doc.setFont("Mansalva", "normal")
  doc.text(intro, 10, 10, { maxWidth: 40 })
  doc.setFont("Andika", "normal")
  doc.text(regulation, 50, 50)
  doc.text(jspca, 60, 80)
  doc.text(jspcaPhone, 60, 90)
  doc.setFont("OpenSans", "normal")
  doc.text(detail1, 10, 100)
  doc.text(detail2a, 10, 120)
  doc.text(detail2b, 10, 140)
  doc.text(detail3, 10, 160)

  return doc.output('blob')
}

const pdfDataUrl = computed(() => {
  const pdfBlob = generatePdf(nameDebounced.value)
  return URL.createObjectURL(pdfBlob)
})

watchEffect(() => {
  emit('update:pdfDataUrl', pdfDataUrl.value)
})
</script>

<style scoped></style>
