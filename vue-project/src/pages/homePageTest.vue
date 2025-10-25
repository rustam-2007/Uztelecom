<template>
   <div class="container mx-auto p-4 lg:p-0 bg-white text-gray-900 dark:bg-[#0A1F44] dark:text-gray-100 transition-colors duration-300">


    <!-- Hero qismi -->
    <div class="flex flex-col xl:flex-row items-start lg:items-center justify-between md:px-12">
      <div class="flex flex-col text-start">
        <h1 class="text-4xl md:text-6xl font-bold">
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
          <button class="bg-white dark:bg-gray-800 dark:text-gray-100 text-black font-bold px-6 py-3 rounded-2xl border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            Batafsil
          </button>
        </div>
      </div>
      <img class="mt-8 md:mt-0" src="../assets/img/Frame 2147223825.png" alt="Hero Image" />
    </div>

    <!-- Form boshi -->
    <div class="mb-20 px-0 lg:px-14">
      <h1 class="text-2xl md:text-3xl font-bold text-start md:text-left mt-12">Ariza yuborish</h1>

      <!-- Radio tanlov -->
      <fieldset class="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-24 mt-8">
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
      <form
        class="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-2xl mt-10 mx-auto space-y-4 p-6 transition-colors"
        @submit.prevent="submitForm"
      >
        <!-- Tashkilot nomi & STIR -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium">Tashkilot nomi</label>
            <input
              v-model="form.company"
              type="text"
              placeholder='MChJ "Namuna"'
              class="mt-1 block w-full rounded-lg py-3 px-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium">STIR</label>
            <input
              v-model="form.stir"
              type="text"
              placeholder="123456789"
              class="mt-1 block w-full rounded-lg py-3 px-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <!-- F.I.Sh -->
        <div>
          <label class="block text-sm font-medium">F.I.Sh *</label>
          <input
            v-model="form.fullName"
            type="text"
            placeholder="Zuxriddin Akbarov Xusanovich"
            required
            class="mt-1 block w-full rounded-lg py-3 px-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <!-- Email -->
        <div>
          <label class="block text-sm font-medium">Email *</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="example@email.com"
            required
            class="mt-1 block w-full rounded-lg py-3 px-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <!-- Telefon -->
        <div>
          <label class="block text-sm font-medium">Telefon *</label>
          <input
            v-model="form.phone"
            type="tel"
            placeholder="+998 (33) 123 45 67"
            required
            class="mt-1 block w-full rounded-lg py-3 px-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <!-- Checkbox -->
        <div class="flex items-start">
          <input
            v-model="form.accept"
            type="checkbox"
            id="accept"
            class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label for="accept" class="ml-2 text-sm text-gray-600 dark:text-gray-300">
            “Qabul qilaman” tugmasini bosish orqali Men
            <a href="#" class="text-blue-600 hover:underline">Ommaviy oferta</a>
            shartlariga va
            <a href="#" class="text-blue-600 hover:underline">Shaxsiy ma’lumotlarni qayta ishlash siyosatiga</a>
            rozilik bildiraman.
          </label>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Ariza yuborish
        </button>
      </form>

      <!-- Info card -->
      <div class="one_c_style p-8 flex flex-col xl:flex-row justify-between items-center mt-10 bg-[#174880] dark:bg-[#0D2C5A] transition-colors">
        <div class="text-center lg:text-left">
          <h1 class="text-2xl md:text-4xl font-bold text-white">
            1C UZTELECOM bilan qanday ishlashni boshlash mumkin
          </h1>
          <p class="mt-2 text-white">Tizimda ro‘yxatdan o‘tish</p>
          <p class="mt-2 text-white">Profil va integratsiyani sozlash</p>
          <p class="mt-2 text-white">Xizmatdan foydalanishni boshlash</p>
          <button class="mt-6 py-2 px-5 bg-white rounded-md text-[#174880]">30 kun bepul</button>
        </div>
        <div class="mt-6 lg:mt-0 flex justify-center">
          <img src="../assets/img/office-img.png" alt="" class="w-4/5 xl:w-full" />
        </div>
      </div>

      <!-- Afzalliklar -->
      <div class="mt-10 pt-10 text-center">
        <h1 class="text-3xl md:text-5xl font-bold">UZTELECOMdan 1C xizmatining afzalliklari</h1>
      </div>
    </div>
    </div>
</template>
