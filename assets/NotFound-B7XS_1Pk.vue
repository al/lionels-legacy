<template>
  <div class="flex h-screen items-center justify-center overflow-hidden bg-white">
    <div
      class="container flex flex-col items-center justify-center px-5 text-gray-700 md:flex-row-reverse"
    >
      <div class="max-w-lg">
        <img src="@/assets/images/404.svg" />
      </div>
      <div class="max-w-md text-center">
        <div class="font-dark text-5xl font-semibold">404</div>
        <p class="my-10 text-2xl font-light leading-normal md:text-3xl">
          Sorry we couldn't find that page.
        </p>

        <a
          class="inline rounded-lg border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition duration-200 hover:bg-orange-900 focus:shadow-outline focus:outline-none"
          href="/"
        >
          Back to homepage
        </a>
      </div>
    </div>
  </div>
</template>
