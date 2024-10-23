<script setup>
import HeroSectionforPages from '@/components/HeroSectionforPages.vue'
import FooterCom from '@/components/FooterCom.vue'
import ListingAwardsCards from '@/components/ListingAwardsCards.vue'
</script>

<template>
  <HeroSectionforPages :sub-header="'Awards'" :src-image="'AwardsView/bg.webp'" :overlay="true" />
  <ListingAwardsCards />
  <FooterCom />
</template>
