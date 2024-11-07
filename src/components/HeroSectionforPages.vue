<script setup>
defineProps({
  subHeader: {
    type: String,
    default: 'About UMM'
  },
  srcImage: {
    type: String,
    default: 'AboutView/header-bg.jpg'
  },
  overlay: {
    type: Boolean,
    default: false
  }
})

// const resolveImagePath = (path) => {
//   return new URL(`../assets/images/${path}`, import.meta.url).href
// }
const resolveImagePath = (path) => {
  return `/images/${path}`
}
</script>

<template>
  <section
    class="relative bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${resolveImagePath(srcImage)})` }"
  >
    <!-- Overlay: Only visible if 'overlay' prop is true -->
    <div v-if="overlay" class="absolute inset-0 z-10 bg-black bg-opacity-50"></div>

    <!-- Content -->
    <div
      class="relative z-20 mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center"
      v-motion-slide-visible-top
    >
      <div class="mx-auto max-w-xl text-center">
        <h1 class="text-3xl text-white sm:mb-3 sm:text-5xl lg:text-6xl">{{ subHeader }}</h1>
      </div>
    </div>
  </section>
</template>

<!-- <template>
  <section
    class="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(./src/assets/images/${srcImage})` }"
  >
    
    <div
      class="relative z-20 mx-auto max-w-screen-xl px-4 pb-16 pt-32 lg:flex lg:min-h-screen lg:items-center"
    >
      <div class="mx-auto max-w-xl text-center">
        <h1 class="text-3xl text-white sm:mb-3 sm:text-5xl lg:text-6xl">{{ subHeader }}</h1>
      </div>
    </div>
  </section>
</template> -->
