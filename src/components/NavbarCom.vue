<script setup>
import { ref, computed } from 'vue'
import { onClickOutside, useScroll } from '@vueuse/core'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)
const menuRef = ref(null)
const hamburgerRef = ref(null)
const { y } = useScroll(window)
const navbarBackground = computed(() => {
  return y.value > 0 || isMenuOpen.value ? 'bg-black' : 'bg-transparent'
})
const navbarStyle = computed(() => ({
  height: y.value > 0 ? '4rem' : '5rem',
  lineHeight: y.value > 0 ? '4rem' : '5rem'
}))
const handleMenuClick = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const handleOutsideClick = (event) => {
  if (hamburgerRef.value && hamburgerRef.value.contains(event.target)) {
    return
  }
  if (isMenuOpen.value) {
    isMenuOpen.value = false
  }
}
onClickOutside(menuRef, handleOutsideClick)
</script>

<template>
  <header
    :style="navbarStyle"
    :class="[
      'flex flex-wrap items-center px-4 text-white transition-all duration-300 lg:px-16',
      navbarBackground
    ]"
  >
    <div class="flex h-full flex-1 items-center justify-between">
      <RouterLink to="/" class="text-xl">UMM</RouterLink>
    </div>

    <button ref="hamburgerRef" class="pointer-cursor block md:hidden" @click="handleMenuClick">
      <svg
        class="fill-current text-gray-200"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </button>

    <div
      ref="menuRef"
      :class="[
        isMenuOpen ? 'block' : 'hidden',
        'absolute left-0 top-14 z-50 w-full transition-all duration-300 md:static md:flex md:w-auto md:items-center',
        navbarBackground
      ]"
      id="menu"
    >
      <nav>
        <ul
          class="ml-4 items-center justify-between pt-4 text-base text-gray-300 md:ml-0 md:flex md:pt-0"
        >
          <li>
            <RouterLink
              to="/"
              class="block px-0 py-3 transition duration-500 ease-in-out hover:text-white md:p-4"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/about"
              class="block px-0 py-3 transition duration-500 ease-in-out hover:text-white md:p-4"
              >About</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/awards"
              class="block px-0 py-3 transition duration-500 ease-in-out hover:text-white md:p-4"
              >Awards</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/performance"
              class="block px-0 py-3 transition duration-500 ease-in-out hover:text-white md:p-4"
              >Performance</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/magazine"
              class="mb-2 block px-0 py-3 transition duration-500 ease-in-out hover:text-white md:mb-0 md:p-4"
              >Magazine</RouterLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
