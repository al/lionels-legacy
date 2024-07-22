<template>
  <div
    class="mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:pt-20"
  >
    <div class="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
      <h2
        id="the-law"
        class="mb-6 max-w-full scroll-mt-[80px] text-3xl font-bold leading-none tracking-tight text-gray-800 sm:text-4xl md:mx-auto"
      >
        <span class="relative inline-block">
          <svg
            class="absolute left-0 top-0 z-0 -ml-20 -mt-8 hidden w-32 text-blue-gray-100 sm:block lg:-ml-28 lg:-mt-10 lg:w-32"
            fill="currentColor"
            viewBox="0 0 52 24"
          >
            <defs>
              <pattern
                id="27df4f81-c854-45de-942a-fe90f7a300f9"
                height=".30"
                width=".135"
                x="0"
                y="0"
              >
                <circle
                  cx="1"
                  cy="1"
                  r=".7"
                />
              </pattern>
            </defs>
            <rect
              fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
              height="24"
              width="52"
            />
          </svg>
          <span class="relative">Jersey&rsquo;s</span>
        </span>
        road traffic law has changed
      </h2>
      <p class="mb-12 text-base text-gray-700 md:text-lg">
        As a motorist you now have explicit duties if your car hits a cat.
      </p>

      <p class="mb-12 text-base text-gray-700 md:text-lg">
        Under the updated
        <a
          class="text-orange-accent-400 transition-colors duration-200 hover:text-orange-900"
          aria-label="Open the Road Traffic (Jersey) Law 1956 in a new window"
          href="https://www.jerseylaw.je/laws/current/Pages/25.550.aspx#_Toc151627514"
          target="_blank"
          >regulations<ArrowTopRightOnSquareIcon class="inline-block w-3 pb-2" /> </a
        >, the driver of a motor vehicle on a public road who thinks he or she has hit or run over a
        cat must do two things:
      </p>
      <ol
        class="mb-12 list-decimal px-10 text-base text-gray-700 marker:text-orange-accent-400 md:text-lg"
      >
        <li class="mb-2">
          The driver must stop &ldquo;as soon as it is safe and reasonably practicable to do
          so&rdquo;; and
        </li>
        <li>
          The driver must notify either a person who is responsible for caring for the cat or the
          JSPCA noting the location of the accident.
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup>
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/20/solid'
</script>
