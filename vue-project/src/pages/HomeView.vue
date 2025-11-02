<script setup>
import AcardionComponent from '@/components/AcardionComponent.vue'
import { reactive, ref } from 'vue'
import TarifCardsComponent from '@/components/TarifCardsComponent.vue'
import FormComponent from '@/components/FormComponent.vue'

const form = reactive({
  company: '',
  stir: '',
  fullName: '',
  email: '',
  phone: '',
  accept: false,
})

const checked = ref(false)

function submitForm() {
  if (!form.accept) {
    alert('Iltimos, rozilikni belgilang!')
    return
  }
  console.log("Form ma'lumotlari:", form)
  alert('Ariza yuborildi!')
}
</script>

<template>
  <div
    class="container mx-auto p-4 lg:p-0 bg-white text-gray-900 dark:bg-[#0A1F44] dark:text-gray-100 transition-colors duration-300">
    <!-- Hero qismi -->
    <div class="flex flex-col xl:flex-row items-start lg:items-center justify-between md:px-12">
      <div class="flex flex-col text-start">
        <h1 class="text-2xl md:text-6xl font-bold">
          UZTELECOMdan <br class="hidden md:block" />
          1C bulutli xizmati
        </h1>
        <p class="text-lg md:text-2xl mt-4">
          buxgalteriya hisobini yuriting, savdo va xizmatlaringizni <br class="hidden md:block" />
          dunyoning istalgan nuqtasidan boshqaring.
        </p>
        <div class="flex flex-col sm:flex-row justify-start gap-3 mt-8">
          <button class="bg-[#16437E] text-white font-bold px-6 py-3 rounded-2xl hover:bg-[#123567] transition">
            30 kun bepul
          </button>
          <button
            class="bg-white text-black font-bold px-6 py-3 rounded-2xl border border-gray-300 hover:bg-gray-100 transition">
            Batafsil
          </button>
        </div>
      </div>
      <img class="mt-8 md:mt-0" src="../assets/img/Frame 2147223825.png" alt="Hero Image" />
    </div>

    <!-- Form boshi -->
    <div class="mb-20 px-0 lg:px-14 transition-colors duration-300 bg-white dark:bg-[#0f172a]">


      <!-- Forma -->

      <form-component />
      <!-- Info card -->

      <div
        class="one_c_style p-8 flex flex-col xl:flex-row justify-between items-center mt-10 bg-[#174880] dark:bg-[#1e3a8a] transition-colors duration-300">
        <div class="text-center lg:text-left">
          <h1 class="text-2xl md:text-4xl font-bold text-white">
            1C UZTELECOM bilan qanday ishlashni boshlash mumkin
          </h1>
          <p class="mt-2 text-white">Tizimda ro‘yxatdan o‘tish</p>
          <p class="mt-2 text-white">Profil va integratsiyani sozlash</p>
          <p class="mt-2 text-white">Xizmatdan foydalanishni boshlash</p>
          <button class="mt-6 py-2 px-5 bg-white text-[#174880] dark:bg-gray-100 dark:text-blue-900 rounded-md">
            30 kun bepul
          </button>
        </div>
        <!-- <div class="mt-6 lg:mt-0 flex justify-center">
          <img src="../assets/img/office-img.png" alt="" class="w-4/5 xl:w-full" />
        </div> -->

      </div>

      <!-- Afzalliklar -->
      <div class="mt-10 pt-10 text-center">
        <h1 class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
          UZTELECOMdan 1C xizmatining afzalliklari
        </h1>
      </div>
      <!-- hover border card start -->
      <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-8 gap-6">
        <div class="space-y-6 w-full lg:w-2/3">
          <div
            class="px-0 md:px-6 lg:px-6 py-2 hover:border-2 hover:border-blue-600 rounded-lg transition cursor-pointer border border-transparent dark:hover:border-blue-400 dark:text-gray-100">
            <h1 class="font-bold text-xl md:text-2xl">Infratuzilma xarajatlaridan tejash</h1>
            <p class="text-base text-gray-700 dark:text-gray-300">
              Serverlar xarid qilish yoki IT-mutaxassislarni yollash shart emas.
            </p>
          </div>

          <div
            class="px-0 md:px-6 lg:px-6 py-2 hover:border-2 hover:border-blue-600 rounded-lg transition cursor-pointer border border-transparent dark:hover:border-blue-400 dark:text-gray-100">
            <h1 class="font-bold text-xl md:text-2xl">Avtomatik yangilanishlar</h1>
            <p class="text-base text-gray-700 dark:text-gray-300">
              Murakkab yangilanishlar va vaqtincha to‘xtab qolishlar haqida unuting.
            </p>
          </div>

          <div
            class="px-0 md:px-6 lg:px-6 py-2 hover:border-2 hover:border-blue-600 rounded-lg transition cursor-pointer border border-transparent dark:hover:border-blue-400 dark:text-gray-100">
            <h1 class="font-bold text-xl md:text-2xl">24/7 foydalanish imkoniyati</h1>
            <p class="text-base text-gray-700 dark:text-gray-300">
              1C tizimingizdan istalgan vaqt va joyda foydalanishingiz mumkin.
            </p>
          </div>

          <div
            class="px-0 md:px-6 lg:px-6 py-2 hover:border-2 hover:border-blue-600 rounded-lg transition cursor-pointer border border-transparent dark:hover:border-blue-400 dark:text-gray-100">
            <h1 class="font-bold text-xl md:text-2xl">Foydalanuvchilarni o‘qitish</h1>
            <p class="text-base text-gray-700 dark:text-gray-300">
              UZTELECOM bilan boshlash oson, hatto yangilar uchun ham.
            </p>
          </div>
        </div>
        <img class="rounded-3xl w-full lg:w-3/5" src="../assets/img/minora.png" alt="" />
      </div>

      <!-- Oylik/Yillik switch -->
      <div class="flex flex-col sm:flex-row items-center gap-4 mt-10 pl-2 sm:pl-8">
        <p :class="checked ? 'text-gray-500' : 'text-gray-900 dark:text-gray-100'" class="text-lg font-bold">
          Oylik
        </p>
        <label class="switch">
          <input type="checkbox" v-model="checked" />
          <span class="slider"></span>
        </label>
        <p :class="checked ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500'" class="text-base ml-4 font-bold">
          Yillik
        </p>

        <div
          class="py-2 bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-200 text-sm font-bold rounded-full border-2 border-blue-200 dark:border-blue-800 hover:border-blue-600 transition-colors text-center">
          20% tejab qolasiz
        </div>
      </div>

      <!-- Tariff kartalar -->
      <TarifCardsComponent />

      <!-- FAQ qismi -->
      <div class="flex items-start justify-between flex-col lg:flex-row gap-8 my-12 mb-20">
        <div class="lg:w-1/3 text-start lg:text-left">
          <span class="text-gray-600 dark:text-gray-400">FAQ</span>
          <p class="text-2xl md:text-3xl font-bold mt-2 text-gray-900 dark:text-gray-100">
            Ko'p so'raladigan savollar
          </p>
          <p class="mt-4 text-sm text-gray-600 dark:text-gray-300">
            1C UZTELECOM xizmati sizning buxgalteriya hisobotlaringizni qanday soddalashtirishi va
            biznesingizni qanday samaraliroq qilishini bilib oling.
          </p>
        </div>
        <AcardionComponent class="flex-1" />
      </div>
    </div>
  </div>
</template>


<style>
.one_c_style {
  border-radius: 18px;
}

/* Switch CSS siz yozgandek qoldi */
.switch {
  --button-width: 3.5em;
  --button-height: 2em;
  --toggle-diameter: 1.5em;
  --button-toggle-offset: calc((var(--button-height) - var(--toggle-diameter)) / 2);
  --toggle-shadow-offset: 10px;
  --toggle-wider: 3em;
  --color-grey: #cccccc;
  --color-green: #4296f4;
  width: 45px;
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

.switch input[type='checkbox']:checked+.slider {
  background-color: var(--color-green);
}

.switch input[type='checkbox']:checked+.slider::after {
  transform: translateX(calc(var(--button-width) - var(--toggle-diameter) - var(--button-toggle-offset)));
  box-shadow: calc(var(--toggle-shadow-offset) * -1) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
}

.switch input[type='checkbox'] {
  display: none;
}

.switch input[type='checkbox']:active+.slider::after {
  width: var(--toggle-wider);
}

.switch input[type='checkbox']:checked:active+.slider::after {
  transform: translateX(calc(var(--button-width) - var(--toggle-wider) - var(--button-toggle-offset)));
}
</style>
