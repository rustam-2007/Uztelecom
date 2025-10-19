<template>
  <div
    class="max-w-md mx-auto bg-white dark:bg-[#0f172a] p-6 rounded-2xl shadow-md space-y-5 transition-colors mb-6 duration-300"
  >
    <!-- Email -->
    <div class="flex flex-col space-y-1">
      <label for="email" class="text-sm font-medium text-gray-700 dark:text-gray-300">Email:</label>
      <input
        id="email"
        type="email"
        placeholder="example@email.com"
        v-model="form.email"
        class="border border-purple-400 focus:ring-2 focus:ring-purple-500 focus:outline-none rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 dark:bg-[#1e293b] dark:text-gray-100 dark:placeholder-gray-400 dark:border-gray-600"
      />
    </div>

    <!-- Ism va familiya -->
    <div class="flex flex-col space-y-1">
      <label for="name" class="text-sm font-medium text-gray-700 dark:text-gray-300"
        >Ism va familiya:</label
      >
      <input
        id="name"
        type="text"
        placeholder="Zuxriddin Akbarov"
        v-model="form.name"
        class="border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 dark:bg-[#1e293b] dark:text-gray-100 dark:placeholder-gray-400 dark:border-gray-600"
      />
    </div>

    <!-- Xabar -->
    <div class="flex flex-col space-y-1">
      <label for="message" class="text-sm font-medium text-gray-700 dark:text-gray-300"
        >Xabar:</label
      >
      <textarea
        id="message"
        rows="3"
        placeholder="Xabaringiz..."
        v-model="form.message"
        class="border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 resize-none dark:bg-[#1e293b] dark:text-gray-100 dark:placeholder-gray-400 dark:border-gray-600"
      ></textarea>
    </div>

    <!-- Yuborish tugmasi -->
    <div>
      <button
        @click="submitForm"
        class="w-full h-16 rounded-2xl text-base flex flex-row justify-center items-center font-bold bg-[#174880] text-white dark:bg-blue-700 dark:hover:bg-blue-800 transition"
      >
        Yuborish
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  email: '',
  name: '',
  message: '',
})

const submitForm = () => {
  console.log('Yuborilgan ma’lumot:', form)
}
</script>
