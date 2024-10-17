<script setup>
import bg_hero from '@/assets/images/HomeView/bg-web.png'
</script>

<template>
  <section class="bg-center bg-cover bg-no-repeat" :style="{ backgroundImage: `url(${bg_hero})` }">
    <!-- <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"> -->
    <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
      <div class="mx-auto max-w-xl text-center">
        <h1 class="text-white text-3xl font-extrabold sm:text-5xl sm:mb-3 lg:text-6xl">
          GREAT SOURCE
        </h1>
        <h1
          class="text-white text-3xl my-3 font-extrabold sm:text-5xl sm:my-5 lg:text-6xl lg:my-11"
        >
          GREAT ENERGY
        </h1>
        <h1 class="text-white text-3xl font-extrabold sm:text-5xl sm:mt-3 lg:text-6xl">
          GREAT FUTURE
        </h1>

        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <a
            class="block w-full rounded border border-white bg-transparent px-12 py-3 text-sm font-medium text-white shadow hover:bg-white hover:text-gray-700 focus:outline-none focus:ring active:bg-gray-400 sm:w-auto"
            href="#mainSection"
          >
            Learn More
          </a>

          <!-- <a
            class="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
            href="#"
          >
            Learn More
          </a> -->
        </div>
      </div>
    </div>
  </section>
</template>
