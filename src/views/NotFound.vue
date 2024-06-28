<template>
  <div class="h-screen overflow-hidden flex items-center justify-center bg-white">
    <div
      class="container flex flex-col md:flex-row-reverse items-center justify-center px-5 text-gray-700"
    >
      <div class="max-w-lg">
        <img src="@/assets/images/404.svg" />
      </div>
      <div class="text-center max-w-md">
        <div class="text-5xl font-dark font-semibold">404</div>
        <p class="text-2xl md:text-3xl my-10 font-light leading-normal">
          Sorry we couldn't find that page.
        </p>

        <a
          class="px-4 inline py-2 text-sm font-medium leading-5 shadow border border-transparent rounded-lg bg-orange-600 text-white transition duration-200 hover:bg-orange-900 focus:shadow-outline focus:outline-none"
          href="/"
        >
          Back to homepage
        </a>
      </div>
    </div>
  </div>
</template>
