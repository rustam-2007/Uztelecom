<template>
  <div class="flex justify-between items-center p-4">
    <nav class="flex items-center w-full justify-between px-6">
      <img src="../assets/icons/uztelecom.svg" alt="" />
      <ul>
        <li class="li_style">Xizmat haqida</li>
        <li class="li_style">Xizmat haqida</li>
        <li class="li_style">Xizmat haqida</li>
        <li class="li_style">Xizmat haqida</li>
        <li class="li_style">Xizmat haqida</li>
        <li class="li_style">Xizmat haqida</li>
      </ul>
      <button class="Login_btn">kirish</button>
      <button class="lang_class">Til</button>
      <img src="../assets/icons/theme-icon.svg" alt="" />
      <BurgerComponent />
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BurgerComponent from '@/components/BurgerComponent.vue'
</script>

<style>
.Login_btn {
  background-color: #174880;
  width: 101px;
  height: 52px;
  border-radius: 8px;
  color: white;
}

.lang_class {
  background-color: white;
  width: 101px;
  height: 52px;
  border-radius: 8px;
  color: #174880;
  border: 2px solid #174880;
  margin-left: 10px;
  font-weight: bold;
  font-size: 16px;
}
.li_style {
  display: inline;
  margin-left: 20px;
  font-weight: bold;
  font-size: 16px;
  color: #174880;
}
</style>
