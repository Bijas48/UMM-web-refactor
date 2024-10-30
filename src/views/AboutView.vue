<script setup>
import FooterCom from '@/components/FooterCom.vue'
import HeroSectionforPages from '@/components/HeroSectionforPages.vue'
import AboutSection from '@/components/AboutSection.vue'
</script>

<template>
  <HeroSectionforPages
    :sub-header="'About UMM'"
    :src-image="'AboutView/header-bg.jpg'"
    :overlay="true"
  />
  <section class="py-16">
    <div class="container mx-auto">
      <!-- Section 1 -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0 }"
        :variants="{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 }
        }"
        :visible="{ opacity: 1, y: 0 }"
        class="w-full"
      >
        <h2 class="my-6 text-center text-3xl font-semibold text-gray-800">TEAM OF MANAGEMENT</h2>
        <img
          :src="section1Image"
          class="aspect-[7/6] w-full rounded-lg object-cover shadow-lg md:aspect-[16/9]"
          alt="Management Team Image"
        />
      </div>

      <hr class="my-9 border-gray-300" />

      <!-- Section 2 -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0 }"
        :variants="{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 }
        }"
        :visible="{ opacity: 1, y: 0 }"
        class="grid w-full grid-cols-1 gap-8 p-6 md:grid-cols-2"
      >
        <div class="flex items-center justify-center">
          <img
            :src="section2Image"
            alt="Company Overview"
            class="h-auto w-full rounded-lg object-cover shadow-lg"
          />
        </div>
        <div class="flex flex-col justify-center">
          <h2 class="mb-4 text-3xl font-semibold text-gray-800">Overview</h2>
          <div class="font-serif text-base text-gray-600">
            <p class="text-justify">
              PT. Usaha Maju Makmur is a coal trading company based in Jakarta. Initially, this
              company was established in June 2010. As a growing company, we have established
              partnerships with a number of qualified mining companies, particularly within South
              Sumatera, Jambi, South Kalimantan, East Kalimantan, and Bengkulu, Indonesia.
            </p>
            <p class="mt-4 text-justify">
              PT. Usaha Maju Makmur has the purpose of expanding the market potential, followed by
              an improvement of the product in terms of both its quality and quantity.
            </p>
          </div>
        </div>
      </div>

      <!-- Section 3 -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0 }"
        :variants="{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 }
        }"
        :visible="{ opacity: 1, y: 0 }"
        class="grid w-full grid-cols-1 gap-8 p-6 md:grid-cols-2"
      >
        <div class="flex items-center justify-center md:order-last">
          <img
            :src="section3Image"
            alt="Mission and Vision"
            class="h-auto w-full rounded-lg object-cover shadow-lg"
          />
        </div>
        <div class="flex flex-col justify-center">
          <h2 class="mb-4 text-3xl font-semibold text-gray-800">Mission & Vision</h2>
          <div class="font-serif text-base text-gray-600">
            <p class="font-bold text-gray-800">OUR MISSION</p>
            <p class="mt-2 text-justify">
              Menjadi perusahaan perdagangan batu bara yang memiliki integritas tinggi dan diakui
              secara global serta bertanggung jawab terhadap lingkungan.
            </p>

            <p class="mt-6 font-bold text-gray-800">OUR VISION</p>
            <ul class="ml-6 mt-2 list-disc space-y-2">
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
  <FooterCom />
</template>

