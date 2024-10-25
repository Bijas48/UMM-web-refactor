<script setup>
import section1Image from '@/assets/images/AboutView/section-1.jpg'
import section2Image from '@/assets/images/AboutView/section-2.jpg'
import section3Image from '@/assets/images/AboutView/section-3.jpg'
</script>

<template>
  <section class="py-16">
    <div class="container mx-auto">
      <div class="flex flex-col w-full items-center animate-showupclock">
        <h2 class="text-3xl font-semibold text-gray-800 text-center my-6">TEAM OF MANAGEMENT</h2>
        <!-- Gambar dummy -->
        <!-- <img
          src="https://via.placeholder.com/1200x600"
          class="w-full h-auto"
          alt="Management Team Image"
        /> -->
        <div class="grid w-5/6">
          <img
            :src="section1Image"
            class="w-full md:aspect-[16/9] aspect-[7/6] object-cover rounded-lg shadow-lg"
            alt="Management Team Image"
          />
        </div>
      </div>

      <hr class="my-9 border-gray-300" />

      <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-8 p-6 animate-fadeinright">
        <div class="flex justify-center items-center">
          <img
            :src="section2Image"
            alt="Company Overview"
            class="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div class="flex flex-col justify-center">
          <h2 class="text-3xl font-semibold text-gray-800 mb-4">Overview</h2>
          <div class="text-base font-serif text-gray-600">
            <p class="text-justify">
              PT. Usaha Maju Makmur is a coal trading company based in Jakarta. Initially, this
              company was established in June 2010. As a growing company, we have established
              partnerships with a number of qualified mining companies, particularly within South
              Sumatera, Jambi, South Kalimantan, East Kalimantan, and Bengkulu, Indonesia.
            </p>
            <p class="text-justify mt-4">
              PT. Usaha Maju Makmur has the purpose of expanding the market potential, followed by
              an improvement of the product in terms of both its quality and quantity.
            </p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-8 p-6 animate-fadeinleft">
        <div class="flex justify-center items-center md:order-last">
          <img
            :src="section3Image"
            alt="Mission and Vision"
            class="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div class="flex flex-col justify-center">
          <h2 class="text-3xl font-semibold text-gray-800 mb-4">Mission & Vision</h2>
          <div class="text-base font-serif text-gray-600">
            <p class="font-bold text-gray-800">OUR MISSION</p>
            <p class="text-justify mt-2">
              Menjadi perusahaan perdagangan batu bara yang memiliki integritas tinggi dan diakui
              secara global serta bertanggung jawab terhadap lingkungan.
            </p>

            <p class="font-bold mt-6 text-gray-800">OUR VISION</p>
            <ul class="list-disc ml-6 mt-2 space-y-2">
              <li class="text-justify">
                Menyediakan produk berkualitas dari sumber yang dapat dipercaya untuk klien
                terpercaya.
              </li>
              <li class="text-justify">
                Menciptakan lingkungan kerja yang kondusif bagi karyawan sehingga tercipta
                kesempatan untuk tumbuh dan berkembang bagi standar kehidupan yang sejahtera.
              </li>
              <li class="text-justify">
                Mengikuti kebijakan bisnis yang etis dengan semua klien serta mematuhi hukum yang
                berlaku.
              </li>
              <li class="text-justify">
                Menjalankan semua proses bisnis dengan penuh integritas dan kejujuran.
              </li>
              <li class="text-justify">
                Memenuhi semua kebutuhan klien dengan profesional yang difokuskan pada kepuasan
                pelanggan.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
