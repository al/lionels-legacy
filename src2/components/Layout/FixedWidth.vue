<template>
  <div>
    <Navbar />
    <Hero />

    <About />

    <Main>
      <slot></slot>
    </Main>

    <Carouselx />

    <Resources />

    <Subscribe />

    <Footer />
  </div>
</template>

<script setup>
import About from './About.vue'
import Hero from './Hero.vue'
import Main from './Main.vue'
import Subscribe from './Subscribe.vue'
import Carouselx from './Carouselx.vue'
import Footer from './Footer.vue'
import Navbar from './Navbar.vue'
import Resources from './Resources.vue'
</script>

<style scoped></style>
