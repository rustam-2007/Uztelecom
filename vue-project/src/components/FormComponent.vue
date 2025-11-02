<template>
  <div
    class="container mx-auto p-4 bg-white text-gray-900 dark:bg-[#0A1F44] dark:text-gray-100 transition-colors duration-300">

    <!-- Form boshi -->
    <div class="mb-20 px-4 md:px-10 flex justify-center flex-col items-center lg:px-14">
      <h1 class="text-2xl md:text-3xl font-bold text-start mt-12">Ariza yuborish</h1>

      <!-- Radio tanlov -->
      <fieldset
        class="flex flex-col sm:flex-row justify-center sm:justify-start items-start sm:items-center gap-4 sm:gap-10 md:gap-24 mt-8">
        <div class="flex items-center space-x-2">
          <input type="radio" id="dewey" name="drone" value="dewey" />
          <label for="dewey">Yuridik shaxs</label>
        </div>

        <div class="flex items-center space-x-2">
          <input type="radio" id="louie" name="drone" value="louie" />
          <label for="louie">Jismoniy shaxs</label>
        </div>
      </fieldset>

      <!-- Forma -->
      <form class="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-2xl mt-10 mx-auto space-y-4 p-6 transition-colors"
        @submit.prevent="submitForm">

        <!-- Tashkilot nomi & STIR -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium">Tashkilot nomi</label>
            <input v-model.trim="form.company" type="text" placeholder='MChJ "Namuna"'
              :class="[inputStyle, formErrors.company ? 'border-red-500' : '']" />
            <p v-if="formErrors.company" class="text-red-500 text-sm mt-1">{{ formErrors.company }}</p>
          </div>

          <div>
            <label class="block text-sm font-medium">STIR</label>
            <input v-model.trim="form.stir" type="text" placeholder="123456789"
              :class="[inputStyle, formErrors.stir ? 'border-red-500' : '']" />
            <p v-if="formErrors.stir" class="text-red-500 text-sm mt-1">{{ formErrors.stir }}</p>
          </div>
        </div>

        <!-- F.I.Sh -->
        <div>
          <label class="block text-sm font-medium">F.I.Sh *</label>
          <input v-model.trim="form.fullName" type="text" placeholder="Zuxriddin Akbarov Xusanovich"
            :class="[inputStyle, formErrors.fullName ? 'border-red-500' : '']" />
          <p v-if="formErrors.fullName" class="text-red-500 text-sm mt-1">{{ formErrors.fullName }}</p>
        </div>

        <!-- Email -->
        <div>
          <label class="block text-sm font-medium">Email *</label>
          <input v-model.trim="form.email" type="email" placeholder="example@email.com"
            :class="[inputStyle, formErrors.email ? 'border-red-500' : '']" />
          <p v-if="formErrors.email" class="text-red-500 text-sm mt-1">{{ formErrors.email }}</p>
        </div>

        <!-- Telefon -->
        <div>
          <label class="block text-sm font-medium">Telefon *</label>
          <input v-model.trim="form.phone" type="tel" placeholder="+998 (33) 123 45 67"
            :class="[inputStyle, formErrors.phone ? 'border-red-500' : '']" />
          <p v-if="formErrors.phone" class="text-red-500 text-sm mt-1">{{ formErrors.phone }}</p>
        </div>

        <!-- Checkbox -->
        <div class="flex items-start">
          <input v-model="form.accept" type="checkbox" id="accept"
            class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
          <label for="accept" class="ml-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            “Qabul qilaman” tugmasini bosish orqali Men
            <a href="#" class="text-blue-600 hover:underline">Ommaviy oferta</a>
            shartlariga va
            <a href="#" class="text-blue-600 hover:underline">Shaxsiy ma’lumotlarni qayta ishlash siyosatiga</a>
            rozilik bildiraman.
          </label>
        </div>
        <p v-if="formErrors.accept" class="text-red-500 text-sm mt-1">{{ formErrors.accept }}</p>

        <!-- Submit Button -->
        <button type="submit"
          class="w-full py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Ariza yuborish
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'

const form = reactive({
  company: '',
  stir: '',
  fullName: '',
  email: '',
  phone: '',
  accept: false,
})

const formErrors = reactive({
  company: '',
  stir: '',
  fullName: '',
  email: '',
  phone: '',
  accept: '',
})

const inputStyle =
  'mt-1 block w-full rounded-lg py-3 px-3 border bg-white dark:bg-gray-700 focus:border-blue-500 focus:ring-blue-500 border-gray-300 dark:border-gray-600'

// Email tekshiruvi
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
// Telefon tekshiruvi
const validatePhone = (phone) => /^\+998\s?\(?\d{2}\)?\s?\d{3}\s?\d{2}\s?\d{2}$/.test(phone)

// Real-time validatsiya
watch(() => form.company, (val) => {
  formErrors.company = val.trim().length < 3 ? 'Tashkilot nomi kamida 3 ta belgidan iborat bo‘lishi kerak.' : ''
})
watch(() => form.stir, (val) => {
  if (!/^\d*$/.test(val)) formErrors.stir = 'STIR faqat raqamlardan iborat bo‘lishi kerak.'
  else if (val.length > 0 && val.length !== 9) formErrors.stir = 'STIR 9 xonali raqam bo‘lishi kerak.'
  else formErrors.stir = ''
})
watch(() => form.fullName, (val) => {
  formErrors.fullName = val.trim() ? '' : 'F.I.Sh majburiy maydon.'
})
watch(() => form.email, (val) => {
  if (!val.trim()) formErrors.email = 'Email majburiy maydon.'
  else if (!validateEmail(val)) formErrors.email = 'Email formati noto‘g‘ri.'
  else formErrors.email = ''
})
watch(() => form.phone, (val) => {
  if (!val.trim()) formErrors.phone = 'Telefon raqam majburiy.'
  else if (!validatePhone(val)) formErrors.phone = 'Telefon formati noto‘g‘ri: +998 (xx) xxx xx xx'
  else formErrors.phone = ''
})
watch(() => form.accept, (val) => {
  formErrors.accept = val ? '' : 'Shartlarga rozilik berish kerak.'
})

const submitForm = () => {
  const hasError = Object.values(formErrors).some((err) => err)
  const hasEmpty =
    !form.company || !form.stir || !form.fullName || !form.email || !form.phone || !form.accept

  if (!hasError && !hasEmpty) {
    alert('✅ Ariza muvaffaqiyatli yuborildi!')
  } else {
    alert('❌ Iltimos, barcha maydonlarni to‘g‘ri to‘ldiring!')
  }
}
</script>
