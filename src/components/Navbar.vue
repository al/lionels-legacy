<template>
  <header class="absolute sticky inset-x-0 top-0 z-50 bg-orange-600 opacity-90 shadow">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="text-sm font-semibold leading-6 text-white hover:underline hover:underline-offset-4"
          >{{ item.name }}</a
        >
      </div>
    </nav>
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <button
            type="button"
            class="text-orange-accent-400 -m-2.5 rounded-md p-2.5 transition-colors duration-200 hover:text-orange-900"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="text-orange-accent-400 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors duration-200 hover:bg-gray-50 hover:text-orange-900"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'The Law', href: '#the-law' },
  { name: 'What to do', href: '#what-to-do' },
  { name: 'Speed Matters', href: '#speed-matters' },
  { name: "Lionel's Story", href: '#lionels-story' },
  { name: 'Get involved', href: '#get-involved' },
  { name: 'Resources', href: '#resources' },
  { name: 'Stay in touch', href: '#stay-in-touch' }
]

const mobileMenuOpen = ref(false)
</script>

<style scoped></style>
