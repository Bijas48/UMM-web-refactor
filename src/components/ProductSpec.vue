<script setup>
import productGif from '@/assets/images/HomeView/index5.gif'
import { Icon } from '@iconify/vue'
</script>

<template>
  <section id="Product" class="py-16">
    <div class="container mx-auto">
      <!-- Title and Subtitle -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0 }"
        :variants="{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 }
        }"
        :visible="{ opacity: 1, y: 0 }"
        class="flex flex-col items-center"
      >
        <h2 class="text-3xl font-semibold text-gray-800 mb-4">Product Specification</h2>
        <div class="text-lg font-serif mb-8"></div>
      </div>
      <!-- Features Row -->
      <div class="flex flex-wrap justify-around">
        <!-- Left Column -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -100 }"
          :enter="{ opacity: 1, x: 0 }"
          :variants="{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -100 }
          }"
          :visible="{ opacity: 1, x: 0 }"
          class="grid w-full md:w-1/3 lg:w-1/4 content-evenly"
        >
          <div class="flex flex-col md:flex-row items-center mb-4">
            <div class="text-4xl md:mr-4 mb-2 md:mb-0">
              <Icon icon="et:map-pin" class="w-10 h-10" />
              <!-- Set fixed size for icons -->
            </div>
            <p class="text-justify text-sm font-serif px-5">
              Our product is originated from its source in South Sumatera, Jambi, South Kalimantan,
              East Kalimantan, Bengkulu, Indonesia.
            </p>
          </div>
          <div class="flex flex-col md:flex-row items-center mb-4">
            <div class="text-4xl md:mr-4 mb-2 md:mb-0">
              <Icon icon="et:lightbulb" class="w-10 h-10" />
              <!-- Set fixed size for icons -->
            </div>
            <p class="text-justify text-sm font-serif px-5">
              Our product is suitable for electrical power generator as well for industrial
              consumption, cement industry and chemical.
            </p>
          </div>
        </div>

        <!-- Image in Center -->
        <div class="hidden md:block w-full md:w-1/3 lg:w-2/5" v-motion-pop-visible>
          <div class="grid place-content-center h-full">
            <img :src="productGif" alt="Feature Image" />
          </div>
        </div>

        <!-- Right Column -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 100 }"
          :enter="{ opacity: 1, x: 0 }"
          :variants="{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 }
          }"
          :visible="{ opacity: 1, x: 0 }"
          class="grid w-full md:w-1/3 lg:w-1/4 content-evenly"
        >
          <div class="flex flex-col md:flex-row items-center mb-4">
            <div class="text-4xl md:mr-4 mb-2 md:mb-0">
              <Icon icon="et:global" class="w-10 h-10" />
              <!-- Set fixed size for icons -->
            </div>
            <p class="text-justify text-sm font-serif px-5">
              Indonesia is our biggest market. This is proven by the long-term contracts with our
              clients.
            </p>
          </div>
          <div class="flex flex-col md:flex-row items-center mb-4">
            <div class="text-4xl md:mr-4 mb-2 md:mb-0">
              <Icon icon="et:linegraph" class="w-10 h-10" />
              <!-- Set fixed size for icons -->
            </div>
            <p class="text-justify text-sm font-serif px-5">
              We always motivate ourselves to constantly improve the quality of our product and
              services in order to better meet our respected clients demand.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
