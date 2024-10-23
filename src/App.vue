<script setup>
import NavbarCom from '@/components/NavbarCom.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="relative min-h-screen">
    <NavbarCom class="fixed left-0 right-0 top-0 z-50" />
    <RouterView />
  </div>
</template>

