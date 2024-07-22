<template>
  <div class="relative -mt-20 min-h-[450px] pt-20">
    <img
      class="absolute inset-0 h-full w-full bg-right object-cover"
      alt="Lionel the cat"
      src="@/assets/images/lionel-1.jpg"
    />
    <div class="relative w-full p-10 md:w-1/2 xl:w-1/3">
      <div class="rounded-lg bg-gray-900 bg-opacity-70 p-10">
        <h2
          class="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none"
        >
          Lionel was killed by a driver who failed to stop
        </h2>
        <p class="mb-4 max-w-xl text-base text-gray-400 md:text-lg">
          Jersey&rsquo;s law has changed and drivers are now required to report collisions involving
          cats.
        </p>
        <p class="mb-4 max-w-xl text-base text-gray-400 md:text-lg">
          Failure to do so is a punishable offence
        </p>
        <a
          class="inline-flex items-center font-semibold tracking-wider text-orange-accent-400 transition-colors duration-200 hover:text-orange-accent-400"
          aria-label=""
          href="#the-law"
        >
          Learn more
          <svg
            class="ml-2 inline-block w-3"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path
              d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
