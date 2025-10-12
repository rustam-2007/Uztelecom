<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/NavbarComponent.vue'
import Footer from './components/FooterComponent.vue'
import { ref, watchEffect, onMounted, provide } from 'vue'

// 🔹 Dark mode holati
const isDark = ref(false)

// 🔹 localStorage orqali saqlash
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  isDark.value = savedTheme === 'dark'
})

// 🔹 Dark mode qo‘llash
watchEffect(() => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
})

// 🔹 provide orqali dark mode ni barcha komponentlarga uzatamiz
provide('isDark', isDark)
</script>

<template>
  <div
    :class="[
      'flex flex-col min-h-screen transition-colors duration-300',
      isDark ? 'bg-[#0A1F44] text-gray-100' : 'bg-white text-gray-900',
    ]"
  >
    <Navbar v-model:dark="isDark" />

    <main
      class="transition-colors duration-300 flex-grow bg-white text-gray-900 dark:bg-[#0A1F44] dark:text-gray-100"
    >
      <!-- 🔹 RouterView orqali uzatilgan sahifalar dark holatni inject orqali oladi -->
      <RouterView />
    </main>

    <Footer />
  </div>
</template>
