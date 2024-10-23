<script setup>
import { ref, computed } from 'vue'
import { onClickOutside, useScroll } from '@vueuse/core'

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
      <a href="#" class="text-xl">UMM</a>
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
      :class="isMenuOpen ? 'block' : 'hidden'"
      class="absolute left-0 top-14 z-50 w-full md:static md:flex md:w-auto md:items-center"
      id="menu"
    >
      <nav>
        <ul
          class="ml-4 items-center justify-between pt-4 text-base text-gray-300 md:ml-0 md:flex md:pt-0"
        >
          <li>
            <a
              href="/"
              class="block px-0 py-3 transition duration-500 ease-in-out hover:text-white md:p-4"
              >Home</a
            >
          </li>
          <li>
            <a
              href="about"
              class="block px-0 py-3 transition duration-500 ease-in-out hover:text-white md:p-4"
              >About</a
            >
          </li>
          <li>
            <a
              href="awards"
              class="block px-0 py-3 transition duration-500 ease-in-out hover:text-white md:p-4"
              >Awards</a
            >
          </li>
          <li>
            <a
              href="performance"
              class="block px-0 py-3 transition duration-500 ease-in-out hover:text-white md:p-4"
              >Performance</a
            >
          </li>
          <li>
            <a
              href="magazine"
              class="mb-2 block px-0 py-3 transition duration-500 ease-in-out hover:text-white md:mb-0 md:p-4"
              >Magazine</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

