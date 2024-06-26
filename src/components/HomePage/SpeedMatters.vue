<template>
  <div class="xxx px-4 pt-16 md:px-24 lg:px-8 lg:pt-20">
    <div class="xmb-10 xmd:mb-12 sm:text-center md:mx-auto md:text-left">
      <div class="flex flex-col lg:flex-row">
        <div class="xmd:flex-none mb-6 max-w-full flex-1 lg:mx-auto lg:w-1/2">
          <img
            class="inset-0 h-full w-full bg-right object-cover"
            alt=""
            src="@/assets/images/greenlane.jpg"
          />
        </div>
        <div class="mb-10 max-w-xl flex-1 px-10 md:mx-auto md:mb-12 lg:w-1/2 lg:max-w-2xl">
          <h2
            class="my-6 max-w-full scroll-mt-[80px] text-left font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto md:text-center"
            id="speed-matters"
          >
            Speed Matters
          </h2>
          <ul class="zmd:text-center list-disc text-left">
            <li class="mb-6 text-base text-gray-700 md:text-lg">
              Lionel was killed on a Green Lane. Green Lanes are intended principally for enjoyment
              by pedestrians, cyclists and horse riders. Motor vehicles should try to keep off these
              lanes and should only use them if absolutely necessary for access or for sightseeing.
            </li>
            <li class="mb-6 text-base text-gray-700 md:text-lg">
              The speed limit on Green Lanes is 15 mph.
            </li>
            <li class="mb-6 text-base text-gray-700 md:text-lg">
              The speed limit is a limit, not a target.
            </li>
            <li class="mb-6 text-base text-gray-700 md:text-lg">
              An increase of speed from 30 mph to just 35 mph adds an extra 21 feet (6.4 metres) to
              your braking distance.
            </li>
            <li class="mb-6 text-base text-gray-700 md:text-lg">
              The speed limit assumes ideal driving conditions. You must take other factors into
              account, like weather conditions and visibility on country lanes being limited by
              overgrown hedgerows. Beware also that on country lanes the entrances to properties are
              often concealed.
            </li>
            <li class="mb-6 text-base text-gray-700 md:text-lg">
              Remember that you share the road with other users, including pedestrians, cyclists,
              horses, wildlife and pets.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.xxx {
  /* img {
    display: block;
    box-shadow: 0 0 20px 20px white;
  }

  .image-container {
    display: inline-block;
    position: relative;
  } */

  img {
    mask-image: linear-gradient(90deg, transparent 10%, white 80%);
    background-color: white;
  }
}
</style>
