<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<template>
  <header
    class="sticky lg:px-16 px-4 bg-black text-white flex flex-wrap items-center py-4 shadow-md"
  >
    <div class="flex-1 flex justify-between items-center">
      <a href="#" class="text-xl">UMM</a>
    </div>

    <!-- Hamburger icon -->
    <button
      for="menu-toggle"
      class="pointer-cursor md:hidden block"
      @click="isMenuOpen = !isMenuOpen"
    >
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

    <!-- Responsive menu -->
    <div
      :class="isMenuOpen ? 'block' : 'hidden'"
      class="md:flex md:items-center md:w-auto w-full absolute top-14 left-0 bg-black z-50 md:static"
      id="menu"
    >
      <nav>
        <ul
          class="md:flex items-center justify-between text-base text-gray-300 pt-4 md:pt-0 ml-4 md:ml-0"
        >
          <!-- Margin-left added only for small devices -->
          <li>
            <a
              href="/"
              class="hover:text-white md:p-4 py-3 px-0 block transition duration-500 ease-in-out"
              >Home</a
            >
          </li>
          <li>
            <a
              href="about"
              class="hover:text-white md:p-4 py-3 px-0 block transition duration-500 ease-in-out"
              >About</a
            >
          </li>
          <li>
            <a
              href="awards"
              class="hover:text-white md:p-4 py-3 px-0 block transition duration-500 ease-in-out"
              >Awards</a
            >
          </li>
          <li>
            <a
              href="performance"
              class="hover:text-white md:p-4 py-3 px-0 block transition duration-500 ease-in-out"
              >Performance</a
            >
          </li>
          <li>
            <a
              href="magazine"
              class="hover:text-white md:p-4 py-3 px-0 block transition duration-500 ease-in-out md:mb-0 mb-2"
              >Magazine</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
