<template>
  <div
    class="flex flex-col py-10 pt-10 transition-colors duration-300
           bg-[#f9f9f9] text-gray-800
           dark:bg-[#0A1F44] dark:text-gray-200"
  >
    <!-- Tepasi -->
    <div
      class="flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-10 gap-8"
    >
      <!-- Chap blok -->
      <div class="flex flex-col items-start text-center md:text-left space-y-2">
        <img src="../assets/icons/uztelecom.svg" alt="UZTELECOM" class="w-32 md:w-40" />
        <p class="text-gray-700 dark:text-gray-300 text-sm md:text-base">+998 55 500 09 90</p>
        <p class="text-gray-700 dark:text-gray-300 text-sm md:text-base">1c@uztelecom.uz</p>
      </div>

      <!-- O‘ng blok -->
      <div
        class="flex flex-col sm:flex-row justify-between items-start w-full md:w-1/2 gap-10"
      >
        <div>
          <h1 class="font-bold mb-2 text-gray-900 dark:text-white">Xizmat haqida</h1>
          <ul class="space-y-1 text-gray-700 dark:text-gray-300 text-sm md:text-base">
            <li>1C UZTELECOM nima va qanday ishlaydi?</li>
            <li>Foydali funksiyalar</li>
            <li>Foydalanish afzalliklari</li>
            <li>Ishni qanday boshlash kerak</li>
          </ul>
        </div>
        <div>
          <h1 class="font-bold mb-2 text-gray-900 dark:text-white">Resurslar</h1>
          <ul class="space-y-1 text-gray-700 dark:text-gray-300 text-sm md:text-base">
            <li>Tariflar</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Pastki qism -->
    <div
      class="flex flex-col md:flex-row justify-between items-center mt-10 px-6 md:px-10
             space-y-4 md:space-y-0 border-t border-gray-300 dark:border-gray-600 pt-6"
    >
      <p class="text-gray-500 dark:text-gray-400 text-xs md:text-sm text-center md:text-left">
        ©2025 AJ “O‘zbektelekom” · Barcha huquqlar himoyalangan.
      </p>
      <div
        class="flex flex-wrap justify-center gap-4 text-gray-500 dark:text-gray-400 text-xs md:text-sm"
      >
        <p>Foydalanish shartlari</p>
        <p>Maxfiylik siyosati</p>
        <p>Xavfsizlik</p>
      </div>
    </div>
  </div>
</template>
