<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ">
    <div
      class="flex flex-col p-6 border rounded-xl shadow-md bg-white dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
      <h2 class="text-xl font-bold text-gray-900 dark:text-gray-100">Bazaviy</h2>
      <p class="text-lg font-semibold text-gray-700 dark:text-gray-300">200 000 so'm/oyiga*</p>
      <ul class="space-y-2 mt-4 text-gray-700 dark:text-gray-300">
        <li class="flex items-center">
          <img src="../assets/icons/Icon wrapper.svg" alt="chaqmoq" class="mr-2" />
          1С:ИТС axborot tizimi
        </li>
        <li class="flex items-center">
          <img src="../assets/icons/Icon wrapper.svg" alt="chaqmoq" class="mr-2" />
          Bir vaqtning oʻzida 1 nafar foydalanuvchi ishlashi mumkin*
        </li>
        <li class="flex items-center">
          <img src="../assets/icons/Icon wrapper.svg" alt="chaqmoq" class="mr-2" />
          Elektron hisobot tizimi
        </li>
        <li class="flex items-center">
          <img src="../assets/icons/Icon wrapper.svg" alt="chaqmoq" class="mr-2" />
          Elektron hujjat aylanishi tizimi
        </li>
      </ul>
      <div class="flex flex-col sm:flex-row gap-3 mt-6">
        <button class="py-2 px-5 bg-blue-800 rounded-md text-white hover:bg-blue-900">
          Sotib olish
        </button>
        <button class="py-2 px-5 bg-gray-200 dark:bg-gray-700 dark:text-gray-100 rounded-md text-gray-700">
          Batafsil
        </button>
      </div>
    </div>
    <div
      class="flex flex-col p-6 border rounded-xl shadow-md bg-white dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
      <h2 class="text-xl font-bold text-gray-900 dark:text-gray-100">Standart</h2>
      <p class="text-lg font-semibold text-gray-700 dark:text-gray-300">360 000 so'm/oyiga*</p>
      <ul class="space-y-2 mt-4 text-gray-700 dark:text-gray-300">
        <li class="flex items-center">
          <img src="../assets/icons/Icon wrapper.svg" alt="chaqmoq" class="mr-2" />
          1С:ИТС axborot tizimi
        </li>
        <li class="flex items-center">
          <img src="../assets/icons/Icon wrapper.svg" alt="chaqmoq" class="mr-2" />
          Bir vaqtning oʻzida 2 nafar foydalanuvchi ishlashi mumkin*
        </li>
        <li class="flex items-center">
          <img src="../assets/icons/Icon wrapper.svg" alt="chaqmoq" class="mr-2" />
          1C:Nomenklatura
        </li>
        <li class="flex items-center">
          <img src="../assets/icons/Icon wrapper.svg" alt="chaqmoq" class="mr-2" />
          Asosiy vositalar qayta baholash indekslarini yuklash
        </li>
        <li class="flex items-center"></li>
      </ul>
      <div class="flex flex-col sm:flex-row gap-3 mt-6">
        <button class="py-2 px-5 bg-blue-800 rounded-md text-white hover:bg-blue-900">
          Sotib olish
        </button>
        <button class="py-2 px-5 bg-gray-200 dark:bg-gray-700 dark:text-gray-100 rounded-md text-gray-700">
          Batafsil
        </button>
      </div>
    </div>
    <div
      class="flex flex-col p-6 border rounded-xl shadow-md bg-white dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
      <h2 class="text-xl font-bold text-gray-900 dark:text-gray-100">PROFI</h2>
      <p class="text-lg font-semibold text-gray-700 dark:text-gray-300">460 000 so'm/oyiga*</p>
      <ul class="space-y-2 mt-4 text-gray-700 dark:text-gray-300 justify-center">
        <li class="flex items-center">
          <img src="../assets/icons/Icon wrapper.svg" alt="chaqmoq" class="mr-2" />
          1С:ИТС axborot tizimi
        </li>
        <li class="flex items-center">
          <img src="../assets/icons/Icon wrapper.svg" alt="chaqmoq" class="mr-2" />
          Bir vaqtning oʻzida 5 nafar foydalanuvchi ishlashi mumkin*
        </li>
        <li class="flex items-center">
          <img src="../assets/icons/Icon wrapper.svg" alt="chaqmoq" class="mr-2" />
          1C:Nomenklatura
        </li>
        <li class="flex items-center">
          <img src="../assets/icons/Icon wrapper.svg" alt="chaqmoq" class="mr-2" />
          Asosiy vositalar qayta baholash <br />indekslarini yuklash
        </li>
      </ul>
      <div class="flex flex-col sm:flex-row gap-3 mt-6">
        <button class="py-2 px-5 bg-blue-800 rounded-md text-white hover:bg-blue-900">
          Sotib olish
        </button>
        <button class="py-2 px-5 bg-gray-200 dark:bg-gray-700 dark:text-gray-100 rounded-md text-gray-700">
          Batafsil
        </button>
      </div>
    </div>

    <!-- Shu tarzda qolgan kartalarga ham dark klasslar qo‘llaniladi -->
  </div>

  <div>
    <h1 class="text-5xl font-bold mt-20 ml-2">Taqqoslang va o‘z rejangizni tanlang</h1>
    <p class="text-base mt-4 ml-3" style="color: #4D5055;">Biznesingizning har bir bosqichi uchun maxsus ishlab
      chiqilgan.
    </p>
  </div>
  <!-- <TarifCardsComponent /> -->
</template>

<script setup>
// import TarifCardsComp  onent from '@/components/TarifCardsComponent.vue';
</script>
