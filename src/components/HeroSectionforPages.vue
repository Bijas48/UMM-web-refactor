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
</script>

<template>
  <section
    class="relative bg-center bg-cover bg-no-repeat"
    :style="{ backgroundImage: `url(./src/assets/images/${srcImage})` }"
  >
    <!-- Overlay: Only visible if 'overlay' prop is true -->
    <div v-if="overlay" class="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

    <!-- Content -->
    <div class="relative z-20 mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
      <div class="mx-auto max-w-xl text-center">
        <h1 class="text-white text-3xl sm:text-5xl sm:mb-3 lg:text-6xl">{{ subHeader }}</h1>
      </div>
    </div>
  </section>
</template>
