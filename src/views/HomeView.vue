<script setup>
import NavbarCom from '@/components/NavbarCom.vue'
import HeroSection from '@/components/HeroSection.vue'
import MainSection from '@/components/MainSection.vue'
import TaglineSection from '@/components/TaglineSection.vue'
import ProductSpec from '@/components/ProductSpec.vue'
import FooterCom from '@/components/FooterCom.vue'
</script>

<template>
  <main>
    <NavbarCom />
    <HeroSection />
    <MainSection />
    <TaglineSection
      :tagline="'Conduct Business With Integrity'"
      :srcImage="'HomeView/index4.jpg'"
    />
    <ProductSpec />
    <TaglineSection
      :tagline="'Performance Everyday For Growth Tomorrow'"
      :srcImage="'HomeView/index6.jpg'"
    />
    <FooterCom />
  </main>
</template>
