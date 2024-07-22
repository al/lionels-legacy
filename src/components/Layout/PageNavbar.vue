<template>
  <nav class="sticky inset-x-0 top-0 z-50 bg-orange-600/85 shadow backdrop-blur-sm">
    <div
      id="global-nav"
      class="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:hidden">
        <button
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          type="button"
          @click="mobileMenuOpen = true"
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
          v-for="item in navigation"
          :key="item.name"
          class="text-sm font-semibold leading-6 text-white hover:underline hover:underline-offset-4"
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
            type="button"
            @click="mobileMenuOpen = false"
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
                v-for="item in navigation"
                :key="item.name"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-orange-accent-400 transition-colors duration-200 hover:bg-gray-50 hover:text-orange-900"
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
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'

const navigation = [
  { name: 'About Lionel', href: { name: 'homePage', hash: '#about-lionel' } },
  { name: 'What you should know', href: { name: 'homePage', hash: '#what-to-know' } },
  { name: 'Spread the word', href: { name: 'homePage', hash: '#spread-the-word' } },
  { name: 'Speed Matters', href: { name: 'homePage', hash: '#speed-matters' } },
  { name: 'Resources', href: { name: 'homePage', hash: '#resources' } },
  { name: 'Build a Poster', href: { name: 'posterBuilder' } },
]

const mobileMenuOpen = ref(false)
</script>
