<template>
  <div class="w-full max-w-lg mx-auto divide-y divide-gray-200 rounded-md border">
    <div v-for="(item, index) in items" :key="index">
      <!-- Header -->
      <button
        class="w-full flex justify-between items-center p-4 text-left font-medium hover:bg-gray-50"
        @click="toggle(index)"
      >
        <span>{{ item.title }}</span>
        <svg
          class="w-5 h-5 transform transition-transform duration-300"
          :class="openIndex === index ? 'rotate-180' : ''"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
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
      <div v-show="openIndex === index" class="p-4 text-gray-600">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(null)

const items = [
  { title: 'Accordion 1', content: 'Birinchi accordion mazmuni.' },
  { title: 'Accordion 2', content: 'Ikkinchi accordion mazmuni.' },
  { title: 'Accordion 3', content: 'Uchinchi accordion mazmuni.' },
]

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>
