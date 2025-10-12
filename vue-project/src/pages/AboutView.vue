<script setup lang="ts">
import AcardionComponent from '@/components/AcardionComponent.vue'
</script>

<template>
  <div class="flex justify-center">
    <div class="w-1/2">
      <p class="text-2xl font-bold text-[#000000]">1C UZTELECOM</p>
      <p>
        “1C:Предприятие 8” internet orqali ishlash xizmati (1C UZTELECOM) — “1C” kompaniyasi
        tomonidan ishlab chiqilgan va qo‘llab-quvvatlanadigan xizmat bo‘lib, bu kompaniya Rossiyada
        biznesni avtomatlashtirish bo‘yicha yetakchi hisoblanadi. Ushbu xizmat “1C:Предприятие”
        platformasidagi amaliy yechimlarga internet orqali masofadan kirish imkonini beradi va SaaS
        (xizmat sifatida dastur) modeli asosida ishlaydi. Bunday model ko‘pincha “bulutda ishlash”
        deb ataladi. 1C UZTELECOM orqali buxgalteriya va soliq hisobotlaringizni yuriting,
        hisobotlarni topshiring, biznesingizni nazorat qiling va boshqaring — bularning barchasi
        internet orqali!
      </p>
    </div>
    <div class="flex justifay-senter w-80 h-300">
      <img src="../assets/group.png" alt="" />
    </div>
  </div>
  <p class="flex justify-center text-2xl font-bold text-[#000000]h">1C UZTELECOM - bu nima?</p>
  <div class="img-style">
    <img src="../assets/about-main.png" alt="" />
    <p class="text-style font-bold text-[#000000] text-2xl mt-10 mb-10">
      1C UZTELECOM imkoniyatlai haqida <br />
      qisqa videoni tomosha qiling
    </p>
    <p class="text-style text-size: 20px text-[#363232]">
      Bulutli tizimda ish boshlash qanchalik oson ekanligini, xizmat qanday masalalarni halqilishini
      va <br />
      nega minglab buxgalterlar aynan 1C UZTELECOM’ni tanlaganini bilib oling.
    </p>
  </div>
  <video width="1120" height="1240" autoplay muted playsinline controls>
    <source src="../assets/video/uztelecom-video.mp4" type="video/mp4" />
  </video>
  <div>
    <h5>1C Uztelecom</h5>
    <h1>Xizmat afzalliklari</h1>
    <h1>24/7 onlayn kirish imkoniyati</h1>
    <p>
      1C UZTELECOMda istalgan vaqtda, istalgan joydan ishlashingiz mumkin — ofisda bo‘ling, uyda
      yoki safarda. Sizga faqat barqaror internet kerak, xolos. Endi biror kompyuterga yoki ofisga
      bog‘lanib qolishingiz shart emas: brauzeringizni oching va buxgalteriya ishlarini hoziroq
      boshlang.
    </p>
    <AcardionComponent></AcardionComponent>
  </div>
</template>

<style></style>
