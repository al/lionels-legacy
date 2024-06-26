<template>
  <RouterView />
</template>

<script setup>
import { ref } from 'vue'
import { useHeadSafe } from '@unhead/vue'
import ogImageSrc from '@/assets/images/lionel-1.jpg'

// import { SchemaOrgUnheadPlugin } from '@unhead/schema-org'

const ogImageUrl = ref(ogImageSrc)

useHeadSafe({
  htmlAttrs: { lang: 'en' },
  meta: [
    { name: 'charset', content: 'UTF-8' },
    { name: 'description', content: 'Kit cat' },
    { name: 'keywords', content: 'a, b' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { property: 'og:image', content: ogImageUrl },
  ],
  templateParams: {
    separator: '|',
    siteName: "Lionel's Legacy",
    schemaOrg: {
      host: 'https://example.com',
    },
  },
  titleTemplate: '%s %separator %siteName',
})

// useSchemaOrg([
//   // @todo Select Identity: http://unhead.unjs.io/schema-org/recipes/identity
//   defineWebSite({
//     name: 'My Awesome Website',
//   }),
//   defineWebPage(),
// ])
</script>

<style scoped></style>
