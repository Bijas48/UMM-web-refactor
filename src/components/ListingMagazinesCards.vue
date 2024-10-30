<script setup>
import magazines from '@/assets/data/magazines.json'
</script>

<template>
  <section class="my-16">
    <div class="container mx-auto">
      <div
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0 }"
        :variants="{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 }
        }"
        :visible="{ opacity: 1, y: 0 }"
        class="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-6 p-6 pt-10"
      >
        <div v-for="(magazine, index) in magazines" :key="index" class="rounded-lg max-w-96">
          <!-- Image -->
          <div>
            <img :src="magazine.img" alt="Magazine image" class="h-full object-cover rounded-sm" />
          </div>
          <!-- Title and Button -->
          <div class="p-10">
            <a
              :href="magazine.linkDrive"
              class="w-full py-3 px-4 flex justify-center items-center text-center gap-x-2 text-sm font-serif rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
