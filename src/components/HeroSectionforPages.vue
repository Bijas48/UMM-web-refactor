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
    class="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(./src/assets/images/${srcImage})` }"
  >
    <!-- Content -->
    <div
      class="relative z-20 mx-auto max-w-screen-xl px-4 pb-16 pt-32 lg:flex lg:min-h-screen lg:items-center"
    >
      <div class="mx-auto max-w-xl text-center">
        <h1 class="text-3xl text-white sm:mb-3 sm:text-5xl lg:text-6xl">{{ subHeader }}</h1>
      </div>
    </div>
  </section>
</template>

