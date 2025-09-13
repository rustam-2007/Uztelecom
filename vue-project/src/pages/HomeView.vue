<template>
  <div class="flex items-center justify-between p-8">
    <!-- Chap qism (text + button) -->
    <div class="flex flex-col space-y-6 max-w-lg">
      <h1 class="text-6xl font-bold">
        UZTELECOMdan <br /> 1C bulutli xizmati
      </h1>

      <p class="text-lg text-gray-700">
        Buxgalteriya hisobini yuriting, savdo va <br />
        xizmatlaringizni dunyoning istalgan <br />
        nuqtasidan boshqaring.
      </p>

      <div class="flex space-x-4">
        <button class="free_btn">30 kun bepul</button>
        <button class="detail_btn_1">Batafsil</button>
      </div>
    </div>

    <!-- O‘ng qism (rasm) -->
    <div>
      <img
        src="../assets/img/main-img.png"
        class="w-[400px] h-auto"
      />
    </div>
  </div>

  <div>
    <h1 class="text_style">
      Ariza yuborish
    </h1>
  </div>
<div class="flex justify-center items-center space-x-8 mt-12 ">
      <div>
      <label class="container">
         <input type="checkbox" class="checkbox-round" />
  <span class="checkmark"></span>
        Yuridik shaxs
</label>
      <label class="container ml-10">
 <input type="checkbox" class="checkbox-round" />
  <span class="checkmark"></span>
        Jismoniy shaxs
</label>
    </div>
</div>

<div class="input_section">
  <div class="flex  justify-center  mt-8 ml-12  flex-col ">
  <h1 class="tashkilot_style">Tashkilot nomi</h1>
  <input placeholder="MChJ Namuna" class="input_style" type="text" name="" id="">
</div>
<div class="mr-24">
  <div class="input_section_2">
  <div class="flex  justify-center  mt-8 px-8  flex-col mr-10">
    <h1 class="tashkilot_style_1">STIR</h1>
  <input placeholder="123456789" class="input_style" type="text" name="" id="">
</div>
</div>
</div>
</div>
<div class="flex flex-col">
  <h1 class=" ml-40">F.I.Sh *</h1>
  <input placeholder="Zuxriddin Akbarov Xusanovich" class="input_1" type="text">
    <h1 class="ml-40">Telefon *</h1>
  <input placeholder="example@email.com" class="input_1" type="text">
    <h1 class="ml-40">Email *</h1>
  <input placeholder="+998 (33) 123 45 67" class="input_1" type="text">
</div>

</template>

<style>
.free_btn {
  background-color: #174880;
  width: 167px;
  height: 56px;
  color: white;
  padding: 10px 20px;
  border-radius: 16px;
  font-weight: bold;
}

.detail_btn {
  background-color: white;
  width: 167px;
  height: 5
}

.detail_btn_1{
  background-color: white;
  width: 167px;
  height: 56px;
  color: #174880;
  padding: 10px 20px;
  border-radius: 16px;
  font-weight: bold;
  border: 2px solid #174880;
}

.text_style{
  font-size: 36px;
  font-weight: 700;
  margin-left: 198px;
  margin-top: 50px;
  padding-top: 180px;
}
.checkbox-round {
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 2px solid #ddd;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
}
.checkbox-round:checked {
    background-color: #174880;
}
.input_style{
  width: 500px;
  height: 50px;
  border: 1px solid #174880;
  border-radius: 8px;
  margin-left: 198px;
  margin-top: 20px;
  padding-right: 60px;
}
.tashkilot_style{
  font-size: 14px;
  margin-left: 198px;
  font-weight:bold;
  margin-top: 8px;
  padding-left: 6px;
}
.input::placeholder {
font-size: 16px;
font-family: Body/Base - Medium;
line-height: 160%;
color:#A1A5AA;
}
.input_section{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: -4rem;
  margin-left: 2rem;
  padding-bottom: -2rem;
}
.input_section_2{
margin-right: 6px;
padding-right:10px;
}
.input_1{
  width: 870px;
  height: 56px;
  border: 1px solid #A1A5AA;
  border-radius: 8px;
  margin-left: 198px;
  margin-top: 20px;
}
.tashkilot_style_1{
  font-size: 14px;
  margin-left: 198px;
  font-weight:bold;
  margin-right: 80px;
}

</style>
