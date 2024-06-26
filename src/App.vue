<template>
  <div>
    <PDFGenerator @update:pdfDataUrl="updatePdfDataUrl" />
    <PDFDisplay :pdfDataUrl="pdfDataUrl" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PDFGenerator from './components/PDFGenerator.vue';
import PDFDisplay from './components/PDFDisplay.vue';

const pdfDataUrl = ref('');

const updatePdfDataUrl = (dataUrl) => {
  pdfDataUrl.value = dataUrl;
};
</script>

<style scoped>
</style>
