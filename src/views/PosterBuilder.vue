<template>
  <PosterBuilder @update:pdf-data-url="updatePosterPdfDataUrl" />
  <PosterPreviewer :pdf-data-url="posterPdfDataUrl" />
</template>

<script setup>
import { useHead } from '@unhead/vue'
import { ref } from 'vue'
import PosterBuilder from '../components/Poster/PosterBuilder.vue'
import PosterPreviewer from '../components/Poster/PosterPreviewer.vue'

useHead({
  title: 'Build a Poster',
})

const posterPdfDataUrl = ref('')

const updatePosterPdfDataUrl = (dataUrl) => {
  posterPdfDataUrl.value = dataUrl
}
</script>
