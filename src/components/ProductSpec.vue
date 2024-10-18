<script setup>
import productGif from '@/assets/images/HomeView/index5.gif'
</script>

<template>
  <section id="Product" class="py-16">
    <div class="container mx-auto">
      <!-- Title and Subtitle -->
      <div class="flex flex-col items-center">
        <h2 class="text-3xl font-bold mb-4">Product Specification</h2>
        <div class="text-lg font-serif mb-8"></div>
      </div>
      <!-- Scroll Arrow -->
      <div class="flex justify-center mb-12">
        <a href="#updates" class="text-3xl">
          <i class="fa fa-angle-down"></i>
          <!-- font awesome font -->
        </a>
      </div>
      <!-- Features Row -->
      <div class="flex flex-wrap justify-between">
        <!-- Left Column -->
        <div class="w-full md:w-1/3 lg:w-1/4">
          <div class="mb-8">
            <div class="text-5xl mb-4">
              <i class="icon-map-pin"></i>
            </div>
            <p class="text-justify px-5">
              Our product is originated from its source in South Sumatera, Jambi, South Kalimantan,
              East Kalimantan, Bengkulu, Indonesia.
            </p>
          </div>
          <div>
            <div class="text-5xl mb-4">
              <i class="icon-lightbulb"></i>
            </div>
            <p class="text-justify px-5">
              Our product is suitable for electrical power generator as well for industrial
              consumption, cement industry and chemical.
            </p>
          </div>
        </div>
        <!-- Image in Center -->
        <div class="hidden md:block w-full md:w-1/3 lg:w-2/5 place-content-center">
          <div class="flex justify-center">
            <img :src="productGif" alt="Feature Image" />
          </div>
        </div>
        <!-- Right Column -->
        <div class="w-full md:w-1/3 lg:w-1/4">
          <div class="mb-8">
            <div class="text-5xl mb-4">
              <i class="icon-global"></i>
            </div>
            <p class="text-justify px-5">
              Indonesia is our biggest market. This is proven by the long-term contracts with our
              clients.
            </p>
          </div>
          <div>
            <div class="text-5xl mb-4">
              <i class="icon-linegraph"></i>
            </div>
            <p class="text-justify px-5">
              We always motivate ourselves to constantly improve the quality of our product and
              services in order to better meet our respected clients demand.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
