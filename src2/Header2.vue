<template>
  <div class="relative">
    <img
      src="@/assets/images/lionel.jpg"
      class="absolute inset-0 h-full w-full object-cover"
      alt=""
    />
    <div class="relative bg-gray-900 bg-opacity-70">
      <div
        class="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20"
      >
        <div class="flex flex-col items-center justify-between xl:flex-row">
          <div class="mb-12 w-full max-w-xl xl:mb-0 xl:w-7/12 xl:pr-16">
            <h2
              class="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none"
            >
              Lionel was killed by a<br class="hidden md:block" />
              driver who failed to stop
            </h2>
            <p class="mb-4 max-w-xl text-base text-gray-400 md:text-lg">
              Jersey law has changed and drivers are now required to report collisions involving
              cats.
            </p>
            <p class="mb-4 max-w-xl text-base text-gray-400 md:text-lg">
              Failure to do so is a punishable offence
            </p>
            <a
              href="/"
              aria-label=""
              class="text-teal-accent-400 hover:text-orange-accent-400 inline-flex items-center font-semibold tracking-wider transition-colors duration-200"
            >
              Learn more
              <svg class="ml-2 inline-block w-3" fill="currentColor" viewBox="0 0 12 12">
                <path
                  d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
