<template>
  <div
    id="speed-matters-container"
    class="relative mt-6 px-4 md:px-24 lg:px-8"
  >
    <div class="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8">
      <div class="flex flex-col overflow-x-hidden sm:overflow-x-visible lg:flex-row-reverse">
        <div class="mb-10 w-full flex-1">
          <img
            class="h-full w-full bg-left object-cover lg:hidden"
            alt="Green Land and 15 mph road signs"
            src="@/assets/images/greenlane.jpg"
          />
        </div>
        <div class="z-10 mb-10 max-w-xl flex-1 md:mx-auto md:mb-12 lg:w-1/2 lg:max-w-2xl">
          <h2
            id="speed-matters"
            class="my-6 max-w-full scroll-mt-[80px] font-sans text-3xl font-bold leading-none tracking-tight text-gray-800 sm:text-4xl md:mx-auto md:text-center"
          >
            Speed Matters
          </h2>
          <p class="mb-6 text-base text-gray-700 md:text-lg">
            Green Lanes are intended principally for enjoyment by pedestrians, cyclists and horse
            riders. Motor vehicles should try to keep off these lanes and should only use them if
            absolutely necessary for access or for sightseeing.
          </p>
          <p class="mb-6 text-base text-gray-700 md:text-lg">
            The speed limit on Green Lanes is 15 mph.
          </p>
          <p class="mb-6 text-base text-gray-700 md:text-lg">
            The speed limit is a limit, not a target.
          </p>

          <p class="mb-6 text-base text-gray-700 md:text-lg">
            Learn more about Green Lanes from
            <a
              class="font-semibold text-orange-accent-400 transition-colors duration-200 hover:text-orange-900"
              aria-label=""
              href="https://statesassembly.gov.je/assemblypropositions/2020/p.79-2020.pdf"
              >the States Assembly</a
            >
            and at
            <a
              class="font-semibold text-orange-accent-400 transition-colors duration-200 hover:text-orange-900"
              aria-label=""
              href="http://www.jersey.co.uk/jsyinfo/grenlane.html"
              >jersey.co.uk</a
            >.
          </p>

          <p class="mb-6 text-base text-gray-700 md:text-lg">
            Lionel was killed on a stretch of Green Lane where three field entrances and the entry
            point to another Green Lane converge. The injuries on his body indicate he was hit hard
            and at speed. This area of the Green Lane should perhaps be the safest given the
            entrances and secondary Green Lane of which motorists must take heed. The collision may
            not have been avoidable, but the level of injury may have been different.
          </p>

          <p class="mb-6 text-base text-gray-700 md:text-lg">
            We hope that by making people aware of the requirements of the road traffic law and the
            usage of Green Lanes, further cat lives will be saved on our roads.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* stylelint-disable-next-line media-query-no-invalid */
@media screen(lg) {
  #speed-matters-container {
    background: linear-gradient(
        to left,
        rgba(250 250 250 / 0%) 5%,
        rgba(250 250 250 / 100%) 50%,
        rgba(255 255 255 / 100%) 100%
      ),
      linear-gradient(to left, rgba(0 0 0 / 0%) 0, rgba(0 0 0 / 50%) 50%),
      url('@/assets/images/greenlane.jpg');
    background-position: right;
    background-size: cover;
  }
}
</style>
