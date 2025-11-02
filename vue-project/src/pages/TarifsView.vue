<template>
  <div class="px-4 sm:px-8 md:px-12">
    <!-- Sarlavha -->
    <h1 class="font-bold text-3xl sm:text-5xl md:text-6xl mt-10 sm:mt-16 text-center sm:text-left">
      Biznesingiz uchun mos tarifni <br class="hidden sm:block" />
      tanlang
    </h1>

    <p class="mt-6 sm:mt-10 text-base sm:text-xl md:text-2xl text-[#26282A] text-center sm:text-left leading-relaxed">
      1C UZTELECOM servisi moslashuvchan tarif rejalari bilan ta’minlaydi, ular <br class="hidden sm:block" />
      individual tadbirkorlardan tortib, o‘rta va yirik kompaniyalargacha mos keladi.
    </p>

    <!-- switch-start -->
    <div class="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-4 mt-8 sm:mt-10">
      <p :class="checked ? 'text-gray-500' : 'text-gray-900 dark:text-gray-100'" class="text-base sm:text-lg font-bold">
        Oylik
      </p>

      <label class="switch">
        <input type="checkbox" v-model="checked" />
        <span class="slider"></span>
      </label>

      <p :class="checked ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500'" class="text-base sm:text-lg font-bold">
        Yillik
      </p>

      <div class="discount-badge text-xs sm:text-sm mt-2 sm:mt-0">
        20% tejab qolasiz
      </div>
    </div>
    <!-- switch-end -->

    <!-- Tarif kartalari -->
    <div class="mt-10">
      <TarifCardsComponent />
    </div>

    <!-- Jadval bo‘limi -->
    <section class="py-10 sm:py-12 px-2 sm:px-6 dark:bg-[#0f172a] transition-colors duration-500">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-2xl sm:text-3xl font-bold mb-2 dark:text-white">
          Taqoslang va o‘z rejangizni tanlang
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 text-sm sm:text-base">
          Biznesingizning har bir bosqichi uchun maxsus ishlab chiqilgan.
        </p>

        <!-- Jadval scroll -->
        <div class="overflow-x-auto">
          <div
            class="grid grid-cols-[1fr_repeat(3,minmax(180px,1fr))] min-w-[700px] sm:min-w-[900px] border border-gray-200 rounded-2xl overflow-hidden">
            <!-- Chap ustun -->
            <div class="bg-white dark:bg-slate-800 text-left p-4 sm:p-6">
              <h3 class="font-semibold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4">Tariflar</h3>
              <ul class="space-y-3 sm:space-y-5 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                <li>Ma’lumotlar bazalari soni</li>
                <li>Bir vaqtda ishlayotgan foydalanuvchilar soni</li>
                <li>Qo‘shimcha ishchilarni ulash*</li>
                <li>1C:VITC axborot tizimi</li>
                <li>1C-Kon­nekt</li>
                <li>1C:Nominalatura</li>
                <li>Elektron hisobot tizimi</li>
                <li>Elektron hujjat aylanish tizimi</li>
                <li>Kontragent ma’lumotlarini INN bo‘yicha yuklash</li>
                <li>Asosiy vositalar qayta baholash indekslarini yuklash</li>
                <li>Valyuta kurslarini yuklash</li>
                <li>Banklar klassifikatorini yuklash</li>
              </ul>
            </div>

            <!-- Tariflar ustunlari -->
            <div v-for="(plan, i) in plans" :key="i"
              class="group text-center p-4 sm:p-6 border-l border-gray-200 bg-white dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all duration-300">
              <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 sm:mb-3">
                {{ plan.name }}
              </h3>

              <button
                class="bg-[#002B6B] hover:bg-[#0044A5] text-white py-1.5 sm:py-2 px-4 sm:px-5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-300">
                Sotib olish
              </button>

              <ul class="mt-4 sm:mt-6 space-y-3 sm:space-y-5 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                <li v-for="(item, j) in plan.features" :key="j">
                  <span v-if="item === 'check'" class="text-blue-700 dark:text-blue-300 text-lg sm:text-xl">✦</span>
                  <span v-else>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TarifCardsComponent from '@/components/TarifCardsComponent.vue'

const checked = ref(false)

const plans = [
  {
    name: 'Bazaviy',
    features: [
      '1',
      '1',
      '-',
      'check',
      '-',
      '-',
      'check',
      '-',
      '-',
      '-',
      '-',
      '-',
    ],
  },
  {
    name: 'Standart',
    features: [
      '2',
      '2',
      'Cheklovsiz (qo‘shimcha to‘lov asosida)',
      'check',
      '-',
      'check',
      'check',
      'check',
      'check',
      'check',
      'check',
      'check',
    ],
  },
  {
    name: 'PROFI',
    features: [
      '10',
      '5',
      'Cheklovsiz (qo‘shimcha to‘lov asosida)',
      'check',
      'check',
      'check',
      'check',
      'check',
      'check',
      'check',
      'check',
      'check',
    ],
  },
]
</script>

<style scoped>
.switch {
  --button-width: 2.5em;
  --button-height: 1.4em;
  --toggle-diameter: 1em;
  --button-toggle-offset: calc((var(--button-height) - var(--toggle-diameter)) / 2);
  --toggle-shadow-offset: 8px;
  --toggle-wider: 2.2em;
  --color-grey: #cccccc;
  --color-green: #4296f4;
  width: 30px;
}

.slider {
  display: inline-block;
  width: var(--button-width);
  height: var(--button-height);
  background-color: var(--color-grey);
  border-radius: calc(var(--button-height) / 2);
  position: relative;
  transition: 0.3s all ease-in-out;
}

.slider::after {
  content: '';
  display: inline-block;
  width: var(--toggle-diameter);
  height: var(--toggle-diameter);
  background-color: #fff;
  border-radius: calc(var(--toggle-diameter) / 2);
  position: absolute;
  top: var(--button-toggle-offset);
  transform: translateX(var(--button-toggle-offset));
  box-shadow: var(--toggle-shadow-offset) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
  transition: 0.3s all ease-in-out;
}

.switch input[type='checkbox'] {
  display: none;
}

.switch input[type='checkbox']:checked+.slider {
  background-color: var(--color-green);
}

.switch input[type='checkbox']:checked+.slider::after {
  transform: translateX(calc(var(--button-width) - var(--toggle-diameter) - var(--button-toggle-offset)));
  box-shadow: calc(var(--toggle-shadow-offset) * -1) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
}

.switch input[type='checkbox']:active+.slider::after {
  width: var(--toggle-wider);
}

.switch input[type='checkbox']:checked:active+.slider::after {
  transform: translateX(calc(var(--button-width) - var(--toggle-wider) - var(--button-toggle-offset)));
}

/* --- 20% tejash badge --- */
.discount-badge {
  padding: 0.15rem 0.6rem;
  font-size: 0.75rem;
  border-radius: 9999px;
  font-weight: 600;
  background-color: #bfdbfe;
  color: #1e3a8a;
  border: 2px solid #bfdbfe;
  transition: all 0.3s ease;
}

.dark .discount-badge {
  background-color: #1e3a8a;
  color: #bfdbfe;
  border-color: #1e40af;
}

.discount-badge:hover {
  border-color: #2563eb;
}
</style>
