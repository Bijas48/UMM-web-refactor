<script setup>
import listKanan from '@/assets/images/PerformanceView/jawkal.png'
import listKiri from '@/assets/images/PerformanceView/sumatera.png'
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
        class="w-full"
      >
        <h2 class="my-6 text-center text-2xl font-semibold text-gray-800 md:text-3xl">
          MAP LOCATION - INDONESIA
        </h2>
        <div class="border shadow-lg">
          <iframe
            class="h-[80vh] w-full p-6"
            src="https://www.google.com/maps/d/u/0/embed?mid=1MaCcGEoKEJ1Bkllw5KrgGKssk03S-28&ehbc=2E312F&noprof=1"
          ></iframe>
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0 }"
        :variants="{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 }
        }"
        :visible="{ opacity: 1, y: 0 }"
        class="grid w-full grid-cols-1 gap-6 md:grid-cols-2"
      >
        <div class="justify-items-center px-8 pb-2 pt-6 md:py-8">
          <img class="w-96" :src="listKiri" alt="List Sumatera" />
        </div>
        <div class="justify-items-center px-8 py-2 md:py-8">
          <img class="w-96" :src="listKanan" alt="List Jawa dan Kalimantan" />
        </div>
      </div>
    </div>
  </section>
</template>
