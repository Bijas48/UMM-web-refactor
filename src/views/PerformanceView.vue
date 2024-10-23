<script setup>
import HeroSectionforPages from '@/components/HeroSectionforPages.vue'
import FooterCom from '@/components/FooterCom.vue'
</script>

<template>
  <HeroSectionforPages
    :sub-header="'Performance'"
    :src-image="'AboutView/header-bg.jpg'"
    :overlay="true"
  />
  <FooterCom />
</template>
