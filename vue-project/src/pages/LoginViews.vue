<template>
  <div class="flex flex-col justify-center ml-64 mt-8 transition-colors duration-300">
    <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Kirish</h1>

    <h1 class="mt-4 text-gray-800 dark:text-gray-200">Email</h1>
    <input type="text" placeholder="example@email.com"
      class="h-10 rounded-lg mt-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1e293b] text-gray-900 dark:text-gray-100 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      style="width:978px;" />

    <h1 class="mt-4 text-gray-800 dark:text-gray-200">Parol</h1>
    <input type="password" placeholder="Parolingizni kiriting"
      class="h-10 rounded-lg mt-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1e293b] text-gray-900 dark:text-gray-100 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      style="width:978px;" />

    <span class="flex items-center justify-between mt-4">
      <span class="flex mt-2">
        <input type="checkbox"
          class="appearance-none w-5 h-5 border-white rounded-full bg-slate-300 checked:bg-blue-500 checked:border-transparent focus:outline-none" />
        <span class="ml-2 flex items-center justify-center text-gray-800 dark:text-gray-200">
          Meni eslab qol
        </span>
      </span>
      <p class="text-gray-700 dark:text-gray-300" style="margin-right: 222px;">
        Parolni unutdingizmi?
      </p>
    </span>

    <button style="background-color: #206CE8; width: 971px; height: 52px;"
      class="rounded-xl text-center mt-8 text-white font-semibold hover:bg-blue-700 transition">
      Kirish
    </button>

    <span class="flex justify-center items-center mt-8 mr-60">
      <p class="flex items-center justify-center text-[#383A3D] dark:text-gray-300">
        Hisob qaydnomangiz yo‘qmi?
      </p>
      <p
        class="underline text-[#206CE8] dark:text-blue-400 ml-2 hover:text-blue-700 dark:hover:text-blue-300 cursor-pointer">
        Ro‘yxatdan o‘tish
      </p>
    </span>
  </div>
</template>
