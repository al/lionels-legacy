<template>
  <FixedWidthPage>
    <PosterGenerator @update:pdfDataUrl="updatePdfDataUrl" />
    <PosterPreview :pdfDataUrl="pdfDataUrl" />
  </FixedWidthPage>
</template>

<script setup>
import { ref } from 'vue'
import FixedWidthPage from './components/Layout/FixedWidth.vue'
import PosterGenerator from './components/Poster/Generator.vue'
import PosterPreview from './components/Poster/Preview.vue'

const pdfDataUrl = ref('')

const updatePdfDataUrl = (dataUrl) => {
  pdfDataUrl.value = dataUrl
}
</script>

<style scoped></style>
