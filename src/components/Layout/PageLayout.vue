<template>
  <div class="flex min-h-screen flex-col">
    <PageNavbar />

    <RouterView class="flex-grow" />

    <PageFooter />
  </div>
</template>

<script setup>
import PageFooter from './PageFooter.vue'
import PageNavbar from './PageNavbar.vue'
</script>
