<template>
  <header
    class="w-full bg-white dark:bg-[#0f172a] border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
    <nav class="flex items-center justify-between px-6 py-3">
      <!-- Logo -->
      <img src="../assets/icons/uztelecom.svg" alt="Logo" class="h-10" />

      <!-- Menu items (Desktop) -->
      <ul class="hidden lg:flex space-x-6">
        <li v-for="(item, index) in navbarItems" :key="index">
          <router-link :to="item.link"
            class="text-[#000] dark:text-gray-100 font-semibold text-sm hover:text-[#174880] dark:hover:text-[#60a5fa] transition">
            {{ item?.name }}
          </router-link>
        </li>
      </ul>

      <!-- Actions -->
      <div class="flex items-center space-x-3">
        <button
          class="hidden md:block lg:block bg-[#174880] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#133b6a] transition">
          Kirish
        </button>
        <button
          class="bg-white dark:bg-transparent hidden md:block lg:block border-2 border-[#174880] dark:border-gray-500 text-[#174880] dark:text-gray-200 px-5 py-2.5 rounded-lg font-semibold hover:bg-[#f0f6fb] dark:hover:bg-gray-800 transition">
          Til
        </button>

        <!-- Theme toggle -->
        <div class="hidden lg:block">
          <img v-if="isDark" src="../assets/icons/light.svg" alt="Light mode" class="h-8 w-8 cursor-pointer"
            @click="toggleTheme" />
          <img v-else src="../assets/icons/theme-icon.svg" alt="Dark mode" class="h-8 w-8 cursor-pointer"
            @click="toggleTheme" />
        </div>

        <!-- Burger (mobile) -->
        <div class="block lg:hidden">
          <button @click="isOpen = !isOpen">
            <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile menu -->
    <transition name="slide-fade">
      <div v-if="isOpen" class="lg:hidden px-6 pb-4">
        <ul class="flex flex-col space-y-3 mt-2">
          <li v-for="(item, index) in navbarItems" :key="index">
            <router-link :to="item.link"
              class="block text-[#000] dark:text-gray-100 font-semibold text-base hover:text-[#174880] dark:hover:text-[#60a5fa] transition">
              {{ item?.name }}
            </router-link>
          </li>
        </ul>

        <div class="mt-4 flex flex-col space-y-2">
          <button class="bg-[#174880] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#133b6a] transition">
            Kirish
          </button>
          <button
            class="bg-white dark:bg-transparent border-2 border-[#174880] dark:border-gray-500 text-[#174880] dark:text-gray-200 px-5 py-2.5 rounded-lg font-semibold hover:bg-[#f0f6fb] dark:hover:bg-gray-800 transition">
            Til
          </button>

          <!-- Dark mode toggle (mobile) -->
          <button
            class="flex items-center justify-center border border-gray-400 dark:border-gray-600 rounded-lg py-2 mt-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            @click="toggleTheme">
            {{ isDark ? 'Light Mode' : 'Dark Mode' }}
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const isOpen = ref(false)
const isDark = ref(false)

const navbarItems = ref([
  { name: 'Xizmat haqida', link: '/about' },
  { name: 'Ariza yuborish', link: '/home' },
  { name: 'Imkoniyatlar', link: '/opportunities' },
  { name: 'Afzalliklar', link: '/Advantages' },
  { name: 'Qanday boshlash kerak', link: '/Start' },
  { name: 'Tariflar', link: '/tarifs' },
])

const toggleTheme = () => {
  isDark.value = !isDark.value
}

watchEffect(() => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
