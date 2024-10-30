<script setup>
import HeroSectionforPages from '@/components/HeroSectionforPages.vue'
import FooterCom from '@/components/FooterCom.vue'
import MapSection from '@/components/MapSection.vue'
import TaglineSection from '@/components/TaglineSection.vue'
</script>

<template>
  <HeroSectionforPages
    :sub-header="'Performance'"
    :src-image="'PerformanceView/section-1.jpg'"
    :overlay="true"
  />
  <MapSection />
  <TaglineSection
    :tagline="'Great Source. Great Energy. Great Future'"
    :srcImage="'PerformanceView/index6.jpg'"
  />
  <FooterCom />
</template>
