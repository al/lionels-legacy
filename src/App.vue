<template>
  <RouterView />
</template>

<script setup>
import { ref } from 'vue'
import { useHeadSafe } from '@unhead/vue'
import ogImageSrc from '@/assets/images/lionel-1b.jpg'

const ogImageUrl = ref(ogImageSrc)

useHeadSafe({
  htmlAttrs: { lang: 'en' },
  meta: [
    { name: 'charset', content: 'UTF-8' },
    {
      name: 'description',
      content: `
        Lionel was killed by a driver who failed to stop. Jersey’s law has changed and drivers are
        now required to report collisions involving cats. Failure to do so is a punishable offence
      `,
    },
    { name: 'keywords', content: 'Jersey, Cat, Road Safety' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { property: 'og:image', content: ogImageUrl },
  ],
  templateParams: {
    separator: '|',
    siteName: "Lionel's Legacy Jersey",
  },
  titleTemplate: '%s %separator %siteName',
})
</script>

<style scoped></style>
