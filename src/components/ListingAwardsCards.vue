<script setup>
import awards from '@/assets/data/awards.json'
</script>

<template>
  <section class="my-16">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3">
        <div
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0 }"
          :variants="{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 }
          }"
          :visible="{ opacity: 1, y: 0 }"
          v-for="(award, index) in awards"
          :key="index"
          class="p-4"
        >
          <img
            :src="award.imgPath"
            :alt="award.title"
            class="h-auto w-full rounded-t-lg object-cover"
          />
          <div class="p-4">
            <h3 class="text-center text-lg font-bold text-gray-800">
              {{ award.title }}
            </h3>
            <h4 class="text-center text-lg font-bold text-gray-800">
              {{ award.year }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
