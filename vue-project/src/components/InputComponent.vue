<template>
  <div class="w-96 mx-auto mt-10 p-6">
    <form @submit.prevent="onSubmit" class="flex flex-col gap-4">
      <div>
        <label for="email" class="block text-sm font-medium mb-1">Email:</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="example@email.com"
          required
          class="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
        />
      </div>

      <div>
        <label for="name" class="block text-sm font-medium mb-1">Ism va familiya:</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          placeholder="Zuxriddin Akbarov"
          required
          class="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium mb-1">Xabar:</label>
        <textarea
          id="message"
          v-model="form.message"
          rows="4"
          placeholder="Xabaringiz..."
          required
          class="w-full border rounded-xl px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-800 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
        ></textarea>
      </div>

      <button
        type="submit"
        class="bg-[#174880] text-white font-semibold py-3 rounded-xl shadow-md hover:bg-blue-900 transition dark:bg-blue-700 dark:hover:bg-blue-800"
      >
        Yuborish
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  email: '',
  name: '',
  message: '',
})

function onSubmit() {
  // Hozircha konsolga chiqaramiz — backend yoki EmailJS ulashni xohlasangiz, shu joyga qo'shamiz.
  console.log('Form submitted:', { ...form })

  // Forma tozalash (istamasangiz o'chirib yuboring)
  form.email = ''
  form.name = ''
  form.message = ''
}
</script>
