<script setup>
import listKanan from '@/assets/images/PerformanceView/jawkal.png'
import listKiri from '@/assets/images/PerformanceView/sumatera.png'
</script>

<template>
  <section class="my-16">
    <div class="container mx-auto">
      <div class="w-full animate-showupclock">
        <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 text-center my-6">
          MAP LOCATION - INDONESIA
        </h2>
        <div class="border shadow-lg">
          <iframe
            class="w-full p-6"
            src="https://www.google.com/maps/d/u/0/embed?mid=1MaCcGEoKEJ1Bkllw5KrgGKssk03S-28&ehbc=2E312F&noprof=1"
            height="480"
          ></iframe>
        </div>
      </div>

      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="px-8 pb-2 pt-6 md:py-8 justify-items-center">
          <img class="w-96" :src="listKiri" alt="List Sumatera" />
        </div>
        <div class="px-8 py-2 md:py-8 justify-items-center">
          <img class="w-96" :src="listKanan" alt="List Jawa dan Kalimantan" />
        </div>
      </div>
    </div>
  </section>
</template>
