<template>
  <div class="relative pb-[122%]">
    <div
      class="polaroid absolute inset-0 h-full w-full rounded-lg bg-white p-[5%] pb-[27%] shadow-2xl"
    >
      <div class="relative h-full w-full overflow-hidden">
        <img
          class="absolute inset-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"
          :alt="alt"
          :src="getImageUrl()"
        />
      </div>
      <div
        class="h-[27%] w-full font-cursive text-black"
        :class="textClass"
      >
        <svg
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern
              id="pattern"
              height="18"
              patternUnits="userSpaceOnUse"
              width="27"
              x="0%"
              y="0%"
            >
              <image
                height="18"
                href="/src/assets/images/grunge.jpg"
                width="27"
                x="0"
                y="0"
              />
            </pattern>

            <mask
              id="mask"
              height="1"
              maskUnits="objectBoundingBox"
              width="1"
              x="0"
              y="0"
            >
              <rect
                fill="url(#pattern)"
                height="100"
                width="100"
                x="0"
                y="0"
              />
            </mask>
          </defs>
          <text
            dominant-baseline="middle"
            fill="currentColor"
            font-size="10"
            mask="url(#mask)"
            text-anchor="middle"
            x="50"
            y="15"
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
  alt: { default: null, type: String },
  src: { required: true, type: String },
  text: { default: null, type: String },
  textClass: { default: null, type: String },
})

const getImageUrl = () => new URL(`../${props.src}`, import.meta.url).href
</script>
