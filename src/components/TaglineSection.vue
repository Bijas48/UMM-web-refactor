<script setup>
defineProps({
  tagline: {
    type: String,
    default: 'Conduct Business With Integrity'
  },
  srcImage: {
    type: String,
    default: 'HomeView/index4.jpg'
  }
})
</script>

<template>
  <section
    class="relative bg-fixed bg-center pb-0 pt-0"
    :style="{ backgroundImage: `url(./src/assets/images/${srcImage})` }"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black opacity-60"></div>

    <div class="relative py-36">
      <div
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0 }"
        :variants="{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 }
        }"
        :visible="{ opacity: 1, y: 0 }"
        class="container mx-auto transition-opacity"
      >
        <div class="flex justify-center">
          <div class="text-center">
            <span class="text-6xl text-white">❝</span>
          </div>
        </div>
        <div class="mt-8 flex justify-center">
          <blockquote class="px-5 text-center text-xl font-semibold italic text-white sm:text-2xl">
            {{ tagline }}
          </blockquote>
        </div>
      </div>
    </div>
  </section>
</template>
