<script setup>
import logo_umm from '@/assets/images/logo/umm.png'
import mainPhoto1 from '@/assets/images/HomeView/index1.jpg'
import mainPhoto2 from '@/assets/images/HomeView/index2.jpg'
import mainPhoto3 from '@/assets/images/HomeView/index3.jpg'

// import { ref } from 'vue'
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

      <div class="flex flex-wrap mt-12 justify-around">
        <!-- Our Client -->
        <div class="w-10/12 md:w-2/5 lg:w-3/12 mb-6">
          <div class="team-item">
            <div class="team-image relative">
              <img :src="mainPhoto1" alt="Client Photo" class="w-full object-cover rounded-lg" />
              <div
                class="team-detail absolute inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center text-white"
              >
                <h5 class="text-xl font-alt">OUR CLIENT</h5>
              </div>
            </div>
            <div class="team-descr text-center mt-4">
              <div class="text-xl font-semibold">Our Client</div>
            </div>
          </div>
        </div>

        <!-- Our Supplier -->
        <div class="w-10/12 md:w-2/5 lg:w-3/12 mb-6">
          <div class="team-item">
            <div class="team-image relative">
              <img :src="mainPhoto2" alt="Supplier Photo" class="w-full object-cover rounded-lg" />
              <div
                class="team-detail absolute inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center text-white"
              >
                <h5 class="text-xl font-alt">OUR SUPPLIER</h5>
              </div>
            </div>
            <div class="team-descr text-center mt-4">
              <div class="text-xl font-semibold">Our Supplier</div>
            </div>
          </div>
        </div>

        <!-- Scope of Service -->
        <div class="w-10/12 md:w-2/5 lg:w-3/12 mb-6">
          <div class="team-item">
            <div class="team-image relative">
              <img :src="mainPhoto3" alt="Service Photo" class="w-full object-cover rounded-lg" />
              <div
                class="team-detail absolute inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center text-white"
              >
                <h5 class="text-xl font-alt">SCOPE OF SERVICE</h5>
              </div>
            </div>
            <div class="team-descr text-center mt-4">
              <div class="text-xl font-semibold">Scope Of Service</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
