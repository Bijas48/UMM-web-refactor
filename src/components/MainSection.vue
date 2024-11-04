<script setup>
import logo_umm from '@/assets/images/logo/umm.png'
import mainPhoto1 from '@/assets/images/HomeView/index1.jpg'
import mainPhoto2 from '@/assets/images/HomeView/index2.jpg'
import mainPhoto3 from '@/assets/images/HomeView/index3.jpg'

// import { ref } from 'vue'
</script>

<template>
  <section id="mainSection" class="mt-5 py-12">
    <div
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{ opacity: 1, y: 0 }"
      :variants="{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 }
      }"
      :visible="{ opacity: 1, y: 0 }"
      class="container mx-auto"
    >
      <div class="flex flex-wrap justify-center">
        <div class="w-full text-center lg:w-2/3">
          <h2 class="mb-11 text-3xl font-bold">
            <img :src="logo_umm" alt="Logo" class="mx-auto" width="320" />
          </h2>
          <p class="px-5 font-serif text-lg italic text-gray-900">
            PT. Usaha Maju Makmur is a coal trading company based in Jakarta. Initially, this
            company was established in June 2010. As a growing company, we have established
            partnerships with a number of qualified mining companies, particularly within South
            Sumatra, Jambi, South Kalimantan, East Kalimantan, and Bengkulu, Indonesia.
          </p>
        </div>
      </div>

      <div class="mt-8 flex justify-center">
        <a href="#Product" class="text-4xl text-gray-700 transition hover:text-red-500"
          ><i class="fa fa-angle-down"></i
        ></a>
      </div>

      <div class="mt-12 flex flex-wrap justify-around">
        <!-- Our Client -->
        <div class="mb-6 w-10/12 md:w-2/5 lg:w-3/12">
          <div class="team-item">
            <div class="team-image relative">
              <img :src="mainPhoto1" alt="Client Photo" class="w-full rounded-lg object-cover" />
              <div
                v-motion
                :initial="{ opacity: 0, y: 10 }"
                :enter="{ opacity: 0, y: 10 }"
                :hovered="{ opacity: 1, y: 0, scale: 1 }"
                class="team-detail absolute inset-0 flex items-center justify-center rounded-lg bg-gray-800 bg-opacity-50 text-white"
              >
                <h5 class="font-alt text-xl">OUR CLIENT</h5>
              </div>
            </div>
            <div class="team-descr mt-4 text-center">
              <div class="text-xl font-semibold">Our Client</div>
            </div>
          </div>
        </div>

        <!-- Our Supplier -->
        <div class="mb-6 w-10/12 md:w-2/5 lg:w-3/12">
          <div class="team-item">
            <div class="team-image relative">
              <img :src="mainPhoto2" alt="Supplier Photo" class="w-full rounded-lg object-cover" />
              <div
                v-motion
                :initial="{ opacity: 0, y: 10 }"
                :enter="{ opacity: 0, y: 10 }"
                :hovered="{ opacity: 1, y: 0, scale: 1 }"
                class="team-detail absolute inset-0 flex items-center justify-center rounded-lg bg-gray-800 bg-opacity-50 text-white"
              >
                <h5 class="font-alt text-xl">OUR SUPPLIER</h5>
              </div>
            </div>
            <div class="team-descr mt-4 text-center">
              <div class="text-xl font-semibold">Our Supplier</div>
            </div>
          </div>
        </div>

        <!-- Scope of Service -->
        <div class="mb-6 w-10/12 md:w-2/5 lg:w-3/12">
          <div class="team-item">
            <div class="team-image relative">
              <img :src="mainPhoto3" alt="Service Photo" class="w-full rounded-lg object-cover" />
              <div
                v-motion
                :initial="{ opacity: 0, y: 10 }"
                :enter="{ opacity: 0, y: 10 }"
                :hovered="{ opacity: 1, y: 0, scale: 1 }"
                class="team-detail absolute inset-0 flex items-center justify-center rounded-lg bg-gray-800 bg-opacity-50 text-white"
              >
                <h5 class="font-alt text-xl">SCOPE OF SERVICE</h5>
              </div>
            </div>
            <div class="team-descr mt-4 text-center">
              <div class="text-xl font-semibold">Scope Of Service</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
