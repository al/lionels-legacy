<template>
  <div v-if="pdfDataUrl">
    <pdf-object :options="options" :url="pdfDataUrl"></pdf-object>
  </div>
</template>

<script setup>
const props = defineProps({
  pdfDataUrl: {
    type: String,
    required: true
  }
})

const options = {
  pdfOpenParams: {
    navpanes: 0,
    statusbar: 0,
    toolbar: 1,
    view: 'FitH'
  },
  title: 'Your poster'
}
</script>

<style scoped></style>
