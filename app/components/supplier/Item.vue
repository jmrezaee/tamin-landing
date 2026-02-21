<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-col gap-4 p-4 rounded-3xl border border-solid border-gray-100 bg-white"
  >
    <div class="flex flex-row items-center gap-2">
      <div
        class="flex justify-center items-center rounded-2xl size-12 bg-gray-50"
      >
        <Icon class="stroke-gray-400" name="icon:ic-shop" />
      </div>
      <div class="flex-1 flex flex-row justify-between items-center gap-2">
        <span class="text-xs sm:text-sm text-black font-medium">
          مشاهده پذیرندگان روی نقشه
        </span>
        <Icon class="stroke-blue-700 -rotate-90" name="icon:ic-cherv-left" />
      </div>
    </div>
    <div
      class="flex flex-col gap-2 p-4 rounded-xl border border-solid border-gray-100"
    >
      <span class="text-xs text-gray-500 font-medium"> آدرس: </span>
      <span class="text-xs text-black font-semibold">
        تهران، خیابان ولیعصر، نرسیده به پارک ساعی، پلاک ۱۲۳
      </span>
    </div>
    <div class="flex flex-row justify-between items-center gap-4">
      <div
        class="flex-1 flex flex-row justify-center items-center gap-2 px-2 py-4 sm:p-4 rounded-lg bg-gray-50 cursor-pointer"
      >
        <Icon class="stroke-blue-700 size-5" name="icon:ic-phone" />
        <span class="text-xs sm:text-sm text-black font-medium">
          تماس با فروشگاه
        </span>
      </div>
      <div
        class="flex-1 flex flex-row justify-center items-center gap-2 px-2 py-4 sm:p-4 rounded-lg bg-gray-50 cursor-pointer"
      >
        <Icon class="stroke-blue-700 size-5" name="icon:ic-direction" />
        <span class="text-xs sm:text-sm text-black font-medium">
          مسیریابی فروشگاه
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="css"></style>
