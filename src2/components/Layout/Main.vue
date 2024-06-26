<template>
  <div
    class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
  >
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <svg
        class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            stroke-width="0"
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
        />
      </svg>
    </div>
    <div
      id="get-the-poster"
      class="mx-auto grid max-w-2xl scroll-mt-10 grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
    >
      <div
        class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
      >
        <div class="lg:pr-4">
          <div class="lg:max-w-lg">
            <p class="text-base font-semibold leading-7 text-indigo-600">Spread the word</p>
            <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Make your own poster
            </h1>
            <p class="mt-6 text-xl leading-8 text-gray-700">
              If you too have lost a loved pet due to a driver who failed to stop, join the campaign
              to spread awareness by creating your own poster and sharing it within your community.
            </p>
          </div>
        </div>
      </div>
      <div
        class="-ml-12 -mt-12 h-full min-h-screen p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
      >
        <pdf-object
          class="h-full min-h-fit"
          :options="pdfOptions"
          url="poster-lionel.pdf"
        ></pdf-object>
        <!-- <img
          class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
          alt=""
        /> -->
      </div>
      <div
        class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
      >
        <div class="lg:pr-4">
          <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
            <p>Follow the simple steps below to create your own personalised poster.</p>
            <ul role="list" class="mt-8 space-y-8 text-gray-600">
              <li class="flex gap-x-3">
                <ChatBubbleLeftEllipsisIcon
                  class="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span
                  ><strong class="font-semibold text-gray-900">Enter your pet&rsquo;s name</strong>
                  <input class="block"
                /></span>
              </li>
              <li class="flex gap-x-3">
                <PhotoIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span
                  ><strong class="font-semibold text-gray-900">Upload a photo of them</strong>
                  <input type="file"
                /></span>
              </li>
              <li class="flex gap-x-3">
                <ArrowDownTrayIcon
                  class="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span
                  ><strong class="font-semibold text-gray-900"
                    >Review and download your poster</strong
                  >
                  <button
                    type="submit"
                    class="block flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Download
                  </button></span
                >
              </li>
            </ul>
            <p class="mt-8">
              Your poster will be a PDF and is designed for colour printing on A4 paper.
            </p>
            <p class="mt-6">
              Once downloaded you can print and distribute or display your poster in your local
              area.
            </p>
            <p class="mt-6">Please remember to respect the environment and your community.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PhotoIcon, ChatBubbleLeftEllipsisIcon, ArrowDownTrayIcon } from '@heroicons/vue/20/solid'

const pdfOptions = {
  pdfOpenParams: {
    navpanes: 0,
    statusbar: 0,
    toolbar: 1,
    view: 'FitV',
    height: '100%'
  },
  title: 'Information Poster - Lionel'
}
</script>
