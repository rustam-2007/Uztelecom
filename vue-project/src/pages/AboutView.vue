<script setup lang="ts">
import AcardionComponent from '@/components/AcardionComponent.vue'
</script>

<template>
  <div class="px-8">
    <div>
      <div class="flex justify-start">
        <p class="text-4xl mt-3 font-bold mb-11 text-[#000000]">1C UZTELECOM</p>
      </div>
      <div class="flex justify-between">
        <div class="w-1/2">
          <p class="text-[#000000] text-xl text-start leading-relaxed max-w-5xl mx-auto">
            “1C:Предприятие 8” internet orqali ishlash xizmati (1C UZTELECOM) — “1C” kompaniyasi
            tomonidan ishlab chiqilgan va qo‘llab-quvvatlanadigan xizmat bo‘lib, bu kompaniya
            Rossiyada biznesni avtomatlashtirish bo‘yicha yetakchi hisoblanadi. <br />
            Ushbu xizmat “1C:Предприятие” platformasidagi amaliy yechimlarga internet orqali
            masofadan kirish imkonini beradi va SaaS (xizmat sifatida dastur) modeli asosida
            ishlaydi. Bunday model ko‘pincha “bulutda ishlash” deb ataladi. <br />
            1C UZTELECOM orqali buxgalteriya va soliq hisobotlaringizni yuriting, hisobotlarni
            topshiring, biznesingizni nazorat qiling va boshqaring — bularning barchasi internet
            orqali!
          </p>
        </div>
        <div class="grid grid-cols-3 gap-3">
          <div
            class="flex justify-center items-center w-32 h-32 overflow-hidden rounded-[50px]"
          ></div>
          <div class="flex justify-center items-center w-32 h-32 overflow-hidden rounded-[50px]">
            <img src="../assets/img/Thumbnail.jpg" alt="Thumbnail" class="w-full object-cover" />
          </div>
          <div class="flex justify-center items-center w-32 h-32 overflow-hidden rounded-[50px]">
            <img
              src="../assets/img/Thumbnail.jpg"
              alt="Thumbnail"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="flex justify-center items-center w-32 h-32 overflow-hidden rounded-[50px]">
            <img
              src="../assets/img/Thumbnail.jpg"
              alt="Thumbnail"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="flex justify-center items-center w-32 h-32 overflow-hidden rounded-[50px]">
            <img
              src="../assets/img/Thumbnail.jpg"
              alt="Thumbnail"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="flex justify-center items-center w-32 h-32 overflow-hidden rounded-[50px]">
            <img
              src="../assets/img/Thumbnail.jpg"
              alt="Thumbnail"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>

    <p class="flex justify-center text-2xl mt-24 font-bold text-[#000000]h">
      1C UZTELECOM - bu nima?
    </p>
    <div class="img-style mt-7">
      <img src="../assets/about-main.png" alt="about image" class="block mx-auto my-[10px] w-3/1" />

      <p class="text-style font-bold text-[#000000] text-2xl mt-10 mb-10">
        1C UZTELECOM imkoniyatlai haqida <br />
        qisqa videoni tomosha qiling
      </p>
      <p class="text-style text-size: 20px text-[#363232]">
        Bulutli tizimda ish boshlash qanchalik oson ekanligini, xizmat qanday masalalarni
        halqilishini va <br />
        nega minglab buxgalterlar aynan 1C UZTELECOM’ni tanlaganini bilib oling.
      </p>
    </div>
    <div class="flex my-10 justify-center">
      <video
        width="100%"
        height="1240"
        autoplay
        muted
        playsinline
        controls
        class="rounded-xl shadow-lg"
      >
        <source src="../assets/video/uztelecom-video.mp4" type="video/mp4" />
        Sizning brauzeringiz videoni qo‘llab-quvvatlamaydi.
      </video>
    </div>

    <div>
      <h5 class="flex justify-center text-center font-bold text-[#000000] text-2xl mt-10 mb-10">
        1C Uztelecom
      </h5>
      <h1 class="flex justify-center text-center font-bold text-[#000000] text-2xl mt-10 mb-10">
        Xizmat afzalliklari
      </h1>
      <h1 class="flex justify-center text-center font-bold text-[#000000] text-2xl mt-10 mb-10">
        24/7 onlayn kirish imkoniyati
      </h1>

      <p class="flex justify-center text-center text-sm leading-relaxed max-w-2xl mx-auto">
        1C UZTELECOMda istalgan vaqtda, istalgan joydan ishlashingiz mumkin — ofisda bo‘ling, uyda
        yoki safarda. Sizga faqat barqaror internet kerak, xolos. Endi biror kompyuterga yoki ofisga
        bog‘lanib qolishingiz shart emas: brauzeringizni oching va buxgalteriya ishlarini hoziroq
        boshlang.
      </p>

      <div class="flex justify-center">
        <AcardionComponent></AcardionComponent>
      </div>

      <img src="../assets/icons/Vector.svg" alt="iskra" class="mx-auto" />
      <p class="flex justify-center text-center font-bold text-[#000000] text-2xl mt-10 mb-10">
        1C UZTELECOM bilan biznes tahlilning kelajagini his eting
      </p>
      <p class="flex justify-center text-center text-sm leading-relaxed max-w-xl mx-auto my-2">
        1C UZTELECOM imkoniyatlarini amalda sinab ko‘ring va farqni o‘zingiz his eting. Bepul sinov
        muddatini bugunoq boshlang!
      </p>

      <button
        class="btn_style flex items-center justify-center mx-auto gap-2 px-4 py-2 text-sm rounded-md mt-10"
      >
        Bepul ulanish
        <img src="../assets/icons/btn-icon.svg" alt="" class="size-4" />
      </button>

      <div class="">
        <h1 class="flex justify-start text-center font-bold text-[#000000] text-2xl mt-10 mb-10">
          Fresh bulutli subsistemasi
        </h1>
        <p>
          «1С:Предприятие 8 через Интернет» xizmati "1C" kompaniyasining Fresh bulutli kichik tizimi
          asosida yaratilgan. Bu texnologiya foydalanuvchilarga Internet orqali "1C:Korxona"
          platformasidagi amaliy yechimlarga kirish imkoniyatini beradi. Amaliy yechimlar xizmat
          ko‘rsatuvchi provayder uskunalarida yagona tizim sifatida joylashtiriladi,
          foydalanuvchilar esa bu yechimlar bilan Internet orqali brauzer yoki "1C:Korxona 8"ning
          yengil mijoz dasturi (thin client) yordamida ishlaydilar. Fresh kichik tizimi ichida
          apparat resurslarini sezilarli darajada tejash, xizmatni markazlashtirilgan boshqarish va
          texnik xizmat ko‘rsatish jarayonlarini avtomatlashtirish mexanizmlari mavjud. Bu har bir
          foydalanuvchi uchun xizmat narxini keskin kamaytiradi va xizmatlarni eng kam xarajatlar
          bilan taqdim etish imkonini yaratadi.
        </p>
        <img src="../assets/img/fourphoto.svg" alt="iskra" class="block mx-auto mt-10 mb-10" />
      </div>

      <h1 class="font-bold text-[#000000] text-2xl flex justify-center">
        Nega aynan 1C UZTELECOMni tanlash kerak?
      </h1>
      <p class="text-[#000000] text-2xl text-center max-w-3xl mx-auto leading-relaxed">
        Bu shunchaki "1C uchun bulut" emas — bu qulay, moslashuvchan va xavfsiz vosita bo‘lib, sizga
        texnik tafsilotlarga emas, balki biznesingizga e’tibor qaratish imkonini beradi. Siz kuchli
        hisob-kitob, hisobot va avtomatlashtirish funksiyalarini zamonaviy va qulay formatda qo‘lga
        kiritasiz.
      </p>
      <h1 class="font-bold text-[#000000] text-2xl flex justify-center py-12">
        Bizga habar yuboring
      </h1>
      <p class="text-[#000000] text-2xl text-center max-w-3xl mx-auto leading-relaxed">
        Savolingiz, taklifingiz yoki 1C UZTELECOM asosidagi yechimlarimiz haqida ko‘proq
        bilmoqchimisiz?  Biz bilan bog‘laning — doim aloqadamiz va yordam berishga tayyormiz!
      </p>
      <div class="min-h-screen flex items-center justify-center p-6">
        <form class="w-full max-w-lg space-y-6 p-6 rounded-2xl">
          <label class="block">
            <span class="text-lg font-semibold text-gray-800">Email:</span>
            <input
              type="email"
              placeholder="you@example.com"
              class="mt-2 block w-full rounded-xl border-gray-300 shadow-md focus:ring-2 focus:ring-indigo-500 px-4 py-3 text-lg"
            />
          </label>

          <label class="block">
            <span class="text-lg font-semibold text-gray-800">Ismingiz va familyangiz</span>
            <input
              type="text"
              placeholder="Ismingiz va familyangizni kiriting"
              class="mt-2 block w-full rounded-xl border-gray-300 shadow-md focus:ring-2 focus:ring-indigo-500 px-4 py-3 text-lg"
            />
          </label>

          <label class="block">
            <span class="text-lg font-semibold text-gray-800">Xabar</span>
            <input
              type="tel"
              placeholder="xabaringizni kiriting"
              class="mt-2 block w-full rounded-xl border-gray-300 shadow-md focus:ring-2 focus:ring-indigo-500 px-4 py-3 text-lg"
            />
          </label>

          <button
            type="submit"
            style="background-color: #174880"
            class="w-full text-white text-lg font-semibold py-3 rounded-xl shadow-md transition duration-200"
          >
            Yuborish
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.btn_style {
  color: white;
  background-color: #174880;
  width: 225px;
  height: 64px;
  border-radius: 10px;
}
</style>
