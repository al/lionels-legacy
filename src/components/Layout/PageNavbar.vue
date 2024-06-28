<template>
  <nav class="sticky inset-x-0 top-0 z-50 bg-orange-600/85 shadow backdrop-blur-sm">
    <div
      class="flex items-center justify-between p-6 lg:px-8"
      id="global-nav"
      aria-label="Global"
    >
      <div class="flex lg:hidden">
        <button
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          @click="mobileMenuOpen = true"
          type="button"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon
            class="h-6 w-6"
            aria-hidden="true"
          />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <RouterLink
          class="text-sm font-semibold leading-6 text-white hover:underline hover:underline-offset-4"
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
        >
          {{ item.name }}
        </RouterLink>
      </div>
    </div>
    <Dialog
      class="lg:hidden"
      :open="mobileMenuOpen"
      @close="mobileMenuOpen = false"
    >
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <button
            class="-m-2.5 rounded-md p-2.5 text-orange-accent-400 transition-colors duration-200 hover:text-orange-900"
            @click="mobileMenuOpen = false"
            type="button"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon
              class="h-6 w-6"
              aria-hidden="true"
            />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <RouterLink
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-orange-accent-400 transition-colors duration-200 hover:bg-gray-50 hover:text-orange-900"
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
              >
                {{ item.name }}
              </RouterLink>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Home 28/06', href: { name: 'homePage0628' } },
  { name: 'Home 25/06', href: { name: 'homePage0625' } },
  { name: 'Home 24/06 b', href: { name: 'homePage0624b' } },
  { name: 'Home 24/06 a', href: { name: 'homePage0624a' } },
  { name: 'Home 20/06', href: { name: 'homePage0620' } },
]

// const navigation = [
//   { name: 'Home', href: { name: 'homePage' } },
//   { name: 'Old', href: { name: 'homePage1' } },
//   { name: 'Poster', href: { name: 'posterMaker' } },
//   { name: 'The Law', href: { name: 'homePage', hash: '#the-law' } },
//   { name: 'What to do', href: { name: 'homePage', hash: '#what-to-do' } },
//   { name: 'Speed Matters', href: { name: 'homePage', hash: '#speed-matters' } },
//   { name: "Lionel's Story", href: { name: 'homePage', hash: '#lionels-story' } },
//   { name: 'Get involved', href: { name: 'homePage', hash: '#get-involved' } },
//   { name: 'Resources', href: { name: 'homePage', hash: '#resources' } },
//   { name: 'Stay in touch', href: { name: 'homePage', hash: '#stay-in-touch' } },
// ]

const mobileMenuOpen = ref(false)
</script>

<style scoped></style>
