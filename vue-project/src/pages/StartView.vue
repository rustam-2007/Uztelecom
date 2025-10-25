<template>
  <div class="flex flex-col items-center mt-20 px-4 md:px-10">
    <!-- Header Section -->
    <div class="flex flex-col md:flex-row items-center justify-around w-full">
      <div class="md:text-left">
        <h1 class="text-4xl md:text-6xl font-bold leading-tight">
          Xizmatda qanday <br />
          ishlashni boshlash <br />mumkin?
        </h1>
        <p class="text-base mt-4 font-medium text-[#25446d]">
          USHBU MAQOLADA 1C UZTELECOM SERVISIDA MUVAFFAQIYATLI <br />
          ISHLASH UCHUN FOYDALI TAVSIYALAR BERILGAN.
        </p>
      </div>
      <div class="mt-8 md:mt-0">
        <img class="rounded-3xl w-full md:w-[400px]" src="../assets/img/2.jpg" alt="Xizmat rasmi" />
      </div>
    </div>

    <hr class="mt-20 w-full border-gray-300" />

    <!-- Content Section -->
    <div class="flex justify-center mt-10 w-full">
      <div class="flex flex-col justify-center items-center w-full">
        <h1 class="text-3xl md:text-4xl font-bold text-center">
          Xizmatda qanday ishlashni boshlash <br />
          mumkin?
        </h1>

        <!-- 1-qadam -->
        <p class="text-2xl font-bold mt-6" style="margin-right: 410px">1. Ro‘yxatdan o‘ting</p>
        <p class="text-lg md:text-xl mt-6 w-full md:w-2/4 text-center md:text-left text-[#4d5055]">
          Ishni boshlash uchun saytimizdagi
          <span class="underline cursor-pointer text-blue-700 hover:text-blue-900"> formani </span>
          to‘ldiring. <br /><br />
          Kerakli ma’lumotlarni kiriting: FIO, email, aloqa telefoni. <br /><br />
          So‘rov yuborilgandan so‘ng, operatorlarimiz siz bilan bog‘lanib, tafsilotlarni aniqlaydi
          va servisga kirish imkonini tayyorlaydi. <br /><br />
          Ro‘yxatdan o‘tish ko‘p vaqt olmaydi va maxsus tayyorgarlik talab qilmaydi. Bu bosqich
          tizimga shaxsiy taklif olish uchun zarur.
        </p>

        <img class="mt-6 rounded-2xl w-full md:w-[600px]" src="../assets/img/Thumbnail.jpg"
          alt="Ro‘yxatdan o‘tish rasmi" />

        <!-- 2-qadam -->
        <p class="text-2xl font-bold mt-10">2. Kirish huquqini oling va ishlashni boshlang</p>
        <p class="text-lg md:text-xl mt-6 w-full md:w-1/2 text-center md:text-left text-[#4d5055]">
          So‘rov tasdiqlangach, sizga <span class="font-bold">1C UZTELECOM</span> servisining
          demo-kirish taklifi demo-kirish taklifi keladi. <br />
          Demo-muddat bir oy davom etadi va shu davrda quyidagi imkoniyatlarni <br />bepul sinab
          ko‘rishingiz mumkin:
        </p>

        <ul class="list-disc ml-8 mt-4 text-base md:text-lg text-left text-[#4d5055]" style="margin-right: 310px">
          <li>Buxgalteriya va soliq hisobini yuritish</li>
          <li>Hisobotlarni tayyorlash va topshirish</li>
          <li>Standart hujjatlar va hisobotlar bilan ishlash</li>
        </ul>

        <p class="mt-6 text-lg md:text-xl w-full md:w-1/2 text-center md:text-left text-[#4d5055]">
          Demo-muddat davomida biz sizga texnik yordam ko‘rsatamiz va savollaringizga javob beramiz.
        </p>

        <img class="mt-6 rounded-2xl w-full md:w-[600px]" src="../assets/img/Thumbnail.jpg" alt="Demo versiya rasmi" />

        <!-- 3-qadam -->
        <h1 class="text-2xl font-bold mt-8">3. Asosiy tarifga o‘ting</h1>
        <p class="text-lg md:text-xl mt-8 w-full md:w-1/2 text-center md:text-left text-[#4d5055]">
          Demo-muddat tugashiga 10 kun qolganda operator siz bilan bog‘lanib, <br />keyingi ish
          jarayonini muhokama qiladi. <br /><br />
          Agar servis sizga mos kelsa, biz doimiy tarifni yoqamiz va ish faoliyatingizni
          <br />
          asosiy tizimga o‘tkazamiz. <br /><br />
          Barcha hisob-kitoblar AK “UZBEKTELECOM” billing tizimi orqali amalga <br />oshiriladi.
          <br /><br />
          Sinov davrida yaratilgan barcha ma’lumotlar va sozlamalar saqlanib, uzluksiz <br />
          ishlash imkoniyati ta’minlanadi.
        </p>

        <!-- Footer Card -->
        <div class="flex flex-col items-center mt-20 text-center px-4">
          <img class="w-16 md:w-20" src="../assets/icons/large-star.svg" alt="Yulduzcha" />
          <h1 class="text-2xl md:text-4xl font-bold mt-4">
            Ro‘yxatdan o‘tish bir necha daqiqa davom etadi va darhol servisga <br />
            kirish huquqini olasiz.
          </h1>
          <p class="mt-3 text-[#383a3d] text-base md:text-base">
            <span class="font-bold"> Sinab ko‘rmoqchimisiz?</span> Sizga 30 kun bepul foydalanish
            imkoniyati beriladi.
          </p>
          <button
            class="bg-[#16437E] text-white font-bold px-6 py-3 mt-4 rounded-2xl hover:bg-[#123567] transition flex items-center">
            30 kun bepul
            <img class="ml-2 w-5" src="../assets/icons/star.svg" alt="Yulduzcha belgisi" />
          </button>

          <!-- Contact Section -->
          <div class="mt-52">
            <h1 class="text-3xl md:text-4xl font-bold">Bizga xabar yuboring</h1>
            <p class="text-center text-base mt-4 text-[#4d5055]">
              Savolingiz, taklifingiz yoki 1C UZTELECOM asosidagi yechimlarimiz haqida ko‘proq
              bilmoqchimisiz? <br />
              Biz bilan bog‘laning — doim aloqadamiz va yordam berishga tayyormiz!
            </p>
          </div>
        </div>

        <!-- Input form -->
        <div class="mt-10 w-full md:w-[500px]">
          <InputComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import InputComponent from '@/components/InputComponent.vue'
</script>
