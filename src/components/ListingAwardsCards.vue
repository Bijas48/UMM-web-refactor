<script setup>
import awards from '@/assets/data/awards.json'
</script>

<template>
  <!--Listing Awards-->
  <section class="my-16">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        <div v-for="(award, index) in awards" :key="index" class="p-4">
          <img
            :src="award.imgPath"
            :alt="award.title"
            class="w-full h-auto object-cover rounded-t-lg"
          />
          <div class="p-4">
            <h3 class="text-lg font-font-serif font-bold text-gray-800 text-center">
              {{ award.title }}
            </h3>
            <h4 class="text-lg font-font-serif font-bold text-gray-800 text-center">
              {{ award.year }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
