<template>
  <div class="relative pb-[122%]">
    <div
      class="polaroid absolute inset-0 h-full w-full rounded-lg bg-white p-[5%] pb-[27%] shadow-2xl"
    >
      <div class="relative h-full w-full overflow-hidden">
        <img
          :alt="alt"
          :src="getImageUrl()"
          class="absolute inset-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        />
      </div>
      <div :class="textClass" class="font-cursive h-[27%] w-full text-black">
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          <defs>
            <pattern
              id="pattern"
              x="0%"
              y="0%"
              width="27"
              height="18"
              patternUnits="userSpaceOnUse"
            >
              <image x="0" y="0" width="27" height="18" href="/src/assets/images/grunge.jpg" />
            </pattern>

            <mask id="mask" x="0" y="0" width="1" height="1" maskUnits="objectBoundingBox">
              <rect x="0" y="0" width="100" height="100" fill="url(#pattern)"></rect>
            </mask>
          </defs>
          <text
            dominant-baseline="middle"
            fill="currentColor"
            font-size="10"
            text-anchor="middle"
            x="50"
            y="15"
            mask="url(#mask)"
          >
            {{ text }}
          </text>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  src: { type: String, required: true },
  alt: String,
  text: String,
  textClass: String
})

const getImageUrl = () => new URL(`../${props.src}`, import.meta.url).href
</script>

<style scoped></style>
