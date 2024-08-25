<template>
  <div class="relative my-6 px-4 md:px-24 lg:px-8">
    <img
      class="absolute bottom-0 right-0 w-1/2 opacity-5"
      alt=""
      src="@/assets/images/paws.svg"
    />

    <div class="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8">
      <div class="flex flex-col overflow-x-hidden sm:overflow-x-visible lg:flex-row">
        <div
          class="relative -ml-10 mb-10 mt-6 min-h-[550px] w-full max-w-xl flex-1 sm:ml-0 md:mx-auto md:mb-12 md:overflow-visible lg:w-1/2 lg:min-w-[580px] lg:max-w-2xl"
        >
          <div class="absolute left-8 top-3 w-64 rotate-12">
            <PolaroidImage
              alt="Picture of Lionel"
              src="assets/images/lionel-3.jpg"
            />
          </div>
          <div class="absolute left-[8rem] top-[14rem] w-64 -rotate-3">
            <PolaroidImage
              alt="Picture of Lionel"
              src="assets/images/lionel-4.jpg"
              text="May 2024"
              text-class="ml-[15%] rotate-2"
            />
          </div>
          <div class="absolute left-[16rem] top-10 w-64 rotate-[-22deg]">
            <PolaroidImage
              alt="Picture of Lionel and Monty"
              src="assets/images/lionel-2.jpg"
              text="Lionel with Monty"
              text-class="-rotate-3"
            />
          </div>
        </div>
        <div class="z-10 mb-10 max-w-xl flex-1 md:mx-auto md:mb-12 lg:w-1/2 lg:max-w-2xl">
          <h2
            id="about-lionel"
            class="my-6 max-w-full scroll-mt-[80px] font-sans text-3xl font-bold leading-none tracking-tight text-gray-800 sm:text-4xl md:mx-auto md:text-center"
          >
            About Lionel
          </h2>

          <p class="mb-6 text-base text-gray-700 md:text-lg">
            Lionel was a beautiful young cat loving his new life with his humans and three cat
            brothers in Grantez, St. Ouen until June 4<sup>th</sup> 2024 when he was the victim of a
            hit and run in broad daylight, on a Green Lane, where the speed should be no more than
            15 mph.
          </p>
          <p class="mb-6 text-base text-gray-700 md:text-lg">
            He was abandoned. The driver did not report the incident. Lionel was found dead alone in
            the field close to his home.
          </p>
          <p class="mb-6 text-base text-gray-700 md:text-lg">
            Lionel loved being outdoors and was a little adventurer. Lionel was a rescue cat, just
            like his three brothers. He was just learning to trust the world. Lionel was about to
            turn 2 years old.
          </p>
          <p class="mb-6 text-base text-gray-700 md:text-lg">
            Lionel&rsquo;s story is one which is alarmingly frequent on Jersey&rsquo;s
            &ldquo;safe&rdquo; roads. Driver&rsquo;s often fail to report such accidents. Out of 4
            cats killed in a 125m stretch of road in Rue de Grantez in the last 8 years, only one
            driver stopped to let somebody know.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PolaroidImage from '../PolaroidImage.vue'

export default {
  components: {
    PolaroidImage,
  },
}
</script>
