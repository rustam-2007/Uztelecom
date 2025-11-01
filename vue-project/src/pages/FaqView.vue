<template>
  <div class="px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
    <div class="min-h-screen flex flex-col items-center py-12">
      <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-2">
        Mening ilovalarim
      </h1>

      <div class="w-full flex justify-end pr-10 mb-10">
        <button
          class="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-xl shadow-md transition-all duration-200 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Shaxsiy kabinet
        </button>
      </div>

      <div class="flex flex-wrap justify-center gap-6">
        <div class="card">
          <img src="../assets/img/Group 6.png" alt="earth" class="card-img" />
          <h3 class="card-title">O‘zbekiston uchun Buxgalteriya</h3>
          <p class="card-text"></p>
        </div>

        <div class="card">
          <img src="../assets/img/Group 6.png" alt="moon" class="card-img" />
          <h3 class="card-title">O‘zbekiston uchun Buxgalteriya</h3>
          <p class="card-text"></p>
        </div>

        <div class="card">
          <img src="../assets/img/Group 6.png" alt="moon" class="card-img" />
          <h3 class="card-title">O‘zbekiston uchun Buxgalteriya</h3>
          <p class="card-text"></p>
        </div>

        <div
          class="w-[200px] h-[200px] border-2 border-dashed border-gray-400 dark:border-gray-600 rounded-2xl flex flex-col items-center justify-center gap-2 transition-transform duration-300 hover:scale-105"
        >
          <div class="w-20 h-20 text-gray-700 dark:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M9 12h6"></path>
                <path d="M12 9v6"></path>
              </g>
            </svg>
          </div>
          <h3 class="card-title">ilova qo‘shish</h3>
          <p class="card-text"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply w-[200px] h-[200px] bg-white dark:bg-gray-800 shadow-lg rounded-2xl flex flex-col items-center justify-center gap-2 p-4 transition-transform duration-300 hover:scale-105;
}

.card-img {
  @apply w-[80px] h-[80px] object-contain;
}

.card-title {
  @apply text-lg font-semibold text-gray-800 dark:text-gray-100;
}

.card-text {
  @apply text-sm text-gray-500 dark:text-gray-400 text-center;
}
</style>
