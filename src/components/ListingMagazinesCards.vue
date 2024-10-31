<script setup>
import magazines from '@/assets/data/magazines.json'
</script>

<template>
  <section class="my-16">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 justify-items-center gap-6 p-6 pt-10 md:grid-cols-2">
        <div
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0 }"
          :variants="{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 }
          }"
          :visible="{ opacity: 1, y: 0 }"
          v-for="(magazine, index) in magazines"
          :key="index"
          class="max-w-96 rounded-lg"
        >
          <div>
            <img :src="magazine.img" alt="Magazine image" class="h-full rounded-sm object-cover" />
          </div>

          <div class="p-10">
            <a
              :href="magazine.linkDrive"
              class="flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-gray-800 px-4 py-3 text-center text-sm text-white hover:bg-gray-700"
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
