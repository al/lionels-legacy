<template>
  <div
    class="relative isolate overflow-hidden bg-gray-500 px-6 py-24 text-white sm:py-32 lg:overflow-visible lg:px-0"
  >
    <div
      id="resources"
      class="mx-auto grid max-w-2xl scroll-mt-10 grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
    >
      <div
        class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
      >
        <div class="lg:pr-4">
          <div class="lg:max-w-lg">
            <p class="text-base font-semibold leading-7 text-black">Why blah blah</p>
            <h1 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Resources</h1>
            <p class="mt-6 text-xl leading-8">Here are some links to useful resources.</p>
          </div>
        </div>
      </div>
      <div
        class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
      >
        <div class="lg:pr-4">
          <div class="max-w-xl text-base leading-7 lg:max-w-lg">
            <ul class="mt-6 text-xl leading-8">
              <li>
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui
                mi
              </li>
              <li>nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowTopRightOnSquareIcon, LockClosedIcon } from '@heroicons/vue/20/solid'
</script>
