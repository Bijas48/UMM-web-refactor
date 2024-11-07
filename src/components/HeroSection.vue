<script setup>
import bg_hero from '/images/HomeView/bg-web.png'
</script>

<template>
  <section class="bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: `url(${bg_hero})` }">
    <!-- <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"> -->
    <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
      <div
        v-motion
        :initial="{ opacity: 0, y: -100 }"
        :enter="{ opacity: 1, y: 0 }"
        :variants="{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -100 }
        }"
        :visible="{ opacity: 1, y: 0 }"
        class="mx-auto max-w-xl text-center"
      >
        <h1 class="text-3xl font-extrabold text-white sm:mb-3 sm:text-5xl lg:text-6xl">
          GREAT SOURCE
        </h1>
        <h1
          class="my-3 text-3xl font-extrabold text-white sm:my-5 sm:text-5xl lg:my-11 lg:text-6xl"
        >
          GREAT ENERGY
        </h1>
        <h1 class="text-3xl font-extrabold text-white sm:mt-3 sm:text-5xl lg:text-6xl">
          GREAT FUTURE
        </h1>

        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <a
            class="block w-full rounded border border-white bg-transparent px-12 py-3 text-sm font-medium text-white shadow hover:bg-white hover:text-gray-700 focus:outline-none focus:ring active:bg-gray-400 sm:w-auto"
            href="#mainSection"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- <template>
  <section
    class="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${bg_hero})` }"
  >
    <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
      <div class="mx-auto max-w-xl text-center">
        <h1 class="text-3xl font-extrabold text-white sm:mb-3 sm:text-5xl lg:text-6xl">
          GREAT SOURCE
        </h1>
        <h1
          class="my-3 text-3xl font-extrabold text-white sm:my-5 sm:text-5xl lg:my-11 lg:text-6xl"
        >
          GREAT ENERGY
        </h1>
        <h1 class="text-3xl font-extrabold text-white sm:mt-3 sm:text-5xl lg:text-6xl">
          GREAT FUTURE
        </h1>

        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <a
            class="block w-full rounded border border-white bg-transparent px-12 py-3 text-sm font-medium text-white shadow hover:bg-white hover:text-gray-700 focus:outline-none focus:ring active:bg-gray-400 sm:w-auto"
            href="#mainSection"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
</template> -->
