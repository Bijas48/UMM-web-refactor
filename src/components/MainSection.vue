<script setup>
import logo_umm from '@/assets/images/logo/umm.png'
</script>

<template>
  <section id="mainSection" class="py-12 mt-5">
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-center">
        <div class="w-full lg:w-2/3 text-center">
          <h2 class="text-3xl font-bold mb-11">
            <img :src="logo_umm" alt="Logo" class="mx-auto" width="320" />
          </h2>
          <p class="text-lg font-serif italic text-gray-900 px-5">
            PT. Usaha Maju Makmur is a coal trading company based in Jakarta. Initially, this
            company was established in June 2010. As a growing company, we have established
            partnerships with a number of qualified mining companies, particularly within South
            Sumatra, Jambi, South Kalimantan, East Kalimantan, and Bengkulu, Indonesia.
          </p>
        </div>
      </div>
      <div class="flex justify-center mt-8">
        <a href="#Product" class="text-4xl text-gray-700 hover:text-red-500 transition"
          ><i class="fa fa-angle-down"></i
        ></a>
      </div>
    </div>
  </section>
</template>
