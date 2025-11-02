<template>
  <div class="w-96 mx-auto mt-10 p-6">
    <form @submit.prevent="onSubmit" class="flex flex-col gap-4">
      <!-- Email -->
      <div>
        <label for="email" class="block text-sm font-medium mb-1">Email:</label>
        <input id="email" v-model.trim="form.email" type="email" :placeholder="formPleaceHolder.email" :class="[
          'w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100',
          formErrors.email ? 'border-red-500' : 'border-gray-300'
        ]" />
        <p v-if="formErrors.email" class="text-red-500 text-sm mt-1">{{ formErrors.email }}</p>
      </div>

      <!-- Ism va familiya -->
      <div>
        <label for="name" class="block text-sm font-medium mb-1">Ism va familiya:</label>
        <input id="name" v-model.trim="form.name" type="text" :placeholder="formPleaceHolder.name" :class="[
          'w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100',
          formErrors.name ? 'border-red-500' : 'border-gray-300'
        ]" />
        <p v-if="formErrors.name" class="text-red-500 text-sm mt-1">{{ formErrors.name }}</p>
      </div>

      <!-- Xabar -->
      <div>
        <label for="message" class="block text-sm font-medium mb-1">Xabar:</label>
        <textarea id="message" v-model.trim="form.message" rows="4" :placeholder="formPleaceHolder.message" :class="[
          'w-full border rounded-xl px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-800 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100',
          formErrors.message ? 'border-red-500' : 'border-gray-300'
        ]"></textarea>
        <p v-if="formErrors.message" class="text-red-500 text-sm mt-1">{{ formErrors.message }}</p>
      </div>

      <!-- Yuborish -->
      <button type="submit"
        class="bg-[#174880] text-white font-semibold py-3 rounded-xl shadow-md hover:bg-blue-900 transition dark:bg-blue-700 dark:hover:bg-blue-800">
        Yuborish
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'

const form = reactive({
  email: '',
  name: '',
  message: '',
})

const formPleaceHolder = ref({
  email: 'example@email.com',
  name: 'Zuxriddin Akbarov',
  message: 'Xabaringiz...',
})

const formErrors = reactive({
  email: '',
  name: '',
  message: '',
})

// ✅ Email formatini tekshirish
const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

// 🔵 Real-time validatsiyalar
watch(
  () => form.email,
  (val) => {
    if (!val.trim()) {
      formErrors.email = 'Email kiritish majburiy.'
    } else if (!validateEmail(val)) {
      formErrors.email = 'Email formati noto‘g‘ri.'
    } else {
      formErrors.email = ''
    }
  }
)

watch(
  () => form.name,
  (val) => {
    if (!val.trim()) {
      formErrors.name = 'Ism va familiya majburiy.'
    } else if (val.length < 3) {
      formErrors.name = 'Ism juda qisqa.'
    } else {
      formErrors.name = ''
    }
  }
)

watch(
  () => form.message,
  (val) => {
    if (!val.trim()) {
      formErrors.message = 'Xabar maydoni bo‘sh bo‘lishi mumkin emas.'
    } else if (val.length < 10) {
      formErrors.message = 'Xabar kamida 10 ta belgidan iborat bo‘lishi kerak.'
    } else {
      formErrors.message = ''
    }
  }
)

// 🔵 Forma yuborilganda
const onSubmit = () => {
  const hasError = Object.values(formErrors).some((err) => err)
  const hasEmpty = !form.email || !form.name || !form.message

  if (!hasError && !hasEmpty) {
    alert('✅ Xabar muvaffaqiyatli yuborildi!')
    console.log('Form submitted:', { ...form })
    // Tozalash
    form.email = ''
    form.name = ''
    form.message = ''
  } else {
    alert('❌ Iltimos, barcha maydonlarni to‘g‘ri to‘ldiring!')
  }
}
</script>
