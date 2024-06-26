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

const generatePdf = (text) => {
  const doc = new jsPDF()
  doc.text(text, 10, 10)
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
