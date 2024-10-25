<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

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

const animatedElement = ref(null)
const isVisible = ref(false)

useIntersectionObserver(animatedElement, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    isVisible.value = true
  }
})
</script>

<template>
  <section
    class="relative bg-fixed bg-center pt-0 pb-0"
    :style="{ backgroundImage: `url(./src/assets/images/${srcImage})` }"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black opacity-60"></div>

    <div class="relative py-36">
      <div
        ref="animatedElement"
        :class="{
          'animate-showupclock': isVisible
        }"
        class="container mx-auto transition-opacity duration-500"
      >
        <div class="flex justify-center">
          <div class="text-center">
            <span class="text-6xl text-white">❝</span>
          </div>
        </div>
        <div class="flex justify-center mt-8">
          <blockquote class="text-center text-white sm:text-2xl text-xl italic font-semibold px-5">
            {{ tagline }}
          </blockquote>
        </div>
      </div>
    </div>
  </section>
</template>
