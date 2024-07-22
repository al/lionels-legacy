<template>
  <div class="mx-auto my-12 w-full max-w-screen-md">
    <PdfObject
      v-if="pdfDataUrl"
      :options="options"
      :url="pdfDataUrl"
    />
  </div>
</template>

<script setup>
defineProps({
  pdfDataUrl: {
    required: true,
    type: String,
  },
})

const options = {
  pdfOpenParams: {
    navpanes: 0,
    statusbar: 0,
    toolbar: 1,
    view: 'FitV',
  },
  title: 'Your poster',
}
</script>

<style scoped>
.pdfobject-container {
  aspect-ratio: 1/1;
  height: auto;
  width: 100%;
}
</style>
