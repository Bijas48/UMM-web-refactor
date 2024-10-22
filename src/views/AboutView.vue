<script setup>
import FooterCom from '@/components/FooterCom.vue'
import HeroSectionforPages from '@/components/HeroSectionforPages.vue'
import section1Image from '@/assets/images/AboutView/section-1.jpg'
</script>

<template>
  <HeroSectionforPages
    :sub-header="'About UMM'"
    :src-image="'AboutView/header-bg.jpg'"
    :overlay="true"
  />
  <section class="py-16">
    <div class="container mx-auto">
      <div class="w-full">
        <h2 class="text-3xl font-semibold text-center">TEAM OF MANAGEMENT</h2>
        <!-- Gambar dummy -->
        <!-- <img
          src="https://via.placeholder.com/1200x600"
          class="w-full h-auto"
          alt="Management Team Image"
        /> -->
        <img
          :src="section1Image"
          class="w-full h-[50vh] md:h-[50%] object-cover px-8"
          alt="Management Team Image"
        />
      </div>

      <div class="w-full">
        <h2 class="text-3xl font-semibold text-left">Overview</h2>
        <div class="text-base font-serif">
          <p class="text-justify">
            PT. Usaha Maju Makmur is coal trading company based in Jakarta. Initially, this company
            was established in June 2010. As a growing company, we have established partnership with
            a number of qualified mining companies particularly within South Sumatera, Jambi, South
            Kalimantan, East Kalimantan, Bengkulu, Indonesia.
          </p>
          <p class="text-justify mt-4">
            PT. Usaha Maju Makmur has the purpose of expanding the market potential which is
            followed by an improvement of the product in terms of both its quality and quantity.
          </p>
        </div>
      </div>

      <div class="w-full">
        <h2 class="text-3xl font-semibold text-left">Mission & Vision</h2>
        <div class="text-base font-serif text-left mt-4">
          <p class="font-bold">OUR MISSION</p>
          <p class="text-justify mt-2">
            Menjadi perusahaan perdagangan batu bara yang memiliki integritas tinggi dan diakui
            secara global serta bertanggung jawab terhadap lingkungan.
          </p>

          <p class="font-bold mt-4">OUR VISION</p>
          <ul class="list-disc ml-6 mt-2 space-y-2">
            <li class="text-justify">
              Menyediakan produk berkualitas dari sumber yang dapat dipercaya untuk klien
              terpercaya.
            </li>
            <li class="text-justify">
              Menciptakan lingkungan kerja yang kondusif bagi karyawan sehingga tercipta kesempatan
              untuk tumbuh dan berkembang bagi standar kehidupan yang sejahtera.
            </li>
            <li class="text-justify">
              Mengikuti kebijakan bisnis yang etis dengan semua klien serta mematuhi hukum yang
              berlaku.
            </li>
            <li class="text-justify">
              Menjalankan semua proses bisnis dengan penuh integritas dan kejujuran.
            </li>
            <li class="text-justify">
              Memenuhi semua kebutuhan klien dengan professional yang di fokuskan pada kepuasan
              pelanggan.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <FooterCom />
</template>
