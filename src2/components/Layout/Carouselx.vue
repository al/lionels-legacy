<template>
  <div>
    <Carousel wrapAround="true">
      <Slide key="slide1">
        <div class="carousel__item">1</div>
      </Slide>
      <Slide key="slide2">
        <div class="carousel__item">2</div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination
  }
}
</script>

<style scoped></style>
