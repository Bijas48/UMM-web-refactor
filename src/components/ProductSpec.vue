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
        <h2 class="mb-4 text-3xl font-semibold text-gray-800">Product Specification</h2>
        <div class="mb-8 font-serif text-lg"></div>
      </div>
      <!-- Features Row -->
      <div class="flex flex-wrap justify-around text-sm">
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
          class="grid w-full content-evenly md:w-1/3 lg:w-1/4"
        >
          <div class="mb-4 flex flex-col items-center md:flex-row">
            <div class="mb-2 text-4xl md:mb-0 md:mr-4">
              <Icon icon="et:map-pin" class="h-10 w-10" />
            </div>
            <p class="px-5 text-justify font-serif">
              Our product is originated from its source in South Sumatera, Jambi, South Kalimantan,
              East Kalimantan, Bengkulu, Indonesia.
            </p>
          </div>
          <div class="mb-4 flex flex-col items-center md:flex-row">
            <div class="mb-2 text-4xl md:mb-0 md:mr-4">
              <Icon icon="et:lightbulb" class="h-10 w-10" />
            </div>
            <p class="px-5 text-justify font-serif">
              Our product is suitable for electrical power generator as well for industrial
              consumption, cement industry and chemical.
            </p>
          </div>
        </div>

        <!-- Image in Center -->
        <div class="hidden w-full md:block md:w-1/3 lg:w-2/5" v-motion-pop-visible>
          <div class="grid h-full place-content-center">
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
          class="grid w-full content-evenly md:w-1/3 lg:w-1/4"
        >
          <div class="mb-4 flex flex-col items-center md:flex-row">
            <div class="mb-2 text-4xl md:mb-0 md:mr-4">
              <Icon icon="et:global" class="h-10 w-10" />
            </div>
            <p class="px-5 text-justify font-serif">
              Indonesia is our biggest market. This is proven by the long-term contracts with our
              clients.
            </p>
          </div>
          <div class="mb-4 flex flex-col items-center md:flex-row">
            <div class="mb-2 text-4xl md:mb-0 md:mr-4">
              <Icon icon="et:linegraph" class="h-10 w-10" />
            </div>
            <p class="px-5 text-justify font-serif">
              We always motivate ourselves to constantly improve the quality of our product and
              services in order to better meet our respected clients demand.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
