<script setup>
import HeroSectionforPages from '@/components/HeroSectionforPages.vue'
import FooterCom from '@/components/FooterCom.vue'
import ListingMagazinesCards from '@/components/ListingMagazinesCards.vue'
</script>

<template>
  <HeroSectionforPages
    :sub-header="'Digital Magazine'"
    :src-image="'MagazinesView/bg.jpg'"
    :overlay="true"
  />
  <ListingMagazinesCards />
  <FooterCom />
</template>
