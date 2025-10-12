<template>
  <div
    class="w-full my-6 max-w-lg divide-y rounded-md border shadow-md transition-colors duration-300 ease-in-out
           border-gray-200 bg-white text-gray-900
           dark:border-gray-700 dark:bg-[#0E131E] dark:text-white"
  >
    <div v-for="(item, index) in items" :key="index">
      <!-- Header -->
      <button
        class="w-full flex justify-between items-center p-4 text-left font-medium transition-colors duration-300
               hover:bg-gray-100 dark:hover:bg-[#1A2234]"
        @click="toggle(index)"
      >
        <span
          class="left-border border-blue-600 text-gray-900 dark:border-blue-400 dark:text-white transition-colors duration-300"
        >
          {{ item.title }}
        </span>

        <svg
          class="w-5 h-5 transform transition-transform duration-300"
          :class="{ 'rotate-180': openIndex === index }"
          fill="none"
          viewBox="0 0 24 24"
          :stroke="isDark ? 'white' : 'black'"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <!-- Content -->
      <transition name="accordion">
        <div
          v-show="openIndex === index"
          class="p-4 leading-relaxed transition-colors duration-300 ease-in-out
                 bg-gray-50 text-gray-700
                 dark:bg-[#141A27] dark:text-gray-300"
        >
          {{ item.content }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'

// 🔹 `App.vue` ichidan `provide('isDark', isDark)` bilan o‘tadi
const isDark = inject('isDark', ref(false))

const openIndex = ref(null)

const items = [
  { title: "Brauzerda ishlash", content: "Brauzerda ishlash uchun birinchi accordion mazmuni." },
  { title: "Internet sekin bo‘lsa ham ishlash mumkinmi?", content: "Ha, tizim past tezlikdagi internet bilan ham ishlaydi." },
  { title: "Uyda yoki ta’tilda ishlash mumkinmi?", content: "Ha, tizim onlayn bo‘lgani uchun istalgan joyda ishlash mumkin." },
]

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<style>
.left-border {
  border-left: 4px solid;
  padding-left: 8px;
}

/* Accordion animatsiyasi */
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
.accordion-enter-to,
.accordion-leave-from {
  max-height: 200px;
  opacity: 1;
}
</style>
