<template>
  <div class="w-full max-w-lg mx-auto divide-y divide-gray-200 rounded-md border">
    <div v-for="(item, index) in items" :key="index">
      <!-- Header -->
      <button
        class="w-full flex justify-start items-center p-4 text-left font-medium hover:bg-gray-50"
        @click="toggle(index)"
      >
        <div>
          <!-- Agar yopiq bo‘lsa PLUS -->
          <svg
            v-if="openIndex !== index"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            class="w-5 h-5"
          >
            <path
              d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"
              fill="currentColor"
            />
            <path
              d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"
              fill="currentColor"
            />
          </svg>
          <!-- Agar ochiq bo‘lsa MINUS -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" class="w-5 h-5">
            <path
              d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"
              fill="currentColor"
            />
          </svg>
        </div>
        <span class="ml-7">{{ item.title }}</span>
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
  {
    title: 'Qo‘lda yangilashlarga ehtiyoj yo‘q',
    content:
      '1C UZTELECOMda istalgan vaqtda, istalgan joydan ishlashingiz mumkin — ofisda bo‘ling, uyda yoki safarda. Sizga faqat barqaror internet kerak, xolos. Endi biror kompyuterga yoki ofisga bog‘lanib qolishingiz shart emas: brauzeringizni oching va buxgalteriya ishlarini hoziroq boshlang.',
  },
  {
    title: 'Ma’lumotlarning ishonchli himoyasi',
    content:
      ' 1C UZTELECOMda istalgan vaqtda, istalgan joydan ishlashingiz mumkin — ofisda bo‘ling, uyda yoki safarda. Sizga faqat barqaror internet kerak, xolos. Endi biror kompyuterga yoki ofisga bog‘lanib qolishingiz shart emas: brauzeringizni oching va buxgalteriya ishlarini hoziroq boshlang.',
  },
  {
    title: '1c Istalgan ehtiyoj uchun mos tariflar',
    content:
      ' 1C UZTELECOMda istalgan vaqtda, istalgan joydan ishlashingiz mumkin — ofisda bo‘ling, uyda yoki safarda. Sizga faqat barqaror internet kerak, xolos. Endi biror kompyuterga yoki ofisga bog‘lanib qolishingiz shart emas: brauzeringizni oching va buxgalteriya ishlarini hoziroq boshlang.',
  },
  {
    title: 'Bitta bazada birgalikda ishlash',
    content:
      ' 1C UZTELECOMda istalgan vaqtda, istalgan joydan ishlashingiz mumkin — ofisda bo‘ling, uyda yoki safarda. Sizga faqat barqaror internet kerak, xolos. Endi biror kompyuterga yoki ofisga bog‘lanib qolishingiz shart emas: brauzeringizni oching va buxgalteriya ishlarini hoziroq boshlang.',
  },
  {
    title: '24/7 texnik qo‘llab-quvvatlash',
    content:
      '1C UZTELECOMda istalgan vaqtda, istalgan joydan ishlashingiz mumkin — ofisda bo‘ling, uyda yoki safarda. Sizga faqat barqaror internet kerak, xolos. Endi biror kompyuterga yoki ofisga bog‘lanib qolishingiz shart emas: brauzeringizni oching va buxgalteriya ishlarini hoziroq boshlang.',
  },
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
</style>
