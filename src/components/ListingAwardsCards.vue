<script setup>
import image1 from '@/assets/images/AwardsView/iso.webp'
import image2 from '@/assets/images/AwardsView/rmk-energy.webp'
import image3 from '@/assets/images/AwardsView/5-pemasok-terbaik.webp'
import image4 from '@/assets/images/AwardsView/best-partner.webp'
import image5 from '@/assets/images/AwardsView/best-performance.webp'
import image6 from '@/assets/images/AwardsView/top-3-mrc.webp'
import image7 from '@/assets/images/AwardsView/top-3-lrc.webp'
import image8 from '@/assets/images/AwardsView/top-3-quality.webp'
import image9 from '@/assets/images/AwardsView/top-3-supplier.webp'

const awards = [
  {
    imgPath: image1,
    title: 'QUALITY MANAGEMENT SYSTEM',
    year: 'ISO 9001:2015'
  },
  {
    imgPath: image2,
    title: '5 YEARS COOPERATIONS RMK ENERGY',
    year: '(2014-2019)'
  },
  {
    imgPath: image3,
    title: 'BEST SUPPLIER PLNBB',
    year: '2019'
  },
  {
    imgPath: image4,
    title: 'BEST PARTNER PLNBB',
    year: '2019'
  },
  {
    imgPath: image5,
    title: 'BEST PERFORMANCE PARTNER SUPPLIER PLNBB',
    year: '2021'
  },
  {
    imgPath: image6,
    title: 'TOP 3 BEST MRC/HRC QUALITY & QUANTITY',
    year: '2021'
  },
  {
    imgPath: image7,
    title: 'TOP 3 BEST LRC QUALITY VOL>1 MILION TON',
    year: '2020'
  },
  {
    imgPath: image8,
    title: 'TOP 3 BEST LRC QUALITY & QUANTITY VOL. 500.000 TON',
    year: '2021'
  },
  {
    imgPath: image9,
    title: 'TOP 3 SUPPLIERS EXCELLENT AVERAGE PERFORMANCE',
    year: '2021'
  }
]
</script>

<template>
  <section class="py-16 md:px-16">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3">
        <div
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0 }"
          :variants="{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 }
          }"
          :visible="{ opacity: 1, y: 0 }"
          v-for="(award, index) in awards"
          :key="index"
          class="p-4"
        >
          <img
            :src="award.imgPath"
            :alt="award.title"
            class="h-auto w-full rounded-t-lg object-cover"
          />
          <div class="p-4">
            <h3 class="text-center text-lg font-bold text-gray-800">
              {{ award.title }}
            </h3>
            <h4 class="text-center text-lg font-bold text-gray-800">
              {{ award.year }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
