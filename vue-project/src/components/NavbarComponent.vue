<template>
  <header class="w-full bg-white border-b border-gray-200">
    <nav class="flex items-center justify-between px-6 py-3">
      <!-- Logo -->
      <img src="../assets/icons/uztelecom.svg" alt="Logo" class="h-10" />

      <!-- Menu items -->
      <ul class="hidden lg:flex space-x-6">
        <li v-for="(item, index) in navbarItems" :key="index">
          <a
            :href="item.link"
            class="text-[#000] font-semibold text-sm hover:text-black-600 transition"
          >
            {{ item?.name }}
          </a>
        </li>
      </ul>

      <!-- Actions -->
      <div class="flex items-center space-x-3">
        <button
          class="hidden md:block lg:block bg-[#174880] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#133b6a] transition"
        >
          Kirish
        </button>
        <button
          class="bg-white hidden md:block lg:block border-2 border-[#174880] text-[#174880] px-5 py-2.5 rounded-lg font-semibold hover:bg-[#f0f6fb] transition"
        >
          Til
        </button>

        <div class="hidden lg:block">
          <img src="../assets/icons/theme-icon.svg" alt="MOON" class="h-8 w-8 cursor-pointer" />
        </div>

        <div class="block sm:hidden">
          <img src="../assets/icon3.svg" alt="STAR" class="h-10" />
        </div>

        <!-- Burger (mobile) -->
        <div class="hidden sm:block md:block lg:hidden">
          <BurgerComponent />
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import BurgerComponent from '@/components/BurgerComponent.vue'

const navbarItems = ref([
  { name: 'Xizmat haqida', link: '#' },
  { name: 'Ariza yuborish', link: '#' },
  { name: 'Imkoniyatlar', link: '#' },
  { name: 'Afzalliklar', link: '#' },
  { name: 'Qanday boshlash kerak', link: '#' },
  { name: 'Tariflar', link: '#' },
])
</script>
