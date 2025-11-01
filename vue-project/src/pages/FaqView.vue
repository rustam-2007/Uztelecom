<template>
  <div>
    <span class="flex justify-center items-center flex-col text-center px-4 sm:px-0">
      <p class="mt-16 sm:mt-20 text-sm sm:text-base">FAQ</p>
      <h1 class="mt-3 text-3xl sm:text-5xl font-bold leading-tight">Servisda ishlashni boshlash</h1>
    </span>
  </div>

  <div class="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
    <!-- Bo‘limlar -->
    <div v-for="(section, i) in faqSections" :key="i" class="mb-8 sm:mb-12">
      <h2
        class="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center sm:text-left dark:text-white flex justify-center items-center flex-col">
        {{ section.title }}
      </h2>

      <div class="space-y-3">
        <div v-for="(item, j) in section.items" :key="j"
          class="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-all duration-300">
          <!-- Header -->
          <button @click="toggleItem(i, j)"
            class="w-full flex justify-between items-center text-left px-3 sm:px-6 py-3 sm:py-4 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
            <span class="font-medium sm:font-semibold text-gray-800 dark:text-gray-100 text-sm sm:text-base">
              {{ item.question }}
            </span>

            <svg :class="[
              'w-5 h-5 text-gray-500 transform transition-transform duration-300',
              item.open ? 'rotate-180' : 'rotate-0',
            ]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <!-- Javob -->
          <div v-show="item.open"
            class="px-3 sm:px-6 pb-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed bg-gray-50 dark:bg-slate-900">
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

// Accordion ma’lumotlari
const faqSections = reactive([
  {
    title: 'Ma’lumotlar bazasi',
    items: [
      {
        question:
          'Mahalliy (loka) ma’lumotlar bazasidan qanday qilib ma’lumotlarni yuklash mumkin?',
        answer:
          '1C UZTELECOM tizimiga kirib, “Ma’lumotlar bazalari” bo‘limiga o‘ting. “Yuklash” tugmasini bosing va kerakli faylni tanlang.',
        open: false,
      },
      {
        question: 'Ortiqcha sessiyani qanday yakunlayman?',
        answer:
          '1C tizimida “Foydalanuvchilar faol sessiyalari” bo‘limiga o‘ting va kerakli sessiyani tanlab, “Yopish” tugmasini bosing.',
        open: false,
      },
      {
        question: 'Keraksiz ilova sessiyalarini qanday yopish mumkin?',
        answer:
          'Ilovadan chiqish yoki “Faol foydalanuvchilar” bo‘limidan sessiyani to‘xtatish orqali yopishingiz mumkin.',
        open: false,
      },
      {
        question: 'Kerakli bo‘limni ilovada topolmayapman. Nima qilish kerak?',
        answer:
          'Ilovadan chiqish yoki “Faol foydalanuvchilar” bo‘limidan sessiyani to‘xtatish orqali yopishingiz mumkin.',
        open: false,
      },
      {
        question:
          'Ilovalardan foydalangan holda qanday qilib nazorat organlariga hisobot topshirish mumkin?',
        answer:
          'Ilovadan chiqish yoki “Faol foydalanuvchilar” bo‘limidan sessiyani to‘xtatish orqali yopishingiz mumkin.',
        open: false,
      },
    ],
  },
  {
    title: 'Servisga ulanish',
    items: [
      {
        question: '1C UZTELECOM nimaga kerak?',
        answer:
          'Bu servis sizning biznesingizni raqamlashtirish, hisobotlarni avtomatlashtirish va samaradorlikni oshirish uchun mo‘ljallangan.',
        open: false,
      },
      {
        question: 'Bu mening biznesim uchun to‘g‘ri keladimi?',
        answer:
          'Ha, servis kichik, o‘rta va yirik biznes turlari uchun moslashtirilgan tariflarni taklif etadi.',
        open: false,
      },
      {
        question: 'Mahalliy dasturda ishlashdan qanday farqi bor?',
        answer:
          'Bulutli xizmat orqali ishlashda ma’lumotlar xavfsiz saqlanadi, avtomatik yangilanadi va istalgan joydan foydalanish mumkin.',
        open: false,
      },
      {
        question: 'Mahalliy dasturda ishlashdan qanday farqi bor?',
        answer:
          'Bulutli xizmat orqali ishlashda ma’lumotlar xavfsiz saqlanadi, avtomatik yangilanadi va istalgan joydan foydalanish mumkin.',
        open: false,
      },
      {
        question: 'Mahalliy dasturda ishlashdan qanday farqi bor?',
        answer:
          'Bulutli xizmat orqali ishlashda ma’lumotlar xavfsiz saqlanadi, avtomatik yangilanadi va istalgan joydan foydalanish mumkin.',
        open: false,
      },
    ],
  },
  {
    title: 'Ilovalar',
    items: [
      {
        question: 'Brauzerda ishlash haqida',
        answer:
          'Servis barcha zamonaviy brauzerlarda, jumladan Chrome, Edge va Firefox’da barqaror ishlaydi.',
        open: false,
      },
      {
        question: 'Internet sekin bo‘lsa ham ishlay olamanmi?',
        answer: 'Ha, servis internet sifati o‘rtacha bo‘lsa ham optimallashtirilgan ishlashga ega.',
        open: false,
      },
      {
        question: 'Yordam yoki tahlil paytida ishlash mumkinmi?',
        answer:
          'Ha, tizim bir vaqtning o‘zida tahlil va ish jarayonlarini parallel tarzda qo‘llab-quvvatlaydi.',
        open: false,
      },
      {
        question: 'Yordam yoki tahlil paytida ishlash mumkinmi?',
        answer:
          'Ha, tizim bir vaqtning o‘zida tahlil va ish jarayonlarini parallel tarzda qo‘llab-quvvatlaydi.',
        open: false,
      },
      {
        question: 'Yordam yoki tahlil paytida ishlash mumkinmi?',
        answer:
          'Ha, tizim bir vaqtning o‘zida tahlil va ish jarayonlarini parallel tarzda qo‘llab-quvvatlaydi.',
        open: false,
      },
    ],
  },
])

// Accordion toggle funksiyasi
const toggleItem = (sectionIndex, itemIndex) => {
  const item = faqSections[sectionIndex].items[itemIndex]
  item.open = !item.open
}
</script>
