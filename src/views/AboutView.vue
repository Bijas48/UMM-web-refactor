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
  <AboutSection />
  <FooterCom />
</template>
