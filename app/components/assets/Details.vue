<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-4 p-4">
    <span class="text-white font-semibold"> محمد مهدی سلیمانی </span>
    <div class="flex flex-col items-end">
      <span class="text-2xl text-white font-bold">
        {{ toCurrencyFixedString(165489752, 2) }}
      </span>
      <span class="text-sm text-white font-normal"> ریال </span>
    </div>
    <div class="flex flex-col gap-2">
      <NuxtLink
        class="flex justify-center items-center text-white p-4 rounded-2xl border border-solid border-white/30 bg-white/15 backdrop-blur-3xl cursor-pointer"
        :to="{ name: 'account-assets-otp' }"
      >
        دریافت رمز خرید
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="css"></style>
