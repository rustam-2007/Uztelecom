  <template>
    <div
      class="px-4 sm:px-6 md:px-8 bg-white text-gray-800 dark:bg-[#0f172a] dark:text-gray-100 transition-colors duration-500">
      <!-- SECTION 1 -->
      <section>
        <div>
          <h1
            class="text-2xl sm:text-4xl md:text-6xl font-bold pt-12 flex justify-center items-center text-center dark:text-white">
            1C UZTELECOM funksional <br class="hidden sm:block" />
            imkoniyatlari
          </h1>
          <div class="flex justify-center items-center mt-8 sm:mt-10 w-full">
            <img class="w-full sm:w-4/5 md:w-3/4 lg:w-2/3" src="../assets/img/earth.png" alt="" />
          </div>
        </div>

        <div>
          <p
            class="flex justify-center items-center text-center text-sm sm:text-base mt-10 sm:mt-20 text-[#4d5055] dark:text-gray-300">
            1C: UZTELECOM — bu bulutli servis bo‘lib, “1C” dasturlarining asosiy funksiyalaridan
            <br class="hidden sm:block" />
            foydalanish imkonini beradi — hech qanday dastur o‘rnatish yoki sozlash shart emas.
            <br class="hidden sm:block" />
            Sizga kerak bo‘ladigani — faqat internet va brauzer xolos.
          </p>
          <!-- CARD LIST -->
          <div class="flex justify-center lg:justify-between flex-wrap gap-6 sm:gap-10 mt-10 sm:mt-20 mb-20">
            <!-- card start  -->
            <div v-for="n in 3" :key="n"
              class="p-6 w-full sm:w-[48%] lg:w-[25%] rounded-2xl bg-[#174880] dark:bg-blue-900 transition-colors duration-500">
              <div>
                <img src="../assets/icons/card-icon.svg" alt="" />
              </div>
              <div class="my-10 sm:my-14"></div>
              <h1 class="text-white text-2xl sm:text-3xl font-bold">Tezkor start-{{ n + 1 }}</h1>
              <p class="text-gray-400 text-base sm:text-xl mt-4 dark:text-gray-300">
                Bazangizni yuklab beramiz — <br />15 daqiqada ishga kirishasiz.
              </p>
            </div>
            <!-- <div
              class="p-6 w-full sm:w-[48%] lg:w-[25%] rounded-2xl bg-[#174880] dark:bg-blue-900 transition-colors duration-500">
              <div>
                <img src="../assets/icons/card-icon.svg" alt="" />
              </div>
              <div class="my-10 sm:my-14"></div>
              <h1 class="text-white text-2xl sm:text-3xl font-bold">Har joydan kirish <br> imkoniyati</h1>
              <p class="text-gray-400 text-base sm:text-xl mt-4 dark:text-gray-300">
                Bazangizni yuklab beramiz — <br />15 daqiqada ishga kirishasiz.
              </p>
            </div>

            <div
              class="p-6 w-full sm:w-[48%] lg:w-[25%] rounded-2xl bg-[#174880] dark:bg-blue-900 transition-colors duration-500">
              <div>
                <img src="../assets/icons/card-icon.svg" alt="" />
              </div>
              <div class="my-10 sm:my-14"></div>
              <h1 class="text-white text-2xl sm:text-3xl font-bold">Doimiy texnik <br> yordam</h1>
              <p class="text-gray-400 text-base sm:text-xl mt-4 dark:text-gray-300">
                Bazangizni yuklab beramiz — <br />15 daqiqada ishga kirishasiz.
              </p>
            </div> -->
            <!-- card end  -->
          </div>
        </div>
      </section>
      <!-- SECTION 2 -->
      <section>
        <div class="flex justify-center">
          <h1 class="text-2xl sm:text-4xl md:text-5xl font-bold text-center mt-10 sm:mt-20 dark:text-white">
            Avtomatlashtiring, boshqaring, <br class="hidden sm:block" />
            tahlil qiling — bularning barchasi <br class="hidden sm:block" />
            1C UZTELECOM yordamida!
          </h1>
        </div>
      </section>

      <!-- SECTION 3 -->
      <section>
        <div class="flex flex-col-reverse md:flex-row gap-10 w-full justify-start mt-10 sm:mt-20 md:mr-4 items-center">
          <div class="text-center md:text-left">
            <h1 class="font-bold text-2xl sm:text-3xl dark:text-white">
              1. Ishga tayyor — hammasi sozlangan
            </h1>
            <span class="flex gap-2 mt-2 justify-center md:justify-start">
              <img class="w-5 h-5" src="../assets/icons/star-icon.svg" alt="" />
              <p class="dark:text-gray-300 text-sm sm:text-base">
                Internet va brauzer bo‘lsa kifoya.
              </p>
            </span>
            <p class="mt-2 text-[#4d5055] dark:text-gray-300 text-sm sm:text-base">
              Hech qanday dastur o‘rnatish shart emas — hatto elektron raqamli imzo
              <br class="hidden sm:block" />
              kalitini ham «bulutda» saqlash mumkin, bu orqali <br class="hidden sm:block" />
              siz Internet orqali hisobot topshirishingiz mumkin.
            </p>
          </div>
          <div class="flex justify-center">
            <img class="w-3/4 sm:w-2/3 md:w-full" src="../assets/img/work-settings.svg" alt="" />
          </div>
        </div>
      </section>

      <!-- SECTION 4 -->
      <section>
        <div
          class="flex flex-col md:flex-row gap-10 w-full justify-center md:justify-end mt-10 sm:mt-20 md:mr-4 items-center">
          <div class="flex justify-center order-2 md:order-1">
            <img class="w-3/4 sm:w-2/3 md:w-full" src="../assets/img/work-settings.svg" alt="" />
          </div>
          <div class="text-center md:text-left order-1 md:order-2">
            <h1 class="font-bold text-2xl sm:text-3xl dark:text-white">
              2. Ishni boshlash oson — 30 kun <br class="hidden sm:block" />
              bepul
            </h1>
            <p class="mt-2 text-[#4d5055] dark:text-gray-300 text-sm sm:text-base">
              Shaklni to‘ldirish atigi bir necha daqiqa vaqt oladi. Shundan so‘ng,
              <br class="hidden sm:block" />
              menejerimiz siz bilan bog‘lanadi, barcha tafsilotlarni tushuntiradi va
              <br class="hidden sm:block" />
              tizimga ulanishda yordam beradi.
            </p>
          </div>
        </div>
      </section>

      <!-- SECTION 5 -->
      <section>
        <div class="flex justify-center flex-col items-center text-center px-4">
          <div class="w-20 sm:w-24 md:w-32">
            <img src="../assets/icons/large-star.svg" alt="" />
          </div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white mt-6">
            O‘zingiz sinab ko‘ring — 30 kunlik bepul foydalanish imkoniyatini
            <br class="hidden sm:block" />
            hoziroq oling!
          </h1>
          <p class="text-center my-4 text-[#383A3D] dark:text-gray-300 text-sm sm:text-base">
            Ro‘yxatdan o‘ting va 30 kun bepul foydalaning
          </p>
          <button
            class="w-44 sm:w-56 h-14 sm:h-16 rounded-2xl text-sm sm:text-base flex flex-row justify-center items-center font-bold bg-[#174880] text-white dark:bg-blue-700 dark:hover:bg-blue-800 transition">
            Bepul ulanish
            <img class="ml-3 w-5 sm:w-[30px]" src="../assets/icons/button-star.svg" alt="" />
          </button>
        </div>
      </section>

      <!-- SECTION 6 -->
      <section>
        <div class="mt-10 sm:mt-20 px-2 sm:px-0">
          <h1 class="text-3xl sm:text-4xl font-bold flex justify-center text-center dark:text-white mb-8 mt-20">
            Bizga xabar yuboring
          </h1>
          <p class="text-sm sm:text-base text-center text-[#4d5055] dark:text-gray-300">
            Savolingiz, taklifingiz yoki 1C UZTELECOM asosidagi yechimlarimiz haqida ko‘proq
            bilmoqchimisiz? <br class="hidden sm:block" />
            Biz bilan bog‘laning — doim aloqadamiz va yordam berishga tayyormiz!
          </p>
          <InputComponent />
        </div>
      </section>
    </div>
  </template>

<script setup>
import InputComponent from '@/components/InputComponent.vue'
</script>
