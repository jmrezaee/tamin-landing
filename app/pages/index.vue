<template>
  <div class="flex flex-col justify-between gap-8 bg-gray-50 h-dvh relative">
    <div class="flex flex-col gap-8 p-4">
      <div class="flex flex-col items-center gap-4 text-center">
        <Icon name="icon:ic-logo-type" />
        <span class="text-base font-semibold">
          شبکــه ملـی یـارانـه‌هــای متـمرکــز
        </span>
        <span class="text-sm text-gray-800 font-normal">
          لــورم ایـپســوم متن ساختـگی است کـه مـورد استفـاده طراحان قرار
          می‌گیرد.
        </span>
      </div>
      <div class="flex justify-center items-center">
        <img src="@/assets/images/image-intro.webp" />
      </div>
    </div>
    <div class="p-4 py-6 rounded-t-4xl bg-white sticky bottom-0 left-0 right-0">
      <LoginMobile />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="css"></style>
